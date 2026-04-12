import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EpigraphCharacterization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、凸関数を幾何学的に特徴づける強力な道具である「エピグラフ」について学びます。エピグラフを用いることで、関数の凸性を集合の凸性の問題へと帰着させることができます。また、最適化理論において重要な概念である下半連続性とエピグラフの関係についても解説します。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エピグラフの定義と凸性</h2>

            <p>まず、エピグラフの定義から始めましょう。エピグラフとは、関数のグラフの「上側」にある領域全体を指します。</p>

            <ContentBox type="definition" title="Definition 2.2-1 (エピグラフ)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> の<b>エピグラフ（epigraph）</b>を、次のように定義する。
                </p>
                <BlockMath math="\mathrm{epi}(f) = \{(x, \alpha) \in \mathbb{R}^n \times \mathbb{R} \mid f(x) \leq \alpha\}" />
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1">
                <p>
                    <InlineMath math="f(x) = |x|" /> のエピグラフを考えます。これは <InlineMath math="\mathbb{R}^2" /> における V 字型の領域です。
                </p>
                <BlockMath math="\mathrm{epi}(f) = \{(x, \alpha) \in \mathbb{R} \times \mathbb{R} \mid |x| \leq \alpha\}" />
                <p>
                    この領域が凸集合であることを具体的に確認してみましょう。例えば、点 <InlineMath math="(x_1, \alpha_1) = (-1, 1)" /> と <InlineMath math="(x_2, \alpha_2) = (1, 1)" /> はどちらも <InlineMath math="|-1| \leq 1" />, <InlineMath math="|1| \leq 1" /> よりエピグラフに含まれます。これらの中点 <InlineMath math="(x_m, \alpha_m) = (0, 1)" /> を考えると、<InlineMath math="f(0) = 0 \leq 1" /> となり、確かにエピグラフに含まれていることがわかります。
                </p>
            </ContentBox>

            <p>この具体例から予想されるように、関数が凸であることと、そのエピグラフが凸集合であることは完全に同値です。この事実は、関数の問題を集合の問題に翻訳する上で極めて重要です。</p>

            <ContentBox type="proposition" title="Proposition 2.2-1">
                <p>
                    関数 <InlineMath math="f" /> が凸関数であることと、そのエピグラフ <InlineMath math="\mathrm{epi}(f)" /> が <InlineMath math="\mathbb{R}^{n+1}" /> の凸集合であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="f" /> が凸関数であると仮定する。<InlineMath math="(x_1, \alpha_1), (x_2, \alpha_2) \in \mathrm{epi}(f)" /> とし、<InlineMath math="\lambda \in [0, 1]" /> とする。エピグラフの定義より、<InlineMath math="f(x_1) \leq \alpha_1" /> および <InlineMath math="f(x_2) \leq \alpha_2" /> が成り立つ。<InlineMath math="f" /> の凸性より、
                </p>
                <BlockMath math="\begin{aligned} f(\lambda x_1 + (1-\lambda)x_2) &\leq \lambda f(x_1) + (1-\lambda)f(x_2) \\ &\leq \lambda \alpha_1 + (1-\lambda)\alpha_2 \end{aligned}"
                />
                <p>
                    したがって、<InlineMath math="\lambda(x_1, \alpha_1) + (1-\lambda)(x_2, \alpha_2) = (\lambda x_1 + (1-\lambda)x_2, \lambda \alpha_1 + (1-\lambda)\alpha_2) \in \mathrm{epi}(f)" /> となり、<InlineMath math="\mathrm{epi}(f)" /> は凸集合である。
                </p>
                <p>
                    逆に、<InlineMath math="\mathrm{epi}(f)" /> が凸集合であると仮定する。任意の <InlineMath math="x_1, x_2 \in \mathbb{R}^n" /> に対して、<InlineMath math="f(x_1) < +\infty" /> かつ <InlineMath math="f(x_2) < +\infty" /> となる場合を考える。（どちらかが <InlineMath math="+\infty" /> の場合は凸性の不等式は自明に成り立つ）。
                    このとき、<InlineMath math="(x_1, f(x_1)), (x_2, f(x_2)) \in \mathrm{epi}(f)" /> である。<InlineMath math="\mathrm{epi}(f)" /> は凸集合なので、任意の <InlineMath math="\lambda \in [0, 1]" /> に対して、
                </p>
                <BlockMath math="\begin{aligned} &\lambda(x_1, f(x_1)) + (1-\lambda)(x_2, f(x_2)) \\ &= (\lambda x_1 + (1-\lambda)x_2, \lambda f(x_1) + (1-\lambda)f(x_2)) \in \mathrm{epi}(f) \end{aligned}"
                />
                <p>
                    エピグラフの定義より、これは <InlineMath math="f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2)" /> を意味し、<InlineMath math="f" /> は凸関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">下半連続性</h2>

            <p>次に、関数の連続性の概念を弱めた「下半連続性」について考えます。最適化理論において、最小値の存在を保証するために連続性は強すぎる条件であり、下半連続性で十分な場合が多くあります。</p>

            <ContentBox type="definition" title="Definition 2.2-2 (下半連続関数)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> が<b>下半連続（lower semi-continuous）</b>であるとは、すべての <InlineMath math="\alpha \in \mathbb{R}" /> に対して、レベル集合
                </p>
                <BlockMath math="L_\alpha = \{x \in \mathbb{R}^n \mid f(x) \leq \alpha\}" />
                <p>
                    が閉集合であることをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2">
                <p>
                    不連続な関数の下半連続性を確認します。
                </p>
                <ul>
                    <li>
                        <InlineMath math="f_1(x) = 0 \ (x \neq 0)" />, <InlineMath math="f_1(0) = 1" /> の場合：<br />
                        <InlineMath math="\alpha = 1/2" /> とすると、レベル集合は <InlineMath math="\{x \mid f_1(x) \leq 1/2\} = \mathbb{R} \setminus \{0\}" /> となり、これは閉集合ではありません。したがって、<InlineMath math="f_1" /> は下半連続ではありません。
                    </li>
                    <li>
                        <InlineMath math="f_2(x) = 0 \ (x \neq 0)" />, <InlineMath math="f_2(0) = -1" /> の場合：<br />
                        任意の <InlineMath math="\alpha < -1" /> ではレベル集合は空集合（閉集合）。<InlineMath math="-1 \leq \alpha < 0" /> ではレベル集合は <InlineMath math="\{0\}" />（閉集合）。<InlineMath math="\alpha \geq 0" /> ではレベル集合は <InlineMath math="\mathbb{R}" />（閉集合）。したがって、<InlineMath math="f_2" /> は下半連続です。
                    </li>
                </ul>
            </ContentBox>

            <p>下半連続性もまた、エピグラフを用いて幾何学的に特徴づけることができます。</p>

            <ContentBox type="proposition" title="Proposition 2.2-2">
                <p>
                    関数 <InlineMath math="f" /> が下半連続であることと、そのエピグラフ <InlineMath math="\mathrm{epi}(f)" /> が閉集合であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="f" /> が下半連続であるとする。<InlineMath math="\mathrm{epi}(f)" /> の点列 <InlineMath math="(x_k, \alpha_k)" /> が <InlineMath math="(x, \alpha)" /> に収束すると仮定する。このとき、任意の <InlineMath math="\epsilon > 0" /> に対して、十分大きな <InlineMath math="k" /> では <InlineMath math="\alpha_k < \alpha + \epsilon" /> となる。<InlineMath math="(x_k, \alpha_k) \in \mathrm{epi}(f)" /> より <InlineMath math="f(x_k) \leq \alpha_k < \alpha + \epsilon" /> である。これは <InlineMath math="x_k" /> がレベル集合 <InlineMath math="L_{\alpha+\epsilon}" /> に属することを意味する。下半連続性の仮定より <InlineMath math="L_{\alpha+\epsilon}" /> は閉集合であり、<InlineMath math="x_k \to x" /> なので <InlineMath math="x \in L_{\alpha+\epsilon}" />、すなわち <InlineMath math="f(x) \leq \alpha + \epsilon" /> となる。<InlineMath math="\epsilon > 0" /> は任意なので <InlineMath math="f(x) \leq \alpha" /> となり、<InlineMath math="(x, \alpha) \in \mathrm{epi}(f)" /> となる。よって <InlineMath math="\mathrm{epi}(f)" /> は閉集合である。
                </p>
                <p>
                    逆に、<InlineMath math="\mathrm{epi}(f)" /> が閉集合であるとする。任意の <InlineMath math="\alpha \in \mathbb{R}" /> を固定し、レベル集合 <InlineMath math="L_\alpha" /> の点列 <InlineMath math="x_k" /> が <InlineMath math="x" /> に収束すると仮定する。各 <InlineMath math="k" /> について <InlineMath math="f(x_k) \leq \alpha" /> なので、<InlineMath math="(x_k, \alpha) \in \mathrm{epi}(f)" /> である。<InlineMath math="(x_k, \alpha) \to (x, \alpha)" /> であり、<InlineMath math="\mathrm{epi}(f)" /> は閉集合なので <InlineMath math="(x, \alpha) \in \mathrm{epi}(f)" /> となる。これは <InlineMath math="f(x) \leq \alpha" /> を意味し、<InlineMath math="x \in L_\alpha" /> となる。よって <InlineMath math="L_\alpha" /> は閉集合であり、<InlineMath math="f" /> は下半連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="閉凸関数と双対性">
                <p>
                    下半連続かつ凸な関数を「閉凸関数」と呼びます。Proposition 2.2-1 と Proposition 2.2-2 を合わせると、閉凸関数とはまさにエピグラフが閉凸集合となる関数であることがわかります。後ほど Chapter 4 で学ぶフェンシェル-モロの定理において、この閉凸関数というクラスが完全な双対性を持つ主役となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数のエピグラフは、そのグラフの上側にある領域として定義される。</li>
                    <li>関数が凸であることと、そのエピグラフが凸集合であることは同値である。</li>
                    <li>関数が下半連続であることと、そのエピグラフが閉集合であることは同値である。</li>
                    <li>これらにより、関数の性質（凸性、下半連続性）を集合の性質（凸集合、閉集合）として幾何学的に扱うことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
