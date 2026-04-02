import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionAndEquationsOfGeodesics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                平面上において「最も真っ直ぐな線」あるいは「2点間を結ぶ最短の線」は直線です。では、曲がった曲面上において直線の役割を果たす曲線はどのようなものでしょうか。この章では、曲面上の「真っ直ぐな線」である「測地線（geodesic）」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">測地線の定義</h2>

            <p className="leading-relaxed">
                曲面上の曲線が「曲面上から見て真っ直ぐ」であるということは、曲線が余計な横ブレをせず、ただ曲面の凹凸に沿ってのみ曲がっていることを意味します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.1-1 (測地線)"
            >
                <p>
                    正則曲面 <InlineMath math="S" /> 上の弧長パラメータ付き曲線 <InlineMath math="\alpha(s)" /> が<strong>測地線（geodesic）</strong>であるとは、その加速度ベクトル <InlineMath math="\alpha''(s)" /> が、至るところで曲面の法線方向（単位法ベクトル <InlineMath math="\mathbf{N}" /> の方向）を向くことをいう。
                </p>
                <p>
                    すなわち、接ベクトル <InlineMath math="T(s) = \alpha'(s)" /> の微分が接平面 <InlineMath math="T_p S" /> 成分を持たないことと同値である。
                    （この接平面への射影成分を「測地曲率」といい、これが <InlineMath math="0" /> であることが測地線の条件である。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この幾何学的な定義を、曲面のパラメータ <InlineMath math="(u,v)" /> に関する微分方程式に翻訳することができます。ここで前章で導入したクリストッフェル記号が活躍します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.1-2 (測地方程式)"
            >
                <p>
                    曲面上の曲線 <InlineMath math="\alpha = \mathbf{x}(u(s), v(s))" /> が測地線であるための必要十分条件は、パラメータの関数 <InlineMath math="u(s), v(s)" /> が次の連立常微分方程式を満たすことである。
                    <BlockMath math="\ddot{u} + \Gamma^1_{11}\dot{u}^2 + 2\Gamma^1_{12}\dot{u}\dot{v} + \Gamma^1_{22}\dot{v}^2 = 0" />
                    <BlockMath math="\ddot{v} + \Gamma^2_{11}\dot{u}^2 + 2\Gamma^2_{12}\dot{u}\dot{v} + \Gamma^2_{22}\dot{v}^2 = 0" />
                    （ここで <InlineMath math="\dot{u} = \frac{du}{ds}, \ddot{u} = \frac{d^2u}{ds^2}" /> などである。）
                </p>
                <p>
                    これを<strong>測地方程式（geodesic equations）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この測地方程式の形から、ある点からある方向へ向かう測地線が局所的に必ず一つだけ存在することが保証されます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.1-1 (測地線の存在と一意性)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の任意の点 <InlineMath math="p \in S" /> と、その接平面内の任意の非零ベクトル <InlineMath math="v \in T_p S" /> が与えられたとき、初期条件 <InlineMath math="\alpha(0) = p" /> かつ <InlineMath math="\alpha'(0) = v" /> を満たす測地線 <InlineMath math="\alpha(s)" /> が、（少なくとも <InlineMath math="s=0" /> を含む十分小さい区間で）<strong>ただ一つ存在する</strong>。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    測地方程式は、未知関数 <InlineMath math="u(s), v(s)" /> に関する2階の非線形常微分方程式系である。
                    これを新しい変数 <InlineMath math="w_1 = \dot{u}, w_2 = \dot{v}" /> を導入することで、<InlineMath math="(u, v, w_1, w_2)" /> に関する1階の常微分方程式系に書き換えることができる。
                </p>
                <p>
                    <BlockMath math="\dot{w}_1 = - (\Gamma^1_{11}w_1^2 + 2\Gamma^1_{12}w_1 w_2 + \Gamma^1_{22}w_2^2)" />
                    <BlockMath math="\dot{w}_2 = - (\Gamma^2_{11}w_1^2 + 2\Gamma^2_{12}w_1 w_2 + \Gamma^2_{22}w_2^2)" />
                </p>
                <p>
                    クリストッフェル記号 <InlineMath math="\Gamma^k_{ij}" /> は曲面が正則（<InlineMath math="C^\infty" />）である限り滑らかな関数であるため、この常微分方程式の右辺は局所的にリプシッツ連続となる。
                    したがって、常微分方程式の解の存在と一意性の定理（ピカール・リンデレフの定理）より、与えられた初期値 <InlineMath math="(u(0), v(0))" /> と <InlineMath math="(\dot{u}(0), \dot{v}(0))" /> に対して、解が局所的に一意に存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">測地線の局所最短性</h2>

            <p className="leading-relaxed">
                測地線のもう一つの重要な側面は、「最短経路」としての性質です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.1-2 (局所最短性)"
            >
                <p>
                    曲面 <InlineMath math="S" /> 上の十分近い2点を結ぶ曲線の中で、長さを最小にする曲線は必ず測地線である。
                    逆に、測地線の十分短い弧は、その両端点を結ぶ曲面上の曲線の中で長さを局所的に最小化する。
                </p>
                <p>
                    （ただし、大域的には必ずしも最短であるとは限らない。例えば球面上の大円の「遠回り」する弧は測地線だが、最短ではない。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この証明は変分法（3-6）の理論を用いる。
                    曲面上の曲線 <InlineMath math="\gamma(t) = \mathbf{x}(u(t), v(t))" /> の長さを与える汎関数（エネルギー汎関数）を考える。
                    <BlockMath math="E[\gamma] = \frac{1}{2} \int_a^b \left( E\dot{u}^2 + 2F\dot{u}\dot{v} + G\dot{v}^2 \right) dt" />
                </p>
                <p>
                    この汎関数が極小値をとるための必要条件（オイラー＝ラグランジュ方程式）を計算する。
                    <InlineMath math="u" /> および <InlineMath math="v" /> に関する第一変分を計算して <InlineMath math="0" /> とおくと、式を整理する過程で第一基本形式の微分の組み合わせが現れ、最終的にそれはまさに「測地方程式」と完全に一致する。
                </p>
                <p>
                    すなわち、「長さを停留させる曲線」と「加速度が法線方向を向く曲線（測地線）」は数学的に等価であることが示される。第二変分の正値性から、十分短い区間ではこれが実際に最小値を与えることも確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-1 (平面の測地線)"
            >
                <p>
                    もっとも簡単な例として、平面の測地線を求めてみよう。
                    平面の第一基本形式は <InlineMath math="E=1, F=0, G=1" />（定数）であった。
                </p>
                <p>
                    係数がすべて定数であるため、その偏微分はすべて <InlineMath math="0" /> になる。したがって、クリストッフェル記号の公式から、すべての <InlineMath math="\Gamma^k_{ij}" /> は <InlineMath math="0" /> となる。
                    これを測地方程式に代入すると、
                    <BlockMath math="\ddot{u} = 0, \quad \ddot{v} = 0" />
                    という極めて単純な微分方程式が得られる。
                </p>
                <p>
                    これを積分すると、<InlineMath math="u(s) = as + b" />、<InlineMath math="v(s) = cs + d" /> となる。これは平面上の「直線」のパラメータ表示に他ならない。よって、平面上の測地線は直線であることが数式からも確認できた。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>曲面上の曲線で、加速度が常に曲面の法線方向を向くものを測地線と呼ぶ。</li>
                    <li>測地線は、クリストッフェル記号を用いた2階の非線形常微分方程式（測地方程式）を満たす。</li>
                    <li>ある点と初速度を指定すれば測地線は局所的に一意に存在し、さらに測地線は「局所的に距離を最小化する」性質（局所最短性）を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}