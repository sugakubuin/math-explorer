import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionDualBasis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                この章では、線形形式の空間である「双対空間」について、線形代数学IIで学んだ内容を復習しながら、多重線形代数の基礎となる概念を整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">双対空間と双対基底の定義</h2>

            <p className="leading-relaxed">
                まずは、ベクトル空間上の線形汎関数（線形形式）の全体がなす双対空間の定義から振り返ります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-1 (双対空間)"
            >
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上の有限次元ベクトル空間 <InlineMath math="V" /> の<strong>双対空間</strong> <InlineMath math="V^* = \mathrm{Hom}(V, \mathbb{k})" />。
                    <InlineMath math="V^*" /> の元を<strong>線形形式</strong>（線形汎関数、1-形式）という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                もとのベクトル空間の基底に対して、双対空間においても自然な基底を構成することができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-2 (双対基底)"
            >
                <p>
                    <InlineMath math="V" /> の基底 <InlineMath math="\{e_1, \ldots, e_n\}" /> に対して、<strong>双対基底</strong> <InlineMath math="\{e^1, \ldots, e^n\} \subset V^*" /> を
                    <BlockMath math="e^i(e_j) = \delta^i_j" />
                    （クロネッカーのデルタ）で定める。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように定めた <InlineMath math="\{e^i\}" /> は、実際に <InlineMath math="V^*" /> の基底として機能します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.1-1 (双対基底と次元)"
            >
                <p>
                    双対基底 <InlineMath math="\{e^i\}" /> は <InlineMath math="V^*" /> の基底である。したがって、<InlineMath math="\dim V^* = \dim V" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    任意の <InlineMath math="\phi \in V^*" /> は <InlineMath math="\phi = \sum_i \phi(e_i) e^i" /> と書ける。なぜなら、任意の基底ベクトル <InlineMath math="e_j" /> に対して、
                    <BlockMath math="\left( \sum_i \phi(e_i) e^i \right)(e_j) = \sum_i \phi(e_i) e^i(e_j) = \phi(e_j)" />
                    となり、値が一致するからである（生成性）。
                </p>
                <p>
                    また、線形独立性については、<InlineMath math="\sum_i a_i e^i = 0" /> を <InlineMath math="e_j" /> に適用すると、<InlineMath math="\sum_i a_i e^i(e_j) = a_j = 0" /> となるため示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な空間における双対基底の例を見てみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 1.1-1 (標準双対基底)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> の標準双対基底は、<InlineMath math="e^1(x,y,z)=x" />、<InlineMath math="e^2(x,y,z)=y" />、<InlineMath math="e^3(x,y,z)=z" /> で与えられる。
                </p>
                <p>
                    このとき、任意の線形形式 <InlineMath math="\phi(x,y,z)=ax+by+cz" /> に対して、
                    <BlockMath math="\begin{aligned} &(ae^1+be^2+ce^3)(x,y,z) \\ &= a e^1(x,y,z) + b e^2(x,y,z) + c e^3(x,y,z) \\ &= ax+by+cz \\ &= \phi(x,y,z) \end{aligned}" />
                    となるため、確かに <InlineMath math="\phi = ae^1+be^2+ce^3" /> と表すことができる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">非標準基底の双対基底</h2>

            <p className="leading-relaxed">
                標準基底ではない基底に対しても、定義に従って双対基底を計算することができます。
            </p>

            <ContentBox
                type="example"
                title="Example 1.1-2 (非標準基底に対する双対基底)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の非標準基底として、<InlineMath math="v_1 = (1,1)" />、<InlineMath math="v_2 = (1,-1)" /> を考える。
                </p>
                <p>
                    双対基底 <InlineMath math="v^1, v^2" /> は <InlineMath math="v^i(v_j) = \delta^i_j" /> を満たす。<InlineMath math="v^1(x,y) = ax+by" /> とおくと、
                    <BlockMath math="\begin{cases} v^1(v_1) = a+b = 1 \\ v^1(v_2) = a-b = 0 \end{cases}" />
                    これを解いて <InlineMath math="a=1/2, b=1/2" /> を得る。同様に <InlineMath math="v^2(x,y) = cx+dy" /> についても解くと、
                    <BlockMath math="v^1(x,y) = \frac{x+y}{2}, \quad v^2(x,y) = \frac{x-y}{2}" />
                    となる。実際、<InlineMath math="v^1(v_2) = (1-1)/2 = 0" /> などが成り立っていることが確認できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように、双対空間とその基底は、ベクトルそのものではなく、ベクトルを「測る」操作を表しています。
            </p>

            <ContentBox
                type="remark"
                title="双対空間は「測定の空間」"
            >
                <p>
                    <InlineMath math="V" /> の元を「ベクトル」、<InlineMath math="V^*" /> の元を「そのベクトルを数値に変換する計測器」と解釈できます。
                    物理学においては、共変ベクトル（双対空間の元）と反変ベクトル（元の空間の元）の区別がこれに対応します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>体 <InlineMath math="\mathbb{k}" /> 上のベクトル空間 <InlineMath math="V" /> から <InlineMath math="\mathbb{k}" /> への線形写像の全体を双対空間 <InlineMath math="V^*" /> と呼ぶ。</li>
                    <li><InlineMath math="V" /> の基底 <InlineMath math="\{e_i\}" /> に対し、<InlineMath math="e^i(e_j) = \delta^i_j" /> を満たす <InlineMath math="\{e^i\}" /> が双対基底となる。</li>
                    <li>有限次元のとき、<InlineMath math="\dim V^* = \dim V" /> が成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
