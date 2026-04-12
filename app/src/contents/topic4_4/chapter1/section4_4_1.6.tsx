import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SupportFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までにおいて、凸集合の幾何的な性質や射影定理、分離定理について学んできました。本節では、凸集合の「外側」からの記述方法である<b>サポート関数（support function）</b>を導入します。サポート関数は、凸集合をその支持超平面の集まりとして表現する強力なツールであり、凸解析における集合と関数の双対性を結びつける重要な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">サポート関数の定義と性質</h2>

            <p>
                まずはサポート関数の定義を与えましょう。任意の方向に対して、その方向へ集合の点を最も遠くまで押し進めたときの内積の最大値として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 1.6-1 (サポート関数)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の空でない凸集合 <InlineMath math="C" /> に対して、その<b>サポート関数</b> <InlineMath math="\sigma_C: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> を次のように定義する。
                </p>
                <BlockMath math="\sigma_C(y) = \sup_{x \in C} \langle y, x \rangle"
                />
            </ContentBox>

            <p>
                定義だけでは少し抽象的かもしれませんので、具体的な図形を用いてサポート関数を計算してみましょう。まずはノルム球の例です。
            </p>

            <ContentBox type="example" title="Example 1.6-1">
                <p>
                    ユークリッド単位球 <InlineMath math="C = \{x \in \mathbb{R}^n \mid \|x\|_2 \leq 1\}" /> のサポート関数を計算する。
                    コーシー・シュワルツの不等式より、任意の <InlineMath math="x \in C" /> に対して
                </p>
                <BlockMath math="\langle y, x \rangle \leq \|y\|_2 \|x\|_2 \leq \|y\|_2"
                />
                <p>
                    が成り立つ。一方、<InlineMath math="y \neq 0" /> のとき、<InlineMath math="x = \frac{y}{\|y\|_2} \in C" /> を選べば、
                </p>
                <BlockMath math="\langle y, x \rangle = \left\langle y, \frac{y}{\|y\|_2} \right\rangle = \frac{\|y\|_2^2}{\|y\|_2} = \|y\|_2"
                />
                <p>
                    となり、上界が達成される。<InlineMath math="y = 0" /> のときは明らかに <InlineMath math="\sigma_C(0) = 0" /> である。したがって、ユークリッド単位球のサポート関数は次となる。
                </p>
                <BlockMath math="\sigma_C(y) = \|y\|_2"
                />
            </ContentBox>

            <p>
                サポート関数は、元の集合 <InlineMath math="C" /> に依存して様々な形をとりますが、関数としては常に極めて良い性質（正斉次性と劣加法性、そして凸性）を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 1.6-1">
                <p>
                    任意の凸集合 <InlineMath math="C" /> に対して、そのサポート関数 <InlineMath math="\sigma_C" /> は正斉次かつ劣加法的であり、したがって凸関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず正斉次性を示す。任意の <InlineMath math="\lambda > 0" /> と <InlineMath math="y \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="\sigma_C(\lambda y) = \sup_{x \in C} \langle \lambda y, x \rangle = \lambda \sup_{x \in C} \langle y, x \rangle = \lambda \sigma_C(y)"
                />
                <p>
                    となるため、正斉次性が成り立つ。
                </p>
                <p>
                    次に劣加法性を示す。任意の <InlineMath math="y_1, y_2 \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="\begin{aligned}
                \sigma_C(y_1 + y_2) &= \sup_{x \in C} \langle y_1 + y_2, x \rangle \\
                &\leq \sup_{x \in C} \langle y_1, x \rangle + \sup_{x \in C} \langle y_2, x \rangle \\
                &= \sigma_C(y_1) + \sigma_C(y_2)
                \end{aligned}"
                />
                <p>
                    よって劣加法的である。
                </p>
                <p>
                    最後に凸性を示す。任意の <InlineMath math="y_1, y_2 \in \mathbb{R}^n" /> と <InlineMath math="\lambda \in [0, 1]" /> に対して、劣加法性と正斉次性（<InlineMath math="\lambda \geq 0, 1-\lambda \geq 0" />）を用いると、
                </p>
                <BlockMath math="\begin{aligned}
                \sigma_C(\lambda y_1 + (1-\lambda)y_2) &\leq \sigma_C(\lambda y_1) + \sigma_C((1-\lambda)y_2) \\
                &= \lambda \sigma_C(y_1) + (1-\lambda)\sigma_C(y_2)
                \end{aligned}"
                />
                <p>
                    となり、凸関数の定義を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                多面体のような頂点が有限個である集合の場合、サポート関数の計算はさらに簡単になります。
            </p>

            <ContentBox type="example" title="Example 1.6-2">
                <p>
                    有限個の頂点 <InlineMath math="v_1, \dots, v_k" /> の凸包として表される多面体 <InlineMath math="C = \mathrm{conv}\{v_1, \dots, v_k\}" /> のサポート関数を考える。
                    線形関数 <InlineMath math="x \mapsto \langle y, x \rangle" /> の凸多面体上での最大値は必ず頂点で達成されるため、
                </p>
                <BlockMath math="\sigma_C(y) = \max_{1 \leq i \leq k} \langle y, v_i \rangle"
                />
                <p>
                    となる。つまり、有限個の線形関数の最大値として表現される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">サポート関数による凸集合の復元</h2>

            <p>
                前項では、凸集合からサポート関数を構成しました。驚くべきことに、集合が閉凸集合であれば、サポート関数の情報だけから元の集合を完全に復元することができます。この事実は、分離定理（Theorem 1.4-1）の直接的な帰結として証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.6-1">
                <p>
                    <InlineMath math="C" /> を <InlineMath math="\mathbb{R}^n" /> の閉凸集合とする。このとき、<InlineMath math="C" /> はそのサポート関数から一意に復元できる。すなわち、
                </p>
                <BlockMath math="C = \{x \in \mathbb{R}^n \mid \langle y, x \rangle \leq \sigma_C(y) \ \forall y \in \mathbb{R}^n\}"
                />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    右辺の集合を <InlineMath math="\tilde{C}" /> と置く。まず <InlineMath math="C \subseteq \tilde{C}" /> を示す。
                    <InlineMath math="\sigma_C(y)" /> の定義より、任意の <InlineMath math="x \in C" /> と任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して <InlineMath math="\langle y, x \rangle \leq \sup_{x' \in C} \langle y, x' \rangle = \sigma_C(y)" /> が成り立つ。よって <InlineMath math="x \in \tilde{C}" /> であり、<InlineMath math="C \subseteq \tilde{C}" /> である。
                </p>
                <p>
                    次に <InlineMath math="\tilde{C} \subseteq C" /> を背理法で示す。<InlineMath math="x_0 \in \tilde{C}" /> かつ <InlineMath math="x_0 \notin C" /> と仮定する。
                    <InlineMath math="C" /> は閉凸集合であり、<InlineMath math="\{x_0\}" /> はコンパクトな凸集合である。交わらないこれらの集合に分離定理（Theorem 1.4-1 の精密化である強分離定理）を適用すると、ある <InlineMath math="y_0 \in \mathbb{R}^n \setminus \{0\}" /> と <InlineMath math="\alpha \in \mathbb{R}" /> が存在して、
                </p>
                <BlockMath math="\sup_{x \in C} \langle y_0, x \rangle < \alpha < \langle y_0, x_0 \rangle"
                />
                <p>
                    が成り立つ。左辺は定義より <InlineMath math="\sigma_C(y_0)" /> であるから、
                </p>
                <BlockMath math="\sigma_C(y_0) < \langle y_0, x_0 \rangle"
                />
                <p>
                    となる。しかし、これは <InlineMath math="x_0 \in \tilde{C}" /> の条件 <InlineMath math="\langle y_0, x_0 \rangle \leq \sigma_C(y_0)" /> に矛盾する。
                    したがって、<InlineMath math="\tilde{C} \subseteq C" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、閉凸集合が「そのすべての支持半空間の共通部分として表される」という幾何学的な直観を数式化したものと言えます。別の具体例でこの対応を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.6-3">
                <p>
                    <InlineMath math="\ell_1" />-単位球 <InlineMath math="C = \{x \in \mathbb{R}^n \mid \|x\|_1 \leq 1\}" /> のサポート関数を計算する。
                    ヘルダーの不等式により、
                </p>
                <BlockMath math="\langle y, x \rangle \leq \|y\|_\infty \|x\|_1 \leq \|y\|_\infty"
                />
                <p>
                    となる。<InlineMath math="\|y\|_\infty = |y_{i_0}|" /> となるインデックス <InlineMath math="i_0" /> を選び、<InlineMath math="x" /> の成分を <InlineMath math="x_{i_0} = \mathrm{sign}(y_{i_0})" />、それ以外を <InlineMath math="0" /> とすれば、<InlineMath math="x \in C" /> であり、
                </p>
                <BlockMath math="\langle y, x \rangle = y_{i_0} \mathrm{sign}(y_{i_0}) = |y_{i_0}| = \|y\|_\infty"
                />
                <p>
                    となる。したがって、<InlineMath math="\sigma_C(y) = \|y\|_\infty" /> である。
                </p>
                <p>
                    逆に、Theorem 1.6-1 を用いると、元の集合は
                </p>
                <BlockMath math="C = \{x \in \mathbb{R}^n \mid \langle y, x \rangle \leq \|y\|_\infty \ \forall y\}"
                />
                <p>
                    として復元される。
                </p>
            </ContentBox>

            <p>
                サポート関数の考え方は、第4章で学ぶ共役関数（フェンシェル共役）の理論と深く結びついています。以下の Remark にその展望をまとめます。
            </p>

            <ContentBox type="remark" title="共役関数とサポート関数">
                <p>
                    サポート関数は、後ほど §4.2 で学ぶ「指示関数の共役関数」にほかなりません。凸集合 <InlineMath math="C" /> の指示関数 <InlineMath math="\delta_C(x)" /> を用いると、
                </p>
                <BlockMath math="\delta_C^*(y) = \sup_x \{\langle y, x \rangle - \delta_C(x)\} = \sup_{x \in C} \langle y, x \rangle = \sigma_C(y)"
                />
                <p>
                    という関係が成り立ちます。これにより、凸集合に関する幾何学的な議論を、凸関数の共役という代数的・解析的な枠組みで統一的に扱うことができるようになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>凸集合 <InlineMath math="C" /> のサポート関数 <InlineMath math="\sigma_C(y)" /> は <InlineMath math="\sup_{x \in C} \langle y, x \rangle" /> で定義される。</li>
                    <li>サポート関数は常に正斉次かつ劣加法的であり、凸関数である。</li>
                    <li>閉凸集合は、そのサポート関数から一意に復元される（分離定理の応用）。</li>
                    <li>サポート関数は、凸集合の支持超平面を束ねた情報であり、後述する双対性の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
