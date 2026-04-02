import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GeneralSolutionAndApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の締めくくりとして、特性根のあらゆるパターン（実数・複素数・重根）が混在する場合の一般解の構成規則を整理します。
                また、これらの理論が物理的なシステム、特に<strong>調和振動子（ばね振り子など）</strong>の挙動をどのように鮮やかに記述するかを見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">n 階方程式の一般解の構成規則</h2>

            <p>
                特性多項式が次のように因数分解される場合を考えます。
                <BlockMath math="\begin{aligned} P&(\lambda) \\ &= a_n \prod_{j=1}^r (\lambda - \lambda_j)^{m_j} \cdot \prod_{k=1}^s (\lambda - (\alpha_k + i\beta_k))^{l_k} (\lambda - (\alpha_k - i\beta_k))^{l_k} \end{aligned}" />
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (一般解の構成アルゴリズム)">
                <p>
                    定数係数斉次線形方程式の基本解系は、各特性根に対して以下の規則で得られる解をすべて集めることで得られる：
                </p>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="border border-slate-300 dark:border-slate-600 p-2">特性根のタイプ</th>
                                <th className="border border-slate-300 dark:border-slate-600 p-2">対応する基本解</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">実数根 <InlineMath math="\lambda" /> (重複度 <InlineMath math="m" />)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2"><InlineMath math="e^{\lambda x}, x e^{\lambda x}, \dots, x^{m-1} e^{\lambda x}" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 p-2 text-center">複素根 <InlineMath math="\alpha \pm \beta i" /> (重複度 <InlineMath math="l" />)</td>
                                <td className="border border-slate-300 dark:border-slate-600 p-2">
                                    <InlineMath math="x^k e^{\alpha x} \cos \beta x, \ x^k e^{\alpha x} \sin \beta x" />
                                    <br />
                                    <span className="text-sm font-normal">( <InlineMath math="k = 0, \dots, l-1" /> )</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    代数学の基本定理より、 <InlineMath math="n" /> 次の特性多項式 <InlineMath math="P(\lambda)" /> は重複を含めてちょうど <InlineMath math="n" /> 個の根を持つ。
                    §4.1 〜 §4.3 の議論により、各特性根に対してその重複度の数だけ、微分方程式を満たしかつ一次独立な解が構成できる。
                    異なる特性根に随伴する解のグループ間も互いに一次独立であることが数学的帰納法などによって示されるため、
                    最終的に得られる解のセットは、 <InlineMath math="n" /> 個の一次独立な解から構成される。
                    §3.1 の Theorem 3.1-2 より、解空間の次元は <InlineMath math="n" /> であるから、これらは基本解系をなす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">物理応用：減衰振動の解析</h2>

            <p>
                力学における抵抗（摩擦など）を考慮した振動の方程式 <InlineMath math="m\ddot{y} + 2\gamma m\dot{y} + m\omega_0^2 y = 0" /> を考えます。
                これを整理した <InlineMath math="\ddot{y} + 2\gamma\dot{y} + \omega_0^2 y = 0" /> の特性根は <InlineMath math="\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}" /> です。
                減衰係数 <InlineMath math="\gamma" /> と固有振動数 <InlineMath math="\omega_0" /> の大小関係により、解の振る舞いは 3 パターンに分類されます。
            </p>

            <ContentBox type="example" title="Example 4.4-2 (減衰振動の 3 分類)">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold">1. 不足減衰 (Underdamped): <InlineMath math="\gamma < \omega_0" /></h4>
                        <p className="pl-4 border-l-2">
                            特性根が複素数となり、解は <strong>振動しながら減衰</strong> します。
                            <BlockMath math="y = e^{-\gamma t} (c_1 \cos \omega t + c_2 \sin \omega t), \quad \omega = \sqrt{\omega_0^2 - \gamma^2}" />
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold">2. 臨界減衰 (Critically Damped): <InlineMath math="\gamma = \omega_0" /></h4>
                        <p className="pl-4 border-l-2">
                            特性根が重根（実数）となり、 <strong>振動せずに最も速く平衡状態へ</strong> 戻ります。
                            <BlockMath math="y = (c_1 + c_2 t) e^{-\gamma t}" />
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold">3. 過減衰 (Overdamped): <InlineMath math="\gamma > \omega_0" /></h4>
                        <p className="pl-4 border-l-2">
                            特性根が相異なる実数となり、 <strong>ゆっくりと指数関数的に衰衰</strong> します。振動は起きません。
                            <BlockMath math="y = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t}" />
                        </p>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="共鳴現象の予兆">
                <p>
                    ここでは外力がない（斉次）ケースを扱いましたが、もし右辺に周期的な外力 <InlineMath math="F \cos \Omega t" /> が加わると、外力の周波数がシステムの固有振動数に近づいたときに振幅が激しく増大する<strong>共鳴 (Resonance)</strong> が起こります。
                    これは第 5 章の「非斉次方程式」で詳しく学びます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>統合規則</strong>： 特性根のタイプ（実数・複素・重根）に合わせて基本解を並べるだけ。</li>
                    <li><strong>定数係数の威力</strong>： 複雑な機械・電気システムの挙動を、特性方程式を解くだけで完全に予測できる。</li>
                    <li><strong>物理的洞察</strong>： 数式上の「重根」や「複素根」が、現実の「臨界減衰」や「振動」という物理現象に直結している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
