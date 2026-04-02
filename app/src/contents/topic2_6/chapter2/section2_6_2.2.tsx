import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LipschitzCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では解の「存在」と定義域について見ましたが、もう一つ重要な問いがあります。
                それは「初期条件を与えたとき、解はただ一つに決まるのか？」という「一意性」の問題です。
                一意性が保証されないと、同じ設定から異なる未来が予測されることになり、科学的なモデルとして不完全になってしまいます。
                本節では、一意性を保証するための鍵となる「リプシッツ条件」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リプシッツ条件</h2>

            <p>
                関数の「滑らかさ」の指標の一つであるリプシッツ条件を定義します。
                これは通常の連続性よりも強く、微分可能性よりはわずかに弱い条件です。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (リプシッツ条件)">
                <p>
                    領域 <InlineMath math="D \subset \mathbb{R}^2" /> 上で定義された関数 <InlineMath math="f(x, y)" /> が、
                    変数 <InlineMath math="y" /> に関して<strong>リプシッツ条件 (Lipschitz condition)</strong> を満たすとは、
                    ある定数 <InlineMath math="L > 0" /> が存在して、すべての <InlineMath math="(x, y_1), (x, y_2) \in D" /> に対して
                    <BlockMath math="|f(x, y_1) - f(x, y_2)| \leq L|y_1 - y_2|" />
                    が成り立つことをいう。この定数 <InlineMath math="L" /> を<strong>リプシッツ定数</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-1 (リプシッツ条件の判定)">
                <p>
                    次の関数が指定された領域でリプシッツ条件を満たすか確認せよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>1. <InlineMath math="f(x, y) = y^2" /> （領域 <InlineMath math="|y| \leq M" /> ）</strong>
                        <br />
                        <InlineMath math="|y_1^2 - y_2^2| = |y_1 + y_2| \cdot |y_1 - y_2| \leq (M + M)|y_1 - y_2| = 2M|y_1 - y_2|" />
                        となり、リプシッツ定数 <InlineMath math="L = 2M" /> で条件を満たす。
                    </p>
                    <p>
                        <strong>2. <InlineMath math="f(x, y) = \sin y" /> （領域 <InlineMath math="\mathbb{R}^2" /> 全体）</strong>
                        <br />
                        平均値の定理より <InlineMath math="|\sin y_1 - \sin y_2| = |\cos \xi| \cdot |y_1 - y_2|" /> であり、
                        <InlineMath math="|\cos \xi| \leq 1" /> なので <InlineMath math="L = 1" /> として条件を満たす。
                    </p>
                </div>
            </ContentBox>

            <p>
                実用的な判定法として、偏導関数が有界であればリプシッツ条件が満たされます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-1 (微分による十分条件)">
                <p>
                    関数 <InlineMath math="f(x, y)" /> が <InlineMath math="y" /> に関して微分可能であり、
                    その偏導関数 <InlineMath math="\dfrac{\partial f}{\partial y}" /> が領域 <InlineMath math="D" /> 上で連続、かつ有界であれば、
                    <InlineMath math="f" /> は <InlineMath math="D" /> 上でリプシッツ条件を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    平均値の定理より、ある <InlineMath math="\xi" /> （ <InlineMath math="y_1" /> と <InlineMath math="y_2" /> の間）が存在して
                    <BlockMath math="f(x, y_1) - f(x, y_2) = \frac{\partial f}{\partial y}(x, \xi) \cdot (y_1 - y_2)" />
                    が成り立つ。偏導関数が有界である（ <InlineMath math="|\partial f / \partial y| \leq L" /> ）と仮定すれば、
                    両辺の絶対値をとることで
                    <BlockMath math="|f(x, y_1) - f(x, y_2)| \leq L|y_1 - y_2|" />
                    を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性が破れる例</h2>

            <p>
                リプシッツ条件が満たされない場合、微分方程式の解が一意に定まらない「非一意性」が生じることがあります。
            </p>

            <ContentBox type="example" title="Example 2.2-2 (一意性の欠如)">
                <p>
                    <strong>初期値問題：</strong> <InlineMath math="\dfrac{dy}{dx} = y^{1/3}, \quad y(0) = 0" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>1. 複数の解の存在：</strong>
                        <br />
                        この問題には、少なくとも次の 2 つの異なる解が存在する：
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li>解 A： <InlineMath math="y(x) = 0" /> （恒等的に 0）</li>
                            <li>解 B： <InlineMath math="y(x) = \left(\frac{2}{3}x\right)^{3/2}" /> （ <InlineMath math="x \geq 0" /> のとき）</li>
                        </ul>
                        実際に代入してみると、どちらも微分方程式と初期条件を満たすことが確認できる。
                    </p>
                    <p>
                        <strong>2. なぜ一意性が破れたのか：</strong>
                        <br />
                        右辺の関数 <InlineMath math="f(y) = y^{1/3}" /> を <InlineMath math="y" /> で微分すると、
                        <BlockMath math="f'(y) = \frac{1}{3y^{2/3}}" />
                        となり、初期点 <InlineMath math="y=0" /> において微分係数が無限大に発散する。
                        これにより、 <InlineMath math="y=0" /> の近傍でリプシッツ条件が満たされず、一意性が保証されなくなったのである。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="リプシッツ条件の直観的意味">
                <p>
                    リプシッツ条件 <InlineMath math="|f(x, y_1) - f(x, y_2)| \leq L|y_1 - y_2|" /> は、
                    「解の『変化の勢い（傾き）』の変化が、解そのものの差に対して暴走しすぎない」ことを要求しています。
                    <InlineMath math="y^{1/3}" /> の例では、 <InlineMath math="y=0" /> 付近での傾きの変化が急激すぎて、
                    0 という「動かない解」から、ある瞬間に別の解へと分岐してしまう隙を与えてしまっていると解釈できます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>リプシッツ条件</strong>： 変数 <InlineMath math="y" /> に関する変化率が有界であること。</li>
                    <li><strong>判定法</strong>： <InlineMath math="\partial f / \partial y" /> が有界ならリプシッツ連続である。</li>
                    <li><strong>一意性</strong>： 1 階微分方程式の解を一意に決定するために不可欠な条件。</li>
                    <li><strong>非一意的な例</strong>： <InlineMath math="y' = y^{1/3}" /> のように初期点でリプシッツ性を欠くと、解が複数現れることがある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
