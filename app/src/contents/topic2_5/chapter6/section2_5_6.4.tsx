import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormalSpacesAndUrysohn() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                分離公理の頂点に近いのが<strong>正規空間 (Normal space)</strong> です。
                ここでは「閉集合と閉集合」そのものを完全に引き離すことができます。
                この性質は、位相空間の上に連続関数を豊富に作り出すための鍵となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規空間の定義</h2>

            <ContentBox type="definition" title="Definition 6.4-1 (正規空間 / T4 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>正規空間 (Normal space)</strong> であるとは、
                    互いに交わらない任意の2つの閉集合 <InlineMath math="F_1, F_2 \subset X" /> に対し、
                    <InlineMath math="F_1 \subset U" />, <InlineMath math="F_2 \subset V" /> かつ <strong><InlineMath math="U \cap V = \emptyset" /></strong>
                    を満たす開集合 <InlineMath math="U, V" /> が存在することをいう。
                </p>
                <p className="mt-2">
                    正規空間かつ T1 空間であるものを <strong>T4 空間</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="重要な正規空間のクラス">
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>任意の<strong>距離空間</strong>は正規である。</li>
                    <li>任意の<strong>コンパクト・ハウスドルフ空間</strong>は正規である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1 (正則だが正規でない例：ニーミツキー平面)">
                <p>
                    平面上の上半平面 <InlineMath math="\{(x, y) \in \mathbb{R}^2 \mid y \geq 0\}" /> において、
                    <InlineMath math="y > 0" /> の点は通常通りの近傍を持ち、<InlineMath math="y = 0" /> の点には「境界に接する開円板」を近傍とする位相を入れたものを <strong>ニーミツキー平面 (Niemytzki plane)</strong> と呼びます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>この空間は <strong>正則</strong> ですが、<strong>正規ではありません</strong>。</li>
                    <li>具体的には、<InlineMath math="y = 0" /> 上の有理数点集合と無理数点集合という2つの交わらない閉集合を、開集合で引き離すことができないことが示されます。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離公理の包含関係</h2>

            <p>
                これまで見てきた分離公理の間には、一定の強弱（包含関係）が存在します。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-1 (分離公理の包含関係)">
                <p>
                    <InlineMath math="T_i" /> 空間の定義に「<InlineMath math="T_1" /> 空間であること」を含める標準的な枠組みにおいて、次の包含関係が成り立つ：
                </p>
                <BlockMath math="T_4 \implies T_{3.5} \implies T_3 \implies T_2 \implies T_1 \implies T_0" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4 font-normal mt-2 ml-4">
                    <li>
                        <strong><InlineMath math="T_4 \implies T_{3.5}" /></strong>:
                        ウリゾーンの補題（Lemma 6.4-1）より、相異なる閉集合は連続関数で分離される。
                        <InlineMath math="T_1" /> 性より 1点集合は閉集合なので、点と閉集合も連続関数で分離される。
                    </li>
                    <li>
                        <strong><InlineMath math="T_{3.5} \implies T_3" /></strong>:
                        点 <InlineMath math="x" /> と閉集合 <InlineMath math="F" /> を分離する連続関数 <InlineMath math="f: X \to [0, 1]" />
                        （<InlineMath math="f(x)=0, f(F)=1" />）があるとき、
                        開集合 <InlineMath math="U = f^{-1}([0, 1/3))" /> と <InlineMath math="V = f^{-1}((2/3, 1])" /> は
                        <InlineMath math="x" /> と <InlineMath math="F" /> を分離する。
                    </li>
                    <li>
                        <strong><InlineMath math="T_3 \implies T_2" /></strong>:
                        <InlineMath math="T_3" /> 空間は <InlineMath math="T_1" /> なので、任意の点 <InlineMath math="y" /> に対し <InlineMath math="\{y\}" /> は閉集合である。
                        正則性より、点 <InlineMath math="x (\neq y)" /> と閉集合 <InlineMath math="\{y\}" /> は交わらない開集合で分離される。
                    </li>
                    <li>
                        <strong><InlineMath math="T_2 \implies T_1 \implies T_0" /></strong>:
                        定義より明らかである（分離の条件が順に弱まっている）。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ウリゾーンの補題</h2>

            <p>
                正規性の本質は、「開集合による分離」が実は「連続関数による分離」を可能にする、という驚くべき飛躍にあります。
            </p>

            <ContentBox type="lemma" title="Lemma 6.4-1 (ウリゾーンの補題 / Urysohn's Lemma)">
                <p>
                    <InlineMath math="X" /> を正規空間、<InlineMath math="F_1, F_2" /> を <InlineMath math="X" /> の互いに交わらない閉集合とする。
                    このとき、連続関数 <InlineMath math="f: X \to [0, 1]" /> であって
                    <BlockMath math="f(F_1) \subset \{0\}, \quad f(F_2) \subset \{1\}" />
                    を満たすものが存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2つの閉集合 <InlineMath math="F_1, F_2" /> を分離する連続関数を構成する。
                    <InlineMath math="D = \{ r \in \mathbb{Q} \mid 0 \leq r \leq 1 \}" /> のうち、
                    <InlineMath math="k/2^n" /> の形の実数（二進有理数）の集合を <InlineMath math="D_0" /> とする。
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg my-4">
                    <h4 className="text-sm font-bold mb-2">1. 開集合族 <InlineMath math="\{U_r\}_{r \in D_0}" /> の構成</h4>
                    <p className="text-sm">
                        正規性の定義より、閉集合 <InlineMath math="F_1" /> と開集合 <InlineMath math="X \setminus F_2" /> の間に、
                        <InlineMath math="F_1 \subset U_1 \subset \overline{U_1} \subset X \setminus F_2" /> を満たす開集合 <InlineMath math="U_1" /> がとれる。
                        同様に、二進有理数の順序に従って数学的帰納法により、任意の <InlineMath math="r < s" /> に対し
                        <BlockMath math="\overline{U_r} \subset U_s" />
                        を満たす開集合の族を構成できる。
                        ここでは <InlineMath math="U_1 = X \setminus F_2" /> とし、<InlineMath math="r < 0" /> で <InlineMath math="U_r = \emptyset" />、
                        <InlineMath math="r > 1" /> で <InlineMath math="U_r = X" /> と拡張しておく。
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg my-4">
                    <h4 className="text-sm font-bold mb-2">2. 関数の定義</h4>
                    <p className="text-sm">
                        各点 <InlineMath math="x \in X" /> に対し、関数 <InlineMath math="f" /> を次のように定義する：
                        <BlockMath math="f(x) = \inf \{ r \in D_0 \mid x \in U_r \}" />
                        定義より、<InlineMath math="x \in F_1" /> ならばすべての <InlineMath math="r \geq 0" /> で <InlineMath math="x \in U_r" /> なので <InlineMath math="f(x) = 0" />。
                        また <InlineMath math="x \in F_2" /> ならば <InlineMath math="x \notin U_1" /> なので <InlineMath math="f(x) = 1" /> となる。
                    </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg my-4">
                    <h4 className="text-sm font-bold mb-2">3. 連続性の検証</h4>
                    <p className="text-sm">
                        任意の <InlineMath math="\alpha \in (0, 1)" /> に対し、逆像が以下のようになることを示す：
                        <BlockMath math="f^{-1}([0, \alpha)) = \bigcup_{r < \alpha} U_r, \quad f^{-1}((\alpha, 1]) = \bigcup_{r > \alpha} (X \setminus \overline{U_r})" />
                        これらは開集合の和集合であるため開集合である。
                        よって、任意の開区間の逆像が開集合となり、<InlineMath math="f" /> は連続である。
                    </p>
                </div>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ティーツェの拡張定理</h2>

            <p>
                ウリゾーンの補題の直接的な帰結であり、解析学において極めて実用的な定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-2 (ティーツェの拡張定理 / Tietze Extension Theorem)">
                <p>
                    正規空間 <InlineMath math="X" /> の閉部分空間 <InlineMath math="A" /> 上で定義された連続関数 <InlineMath math="f: A \to \mathbb{R}" /> は、
                    常に <InlineMath math="X" /> 全体で定義された連続関数 <InlineMath math="F: X \to \mathbb{R}" /> に拡張できる。
                </p>
            </ContentBox>

            <p className="mt-4">
                つまり、壁（閉集合）に張り付いたデータは、空間全体の構造を壊すことなく「滑らかに」内部（外部）へ広げていくことができるのです。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、有界な連続関数 <InlineMath math="|f| \leq M" /> の場合について、ウリゾーンの補題を用いて近似関数の列を構成する。
                </p>
                <ol className="list-decimal list-inside space-y-4 font-normal mt-4 ml-4">
                    <li>
                        <strong>逐次近似</strong>:
                        <InlineMath math="F_1 = \{x \in A \mid f(x) \leq -M/3\}" />, <InlineMath math="F_2 = \{x \in A \mid f(x) \geq M/3\}" /> とおくと、これらは <InlineMath math="X" /> の閉集合である。
                        ウリゾーンの補題より、<InlineMath math="g_1(F_1) = -M/3, g_1(F_2) = M/3" /> かつ <InlineMath math="|g_1| \leq M/3" /> なる連続関数 <InlineMath math="g_1: X \to \mathbb{R}" /> がとれる。
                        このとき、差 <InlineMath math="f - g_1|_A" /> の絶対値は <InlineMath math="2M/3" /> 以下に抑えられる。
                    </li>
                    <li>
                        <strong>無限級数による拡張</strong>:
                        この操作を繰り返すと、各ステップで誤差を <InlineMath math="2/3" /> 倍に縮小する関数列 <InlineMath math="g_n" /> が得られる。
                        級数 <InlineMath math="G(x) = \sum_{n=1}^\infty g_n(x)" /> を考えると、ワイエルシュトラスの M-判定法より、この級数は <InlineMath math="X" /> 上で一様収束し、
                        連続関数を定義する。
                    </li>
                    <li>
                        <strong>境界値の一致</strong>:
                        構成より、<InlineMath math="A" /> 上ではこの級数は <InlineMath math="f" /> に収束するため、<InlineMath math="G|_A = f" /> となる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>正規 (T4) 空間</strong>：交わらない閉集合どうしを完全に分離できる。</li>
                    <li><strong>ウリゾーンの補題</strong>：正規性は「連続関数の存在」を保証する。</li>
                    <li><strong>ティーツェの拡張定理</strong>：閉集合上のデータは全体に拡張できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
