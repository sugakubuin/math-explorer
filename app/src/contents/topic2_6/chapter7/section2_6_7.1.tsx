import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EquilibriumAndPhasePlane() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで微分方程式の「解き方」に焦点を当ててきましたが、多くの現象（特に非線形なもの）では解を具体的な式で書き下すことが困難です。
                しかし、具体的な式が分からなくても、解が時間が経つにつれてどこへ向かうのか、あるいは安定な状態にとどまるのかといった<strong>定性的な挙動</strong>を調べることは可能です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自律系と相平面</h2>

            <p>
                右辺が時刻 <InlineMath math="t" /> に直接依存しないシステムを考察します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (自律系と相平面)">
                <p>
                    微分方程式系 <InlineMath math="\mathbf{y}' = \mathbf{f}(\mathbf{y})" /> を<strong>自律系 (autonomous system)</strong> と呼ぶ。
                    また、変数の組 <InlineMath math="\mathbf{y} = (y_1, y_2, \dots, y_n)^\top" /> を座標とする空間を相空間と呼び、特に 2 次元の場合は<strong>相平面 (phase plane)</strong> と呼ぶ。
                    解 <InlineMath math="\mathbf{y}(t)" /> が相平面上に描く曲線を<strong>軌道 (orbit / solution curve)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 7.1-2 (平衡点)">
                <p>
                    <InlineMath math="\mathbf{f}(\mathbf{y}^*) = \mathbf{0}" /> を満たす点 <InlineMath math="\mathbf{y}^*" /> を<strong>平衡点 (equilibrium point)</strong> または固定点と呼ぶ。
                    平衡点では速度が 0 であるため、一度そこに達した解は永遠にとどまり続ける（定数解 <InlineMath math="\mathbf{y}(t) \equiv \mathbf{y}^*" /> に対応する）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1 (振り子の方程式)">
                <p>
                    摩擦のない振り子の運動方程式 <InlineMath math="\theta'' + \sin \theta = 0" /> は、 <InlineMath math="y_1 = \theta, y_2 = \theta'" /> と置くことで自律系
                    <BlockMath math="\begin{cases} y_1' = y_2 \\ y_2' = -\sin y_1 \end{cases}" />
                    に変換される。
                    平衡点は <InlineMath math="y_2 = 0" /> かつ <InlineMath math="\sin y_1 = 0" />、すなわち <InlineMath math="y_1 = n\pi" /> である。
                    <br />・ <InlineMath math="(0, 0)" />：振り子が真下で静止している状態。
                    <br />・ <InlineMath math="(\pi, 0)" />：振り子が真上で絶妙なバランスで静止している（不安定な）状態。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">安定性の概念</h2>

            <p>
                平衡点の近くから出発した解が、その後どのように振る舞うかを分類します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-3 (安定性の数学的定義)">
                <p>
                    平衡点 <InlineMath math="\mathbf{y}^*" /> について：
                </p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>安定 (Stable / Lyapunov stable)</strong>：
                        初期値が平衡点に十分近ければ、その後の軌道も平衡点の近くにずっととどまり続けること。
                        <br /><span className="text-sm">（形式的には：任意の <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="\delta > 0" /> が存在し、 <InlineMath math="|\mathbf{y}(0) - \mathbf{y}^*| < \delta" /> ならば全ての <InlineMath math="t \ge 0" /> で <InlineMath math="|\mathbf{y}(t) - \mathbf{y}^*| < \varepsilon" /> となる。）</span>
                    </li>
                    <li>
                        <strong>漸近安定 (Asymptotically stable)</strong>：
                        安定であり、かつ時間が経つにつれて軌道が平衡点へと収束すること。
                    </li>
                    <li>
                        <strong>不安定 (Unstable)</strong>：
                        安定でないこと。少しのずれが時間とともに増幅され、平衡点から遠ざかっていく。
                    </li>
                </ol>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定性的解析</strong>： 解の具体的な形を求めずとも、相平面上の「流れ」からシステムの性質を見極めることができる。</li>
                    <li><strong>平衡点</strong>： システムの「静止状態」であり、解析の最も重要な基準となる。</li>
                    <li><strong>安定性の意義</strong>： 現実の物理系では誤差やノイズが避けられないため、「少しずれても戻ってくる（漸近安定）」かどうかが実用上の鍵となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
