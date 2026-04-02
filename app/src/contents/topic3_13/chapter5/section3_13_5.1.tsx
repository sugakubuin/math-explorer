import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ChristoffelSymbols() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面上の接ベクトルがどのように変化していくかを記述するために、2階の偏微分を「接成分」と「法成分」に分解することを考えます。このうち「接成分」を表す係数がクリストッフェル記号であり、第一基本形式のみで完全に決定されるという驚くべき性質を持っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">クリストッフェル記号の定義</h2>

            <p className="leading-relaxed">
                正則曲面の各点において、接ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> と法ベクトル <InlineMath math="\mathbf{N}" /> は、3次元空間の基底をなします。したがって、位置ベクトル <InlineMath math="\mathbf{x}" /> の2階偏微分はこの3つのベクトルの線形結合で表せます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 5.1-1 (クリストッフェル記号)"
            >
                <p>
                    2階偏微分ベクトル <InlineMath math="\mathbf{x}_{uu}, \mathbf{x}_{uv}, \mathbf{x}_{vv}" /> を、基底 <InlineMath math="\{\mathbf{x}_u, \mathbf{x}_v, \mathbf{N}\}" /> を用いて展開する。
                    <BlockMath math="\mathbf{x}_{uu} = \Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N}" />
                    <BlockMath math="\mathbf{x}_{uv} = \mathbf{x}_{vu} = \Gamma^1_{12}\mathbf{x}_u + \Gamma^2_{12}\mathbf{x}_v + f\mathbf{N}" />
                    <BlockMath math="\mathbf{x}_{vv} = \Gamma^1_{22}\mathbf{x}_u + \Gamma^2_{22}\mathbf{x}_v + g\mathbf{N}" />
                </p>
                <p>
                    法成分の係数 <InlineMath math="e, f, g" /> が第二基本形式の係数であることは既に見た（Definition 4.1-1）。<br />
                    ここで現れる接成分の係数 <InlineMath math="\Gamma^k_{ij}" />（<InlineMath math="i, j, k \in \{1, 2\}" />、<InlineMath math="1=u, 2=v" /> に対応）を、<strong>クリストッフェル記号（Christoffel symbols of the second kind）</strong>という。（注：偏微分の交換性から <InlineMath math="\Gamma^k_{12} = \Gamma^k_{21}" /> が成り立つ。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義を見ると、<InlineMath math="\Gamma^k_{ij}" /> は3次元空間の中での曲がり方（外的な情報）に依存するように思えるかもしれません。しかし実際には、第一基本形式の係数（内的な情報）だけで計算できることが証明できます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 5.1-1 (クリストッフェル記号の公式)"
            >
                <p>
                    クリストッフェル記号 <InlineMath math="\Gamma^k_{ij}" /> は、第一基本形式の係数 <InlineMath math="E, F, G" /> とその1階偏微分のみを用いて一意に表される。例えば <InlineMath math="\Gamma^1_{11}" /> は次のように書ける。
                    <BlockMath math="\Gamma^1_{11} = \frac{G E_u - 2F F_u + F E_v}{2(EG - F^2)}" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\mathbf{x}_{uu} = \Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N}" /> の両辺と <InlineMath math="\mathbf{x}_u" /> の内積をとる。<InlineMath math="\mathbf{N} \cdot \mathbf{x}_u = 0" /> なので法成分は消え、
                    <BlockMath math="\mathbf{x}_{uu} \cdot \mathbf{x}_u = \Gamma^1_{11}(\mathbf{x}_u \cdot \mathbf{x}_u) + \Gamma^2_{11}(\mathbf{x}_v \cdot \mathbf{x}_u) = \Gamma^1_{11}E + \Gamma^2_{11}F" />
                    となる。
                </p>
                <p>
                    一方、<InlineMath math="\mathbf{x}_u \cdot \mathbf{x}_u = E" /> を <InlineMath math="u" /> で偏微分すると <InlineMath math="2\mathbf{x}_{uu} \cdot \mathbf{x}_u = E_u" /> より <InlineMath math="\mathbf{x}_{uu} \cdot \mathbf{x}_u = \frac{1}{2}E_u" /> となる。よって、
                    <BlockMath math="E\Gamma^1_{11} + F\Gamma^2_{11} = \frac{1}{2}E_u" />
                </p>
                <p>
                    同様に、両辺と <InlineMath math="\mathbf{x}_v" /> の内積をとることで、
                    <BlockMath math="\begin{aligned} F\Gamma^1_{11} + G\Gamma^2_{11} &= \mathbf{x}_{uu} \cdot \mathbf{x}_v \\ &= \frac{\partial}{\partial u}(\mathbf{x}_u \cdot \mathbf{x}_v) - \mathbf{x}_u \cdot \mathbf{x}_{uv} \\ &= F_u - \frac{1}{2}E_v \end{aligned}" />
                    が得られる。
                </p>
                <p>
                    これらを連立1次方程式として行列で書くと、
                    <BlockMath math="\begin{pmatrix} E & F \\ F & G \end{pmatrix} \begin{pmatrix} \Gamma^1_{11} \\ \Gamma^2_{11} \end{pmatrix} = \begin{pmatrix} \frac{1}{2}E_u \\ F_u - \frac{1}{2}E_v \end{pmatrix}" />
                    となる。正則曲面の条件より行列式は <InlineMath math="EG-F^2 > 0" /> だから逆行列が存在し、クラメルの公式を用いて解くと、
                    <BlockMath math="\begin{aligned} \Gamma^1_{11} &= \frac{G(E_u/2) - F(F_u - E_v/2)}{EG - F^2} \\ &= \frac{GE_u - 2FF_u + FE_v}{2(EG - F^2)} \end{aligned}" />
                    が導かれる。他の記号についても全く同様の手順で <InlineMath math="E, F, G" /> とその微分だけで表される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.1-1 (球面のクリストッフェル記号)"
            >
                <p>
                    球面の場合、<InlineMath math="E = 1, F = 0, G = \sin^2 u" /> である。<InlineMath math="EG - F^2 = \sin^2 u" /> となる。
                </p>
                <p>
                    偏微分は <InlineMath math="E_u = E_v = F_u = F_v = 0" />、<InlineMath math="G_u = 2\sin u \cos u" />、<InlineMath math="G_v = 0" /> である。
                    これらを公式に代入すると、非ゼロになるのは <InlineMath math="G_u" /> が関わる項のみである。
                </p>
                <p>
                    連立方程式を解くと、非ゼロの成分は以下の2つのみとなる。
                    <BlockMath math="\Gamma^1_{22} = -\frac{1}{2}G_u = -\sin u \cos u" />
                    <BlockMath math="\Gamma^2_{12} = \Gamma^2_{21} = \frac{G_u}{2G} = \frac{2\sin u \cos u}{2\sin^2 u} = \frac{\cos u}{\sin u} = \cot u" />
                </p>
                <p>
                    （その他の <InlineMath math="\Gamma^1_{11}, \Gamma^1_{12}, \Gamma^2_{11}, \Gamma^2_{22}" /> はすべて 0 となる。）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス方程式の準備</h2>

            <p className="leading-relaxed">
                クリストッフェル記号が内在的な量（第一基本形式だけで決まる量）であることがわかりました。これは、曲面上に住む2次元の生物でも計算可能な量だということを意味します。
            </p>

            <ContentBox
                type="remark"
                title="クリストッフェル記号の意味と一般化"
            >
                <p>
                    クリストッフェル記号 <InlineMath math="\Gamma^k_{ij}" /> は、曲面上で接ベクトルを平行移動させたときに、基底ベクトルがどのように「曲がって」見えるかを補正するための係数です（接続係数）。
                </p>
                <p>
                    この概念は、3次元空間に埋め込まれていない抽象的な「リーマン多様体」においても、計量（第一基本形式の一般化）から一意に定まる「レヴィ＝チヴィタ接続（Levi-Civita connection）」として一般化されます。多様体論（4-5）や一般相対性理論において、最も頻繁に計算される重要な量の一つです。
                </p>
                <p>
                    次節では、このクリストッフェル記号の微分を用いて、ついにガウス曲率が内在的な量であることを証明します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>位置ベクトルの2階偏微分の「接平面への射影成分」を書き表すための係数を、クリストッフェル記号という。</li>
                    <li>クリストッフェル記号は、一見外的な量に見えるが、実際には第一基本形式の係数 <InlineMath math="E, F, G" /> とその偏微分だけで完全に計算できる。</li>
                    <li>つまり、クリストッフェル記号は曲面の「内在的」な量である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}