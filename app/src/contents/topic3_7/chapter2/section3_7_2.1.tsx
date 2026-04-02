import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfRandomVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章では、確率の器となる「確率空間」について学びました。
                しかし、現実の現象を解析する際には、「ど事象が起こったか」そのものよりも、その結果に付随する「数値」に関心がある場合がほとんどです。
                本節では、事象という抽象的な対象を数値へと変換する<b>確率変数</b>を、測度論の言葉を用いて厳密に定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可測関数としての確率変数</h2>

            <p className="leading-relaxed">
                確率変数とは、直感的には「試行の結果によって値が決まる変数」ですが、数学的には標本空間から実数への写像として定義されます。
                ここで重要なのは、任意の「実数の範囲」に対して、その値を取る確率が計算可能でなければならないという点です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (確率変数)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の関数 <InlineMath math="X : \Omega \to \mathbb{R}" /> が、
                    任意のボレル集合 <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> に対して
                    <BlockMath math="X^{-1}(B) = \{ \omega \in \Omega \mid X(\omega) \in B \} \in \mathcal{F}" />
                    を満たすとき、<InlineMath math="X" /> を<b>確率変数</b>（random variable）と呼ぶ。
                    これは、<InlineMath math="X" /> が可測空間 <InlineMath math="(\Omega, \mathcal{F})" /> から <InlineMath math="(\mathbb{R}, \mathcal{B}(\mathbb{R}))" /> への<b>可測関数</b>であることを意味する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義により、<InlineMath math="P(X \in B) = P(X^{-1}(B))" /> という形で、確率変数が特定の範囲に入る確率を厳密に定義できるようになります。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (サイコロの目の数)">
                <p>
                    1 個のサイコロを投げる試行（<InlineMath math="\Omega = \{1, \ldots, 6\}" />, <InlineMath math="\mathcal{F} = 2^\Omega" />）において、
                    出た目の数をそのまま値とする関数 <InlineMath math="X(\omega) = \omega" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="B = \{3\}" /> のとき、<InlineMath math="X^{-1}(B) = \{3\} \in \mathcal{F}" /> である。</li>
                    <li><InlineMath math="B = [2, 4]" /> のとき、<InlineMath math="X^{-1}(B) = \{2, 3, 4\} \in \mathcal{F}" /> である。</li>
                </ul>
                <p>
                    このように、どのようなボレル集合を考えても、その逆像は必ず事象族 <InlineMath math="\mathcal{F}" /> に属するため、<InlineMath math="X" /> は確率変数である。
                    また、<InlineMath math="Y = X^2" /> （出た目の 2 乗）なども同様に確率変数となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="可測性の必要性">
                <p>
                    なぜ「可測関数」という条件が必要なのでしょうか。
                    それは、事象族 <InlineMath math="\mathcal{F}" /> が「確率を定義できる集合のあつまり」だからです。
                    もし逆像 <InlineMath math="X^{-1}(B)" /> が <InlineMath math="\mathcal{F}" /> に属さないような関数 <InlineMath math="X" /> を許してしまうと、
                    「<InlineMath math="X" /> が <InlineMath math="B" /> に入る確率はいくらか？」という問いに答えることができなくなってしまいます。
                    可測性の要件は、確率論が数学的な矛盾なく成立するための土台なのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率変数の変換と演算</h2>

            <p className="leading-relaxed">
                既存の確率変数から新しい確率変数を作る際、それらが再び確率変数になるかどうかは重要です。
                測度論の可測関数に関する性質から、次のことが保証されます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (確率変数の基本演算)">
                <p>
                    <InlineMath math="X, Y" /> を確率変数とするとき、次もまた確率変数である。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="aX + bY" /> （<InlineMath math="a, b \in \mathbb{R}" /> は定数）</li>
                    <li><InlineMath math="XY" /></li>
                    <li><InlineMath math="f(X)" /> （ここで <InlineMath math="f : \mathbb{R} \to \mathbb{R}" /> はボレル可測関数）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    これらは、実数上の可測関数どうしの和・積、および可測関数の合成が再び可測関数になるという測度論の基本性質（Topic 3-3 参照）から従う。
                    例えば <InlineMath math="f(X)" /> については、任意の <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> に対し、
                    <BlockMath math="(f \circ X)^{-1}(B) = X^{-1}(f^{-1}(B))" />
                    であり、<InlineMath math="f" /> の可測性から <InlineMath math="f^{-1}(B) \in \mathcal{B}(\mathbb{R})" />、
                    さらに <InlineMath math="X" /> の可測性から <InlineMath math="X^{-1}(f^{-1}(B)) \in \mathcal{F}" /> となるため、
                    <InlineMath math="f(X)" /> は可測（確率変数）である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                また、事象と確率変数をつなぐ最も基本的な道具として、指示関数が挙げられます。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (指示関数)">
                <p>
                    事象 <InlineMath math="A \in \mathcal{F}" /> に対して、次のように定義される関数 <InlineMath math="1_A" /> を<b>指示関数</b>（indicator function）と呼ぶ。
                    <BlockMath math="1_A(\omega) = \begin{cases} 1 & (\omega \in A) \\ 0 & (\omega \notin A) \end{cases}" />
                    これは常に確率変数となる。
                    さらに、確率 <InlineMath math="P(A)" /> は、期待値の概念を用いると <InlineMath math="E[1_A]" /> と表記できる。
                    このように、事象そのものを扱う代わりに、その指示関数という確率変数を扱う手法は、確率論の証明において極めて強力な武器となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                確率変数が定義されたことで、次は「その変数が、どの値をどのような重みで取るか」という規則を記述する必要が出てきます。
                これを体系化したものが、次節で学ぶ<b>分布関数</b>です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>確率変数は、標本空間から実数への<b>可測関数</b>として厳密に定義される。</li>
                    <li>可測性の条件は、任意のボレル集合に対して確率が確定していることを保証するために不可欠である。</li>
                    <li>確率変数の和、積、およびボレル可測関数による変換は、再び確率変数になる。</li>
                    <li>指示関数は、事象と確率変数を結びつける重要な概念であり、期待値計算などで頻出する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
