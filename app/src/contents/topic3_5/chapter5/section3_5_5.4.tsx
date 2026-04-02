import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EigenfunctionExpansionCompleteness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                シュトゥルム・リウヴィル問題の理論的到達点は、その固有関数系が「任意の関数を表現できる」という<b>完全性</b>にあります。
                これによって、偏微分方程式を級数解として解くことが数学的に正当化されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有関数展開の完全性</h2>

            <p className="leading-relaxed">
                有限次元の線形空間における基底による展開を、無限次元の関数空間に拡張したものが固有関数展開です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 (固有関数展開の完全性)">
                <p>
                    正則な SL 問題の固有関数系 <InlineMath math="\{ \phi_n \}_{n=1}^\infty" /> は、重み <InlineMath math="w" /> 付きの平方可積分関数空間 <InlineMath math="L^2(a, b)" /> において、
                    <b>完全正規直交系</b>（または直交系）をなす。
                    すなわち、任意の関数 <InlineMath math="f \in L^2_w(a, b)" /> は以下のように展開できる：
                    <BlockMath math="f(x) = \sum_{n=1}^\infty c_n \phi_n(x), \quad c_n = \frac{\langle f, \phi_n \rangle_w}{\| \phi_n \|_w^2}" />
                    また、この級数は <InlineMath math="L^2" /> の意味で収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この完全性の証明には、SL 作用素の逆作用素（積分作用素）が自己共役なコンパクト作用素であることを利用する。
                    無限次元空間における「コンパクト作用素のスペクトル定理」を適用することで、固有関数が空間全体の基底をなすことが保証される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-1 (フーリエ正弦展開)">
                <p>
                    <InlineMath math="f(x) = x" />（<InlineMath math="0 < x < L" />）を固有関数 <InlineMath math="\sin(n\pi x/L)" /> で展開することを考える。
                    展開係数 <InlineMath math="c_n" /> を計算すると、
                    <BlockMath math="c_n = \frac{2}{L} \int_0^L x \sin\left(\frac{n\pi x}{L}\right) dx = \frac{2L}{n\pi} (-1)^{n+1}" />
                    となり、<InlineMath math="x = \sum_{n=1}^\infty \frac{2L}{n\pi} (-1)^{n+1} \sin\left(\frac{n\pi x}{L}\right)" /> という展開が得られる。
                    部分和 <InlineMath math="S_N(x)" /> を計算し、たとえば <InlineMath math="N = 5" /> の場合と元の関数を比較すると、端点（ギブス現象）を除いて、項数が増えるほど急速に元の直線に収束していく様子が確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PDE の解への応用</h2>

            <p className="leading-relaxed">
                完全性は初期値問題だけでなく、非同次境界値問題の解析においても不可欠な概念です。
            </p>

            <ContentBox type="example" title="Example 5.4-2 (非同次境界値問題の解)">
                <p>
                    非同次方程式 <InlineMath math="u_{xx} + \lambda u = f(x)" />（<InlineMath math="u(0)=u(L)=0" />）を考える。
                    解 <InlineMath math="u" /> およびソース項 <InlineMath math="f" /> を固有関数 <InlineMath math="\phi_n = \sin(n\pi x/L)" /> で展開し、
                    <BlockMath math="u(x) = \sum U_n \phi_n(x), \quad f(x) = \sum F_n \phi_n(x)" />
                    と置くと、各項は <InlineMath math="[-(n\pi/L)^2 + \lambda] U_n = F_n" /> という代数方程式に従う。
                    この式から、<InlineMath math="\lambda" /> が系の固有値に一致する場合、共鳴（解の非存在または非一意性）が起こることが示される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完全性と一意性">
                <p>
                    固有関数展開の完全性は、分離変数法で得られた解が、想定される関数空間において「唯一の」あるいは「可能なすべての」解であることを保証します。
                    この理論的基盤があるからこそ、物理学や工学における複雑な振動や波動の解析（Chapter 6, 7）を、固有モードの重ね合わせとして安心して進めることができるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>SL 問題の固有関数系は、<InlineMath math="L^2" /> 関数空間において完全正規直交系をなす。</li>
                    <li>これにより、任意の初期条件やソース項を固有関数の級数（一般化フーリエ級数）として表現できる。</li>
                    <li>固有関数の完全性は、偏微分方程式の解の一意性を理論的に支える基盤となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
