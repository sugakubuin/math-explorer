import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_3_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の<b>符号付き測度 (signed measure)</b> の定義を述べよ。特に、測度の値の範囲に関する制約を明記せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-1 および 7.2-1 に基づき、以下を満たす写像 <InlineMath math="\nu: \mathcal{A} \to [-\infty, \infty]" /> である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>値の範囲</b>: <InlineMath math="+\infty" /> と <InlineMath math="-\infty" /> の<b>両方の値はとらない</b>（和の定義可能性のため）。
                            </li>
                            <li>
                                <b>空集合</b>: <InlineMath math="\nu(\emptyset) = 0" />。
                            </li>
                            <li>
                                <b>可算加法性</b>: 互いに素な集合列 <InlineMath math="\{A_n\}" /> に対して <InlineMath math="\nu(\bigcup_{n=1}^\infty A_n) = \sum_{n=1}^\infty \nu(A_n)" /> が成り立つ。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        符号付き測度 <InlineMath math="\nu" /> に対する<b>ハーン分解定理 (Hahn Decomposition Theorem)</b> の主張を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.1-1 に基づき、以下の性質を持つ可測集合のペア <InlineMath math="(P, N)" /> が存在することを主張する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <InlineMath math="X = P \cup N" /> かつ <InlineMath math="P \cap N = \emptyset" /> である。
                            </li>
                            <li>
                                <InlineMath math="P" /> は<b>正集合 (positive set)</b>である。すなわち、 <InlineMath math="A \subset P" /> なるすべての可測集合に対して <InlineMath math="\nu(A) \ge 0" /> が成り立つ。
                            </li>
                            <li>
                                <InlineMath math="N" /> は<b>負集合 (negative set)</b>である。すなわち、 <InlineMath math="A \subset N" /> なるすべての可測集合に対して <InlineMath math="\nu(A) \le 0" /> が成り立つ。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        二つの測度 <InlineMath math="\mu" /> (非負) と <InlineMath math="\nu" /> (符号付き) について、 <InlineMath math="\nu" /> が <InlineMath math="\mu" /> に関して<b>絶対連続 (absolutely continuous)</b> であること（ <InlineMath math="\nu \ll \mu" /> ）の定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.3-1 に基づき、以下のように定義される。
                        </p>
                        <p className="mt-2">
                            任意の可測集合 <InlineMath math="A \in \mathcal{A}" /> に対して、
                            <BlockMath math="\mu(A) = 0 \implies \nu(A) = 0" />
                            が成り立つとき、測度 <InlineMath math="\nu" /> は <InlineMath math="\mu" /> に関して絶対連続であるという。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        非負測度 <InlineMath math="\mu" /> と可積分関数 <InlineMath math="f" /> を用いて <InlineMath math="\nu(A) = \int_A f \, d\mu" /> と定義される符号付き測度について、その<b>ジョルダン分解</b> <InlineMath math="\nu = \nu^+ - \nu^-" /> を <InlineMath math="f" /> の部分関数（正部分 <InlineMath math="f^+" />・負部分 <InlineMath math="f^-" /> ）を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.2-1 の記述に基づき、以下のように表される。
                        </p>
                        <BlockMath math="\nu^+(A) = \int_A f^+ \, d\mu, \quad \nu^-(A) = \int_A f^- \, d\mu" />
                        <p>
                            ただし、 <InlineMath math="f^+(x) = \max\{f(x), 0\}" />、 <InlineMath math="f^-(x) = \max\{-f(x), 0\}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        符号付き測度 <InlineMath math="\nu(A) = \int_A f \, d\mu" /> に対して、その<b>全変動測度 (total variation measure)</b> <InlineMath math="|\nu|" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.2-1 および Example 7.2-1 に基づく。
                        </p>
                        <p>
                            全変動測度は正変動と負変動の和であり、
                            <BlockMath math="|\nu|(A) = \nu^+(A) + \nu^-(A) = \int_A (f^+ + f^-) \, d\mu" />
                            <InlineMath math="f^+ + f^- = |f|" /> であるから、
                            <BlockMath math="|\nu|(A) = \int_A |f| \, d\mu" />
                        </p>
                        <p>
                            したがって、全変動測度の密度関数は <InlineMath math="|f|" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                         <InlineMath math="x=0" /> におけるディラック測度 <InlineMath math="\delta_0" /> と、数直線上のルベーグ測度 <InlineMath math="\lambda" /> が<b>相互特異 (mutually singular)</b> であることを、定義に基づいて示せ（Example 7.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            相互特異の定義 (Definition 7.4-1) に基づき、領域の分割を示す。
                        </p>
                        <p>
                            <InlineMath math="A = \{0\}" />, <InlineMath math="B = \mathbb{R} \setminus \{0\}" /> とおくと、以下が成り立つ：
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><InlineMath math="A \cup B = \mathbb{R}, \ A \cap B = \emptyset" /></li>
                            <li>ルベーグ測度の性質より <InlineMath math="\lambda(A) = \lambda(\{0\}) = 0" /></li>
                            <li>ディラック測度の性質より <InlineMath math="\delta_0(B) = \delta_0(\mathbb{R} \setminus \{0\}) = 0" /></li>
                        </ul>
                        <p className="mt-2">
                            したがって、ルベーグ測度とディラック測度は共通の台を持たず、相互特異 ( <InlineMath math="\lambda \perp \delta_0" /> ) である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        <b>ラドン・ニコディムの定理</b> (Theorem 7.3-1) の主張を、 <InlineMath math="\sigma" />-有限な非負測度 <InlineMath math="\mu" /> および絶対連続な符号付き測度 <InlineMath math="\nu \ll \mu" /> を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ある可測関数 <InlineMath math="f" /> が <InlineMath math="\mu" />-a.e. で一意に存在して、任意の可測集合 <InlineMath math="A" /> に対して
                            <BlockMath math="\nu(A) = \int_A f \, d\mu" />
                            が成り立つ。このとき <InlineMath math="f" /> を <b>ラドン・ニコディム微分</b> と呼び、 <InlineMath math="\frac{d\nu}{d\mu}" /> と表記する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        ハーン分解定理を用いて、符号付き測度の<b>ジョルダン分解</b>の一意性と存在の概略を説明せよ（Theorem 7.2-1 Proof 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ハーン分解定理により、全空間を正集合 <InlineMath math="P" /> と負集合 <InlineMath math="N" /> に分割する。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>存在</b>: 任意の集合 <InlineMath math="A" /> に対し、 <InlineMath math="\nu^+(A) = \nu(A \cap P)" /> および <InlineMath math="\nu^-(A) = -\nu(A \cap N)" /> と定義すれば、これらは非負測度をなし、 <InlineMath math="\nu = \nu^+ - \nu^-" /> を満たす。
                            </li>
                            <li>
                                <b>特異性</b>: <InlineMath math="\nu^+" /> は <InlineMath math="N" /> 上で 0、 <InlineMath math="\nu^-" /> は <InlineMath math="P" /> 上で 0 であるため、両者は相互特異である。
                            </li>
                            <li>
                                <b>一意性</b>: 別の分解があったとしても、ハーン分解の本質的な一意性（対称差が測度 0）により、得られる非負測度も一致する。
                            </li>
                        </ul>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        <b>ルベーグ分解定理</b> (Theorem 7.4-1) により、符号付き測度 <InlineMath math="\nu" /> が絶対連続部 <InlineMath math="\nu_{ac}" /> と特異部 <InlineMath math="\nu_s" /> に分解される際、カントール関数から導かれる測度（カントール測度）がどのような分解を持つか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.4-2 および §6.5 の記述に基づく。
                        </p>
                        <p>
                            カントール関数はほとんど至る所で微分係数が 0 であるが 0 から 1 まで増加する性質を持つ。
                            ルベーグ測度 <InlineMath math="\lambda" /> に関するルベーグ分解を考えると、
                            <BlockMath math="\nu = \nu_{ac} + \nu_s" />
                            において、絶対連続部 <InlineMath math="\nu_{ac}" /> （密度関数を持つ部分）は<b>恒等的に 0</b> となり、カントール測度はその全てが<b>特異部 <InlineMath math="\nu_s" /></b> として扱われる。
                            これは、カントール測度の「台」が、ルベーグ測度 0 の集合（カントール集合）の上に集中しているためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        <b>リースの表現定理</b> (Theorem 7.5-1) において、ラドン・ニコディムの定理がどのような役割を果たしているか、汎関数 <InlineMath math="L" /> から密度関数 <InlineMath math="g" /> を導出するプロセスの観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proof 7.5-1 のスケッチに基づき説明する。
                        </p>
                        <p>
                             <InlineMath math="L^p" /> 上の有界線形汎関数 <InlineMath math="L" /> に対して、特性関数 <InlineMath math="\mathbf{1}_A" /> を用いて新しい測度 <InlineMath math="\nu(A) = L(\mathbf{1}_A)" /> を定義する。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>この測度 <InlineMath math="\nu" /> は、元の測度 <InlineMath math="\mu" /> に関して絶対連続 ( <InlineMath math="\nu \ll \mu" /> ) であることが示される。</li>
                            <li>ここで<b>ラドン・ニコディムの定理を適用</b>することで、ラドン・ニコディム微分（密度関数） <InlineMath math="g" /> が一意に存在する。</li>
                            <li>この <InlineMath math="g" /> を用いることで、汎関数の働きが積の積分 <InlineMath math="L(f) = \int f g \, d\mu" /> として表現されることになる。</li>
                        </ul>
                        <p className="mt-2">
                            すなわち、関数空間の構造を決定する表現定理において、ラドン・ニコディムの定理は<b>汎関数の「実体」である密度関数を取り出すための鍵</b>となっている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
