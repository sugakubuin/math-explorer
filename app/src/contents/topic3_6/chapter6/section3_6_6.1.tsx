import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SymmetryAndTransformationGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                物理学における最も美しい法則の一つに、「対称性と保存則の結びつき」があります。
                例えば、時間の並進対称性はエネルギー保存法則に、空間の回転対称性は角運動量保存法則に対応しています。
                本章では、変分法の枠組みを用いて、この美しい関係を数学的に証明する<b>ノーターの定理</b>を学びます。
                まずはその基礎となる<b>1 パラメータ変換群</b>と、汎関数の<b>不変性</b>について定義しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1 パラメータ変換群の定義</h2>

            <p className="leading-relaxed">
                系の「対称性」を考えるためには、まず系に連続的な変化を与える操作を定式化する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (1 パラメータ変換群と生成子)">
                <p>
                    実数パラメータ <InlineMath math="s \in \mathbb{R}" /> に対して定められた座標変換の族 <InlineMath math="\Phi_s : (x, u) \mapsto (\tilde{x}(x,u,s), \tilde{u}(x,u,s))" /> が次の条件を満たすとき、これを <b>1 パラメータ変換群</b>と呼ぶ。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\Phi_0 = \mathrm{id}" /> （恒等変換）</li>
                    <li><InlineMath math="\Phi_s \circ \Phi_t = \Phi_{s+t}" /> （加法性）</li>
                </ul>
                <p className="mt-4">
                    また、<InlineMath math="s" /> に関する微分によって得られるベクトル場
                    <BlockMath math="(\xi, \phi) = \frac{d}{ds}(\tilde{x}, \tilde{u})\Big|_{s=0}" />
                    を、この変換群の<b>無限小生成子</b>（Infinitesimal Generator）と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                物理的に重要な変換の多くは、この 1 パラメータ変換群として表現できます。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (平行移動群)">
                <p>
                    <InlineMath math="x" /> 座標軸に沿った平行移動
                    <BlockMath math="\tilde{x} = x + s, \quad \tilde{u} = u" />
                    を考える。このとき無限小生成子は
                    <BlockMath math="\xi = \frac{d(x+s)}{ds}\Big|_{s=0} = 1, \quad \phi = \frac{d(u)}{ds}\Big|_{s=0} = 0" />
                    より、<InlineMath math="(\xi, \phi) = (1, 0)" /> となる。これは時間の一様性などに対応する重要な対称性である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-2 (スケール変換群)">
                <p>
                    座標と関数の値を一斉に拡大・縮小するスケール変換
                    <BlockMath math="\tilde{x} = e^s x, \quad \tilde{u} = e^{\alpha s} u" />
                    を考える。無限小生成子は
                    <BlockMath math="\xi = \frac{d(e^s x)}{ds}\Big|_{s=0} = x, \quad \phi = \frac{d(e^{\alpha s} u)}{ds}\Big|_{s=0} = \alpha u" />
                    より、<InlineMath math="(\xi, \phi) = (x, \alpha u)" /> となる。これはフラクタルや次元解析などの議論で現れる対称性である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">汎関数の不変性</h2>

            <p className="leading-relaxed">
                「対称性がある」とは、ある変換を行っても系の性質（汎関数の値）が変化しないことを指します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (汎関数の不変性)">
                <p>
                    1 パラメータ変換群 <InlineMath math="\Phi_s" /> に対して、変換後の汎関数の値が元の値と常に一致するとき、すなわち
                    <BlockMath math="\int_{\tilde{a}}^{\tilde{b}} F(\tilde{x}, \tilde{u}, \tilde{u}') \, d\tilde{x} = \int_{a}^{b} F(x, u, u') \, dx" />
                    が成り立つとき、汎関数 <InlineMath math="J[u]" /> は変換群 <InlineMath math="\Phi_s" /> に関して<b>不変</b>（Invariant）であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-3 (弧長の平行移動不変性)">
                <p>
                    弧長汎関数 <InlineMath math="J[u] = \int_a^b \sqrt{1 + (u')^2} \, dx" /> に対して、前述の平行移動 <InlineMath math="\tilde{x} = x + s, \tilde{u} = u" /> を適用してみよう。
                    <InlineMath math="d\tilde{x} = dx" /> であり、<InlineMath math="\tilde{u}' = \frac{d\tilde{u}}{d\tilde{x}} = \frac{du}{dx} = u'" /> となるため、積分は
                    <BlockMath math="\int_{a+s}^{b+s} \sqrt{1 + (u')^2} \, d\tilde{x} = \int_a^b \sqrt{1 + (u')^2} \, dx" />
                    となり、値が変化しない。したがって、弧長汎関数は <InlineMath math="x" /> の平行移動に対して不変である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように不変性が保たれているとき、その背景には必ず何らかの「保存量」が隠されています。
                次節では、エミー・ノーターによって導かれた、その具体的な保存量の構成方法を学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>1 パラメータ変換群は、恒等変換を含み、パラメータの加法性が成り立つ座標変換の族である。</li>
                    <li>無限小生成子は、パラメータ <InlineMath math="s=0" /> での微係数として定義され、変換の本質を記述する。</li>
                    <li>汎関数の不変性とは、座標変換を行っても積分の値が変化しない性質を指す。</li>
                    <li>対称性は「何を変えても（不変性）の背景にある構造」として、数学的に定式化される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
