import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TangentMaps() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で多様体の各点に接空間（Tangent space）を定義しました。
                多様体上の滑らかな写像 <InlineMath math="f : M \to N" /> が与えられたとき、この写像は点 <InlineMath math="p \in M" /> を <InlineMath math="f(p) \in N" /> に移します。
                では、<InlineMath math="p" /> における接ベクトル（速度ベクトル）は、<InlineMath math="f" /> によってどのように移されるべきでしょうか。
                この「接ベクトルの行き先」を定める線形写像が<strong>接写像（Tangent map）</strong>であり、多様体論における「微分」の一般化に他なりません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">接写像の定義</h2>

            <p className="leading-relaxed">
                接ベクトルを前節で定義した「導分（derivation）」の立場で考えると、接写像の定義は非常に簡潔で美しいものになります。
                関数 <InlineMath math="g \in C^\infty(N)" /> に対して、合成関数 <InlineMath math="g \circ f" /> は <InlineMath math="M" /> 上の関数となるため、<InlineMath math="M" /> の接ベクトルを作用させることができます。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (接写像)">
                <p>
                    <InlineMath math="M, N" /> を滑らかな多様体とし、<InlineMath math="f : M \to N" /> を滑らかな写像とする。
                    点 <InlineMath math="p \in M" /> における <InlineMath math="f" /> の<strong>接写像（tangent map）</strong>、あるいは<strong>微分（differential）</strong>とは、線形写像
                </p>
                <BlockMath math="df_p : T_pM \to T_{f(p)}N" />
                <p className="mt-2">
                    であって、任意の接ベクトル <InlineMath math="v \in T_pM" /> と関数 <InlineMath math="g \in C^\infty(N)" /> に対して、
                </p>
                <BlockMath math="(df_p(v))(g) = v(g \circ f)" />
                <p className="mt-2">
                    と定義されるものである。<InlineMath math="df_p" /> は <InlineMath math="(f_*)_p" /> や <InlineMath math="T_p f" /> と書かれることもある。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義が well-defined であること、すなわち <InlineMath math="df_p(v)" /> が確かに <InlineMath math="T_{f(p)}N" /> の元（導分）になっていること、そして局所座標でどのように表されるかを確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1">
                <p>
                    <InlineMath math="df_p" /> は線形写像であり、<InlineMath math="(df_p(v))" /> は <InlineMath math="T_{f(p)}N" /> の導分である。
                    また、チャートを介した局所座標表示では、<InlineMath math="df_p" /> はヤコビ行列（Jacobian matrix）に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="w = df_p(v)" /> が <InlineMath math="T_{f(p)}N" /> の導分であることを示す。
                    <InlineMath math="g, h \in C^\infty(N)" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} w(gh) &= v((gh) \circ f) \\ &= v((g \circ f)(h \circ f)) \\ &= (g \circ f)(p) v(h \circ f) + (h \circ f)(p) v(g \circ f) \\ &= g(f(p)) w(h) + h(f(p)) w(g) \end{aligned}" />
                <p className="mt-2">
                    となり、ライプニッツ則を満たす。線形性も <InlineMath math="v" /> の線形性から明らかである。
                </p>
                <p className="mt-2">
                    次に局所座標表示を考える。<InlineMath math="M" /> の <InlineMath math="p" /> の周りの座標を <InlineMath math="(x^1, \ldots, x^m)" />、<InlineMath math="N" /> の <InlineMath math="f(p)" /> の周りの座標を <InlineMath math="(y^1, \ldots, y^n)" /> とする。
                    <InlineMath math="f" /> は <InlineMath math="y^i = f^i(x^1, \ldots, x^m)" /> と表される。
                    基底ベクトル <InlineMath math="v = \partial/\partial x^j|_p" /> の像 <InlineMath math="df_p(\partial/\partial x^j|_p)" /> が座標関数 <InlineMath math="y^i" /> にどのように作用するか計算する。
                </p>
                <BlockMath math="\left( df_p \left( \left. \frac{\partial}{\partial x^j} \right|_p \right) \right) (y^i) = \left. \frac{\partial}{\partial x^j} \right|_p (y^i \circ f) = \frac{\partial f^i}{\partial x^j}(p)" />
                <p className="mt-2">
                    したがって、<InlineMath math="T_{f(p)}N" /> の基底 <InlineMath math="\{\partial/\partial y^i|_{f(p)}\}" /> を用いて展開すると、
                </p>
                <BlockMath math="df_p \left( \left. \frac{\partial}{\partial x^j} \right|_p \right) = \sum_{i=1}^n \frac{\partial f^i}{\partial x^j}(p) \left. \frac{\partial}{\partial y^i} \right|_{f(p)}" />
                <p className="mt-2">
                    となる。これは、線形写像 <InlineMath math="df_p" /> の表現行列がまさに <InlineMath math="f" /> のヤコビ行列 <InlineMath math="J = (\partial f^i / \partial x^j)" /> であることを示している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な写像について、接写像を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1">
                <p>
                    写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> を <InlineMath math="f(u, v) = (\cos u, \sin u, v)" /> で定義する。
                    これは <InlineMath math="\mathbb{R}^3" /> 内の円柱面をパラメータ付けする写像である。
                </p>
                <p className="mt-2">
                    点 <InlineMath math="(u, v) \in \mathbb{R}^2" /> における接写像 <InlineMath math="df_{(u,v)} : T_{(u,v)}\mathbb{R}^2 \to T_{f(u,v)}\mathbb{R}^3" /> を計算する。
                    <InlineMath math="\mathbb{R}^2" /> の座標を <InlineMath math="(u, v)" />、<InlineMath math="\mathbb{R}^3" /> の座標を <InlineMath math="(x, y, z)" /> とすると、
                </p>
                <BlockMath math="x = \cos u, \quad y = \sin u, \quad z = v" />
                <p className="mt-2">
                    である。基底ベクトル <InlineMath math="\partial/\partial u" /> と <InlineMath math="\partial/\partial v" /> の像は、ヤコビ行列の各列ベクトルに対応する。
                </p>
                <BlockMath math="df_{(u,v)} \left( \frac{\partial}{\partial u} \right) = \frac{\partial x}{\partial u} \frac{\partial}{\partial x} + \frac{\partial y}{\partial u} \frac{\partial}{\partial y} + \frac{\partial z}{\partial u} \frac{\partial}{\partial z} = -\sin u \frac{\partial}{\partial x} + \cos u \frac{\partial}{\partial y}" />
                <BlockMath math="df_{(u,v)} \left( \frac{\partial}{\partial v} \right) = \frac{\partial x}{\partial v} \frac{\partial}{\partial x} + \frac{\partial y}{\partial v} \frac{\partial}{\partial y} + \frac{\partial z}{\partial v} \frac{\partial}{\partial z} = \frac{\partial}{\partial z}" />
                <p className="mt-2">
                    これらは円柱面の接平面を張る2つの基底ベクトルを与えている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連鎖律</h2>

            <p className="leading-relaxed">
                微分積分学において最も重要な公式の一つが、合成関数の微分法則である<strong>連鎖律（Chain rule）</strong>です。
                多様体上の接写像に対しても、連鎖律は極めて自然な形で成り立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-2 (連鎖律)">
                <p>
                    <InlineMath math="M, N, P" /> を滑らかな多様体とし、<InlineMath math="f : M \to N" />、<InlineMath math="g : N \to P" /> を滑らかな写像とする。
                    このとき、合成写像 <InlineMath math="g \circ f : M \to P" /> の点 <InlineMath math="p \in M" /> における接写像は、それぞれの接写像の合成に等しい。
                </p>
                <BlockMath math="d(g \circ f)_p = dg_{f(p)} \circ df_p" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の接ベクトル <InlineMath math="v \in T_pM" /> と、任意の関数 <InlineMath math="h \in C^\infty(P)" /> をとる。
                    接写像の定義（Definition 3.2-1）を左辺と右辺のそれぞれについて展開する。
                </p>
                <p className="mt-2">
                    まず左辺について、
                </p>
                <BlockMath math="(d(g \circ f)_p(v))(h) = v(h \circ (g \circ f)) = v((h \circ g) \circ f)" />
                <p className="mt-2">
                    次に右辺について、<InlineMath math="df_p(v) \in T_{f(p)}N" /> であるから、
                </p>
                <BlockMath math="((dg_{f(p)} \circ df_p)(v))(h) = (dg_{f(p)}(df_p(v)))(h) = (df_p(v))(h \circ g) = v((h \circ g) \circ f)" />
                <p className="mt-2">
                    両者は任意の <InlineMath math="h" /> に対して一致するため、導分として等しい。したがって <InlineMath math="d(g \circ f)_p = dg_{f(p)} \circ df_p" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                連鎖律の強力な応用として、微分同相写像の接写像が必ず線形同型になることが示せます。
            </p>

            <ContentBox type="theorem" title="Corollary 3.2-1">
                <p>
                    <InlineMath math="f : M \to N" /> が微分同相写像（diffeomorphism）であるならば、任意の点 <InlineMath math="p \in M" /> において、接写像 <InlineMath math="df_p : T_pM \to T_{f(p)}N" /> は線形同型写像（同型）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が微分同相であるから、滑らかな逆写像 <InlineMath math="f^{-1} : N \to M" /> が存在し、<InlineMath math="f^{-1} \circ f = \mathrm{id}_M" /> および <InlineMath math="f \circ f^{-1} = \mathrm{id}_N" /> を満たす。
                    ここで <InlineMath math="\mathrm{id}_M" /> は <InlineMath math="M" /> 上の恒等写像である。
                </p>
                <p className="mt-2">
                    恒等写像の接写像は明らかに恒等写像（<InlineMath math="d(\mathrm{id}_M)_p = \mathrm{id}_{T_pM}" />）である。
                    連鎖律（Proposition 3.2-2）を <InlineMath math="f^{-1} \circ f = \mathrm{id}_M" /> に適用すると、
                </p>
                <BlockMath math="d(f^{-1})_{f(p)} \circ df_p = d(\mathrm{id}_M)_p = \mathrm{id}_{T_pM}" />
                <p className="mt-2">
                    同様に <InlineMath math="f \circ f^{-1} = \mathrm{id}_N" /> に適用すると、
                </p>
                <BlockMath math="df_p \circ d(f^{-1})_{f(p)} = d(\mathrm{id}_N)_{f(p)} = \mathrm{id}_{T_{f(p)}N}" />
                <p className="mt-2">
                    これは、線形写像 <InlineMath math="df_p" /> が逆写像 <InlineMath math="d(f^{-1})_{f(p)}" /> を持つことを意味しており、したがって <InlineMath math="df_p" /> は線形同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="連鎖律の普遍性">
                <p>
                    連鎖律は、微分積分学における合成関数の微分法則の抽象化です。
                    多様体論においては、チャートの変換（座標変換）も微分同相写像の合成として記述されるため、連鎖律は「座標変換に対してテンソルやベクトルがどのように変換するか」を決定する基礎となります。
                    この性質は、後の章でテンソル場や微分形式を扱う際に至るところで用いられます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>写像 <InlineMath math="f : M \to N" /> の接写像 <InlineMath math="df_p" /> は、<InlineMath math="T_pM" /> の接ベクトルを <InlineMath math="T_{f(p)}N" /> の接ベクトルへ移す線形写像である。</li>
                    <li>導分の言葉では <InlineMath math="(df_p(v))(g) = v(g \circ f)" /> と定義され、局所座標ではヤコビ行列に一致する。</li>
                    <li>合成写像の接写像は接写像の合成になるという「連鎖律」<InlineMath math="d(g \circ f)_p = dg_{f(p)} \circ df_p" /> が成り立つ。</li>
                    <li>微分同相写像の接写像は、各点で線形同型写像となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
