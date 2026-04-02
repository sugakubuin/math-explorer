const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'references', 'roadmap_overview_new.md');
const tsPath = path.join(__dirname, 'app', 'src', 'data', 'roadmapData.ts');

const mdContent = fs.readFileSync(mdPath, 'utf8');

const stages = [];
let currentStage = null;
let currentTopic = null;

const lines = mdContent.split('\n');

for (let line of lines) {
    line = line.trim();
    if (line.startsWith('## ')) {
        const title = line.substring(3).trim();
        let idStr = title.split('：')[0].toLowerCase();
        if (idStr.startsWith('stage')) {
            // normal stage
        } else if (title.includes('応用数学系分野')) {
            idStr = 'stage-applied';
        } else if (title.includes('トピック数まとめ')) {
            break;
        }

        currentStage = {
            id: idStr,
            title: title,
            topics: []
        };
        stages.push(currentStage);
        currentTopic = null;
    } else if (line.startsWith('### [')) {
        if (!currentStage) continue;
        // e.g. ### [3-1] 実解析II
        const match = line.match(/^### \[([^\]]+)\]\s*(.+)$/);
        if (match) {
            currentTopic = {
                id: match[1],
                title: match[2],
                chapters: [],
                prerequisites: []
            };
            currentStage.topics.push(currentTopic);
        }
    } else if (line.startsWith('**前提トピック：**')) {
        if (currentTopic) {
            const reqStr = line.replace('**前提トピック：**', '').trim();
            if (reqStr !== 'なし' && reqStr !== '') {
                // Split by 、 or ,
                const reqs = reqStr.split(/[、,]/).map(s => s.trim()).filter(s => s);
                currentTopic.prerequisites = reqs;
            }
        }
    } else if (line.startsWith('|') && !line.includes('| Ch |') && !line.includes('|---|---|---|')) {
        if (currentTopic) {
            const parts = line.split('|').map(s => s.trim()).filter(s => s);
            if (parts.length >= 3 && !isNaN(parseInt(parts[0]))) {
                currentTopic.chapters.push({
                    id: parts[0],
                    title: parts[1],
                    description: parts[2],
                    sections: []
                });
            }
        }
    }
}

// Now we have the stages parsed from MD. We only want to replace stage-3 to stage-applied.
// Let's read the current TS file.
// It's a bit hard to parse TS safely with regex, but we know the structure.
// Instead of full parsing, let's output the TS for stage-3 onwards, and we can replace it.

let tsCode = ``;

for (let stage of stages) {
    if (['stage-1', 'stage-2'].includes(stage.id)) continue;

    tsCode += `    {\n`;
    tsCode += `        id: "${stage.id}",\n`;
    tsCode += `        title: "${stage.title}",\n`;
    tsCode += `        topics: [\n`;
    for (let topic of stage.topics) {
        tsCode += `            {\n`;
        tsCode += `                id: "${topic.id}",\n`;
        tsCode += `                title: "${topic.title}",\n`;
        tsCode += `                chapters: [\n`;
        for (let ch of topic.chapters) {
            tsCode += `                    { id: "${ch.id}", title: "${ch.title}", description: "${ch.description}", sections: [] },\n`;
        }
        tsCode += `                ],\n`;
        if (topic.prerequisites.length > 0) {
            tsCode += `                prerequisites: ${JSON.stringify(topic.prerequisites)}\n`;
        } else {
            tsCode += `                prerequisites: []\n`;
        }
        tsCode += `            },\n`;
    }
    tsCode += `        ]\n`;
    tsCode += `    },\n`;
}

fs.writeFileSync('generated_stages.txt', tsCode);
console.log('Generated TS code to generated_stages.txt');

