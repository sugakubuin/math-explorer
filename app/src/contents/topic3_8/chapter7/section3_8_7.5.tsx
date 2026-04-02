import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MatrixGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章の最後に、線形代数学において極めて重要な役割を果たす「行列群」について学習します。
                行列群は、正則な行列全体のなす群や、内積を保存するような行列、あるいは有限体上の行列など、数学のあらゆる分野で利用されます。
                これらは「リー群（Lie group）」と呼ばれる連続的な構造を持つ群の代表的な例でもあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般線形群と直交群</h2>

            <p className="leading-relaxed mb-4">
                すべての行列群の基本となるのが、行列の積に関して「可逆」な行列全体からなる群です。
            </p>

            <ContentBox type="definition" title="Definition 7.5-1 (一般線形群)">
                <p>
                    体 <InlineMath math="K" /> （実数体 <InlineMath math="\mathbb{R}" /> や複素数体 <InlineMath math="\mathbb{C}" /> など）を成分とする <InlineMath math="n" /> 次正方行列で、
                    行列式が 0 でない（正則である）もの全体の集合を <b>一般線形群</b> と呼び、<b><InlineMath math="GL_n(K)" /></b> で表す。
                    <BlockMath math="GL_n(K) = \{ A \in M_n(K) \mid \det A \neq 0 \}" />
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                この一般線形群の部分群のなかでも、幾何学的な「等長性（長さを変えない）」を保つ行列からなる群を <b>直交群</b> と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 7.5-2 (直交群・特殊直交群)">
                <p>
                    実数を成分とする <InlineMath math="n" /> 次の一般線形群 <InlineMath math="GL_n(\mathbb{R})" /> において、以下の部分群を定義する：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><b>直交群</b>：<InlineMath math="O_n(\mathbb{R}) = \{A \in GL_n(\mathbb{R}) \mid AA^T = I\}" /></li>
                    <li><b>特殊直交群</b>：<InlineMath math="SO_n(\mathbb{R}) = \{A \in O_n(\mathbb{R}) \mid \det A = 1\}" /></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                行列式という準同型写像を用いることで、これらの群の関係を明確に記述できます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.5-1 (SO_n の正規性)">
                <p>
                    1. <InlineMath math="SO_n(\mathbb{R})" /> は <InlineMath math="O_n(\mathbb{R})" /> の <b>正規部分群</b> である（<InlineMath math="SO_n \trianglelefteq O_n" />）。
                </p>
                <p className="mt-4">
                    2. <InlineMath math="n \geq 1" /> のとき、指数は2である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="A \in O_n(\mathbb{R})" /> に対して、関係式 <InlineMath math="AA^T = I" /> の行列式をとると
                    <InlineMath math="(\det A)^2 = 1" />、すなわち <InlineMath math="\det A = \pm 1" /> である。
                    行列式写像 <InlineMath math="\det: O_n(\mathbb{R}) \to \{1, -1\}" /> は群準同型であり、
                    <InlineMath math="SO_n(\mathbb{R})" /> はその核 <InlineMath math="\mathrm{ker}(\det)" /> であるため、正規部分群である。
                </p>
                <p className="mt-4">
                    2. 準同型基本定理より、<InlineMath math="O_n(\mathbb{R}) / SO_n(\mathbb{R}) \cong \{1, -1\}" /> である。
                    この像の位数は2であるため、指数は <b><InlineMath math="[O_n : SO_n] = 2" /></b> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                具体的に、2次元の場合の直交群の形を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.5-1 (SO_2 の構造)">
                <p>
                    2次特殊直交群 <InlineMath math="SO_2(\mathbb{R})" /> は、角度 <InlineMath math="\theta" /> の <b>回転行列</b> 全体からなる：
                    <BlockMath math="SO_2(\mathbb{R}) = \left\{ \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \mid \theta \in [0, 2\pi) \right\}" />
                    さらに、<InlineMath math="O_2(\mathbb{R})" /> はこれに「軸に関する反転」に相当する行列式が <InlineMath math="-1" /> の行列（例：<InlineMath math="\mathrm{diag}(1, -1)" />）を組み合わせたものになる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体上の行列群</h2>

            <p className="leading-relaxed mb-4">
                これまで実数や複素数の行列を見てきましたが、係数として「有限体 <InlineMath math="\mathbb{F}_p" />」を考えることで、興味深い有限群が得られます。
            </p>

            <ContentBox type="definition" title="Definition 7.5-3 (有限体上の行列群)">
                <p>
                    素数 <InlineMath math="p" /> に対して、成分が有限体 <InlineMath math="\mathbb{F}_p" /> の元からなる一般線形群を <b><InlineMath math="GL_n(\mathbb{F}_p)" /></b> と書く。
                    これに付随して、行列式が1の行列全体からなる特殊線形群を <b><InlineMath math="SL_n(\mathbb{F}_p)" /></b> と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                一般に、有限体上の行列群の位数は以下の公式で求められます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.5-2 (GL_n(F_p) の位数公式)">
                <p>
                    <InlineMath math="GL_n(\mathbb{F}_p)" /> の位数は、以下の積で与えられる：
                    <BlockMath math="\begin{aligned} |GL_n(\mathbb{F}_p)| &= \prod_{k=0}^{n-1} (p^n - p^k) \\ &= (p^n - 1)(p^n - p) \dots (p^n - p^{n-1}) \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    行列が正則（単位元を持つ）であるための必要十分条件は、その列ベクトル <InlineMath math="\mathbf{v}_1, \dots, \mathbf{v}_n" /> が線形独立であることである。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{v}_1" />：零ベクトル以外の任意のベクトルを選べるため、<InlineMath math="p^n - 1" /> 通り。</li>
                    <li><InlineMath math="\mathbf{v}_2" />：<InlineMath math="\mathbf{v}_1" /> のスカラー倍以外のベクトルを選べるため、<InlineMath math="p^n - p" /> 通り。</li>
                    <li>一般に <InlineMath math="\mathbf{v}_k" />：<InlineMath math="\mathbf{v}_1, \dots, \mathbf{v}_{k-1}" /> が張る部分空間（次元 <InlineMath math="k-1" />、個数 <InlineMath math="p^{k-1}" />）に含まれないベクトルを選ぶため、<InlineMath math="p^n - p^{k-1}" /> 通り。</li>
                </ul>
                <p className="mt-2">
                    これらをすべて掛け合わせることで公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-4">
                最も簡単な例として、<InlineMath math="p=2" /> の場合を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.5-2 (GL_2(F_2) と対称群)">
                <p>
                    <InlineMath math="GL_2(\mathbb{F}_2)" /> の位数を計算してみる。公式に <InlineMath math="n=2, p=2" /> を代入すると
                    <BlockMath math="(2^2 - 1)(2^2 - 2) = 3 \times 2 = 6" />
                    となる。実は、位数6の非可換群は <InlineMath math="S_3" /> と同型であることから、<b><InlineMath math="GL_2(\mathbb{F}_2) \cong S_3" /></b> という美しい対応が成り立つ。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                さらに、この有限体上の行列群の中心で割った商群（射影特殊的線形群 <InlineMath math="PSL_n(\mathbb{F}_p)" />）は、
                多くの場合に「単純群」となることが知られており、有限単純群の分類における中心的な系統（リー型の単純群）を構成しています。
            </p>

            <p className="leading-relaxed my-6">
                以上で、対称群、二面体群、行列群といった主要な群の具体例を一通り見てきました。
                これらの具体例を「道具箱」として持っておくことで、次章以降で学ぶ「群の作用」や「シローの定理」といった抽象的な理論の理解がより容易になるはずです。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>行列群は代数的・幾何学的な構造を豊富に持ち、線形代数学と群論を結びつける。</li>
                    <li>直交群 <b><InlineMath math="O_n" /></b> は内積を保存し、特殊直交群 <b><InlineMath math="SO_n" /></b> はさらに行列式を 1 に保つ部分群である。</li>
                    <li>有限体上の行列群 <b><InlineMath math="GL_n(\mathbb{F}_p)" /></b> は、組み合わせ論的にも興味深い有限群の例を提供し、その商群は単純群の代表的な系統となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
