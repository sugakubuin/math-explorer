import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultidimensionalFourierSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで 1 次元の信号や波を中心に扱ってきましたが、物理学や画像工学の世界では、2 次元、3 次元、あるいはそれ以上の多次元の現象を扱う必要が多々あります。本節では、フーリエ級数の概念を多次元へと拡張します。多重インデックスを用いることで、1 次元の理論が驚くほど美しく、かつ自然に多次元へと一般化されることがわかります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多次元フーリエ係数の定義と計算</h2>

            <p>
                多次元への拡張における鍵は、ベクトルを用いた記法です。次元を <InlineMath math="d" /> とし、位置ベクトル <InlineMath math="\mathbf{x} = (x_1, \dots, x_d)" /> と周波数インデックスベクトル（多重インデックス） <InlineMath math="\mathbf{n} = (n_1, \dots, n_d)" /> を導入します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (多次元フーリエ級数)">
                <p>
                    各変数について周期 <InlineMath math="2\pi" /> を持つ <InlineMath math="d" /> 次元関数 <InlineMath math="f(\mathbf{x})" /> の複素フーリエ級数は次のように定義される。
                </p>
                <BlockMath math="f(\mathbf{x}) \sim \sum_{\mathbf{n} \in \mathbb{Z}^d} c_{\mathbf{n}} e^{i \mathbf{n} \cdot \mathbf{x}}" />
                <p>
                    ここで、<InlineMath math="\mathbf{n} \cdot \mathbf{x} = n_1 x_1 + \dots + n_d x_d" /> はベクトルの内積であり、係数 <InlineMath math="c_{\mathbf{n}}" /> は以下の <InlineMath math="d" /> 重積分で計算される。
                </p>
                <BlockMath math="c_{\mathbf{n}} = \frac{1}{(2\pi)^d} \int_{[-\pi, \pi]^d} f(\mathbf{x}) e^{-i \mathbf{n} \cdot \mathbf{x}} d\mathbf{x}" />
            </ContentBox>

            <p>
                多次元関数であっても、各次元の変数が分離されている場合は、計算は 1 次元の積に帰着します。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (2次元余弦積のフーリエ係数)">
                <p>
                    <InlineMath math="f(x, y) = \cos x \cos y \quad (d=2)" /> の複素フーリエ係数を求めます。オイラーの公式を各変数に適用すると：
                </p>
                <BlockMath math="\begin{aligned} f(x, y) &= \left( \frac{e^{ix} + e^{-ix}}{2} \right) \left( \frac{e^{iy} + e^{-iy}}{2} \right) \\ &= \frac{1}{4} \left( e^{i(x+y)} + e^{i(x-y)} + e^{i(-x+y)} + e^{-i(x+y)} \right) \end{aligned}" />
                <p>
                    これより、係数 <InlineMath math="c_{(n_1, n_2)}" /> は、インデックスが <InlineMath math="(1,1), (1,-1), (-1,1), (-1,-1)" /> の 4 点でのみ <InlineMath math="1/4" /> となり、他のすべての点では 0 となります。
                </p>
            </ContentBox>

            <p>
                分離できない和の形の場合も同様に計算可能です。
            </p>

            <ContentBox type="example" title="Example 2.4-2 (2次元正弦・余弦和の係数)">
                <p>
                    <InlineMath math="f(x, y) = \sin x + \cos y" /> の係数を考えます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\sin x" /> 成分から、<InlineMath math="c_{(1,0)} = 1/(2i), c_{(-1,0)} = -1/(2i)" /> が得られます。</li>
                    <li><InlineMath math="\cos y" /> 成分から、<InlineMath math="c_{(0,1)} = 1/2, c_{(0,-1)} = 1/2" /> が得られます。</li>
                </ul>
                <p>
                    このように、各座標軸方向の 1 次元的な周波数成分が、多次元スペクトル上の点として配置されることがわかります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多次元パーセバルの等式と PDE への応用</h2>

            <p>
                1 次元で成立したエネルギーの保存則は、多次元でもそのまま成立します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-2 (d次元パーセバルの等式)">
                <p>
                    二乗可積分な <InlineMath math="d" /> 次元周期関数 <InlineMath math="f \in L^2(\mathbb{T}^d)" /> において、次の等式が成り立つ。
                </p>
                <BlockMath math="\frac{1}{(2\pi)^d} \int_{[-\pi, \pi]^d} |f(\mathbf{x})|^2 d\mathbf{x} = \sum_{\mathbf{n} \in \mathbb{Z}^d} |c_{\mathbf{n}}|^2" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (アウトライン)">
                <p>
                    1 次元のパーセバルの等式を、各次元 <InlineMath math="x_1, \dots, x_d" /> について順次適用する（フビニの定理による積分順序の交換）。あるいは、複素指数関数の多次元版 <InlineMath math="\{e^{i \mathbf{n} \cdot \mathbf{x}}\}_{\mathbf{n} \in \mathbb{Z}^d}" /> が多次元ヒルベルト空間 <InlineMath math="L^2(\mathbb{T}^d)" /> の完全正規直交系をなすという抽象的な性質から導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                多次元フーリエ級数は、多変数の偏微分方程式（PDE）を解くための本質的なツールとなります。
            </p>

            <ContentBox type="example" title="Example 2.4-3 (2次元ラプラス方程式への応用)">
                <p>
                    トーラス上の 2 次元ラプラス方程式 <InlineMath math="\Delta u = 0 \quad (\Delta = \partial_x^2 + \partial_y^2)" /> を考えます。解をフーリエ展開 <InlineMath math="u(x, y) = \sum c_{(n_1, n_2)} e^{i(n_1 x + n_2 y)}" /> として代入すると、各係数に対して次の代数方程式が得られます。
                </p>
                <BlockMath math="-(n_1^2 + n_2^2) c_{(n_1, n_2)} = 0" />
                <p>
                    これより、<InlineMath math="n_1 = n_2 = 0" /> 以外のすべての係数 <InlineMath math="c_{(n_1, n_2)}" /> は 0 でなければならないことが分かります。すなわち、トーラス上の調和関数は定数のみであるという、複素解析における「リュービルの定理」の離散的な対応物を非常に簡単に導き出すことができます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="高次元の「角」の問題">
                <p>
                    2 次元以上のフーリエ級数では、1 次元では起こらなかった「収束のさせ方」という新しい問題が生じます。インデックス <InlineMath math="\mathbf{n}" /> の和を「四角形」で取るか、「球体」で取るかによって、不連続点での収束挙動が変わる場合があり、これはフーリエ解析における深い研究対象となっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>多次元フーリエ級数は、多重インデックス <InlineMath math="\mathbf{n}" /> を用いて 1 次元の形式を自然に拡張したものである。</li>
                    <li>多次元パーセバルの等式は、多次元信号のエネルギー分布を周波数領域で評価することを可能にする。</li>
                    <li>偏微分方程式（ラプラス方程式など）において、微分演算子が周波数成分の二乗 <InlineMath math="|\mathbf{n}|^2" /> の掛け算に置き換わる性質は、PDE の解析を極めて簡潔にする。</li>
                    <li>多次元では総和の順序（形）が収束性に影響を与える可能性があり、1 次元よりも豊かな構造を持っている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
