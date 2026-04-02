import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniformContinuityOnCompactSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「連続であること」と「一様連続であること」の間には、通常大きな隔たりがあります。
                しかし、定義域がコンパクトな距離空間であれば、連続性は自動的に一様連続性を引き起こします。
                この結果は、積分論（リーマン落分の可積分性など）において決定的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様連続性の復習</h2>

            <p>
                まず、距離空間における一様連続性の定義を思い出しましょう。
            </p>

            <ContentBox type="definition" title="Definition 7.6-1 (一様連続性)">
                <p>
                    2つの距離空間 <InlineMath math="(X, d_X), (Y, d_Y)" /> の間の写像 <InlineMath math="f: X \to Y" /> が<strong>一様連続 (Uniformly continuous)</strong> であるとは、
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、<strong><InlineMath math="x" /> に依存しない</strong> <InlineMath math="\delta > 0" /> が存在して、
                    <BlockMath math="d_X(x_1, x_2) < \delta \implies d_Y(f(x_1), f(x_2)) < \varepsilon" />
                    が任意の <InlineMath math="x_1, x_2 \in X" /> について成り立つことをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                通常の連続性では、点 <InlineMath math="x" /> ごとに適切な <InlineMath math="\delta" /> を選ぶ必要がありますが、一様連続性では「空間全体で通用する単一の <InlineMath math="\delta" />」が取れることを要求しています。
            </p>

            <ContentBox type="example" title="Example 7.6-1 (一様連続な関数の例)">
                <p>
                    <InlineMath math="\mathbb{R}" /> 上の関数 <InlineMath math="f(x) = ax + b" /> (一次関数) は一様連続です。
                </p>
                <p className="mt-2 text-sm">
                    実際、任意の <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="\delta = \varepsilon / |a|" /> とおけば、
                    <InlineMath math="|x_1 - x_2| < \delta" /> のとき
                    <BlockMath math="|f(x_1) - f(x_2)| = |a(x_1 - x_2)| < |a| \delta = \varepsilon" />
                    となり、この <InlineMath math="\delta" /> は位置 <InlineMath math="x" /> に依存しません。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.6-2 (連続だが一様連続でない例)">
                <p>
                    <InlineMath math="\mathbb{R}" /> 上の関数 <InlineMath math="f(x) = x^2" /> は連続ですが、一様連続ではありません。
                </p>
                <p className="mt-2 text-sm">
                    <InlineMath math="x" /> が大きくなるほど、同じ幅 <InlineMath math="\delta" /> に対する関数の変化が激しくなるためです。
                    例えば <InlineMath math="x_n = n, y_n = n + 1/n" /> とおくと、<InlineMath math="|x_n - y_n| \to 0" /> ですが、
                    <BlockMath math="|f(x_n) - f(y_n)| = |n^2 - (n + 1/n)^2| = |2 + 1/n^2| > 2" />
                    となり、どれほど <InlineMath math="\delta" /> を小さくしても、遠くの方で差を <InlineMath math="\varepsilon" /> 以下に抑えることができません。
                </p>
                <p className="mt-2">
                    しかし、<strong>定義域をコンパクトな閉区間 <InlineMath math="[a, b]" /> に制限すれば</strong>、ハイネ・カントールの定理により一様連続になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハイネ・カントールの定理</h2>

            <p>
                コンパクト性は、局所的な <InlineMath math="\delta" /> を大域的な <InlineMath math="\delta" /> へと結びつける架け橋となります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.6-1 (ハイネ・カントールの定理 / Heine-Cantor Theorem)">
                <p>
                    <InlineMath math="X" /> をコンパクト距離空間、<InlineMath math="Y" /> を距離空間とする。
                    連続写像 <InlineMath math="f: X \to Y" /> は一様連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法を用いる。
                    <InlineMath math="f" /> が一様連続でないと仮定すると、ある <InlineMath math="\varepsilon > 0" /> が存在して、
                    任意の <InlineMath math="\delta > 0" /> に対し、<InlineMath math="d_X(x, y) < \delta" /> であるが <InlineMath math="d_Y(f(x), f(y)) \ge \varepsilon" /> となるような点ペア <InlineMath math="(x, y)" /> が存在する。
                </p>
                <p className="mt-2">
                    特に、<InlineMath math="\delta = 1/n" /> (<InlineMath math="n = 1, 2, \dots" />) とおくと、各 <InlineMath math="n" /> に対し
                    <BlockMath math="d_X(x_n, y_n) < 1/n \quad \text{かつ} \quad d_Y(f(x_n), f(y_n)) \ge \varepsilon" />
                    を満たす点列 <InlineMath math="\{x_n\}, \{y_n\}" /> がとれる。
                </p>
                <p className="mt-2">
                    <InlineMath math="X" /> はコンパクト（したがって §7.5 より逐次コンパクト）なので、<InlineMath math="\{x_n\}" /> はある点 <InlineMath math="x^* \in X" /> に収束する部分列 <InlineMath math="\{x_{n_k}\}" /> を持つ。
                    このとき <InlineMath math="d_X(y_{n_k}, x^*) \le d_X(y_{n_k}, x_{n_k}) + d_X(x_{n_k}, x^*) \to 0" /> なので、<InlineMath math="\{y_{n_k}\}" /> も同じ点 <InlineMath math="x^*" /> に収束する。
                </p>
                <p className="mt-2">
                    <InlineMath math="f" /> は <InlineMath math="x^*" /> で連続なので、
                    <BlockMath math="f(x_{n_k}) \to f(x^*), \quad f(y_{n_k}) \to f(x^*)" />
                    が成り立つ。したがって <InlineMath math="d_Y(f(x_{n_k}), f(y_{n_k})) \to 0" /> となるはずだが、これは常に <InlineMath math="\ge \varepsilon" /> であるという仮定に矛盾する。
                    よって、<InlineMath math="f" /> は一様連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="積分論への応用">
                <p>
                    一様連続性は、解析学において「近似」を行う際に極めて重要です。
                    例えば、閉区間 <InlineMath math="[a, b]" /> 上の連続関数をリーマン和で近似する際、区間を十分に細かく区切れば、関数値の変動を全体として一定以下に抑えられることがこの定理によって保証されます。
                    もし一様連続でなければ、特定の場所でいくら細かく区切っても急激な変化を捉えきれない、という事態が起こり得ます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>一様連続</strong>：<InlineMath math="\delta" /> の選択が場所（点）に依存しない強力な連続性。</li>
                    <li><strong>ハイネ・カントールの定理</strong>：コンパクトな距離空間上の連続関数は、必ず一様連続になる。</li>
                    <li>コンパクト性は、局所的な情報を統合して「一様な（平等な）」評価を可能にする。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
