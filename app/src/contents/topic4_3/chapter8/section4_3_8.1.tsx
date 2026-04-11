import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ModularGroupAction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>これまでの章では、特定の格子や母数に付随する楕円関数や楕円曲線の性質を深く掘り下げてきました。本章では視点を広げ、これらすべての格子や楕円曲線を統一的に扱うための舞台である「モジュライ空間」について展望します。その第一歩として、複素上半平面に作用するモジュラー群について解説します。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モジュラー群の作用</h2>

            <p>格子のモジュラス <InlineMath math="\tau = \omega_2/\omega_1" /> は、規格化条件により <InlineMath math="\text{Im}(\tau) > 0" /> を満たすように選ばれました。この条件を満たす複素数全体の集合を上半平面（Upper Half-Plane）と呼び、<InlineMath math="\mathbb{H}" /> で表します。この空間に対して、行列群が自然な作用を持ちます。</p>

            <ContentBox type="definition" title={<span>Definition 8.1-1 (上半平面 <InlineMath math="\mathbb{H}" /> へのモジュラー群の作用)</span>}>
                <p>成分が整数であり、行列式が <InlineMath math="1" /> である <InlineMath math="2 \times 2" /> 行列のなす群を<b>モジュラー群（modular group）</b>と呼び、<InlineMath math="\text{SL}_2(\mathbb{Z})" /> と表記する。すなわち、
                <BlockMath math="\text{SL}_2(\mathbb{Z}) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \,\middle|\, a, b, c, d \in \mathbb{Z},\, ad - bc = 1 \right\}" />
                である。上半平面 <InlineMath math="\mathbb{H} = \{\tau \in \mathbb{C} \mid \text{Im}(\tau) > 0\}" /> に対し、<InlineMath math="\text{SL}_2(\mathbb{Z})" /> の元 <InlineMath math="\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> は次のような一次分数変換として作用する。
                <BlockMath math="\gamma \cdot \tau = \frac{a\tau + b}{c\tau + d}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-1">
                <p>モジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> は、以下の2つの特別な行列によって生成されることが知られている。</p>
                <BlockMath math="T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" />
                <p>これらが上半平面の元 <InlineMath math="\tau" /> にどのように作用するか計算すると、
                <BlockMath math="T \cdot \tau = \frac{1 \cdot \tau + 1}{0 \cdot \tau + 1} = \tau + 1" />
                <BlockMath math="S \cdot \tau = \frac{0 \cdot \tau + (-1)}{1 \cdot \tau + 0} = -\frac{1}{\tau}" />
                となる。すなわち、<InlineMath math="T" /> は「<InlineMath math="1" /> だけの平行移動（ずらし）」を意味し、<InlineMath math="S" /> は「原点に関する反転」を意味する。</p>
            </ContentBox>

            <p>この行列群の作用は単なる代数的な操作ではなく、幾何学的に明確な意味を持っています。次のコラムでその背景を確認しましょう。</p>

            <ContentBox type="column" title="格子の基底変換との対応">
                <p>モジュラー群の作用は、格子 <InlineMath math="\Lambda = \mathbb{Z} + \tau\mathbb{Z}" /> の基底の取り替えそのものです。同一の格子を生成する別の基底 <InlineMath math="(1', \tau')" /> は、整数係数の可逆行列を用いて変換されます。元のモジュラス <InlineMath math="\tau" /> と新しいモジュラス <InlineMath math="\tau'" /> が同じ <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の軌道に属すること（すなわち <InlineMath math="\tau' = \gamma \cdot \tau" /> となる <InlineMath math="\gamma" /> が存在すること）は、対応する複素トーラス同士が複素多様体として同型であること、つまり <InlineMath math="\mathbb{C}/(\mathbb{Z}+\tau\mathbb{Z}) \cong \mathbb{C}/(\mathbb{Z}+\tau'\mathbb{Z})" /> となるための必要十分条件です。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本領域</h2>

            <p>上半平面の点 <InlineMath math="\tau" /> に対してモジュラー群の元を次々と作用させると、無数に多くの点が得られます。これらの点を互いに同値であるとみなすとき、その代表元を重複なく（境界の微妙な点を除いて）含むような領域を考えることができます。</p>

            <ContentBox type="definition" title={<span>Definition 8.1-2 (基本領域 <InlineMath math="\mathcal{F}" />)</span>}>
                <p>モジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の上半平面 <InlineMath math="\mathbb{H}" /> における<b>基本領域（fundamental domain）</b> <InlineMath math="\mathcal{F}" /> を次のように定義する。
                <BlockMath math="\mathcal{F} = \left\{ \tau \in \mathbb{H} \,\middle|\, |\text{Re}(\tau)| \leq \frac{1}{2},\, |\tau| \geq 1 \right\}" />
                </p>
            </ContentBox>

            <p>この <InlineMath math="\mathcal{F}" /> は、虚軸を中心に左右に幅 <InlineMath math="1" /> で広がり、かつ単位円の外側にある領域です。任意のモジュラスがこの領域内の点に変換できるというのが次の命題です。</p>

            <ContentBox type="proposition" title="Proposition 8.1-1">
                <p>上半平面の任意の点 <InlineMath math="\tau \in \mathbb{H}" /> は、モジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の作用によって、基本領域 <InlineMath math="\mathcal{F}" /> 内の点に移すことができる。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>与えられた <InlineMath math="\tau \in \mathbb{H}" /> に対して、<InlineMath math="\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})" /> を作用させたときの虚部の変化をみる。
                <BlockMath math="\text{Im}(\gamma \cdot \tau) = \text{Im}\left(\frac{a\tau + b}{c\tau + d}\right) = \frac{\text{Im}(\tau)}{|c\tau + d|^2}" />
                整数 <InlineMath math="c, d" /> に対して <InlineMath math="|c\tau + d|^2" /> はいくらでも大きくなりうるが、小さくなるような組 <InlineMath math="(c, d)" /> は有限個しかないため、<InlineMath math="\text{Im}(\gamma \cdot \tau)" /> を最大にするような <InlineMath math="\gamma" /> が存在する。そのような <InlineMath math="\gamma" /> を選び、<InlineMath math="\tau' = \gamma \cdot \tau" /> とする。</p>
                <p>さらに、適当な整数 <InlineMath math="k" /> を選んで <InlineMath math="T^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}" /> を作用させる（すなわち実部のみをずらす）ことで、<InlineMath math="|\text{Re}(T^k \cdot \tau')| \leq 1/2" /> とすることができる。この新しい点を <InlineMath math="\tau''" /> と呼ぶ。</p>
                <p>もし <InlineMath math="|\tau''| < 1" /> であったとすると、<InlineMath math="S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" /> を作用させたとき、
                <BlockMath math="\text{Im}(S \cdot \tau'') = \frac{\text{Im}(\tau'')}{|\tau''|^2} > \text{Im}(\tau'')" />
                となり、虚部がさらに大きくなってしまう。これは <InlineMath math="\tau'" /> が虚部を最大化するように選ばれていたことに矛盾する。したがって、<InlineMath math="|\tau''| \geq 1" /> でなければならず、<InlineMath math="\tau'' \in \mathcal{F}" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="モジュライ空間の構成へ向けて">
                <p>基本領域 <InlineMath math="\mathcal{F}" /> は、モジュラー群による商空間 <InlineMath math="\mathbb{H}/\text{SL}_2(\mathbb{Z})" /> の幾何学的なモデルを提供します。この商空間の各点は「楕円曲線の同型類」と1対1に対応しており、まさに楕円曲線の<b>モジュライ空間（moduli space）</b>そのものです。次節以降で見るように、この空間上の関数（モジュラー関数・モジュラー形式）の理論は、数論や幾何学において極めて重要な役割を果たします。</p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>モジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> は上半平面 <InlineMath math="\mathbb{H}" /> に対して一次分数変換として作用する。</li>
                    <li>この作用は、複素トーラスを定義する格子の基底の取り替えに対応している。</li>
                    <li>任意の <InlineMath math="\tau \in \mathbb{H}" /> は、モジュラー群の作用により基本領域 <InlineMath math="\mathcal{F}" /> に移すことができる。</li>
                    <li>商空間 <InlineMath math="\mathbb{H}/\text{SL}_2(\mathbb{Z})" /> は楕円曲線の同型類を分類するモジュライ空間となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
