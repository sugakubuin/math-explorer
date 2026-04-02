import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LegendreEquationsAndPolynomials() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                球座標系におけるラプラス方程式や物理的なポテンシャル論を扱う際、角度方向の依存性に必ず現れるのが「ルジャンドル多項式」です。
                通常点まわりのべき級数解法が特定の整数パラメータにおいて多項式として閉じるとき、特殊関数の中でも極めて美しい性質を持つ関数列が生まれます。
                本節では、ルジャンドル方程式の多項式解とその重要性について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジャンドル方程式の解</h2>

            <p>
                まず、球座標系の議論などから自然に導かれるルジャンドル方程式を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.5-1 (ルジャンドル方程式)">
                <p>
                    次の微分方程式を次数 <InlineMath math="n" /> の<b>ルジャンドル方程式</b>と呼ぶ（通常 <InlineMath math="n" /> は非負整数である）。
                    <BlockMath math="(1-x^2) y'' - 2xy' + n(n+1) y = 0" />
                    点 <InlineMath math="x = 0" /> は通常点であるが、<InlineMath math="x = \pm 1" /> は確定特異点となる。
                </p>
            </ContentBox>

            <p>
                次数 <InlineMath math="n" /> が整数のとき、通常のべき級数解法を用いると級数が有限項で途切れます。
            </p>

            <ContentBox type="definition" title="Definition 1.5-2 (ルジャンドル多項式)">
                <p>
                    ルジャンドル方程式の多項式解を <InlineMath math="P_n(x)" /> と書き、<b>ルジャンドル多項式</b>と呼ぶ。
                    通常、端点における値 <InlineMath math="P_n(1) = 1" /> という正規化条件によって一意に決定される。
                    最初のいくつかの項は以下の通りである。
                    <BlockMath math="P_0(x) = 1, \quad P_1(x) = x, \quad P_2(x) = \frac{1}{2}(3x^2 - 1)" />
                </p>
            </ContentBox>

            <p>
                実際に係数を求めて、多項式解がどのように現れるかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.5-1 (n=2 の場合の逐次決定)">
                <p>
                    次数 <InlineMath math="n=2" /> の場合を考え、通常点 <InlineMath math="x=0" /> まわりの級数解を代入する。得られる漸化式は
                    <BlockMath math="a_{k+2} = \frac{k(k+1) - n(n+1)}{(k+1)(k+2)} a_k" />
                    である。<InlineMath math="n=2" /> を代入すると、<InlineMath math="k=2" /> のとき分子が <InlineMath math="2(2+1) - 2(2+1) = 0" /> となり、<InlineMath math="a_4 = 0" /> となる。
                    これ以降の偶数次の係数はすべて 0 となるため、<InlineMath math="a_1 = 0" /> を選べば偶数次の多項式 <InlineMath math="y = a_0 + a_2 x^2" /> が解となる。
                    具体的には <InlineMath math="a_2 = -\frac{6}{2}a_0 = -3a_0" /> から <InlineMath math="y = a_0(1 - 3x^2)" /> を得て、<InlineMath math="y(1) = 1" /> から <InlineMath math="a_0 = -1/2" />、すなわち <InlineMath math="P_2(x) = (3x^2-1)/2" /> を得る。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロドリゲスの公式と直交性</h2>

            <p>
                ルジャンドル多項式をより直接的に生成するための便利な公式が存在します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.5-1 (ロドリゲスの公式)">
                <p>
                    ルジャンドル多項式 <InlineMath math="P_n(x)" /> は、次の微分表示で与えられる。
                    <BlockMath math="P_n(x) = \frac{1}{2^n n!} \frac{d^n}{dx^n} (x^2 - 1)^n" />
                </p>
            </ContentBox>

            <p>
                この美しい公式を証明するためには、ライプニッツの公式を活用します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="w = (x^2-1)^n" /> とおくと、<InlineMath math="(1-x^2)w' + 2nxw = 0" /> が成立する。
                    この両辺を <InlineMath math="n+1" /> 回微分し、ライプニッツの公式
                    <BlockMath math="(uv)^{(m)} = \sum_{k=0}^m \binom{m}{k} u^{(k)} v^{(m-k)}" />
                    を適用して整理すると、<InlineMath math="w^{(n)}" /> がちょうどルジャンドル方程式を満たしていることがわかる。
                    多項式の次数と最高次の係数、および <InlineMath math="x=1" /> での値を照合することで、定数係数 <InlineMath math="1/(2^n n!)" /> が定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ロドリゲスの公式を用いると、高次の多項式も機械的に計算できます。
            </p>

            <ContentBox type="example" title="Example 1.5-2 (n=3 の計算)">
                <p>
                    <InlineMath math="n=3" /> の場合をロドリゲスの公式で求める。
                    <BlockMath math="(x^2-1)^3 = x^6 - 3x^4 + 3x^2 - 1" />
                    これを 3 回微分すると、
                    <BlockMath math="\begin{aligned} \frac{d^3}{dx^3} (x^6 - 3x^4 + 3x^2 - 1) &= 6 \cdot 5 \cdot 4 x^3 - 3 \cdot 4 \cdot 3 \cdot 2 x \\ &= 120 x^3 - 72 x \end{aligned}" />
                    これを定数係数 <InlineMath math="1/(2^3 \cdot 3!) = 1/48" /> 倍すると、
                    <BlockMath math="P_3(x) = \frac{120x^3 - 72x}{48} = \frac{5x^3 - 3x}{2}" />
                    となり、<InlineMath math="P_3(1) = 1" /> を満たす正しい結果が得られる。
                </p>
            </ContentBox>

            <p>
                ルジャンドル多項式の最も重要な特徴は、特定の区間における「直交性」です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.5-2 (ルジャンドル多項式の直交性)">
                <p>
                    区間 <InlineMath math="[-1, 1]" /> において、異なる次数のルジャンドル多項式は互いに直交する。
                    <BlockMath math="\int_{-1}^1 P_m(x) P_n(x) \, dx = \frac{2}{2n+1} \delta_{mn}" />
                </p>
            </ContentBox>

            <p>
                この性質により、<InlineMath math="[-1, 1]" /> 上の関数をルジャンドル多項式で展開することが可能になります（ルジャンドル級数）。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="m \neq n" /> のときを考える。ルジャンドル方程式はシュトゥルム・リウヴィル形式
                    <BlockMath math="\frac{d}{dx} [ (1-x^2) \phi' ] + n(n+1) \phi = 0" />
                    となっており、異なる固有値を持つため直交性が従底する。
                    ノルム（<InlineMath math="m=n" /> の場合の値）の計算は、ロドリゲスの公式を代入し、部分積分を <InlineMath math="n" /> 回繰り返すことで実行される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                物理的な観点からは、球対称性の崩れた問題を扱う際に不可欠な道具です。
            </p>

            <ContentBox type="remark" title="ルジャンドル多項式の応用">
                <p>
                    球座標系においてラプラス方程式を解く際、変数分離後の「緯度方向（<InlineMath math="\theta" />）」の解は、変数変換 <InlineMath math="x = \cos \theta" /> を通じてルジャンドル多項式となります。
                    これは静電気学における多重極展開、惑星の重力ポテンシャルの計算、量子力学における水素原子の波動関数（球面調和関数）など、物理・工学の多岐にわたる分野で基盤となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ルジャンドル多項式</b>：ルジャンドル方程式の多項式解で、<InlineMath math="P_n(1)=1" /> と正規化されたもの。</li>
                    <li><b>通常点まわりのべき級数</b>：次数の <InlineMath math="n" /> が整数のとき、級数が有限和で途切れることで多項式が現れる。</li>
                    <li><b>ロドリゲスの公式</b>：多項式を微分操作のみで機械的に生成する強力な表示。</li>
                    <li><b>直交性</b>：<InlineMath math="[-1, 1]" /> において重みなしで直交し、関数展開の基底となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
