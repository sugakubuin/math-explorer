import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DensitySeparability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ある集合が空間の中でどれくらい「広く分布しているか」を測る尺度として、<strong>稠密性 (Density)</strong> があります。
                また、可算な（番号負けができる程度の）稠密部分集合を持つ空間を<strong>可分空間 (Separable Space)</strong> と呼び、
                これは空間の「サイズ」を測る重要な指標となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">稠密性の定義</h2>

            <p>
                集合の閉包が全体集合に一致するとき、その集合はその空間で「どこにでもある」状態にあります。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (稠密・疎集合)">
                <p>
                    位相空間 <InlineMath math="X" /> の部分集合 <InlineMath math="A" /> に対して：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>稠密 (Dense)</strong>: <InlineMath math="\overline{A} = X" /> が成り立つとき、<InlineMath math="A" /> は <InlineMath math="X" /> で稠密であるという。
                    </li>
                    <li>
                        <strong>疎集合 (Nowhere Dense)</strong>: <InlineMath math="\mathrm{Int}(\overline{A}) = \emptyset" /> となるとき、<InlineMath math="A" /> は疎集合であるという。
                        （どこにも稠密でない、という意味）
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (稠密と疎の例)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>稠密な集合</strong>： <InlineMath math="\mathbb{R}" /> における有理数集合 <InlineMath math="\mathbb{Q}" /> は、<InlineMath math="\overline{\mathbb{Q}} = \mathbb{R}" /> なので稠密である。</li>
                    <li><strong>疎な集合</strong>： <InlineMath math="\mathbb{R}" /> における整数集合 <InlineMath math="\mathbb{Z}" /> は、<InlineMath math="\overline{\mathbb{Z}} = \mathbb{Z}" /> であり且つ <InlineMath math="\mathrm{Int}(\mathbb{Z}) = \emptyset" /> なので疎集合である。</li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                「稠密である」ことの同値な言い換えとして、「どんなに小さな（空でない）開集合をとってきても、必ず <InlineMath math="A" /> の点とぶつかる」というものがあります。
                これは直感的に「<InlineMath math="A" /> を避けて開集合を作ることができない」という稠密性の本質を表しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可分空間</h2>

            <p>
                空間が巨大であっても、そのエッセンス（骨組み）を可算な集合で代表させることができれば、多くの議論が簡単になります。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (可分空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>可分 (Separable)</strong> であるとは、
                    <InlineMath math="X" /> の<strong>可算</strong>な稠密部分集合が存在することをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (有理数と実数)">
                <p>
                    実数全体の集合 <InlineMath math="\mathbb{R}" /> において、有理数全体の集合 <InlineMath math="\mathbb{Q}" /> は可算な稠密部分集合である。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>稠密性：任意の開区間 <InlineMath math="(a, b)" /> には必ず有理数が存在する（有理数の稠密性）。</li>
                    <li>可算性：有理数は自然数と 1 対 1 に対応づけられる（可算集合）。</li>
                </ul>
                <p className="mt-2">
                    したがって、<InlineMath math="\mathbb{R}" /> は可分空間である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="可分でない空間の例">
                <p>
                    すべての空間が可分というわけではありません。例えば、非可算集合に離散位相（すべての 1 点集合を開集合とする）を入れた空間を考えます。
                    各点が独立した開集合なので、稠密であるためにはすべての点を含まなければなりませんが、それは可算ではありません。
                    このように、可分性は空間の「点と点の混ざり具合」や「解像度の限界」に関わる性質なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>空間のすみずみまで広がっている（閉包が全体）集合を<strong>稠密</strong>という。</li>
                    <li>どんなに小さな開集合にも稠密集合の点が含まれる。</li>
                    <li><strong>可分空間</strong>とは、可算な稠密部分集合を持つ空間のことである。</li>
                    <li>実数は有理数という「骨組み」を持つため可分である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
