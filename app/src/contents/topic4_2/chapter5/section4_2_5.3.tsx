import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SchwarzPickLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節でシュワルツの補題を一般化し、任意の点を原点へ動かす技術（Corollary 5.1-1）を学びました。さらに、この過程で現れたメビウス変換が、実はポアンカレ計量の「等長変換（距離を全く変えない移動）」であったことも（§5.2）確認しました。
            </p>
            <p>
                これら2つの事実（一般化されたシュワルツの補題と、双曲幾何の計量）を融合させると、直感的に極めて美しい「シュワルツ-ピック補題（Schwarz-Pick Lemma）」という定理が誕生します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュワルツ-ピック補題</h2>

            <p>
                「原点が原点に写る」という縛りを外し、双曲的な距離 <InlineMath math="d_{\mathbb{D}}" /> そのものへの絶対的な制限として記述し直したのがこの補題です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.3-1 (シュワルツ-ピック補題)</span>}>
                <p>
                    <InlineMath math="f : \mathbb{D} \to \mathbb{D}" /> を、単位円板上の任意の正則写像とする。
                    このとき、<InlineMath math="\mathbb{D}" /> 内の任意の2点 <InlineMath math="z, w" /> について、その間の<b>双曲距離 <InlineMath math="d_{\mathbb{D}}" /> は、写像 <InlineMath math="f" /> によって決して拡大されることはない。</b>
                </p>
                <BlockMath math="d_{\mathbb{D}}(f(z), f(w)) \leq d_{\mathbb{D}}(z, w)" />
                <p>
                    さらに、もし領域内の相異なる2点において等号が成立するならば、<InlineMath math="f" /> は <InlineMath math="\mathbb{D}" /> のメビウス自己同型写像（双曲幾何における等長変換・合同変換）のいずれか一つに完全一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    証明の要は、前節で構築したポアンカレ計量が等長に保たれるメビウス変換 <InlineMath math="\varphi_a(z) = \frac{z-a}{1-\bar{a}z}" /> を用いて、問題を無理やりシュワルツの補題の条件（原点を原点に写す）へと帰着させることにある。
                </p>
                <p>
                    <InlineMath math="f" /> が <InlineMath math="w" /> を <InlineMath math="f(w)" /> に写すとする。ここに対して、
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>出発側の空間を、<InlineMath math="w" /> が原点にくるようにメビウス変換 <InlineMath math="\varphi_w" /> で平行移動する。</li>
                    <li>到着側の空間でも、<InlineMath math="f(w)" /> が原点にくるようにメビウス変換 <InlineMath math="\varphi_{f(w)}" /> で平行移動する。</li>
                </ol>
                <p>
                    これらを組み合わせた新しい関数 <InlineMath math="F(z) = \varphi_{f(w)}(f(\varphi_{-w}(z)))" /> を作れば、<InlineMath math="F(0) = 0" /> となってシュワルツの補題（基本形）が適用できる。
                </p>
                <p>
                    基本形より、この新しい関数 <InlineMath math="F" /> はユークリッド距離で測ったとき縮小写像である。この縮小の様子を元の関数 <InlineMath math="f" /> に戻して計算すると、メビウス変換自身が双曲距離に関しては等長である（§5.2）という事実によって、そのまま「<InlineMath math="f" /> は双曲距離に関して縮小写像である」という結論が鮮やかに導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1">
                <p>
                    関数 <InlineMath math="f(z) = z^2" /> は <InlineMath math="\mathbb{D} \to \mathbb{D}" /> の正則関数です。2点 <InlineMath math="z = 1/2" /> と <InlineMath math="w = -1/2" /> を考えます。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>元の双曲距離： ユークリッド距離は <InlineMath math="|1/2 - (-1/2)| = 1" /> ですが、双曲距離公式（次節詳述）にあてはめると <InlineMath math="d_{\mathbb{D}}(1/2, -1/2) \approx 1.099" /> となります。</li>
                    <li>写像後の双曲距離： <InlineMath math="f(1/2) = 1/4" />、<InlineMath math="f(-1/2) = 1/4" />。これらは重なってしまったため、写像後の距離は <InlineMath math="d_{\mathbb{D}}(1/4, 1/4) = 0" /> です。</li>
                </ul>
                <p>
                    定理の通り、<InlineMath math="0 \leq 1.099" /> となり、写像によって2点の双曲距離は確実により短く（この場合は <InlineMath math="0" /> に）押しつぶされました。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分形式での表現</h2>

            <p>
                距離に関する不等式を、2点を無限に近づける極限（微分の言葉）で表現し直したものが、以下の驚異的な関係式です。
            </p>

            <ContentBox type="theorem" title={<span>Corollary 5.3-1 (シュワルツ-ピック補題の微分形)</span>}>
                <p>
                    <InlineMath math="f : \mathbb{D} \to \mathbb{D}" /> が正則であるとき、任意の <InlineMath math="z \in \mathbb{D}" /> において
                </p>
                <BlockMath math="\frac{|f'(z)|}{1 - |f(z)|^2} \leq \frac{1}{1 - |z|^2}" />
                <p>
                    が成り立つ。
                </p>
                <p>
                    両辺に <InlineMath math="2|dz|" /> を乗じてポアンカレ計量 の形 <InlineMath math="ds = 2|dz|/(1-|z|^2)" /> に合わせると、
                </p>
                <BlockMath math="ds(f(z)) \leq ds(z)" />
                <p>
                    となり、「微小な曲線の長さ（双曲的測度）」もまた正則関数によって局所的に縮小することがわかる。等号成立条件はやはり <InlineMath math="f" /> が等長自己同型であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 5.3-1 より、任意の2点 <InlineMath math="z, w \in \mathbb{D}" /> について双曲距離が縮小されるため、公式を代入すると
                </p>
                <BlockMath math="\text{arctanh} \left| \frac{f(z) - f(w)}{1 - \overline{f(w)}f(z)} \right| \leq \text{arctanh} \left| \frac{z - w}{1 - \bar{w}z} \right|" />
                <p>
                    となる。実関数 <InlineMath math="\text{arctanh}(x)" /> は区間 <InlineMath math="[0, 1)" /> 上で狭義単調増加であるため、引数の絶対値についても同じ不等式が成り立つ。
                </p>
                <BlockMath math="\left| \frac{f(z) - f(w)}{1 - \overline{f(w)}f(z)} \right| \leq \left| \frac{z - w}{1 - \bar{w}z} \right|" />
                <p>
                    両辺を <InlineMath math="|z - w|" /> で割り、<InlineMath math="z \to w" /> の極限を考える。左辺の分子について、導関数の定義より
                    <InlineMath math="\lim_{z \to w} \frac{f(z) - f(w)}{z - w} = f'(w)" /> であり、分母の <InlineMath math="1 - \overline{f(w)}f(z)" /> は連続性から <InlineMath math="1 - |f(w)|^2" /> に収束する。
                </p>
                <p>
                    右辺の分母は同様に <InlineMath math="1 - |w|^2" /> に収束するため、極限移行により直ちに
                </p>
                <BlockMath math="\frac{|f'(w)|}{1 - |f(w)|^2} \leq \frac{1}{1 - |w|^2}" />
                <p>
                    が得られる。ここで変数 <InlineMath math="w" /> を <InlineMath math="z" /> に書き換えれば求める不等式となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-2">
                <p>
                    <InlineMath math="f(z) = z/2" /> という関数（半径を半分に縮める写像）を用いた具体的評価をしてみましょう。
                </p>
                <p>
                    微分形の左辺を計算します。<InlineMath math="f'(z) = 1/2" /> であり、<InlineMath math="|f(z)|^2 = |z|^2/4" /> なので、
                </p>
                <BlockMath math="\frac{|f'(z)|}{1 - |f(z)|^2} = \frac{1/2}{1 - |z|^2 / 4}" />
                <p>
                    右辺は <InlineMath math="\frac{1}{1 - |z|^2}" /> です。
                </p>
                <p>
                    例えば <InlineMath math="|z| = 1/\sqrt{2}" />（<InlineMath math="|z|^2 = 1/2" />）を代入すると、
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>左辺 ＝ <InlineMath math="\frac{1/2}{1 - 1/8} = \frac{1/2}{7/8} = \frac{4}{7} \approx 0.57" /></li>
                    <li>右辺 ＝ <InlineMath math="\frac{1}{1 - 1/2} = 2" /></li>
                </ul>
                <p>
                    確かに <InlineMath math="4/7 \leq 2" /> となり、不等式が厳密に成立していることが数値的にも明快に確認できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="アールフォルスの一般化への道">
                <p>
                    シュワルツ-ピック補題は、「正則写像は双曲距離を縮小する」という深遠な幾何学的原理を表しています。この考え方は、後にフィールズ賞受賞者のラルス・アールフォルスによって、「計量の『曲率（負の曲率）』が条件を満たせば、より一般のリーマン面間の正則写像も必ず距離を縮小する（Schwarz-Ahlfors Lemma）」という驚くべき定理へと拡張されました。第7章のピカールの定理の現代的な証明は、まさにこの「曲面が負に曲がっていれば正則写像は膨張できない」という幾何学的な洞察に基づいています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>シュワルツ-ピック補題</b>は、単位円板上の正則写像に対し、任意の2点間の双曲距離が縮小する（拡大しない）ことを示す定理である。</li>
                    <li>微分形式 <InlineMath math="ds(f(z)) \leq ds(z)" /> を用いると、微小な長さが常に縮小されることが数式で鮮やかに表現される。</li>
                    <li>等号が成り立つのはメビウス変換（等長変換空間）に限られ、これは正則関数と双曲幾何が分かち難く結びついていることの決定的な証拠である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
