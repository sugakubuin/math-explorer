import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchyIntegralTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                コーシーの積分定理は、複素解析学において最も重要で、かつ「魔法」のような定理です。
                この定理は、正則性がもたらす凄まじい拘束力を浮き彫りにし、後の発展的な議論のすべてを支える土台となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの積分定理</h2>

            <p>
                定理の核となるのは、「正則な領域内を一周すると、積分は必ずゼロになる」という主張です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (コーシーの積分定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が <b>単連結領域</b> <InlineMath math="U" /> 上で正則であるとする。
                    このとき、<InlineMath math="U" /> 内の任意の閉曲線 <InlineMath math="\gamma" /> に対して、
                </p>
                <BlockMath math="\oint_\gamma f(z) \, dz = 0" />
                <p>
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f'(z)" /> が連続であると仮定し、グリーンの定理を用いる。<InlineMath math="f = u + iv" /> とし、<InlineMath math="\gamma" /> で囲まれた領域を <InlineMath math="D" /> とすると、
                </p>
                <BlockMath math="\begin{aligned} \oint_\gamma f \, dz = \iint_D &\left( -\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) dx dy \\ &+ i \iint_D \left( \frac{\partial u}{\partial x} - \frac{\partial v}{\partial y} \right) dx dy \end{aligned}" />
                <p>
                    コーシー・リーマンの方程式 <InlineMath math="u_x = v_y, u_y = -v_x" /> より、各被積分関数は <InlineMath math="0" /> となる。よって積分値は <InlineMath math="0" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                「単連結領域」とは、直感的には「穴のない領域」を指します。
                この条件がなぜ必要なのかは、この後の反例で詳しく見ていきます。
            </p>

            <ContentBox type="remark" title="証明の拡張とグルサの貢献">
                <p>
                    実用上はグリーンの定理による理解で十分ですが、数学的には <InlineMath math="f'(z)" /> の連続性を仮定せずに証明することが極めて重要です。この難問を解決したのが <b>グルサ（Goursat）</b> であり、その証明の核となるのが次に示す「グルサの補題」です。
                </p>
            </ContentBox>

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー・グルサの定理とグルサの補題</h2>

            <p>
                グルサは、正則性の定義（複素微分可能であること）のみから、積分定理を導き出しました。
            </p>

            <ContentBox type="lemma" title="Lemma 4.3-1 (グルサの補題)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="U" /> 内で正則であるとする。
                    <InlineMath math="U" /> 内に含まれる任意の三角形 <InlineMath math="\Delta" />（内部を含む）に対して、次が成立する。
                </p>
                <BlockMath math="\oint_{\partial \Delta} f(z) \, dz = 0" />
            </ContentBox>

            <ContentBox type="remark" title="グルサの補題と単連結性">
                <p>
                    よくある疑問として「この補題に単連結性の仮定は不要か？」というものがあります。結論として、<b>三角形に対しては不要</b>です。
                </p>
                <p>
                    「三角形 <InlineMath math="\Delta" /> が領域 <InlineMath math="U" /> 内に含まれる」と仮定した時点で、その三角形の内部に穴がないことが保証されるため（三角形はそれ自身が単連結）、領域全体のトポロジーを気にする必要がないのです。
                </p>
            </ContentBox>

            <p>
                では、グルサによる技巧的かつ鮮やかな証明を見てみましょう。この証明は、複素微分可能性という極限の性質を積分へとつなげるための「網」を絞っていくような構成になっています。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、三角形 <InlineMath math="\Delta_0" /> の各辺の中点を結び、4 つの小三角形 <InlineMath math="\Delta^{(1)}, \Delta^{(2)}, \Delta^{(3)}, \Delta^{(4)}" /> に分割する。
                    全体の境界 <InlineMath math="\partial \Delta_0" /> に沿った積分と、各小三角形の境界に沿った積分の和を比較すると、
                    <BlockMath math="\oint_{\partial \Delta_0} f(z) \, dz = \sum_{j=1}^4 \oint_{\partial \Delta^{(j)}} f(z) \, dz" />
                    が成り立つ。これは、内部に追加された境界線（中点どうしを結ぶ線）が、隣り合う小三角形どうしで<b>互いに逆向きに 1 回ずつ計算されるため、打ち消し合う</b>からである。
                </p>
                <p>
                    ここで、三角不等式を用いると、
                    <BlockMath math="\left| \oint_{\partial \Delta_0} f(z) \, dz \right| \leq \sum_{j=1}^4 \left| \oint_{\partial \Delta^{(j)}} f(z) \, dz \right|" />
                    となる。右辺の 4 つの積分のうち、その絶対値が最大であるものを <InlineMath math="\oint_{\partial \Delta_1} f(z) \, dz" /> とおくと、明らかに
                    <BlockMath math="\left| \oint_{\partial \Delta_0} f(z) \, dz \right| \leq 4 \left| \oint_{\partial \Delta_1} f(z) \, dz \right|" />
                    が導かれる。
                </p>
                <p>
                    この分割を繰り返し、三角形の列 <InlineMath math="\Delta_0 \supset \Delta_1 \supset \dots \supset \Delta_n \supset \dots" /> を作成する。このとき、
                    <BlockMath math="\left| \oint_{\partial \Delta_0} f(z) \, dz \right| \leq 4^n \left| \oint_{\partial \Delta_1} f(z) \, dz \right|" />
                    であり、<InlineMath math="\Delta_n" /> の周囲の長さ <InlineMath math="L_n" /> は <InlineMath math="L_n = L_0 / 2^n" /> となる。
                    これらの三角形は唯一の点 <InlineMath math="z_*" /> に収束する。
                </p>
                <p>
                    <InlineMath math="f(z)" /> は <InlineMath math="z_*" /> で微分可能であるから、
                    <BlockMath math="f(z) = f(z_*) + f'(z_*)(z - z_*) + \eta(z)(z - z_*)" />
                    （ただし <InlineMath math="z \to z_*" /> で <InlineMath math="\eta(z) \to 0" />）
                    と書ける。定数関数および一次関数 <InlineMath math="z" /> の閉路積分は、経路の形状に関わらず 0 である（§4.2 参照）。
                    したがって、
                    <BlockMath math="\oint_{\partial \Delta_n} f(z) \, dz = \oint_{\partial \Delta_n} \eta(z)(z - z_*) \, dz" />
                    となる。
                </p>
                <p>
                    任意の <InlineMath math="\epsilon > 0" /> に対し、十分大きな <InlineMath math="n" /> を取れば、<InlineMath math="\Delta_n" /> 内部で <InlineMath math="|\eta(z)| < \epsilon" /> とできる。
                    また、<InlineMath math="\Delta_n" /> 上の点において <InlineMath math="|z - z_*| \leq L_n" /> である。
                    これらを ML 不等式に適用すると、
                    <BlockMath math="\left| \oint_{\partial \Delta_n} f(z) \, dz \right| \leq \epsilon \cdot L_n \cdot L_n = \epsilon \frac{L_0^2}{4^n}" />
                    を得る。最後に、初めの 4 倍の不等式と組み合わせると、
                    <BlockMath math="\left| \oint_{\partial \Delta_0} f(z) \, dz \right| \leq 4^n \cdot \epsilon \frac{L_0^2}{4^n} = \epsilon \cdot L_0^2" />
                    となり、これが任意の <InlineMath math="\epsilon" /> で成り立つため、積分の値は 0 である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.3-2 (コーシー・グルサの定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が <b>単連結領域</b> <InlineMath math="U" /> 上で正則（微分可能）であれば、<InlineMath math="f'(z)" /> の連続性を仮定しなくとも、
                </p>
                <BlockMath math="\oint_\gamma f(z) \, dz = 0" />
                <p>
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の閉曲線 <InlineMath math="\gamma" /> を、直線の線分からなる<b>多角形軌跡</b>で近似することを考える（多角形近似）。
                </p>
                <p>
                    領域 <InlineMath math="U" /> が単連結であるとき、閉曲線 <InlineMath math="\gamma" /> で囲まれた内部領域はすべて <InlineMath math="U" /> に含まれる。この内部領域を細かな三角形の網（メッシュ）で敷き詰める（<b>三角形分割, Triangulation</b>）。
                    このとき、多角形上の積分は、内部にあるすべての三角形の境界（反時計回り）に沿った積分の合計に等しくなる。
                </p>
                <p>
                    各三角形の境界に沿った積分は、グルサの補題（Lemma 4.3-1）によりすべて 0 である。また、三角形どうしが接する内側の辺の積分は、互いに逆方向に 1 回ずつ計算されるため、Lemma 4.3-1 の証明と同様にすべて相殺される。
                </p>
                <p>
                    最後に残るのは多角形の外周（もともとの <InlineMath math="\gamma" /> の近似）だけとなり、その値は 0 である。近似を細かくしていくことで、もとの閉曲線 <InlineMath math="\gamma" /> 自体についても積分値が 0 であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの積分定理の応用例</h2>

            <p>
                定理を直接用いることで、複雑な経路に沿った積分計算を瞬時に解決できる場合があります。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (正則関数の周回積分)">
                <p>
                    複素平面上の任意の単純閉曲線 <InlineMath math="\gamma" /> に対して、次を計算せよ。
                </p>
                <BlockMath math="\oint_\gamma (z^2 + e^z) \, dz" />
                <p>
                    <b>解答：</b> 関数 <InlineMath math="f(z) = z^2 + e^z" /> は複素平面全体で微分可能（整関数）である。
                    複素平面全体は単連結領域であるため、コーシーの積分定理（Theorem 4.3-1）により、任意の閉曲線に対して
                </p>
                <BlockMath math="\oint_\gamma (z^2 + e^z) \, dz = 0" />
                <p>
                    となる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (特異点が外側にある場合)">
                <p>
                    実軸上の点 <InlineMath math="z=2" /> を中心とする半径 <InlineMath math="1" /> の円周 <InlineMath math="C: |z-2| = 1" /> に沿った次の積分を求めよ。
                </p>
                <BlockMath math="\oint_C \frac{1}{z^2 + 1} \, dz" />
                <p>
                    <b>解答：</b> 被積分関数 <InlineMath math="f(z) = \frac{1}{(z-i)(z+i)}" /> は <InlineMath math="z = \pm i" /> に特異点を持つ。
                    円 <InlineMath math="C" /> は中心が <InlineMath math="2" />、半径が <InlineMath math="1" /> であるため、その内部および境界は複素数 <InlineMath math="z" /> のうち <InlineMath math="1 \leq \text{Re}(z) \leq 3" /> を満たす領域の一部に含まれる。
                </p>
                <p>
                    特異点 <InlineMath math="z = \pm i" /> は明らかに円 <InlineMath math="C" /> の外部にある。
                    したがって、円 <InlineMath math="C" /> とその内部を含む単連結領域において <InlineMath math="f(z)" /> は正則であるから、コーシーの積分定理により
                </p>
                <BlockMath math="\oint_C \frac{1}{z^2 + 1} \, dz = 0" />
                <p>
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の適用不可能なケース</h2>

            <p>
                コーシーの積分定理が成立しない代表的な例を確認しましょう。これにより、領域のトポロジー（単連結性）の重要性が浮き彫りになります。
            </p>

            <ContentBox type="example" title="Example 4.3-3 (1/z の周回積分)">
                <p>
                    関数 <InlineMath math="f(z) = 1/z" /> を、単位円周 <InlineMath math="\gamma: |z|=1" /> に沿って正方向に積分する。
                </p>
                <p>
                    <InlineMath math="\gamma(t) = e^{it} \quad (0 \leq t \leq 2\pi)" /> とおくと、<InlineMath math="\gamma'(t) = ie^{it}" /> であるから、
                </p>
                <BlockMath math="\oint_\gamma \frac{1}{z} \, dz = \int_0^{2\pi} \frac{1}{e^{it}} \cdot ie^{it} \, dt = i \int_0^{2\pi} dt = 2\pi i" />
                <p>
                    積分結果は <InlineMath math="0" /> にならず、<InlineMath math="2\pi i" /> となった。
                </p>
            </ContentBox>

            <p>
                <InlineMath math="1/z" /> は原点 <InlineMath math="z=0" /> を除いた領域全体（穴のある領域）で正則ですが、
                原点を囲む閉曲線の上ではコーシーの積分定理が適用できません。
                逆に言えば、原点を含まないような単連結領域内であれば、<InlineMath math="1/z" /> の周回積分も <InlineMath math="0" /> になります。
            </p>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則関数を穴のない領域（単連結領域）内の閉曲線で積分すると <InlineMath math="0" /> になる。</li>
                    <li>グリーンの定理による証明は直感を助けるが、<InlineMath math="f'" /> の連続性を仮定している。</li>
                    <li>グルサの補題は三角形分割を用いて、微分可能性のみから積分定理を完全に証明する。</li>
                    <li>単連結でない領域では、特異点を囲む経路での積分は必ずしも 0 にならない（例: <InlineMath math="1/z" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
