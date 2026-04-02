import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExponentialFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                実解析において最も重要な関数の一つである指数関数 <InlineMath math="e^x" /> を、複素数領域へと拡張します。
                複素指数関数は、これまでに学んだ「極形式」と「オイラーの公式」を結びつける、複素解析の基石となる関数です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素指数関数の定義</h2>

            <p>
                複素数 <InlineMath math="z = x + iy" /> に対して、指数関数 <InlineMath math="e^z" /> を次のように定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (複素指数関数)">
                <p>
                    複素数 <InlineMath math="z = x + iy" /> に対して、複素指数関数 <InlineMath math="\exp(z)" /> または <InlineMath math="e^z" /> を次のように定める：
                    <BlockMath math="e^z = e^x(\cos y + i \sin y)" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="べき級数による定義">
                <p>
                    複素指数関数は、実関数のマクローリン展開を複素数へと拡張した次の<strong>べき級数</strong>によって定義することもできる：
                    <BlockMath math="e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots" />
                </p>
                <p className="mt-2 text-sm">
                    この級数は、すべての複素数 <InlineMath math="z" /> に対して絶対収束するため、これを用いて指数関数を定義しても数学的な不整合は生じない。
                </p>
            </ContentBox>

            <p>
                この定義は、実数領域での指数関数 <InlineMath math="e^x" /> の性質を引き継ぎつつ、オイラーの公式 <InlineMath math="e^{iy} = \cos y + i \sin y" /> と整合するように構成されています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な性質</h2>

            <ContentBox type="proposition" title="Proposition 3.1-1 (指数法則と正則性)">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>指数法則</strong>：任意の <InlineMath math="z_1, z_2 \in \mathbb{C}" /> に対して <InlineMath math="e^{z_1} e^{z_2} = e^{z_1 + z_2}" /> が成り立つ。</li>
                    <li><strong>非ゼロ性</strong>：すべての <InlineMath math="z \in \mathbb{C}" /> に対して <InlineMath math="e^z \neq 0" /> である。</li>
                    <li><strong>正則性</strong>：<InlineMath math="e^z" /> は複素平面全域で正則であり、<InlineMath math="(e^z)' = e^z" /> を満たす。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (正則性と導関数)">
                <p>
                    複素指数関数 <InlineMath math="f(z) = e^z = e^x(\cos y + i \sin y)" /> を実部と虚部に分けると：
                    <BlockMath math="u(x, y) = e^x \cos y, \quad v(x, y) = e^x \sin y" />
                </p>
                <p>
                    まず、コーシー・リーマンの方程式を満たすことを確認する：
                    <BlockMath math="\begin{aligned} \frac{\partial u}{\partial x} &= e^x \cos y, & \frac{\partial v}{\partial y} &= e^x \cos y \\ \frac{\partial u}{\partial y} &= -e^x \sin y, & \frac{\partial v}{\partial x} &= e^x \sin y \end{aligned}" />
                    これより、<InlineMath math="u_x = v_y" /> および <InlineMath math="u_y = -v_x" /> がすべての点 <InlineMath math="(x, y)" /> で成り立つ。
                    また、これらの偏導関数は全域で連続であるため、<InlineMath math="e^z" /> は複素平面全域で正則（整関数）である。
                </p>
                <p>
                    次に、導関数 <InlineMath math="f'(z)" /> を計算すると：
                    <BlockMath math="\begin{aligned} f'(z) &= \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} \\ &= e^x \cos y + i e^x \sin y \\ &= e^x(\cos y + i \sin y) = e^z \end{aligned}" />
                    となり、実指数の場合と同様に <InlineMath math="(e^z)' = e^z" /> が成立することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">周期性と写像としての性質</h2>

            <p>
                実関数 <InlineMath math="e^x" /> にはない、複素指数関数に特有の性質が<strong>周期性</strong>です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (周期性)">
                <p>
                    複素指数関数 <InlineMath math="e^z" /> は虚軸方向に周期 <InlineMath math="2\pi i" /> を持つ。すなわち、任意の <InlineMath math="z \in \mathbb{C}" /> に対して次が成り立つ：
                    <BlockMath math="e^{z + 2\pi i} = e^z" />
                </p>
            </ContentBox>

            <p>
                この周期性により、複素平面全体を <InlineMath math="e^z" /> で写すと、幅 <InlineMath math="2\pi" /> の水平な帯状領域が複素平面全体（原点を除く）に重ねて写されることになります。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (領域の像)">
                <p>
                    領域 <InlineMath math="S = \{ z = x + iy \mid 0 \le y < \pi \}" /> が <InlineMath math="w = e^z" /> によってどのような集合に写されるか答えよ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    <InlineMath math="w = e^x e^{iy}" /> より、
                    <ul className="list-disc list-inside mt-2">
                        <li><InlineMath math="0 \le y < \pi" /> は、像の偏角 <InlineMath math="\arg w" /> が <InlineMath math="0" /> 以上 <InlineMath math="\pi" /> 未満であることを意味する。</li>
                        <li><InlineMath math="x" /> が実数全体を動くとき、絶対値 <InlineMath math="|w| = e^x" /> は <InlineMath math="(0, \infty)" /> 全体を動く。</li>
                    </ul>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                        したがって、像は<strong>複素平面の上半平面</strong>（虚部が正の領域、および正の実軸の一部）になります。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定義</strong>：<InlineMath math="e^z = e^x(\cos y + i \sin y)" />。オイラーの公式を内包する。</li>
                    <li><strong>整関数</strong>：複素平面の全域で微分可能であり、自身の形を保つ。</li>
                    <li><strong>周期性</strong>：<InlineMath math="2\pi i" /> の周期を持ち、一価関数でありながら「多くの点から一つの点へ」写る性質を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
