import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter6() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="6" number={1}>
          <p>
            オイラーのトーシェント関数 <InlineMath math="\phi(n)" /> の定義を述べよ。（Definition 6.1-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 6.1-1 より、正の整数 <InlineMath math="n" /> に対し、
              <b><InlineMath math="1 \le k \le n" /> かつ <InlineMath math="\gcd(k, n) = 1" /> を満たす整数 <InlineMath math="k" /> の個数</b> を指す。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={2}>
          <p>
            オイラーの定理（Theorem 6.3-1）を、法 <InlineMath math="m" /> と整数 <InlineMath math="a" /> が満たすべき条件とともに述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 6.3-1 より、 <b><InlineMath math="m" /> を正の整数、 <InlineMath math="a" /> を <InlineMath math="m" /> と互いに素な整数</b> とするとき、
              <BlockMath math="a^{\phi(m)} \equiv 1 \pmod{m}" />
              が成り立つ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={3}>
          <p>
            約数和の公式（Theorem 6.4-1）によれば、 <InlineMath math="n" /> のすべての正の約数 <InlineMath math="d" /> について <InlineMath math="\phi(d)" /> の和をとるとどのような値になるか。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 6.4-1 より、 <b>元の数 <InlineMath math="n" /> と一致する</b>（ <InlineMath math="\sum_{d \mid n} \phi(d) = n" /> ）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="6" number={4}>
          <p>
            オイラーの関数の一般公式（Corollary 6.2-1）を用いて、 <InlineMath math="\phi(360)" /> を計算せよ。
            （ <InlineMath math="360 = 2^3 \times 3^2 \times 5" /> ）
          </p>
          <ExerciseSolution>
            <p>
              1. 公式 <InlineMath math="\phi(n) = n \prod_{p \mid n} (1 - 1/p)" /> を用いる。
              <br />
              2. <InlineMath math="n=360" /> の素因数は 2, 3, 5 であるから、
              <BlockMath math="\begin{aligned} \phi(360) &= 360 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) \left(1 - \frac{1}{5}\right) \\ &= 360 \cdot \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{4}{5} \end{aligned}" />
              <br />
              3. 計算すると、 <InlineMath math="360 \cdot \frac{4}{15} = 24 \cdot 4 = 96" />。
              <br />
              よって、 <b>96</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={5}>
          <p>
            オイラーの定理を用いて、 <InlineMath math="2^{100}" /> を 35 で割った余りを求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="\gcd(2, 35) = 1" /> である。
              <br />
              2. <InlineMath math="\phi(35) = \phi(5)\phi(7) = 4 \times 6 = 24" /> である。
              <br />
              3. オイラーの定理より <InlineMath math="2^{24} \equiv 1 \pmod{35}" />。
              <br />
              4. 指数 100 を 24 で割ると、 <InlineMath math="100 = 24 \times 4 + 4" />。
              <br />
              5. <InlineMath math="2^{100} = (2^{24})^4 \times 2^4 \equiv 1^4 \times 16 = 16 \pmod{35}" />。
              <br />
              よって、 <b>16</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={6}>
          <p>
            <InlineMath math="n=12" /> について、そのすべての約数に対する <InlineMath math="\phi(d)" /> の値を書き出し、
            約数和 <InlineMath math="\sum_{d \mid 12} \phi(d)" /> が 12 になることを確認せよ。
          </p>
          <ExerciseSolution>
            <p>
              12 の約数は <b>{"{1, 2, 3, 4, 6, 12}"}</b>。
              <BlockMath math="\begin{aligned} &\phi(1) = 1 \\ &\phi(2) = 1 \\ &\phi(3) = 2 \\ &\phi(4) = 2 \\ &\phi(6) = 2 \\ &\phi(12) = 4 \end{aligned}" />
              これらを合計すると、 <InlineMath math="1+1+2+2+2+4 = 12" />。確かに一致する。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={7}>
          <p>
            メビウス関数 <InlineMath math="\mu(10)" /> の値を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="10 = 2 \times 5" /> と素因数分解される。
              <br />
              2. 相異なる素数 2 つの積であるから、 <InlineMath math="\mu(10) = (-1)^2 = 1" />。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="6" number={8}>
          <p>
            中国剰余定理（またはその同型対応）に基づき、 <InlineMath math="\gcd(m, n) = 1" /> ならば <InlineMath math="\phi(mn) = \phi(m)\phi(n)" />
            が成り立つ理由を説明せよ。（Theorem 6.2-1）
          </p>
          <ExerciseSolution>
            <p>
              1. 中国剰余定理により、 <InlineMath math="\gcd(m, n) = 1" /> のとき、剰余環との間に同型写像 <InlineMath math="f: \mathbb{Z}/mn\mathbb{Z} \to \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}" /> が存在する。
              <br />
              2. 元 <InlineMath math="x" /> が <InlineMath math="\mathbb{Z}/mn\mathbb{Z}" /> で逆元を持つこと（すなわち <InlineMath math="\gcd(x, mn) = 1" /> ）と、
              <InlineMath math="f(x) = (\overline{x}_m, \overline{x}_n)" /> がそれぞれの成分で逆元を持つこと（すなわち <InlineMath math="\gcd(x, m) = 1" /> かつ <InlineMath math="\gcd(x, n) = 1" /> ）は同値である。
              <br />
              3. 左辺の集合のサイズは <InlineMath math="\phi(mn)" />、右辺の集合のサイズは直積なのでそれぞれの要素数の積 <InlineMath math="\phi(m)\phi(n)" /> である。
              <br />
              4. したがって、 <b><InlineMath math="\phi(mn) = \phi(m)\phi(n)" /></b> が成り立つ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={9}>
          <p>
            メビウスの反転公式（Theorem 6.4-2）を用いて、約数和の公式 <InlineMath math="n = \sum_{d \mid n} \phi(d)" /> から
            オイラー関数 <InlineMath math="\phi(n)" /> をメビウス関数を用いた和の形で表せ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="f(n) = n, \ g(d) = \phi(d)" /> とおくと、約数和の公式は <InlineMath math="f(n) = \sum_{d \mid n} g(d)" /> と書ける。
              <br />
              2. メビウスの反転公式を適用すると、 <InlineMath math="g(n) = \sum_{d \mid n} \mu(n/d) f(d)" /> が得られる。
              <br />
              3. これに <InlineMath math="f, g" /> の具体的な形を代入すると、 <b><InlineMath math="\phi(n) = \sum_{d \mid n} \mu(n/d) d" /></b> となり、
              オイラー関数をメビウス関数で表現する式が得られた。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={10}>
          <p>
            解析的数論における「メビウス関数の合計の基本性質」
            <BlockMath math="\sum_{d \mid n} \mu(d) = \begin{cases} 1 & (n = 1) \\ 0 & (n > 1) \end{cases}" />
            が <InlineMath math="n = p^k \ (k \ge 1)" /> の場合に成り立つことを示せ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="n = p^k" /> の正の約数は <b>{"{1, p, p^2, \dots, p^k}"}</b> である。
              <br />
              2. これらの約数に対するメビウス関数の値は：
              <br />・ <InlineMath math="\mu(1) = 1" />
              <br />・ <InlineMath math="\mu(p) = -1" />
              <br />・ <InlineMath math="\mu(p^j) = 0 \ (j \ge 2)" /> （平方因子を含むため）
              <br />
              3. したがって和をとると：
              <InlineMath math="\sum_{d \mid p^k} \mu(d) = \mu(1) + \mu(p) + \mu(p^2) + \dots + \mu(p^k) = 1 + (-1) + 0 + \dots + 0 = 0" />
              となり、性質が成り立つ。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
