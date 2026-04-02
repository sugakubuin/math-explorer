import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HigherOrderDerivativesSchwarz() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                偏導関数 <InlineMath math="f_x" /> や <InlineMath math="f_y" /> もまた変数 <InlineMath math="x, y" /> の関数であるため、
                さらに偏微分することができます。
                これが高階偏導関数です。
                特に「<InlineMath math="x" /> で偏微分してから <InlineMath math="y" /> で偏微分する」のと「<InlineMath math="y" /> で偏微分してから <InlineMath math="x" /> で偏微分する」のでは
                結果は同じになるのでしょうか？
                本節ではこの重要かつ微妙な問いについて考えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高階偏微分の定義</h2>

            <ContentBox type="definition" title="Definition 5.3-1 (高階偏導関数・混合偏導関数)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> の偏導関数 <InlineMath math="f_x, f_y" /> がさらに偏微分可能であるとき、それらの偏導関数を<strong>2階偏導関数</strong>と呼び、次のように表す：
                </p>
                <BlockMath math="f_{xx} = \frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)" />
                <BlockMath math="f_{yy} = \frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)" />
                <p className="leading-relaxed mt-2">
                    異なる変数で順次偏微分したものを<strong>混合偏導関数</strong>と呼び、次のように表す：
                </p>
                <BlockMath math="f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)" />
                <BlockMath math="f_{yx} = \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)" />
                <p className="leading-relaxed mt-2">
                    （注：下付き添字 <InlineMath math="f_{xy}" /> は「<InlineMath math="x" /> で微分してから <InlineMath math="y" /> で微分」、微分作用素 <InlineMath math="\frac{\partial^2 f}{\partial y \partial x}" /> は右から左へ作用するため同じ順序を意味する。文献により記号の約束が逆の場合があるため注意。）
                </p>
            </ContentBox>

            <p>
                問題は <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が等しいかどうかです。
                多くの初等的な関数（多項式、指数関数、三角関数など）では等しくなりますが、
                いつでも成り立つわけではありません。
                この一致を保証する強力な定理が「シュワルツの定理」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュワルツの定理</h2>

            <ContentBox type="theorem" title="Theorem 5.3-1 (シュワルツの定理)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> の近傍で定義されており、
                    そこでの混合偏導関数 <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> が存在し、
                    かつそれらが点 <InlineMath math="(a, b)" /> で<strong>連続</strong>であるとする（このような関数を <InlineMath math="C^2" /> 級という）。
                </p>
                <p className="leading-relaxed mt-2">
                    このとき、点 <InlineMath math="(a, b)" /> において次が成り立つ：
                </p>
                <BlockMath math="f_{xy}(a, b) = f_{yx}(a, b)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    微小な増分 <InlineMath math="h, k \neq 0" /> に対し、差分演算子を次のように定義する：
                </p>
                <BlockMath math="\begin{aligned} \Delta(h, k) & = f(a+h, b+k) - f(a+h, b) \\ &\quad - f(a, b+k) + f(a, b) \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    この <InlineMath math="\Delta(h, k)" /> を2通りの方法で評価する。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>1. <InlineMath math="x" /> について先に平均値定理を適用：</strong><br />
                    <InlineMath math="\varphi(x) = f(x, b+k) - f(x, b)" /> とおくと、<InlineMath math="\Delta(h, k) = \varphi(a+h) - \varphi(a)" /> である。
                    平均値定理より、ある <InlineMath math="\theta_1 \in (0, 1)" /> が存在して、
                </p>
                <BlockMath math="\begin{aligned} \Delta(h, k) & = h \varphi'(a + \theta_1 h) \\ & = h \left[ f_x(a + \theta_1 h, b+k) - f_x(a + \theta_1 h, b) \right] \end{aligned}" />
                <p className="leading-relaxed">
                    次に <InlineMath math="g(y) = f_x(a + \theta_1 h, y)" /> に再度平均値定理を適用すると、ある <InlineMath math="\theta_2 \in (0, 1)" /> が存在して、
                </p>
                <BlockMath math="\Delta(h, k) = h \left[ k g'(b + \theta_2 k) \right] = hk f_{xy}(a + \theta_1 h, b + \theta_2 k)" />
                <p className="leading-relaxed mt-2">
                    <strong>2. <InlineMath math="y" /> について先に平均値定理を適用：</strong><br />
                    <InlineMath math="\psi(y) = f(a+h, y) - f(a, y)" /> とおくと、<InlineMath math="\Delta(h, k) = \psi(b+k) - \psi(b)" /> である。
                    同様の操作により、ある <InlineMath math="\eta_1, \eta_2 \in (0, 1)" /> が存在して、
                </p>
                <BlockMath math="\Delta(h, k) = hk f_{yx}(a + \eta_1 h, b + \eta_2 k)" />
                <p className="leading-relaxed mt-2">
                    <strong>3. 極限をとる：</strong><br />
                    以上の2つの式から、<InlineMath math="h, k \neq 0" /> より
                </p>
                <BlockMath math="f_{xy}(a + \theta_1 h, b + \theta_2 k) = f_{yx}(a + \eta_1 h, b + \eta_2 k)" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="(h, k) \to (0, 0)" /> の極限をとる。
                    仮定より <InlineMath math="f_{xy}" /> と <InlineMath math="f_{yx}" /> は <InlineMath math="(a, b)" /> で連続であるから、
                </p>
                <BlockMath math="f_{xy}(a, b) = f_{yx}(a, b)" />
                <p className="leading-relaxed">
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明の鍵は、長方形領域の4頂点を用いた「2階差分」に対して、
                平均値定理を縦から適用するか、横から適用するかの違いです。
                最後に極限をとる際、混合偏導関数の<strong>連続性</strong>が本質的に使われています。
                では、連続でない場合にはどうなるのでしょうか。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">順序交換できない反例</h2>

            <ContentBox type="example" title="Example 5.3-1 (混合偏微分の順序が入れ替わらない例)">
                <p className="leading-relaxed">
                    次の関数を考える。
                </p>
                <BlockMath math="f(x, y) = \begin{cases} xy \dfrac{x^2 - y^2}{x^2 + y^2} & (x, y) \neq (0, 0) \\ 0 & (x, y) = (0, 0) \end{cases}" />
                <p className="leading-relaxed mt-2">
                    <InlineMath math="(x,y) \neq (0,0)" /> のとき、偏微分を計算すると、
                </p>
                <BlockMath math="\begin{aligned} f_x(x,y) & = y \frac{x^4 + 4x^2y^2 - y^4}{(x^2+y^2)^2}, \\ f_y(x,y) & = x \frac{x^4 - 4x^2y^2 - y^4}{(x^2+y^2)^2} \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    原点における1階偏微分は、定義に従い計算すると、
                </p>
                <BlockMath math="\begin{aligned} f_x(0,y) & = \lim_{h\to 0}\frac{f(h,y)-f(0,y)}{h} = -y, \\ f_y(x,0) & = \lim_{k\to 0}\frac{f(x,k)-f(x,0)}{k} = x \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    したがって、原点における2階混合偏微分は、
                </p>
                <BlockMath math="f_{xy}(0,0) = \lim_{k\to 0}\frac{f_x(0,k)-f_x(0,0)}{k} = \lim_{k\to 0}\frac{-k-0}{k} = -1" />
                <BlockMath math="f_{yx}(0,0) = \lim_{h\to 0}\frac{f_y(h,0)-f_y(0,0)}{h} = \lim_{h\to 0}\frac{h-0}{h} = 1" />
                <p className="leading-relaxed mt-2">
                    なんと <InlineMath math="f_{xy}(0,0) = -1" />、<InlineMath math="f_{yx}(0,0) = 1" /> となり、<strong>一致しません</strong>。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ定理は壊れたのか？">
                <p className="leading-relaxed">
                    Example 5.3-1 でシュワルツの定理が成り立たなかった理由は単純です。
                    それは <InlineMath math="f_{xy}" /> や <InlineMath math="f_{yx}" /> が<strong>原点で連続でない</strong>からです。
                </p>
                <p className="leading-relaxed mt-2">
                    例えば <InlineMath math="(x,y) \neq (0,0)" /> の領域で再計算すると実は <InlineMath math="f_{xy}(x,y) = f_{yx}(x,y)" /> は成り立っているのですが、
                    その極限値は原点に近づく経路によって異なり、原点での連続性が破綻しています。
                    シュワルツの定理の仮定である「<InlineMath math="C^2" /> 級（2階までのすべての偏導関数が連続）」は、
                    少しでも緩めると奇妙な反例が生じる、まさに「ギリギリ」の条件なのです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="f" /> を異なる変数で順次偏微分したものを混合偏導関数（<InlineMath math="f_{xy}, f_{yx}" />）と呼ぶ（Definition 5.3-1）。</li>
                    <li><InlineMath math="f" /> が <InlineMath math="C^2" /> 級（混合偏導関数が連続）であれば、偏微分の順序は交換可能である（Theorem 5.3-1）。</li>
                    <li>混合偏導関数が連続でない場合、順序を交換すると異なる結果になることがある（Example 5.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
