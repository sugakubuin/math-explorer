import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ResidueClassesAndRingStructure() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                合同式の概念を一歩進めると、整数全体を「余り」ごとにグループ分けして扱うことができます。
                このグループ（集合）そのものを一つの「数」のように見なして演算を定義するのが、代数学における<strong>環 (Ring)</strong> の考え方です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">剰余類の定義</h2>

            <p>
                ある数と合同なすべての整数の集まりを「剰余類」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (剰余類)">
                <p>
                    整数 <InlineMath math="a" /> と法 <InlineMath math="m" /> に対し、 <InlineMath math="a" /> と mod <InlineMath math="m" /> で合同な整数全体の集合を、 <InlineMath math="a" /> の<strong>剰余類 (residue class)</strong> といい、 <InlineMath math="\overline{a}" /> や <InlineMath math="[a]" /> と表す。
                    <BlockMath math="\overline{a} = \{a + km \mid k \in \mathbb{Z}\}" />
                    法 <InlineMath math="m" /> において、整数全体は <InlineMath math="m" /> 個の剰余類 <InlineMath math="\overline{0}, \overline{1}, \dots, \overline{m-1}" /> に重複なく分割される。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 4.2-2 (剰余環)">
                <p>
                    法 <InlineMath math="m" /> の剰余類全体の集合を <InlineMath math="\mathbb{Z}/m\mathbb{Z}" /> と書き、ここに次の演算を定義したものを<strong>剰余環 (residue class ring)</strong> と呼ぶ。
                    <BlockMath math="\begin{aligned} \overline{a} + \overline{b} &= \overline{a+b} \\ \overline{a} \cdot \overline{b} &= \overline{ab} \end{aligned}" />
                    これらの演算は、代表元 <InlineMath math="a, b" /> の選び方によらず一意に定まる（well-defined である）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">演算の具体例</h2>

            <p>
                小さな法について、剰余環の振る舞いを表（ケリー表）で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (Z/5Z の演算)">
                <p>
                    <InlineMath math="\mathbb{Z}/5\mathbb{Z}" /> における乗法の一部を見ると、
                    <br />・ <InlineMath math="\overline{3} \times \overline{4} = \overline{12} = \overline{2}" />
                    <br />・ <InlineMath math="\overline{2} \times \overline{3} = \overline{6} = \overline{1}" />
                    のように、通常の計算をしてから 5 で割った余りを取ることに相当します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">零因子の存在</h2>

            <p>
                剰余環には、通常の数体系にはない不思議な性質が現れることがあります。その一つが「零因子」です。
            </p>

            <ContentBox type="definition" title="Definition 4.2-3 (零因子)">
                <p>
                    剰余環において、 <InlineMath math="\overline{a} \neq \overline{0}" /> かつ <InlineMath math="\overline{b} \neq \overline{0}" /> であるにもかかわらず、
                    <BlockMath math="\overline{a} \cdot \overline{b} = \overline{0}" />
                    となる組が存在するとき、 <InlineMath math="\overline{a}, \overline{b}" /> を<strong>零因子 (zero divisor)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (Z/6Z における零因子)">
                <p>
                    <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> において、
                    <BlockMath math="\overline{2} \cdot \overline{3} = \overline{6} = \overline{0}" />
                    が成り立つ。 <InlineMath math="\overline{2}" /> も <InlineMath math="\overline{3}" /> も 0 ではないが、積が 0 になる。
                    これは法 6 が素数ではなく合成数（ <InlineMath math="6 = 2 \times 3" /> ）であることに起因しています。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 4.2-1 (剰余環が整域となる条件)">
                <p>
                    剰余環 <InlineMath math="\mathbb{Z}/m\mathbb{Z}" /> が整域である（零因子を持たない）ための必要十分条件は、法 <InlineMath math="m" /> が素数であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 十分性（m が素数のとき）：</strong>
                    <InlineMath math="m" /> を素数 <InlineMath math="p" /> とし、 <InlineMath math="\overline{a} \cdot \overline{b} = \overline{0}" /> と仮定する。
                    これは <InlineMath math="p \mid ab" /> を意味する。 §3.1 の Theorem 3.1-1 （素数の積への割り切り性）より、 <InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> が成り立つ。
                    すなわち <InlineMath math="\overline{a} = \overline{0}" /> または <InlineMath math="\overline{b} = \overline{0}" /> であるから、零因子は存在しない。
                </p>
                <p>
                    <strong>2. 必要性（m が合成数のとき）：</strong>
                    <InlineMath math="m" /> を合成数とし、 <InlineMath math="m = ab" /> （ <InlineMath math="1 < a, b < m" /> ）と分解する。
                    このとき、 <InlineMath math="\overline{a} \neq \overline{0}" /> かつ <InlineMath math="\overline{b} \neq \overline{0}" /> であるが、
                    <BlockMath math="\overline{a} \cdot \overline{b} = \overline{ab} = \overline{m} = \overline{0}" />
                    となり、 <InlineMath math="\overline{a}, \overline{b}" /> は零因子である。よって整域ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>剰余類</strong>： 余りが同じ整数のグループ。法 <InlineMath math="m" /> に対して <InlineMath math="m" /> 個存在する。</li>
                    <li><strong>剰余環</strong>： 剰余類の集合に加法と乗法を導入したもの。</li>
                    <li><strong>非直感的な積</strong>： 合成数を法とする場合、0 以外のものどうしを掛けて 0 になる「零因子」が現れることがある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
