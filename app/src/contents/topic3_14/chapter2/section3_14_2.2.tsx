import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FormulasAndQuantifiers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で定義した「項（個体）」を組み合わせて、「真偽が判定できる主張」である論理式を構成します。述語論理の最大の特徴は、対象全体の性質を語る「量化子（<InlineMath math="\forall, \exists" />）」を扱える点にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">原子論理式と複合論理式</h2>

            <p className="leading-relaxed">
                まず、論理式の構成の「出発点」となる最も単純な主張を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-1 (原子論理式)"
            >
                <p>
                    以下の形の記号列を<strong>原子論理式（atomic formula）</strong>と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>等号原子式：</strong> <InlineMath math="t_1, t_2" /> が項であるとき、<InlineMath math="t_1 = t_2" />。</li>
                    <li><strong>述語原子式：</strong> <InlineMath math="P^{(n)}" /> が <InlineMath math="n" /> 引数述語記号であり、<InlineMath math="t_1, \ldots, t_n" /> が項であるとき、<InlineMath math="P^{(n)}(t_1, \ldots, t_n)" />。</li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                次に、この原子論理式を論理結合子と量化子を用いて組み合わせ、一般的な論理式を帰納的に定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-2 (論理式の帰納的定義)"
            >
                <p>
                    述語論理における<strong>論理式（formula）</strong>の集合は、以下の規則によって帰納的に定義される。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>任意の原子論理式は論理式である。</li>
                    <li><InlineMath math="\varphi" /> と <InlineMath math="\psi" /> が論理式ならば、<InlineMath math="\neg\varphi" />、<InlineMath math="(\varphi \land \psi)" />、<InlineMath math="(\varphi \lor \psi)" />、<InlineMath math="(\varphi \to \psi)" />、<InlineMath math="(\varphi \leftrightarrow \psi)" /> も論理式である（命題論理と同様）。</li>
                    <li><InlineMath math="\varphi" /> が論理式であり、<InlineMath math="x" /> が変数記号であるとき、<strong><InlineMath math="\forall x\,\varphi" /></strong> と <strong><InlineMath math="\exists x\,\varphi" /></strong> も論理式である。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.2-1 (論理式の例)"
            >
                <p>
                    順序体の言語 <InlineMath math="\mathcal{L}_{\mathrm{ord}} = \{0, 1, +, \cdot, <\}" /> のもとでの論理式の例を挙げる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="\forall x\,(x = x)" /> <br /><span className="text-sm text-gray-500">（反射律：「すべての <InlineMath math="x" /> について、<InlineMath math="x" /> は <InlineMath math="x" /> と等しい」）</span></li>
                    <li><InlineMath math="\forall x\,\forall y\,(x < y \to \exists z\,(x < z \land z < y))" /> <br /><span className="text-sm text-gray-500">（稠密性：「任意の <InlineMath math="x, y" /> について、<InlineMath math="x < y" /> ならば、<InlineMath math="x" /> と <InlineMath math="y" /> の間にある <InlineMath math="z" /> が存在する」）</span></li>
                    <li><InlineMath math="\exists x\,\forall y\,(x = y \lor x < y)" /> <br /><span className="text-sm text-gray-500">（最小元の存在：「ある <InlineMath math="x" /> が存在して、任意の <InlineMath math="y" /> に対して <InlineMath math="x \leq y" /> が成り立つ」）</span></li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">量化子の解釈と順序</h2>

            <p className="leading-relaxed">
                量化子の意味自体は直感的ですが、複数の量化子が組み合わさった場合、その<strong>順序</strong>が極めて重要になります。
            </p>

            <ContentBox
                type="example"
                title="Example 2.2-2 (全称量化子と存在量化子)"
            >
                <p>
                    自然数の世界（<InlineMath math="\mathbb{N}" />）を想定し、大小関係 <InlineMath math="<" /> を用いた以下の2つの論理式の意味を比較する。
                </p>
                <div className="space-y-4 mt-2">
                    <div>
                        <strong>(A) <InlineMath math="\forall x\,\exists y\,(x < y)" /></strong>
                        <p>
                            「<strong>任意の</strong> <InlineMath math="x" /> に対して、それより大きな <InlineMath math="y" /> が<strong>存在する</strong>。」<br/>
                            <InlineMath math="x=0" /> なら <InlineMath math="y=1" />、<InlineMath math="x=100" /> なら <InlineMath math="y=101" /> と、<InlineMath math="x" /> ごとに都合のよい <InlineMath math="y" /> を選べばよい。自然数には最大値がないため、この主張は<strong>真</strong>である。
                        </p>
                    </div>
                    <div>
                        <strong>(B) <InlineMath math="\exists y\,\forall x\,(x < y)" /></strong>
                        <p>
                            「<strong>ある</strong> <InlineMath math="y" /> が存在して、<strong>すべての</strong> <InlineMath math="x" /> はその <InlineMath math="y" /> より小さい。」<br/>
                            これは「自然数全体の上界となるような、特定の巨大な数 <InlineMath math="y" /> が存在する」という意味になる。そのような自然数は存在しないため、この主張は<strong>偽</strong>である。
                        </p>
                    </div>
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="量化子の順序の重要性"
            >
                <p>
                    上記の Example が示すように、<InlineMath math="\forall x\,\exists y" /> と <InlineMath math="\exists y\,\forall x" /> は全く異なる意味を持ちます。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\forall x\,\exists y \dots" /> ： <InlineMath math="y" /> の選び方は <strong><InlineMath math="x" /> に依存して（<InlineMath math="x" /> を見てから）決めてよい</strong>。</li>
                    <li><InlineMath math="\exists y\,\forall x \dots" /> ： どんな <InlineMath math="x" /> が来ても通用するような、<strong>絶対的で共通の <InlineMath math="y" /> を最初に1つ提示しなければならない</strong>。</li>
                </ul>
                <p>
                    数学において、この量化子の順序の取り違えは致命的な誤りを招きます（例：関数の「各点連続」と「一様連続」の違いなどは、まさにこの量化子の順序の違いとして定式化されます）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>項を等号や述語で結んだものを原子論理式という。</li>
                    <li>論理式は、原子論理式から論理結合子と量化子（<InlineMath math="\forall, \exists" />）を有限回用いて帰納的に作られる。</li>
                    <li>複数の量化子が連続する場合、その順序を入れ替えると論理式の意味（真偽）が根本的に変わってしまうため、注意が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}