import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplaceDefinitionSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで学んできたフーリエ変換は、信号を正弦波（複素指数関数）の重ね合わせとして分解する極めて強力な道具でした。しかし、フーリエ変換には「時間 <InlineMath math="t \to \infty" /> で発散する関数（例：<InlineMath math="e^t" />）を扱えない」「因果性（<InlineMath math="t < 0" /> でゼロ）や初期条件の扱いが必ずしも直感的でない」といった制約があります。
            </p>
            <p>
                これらの問題を解決し、工学、特に制御理論や回路解析において中心的な役割を果たすのが <b>ラプラス変換</b> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラプラス変換の定義と収束半平面</h2>

            <p>
                ラプラス変換は、関数に指数減衰因子 <InlineMath math="e^{-\sigma t}" /> を掛けることで、発散する関数であっても強引に収束させてフーリエ積分を行う手法とみなせます。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (ラプラス変換)">
                <p>
                    時間領域の関数 <InlineMath math="f(t)" />（ただし <InlineMath math="t < 0" /> で <InlineMath math="f(t)=0" /> と仮定する）に対し、その <b>一側ラプラス変換</b> <InlineMath math="F(s)" /> を次のように定義する：
                </p>
                <BlockMath math="F(s) = \mathcal{L}[f(t)] = \int_0^\infty f(t) e^{-st} dt" />
                <p>
                    ここで <InlineMath math="s = \sigma + i\omega" /> は複素パラメータである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1 (基本関数のラプラス変換：1 と指数関数)">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>単位ステップ関数</b> <InlineMath math="f(t) = 1 \, (t \geq 0)" />：
                        <BlockMath math="\int_0^\infty 1 \cdot e^{-st} dt = \left[ -\frac{1}{s} e^{-st} \right]_0^\infty = \frac{1}{s} \quad (\text{Re}(s) > 0)" />
                    </li>
                    <li>
                        <b>指数関数</b> <InlineMath math="f(t) = e^{at}" />：
                        <BlockMath math="\int_0^\infty e^{at} e^{-st} dt = \int_0^\infty e^{-(s-a)t} dt = \frac{1}{s-a} \quad (\text{Re}(s) > \text{Re}(a))" />
                    </li>
                </ol>
            </ContentBox>

            <p>
                積分が収束するためには、複素変数 <InlineMath math="s" /> の実部 <InlineMath math="\text{Re}(s) = \sigma" /> が十分に大きい必要があります。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (収束半平面と収束横座標)">
                <p>
                    ラプラス変換の積分が収束する複素平面上の領域は、ある実数 <InlineMath math="\sigma_0" /> を用いて <InlineMath math="\text{Re}(s) > \sigma_0" /> という <b>収束半平面</b> の形をとる。この境界となる <InlineMath math="\sigma_0" /> を <b>収束横座標 (convergence abscissa)</b> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-2 (収束横座標の例)">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="f(t) = e^{3t} \implies \sigma_0 = 3" /> （指数的に増大する信号）</li>
                    <li><InlineMath math="f(t) = e^{-t} \implies \sigma_0 = -1" /> （減衰信号）</li>
                    <li><InlineMath math="f(t) = \sin t \implies \sigma_0 = 0" /> （振動信号）</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="フーリエ変換との関係">
                <p>
                    もし関数 <InlineMath math="f(t)" /> の収束横座標が <InlineMath math="\sigma_0 < 0" /> であれば、<InlineMath math="s = i\omega" />（純虚数軸）上でのラプラス変換は、そのままフーリエ変換 <InlineMath math="F(i\omega) = \hat{f}(\omega)" /> と一致します。
                </p>
                <p>
                    ラプラス解析は、フーリエ解析を複素平面全体（<InlineMath math="s" /> 平面）へと拡張したものであり、信号の「安定性」を複素数の配置として議論することを可能にします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本関数の変換表</h2>

            <p>
                代表的な関数のラプラス変換を導出し、一覧にまとめます。
            </p>

            <ContentBox type="example" title="Example 6.1-3 (三角関数のラプラス変換)">
                <p>
                    オイラーの公式 <InlineMath math="\sin(\omega t) = \frac{e^{i\omega t} - e^{-i\omega t}}{2i}" /> を用いると：
                </p>
                <BlockMath math="\mathcal{L}[\sin(\omega t)] = \frac{1}{2i} \left( \frac{1}{s-i\omega} - \frac{1}{s+i\omega} \right) = \frac{\omega}{s^2 + \omega^2}" />
                <p>
                    同様に、<InlineMath math="\mathcal{L}[\cos(\omega t)] = \frac{s}{s^2 + \omega^2}" /> となります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-4 (べき関数のラプラス変換：漸化式の利用)">
                <p>
                    <InlineMath math="f(t) = t^n" /> の変換を部分積分で導きます：
                </p>
                <BlockMath math="\begin{aligned} \mathcal{L}[t^n] &= \int_0^\infty t^n e^{-st} dt = \left[ t^n \frac{e^{-st}}{-s} \right]_0^\infty + \frac{n}{s} \int_0^\infty t^{n-1} e^{-st} dt \\ &= \frac{n}{s} \mathcal{L}[t^{n-1}] \end{aligned}" />
                <p>
                    <InlineMath math="\mathcal{L}[t^0] = \mathcal{L}[1] = 1/s" /> より、帰納的に <InlineMath math="\mathcal{L}[t^n] = \frac{n!}{s^{n+1}}" /> となります。
                </p>
            </ContentBox>

            <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700 text-sm">
                    <thead>
                        <tr className="bg-slate-100 dark:bg-slate-800">
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">関数 <InlineMath math="f(t)" /></th>
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">ラプラス変換 <InlineMath math="F(s)" /></th>
                            <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">収束域 <InlineMath math="\text{Re}(s)" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="1" /> (ステップ)</td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="1/s" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="> 0" /></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="e^{at}" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="1/(s-a)" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="> a" /></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="t^n" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="n!/s^{n+1}" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="> 0" /></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="\sin(\omega t)" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="\omega/(s^2+\omega^2)" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="> 0" /></td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="\delta(t-a)" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2"><InlineMath math="e^{-as}" /></td>
                            <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">すべての <InlineMath math="s" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ラプラス変換は、関数に複素指数因子 <InlineMath math="e^{-st}" /> を掛けて積分する変換である。</li>
                    <li>積分が収束する複素平面上の領域は、収束横座標 <InlineMath math="\sigma_0" /> によって仕切られる右側半平面となる。</li>
                    <li>基本関数（多項式、指数関数、三角関数、デルタ関数）の変換結果を知ることで、計算を代数的に進めることができる。</li>
                    <li>フーリエ解析の枠組みを複素平面へと拡張したものであり、時間領域での発散信号も解析対象に含まれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
