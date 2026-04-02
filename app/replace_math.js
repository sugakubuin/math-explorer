import fs from 'fs';
import path from 'path';

const directoryPath = 'd:\\Antigravity_pj\\math-explorer\\app\\src\\contents';

function processFileRegex(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modifications = 0;

    // A regex to match $something$ as long as it doesn't contain braces or dollar signs or newlines
    // Make sure we don't accidentally match something like `${variable}` or `\$`
    const regex = /(?<!\\)\$([^${}\n]+?)(?<!\\)\$/g;

    const newContent = content.replace(regex, (match, mathContent) => {
        modifications++;
        // Math expressions in react-katex shouldn't contain unescaped " if injected via math=""
        // But usually they don't.
        const cleanMath = mathContent.trim().replace(/"/g, '&quot;');
        return `<InlineMath math="${cleanMath}" />`;
    });

    if (modifications > 0) {
        console.log(`Updated ${modifications} occurrences in: ${filePath}`);
        fs.writeFileSync(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}

function processDirectory(dir) {
    let changedFiles = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            changedFiles += processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            if (processFileRegex(fullPath)) {
                changedFiles++;
            }
        }
    }
    return changedFiles;
}

const numChanged = processDirectory(directoryPath);
console.log(`Total files updated: ${numChanged}`);
