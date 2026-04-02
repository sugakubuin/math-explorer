import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_7_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で見た幾何学的考察——「制約付き極値をとる点では、目的関数の等高面と制約条件の曲面が接し、両者の勾配ベクトルが平行になる」というアイデア——を厳密な定理として定式化します。これが、解析学や最適化理論において極めて重要な<strong>ラグランジュの未定乗数法</strong>（Lagrange multipliers）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュの未定乗数法</h2>

            <p>
                等式制約が1つの場合に関する定理を述べます。これは制約付き極値問題における「第1次必要条件」（臨界点であるための条件）の中核をなすものです。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (ラグランジュの未定乗数法：極値の必要条件)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^n" /> を開集合とし、関数 <InlineMath math="f, g: D \to \mathbb{R}" /> は <InlineMath math="D" /> 上で <InlineMath math="C^1" /> 級であるとする。
                </p>
                <p className="mt-2">
                    制約条件の集合 <InlineMath math="S = \{\mathbf{x} \in D \mid g(\mathbf{x}) = 0\}" /> の点 <InlineMath math="\mathbf{a} = (a_1, \dots, a_n) \in S" /> において、関数 <InlineMath math="f" /> が <InlineMath math="S" /> 上の局所的極値（極大値または極小値）をとると仮定する。
                </p>
                <p className="mt-2">
                    さらに、点 <InlineMath math="\mathbf{a}" /> は制約条件の<strong>正則点</strong>（regular point）である、すなわち
                </p>
                <BlockMath math="\nabla g(\mathbf{a}) \neq \mathbf{0}" />
                <p>
                    であると仮定する。このとき、ある実数 <InlineMath math="\lambda" /> が存在して、次の等式が成り立つ：
                </p>
                <BlockMath math="\nabla f(\mathbf{a}) = \lambda \nabla g(\mathbf{a})" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （成分で書けば、<InlineMath math="\frac{\partial f}{\partial x_i}(\mathbf{a}) = \lambda \frac{\partial g}{\partial x_i}(\mathbf{a})" /> (<InlineMath math="i=1,\dots,n" />) となる。）
                </p>
            </ContentBox>

            <p>
                定理に現れる実数 <InlineMath math="\lambda" /> を<strong>ラグランジュ未定乗数</strong>（Lagrange multiplier）と呼びます。「未定」と呼ばれる理由は、方程式を立てた時点ではその値が未知であり、最適化問題を解く過程で <InlineMath math="x_i" /> たちと同時に決定されるパラメータだからです。
            </p>
            <p>
                また、<InlineMath math="\nabla g(\mathbf{a}) \neq \mathbf{0}" /> という制約の正則性条件（満たされない場合は定理が成立しないことがある）が重要です。この条件は、制約集合 <InlineMath math="S" /> が点 <InlineMath math="\mathbf{a}" /> の近傍で「尖点を持たない滑らかな超曲面」になることを保証しており、これにより曲面上の任意の接ベクトル方向に動くことができるようになります。
            </p>

            <ContentBox type="proof" title="Proof (陰関数定理によるアプローチ)">
                <p>
                    制約条件 <InlineMath math="g(\mathbf{a}) = 0" /> の正則性条件 <InlineMath math="\nabla g(\mathbf{a}) \neq \mathbf{0}" /> より、一般性を失わず、点 <InlineMath math="\mathbf{a}" /> で <InlineMath math="\frac{\partial g}{\partial x_n}(\mathbf{a}) \neq 0" /> であると仮定する。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbf{a} = (a_1, \dots, a_{n-1}, a_n)" /> とし、<InlineMath math="\tilde{\mathbf{a}} = (a_1, \dots, a_{n-1}) \in \mathbb{R}^{n-1}" /> と置く。
                    方程式 <InlineMath math="g(x_1, \dots, x_{n-1}, x_n) = 0" /> に対して<strong>陰関数定理</strong>を適用すると、<InlineMath math="\tilde{\mathbf{a}}" /> のある開傍 <InlineMath math="U \subset \mathbb{R}^{n-1}" /> 上で定義された <InlineMath math="C^1" /> 級関数 <InlineMath math="\varphi: U \to \mathbb{R}" /> が存在し、次を満たす：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\varphi(\tilde{\mathbf{a}}) = a_n" /></li>
                    <li><InlineMath math="\mathbf{x}' \in U" /> に対して <InlineMath math="g(\mathbf{x}', \varphi(\mathbf{x}')) = 0" /></li>
                </ul>
                <p className="mt-2">
                    さらに、陰関数の微分公式より、各 <InlineMath math="i = 1, \dots, n-1" /> について点 <InlineMath math="\tilde{\mathbf{a}}" /> における導関数は
                </p>
                <BlockMath math="\frac{\partial \varphi}{\partial x_i}(\tilde{\mathbf{a}}) = - \frac{\frac{\partial g}{\partial x_i}(\mathbf{a})}{\frac{\partial g}{\partial x_n}(\mathbf{a})}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">（※ 分母 <InlineMath math="\frac{\partial g}{\partial x_n}(\mathbf{a}) \neq 0" /> を用いた）</p>
                <p className="mt-2">
                    さて、点 <InlineMath math="\mathbf{a}" /> において関数 <InlineMath math="f" /> は制約 <InlineMath math="g=0" /> の下で極値をとる。これは、<InlineMath math="(n-1)" /> 変数の合成関数
                </p>
                <BlockMath math="F(x_1, \dots, x_{n-1}) = f(x_1, \dots, x_{n-1}, \varphi(x_1,\dots,x_{n-1}))" />
                <p>
                    が点 <InlineMath math="\tilde{\mathbf{a}}" /> において無制約の極値をとることを意味する。無制約の極値の必要条件より、すべての <InlineMath math="i = 1, \dots, n-1" /> に対して
                </p>
                <BlockMath math="\frac{\partial F}{\partial x_i}(\tilde{\mathbf{a}}) = 0" />
                <p>
                    合成関数の微分法則（連鎖律）を用いてこれを計算すると、
                </p>
                <BlockMath math="\frac{\partial f}{\partial x_i}(\mathbf{a}) + \frac{\partial f}{\partial x_n}(\mathbf{a}) \frac{\partial \varphi}{\partial x_i}(\tilde{\mathbf{a}}) = 0" />
                <p>
                    事前に求めた <InlineMath math="\frac{\partial \varphi}{\partial x_i}" /> の結果を代入すると、
                </p>
                <BlockMath math="\frac{\partial f}{\partial x_i}(\mathbf{a}) - \frac{\partial f}{\partial x_n}(\mathbf{a}) \frac{\frac{\partial g}{\partial x_i}(\mathbf{a})}{\frac{\partial g}{\partial x_n}(\mathbf{a})} = 0" />
                <p className="mt-2">
                    ここで、実数 <InlineMath math="\lambda" /> を次のように定義する：
                </p>
                <BlockMath math="\lambda = \frac{\frac{\partial f}{\partial x_n}(\mathbf{a})}{\frac{\partial g}{\partial x_n}(\mathbf{a})}" />
                <p>
                    この <InlineMath math="\lambda" /> の定義を代入し整理すると、任意の <InlineMath math="i = 1, \dots, n-1" /> について
                </p>
                <BlockMath math="\frac{\partial f}{\partial x_i}(\mathbf{a}) = \lambda \frac{\partial g}{\partial x_i}(\mathbf{a})" />
                <p className="mt-2">
                    また、<InlineMath math="i=n" /> の場合は <InlineMath math="\lambda" /> の定義式そのものから
                </p>
                <BlockMath math="\frac{\partial f}{\partial x_n}(\mathbf{a}) = \lambda \frac{\partial g}{\partial x_n}(\mathbf{a})" />
                <p>
                    となり、すべての変数 <InlineMath math="x_1, \dots, x_n" /> で等式が成立していることが示された。すなわち、<InlineMath math="\nabla f(\mathbf{a}) = \lambda \nabla g(\mathbf{a})" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                定理の条件である方程式 <InlineMath math="\nabla f(\mathbf{a}) = \lambda \nabla g(\mathbf{a})" /> は、制約条件の式 <InlineMath math="g(\mathbf{a}) = 0" /> と合わせると、未知数 <InlineMath math="(a_1, \dots, a_n, \lambda)" /> の <InlineMath math="n+1" /> 個に関する連立方程式となります（勾配の成分が <InlineMath math="n" /> 個、制約条件が1個）。この連立方程式を解くことで、極値の候補点（停留点）を見つけ出すことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジアン</h2>

            <p>
                ラグランジュの未定乗数法の連立方程式をよりシステマティックに導出・記述するために、新しい補助関数を導入すると便利です。この関数は、解析力学の基礎を築いたラグランジュの名を冠して「ラグランジアン」と呼ばれます。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (ラグランジアン関数)">
                <p>
                    目的関数 <InlineMath math="f(\mathbf{x})" /> を、制約条件 <InlineMath math="g(\mathbf{x}) = 0" /> の下で最適化する問題を考える。
                    このとき、新しい変数（ラグランジュ未定乗数）<InlineMath math="\lambda" /> を導入し、<InlineMath math="n+1" /> 変数関数 <InlineMath math="L: \mathbb{R}^{n+1} \to \mathbb{R}" /> を次のように定義する：
                </p>
                <BlockMath math="L(x_1, \dots, x_n, \lambda) = f(x_1, \dots, x_n) - \lambda g(x_1, \dots, x_n)" />
                <p>
                    あるいは、ベクトル表記で
                </p>
                <BlockMath math="L(\mathbf{x}, \lambda) = f(\mathbf{x}) - \lambda g(\mathbf{x})" />
                <p>
                    この関数 <InlineMath math="L" /> を、この最適化問題の<strong>ラグランジュ関数</strong>（Lagrangian function）または<strong>ラグランジアン</strong>と呼ぶ。
                </p>
                <br />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    （注：符号は本質的ではなく、<InlineMath math="L = f + \lambda g" /> と定義する流儀もあります。どちらでも同じ停留点が得られます。）
                </p>
            </ContentBox>

            <p>
                ラグランジアンを導入する最大のメリットは、<strong>「制約付きの極値問題」を、関数 <InlineMath math="L" /> の「制約がない極値問題」として等価に扱えるようになる</strong>という点です。
                実際、関数 <InlineMath math="L" /> の無制約の停留点を求める（すべての変数についての偏微分を0にする）と、
            </p>
            <BlockMath math="\begin{aligned}
\frac{\partial L}{\partial x_i} &= \frac{\partial f}{\partial x_i} - \lambda \frac{\partial g}{\partial x_i} = 0 \quad (i=1,\dots,n) \\
\frac{\partial L}{\partial \lambda} &= -g(x_1, \dots, x_n) = 0
\end{aligned}" />
            <p>
                となります。上段の <InlineMath math="n" /> 個の式は <InlineMath math="\nabla f = \lambda \nabla g" /> と一致し、下段の式は制約条件 <InlineMath math="g = 0" /> そのものです。
                このように、ラグランジアンの勾配が <InlineMath math="\mathbf{0}" /> になる点を求める手続きだけで、自然と定理 7.2-1 の必要条件がすべて導出されるように構成されています。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ラグランジュの未定乗数法は、制約下で極値をとる点（かつ制約の正則な点）において <InlineMath math="\nabla f = \lambda \nabla g" /> が成り立つことを主張する定理である。</li>
                    <li>この定理は、陰関数定理によって制約条件を局所的に消去し、無制約問題に帰着させることで証明される。</li>
                    <li>ラグランジュ関数 <InlineMath math="L(\mathbf{x}, \lambda) = f(\mathbf{x}) - \lambda g(\mathbf{x})" /> を定義し、<InlineMath math="\nabla L = \mathbf{0}" /> を解くことは、ラグランジュの未定乗数法の条件式を求めることと同値である。</li>
                    <li>この公式は極値の「必要条件」であり、求まった停留点が実際に最大値・最小値であるかは、二次条件（ヘッセ行列にあたる概念）や関数の性質から別途確認する必要がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
