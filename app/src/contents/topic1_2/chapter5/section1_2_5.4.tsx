import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ChainRuleMultivariable() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数関数の微分の計算において「合成関数の微分（連鎖律）」は非常に重要な公式でした。<br />
                多変数関数においても変数が他の変数（媒介変数）の関数になっているような「合成関数」を微分する場面が頻繁に現れます。
                本節では、多変数における<strong>複雑な変数の依存関係</strong>を整理しながら微分する<strong>連鎖律 (Chain Rule)</strong> について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 多変数の連鎖律
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">合成関数の微分（連鎖律）</h2>

            <p>
                いくつかケースがありますが、最も代表的なパターンを theorems として紹介します。
            </p>

            <ContentBox type="theorem" title="Theorem 5.4-1 （多変数関数の連鎖律）">
                <p>
                    <strong>パターン1（1つのパラメータで動く）：</strong><br />
                    関数 <InlineMath math="z = f(x, y)" /> において、<InlineMath math="x = x(t), y = y(t)" /> がともに <InlineMath math="t" /> の微分可能な関数であるとする。
                    このとき合成関数 <InlineMath math="z = f(x(t), y(t))" /> は <InlineMath math="t" /> の関数となり、その全微分は以下で与えられる：
                </p>
                <BlockMath math="\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}" />

                <p className="mt-4">
                    <strong>パターン2（2つのパラメータで動く変数変換）：</strong><br />
                    関数 <InlineMath math="z = f(x, y)" /> において、<InlineMath math="x = x(u, v), y = y(u, v)" /> がともに <InlineMath math="u, v" /> の微分可能な関数であるとする。
                    このとき合成関数 <InlineMath math="z = f(x(u,v), y(u,v))" /> は <InlineMath math="u, v" /> の関数であり、偏導関数は以下で与えられる：
                </p>
                <BlockMath math="\frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u}" />
                <BlockMath math="\frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial v}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （連鎖律の概略）">
                <p>
                    全微分の定義（前節 Definition 5.3-1）から直ちに導かれます。
                    <InlineMath math="z = f(x, y)" /> の全微分の式：
                </p>
                <BlockMath math="\Delta z \approx \frac{\partial z}{\partial x}\Delta x + \frac{\partial z}{\partial y}\Delta y" />
                <p>
                    この両辺を <InlineMath math="\Delta t" /> で割り、極限 <InlineMath math="\Delta t \to 0" /> をとることで、
                </p>
                <BlockMath math="\frac{\Delta z}{\Delta t} \approx \frac{\partial z}{\partial x}\frac{\Delta x}{\Delta t} + \frac{\partial z}{\partial y}\frac{\Delta y}{\Delta t} \implies \frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}" />
                <p>
                    というように「経由するすべての経路（<InlineMath math="x" /> を経由するルートと <InlineMath math="y" /> を経由するルート）の微分の積を足し合わせる」という形になります。<br />
                    <InlineMath math="u, v" /> の場合も全く同様に、<InlineMath math="\Delta u" /> で割ることで得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-1 （連鎖律を用いた微分）">
                <p>
                    関数 <InlineMath math="z = x^2 y" /> において、<InlineMath math="x = \cos t, y = \sin t" /> であるとき、連鎖律を用いて <InlineMath math="\displaystyle \frac{dz}{dt}" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    偏微分および各変数の微分は以下のようになる：
                </p>
                <BlockMath math="\frac{\partial z}{\partial x} = 2xy, \quad \frac{\partial z}{\partial y} = x^2" />
                <BlockMath math="\frac{dx}{dt} = -\sin t, \quad \frac{dy}{dt} = \cos t" />
                <p>
                    パターン1の連鎖律の公式に代入すると：
                </p>
                <BlockMath math="\begin{aligned} \frac{dz}{dt} &= \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt} \\ &= (2xy)(-\sin t) + (x^2)(\cos t) \\ &= -2x y \sin t + x^2 \cos t \end{aligned}" />
                <p>最後に <InlineMath math="x, y" /> を <InlineMath math="t" /> の式で置き換えると：</p>
                <BlockMath math="\frac{dz}{dt} = -2\cos t \sin^2 t + \cos^3 t" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 最初に <InlineMath math="z = (\cos t)^2 (\sin t)" /> と代入してから <InlineMath math="t" /> で微分しても同じ結果が得られますが、複雑な関数の場合は連鎖律を用いると計算が整理されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 変数変換と偏微分の変換則
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">変数変換による偏微分の変換則</h2>

            <p>
                連鎖律（パターン2）を応用することで、座標系（例えば直交座標から極座標へ）を変換した際に、微分演算子がどのように置き換わるかを知ることができます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1 （極座標変換と偏微分の変換則）">
                <p>
                    直交座標 <InlineMath math="(x,y)" /> を極座標 <InlineMath math="(r, \theta)" /> に変数変換する：
                </p>
                <BlockMath math="x = r \cos \theta, \quad y = r \sin \theta" />
                <p>
                    任意の関数 <InlineMath math="z = f(x,y)" /> を <InlineMath math="r, \theta" /> で微分すると、
                </p>
                <BlockMath math="\frac{\partial z}{\partial r} = \cos\theta \frac{\partial z}{\partial x} + \sin\theta \frac{\partial z}{\partial y}" />
                <BlockMath math="\frac{\partial z}{\partial \theta} = -r\sin\theta \frac{\partial z}{\partial x} + r\cos\theta \frac{\partial z}{\partial y}" />
                <p>
                    となる。（連鎖律の公式に、<InlineMath math="\frac{\partial x}{\partial r} = \cos\theta" /> などを代入したもの）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 陰関数の微分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">陰関数定理（連鎖律の応用）</h2>

            <p>
                連鎖律を用いると、1変数関数のところで学んだ「陰関数 <InlineMath math="F(x,y) = 0" /> の微分」を、より簡潔で明快な公式として定式化できます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-2 （陰関数の微分公式）">
                <p>
                    2変数関数 <InlineMath math="F(x, y)" /> が与えられ、方程式 <InlineMath math="F(x, y) = 0" /> によって <InlineMath math="y" /> が <InlineMath math="x" /> の関数（陰関数）として定義されているとする。<br />
                    このとき、<InlineMath math="F_y \neq 0" /> の条件のもとで、陰関数の導関数は次のように表される。
                </p>
                <BlockMath math="\frac{dy}{dx} = -\frac{F_x(x,y)}{F_y(x,y)}" />
                <p className="text-sm">※ <InlineMath math="F_x" /> は <InlineMath math="\frac{\partial F}{\partial x}" />、<InlineMath math="F_y" /> は <InlineMath math="\frac{\partial F}{\partial y}" />。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （陰関数微分の証明）">
                <p>
                    方程式 <InlineMath math="F(x, y) = 0" /> の両辺を <InlineMath math="x" /> で微分（全微分）します。
                    <InlineMath math="y" /> も <InlineMath math="x" /> の関数であることに注意して連鎖律を適用すると：
                </p>
                <BlockMath math="\frac{d}{dx} F(x, y(x)) = \frac{\partial F}{\partial x} \frac{dx}{dx} + \frac{\partial F}{\partial y} \frac{dy}{dx} = F_x \cdot 1 + F_y \cdot \frac{dy}{dx} = 0" />
                <p>
                    右辺の微分は <InlineMath math="0" /> のままです。<br />
                    この式を <InlineMath math="\displaystyle \frac{dy}{dx}" /> について解く（<InlineMath math="F_x" /> を移項して <InlineMath math="F_y" /> で割る）と、
                </p>
                <BlockMath math="\frac{dy}{dx} = -\frac{F_x}{F_y}" />
                <p>が直ちに得られます。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-2 （陰関数の微分の計算）">
                <p>
                    円の方程式 <InlineMath math="F(x,y) = x^2 + y^2 - R^2 = 0" /> で定められる陰関数による導関数 <InlineMath math="y'" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    偏微分をそれぞれ計算する。<br />
                    <InlineMath math="F_x = 2x" />、<InlineMath math="F_y = 2y" />。<br />
                    公式に代入すると、
                </p>
                <BlockMath math="\frac{dy}{dx} = -\frac{2x}{2y} = -\frac{x}{y}" />
                <p>となり、1変数関数のときに合成関数の微分を使った計算結果と一致する。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数関数の合成関数の微分は、<strong>経由するすべての変数の微分の積の和</strong>となる（連鎖律, Theorem 5.4-1）。</li>
                    <li>連鎖律を使って、直交座標から極座標等に変換したときの微分の置き換え式を導出できる（Proposition 5.4-1）。</li>
                    <li>陰関数 <InlineMath math="F(x,y)=0" /> の微分は、多変数の連鎖律を用いることで <InlineMath math="y' = -F_x / F_y" /> と簡潔に公式化できる（Proposition 5.4-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
