import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        Definition 1.1-3 に従って、次の記号列のうち論理式であるものをすべて選び、論理式でないものについてはどの規則に違反しているか簡潔に答えよ。
                        ただし、括弧の省略規則は適用しない厳密な定義に従うものとする。
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li><InlineMath math="p \lor q" /></li>
                        <li><InlineMath math="(p \land (\neg q))" /></li>
                        <li><InlineMath math="(\neg p)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            論理式であるものは <strong>2</strong> と <strong>3</strong> である。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>1. <InlineMath math="p \lor q" /> ：論理式ではない。Definition 1.1-3 の規則3では、2項結合子を用いる場合、全体を括弧で囲む必要がある（正しくは <InlineMath math="(p \lor q)" />）。</li>
                            <li>2. <InlineMath math="(p \land (\neg q))" /> ：論理式である。<InlineMath math="p" /> は規則1より論理式、<InlineMath math="q" /> が論理式なので規則2より <InlineMath math="\neg q" /> も論理式。さらに全体を括弧で囲み <InlineMath math="\land" /> で結んでいるため、規則3を満たす。</li>
                            <li>3. <InlineMath math="(\neg p)" /> ：論理式ではない。<InlineMath math="\neg" /> を適用する規則2では外側に括弧をつけないため、正しくは <InlineMath math="\neg p" /> である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        命題変数 <InlineMath math="p, q, r" /> に対する付値 <InlineMath math="v" /> が、<InlineMath math="v(p) = \top" />, <InlineMath math="v(q) = \bot" />, <InlineMath math="v(r) = \bot" /> で与えられているとする。
                        このとき、次の論理式の真理値を Definition 1.1-4 に従って計算せよ。
                    </p>
                    <BlockMath math="v(\neg p \to (q \lor r))" />
                    <ExerciseSolution>
                        <p>
                            各部分の真理値を順に計算する。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><InlineMath math="v(p) = \top" /> より、<InlineMath math="v(\neg p) = \bot" /> である。</li>
                            <li><InlineMath math="v(q) = \bot" /> かつ <InlineMath math="v(r) = \bot" /> より、<InlineMath math="v(q \lor r) = \bot" /> である。</li>
                        </ul>
                        <p className="mt-2">
                            したがって、含意の真理値の定義より、前件が <InlineMath math="\bot" />、後件が <InlineMath math="\bot" /> なので、
                            <BlockMath math="v(\neg p \to (q \lor r)) = \top" />
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        ヒルベルト流公理体系（Axiom 1.3-1）における唯一の推論規則であるモーダスポネンス（MP）の定義を、記号を用いて記せ。また、前提として <InlineMath math="\vdash \neg p" /> および <InlineMath math="\vdash \neg p \to (q \land r)" /> が与えられているとき、MPを適用して導かれる結論は何か答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>モーダスポネンス（MP）の定義：</strong><br />
                            <InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> が与えられたとき、そこから結論として <InlineMath math="\psi" /> を導く規則である。
                        </p>
                        <p className="mt-4">
                            <strong>導かれる結論：</strong><br />
                            前提 <InlineMath math="\varphi \equiv \neg p" /> と <InlineMath math="\varphi \to \psi \equiv \neg p \to (q \land r)" /> に MP を適用すると、結論 <InlineMath math="\psi \equiv (q \land r)" /> が導かれる。
                            よって答えは <InlineMath math="q \land r" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        真理表を作成し、論理式 <InlineMath math="(p \to q) \leftrightarrow (\neg p \lor q)" /> がトートロジーであることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="p" /> と <InlineMath math="q" /> の真理値の組み合わせ 4通りについて真理表を作成する。
                        </p>
                        <div className="overflow-x-auto my-4">
                            <table className="min-w-max border-collapse border border-slate-300 dark:border-slate-600 mx-auto text-center">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-800">
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="p" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="q" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="p \to q" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\neg p" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\neg p \lor q" /></th>
                                        <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\text{全体}" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-blue-600 dark:text-blue-400 font-bold"><InlineMath math="\top" /></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-blue-600 dark:text-blue-400 font-bold"><InlineMath math="\top" /></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-blue-600 dark:text-blue-400 font-bold"><InlineMath math="\top" /></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                        <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 text-blue-600 dark:text-blue-400 font-bold"><InlineMath math="\top" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            すべての付値において全体の真理値が <InlineMath math="\top" /> となるため、この論理式はトートロジーである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        Proposition 1.2-1 で与えられた論理的同値の法則（ド・モルガンの法則、含意の変形など）を用いて、次の論理式の同値変形を行い、最終的に <InlineMath math="p \lor q \lor r" /> と同値であることを示せ。
                    </p>
                    <BlockMath math="\neg(\neg p \land \neg q) \lor r" />
                    <ExerciseSolution>
                        <p>
                            ド・モルガンの法則 <InlineMath math="\neg(\varphi \land \psi) \equiv \neg\varphi \lor \neg\psi" /> を左側の項に適用する。<InlineMath math="\varphi \equiv \neg p" />、<InlineMath math="\psi \equiv \neg q" /> とすればよい。
                        </p>
                        <BlockMath math="\begin{aligned} \neg(\neg p \land \neg q) \lor r &\equiv (\neg(\neg p) \lor \neg(\neg q)) \lor r \\ &\equiv (p \lor q) \lor r \\ &\equiv p \lor q \lor r \end{aligned}" />
                        <p>
                            途中で二重否定の除去 <InlineMath math="\neg\neg p \equiv p" /> を用いた。以上により示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        命題論理の健全性定理 (Theorem 1.4-1) と完全性定理 (Theorem 1.4-2) を用いて、次の主張を証明せよ。<br />
                        「論理式 <InlineMath math="\varphi" /> について、<InlineMath math="\vdash \varphi \to \neg\neg\varphi" /> であることと <InlineMath math="\models \varphi \to \neg\neg\varphi" /> であることは同値である。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            健全性定理と完全性定理の主張を組み合わせる。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><strong>健全性定理</strong>より、ヒルベルト流公理系で証明可能な式はすべてトートロジーである。したがって <InlineMath math="\vdash \varphi \to \neg\neg\varphi \implies \models \varphi \to \neg\neg\varphi" /> が成り立つ。</li>
                            <li><strong>完全性定理</strong>より、トートロジーである式はすべてヒルベルト流公理系で証明可能である。したがって <InlineMath math="\models \varphi \to \neg\neg\varphi \implies \vdash \varphi \to \neg\neg\varphi" /> が成り立つ。</li>
                        </ul>
                        <p className="mt-2">
                            これら2つの含意がともに成り立つため、証明可能性 <InlineMath math="\vdash" /> と恒真性 <InlineMath math="\models" /> は必要十分条件（同値）となる。
                            以上より <InlineMath math="\vdash \varphi \to \neg\neg\varphi \iff \models \varphi \to \neg\neg\varphi" /> が示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        Example 1.2-2 で言及された「爆発律」について、任意の論理式 <InlineMath math="\varphi, \psi" /> に対して <InlineMath math="\models (\varphi \land \neg\varphi) \to \psi" /> が成り立つことを真理値を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            真理値の定義 (Definition 1.1-4) に基づいて証明する。
                        </p>
                        <p className="mt-2">
                            任意の付値 <InlineMath math="v" /> について評価する。<InlineMath math="v(\varphi)" /> は <InlineMath math="\top" /> または <InlineMath math="\bot" /> のいずれかである。
                            いずれの場合でも、<InlineMath math="v(\neg\varphi)" /> はその反転となるため、<InlineMath math="v(\varphi) = \top" /> ならば <InlineMath math="v(\neg\varphi) = \bot" />、<InlineMath math="v(\varphi) = \bot" /> ならば <InlineMath math="v(\neg\varphi) = \top" /> となる。
                        </p>
                        <p className="mt-2">
                            連言の定義より、<InlineMath math="v(\varphi \land \neg\varphi) = \top" /> となるためには両方が <InlineMath math="\top" /> である必要があるが、それは不可能である。
                            したがって、すべての付値 <InlineMath math="v" /> に対して常に <InlineMath math="v(\varphi \land \neg\varphi) = \bot" /> となる（矛盾式）。
                        </p>
                        <p className="mt-2">
                            含意 <InlineMath math="A \to B" /> の定義より、前件 <InlineMath math="A" /> が <InlineMath math="\bot" /> である場合、後件 <InlineMath math="B" /> の真理値に関わらず式全体の真理値は <InlineMath math="\top" /> となる。
                            今回、前件 <InlineMath math="\varphi \land \neg\varphi" /> は常に <InlineMath math="\bot" /> であるため、後件 <InlineMath math="\psi" /> にかかわらず、
                            <BlockMath math="v((\varphi \land \neg\varphi) \to \psi) = \top" />
                            が成り立つ。すべての付値で <InlineMath math="\top" /> となるため、これはトートロジー（<InlineMath math="\models" />）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        論理的同値性に関する意味論的関係として、2つの論理式 <InlineMath math="\varphi, \psi" /> について「<InlineMath math="\varphi \equiv \psi" /> である」ことと「<InlineMath math="\models \varphi \leftrightarrow \psi" /> である」ことが等価であることを、Definition 1.1-4 および Definition 1.2-2 に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            両方向の含意を証明する。
                        </p>
                        <p className="mt-2">
                            <strong>1. <InlineMath math="\varphi \equiv \psi \implies \models \varphi \leftrightarrow \psi" /> の証明：</strong><br />
                            <InlineMath math="\varphi \equiv \psi" /> を仮定する。Definition 1.2-2 より、任意の付値 <InlineMath math="v" /> に対して <InlineMath math="v(\varphi) = v(\psi)" /> が成り立つ。
                            Definition 1.1-4 における双条件の定義によれば、<InlineMath math="v(\varphi \leftrightarrow \psi) = \top" /> となる必要十分条件は <InlineMath math="v(\varphi) = v(\psi)" /> であることである。
                            いま、任意の <InlineMath math="v" /> でこの条件が満たされているため、任意の <InlineMath math="v" /> で <InlineMath math="v(\varphi \leftrightarrow \psi) = \top" /> となる。
                            これは Definition 1.2-1 におけるトートロジーの定義そのものであり、<InlineMath math="\models \varphi \leftrightarrow \psi" /> が示された。
                        </p>
                        <p className="mt-4">
                            <strong>2. <InlineMath math="\models \varphi \leftrightarrow \psi \implies \varphi \equiv \psi" /> の証明：</strong><br />
                            <InlineMath math="\models \varphi \leftrightarrow \psi" /> を仮定する。トートロジーの定義より、任意の付値 <InlineMath math="v" /> に対して <InlineMath math="v(\varphi \leftrightarrow \psi) = \top" /> が成り立つ。
                            双条件の定義より、これが成り立つのは <InlineMath math="v(\varphi) = v(\psi)" /> のときに限られる。
                            したがって、任意の付値 <InlineMath math="v" /> に対して <InlineMath math="v(\varphi) = v(\psi)" /> が成り立つ。
                            これは論理的同値 <InlineMath math="\varphi \equiv \psi" /> の定義そのものであり、示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        意味論的モーダスポネンスの正当性を証明する。<br />
                        任意の論理式 <InlineMath math="\varphi, \psi" /> に対して、<InlineMath math="\models \varphi" /> かつ <InlineMath math="\models \varphi \to \psi" /> が成り立つならば、<InlineMath math="\models \psi" /> となることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            仮定より、<InlineMath math="\models \varphi" /> および <InlineMath math="\models \varphi \to \psi" /> が成り立つ。
                            これをトートロジーの定義 (Definition 1.2-1) に基づいて解釈すると、任意の付値 <InlineMath math="v" /> に対して以下が同時に成り立つということである。
                        </p>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li><InlineMath math="v(\varphi) = \top" /></li>
                            <li><InlineMath math="v(\varphi \to \psi) = \top" /></li>
                        </ol>
                        <p className="mt-2">
                            任意の付値 <InlineMath math="v" /> を一つ固定して考える。<br />
                            Definition 1.1-4 における含意の真理値の定義によれば、<InlineMath math="v(\varphi \to \psi) = \top" /> となるのは「<InlineMath math="v(\varphi) = \bot" /> であるか、または <InlineMath math="v(\psi) = \top" /> である」ときのいずれかである。
                        </p>
                        <p className="mt-2">
                            しかし、条件 1 より <InlineMath math="v(\varphi) = \top" /> であることが確定しているため、「<InlineMath math="v(\varphi) = \bot" />」の可能性は排除される。
                            したがって、残された条件として必ず「<InlineMath math="v(\psi) = \top" />」が成り立たなければならない。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="v" /> は任意の付値として選ばれたものであるから、すべての付値 <InlineMath math="v" /> に対して <InlineMath math="v(\psi) = \top" /> が成り立つことが示された。
                            これは <InlineMath math="\psi" /> がトートロジーであることを意味し、すなわち <InlineMath math="\models \psi" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        Example 1.3-2 の形式証明を参考にして、ヒルベルト流公理体系（Axiom 1.3-1）のもとで、論理式 <InlineMath math="p" /> に対して <InlineMath math="\vdash \neg p \to \neg p" /> が成り立つことを形式的証明列を作成して証明せよ。
                        各行にはその行がどのように導かれたか（使用した公理スキーマと代入した式、または MP を適用した対象業）を明記すること。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 1.3-2 の証明手順において、変数 <InlineMath math="\varphi" /> に <InlineMath math="\neg p" /> を代入することで、全く同じ構造で <InlineMath math="\neg p \to \neg p" /> の証明を構成できる。
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <InlineMath math="\neg p \to ((\neg p \to \neg p) \to \neg p)" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（公理 (H1) で <InlineMath math="\varphi \mapsto \neg p" />, <InlineMath math="\psi \mapsto \neg p \to \neg p" /> と代入したもの）</span>
                            </li>
                            <li>
                                <InlineMath math="(\neg p \to ((\neg p \to \neg p) \to \neg p)) \to ((\neg p \to (\neg p \to \neg p)) \to (\neg p \to \neg p))" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（公理 (H2) で <InlineMath math="\varphi \mapsto \neg p" />, <InlineMath math="\psi \mapsto \neg p \to \neg p" />, <InlineMath math="\chi \mapsto \neg p" /> と代入したもの）</span>
                            </li>
                            <li>
                                <InlineMath math="(\neg p \to (\neg p \to \neg p)) \to (\neg p \to \neg p)" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（行1 と 行2 に MP を適用したもの。行1が前提、行2が含意式にあたる）</span>
                            </li>
                            <li>
                                <InlineMath math="\neg p \to (\neg p \to \neg p)" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（公理 (H1) で <InlineMath math="\varphi \mapsto \neg p" />, <InlineMath math="\psi \mapsto \neg p" /> と代入したもの）</span>
                            </li>
                            <li>
                                <InlineMath math="\neg p \to \neg p" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（行4 と 行3 に MP を適用したもの。導かれた式が結論）</span>
                            </li>
                        </ol>
                        <p className="mt-4">
                            以上より、ヒルベルト流公理系とモーダスポネンスのみを用いて <InlineMath math="\vdash \neg p \to \neg p" /> が証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
