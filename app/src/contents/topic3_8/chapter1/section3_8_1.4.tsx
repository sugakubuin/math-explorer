import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicGroupProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の公理は非常にシンプルですが、そこから導き出される性質は強固です。
                本節では、単位元や逆元の一意性、および方程式を解く際に不可欠な「簡約法則」を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性と逆元の性質</h2>

            <ContentBox type="theorem" title="Theorem 1.4-1 (単位元の一意性)">
                <p>
                    群 <InlineMath math="G" /> の単位元は唯一つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="e" /> と <InlineMath math="e'" /> が共に群 <InlineMath math="G" /> の単位元であると仮定する。このとき、
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="e" /> が単位元であることから、<InlineMath math="e e' = e'" />。</li>
                    <li><InlineMath math="e'" /> が単位元であることから、<InlineMath math="e e' = e" />。</li>
                </ul>
                <p className="mt-2">
                    よって <InlineMath math="e = e'" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.4-2 (逆元の一意性)">
                <p>
                    群 <InlineMath math="G" /> の各元 <InlineMath math="a" /> に対して、その逆元 <InlineMath math="a^{-1}" /> は唯一つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="b, c" /> が共に <InlineMath math="a" /> の逆元であるとする。
                    単位元の性質と結合律を用いると、
                    <BlockMath math="b = be = b(ac) = (ba)c = ec = c" />
                    となり、<InlineMath math="b = c" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.4-1 (逆元の性質)">
                <p>
                    群 <InlineMath math="G" /> の元 <InlineMath math="a, b" /> について次が成り立つ。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="(a^{-1})^{-1} = a" /></li>
                    <li><InlineMath math="(ab)^{-1} = b^{-1} a^{-1}" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4 text-sm mt-2">
                    <li>
                        <b><InlineMath math="(a^{-1})^{-1} = a" /> の証明</b>：
                        逆元の定義より、<InlineMath math="a^{-1}" /> の逆元 <InlineMath math="x" /> とは、<InlineMath math="a^{-1}x = x a^{-1} = e" /> を満たす元である。
                        一方、群の公理より <InlineMath math="a^{-1}a = a a^{-1} = e" /> が成り立つ。
                        逆元の一意性（Theorem 1.4-2）より、<InlineMath math="x = a" />、すなわち <InlineMath math="(a^{-1})^{-1} = a" /> である。
                    </li>
                    <li>
                        <b><InlineMath math="(ab)^{-1} = b^{-1} a^{-1}" /> の証明</b>：
                        <InlineMath math="ab" /> に右から <InlineMath math="b^{-1} a^{-1}" /> をかけると、
                        <BlockMath math="(ab)(b^{-1} a^{-1}) = a(b b^{-1})a^{-1} = a e a^{-1} = a a^{-1} = e" />
                        同様に左からかけても、
                        <BlockMath math="(b^{-1} a^{-1})(ab) = b^{-1}(a^{-1} a)b = b^{-1} e b = b^{-1} b = e" />
                        となる。逆元の一意性より、<InlineMath math="b^{-1} a^{-1}" /> は <InlineMath math="ab" /> の逆元である。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">簡約法則</h2>

            <ContentBox type="theorem" title="Theorem 1.4-3 (簡約法則)">
                <p>
                    群 <InlineMath math="G" /> において、次が成り立つ。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="ab = ac \implies b = c" /> （左簡約）</li>
                    <li><InlineMath math="ba = ca \implies b = c" /> （右簡約）</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    左簡約について：<InlineMath math="ab = ac" /> の両辺に左から逆元 <InlineMath math="a^{-1}" /> をかける。
                    <BlockMath math="\begin{aligned} a^{-1}(ab) = a^{-1}(ac) &\implies (a^{-1}a)b = (a^{-1}a)c \\ &\implies eb = ec \\ &\implies b = c \end{aligned}" />
                    であり、主張が示された。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">演算表の性質</h2>

            <p className="leading-relaxed">
                有限群の演算（積）を一覧表にしたものを演算表といいます。この表には、群の性質を反映した興味深い数学的構造が現れます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-2 (演算表とラテン方陣)">
                <p>
                    群の演算表において、各行および各列には、群のすべての元がちょうど 1 回ずつ現れる（ラテン方陣の性質）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    簡約法則からの帰結である。例えば、第 <InlineMath math="g" /> 行において同じ元 <InlineMath math="x" /> が 2 度現れたとすると、
                    ある相異なる元 <InlineMath math="h, k" /> について <InlineMath math="gh = x" /> かつ <InlineMath math="gk = x" /> となるが、
                    これは <InlineMath math="gh = gk \implies h = k" /> となり矛盾する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に、少数の元を持つ有限群の演算表を作成し、この性質が成り立っていることを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.4-1 (対称群 S_3 の演算表)">
                <p>
                    3次対称群 <InlineMath math="S_3 = \{e, (123), (132), (12), (13), (23)\}" /> の演算表は以下の通りである。
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700 border border-slate-200 dark:border-slate-700 text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="px-3 py-2 text-center font-bold border-r border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900"><InlineMath math="\cdot" /></th>
                                <th className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></th>
                                <th className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></th>
                                <th className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></th>
                                <th className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></th>
                                <th className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></th>
                                <th className="px-3 py-2 text-center font-semibold"><InlineMath math="(23)" /></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="(23)" /></td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="(12)" /></td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="(13)" /></td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="(123)" /></td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="e" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="(132)" /></td>
                            </tr>
                            <tr>
                                <td className="px-3 py-2 text-center font-semibold border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(23)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(13)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(12)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(132)" /></td>
                                <td className="px-3 py-2 text-center border-r border-slate-200 dark:border-slate-700"><InlineMath math="(123)" /></td>
                                <td className="px-3 py-2 text-center"><InlineMath math="e" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    この表を見ると、どの行、どの列にも <InlineMath math="S_3" /> の 6 つの元が重複なく 1 回ずつ現れていることがわかる。
                    これは Proposition 1.4-2 で述べた通り、群の簡約法則が成り立つことにより保証されている規則的な構造である。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>単位元や逆元は、群の公理から「一意に」定まることが保証される。</li>
                    <li>簡約法則により、群の中では代数方程式を自由に取り扱うことができる。</li>
                    <li>群の演算表は、すべての元が重なりなく現れる極めて規則正しい構造（ラテン方陣）を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
