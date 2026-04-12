import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProximalOperatorDefinitionAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、非平滑な凸最適化問題を解くための強力なツールである<b>近接作用素（proximal operator）</b>について学びます。近接作用素は、関数を最小化しようとする力と、現在の点から離れすぎないようにする力とのバランスを取る操作であり、多くの最適化アルゴリズムの基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近接作用素の定義</h2>

            <p>
                まずは、近接作用素とそれに関連するモロー包絡の定義を与えます。これらは、インフィマル畳み込み（Chapter 4）の概念と深く結びついています。
            </p>

            <ContentBox type="definition" title={<span>Definition 7.1-1 (<b>近接作用素</b>)</span>}>
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> に対して、点 <InlineMath math="x \in \mathbb{R}^n" /> における近接作用素 <InlineMath math="\mathrm{prox}_f(x)" /> を次のように定義する。
                </p>
                <BlockMath math="\mathrm{prox}_f(x) = \arg\min_y \left\{ f(y) + \frac{1}{2}\|y - x\|^2 \right\}" />
            </ContentBox>

            <p>
                直感的には、<InlineMath math="\mathrm{prox}_f(x)" /> は <InlineMath math="f(y)" /> の値を小さくしつつ、基準点 <InlineMath math="x" /> からの距離の2乗ペナルティ <InlineMath math="\frac{1}{2}\|y - x\|^2" /> を最小化する点を与えます。これに対応する最小値を<b>モロー包絡</b>と呼びます。
            </p>

            <ContentBox type="definition" title={<span>Definition 7.1-2 (<b>モロー包絡</b>)</span>}>
                <p>
                    関数 <InlineMath math="f" /> のモロー包絡（Moreau envelope） <InlineMath math="M_f(x)" /> を次のように定義する。
                </p>
                <BlockMath math="M_f(x) = \min_y \left\{ f(y) + \frac{1}{2}\|y - x\|^2 \right\}" />
                <p>
                    これは <InlineMath math="f" /> と <InlineMath math="\frac{1}{2}\|\cdot\|^2" /> のインフィマル畳み込み <InlineMath math="\left( f \Box \frac{1}{2}\|\cdot\|^2 \right)(x)" /> に等しい。
                </p>
            </ContentBox>

            <p>
                近接作用素が常に一意な値を持つか（つまり、<InlineMath math="\arg\min" /> が単集合であるか）は、<InlineMath math="f" /> の性質に依存します。凸解析の枠組みでは、関数が閉真凸関数であれば、この一意性が保証されます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1">
                <p>
                    <InlineMath math="f" /> が閉真凸関数ならば、各 <InlineMath math="x \in \mathbb{R}^n" /> に対して近接作用素 <InlineMath math="\mathrm{prox}_f(x)" /> は一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    目的関数を <InlineMath math="g(y) = f(y) + \frac{1}{2}\|y - x\|^2" /> と置く。<InlineMath math="f" /> が閉真凸関数であり、<InlineMath math="\frac{1}{2}\|y - x\|^2" /> はパラメータ <InlineMath math="m = 1" /> の強凸関数であるため、それらの和である <InlineMath math="g" /> も強凸な閉真凸関数となる。
                </p>
                <p>
                    Theorem 2.6-1 より、真の閉強凸関数は一意の最小値を持つ。したがって、<InlineMath math="\arg\min_y g(y)" /> は一意に存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                それでは、具体的な関数に対して近接作用素を計算してみましょう。絶対値関数の近接作用素は「軟閾値作用素（soft-thresholding operator）」として知られ、スパースモデリングなどで極めて重要な役割を果たします。
            </p>

            <ContentBox type="example" title={<span>Example 7.1-1 (<InlineMath math="f(x) = \lambda|x|" /> の近接作用素)</span>}>
                <p>
                    1変数関数 <InlineMath math="f(x) = \lambda|x|" /> （<InlineMath math="\lambda > 0" />）を考える。このとき、近接作用素は軟閾値作用素となる。
                </p>
                <BlockMath math="\mathrm{prox}_{\lambda|\cdot|}(x) = \mathrm{sign}(x) \max(|x| - \lambda, 0)" />
                <p>
                    例えば、<InlineMath math="x = 3" />、<InlineMath math="\lambda = 1" /> のときを計算すると以下のようになる。
                </p>
                <BlockMath math="\mathrm{prox}_{|\cdot|}(3) = \mathrm{sign}(3) \max(3 - 1, 0) = 1 \cdot 2 = 2"
                />
                <p>
                    これは、<InlineMath math="|y| + \frac{1}{2}(y - 3)^2" /> を最小化する <InlineMath math="y" /> が <InlineMath math="2" /> であることを意味している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">近接作用素の基本性質</h2>

            <p>
                次に、近接作用素の特徴づけと、アルゴリズムの収束解析において非常に重要となる「非拡大性（nonexpansiveness）」について解説します。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-2">
                <p>
                    <InlineMath math="p = \mathrm{prox}_f(x)" /> であることと、<InlineMath math="x - p \in \partial f(p)" /> が成り立つことは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p" /> が <InlineMath math="f(y) + \frac{1}{2}\|y - x\|^2" /> の最小値を与えるための必要十分条件は、フェルマの規則（Theorem 3.5-1）より、劣微分に <InlineMath math="0" /> が含まれることである。和の公式（Theorem 3.3-1）を用いると、
                </p>
                <BlockMath math="0 \in \partial f(p) + (p - x)" />
                <p>
                    となる。これを整理すると <InlineMath math="x - p \in \partial f(p)" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この特徴づけを用いることで、近接作用素が非拡大写像（距離を広げない写像）であることが証明できます。この性質により、近接作用素を繰り返し適用するアルゴリズムの安定性が保証されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (非拡大性)">
                <p>
                    <InlineMath math="f" /> が閉真凸関数であるとき、近接作用素 <InlineMath math="\mathrm{prox}_f" /> は非拡大写像である。すなわち、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> に対して次が成り立つ。
                </p>
                <BlockMath math="\|\mathrm{prox}_f(x) - \mathrm{prox}_f(y)\| \leq \|x - y\|" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p = \mathrm{prox}_f(x)" />、<InlineMath math="q = \mathrm{prox}_f(y)" /> と置く。Proposition 7.1-2 より、
                </p>
                <BlockMath math="x - p \in \partial f(p), \quad y - q \in \partial f(q)" />
                <p>
                    である。劣微分 <InlineMath math="\partial f" /> は単調作用素（Proposition 6.1-1）であるため、
                </p>
                <BlockMath math="\langle (x - p) - (y - q), p - q \rangle \geq 0" />
                <p>
                    が成り立つ。これを展開して整理すると、
                </p>
                <BlockMath math="\begin{aligned} &\langle x - y, p - q \rangle - \|p - q\|^2 \geq 0 \\ &\quad \implies \|p - q\|^2 \leq \langle x - y, p - q \rangle \end{aligned}" />
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="\langle x - y, p - q \rangle \leq \|x - y\| \|p - q\|" /> を用いると、
                </p>
                <BlockMath math="\|p - q\|^2 \leq \|x - y\| \|p - q\|" />
                <p>
                    両辺を <InlineMath math="\|p - q\|" /> で割る（<InlineMath math="p \neq q" /> の場合）ことで、<InlineMath math="\|p - q\| \leq \|x - y\|" /> を得る。これは主張の不等式に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                実際に、具体例を用いてこの非拡大性が成り立っていることを数値的に確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-2 (非拡大性の数値確認)">
                <p>
                    Example 7.1-1 で扱った <InlineMath math="f(x) = |x|" /> の近接作用素 <InlineMath math="\mathrm{prox}_f(x)" /> について確認する。
                </p>
                <p>
                    <InlineMath math="x = 3" /> のとき、<InlineMath math="\mathrm{prox}_f(3) = 2" /> であった。
                    また、<InlineMath math="y = 0.5" /> のとき、<InlineMath math="\mathrm{prox}_f(0.5) = \mathrm{sign}(0.5)\max(0.5 - 1, 0) = 0" /> である。
                </p>
                <p>
                    この2点間の距離を比較すると、
                </p>
                <BlockMath math="\|\mathrm{prox}_f(3) - \mathrm{prox}_f(0.5)\| = |2 - 0| = 2" />
                <BlockMath math="\|3 - 0.5\| = 2.5" />
                <p>
                    となり、<InlineMath math="2 \leq 2.5" /> であることから、確かに距離が縮んで（拡大せずに）いることが確認できる。
                </p>
            </ContentBox>

            <p>
                最後に、第6章で学んだ単調作用素のレゾルベントと、近接作用素の深い関係について触れておきます。
            </p>

            <ContentBox type="remark" title="レゾルベントとの関係">
                <p>
                    Proposition 7.1-2 の条件 <InlineMath math="x - p \in \partial f(p)" /> は、<InlineMath math="x \in p + \partial f(p) = (I + \partial f)(p)" /> と書き換えることができます。
                    これより、<InlineMath math="p = (I + \partial f)^{-1}(x)" /> となります。
                    すなわち、近接作用素 <InlineMath math="\mathrm{prox}_f" /> は、極大単調作用素 <InlineMath math="\partial f" /> に対する<b>レゾルベント</b> <InlineMath math="J_{\partial f}" /> （Definition 6.4-2）に他なりません。
                    この関係により、近接作用素を用いたアルゴリズムの解析は、極大単調作用素の理論（関数解析 4-1 など）へと自然に拡張されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>近接作用素 <InlineMath math="\mathrm{prox}_f(x)" /> は、<InlineMath math="f(y) + \frac{1}{2}\|y-x\|^2" /> を最小化する <InlineMath math="y" /> として定義される。</li>
                    <li>閉真凸関数に対する近接作用素は一意に存在し、非拡大写像である。</li>
                    <li><InlineMath math="L_1" /> ノルムなどの近接作用素は軟閾値作用素となり、閉形式で書ける場合がある。</li>
                    <li>近接作用素は劣微分 <InlineMath math="\partial f" /> のレゾルベントと一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
