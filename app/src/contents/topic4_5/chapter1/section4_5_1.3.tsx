import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SmoothManifolds() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で見たように、多様体上の点に座標を入れる方法（チャート）は無数に存在し、それらが重なる部分では「座標変換」が生じます。
                多様体上で微分積分学を展開するためには、どの座標系を使っても「滑らかさ」の概念が一致するように、座標変換自体が無限回微分可能（<InlineMath math="C^\infty" /> 級）であることを要求します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="C^\infty" />-アトラス</h2>

            <p>
                すべての座標変換が滑らかであるようなアトラスを特別に区別して定義します。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.3-1 (<InlineMath math="C^\infty" />-アトラス)</span>}>
                <p>
                    位相多様体 <InlineMath math="M" /> のアトラス <InlineMath math="\mathcal{A} = \{(U_\alpha, \varphi_\alpha)\}_{\alpha \in A}" /> が <b><InlineMath math="C^\infty" />-アトラス（smooth atlas）</b> であるとは、任意の <InlineMath math="\alpha, \beta \in A" /> （ただし <InlineMath math="U_\alpha \cap U_\beta \neq \emptyset" />）に対して、座標変換
                </p>
                <BlockMath math="\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)" />
                <p className="mt-2">
                    が <InlineMath math="\mathbb{R}^n" /> の開集合間の <InlineMath math="C^\infty" /> 級微分同相写像（<InlineMath math="C^\infty" />-diffeomorphism）であることをいう。
                </p>
            </ContentBox>

            <p>
                前節で計算した球面の立体射影は、まさにこの <InlineMath math="C^\infty" />-アトラスの例になっています。
            </p>

            <ContentBox type="example" title="Example 1.3-1">
                <p>
                    <strong><InlineMath math="S^2" /> の立体射影アトラス</strong>
                </p>
                <p className="mt-2">
                    球面 <InlineMath math="S^2" /> に対して、北極からの立体射影チャート <InlineMath math="(U_N, \varphi_N)" /> と南極からの立体射影チャート <InlineMath math="(U_S, \varphi_S)" /> を考える。
                    <InlineMath math="U_N \cup U_S = S^2" /> であるため、<InlineMath math="\mathcal{A} = \{(U_N, \varphi_N), (U_S, \varphi_S)\}" /> は <InlineMath math="S^2" /> のアトラスである。
                </p>
                <p className="mt-2">
                    Example 1.2-2 で計算したように、座標変換 <InlineMath math="\varphi_S \circ \varphi_N^{-1}(u, v) = \left( \frac{u}{u^2+v^2}, \frac{v}{u^2+v^2} \right)" /> は、原点 <InlineMath math="(0,0)" /> を除く平面上で有理関数として表され、分母が <InlineMath math="0" /> にならないため <InlineMath math="C^\infty" /> 級である。
                    逆変換 <InlineMath math="\varphi_N \circ \varphi_S^{-1}" /> も全く同じ形になるため同様に <InlineMath math="C^\infty" /> 級である。
                </p>
                <p className="mt-2">
                    したがって、<InlineMath math="\mathcal{A}" /> は <InlineMath math="S^2" /> の <InlineMath math="C^\infty" />-アトラスである。
                </p>
            </ContentBox>

            <p>
                しかし、1つの多様体に対して <InlineMath math="C^\infty" />-アトラスは一通りには決まりません。本質的に同じ「滑らかな構造」を定めているアトラス同士を同一視するために、アトラスの「整合性」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (整合性)">
                <p>
                    <InlineMath math="M" /> 上の2つの <InlineMath math="C^\infty" />-アトラス <InlineMath math="\mathcal{A}_1" /> と <InlineMath math="\mathcal{A}_2" /> が <b>整合する（compatible）</b> とは、その合併 <InlineMath math="\mathcal{A}_1 \cup \mathcal{A}_2" /> もまた <InlineMath math="C^\infty" />-アトラスになることをいう。
                </p>
                <p className="mt-2">
                    すなわち、<InlineMath math="\mathcal{A}_1" /> の任意のチャートと <InlineMath math="\mathcal{A}_2" /> の任意のチャートの間の座標変換がすべて <InlineMath math="C^\infty" /> 級になることである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極大アトラスと滑らかな構造</h2>

            <p>
                整合するアトラスは、多様体上に「同じ微分の基準」を定めていると考えられます。
                そこで、整合するチャートをすべて集めてしまった「極大アトラス」を考えることで、滑らかな構造を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-3 (極大アトラスと滑らかな構造)">
                <p>
                    <InlineMath math="M" /> 上の <InlineMath math="C^\infty" />-アトラス <InlineMath math="\mathcal{A}_{\max}" /> が <b>極大アトラス（maximal atlas）</b> であるとは、<InlineMath math="\mathcal{A}_{\max}" /> と整合する任意のチャートがすでに <InlineMath math="\mathcal{A}_{\max}" /> に含まれていることをいう。
                </p>
                <p className="mt-2">
                    位相多様体 <InlineMath math="M" /> に極大アトラス <InlineMath math="\mathcal{A}_{\max}" /> を一つ指定した組 <InlineMath math="(M, \mathcal{A}_{\max})" /> を <b>滑らかな多様体（smooth manifold）</b> または <b><InlineMath math="C^\infty" /> 多様体</b> といい、指定された極大アトラスを <InlineMath math="M" /> の <b>滑らかな構造（smooth structure）</b> という。
                </p>
            </ContentBox>

            <p>
                極大アトラスという概念は非常に巨大な集合ですが、幸いなことに、私たちが具体的なアトラスを一つ構成すれば、それを含む極大アトラスが自動的に一意に定まります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1">
                <p>
                    位相多様体 <InlineMath math="M" /> 上の任意の <InlineMath math="C^\infty" />-アトラス <InlineMath math="\mathcal{A}" /> に対して、<InlineMath math="\mathcal{A}" /> を含む極大アトラス <InlineMath math="\mathcal{A}_{\max}" /> が一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mathcal{A}" /> と整合する <InlineMath math="M" /> 上のすべてのチャートの集合を <InlineMath math="\mathcal{A}_{\max}" /> と定義する。
                </p>
                <p className="mt-2">
                    まず、<InlineMath math="\mathcal{A}_{\max}" /> 自身が <InlineMath math="C^\infty" />-アトラスであることを示す。
                    <InlineMath math="(U, \varphi), (V, \psi) \in \mathcal{A}_{\max}" /> を任意の2つのチャートとする。これらが直接整合すること（座標変換が <InlineMath math="C^\infty" /> であること）を示せばよい。
                </p>
                <p className="mt-2">
                    <InlineMath math="p \in U \cap V" /> を任意の点とする。<InlineMath math="\mathcal{A}" /> は <InlineMath math="M" /> を被覆するので、<InlineMath math="p \in W" /> となる <InlineMath math="\mathcal{A}" /> のチャート <InlineMath math="(W, \theta)" /> が存在する。
                    <InlineMath math="\mathcal{A}_{\max}" /> の定義より、<InlineMath math="(U, \varphi)" /> も <InlineMath math="(V, \psi)" /> も <InlineMath math="(W, \theta)" /> と整合する。
                    したがって、<InlineMath math="p" /> の近傍において座標変換を合成すると、
                </p>
                <BlockMath math="\psi \circ \varphi^{-1} = (\psi \circ \theta^{-1}) \circ (\theta \circ \varphi^{-1})" />
                <p className="mt-2">
                    となる。右辺の2つの写像はどちらも <InlineMath math="C^\infty" /> 級であるため、その合成である <InlineMath math="\psi \circ \varphi^{-1}" /> も <InlineMath math="p" /> の近傍で <InlineMath math="C^\infty" /> 級となる。
                    <InlineMath math="p" /> は任意であったから、<InlineMath math="\mathcal{A}_{\max}" /> は <InlineMath math="C^\infty" />-アトラスである。
                </p>
                <p className="mt-2">
                    構成から明らかに <InlineMath math="\mathcal{A} \subset \mathcal{A}_{\max}" /> であり、<InlineMath math="\mathcal{A}_{\max}" /> は極大である。
                    また、アトラスの整合性は同値関係をなすため、極大アトラスの一意性も保証される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="他の多様体構造">
                <p>
                    本章では座標変換が <InlineMath math="C^\infty" /> 級（無限回微分可能）である「滑らかな多様体」を扱いますが、座標変換に要求する条件を変えることで、様々な多様体が定義されます。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>座標変換が <InlineMath math="C^k" /> 級（<InlineMath math="k" /> 回連続微分可能）なら <strong><InlineMath math="C^k" /> 多様体</strong>。</li>
                    <li>座標変換が実解析的（テイラー展開と一致する）なら <strong>実解析的多様体（<InlineMath math="C^\omega" /> 多様体）</strong>。</li>
                    <li>座標変換が <InlineMath math="\mathbb{C}^n" /> の開集合間の正則関数（複素微分可能）なら <strong>複素多様体</strong>。</li>
                </ul>
                <p className="mt-2">
                    現代の微分幾何学では、特段の理由がない限り扱いやすい <InlineMath math="C^\infty" /> 級を前提とすることが多く、単に「多様体」と言えば滑らかな多様体を指すのが標準的です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="C^\infty" />-アトラスとは、すべての座標変換が <InlineMath math="C^\infty" /> 級微分同相写像となるアトラスである。</li>
                    <li>滑らかな多様体は、位相多様体に極大 <InlineMath math="C^\infty" />-アトラス（滑らかな構造）を指定したものである。</li>
                    <li>具体的な <InlineMath math="C^\infty" />-アトラスを一つ与えれば、それを含む極大アトラスが一意に定まり、多様体に滑らかな構造が入る。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
