import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TorsionAndBinormal() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で曲線の進行方向 <InlineMath math="T(s)" /> と曲がる方向 <InlineMath math="N(s)" /> を定義しました。3次元空間の曲線は、「曲がる」だけでなく、平面から浮き上がって「ねじれる」こともできます。この章では、そのねじれ具合を測るための新たなベクトルと量を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">従法線ベクトルの定義</h2>

            <p className="leading-relaxed">
                <InlineMath math="T(s)" /> と <InlineMath math="N(s)" /> に直交する3つ目の基底ベクトルを、外積を用いて構成します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-1 (従法線ベクトル)"
            >
                <p>
                    単位接ベクトル <InlineMath math="T(s)" /> と主法線ベクトル <InlineMath math="N(s)" /> の外積をとって得られるベクトル <InlineMath math="B(s)" /> を、<strong>従法線ベクトル（binormal vector）</strong>という。
                    <BlockMath math="B(s) = T(s) \times N(s)" />
                </p>
                <p>
                    これにより、各点において互いに直交する3つの単位ベクトル <InlineMath math="\{T(s), N(s), B(s)\}" /> の組（正規直交標構）が得られる。これを<strong>フレネ-セレ標構（Frenet-Serret frame）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                外積の性質から、<InlineMath math="B(s)" /> もまた単位ベクトルになることが簡単に確かめられます。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 1.3-1 (<InlineMath math="B" /> は単位ベクトル)</span>}
            >
                <p>
                    従法線ベクトル <InlineMath math="B(s)" /> の大きさは常に <InlineMath math="1" /> であり、<InlineMath math="T(s)" /> および <InlineMath math="N(s)" /> と直交する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    空間ベクトル <InlineMath math="\mathbf{u}, \mathbf{v}" /> の外積 <InlineMath math="\mathbf{u} \times \mathbf{v}" /> の大きさは、<InlineMath math="|\mathbf{u}| |\mathbf{v}| \sin\theta" /> （<InlineMath math="\theta" /> はなす角）で与えられる。
                </p>
                <p>
                    <InlineMath math="B = T \times N" /> について、<InlineMath math="T" /> と <InlineMath math="N" /> はともに単位ベクトル（<InlineMath math="|T| = |N| = 1" />）であり、前節で見たように直交している（<InlineMath math="\theta = \pi/2" /> より <InlineMath math="\sin\theta = 1" />）。
                </p>
                <p>
                    したがって、
                    <BlockMath math="|B| = |T||N|\sin\frac{\pi}{2} = 1 \cdot 1 \cdot 1 = 1" />
                    となる。また、外積の定義から <InlineMath math="B" /> は <InlineMath math="T" /> と <InlineMath math="N" /> の両方に直交する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-1 (螺旋の従法線ベクトル)"
            >
                <p>
                    螺旋の弧長パラメータ表示（<InlineMath math="c = \sqrt{a^2+b^2}" />）
                    <BlockMath math="\alpha(s) = \left( a\cos\frac{s}{c}, a\sin\frac{s}{c}, \frac{bs}{c} \right)" />
                    について、<InlineMath math="T" /> と <InlineMath math="N" /> を計算すると以下のようになる（計算過程は省略）。
                    <BlockMath math="T(s) = \left( -\frac{a}{c}\sin\frac{s}{c}, \frac{a}{c}\cos\frac{s}{c}, \frac{b}{c} \right)" />
                    <BlockMath math="N(s) = \left( -\cos\frac{s}{c}, -\sin\frac{s}{c}, 0 \right)" />
                </p>
                <p>
                    これらを外積で計算すると、
                    <BlockMath math="B(s) = T(s) \times N(s) = \left( \frac{b}{c}\sin\frac{s}{c}, -\frac{b}{c}\cos\frac{s}{c}, \frac{a}{c} \right)" />
                    となる。ノルムを計算すると <InlineMath math="\sqrt{(b/c)^2 + (a/c)^2} = \sqrt{(a^2+b^2)/c^2} = 1" /> となり、単位ベクトルであることが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">捩率の定義と意味</h2>

            <p className="leading-relaxed">
                曲率が接ベクトル <InlineMath math="T(s)" /> の変化率であったように、曲線の「ねじれ」は従法線ベクトル <InlineMath math="B(s)" /> の変化率として捉えることができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-2 (捩率)"
            >
                <p>
                    従法線ベクトル <InlineMath math="B(s)" /> の微分 <InlineMath math="B'(s)" /> は、ある実数値関数 <InlineMath math="\tau(s)" /> を用いて <InlineMath math="B'(s) = -\tau(s)N(s)" /> の形で表される（理由は後述の Proposition による）。
                </p>
                <p>
                    この係数 <InlineMath math="\tau(s)" />（タウ）を、曲線 <InlineMath math="\alpha" /> の<strong>捩率（torsion, れいりつ）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                なぜ <InlineMath math="B'(s)" /> が <InlineMath math="N(s)" /> の定数倍で書けるのか、その理由を証明します。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 1.3-2 (<InlineMath math="B'(s) \perp B(s)" /> かつ <InlineMath math="B'(s) \perp T(s)" />)</span>}
            >
                <p>
                    <InlineMath math="B'(s)" /> は <InlineMath math="B(s)" /> および <InlineMath math="T(s)" /> の両方に直交する。したがって、<InlineMath math="B'(s)" /> は <InlineMath math="N(s)" /> に平行である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    まず、<InlineMath math="|B(s)|^2 = B(s) \cdot B(s) = 1" /> を微分すると、Proposition 1.2-1 と同様に
                    <BlockMath math="2 B'(s) \cdot B(s) = 0 \implies B'(s) \perp B(s)" />
                    がわかる。
                </p>
                <p>
                    次に、<InlineMath math="B(s) \cdot T(s) = 0" /> を <InlineMath math="s" /> で微分する。
                    <BlockMath math="B'(s) \cdot T(s) + B(s) \cdot T'(s) = 0" />
                    ここで <InlineMath math="T'(s) = \kappa(s) N(s)" /> であり、<InlineMath math="B(s)" /> は <InlineMath math="N(s)" /> と直交しているため <InlineMath math="B(s) \cdot T'(s) = \kappa (B(s) \cdot N(s)) = 0" /> となる。
                    よって、
                    <BlockMath math="B'(s) \cdot T(s) = 0 \implies B'(s) \perp T(s)" />
                    となる。
                </p>
                <p>
                    <InlineMath math="B'(s)" /> は <InlineMath math="T, N, B" /> が張る3次元空間において、<InlineMath math="B" /> にも <InlineMath math="T" /> にも直交するため、残る <InlineMath math="N" /> の方向を向くしかない。したがって <InlineMath math="B'(s)" /> は <InlineMath math="N(s)" /> に平行である（<InlineMath math="B'(s) = -\tau N(s)" /> と書ける）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-2 (螺旋の捩率)"
            >
                <p>
                    Example 1.3-1 で求めた螺旋の <InlineMath math="B(s)" /> を微分する。
                    <BlockMath math="\begin{aligned} B'(s) &= \frac{d}{ds} \left( \frac{b}{c}\sin\frac{s}{c}, -\frac{b}{c}\cos\frac{s}{c}, \frac{a}{c} \right) \\ &= \left( \frac{b}{c^2}\cos\frac{s}{c}, \frac{b}{c^2}\sin\frac{s}{c}, 0 \right) \end{aligned}" />
                </p>
                <p>
                    一方、<InlineMath math="N(s) = \left( -\cos\frac{s}{c}, -\sin\frac{s}{c}, 0 \right)" /> であったから、
                    <BlockMath math="B'(s) = -\frac{b}{c^2} \left( -\cos\frac{s}{c}, -\sin\frac{s}{c}, 0 \right) = -\frac{b}{c^2} N(s)" />
                    となる。
                </p>
                <p>
                    定義 <InlineMath math="B'(s) = -\tau(s)N(s)" /> と比較すると、螺旋の捩率は
                    <BlockMath math="\tau = \frac{b}{c^2} = \frac{b}{a^2 + b^2}" />
                    となり、定数であることがわかる。
                </p>
                <p>
                    <InlineMath math="b > 0" /> なら捩率は正（右回り螺旋）、<InlineMath math="b < 0" /> なら負（左回り螺旋）となる。<InlineMath math="b = 0" /> のとき <InlineMath math="\tau = 0" /> となるが、これは曲線が <InlineMath math="xy" /> 平面上の円になり、立体的なねじれを持たない（平面曲線である）ことを意味している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="T" /> と <InlineMath math="N" /> の外積から従法線ベクトル <InlineMath math="B" /> が定義され、空間の各点で正規直交標構（フレネ-セレ標構）が定まる。</li>
                    <li><InlineMath math="B" /> の変化率から捩率 <InlineMath math="\tau" /> が <InlineMath math="B'(s) = -\tau(s)N(s)" /> として定義される。</li>
                    <li>捩率 <InlineMath math="\tau" /> は、曲線が接平面（<InlineMath math="T" /> と <InlineMath math="N" /> が張る平面）から立体的に浮き上がって「ねじれる」度合いを表し、<InlineMath math="\tau=0" /> であれば平面曲線となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}