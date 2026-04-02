import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfCoveringSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                被覆空間の理論の集大成とも言えるのが「被覆空間の分類定理」です。これは、空間の幾何学的な被覆構造と、基本群という代数的な群の部分群構造が完全に一対一に対応することを示す、極めて美しい定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">被覆空間の基本定理の主張</h2>

            <p className="leading-relaxed">
                底空間が「よい」空間であれば、その基本群の部分群を調べるだけで、どのような被覆空間が存在するかを完全に分類することができます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.3-1 (被覆空間の分類定理 / ガロア対応)"
            >
                <p>
                    <InlineMath math="X" /> を弧状連結、局所弧状連結、かつ半局所単連結な位相空間とする。このとき、基点付きの被覆空間 <InlineMath math="(\tilde{X}, \tilde{x}_0)" /> の同型類と、基本群 <InlineMath math="\pi_1(X, x_0)" /> の部分群 <InlineMath math="H" /> との間に、次のような<strong>1対1の対応（全単射）</strong>が存在する。
                </p>
                <BlockMath math="(\tilde{X}, \tilde{x}_0) \longleftrightarrow H := p_*(\pi_1(\tilde{X}, \tilde{x}_0))" />
                <p>
                    さらに、この対応は包含関係を逆転させる反順序同型である。すなわち、被覆空間 <InlineMath math="\tilde{X}_1" /> が <InlineMath math="\tilde{X}_2" /> を被覆する（<InlineMath math="\tilde{X}_1" /> がより「大きい」被覆である）ための必要十分条件は、対応する部分群が <InlineMath math="H_1 \subset H_2" /> を満たすことである。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>全射性：</strong><br />
                    任意の部分群 <InlineMath math="H \leq \pi_1(X, x_0)" /> が与えられたとき、それに対応する被覆空間を構成する。<InlineMath math="X" /> の普遍被覆空間 <InlineMath math="\tilde{X}_{\mathrm{univ}}" />（これは道のホモトピー類の空間として構成できる）を考える。<InlineMath math="\tilde{X}_{\mathrm{univ}}" /> 上で、<InlineMath math="H" /> による同値関係 <InlineMath math="\sim_H" /> を次のように定める：2つの道 <InlineMath math="\gamma, \delta" /> に対して、<InlineMath math="[\gamma] \sim_H [\delta]" /> <InlineMath math="\iff" /> <InlineMath math="[\gamma * \bar{\delta}] \in H" />。
                    この同値関係による商空間 <InlineMath math="\tilde{X}_H = \tilde{X}_{\mathrm{univ}} / \sim_H" /> を考えると、これが被覆空間となり、その基本群の像がちょうど <InlineMath math="H" /> に一致する。
                </p>
                <p>
                    <strong>単射性：</strong><br />
                    基本群の像として同じ部分群 <InlineMath math="H" /> を持つ2つの被覆空間 <InlineMath math="\tilde{X}_1, \tilde{X}_2" /> があったとする。このとき、持ち上げ定理（Theorem 6.3-1）により、互いに相手の中への持ち上げ（被覆写像）が存在し、それらが互いに逆となる同型写像を与える。したがって、同じ部分群に対応する被覆空間は同型である。
                </p>
                <p>
                    <strong>反順序：</strong><br />
                    <InlineMath math="\tilde{X}_1" /> から <InlineMath math="\tilde{X}_2" /> への被覆写像が存在すれば、基本群の像の包含関係 <InlineMath math="H_1 \subset H_2" /> が成り立つ。逆も持ち上げ定理により直ちに従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 7.3-1 (<InlineMath math="S^1" /> の被覆空間の分類)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> の基本群は <InlineMath math="\pi_1(S^1) \cong \mathbb{Z}" /> である。群 <InlineMath math="\mathbb{Z}" /> の部分群は、<InlineMath math="\{0\}" /> と <InlineMath math="n\mathbb{Z}" />（<InlineMath math="n \geq 1" />）の形のものに完全に分類される。
                </p>
                <p>
                    分類定理によれば、<InlineMath math="S^1" /> の連結な被覆空間はこれらの部分群と1対1に対応する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>部分群 <InlineMath math="\{0\}" /> に対応する被覆空間：<InlineMath math="\pi_1" /> の像が自明なので、これは<strong>普遍被覆空間</strong>の実数直線 <InlineMath math="\mathbb{R}" /> である。</li>
                    <li>部分群 <InlineMath math="n\mathbb{Z}" /> に対応する被覆空間：これは <InlineMath math="n" /> 乗写像 <InlineMath math="z \mapsto z^n" /> による <InlineMath math="S^1" /> 自身の <strong><InlineMath math="n" />-重被覆</strong> である。</li>
                </ul>
                <p>
                    これ以外に <InlineMath math="S^1" /> の（連結な）被覆空間は存在しないことが、代数的な部分群の分類から結論づけられる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガロア対応と正規被覆の対応</h2>

            <p className="leading-relaxed">
                被覆空間が正規被覆であるという条件は、部分群が正規部分群であるという条件と完全に対応します。
            </p>

            <ContentBox
                type="corollary"
                title="Corollary 7.3-1 (正規被覆と正規部分群の対応)"
            >
                <p>
                    上の分類定理（ガロア対応）において、被覆空間 <InlineMath math="\tilde{X}" /> が<strong>正規被覆</strong>であるための必要十分条件は、対応する部分群 <InlineMath math="H = p_*(\pi_1(\tilde{X}))" /> が <InlineMath math="\pi_1(X)" /> の<strong>正規部分群</strong>であることである。
                </p>
                <p>
                    さらにこのとき、被覆変換群 <InlineMath math="\mathrm{Deck}(\tilde{X}/X)" /> は剰余群と同型になる。
                    <BlockMath math="\mathrm{Deck}(\tilde{X}/X) \cong \pi_1(X) / H" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    正規被覆の定義（Definition 7.1-2）そのものが、「<InlineMath math="p_*(\pi_1(\tilde{X}))" /> が正規部分群である」という条件であった。
                </p>
                <p>
                    被覆変換群が剰余群と同型になることについて：<InlineMath math="X" /> のループ <InlineMath math="\gamma" /> を持ち上げると、その終点の移動が被覆変換を引き起こす。この対応 <InlineMath math="\pi_1(X) \to \mathrm{Deck}(\tilde{X}/X)" /> は全射準同型となる。
                    この準同型の核（すなわち持ち上げが閉じたループになるような <InlineMath math="X" /> のループ全体）は、まさに <InlineMath math="p_*(\pi_1(\tilde{X})) = H" /> に他ならない。準同型定理より <InlineMath math="\pi_1(X) / H \cong \mathrm{Deck}(\tilde{X}/X)" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 7.3-2 (<InlineMath math="n\mathbb{Z} \trianglelefteq \mathbb{Z}" /> から正規被覆)</span>}
            >
                <p>
                    <InlineMath math="S^1" /> の <InlineMath math="n" />-重被覆 <InlineMath math="z \mapsto z^n" /> に対応する部分群は <InlineMath math="n\mathbb{Z}" /> である。
                    <InlineMath math="\mathbb{Z}" /> は可換群なので、その任意の部分群 <InlineMath math="n\mathbb{Z}" /> は正規部分群（<InlineMath math="n\mathbb{Z} \trianglelefteq \mathbb{Z}" />）である。
                </p>
                <p>
                    したがって、この被覆は正規被覆であり、被覆変換群は <InlineMath math="\mathbb{Z} / n\mathbb{Z}" /> に同型となる。
                    実際、この被覆の被覆変換は <InlineMath math="z \mapsto e^{2\pi i k / n} z" /> （<InlineMath math="k = 0, \ldots, n-1" />）という <InlineMath math="n" /> 個の回転であり、巡回群 <InlineMath math="\mathbb{Z} / n\mathbb{Z}" /> をなしていることが確認できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、この理論が代数学のガロア理論とどのように結びついているかについて触れておきましょう。
            </p>

            <ContentBox
                type="remark"
                title="体論のガロア理論との類比"
            >
                <p>
                    定理の名称にもなっている通り、被覆空間の分類定理は「方程式のガロア理論」と驚くほど類似しています。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>空間の被覆 <InlineMath math="\tilde{X} \to X" /> は、体の拡大 <InlineMath math="L / K" /> に対応します。</li>
                    <li>被覆変換群 <InlineMath math="\mathrm{Deck}(\tilde{X}/X)" /> は、ガロア群 <InlineMath math="\mathrm{Gal}(L/K)" /> に対応します。</li>
                    <li>普遍被覆空間 <InlineMath math="\tilde{X}_{\mathrm{univ}}" /> は、代数的閉包 <InlineMath math="\bar{K}" /> あるいは分離閉包に対応します。</li>
                    <li>正規被覆は、正規拡大（ガロア拡大）に対応します。</li>
                </ul>
                <p>
                    この類似性は単なる偶然ではなく、圏論的な枠組み（グロタンディークのガロア理論）において、位相空間の被覆も体の拡大も全く同じ抽象的な構造（ガロア圏）として統一的に理解できることが知られています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>被覆空間の分類定理（ガロア対応）により、被覆空間の同型類と基本群の部分群が1対1に対応する。</li>
                    <li>包含関係は逆転し、部分群が小さいほど被覆空間は「大きく」なる。自明な部分群に対応するのが最大の被覆である普遍被覆である。</li>
                    <li>被覆が正規被覆であることと、対応する部分群が正規部分群であることは同値であり、このとき被覆変換群は剰余群 <InlineMath math="\pi_1(X) / H" /> と同型になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}