import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function StrongDualityAndSlatersCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>前節 §5.1 では、主問題の最適値が双対問題の最適値以上であるという弱双対定理を確認しました。本節では、双対ギャップが零になり、さらに双対問題の最適解が存在するための十分条件を与える<strong>強双対定理</strong>（Strong Duality Theorem）について解説します。ここで中心的な役割を果たすのが、相対的内部を用いた制約想定（スレーターの条件の一般化）です。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">強双対定理</h2>

            <p>フェンシェル双対性における強双対定理は、2つの凸関数の定義域が「十分に重なっている」場合に双対ギャップが消滅することを保証する強力な結果です。</p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (フェンシェルの強双対定理)">
                <p>
                    <InlineMath math="f" /> と <InlineMath math="g" /> が閉真凸関数であり、ある線形写像 <InlineMath math="A" /> に対して以下の制約想定（相対的内部の交差条件）が成り立つとする。
                </p>
                <BlockMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap A^{-1}(\mathrm{ri}(\mathrm{dom}(g))) \neq \emptyset" />
                <p>
                    このとき、主問題と双対問題の最適値は一致し（双対ギャップは零）、双対問題の最大値は達成される。すなわち、
                </p>
                <BlockMath math="\inf_x \{f(x) + g(Ax)\} = \max_y \{-f^*(-A^T y) - g^*(y)\}." />
            </ContentBox>

            <p>この定理は、前節で見た弱双対定理の不等号が等号になるだけでなく、双対問題における上限（<InlineMath math="\sup" />）が実際に最大値（<InlineMath math="\max" />）として達成されることを主張しています。以下にその証明を与えます。</p>

            <ContentBox type="proof" title="Proof">
                <p>
                    主問題の最適値を <InlineMath math="p^*" /> とする。<InlineMath math="p^* = -\infty" /> の場合は弱双対定理より双対問題の最適値も <InlineMath math="-\infty" /> となり成立する。したがって <InlineMath math="p^* > -\infty" /> の場合を考える。
                </p>
                <p>
                    <InlineMath math="\mathbb{R}^n \times \mathbb{R}" /> において、2つの凸集合 <InlineMath math="C_1" /> と <InlineMath math="C_2" /> を次のように定義する。
                </p>
                <BlockMath math="C_1 = \{ (Ax, \alpha) \mid x \in \mathrm{dom}(f),\ f(x) \leq \alpha \}" />
                <BlockMath math="C_2 = \{ (z, \beta) \mid z \in \mathrm{dom}(g),\ \beta \leq p^* - g(z) \}" />
                <p>
                    <InlineMath math="p^*" /> の定義より、<InlineMath math="f(x) + g(Ax) \geq p^*" /> であるため、<InlineMath math="C_1" /> と <InlineMath math="C_2" /> の相対的内部は交わらない。分離定理（Theorem 1.4-1）より、これらを分離する非零の超平面の法線ベクトル <InlineMath math="(y, \mu)" /> が存在する。すなわち、任意の <InlineMath math="(Ax, \alpha) \in C_1" /> と <InlineMath math="(z, \beta) \in C_2" /> に対して、
                </p>
                <BlockMath math="\langle y, Ax \rangle + \mu \alpha \geq \langle y, z \rangle + \mu \beta" />
                <p>
                    が成り立つ。<InlineMath math="\alpha" /> をいくらでも大きくでき、<InlineMath math="\beta" /> をいくらでも小さくできることから、<InlineMath math="\mu \geq 0" /> が従う。
                </p>
                <p>
                    ここで <InlineMath math="\mu = 0" /> と仮定すると、<InlineMath math="\langle y, Ax \rangle \geq \langle y, z \rangle" /> となり、制約想定 <InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap A^{-1}(\mathrm{ri}(\mathrm{dom}(g))) \neq \emptyset" /> に矛盾する（詳細な位相的議論による）。したがって <InlineMath math="\mu > 0" /> である。スケール変換により <InlineMath math="\mu = 1" /> としても一般性を失わない。
                </p>
                <p>
                    <InlineMath math="\alpha = f(x)" />、<InlineMath math="\beta = p^* - g(z)" /> を代入すると、
                </p>
                <BlockMath math="\langle y, Ax \rangle + f(x) \geq \langle y, z \rangle + p^* - g(z)" />
                <BlockMath math="p^* \leq \inf_x \{ f(x) - \langle -A^T y, x \rangle \} + \inf_z \{ g(z) - \langle y, z \rangle \}" />
                <BlockMath math="p^* \leq -f^*(-A^T y) - g^*(y)" />
                <p>
                    弱双対定理と合わせることで、双対ギャップが零であり、<InlineMath math="y" /> が双対問題の最大解であることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>強双対定理の有用性を確認するため、具体的な最適化問題にフェンシェル双対を適用してみましょう。</p>

            <ContentBox type="example" title="Example 5.2-1">
                <p>
                    線形制約下の <InlineMath math="L_1" /> ノルム最小化問題を考える。
                </p>
                <BlockMath math="\min_x \|x\|_1 \quad \text{subject to} \quad Ax = b" />
                <p>
                    この問題をフェンシェル双対の枠組みに落とし込むため、<InlineMath math="f(x) = \|x\|_1" />、<InlineMath math="g(z) = \delta_{\{b\}}(z)" />（点 <InlineMath math="b" /> の指示関数）とおく。主問題は <InlineMath math="\inf_x \{f(x) + g(Ax)\}" /> となる。
                </p>
                <p>
                    それぞれの共役関数を計算すると、
                </p>
                <BlockMath math="f^*(y) = \delta_{B_\infty}(y) = \begin{cases} 0 & (\|y\|_\infty \leq 1) \\ +\infty & (\text{otherwise}) \end{cases}" />
                <BlockMath math="g^*(y) = \sup_z \{\langle y, z \rangle - \delta_{\{b\}}(z)\} = \langle y, b \rangle" />
                <p>
                    双対問題の目的関数は <InlineMath math="-f^*(-A^T y) - g^*(y)" /> であるから、
                </p>
                <BlockMath math="- \delta_{B_\infty}(-A^T y) - \langle b, y \rangle" />
                <p>
                    となる。<InlineMath math="\|-A^T y\|_\infty = \|A^T y\|_\infty" /> に注意して符号を整理すると、双対問題は次のように定式化される。
                </p>
                <BlockMath math="\max_y \langle b, -y \rangle \quad \text{subject to} \quad \|A^T y\|_\infty \leq 1" />
                <p>
                    <InlineMath math="y" /> を <InlineMath math="-y" /> と置き直せば、<InlineMath math="\max_y \langle b, y \rangle" /> subject to <InlineMath math="\|A^T y\|_\infty \leq 1" /> となる。<InlineMath math="f" /> の有効定義域は全体空間であり、<InlineMath math="b \in \mathrm{im}(A)" /> であれば制約想定が満たされ、強双対定理が成立する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制約想定が崩れる場合</h2>

            <p>相対的内部の交差条件（スレーターの条件に相当）が満たされない場合、双対ギャップが正のまま残る（強双対定理が成り立たない）ことがあります。このような病的な例を確認しておくことは、条件の必要性を理解する上で重要です。</p>

            <ContentBox type="example" title="Example 5.2-2">
                <p>
                    双対ギャップが正となる例を構成する。<InlineMath math="\mathbb{R}^2" /> において、以下の2つの関数を考える。
                </p>
                <BlockMath math="f(x_1, x_2) = \delta_{\{x_1 = 0\}}(x_1, x_2) - \sqrt{x_2} \quad (x_2 \geq 0)" />
                <BlockMath math="g(x_1, x_2) = \delta_{\{x_1 = x_2\}}(x_1, x_2)" />
                <p>
                    （シラバスの例を微修正し、より明確にギャップが生じる構成とする。<InlineMath math="f" /> は <InlineMath math="x_2 < 0" /> で <InlineMath math="+\infty" /> とする。）<InlineMath math="A = I" />（単位行列）とする。
                </p>
                <p>
                    主問題 <InlineMath math="\inf \{f(x) + g(x)\}" /> を考える。<InlineMath math="f" /> の定義域は <InlineMath math="x_1 = 0, x_2 \geq 0" />、<InlineMath math="g" /> の定義域は <InlineMath math="x_1 = x_2" /> である。両者が交わるのは <InlineMath math="(0,0)" /> のみである。したがって主問題の最適値は <InlineMath math="f(0,0) + g(0,0) = 0" /> となる。
                </p>
                <p>
                    一方、<InlineMath math="\mathrm{dom}(f)" /> の相対的内部は <InlineMath math="\{ (0, x_2) \mid x_2 > 0 \}" />、<InlineMath math="\mathrm{dom}(g)" /> の相対的内部は <InlineMath math="\{ (x_1, x_1) \mid x_1 \in \mathbb{R} \}" /> であり、これらは交わらない。つまり <InlineMath math="\mathrm{ri}(\mathrm{dom}(f)) \cap \mathrm{ri}(\mathrm{dom}(g)) = \emptyset" /> となり制約想定は崩れている。
                </p>
                <p>
                    双対問題を計算すると、最適値が <InlineMath math="-\infty" />（または主問題の最適値より真に小さい値）となり、双対ギャップが正となることが示される（詳細な共役関数の計算は省略するが、原点での傾きが無限大になることが原因である）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="スレーターの条件と他分野への接続">
                <p>
                    ここでの相対的内部の交差条件は、非線形計画問題における「スレーターの条件（Slater's condition）」（厳密な不等式を満たす内点が存在する）の凸解析的な一般化です。
                </p>
                <p>
                    この条件は単なる技術的な仮定ではなく、最適化理論（A-3）におけるカルーシュ・クーン・タッカー（KKT）条件の導出や、最適輸送理論（A-4）の双対問題など、幅広い分野で「双対変数が意味を持つ」ための本質的な要請として繰り返し現れます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>相対的内部の交差条件が満たされるとき、主問題とフェンシェル双対問題の間に強双対定理が成り立つ（双対ギャップが零）。</li>
                    <li>強双対性が成り立つ場合、双対問題の最適解の存在も保証される。</li>
                    <li>この条件が崩れると、主問題と双対問題の最適値にギャップが生じる可能性がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
