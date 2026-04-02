import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatEquationSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                偏微分方程式 (PDE) は、物理現象を数学的に記述するもっとも重要な道具の一つです。これまで学んできた<b>フーリエ変換</b>や<b>ラプラス変換</b>を用いることで、偏微分方程式を常微分方程式や代数方程式に変換し、体系的に解くことが可能になります。
            </p>
            <p>
                本セクションでは、拡散現象を記述する <b>熱方程式</b> を取り上げ、フーリエ変換がいかにして複雑な空間分布の時間発展を解き明かすのかを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ変換による解法とガウス熱核</h2>

            <p>
                無限に長い棒の熱伝導を考えます。空間変数 <InlineMath math="x \in \mathbb{R}" /> と時間変数 <InlineMath math="t > 0" /> における温度分布 <InlineMath math="u(x,t)" /> は、次の熱方程式に従います。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (熱方程式のフーリエ変換による解法)">
                <p>
                    次の初期値問題を考える：
                </p>
                <BlockMath math="\frac{\partial u}{\partial t} = \kappa \frac{\partial^2 u}{\partial x^2}, \quad u(x,0) = f(x)" />
                <p>
                    ここで <InlineMath math="\kappa > 0" /> は熱拡散係数である。空間変数 <InlineMath math="x" /> についてフーリエ変換を施すと、微分法則（§3.1）より <InlineMath math="\partial^2/\partial x^2" /> は <InlineMath math="(i\xi)^2 = -\xi^2" /> の乗算に置き換わり、各周波数 <InlineMath math="\xi" /> ごとの常微分方程式 (ODE) が得られる：
                </p>
                <BlockMath math="\frac{d \hat{u}(\xi,t)}{dt} = -\kappa \xi^2 \hat{u}(\xi,t)" />
                <p>
                    この ODE の解は、初期値 <InlineMath math="\hat{u}(\xi,0) = \hat{f}(\xi)" /> を用いて次のように書ける：
                </p>
                <BlockMath math="\hat{u}(\xi,t) = \hat{f}(\xi) e^{-\kappa \xi^2 t}" />
                <p>
                    最後に逆フーリエ変換を施す。畳み込み定理（§3.3）を用いると、出力は初期値 <InlineMath math="f(x)" /> と「指数関数の逆変換」との畳み込みになる。
                </p>
            </ContentBox>

            <p>
                この「指数関数の逆変換」こそが、熱伝導の本質を司る <b>ガウス熱核</b> です。
            </p>

            <ContentBox type="proposition" title="Proposition 8.1-1 (ガウス熱核の導出)">
                <p>
                    フーリエ変換後の解に現れた要素 <InlineMath math="e^{-\kappa \xi^2 t}" /> の逆フーリエ変換 <InlineMath math="G_t(x)" /> は次のように与えられる：
                </p>
                <BlockMath math="G_t(x) = \mathcal{F}^{-1}[e^{-\kappa \xi^2 t}] = \frac{1}{\sqrt{4\pi \kappa t}} e^{-\frac{x^2}{4\kappa t}}" />
                <p>
                    最終的な熱方程式の解は、初期条件との畳み込みで表現される：
                </p>
                <BlockMath math="u(x,t) = (G_t * f)(x) = \int_{-\infty}^\infty \frac{1}{\sqrt{4\pi \kappa t}} e^{-\frac{(x-y)^2}{4\kappa t}} f(y) dy" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ガウス関数のフーリエ解析の結果（§3.5）を利用する。
                </p>
                <p>
                    一般に <InlineMath math="\mathcal{F}[e^{-ax^2}] = \sqrt{\frac{\pi}{a}} e^{-\frac{\xi^2}{4a}}" /> である。ここで <InlineMath math="\frac{1}{4a} = \kappa t" /> と置くと、<InlineMath math="a = \frac{1}{4\kappa t}" /> となる。
                </p>
                <p>
                    これより、<InlineMath math="\mathcal{F}\left[ e^{-\frac{x^2}{4\kappa t}} \right] = \sqrt{4\pi \kappa t} e^{-\kappa \xi^2 t}" /> となり、両辺を <InlineMath math="\sqrt{4\pi \kappa t}" /> で割ることで熱核の表示を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="熱方程式の「平滑化効果」">
                <p>
                    熱核 <InlineMath math="e^{-\kappa \xi^2 t}" /> の形に注目してください。周波数 <InlineMath math="\xi" /> の二乗に比例して減衰が強くなるため、高周波成分（急峻な変化やノイズ）が非常に素早く消散します。
                </p>
                <p>
                    これが熱方程式の <b>平滑化効果 (Smoothing Effect)</b> です。初期条件に尖った部分や不連続があっても、わずかな時間 <InlineMath math="t > 0" /> が経過するだけで、温度分布は無限回微分可能な滑らかな曲線（ガウス関数の重ね合わせ）へと変化します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な初期条件への適用</h2>

            <p>
                具体的な初期分布がどのように「溶けて」いくのかを考察します。
            </p>

            <ContentBox type="example" title="Example 8.1-2 (矩形パルスの時間発展)">
                <p>
                    初期状態が <InlineMath math="f(x) = \mathbf{1}_{[-1,1]}(x)" /> （特定の区間だけが熱い状態）であるとする。
                </p>
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>直後 (<InlineMath math="t = 0.01" />)</b>：熱核は非常に鋭いピークを持ち、初期の矩形形状がほぼ保たれるが、角の部分だけがわずかに丸まり始める。
                    </li>
                    <li>
                        <b>中期 (<InlineMath math="t = 0.2" />)</b>：波形全体が横に広がり、ピークの高さも下がり始める。全体としてベル型の曲線に近づく。
                    </li>
                    <li>
                        <b>長期 (<InlineMath math="t = 1.0" />)</b>：初期の矩形の記憶は薄れ、中心をピークとするなだらかなガウス分布へと収束していく。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 8.1-3 (点源の発展：基本解の物理的意味)">
                <p>
                    原点に熱が一点集中している状態 <InlineMath math="f(x) = \delta(x)" /> を考える。
                </p>
                <p>
                    畳み込みの性質より、<InlineMath math="u(x,t) = (G_t * \delta)(x) = G_t(x)" /> となる。すなわち、ガウス熱核そのものが、一点の熱がどのように広がるかを表す <b>基本解</b> である。
                </p>
                <p>
                    ここで興味深いのは、どんなに遠く離れた点 <InlineMath math="x" /> であっても、<InlineMath math="t > 0" /> であれば <InlineMath math="G_t(x) > 0" /> となり、「熱が瞬時に全空間に伝わる」ことを示している点である。これは次節の波動方程式（有限速度の伝播）との決定的な違いである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>空間フーリエ変換により、熱方程式は周波数領域の単純な指数減衰問題に帰着する。</li>
                    <li>熱方程式の解は、初期条件とガウス熱核 $G_t(x)$ の畳み込みとして与えられる。</li>
                    <li>高周波成分ほど速く減衰するため、時間経過とともに波形は平滑化される。</li>
                    <li>物理的には「拡散」を意味し、無限の伝播速度を持つという特徴がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
