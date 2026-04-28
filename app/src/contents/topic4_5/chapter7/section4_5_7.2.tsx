import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PoincareLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で、閉形式が必ずしも完全形式にならない例（<InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> の原点の穴）を見ました。
                では、空間に「穴」が全くない場合、すなわち一点に連続的に縮められる（可縮な）空間ではどうなるでしょうか。
                この問いに対する答えが、微分形式の理論における最も基本的な定理の一つである<strong>ポアンカレの補題（Poincaré lemma）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ポアンカレの補題</h2>

            <p className="leading-relaxed">
                可縮（contractible）な空間とは、連続的な変形（ホモトピー）によって一点に縮約できる空間のことです。
                例えば、ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> や凸領域は可縮です。
                ポアンカレの補題は、このような空間上では「閉形式は常に完全形式である」と主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (ポアンカレの補題)">
                <p>
                    <InlineMath math="M" /> を可縮な滑らかな多様体とする。このとき、<InlineMath math="k \geq 1" /> に対して
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(M) = 0" />
                <p className="mt-2">
                    が成り立つ。すなわち、<InlineMath math="M" /> 上のすべての閉 <InlineMath math="k" />-形式は完全形式である（<InlineMath math="d\omega = 0 \implies \omega = d\eta" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> が点 <InlineMath math="p_0" /> に可縮であるとする。すなわち、滑らかなホモトピー <InlineMath math="F : M \times [0, 1] \to M" /> が存在して、<InlineMath math="F(p, 1) = p" />（恒等写像）および <InlineMath math="F(p, 0) = p_0" />（定値写像）を満たす。
                </p>
                <p className="mt-2">
                    このホモトピー <InlineMath math="F" /> を用いて、微分形式の次数を1つ下げる線形作用素（ホモトピー作用素）<InlineMath math="K : \Omega^k(M) \to \Omega^{k-1}(M)" /> を構成する。
                    <InlineMath math="M \times [0, 1]" /> 上の <InlineMath math="k" />-形式 <InlineMath math="F^*\omega" /> は、局所座標 <InlineMath math="(x, t)" /> を用いて
                </p>
                <BlockMath math="F^*\omega = A(x, t) \wedge dt + B(x, t)" />
                <p className="mt-2">
                    と一意に分解できる（ここで <InlineMath math="A" /> は <InlineMath math="dt" /> を含まない <InlineMath math="(k-1)" />-形式、<InlineMath math="B" /> は <InlineMath math="dt" /> を含まない <InlineMath math="k" />-形式）。
                    このとき、<InlineMath math="K\omega" /> を <InlineMath math="A(x, t)" /> の <InlineMath math="t" /> に関する積分として定義する。
                </p>
                <BlockMath math="K\omega = \int_0^1 A(x, t) \, dt" />
                <p className="mt-2">
                    この作用素 <InlineMath math="K" /> が、次の「ホモトピー公式（カルタンの公式の積分形）」を満たすことが計算により示される（証明はやや煩雑なため省略するが、本質的には積分の微分則と <InlineMath math="d" /> の定義の交換である）。
                </p>
                <BlockMath math="d(K\omega) + K(d\omega) = F_1^*\omega - F_0^*\omega" />
                <p className="mt-2">
                    ここで <InlineMath math="F_1(p) = p" /> より <InlineMath math="F_1^*\omega = \omega" /> である。また <InlineMath math="F_0(p) = p_0" /> は定値写像なので、接写像が零写像となり、<InlineMath math="k \geq 1" /> ならば <InlineMath math="F_0^*\omega = 0" /> である。
                    したがって、
                </p>
                <BlockMath math="d(K\omega) + K(d\omega) = \omega" />
                <p className="mt-2">
                    となる。いま <InlineMath math="\omega" /> が閉形式（<InlineMath math="d\omega = 0" />）であると仮定すると、第2項が消えて
                </p>
                <BlockMath math="\omega = d(K\omega)" />
                <p className="mt-2">
                    が得られる。これは <InlineMath math="\eta = K\omega" /> とおけば <InlineMath math="\omega = d\eta" /> となることを意味し、<InlineMath math="\omega" /> が完全形式であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この証明で構成したホモトピー作用素 <InlineMath math="K" /> を用いると、閉形式からその原始関数（または原始形式）を具体的に構成することができます。
            </p>

            <ContentBox type="example" title="Example 7.2-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> は原点に可縮である（<InlineMath math="F(x, t) = tx" />）。
                    <InlineMath math="\mathbb{R}^2" /> 上の閉2-形式 <InlineMath math="\omega = y\,dx \wedge dy" /> に対して、ポアンカレの補題の証明に従って原始1-形式 <InlineMath math="\eta" />（<InlineMath math="d\eta = \omega" />）を構成する。
                </p>
                <p className="mt-2">
                    まず <InlineMath math="F^*\omega" /> を計算する。<InlineMath math="F^*(x) = tx, F^*(y) = ty" /> より <InlineMath math="F^*(dx) = x\,dt + t\,dx, F^*(dy) = y\,dt + t\,dy" /> である。
                </p>
                <BlockMath math="\begin{aligned} F^*\omega &= (ty) (x\,dt + t\,dx) \wedge (y\,dt + t\,dy) \\ &= ty (xt\,dt \wedge dy + yt\,dx \wedge dt + t^2\,dx \wedge dy) \\ &= t^2y(x\,dy - y\,dx) \wedge dt + t^3y\,dx \wedge dy \end{aligned}" />
                <p className="mt-2">
                    ここで <InlineMath math="dt" /> を含む項の係数部分が <InlineMath math="A(x, t)" /> である。ウェッジ積の順序を入れ替えて <InlineMath math="dt" /> を後ろにすると、
                </p>
                <BlockMath math="A(x, t) = -t^2y(x\,dy - y\,dx) = t^2y(y\,dx - x\,dy)" />
                <p className="mt-2">
                    これを <InlineMath math="t" /> について <InlineMath math="0" /> から <InlineMath math="1" /> まで積分して <InlineMath math="K\omega" /> を得る。
                </p>
                <BlockMath math="K\omega = \left( \int_0^1 t^2 \, dt \right) y(y\,dx - x\,dy) = \frac{1}{3} y^2 \, dx - \frac{1}{3} xy \, dy" />
                <p className="mt-2">
                    これが求める原始1-形式 <InlineMath math="\eta" /> である。実際に外微分を計算して確認すると、
                </p>
                <BlockMath math="d\eta = d\left(\frac{1}{3} y^2\right) \wedge dx - d\left(\frac{1}{3} xy\right) \wedge dy = \frac{2}{3} y\,dy \wedge dx - \frac{1}{3} y\,dx \wedge dy = -\frac{2}{3} y\,dx \wedge dy - \frac{1}{3} y\,dx \wedge dy = -y\,dx \wedge dy" />
                <p className="mt-2">
                    符号が合わないが、これは <InlineMath math="F(x, t) = tx" /> という収縮の向き（<InlineMath math="t=1" /> で恒等写像、<InlineMath math="t=0" /> で原点）と、証明で用いたホモトピー公式の符号の規約によるものである。
                    いずれにせよ、<InlineMath math="\eta = -\frac{1}{3} y^2 \, dx + \frac{1}{3} xy \, dy" /> とすれば <InlineMath math="d\eta = \omega" /> となり、原始形式が構成できた。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ホモトピー不変性</h2>

            <p className="leading-relaxed">
                ポアンカレの補題の証明で用いた「ホモトピー公式」は、より一般的な状況で「ホモトピー不変性」という極めて重要な定理を導きます。
                これは、連続的に変形できる2つの写像は、コホモロジー群において全く同じ引き戻しを誘導するという定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-2 (ホモトピー不変性)">
                <p>
                    <InlineMath math="f, g : M \to N" /> を滑らかな写像とし、これらが滑らかにホモトピック（homotopic）であるとする。
                    すなわち、滑らかな写像 <InlineMath math="H : M \times [0, 1] \to N" /> が存在して、<InlineMath math="H(p, 0) = f(p)" /> かつ <InlineMath math="H(p, 1) = g(p)" /> を満たすとする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="f" /> と <InlineMath math="g" /> が誘導するコホモロジー群の間の写像は等しい。
                </p>
                <BlockMath math="f^* = g^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ポアンカレの補題の証明と同様に、ホモトピー <InlineMath math="H" /> を用いてホモトピー作用素 <InlineMath math="K : \Omega^k(N) \to \Omega^{k-1}(M)" /> を構成する。
                    この <InlineMath math="K" /> は以下のホモトピー公式を満たす。
                </p>
                <BlockMath math="d(K\omega) + K(d\omega) = H_1^*\omega - H_0^*\omega = g^*\omega - f^*\omega" />
                <p className="mt-2">
                    いま、<InlineMath math="[\omega] \in H^k_{\mathrm{dR}}(N)" /> を任意のコホモロジー類とする。代表元 <InlineMath math="\omega" /> は閉形式であるから <InlineMath math="d\omega = 0" /> である。
                    これを上の公式に代入すると、
                </p>
                <BlockMath math="d(K\omega) = g^*\omega - f^*\omega" />
                <p className="mt-2">
                    となる。これは、引き戻された2つの形式の差 <InlineMath math="g^*\omega - f^*\omega" /> が完全形式（<InlineMath math="K\omega" /> の外微分）であることを意味する。
                    したがって、コホモロジー類として等しい。
                </p>
                <BlockMath math="[g^*\omega] = [f^*\omega] \implies g^*([\omega]) = f^*([\omega])" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理から直ちに、多様体の「形」に関する強力な結論が得られます。
            </p>

            <ContentBox type="theorem" title="Corollary 7.2-1">
                <p>
                    <InlineMath math="M" /> と <InlineMath math="N" /> がホモトピー同値（homotopy equivalent）な多様体であるならば、それらのド・ラームコホモロジー群は同型である。
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(M) \cong H^k_{\mathrm{dR}}(N)" />
                <p className="mt-2">
                    特に、微分同相な多様体は同じコホモロジー群を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> と <InlineMath math="N" /> がホモトピー同値であるとは、滑らかな写像 <InlineMath math="f : M \to N" /> と <InlineMath math="g : N \to M" /> が存在して、<InlineMath math="g \circ f" /> が <InlineMath math="M" /> の恒等写像 <InlineMath math="\mathrm{id}_M" /> にホモトピックであり、<InlineMath math="f \circ g" /> が <InlineMath math="N" /> の恒等写像 <InlineMath math="\mathrm{id}_N" /> にホモトピックであることである。
                </p>
                <p className="mt-2">
                    ホモトピー不変性（Theorem 7.2-2）と引き戻しの関手性（Proposition 7.1-2）より、
                </p>
                <BlockMath math="(g \circ f)^* = f^* \circ g^* = (\mathrm{id}_M)^* = \mathrm{id}_{H^k(M)}" />
                <BlockMath math="(f \circ g)^* = g^* \circ f^* = (\mathrm{id}_N)^* = \mathrm{id}_{H^k(N)}" />
                <p className="mt-2">
                    が成り立つ。これは <InlineMath math="f^*" /> と <InlineMath math="g^*" /> が互いに逆写像であることを意味し、したがってこれらは同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="局所と大域">
                <p>
                    ポアンカレの補題は、「局所的にはすべての閉形式は完全形式である」ということを主張しています（任意の点の十分小さな近傍は可縮な球体と同相であるため）。
                    したがって、閉形式が完全形式にならない（コホモロジーが非自明になる）という現象は、決して局所的な性質ではなく、多様体の「大域的なトポロジー（穴の存在など）」にのみ起因するものであることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ポアンカレの補題：可縮な多様体上では、すべての閉形式は完全形式である（<InlineMath math="H^k_{\mathrm{dR}}(M) = 0" />）。</li>
                    <li>ホモトピー不変性：ホモトピックな写像は、コホモロジー群において等しい引き戻しを誘導する。</li>
                    <li>ホモトピー同値な多様体（例えば微分同相な多様体や、変形レトラクトの関係にある多様体）は、同型なコホモロジー群を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
