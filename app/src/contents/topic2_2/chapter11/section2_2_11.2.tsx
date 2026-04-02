import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_11_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                スカラー場の線積分が「針金の質量」という静的なモデルに基づいていたのに対し、物理学、特に力学や電磁気学で圧倒的に重要な役割を果たすのが<strong>ベクトル場の線積分</strong>です。
                これは直感的には「力場の中を移動する粒子に対して、その力がする<strong>仕事（Work）</strong>」を計算する操作に相当します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場の線積分の定義</h2>

            <p>
                物体に一定の力 <InlineMath math="\mathbf{F}" /> を加えながら直線的な変位ベクトル <InlineMath math="\mathbf{d}" /> だけ移動させたとき、力がした仕事は「力ベクトルと変位ベクトルの内積」 <InlineMath math="W = \mathbf{F} \cdot \mathbf{d}" /> で定義されます（進行方向に垂直な力は仕事をしません）。
            </p>
            <p>
                力が場所によって変化し（ベクトル場 <InlineMath math="\mathbf{F}(\mathbf{x})" />）、移動経路も曲線 <InlineMath math="C" /> である場合、曲線を微小な変位ベクトル <InlineMath math="d\mathbf{r}" /> の連続と考え、各微小変位での仕事 <InlineMath math="\mathbf{F} \cdot d\mathbf{r}" /> を足し合わせることで線積分を定義します。
            </p>

            <ContentBox type="definition" title="Definition 11.2-1 (ベクトル場の線積分)">
                <p>
                    <InlineMath math="C" /> を空間内の滑らかで<strong>向き付けられた</strong>曲線とし、<InlineMath math="\mathbf{F}" /> を <InlineMath math="C" /> 上で定義された連続なベクトル場とする。
                </p>
                <p className="mt-2">
                    曲線 <InlineMath math="C" /> をパラメータ <InlineMath math="t" /> （<InlineMath math="a \le t \le b" />）を用いて <InlineMath math="\mathbf{r}(t)" /> として表す（ここで <InlineMath math="\mathbf{r}(a)" /> を始点、<InlineMath math="\mathbf{r}(b)" /> を終点とする向きを仮定する）。
                    このとき、ベクトル場 <InlineMath math="\mathbf{F}" /> の曲線 <InlineMath math="C" /> に沿った<strong>線積分</strong>を次のように定義・計算する：
                </p>
                <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt" />
                <p className="mt-2">
                    成分で表して、<InlineMath math="\mathbf{F} = (P, Q, R)" />、<InlineMath math="d\mathbf{r} = (dx, dy, dz)" /> とすると、次の微分形式の記法も頻繁に用いられる：
                </p>
                <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C P\, dx + Q\, dy + R\, dz" />
            </ContentBox>

            <ContentBox type="remark" title="スカラー場の線積分との関係と向きへの依存性">
                <p>
                    前節のスカラー場の線積分と異なり、今回の被積分関数は「内積」です。<InlineMath math="\mathbf{T}(t) = \mathbf{r}'(t) / \|\mathbf{r}'(t)\|" /> を単位接ベクトルとすれば、<InlineMath math="d\mathbf{r} = \mathbf{r}'(t) \, dt = \mathbf{T} \|\mathbf{r}'(t)\| \, dt = \mathbf{T} \, ds" /> と書けるため、
                </p>
                <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C (\mathbf{F} \cdot \mathbf{T}) \, ds" />
                <p className="mt-2">
                    となり、これは「ベクトル場 <InlineMath math="\mathbf{F}" /> の曲線に対する<strong>接成分</strong>（スカラー）の線積分」とみなせます。
                </p>
                <p className="mt-2">
                    <strong>重要：</strong> 曲線の進む向きを逆（<InlineMath math="-C" />）にすると、変位ベクトル <InlineMath math="d\mathbf{r}" /> の向き（接ベクトル <InlineMath math="\mathbf{T}" /> の向き）が逆転するため、<strong>線積分の値は符号が反転します</strong>。
                    <InlineMath math="\int_{-C} \mathbf{F} \cdot d\mathbf{r} = - \int_C \mathbf{F} \cdot d\mathbf{r}" />。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">保存力場と線積分の経路独立性</h2>

            <p>
                一般に、空間の2点 A から B へ移動する際、経路 <InlineMath math="C_1" /> を通るか <InlineMath math="C_2" /> を通るかによって、線積分の値（なされた仕事）は異なります。
                しかし、ある特別なベクトル界においては、「<strong>どの経路を通っても仕事が同じになる（始点と終点だけで決まる）</strong>」という驚くべき性質が成り立ちます。
            </p>

            <ContentBox type="definition" title="Definition 11.2-2 (保存力場・ポテンシャル関数)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F}" /> が、あるスカラー関数 <InlineMath math="f" /> の勾配（gradient）として表されるとき、すなわち
                </p>
                <BlockMath math="\mathbf{F} = \nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right)" />
                <p className="mt-2">
                    となるとき、<InlineMath math="\mathbf{F}" /> を<strong>保存力場</strong>（Conservative vector field）と呼び、<InlineMath math="f" /> を <InlineMath math="\mathbf{F}" /> の<strong>ポテンシャル関数</strong>（Potential function、位置エネルギー）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 11.2-1 (線積分の基本定理 / 経路独立性)">
                <p>
                    開領域 <InlineMath math="D" /> 上で定義された連続なベクトル場 <InlineMath math="\mathbf{F}" /> について、以下の3つの条件は互いに同値である：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>(A) ポテンシャルの存在：</strong> <InlineMath math="\mathbf{F}" /> は保存力場である（<InlineMath math="\mathbf{F} = \nabla f" /> となる <InlineMath math="f" /> が存在する）。</li>
                    <li><strong>(B) 経路独立性：</strong> <InlineMath math="D" /> 内の任意の2点 <InlineMath math="A, B" /> を結ぶ任意の区分的に滑らかな曲線 <InlineMath math="C" /> について、積分 <InlineMath math="\int_C \mathbf{F} \cdot d\mathbf{r}" /> の値は経路 <InlineMath math="C" /> の選び方に依存せず、始点 <InlineMath math="A" /> と終点 <InlineMath math="B" /> のみに依存する。</li>
                    <li><strong>(C) 閉曲線上の積分がゼロ：</strong> <InlineMath math="D" /> 内の任意の閉曲線（始点と終点が一致する曲線）<InlineMath math="K" /> に沿う積分が <InlineMath math="0" /> になる（<InlineMath math="\oint_K \mathbf{F} \cdot d\mathbf{r} = 0" />）。</li>
                </ul>
                <p className="mt-2">
                    特に、(A)が成り立つとき、積分値はポテンシャル関数の差のみで計算できる：
                </p>
                <BlockMath math="\int_C \nabla f \cdot d\mathbf{r} = f(\mathbf{B}) - f(\mathbf{A})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof [同値性の証明]">
                <p>
                    ここでは「(A) <InlineMath math="\implies" /> 積分値が <InlineMath math="f(\mathbf{B}) - f(\mathbf{A})" /> になること <InlineMath math="\implies" /> (B) および (C)」という最も本質的な流れを証明する。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[(A) <InlineMath math="\implies" /> 基本定理の等式]</p>
                <p className="mt-2">
                    <InlineMath math="\mathbf{F} = \nabla f" /> と仮定する。曲線 <InlineMath math="C" /> のパラメータ方程式を <InlineMath math="\mathbf{r}(t) = (x(t), y(t), z(t))" /> （<InlineMath math="a \le t \le b" />）とする。
                    ここで始点は <InlineMath math="\mathbf{A} = \mathbf{r}(a)" />、終点は <InlineMath math="\mathbf{B} = \mathbf{r}(b)" /> である。
                </p>
                <p className="mt-2">
                    線積分の定義に従って計算すると：
                </p>
                <BlockMath math="\begin{aligned}
                                    \int_C \mathbf{F} \cdot d\mathbf{r} &= \int_C \nabla f \cdot d\mathbf{r} \\
                                    &= \int_a^b \left( \nabla f(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \right) \, dt \\
                                    &= \int_a^b \left( \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt} \right) \, dt
                                \end{aligned}" />
                <p className="mt-2">
                    合成関数の微分法則（連鎖律: Chain Rule）により、被積分関数はまさに「<InlineMath math="f" /> に曲線 <InlineMath math="\mathbf{r}(t)" /> を代入して得られる <InlineMath math="t" /> の関数 <InlineMath math="g(t) = f(\mathbf{r}(t))" /> の導関数 <InlineMath math="g'(t)" />」に他ならない。すなわち、
                </p>
                <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \frac{d}{dt} \big[ f(\mathbf{r}(t)) \big] \, dt" />
                <p className="mt-2">
                    通常の1変数の微分積分学の基本定理より、導関数の定積分は両端での値の差となる。
                </p>
                <BlockMath math="\begin{aligned} \int_C \mathbf{F} \cdot d\mathbf{r} &= \big[ f(\mathbf{r}(t)) \big]_a^b \\ &= f(\mathbf{r}(b)) - f(\mathbf{r}(a)) \\ &= f(\mathbf{B}) - f(\mathbf{A}) \end{aligned}" />
                <p className="mt-2">
                    これが証明されたことで、積分の値が <InlineMath math="\mathbf{A}" /> と <InlineMath math="\mathbf{B}" /> での <InlineMath math="f" /> の値だけで決まり、その間の経路 <InlineMath math="C" /> の形状には一切依存しないこと<strong>（(B) 経路独立性）</strong>が同時に示された。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[(B) <InlineMath math="\implies" /> (C)]</p>
                <p className="mt-2">
                    経路に依存しないと仮定し、任意の閉曲線 <InlineMath math="K" /> を考える。<InlineMath math="K" /> 上に任意の2点 <InlineMath math="\mathbf{A}, \mathbf{B}" /> をとると、<InlineMath math="K" /> は <InlineMath math="\mathbf{A}" /> から <InlineMath math="\mathbf{B}" /> への経路 <InlineMath math="C_1" /> と、<InlineMath math="\mathbf{B}" /> から <InlineMath math="\mathbf{A}" /> へ戻る経路 <InlineMath math="C_2" /> により <InlineMath math="K = C_1 \cup C_2" /> と分解できる。<InlineMath math="C_2" /> の逆向き（<InlineMath math="\mathbf{A}" /> から <InlineMath math="\mathbf{B}" />）を <InlineMath math="-C_2" /> とすると経路独立性より
                </p>
                <BlockMath math="\int_{C_1} \mathbf{F} \cdot d\mathbf{r} = \int_{-C_2} \mathbf{F} \cdot d\mathbf{r} = - \int_{C_2} \mathbf{F} \cdot d\mathbf{r}" />
                <p className="mt-2">
                    移項して和をとれば、閉曲線全体の積分は
                </p>
                <BlockMath math="\oint_K \mathbf{F} \cdot d\mathbf{r} = \int_{C_1} \mathbf{F} \cdot d\mathbf{r} + \int_{C_2} \mathbf{F} \cdot d\mathbf{r} = 0" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ (C) <InlineMath math="\implies" /> (A) の証明には、「固定した基準点から積分を用いてポテンシャル関数を構成し、その勾配が元のベクトル場に一致することを示す」という構成的な手法が用いられるが、ここでは割愛する。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

        </section>
    );
}
