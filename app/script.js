import fs from 'fs';
import path from 'path';

const directoryPath = 'd:\\Antigravity_pj\\math-explorer\\app\\src\\contents';

const targetMark = `                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\\square" />
                </div>`;

function processFileRegex(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modifications = 0;

    const regex = /(<ContentBox\s+[^>]*type="proof"[^>]*>)([\s\S]*?)(<\/ContentBox>)/g;

    // First, let's remove ALL existing proof marks inside the Proof box globally.
    // This includes floating blocks, right-aligned divs, and raw symbols at the end of lists, etc.
    const markRegex = /<div[^>]*className="[^"]*(?:text-right|float-right)[^"]*"[^>]*>[\s\S]*?(?:■|\\square|\\blacksquare|<InlineMath[^>]*>[\s\S]*?<\/InlineMath>)[\s\S]*?<\/div>|<span[^>]*className="[^"]*(?:text-right|float-right)[^"]*"[^>]*>[\s\S]*?(?:■|\\square|\\blacksquare|<InlineMath[^>]*>[\s\S]*?<\/InlineMath>)[\s\S]*?<\/span>/g;

    // Remove isolated marks
    const isolatedMarkRegex = /\\square/g;

    const newContent = content.replace(regex, (match, openTag, innerContent, closeTag) => {
        let trimmedInner = innerContent;
        let changed = false;

        // Strip known structural marks
        if (markRegex.test(trimmedInner)) {
            trimmedInner = trimmedInner.replace(markRegex, '');
            changed = true;
        }

        // Clean up any remaining targetMarks that got added in the previous run globally inside the ContentBox
        if (trimmedInner.includes(targetMark.trim())) {
            // Let's just remove the target mark and append exactly one at the very end
            let cleanTarget = targetMark.trim();
            // Escape special characters for regex, although doing string replace in a loop is safer
            while (trimmedInner.includes(cleanTarget)) {
                trimmedInner = trimmedInner.replace(cleanTarget, '');
            }
        }

        // Remove trailing spaces / newlines
        trimmedInner = trimmedInner.trimEnd();

        // Also clean up trailing `\square` if any user placed it
        if (trimmedInner.endsWith('\\square')) {
            trimmedInner = trimmedInner.slice(0, -7).trimEnd();
            changed = true;
        }

        // Remove empty div tags that might have been left if there was something like <div className="text-right"></div>
        const emptyDivRegex = /<div[^>]*className="[^"]*(?:text-right|float-right)[^"]*"[^>]*>\s*<\/div>/g;
        if (emptyDivRegex.test(trimmedInner)) {
            trimmedInner = trimmedInner.replace(emptyDivRegex, '').trimEnd();
            changed = true;
        }

        // If nothing changed from previous run, and the content already EXACTLY matched our desired output
        // We wouldn't want to increment modifications.
        // Let's compare what we are about to output with the original `match`
        const finalReplacement = openTag + trimmedInner + '\n' + targetMark + '\n            ' + closeTag;

        if (finalReplacement !== match) {
            modifications++;
            return finalReplacement;
        }

        return match;
    });

    if (modifications > 0) {
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
                console.log(`Updated: ${fullPath}`);
                changedFiles++;
            }
        }
    }
    return changedFiles;
}

const numChanged = processDirectory(directoryPath);
console.log(`Total files updated: ${numChanged}`);
