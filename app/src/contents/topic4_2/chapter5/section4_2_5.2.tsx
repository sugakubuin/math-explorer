import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HyperbolicMetricDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、単位円板上の正則写像は「縮小または回転」になることを見ました。この性質を「距離に関する定理」として最も自然に受け入れるためには、私たちが普段使っている平らな「ユークリッド距離」を捨て、単位円板に特化した新しい距離の測り方（計量）を導入する必要があります。これこそが、非ユークリッド幾何学の一種である「双曲幾何」の世界です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアンカレ計量</h2>

            <p>
                平らな紙の上での微小な長さは <InlineMath math="ds = |dz| = \sqrt{dx^2 + dy^2}" /> で表されます。しかし、単位円板 <InlineMath math="\mathbb{D}" /> を一つの宇宙と見なし、その縁（境界）に向かうほど「一歩の距離」が無限に短く感じられるような歪んだ空間を考えます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (ポアンカレ計量)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D} = \{z \mid |z| < 1\}" /> の各点に、以下の微分形式で定義される微小な長さ（リーマン計量）を入れる。これを<b>ポアンカレ計量（Poincaré metric）</b>と呼ぶ。
                </p>
                <BlockMath math="ds = \frac{2 |dz|}{1 - |z|^2}" />
                <p>
                    （係数 <InlineMath math="2" /> は曲率を <InlineMath math="-1" /> に規格化するための便宜的なものであり、外して定義することもある。）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ポアンカレ計量の直感的意味">
                <p>
                    分母の <InlineMath math="1 - |z|^2" /> に注目してください。原点 <InlineMath math="z = 0" /> 付近では <InlineMath math="1 - |z|^2 \approx 1" /> なので、<InlineMath math="ds \approx 2|dz|" /> となり、通常の距離の2倍で測られます。
                </p>
                <p>
                    しかし、点の位置が円の縁に近づく（<InlineMath math="|z| \to 1" />）と、分母は限りなく <InlineMath math="0" /> に近づきます。つまり、<InlineMath math="ds" /> は無限に引き伸ばされます。縁の近くにいる小人にとっては、1ミリ進むのも何万キロ歩いたような途方もない距離に感じられるのです。実際、境界まではどれだけ歩いても辿り着けません。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1">
                <p>
                    原点 <InlineMath math="0" /> から、実軸上の点 <InlineMath math="r" /> （<InlineMath math="0 < r < 1" />）まで歩いたときの「双曲的な距離（長さ）」を積分で計算してみます。
                    経路として <InlineMath math="z = t" /> （<InlineMath math="t: 0 \to r" />）をとると、<InlineMath math="|dz| = dt" />、<InlineMath math="|z|^2 = t^2" /> なので
                </p>
                <BlockMath math="\text{Distance} = \int_0^r \frac{2 \,dt}{1 - t^2} = \int_0^r \left( \frac{1}{1+t} + \frac{1}{1-t} \right) dt" />
                <BlockMath math="= \left[ \log(1+t) - \log(1-t) \right]_0^r = \log \frac{1+r}{1-r}" />
                <p>
                    となります。<InlineMath math="r \to 1" /> の極限をとると、この長さは <InlineMath math="\infty" /> に発散します。数学的には有限に見える単位円板が、この計量から見れば「境界の果てが見えない無限の世界」になっていることが分かります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等長群</h2>

            <p>
                ポアンカレ計量の真価は、複素解析の基本的な武器である「メビウス変換」と驚くほど美しく調和する点にあります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.2-1 (メビウス変換の等長性)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> から <InlineMath math="\mathbb{D}" /> 自身への写像（メビウス自己同型）である
                </p>
                <BlockMath math="\varphi(z) = e^{i\theta} \frac{z - a}{1 - \bar{a}z} \quad (|a| < 1, \theta \in \mathbb{R})" />
                <p>
                    は、ポアンカレ計量における「等長変換（距離を一切変えない変換）」である。すなわち、空間がぐにゃりと曲がって見えても、内包される双曲的な距離感はそのまま保たれる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    計量が等長に保たれることを示すには、<InlineMath math="w = \varphi(z)" /> としたとき、<InlineMath math="\frac{|dw|}{1 - |w|^2} = \frac{|dz|}{1 - |z|^2}" /> が成り立つこと、すなわち
                </p>
                <BlockMath math="\frac{|\varphi'(z)|}{1 - |\varphi(z)|^2} = \frac{1}{1 - |z|^2}" />
                <p>
                    であることを直接証明すればよい。
                </p>
                <p>
                    関数の微分と絶対値の2乗の計算（実直な腕力）を行う。
                    <InlineMath math="|\varphi(z)|^2 = \left|\frac{z-a}{1-\bar{a}z}\right|^2 = \frac{(z-a)(\bar{z}-\bar{a})}{(1-\bar{a}z)(1-a\bar{z})}" /> なので、
                </p>
                <BlockMath math="\begin{aligned} &1 - |\varphi(z)|^2 \\ &= \frac{(1-a\bar{z}-\bar{a}z + |a|^2|z|^2) - (|z|^2 -a\bar{z}-\bar{a}z + |a|^2)}{|1-\bar{a}z|^2}\\ &= \frac{1 - |z|^2 - |a|^2 + |a|^2|z|^2}{|1-\bar{a}z|^2}\\ &= \frac{(1-|a|^2)(1-|z|^2)}{|1-\bar{a}z|^2} \end{aligned}" />
                <p>
                    一方、商の微分法則により、
                </p>
                <BlockMath math="\varphi'(z) = e^{i\theta} \frac{1 \cdot (1-\bar{a}z) - (z-a)(-\bar{a})}{(1-\bar{a}z)^2} = e^{i\theta} \frac{1 - |a|^2}{(1-\bar{a}z)^2}" />
                <p>
                    よって、両者の比を取ると
                </p>
                <BlockMath math="\frac{|\varphi'(z)|}{1 - |\varphi(z)|^2} = \frac{\frac{1-|a|^2}{|1-\bar{a}z|^2}}{\frac{(1-|a|^2)(1-|z|^2)}{|1-\bar{a}z|^2}} = \frac{1}{1-|z|^2}" />
                <p>
                    となり、完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title={<span>Theorem 5.2-1 (等長群 <InlineMath math="\text{Aut}(\mathbb{D})" />)</span>}>
                <p>
                    単位円板にポアンカレ計量を与えた空間（双曲平面の円板モデル）を考えたとき、距離を保つような等長変換の群の全体は、ちょうどメビウス自己同型群 <InlineMath math="\text{Aut}(\mathbb{D})" /> （およびその共役からなる反正則変換）と完全に一致する。これを行列で表現すると <b><InlineMath math="\text{PSU}(1,1)" /></b> となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    等長変換 <InlineMath math="f" /> が滑らかであるとする。ポアンカレ計量は等方的（方向によらない）であるため、<InlineMath math="f" /> は局所的に角度の大きさを保つ（すなわち等角または反正角である）。
                </p>
                <p>
                    まず、向きを保つ（等角な）等長変換について考える。等角であるため、<InlineMath math="f" /> または <InlineMath math="\bar{f}" /> のいずれかが正則関数となる。向きを保つので <InlineMath math="f" /> は <InlineMath math="\mathbb{D}" /> 上の全単射な正則関数、つまり <InlineMath math="\mathbb{D}" /> の自己同型（<InlineMath math="\in \text{Aut}(\mathbb{D})" />）である。
                </p>
                <p>
                    <InlineMath math="f(0) = a" /> とする。メビウス自己同型 <InlineMath math="\varphi_a(z) = \frac{z-a}{1-\bar{a}z}" /> は等長変換であり、これを用いて合成関数 <InlineMath math="g = \varphi_a \circ f" /> を作ると、<InlineMath math="g" /> は等長かつ <InlineMath math="g(0) = 0" /> を満たす自己同型となる。
                </p>
                <p>
                    <InlineMath math="g" /> は等長変換であるため、原点での微分係数の絶対値は <InlineMath math="|g'(0)| = 1" /> となる。シュワルツの補題の等号成立条件より、<InlineMath math="g" /> は単なる回転 <InlineMath math="g(z) = e^{i\theta}z" /> に限られる。これはメビウス変換の一種である。
                </p>
                <p>
                    したがって <InlineMath math="f(z) = \varphi_a^{-1}(e^{i\theta}z)" /> と書け、向きを保つ等長変換はすべてメビウス変換に帰着する。
                </p>
                <p>
                    一方、向きを逆転させる反正角な等長変換は、正則なメビウス変換にただ一つの複素共役 <InlineMath math="z \mapsto \bar{z}" />（これも等長変換である）を合成したものになる。
                    これにより、等長群の全体がメビウス変換とその共役で尽くされることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                円板だけでなく、上半平面にも双曲幾何を入れることができます。
            </p>

            <ContentBox type="example" title="Example 5.2-2 (上半平面モデル)">
                <p>
                    リーマンの写像定理で見たように、単位円板 <InlineMath math="\mathbb{D}" /> と上半平面 <InlineMath math="\mathbb{H}" /> は、メビウス変換を通じて全く同じ形（双正則）です。この写像を通じて計量を上半平面に持ち込むと、上半平面モデルでのポアンカレ計量は、
                </p>
                <BlockMath math="ds = \frac{|dz|}{\text{Im}(z)} = \frac{\sqrt{dx^2 + dy^2}}{y}" />
                <p>
                    という極めて美しい式になります（これは実軸 <InlineMath math="y=0" /> に近づくほど巨大になる距離です）。
                </p>
                <p>
                    そしてこの場合の等長群（合同変換群）は、実数を成分とし行列式が 1 の <InlineMath math="2\times 2" /> 行列から定まる変換群 <b><InlineMath math="\text{PSL}(2, \mathbb{R})" /></b> になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>境界に行くほど距離が発散する特殊な計量 <InlineMath math="ds = 2|dz|/(1-|z|^2)" /> を<b>ポアンカレ計量</b>と呼ぶ。</li>
                    <li>単位円板のメビウス自己同型 <InlineMath math="\varphi(z) = e^{i\theta}(z-a)/(1-\bar{a}z)" /> は、この空間の距離を一切変化させない等長変換である。</li>
                    <li>上半平面においては計量は <InlineMath math="ds = |dz|/\text{Im}(z)" /> となり、等長群は <InlineMath math="\text{PSL}(2, \mathbb{R})" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
