import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DefinitionOfLinearMap() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章までは、ベクトル空間そのものの性質（基底、次元など）について詳しく見てきました。
                本章からは、2つのベクトル空間の間を結ぶ「写像（関数）」について考えます。
                特に、ベクトル空間の構造（和とスカラー倍）を壊さずに別世界へ移す特別な写像、<strong>線形写像（Linear Transformation / Linear Map）</strong>を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形写像の定義</h2>

            <p>
                ベクトル空間で許されている演算は「ベクトルの和」と「スカラー倍」の2つのみです。
                「ベクトルを足してから写す」ことと、「写してから足す」ことが一致し、同様に「スカラー倍してから写す」ことと「写してからスカラー倍する」ことが一致するような写像を考えます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 （線形写像 / Linear Transformation）">
                <p>
                    同じスカラー体 <InlineMath math="K" /> 上のベクトル空間 <InlineMath math="V" /> と <InlineMath math="W" /> について、写像 <InlineMath math="f: V \to W" /> が以下の2つの条件を満たすとき、<InlineMath math="f" /> は<strong>線形写像</strong>（または<strong>線形変換</strong>）であるという。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>加法性（Additivity）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対し、
                        <BlockMath math="f(\boldsymbol{x} + \boldsymbol{y}) = f(\boldsymbol{x}) + f(\boldsymbol{y})" />
                    </li>
                    <li>
                        <strong>斉次性（Homogeneity）：</strong><br />
                        任意の <InlineMath math="\boldsymbol{x} \in V" /> と任意のスカラー <InlineMath math="c \in K" /> に対し、
                        <BlockMath math="f(c\boldsymbol{x}) = c f(\boldsymbol{x})" />
                    </li>
                </ol>
                <p className="mt-4 text-sm">
                    ※ これら2つの条件をまとめて、「任意の <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> とスカラー <InlineMath math="c, d \in K" /> について <InlineMath math="f(c\boldsymbol{x} + d\boldsymbol{y}) = c f(\boldsymbol{x}) + d f(\boldsymbol{y})" /> が成り立つ」と1つの条件で定義することも多いです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形写像の具体例</h2>

            <ContentBox type="example" title="Example 3.1-1 （線形写像の例）">
                <p className="font-bold">【例1】 行列による写像</p>
                <p>
                    <InlineMath math="m \times n" /> 行列 <InlineMath math="A" /> によって定義される写像 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}^m" />, <InlineMath math="f(\boldsymbol{x}) = A\boldsymbol{x}" /> は線形写像です。<br />
                    行列の基本的な演算規則から、<InlineMath math="A(\boldsymbol{x} + \boldsymbol{y}) = A\boldsymbol{x} + A\boldsymbol{y}" /> および <InlineMath math="A(c\boldsymbol{x}) = c(A\boldsymbol{x})" /> が直ちに成り立ちます。有限次元のベクトル空間間の線形写像は、すべてこの「行列を掛ける」操作で表現できることが後に分かります（表現行列）。
                </p>

                <p className="font-bold mt-6">【例2】 微分作用素</p>
                <p>
                    実数上の滑らかな関数のなすベクトル空間からそれ自身への写像 <InlineMath math="D(f) = f'" /> （関数を導関数に送る写像）も線形写像です。<br />
                    微分の性質より、<InlineMath math="(f + g)' = f' + g'" />、<InlineMath math="(cf)' = cf'" /> が成り立つためです。
                </p>

                <p className="font-bold mt-6">【例3】 積分作用素</p>
                <p>
                    連続関数の空間において、ある区間 <InlineMath math="[a, b]" /> での定積分 <InlineMath math="I(f) = \int_a^b f(x) dx" /> を送る写像も線形写像です（関数空間から実数 <InlineMath math="\mathbb{R}" /> への線形写像）。<br />
                    積分の性質 <InlineMath math="\int (f + g) = \int f + \int g" />, <InlineMath math="\int (cf) = c \int f" /> に他なりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な性質</h2>

            <p>
                線形写像は、ベクトル空間の「原点（零ベクトル）」を必ず相手の空間の「原点」へ移すという重要な性質を持ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 （基本性質：零ベクトルの保存など）">
                <p>
                    <InlineMath math="f: V \to W" /> を線形写像とする。このとき、以下の性質が成り立つ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="f(\boldsymbol{0}_V) = \boldsymbol{0}_W" /> （零ベクトルは零ベクトルに移る）</li>
                    <li><InlineMath math="f(-\boldsymbol{x}) = -f(\boldsymbol{x})" /> （逆元は逆元に移る）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="font-bold">1. <InlineMath math="\boldsymbol{0}_V" /> は <InlineMath math="\boldsymbol{0}_W" /> に移ることの証明：</p>
                <p>
                    ベクトル空間 <InlineMath math="V" /> において、<InlineMath math="\boldsymbol{0}_V + \boldsymbol{0}_V = \boldsymbol{0}_V" /> が成り立ちます。両辺を <InlineMath math="f" /> で写すと加法性より、
                </p>
                <BlockMath math="f(\boldsymbol{0}_V) = f(\boldsymbol{0}_V + \boldsymbol{0}_V) = f(\boldsymbol{0}_V) + f(\boldsymbol{0}_V)" />
                <p>
                    となります。<InlineMath math="f(\boldsymbol{0}_V)" /> も <InlineMath math="W" /> のベクトルであるため、両辺に <InlineMath math="W" /> における <InlineMath math="f(\boldsymbol{0}_V)" /> の逆元 <InlineMath math="-f(\boldsymbol{0}_V)" /> を足すと、
                </p>
                <BlockMath math="\boldsymbol{0}_W = f(\boldsymbol{0}_V)" />
                <p>
                    が得られます。<br />
                    （別証明として、斉次性を用いて <InlineMath math="f(\boldsymbol{0}_V) = f(0 \cdot \boldsymbol{v}) = 0 \cdot f(\boldsymbol{v}) = \boldsymbol{0}_W" /> とすることも可能です。）
                </p>

                <p className="font-bold mt-4">2. <InlineMath math="-\boldsymbol{x}" /> の行き先の証明：</p>
                <p>
                    一般のスカラー体において <InlineMath math="-\boldsymbol{x} = (-1)\boldsymbol{x}" /> であることと斉次性を用います。
                </p>
                <BlockMath math="f(-\boldsymbol{x}) = f((-1)\boldsymbol{x}) = (-1)f(\boldsymbol{x}) = -f(\boldsymbol{x})" />
                <p>
                    よって成り立ちます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>「和を写したもの」が「写したものの和」になり、「スカラー倍を写したもの」が「写したもののスカラー倍」になる写像を<strong>線形写像</strong>と呼ぶ（Definition 3.1-1）。</li>
                    <li>行列の掛け算や、微積分操作も線形写像の一種であるとみなせる（Example 3.1-1）。</li>
                    <li>線形写像は、必ず定義域側の零ベクトルを値域側の零ベクトルに写す特徴をもつ（Proposition 3.1-1）。逆に言えば、原点を原点に移さない写像（例：<InlineMath math="f(x) = x + 1" />）は線形写像にはならない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
