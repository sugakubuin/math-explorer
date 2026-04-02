import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UndeterminedCoefficients() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章までは右辺が 0 である斉次方程式を扱ってきました。
                本章では、右辺に項がある<strong>非斉次（非同次）線形微分方程式</strong>
                <BlockMath math="Ly = a_n y^{(n)} + \cdots + a_0 y = q(x)" />
                 の解法を学びます。非斉次方程式の解は、対応する斉次方程式の解と、何か一つの特別な解（特殊解）を組み合わせることで完全に記述できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非斉次方程式の解の構造</h2>

            <p>
                非斉次方程式の一般解は、斉次方程式の一般解をベースに構築されます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-1 (一般解の構造)">
                <p>
                    非斉次方程式 <InlineMath math="Ly = q(x)" /> の任意の解（一般解） <InlineMath math="y" /> は、
                    対応する斉次方程式 <InlineMath math="Ly = 0" /> の一般解 <InlineMath math="y_h" /> と、
                    非斉次方程式の<strong>特殊解 (particular solution)</strong> <InlineMath math="y_p" /> を用いて次のように表される：
                    <BlockMath math="y = y_h + y_p" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y" /> と <InlineMath math="y_p" /> がともに <InlineMath math="Ly = q(x)" /> の解であるとする。
                    線形性により、その差 <InlineMath math="w = y - y_p" /> の挙動を調べると：
                    <BlockMath math="Lw = L(y - y_p) = Ly - Ly_p = q(x) - q(x) = 0" />
                    となる。したがって、差 <InlineMath math="w" /> は斉次方程式の解である。
                    斉次方程式の一般解を <InlineMath math="y_h" /> とすれば、ある定数を用いて <InlineMath math="w = y_h" /> と書けるため、
                    <InlineMath math="y = y_h + y_p" />
                    が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">待機係数法 (Undetermined Coefficients)</h2>

            <p>
                右辺 <InlineMath math="q(x)" /> が多項式、指数関数、正弦・余弦関数、あるいはそれらの積である場合、
                「特殊解も似たような形だろう」と予想して解を求める手法が<strong>待機係数法</strong>です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.1-2 (特殊解の仮定規則)">
                <p>
                    右辺 <InlineMath math="q(x)" /> の型に応じて、特殊解 <InlineMath math="y_p" /> を次のように仮定する。ただし、仮定した形が（斉次方程式の）特性根と重なる場合は、独立性を保つために全体に <InlineMath math="x" /> （重根なら <InlineMath math="x^m" /> ）を掛ける。
                </p>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border border-slate-300 dark:border-slate-600">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="border border-slate-300 p-2">右辺 q(x) の成分</th>
                                <th className="border border-slate-300 p-2">仮定する特殊解 y_p の形</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-2"><InlineMath math="n" /> 次多項式</td>
                                <td className="border border-slate-300 p-2"><InlineMath math="A_n x^n + \dots + A_1 x + A_0" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-2"><InlineMath math="e^{ax}" /></td>
                                <td className="border border-slate-300 p-2"><InlineMath math="A e^{ax}" /></td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-2"><InlineMath math="\sin bx, \cos bx" /></td>
                                <td className="border border-slate-300 p-2"><InlineMath math="A \cos bx + B \sin bx" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 (標準的な指数関数のケース)">
                <p><strong>問題：</strong> <InlineMath math="y'' - 3y' + 2y = e^{3x}" /> の一般解を求めよ。</p>
                <div className="mt-4 space-y-2">
                    <p><strong>1. 斉次解：</strong> 特性方程式 <InlineMath math="\lambda^2 - 3\lambda + 2 = 0" /> の根は <InlineMath math="\lambda = 1, 2" />。よって <InlineMath math="y_h = c_1 e^x + c_2 e^{2x}" />。</p>
                    <p><strong>2. 特殊解：</strong> <InlineMath math="q(x) = e^{3x}" /> なので、 <InlineMath math="y_p = Ae^{3x}" /> と仮定する。これを代入すると：
                        <BlockMath math="(9A - 9A + 2A)e^{3x} = e^{3x} \implies 2A = 1 \implies A = 1/2" />
                    </p>
                    <p><strong>3. 一般解：</strong> <InlineMath math="y = c_1 e^x + c_2 e^{2x} + \frac{1}{2} e^{3x}" /></p>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-2 (共鳴ケース：解の修正)">
                <p><strong>問題：</strong> <InlineMath math="y'' + y = \sin x" /> の一般解を求めよ。</p>
                <div className="mt-4 space-y-2">
                    <p><strong>1. 斉次解：</strong> 性根は <InlineMath math="\pm i" />。よって <InlineMath math="y_h = c_1 \cos x + c_2 \sin x" />。</p>
                    <p><strong>2. 特殊解：</strong> <InlineMath math="\sin x" /> は斉次解に含まれるため、 <InlineMath math="y_p = x(A \cos x + B \sin x)" /> と修正して仮定する。
                        代入して整理すると <InlineMath math="2B \cos x - 2A \sin x = \sin x" /> となり、 <InlineMath math="A = -1/2, B = 0" /> を得る。
                        <br />特殊解： <InlineMath math="y_p = -\frac{x}{2} \cos x" />
                    </p>
                    <p><strong>3. 一般解：</strong> <InlineMath math="y = c_1 \cos x + c_2 \sin x - \frac{x}{2} \cos x" /></p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>基本原理</strong>： 非斉次方程式の解は「斉次解 ＋ 特殊解」の形。</li>
                    <li><strong>待機係数法</strong>： 右辺の関数形から特殊解を「逆算」する効率的な手法。</li>
                    <li><strong>修正規則</strong>： 仮定が斉次解と被る場合は、独立にするために <InlineMath math="x" /> を掛ける。これが物理的には「共鳴」に対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
