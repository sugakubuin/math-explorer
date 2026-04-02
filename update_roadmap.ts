import fs from 'fs';
import { roadmapData } from './app/src/data/roadmapData';

const simpleMdPath = './references/roadmap_overview_simple (1).md';
const content = fs.readFileSync(simpleMdPath, 'utf8');

const tsOutputPath = './app/src/data/roadmapData.ts';
const mdOutputPath = './references/roadmap_overview_new.md';

// 1. Build a map of existing topics to retrieve their chapters
const topicChaptersMap = new Map<string, any[]>();
for (const stage of roadmapData) {
    for (const topic of stage.topics) {
        topicChaptersMap.set(topic.title.trim(), topic.chapters);
        // Also map just the base name, e.g., "微分方程式" if title is "微分方程式I"
        const baseNameMatch = topic.title.match(/^(.+?)(I|II|III)?$/);
        if (baseNameMatch) {
            topicChaptersMap.set(baseNameMatch[1].trim(), topic.chapters);
        }
    }
}

// Function to find chapters
function getChaptersForTopic(title: string): any[] {
    if (topicChaptersMap.has(title)) {
        return topicChaptersMap.get(title)!;
    }
    const baseNameMatch = title.trim().match(/^(.+?)(I|II|III)?$/);
    if (baseNameMatch && topicChaptersMap.has(baseNameMatch[1].trim())) {
        return topicChaptersMap.get(baseNameMatch[1].trim())!;
    }
    console.warn(`[WARNING] No existing chapters found for topic: ${title}`);
    return [];
}

const lines = content.split('\n');
const newStages: any[] = [];
let currentStage: any = null;

let mdOutput = `# 大学数学 全分野学習ロードマップ\n\n`;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    const stageMatch = line.match(/^##\s+(.+)$/);
    if (stageMatch) {
        const stageTitle = stageMatch[1].trim();
        let stageId = `stage-${newStages.length + 1}`;
        if (stageTitle.includes('応用数学系分野')) {
            stageId = 'stage-applied';
        }

        currentStage = {
            id: stageId,
            title: stageTitle,
            topics: []
        };
        newStages.push(currentStage);

        mdOutput += `## ${stageTitle}\n\n`;
        mdOutput += `| ID | タイトル | 前提 |\n`;
        mdOutput += `|---|---|---|\n`;
        continue;
    }

    if (line.startsWith('|') && !line.includes('---|---|---') && !line.includes('ID | タイトル | 前提') && !line.includes('トピック数 |')) {
        const columns = line.split('|').map(c => c.trim()).filter(c => c !== '');

        // Exclude the 'トピック数まとめ' table rows
        if (columns.length === 3 && currentStage && currentStage.id !== 'トピック数まとめ') {
            const [id, title, reqsStr] = columns;

            let prerequisites: string[] = [];
            if (reqsStr !== 'なし') {
                prerequisites = reqsStr.split('、').map(r => r.trim());
            }

            const chapters = getChaptersForTopic(title);

            currentStage.topics.push({
                id,
                title,
                chapters,
                prerequisites
            });

            mdOutput += `| ${id} | ${title} | ${reqsStr} |\n`;
        }
    }
}

// Write the TS file
let tsCode = `export interface Section {
    id: string; // e.g. "1.1"
    title: string;
    description?: string;
}

export interface Chapter {
    id: string;
    title: string;
    description?: string;
    sections: Section[];
}

export interface Topic {
    id: string; // e.g. "1-1"
    title: string; // e.g. "線形代数学I"
    chapters: Chapter[];
    prerequisites: string[];
}

export interface Stage {
    id: string; // e.g. "stage-1"
    title: string; // e.g. "Stage-1：教養としての数学"
    topics: Topic[];
}

export const roadmapData: Stage[] = ${JSON.stringify(newStages, null, 4)};\n`;

// Clean up JSON output to look more like standard TS
tsCode = tsCode.replace(/"([^"]+)":/g, '$1:');
// Keep string values as double quotes since JSON does that.

fs.writeFileSync(tsOutputPath, tsCode, 'utf8');
console.log(`Generated ${tsOutputPath}`);

// Generate the rest of mdOutput (the chapter details)
mdOutput += `\n---\n\n## 各トピックの章構成\n\n`;
for (const stage of newStages) {
    if (!stage.title) continue;

    // We don't want to print 'トピック数まとめ'
    if (stage.title.includes('トピック数まとめ')) continue;

    for (const topic of stage.topics) {
        mdOutput += `### ${topic.id}: ${topic.title}\n`;
        if (topic.prerequisites.length > 0) {
            mdOutput += `前提: ${topic.prerequisites.join('、')}\n\n`;
        } else {
            mdOutput += `前提: なし\n\n`;
        }
        for (const chapter of topic.chapters) {
            mdOutput += `- **第${chapter.id}章: ${chapter.title}**\n`;
            if (chapter.description) {
                mdOutput += `  - ${chapter.description}\n`;
            }
            if (chapter.sections && chapter.sections.length > 0) {
                for (const section of chapter.sections) {
                    mdOutput += `  - ${section.id}: ${section.title}`;
                    if (section.description) {
                        mdOutput += ` (${section.description})`;
                    }
                    mdOutput += `\n`;
                }
            }
        }
        mdOutput += `\n`;
    }
}

fs.writeFileSync(mdOutputPath, mdOutput, 'utf8');
console.log(`Generated ${mdOutputPath}`);
