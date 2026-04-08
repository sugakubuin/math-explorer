# Agent Content Creation Guidelines

This document outlines the standards for creating educational content in the Math Explorer application. Future agents MUST follow these guidelines to ensure consistency.

## 0. Content progress sheet (mandatory)

After **adding or completing** section content (`section*.tsx`) for a topic/chapter, you MUST record progress in **`app/docs/CONTENT_PROGRESS.md`**: for that **Topic** and **Chapter** row, set the **Section** column to `[x]` once **all** roadmap-listed section files for that chapter exist on disk.

To **sync the sheet with files on disk**, run from `app/`: `npx tsx scripts/gen-content-progress.ts`.

Do not leave the progress sheet outdated after a content delivery.

## Refined Topic Page:
    - Chapter cards now display "Chapter X." in gray, followed by the title.
    - Added a list of sections within each chapter card for better overview.
- **Refined Chapter Page**:
    - Reverted to sans-serif font for better readability.
    - Styled topic ID as a colored box.
    - "Chapter X." in the title is now styled gray.
- **Refined Section Page**:
    - Added a header displaying Topic ID (colored box), Topic Title, and Chapter Title (gray "Chapter X.") above the section title.
- **Content Restructuring**:
    - Moved content files to `src/contents/topic1_1/chapter1/` with a naming convention like `section1_1_1.1.tsx` to improve organization.
    - Updated imports in `SectionPage.tsx` and verified build with `npx tsc -b`.
    - "Chapter X." is now grayed out in the title.
- **Content Structure**:
    - Refactored `src/contents` to a hierarchical structure: `topicX_Y/chapterZ/section...`.

## 1. Content Structure

Content is organized locally: `Topic -> Chapter -> Section`.
- **Pages**: Located in `src/pages/`.
- **Content Components**: Located in `src/contents/<topic_id>/`.
- **Granularity**: Each **Section** (e.g., 1.1) should have its own component file following the naming convention `section{topicId}_{sectionId}.tsx` (e.g., `section1_1_1.1.tsx`).
- **Registration**: There is no need to manually import or register new content components in `src/pages/SectionPage.tsx`. The application uses Dynamic Imports to automatically load the component based on the URL parameters and the predefined file structure. Simply create the properly named file in the correct directory.

## 2. Styling & Components

We use **Tailwind CSS** and a custom `ContentBox` component for semantic blocks.

### 2.1 ContentBox Component

Use the `ContentBox` component for all definitions, theorems, examples, etc.

**Import:**
```tsx
import ContentBox from '../../components/content/ContentBox';
```

**Usage:**
```tsx
<ContentBox type="definition" title="Definition 1.1-1 (ベクトル)">
    Content goes here...
</ContentBox>
```

**Titles with Math:**
If the title contains mathematical formulas, you MUST pass a JSX element to the `title` prop instead of a string. Wrap the title in a `<span>` and use `<InlineMath>` for the formulas.
**CRITICAL**: Do NOT use `title="Theorem 1.1 ($P_i$)"` or `title="Theorem 1.1 (<InlineMath math='P_i' />)"`.
```tsx
<ContentBox type="theorem" title={<span>Theorem 1.1 (<InlineMath math="P_i" />)</span>}>
    Content goes here...
</ContentBox>
```

**Types & Colors:**

| Type          | Color Theme | Usage                                      |
|:--------------|:------------|:-------------------------------------------|
| `definition`  | **Blue**    | Definitions of terms, symbols.             |
| `theorem`     | **Purple**  | Theorems, Lemmas, Propositions.            |
| `lemma`       | **Purple**  | Helper theorems.                           |
| `proposition` | **Purple**  | Important statements.                      |
| `axiom`       | **Red**     | Axioms.                                    |
| `example`     | **Green**   | Concrete numerical examples.               |
| `proof`       | **Yellow**  | Proofs of theorems (Use Amber in code).    |
| `remark`      | **Gray**    | Supplementary notes, pitfalls, tips.       |
| `note`        | **Gray**    | Section summaries (e.g., §X.X のまとめ).       |
| `column`      | **Red**     | Motivation, historical context, "Coffee Break".|

For proofs that immediately follow a theorem or proposition, the title should simply be `"Proof"`. This avoids redundancy when it is clear from the context which proposition is being proved.

### 2.2 Typography & Math

- **Math**: Use `react-katex` components: `<InlineMath>` for inline, `<BlockMath>` for display. 
  - **CRITICAL**: Do NOT use raw LaTeX delimiters like `$P_i$` or `$$...$$` directly in the JSX text. You MUST ALWAYS write out the component, e.g., `<InlineMath math="P_i" />`. This applies to all content, including regular text, `<ContentBox>`, lists, headers, etc.
  - **Mobile-Friendly Formulas**: Be highly conscious of formula width on mobile screens. Long equations or matrices in `<BlockMath>` MUST be broken down into multiple lines using environments like `\begin{aligned} ... \end{aligned}` or split into multiple smaller `<BlockMath>` blocks. Avoid excessively long single-line formulas that will cause horizontal scrolling or break layout.
- **Headings**: Use `<h2 className="text-2xl font-bold mt-8 mb-6">` for sub-section headings that correspond to the numbered items in the syllabus. Use `<h3>` for further subsections at your own discretion.
- **Section Dividers**: Place `<hr className="my-8 border-slate-200 dark:border-slate-700" />` before each `<h2>` to visually separate sub-sections.
- **Text**: Use `<p className="leading-relaxed">`.

## 3. Example Template

- **Function Name**: Use a descriptive name reflecting the section's topic (e.g., `SpectralDecompositionTheorem`, `PolarDecomposition`). Do NOT use a generic name like `SectionContent`.
- **Section Root**: Use `<section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">` as the single root element. Do NOT wrap in an extra `<div>`.
- **Intro Paragraph**: Start with a brief introductory paragraph before the first `<hr>` and `<h2>`.
- **Sub-sections**: Each numbered item from the syllabus becomes an `<h2>` heading, preceded by an `<hr>` divider.
- **Summary Box**: End each section file with `<ContentBox type="note" title="§X.X のまとめ">` containing a bulleted summary.

```tsx
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DescriptiveSectionName() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>Introductory paragraph for the entire section...</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Title of sub-item 1 from the syllabus</h2>

            <p>Introductory paragraph for sub-item 1...</p>

            <ContentBox type="definition" title="Definition X.X-X (Name)">
                <p>Definition content...</p>
                <BlockMath math="f(x) = ..." />
            </ContentBox>

            <ContentBox type="theorem" title="Theorem X.X-X (Name)">
                <p>Theorem statement...</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>Proof steps...</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Title of sub-item 2 from the syllabus</h2>

            <p>Introductory paragraph for sub-item 2...</p>

            <ContentBox type="example" title="Example X.X-X">
                <p>Example content...</p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§X.X のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>Key point 1...</li>
                    <li>Key point 2...</li>
                </ul>
            </ContentBox>
        </section>
    );
}
```

## 4. Graphics

- Use SVGs for diagrams where possible.
- Ensure SVGs are responsive (`max-w-full`) and support dark mode (use `currentColor` or specific dark mode classes like `dark:stroke-white` or `fill-slate-900 dark:fill-slate-100`).

## 5. Content Quality Guidelines

- **Syllabus Structure**: You MUST strictly adhere to the structure provided in the corresponding syllabus markdown file under `references/syllabus/`. Specifically:
  - Each **numbered item** (e.g., `- **1. 特異値・特異ベクトル**`) in the syllabus MUST become an `<h2>` heading in your content file, in the same order as the syllabus. **IMPORTANT: Do NOT include the number prefix in the `<h2>` heading itself.** (e.g. use `<h2>特異値・特異ベクトル</h2>`, not `<h2>1. 特異値・特異ベクトル</h2>`).
  - The Definition/Theorem/Example items listed under each numbered item MUST appear under the corresponding `<h2>` section.
  - Do NOT skip, reorder, or merge syllabus items. You are free to add `<h3>` tags at your own discretion to further structure the content within an `<h2>` section.
- **Complete Proofs & Proof Marks**: Whenever a Theorem, Proposition, Lemma, or Corollary is introduced, you MUST provide a complete and rigorous proof using `<ContentBox type="proof">`. "Proof omitted" is strictly forbidden unless specifically requested by the user. 
  - **Proof naming**: When a proof box immediately follows the statement of a theorem or proposition, the `title` of the `ContentBox` MUST be simply **"Proof"**. Do not use specific titles like "Theorem X.X の証明" or "証明".
  - **End mark**: The very end of any proof box MUST include the completion mark `\square` styled appropriately:
  ```tsx
  <div className="text-right text-slate-500 dark:text-slate-400">
      <InlineMath math="\square" />
  </div>
  ```
  **Note**: Because the `\square` mark clearly indicates the end of the proof, do NOT add text such as "（証明終）", "（導出終）", or "（証明終わり）" before the mark.
- **Prerequisite Checks**: Before introducing or utilizing a new mathematical concept or terminology, be sure to verify whether it has been defined in current or previous sections.
  - **IMPORTANT**: **Do not use undefined concepts or terms without prior notice.** If you absolutely must use an undefined term as a prerequisite, provide a brief explanation (annotation) or define it on the spot. Exercise extreme caution, especially when anticipating concepts that will be covered in detail in later chapters.
- **Language & Tone**: All explanations, body texts, and proofs MUST be written in Japanese.
  - **Tone**:
    - **Prose (地の文)**: Always use the polite **"desu/masu" tone (敬体)**. Unify all addressing to the reader, introductions, and explanations in this polite tone.
    - **Inside ContentBoxes (Definition, Theorem, Proof, Example, etc.)**: As a rule, use the standard **"da/dearu" tone (常体)**. Use this tone for mathematical definitions, theorem statements, and proof steps.
    - **Supplementary Boxes (Remark, Note, Column)**: Like prose, use the polite **"desu/masu" tone (敬体)**.
    - **Summary Box (Note)**: Like other content boxes, use the standard **"da/dearu" tone (常体)**.
- **Concrete Examples**: Abstract definitions and theorems MUST be followed by concrete numerical or functional examples (`<ContentBox type="example">`) to aid understanding.
  - **MANDATORY**: **Immediately following a Definition, you MUST place a concrete Example to help understand the concept.** At this time, you may ignore the numbering order of Examples in the syllabus. Prioritize a structure that allows readers to immediately connect abstract definitions with concrete images.
- **Cross-Referencing**: When referring to a specific definition, proposition, theorem, or example by its number, use the English label (e.g., "Proposition X.X-X", "Definition Y.Y", "Example Z.Z") rather than the Japanese equivalent (e.g., "命題 X.X-X", "定義 Y.Y"). 
  - **IMPORTANT**: When referring to an item using its English label and number (e.g., "Theorem X.X-X"), do **NOT** add redundant explanatory phrases like "§X.X の" (in Section X.X) or "前節の" (in the previous section). The number itself already provides the necessary context. Simply write "Theorem X.X-X より、" instead of "前節の Theorem X.X-X より、" or "§X.X の Theorem X.X-X より、". However, if you are referring to the concept generally without a specific number, use natural Japanese (e.g., "この命題からわかるように").
  - **Referencing Topics**: When referring to another topic, use the format `X-Y TopicName` (e.g., "2-3 実解析", "3-12 位相空間論II"). Do **NOT** use phrases like "Chapter 2-3" or "実解析（Chapter 2-3）" because the number represents the Topic ID, not a Chapter.
- **Term Definitions**: When defining a new term inside a `definition` ContentBox, the term being defined MUST be bolded using `<b>` tags. If the term is followed by its English translation in parentheses, include the parentheses and English term within the bold tag (e.g., `<b>ノルム（norm）</b>`).
- **Terminology**: Use "well-defined" or "well-definedness" instead of Katakana like "ウェルディファインド".
- **Counterexamples**: When discussing properties (e.g., commutativity), provide counterexamples if the property does not hold in general.
- **Prose Between ContentBoxes (地の文)**: ContentBox components (definition, theorem, proof, example, etc.) MUST NOT be placed directly one after another without connecting prose. Between each pair of ContentBoxes, include at least one `<p>` paragraph that:
  - Explains the significance or motivation of what was just shown (e.g., "この定理は〜を保証する根本的な結果です")
  - Provides a transition to the next topic (e.g., "次に〜を証明します")
  - Offers intuitive interpretation or context (e.g., "直感的には〜ということです")
  - **IMPORTANT**: Consciously reference previous or upcoming sections and chapters to create a cohesive learning experience (e.g., "Chapter X で学んだ〜の概念を応用して", "この結果は次節 §Y.Y で不可欠になります"). This ensures the content reads like a continuous textbook rather than disjointed articles.
  Refer to Chapter 13 (`topic2_1/chapter13/`) as the gold standard for prose density.
- **Columns and Remarks (コラム)**: Each section file SHOULD include at least one `<ContentBox type="remark">` that provides supplementary context beyond the core mathematics. 
  - **IMPORTANT**: The title of the remark box MUST be descriptive of its content (e.g., `title="バナッハ空間との違い"` or `title="物理学への応用"`). Do NOT use simply `title="Remark"` or `title="Remark (内容)"`.
  Good candidates include:
  - Historical notes (e.g., who developed the concept, when, and why)
  - Connections to other fields (e.g., physics, data science, engineering)
  - Intuitive or geometric interpretations
  - Common pitfalls or misconceptions
  - Relationship to previously learned concepts

## 6. Post-Creation Checklist
After creating the content, the agent MUST perform a self-check on the following items.

### 6.1 Technical & Formal Checks
- [ ] **Progress sheet**: Update `app/docs/CONTENT_PROGRESS.md` — set **Section** to `[x]` for the topic/chapter row when all its `section*.tsx` files are present, or regenerate with `npx tsx scripts/gen-content-progress.ts` from `app/`.
- [ ] **Build Check**: Run `npx tsc -b` to ensure there are no type or syntax errors.
- [ ] **Math Components**: Ensure `InlineMath` and `BlockMath` are used exclusively, and no raw literals like `$` or `$$` remain.
- [ ] **Remove Unused Imports**: Ensure no unused imports (e.g., `BlockMath`, `useEffect`) remain from the editing process.
- [ ] **Function Naming Convention**: Use a specific function name indicating the content (e.g., `NormalSpacesAndUrysohn`) rather than a generic name like `SectionContent`.

### 6.2 Mathematical Accuracy & Educational Considerations
- [ ] **Check Undefined Terms**: Ensure no terms (especially those covered in later chapters) are used abruptly without prerequisite explanation. Add annotations if necessary.
- [ ] **Definition-Example Pairing**: Ensure an Example is placed immediately after every Definition to aid understanding (prioritize reader understanding over syllabus numbering).
- [ ] **Complete Proofs**: Ensure rigorous and complete proofs are provided for all theorems and propositions, without omitting them ("proof omitted").
- [ ] **End of Proof Mark**: Ensure the `\square` (KaTeX component) is correctly placed at the very end of every proof.

### 6.3 Structure & Readability (UI/UX)
- [ ] **Sufficient Prose**: Ensure ContentBoxes are not consecutive, and appropriate introductory or explanatory paragraphs (`<p>`) are inserted between them.
- [ ] **Logical Transitions**: Ensure appropriate transitional phrases are used (e.g., "Next, let's consider...", "Using this, we can see...").
- [ ] **Mobile-Friendly**: Ensure long formulas are broken down using the `aligned` environment or similar, so horizontal scrolling does not occur on mobile.
- [ ] **Cross-Referencing**: Include links or references to previous/next sections and related learned topics.
- [ ] **Columns/Remarks**: Use at least one `remark` box to provide advanced content such as historical background, intuitive interpretations, or common pitfalls.

### 6.4 Design & Accessibility
- [ ] **SVG Consistency**: Ensure SVGs used for diagrams are responsive (`max-w-full`) and maintain visibility in dark mode (e.g., using `currentColor`).
- [ ] **Accessibility**: Ensure screen reader and keyboard operability are considered for any custom interactive elements.
- [ ] **Title Formatting**: Ensure headings like `<h2>` do not include syllabus numbers (e.g., 1. or 2.) in accordance with the style guide.
- [ ] **Section Dividers**: Ensure an `<hr />` is placed immediately before each `<h2>` for visual organization.
