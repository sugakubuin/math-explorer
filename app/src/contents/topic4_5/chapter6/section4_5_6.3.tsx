import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IntegrationOfForms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体上の積分は、局所的にはユークリッド空間の重積分に帰着させることで定義します。
                しかし、多様体全体にわたる積分を定義するためには、複数の座標近傍（チャート）での積分値を矛盾なく足し合わせる必要があります。
                この「貼り合わせ」を可能にするのが、§1.5 で学んだ「1の分割（partition of unity）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分の定義</h2>

            <p className="leading-relaxed">
                まず、1つのチャート <InlineMath math="(U, \varphi)" /> の内部に台（support：値が <InlineMath math="0" /> でない点の閉包）を持つ <InlineMath math="n" />-形式の積分を定義します。
                <InlineMath math="n" />-形式 <InlineMath math="\omega" /> は、局所座標で <InlineMath math="\omega = f(x) \, dx^1 \wedge \cdots \wedge dx^n" /> と書けます。
                このとき、<InlineMath math="\omega" /> の <InlineMath math="U" /> 上での積分を、<InlineMath math="\mathbb{R}^n" /> の開集合 <InlineMath math="\varphi(U)" /> 上での関数 <InlineMath math="f \circ \varphi^{-1}" /> の重積分として定義します。
            </p>
            <BlockMath math="\int_U \omega = \int_{\varphi(U)} f(\varphi^{-1}(x)) \, dx^1 \cdots dx^n" />
            <p className="leading-relaxed">
                この定義が座標変換に対して不変であることは、前節の Proposition 6.2-2（<InlineMath math="n" />-形式の変換則にヤコビ行列式が現れること）と、多変数微積分の変数変換公式から保証されます。
                ただし、ヤコビ行列式が正であること（向き付けが保たれること）が不可欠です。
            </p>

            <p className="leading-relaxed">
                次に、多様体全体で定義された <InlineMath math="n" />-形式の積分を、1の分割を用いて定義します。
                積分が有限確定値を持つことを保証するため、ここでは「コンパクトな台をもつ」形式に限定します。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (多様体上の積分)">
                <p>
                    <InlineMath math="M" /> を向き付けられた <InlineMath math="n" /> 次元多様体とし、<InlineMath math="\omega \in \Omega^n(M)" /> をコンパクトな台をもつ <InlineMath math="n" />-形式とする。
                </p>
                <p className="mt-2">
                    <InlineMath math="M" /> の向き付けられたアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> をとり、これに従属する1の分割 <InlineMath math="\{\rho_\alpha\}" /> を選ぶ。
                    このとき、<InlineMath math="M" /> 上の <InlineMath math="\omega" /> の<strong>積分（integral）</strong>を次のように定義する。
                </p>
                <BlockMath math="\int_M \omega = \sum_\alpha \int_{U_\alpha} \rho_\alpha \omega = \sum_\alpha \int_{\varphi_\alpha(U_\alpha)} (\varphi_\alpha^{-1})^*(\rho_\alpha \omega)" />
                <p className="mt-2">
                    ここで、<InlineMath math="\rho_\alpha \omega" /> は <InlineMath math="U_\alpha" /> に台を持つ <InlineMath math="n" />-形式であるため、各項の積分は前述の単一チャートでの積分として well-defined である。
                    また、<InlineMath math="\omega" /> の台がコンパクトであるため、この和は有限和となり収束する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義が、アトラスや1の分割の選び方に依存しない（well-defined である）ことを確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-1">
                <p>
                    積分の定義（Definition 6.3-1）は、向き付けられたアトラスと1の分割の選び方に依存しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    別の向き付けられたアトラス <InlineMath math="\{(V_\beta, \psi_\beta)\}" /> と、それに従属する1の分割 <InlineMath math="\{\chi_\beta\}" /> を用いて計算した積分を <InlineMath math="\sum_\beta \int_{V_\beta} \chi_\beta \omega" /> とする。
                    1の分割の性質 <InlineMath math="\sum_\alpha \rho_\alpha = 1" /> および <InlineMath math="\sum_\beta \chi_\beta = 1" /> を用いると、
                </p>
                <BlockMath math="\begin{aligned} \sum_\alpha \int_{U_\alpha} \rho_\alpha \omega &= \sum_\alpha \int_{U_\alpha} \rho_\alpha \left( \sum_\beta \chi_\beta \right) \omega = \sum_\alpha \sum_\beta \int_{U_\alpha \cap V_\beta} \rho_\alpha \chi_\beta \omega \\ &= \sum_\beta \sum_\alpha \int_{U_\alpha \cap V_\beta} \chi_\beta \rho_\alpha \omega = \sum_\beta \int_{V_\beta} \chi_\beta \left( \sum_\alpha \rho_\alpha \right) \omega = \sum_\beta \int_{V_\beta} \chi_\beta \omega \end{aligned}" />
                <p className="mt-2">
                    となる。ここで、<InlineMath math="\int_{U_\alpha \cap V_\beta} \rho_\alpha \chi_\beta \omega" /> の部分は、<InlineMath math="U_\alpha" /> の座標で計算しても <InlineMath math="V_\beta" /> の座標で計算しても一致する。
                    なぜなら、両アトラスは同じ向き付けを定めているため、座標変換のヤコビ行列式が正（<InlineMath math="\det J = |\det J|" />）であり、<InlineMath math="n" />-形式の変換則（Proposition 6.2-2）が重積分の変数変換公式と完全に一致するからである。
                    したがって、積分の値はアトラスと1の分割の選び方に依存しない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な多様体上の積分を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    円周 <InlineMath math="S^1" /> 上の1-形式 <InlineMath math="\omega = d\theta" /> の積分 <InlineMath math="\int_{S^1} d\theta" /> を計算する。
                </p>
                <p className="mt-2">
                    <InlineMath math="S^1" /> を2つの開集合で被覆する。<InlineMath math="U_1 = S^1 \setminus \{(1,0)\}" />（角度 <InlineMath math="0 < \theta_1 < 2\pi" />）、<InlineMath math="U_2 = S^1 \setminus \{(-1,0)\}" />（角度 <InlineMath math="-\pi < \theta_2 < \pi" />）とする。
                    これらに従属する1の分割 <InlineMath math="\{\rho_1, \rho_2\}" /> をとる。
                </p>
                <BlockMath math="\int_{S^1} d\theta = \int_{U_1} \rho_1 \, d\theta_1 + \int_{U_2} \rho_2 \, d\theta_2" />
                <p className="mt-2">
                    <InlineMath math="U_1 \cap U_2" /> 上では <InlineMath math="d\theta_1 = d\theta_2" /> であるため、
                </p>
                <BlockMath math="\int_{S^1} d\theta = \int_0^{2\pi} (\rho_1(\theta) + \rho_2(\theta)) \, d\theta = \int_0^{2\pi} 1 \, d\theta = 2\pi" />
                <p className="mt-2">
                    となる。このように、1の分割を具体的に構成しなくても、その性質（和が1になること）を用いるだけで積分値を計算できることが多い。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分の基本性質</h2>

            <p className="leading-relaxed">
                多様体上の積分は、通常の積分が持つ線形性などの基本的な性質を満たします。
                また、向き付けに依存するという重要な性質があります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-2">
                <p>
                    <InlineMath math="M" /> を向き付けられた <InlineMath math="n" /> 次元多様体とし、<InlineMath math="\omega, \eta" /> をコンパクト台をもつ <InlineMath math="n" />-形式とする。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>線形性：</strong> 任意の実数 <InlineMath math="a, b" /> に対して、<InlineMath math="\int_M (a\omega + b\eta) = a\int_M \omega + b\int_M \eta" /></li>
                    <li><strong>向きの反転：</strong> <InlineMath math="-M" /> を <InlineMath math="M" /> の向き付けを逆にした多様体（逆の向き付けられたアトラスを持つ多様体）とすると、
                        <BlockMath math="\int_{-M} \omega = -\int_M \omega" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 1の分割を用いた定義式が各項で線形であることから明らかである。
                </p>
                <p className="mt-2">
                    2. 向き付けを反転させるということは、アトラスの各チャートの座標系を、ヤコビ行列式が負になるように（例えば <InlineMath math="x^1" /> を <InlineMath math="-x^1" /> に）取り替えることを意味する。
                    このとき、局所座標での積分
                </p>
                <BlockMath math="\int_{\varphi(U)} f(x^1, x^2, \ldots, x^n) \, dx^1 \cdots dx^n" />
                <p className="mt-2">
                    において、変数変換 <InlineMath math="y^1 = -x^1, y^i = x^i (i \geq 2)" /> を行うと、ヤコビアンは <InlineMath math="-1" /> であるが、重積分の変数変換公式ではその絶対値 <InlineMath math="1" /> が掛かる。
                    しかし、積分領域の向きが反転する（<InlineMath math="x^1" /> の積分区間が反転する）ため、積分の値全体にマイナス符号がつく。
                    これがすべてのチャートで起こるため、全体として <InlineMath math="\int_{-M} \omega = -\int_M \omega" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="非コンパクト多様体上の積分">
                <p>
                    本節では、和が有限で収束することを保証するために「コンパクトな台をもつ」形式に限定しました。
                    台がコンパクトでない形式（例えば <InlineMath math="\mathbb{R}^n" /> 全体で減衰する関数など）の積分を定義するには、広義積分の理論が必要になります。
                    その場合、1の分割を用いた和が絶対収束するかどうかを議論しなければならず、技術的な困難が伴います。
                    しかし、ストークスの定理などの主要な定理は、コンパクト多様体（またはコンパクトな台をもつ形式）を対象とすることが多いため、この定義で十分な場合がほとんどです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多様体上の積分は、1の分割を用いて各チャート上の重積分の和として定義される。</li>
                    <li>積分の値は、向き付けられたアトラスと1の分割の選び方に依存しない。</li>
                    <li>積分は線形性を持ち、多様体の向き付けを反転させると積分の符号が反転する（<InlineMath math="\int_{-M} \omega = -\int_M \omega" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
