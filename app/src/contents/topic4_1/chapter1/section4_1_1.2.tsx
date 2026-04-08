import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DistanceInducedByNorm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではベクトル空間に「大きさ」を定義するノルムについて学びました。関数解析において、ノルムが持つ最も重要な役割の一つは、空間に「距離」の概念を導入し、位相的な性質を調べられるようにすることです。本節では、ノルムからどのように距離が誘導されるか、またその距離が持つ性質について確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">誘導距離の定義</h2>

            <p>
                ノルム空間では、2つのベクトルの「差の大きさ」を考えることで、ベクトル間の距離を自然に定義することができます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (誘導距離)">
                <p>
                    ノルム空間 <InlineMath math="(V, \|\cdot\|)" /> において、2点 <InlineMath math="x, y \in V" /> 間の距離 <InlineMath math="d(x, y)" /> を次のように定義する。
                </p>
                <BlockMath math="d(x, y) = \|x - y\|" />
                <p>
                    これをノルムから<b>誘導される距離（induced metric）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                この定義が実際に「距離」の公理を満たしていることを確認します。距離の条件とは、2点間の距離が0以上であること、0になるのは同一の点であること、AからBへの距離とBからAへの距離が等しいこと、そして三角不等式を満たすことでした。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-1">
                <p>
                    ノルム空間 <InlineMath math="(V, \|\cdot\|)" /> 上で定義された <InlineMath math="d(x, y) = \|x - y\|" /> は距離の公理を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="d(x, y)" /> が距離関数であることを示すには、以下の3条件を満たすことを確認すればよい。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>非退化性:</strong> ノルムの正定値性より、<InlineMath math="d(x, x) = \|x - x\| = \|0\| = 0" />。また、<InlineMath math="d(x, y) = \|x - y\| = 0" /> となるのは、ノルムの性質から <InlineMath math="x - y = 0" /> すなわち <InlineMath math="x = y" /> のときに限られる。
                    </li>
                    <li>
                        <strong>対称性:</strong> ノルムの斉次性より、<InlineMath math="\| -z \| = | -1 | \|z\| = \|z\|" /> である。これを適用すると、
                        <BlockMath math="d(x, y) = \|x - y\| = \| -(y - x) \| = \|y - x\| = d(y, x)" />
                        となる。
                    </li>
                    <li>
                        <strong>三角不等式:</strong> ノルムの三角不等式をベクトル <InlineMath math="x - z" /> と <InlineMath math="z - y" /> に対して用いると、
                        <BlockMath math="\begin{aligned} d(x, y) &= \|x - y\| \\ &= \|(x - z) + (z - y)\| \\ &\leq \|x - z\| + \|z - y\| \\ &= d(x, z) + d(z, y) \end{aligned}" />
                        となり成立する。
                    </li>
                </ol>
                <p>
                    以上より、<InlineMath math="d" /> は距離関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ノルムが異なれば、そこで誘導される距離も変わり、空間の「形」が変わります。具体的な計算を通じてこれを確認してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 1.2-1 (<InlineMath math="\mathbb{R}^2" /> 上の距離)</span>}>
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上の <InlineMath math="\|\cdot\|_1" /> と <InlineMath math="\|\cdot\|_2" /> が定める距離について考える。
                    同じ2点 <InlineMath math="x = (0,0)" />, <InlineMath math="y = (1,1)" /> に対する距離を計算する。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\|\cdot\|_1" /> から誘導される距離（マンハッタン距離）: <InlineMath math="d_1(x, y) = \|(0,0) - (1,1)\|_1 = \|(-1, -1)\|_1 = |-1| + |-1| = 2" /></li>
                    <li><InlineMath math="\|\cdot\|_2" /> から誘導される距離（ユークリッド距離）: <InlineMath math="d_2(x, y) = \|(0,0) - (1,1)\|_2 = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2}" /></li>
                </ul>
                <p>
                    このように、同じ2点であってもノルムの取り方によって「距離」は異なる値を持つ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離空間としてのノルム空間</h2>

            <p>
                すべてのノルム空間は、誘導された距離を用いることで自動的に距離空間となります。このことは、これまで学んできた位相空間論などの距離空間の理論がすべて適用可能になることを意味します。
            </p>

            <ContentBox type="remark" title="距離空間としての性質">
                <p>
                    ノルム空間は距離空間の特別な場合です。したがって、3-12 位相空間論IIで扱った距離空間の理論、すなわち開集合、閉集合、収束、コーシー列、完備性といった位相的概念がすべて自然に引き継がれます。さらにノルム空間には距離空間にはない「線形構造（足し算とスカラー倍）」があるため、幾何学と代数学が融合した豊かな理論が展開できます。
                </p>
            </ContentBox>

            <p>
                ノルム空間における基本的な性質として、ノルム自身の連続性を確認しておきましょう。「ベクトルの大きさを測る」という操作は、少しベクトルが揺らいでいればその大きさも少ししか変わらないという連続性を持ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-2 (ノルムの連続性)">
                <p>
                    ノルム空間 <InlineMath math="V" /> において、写像 <InlineMath math="x \mapsto \|x\|" /> はノルムから誘導される距離位相に関して連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="x, y \in V" /> に対して、三角不等式から
                </p>
                <BlockMath math="\|x\| = \|x - y + y\| \leq \|x - y\| + \|y\|" />
                <p>
                    が成り立つ。したがって、<InlineMath math="\|x\| - \|y\| \leq \|x - y\|" /> を得る。<InlineMath math="x" /> と <InlineMath math="y" /> を入れ替えると、
                </p>
                <BlockMath math="\|y\| - \|x\| \leq \|y - x\| = \|x - y\|" />
                <p>
                    となる。よって、これらを組み合わせると逆三角不等式
                </p>
                <BlockMath math="\left| \|x\| - \|y\| \right| \leq \|x - y\|" />
                <p>
                    が成り立つ。ここで <InlineMath math="x_n \to x" />（すなわち <InlineMath math="\|x_n - x\| \to 0" />）であれば、
                </p>
                <BlockMath math="\left| \|x_n\| - \|x\| \right| \leq \|x_n - x\| \to 0" />
                <p>
                    となり、<InlineMath math="\|x_n\| \to \|x\|" /> が成立する。よってノルム写像は連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明の中で現れた「逆三角不等式」は、ノルムの評価において非常に頻繁に用いられる強力な不等式です。これを用いた具体的な数値評価の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-2 (逆三角不等式の適用)">
                <p>
                    ノルム空間内の2つのベクトル <InlineMath math="x, y" /> に対して、それぞれの大きさが <InlineMath math="\|x\| = 5" />, <InlineMath math="\|y\| = 3" /> であったとする。このとき、逆三角不等式を用いると2点間の距離 <InlineMath math="\|x - y\|" /> について以下の制約が得られる。
                </p>
                <BlockMath math="\|x - y\| \geq \left| \|x\| - \|y\| \right| = |5 - 3| = 2" />
                <p>
                    すなわち、原点からの距離が5の点と3の点の間の距離は、最短でも2以上離れているという幾何学的にも当然の結果を、式から直接確認することができる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ノルム空間において、差のノルム <InlineMath math="d(x, y) = \|x - y\|" /> は距離の公理を満たす。</li>
                    <li>このことにより、すべてのノルム空間は距離空間となり、位相空間論における距離空間の理論が適用可能になる。</li>
                    <li>ノルムから誘導される距離を用いることで、空間の位相的性質（連続性や収束など）を論じることができる。</li>
                    <li>逆三角不等式 <InlineMath math="\left| \|x\| - \|y\| \right| \leq \|x - y\|" /> はノルム自体の連続性を保証し、様々な評価で有用である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
