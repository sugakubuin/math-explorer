import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IndependenceOfRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                事象の独立性が「事象のあつまり」としての無関連性であったのに対し、確率変数の独立性は、それらが与える情報のあつまり、すなわち σ-加法族（σ-algebra）の独立性として定義されます。
                本節では、測度論的な厳密な定義から出発し、累積分布関数や確率密度関数による実用的な判定条件までを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率変数の独立性の定義</h2>

            <p className="leading-relaxed">
                確率変数の独立性を考えるためには、まず、情報の集合体である σ-加法族の独立性を定義する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (σ-加法族と確率変数の独立性)">
                <p>
                    1. <b>σ-加法族の独立性</b>：
                    σ-加法族の族 <InlineMath math="\{\mathcal{F}_i\}" /> が独立であるとは、
                    任意の <InlineMath math="A_i \in \mathcal{F}_i" /> に対して事象族 <InlineMath math="\{A_i\}" /> が相互独立であることをいう。
                </p>
                <p>
                    2. <b>確率変数の独立性</b>：
                    確率変数列 <InlineMath math="X_1, \ldots, X_n" /> が独立であるとは、
                    各変数が生成する σ-加法族 <InlineMath math="\sigma(X_i) = X_i^{-1}(\mathcal{B}(\mathbb{R}))" /> が独立であることをいう。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義は、各確率変数 <InlineMath math="X_i" /> を通じて得られるあらゆる情報どうしに依存関係がないことを保証しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立性の同値条件</h2>

            <p className="leading-relaxed">
                抽象的な σ-加法族に基づく定義は、実効的な計算においては、結合分布関数（CDF）や結合密度関数（PDF）の積への分解という形になって現れます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (独立性の同値条件)">
                <p>
                    確率変数 <InlineMath math="X_1, \ldots, X_n" /> が独立であるための必要十分条件は、結合分布関数が周辺分布関数の積となることである：
                    <BlockMath math="F_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = F_{X_1}(x_1) F_{X_2}(x_2) \cdots F_{X_n}(x_n)" />
                    特に、連続型確率変数の場合は、結合密度関数が周辺密度の積となることと同値である：
                    <BlockMath math="f_{X_1, \ldots, X_n}(x_1, \ldots, x_n) = f_{X_1}(x_1) f_{X_2}(x_2) \cdots f_{X_n}(x_n)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    独立であれば、積集合の確率は定義により各確率の積となり、CDF の積公式が直ちに導かれる。
                    逆については、半直線の族 <InlineMath math="\{(-\infty, x] \mid x \in \mathbb{R}\}" /> がボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> を生成する <InlineMath math="\pi" />-システムであることを利用する。
                    測度の一意性を示す <InlineMath math="\pi" />-<InlineMath math="\lambda" /> 定理により、この生成系において積公式が成り立つならば、
                    生成される σ-加法族全体についても独立性が成り立つことが保証される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理を用いると、具体的な分布の計算を通じて独立性を判定できるようになります。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (指数分布の独立性)">
                <p>
                    2 変数 <InlineMath math="(X, Y)" /> の結合密度関数が <InlineMath math="f(x, y) = \lambda^2 e^{-\lambda(x+y)}" />（<InlineMath math="x, y \geq 0" />）で与えられているとする。
                    周辺密度関数を計算すると、
                    <BlockMath math="\begin{aligned} f_X(x) &= \int_0^\infty \lambda^2 e^{-\lambda x} e^{-\lambda y} dy \\ &= \lambda e^{-\lambda x} \int_0^\infty \lambda e^{-\lambda y} dy = \lambda e^{-\lambda x} \end{aligned}" />
                    であり、<InlineMath math="f_Y(y) = \lambda e^{-\lambda y}" /> も同様である。
                    <BlockMath math="f(x, y) = f_X(x) f_Y(y)" />
                    が成り立つため、<InlineMath math="X" /> と <InlineMath math="Y" /> はそれぞれ独立な指数分布に従うことが確認できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                独立性が成り立つ場合、多変数の期待値や分散の計算は、1 変数ずつの計算に帰着されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立同分布 (i.i.d.)</h2>

            <p className="leading-relaxed">
                確率論の応用において最も頻繁に現れるのが、同じ分布に従う複数の独立な確率変数を扱うケースです。
                これを短く「独立同分布」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-2 (独立同分布：i.i.d.)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が互いに独立であり、かつすべての <InlineMath math="X_n" /> が同一の確率分布に従うとき、
                    これらを<b>独立同分布</b>（independent and identically distributed, <b>i.i.d.</b>）であるという。
                </p>
                <p className="mt-4">
                    数学的には、すべての <InlineMath math="n" /> と <InlineMath math="x \in \mathbb{R}" /> に対して、
                    共通の分布関数 <InlineMath math="F" /> が存在して <InlineMath math="P(X_n \leq x) = F(x)" /> が成り立ち、
                    かつ任意の有限部分集合が独立であることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (コイン投げの標本)">
                <p>
                    あるコインを <InlineMath math="n" /> 回投げる試行において、<InlineMath math="i" /> 回目の結果を表なら <InlineMath math="1" />、裏なら <InlineMath math="0" /> とする確率変数を <InlineMath math="X_i" /> とおく。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>各試行が独立であれば、確率変数列 <InlineMath math="\{X_1, \ldots, X_n\}" /> は独立である。</li>
                    <li>同じコインを使っているため、どの <InlineMath math="i" /> に対しても表が出る確率は等しく（例：<InlineMath math="P(X_i=1) = p" />）、各変数は同一のベルヌーイ分布に従う。</li>
                </ul>
                <p className="mt-2">
                    したがって、このコイン投げの結果の列は <b>i.i.d. 系列</b> である。これは最も基本的かつ重要な i.i.d. の具体例である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                i.i.d. という仮定は、統計学における標本抽出や、物理現象における繰り返しの測定など、「同じ条件での試行を、互いに影響を与えずに行う」状況を数学的に理想化したものです。
                この単純かつ強力な設定の下で、後に学ぶ「大数の法則」や「中心極限定理」といった重要な定理が導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>確率変数の独立性は、生成される σ-加法族どうしが独立であることとして厳密に定義される。</li>
                    <li>実用的には、結合分布（CDF や PDF）が単独の分布の積に分解できることと同値である。</li>
                    <li>この分解可能性の判定は、π-λ 定理によって全ボレル集合への独立性に拡張される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
