import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LegendreCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では停留関数が弱極小であることを判定するために第二変分を用いましたが、第二変分がすべての変分方向に対して正になるためには、ラグランジアンが各点において満たすべき重要な条件があります。
                本節では、局所的な極小条件である<b>ルジャンドル条件</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルジャンドル条件の導出</h2>

            <p className="leading-relaxed">
                停留関数が極小を与えるならば、そのまわりの第二変分は「どの方向へも非負」でなければなりません。これを各点ごとの条件に翻訳します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (ルジャンドル条件)">
                <p>
                    停留関数 <InlineMath math="u^*" /> が汎関数 <InlineMath math="J[u]" /> の弱極小を与えるならば、区間 <InlineMath math="[a, b]" /> の各点において
                    <BlockMath math="F_{u'u'}(x, u^*, (u^*)') \ge 0" />
                    が成立しなければならない。また、厳格な弱極小（<InlineMath math="\delta^2 J > 0" />）においては <InlineMath math="F_{u'u'} > 0" /> であることが必要条件となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ある点 <InlineMath math="x_0 \in (a, b)" /> において、<InlineMath math="F_{u'u'} (x_0) < 0" /> であると仮定する。
                    このとき、十分小さい <InlineMath math="\varepsilon > 0" /> に対して、区間 <InlineMath math="[x_0 - \varepsilon, x_0 + \varepsilon]" /> 外では 0 で、その内部で急峻に変化し <InlineMath math="\eta'" /> が非常に大きい「山型」の変分を構成する。
                </p>
                <p>
                    第二変分の積分式
                    <BlockMath math="\delta^2 J = \int_{x_0-\varepsilon}^{x_0+\varepsilon} (F_{uu} \eta^2 + 2F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2) \, dx" />
                    において、<InlineMath math="\varepsilon \to 0" /> としたとき、<InlineMath math="\eta^2" /> や <InlineMath math="\eta \eta'" /> を含む項に比べ、<InlineMath math="(\eta')^2" /> を含む項が圧倒的に支配的になる。
                    この微小区間において <InlineMath math="F_{u'u'} < 0" /> であれば、第二変分全体を負にすることが可能となり、極小であることに矛盾する。
                    したがって、すべての点において <InlineMath math="F_{u'u'} \ge 0" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体例として、重要な変分問題（最速降下線）についてルジャンドル条件を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (最速降下線のルジャンドル条件)">
                <p>
                    最速降下線問題のラグランジアン <InlineMath math="F = \sqrt{\frac{1 + (y')^2}{y}}" /> を考える（下向きを正とする）。
                    これを <InlineMath math="y'" /> で 2 回偏微分すると、
                    <BlockMath math="F_{y'} = \frac{1}{\sqrt{y}} \cdot \frac{y'}{\sqrt{1 + (y')^2}}, \quad F_{y'y'} = \frac{1}{\sqrt{y} (1 + (y')^2)^{3/2}}" />
                    となる。サイクロイド解（停留関数）上では常に <InlineMath math="y > 0" /> であるため、<InlineMath math="F_{y'y'} > 0" /> が全域で成り立つ。
                    これにより、最速降下線がルジャンドル条件（局所的な極小条件）を満足していることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                逆に、ルジャンドル条件が破れる（または判定不能になる）例を見ることで、この条件の役割をより明確に理解できます。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (ルジャンドル条件が判定不能な例)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_{-1}^1 (u')^3 \, dx" /> を考える。
                    ラグランジアン <InlineMath math="F = (u')^3" /> に対して、オイラー＝ラグランジュ方程式を立てると
                    <BlockMath math="\frac{d}{dx} (3(u')^2) = 0 \implies u' = \text{const}" />
                    となり、固定端 <InlineMath math="u(-1) = u(1) = 0" /> を満たす停留関数は直線 <InlineMath math="u^* = 0" /> である。
                    このとき <InlineMath math="F_{u'u'} = 6u'" /> であり、<InlineMath math="u^* = 0" /> 上では <InlineMath math="F_{u'u'} = 0" /> となる。
                    第二変分を計算すると <InlineMath math="\delta^2 J = \int_{-1}^1 6(u') (\eta')^2 \, dx = 0" /> となり、このオーダーでは極小か極大かを判断できない。
                    実際、変分を <InlineMath math="u + \varepsilon \eta" /> とすると、<InlineMath math="J = \varepsilon^3 \int (\eta')^3 \, dx" /> となり、<InlineMath math="\varepsilon" /> の符号によって値が正負に振れるため、直線は極値を与えない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">必要条件の意味</h2>

            <p className="leading-relaxed">
                ルジャンドル条件 <InlineMath math="F_{u'u'} \ge 0" /> は、ラグランジアン <InlineMath math="F" /> を変数 <InlineMath math="u'" /> の関数とみなしたとき、そのグラフがいわゆる「下に凸」の形状をしていることを意味します。
            </p>

            <ContentBox type="remark" title="ルジャンドル条件と凸性">
                <p>
                    ルジャンドル条件が満たされていることは、その停留点付近において「関数を小さく（または大きく）曲げるためのエネルギーコストが正である」ことを直感的に示しています。
                    もし <InlineMath math="F_{u'u'} < 0" /> であれば、より急激な振動（高い周波数の変分）を加えるほど汎関数の値が小さくなり、極小状態を維持できなくなります。
                    現代の数学（凸解析）の視点からは、この条件はラグランジアンの凸性と深く結びついており、強極小性を議論する上で不可欠な前提となります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ルジャンドル条件は「各点」の性質に基づく必要条件ですが、これだけで極小性を結論づけることはできません。
                区間全体を通した安定性を検証するためには、次節で学ぶヤコビ方程式と共役点の概念が必要です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ルジャンドルの必要条件は、ラグランジアンの <InlineMath math="u'" /> に関する 2 階偏導関数 <InlineMath math="F_{u'u'}" /> が全域で非負であることを要求する。</li>
                    <li>この条件は、非常に急峻な（高周波な）変分に対して汎関数がどう反応するかを規制している。</li>
                    <li>最速降下線や弧長汎関数のような多くの物理・幾何学的問題では、この条件は自然に満たされる。</li>
                    <li>ルジャンドル条件は局所的な凸性を保証するが、区間全体での最短性（大域的安定性）については別途検討が必要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
