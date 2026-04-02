import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LagrangesTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                有限群の位数がその部分群の位数によってどのように制約を受けるかを解き明かす、群論の最も基本的かつ強力な定理「ラグランジュの定理」を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュの定理</h2>

            <p className="leading-relaxed">
                有限群の部分群の位数は、必ず元の群の位数の約数になります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (ラグランジュの定理)">
                <p>
                    有限群 <InlineMath math="G" /> とその部分群 <InlineMath math="H \leq G" /> に対し、以下が成り立つ：
                    <BlockMath math="|G| = |H| \cdot [G : H]" />
                    特に、部分群の位数 <InlineMath math="|H|" /> は全体の位数 <InlineMath math="|G|" /> を割り切る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Proposition 3.1-1 より、<InlineMath math="G" /> は相異なる左剰余類の非交和として表される：
                    <BlockMath math="G = a_1 H \sqcup a_2 H \sqcup \dots \sqcup a_k H" />
                    ここで、すべての左剰余類の元の個数が <InlineMath math="|H|" /> に等しいことを示す：
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        各左剰余類 <InlineMath math="a_i H" /> について、写像 <InlineMath math="f: H \to a_i H" /> を <InlineMath math="f(h) = a_i h" /> で定める。
                    </li>
                    <li>
                        この写像 <InlineMath math="f" /> は全単射である。実際、逆写像は <InlineMath math="f^{-1}(y) = a_i^{-1} y" /> によって与えられる。
                    </li>
                    <li>
                        したがって、どの剰余類も集合として同じ大きさ（元の個数）を持ち、その値は <InlineMath math="|H|" /> である。
                    </li>
                </ul>
                <p className="mt-4">
                    以上より、全体の元の個数 <InlineMath math="|G|" /> は、個々の剰余類の大きさ <InlineMath math="|H|" /> とその個数 <InlineMath math="k" /> の積に等しい。
                    <BlockMath math="|G| = |H| \times k" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.2-1 (指数)">
                <p>
                    剰余類の個数 <InlineMath math="k = |G|/|H|" /> を、<InlineMath math="H" /> の <InlineMath math="G" /> における<b>指数 (Index)</b>と呼び、<InlineMath math="[G : H]" /> と記す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ラグランジュの定理は、群の元そのものの性質にも強い制約を与えます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-2 (元の位数は群の位数を割り切る)">
                <p>
                    有限群 <InlineMath math="G" /> の任意の元 <InlineMath math="a" /> について、その位数 <InlineMath math="\text{ord}(a)" /> は群の位数 <InlineMath math="|G|" /> を割り切る。
                    特に、次の関係が成り立つ：
                    <BlockMath math="a^{|G|} = e" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ラグランジュの定理（Theorem 3.2-1）を、元 <InlineMath math="a" /> が生成する部分群に適用する：
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <InlineMath math="H = \langle a \rangle" /> は <InlineMath math="G" /> の部分群である。
                        Proposition 2.3-2 より、この部分群の位数は元の位数に等しい（<InlineMath math="|H| = \text{ord}(a)" />）。
                    </li>
                    <li>
                        ラグランジュの定理より部分群の位数は全体の位数を割り切るため、<InlineMath math="\text{ord}(a) \mid |G|" /> が導かれる。
                    </li>
                    <li>
                        <InlineMath math="|G| = \text{ord}(a) \cdot m" /> とおくと、位数の定義より <InlineMath math="a^{|G|} = (a^{\text{ord}(a)})^m = e^m = e" /> となり、2 つ目の主張も示される。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュの定理の計算例</h2>

            <p className="leading-relaxed">
                具体的な群でこれらの関係式を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (S_3 の部分群の位数)">
                <p>
                    位数 6 の対称群 <InlineMath math="S_3" /> の部分群を考えると：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>自明な部分群：位数 1</li>
                    <li>互換で生成される部分群：位数 2</li>
                    <li>3次巡回置換で生成される部分群：位数 3</li>
                    <li><InlineMath math="S_3" /> 自身：位数 6</li>
                </ul>
                <p className="mt-2 text-sm italic">
                    ※すべて 6 の約数（1, 2, 3, 6）になっていることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2 (|G| = 35 の群の元の位数)">
                <p>
                    位数が 35 である群 <InlineMath math="G" /> を考える。
                    この群の任意の元 <InlineMath math="a \in G" /> の位数の可能性は、35 の約数である <InlineMath math="1, 5, 7, 35" /> のいずれかしかない。
                    したがって、単位元以外のどの元をとっても、その位数は 5 か 7 か 35 のどれかになる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限群の位数は、部分群の位数と指数（剰余類の個数）の積に等しい。</li>
                    <li>部分群の位数や元の位数は、必ず全体の位数の約数となる。</li>
                    <li>有限群の任意の元 <InlineMath math="a" /> について <InlineMath math="a^{|G|} = e" /> が常に成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
