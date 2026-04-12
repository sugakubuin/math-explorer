import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MintyTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、極大単調作用素の全射性を保証する重要な結果である<b>ミンティの定理（Minty's Theorem）</b>と、その凸最適化への応用について解説します。
                前節で学んだ極大単調性と組み合わせることで、最適化問題における解の存在定理を導くことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ミンティの定理</h2>

            <p>
                単調作用素が極大であり、かつ無限遠で十分に成長する（強制的である）ならば、任意の値域を持つという強力な結果が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ミンティの定理（有限次元版）)">
                <p>
                    <InlineMath math="T" /> が <InlineMath math="\mathbb{R}^n" /> 上の極大単調作用素であり、<b>強制的（coercive）</b>である、すなわち
                </p>
                <BlockMath math="\lim_{\|x\| \to \infty} \frac{\langle y, x \rangle}{\|x\|} = \infty \quad (y \in T(x))" />
                <p>
                    を満たすならば、<InlineMath math="T" /> は全射である。すなわち、任意の <InlineMath math="b \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="b \in T(x)" />
                <p>
                    を満たす <InlineMath math="x \in \mathbb{R}^n" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の核心を述べる。<InlineMath math="\mathbb{R}^n" /> の有限次元性を用いて Brouwer の不動点定理を適用する。
                    まず、<InlineMath math="T" /> のレゾルベント <InlineMath math="J_\lambda = (I + \lambda T)^{-1}" /> を用い、ヨシダ近似（Yosida approximation） <InlineMath math="T_\lambda = \frac{I - J_\lambda}{\lambda}" /> を導入する。
                    <InlineMath math="T_\lambda" /> はリプシッツ連続な単調作用素であり、近似方程式 <InlineMath math="b = T_\lambda(x_\lambda)" /> の解の存在が不動点定理によって保証される。
                    強制性の仮定から解の列 <InlineMath math="\{x_\lambda\}" /> が有界であることが従い、<InlineMath math="\lambda \to 0" /> で極限を取ることで、極大単調性により極限 <InlineMath math="x" /> が <InlineMath math="b \in T(x)" /> を満たすことが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、極大単調作用素に対する方程式の解の存在を保証する強力なツールです。
            </p>

            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    <InlineMath math="f(x) = \frac{1}{2}\|x\|^2 + \|x\|_1" /> とし、その劣微分 <InlineMath math="T = \partial f" /> を考える。
                    この関数は強制的であるため、<InlineMath math="T" /> も強制的である。
                    <InlineMath math="b = 0" /> に対する方程式 <InlineMath math="0 \in T(x)" /> を解く。
                    <InlineMath math="\partial f(0) = \{0\} + [-1, 1]^n = [-1, 1]^n" /> であり、<InlineMath math="0 \in \partial f(0)" /> が成り立つ。
                    したがって、<InlineMath math="x = 0" /> が解として存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸最適化への応用</h2>

            <p>
                ミンティの定理を凸関数の劣微分に適用することで、最適化問題における最小値の存在を導くことができます。
            </p>

            <ContentBox type="theorem" title="Corollary 6.3-1">
                <p>
                    <InlineMath math="f" /> が閉真凸関数であり、<InlineMath math="\|x\| \to \infty" /> のとき <InlineMath math="f(x) \to \infty" /> を満たす（強制的である）ならば、<InlineMath math="f" /> は <InlineMath math="\mathbb{R}^n" /> 上で最小値を達成する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が強制的であるとき、その劣微分 <InlineMath math="\partial f" /> も強制的となる。
                    Theorem 6.2-1 (ロカフェラーの定理) より <InlineMath math="\partial f" /> は極大単調作用素であるから、Theorem 6.3-1 (ミンティの定理) より <InlineMath math="\partial f" /> は全射である。
                    したがって、ある <InlineMath math="x^* \in \mathbb{R}^n" /> が存在して <InlineMath math="0 \in \partial f(x^*)" /> が成り立つ。
                    フェルマの規則 (Theorem 3.5-1) により、これは <InlineMath math="x^*" /> が <InlineMath math="f" /> の最小点であることを意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この系により、強制的な凸関数については、必ず最小解が存在することが保証されます。
            </p>

            <ContentBox type="example" title="Example 6.3-2">
                <p>
                    関数 <InlineMath math="f(x) = \|x\|_1 + \frac{1}{2}\|x - a\|^2" /> は、<InlineMath math="\|x\| \to \infty" /> で <InlineMath math="f(x) \to \infty" /> となるため強制的であり、かつ閉真凸関数である。
                    したがって Corollary 6.3-1 により最小値を持つ。
                    実際、この最小値を与える <InlineMath math="x^*" /> は軟閾値作用素（soft-thresholding operator）として知られ、<InlineMath math="x^* = \mathrm{prox}_{\|\cdot\|_1}(a)" /> と明示的に計算できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="関数解析への拡張">
                <p>
                    ミンティの定理の無限次元版は、関数解析（4-1）で扱うバナッハ空間上の非線形作用素の理論へと接続します。
                    有限次元では Brouwer の不動点定理を用いましたが、無限次元空間では弱位相や単調性を駆使したより高度な手法が必要となります。
                    また、この定理は変分不等式（variational inequalities）の解の存在定理の基礎としても極めて重要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ミンティの定理により、強制的な極大単調作用素は全射であることが保証される。</li>
                    <li>強制的な閉真凸関数は、ミンティの定理とフェルマの規則により、必ず最小値を達成する。</li>
                    <li>この理論は、最適化問題の解の存在証明や、無限次元の関数解析における非線形方程式論の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
