# Agent Exercise Creation Guidelines

This document outlines the standards for creating **exercise content** (演習問題) in the Math Explorer application. Future agents MUST follow these guidelines to ensure consistency. For section content (教材) creation, refer to `AGENT_CONTENT_GUIDE.md`.

**Progress sheet:** After delivering an exercise file, update **`app/docs/CONTENT_PROGRESS.md`** (see §6.1). You may run `npx tsx scripts/gen-content-progress.ts` from `app/` to regenerate the sheet from disk.

## 0. Source Material: Chapter Section Files (Not the Syllabus)

**CRITICAL**: When designing problems for a chapter, the agent MUST base coverage, notation, and numbering (Definition / Theorem / Example labels) on the **implemented section components** in the repository — **not** on `references/syllabus/`.

- **Why**: Not every topic has a syllabus file under `references/syllabus/` (e.g. topic `1-1`). Even when a syllabus exists, the shipped exercises must align with what learners actually read in the app, which is the content under `src/contents/`.
- **What to read**: **ALL** section files for that chapter. You MUST open and read **every single section file** in the chapter directory to ensure full coverage of the actual taught material.

  ```
  src/contents/topic{X_Y}/chapter{N}/section{X_Y}_{sectionId}.tsx
  ```

  Example for topic `1-1`, chapter `3`: `section1_1_3.1.tsx`, `section1_1_3.2.tsx`, … matching the sections listed in `roadmapData` for that chapter.

- **Relationship to `AGENT_CONTENT_GUIDE.md`**: Section authoring may require strict adherence to `references/syllabus/` when that file exists and defines the chapter. **Exercise authoring does not substitute the syllabus for this step**; read the actual `section*.tsx` files for the target chapter and mirror their definitions, theorems, and scope.
- **Workflow**: Before writing `exercises{X_Y}_{N}.tsx`, open every `section{X_Y}_*.tsx` in the same `chapter{N}/` folder, skim headings and `ContentBox` titles, and distribute problems so each section’s ideas appear in the set (see §3.2).

## 1. File Structure & Naming

### 1.1 File Location

Exercise files live alongside section files:

```
src/contents/topic{X_Y}/chapter{N}/exercises{X_Y}_{N}.tsx
```

**Examples:**
| Topic   | Chapter | File path                                               |
|:--------|:--------|:--------------------------------------------------------|
| `1-1`   | `1`     | `src/contents/topic1_1/chapter1/exercises1_1_1.tsx`     |
| `2-3`   | `5`     | `src/contents/topic2_3/chapter5/exercises2_3_5.tsx`     |
| `3-15`  | `8`     | `src/contents/topic3_15/chapter8/exercises3_15_8.tsx`   |

### 1.2 Registration

No manual registration is needed. `ExercisePage.tsx` uses dynamic imports to load exercise files automatically based on URL parameters (`/roadmap/:topicId/:chapterId/exercises`). Simply create the correctly named file in the correct directory.

### 1.3 Function Naming

Use a descriptive export name in the format `Exercises{TopicId}_Chapter{N}`. Do NOT use generic names like `ExerciseContent`.

```tsx
export default function Exercises1_1_Chapter1() { ... }
export default function Exercises2_3_Chapter5() { ... }
```

## 2. Components

Exercise files use three dedicated components from `src/components/content/ExerciseComponents.tsx`.

### 2.1 ExerciseCategory

Groups problems by difficulty level.

```tsx
import { ExerciseCategory } from '../../../components/content/ExerciseComponents';

<ExerciseCategory type="confirmation">  {/* 確認問題 (green) */}
    ...
</ExerciseCategory>

<ExerciseCategory type="basic">          {/* 基本問題 (blue) */}
    ...
</ExerciseCategory>

<ExerciseCategory type="advanced">       {/* 発展問題 (amber) */}
    ...
</ExerciseCategory>
```

**CRITICAL**: Always use all three categories in the order above: `confirmation` → `basic` → `advanced`.

### 2.2 ExerciseProblem

Wraps a single problem. Displays as "問題 X.Y" with underline, followed by the problem body.

```tsx
import { ExerciseProblem } from '../../../components/content/ExerciseComponents';

<ExerciseProblem chapterId="1" number={3}>
    <p>Problem statement...</p>
    <BlockMath math="..." />
    <ExerciseSolution>
        ...
    </ExerciseSolution>
</ExerciseProblem>
```

**Props:**
| Prop        | Type     | Description                                          |
|:------------|:---------|:-----------------------------------------------------|
| `chapterId` | `string` | Chapter ID (e.g. `"1"`, `"5"`). Shown in "問題 X.Y". |
| `number`    | `number` | Problem number within the chapter. Sequential across all categories (not restarting per category). |

**CRITICAL**: Problem numbers MUST start from **1** for every chapter exercise file and be sequential across all three categories (1, 2, 3, ..., 10). Do NOT use cumulative numbering across the entire topic (e.g., do NOT start Chapter 2 at 11).

### 2.3 ExerciseSolution

Collapsible solution block placed inside `ExerciseProblem`. Hidden by default; revealed via "解答を見る" toggle button.

```tsx
import { ExerciseSolution } from '../../../components/content/ExerciseComponents';

<ExerciseSolution>
    <p>Solution steps...</p>
    <BlockMath math="..." />
</ExerciseSolution>
```

**CRITICAL**: Every `ExerciseProblem` MUST contain exactly one `ExerciseSolution` as the last child element.

## 3. Problem Design Guidelines

### 3.1 Total Problem Count

Each exercise file should contain approximately **10 problems** (8–12 is acceptable), distributed as follows:

| Category       | Type Label | Count   | Purpose                                  |
|:---------------|:-----------|:--------|:-----------------------------------------|
| `confirmation` | 確認問題   | 3 問程度 | 基本的な定義・概念の確認                 |
| `basic`        | 基本問題   | 4 問程度 | 計算問題や簡単な証明問題                 |
| `advanced`     | 発展問題   | 3 問程度 | 応用・発展的な証明問題                   |

### 3.2 Coverage

- **Ground truth**: Use the chapter’s **`section{X_Y}_*.tsx` files** (see §0) to decide what is “in scope” for that chapter — not a separate syllabus document.
- Problems MUST cover material from **all sections** that have content files in that chapter folder (if a section file is missing, follow `roadmapData` sections but only assign problems for concepts that appear in existing files).
- **Focus on the current chapter**: While math is cumulative, the "core" of every problem (especially confirmation and basic) should be the definitions, theorems, and concepts introduced **specifically in this chapter**. Avoid situations where a problem's primary difficulty stems from concepts taught in previous chapters or expected in future ones.
- The progression should roughly follow the section file order: earlier sections → later sections.
- 確認問題 should focus on early/foundational material; 発展問題 may combine concepts from multiple sections.
- When citing results in solutions, use the **same English labels and numbers** as in those section files (e.g. `Theorem 3.4-1`, `Definition 2.2-2`).
- **Remark references**: Since Remarks in section files do not have numbers, never assign numeric labels to them. Refer to them using the format `§x.x 備考` or `§x.x 備考 (Title)`.

### 3.3 Difficulty Calibration

| Category   | Characteristics                                                                  |
|:-----------|:---------------------------------------------------------------------------------|
| 確認問題   | Basic definitions and concepts. Single-step; directly applies one definition or formula; no proof required. |
| 基本問題   | Computational problems or simple proofs. Multi-step computation; may combine two concepts; may include simple justification. |
| 発展問題   | Applied or advanced proofs. Requires multiple theorems/definitions; may generalize or extend results; rigorous proofs. **Requirement**: Problems in this category MUST be formulated as rigorous "proof" problems (e.g., "Prove that...", "Show that..."). Simple naming or recall problems (e.g. "What is the name of this theorem?") are NOT permitted. |

### 3.4 Solution Quality

- **Complete solutions**: Every solution MUST show the full derivation, not just the final answer.
- **Rigor and Detail**: Solutions MUST be mathematically rigorous and provide detailed, step-by-step reasoning. For improper integrals, this includes defining the contour, justifying why integrals over certain paths vanish, and showing the limit process clearly.
- **Reference definitions/theorems**: Solutions should explicitly cite which definition, theorem, or proposition is being used (e.g., "Definition 1.1-3 より" or "Theorem 1.4-1 を用いて").
- **Remark references**: Always refer to Remarks using the section number (e.g., "§1.1 備考より"). Never use numeric labels like "Remark 1.1-1" as they do not exist in the section files.
- **Proof-based Problems (Advanced)**: Every problem in the `advanced` category MUST be a rigorous proof problem. The question should be phrased as "〜を証明せよ" (Prove that...) or "〜を示せ" (Show that...). The solution must follow a logical sequence and conclude with a right-aligned `\square`:
  ```tsx
  <p className="text-right"><InlineMath math="\square" /></p>
  ```
- **Sub-problems**: When a problem has multiple parts (e.g., (1), (2)), separate each part's solution clearly with `<p className="mt-4">` or similar spacing.

## 4. Styling & Math

- **Bolding (Strict)**: Never use markdown bolding `**text**`. You MUST use `<b>text</b>` or `<strong>text</strong>` tags exclusively inside JSX.
- **Labels (No Bolding)**: Do NOT use `<b>` or `<strong>` tags for theorem, definition, or example labels (e.g., use "Theorem 1.1-1" or "Definition 2.1-2", NOT "<b>Theorem 1.1-1</b>"). These should be in regular font to maintain consistency with the section files.
- **Remark Numbering (Prohibited)**: Never assign numeric labels to Remarks (e.g., do NOT use "Remark 1.1-1"). In exercise files, always refer to them as "§x.x 備考" or "§x.x 備考 (Title)" to match the section files.
- **Math rendering (Strict)**: Use `<InlineMath>` and `<BlockMath>` exclusively. Never use raw `$...$` or `$$...$$`. Even a single symbol must be wrapped in `<InlineMath>`.
- **Layout & Aligned formulas**: For multi-step calculations or long proofs, use the `\begin{aligned}...\end{aligned}` environment to align equal signs or logical steps. This improves readability significantly on both desktop and mobile.
- **Problem text tone**: Use the imperative form (常体) for problem statements — "〜を求めよ", "〜を証明せよ", "〜を示せ".
- **Solution text tone**: Use the standard "da/dearu" tone (常体) — "〜である", "〜が成り立つ", "〜を得る".

## 5. Example Template

```tsx
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function ExercisesX_Y_ChapterN() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="N" number={1}>
                    <p>Problem statement using <InlineMath math="..." /> goes here.</p>
                    <BlockMath math="..." />
                    <ExerciseSolution>
                        <p>Solution explanation referencing Definition X.X-X...</p>
                        <BlockMath math="..." />
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* More confirmation problems... */}

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="N" number={4}>
                    <p>Problem statement...</p>
                    <ExerciseSolution>
                        <p>Solution...</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* More basic problems... */}

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="N" number={8}>
                    <p>Prove that...</p>
                    <BlockMath math="..." />
                    <ExerciseSolution>
                        <p>Proof steps...</p>
                        <BlockMath math="..." />
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                {/* More advanced problems... */}

            </ExerciseCategory>
        </div>
    );
}
```

## 6. Post-Creation Checklist

After creating exercise content, the agent MUST verify the following.

### 6.1 Technical Checks
- [ ] **Progress sheet**: Regenerate `app/docs/CONTENT_PROGRESS.md` by running `npx tsx scripts/gen-content-progress.ts` from `app/`. **Avoid manual editing** to prevent formatting errors and row mismatches.
- [ ] **Build check**: Run `npx tsc -b` in `app/` — no type or syntax errors.
- [ ] **Math components**: All math uses `<InlineMath>` / `<BlockMath>` — no raw `$` or `$$`.
- [ ] **Unused imports**: Remove any unused imports.
- [ ] **Function name**: Uses the pattern `Exercises{TopicId}_Chapter{N}`, not a generic name.
- [ ] **Import path depth**: `ExerciseComponents` import depth matches file location (e.g. `../../../components/...`).

### 6.2 Content & Quality Checks
- [ ] **Section files read**: All `section{X_Y}_*.tsx` files in `src/contents/.../chapter{N}/` for this chapter were reviewed before writing exercises (§0).
- [ ] **All three categories present**: `confirmation` → `basic` → `advanced`, in that order.
- [ ] **~10 problems total**: 3 confirmation + 4 basic + 3 advanced (approximately).
- [ ] **Sequential numbering**: Problem numbers run 1 through N across all categories without restart.
- [ ] **`chapterId` prop**: Every `ExerciseProblem` has the correct `chapterId` string.
- [ ] **Full chapter coverage**: Problems span all sections **as implemented** in those section files, not just the first or last.
- [ ] **Complete solutions**: Every problem has a full derivation inside `ExerciseSolution`, not just a final answer.
- [ ] **Rigor**: Solutions provide detailed, mathematically rigorous reasoning (e.g. limit processes, path estimations for integrals) (§3.4).
- [ ] **Proof end marks**: All proof-type solutions end with `\square` right-aligned.
- [ ] **Theorem/definition references**: Solutions cite specific definitions or theorems by label (e.g., "Definition 1.1-3 より").
- [ ] **Remark references**: Solutions refer to remarks using the section number (`§1.1 備考 より`) and do NOT use numeric labels like `Remark 1.1-1`.
- [ ] **Mobile-friendly math**: Long formulas use `aligned` or are split into multiple blocks.
- [ ] **Bolding & Math Syntax**: No `**` bolding (use `<b>`); no `$` math (use `<InlineMath>`).
- [ ] **Tone consistency**: Problem statements use 常体 imperative ("求めよ", "示せ"); solutions use 常体.
