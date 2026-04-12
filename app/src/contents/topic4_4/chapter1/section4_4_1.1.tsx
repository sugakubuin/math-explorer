import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexSetsDefinitionAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、凸解析における最も基本的な対象である「凸集合」について学びます。凸集合は、直感的には「へこみのない集合」であり、最適化問題において局所的最適解が大域的最適解に一致するという強力な性質を支える基盤となります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸集合の定義</h2>

            <p>まずは、凸集合を数学的に厳密に定義します。線分を含むという幾何学的な直感が、代数的な不等式としてどのように定式化されるかを見ていきましょう。</p>

            <ContentBox type="definition" title="Definition 1.1-1 (凸集合)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の部分集合 <InlineMath math="C" /> が<b>凸集合（convex set）</b>であるとは、任意の <InlineMath math="x, y \in C" /> と <InlineMath math="\lambda \in [0,1]" /> に対して、以下の条件が成り立つことである。
                </p>
                <BlockMath math="\lambda x + (1-\lambda)y \in C" />
            </ContentBox>

            <p>この定義は、集合内の任意の2点を結ぶ線分が、常にその集合内に完全に含まれることを意味しています。抽象的な定義を理解するために、いくつかの具体例を確認します。</p>

            <ContentBox type="example" title="Example 1.1-1">
                <p>
                    半空間 <InlineMath math="C = \{x \in \mathbb{R}^n \mid \langle a, x \rangle \leq b\}" /> が凸集合であることを確認する。ただし <InlineMath math="a \in \mathbb{R}^n" /> はゼロでないベクトル、<InlineMath math="b \in \mathbb{R}" /> である。
                </p>
                <p>
                    任意の <InlineMath math="x, y \in C" /> と <InlineMath math="\lambda \in [0,1]" /> をとる。これらは <InlineMath math="\langle a, x \rangle \leq b" /> および <InlineMath math="\langle a, y \rangle \leq b" /> を満たす。<InlineMath math="z = \lambda x + (1-\lambda)y" /> とおくと、
                </p>
                <BlockMath math="\begin{aligned} \langle a, z \rangle &= \langle a, \lambda x + (1-\lambda)y \rangle \\ &= \lambda \langle a, x \rangle + (1-\lambda)\langle a, y \rangle \\ &\leq \lambda b + (1-\lambda)b \\ &= b \end{aligned}" />
                <p>
                    したがって <InlineMath math="z \in C" /> となり、半空間 <InlineMath math="C" /> は凸集合である。
                </p>
            </ContentBox>

            <p>次に、距離に関する基本的な集合である球（閉球）の凸性を確かめます。</p>

            <ContentBox type="example" title="Example 1.1-2">
                <p>
                    原点を中心とする半径 <InlineMath math="r" /> の閉球 <InlineMath math="B(0, r) = \{x \in \mathbb{R}^n \mid \|x\| \leq r\}" /> が凸集合であることを確認する。
                </p>
                <p>
                    任意の <InlineMath math="x, y \in B(0, r)" /> と <InlineMath math="\lambda \in [0,1]" /> をとる。<InlineMath math="\|x\| \leq r" /> と <InlineMath math="\|y\| \leq r" /> が成り立つ。ノルムの三角不等式および斉次性より、
                </p>
                <BlockMath math="\begin{aligned} \|\lambda x + (1-\lambda)y\| &\leq \|\lambda x\| + \|(1-\lambda)y\| \\ &= \lambda \|x\| + (1-\lambda)\|y\| \\ &\leq \lambda r + (1-\lambda)r \\ &= r \end{aligned}" />
                <p>
                    したがって <InlineMath math="\lambda x + (1-\lambda)y \in B(0, r)" /> であり、閉球は凸集合である。
                </p>
            </ContentBox>

            <p>一方で、凸ではない集合の例も見ておきましょう。</p>

            <ContentBox type="example" title="Example 1.1-3">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> における単位円周 <InlineMath math="C = \{x \in \mathbb{R}^2 \mid \|x\| = 1\}" /> は凸集合ではない。
                </p>
                <p>
                    なぜなら、<InlineMath math="x = (1, 0) \in C" /> と <InlineMath math="y = (-1, 0) \in C" /> をとったとき、<InlineMath math="\lambda = 1/2" /> に対する凸結合（中点）は <InlineMath math="(1/2)x + (1/2)y = (0, 0)" /> となるが、<InlineMath math="\|(0,0)\| = 0 \neq 1" /> なので、この中点は <InlineMath math="C" /> に含まれないからである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多面体と錐</h2>

            <p>凸集合の中でも、特に最適化理論で重要となるのが「多面体」と「錐（すい）」です。線形計画問題や錐計画問題など、制約条件として頻繁に登場します。</p>

            <ContentBox type="definition" title="Definition 1.1-2 (多面体)">
                <p>
                    有限個の半空間の共通部分として表される集合を<b>多面体（polyhedron）</b>と呼ぶ。すなわち、ある行列 <InlineMath math="A \in \mathbb{R}^{m \times n}" /> とベクトル <InlineMath math="b \in \mathbb{R}^m" /> を用いて、次のように表される集合である。
                </p>
                <BlockMath math="P = \{x \in \mathbb{R}^n \mid Ax \leq b\}" />
            </ContentBox>

            <p>半空間の共通部分であるため、多面体もまた凸集合となります。</p>

            <ContentBox type="example" title="Example 1.1-4">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の三角形（内部を含む）は多面体として表現できる。例えば、頂点が <InlineMath math="(0,0), (1,0), (0,1)" /> の三角形 <InlineMath math="T" /> は、以下の3つの半空間の共通部分である。
                </p>
                <BlockMath math="\begin{aligned} x &\geq 0 \\ y &\geq 0 \\ x + y &\leq 1 \end{aligned}" />
                <p>
                    各半空間は Example 1.1-1 で見たように凸集合であり、凸集合の任意の共通部分はまた凸集合となるため、この三角形 <InlineMath math="T" /> も凸集合である。
                </p>
            </ContentBox>

            <p>続いて、原点から放射状に広がる性質を持つ「錐」を定義します。</p>

            <ContentBox type="definition" title="Definition 1.1-3 (錐)">
                <p>
                    部分集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> が<b>錐（cone）</b>であるとは、任意の <InlineMath math="x \in C" /> と <InlineMath math="\lambda \geq 0" /> に対して、
                </p>
                <BlockMath math="\lambda x \in C" />
                <p>
                    が成り立つことである。
                </p>
            </ContentBox>

            <p>錐が必ずしも凸集合であるとは限りませんが、最適化などで扱う多くの場合、錐でありかつ凸である「凸錐」を考えます。</p>

            <ContentBox type="example" title="Example 1.1-5">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> における第1象限 <InlineMath math="C = \{(x,y) \in \mathbb{R}^2 \mid x \geq 0, y \geq 0\}" /> は錐である。
                </p>
                <p>
                    実際、任意の <InlineMath math="(x,y) \in C" /> と <InlineMath math="\lambda \geq 0" /> に対して、<InlineMath math="\lambda x \geq 0" /> かつ <InlineMath math="\lambda y \geq 0" /> となるため、<InlineMath math="\lambda(x,y) \in C" /> である。さらに、この集合は多面体でもあるため、凸集合の性質も満たす（凸錐である）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="凸錐について">
                <p>
                    錐であり、かつ凸集合でもある集合を<b>凸錐（convex cone）</b>と呼びます。本節で紹介した半正定値錐や、後ほど学ぶ極錐などはすべて凸錐です。凸錐は非負結合に対して閉じているという特徴があり、錐計画問題（Cone Programming）などの現代的な最適化理論において中心的な役割を果たします。
                </p>
            </ContentBox>

            <p>次節では、与えられた集合から凸集合を生成する「凸包」や、凸錐に双対的な概念である「極錐」について掘り下げていきます。</p>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>集合が凸であるとは、任意の2点を結ぶ線分がその集合に含まれること（<InlineMath math="\lambda x + (1-\lambda)y \in C" />）である。</li>
                    <li>半空間や閉球は凸集合の代表的な例である。</li>
                    <li>有限個の半空間の共通部分で表される集合を多面体と呼び、これも凸集合となる。</li>
                    <li>非負のスカラー倍について閉じている集合を錐と呼び、錐かつ凸であるものを凸錐という。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
