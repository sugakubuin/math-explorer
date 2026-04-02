import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TautologiesAndLogicalEquivalence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で見たように、どんな状況（付値）であっても常に真となる論理式が存在します。このような式は数学的な法則そのものを表しており、論理的同値変形という強力なツールの基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">トートロジーと矛盾式</h2>

            <p className="leading-relaxed">
                論理式の「絶対的な正しさ」を意味論の言葉で定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-1 (トートロジーと矛盾式)"
            >
                <p>
                    すべての付値 <InlineMath math="v" /> に対して常に真となる（すなわち <InlineMath math="v(\varphi) = \top" /> を満たす）論理式 <InlineMath math="\varphi" /> を<strong>トートロジー（tautology, 恒真式）</strong>という。このことを記号で
                    <BlockMath math="\models \varphi" />
                    と書く。
                </p>
                <p>
                    逆に、すべての付値 <InlineMath math="v" /> に対して常に偽となる（すなわち <InlineMath math="v(\varphi) = \bot" /> を満たす）論理式を<strong>矛盾式（contradiction, 恒偽式）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.2-1 (基本的なトートロジー)"
            >
                <p>
                    以下の論理式は、真理表をかくとすべての行で <InlineMath math="\top" /> となるためトートロジーである。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>排中律：</strong> <InlineMath math="p \lor \neg p" /> （どんな命題も真か偽のどちらかである）</li>
                    <li><strong>二重否定の除去：</strong> <InlineMath math="\neg\neg p \leftrightarrow p" /> （「〜でないことはない」は肯定と同じ）</li>
                    <li><strong>仮言三段論法：</strong> <InlineMath math="((p \to q) \land (q \to r)) \to (p \to r)" /> （推移律）</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.2-2 (矛盾式と爆発律)"
            >
                <p>
                    <InlineMath math="p \land \neg p" /> は、<InlineMath math="p = \top" /> でも <InlineMath math="p = \bot" /> でも必ず <InlineMath math="\bot" /> になるため矛盾式である。
                </p>
                <p>
                    この矛盾式を前件とする含意 <InlineMath math="(p \land \neg p) \to q" /> を考えてみよう。含意の定義（前件が偽なら全体は真）より、この式はトートロジーになる。
                    これは「矛盾からは、どんな結論 <InlineMath math="q" /> であっても導くことができる」という<strong>爆発律（ex falso quodlibet）</strong>の論理的根拠となっている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">論理的同値と基本変換則</h2>

            <p className="leading-relaxed">
                2つの異なる論理式が、真理値としては全く同じ振る舞いをする場合があります。これを論理的同値と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-2 (論理的同値)"
            >
                <p>
                    2つの論理式 <InlineMath math="\varphi" /> と <InlineMath math="\psi" /> が、すべての付値 <InlineMath math="v" /> に対して同じ真理値をとるとき（<InlineMath math="v(\varphi) = v(\psi)" />）、両者は<strong>論理的同値（logically equivalent）</strong>であるといい、
                    <BlockMath math="\varphi \equiv \psi" />
                    と書く。これは <InlineMath math="\models \varphi \leftrightarrow \psi" /> と定義しても同値である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                論理的同値性を用いることで、論理式を式変形（代数的な変形）によって簡略化することができます。特に重要なのがド・モルガンの法則です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.2-1 (ド・モルガン則とその他の基本同値)"
            >
                <p>
                    任意の論理式 <InlineMath math="\varphi, \psi" /> に対して、以下の論理的同値が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>ド・モルガンの法則：</strong> <InlineMath math="\neg(\varphi \land \psi) \equiv \neg\varphi \lor \neg\psi" /></li>
                    <li><strong>ド・モルガンの法則：</strong> <InlineMath math="\neg(\varphi \lor \psi) \equiv \neg\varphi \land \neg\psi" /></li>
                    <li><strong>含意の変形：</strong> <InlineMath math="\varphi \to \psi \equiv \neg\varphi \lor \psi" /></li>
                    <li><strong>双条件の変形：</strong> <InlineMath math="\varphi \leftrightarrow \psi \equiv (\varphi \to \psi) \land (\psi \to \varphi)" /></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    最初のド・モルガンの法則 <InlineMath math="\neg(\varphi \land \psi) \equiv \neg\varphi \lor \neg\psi" /> を真理表で証明する。
                    <InlineMath math="\varphi, \psi" /> の真理値の 4 通りの組み合わせを考える。
                </p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-max border-collapse border border-slate-300 dark:border-slate-600 mx-auto">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\varphi" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\psi" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\varphi \land \psi" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\neg(\varphi \land \psi)" /></th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\neg\varphi \lor \neg\psi" /></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\bot" /></strong></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\bot" /></strong> (<InlineMath math="\bot \lor \bot" />)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong> (<InlineMath math="\bot \lor \top" />)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\top" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong> (<InlineMath math="\top \lor \bot" />)</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="\bot" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 bg-blue-50 dark:bg-blue-900/30"><strong><InlineMath math="\top" /></strong> (<InlineMath math="\top \lor \top" />)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    すべての付値について右側の2つの列が完全に一致しているため、これらは論理的同値である。他の法則も同様の真理表によって容易に証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.2-3 (論理式の簡略化)"
            >
                <p>
                    「<InlineMath math="p" /> ならば <InlineMath math="q" />」という主張を否定する式 <InlineMath math="\neg(p \to q)" /> を、同値法則を用いて直感的な形に変形してみよう。
                </p>
                <p>
                    まず、含意の変形公式を用いると、
                    <BlockMath math="\neg(p \to q) \equiv \neg(\neg p \lor q)" />
                    となる。次にこれにド・モルガンの法則を適用し、二重否定を消去する。
                    <BlockMath math="\neg(\neg p \lor q) \equiv \neg(\neg p) \land \neg q \equiv p \land \neg q" />
                </p>
                <p>
                    つまり、「『<InlineMath math="p" /> ならば <InlineMath math="q" />』は成り立たない」ということは、「<InlineMath math="p" /> が成り立っているのに <InlineMath math="q" /> は成り立っていない（反例が存在する）」ことと論理的に全く同じ（同値）であることが数式操作から明確に導かれた。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>すべての真理値割り当てで真になる論理式をトートロジーといい、<InlineMath math="\models \varphi" /> と書く。</li>
                    <li>常に同じ真理値をとる2つの論理式を論理的同値といい、<InlineMath math="\varphi \equiv \psi" /> と書く。</li>
                    <li>ド・モルガンの法則や含意の変形（<InlineMath math="p \to q \equiv \neg p \lor q" />）などの基本変換則を用いることで、論理式を代数的に簡略化できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}