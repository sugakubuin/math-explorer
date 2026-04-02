import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfExpectation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数の「平均的な姿」を捉える概念が<b>期待値</b>です。
                初等的な確率論では、期待値は離散型なら「値と確率の積の和」、連続型なら「値と密度の積の積分」として別々に定義されました。
                現代的な確率論では、これらを<b>ルベーグ積分</b>という統一的な枠組みで定義します。
                本節では、期待値を測度論に基づいて厳密に構成する手順を確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">期待値の段階的構成</h2>

            <p className="leading-relaxed">
                ルベーグ積分の標準的な構成と同様に、単純関数から始めて段階的に定義を広げていきます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (単純確率変数の期待値)">
                <p>
                    値域が有限個の実数 <InlineMath math="c_1, \ldots, c_n" /> である確率変数 <InlineMath math="X" /> （単純確率変数）が、
                    <BlockMath math="X(\omega) = \sum_{k=1}^n c_k 1_{A_k}(\omega)" />
                    と表されるとき（ここで <InlineMath math="\{A_k\}" /> は標本空間の排反な分割）、その<b>期待値</b>を次のように定義する：
                    <BlockMath math="E[X] = \sum_{k=1}^n c_k P(A_k)" />
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-2 (非負確率変数の期待値)">
                <p>
                    非負の確率変数 <InlineMath math="X \geq 0" /> （<InlineMath math="X \in \mathcal{F}" />）に対して、その期待値を次のように定義する。
                    <BlockMath math="E[X] = \sup \{ E[Y] \mid 0 \leq Y \leq X, \, Y \text{ は単純確率変数} \}" />
                    値は <InlineMath math="+\infty" /> になることもある。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-3 (一般の確率変数の期待値)">
                <p>
                    一般の可測関数である確率変数 <InlineMath math="X" /> に対して、正の部分 <InlineMath math="X^+ = \max(X, 0)" /> と負の部分 <InlineMath math="X^- = \max(-X, 0)" /> に分解する。
                    <InlineMath math="E[X^+]" /> または <InlineMath math="E[X^-]" /> の少なくとも一方が有限であるとき、期待値を
                    <BlockMath math="E[X] = E[X^+] - E[X^-]" />
                    で定義する。両方が有限であるとき、<InlineMath math="X" /> は<b>可積分</b>（integrable）であるといい、<InlineMath math="X \in L^1(\Omega, \mathcal{F}, P)" /> と表記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この抽象的な定義は、前回学んだ離散型・連続型の具体的な計算公式をきれいに内包しています。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (離散型と連続型への帰着)">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <b>離散型</b>：値域が可算集合 <InlineMath math="\{x_i\}" /> で確率質量関数 <InlineMath math="p(x_i)" /> を持つ場合、
                        <InlineMath math="E[X] = \sum_{i} x_i p(x_i)" /> となり、単純関数の極限として定義に合致する。
                    </li>
                    <li>
                        <b>連続型</b>：確率密度関数 <InlineMath math="f(x)" /> を持つ場合、
                        <InlineMath math="E[X] = \int_{-\infty}^\infty x f(x) \, dx" />（リーマン積分）となり、これがルベーグ積分の具体的な計算値を与える。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="抽象的な記法">
                <p>
                    数学の専門書では、期待値 <InlineMath math="E[X]" /> を測度論の積分の記法に合わせて
                    <BlockMath math="\int_{\Omega} X(\omega) \, P(d\omega) \quad \text{または} \quad \int_{\Omega} X \, dP" />
                    と表記することが多いです。この記法は、離散か連続かを意識せずに計算のルールを統一的に議論できるため、理論展開において非常に強力です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">期待値の計算公式</h2>

            <p className="leading-relaxed">
                確率変数を関数で変換した際の期待値も、分布の情報を用いて計算できます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (変数変換公式)">
                <p>
                    確率変数 <InlineMath math="X" /> とボレル可測関数 <InlineMath math="g : \mathbb{R} \to \mathbb{R}" /> に対して、
                    <InlineMath math="X" /> の分布を <InlineMath math="\mu_X" /> とすると、次が成り立つ。
                    <BlockMath math="E[g(X)] = \int_{\mathbb{R}} g(x) \, \mu_X(dx)" />
                    特に連続型で密度 <InlineMath math="f(x)" /> を持つなら <InlineMath math="E[g(X)] = \int_{-\infty}^\infty g(x) f(x) \, dx" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    指示関数 <InlineMath math="g = 1_B" /> の場合に公式が成り立つ（<InlineMath math="E[1_B(X)] = P(X \in B) = \mu_X(B)" />）ことから始め、
                    単純関数、非負関数、一般の関数へと順に拡張する標準的な議論（単調収束定理の利用）によって示される。
                    これは測度論における「積分変数変換定理」の特殊なケースである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-2 (標準正規分布の 2 次モーメント)">
                <p>
                    <InlineMath math="X \sim \mathcal{N}(0, 1)" /> のとき、<InlineMath math="E[X^2]" /> を計算する。
                    <BlockMath math="E[X^2] = \int_{-\infty}^\infty x^2 \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \, dx" />
                    部分積分を用いると：
                    <BlockMath math="\begin{aligned} E[X^2] &= \frac{1}{\sqrt{2\pi}} \left( [-x e^{-x^2/2}]_{-\infty}^\infty + \int_{-\infty}^\infty e^{-x^2/2} \, dx \right) \\ &= 0 + 1 = 1 \end{aligned}" />
                    となり、平均 0、分散 1 というパラメータの意味が確認できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                期待値を積分として定義したことで、測度論における強力な収束定理や不等式をそのまま確率論で利用できるようになります。
                次節では、それらの基本性質を整理します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>期待値は、測度空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の<b>ルベーグ積分</b>として厳密に構成される。</li>
                    <li>定義は、単純関数 → 非負可測関数 → 一般の可測関数の順に拡張される。</li>
                    <li><InlineMath math="E[|X|] < \infty" /> のとき、確率変数は可積分であるという。</li>
                    <li>変数変換公式を用いることで、確率変数の関数の期待値を、その確率変数の分布に基づいた積分計算として扱える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
