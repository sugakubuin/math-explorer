import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassPLaurentExpansion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、ワイエルシュトラスの <InlineMath math="\wp" /> 関数が偶関数であり、二重周期性を持つことを確認しました。また、各格子点に <InlineMath math="2" /> 位の極を持つことも分かりました。
                本節では、この <InlineMath math="\wp" /> 関数の原点近傍における振る舞いをより詳細に調べるために、Laurent 展開（ローラン展開）を導出します。この展開係数に現れる級数は、格子に依存する重要な量であり、楕円関数の理論において中心的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Laurent 展開</h2>

            <p>
                まずは <InlineMath math="\wp(z)" /> の定義式から出発し、<InlineMath math="z = 0" /> の周りでの展開を求めます。ここで登場する級数はアイゼンシュタイン級数と呼ばれます。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.3-1 (<InlineMath math="\wp(z)" /> の原点近傍での Laurent 展開)</span>}>
                <p>
                    ワイエルシュトラスの <InlineMath math="\wp" /> 関数の原点 <InlineMath math="z = 0" /> 近傍（<InlineMath math="0 < |z| < \min_{\omega \in \Lambda \setminus \{0\}} |\omega|" />）における Laurent 展開は次で与えられる。
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + \sum_{n=1}^\infty (2n+1)G_{2n+2}z^{2n}" />
                <p>
                    ここで、<InlineMath math="G_{2k}" /> は<b>アイゼンシュタイン級数（Eisenstein series）</b>と呼ばれ、次のように定義される。
                </p>
                <BlockMath math="G_{2k} = \sum_{\omega \in \Lambda \setminus \{0\}} \frac{1}{\omega^{2k}}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\wp(z)" /> の定義式は以下の通りである。
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + \sum_{\omega \neq 0} \left( \frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} \right)" />
                <p>
                    原点の近傍で <InlineMath math="|z| < |\omega|" /> を満たすとき、和の中の項を展開する。
                </p>
                <BlockMath math="\frac{1}{(z-\omega)^2} = \frac{1}{\omega^2(1 - z/\omega)^2}" />
                <p>
                    ここで、<InlineMath math="|x| < 1" /> のときの展開公式 <InlineMath math="(1-x)^{-2} = \sum_{m=0}^\infty (m+1)x^m" /> を <InlineMath math="x = z/\omega" /> に適用すると、
                </p>
                <BlockMath math="\begin{aligned} \frac{1}{(z-\omega)^2} &= \frac{1}{\omega^2} \sum_{m=0}^\infty (m+1) \left(\frac{z}{\omega}\right)^m \\ &= \frac{1}{\omega^2} + \sum_{m=1}^\infty (m+1) \frac{z^m}{\omega^{m+2}} \end{aligned}" />
                <p>
                    したがって、補正項を引いたものは次のように書ける。
                </p>
                <BlockMath math="\frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} = \sum_{m=1}^\infty (m+1) \frac{z^m}{\omega^{m+2}}" />
                <p>
                    これを <InlineMath math="\wp(z)" /> の定義式に代入し、和の順序を交換する（絶対収束性より正当化される）。
                </p>
                <BlockMath math="\begin{aligned} \wp(z) &= \frac{1}{z^2} + \sum_{\omega \neq 0} \sum_{m=1}^\infty (m+1) \frac{z^m}{\omega^{m+2}} \\ &= \frac{1}{z^2} + \sum_{m=1}^\infty (m+1)z^m \sum_{\omega \neq 0} \frac{1}{\omega^{m+2}} \end{aligned}" />
                <p>
                    ここで、格子 <InlineMath math="\Lambda" /> は原点に関して対称（<InlineMath math="\omega \in \Lambda \iff -\omega \in \Lambda" />）であるため、<InlineMath math="m+2" /> が奇数のとき <InlineMath math="\sum_{\omega \neq 0} \omega^{-(m+2)} = 0" /> となる。よって、偶数乗の項のみが残り、<InlineMath math="m = 2n" /> とおけばよい。
                </p>
                <BlockMath math="\begin{aligned} \wp(z) &= \frac{1}{z^2} + \sum_{n=1}^\infty (2n+1)z^{2n} \sum_{\omega \neq 0} \frac{1}{\omega^{2n+2}} \\ &= \frac{1}{z^2} + \sum_{n=1}^\infty (2n+1)G_{2n+2}z^{2n} \end{aligned}" />
                <p>
                    以上で示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から得られる具体的な展開式を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-1">
                <p>
                    Theorem 3.3-1 において、<InlineMath math="n=1, 2, \dots" /> の項を書き下すと、<InlineMath math="\wp(z)" /> の最初の数項は以下のようになる。
                </p>
                <BlockMath math="\wp(z) = \frac{1}{z^2} + 3G_4 z^2 + 5G_6 z^4 + 7G_8 z^6 + \cdots"
                />
                <p>
                    このように、<InlineMath math="z = 0" /> で <InlineMath math="2" /> 位の極を持ち、定数項は存在しない。<InlineMath math="z^2" /> 以降の係数は格子 <InlineMath math="\Lambda" /> に依存する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不変量 <InlineMath math="g_2, g_3" /> とアイゼンシュタイン級数</h2>

            <p>
                Laurent 展開の係数に現れたアイゼンシュタイン級数 <InlineMath math="G_4" /> と <InlineMath math="G_6" /> は、楕円関数論において極めて重要な役割を果たします。これらを定数倍したものを特別に定義します。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.3-1 (不変量 <InlineMath math="g_2, g_3" />)</span>}>
                <p>
                    格子 <InlineMath math="\Lambda" /> に付随する<b>不変量（invariants）</b> <InlineMath math="g_2" /> および <InlineMath math="g_3" /> を次のように定義する。
                </p>
                <BlockMath math="g_2 = 60G_4 = 60 \sum_{\omega \neq 0} \frac{1}{\omega^4}" />
                <BlockMath math="g_3 = 140G_6 = 140 \sum_{\omega \neq 0} \frac{1}{\omega^6}" />
            </ContentBox>

            <p>
                この定数倍（<InlineMath math="60" /> と <InlineMath math="140" />）は、後で学ぶ微分方程式を簡潔に記述するためのものです。格子を具体的に与えた場合、これらがどうなるか計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-2">
                <p>
                    ガウス格子 <InlineMath math="\Lambda = \mathbb{Z} + i\mathbb{Z}" /> を考える。
                </p>
                <p>
                    この格子は、<InlineMath math="\omega \mapsto i\omega" /> という回転操作に対して不変である。アイゼンシュタイン級数 <InlineMath math="G_6" /> を計算すると、
                </p>
                <BlockMath math="G_6 = \sum_{\omega \neq 0} \frac{1}{\omega^6} = \sum_{\omega \neq 0} \frac{1}{(i\omega)^6} = \frac{1}{i^6} \sum_{\omega \neq 0} \frac{1}{\omega^6} = -G_6"
                />
                <p>
                    <InlineMath math="G_6 = -G_6" /> より、<InlineMath math="G_6 = 0" /> となる。したがって、ガウス格子においては <InlineMath math="g_3 = 0" /> である。
                </p>
            </ContentBox>

            <p>
                アイゼンシュタイン級数の収束性について、少し補足しておきます。
            </p>

            <ContentBox type="remark" title="アイゼンシュタイン級数の収束とモジュラー形式への展望">
                <p>
                    一般に、級数 <InlineMath math="G_{2k} = \sum_{\omega \neq 0} \omega^{-2k}" /> は <InlineMath math="k \geq 2" /> のとき絶対収束します。これは、格子点の数が原点からの距離 <InlineMath math="R" /> に対して <InlineMath math="O(R^2)" /> で増加するため、<InlineMath math="\sum |\omega|^{-s}" /> は <InlineMath math="s > 2" /> で収束するからです。
                </p>
                <p>
                    しかし、<InlineMath math="k = 1" /> に相当する <InlineMath math="G_2 = \sum_{\omega \neq 0} \omega^{-2}" /> は条件付き収束にとどまり、和を取る順序に依存してしまいます。そのため、<InlineMath math="\wp(z)" /> の定義において <InlineMath math="\sum \omega^{-2}" /> を直接扱うことを避け、補正項 <InlineMath math="-1/\omega^2" /> を用いて絶対収束するように工夫した背景があります。
                </p>
                <p>
                    また、格子を <InlineMath math="\Lambda = \mathbb{Z} + \tau\mathbb{Z}" /> （<InlineMath math="\text{Im}(\tau) > 0" />）と表したとき、<InlineMath math="G_{2k}" /> は <InlineMath math="\tau" /> の関数とみなせます。この関数は特定の変換規則を満たす「モジュラー形式」と呼ばれる対象となり、数論において極めて重要な役割を果たします（詳細は第8章やモジュラー形式のトピックで学びます）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\wp(z)" /> の原点近傍における Laurent 展開は定数項を持たず、<InlineMath math="\wp(z) = z^{-2} + 3G_4 z^2 + 5G_6 z^4 + \cdots" /> となる。</li>
                    <li>展開係数に現れる <InlineMath math="G_{2k} = \sum_{\omega \neq 0} \omega^{-2k}" /> をアイゼンシュタイン級数と呼ぶ。</li>
                    <li>格子に付随する不変量として、<InlineMath math="g_2 = 60G_4" /> と <InlineMath math="g_3 = 140G_6" /> が定義され、今後の理論展開で重要な役割を担う。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
