import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MonotoneOperatorsDefinitionAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸解析と最適化において非常に重要な役割を果たす「単調作用素」の概念を導入します。単調作用素は、実数値関数の単調増加性を多次元のベクトル空間（あるいはより一般のヒルベルト空間）上の作用素（写像）へと自然に拡張したものです。特に、凸関数の劣微分が単調作用素となるという事実は、最適化問題や変分不等式の解析において極めて強力な武器となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調作用素の定義</h2>

            <p>
                まずは、単調作用素の基本的な定義から始めましょう。ここでは、一般に集合値写像（各点に対して部分集合を対応させる写像）を扱います。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (単調作用素)">
                <p>
                    集合値写像 <InlineMath math="T: \mathbb{R}^n \rightrightarrows \mathbb{R}^n" /> が<b>単調（monotone）</b>であるとは、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> および <InlineMath math="u \in T(x)" />、<InlineMath math="v \in T(y)" /> に対して、以下の不等式が成り立つことである。
                </p>
                <BlockMath math="\langle u - v, x - y \rangle \geq 0" />
            </ContentBox>

            <p>
                直感的には、入力の差 <InlineMath math="x - y" /> と出力の差 <InlineMath math="u - v" /> が同じ方向を向いている（内積が非負である）ことを意味しています。1次元の場合は、単調増加関数の定義そのものです。
            </p>

            <ContentBox type="example" title="Example 6.1-2">
                <p>
                    <InlineMath math="\mathbb{R}" /> 上の増加関数 <InlineMath math="T(x) = x^3" /> は単調作用素である。
                </p>
                <p>
                    実際に確認してみよう。<InlineMath math="u = x^3" />、<InlineMath math="v = y^3" /> とすると、
                </p>
                <BlockMath math="\begin{aligned} (x^3 - y^3)(x - y) &= (x - y)(x^2 + xy + y^2)(x - y) \\ &= (x - y)^2 \left( \left( x + \frac{y}{2} \right)^2 + \frac{3}{4}y^2 \right) \geq 0 \end{aligned}" />
                <p>
                    となり、単調性の条件を満たす。
                </p>
            </ContentBox>

            <p>
                さらに、この単調性の不等式が厳密に成り立つ場合を定義します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (狭義単調作用素)">
                <p>
                    単調作用素 <InlineMath math="T" /> が<b>狭義単調（strictly monotone）</b>であるとは、<InlineMath math="x \neq y" /> のとき、任意の <InlineMath math="u \in T(x)" />、<InlineMath math="v \in T(y)" /> に対して以下の厳密な不等式が成り立つことである。
                </p>
                <BlockMath math="\langle u - v, x - y \rangle > 0" />
            </ContentBox>

            <p>
                狭義単調作用素の代表的な例として、正定値行列による線形変換が挙げられます。
            </p>

            <ContentBox type="example" title="Example 6.1-1">
                <p>
                    <InlineMath math="T(x) = Ax" /> で <InlineMath math="A" /> が正定値対称行列のとき、<InlineMath math="T" /> は狭義単調作用素である。
                </p>
                <p>
                    <InlineMath math="x \neq y" /> とする。このとき、<InlineMath math="T(x) = Ax" />、<InlineMath math="T(y) = Ay" /> であるから、内積を計算すると
                </p>
                <BlockMath math="\begin{aligned} \langle Ax - Ay, x - y \rangle &= \langle A(x - y), x - y \rangle \\ &= (x - y)^T A (x - y) \end{aligned}" />
                <p>
                    <InlineMath math="A" /> は正定値行列であり、<InlineMath math="x - y \neq 0" /> であるため、<InlineMath math="(x - y)^T A (x - y) > 0" /> が成り立つ。よって <InlineMath math="T" /> は狭義単調である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">劣微分は単調作用素</h2>

            <p>
                単調作用素の概念が凸解析において重要である最大の理由は、凸関数の劣微分が単調作用素になるという事実にあります。これにより、最適化問題（劣微分が <InlineMath math="0" /> を含む点を見つける問題）を、単調作用素の零点探索問題として統一的に扱うことができます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-1">
                <p>
                    凸関数 <InlineMath math="f" /> の劣微分 <InlineMath math="\partial f" /> は単調作用素である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="u \in \partial f(x)" />、<InlineMath math="v \in \partial f(y)" /> とする。劣勾配の定義より、すべての点において以下が成り立つ。
                </p>
                <BlockMath math="f(y) \geq f(x) + \langle u, y - x \rangle"
                />
                <BlockMath math="f(x) \geq f(y) + \langle v, x - y \rangle"
                />
                <p>
                    これら2つの不等式を辺々足し合わせると、
                </p>
                <BlockMath math="f(y) + f(x) \geq f(x) + f(y) + \langle u, y - x \rangle + \langle v, x - y \rangle"
                />
                <p>
                    整理すると、
                </p>
                <BlockMath math="\begin{aligned} 0 &\geq \langle u, y - x \rangle + \langle v, x - y \rangle \\ &= -\langle u, x - y \rangle + \langle v, x - y \rangle \\ &= -\langle u - v, x - y \rangle \end{aligned}"
                />
                <p>
                    したがって、<InlineMath math="\langle u - v, x - y \rangle \geq 0" /> を得る。よって <InlineMath math="\partial f" /> は単調作用素である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題を、具体的な関数について確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 6.1-3">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> の劣微分 <InlineMath math="\partial f" /> の単調性を検証する。
                </p>
                <p>
                    <InlineMath math="f(x) = |x|" /> の劣微分は以下のように与えられる（§3.1 参照）。
                </p>
                <BlockMath math="\partial f(x) = \begin{cases} \{1\} & (x > 0) \\ [-1, 1] & (x = 0) \\ \{-1\} & (x < 0) \end{cases}" />
                <p>
                    いくつかのケースで単調性の条件 <InlineMath math="(u - v)(x - y) \geq 0" /> を確認する。
                </p>
                <ul>
                    <li>
                        <InlineMath math="x = 1, y = -1" /> のとき：<InlineMath math="u \in \partial f(1) = \{1\}" /> より <InlineMath math="u = 1" />。<InlineMath math="v \in \partial f(-1) = \{-1\}" /> より <InlineMath math="v = -1" />。
                        <BlockMath math="(u - v)(x - y) = (1 - (-1))(1 - (-1)) = 2 \times 2 = 4 \geq 0" />
                    </li>
                    <li>
                        <InlineMath math="x = 0, y = 2" /> のとき：<InlineMath math="u \in \partial f(0) = [-1, 1]" /> から例えば <InlineMath math="u = 1/2" /> をとる。<InlineMath math="v \in \partial f(2) = \{1\}" /> より <InlineMath math="v = 1" />。
                        <BlockMath math="\begin{aligned} (u - v)(x - y) &= \left(\frac{1}{2} - 1\right)(0 - 2) \\ &= \left(-\frac{1}{2}\right)(-2) = 1 \geq 0 \end{aligned}" />
                    </li>
                </ul>
                <p>
                    どの場合も確かに単調性の条件を満たしていることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="一般化への展望">
                <p>
                    本節で導入した単調作用素の理論は、凸最適化問題の最適性条件（フェルマの規則）や変分不等式を、単調作用素の零点問題 <InlineMath math="0 \in T(x)" /> として統一的に扱う強固な枠組みを提供します。
                    さらに、この概念は有限次元空間にとどまらず、4-1 関数解析において無限次元ヒルベルト空間上の非線形作用素の理論へと自然に一般化されます。そこでは、偏微分方程式の弱解の存在を示すための強力なツールとして機能します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合値写像 <InlineMath math="T" /> が単調作用素であるとは、<InlineMath math="u \in T(x), v \in T(y)" /> に対して <InlineMath math="\langle u - v, x - y \rangle \geq 0" /> が成り立つこと。</li>
                    <li>正定値行列による線形写像などは狭義単調作用素の例となる。</li>
                    <li>任意の凸関数の劣微分 <InlineMath math="\partial f" /> は単調作用素となる。これが凸解析と単調作用素理論を結ぶ最も重要な事実である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
