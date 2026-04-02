import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionSpheresAndDimensions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章では、前章で学んだファン・カンペンの定理と CW 複体の構成を用いて、球面やトーラスなど、より複雑な曲面や空間の基本群を計算していきます。まずは、各次元の球面における基本群の振る舞いから見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">高次元球面の単連結性</h2>

            <p className="leading-relaxed">
                円周 <InlineMath math="S^1" /> の基本群が <InlineMath math="\mathbb{Z}" /> であることは既に学びましたが、次元が 1 つ上がるだけで基本群の様子は大きく変化します。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 5.1-1 (<InlineMath math="S^n" /> は単連結)</span>}
            >
                <p>
                    <InlineMath math="n \geq 2" /> のとき、<InlineMath math="n" /> 次元球面 <InlineMath math="S^n" /> は単連結である。すなわち、
                    <BlockMath math="\pi_1(S^n) = \{e\}" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    ファン・カンペンの定理を用いて帰納的に証明する。<InlineMath math="S^n" /> を次のように 2 つの開集合 <InlineMath math="U, V" /> に分割する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="U = S^n \setminus \{N\}" /> （北極 <InlineMath math="N" /> を除いた球面）</li>
                    <li><InlineMath math="V = S^n \setminus \{S\}" /> （南極 <InlineMath math="S" /> を除いた球面）</li>
                </ul>
                <p>
                    ステレオ投影により、<InlineMath math="U" /> も <InlineMath math="V" /> も <InlineMath math="n" /> 次元ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> と同相である。したがって <InlineMath math="U \simeq V \simeq \{e\}" />（可縮）であり、<InlineMath math="\pi_1(U) = \pi_1(V) = \{e\}" /> となる。
                </p>
                <p>
                    共通部分 <InlineMath math="U \cap V = S^n \setminus \{N, S\}" /> は、「北極と南極を除いた球面（赤道帯）」であり、これは <InlineMath math="S^{n-1} \times \mathbb{R}" /> と同相である。したがって <InlineMath math="U \cap V" /> は <InlineMath math="S^{n-1}" /> とホモトピー同値になる。
                </p>
                <p>
                    ここで <InlineMath math="n \geq 2" /> であるため、<InlineMath math="n-1 \geq 1" /> となり、<InlineMath math="S^{n-1}" /> は弧状連結である。ゆえに <InlineMath math="U, V, U \cap V" /> はすべて弧状連結となり、ファン・カンペンの定理が適用できる。
                </p>
                <p>
                    <InlineMath math="\pi_1(S^n)" /> は <InlineMath math="\pi_1(U)" /> と <InlineMath math="\pi_1(V)" /> の <InlineMath math="\pi_1(U \cap V)" /> 上の融合積となるが、両者とも自明群 <InlineMath math="\{e\}" /> であるため、その融合積も自明群となる。
                    <BlockMath math="\pi_1(S^n) \cong \{e\} *_{\pi_1(S^{n-1})} \{e\} = \{e\}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.1-1 (<InlineMath math="\pi_1(S^2) = \{e\}" /> の直感的意味)</span>}
            >
                <p>
                    <InlineMath math="S^2" /> 上の任意のループ（輪ゴム）を考える。球面の表面に置かれた輪ゴムは、球面上を滑らせながら変形していくことで、どこかに引っかかることなく必ず一点に縮めることができる。
                </p>
                <p>
                    対照的に、円周 <InlineMath math="S^1" /> やトーラス <InlineMath math="T^2" />、あるいは穴の空いた平面 <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> 上では、ループが「穴」を囲んでしまうと、それを一点に縮めることができない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">次元による違いとより高次の不変量</h2>

            <p className="leading-relaxed">
                「穴があるかどうか」という概念は、次元によって捉え方が異なります。
            </p>

            <ContentBox
                type="remark"
                title={<span><InlineMath math="S^1" /> と <InlineMath math="S^n" />（<InlineMath math="n \geq 2" />）の違い</span>}
            >
                <p>
                    基本群 <InlineMath math="\pi_1" /> は「1 次元のループ（ひも）」が一点に縮められるかどうかを判定する道具です。<InlineMath math="S^1" /> は空間自体が 1 次元の穴（空洞）を形作っているため、基本群によってその穴を検知でき（<InlineMath math="\pi_1(S^1) = \mathbb{Z}" />）、<InlineMath math="S^n" />（<InlineMath math="n \geq 2" />）ではループが穴を避けて通れるため検知できません（<InlineMath math="\pi_1 = \{e\}" />）。
                </p>
                <p>
                    しかし、<InlineMath math="S^2" /> には直感的に「内部の空洞（2 次元の穴）」があるように感じられます。これを数学的に捉えるためには、1 次元のループ（<InlineMath math="S^1" />）の代わりに、<InlineMath math="n" /> 次元の球面 <InlineMath math="S^n" /> を使って空間を調べる「<InlineMath math="n" /> 次元ホモトピー群 <InlineMath math="\pi_n(X)" />」というより高度な不変量が必要になります（代数的トポロジー、トピック 4-8 で学習します）。実際、<InlineMath math="\pi_2(S^2) \cong \mathbb{Z}" /> となり、2 次元の穴を正しく検出できます。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 5.1-2 (<InlineMath math="\mathbb{R}^3 \setminus \{0\}" /> の基本群)</span>}
            >
                <p>
                    3 次元空間から原点 1 つを抜いた空間 <InlineMath math="\mathbb{R}^3 \setminus \{0\}" /> を考える。
                    この空間は、原点を中心とする球面 <InlineMath math="S^2" /> に（放射状に縮めることで）ホモトピー同値である。
                    <BlockMath math="\mathbb{R}^3 \setminus \{0\} \simeq S^2" />
                </p>
                <p>
                    したがって、その基本群は <InlineMath math="\pi_1(\mathbb{R}^3 \setminus \{0\}) = \pi_1(S^2) = \{e\}" /> となる。
                    2 次元空間で原点を抜いた <InlineMath math="\mathbb{R}^2 \setminus \{0\} \simeq S^1" /> の基本群が <InlineMath math="\mathbb{Z}" /> であったことと対照的である。3 次元空間では、点（0 次元の障害物）があっても、1 次元のループはそれを迂回して一点に縮めることができるのである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="n \geq 2" /> のとき、球面 <InlineMath math="S^n" /> は単連結である（<InlineMath math="\pi_1(S^n) = \{e\}" />）。</li>
                    <li>この事実は、<InlineMath math="S^n" /> を 2 つの可縮な開集合（半球より少し大きいもの）に分け、ファン・カンペンの定理を適用することで証明される。</li>
                    <li>基本群は 1 次元の穴しか検知できないため、<InlineMath math="S^2" /> 以上の球面の位相的性質を完全に分類するには、より高次の位相不変量が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
