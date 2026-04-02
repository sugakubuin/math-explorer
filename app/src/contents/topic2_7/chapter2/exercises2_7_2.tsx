import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter2() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="2" number={1}>
          <p>
            ベズーの等式（Theorem 2.1-1）によれば、2つの整数 <InlineMath math="a, b" /> について、
            <InlineMath math="ax + by = k" /> を満たす整数 <InlineMath math="x, y" /> が存在するとき、
            <InlineMath math="k" /> はどのような値であるか。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 2.1-1 より、 <b><InlineMath math="k = \gcd(a, b)" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={2}>
          <p>
            1次不定方程式 <InlineMath math="ax + by = c" /> が整数解を持つための「必要十分条件」を述べよ。（Theorem 2.2-1）
          </p>
          <ExerciseSolution>
            <p>
              Theorem 2.2-1 より、 <b><InlineMath math="\gcd(a, b) \mid c" /></b> であることである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={3}>
          <p>
            ユークリッドの補題（Proposition 2.4-1）において、
            「 <InlineMath math="a \mid bc" /> かつ <InlineMath math="\gcd(a, b) = 1 \Rightarrow a \mid c" /> 」が成り立つための、
            <InlineMath math="a" /> と <InlineMath math="b" /> の間に必要な条件は何か。
          </p>
          <ExerciseSolution>
            <p>
              <b><InlineMath math="a" /> と <InlineMath math="b" /> が互いに素であること</b>（ <InlineMath math="\gcd(a, b) = 1" /> ）である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="2" number={4}>
          <p>
            拡張ユークリッド法（あるいは互除法の逆算）を用いて、
            <InlineMath math="35x + 13y = 1" /> を満たす整数解 <InlineMath math="(x, y)" /> を一組求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Example 2.1-2 に基づき、互除法を逆算する：
            </p>
            <BlockMath math="\begin{aligned} 35 &= 13 \times 2 + 9 \implies 9 = 35 - 13 \times 2 \\ 13 &= 9 \times 1 + 4 \implies 4 = 13 - 9 \\ 9 &= 4 \times 2 + 1 \implies 1 = 9 - 4 \times 2 \end{aligned}" />
            <p>
              代入して整理すると：
              <BlockMath math="\begin{aligned} 1 &= 9 - (13 - 9) \times 2 = 9 \times 3 - 13 \times 2 \\ &= (35 - 13 \times 2) \times 3 - 13 \times 2 \\ &= 35(3) + 13(-8) \end{aligned}" />
            </p>
            <p>
              よって、 <b><InlineMath math="(x, y) = (3, -8)" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={5}>
          <p>
            次の方程式のうち、整数解を持つものを選べ。また、持たないものについてはその理由を述べよ。（Example 2.2-1）
            <br />(1) <InlineMath math="6x + 10y = 15" />
            <br />(2) <InlineMath math="6x + 10y = 8" />
          </p>
          <ExerciseSolution>
            <p>
              <b>(2) が整数解を持つ。</b>
            </p>
            <p>
              理由： <InlineMath math="\gcd(6, 10) = 2" /> である。
              <br />(1) では <InlineMath math="2 \nmid 15" /> なので解を持たない。
              <br />(2) では <InlineMath math="2 \mid 8" /> なので解を持つ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={6}>
          <p>
            拡張ユークリッド法を用いて、合同方程式 <InlineMath math="7x \equiv 1 \pmod{15}" /> を解け。
            （Example 2.3-2）
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="15x + 7y = \gcd(15, 7) = 1" /> を解く。
              <BlockMath math="15(1) + 7(-2) = 1" />
              <br />
              2. 両辺を <InlineMath math="15" /> を法として考えると：
              <BlockMath math="15(1) + 7(-2) \equiv 7 \times (-2) \equiv 1 \pmod{15}" />
              <br />
              3. <InlineMath math="x \equiv -2 \equiv 13 \pmod{15}" /> である。
            </p>
            <p>
              よって、 <b><InlineMath math="x = 13" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={7}>
          <p>
            不定方程式 <InlineMath math="3x + 5y = 2" /> の特殊解の一つが <InlineMath math="(x, y) = (4, -2)" /> であるとき、
            一般解を整数 <InlineMath math="t" /> を用いて表せ。（Theorem 2.2-2）
          </p>
          <ExerciseSolution>
            <p>
              Theorem 2.2-2 より、 <InlineMath math="\gcd(3, 5) = 1" /> なので、一般解は次の通りである：
            </p>
            <BlockMath math="\begin{cases} x = 4 + 5t \\ y = -2 - 3t \end{cases} \quad (t \in \mathbb{Z})" />
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="2" number={8}>
          <p>
            「 <InlineMath math="\gcd(a, b) = 1" /> かつ <InlineMath math="\gcd(a, c) = 1 \Rightarrow \gcd(a, bc) = 1" /> 」を、
            ベズーの等式（Theorem 2.4-1）を用いて証明せよ。（Proposition 2.4-2）
          </p>
          <ExerciseSolution>
            <p>
              1. 仮定より、 <InlineMath math="ax_1 + by_1 = 1" /> および <InlineMath math="ax_2 + cy_2 = 1" /> となる整数が存在する。
            </p>
            <p>
              2. これらの左辺どうしを掛ける：
              <BlockMath math="(ax_1 + by_1)(ax_2 + cy_2) = 1 \cdot 1 = 1" />
            </p>
            <p>
              3. 展開して整理する：
              <BlockMath math="\begin{aligned} a(ax_1 x_2 + x_1 cy_2 + x_2 by_1) + bc(y_1 y_2) &= 1 \\ aX + (bc)Y &= 1 \end{aligned}" />
              ここで <InlineMath math="X, Y" /> は整数である。
            </p>
            <p>
              4. 1次結合で 1 が作れるため、Theorem 2.4-1 より <b><InlineMath math="\gcd(a, bc) = 1" /></b> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={9}>
          <p>
            ベズーの等式 <InlineMath math="ax + by = d" /> に従う解が無限にあることを、$x = x_0 + (b/d)t$、$y = y_0 - (a/d)t$ を代入することで確認せよ。
          </p>
          <ExerciseSolution>
            <p>
              与えられた式を元の式の左辺に代入する：
              <BlockMath math="\begin{aligned} a(x_0 + \frac{b}{d}t) + b(y_0 - \frac{a}{d}t) &= (ax_0 + by_0) + (\frac{ab}{d}t - \frac{ba}{d}t) \\ &= (ax_0 + by_0) + 0 \end{aligned}" />
            </p>
            <p>
              <InlineMath math="(x_0, y_0)" /> が解であれば <InlineMath math="ax_0 + by_0 = d" /> なので：
              <BlockMath math="\text{左辺} = d" />
            </p>
            <p>
              となり、任意の整数 <InlineMath math="t" /> に対してこれらが解となることが示された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={10}>
          <p>
            互いに素な整数 <InlineMath math="a" /> と <InlineMath math="b" /> に対して、
            <InlineMath math="ax \equiv 1 \pmod{b}" /> を満たす <InlineMath math="x" /> が存在すれば、
            それを用いて不定方程式 <InlineMath math="ax + by = c" /> の一組の解が構成できることを示せ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="ax \equiv 1 \pmod{b}" /> より、ある整数 <InlineMath math="k" /> を用いて <InlineMath math="ax = 1 + bk" /> すなわち <InlineMath math="ax - bk = 1" /> と書ける。
              <br />
              2. この両辺を <InlineMath math="c" /> 倍すると：
              <BlockMath math="a(cx) + b(-ck) = c" />
              <br />
              3. したがって、 <b><InlineMath math="(X, Y) = (cx, -ck)" /></b> は不定方程式 <InlineMath math="ax + by = c" /> の一組の整数解となる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
