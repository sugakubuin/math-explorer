import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StokesTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体上の微積分における最大の到達点の一つが、<strong>一般ストークスの定理（Generalized Stokes' theorem）</strong>です。
                この定理は、微分積分学の基本定理、グリーンの定理、ガウスの発散定理、古典的なストークスの定理など、これまで別々に学んできたすべての積分公式を、たった一つの美しく簡潔な等式に統合します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般ストークスの定理</h2>

            <p className="leading-relaxed">
                前節で準備した「境界の向き付け」と、前章で準備した「外微分」を用いることで、定理の主張は驚くほどシンプルになります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.5-1 (ストークスの定理)">
                <p>
                    <InlineMath math="M" /> を向き付けられた <InlineMath math="n" /> 次元境界付き多様体とし、<InlineMath math="\partial M" /> には誘導された向き付けが与えられているとする。
                    <InlineMath math="\omega \in \Omega^{n-1}(M)" /> をコンパクトな台をもつ <InlineMath math="(n-1)" />-形式とするとき、以下の等式が成り立つ。
                </p>
                <BlockMath math="\int_M d\omega = \int_{\partial M} \omega" />
                <p className="mt-2">
                    （ただし、<InlineMath math="\partial M = \emptyset" /> のときは右辺の積分は <InlineMath math="0" /> と解釈する。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明は、1の分割を用いて多様体全体の問題を局所的なチャート（上半空間 <InlineMath math="\mathbb{H}^n" />）の問題に帰着させ、そこで微分積分学の基本定理を適用することで行う。
                </p>
                <p className="mt-2">
                    <strong>Step 1: 局所化</strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="M" /> の向き付けられたアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> と、それに従属する1の分割 <InlineMath math="\{\rho_\alpha\}" /> をとる。
                    <InlineMath math="\omega = \sum_\alpha \rho_\alpha \omega" /> と分解できる。<InlineMath math="d" /> と積分の線形性から、各 <InlineMath math="\alpha" /> について
                </p>
                <BlockMath math="\int_M d(\rho_\alpha \omega) = \int_{\partial M} \rho_\alpha \omega" />
                <p className="mt-2">
                    を示せば十分である。以下、<InlineMath math="\rho_\alpha \omega" /> を単に <InlineMath math="\omega" /> と書き、<InlineMath math="\omega" /> は1つのチャート <InlineMath math="U" /> の内部にコンパクトな台を持つと仮定する。
                    引き戻しにより、<InlineMath math="U" /> を <InlineMath math="\mathbb{H}^n" /> の開集合と同一視してよい。
                </p>
                <p className="mt-4">
                    <strong>Step 2: <InlineMath math="\mathbb{H}^n" /> 上での計算</strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="\omega" /> は <InlineMath math="(n-1)" />-形式であるから、
                </p>
                <BlockMath math="\omega = \sum_{i=1}^n f_i(x) \, dx^1 \wedge \cdots \wedge \widehat{dx^i} \wedge \cdots \wedge dx^n" />
                <p className="mt-2">
                    と書ける（<InlineMath math="\widehat{dx^i}" /> はその項を除くことを意味する）。外微分をとると、
                </p>
                <BlockMath math="\begin{aligned} d\omega &= \sum_{i=1}^n df_i \wedge dx^1 \wedge \cdots \wedge \widehat{dx^i} \wedge \cdots \wedge dx^n \\ &= \sum_{i=1}^n \left( \sum_{j=1}^n \frac{\partial f_i}{\partial x^j} dx^j \right) \wedge dx^1 \wedge \cdots \wedge \widehat{dx^i} \wedge \cdots \wedge dx^n \end{aligned}" />
                <p className="mt-2">
                    ウェッジ積の性質から <InlineMath math="j \neq i" /> の項は消え、<InlineMath math="j = i" /> の項だけが残る。<InlineMath math="dx^i" /> を元の位置に戻すために <InlineMath math="i-1" /> 回の交換が必要なので、
                </p>
                <BlockMath math="d\omega = \sum_{i=1}^n (-1)^{i-1} \frac{\partial f_i}{\partial x^i} dx^1 \wedge \cdots \wedge dx^n" />
                <p className="mt-2">
                    となる。これを <InlineMath math="\mathbb{H}^n" /> 上で積分する。
                </p>
                <BlockMath math="\int_{\mathbb{H}^n} d\omega = \sum_{i=1}^n (-1)^{i-1} \int_{\mathbb{H}^n} \frac{\partial f_i}{\partial x^i} dx^1 \cdots dx^n" />
                <p className="mt-2">
                    フビニの定理により、<InlineMath math="x^i" /> についての積分を先に実行する。
                    <InlineMath math="i < n" /> のとき、<InlineMath math="f_i" /> はコンパクトな台を持つため、<InlineMath math="x^i \to \pm\infty" /> で <InlineMath math="0" /> となる。微分積分学の基本定理より、
                </p>
                <BlockMath math="\int_{-\infty}^\infty \frac{\partial f_i}{\partial x^i} dx^i = f_i(\ldots, \infty, \ldots) - f_i(\ldots, -\infty, \ldots) = 0 - 0 = 0" />
                <p className="mt-2">
                    となるため、<InlineMath math="i < n" /> の項の積分はすべて <InlineMath math="0" /> である。
                    残るのは <InlineMath math="i = n" /> の項のみである。このとき、<InlineMath math="x^n" /> の積分区間は <InlineMath math="[0, \infty)" /> であるから、
                </p>
                <BlockMath math="\begin{aligned} \int_0^\infty \frac{\partial f_n}{\partial x^n} dx^n &= f_n(x^1, \ldots, x^{n-1}, \infty) - f_n(x^1, \ldots, x^{n-1}, 0) \\ &= 0 - f_n(x^1, \ldots, x^{n-1}, 0) \end{aligned}" />
                <p className="mt-2">
                    となる。したがって、
                </p>
                <BlockMath math="\begin{aligned} \int_{\mathbb{H}^n} d\omega &= (-1)^{n-1} \int_{\mathbb{R}^{n-1}} (-f_n(x^1, \ldots, x^{n-1}, 0)) \, dx^1 \cdots dx^{n-1} \\ &= (-1)^n \int_{\mathbb{R}^{n-1}} f_n(x^1, \ldots, x^{n-1}, 0) \, dx^1 \cdots dx^{n-1} \end{aligned}" />
                <p className="mt-4">
                    <strong>Step 3: 境界上の積分との比較</strong>
                </p>
                <p className="mt-2">
                    一方、右辺の <InlineMath math="\int_{\partial M} \omega" /> を計算する。<InlineMath math="\partial M" /> は <InlineMath math="x^n = 0" /> の超平面であり、包含写像 <InlineMath math="\iota : \partial \mathbb{H}^n \to \mathbb{H}^n" /> による引き戻しを考える。
                    <InlineMath math="\iota^*(dx^n) = d(\iota^*x^n) = d(0) = 0" /> であるから、<InlineMath math="\omega" /> のうち <InlineMath math="dx^n" /> を含む項はすべて <InlineMath math="0" /> になる。
                    残るのは <InlineMath math="i = n" /> の項のみである。
                </p>
                <BlockMath math="\iota^*\omega = f_n(x^1, \ldots, x^{n-1}, 0) \, dx^1 \wedge \cdots \wedge dx^{n-1}" />
                <p className="mt-2">
                    前節で確認したように、外向き法線優先の規約により、<InlineMath math="\partial\mathbb{H}^n" /> の誘導される向き付けは、標準的な向き付け <InlineMath math="dx^1 \wedge \cdots \wedge dx^{n-1}" /> に対して <InlineMath math="(-1)^n" /> の符号を持つ（法線ベクトル <InlineMath math="-\partial/\partial x^n" /> を先頭に持ってくるため）。
                    したがって、境界上の積分は
                </p>
                <BlockMath math="\int_{\partial\mathbb{H}^n} \omega = (-1)^n \int_{\mathbb{R}^{n-1}} f_n(x^1, \ldots, x^{n-1}, 0) \, dx^1 \cdots dx^{n-1}" />
                <p className="mt-2">
                    となり、Step 2 の結果と完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理が、ベクトル解析で学んだ古典的な定理をどのように含んでいるかを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 6.5-1 (微分積分学の基本定理)">
                <p>
                    <InlineMath math="M = [0, 1]" />（1次元多様体）、<InlineMath math="\omega = f \in C^\infty([0,1])" />（0-形式）とする。
                </p>
                <p className="mt-2">
                    外微分は <InlineMath math="d\omega = df = f'(x)dx" /> である。
                    境界は <InlineMath math="\partial M = \{0\} \cup \{1\}" /> であり、誘導される向き付けは <InlineMath math="\{1\}" /> が正、<InlineMath math="\{0\}" /> が負であった（Example 6.4-2）。
                    ストークスの定理を適用すると、
                </p>
                <BlockMath math="\int_{[0, 1]} df = \int_{\partial[0, 1]} f = f(1) - f(0)" />
                <p className="mt-2">
                    となり、これは微分積分学の基本定理そのものである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-2 (グリーンの定理)">
                <p>
                    <InlineMath math="M \subset \mathbb{R}^2" /> を滑らかな境界を持つ有界領域（2次元多様体）、<InlineMath math="\omega = P(x,y)\,dx + Q(x,y)\,dy" />（1-形式）とする。
                </p>
                <p className="mt-2">
                    外微分を計算すると、
                </p>
                <BlockMath math="\begin{aligned} d\omega &= dP \wedge dx + dQ \wedge dy \\ &= (P_x\,dx + P_y\,dy) \wedge dx + (Q_x\,dx + Q_y\,dy) \wedge dy \\ &= P_y\,dy \wedge dx + Q_x\,dx \wedge dy \\ &= \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \wedge dy \end{aligned}" />
                <p className="mt-2">
                    ストークスの定理を適用すると、
                </p>
                <BlockMath math="\int_M \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \wedge dy = \oint_{\partial M} P\,dx + Q\,dy" />
                <p className="mt-2">
                    となり、これは平面におけるグリーンの定理である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-3 (ガウスの発散定理)">
                <p>
                    <InlineMath math="M \subset \mathbb{R}^3" /> を有界領域、<InlineMath math="\boldsymbol{F} = (F_1, F_2, F_3)" /> をベクトル場とする。
                    これに対応する2-形式を <InlineMath math="\omega = F_1 \, dy \wedge dz + F_2 \, dz \wedge dx + F_3 \, dx \wedge dy" /> とおく。
                </p>
                <p className="mt-2">
                    外微分を計算すると、
                </p>
                <BlockMath math="\begin{aligned} d\omega &= dF_1 \wedge dy \wedge dz + dF_2 \wedge dz \wedge dx + dF_3 \wedge dx \wedge dy \\ &= \frac{\partial F_1}{\partial x} dx \wedge dy \wedge dz + \frac{\partial F_2}{\partial y} dy \wedge dz \wedge dx + \frac{\partial F_3}{\partial z} dz \wedge dx \wedge dy \\ &= \left( \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z} \right) dx \wedge dy \wedge dz \\ &= \mathrm{div}(\boldsymbol{F}) \, dx \wedge dy \wedge dz \end{aligned}" />
                <p className="mt-2">
                    一方、境界 <InlineMath math="\partial M" /> 上での積分は、外向き単位法線ベクトルを <InlineMath math="\boldsymbol{n}" />、面積要素を <InlineMath math="dS" /> とすると、<InlineMath math="\omega" /> の引き戻しは <InlineMath math="(\boldsymbol{F} \cdot \boldsymbol{n}) dS" /> に等しいことが示される。
                    したがってストークスの定理より、
                </p>
                <BlockMath math="\int_M \mathrm{div}(\boldsymbol{F}) \, dV = \int_{\partial M} \boldsymbol{F} \cdot \boldsymbol{n} \, dS" />
                <p className="mt-2">
                    となり、これはガウスの発散定理である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ストークスの定理の意義">
                <p>
                    一般ストークスの定理は、単に計算公式として便利であるだけでなく、多様体の「幾何学（境界 <InlineMath math="\partial" />）」と「解析学（外微分 <InlineMath math="d" />）」が互いに双対な関係にあることを示しています。
                    この双対性は、次章で学ぶ「ド・ラームコホモロジー」と、代数的トポロジー（4-8）で学ぶ「特異ホモロジー」が同型になるという、ド・ラームの定理（Theorem 7.5-1）の根幹をなすものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一般ストークスの定理 <InlineMath math="\int_M d\omega = \int_{\partial M} \omega" /> は、領域上の外微分の積分が、境界上の元の形式の積分に等しいことを主張する。</li>
                    <li>この定理は、微分積分学の基本定理、グリーンの定理、ガウスの発散定理、古典的ストークスの定理をすべて統一する。</li>
                    <li>証明は、1の分割を用いて多様体を局所化し、上半空間における微分積分学の基本定理に帰着させることで行われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
