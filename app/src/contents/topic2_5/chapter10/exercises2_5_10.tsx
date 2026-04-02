import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter10() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="10" number={1}>
                    <p>距離空間における <b>コーシー列 (Cauchy sequence)</b> および <b>完備 (Complete)</b> であることの定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 10.1-1, 10.1-2 より：</p>
                        <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                            <li><b>コーシー列：</b> 任意の <InlineMath math="\varepsilon > 0" /> に対し、ある自然数 <InlineMath math="N" /> が存在して、<InlineMath math="m, n > N \implies d(x_m, x_n) < \varepsilon" /> が成り立つ点列。</li>
                            <li><b>完備：</b> 空間内の任意のコーシー列が、空間内の点に収束すること。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={2}>
                    <p><b>バナッハの不動点定理</b>（Theorem 10.4-1）の主張を、縮小写像の定義を含めて述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 10.4-1 および Definition 10.4-1 より：</p>
                        <p className="mt-2 ml-4">
                            空でない完備距離空間 <InlineMath math="X" /> 上の <b>縮小写像</b> （ある <InlineMath math="k \in [0, 1)" /> に対し <InlineMath math="d(f(x), f(y)) \leq k \cdot d(x, y)" /> を満たす写像）は、ただ一つの不動点（<InlineMath math="f(x) = x" /> となる点）を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={3}>
                    <p>距離空間 <InlineMath math="X" /> の <b>完備化 (Completion)</b> <InlineMath math="\hat{X}" /> が定義されるための、<InlineMath math="X" /> との関係に関する 2 つの条件を述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 10.3-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="X" /> と等長同型な部分集合 <InlineMath math="X_0 \subset \hat{X}" /> が存在すること。</li>
                            <li>その部分集合 <InlineMath math="X_0" /> が <InlineMath math="\hat{X}" /> において稠密である（閉包が全体に一致する）こと。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="10" number={4}>
                    <p>距離空間において、任意の収束点列はコーシー列であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 10.1-1 の証明より：</p>
                        <p><InlineMath math="x_n \to x" /> とする。任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="N" /> が存在して <InlineMath math="n > N \implies d(x_n, x) < \varepsilon/2" /> となる。</p>
                        <p className="mt-2">このとき、<InlineMath math="m, n > N" /> ならば三角不等式より、</p>
                        <BlockMath math="d(x_m, x_n) \le d(x_m, x) + d(x, x_n) < \varepsilon/2 + \varepsilon/2 = \varepsilon" />
                        <p className="mt-2">が成り立つ。よってコーシー列である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={5}>
                    <p>ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> が通常の距離に関して完備であることを、実数直線 <InlineMath math="\mathbb{R}" /> の完備性を用いて証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 10.2-1 の証明より：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="\mathbb{R}^n" /> 内のコーシー列 <InlineMath math="\{\mathbf{x}_k\}" /> をとる。各成分の数列 <InlineMath math="\{x_{k,i}\}" /> も <InlineMath math="\mathbb{R}" /> におけるコーシー列となる（各成分の差は全体距離以下であるため）。</li>
                            <li><InlineMath math="\mathbb{R}" /> の完備性より、各成分は極限 <InlineMath math="a_i = \lim_{k\to\infty} x_{k,i}" /> を持つ。</li>
                            <li>ベクトル <InlineMath math="\mathbf{a} = (a_1, \dots, a_n)" /> を定義すると、<InlineMath math="\mathbf{x}_k" /> は成分ごとに収束するため、<InlineMath math="\mathbb{R}^n" /> において <InlineMath math="\mathbf{a}" /> に収束する。</li>
                        </ol>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={6}>
                    <p>写像 <InlineMath math="f: \mathbb{R} \to \mathbb{R}" /> を <InlineMath math="f(x) = \frac{1}{2}x + 1" /> と定義する。これが <b>縮小写像</b> であることを示し、その <b>不動点</b> を求めよ。</p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>縮小性：</b> <InlineMath math="d(f(x), f(y)) = |(\frac{1}{2}x+1) - (\frac{1}{2}y+1)| = \frac{1}{2}|x-y|" /> である。<InlineMath math="k=1/2 < 1" /> なので縮小写像である。</li>
                            <li><b>不動点：</b> <InlineMath math="f(x) = x" /> すなわち <InlineMath math="\frac{1}{2}x + 1 = x" /> を解くと、<InlineMath math="\frac{1}{2}x = 1 \implies x = 2" /> である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={7}>
                    <p>連続関数空間 <InlineMath math="C[a, b]" /> において、<b>一様距離</b> （最大値距離）以外の距離、例えば <b>L1 距離</b> <InlineMath math="d_1(f, g) = \int_a^b |f(x) - g(x)| dx" /> を用いた場合、この空間は一般に完備ではない。この理由を「連続関数の一様収束極限」の性質に触れながら説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 10.2-1 等に基づき説明する：</p>
                        <p>一様収束（一様距離による収束）の場合、連続関数の極限は常に連続であり、完備性が保たれる。しかし L1 距離のような積分に基づいた距離では、連続関数列の極限が（不連続な）階段関数のような形になる場合がある。その極限は <InlineMath math="C[a, b]" /> に属さないため、空間に「穴」があいていることになり、完備ではなくなる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="10" number={8}>
                    <p>完備距離空間 <InlineMath math="X" /> の部分空間 <InlineMath math="A" /> が完備であるための必要十分条件は、<InlineMath math="A" /> が <InlineMath math="X" /> において <b>閉集合</b> であることであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>§10.1 Remark 等の性質を証明する：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li>(<InlineMath math="\implies" />) <InlineMath math="A" /> が完備とし、触点 <InlineMath math="x \in \overline{A}" /> をとる。点列連続性（§9.2）より <InlineMath math="x" /> に収束する <InlineMath math="A" /> 内の点列がとれる。この列はコーシー列であり、<InlineMath math="A" /> の完備性より極限は <InlineMath math="A" /> に属す。よって <InlineMath math="x \in A" /> となり閉集合である。</li>
                            <li>(<InlineMath math="\impliedby" />) <InlineMath math="A" /> が閉集合とし、<InlineMath math="A" /> 内のコーシー列をとる。<InlineMath math="X" /> の完備性より、極限 <InlineMath math="x \in X" /> が存在する。<InlineMath math="A" /> は閉集合なのでこの極限を含み（触点＝極限点）、<InlineMath math="x \in A" /> となる。よって <InlineMath math="A" /> は完備である。</li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={9}>
                    <p>距離空間 <InlineMath math="X" /> の <b>完備化</b> を、コーシー列の同値類を用いて構築する手順の概略を述べよ。</p>
                    <ExerciseSolution>
                        <p>§10.3 の「構成の原理」より：</p>
                        <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><InlineMath math="X" /> 内のすべてのコーシー列の集合を対象とし、2 つの列の差が 0 に収束（<InlineMath math="d(x_n, y_n) \to 0" />）するとき同値（同じ収束先を持つはずのもの）とする。</li>
                            <li>この同値関係による商集合を <InlineMath math="\hat{X}" /> とし、距離を極限値 <InlineMath math="\lim d(x_n, y_n)" /> で定義する。</li>
                            <li>元の点 <InlineMath math="x" /> は定数数列の類として埋め込まれ、<InlineMath math="\hat{X}" /> はすべてのコーシー列に対する「極限点」を類として含み、完備となる。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={10}>
                    <p><b>バナッハの不動点定理</b>（Theorem 10.4-1）において、不動点が一意であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 10.4-1 の証明より：</p>
                        <p><InlineMath math="x, y" /> がともに不動点であると仮定する。すなわち <InlineMath math="f(x) = x, f(y) = y" /> である。</p>
                        <p className="mt-2">縮小写像の定義より、ある <InlineMath math="k < 1" /> に対して、</p>
                        <BlockMath math="d(x, y) = d(f(x), f(y)) \leq k \cdot d(x, y)" />
                        <p className="mt-2">が成り立つ。これを変形すると <InlineMath math="(1 - k) \cdot d(x, y) \leq 0" /> となる。</p>
                        <p className="mt-2"><InlineMath math="1 - k > 0" /> かつ距離は常に <InlineMath math="\geq 0" /> なので、この不等式が成立するには <InlineMath math="d(x, y) = 0" /> でなければならない。距離の公理より <InlineMath math="x = y" /> である。よって不動点は唯一である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
