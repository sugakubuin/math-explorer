import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CanonicalEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前回は、変数を「速度」から「運動量」へ変換するルジャンドル変換について学びました。
                この変数変換によって、ラグランジュ形式での 2 階微分方程式（オイラー＝ラグランジュ方程式）は、1 階の連立微分方程式である<b>ハミルトンの正準方程式</b>へと姿を変えます。
                本節では、この方程式の導出とその背後にある保存量の体系的な記述について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正準方程式の導出</h2>

            <p className="leading-relaxed">
                ハミルトニアン <InlineMath math="H(x, u, p)" /> の偏微分を計算することで、元の方程式がいかに美しく整理されるかを見てみましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (ハミルトンの正準方程式)">
                <p>
                    ラグランジュのオイラー＝ラグランジュ方程式 <InlineMath math="F_u - \frac{d}{dx} F_{u'} = 0" /> は、次の 1 階連立微分方程式と論理的に同値である：
                    <BlockMath math="\begin{cases} u' = \frac{\partial H}{\partial p} \\ p' = -\frac{\partial H}{\partial u} \end{cases}" />
                    これを<b>ハミルトンの正準方程式</b>（Hamilton's Canonical Equations）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="u' = H_p" /> は、前節のルジャンドル変換の性質（Proposition 5.1-1）から直接得られる。
                </p>
                <p>
                    2. <InlineMath math="p' = -H_u" /> を導出する。
                    <InlineMath math="H(x, u, p) = p u' - F(x, u, u')" /> を <InlineMath math="u" /> で偏微分すると、
                    <BlockMath math="\frac{\partial H}{\partial u} = p \frac{\partial u'}{\partial u} - F_u - F_{u'} \frac{\partial u'}{\partial u} = -F_u + (p - F_{u'}) \frac{\partial u'}{\partial u}" />
                    運動量の定義 <InlineMath math="p = F_{u'}" /> より第2項は 0 となるため、<InlineMath math="\frac{\partial H}{\partial u} = -F_u" />。
                    ここで、オイラー＝ラグランジュ方程式は <InlineMath math="F_u = \frac{d}{dx} F_{u'}" /> すなわち <InlineMath math="F_u = p'" /> と書ける。
                    これを代入することで、<InlineMath math="\frac{\partial H}{\partial u} = -p'" /> すなわち <InlineMath math="p' = -\frac{\partial H}{\partial u}" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体例として、単振子の運動方程式を正準方程式から導いてみましょう。
            </p>

            <ContentBox type="example" title="Example 5.2-1 (単振子の正準方程式)">
                <p>
                    ラグランジアン <InlineMath math="F = \frac{1}{2} m l^2 (u')^2 - m g l (1 - \cos u)" /> （<InlineMath math="u" /> は振幅角、<InlineMath math="l" /> は糸の長さ）を考える。
                    一般化運動量は <InlineMath math="p = F_{u'} = m l^2 u'" /> であり、ハミルトニアンは
                    <BlockMath math="H = \frac{p^2}{2 m l^2} + m g l (1 - \cos u)" />
                    となる。正準方程式を立てると：
                    <BlockMath math="\begin{cases} u' = \frac{H}{p} = \frac{p}{m l^2} \\ p' = -\frac{H}{u} = -m g l \sin u \end{cases}" />
                    第1式を <InlineMath math="x" /> で微分して第2式を代入すると、<InlineMath math="m l^2 u'' = -m g l \sin u" />、
                    すなわち広く知られた振子の運動方程式が得られる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="相空間の概念">
                <p>
                    ラグランジュ形式は <InlineMath math="u" /> のみを座標とする空間での議論ですが、ハミルトン形式は <InlineMath math="(u, p)" /> のペアを独立な座標（カノニカル変数）とする空間で議論を行います。
                    この <InlineMath math="(u, p)" /> の空間を<b>相空間</b>（Phase Space）と呼びます。
                    相空間上での運動は、ハミルトニアンが作り出すベクトル場に沿った流れとして幾何学的に理解することができ、これが統計力学や現代的な力学系の理論へと繋がっています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアソン括弧と保存量</h2>

            <p className="leading-relaxed">
                ハミルトン形式の真骨頂は、どのような物理量（関数）が保存されるかを「ブラケット」という形でシステマチックに扱える点にあります。
            </p>

            <ContentBox type="definition" title="Definition 5.2-2 (ポアソン括弧)">
                <p>
                    相空間上の 2 つの関数 <InlineMath math="f(u, p), g(u, p)" /> に対して、次で定義される演算
                    <BlockMath math="\{f, g\} = \frac{\partial f}{\partial u} \frac{\partial g}{\partial p} - \frac{\partial f}{\partial p} \frac{\partial g}{\partial u}" />
                    を、<b>ポアソン括弧</b>（Poisson Bracket）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.2-2 (時間微分と保存量)">
                <p>
                    任意の関数 <InlineMath math="f(x, u, p)" /> の停留経路に沿った変化率は、次のように表される：
                    <BlockMath math="\frac{d}{dx} f = \{f, H\} + \frac{\partial f}{\partial x}" />
                    特に、<InlineMath math="f" /> が陽に <InlineMath math="x" /> を含まず、かつ <InlineMath math="\{f, H\} = 0" /> ならば、<InlineMath math="f" /> は保存量となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関数 <InlineMath math="f" /> を全微分すると、
                    <BlockMath math="\frac{d}{dx} f = \frac{\partial f}{\partial u} u' + \frac{\partial f}{\partial p} p' + \frac{\partial f}{\partial x}" />
                    ここで正準方程式 <InlineMath math="u' = H_p, p' = -H_u" /> を代入すると、
                    <BlockMath math="\frac{d}{dx} f = \frac{\partial f}{\partial u} H_p - \frac{\partial f}{\partial p} H_u + \frac{\partial f}{\partial x} = \{f, H\} + \frac{\partial f}{\partial x}" />
                    となり、命題の式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-2 (自律系におけるハミルトニアンの保存)">
                <p>
                    ハミルトニアン自身が陽に <InlineMath math="x" /> に依存しない場合（自律系）、ポアソン括弧の性質 <InlineMath math="\{H, H\} = 0" /> により、
                    <BlockMath math="\frac{dH}{dx} = \{H, H\} + 0 = 0" />
                    となる。これは、エネルギーが時間（<InlineMath math="x" />）にわたって一定に保たれる「エネルギー保存則」の証明に他ならない。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                正準方程式とポアソン括弧によって、対称性と保存則の関係が非常にクリアになりました。
                次節では、これらのハミルトン形式が、より広範な物理学の問題や現代的な理論へとどのように発展していくかを見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ハミルトンの正準方程式は、ラグランジュの運動方程式を 1 階連立系へと変換したものである。</li>
                    <li>相空間（座標と運動量の組）という概念を導入することで、運動を流れとして幾何学的に記述できる。</li>
                    <li>ポアソン括弧は、相空間上の物理量の変化をハミルトニアンとの関係で簡潔に表現するツールである。</li>
                    <li>物理量の保存は、ハミルトニアンとのポアソン括弧がゼロになることとして系統的に判定できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
