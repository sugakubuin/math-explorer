import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstVariation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                変分問題における「極値」とは、わずかな摂動（変分）を与えても、汎関数の値が 1 次のオーダーで変化しない状態を指します。
                本節では、この 1 次の変化量である<b>第一変分</b>の定義を学び、極値が満たすべき数学的な必要条件を導き出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第一変分の定義</h2>

            <p className="leading-relaxed">
                汎関数の「勾配」に相当する第一変分を、微分の文脈で定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (第一変分)">
                <p>
                    汎関数 <InlineMath math="J[u]" /> と変分方向 <InlineMath math="\eta" /> に対して、次で定義される極限
                    <BlockMath math="\delta J[u; \eta] = \frac{d}{d\varepsilon} J[u + \varepsilon \eta] \bigg|_{\varepsilon=0}" />
                    を、関数 <InlineMath math="u" /> における方向 <InlineMath math="\eta" /> への<b>第一変分</b>（First Variation）と呼ぶ。
                    これは関数解析におけるガトー微分（Gâteaux derivative）に相当する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一般に、積分の形をした汎関数の第一変分は次のように計算されます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (第一変分の構成)">
                <p>
                    積分の形をした汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> に対して、その第一変分は
                    <BlockMath math="\delta J[u; \eta] = \int_a^b \left( \frac{\partial F}{\partial u} \eta + \frac{\partial F}{\partial u'} \eta' \right) \, dx" />
                    で与えられる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第一変分の定義に従い計算する：
                    <BlockMath math="\begin{aligned} \delta J[u; \eta] &= \frac{d}{d\varepsilon} \int_a^b F(x, u+\varepsilon\eta, u'+\varepsilon\eta') \, dx \bigg|_{\varepsilon=0} \\ &= \int_a^b \frac{\partial}{\partial \varepsilon} F(x, u+\varepsilon\eta, u'+\varepsilon\eta') \bigg|_{\varepsilon=0} \, dx \end{aligned}" />
                    ここで、被積分関数 <InlineMath math="F" /> に連鎖律（Chain Rule）を適用すると：
                    <BlockMath math="\begin{aligned} \frac{\partial F}{\partial (u+\varepsilon\eta)} \frac{\partial (u+\varepsilon\eta)}{\partial \varepsilon} + \frac{\partial F}{\partial (u'+\varepsilon\eta')} &\frac{\partial (u'+\varepsilon\eta')}{\partial \varepsilon} \\ &= F_u \cdot \eta + F_{u'} \cdot \eta' \end{aligned}" />
                    <InlineMath math="\varepsilon = 0" /> を代入することで、命題の式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (弧長汎関数の第一変分)">
                <p>
                    弧長汎関数 <InlineMath math="F(x, u, u') = \sqrt{1 + (u')^2}" /> を考える。
                    このとき <InlineMath math="F_u = 0" /> および <InlineMath math="F_{u'} = \frac{u'}{\sqrt{1+(u')^2}}" /> である。
                    したがって、弧長汎関数の第一変分は
                    <BlockMath math="\delta J[u; \eta] = \int_a^b \frac{u' \eta'}{\sqrt{1 + (u')^2}} \, dx" />
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極値の必要条件</h2>

            <p className="leading-relaxed">
                関数が極値（最小または最大）をとるためには、微積分と同様に「傾きがゼロ」である必要があります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-2 (極値の必要条件)">
                <p>
                    関数 <InlineMath math={"u^* \\in \\mathcal{A}"} /> が汎関数 <InlineMath math="J[u]" /> の極値を与えるならば、任意の許容される変分方向 <InlineMath math="\eta" /> に対して、第一変分は 0 でなければならない：
                    <BlockMath math="\delta J[u^*; \eta] = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="u^*" /> が極値を与えるとき、任意に固定した <InlineMath math="\eta" /> に対して 1 変数関数
                    <BlockMath math="\phi(\varepsilon) = J[u^* + \varepsilon \eta]" />
                    を定義すると、この関数は <InlineMath math="\varepsilon = 0" /> で極値をとる。
                    1 変数微積分の結果より、その微分係数は 0 でなければならない：
                    <BlockMath math="\phi'(0) = \frac{d}{d\varepsilon} J[u^* + \varepsilon \eta] \bigg|_{\varepsilon=0} = \delta J[u^*; \eta] = 0" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="必要条件と十分条件">
                <p>
                    条件 <InlineMath math="\delta J = 0" /> はあくまで<b>必要条件</b>です。
                    これが成立するからといって、必ずしも極小（または極大）であるとは限りません。
                    真に極小であるかを判定するには、有限次元の場合と同様に、2 次のオーダーの変化量である<b>第二変分</b>（Chapter 4）を調べる必要があります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次章では、この条件 <InlineMath math="\delta J = 0" /> を利用して、極値関数が満たすべき微分方程式である「オイラー＝ラグランジュ方程式」を具体的に導き出します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第一変分は、汎関数を微小に変化させたときの 1 次の変化量（方向微分）である。</li>
                    <li>積分布分汎関数の第一変分は、ラグランジアン <InlineMath math="F" /> の <InlineMath math="u, u'" /> に関する全微分形式を積分したもので与えられる。</li>
                    <li>極値を与える関数 <InlineMath math="u^*" /> においては、任意の変分方向 <InlineMath math="\eta" /> に対して第一変分が必ず 0 になる。</li>
                    <li>第一変分が 0 であることは必要条件であり、極値の種類の確定には第二変分の解析が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
