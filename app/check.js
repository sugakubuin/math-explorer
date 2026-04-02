import fs from 'fs';
import path from 'path';

const directoryPath = 'd:\\Antigravity_pj\\math-explorer\\app\\src\\contents';
let issuesFound = 0;

function checkFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /(<ContentBox\s+[^>]*type="proof"[^>]*>)([\s\S]*?)(<\/ContentBox>)/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        let inner = match[2];
        const countMarks = (inner.match(/\\square/g) || []).length;
        if (countMarks === 0) {
            console.log('MISSING mark in:', filePath);
            issuesFound++;
        } else if (countMarks > 1) {
            console.log('MULTIPLE marks (' + countMarks + ') in:', filePath);
            issuesFound++;
        }

        if (inner.includes('■') || inner.includes('\\blacksquare')) {
            console.log('OLD MARK found in:', filePath);
            issuesFound++;
        }
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            checkFile(fullPath);
        }
    }
}

processDirectory(directoryPath);
if (issuesFound === 0) console.log('All clear!');
