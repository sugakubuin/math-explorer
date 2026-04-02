import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ResidueDefinitionAndCalculation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で学んだローラン展開は、関数が特異点の周りでどのように振る舞うかを「無限次数の多項式」として記述するものでした。
                この展開係数のうち、負の第1次数の係数 <InlineMath math="c_{-1}" /> は、積分計算において極めて特権的な地位を占めています。
                本節では、この係数「留数」を定義し、それを効率的に算出するための手法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">留数の定義</h2>

            <p>
                孤立特異点の周りでの積分を考える際、正の次数の項や、マイナス2次より低い項は、一周積分するとすべて消えてしまいます。
                唯一、値が残るのがマイナス1次の項です。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (留数)">
                <p>
                    点 <InlineMath math="z_0" /> を孤立特異点とする関数 <InlineMath math="f(z)" /> のローラン展開を
                    <BlockMath math="f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n" />
                    とするとき、展開係数 <InlineMath math="c_{-1}" /> を <InlineMath math="f(z)" /> の <InlineMath math="z_0" /> における <strong>留数 (Residue)</strong> といい、
                    <InlineMath math="\text{Res}(f; z_0)" /> または <InlineMath math="\text{Res}_{z=z_0} f(z)" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="留数（Residue）の直感的な意味">
                <p>
                    英単語の "Residue" は「残りカス」や「残差」を意味します。
                    これは、関数を一周積分したときに他の項がすべて消えてしまい、最後にこの項だけが「残る」ことに由来しています。
                    複素積分という舞台において、留数はその特異点が持つ「積分の種」のような役割を果たします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極における留数の計算公式</h2>

            <p>
                留数を得るために常にローラン展開を行うのは現実的ではありません。
                特に特異点が「極」である場合、極限操作や微分を用いて直接留数を求める公式が存在します。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1 (1位の極の留数)">
                <p>
                    <InlineMath math="z_0" /> が <InlineMath math="f(z)" /> の1位の極であるとき、
                    <BlockMath math="\text{Res}(f; z_0) = \lim_{z \to z_0} (z - z_0) f(z)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="z_0" /> が1位の極ならば、ローラン展開は
                    <InlineMath math="f(z) = \frac{c_{-1}}{z - z_0} + c_0 + c_1(z - z_0) + \dots" />
                    と書ける。両辺に <InlineMath math="z - z_0" /> をかけると、
                    <InlineMath math="(z - z_0) f(z) = c_{-1} + c_0(z - z_0) + c_1(z - z_0)^2 + \dots" />
                    となる。ここで <InlineMath math="z \to z_0" /> とすれば、右辺の第2項以降はすべて 0 に収束し、
                    <InlineMath math="\lim_{z \to z_0} (z - z_0) f(z) = c_{-1}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-6">
                極の位数が高くなった場合、微分を繰り返すことで目的の係数 <InlineMath math="c_{-1}" /> を取り出します。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-2 (m位の極の留数)">
                <p>
                    <InlineMath math="z_0" /> が <InlineMath math="f(z)" /> の <InlineMath math="m" /> 位の極であるとき、
                    <BlockMath math="\text{Res}(f; z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [ (z-z_0)^m f(z) ]" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="z_0" /> が <InlineMath math="m" /> 位の極のとき、
                    <InlineMath math="f(z) = \frac{c_{-m}}{(z-z_0)^m} + \dots + \frac{c_{-1}}{z-z_0} + c_0 + c_1(z-z_0) + \dots" />
                </p>
                <p>
                    両辺に <InlineMath math="(z-z_0)^m" /> をかけると
                    <InlineMath math="(z-z_0)^m f(z) = c_{-m} + c_{-m+1}(z-z_0) + \dots + c_{-1}(z-z_0)^{m-1} + c_0(z-z_0)^m + \dots" />
                </p>
                <p>
                    この右辺は <InlineMath math="z_0" /> で正則な冪級数である。
                    求めたい係数 <InlineMath math="c_{-1}" /> は、この級数の <InlineMath math="(z-z_0)^{m-1}" /> の係数に相当する。
                    テイラー展開の係数公式（あるいは <InlineMath math="m-1" /> 回微分して <InlineMath math="z \to z_0" /> とする操作）を適用すれば、
                    <InlineMath math="(m-1)!\ c_{-1}" /> が残る。よって公式が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-6">
                また、有理関数の形をしている場合、分母を微分するだけで留数が求まることがあります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-3 (分母の微分による計算)">
                <p>
                    <InlineMath math="f(z) = \frac{g(z)}{h(z)}" /> において、 <InlineMath math="g, h" /> が <InlineMath math="z_0" /> で正則であり、
                    <InlineMath math="g(z_0) \neq 0, h(z_0) = 0, h'(z_0) \neq 0" /> であるとき、
                    <BlockMath math="\text{Res}(f; z_0) = \frac{g(z_0)}{h'(z_0)}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="h(z_0) = 0, h'(z_0) \neq 0" /> より、 <InlineMath math="z_0" /> は <InlineMath math="h(z)" /> の1位の零点である。
                    したがって <InlineMath math="z_0" /> は <InlineMath math="f(z)" /> の1位の極となる。
                    Proposition 7.1-1 を適用すると、
                </p>
                <BlockMath math="\begin{aligned} \text{Res}(f; z_0) &= \lim_{z \to z_0} (z-z_0) \frac{g(z)}{h(z)} \\ &= \lim_{z \to z_0} \frac{g(z)}{\frac{h(z) - h(z_0)}{z-z_0}} \\ &= \frac{g(z_0)}{h'(z_0)} \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1 (留数計算の例)">
                <p>
                    <InlineMath math="f(z) = \frac{1}{z^2+1}" /> の <InlineMath math="z = i" /> における留数を求めよ。
                </p>
                <p>
                    <strong>解答（Proposition 7.1-1 を用いる場合）：</strong>
                    <InlineMath math="f(z) = \frac{1}{(z+i)(z-i)}" /> より
                    <BlockMath math="\text{Res}(f; i) = \lim_{z \to i} (z-i) \frac{1}{(z+i)(z-i)} = \frac{1}{2i}" />
                </p>
                <p>
                    <strong>解答（Proposition 7.1-3 を用いる場合）：</strong>
                    <InlineMath math="g(z)=1, h(z)=z^2+1" /> とすると <InlineMath math="h'(z)=2z" />。
                    <BlockMath math="\text{Res}(f; i) = \frac{g(i)}{h'(i)} = \frac{1}{2i}" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>留数とは、孤立特異点の周りでのローラン展開における係数 <InlineMath math="c_{-1}" /> である。</li>
                    <li>1位の極、高位の極、そして分母の微分を用いた留数計算公式を使い分けることが重要である。</li>
                    <li>この留数の計算が、次節の「留数定理」による積分実行の核となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
