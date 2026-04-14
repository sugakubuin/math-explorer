import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { roadmapData } from "../src/data/roadmapData";
import type { Chapter, Stage, Topic } from "../src/data/roadmapData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT = path.resolve(__dirname, "../../references/roadmap_overview_detail.md");

function stageOverviewLabel(stage: Stage): string {
    if (stage.id === "stage-applied") return "応用系";
    return stage.id.replace(/^stage-/i, "Stage-");
}

function stageMarkdownHeading(stage: Stage): string {
    if (stage.id === "stage-applied") return "## 応用数学系分野";
    return `## ${stage.title}`;
}

function escapeTableCell(s: string): string {
    return s.replace(/\|/g, "\\|");
}

function formatPrerequisites(p: string[]): string {
    return p.join("、");
}

function renderTopicTableRow(topic: Topic): string {
    const prereq = formatPrerequisites(topic.prerequisites);
    return `| ${escapeTableCell(topic.id)} | ${escapeTableCell(topic.title)} | ${escapeTableCell(prereq)} |`;
}

function renderChapterSection(ch: Chapter): string[] {
    const lines: string[] = [];
    lines.push(`- **第${ch.id}章: ${ch.title}**`);
    if (ch.description?.trim()) {
        lines.push(`  - ${ch.description}`);
    }
    for (const sec of ch.sections) {
        const desc = sec.description?.trim();
        if (desc) {
            lines.push(`  - ${sec.id}: ${sec.title} (${desc})`);
        } else {
            lines.push(`  - ${sec.id}: ${sec.title}`);
        }
    }
    return lines;
}

function renderTopicBlock(topic: Topic): string {
    const head = [`### ${topic.id}: ${topic.title}`, `前提: ${formatPrerequisites(topic.prerequisites)}`];
    const body = topic.chapters.flatMap((ch) => renderChapterSection(ch));
    return [...head, ...body].join("\n");
}

function buildDocument(): string {
    const parts: string[] = [];

    parts.push("# [詳細版] 大学数学 全分野学習ロードマップ");
    parts.push("");

    for (const stage of roadmapData) {
        parts.push(stageMarkdownHeading(stage));
        parts.push("");
        parts.push("| ID | タイトル | 前提 |");
        parts.push("|---|---|---|");
        for (const topic of stage.topics) {
            parts.push(renderTopicTableRow(topic));
        }
        parts.push("");
    }

    parts.push("---");
    parts.push("");
    parts.push("## トピック数まとめ");
    parts.push("");
    parts.push("| ステージ | トピック数 |");
    parts.push("|---|---|");

    let total = 0;
    for (const stage of roadmapData) {
        const n = stage.topics.length;
        total += n;
        parts.push(`| ${stageOverviewLabel(stage)} | ${n} |`);
    }
    parts.push(`| **合計** | **${total}** |`);
    parts.push("");
    parts.push("---");
    parts.push("");
    parts.push("## 各トピックの章構成");
    parts.push("");

    const topicBlocks: string[] = [];
    for (const stage of roadmapData) {
        for (const topic of stage.topics) {
            topicBlocks.push(renderTopicBlock(topic));
        }
    }
    parts.push(topicBlocks.join("\n\n"));
    parts.push("");

    return parts.join("\n");
}

const md = buildDocument();
fs.writeFileSync(OUT, md, "utf8");
console.log(`Wrote ${OUT} (${md.length} chars)`);
