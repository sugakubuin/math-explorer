import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TrigAndHyperbolic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素指数関数が定義されたことで、オイラーの公式を介して三角関数や双曲線関数を複素数へと拡張することが可能になります。
                複素数領域での三角関数は、実数領域では決して見られなかった不思議な振る舞いを見せます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素三角関数の定義</h2>

            <p>
                実数 <InlineMath math="\theta" /> に対して成立していた <InlineMath math="e^{i\theta} = \cos \theta + i \sin \theta" /> を基に、任意の複素数 <InlineMath math="z" /> に対して <InlineMath math="\sin z" /> と <InlineMath math="\cos z" /> を次のように定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (複素三角関数)">
                <p>
                    複素数 <InlineMath math="z \in \mathbb{C}" /> に対して、複素三角関数を次のように定める：
                    <BlockMath math="\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2}" />
                </p>
            </ContentBox>

            <ContentBox type="note" title="べき級数による定義">
                <p>
                    実関数のマクローリン展開に基づき、次のようなべき級数によって定義することもできる：
                    <BlockMath math="\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots" />
                    <BlockMath math="\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots" />
                </p>
            </ContentBox>

            <p>
                これらの関数は、<InlineMath math="e^z" /> の定数倍と和で構成されているため、複素平面全域で正則な<strong>整関数</strong>になります。<br />
                また、指数関数 <InlineMath math="e^z" /> が三角関数を用いて定義されていたため、指数関数を用いた定義では循環論法になっているのではと思うかもしれませんが、そんなことはありません。指数関数の定義に用いていたのは<strong>実数における三角関数</strong>であり、複素数における三角関数の定義とは独立しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">オイラーの公式</h2>

            <p>
                複素指数関数と複素三角関数を級数によって定義すると、複素数領域においても「オイラーの公式」が極めて自然に導かれます。
            </p>

            <ContentBox type="proof" title="Proof (級数定義によるオイラーの公式)">
                <p>
                    指数関数のべき級数定義に <InlineMath math="iz" /> を代入すると：
                    <BlockMath math="e^{iz} = \sum_{n=0}^{\infty} \frac{(iz)^n}{n!} = 1 + iz + \frac{(iz)^2}{2!} + \frac{(iz)^3}{3!} + \frac{(iz)^4}{4!} + \dots" />
                    <InlineMath math="i^2 = -1" /> を用いて実部と虚部に分けると：
                    <BlockMath math="e^{iz} = \left(1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \dots\right) + i\left(z - \frac{z^3}{3!} + \frac{z^5}{5!} - \dots\right)" />
                    括弧の中身はそれぞれ <InlineMath math="\cos z" /> と <InlineMath math="\sin z" /> の級数定義と一致するため、
                    <BlockMath math="e^{iz} = \cos z + i \sin z" />
                    が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="オイラーの等式">
                <p>
                    オイラーの公式において <InlineMath math="z = \pi" /> とすると、数学で最も美しいとされる<strong>オイラーの等式 (Euler's identity)</strong> が得られる：
                    <BlockMath math="e^{i\pi} + 1 = 0" />
                </p>
                <p className="mt-2">
                    この等式は、指数関数の底 <InlineMath math="e" />、円周率 <InlineMath math="\pi" />、虚数単位 <InlineMath math="i" />、そして基本数である <InlineMath math="0, 1" /> を結びつける驚異的な関係を示しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">公式の継承と「非有界性」</h2>

            <p>
                驚くべきことに、実数範囲で成り立っていた多くの三角関数の公式は、複素数範囲でもそのまま成立します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1 (基本公式の継承)">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ピタゴラスの基本公式</strong>：<InlineMath math="\sin^2 z + \cos^2 z = 1" /></li>
                    <li><strong>加法定理</strong>：<InlineMath math="\sin(z_1 + z_2) = \sin z_1 \cos z_2 + \cos z_1 \sin z_2" /> など</li>
                    <li><strong>微分公式</strong>：<InlineMath math="(\sin z)' = \cos z, \quad (\cos z)' = -\sin z" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    これらの公式はすべて指数関数による定義から導かれる。
                </p>
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>ピタゴラスの公式</strong>：
                        <BlockMath math="\begin{aligned} \cos^2 z + \sin^2 z &= \left(\frac{e^{iz} + e^{-iz}}{2}\right)^2 + \left(\frac{e^{iz} - e^{-iz}}{2i}\right)^2 \\ &= \frac{e^{2iz} + 2 + e^{-2iz}}{4} + \frac{e^{2iz} - 2 + e^{-2iz}}{-4} \\ &= \frac{4}{4} = 1 \end{aligned}" />
                    </li>
                    <li>
                        <strong>加法定理（sin）</strong>：
                        <BlockMath math="\begin{aligned} &\sin z_1 \cos z_2 + \cos z_1 \sin z_2 \\ &= \frac{e^{iz_1}-e^{-iz_1}}{2i} \cdot \frac{e^{iz_2}+e^{-iz_2}}{2} + \frac{e^{iz_1}+e^{-iz_1}}{2} \cdot \frac{e^{iz_2}-e^{-iz_2}}{2i} \\ &= \frac{e^{i(z_1+z_2)} + e^{i(z_1-z_2)} - e^{-i(z_1-z_2)} - e^{-i(z_1+z_2)}}{4i} \\ &\quad + \frac{e^{i(z_1+z_2)} - e^{i(z_1-z_2)} + e^{-i(z_1-z_2)} - e^{-i(z_1+z_2)}}{4i} \\ &= \frac{2(e^{i(z_1+z_2)} - e^{-i(z_1+z_2)})}{4i} = \sin(z_1+z_2) \end{aligned}" />
                    </li>
                    <li>
                        <strong>微分公式</strong>：
                        <InlineMath math="(e^{iz})' = i e^{iz}" /> および <InlineMath math="(e^{-iz})' = -i e^{-iz}" /> を用いると、
                        <BlockMath math="\begin{aligned} (\sin z)' &= \left(\frac{e^{iz} - e^{-iz}}{2i}\right)' = \frac{i e^{iz} - (-i e^{-iz})}{2i} \\ &= \frac{e^{iz} + e^{-iz}}{2} = \cos z \end{aligned}" />
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
                <strong>[実数との決定的な違い]</strong> <br />
                実数のとき、<InlineMath math="|\sin x| \le 1" /> や <InlineMath math="|\cos x| \le 1" /> という有界性がありましたが、複素三角関数は<strong>有界ではありません</strong>。
                例えば、虚軸上 <InlineMath math="z = iy" /> では <InlineMath math="|\sin iy| = |\frac{e^{-y} - e^y}{2i}| = |\sinh y|" /> となり、<InlineMath math="y \to \infty" /> で無限大に発散します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双曲線関数との関係</h2>

            <p>
                定義から明らかなように、複素三角関数と複素双曲線関数は、虚数単位 <InlineMath math="i" /> を介して密接に結びついています。
            </p>

            <ContentBox type="definition" title="Definition 3.2-2 (複素双曲線関数)">
                <p>
                    複素数 <InlineMath math="z \in \mathbb{C}" /> に対して、双曲線関数を次のように定める：
                    <BlockMath math="\sinh z = \frac{e^z - e^{-z}}{2}, \quad \cosh z = \frac{e^z + e^{-z}}{2}" />
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.2-1 (三角関数と双曲線関数の相互変換)">
                <p>
                    変数に <InlineMath math="i" /> を乗じることで、次の変換が成り立つ：
                    <BlockMath math="\begin{aligned} \sin(iz) &= i \sinh z, & \cos(iz) &= \cosh z \\ \sinh(iz) &= i \sin z, & \cosh(iz) &= \cos z \end{aligned}" />
                </p>
            </ContentBox>


            <ContentBox type="example" title="Example 3.2-1 (実部・虚部への分解)">
                <p>
                    <InlineMath math="\sin z" /> を実部と虚部に分解せよ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    <InlineMath math="z = x + iy" /> として加法定理を用いる：
                    <BlockMath math="\begin{aligned} \sin(x+iy) &= \sin x \cos(iy) + \cos x \sin(iy) \\ &= \sin x \cosh y + i \cos x \sinh y \end{aligned}" />
                    <p className="mt-2">
                        よって、実部は <InlineMath math="\sin x \cosh y" />、虚部は <InlineMath math="\cos x \sinh y" /> となる。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定義</strong>：指数関数を基に定義される。加法定理などの公式はそのまま使える。</li>
                    <li><strong>双曲線関数との関係</strong>：引数を虚数倍することで互いに行き来できる。</li>
                    <li><strong>非有界性</strong>：虚軸方向へ進むと値が無限に大きくなる。これは実解析との大きな違いである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
