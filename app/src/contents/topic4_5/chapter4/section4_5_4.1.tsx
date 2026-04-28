import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CotangentSpaceAndBundle() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章では、多様体上の各点に付随する「接空間」と、それらを束ねた「接束」を定義し、ベクトル場を扱いました。
                本章では、接空間の「双対空間」である<strong>余接空間（Cotangent space）</strong>を導入します。
                接ベクトルが「方向微分」や「速度」を表すのに対し、余接ベクトルは「関数の微小な変化」や「等高線の密度」を表す幾何学的な対象です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">余接空間の定義</h2>

            <p className="leading-relaxed">
                線形代数学（3-11 多重線形代数学I）で学ぶように、任意のベクトル空間 <InlineMath math="V" /> には、その上の実数値線形写像全体のなす空間である「双対空間（Dual space）」<InlineMath math="V^*" /> が自然に定まります。
                この構成を、多様体の各点における接空間 <InlineMath math="T_pM" /> に適用したものが余接空間です。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (余接空間)">
                <p>
                    多様体 <InlineMath math="M" /> の点 <InlineMath math="p" /> における<strong>余接空間（cotangent space）</strong> <InlineMath math="T_p^*M" /> とは、接空間 <InlineMath math="T_pM" /> の双対ベクトル空間のことである。
                </p>
                <BlockMath math="T_p^*M = (T_pM)^* = \{ \omega : T_pM \to \mathbb{R} \mid \omega \text{ は線形写像} \}" />
                <p className="mt-2">
                    <InlineMath math="T_p^*M" /> の元を <InlineMath math="p" /> における<strong>余接ベクトル（cotangent vector）</strong>または<strong>コベクトル（covector）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                接空間 <InlineMath math="T_pM" /> が <InlineMath math="n" /> 次元であるため、その双対空間である余接空間 <InlineMath math="T_p^*M" /> も <InlineMath math="n" /> 次元となります。
                局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> をとると、接空間の基底 <InlineMath math="\{\partial/\partial x^1|_p, \ldots, \partial/\partial x^n|_p\}" /> に対応する「双対基底」を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 (双対基底)">
                <p>
                    チャート <InlineMath math="(U, x^1, \ldots, x^n)" /> に対して、<InlineMath math="T_p^*M" /> の基底 <InlineMath math="\{dx^1|_p, \ldots, dx^n|_p\}" /> を、接空間の基底 <InlineMath math="\{\partial/\partial x^j|_p\}" /> への作用がクロネッカーのデルタとなるように定義する。
                </p>
                <BlockMath math="dx^i|_p \left( \left. \frac{\partial}{\partial x^j} \right|_p \right) = \delta^i_j = \begin{cases} 1 & (i = j) \\ 0 & (i \neq j) \end{cases}" />
                <p className="mt-2">
                    この <InlineMath math="\{dx^1|_p, \ldots, dx^n|_p\}" /> を余接空間の<strong>双対基底（dual basis）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                任意の余接ベクトル <InlineMath math="\omega \in T_p^*M" /> は、この双対基底を用いて <InlineMath math="\omega = \sum_{i=1}^n \omega_i \, dx^i|_p" /> と一意に表すことができます。
                ここで、係数 <InlineMath math="\omega_i" /> は <InlineMath math="\omega_i = \omega(\partial/\partial x^i|_p)" /> で与えられます。
                具体的な計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> の点 <InlineMath math="p" /> において、余接ベクトル <InlineMath math="\omega_p = 3\,dx|_p + 2\,dy|_p - dz|_p" /> を考える。
                    この <InlineMath math="\omega_p" /> が、接ベクトル <InlineMath math="v = a\left.\frac{\partial}{\partial x}\right|_p + b\left.\frac{\partial}{\partial y}\right|_p + c\left.\frac{\partial}{\partial z}\right|_p" /> にどのように作用するかを計算する。
                </p>
                <p className="mt-2">
                    双対基底の定義と線形性から、
                </p>
                <BlockMath math="\begin{aligned} \omega_p(v) &= (3\,dx|_p + 2\,dy|_p - dz|_p) \left( a\left.\frac{\partial}{\partial x}\right|_p + b\left.\frac{\partial}{\partial y}\right|_p + c\left.\frac{\partial}{\partial z}\right|_p \right) \\ &= 3a \, dx|_p\left(\left.\frac{\partial}{\partial x}\right|_p\right) + 2b \, dy|_p\left(\left.\frac{\partial}{\partial y}\right|_p\right) - c \, dz|_p\left(\left.\frac{\partial}{\partial z}\right|_p\right) \\ &= 3a(1) + 2b(1) - c(1) \\ &= 3a + 2b - c \end{aligned}" />
                <p className="mt-2">
                    となる。このように、余接ベクトルは接ベクトルを入力として実数を出力する線形関数として働く。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">余接束</h2>

            <p className="leading-relaxed">
                接束 <InlineMath math="TM" /> を構成したのと全く同様の手順で、多様体のすべての点における余接空間を集めた空間「余接束」を構成することができます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-3 (余接束)">
                <p>
                    <InlineMath math="n" /> 次元多様体 <InlineMath math="M" /> の各点 <InlineMath math="p" /> における余接空間 <InlineMath math="T_p^*M" /> の直和集合を
                </p>
                <BlockMath math="T^*M = \bigsqcup_{p \in M} T_p^*M" />
                <p className="mt-2">
                    とする。自然な射影 <InlineMath math="\pi : T^*M \to M" /> を備え、接束と同様に滑らかな多様体構造を入れたものを、<InlineMath math="M" /> の<strong>余接束（cotangent bundle）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                余接束もまた、<InlineMath math="M" /> を底空間とするランク <InlineMath math="n" /> のベクトル束となります。
                接束と余接束の決定的な違いは、座標変換をした際の「遷移関数」の振る舞いにあります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1">
                <p>
                    余接束 <InlineMath math="T^*M" /> の遷移関数は、接束 <InlineMath math="TM" /> の遷移関数（ヤコビ行列 <InlineMath math="J" />）の逆転置行列 <InlineMath math="(J^{-1})^T" /> で与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2つの局所座標系 <InlineMath math="(x^1, \ldots, x^n)" /> と <InlineMath math="(y^1, \ldots, y^n)" /> の間の変換を考える。
                    接空間の基底ベクトルは、連鎖律により
                </p>
                <BlockMath math="\frac{\partial}{\partial x^j} = \sum_{i=1}^n \frac{\partial y^i}{\partial x^j} \frac{\partial}{\partial y^i}" />
                <p className="mt-2">
                    と変換される。ここで <InlineMath math="J^i_j = \partial y^i / \partial x^j" /> はヤコビ行列 <InlineMath math="J" /> の成分である。
                    余接空間の双対基底 <InlineMath math="dx^j" /> と <InlineMath math="dy^i" /> の関係を <InlineMath math="dx^j = \sum_{k=1}^n A^j_k \, dy^k" /> とおいて、両辺を <InlineMath math="\partial/\partial x^l" /> に作用させる。
                </p>
                <BlockMath math="\delta^j_l = dx^j \left( \frac{\partial}{\partial x^l} \right) = \left( \sum_{k=1}^n A^j_k \, dy^k \right) \left( \sum_{i=1}^n \frac{\partial y^i}{\partial x^l} \frac{\partial}{\partial y^i} \right) = \sum_{k=1}^n \sum_{i=1}^n A^j_k \frac{\partial y^i}{\partial x^l} \delta^k_i = \sum_{i=1}^n A^j_i \frac{\partial y^i}{\partial x^l}" />
                <p className="mt-2">
                    行列の言葉で書けば、<InlineMath math="I = A J" />（<InlineMath math="I" /> は単位行列）となる。したがって <InlineMath math="A = J^{-1}" /> である。
                    余接ベクトル <InlineMath math="\omega = \sum \omega_j \, dx^j = \sum \tilde{\omega}_i \, dy^i" /> の成分の変換則は、
                </p>
                <BlockMath math="\sum_{i=1}^n \tilde{\omega}_i \, dy^i = \sum_{j=1}^n \omega_j \left( \sum_{i=1}^n (J^{-1})^j_i \, dy^i \right)" />
                <p className="mt-2">
                    より、<InlineMath math="\tilde{\omega}_i = \sum_{j=1}^n \omega_j (J^{-1})^j_i" /> となる。
                    これを列ベクトル <InlineMath math="\boldsymbol{\omega}" /> に対する行列の積として書くと、<InlineMath math="\tilde{\boldsymbol{\omega}} = (J^{-1})^T \boldsymbol{\omega}" /> となり、遷移関数が <InlineMath math="(J^{-1})^T" /> であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="共変と反変">
                <p>
                    接ベクトルの成分はヤコビ行列 <InlineMath math="J" /> で変換されるため「反変（contravariant）」と呼ばれ、余接ベクトルの成分はヤコビ行列の逆行列 <InlineMath math="J^{-1}" /> で変換されるため「共変（covariant）」と呼ばれます。
                    この「共変」「反変」の区別は、物理学やテンソル解析において極めて重要です。
                    3-11 多重線形代数学I で学んだ双対空間の理論が、多様体上の各点でファイバーごとに適用されることで、この変換則の幾何学的な意味が明確になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>余接空間 <InlineMath math="T_p^*M" /> は、接空間 <InlineMath math="T_pM" /> の双対ベクトル空間として定義される。</li>
                    <li>局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> に対して、<InlineMath math="\{dx^1|_p, \ldots, dx^n|_p\}" /> が余接空間の双対基底となる。</li>
                    <li>余接束 <InlineMath math="T^*M" /> は、すべての余接空間を集めたランク <InlineMath math="n" /> のベクトル束である。</li>
                    <li>座標変換において、接ベクトルはヤコビ行列 <InlineMath math="J" />（反変）で、余接ベクトルは <InlineMath math="(J^{-1})^T" />（共変）で変換される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
