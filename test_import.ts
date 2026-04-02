import fs from 'fs';
import { roadmapData } from './app/src/data/roadmapData';

console.log("Loaded roadmapData with stages:", roadmapData.length);
console.log("Stage 1 topics:", roadmapData[0].topics.length);

const simpleMdPath = './references/roadmap_overview_simple (1).md';
const content = fs.readFileSync(simpleMdPath, 'utf8');

console.log("Read simple markdown file, length:", content.length);
