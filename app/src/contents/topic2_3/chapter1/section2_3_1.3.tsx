import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_1_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                デデキント切断による実数の構成法とは全く異なるアプローチで、カントール（Georg Cantor）やメーレー（Charles Méray）によってほぼ同時期に定式化されたのが、<strong>「コーシー列の同値類」</strong>による実数の構成法です。<br />
                このアプローチは、「行き先のないコーシー列」に対して「その列自体を新しい数（行き先）とみなしてしまおう」という非常に現代的で洗練された思想に基づいています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理数のコーシー列</h2>

            <p>
                「行き先（極限値）をまだ持たない」可能性のある有理数列が、それでも「収束しようとして詰まっている」という事実だけを、数列の各項の間の距離だけで記述します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (有理数列のコーシー列)">
                <p>
                    有理数の数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> （各 <InlineMath math="a_n \in \mathbb{Q}" />）が<strong>コーシー列（Cauchy sequence）</strong>、あるいは<strong>基本列</strong>であるとは、任意の有理数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、<InlineMath math="m, n \ge N" /> となるすべての <InlineMath math="m, n" /> について次が成り立つことである：
                </p>
                <BlockMath math="|a_m - a_n| < \varepsilon" />
            </ContentBox>

            <p>
                この段階では <InlineMath math="\varepsilon" /> も「正の有理数」であることに注意してください。「実数」はまだ存在していない世界（<InlineMath math="\mathbb{Q}" /> の世界）だけで議論が完結しています。
            </p>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー列の同値関係</h2>

            <p>
                §1.1 の Remark で見た、<InlineMath math="\sqrt{2}" /> へ向かう（はずの）数列 <InlineMath math="\{a_n\} = \{1, 1.4, 1.41, 1.414, \dots\}" /> は確かにコーシー列です。
                このコーシー列そのものを「新しい数（実数の <InlineMath math="\sqrt{2}" />）」とみなしてしまえば、穴は塞がりそうです。
            </p>
            <p>
                しかし、同じ <InlineMath math="\sqrt{2}" /> に向かうコーシー列は無限に作れます（例えば <InlineMath math="b_n = 1.414 + 1/n" /> という数列など）。これらをすべて「同じ１つの実数」として扱わなければなりません。
                そのために<strong>同値関係</strong>を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (コーシー列の同値関係)">
                <p>
                    2つの有理コーシー列 <InlineMath math="\{a_n\}, \{b_n\}" /> が<strong>同値（equivalent）</strong>である（<InlineMath math="\{a_n\} \sim \{b_n\}" /> と書く）とは、その差の数列が <InlineMath math="0" /> に収束することである。
                    すなわち、任意の正の有理数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、<InlineMath math="n \ge N" /> となるすべての <InlineMath math="n" /> について次が成り立つことである：
                </p>
                <BlockMath math="|a_n - b_n| < \varepsilon \quad (\text{i.e., } \lim_{n \to \infty} (a_n - b_n) = 0)" />
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値類による実数体の定義（完備化）</h2>

            <p>
                同値関係 <InlineMath math="\sim" /> を導入することで、無数にあるコーシー列たちを「差が <InlineMath math="0" /> になるグループ」ごとに束ねて「同値類」を作ることができます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-3 (同値類による実数の定義)">
                <p>
                    有理コーシー列 <InlineMath math="\{a_n\}" /> 全体の集合を <InlineMath math="C" /> とする。同値関係 <InlineMath math="\sim" /> による <InlineMath math="C" /> の商集合 <InlineMath math="C / \sim" /> （すなわち同値類の集合全体）を、<strong>実数全体の集合 <InlineMath math="\mathbb{R}" /></strong> と定義する。
                </p>
                <BlockMath math="\mathbb{R} = C / \sim" />
                <p className="mt-2">
                    コーシー列 <InlineMath math="\{a_n\}" /> が属する同値類（実数）を <InlineMath math="[\{a_n\}]" /> と書く。
                    特に、すべての <InlineMath math="n" /> で <InlineMath math="a_n = q" /> （定数 <InlineMath math="q \in \mathbb{Q}" />）であるような定数数列の同値類 <InlineMath math="[\{q\}]" /> は、有理数 <InlineMath math="q" /> 自身と同一視する。
                </p>
            </ContentBox>

            <p>
                同値関係や商集合については、集合論の講義で詳しく学ぶので、今はなんとなくの理解で大丈夫です。
                このように「商空間（完備化空間）」として作られた実数の集合 <InlineMath math="\mathbb{R}" /> についても、四則演算や順序を自然に定義でき、それが体の公理を満たすことを証明できます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (同値類上の演算と体の公理)">
                <p>
                    2つの実数（同値類）<InlineMath math="x = [\{a_n\}], \ y = [\{b_n\}]" /> に対して、加法と乗法を次のように数列の項ごとの演算として定義する。
                </p>
                <BlockMath math="x + y = [\{a_n + b_n\}], \quad x \cdot y = [\{a_n \cdot b_n\}]" />
                <p className="mt-2">
                    （※これらの演算が、代表元 <InlineMath math="\{a_n\}, \{b_n\}" /> の選び方によらず well-defined である（一つの値に定まる）ことが証明される。）
                </p>
                <p className="mt-2">
                    このように定義された和と積により、集合 <InlineMath math="\mathbb{R}" /> は四則演算に関して<strong>体（体公理）</strong>を満たす。
                    さらに、有理数として既に定義されていた大小関係も拡張され、<InlineMath math="\mathbb{R}" /> は<strong>順序体</strong>をなす。
                </p>
            </ContentBox>

            <p className="mt-4 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 p-4 rounded border-l-4 border-l-blue-500">
                この「コーシー列の同値類による完備化（Completion）」という手法の最大の利点は、デデキント切断が「大小関係（順序）」に強く依存していたのに対し、<strong>「項と項の距離」さえ定義できる空間であれば、どんな空間にも適用できる</strong>という極めて高い汎用性を持つことです。
                これは後に、距離空間論や関数解析学における「バナッハ空間」や「ヒルベルト空間」といった無限次元空間の完備化へとそのまま拡張される、数学上最も重要なアイディアの一つです。
            </p>

        </section>
    );
}
