const fs = require('fs');
const mdContent = fs.readFileSync('references/roadmap_overview_detail.md', 'utf8');

const lines = mdContent.split('\n');

const stagesMap = {
    '1': { id: 'stage-1', title: 'Stage-1：教養としての数学', topics: [] },
    '2': { id: 'stage-2', title: 'Stage-2：基本的な数学', topics: [] },
    '3': { id: 'stage-3', title: 'Stage-3：広がる数学', topics: [] },
    '4': { id: 'stage-4', title: 'Stage-4：より高度な数学', topics: [] },
    '5': { id: 'stage-5', title: 'Stage-5：より専門的な数学', topics: [] },
    'A': { id: 'stage-applied', title: '応用数学系分野', topics: [] }
};

let currentTopic = null;
let currentChapter = null;

const topicMatch = /^### ([\w-]+): (.+)/;
const prereqMatch = /^前提: (.+)/;
const chapterMatch = /^- \*\*第(\d+)章: (.+)\*\*/;
const sectionMatch = /^  - (\d+\.\d+): (.+?) \((.+)\)/;
const chapDescMatch = /^  - (.+)/;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimRight();

    const tm = line.match(topicMatch);
    if (tm) {
        currentTopic = {
            id: tm[1],
            title: tm[2].trim(),
            chapters: [],
            prerequisites: []
        };
        const stagePrefix = currentTopic.id.split('-')[0];
        if (stagesMap[stagePrefix]) {
            stagesMap[stagePrefix].topics.push(currentTopic);
        }
        currentChapter = null;
        continue;
    }

    if (!currentTopic) continue;

    const pm = line.match(prereqMatch);
    if (pm) {
        currentTopic.prerequisites = pm[1].split('、').map(s => s.trim());
        continue;
    }

    const cm = line.match(chapterMatch);
    if (cm) {
        currentChapter = {
            id: cm[1],
            title: cm[2],
            description: "",
            sections: []
        };
        currentTopic.chapters.push(currentChapter);
        continue;
    }

    if (!currentChapter) continue;

    const secM = line.match(sectionMatch);
    if (secM) {
        currentChapter.sections.push({
            id: secM[1],
            title: secM[2].trim(),
            description: secM[3].trim()
        });
        continue;
    }

    const cdm = line.match(chapDescMatch);
    if (cdm) {
        if (!currentChapter.description) {
            currentChapter.description = cdm[1].trim();
        } else {
            currentChapter.description += " " + cdm[1].trim();
        }
        continue;
    }
}

const stages = [
    stagesMap['1'], stagesMap['2'], stagesMap['3'], stagesMap['4'], stagesMap['5'], stagesMap['A']
];

// Generate TS output
let tsOutput = `export interface Section {
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

export const roadmapData: Stage[] = [
`;

stages.forEach((stage, sIdx) => {
    tsOutput += `    {
        id: "${stage.id}",
        title: "${stage.title}",
        topics: [
`;
    stage.topics.forEach((topic, tIdx) => {
        tsOutput += `            {
                id: "${topic.id}",
                title: "${topic.title}",
                chapters: [\n`;

        topic.chapters.forEach((chapter, cIdx) => {
            let descStr = chapter.description ? `, description: ${JSON.stringify(chapter.description)}` : '';
            tsOutput += `                    {\n`;
            tsOutput += `                        id: "${chapter.id}", title: "${chapter.title}"${descStr},\n`;
            if (chapter.sections.length === 0) {
                tsOutput += `                        sections: []\n`;
            } else {
                tsOutput += `                        sections: [\n`;
                chapter.sections.forEach((sec, secIdx) => {
                    let comma = secIdx < chapter.sections.length - 1 ? ',' : '';
                    tsOutput += `                            { id: "${sec.id}", title: "${sec.title}", description: "${sec.description}" }${comma}\n`;
                });
                tsOutput += `                        ]\n`;
            }
            let cComma = cIdx < topic.chapters.length - 1 ? ',' : '';
            tsOutput += `                    }${cComma}\n`;
        });

        let prereqsStr = `["${topic.prerequisites.join('", "')}"]`;
        let tComma = tIdx < stage.topics.length - 1 ? ',' : '';
        tsOutput += `                ],
                prerequisites: ${prereqsStr}
            }${tComma}\n`;
    });
    let sComma = sIdx < stages.length - 1 ? ',' : '';
    tsOutput += `        ]
    }${sComma}\n`;
});

tsOutput += `];

export const getAllTopics = (): Topic[] => {
    return roadmapData.flatMap(stage => stage.topics);
};

export const getTopicById = (id: string): Topic | undefined => {
    return getAllTopics().find(topic => topic.id === id);
};

export const getStageByTopicId = (topicId: string): Stage | undefined => {
    return roadmapData.find(stage => stage.topics.some(topic => topic.id === topicId));
};
`;

fs.writeFileSync('app/src/data/roadmapData.ts', tsOutput, 'utf8');
console.log("Successfully generated roadmapData.ts based on roadmap_overview_detail.md");
