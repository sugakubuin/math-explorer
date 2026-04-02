import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MetricSpacesDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで扱ってきた位相空間は、開集合系という非常に抽象的な枠組みで定義されていました。
                これに対して<strong>距離空間 (Metric Space)</strong> は、私たちの直感に最も近い「点と点の間の距離」という概念を公理化し、それを用いて位相を導入した空間です。
                多くの重要な位相的性質（連続性や収束など）は、この距離空間の文脈においてより具体的に理解することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離空間の定義</h2>

            <p>
                まずは、集合上の 2 点に対して実数値を対応させる「距離関数」を、3つの自然な公理によって定義します。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (距離関数・距離空間)">
                <p>
                    集合 <InlineMath math="X" /> 上の<strong>距離関数 (Metric, Distance function)</strong> とは、任意の <InlineMath math="x, y, z \in X" /> に対して次の条件（距離の公理）を満たす写像 <InlineMath math="d: X \times X \to \mathbb{R}" /> のことである：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><strong>正値性</strong>： <InlineMath math="d(x, y) \geq 0" /> であり、 <InlineMath math="d(x, y) = 0 \iff x = y" /></li>
                    <li><strong>対称性</strong>： <InlineMath math="d(x, y) = d(y, x)" /></li>
                    <li><strong>三角不等式</strong>： <InlineMath math="d(x, z) \leq d(x, y) + d(y, z)" /></li>
                </ol>
                <p className="mt-4">
                    距離関数 <InlineMath math="d" /> が定義された集合 <InlineMath math="X" /> を<strong>距離空間</strong>と呼び、 <InlineMath math="(X, d)" /> と表記する。
                </p>
            </ContentBox>

            <p className="mt-4">
                私たちが日常的に扱う「ものさし」での距離は、まさにこの公理を満たしています。
                しかし、数学的にはこれ以外の「距離」も数多く存在します。
            </p>

            <ContentBox type="example" title="Example 9.1-1 (代表的な距離の例)">
                <p>
                    実数ベクトル空間 <InlineMath math="\mathbb{R}^n" /> において、 <InlineMath math="x = (x_i), y = (y_i)" /> に対して以下の距離がよく用いられます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>ユークリッド距離</strong>： <InlineMath math="d_2(x, y) = \sqrt{\sum (x_i - y_i)^2}" /> （直感的な最短距離）</li>
                    <li><strong>タクシー距離</strong>： <InlineMath math="d_1(x, y) = \sum |x_i - y_i|" /> （マンハッタン距離とも呼ばれる）</li>
                    <li><strong>一様距離</strong>： <InlineMath math="d_\infty(x, y) = \max_i |x_i - y_i|" /></li>
                    <li><strong>離散距離</strong>： 任意の集合上で、 <InlineMath math="x=y" /> なら 0、 <InlineMath math="x \neq y" /> なら 1 と定義する距離。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離位相</h2>

            <p>
                距離が定義されると、それを用いて「開集合」を自然に定義でき、位相空間としての構造を導入できます。
            </p>

            <ContentBox type="definition" title="Definition 9.1-2 (開球・距離位相)">
                <p>
                    距離空間 <InlineMath math="(X, d)" /> において、点 <InlineMath math="a \in X" /> と半径 <InlineMath math="\varepsilon > 0" /> に対し、
                    <BlockMath math="B(a; \varepsilon) = \{ x \in X \mid d(x, a) < \varepsilon \}" />
                    を <InlineMath math="a" /> を中心とする半径 <InlineMath math="\varepsilon" /> の<strong>開球 (Open ball)</strong> と呼ぶ。
                </p>
                <p className="mt-4">
                    この開球全体の族を開基として生成される位相 <InlineMath math="\mathcal{O}_d" /> を、距離 <InlineMath math="d" /> による<strong>距離位相 (Metric topology)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                この定義によれば、ある部分集合 <InlineMath math="U \subset X" /> が開集合であるとは、「 <InlineMath math="U" /> の各点に対して、その点を中心に <InlineMath math="U" /> に完全包摂されるような小さな開球がとれる」ことと同値になります。
            </p>

            <ContentBox type="proposition" title="Proposition 9.1-1 (開球の役割)">
                <p>
                    開球全体の族 <InlineMath math="\mathcal{B} = \{ B(x; \varepsilon) \mid x \in X, \varepsilon > 0 \}" /> は、距離位相の開基をなす。
                    したがって、距離空間において開集合は開球の（任意個の）和集合として表される。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.1-2 (距離によって変わる開球の形)">
                <p>
                    平面 <InlineMath math="\mathbb{R}^2" /> において、「開球」の形は距離の定義によって異なります。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>ユークリッド距離：通常の「円」の内部。</li>
                    <li>タクシー距離：斜めに傾いた「正方形」（ひし形）の内部。</li>
                    <li>一様距離：軸に平行な「正方形」の内部。</li>
                </ul>
                <p className="mt-2">
                    これらは形こそ違いますが、互いに相手を包含し合えるため、実は全て同じ距離位相を生成します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">距離空間は T4</h2>

            <p>
                距離空間は、位相空間の中でも非常に優れた分離性質を持っています。
                実際、距離を用いて点や集合の間の「隔たり」を数値化できるため、正規空間となります。
            </p>

            <ContentBox type="theorem" title="Theorem 9.1-1 (距離空間の正規性)">
                <p>
                    任意の距離空間 <InlineMath math="X" /> は<strong>正規空間 (T4空間)</strong> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    互いに素な 2 つの閉集合 <InlineMath math="A, B \subset X" /> をとる。
                    各点 <InlineMath math="a \in A" /> に対して、 <InlineMath math="B" /> は閉集合であり <InlineMath math="a \notin B" /> であるから、 <InlineMath math="\varepsilon_a = d(a, B) = \inf_{b \in B} d(a, b) > 0" /> が成り立つ。
                    同様に各点 <InlineMath math="b \in B" /> に対して <InlineMath math="\varepsilon_b = d(b, A) > 0" /> である。
                </p>
                <p className="mt-4">
                    ここで、次の開集合を定義する：
                    <BlockMath math="U = \bigcup_{a \in A} B(a; \varepsilon_a/2), \quad V = \bigcup_{b \in B} B(b; \varepsilon_b/2)" />
                    明らかに <InlineMath math="A \subset U, B \subset V" /> である。もし <InlineMath math="z \in U \cap V" /> とすると、
                    ある <InlineMath math="a \in A, b \in B" /> が存在して <InlineMath math="d(z, a) < \varepsilon_a/2" /> かつ <InlineMath math="d(z, b) < \varepsilon_b/2" /> となる。
                </p>
                <p className="mt-4">
                    三角不等式より <InlineMath math="d(a, b) \leq d(a, z) + d(z, b) < (\varepsilon_a + \varepsilon_b)/2" /> となるが、
                    一方で <InlineMath math="\varepsilon_a \leq d(a, b)" /> かつ <InlineMath math="\varepsilon_b \leq d(a, b)" /> であるから、
                    <InlineMath math="d(a, b) < d(a, b)" /> という矛盾が生じる。
                    よって <InlineMath math="U \cap V = \emptyset" /> となり、 <InlineMath math="X" /> は正規である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="remark" title="距離空間の強み">
                <p>
                    一般の位相空間では「互いに素な閉集合を分離できるか」は深刻な問題でしたが、距離空間では上記のように距離関数を用いて明示的に開集合を構成できます。
                    この「数値で制御できる」という性質が、解析学における距離空間の絶大な信頼性の源泉となっています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>距離の公理</strong>：正値性、対称性、三角不等式の 3 条件。</li>
                    <li><strong>距離位相</strong>：開球全体の族を開基として生成される自然な位相。</li>
                    <li><strong>分離性質</strong>：全ての距離空間は T4 （正規空間）であり、非常に素直な構造を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
