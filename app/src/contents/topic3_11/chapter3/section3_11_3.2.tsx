import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionTensorAlgebra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは固定された階数（型）のテンソル空間を考えてきましたが、すべての階数のテンソル空間を直和でまとめると、その空間には自然な「積」が定義でき、豊かな代数構造（結合代数）を持ちます。これをテンソル代数と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">
                テンソル代数の定義
            </h2>

            <p className="leading-relaxed">
                まず、様々な次数のテンソル空間を足し合わせ、その上で積の演算を定義します。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 3.2-1 (テンソル代数 <InlineMath math="T(V)" />)</span>}
            >
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上のベクトル空間 <InlineMath math="V" /> に対して、<InlineMath math="V^{\otimes 0} = \mathbb{k}" />、<InlineMath math="V^{\otimes n} = \underbrace{V \otimes \cdots \otimes V}_{n\text{個}}" /> とする。これらの直和
                    <BlockMath math="T(V) = \bigoplus_{n=0}^{\infty} V^{\otimes n} = \mathbb{k} \oplus V \oplus (V \otimes V) \oplus \cdots" />
                    に、テンソル積 <InlineMath math="\otimes" /> を乗法として定めた結合代数を、<InlineMath math="V" /> 上の<strong>テンソル代数</strong>という。
                </p>
                <p>
                    <InlineMath math="T(V)" /> は次数（階数）の概念を持つため、<strong>次数付き代数（graded algebra）</strong>である。<InlineMath math="V^{\otimes n}" /> の元を次数 <InlineMath math="n" /> の元と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 3.2-1 (<InlineMath math="T(\mathbb{R}^2)" /> の低次の元)</span>}
            >
                <p>
                    <InlineMath math="V = \mathbb{R}^2" /> とし、標準基底を <InlineMath math="\{e_1, e_2\}" /> とする。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>次数 0</strong> の元は実数スカラー（例：<InlineMath math="5" />）である。</li>
                    <li><strong>次数 1</strong> の元は <InlineMath math="\mathbb{R}^2" /> のベクトル（例：<InlineMath math="2e_1 + 3e_2" />）である。</li>
                    <li><strong>次数 2</strong> の元は <InlineMath math="\mathbb{R}^2 \otimes \mathbb{R}^2" /> のテンソル（例：<InlineMath math="e_1 \otimes e_2 - e_2 \otimes e_1" />）である。</li>
                </ul>
                <p>
                    異なる次数の元をテンソル積で掛けることができる。例えば、次数 1 の元同士の積は
                    <BlockMath math="\begin{aligned} &(e_1 + e_2) \otimes (e_1 - e_2) \\ &= e_1 \otimes e_1 - e_1 \otimes e_2 + e_2 \otimes e_1 - e_2 \otimes e_2 \end{aligned}" />
                    となり、次数 2 の元が得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                テンソル代数で定義された積が、代数として適切な性質（結合律など）を満たすことを確認します。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 3.2-1 (<InlineMath math="T(V)" /> は結合代数)</span>}
            >
                <p>
                    テンソル代数 <InlineMath math="T(V)" /> の乗法 <InlineMath math="\otimes" /> は結合律 <InlineMath math="(s \otimes t) \otimes u = s \otimes (t \otimes u)" /> を満たし、単位元は <InlineMath math="1 \in \mathbb{k} = V^{\otimes 0}" /> である。また、乗法は和に対して分配律を満たす。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    結合律は、テンソル積の結合律 <InlineMath math="(U \otimes V) \otimes W \cong U \otimes (V \otimes W)" /> から自然に導かれる。
                </p>
                <p>
                    単位元については、任意の元 <InlineMath math="v \in T(V)" /> に対してスカラーの <InlineMath math="1 \in \mathbb{k}" /> とのテンソル積は <InlineMath math="1 \otimes v = v \otimes 1 = v" /> となるため明らかである。
                </p>
                <p>
                    分配律は、テンソル積が各変数について多重線形であるという定義から直接従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">テンソル代数の普遍性</h2>

            <p className="leading-relaxed">
                テンソル積空間が双線形写像に対する普遍性を持っていたように、テンソル代数もまた代数構造に対する強力な普遍性を備えています。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 3.2-1 (テンソル代数の普遍性)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V" /> を含む任意の結合代数 <InlineMath math="A" /> と、線形写像 <InlineMath math="f : V \to A" /> が与えられたとする。
                    このとき、代数準同型 <InlineMath math="\tilde{f} : T(V) \to A" /> であって、<InlineMath math="V" /> への制限が <InlineMath math="f" /> に一致する（すなわち <InlineMath math="\tilde{f}|_V = f" />）ものが唯一存在する。
                </p>
                <p>
                    この意味で、<InlineMath math="T(V)" /> は <InlineMath math="V" /> 上の「自由結合代数（free associative algebra）」と呼ばれる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    写像 <InlineMath math="\tilde{f}" /> を構成する。<InlineMath math="T(V)" /> の純粋テンソル <InlineMath math="v_1 \otimes \cdots \otimes v_n" /> に対して、
                    <BlockMath math="\tilde{f}(v_1 \otimes \cdots \otimes v_n) = f(v_1) f(v_2) \cdots f(v_n)" />
                    （右辺は <InlineMath math="A" /> における積）と定義し、これを線形に拡張する。
                </p>
                <p>
                    <InlineMath math="A" /> での積が多重線形性を満たすため、この写像は well-defined な線形写像となる。また定義より明らかに代数準同型（積を保つ）である。
                </p>
                <p>
                    一意性は、<InlineMath math="T(V)" /> 全体が <InlineMath math="V" /> の元（次数 1 の元）の積と和で生成されるため、<InlineMath math="V" /> 上での値 <InlineMath math="f" /> を決めれば全体での値が確定することから従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この普遍性は、多項式環など他の代数構造を構成する際の基礎となります。
            </p>

            <ContentBox
                type="example"
                title="Example 3.2-2 (テンソル代数から多項式環への準同型)"
            >
                <p>
                    <InlineMath math="V = \mathbb{k}^n" /> とし、その基底を <InlineMath math="\{x_1, \ldots, x_n\}" /> とする。このとき、テンソル代数 <InlineMath math="T(V)" /> は変数 <InlineMath math="x_1, \ldots, x_n" /> の<strong>非可換多項式環</strong>（変数同士の積の順番を区別する多項式の集合）と同一視できる。
                </p>
                <p>
                    ここで、目標となる代数 <InlineMath math="A" /> として通常の可換な多項式環 <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]" /> を考え、包含写像 <InlineMath math="f: V \to A" /> をとる。普遍性により、代数準同型 <InlineMath math="\tilde{f} : T(V) \to \mathbb{k}[x_1, \ldots, x_n]" /> が得られる。
                </p>
                <p>
                    この準同型は、非可換なテンソルの積（例えば <InlineMath math="x_1 \otimes x_2" /> と <InlineMath math="x_2 \otimes x_1" />）を、可換な多項式の積（どちらも <InlineMath math="x_1 x_2" />）へと潰す操作に相当する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>テンソル代数 <InlineMath math="T(V)" /> は、すべての次数のテンソル空間の直和であり、テンソル積を乗法とする結合代数である。</li>
                    <li><InlineMath math="T(V)" /> は <InlineMath math="V" /> 上の自由結合代数であり、<InlineMath math="V" /> から他の代数への線形写像は、常に <InlineMath math="T(V)" /> からの代数準同型へと一意に拡張できる（普遍性）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
