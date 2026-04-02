import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PowerSeriesSolutionsAtOrdinaryPoints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分方程式の解を求める際、基本関数（指数関数や三角関数など）の組み合わせで書き下せない場合が多くあります。
                このような場合、解をべき級数の形で仮定して各係数を決定していく「べき級数解法」が非常に強力な武器となります。
                本節では、方程式の係数が「行儀の良い」点である通常点のまわりでの解法について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">べき級数解の定義と収束</h2>

            <p>
                まず、考える対象となる 2 階線形同次微分方程式を次のように標準化します。
                <BlockMath math="y'' + p(x)y' + q(x)y = 0" />
                この方程式の解を、ある点 <InlineMath math="x = x_0" /> のまわりでのべき級数として求めることを考えます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (べき級数解)">
                <p>
                    微分方程式の解として、点 <InlineMath math="x = x_0" /> のまわりに次のべき級数展開
                    <BlockMath math="y(x) = \sum_{n=0}^\infty a_n (x-x_0)^n" />
                    の形を持つものを求めることを、<b>べき級数解法</b>と呼ぶ。このとき、<InlineMath math="x_0" /> を<b>展開の中心</b>という。
                </p>
            </ContentBox>

            <p>
                この方法が適用できるかどうかは、係数関数 <InlineMath math="p(x), q(x)" /> の性質に依存します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (通常点)">
                <p>
                    微分方程式の係数関数 <InlineMath math="p(x)" /> および <InlineMath math="q(x)" /> がともに点 <InlineMath math="x = x_0" /> の近傍で<b>解析的</b>（すなわち、<InlineMath math="x_0" /> のまわりで収束するべき級数に展開可能）であるとき、点 <InlineMath math="x_0" /> を方程式の<b>通常点</b>（ordinary point）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                通常点においては、解の存在が次の定理によって保証されています。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 (通常点でのべき級数解の存在)">
                <p>
                    点 <InlineMath math="x_0" /> が方程式の通常点ならば、その方程式には <InlineMath math="x_0" /> のまわりで収束する 2 つの線形独立なべき級数解が存在する。
                    また、これらの解の収束半径は、<InlineMath math="p(x)" /> と <InlineMath math="q(x)" /> の収束半径のうち小さい方以上であることが保証される。
                </p>
            </ContentBox>

            <p>
                この定理を証明するために、実際に未定係数法を用いて解を構成してみましょう。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    簡単のため <InlineMath math="x_0 = 0" /> とし、解を <InlineMath math="y = \sum_{n=0}^\infty a_n x^n" /> とおく。これを微分すると
                    <BlockMath math="y' = \sum_{n=1}^\infty n a_n x^{n-1}, \quad y'' = \sum_{n=2}^\infty n(n-1) a_n x^{n-2}" />
                    となる。これらを元の方程式に代入し、<InlineMath math="x^n" /> の各項の係数がすべて 0 になるように <InlineMath math="a_n" /> を決定する。
                </p>
                <p>
                    具体的には、方程式の各項を整理して <InlineMath math="x^n" /> の形に統一すると、<InlineMath math="a_{n+2}" /> をそれ以前の項 <InlineMath math="a_k \, (k \leq n)" /> で表す固有の<b>漸化式</b>が得られる。
                    <InlineMath math="a_0, a_1" /> を任意定数としてすべての係数が唯一的に定まるため、2 つの線形独立な解が得られる。
                    収束性については、係数関数の優級数を用いることで、コーシー・アダマールの定理により定理の主張する収束半径が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                実軸上の問題であっても、収束半径を考える際には複素平面を見渡すことが重要です。
            </p>

            <ContentBox type="remark" title="収束半径の意味">
                <p>
                    べき級数解の収束半径は、複素平面上で展開点 <InlineMath math="x_0" /> から「最も近い特異点」までの距離と一致、あるいはそれ以上になります。
                    たとえ実数範囲では問題がなくても、複素数範囲に特異点（例えば <InlineMath math="x^2+1=0" /> の解 <InlineMath math="x = \pm i" />）が存在する場合、それが実軸上のべき級数の有効範囲を制限してしまいます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">係数の逐次決定と具体例</h2>

            <p>
                実際の計算手順を、物理学で重要な方程式を例に見ていきましょう。まずは量子力学の調和振動子に関連する方程式です。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (エルミート方程式)">
                <p>
                    次のエルミート方程式を考える（<InlineMath math="n" /> は定数）。
                    <BlockMath math="y'' - 2xy' + 2ny = 0" />
                    点 <InlineMath math="x_0 = 0" /> は通常点である。<InlineMath math="y = \sum_{k=0}^\infty a_k x^k" /> を代入すると、
                    <BlockMath math="\sum_{k=2}^\infty k(k-1)a_k x^{k-2} - 2x\sum_{k=1}^\infty k a_k x^{k-1} + 2n\sum_{k=0}^\infty a_k x^k = 0" />
                    <BlockMath math="\sum_{k=0}^\infty (k+2)(k+1)a_{k+2} x^k - \sum_{k=0}^\infty 2k a_k x^k + \sum_{k=0}^\infty 2n a_k x^k = 0" />
                    各 <InlineMath math="x^k" /> の係数を集めると、次の漸化式が得られる。
                    <BlockMath math="a_{k+2} = \frac{2(k-n)}{(k+2)(k+1)} a_k" />
                    もし <InlineMath math="n=2" /> ならば、<InlineMath math="a_2 = -2a_0" />, <InlineMath math="a_4 = 0" />, <InlineMath math="a_6 = 0, \dots" /> となり、<InlineMath math="a_1=0" /> と選ぶすることで多項式解 
                    <InlineMath math="y_1(x) = a_0(1 - 2x^2)" />
                    が得られる。
                </p>
            </ContentBox>

            <p>
                次に、光学や回折現象の解析に現れるエアリー方程式を扱います。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (エアリー方程式)">
                <p>
                    次のエアリー方程式の <InlineMath math="x_0 = 0" /> まわりの解を求める。
                    <BlockMath math="y'' - xy = 0" />
                    級数を代入して整理すると、<InlineMath math="\sum (k+2)(k+1)a_{k+2} x^k - \sum a_k x^{k+1} = 0" /> となり、係数比較から
                    <BlockMath math="a_{n+3} = \frac{a_n}{(n+3)(n+2)}" />
                    という漸化式が導かれる。ここから、
                    <ul className="list-disc list-inside">
                        <li><InlineMath math="a_0 = 1, a_1 = 0" /> とおいた解 <InlineMath math="y_1(x)" /></li>
                        <li><InlineMath math="a_0 = 0, a_1 = 1" /> とおいた解 <InlineMath math="y_2(x)" /></li>
                    </ul>
                    の 2 つが線形独立な基本解をなすことがわかる。
                </p>
            </ContentBox>

            <p>
                通常の解析関数による解だけでなく、多項式として閉じることがある点は重要です。
            </p>

            <ContentBox type="remark" title="多項式解の重要性">
                <p>
                    エルミート方程式やルジャンドル方程式（§1.5）において、漸化式がある項で途切れて有限和になる場合、その解は<b>多項式解</b>と呼ばれます。
                    これらは量子力学などの現代物理における境界値問題において「固有関数」として現れ、空間が量子化される物理的理由を数学的に説明する重要な役割を担っています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>べき級数解法</b>：解を多項式の無限和として仮定し、係数を決定する手法。</li>
                    <li><b>通常点</b>：係数関数が解析的である点。ここでの級数解は必ず収束する。</li>
                    <li><b>漸化式</b>：代入後に得られる <InlineMath math="a_{n+2}" /> などを定める式。</li>
                    <li><b>多項式解</b>：物理的に重要な特定のケースでは、級数が有限項で終了し、多项式が解となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
