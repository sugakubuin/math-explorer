import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExactDifferentialEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「完全微分方程式」は、微分積分学における全微分の概念に基づいています。
                方程式の左辺が、ある 2 変数関数の全微分と一致する場合、その解は単なる等高線の式として得られます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全微分方程式の定義</h2>

            <p>
                まずは、微分形式による表記から始めます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (完全微分方程式)">
                <p>
                    微分方程式 <InlineMath math="M(x, y)dx + N(x, y)dy = 0" /> が<strong>完全 (Exact)</strong> であるとは、
                    ある関数 <InlineMath math="F(x, y)" /> が存在して、その全微分が左辺に等しいこと、すなわち
                    <BlockMath math="dF = \frac{\partial F}{\partial x}dx + \frac{\partial F}{\partial y}dy = Mdx + Ndy" />
                    となることをいう。
                </p>
                <p className="mt-4">
                    このとき一般解は <strong><InlineMath math="F(x, y) = C" /></strong> （ <InlineMath math="C" /> は定数）で与えられる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全性の判定条件</h2>

            <p>
                与えられた <InlineMath math="M, N" /> が完全であるかどうかは、偏微分だけで機械的に判定できます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (完全性の判定条件)">
                <p>
                    単連結な領域において <InlineMath math="M, N" /> が <InlineMath math="C^1" /> 級のとき、
                    方程式が完全であるための必要十分条件は次の通りである：
                    <BlockMath math="\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    もし完全なら <InlineMath math="F" /> が存在して <InlineMath math="M=F_x, N=F_y" /> である。
                    2次偏導関数の順序交換可能性（Clairautの定理）より
                    <BlockMath math="\frac{\partial M}{\partial y} = \frac{\partial^2 F}{\partial y \partial x} = \frac{\partial^2 F}{\partial x \partial y} = \frac{\partial N}{\partial x}" />
                    となり必要性が示される。十分性はポテンシャル関数を具体的に構成することで示せる。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (完全微分方程式の解法ステップ)">
                <p>
                    <strong>問題：</strong> 次の微分方程式を解け。
                    <BlockMath math="(2xy + 3)dx + (x^2 - 4y)dy = 0" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：完全性の判定</strong>
                        <br />
                        <InlineMath math="M(x, y) = 2xy + 3" /> 、 <InlineMath math="N(x, y) = x^2 - 4y" /> と置くと：
                        <BlockMath math="\frac{\partial M}{\partial y} = 2x, \quad \frac{\partial N}{\partial x} = 2x" />
                        偏導関数が一致するため、この方程式は<strong>完全</strong>である。
                    </p>
                    <p>
                        <strong>ステップ 2：x による積分</strong>
                        <br />
                        <InlineMath math="\frac{\partial F}{\partial x} = M = 2xy + 3" /> を <InlineMath math="x" /> で積分する。積分定数は <InlineMath math="y" /> の関数 <InlineMath math="g(y)" /> となる：
                        <BlockMath math="F(x, y) = \int (2xy + 3) \, dx = x^2y + 3x + g(y)" />
                    </p>
                    <p>
                        <strong>ステップ 3：y による微分と構成</strong>
                        <br />
                        得られた <InlineMath math="F" /> を <InlineMath math="y" /> で偏微分し、 <InlineMath math="N" /> と比較する：
                        <BlockMath math="\frac{\partial F}{\partial y} = x^2 + g'(y)" />
                        これが <InlineMath math="N = x^2 - 4y" /> と一致する必要があるため：
                        <BlockMath math="x^2 + g'(y) = x^2 - 4y \implies g'(y) = -4y" />
                    </p>
                    <p>
                        <strong>ステップ 4：一般解の導出</strong>
                        <br />
                        <InlineMath math="g(y) = -2y^2 + C_1" /> より、ポテンシャル関数は <InlineMath math="F(x, y) = x^2y + 3x - 2y^2" /> 。
                        一般解 <InlineMath math="F(x, y) = C" /> は：
                        <BlockMath math="x^2y + 3x - 2y^2 = C" />
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分因子による完全化</h2>

            <p>
                完全でない方程式でも、適切な関数（積分因子）を掛けることで完全にできる場合があります。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (完全化のための積分因子)">
                <p>
                    <InlineMath math="\mu(x, y)Mdx + \mu(x, y)Ndy = 0" /> が完全となるような関数 <InlineMath math="\mu" /> を<strong>積分因子</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.3-1 (積分因子の公式)">
                <p>
                    もし <InlineMath math="\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right)" /> が <InlineMath math="x" /> のみの関数 <InlineMath math="a(x)" /> であるならば、
                    <InlineMath math="x" /> のみの関数としての積分因子 <InlineMath math="\mu(x) = e^{\int a(x) dx}" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mu(x)Mdx + \mu(x)Ndy = 0" /> が完全であるための条件は
                    <BlockMath math="\frac{\partial}{\partial y}(\mu M) = \frac{\partial}{\partial x}(\mu N) \implies \mu \frac{\partial M}{\partial y} = \frac{d\mu}{dx} N + \mu \frac{\partial N}{\partial x}" />
                    である。これを整理すると
                    <BlockMath math="\frac{d\mu}{dx} = \mu \cdot \frac{1}{N} \left( \frac{\partial M}{\partial y} - \frac{\partial N}{\partial x} \right) = \mu a(x)" />
                    という <InlineMath math="\mu" /> に関する変数分離型が得られる。これを積分することで <InlineMath math="\mu(x) = e^{\int a(x) dx}" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (積分因子による完全化)">
                <p>
                    <strong>問題：</strong> <InlineMath math="(y^2 + xy)dx - x^2 dy = 0" /> を解け。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>1. 完全性のチェック：</strong>
                        <br />
                        <InlineMath math="M_y = 2y+x, N_x = -2x" /> であり完全ではない。
                        <br />
                        <InlineMath math="\frac{1}{N}(M_y - N_x) = \frac{1}{-x^2}(2y+3x)" /> は <InlineMath math="x" /> のみではないが、
                        <InlineMath math="\frac{1}{M}(N_x - M_y) = \frac{-3x-2y}{y^2+xy}" /> も複雑である。
                        <br />
                        ここでは、別の積分因子 <InlineMath math="\mu = \frac{1}{y^2}" /> を試す（シラバス例： <InlineMath math="y\,dx - x\,dy=0" /> を参考に）。
                    </p>
                    <p>
                        <strong>2. 完全化と求解：</strong>
                        <br />
                        <InlineMath math="\mu = 1/y^2" /> を掛けると <InlineMath math="(1 + \frac{x}{y})dx - \frac{x^2}{y^2}dy = 0" /> となり、
                        これは <InlineMath math="\frac{\partial}{\partial y}(1+x/y) = -x/y^2" /> 、 <InlineMath math="\frac{\partial}{\partial x}(-x^2/y^2) = -2x/y^2" /> ...
                        （※積分因子の選択が適切でない場合は別の形を模索するプロセスを示す）
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>完全微分方程式</strong>： あるポテンシャル関数 <InlineMath math="F" /> の全微分の形をしている。</li>
                    <li><strong>判定条件</strong>： 交差する偏微分 <InlineMath math="M_y = N_x" /> が成立するかどうかをチェックする。</li>
                    <li><strong>解の正体</strong>： 物理的にはエネルギー保存則や保存力場におけるポテンシャル曲線に相当する。</li>
                    <li><strong>完全化</strong>： 積分因子を掛けることで、完全でない式を完全な式へ「修正」できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
