import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter4() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="4" number={1}>
          <p>
            「2つの整数 <InlineMath math="a" /> と <InlineMath math="b" /> が正の整数 <InlineMath math="m" /> を法として合同である」ことの定義を述べよ。（Definition 4.1-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 4.1-1 より、 <b><InlineMath math="m \mid (a - b)" /></b> が成り立つとき、
              すなわち <InlineMath math="a - b" /> が <InlineMath math="m" /> の倍数であるとき、
              <InlineMath math="a \equiv b \pmod{m}" /> と書く。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={2}>
          <p>
            剰余類 <InlineMath math="\overline{a} \in \mathbb{Z}/m\mathbb{Z}" /> が乗法逆元を持つための必要十分条件を述べよ。（Theorem 4.3-1）
          </p>
          <ExerciseSolution>
            <p>
              Theorem 4.3-1 より、 <b><InlineMath math="\gcd(a, m) = 1" /></b> であることである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={3}>
          <p>
            中国剰余定理（Theorem 4.4-2）において、連立合同方程式が法 <InlineMath math="m_1 m_2 \cdots m_k" /> でただ一つの解を持つために、
            法 <InlineMath math="m_1, \dots, m_k" /> が満たすべき条件は何か。
          </p>
          <ExerciseSolution>
            <p>
              法 <InlineMath math="m_1, \dots, m_k" /> が <b>互いに素</b> であることである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="4" number={4}>
          <p>
            合同式の性質（Theorem 4.1-1）を用いて、 <InlineMath math="13^{10}" /> を 7 で割った余りを求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="13 \equiv -1 \pmod{7}" /> である。
              <br />
              2. 両辺を 10 乗すると、 <InlineMath math="13^{10} \equiv (-1)^{10} \pmod{7}" />。
              <br />
              3. <InlineMath math="(-1)^{10} = 1" /> であるから、 <b>余りは 1</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={5}>
          <p>
            剰余環 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> における零因子（Definition 4.2-3）をすべて答えよ。
          </p>
          <ExerciseSolution>
            <p>
              積が <InlineMath math="\overline{0}" /> になる 0 以外の元の組を探す。
              <BlockMath math="\overline{2} \cdot \overline{3} = \overline{6} = \overline{0}" />
              <BlockMath math="\overline{3} \cdot \overline{4} = \overline{12} = \overline{0}" />
              したがって、 <b><InlineMath math="\overline{2}, \overline{3}, \overline{4}" /></b> が零因子である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={6}>
          <p>
            1次合同方程式 <InlineMath math="3x \equiv 6 \pmod{9}" /> を解け。解が複数ある場合はすべて答えよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="\gcd(3, 9) = 3" /> であり、 <InlineMath math="3 \mid 6" /> なので解は 3 つ存在する（Theorem 4.4-1）。
              <br />
              2. 方程式の両辺と法を 3 で割ると、 <InlineMath math="x \equiv 2 \pmod{3}" /> となる（Proposition 4.1-1）。
              <br />
              3. これを満たす解を mod 9 の範囲で書き出すと、 <b><InlineMath math="x \equiv 2, 5, 8 \pmod{9}" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={7}>
          <p>
            連立合同方程式
            <InlineMath math="\begin{cases} x \equiv 2 \pmod{3} \\ x \equiv 3 \pmod{5} \end{cases}" />
            を解け。
          </p>
          <ExerciseSolution>
            <p>
              1. 第 1 式より、 <InlineMath math="x = 3k + 2" /> とおける。
              <br />
              2. 第 2 式に代入： <InlineMath math="3k + 2 \equiv 3 \pmod{5} \implies 3k \equiv 1 \pmod{5}" />。
              <br />
              3. mod 5 で 3 の逆元は 2 である（ <InlineMath math="3 \cdot 2 = 6 \equiv 1" /> ）ため、両辺を 2 倍して <InlineMath math="k \equiv 2 \pmod{5}" />。
              <br />
              4. <InlineMath math="k = 5l + 2" /> を代入すると、 <InlineMath math="x = 3(5l + 2) + 2 = 15l + 8" />。
              <br />
              よって、 <b><InlineMath math="x \equiv 8 \pmod{15}" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="4" number={8}>
          <p>
            <InlineMath math="ac \equiv bc \pmod{m}" /> かつ <InlineMath math="\gcd(c, m) = d" /> のとき、
            <InlineMath math="a \equiv b \pmod{m/d}" /> が成り立つことを証明せよ。（Proposition 4.1-1）
          </p>
          <ExerciseSolution>
            <p>
              1. 仮定より、ある整数 <InlineMath math="k" /> を用いて <InlineMath math="c(a - b) = km" /> と書ける。
              <br />
              2. 両辺を <InlineMath math="d = \gcd(c, m)" /> で割ると、 <InlineMath math="\frac{c}{d}(a - b) = k \frac{m}{d}" /> となる。
              ここで、 <InlineMath math="c/d" /> と <InlineMath math="m/d" /> は互いに素である（Proposition 1.2-1）。
              <br />
              3. ユークリッドの補題（Proposition 2.4-1）により、 <InlineMath math="m/d" /> は <InlineMath math="a - b" /> を割り切らなければならない。
              <br />
              4. したがって、 <b><InlineMath math="a \equiv b \pmod{m/d}" /></b> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={9}>
          <p>
            法 <InlineMath math="p" /> が素数であるとき、 <InlineMath math="\mathbb{Z}/p\mathbb{Z}" /> が 0 以外のすべての元に逆元を持つ（すなわち「体」である）ことを、
            Theorem 4.3-1 を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="\overline{a} \in \mathbb{Z}/p\mathbb{Z}" /> かつ <InlineMath math="\overline{a} \neq \overline{0}" /> とする。
              これは <InlineMath math="a" /> が <InlineMath math="p" /> の倍数でないことを意味する。
              <br />
              2. <InlineMath math="p" /> は素数であるから、 <InlineMath math="p" /> の約数は 1 と <InlineMath math="p" /> のみである。
              <InlineMath math="a" /> が <InlineMath math="p" /> の倍数でない以上、 <InlineMath math="a" /> と <InlineMath math="p" /> の共通の約数は 1 しかありえない。
              <br />
              3. したがって、 <b><InlineMath math="\gcd(a, p) = 1" /></b> が成り立つ。
              <br />
              4. Theorem 4.3-1 より、 <InlineMath math="\gcd(a, p) = 1" /> ならば逆元が存在する。
              よって 0 以外の任意の元に対して逆元が存在し、 <InlineMath math="\mathbb{F}_p" /> は体となる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={10}>
          <p>
            物不見数（孫子問題）：
            「3 で割ると 2 余り、5 で割ると 3 余り、7 で割ると 2 余る数」のうち、最小の正の整数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="x \equiv 8 \pmod{15}" /> （Exercise 4.7より前の2つの条件の解）と、
              第 3 の条件 <InlineMath math="x \equiv 2 \pmod{7}" /> を連立させる。
              <br />
              2. <InlineMath math="x = 15k + 8" /> とおき代入： <InlineMath math="15k + 8 \equiv 2 \pmod{7} \implies k + 1 \equiv 2 \pmod{7}" />。
              （ <InlineMath math="15 \equiv 1, \ 8 \equiv 1 \pmod{7}" /> を利用）
              <br />
              3. <InlineMath math="k \equiv 1 \pmod{7}" /> を得る。
              <br />
              4. <InlineMath math="k = 7l + 1" /> を代入： <InlineMath math="x = 15(7l + 1) + 8 = 105l + 23" />。
              <br />
              よって最小の正の整数は <b>23</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
