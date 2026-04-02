import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IntegrationBySubstitution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で積分の極限操作についての理論的な枠組みを見直しましたが、本節および次節では「定積分の計算テクニック」である置換積分と部分積分の公式が、いかにして実解析（微積分の基本定理）から厳密に導かれるかを確認します。
                見慣れた「<InlineMath math="dt" /> と <InlineMath math="dx" /> の変数変換」が、単なる形式的な記号操作ではなく、合成関数の連鎖律（チェーンルール）の逆操作であることが証明によって明らかになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">置換積分の法則</h2>

            <p>
                積分変数を <InlineMath math="x" /> から <InlineMath math="t" /> へ変換する置換積分の公式は、積分区間の端点 <InlineMath math="[a, b]" /> がどのように推移するかに着目して定式化されます。
            </p>

            <ContentBox type="theorem" title="Theorem 11.2-1 (置換積分の定理)">
                <p>
                    関数 <InlineMath math="x = \phi(t)" /> が閉区間 <InlineMath math="[\alpha, \beta]" /> 上で <InlineMath math="C^1" /> 級（微分可能であり、その導関数 <InlineMath math="\phi'(t)" /> が連続）であるとする。
                </p>
                <p className="mt-4">
                    また、<InlineMath math="\phi" /> による変換領域（値域）を含む適当な区間において、関数 <InlineMath math="f(x)" /> が<strong>連続</strong>であるとする。
                    このとき、積分区間の端点が <InlineMath math="a = \phi(\alpha), b = \phi(\beta)" /> であるような定積分について、次の等式が成立する。
                </p>
                <BlockMath math="\int_a^b f(x) dx = \int_\alpha^\beta f(\phi(t)) \phi'(t) dt" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (微積分の基本定理と連鎖律による証明)">
                <p>
                    <InlineMath math="f(x)" /> は連続関数であるため、微積分の第1基本定理（Theorem 9.4-1）により、ある原始関数 <InlineMath math="F(x)" /> を持つ。すなわち <InlineMath math="F'(x) = f(x)" /> である。<br />
                    そして微積分の第2基本定理（Theorem 9.4-2）より、左辺の定積分は次のように計算される。
                </p>
                <BlockMath math="\int_a^b f(x) dx = F(b) - F(a)" />
                <p className="mt-4">
                    一方、合成関数 <InlineMath math="F(\phi(t))" /> の導関数を、微分法の連鎖律（チェーンルール）を用いて計算する。<InlineMath math="F, \phi" /> はともに微分可能であるから、
                </p>
                <BlockMath math="\frac{d}{dt} F(\phi(t)) = F'(\phi(t)) \cdot \phi'(t) = f(\phi(t)) \cdot \phi'(t)" />
                <p>
                    となる。<br />
                    この等式は、関数 <InlineMath math="f(\phi(t)) \phi'(t)" /> の<strong>原始関数の一つが <InlineMath math="F(\phi(t))" /> である</strong>ことを示している。
                </p>
                <p className="mt-4">
                    さらに、<InlineMath math="f" /> と <InlineMath math="\phi'" /> はともに連続であるため、右辺の被積分関数 <InlineMath math="f(\phi(t))\phi'(t)" /> は <InlineMath math="[\alpha, \beta]" /> 上で連続であり、リーマン可積分である。<br />
                    したがって、右辺の積分に対しても微積分の第2基本定理を適用することができ、
                </p>
                <BlockMath math="\begin{aligned} \int_\alpha^\beta f(\phi(t)) \phi'(t) dt &= \left[ F(\phi(t)) \right]_\alpha^\beta \\ &= F(\phi(\beta)) - F(\phi(\alpha)) \end{aligned}" />
                <p>
                    となる。
                </p>
                <p className="mt-4">
                    ここで、仮定より <InlineMath math="\phi(\alpha) = a, \phi(\beta) = b" /> であるから、これを代入すると、
                </p>
                <BlockMath math="F(\phi(\beta)) - F(\phi(\alpha)) = F(b) - F(a)" />
                <p>
                    となり、左辺の計算結果と完全に一致する。よって置換積分の公式が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">適用条件と注意点</h2>

            <p>
                上の証明で注目すべきは、「<InlineMath math="\phi(t)" /> は単調（増加または減少）でなくとも良い」という点です。<InlineMath math="t" /> が動くにつれて <InlineMath math="x" /> が途中で折り返したとしても、積分区間のキャンセレーション（同じ区間を逆向きに積分すると符号が反転して打ち消される性質）が自動的に働くため、最終的な等式は成立します。
            </p>

            <ContentBox type="remark" title="逆置換を行う際の単調性の要求">
                <p>
                    定理の形 <InlineMath math="\int f(x) dx \implies \int f(\phi(t)) \phi'(t) dt" /> に変数変換する場合は、<InlineMath math="\phi" /> が単調である必要はありません。
                </p>
                <p className="mt-4">
                    しかし、これを逆向きに利用して「積分の中に <InlineMath math="g(\psi(x)) \psi'(x)" /> のような塊を見つけて、新しい変数 <InlineMath math="u = \psi(x)" /> で置換する」という操作を行う場合、変換先の区間がただ一つに定まる必要から、関数の<strong>全単射性（すなわち狭義単調であること）</strong>が要求されるケースが多々あります。
                </p>
                <p className="mt-4">
                    また、広義積分（無限区間）において置換積分を行う場合は、端点の極限操作 <InlineMath math="\beta \to \infty" /> 等が置換した関数の極限と整合するか（たとえば <InlineMath math="\lim_{t \to \infty} \phi(t) = \infty" /> が成立するか）など、極限の追跡にさらなる注意を払う必要があります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§11.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>置換積分の公式</strong>は、「微分の連鎖律（チェーンルール）」と「微積分の第2基本定理（定積分の計算）」を結合することで厳密に証明される。</li>
                    <li>形式的な記号操作 <InlineMath math="dx = \phi'(t) dt" /> は、連続な導関数の存在という保証のもとに機能している。</li>
                    <li>証明の過程からわかるように、変数変換に関する途中の増減の揺れ（非単調性）は、積分の符号キャンセルの性質によって自動的に吸収される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
