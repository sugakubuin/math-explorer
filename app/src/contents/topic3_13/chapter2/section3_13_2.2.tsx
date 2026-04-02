import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TangentPlaneAndNormalVector() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                正則曲面の各点では、2つの独立した偏微分ベクトルによって「接平面」が定まります。接平面は、曲面を局所的に線形近似した最も重要な幾何学的対象です。この章では、接平面とその平面に垂直な「法ベクトル」を厳密に定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">接平面と法ベクトル</h2>

            <p className="leading-relaxed">
                曲面上の点における接ベクトルの全体がなす2次元のベクトル空間を接平面として定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-1 (接平面)"
            >
                <p>
                    正則曲面 <InlineMath math="S" /> のパラメータ表示 <InlineMath math="\mathbf{x}(u,v)" /> による点 <InlineMath math="p = \mathbf{x}(u_0, v_0)" /> における<strong>接平面（tangent plane）</strong> <InlineMath math="T_p S" /> とは、その点における2つの偏微分ベクトル <InlineMath math="\mathbf{x}_u(u_0,v_0)" /> と <InlineMath math="\mathbf{x}_v(u_0,v_0)" /> によって張られる、<InlineMath math="\mathbb{R}^3" /> の2次元部分空間（原点を通る平面）のことである。
                </p>
                <p>
                    幾何学的には、<InlineMath math="T_p S" /> は「曲面 <InlineMath math="S" /> 上にあり、点 <InlineMath math="p" /> を通るすべての曲線の、<InlineMath math="p" /> における接ベクトル全体」の集合に一致する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                接平面が定まれば、それに直交する方向（曲面から垂直に立ち上がる方向）も一意に（符号を除いて）定まります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-2 (単位法ベクトル)"
            >
                <p>
                    点 <InlineMath math="p = \mathbf{x}(u_0, v_0)" /> において、接平面 <InlineMath math="T_p S" /> に直交し、長さが 1 のベクトルを<strong>単位法ベクトル（unit normal vector）</strong>といい、<InlineMath math="\mathbf{N}(p)" /> で表す。
                </p>
                <p>
                    外積を用いて、具体的に次のように計算できる。
                    <BlockMath math="\mathbf{N}(p) = \frac{\mathbf{x}_u \times \mathbf{x}_v}{|\mathbf{x}_u \times \mathbf{x}_v|}" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                定義から直接、接平面と法ベクトルの関係が導かれます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.2-1 (接平面の記述)"
            >
                <p>
                    点 <InlineMath math="p" /> における接平面 <InlineMath math="T_p S" /> の任意のベクトル <InlineMath math="w" /> は、実数 <InlineMath math="a, b" /> を用いて
                    <BlockMath math="w = a\mathbf{x}_u + b\mathbf{x}_v" />
                    の形に一意に表される。
                </p>
                <p>
                    また、接平面 <InlineMath math="T_p S" /> は単位法ベクトル <InlineMath math="\mathbf{N}(p)" /> に直交するベクトルの全体からなる平面と一致する。すなわち、
                    <BlockMath math="w \in T_p S \iff w \cdot \mathbf{N}(p) = 0" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    正則性の条件 <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v \neq \mathbf{0}" /> より、<InlineMath math="\mathbf{x}_u" /> と <InlineMath math="\mathbf{x}_v" /> は線形独立である。したがって、これらが張る空間は2次元のベクトル空間となり、任意の元はその線形結合 <InlineMath math="a\mathbf{x}_u + b\mathbf{x}_v" /> で一意に書ける。
                </p>
                <p>
                    単位法ベクトル <InlineMath math="\mathbf{N}" /> は <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v" /> と平行であるから、外積の性質より <InlineMath math="\mathbf{x}_u" /> および <InlineMath math="\mathbf{x}_v" /> の両方に直交する（<InlineMath math="\mathbf{x}_u \cdot \mathbf{N} = 0" />, <InlineMath math="\mathbf{x}_v \cdot \mathbf{N} = 0" />）。
                </p>
                <p>
                    よって、任意の <InlineMath math="w = a\mathbf{x}_u + b\mathbf{x}_v \in T_p S" /> に対して
                    <BlockMath math="w \cdot \mathbf{N} = (a\mathbf{x}_u + b\mathbf{x}_v) \cdot \mathbf{N} = a(\mathbf{x}_u \cdot \mathbf{N}) + b(\mathbf{x}_v \cdot \mathbf{N}) = 0" />
                    となる。<InlineMath math="\mathbb{R}^3" /> において1つの非零ベクトルに直交する空間は2次元であるため、<InlineMath math="T_p S" /> と完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.2-1 (球面の接平面と法ベクトル)"
            >
                <p>
                    Example 2.1-1 で扱った半径 1 の球面上の点 <InlineMath math="p = \mathbf{x}(u_0, v_0)" /> について考える。
                    外積は <InlineMath math="\mathbf{x}_u \times \mathbf{x}_v = (-\sin^2 u \cos v, -\sin^2 u \sin v, -\sin u \cos u)" /> であり、そのノルムは <InlineMath math="\sin u" /> （<InlineMath math="u \in (0, \pi)" /> において）であった。
                </p>
                <p>
                    これをノルムで割って単位法ベクトルを求めると、
                    <BlockMath math="\begin{aligned} \mathbf{N}(p) &= \frac{1}{\sin u} (-\sin^2 u \cos v, -\sin^2 u \sin v, -\sin u \cos u) \\ &= (-\sin u \cos v, -\sin u \sin v, -\cos u) \end{aligned}" />
                    となる。
                </p>
                <p>
                    元の位置ベクトル <InlineMath math="p = (\sin u \cos v, \sin u \sin v, \cos u)" /> と比較すると、<InlineMath math="\mathbf{N}(p) = -p" /> であることがわかる。これは、<strong>原点を中心とする球面の単位法ベクトルが、常に原点方向（内向き）を向いている</strong>という直感的な事実と一致している。接平面はこの位置ベクトル <InlineMath math="p" /> に直交する平面となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">向きと法ベクトルの一致</h2>

            <p className="leading-relaxed">
                曲面の各点で単位法ベクトル <InlineMath math="\mathbf{N}" /> は「表」か「裏」かの2つの向きを選べます。この向きを曲面全体で矛盾なく（滑らかに）選べるかどうかは、曲面の位相的な性質に関わります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-3 (向き付け可能曲面)"
            >
                <p>
                    曲面 <InlineMath math="S" /> が<strong>向き付け可能（orientable）</strong>であるとは、<InlineMath math="S" /> 上のすべての点で定義された、連続な単位法ベクトル場 <InlineMath math="\mathbf{N}(p)" /> が存在することをいう。
                </p>
                <p>
                    このような <InlineMath math="\mathbf{N}" /> を一つ選んで固定することを「曲面に向きを与える」といい、向きが与えられた曲面を<strong>有向曲面（oriented surface）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="パラメータ変換と法ベクトルの向き"
            >
                <p>
                    球面やトーラスのように「内側」と「外側」が明確に分かれている曲面は向き付け可能です。一方、メビウスの帯やクラインの壺のように、表面をたどっていくといつの間にか裏面に出てしまうような曲面は、連続な法ベクトル場を作ることができないため「向き付け不可能」となります。
                </p>
                <p>
                    法ベクトル <InlineMath math="\mathbf{N} = (\mathbf{x}_u \times \mathbf{x}_v)/|\dots|" /> の向きは、パラメータ <InlineMath math="(u,v)" /> の「並び順」に依存しています。もし <InlineMath math="u" /> と <InlineMath math="v" /> の役割を入れ替えると、外積の性質（<InlineMath math="\mathbf{x}_v \times \mathbf{x}_u = - \mathbf{x}_u \times \mathbf{x}_v" />）から、法ベクトルは完全に逆を向きます。
                </p>
                <p>
                    次節で扱うパラメータ変換において、変換のヤコビアン（行列式）が正であればこの向きは保たれ、負であれば向きが反転します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>接平面 <InlineMath math="T_p S" /> は、曲面上の点 <InlineMath math="p" /> における偏微分ベクトル <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> によって張られる2次元部分空間である。</li>
                    <li>接平面に直交する長さ 1 のベクトルを単位法ベクトル <InlineMath math="\mathbf{N}" /> という。</li>
                    <li>曲面全体で連続的な単位法ベクトルを矛盾なく選べる曲面を、向き付け可能な曲面という。</li>
                </ul>
            </ContentBox>
        </section>
    );
}