import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SubstitutionIntegration() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                基本積分公式や線形性だけでは計算できない複雑な積分は多く存在します。
                積分の2大テクニックの1つが<strong>置換積分 (Integration by Substitution)</strong> です。
                これは、微分の「合成関数の連鎖律」を逆から読んだものに相当し、変数を見やすい形に置き換えて積分を実行する手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 不定積分の置換積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">不定積分の置換積分</h2>

            <p>
                被積分関数の中に「ある関数 <InlineMath math="g(x)" />」とその「導関数 <InlineMath math="g'(x)" />」がペアで見つかるときに特に有効です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-1 （置換積分の公式）">
                <p>
                    関数 <InlineMath math="x = g(t)" /> が微分可能であるとき、次が成り立つ：
                </p>
                <BlockMath math="\int f(x) \, dx = \int f(g(t)) g'(t) \, dt" />
                <p>
                    （逆に、<InlineMath math="t = g(x)" /> と置換して <InlineMath math="\displaystyle \int f(g(x))g'(x)\,dx = \int f(t)\,dt" /> と計算することも多い。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （置換積分の証明）">
                <p>
                    右辺を <InlineMath math="t" /> について微分し、それが左辺の被積分関数（を <InlineMath math="t" /> で表したもの）と一致することを示せばよいです。
                    <InlineMath math="F(x) = \int f(x)\,dx" /> とおくと、<InlineMath math="F'(x) = f(x)" />。
                </p>
                <p>
                    合成関数 <InlineMath math="F(g(t))" /> を連鎖律で <InlineMath math="t" /> について微分すると：
                </p>
                <BlockMath math="\frac{d}{dt} \Big[ F(g(t)) \Big] = F'(g(t)) \cdot g'(t) = f(g(t)) g'(t)" />
                <p>
                    ゆえに、<InlineMath math="F(g(t))" /> は <InlineMath math="f(g(t))g'(t)" /> の（<InlineMath math="t" /> に関する）原始関数であり、公式が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="形式的な dx, dt の扱い">
                <p>
                    置換積分では、微分の記法を分数の様に扱う「形式的な計算」が非常に便利です。<br />
                    <InlineMath math="t = g(x)" /> とおく場合、両辺を微分した <InlineMath math="\displaystyle \frac{dt}{dx} = g'(x)" /> を変形して、
                </p>
                <BlockMath math="dt = g'(x) \, dx" />
                <p>
                    と考えて、積分記号の中の <InlineMath math="dx" /> と <InlineMath math="g'(x)" /> をまとめて <InlineMath math="dt" /> に置き換えると機械的に計算できます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 （不定積分の計算）">
                <p>
                    次の不定積分を求めよ。
                </p>
                <BlockMath math="\int 2x \cos(x^2 + 1) \, dx" />
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="t = x^2 + 1" /> とおく。<br />
                    両辺を <InlineMath math="x" /> で微分すると <InlineMath math="\displaystyle \frac{dt}{dx} = 2x" />。<br />
                    形式的に <InlineMath math="dt = 2x \, dx" /> と書けるので、与式は次のように置き換わる。
                </p>
                <BlockMath math="\begin{aligned} \int \cos(\underbrace{x^2 + 1}_{t}) \underbrace{2x \, dx}_{dt} &= \int \cos(t) \, dt \\ &= \sin t + C \\ &= \sin(x^2 + 1) + C \end{aligned}" />
                <p className="mt-2 text-sm">
                    （最後に <InlineMath math="t" /> を元の <InlineMath math="x" /> の式に戻すのを忘れないこと！）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 定積分の置換積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">定積分の置換積分</h2>

            <p>
                定積分で置換を行う場合は、<strong>積分区間（端点）も置き換える</strong>必要があります。<br />
                区間さえ変えれば、不定積分のように最後に <InlineMath math="x" /> の式に戻す必要はありません。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 （定積分の置換積分）">
                <p>
                    関数 <InlineMath math="x = g(t)" /> が <InlineMath math="[\alpha, \beta]" /> 上で <InlineMath math="g' (t)" /> を持ち連続であり、
                    値域が <InlineMath math="[a, b]" /> に含まれ、<InlineMath math="g(\alpha) = a, \quad g(\beta) = b" /> であるとき、次が成り立つ：
                </p>
                <BlockMath math="\int_a^b f(x) \, dx = \int_\alpha^\beta f(g(t)) g'(t) \, dt" />
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 （定積分の計算）">
                <p>
                    次の定積分を計算せよ。
                </p>
                <BlockMath math="\int_0^2 x \sqrt{4 - x^2} \, dx" />
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="t = 4 - x^2" /> とおく。形式的に微分して <InlineMath math="dt = -2x \, dx" />、すなわち <InlineMath math="\displaystyle x \, dx = -\frac{1}{2} dt" />。
                </p>
                <p>
                    積分区間の対応を調べる：<br />
                    <InlineMath math="x" /> が <InlineMath math="0 \to 2" /> と変化するとき、<InlineMath math="t" /> は <InlineMath math="(4-0^2) \to (4-2^2)" /> なので <InlineMath math="4 \to 0" />。
                </p>
                <div className="overflow-x-auto w-full md:w-1/2 flex border-collapse border border-slate-300 dark:border-slate-600 my-2 mx-auto justify-center text-center">
                    <table className="min-w-full">
                        <tbody>
                            <tr className="border-b border-slate-300 dark:border-slate-600">
                                <td className="p-2 border-r border-slate-300 dark:border-slate-600 font-bold"><InlineMath math="x" /></td>
                                <td className="p-2"><InlineMath math="0 \longrightarrow 2" /></td>
                            </tr>
                            <tr>
                                <td className="p-2 border-r border-slate-300 dark:border-slate-600 font-bold"><InlineMath math="t" /></td>
                                <td className="p-2"><InlineMath math="4 \longrightarrow 0" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    これらを代入して計算する：
                </p>
                <BlockMath math="\begin{aligned} \int_0^2 \sqrt{4 - x^2} \cdot x \, dx &= \int_4^0 \sqrt{t} \left( -\frac{1}{2} dt \right) \\ &= -\frac{1}{2} \int_4^0 t^{1/2} \, dt \\ &= \frac{1}{2} \int_0^4 t^{1/2} \, dt \quad \text{（区間を反転させて符号を戻す）} \\ &= \frac{1}{2} \left[ \frac{t^{3/2}}{3/2} \right]_0^4 \\ &= \frac{1}{2} \cdot \frac{2}{3} \left[ 4^{3/2} - 0 \right] = \frac{1}{3} \times 8 = \frac{8}{3} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 三角置換
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">三角関数の利用（三角置換）</h2>

            <p>
                被積分関数に <InlineMath math="\sqrt{a^2 - x^2}" /> などが含まれる場合、変数 <InlineMath math="x" /> を三角関数で置換することで平方根を外せるケースがあります。
            </p>

            <ContentBox type="remark" title="Remark （三角置換のパターンと使い分け）">
                <p>
                    以下の3つのパターンが頻出します（<InlineMath math="a > 0" />）：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-4">
                    <li>
                        <strong><InlineMath math="\sqrt{a^2 - x^2}" /> を含む形：</strong><br />
                        <InlineMath math="x = a \sin \theta \quad (-\pi/2 \le \theta \le \pi/2)" /> とおく。<br />
                        公式 <InlineMath math="\sin^2 \theta + \cos^2 \theta = 1" /> より、<InlineMath math="\sqrt{a^2 - a^2 \sin^2 \theta} = a \cos \theta" /> とルートが外れます。円の面積を求める際などに使われます。
                    </li>
                    <li>
                        <strong><InlineMath math="\sqrt{a^2 + x^2}" /> または <InlineMath math="x^2 + a^2" /> の分母の形：</strong><br />
                        <InlineMath math="x = a \tan \theta \quad (-\pi/2 < \theta < \pi/2)" /> とおく。<br />
                        公式 <InlineMath math="1 + \tan^2 \theta = 1/\cos^2 \theta" /> を利用します。
                    </li>
                    <li>
                        <strong><InlineMath math="\sqrt{x^2 - a^2}" /> を含む形：</strong><br />
                        <InlineMath math="x = \frac{a}{\cos \theta}" /> なとでおく。（出題頻度は低めです）
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>合成関数の微分を逆から見た手法が<strong>置換積分</strong>である（Theorem 3.4-1）。</li>
                    <li>微分記法 <InlineMath math="dx" /> などを分数の様に取り扱い、形式的な置き換えを行うと計算ミスが減る。</li>
                    <li><strong>定積分の置換</strong>では、変数を戻す必要はないが、<strong>積分区間の変更</strong>を絶対に行うこと（Proposition 3.4-1）。</li>
                    <li>平方根を含む式では、<InlineMath math="\sin \theta" /> や <InlineMath math="\tan \theta" /> と置く<strong>三角置換</strong>が有効な場合がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
