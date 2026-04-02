import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TotalDifferentiabilityDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で見たように、偏微分可能であっても連続性すら保証されません。
                1変数の「微分可能 ⇒ 連続」に対応する性質を多変数で得るためには、
                偏微分よりも<strong>強い</strong>微分の概念が必要です。
                それが<strong>全微分可能性</strong>です。
                これは「関数を点の近くで<strong>線形写像</strong>（1次関数）で近似できる」ことを意味し、
                多変数微分積分学の中核をなす概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全微分可能性の定義</h2>

            <ContentBox type="definition" title="Definition 4.3-1 (全微分可能性)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> で<strong>全微分可能</strong>であるとは、
                    定数 <InlineMath math="A, B" /> が存在して、
                </p>
                <BlockMath math="f(a + h, b + k) = f(a, b) + Ah + Bk + \varepsilon(h, k)" />
                <p className="leading-relaxed">
                    ただし <InlineMath math="\varepsilon(h, k)" /> は <InlineMath math="(h, k) \to (0, 0)" /> のとき、
                </p>
                <BlockMath math="\lim_{(h,k) \to (0,0)} \frac{\varepsilon(h, k)}{\sqrt{h^2 + k^2}} = 0" />
                <p className="leading-relaxed">
                    を満たすことをいう。
                </p>
                <p className="leading-relaxed mt-2">
                    直感的には、<InlineMath math="f(a+h, b+k)" /> を <InlineMath math="f(a,b) + Ah + Bk" /> という1次式で近似したとき、
                    その近似誤差 <InlineMath math="\varepsilon(h,k)" /> が <InlineMath math="|(h,k)|" /> よりも速く<InlineMath math="0" />に近づく（高次の無限小である）ことを意味する。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 4.3-2 (全微分)">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が点 <InlineMath math="(a, b)" /> で全微分可能であるとき、1次の近似部分
                </p>
                <BlockMath math="df = A \, dx + B \, dy = \frac{\partial f}{\partial x}(a,b) \, dx + \frac{\partial f}{\partial y}(a,b) \, dy" />
                <p className="leading-relaxed">
                    を <InlineMath math="f" /> の点 <InlineMath math="(a, b)" /> における<strong>全微分</strong>と呼ぶ。
                    ここで <InlineMath math="dx = h" />、<InlineMath math="dy = k" /> は独立な増分変数である。
                </p>
            </ContentBox>

            <p>
                全微分可能性の定義は、1変数の微分可能性「<InlineMath math="f(a+h) = f(a) + f'(a)h + o(h)" />」の
                自然な拡張になっています。
                次の命題は、全微分可能ならば偏微分可能であり、さらに <InlineMath math="A, B" /> が偏導関数に一致することを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全微分可能ならば偏微分可能</h2>

            <ContentBox type="proposition" title="Proposition 4.3-1 (全微分可能性と偏微分の関係)">
                <p className="leading-relaxed">
                    <InlineMath math="f" /> が点 <InlineMath math="(a, b)" /> で全微分可能ならば：
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f" /> は <InlineMath math="(a, b)" /> で連続である。</li>
                    <li><InlineMath math="f" /> は <InlineMath math="(a, b)" /> で偏微分可能であり、<InlineMath math="A = \frac{\partial f}{\partial x}(a,b)" />, <InlineMath math="B = \frac{\partial f}{\partial y}(a,b)" /> である。</li>
                    <li><InlineMath math="f" /> のすべての方向微分が存在し、<InlineMath math="D_{\boldsymbol{u}} f = \nabla f \cdot \boldsymbol{u}" /> が成り立つ。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <strong>(1) 連続性：</strong> 全微分可能性の定義より、
                </p>
                <BlockMath math="|f(a+h, b+k) - f(a,b)| = |Ah + Bk + \varepsilon(h,k)|" />
                <p className="leading-relaxed">
                    <InlineMath math="|Ah + Bk| \leq (|A| + |B|)\sqrt{h^2 + k^2}" /> であり、仮定より <InlineMath math="|\varepsilon(h,k)| = o(\sqrt{h^2+k^2})" /> であるから、
                    <InlineMath math="(h,k) \to (0,0)" /> とすれば右辺 <InlineMath math="\to 0" /> であり、<InlineMath math="f" /> は連続である。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>(2) 偏微分：</strong> <InlineMath math="k = 0" /> とおくと、
                </p>
                <BlockMath math="f(a+h, b) - f(a,b) = Ah + \varepsilon(h, 0)" />
                <p className="leading-relaxed">
                    <InlineMath math="\frac{\varepsilon(h, 0)}{|h|} \leq \frac{|\varepsilon(h, 0)|}{\sqrt{h^2}} \to 0" /> であるから、
                </p>
                <BlockMath math="\frac{\partial f}{\partial x}(a,b) = \lim_{h \to 0} \frac{f(a+h, b) - f(a,b)}{h} = A" />
                <p className="leading-relaxed">
                    同様に <InlineMath math="h = 0" /> とおけば <InlineMath math="B = \frac{\partial f}{\partial y}(a,b)" /> が示される。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>(3) 方向微分：</strong> <InlineMath math="\boldsymbol{u} = (u_1, u_2)" /> に沿って <InlineMath math="(h, k) = (tu_1, tu_2)" /> とおくと、
                </p>
                <BlockMath math="\frac{f(a+tu_1, b+tu_2) - f(a,b)}{t} = Au_1 + Bu_2 + \frac{\varepsilon(tu_1, tu_2)}{t}" />
                <p className="leading-relaxed">
                    <InlineMath math="\frac{|\varepsilon(tu_1, tu_2)|}{|t|} = \frac{|\varepsilon(tu_1, tu_2)|}{|t| \cdot 1} \leq \frac{|\varepsilon(tu_1, tu_2)|}{\sqrt{t^2(u_1^2+u_2^2)}} \to 0" /> であるから、
                    <InlineMath math="D_{\boldsymbol{u}} f = Au_1 + Bu_2 = \nabla f \cdot \boldsymbol{u}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                つまり、全微分可能性は偏微分可能性と連続性の<strong>両方を含む</strong>、より強い概念です。
                しかし、その逆は成り立つのでしょうか？
                「偏微分可能かつ連続ならば全微分可能か」—— 残念ながら答えは「いいえ」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏微分可能だが全微分不可能な例</h2>

            <ContentBox type="example" title="Example 4.3-1 (偏微分可能だが全微分不可能な関数の例)">
                <p className="leading-relaxed">
                    次の関数を考える。
                </p>
                <BlockMath math="f(x, y) = \begin{cases} \dfrac{xy}{\sqrt{x^2 + y^2}} & (x, y) \neq (0, 0) \\ 0 & (x, y) = (0, 0) \end{cases}" />
                <p className="leading-relaxed mt-2">
                    <strong>偏微分可能性：</strong>
                </p>
                <BlockMath math="\frac{\partial f}{\partial x}(0,0) = \lim_{h \to 0} \frac{f(h,0) - 0}{h} = \lim_{h \to 0} \frac{0}{h} = 0" />
                <p className="leading-relaxed">
                    同様に <InlineMath math="\frac{\partial f}{\partial y}(0,0) = 0" />。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>連続性：</strong> <InlineMath math="|f(x,y)| = \frac{|xy|}{\sqrt{x^2+y^2}} \leq \frac{\sqrt{x^2+y^2} \cdot \sqrt{x^2+y^2}}{\sqrt{x^2+y^2}} = \sqrt{x^2+y^2} \to 0" /> であるから連続。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>全微分不可能性：</strong> もし全微分可能であれば、<InlineMath math="A = B = 0" /> なので、
                </p>
                <BlockMath math="\lim_{(h,k) \to (0,0)} \frac{f(h,k)}{\sqrt{h^2+k^2}} = \lim_{(h,k) \to (0,0)} \frac{hk}{h^2+k^2} = 0" />
                <p className="leading-relaxed">
                    でなければならない。しかし、<InlineMath math="h = k" /> の経路では <InlineMath math="\frac{h^2}{2h^2} = \frac{1}{2} \neq 0" /> となり矛盾。
                    したがって <InlineMath math="f" /> は原点で全微分可能ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="多変数微分の概念の階層">
                <p className="leading-relaxed">
                    ここまでの結果を整理すると、多変数関数の「微分に関する性質」には次の包含関係があります。
                </p>
                <BlockMath math="\begin{aligned} \text{全微分可能} &\implies \text{偏微分可能かつ連続} \\ &\implies \text{偏微分可能} \end{aligned}" />
                <p className="leading-relaxed">
                    しかし、これらの逆はいずれも成り立ちません。
                    では、「全微分可能であること」を<strong>判定</strong>するには、偏導関数にどのような条件を課せばよいのでしょうか？
                    それが次節の主題です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>全微分可能性は「線形写像による近似誤差が高次の無限小である」ことを意味する（Definition 4.3-1）。</li>
                    <li>全微分可能性 ⇒ 連続性、偏微分可能性、すべての方向微分の存在（Proposition 4.3-1）。</li>
                    <li>逆は成り立たない：偏微分可能かつ連続でも全微分不可能な例がある（Example 4.3-1）。</li>
                    <li>全微分可能性を判定するための十分条件が次節で与えられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
