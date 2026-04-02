import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionKnotGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群の応用として、空間そのものだけでなく「空間の中に埋め込まれた図形」の絡まり具合を調べるというアプローチがあります。その代表例が「結び目理論（Knot theory）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">結び目と結び目群の定義</h2>

            <p className="leading-relaxed">
                日常的な意味での「結び目」は、ひもの両端を引っ張って作るものですが、数学的には両端を繋いで輪（ループ）にしたものを考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.4-1 (結び目)"
            >
                <p>
                    <strong>結び目（knot）</strong>とは、3次元空間 <InlineMath math="\mathbb{R}^3" />（あるいはそれに無限遠点を付け加えた 3次元球面 <InlineMath math="S^3" />）の中への、円周 <InlineMath math="S^1" /> の滑らかな（または区分的に線形な）埋め込み <InlineMath math="K : S^1 \hookrightarrow S^3" /> のことである。
                </p>
                <p>
                    直感的には、空間内で自己交差を持たずに閉じた 1 本の曲線のことである。全く結ばれていない単純な円周を<strong>自明な結び目（unknot）</strong>という。結び目理論の基本的な問題は、「与えられた結び目 <InlineMath math="K" /> が自明な結び目に（自己交差することなく）連続変形できるか（解けるか）？」を判定することである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                結び目自体はどれも単なる <InlineMath math="S^1" /> と同相であるため、結び目そのものを位相的に調べても違いはわかりません。そこで、結び目の「外側」の空間の形を調べます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.4-2 (結び目群)"
            >
                <p>
                    結び目 <InlineMath math="K" /> に対して、空間全体から <InlineMath math="K" /> を取り除いた空間（<strong>結び目補空間</strong>）の基本群を、<InlineMath math="K" /> の<strong>結び目群（knot group）</strong>と呼び、<InlineMath math="\pi_1(S^3 \setminus K)" /> で表す。
                </p>
                <p>
                    2つの結び目が連続変形可能であれば、それらの補空間はホモトピー同値になり、結び目群も同型になる。したがって、結び目群は結び目の「絡まり方」を測る強力な位相不変量である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">結び目群の計算例</h2>

            <p className="leading-relaxed">
                実際に結び目群を計算することで、特定の結び目が「絶対に解けない」ことを数学的に証明できます。
            </p>

            <ContentBox
                type="example"
                title="Example 5.4-1 (自明な結び目の結び目群)"
            >
                <p>
                    自明な結び目（単なる円周）を <InlineMath math="K_0" /> とする。<InlineMath math="S^3" /> から円周を 1 つ取り除いた空間は、<InlineMath math="\mathbb{R}^3" /> から直線を 1 本取り除いた空間（あるいは <InlineMath math="\mathbb{R}^2 \setminus \{0\} \times \mathbb{R}" />）とホモトピー同値になる。
                </p>
                <p>
                    したがって、これは円周 <InlineMath math="S^1" /> に変形収縮するため、その結び目群は
                    <BlockMath math="\pi_1(S^3 \setminus K_0) \cong \pi_1(S^1) \cong \mathbb{Z}" />
                    となる。この <InlineMath math="\mathbb{Z}" /> は、ループが「結び目の周りを何周回るか（絡み目数）」に対応している。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.4-2 (トレフォイル結び目の結び目群)"
            >
                <p>
                    最も単純な非自明な結び目である「三葉結び目（trefoil knot）」を考える。
                </p>
                <p>
                    この結び目補空間は、ファン・カンペンの定理の応用（ヴィルティンガーの表示などと呼ばれる手法）によって計算することができ、その結果は
                    <BlockMath math="\pi_1(S^3 \setminus \mathrm{trefoil}) = \langle a, b \mid a^2 = b^3 \rangle" />
                    となる。これは §4.1 で紹介した <InlineMath math="\mathbb{Z} *_{\mathbb{Z}} \mathbb{Z}" /> という融合積に他ならない。
                </p>
                <p>
                    この群は非可換群であり、自明な結び目群 <InlineMath math="\mathbb{Z}" /> とは明らかに同型ではない。このことから、「三葉結び目は決して自明な結び目に変形できない（結び目は解けない）」ことが数学的に厳密に証明されたことになる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">限界と展望</h2>

            <p className="leading-relaxed">
                結び目群は非常に強力な不変量ですが、万能ではありません。
            </p>

            <ContentBox
                type="remark"
                title="結び目群の限界と新たな不変量"
            >
                <p>
                    結び目群だけで結び目を完全に分類することはできません。例えば、三葉結び目（右手系）と、それを鏡に映した三葉結び目（左手系）は、互いに連続変形できない（キラルである）にもかかわらず、その補空間は同相であり、結び目群は完全に同型になってしまいます。基本群は「向き」の情報を捉えきれないのです。
                </p>
                <p>
                    これらを区別するためには、ジョーンズ多項式（Jones polynomial）などの結び目多項式や、より高度なホモロジー的位相不変量（結び目ホモロジー）が必要になります。こうした研究は「低次元位相幾何学（トピック 5-18）」という現代数学の非常に活発な分野へと繋がっていきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>結び目群とは、結び目の補空間 <InlineMath math="S^3 \setminus K" /> の基本群のことである。</li>
                    <li>自明な結び目の結び目群は <InlineMath math="\mathbb{Z}" /> である。三葉結び目の結び目群は <InlineMath math="\langle a, b \mid a^2 = b^3 \rangle" /> となり、結び目が解けないことが基本群から証明される。</li>
                    <li>結び目群は鏡像を区別できないなどの限界があり、より高度な不変量の探求へと発展していく。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
