import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchySequencesAndCompletion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                デデキント切断による実数の構成法とは全く異なるアプローチで、カントール（Georg Cantor）やメーレー（Charles Méray）によってほぼ同時期に定式化されたのが、<strong>「コーシー列の同値類」</strong>による実数の構成法です。<br />
                このアプローチは、「行き先のないコーシー列」に対して「その列自体を新しい数（行き先）とみなしてしまおう」という思想に基づいています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理数のコーシー列</h2>

            <p>
                数列が「ある一点（極限値）に収束する」ことを定義するには、収束先の数が存在しなければなりませんが、コーシー列の定義は収束先を使わずに、数列の項同士の関係だけで完結します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (有理数列のコーシー列)">
                <p>
                    有理数の数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> が<strong>コーシー列（Cauchy sequence）</strong>であるとは、任意の有理数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、<InlineMath math="m, n \ge N" /> となるすべての <InlineMath math="m, n" /> について次が成り立つことである：
                </p>
                <BlockMath math="|a_m - a_n| < \varepsilon" />
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1">
                <p>
                    有理数列 <InlineMath math="\{a_n\} = \{1/n\}" /> は、
                </p>
                <BlockMath math="|a_m - a_n| = |1/m - 1/n| \le 1/m + 1/n" />
                <p>
                    であり、十分大きな <InlineMath math="m, n" /> に対してこの値は任意に小さくできるため、コーシー列である。
                </p>
                <p className="mt-4">
                    一方、<InlineMath math="\sqrt{2}" /> の小数展開による数列 <InlineMath math="\{1, 1.4, 1.41, 1.414, \dots\}" /> もコーシー列であるが、有理数の世界 <InlineMath math="\mathbb{Q}" /> にはその収束先が存在しない。
                </p>
            </ContentBox>

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

            <ContentBox type="example" title="Example 1.3-2">
                <p>
                    数列 <InlineMath math="a_n = 0" />（すべて <InlineMath math="0" />）と数列 <InlineMath math="b_n = 1/n" /> は、<InlineMath math="\lim_{n \to \infty} (a_n - b_n) = \lim_{n \to \infty} (0 - 1/n) = 0" /> となるため、同値である。この2つは実数としての「<InlineMath math="0" />」に対応する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値類による実数体の定義（完備化）</h2>

            <p>
                同値関係 <InlineMath math="\sim" /> を導入することで、無数にあるコーシー列たちを「差が <InlineMath math="0" /> になるグループ」ごとに束ねて「同値類」を作ることができます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-3 (同値類による実数の定義)">
                <p>
                    有理コーシー列 <InlineMath math="\{a_n\}" /> 全体の集合を <InlineMath math="C" /> とし、同値関係 <InlineMath math="\sim" /> による商集合 <InlineMath math="C / \sim" /> を、<strong>実数全体の集合 <InlineMath math="\mathbb{R}" /></strong> と定義する。
                </p>
                <BlockMath math="\mathbb{R} = C / \sim" />
                <p className="mt-2">
                    コーシー列 <InlineMath math="\{a_n\}" /> が属する同値類（実数）を <InlineMath math="[\{a_n\}]" /> と書く。
                    特に、すべての <InlineMath math="n" /> で <InlineMath math="a_n = q" /> （定数 <InlineMath math="q \in \mathbb{Q}" />）であるような定数数列の同値類 <InlineMath math="[\{q\}]" /> は、有理数 <InlineMath math="q" /> 自身と同一視する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-3">
                <p>
                    実数 <InlineMath math="\sqrt{2}" /> は、<InlineMath math="\mathbb{Q}" /> 内の極限を持たないが、<InlineMath math="\sqrt{2}" /> に（形式的に）収束するあらゆる有理コーシー列の同値類として厳密に定義される。
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

            {/* Summary Box */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有理コーシー列とは、項同士が互いに近づいていく数列である (Definition 1.3-1)。</li>
                    <li>同じ極限を持つ可能性のある数列同士に同値関係を定義する (Definition 1.3-2)。</li>
                    <li>コーシー列の同値類を一つの「実数」として定義することで、実数全体を構成する (Definition 1.3-3)。</li>
                    <li>この手法は一般の距離空間の「完備化」へと応用される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
