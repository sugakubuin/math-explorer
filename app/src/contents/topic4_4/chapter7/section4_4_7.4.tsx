import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubgradientMethod() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、非平滑な凸関数を最小化するための基本的な反復アルゴリズムである<b>劣勾配法（subgradient method）</b>について解説します。劣勾配法は、微分可能な関数の最適化で用いられる勾配降下法を、劣微分を用いて微分不可能な凸関数へと自然に拡張したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">劣勾配法のアルゴリズム</h2>

            <p>
                まずは劣勾配法の定義を与えます。勾配降下法では現在の点における勾配の逆方向に進みますが、劣勾配法では劣勾配の一つを選び、その逆方向に進みます。
            </p>

            <ContentBox type="definition" title="Definition 7.4-1 (劣勾配法)">
                <p>
                    凸関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R}" /> を最小化する<b>劣勾配法</b>は、初期点 <InlineMath math="x_0 \in \mathbb{R}^n" /> から出発し、以下の反復式で点列 <InlineMath math="\{x_k\}" /> を生成する。
                </p>
                <BlockMath math="x_{k+1} = x_k - \alpha_k g_k" />
                <p>
                    ここで、<InlineMath math="g_k \in \partial f(x_k)" /> は <InlineMath math="x_k" /> における任意の劣勾配であり、<InlineMath math="\alpha_k > 0" /> はステップサイズ（学習率）である。
                </p>
            </ContentBox>

            <p>
                劣勾配法において重要な注意点があります。通常の勾配降下法とは異なり、マイナス劣勾配の方向 <InlineMath math="-g_k" /> は必ずしも関数値を減少させる降下方向とは限りません。そのため、関数値 <InlineMath math="f(x_k)" /> は反復ごとに単調に減少するわけではなく、振動しながら最適解に近づいていくのが一般的です。
            </p>

            <ContentBox type="remark" title="降下方向とは限らない理由とステップサイズの重要性">
                <p>
                    劣勾配は関数の大域的な下界（支持超平面）を与えるものであり、局所的な減少方向を常に指し示すわけではありません。反復の途中で関数値が増加することもあるため、アルゴリズムの評価はこれまでの最良値 <InlineMath math="\min_{j \leq k} f(x_j)" /> を用いて行われます。
                </p>
                <p>
                    また、勾配法では最適解に近づくと勾配が <InlineMath math="0" /> に近づくため自然とステップ幅が小さくなりますが、非平滑な関数では最適解の近傍でも劣勾配のノルムが <InlineMath math="0" /> に収束しないことがあります（例：<InlineMath math="f(x) = |x|" /> の原点近傍では劣勾配の大きさは常に <InlineMath math="1" />）。したがって、ステップサイズ <InlineMath math="\alpha_k" /> を適切に減少させることが収束の鍵となります。
                </p>
            </ContentBox>

            <p>
                次に、劣勾配法が最適解に収束するためのステップサイズの条件と、その証明を与えます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.4-1 (ステップサイズ条件)">
                <p>
                    凸関数 <InlineMath math="f" /> が最適解 <InlineMath math="x^*" /> を持つとする。劣勾配のノルムが有界（すなわち、すべての <InlineMath math="k" /> に対して <InlineMath math="\|g_k\| \leq G" /> となる定数 <InlineMath math="G > 0" /> が存在）であると仮定する。ステップサイズ <InlineMath math="\alpha_k > 0" /> が以下の条件を満たすとき、
                </p>
                <BlockMath math="\sum_{k=0}^\infty \alpha_k = \infty, \quad \sum_{k=0}^\infty \alpha_k^2 < \infty"
                />
                <p>
                    アルゴリズムによって生成された点列のこれまでの最良値は最適値 <InlineMath math="f^* = f(x^*)" /> に収束する。
                </p>
                <BlockMath math="\lim_{k \to \infty} \min_{j \leq k} f(x_j) = f^*"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    最適解 <InlineMath math="x^*" /> と現在の点 <InlineMath math="x_{k+1}" /> の距離の二乗を評価する。更新式 <InlineMath math="x_{k+1} = x_k - \alpha_k g_k" /> より、
                </p>
                <BlockMath math="\begin{aligned}
                    \|x_{k+1} - x^*\|^2 &= \|x_k - \alpha_k g_k - x^*\|^2 \\
                    &= \|x_k - x^*\|^2 - 2\alpha_k \langle g_k, x_k - x^* \rangle + \alpha_k^2 \|g_k\|^2.
                \end{aligned}"
                />
                <p>
                    <InlineMath math="g_k \in \partial f(x_k)" /> であるから、劣勾配の定義より
                </p>
                <BlockMath math="\begin{aligned} &f(x^*) \geq f(x_k) + \langle g_k, x^* - x_k \rangle \\ &\quad \implies -\langle g_k, x_k - x^* \rangle \leq -(f(x_k) - f(x^*)). \end{aligned}"
                />
                <p>
                    これを代入して距離の再帰不等式を得る。
                </p>
                <BlockMath math="\|x_{k+1} - x^*\|^2 \leq \|x_k - x^*\|^2 - 2\alpha_k(f(x_k) - f^*) + \alpha_k^2\|g_k\|^2."
                />
                <p>
                    この不等式を <InlineMath math="j=0, \dots, k" /> について加え合わせる（テレスコープ和）。
                </p>
                <BlockMath math="\begin{aligned} &\|x_{k+1} - x^*\|^2 \\ &\leq \|x_0 - x^*\|^2 - 2\sum_{j=0}^k \alpha_j(f(x_j) - f^*) + \sum_{j=0}^k \alpha_j^2\|g_j\|^2. \end{aligned}"
                />
                <p>
                    <InlineMath math="\|x_{k+1} - x^*\|^2 \geq 0" /> であり、<InlineMath math="\|g_j\| \leq G" /> より、
                </p>
                <BlockMath math="2\sum_{j=0}^k \alpha_j(f(x_j) - f^*) \leq \|x_0 - x^*\|^2 + G^2 \sum_{j=0}^k \alpha_j^2."
                />
                <p>
                    <InlineMath math="f_{best}^{(k)} = \min_{j \leq k} f(x_j)" /> とおくと、<InlineMath math="f(x_j) - f^* \geq f_{best}^{(k)} - f^*" /> なので、
                </p>
                <BlockMath math="2(f_{best}^{(k)} - f^*) \sum_{j=0}^k \alpha_j \leq \|x_0 - x^*\|^2 + G^2 \sum_{j=0}^k \alpha_j^2."
                />
                <BlockMath math="f_{best}^{(k)} - f^* \leq \frac{\|x_0 - x^*\|^2 + G^2 \sum_{j=0}^k \alpha_j^2}{2 \sum_{j=0}^k \alpha_j}."
                />
                <p>
                    仮定より <InlineMath math="\sum \alpha_j = \infty" /> かつ <InlineMath math="\sum \alpha_j^2 < \infty" /> なので、<InlineMath math="k \to \infty" /> のとき右辺は <InlineMath math="0" /> に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束速度の評価</h2>

            <p>
                ステップサイズを適切に選ぶことで、劣勾配法がどの程度の速さで最適解に近づくか（収束速度）を評価することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (固定ステップサイズにおける収束速度)">
                <p>
                    一定のステップサイズ <InlineMath math="\alpha_k = \alpha = \frac{R}{G\sqrt{k+1}}" /> （ここで <InlineMath math="R = \|x_0 - x^*\|" /> は初期点と最適解の距離の上界）を用いた場合、<InlineMath math="k" /> 回の反復後の最良値について以下の評価が成り立つ。
                </p>
                <BlockMath math="\min_{j \leq k}f(x_j) - f^* \leq \frac{RG}{\sqrt{k+1}} = O(1/\sqrt{k})"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Proposition 7.4-1 の証明で導出した不等式
                </p>
                <BlockMath math="f_{best}^{(k)} - f^* \leq \frac{\|x_0 - x^*\|^2 + G^2 \sum_{j=0}^k \alpha_j^2}{2 \sum_{j=0}^k \alpha_j}"
                />
                <p>
                    において、<InlineMath math="\alpha_j = \alpha" /> を代入すると、<InlineMath math="\sum_{j=0}^k \alpha_j = (k+1)\alpha" />、<InlineMath math="\sum_{j=0}^k \alpha_j^2 = (k+1)\alpha^2" /> となる。
                </p>
                <BlockMath math="f_{best}^{(k)} - f^* \leq \frac{R^2 + G^2 (k+1)\alpha^2}{2(k+1)\alpha} = \frac{R^2}{2(k+1)\alpha} + \frac{G^2 \alpha}{2}."
                />
                <p>
                    右辺を <InlineMath math="\alpha" /> の関数として最小化する。<InlineMath math="\alpha = \frac{R}{G\sqrt{k+1}}" /> を代入すると、
                </p>
                <BlockMath math="\begin{aligned} f_{best}^{(k)} - f^* &\leq \frac{R^2}{2(k+1) \frac{R}{G\sqrt{k+1}}} + \frac{G^2}{2} \frac{R}{G\sqrt{k+1}} \\ &= \frac{RG}{2\sqrt{k+1}} + \frac{RG}{2\sqrt{k+1}} = \frac{RG}{\sqrt{k+1}}. \end{aligned}"
                />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から、非平滑な関数に対して最適解に近づく具体的なステップサイズの設定と、その反復ごとの振る舞いを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.4-1">
                <p>
                    関数 <InlineMath math="f(x) = |x|" /> を最小化する問題を考える。最適解は明らかに <InlineMath math="x^* = 0" /> であり、<InlineMath math="f^* = 0" /> である。初期点を <InlineMath math="x_0 = 5" /> とし、ステップサイズを <InlineMath math="\alpha_k = 1/\sqrt{k+1}" /> とする。<InlineMath math="x \neq 0" /> における劣勾配は <InlineMath math="g = \mathrm{sign}(x)" /> である。
                </p>
                <p>
                    最初の数ステップの計算を行う：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <InlineMath math="k=0" />: <InlineMath math="x_0 = 5" />. <InlineMath math="g_0 = \mathrm{sign}(5) = 1" />. <InlineMath math="\alpha_0 = 1/\sqrt{1} = 1" />. <br />
                        <InlineMath math="x_1 = 5 - 1 \cdot 1 = 4" />. <InlineMath math="f(x_1) = 4" />.
                    </li>
                    <li>
                        <InlineMath math="k=1" />: <InlineMath math="x_1 = 4" />. <InlineMath math="g_1 = 1" />. <InlineMath math="\alpha_1 = 1/\sqrt{2} \approx 0.707" />. <br />
                        <InlineMath math="x_2 = 4 - 0.707 \approx 3.293" />. <InlineMath math="f(x_2) \approx 3.293" />.
                    </li>
                    <li>
                        <InlineMath math="k=2" />: <InlineMath math="x_2 \approx 3.293" />. <InlineMath math="g_2 = 1" />. <InlineMath math="\alpha_2 = 1/\sqrt{3} \approx 0.577" />. <br />
                        <InlineMath math="x_3 \approx 3.293 - 0.577 = 2.716" />.
                    </li>
                </ul>
                <p>
                    このように、原点に向かって着実に進んでいることがわかる。ただし、原点を行き過ぎた後は符号が反転し、振動しながら収束していく。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="情報理論的下界と収束速度の意味">
                <p>
                    劣勾配法の収束速度 <InlineMath math="O(1/\sqrt{k})" /> は、滑らかな凸関数に対する勾配法の収束速度 <InlineMath math="O(1/k)" /> に比べて非常に遅いです。しかし、これはアルゴリズムの欠陥ではなく、<b>非平滑な凸最適化問題における情報理論的な限界</b>を達成している最善の速度であることが知られています。関数値とその劣勾配のみしか利用できない（一次の手法）場合、どのようなアルゴリズムであっても <InlineMath math="O(1/\sqrt{k})" /> より速く収束させることは一般には不可能です。より高速な収束を得るためには、関数の構造（例えば §7.5 で学ぶ近接作用素の利用）を活用する必要があります。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>劣勾配法は、非平滑凸関数に対する勾配降下法の自然な拡張である。</li>
                    <li>劣勾配の方向は必ずしも降下方向ではないため、関数値は単調には減少しない。</li>
                    <li>収束にはステップサイズ <InlineMath math="\alpha_k" /> が <InlineMath math="\sum \alpha_k = \infty" /> かつ <InlineMath math="\sum \alpha_k^2 < \infty" /> を満たすように徐々に小さくする必要がある。</li>
                    <li>適切なステップサイズの下で、劣勾配法の収束速度は <InlineMath math="O(1/\sqrt{k})" /> となり、これは非平滑凸最適化の理論的限界に等しい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
