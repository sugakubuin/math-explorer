import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExtendedEuclideanAlgorithm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                §2.1 で学んだ「互除法の逆算」は論理的には明快ですが、手計算で行うには代入の操作が煩雑になりがちです。
                これを機械的な計算手順（アルゴリズム）に整理したものが<strong>拡張ユークリッド法</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">拡張ユークリッド法の手順</h2>

            <p>
                拡張ユークリッド法の核となるアイデアは、互除法の各ステップにおける余り <InlineMath math="r_k" /> を、
                常に <InlineMath math="r_k = s_k a + t_k b" /> という形で保持し、更新していくことにあります。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (拡張ユークリッド法)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> を入力とし、最大公約数 <InlineMath math="d" /> と、
                    <InlineMath math="ax + by = d" /> を満たす整数 <InlineMath math="x, y" /> を同時に求める手法。
                    初期状態を
                    <br />・ <InlineMath math="r_0 = a, \ s_0 = 1, \ t_0 = 0 \quad (a = 1 \cdot a + 0 \cdot b)" />
                    <br />・ <InlineMath math="r_1 = b, \ s_1 = 0, \ t_1 = 1 \quad (b = 0 \cdot a + 1 \cdot b)" />
                    とし、 <InlineMath math="r_{k-1} = q_k r_k + r_{k+1}" /> に基づいて係数を次のように更新する：
                    <BlockMath math="\begin{aligned} s_{k+1} &= s_{k-1} - q_k s_k \\ t_{k+1} &= t_{k-1} - q_k t_k \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (表形式での計算)">
                <p>
                    <InlineMath math="a = 99, \ b = 78" /> の最大公約数とベズー係数を求める。
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-center border-collapse border border-slate-300 dark:border-slate-600 my-4">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border p-2">ステップ</th>
                                <th className="border p-2">商 <InlineMath math="q" /></th>
                                <th className="border p-2">余り <InlineMath math="r" /></th>
                                <th className="border p-2"><InlineMath math="s" /></th>
                                <th className="border p-2"><InlineMath math="t" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border p-2">-</td><td className="border p-2">-</td><td className="border p-2">99</td><td className="border p-2">1</td><td className="border p-2">0</td></tr>
                            <tr><td className="border p-2">-</td><td className="border p-2">-</td><td className="border p-2">78</td><td className="border p-2">0</td><td className="border p-2">1</td></tr>
                            <tr className="text-blue-600 dark:text-blue-400">
                                <td className="border p-2">1</td><td className="border p-2">1</td><td className="border p-2">21</td><td className="border p-2">1</td><td className="border p-2">-1</td>
                            </tr>
                            <tr className="text-blue-600 dark:text-blue-400">
                                <td className="border p-2">2</td><td className="border p-2">3</td><td className="border p-2">15</td><td className="border p-2">-3</td><td className="border p-2">4</td>
                            </tr>
                            <tr className="text-blue-600 dark:text-blue-400">
                                <td className="border p-2">3</td><td className="border p-2">1</td><td className="border p-2">6</td><td className="border p-2">4</td><td className="border p-2">-5</td>
                            </tr>
                            <tr className="text-blue-600 dark:text-blue-400">
                                <td className="border p-2">4</td><td className="border p-2">2</td><td className="border p-2">3</td><td className="border p-2">-11</td><td className="border p-2">14</td>
                            </tr>
                            <tr><td className="border p-2">5</td><td className="border p-2">2</td><td className="border p-2">0</td><td className="border p-2">-</td><td className="border p-2">-</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    この結果、 <InlineMath math="\gcd(99, 78) = 3" /> であり、
                    <BlockMath math="3 = 99 \times (-11) + 78 \times 14" />
                    が成り立つことがわかる（ <InlineMath math="x = -11, \ y = 14" /> ）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：剰余逆元の計算</h2>

            <p>
                拡張ユークリッド法の最も実用的な応用の一つに、剰余演算（モジュロ演算）における「逆元」の計算があります。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (合同式と mod)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> を正の整数 <InlineMath math="m" /> で割った余りが等しいとき、 <InlineMath math="a" /> と <InlineMath math="b" /> は <InlineMath math="m" /> を<strong>法 (modulo)</strong> として<strong>合同</strong>であるといい、
                    <BlockMath math="a \equiv b \pmod{m}" />
                    と書く（詳細は第 4 章で詳述する）。
                </p>
            </ContentBox>

            <ContentBox type="corollary" title="Corollary 2.3-1 (剰余逆元の算出)">
                <p>
                    <InlineMath math="\gcd(a, m) = 1" /> ならば、
                    <BlockMath math="ax \equiv 1 \pmod{m}" />
                    を満たす <InlineMath math="x" /> が存在する。これは拡張ユークリッド法で <InlineMath math="ax + my = 1" /> を解くことで求められる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定 <InlineMath math="\gcd(a, m) = 1" /> より、ベズーの等式に基づき
                    <BlockMath math="ax + my = 1" />
                    を満たす整数 <InlineMath math="x, y" /> が存在する。
                    この式の両辺を <InlineMath math="m" /> を法として考えると、第二項の <InlineMath math="my" /> は <InlineMath math="m" /> の倍数であるため <InlineMath math="my \equiv 0 \pmod{m}" /> である。
                    したがって、
                    <BlockMath math="ax \equiv ax + my = 1 \pmod{m}" />
                    となり、求める <InlineMath math="x" /> が存在することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2 (mod 逆元の算出)">
                <p>
                    <InlineMath math="7x \equiv 1 \pmod{15}" /> を解く。
                    <br />1. <InlineMath math="\gcd(15, 7)" /> について拡張ユークリッド法を適用（ <InlineMath math="s" /> は 15 の係数、 <InlineMath math="t" /> は 7 の係数とする）。
                    <br />2. <InlineMath math="15(1) + 7(0) = 15" />
                    <br />3. <InlineMath math="15(0) + 7(1) = 7" />
                    <br />4. <InlineMath math="15(1) + 7(-2) = 1" /> （ここで <InlineMath math="15 = 7 \times 2 + 1" /> より）
                    <br />この等式から、 <InlineMath math="7 \times (-2) = 1 - 15 \times 1 \equiv 1 \pmod{15}" />。
                    <br />よって <InlineMath math="x \equiv -2 \equiv 13 \pmod{15}" /> が答えとなる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="公開鍵暗号へのつながり">
                <p>
                    RSA 暗号などの現代暗号では、巨大な数に対する mod 逆元の計算が頻繁に行われます。
                    拡張ユークリッド法が極めて高速（ラメの定理より、桁数に対して線形的）であるおかげで、
                    私たちは今日の安全な通信を享受できているのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>効率化</strong>： ベズーの等式の解を、代入の繰り返しではなく漸化式の更新として求めることができる。</li>
                    <li><strong>表形式</strong>： 剰余関係 <InlineMath math="r, s, t" /> を並べた計算表は、ミスを防ぎつつ計算を加速させる。</li>
                    <li><strong>逆元</strong>： 合同方程式における「割り算」を実現するための不可欠な道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
