import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_1_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                我々は前節までに、有理数体 <InlineMath math="\mathbb{Q}" /> から出発して、全く異なる2つの方法で「極限の穴が塞がった新しい数」の世界 <InlineMath math="\mathbb{R}" /> を作り出しました。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
                <li><strong>デデキントの切断（Dedekind cuts）</strong>：「数の大小の順序」に注目し、数の列の切り口を実数と定義する方法。</li>
                <li><strong>コーシー列の完備化（Cauchy sequences）</strong>：「数と数の距離」に注目し、行き先のない数列自体を束ねて実数と定義する方法。</li>
            </ul>
            <p>
                一方は「集合の組」であり、もう一方は「数列の同値類」です。見た目の数学的対象としては全く異なるものですが、果たして彼らが作り出した「実数」は同じものなのでしょうか？
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">2つの構成の同値性と同型</h2>

            <p>
                結論から言えば、どちらの方法構成から作られた「実数体」も、代数学や解析学の舞台として<strong>1ミリの狂いもなく全く同じ構造を持つ</strong>ことが数学的に証明されています。
                これを「同型（Isomorphic）である」と言います。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (2つの構成の同型性と一意性)">
                <p>
                    デデキント切断によって構成された実数体を <InlineMath math="\mathbb{R}_D" />、コーシー列の完備化によって構成された実数体を <InlineMath math="\mathbb{R}_C" /> とする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="\mathbb{R}_D" /> と <InlineMath math="\mathbb{R}_C" /> の間には全単射写像 <InlineMath math="f: \mathbb{R}_D \to \mathbb{R}_C" /> が存在し、それは加法、乗法、および順序関係をすべて完全に保存する。
                    すなわち、2つの構成は<strong>完備順序体（Complete ordered field）として同型</strong>である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [2つの実数の構成の同型性]">
                <p>
                    ここでは、コーシー列による実数 <InlineMath math="\mathbb{R}_C" /> からデデキント切断による実数 <InlineMath math="\mathbb{R}_D" /> への同型写像 <InlineMath math="\varphi: \mathbb{R}_C \to \mathbb{R}_D" /> を構成し、それが全単射かつ順序と演算を保存することを示す。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 1: 写像の構成と well-defined 性]</p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}_C" /> の任意の元（同値類）<InlineMath math="x = [\{a_n\}]" /> に対して、有理数の集合 <InlineMath math="A_x" /> を次のように定義する。
                </p>
                <BlockMath math="A_x = \{ q \in \mathbb{Q} \mid \exists \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \ge N, \; q < a_n - \varepsilon \}" />
                <p className="mt-2">
                    また <InlineMath math="B_x = \mathbb{Q} \setminus A_x" /> とし、<InlineMath math="\varphi(x) = (A_x, B_x)" /> と定める。
                </p>
                <p className="mt-2">
                    ・<strong>切断であること：</strong> <InlineMath math="\{a_n\}" /> は有理コーシー列なので有界である。その下界より小さな有理数は <InlineMath math="A_x" /> に含まれ（<InlineMath math="A_x \neq \emptyset" />）、上界より大きな有理数は <InlineMath math="B_x" /> に含まれる（<InlineMath math="B_x \neq \emptyset" />）。構成から <InlineMath math="A_x" /> は下方に閉じており、最大元を持たないことが容易に示せる。したがって <InlineMath math="(A_x, B_x)" /> は確かにデデキント切断である。
                </p>
                <p className="mt-2">
                    ・<strong>代表元の取り方によらないこと：</strong> <InlineMath math="[\{a_n\}] = [\{b_n\}]" />（すなわち <InlineMath math="a_n - b_n \to 0" />）ならば、任意の <InlineMath math="\varepsilon > 0" /> の条件において <InlineMath math="a_n" /> と <InlineMath math="b_n" /> で <InlineMath math="A_x" /> の構成が一致する。ゆえに写像 <InlineMath math="\varphi" /> は well-defined である。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: 全単射性と順序の保存]</p>
                <p className="mt-2">
                    ・<strong>順序の保存（ひいては単射性）：</strong> <InlineMath math="\mathbb{R}_C" /> において <InlineMath math="x < y" /> であるとは、ある <InlineMath math="\delta > 0" /> と自然数 <InlineMath math="N" /> が存在して <InlineMath math="\forall n \ge N, a_n + \delta < b_n" /> となることである。このとき、<InlineMath math="A_x" /> と <InlineMath math="A_y" /> の定義から明かに <InlineMath math="A_x \subsetneq A_y" /> となる。これは <InlineMath math="\mathbb{R}_D" /> における <InlineMath math="\varphi(x) < \varphi(y)" /> を意味する。したがって順序は保存され、保存されるならば狭義単調ゆえに単射である。
                </p>
                <p className="mt-2">
                    ・<strong>全射性：</strong> <InlineMath math="\mathbb{R}_D" /> の任意の切断 <InlineMath math="(A, B)" /> をとる。<InlineMath math="n = 1, 2, \dots" /> に対し、差が <InlineMath math="1/n" /> 未満となるように <InlineMath math="a_n \in A" /> と <InlineMath math="b_n \in B" /> （すなわち <InlineMath math="b_n - a_n < 1/n" />）が必ず選べる。
                    このように選んだ有理数列 <InlineMath math="\{a_n\}" /> はコーシー列となるため、同値類 <InlineMath math="x = [\{a_n\}] \in \mathbb{R}_C" /> を構成できる。
                    この <InlineMath math="x" /> について <InlineMath math="\varphi(x)" /> を計算すると、構成法より元の切断 <InlineMath math="(A, B)" /> に完全に一致する（<InlineMath math="\varphi(x) = (A, B)" />）。ゆえに全射である。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 3: 演算の保存]</p>
                <p className="mt-2">
                    ・<strong>加法の保存：</strong> <InlineMath math="\varphi(x + y)" /> の下組は構成の定義より <InlineMath math="\{ q \mid \exists \varepsilon, N, \forall n \ge N, q < (a_n + b_n) - \varepsilon \}" /> である。
                    一方、<InlineMath math="\varphi(x) + \varphi(y)" /> の下組は <InlineMath math="\{ r + s \mid r \in A_x, s \in A_y \}" /> である。<InlineMath math="q < a_n + b_n - \varepsilon" /> は <InlineMath math="q = (a_n - \varepsilon/2) + (b_n - \varepsilon/2)" /> のように分解でき、両者が集合として完全に一致することが示せる。したがって <InlineMath math="\varphi(x + y) = \varphi(x) + \varphi(y)" />。
                </p>
                <p className="mt-2">
                    ・<strong>乗法の保存：</strong> 正の元の乗法についても、有理数の稠密性とコーシー列の有界性を評価することで、同様に <InlineMath math="\varphi(xy) = \varphi(x)\varphi(y)" /> が成立することが示せる（負の元へは分配法則などから拡張）。
                </p>

                <p className="mt-4">
                    以上により、<InlineMath math="\varphi" /> は順序体を構造ごと別な順序体に一対一かつ演算を保存したまま移す写像（同型写像）であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同型の意味する「実数の一意性」</h2>

            <p>
                この「2つの構成法が同型である」という事実は、現代数学において極めて深遠で哲学的な意味を持っています。
            </p>

            <ContentBox type="remark" title="完備順序体としての実数体の一意性">
                <p>
                    数学的な構造の分類において、以下の3つの性質を同時に満たす体系（集合）は「完備順序体（Complete ordered field）」と呼ばれます。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2 mb-2 font-bold text-slate-700 dark:text-slate-300">
                    <li>体である（和・差・積・商が自由に定まる）</li>
                    <li>順序が定義されている（大小関係が演算と矛盾しない）</li>
                    <li>完備である（上限公理を満たす、あるいは全てのコーシー列が収束する）</li>
                </ol>
                <p>
                    実は、<strong>これら3つの条件をすべて満たす数学的構造は、この宇宙に「実数 <InlineMath math="\mathbb{R}" />」の一種類しか存在しません。</strong>（正確には、いかなる構成法で作った完備順序体も、必ず他の完備順序体とすべて「同形（同型）」になるという一意性が証明されています）。
                </p>
                <p className="mt-2">
                    切断で作ろうと、コーシー列で作ろうと、あるいはもし宇宙人が全く別の奇想天外なアプローチ（例えば無限桁の小数展開や連分数など）で「穴のない数直線」を作ったとしても、完成した「実数」という抽象的な構造それ自体は全く同じものになるのです。
                </p>
            </ContentBox>

            <p className="mt-4">
                このようにして、私たちは「有理数の穴」を完璧に塞ぎ、一切の矛盾なく極限を計算できる堅牢な大地「実数体」を手に入れました。
                次章では、この実数が持つ最も重要な性質、解析学の全ての礎となる<strong>「完備性（Completeness）」</strong>の様々な同値な表現について深く学んでいきます。
            </p>

        </section>
    );
}
