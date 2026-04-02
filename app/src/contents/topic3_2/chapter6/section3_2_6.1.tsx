import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaurentExpansion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で学んだテイラー展開は、関数が点 <InlineMath math="z_0" /> で正則であることを前提としていました。
                しかし、物理学や工学で現れる多くの関数は、特定の点（特異点）で定義されなかったり、発散したりします。
                このような特異点の周りでの振る舞いを記述するために、テイラー展開を「負の次数」まで拡張した <strong>ローラン展開</strong> を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ローラン展開</h2>

            <p>
                テイラー展開が「円板」領域で定義されるのに対し、ローラン展開は特異点を避けた <strong>円環領域（アニュラス）</strong> で定義されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (ローラン展開定理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が円環領域 <InlineMath math="A = \{z \mid r < |z - z_0| < R\}" /> で正則であるとする。
                    このとき <InlineMath math="f(z)" /> は <InlineMath math="A" /> 内で次のように一意に冪級数展開できる。
                </p>
                <BlockMath math="f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n" />
                <p>
                    係数 <InlineMath math="c_n" /> は、円環内の任意の正向きの単純閉曲線 <InlineMath math="\gamma" /> に対して次で与えられる。
                </p>
                <BlockMath math="c_n = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{(z - z_0)^{n+1}} dz" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    円環内の点 <InlineMath math="z" /> を、内側の円 <InlineMath math="C_r" /> と外側の円 <InlineMath math="C_R" /> で挟まれた領域で考える。
                    コーシーの積分公式を多重連結領域に適用すると、
                </p>
                <BlockMath math="f(z) = \frac{1}{2\pi i} \oint_{C_R} \frac{f(w)}{w - z} dw - \frac{1}{2\pi i} \oint_{C_r} \frac{f(w)}{w - z} dw" />
                <p>
                    外側の積分（第1項）は、テイラー展開と同様に <InlineMath math="1/(w-z)" /> を <InlineMath math="(z-z_0)/(w-z_0)" /> の冪級数として展開することで、正の次数の項が得られる。
                    一方、内側の積分（第2項）は、 <InlineMath math="1/(w-z)" /> を <InlineMath math="(w-z_0)/(z-z_0)" /> の冪級数として展開する。
                    これにより、 <InlineMath math="z-z_0" /> の負の次数の項が現れる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">主要部と正則部</h2>

            <p>
                ローラン展開は、正の次数部分と負の次数部分に分けて解釈されます。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (主要部と正則部)">
                <p>
                    ローラン展開 <InlineMath math="\sum_{n=-\infty}^{\infty} c_n (z - z_0)^n" /> において、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="n \geq 0" /> の部分 <InlineMath math="\sum_{n=0}^{\infty} c_n (z - z_0)^n" /> を <strong>正則部（テイラー部分）</strong> という。
                    </li>
                    <li>
                        <InlineMath math="n < 0" /> の部分 <InlineMath math="\sum_{n=1}^{\infty} \frac{c_{-n}}{(z - z_0)^n}" /> を <strong>主要部（特異部）</strong> という。
                    </li>
                </ul>
            </ContentBox>

            <p>
                主要部は、関数が特異点 <InlineMath math="z_0" /> でどれほど激しく発散するかを表す「特異性の正体」と言えます。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (ローラン展開の計算)">
                <p>
                    関数 <InlineMath math="f(z) = \frac{e^z}{z^2}" /> を <InlineMath math="z = 0" /> の周りでローラン展開せよ。
                </p>
                <p>
                    <strong>解答：</strong> <InlineMath math="e^z" /> のテイラー展開を代入する。
                </p>
                <BlockMath math="\begin{aligned} \frac{e^z}{z^2} &= \frac{1}{z^2} \left( 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots \right) \\ &= \frac{1}{z^2} + \frac{1}{z} + \frac{1}{2} + \frac{z}{6} + \dots \end{aligned}" />
                <p>
                    この展開の主要部は <InlineMath math="\frac{1}{z^2} + \frac{1}{z}" /> であり、正則部は <InlineMath math="\frac{1}{2} + \frac{z}{6} + \dots" /> である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則領域に「穴」がある場合、テイラー展開の代わりにローラン展開を用いる。</li>
                    <li>ローラン展開は負の次数の項（主要部）を含み、特異点での挙動を記述する。</li>
                    <li>主要部がどうなっているかで、次節の特異点の分類が決まる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
