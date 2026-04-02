import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NaturalDeductionSystem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに、論理式が構造の中で「真」になるという意味論を学びました。本章からは再び構文論に戻り、記号操作だけで定理を導く「証明」について考えます。
                ここでは、人間の直感的な思考プロセスに最も近い「自然演繹（Natural Deduction）」という証明体系を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自然演繹の推論規則</h2>

            <p className="leading-relaxed">
                自然演繹は、各論理記号に対して「それを結論として導くための規則（導入規則）」と「それが仮定にあるときに使える規則（除去規則）」のペアを定めた体系です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.1-1 (自然演繹体系)"
            >
                <p>
                    <strong>自然演繹（Natural Deduction, ND）体系：</strong> 仮定の集合 <InlineMath math="\Gamma" /> から論理式 <InlineMath math="\varphi" /> への証明を、木構造（証明木）として表す形式的証明体系。
                    各論理結合子に対して、以下の「導入規則（Introduction rule, <InlineMath math="I" />）」と「除去規則（Elimination rule, <InlineMath math="E" />）」が定められている。
                </p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-max border-collapse border border-slate-300 dark:border-slate-600 mx-auto">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">記号</th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">導入規則</th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">除去規則</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-bold"><InlineMath math="\land" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">
                                    <BlockMath math="\frac{\varphi \quad \psi}{\varphi \land \psi} (\land I)" />
                                </td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">
                                    <BlockMath math="\frac{\varphi \land \psi}{\varphi} (\land E_1) \quad \frac{\varphi \land \psi}{\psi} (\land E_2)" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-bold"><InlineMath math="\to" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">
                                    <BlockMath math="\frac{\begin{matrix} [\varphi] \\ \vdots \\ \psi \end{matrix}}{\varphi \to \psi} (\to I)" />
                                    <span className="text-xs text-gray-500">（仮定 <InlineMath math="\varphi" /> を解放）</span>
                                </td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">
                                    <BlockMath math="\frac{\varphi \quad \varphi \to \psi}{\psi} (\to E)" />
                                    <span className="text-xs text-gray-500">（＝モーダスポネンス）</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.1-1 (自然演繹の証明例：<InlineMath math="p \land q \vdash q \land p" />)</span>}
            >
                <p>
                    「<InlineMath math="p" /> かつ <InlineMath math="q" />」が成り立つなら「<InlineMath math="q" /> かつ <InlineMath math="p" />」が成り立つという直感的な事実を、自然演繹の証明木で形式化する。
                </p>
                <BlockMath math="\frac{\frac{p \land q}{q} (\land E_2) \quad \frac{p \land q}{p} (\land E_1)}{q \land p} (\land I)" />
                <p>
                    まず仮定 <InlineMath math="p \land q" /> から <InlineMath math="\land" />-除去規則によって <InlineMath math="q" /> と <InlineMath math="p" /> をそれぞれ取り出す。次にそれらを <InlineMath math="\land" />-導入規則で結合し、<InlineMath math="q \land p" /> を導いている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">量化子規則と仮定の管理</h2>

            <p className="leading-relaxed">
                述語論理における量化子（<InlineMath math="\forall, \exists" />）についても、同様に導入と除去のペアが定義されます。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 4.1-2 (<InlineMath math="\forall" />-導入と <InlineMath math="\forall" />-除去)</span>}
            >
                <ul className="list-disc list-inside space-y-4 mt-2">
                    <li>
                        <strong><InlineMath math="\forall" />-導入規則（<InlineMath math="\forall I" />）：</strong>
                        <BlockMath math="\frac{\varphi}{\forall x\,\varphi} (\forall I)" />
                        <strong>条件：</strong> 変数 <InlineMath math="x" /> が、この証明で解放されていない（現在生きている）いかなる仮定の中にも自由変数として現れないこと。
                        （「任意の <InlineMath math="x" /> で成り立つ」と結論づけるためには、<InlineMath math="x" /> に特別な制約が課されていない状態から <InlineMath math="\varphi" /> を導く必要があるため）
                    </li>
                    <li>
                        <strong><InlineMath math="\forall" />-除去規則（全称例化, <InlineMath math="\forall E" />）：</strong>
                        <BlockMath math="\frac{\forall x\,\varphi}{\varphi[t/x]} (\forall E)" />
                        <strong>条件：</strong> 項 <InlineMath math="t" /> が、<InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して自由であること。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.1-2 (<InlineMath math="\vdash \forall x\,P(x) \to P(c)" /> の証明)</span>}
            >
                <p>
                    全称例化の公理そのものを自然演繹で証明する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>まず、<InlineMath math="\forall x\,P(x)" /> を仮定として導入する（これを <InlineMath math="[1]" /> と名付ける）。</li>
                    <li><InlineMath math="\forall" />-除去規則により、<InlineMath math="\forall x\,P(x)" /> から <InlineMath math="P(c)" /> を導く。</li>
                    <li><InlineMath math="\to" />-導入規則により、仮定 <InlineMath math="[1]" /> を解放（discharge）し、結論 <InlineMath math="\forall x\,P(x) \to P(c)" /> を得る。</li>
                </ol>
                <p>これを証明木で書くと以下のようになる。</p>
                <BlockMath math="\frac{\frac{[\forall x\,P(x)]^1}{P(c)} (\forall E)}{\forall x\,P(x) \to P(c)} (\to I)^1" />
            </ContentBox>

            <ContentBox
                type="remark"
                title="自然演繹の特徴"
            >
                <p>
                    自然演繹は、ヒルベルト流（後述）と比べて証明がより直感的で、「数学の実際の証明」に近い構造を持ちます。特に、「仮定を置いて議論を進め、後でその仮定を『〜ならば』という形で回収する（仮定の解放）」という人間の思考プロセスが、証明木の「枝の切断」として視覚的に表現されているのが特徴です。
                </p>
                <p>
                    また、カリー＝ハワード対応を通じて、自然演繹の証明図はプログラミング言語の型付きラムダ計算（プログラムそのもの）と完全に1対1に対応することが知られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>自然演繹（ND）</strong>は、各論理記号の「導入規則」と「除去規則」からなる証明体系である。</li>
                    <li>証明は木構造（証明図）で表され、仮定の「導入」と「解放」を明示的に管理する。</li>
                    <li><InlineMath math="\forall" />-導入のような量化子の規則には、変数の自由性に関する厳密な適用条件がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}