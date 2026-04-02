import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="9" number={1}>
                    <p>
                        有界閉区間 <InlineMath math="[a, b]" /> の<b>分割</b>（ Definition 9.1-1 ）の定義を記せ。また、分割の大きさを測る「大きさ（メッシュ）」の定義も述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            区間 <InlineMath math="[a, b]" /> において、
                            <BlockMath math="\Delta = \{x_0, x_1, x_2, \dots, x_n\}" />
                            ただし <InlineMath math="a = x_0 < x_1 < x_2 < \dots < x_n = b" /> を満たす有限個の点の集合を<b>分割</b>と呼ぶ。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300">
                            分割の<b>大きさ</b> <InlineMath math="|\Delta|" /> は、小区間 <InlineMath math="I_i = [x_{i-1}, x_i]" /> の幅の最大値、すなわち
                            <BlockMath math="|\Delta| = \max_{1 \leq i \leq n} (x_i - x_{i-1})" />
                            で定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>
                        有界関数 <InlineMath math="f" /> と分割 <InlineMath math="\Delta" /> に対して定義される<b>ダルブーの上和</b> <InlineMath math="U(f, \Delta)" /> と<b>下和</b> <InlineMath math="L(f, \Delta)" /> の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            小区間 <InlineMath math="I_i = [x_{i-1}, x_i]" /> における <InlineMath math="f" /> の上限を <InlineMath math="M_i" />、下限を <InlineMath math="m_i" />、幅を <InlineMath math="\Delta x_i" /> とすると：
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <b>上和:</b> <InlineMath math="U(f, \Delta) = \sum_{i=1}^n M_i \Delta x_i \quad \text{where } M_i = \sup_{x \in I_i} f(x)" />
                            </li>
                            <li>
                                <b>下和:</b> <InlineMath math="L(f, \Delta) = \sum_{i=1}^n m_i \Delta x_i \quad \text{where } m_i = \inf_{x \in I_i} f(x)" />
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>
                        有界関数 <InlineMath math="f" /> が有界閉区間 <InlineMath math="[a, b]" /> 上で<b>リーマン可積分</b>であることの、ダルブーの和を用いた必要十分条件（可積分条件）を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義によれば、上積分と下積分が一致することであるが、実用的な判定条件は次の通りである：
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">
                            任意の <InlineMath math="\varepsilon > 0" /> に対して、ある分割 <InlineMath math="\Delta" /> が存在して、
                            <BlockMath math="U(f, \Delta) - L(f, \Delta) < \varepsilon" />
                            が成り立つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="9" number={4}>
                    <p>
                        関数 <InlineMath math="f(x) = x" /> を区間 <InlineMath math="[0, 1]" /> 上で積分する場合を考える。<InlineMath math="n" /> 等分による分割を <InlineMath math="\Delta_n" /> とするとき、上和 <InlineMath math="U(f, \Delta_n)" /> と下和 <InlineMath math="L(f, \Delta_n)" /> をそれぞれ計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            分割点 <InlineMath math="x_i = i/n" />、小区間の幅 <InlineMath math="\Delta x_i = 1/n" /> である。<InlineMath math="f(x) = x" /> は単調増加なので、<InlineMath math="I_i = [\frac{i-1}{n}, \frac{i}{n}]" /> における上限・下限は端点での値と一致する。
                        </p>
                        <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                            <li>
                                <b>下和:</b>
                                <BlockMath math="\begin{aligned} L(f, \Delta_n) &= \sum_{i=1}^n \frac{i-1}{n} \cdot \frac{1}{n} = \frac{1}{n^2} \sum_{k=0}^{n-1} k \\ &= \frac{1}{n^2} \frac{(n-1)n}{2} = \frac{1}{2} - \frac{1}{2n} \end{aligned}" />
                            </li>
                            <li>
                                <b>上和:</b>
                                <BlockMath math="\begin{aligned} U(f, \Delta_n) &= \sum_{i=1}^n \frac{i}{n} \cdot \frac{1}{n} = \frac{1}{n^2} \sum_{i=1}^n i \\ &= \frac{1}{n^2} \frac{n(n+1)}{2} = \frac{1}{2} + \frac{1}{2n} \end{aligned}" />
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>
                        分割を細かく（細分）すると、上和は減少し（削られ）、下和は増加（補填）することを、小区間を1つ分ける図形的なイメージに基づいて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1つの小区間 <InlineMath math="I" /> を点 <InlineMath math="p" /> で2つの小区間 <InlineMath math="I_1, I_2" /> に分割することを考える。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-slate-700 dark:text-slate-300">
                            <li>
                                <b>下和</b>の場合：元の区間の最小値 <InlineMath math="m" /> よりも、細分された各区間の最小値 <InlineMath math="m_1, m_2" /> のほうが「内側の隙間」が埋められるため、値は小さくならない（<InlineMath math="m \leq m_1, m \leq m_2" />）。したがって面積の合計は増える。
                            </li>
                            <li>
                                <b>上和</b>の場合：元の区間の最大値 <InlineMath math="M" /> よりも、細分された各区間の最大値 <InlineMath math="M_1, M_2" /> のほうが「はみ出した部分」が削られるため、値は大きくならない（<InlineMath math="M \geq M_1, M \geq M_2" />）。したがって面積の合計は減る。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={6}>
                    <p>
                        連続関数がリーマン可積分であることの証明において、<b>一様連続性</b>（ Chapter 5 ）がどのように使われているか概説せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 9.3-1 の証明のロジックを説明する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li>可積分性を示すには、<InlineMath math="U - L" /> を任意に小さくできる分割を見つければよい。</li>
                            <li>閉区間上の連続関数は<b>一様連続</b>である（ハイネ・カントールの定理）。したがって、どんなに小さな <InlineMath math="\varepsilon" /> に対しても、適切な細かさの分割をとれば、各小区間内での最大値と最小値の差 <InlineMath math="M_i - m_i" /> を区間全体で一様に（均一に）小さくできる。</li>
                            <li>この一様性により、偏差の合計である差分 <InlineMath math="\sum (M_i - m_i) \Delta x_i" /> を、区間の全幅 <InlineMath math="b-a" /> との関係から <InlineMath math="\varepsilon(b-a)" /> として制御可能となるため、可積分性が保証される。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>
                        積分の線形性（ Proposition 9.4-1 ）を用いて、次の値を求めよ。ただし <InlineMath math="f, g" /> は可積分とする。
                        <BlockMath math="\int_1^3 \{2f(x) - 3g(x)\} dx \\ \left( \text{ただし } \int_1^3 f(x) dx = 5, \ \int_1^3 g(x) dx = 2 \right)" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            積分の線形性により、定数倍を外に出し、加法を分割することができる。
                        </p>
                        <BlockMath math="\begin{aligned} \int_1^3 \{2f(x) - 3g(x)\} dx &= 2\int_1^3 f(x) dx - 3\int_1^3 g(x) dx \\ &= 2(5) - 3(2) \\ &= 10 - 6 = 4 \end{aligned}" />
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="9" number={8}>
                    <p>
                        有界閉区間上において、単調増加（または単調減少）な関数は必ずリーマン可積分であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 9.3-2 の証明を等分割を用いて構成する。
                            <InlineMath math="f" /> を <InlineMath math="[a, b]" /> 上の単調増加関数とする。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li>区間を <InlineMath math="n" /> 等分する。幅は <InlineMath math="h = \frac{b-a}{n}" /> である。</li>
                            <li>各小区間 <InlineMath math="I_i = [x_{i-1}, x_i]" /> において、単調性より <InlineMath math="M_i = f(x_i)" /> かつ <InlineMath math="m_i = f(x_{i-1})" /> である。</li>
                            <li>上和と下和の差を計算する。
                                <BlockMath math="\begin{aligned} U(f, \Delta_n) - L(f, \Delta_n) &= \sum_{i=1}^n \{f(x_i) - f(x_{i-1})\} h \\ &= h \cdot \{f(x_n) - f(x_0)\} \\ &= \frac{b-a}{n} \{f(b) - f(a)\} \end{aligned}" />
                            </li>
                            <li>ここで <InlineMath math="n \to \infty" /> とすれば、右辺は <InlineMath math="0" /> に収束する。</li>
                            <li>したがって、任意の <InlineMath math="\varepsilon" /> に対し、十分に大きい <InlineMath math="n" /> を選べば差を <InlineMath math="\varepsilon" /> 未満にできるため、可積分である。</li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={9}>
                    <p>
                        区間 <InlineMath math="[0, 1]" /> 上のディリクレ関数（有理数で 1、無理数で 0）がいかなる分割に対してもリーマン可積分ではないことを、上積分と下積分の不一致を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            実数の<b>稠密性</b>（ Chapter 2 ）を用いる。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                            <li>いかなる小区間 <InlineMath math="I_i = [x_{i-1}, x_i]" /> にも、必ず有理数と無理数が含まれる。</li>
                            <li>そのため、すべての小区間において上限は <InlineMath math="M_i = 1" />、下限は <InlineMath math="m_i = 0" /> となる。</li>
                        </ul>
                        <p className="mt-4">
                            このとき、任意の分割 <InlineMath math="\Delta" /> に対して：
                        </p>
                        <BlockMath math="\begin{aligned} L(f, \Delta) &= \sum 0 \cdot \Delta x_i = 0 \\ U(f, \Delta) &= \sum 1 \cdot \Delta x_i = 1 \cdot (b-a) = 1 \end{aligned}" />
                        <p className="mt-4">
                            下積分（下和の上限）は <InlineMath math="0" />、上積分（上和の下限）は <InlineMath math="1" /> となり、これらが一致しないため、リーマン可積分ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={10}>
                    <p>
                        有界関数 <InlineMath math="f" /> について、<b>いかなる下和もいかなる上和を超えることはない</b>（ <InlineMath math="L(f, \Delta_1) \leq U(f, \Delta_2)" /> ）ことの証明の要点を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            異なる2つの分割 <InlineMath math="\Delta_1, \Delta_2" /> を比較するために、共通の<b>細分</b>（共通細分）を利用することがポイントである。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                            <li><InlineMath math="\Delta^* = \Delta_1 \cup \Delta_2" /> とする。これは <InlineMath math="\Delta_1" /> と <InlineMath math="\Delta_2" /> の両方の細分である。</li>
                            <li>「細分によって下和は増加し、上和は減少する」という単調性の定理を用いると：
                                <BlockMath math="\begin{aligned} L(f, \Delta_1) &\leq L(f, \Delta^*) \\ U(f, \Delta^*) &\leq U(f, \Delta_2) \end{aligned}" />
                            </li>
                            <li>同じ分割（共通細分）において常に <InlineMath math="L(f, \Delta^*) \leq U(f, \Delta^*)" /> であるから、これらを繋いで：
                                <BlockMath math="L(f, \Delta_1) \leq L(f, \Delta^*) \leq U(f, \Delta^*) \leq U(f, \Delta_2)" />
                                が得られ、証明される。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
