import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MeasurableFunctionBasics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                測度論の次のステップは、定義した測度を用いて「積分」を定義することです。
                リーマン積分では関数の不連続性が積分の可否を左右しましたが、ルベーグ積分では「逆像が可測集合になるか」という<b>可測性</b>が本質的な役割を果たします。
                本節では、積分計算の土台となる可測関数の定義とその性質を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可測関数の定義</h2>

            <p>
                直感的には、可測関数とは「関数の値を観測したとき、その結果（水準集合）が可測集合として測れる」ような関数のことです。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (可測関数)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> から実数直線のボレル可測空間 <InlineMath math="(\mathbb{R}, \mathcal{B}(\mathbb{R}))" /> への関数 <InlineMath math="f : X \to \mathbb{R}" /> が<b>可測である</b> (measurable) とは、任意の <InlineMath math="a \in \mathbb{R}" /> に対して、
                    <BlockMath math="\{x \in X \mid f(x) > a\} \in \mathcal{A}" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1 (階段関数の可測性)">
                <p>
                    <InlineMath math="X = \mathbb{R}" /> において、集合 <InlineMath math="A = [0, 1]" /> の特性関数 <InlineMath math="f = \mathbf{1}_A" /> を考える。
                </p>
                <BlockMath math="f(x) = \begin{cases} 1 & (x \in [0, 1]) \\ 0 & (x \notin [0, 1]) \end{cases}" />
                <p className="mt-4">
                    このとき、<InlineMath math="\{f > a\}" /> は以下のようになる：
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="a \geq 1" /> のとき、<InlineMath math="\emptyset" /> （可測）</li>
                    <li><InlineMath math="0 \leq a < 1" /> のとき、<InlineMath math="[0, 1]" /> （可測）</li>
                    <li><InlineMath math="a < 0" /> のとき、<InlineMath math="\mathbb{R}" /> （可測）</li>
                </ul>
                <p className="mt-4">
                    すべてのケースで逆像がボレル集合（可測集合）となるため、<InlineMath math="f" /> は可測関数です。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="定義の同値性">
                <p>
                    上記の定義では「<InlineMath math="> a" />」という半無限区間を用いましたが、これを「<InlineMath math="\geq a" />」「<InlineMath math="< a" />」「<InlineMath math="\leq a" />」に置き換えても、あるいは任意のボレル集合 <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> の逆像 <InlineMath math="f^{-1}(B) \in \mathcal{A}" /> が可測であるという条件に置き換えても、すべて同値になります。
                    これは、<InlineMath math="\sigma" />-加法族が補集合や可算和について閉じている性質から導かれます。
                </p>
            </ContentBox>

            <p>
                可測関数の定義を理解するために、いくつかの重要な例を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-3 (代表的な可測関数)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>連続関数</b>: <InlineMath math="f : \mathbb{R} \to \mathbb{R}" /> が連続ならば、<InlineMath math="\{f > a\}" /> は開集合である。開集合は常にボレル集合であるため、連続関数はボレル可測である。
                    </li>
                    <li>
                        <b>特性関数</b>: 集合 <InlineMath math="A \subset X" /> の特性関数
                        <BlockMath math="\mathbf{1}_A(x) = \begin{cases} 1 & (x \in A) \\ 0 & (x \notin A) \end{cases}" />
                        は、<InlineMath math="A \in \mathcal{A}" /> のときに限り可測関数となる。これはルベーグ積分の構成における最も基本的な「部品」となる。
                    </li>
                    <li>
                        <b>単調関数</b>: <InlineMath math="\mathbb{R}" /> 上の単調増加関数（または減少関数）は常に可測である。
                    </li>
                </ul>
            </ContentBox>

            <p>
                可測性の判定において、次の命題は定義の拡張性を保証する重要な結果です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (可測性の同値条件)">
                <p>
                    関数 <InlineMath math="f : X \to \mathbb{R}" /> に対して、以下はすべて同値である。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>任意の <InlineMath math="a \in \mathbb{R}" /> に対し <InlineMath math="\{f > a\} \in \mathcal{A}" /></li>
                    <li>任意の <InlineMath math="a \in \mathbb{R}" /> に対し <InlineMath math="\{f \leq a\} \in \mathcal{A}" /></li>
                    <li>任意のボレル集合 <InlineMath math="B \in \mathcal{B}(\mathbb{R})" /> に対し <InlineMath math="f^{-1}(B) \in \mathcal{A}" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\iff" /> (2): <InlineMath math="\{f \leq a\} = \{f > a\}^c" /> である。<InlineMath math="\sigma" />-加法族は補集合について閉じているため、一方が可測なら他方も可測である。
                </p>
                <p className="mt-2">
                    (3) <InlineMath math="\implies" /> (1): <InlineMath math="(a, \infty)" /> はボレル集合（開集合）であるため、その逆像は可測である。
                </p>
                <p className="mt-2">
                    (1) <InlineMath math="\implies" /> (3): 集合族 <InlineMath math="\mathcal{E} = \{ (a, \infty) \mid a \in \mathbb{R} \}" /> はボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> を生成する。逆像操作は集合演算と可換（<InlineMath math="f^{-1}(\cup B_n) = \cup f^{-1}(B_n)" /> 等）であるため、生成元の逆像が可測であれば、それらから生成されるすべてのボレル集合の逆像も可測となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">拡張実数値可測関数</h2>

            <p>
                積分論では、「無限大」の値を許容する方が理論がすっきりとまとまります。
                例えば、非負関数の積分の値が無限になることを許すように、関数そのものの値も <InlineMath math="\pm\infty" /> を取りうるものとして扱います。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (拡張実数値可測関数)">
                <p>
                    関数 <InlineMath math="f : X \to [-\infty, +\infty]" /> が<b>可測である</b>とは、任意の <InlineMath math="a \in \mathbb{R}" /> に対して <InlineMath math="\{x \in X \mid f(x) > a\} \in \mathcal{A}" /> が成り立つことをいう。
                    このとき、
                    <BlockMath math="\begin{aligned} \{f = +\infty\} &= \bigcap_{n=1}^\infty \{f > n\}, \\ \{f = -\infty\} &= \left(\bigcup_{n=1}^\infty \{f > -n\}\right)^c \end{aligned}" />
                    より、無限大をとる点集合も可測集合となることが保証される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2 (常に無限大を取る関数)">
                <p>
                    すべての点 <InlineMath math="x \in X" /> で <InlineMath math="f(x) = +\infty" /> となる定数関数を考える。
                </p>
                <p className="mt-4">
                    任意の <InlineMath math="a \in \mathbb{R}" /> に対し、<InlineMath math="\{f > a\}" /> は常に全集合 <InlineMath math="X" /> となり、これは可測集合です。したがって、この「至る所無限大」の関数も可測関数の範疇に含まれます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ無限大を扱うのか？">
                <p>
                    実数のみを値域とする関数だけを考えていると、可測関数の列の上限 <InlineMath math="\sup f_n(x)" /> をとったときに、値が無限に発散してしまい、可測関数の範疇（実数への写像）から外れてしまうことがあります。
                    拡張実数値を認めることで、上限や制限などの極限操作に対して「可測関数の世界」が閉じていることが保証され、議論が非常にスムーズになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>可測関数</b>は、任意のボレル集合の逆像が可測集合となる関数である。</li>
                    <li>連続関数、単調関数、可測集合の<b>特性関数</b>は、代表的な可測関数である。</li>
                    <li>極限操作を自由に扱うため、<InlineMath math="\pm\infty" /> を値に含む<b>拡張実数値関数</b>を導入する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
