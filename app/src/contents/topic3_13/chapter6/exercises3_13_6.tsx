import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        曲面 <InlineMath math="S" /> 上の曲線 <InlineMath math="\alpha(s)" />（<InlineMath math="s" /> は弧長パラメータ）が測地線（geodesic）であるための幾何学的な定義を述べよ。また、加速度ベクトル <InlineMath math="\alpha''(s)" /> と法ベクトル <InlineMath math="\mathbf{N}" /> の関係について記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-1 より、曲面上の曲線が測地線であるとは、その曲線の加速度ベクトル <InlineMath math="\alpha''(s)" /> が常に曲面の法線方向を向いていることをいう。
                            すなわち、接平面方向の加速度成分がゼロであることを意味する。数式では、定数 <InlineMath math="\lambda" /> を用いて次のように表される。
                        </p>
                        <BlockMath math="\alpha''(s) = \lambda \mathbf{N}(\alpha(s))" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        クリストッフェル記号を用いた測地方程式（geodesic equations）の連立微分方程式系を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-2 より、パラメータ <InlineMath math="u(t), v(t)" /> に関する測地方程式は次の通りである。
                        </p>
                        <BlockMath math="\begin{aligned} \ddot{u} + \Gamma^1_{11} \dot{u}^2 + 2\Gamma^1_{12} \dot{u}\dot{v} + \Gamma^1_{22} \dot{v}^2 &= 0 \\ \ddot{v} + \Gamma^2_{11} \dot{u}^2 + 2\Gamma^2_{12} \dot{u}\dot{v} + \Gamma^2_{22} \dot{v}^2 &= 0 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        曲面 <InlineMath math="S" /> が測地的完備（geodesically complete）であるとはどういう意味か、簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.3-1 より、曲面上の任意の点から任意の方向に出発するすべての測地線が、パラメータを無限大（すべての時間）まで延長できることをいう。
                            直感的には、曲面に「縁（ふち）」や「特異点」がなく、測地線が途切れることなく伸び続けられる状態を指す。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        平面上の測地線の方程式が <InlineMath math="\ddot{u} = 0, \ddot{v} = 0" /> となることを示し、その解が直線であることを確認せよ。ただし平面ではすべてのクリストッフェル記号が 0 であるとする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            平面においてクリストッフェル記号がすべて 0 である場合、測地方程式（Definition 6.1-2）に代入すると、2次項がすべて消滅し、
                        </p>
                        <BlockMath math="\ddot{u}(t) = 0, \quad \ddot{v}(t) = 0" />
                        <p>
                            となる。これらをそれぞれ 2回積分すると、定数 <InlineMath math="a, b, c, d" /> を用いて
                        </p>
                        <BlockMath math="u(t) = at + b, \quad v(t) = ct + d" />
                        <p>
                            を得る。これはパラメータ <InlineMath math="t" /> に関する直線の形式であり、平面上の測地線が直線であることを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        半径 <InlineMath math="r" /> の球面 <InlineMath math="S^2(r)" /> 上の測地線は大円（great circle）であることを、加速度ベクトルの幾何的性質（Definition 6.1-1）を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.2-1 参照。
                            球面の法ベクトル <InlineMath math="\mathbf{N}" /> は、常に中心（原点）を指す方向にある。
                            測地線の定義より、測地線の加速度ベクトル <InlineMath math="\alpha''(s)" /> は法ベクトルに平行であるため、<InlineMath math="\alpha''(s)" /> も常に原点を指す。
                            これは、曲線 <InlineMath math="\alpha(s)" /> が常に「原点を含む平面」内にあることを意味する。
                            原点を含む平面と球面の交わりは、まさに大円である。したがって、球面の測地線は大円である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        回転面において、測地線上の点における回転軸からの距離を <InlineMath math="r" />、測地線と緯線（あるいは経線）とのなす角を <InlineMath math="\beta" /> としたとき、<InlineMath math="r \sin \beta = \text{const}" /> が成り立つという「クレローの関係式（Clairaut's relation）」を用いて、経線（<InlineMath math="\beta = \text{const}" />）が常に測地線となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.2-1 より、回転面上の測地線では <InlineMath math="r \sin \beta = \text{const}" /> が成り立つ。
                            経線方向は、回転面において緯線方向と直交する方向である。
                            緯線と測地線のなす角を <InlineMath math="\beta" /> とすると、経線に沿う場合は測地線が緯線と常に直角（<InlineMath math="\beta = \pi/2" /> または経線となす角が 0）で交わる特別な場合を考える。
                            経線そのものを測地線と仮定すると、<InlineMath math="\beta = \pi/2" /> （経線方向への進行）のとき <InlineMath math="\sin \beta = 1" /> であり、関係式は <InlineMath math="r \cdot 1 = \text{const}" /> となるはずである。
                            しかし、一般に回転面では <InlineMath math="r" /> は一定ではない。
                            実際には、経線においては角度の変化率の微分がゼロであることを測地方程式で直接示すのが一般的であるが、クレローの関係式において <InlineMath math="\beta=0" />（経線そのものを進行方向とする）とすれば <InlineMath math="\sin 0 = 0" /> となり、<InlineMath math="0 = \text{const}" /> は常に満たされる。
                            したがって、経線は回転面の測地線である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        測地的完備でない例として、平面から原点を除いた「パンクチャド平面（punctured plane）」 <InlineMath math="\mathbb{R}^2 \setminus \{\mathbf{0}\}" /> を考える。この曲面において測地線が無限に延長できない理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.3-1 参照。
                            この曲面上の測地線は、通常の平面と同じく直線である。
                            原点に向かって進む測地線（直線）を考えると、その測地線は有限のパラメータ時間で「穴（原点）」に到達してしまい、それ以上パラメータを延長することができなくなる。
                            完備性の定義（Definition 6.3-1）は「すべての」測地線が無限に延長できることを要求するため、一本でも途切れるものがあれば完備ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        曲面上の曲線 <InlineMath math="\alpha(s)" /> が測地線であるならば、その速さは一定（<InlineMath math="|\alpha'(s)| = \text{const}" />）であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            速さの2乗 <InlineMath math="f(s) = \langle \alpha'(s), \alpha'(s) \rangle" /> を <InlineMath math="s" /> で微分する。
                        </p>
                        <BlockMath math="f'(s) = 2 \langle \alpha''(s), \alpha'(s) \rangle" />
                        <p>
                            測地線の定義（Definition 6.1-1）より、加速度ベクトル <InlineMath math="\alpha''(s)" /> は法ベクトル <InlineMath math="\mathbf{N}" /> に平行である。
                            一方、速度ベクトル <InlineMath math="\alpha'(s)" /> は接ベクトルであるため、法ベクトル <InlineMath math="\mathbf{N}" /> とは常に直交する。
                            したがって、
                        </p>
                        <BlockMath math="\langle \alpha''(s), \alpha'(s) \rangle = 0" />
                        <p>
                            となり、<InlineMath math="f'(s) = 0" /> を得る。
                            これは速さの2乗が一定であることを意味し、よって速さそのものも一定である。
                            （弧長パラメータの場合は元々速さ 1 であるが、一般のパラメータでも測地方程式の解の速さは一定となる。）
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        回転面において、経線（生成曲線）が常に測地線となることを、測地方程式（Proposition 6.1-1 関連）を用いて形式的に証明せよ。
                        回転面の第一基本形式は <InlineMath math="ds^2 = du^2 + G(u)dv^2" />、非ゼロなクリストッフェル記号は <InlineMath math="\Gamma^1_{22} = -G'/2, \Gamma^2_{12} = G'/2G" /> とせよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            経線は <InlineMath math="v = \text{const}" />（すなわち <InlineMath math="\dot{v}=0, \ddot{v}=0" />）で表される曲線である。
                            弧長パラメータ <InlineMath math="s" /> を <InlineMath math="u" /> ととる（<InlineMath math="\dot{u}=1, \ddot{u}=0" />）。
                            これらを測地方程式（Definition 6.1-2）の左辺に代入する。
                        </p>
                        <BlockMath math="\begin{aligned} (\text{第一式}) &= \ddot{u} + \Gamma^1_{11} \dot{u}^2 + 2\Gamma^1_{12} \dot{u}\dot{v} + \Gamma^1_{22} \dot{v}^2 \\ &= 0 + 0 \cdot 1^2 + 0 + \Gamma^1_{22} \cdot 0^2 = 0 \\ (\text{第二式}) &= \ddot{v} + \Gamma^2_{11} \dot{u}^2 + 2\Gamma^2_{12} \dot{u}\dot{v} + \Gamma^2_{22} \dot{v}^2 \\ &= 0 + 0 + 2\Gamma^2_{12} \cdot 1 \cdot 0 + 0 = 0 \end{aligned}" />
                        <p>
                            両方の式が <InlineMath math="0 = 0" /> となり、恒等的に満たされる。
                            したがって、回転面における経線（<InlineMath math="v = \text{const}" />）は常に測地線の条件を満たす。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        ハドマール（Hadamard）の定理に関連して、ガウス曲率が常に 0 以下（<InlineMath math="K \leq 0" />）であるような単連結で完備な曲面において、任意の 2 点を結ぶ測地線が一意に存在することを、完備性の性質（Theorem 6.3-1）を背景に論理的に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ホップ＝リノウの定理（Theorem 6.3-1）より、曲面が測地的完備であれば、任意の 2 点間を結ぶ「最短の測地線」が少なくとも一つ存在することが保証される。
                            さらに、ガウス曲率が負または 0（<InlineMath math="K \leq 0" />）という条件は、隣接する測地線同士が互いに遠ざかる（あるいは平行を保つ）傾向にあることを意味する。
                            曲面が単連結（ループを一点に収縮できる）であれば、測地線が一周して自分自身と交差したり多重に結びついたりするトポロジカルな障害がない。
                            これらの条件が組み合わさることで、2 点を結ぶ測地線がちょうど一つ（一意的）に定まる。
                            これは負曲率の幾何学における基本的な大域的性質である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
