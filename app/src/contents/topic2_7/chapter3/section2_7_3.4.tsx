import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SieveOfEratosthenesAndPrimeDistribution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                素数が無限に存在することが分かっても、実際に大きな素数をすべて書き出すのは容易なことではありません。
                本節では、素数を効率的に列挙する古典的な手法と、素数が全体としてどのように分布しているかを述べる定理を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エラトステネスの篩</h2>

            <p>
                紀元前 3 世紀、数学者エラトステネスは、特定の範囲にある素数をすべて見つけ出すための網のような手法を考え出しました。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (エラトステネスの篩)">
                <p>
                    指定された上限 <InlineMath math="n" /> までの素数をすべて求めるアルゴリズム。
                    <br />1. <InlineMath math="2" /> から <InlineMath math="n" /> までの整数を並べる。
                    <br />2. まだ「印」のついていない最小の数を見つける。これは素数である。
                    <br />3. その素数の倍数をすべてリストから消去（「印」を付ける）する。
                    <br />4. 2 と 3 を繰り返す。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="効率的な停止条件">
                <p>
                    ステップ 4 の繰り返しは、調べる素数が <InlineMath math="\sqrt{n}" /> に達した時点で終了して構いません。
                    なぜなら、 <InlineMath math="n" /> 以下の合成数は必ず <InlineMath math="\sqrt{n}" /> 以下の素因数を持つことが Proposition 3.1-1 から導かれるからです。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 (30 までの素数の列挙)">
                <p>
                    <InlineMath math="n = 30" /> の場合：
                    <br />・最小の素数 2 を残し、4, 6, 8, ... 30 を消す。
                    <br />・次に残っている最小の 3 を残し、9, 15, 21, 27 を消す。
                    <br />・次に残っている最小の 5 を残し、25 を消す。
                    <br />・ <InlineMath math="\sqrt{30} \approx 5.4" /> なので、ここで停止。残った数はすべて素数である。
                    <BlockMath math="\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29\}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数定理：分布の規則</h2>

            <p>
                個々の素数がいつ現れるかを予測するのは困難ですが、非常に大きな範囲で見たとき、素数の「密度」は驚くほど規則正しく振る舞います。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (素数計数関数)">
                <p>
                    実数 <InlineMath math="x" /> に対して、 <InlineMath math="x" /> 以下の素数の個数を <InlineMath math="\pi(x)" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.4-1 (素数定理)">
                <p>
                    十分大きな <InlineMath math="x" /> に対して、 <InlineMath math="\pi(x)" /> は次の関係を満たす。
                    <BlockMath math="\pi(x) \sim \frac{x}{\ln x}" />
                    （ここで <InlineMath math="\ln x" /> は自然対数、記号 <InlineMath math="\sim" /> は <InlineMath math="x \to \infty" /> で両者の比が 1 に収束することを意味する）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="概算の例">
                <p>
                    この定理によれば、 <InlineMath math="10^6" /> 以下の素数の個数はおよそ <InlineMath math="10^6 / \ln(10^6) \approx 72,382" /> 個と推定されます（実際の値は 78,498 個であり、より精密な近似式として対数積分 <InlineMath math="\text{Li}(x)" /> が知られています）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ゼータ関数との関連">
                <p>
                    素数定理の証明には、リーマンのゼータ関数 <InlineMath math="\zeta(s)" /> の複素関数論的な解析が深く関わっています。素数の分布という離散的な問題が、滑らかな連続関数の性質に集約されるのは、数学における最も美しい驚きの一つです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>列挙</strong>： エラトステネスの篩によって、有限範囲の素数を漏れなく効率的に抽出できる。</li>
                    <li><strong>頻度</strong>： 数の範囲が大きくなるほど素数の出現頻度は（対数的に）低くなる。</li>
                    <li><strong>予測</strong>： 素数の個々の振る舞いは不規則に見えるが、全体としては極めて滑らかな関数によって記述される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
