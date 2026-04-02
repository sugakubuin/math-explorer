const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/roadmapData.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let newLines = [];
let insideSectionsArray = false;

// Regex to match the compact object format: { id: "...", title: "...", description: "..." },?
// We want to capture the closing brace and comma to insert before it.
const objectRegex = /^(\s*\{ id: "[^"]+", title: "[^"]+", description: "[^"]+" )(\},?)$/;
// Handle cases with escaped quotes if any (unlikely in this file but good practice) - simplified here.

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // precision check for starting sections array
    if (line.includes('sections: [')) {
        insideSectionsArray = true;
    }

    if (insideSectionsArray) {
        newLines.push(line);
        // Check for closing of sections array.
        // Assuming formatted as "                    ]," or "                ],"
        if (line.trim() === '],' || line.trim() === ']') {
            insideSectionsArray = false;
        }
        continue;
    }

    // specific check for Topic 1-1 Chapter 1 which I manually expanded?
    // The script logic says: if it's NOT in sections array, and matches regex, update it.
    // My manually expanded chapters are multi-line, so they won't match regex.
    // My manually added sections are inside "sections: [", so insideSectionsArray=true, so stripped.

    // Check if line matches the compact Chapter format
    const match = line.match(objectRegex);
    if (match) {
        // match[1] is the part up to description end quote
        // match[2] is "}," or "}"
        // We want to insert ", sections: []"
        const newLine = `${match[1]}, sections: [] ${match[2]}`;
        newLines.push(newLine);
    } else {
        newLines.push(line);
    }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Migration completed.');
