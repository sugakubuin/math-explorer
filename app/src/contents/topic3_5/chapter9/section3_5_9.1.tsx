import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeakSolutionsIntro() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでの章では、偏微分方程式の解として、必要な回数だけ微分可能であることを前提とした「古典解」を扱ってきました。
                しかし、物理現象（衝撃波、不連続な初期値、特異点など）をより広範に記述するためには、
                微分の概念を拡張した<b>弱解</b>（Weak Solution）の導入が不可欠となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">古典解の限界</h2>

            <p className="leading-relaxed">
                なぜ「古典的な微分」だけでは不十分なのでしょうか。具体的な例を通してその限界を確認します。
            </p>

            <ContentBox type="example" title="Example 9.1-1 (古典解が存在しない例)">
                <p>
                    <b>1. 衝撃波の形成</b>：
                    §4.3 で学んだバーガーズ方程式などの非線形方程式では、滑らかな初期値から出発しても、時間経過とともに勾配が無限大になり、
                    「衝撃波」と呼ばれる不連続な面が形成される。不連続な点では微分が定義できないため、古典解は破綻する。
                </p>
                <p>
                    <b>2. 特異な形状</b>：
                    関数 <InlineMath math="u(x) = |x|" /> を考える。この関数は <InlineMath math="x=0" /> で「尖って」おり、通常の意味での 2 階微分は存在しない。
                    しかし、これを微分方程式 <InlineMath math="u'' = 2\delta_0" />（<InlineMath math="\delta_0" /> はデルタ関数）の解として捉えたい場合がある。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱解の定式化</h2>

            <p className="leading-relaxed">
                弱解のアイデアは、「微分を自分自身で行うのではなく、滑らかな<b>テスト関数</b>に肩代わりさせる」ことにあります。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (弱解)">
                <p>
                    偏微分方程式 <InlineMath math="Lu = f" /> に対して、領域内ですべてのテスト関数 <InlineMath math="\phi \in C_0^\infty(\Omega)" />（コンパクトな台を持つ無限回微分可能な関数）に対し、
                    部分積分を用いて微分を <InlineMath math="\phi" /> に移した等式：
                    <BlockMath math="\int_{\Omega} u L^* \phi \, dx = \int_{\Omega} f \phi \, dx" />
                    を満たす局所可積分関数 <InlineMath math="u" /> を、方程式の<b>弱解</b>と呼ぶ。
                    ここで <InlineMath math="L^*" /> は作用素 <InlineMath math="L" /> の随伴作用素（Adjoint Operator）である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.1-2 (u = |x| が弱解であることの確認)">
                <p>
                    方程式 <InlineMath math="u'' = 2\delta_0" /> の弱形式は <InlineMath math="\int_{-\infty}^{\infty} u \phi'' \, dx = 2\phi(0)" /> である。
                    <InlineMath math="u(x) = |x|" /> に対して左辺を計算すると：
                    <BlockMath math="\begin{aligned} \int_{-\infty}^{\infty} |x| \phi'' \, dx &= \int_{-\infty}^0 (-x) \phi'' \, dx + \int_{0}^\infty x \phi'' \, dx \\ &= [-x\phi' + \phi]_{-\infty}^0 + [x\phi' - \phi]_0^\infty \\ &= \phi(0) - (-\phi(0)) = 2\phi(0) \end{aligned}" />
                    となり、<InlineMath math="u = |x|" /> が弱解の意味でこの方程式を満たしていることが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱解と古典解の関係</h2>

            <p className="leading-relaxed">
                弱解は古典解を包含する、より広い概念です。
            </p>

            <ContentBox type="proposition" title="Proposition 9.1-1 (古典解は弱解)">
                <p>
                    関数 <InlineMath math="u" /> が通常の意味での解（古典解）であるならば、<InlineMath math="u" /> は必ず弱解でもある。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="Lu = f" /> が点ごとに成立しているとき、両辺にテスト関数 <InlineMath math="\phi" /> をかけて積分する：
                    <BlockMath math="\int (Lu)\phi \, dx = \int f\phi \, dx" />
                    左辺に対して部分積分を繰り返し行い、微分をすべて <InlineMath math="\phi" /> に移すと（境界項は <InlineMath math="\phi" /> の台がコンパクトであるため消える）、
                    弱形式の定義 <InlineMath math="\int u L^* \phi \, dx = \int f \phi \, dx" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ソボレフ空間との接続">
                <p>
                    弱解の理論を厳密に扱うための適切な舞台が、関数解析で学ぶ<b>ソボレフ空間</b>（Sobolev Space）である。
                    弱解の存在は、抽象的な Hilbert 空間上の理論（Lax-Milgram の定理など）を用いることで、古典解の存在証明よりもはるかに系統的に保証される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、楕円型方程式の弱解が実は非常に高い滑らかさを持ち、結局は古典解に一致するという驚くべき性質（正則性）について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>古典的な微分が定義できない不連続な点や尖った点を持つ関数も、解として扱いたい動機がある。</li>
                    <li>弱解は、部分積分を用いて「微分をテスト関数に移す」ことで定式化される。</li>
                    <li>古典解は常に弱解であるが、逆は一般には成り立たない（弱解の方が広い概念である）。</li>
                    <li>弱解の導入により、複雑な物理現象を統一的な数学の枠組みで捉えることが可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
