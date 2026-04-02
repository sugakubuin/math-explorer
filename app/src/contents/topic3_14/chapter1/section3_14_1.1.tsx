import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropositionsAndLogicalConnectives() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                <b>数理論理学（数学基礎論）</b>への第一歩として、最も単純な論理の体系である「命題論理（propositional logic）」から始めます。命題論理は、日常的な「真か偽か」の判断を、数学的な記号の操作へと抽象化したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">命題変数と論理結合子の定義</h2>

            <p className="leading-relaxed">
                まず、論理を組み立てるための「部品」となる記号を用意します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-1 (命題変数)"
            >
                <p>
                    真（<InlineMath math="\top" />、True）または偽（<InlineMath math="\bot" />、False）のいずれかの値をとる記号を<strong>命題変数（propositional variable）</strong>と呼び、<InlineMath math="p, q, r, \ldots" /> などで表す。
                </p>
                <p>
                    これは「今日は雨が降っている」「1+1=2である」といった、真偽が定まる個別の主張（命題）を抽象化したものであり、命題論理における最小の構成単位である。
                </p>
            </ContentBox>

            <ContentBox
                type="definition"
                title="Definition 1.1-2 (論理結合子)"
            >
                <p>
                    命題変数を組み合わせてより複雑な命題を作るための演算子を<strong>論理結合子（logical connectives）</strong>と呼ぶ。基本となるのは以下の 5 種類である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>否定（negation）：</strong> <InlineMath math="\neg" /> （〜でない）</li>
                    <li><strong>連言（conjunction）：</strong> <InlineMath math="\land" /> （〜かつ〜）</li>
                    <li><strong>選言（disjunction）：</strong> <InlineMath math="\lor" /> （〜または〜）</li>
                    <li><strong>含意（implication）：</strong> <InlineMath math="\to" /> （〜ならば〜）</li>
                    <li><strong>双条件（biconditional）：</strong> <InlineMath math="\leftrightarrow" /> （〜と同値である）</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                これらの部品を「文法的に正しく」並べた記号の列を論理式と呼びます。その正しい並べ方は、帰納的（再帰的）に定義されます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-3 (論理式の帰納的定義)"
            >
                <p>
                    <strong>論理式（well-formed formula, wff）</strong>の集合は、以下の規則によって帰納的に定義される。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>任意の命題変数は論理式である。（これを原子論理式という）</li>
                    <li><InlineMath math="\varphi" /> が論理式ならば、<InlineMath math="\neg\varphi" /> も論理式である。</li>
                    <li><InlineMath math="\varphi" /> と <InlineMath math="\psi" /> が論理式ならば、<InlineMath math="(\varphi \land \psi)" />、<InlineMath math="(\varphi \lor \psi)" />、<InlineMath math="(\varphi \to \psi)" />、<InlineMath math="(\varphi \leftrightarrow \psi)" /> も論理式である。</li>
                </ol>
                <p>
                    以上の規則を有限回適用して得られる記号列のみを論理式とする。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.1-1 (論理式の例と括弧の省略)"
            >
                <p>
                    規則に従って構成された <InlineMath math="p" />、<InlineMath math="\neg p" />、<InlineMath math="(p \land q)" />、<InlineMath math="(p \to (\neg q \lor r))" /> などは正しい論理式である。
                </p>
                <p>
                    一方、<InlineMath math="p \, q" />（結合子がない）、<InlineMath math="\land p" />（<InlineMath math="\land" /> の左側がない）、<InlineMath math="(p \to)" /> などの記号列は、規則から生成できないため論理式ではない。
                </p>
                <p>
                    厳密には多数の括弧が必要になるため、慣習として<strong>結合の強さ（優先順位）</strong>を定めて括弧を省略することが多い。優先順位は強い順に
                    <BlockMath math="\neg \quad > \quad \land, \lor \quad > \quad \to, \leftrightarrow" />
                    とする。これにより、例えば <InlineMath math="(\neg p \lor q) \to r" /> は <InlineMath math="\neg p \lor q \to r" /> と書くことができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">真理値割り当てと真理表</h2>

            <p className="leading-relaxed">
                論理式という「記号の並び（構文）」に対して、それが真か偽かという「意味（意味論）」を与えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-4 (付値 / 真理値割り当て)"
            >
                <p>
                    命題変数の集合から真理値の集合 <InlineMath math="\{\top, \bot\}" /> への写像 <InlineMath math="v" /> を<strong>付値（valuation）</strong>または真理値割り当てという。
                </p>
                <p>
                    付値 <InlineMath math="v" /> が与えられたとき、任意の論理式 <InlineMath math="\varphi" /> の真理値 <InlineMath math="v(\varphi) \in \{\top, \bot\}" /> を以下の規則で帰納的に拡張して定める。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="v(\neg\varphi) = \top \iff v(\varphi) = \bot" /></li>
                    <li><InlineMath math="v(\varphi \land \psi) = \top \iff v(\varphi) = \top" /> かつ <InlineMath math="v(\psi) = \top" /></li>
                    <li><InlineMath math="v(\varphi \lor \psi) = \top \iff v(\varphi) = \top" /> または <InlineMath math="v(\psi) = \top" /></li>
                    <li><InlineMath math="v(\varphi \to \psi) = \top \iff v(\varphi) = \bot" /> または <InlineMath math="v(\psi) = \top" /></li>
                    <li><InlineMath math="v(\varphi \leftrightarrow \psi) = \top \iff v(\varphi) = v(\psi)" /></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                特に「含意（<InlineMath math="\to" />）」の真理値は、日常言語の「ならば」の感覚と少し異なるため注意が必要です。
            </p>

            <ContentBox
                type="example"
                title="Example 1.1-2 (含意の真理表)"
            >
                <p>
                    含意 <InlineMath math="p \to q" /> は、「<InlineMath math="p" /> が真（<InlineMath math="\top" />）で <InlineMath math="q" /> が偽（<InlineMath math="\bot" />）のときのみ偽（<InlineMath math="\bot" />）」となり、それ以外はすべて真（<InlineMath math="\top" />）となる。
                </p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-max border-collapse border border-slate-300 dark:border-slate-600">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="p" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="q" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="p \to q" /></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong><InlineMath math="\top" /></strong></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><strong><InlineMath math="\top" /></strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    「<InlineMath math="p" /> が偽のときは、<InlineMath math="q" /> が何であっても全体としては真になる（空虚な真）」という規則は、数学的な推論を矛盾なく構築するために不可欠な設計である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.1-3 (真理表による評価)"
            >
                <p>
                    より複雑な論理式 <InlineMath math="\neg p \to (p \to q)" /> の真理値を、<InlineMath math="p, q" /> の全 4 通りの組み合わせについて計算してみよう。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="p = \top, q = \top" /> のとき：<InlineMath math="\neg p = \bot" />、<InlineMath math="p \to q = \top" />。前件が <InlineMath math="\bot" /> なので全体は <InlineMath math="\top" />。</li>
                    <li><InlineMath math="p = \top, q = \bot" /> のとき：<InlineMath math="\neg p = \bot" />、<InlineMath math="p \to q = \bot" />。前件が <InlineMath math="\bot" /> なので全体は <InlineMath math="\top" />。</li>
                    <li><InlineMath math="p = \bot, q = \top" /> のとき：<InlineMath math="\neg p = \top" />、<InlineMath math="p \to q = \top" />。前件が <InlineMath math="\top" />、後件が <InlineMath math="\top" /> なので全体は <InlineMath math="\top" />。</li>
                    <li><InlineMath math="p = \bot, q = \bot" /> のとき：<InlineMath math="\neg p = \top" />、<InlineMath math="p \to q = \top" />。前件が <InlineMath math="\top" />、後件が <InlineMath math="\top" /> なので全体は <InlineMath math="\top" />。</li>
                </ul>
                <p>
                    結果として、この論理式は変数にどんな真理値を代入しても必ず真（<InlineMath math="\top" />）になることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>命題変数を論理結合子（<InlineMath math="\neg, \land, \lor, \to, \leftrightarrow" />）で有限回つないだ記号列を論理式という。</li>
                    <li>論理式の意味は、各命題変数に対する真・偽の割り当て（付値）から帰納的に計算される。</li>
                    <li>特に含意 <InlineMath math="p \to q" /> は、前件 <InlineMath math="p" /> が偽であれば無条件に真となるよう定義されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}