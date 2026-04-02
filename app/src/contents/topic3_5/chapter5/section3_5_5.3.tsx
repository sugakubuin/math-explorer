import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EigenvalueEigenfunctionProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                シュトゥルム・リウヴィル作用素が自己共役であるという事実は、一連の非常に強力かつ体系的な性質を固有値と固有関数にもたらします。
                これらの性質は、複雑な偏微分方程式を級数展開によって解く際の論理的根拠となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有値の実数性と固有関数の直交性</h2>

            <p className="leading-relaxed">
                SL 作用素 <InlineMath math="L" /> の自己共役性から直接導かれる最も基本的な性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (固有値の実数性)">
                <p>
                    正則なシュトゥルム・リウヴィル問題のすべての固有値は実数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    固有値 <InlineMath math="\lambda" /> と対応する固有関数 <InlineMath math="\phi" /> に対して、自己共役作用素の性質 <InlineMath math="\langle L\phi, \phi \rangle_w = \langle \phi, L\phi \rangle_w" /> を用いる。
                    定義より <InlineMath math="L\phi = \lambda w \phi" /> なので、
                    <BlockMath math="\langle \lambda w \phi, \phi \rangle_w = \langle \phi, \lambda w \phi \rangle_w \implies \lambda \langle \phi, \phi \rangle_w = \bar{\lambda} \langle \phi, \phi \rangle_w" />
                    <InlineMath math="\phi \neq 0" /> より <InlineMath math="\lambda = \bar{\lambda}" /> となり、固有値の実数性が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 5.3-2 (固有関数の直交性)">
                <p>
                    異なる固有値 <InlineMath math="\lambda_m \neq \lambda_n" /> に対応する固有関数 <InlineMath math="\phi_m, \phi_n" /> は、重み <InlineMath math="w" /> 付きの内積に関して直交する：
                    <BlockMath math="\int_a^b \phi_m(x)\phi_n(x)w(x) dx = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="L\phi_m = \lambda_m w \phi_m, \ L\phi_n = \lambda_n w \phi_n" /> である。
                    自己共役性より <InlineMath math="\langle L\phi_m, \phi_n \rangle_w = \langle \phi_m, L\phi_n \rangle_w" /> なので、
                    <BlockMath math="\begin{aligned} \lambda_m \langle \phi_m, \phi_n \rangle_w &= \lambda_n \langle \phi_m, \phi_n \rangle_w \\ &\implies (\lambda_m - \lambda_n) \langle \phi_m, \phi_n \rangle_w = 0 \end{aligned}" />
                    <InlineMath math="\lambda_m \neq \lambda_n" /> より、<InlineMath math="\langle \phi_m, \phi_n \rangle_w = 0" /> が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 (三角関数の直交性の直接確認)">
                <p>
                    <InlineMath math="w(x)=1" /> の場合の固有関数 <InlineMath math="\phi_n(x) = \sin(n\pi x/L)" /> の直交性を計算で確認する。
                    <BlockMath math="\begin{aligned} &\int_0^L \sin\left(\frac{m\pi x}{L}\right) \sin\left(\frac{n\pi x}{L}\right) dx \\ &= \frac{1}{2} \int_0^L \left[ \cos\frac{(m-n)\pi x}{L} - \cos\frac{(m+n)\pi x}{L} \right] dx \\ &= 0 \quad (m \neq n) \end{aligned}" />
                    となり、一般理論（Theorem 5.3-2）の通りの結果が得られる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有値の定性的性質</h2>

            <p className="leading-relaxed">
                固有値は離散的であり、かつ固有関数の振動の激しさと密接に関係しています。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-3 (固有値の単調増加性と無限性)">
                <p>
                    正則な SL 問題の固有値を <InlineMath math="\lambda_1 < \lambda_2 < \lambda_3 < \dots" /> と並べることができ、
                    その極限は <InlineMath math="\lambda_n \to \infty \ (n \to \infty)" /> となる。また、すべての固有値は単純（重複度が 1）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    固有値の単調増加性と無限性は、微分作用素のコンパクト性や変分学的なレイリー商の評価から導かれる。
                    特に、固有関数の零点（節）がインデックス <InlineMath math="n" /> とともに増えていく「節点定理」を用いることで、
                    より高いモードほど曲率が大きくなり、対応する固有値も増大することが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="固有関数の節（Node）の数">
                <p>
                    固有関数 <InlineMath math="\phi_n(x)" /> は、区間 <InlineMath math="(a, b)" /> の内部でちょうど <InlineMath math="n-1" /> 個の零点（<b>節</b>）を持つ。
                    これは物理的には、より高いエネルギー（高い固有値）の状態ほど、より複雑な定在波のパターンを生み出すことに対応している。
                    たとえば、<InlineMath math="\sin(n\pi x/L)" /> は <InlineMath math="n" /> が増えるほど「波」の数が増え、内部の零点の数も増えていくことからも理解できる。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>SL 問題の固有値はすべて実数であり、単調に増加して無限大に発散する。</li>
                    <li>異なる固有値に対応する固有関数は、重み付き内積において互いに直交する。</li>
                    <li><InlineMath math="n" /> 番目の固有関数 <InlineMath math="\phi_n" /> は、領域内部にちょうど <InlineMath math="n-1" /> 個の節（零点）を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
