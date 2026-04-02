import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionFundamentalTheoremOfAlgebra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群の理論は非常に強力であり、純粋な代数学の定理である「代数学の基本定理」を、位相幾何学的な視点から極めて鮮やかに証明することができます。本節では、円周の基本群の知識を用いてこの証明を行います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">代数学の基本定理の証明の概略</h2>

            <p className="leading-relaxed">
                代数学の基本定理は、「複素数係数の多項式は、必ず複素数の範囲に根（解）をもつ」という定理です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.2-1 (代数学の基本定理)"
            >
                <p>
                    次数 <InlineMath math="n \geq 1" /> の任意の複素係数多項式
                    <BlockMath math="p(z) = z^n + a_{n-1}z^{n-1} + \cdots + a_1 z + a_0 \quad (a_i \in \mathbb{C})" />
                    は、複素数平面 <InlineMath math="\mathbb{C}" /> 内に少なくとも 1 つの根をもつ。すなわち、<InlineMath math="p(z_0) = 0" /> となる <InlineMath math="z_0 \in \mathbb{C}" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    背理法で示す。<InlineMath math="p(z)" /> が <InlineMath math="\mathbb{C}" /> 上で決して根を持たない（すべての <InlineMath math="z \in \mathbb{C}" /> に対して <InlineMath math="p(z) \neq 0" />）と仮定する。
                </p>
                <p>
                    この仮定の下で、各半径 <InlineMath math="r \geq 0" /> に対して、円周上の点 <InlineMath math="re^{2\pi i t}" />（<InlineMath math="t \in [0,1]" />）を <InlineMath math="p" /> で写し、それを自身の絶対値で割って単位円周 <InlineMath math="S^1" /> 上に射影したループ <InlineMath math="f_r : [0,1] \to S^1" /> を次のように定義する。
                    <BlockMath math="f_r(t) = \frac{p(re^{2\pi i t})}{|p(re^{2\pi i t})|}" />
                    <InlineMath math="p(z) \neq 0" /> を仮定しているため、分母が <InlineMath math="0" /> になることはなく、<InlineMath math="f_r" /> は well-defined で連続なループである。また、<InlineMath math="f_r" /> はパラメータ <InlineMath math="r" /> に関して連続に変形されるため、任意の <InlineMath math="r" /> について基本群 <InlineMath math="\pi_1(S^1)" /> におけるホモトピー類 <InlineMath math="[f_r]" /> は一定（すなわち巻き数が同じ）でなければならない。
                </p>
                <p>
                    <strong><InlineMath math="r = 0" /> のとき：</strong><br />
                    <InlineMath math="f_0(t) = p(0)/|p(0)|" /> は <InlineMath math="t" /> に依存しない定数であるため、<InlineMath math="f_0" /> は定値ループである。したがって、その巻き数は <InlineMath math="0" /> である。
                </p>
                <p>
                    <strong><InlineMath math="r \to \infty" /> のとき：</strong><br />
                    <InlineMath math="r" /> が十分に大きいとき、多項式 <InlineMath math="p(z)" /> は最高次項 <InlineMath math="z^n" /> が支配的となる。すなわち、
                    <BlockMath math="p(z) = z^n \left( 1 + \frac{a_{n-1}}{z} + \cdots + \frac{a_0}{z^n} \right)" />
                    であり、括弧の中身は <InlineMath math="1" /> に近づく。したがって、十分大きな <InlineMath math="R" /> に対して、ホモトピー
                    <BlockMath math="\begin{aligned} H(t, s) &= \frac{p_s(R e^{2\pi i t})}{|p_s(R e^{2\pi i t})|} \\ p_s(z) &= z^n + (1-s)(a_{n-1}z^{n-1} + \cdots + a_0) \end{aligned}" />
                    を考えると、これは <InlineMath math="0 \neq 0" /> を通らずに <InlineMath math="f_R" /> を <InlineMath math="g(t) = (Re^{2\pi i t})^n / R^n = e^{2\pi i n t}" /> に連続変形するホモトピーとなる。
                    この <InlineMath math="g" /> は明らかに <InlineMath math="n" /> 回転するループであり、巻き数は <InlineMath math="n" /> である。
                </p>
                <p>
                    巻き数が連続的な変形で <InlineMath math="0" /> から <InlineMath math="n" /> （<InlineMath math="n \geq 1" />）へと跳躍することは不可能であるため、矛盾が生じる。したがって、最初の「根を持たない」という仮定は誤りである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.2-1 (<InlineMath math="p(z) = z^2 + 1" /> の根の存在)</span>}
            >
                <p>
                    具体例として <InlineMath math="p(z) = z^2 + 1" /> を考える。代数学の基本定理より、根 <InlineMath math="z = \pm i" /> が存在する。
                </p>
                <p>
                    もし仮に根が存在しないとすると、半径 <InlineMath math="r" /> の円を <InlineMath math="p" /> で写した曲線は、<InlineMath math="r=0" /> のときは <InlineMath math="p(0)=1" /> であり巻き数 0 だが、<InlineMath math="r \to \infty" /> のときは <InlineMath math="z^2" /> の振る舞いにより原点の周りを 2 回回る曲線（巻き数 2）になるはずである。
                    原点を通らずに巻き数 0 の曲線から巻き数 2 の曲線へ連続的に変形することは不可能であり、この変形の途中のある半径 <InlineMath math="r" />（実際には <InlineMath math="r=1" /> で <InlineMath math="z = i" />）において、曲線が必ず原点を通過しなければならないことが位相的に保証されている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">定理の位相的意味</h2>

            <p className="leading-relaxed">
                この証明が機能した本質的な理由は、複素数平面から原点を抜いた空間 <InlineMath math="\mathbb{C} \setminus \{0\}" /> が、単連結ではなく「穴」を持っていることにあります。
            </p>

            <ContentBox
                type="remark"
                title="位相的証明の核心"
            >
                <p>
                    証明の核心は、<InlineMath math="\mathbb{C}" /> 全体が可縮である一方で、原点を抜いた <InlineMath math="\mathbb{C} \setminus \{0\} \simeq S^1" /> は基本群 <InlineMath math="\mathbb{Z}" /> を持ち、そこに「ホモトピー類の段差（離散的な不変量）」が存在することにあります。
                </p>
                <p>
                    もし多項式が根を持たないならば、それは <InlineMath math="\mathbb{C} \to \mathbb{C} \setminus \{0\}" /> という連続写像を定めていることになります。可縮空間からの写像によって作られるループの族はすべて一点に縮められる（巻き数 0 になる）はずですが、無限遠での多項式の代数的な振る舞いは巻き数 <InlineMath math="n" /> を要求します。この位相的な「不可能さ」が、根の存在という代数的な事実を強烈に要請しているのです。
                </p>
                <p>
                    この「連続的な変形では離散的な不変量を変えられない」という論法は、次節で学ぶレトラクションの非存在定理と本質的に全く同じ構造を持っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>代数学の基本定理は、「<InlineMath math="n \geq 1" /> 次の複素係数多項式は少なくとも 1 つの根をもつ」という定理である。</li>
                    <li>多項式が根を持たないと仮定すると、半径を 0 から <InlineMath math="\infty" /> に変化させたときにループの「巻き数」が 0 から <InlineMath math="n" /> へと連続にジャンプしなければならず、基本群の離散性に矛盾する。</li>
                    <li>この証明は、<InlineMath math="S^1" /> の基本群が <InlineMath math="\mathbb{Z}" /> であること（「穴」の存在）を本質的に利用している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
