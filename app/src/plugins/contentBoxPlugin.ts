import type { Plugin } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

/**
 * ビルド時にコンテンツファイルをスキャンし、
 * ContentBox のメタデータを仮想モジュール virtual:content-box-data として提供する Vite プラグイン。
 */

const VIRTUAL_MODULE_ID = 'virtual:content-box-data';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

const TARGET_TYPES = ['definition', 'theorem', 'lemma', 'proposition', 'corollary'];

interface ExtractedMeta {
    type: string;
    title: string;
    topicId: string;
    chapterId: string;
    sectionId: string;
}

/**
 * ファイルパスからトピック・チャプター・セクション情報を抽出する。
 * パス例: .../contents/topic2_1/chapter1/section2_1_1.1.tsx
 */
function parseFilePath(filePath: string): { topicId: string; chapterId: string; sectionId: string } | null {
    const normalized = filePath.replace(/\\/g, '/');
    const match = normalized.match(/\/contents\/topic(\d+_\d+)\/chapter(\d+)\/section\d+_\d+_(\d+\.\d+)\.tsx$/);
    if (!match) return null;
    return {
        topicId: match[1].replace('_', '-'),
        chapterId: match[2],
        sectionId: match[3],
    };
}

/**
 * JSX式のタイトルからテキスト表現を抽出する。
 * <InlineMath math="..." /> は LaTeX 表記に変換し、残りの JSX タグは除去する。
 */
function cleanJsxTitle(raw: string): string {
    return raw
        // <> と </> を除去
        .replace(/^<>/, '')
        .replace(/<\/>$/, '')
        // <span> と </span> を除去
        .replace(/^<span>/, '')
        .replace(/<\/span>$/, '')
        // <InlineMath math="..." /> → $...$
        .replace(/<InlineMath\s+math="([^"]*)"\s*\/>/g, (_, math) => `$${math}$`)
        // 残りの JSX タグを除去
        .replace(/<[^>]+>/g, '')
        .trim();
}

/**
 * TSXファイルのソースコードから ContentBox エントリを抽出する。
 */
function extractContentBoxes(source: string, fileMeta: { topicId: string; chapterId: string; sectionId: string }): ExtractedMeta[] {
    const entries: ExtractedMeta[] = [];
    const seenTitles = new Set<string>();

    // パターン1: title="..." (文字列リテラル)
    const stringTitleRegex = /<ContentBox\s+type="([^"]+)"\s+title="([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = stringTitleRegex.exec(source)) !== null) {
        const [, type, title] = m;
        if (TARGET_TYPES.includes(type)) {
            entries.push({ type, title, ...fileMeta });
            seenTitles.add(title);
        }
    }

    // パターン2: title={<>...</>} (JSXフラグメント)
    const jsxFragmentRegex = /<ContentBox\s+type="([^"]+)"\s+title=\{<>([\s\S]*?)<\/>\}/g;
    while ((m = jsxFragmentRegex.exec(source)) !== null) {
        const [, type, rawContent] = m;
        if (!TARGET_TYPES.includes(type)) continue;
        const title = cleanJsxTitle(rawContent);
        if (title && !seenTitles.has(title)) {
            entries.push({ type, title, ...fileMeta });
            seenTitles.add(title);
        }
    }

    // パターン3: title={<span>...</span>} (JSX span 式)
    const jsxSpanRegex = /<ContentBox\s+type="([^"]+)"\s+title=\{<span>([\s\S]*?)<\/span>\}/g;
    while ((m = jsxSpanRegex.exec(source)) !== null) {
        const [, type, rawContent] = m;
        if (!TARGET_TYPES.includes(type)) continue;
        const title = cleanJsxTitle(rawContent);
        if (title && !seenTitles.has(title)) {
            entries.push({ type, title, ...fileMeta });
            seenTitles.add(title);
        }
    }

    return entries;
}

/**
 * contents ディレクトリ以下の全セクションファイルを再帰的に走査する。
 */
function scanContentDir(contentsDir: string): ExtractedMeta[] {
    const allMeta: ExtractedMeta[] = [];

    if (!fs.existsSync(contentsDir)) return allMeta;

    const topicDirs = fs.readdirSync(contentsDir).filter(d =>
        d.startsWith('topic') && fs.statSync(path.join(contentsDir, d)).isDirectory()
    );

    for (const topicDir of topicDirs) {
        const topicPath = path.join(contentsDir, topicDir);
        const chapterDirs = fs.readdirSync(topicPath).filter(d =>
            d.startsWith('chapter') && fs.statSync(path.join(topicPath, d)).isDirectory()
        );

        for (const chapterDir of chapterDirs) {
            const chapterPath = path.join(topicPath, chapterDir);
            const files = fs.readdirSync(chapterPath).filter(f =>
                f.startsWith('section') && f.endsWith('.tsx')
            );

            for (const file of files) {
                const filePath = path.join(chapterPath, file);
                const fileMeta = parseFilePath(filePath);
                if (!fileMeta) continue;

                const source = fs.readFileSync(filePath, 'utf-8');
                const entries = extractContentBoxes(source, fileMeta);
                allMeta.push(...entries);
            }
        }
    }

    return allMeta;
}

export default function contentBoxPlugin(): Plugin {
    let contentsDir = '';

    return {
        name: 'vite-plugin-content-box-data',
        configResolved(config) {
            contentsDir = path.resolve(config.root, 'src/contents');
        },
        resolveId(id) {
            if (id === VIRTUAL_MODULE_ID) {
                return RESOLVED_VIRTUAL_MODULE_ID;
            }
        },
        load(id) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                const data = scanContentDir(contentsDir);
                return `export default ${JSON.stringify(data, null, 2)};`;
            }
        },
    };
}
