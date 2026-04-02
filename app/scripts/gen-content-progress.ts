/**
 * roadmapData と src/contents の実ファイルを照合し、
 * docs/CONTENT_PROGRESS.md を再生成する。
 *
 * 実行: cd app && npx tsx scripts/gen-content-progress.ts
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { roadmapData } from '../src/data/roadmapData';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const contentsRoot = path.join(appRoot, 'src', 'contents');
const outFile = path.join(appRoot, 'docs', 'CONTENT_PROGRESS.md');

function topicFormatted(topicId: string): string {
    return topicId.replace('-', '_');
}

function topicDir(topicId: string): string {
    return `topic${topicFormatted(topicId)}`;
}

function sectionPath(topicId: string, chapterId: string, sectionId: string): string {
    return path.join(
        contentsRoot,
        topicDir(topicId),
        `chapter${chapterId}`,
        `section${topicFormatted(topicId)}_${sectionId}.tsx`
    );
}

function exercisesPath(topicId: string, chapterId: string): string {
    return path.join(
        contentsRoot,
        topicDir(topicId),
        `chapter${chapterId}`,
        `exercises${topicFormatted(topicId)}_${chapterId}.tsx`
    );
}

function exists(p: string): boolean {
    try {
        return fs.statSync(p).isFile();
    } catch {
        return false;
    }
}

function checkbox(done: boolean): string {
    return done ? '[x]' : '[ ]';
}

const lines: string[] = [];
lines.push('# コンテンツ進捗シート');
lines.push('');
lines.push('`roadmapData` 上の各トピック・チャプターについて、**教材（その章の全 `section*.tsx`）**と**演習（`exercises*.tsx` 1 本）**の実装状況を 1 行で示します。');
lines.push('');
lines.push('## 記号');
lines.push('');
lines.push('- **Section** … その章に定義されている全セクション分の `section{topic}_{§}.tsx` が揃っていれば `[x]`（1 つでも欠ければ `[ ]`）');
lines.push('- **Exercise** … `exercises{topic}_{chapter}.tsx` があれば `[x]`');
lines.push('');
lines.push('## メンテナンス');
lines.push('');
lines.push('- 教材: そのチャプターのセクション教材が揃ったら **Section** を `[x]` に（`AGENT_CONTENT_GUIDE.md`）。');
lines.push('- 演習: 演習ファイルを届けたら **Exercise** を `[x]` に（`AGENT_EXERCISE_GUIDE.md`）。');
lines.push('- 実ファイルと一致させる: `app` で `npx tsx scripts/gen-content-progress.ts` を実行して再生成。');
lines.push('');

for (const stage of roadmapData) {
    lines.push(`## ${stage.title}`);
    lines.push('');
    lines.push('| Topic | Chapter | Section | Exercise |');
    lines.push('| :---- | :-----: | :-----: | :------: |');

    for (const topic of stage.topics) {
        for (const chapter of topic.chapters) {
            const allSectionsOk = chapter.sections.every((sec) =>
                exists(sectionPath(topic.id, chapter.id, sec.id))
            );
            const exOk = exists(exercisesPath(topic.id, chapter.id));
            lines.push(
                `| ${topic.id} | ${chapter.id} | ${checkbox(allSectionsOk)} | ${checkbox(exOk)} |`
            );
        }
    }

    lines.push('');
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log('Wrote', path.relative(appRoot, outFile));
