import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CurvatureAndPrincipalNormal() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                弧長パラメータ付き曲線を用いることで、曲線の「曲がり具合」を数学的に厳密に定義することができます。この章では、曲線の進行方向を表す接ベクトルの変化率から、曲率と主法線ベクトルを導出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">曲率の定義</h2>

            <p className="leading-relaxed">
                車を運転しているときのハンドルの切り具合を想像してください。曲線が急に曲がっているほど、進行方向（接ベクトル）は激しく変化します。この変化の大きさが「曲率」です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-1 (単位接ベクトルと曲率)"
            >
                <p>
                    弧長パラメータ付き曲線 <InlineMath math="\alpha(s)" /> において、その微分を<strong>単位接ベクトル（unit tangent vector）</strong>と呼び、<InlineMath math="T(s)" /> で表す。
                    <BlockMath math="T(s) = \alpha'(s)" />
                </p>
                <p>
                    この単位接ベクトルの導関数のノルムを、曲線 <InlineMath math="\alpha" /> の点 <InlineMath math="\alpha(s)" /> における<strong>曲率（curvature）</strong>と呼び、<InlineMath math="\kappa(s)" />（カッパ）で表す。
                    <BlockMath math="\kappa(s) = |T'(s)| = |\alpha''(s)|" />
                </p>
                <p>
                    曲率 <InlineMath math="\kappa(s)" /> は、接ベクトルが回転する速さ（曲線の曲がり具合）を表す非負の実数である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここで、単位接ベクトル <InlineMath math="T(s)" /> の導関数 <InlineMath math="T'(s)" /> について、非常に重要な幾何学的性質が成り立ちます。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 1.2-1 (<InlineMath math="T'(s) \perp T(s)" />)</span>}
            >
                <p>
                    単位接ベクトルの導関数 <InlineMath math="T'(s)" /> は、元のベクトル <InlineMath math="T(s)" /> と常に直交する。
                    <BlockMath math="T(s) \cdot T'(s) = 0" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="\alpha(s)" /> は弧長パラメータ付き曲線であるため、接ベクトル <InlineMath math="T(s)" /> の大きさは常に <InlineMath math="1" /> である。
                    すなわち、内積を用いて書くと、
                    <BlockMath math="|T(s)|^2 = T(s) \cdot T(s) = 1" />
                    となる。
                </p>
                <p>
                    この両辺を <InlineMath math="s" /> で微分する。積の微分公式（ライプニッツ則）より、
                    <BlockMath math="T'(s) \cdot T(s) + T(s) \cdot T'(s) = \frac{d}{ds}(1) = 0" />
                    <BlockMath math="2 (T(s) \cdot T'(s)) = 0" />
                    <BlockMath math="T(s) \cdot T'(s) = 0" />
                    となり、<InlineMath math="T(s)" /> と <InlineMath math="T'(s)" /> が直交することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                最も基本的な図形である「円」の曲率を計算してみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-1 (円の曲率)"
            >
                <p>
                    半径 <InlineMath math="r" /> の円を弧長パラメータ <InlineMath math="s" /> で表示すると、次のようになる（角速度が <InlineMath math="1/r" /> になることに対応する）。
                    <BlockMath math="\alpha(s) = \left( r\cos\frac{s}{r}, r\sin\frac{s}{r}, 0 \right)" />
                </p>
                <p>
                    単位接ベクトル <InlineMath math="T(s)" /> は、
                    <BlockMath math="T(s) = \alpha'(s) = \left( -\sin\frac{s}{r}, \cos\frac{s}{r}, 0 \right)" />
                    となる（確かに <InlineMath math="|T(s)| = 1" /> である）。
                </p>
                <p>
                    さらに <InlineMath math="s" /> で微分すると、
                    <BlockMath math="T'(s) = \alpha''(s) = \left( -\frac{1}{r}\cos\frac{s}{r}, -\frac{1}{r}\sin\frac{s}{r}, 0 \right)" />
                    となる。したがって曲率 <InlineMath math="\kappa" /> は、
                    <BlockMath math="\kappa = |T'(s)| = \sqrt{\left(-\frac{1}{r}\cos\frac{s}{r}\right)^2 + \left(-\frac{1}{r}\sin\frac{s}{r}\right)^2} = \frac{1}{r}" />
                    となる。
                </p>
                <p>
                    すなわち、<strong>半径 <InlineMath math="r" /> の円の曲率は、至る所で一定値 <InlineMath math="1/r" /> になる</strong>。半径が小さい（カーブが急な）円ほど曲率が大きくなり、直感と一致することがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">主法線ベクトル</h2>

            <p className="leading-relaxed">
                先ほどの命題から、接ベクトルの変化の方向 <InlineMath math="T'(s)" /> は、進行方向に垂直であることがわかりました。この方向を指す単位ベクトルを定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-2 (主法線ベクトル)"
            >
                <p>
                    曲率がゼロでない（<InlineMath math="\kappa(s) > 0" />）点において、<InlineMath math="T'(s)" /> と同じ方向を向く単位ベクトルを<strong>主法線ベクトル（principal normal vector）</strong>と呼び、<InlineMath math="N(s)" /> で表す。
                    <BlockMath math="N(s) = \frac{T'(s)}{|T'(s)|} = \frac{T'(s)}{\kappa(s)}" />
                </p>
                <p>
                    この定義より、次のような関係式が得られる。
                    <BlockMath math="T'(s) = \kappa(s) N(s)" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                主法線ベクトル <InlineMath math="N(s)" /> は、進行方向 <InlineMath math="T(s)" /> に直交し、曲線が「曲がろうとしている方向（内側）」を指し示します。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-2 (円の主法線ベクトル)"
            >
                <p>
                    Example 1.2-1 の円について、主法線ベクトルを求める。
                </p>
                <p>
                    <InlineMath math="T'(s)" /> と曲率 <InlineMath math="\kappa = 1/r" /> を用いると、
                    <BlockMath math="\begin{aligned} N(s) &= \frac{T'(s)}{\kappa} = r \cdot \left( -\frac{1}{r}\cos\frac{s}{r}, -\frac{1}{r}\sin\frac{s}{r}, 0 \right) \\ &= \left( -\cos\frac{s}{r}, -\sin\frac{s}{r}, 0 \right) \end{aligned}" />
                    となる。
                </p>
                <p>
                    このベクトルは、円周上の点 <InlineMath math="\alpha(s)" /> の位置ベクトルとちょうど逆向き（内向き）である。すなわち、<strong>円の主法線ベクトルは常に円の中心を向いている</strong>。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="曲率 0 の点について"
            >
                <p>
                    もしある点で曲率が <InlineMath math="\kappa(s) = 0" /> であった場合（すなわち <InlineMath math="T'(s) = \mathbf{0}" /> の場合）、主法線ベクトル <InlineMath math="N(s)" /> は定義できません（ゼロ割りになるため）。
                </p>
                <p>
                    曲率が 0 の曲線とは、すなわち「直線」のことです。直線は曲がっていないため、「どちらに曲がろうとしているか（法線方向）」が一意に定まらないのは自然なことです。
                </p>
                <p>
                    本コースの以降の議論（特にフレネ-セレ標構の構築）においては、原則として<strong>曲率が常に正（<InlineMath math="\kappa > 0" />）であるような曲線</strong>のみを対象として考えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>接ベクトル <InlineMath math="T(s)" /> の変化率の大きさを曲率 <InlineMath math="\kappa(s)" /> といい、曲線の曲がり具合を表す。</li>
                    <li><InlineMath math="T'(s)" /> の向きを表す単位ベクトルを主法線ベクトル <InlineMath math="N(s)" /> といい、曲線が曲がる内側を指す。</li>
                    <li><InlineMath math="T(s)" /> と <InlineMath math="N(s)" /> は直交しており、<InlineMath math="T'(s) = \kappa(s)N(s)" /> の関係がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}