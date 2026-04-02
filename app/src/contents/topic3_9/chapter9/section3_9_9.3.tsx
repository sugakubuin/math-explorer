import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HilbertBasisTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、ネーター環から剰余環や局所化を作ってもネーター性が保たれることを見ました。本節では、多項式環を作る操作によってもネーター性が保たれることを示す、非常に有名で重要な定理「ヒルベルトの基底定理」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルトの基底定理</h2>

            <p>
                ダフィット・ヒルベルト（David Hilbert）によって証明されたこの定理は、現代の可換環論と代数幾何学の出発点とも言える結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 9.3-1 (ヒルベルトの基底定理)">
                <p>
                    可換環 <InlineMath math="R" /> がネーター環ならば、その上の 1 変数多項式環 <InlineMath math="R[x]" /> もネーター環である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多項式環 <InlineMath math="R[x]" /> の任意のイデアル <InlineMath math="I" /> が有限生成であることを示す。<InlineMath math="I" /> に属する多項式の最高次係数全体に <InlineMath math="0" /> を加えた集合を <InlineMath math="L" /> とおく。<InlineMath math="L" /> は <InlineMath math="R" /> のイデアルとなることが多項式の性質から容易に確認できる。
                </p>
                <p>
                    <InlineMath math="R" /> はネーター環なので、<InlineMath math="L" /> は有限生成であり、ある <InlineMath math="a_1, \ldots, a_k \in R" /> を用いて <InlineMath math="L = (a_1, \ldots, a_k)" /> と書ける。各 <InlineMath math="a_i" /> を最高次係数として持つ <InlineMath math="I" /> の多項式 <InlineMath math="f_i \in I" /> を 1 つずつ選ぶ。これらの多項式の次数の最大値を <InlineMath math="n = \max(\deg f_1, \ldots, \deg f_k)" /> とする。
                </p>
                <p>
                    ここで、次数が <InlineMath math="n" /> 未満の多項式からなる部分空間を考える。<InlineMath math="R" /> 上の加群として、次数 <InlineMath math="n" /> 未満の多項式全体 <InlineMath math="R_{<n}[x]" /> は有限生成（基底 <InlineMath math="1, x, \ldots, x^{n-1}" /> を持つ）であり、<InlineMath math="R" /> がネーター環であることから、その部分加群である <InlineMath math="I \cap R_{<n}[x]" /> も有限生成となる。その生成元を <InlineMath math="g_1, \ldots, g_m \in I" /> とする。
                </p>
                <p>
                    任意の <InlineMath math="f \in I" /> をとる。もし <InlineMath math="\deg f \geq n" /> であれば、<InlineMath math="f" /> の最高次係数は <InlineMath math="L" /> に属するため、<InlineMath math="a_i" /> たちの線形結合で書ける。これにより、<InlineMath math="f_i" /> に適当な単項式を掛けたものを <InlineMath math="f" /> から引くことで、最高次の項を消去できる。これを繰り返すことで、<InlineMath math="f" /> を <InlineMath math="f_1, \ldots, f_k" /> の線形結合と、次数が <InlineMath math="n" /> 未満の多項式 <InlineMath math="h \in I \cap R_{<n}[x]" /> の和として表すことができる。さらに <InlineMath math="h" /> は <InlineMath math="g_1, \ldots, g_m" /> の線形結合で書ける。
                </p>
                <p>
                    したがって、<InlineMath math="I" /> のすべての元は <InlineMath math="f_1, \ldots, f_k, g_1, \ldots, g_m" /> によって生成される。すなわち <InlineMath math="I = (f_1, \ldots, f_k, g_1, \ldots, g_m)" /> となり、<InlineMath math="I" /> は有限生成である。ゆえに <InlineMath math="R[x]" /> はネーター環である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理を帰納的に適用することで、多変数の場合にも結果を拡張できます。
            </p>

            <ContentBox type="example" title="Example 9.3-1 (Z[x] はネーター環)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> は PID でありネーター環であるため、ヒルベルトの基底定理より <InlineMath math="\mathbb{Z}[x]" /> もネーター環である。
                </p>
                <p>
                    さらに、帰納的に <InlineMath math="\mathbb{Z}[x_1, \ldots, x_n]" /> もネーター環となる。これにより、<InlineMath math="(x_1, x_2, x_1 x_2 - 1)" /> のような複雑に見えるイデアルも、必ず有限個の多項式で生成されることが保証される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルトの基底定理の応用と意義</h2>

            <p>
                ヒルベルトの基底定理は、単に多項式環の性質にとどまらず、幾何学的な対象を扱う代数幾何学において根本的な役割を果たします。
            </p>

            <ContentBox type="example" title="Example 9.3-2 (代数多様体の有限性)">
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上のアフィン空間 <InlineMath math="\mathbb{k}^n" /> における代数的集合（多項式の零点集合として定義される図形）を考える。この図形を定義する多項式系は、多項式環 <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]" /> のイデアルに対応する。
                </p>
                <p>
                    <InlineMath math="\mathbb{k}" /> はネーター環であり、ヒルベルトの基底定理により <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]" /> もネーター環となるため、このイデアルは有限生成である。これは幾何学的に、「どのような複雑な代数的集合であっても、必ず<strong>有限個の多項式方程式</strong>の共通零点として記述できる」という驚くべき事実を意味している。
                </p>
            </ContentBox>

            <p>
                さらに、体上の有限生成代数（多項式環の剰余環として表せる環）についてもネーター性が成り立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 9.3-1 (ネーター環の有限生成代数拡大はネーター)">
                <p>
                    体 <InlineMath math="\mathbb{k}" /> 上の有限生成可換環 <InlineMath math="\mathbb{k}[a_1, \ldots, a_n]" /> はネーター環である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    体 <InlineMath math="\mathbb{k}" /> は自明にネーター環である。ヒルベルトの基底定理（Theorem 9.3-1）を <InlineMath math="n" /> 回帰納的に適用することにより、多変数多項式環 <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]" /> はネーター環となる。
                </p>
                <p>
                    環の準同型定理（第一同型定理）により、有限生成可換環 <InlineMath math="\mathbb{k}[a_1, \ldots, a_n]" /> は、多項式環 <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]" /> のあるイデアル <InlineMath math="I" /> による剰余環 <InlineMath math="\mathbb{k}[x_1, \ldots, x_n]/I" /> と同型である。
                </p>
                <p>
                    前節の命題（Proposition 9.2-1）で見たように、ネーター環の剰余環はネーター環であるため、<InlineMath math="\mathbb{k}[a_1, \ldots, a_n]" /> もネーター環となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark (可換環論への展望)">
                <p>
                    ネーター環は、M. アティヤと I.G. マクドナルドによる名著『可換代数入門』をはじめとする可換環論の中心的対象です。ネーター性という有限性の条件を仮定することで、素イデアルのスペクトル、局所化、完備化などの深く豊かな理論が展開可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルトの基底定理：<InlineMath math="R" /> がネーター環ならば、多項式環 <InlineMath math="R[x]" /> もネーター環である。</li>
                    <li>帰納的に、ネーター環上の多変数多項式環 <InlineMath math="R[x_1, \ldots, x_n]" /> もネーター環となる。</li>
                    <li>代数幾何学において、代数的集合が有限個の方程式で記述できることはヒルベルトの基底定理によって保証される。</li>
                    <li>体上の有限生成可換環はすべてネーター環である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
