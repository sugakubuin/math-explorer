import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexRoots() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分方程式の特性方程式は実数係数の多項式ですが、その解（根）が実数であるとは限りません。
                判別式が負になる場合など、解が<strong>複素共役根</strong>として現れることがあります。
                この場合、数学的には複素指数関数を用いるのが自然ですが、実用上は<strong>オイラーの公式</strong>を用いて実数関数（三角関数）の形で表現することが一般的です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素根の実数形表示</h2>

            <p>
                複素数の解から、実数の基本解系を取り出す規則を学びます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (複素共役根に対する基本解)">
                <p>
                    特性方程式 <InlineMath math="P(\lambda) = 0" /> が複素共役根 <InlineMath math="\alpha \pm \beta i \ (\beta > 0)" /> を持つとき、
                    次のように指数関数と三角関数の積で表される 2 つの関数
                    <BlockMath math="e^{\alpha x} \cos \beta x, \quad e^{\alpha x} \sin \beta x" />
                    は、この方程式の一次独立な実数解（基本解）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 4.1-1 より、複素指数関数 <InlineMath math="y_1 = e^{(\alpha + \beta i)x}" /> と <InlineMath math="y_2 = e^{(\alpha - \beta i)x}" /> は解である。
                    オイラーの公式 <InlineMath math="e^{i\theta} = \cos \theta + i \sin \theta" /> を用いると：
                    <BlockMath math="\begin{aligned} y_1 &= e^{\alpha x} (\cos \beta x + i \sin \beta x) \\ y_2 &= e^{\alpha x} (\cos \beta x - i \sin \beta x) \end{aligned}" />
                    解の線形結合もまた解である（重ね合わせの原理）ため、
                    <BlockMath math="\frac{y_1 + y_2}{2} = e^{\alpha x} \cos \beta x, \quad \frac{y_1 - y_2}{2i} = e^{\alpha x} \sin \beta x" />
                    も解となる。これらは実数関数であり、ロンスキアンを計算すると <InlineMath math="W = \beta e^{2\alpha x} \neq 0" /> となるため一次独立である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="物理的解釈：減衰振動">
                <p>
                    このタイプの解は、時間とともに振幅が変化しながら周期的に変動する<strong>振動現象</strong>を記述します。
                    実部 <InlineMath math="\alpha" /> が負であれば振幅が減少する（減衰振動）、 <InlineMath math="\alpha = 0" /> であれば一定の振幅で続く（単振動）ことに対応します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">例題と複素重根</h2>

            <ContentBox type="example" title="Example 4.3-1 (2 階方程式の複素根)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y'' + 2y' + 5y = 0" /> の一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：特性方程式</strong>
                        <br />
                        <InlineMath math="\lambda^2 + 2\lambda + 5 = 0" /> を解くと、 <InlineMath math="\lambda = \frac{-2 \pm \sqrt{4 - 20}}{2} = -1 \pm 2i" /> 。
                        ここで <InlineMath math="\alpha = -1, \beta = 2" /> である。
                    </p>
                    <p>
                        <strong>ステップ 2：一般解の構成</strong>
                        <br />
                        基本解系は <InlineMath math="\{e^{-x} \cos 2x, e^{-x} \sin 2x\}" /> である。一般解は
                        <BlockMath math="y = e^{-x} (c_1 \cos 2x + c_2 \sin 2x)" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.3-2 (複素重根の場合)">
                <p>
                    複素根 <InlineMath math="\alpha \pm \beta i" /> が <InlineMath math="m" /> 重根であるときは、
                    実数根の重根の場合と同様に <InlineMath math="x" /> のべき乗を掛けていき、
                    <BlockMath math="x^k e^{\alpha x} \cos \beta x, \quad x^k e^{\alpha x} \sin \beta x \quad (k = 0, 1, \dots, m-1)" />
                    の合計 <InlineMath math="2m" /> 個を基本解として採用する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 4.2-1 より、複素数係数の範囲では、重複度 <InlineMath math="m" /> の複素根 <InlineMath math="\lambda = \alpha + \beta i" /> に随伴する解は <InlineMath math="x^k e^{(\alpha + \beta i)x} \ (k < m)" /> である。
                    その複素共役な根 <InlineMath math="\bar{\lambda} = \alpha - \beta i" /> に対しても、同様に <InlineMath math="x^k e^{(\alpha - \beta i)x}" /> が解となる。
                    これらは重ね合わせの原理により、
                    <BlockMath math="\begin{aligned} \frac{x^k e^{\lambda x} + x^k e^{\bar{\lambda} x}}{2} &= x^k e^{\alpha x} \cos \beta x, \\ \frac{x^k e^{\lambda x} - x^k e^{\bar{\lambda} x}}{2i} &= x^k e^{\alpha x} \sin \beta x \end{aligned}" />
                    と実数化できる。これら合計 <InlineMath math="2m" /> 個の関数セットは、特性根の独立性から一次独立であることが保証される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>複素根の処理</strong>： オイラーの公式を用いて、複素指数関数を実数の「指数関数 <InlineMath math="\times" /> 三角関数」に変換する。</li>
                    <li><strong>振動の表現</strong>： 複素根は物理的には振動（単振動や減衰振動）を表す。</li>
                    <li><strong>共役性の利用</strong>： 係数が実数なら複素根は必ずペア（共役）で現れるため、常に実数解のセットを作ることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
