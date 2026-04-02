import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ShapeOperatorAndPrincipalCurvatures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面がどのように曲がっているかを調べるには、「法ベクトルがどのように傾いていくか」を見るのが自然です。この法ベクトルの変化率を表す線形写像を「形状作用素」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">形状作用素の定義</h2>

            <p className="leading-relaxed">
                法ベクトル <InlineMath math="\mathbf{N}" /> は長さ 1 のベクトルなので、その微分 <InlineMath math="d\mathbf{N}" /> は <InlineMath math="\mathbf{N}" /> 自身に直交します。つまり、<InlineMath math="d\mathbf{N}" /> は接平面 <InlineMath math="T_p S" /> の中に収まるベクトルになります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.2-1 (形状作用素 / ワインガルテン写像)"
            >
                <p>
                    接平面 <InlineMath math="T_p S" /> から接平面 <InlineMath math="T_p S" /> 自身への線形写像 <InlineMath math="S_p : T_p S \to T_p S" /> を、単位法ベクトル <InlineMath math="\mathbf{N}" /> の微分の符号を反転させたものとして定義する。
                    <BlockMath math="S_p(v) = -d\mathbf{N}_p(v)" />
                </p>
                <p>
                    これを<strong>形状作用素（shape operator）</strong>またはワインガルテン写像（Weingarten map）という。
                    基底ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> に対する作用は、単に偏微分の符号反転である。
                    <BlockMath math="S_p(\mathbf{x}_u) = -\mathbf{N}_u, \quad S_p(\mathbf{x}_v) = -\mathbf{N}_v" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                なぜマイナスをつけるかというと、球面のように「手前に丸く膨らんでいる」自然な曲面の場合に、曲率が「正」の値として出てくるように調整するためです。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.2-1 (形状作用素は自己共役)"
            >
                <p>
                    形状作用素 <InlineMath math="-d\mathbf{N}" /> は、第一基本形式（接平面上の内積）に関して<strong>自己共役（self-adjoint）</strong>な線形写像である。すなわち、任意の接ベクトル <InlineMath math="v, w \in T_p S" /> に対して次が成り立つ。
                    <BlockMath math="\langle -d\mathbf{N}(v), w \rangle = \langle v, -d\mathbf{N}(w) \rangle" />
                </p>
                <p>
                    これは、偏微分の順序交換の可能性（<InlineMath math="\mathbf{x}_{uv} = \mathbf{x}_{vu}" />）に由来する第二基本形式の対称性から従う。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    線形性より、基底ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> について等式が成り立つことを示せば十分である。
                </p>
                <p>
                    前節の Proposition 4.1-1 で導いた第二基本形式の係数の公式を用いる。
                    <BlockMath math="\langle -d\mathbf{N}(\mathbf{x}_u), \mathbf{x}_v \rangle = \langle -\mathbf{N}_u, \mathbf{x}_v \rangle = -\mathbf{N}_u \cdot \mathbf{x}_v = f" />
                    <BlockMath math="\langle \mathbf{x}_u, -d\mathbf{N}(\mathbf{x}_v) \rangle = \langle \mathbf{x}_u, -\mathbf{N}_v \rangle = -\mathbf{x}_u \cdot \mathbf{N}_v = f" />
                </p>
                <p>
                    両辺ともに同じ値 <InlineMath math="f" />（<InlineMath math="= \mathbf{x}_{uv} \cdot \mathbf{N} = \mathbf{x}_{vu} \cdot \mathbf{N}" />）になるため、自己共役であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.2-1 (球面の形状作用素)"
            >
                <p>
                    半径 <InlineMath math="r" /> の球面 <InlineMath math="S^2(r)" /> の場合、内向き単位法ベクトルは位置ベクトルを用いて <InlineMath math="\mathbf{N} = -\frac{1}{r}\mathbf{x}" /> と書ける。
                </p>
                <p>
                    これを偏微分すると、<InlineMath math="\mathbf{N}_u = -\frac{1}{r}\mathbf{x}_u" />、<InlineMath math="\mathbf{N}_v = -\frac{1}{r}\mathbf{x}_v" /> となる。したがって形状作用素の作用は、
                    <BlockMath math="-d\mathbf{N}(\mathbf{x}_u) = -\left(-\frac{1}{r}\mathbf{x}_u\right) = \frac{1}{r}\mathbf{x}_u" />
                    <BlockMath math="-d\mathbf{N}(\mathbf{x}_v) = -\left(-\frac{1}{r}\mathbf{x}_v\right) = \frac{1}{r}\mathbf{x}_v" />
                </p>
                <p>
                    つまり、接平面のどの方向のベクトルを入力しても、出力はその <InlineMath math="1/r" /> 倍のベクトルになる。形状作用素は単なる「<InlineMath math="1/r" /> 倍の恒等写像（スカラー行列）」である。このような、すべての方向で曲がり具合が等しい点を<strong>臍点（umbilic point）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">主曲率と主方向</h2>

            <p className="leading-relaxed">
                線形代数で学んだように、実対称行列（自己共役作用素）は必ず実数の固有値を持ち、その固有ベクトルは互いに直交します。この性質を形状作用素に適用します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.2-2 (主曲率と主方向)"
            >
                <p>
                    形状作用素 <InlineMath math="-d\mathbf{N}_p" /> の2つの実数固有値を <InlineMath math="\kappa_1, \kappa_2" />（<InlineMath math="\kappa_1 \leq \kappa_2" />）とし、これらをその点における<strong>主曲率（principal curvatures）</strong>という。
                </p>
                <p>
                    また、各固有値に対応する固有ベクトル（接ベクトル）の方向を<strong>主方向（principal directions）</strong>という。自己共役性から、<InlineMath math="\kappa_1 \neq \kappa_2" /> のとき、2つの主方向は互いに直交する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                主曲率は、第一基本形式と第二基本形式の係数を用いて、具体的に固有方程式を解くことで計算できます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.2-1 (主曲率の計算)"
            >
                <p>
                    主曲率 <InlineMath math="\kappa_1, \kappa_2" /> は、次の <InlineMath math="\kappa" /> に関する2次方程式（固有方程式）の2つの根として求められる。
                    <BlockMath math="\det \begin{pmatrix} e - \kappa E & f - \kappa F \\ f - \kappa F & g - \kappa G \end{pmatrix} = 0" />
                </p>
                <p>
                    根と係数の関係より、主曲率の和と積は次のようになる。
                    <BlockMath math="\kappa_1 + \kappa_2 = \frac{eG - 2fF + gE}{EG - F^2}" />
                    <BlockMath math="\kappa_1 \kappa_2 = \frac{eg - f^2}{EG - F^2}" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    形状作用素の表現行列を求める。関係式 <InlineMath math="-d\mathbf{N}(\mathbf{x}_u) = -\mathbf{N}_u" /> などを、基底 <InlineMath math="\{\mathbf{x}_u, \mathbf{x}_v\}" /> の線形結合で表したときの係数行列を <InlineMath math="A" /> とすると、ワインガルテンの公式と呼ばれる行列方程式が得られる（詳細は割愛するが、内積の行列表現を用いる）。
                    結果として、形状作用素の行列 <InlineMath math="A" /> は、第一基本形式の行列 <InlineMath math="\mathcal{I}" /> と第二基本形式の行列 <InlineMath math="\mathcal{I\!I}" /> を用いて <InlineMath math="A = \mathcal{I}^{-1} \mathcal{I\!I}" /> と書ける。
                </p>
                <p>
                    固有方程式は <InlineMath math="\det(A - \kappa I) = 0" /> である。両辺に <InlineMath math="\det(\mathcal{I})" /> を掛けると、
                    <BlockMath math="\det(\mathcal{I}) \det(\mathcal{I}^{-1} \mathcal{I\!I} - \kappa I) = \det(\mathcal{I\!I} - \kappa \mathcal{I}) = 0" />
                    となる。行列の中身を書き下すと、定理の行列式が得られる。
                </p>
                <p>
                    行列式を展開すると、
                    <BlockMath math="(e - \kappa E)(g - \kappa G) - (f - \kappa F)^2 = 0" />
                    <BlockMath math="(EG - F^2)\kappa^2 - (eG + gE - 2fF)\kappa + (eg - f^2) = 0" />
                    となる。2次方程式の根と係数の関係から、直ちに定理の和と積の公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.2-2 (円柱の主曲率)"
            >
                <p>
                    半径 1 の円柱面 <InlineMath math="\mathbf{x}(u,v) = (\cos u, \sin u, v)" /> について考える。
                    第一基本形式の係数は <InlineMath math="E=1, F=0, G=1" /> であった。
                </p>
                <p>
                    第二基本形式の係数を求める。<InlineMath math="\mathbf{x}_u = (-\sin u, \cos u, 0)" />、<InlineMath math="\mathbf{x}_v = (0, 0, 1)" />。
                    外積を計算すると <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v = (\cos u, \sin u, 0)" />。ノルムは 1 なので、法ベクトルは <InlineMath math="\mathbf{N} = (\cos u, \sin u, 0)" />。
                </p>
                <p>
                    2階微分は <InlineMath math="\mathbf{x}_{uu} = (-\cos u, -\sin u, 0)" />、<InlineMath math="\mathbf{x}_{uv} = (0,0,0)" />、<InlineMath math="\mathbf{x}_{vv} = (0,0,0)" />。<br />
                    内積をとると、<InlineMath math="e = \mathbf{x}_{uu} \cdot \mathbf{N} = -1" />、<InlineMath math="f = 0" />、<InlineMath math="g = 0" />。
                    （注：ここでは法ベクトルが外向きになったため <InlineMath math="e=-1" /> となった。内向きに法線をとれば <InlineMath math="e=1" /> となる。ここでは曲率の絶対値に注目する。）
                </p>
                <p>
                    固有方程式を立てると、<InlineMath math="E=1, F=0, G=1" /> より、
                    <BlockMath math="\det \begin{pmatrix} -1 - \kappa & 0 \\ 0 & 0 - \kappa \end{pmatrix} = (-1-\kappa)(-\kappa) = 0" />
                    となる。したがって、固有値（主曲率）は <InlineMath math="\kappa_1 = -1" />（または 1）と <InlineMath math="\kappa_2 = 0" /> である。
                </p>
                <p>
                    これは、円柱が「周方向には半径 1 の円として曲がっているが、高さ方向（軸方向）には直線であり全く曲がっていない」という事実を正確に表している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>法ベクトルの微分の符号を反転させた自己共役な線形写像を形状作用素と呼ぶ。</li>
                    <li>形状作用素の2つの固有値を主曲率といい、対応する固有ベクトル方向（主方向）は互いに直交する。</li>
                    <li>主曲率は第一・第二基本形式の係数からなる固有方程式を解くことで計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}