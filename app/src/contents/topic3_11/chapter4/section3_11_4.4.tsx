import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionPullback() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ベクトル空間の間の線形写像は、外積代数に対して自然な写像を引き起こします。これを「プルバック（引き戻し）」と呼びます。この概念は、後の多様体論や微分形式の基礎となる重要な操作です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">プルバックの定義と計算</h2>

            <p className="leading-relaxed">
                写像の向きに注意してください。元の空間の線形写像が <InlineMath math="V \to W" /> であるのに対し、双対空間や交代形式（外積代数）上の写像は逆向き <InlineMath math="W \to V" /> になります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.4-1 (プルバック)"
            >
                <p>
                    線形写像 <InlineMath math="f : V \to W" /> が与えられたとする。このとき、<InlineMath math="W" /> 上の交代形式 <InlineMath math="\omega \in \bigwedge^k(W^*)" /> に対して、<InlineMath math="V" /> 上の交代形式への<strong>プルバック（pullback, 引き戻し）</strong> <InlineMath math="f^* \omega \in \bigwedge^k(V^*)" /> を次のように定義する。
                    <BlockMath math="(f^*\omega)(v_1, \ldots, v_k) = \omega(f(v_1), \ldots, f(v_k)) \quad (v_i \in V)" />
                </p>
                <p>
                    （※同値な定義として、ベクトル空間自体の外積代数間の写像 <InlineMath math="\bigwedge^k(V) \to \bigwedge^k(W)" /> を <InlineMath math="f_*(v_1 \wedge \cdots \wedge v_k) = f(v_1) \wedge \cdots \wedge f(v_k)" /> と定めたときの双対写像と捉えることもできる。シラバスの文脈では記号の簡略化のため、この <InlineMath math="f_*" /> のような前押し作用のことも総称してプルバックの枠組みで扱うことが多い。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                プルバックはウェッジ積の構造をそのまま保つという美しい性質を持っています。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.4-1 (プルバックの代数準同型性)"
            >
                <p>
                    プルバック操作 <InlineMath math="f^*" /> はウェッジ積と可換である。すなわち、<InlineMath math="\alpha \in \bigwedge^k(W^*), \beta \in \bigwedge^l(W^*)" /> に対して、
                    <BlockMath math="f^*(\alpha \wedge \beta) = f^*(\alpha) \wedge f^*(\beta)" />
                    が成り立つ。これは <InlineMath math="f^* : \bigwedge(W^*) \to \bigwedge(V^*)" /> が代数準同型であることを意味する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    外積代数の普遍性（Theorem 4.2-2）を用いて示す。1次形式 <InlineMath math="\phi \in W^* = \bigwedge^1(W^*)" /> については、<InlineMath math="f^*\phi = \phi \circ f \in V^*" /> となる。
                </p>
                <p>
                    任意の <InlineMath math="\omega = \phi_1 \wedge \cdots \wedge \phi_k" /> に対して、<InlineMath math="f^*(\omega) = f^*(\phi_1) \wedge \cdots \wedge f^*(\phi_k)" /> と定義したものが、上記の <InlineMath math="(f^*\omega)(v_1,\ldots) = \omega(f(v_1),\ldots)" /> の関係式を満たすことを確認できる。この定義式から、ウェッジ積を保つことは自明である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.4-1 (<InlineMath math="\mathbb{R}^2 \to \mathbb{R}^3" /> のプルバック)</span>}
            >
                <p>
                    線形写像 <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^3" /> を <InlineMath math="f(e_1) = f_1 + f_2" />、<InlineMath math="f(e_2) = f_2 + f_3" /> で定義する。<InlineMath math="\mathbb{R}^3" /> の 2次形式 <InlineMath math="\omega = f^1 \wedge f^2" /> のプルバックを計算する。
                </p>
                <p>
                    代数準同型性より、
                    <BlockMath math="f^*(f^1 \wedge f^2) = f^*(f^1) \wedge f^*(f^2)" />
                    ここで <InlineMath math="f^*(f^1)(e_1) = f^1(f(e_1)) = f^1(f_1+f_2) = 1" />、<InlineMath math="f^*(f^1)(e_2) = f^1(f_2+f_3) = 0" /> より <InlineMath math="f^*(f^1) = e^1" />。
                    同様に <InlineMath math="f^*(f^2) = e^1 + e^2" />。
                </p>
                <p>
                    したがって、
                    <BlockMath math="f^*(\omega) = e^1 \wedge (e^1 + e^2) = e^1 \wedge e^1 + e^1 \wedge e^2 = e^1 \wedge e^2" />
                    となる。
                    また、<InlineMath math="\mathbb{R}^3" /> の 3次形式 <InlineMath math="f^1 \wedge f^2 \wedge f^3" /> を引き戻すと、<InlineMath math="\mathbb{R}^2" /> の 3次形式になるが、<InlineMath math="\dim \bigwedge^3(\mathbb{R}^2) = 0" /> であるため、結果は必ず <InlineMath math="0" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">プルバックと行列式の関係</h2>

            <p className="leading-relaxed">
                自己準同型（同じ空間から同じ空間への写像）のプルバックを最高次形式に適用すると、行列式が自然に現れます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.4-1 (プルバックと行列式)"
            >
                <p>
                    <InlineMath math="V" /> を <InlineMath math="n" /> 次元ベクトル空間とし、線形写像 <InlineMath math="f : V \to V" /> を考える。
                    このとき、プルバック <InlineMath math="f^* : \bigwedge^n(V^*) \to \bigwedge^n(V^*)" /> はスカラー倍による乗法写像であり、その倍率は <InlineMath math="f" /> の行列式 <InlineMath math="\det(f)" /> に等しい。
                    すなわち、すべての <InlineMath math="\omega \in \bigwedge^n(V^*)" /> に対して、
                    <BlockMath math="f^*\omega = \det(f) \omega" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    Theorem 4.3-1 より <InlineMath math="\bigwedge^n(V^*)" /> は 1 次元であるため、線形写像 <InlineMath math="f^*" /> はある定数倍として作用する。
                    基底として <InlineMath math="\omega = e^1 \wedge \cdots \wedge e^n" /> を選ぶ。
                </p>
                <p>
                    プルバックの定義から、<InlineMath math="V" /> の基底 <InlineMath math="e_1, \ldots, e_n" /> に対して評価すると、
                    <BlockMath math="(f^*\omega)(e_1, \ldots, e_n) = \omega(f(e_1), \ldots, f(e_n))" />
                    Definition 4.3-1 における <InlineMath math="\det(f)" /> の定義から、<InlineMath math="f(e_1) \wedge \cdots \wedge f(e_n) = \det(f) (e_1 \wedge \cdots \wedge e_n)" /> であり、<InlineMath math="\omega" /> で評価すると <InlineMath math="\det(f)" /> が得られる。
                    したがって <InlineMath math="f^*\omega = \det(f)\omega" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.4-2 (プルバックと行列式の計算)"
            >
                <p>
                    <InlineMath math="f : \mathbb{R}^2 \to \mathbb{R}^2" /> を <InlineMath math="f(e_1) = 2e_1 + e_2" />、<InlineMath math="f(e_2) = e_1 + 3e_2" /> とする。行列 <InlineMath math="\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}" /> の行列式は <InlineMath math="2 \times 3 - 1 \times 1 = 5" /> である。
                </p>
                <p>
                    <InlineMath math="\omega = e^1 \wedge e^2" /> のプルバックを計算する。
                    <BlockMath math="\begin{aligned} f^*(e^1 \wedge e^2) &= f^*(e^1) \wedge f^*(e^2) \\ &= (2e^1 + e^2) \wedge (e^1 + 3e^2) \\ &= 6(e^1 \wedge e^2) + 1(e^2 \wedge e^1) \\ &= (6 - 1) e^1 \wedge e^2 = 5 e^1 \wedge e^2 \end{aligned}" />
                    となり、<InlineMath math="\det(f) = 5" /> 倍になっていることが確認できる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="微分形式との接続"
            >
                <p>
                    ここで定義したプルバック <InlineMath math="f^*" /> は、後のトピック（3-13、4-5 微分幾何・多様体論）で学ぶ「微分形式のプルバック」の代数的な中核をなすものです。<InlineMath math="n" /> 次形式のプルバックが行列式倍になるという定理は、多変数の微積分における<strong>変数変換の公式（ヤコビアンがかかる理由）</strong>の線形代数的な根拠を与えています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>線形写像 <InlineMath math="f : V \to W" /> は、外積代数上のプルバック <InlineMath math="f^* : \bigwedge(W^*) \to \bigwedge(V^*)" /> を引き起こす。</li>
                    <li>プルバックはウェッジ積を保つ代数準同型である（<InlineMath math="f^*(\alpha \wedge \beta) = f^*\alpha \wedge f^*\beta" />）。</li>
                    <li>自己準同型 <InlineMath math="f : V \to V" /> の最高次形式に対するプルバックは、行列式 <InlineMath math="\det(f)" /> 倍の乗法として作用する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
