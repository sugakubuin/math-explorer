import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Pullback() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体間の滑らかな写像 <InlineMath math="f : M \to N" /> が与えられたとき、接ベクトルは <InlineMath math="M" /> から <InlineMath math="N" /> へと「前へ押し出される（pushforward）」ように変換されます（接写像 <InlineMath math="df" />）。
                一方、余接ベクトルや微分形式は、これとは逆に <InlineMath math="N" /> から <InlineMath math="M" /> へと「後ろへ引き戻される（pullback）」ように変換されます。
                この<strong>引き戻し（Pullback）</strong>という操作は、微分形式を別の多様体上の座標系で表現するための強力な道具であり、多様体上の積分を定義する際の変数変換の基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">引き戻しの定義</h2>

            <p className="leading-relaxed">
                引き戻しは、微分形式が「接ベクトルを入力として受け取る多重線形写像」であるという性質を用いて、自然に定義されます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (引き戻し)">
                <p>
                    <InlineMath math="f : M \to N" /> を滑らかな写像とする。<InlineMath math="N" /> 上の <InlineMath math="k" />-形式 <InlineMath math="\omega \in \Omega^k(N)" /> に対して、その <InlineMath math="f" /> による<strong>引き戻し（pullback）</strong> <InlineMath math="f^*\omega \in \Omega^k(M)" /> を次のように定義する。
                </p>
                <p className="mt-2">
                    任意の点 <InlineMath math="p \in M" /> と、<InlineMath math="T_pM" /> の <InlineMath math="k" /> 個の接ベクトル <InlineMath math="v_1, \ldots, v_k" /> に対して、
                </p>
                <BlockMath math="(f^*\omega)_p(v_1, \ldots, v_k) = \omega_{f(p)}(df_p(v_1), \ldots, df_p(v_k))" />
                <p className="mt-2">
                    ここで <InlineMath math="df_p : T_pM \to T_{f(p)}N" /> は <InlineMath math="f" /> の接写像である。
                    （<InlineMath math="k=0" /> の場合、すなわち関数 <InlineMath math="g \in C^\infty(N)" /> に対しては、単なる合成 <InlineMath math="f^*g = g \circ f" /> と定義する。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                引き戻しは、ウェッジ積や関数の積といった代数的な操作と非常に相性が良いという特徴があります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1 (引き戻しの基本性質)">
                <p>
                    引き戻し <InlineMath math="f^* : \Omega^k(N) \to \Omega^k(M)" /> は以下の性質を満たす。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>ウェッジ積との可換性：</strong> <InlineMath math="f^*(\omega \wedge \eta) = f^*\omega \wedge f^*\eta" /></li>
                    <li><strong>合成の関手性：</strong> <InlineMath math="g : N \to P" /> も滑らかな写像のとき、<InlineMath math="(g \circ f)^* = f^* \circ g^*" /></li>
                    <li><strong>関数の微分との関係：</strong> 関数 <InlineMath math="h \in C^\infty(N)" /> に対して、<InlineMath math="f^*(dh) = d(h \circ f) = d(f^*h)" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="f^*(\omega \wedge \eta)" /> の定義式に接ベクトル <InlineMath math="v_1, \ldots, v_{k+l}" /> を代入すると、右辺は <InlineMath math="(\omega \wedge \eta)(df(v_1), \ldots, df(v_{k+l}))" /> となる。
                    ウェッジ積の定義（交代化）を展開し、各項に <InlineMath math="f^*" /> の定義を適用すると、<InlineMath math="(f^*\omega \wedge f^*\eta)(v_1, \ldots, v_{k+l})" /> に一致することがわかる。
                </p>
                <p className="mt-2">
                    2. 接写像の連鎖律 <InlineMath math="d(g \circ f) = dg \circ df" /> から直ちに従う。
                </p>
                <p className="mt-2">
                    3. 任意の接ベクトル <InlineMath math="v \in T_pM" /> に対して、
                </p>
                <BlockMath math="(f^*(dh))_p(v) = (dh)_{f(p)}(df_p(v)) = df_p(v)(h) = v(h \circ f) = d(h \circ f)_p(v)" />
                <p className="mt-2">
                    となるため、<InlineMath math="f^*(dh) = d(h \circ f)" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                これらの性質を用いると、局所座標表示された微分形式の引き戻しを、単なる「代入」として機械的に計算することができます。
            </p>

            <ContentBox type="example" title="Example 5.4-1">
                <p>
                    写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> を <InlineMath math="f(u, v) = (u, v, u^2+v^2)" /> で定義する（放物面）。
                    <InlineMath math="\mathbb{R}^3" /> の座標を <InlineMath math="(x, y, z)" /> とし、1-形式 <InlineMath math="\omega = dz" /> の引き戻し <InlineMath math="f^*\omega" /> を計算する。
                </p>
                <p className="mt-2">
                    <InlineMath math="z = u^2 + v^2" /> であるから、関数の微分の性質（Proposition 5.4-1 の 3）より、
                </p>
                <BlockMath math="f^*(dz) = d(f^*z) = d(u^2 + v^2) = 2u\,du + 2v\,dv" />
                <p className="mt-2">
                    となる。このように、引き戻しの計算は、実質的には座標変換の式をそのまま微分形式に代入する操作に等しい。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">外微分との可換性</h2>

            <p className="leading-relaxed">
                引き戻しの最も重要で美しい性質は、外微分 <InlineMath math="d" /> と可換である、すなわち「引き戻してから微分しても、微分してから引き戻しても同じ結果になる」という定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1">
                <p>
                    任意の滑らかな写像 <InlineMath math="f : M \to N" /> と、任意の <InlineMath math="k" />-形式 <InlineMath math="\omega \in \Omega^k(N)" /> に対して、
                </p>
                <BlockMath math="f^*(d\omega) = d(f^*\omega)" />
                <p className="mt-2">
                    が成り立つ。すなわち、引き戻しと外微分は可換（<InlineMath math="f^* \circ d = d \circ f^*" />）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    局所座標 <InlineMath math="(y^1, \ldots, y^n)" /> を用いて <InlineMath math="\omega = \sum g_I \, dy^I" /> と表す。
                    外微分を計算すると <InlineMath math="d\omega = \sum dg_I \wedge dy^I" /> である。これを引き戻すと、
                </p>
                <BlockMath math="f^*(d\omega) = f^*\left( \sum dg_I \wedge dy^I \right) = \sum f^*(dg_I) \wedge f^*(dy^I)" />
                <p className="mt-2">
                    Proposition 5.4-1 の性質3より、<InlineMath math="f^*(dg_I) = d(g_I \circ f) = d(f^*g_I)" /> である。
                    また、<InlineMath math="f^*(dy^I) = f^*(dy^{i_1} \wedge \cdots \wedge dy^{i_k}) = f^*(dy^{i_1}) \wedge \cdots \wedge f^*(dy^{i_k}) = d(f^*y^{i_1}) \wedge \cdots \wedge d(f^*y^{i_k})" /> である。
                </p>
                <p className="mt-2">
                    一方、先に引き戻しを計算すると、
                </p>
                <BlockMath math="f^*\omega = \sum (f^*g_I) \, f^*(dy^I)" />
                <p className="mt-2">
                    これの外微分をとると、ライプニッツ則より
                </p>
                <BlockMath math="d(f^*\omega) = \sum d(f^*g_I) \wedge f^*(dy^I) + \sum (f^*g_I) \, d(f^*(dy^I))" />
                <p className="mt-2">
                    ここで第2項の <InlineMath math="d(f^*(dy^I))" /> を考える。<InlineMath math="f^*(dy^I)" /> は完全形式（<InlineMath math="df^*y^{i_j}" />）のウェッジ積であるため、ライプニッツ則と <InlineMath math="d^2 = 0" />（<InlineMath math="d(df^*y^{i_j}) = 0" />）を繰り返し適用すると、<InlineMath math="d(f^*(dy^I)) = 0" /> となる。
                </p>
                <p className="mt-2">
                    したがって、<InlineMath math="d(f^*\omega) = \sum d(f^*g_I) \wedge f^*(dy^I)" /> となり、これは先に計算した <InlineMath math="f^*(d\omega)" /> と完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理が具体的にどのように働くか、先ほどの放物面の例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 5.4-2">
                <p>
                    Example 5.4-1 と同じ写像 <InlineMath math="f(u, v) = (u, v, u^2+v^2)" /> と、2-形式 <InlineMath math="\omega = z\,dx \wedge dy" /> を考える。
                </p>
                <p className="mt-2">
                    <strong>左辺 <InlineMath math="f^*(d\omega)" /> の計算：</strong>
                </p>
                <BlockMath math="d\omega = dz \wedge dx \wedge dy = dx \wedge dy \wedge dz" />
                <p className="mt-2">
                    これを引き戻す。<InlineMath math="f^*x = u, f^*y = v, f^*z = u^2+v^2" /> より <InlineMath math="f^*dx = du, f^*dy = dv, f^*dz = 2u\,du + 2v\,dv" /> である。
                </p>
                <BlockMath math="\begin{aligned} f^*(d\omega) &= f^*(dx) \wedge f^*(dy) \wedge f^*(dz) \\ &= du \wedge dv \wedge (2u\,du + 2v\,dv) \\ &= 2u\,du \wedge dv \wedge du + 2v\,du \wedge dv \wedge dv \\ &= 0 + 0 = 0 \end{aligned}" />
                <p className="mt-2">
                    （<InlineMath math="\mathbb{R}^2" /> 上の3-形式は常に <InlineMath math="0" /> であることからも自明である。）
                </p>
                <p className="mt-4">
                    <strong>右辺 <InlineMath math="d(f^*\omega)" /> の計算：</strong>
                </p>
                <p className="mt-2">
                    先に引き戻しを計算する。
                </p>
                <BlockMath math="f^*\omega = f^*(z) \, f^*(dx) \wedge f^*(dy) = (u^2 + v^2) \, du \wedge dv" />
                <p className="mt-2">
                    これの外微分をとる。
                </p>
                <BlockMath math="\begin{aligned} d(f^*\omega) &= d(u^2 + v^2) \wedge du \wedge dv \\ &= (2u\,du + 2v\,dv) \wedge du \wedge dv \\ &= 2u\,du \wedge du \wedge dv + 2v\,dv \wedge du \wedge dv \\ &= 0 + 0 = 0 \end{aligned}" />
                <p className="mt-2">
                    したがって、確かに <InlineMath math="f^*(d\omega) = d(f^*\omega)" /> が成り立っている。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="多様体上の積分への布石">
                <p>
                    引き戻しは、微分形式を「座標変換」する操作そのものです。
                    第6章でストークスの定理を証明する際、多様体上の積分を局所座標の積分に帰着させるために、この引き戻しの性質（特に外微分との可換性）が決定的な役割を果たします。
                    また、第7章のド・ラームコホモロジーにおいて、滑らかな写像がコホモロジー群の間の準同型写像を自然に誘導する（関手性）のも、この定理のおかげです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>引き戻し <InlineMath math="f^*\omega" /> は、写像 <InlineMath math="f : M \to N" /> によって <InlineMath math="N" /> 上の微分形式を <InlineMath math="M" /> 上の微分形式に変換する操作である。</li>
                    <li>引き戻しはウェッジ積を保存し（<InlineMath math="f^*(\omega \wedge \eta) = f^*\omega \wedge f^*\eta" />）、関数の微分と可換である（<InlineMath math="f^*(dg) = d(f^*g)" />）。</li>
                    <li>引き戻しと外微分は可換である（<InlineMath math="f^*(d\omega) = d(f^*\omega)" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
