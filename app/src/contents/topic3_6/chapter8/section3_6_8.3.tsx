import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MotivationForWeakFormulation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んできた変分法は、滑らかな関数 <InlineMath math="C^2" /> のクラスで極値を探し、そこからオイラー＝ラグランジュ方程式（微分方程式）を導き出すものでした。
                しかし、数学的に厳密な議論を深めると、この「滑らかさ」の前提が最適解の存在を阻む壁となることが分かってきました。
                本節では、現代的な偏微分方程式論の基礎となる<b>弱定式化</b>の考え方を導入し、本コースを締めくくります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱定式化の必要性</h2>

            <p className="leading-relaxed">
                領域の形状が悪い場合、たとえ最小値が存在しても、それが「滑らかな」関数であるとは限りません。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (古典解が存在しない例)">
                <p>
                    L 字型領域のように非凸な領域 <InlineMath math="\Omega" /> でディリクレ問題を解く場合、境界の「角」の部分で解の導関数が無限に発散してしまうことがあります。
                    このとき、解は境界の近くで <InlineMath math="C^2" /> （2回連続微分可能）ではなくなります。
                    すなわち、オイラー＝ラグランジュ方程式を「点ごとに」満たす古典的な解は存在しませんが、物理的なエネルギー（ディリクレ積分）を有限に保つような「少し崩れた解」なら存在することになります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この「少し崩れた解」を数学的に正しく定義するために、変分原理を「微分」ではなく「積分」の形で記述します。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (弱定式化)">
                <p>
                    汎関数 <InlineMath math="J[u] = \frac{1}{2} \iint_\Omega |\nabla u|^2 \, dA - \iint_\Omega f u \, dA" /> の極値問題において、次の積分方程式
                    <BlockMath math="\iint_\Omega \nabla u \cdot \nabla \eta \, dA = \iint_\Omega f \eta \, dA \quad (\forall \eta \in H^1_0(\Omega))" />
                    を満たす関数 <InlineMath math="u" /> を、元の方程式（<InlineMath math="-\Delta u = f" />）の<b>弱解</b>（Weak Solution）と呼ぶ。
                    この定式化を<b>弱定式化</b>（Weak Formulation）と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Lax-Milgram 定理への展望</h2>

            <p className="leading-relaxed">
                弱定式化によって、変分法は「関数解析」という広大な数学の分野へと結びつきます。
            </p>

            <ContentBox type="remark" title="存在定理のアウトライン">
                <p>
                    弱定式化は、ヒルベルト空間（ソボレフ空間）上の双線形形式 <InlineMath math="a(u, \eta) = \ell(\eta)" /> として抽象化されます。
                    このとき、関数解析の強力な定理である<b>Lax-Milgram の定理</b>を用いることで、解の一意的な存在が保証されます。
                    ここでの鍵は、汎関数の「エネルギーが無限に下がらない（コエルシビティ）」という性質です。このように、変分法は単なる計算手法を超え、方程式の存在論の根幹を成しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="本コースの締めくくり">
                <p>
                    本コース（Topic 3-6：変分法）では、オイラー＝ラグランジュ方程式の導出に始まり、ハミルトン形式、ノーターの定理、そしてこの多変数への接続と、変分学の主要な山脈を縦走してきました。
                    ここから先は、より厳密な<b>関数解析</b>（4-1）や、具体的な物理現象を解き明かす<b>偏微分方程式</b>（5-2）のコースで、さらに深い理論が展開されます。
                    「変分原理」という普遍的な視点は、皆さんが今後どのような数学や物理に触れる際にも、常に強力な道標となってくれるはずです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>領域の形状などにより、滑らかな古典解が存在しない場合でも、変分原理はその限界を突破する。</li>
                    <li>弱定式化は、変分原理をテスト関数を用いた積分方程式の形で表現し直したものである。</li>
                    <li>ヒルベルト空間やソボレフ空間といった関数解析の枠組みにより、解の存在と一意性が保証される。</li>
                    <li>変分法は、古典物理学から現代数学（実解析・PDE・関数解析）をつなぐ架け橋である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
