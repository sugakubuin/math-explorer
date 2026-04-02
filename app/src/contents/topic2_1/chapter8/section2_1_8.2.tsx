import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function NormAndTriangleInequality() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                内積空間において、最も基本的な概念の一つが「ベクトルの大きさ（長さ）」です。<br />
                抽象的なベクトル空間であっても、内積さえ定義されていれば、その「自分自身との内積」を用いることで、すべてのベクトルに対して自然に「長さ」という概念を導入することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノルムの定義</h2>

            <p>
                私たちは幾何学の授業で、平面ベクトルの長さが <InlineMath math="| \boldsymbol{x} | = \sqrt{x_1^2 + x_2^2}" /> となることを学びました。<br />
                これはまさに「自分自身との内積の平方根」です。これを一般化します。
            </p>

            <ContentBox type="definition" title="Definition 8.2-1 （内積から誘導されるノルム / Induced Norm）">
                <p>
                    内積空間 <InlineMath math="V" /> において、ベクトル <InlineMath math="\boldsymbol{x} \in V" /> の<strong>ノルム（長さ、大きさ）</strong>を次のように定義し、<InlineMath math="\| \boldsymbol{x} \|" /> と表記する。
                </p>
                <BlockMath math="\| \boldsymbol{x} \| = \sqrt{\langle \boldsymbol{x}, \boldsymbol{x} \rangle}" />
                <p>
                    内積の正値性の公理により <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle \geq 0" /> であるため、平方根の中身は常に非負の実数であり、この定義は矛盾なく意味を持つ。<br />
                    また、次の性質も直ちに導かれる。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="\| \boldsymbol{x} \| \geq 0" /> かつ（<InlineMath math="\| \boldsymbol{x} \| = 0 \iff \boldsymbol{x} = \boldsymbol{0}" />）</li>
                    <li><InlineMath math="\| c\boldsymbol{x} \| = |c| \| \boldsymbol{x} \|" /> （スカラー倍の性質）</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="単位ベクトルと正規化">
                <p>
                    ノルムが <InlineMath math="1" /> であるベクトル（<InlineMath math="\| \boldsymbol{x} \| = 1" />）を<strong>単位ベクトル（Unit Vector）</strong>と呼びます。<br />
                    零でない任意のベクトル <InlineMath math="\boldsymbol{v}" /> に対して、その自身の長さの逆数を掛ける操作
                </p>
                <BlockMath math="\boldsymbol{e} = \frac{1}{\| \boldsymbol{v} \|} \boldsymbol{v}" />
                <p>
                    を行うことで、同じ方向を向いた単位ベクトルを得ることができます。この操作を<strong>正規化（Normalization）</strong>と呼びます。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三角不等式</h2>

            <p>
                「三角形の2辺の長さの和は、残りの1辺の長さよりも必ず長くなる」という有名な幾何学の定理があります。最短距離は直線である、という直感の表れです。<br />
                驚くべきことに、関数空間のような抽象的な内積空間においても、この性質が等しく成り立ちます。<br />
                （※証明の途中で、次節で学ぶ「コーシー・シュワルツの不等式」を使用します。）
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 （三角不等式 / Triangle Inequality）">
                <p>
                    内積空間 <InlineMath math="V" /> の任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して、必ず以下の不等式が成り立つ。
                </p>
                <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \| \leq \| \boldsymbol{x} \| + \| \boldsymbol{y} \|" />
                <p>
                    （等号が成立するのは、一方が他方の非負のスカラー倍である場合、すなわち方向が等しい場合に限る。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    両辺ともに非負（<InlineMath math="\geq 0" />）であるため、両辺を2乗したものが成り立つことを示せばよい。左辺の2乗を内積の性質を用いて展開する。
                </p>
                <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \|^2 = \langle \boldsymbol{x} + \boldsymbol{y}, \boldsymbol{x} + \boldsymbol{y} \rangle" />
                <p>双線形性を用いて各項を展開すると、</p>
                <BlockMath math="= \langle \boldsymbol{x}, \boldsymbol{x} \rangle + \langle \boldsymbol{x}, \boldsymbol{y} \rangle + \langle \boldsymbol{y}, \boldsymbol{x} \rangle + \langle \boldsymbol{y}, \boldsymbol{y} \rangle" />
                <p>
                    ここで、対称性より <InlineMath math="\langle \boldsymbol{y}, \boldsymbol{x} \rangle = \langle \boldsymbol{x}, \boldsymbol{y} \rangle" /> であり、<InlineMath math="\langle \boldsymbol{x}, \boldsymbol{x} \rangle = \| \boldsymbol{x} \|^2" />、<InlineMath math="\langle \boldsymbol{y}, \boldsymbol{y} \rangle = \| \boldsymbol{y} \|^2" /> であるため、
                </p>
                <BlockMath math="= \| \boldsymbol{x} \|^2 + 2\langle \boldsymbol{x}, \boldsymbol{y} \rangle + \| \boldsymbol{y} \|^2 \quad \dots (*)" />
                <p>
                    となる。<br />
                    （※ 複素空間の場合は、<InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle + \langle \boldsymbol{y}, \boldsymbol{x} \rangle = \langle \boldsymbol{x}, \boldsymbol{y} \rangle + \overline{\langle \boldsymbol{x}, \boldsymbol{y} \rangle} = 2 \mathrm{Re}(\langle \boldsymbol{x}, \boldsymbol{y} \rangle)" /> となる。）
                </p>
                <p>
                    実数において、任意の数 <InlineMath math="a" /> はその絶対値以下である（<InlineMath math="a \leq |a|" />）。さらに、次節で証明する定理 8.3-1「コーシー・シュワルツの不等式（<InlineMath math="|\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" />）」を適用すると、
                </p>
                <BlockMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle \leq |\langle \boldsymbol{x}, \boldsymbol{y} \rangle| \leq \| \boldsymbol{x} \| \| \boldsymbol{y} \|" />
                <p>
                    という関係が得られる。これを <InlineMath math="(*)" /> 式に適用すると、
                </p>
                <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \|^2 \leq \| \boldsymbol{x} \|^2 + 2\| \boldsymbol{x} \| \| \boldsymbol{y} \| + \| \boldsymbol{y} \|^2" />
                <p>
                    右辺は完全平方式であるため、因数分解してまとめると、
                </p>
                <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \|^2 \leq (\| \boldsymbol{x} \| + \| \boldsymbol{y} \|)^2" />
                <p>
                    両辺の平方根をとる（両辺は非負なので不等号の向きは変わらない）ことで、
                </p>
                <BlockMath math="\| \boldsymbol{x} + \boldsymbol{y} \| \leq \| \boldsymbol{x} \| + \| \boldsymbol{y} \|" />
                <p>
                    が得られ、証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>「自分自身との内積の平方根」をベクトルの<strong>ノルム（長さ）</strong>と定義する（Definition 8.2-1）。</li>
                    <li>ノルムを用いてベクトルを自分自身の長さで割る操作を<strong>正規化</strong>といい、長さ1の単位ベクトルを作る。</li>
                    <li>どんな内積空間であっても「遠回りするより直接向かったほうが（ノルムの和として）距離が短い」という<strong>三角不等式</strong>が厳密に成り立つ（Theorem 8.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
