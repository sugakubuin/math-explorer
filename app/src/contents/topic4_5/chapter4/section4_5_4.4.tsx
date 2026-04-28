import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LieDerivative() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体上のテンソル場（関数、ベクトル場、微分形式など）が、あるベクトル場 <InlineMath math="X" /> の「流れ（フロー）」に沿ってどのように変化するかを測る微分操作が<strong>リー微分（Lie derivative）</strong>です。
                ユークリッド空間における方向微分を、多様体上の任意のテンソル場に対して自然に拡張したものであり、微分幾何学において極めて重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リー微分の定義</h2>

            <p className="leading-relaxed">
                ベクトル場 <InlineMath math="X" /> は、§3.5 で学んだように、多様体 <InlineMath math="M" /> 上の局所的な1パラメータ変換群（フロー）<InlineMath math="\theta_t" /> を生成します。
                このフロー <InlineMath math="\theta_t" /> は微分同相写像であるため、テンソル場を「引き戻す（pullback）」ことができます。
                この引き戻しを用いて、テンソル場の時間変化率を定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (リー微分)">
                <p>
                    <InlineMath math="X" /> を多様体 <InlineMath math="M" /> 上のベクトル場とし、そのフローを <InlineMath math="\theta_t" /> とする。
                    任意のテンソル場 <InlineMath math="T" /> に対して、<InlineMath math="X" /> に沿う <InlineMath math="T" /> の<strong>リー微分（Lie derivative）</strong> <InlineMath math="\mathcal{L}_X T" /> を次で定義する。
                </p>
                <BlockMath math="(\mathcal{L}_X T)_p = \lim_{t \to 0} \frac{(\theta_t^* T)_p - T_p}{t} = \left. \frac{d}{dt} (\theta_t^* T)_p \right|_{t=0}" />
                <p className="mt-2">
                    ここで、<InlineMath math="\theta_t^* T" /> は微分同相写像 <InlineMath math="\theta_t" /> によるテンソル場 <InlineMath math="T" /> の引き戻しである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義は非常に幾何学的ですが、具体的な計算には不便です。
                しかし、関数やベクトル場に対するリー微分は、すでに知っている簡単な操作に一致することが示せます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.4-1">
                <p>
                    リー微分 <InlineMath math="\mathcal{L}_X" /> は、関数 <InlineMath math="f \in C^\infty(M)" /> とベクトル場 <InlineMath math="Y \in \mathfrak{X}(M)" /> に対して以下のように作用する。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>関数に対して：<InlineMath math="\mathcal{L}_X f = X(f)" />（方向微分）</li>
                    <li>ベクトル場に対して：<InlineMath math="\mathcal{L}_X Y = [X, Y]" />（リー括弧積）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 関数の場合：</strong>
                    関数の引き戻しは単なる合成 <InlineMath math="\theta_t^* f = f \circ \theta_t" /> である。
                    定義より、
                </p>
                <BlockMath math="(\mathcal{L}_X f)(p) = \left. \frac{d}{dt} f(\theta_t(p)) \right|_{t=0}" />
                <p className="mt-2">
                    <InlineMath math="\theta_t(p)" /> は <InlineMath math="X" /> の積分曲線 <InlineMath math="\gamma(t)" /> であり、<InlineMath math="\gamma'(0) = X_p" /> であるから、これはまさに方向微分 <InlineMath math="X_p(f)" /> の定義に他ならない。
                </p>
                <p className="mt-4">
                    <strong>2. ベクトル場の場合：</strong>
                    ベクトル場の引き戻しは <InlineMath math="(\theta_t^* Y)_p = d(\theta_{-t})_{\theta_t(p)}(Y_{\theta_t(p)})" /> で与えられる。
                    任意の関数 <InlineMath math="f" /> に作用させると、
                </p>
                <BlockMath math="((\theta_t^* Y)_p)(f) = Y_{\theta_t(p)}(f \circ \theta_{-t})" />
                <p className="mt-2">
                    これを <InlineMath math="t" /> で微分して <InlineMath math="t=0" /> とおく。積の微分法則（テイラー展開）を用いると、
                </p>
                <BlockMath math="\begin{aligned} \left. \frac{d}{dt} Y_{\theta_t(p)}(f \circ \theta_{-t}) \right|_{t=0} &= X_p(Y(f)) + Y_p(-X(f)) \\ &= X_p(Y(f)) - Y_p(X(f)) \end{aligned}" />
                <p className="mt-2">
                    これはリー括弧積 <InlineMath math="[X, Y]_p(f)" /> の定義そのものである。したがって <InlineMath math="\mathcal{L}_X Y = [X, Y]" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                一般のテンソル場に対しても、テンソル積に関するライプニッツ則 <InlineMath math="\mathcal{L}_X(T_1 \otimes T_2) = (\mathcal{L}_X T_1) \otimes T_2 + T_1 \otimes (\mathcal{L}_X T_2)" /> を用いることで、局所座標での計算が可能になります。
            </p>

            <ContentBox type="example" title="Example 4.4-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> で放射状ベクトル場 <InlineMath math="X = x\frac{\partial}{\partial x} + y\frac{\partial}{\partial y}" /> と、<InlineMath math="(0,2)" />-テンソル場 <InlineMath math="T = dx \otimes dy" /> を考える。
                    <InlineMath math="T" /> のリー微分 <InlineMath math="\mathcal{L}_X T" /> を計算する。
                </p>
                <p className="mt-2">
                    <InlineMath math="X" /> の積分曲線は <InlineMath math="\dot{x} = x, \dot{y} = y" /> より <InlineMath math="x(t) = e^t x_0, y(t) = e^t y_0" /> である。
                    したがってフローは <InlineMath math="\theta_t(x,y) = (e^t x, e^t y)" /> となる。
                    このフローによる <InlineMath math="dx, dy" /> の引き戻しは、
                </p>
                <BlockMath math="\theta_t^*(dx) = d(e^t x) = e^t dx, \quad \theta_t^*(dy) = d(e^t y) = e^t dy" />
                <p className="mt-2">
                    これを用いて <InlineMath math="T" /> を引き戻すと、
                </p>
                <BlockMath math="\theta_t^* T = \theta_t^*(dx) \otimes \theta_t^*(dy) = (e^t dx) \otimes (e^t dy) = e^{2t} dx \otimes dy" />
                <p className="mt-2">
                    定義に従って <InlineMath math="t" /> で微分し <InlineMath math="t=0" /> とおくと、
                </p>
                <BlockMath math="\mathcal{L}_X T = \left. \frac{d}{dt} (e^{2t} dx \otimes dy) \right|_{t=0} = 2 e^{2(0)} dx \otimes dy = 2 \, dx \otimes dy" />
                <p className="mt-2">
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カルタンの公式</h2>

            <p className="leading-relaxed">
                テンソル場の中でも特に重要な「微分形式（交代テンソル場）」に対しては、リー微分を計算するための非常に強力な公式が存在します。
                これが<strong>カルタンの公式（Cartan's magic formula）</strong>です。
                この公式は、次章で学ぶ「外微分 <InlineMath math="d" />」と「内部積 <InlineMath math="\iota_X" />」を用いてリー微分を表現します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (カルタンの公式)">
                <p>
                    <InlineMath math="M" /> 上の任意の微分形式（<InlineMath math="k" />-形式）<InlineMath math="\omega" /> とベクトル場 <InlineMath math="X" /> に対して、以下の等式が成り立つ。
                </p>
                <BlockMath math="\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X (d\omega)" />
                <p className="mt-2">
                    ここで、<InlineMath math="d" /> は外微分（exterior derivative）、<InlineMath math="\iota_X" /> は <InlineMath math="X" /> による内部積（interior product）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    完全な証明は第5章で外微分と内部積の性質（ウェッジ積に対するライプニッツ則など）を準備した後に行うが、ここでは0-形式（関数）と1-形式（完全形式）の場合の概略を示す。
                </p>
                <p className="mt-2">
                    <strong>0-形式（関数 <InlineMath math="f" />）の場合：</strong>
                    <InlineMath math="\iota_X f = 0" />（定義による）であり、<InlineMath math="\iota_X(df) = df(X) = X(f)" /> である。
                    したがって右辺は <InlineMath math="d(0) + X(f) = X(f)" /> となる。
                    一方、左辺は Proposition 4.4-1 より <InlineMath math="\mathcal{L}_X f = X(f)" /> であるから、両辺は一致する。
                </p>
                <p className="mt-2">
                    <strong>完全1-形式（<InlineMath math="\omega = df" />）の場合：</strong>
                    <InlineMath math="d^2 = 0" /> より <InlineMath math="d\omega = d(df) = 0" /> であるから、右辺第2項は消える。
                    右辺第1項は <InlineMath math="d(\iota_X df) = d(X(f))" /> となる。
                    一方、左辺は <InlineMath math="\mathcal{L}_X(df)" /> である。リー微分と外微分は可換（<InlineMath math="\mathcal{L}_X \circ d = d \circ \mathcal{L}_X" />）であることが引き戻しの性質から従うため、
                </p>
                <BlockMath math="\mathcal{L}_X(df) = d(\mathcal{L}_X f) = d(X(f))" />
                <p className="mt-2">
                    となり、やはり両辺は一致する。一般の <InlineMath math="k" />-形式については、これらとウェッジ積の性質から帰納的に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="カルタンの公式の意義">
                <p>
                    カルタンの公式は、リー微分 <InlineMath math="\mathcal{L}_X" />、外微分 <InlineMath math="d" />、内部積 <InlineMath math="\iota_X" /> という、多様体上の3つの基本的な微分操作を結びつける「魔法の公式」です。
                    この公式により、フローを具体的に計算することなく、代数的な操作（微分と代入）だけでリー微分を計算できるようになります。
                    次章（第5章）で微分形式の理論を本格的に展開する際、この公式は中心的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リー微分 <InlineMath math="\mathcal{L}_X T" /> は、ベクトル場 <InlineMath math="X" /> のフローに沿ったテンソル場 <InlineMath math="T" /> の変化率である。</li>
                    <li>関数に対するリー微分は方向微分 <InlineMath math="X(f)" /> に、ベクトル場に対するリー微分はリー括弧積 <InlineMath math="[X, Y]" /> に一致する。</li>
                    <li>微分形式に対するリー微分は、カルタンの公式 <InlineMath math="\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X (d\omega)" /> によって計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
