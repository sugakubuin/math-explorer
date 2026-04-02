import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SecondVariationDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、汎関数の第一変分がゼロになる「停留条件」を主に扱ってきました。
                しかし、関数が停留条件を満たすだけでは、それが曲線の長さを最小にしているのか、あるいは最大にしているのか、あるいは単なる鞍点であるのかを判断することはできません。
                本節では、微積分における「2 階微分」に相当する<b>第二変分</b>を導入し、停留関数が真に極小（安定な状態）であるかを判定するための数学的基礎を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二変分の定義</h2>

            <p className="leading-relaxed">
                汎関数の値の変化を、微小パラメータ <InlineMath math="\varepsilon" /> に関して 2 次の項まで展開したときの係数を考えます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (第二変分)">
                <p>
                    汎関数 <InlineMath math="J[u]" /> と変分方向 <InlineMath math="\eta" /> に対して、次で定義される量
                    <BlockMath math="\delta^2 J[u; \eta] = \frac{d^2}{d\varepsilon^2} J[u + \varepsilon \eta] \bigg|_{\varepsilon=0}" />
                    を、関数 <InlineMath math="u" /> における<b>第二変分</b>（Second Variation）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                積分型汎関数の場合、この第二変分はラグランジアンの 2 階偏導関数を用いて具体的に計算することができます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (第二変分の公式)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> に対して、その第二変分は次のように与えられる：
                    <BlockMath math="\delta^2 J[u; \eta] = \int_a^b (F_{uu} \eta^2 + 2F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2) \, dx" />
                    ここで、<InlineMath math="F_{uu}, F_{uu'}, F_{u'u'}" /> はすべて <InlineMath math="(x, u, u')" /> におけるラグランジアン <InlineMath math="F" /> の 2 階偏導関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="J[u + \varepsilon \eta]" /> を <InlineMath math="\varepsilon" /> で微分する。
                    <BlockMath math="\frac{d}{d\varepsilon} J[u + \varepsilon \eta] = \int_a^b \frac{d}{d\varepsilon} F(x, u + \varepsilon \eta, u' + \varepsilon \eta') \, dx" />
                    連鎖律を適用すると、
                    <BlockMath math="\frac{d}{d\varepsilon} F(x, u + \varepsilon \eta, u' + \varepsilon \eta') = F_u (x, \tilde{u}, \tilde{u}') \eta + F_{u'} (x, \tilde{u}, \tilde{u}') \eta'" />
                    ここで <InlineMath math="\tilde{u} = u + \varepsilon \eta" /> とした。これをさらにもう一度 <InlineMath math="\varepsilon" /> で微分すると、
                    <BlockMath math="\begin{aligned} \frac{d^2}{d\varepsilon^2} F(x, \tilde{u}, \tilde{u}') &= \frac{d}{d\varepsilon} (F_u \eta + F_{u'} \eta') \\ &= (F_{uu} \eta + F_{uu'} \eta') \eta + (F_{u'u} \eta + F_{u'u'} \eta') \eta' \\ &= F_{uu} \eta^2 + 2F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2 \end{aligned}" />
                    となる（ここで <InlineMath math="F_{uu'} = F_{u'u}" /> を用いた）。
                    最後に <InlineMath math="\varepsilon = 0" /> を代入して積分することで、命題の式を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極値判定への応用</h2>

            <p className="leading-relaxed">
                有限次元の関数の極値判定において「2 階微分が正ならば極小」であったのと同様に、汎関数でも第二変分の符号が極小性の鍵を握ります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-2 (第二変分による極値判定)">
                <p>
                    停留関数 <InlineMath math="u^*" /> において、任意の変分方向 <InlineMath math="\eta \neq 0" /> に対して
                    <BlockMath math="\delta^2 J[u^*; \eta] > 0" />
                    が成り立つならば、<InlineMath math="u^*" /> は汎関数 <InlineMath math="J" /> の<b>弱極小</b>（Weak Minimum）を与える。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    汎関数 <InlineMath math="J[u^* + \varepsilon \eta]" /> をパラメータ <InlineMath math="\varepsilon" /> について <InlineMath math="\varepsilon = 0" /> のまわりでテイラー展開すると、次のように書ける：
                    <BlockMath math="J[u^* + \varepsilon \eta] = J[u^*] + \varepsilon \delta J[u^*; \eta] + \frac{\varepsilon^2}{2} \delta^2 J[u^*; \eta] + O(\varepsilon^3)" />
                    ここで、<InlineMath math="u^*" /> は停留関数であるため、第一変分は定義により
                    <BlockMath math="\delta J[u^*; \eta] = 0" />
                    である。したがって、両辺の差をとると
                    <BlockMath math="J[u^* + \varepsilon \eta] - J[u^*] = \frac{\varepsilon^2}{2} \delta^2 J[u^*; \eta] + O(\varepsilon^3)" />
                    となる。右辺の主要項である第二変分が正（<InlineMath math="\delta^2 J > 0" />）であれば、十分に小さい <InlineMath math="\varepsilon > 0" /> に対して
                    <BlockMath math="J[u^* + \varepsilon \eta] - J[u^*] > 0" />
                    が成り立つ。これは、<InlineMath math="u^*" /> の近傍において汎関数の値が <InlineMath math="J[u^*]" /> より大きいこと、すなわち <InlineMath math="u^*" /> が極小であることを示している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に、最も単純かつ重要な例である「最短経路（直線）」について、第二変分を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (弧長汎関数の第二変分)">
                <p>
                    弧長汎関数のラグランジアン <InlineMath math="F = \sqrt{1 + (u')^2}" /> を考える。
                    偏導関数を計算すると、
                    <BlockMath math="F_u = 0, \quad F_{u'} = \frac{u'}{\sqrt{1 + (u')^2}}" />
                    さらに 2 階偏導関数は、
                    <BlockMath math="F_{uu} = 0, \quad F_{uu'} = 0, \quad F_{u'u'} = \frac{1}{(1 + (u')^2)^{3/2}}" />
                    となる。したがって、第二変分は
                    <BlockMath math="\delta^2 J[u; \eta] = \int_a^b \frac{(\eta')^2}{(1 + (u')^2)^{3/2}} \, dx" />
                    である。任意の <InlineMath math="\eta \neq 0" /> に対して <InlineMath math="\eta' \not\equiv 0" /> であり、分母は常に正であるため、
                    <BlockMath math="\delta^2 J[u; \eta] > 0" />
                    が成り立つ。これにより、直線（停留関数）が常に長さを極小にすることが 2 次のオーダーまで確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="弱極小と強極小">
                <p>
                    変分法における「極小」には、変分の考え方によって 2 つのレベルがあります。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <b>弱極小</b>：関数 <InlineMath math="\eta" /> だけでなく、その導関数 <InlineMath math="\eta'" /> も十分に小さい範囲での極小。
                    </li>
                    <li>
                        <b>強極小</b>：関数 <InlineMath math="\eta" /> だけが小さければ、<InlineMath math="\eta'" /> が大きくても（ギザギザな変分でも）成り立つ極小。
                    </li>
                </ul>
                <p className="mt-4">
                    第二変分による判定は、通常「弱極小」を保証するものです。
                    強極小であることを示すには、後述するヤコビの条件（§4.3）やワイエルシュトラスの条件などの、より強力な判定法が必要となります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                第二変分が全体として正であるためには、まず各点においてラグランジアンが「凸」であることが必要です。
                次節では、この局所的な必要条件であるルジャンドル条件について詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第二変分は、汎関数をパラメータ <InlineMath math="\varepsilon" /> で 2 回微分し、<InlineMath math="\varepsilon=0" /> としたものである。</li>
                    <li>積分布分汎関数の第二変分は、ラグランジアンの 2 階偏導関数を用いた積分式で表される。</li>
                    <li>すべての変分方向に対して第二変分が正であることは、停留関数が弱極小を与えるための条件となる。</li>
                    <li>弧長汎関数の場合、第二変分が常に正であることを用いて、直線の最短性を数学的に裏付けることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
