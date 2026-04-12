import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubdifferentialComposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では凸関数の和に対する劣微分の公式を学びました。本節では、アフィン写像との合成やスカラー倍といった操作に対して、劣微分がどのように振る舞うかを考察します。
                微積分学における連鎖律（チェインルール）に相当する重要な性質ですが、凸解析においては関数が非平滑であるため、一般的な非線形合成よりもアフィン変換との合成が中心的な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アフィン写像との合成</h2>

            <p>
                まず、凸関数とアフィン写像の合成からなる関数の劣微分について考えます。この公式が成立するためには、前節の和の公式と同様に、定義域に関する適切な「制約想定」が必要です。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.4-1 (アフィン写像との合成)</span>}>
                <p>
                    <InlineMath math="f" /> を凸関数、<InlineMath math="A" /> を行列、<InlineMath math="b" /> をベクトルとします。
                    関数 <InlineMath math="h(x) = f(Ax + b)" /> の劣微分は、<InlineMath math="A" /> の値域と <InlineMath math="\mathrm{ri}(\mathrm{dom}(f))" /> が交わる（すなわち <InlineMath math="\{Ax + b \mid x \in \mathbb{R}^n\} \cap \mathrm{ri}(\mathrm{dom}(f)) \neq \emptyset" />）という制約想定の下で、次のように表されます。
                </p>
                <BlockMath math="\partial h(x) = A^T \partial f(Ax + b)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    包含関係 <InlineMath math="A^T \partial f(Ax + b) \subseteq \partial h(x)" /> を示します。
                    任意の <InlineMath math="g \in \partial f(Ax + b)" /> をとります。劣勾配の定義より、任意の <InlineMath math="y" /> に対して以下の不等式が成り立ちます。
                </p>
                <BlockMath math="f(Ay + b) \geq f(Ax + b) + \langle g, (Ay + b) - (Ax + b) \rangle"
                />
                <p>
                    内積の性質を利用して変形します。
                </p>
                <BlockMath math="\langle g, Ay - Ax \rangle = \langle g, A(y - x) \rangle = \langle A^T g, y - x \rangle"
                />
                <p>
                    したがって、
                </p>
                <BlockMath math="h(y) \geq h(x) + \langle A^T g, y - x \rangle"
                />
                <p>
                    となり、<InlineMath math="A^T g \in \partial h(x)" /> が示されました。
                    逆の包含関係および制約想定の必要性は、和の公式（Theorem 3.3-1）と同様に分離定理を用いた詳細な議論を要します。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この公式は、最適化問題において変数変換を行った際の最適性条件を導出する際に非常に有用です。
            </p>

            <ContentBox type="example" title="Example 3.4-1">
                <p>
                    関数 <InlineMath math="h(x) = |2x - 1|" /> の <InlineMath math="x = 1/2" /> における劣微分を計算します。
                </p>
                <p>
                    <InlineMath math="f(t) = |t|" />、<InlineMath math="A = 2" />、<InlineMath math="b = -1" /> と置くと、<InlineMath math="h(x) = f(Ax + b)" /> となります。
                    Proposition 3.4-1 より、
                </p>
                <BlockMath math="\partial h(x) = 2 \cdot \partial f(2x - 1)" />
                <p>
                    <InlineMath math="x = 1/2" /> のとき、<InlineMath math="2x - 1 = 0" /> であり、絶対値関数の原点での劣微分は <InlineMath math="\partial f(0) = [-1, 1]" /> です。したがって、
                </p>
                <BlockMath math="\partial h(1/2) = 2 \cdot [-1, 1] = [-2, 2]" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー倍と正の同次性</h2>

            <p>
                次に、凸関数を正のスカラーで定数倍した際の劣微分の公式を確認します。これはアフィン変換との合成の特殊なケースと見ることもできますが、基本性質として独立してよく用いられます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.4-2 (スカラー倍)</span>}>
                <p>
                    <InlineMath math="f" /> を凸関数とし、<InlineMath math="\alpha > 0" /> を正の定数とします。このとき、関数 <InlineMath math="\alpha f" /> の劣微分は次のように表されます。
                </p>
                <BlockMath math="\partial(\alpha f)(x) = \alpha \, \partial f(x)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="g \in \partial f(x)" /> に対して、定義より任意の <InlineMath math="y" /> について
                </p>
                <BlockMath math="f(y) \geq f(x) + \langle g, y - x \rangle"
                />
                <p>
                    が成り立ちます。<InlineMath math="\alpha > 0" /> であるため、両辺に <InlineMath math="\alpha" /> を乗じても不等式の向きは変わらず、
                </p>
                <BlockMath math="(\alpha f)(y) \geq (\alpha f)(x) + \langle \alpha g, y - x \rangle"
                />
                <p>
                    となります。これは <InlineMath math="\alpha g \in \partial(\alpha f)(x)" /> を意味します。
                    逆の包含も、<InlineMath math="1/\alpha" /> を掛けることで同様に示されます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2">
                <p>
                    関数 <InlineMath math="f(x) = 3|x|" /> の <InlineMath math="x = 0" /> における劣微分を計算します。
                </p>
                <p>
                    Proposition 3.4-2 より、
                </p>
                <BlockMath math="\partial(3|x|)(0) = 3 \cdot \partial(|x|)(0)" />
                <p>
                    <InlineMath math="\partial(|x|)(0) = [-1, 1]" /> であるため、
                </p>
                <BlockMath math="\partial(3|x|)(0) = 3 \cdot [-1, 1] = [-3, 3]" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <p>
                アフィン変換やスカラー倍については扱いやすい公式が存在しますが、一般的な非線形関数の合成についてのチェインルールは複雑になりがちです。
            </p>

            <ContentBox type="remark" title="一般の非線形合成に対する注意">
                <p>
                    微積分学では <InlineMath math="(f \circ g)(x)" /> の微分は <InlineMath math="f'(g(x)) g'(x)" /> となりますが、劣微分の場合はこのような単純な公式が成り立つのは例外的なケースに限られます。
                    具体的には、<InlineMath math="g" /> が微分可能であり、かつ <InlineMath math="f" /> が単調非減少な凸関数であるような場合にのみ、扱いやすいチェインルールが構成できます。
                    そのため、凸解析の実践においては、可能な限り問題をアフィン変換や和の形に帰着させてから劣微分を計算する手法が基本となります。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>アフィン写像との合成 <InlineMath math="h(x) = f(Ax + b)" /> の劣微分は、適切な制約想定のもとで <InlineMath math="\partial h(x) = A^T \partial f(Ax + b)" /> となる。</li>
                    <li>正のスカラー倍について、<InlineMath math="\partial(\alpha f)(x) = \alpha \, \partial f(x)" /> が成り立つ。</li>
                    <li>一般的な非線形合成に対する劣微分のチェインルールは複雑であり、通常はアフィン変換や和の公式に帰着させるアプローチが好まれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
