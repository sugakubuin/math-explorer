import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FastExponentiation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                RSA 暗号の理論を学んだ際、 <InlineMath math="M^e \pmod{n}" /> という巨大なべき乗計算が必要になることを見ました。
                指数 <InlineMath math="e" /> が数百桁に及ぶ場合、通常の掛け算を繰り返していては一生かかっても計算は終わりません。
                これを解決するのが、計算機科学における必須アルゴリズム <strong>反復自乗法 (Binary Exponentiation)</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反復自乗法の原理</h2>

            <p>
                「指数を二進数で分解し、二乗を繰り返す」ことで、計算回数を劇的に減らすことができます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (反復自乗法)">
                <p>
                    <InlineMath math="a^n \pmod{m}" /> を計算する際、指数 <InlineMath math="n" /> を二進数
                    <BlockMath math="n = b_k 2^k + b_{k-1} 2^{k-1} + \dots + b_1 2^1 + b_0 2^0 \quad (b_i \in \{0, 1\})" />
                    と展開する。これを利用して、
                    <BlockMath math="a^n = (a^{2^k})^{b_k} \times (a^{2^{k-1}})^{b_{k-1}} \times \dots \times (a^{2^0})^{b_0}" />
                    として計算する。 <InlineMath math="a^{2^i}" /> は前の項を二乗するだけで得られるため、高速に計算可能である。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 5.4-1 (計算量の削減)">
                <p>
                    単純な繰り返し乗算では <InlineMath math="n" /> 回の乗算が必要（計算量 <InlineMath math="O(n)" /> ）だが、
                    反復自乗法では指数 <InlineMath math="n" /> のビット数、すなわち <InlineMath math="\lfloor \log_2 n \rfloor + 1" /> 回程度の乗算で済む（計算量 <InlineMath math="O(\log n)" /> ）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ステップ・バイ・ステップ計算例</h2>

            <p>
                具体的に、手計算と同じ手順をシミュレートしてみましょう。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (3^{19} \pmod{7} の計算)">
                <p>
                    指数 19 を二進数にすると <InlineMath math="19 = 16 + 2 + 1 = (10011)_2" /> です。
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left border-collapse border border-slate-300 dark:border-slate-600">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">ステップ (<InlineMath math="i" />)</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">指数 (<InlineMath math="2^i" />)</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">べき乗 (<InlineMath math="a^{2^i} \pmod{7}" />)</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">ビット (<InlineMath math="b_i" />)</th>
                                <th className="p-2 border border-slate-300 dark:border-slate-600">結果への寄与</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">0</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">1</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="3^1 \equiv 3" /></td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">1</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="\times 3" /></td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">1</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">2</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="3^2 = 9 \equiv 2" /></td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">1</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="\times 2" /></td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">2</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">4</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="2^2 = 4" /></td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">0</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">-</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">3</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">8</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="4^2 = 16 \equiv 2" /></td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">0</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">-</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">4</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">16</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="2^2 = 4" /></td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600">1</td>
                                <td className="p-2 border border-slate-300 dark:border-slate-600"><InlineMath math="\times 4" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-4">
                    最終結果： <InlineMath math="3 \times 2 \times 4 = 24 \equiv 3 \pmod{7}" /> 。
                    19回の掛け算が必要なところ、わずか 5 回の二乗/乗算で済みました。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="アルゴリズムの重要性">
                <p>
                    このアルゴリズムは、指数の桁数が大きければ大きいほど威力を発揮します。
                    例えば、RSA 暗号で使われる 1024 ビットの指数（約 300 桁）であっても、反復自乗法を用いればたった 1000 回程度の乗算で計算が完了します。
                    フェルマーの小定理が「何を計算すべきか」を教えるなら、反復自乗法は「いかに速く計算するか」を解決するものと言えます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>反復自乗法</strong>： 指数を二進数で捉え、二乗を繰り返す高速計算手法。</li>
                    <li><strong>計算量</strong>： <InlineMath math="O(n)" /> から <InlineMath math="O(\log n)" /> への劇的な改善。</li>
                    <li><strong>実用的価値</strong>： このアルゴリズムなくして、現代の暗号通信の実用化はあり得なかった。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
