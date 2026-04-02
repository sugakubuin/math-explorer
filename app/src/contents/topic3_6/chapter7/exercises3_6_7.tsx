import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        変分法における「等周問題（Isoperimetric Problem）」の定義（Definition 7.1-1）を、汎関数 <InlineMath math="J[u]" /> と制約条件 <InlineMath math="G[u] = \ell" /> を用いて述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> を、別の積分形式の制約条件
                            <BlockMath math="G[u] = \int_a^b g(x, u, u') \, dx = \ell \quad (\text{定数})" />
                            の下で極値化する問題を、<b>等周問題</b>と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        等周問題において、極値関数が満たすべき補助的なオイラー＝ラグランジュ方程式（Theorem 7.2-1）を、ラグランジュ乗数 <InlineMath math="\lambda" /> を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            補助汎関数 <b><InlineMath math="J^\lambda [u] = \int_a^b (F - \lambda g) \, dx" /></b> を定義すると、極値関数はこの補助汎関数に関する無制約のオイラー＝ラグランジュ方程式
                            <BlockMath math="\frac{\partial (F - \lambda g)}{\partial u} - \frac{d}{dx} \left( \frac{\partial (F - \lambda g)}{\partial u'} \right) = 0" />
                            を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        ラグランジュ乗数 <InlineMath math="\lambda" /> が持つ、感度分析（Sensitivity Analysis）における物理的・経済学的な意味を簡潔に述べよ（§7.2 備考）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\lambda" /> は、制約値 <InlineMath math="\ell" /> がわずかに変化したときの、目的関数（汎関数）の極値の変化率を表している。
                            これは、物理学や経済学などにおいて「限界費用」や「化学ポテンシャル」、「温度」など、系全体のバランスを記述する量として解釈される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        面積汎関数 <InlineMath math="J = \int y \, dx" /> を周長一定 <InlineMath math="G = \int \sqrt{1 + (y')^2} \, dx = \ell" /> の下で最大化する際の補助関数 <InlineMath math="H = F - \lambda g" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="F = y" /> および <InlineMath math="g = \sqrt{1 + (y')^2}" /> を定義式の補助汎関数に代入すると：
                            <BlockMath math="H(y, y', \lambda) = y - \lambda \sqrt{1 + (y')^2}" />
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        前問の補助関数を用いて得られる停留曲線が「円」の一部であることを、E-L 方程式を 1 回積分して示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 補助関数に対して E-L 方程式を適用：
                            <BlockMath math="1 - \frac{d}{dx} \left( -\frac{\lambda y'}{\sqrt{1 + (y')^2}} \right) = 0" />
                        </p>
                        <p>
                            2. 両辺を <InlineMath math="x" /> で積分する（積分定数 <InlineMath math="c" />）：
                            <BlockMath math="\frac{\lambda y'}{\sqrt{1 + (y')^2}} = x - c" />
                        </p>
                        <p>
                            3. これは円の接線の傾きと座標の関係を表しており、さらに積分すると <b><InlineMath math="(x - c)^2 + (y - y_0)^2 = \lambda^2" /></b> という円の方程式（Example 7.2-1）が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        懸垂線問題（Example 7.2-2）において、補助汎関数が <InlineMath math="J^\lambda = \int (y - \lambda) \sqrt{1+y'^2} \, dx" /> となる理由を、エネルギーと長さの観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ポテンシャルエネルギーは <InlineMath math="J = \int \rho g y \sqrt{1+y'^2} \, dx" /> に比例する。
                        </p>
                        <p>
                            2. 制約条件は長さ一定 <InlineMath math="G = \int \sqrt{1+y'^2} \, dx = \ell" /> である。
                        </p>
                        <p>
                            3. ラグランジュ乗数法により <InlineMath math="J - \tilde{\lambda} G" /> を考えると、係数部分を整理することで、補助関数の被積分関数は <b><InlineMath math="(y - \lambda) \sqrt{1+y'^2}" /></b> とまとめられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        2 つの制約条件 <InlineMath math="G_1 = \int g_1 dx = \ell_1, \ G_2 = \int g_2 dx = \ell_2" /> が課される問題において、オイラー＝ラグランジュ方程式はどのように拡張されるか示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.3-1 より、2 つの独立したラグランジュ乗数 <InlineMath math="\lambda_1, \lambda_2" /> を導入し、補助汎関数の被積分関数を
                            <BlockMath math="H = F - \lambda_1 g_1 - \lambda_2 g_2" />
                            として構成する。停留関数はこの <InlineMath math="H" /> に対する（無制約の）オイラー＝ラグランジュ方程式を満たす必要がある。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        等周不等式 <InlineMath math="4\pi A \le L^2" /> に関して、変分法がどのように等号成立条件（円）を導き出すか、その意義を述べよ（§7.1 備考参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 変分法は、最大面積を与える「形（停留関数）」が <b>曲率一定（円）</b> であることを第一変分から直接的に導き出す。
                        </p>
                        <p>
                            2. これにより、単なる代数的な不等式ではなく、幾何学的な「対称性」と「最適性」がどのように結びついているかを解析的に理解することを可能にする。
                        </p>
                        <p>
                            3. また、極小曲面（高次元版）やソボレフ不等式など、現代解析学の基本原理へとつながる出発点となっている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        特定の内点 <InlineMath math="x = c" /> で関数値が指定される「点制約」の場合、その点における接続条件（ジャンプ条件）がどのようになるか、物理的解釈とともに述べよ（Example 7.3-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 式としては <b><InlineMath math="[F_{u'}]_{c^-}^{c^+} = \lambda" /></b> となる。
                        </p>
                        <p>
                            2. これは、汎関数の導関数の値（物理的には内力や応力）がその点で不連続であることを意味する。
                        </p>
                        <p>
                            3. 物理的には、その点に <b>「集中荷重」</b> が作用し、関数の傾きが折れ曲がっている状態を数学的に表現している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        解が「障害物（Obstacle）」に触れるような制約が課される場合、変分問題はどのような形に一般化されるか述べよ（§7.3 備考）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 微分方程式（等式）ではなく、<b>「変分不等式（Variational Inequality）」</b>
                            <BlockMath math="\delta J[u; \eta - u] \ge 0 \quad (\forall \eta \in \mathcal{A})" />
                            の形に定式化される。
                        </p>
                        <p>
                            2. 障害物と「接触している領域」と「離れている領域」の境界が未知の変数となり、これを <b>自由境界（Free Boundary）</b> 問題と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
