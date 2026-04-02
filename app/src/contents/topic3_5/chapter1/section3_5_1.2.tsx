import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RegularSingularPointsAndIndicialEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では通常点のまわりでのべき級数解を扱いましたが、物理的に重要な多くの方程式（ベッセル方程式など）は、中心点において係数が発散する「特異点」を持ちます。
                特異点のまわりでは、単純なべき級数では解が見つからないことがありますが、特異点の「質」が良ければ、少し形を修正した級数解を構成できます。
                本節では、特異点の分類と、解の初項の指数を決定する「指標方程式」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異点の分類</h2>

            <p>
                微分方程式 <InlineMath math="y'' + p(x)y' + q(x)y = 0" /> において、係数が「行儀が悪い」点を特異点と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (特異点)">
                <p>
                    係数関数 <InlineMath math="p(x)" /> または <InlineMath math="q(x)" /> の少なくとも一方が点 <InlineMath math="x = x_0" /> で解析的でないとき、点 <InlineMath math="x_0" /> を方程式の<b>特異点</b>（singular point）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                特異点の中でも、発散の度合いが一定の範囲に収まっているものは扱いやすく、次のように定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (確定特異点)">
                <p>
                    点 <InlineMath math="x_0" /> が特異点であるとき、もし極限
                    <BlockMath math="\lim_{x \to x_0} (x-x_0) p(x) \quad \text{および} \quad \lim_{x \to x_0} (x-x_0)^2 q(x)" />
                    が有限の値として存在し、かつそれらが解析的であるとき、<InlineMath math="x_0" /> を<b>確定特異点</b>（正則特異点、regular singular point）と呼ぶ。
                    確定特異点でない特異点を<b>非確定特異点</b>（不確定特異点、irregular singular point）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                具体的な例で分類を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (オイラー方程式の分類)">
                <p>
                    次のオイラー方程式を考える。
                    <BlockMath math="x^2 y'' + \alpha x y' + \beta y = 0 \implies y'' + \frac{\alpha}{x} y' + \frac{\beta}{x^2} y = 0" />
                    点 <InlineMath math="x = 0" /> において、<InlineMath math="p(x) = \alpha/x, q(x) = \beta/x^2" /> はともに解析的ではなく特異点である。
                    しかし、
                    <BlockMath math="x p(x) = \alpha, \quad x^2 q(x) = \beta" />
                    は定数（解析関数の一種）であるため、<InlineMath math="x = 0" /> は<b>確定特異点</b>である。
                </p>
                <p>
                    一方で、<InlineMath math="y'' + \frac{1}{x^3} y = 0" /> のような方程式では、<InlineMath math="x^2 q(x) = 1/x" /> となり <InlineMath math="x=0" /> で発散するため、非確定特異点となる。
                </p>
            </ContentBox>

            <p>
                確定特異点は、物理現象を記述する方程式において非常に頻繁に現れます。
            </p>

            <ContentBox type="remark" title="確定特異点の重要性">
                <p>
                    ベッセル方程式やルジャンドル方程式など、物理学で現れる主要な微分方程式の多くは確定特異点を持つ<b>フックス型方程式</b>です。
                    確定特異点においては、次節で学ぶ「フロベニウス法」によって解を具体的に構成できるため、理論的にも応用的にも極めて重要です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指標方程式の導出</h2>

            <p>
                確定特異点 <InlineMath math="x_0" /> の近傍では、解を <InlineMath math="y = (x-x_0)^\rho \sum a_n (x-x_0)^n" /> という形で仮定します。
                このとき、最初の指数 <InlineMath math="rho" /> が満たすべき方程式を導きます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (指標方程式)">
                <p>
                    確定特異点 <InlineMath math="x_0 = 0" /> のまわりで <InlineMath math="y = x^\rho \sum_{n=0}^\infty a_n x^n \, (a_0 \neq 0)" /> とおいて方程式に代入したとき、最低次の係数から得られる <InlineMath math="\rho" /> についての 2 次方程式
                    <BlockMath math="\rho(\rho-1) + p_0 \rho + q_0 = 0" />
                    を<b>指標方程式</b>（決定方程式、indicial equation）と呼ぶ。
                    ここで、<InlineMath math="p_0 = \lim_{x \to 0} x p(x), q_0 = \lim_{x \to 0} x^2 q(x)" /> である。
                </p>
            </ContentBox>

            <p>
                指標方程式を解くことで、解の「原点付近での振る舞い」をあらかじめ知ることができます。
            </p>

            <ContentBox type="example" title="Example 1.2-2 (オイラー方程式の指標方程式)">
                <p>
                    オイラー方程式 <InlineMath math="x^2 y'' + \alpha x y' + \beta y = 0" /> では、<InlineMath math="p_0 = \alpha, q_0 = \beta" /> である。
                    よって指標方程式は
                    <BlockMath math="\rho(\rho-1) + \alpha \rho + \beta = 0" />
                    となる。
                    例えば <InlineMath math="\alpha = 1/2, \beta = 0" /> のとき、<InlineMath math="\rho(\rho-1) + \frac{1}{2} \rho = \rho^2 - \frac{1}{2} \rho = 0" /> より、
                    <InlineMath math="\rho = 0, 1/2" /> という 2 つの解が得られる。
                </p>
            </ContentBox>

            <p>
                指標の意味するところを深く理解しておくことが重要です。
            </p>

            <ContentBox type="remark" title="指標と解の冪乗の意味">
                <p>
                    指標 <InlineMath math="\rho" /> は、解 <InlineMath math="y \approx x^\rho" /> という「原点での指数の強さ」を決定します。
                    もし <InlineMath math="\rho" /> が整数でない場合、解は多価関数となり、複素平面上での切り欠き（branch cut）を考慮する必要が出てきます。
                    また、指標の差が整数になる場合には、単純なべき級数だけでは 2 つ目の解が構成できず、対数項が現れることがあります（これについては §1.3 で詳しく扱います）。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>特異点</b>：係数関数が解析的でない点。</li>
                    <li><b>確定特異点</b>：特異点のうち、発散が <InlineMath math="1/x" /> や <InlineMath math="1/x^2" /> 程度に抑えられている点。</li>
                    <li><b>指標方程式</b>：解の初項の指数 <InlineMath math="\rho" /> を決定する 2 次方程式。</li>
                    <li><b>解の振る舞い</b>：確定特異点のまわりでは、解は <InlineMath math="x^\rho" /> にべき級数を掛けた形を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
