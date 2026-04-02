import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        自然演繹（ND, Definition 4.1-1）における論理結合子 <InlineMath math="\to" /> の導入規則（<InlineMath math="\to I" />）と除去規則（<InlineMath math="\to E" />）をそれぞれ記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong><InlineMath math="\to" />-除去規則（<InlineMath math="\to E" />）：</strong><br />
                            前提として <InlineMath math="\varphi" /> および <InlineMath math="\varphi \to \psi" /> が与えられたとき、結論として <InlineMath math="\psi" /> を導く。これはモーダスポネンス（MP）と同じである。
                            <BlockMath math="\frac{\varphi \quad \varphi \to \psi}{\psi} (\to E)" />
                        </p>
                        <p className="mt-4">
                            <strong><InlineMath math="\to" />-導入規則（<InlineMath math="\to I" />）：</strong><br />
                            仮定 <InlineMath math="\varphi" /> から出発して <InlineMath math="\psi" /> が導出されたとき、その仮定を解放（discharge）して <InlineMath math="\varphi \to \psi" /> を導く。
                            <BlockMath math="\frac{\begin{matrix} [\varphi] \\ \vdots \\ \psi \end{matrix}}{\varphi \to \psi} (\to I)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        ヒルベルト流公理体系（Axiom 4.2-1）において、全称量化子 <InlineMath math="\forall" /> を扱うための2つの公理スキーマ (H4, H5) を記せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-decimal list-inside mt-2 space-y-4">
                            <li>
                                <strong>(H4) 全称例化の公理：</strong><br />
                                <InlineMath math="\forall x\,\varphi \to \varphi[t/x]" /><br />
                                （ただし、<InlineMath math="t" /> は <InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して自由であること）
                            </li>
                            <li>
                                <strong>(H5) 量化子の分配公理：</strong><br />
                                <InlineMath math="\forall x\,(\varphi \to \psi) \to (\varphi \to \forall x\,\psi)" /><br />
                                （ただし、変数 <InlineMath math="x" /> は <InlineMath math="\varphi" /> に自由変数として含まれないこと）
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        構文論的帰結を示す記号 <InlineMath math="T \vdash \varphi" /> と意味論的帰結を示す記号 <InlineMath math="T \models \varphi" /> の違いについて、Definition 4.3-1 に基づき簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>
                                <strong>構文論的帰結 (<InlineMath math="\vdash" />)：</strong> 記号の意味を一切問わず、公理と推論規則のみを用いた機械的な「形式的証明」によって導出可能であることを意味する。
                            </li>
                            <li>
                                <strong>意味論的帰結 (<InlineMath math="\models" />)：</strong> 特定の証明手順ではなく、仮定を真とする「あらゆる構造（モデル）」において結論も真になるという「真理性」を意味する。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        自然演繹の推論規則（<InlineMath math="\land I, \land E_1, \land E_2, \to I" />）を用いて、次の論理式の証明図（木構造）を作成せよ。
                    </p>
                    <BlockMath math="\vdash (p \land q) \to (q \land p)" />
                    <ExerciseSolution>
                        <p>
                            以下のように、仮定 <InlineMath math="p \land q" /> を導入し、それを解放することで証明できる。
                        </p>
                        <BlockMath math="\frac{\frac{\frac{[p \land q]^1}{q} (\land E_2) \quad \frac{[p \land q]^1}{p} (\land E_1)}{q \land p} (\land I)}{(p \land q) \to (q \land p)} (\to I)^1" />
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            ※ 一番下の推論で、最初に使用した仮定 <InlineMath math="p \land q" />（番号1）が「解放」されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        ヒルベルト流公理体系における推論規則の一つである「一般化規則（Generalization, Gen）」の定義を述べよ。また、前提として <InlineMath math="\vdash P(x)" /> が証明されているとき、この規則によって直ちに導かれる結論は何か答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>一般化規則（Gen）：</strong><br />
                            ある論理式 <InlineMath math="\varphi" /> が（仮定なし、または変数が自由でない仮定のみから）導出されているとき、任意の変数 <InlineMath math="x" /> について全称量化した式 <InlineMath math="\forall x\,\varphi" /> を導くことができる規則である。
                        </p>
                        <p className="mt-4">
                            <strong>導かれる結論：</strong><br />
                            前提 <InlineMath math="\varphi \equiv P(x)" /> に Gen を適用すると、結論は <InlineMath math="\forall x\,P(x)" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        全称量化の除去規則（<InlineMath math="\forall E" />）において、「項 <InlineMath math="t" /> が <InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して自由である」という条件が必要な理由を、反例を用いて直感的に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この条件がないと、代入によって変数が意図せず「捕まって（束縛されて）」しまい、意味が変わってしまうからである（§2.3 参照）。
                        </p>
                        <p className="mt-2">
                            例えば、<InlineMath math="\forall x\,\exists y\,(x < y)" /> （どんな数 <InlineMath math="x" /> にもそれより大きな <InlineMath math="y" /> がある：真）を考える。
                            ここで <InlineMath math="x" /> に <InlineMath math="t = y" /> を無理やり代入できるとすると、
                            結論は <InlineMath math="\exists y\,(y < y)" /> （自分より大きな自分自身が存在する：偽）という不条理な式になってしまう。
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            このような推論の「誤り（穴）」を防ぐために、代入する項が既に使われている束縛変数の名前と衝突しないように制約が課されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        Theorem 4.2-1 で述べられている、自然演繹とヒルベルト流の「同値性」の意義について、メタ定理の証明と具体的な定理の証明の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この同値性により、目的やアプローチのしやすさに応じて証明体系を使い分けることが可能になる。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>
                                <strong>メタ定理の証明：</strong> ヒルベルト流は推論規則が極めて少なく証明が「1列の並び」であるため、健全性や完全性といった体系全体の性質を数学的帰納法で証明するのに極めて都合が良い。
                            </li>
                            <li>
                                <strong>具体的な定理の証明：</strong> 自然演繹は人間の推論過程（仮定して、結論づける）に近いため、パズルのようなヒルベルト流と比べて、人間が実際に証明図を手書きして複雑な定理を証明するのに向いている。
                            </li>
                        </ul>
                        <p className="mt-2">
                            これらが「同値」であるため、自然演繹で証明しやすいことを示せば、同時に（帰納法などで扱いやすい）ヒルベルト流でも証明可能であることが保証される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        自然演繹の推論規則を用いて、全称量化子が連言に対して分配的であることを証明せよ。<br />
                        すなわち、次の論理関係の一方（左辺から右辺）を証明木で示せ。
                    </p>
                    <BlockMath math="\forall x\,(P(x) \land Q(x)) \vdash \forall x\,P(x) \land \forall x\,Q(x)" />
                    <ExerciseSolution>
                        <p>
                            以下の手順で証明木を構成する。
                        </p>
                        <BlockMath math="\frac{ \frac{\frac{[\forall x\,(P(x) \land Q(x))]^1}{P(x) \land Q(x)}(\forall E)}{P(x)}(\land E_1) } {\forall x\,P(x)}(\forall I) \quad \frac{ \frac{\frac{[\forall x\,(P(x) \land Q(x))]^1}{P(x) \land Q(x)}(\forall E)}{Q(x)}(\land E_2) } {\forall x\,Q(x)}(\forall I)" />
                        <p className="text-center mt-2">
                            <BlockMath math="\frac{\dots \quad \dots}{\forall x\,P(x) \land \forall x\,Q(x)}(\land I)" />
                        </p>
                        <p className="mt-4">
                            <strong>証明の概要：</strong><br />
                            まず仮定 <InlineMath math="\forall x\,(P(x) \land Q(x))" /> から <InlineMath math="\forall E" /> により <InlineMath math="P(x) \land Q(x)" /> を取り出し、そこから連言除去規則により <InlineMath math="P(x)" /> と <InlineMath math="Q(x)" /> をそれぞれ得る。
                            その後、変数 <InlineMath math="x" /> についてそれぞれ全称導入規則（<InlineMath math="\forall I" />）を適用し（仮定に自由変数 <InlineMath math="x" /> が含まれないため適用可能）、最後に連言で結合する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        健全性定理（Soundness Theorem, Proposition 4.3-1）の証明における中心的な段階として、推論規則「モーダスポネンス（MP）」が意味論的帰結を保存することを証明せよ。<br />
                        すなわち、任意の構造 <InlineMath math="\mathcal{M}" /> および論理式 <InlineMath math="\varphi, \psi" /> について、
                        <InlineMath math="\mathcal{M} \models \varphi" /> かつ <InlineMath math="\mathcal{M} \models \varphi \to \psi" /> ならば、<InlineMath math="\mathcal{M} \models \psi" /> となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            充足関係（<InlineMath math="\models" />）の定義（Definition 3.2-1）に基づき証明する。
                        </p>
                        <p className="mt-2">
                            仮定より、対象とする任意の構造 <InlineMath math="\mathcal{M}" /> において：
                        </p>
                        <ol className="list-decimal list-inside mt-1 space-y-1">
                            <li><InlineMath math="\mathcal{M}, \sigma \models \varphi" /> （任意の付値 <InlineMath math="\sigma" /> について真）</li>
                            <li><InlineMath math="\mathcal{M}, \sigma \models \varphi \to \psi" /> （任意の付値 <InlineMath math="\sigma" /> について真）</li>
                        </ol>
                        <p className="mt-2">
                            付値 <InlineMath math="\sigma" /> を一つ取り固定する。<br />
                            タルスキの含意の真理値定義によれば、<InlineMath math="\mathcal{M}, \sigma \models \varphi \to \psi" /> が成り立つということは、「<InlineMath math="\mathcal{M}, \sigma \not\models \varphi" /> であるか、または <InlineMath math="\mathcal{M}, \sigma \models \psi" /> である」ことのいずれかを意味する。
                        </p>
                        <p className="mt-2">
                            しかし、仮定 1 より <InlineMath math="\mathcal{M}, \sigma \models \varphi" /> が真であることがすでに言えているため、前者の可能性（<InlineMath math="\not\models \varphi" />）は排除される。
                            したがって後者の選択肢である <InlineMath math="\mathcal{M}, \sigma \models \psi" /> が必然的に成立しなければならない。
                        </p>
                        <p className="mt-2">
                            これが任意の付値において言えるため、<InlineMath math="\mathcal{M} \models \psi" /> が成り立つ。
                            これにより、真なる前提から MP によって導かれた結論も必ず真となることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        ヒルベルト流公理系における証明手順を示せ。<br />
                        公理 (H4) および一般化規則 (Gen) を用いて、
                        任意の述語 <InlineMath math="P(x)" /> に対して <InlineMath math="\vdash \forall x\,P(x) \to \forall y\,P(y)" /> であることを形式的証明列により証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            以下の手順で証明列を構築する。変数 <InlineMath math="y" /> は <InlineMath math="P(x)" /> に現れないものとする。
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <InlineMath math="\forall x\,P(x) \to P(y)" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（公理 (H4) において <InlineMath math="\varphi \mapsto P(x)" />, 項 <InlineMath math="t \mapsto y" /> と代入したもの。代入は自由）</span>
                            </li>
                            <li>
                                <InlineMath math="\forall y\,(\forall x\,P(x) \to P(y))" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（行1 に対して一般化規則 Gen を <InlineMath math="y" /> について適用）</span>
                            </li>
                            <li>
                                <InlineMath math="\forall y\,(\forall x\,P(x) \to P(y)) \to (\forall x\,P(x) \to \forall y\,P(y))" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（公理 (H5) において <InlineMath math="\varphi \mapsto \forall x\,P(x)" />, <InlineMath math="\psi \mapsto P(y)" /> としたもの。変数 <InlineMath math="y" /> は <InlineMath math="\forall x\,P(x)" /> に自由変数として現れないため適用可能）</span>
                            </li>
                            <li>
                                <InlineMath math="\forall x\,P(x) \to \forall y\,P(y)" /><br />
                                <span className="text-sm text-gray-600 dark:text-gray-400">（行2 と 行3 にモーダスポネンス MP を適用）</span>
                            </li>
                        </ol>
                        <p className="mt-2">
                            以上より、ヒルベルト流公理系において結論が証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
