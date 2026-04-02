import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionAndBasicPropertiesOfProbabilityMeasure() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                可測空間 <InlineMath math="(\Omega, \mathcal{F})" /> という舞台が整えば、次はその上の事象に対して「起こりやすさ」を表す数値を割り当てるルールが必要です。
                コルモゴロフは、わずか 2 つの公理から出発して豊かな確率論の世界を構築しました。
                本節では、確率測度の公理的定義とその数学的な帰結である基本性質について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率測度の定義</h2>

            <p className="leading-relaxed">
                確率は、事象全体のあつまり <InlineMath math="\mathcal{F}" /> 上で定義された一種の測度です。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (確率測度)">
                <p>
                    可測空間 <InlineMath math="(\Omega, \mathcal{F})" /> 上の関数 <InlineMath math="P : \mathcal{F} \to [0, 1]" /> が、次の 2 つの条件を満たすとき、これを <b>確率測度</b>（probability measure）と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="P(\Omega) = 1" /> である。</li>
                    <li>互いに素な（排反な）事象列 <InlineMath math="A_n \in \mathcal{F} \, (n=1, 2, \ldots)" /> に対して、
                        <BlockMath math="P\left( \bigcup_{n=1}^\infty A_n \right) = \sum_{n=1}^\infty P(A_n)" />
                        が成り立つ（<b><InlineMath math="\sigma" />-加法性</b>）。
                    </li>
                </ol>
                <p>
                    このとき、三つ組 <InlineMath math="(\Omega, \mathcal{F}, P)" /> を<b>確率空間</b>（probability space）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                標本空間が有限か無限かによって、具体的な構成方法が異なります。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (有限標本空間の一様分布)">
                <p>
                    サイコロ投げのような有限標本空間 <InlineMath math="\Omega = \{1, 2, \ldots, 6\}" /> を考える。
                    全事象のあつまりを <InlineMath math="\mathcal{F} = 2^\Omega" /> とし、各点に等しい重みを置く：
                    <BlockMath math="P(\{k\}) = \frac{1}{6} \quad (k = 1, \ldots, 6)" />
                    このとき、任意の事象 <InlineMath math="A" /> の確率は <InlineMath math="P(A) = |A|/6" /> となり、これは明らかに確率測度の公理を満たす。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (連続分布と密度関数)">
                <p>
                    標本空間を実数全体 <InlineMath math="\Omega = \mathbb{R}" /> とし、ある非負関数 <InlineMath math="f(x)" /> （<InlineMath math="x \in \mathbb{R}" />）であって積分が 1 になるもの（確率密度関数）を用いる。
                    事象 <InlineMath math="A \in \mathcal{B}(\mathbb{R})" /> に対して確率を次のように定義する：
                    <BlockMath math="P(A) = \int_A f(x) \, dx" />
                    このとき、加法性はルベーグ積分の性質（測度論 3-3）から保証され、これも確率測度となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率測度の基本性質</h2>

            <p className="leading-relaxed">
                定義の 2 公理から、私たちが直感的に用いている確率の諸公式が導かれます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (基本性質)">
                <p>
                    確率測度 <InlineMath math="P" /> に対して、次の性質が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P(\emptyset) = 0" /></li>
                    <li><b>有限加法性</b>：互いに素な事象 <InlineMath math="A, B" /> に対して <InlineMath math="P(A \cup B) = P(A) + P(B)" /></li>
                    <li><b>単調性</b>：<InlineMath math="A \subset B \implies P(A) \le P(B)" /></li>
                    <li><b>劣加法性</b>：<InlineMath math="P(A \cup B) \le P(A) + P(B)" /></li>
                    <li><b>包除原理</b>：<InlineMath math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (i) <InlineMath math="\Omega = \Omega \cup \emptyset \cup \emptyset \cup \cdots" /> （すべて互いに素）より、<InlineMath math="P(\Omega) = P(\Omega) + P(\emptyset) + \cdots" /> となり、<InlineMath math="P(\Omega) = 1" /> が有限値であることから <InlineMath math="P(\emptyset) = 0" /> を得る。
                </p>
                <p>
                    (iii) <InlineMath math="B = A \cup (B \setminus A)" /> （互いに素）と分解すれば、加法性より <InlineMath math="P(B) = P(A) + P(B \setminus A)" /> となる。
                    <InlineMath math="P(B \setminus A) \ge 0" /> より <InlineMath math="P(B) \ge P(A)" /> である。
                </p>
                <p>
                    (v) <InlineMath math="A \cup B = A \cup (B \setminus (A \cap B))" /> と、<InlineMath math="B = (A \cap B) \cup (B \setminus (A \cap B))" /> を組み合わせることで導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                測度が「可算回の和」について閉じているという公理は、事象の列の「極限」に関する非常に強力な性質をもたらします。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (確率測度の連続性)">
                <p>
                    確率測度 <InlineMath math="P" /> に対して次の連続性が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <b>単調増加列</b>：<InlineMath math="A_1 \subset A_2 \subset \cdots" /> に対し、
                        <BlockMath math="P\left( \bigcup_{n=1}^\infty A_n \right) = \lim_{n \to \infty} P(A_n)" />
                    </li>
                    <li>
                        <b>単調減少列</b>：<InlineMath math="B_1 \supset B_2 \supset \cdots" /> に対し、
                        <BlockMath math="P\left( \bigcap_{n=1}^\infty B_n \right) = \lim_{n \to \infty} P(B_n)" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (i) について、<InlineMath math="C_1 = A_1" />、<InlineMath math="C_n = A_n \setminus A_{n-1} \, (n \ge 2)" /> と置くと、<InlineMath math="C_n" /> は互いに素であり、<InlineMath math="\bigcup_{k=1}^n C_k = A_n" /> である。
                    公理の <InlineMath math="\sigma" />-加法性と有限和の定義から、
                    <BlockMath math="\begin{aligned} P\left( \bigcup A_n \right) &= P\left( \bigcup C_n \right) = \sum_{n=1}^\infty P(C_n) \\ &= \lim_{N \to \infty} \sum_{n=1}^N P(C_n) = \lim_{N \to \infty} P(A_N) \end{aligned}" />
                    を得る。
                    (ii) は補集合に (i) を適用することで直ちに導かれる（<InlineMath math="P(\Omega)=1 < \infty" /> であるため極限操作が可能）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-3 (連続性の確認)">
                <p>
                    <InlineMath math="\Omega = (0, 1]" /> 上の一様分布（<InlineMath math="P((a, b]) = b - a" />）を考える。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>
                        事象列 <InlineMath math="A_n = (0, 1 - 1/n]" /> を考えると、<InlineMath math="A_n \nearrow (0, 1)" /> である。
                        このとき <InlineMath math="P(A_n) = 1 - 1/n \to 1" /> となり、これは <InlineMath math="P((0, 1)) = 1" /> と一致する。
                    </li>
                    <li>
                        事象列 <InlineMath math="B_n = (0, 1/n]" /> を考えると、<InlineMath math="B_n \searrow \emptyset" /> である。
                        このとき <InlineMath math="P(B_n) = 1/n \to 0" /> となり、これは <InlineMath math="P(\emptyset) = 0" /> と一致する。
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                確率空間の定義により、不確実な現象をひとつの「測度」として数学の俎上に載せることができました。
                次節では、ある事象が起きたという情報が他の事象の確率をどう更新するかという、<b>条件付き確率</b>について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>確率測度は <InlineMath math="P(\Omega)=1" /> を満たす <InlineMath math="\sigma" />-加法的な測度である。</li>
                    <li>確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> を定義することで、確率論を測度論として厳密に展開できる。</li>
                    <li>連続性定理により、事象の単調な拡大・縮小に対して確率も極限として振る舞うことが保証される。</li>
                    <li>包除原理や劣加法性などの基本的な公式は、すべて公理から論理的に導かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
