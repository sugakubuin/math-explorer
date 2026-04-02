import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_2_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で上限と下限について定義しました。解析学における実数体 <InlineMath math="\mathbb{R}" /> の最も重要かつ根本的な事実、それは<strong>「上に有界な集合には目に見えない『穴』が存在せず、必ずギリギリの壁（上限）を見つけることができる」</strong>というものです。
            </p>
            <p>
                実は Chapter 1 の §1.2 で「デデキント切断」による構成を見たとき、我々はこの事実を<strong>定理として証明済み</strong>です（Theorem 1.2-1）。コーシー列から構成した場合にも、この性質が成り立つことが証明できます。
                しかし現代の多くの解析学の教科書では、構成の複雑な議論をスキップし、この「実数だけが持つ強烈な事実」を公理として最初から認めた上で議論を出発させる構成をとります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上限公理</h2>

            <p>
                実数体 <InlineMath math="\mathbb{R}" /> の真髄たる「完備性（あるいは連続性）」は、この公理によって定義されます。
            </p>

            <ContentBox type="axiom" title="Axiom 2.2-1 (上限公理 / 連続性公理)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> の空でない部分集合 <InlineMath math="S" /> が上に有界であるならば、<InlineMath math="S" /> は <InlineMath math="\mathbb{R}" /> の中に必ず<strong>上限 <InlineMath math="\sup S" /> を持つ</strong>。
                </p>
            </ContentBox>

            <p>
                この命題は公理であり、証明するものではありません。
                ただし、これと同値な命題はいくつもあり、講義や文献によっては別の命題が公理として採用されていることもあります。<br />
                また重要な事実として、この公理は有理数 <InlineMath math="\mathbb{Q}" /> では成立しません。<InlineMath math="\{x \in \mathbb{Q} \mid x^2 < 2\}" /> は上に有界（例えば 10 など）ですが、有理数の世界での上限 <InlineMath math="\sqrt{2}" /> が存在しないためです。
                上限公理は、「このような無理数の隙間（穴）が実数には一切なく、完全にびっしり埋まっている」ことを保証しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">下限公理の導出</h2>

            <p>
                「上限」が確実に存在するなら、対称的な概念である「下限」も当然存在するはずです。
                上限公理を用いれば、「下に有界な集合における下限の存在」は公理ではなく<strong>定理</strong>として簡単に証明できます。
            </p>

            <ContentBox type="theorem" title="Corollary 2.2-1 (下限の存在定理)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> の空でない部分集合 <InlineMath math="S" /> が下に有界であるならば、<InlineMath math="S" /> は <InlineMath math="\mathbb{R}" /> の中に必ず<strong>下限 <InlineMath math="\inf S" /> を持つ</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [上限公理からの導出]">
                <p>
                    集合 <InlineMath math="S" /> のすべての元にマイナスをかけた集合を <InlineMath math="-S" /> とする。すなわち
                </p>
                <BlockMath math="-S = \{ -x \mid x \in S \}" />
                <p className="mt-2">
                    仮定より <InlineMath math="S" /> は下に有界なので、ある下界 <InlineMath math="L" /> が存在して、すべての <InlineMath math="x \in S" /> に対して <InlineMath math="L \le x" /> を満たす。
                    両辺に <InlineMath math="-1" /> をかけると不等号の向きが反転し、<InlineMath math="-x \le -L" /> となる。
                </p>
                <p className="mt-2">
                    これは、任意の <InlineMath math="-x \in -S" /> に対して <InlineMath math="-x \le -L" /> が成り立つことを意味する。したがって、数 <InlineMath math="-L" /> は集合 <InlineMath math="-S" /> の<strong>上界</strong>である。<br />
                    すなわち、<InlineMath math="-S" /> は「上に有界な空でない集合」であることが示された。
                </p>
                <p className="mt-2">
                    ここで<strong>上限公理（Axiom 2.2-1）</strong>を適用する。<InlineMath math="-S" /> が上に有界であることから、<InlineMath math="-S" /> は必ず上限 <InlineMath math="M = \sup(-S)" /> を持つ。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">
                    [M のマイナスが、元の集合 S の下限になっていることの確認]
                </p>
                <p className="mt-2">
                    上限の定義の2条件を <InlineMath math="M" /> は満たしている。
                    <br />(1) <InlineMath math="M" /> は <InlineMath math="-S" /> の上界なので、任意の <InlineMath math="y \in -S" /> に対して <InlineMath math="y \le M" />。ゆえに任意の <InlineMath math="x \in S" /> で <InlineMath math="-x \le M \implies -M \le x" />。<br />
                    よって <InlineMath math="-M" /> は <InlineMath math="S" /> の下界である。
                    <br />(2) 任意の <InlineMath math="\varepsilon > 0" /> に対して、ある <InlineMath math="y \in -S" /> が存在して <InlineMath math="M - \varepsilon < y" /> が成り立つ（限界ギリギリの性質）。<InlineMath math="y = -x \ (x \in S)" /> と置き、符号を反転すると、
                    <BlockMath math="-(M - \varepsilon) > x \implies -M + \varepsilon > x" />
                    これは、「下界 <InlineMath math="-M" /> を <InlineMath math="\varepsilon" /> だけ内側（上方向）に押し上げると、もはや下界として機能せず、それよりも小さい <InlineMath math="S" /> の元 <InlineMath math="x" /> が存在してしまう」ことを意味する。
                </p>
                <p className="mt-2">
                    したがって、この <InlineMath math="-M" /> こそが、下界の中で最大の存在（すなわち下限）である。よって <InlineMath math="S" /> の下界は存在し、<InlineMath math="\inf S = -\sup(-S)" /> として得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明が示すように、上限公理は「上」の性質だけでなく、対称性を通じて「下限の存在」という実数直線のすべての穴を塞いでいることが分かります。
                以降の解析学の定理（例えば連続関数の最大値定理や関数の積分可能性など）は、根を辿ると究極的にはすべてこの上限公理一つに行き着きます。
            </p>
            <p>
                次節では、この完備性（上限公理）が「数列」や「閉区間」の言葉でどのように言い換えられるのか、3つの同値な命題を紹介します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実数の完備性は<strong>上限公理</strong>（上に有界な空でない集合は必ず上限を持つ）として表される。</li>
                    <li>有理数体には上限を持たない上に有界な集合があるため、上限公理を満たさない（穴がある）。</li>
                    <li>上限公理を認めると、対称性により「下に有界な集合の下限」も必ず存在することが証明できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
