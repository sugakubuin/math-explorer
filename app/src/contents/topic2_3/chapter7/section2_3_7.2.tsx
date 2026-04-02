import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniformConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で見たように、各点収束という素朴な極限では「連続性」が壊れてしまうことがありました。
                これは、点 <InlineMath math="x" /> の位置によって収束のスピードがまちまちであり（例えば <InlineMath math="x^n" /> の場合、<InlineMath math="x=0.999" /> のような点では <InlineMath math="0" /> に近づくのに膨大な時間がかかる）、関数のグラフが千切れるような「ひずみ」が生じるためです。
                これを防ぐために導入されるのが、解析学史上最も重要な概念のひとつである<strong>一様収束</strong>（uniform convergence）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様収束の定義</h2>

            <ContentBox type="definition" title="Definition 7.2-1 (一様収束)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数列 <InlineMath math="\{f_n(x)\}" /> が、関数 <InlineMath math="f(x)" /> に <InlineMath math="I" /> 上で<strong>一様収束</strong>するとは、
                    任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在して、区間内の<strong>任意の点 <InlineMath math="x \in I" /> に対して</strong>同時に
                </p>
                <BlockMath math="n \geq N \implies |f_n(x) - f(x)| < \varepsilon" />
                <p>
                    が成り立つことである。
                </p>
            </ContentBox>

            <p>
                Chapter 5 で学んだ「点連続」と「一様連続」の違いを思い出してください。ここでも全く同じ<strong>量化子の順序の逆転</strong>が起きています。
            </p>

            <ContentBox type="remark" title="各点収束との比較（一様性の本質）">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <strong>各点収束：</strong><InlineMath math="\forall x, \forall \varepsilon > 0, \exists N \text{ s.t. } \dots" /><br />
                        <InlineMath math="N" /> の値は <InlineMath math="x" /> ごとに都合の良いものを選んで構わない（局所的）。
                    </li>
                    <li>
                        <strong>一様収束：</strong><InlineMath math="\forall \varepsilon > 0, \exists N \text{ s.t. } \forall x, \dots" /><br />
                        <InlineMath math="N" /> の値は <InlineMath math="x" /> に依存させてはならず、どんな <InlineMath math="x" /> を持ってきても通用する（圧倒的に遅い奴がいても、そいつすら収束圏内に入るような）<strong>共通の <InlineMath math="N" />（大域的な基準）</strong>を見つけなければならない。
                    </li>
                </ul>
                <p className="mt-4">
                    グラフのイメージで言えば、一様収束とは「極限関数 <InlineMath math="f(x)" /> を中心として上下に幅 <InlineMath math="\pm\varepsilon" /> の『帯（チューブ）』を引いたとき、番号 <InlineMath math="N" /> 以上になれば、関数 <InlineMath math="f_n(x)" /> のグラフ全体が隙間なくすっぽりとその帯の中に収まる」ということです。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 7.2-1 (一様収束ならば各点収束する)">
                <p>
                    区間 <InlineMath math="I" /> 上で関数列 <InlineMath math="\{f_n(x)\}" /> が関数 <InlineMath math="f(x)" /> に一様収束するならば、<InlineMath math="\{f_n(x)\}" /> は <InlineMath math="f(x)" /> に各点収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数列 <InlineMath math="\{f_n\}" /> が <InlineMath math="f" /> に一様収束すると仮定する。このとき、一様収束の定義より、任意の <InlineMath math="\varepsilon > 0" /> に対してある自然数 <InlineMath math="N" /> が存在して、区間 <InlineMath math="I" /> 内の<strong>すべての点 <InlineMath math="x \in I" /> について</strong>
                </p>
                <BlockMath math="n \geq N \implies |f_n(x) - f(x)| < \varepsilon" />
                <p>
                    が成り立つ。<br />
                    ここで、任意の特定の点 <InlineMath math="x_0 \in I" /> を固定して考える。上記の性質はすべての <InlineMath math="x" /> で成り立つため、当然この特定の点 <InlineMath math="x_0" /> についても
                </p>
                <BlockMath math="n \geq N \implies |f_n(x_0) - f(x_0)| < \varepsilon" />
                <p>
                    が成立する。これはまさに、点 <InlineMath math="x_0" /> における数列 <InlineMath math="\{f_n(x_0)\}" /> が <InlineMath math="f(x_0)" /> に収束することの定義（<InlineMath math="\varepsilon-N" /> 論法）を満たしている。<br />
                    <InlineMath math="x_0" /> は区間 <InlineMath math="I" /> 内の任意の点であったため、すべての点で各点収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各点収束するが一様収束しない例</h2>

            <p>
                前節で挙げた Example 7.1-1 が、まさに「各点収束するが一様収束しない」関数列の典型例です。これを一様収束の厳密な定義に照らし合わせて、なぜ一様収束しないのかを証明します。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (一様収束しない関数の証明)">
                <p>
                    区間 <InlineMath math="I = [0, 1]" /> 上の関数列 <InlineMath math="f_n(x) = x^n" /> は、極限関数 <InlineMath math="f(x)" /> （<InlineMath math="x<1" /> で <InlineMath math="0" />、<InlineMath math="x=1" /> で <InlineMath math="1" />）に各点収束するが、一様収束はしない。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    背理法を用いる。一様収束すると仮定すると、例えば <InlineMath math="\varepsilon = \frac{1}{2}" /> に対して、ある共通の <InlineMath math="N" /> が存在して、すべての <InlineMath math="x \in [0, 1]" /> について
                </p>
                <BlockMath math="n \geq N \implies |f_n(x) - f(x)| < \frac{1}{2}" />
                <p>
                    となるはずである。特に <InlineMath math="n = N" /> のとき、すべての <InlineMath math="0 \leq x < 1" /> に対して <InlineMath math="f(x) = 0" /> なので、
                </p>
                <BlockMath math="|x^N - 0| = x^N < \frac{1}{2}" />
                <p>
                    が成立しなければならない。<br />
                    しかし、関数 <InlineMath math="x^N" /> は <InlineMath math="x \to 1" /> と近づくにつれて限界なく <InlineMath math="1" /> に近づく。したがって、<InlineMath math="x" /> を十分に1に近い値（例えば <InlineMath math="x = \left(\frac{3}{4}\right)^{1/N}" /> など）に取れば、<InlineMath math="x^N" /> の値は <InlineMath math="\frac{1}{2}" /> を超えてしまうため、矛盾が生じる。
                </p>
                <p className="mt-2">
                    これはまさに、<InlineMath math="x=1" /> 付近で収束のスピードが極端に遅くなり、「どんなに番号 <InlineMath math="N" /> を進めても、関数の右上部分が幅 <InlineMath math="\varepsilon" /> の帯からはみ出してしまう」という事態を数式で表したものである。よって一様収束ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                もう一つの有名な反例として、「波の山が移動していく」ような関数列の例があります。
                <InlineMath math="f_n(x)" /> を、高さ<InlineMath math="1" />の鋭い山（三角形など）が区間 <InlineMath math="[0, 1/n]" /> に存在し、それ以外は <InlineMath math="0" /> であるような連続関数だとします。<br />
                どの点 <InlineMath math="x > 0" /> を選んでも、<InlineMath math="n" /> が大きくなれば山は左に通り過ぎるので <InlineMath math="f_n(x) \to 0" /> となり、<InlineMath math="f_n(0) = 0" /> と合わせると、各点収束の極限は「完全に平らな <InlineMath math="f(x) = 0" />」です。<br />
                しかし、各 <InlineMath math="n" /> において関数の最大値（山の高さ）は常に <InlineMath math="1" /> をキープしているため、<InlineMath math="f(x)=0" /> の周りの <InlineMath math="\varepsilon" />-帯（例えば幅 <InlineMath math="1/2" />）にすっぽり収まることは永遠になく、一様収束しません。（これも後に積分の限界を示す例として重要になります。）
            </p>

            <p>
                このように、各点収束と一様収束の間には深い溝があります。そして、一様収束性が成立した時に初めて、連続性や積分といった解析的な良い性質が「遺伝」することが保証されます。次節 §7.3 では、その保存則の美しい証明プロセスを見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一様収束とは、区間内のどんな点に対しても「共通の番号 <InlineMath math="N" />」から先で誤差が <InlineMath math="\varepsilon" /> 未満で抑え込まれるという強力な収束である。</li>
                    <li>量化子で言えば、<InlineMath math="\forall x" /> と <InlineMath math="\exists N" /> の順序が各点収束と入れ替わっている（大域的な性質）。</li>
                    <li><InlineMath math="f_n(x) = x^n" /> のように、収束の遅い部分がはみ出し続ける関数列は、各点収束するが一様収束しない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
