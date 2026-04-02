import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionVanKampenTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                複雑な空間の基本群を計算するためには、空間をより単純な部分空間に分割し、それぞれの基本群の情報を「貼り合わせる」というアプローチが極めて有効です。これを実現するのが「ファン・カンペンの定理（Seifert–van Kampen theorem）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張</h2>

            <p className="leading-relaxed">
                位相空間 <InlineMath math="X" /> が2つの開集合 <InlineMath math="U, V" /> の和集合として書かれている状況（開被覆）を考えます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.2-1 (ファン・カンペンの定理)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> が2つの開集合の和として <InlineMath math="X = U \cup V" /> と表されるとする。
                </p>
                <p>
                    <InlineMath math="U, V" /> およびその共通部分 <InlineMath math="U \cap V" /> がすべて弧状連結であり、基点 <InlineMath math="x_0 \in U \cap V" /> をとる。このとき、<InlineMath math="X" /> の基本群は、<InlineMath math="U" /> と <InlineMath math="V" /> の基本群の <InlineMath math="U \cap V" /> 上の<strong>融合積（アマルガム積）</strong>と同型になる。
                    <BlockMath math="\pi_1(X, x_0) \cong \pi_1(U, x_0) *_{\pi_1(U \cap V, x_0)} \pi_1(V, x_0)" />
                </p>
                <p>
                    具体的には、包含写像が誘導する準同型 <InlineMath math="i_U : \pi_1(U \cap V) \to \pi_1(U)" /> と <InlineMath math="i_V : \pi_1(U \cap V) \to \pi_1(V)" /> によって、共通部分から来るループを同一視した関係が群の中に生じる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    完全な証明は長いが、本質的なアイデアは「全射性」と「単射性」の2つのステップからなる。
                </p>
                <p>
                    <strong>ステップ1（全射性のアイデア）：</strong><br />
                    <InlineMath math="X" /> 上の任意のループ <InlineMath math="\gamma" /> を考える。<InlineMath math="U" /> と <InlineMath math="V" /> は開被覆であるから、ルベーグ数の補題により、パラメータ区間 <InlineMath math="[0,1]" /> を細かく分割することで、<InlineMath math="\gamma" /> を「完全に <InlineMath math="U" /> に含まれる小さな道」と「完全に <InlineMath math="V" /> に含まれる小さな道」の結合に分解できる。各分割点は <InlineMath math="U" /> と <InlineMath math="V" /> の境界をまたぐため <InlineMath math="U \cap V" /> に入る。<InlineMath math="U \cap V" /> が弧状連結であるため、各分割点から基点 <InlineMath math="x_0" /> へ結ぶ道を挿入することで、<InlineMath math="\gamma" /> は「<InlineMath math="U" /> 内のループ」と「<InlineMath math="V" /> 内のループ」の積（すなわち自由積の元）とホモトピックになる。これにより全射性が示される。
                </p>
                <p>
                    <strong>ステップ2（単射性のアイデア）：</strong><br />
                    自由積の元が <InlineMath math="X" /> において定値ループにホモトピック（すなわち単位元に潰れる）であるとする。そのホモトピー（正方形 <InlineMath math="[0,1]\times[0,1]" /> から <InlineMath math="X" /> への写像）も同様に小さな小正方形に分割でき、各小正方形は <InlineMath math="U" /> か <InlineMath math="V" /> に含まれる。この格子上のホモトピーの変形を追跡すると、最終的に <InlineMath math="\pi_1(U)" /> と <InlineMath math="\pi_1(V)" /> の間での関係は、共通部分 <InlineMath math="U \cap V" /> に含まれるループを経由した関係（すなわち融合積の定義関係式 <InlineMath math="i_U(\alpha) = i_V(\alpha)" />）に他ならないことが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">定理の適用例</h2>

            <p className="leading-relaxed">
                定理の威力を見るために、いくつかの基本的な空間の基本群を計算してみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 4.2-1 (<InlineMath math="S^2" /> の単連結性)</span>}
            >
                <p>
                    2次元球面 <InlineMath math="S^2" /> を、北極 <InlineMath math="N" /> を除いた開集合 <InlineMath math="U = S^2 \setminus \{N\}" /> と、南極 <InlineMath math="S" /> を除いた開集合 <InlineMath math="V = S^2 \setminus \{S\}" /> で被覆する。
                </p>
                <p>
                    ステレオ投影を考えれば、<InlineMath math="U" /> も <InlineMath math="V" /> も平面 <InlineMath math="\mathbb{R}^2" /> と同相であり、したがって可縮である。ゆえに <InlineMath math="\pi_1(U) = \{e\}" /> かつ <InlineMath math="\pi_1(V) = \{e\}" /> である。
                </p>
                <p>
                    共通部分 <InlineMath math="U \cap V = S^2 \setminus \{N, S\}" /> は赤道を含む帯（円柱）に同相であり、<InlineMath math="S^1" /> とホモトピー同値である。したがって弧状連結であり、ファン・カンペンの定理が適用できる。
                </p>
                <p>
                    <InlineMath math="\pi_1(U)" /> と <InlineMath math="\pi_1(V)" /> がともに自明群であるため、それらの融合積も当然自明群になる（<InlineMath math="\{e\} *_{\pi_1(U\cap V)} \{e\} = \{e\}" />）。
                    したがって、<InlineMath math="\pi_1(S^2) = \{e\}" /> であり、<InlineMath math="S^2" /> は単連結であることが証明された。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.2-2 (円周 <InlineMath math="S^1" /> の再計算)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> の基本群を同様に分割して計算しようとすると注意が必要である。
                </p>
                <p>
                    <InlineMath math="U = S^1 \setminus \{-1\}" />、<InlineMath math="V = S^1 \setminus \{1\}" /> とすると、これらはともに可縮（開区間に同相）である。
                    しかし、共通部分 <InlineMath math="U \cap V" /> は上半円と下半円の<strong>2つの連結成分</strong>に分かれてしまい、「<InlineMath math="U \cap V" /> が弧状連結である」というファン・カンペンの定理の条件を満たさない。（もし定理を誤用すると、<InlineMath math="\{e\} * \{e\} = \{e\}" /> となり、<InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" /> に矛盾してしまう）。
                </p>
                <p>
                    ファン・カンペンの定理を用いて <InlineMath math="S^1" /> の基本群を求める場合、空間を例えば1つの点とそれに貼り付けられた区間として捉えるか、あるいは一般化された「亜群（groupoid）版のファン・カンペンの定理」を用いる必要がある。（結果として <InlineMath math="\mathbb{Z}" /> が正しく導かれる。）
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="共通部分が単連結の場合"
            >
                <p>
                    もし分割の共通部分 <InlineMath math="U \cap V" /> が単連結（<InlineMath math="\pi_1(U \cap V) = \{e\}" />）であれば、包含写像の像は自明になるため、同一視の条件がなくなり、融合積は純粋な<strong>自由積</strong> <InlineMath math="\pi_1(U) * \pi_1(V)" /> となります。
                    代表的な例として、2つの円周を1点で貼り合わせた「8の字空間（<InlineMath math="S^1 \vee S^1" />）」があり、その基本群は <InlineMath math="\mathbb{Z} * \mathbb{Z}" />（生成元が2つの自由群）となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ファン・カンペンの定理は、空間 <InlineMath math="X" /> を開集合 <InlineMath math="U, V" /> に分割したとき、<InlineMath math="X" /> の基本群を <InlineMath math="U" /> と <InlineMath math="V" /> の基本群の融合積として計算できる定理である。</li>
                    <li>適用するための重要な条件は、<InlineMath math="U, V" /> および共通部分 <InlineMath math="U \cap V" /> がすべて弧状連結であることである。</li>
                    <li>この定理を用いることで、<InlineMath math="S^2" /> のような高次元球面が単連結（基本群が自明）であることが容易に示される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
