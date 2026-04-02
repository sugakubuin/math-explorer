import fs from 'fs';
import path from 'path';
import { roadmapData } from '../src/data/roadmapData';

function generateMarkdown() {
    let simpleContent = '# 大学数学 全分野学習ロードマップ（シンプル版）\n\n---\n\n';
    let detailContent = '# 大学数学 全分野学習ロードマップ\n\n';

    let totalTopics = 0;
    const summaryData: { stage: string, count: number }[] = [];

    // Table generation
    for (const stage of roadmapData) {
        let stageHeading = '';
        if (stage.id === 'stage-applied') {
            stageHeading = '## 応用数学系分野';
        } else {
            stageHeading = `## ${stage.title}`;
        }
        const stageSummaryName = stage.id === 'stage-applied' ? '応用系' : (stage.title.split('：')[0] || stage.title);

        simpleContent += `${stageHeading}\n\n`;
        detailContent += `${stageHeading}\n\n`;

        const tableHeader = '| ID | タイトル | 前提 |\n|---|---|---|\n';
        simpleContent += tableHeader;
        detailContent += tableHeader;

        for (const topic of stage.topics) {
            const preReq = topic.prerequisites && topic.prerequisites.length > 0 ? topic.prerequisites.join('、') : '';
            const row = `| ${topic.id} | ${topic.title} | ${preReq} |\n`;
            simpleContent += row;
            detailContent += row;
        }

        simpleContent += '\n---\n\n';

        summaryData.push({ stage: stageSummaryName, count: stage.topics.length });
        totalTopics += stage.topics.length;
    }

    // Summary Section
    const summaryHeader = '## トピック数まとめ\n\n| ステージ | トピック数 |\n|---|---|\n';
    let summaryBody = '';
    for (const data of summaryData) {
        summaryBody += `| ${data.stage} | ${data.count} |\n`;
    }
    summaryBody += `| **合計** | **${totalTopics}** |\n`;

    simpleContent += summaryHeader + summaryBody;

    // For detail:
    detailContent += summaryHeader + summaryBody;
    detailContent += '\n---\n\n## 各トピックの章構成\n\n';

    for (const stage of roadmapData) {
        for (const topic of stage.topics) {
            detailContent += `### ${topic.id}: ${topic.title}\n`;
            const preReq = topic.prerequisites && topic.prerequisites.length > 0 ? topic.prerequisites.join('、') : 'なし';
            detailContent += `前提: ${preReq}\n\n`;

            if (topic.chapters) {
                for (const chap of topic.chapters) {
                    detailContent += `- **第${chap.id}章: ${chap.title}**\n`;
                    if (chap.description) {
                        detailContent += `  - ${chap.description}\n`;
                    }
                    if (chap.sections) {
                        for (const sec of chap.sections) {
                            if (sec.description) {
                                detailContent += `  - ${sec.id}: ${sec.title} (${sec.description})\n`;
                            } else {
                                detailContent += `  - ${sec.id}: ${sec.title}\n`;
                            }
                        }
                    }
                }
            }
            detailContent += '\n';
        }
    }

    const simpleFile = path.resolve(process.cwd(), '../references/roadmap_overview_simple.md');
    const detailFile = path.resolve(process.cwd(), '../references/roadmap_overview_detail.md');

    fs.writeFileSync(simpleFile, simpleContent.trim() + '\n');
    fs.writeFileSync(detailFile, detailContent.trim() + '\n');

    console.log('Markdown files generated successfully.');
}

generateMarkdown();
