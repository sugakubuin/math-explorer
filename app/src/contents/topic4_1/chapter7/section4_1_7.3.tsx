import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrthonormalSystemsAndBesselEquality() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までの射影の性質を基礎として、ヒルベルト空間における「座標系」を与える枠組みに足を踏み入れます。その出発点となるのが、互いに直交し、長さが1であるようなベクトルの集まりである正規直交系です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規直交系の定義</h2>

            <p>
                ユークリッド空間における標準的な座標軸（各軸が互いに垂直で単位長をもつ）の性質を抽出したものが正規直交系です。
            </p>

            <ContentBox type="definition" title="Definition 7.3-1 (正規直交系)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の部分集合 <InlineMath math="\{e_i\}_{i \in I}" /> が以下の条件を満たすとき、これを<b>正規直交系（orthonormal system, ONS）</b>という。
                </p>
                <BlockMath math="\langle e_i, e_j \rangle = \delta_{ij} = \begin{cases} 1 & (i = j) \\ 0 & (i \neq j) \end{cases}" />
                <p>
                    （ここで <InlineMath math="\delta_{ij}" /> はクロネッカーのデルタである。）<br />
                    すなわち、集合内のどの2つをとっても互いに直交し（<InlineMath math="\langle e_i, e_j \rangle = 0" />）、すべての元のノルムが1（<InlineMath math="\|e_i\| = 1" />）であるような系のことである。
                </p>
            </ContentBox>

            <p>
                具体的な正規直交系の例として、最も基本的な数列空間の標準基底を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.3-1">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> において、自然な座標を表す標準基底
                </p>
                <BlockMath math="\begin{aligned} e_1 &= (1, 0, 0, \ldots) \\ e_2 &= (0, 1, 0, \ldots) \\ e_3 &= (0, 0, 1, \ldots) \\ &\vdots \end{aligned}" />
                <p>
                    は正規直交系をなす。実際、<InlineMath math="n \neq m" /> のとき内積 <InlineMath math="\langle e_n, e_m \rangle" /> はすべての成分の積がゼロとなるため <InlineMath math="0" /> であり、<InlineMath math="\langle e_n, e_n \rangle = 1" /> となる。
                </p>
            </ContentBox>

            <p>
                関数空間においても、フーリエ級数の理論で知られる三角関数系が自然な正規直交系を与えます。
            </p>

            <ContentBox type="example" title="Example 7.3-2">
                <p>
                    関数空間 <InlineMath math="L^2[-\pi, \pi]" /> における三角関数を用いた正規直交系であるフーリエ基底を考える。<br />
                    整数 <InlineMath math="n \in \mathbb{Z}" /> に対して、関数 <InlineMath math="e_n(x) = \frac{1}{\sqrt{2\pi}} e^{inx}" /> を定義する。
                </p>
                <p>
                    任意の <InlineMath math="n, m \in \mathbb{Z}" /> に対する内積を計算すると、
                </p>
                <BlockMath math="\begin{aligned} \langle e_n, e_m \rangle &= \int_{-\pi}^{\pi} \left(\frac{1}{\sqrt{2\pi}} e^{inx}\right) \overline{\left(\frac{1}{\sqrt{2\pi}} e^{imx}\right)} \,dx \\ &= \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{i(n-m)x} \,dx \end{aligned}" />
                <p>
                    <InlineMath math="n = m" /> のとき、被積分関数は <InlineMath math="1" /> なので積分値は <InlineMath math="2\pi" /> となり、全体として <InlineMath math="1" /> を得る。一方 <InlineMath math="n \neq m" /> のとき、周期関数の積分により <InlineMath math="0" /> となる。したがってこれは正規直交系である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベッセルの不等式とフーリエ係数</h2>

            <p>
                ある正規直交系が与えられたとき、空間内の任意のベクトルがそれらの「軸」へどれだけ射影されるか（係数）を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 7.3-2 (フーリエ係数)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> 内の正規直交系 <InlineMath math="\{e_n\}" /> と任意の元 <InlineMath math="x \in H" /> に対して、スカラー
                </p>
                <BlockMath math="\hat{x}_n = \langle x, e_n \rangle" />
                <p>
                    を、系 <InlineMath math="\{e_n\}" /> に対する <InlineMath math="x" /> の<b>フーリエ係数（Fourier coefficient）</b>という。
                </p>
            </ContentBox>

            <p>
                フーリエ係数を集めてきた級数と、元のベクトルの長さの間には、普遍的な不等式が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (ベッセルの不等式)">
                <p>
                    <InlineMath math="H" /> における任意の可算な正規直交系 <InlineMath math="\{e_n\}_{n=1}^\infty" /> となるベクトル <InlineMath math="x \in H" /> に対して、次が成り立つ。
                </p>
                <BlockMath math="\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \leq \|x\|^2" />
            </ContentBox>

            <p>
                この不等式は、有限項での最適な近似を考えることで、ピタゴラスの定理を利用して直接的に導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の自然数 <InlineMath math="N" /> に対して、有限部分和 <InlineMath math="s_N = \sum_{k=1}^N \langle x, e_k \rangle e_k" /> を考える。ノルムの非負性より、
                </p>
                <BlockMath math="\begin{aligned}
                    0 &\leq \|x - s_N\|^2 \\ &= \langle x - s_N, x - s_N \rangle \\ &= \|x\|^2 - \langle x, s_N \rangle - \langle s_N, x \rangle + \|s_N\|^2
                \end{aligned}" />
                <p>
                    ここで各項を計算する。<InlineMath math="\{e_n\}" /> が正規直交系であるため、
                </p>
                <BlockMath math="\begin{aligned}
                    \|s_N\|^2 &= \left\langle \sum_{k=1}^N \langle x, e_k \rangle e_k, \sum_{j=1}^N \langle x, e_j \rangle e_j \right\rangle \\
                    &= \sum_{k=1}^N \sum_{j=1}^N \langle x, e_k \rangle \overline{\langle x, e_j \rangle} \langle e_k, e_j \rangle \\
                    &= \sum_{k=1}^N |\langle x, e_k \rangle|^2
                \end{aligned}" />
                <p>
                    また、
                </p>
                <BlockMath math="\begin{aligned}
                    \langle x, s_N \rangle &= \left\langle x, \sum_{k=1}^N \langle x, e_k \rangle e_k \right\rangle \\
                    &= \sum_{k=1}^N \overline{\langle x, e_k \rangle} \langle x, e_k \rangle \\
                    &= \sum_{k=1}^N |\langle x, e_k \rangle|^2
                \end{aligned}" />
                <p>
                    同様に <InlineMath math="\langle s_N, x \rangle = \sum_{k=1}^N |\langle x, e_k \rangle|^2" /> となる。これらを元の不等式に代入すると、
                </p>
                <BlockMath math="\begin{aligned}
                    0 &\leq \|x\|^2 - 2\sum_{k=1}^N |\langle x, e_k \rangle|^2 + \sum_{k=1}^N |\langle x, e_k \rangle|^2 \\ &= \|x\|^2 - \sum_{k=1}^N |\langle x, e_k \rangle|^2
                \end{aligned}" />
                <p>
                    これを整理すると、任意の <InlineMath math="N" /> で <InlineMath math="\sum_{k=1}^N |\langle x, e_k \rangle|^2 \leq \|x\|^2" /> となる。<InlineMath math="N \to \infty" /> の極限をとることで証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                フーリエ基底を用いた具体的な関数の展開を通じて、この不等式が実際にどのように計算されるかを確認します。
            </p>

            <ContentBox type="example" title="Example 7.3-3">
                <p>
                    先ほどの <InlineMath math="L^2[-\pi, \pi]" /> のフーリエ基底を用いた例を考える。関数 <InlineMath math="f(x) = x" /> （<InlineMath math="-\pi < x < \pi" />）のフーリエ係数 <InlineMath math="\hat{f}_n" /> を計算する。
                </p>
                <BlockMath math="\begin{aligned}
                    \hat{f}_n &= \langle f, e_n \rangle = \int_{-\pi}^{\pi} x \overline{\left(\frac{1}{\sqrt{2\pi}}e^{inx}\right)} \,dx \\ &= \frac{1}{\sqrt{2\pi}} \int_{-\pi}^{\pi} x e^{-inx} \,dx
                \end{aligned}" />
                <p>
                    <InlineMath math="n \neq 0" /> のとき、部分積分を用いると
                </p>
                <BlockMath math="\begin{aligned}
                    \int_{-\pi}^{\pi} x e^{-inx} \,dx &= \left[ \frac{x e^{-inx}}{-in} \right]_{-\pi}^{\pi} - \int_{-\pi}^{\pi} \frac{e^{-inx}}{-in} \,dx \\ &= \frac{\pi e^{-in\pi} + \pi e^{in\pi}}{-in} - 0 = i \frac{2\pi (-1)^n}{n}
                \end{aligned}" />
                <p>
                    よって、<InlineMath math="n \neq 0" /> では <InlineMath math="\hat{f}_n = \frac{i \sqrt{2\pi} (-1)^n}{n}" />、<InlineMath math="n = 0" /> では奇関数の積分より <InlineMath math="\hat{f}_0 = 0" /> となる。<br />
                    このとき係数の絶対値の2乗は <InlineMath math="|\hat{f}_n|^2 = \frac{2\pi}{n^2}" /> である。
                </p>
                <p>
                    一方、元の関数のノルムの2乗は
                </p>
                <BlockMath math="\|f\|^2 = \int_{-\pi}^{\pi} x^2 \,dx = \left[ \frac{1}{3}x^3 \right]_{-\pi}^{\pi} = \frac{2\pi^3}{3}" />
                <p>
                    ベッセルの不等式 <InlineMath math="\sum_{n \in \mathbb{Z}} |\hat{f}_n|^2 \leq \|f\|^2" /> に当てはめると、
                </p>
                <BlockMath math="\sum_{n=1}^\infty 2\left(\frac{2\pi}{n^2}\right) \leq \frac{2\pi^3}{3} \implies \sum_{n=1}^\infty \frac{1}{n^2} \leq \frac{\pi^2}{6}" />
                <p>
                    という結果が得られる（後述のパーセバルの等式では、これが等式になることを示す）。
                </p>
            </ContentBox>

            <p>
                この不等式が真の「不等式」にとどまる理由について、幾何学的な視点から考察してみましょう。
            </p>

            <ContentBox type="remark" title="ベッセルの不等式の幾何学的意味">
                <p>
                    ベッセルの不等式の幾何学的な意味は、「ベクトルをいくつか（あるいは部分的な）直交する軸に射影したときの成分の2乗和は、元のベクトルの長さの2乗を決して超えない」ということです。<br />
                    これは、選んだ正規直交系が空間全体を張るのに十分でない（「足りない軸がある」）場合には、射影成分の和が元のベクトルより小さくなることを意味しています。
                </p>
            </ContentBox>

            <p>
                次節では、この不等式が「等式」になるケース、すなわち空間を張り尽くす「完全な」正規直交系について深く掘り下げます。まずは本節のまとめです。
            </p>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>互いに直交し、長さが1であるベクトルの集合を正規直交系とよぶ。</li>
                    <li>ベクトルを正規直交系の各要素で内積をとったものをフーリエ係数とよぶ。</li>
                    <li>正規直交系による展開成分の2乗和は、もとのベクトルのノルムの2乗を超えない（ベッセルの不等式）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
