import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_8_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                陰関数定理が最も威力を発揮する幾何学的な応用の一つが、図形の接線や接平面、法線ベクトルの決定です。
                方程式 <InlineMath math="F(x,y)=0" /> や <InlineMath math="F(x,y,z)=0" /> の形で与えられた曲線や曲面に対して、それを陽関数に直すことなく、勾配ベクトルを直接用いてこれらの幾何学的対象を記述することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲線の接線と法線</h2>

            <p>
                平面上の曲線が方程式 <InlineMath math="F(x, y) = 0" /> で与えられている場合を考えます。
                前々節でも触れた通り、関数 <InlineMath math="F(x, y)" /> の勾配ベクトル <InlineMath math="\nabla F" /> は、等高線（この場合は <InlineMath math="F=0" /> というレベルセット）に対して常に垂直になります。
            </p>

            <ContentBox type="proposition" title="Proposition 8.4-1 (陰関数表示された曲線の接線の方程式)">
                <p>
                    方程式 <InlineMath math="F(x, y) = 0" /> で表される曲線上の点 <InlineMath math="P(a, b)" /> （ただし <InlineMath math="\nabla F(a, b) \neq \mathbf{0}" />）における<strong>接線の方程式</strong>は次で与えられる：
                </p>
                <BlockMath math="F_x(a, b)(x - a) + F_y(a, b)(y - b) = 0" />
                <p className="mt-2">
                    また、同じ点における曲線の<strong>法線の方程式</strong>は次で与えられる：
                </p>
                <BlockMath math="F_y(a, b)(x - a) - F_x(a, b)(y - b) = 0" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （法線ベクトル <InlineMath math="\mathbf{n} = (F_x, F_y)" /> と並行な直線という意味。ベクトル方程式で書けば <InlineMath math="(x,y) = (a,b) + t(F_x, F_y)" />）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="導出">
                <p>
                    点 <InlineMath math="(a, b)" /> で <InlineMath math="F_y \neq 0" /> と仮定する。このとき陰関数定理により局所的に <InlineMath math="y = f(x)" /> と書け、接線の傾きは
                </p>
                <BlockMath math="f'(a) = - \frac{F_x(a, b)}{F_y(a, b)}" />
                <p>である。よって接線の方程式は <InlineMath math="y - b = f'(a)(x - a)" /> であるから、</p>
                <BlockMath math="y - b = - \frac{F_x(a, b)}{F_y(a, b)} (x - a)" />
                <p>
                    両辺に <InlineMath math="F_y(a, b)" /> を掛けて移項すれば、<InlineMath math="F_x(a, b)(x - a) + F_y(a, b)(y - b) = 0" /> を得る。
                    （<InlineMath math="F_x \neq 0, F_y = 0" /> の場合は <InlineMath math="x = g(y)" /> として考えれば同様の結果を得る。）
                </p>
                <p className="mt-2">
                    法線は接線に直交する直線であり、その方向ベクトルは接線の法線ベクトル、すなわち <InlineMath math="\nabla F = (F_x, F_y)" /> と一致する。
                    これから法線の方程式が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲面の法線ベクトルと接平面</h2>

            <p>
                全く同じ議論が3次元空間内の曲面 <InlineMath math="F(x, y, z) = 0" /> に対しても拡張できます。<InlineMath math="F(x,y,z)" /> の勾配ベクトル <InlineMath math="\nabla F = (F_x, F_y, F_z)" /> が、等位面 <InlineMath math="F=0" /> の各点における法線ベクトルとして機能します。
            </p>

            <ContentBox type="proposition" title="Proposition 8.4-2 (陰関数表示された曲面の法線ベクトルと接平面)">
                <p>
                    方程式 <InlineMath math="F(x, y, z) = 0" /> で定まる曲面上の点 <InlineMath math="P(a, b, c)" /> を考える。
                    この点で <InlineMath math="\nabla F(a, b, c) \neq \mathbf{0}" /> であるとする。
                </p>
                <p className="mt-2">
                    このとき、曲面の点 <InlineMath math="P" /> における<strong>法線ベクトル</strong>（の1つ）は、勾配ベクトルに等しい：
                </p>
                <BlockMath math="\mathbf{n} = \nabla F(a, b, c) = (F_x(a,b,c), F_y(a,b,c), F_z(a,b,c))" />
                <p className="mt-2">
                    また、点 <InlineMath math="P" /> における曲面の<strong>接平面の方程式</strong>は、点 <InlineMath math="P" /> を通り法線ベクトルが <InlineMath math="\mathbf{n}" /> の平面であるから次で与えられる：
                </p>
                <BlockMath math="\begin{aligned}
                                    F_x(a,b,c)(x - a) + F_y(a,b,c)(y - b) + F_z(a,b,c)(z - c) \\ = 0
                                \end{aligned}" />
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-1 (球面上の接平面と法線)">
                <p>
                    球面 <InlineMath math="x^2 + y^2 + z^2 = 14" /> 上の点 <InlineMath math="P(1, 2, 3)" /> における接平面の方程式、および法線の方程式を満たす直線の媒介変数表示を求めよ。
                </p>
                <p className="mt-4 font-bold text-slate-700 dark:text-slate-300">解答:</p>
                <p className="mt-2">
                    <InlineMath math="F(x, y, z) = x^2 + y^2 + z^2 - 14 = 0" /> とする。勾配ベクトルを計算すると、
                </p>
                <BlockMath math="\nabla F(x, y, z) = (2x, 2y, 2z)" />
                <p>
                    点 <InlineMath math="P(1, 2, 3)" /> における勾配ベクトル（すなわち法線ベクトル）は、
                </p>
                <BlockMath math="\mathbf{n} = \nabla F(1, 2, 3) = (2(1), 2(2), 2(3)) = (2, 4, 6)" />
                <p className="mt-2">
                    （法線ベクトルとしては定数倍して <InlineMath math="(1, 2, 3)" /> としても良い。実際、原点中心の球の任意の点での法線ベクトルは、その点への位置ベクトルと平行になる。）
                </p>
                <p className="mt-2">
                    接平面の方程式は、法線ベクトルを <InlineMath math="(1, 2, 3)" /> として
                </p>
                <BlockMath math="\begin{aligned}
                                    1(x - 1) + 2(y - 2) + & 3(z - 3) = 0 \\
                                    &\implies x + 2y + 3z - 14 = 0
                                \end{aligned}" />
                <p className="mt-2">
                    法線の方程式（直線）の媒介変数表示は、媒介変数を <InlineMath math="t" /> として
                </p>
                <BlockMath math="\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + t \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （すなわち <InlineMath math="x = 1+t, y = 2+2t, z = 3+3t" />）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>方程式 <InlineMath math="F(x,y)=0" /> や <InlineMath math="F(x,y,z)=0" /> で表される図形の各点において、関数 <InlineMath math="F" /> の勾配ベクトル <InlineMath math="\nabla F" /> は、その図形の法線ベクトルとなる。</li>
                    <li>点 <InlineMath math="\mathbf{a}" /> における接線・接平面の方程式は、<InlineMath math="\nabla F(\mathbf{a}) \cdot (\mathbf{x} - \mathbf{a}) = 0" /> の形（内積＝0、すなわち勾配ベクトルに垂直なベクトル全体）として極めて美しく決定される。</li>
                    <li>この幾何学的知見は、ラグランジュの未定乗数法において「目的関数の勾配と制約図形の勾配（法線）が平行になる」という条件を直感的に裏付けるものである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
