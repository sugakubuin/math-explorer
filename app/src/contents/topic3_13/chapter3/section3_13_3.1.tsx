import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionOfFirstFundamentalForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面上での「長さ」や「面積」、そして曲線同士の「角度」を測るための基本的な道具が「第一基本形式」です。これは、後のリーマン計量の原型となる極めて重要な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">第一基本形式の定義と係数</h2>

            <p className="leading-relaxed">
                曲面上の微小な変位ベクトルの長さを、パラメータ <InlineMath math="u, v" /> の微小変化 <InlineMath math="du, dv" /> を用いて表すことを考えます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.1-1 (第一基本形式)"
            >
                <p>
                    正則曲面 <InlineMath math="S" /> のパラメータ表示 <InlineMath math="\mathbf{x}(u,v)" /> に対して、点 <InlineMath math="p" /> における接ベクトル <InlineMath math="d\mathbf{x} = \mathbf{x}_u \,du + \mathbf{x}_v \,dv" /> の長さの2乗（内積）を考える。
                    <BlockMath math="|d\mathbf{x}|^2 = d\mathbf{x} \cdot d\mathbf{x} = (\mathbf{x}_u \,du + \mathbf{x}_v \,dv) \cdot (\mathbf{x}_u \,du + \mathbf{x}_v \,dv)" />
                </p>
                <p>
                    これを展開して得られる2次形式 <InlineMath math="I" /> を<strong>第一基本形式（first fundamental form）</strong>と呼ぶ。
                    <BlockMath math="I = E\,du^2 + 2F\,du\,dv + G\,dv^2" />
                </p>
                <p>
                    ここで、係数 <InlineMath math="E, F, G" /> は偏微分ベクトルの内積として次のように定義される。
                    <BlockMath math="E = \mathbf{x}_u \cdot \mathbf{x}_u = |\mathbf{x}_u|^2" />
                    <BlockMath math="F = \mathbf{x}_u \cdot \mathbf{x}_v" />
                    <BlockMath math="G = \mathbf{x}_v \cdot \mathbf{x}_v = |\mathbf{x}_v|^2" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な曲面について、第一基本形式の係数を計算してみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 3.1-1 (平面の第一基本形式)"
            >
                <p>
                    <InlineMath math="xy" /> 平面を自然なパラメータ <InlineMath math="\mathbf{x}(u,v) = (u, v, 0)" /> で表す。
                </p>
                <p>
                    偏微分ベクトルは <InlineMath math="\mathbf{x}_u = (1, 0, 0)" />、<InlineMath math="\mathbf{x}_v = (0, 1, 0)" /> となる。これらから係数を計算すると、
                    <BlockMath math="E = 1 \cdot 1 + 0 + 0 = 1" />
                    <BlockMath math="F = 1 \cdot 0 + 0 \cdot 1 + 0 \cdot 0 = 0" />
                    <BlockMath math="G = 0 + 1 \cdot 1 + 0 = 1" />
                    となる。
                </p>
                <p>
                    したがって、平面の第一基本形式は
                    <BlockMath math="I = 1\,du^2 + 2(0)\,du\,dv + 1\,dv^2 = du^2 + dv^2" />
                    となり、これはユークリッド計量（三平方の定理における微小距離の式 <InlineMath math="ds^2 = dx^2 + dy^2" />）そのものである。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-2 (球面の第一基本形式)"
            >
                <p>
                    半径 1 の球面 <InlineMath math="\mathbf{x}(u,v) = (\sin u\cos v, \sin u\sin v, \cos u)" /> を考える。
                    偏微分ベクトルは
                    <BlockMath math="\mathbf{x}_u = (\cos u\cos v, \cos u\sin v, -\sin u)" />
                    <BlockMath math="\mathbf{x}_v = (-\sin u\sin v, \sin u\cos v, 0)" />
                    であった。
                </p>
                <p>
                    係数を計算すると、
                    <BlockMath math="\begin{aligned} E &= \cos^2 u \cos^2 v + \cos^2 u \sin^2 v + \sin^2 u \\ &= \cos^2 u + \sin^2 u = 1 \end{aligned}" />
                    <BlockMath math="\begin{aligned} F &= -\cos u \sin u \cos v \sin v \\ &\quad + \cos u \sin u \sin v \cos v + 0 = 0 \end{aligned}" />
                    <BlockMath math="G = \sin^2 u \sin^2 v + \sin^2 u \cos^2 v + 0 = \sin^2 u" />
                    となる。
                </p>
                <p>
                    よって、球面の第一基本形式は
                    <BlockMath math="I = du^2 + \sin^2 u \,dv^2" />
                    と表される。これは、緯線（<InlineMath math="u" /> が一定）に沿って経度 <InlineMath math="v" /> を動かしたときの微小距離が <InlineMath math="\sin u\,dv" /> になることを反映している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">第一基本形式のパラメータ不変性</h2>

            <p className="leading-relaxed">
                接平面がパラメータの取り方によらなかったように、第一基本形式が測る「長さ」もまた、座標変換に対して不変です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 3.1-1 (第一基本形式はパラメータ変換で不変)"
            >
                <p>
                    許容パラメータ変換 <InlineMath math="(u,v) = \varphi(\bar{u},\bar{v})" /> のもとで、新しいパラメータにおける第一基本形式の係数を <InlineMath math="\bar{E}, \bar{F}, \bar{G}" /> とすると、次の等式が成り立つ。
                    <BlockMath math="E\,du^2 + 2F\,du\,dv + G\,dv^2 = \bar{E}\,d\bar{u}^2 + 2\bar{F}\,d\bar{u}\,d\bar{v} + \bar{G}\,d\bar{v}^2" />
                </p>
                <p>
                    すなわち、第一基本形式は同じ2次形式を異なる座標基底で表現したものに過ぎず、その実体（幾何学的な長さの測定ルール）はパラメータに依存しない。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    多変数の微分の連鎖律より、全微分 <InlineMath math="du" /> と <InlineMath math="dv" /> は <InlineMath math="d\bar{u}" /> と <InlineMath math="d\bar{v}" /> を用いて次のように書ける。
                    <BlockMath math="du = \frac{\partial u}{\partial \bar{u}} d\bar{u} + \frac{\partial u}{\partial \bar{v}} d\bar{v}" />
                    <BlockMath math="dv = \frac{\partial v}{\partial \bar{u}} d\bar{u} + \frac{\partial v}{\partial \bar{v}} d\bar{v}" />
                </p>
                <p>
                    また、接ベクトル <InlineMath math="d\mathbf{x}" /> はパラメータの取り方によらず同一のベクトルを表す。
                    <BlockMath math="\mathbf{x}_u \,du + \mathbf{x}_v \,dv = \bar{\mathbf{x}}_{\bar{u}} \,d\bar{u} + \bar{\mathbf{x}}_{\bar{v}} \,d\bar{v}" />
                </p>
                <p>
                    第一基本形式はこの接ベクトル自身との内積であるから、
                    <BlockMath math="\begin{aligned} I &= |d\mathbf{x}|^2 = (\mathbf{x}_u \,du + \mathbf{x}_v \,dv) \cdot (\mathbf{x}_u \,du + \mathbf{x}_v \,dv) \\ &= (\bar{\mathbf{x}}_{\bar{u}} \,d\bar{u} + \bar{\mathbf{x}}_{\bar{v}} \,d\bar{v}) \cdot (\bar{\mathbf{x}}_{\bar{u}} \,d\bar{u} + \bar{\mathbf{x}}_{\bar{v}} \,d\bar{v}) \end{aligned}" />
                    となる。右辺を展開すれば <InlineMath math="\bar{E}\,d\bar{u}^2 + 2\bar{F}\,d\bar{u}\,d\bar{v} + \bar{G}\,d\bar{v}^2" /> となり、等式が成立することがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.1-3 (円柱の第一基本形式)"
            >
                <p>
                    半径 1 の円柱面を <InlineMath math="\mathbf{x}(u,v) = (\cos u, \sin u, v)" /> とパラメータ表示する。
                </p>
                <p>
                    偏微分ベクトルは <InlineMath math="\mathbf{x}_u = (-\sin u, \cos u, 0)" />、<InlineMath math="\mathbf{x}_v = (0, 0, 1)" /> である。
                    係数を計算すると、
                    <BlockMath math="E = (-\sin u)^2 + (\cos u)^2 = 1" />
                    <BlockMath math="F = 0 + 0 + 0 = 0" />
                    <BlockMath math="G = 0 + 0 + 1^2 = 1" />
                    となる。
                </p>
                <p>
                    したがって、円柱の第一基本形式は <InlineMath math="I = du^2 + dv^2" /> となり、<strong>平面の第一基本形式と全く同じ形</strong>をしていることがわかる。これは、円柱が（伸縮なしに）切り開いて平面に「展開」できることの数学的な証拠である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>第一基本形式 <InlineMath math="I = E\,du^2 + 2F\,du\,dv + G\,dv^2" /> は、曲面上の微小な長さの2乗を与える2次形式である。</li>
                    <li>係数 <InlineMath math="E, F, G" /> は、曲面のパラメータ表示の偏微分ベクトルの内積 <InlineMath math="\mathbf{x}_u \cdot \mathbf{x}_u" /> 等から計算できる。</li>
                    <li>第一基本形式が定める測定ルールはパラメータの取り方に依存しない（不変性）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}