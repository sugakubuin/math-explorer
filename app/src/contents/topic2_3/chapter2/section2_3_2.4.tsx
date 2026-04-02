import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_2_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                実数の完備性（上限公理）がもたらすもう一つの重要な帰結として、「アルキメデスの原理」と「有理数の稠密性」があります。
                これらは「実数直線において、どれほど小さな数（<InlineMath math="\varepsilon" />）でも、足し合わせ続ければいつかどんな巨大な壁でも越えられる」、あるいは「どれほど狭い実数の隙間を覗き込んでも、そこには必ず有理数の砂粒が存在する」という直感的なイメージを厳密に保証する定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アルキメデスの原理</h2>

            <p>
                「自然数は上に有界ではない」という、当たり前に思える事実ですが、これも上限公理から導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (アルキメデスの原理)">
                <p>
                    任意の正の実数 <InlineMath math="\varepsilon > 0" /> と任意の実数 <InlineMath math="x \in \mathbb{R}" /> に対して、ある自然数 <InlineMath math="n \in \mathbb{N}" /> が存在して、
                </p>
                <BlockMath math="n \varepsilon > x \quad \left( \text{あるいは} \quad \frac{1}{n} < \varepsilon \right)" />
                <p className="mt-2">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [上限公理を用いた背理法]">
                <p>
                    背理法で証明する。命題が偽であると仮定すると、「ある正の実数 <InlineMath math="\varepsilon" /> とある実数 <InlineMath math="x" /> が存在して、すべての自然数 <InlineMath math="n" /> について <InlineMath math="n \varepsilon \le x" /> となる」ことになる。
                </p>
                <p className="mt-2">
                    集合 <InlineMath math="S = \{n \varepsilon \mid n \in \mathbb{N}\}" /> を考える。
                    仮定より、<InlineMath math="x" /> は集合 <InlineMath math="S" /> の上界である。すなわち、<InlineMath math="S" /> は上に有界な空でない集合である。
                </p>
                <p className="mt-2">
                    <strong>上限公理（Axiom 2.2-1）</strong>により、<InlineMath math="S" /> は必ず上限 <InlineMath math="s = \sup S" /> を持つ。
                </p>
                <p className="mt-2">
                    <InlineMath math="s" /> は集合 <InlineMath math="S" /> の上界なので、任意の自然数 <InlineMath math="n" /> について <InlineMath math="n \varepsilon \le s" /> である。<br />
                    ここで <InlineMath math="n" /> は任意の自然数であるため、<InlineMath math="n+1" /> もまた自然数である。したがって、
                    <BlockMath math="(n+1)\varepsilon \le s" />
                    も当然成り立つ。
                </p>
                <p className="mt-2">
                    この式の両辺から <InlineMath math="\varepsilon" /> を引くと、
                    <BlockMath math="n\varepsilon \le s - \varepsilon" />
                    となる。これは、「任意の自然数 <InlineMath math="n" /> に対して <InlineMath math="n\varepsilon \le s - \varepsilon" /> である」、すなわち<strong>「<InlineMath math="s - \varepsilon" /> は集合 <InlineMath math="S" /> の上界である」</strong>ことを意味する。
                </p>
                <p className="mt-2">
                    しかし、<InlineMath math="\varepsilon > 0" /> なので <InlineMath math="s - \varepsilon < s" /> である。<InlineMath math="s" /> は「上界の中で最小のもの（上限）」であるはずなのに、それよりも真に小さい上界 <InlineMath math="s - \varepsilon" /> が見つかってしまった。これは矛盾である。
                </p>
                <p className="mt-2">
                    したがって、最初の仮定が誤りであり、アルキメデスの原理は成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理数の稠密性（ちゅうみつせい）</h2>

            <p>
                「任意の実数の間には、どんなに狭くても必ず有理数が挟まっている」という、解析学における不可欠な性質です。アルキメデスの原理を用いると鮮やかに証明できます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-2 (有理数の稠密性)">
                <p>
                    任意の2つの実数 <InlineMath math="a, b" /> （ここで <InlineMath math="a < b" /> とする）に対して、
                    間にある有理数 <InlineMath math="q \in \mathbb{Q}" /> が必ず存在する。
                </p>
                <BlockMath math="a < q < b" />
            </ContentBox>

            <ContentBox type="proof" title="Proof [アルキメデスの原理を用いた構成的証明]">
                <p>
                    目標は、<InlineMath math="a < \frac{m}{n} < b" /> となるような整数 <InlineMath math="m \in \mathbb{Z}" /> と自然数 <InlineMath math="n \in \mathbb{N}" /> を見つけることである。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">
                    [Step 1: 隙間を拡大する自然数 n を見つける]
                </p>
                <p className="mt-2">
                    <InlineMath math="a < b" /> より、<InlineMath math="b - a > 0" /> である。これを区間の「幅」と考える。
                    <strong>アルキメデスの原理（Theorem 2.4-1）</strong>を <InlineMath math="\varepsilon = b - a" /> および <InlineMath math="x = 1" /> に適用すると、
                    <BlockMath math="n(b - a) > 1 \iff \frac{1}{n} < b - a" />
                    を満たす自然数 <InlineMath math="n" /> が存在する。
                    （これは直感的に言えば「分母 <InlineMath math="n" /> を十分に大きく取り、ピッチ <InlineMath math="1/n" /> が区間の幅 <InlineMath math="b - a" /> より狭くなるようにした」ということである）。
                    これを変形すると <InlineMath math="nb - na > 1" /> すなわち <InlineMath math="nb > na + 1" /> となる。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">
                    [Step 2: 条件を満たす整数 m を見つける]
                </p>
                <p className="mt-2">
                    次に、ピッチ <InlineMath math="1/n" /> を何歩進めば <InlineMath math="a" /> を超えるかを考える。
                    再びアルキメデスの原理から、自然数の集合は上に有界ではないため、<InlineMath math="m > na" /> となる整数 <InlineMath math="m" /> は存在する。そのような <InlineMath math="m" /> の中で<strong>最小の整数</strong>を選ぶ（整数の性質として最小元は存在する）。
                    すると、<InlineMath math="m" /> は <InlineMath math="na" /> より大きい最初の整数なので、
                    <BlockMath math="m - 1 \le na < m" />
                    が成り立つ。<InlineMath math="na < m" /> は <InlineMath math="a < \frac{m}{n}" /> を意味し、左側の不等式が得られる。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">
                    [Step 3: 上限を越えていないことの確認]
                </p>
                <p className="mt-2">
                    さらに、<InlineMath math="m - 1 \le na" /> の両辺に <InlineMath math="1" /> を足すと <InlineMath math="m \le na + 1" /> となる。Step 1で作った不等式 <InlineMath math="na + 1 < nb" /> とつなげると、
                    <BlockMath math="m \le na + 1 < nb" />
                    すなわち <InlineMath math="m < nb" /> を得る。両辺を <InlineMath math="n" /> で割ると <InlineMath math="\frac{m}{n} < b" /> となり、右側の不等式が得られる。
                </p>
                <p className="mt-2">
                    以上をまとめると、
                    <BlockMath math="a < \frac{m}{n} < b" />
                    となり、求める有理数 <InlineMath math="q = \frac{m}{n}" /> が見つかった。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無理数の稠密性</h2>

            <p>
                有理数がみっちりと詰まっているなら、実は無理数も同じように「任意の隙間にみっちり」詰まっています。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 (無理数の稠密性)">
                <p>
                    任意の2つの実数 <InlineMath math="a, b" /> （<InlineMath math="a < b" />）に対して、
                    間にある<strong>無理数</strong> <InlineMath math="x" /> が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [有理数の稠密性からの導出]">
                <p>
                    有理数の稠密性を利用するため、元の区間を操作するテクニックを用いる。
                </p>
                <p className="mt-2">
                    区間の端点 <InlineMath math="a, b" /> をそれぞれ <InlineMath math="\sqrt{2}" />（無理数）で割った値、<InlineMath math="\frac{a}{\sqrt{2}}" /> と <InlineMath math="\frac{b}{\sqrt{2}}" /> を考える。
                    <InlineMath math="a < b" /> より、当然 <InlineMath math="\frac{a}{\sqrt{2}} < \frac{b}{\sqrt{2}}" /> である。
                </p>
                <p className="mt-2">
                    ここで<strong>有理数の稠密性（Theorem 2.4-2）</strong>を適用すると、これら2つの値の間にはある有理数 <InlineMath math="q" /> （ただし <InlineMath math="q = 0" /> の場合は少しずらせば <InlineMath math="q \neq 0" /> に取れるとする）が存在する。
                    <BlockMath math="\frac{a}{\sqrt{2}} < q < \frac{b}{\sqrt{2}}" />
                </p>
                <p className="mt-2">
                    この不等式のすべての辺に <InlineMath math="\sqrt{2}" /> を掛ける。
                    <BlockMath math="a < q\sqrt{2} < b" />
                </p>
                <p className="mt-2">
                    <InlineMath math="q" /> はゼロでない有理数、<InlineMath math="\sqrt{2}" /> は無理数である。有理数と無理数の積は必ず<strong>無理数</strong>になる（もし有理数 <InlineMath math="r" /> になるなら <InlineMath math="\sqrt{2} = \frac{r}{q}" /> となり無理数であることに矛盾するため）。
                </p>
                <p className="mt-2">
                    よって、<InlineMath math="x = q\sqrt{2}" /> という無理数が、任意の実数 <InlineMath math="a, b" /> の間に存在することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>アルキメデスの原理</strong>：<InlineMath math="\varepsilon" /> がどれほど小さくとも、<InlineMath math="n" />倍すればどんな実数 <InlineMath math="x" /> も超えられる。自然数列に上界はない。</li>
                    <li><strong>稠密（ちゅうみつ）性</strong>：実数直線のどんな狭い区間 <InlineMath math="(a, b)" /> をとっても、その中には無限の有理数と無理数が入り乱れて存在する。</li>
                    <li>アルキメデスの原理や稠密性もまた、実数の完備性（上限公理）という揺るぎない土台から論理的に演繹される重要な性質である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
