import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EulerLagrangeDerivation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                Chapter 1 では、汎関数が極値をとるための必要条件が「第一変分がゼロになること（<InlineMath math="\delta J = 0" />）」であることを学びました。
                しかし、積分形式の条件のままでは具体的な解を求めるのは困難です。
                本節では、この積分条件を微分方程式の形に書き換えるための強力な道具である「変分の基本補題」と、それによって導かれる<b>オイラー＝ラグランジュ方程式</b>について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変分の基本補題</h2>

            <p className="leading-relaxed">
                積分値が常にゼロであることから、中身の関数がゼロであることを結論付けるための補題です。
            </p>

            <ContentBox type="lemma" title="Lemma 2.1-1 (変分の基本補題)">
                <p>
                    連続関数 <InlineMath math="g(x)" /> が、<InlineMath math="\eta(a) = \eta(b) = 0" /> を満たすすべての滑らかな関数（テスト関数）<InlineMath math="\eta(x)" /> に対して
                    <BlockMath math="\int_a^b g(x) \eta(x) \, dx = 0" />
                    を満たすならば、区間 <InlineMath math="[a, b]" /> 上で常に <InlineMath math="g(x) \equiv 0" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法で証明する。ある点 <InlineMath math="x_0 \in (a, b)" /> で <InlineMath math="g(x_0) > 0" /> であると仮定する。
                    <InlineMath math="g" /> は連続なので、<InlineMath math="x_0" /> の周りの小さな近傍 <InlineMath math="I = [x_0 - \delta, x_0 + \delta]" /> においても <InlineMath math="g(x) > 0" /> が成り立つ。
                </p>
                <p>
                    ここで、この小区間 <InlineMath math="I" /> の外側で 0 となり、内部で正の値をとる滑らかな関数 <InlineMath math="\eta(x)" />（例えば、<InlineMath math="\eta(x) = (x - (x_0 - \delta))^2 (x - (x_0 + \delta))^2" /> など）を構成することができる。
                    このとき、積分は
                    <BlockMath math="\int_a^b g(x) \eta(x) \, dx = \int_{x_0 - \delta}^{x_0 + \delta} g(x) \eta(x) \, dx > 0" />
                    となり、仮定に矛盾する。したがって <InlineMath math="g(x) = 0" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1 (基本補題の必要性)">
                <p>
                    もし <InlineMath math="\eta" /> に何の制約もなければ、例えば <InlineMath math="g(x) = x" /> (on <InlineMath math="[0, 1]" />) に対して <InlineMath math="\eta(x) = x(1-x)" /> を取ると、
                    <BlockMath math="\begin{aligned} \int_0^1 x \cdot x(1-x) \, dx &= \int_0^1 (x^2 - x^3) \, dx \\ &= \left[ \frac{x^3}{3} - \frac{x^4}{4} \right]_0^1 = \frac{1}{12} \neq 0 \end{aligned}" />
                    となる。つまり、積分がすべてのテスト関数に対して 0 であるという条件は非常に強力であり、それゆえに <InlineMath math="g \equiv 0" /> が導かれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">オイラー＝ラグランジュ方程式</h2>

            <p className="leading-relaxed">
                基本補題を用いて、汎関数の極値が満たすべき微分方程式を導出します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.1-2 (オイラー＝ラグランジュ方程式)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> の極値を与える関数 <InlineMath math="u^*(x)" /> は、次の微分方程式を満たす：
                    <BlockMath math="\frac{\partial F}{\partial u} - \frac{d}{dx} \left( \frac{\partial F}{\partial u'} \right) = 0" />
                    これを<b>オイラー＝ラグランジュ方程式</b>（Euler-Lagrange Equation）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §1.3 で得られた第一変分の条件は：
                    <BlockMath math="\delta J[u; \eta] = \int_a^b (F_u \eta + F_{u'} \eta') \, dx = 0" />
                    である。第 2 項に対して部分積分を行う：
                    <BlockMath math="\int_a^b F_{u'} \eta' \, dx = \left[ F_{u'} \eta \right]_a^b - \int_a^b \frac{d}{dx}(F_{u'}) \eta \, dx" />
                    固定端条件より <InlineMath math="\eta(a) = \eta(b) = 0" /> なので、境界項は消える。よって第一変分は
                    <BlockMath math="\delta J = \int_a^b \left( F_u - \frac{d}{dx} F_{u'} \right) \eta \, dx = 0" />
                    となる。これが任意の <InlineMath math="\eta" /> に対して成り立つため、変分の基本補題により、括弧内は常に 0 でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2 (弧長汎関数への適用)">
                <p>
                    弧長汎関数 <InlineMath math="F = \sqrt{1 + (u')^2}" /> に対して、<InlineMath math="F_u = 0" /> および <InlineMath math="F_{u'} = \frac{u'}{\sqrt{1+(u')^2}}" /> である。
                    E-L 方程式を立てると：
                    <BlockMath math="\begin{aligned} 0 &- \frac{d}{dx} \left( \frac{u'}{\sqrt{1+(u')^2}} \right) = 0 \\ &\implies \frac{u'}{\sqrt{1+(u')^2}} = C \ (\text{定数}) \end{aligned}" />
                    これを <InlineMath math="u'" /> について解くと <InlineMath math="u' = \frac{C}{\sqrt{1-C^2}}" /> となり、これも定数である。
                    したがって <InlineMath math="u(x) = mx + n" /> となり、2 点間の最短経路が「直線」であることが示された。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="E-L 方程式の地位">
                <p>
                    E-L 方程式は、変分問題における「微分して 0」に対応する条件であり、変分法における最も中心的な方程式です。
                    この方程式の解は、必ずしも極値であるとは限りませんが、極値の候補として重要な役割を果たします。
                    このような関数を<b>停留関数</b>（Stationary Function）と呼びます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この方程式をさらに複雑な物理・幾何学の問題、例えば重力下での最速降下線問題などに応用していきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>変分の基本補題は、積分条件を点ごとの微分方程式条件に変換するための核心的なツールである。</li>
                    <li>オイラー＝ラグランジュ（E-L）方程式は、汎関数が極値をとるための必要条件である。</li>
                    <li>導出には「第一変分 = 0」の式に対する部分積分と、基本補題の適用が必要である。</li>
                    <li>弧長汎関数の場合、E-L 方程式を解くことで「2 点間の最短経路は直線である」という直感が証明される。</li>
                    <li>E-L 方程式の解は「停留関数」と呼ばれ、変分問題における極値の第一候補となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
