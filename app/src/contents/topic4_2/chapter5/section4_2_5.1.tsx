import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SchwarzLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析において、単位円板から単位円板への正則写像の振る舞いを極めて強力に制限する基本定理があります。それが「シュワルツの補題（Schwarz Lemma）」です。この定理は、直感的に言えば「単位円板上の正則写像は、中心を固定する限り、絶対に外側へ膨張することができない（縮小写像である）」という幾何学的な事実を述べており、本章で学ぶ「双曲幾何」の出発点となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュワルツの補題</h2>

            <p>
                「補題」という謙虚な名前がついていますが、その応用範囲と影響力は計り知れません。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 5.1-1 (シュワルツの補題)</span>}>
                <p>
                    <InlineMath math="f : \mathbb{D} \to \mathbb{D}" /> を、単位円板 <InlineMath math="\mathbb{D} = \{z \mid |z| < 1\}" /> から <InlineMath math="\mathbb{D}" /> 自身への正則写像とする。
                    さらに、原点を固定する（<InlineMath math="f(0) = 0" />）と仮定する。このとき、以下の2つの不等式が必ず成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="\mathbb{D}" /> 内のすべての点 <InlineMath math="z" /> において、<InlineMath math="|f(z)| \leq |z|" />。</li>
                    <li>原点における微分係数について、<InlineMath math="|f'(0)| \leq 1" />。</li>
                </ol>
                <p>
                    さらに、もしある <InlineMath math="z_0 \neq 0" /> において <InlineMath math="|f(z_0)| = |z_0|" /> が成り立つか、あるいは原点で <InlineMath math="|f'(0)| = 1" /> が成り立つならば、<InlineMath math="f" /> は単なる回転（すなわち、ある実数 <InlineMath math="\theta" /> が存在して <InlineMath math="f(z) = e^{i\theta}z" />）に厳密に限られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f(0) = 0" /> であることから、<InlineMath math="f(z)" /> のマクローリン展開は <InlineMath math="f(z) = a_1 z + a_2 z^2 + \cdots" /> のように定数項を持たない。
                    したがって、新しい関数 <InlineMath math="g(z)" /> を次のように定義する。
                </p>
                <BlockMath math="g(z) = \begin{cases} \frac{f(z)}{z} & (z \neq 0) \\ f'(0) & (z = 0) \end{cases}" />
                <p>
                    <InlineMath math="z=0" /> で除去可能特異点を持つため、<InlineMath math="g(z)" /> は <InlineMath math="\mathbb{D}" /> 全体で正則な関数となる。
                </p>
                <p>
                    <InlineMath math="0 < r < 1" /> なる任意の半径 <InlineMath math="r" /> をとり、閉円板 <InlineMath math="|z| \leq r" /> 上で最大値原理を適用する。境界 <InlineMath math="|z| = r" /> 上において、仮定より <InlineMath math="|f(z)| < 1" /> なので、
                </p>
                <BlockMath math="|g(z)| = \frac{|f(z)|}{|z|} < \frac{1}{r}" />
                <p>
                    が成り立つ。最大値原理より、内部 <InlineMath math="|z| \leq r" /> でも <InlineMath math="|g(z)| < 1/r" /> である。
                    ここで <InlineMath math="r \to 1" /> の極限をとると、<InlineMath math="\mathbb{D}" /> 内のすべての点において
                </p>
                <BlockMath math="|g(z)| \leq 1" />
                <p>
                    が得られる。これに <InlineMath math="|z|" /> をかければ <InlineMath math="|f(z)| \leq |z|" /> を得て、<InlineMath math="z=0" /> を代入すれば <InlineMath math="|f'(0)| \leq 1" /> を得る。
                </p>
                <p>
                    等号成立条件について：もしある <InlineMath math="z_0 \in \mathbb{D}" /> で <InlineMath math="|f(z_0)| = |z_0|" /> または <InlineMath math="|f'(0)| = 1" /> ならば、それは <InlineMath math="g(z)" /> が領域内部のどこかで最大値 <InlineMath math="1" /> を取ったことを意味する。
                    最大値原理により、内部で最大値を取る正則関数は定数関数しかないので、<InlineMath math="g(z) \equiv c" /> （定数）であり、かつ <InlineMath math="|c| = 1" /> となる。よって <InlineMath math="c = e^{i\theta}" /> と書け、<InlineMath math="f(z) = e^{i\theta}z" /> が結論される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1">
                <p>
                    関数 <InlineMath math="f(z) = z^2" /> を考えます。これは <InlineMath math="|z| < 1" /> のとき <InlineMath math="|z|^2 < 1" /> なので <InlineMath math="\mathbb{D} \to \mathbb{D}" /> の正則写像であり、<InlineMath math="f(0) = 0" /> を満たします。
                </p>
                <p>
                    定理の不等式を確認すると、確かに <InlineMath math="|z|^2 \leq |z|" /> （<InlineMath math="|z| < 1" />のとき）が成り立っています。<InlineMath math="|z| \neq 0" /> では必ず <InlineMath math="|z|^2 < |z|" /> と真に小さくなるため、この写像は「回転」ではなく、各点をより原点に近い側へと「縮小」させていることがわかります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュワルツの補題の系</h2>

            <p>
                「原点が原点に移る」という条件は特定の状況に限られるように見えますが、§4.2 で学んだ「メビウス変換」を使って好きな点を原点に持ってきてからシュワルツの補題を適用し、また戻すという操作を行うことで、任意の点に関する強力な不等式に一般化できます。
            </p>

            <ContentBox type="theorem" title={<span>Corollary 5.1-1 (一般の2点の距離評価)</span>}>
                <p>
                    <InlineMath math="f : \mathbb{D} \to \mathbb{D}" /> が正則で、ある点 <InlineMath math="a \in \mathbb{D}" /> を <InlineMath math="f(a) = 0" /> へ写す（零点である）とする。このとき、任意の点 <InlineMath math="z \in \mathbb{D}" /> において
                </p>
                <BlockMath math="|f(z)| \leq \left| \frac{z - a}{1 - \bar{a}z} \right|" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="a" /> を原点に移す <InlineMath math="\mathbb{D}" /> の自己同型（メビウス変換）を
                </p>
                <BlockMath math="\varphi_a(z) = \frac{z - a}{1 - \bar{a}z}" />
                <p>
                    とする。この変換は逆変換 <InlineMath math="\varphi_{-a}" /> を持ち、双正則である。合成関数 <InlineMath math="F(w) = f(\varphi_{-a}(w))" /> を考える。（ここで <InlineMath math="w = \varphi_a(z)" /> すなわち <InlineMath math="z = \varphi_{-a}(w)" />）。
                </p>
                <p>
                    <InlineMath math="F : \mathbb{D} \to \mathbb{D}" /> であり、<InlineMath math="F(0) = f(a) = 0" /> を満たす。ここへシュワルツの補題を適用すれば、<InlineMath math="|F(w)| \leq |w|" /> となる。<InlineMath math="w = \varphi_a(z)" /> を元に戻せば、
                </p>
                <BlockMath math="|f(z)| \leq |\varphi_a(z)| = \left| \frac{z - a}{1 - \bar{a}z} \right|" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-2">
                <p>
                    単位円板上で正則な <InlineMath math="f(z)" /> が、<InlineMath math="|f(z)| < 1" /> を満たし、かつ <InlineMath math="f(1/2) = 0" /> であると分かっているとします。このとき、原点 <InlineMath math="z = 0" /> における関数値の絶対値はどう抑えられるでしょうか。
                </p>
                <p>
                    Corollary 5.1-1 に <InlineMath math="a = 1/2" />, <InlineMath math="z = 0" /> を代入すると、
                </p>
                <BlockMath math="|f(0)| \leq \left| \frac{0 - 1/2}{1 - (1/2)(0)} \right| = \frac{1}{2}" />
                <p>
                    となります。つまり、「<InlineMath math="1/2" /> で <InlineMath math="0" /> になる関数は、<InlineMath math="0" /> の場所で急に <InlineMath math="1" /> に近い値を取ることは不可能（<InlineMath math="1/2" /> 以下にしかなれない）」という非常に強い制限がかかっていることが計算からわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>シュワルツの補題</b>：<InlineMath math="\mathbb{D} \to \mathbb{D}" /> で原点を保つ正則写像は、円板を縮小させる（<InlineMath math="|f(z)| \leq |z|" />）。</li>
                    <li>等式が成り立つのは、写像が単なる回転（等長変換）である場合に限られる。</li>
                    <li>メビウス変換と組み合わせることで、原点以外の点に対する評価へと一般化できる。この評価が非ユークリッド幾何の距離概念へと直結する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
