import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LevysContinuityTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ一意性定理は、特性関数の「形」が分布を決定することを保証しました。
                本節で扱う「レビーの連続性定理」は、これをさらに推し進め、特性関数の「収束」が分布の「収束」に対応することを保証します。
                この定理こそが、中心極限定理の証明における決定的な役割を担っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">レビーの連続性定理</h2>

            <p className="leading-relaxed">
                分布収束（§6.4）を特性関数の各点収束にすり替えることができる非常に強力な定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (レビーの連続性定理)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> の特性関数を <InlineMath math="\varphi_{X_n}(t)" /> とする。
                </p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>
                        ある確率変数 <InlineMath math="X" /> が存在して <InlineMath math="X_n \xrightarrow{d} X" /> ならば、任意の <InlineMath math="t \in \mathbb{R}" /> に対して
                        <BlockMath math="\varphi_{X_n}(t) \to \varphi_X(t) \quad (n \to \infty)" />
                        が成り立つ。
                    </li>
                    <li>
                        逆に、任意の <InlineMath math="t \in \mathbb{R}" /> に対して <InlineMath math="\varphi_{X_n}(t)" /> がある関数 <InlineMath math="\psi(t)" /> に収束し、
                        かつ <InlineMath math="\psi(t)" /> が <InlineMath math="t=0" /> で連続であれば、ある確率変数 <InlineMath math="X" /> が存在して、
                        <InlineMath math="X_n \xrightarrow{d} X" /> かつ <InlineMath math="\varphi_X(t) = \psi(t)" /> となる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="X_n \xrightarrow{d} X" /> のとき：
                    分布収束の同値条件（ポルマントーの定理）より、任意の有界連続関数 <InlineMath math="g" /> に対して <InlineMath math="E[g(X_n)] \to E[g(X)]" /> が成り立つ。
                    複素数値関数 <InlineMath math="g(x) = e^{itx}" /> は有界（絶対値 1）かつ連続であるため、
                    <BlockMath math="\varphi_{X_n}(t) = E[e^{itX_n}] \to E[e^{itX}] = \varphi_X(t)" />
                    となり、直ちに従う。
                </p>
                <p>
                    (2) 逆の証明：
                </p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>タイトネスの証明</b>：
                        まず、確率変数列が「無限遠に逃げない（タイトである）」ことを示す。次の不等式を利用する：
                        <BlockMath math="P(|X_n| > 2/u) \leq \frac{1}{u} \int_{-u}^u (1 - \varphi_{X_n}(t)) dt" />
                        仮定より <InlineMath math="\varphi_{X_n}(t) \to \psi(t)" /> であり、<InlineMath math="\psi" /> は <InlineMath math="t=0" /> で連続かつ <InlineMath math="\psi(0)=1" /> である。
                        したがって、任意の <InlineMath math="\varepsilon > 0" /> に対し、十分小さな <InlineMath math="u" /> を選べば、右辺（の極限）を <InlineMath math="\varepsilon" /> 以下に抑えることができる。
                        これは <InlineMath math="\{X_n\}" /> がタイト（§6.4 Definition 6.4-2）であることを意味する。
                    </li>
                    <li>
                        <b>部分列の極限の存在</b>：
                        タイトネスより、ヘリーの選択定理（Helly's selection theorem）が適用でき、任意の数列 <InlineMath math="\{X_n\}" /> は分布収束する部分列 <InlineMath math="\{X_{n_k}\}" /> を持つ。
                    </li>
                    <li>
                        <b>極限の一意性と収束</b>：
                        その部分列の極限分布を <InlineMath math="F" /> とすると、(1) よりその特性関数は <InlineMath math="\psi(t)" /> でなければならない。
                        特性関数の一意性定理（Theorem 7.3-2）より、どのような部分列を選んでも、その収束先は <InlineMath math="\psi(t)" /> に対応する唯一の分布に限られる。
                        「任意の部分列が、さらに同一の極限 <InlineMath math="F" /> に収束する部分列を持つ」ことは、元の数列全体が <InlineMath math="F" /> に分布収束することの必要十分条件である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理の驚くべき点は、分布収束という難しい極限操作を、各点における複素数値の極限（特性関数の収束）に置き換えられる点です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">中心極限定理への展望</h2>

            <p className="leading-relaxed">
                レビーの定理がどのように応用されるか、その道筋を確認します。
            </p>

            <ContentBox type="remark" title="Remark: 中心極限定理の証明戦略">
                <p>
                    独立同分布な和の正規化 <InlineMath math="Z_n = \frac{1}{\sigma\sqrt{n}}\sum_{k=1}^n (X_k - \mu)" /> の分布収束を証明したいとき、
                    私たちは直接分布関数を計算するのではなく、次のような手順を踏みます：
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="Z_n" /> の特性関数 <InlineMath math="\varphi_{Z_n}(t)" /> を計算する。</li>
                    <li>特性関数の「積の性質（§7.3）」と「テイラー展開（§7.2）」を用いて、<InlineMath math="\varphi_{Z_n}(t) \to e^{-t^2/2}" /> を示す。</li>
                    <li>
                        レビーの連続性定理を適用し、極限関数 <InlineMath math="e^{-t^2/2}" /> が正規分布の特性関数であることから、
                        <InlineMath math="Z_n \xrightarrow{d} \mathcal{N}(0, 1)" /> であると結論付ける。
                    </li>
                </ol>
                <p className="mt-2">
                    この極めて明快なロジックを支えているのが、本章で学んだ特性関数の理論です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>レビーの連続性定理は、分布収束と特性関数の収束の同値性を保証する。</li>
                    <li>極限関数が原点において連続であるという条件は、極限が適切に定義された分布であることを保証するために重要である。</li>
                    <li>この定理により、中心極限定理の証明は特性関数の解析（各点収束の確認）へと帰着される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
