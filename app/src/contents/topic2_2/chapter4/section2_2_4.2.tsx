import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PartialDirectionalDerivatives() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で多変数関数の極限と連続性を定義しました。
                次なる問題は「多変数関数の微分とは何か」です。
                1変数では微分係数 <InlineMath math="f'(a)" /> がただ一つ定まりましたが、
                多変数では「どの方向に沿って変化率を見るか」によって異なる微分が定義されます。
                本節ではまず<strong>偏微分</strong>と<strong>方向微分</strong>を定義し、
                それらだけでは「関数の良さ」を保証するのに不十分であることを反例で確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏導関数の定義</h2>

            <ContentBox type="definition" title="Definition 4.2-1 (偏導関数)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> の点 <InlineMath math="(a, b)" /> における <InlineMath math="x" /> に関する<strong>偏導関数</strong>（偏微分）を
                </p>
                <BlockMath math="\frac{\partial f}{\partial x}(a, b) = \lim_{h \to 0} \frac{f(a + h, b) - f(a, b)}{h}" />
                <p className="leading-relaxed">
                    と定義する。同様に、<InlineMath math="y" /> に関する偏導関数を
                </p>
                <BlockMath math="\frac{\partial f}{\partial y}(a, b) = \lim_{h \to 0} \frac{f(a, b + h) - f(a, b)}{h}" />
                <p className="leading-relaxed">
                    と定義する。これらはそれぞれ、他の変数を固定して1変数関数と見たときの通常の微分係数に他ならない。
                </p>
            </ContentBox>

            <p>
                偏微分は「座標軸方向の変化率」です。
                <InlineMath math="\frac{\partial f}{\partial x}" /> は <InlineMath math="y" /> を固定して <InlineMath math="x" /> 方向だけを見た変化率であり、
                1変数の微分の自然な拡張です。
                しかし、座標軸以外の方向の変化率も考えたくなります。それが方向微分です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">方向微分</h2>

            <ContentBox type="definition" title="Definition 4.2-2 (方向微分)">
                <p className="leading-relaxed">
                    単位ベクトル <InlineMath math="\boldsymbol{u} = (u_1, u_2)" /> （<InlineMath math="|\boldsymbol{u}| = 1" />）の方向への
                    <InlineMath math="f" /> の点 <InlineMath math="(a, b)" /> における<strong>方向微分</strong>を
                </p>
                <BlockMath math="D_{\boldsymbol{u}} f(a, b) = \lim_{t \to 0} \frac{f(a + tu_1, \, b + tu_2) - f(a, b)}{t}" />
                <p className="leading-relaxed">
                    と定義する。
                </p>
                <p className="leading-relaxed mt-2">
                    偏導関数は方向微分の特殊な場合であり、
                    <InlineMath math="\boldsymbol{u} = (1, 0)" /> のとき <InlineMath math="D_{\boldsymbol{u}} f = \frac{\partial f}{\partial x}" />、
                    <InlineMath math="\boldsymbol{u} = (0, 1)" /> のとき <InlineMath math="D_{\boldsymbol{u}} f = \frac{\partial f}{\partial y}" /> となる。
                </p>
            </ContentBox>

            <p>
                直感的には、偏微分が「x 方向の傾き」と「y 方向の傾き」であるのに対し、
                方向微分は「任意の方向への傾き」です。
                しかし、<strong>すべての方向微分が存在しても、関数が連続であるとは限りません</strong>。
                次の驚くべき反例がこのことを示しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏微分可能だが連続でない例</h2>

            <ContentBox type="example" title="Example 4.2-1 (偏微分可能だが原点で連続でない関数の例)">
                <p className="leading-relaxed">
                    次の関数を考える。
                </p>
                <BlockMath math="f(x, y) = \begin{cases} \dfrac{x^2 y}{x^4 + y^2} & (x, y) \neq (0, 0) \\ 0 & (x, y) = (0, 0) \end{cases}" />
                <p className="leading-relaxed mt-2">
                    <strong>偏微分の存在：</strong>
                </p>
                <BlockMath math="\frac{\partial f}{\partial x}(0, 0) = \lim_{h \to 0} \frac{f(h, 0) - f(0, 0)}{h} = \lim_{h \to 0} \frac{0}{h} = 0" />
                <BlockMath math="\frac{\partial f}{\partial y}(0, 0) = \lim_{h \to 0} \frac{f(0, h) - f(0, 0)}{h} = \lim_{h \to 0} \frac{0}{h} = 0" />
                <p className="leading-relaxed">
                    両方の偏導関数が存在し、値は <InlineMath math="0" /> です。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>連続性の不成立：</strong> 経路 <InlineMath math="y = x^2" /> に沿って原点に近づくと、
                </p>
                <BlockMath math="f(x, x^2) = \frac{x^2 \cdot x^2}{x^4 + x^4} = \frac{x^4}{2x^4} = \frac{1}{2}" />
                <p className="leading-relaxed">
                    一方 <InlineMath math="f(0, 0) = 0" /> であるから、<InlineMath math="f" /> は原点で連続ではありません。
                </p>
                <p className="leading-relaxed mt-2">
                    この例は衝撃的です。1変数では「微分可能ならば連続」が成り立ちましたが（Theorem 1.4-1）、
                    多変数では<strong>偏微分可能であっても連続性すら保証されない</strong>のです。
                    この事実こそ、次節で「全微分可能性」というより強い概念を導入する動機となります。
                </p>
            </ContentBox>

            <p>
                偏微分は各座標軸方向の情報しか持たず、関数の「全方向の振る舞い」を制御するには力不足です。
                これに対し、偏導関数を1つのベクトルにまとめたものが勾配ベクトルです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">勾配ベクトル</h2>

            <ContentBox type="definition" title="Definition 4.2-3 (勾配ベクトル ∇f)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> が偏微分可能であるとき、偏導関数を成分とするベクトル
                </p>
                <BlockMath math="\nabla f(a, b) = \left( \frac{\partial f}{\partial x}(a, b), \, \frac{\partial f}{\partial y}(a, b) \right)" />
                <p className="leading-relaxed">
                    を <InlineMath math="f" /> の点 <InlineMath math="(a, b)" /> における<strong>勾配</strong>（gradient）と呼ぶ。
                    <InlineMath math="\nabla" /> は「ナブラ」と読む。
                </p>
                <p className="leading-relaxed mt-2">
                    もし <InlineMath math="f" /> が全微分可能（次節で定義）であれば、方向微分は勾配との内積で表される：
                </p>
                <BlockMath math="D_{\boldsymbol{u}} f(a, b) = \nabla f(a, b) \cdot \boldsymbol{u}" />
                <p className="leading-relaxed">
                    この公式から、勾配 <InlineMath math="\nabla f" /> の方向が <InlineMath math="f" /> の値が最も急激に増加する方向であることがわかる
                    （コーシー・シュワルツの不等式より、内積は <InlineMath math="\boldsymbol{u}" /> が <InlineMath math="\nabla f" /> と同じ方向のとき最大）。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>偏微分は「他の変数を固定して1変数と見た微分」であり、方向微分は「任意方向への変化率」である。</li>
                    <li>偏微分可能であっても連続性は保証されない（Example 4.2-1）。1変数との決定的な違いである。</li>
                    <li>勾配ベクトル <InlineMath math="\nabla f" /> は偏導関数をまとめたベクトルであり、<InlineMath math="f" /> が最も急に増加する方向を向く。</li>
                    <li>これらの不十分さが、次節の「全微分可能性」を導入する動機となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
