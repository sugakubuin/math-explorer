import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter3() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="3" number={1}>
          <p>
            「素数」と「合成数」の厳密な定義を、約数の個数に注目して述べよ。（Definition 3.1-1, 3.1-2）
          </p>
          <ExerciseSolution>
            <p>
              Definition 3.1-1, 3.1-2 より、 2 以上の整数のうち：
              <br />・ 正の約数が 1 と自分自身のみ（計 2 個）であるものを <b>素数</b>
              <br />・ 素数でないもの（正の約数が 3 個以上）を <b>合成数</b>
              と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={2}>
          <p>
            算術の基本定理（Theorem 3.2-2）が主張する、2 以上の整数の素因数分解における 2 つの性質は何か。
          </p>
          <ExerciseSolution>
            <p>
              次の 2 点である：
              <br />1. <b>存在性</b>： 常に素数の積として表せる。
              <br />2. <b>一意性</b>： 分解の方法は（因数の順序を除いて）一通りである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={3}>
          <p>
            素数定理（Theorem 3.4-1）において、十分大きな <InlineMath math="x" /> 以下に含まれる素数の個数 <InlineMath math="\pi(x)" />
            はどのような式で近似されるか。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 3.4-1 より、 <b><InlineMath math="\pi(x) \sim \frac{x}{\ln x}" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="3" number={4}>
          <p>
            エラトステネスの篩（Definition 3.4-1）を用いて、 30 以下の素数をすべて列挙せよ。
            その際、篩の操作（消去）をどの数まで行えば十分であるかを根拠とともに述べよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 篩の操作</b>
              <br />
              ・2の倍数（4, 6, ... 30）を消去。
              <br />
              ・3の倍数（9, 15, ... 27）を消去。
              <br />
              ・5の倍数（25）を消去。
              <br />
              残った数は： <b>{"{2, 3, 5, 7, 11, 13, 17, 19, 23, 29}"}</b> である。
            </p>
            <p>
              <b>2. 根拠</b>
              <br />
              <InlineMath math="\sqrt{30} \approx 5.47" /> なので、 <b>5 までの素数の倍数</b>を消せば十分である。
              （ <InlineMath math="n" /> 以下の合成数は必ず <InlineMath math="\sqrt{n}" /> 以下の素因数を持つため）
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={5}>
          <p>
            整数 <InlineMath math="360" /> を標準分解（Definition 3.2-1）の形で表せ。
          </p>
          <ExerciseSolution>
            <p>
              順次素数で割っていく：
              <br />
              <InlineMath math="360 = 10 \times 36 = (2 \times 5) \times (2^2 \times 3^2) = 2^3 \times 3^2 \times 5" />
              <br />
              よって、 <b><InlineMath math="360 = 2^3 \cdot 3^2 \cdot 5" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={6}>
          <p>
            ユークリッドによる素数の無限性の証明（Theorem 3.3-1）において、有限個の素数 <InlineMath math="p_1, \dots, p_k" />
            の積に 1 を加えた数 <InlineMath math="N = p_1 \cdots p_k + 1" /> を考える目的は何か。
          </p>
          <ExerciseSolution>
            <p>
              目的は、<b>「既存の素数リストに含まれない新たな素数」の存在を導き出すため</b>である。
            </p>
            <p>
              <InlineMath math="N" /> はいかなる <InlineMath math="p_i" /> でも割り切れない（あまりが 1 になる）ため、
              <InlineMath math="N" /> 自身の素因数として、リストにはない新しい素数が必ず存在することになり、
              「素数が有限である」という仮定を覆すことができる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={7}>
          <p>
            素数 <InlineMath math="p" /> が積 <InlineMath math="a^2" /> を割り切るならば、
            必ず <InlineMath math="p \mid a" /> であることを Theorem 3.1-1（素数の特性）を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. 仮定より <InlineMath math="p \mid a^2 = a \cdot a" /> である。
              <br />
              2. Theorem 3.1-1 より、「素数が積を割り切るなら、必ずその因数の少なくとも一方を割り切る」ので：
              <InlineMath math="p \mid a" /> または <InlineMath math="p \mid a" />
              <br />
              3. いずれにせよ <b><InlineMath math="p \mid a" /></b> が成り立つ。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="3" number={8}>
          <p>
            <InlineMath math="a = 360, \ b = 504" /> の最大公約数を、それぞれの標準分解を用いて算出せよ。
            （ <InlineMath math="504 = 2^3 \times 3^2 \times 7" /> とする）
          </p>
          <ExerciseSolution>
            <p>
              Example 3.2-1 の手法を用いる：
              <br />
              <InlineMath math="a = 2^3 \cdot 3^2 \cdot 5^1 \cdot 7^0" />
              <br />
              <InlineMath math="b = 2^3 \cdot 3^2 \cdot 5^0 \cdot 7^1" />
              <br />
              最大公約数は、各素数の指数の最小値（min）を取るので：
              <BlockMath math="\begin{aligned} \gcd(a, b) &= 2^{\min(3,3)} \cdot 3^{\min(2,2)} \cdot 5^{\min(1,0)} \cdot 7^{\min(0,1)} \\ &= 2^3 \cdot 3^2 \cdot 5^0 \cdot 7^0 = 8 \cdot 9 = 72 \end{aligned}" />
            </p>
            <p>
              よって、 <b><InlineMath math="\gcd(360, 504) = 72" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={9}>
          <p>
            <InlineMath math="n! + 2, \ n! + 3, \dots, n! + n" /> の <InlineMath math="n-1" /> 個の整数はすべて合成数であることを示せ。
            これより、素数の間隔（ギャップ）がいくらでも大きくなりうることを述べよ。
          </p>
          <ExerciseSolution>
            <p>
              1. 任意の <InlineMath math="k \in \{2, 3, \dots, n\}" /> に対して、
              <InlineMath math="n! = 1 \cdot 2 \cdots k \cdots n" /> は <InlineMath math="k" /> を因数に持つ。
              <br />
              2. よって、 <InlineMath math="n! + k = k \times (\frac{n!}{k} + 1)" /> と書け、
              <InlineMath math="k \ge 2" /> かつ <InlineMath math="\frac{n!}{k} + 1 > 1" /> なので、これは合成数である。
              <br />
              3. つまり、この <InlineMath math="n-1" /> 個の連続する整数の中には素数が一つも存在しない。
              <br />
              4. <InlineMath math="n" /> は任意に大きく取れるため、素数の現れない「砂漠」のような区間をいくらでも長く設定できることになる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={10}>
          <p>
            算術の基本定理（一意性）を用いて、 <InlineMath math="\sqrt{2}" /> が無理数であることを背理法で証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="\sqrt{2} = \frac{a}{b}" /> （ <InlineMath math="a, b" /> は整数）と仮定する。
              <br />
              2. 両辺を平決して整理すると、 <InlineMath math="2b^2 = a^2" /> となる。
              <br />
              3. ここで、 <InlineMath math="a, b" /> の素因数分解における素数 2 の合計の指数（べき数）に注目する。
              <br />・ <InlineMath math="a" /> における 2 の指数を <InlineMath math="k" /> とすると、 <InlineMath math="a^2" /> における 2 の指数は <b><InlineMath math="2k" /> （偶数）</b>。
              <br />・ <InlineMath math="b" /> における 2 の指数を <InlineMath math="m" /> とすると、 <InlineMath math="b^2" /> における 2 の指数は <InlineMath math="2m" />。
              そこに 2 を掛けた <b><InlineMath math="2b^2" /> における 2 の指数は <InlineMath math="2m+1" /> （奇数）</b>。
              <br />
              4. 一意性により、 <InlineMath math="2b^2" /> と <InlineMath math="a^2" /> が等しければ、 2 のべき指数も一致しなければならない。
              しかし、「奇数 ＝ 偶数」となり矛盾が生じる。
              <br />
              5. したがって、 <InlineMath math="\sqrt{2}" /> は有理数ではなく、無理数である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
