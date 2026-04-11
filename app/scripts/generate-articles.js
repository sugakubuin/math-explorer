import { GoogleGenAI } from "@google/genai";
import fs from "fs-extra";
import path from "path";

// ==========================================
// 設定
// ==========================================
const API_KEY = "[ENCRYPTION_KEY]";
const GUIDE_FILE = "./docs/AGENT_CONTENT_GUIDE.md";
const SYLLABUS_DIR = "../references/syllabus";
const OUTPUT_BASE_DIR = "./src/contents";

// モデル設定（ユーザー様指定の名称を維持）
const MODEL_NAME = "gemini-3.1-pro-preview";

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * シラバス(MD)を解析して、章とセクションのリストを抽出する
 */
async function parseSyllabus(topicId) {
    const filename = `syllabus_${topicId}.md`;
    const filePath = path.join(SYLLABUS_DIR, filename);

    if (!await fs.pathExists(filePath)) {
        throw new Error(`シラバスファイルが見つかりません: ${filePath}`);
    }

    const content = await fs.readFile(filePath, "utf-8");
    const sections = [];
    let currentChapterId = "";
    let currentChapterTitle = "";

    const lines = content.split('\n');
    for (const line of lines) {
        // Chapter 抽出 (## Chapter 1: Title)
        const chapterMatch = line.match(/^## Chapter\s+(\d+):\s*(.*)/i);
        if (chapterMatch) {
            currentChapterId = chapterMatch[1];
            currentChapterTitle = chapterMatch[2];
            continue;
        }

        // Section 抽出 (### §1.1 Title)
        const sectionMatch = line.match(/^### §(\d+\.\d+)\s*(.*)/);
        if (sectionMatch) {
            const sectionId = sectionMatch[1];
            const sectionTitle = sectionMatch[2];

            sections.push({
                topicId,
                chapterId: currentChapterId,
                chapterTitle: currentChapterTitle,
                sectionId,
                title: sectionTitle,
                rawContent: ""
            });
            continue;
        }

        if (sections.length > 0) {
            sections[sections.length - 1].rawContent += line + "\n";
        }
    }

    return sections;
}

/**
 * 1記事生成
 */
async function generateArticle(cacheName, article, guideText) {
    const topicDash = article.topicId.replace('_', '_');
    const fileName = `section${topicDash}_${article.sectionId}.tsx`;
    const outputDir = path.join(OUTPUT_BASE_DIR, `topic${topicDash}`, `chapter${article.chapterId}`);
    const filePath = path.join(outputDir, fileName);

    if (await fs.pathExists(filePath)) {
        console.log(`⏩ スキップ (既に存在します): ${fileName}`);
        return;
    }

    const prompt = `
タイトル: ${article.title}
スラッグ: ${fileName.replace('.tsx', '')}
説明: ${article.chapterTitle} - ${article.title}
内容詳細: 
${article.rawContent}

ガイドとシラバスに厳密に従って、完全なTSXファイルを作成してください。
出力は以下のJSON形式のみで（余計な説明は一切なし）：
{
  "fileName": "${fileName}",
  "content": "ここに完全なTSXコードを書く（export default function Article() { ... }）"
}
`;

    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            config: {
                thinkingConfig: { thinkingLevel: "low" },  // 最安の鍵：Low思考レベル
                cachedContent: cacheName,
            },
        });

        const jsonStr = response.text.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim();
        let result;
        try {
            result = JSON.parse(jsonStr);
        } catch (e) {
            console.warn(`⚠️ JSON.parseに失敗しました。正規表現による抽出を試みます...`);
            // "content": "..." の中身を最短一致で抽出
            const contentMatch = jsonStr.match(/"content":\s*"([\s\S]*?)"\s*}/);
            if (contentMatch) {
                let extractedContent = contentMatch[1];
                // エスケープされた文字を元に戻す
                extractedContent = extractedContent
                    .replace(/\\n/g, "\n")
                    .replace(/\\"/g, '"')
                    .replace(/\\t/g, "\t")
                    .replace(/\\\\/g, "\\");

                result = {
                    fileName: fileName,
                    content: extractedContent
                };
            } else {
                console.error("❌ 正規表現による抽出にも失敗しました。レスポンスの形式が想定外です。");
                throw e;
            }
        }

        await fs.ensureDir(outputDir);
        await fs.writeFile(filePath, result.content, "utf-8");

        console.log(`✅ 生成完了: ${filePath}`);
    } catch (error) {
        console.error(`❌ 生成失敗 (${fileName}):`, error.message);
    }
}

/**
 * キャッシュの作成
 */
async function createCache(guideText, topicId, syllabusRaw) {
    console.log("📦 ガイドとシラバスをキャッシュ中...");
    try {
        const cache = await ai.caches.create({
            model: MODEL_NAME,
            config: {
                displayName: `Math Article Guide Cache - ${topicId}`,
                systemInstruction: guideText,
                contents: [{ role: "user", parts: [{ text: `シラバスMD内容: ${syllabusRaw}` }] }],
                ttl: "3600s",
            },
        });
        console.log("✅ キャッシュ作成完了:", cache.name);
        return cache.name;
    } catch (e) {
        console.warn("⚠️ キャッシュの作成に失敗しました（モデルが未対応または無効です）。キャッシュなしで続行します。");
        console.warn("エラー理由:", e.message);
        return null;
    }
}

/**
 * メイン実行
 */
async function main() {
    const topicId = process.argv[2];
    if (!topicId) {
        console.error("使用法: node scripts/generate-articles.js <topicId> (例: 4_3)");
        process.exit(1);
    }

    const guideText = await fs.readFile(GUIDE_FILE, "utf-8");
    const sections = await parseSyllabus(topicId);

    // シラバスの中身もキャッシュに含めるための元テキスト取得
    const syllabusPath = path.join(SYLLABUS_DIR, `syllabus_${topicId}.md`);
    const syllabusRaw = await fs.readFile(syllabusPath, "utf-8");

    console.log(`🚀 トピック ${topicId} の記事生成を開始します (${sections.length} セクション)`);

    const cacheName = await createCache(guideText, topicId, syllabusRaw);

    for (const section of sections) {
        await generateArticle(cacheName, section, guideText);
        await new Promise(r => setTimeout(r, 1500));
    }

    console.log("🎉 すべての記事生成が完了しました！");
}

main().catch(console.error);
