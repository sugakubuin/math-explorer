import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuasilinearPDEAndShockWaves() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは特性曲線の速度が場所と時間のみに依存する線形 PDE を扱ってきましたが、
                しかし、波の伝播速度が解そのものの大きさに依存する場合、さらに劇的な現象が現れます。
                それが「衝撃波」の発生です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準線形 PDE と特性曲線の交差</h2>

            <p className="leading-relaxed">
                解そのものが波を運ぶ速度を決定する「準線形」な状況を考えましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (準線形 PDE の特性曲線)">
                <p>
                    準線形 PDE <InlineMath math="u_t + a(x, t, u) u_x = c(x, t, u)" /> に対して、
                    特性曲線 <InlineMath math="x = x(t)" /> は以下の ODE で定義される：
                    <BlockMath math="\frac{dx}{dt} = a(x, t, u(x, t))" />
                    特性曲線の勾配が<b>解 <InlineMath math="u" /> の値に依存する</b>ことが、線形 PDE との決定的な違いである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この依存性が、解の連続性を破壊する原因となります。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (不加粘バーガーズ方程式)">
                <p>
                    流体力学の基本形であるバーガーズ方程式 <InlineMath math="u_t + u u_x = 0" /> を考える。
                    この場合の特性方程式は <InlineMath math="\frac{dx}{dt} = u" /> である。
                    解が大きい点ほど速く前方へ進むため、後ろの大きな高い波が前の小さな低い波に追い付き、波の形が急峻になっていく。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                特性曲線が交差すると、物理的な「衝撃」が生まれます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (特性曲線の交差と衝撃波の発生)">
                <p>
                    バーガーズ方程式において、初期条件 <InlineMath math="f(x)" /> が減少する部分（<InlineMath math="f'(x) < 0" />）を持つとき、
                    有限時間 <InlineMath math="T_c = -1 / \min f'(x)" /> において異なる特性曲線が交差し、解は多値的（物理的には不連続）となる。
                    この不連続面を<b>衝撃波</b>（shock wave）と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">跳躍条件と衝撃波の伝播</h2>

            <p className="leading-relaxed">
                一度衝撃波が発生すると、微分方程式としての形式は意味をなさなくなります。
                そこで、積分形式の保存則に基づいて、不連続面の移動速度を規定しましょう。
            </p>

            <ContentBox type="definition" title="Definition 4.3-2 (不連続解と跳躍)">
                <p>
                    衝撃波の境界を <InlineMath math="x = s(t)" /> とし、その左右の極限値を <InlineMath math="u_L, u_R" /> と定義する。
                    このとき、物理量の差 <InlineMath math="[u] = u_R - u_L" /> を<b>跳躍</b>（jump）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.3-2 (Rankine-Hugoniot 条件)">
                <p>
                    保存則形式 <InlineMath math="u_t + F(u)_x = 0" /> を満たす系において、衝撃波の伝播速度 <InlineMath math="s = \dot{x}_s" /> は、
                    左右のフラックスの跳躍を用いて以下のように表される：
                    <BlockMath math="s = \frac{[F(u)]}{[u]} = \frac{F(u_R) - F(u_L)}{u_R - u_L}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    不連続点 <InlineMath math="x_s(t)" /> を含む区間 <InlineMath math="[x_1, x_2]" /> での積分形保存則から出発する。
                    <BlockMath math="\frac{d}{dt} \int_{x_1}^{x_2} u(x, t) dx = F(u(x_1, t)) - F(u(x_2, t))" />
                    積分の時間微分を、不連続点 <InlineMath math="x_s" /> で分けて Leibniz の法則を適用すると：
                    <BlockMath math="\begin{aligned} \frac{d}{dt} &\left( \int_{x_1}^{x_s} u dx + \int_{x_s}^{x_2} u dx \right) \\ &= \int_{x_1}^{x_s} u_t dx + \int_{x_s}^{x_2} u_t dx + u(x_s^-, t) \dot{x}_s - u(x_s^+, t) \dot{x}_s \end{aligned}" />
                    ここで <InlineMath math="x_1 \to x_s^-, x_2 \to x_s^+" /> の極限を取ると、積分項は 0 に収束し、
                    <BlockMath math="0 = (u_L - u_R)s + F(u_L) - F(u_R)" />
                    が残る。これを整理すると、
                    <BlockMath math="s(u_R - u_L) = F(u_R) - F(u_L) \implies s = \frac{[F(u)]}{[u]}" />
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                バーガーズ方程式の場合、物理的な直感と一致する結果が得られます。
            </p>

            <ContentBox type="example" title="Example 4.3-2 (バーガーズ方程式の衝撃波速度)">
                <p>
                    バーガーズ方程式 <InlineMath math="u_t + (\frac{1}{2}u^2)_x = 0" /> において、フラックスは <InlineMath math="F(u) = \frac{1}{2}u^2" /> である。
                    跳躍条件より、衝撃波の速度は：
                    <BlockMath math="s = \frac{\frac{1}{2}u_R^2 - \frac{1}{2}u_L^2}{u_R - u_L} = \frac{u_L + u_R}{2}" />
                    となる。これは、衝撃波が両側の状態の<b>平均速度</b>で伝播することを意味している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="物理的適用範囲：交通流">
                <p>
                    この理論は流体力学だけでなく、交通流の渋滞（jam）の解析にも応用されます。
                    先行車が急ブレーキを踏むと（<InlineMath math="x_s" /> の発生）、後続車との間で密度の跳躍が生じ、その「渋滞の波」が実際の車の進行方向とは逆方向に伝わることが、R-H 条件によって数学的に記述できます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>準線形 PDE</b> では、特性曲線の速度が解の値自体に依存するため、特性曲線の交差が起こり得る。</li>
                    <li>特性曲線の交差は、数学的には解の不連続性（<b>衝撃波</b>）として現れる。</li>
                    <li>積分形保存則から導かれる <b>Rankine-Hugoniot 条件</b> により、不連続面の移動速度が決定される。</li>
                    <li>この理論は、超音速機のソニックブームや道路交通渋滞の伝播など、多岐にわたる物理現象を記述する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
