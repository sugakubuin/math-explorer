import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TopologicalManifolds() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多様体（Manifold）とは、局所的には私たちがよく知っているユークリッド空間 <InlineMath math="\mathbb{R}^n" /> と同じ構造を持ちながら、大域的には曲がっていたり、複雑なトポロジーを持っていたりする空間のことです。
                この章では、まず位相空間として多様体を定義し、その上に微分積分を展開するための「滑らかな構造」を導入していきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位相多様体の定義</h2>

            <p>
                空間が局所的に <InlineMath math="\mathbb{R}^n" /> に似ているという直感的なアイデアを、位相空間論の言葉を用いて厳密に定式化します。
                単に「局所的に <InlineMath math="\mathbb{R}^n" /> と同相」というだけでなく、解析学を展開する上で不可欠な2つの位相的性質（ハウスドルフ性と第二可算性）を要求するのが標準的です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (位相多様体)">
                <p>
                    位相空間 <InlineMath math="M" /> が <b><InlineMath math="n" /> 次元位相多様体（topological manifold of dimension <InlineMath math="n" />）</b> であるとは、次の3つの条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>
                        <strong>ハウスドルフ性（Hausdorff property）：</strong> <InlineMath math="M" /> の任意の異なる2点 <InlineMath math="p, q" /> に対して、互いに交わらない開近傍 <InlineMath math="U, V" /> が存在する（<InlineMath math="p \in U, q \in V, U \cap V = \emptyset" />）。
                    </li>
                    <li>
                        <strong>第二可算性（Second countability）：</strong> <InlineMath math="M" /> の位相は可算な開基（countable basis）を持つ。
                    </li>
                    <li>
                        <strong>局所ユークリッド性（Locally Euclidean property）：</strong> <InlineMath math="M" /> の各点 <InlineMath math="p" /> は、<InlineMath math="\mathbb{R}^n" /> のある開集合と同相な開近傍を持つ。
                    </li>
                </ol>
                <p className="mt-2">
                    この整数 <InlineMath math="n" /> を位相多様体 <InlineMath math="M" /> の<strong>次元（dimension）</strong>という。
                </p>
            </ContentBox>

            <p>
                最も基本的で自明な位相多様体の例は、ユークリッド空間そのものです。
            </p>

            <ContentBox type="example" title="Example 1.1-1">
                <p>
                    ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> 自身は、<InlineMath math="n" /> 次元位相多様体である。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>ハウスドルフ性：</strong> <InlineMath math="\mathbb{R}^n" /> は距離空間であるため、異なる2点間の距離の半分を半径とする開球をとれば、交わらない開近傍となる。</li>
                    <li><strong>第二可算性：</strong> 有理数座標を中心とし、有理数を半径とする開球の全体は可算集合であり、<InlineMath math="\mathbb{R}^n" /> の開基をなす。</li>
                    <li><strong>局所ユークリッド性：</strong> <InlineMath math="\mathbb{R}^n" /> 自身が <InlineMath math="\mathbb{R}^n" /> の開集合であり、恒等写像により同相である。</li>
                </ul>
            </ContentBox>

            <p>
                また、位相多様体の開部分集合も自然に位相多様体となります。
            </p>

            <ContentBox type="example" title="Example 1.1-2">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の任意の開部分集合 <InlineMath math="U" /> は、部分空間としての相対位相（誘導位相）により <InlineMath math="n" /> 次元位相多様体となる。
                </p>
                <p className="mt-2">
                    ハウスドルフ性と第二可算性は部分空間に遺伝する性質（hereditary property）であるため、<InlineMath math="\mathbb{R}^n" /> から自動的に引き継がれる。
                    また、<InlineMath math="U" /> の任意の点 <InlineMath math="p" /> に対して、<InlineMath math="U" /> 自身が <InlineMath math="\mathbb{R}^n" /> の開集合であるため、包含写像により局所ユークリッド性も満たされる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各条件の必要性</h2>

            <p>
                なぜ「局所ユークリッド性」だけでなく、わざわざ「ハウスドルフ性」と「第二可算性」を要求するのでしょうか。
                これらの条件を外すと、解析学を展開する上で非常に都合の悪い「病的な空間」が多様体として認められてしまうからです。
            </p>

            <ContentBox type="example" title="Example 1.1-3 (ハウスドルフ性の反例)">
                <p>
                    <strong>2つの原点をもつ直線（Line with two origins）</strong>
                </p>
                <p className="mt-2">
                    2つの実数直線 <InlineMath math="\mathbb{R} \times \{0\}" /> と <InlineMath math="\mathbb{R} \times \{1\}" /> を考え、<InlineMath math="x \neq 0" /> のとき <InlineMath math="(x, 0)" /> と <InlineMath math="(x, 1)" /> を同一視した商空間 <InlineMath math="X" /> を考える。
                    この空間 <InlineMath math="X" /> は、原点以外は通常の直線と同じだが、原点だけが「2つ」に分岐しているような空間である。
                </p>
                <p className="mt-2">
                    この空間は局所ユークリッド性（各点は <InlineMath math="\mathbb{R}" /> の開区間と同相な近傍をもつ）と第二可算性を満たす。
                    しかし、2つの原点 <InlineMath math="0_A = [(0,0)]" /> と <InlineMath math="0_B = [(0,1)]" /> は互いに素な開近傍を持たないため、<strong>ハウスドルフ空間ではない</strong>。
                </p>
                <p className="mt-2">
                    ハウスドルフ性が成り立たないと、数列の極限が一意に定まらなくなる（この空間では、<InlineMath math="1/n \to 0_A" /> かつ <InlineMath math="1/n \to 0_B" /> となる）ため、微分積分を考える上で致命的である。
                </p>
            </ContentBox>

            <p>
                次に、第二可算性を外した場合の反例を見ます。
            </p>

            <ContentBox type="example" title="Example 1.1-4 (第二可算性の反例)">
                <p>
                    <strong>非可算離散空間（Uncountable discrete space）</strong>
                </p>
                <p className="mt-2">
                    非可算集合 <InlineMath math="X" /> に離散位相（すべての部分集合が開集合となる位相）を入れた空間を考える。
                </p>
                <p className="mt-2">
                    各点 <InlineMath math="p \in X" /> の開近傍として <InlineMath math="\{p\}" /> をとると、これは <InlineMath math="\mathbb{R}^0" />（1点からなる空間）と同相であるため、局所ユークリッド性（次元 <InlineMath math="n=0" />）を満たす。また、離散空間はハウスドルフ空間である。
                </p>
                <p className="mt-2">
                    しかし、開基の濃度は少なくとも <InlineMath math="X" /> の濃度（非可算）以上になるため、<strong>第二可算性を満たさない</strong>。
                </p>
            </ContentBox>

            <p>
                第二可算性は、多様体が「大きすぎない」ことを保証する条件です。これが満たされないと、後で学ぶ「1の分割」などの大域的な解析手法が使えなくなってしまいます。
            </p>

            <ContentBox type="remark" title="パラコンパクト性と第二可算性">
                <p>
                    3-12 位相空間論II で学ぶように、局所コンパクトなハウスドルフ空間において、第二可算性は「パラコンパクト性（paracompactness）」を導きます。
                </p>
                <p className="mt-2">
                    パラコンパクト性とは、任意の開被覆が局所有限な細分を持つという性質です。多様体において第二可算性を要求する最大の理由は、このパラコンパクト性を確保し、§1.5 で扱う「1の分割（partition of unity）」の存在を保証するためです。1の分割は、局所的な積分や微分形式を大域的に貼り合わせるための最も重要なツールです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>位相多様体は、(1) ハウスドルフ性、(2) 第二可算性、(3) 局所ユークリッド性を満たす位相空間として定義される。</li>
                    <li>局所ユークリッド性により、各点の周りに <InlineMath math="\mathbb{R}^n" /> と同じ座標系を導入できる。</li>
                    <li>ハウスドルフ性は極限の一意性を保証し、第二可算性はパラコンパクト性（1の分割の存在）を保証するために不可欠な条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
