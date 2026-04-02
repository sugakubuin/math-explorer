import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstOrderLinearEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「1階線形方程式」は、未知関数とその導関数が 1 次の形（線形）で現れる方程式です。
                この形の方程式には万能な公式が存在し、あらゆる積分可能な係数に対して厳密解を求めることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1階線形方程式の定義</h2>

            <p>
                まずは方程式の標準的な形を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (1階線形常微分方程式)">
                <p>
                    次の形の方程式を<strong>1階線形常微分方程式</strong>と呼ぶ：
                    <BlockMath math="\frac{dy}{dx} + P(x)y = Q(x)" />
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="Q(x) = 0" /> のとき：<strong>斉次 (Homogeneous)</strong> 方程式</li>
                    <li><InlineMath math="Q(x) \neq 0" /> のとき：<strong>非斉次 (Non-homogeneous)</strong> 方程式</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分因子による解法</h2>

            <p>
                非斉次方程式を解くための強力な手法が「積分因子」の導入です。左辺を積の微分の形へ強制的に変換します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-1 (積分因子と一般解)">
                <p>
                    方程式 <InlineMath math="y' + P(x)y = Q(x)" /> に対して、<strong>積分因子 (Integrating factor)</strong>
                    <BlockMath math="\mu(x) = e^{\int P(x) \, dx}" />
                    を両辺に掛けると、一般解は次のように与えられる：
                    <BlockMath math="y = e^{-\int P(x) \, dx} \left( \int Q(x) e^{\int P(x) \, dx} \, dx + C \right)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mu(x) = e^{\int P(x) \, dx}" /> と置くと、その微分は <InlineMath math="\mu'(x) = P(x)\mu(x)" /> である。
                    方程式の両辺に <InlineMath math="\mu(x)" /> を掛けると
                    <BlockMath math="\mu(x) \frac{dy}{dx} + P(x)\mu(x)y = Q(x)\mu(x)" />
                    左辺は積の微分の公式より <InlineMath math="\frac{d}{dx}(\mu(x)y)" /> と等しい。したがって、
                    <BlockMath math="\frac{d}{dx}(\mu(x)y) = Q(x)\mu(x) \implies \mu(x)y = \int Q(x)\mu(x) \, dx + C" />
                    これを <InlineMath math="y" /> について解けば公式を得る。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1 (1階線形方程式の一般解)">
                <p>
                    <strong>問題：</strong> 次の方程式の一般解を求めよ。
                    <BlockMath math="\frac{dy}{dx} + \frac{2}{x}y = x^2 \quad (x > 0)" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：積分因子の計算</strong>
                        <br />
                        <InlineMath math="P(x) = 2/x" /> であるから、積分因子 <InlineMath math="\mu(x)" /> は：
                        <BlockMath math="\mu(x) = e^{\int \frac{2}{x} \, dx} = e^{2\ln x} = e^{\ln x^2} = x^2" />
                    </p>
                    <p>
                        <strong>ステップ 2：両辺に積分因子を掛ける</strong>
                        <br />
                        方程式に <InlineMath math="x^2" /> を掛けると：
                        <BlockMath math="x^2 \frac{dy}{dx} + 2xy = x^4" />
                        この左辺は <InlineMath math="\frac{d}{dx}(x^2 y)" /> に等しい（積の微分）。
                    </p>
                    <p>
                        <strong>ステップ 3：両辺を積分する</strong>
                        <br />
                        <BlockMath math="\frac{d}{dx}(x^2 y) = x^4 \implies x^2 y = \int x^4 \, dx + C = \frac{1}{5}x^5 + C" />
                    </p>
                    <p>
                        <strong>ステップ 4：一般解の導出</strong>
                        <br />
                        両辺を <InlineMath math="x^2" /> で割ると一般解が得られる：
                        <BlockMath math="y = \frac{1}{5}x^3 + \frac{C}{x^2}" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (物理応用：RC回路)">
                <p>
                    抵抗 <InlineMath math="R" /> とコンデンサ <InlineMath math="C" /> の回路における電荷 <InlineMath math="q(t)" /> の式（初期条件 <InlineMath math="q(0)=0" />）：
                    <BlockMath math="\frac{dq}{dt} + \frac{1}{RC}q = \frac{V}{R}" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>計算過程：</strong>
                        <br />
                        積分因子 <InlineMath math="e^{t/RC}" /> を掛けると：
                        <BlockMath math="\frac{d}{dt}(q e^{t/RC}) = \frac{V}{R}e^{t/RC}" />
                        積分すると：
                        <BlockMath math="q e^{t/RC} = \frac{V}{R} \cdot RC \cdot e^{t/RC} + A = CV e^{t/RC} + A" />
                        <InlineMath math="q = CV + A e^{-t/RC}" /> となり、 <InlineMath math="q(0)=0" /> より <InlineMath math="A = -CV" /> 。
                    </p>
                    <p>
                        <strong>最終的な解：</strong>
                        <BlockMath math="q(t) = CV(1 - e^{-t/RC})" />
                        これは電荷が時間とともに <InlineMath math="CV" /> へ収束していく過程を表します。
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同次形方程式</h2>

            <p>
                右辺が <InlineMath math="y/x" /> のみの関数で表せるタイプも、巧みな変数変換で線形（あるいは変数分離形）に帰着できます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (同次形方程式)">
                <p>
                    微分方程式が
                    <BlockMath math="\frac{dy}{dx} = F\left(\frac{y}{x}\right)" />
                    の形に書けるとき、これを<strong>同次形 (Homogeneous type)</strong> 方程式と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.2-1 (同次形の置換)">
                <p>
                    微分方程式が <InlineMath math="\frac{dy}{dx} = F\left(\frac{y}{x}\right)" /> の形であるとき、
                    <InlineMath math="v = y/x" /> と置くと、方程式は <InlineMath math="v" /> と <InlineMath math="x" /> に関する変数分離形：
                    <BlockMath math="\frac{dv}{F(v) - v} = \frac{dx}{x}" />
                    に帰着する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = vx" /> の両辺を <InlineMath math="x" /> で微分すると、積の微分の公式より
                    <BlockMath math="\frac{dy}{dx} = v \cdot \frac{dx}{dx} + x \cdot \frac{dv}{dx} = v + x\frac{dv}{dx}" />
                    を得る。これを元の方程式に代入すると
                    <BlockMath math="v + x\frac{dv}{dx} = F(v) \implies x\frac{dv}{dx} = F(v) - v" />
                    となる。両辺を分離すると
                    <BlockMath math="\frac{dv}{F(v) - v} = \frac{dx}{x}" />
                    となり、 <InlineMath math="v" /> に関する変数分離形が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>1階線形</strong>： <InlineMath math="y' + Py = Q" /> の形。常に積分因子の公式で解ける。</li>
                    <li><strong>積分因子</strong>： <InlineMath math="e^{\int P dx}" />。これを掛けることで積の微分の形を強制的に作る。</li>
                    <li><strong>実用性</strong>： 電気回路（RC回路）などの線形システム解析の基本。</li>
                    <li><strong>同次形</strong>： <InlineMath math="v = y/x" /> の置換により変数分離形へ持ち込む。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
