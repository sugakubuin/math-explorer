import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VariableSeparableEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分方程式とは、未知関数とその導関数を含む方程式のことです。
                物理学、工学、生物学など、あらゆる科学分野において、現象の変化のルールを記述するための基本的な道具として用いられます。
                本節では、最も基本的かつ強力な解法の一つである「変数分離形」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">常微分方程式の導入</h2>

            <p>
                まず、私たちがこれから扱う対象を厳密に定義し、用語を整理します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (常微分方程式と解)">
                <p>
                    未知関数 <InlineMath math="y(x)" /> とその導関数 <InlineMath math="y', y'', \dots" /> を含む方程式を<strong>常微分方程式 (Ordinary Differential Equation, ODE)</strong> と呼ぶ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li><strong>一般解 (General solution)</strong>： 任意定数（積分定数）を含む解の族。</li>
                    <li><strong>特殊解 (Particular solution)</strong>： 初期条件などによって任意定数を決定した個別の解。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="常微分と偏微分">
                <p>
                    未知関数が多変数の場合の方程式は「偏微分方程式 (PDE)」と呼ばれます。本トピックでは、独立変数が 1 つの「常微分方程式」に焦点を当てます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変数分離形の定義と解法</h2>

            <p>
                関数が「 <InlineMath math="x" /> のみの部分」と「 <InlineMath math="y" /> のみの部分」の積に分解できる形を考えます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (変数分離形)">
                <p>
                    常微分方程式が
                    <BlockMath math="\frac{dy}{dx} = f(x)g(y)" />
                    の形に書けるとき、これを<strong>変数分離形 (Separable ODE)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                この形の方程式は、両辺を「分離」して積分することで直接解くことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 (変数分離形の一般解)">
                <p>
                    変数分離形の方程式において、 <InlineMath math="g(y) \neq 0" /> のとき、その一般解は次のように与えられる：
                    <BlockMath math="\int \frac{dy}{g(y)} = \int f(x) \, dx + C" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    与式 <InlineMath math="\frac{1}{g(y)} \frac{dy}{dx} = f(x)" /> の両辺を <InlineMath math="x" /> で積分すると、置換積分の公式より
                    <BlockMath math="\int \frac{1}{g(y)} \frac{dy}{dx} dx = \int f(x) dx + C \implies \int \frac{dy}{g(y)} = \int f(x) dx + C" />
                    を得る。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例と応用</h2>

            <ContentBox type="example" title="Example 1.1-1 (指数成長・減少モデル)">
                <p>
                    <strong>問題：</strong> 次の微分方程式の一般解を求めよ。
                    <BlockMath math="\frac{dy}{dt} = ky \quad (k: \text{定数}, y > 0)" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：変数の分離</strong>
                        <br />
                        両辺を <InlineMath math="y" /> で割り、 <InlineMath math="dt" /> を掛けると、変数ごとに分離される：
                        <BlockMath math="\frac{1}{y} \, dy = k \, dt" />
                    </p>
                    <p>
                        <strong>ステップ 2：両辺の積分</strong>
                        <br />
                        それぞれ積分を行う：
                        <BlockMath math="\int \frac{1}{y} \, dy = \int k \, dt \implies \ln y = kt + C_1" />
                        （ここで <InlineMath math="C_1" /> は積分定数）
                    </p>
                    <p>
                        <strong>ステップ 3：y について解く</strong>
                        <br />
                        対数の定義より：
                        <BlockMath math="y = e^{kt + C_1} = e^{C_1} \cdot e^{kt}" />
                        <InlineMath math="e^{C_1}" /> を改めて定数 <InlineMath math="C" /> と置くと、一般解が得られる：
                        <BlockMath math="y(t) = Ce^{kt}" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (初期値問題：IVP)">
                <p>
                    <strong>問題：</strong> 次の初期値問題を解け。
                    <BlockMath math="\frac{dy}{dx} = -\frac{x}{y}, \quad y(3) = 4" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：分離と積分</strong>
                        <br />
                        <InlineMath math="y \, dy = -x \, dx" /> より：
                        <BlockMath math="\int y \, dy = -\int x \, dx \implies \frac{1}{2}y^2 = -\frac{1}{2}x^2 + C_1" />
                        整理すると <InlineMath math="x^2 + y^2 = C" /> （ <InlineMath math="C = 2C_1" /> ）となる。
                    </p>
                    <p>
                        <strong>ステップ 2：初期条件の代入</strong>
                        <br />
                        初期条件 <InlineMath math="x=3, y=4" /> を代入して、定数 <InlineMath math="C" /> を決定する：
                        <BlockMath math="3^2 + 4^2 = C \implies 9 + 16 = C \implies C = 25" />
                    </p>
                    <p>
                        <strong>ステップ 3：最終回答</strong>
                        <br />
                        求める特殊解は：
                        <BlockMath math="x^2 + y^2 = 25" />
                        （幾何学的には、半径 5 の円を表す）
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異解の注意</h2>

            <p>
                変数分離を行う際に <InlineMath math="g(y)" /> で割るため、 <InlineMath math="g(y) = 0" /> を満たす「定数解」が一般解から漏れてしまうことがあります。
            </p>

            <ContentBox type="remark" title="割る前のチェックを忘れずに">
                <p>
                    例えば <InlineMath math="\frac{dy}{dx} = y^2" /> を解く際、 <InlineMath math="y \neq 0" /> を仮定して解くと <InlineMath math="y = \frac{1}{C-x}" /> を得ますが、
                    もともとの方程式は <InlineMath math="y = 0" /> という解も持っています。
                    このような、積分定数の値をどう選んでも一般解からは得られない解を<strong>特異解 (Singular solution)</strong> と呼ぶことがあります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>常微分方程式</strong>： 未知関数の微分を含む方程式。一般解は積分定数を含む。</li>
                    <li><strong>変数分離形</strong>： <InlineMath math="x" /> と <InlineMath math="y" /> の式を左右に分けて積分できる形。</li>
                    <li><strong>応用</strong>： 指数成長モデルなどは最も基本的な自然現象の記述。</li>
                    <li><strong>注意点</strong>： 割る操作（分母が 0 になる点）が特異解を生む可能性がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
