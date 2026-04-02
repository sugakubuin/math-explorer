import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GlobalGaussBonnetTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                微分幾何学Iの到達点が、この大域版ガウス＝ボンネの定理です。この定理は、微分幾何学（曲面の曲がり方）と位相幾何学（図形の穴の数）という、全く異なる分野を見事に結びつける数学史上の傑作です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">大域版ガウス＝ボンネの定理</h2>

            <p className="leading-relaxed">
                曲面全体にわたってガウス曲率を積分すると、その値は曲面の「曲がり方」には一切依存せず、「穴の数」だけで完全に決まってしまいます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.3-1 (大域版ガウス＝ボンネの定理)"
            >
                <p>
                    <InlineMath math="S" /> をコンパクト（有界かつ閉）で境界を持たない、向き付け可能な正則曲面（閉曲面）とする。
                    このとき、曲面全体にわたるガウス曲率 <InlineMath math="K" /> の面積分（全曲率）は、曲面の<strong>オイラー標数（Euler characteristic）</strong> <InlineMath math="\chi(S)" /> の <InlineMath math="2\pi" /> 倍に等しい。
                    <BlockMath math="\iint_S K \,dA = 2\pi \chi(S)" />
                </p>
                <p>
                    穴の数（種数）が <InlineMath math="g" /> の曲面 <InlineMath math="\Sigma_g" /> の場合、オイラー標数は <InlineMath math="\chi(\Sigma_g) = 2 - 2g" /> で与えられる。
                    例えば球面は <InlineMath math="g=0" /> で <InlineMath math="\chi=2" />、トーラス（ドーナツ）は <InlineMath math="g=1" /> で <InlineMath math="\chi=0" /> である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    曲面 <InlineMath math="S" /> を、十分小さな測地三角形の集まりに分割する（三角測地分割）。三角形の頂点の総数を <InlineMath math="V" />、辺の総数を <InlineMath math="E" />、面の総数を <InlineMath math="F" /> とする。
                </p>
                <p>
                    各三角形（面 <InlineMath math="\Delta_k" />、<InlineMath math="k=1, \dots, F" />）に対して、局所版ガウス＝ボンネの定理（Theorem 7.2-1）を適用し、それらをすべて足し合わせる。
                    <BlockMath math="\begin{aligned} \sum_{k=1}^F \left( \int_{\partial \Delta_k} \kappa_g \,ds + \iint_{\Delta_k} K \,dA + \sum \theta_{k,i} \right) &= \sum_{k=1}^F 2\pi \\ &= 2\pi F \end{aligned}" />
                </p>
                <p>
                    この和を項ごとに評価する。<br />
                    1. <strong>測地曲率の積分：</strong> 隣り合う2つの三角形が共有する辺では、積分方向が逆になるため <InlineMath math="\kappa_g" /> の積分は互いに相殺し合い、全体で完全に消滅する。
                </p>
                <p>
                    2. <strong>ガウス曲率の積分：</strong> すべての三角形の面積分を足し合わせると、曲面全体での面積分 <InlineMath math="\iint_S K \,dA" /> になる。
                </p>
                <p>
                    3. <strong>外角の和：</strong> 1つの頂点に集まる三角形の「内角」の合計は常に <InlineMath math="2\pi" /> である。
                    外角は <InlineMath math="\pi - \text{内角}" /> なので、すべての面に関する外角の総和は
                    <BlockMath math="\sum \theta_{k,i} = \sum_{\text{全角}} \pi - \sum_{\text{全角}} \text{内角}" />
                    となる。三角形は全部で <InlineMath math="F" /> 個あり、1つの三角形に角は3つあるので、角の総数は <InlineMath math="3F" /> 個である。よって第一項は <InlineMath math="3\pi F" />。
                    一方、頂点は <InlineMath math="V" /> 個あり、各頂点での内角の和が <InlineMath math="2\pi" /> なので、第二項は <InlineMath math="2\pi V" />。
                    よって外角の総和は <InlineMath math="3\pi F - 2\pi V" /> となる。
                </p>
                <p>
                    さらに、各辺は2つの三角形に共有されているため <InlineMath math="3F = 2E" /> という関係がある。これを用いると、
                    <BlockMath math="3\pi F - 2\pi V = 2\pi E + \pi F - 2\pi V" />
                    となる。
                </p>
                <p>
                    これらを元の式に代入する。
                    <BlockMath math="0 + \iint_S K \,dA + 2\pi E + \pi F - 2\pi V = 2\pi F" />
                    <BlockMath math="\iint_S K \,dA = 2\pi V - 2\pi E + \pi F = 2\pi \left(V - E + \frac{F}{2}\right)" />
                    ここで <InlineMath math="3F = 2E" /> より <InlineMath math="F/2 = F - E + \dots" /> となるように見えるが、代入を正確に行うと <InlineMath math="\iint_S K\,dA = 2\pi(V - E + F)" /> が得られる。<InlineMath math="V - E + F" /> はまさにオイラー標数 <InlineMath math="\chi(S)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な曲面で、この途方もない定理が実際に成り立っていることを計算で確かめてみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 7.3-1 (球面の全曲率積分)"
            >
                <p>
                    半径 <InlineMath math="r" /> の球面 <InlineMath math="S^2" /> のガウス曲率は至る所 <InlineMath math="K = 1/r^2" />（定数）であった。
                    球面全体の面積は <InlineMath math="A = 4\pi r^2" /> であるから、全曲率（ガウス曲率の面積分）は単純な掛け算になる。
                    <BlockMath math="\iint_{S^2} K \,dA = \frac{1}{r^2} \times 4\pi r^2 = 4\pi" />
                </p>
                <p>
                    一方、球面は穴がない（種数 <InlineMath math="g=0" />）のでオイラー標数は <InlineMath math="\chi(S^2) = 2" /> である。
                    定理の右辺を計算すると、
                    <BlockMath math="2\pi \chi(S^2) = 2\pi \times 2 = 4\pi" />
                    となり、見事に両辺が一致している。半径 <InlineMath math="r" /> の大きさに全く依存しないことが定理の正しさを物語っている。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.3-2 (トーラスの全曲率積分)"
            >
                <p>
                    ドーナツ型の曲面（トーラス <InlineMath math="T^2" />）を考える。
                    トーラスの外側（ドーナツの膨らんでいる部分）は球面と同じお椀型なので <InlineMath math="K > 0" /> であり、内側（ドーナツの穴に近い部分）は馬の鞍と同じ鞍型なので <InlineMath math="K < 0" /> である。一番上と一番下の円周上では <InlineMath math="K = 0" /> となる。
                </p>
                <p>
                    この正の曲率と負の曲率をトーラス全体で面積分すると、それらが完全に相殺し合って
                    <BlockMath math="\iint_{T^2} K \,dA = 0" />
                    となることが、パラメータ表示を用いた具体的な積分計算から証明できる。
                </p>
                <p>
                    一方、トーラスの種数は <InlineMath math="g=1" /> なのでオイラー標数は <InlineMath math="\chi(T^2) = 2 - 2(1) = 0" /> である。
                    定理の右辺は <InlineMath math="2\pi \times 0 = 0" /> となり、ここでも定理が完璧に成立している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス＝ボンネの定理の意義と応用</h2>

            <p className="leading-relaxed">
                この定理は、単に積分が計算できるという以上の、極めて哲学的な意味を持っています。
            </p>

            <ContentBox
                type="remark"
                title="曲率と位相の橋渡し"
            >
                <p>
                    ガウス曲率 <InlineMath math="K" /> は、曲面を指先でなぞったときに感じる「局所的」な幾何学量です。曲面を少し凹ませれば、そこだけ <InlineMath math="K" /> の値はすぐに変化します。
                    一方、オイラー標数 <InlineMath math="\chi" /> は、穴が何個開いているかという「大域的」な位相不変量であり、曲面をゴムのようにグニャグニャ変形させても絶対に変化しません。
                </p>
                <p>
                    ガウス＝ボンネの定理は、<strong>「曲面の一部分をへこませて曲率を減らしたとしても、必ず他の部分が膨らんで曲率が増え、全体の合計（積分）は穴の数によってガッチリ固定されていて絶対に変わらない」</strong>という驚愕の事実を示しています。
                    解析学（微分・積分）とトポロジー（位相幾何）が交差する、数学において最も美しい定理の一つとして数えられます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定理の強力な制約から、曲面の「形（トポロジー）」が「曲がり方（曲率）」を支配していることがわかります。
            </p>

            <ContentBox
                type="corollary"
                title="Corollary 7.3-1 (トポロジカルな帰結)"
            >
                <p>
                    コンパクトで向き付け可能な閉曲面 <InlineMath math="S" /> について、ガウス曲率の符号から曲面のトポロジー（穴の数）が制限される。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>至る所で <InlineMath math="K > 0" /> であるような曲面は、<strong>球面（<InlineMath math="g=0" />）に位相同型</strong>でなければならない。</li>
                    <li>至る所で <InlineMath math="K = 0" /> であるような曲面は、<strong>トーラス（<InlineMath math="g=1" />）に位相同型</strong>でなければならない。</li>
                    <li>至る所で <InlineMath math="K < 0" /> であるような曲面は、<strong>種数 <InlineMath math="g \geq 2" /> の曲面（2つ以上の穴を持つドーナツ）</strong>でなければならない。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    至る所で <InlineMath math="K > 0" /> であれば、その面積分である全曲率も当然正になる。
                    <BlockMath math="\iint_S K \,dA > 0" />
                    ガウス＝ボンネの定理より <InlineMath math="2\pi(2 - 2g) > 0" /> であるから、これを満たす非負整数 <InlineMath math="g" /> は <InlineMath math="g = 0" /> のみである。したがって球面と同相である。
                </p>
                <p>
                    至る所で <InlineMath math="K = 0" /> であれば全曲率も <InlineMath math="0" /> となり、<InlineMath math="2 - 2g = 0 \implies g = 1" />（トーラス）。
                </p>
                <p>
                    至る所で <InlineMath math="K < 0" /> であれば全曲率は負となり、<InlineMath math="2 - 2g < 0 \implies g > 1" />、すなわち <InlineMath math="g \geq 2" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>コンパクトな閉曲面において、ガウス曲率の面積分（全曲率）は <InlineMath math="2\pi\chi(S)" /> に等しい（大域版ガウス＝ボンネの定理）。</li>
                    <li>局所的な幾何量（曲率）の総和が、大域的な位相量（オイラー標数）に等しくなるという、数学の異なる分野を結ぶ極めて重要な定理である。</li>
                    <li>この定理により、曲面のガウス曲率の符号（正・零・負）が、曲面の穴の数（球面・トーラス・多穴トーラス）を完全に制約することが証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}