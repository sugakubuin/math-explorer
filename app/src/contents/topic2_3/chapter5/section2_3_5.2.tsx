import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeineCantorTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節 §5.1 で見たように、開区間や非有界な区間上では、連続関数であっても「傾きが無限に急になる」ような場所によって一様連続性が壊れることがありました。
                しかし、定義域を「有界な閉区間」に限定した場合、関数は決して発散せず、連続関数は自動的に一様連続になるという強力な定理が成り立ちます。これが<strong>ハイネ・カントールの定理</strong>です。
                最大値・最小値定理（Theorem 4.4-1）と並んで、閉区間上の連続関数の大域的性質を決定づける最重要定理の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハイネ・カントールの定理</h2>

            <ContentBox type="theorem" title="Theorem 5.2-1 (ハイネ・カントールの定理)">
                <p>
                    関数 <InlineMath math="f" /> が有界な閉区間 <InlineMath math="[a, b]" /> 上で連続であるならば、<InlineMath math="f" /> は <InlineMath math="[a, b]" /> 上で一様連続である。
                </p>
            </ContentBox>

            <p>
                この定理の証明にもさまざまなアプローチ（例えば各点の近傍を用いた開被覆の有限部分被覆を用いる方法＝コンパクト性からのアプローチなど）がありますが、ここではこれまでの流れを踏襲し、点列を用いた「ボルツァーノ・ワイエルシュトラスの定理」による背理法の証明を紹介します。
            </p>

            <ContentBox type="proof" title="Proof (ボルツァーノ・ワイエルシュトラスの定理を用いた証明)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上の連続関数 <InlineMath math="f" /> が、一様連続でないと仮定して矛盾を導く（背理法）。
                </p>
                <p className="mt-4">
                    一様連続でないということは、「ある <InlineMath math="\varepsilon_0 > 0" /> が存在して、どんなに小さな <InlineMath math="\delta > 0" /> を選んでも、条件を満たさない点対 <InlineMath math="x, y" /> が見つかってしまう」ということである。
                    そこで、<InlineMath math="\delta" /> として <InlineMath math="\frac{1}{n} \,\, (n = 1, 2, \dots)" /> という数列を選ぶと、各 <InlineMath math="n" /> に対して区間 <InlineMath math="[a, b]" /> 内の点 <InlineMath math="x_n, y_n" /> が存在して、
                </p>
                <BlockMath math="|x_n - y_n| < \frac{1}{n} \quad \text{かつ} \quad |f(x_n) - f(y_n)| \geq \varepsilon_0" />
                <p>
                    が成り立つ。
                </p>
                <p className="mt-4">
                    ここで、点列 <InlineMath math="\{x_n\}" /> は有界な閉区間 <InlineMath math="[a, b]" /> 内の列であるため、ボルツァーノ・ワイエルシュトラスの定理（Theorem 3.2-1）より、収束する部分列 <InlineMath math="\{x_{n_k}\}" /> を持つ。その極限を <InlineMath math="c" /> とおくと、閉区間であるから <InlineMath math="c \in [a, b]" /> である。<br />
                    すなわち、<InlineMath math="k \to \infty" /> のとき <InlineMath math="x_{n_k} \to c" />。
                </p>
                <p className="mt-4">
                    対応するもう一つの点列 <InlineMath math="\{y_{n_k}\}" /> の極限を考えよう。仮定から <InlineMath math="|x_{n_k} - y_{n_k}| < \frac{1}{n_k} \to 0" /> であるため、<InlineMath math="y_{n_k}" /> は <InlineMath math="x_{n_k}" /> に引きずられる形で同じ極限 <InlineMath math="c" /> に収束せざるを得ない。
                    <br />
                    すなわち、<InlineMath math="k \to \infty" /> のとき <InlineMath math="y_{n_k} \to c" /> となる。
                </p>
                <p className="mt-4">
                    関数 <InlineMath math="f" /> は点 <InlineMath math="c \in [a, b]" /> において<strong>連続</strong>である。したがって、数列の極限と関数の極限が交換でき、
                </p>
                <BlockMath math="\lim_{k \to \infty} f(x_{n_k}) = f(c)" />
                <BlockMath math="\lim_{k \to \infty} f(y_{n_k}) = f(c)" />
                <p>
                    が共に成り立つ。
                </p>
                <p className="mt-4">
                    極限の性質を用いて、<InlineMath math="f(x_{n_k})" /> と <InlineMath math="f(y_{n_k})" /> の差の極限を計算すると、
                </p>
                <BlockMath math="\lim_{k \to \infty} |f(x_{n_k}) - f(y_{n_k})| = |f(c) - f(c)| = 0" />
                <p>
                    となる。しかしこれは、点列を選んだ当初の仮定
                </p>
                <BlockMath math="|f(x_{n_k}) - f(y_{n_k})| \geq \varepsilon_0 > 0 \quad (\text{すべての } k \text{ について})" />
                <p>
                    と明らかに矛盾する。
                </p>
                <p className="mt-4">
                    したがって、最初の「一様連続でない」という仮定が誤りであり、有界閉区間上の連続関数は必ず一様連続であることが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明の手順を眺めると、「連続性が局所的な性質に過ぎなくとも、閉区間という『逃げ場のない（コンパクトな）』空間の上に閉じ込められている限り、局所的な振る舞いが強制的に大域的な一様性へと結びつけられる」という構造が見て取れます。
            </p>

            <ContentBox type="column" title="コラム：コンパクト性と開被覆">
                <p>
                    現代数学、特に位相空間論の言葉を使えば、ハイネ・カントールの定理は「コンパクト空間から距離空間への連続写像は一様連続である」と一般化されます。
                    実数上の有界閉区間 <InlineMath math="[a, b]" /> が「コンパクト（compact）」であることの証明には、ハイネ・ボレルの被覆定理（任意の開被覆は有限部分被覆を持つ）が用いられます。
                </p>
                <p className="mt-2">
                    被覆を用いた一様連続性の証明の直感的なイメージは次のようなものです：<br />
                    各点 <InlineMath math="x" /> で連続であることから、任意の <InlineMath math="\varepsilon" /> に対して点ごとに安全な半径 <InlineMath math="\delta_x" /> の「傘」を広げることができます。閉区間はコンパクトなので、無数にある傘の中から「有限個の傘」だけを選んで区間全体を覆い尽くすことができます。傘が有限個しかないので、その中で「一番小さな傘の半径」を選ぶことができ（有限個の正の数の最小値は必ず正）、それが区間全体で通用する共通の <InlineMath math="\delta" /> となる、という魔法のような論法です。無限を有限に帰着させるコンパクト性の真骨頂と言えます。
                </p>
            </ContentBox>

            <p>
                ハイネ・カントールの定理によって保証される「一様連続性」は、のちに Chapter 9 で学ぶリーマン積分の存在定理（連続関数は積分可能であること）を証明する際の決定的な道具となります。
                次節 §5.3 では、この一様連続性が「関数の定義域を拡張する（限界を超える）」際にどう役立つかを見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ハイネ・カントールの定理は「有界閉区間上の連続関数は自動的に一様連続である」ことを保証する。</li>
                    <li>開区間や非有界区間では成り立たない（§5.1の反例参照）。</li>
                    <li>証明には「ボルツァーノ・ワイエルシュトラスの定理（点列アプローチ）」や「ハイネ・ボレルの被覆定理（コンパクト性アプローチ）」など、実数の完備性の本質を突く手法が使われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
