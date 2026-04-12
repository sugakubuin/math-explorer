import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexFunctionContinuityAndDifferentiability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸関数が持つ優れた解析的性質である「連続性」と「微分可能性」について議論します。一般の関数が連続になる保証はありませんが、凸関数はその有効定義域の内部において自動的に連続となるという強力な性質を持っています。さらに、すべての方向に対する方向微分の存在や、ほとんどすべての点での微分可能性（ラデマッハーの定理）など、凸性に起因する豊かな構造を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内点での連続性と局所リプシッツ性</h2>

            <p>
                まずは、凸関数が有効定義域の内部において連続であるという定理から始めます。これは凸解析において極めて基本的かつ重要な結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-1 (内点での連続性)">
                <p>
                    凸関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> は、その有効定義域 <InlineMath math="\mathrm{dom}(f)" /> の内点において連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="x_0 \in \mathrm{int}(\mathrm{dom}(f))" /> をとる。内点であるから、<InlineMath math="x_0" /> を中心とし <InlineMath math="\mathrm{dom}(f)" /> に含まれる小さな単体（または超立方体）を考えることができる。この単体の頂点を <InlineMath math="v_1, \dots, v_k" /> とすると、単体内の任意の点 <InlineMath math="x" /> はこれら頂点の凸結合 <InlineMath math="x = \sum \lambda_i v_i" /> （ただし <InlineMath math="\lambda_i \geq 0" />, <InlineMath math="\sum \lambda_i = 1" />）として表される。
                </p>
                <p>
                    凸性（ジェンセンの不等式）より、
                </p>
                <BlockMath math="f(x) = f\left(\sum \lambda_i v_i\right) \leq \sum \lambda_i f(v_i) \leq \max_{i} f(v_i)" />
                <p>
                    となり、<InlineMath math="x_0" /> の近傍において <InlineMath math="f" /> は上に有界であることがわかる。上限を <InlineMath math="M" /> とする。
                </p>
                <p>
                    次に、<InlineMath math="x" /> を <InlineMath math="x_0" /> に十分近い点とし、<InlineMath math="y = x_0 - (x - x_0) = 2x_0 - x" /> とおくと、<InlineMath math="y" /> も <InlineMath math="x_0" /> の近傍に含まれるので <InlineMath math="f(y) \leq M" /> である。凸性より、
                </p>
                <BlockMath math="f(x_0) = f\left(\frac{1}{2}x + \frac{1}{2}y\right) \leq \frac{1}{2}f(x) + \frac{1}{2}f(y)" />
                <p>
                    これを変形すると、
                </p>
                <BlockMath math="f(x) \geq 2f(x_0) - f(y) \geq 2f(x_0) - M" />
                <p>
                    となり、近傍で下に有界であることもわかる。
                </p>
                <p>
                    近傍で上下に有界である凸関数は局所リプシッツ連続となり（Corollary 2.5-1 参照）、したがって連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明中で触れたように、連続性よりもさらに強い「局所リプシッツ連続性」が成り立ちます。
            </p>

            <ContentBox type="corollary" title="Corollary 2.5-1 (局所リプシッツ連続性)">
                <p>
                    凸関数 <InlineMath math="f" /> は、その有効定義域の内部に含まれる任意のコンパクト集合上で局所リプシッツ連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    内点の近傍で <InlineMath math="f" /> は上限 <InlineMath math="M" /> を持つとする。<InlineMath math="x, y" /> を十分近い点とし、<InlineMath math="z = y + \alpha (y - x)" /> （ただし <InlineMath math="\alpha > 0" />）をとる。<InlineMath math="y" /> は <InlineMath math="x" /> と <InlineMath math="z" /> の凸結合 <InlineMath math="y = \frac{\alpha}{1+\alpha}x + \frac{1}{1+\alpha}z" /> となる。
                </p>
                <p>
                    凸性より、
                </p>
                <BlockMath math="f(y) \leq \frac{\alpha}{1+\alpha}f(x) + \frac{1}{1+\alpha}f(z)" />
                <p>
                    これを整理すると、
                </p>
                <BlockMath math="f(y) - f(x) \leq \frac{1}{\alpha} (f(z) - f(x)) \leq \frac{1}{\alpha} (M - f(x))"
                />
                <p>
                    距離 <InlineMath math="\|y - x\|" /> と <InlineMath math="\|z - y\|" /> の比率を利用して定数 <InlineMath math="L" /> を評価することで、<InlineMath math="|f(y) - f(x)| \leq L\|y - x\|" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この抽象的な性質を、具体的な関数の例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.5-1">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> は <InlineMath math="\mathbb{R}" /> 上で凸関数である。この関数は、任意の <InlineMath math="x, y \in \mathbb{R}" /> に対して三角不等式
                </p>
                <BlockMath math="|f(x) - f(y)| = ||x| - |y|| \leq |x - y|" />
                <p>
                    を満たすため、リプシッツ定数 <InlineMath math="L = 1" /> のリプシッツ連続関数であることがわかる。
                </p>
            </ContentBox>

            <p>
                一方で、有効定義域の「境界点」においては、連続性が保証されないことに注意が必要です。
            </p>

            <ContentBox type="example" title="Example 2.5-2 (境界点での連続性の崩壊)">
                <p>
                    区間 <InlineMath math="[0,1]" /> 上で定義された関数 <InlineMath math="f" /> を次のように定める：
                </p>
                <BlockMath math="\begin{aligned} f(x) &= 0 \quad (0 \leq x < 1) \\ f(1) &= 1 \end{aligned}" />
                <p>
                    この関数は <InlineMath math="[0,1]" /> 上で凸であるが、境界点 <InlineMath math="x = 1" /> では連続ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">方向微分と概微分可能性</h2>

            <p>
                凸関数は必ずしもすべての点で微分可能ではありません（例えば <InlineMath math="f(x) = |x|" /> の原点）が、「方向微分」という概念を用いることで、微分の一般化を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.5-1 (方向微分)">
                <p>
                    関数 <InlineMath math="f" /> の点 <InlineMath math="x" /> における方向 <InlineMath math="d" /> への<b>方向微分（directional derivative）</b> <InlineMath math="f'(x; d)" /> は次のように定義される：
                </p>
                <BlockMath math="f'(x; d) = \lim_{t \downarrow 0} \frac{f(x+td) - f(x)}{t}" />
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.5-1">
                <p>
                    凸関数 <InlineMath math="f" /> は <InlineMath math="\mathrm{int}(\mathrm{dom}(f))" /> の各点で任意の方向に方向微分が存在し、関数 <InlineMath math="d \mapsto f'(x; d)" /> は劣線形関数（正斉次かつ劣加法的）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    差分商 <InlineMath math="\phi(t) = \frac{f(x+td) - f(x)}{t}" /> を考える。<InlineMath math="0 < t_1 < t_2" /> とすると、<InlineMath math="t_1 = \frac{t_1}{t_2}t_2 + \left(1 - \frac{t_1}{t_2}\right)0" /> である。凸性より、
                </p>
                <BlockMath math="f(x+t_1 d) \leq \frac{t_1}{t_2}f(x+t_2 d) + \left(1 - \frac{t_1}{t_2}\right)f(x)" />
                <p>
                    これを整理すると <InlineMath math="\phi(t_1) \leq \phi(t_2)" /> となり、<InlineMath math="\phi(t)" /> は単調非減少であることがわかる。<InlineMath math="x" /> が内点であれば、負の方向 <InlineMath math="-d" /> に対しても定義でき、<InlineMath math="\phi(t) \geq -f'(x; -d)" /> と下に有界である。下に有界な単調非減少関数の極限は必ず存在するため、方向微分 <InlineMath math="f'(x; d)" /> は存在する。
                </p>
                <p>
                    正斉次性と劣加法性についても、極限の性質と元の関数の凸性から容易に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                方向微分の存在は、のちに第3章で学ぶ「劣微分」の概念へとつながります。さらに、局所リプシッツ連続性と測度論の結果を組み合わせることで、次の強力な定理が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.5-2 (ラデマッハーの定理との接続)">
                <p>
                    凸関数は、その有効定義域の内部において、ルベーグ測度の意味でほとんどすべての点で微分可能である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Corollary 2.5-1 より、凸関数 <InlineMath math="f" /> は有効定義域の内部の任意のコンパクト集合上で局所リプシッツ連続である。一方、3-3 測度論で学ぶ「ラデマッハーの定理（Rademacher's theorem）」によれば、開集合上でリプシッツ連続な関数は、その開集合内のほとんどすべての点で微分可能である。したがって、<InlineMath math="f" /> も内部のほとんどすべての点で微分可能となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.5-3">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> は <InlineMath math="x = 0" /> で微分不可能であるが、<InlineMath math="x \neq 0" /> のすべての点で微分可能である（<InlineMath math="x>0" /> で <InlineMath math="f'(x)=1" />、<InlineMath math="x<0" /> で <InlineMath math="f'(x)=-1" />）。微分不可能点の集合は <InlineMath math="\{0\}" /> であり、これはルベーグ測度 <InlineMath math="0" /> の集合である。
                </p>
            </ContentBox>

            <p>
                このように、凸関数は滑らかではない点（微分不可能な点）を持ち得ますが、それは全体から見ればごく僅かな例外に過ぎないということが保証されます。
            </p>

            <ContentBox type="remark" title="方向微分と劣微分の関係">
                <p>
                    方向微分 <InlineMath math="f'(x; d)" /> が劣線形関数であるという事実は、ハーン・バナッハの定理と密接に関わっています。実際、のちの章で定義する劣勾配の集合（劣微分）は、この劣線形関数 <InlineMath math="f'(x; \cdot)" /> の「サポート関数」と見なすことができ、これが凸解析の双対性を支える根幹の構造となっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>凸関数は有効定義域の内部で連続であり、さらに局所リプシッツ連続である。</li>
                    <li>境界点においては連続性が崩れることがある。</li>
                    <li>内点の各点において、任意の方向への方向微分が常に存在する。</li>
                    <li>ラデマッハーの定理により、凸関数はほとんどすべての点で微分可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
