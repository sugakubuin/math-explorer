import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeakConvergenceAndStrongConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「空間の距離（ノルム）がだんだん縮まってゼロに近づく」という素朴な収束を、関数解析では「強収束」と呼びます。しかし無限次元空間には、距離は全く縮まっていないのに、観測機（汎関数）を通して見るとゼロに収束しているように見える「弱収束」という現象が存在します。この節では、双対空間の存在がもたらすこの新しい収束の概念を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱収束の定義と例</h2>

            <p>
                弱収束は、「あらゆる角度から観測して確実に目標の点に見えるなら、それは目標の点に収束したと見なそう」という双対性に基づく考え方です。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (弱収束)">
                <p>
                    <InlineMath math="X" /> をノルム空間とする。<InlineMath math="X" /> 内の点列 <InlineMath math="(x_n)" /> がベクトル <InlineMath math="x \in X" /> に<b>弱収束（weak convergence）</b>するとは、双対空間に属する任意の有界線形汎関数 <InlineMath math="f \in X^*" /> を各点に適用したとき、スカラーの列として
                </p>
                <BlockMath math="\lim_{n \to \infty} f(x_n) = f(x)" />
                <p>
                    が成り立つことである。弱収束は <InlineMath math="x_n \xrightarrow{w} x" /> と表記する。
                </p>
                <p>
                    ※それに対し、通常のノルムの意味での収束 <InlineMath math="\|x_n - x\| \to 0" /> は<b>強収束（strong convergence）</b>（またはノルム収束）と呼び、<InlineMath math="x_n \xrightarrow{s} x" /> や単に <InlineMath math="x_n \to x" /> と表記する。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.3-1">
                <p>
                    強収束する点列は、必ず同じ極限に弱収束する。（強収束 <InlineMath math="\implies" /> 弱収束）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x_n \to x" /> （強収束）とする。<InlineMath math="f \in X^*" /> を任意の有界線形汎関数とすると、有界性から
                </p>
                <BlockMath math="|f(x_n) - f(x)| = |f(x_n - x)| \leq \|f\| \|x_n - x\|" />
                <p>
                    が成り立つ。<InlineMath math="n \to \infty" /> とすると右辺の <InlineMath math="\|x_n - x\|" /> が <InlineMath math="0" /> に収束するため、左辺のスカラー値の差も <InlineMath math="0" /> に収束する。よって <InlineMath math="f(x_n) \to f(x)" /> であり弱収束が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                重要なのは「Proposition 5.3-1 の逆は一般に成り立たない」ということです。無限次元特有の「弱収束するのに強収束しない」劇的な具体例を見てみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 5.3-1 (<InlineMath math="\ell^2" /> の標準基底の弱収束)</span>}>
                <p>
                    数列空間 <InlineMath math="\ell^2" /> において、第 <InlineMath math="n" /> 成分だけが <InlineMath math="1" /> で他が <InlineMath math="0" /> の標準基底列 <InlineMath math="e_n" /> を考える。
                </p>
                <p>
                    <InlineMath math="(e_1, e_2, e_3 \ldots)" />
                </p>
                <p>
                    異なる <InlineMath math="n, m" /> に対して <InlineMath math="\|e_n - e_m\|^2 = 1^2 + (-1)^2 = 2" /> であるから、<InlineMath math="\|e_n - e_m\| = \sqrt{2}" />。列の間に一定の距離が永遠に保たれるためコーシー列にならず、この点列はどの点へも強収束しない。
                </p>
                <p>
                    しかし弱収束の観点からはどうだろうか。任意の <InlineMath math="f \in (\ell^2)^*" /> は、<InlineMath math="y \in \ell^2" /> を用いて <InlineMath math="f(x) = \sum x_k y_k" /> と表される（Theorem 5.2-1）。この <InlineMath math="f" /> に先ほどの <InlineMath math="e_n" /> を代入すると、第 <InlineMath math="n" /> 成分のみが抽出されて <InlineMath math="f(e_n) = y_n" /> となる。
                </p>
                <p>
                    <InlineMath math="y \in \ell^2" /> ということは級数 <InlineMath math="\sum |y_n|^2" /> が有限値に収束しているため、その各項 <InlineMath math="y_n" /> は <InlineMath math="n \to \infty" /> で必ず <InlineMath math="0" /> に収束しなければならない。よって、どんな <InlineMath math="f" /> を持ってきても
                </p>
                <BlockMath math="\lim_{n \to \infty} f(e_n) = \lim_{n \to \infty} y_n = 0 = f(0)" />
                <p>
                    となる。すなわちこの基底列は、原点へ「弱収束（<InlineMath math="e_n \xrightarrow{w} 0" />）」しているのである！
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱収束の基本性質</h2>

            <p>
                弱収束は「どこから見てもゼロに行くなら、全体としても暴走はしていないだろう」という安定性を備えています。これを開写像定理と並ぶ基本定理である一様有界性原理（Theorem 4.3-2）を用いてスマートに証明しましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-2 (ノルムの一様有界性)">
                <p>
                    <InlineMath math="X" /> がバナッハ空間であり、<InlineMath math="x_n \xrightarrow{w} x" /> と弱収束しているならば、元の点列のノルム <InlineMath math="\|x_n\|" /> は一様に有界である（ある定数 <InlineMath math="M" /> が存在してすべての <InlineMath math="n" /> で <InlineMath math="\|x_n\| \leq M" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §5.1 で導入した第二双対空間への標準埋め込み <InlineMath math="J : X \to X^{**}" /> を用いる。各 <InlineMath math="x_n" /> を <InlineMath math="J_n = J(x_n)" /> という <InlineMath math="X^*" /> 上の汎関数と見なす。<InlineMath math="J(x)" /> の定義は <InlineMath math="J_n(f) = f(x_n)" /> である。
                </p>
                <p>
                    弱収束の定義より、任意の固定された <InlineMath math="f \in X^*" /> に対して <InlineMath math="f(x_n) \to f(x)" /> となる。収束する実数列は有界であるから、各 <InlineMath math="f" /> において <InlineMath math="|J_n(f)| = |f(x_n)| \leq C_f" /> となる（各点有界性）。
                </p>
                <p>
                    <InlineMath math="X^*" /> はバナッハ空間（Proposition 5.1-1）なので、その上の作用素の族 <InlineMath math="\{J_n\}" /> に対して一様有界性定理（Theorem 4.3-2）が適用できる。これにより、「各点での有界性」が「作用素ノルムそのものの一様有界性」へと昇格し、定数 <InlineMath math="M" /> によって <InlineMath math="\|J_n\|_{X^{**}} \leq M" /> となる。
                </p>
                <p>
                    標準埋め込みは等長写像（<InlineMath math="\|J_n\| = \|x_n\|_X" />、Proposition 5.1-2）であるため、すなわち元のベクトル列のノルムも <InlineMath math="\|x_n\|_X \leq M" /> となり、一様有界性が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.3-2 (<InlineMath math="L^2" /> おける波の弱収束)</span>}>
                <p>
                    区間 <InlineMath math="[0,1]" /> 上の関数空間 <InlineMath math="L^2" /> において、正弦波の列 <InlineMath math="f_n(x) = \sqrt{2}\sin(n\pi x)" /> （<InlineMath math="n \geq 1" />）を考える。
                </p>
                <p>
                    フーリエ解析でよく知られるように、この列は互いに直交しておりノルムが <InlineMath math="1" />（<InlineMath math="\|f_n\|_2 = 1" />）の基底をなす。Example 5.3-1 の <InlineMath math="\ell^2" /> の標準基底の議論と全く同じ理由で、任意の測度・関数ベクトルで「観測」すると極限は <InlineMath math="0" /> になるため、<InlineMath math="f_n \xrightarrow{w} 0" /> と原点に弱収束する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="弱収束の物理的・工学的意味">
                <p>
                    「目で見える波（関数列）の形自体は激しく振動して決してゼロにはならないのに、任意の観測機（汎関数）を通すとゼロに見える」というのは不思議かもしれません。
                </p>
                <p>
                    この物理的意味は、「振動が細かくなりすぎると、どんなに高精度なマクロな測定器（積分器）を用いても、プラスとマイナスの振動が局所的にお互いに打ち消し合ってしまい、平均化されて実質ゼロとしてしか観測できなくなる」ということです。「細かい波打ち（高周波成分）が無限遠の彼方に飛び去ってしまい、目に見える低周波の世界には何も残らない」というこの現象は、マクロな不可逆性への数学的根拠ともなっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>弱収束とは、空間の任意の有界線形汎関数（観測機）を通したスカラー値が収束することを意味する（Definition 5.3-1）。</li>
                    <li>ノルムの意味での強収束は常に弱収束を含意するが、無限次元特有の現象として、強収束しない直交基底の列などが原点へ弱収束する（Example 5.3-1）。</li>
                    <li>双対性と一様有界性定理の連携により、弱収束する点列はたとえ強収束しなくともノルムの大きさ全体としては一定範囲に収まっていることが保証される（Proposition 5.3-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
