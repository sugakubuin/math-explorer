const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, 'app', 'src', 'data', 'roadmapData.ts');
const genPath = path.join(__dirname, 'generated_stages.txt');

const ts = fs.readFileSync(tsPath, 'utf8');
const gen = fs.readFileSync(genPath, 'utf8');

// Find start
const startMatch = ts.match(/\{\s*id:\s*"stage-3",/);
if (!startMatch) {
    console.error("Could not find start match!");
    process.exit(1);
}
const startIdx = startMatch.index;

// Find end
const endMatch = ts.match(/\];\s*export const getTopicById/);
if (!endMatch) {
    console.error("Could not find end match!");
    process.exit(1);
}
const endIdx = endMatch.index;

console.log("Found start at", startIdx, "and end at", endIdx);

const newTs = ts.substring(0, startIdx) + gen + ts.substring(endIdx);
fs.writeFileSync(tsPath, newTs);
console.log("Replaced and saved successfully.");
