const fs = require('fs');

const content = fs.readFileSync('references/roadmap_overview_detail.md', 'utf8');

const newTables = `## Stage-5：より専門的な数学

### 解析系

| ID | タイトル | 前提 |
|---|---|---|
| 5-1 | 調和解析 | 3-5、4-1 |
| 5-2 | 偏微分方程式 | 3-6、4-1 |
| 5-3 | 確率的偏微分方程式 | 4-14、5-2 |
| 5-4 | ランダム行列理論 | 3-7、4-1 |
| 5-5 | 多変数複素解析 | 4-2、4-4 |
| 5-6 | 解析的数論 | 4-2 |
| 5-7 | モジュラー形式 | 5-6 |
| 5-8 | 作用素環論 | 4-1 |
| 5-9 | エルゴード理論 | 3-7、4-1 |

### 代数系

| ID | タイトル | 前提 |
|---|---|---|
| 5-10 | ホモロジー代数 | 3-15、4-7 |
| 5-11 | 代数幾何II | 4-11、5-10 |
| 5-12 | リー群とリー代数 | 4-4 |
| 5-13 | 表現論 | 3-10、4-1、5-12 |
| 5-14 | 代数数論 | 4-9、4-10、4-13 |
| 5-15 | ディオファントス幾何 | 5-11、5-14 |
| 5-16 | p進幾何・perfectoid空間 | 5-11、5-14 |

### 幾何系・その他

| ID | タイトル | 前提 |
|---|---|---|
| 5-17 | シンプレクティック幾何学 | 3-6、4-5 |
| 5-18 | 低次元位相幾何学 | 4-8 |
| 5-19 | 幾何学的群論 | 4-4、4-7 |
| 5-20 | K理論 | 5-10 |
| 5-21 | 非可換幾何 | 5-8、5-20 |
| 5-22 | ホモトピー型理論 | 3-14、3-15、4-7 |
| 5-23 | 超準解析 | 4-16 |
| 5-24 | 集合論II | 4-16 |

---

## 応用数学系分野

| ID | タイトル | 前提 |
|---|---|---|
| A-1 | グラフ理論 | 高校数学 |
| A-2 | 組合せ論 | 高校数学 |
| A-3 | 最適化理論 | 2-1、2-2 |
| A-4 | 最適輸送理論 | 3-1、4-3 |
| A-5 | 数値解析 | 2-6 |
| A-6 | 制御理論 | 3-4 |
| A-7 | 符号理論 | 2-1、3-10 |
| A-8 | 暗号理論 | 3-10、4-13 |
| A-9 | 数理ファイナンス | 4-14 |
| A-10 | ゲーム理論 | 2-1、3-7 |
| A-11 | 数理物理学 | 5-2、5-8、5-17 |

---

## トピック数まとめ

| ステージ | トピック数 |
|---|---|
| Stage-1 | 2 |
| Stage-2 | 7 |
| Stage-3 | 15 |
| Stage-4 | 16 |
| Stage-5 | 24 |
| 応用系 | 11 |
| **合計** | **75** |`;

const match = content.match(/([\s\S]*?)## Stage-5：より専門的な数学[\s\S]*?## 各トピックの章構成/);
if (!match) {
    console.error("Could not match the top part");
    process.exit(1);
}

let topPart = match[1];

let newTop = topPart + newTables + "\n\n---\n\n## 各トピックの章構成\n\n";

// Map to parse old chapters
// We separate the document into an array of sections starting with ###
let chaptersPart = content.split('## 各トピックの章構成')[1];
let chapterBlocks = chaptersPart.split(/\n(?=### )/);

let oldChaptersMap = {};

chapterBlocks.forEach(block => {
    let lines = block.trim().split('\n');
    if (lines.length > 0 && lines[0].startsWith('### ')) {
        let titleMatch = lines[0].match(/### (\w+-\d+):/);
        if (titleMatch) {
            let id = titleMatch[1];
            oldChaptersMap[id] = block.trim();
        }
    }
});

const newDefinitions = [
    { id: "5-1", title: "調和解析", prereq: "3-5、4-1", oldId: "5-7" },
    { id: "5-2", title: "偏微分方程式", prereq: "3-6、4-1", oldId: "5-6" },
    { id: "5-3", title: "確率的偏微分方程式", prereq: "4-14、5-2", oldId: null },
    { id: "5-4", title: "ランダム行列理論", prereq: "3-7、4-1", oldId: null },
    { id: "5-5", title: "多変数複素解析", prereq: "4-2、4-4", oldId: "5-10" },
    { id: "5-6", title: "解析的数論", prereq: "4-2", oldId: "5-14" },
    { id: "5-7", title: "モジュラー形式", prereq: "5-6", oldId: "5-15" },
    { id: "5-8", title: "作用素環論", prereq: "4-1", oldId: "5-8" },
    { id: "5-9", title: "エルゴード理論", prereq: "3-7、4-1", oldId: "5-9" },
    { id: "5-10", title: "ホモロジー代数", prereq: "3-15、4-7", oldId: "5-1" },
    { id: "5-11", title: "代数幾何II", prereq: "4-11、5-10", oldId: "5-2" },
    { id: "5-12", title: "リー群とリー代数", prereq: "4-4", oldId: "5-3" },
    { id: "5-13", title: "表現論", prereq: "3-10、4-1、5-12", oldId: "5-4" },
    { id: "5-14", title: "代数数論", prereq: "4-9、4-10、4-13", oldId: "5-5" },
    { id: "5-15", title: "ディオファントス幾何", prereq: "5-11、5-14", oldId: null },
    { id: "5-16", title: "p進幾何・perfectoid空間", prereq: "5-11、5-14", oldId: null },
    { id: "5-17", title: "シンプレクティック幾何学", prereq: "3-6、4-5", oldId: "5-11" },
    { id: "5-18", title: "低次元位相幾何学", prereq: "4-8", oldId: "5-12" },
    { id: "5-19", title: "幾何学的群論", prereq: "4-4、4-7", oldId: "5-18" },
    { id: "5-20", title: "K理論", prereq: "5-10", oldId: "5-13" },
    { id: "5-21", title: "非可換幾何", prereq: "5-8、5-20", oldId: null },
    { id: "5-22", title: "ホモトピー型理論", prereq: "3-14、3-15、4-7", oldId: "5-17" },
    { id: "5-23", title: "超準解析", prereq: "4-16", oldId: "5-16" },
    { id: "5-24", title: "集合論II", prereq: "4-16", oldId: null },

    { id: "A-1", title: "グラフ理論", prereq: "高校数学", oldId: "A-1" },
    { id: "A-2", title: "組合せ論", prereq: "高校数学", oldId: "A-2" },
    { id: "A-3", title: "最適化理論", prereq: "2-1、2-2", oldId: "A-3" },
    { id: "A-4", title: "最適輸送理論", prereq: "3-1、4-3", oldId: null },
    { id: "A-5", title: "数値解析", prereq: "2-6", oldId: "A-4" },
    { id: "A-6", title: "制御理論", prereq: "3-4", oldId: "A-5" },
    { id: "A-7", title: "符号理論", prereq: "2-1、3-10", oldId: "A-6" },
    { id: "A-8", title: "暗号理論", prereq: "3-10、4-13", oldId: "A-7" },
    { id: "A-9", title: "数理ファイナンス", prereq: "4-14", oldId: "A-8" },
    { id: "A-10", title: "ゲーム理論", prereq: "2-1、3-7", oldId: "A-9" },
    { id: "A-11", title: "数理物理学", prereq: "5-2、5-8、5-17", oldId: null }
];

let finalOutput = newTop;

// Add 1-x to 4-x blocks (unchanged, just copy them)
const orderOfIds = [];
Object.keys(oldChaptersMap).forEach(key => {
    if (key.startsWith('1-') || key.startsWith('2-') || key.startsWith('3-') || key.startsWith('4-')) {
        finalOutput += oldChaptersMap[key] + "\n\n";
    }
});

// Process 5-x and A-x
newDefinitions.forEach(def => {
    let block = '';
    if (def.oldId && oldChaptersMap[def.oldId]) {
        block = oldChaptersMap[def.oldId];
        // replace title line
        block = block.replace(/^### [\w-]+: .*/m, `### ${def.id}: ${def.title}`);
        // replace prereq line
        block = block.replace(/^前提: .*/m, `前提: ${def.prereq}`);
    } else {
        // New block
        block = `### ${def.id}: ${def.title}\n前提: ${def.prereq}\n\n- **第1章: 未定**\n  - ${def.title}の基礎`;
    }
    finalOutput += block + "\n\n";
});

// Remove trailing trailing newlines
finalOutput = finalOutput.trim() + "\n";

fs.writeFileSync('references/roadmap_overview_detail.md', finalOutput, 'utf8');
console.log("Updated roadmap_overview_detail.md successfully.");
