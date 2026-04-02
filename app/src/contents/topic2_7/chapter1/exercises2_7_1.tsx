import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_7_Chapter1() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="1" number={1}>
          <p>
            「整数 <InlineMath math="a" /> が整数 <InlineMath math="b" /> を割り切る」ことの数学的な定義を、ある整数 <InlineMath math="k" /> を用いて述べよ。（Definition 1.1-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 1.1-1 より、ある整数 <InlineMath math="k" /> が存在して
              <BlockMath math="b = ka" />
              が成り立つことである。このとき <InlineMath math="a \mid b" /> と書く。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={2}>
          <p>
            正の整数 <InlineMath math="a, b" /> の最大公約数 <InlineMath math="\gcd(a, b)" /> と最小公倍数 <InlineMath math="\text{lcm}(a, b)" /> の間に成り立つ等式を述べよ。（Theorem 1.2-1）
          </p>
          <ExerciseSolution>
            <p>
              Theorem 1.2-1 より、次の等式が成り立つ：
            </p>
            <BlockMath math="\gcd(a, b) \cdot \text{lcm}(a, b) = ab" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={3}>
          <p>
            ユークリッドの互除法の根拠となる補題「 <InlineMath math="a = bq + r" /> ならば <InlineMath math="\gcd(a, b) = \gcd(b, r)" /> 」を何というか。（Lemma 1.3-1）
          </p>
          <ExerciseSolution>
            <p>
              <b>互除法の基本補題</b>と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="1" number={4}>
          <p>
            ユークリッドの互除法を用いて、 <InlineMath math="\gcd(112, 42)" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              互除法（Theorem 1.3-2）を適用する：
            </p>
            <BlockMath math="\begin{aligned} 112 &= 42 \times 2 + 28 \\ 42 &= 28 \times 1 + 14 \\ 28 &= 14 \times 2 + 0 \end{aligned}" />
            <p>
              最後に 0 でない余りは 14 である。よって、 <b><InlineMath math="\gcd(112, 42) = 14" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={5}>
          <p>
            <InlineMath math="12" /> と <InlineMath math="18" /> の最小公倍数 <InlineMath math="\text{lcm}(12, 18)" /> を、
            最大公約数との関係式（Theorem 1.2-1）を用いて求めよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="12" /> と <InlineMath math="18" /> の最大公約数を求めると、 <InlineMath math="\gcd(12, 18) = 6" /> である。
              <br />
              2. 関係式 <InlineMath math="\gcd \cdot \text{lcm} = ab" /> より：
              <BlockMath math="6 \cdot \text{lcm}(12, 18) = 12 \times 18 = 216" />
              <br />
              3. よって、 <b><InlineMath math="\text{lcm}(12, 18) = 216 / 6 = 36" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={6}>
          <p>
            整除の性質（Proposition 1.1-2）を用いて、 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> ならば、
            <InlineMath math="d \mid (3a - 5b)" /> であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 1.1-2（整除の線形性）は、「 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> ならば、
              任意の整数 <InlineMath math="m, n" /> に対して <InlineMath math="d \mid (ma + nb)" /> が成り立つ」と述べている。
            </p>
            <p>
              ここで <InlineMath math="m = 3, n = -5" /> と選ぶことで、ただちに <b><InlineMath math="d \mid (3a - 5b)" /></b> が導かれる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={7}>
          <p>
            ラメの定理（Theorem 1.4-1）によれば、 <InlineMath math="\gcd(a, b)" /> を求めるステップ数は、
            小さい方の数 <InlineMath math="b" /> の十進桁数を <InlineMath math="d" /> とすると、最大で何回以下か。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 1.4-1 より、 <b><InlineMath math="5d" /></b> 回以下である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="1" number={8}>
          <p>
            正の整数 <InlineMath math="a, b" /> について、 <InlineMath math="\gcd(a, b) = \gcd(a, b+ka)" /> （ <InlineMath math="k" /> は任意の整数）
            が成り立つことを、互除法の基本補題（Lemma 1.3-1）を拡張して証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. <InlineMath math="a, b" /> の任意の公約数を <InlineMath math="d" /> とする。
              線形性より、 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> ならば、 <InlineMath math="d \mid (b + ka)" /> も成り立つ。
              よって、 <InlineMath math="d" /> は <InlineMath math="a" /> と <InlineMath math="b+ka" /> の公約数である。
            </p>
            <p>
              2. 逆に、 <InlineMath math="a" /> と <InlineMath math="b+ka" /> の任意の公約数を <InlineMath math="d'" /> とする。
              <InlineMath math="d' \mid a" /> かつ <InlineMath math="d' \mid (b + ka)" /> ならば、
              やはり線形性より <InlineMath math="d' \mid \{ (b + ka) - ka \} = b" /> が成り立つ。
              よって、 <InlineMath math="d'" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の公約数である。
            </p>
            <p>
              3. 以上より、 <InlineMath math="(a, b)" /> の公約数全体の集合と <InlineMath math="(a, b+ka)" /> の公約数全体の集合は一致する。
              公約数集合が一致すれば、その最大値である最大公約数も一致する。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={9}>
          <p>
            フィボナッチ数 <InlineMath math="F_7 = 13, F_6 = 8" /> に対してユークリッドの互除法を適用し、
            すべてのステップで商が 1 （最後を除く）になることを確認せよ。
            また、これが「最悪ケース」と呼ばれる理由を §1.4 の記述に基づき述べよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 互除法の実行</b>
              <br />
              <BlockMath math="\begin{aligned} 13 &= 8 \times 1 + 5 \\ 8 &= 5 \times 1 + 3 \\ 5 &= 3 \times 1 + 2 \\ 3 &= 2 \times 1 + 1 \\ 2 &= 1 \times 2 + 0 \end{aligned}" />
              確かに、最後のステップ以外はすべて商が 1 である。
            </p>
            <p>
              <b>2. 理由の考察</b>
              <br />
              互除法の各ステップ <InlineMath math="r_{k-1} = q_k r_k + r_{k+1}" /> において、
              商 <InlineMath math="q_k" /> が最小の 1 であるとき、余り <InlineMath math="r_{k+1}" /> の減少速度が最も緩やかになる。
              フィボナッチ数は、この「商がすべて 1」という連鎖を逆向きに構成した数列であるため、
              入力された数の大きさに比してステップ数が最大となり、計算に最も手間がかかる「最悪ケース」となる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={10}>
          <p>
            「 <InlineMath math="d" /> が <InlineMath math="a" /> と <InlineMath math="b" /> の公約数ならば、 <InlineMath math="d \mid \gcd(a, b)" /> である」
            ことを、ベズーの等式（§2.1 内容を先取り、あるいは §1.1 で得た知識を活用して）を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              1. ベズーの等式（Theorem 2.1-1）によれば、 <InlineMath math="\gcd(a, b) = ax + by" /> を満たす整数 <InlineMath math="x, y" /> が存在する。
            </p>
            <p>
              2. 仮定より、 <InlineMath math="d" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の公約数であるから、 <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> である。
            </p>
            <p>
              3. 整除の線形性（Proposition 1.1-2）により、 <InlineMath math="d" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の任意の線形結合を割り切る。
              したがって、 <InlineMath math="d \mid (ax + by)" /> が成り立つ。
            </p>
            <p>
              4. 1 の結果を代入すると、 <b><InlineMath math="d \mid \gcd(a, b)" /></b> となり、証明された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
