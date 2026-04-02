import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultiDimensionalSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                現実世界の物理現象（熱伝導、波動、量子力学）は、多くの場合 2 次元や 3 次元の空間で展開されます。これまでに学んだ 1 次元のフーリエ解析の概念は、ベクトル表記を用いることで自然に多次元へと拡張することができます。本節では、多次元フーリエ変換の定義とその重要な性質について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多次元フーリエ変換の定義</h2>

            <p>
                <InlineMath math="d" /> 次元空間 <InlineMath math="\mathbb{R}^d" /> における座標をベクトル <InlineMath math="\mathbf{x} = (x_1, \dots, x_d)" />、周波数を <InlineMath math="\boldsymbol{\xi} = (\xi_1, \dots, \xi_d)" /> と表記します。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (多次元フーリエ変換)">
                <p>
                    関数 <InlineMath math="f \in L^1(\mathbb{R}^d)" /> に対し、その <b>多次元フーリエ変換</b> <InlineMath math="\hat{f}(\boldsymbol{\xi})" /> を次のように定義する：
                </p>
                <BlockMath math="\begin{aligned} \hat{f}(\boldsymbol{\xi}) &= \int_{\mathbb{R}^d} f(\mathbf{x}) e^{-i \boldsymbol{\xi} \cdot \mathbf{x}} d\mathbf{x} \\ &= \int \dots \int f(x_1, \dots, x_d) e^{-i (\xi_1 x_1 + \dots + \xi_d x_d)} dx_1 \dots dx_d \end{aligned}" />
            </ContentBox>

            <p>
                逆変換も同様に、内積の符号を反転させ、正規化因子 <InlineMath math="(2\pi)^d" /> を用いて定義されます。
            </p>

            <ContentBox type="definition" title="Definition 4.3-2 (多次元逆フーリエ変換)">
                <p>
                    逆変換は、次のように与えられる：
                </p>
                <BlockMath math="f(\mathbf{x}) = \frac{1}{(2\pi)^d} \int_{\mathbb{R}^d} \hat{f}(\boldsymbol{\xi}) e^{i \boldsymbol{\xi} \cdot \mathbf{x}} d\boldsymbol{\xi}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離変数型とガウス関数</h2>

            <p>
                多次元の積分は、関数が各次元の積として表される（分離変数型）とき、計算が非常に簡潔になります。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (分離変数型の変換)">
                <p>
                    <InlineMath math="f(\mathbf{x}) = f_1(x_1)f_2(x_2)\dots f_d(x_d)" /> のとき、そのフーリエ変換は各 1 次元フーリエ変換の積となります：
                </p>
                <BlockMath math="\hat{f}(\boldsymbol{\xi}) = \hat{f}_1(\xi_1)\hat{f}_2(\xi_2)\dots \hat{f}_d(\xi_d)" />
                <p>
                    この性質により、多次元のガウス関数 <InlineMath math="f(\mathbf{x}) = e^{-|\mathbf{x}|^2} = e^{-(x_1^2 + \dots + x_d^2)}" /> の変換は、1 次元の結果を <InlineMath math="d" /> 回掛け合わせることで得られます。
                </p>
                <BlockMath math="\hat{f}(\boldsymbol{\xi}) = \pi^{d/2} e^{-|\boldsymbol{\xi}|^2/4}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">球対称関数とハンケル変換への導入</h2>

            <ContentBox type="remark" title="球対称性と回転不変性">
                <p>
                    関数 <InlineMath math="f(\mathbf{x})" /> が中心からの距離のみに依存する <b>球対称関数</b> （<InlineMath math="f(\mathbf{x}) = f_0(|\mathbf{x}|)" />）であるとき、そのフーリエ変換もまた球対称（周波数の絶対値のみに依存）となります。
                </p>
                <p>
                    特に 2 次元や 3 次元の球対称関数に対して、極座標変換を用いて多次元積分の次元を落とす変換は <b>ハンケル変換</b> と呼ばれ、光工学などの円筒対称・球対称な問題を解くための強力なツールとなります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (3次元における球対称変換)">
                <p>
                    3 次元の球対称関数 <InlineMath math="f(r)" /> に対して、極座標を用いてフーリエ変換を計算すると：
                </p>
                <BlockMath math="\hat{f}(\rho) = \frac{4\pi}{\rho} \int_0^\infty f(r) r \sin(\rho r) dr \quad (\rho = |\boldsymbol{\xi}|)" />
                <p>
                    のように、見かけ上 1 次元の積分として扱うことが可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>多次元フーリエ変換は、多変数積分の形で 1 次元の定義を自然に拡張したものである。</li>
                    <li>分離変数型の関数に対しては、各次元のフーリエ変換の積として計算を簡略化できる。</li>
                    <li>球対称な関数に対しては、フーリエ変換も球対称となり、ハンケル変換などの低次元な積分に帰着できる。</li>
                    <li>ガウス関数は、多次元においてもフーリエ変換によって自身の形状を維持する（自己対的な）性質を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
