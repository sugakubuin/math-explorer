import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubdifferentialSumRule() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸関数に対する劣微分の計算において最も基本的な規則の一つである「和の公式」について解説します。微分の世界では関数の和の微分は微分の和になりますが、劣微分の場合は集合の和となるため、常に等号が成り立つとは限りません。どのような条件のもとで等号が成立するのかを詳しく見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">和の公式の包含関係</h2>

            <p>
                まず、2つの凸関数の和の劣微分が、それぞれの劣微分の和集合を常に含むという基本的な包含関係を示します。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.3-1 (包含関係)</span>}>
                <p>
                    任意の凸関数 <InlineMath math="f, g: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> と点 <InlineMath math="x \in \mathbb{R}^n" /> に対して、以下の包含関係が成り立つ。
                </p>
                <BlockMath math="\partial f(x) + \partial g(x) \subseteq \partial(f+g)(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="u \in \partial f(x)" /> および <InlineMath math="v \in \partial g(x)" /> を任意にとる。劣勾配の定義より、任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して以下の不等式が成り立つ。
                </p>
                <BlockMath math="f(y) \geq f(x) + \langle u, y - x \rangle" />
                <BlockMath math="g(y) \geq g(x) + \langle v, y - x \rangle" />
                <p>
                    これら2つの不等式を辺々足し合わせると、
                </p>
                <BlockMath math="(f+g)(y) \geq (f+g)(x) + \langle u + v, y - x \rangle" />
                <p>
                    が得られる。これは <InlineMath math="u + v" /> が関数 <InlineMath math="f+g" /> の点 <InlineMath math="x" /> における劣勾配であることを意味している。したがって、<InlineMath math="u + v \in \partial(f+g)(x)" /> であり、<InlineMath math="\partial f(x) + \partial g(x) \subseteq \partial(f+g)(x)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この包含関係は常に成り立ちますが、実際の計算においては等号が成り立つかどうかが重要になります。以下に等号が成り立つ簡単な例を示します。
            </p>

            <ContentBox type="example" title="Example 3.3-1">
                <p>
                    <InlineMath math="f(x) = x^2" />、<InlineMath math="g(x) = |x|" /> の場合を考える。点 <InlineMath math="x = 0" /> における劣微分を計算する。
                </p>
                <p>
                    それぞれの劣微分は <InlineMath math="\partial f(0) = \{0\}" />、<InlineMath math="\partial g(0) = [-1, 1]" /> である。したがって、その和集合は
                </p>
                <BlockMath math="\partial f(0) + \partial g(0) = \{0\} + [-1, 1] = [-1, 1]" />
                <p>
                    となる。一方で、<InlineMath math="h(x) = x^2 + |x|" /> の <InlineMath math="x = 0" /> における劣微分を直接計算すると、任意の <InlineMath math="y" /> について
                </p>
                <BlockMath math="y^2 + |y| \geq h(0) + u(y - 0) = uy" />
                <p>
                    を満たす <InlineMath math="u" /> を求めることになる。<InlineMath math="y^2 \geq 0" /> であるため、<InlineMath math="|y| \geq uy" /> すなわち <InlineMath math="u \in [-1, 1]" /> であればこの不等式は成立する。また <InlineMath math="y \to 0" /> とすると <InlineMath math="u \in [-1, 1]" /> が必要であることもわかる。したがって
                </p>
                <BlockMath math="\partial(f+g)(0) = [-1, 1]" />
                <p>
                    となり、<InlineMath math="\partial f(0) + \partial g(0) = \partial(f+g)(0)" /> が成り立っている。
                </p>
            </ContentBox>

            <p>
                Example 3.3-1 のように等号が成り立つ状況は非常に有用です。では、常に等号が成り立つのでしょうか。次項では等号を保証するための強力な定理であるモロー-ロカフェラーの定理を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">和の公式の等号条件</h2>

            <p>
                劣微分の和の公式において等号が成立するためには、それぞれの関数の有効定義域（関数の値が <InlineMath math="+\infty" /> とならない領域）が「十分に重なっている」必要があります。これを厳密に表現したのが制約想定（qualification condition）と呼ばれる条件です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (モロー-ロカフェラーの定理)">
                <p>
                    <InlineMath math="f, g: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> を真の凸関数とする。もし、有効定義域の相対的内部 <InlineMath math="\mathrm{ri}(\mathrm{dom}(f))" /> と <InlineMath math="\mathrm{ri}(\mathrm{dom}(g))" /> が共通部分を持つ、すなわち
                </p>
                <BlockMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(\mathrm{dom}(g)) \neq \emptyset"
                />
                <p>
                    が成り立つならば、任意の <InlineMath math="x \in \mathbb{R}^n" /> に対して以下の等式が成り立つ。
                </p>
                <BlockMath math="\partial(f+g)(x) = \partial f(x) + \partial g(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Proposition 3.3-1 より <InlineMath math="\partial f(x) + \partial g(x) \subseteq \partial(f+g)(x)" /> は既に示されているため、逆の包含関係 <InlineMath math="\partial(f+g)(x) \subseteq \partial f(x) + \partial g(x)" /> を示す。
                </p>
                <p>
                    <InlineMath math="w \in \partial(f+g)(x)" /> を任意にとる。関数 <InlineMath math="f, g" /> をシフトして <InlineMath math="\tilde{f}(y) = f(y+x) - f(x) - \langle w, y \rangle" />、<InlineMath math="\tilde{g}(y) = g(y+x) - g(x)" /> と定義すると、<InlineMath math="0 \in \partial(\tilde{f} + \tilde{g})(0)" /> であり、<InlineMath math="0 \in \partial \tilde{f}(0) + \partial \tilde{g}(0)" /> を示せば十分である。このとき <InlineMath math="\tilde{f}(0) = \tilde{g}(0) = 0" /> であり、<InlineMath math="0" /> は <InlineMath math="\tilde{f} + \tilde{g}" /> の最小値である。
                </p>
                <p>
                    <InlineMath math="C_1 = \mathrm{epi}(\tilde{f})" /> および <InlineMath math="C_2 = \{(y, \alpha) \mid \alpha \leq -\tilde{g}(y)\}" /> という2つの凸集合を考える。<InlineMath math="0" /> が最小値であることから、<InlineMath math="C_1" /> と <InlineMath math="C_2" /> の内部は交わらない。分離定理より、これらを分離する非自明な超平面が存在する。<InlineMath math="\mathrm{ri}(\mathrm{dom}(\tilde{f})) \cap \mathrm{ri}(\mathrm{dom}(\tilde{g})) \neq \emptyset" /> という制約想定（相対的内部の交差条件）から、この分離超平面は垂直でない（つまり、最後の成分が <InlineMath math="0" /> でない）ことが保証される。
                </p>
                <p>
                    この分離超平面の傾きを用いてベクトル <InlineMath math="v" /> を構成すると、<InlineMath math="v \in \partial \tilde{f}(0)" /> かつ <InlineMath math="-v \in \partial \tilde{g}(0)" /> となる。したがって <InlineMath math="0 = v + (-v) \in \partial \tilde{f}(0) + \partial \tilde{g}(0)" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、2つの関数の有効定義域が相対的内部で交わっていれば、和の劣微分を各劣微分の和として計算してよいことを保証する極めて実用的な結果です。逆に、この制約想定が崩れると等号が成り立たない場合があります。
            </p>

            <ContentBox type="example" title="Example 3.3-2">
                <p>
                    制約想定が崩れる場合を考える。<InlineMath math="f(x) = \delta_{\{0\}}(x)" />、<InlineMath math="g(x) = \delta_{\{1\}}(x)" /> とする。ここで <InlineMath math="\delta" /> は指示関数である。
                </p>
                <p>
                    このとき、<InlineMath math="\mathrm{dom}(f) = \{0\}" />、<InlineMath math="\mathrm{dom}(g) = \{1\}" /> であり、<InlineMath math="\mathrm{dom}(f) \cap \mathrm{dom}(g) = \emptyset" /> である。したがって、定理の制約想定は満たされない。
                </p>
                <p>
                    和の関数は <InlineMath math="(f+g)(x) = \delta_{\{0\}}(x) + \delta_{\{1\}}(x)" /> となるが、これはすべての <InlineMath math="x" /> に対して <InlineMath math="+\infty" /> となる定数関数である。<InlineMath math="(f+g)(x) \equiv +\infty" /> の劣微分は空集合である。
                </p>
                <p>
                    一方で、<InlineMath math="x = 0" /> における劣微分を考えると、<InlineMath math="\partial f(0) = \mathbb{R}" /> であるが、<InlineMath math="\partial g(0) = \emptyset" /> である。空集合との和は空集合となるため、<InlineMath math="\partial f(0) + \partial g(0) = \emptyset" /> となる。包含関係 <InlineMath math="\emptyset \subseteq \emptyset" /> は意味をなすが、そもそも <InlineMath math="x=0" /> において <InlineMath math="f+g" /> が有限値をとらないため、通常の等号を論じる前提が欠けていることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="スレーター条件との関係">
                <p>
                    モロー-ロカフェラーの定理で要求されている <InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(\mathrm{dom}(g)) \neq \emptyset" /> という条件は、最適化問題において頻繁に登場する制約想定です。Chapter 5 で学ぶフェンシェル双対性における強双対定理（Theorem 5.2-1）でも、同型の条件が現れます。直感的には、2つの関数の定義域が「境界だけで接している」ような病的な状態を排除し、幾何学的に分離超平面を安定して構成できるようにするための条件と解釈できます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        一般に、凸関数 <InlineMath math="f, g" /> に対して <InlineMath math="\partial f(x) + \partial g(x) \subseteq \partial(f+g)(x)" /> が成り立つ。
                    </li>
                    <li>
                        モロー-ロカフェラーの定理より、<InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(\mathrm{dom}(g)) \neq \emptyset" /> のとき、和の公式 <InlineMath math="\partial(f+g)(x) = \partial f(x) + \partial g(x)" /> が成立する。
                    </li>
                    <li>
                        制約想定（相対的内部の交差条件）は、病的なケースを排除し、双対性や劣微分の等式を保証するために不可欠である。
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
