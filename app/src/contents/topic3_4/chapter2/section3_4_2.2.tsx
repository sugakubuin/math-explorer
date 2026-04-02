import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierSineAndCosineExpansions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有界な区間 <InlineMath math="[0, L]" /> で定義された関数を扱う際、その区間の外側でどのように関数を拡張するかによって、得られる級数の性質が大きく変わります。本節では、奇関数として拡張する「フーリエ正弦展開」と、偶関数として拡張する「フーリエ余弦展開」について学びます。これらの手法は、物理学における境界条件（ディリクレ条件やノイマン条件）と密接に結びついています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ正弦展開</h2>

            <p>
                区間 <InlineMath math="[0, L]" /> の関数を奇関数（点対称）として <InlineMath math="[-L, L]" /> に拡張すると、級数には正弦（sin）成分のみが現れます。これを「フーリエ正弦展開」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (フーリエ正弦展開)">
                <p>
                    区間 <InlineMath math="[0, L]" /> 上の関数 <InlineMath math="f(x)" /> のフーリエ正弦展開は、次のように定義される。
                </p>
                <BlockMath math="f(x) \sim \sum_{n=1}^{\infty} b_n \sin \frac{n\pi x}{L} \quad (0 < x < L)" />
                <p>
                    ここで、係数 <InlineMath math="b_n" /> は以下の積分で計算される。
                </p>
                <BlockMath math="b_n = \frac{2}{L} \int_0^L f(x) \sin \frac{n\pi x}{L} dx" />
            </ContentBox>

            <p>
                正弦展開の最も大きな特徴は、端点 <InlineMath math="x = 0" /> および <InlineMath math="x = L" /> において、級数の値が常に 0 に固定されるという点にあります。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (f(x) = 1 の正弦展開)">
                <p>
                    <InlineMath math="f(x) = 1 \quad (0 < x < \pi)" /> の正弦展開を計算します。
                </p>
                <BlockMath math="\begin{aligned} b_n &= \frac{2}{\pi} \int_0^{\pi} 1 \cdot \sin nx dx = \frac{2}{\pi} \left[ -\frac{\cos nx}{n} \right]_0^{\pi} \\ &= \frac{2}{n\pi} (1 - (-1)^n) \end{aligned}" />
                <p>
                    したがって、奇数次の項のみが残り、
                </p>
                <BlockMath math="1 \sim \frac{4}{\pi} \left( \sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots \right)" />
                <p>
                    となります。この展開式は、端点 <InlineMath math="x=0, \pi" /> で値が 0 に収束するため、物理的には「両端が固定された弦の振動」のような「ディリクレ境界条件」を自動的に満たします。
                </p>
            </ContentBox>

            <p>
                別の関数についても見てみましょう。
            </p>

            <ContentBox type="example" title="Example 2.2-2 (f(x) = x の正弦展開と熱方程式)">
                <p>
                    <InlineMath math="f(x) = x \quad (0 < x < \pi)" /> の正弦展開は、前節の奇関数拡張の議論から：
                </p>
                <BlockMath math="x \sim 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin nx" />
                <p>
                    となります。この展開を初期温度分布として熱方程式に適用すると、時間の経過とともに高周波（大きな <InlineMath math="n" />）の成分が急激に減衰し、滑らかな分布へと変化していく様子が記述できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ余弦展開と境界条件との対応</h2>

            <p>
                一方、関数を偶関数（線対称）として拡張すると、級数には定数項と余弦（cos）成分のみが現れます。これを「フーリエ余弦展開」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.2-2 (フーリエ余弦展開)">
                <p>
                    区間 <InlineMath math="[0, L]" /> 上の関数 <InlineMath math="f(x)" /> のフーリエ余弦展開は、次のように定義される。
                </p>
                <BlockMath math="f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos \frac{n\pi x}{L} \quad (0 \leq x \leq L)" />
                <p>
                    ここで、係数 <InlineMath math="a_n" /> は以下の積分で計算される。
                </p>
                <BlockMath math="\begin{aligned} a_n &= \frac{2}{L} \int_0^L f(x) \cos \frac{n\pi x}{L} dx \quad (n \geq 1) \\ a_0 &= \frac{2}{L} \int_0^L f(x) dx \end{aligned}" />
            </ContentBox>

            <p>
                余弦展開では、正弦展開とは対照的な性質が現れます。
            </p>

            <ContentBox type="example" title="Example 2.2-3 (f(x) = x の余弦展開)">
                <p>
                    <InlineMath math="f(x) = x \quad (0 < x < \pi)" /> の余弦展開を計算します。
                </p>
                <BlockMath math="\begin{aligned} a_0 &= \frac{2}{\pi} \int_0^{\pi} x dx = \pi \\ a_n &= \frac{2}{\pi} \int_0^{\pi} x \cos nx dx \\ &= \frac{2}{\pi} \left[ \frac{\cos nx - 1}{n^2} \right] = \frac{2((-1)^n - 1)}{\pi n^2} \end{aligned}" />
                <p>
                    これより、
                </p>
                <BlockMath math="x \sim \frac{\pi}{2} - \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos(2k-1)x" />
                <p>
                    この級数を微分すると、全項が <InlineMath math="\sin(2k-1)x" /> となり、端点 <InlineMath math="x=0, \pi" /> で微分係数が 0 になります。これは物理的には「断熱された端」のような「ノイマン境界条件」に対応します。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正弦展開と余弦展開の使い分け">
                <p>
                    物理の問題を解く際、どちらの展開を使うべきかは、その問題が課している境界条件によって決定されます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><b>フーリエ正弦展開</b>: 端点で値が 0 （ディリクレ条件）。例：弦の両端固定、管の開口部など。</li>
                    <li><b>フーリエ余弦展開</b>: 端点で微分が 0 （ノイマン条件）。例：棒の端の断熱、密閉された管の端など。</li>
                </ul>
                <p>
                    このように、数学的な拡張方法の選択が、直接的に物理的な系のモデル化と結びついています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>有界区間の関数を奇関数として拡張すると正弦展開が、偶関数として拡張すると余弦展開が得られる。</li>
                    <li>正弦展開は端点で値をゼロに保つ性質（ディリクレ条件）を持ち、余弦展開は端点で微分をゼロにする性質（ノイマン条件）を持つ。</li>
                    <li>偏微分方程式の境界値問題において、物理的な系の制約条件に合わせてこれらを適切に選択することが重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
