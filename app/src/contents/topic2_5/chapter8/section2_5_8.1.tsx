import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConnectednessDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間における<strong>連結性 (Connectedness)</strong> とは、直感的には「空間が1つの塊になっていて、バラバラに分かれていない」という性質を指します。
                ユークリッド空間における「区間」の概念を一般の位相空間へと抽象化したものであり、解析学における「中間値の定理」の成立基盤となる極めて重要な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連結性の定義</h2>

            <p>
                連結性を定義するためには、まず「空間を2つの開集合で綺麗に分けることができるか」という視点を導入すると分かりやすくなります。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (連結空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>連結 (Connected)</strong> であるとは、
                    次の条件を満たすような、互いに素で空でない 2 つの開集合 <InlineMath math="U, V \subset X" /> が存在しないことをいう：
                </p>
                <BlockMath math="X = U \cup V, \quad U \cap V = \emptyset, \quad U \neq \emptyset, V \neq \emptyset" />
                <p className="mt-4">
                    連結でない空間を<strong>非連結 (Disconnected)</strong> と呼び、
                    条件を満たす開集合の対 <InlineMath math="(U, V)" /> を <InlineMath math="X" /> の<strong>分割 (Separation)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                定義が抽象的ですので、まずは非連結な空間の例を見て、何が「バラバラであること」を意味するのかを理解しましょう。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (非連結な空間)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> の部分集合 <InlineMath math="X = [0, 1] \cup [2, 3]" /> を考える（相対位相を入れる）。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="U = [0, 1]" />, <InlineMath math="V = [2, 3]" /> とおくと、これらは <InlineMath math="X" /> における開集合である。</li>
                    <li><InlineMath math="U \cup V = X" />, <InlineMath math="U \cap V = \emptyset" /> であり、ともに空でない。</li>
                </ul>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    このように、集合が物理的に離れている場合、それらを「開集合」という枠組みで互いに干渉することなく分離できるため、非連結となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値な定義</h2>

            <p>
                連結性の定義は、補集合の概念を用いることで「開かつ閉な集合（Clopen set）」の言葉で言い換えることができます。
            </p>

            <ContentBox type="proposition" title="Proposition 8.1-1 (連結性の同値条件)">
                <p>
                    位相空間 <InlineMath math="X" /> に対して、次は同値である：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="X" /> は連結である。</li>
                    <li><InlineMath math="X" /> の<strong>開かつ閉な部分集合</strong>は、空集合 <InlineMath math="\emptyset" /> と全体集合 <InlineMath math="X" /> のみである。</li>
                    <li><InlineMath math="X" /> から 2 点離散空間 <InlineMath math="\{0, 1\}" /> への連続写像は定数写像に限る。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (1 ⇔ 2)">
                <p>
                    <InlineMath math="X" /> が非連結であることと、自明でない（<InlineMath math="\emptyset" /> でも <InlineMath math="X" /> でもない）開閉集合が存在することが同値であることを示せばよい。
                </p>
                <p className="mt-4">
                    まず、<InlineMath math="X" /> が非連結であると仮定する。分割 <InlineMath math="(U, V)" /> が存在し、 <InlineMath math="U" /> は開集合である。
                    一方、<InlineMath math="U" /> の補集合は <InlineMath math="V" /> であり、これも開集合である。
                    「補集合が開集合である」ことは「元の集合が閉集合である」ことの定義であるから、 <InlineMath math="U" /> は閉集合でもある。
                    すなわち <InlineMath math="U" /> は開かつ閉であり、かつ <InlineMath math="U \neq \emptyset, U \neq X" /> である。
                </p>
                <p className="mt-4">
                    逆に、自明でない開閉集合 <InlineMath math="A" /> が存在すると仮定する。
                    <InlineMath math="U = A" />, <InlineMath math="V = A^c" /> とおくと、ともに開集合（<InlineMath math="A" /> が閉集合なので <InlineMath math="A^c" /> は開）であり、
                    かつ <InlineMath math="U \cup V = X, U \cap V = \emptyset, U \neq \emptyset, V \neq \emptyset" /> を満たす。
                    したがって <InlineMath math="X" /> は非連結である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p>
                連結性の最も身近で重要な例は、実数直線の「区間」です。
            </p>

            <ContentBox type="example" title="Example 8.1-2 (実数直線の連結部分集合)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、部分集合 <InlineMath math="A" /> が連結であるための必要十分条件は、
                    <InlineMath math="A" /> が<strong>区間</strong>（開区間、閉区間、半開区間、あるいは 1 点集合や空集合を含む）であることである。
                </p>
                <p className="mt-2">
                    例えば、有理数全体の集合 <InlineMath math="\mathbb{Q}" /> は <InlineMath math="\mathbb{R}" /> の中で連結ではありません。
                    任意の無理数 <InlineMath math="\alpha" /> （例えば <InlineMath math="\sqrt{2}" />）を用いて、
                    <BlockMath math="U = (-\infty, \alpha) \cap \mathbb{Q}, \quad V = (\alpha, \infty) \cap \mathbb{Q}" />
                    とすれば、これらは <InlineMath math="\mathbb{Q}" /> の分割を与えます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="連結性と完備性の関係">
                <p>
                    実数直線が連結であることを証明するには、「実数の連続性（完備性）」、例えば上限の存在公理などが必要になります。
                    有理数全体 <InlineMath math="\mathbb{Q}" /> が非連結であるのは、そこに「無理数という穴」があいているからだと解釈できます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連結性</strong>：空でない2つの開集合に「分割」できない性質。</li>
                    <li><strong>開閉集合</strong>：連結空間では、開かつ閉な集合は空集合と全体集合しかない。</li>
                    <li><strong>実数直線</strong>：連結な部分集合は、ちょうど「区間」と呼ばれるものに限られる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
