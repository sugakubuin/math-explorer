import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DeMoivreAndRoots() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素数の積が「偏角の和」になるという性質は、同じ複素数を何度も掛ける「累乗」の計算において非常に強力な威力を発揮します。
                ここでは、複素数の <InlineMath math="n" /> 乗に関する重要な定理と、その逆操作である <InlineMath math="n" /> 乗根の幾何学的配置について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ド・モアブルの定理</h2>

            <p>
                極形式の積の性質を <InlineMath math="n" /> 回繰り返すことで、次の定理が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (ド・モアブルの定理)">
                <p>
                    任意の整数 <InlineMath math="n" /> に対して、次の等式が成り立つ：
                    <BlockMath math="(\cos \theta + i \sin \theta)^n = \cos n\theta + i \sin n\theta" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="n" /> が正の整数の場合について、数学的帰納法で示す。
                </p>
                <ul className="list-inside space-y-2">
                    <li>
                        <InlineMath math="n=1" /> のとき：
                        <InlineMath math="\text{LHS} = (\cos \theta + i \sin \theta)^1 = \cos \theta + i \sin \theta = \text{RHS}" /> となり成立する。
                    </li>
                    <li>
                        <InlineMath math="n=k" /> での成立を仮定すると、<InlineMath math="n=k+1" /> のとき：
                        <BlockMath math="\begin{aligned} &(\cos \theta + i \sin \theta)^{k+1} \\ &= (\cos \theta + i \sin \theta)^k (\cos \theta + i \sin \theta) \\ &= (\cos k\theta + i \sin k\theta) (\cos \theta + i \sin \theta) \quad (\text{仮定より}) \\ &= (\cos k\theta \cos \theta - \sin k\theta \sin \theta) \\ &\quad + i(\sin k\theta \cos \theta + \cos k\theta \sin \theta) \\ &= \cos(k+1)\theta + i\sin(k+1)\theta \quad (\text{加法定理より}) \end{aligned}" />
                    </li>
                </ul>
                <p className="mt-4">
                    よって、すべての正の整数 <InlineMath math="n" /> について成り立つ。
                    <InlineMath math="n=0" /> のときは両辺ともに <InlineMath math="1" /> となり成立し、
                    負の整数については <InlineMath math="n = -m" /> （<InlineMath math="m > 0" />）とおくことで、同様に加法定理を用いて示すことができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="オイラーの公式との関係">
                <p>
                    後に詳しく学ぶ<strong>オイラーの公式</strong> <InlineMath math="e^{i\theta} = \cos \theta + i \sin \theta" /> を認めれば、この定理は指数法則
                    <BlockMath math="(e^{i\theta})^n = e^{in\theta}" />
                    として自明なものになります。以降、複素数の計算を簡潔にするために <InlineMath math="z = re^{i\theta}" /> という表記を積極的に用いていきます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (高次累乗の計算)">
                <p>
                    <InlineMath math="(\cos 15^\circ + i \sin 15^\circ)^{12}" /> を計算せよ。
                </p>
                <p>
                    ド・モアブルの定理より、
                    <BlockMath math="\begin{aligned} (\cos 15^\circ + i \sin 15^\circ)^{12} &= \cos(12 \times 15^\circ) + i \sin(12 \times 15^\circ) \\ &= \cos 180^\circ + i \sin 180^\circ \\ &= -1 \end{aligned}" />
                    となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素数の n 乗根</h2>

            <p>
                実数の範囲では、1 の 3 乗根は 1 だけでしたが、複素数の範囲では、 <InlineMath math="n" /> 次方程式は常に <InlineMath math="n" /> 個の解を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-2 (n 乗根とその配置)">
                <p>
                    <InlineMath math="z = re^{i\theta}" /> （ <InlineMath math="z \neq 0" /> ）の <InlineMath math="n" /> 乗根、すなわち方程式 <InlineMath math="w^n = z" /> の解はちょうど <InlineMath math="n" /> 個存在し、次のように与えられる：
                    <BlockMath math="w_k = r^{1/n} \exp\left( i \frac{\theta + 2\pi k}{n} \right) \quad (k = 0, 1, \dots, n-1)" />
                </p>
                <p className="mt-4">
                    <strong>幾何学的特徴</strong>：
                    これらの解 <InlineMath math="w_k" /> は、複素平面上において、半径 <InlineMath math="r^{1/n}" /> の円に内接する<strong>正 n 角形</strong>の頂点に配置される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    方程式を解くために、求める複素数を <InlineMath math="w = R e^{i\phi}" /> （<InlineMath math="R > 0" />）とおく。
                    ド・モアブルの定理より、
                    <BlockMath math="w^n = (R e^{i\phi})^n = R^n e^{in\phi}" />
                    これが <InlineMath math="z = r e^{i\theta}" /> と一致することから、
                    <BlockMath math="R^n = r, \quad n\phi = \theta + 2\pi k \quad (k \in \mathbb{Z})" />
                    を得る。これより、
                    <BlockMath math="R = r^{1/n}, \quad \phi = \frac{\theta + 2\pi k}{n}" />
                    となる。<InlineMath math="k" /> が <InlineMath math="0" /> から <InlineMath math="n-1" /> までの範囲で異なる <InlineMath math="n" /> 個の複素数が得られ、<InlineMath math="k=n" /> 以降はこれらが繰り返される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (16 の 4 乗根)">
                <p>
                    方程式 <InlineMath math="w^4 = -16" /> を解け。
                </p>
                <p>
                    -16 を極形式で表すと <InlineMath math="-16 = 16e^{i\pi}" /> である。したがって <InlineMath math="n=4, \, r=16, \, \theta=\pi" /> として公式を適用すると：
                    <BlockMath math="w_k = 16^{1/4} \exp\left( i \frac{\pi + 2\pi k}{4} \right) = 2 \exp\left( i \frac{\pi + 2\pi k}{4} \right)" />
                    <InlineMath math="k = 0, 1, 2, 3" /> を代入すると：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="w_0 = 2e^{i\pi/4} = \sqrt{2} + \sqrt{2}i" /></li>
                    <li><InlineMath math="w_1 = 2e^{i3\pi/4} = -\sqrt{2} + \sqrt{2}i" /></li>
                    <li><InlineMath math="w_2 = 2e^{i5\pi/4} = -\sqrt{2} - \sqrt{2}i" /></li>
                    <li><InlineMath math="w_3 = 2e^{i7\pi/4} = \sqrt{2} - \sqrt{2}i" /></li>
                </ul>
                <p className="mt-2">
                    これらは原点中心、半径 2 の円に内接し、各辺が軸と <InlineMath math="45^\circ" /> 傾いた正方形の頂点になっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ド・モアブルの定理</strong>：極形式の <InlineMath math="n" /> 乗において、角度が <InlineMath math="n" /> 倍になる。累乗計算の強力な武器。</li>
                    <li><strong>n 乗根の多価性</strong>：複素数の <InlineMath math="n" /> 乗根は常に <InlineMath math="n" /> 個存在する。</li>
                    <li><strong>正 n 角形の配置</strong>： <InlineMath math="n" /> 乗根を複素平面上に並べると、美しい対称性を持った正 <InlineMath math="n" /> 角形が現れる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
