import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferenceEquationsSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                離散時間信号を処理するシステムの多くは、<b>差分方程式</b>によって記述されます。Z 変換を用いることで、差分方程式を代数方程式として解くことができ、システムの動的な特性を極の配置から容易に判定できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">差分方程式の Z 変換解法</h2>

            <p>
                定数係数線形差分方程式は、Z 変換によって <InlineMath math="z" /> の有理関数の形へと変換されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (差分方程式の Z 変換解法)">
                <p>
                    定数係数線形差分方程式 <InlineMath math="\sum_{k=0}^N a_k y_{n-k} = \sum_{k=0}^M b_k x_{n-k}" /> （ただし <InlineMath math="a_0 \neq 0" />）に Z 変換を施すと、入出力の間には次の代数的な関係が成立する：
                </p>
                <BlockMath math="A(z) Y(z) = B(z) X(z) + I(z)" />
                <p>
                    ここで <InlineMath math="I(z)" /> は初期値に依存する項である。初期値がすべてゼロの場合、システムの特性を記述する <b>伝達関数 (Transfer Function)</b> は次のように定義される：
                </p>
                <BlockMath math="H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{k=0}^M b_k z^{-k}}{\sum_{k=0}^N a_k z^{-k}}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    時間シフト則 <InlineMath math="\mathcal{Z}[y_{n-k}] = z^{-k} Y(z)" /> を各項に適用する（初期値ゼロの場合）。
                </p>
                <BlockMath math="\begin{aligned} \sum_{k=0}^N a_k (z^{-k} Y(z)) &= \sum_{k=0}^M b_k (z^{-k} X(z)) \\ \left( \sum_{k=0}^N a_k z^{-k} \right) Y(z) &= \left( \sum_{k=0}^M b_k z^{-k} \right) X(z) \end{aligned}" />
                <p>
                    両辺を割ることで伝達関数の定義式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体例を通して、極の配置と応答の関係を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (1次システムのインパルス応答：安定)">
                <p>
                    差分方程式 <InlineMath math="y_n - 0.5 y_{n-1} = x_n" /> （初期値ゼロ）のインパルス応答を求める。
                </p>
                <p>
                    Z 変換すると <InlineMath math="(1 - 0.5 z^{-1}) Y(z) = X(z)" /> より：
                </p>
                <BlockMath math="H(z) = \frac{1}{1 - 0.5 z^{-1}} = \frac{z}{z - 0.5}" />
                <p>
                    極は <InlineMath math="z = 0.5" /> （単位円内部）にあり、インパルス応答は <InlineMath math="h_n = (0.5)^n u[n]" /> となる。これは時間が経つにつれて 0 に収束する安定な系である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-2 (1次システムのインパルス応答：不安定)">
                <p>
                    差分方程式 <InlineMath math="y_n - 2 y_{n-1} = x_n" /> の場合を考える。
                </p>
                <p>
                    伝達関数は <InlineMath math="H(z) = \frac{z}{z-2}" /> となり、極は <InlineMath math="z = 2" /> （単位円外部）にある。
                </p>
                <p>
                    インパルス応答は <InlineMath math="h_n = 2^n u[n]" /> となり、指数関数的に増大する不安定な系であることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">BIBO 安定性の条件</h2>

            <p>
                有理関数として表現された離散時間システムの安定性は、その極（分母多項式の根）が複素平面上のどこに位置するかによって完全に決定されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-2 (BIBO 安定の条件)">
                <p>
                    有界な入力に対して出力が有界にとどまる、すなわち <b>BIBO 安定 (Bounded-Input, Bounded-Output Stable)</b> であるための必要十分条件は次の通りである：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><b>領域条件</b>：インパルス応答 <InlineMath math="h_n" /> が絶対総和可能である（<InlineMath math="\sum |h_n| < \infty" />）。</li>
                    <li><b>極の条件</b>：伝達関数 <InlineMath math="H(z)" /> のすべての極が <b>単位円の内部</b> （<InlineMath math="|z| < 1" />）に存在する。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    システムの極 <InlineMath math="p_k" /> がすべて <InlineMath math="|p_k| < 1" /> にあるとする。インパルス応答は一般に <InlineMath math="h_n = \sum C_k p_k^n" /> の形（重解がない場合）で書ける。
                </p>
                <p>
                    このとき、等比級数の和 <InlineMath math="\sum |p_k|^n" /> は <InlineMath math="|p_k| < 1" /> より収束するため、<InlineMath math="\sum |h_n| < \infty" /> が成立する。
                </p>
                <p>
                    逆にもし単位円周上または外部に極があれば、<InlineMath math="h_n" /> は減衰せず、絶対総和可能にはならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-3 (2次システムの安定性判定)">
                <p>
                    伝達関数 <InlineMath math="H(z) = \frac{z^2}{(z - 0.5)(z + 0.8)}" /> の安定性を判定する。
                </p>
                <p>
                    この系の極は <InlineMath math="z = 0.5" /> と <InlineMath math="z = -0.8" /> である。いずれも絶対値が 1 未満（<InlineMath math="0.5 < 1" />, <InlineMath math="0.8 < 1" />）であるため、このシステムは BIBO 安定である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-4 (境界上の極：不安定)">
                <p>
                    伝達関数 <InlineMath math="H(z) = \frac{z}{z - 1}" /> （積分器の離散版）を考える。
                </p>
                <p>
                    極は <InlineMath math="z = 1" /> であり、単位円周上に位置する。この系のインパルス応答は <InlineMath math="h_n = u[n]" /> であり、<InlineMath math="\sum |h_n| = \infty" /> となるため、BIBO 不安定である。
                </p>
                <p>
                    実際、単位ステップ入力 <InlineMath math="x_n = u[n]" /> を加えると、出力は <InlineMath math="y_n = (n+1)u[n]" /> となり、時間と共に無限大に発散する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>差分方程式は Z 変換によって代数方程式に変換され、伝達関数 <InlineMath math="H(z)" /> を用いて解析できる。</li>
                    <li>離散時間システムが安定であるためには、伝達関数のすべての極が単位円の内部（<InlineMath math="|z| < 1" />）になければならない。</li>
                    <li>単位円周上の極は不安定（または限界安定）であり、有界な入力に対しても出力が発散する可能性がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
