import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SigmaAlgebras() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                測度論の目的は、集合の「大きさ」を厳密に定義し、それに基づいて積分を構成することです。
                しかし、すべての部分集合に対して矛盾なく「大きさ」を定義することは一般には不可能です。
                そこでまず、大きさを測ることが可能な集合の集まりである「可測集合族」の満たすべき数学的な性質を定式化します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限加法族と <InlineMath math="\sigma" />-加法族の定義</h2>

            <p>
                「集合の大きさ」を考える際、集合の補集合や、2つの集合を合わせたものも「測れる」べきだという要請は自然です。
                このような有限回の操作について閉じている集合族を有限加法族と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (有限加法族)">
                <p>
                    集合 <InlineMath math="X" /> 上の集合族 <InlineMath math="\mathcal{A} \subset 2^X" /> が以下の3条件を満たすとき、<InlineMath math="\mathcal{A}" /> を<b>有限加法族</b> (algebra) という。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="X \in \mathcal{A}" /></li>
                    <li><InlineMath math="A \in \mathcal{A} \implies A^c \in \mathcal{A}" /> （補集合について閉じている）</li>
                    <li><InlineMath math="A, B \in \mathcal{A} \implies A \cup B \in \mathcal{A}" /> （有限和について閉じている）</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (有限加法族の例と限界)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> 上の集合族 <InlineMath math="\mathcal{A}" /> として、「有限個の左開右閉区間 <InlineMath math="(a, b]" /> の和集合として表される集合全体の集合」を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>この <InlineMath math="\mathcal{A}" /> は有限個の和集合や補集合について閉じているため、<b>有限加法族</b>である。</li>
                    <li>しかし、開区間 <InlineMath math="(0, 1) = \bigcup_{n=1}^\infty (0, 1 - 1/n]" /> は可算個の和集合として表されるが、これは有限個の左開右閉区間の和としては書けないため、<InlineMath math="\mathcal{A}" /> には属さない。</li>
                </ul>
                <p className="mt-4">
                    このように、有限加法族は「有限回の操作」には十分ですが、極限を扱うための「可算回の操作」には十分ではありません。
                </p>
            </ContentBox>

            <p>
                有限加法族の定義から、空集合 <InlineMath math="\emptyset = X^c" /> も含まれることや、有限個の共通部分 <InlineMath math="A \cap B = (A^c \cup B^c)^c" /> についても閉じていることが容易にわかります。
                しかし、解析学において極限操作（無限和や無限共通部分）を扱うためには、有限回ではなく「可算無限回」の操作について閉じている必要があります。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (σ-加法族)">
                <p>
                    有限加法族 <InlineMath math="\mathcal{A}" /> の条件 (iii) を以下の「可算和について閉じる」に強めたものを <b><InlineMath math="\sigma" />-加法族</b> (<InlineMath math="\sigma" />-algebra) という。
                </p>
                <ul className="list-inside space-y-2 mt-4">
                    <li>(iii)' <InlineMath math="A_1, A_2, \ldots \in \mathcal{A} \implies \bigcup_{n=1}^\infty A_n \in \mathcal{A}" /></li>
                </ul>
                <p className="mt-4">
                    組 <InlineMath math="(X, \mathcal{A})" /> を<b>可測空間</b> (measurable space) といい、<InlineMath math="\mathcal{A}" /> の元を<b>可測集合</b> (measurable set) と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="極限操作の正当化">
                <p>
                    「可算和で閉じる」という条件は、関数列の極限や無限級数の収束を議論する際に不可欠です。
                    有限和までしか認めない有限加法族では、開区間の極限として表現される集合の大きさを議論できず、ルベーグ積分の収束定理（単調収束定理や優収束定理）が成り立ちません。
                </p>
            </ContentBox>

            <p>
                具体的な <InlineMath math="\sigma" />-加法族の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (基本的なσ-加法族)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>最小の <InlineMath math="\sigma" />-加法族</b>: <InlineMath math="\mathcal{A} = \{\emptyset, X\}" />。
                    </li>
                    <li>
                        <b>最大の <InlineMath math="\sigma" />-加法族</b>: <InlineMath math="\mathcal{A} = 2^X" /> （べき集合）。
                    </li>
                    <li>
                        <b>有限集合上の例</b>: <InlineMath math="X = \{1, 2, 3\}" /> としたとき、<InlineMath math="\mathcal{A} = \{\emptyset, \{1\}, \{2, 3\}, X\}" /> は <InlineMath math="\sigma" />-加法族の条件をすべて満たす。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\sigma" />-加法族の生成</h2>

            <p>
                ある条件を満たすすべての集合を含みつつ、必要最小限の元だけで構成された <InlineMath math="\sigma" />-加法族を考えたいことがよくあります。
                例えば「すべての開区間を含む最小の <InlineMath math="\sigma" />-加法族」といった考え方です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (生成されたσ-加法族)">
                <p>
                    集合族 <InlineMath math="\mathcal{E} \subset 2^X" /> を含む最小の <InlineMath math="\sigma" />-加法族を <InlineMath math="\sigma(\mathcal{E})" /> と書き、<b><InlineMath math="\mathcal{E}" /> により生成された <InlineMath math="\sigma" />-加法族</b>と呼ぶ。
                    これは、<InlineMath math="\mathcal{E}" /> を含むすべての <InlineMath math="\sigma" />-加法族の共通部分として定義される。
                </p>
                <BlockMath math="\sigma(\mathcal{E}) = \bigcap \{ \mathcal{A} \mid \mathcal{E} \subset \mathcal{A}, \mathcal{A} \text{ は } \sigma\text{-加法族} \}" />
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-3 (生成の具体例)">
                <p>
                    <InlineMath math="X = \{1, 2, 3\}" /> において、集合 <InlineMath math="E = \{1\}" /> を含む最小の <InlineMath math="\sigma" />-加法族 <InlineMath math="\sigma(\{E\})" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li><InlineMath math="\mathcal{A}" /> は <InlineMath math="X" /> と <InlineMath math="\emptyset" /> を含む必要がある。</li>
                    <li>さらに <InlineMath math="E = \{1\}" /> を含むなら、その補集合 <InlineMath math="E^c = \{2, 3\}" /> も含む必要がある。</li>
                </ul>
                <p className="mt-4">
                    したがって、<InlineMath math="\sigma(\{E\}) = \{\emptyset, \{1\}, \{2, 3\}, X\}" /> となる。これは <InlineMath math="\{1\}" /> の境界が測れる最も粗い <InlineMath math="\sigma" />-加法族である。
                </p>
            </ContentBox>

            <p>
                解析学において最も重要な <InlineMath math="\sigma" />-加法族は、位相空間の開集合系から生成されるものです。
            </p>

            <ContentBox type="definition" title="Definition 1.1-4 (ボレル集合族)">
                <p>
                    位相空間 <InlineMath math="(X, \mathcal{O})" /> の開集合系 <InlineMath math="\mathcal{O}" /> から生成された <InlineMath math="\sigma" />-加法族 <InlineMath math="\mathcal{B}(X) = \sigma(\mathcal{O})" /> を<b>ボレル集合族</b> (Borel algebra) という。
                    また、その元を<b>ボレル集合</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                実数直線 <InlineMath math="\mathbb{R}" /> 上では、異なる生成系から同じボレル集合族が導かれることが知られています。
            </p>

            <ContentBox type="example" title="Example 1.1-4 (実数直線上のボレル集合族)">
                <p>
                    <InlineMath math="\mathcal{B}(\mathbb{R})" /> は次のような集合族からも生成される。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>開区間全体 <InlineMath math="\{(a, b) \mid a, b \in \mathbb{R}\}" /></li>
                    <li>閉区間全体 <InlineMath math="\{[a, b] \mid a, b \in \mathbb{R}\}" /></li>
                    <li>半開区間全体 <InlineMath math="\{(a, b] \mid a, b \in \mathbb{R}\}" /></li>
                </ul>
                <p className="mt-4">
                    実解析で扱う「開集合」「閉集合」「可算個の点集合」や、それらの極限として作られる素直な集合は、ほぼすべてボレル集合であると言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>有限加法族</b>は有限和・補集合について閉じている集合族。</li>
                    <li><b><InlineMath math="\sigma" />-加法族</b>は有限加法族の条件を可算和について閉じるように強めたもの。</li>
                    <li><b>生成された <InlineMath math="\sigma" />-加法族</b>はある集合族を含む最小の <InlineMath math="\sigma" />-加法族。</li>
                    <li><b>ボレル集合族</b>は開集合全体から生成される、解析学で最も基本的な <InlineMath math="\sigma" />-加法族。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
