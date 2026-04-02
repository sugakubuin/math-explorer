import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        離散時間信号 <InlineMath math="\{x_n\}" /> に対する <b>Z 変換</b> <InlineMath math="X(z)" /> の定義式を記せ。また、その級数が絶対収束する領域（収束域、ROC）の一般的な形状について説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-1 および Definition 7.1-2 に基づき、
                        </p>
                        <BlockMath math="X(z) = \mathcal{Z}[x_n] = \sum_{n=-\infty}^\infty x_n z^{-n}" />
                        <p>
                            ROC は複素平面上において、原点を中心とした<b>円環領域</b> <InlineMath math="r_{min} < |z| < r_{max}" /> の形状をとる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        次の信号の Z 変換（一側 Z 変換）を記せ。
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>(1) 単位インパルス <InlineMath math="\delta_{n,0}" /></li>
                        <li>(2) 単位ステップ信号 <InlineMath math="u[n]" /></li>
                    </ul>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-1">
                            <li>(1) <b><InlineMath math="1" /></b> （Example 7.1-1：全平面で収束）</li>
                            <li>(2) <b><InlineMath math="z/(z-1)" /></b> または <b><InlineMath math="1/(1-z^{-1})" /></b> （Example 7.1-2：ROC は <InlineMath math="|z| > 1" />）</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        Z 変換の<b>時間シフト則</b>（Proposition 7.2-1）を記せ。また、制御理論において変数の逆数 <InlineMath math="z^{-1}" /> がどのような物理的意味を持つか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathcal{Z}[x_{n-k}] = z^{-k} X(z)" /> である。
                        </p>
                        <p className="mt-2">
                            このため、<InlineMath math="z^{-1}" /> は信号を 1 サンプル分遅らせる <b>1 サンプル遅延演算子 (Unit Delay Operator)</b> としての物理的意味を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        指数信号 <InlineMath math="x_n = a^n u[n]" /> （因果的信号）の Z 変換を等比級数の和を用いて求め、その ROC を示せ（Example 7.1-3）。
                    </p>
                    <ExerciseSolution>
                        <BlockMath math="X(z) = \sum_{n=0}^\infty a^n z^{-n} = \sum_{n=0}^\infty (az^{-1})^n" />
                        <p>
                            これは初項 1、公比 <InlineMath math="az^{-1}" /> の等比級数である。収束条件は <InlineMath math="|az^{-1}| < 1" /> 即ち <b><InlineMath math="|z| > |a|" /></b> であり、その値は
                        </p>
                        <BlockMath math="X(z) = \frac{1}{1 - az^{-1}} = \frac{z}{z-a}" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        線形性とシフト則を用いて、有限長パルス信号 <InlineMath math="x_n = \{1, 1, 1, 0, 0, \dots\}" /> （即ち <InlineMath math="x_n = u[n] - u[n-3]" />）の Z 変換を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            線形性より、 <InlineMath math="X(z) = \mathcal{Z}[u[n]] - \mathcal{Z}[u[n-3]]" /> である。
                            <InlineMath math="\mathcal{Z}[u[n]] = \frac{z}{z-1}" /> およびシフト則 <InlineMath math="\mathcal{Z}[u[n-3]] = z^{-3} \frac{z}{z-1}" /> を用いると、
                        </p>
                        <BlockMath math="X(z) = (1 - z^{-3}) \frac{z}{z-1} = \frac{z^3 - 1}{z^2(z - 1)} = \frac{z^2 + z + 1}{z^2}" />
                        <p>
                            これは、直接定義式から <InlineMath math="1 + z^{-1} + z^{-2}" /> と計算した結果と一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        逆 Z 変換 <InlineMath math="X(z) = \frac{z}{z-0.5}" /> （因果的、ROC: <InlineMath math="|z| > 0.5" />）を、部分分数分解または既知のペアを用いて求めよ（Example 7.3-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §7.3 の基本ペア <InlineMath math="\mathcal{Z}^{-1}[\frac{z}{z-a}] = a^n u[n]" /> を用いる。
                            <InlineMath math="a = 0.5" /> であるから、 <b><InlineMath math="x_n = (0.5)^n u[n]" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        伝達関数が <InlineMath math="H(z) = \frac{z^2}{(z-0.5)(z-1.2)}" /> で与えられる因果的システムの安定性を、極の配置から判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            システムの極は、分母をゼロとする点として <InlineMath math="z = 0.5" /> および <InlineMath math="z = 1.2" /> である。
                        </p>
                        <p className="mt-2">
                            定理 7.4-2 によれば、因果的システムが安定（BIBO 安定）であるためには、すべての極が<b>単位円の内部</b>（<InlineMath math="|z| < 1" />）にある必要がある。
                            しかし、本システムは <InlineMath math="|1.2| > 1" /> である極を持つため、このシステムは<b>不安定</b>である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        留数定理（Proposition 7.3-3）を用いて、非因果的信号 <InlineMath math="X(z) = \frac{z}{z-2}" /> （ROC: <InlineMath math="|z| < 2" />）の逆 Z 変換を求めよ（Example 7.1-3(2) 証参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            留数積分 <InlineMath math="x_n = \frac{1}{2\pi i} \oint_C \frac{z}{z-2} z^{n-1} dz = \frac{1}{2\pi i} \oint_C \frac{z^n}{z-2} dz" /> を、ROC 内の閉曲線 <InlineMath math="C" /> （例えば <InlineMath math="|z|=1" />）に沿って計算する。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="n < 0" /> のとき、被積分関数は内部に極（<InlineMath math="z=0" /> など）を持つ可能性があるが、詳細は複素解析の公式による。</li>
                            <li><InlineMath math="n \ge 0" /> のとき、極 <InlineMath math="z=2" /> は <InlineMath math="C" /> の外部にあるため、コーシーの積分定理より <InlineMath math="x_n = 0" />。</li>
                        </ul>
                        <p className="mt-2">
                            実際には、等比級数 <InlineMath math="\frac{z}{z-2} = -\frac{z/2}{1 - z/2} = -\sum_{m=1}^\infty (z/2)^m" /> から係数を比較すると、 <b><InlineMath math="x_n = -2^n u[-n-1]" /></b> が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        差分方程式 <InlineMath math="y_n - 0.8 y_{n-1} = x_n" /> （初期値ゼロ）のインパルス応答 <InlineMath math="h_n" /> を、伝達関数を経由して求めよ（Example 7.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Z 変換すると <InlineMath math="Y(z) - 0.8 z^{-1} Y(z) = X(z)" /> より、伝達関数は
                            <BlockMath math="H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - 0.8 z^{-1}} = \frac{z}{z - 0.8}" />
                        </p>
                        <p>
                            逆変換を施すと、単位インパルス（<InlineMath math="x_n = \delta_{n,0}" />）に対する応答として <b><InlineMath math="h_n = (0.8)^n u[n]" /></b> が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        §7.4 で述べた BIBO 安定性の「極の条件」について、インパルス応答 <InlineMath math="h_n = a^n u[n]" /> が絶対総和可能（<InlineMath math="\sum |h_n| < \infty" />）となることと、極 <InlineMath math="a" /> が単位円内にあることの同値性を簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            インパルス応答の絶対総和は、次のような無限等比級数となる：
                            <BlockMath math="\sum_{n=0}^\infty |a^n| = \sum_{n=0}^\infty |a|^n" />
                            等比級数が収束するための必要十分条件は、公比の絶対値が 1 未満、即ち <b><InlineMath math="|a| < 1" /></b> であることである。
                            これは複素平面において、系の極 <InlineMath math="z = a" /> が原点中心の単位円の内部にあることに他ならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
