import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CriticalPointsClassification() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ヘッセ行列の準備が整ったところで、いよいよ多変数関数の「極値（最大・最小）」を探す一般論に入ります。
                1変数関数のときと同様に、極値の候補となる「平らな点」を見つけることが最初のステップです。
                これを「臨界点（停留点）」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">臨界点の定義と必要条件</h2>

            <ContentBox type="definition" title="Definition 6.2-1 (臨界点・停留点)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(\boldsymbol{x})" /> が点 <InlineMath math="\boldsymbol{a}" /> で偏微分可能であり、すべての成分に関して偏導関数が <InlineMath math="0" /> になること、すなわち
                </p>
                <BlockMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0} \quad \left(\text{つまり } \frac{\partial f}{\partial x_1}(\boldsymbol{a}) = \dots = \frac{\partial f}{\partial x_n}(\boldsymbol{a}) = 0\right)" />
                <p className="leading-relaxed">
                    が成り立つとき、<InlineMath math="\boldsymbol{a}" /> を <InlineMath math="f" /> の<strong>臨界点</strong>（critical point）または<strong>停留点</strong>（stationary point）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                なぜ臨界点を探すのでしょうか？ それは、領域の内部で極値（局所的な最大値・最小値）をとる点は、
                必ず臨界点になるからです。これが極値をとるための「必要条件」です。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1 (内点における極値の必要条件)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が定義域の<strong>内点</strong> <InlineMath math="\boldsymbol{a}" /> で極大値または極小値をとり、
                    かつ <InlineMath math="\boldsymbol{a}" /> で偏微分可能であるとする。このとき、<InlineMath math="\boldsymbol{a}" /> は <InlineMath math="f" /> の臨界点である。
                    すなわち、
                </p>
                <BlockMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="\boldsymbol{a} = (a_1, \dots, a_n)" /> とする。
                    任意の <InlineMath math="i \in \{1, \dots, n\}" /> について、<InlineMath math="x_i" /> 以外の変数を <InlineMath math="a_k" /> に固定した1変数関数
                </p>
                <BlockMath math="g(t) = f(a_1, \dots, a_{i-1}, t, a_{i+1}, \dots, a_n)" />
                <p className="leading-relaxed">
                    を考える。<InlineMath math="f" /> が <InlineMath math="\boldsymbol{a}" /> で極値をとるならば、<InlineMath math="g(t)" /> は <InlineMath math="t = a_i" /> で1変数としての極値をとる。
                    1変数の極値の必要条件（Theorem 2.1-1：フェルマーの定理）より、<InlineMath math="g'(a_i) = 0" /> が成り立つ。
                    <InlineMath math="g'(a_i)" /> は定義により <InlineMath math="\frac{\partial f}{\partial x_i}(\boldsymbol{a})" /> に他ならないため、すべての <InlineMath math="i" /> で <InlineMath math="\frac{\partial f}{\partial x_i}(\boldsymbol{a}) = 0" />、
                    つまり <InlineMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                これで極値の「候補」は <InlineMath math="\nabla f(\boldsymbol{x}) = \boldsymbol{0}" /> を解くことで見つけられることが分かりました。
                しかし、臨界点がすべて極値になるわけではなく、単に接平面が水平になる「鞍部」に過ぎない場合もあります。
                極大・極小・鞍部を判別する「第2次条件」こそが、ヘッセ行列の出番です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">臨界点の分類と第2次条件</h2>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ヘッセ行列による極値判定：正定値・負定値・不定値)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(\boldsymbol{x})" /> が <InlineMath math="C^2" /> 級であり、<InlineMath math="\boldsymbol{a}" /> が <InlineMath math="f" /> の臨界点（<InlineMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" />）であるとする。
                    <InlineMath math="\boldsymbol{a}" /> におけるヘッセ行列を <InlineMath math="H = H(\boldsymbol{a})" /> とおく。このとき、
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><InlineMath math="H" /> が<strong>正定値行列</strong>（すべての固有値が正）ならば、<InlineMath math="f" /> は <InlineMath math="\boldsymbol{a}" /> で<strong>狭義の極小値</strong>をとる。</li>
                    <li><InlineMath math="H" /> が<strong>負定値行列</strong>（すべての固有値が負）ならば、<InlineMath math="f" /> は <InlineMath math="\boldsymbol{a}" /> で<strong>狭義の極大値</strong>をとる。</li>
                    <li><InlineMath math="H" /> が<strong>不定値行列</strong>（正の固有値と負の固有値の両方を持つ）ならば、<InlineMath math="f" /> は <InlineMath math="\boldsymbol{a}" /> で<strong>鞍点</strong>（極値ではない臨界点）をとる。</li>
                    <li><InlineMath math="H" /> が半正定値または半負定値（固有値に <InlineMath math="0" /> を含むが符号の混在はない）の場合、この条件だけでは判定できない。</li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="テイラー展開による直感的理解">
                <p className="leading-relaxed">
                    この定理の意味は、多変数の2次テイラー展開（Chapter 3：Theorem 3.4-2 の多変数版）を考えると明白になります。
                    臨界点 <InlineMath math="\boldsymbol{a}" /> の近くで <InlineMath math="\boldsymbol{x} = \boldsymbol{a} + \boldsymbol{h}" /> とおくと、<InlineMath math="\nabla f(\boldsymbol{a}) = \boldsymbol{0}" /> なので、
                </p>
                <BlockMath math="f(\boldsymbol{a} + \boldsymbol{h}) \approx f(\boldsymbol{a}) + \frac{1}{2} \boldsymbol{h}^T H \boldsymbol{h}" />
                <p className="leading-relaxed">
                    と近似されます（2次の項が主役になる）。
                    ここで <InlineMath math="Q(\boldsymbol{h}) = \boldsymbol{h}^T H \boldsymbol{h}" /> は<strong>2次形式</strong>です。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="H" /> が正定値（<InlineMath math="Q(\boldsymbol{h}) > 0" />）：どの方向に <InlineMath math="\boldsymbol{h}" /> を動かしても <InlineMath math="f" /> は増加する。<InlineMath math="\boldsymbol{a}" /> はお椀の底（極小）。</li>
                    <li><InlineMath math="H" /> が負定値（<InlineMath math="Q(\boldsymbol{h}) < 0" />）：どの方向に <InlineMath math="\boldsymbol{h}" /> を動かしても <InlineMath math="f" /> は減少する。<InlineMath math="\boldsymbol{a}" /> は山の頂上（極大）。</li>
                    <li><InlineMath math="H" /> が不定値：<InlineMath math="Q(\boldsymbol{h})" /> が正になる方向と負になる方向がある。つまり「登る方向」と「下る方向」が混在する馬の鞍（鞍点）。</li>
                </ul>
                <p className="leading-relaxed mt-2">
                    したがって、極値判定とは「2次係数行列であるヘッセ行列の符号を調べる」ことに帰着するのです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>臨界点（<InlineMath math="\nabla f = \boldsymbol{0}" />）は極値の必要条件である（Proposition 6.2-1）。</li>
                    <li>テイラー展開により、臨界点付近の挙動は2次形式 <InlineMath math="\boldsymbol{h}^T H \boldsymbol{h}" /> で近似される。</li>
                    <li>ヘッセ行列 <InlineMath math="H" /> の固有値の符号（正定値、負定値、不定値）によって、極小、極大、鞍点が分類される（Theorem 6.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
