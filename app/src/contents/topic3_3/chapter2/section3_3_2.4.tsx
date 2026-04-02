import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceConcepts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                測度論では、関数が「すべての点で収束する（各点収束）」という条件は、しばしば強すぎます。
                積分の値に影響を与えない「測度 0 の集合（零集合）」の上での不規則な挙動を許容する<b>概収束</b>や、集合全体の測度の減少を捉える<b>測度収束</b>といった概念が重要になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">概収束 (a.e. 収束)</h2>

            <p>
                「ほとんど至る所（almost everywhere, a.e.）」という言葉は、測度論において最も頻出する表現の1つです。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (概収束)">
                <p>
                    可測関数列 <InlineMath math="\{f_n\}" /> が関数 <InlineMath math="f" /> に<b>ほとんど至る所収束する</b> (converge almost everywhere) とは、
                    <BlockMath math="\mu(\{x \in X \mid f_n(x) \not\to f(x)\}) = 0" />
                    が成り立つことをいう。これを <InlineMath math="f_n \to f \text{ a.e.}" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 (冪関数の概収束)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> 上のルベーグ測度において、関数列 <InlineMath math="f_n(x) = x^n" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li><InlineMath math="x \in [0, 1)" /> のとき、<InlineMath math="f_n(x) \to 0" /> である。</li>
                    <li><InlineMath math="x = 1" /> のとき、<InlineMath math="f_n(1) = 1 \to 1" /> である。</li>
                </ul>
                <p className="mt-4">
                    収束先が 0 でない点は <InlineMath math="\{1\}" /> という 1 点のみであり、そのルベーグ測度は 0 です。したがって、<InlineMath math="f_n" /> は定数関数 <InlineMath math="f(x) = 0" /> に<b>概収束します</b>。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="a.e. の直感的な意味">
                <p>
                    これは「収束しない点の集合がゴミ（測度 0）のように小さい」ことを意味します。
                    例えば、有理数全体の上で発散していても、実数全体のルベーグ測度では 0 なので、無理数全体の上で収束していているなら、その関数は a.e. で収束しているとみなせます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測度収束</h2>

            <p>
                概収束が「各点での挙動」に注目するのに対し、「収束しない部分のサイズ（測度）」に注目するのが測度収束です。
            </p>

            <ContentBox type="definition" title="Definition 2.4-2 (測度収束)">
                <p>
                    可測関数列 <InlineMath math="\{f_n\}" /> が関数 <InlineMath math="f" /> に<b>測度収束する</b> (converge in measure) とは、任意の <InlineMath math="\varepsilon > 0" /> に対して、
                    <BlockMath math="\lim_{n\to\infty} \mu(\{x \in X \mid |f_n(x) - f(x)| > \varepsilon\}) = 0" />
                    が成り立つことをいう。これを <InlineMath math="f_n \xrightarrow{\mu} f" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-2 (測度収束のイメージ)">
                <p>
                    関数列 <InlineMath math="f_n(x) = \frac{1}{n}" /> （定数関数）を考える。
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="n > 1/\varepsilon" /> であれば常に <InlineMath math="|f_n(x) - 0| < \varepsilon" /> となる。
                </p>
                <p className="mt-4">
                    したがって、集合 <InlineMath math="\{x \mid |f_n(x) - 0| \geq \varepsilon\}" /> は <InlineMath math="n" /> が十分大きければ空集合となり、その測度は 0 に収束します。これは一様収束（より強く各点収束）から測度収束が導かれる簡単な例です。
                </p>
            </ContentBox>

            <p>
                これらの収束概念には、測度空間が有限である場合に特別な関係があります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (概収束と測度収束の関係)">
                <p>
                    測度空間が有限測度空間（<InlineMath math="\mu(X) < \infty" />）であるとき、概収束から測度収束が導かれる。
                </p>
                <BlockMath math="f_n \to f \text{ a.e.} \implies f_n \xrightarrow{\mu} f" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、集合 <InlineMath math="E_n = \{x \in X \mid |f_n(x) - f(x)| > \varepsilon\}" /> とおく。
                    さらに <InlineMath math="A_k = \bigcup_{n=k}^\infty E_n" /> とおくと、<InlineMath math="A_1 \supset A_2 \supset \cdots" /> という単調減少な集合列が得られる。
                </p>
                <p className="mt-4">
                    <InlineMath math="f_n \to f \text{ a.e.}" /> より、共通部分 <InlineMath math="\bigcap_{k=1}^\infty A_k" /> の点は a.e. で収束しない点のみであるため、<InlineMath math="\mu(\bigcap A_k) = 0" /> である。
                    ここで測度の連続性（測度空間が有限であることを利用）より、
                    <BlockMath math="\lim_{k\to\infty} \mu(A_k) = \mu\left(\bigcap_{k=1}^\infty A_k\right) = 0" />
                    が成り立つ。<InlineMath math="E_k \subset A_k" /> であるため、<InlineMath math="\mu(E_k) \leq \mu(A_k) \to 0" /> となり、測度収束が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                しかし、この逆や、無限測度空間（例：実数直線全体）では一般に成り立ちません。
            </p>

            <ContentBox type="example" title="Example 2.4-3 (移動する突起：測度収束するが各点収束しない例)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> における以下の関数列を考える。
                </p>
                <BlockMath math="f_1 = \mathbf{1}_{[0, 1]}, \quad f_2 = \mathbf{1}_{[0, 1/2]}, \quad f_3 = \mathbf{1}_{[1/2, 1]}, \quad f_4 = \mathbf{1}_{[0, 1/4]}, \quad \ldots" />
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>各 <InlineMath math="f_n" /> の測度（台の長さ）は順次小さくなるため、<InlineMath math="f_n \xrightarrow{\lambda} 0" /> である。</li>
                    <li>しかし、どの点 <InlineMath math="x" /> を取っても「高さ 1 の突起」が無限に回ってきて通過するため、<InlineMath math="f_n(x) \not\to 0" /> である。</li>
                </ul>
                <p className="mt-4">
                    この例は、全体の測度が 0 に収束していても、各点レベルでは激しく変動し続け得ることを示しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>概収束</b>は測度 0 の例外を認める各点収束である。</li>
                    <li><b>測度収束</b>は、誤差が一定以上の集合のサイズが 0 に消えていく収束である。</li>
                    <li><b>有限測度空間</b>では、概収束から測度収束が導かれる。</li>
                    <li>「移動する突起」の例のように、測度収束しても各点では収束しない場合がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
