import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        実数列 <InlineMath math="\{a_n\}" /> が実数 <InlineMath math="\alpha" /> に収束することの厳密な定義（<InlineMath math="\varepsilon" />-<InlineMath math="N" /> 論法）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 より、任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、
                        </p>
                        <BlockMath math="\forall n \ge N, \quad |a_n - \alpha| < \varepsilon" />
                        <p className="mt-2">
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        実数列 <InlineMath math="\{a_n\}" /> がコーシー列であることの定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 より、任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="N" /> が存在し、
                        </p>
                        <BlockMath math="\forall m, n \ge N, \quad |a_m - a_n| < \varepsilon" />
                        <p className="mt-2">
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        無限級数 <InlineMath math="\sum a_n" /> が「絶対収束する」ことの定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.5-2 より、各項の絶対値をとって作った正項級数 <InlineMath math="\sum |a_n|" /> が収束することである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        実数列 <InlineMath math="a_n = \frac{n}{n+1}" /> の極限が <InlineMath math="1" /> であることを、収束の定義（<InlineMath math="\varepsilon" />-<InlineMath math="N" /> 論法）に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。<InlineMath math="1/N < \varepsilon" /> を満たす自然数 <InlineMath math="N" /> を選ぶ（アルキメデスの原理）。
                        </p>
                        <p className="mt-2">
                            このとき、任意の <InlineMath math="n \ge N" /> について、
                        </p>
                        <BlockMath math="\left| a_n - 1 \right| = \left| \frac{n}{n+1} - 1 \right| = \left| \frac{-1}{n+1} \right| = \frac{1}{n+1}" />
                        <p className="mt-2">
                            <InlineMath math="n \ge N" /> より <InlineMath math="n+1 > N" /> なので、
                        </p>
                        <BlockMath math="\frac{1}{n+1} < \frac{1}{N} < \varepsilon" />
                        <p className="mt-2">
                            よって <InlineMath math="|a_n - 1| < \varepsilon" /> が示された。ゆえに <InlineMath math="\lim_{n \to \infty} a_n = 1" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        実数列 <InlineMath math="a_n = (-1)^n \left( 1 + \frac{1}{n} \right)" /> の上極限 <InlineMath math="\limsup_{n \to \infty} a_n" /> と下極限 <InlineMath math="\liminf_{n \to \infty} a_n" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            第 <InlineMath math="k" /> 項以降の上限 <InlineMath math="M_k" /> と下限 <InlineMath math="m_k" /> を考える。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>
                                <strong>上極限</strong>: 偶数項は <InlineMath math="1 + 1/(2m)" /> であり、<InlineMath math="1" /> へ正の側から近づく。奇数項は <InlineMath math="-(1 + 1/(2m-1))" /> であり、負の値をとる。
                                したがって、十分大きな <InlineMath math="k" /> に対して <InlineMath math="M_k = \sup_{n \ge k} a_n" /> は、偶数番目の項の最大のもの（またはその極限）となり、<InlineMath math="\lim_{k \to \infty} M_k = 1" />。
                            </li>
                            <li>
                                <strong>下極限</strong>: 奇数項は <InlineMath math="-1 - 1/(2m-1)" /> であり、<InlineMath math="-1" /> へ負の側から近づく。
                                したがって、十分大きな <InlineMath math="k" /> に対して <InlineMath math="m_k = \inf_{n \ge k} a_n" /> は、奇数番目の項の最小のもの（またはその極限）となり、<InlineMath math="\lim_{k \to \infty} m_k = -1" />。
                            </li>
                        </ul>
                        <p className="mt-2">
                            答え： <InlineMath math="\limsup a_n = 1" />、<InlineMath math="\liminf a_n = -1" />。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        無限級数 <InlineMath math="\sum_{n=1}^\infty \frac{n}{2^n}" /> が収束することを、ダランベールの比判定法（Theorem 3.5-2）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="a_n = \frac{n}{2^n}" /> とおく。隣り合う項の比の極限を計算する。
                        </p>
                        <BlockMath math="\left| \frac{a_{n+1}}{a_n} \right| = \frac{n+1}{2^{n+1}} \cdot \frac{2^n}{n} = \frac{n+1}{2n} = \frac{1}{2} \left( 1 + \frac{1}{n} \right)" />
                        <p className="mt-2">
                            したがって、
                        </p>
                        <BlockMath math="\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \frac{1}{2} \left( 1 + \frac{1}{n} \right) = \frac{1}{2}" />
                        <p className="mt-2">
                            極限値 <InlineMath math="L = 1/2" /> は <InlineMath math="L < 1" /> を満たすため、比判定法により級数 <InlineMath math="\sum \frac{n}{2^n}" /> は収束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        交代調和級数 <InlineMath math="\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \dots" /> が収束することを、ライプニッツの定理（Theorem 3.5-3）を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ライプニッツの定理の2条件を確認する。ここで <InlineMath math="a_n = 1/n" /> とする。
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                            <li><strong>単調減少性：</strong> すべての <InlineMath math="n" /> について、<InlineMath math="a_{n+1} = \frac{1}{n+1} < \frac{1}{n} = a_n" /> であり、単調減少である。</li>
                            <li><strong>極限が0：</strong> <InlineMath math="\lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{1}{n} = 0" /> である。</li>
                        </ol>
                        <p className="mt-2">
                            よって、定理より交代級数 <InlineMath math="\sum \frac{(-1)^{n-1}}{n}" /> は収束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        すべてのコーシー列は有界であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.3-1 の証明（Step 1）を再現する。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="\{a_n\}" /> をコーシー列とする。定義において <InlineMath math="\varepsilon = 1" /> とおくと、ある自然数 <InlineMath math="N" /> が存在して、
                        </p>
                        <BlockMath math="\forall m, n \ge N, \quad |a_m - a_n| < 1" />
                        <p className="mt-2">
                            が成り立つ。特に <InlineMath math="m = N" /> と固定すると、任意の <InlineMath math="n \ge N" /> に対して、
                        </p>
                        <BlockMath math="|a_n - a_N| < 1 \implies |a_n| < |a_N| + 1" />
                        <p className="mt-2">
                            となる。ここで、実数 <InlineMath math="M" /> を次のように定義する。
                        </p>
                        <BlockMath math="M = \max\{|a_1|, |a_2|, \dots, |a_{N-1}|, |a_N| + 1\}" />
                        <p className="mt-2">
                            すると、すべての自然数 <InlineMath math="n" /> について、
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li><InlineMath math="n < N" /> のとき、定義より <InlineMath math="|a_n| \le M" />。</li>
                            <li><InlineMath math="n \ge N" /> のとき、<InlineMath math="|a_n| < |a_N| + 1 \le M" />。</li>
                        </ul>
                        <p className="mt-2">
                            よって任意の <InlineMath math="n" /> に対して <InlineMath math="|a_n| \le M" /> が成り立ち、数列は有界である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        有界な実数列 <InlineMath math="\{a_n\}" /> について、<InlineMath math="\lim_{n \to \infty} a_n = \alpha" /> であるための必要十分条件は、<InlineMath math="\limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n = \alpha" /> であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.4-1 の証明を再現する。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[必要性 (<InlineMath math="\implies" />)]</p>
                        <p className="mt-2">
                            <InlineMath math="a_n \to \alpha" /> とする。任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="N" /> で <InlineMath math="n \ge N \implies \alpha - \varepsilon < a_n < \alpha + \varepsilon" />。
                            このとき、<InlineMath math="k \ge N" /> に対して、
                            <BlockMath math="\alpha - \varepsilon \le \inf_{n \ge k} a_n \le \sup_{n \ge k} a_n \le \alpha + \varepsilon" />
                            極限 <InlineMath math="k \to \infty" /> をとれば、
                            <BlockMath math="\alpha - \varepsilon \le \liminf a_n \le \limsup a_n \le \alpha + \varepsilon" />
                            <InlineMath math="\varepsilon" /> は任意なので <InlineMath math="\liminf a_n = \limsup a_n = \alpha" />。
                        </p>
                        <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[十分性 (<InlineMath math="\impliedby" />)]</p>
                        <p className="mt-2">
                            <InlineMath math="\liminf a_n = \limsup a_n = \alpha" /> とする。
                            常に <InlineMath math="\inf_{k \ge n} a_k \le a_n \le \sup_{k \ge n} a_k" /> が成り立つ。
                            左辺と右辺がいずれも <InlineMath math="\alpha" /> に収束するため、はさみうちの原理より <InlineMath math="a_n \to \alpha" />。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        条件収束する級数は、項の順序を入れ替えることで任意の実数に収束させることができる（リーマンの再配列定理）。この定理の証明において、正の項のみの和と負の項のみの和がそれぞれ無限大に発散することが本質的な役割を果たす。なぜこれらが発散しなければならないのか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.5-4 の証明の Step 1 に基づき説明する。
                        </p>
                        <p className="mt-2">
                            級数 <InlineMath math="\sum a_n" /> を正の項 <InlineMath math="p_n" /> と負の項 <InlineMath math="-q_n" /> （<InlineMath math="q_n > 0" />）に分ける。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>もし <InlineMath math="\sum p_n" /> と <InlineMath math="\sum q_n" /> が共に収束するならば、それらの和である絶対級数 <InlineMath math="\sum (|p_n| + |q_n|)" /> も収束するため、級数は<strong>絶対収束</strong>することになり、仮定（条件収束）に反する。</li>
                            <li>もし一方が収束し他方が発散するならば、全体の和 <InlineMath math="\sum p_n - \sum q_n" /> は必ず発散してしまう。元の級数が収束するという仮定に矛盾する。</li>
                        </ul>
                        <p className="mt-2">
                            したがって、級数が「条件収束かつ絶対収束しない」ならば、正の項の和も負の項の和も共に正の無限大に発散していなければならない。
                            この「無限の源泉」があるからこそ、目標値 <InlineMath math="M" /> を越えるまで足し、下回るまで引くという操作を永遠に繰り返すことができ、再配列による調整が可能になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
