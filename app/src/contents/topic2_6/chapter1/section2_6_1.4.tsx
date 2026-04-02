import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BernoulliAndRiccatiEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                世の中の現象の多くは「非線形」ですが、その中には巧妙な変数変換によって 1 階線形方程式に帰着させることができる非常に幸運なパターンがいくつか存在します。
                本節では、特に有名な<strong>ベルヌーイ型</strong>と<strong>リッカティ型</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベルヌーイ方程式</h2>

            <p>
                1 階線形方程式に <InlineMath math="y^n" /> という非線形項が加わった形を考えます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (ベルヌーイ方程式)">
                <p>
                    次の形の方程式を<strong>ベルヌーイ (Bernoulli) 方程式</strong>と呼ぶ：
                    <BlockMath math="\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)" />
                </p>
                <p className="mt-4">
                    ※ <InlineMath math="n=0, 1" /> の場合はすでに学んだ 1 階線形方程式そのものです。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ベルヌーイ型の線形化)">
                <p>
                    ベルヌーイ方程式において <strong><InlineMath math="v = y^{1-n}" /></strong> と置くと、
                    <InlineMath math="v" /> に関する 1 階線形方程式：
                    <BlockMath math="\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)" />
                    に帰着できる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    両辺を <InlineMath math="y^n" /> で割ると <InlineMath math="y^{-n}y' + Py^{1-n} = Q" /> となる。
                    <InlineMath math="v = y^{1-n}" /> と置くと、合成関数の微分より 
                    <InlineMath math="\frac{dv}{dx} = (1-n)y^{-n}\frac{dy}{dx}" /> 。
                    したがって <InlineMath math="y^{-n}y' = \frac{1}{1-n}v'" /> を代入すると
                    <BlockMath math="\frac{1}{1-n}v' + Pv = Q \implies v' + (1-n)Pv = (1-n)Q" />
                    となり、線形化される。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (ベルヌーイ型：ロジスティック方程式)">
                <p>
                    <strong>問題：</strong> 次の方程式を解け（ <InlineMath math="r, K" /> は定数）。
                    <BlockMath math="\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：ベルヌーイ型への変形</strong>
                        <br />
                        展開すると <InlineMath math="\frac{dP}{dt} - rP = -\frac{r}{K}P^2" /> となり、 <InlineMath math="n=2" /> のベルヌーイ型である。
                    </p>
                    <p>
                        <strong>ステップ 2：変数変換</strong>
                        <br />
                        <InlineMath math="v = P^{1-2} = P^{-1}" /> と置く。このとき <InlineMath math="\frac{dv}{dt} = -P^{-2}\frac{dP}{dt}" /> である。
                        方程式の両辺を <InlineMath math="-P^2" /> で割ると：
                        <BlockMath math="-P^{-2}\frac{dP}{dt} + rP^{-1} = \frac{r}{K} \implies \frac{dv}{dt} + rv = \frac{r}{K}" />
                    </p>
                    <p>
                        <strong>ステップ 3：線形方程式の求解</strong>
                        <br />
                        積分因子 <InlineMath math="e^{rt}" /> を用いて解くと：
                        <BlockMath math="v(t) = \frac{1}{K} + Ce^{-rt}" />
                        元に戻すと <InlineMath math="P(t) = \frac{1}{\frac{1}{K} + Ce^{-rt}} = \frac{K}{1 + CKe^{-rt}}" /> となる。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (リッカティ方程式の線形化)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y' = x^3 + \frac{2}{x}y - \frac{1}{x}y^2" /> において、特殊解 <InlineMath math="y_1 = x^2" /> が既知であるとき、一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>解法の手順：</strong>
                        <br />
                        <InlineMath math="y = x^2 + \frac{1}{v}" /> と置くと、 <InlineMath math="y' = 2x - \frac{v'}{v^2}" /> 。これを代入して整理すると：
                        <BlockMath math="\frac{dv}{dx} + \frac{1}{x}(2-2)v = \frac{1}{x} \implies \frac{dv}{dx} = \frac{1}{x}" />
                        これを積分して <InlineMath math="v = \ln |x| + C" /> を得るので、一般解は：
                        <BlockMath math="y = x^2 + \frac{1}{\ln |x| + C}" />
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リッカティ方程式</h2>

            <p>
                さらに一般に、 <InlineMath math="y^2" /> の項まで含む多項式形式の方程式も、特殊解が一つ判明していれば線形化可能です。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (リッカティ方程式)">
                <p>
                    次の形の方程式を<strong>リッカティ (Riccati) 方程式</strong>と呼ぶ：
                    <BlockMath math="\frac{dy}{dx} = P(x) + Q(x)y + R(x)y^2" />
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.4-2 (リッカティ型の線形化)">
                <p>
                    リッカティ方程式の特殊解 <InlineMath math="y_1(x)" /> が一つ既知であるとき、
                    <strong><InlineMath math="y = y_1 + \frac{1}{v}" /></strong> と置くと、 
                    <InlineMath math="v" /> に関する 1 階線形方程式が得られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = y_1 + v^{-1}" /> を微分すると <InlineMath math="y' = y_1' - v^{-2}v'" /> である。これを方程式 <InlineMath math="y' = P + Qy + Ry^2" /> に代入すると
                    <BlockMath math="y_1' - v^{-2}v' = P + Q(y_1 + v^{-1}) + R(y_1 + v^{-1})^2" />
                    右辺を展開して整理すると
                    <BlockMath math="y_1' - v^{-2}v' = (P + Qy_1 + Ry_1^2) + (Q + 2Ry_1)v^{-1} + Rv^{-2}" />
                    <InlineMath math="y_1" /> は特殊解なので <InlineMath math="y_1' = P + Qy_1 + Ry_1^2" /> を満たす。したがって両辺から消去でき、
                    <BlockMath math="-v^{-2}v' = (Q + 2Ry_1)v^{-1} + Rv^{-2}" />
                    両辺に <InlineMath math="-v^2" /> を掛けると
                    <BlockMath math="v' + (Q + 2Ry_1)v = -R" />
                    となり、 <InlineMath math="v" /> に関する 1 階線形方程式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="リッカティ型の重要性">
                <p>
                    一見すると特殊解が必要なため不便に見えますが、リッカティ方程式は 2 階線形方程式とも深い関わりを持っており、
                    現代制御理論（最適な入力の決定）などで非常に重要な役割を果たしています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ベルヌーイ型</strong>： <InlineMath math="y^n" /> を含む。 <InlineMath math="v = y^{1-n}" /> の置換で線形化。</li>
                    <li><strong>非線形現象の記述</strong>： ロジスティック方程式など、現実世界の複雑なバランスをモデル化できる。</li>
                    <li><strong>リッカティ型</strong>： <InlineMath math="y^2" /> を含む。特殊解を 1 つ見つけることが突破口になる。</li>
                    <li><strong>共通思想</strong>： 「扱いやすい線形の世界」へ持ち込むための橋渡し（変数変換）の重要性。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
