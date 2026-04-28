import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ManifoldsWithBoundary() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに扱ってきた多様体は、各点が必ず全方向（<InlineMath math="\mathbb{R}^n" /> と同相な近傍）に広がっている「境界のない」空間でした（例えば球面やトーラス）。
                しかし、ストークスの定理（「領域上の積分」と「その境界上の積分」を結びつける定理）を定式化するためには、閉区間 <InlineMath math="[a,b]" /> や閉球体のような「端（境界）」を持つ空間を多様体として扱う必要があります。
                これが<strong>境界付き多様体（Manifold with boundary）</strong>の概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">境界付き多様体の定義</h2>

            <p className="leading-relaxed">
                境界付き多様体を定義するためには、局所的なモデル空間として <InlineMath math="\mathbb{R}^n" /> 全体ではなく、「上半空間」を採用します。
            </p>

            <ContentBox type="definition" title="Definition 6.4-1 (境界付き多様体)">
                <p>
                    <InlineMath math="n" /> 次元<strong>上半空間（upper half-space）</strong> <InlineMath math="\mathbb{H}^n" /> を次のように定義する。
                </p>
                <BlockMath math="\mathbb{H}^n = \{ (x^1, \ldots, x^n) \in \mathbb{R}^n \mid x^n \geq 0 \}" />
                <p className="mt-2">
                    位相空間 <InlineMath math="M" /> が <InlineMath math="n" /> 次元<strong>境界付き多様体（manifold with boundary）</strong>であるとは、<InlineMath math="M" /> がハウスドルフかつ第二可算であり、各点 <InlineMath math="p \in M" /> が <InlineMath math="\mathbb{H}^n" /> の（相対位相における）開集合と同相な開近傍を持つことである。
                </p>
                <p className="mt-2">
                    この同相写像 <InlineMath math="\varphi : U \to \varphi(U) \subset \mathbb{H}^n" /> を境界付き多様体のチャートと呼ぶ。
                    <InlineMath math="\varphi(p)" /> の第 <InlineMath math="n" /> 成分が <InlineMath math="0" />（すなわち <InlineMath math="x^n = 0" />）となるような点 <InlineMath math="p" /> の集合を、<InlineMath math="M" /> の<strong>境界（boundary）</strong>と呼び、<InlineMath math="\partial M" /> と表す。
                    境界でない点（<InlineMath math="x^n > 0" />）の集合を<strong>内部（interior）</strong>と呼び、<InlineMath math="\mathrm{Int}(M)" /> と表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                境界付き多様体の座標変換も、境界のない多様体と同様に滑らかであることが要求されます（上半空間上の滑らかな写像は、<InlineMath math="\mathbb{R}^n" /> の開集合への滑らかな拡張を持つものとして定義されます）。
                身近な例を挙げてみましょう。
            </p>

            <ContentBox type="example" title="Example 6.4-1">
                <p>
                    <strong>閉区間：</strong>
                    実数直線上の閉区間 <InlineMath math="[0, 1]" /> は、1次元境界付き多様体である。
                    内部は開区間 <InlineMath math="(0, 1)" /> であり、境界は2点からなる集合 <InlineMath math="\partial[0, 1] = \{0, 1\}" /> である。
                    点 <InlineMath math="0" /> の近傍 <InlineMath math="[0, 1/2)" /> は上半空間 <InlineMath math="\mathbb{H}^1 = [0, \infty)" /> の開集合と同相である。
                </p>
                <p className="mt-4">
                    <strong>閉球体：</strong>
                    <InlineMath math="\mathbb{R}^n" /> 内の単位閉球体 <InlineMath math="\bar{B}^n = \{ x \in \mathbb{R}^n \mid \|x\| \leq 1 \}" /> は、<InlineMath math="n" /> 次元境界付き多様体である。
                    内部は開球体 <InlineMath math="B^n" /> であり、境界は <InlineMath math="(n-1)" /> 次元球面 <InlineMath math="\partial\bar{B}^n = S^{n-1}" /> である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この例からもわかるように、<InlineMath math="n" /> 次元境界付き多様体の境界 <InlineMath math="\partial M" /> は、それ自身が <InlineMath math="(n-1)" /> 次元の（境界を持たない）多様体となります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-1">
                <p>
                    <InlineMath math="M" /> を <InlineMath math="n" /> 次元境界付き多様体とする。その境界 <InlineMath math="\partial M" /> は、<InlineMath math="(n-1)" /> 次元の滑らかな多様体（境界なし）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> のアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> をとる。
                    境界上の点 <InlineMath math="p \in \partial M" /> を含むチャート <InlineMath math="(U_\alpha, \varphi_\alpha)" /> に対して、<InlineMath math="V_\alpha = U_\alpha \cap \partial M" /> とし、写像 <InlineMath math="\psi_\alpha : V_\alpha \to \mathbb{R}^{n-1}" /> を
                </p>
                <BlockMath math="\psi_\alpha(q) = (x^1(q), \ldots, x^{n-1}(q)) \quad (\text{ただし } \varphi_\alpha(q) = (x^1(q), \ldots, x^{n-1}(q), 0))" />
                <p className="mt-2">
                    で定義する。この <InlineMath math="\psi_\alpha" /> は <InlineMath math="V_\alpha" /> から <InlineMath math="\mathbb{R}^{n-1}" /> の開集合への同相写像を与える。
                </p>
                <p className="mt-2">
                    2つのチャート <InlineMath math="V_\alpha, V_\beta" /> が交わる部分での座標変換 <InlineMath math="\psi_\beta \circ \psi_\alpha^{-1}" /> を考える。
                    これは <InlineMath math="M" /> の座標変換 <InlineMath math="\varphi_\beta \circ \varphi_\alpha^{-1}" /> を <InlineMath math="x^n = 0" /> の超平面に制限したものである。
                    <InlineMath math="M" /> の座標変換は滑らかであり、かつ境界（<InlineMath math="x^n = 0" />）を境界（<InlineMath math="y^n = 0" />）に写すため、制限された写像も <InlineMath math="\mathbb{R}^{n-1}" /> の開集合間の滑らかな写像となる。
                    したがって、<InlineMath math="\{(V_\alpha, \psi_\alpha)\}" /> は <InlineMath math="\partial M" /> の <InlineMath math="(n-1)" /> 次元滑らかなアトラスをなす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">誘導される向き付け</h2>

            <p className="leading-relaxed">
                ストークスの定理 <InlineMath math="\int_M d\omega = \int_{\partial M} \omega" /> が正しい符号で成り立つためには、<InlineMath math="M" /> の向き付けから <InlineMath math="\partial M" /> の向き付けを「正しく」決めるルールが必要です。
                このルールは「外向き法線優先（outward normal first）」の規約と呼ばれます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-2">
                <p>
                    <InlineMath math="M" /> が向き付けられた <InlineMath math="n" /> 次元境界付き多様体であるとき、その境界 <InlineMath math="\partial M" /> には自然な向き付けが誘導される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p \in \partial M" /> における接空間 <InlineMath math="T_pM" /> は <InlineMath math="n" /> 次元であり、<InlineMath math="T_p(\partial M)" /> はその <InlineMath math="(n-1)" /> 次元部分空間である。
                    <InlineMath math="T_pM" /> のベクトル <InlineMath math="\nu" /> で、<InlineMath math="T_p(\partial M)" /> に属さず、かつ多様体の「外側」を向いているもの（すなわち、局所座標で <InlineMath math="\nu^n < 0" /> となるもの）を<strong>外向き法線ベクトル（outward normal vector）</strong>と呼ぶ。
                </p>
                <p className="mt-2">
                    <InlineMath math="\partial M" /> の点 <InlineMath math="p" /> における接空間 <InlineMath math="T_p(\partial M)" /> の基底 <InlineMath math="(v_1, \ldots, v_{n-1})" /> が<strong>正の向き</strong>であるとは、外向き法線ベクトル <InlineMath math="\nu" /> を先頭に付け加えた <InlineMath math="n" /> 個のベクトルの組
                </p>
                <BlockMath math="(\nu, v_1, \ldots, v_{n-1})" />
                <p className="mt-2">
                    が、<InlineMath math="M" /> の接空間 <InlineMath math="T_pM" /> の正の向きの基底となることであると定義する。
                </p>
                <p className="mt-2">
                    この定義が <InlineMath math="\nu" /> の選び方に依存しないことを示す。別の外向き法線ベクトル <InlineMath math="\tilde{\nu}" /> をとると、<InlineMath math="\tilde{\nu} = a\nu + w" />（<InlineMath math="a > 0" />、<InlineMath math="w \in T_p(\partial M)" />）と書ける。
                    基底の変換行列の行列式を計算すると、第1列が <InlineMath math="(a, *, \ldots, *)" /> であり、残りのブロックは単位行列となるため、行列式は <InlineMath math="a > 0" /> となる。
                    したがって、向きは保たれ、<InlineMath math="\partial M" /> に矛盾のない大域的な向き付けが誘導される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この規約が、1次元の場合にどのように働くかを確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 6.4-2 (閉区間の境界の向き付け)">
                <p>
                    閉区間 <InlineMath math="M = [0, 1]" /> に、標準的な向き（<InlineMath math="\partial/\partial x" /> が正）を与える。
                    境界は <InlineMath math="\partial M = \{0\} \cup \{1\}" /> である。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="1" /> における外向き法線ベクトルは <InlineMath math="\nu = \partial/\partial x" />（正の向き）である。
                    0次元多様体（点）の「基底」は空集合であり、その向きは符号 <InlineMath math="+1" /> または <InlineMath math="-1" /> で表される。
                    規約「<InlineMath math="(\nu)" /> が <InlineMath math="M" /> の正の向き」より、<InlineMath math="\nu" /> 自身が正の向きなので、点 <InlineMath math="1" /> の向き付けは <InlineMath math="+1" /> となる。
                </p>
                <p className="mt-2">
                    一方、点 <InlineMath math="0" /> における外向き法線ベクトルは <InlineMath math="\nu = -\partial/\partial x" />（負の向き）である。
                    規約「<InlineMath math="(\nu)" /> が <InlineMath math="M" /> の正の向き」を満たすためには、点 <InlineMath math="0" /> 自身の向き付けを <InlineMath math="-1" /> としなければならない（<InlineMath math="(-1) \times (-\partial/\partial x) = \partial/\partial x" /> が正の向きとなるため）。
                </p>
                <p className="mt-2">
                    したがって、誘導される境界の向き付けは
                </p>
                <BlockMath math="\partial[0, 1] = \{1\} \cup (-\{0\})" />
                <p className="mt-2">
                    となる。これが、次節のストークスの定理を微分積分学の基本定理 <InlineMath math="\int_0^1 f'(x)dx = f(1) - f(0)" /> に帰着させるための「マイナス符号」の幾何学的な起源である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>境界付き多様体は、上半空間 <InlineMath math="\mathbb{H}^n" /> を局所モデルとする空間である。</li>
                    <li><InlineMath math="n" /> 次元境界付き多様体の境界 <InlineMath math="\partial M" /> は、<InlineMath math="(n-1)" /> 次元の境界を持たない多様体となる。</li>
                    <li><InlineMath math="M" /> が向き付けられているとき、<InlineMath math="\partial M" /> には「外向き法線優先」の規約により自然な向き付けが誘導される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
