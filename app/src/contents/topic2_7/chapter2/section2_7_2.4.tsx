import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropertiesOfCoprimeIntegers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                2つの整数が「互いに素」であるという条件は、数論において最も強力な仮定の一つです。
                ベズーの等式を用いることで、この条件がもたらす重要な性質を浮き彫りにすることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">互いに素の定義と特徴づけ</h2>

            <p>
                まず、基本的な定義と、ベズーの等式による言い換えを確認します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (互いに素)">
                <p>
                    2つの整数 <InlineMath math="a" /> と <InlineMath math="b" /> の最大公約数が 1 であるとき、
                    すなわち <InlineMath math="\gcd(a, b) = 1" /> のとき、 <InlineMath math="a" /> と <InlineMath math="b" /> は<strong>互いに素 (coprime / relatively prime)</strong> であるという。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-1 (互いに素の必要十分条件)">
                <p>
                    <InlineMath math="a" /> と <InlineMath math="b" /> が互いに素であるための必要十分条件は、
                    <BlockMath math="ax + by = 1" />
                    を満たす整数 <InlineMath math="x, y" /> が存在することである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 必要性：</strong> ベズーの等式（Theorem 2.1-1）より明らかである。
                    <br /><strong>2. 十分性：</strong> <InlineMath math="ax + by = 1" /> を満たす <InlineMath math="x, y" /> が存在すると仮定し、 <InlineMath math="d = \gcd(a, b)" /> とおく。
                    <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> なので、 <InlineMath math="d \mid (ax + by)" /> である。
                    すなわち <InlineMath math="d \mid 1" /> となり、 <InlineMath math="d > 0" /> より <InlineMath math="d = 1" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ユークリッドの補題</h2>

            <p>
                「互いに素」という性質が、割り算の論理においてどのように機能するかを示す決定的な命題です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 (ユークリッドの補題)">
                <p>
                    <InlineMath math="a" /> が積 <InlineMath math="bc" /> を割り切り、かつ <InlineMath math="a" /> と <InlineMath math="b" /> が互いに素ならば、
                    <InlineMath math="a" /> は <InlineMath math="c" /> を割り切る。
                    <BlockMath math="a \mid bc \text{ かつ } \gcd(a, b) = 1 \Rightarrow a \mid c" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定 <InlineMath math="\gcd(a, b) = 1" /> より、 <InlineMath math="ax + by = 1" /> を満たす整数 <InlineMath math="x, y" /> が存在する。
                    両辺に <InlineMath math="c" /> を掛けると、
                    <BlockMath math="acx + bcy = c" />
                    ここで、左辺の第一項 <InlineMath math="acx" /> は明らかに <InlineMath math="a" /> の倍数である。
                    第二項 <InlineMath math="bcy" /> は、仮定 <InlineMath math="a \mid bc" /> より <InlineMath math="a" /> の倍数である。
                    したがって、それらの和である右辺 <InlineMath math="c" /> も <InlineMath math="a" /> で割り切れる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 (補題の重要性)">
                <p>
                    ・ <InlineMath math="2" /> は <InlineMath math="3 \times 4 = 12" /> を割り切り、 <InlineMath math="\gcd(2, 3) = 1" /> なので、 <InlineMath math="2 \mid 4" /> が成り立つ。
                    <br />・ 一方、 <InlineMath math="6 \mid (4 \times 9) = 36" /> であるが、 <InlineMath math="\gcd(6, 4) = 2 \neq 1" /> であるため、 <InlineMath math="6 \mid 4" /> も <InlineMath math="6 \mid 9" /> も成り立たない。
                    「互いに素」という条件が欠けると、この補題は成立しないことがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">さらなる性質</h2>

            <ContentBox type="proposition" title="Proposition 2.4-2">
                <p>
                    <InlineMath math="\gcd(a, b) = 1" /> かつ <InlineMath math="\gcd(a, c) = 1" /> ならば、 <InlineMath math="\gcd(a, bc) = 1" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より、 <InlineMath math="ax_1 + by_1 = 1" /> および <InlineMath math="ax_2 + cy_2 = 1" /> となる整数が存在する。
                    2つの式の左辺どうしを掛けると（右辺は 1 ）、
                    <BlockMath math="(ax_1 + by_1)(ax_2 + cy_2) = 1" />
                    展開して <InlineMath math="a" /> で括ると、
                    <BlockMath math="a(ax_1 x_2 + x_1 cy_2 + x_2 by_1) + bc(y_1 y_2) = 1" />
                    この式は実質的に <InlineMath math="aX + (bc)Y = 1" /> の形をしているため、
                    Theorem 2.4-1 より <InlineMath math="\gcd(a, bc) = 1" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="次章への展望">
                <p>
                    本節で扱った「ユークリッドの補題」は、次章で学ぶ<strong>「素因数分解の一意性（算術の基本定理）」</strong>を証明するための決定的な武器となります。
                    数が積としてどのように振る舞うかという数論の根幹を、ベズーの等式という「線形な道具」が支えているのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>特徴づけ</strong>： 「互いに素」とは、線形結合で 1 を作れることと同値である。</li>
                    <li><strong>ユークリッドの補題</strong>： 互いに素な関係は、割り切れるという性質を隣の因数へ「押し流す」役割を果たす。</li>
                    <li><strong>積への保存</strong>： 複数の数と個別に互いに素であれば、それらの積とも互いに素であり続ける。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
