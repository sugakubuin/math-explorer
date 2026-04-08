import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicPropertiesOfSpectra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入したスペクトルは、有限次元の固有値とは異なる複雑さを持つものの、いくつかの非常に強力で美しい基本性質を備えています。ここでは、スペクトルが複素平面においてどのような図形となるのか、そして作用素の性質とどう結びついているのかを見ます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトルの有界性とコンパクト性</h2>

            <p>
                まず、スペクトルは複素平面上の無限に遠い場所には存在できず、また「境界」をきちんと含む性質を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 10.2-1">
                <p>
                    バナッハ空間 <InlineMath math="X" /> 上の有界線形作用素 <InlineMath math="T \in B(X)" /> に対して、そのスペクトル <InlineMath math="\sigma(T)" /> は複素平面 <InlineMath math="\mathbb{C}" /> 上の<b>コンパクト集合（有界閉集合）</b>であり、さらに<b>決して空集合にはならない</b>（<InlineMath math="\sigma(T) \neq \emptyset" />）。
                </p>
                <p>
                    とくに、すべての <InlineMath math="\lambda \in \sigma(T)" /> に対して <InlineMath math="|\lambda| \leq \|T\|" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. スペクトルが <InlineMath math="\|T\|" /> 以下に収まること（有界性）：<br />
                    <InlineMath math="|\lambda| > \|T\|" /> となる複素数 <InlineMath math="\lambda" /> を選ぶ。<InlineMath math="T - \lambda I = -\lambda(I - T/\lambda)" /> と変形する。ここで <InlineMath math="\|T/\lambda\| < 1" /> なので、第9章（Example 9.4-1）で登場した<b>ノイマン級数</b>が収束し、
                </p>
                <BlockMath math="(T - \lambda I)^{-1} = -\frac{1}{\lambda} \sum_{n=0}^\infty \left( \frac{T}{\lambda} \right)^n" />
                <p>
                    として逆作用素を構成できる。よってこのような <InlineMath math="\lambda" /> はレゾルベント集合に属し、スペクトルには含まれない。
                </p>
                <p>
                    2. スペクトルが閉集合であること：<br />
                    有界線形作用素の全体はバナッハ空間であり、逆要素を持つ元（正則元）の全体は開集合になることが知られている。したがってその補集合にあたる非正則元の集合（スペクトル）は閉集合となる。有界かつ閉なのでコンパクトである。
                </p>
                <p>
                    3. 空でないこと：<br />
                    もし <InlineMath math="\sigma(T) = \emptyset" /> だとすると、レゾルベント関数 <InlineMath math="R(\lambda, T) = (T - \lambda I)^{-1}" /> は複素平面全体で定義される正則な作用素値関数となる。しかも <InlineMath math="|\lambda| \to \infty" /> で <InlineMath math="R(\lambda, T) \to 0" /> となるため、リューヴィルの定理（複素解析で、有界な整関数は定数関数という定理）の作用素版より、<InlineMath math="R(\lambda, T)" /> が定数0でなければならないという矛盾が生じる。よってスペクトルは空ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                「スペクトルが収まるギリギリの半径」をスペクトル半径と呼びます。これは作用素ノルムと深い関係があります。
            </p>

            <ContentBox type="theorem" title="Theorem 10.2-2 (スペクトル半径の公式)">
                <p>
                    作用素 <InlineMath math="T" /> の<b>スペクトル半径（spectral radius）</b> <InlineMath math="r(T)" /> を
                </p>
                <BlockMath math="r(T) = \sup \{ |\lambda| \mid \lambda \in \sigma(T) \}" />
                <p>
                    と定義する。このとき、次の公式（ゲルファントの公式）が成り立つ。
                </p>
                <BlockMath math="r(T) = \lim_{n \to \infty} \|T^n\|^{\frac{1}{n}} = \inf_n \|T^n\|^{\frac{1}{n}}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 10.2-1 で用いたレゾルベントのノイマン級数展開 <InlineMath math="-(1/\lambda)\sum (T/\lambda)^n" /> が複素関数としてどこまで（小さな <InlineMath math="|\lambda|" /> まで）収束するかという、冪級数の収束半径の議論から導かれる。コーシー・アダマールの公式を作用素のノルムに適用することで、この <InlineMath math="n" /> 乗根の極限が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この公式から、作用素が「0に近づく」極端な振る舞いを計算できます。
            </p>

            <ContentBox type="example" title="Example 10.2-1">
                <p>
                    ある自然数 <InlineMath math="k" /> が存在して <InlineMath math="T^k = 0" /> となる作用素を冪零作用素といいます（行列でいえば、対角成分より上がすべて0であるような三角行列など）。<br />
                    このとき <InlineMath math="n \geq k" /> ならば常に <InlineMath math="\|T^n\| = 0" /> であるため、公式より極限は0、したがってスペクトル半径 <InlineMath math="r(T) = 0" /> となります。<br />
                    スペクトルは空ではないため、直ちに <InlineMath math="\sigma(T) = \{0\}" /> であることが結論されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己共役作用素のスペクトル</h2>

            <p>
                第8章で「自己共役作用素の固有値はすべて実数である」と述べました。これが固有値だけでなく、スペクトル全体に拡張されます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.2-3">
                <p>
                    ヒルベルト空間上の自己共役作用素（<InlineMath math="T^* = T" />）のスペクトル <InlineMath math="\sigma(T)" /> は、実数直線 <InlineMath math="\mathbb{R}" /> 上の有界閉部分集合である。すなわち
                </p>
                <BlockMath math="\sigma(T) \subset \mathbb{R}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\lambda" /> が虚部を持つ（<InlineMath math="\lambda = \alpha + i\beta" />, <InlineMath math="\beta \neq 0" />）とする。<InlineMath math="\beta = \text{Im}(\lambda)" />と書く。<br />
                    任意の <InlineMath math="x \in H" /> に対して、内積の虚部を計算すると
                </p>
                <BlockMath math="\begin{aligned}
                    \text{Im} \langle (T - \lambda I)x, x \rangle &= \frac{1}{2i} \left( \langle (T - \lambda I)x, x \rangle - \langle x, (T - \lambda I)x \rangle \right) \\
                    &= \frac{1}{2i} \left( \langle Tx, x \rangle - \lambda \|x\|^2 - \langle x, Tx \rangle + \bar{\lambda} \|x\|^2 \right)
                \end{aligned}" />
                <p>
                    <InlineMath math="T" /> は自己共役なので <InlineMath math="\langle Tx, x \rangle = \langle x, Tx \rangle" /> であり、第一項と第三項は相殺する。残りを整理すると
                </p>
                <BlockMath math="\text{Im} \langle (T - \lambda I)x, x \rangle = -\beta \|x\|^2" />
                <p>
                    これをコーシー・シュワルツの不等式と比較することで、
                </p>
                <BlockMath math="\begin{aligned}
                    |\beta| \|x\|^2 &= |\text{Im} \langle (T - \lambda I)x, x \rangle| \\
                    &\leq |\langle (T - \lambda I)x, x \rangle| \\
                    &\leq \|(T - \lambda I)x\| \|x\|
                \end{aligned}" />
                <p>
                    ゆえに <InlineMath math="|\text{Im}(\lambda)| \|x\| \leq \|(T - \lambda I)x\|" /> という強力な評価が得られる。この不等式は <InlineMath math="T - \lambda I" /> が単射であり、さらに逆作用素が有界であることを保証する（像が閉であることなどから全単射が導かれる）。<br />
                    よって虚部を持つ <InlineMath math="\lambda" /> はすべてレゾルベント集合に属し、スペクトルは実数軸上にしか存在できない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                関数空間上の「掛け算作用素」を通じて、スペクトルの実数性を具体的に確かめてみましょう。
            </p>

            <ContentBox type="example" title="Example 10.2-2">
                <p>
                    関数空間 <InlineMath math="L^2[0,1]" /> において、ある実数値の有界可測関数 <InlineMath math="g(x)" /> を掛ける作用素 <InlineMath math="M_g" /> を
                </p>
                <BlockMath math="M_g(f)(x) = g(x)f(x)" />
                <p>
                    と定めます。<InlineMath math="g" /> が実数値であるため、この <InlineMath math="M_g" /> は自己共役作用素となります。<br />
                    この作用素に対する方程式 <InlineMath math="(M_g - \lambda I)f = h" /> は、各点 <InlineMath math="x" /> ごとに <InlineMath math="(g(x) - \lambda)f(x) = h(x)" /> を解くことに他なりません。<br />
                    もし <InlineMath math="\lambda" /> が虚数であれば、<InlineMath math="g(x)" /> は実数なので分母 <InlineMath math="g(x) - \lambda" /> が0になることはなく、完全に安全に割り算 <InlineMath math="f(x) = h(x)/(g(x) - \lambda)" /> が実行でき有界な逆作用素が作れます。<br />
                    しかし、<InlineMath math="\lambda" /> が、<InlineMath math="g(x)" /> がとる値の範囲（本質的値域）に含まれる実数であった場合、分母が0または0にいくらでも近づいてしまい、有界な逆作用素が作れなくなります。<br />
                    結果として、スペクトル <InlineMath math="\sigma(M_g)" /> は <InlineMath math="g(x)" /> の値域の閉包という、実数軸上の或る集合になります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正規作用素のスペクトル">
                <p>
                    「自己共役作用素」のスペクトルは実数ですが、より広いクラスである「正規作用素（<InlineMath math="T^*T = TT^*" />）」のスペクトルは、複素平面全体に広がる可能性があります。<br />
                    しかし、正規作用素の場合でも「残余スペクトルが存在しない（常に空集合）」という非常に良い性質を持つことが知られています。これは、量子力学で扱う多くの作用素の良い性質を保証する結果です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有界線形作用素のスペクトルは、複素平面上の空でないコンパクト集合（有界閉集合）である。</li>
                    <li>スペクトルの広がりを示す「スペクトル半径」は、作用素の累乗のノルムの極限によって計算される。</li>
                    <li>自己共役作用素のスペクトルは、実数直線のみに分布する（虚数のスペクトルを持たない）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
