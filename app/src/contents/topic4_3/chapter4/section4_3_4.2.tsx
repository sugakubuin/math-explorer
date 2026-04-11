import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LegendreRelation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、ワイエルシュトラスの <InlineMath math="\zeta" /> 関数が、格子点シフトに対して擬周期性を持つことを見ました。
                本節では、その擬周期 <InlineMath math="\eta_1, \eta_2" /> と格子の基本周期 <InlineMath math="\omega_1, \omega_2" /> の間に成り立つ、極めて重要で美しい関係式である「ルジャンドルの関係式」について解説します。
                この関係式は、複素解析的な留数定理から自然に導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジャンドルの関係式</h2>

            <p>
                まず、主定理であるルジャンドルの関係式とその証明を提示します。これは、<InlineMath math="\zeta" /> 関数を基本周期平行四辺形の境界に沿って積分することによって得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (ルジャンドルの関係式)">
                <p>
                    格子の基本周期 <InlineMath math="\omega_1, \omega_2" /> と、ワイエルシュトラスの <InlineMath math="\zeta" /> 関数の擬周期 <InlineMath math="\eta_1, \eta_2" /> の間には、次の関係式が成り立つ。
                </p>
                <BlockMath math="\eta_1\omega_2 - \eta_2\omega_1 = 2\pi i" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    適当な <InlineMath math="a \in \mathbb{C}" /> を選び、基本周期平行四辺形 <InlineMath math="\Pi_a = \{a + s\omega_1 + t\omega_2 \mid 0 \leq s, t \leq 1\}" /> の境界 <InlineMath math="\partial \Pi_a" /> に沿って <InlineMath math="\zeta(z)" /> を積分する。積分路上に格子の点がないように <InlineMath math="a" /> を選ぶとする。
                </p>
                <p>
                    <InlineMath math="\zeta(z)" /> は基本周期平行四辺形内に唯一の1位の極を <InlineMath math="z = 0" /> （モジュロ <InlineMath math="\Lambda" />）に持ち、その留数は <InlineMath math="1" /> である。したがって、留数定理より以下が成り立つ。
                </p>
                <BlockMath math="\oint_{\partial \Pi_a} \zeta(z)\,dz = 2\pi i" />
                <p>
                    一方で、境界 <InlineMath math="\partial \Pi_a" /> に沿った積分を、対向する辺ごとにまとめて計算する。
                    積分路を <InlineMath math="a \to a+\omega_1 \to a+\omega_1+\omega_2 \to a+\omega_2 \to a" /> とする。
                    対向する2組の辺に関する積分は、擬周期性 <InlineMath math="\zeta(z+\omega_i) = \zeta(z) + \eta_i" /> を用いて次のように評価できる。
                </p>
                <BlockMath math="\begin{aligned} &\int_{a}^{a+\omega_1} \zeta(z)\,dz - \int_{a+\omega_2}^{a+\omega_1+\omega_2} \zeta(z)\,dz \\ &= \int_{a}^{a+\omega_1} (\zeta(z) - \zeta(z+\omega_2))\,dz \\ &= \int_{a}^{a+\omega_1} (-\eta_2)\,dz = -\eta_2\omega_1 \end{aligned}" />
                <BlockMath math="\begin{aligned} &\int_{a+\omega_1}^{a+\omega_1+\omega_2} \zeta(z)\,dz - \int_{a}^{a+\omega_2} \zeta(z)\,dz \\ &= \int_{a}^{a+\omega_2} (\zeta(z+\omega_1) - \zeta(z))\,dz \\ &= \int_{a}^{a+\omega_2} \eta_1\,dz = \eta_1\omega_2 \end{aligned}" />
                <p>
                    これらを足し合わせると、周回積分は <InlineMath math="\eta_1\omega_2 - \eta_2\omega_1" /> となる。留数計算の結果と比較して、求める等式を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、複素積分を利用することで、周期と擬周期の間の美しい代数的な関係が引き出されます。具体的な格子において、この式がどのように機能するかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (ガウス格子の場合)">
                <p>
                    ガウス格子 <InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" /> を考える。ここでは <InlineMath math="\omega_1 = 1" />、<InlineMath math="\omega_2 = i" /> である。
                    格子の対称性から、<InlineMath math="\zeta(iz) = -i\zeta(z)" /> が成り立つことが示せる。これより擬周期についても <InlineMath math="\eta_2 = -i\eta_1" /> という関係が導かれる。
                </p>
                <p>
                    これをルジャンドルの関係式 <InlineMath math="\eta_1\omega_2 - \eta_2\omega_1 = 2\pi i" /> に代入すると、
                </p>
                <BlockMath math="\eta_1(i) - (-i\eta_1)(1) = 2i\eta_1 = 2\pi i" />
                <p>
                    となり、これから直ちに <InlineMath math="\eta_1 = \pi" />、さらに <InlineMath math="\eta_2 = -\pi i" /> が定まる。
                    このように、ルジャンドルの関係式は未知の擬周期を決定する強力な制約となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジャンドルの関係式の意味</h2>

            <p>
                ルジャンドルの関係式は、単なる恒等式にとどまらず、楕円関数論やモジュラー形式の理論において深い意味を持ちます。
            </p>

            <ContentBox type="remark" title="周期関係式の基本としてのルジャンドルの関係式">
                <p>
                    ルジャンドルの関係式は、周期と擬周期の間の超越的な関係を示しており、楕円関数論における「周期関係式」の最も基本的なものです。
                    代数幾何学の視点からは、これは楕円曲線のド・ラーム・コホモロジーにおける交叉形式を反映したものであり、高次元のアーベル多様体に対する「リーマンの周期関係式」の最も単純な例となっています。
                </p>
            </ContentBox>

            <p>
                擬周期 <InlineMath math="\eta_1, \eta_2" /> は、格子のパラメータ <InlineMath math="\omega_1, \omega_2" /> によって完全に制御されています。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (擬周期の決定)">
                <p>
                    一般の格子においても、ルジャンドルの関係式は独立した2つの擬周期 <InlineMath math="\eta_1, \eta_2" /> の間に1つの非自明な線形関係を与えている。
                    <InlineMath math="\eta_i = 2\zeta(\omega_i/2)" /> として定義されるこれらの値は、級数によって定義される超越的な量であるが、ルジャンドルの関係式によってそれらが勝手な値を取るのではなく、格子の面積（に対応する量）と <InlineMath math="2\pi i" /> によって厳密に結びついていることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ルジャンドルの関係式 <InlineMath math="\eta_1\omega_2 - \eta_2\omega_1 = 2\pi i" /> は、擬周期と基本周期を結ぶ重要な等式である。</li>
                    <li>この関係式は、基本周期平行四辺形の境界に沿った <InlineMath math="\zeta" /> 関数の留数積分から直接的に証明される。</li>
                    <li>ガウス格子などの対称性の高い格子では、この関係式を用いることで擬周期の具体的な値を完全に決定することができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
