import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FrobeniusMethodProcedures() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                確定特異点を持つ微分方程式に対して、一般的に解を構成する手法が「フロベニウス法」です。
                前節で求めた指標の差に応じて、解の形は 3 つの大きなケースに分類されます。特に、2 つの解の独立性を保つために対数項が必要になる場合がある点が非常に重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指標の差によるケース分類</h2>

            <p>
                確定特異点において、解を <InlineMath math="y = x^\rho \sum a_n x^n" /> の形で求めるフロベニウス法の一般論は、以下の定理に要約されます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (フロベニウスの定理)">
                <p>
                    確定特異点 <InlineMath math="x_0 = 0" /> を持つ微分方程式において、指標方程式の 2 つの解を <InlineMath math="\rho_1 \geq \rho_2" /> とする。
                    このとき、少なくとも 1 つの解は
                    <BlockMath math="y_1(x) = x^{\rho_1} \sum_{n=0}^\infty a_n x^n \quad (a_0 \neq 0)" />
                    の形で構成できる。もう 1 つの線形独立な解の形は、指標の差 <InlineMath math="\rho_1 - \rho_2" /> に依存する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><b>ケース I: <InlineMath math="\rho_1 - \rho_2" /> が非負整数でないとき</b>
                        <br />2 つ目の解も同様の形で <InlineMath math="y_2(x) = x^{\rho_2} \sum b_n x^n" /> となる。
                    </li>
                    <li><b>ケース II: <InlineMath math="\rho_1 = \rho_2" /> のとき</b>
                        <br />2 つ目の解には必ず対数項が現れ、<InlineMath math="y_2(x) = y_1(x) \ln x + x^{\rho_1} \sum b_n x^n" /> となる。
                    </li>
                    <li><b>ケース III: <InlineMath math="\rho_1 - \rho_2" /> が正の整数のとき</b>
                        <br />2 つ目の解は <InlineMath math="y_2(x) = c y_1(x) \ln x + x^{\rho_2} \sum b_n x^n" /> の形になる（<InlineMath math="c" /> は 0 の場合もある）。
                    </li>
                </ul>
            </ContentBox>

            <p>
                なぜ対数項が必要になるのか、その理由を考えてみましょう。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = x^\rho \sum a_n x^n" /> を代入して漸化式を導出すると、分母に <InlineMath math="(\rho + n - \rho_1)(\rho + n - \rho_2)" /> のような項が含まれることになる。
                    <InlineMath math="\rho = \rho_1" /> を代入すれば常に解が得られる。
                    しかし、<InlineMath math="\rho_1 - \rho_2" /> が整数の場合、<InlineMath math="\rho_2" /> を代入して項を計算していく途中で分母が 0 になってしまうことがある。この困難を回避し、かつ解の独立性を保つために、<InlineMath math="\rho" /> を変数として扱い、<InlineMath math="\rho" /> に関する微分を考えることで対数項 <InlineMath math="\ln x" /> が現れる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                まずは、最も平易なケースを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (ケース I: 指標の差が整数でない場合)">
                <p>
                    次の方程式を考える。
                    <BlockMath math="2x y'' + y' + xy = 0" />
                    <InlineMath math="x=0" /> において <InlineMath math="xp(x) = 1/2, x^2 q(x) = x^2/2" /> より、<InlineMath math="p_0 = 1/2, q_0 = 0" /> である。
                    指標方程式は <InlineMath math="\rho(\rho-1) + \frac{1}{2}\rho = \rho^2 - \frac{1}{2}\rho = 0" /> で、<InlineMath math="\rho_1 = 1/2, \rho_2 = 0" /> となる。
                    差が <InlineMath math="1/2" /> で整数ではないため、それぞれの指標に対して単純なフロベニウス解が独立に構成される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">対数項が現れるケース</h2>

            <p>
                指標が重なる場合、あるいは差が整数の場合には注意が必要です。
            </p>

            <ContentBox type="example" title="Example 1.3-2 (ケース II: 指標が等しい場合)">
                <p>
                    オイラー方程式 <InlineMath math="x^2 y'' + xy' + \dots = 0" /> において指標が重なる、例えば次のケースを考える。
                    <BlockMath math="x^2 y'' + xy' - y = 0" />
                    指標方程式は <InlineMath math="\rho(\rho-1) + \rho - 1 = \rho^2 - 1 = 0" /> ではないが、例として <InlineMath math="\rho^2 = 0" /> になるようなケース（例えば <InlineMath math="x^2y'' + xy' = 0" />）を想定すると、<InlineMath math="y_1 = x^0 = 1" /> が解となる。
                    このとき、もう一つの独立な解は <InlineMath math="y_2 = \ln x" /> となり、対数項が必須であることがわかる（これは定数変化法によっても確認できる）。
                </p>
            </ContentBox>

            <p>
                差が正の整数のとき、対数項が必要になるかどうかは、漸化式を計算してみて「分母が 0 になる問題」が実際に発生するかどうかで決まります。
            </p>

            <ContentBox type="example" title="Example 1.3-3 (ケース III: 指標の差が正整数の場合)">
                <p>
                    次の方程式を考える。
                    <BlockMath math="x y'' + 2y' - xy = 0" />
                    指標方程式は <InlineMath math="\rho(\rho-1) + 2\rho = \rho(\rho+1) = 0" /> より、<InlineMath math="\rho = 0, -1" />（差は 1）となる。
                    詳細な計算を行うと、<InlineMath math="\rho_1 = 0" /> に対しては <InlineMath math="y_1 = \frac{\sinh x}{x}" /> という解が得られる。
                    <InlineMath math="\rho_2 = -1" /> の場合、計算の途中で対数項が現れる必要が生じ、<InlineMath math="y_2 = \frac{\cosh x}{x}" /> という形の解が得られる（この例ではたまたま <InlineMath math="c=0" /> となり対数項が隠れることもあるが、一般には対数項が含まれる）。
                </p>
            </ContentBox>

            <p>
                対数項が含まれる解は、実用上の境界条件において特別な意味を持つことがあります。
            </p>

            <ContentBox type="remark" title="対数項と物理的解釈">
                <p>
                    <InlineMath math="x \to 0" /> で対数項 <InlineMath math="\ln x" /> は発散します。
                    そのため、物理的な境界条件（例えば「原点で波の振幅が有限であること」など）を課す場合、対数項を含む解は不適な解として除外されるのが一般的です。
                    しかし、数学的に「一般解」を構成するためには、対数項を含む解は不可欠なピースとなります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>フロベニウスの定理</b>：確定特異点のまわりで解の形を分類する指針。</li>
                    <li><b>指標の差</b>：差が整数でない場合は単純。整数の場合は対数項を疑う。</li>
                    <li><b>対数項</b>：2 つの解の線形独立性を保つために導入される。原点で発散する性質を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
