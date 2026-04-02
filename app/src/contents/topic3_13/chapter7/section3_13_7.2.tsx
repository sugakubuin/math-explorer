import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LocalGaussBonnetTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面の「幾何学（ガウス曲率）」と「曲線の曲がり方（測地曲率）」、そして「形（多角形の角度）」を結びつける美しい公式が、局所版のガウス＝ボンネの定理です。これは微分幾何学におけるグリーンの定理とも言うべきものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">局所版ガウス＝ボンネの定理</h2>

            <p className="leading-relaxed">
                曲面上の領域を囲む境界線を一周したとき、境界線の曲がり具合と領域内部の曲率の総和が、常に一定の値（<InlineMath math="2\pi" />）になるという法則です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.2-1 (局所版ガウス＝ボンネの定理)"
            >
                <p>
                    向き付け可能な正則曲面 <InlineMath math="S" /> 上の単連結な領域（穴のない領域）<InlineMath math="D" /> を考える。<InlineMath math="D" /> の境界 <InlineMath math="\partial D" /> は、区分的に滑らかな単純閉曲線であるとし、頂点（角が折れ曲がる点）を <InlineMath math="p_1, \dots, p_n" /> とする。
                </p>
                <p>
                    各頂点における外角（進行方向がどれだけ折れ曲がるか。すなわち <InlineMath math="\pi - \text{内角}" />）を <InlineMath math="\theta_i" /> とし、滑らかな辺に沿った測地曲率を <InlineMath math="\kappa_g" /> とする。
                    このとき、次の等式が成り立つ。
                    <BlockMath math="\int_{\partial D} \kappa_g \,ds + \iint_D K \,dA + \sum_{i=1}^n \theta_i = 2\pi" />
                    （ここで <InlineMath math="K" /> はガウス曲率、<InlineMath math="ds" /> は弧長素片、<InlineMath math="dA" /> は面積素片である。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この定理の証明は、ベクトル解析におけるグリーンの定理（3-1）の一般化である。
                </p>
                <p>
                    曲面 <InlineMath math="S" /> 上に正規直交標構場（動標構）を設定し、その回転の変化率を記述する「接続形式（1次微分形式）」を考える。
                    この接続形式を境界 <InlineMath math="\partial D" /> に沿って線積分すると、接ベクトルが境界を一周する間にどれだけ回転するかが得られる。これは測地曲率 <InlineMath math="\kappa_g" /> の積分と、角でのジャンプ（外角 <InlineMath math="\theta_i" /> の和）の合計に等しい。
                </p>
                <p>
                    一方、グリーンの定理（ストークスの定理）を用いてこの線積分を領域 <InlineMath math="D" /> 全体の面積分に変換すると、被積分関数として「接続形式の外微分」が現れる。
                    ガウス方程式（前章）によれば、この外微分はまさにガウス曲率 <InlineMath math="K" /> に等しい（曲率形式）。
                </p>
                <p>
                    平面（曲率 0）における単純閉曲線の接ベクトルの回転角の総和が <InlineMath math="2\pi" /> になること（ホイットニーの定理）に帰着させることで、この差分が <InlineMath math="2\pi" /> となることが示され、定理の式が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理を用いると、前節で紹介した「測地三角形の角の余剰」の公式をあっという間に導くことができます。
            </p>

            <ContentBox
                type="example"
                title="Example 7.2-1 (測地三角形への適用)"
            >
                <p>
                    領域 <InlineMath math="D" /> として、3つの辺がすべて測地線である測地三角形を考える。
                    測地線の定義より、すべての辺において測地曲率は <InlineMath math="\kappa_g = 0" /> である。
                </p>
                <p>
                    したがって、局所版ガウス＝ボンネの定理の第1項（線積分）はゼロになる。
                    <BlockMath math="0 + \iint_D K \,dA + \sum_{i=1}^3 \theta_i = 2\pi" />
                </p>
                <p>
                    頂点は3つあり、それぞれの外角 <InlineMath math="\theta_i" /> は内角 <InlineMath math="A, B, C" /> を用いて <InlineMath math="\theta_1 = \pi - A" />, <InlineMath math="\theta_2 = \pi - B" />, <InlineMath math="\theta_3 = \pi - C" /> と表せる。これを代入する。
                    <BlockMath math="\iint_D K \,dA + (\pi - A) + (\pi - B) + (\pi - C) = 2\pi" />
                </p>
                <p>
                    式を整理すると、
                    <BlockMath math="\iint_D K \,dA + 3\pi - (A + B + C) = 2\pi" />
                    <BlockMath math="A + B + C = \pi + \iint_D K \,dA" />
                    となり、Proposition 7.1-1 が一般の曲面に対しても成り立つことが証明された。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">曲率積分の位相的意味</h2>

            <p className="leading-relaxed">
                ガウス＝ボンネの定理は、私たちがよく知っている「平面上の図形の性質」を特別なケースとして含んでいます。
            </p>

            <ContentBox
                type="example"
                title="Example 7.2-2 (平面三角形の確認)"
            >
                <p>
                    平らな紙（平面）の上に描かれた三角形を考える。平面のガウス曲率は至る所 <InlineMath math="K = 0" /> である。
                </p>
                <p>
                    先の測地三角形の公式に <InlineMath math="K = 0" /> を代入すると、面積分の項がゼロになるため、
                    <BlockMath math="A + B + C = \pi + 0 = \pi \text{ （180度）}" />
                    となる。これは中学校の幾何学で習う「三角形の内角の和は180度」という定理そのものである。ユークリッド幾何の定理は、ガウス＝ボンネの定理の <InlineMath math="K=0" /> における帰結に過ぎないことがわかる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="局所版から大域版へ"
            >
                <p>
                    局所版ガウス＝ボンネの定理は「穴のない1つの領域（単連結領域）」についての定理でした。
                </p>
                <p>
                    では、もし曲面全体（例えば地球儀全体や、ドーナツの表面全体）にわたってガウス曲率 <InlineMath math="K" /> を積分するとどうなるでしょうか？
                    実は、曲面全体を小さな三角形に分割（三角測地分割）し、それぞれの三角形にこの局所版ガウス＝ボンネの定理を適用して足し合わせることで、驚くべき「大域的な定理」が導かれます。次節でその美しさを堪能しましょう。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>局所版ガウス＝ボンネの定理は、領域の境界の曲がり具合（<InlineMath math="\kappa_g, \theta_i" />）と内部の曲がり具合（<InlineMath math="K" />）の合計が <InlineMath math="2\pi" /> になることを主張する。</li>
                    <li>これを測地三角形に適用すると、辺の測地曲率がゼロであることから、内角の和に関する公式が直ちに導かれる。</li>
                    <li>平面（<InlineMath math="K=0" />）に適用すると、おなじみの「多角形の外角の和は360度」「三角形の内角の和は180度」というユークリッド幾何の定理と完全に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}