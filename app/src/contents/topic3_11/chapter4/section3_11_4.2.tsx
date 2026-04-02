import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionExteriorAlgebra() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ウェッジ積を乗法として備えた代数系を厳密に構成します。これは前章で学んだテンソル代数 <InlineMath math="T(V)" /> を基礎として、反対称性を強制するように商をとることで得られます。これを外積代数（またはグラスマン代数）と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">外積代数の構成</h2>

            <p className="leading-relaxed">
                外積代数は、テンソル代数から「同じベクトルの積は 0」という関係式を割ることで定義されます。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 4.2-1 (外積代数 <InlineMath math="\bigwedge(V)" />)</span>}
            >
                <p>
                    <InlineMath math="V" /> 上のテンソル代数 <InlineMath math="T(V)" /> において、すべての <InlineMath math="v \in V" /> に対する <InlineMath math="v \otimes v" /> で生成される両側イデアルを <InlineMath math="\mathcal{I}" /> とする。このとき、商代数
                    <BlockMath math="\bigwedge(V) = T(V) / \mathcal{I}" />
                    を<strong>外積代数（グラスマン代数、Grassmann algebra）</strong>という。
                </p>
                <p>
                    この商代数における乗法をウェッジ積と呼び、<InlineMath math="\wedge" /> で表す。また、次数 <InlineMath math="n" /> の成分を <InlineMath math="\bigwedge^n(V) = V^{\otimes n} / (\mathcal{I} \cap V^{\otimes n})" /> とする。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                外積代数の各次数の空間がどのような基底を持ち、次元がいくつになるのかを決定します。
            </p>

            <ContentBox
                type="theorem"
                title={<span>Theorem 4.2-1 (<InlineMath math="\bigwedge(V)" /> の基底と次元)</span>}
            >
                <p>
                    ベクトル空間 <InlineMath math="V" /> の次元を <InlineMath math="m" /> とし、その基底を <InlineMath math="\{e_1, \ldots, e_m\}" /> とする。このとき、<InlineMath math="k" /> 次外積空間 <InlineMath math="\bigwedge^k(V)" /> の基底は
                    <BlockMath math="\{ e_{i_1} \wedge \cdots \wedge e_{i_k} \mid 1 \leq i_1 < i_2 < \cdots < i_k \leq m \}" />
                    で与えられる。したがって、その次元は二項係数を用いて
                    <BlockMath math="\dim \bigwedge^k(V) = \binom{m}{k}" />
                    となる。また、外積代数全体の次元は <InlineMath math="\dim \bigwedge(V) = 2^m" /> である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>生成性：</strong><br />
                    任意のテンソル積は基底のテンソル積の和で書ける。これを商に落とすと、ウェッジ積 <InlineMath math="e_{j_1} \wedge \cdots \wedge e_{j_k}" /> の線形結合となる。反対称性（<InlineMath math="v \wedge w = -w \wedge v" />）を用いれば、添字の順序を増加列 <InlineMath math="i_1 < i_2 < \cdots < i_k" /> に並べ替えることができる（同じ添字があれば <InlineMath math="0" /> になるため消える）。したがって、上記の集合で生成される。
                </p>
                <p>
                    <strong>線形独立性：</strong><br />
                    線形独立性を示すには、各基底の係数を取り出す多重交代線形形式を構成すればよい（普遍性より、そのような写像が実際に存在する）。これにより係数がすべて <InlineMath math="0" /> であることが導かれる。
                </p>
                <p>
                    全体の次元については、二項定理より <InlineMath math="\sum_{k=0}^m \binom{m}{k} = (1+1)^m = 2^m" /> から従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.2-1 (<InlineMath math="\bigwedge(\mathbb{R}^3)" /> の全基底)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" />（<InlineMath math="m=3" />）の基底を <InlineMath math="\{e_1, e_2, e_3\}" /> とする。各次数の基底と次元は以下のようになる。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\bigwedge^0(\mathbb{R}^3)" />：基底 <InlineMath math="1" />（スカラー）。次元は <InlineMath math="\binom{3}{0} = 1" />。</li>
                    <li><InlineMath math="\bigwedge^1(\mathbb{R}^3)" />：基底 <InlineMath math="e_1, e_2, e_3" />。次元は <InlineMath math="\binom{3}{1} = 3" />。</li>
                    <li><InlineMath math="\bigwedge^2(\mathbb{R}^3)" />：基底 <InlineMath math="e_1 \wedge e_2, e_1 \wedge e_3, e_2 \wedge e_3" />。次元は <InlineMath math="\binom{3}{2} = 3" />。</li>
                    <li><InlineMath math="\bigwedge^3(\mathbb{R}^3)" />：基底 <InlineMath math="e_1 \wedge e_2 \wedge e_3" />。次元は <InlineMath math="\binom{3}{3} = 1" />。</li>
                </ul>
                <p>
                    これより上の次数（<InlineMath math="k \geq 4" />）では、鳩の巣原理により必ず同じ基底が2回以上現れるため、すべて <InlineMath math="0" /> となる。合計次元は <InlineMath math="1 + 3 + 3 + 1 = 8 = 2^3" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">外積代数の普遍性</h2>

            <p className="leading-relaxed">
                テンソル代数と同様に、外積代数も「交代的な写像」に対する普遍的な性質を持っています。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 4.2-2 (外積代数の普遍性)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V" /> を含む任意の結合代数 <InlineMath math="A" /> と、すべての <InlineMath math="v \in V" /> について <InlineMath math="f(v)^2 = 0" /> を満たす線形写像 <InlineMath math="f : V \to A" /> が与えられたとする。
                    このとき、代数準同型 <InlineMath math="\tilde{f} : \bigwedge(V) \to A" /> であって、<InlineMath math="\tilde{f}|_V = f" /> となるものが唯一存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    テンソル代数の普遍性（§3.2 Theorem 3.2-1）から、まず代数準同型 <InlineMath math="\hat{f} : T(V) \to A" /> が一意に定まる。
                </p>
                <p>
                    仮定より任意の <InlineMath math="v \in V" /> に対して <InlineMath math="\hat{f}(v \otimes v) = f(v)^2 = 0" /> である。したがって、<InlineMath math="v \otimes v" /> で生成されるイデアル <InlineMath math="\mathcal{I}" /> は <InlineMath math="\hat{f}" /> の核（kernel）に含まれる（<InlineMath math="\mathcal{I} \subset \ker \hat{f}" />）。
                </p>
                <p>
                    準同型定理により、<InlineMath math="\hat{f}" /> は商代数 <InlineMath math="\bigwedge(V) = T(V)/\mathcal{I}" /> 上の well-defined な代数準同型 <InlineMath math="\tilde{f}" /> を自然に誘導する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                外積代数における具体的な積の計算を見てみましょう。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 4.2-2 (<InlineMath math="\bigwedge(\mathbb{R}^2)" /> の乗法)</span>}
            >
                <p>
                    <InlineMath math="V = \mathbb{R}^2" /> の基底を <InlineMath math="\{e_1, e_2\}" /> とする。外積代数における積の規則は
                    <BlockMath math="e_1 \wedge e_1 = 0, \quad e_2 \wedge e_2 = 0, \quad e_1 \wedge e_2 = -e_2 \wedge e_1" />
                    である。
                </p>
                <p>
                    これを用いて、2つのベクトル <InlineMath math="v = a e_1 + b e_2" /> と <InlineMath math="w = c e_1 + d e_2" /> のウェッジ積を計算すると、
                    <BlockMath math="\begin{aligned} v \wedge w &= (a e_1 + b e_2) \wedge (c e_1 + d e_2) \\ &= ac(e_1 \wedge e_1) + ad(e_1 \wedge e_2) \\ &\quad + bc(e_2 \wedge e_1) + bd(e_2 \wedge e_2) \\ &= 0 + ad(e_1 \wedge e_2) - bc(e_1 \wedge e_2) + 0 \\ &= (ad - bc) e_1 \wedge e_2 \end{aligned}" />
                    となる。現れた係数 <InlineMath math="ad - bc" /> は、行列 <InlineMath math="\begin{pmatrix} a & c \\ b & d \end{pmatrix}" /> の行列式に他ならない。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>外積代数 <InlineMath math="\bigwedge(V)" /> は、テンソル代数を <InlineMath math="v \otimes v" /> で生成されるイデアルで割って得られる代数である。</li>
                    <li><InlineMath math="\dim V = m" /> のとき、<InlineMath math="k" /> 次外積空間 <InlineMath math="\bigwedge^k(V)" /> の次元は二項係数 <InlineMath math="\binom{m}{k}" /> であり、外積代数全体の次元は <InlineMath math="2^m" /> である。</li>
                    <li><InlineMath math="m" /> より大きい次数の外積空間はすべて <InlineMath math="\{0\}" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
