import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiEllipticFunctionsApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、これまで学んできたヤコビの楕円関数が、物理学や微分方程式の具体的な問題においてどのように応用されるかを見ていきます。とくに、古典力学における単振り子の厳密解や、非線形波動を記述する微分方程式の解としての役割に焦点を当てます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">振り子の周期</h2>

            <p>
                Chapter 1 (§1.1) において、単振り子の運動方程式が初等関数では解けず、その周期が楕円積分を用いて表されることを見ました。ヤコビの楕円関数を用いることで、この振り子の運動方程式の厳密な解を時間の関数として陽に書き下すことができます。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (単振り子の厳密解)">
                <p>
                    長さ <InlineMath math="l" /> の糸の先に質量 <InlineMath math="m" /> の質点が吊るされた単振り子を考えます。鉛直下向きからの角度を <InlineMath math="\theta" /> とすると、運動方程式は以下で与えられます。
                </p>
                <BlockMath math="\ddot{\theta} = -\frac{g}{l}\sin\theta" />
                <p>
                    初期条件として、時刻 <InlineMath math="t=0" /> において最大振幅 <InlineMath math="\theta(0) = \alpha" />、初期角速度 <InlineMath math="\dot{\theta}(0) = 0" /> とします。エネルギー積分を行うと、
                </p>
                <BlockMath math="\frac{1}{2}\dot{\theta}^2 - \frac{g}{l}\cos\theta = -\frac{g}{l}\cos\alpha" />
                <p>
                    ここで、半角の公式 <InlineMath math="\cos\theta = 1 - 2\sin^2(\theta/2)" /> を用い、変数変換 <InlineMath math="\sin(\theta/2) = k\sin\varphi" /> を行います。ただし、母数 <InlineMath math="k" /> は <InlineMath math="k = \sin(\alpha/2)" /> で定義します。
                    この変換により、運動方程式はヤコビの楕円関数の定義式に帰着され、以下の厳密解が得られます。
                </p>
                <BlockMath math="\theta(t) = 2\arcsin\left(k\,\text{sn}\left(\sqrt{\frac{g}{l}}\,t,\, k\right)\right)" />
            </ContentBox>

            <p>
                この結果から、振り子の角度 <InlineMath math="\theta" /> はヤコビの <InlineMath math="\text{sn}" /> 関数を通じて時間に対して周期的に変化することが明確にわかります。次に、この厳密解に基づく周期と、よく知られた小振幅近似による周期との比較を行います。
            </p>

            <ContentBox type="example" title="Example 7.4-2 (振り子の厳密周期と近似周期の比較)">
                <p>
                    厳密解から、単振り子の周期 <InlineMath math="T" /> は第一種完全楕円積分 <InlineMath math="K(k)" /> を用いて次のように表されます。
                </p>
                <BlockMath math="T = 4K(k)\sqrt{\frac{l}{g}}" />
                <p>
                    振幅が非常に小さい（<InlineMath math="\alpha \ll 1" />）とき、<InlineMath math="k \approx 0" /> となり <InlineMath math="K(0) = \pi/2" /> であるため、近似周期 <InlineMath math="T_0 = 2\pi\sqrt{l/g}" /> に帰着します。
                    振幅 <InlineMath math="\alpha" /> が大きくなると、厳密周期 <InlineMath math="T" /> は <InlineMath math="T_0" /> からずれ始めます。具体的に計算すると以下のようになります。
                </p>
                <ul>
                    <li><InlineMath math="\alpha = \pi/6" />（30度）のとき：<InlineMath math="k = \sin(\pi/12) \approx 0.2588" /> であり、<InlineMath math="K(k) \approx 1.596" />。したがって <InlineMath math="T / T_0 = 2K(k)/\pi \approx 1.017" />。約1.7%のずれが生じます。</li>
                    <li><InlineMath math="\alpha = \pi/2" />（90度）のとき：<InlineMath math="k = \sin(\pi/4) = 1/\sqrt{2} \approx 0.707" /> であり、<InlineMath math="K(k) \approx 1.854" />。したがって <InlineMath math="T / T_0 \approx 1.180" />。約18%も周期が長くなります。</li>
                </ul>
            </ContentBox>

            <p>
                このように、振幅が大きくなるにつれて振り子の動きは「ゆっくり」になり、楕円積分による厳密な取り扱いが不可欠になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非線形微分方程式の求積</h2>

            <p>
                楕円関数は単なる積分計算の道具にとどまらず、さまざまな非線形微分方程式の厳密解（解析解）を与える強力な手段でもあります。ここでは代表的な物理方程式を二つ紹介します。
            </p>

            <ContentBox type="example" title="Example 7.4-3 (ダフィング方程式)">
                <p>
                    非線形振動子を記述するダフィング方程式を考えます。
                </p>
                <BlockMath math="\ddot{x} + x + \varepsilon x^3 = 0" />
                <p>
                    この方程式はエネルギー保存則 <InlineMath math="\frac{1}{2}\dot{x}^2 + \frac{1}{2}x^2 + \frac{\varepsilon}{4}x^4 = E" />（<InlineMath math="E" /> は定数）を持ちます。この式は楕円積分の定義式と同じ形をしており、初期条件を適切に選ぶことで、その解はヤコビの楕円関数 <InlineMath math="\text{cn}" /> を用いて次のように表すことができます。
                </p>
                <BlockMath math="x(t) = A\,\text{cn}(\omega t, k)" />
                <p>
                    ここで、振幅 <InlineMath math="A" />、角振動数 <InlineMath math="\omega" />、および母数 <InlineMath math="k" /> は非線形パラメータ <InlineMath math="\varepsilon" /> とエネルギー <InlineMath math="E" /> に依存して決定されます。
                </p>
            </ContentBox>

            <p>
                常微分方程式だけでなく、偏微分方程式の進行波解（ソリトン）を求める際にも楕円関数が現れます。
            </p>

            <ContentBox type="example" title="Example 7.4-4 (KdV方程式の進行波解)">
                <p>
                    浅水波などの非線形波動を記述するKorteweg-de Vries (KdV) 方程式は次のように書かれます。
                </p>
                <BlockMath math="\frac{\partial u}{\partial t} + 6u\frac{\partial u}{\partial x} + \frac{\partial^3 u}{\partial x^3} = 0" />
                <p>
                    この方程式に対し、形を変えずに一定の速度 <InlineMath math="c" /> で進む進行波解 <InlineMath math="u(x,t) = f(x - ct)" /> を仮定し、<InlineMath math="\xi = x - ct" /> とおいて代入すると、<InlineMath math="f(\xi)" /> に関する常微分方程式が得られます。これを2回積分すると、ワイエルシュトラスの <InlineMath math="\wp" /> 関数の微分方程式 <InlineMath math="(\wp')^2 = 4\wp^3 - g_2\wp - g_3" /> に帰着され、以下の形の厳密解が得られます。
                </p>
                <BlockMath math="u(x,t) = -2\wp(x - ct - x_0) + C" />
                <p>
                    この解は周期的な波（クノイダル波と呼ばれます）を表し、周期が無限大になる極限（<InlineMath math="k \to 1" />）をとることで、孤立波（ソリトン）解が得られます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="微分方程式と楕円関数の深い関係">
                <p>
                    これまでの例で見たように、楕円関数は非線形積分可能系の解法において中心的な役割を果たします。あるクラスの非線形微分方程式の解が楕円関数やその拡張であるアーベル関数で表されるという事実は、これらの関数がもつ代数的な付加構造（加法定理など）と微分方程式の対称性が深く結びついていることを示しています。このように、楕円関数論は純粋数学のみならず、数理物理学や工学への応用という豊かな側面を持っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>単振り子の運動方程式の厳密解は、ヤコビの楕円関数 <InlineMath math="\text{sn}" /> を用いて表される。</li>
                    <li>振り子の厳密な周期は完全楕円積分 <InlineMath math="K(k)" /> で与えられ、振幅が大きくなるにつれて小振幅近似とのずれが顕著になる。</li>
                    <li>ダフィング方程式のような非線形常微分方程式の解も、楕円関数 <InlineMath math="\text{cn}" /> などを用いて厳密に構成できる。</li>
                    <li>KdV方程式のような非線形偏微分方程式の進行波解は、ワイエルシュトラスの <InlineMath math="\wp" /> 関数を通じて記述される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
