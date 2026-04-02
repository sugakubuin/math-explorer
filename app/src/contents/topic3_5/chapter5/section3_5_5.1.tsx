import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SeparationOfVariablesProcedures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                偏微分方程式（PDE）を解くための最も基本的かつ強力な手法の一つが<b>分離変数法</b>です。
                これは、多変数の未知関数を「それぞれの変数のみに依存する関数の積」として仮定することで、PDE をいくつかの常微分方程式（ODE）に分解する技法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離変数法の基本手順</h2>

            <p className="leading-relaxed">
                積の形の解を代入することで、独立な変数ごとの方程式を導きます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (分離変数法)">
                <p>
                    未知関数 <InlineMath math="u(x, t)" /> に対して、
                    <BlockMath math="u(x, t) = X(x)T(t)" />
                    という<b>積の形</b>の解が存在すると仮定する。これを偏微分方程式に代入し、各辺がそれぞれ単一の変数のみを含むように等式を変形する。
                    両辺が異なる独立変数に依存しているため、それらは共通の定数（<b>分離定数</b>）に等しくなければならないという性質を利用して、PDE を ODE に帰着させる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (熱方程式の変数分離)">
                <p>
                    1 次元の熱方程式 <InlineMath math="u_t = \kappa u_{xx}" />（<InlineMath math="0 < x < L" />）を考える。
                    <InlineMath math="u = X(x)T(t)" /> を代入すると：
                    <BlockMath math="X(x)T'(t) = \kappa X''(x)T(t) \implies \frac{T'(t)}{\kappa T(t)} = \frac{X''(x)}{X(x)}" />
                    左辺は <InlineMath math="t" /> のみ、右辺は <InlineMath math="x" /> のみの関数であるため、これらはある定数 <InlineMath math="-\lambda" /> に等しい。
                    <BlockMath math="\frac{T'}{\kappa T} = -\lambda, \quad \frac{X''}{X} = -\lambda" />
                    境界条件 <InlineMath math="u(0, t) = u(L, t) = 0" /> は <InlineMath math="X(0) = X(L) = 0" /> に対応し、これにより固有値 <InlineMath math="\lambda_n = (n\pi/L)^2" /> と固有関数 <InlineMath math="X_n(x) = \sin(n\pi x/L)" /> が得られる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="分離変数法の適用条件">
                <p>
                    この手法が適用できるためには、以下の条件が整っている必要がある：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>方程式が<b>線形</b>かつ<b>同次</b>であること（非同次項があると単純な積に分けられない）。</li>
                    <li>係数が変数分離形であること。</li>
                    <li>境界条件もまた積の形、あるいは変数に対して分離されていること。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">初期条件の処理</h2>

            <p className="leading-relaxed">
                分離変数法で得られた個々の解（モード）を重ね合わせることで、任意の初期条件を満たす一般解を構成します。
            </p>

            <ContentBox type="example" title="Example 5.1-2 (初期条件とフーリエ係数)">
                <p>
                    熱方程式の解を <InlineMath math="u(x, t) = \sum_{n=1}^\infty a_n \sin(n\pi x/L) e^{-\kappa (n\pi/L)^2 t}" /> とし、初期条件 <InlineMath math="u(x, 0) = f(x)" /> が与えられたとする。
                    <BlockMath math="f(x) = \sum_{n=1}^\infty a_n \sin\left(\frac{n\pi x}{L}\right)" />
                    これは <InlineMath math="f(x)" /> のフーリエ正弦級数展開に他ならない。係数 <InlineMath math="a_n" /> は直交性を利用して以下のように決定される：
                    <BlockMath math="a_n = \frac{2}{L} \int_0^L f(x) \sin\left(\frac{n\pi x}{L}\right) dx" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="フーリエ解析との接続">
                <p>
                    分離変数法は、本質的に「物理的な境界条件に適した関数空間の基底（固有関数）」を見つけ出し、その基底で初期条件を展開する操作であるといえます。
                    したがって、Chapter 3-4 で学んだフーリエ解析は、分離変数法という PDE 解法を支える数学的インフラとしての側面を持っています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>分離変数法は、未知数を変数の積 <InlineMath math="u=XT" /> と仮定して、PDE を複数の ODE に分解する手法である。</li>
                    <li>境界条件を満たす解を求めることで、特定の固有値と固有関数のセットが得られる。</li>
                    <li>任意の初期条件は、これらの固有関数を用いた級数（フーリエ級数など）として表現される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
