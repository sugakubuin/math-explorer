import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        二面体群 <InlineMath math="D_4" /> （位数 8）が可解群であることを、具体的な正規列を提示して説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-1 に基づき、正規列を構成する。
                        </p>
                        <BlockMath math="D_4 \trianglerighteq \langle \sigma \rangle \trianglerighteq \langle \sigma^2 \rangle \trianglerighteq \{e\}" />
                        <p>
                            各剰余群を確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><InlineMath math="D_4 / \langle \sigma \rangle \cong \mathbb{Z}/2\mathbb{Z}" /> （アーベル群）</li>
                            <li><InlineMath math="\langle \sigma \rangle / \langle \sigma^2 \rangle \cong \mathbb{Z}/2\mathbb{Z}" /> （アーベル群）</li>
                            <li><InlineMath math="\langle \sigma^2 \rangle / \{e\} \cong \mathbb{Z}/2\mathbb{Z}" /> （アーベル群）</li>
                        </ul>
                        <p>
                            すべての剰余群がアーベル群であるため、<InlineMath math="D_4" /> は可解群である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        3 次方程式 <InlineMath math="f(x) = x^3 + 3x + 1 = 0" /> の判別式 <InlineMath math="\Delta" /> を計算し、ガロア群が <InlineMath math="S_3" /> か <InlineMath math="A_3" /> かを判定せよ。（<InlineMath math="\Delta = -4p^3 - 27q^2" /> を用いよ）
                    </p>
                    <ExerciseSolution>
                        <p>
                            多項式において <InlineMath math="p = 3, q = 1" /> である。
                        </p>
                        <BlockMath math="\Delta = -4(3^3) - 27(1^2) = -108 - 27 = -135" />
                        <p>
                            Example 7.2-2 より、ガロア群が偶置換のみからなる（<InlineMath math="A_3" /> となる）条件は、判別式が平方数であることである。
                        </p>
                        <p>
                            <InlineMath math="-135" /> は平方数ではない（負の数であるし、絶対値も平方数ではない）ため、ガロア群は <strong><InlineMath math="S_3" /></strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        拡大 <InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt[3]{5})/\mathbb{Q}" /> が根号拡大であることを、Definition 7.3-1 の体の塔を明示して説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義に基づき、次のような体の塔を構成する。
                        </p>
                        <BlockMath math="\mathbb{Q} = F_0 \subset F_1 = \mathbb{Q}(\sqrt[2]{2}) \subset F_2 = F_1(\sqrt[3]{5}) = \mathbb{Q}(\sqrt{2}, \sqrt[3]{5})" />
                        <p>
                            各ステップを確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>ステップ 1： <InlineMath math="\alpha_0 = \sqrt{2}" /> を添加しており、<InlineMath math="\alpha_0^2 = 2 \in F_0" /> である。</li>
                            <li>ステップ 2： <InlineMath math="\alpha_1 = \sqrt[3]{5}" /> を添加しており、<InlineMath math="\alpha_1^3 = 5 \in F_1" /> である。</li>
                        </ul>
                        <p>
                            すべて「下の体の元の冪根を添加する」操作のみで構成されているため、これは理論通りの根号拡大である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        可解群 <InlineMath math="G" /> の任意の部分群 <InlineMath math="H \leq G" /> は常に可解であることを、<InlineMath math="G" /> の正規系列 <InlineMath math="G_i" /> との共通部分 <InlineMath math="H_i = H \cap G_i" /> を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="G" /> が可解群であるため、剰余群がアーベル群となる正規系列 <InlineMath math="G = G_0 \trianglerighteq G_1 \trianglerighteq \dots \trianglerighteq \{e\}" /> が存在する。
                        </p>
                        <p>
                            <InlineMath math="H_i = H \cap G_i" /> とおくと、<InlineMath math="H = H_0 \supset H_1 \supset \dots \supset \{e\}" /> という列が得られる。
                        </p>
                        <p>
                            第 2 同型定理によれば、
                        </p>
                        <BlockMath math="H_i / H_{i+1} = (H \cap G_i) / (H \cap G_{i+1}) \cong (H \cap G_i) \cdot G_{i+1} / G_{i+1}" />
                        <p>
                            この右辺の群は、<InlineMath math="G_i / G_{i+1}" /> の部分群とみなせる。
                        </p>
                        <p>
                            アーベル群の部分群は常にアーベル群であるため、<InlineMath math="H_i / H_{i+1}" /> もアーベル群。よって <InlineMath math="H" /> は可解群である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        既約多項式 <InlineMath math="f(x) \in F[x]" /> のガロア群が、<InlineMath math="f" /> の根の集合に対して推移的に作用することを、分解体の自己同型の性質に基づき説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f" /> は既約であるため、任意の根 <InlineMath math="\alpha, \beta" /> の最小多項式は <InlineMath math="f" /> で一致する。
                        </p>
                        <p>
                            代数拡大の単拡大に関する同型定理（Proposition 1.3-1）より、<InlineMath math="\phi: F(\alpha) \xrightarrow{\sim} F(\beta)" /> なる <InlineMath math="F" />-自己同型（<InlineMath math="\phi(\alpha) = \beta" />）が存在する。
                        </p>
                        <p>
                            分解体の自己同型の拡張定理（Theorem 3.1-1 または Proposition 7.2-1 の証明参照）より、分解体 <InlineMath math="K" /> 上の自己同型 <InlineMath math="\sigma \in \mathrm{Gal}(K/F)" /> で、<InlineMath math="\sigma" /> の <InlineMath math="F(\alpha)" /> への制限が <InlineMath math="\phi" /> となるものが存在する。
                        </p>
                        <p>
                            この <InlineMath math="\sigma" /> は <InlineMath math="\sigma(\alpha) = \beta" /> を満たすため、作用は推移的である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        ガロア理論において、4 次方程式が根号によって解けることを、4 次対称群 <InlineMath math="S_4" /> の「可解性」という群論的な言葉で説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガロアの可解性定理（Theorem 7.3-1）により、「方程式が根号で解けること」と「ガロア群が可解群であること」は同値である。
                        </p>
                        <p>
                            4 次方程式のガロア群は <InlineMath math="S_4" /> の部分群（あるいは全体）である。
                        </p>
                        <p>
                            Example 7.1-2 で示した通り、<InlineMath math="S_4" /> は可解群である（剰余群が巡回群になる正規列を持つ）。
                        </p>
                        <p>
                            可解群の部分群もまた可解であるため、すべての 4 次方程式のガロア群は可解であり、したがって 4 次方程式は常に根号（解の公式）によって解くことができる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        3 次方程式 <InlineMath math="x^3 - 2 = 0" /> の分解体のガロア群が <InlineMath math="S_3" /> であることを示し、それが可解であることを用いて解の構造を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            根は <InlineMath math="\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}" /> である。拡大次数は <InlineMath math="[\mathbb{Q}(\sqrt[3]{2}, \omega) : \mathbb{Q}] = 6" />。
                        </p>
                        <p>
                            交代群 <InlineMath math="A_3 \cong \mathbb{Z}/3\mathbb{Z}" /> に対応する中間体は <InlineMath math="\mathbb{Q}(\omega)" /> である。
                        </p>
                        <p>
                            正規系列 <InlineMath math="S_3 \trianglerighteq A_3 \trianglerighteq \{e\}" /> に対応して、中間体の塔 <InlineMath math="\mathbb{Q} \subset \mathbb{Q}(\omega) \subset \mathbb{Q}(\sqrt[3]{2}, \omega)" /> が存在する。
                        </p>
                        <p>
                            最初のステップ <InlineMath math="\mathbb{Q}(\omega)/\mathbb{Q}" /> は、多項式 <InlineMath math="x^2+x+1" /> の分解体として根号で記述でき、次のステップ <InlineMath math="\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}(\omega)" /> も、下の体の中の元 <InlineMath math="2" /> の立方根を添加することで構成される。
                        </p>
                        <p>
                            これが「2段階の冪根添加」による可解性の正体であり、カルダノの公式を構成する代数的プロセスそのものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        5 次方程式 <InlineMath math="f(x) = x^5 - 6x + 3 = 0" /> が有理数体上で根号によって解けないことを、アイゼンシュタインの判定法と微分を用いた解析により証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <strong>既約性：</strong> <InlineMath math="p=3" /> でアイゼンシュタインの判定法を用いると、<InlineMath math="f(x)" /> は <InlineMath math="\mathbb{Q}" /> 上既約である。よってガロア群 <InlineMath math="G" /> は 5 つの根に対し推移的であり、位数 5 の元（5-サイクル）を含む。
                        </p>
                        <p>
                            2. <strong>実根の個数：</strong> 微分 <InlineMath math="f'(x) = 5x^4 - 6 = 0" /> の根は <InlineMath math="x = \pm \sqrt[4]{6/5}" />。
                            <InlineMath math="f(-\infty) = -\infty, f(-\sqrt[4]{1.2}) > 0, f(\sqrt[4]{1.2}) < 0, f(\infty) = \infty" /> と極大・極小値が 0 を跨ぐため、実根は 3 つ。
                        </p>
                        <p>
                            3. <strong>複素共役の作用：</strong> 根は 3 つの実根と 2 つの虚数根（共役ペア）からなる。複素共役写像は 2 つの虚数根を入れ替える「互換」として作用する。
                        </p>
                        <p>
                            4. <strong>決着：</strong> <InlineMath math="S_5" /> の部分群で、5-サイクルと互換を両方含むものは、群論の補題より <InlineMath math="S_5" /> 全体に一致する。<InlineMath math="S_5" /> は可解群ではない（Theorem 7.1-1, 7.4-1）。
                        </p>
                        <p>
                            したがって、ガロアの可解性定理により、この方程式は根号では解けない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        <InlineMath math="n \geq 5" /> のとき、交代群 <InlineMath math="A_n" /> が非可換な単純群であることを認め、対称群 <InlineMath math="S_n" /> が可解群ではないことを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="S_n" /> の正規列 <InlineMath math="S_n = G_0 \trianglerighteq G_1 \trianglerighteq \dots \trianglerighteq \{e\}" /> を考える。
                        </p>
                        <p>
                            <InlineMath math="S_n" /> の極大正規部分群は <InlineMath math="A_n" /> である。よって <InlineMath math="G_1 = A_n" />。剰余群 <InlineMath math="S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}" /> はアーベル群であり、一段階目は可解条件を満たす。
                        </p>
                        <p>
                            次に <InlineMath math="A_n" /> の正規列を考える。仮定より <InlineMath math="A_n" /> は単純群であるため、部分正規群 <InlineMath math="G_2" /> は <InlineMath math="\{e\}" /> でなければならない。
                        </p>
                        <p>
                            すると剰余群 <InlineMath math="A_n / \{e\} \cong A_n" /> が現れるが、<InlineMath math="n \geq 5" /> において <InlineMath math="A_n" /> は非可換群である。
                        </p>
                        <p>
                            「すべての剰余群がアーベル群である」という可解群の定義を満たせないため、<InlineMath math="S_n" /> は非可換である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        一般の 5 次方程式に対して、解の公式（根号のみの式）を作ることが不可能であることを、本章の定理を総動員して論理的に要約せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <strong>群への翻訳：</strong> 未知数係数をもつ一般 5 次方程式のガロア群は、全置換群である 5 次対称群 <InlineMath math="S_5" /> に一致する（Proposition 7.4-1）。
                        </p>
                        <p>
                            2. <strong>群の非可解性：</strong> <InlineMath math="S_5" /> は、非可換単純群 <InlineMath math="A_5" /> を含むため、剰余群をすべてアーベル群にする分解が不可能である（非可解群）。
                        </p>
                        <p>
                            3. <strong>可解性定理：</strong> ガロアの可解性定理（Theorem 7.3-1）によれば、方程式が根号で解けることとガロア群が可解群であることは同値である。
                        </p>
                        <p>
                            4. <strong>結論：</strong> ガロア群 <InlineMath math="S_5" /> が非可解であるため、一般 5 次方程式を根号によって解くことは不可能である。これがアーベル-ルフィニの定理の核心である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
