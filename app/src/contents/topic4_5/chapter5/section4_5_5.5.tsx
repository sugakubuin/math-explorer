import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InteriorProductAndCartan() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章の最後に、微分形式に対するもう一つの重要な代数的操作である<strong>内部積（Interior product）</strong>を導入します。
                外微分 <InlineMath math="d" /> が微分形式の次数を1つ上げるのに対し、内部積 <InlineMath math="\iota_X" /> はベクトル場 <InlineMath math="X" /> を用いて次数を1つ下げます。
                この2つの操作を組み合わせることで、前章（§4.4）で予告した「カルタンの公式」を完全に証明することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内部積の定義</h2>

            <p className="leading-relaxed">
                微分形式は接ベクトルを入力とする多重線形写像でした。
                この最初の入力スロットに、特定のベクトル場 <InlineMath math="X" /> を「代入」してしまう操作が内部積です。
            </p>

            <ContentBox type="definition" title="Definition 5.5-1 (内部積)">
                <p>
                    <InlineMath math="X \in \mathfrak{X}(M)" /> をベクトル場、<InlineMath math="\omega \in \Omega^k(M)" /> を <InlineMath math="k" />-形式とする。
                    <InlineMath math="X" /> による <InlineMath math="\omega" /> の<strong>内部積（interior product）</strong>、または<strong>内部積縮約（interior contraction）</strong> <InlineMath math="\iota_X \omega \in \Omega^{k-1}(M)" /> を次のように定義する。
                </p>
                <p className="mt-2">
                    <InlineMath math="k \geq 1" /> のとき、任意の <InlineMath math="k-1" /> 個の接ベクトル <InlineMath math="v_2, \ldots, v_k" /> に対して、
                </p>
                <BlockMath math="(\iota_X \omega)_p(v_2, \ldots, v_k) = \omega_p(X_p, v_2, \ldots, v_k)" />
                <p className="mt-2">
                    <InlineMath math="k=0" />（関数 <InlineMath math="f" />）のときは、<InlineMath math="\iota_X f = 0" /> と定義する。
                    （<InlineMath math="\iota_X \omega" /> は <InlineMath math="i_X \omega" /> や <InlineMath math="X \lrcorner \omega" /> と書かれることもある。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                内部積は、ウェッジ積に対して「次数付き反導分（anti-derivation）」として振る舞うという重要な性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 5.5-1 (内部積の性質)">
                <p>
                    内部積 <InlineMath math="\iota_X : \Omega^k(M) \to \Omega^{k-1}(M)" /> は以下の性質を満たす。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong><InlineMath math="C^\infty(M)" />-線形性：</strong> <InlineMath math="\iota_{fX+gY} \omega = f \iota_X \omega + g \iota_Y \omega" /></li>
                    <li><strong>次数付き反ライプニッツ則：</strong> <InlineMath math="\omega \in \Omega^k(M)" />、<InlineMath math="\eta \in \Omega^l(M)" /> に対して、
                        <BlockMath math="\iota_X(\omega \wedge \eta) = (\iota_X \omega) \wedge \eta + (-1)^k \omega \wedge (\iota_X \eta)" />
                    </li>
                    <li><strong>冪零性（Nilpotency）：</strong> <InlineMath math="\iota_X \circ \iota_X = 0" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. 微分形式 <InlineMath math="\omega" /> の各入力スロットについての線形性から直ちに従う。
                </p>
                <p className="mt-2">
                    2. ウェッジ積の定義（交代化）を用いて直接計算する。
                    <InlineMath math="\omega \wedge \eta" /> の最初の入力に <InlineMath math="X" /> を代入すると、交代化の和の中で <InlineMath math="X" /> が <InlineMath math="\omega" /> のスロットに入る項と <InlineMath math="\eta" /> のスロットに入る項に分かれる。
                    <InlineMath math="X" /> が <InlineMath math="\eta" /> のスロットに入る項では、<InlineMath math="X" /> を <InlineMath math="\omega" /> の <InlineMath math="k" /> 個の変数を飛び越えて移動させる必要があるため、<InlineMath math="(-1)^k" /> の符号がつく。
                </p>
                <p className="mt-2">
                    3. <InlineMath math="\iota_X(\iota_X \omega)" /> は、<InlineMath math="\omega" /> の最初の2つのスロットに同じベクトル <InlineMath math="X" /> を代入することを意味する。
                    <InlineMath math="\omega" /> は交代形式であるため、同じベクトルを2つ入力すると値は <InlineMath math="0" /> になる。したがって <InlineMath math="\iota_X \circ \iota_X = 0" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な計算例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 5.5-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上で、ベクトル場 <InlineMath math="X = \frac{\partial}{\partial x}" /> と2-形式 <InlineMath math="\omega = dx \wedge dy + dy \wedge dz" /> の内部積 <InlineMath math="\iota_X \omega" /> を計算する。
                </p>
                <p className="mt-2">
                    反ライプニッツ則を用いると、
                </p>
                <BlockMath math="\begin{aligned} \iota_X(dx \wedge dy) &= (\iota_X dx) \wedge dy + (-1)^1 dx \wedge (\iota_X dy) \\ &= dx\left(\frac{\partial}{\partial x}\right) dy - dx \wedge dy\left(\frac{\partial}{\partial x}\right) \\ &= 1 \cdot dy - dx \wedge 0 = dy \end{aligned}" />
                <p className="mt-2">
                    同様に、
                </p>
                <BlockMath math="\begin{aligned} \iota_X(dy \wedge dz) &= (\iota_X dy) \wedge dz - dy \wedge (\iota_X dz) \\ &= 0 \cdot dz - dy \wedge 0 = 0 \end{aligned}" />
                <p className="mt-2">
                    したがって、<InlineMath math="\iota_X \omega = dy + 0 = dy" /> となる。
                    直感的には、<InlineMath math="\iota_{\partial/\partial x}" /> は「<InlineMath math="dx" /> を含む項から <InlineMath math="dx" /> を抜き取り、含まない項を <InlineMath math="0" /> にする」操作に相当する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カルタンの公式の完全な証明</h2>

            <p className="leading-relaxed">
                外微分 <InlineMath math="d" /> と内部積 <InlineMath math="\iota_X" /> が出揃ったことで、§4.4 で導入した「カルタンの公式」を完全に証明することができます。
                この公式は、リー微分 <InlineMath math="\mathcal{L}_X" /> を代数的な操作に分解する非常に美しい結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 (カルタンの公式)">
                <p>
                    任意のベクトル場 <InlineMath math="X \in \mathfrak{X}(M)" /> と任意の微分形式 <InlineMath math="\omega \in \Omega^k(M)" /> に対して、
                </p>
                <BlockMath math="\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X (d\omega)" />
                <p className="mt-2">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明は、微分形式の次数 <InlineMath math="k" /> に関する帰納法と、両辺がウェッジ積に対して同じライプニッツ則を満たすことを利用して行う。
                </p>
                <p className="mt-2">
                    <strong>Step 1: <InlineMath math="k=0" />（関数 <InlineMath math="f" />）の場合</strong>
                </p>
                <p className="mt-2">
                    定義より <InlineMath math="\iota_X f = 0" /> であるから <InlineMath math="d(\iota_X f) = 0" />。
                    また、<InlineMath math="\iota_X(df) = df(X) = X(f)" /> である。
                    一方、Proposition 4.4-1 より <InlineMath math="\mathcal{L}_X f = X(f)" /> であるから、両辺は一致する。
                </p>
                <p className="mt-4">
                    <strong>Step 2: <InlineMath math="k=1" />（完全形式 <InlineMath math="df" />）の場合</strong>
                </p>
                <p className="mt-2">
                    <InlineMath math="d^2 = 0" /> より <InlineMath math="d(df) = 0" /> であるから <InlineMath math="\iota_X(d(df)) = 0" />。
                    また、<InlineMath math="d(\iota_X df) = d(X(f))" /> である。
                    一方、リー微分と外微分は引き戻しの性質から可換（<InlineMath math="\mathcal{L}_X \circ d = d \circ \mathcal{L}_X" />）であるため、
                </p>
                <BlockMath math="\mathcal{L}_X(df) = d(\mathcal{L}_X f) = d(X(f))" />
                <p className="mt-2">
                    となり、両辺は一致する。
                    （一般の1-形式 <InlineMath math="\omega = \sum g_i \, df_i" /> については、Step 3 のライプニッツ則を用いれば従う。）
                </p>
                <p className="mt-4">
                    <strong>Step 3: ライプニッツ則の一致</strong>
                </p>
                <p className="mt-2">
                    右辺の作用素を <InlineMath math="D_X = d \circ \iota_X + \iota_X \circ d" /> とおく。
                    <InlineMath math="D_X" /> がウェッジ積に対して通常のライプニッツ則を満たすことを示す。
                </p>
                <BlockMath math="\begin{aligned} D_X(\omega \wedge \eta) &= d(\iota_X(\omega \wedge \eta)) + \iota_X(d(\omega \wedge \eta)) \\ &= d((\iota_X \omega) \wedge \eta + (-1)^k \omega \wedge (\iota_X \eta)) + \iota_X(d\omega \wedge \eta + (-1)^k \omega \wedge d\eta) \end{aligned}" />
                <p className="mt-2">
                    これに <InlineMath math="d" /> と <InlineMath math="\iota_X" /> のライプニッツ則を適用して展開すると、符号が反転する項がすべて打ち消し合い、最終的に
                </p>
                <BlockMath math="D_X(\omega \wedge \eta) = (D_X \omega) \wedge \eta + \omega \wedge (D_X \eta)" />
                <p className="mt-2">
                    が得られる（計算はやや長いが、符号の追跡のみである）。
                    一方、左辺のリー微分 <InlineMath math="\mathcal{L}_X" /> も、引き戻しがウェッジ積を保存することから、
                </p>
                <BlockMath math="\mathcal{L}_X(\omega \wedge \eta) = (\mathcal{L}_X \omega) \wedge \eta + \omega \wedge (\mathcal{L}_X \eta)" />
                <p className="mt-2">
                    を満たす。
                </p>
                <p className="mt-4">
                    <strong>Step 4: 結論</strong>
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="k" />-形式は局所的に <InlineMath math="f \, dx^{i_1} \wedge \cdots \wedge dx^{i_k}" /> の和で表される。
                    Step 1 と Step 2 により、関数 <InlineMath math="f" /> と完全1-形式 <InlineMath math="dx^i" /> に対して <InlineMath math="\mathcal{L}_X = D_X" /> が成り立つ。
                    Step 3 により両辺は同じライプニッツ則を満たすため、それらのウェッジ積で表される任意の微分形式に対しても <InlineMath math="\mathcal{L}_X = D_X" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                カルタンの公式を用いて、具体的なリー微分の計算を行ってみましょう。
            </p>

            <ContentBox type="example" title="Example 5.5-2">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上で、ベクトル場 <InlineMath math="X = x\frac{\partial}{\partial x} + y\frac{\partial}{\partial y}" /> と1-形式 <InlineMath math="\omega = x\,dy" /> を考える。
                    カルタンの公式を用いて <InlineMath math="\mathcal{L}_X \omega" /> を計算する。
                </p>
                <p className="mt-2">
                    まず、<InlineMath math="d\omega" /> と <InlineMath math="\iota_X \omega" /> を計算する。
                </p>
                <BlockMath math="d\omega = d(x\,dy) = dx \wedge dy" />
                <BlockMath math="\iota_X \omega = \iota_X(x\,dy) = x(\iota_X dy) = x(y) = xy" />
                <p className="mt-2">
                    次に、これらにそれぞれ <InlineMath math="\iota_X" /> と <InlineMath math="d" /> を作用させる。
                </p>
                <BlockMath math="\iota_X(d\omega) = \iota_X(dx \wedge dy) = (\iota_X dx) \wedge dy - dx \wedge (\iota_X dy) = x\,dy - y\,dx" />
                <BlockMath math="d(\iota_X \omega) = d(xy) = y\,dx + x\,dy" />
                <p className="mt-2">
                    カルタンの公式より、これらを足し合わせる。
                </p>
                <BlockMath math="\mathcal{L}_X \omega = (x\,dy - y\,dx) + (y\,dx + x\,dy) = 2x\,dy" />
                <p className="mt-2">
                    一方、定義に従ってフロー <InlineMath math="\theta_t(x,y) = (e^t x, e^t y)" /> で引き戻すと、
                </p>
                <BlockMath math="\theta_t^*(x\,dy) = (e^t x) d(e^t y) = e^{2t} x\,dy" />
                <p className="mt-2">
                    これを <InlineMath math="t" /> で微分して <InlineMath math="t=0" /> とおくと <InlineMath math="2x\,dy" /> となり、カルタンの公式の結果と完全に一致する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ホモトピー作用素としてのカルタンの公式">
                <p>
                    カルタンの公式 <InlineMath math="\mathcal{L}_X = d \circ \iota_X + \iota_X \circ d" /> は、代数的トポロジーにおける「チェインホモトピー」の形をしています。
                    実際、この公式は第7章で学ぶ「ド・ラームコホモロジーのホモトピー不変性（ポアンカレの補題）」を証明する際の核心的なアイデアとなります。
                    ベクトル場 <InlineMath math="X" /> が生成するフロー（連続的な変形）に沿った変化 <InlineMath math="\mathcal{L}_X \omega" /> が、<InlineMath math="d" /> の像（完全形式）と <InlineMath math="d" /> で消える項の和で書けるという事実は、コホモロジー類が連続変形で不変であることを直接的に示唆しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>内部積 <InlineMath math="\iota_X \omega" /> は、微分形式の最初の入力スロットにベクトル場 <InlineMath math="X" /> を代入する操作であり、次数を1つ下げる。</li>
                    <li>内部積はウェッジ積に対して次数付き反ライプニッツ則を満たし、2回作用させると <InlineMath math="0" /> になる（<InlineMath math="\iota_X^2 = 0" />）。</li>
                    <li>カルタンの公式 <InlineMath math="\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X (d\omega)" /> により、リー微分を外微分と内部積の組み合わせで計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
