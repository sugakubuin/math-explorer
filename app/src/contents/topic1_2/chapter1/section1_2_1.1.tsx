import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LimitOfSequence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded p-4 mb-8">
                <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">微積分学とはどのような学問か</h3>
                <p>
                    微積分学は、<strong>変化</strong>と<strong>蓄積</strong>を数学的に記述するための言語です。
                    物体の速度・加速度、曲線の面積、熱の伝わり方、電気回路の応答——
                    自然科学・工学・経済学のいたるところで、「瞬間の変化率」と「連続的な和」を
                    扱う必要が生じます。それを担うのが<strong>微分</strong>と<strong>積分</strong>です。
                </p>
                <p className="mt-2">
                    その根底にある概念が<strong>極限</strong>（limit）です。
                    「限りなく近づく」という直感を数学的に厳密に扱う道具を、本章で整えます。
                    1-2 微分積分学Iでは <InlineMath math="\varepsilon\text{-}\delta" /> 論法は用いず、計算と直感を重視します。
                    厳密な理論は2-2 微分積分学II、2-3 実解析で扱います。
                </p>
            </div>

            <p>
                高校数学でも数列の極限は登場しましたが、大学ではより体系的に整理し直します。
                まず「数列とは何か」を定義し、「収束・発散」という概念を明確にしたうえで、
                極限の計算規則を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* 1. 数列 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">数列</h2>
            <p>
                数列とは、その名の通り「数が列になったもの」ですが、数学的には自然数からの写像として捉えるとスッキリします。
                つまり、「1番目はこれ、2番目はこれ……」と番号ごとに値が割り当てられている状態です。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 （数列）">
                <p>
                    自然数 <InlineMath math="n" /> に実数 <InlineMath math="a_n" /> を対応させる写像を<strong>数列</strong>（sequence）といい、
                    <InlineMath math="\{a_n\}" /> と書く。
                </p>
                <BlockMath math="\{a_n\} = a_1, a_2, a_3, \ldots, a_n, \ldots" />
            </ContentBox>

            <p className="mt-4">
                一般項 <InlineMath math="a_n" /> が <InlineMath math="n" /> の式で与えられると、どのような数列か具体的にイメージしやすくなります。
            </p>

            <ContentBox type="example" title="Example 1.1-1">
                <p>具体的な数列の例：</p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-full text-sm text-left text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        <thead className="text-xs text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-200">
                            <tr>
                                <th className="px-6 py-3 border border-slate-200 dark:border-slate-600">一般項 <InlineMath math="a_n" /></th>
                                <th className="px-6 py-3 border border-slate-200 dark:border-slate-600"><InlineMath math="a_1" /></th>
                                <th className="px-6 py-3 border border-slate-200 dark:border-slate-600"><InlineMath math="a_2" /></th>
                                <th className="px-6 py-3 border border-slate-200 dark:border-slate-600"><InlineMath math="a_3" /></th>
                                <th className="px-6 py-3 border border-slate-200 dark:border-slate-600"><InlineMath math="\cdots" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\dfrac{1}{n}" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="1" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="1/2" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="1/3" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\cdots" /></td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\dfrac{n}{n+1}" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="1/2" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="2/3" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="3/4" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\cdots" /></td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="(-1)^n" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="-1" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="1" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="-1" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\cdots" /></td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="2^n" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="2" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="4" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="8" /></td>
                                <td className="px-6 py-4 border border-slate-200 dark:border-slate-600"><InlineMath math="\cdots" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <InlineMath math="\{1/n\}" /> はどんどん小さくなって 0 に近づきそうです。<InlineMath math="\{(-1)^n\}" /> は -1 と 1 を行ったり来たりしていますね。
                </p>
            </ContentBox>

            {/* 2. 収束と極限値 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">収束と極限値</h2>
            <p>
                数列の先の方が、ある決まった値に近づいていく現象を数式で表現しましょう。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 （収束・極限値）">
                <p>
                    「<InlineMath math="n \to \infty" /> のとき <InlineMath math="a_n" /> が一定値 <InlineMath math="\alpha" /> に限りなく近づく」ことを、数列 <InlineMath math="\{a_n\}" /> は <InlineMath math="\alpha" /> に<strong>収束する</strong>といい、
                </p>
                <BlockMath math="\lim_{n \to \infty} a_n = \alpha" />
                <BlockMath math="a_n \to \alpha \quad (n \to \infty)" />
                <p>
                    などと書く。このとき <InlineMath math="\alpha" /> を <InlineMath math="\{a_n\}" /> の<strong>極限値</strong>と呼ぶ。厳密な定義（<InlineMath math="\varepsilon\text{-}N" /> 論法）は微積分学IIで扱う。
                </p>
            </ContentBox>

            {/* SVG Illustration */}
            <div className="flex flex-col items-center my-8">
                <svg width="580" height="200" viewBox="0 0 580 200" className="w-full max-w-[600px] h-auto border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded">
                    {/* Background handled by container */}

                    {/* Limit Line alpha */}
                    <line x1="50" y1="70" x2="560" y2="70" stroke="#8a6000" strokeWidth="1.5" strokeDasharray="6,4" />
                    <text x="565" y="74" fontSize="14" fill="#8a6000" fontStyle="italic">α</text>

                    {/* Axes */}
                    <line x1="55" y1="170" x2="555" y2="170" stroke="currentColor" strokeWidth="1.2" className="text-slate-700 dark:text-slate-300" />
                    <line x1="55" y1="20" x2="55" y2="175" stroke="currentColor" strokeWidth="1.2" className="text-slate-700 dark:text-slate-300" />

                    {/* Labels */}
                    <text x="545" y="185" fontSize="13" fill="currentColor" fontStyle="italic" className="text-slate-500 dark:text-slate-400">n</text>
                    <text x="32" y="25" fontSize="13" fill="currentColor" fontStyle="italic" className="text-slate-500 dark:text-slate-400">a</text>
                    <text x="36" y="35" fontSize="10" fill="currentColor" className="text-slate-500 dark:text-slate-400">n</text>

                    {/* Points */}
                    <circle cx="90" cy="148" r="4" fill="#1a3a5c" />
                    <circle cx="140" cy="118" r="4" fill="#1a3a5c" />
                    <circle cx="190" cy="96" r="4" fill="#1a3a5c" />
                    <circle cx="240" cy="83" r="4" fill="#1a3a5c" />
                    <circle cx="290" cy="77" r="4" fill="#1a3a5c" />
                    <circle cx="340" cy="74" r="4" fill="#1a3a5c" />
                    <circle cx="390" cy="72" r="4" fill="#1a3a5c" />
                    <circle cx="440" cy="71" r="4" fill="#1a3a5c" />
                    <circle cx="490" cy="70.5" r="4" fill="#1a3a5c" />
                    <circle cx="535" cy="70.2" r="4" fill="#1a3a5c" />

                    {/* n Axis Ticks */}
                    <line x1="90" y1="168" x2="90" y2="173" stroke="currentColor" strokeWidth="1" className="text-slate-700 dark:text-slate-300" />
                    <text x="87" y="183" fontSize="11" fill="currentColor" className="text-slate-500 dark:text-slate-400">1</text>
                    <line x1="140" y1="168" x2="140" y2="173" stroke="currentColor" strokeWidth="1" className="text-slate-700 dark:text-slate-300" />
                    <text x="137" y="183" fontSize="11" fill="currentColor" className="text-slate-500 dark:text-slate-400">2</text>
                    <line x1="190" y1="168" x2="190" y2="173" stroke="currentColor" strokeWidth="1" className="text-slate-700 dark:text-slate-300" />
                    <text x="187" y="183" fontSize="11" fill="currentColor" className="text-slate-500 dark:text-slate-400">3</text>
                    <line x1="240" y1="168" x2="240" y2="173" stroke="currentColor" strokeWidth="1" className="text-slate-700 dark:text-slate-300" />
                    <text x="237" y="183" fontSize="11" fill="currentColor" className="text-slate-500 dark:text-slate-400">4</text>
                    <line x1="290" y1="168" x2="290" y2="173" stroke="currentColor" strokeWidth="1" className="text-slate-700 dark:text-slate-300" />
                    <text x="287" y="183" fontSize="11" fill="currentColor" className="text-slate-500 dark:text-slate-400">5</text>

                    {/* Arrow and Text */}
                    <text x="370" y="130" fontSize="12" fill="currentColor" fontStyle="italic" className="text-slate-500 dark:text-slate-400">α に収束</text>
                    <path d="M390,118 L390,78" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" className="text-slate-500 dark:text-slate-400" />
                    <defs>
                        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                            <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" className="text-slate-500 dark:text-slate-400" />
                        </marker>
                    </defs>
                </svg>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic">
                    Figure 1.1-1 &nbsp; 収束する数列のイメージ。点は極限値 <InlineMath math="\alpha" /> の線へ近づいていく。
                </p>
            </div>


            {/* 3. 基本的な極限の公式 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な極限の公式</h2>

            <p>
                極限の計算では、すべての問題を定義に戻って考えるのは大変です。
                そこで、「明らかに <InlineMath math="0" /> になる」ものなどを公式として認め、それを積み木のように組み合わせて複雑な極限を計算します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 （基本極限公式）">
                <p>以下が成り立つ。</p>
                <BlockMath math="\lim_{n\to\infty}\frac{1}{n} = 0, \quad \lim_{n\to\infty}\frac{1}{n^k} = 0\ (k>0), \quad \lim_{n\to\infty}c = c\ (c\in\mathbb{R})" />
            </ContentBox>

            <ContentBox type="note" title="Remark">
                <p>
                    <InlineMath math="1/n" /> や <InlineMath math="1/n^k" /> は、分母がどんどん大きくなるので全体としては <InlineMath math="0" /> に近づきます。
                    これらは感覚的には明らかですが、厳密な証明には <InlineMath math="\varepsilon\text{-}N" /> 論法が必要です。
                    ここでは直感を信じてこれらの結果を利用します。
                </p>
            </ContentBox>


            {/* 4. 極限の計算法則 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">極限の計算法則</h2>
            <p>
                収束する数列であれば、足し算や掛け算をしても、極限値も同じように計算できます。
                これにより、複雑な式をパーツごとに分解して極限を求められるようになります。
            </p>

            <ContentBox type="theorem" title="Proposition 1.1-1 （極限の四則演算）">
                <p>
                    <InlineMath math="\lim a_n = \alpha" />、<InlineMath math="\lim b_n = \beta" /> のとき、
                    和・差・スカラー倍・積・商（<InlineMath math="\beta\neq 0" />）で極限が交換できる。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="\lim (a_n \pm b_n) = \alpha \pm \beta" /></li>
                    <li><InlineMath math="\lim (c a_n) = c \alpha" /></li>
                    <li><InlineMath math="\lim (a_n b_n) = \alpha \beta" /></li>
                    <li><InlineMath math="\lim (a_n / b_n) = \alpha / \beta" /> （ただし <InlineMath math="\beta \ne 0" />）</li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="Remark （不定形）">
                <p>
                    この法則が使えるのは、<strong>個々の数列が収束しているときだけ</strong>です。
                    例えば <InlineMath math="\infty - \infty" /> や <InlineMath math="0/0" /> の形になるときは、この法則は使えません（不定形）。
                    その場合は式変形をして、収束する形を作り出す必要があります。
                </p>
            </ContentBox>


            {/* 5. 有理式の極限 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">有理式の極限</h2>
            <p>
                分数の形をした数列（有理式）の極限を求める定石は、<strong>「分母の最高次の項で分母・分子を割る」</strong>ことです。
                これによって、<InlineMath math="1/n^k \to 0" /> の形を作り出し、Theorem 1.1-1 を適用します。
            </p>

            <ContentBox type="theorem" title="Corollary 1.1-1 （有理式の極限）">
                <p>
                    分子の次数を <InlineMath math="p" />、分母の次数を <InlineMath math="q" /> とするとき、
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="p > q" /> （分子の方が次数が高い）<InlineMath math="\implies \pm\infty" /></li>
                    <li><InlineMath math="p = q" /> （次数が同じ）<InlineMath math="\implies" /> 最高次係数の比</li>
                    <li><InlineMath math="p < q" /> （分母の方が次数が高い）<InlineMath math="\implies 0" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2">
                <div className="space-y-6">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\dfrac{3n^2-2n+1}{2n^2+5}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> 分母・分子の最高次は <InlineMath math="n^2" /> なので、これで割ります。
                        </p>
                        <BlockMath math="\lim_{n\to\infty}\frac{3 - 2/n + 1/n^2}{2 + 5/n^2} = \frac{3-0+0}{2+0} = \frac{3}{2}." />
                        <p className="text-sm text-slate-500">
                            解説：<InlineMath math="1/n, 1/n^2 \to 0" /> となるので、係数の <InlineMath math="3/2" /> だけが残ります。
                        </p>
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\dfrac{n^3+1}{2n^2-3}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> 分母の最高次 <InlineMath math="n^2" /> で割ります。
                        </p>
                        <BlockMath math="\lim_{n\to\infty}\frac{n + 1/n^2}{2 - 3/n^2} = +\infty." />
                        <p className="text-sm text-slate-500">
                            解説：分母は <InlineMath math="2" /> に近づきますが、分子に <InlineMath math="n" /> が残るため無限大に発散します。
                        </p>
                    </div>
                    <div>
                        <p><strong>(3)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\dfrac{4n-1}{3n^2+2}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> 分母の最高次 <InlineMath math="n^2" /> で割ります。
                        </p>
                        <BlockMath math="\lim_{n\to\infty}\frac{4/n - 1/n^2}{3 + 2/n^2} = \frac{0-0}{3+0} = 0." />
                        <p className="text-sm text-slate-500">
                            解説：分子がすべて <InlineMath math="0" /> になってしまうため、全体も <InlineMath math="0" /> に収束します。
                        </p>
                    </div>
                </div>
            </ContentBox>


            {/* 6. 発散 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">発散</h2>
            <p>
                数列が一定の値に落ち着かない場合を「発散」と呼びます。単に値が大きくなるだけでなく、振動する場合も含みます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 （発散）">
                <p>
                    ある数列が収束しないとき、その数列は<strong>発散する</strong>といいます。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>正の無限大へ発散</strong>：<InlineMath math="+\infty" /> （限りなく大きくなる）</li>
                    <li><strong>負の無限大へ発散</strong>：<InlineMath math="-\infty" /> （限りなく小さくなる）</li>
                    <li><strong>振動</strong>：上記以外（例：<InlineMath math="1, -1, 1, -1, \ldots" />）</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-3">
                <p>
                    <InlineMath math="2^n" />（正の無限大に発散）、<InlineMath math="(-1)^n" />（振動）、<InlineMath math="(-2)^n" />（振動）
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <InlineMath math="(-2)^n" /> は <InlineMath math="-2, 4, -8, 16, \ldots" /> と絶対値は大きくなりますが、プラスマイナスを行き来するため「振動」に分類されます。
                </p>
            </ContentBox>


            {/* 7. 等比数列の極限 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">等比数列の極限</h2>
            <p>
                <InlineMath math="r^n" /> の形の数列（等比数列）は頻出です。公比 <InlineMath math="r" /> の大きさによって挙動が劇的に変わります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-2 （等比数列の極限）">
                <p>等比数列 <InlineMath math="r^n" /> の極限は、公比 <InlineMath math="r" /> の値により次のように分類される：</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><InlineMath math="r > 1" /> のとき: <InlineMath math="+\infty" /> （例：<InlineMath math="2^n" />）</li>
                    <li><InlineMath math="r = 1" /> のとき: <InlineMath math="1" /> （ずっと 1 が続く）</li>
                    <li><InlineMath math="|r| < 1" /> のとき: <InlineMath math="0" /> （例：<InlineMath math="(1/2)^n" />）</li>
                    <li><InlineMath math="r \leq -1" /> のとき: 発散（振動） （例：<InlineMath math="(-1)^n" />）</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="証明の概略">
                <p><InlineMath math="r > 1" /> のとき、<InlineMath math="r = 1+h\ (h>0)" /> とおくと、二項定理より <InlineMath math="r^n = (1+h)^n \geq 1+nh" /> となります。右辺 <InlineMath math="1+nh" /> は <InlineMath math="n" /> とともにいくらでも大きくなるので、それより大きい <InlineMath math="r^n" /> も無限大に発散します。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="example" title="Example 1.1-4">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="\lim_{n\to\infty}(2/3)^n" /></p>
                        <p className="mt-1">
                            <InlineMath math="|2/3| < 1" /> なので <InlineMath math="0" /> に収束します。
                        </p>
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\frac{3^n}{3^n+2^n}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> 絶対値が一番大きい <InlineMath math="3^n" /> で分母・分子を割るのがコツです。
                        </p>
                        <BlockMath math="\frac{3^n}{3^n+2^n} = \frac{1}{1 + (2/3)^n} \to \frac{1}{1+0} = 1." />
                        <p className="text-sm text-slate-500">
                            <InlineMath math="(2/3)^n \to 0" /> を利用しました。
                        </p>
                    </div>
                </div>
            </ContentBox>


            {/* 8. はさみうちの原理 */}
            <h2 className="text-2xl font-bold mt-8 mb-6">はさみうちの原理</h2>
            <p>
                直接計算するのが難しい数列でも、大小関係を利用して極限を求められる強力な方法です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-3 （はさみうちの原理）">
                <p>
                    3つの数列 <InlineMath math="\{a_n\}, \{b_n\}, \{c_n\}" /> について、任意の <InlineMath math="n" /> に対して <InlineMath math="a_n \leq b_n \leq c_n" /> であるとき、以下が成り立つ。
                </p>
                <BlockMath math="\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = \alpha \implies \lim_{n\to\infty} b_n = \alpha" />
            </ContentBox>

            {/* Figure 1.1-2 - はさみうちの原理 */}
            <div className="flex flex-col items-center my-8">
                <img
                    src="/images/fig1_1_2.svg"
                    alt="はさみうちの原理：上の数列(青)と下の数列(赤)が同じ値αに収束すると、間の数列(緑)もαに収束する"
                    className="w-full max-w-[600px] h-auto rounded border border-slate-200 dark:border-slate-700"
                />
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic">
                    Figure 1.1-2 &nbsp; はさみうちの原理。上（青）と下（赤）が同じ値に近づけば、間（緑）もそこへ行くしかない。
                </p>
            </div>

            <ContentBox type="example" title="Example 1.1-5">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\frac{\sin n}{n}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> <InlineMath math="\sin n" /> はどんな値かわかりにくいですが、範囲は確実に <InlineMath math="-1 \leq \sin n \leq 1" /> です。
                        </p>
                        <BlockMath math="-\frac{1}{n} \leq \frac{\sin n}{n} \leq \frac{1}{n}" />
                        <p>
                            両端の <InlineMath math="\pm 1/n" /> は <InlineMath math="0" /> に収束するので、はさみうちの原理により真ん中も <InlineMath math="0" /> に収束します。
                        </p>
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="\displaystyle\lim_{n\to\infty}\frac{n!}{n^n}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> 分子より分母の増え方の方が圧倒的に速いので 0 になりそうですが、これを示すには不等式で評価します。
                        </p>
                        <BlockMath math="0 < \frac{n!}{n^n} = \frac{1}{n}\cdot\underbrace{\frac{2}{n}\cdots\frac{n}{n}}_{1\text{以下}} < \frac{1}{n}" />
                        <p>
                            <InlineMath math="1/n \to 0" /> なので、はさみうちの原理により <InlineMath math="0" /> に収束します。
                        </p>
                    </div>
                </div>
            </ContentBox>

            <hr className="my-12 border-slate-200 dark:border-slate-700" />

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>数列の極限</strong>：<InlineMath math="n" /> を大きくしたときの <InlineMath math="a_n" /> の目標値 <InlineMath math="\alpha" />。</li>
                    <li><strong>基本公式</strong>：<InlineMath math="1/n \to 0" /> が計算の基本パーツ。</li>
                    <li><strong>計算法則</strong>：四則演算は極限操作と交換できる（不定形に注意）。</li>
                    <li><strong>解法テクニック</strong>：有理式は「最高次で割る」、直接求めにくいときは「はさみうち」。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
