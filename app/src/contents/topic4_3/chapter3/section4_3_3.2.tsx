import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassPFunctionProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で定義されたワイエルシュトラスの <InlineMath math="\wp" /> 関数について、その基本的な性質である偶関数性と二重周期性を確認します。これらの性質により、<InlineMath math="\wp" /> 関数が位数2の楕円関数であることがわかります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偶関数性と二重周期性</h2>

            <p>
                まずは <InlineMath math="\wp" /> 関数が偶関数であることを示します。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.2-1 (<InlineMath math="\wp" /> 関数の偶関数性)</span>}>
                <p>
                    ワイエルシュトラスの <InlineMath math="\wp" /> 関数は偶関数である。すなわち、
                </p>
                <BlockMath math="\wp(-z) = \wp(z)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\wp" /> 関数の定義式において、<InlineMath math="z" /> を <InlineMath math="-z" /> に置き換えると、
                </p>
                <BlockMath math="\wp(-z) = \frac{1}{(-z)^2} + \sum_{\omega \in \Lambda \setminus \{0\}} \left( \frac{1}{(-z-\omega)^2} - \frac{1}{\omega^2} \right)" />
                <p>
                    となります。ここで <InlineMath math="(-z-\omega)^2 = (z+\omega)^2" /> であり、格子 <InlineMath math="\Lambda" /> の対称性から <InlineMath math="\omega \mapsto -\omega" /> と再ラベル付けを行っても和全体は変わらないため、
                </p>
                <BlockMath math="= \frac{1}{z^2} + \sum_{\omega \in \Lambda \setminus \{0\}} \left( \frac{1}{(z-\omega)^2} - \frac{1}{\omega^2} \right) = \wp(z)" />
                <p>
                    が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                続いて、この偶関数性を利用して二重周期性を証明します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.2-1 (<InlineMath math="\wp" /> 関数の二重周期性)</span>}>
                <p>
                    <InlineMath math="\wp" /> 関数は格子 <InlineMath math="\Lambda" /> に関して二重周期的である。すなわち、<InlineMath math="i = 1, 2" /> に対して、
                </p>
                <BlockMath math="\wp(z + \omega_i) = \wp(z)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、<InlineMath math="\wp(z)" /> を項別に微分すると、
                </p>
                <BlockMath math="\wp'(z) = -2 \sum_{\omega \in \Lambda} \frac{1}{(z-\omega)^3}" />
                <p>
                    となります。この和は <InlineMath math="\omega" /> のシフトに関して不変であるため、明らかに <InlineMath math="\Lambda" />-周期的です。すなわち <InlineMath math="\wp'(z + \omega_i) = \wp'(z)" /> です。
                </p>
                <p>
                    これより、関数 <InlineMath math="f(z) = \wp(z + \omega_i) - \wp(z)" /> の微分は <InlineMath math="0" /> となるため、<InlineMath math="f(z)" /> は定数 <InlineMath math="C" /> です。
                </p>
                <BlockMath math="\wp(z + \omega_i) - \wp(z) = C"
                />
                <p>
                    この定数 <InlineMath math="C" /> を決定するため、<InlineMath math="z = -\omega_i/2" /> を代入します。すると、
                </p>
                <BlockMath math="\wp(\omega_i/2) - \wp(-\omega_i/2) = C" />
                <p>
                    となりますが、Proposition 3.2-1 の偶関数性により <InlineMath math="\wp(\omega_i/2) = \wp(-\omega_i/2)" /> であるため、<InlineMath math="C = 0" /> を得ます。したがって、<InlineMath math="\wp(z + \omega_i) = \wp(z)" /> が成り立ちます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1">
                <p>
                    以上の結果から、<InlineMath math="\wp" /> 関数は基本周期平行四辺形内に唯一の極を <InlineMath math="z = 0" /> に持ち、その位数は <InlineMath math="2" /> です。したがって、<InlineMath math="\wp" /> は位数2の楕円関数であることが確認できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="\wp'" /> の基本性質</h2>

            <p>
                次に、導関数 <InlineMath math="\wp'(z)" /> について調べます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.2-2 (<InlineMath math="\wp'" /> の性質)</span>}>
                <p>
                    導関数 <InlineMath math="\wp'(z)" /> は奇関数であり、位数3の楕円関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    偶関数 <InlineMath math="\wp(-z) = \wp(z)" /> を両辺微分すると、合成関数の微分則より
                </p>
                <BlockMath math="-\wp'(-z) = \wp'(z) \quad \Rightarrow \quad \wp'(-z) = -\wp'(z)" />
                <p>
                    となり、奇関数であることがわかります。
                </p>
                <p>
                    また、<InlineMath math="\wp'(z)" /> は各格子点 <InlineMath math="\omega \in \Lambda" /> に3位の極を持つため、基本周期平行四辺形内の極の位数の合計は3となり、位数3の楕円関数です。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-2">
                <p>
                    <InlineMath math="\wp'(z)" /> が奇関数であり、かつ二重周期的であることから、半周期点での値を評価できます。
                </p>
                <p>
                    <InlineMath math="\omega_i/2" /> （<InlineMath math="i=1,2" />）について、
                </p>
                <BlockMath math="\begin{aligned} \wp'(\omega_i/2) &= -\wp'(-\omega_i/2) \\ &= -\wp'(-\omega_i/2 + \omega_i) \\ &= -\wp'(\omega_i/2) \end{aligned}" />
                <p>
                    となるため、<InlineMath math="2\wp'(\omega_i/2) = 0" /> すなわち <InlineMath math="\wp'(\omega_i/2) = 0" /> となります。
                </p>
                <p>
                    同様に <InlineMath math="(\omega_1+\omega_2)/2" /> でも <InlineMath math="0" /> となります。リウヴィルの定理系列から、位数3の楕円関数は基本周期平行四辺形内にちょうど3つの零点を持つため、これらの半周期点 <InlineMath math="\omega_1/2, \omega_2/2, (\omega_1+\omega_2)/2" /> がすべての零点であることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\wp(z)" /> は偶関数であり、格子 <InlineMath math="\Lambda" /> に関して二重周期的である。</li>
                    <li><InlineMath math="\wp(z)" /> は基本周期平行四辺形内に唯一の2位の極を持つ位数2の楕円関数である。</li>
                    <li>導関数 <InlineMath math="\wp'(z)" /> は奇関数であり、位数3の楕円関数である。</li>
                    <li><InlineMath math="\wp'(z) = 0" /> となるのは、基本周期平行四辺形内において3つの半周期点のみである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
