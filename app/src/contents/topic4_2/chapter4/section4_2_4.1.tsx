import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConformalMappingBasics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素関数は、単に数式として振る舞うだけでなく、複素平面における「強力な幾何学的変換」を提供してくれます。その中でも最も重要な性質の一つが、図形の「角度」を厳密に保存するという「等角性」です。本節では、正則関数がいかなる条件で等角写像となるのか、そしてその幾何学的な意味合いについて学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等角性の定義</h2>

            <p>
                「角度を保存する」とは、交差する2つの曲線がなす角度とその向きが、写像の後でも全く変わらないことを意味します。驚くべきことに、複素関数の微分可能性（正則性）は、そのまま等角性と直結しています。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (等角写像)">
                <p>
                    領域 <InlineMath math="D" /> 上で定義された正則関数 <InlineMath math="f" /> がある点 <InlineMath math="z_0 \in D" /> において <InlineMath math="f'(z_0) \neq 0" /> を満たすとき、<InlineMath math="f" /> は <InlineMath math="z_0" /> において<b>等角写像（conformal mapping）</b>であるという。
                    等角写像は、<InlineMath math="z_0" /> で交わる任意の2つの滑らかな曲線の間のなす角の大きさと向きを完全に保存する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1">
                <p>
                    関数 <InlineMath math="f(z) = z^2" /> を考えます。<InlineMath math="f'(z) = 2z" /> です。
                </p>
                <p>
                    点 <InlineMath math="z_0 = 1" /> では <InlineMath math="f'(1) = 2 \neq 0" /> なので、この点で <InlineMath math="f" /> は等角です。<InlineMath math="z_0 = 1" /> を通る格子線（実軸と平行な線、虚軸と平行な線）はこの写像を通しても直交したままです。
                </p>
                <p>
                    一方、原点 <InlineMath math="z_0 = 0" /> では <InlineMath math="f'(0) = 0" /> となり、等角ではありません。実際、原点で交わる実軸と虚軸（なす角 <InlineMath math="\pi/2" />）は、<InlineMath math="z \mapsto z^2" /> によって正の実軸と負の実軸にそれぞれ写されるため、なす角は <InlineMath math="\pi" /> （2倍）になってしまい、角度が保存されません。
                </p>
            </ContentBox>

            <p>
                微分係数が <InlineMath math="0" /> でないことの強力さは、局所的に見れば「ほぼ一次変換（回転と拡大）」とみなせることに加え、そこに「逆関数が存在する」ことを保証する点にあります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1">
                <p>
                    正則関数 <InlineMath math="f" /> が <InlineMath math="f'(z_0) \neq 0" /> を満たすならば、<InlineMath math="z_0" /> のある十分小さな近傍 <InlineMath math="U" /> が存在して、<InlineMath math="f" /> は <InlineMath math="U" /> から <InlineMath math="f(U)" /> への局所的に双正則（すなわち、全単射であり等角な逆関数を持つ）な写像となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="z = x + iy" />, <InlineMath math="f(z) = u(x,y) + iv(x,y)" /> とする。<InlineMath math="f" /> が正則であるからコーシー・リーマンの方程式 <InlineMath math="u_x = v_y" />, <InlineMath math="u_y = -v_x" /> を満たす。
                    写像 <InlineMath math="(x, y) \mapsto (u, v)" /> の実ヤコビアン <InlineMath math="J(x, y)" /> を計算すると、
                </p>
                <BlockMath math="\begin{aligned}
                    J(x, y) &= \det \begin{pmatrix} u_x & u_y \\ v_x & v_y \end{pmatrix} \\
                    &= u_x v_y - u_y v_x \\
                    &= u_x^2 + v_x^2 = |f'(z)|^2
                \end{aligned}" />
                <p>
                    となる。<InlineMath math="f'(z_0) \neq 0" /> より <InlineMath math="z_0" /> におけるヤコビアンは非ゼロ（<InlineMath math="J > 0" />）である。
                </p>
                <p>
                    実多様体における逆関数定理より、<InlineMath math="z_0" /> のある近傍 <InlineMath math="U" /> でこの写像は微分同相（全単射かつ逆写像も微分可能）となる。逆写像もコーシー・リーマンの方程式を満たすことが容易に確かめられるため、逆関数は正則である。したがって局所的に双正則となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等角写像の幾何学的意味</h2>

            <p>
                等角写像を使えば、「ある形をした領域」を「別の形をした領域」に、角度（直交性など）を保ったまま変形させることができます。
            </p>

            <ContentBox type="example" title="Example 4.1-2">
                <p>
                    複素指数関数 <InlineMath math="f(z) = e^z = e^{x+iy} = e^x (\cos y + i \sin y)" /> を考えます。<InlineMath math="f'(z) = e^z \neq 0" /> より、これは全平面で等角です。
                </p>
                <p>
                    複素平面上に、実軸と平行な直線群（<InlineMath math="y = \text{const}" />）と、虚軸と平行な直線群（<InlineMath math="x = \text{const}" />）という、互いに直交する網目（直交格子）を引きます。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="x = \text{const}" /> は、<InlineMath math="f(z)" /> によって「原点を中心とする半径 <InlineMath math="e^x" /> の同心円」に写されます。</li>
                    <li><InlineMath math="y = \text{const}" /> は、<InlineMath math="f(z)" /> によって「原点から出る偏角 <InlineMath math="y" /> の放射状の半直線」に写されます。</li>
                </ul>
                <p>
                    半径方向の半直線と、それを横切る同心円はどれも直交して交わります。元の直線路が直交していたように、写像された後の曲線群もまた直交性を完全に保っています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-3">
                <p>
                    航空力学で用いられる変形として、ジューコフスキー変換 <InlineMath math="f(z) = z + 1/z" /> があります。
                </p>
                <p>
                    <InlineMath math="f'(z) = 1 - 1/z^2" /> なので、<InlineMath math="z \neq \pm 1" /> であれば等角です。特に単位円 <InlineMath math="|z| = 1" /> の外側 <InlineMath math="|z| > 1" /> では完全な等角写像となります。
                </p>
                <p>
                    この等角写像は、少し中心をずらした円板を「飛行機の翼（翼型）」のような流線型に写す性質を持ちます。物体の周りを流れる空気（ポテンシャル流）の解析において、円柱の周りの流れという簡単な問題を、翼の周りの流れという複雑な問題へと正確に変換できるため、昔から重宝されてきました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則関数で <InlineMath math="f'(z_0) \neq 0" /> となる点において、関数は曲線のなす角を保存し、等角写像と呼ばれる。</li>
                    <li>等角写像は局所的には逆関数を持ち、双正則であることを保証する（逆関数定理）。</li>
                    <li>等角性を利用することで、直交する格子を別の直交する曲線族に変換でき、流体力学などの物理問題を単純化する強力な武器となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
