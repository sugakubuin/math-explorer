import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HigherOrderVariations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、ラグランジアンが未知関数の 1 階導関数の含んでいる場合を扱ってきました。
                しかし、物理学や工学の問題（例えば弾性梁の曲げなど）では、2 階以上の高階導関数を含む汎関数を扱う必要があります。
                本節では、高階導関数を含む場合や、複数の多変数関数による汎関数への拡張を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">オイラー＝ポアソン方程式</h2>

            <p className="leading-relaxed">
                2 階導関数 <InlineMath math="u''" /> を含む汎関数の極値が満たすべき方程式です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (オイラー＝ポアソン方程式)">
                <p>
                    2 階導関数を含む汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u', u'') \, dx" /> の極値関数 <InlineMath math="u^*" /> は、次の微分方程式
                    <BlockMath math="\frac{\partial F}{\partial u} - \frac{d}{dx} \left( \frac{\partial F}{\partial u'} \right) + \frac{d^2}{dx^2} \left( \frac{\partial F}{\partial u''} \right) = 0" />
                    を満たす。これを<b>オイラー＝ポアソン方程式</b>（Euler-Poisson Equation）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第一変分 <InlineMath math="\delta J = 0" /> の式は次の通り：
                    <BlockMath math="\delta J = \int_a^b \left( F_u \eta + F_{u'} \eta' + F_{u''} \eta'' \right) \, dx = 0" />
                    ここで、境界条件から <InlineMath math="\eta(a) = \eta(b) = 0" /> かつ <InlineMath math="\eta'(a) = \eta'(b) = 0" /> と仮定する。
                    部分積分を繰り返し行い、すべての項を <InlineMath math="\eta" /> にまとめる：
                    <BlockMath math="\begin{aligned} \int F_{u'} \eta' \, dx &= [F_{u'} \eta] - \int \frac{d}{dx}(F_{u'}) \eta \, dx \\ \int F_{u''} \eta'' \, dx &= [F_{u''} \eta'] - \int \frac{d}{dx}(F_{u''}) \eta' \, dx \\ &= [F_{u''} \eta'] - \left[ \frac{d}{dx}(F_{u''}) \eta \right] + \int \frac{d^2}{dx^2}(F_{u''}) \eta \, dx \end{aligned}" />
                    境界項がすべて消えることから、変分の基本補題により定理の結果が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (弾性梁の曲げ問題)">
                <p>
                    長さ <InlineMath math="L" />、ヤング率 <InlineMath math="E" />、断面二次モーメント <InlineMath math="I" /> の弾性梁の歪みエネルギーは
                    <BlockMath math="U[u] = \frac{1}{2} \int_0^L EI (u'')^2 \, dx" />
                    で表される（<InlineMath math="u" /> はたわみ）。ここに分布荷重 <InlineMath math="q(x)" /> によるポテンシャル <InlineMath math="-\int qu \, dx" /> を加えた全汎関数
                    <BlockMath math="J[u] = \int_0^L \left( \frac{EI}{2}(u'')^2 - qu \right) \, dx" />
                    に対してオイラー＝ポアソン方程式を適用すると：
                    <BlockMath math="-q - 0 + \frac{d^2}{dx^2}(EI u'') = 0 \implies EI u'''' = q" />
                    という梁の基礎方程式（ベルヌーイ＝オイラー梁）が得られる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="高階微分の出現と境界条件の増加">
                <p>
                    ラグランジアンに最高で $n$ 階の導関数が含まれる場合、得られる方程式は $2n$ 階の常微分方程式になります。
                    そのため、解を決定するために必要な端点条件の数も増えます。
                    境界における自然な挙動については、次章「境界条件とトランザーバリティ」で詳しく扱います。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変数の多い場合</h2>

            <p className="leading-relaxed">
                未知関数が複数（例えば 3 次元空間の座標など）ある場合への拡張です。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-2 (多変数の E-L 方程式)">
                <p>
                    複数の未知関数 <InlineMath math="u_1(x), \ldots, u_n(x)" /> を含む汎関数
                    <BlockMath math="J[u_1, \ldots, u_n] = \int_a^b F(x, u_1, \ldots, u_n, u_1', \ldots, u_n') \, dx" />
                    に対して、極値を与える関数は各 <InlineMath math="k = 1, \ldots, n" /> について独立にオイラー＝ラグランジュ方程式を満たす：
                    <BlockMath math="\frac{\partial F}{\partial u_k} - \frac{d}{dx} \left( \frac{\partial F}{\partial u_k'} \right) = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ある特定の成分 <InlineMath math="u_k" /> に対してのみ変分 <InlineMath math="\eta_k" /> を与え、他の成分の変分はすべて 0 とした特別な変分方向ベクトル
                    <BlockMath math="\boldsymbol{\eta} = (0, \ldots, 0, \eta_k, 0, \ldots, 0)" />
                    を考える。このとき、汎関数全体の第一変分 <InlineMath math="\delta J = 0" /> は、成分 <InlineMath math="u_k" /> に関する部分積分のみが残り、
                    <BlockMath math="\int_a^b \left( F_{u_k} - \frac{d}{dx} F_{u_k'} \right) \eta_k \, dx = 0" />
                    となる。これが任意の <InlineMath math="\eta_k" /> に対して成り立つため、変分の基本補題により各 <InlineMath math="k" /> に対して独立に E-L 方程式が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2 (3 次元空間での最短経路)">
                <p>
                    3 次元空間 <InlineMath math="\mathbb{R}^3" /> 内の曲線 <InlineMath math="(x(t), y(t), z(t))" /> の長さを最小にする問題を考える。
                    ラグランジアンは <InlineMath math="F = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}" /> である。
                    各座標成分に対して E-L 方程式を立てて計算すると、
                    <BlockMath math="\ddot{x} = 0, \quad \ddot{y} = 0, \quad \ddot{z} = 0" />
                    となり、解はいわゆる等速直線運動（直線）であることが導かれる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、変分法の中心的な実用ツールとなる微分方程式を導出し、様々な幾何的・物理的問題へ適用しました。
                次章では、これまでは暗黙のうちに「固定」されていた端点の条件を緩めた場合に、どのような自然な条件が現れるのか、より柔軟な境界問題について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2 階導関数を含む汎関数からは、4 階の微分方程式であるオイラー＝ポアソン方程式が得られる。</li>
                    <li>弾性梁の曲げ問題など、材料力学における重要な方程式は、変分原理から統一的に導出できる。</li>
                    <li>未知関数が複数の場合、各成分ごとに独立したオイラー＝ラグランジュ方程式が成立する。</li>
                    <li>多自由度系の物理（古典力学）や多変数の最短経路問題なども、この枠組みで一般的に記述可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
