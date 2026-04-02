import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TotalDifferentiabilitySufficientCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で見たように、偏微分可能かつ連続であっても全微分可能性は保証されません。
                では、全微分可能であることを判定するには、偏導関数にどのような条件を加えればよいのでしょうか。
                本節でその答えを与えます。鍵となるのは「偏導関数の<strong>連続性</strong>」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全微分可能性の十分条件</h2>

            <ContentBox type="theorem" title="Theorem 4.4-1 (C¹ 級ならば全微分可能)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> の近傍で偏導関数 <InlineMath math="\frac{\partial f}{\partial x}" />, <InlineMath math="\frac{\partial f}{\partial y}" /> が存在し、
                    かつこれらの偏導関数が <InlineMath math="(a, b)" /> で<strong>連続</strong>であるとする。
                    このとき、<InlineMath math="f" /> は <InlineMath math="(a, b)" /> で<strong>全微分可能</strong>である。
                </p>
                <p className="leading-relaxed mt-2">
                    （偏導関数が連続である関数を <InlineMath math="C^1" /> 級関数という。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    増分 <InlineMath math="f(a+h, b+k) - f(a,b)" /> を評価する。中間の点 <InlineMath math="(a+h, b)" /> を経由して分解する。
                </p>
                <BlockMath math="\begin{aligned} f(a+h, b+k) - f(a,b) & = \bigl[ f(a+h, b+k) - f(a+h, b) \bigr] \\ &\quad + \bigl[ f(a+h, b) - f(a, b) \bigr] \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    <strong>第2項の評価：</strong> <InlineMath math="y = b" /> を固定して <InlineMath math="g(t) = f(t, b)" /> とおくと、
                    1変数の平均値定理より、ある <InlineMath math="\theta_1 \in (0, 1)" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned} f(a+h, b) - f(a, b) & = g(a+h) - g(a) \\ & = g'(a + \theta_1 h) \cdot h \\ & = \frac{\partial f}{\partial x}(a + \theta_1 h, b) \cdot h \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    <strong>第1項の評価：</strong> <InlineMath math="x = a + h" /> を固定して <InlineMath math="\varphi(t) = f(a+h, t)" /> とおくと、
                    同様にある <InlineMath math="\theta_2 \in (0, 1)" /> が存在して、
                </p>
                <BlockMath math="f(a+h, b+k) - f(a+h, b) = \frac{\partial f}{\partial y}(a+h, b + \theta_2 k) \cdot k" />
                <p className="leading-relaxed mt-2">
                    合わせると、
                </p>
                <BlockMath math="\begin{aligned} f(a+h, b+k) - f(a,b) & = \frac{\partial f}{\partial x}(a + \theta_1 h, b) \cdot h \\ &\quad + \frac{\partial f}{\partial y}(a+h, b + \theta_2 k) \cdot k \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    これを全微分可能性の形に書き直す。<InlineMath math="A = \frac{\partial f}{\partial x}(a,b)" />, <InlineMath math="B = \frac{\partial f}{\partial y}(a,b)" /> として、
                </p>
                <BlockMath math="\begin{aligned} \varepsilon(h,k) & = \left[\frac{\partial f}{\partial x}(a + \theta_1 h, b) - \frac{\partial f}{\partial x}(a,b)\right] h \\ &\quad + \left[\frac{\partial f}{\partial y}(a+h, b + \theta_2 k) - \frac{\partial f}{\partial y}(a,b)\right] k \end{aligned}" />
                <p className="leading-relaxed">
                    と定義すれば、<InlineMath math="f(a+h, b+k) = f(a,b) + Ah + Bk + \varepsilon(h,k)" /> が成り立つ。
                </p>
                <p className="leading-relaxed mt-2">
                    あとは <InlineMath math="\frac{|\varepsilon(h,k)|}{\sqrt{h^2+k^2}} \to 0" /> を示す。
                </p>
                <BlockMath math="\begin{aligned} \frac{|\varepsilon(h,k)|}{\sqrt{h^2+k^2}} & \leq \left|\frac{\partial f}{\partial x}(a + \theta_1 h, b) - \frac{\partial f}{\partial x}(a,b)\right| \cdot \frac{|h|}{\sqrt{h^2+k^2}} \\ &\quad + \left|\frac{\partial f}{\partial y}(a+h, b + \theta_2 k) - \frac{\partial f}{\partial y}(a,b)\right| \cdot \frac{|k|}{\sqrt{h^2+k^2}} \end{aligned}" />
                <p className="leading-relaxed">
                    <InlineMath math="\frac{|h|}{\sqrt{h^2+k^2}} \leq 1" /> および <InlineMath math="\frac{|k|}{\sqrt{h^2+k^2}} \leq 1" /> が常に成り立つ。
                    また、偏導関数の連続性の仮定より、
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="(h, k) \to (0, 0)" /> のとき <InlineMath math="(a + \theta_1 h, b) \to (a, b)" /> であるから、<InlineMath math="\frac{\partial f}{\partial x}(a + \theta_1 h, b) \to \frac{\partial f}{\partial x}(a, b)" /></li>
                    <li><InlineMath math="(h, k) \to (0, 0)" /> のとき <InlineMath math="(a + h, b + \theta_2 k) \to (a, b)" /> であるから、<InlineMath math="\frac{\partial f}{\partial y}(a + h, b + \theta_2 k) \to \frac{\partial f}{\partial y}(a, b)" /></li>
                </ul>
                <p className="leading-relaxed mt-2">
                    したがって、はさみうちの原理（または直接評価）により <InlineMath math="\frac{|\varepsilon(h,k)|}{\sqrt{h^2+k^2}} \to 0" /> が成り立つ。
                    よって <InlineMath math="f" /> は <InlineMath math="(a, b)" /> で全微分可能である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="多変数微分の概念の全体像">
                <p className="leading-relaxed">
                    本章の結果を踏まえ、概念の包含関係を完成させましょう。
                </p>
                <BlockMath math="C^1 {\text{ 級（偏導関数が連続）}} \underset{\text{Thm 4.4-1}}{\implies} \text{全微分可能} \\ \quad \underset{\text{Prop 4.3-1}}{\implies} \text{連続かつ偏微分可能} \underset{\text{Ex 4.2-1}}{\implies} \text{偏微分可能}" />
                <p className="leading-relaxed mt-2">
                    各矢印の逆は成り立ちません。実用上は、ほとんどの関数は <InlineMath math="C^1" /> 級であるため、
                    「偏導関数が連続かを確認すれば全微分可能性が保証される」という Theorem 4.4-1 が最も頻繁に使われます。
                </p>
                <p className="leading-relaxed mt-2">
                    この定理は、<strong>多変数の連鎖律</strong>（合成関数の微分）や<strong>逆関数定理</strong>、<strong>陰関数定理</strong>などの高度な結果の土台となる、
                    多変数微分積分学の基盤定理です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>偏導関数が連続（<InlineMath math="C^1" /> 級）ならば全微分可能である（Theorem 4.4-1）。</li>
                    <li>証明の鍵は「中間点を経由して増分を分解し、各方向に平均値定理を適用する」という手法である。</li>
                    <li>概念の階層：<InlineMath math="C^1" /> 級 ⇒ 全微分可能 ⇒ 連続 & 偏微分可能 ⇒ 偏微分可能。各逆は不成立。</li>
                    <li>この定理は多変数の連鎖律、逆関数定理、陰関数定理の基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
