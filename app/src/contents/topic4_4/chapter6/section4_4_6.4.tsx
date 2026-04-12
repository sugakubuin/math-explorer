import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZeroFindingAndOptimization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、単調作用素の性質とミンティの定理による解の存在保証について学びました。本節では、単調作用素の最も重要な応用の一つである「零点問題」について考察し、それが凸最適化問題とどのように接続されるかを見ていきます。
                また、今後のアルゴリズム設計の基礎となる「レゾルベント」の概念を導入し、次章の近接作用素や分割法への橋渡しを行います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">零点問題の定式化</h2>

            <p>
                単調作用素の理論において、最も基本的な問題は、与えられた作用素に対してその値にゼロが含まれるような点を見つけることです。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.4-1 (<b>零点問題</b>)</span>}>
                <p>
                    極大単調作用素 <InlineMath math="T: \mathbb{R}^n \rightrightarrows \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="0 \in T(x)" />
                <p>
                    を満たす <InlineMath math="x \in \mathbb{R}^n" /> を求める問題を<b>零点問題</b>という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example (一次元線形関数による直感的な例)">
                <p>
                    <InlineMath math="T(x) = ax + b" />（ただし <InlineMath math="a > 0" />）とすると、<InlineMath math="T" /> は狭義単調な単価関数となる。<InlineMath math="0 \in T(x)" /> を解くことは、単に一次方程式 <InlineMath math="ax + b = 0" /> を解くことと同義であり、解 <InlineMath math="x = -b/a" /> を一意に持つ。
                </p>
            </ContentBox>

            <p>
                この零点問題は、これまでに学んだ凸関数の最小化問題と直接的に対応づけられます。Theorem 3.5-1（フェルマの規則）を思い出すと、この対応は非常に自然なものです。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 6.4-1 (<InlineMath math="T = \partial f" /> の場合)</span>}>
                <p>
                    <InlineMath math="T = \partial f" />（<InlineMath math="f" /> は閉真凸関数）のとき、<InlineMath math="0 \in T(x)" /> の零点問題は、<InlineMath math="f" /> の最小化問題
                </p>
                <BlockMath math="\min_{x} f(x)" />
                <p>
                    に等価である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    フェルマの規則（Theorem 3.5-1）より、<InlineMath math="x^*" /> が <InlineMath math="f" /> の最小値を達成するための必要十分条件は、<InlineMath math="0 \in \partial f(x^*)" /> である。したがって、<InlineMath math="T = \partial f" /> と置いたときの零点問題の解と、<InlineMath math="f" /> の最小化問題の解は完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この性質を用いることで、複雑な凸最適化問題を単調作用素の枠組みで表現し直すことができます。
            </p>

            <ContentBox type="example" title="Example 6.4-1 (和の構造と分割法への接続)">
                <p>
                    2つの閉真凸関数 <InlineMath math="f, g" /> の和の最小化問題
                </p>
                <BlockMath math="\min_x (f(x) + g(x))" />
                <p>
                    を考える。適切な制約想定（例えばモロー-ロカフェラーの定理の条件）が成り立つとき、<InlineMath math="\partial(f+g) = \partial f + \partial g" /> が成立する。したがって、この最小化問題の最適性条件は、単調作用素 <InlineMath math="T = \partial f + \partial g" /> の零点を求める問題
                </p>
                <BlockMath math="0 \in (\partial f + \partial g)(x)" />
                <p>
                    に対応する。
                    このように作用素を和に分割して扱う手法は、次章で学ぶ分割アルゴリズム（§7.5 など）の基礎となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">レゾルベントと反映</h2>

            <p>
                単調作用素の零点を求めるために、反復アルゴリズムを構築したいと考えます。しかし、<InlineMath math="0 \in T(x)" /> に対して直接的に勾配法のような更新を行うことは困難な場合があります。そこで、安定した反復写像を得るために「レゾルベント」という概念を導入します。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.4-2 (<b>レゾルベント（resolvent）</b>)</span>}>
                <p>
                    極大単調作用素 <InlineMath math="T: \mathbb{R}^n \rightrightarrows \mathbb{R}^n" /> に対して、その<b>レゾルベント</b> <InlineMath math="J_T" /> を次のように定義する。
                </p>
                <BlockMath math="J_T = (I + T)^{-1}" />
                <p>
                    ここで <InlineMath math="I" /> は恒等作用素である。すなわち、<InlineMath math="x = J_T(y)" /> は <InlineMath math="y \in x + T(x)" /> を満たす <InlineMath math="x" /> を意味する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example (レゾルベントの具体例)">
                <p>
                    <InlineMath math="T(x) = cx" />（<InlineMath math="c > 0" />）のとき、<InlineMath math="(I+T)(x) = (1+c)x" /> であるから、<InlineMath math="y = (1+c)x" /> より <InlineMath math="x = \frac{1}{1+c}y" /> となる。よって、
                </p>
                <BlockMath math="J_T(y) = \frac{1}{1+c}y" />
                <p>
                    であり、これは係数が <InlineMath math="1" /> より小さい非拡大写像となる。
                </p>
            </ContentBox>

            <p>
                極大単調作用素のレゾルベントは、常に単値であり、さらに「非拡大性」という望ましい性質を持つことが知られています。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-2">
                <p>
                    <InlineMath math="T" /> が極大単調作用素であるとき、そのレゾルベント <InlineMath math="J_T = (I + T)^{-1}" /> は <InlineMath math="\mathbb{R}^n" /> 全体で定義された単値写像であり、非拡大写像（1-リプシッツ連続）である。
                    すなわち、任意の <InlineMath math="x, y \in \mathbb{R}^n" /> に対して、
                </p>
                <BlockMath math="\|J_T(x) - J_T(y)\| \leq \|x - y\|" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ミンティの定理（Theorem 6.3-1）により、極大単調作用素 <InlineMath math="T" /> に対して <InlineMath math="I + T" /> は強制的であるため全射となる。したがって、任意の <InlineMath math="y \in \mathbb{R}^n" /> に対して <InlineMath math="y \in x + T(x)" /> を満たす <InlineMath math="x" /> が存在する。
                </p>
                <p>
                    非拡大性を示す。<InlineMath math="u = J_T(x)" />、<InlineMath math="v = J_T(y)" /> とすると、定義より <InlineMath math="x - u \in T(u)" />、<InlineMath math="y - v \in T(v)" /> である。<InlineMath math="T" /> の単調性から、
                </p>
                <BlockMath math="\langle (x - u) - (y - v), u - v \rangle \geq 0" />
                <p>
                    これを展開・整理すると、
                </p>
                <BlockMath math="\langle x - y, u - v \rangle \geq \langle u - v, u - v \rangle = \|u - v\|^2"
                />
                <p>
                    コーシー・シュワルツの不等式 <InlineMath math="\langle x - y, u - v \rangle \leq \|x - y\|\|u - v\|" /> を用いると、
                </p>
                <BlockMath math="\|u - v\|^2 \leq \|x - y\|\|u - v\|" />
                <p>
                    となり、<InlineMath math="\|u - v\| \leq \|x - y\|" />、すなわち <InlineMath math="\|J_T(x) - J_T(y)\| \leq \|x - y\|" /> を得る。非拡大性から必然的に <InlineMath math="J_T" /> は単値写像となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                レゾルベントは、凸集合の指示関数の劣微分に適用したとき、幾何学的な意味を持つ射影作用素と一致します。
            </p>

            <ContentBox type="example" title={<span>Example 6.4-2 (正規錐作用素のレゾルベントと射影)</span>}>
                <p>
                    閉凸集合 <InlineMath math="C" /> に対する指示関数 <InlineMath math="\delta_C" /> を考え、その劣微分 <InlineMath math="T = \partial \delta_C = N_C" />（正規錐作用素）とする。<InlineMath math="x = J_T(y) = (I + \partial \delta_C)^{-1}(y)" /> の関係は、
                </p>
                <BlockMath math="y - x \in \partial \delta_C(x)" />
                <p>
                    と同値である。これは、最適化問題
                </p>
                <BlockMath math="\min_x \left( \frac{1}{2}\|x - y\|^2 + \delta_C(x) \right)" />
                <p>
                    の最適性条件に他ならない。この最小化問題の解は、<InlineMath math="y" /> に最も近い <InlineMath math="C" /> 内の点、すなわち射影 <InlineMath math="\mathrm{proj}_C(y)" /> である。よって、
                </p>
                <BlockMath math="J_{\partial \delta_C}(y) = \mathrm{proj}_C(y)" />
                <p>
                    となることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="近接作用素への一般化と関数解析への展望">
                <p>
                    この節で導入したレゾルベント <InlineMath math="J_{\partial f}" /> は、次章（第7章）で学ぶ「近接作用素（proximity operator）」と完全に一致します。近接作用素は、非平滑な凸関数の最適化アルゴリズムを構成するための理論的基盤となります。
                </p>
                <p>
                    さらに、このレゾルベントの枠組みは、関数解析（4-1）においてバナッハ空間上の非線形作用素や非有界作用素の半群理論へと一般化されます。微分方程式の発展方程式の解法においても、<InlineMath math="(I + \lambda A)^{-1}" /> のようなレゾルベントが中心的な役割を果たします。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>極大単調作用素 <InlineMath math="T" /> に対して <InlineMath math="0 \in T(x)" /> を満たす <InlineMath math="x" /> を求める問題を零点問題と呼ぶ。</li>
                    <li><InlineMath math="T = \partial f" /> のとき、零点問題は凸関数 <InlineMath math="f" /> の最小化問題と同値になる。</li>
                    <li>作用素 <InlineMath math="T" /> のレゾルベント <InlineMath math="J_T = (I+T)^{-1}" /> は <InlineMath math="\mathbb{R}^n" /> 全体で定義された単値の非拡大写像となる。</li>
                    <li>指示関数の劣微分のレゾルベントは凸集合への射影に一致し、次章の近接作用素への一般化の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
