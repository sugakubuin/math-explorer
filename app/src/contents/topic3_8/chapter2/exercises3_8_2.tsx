import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter2() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="2" number={1}>
          <p>
            偶数全体の集合 <InlineMath math="2\mathbb{Z} = \{ 2k \mid k \in \mathbb{Z} \}" /> が整数加法群 <InlineMath math="(\mathbb{Z}, +)" /> の部分群であることを、Proposition 2.1-1 の 2 条件を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              空集合でない（<InlineMath math="0 \in 2\mathbb{Z}" />）部分集合 <InlineMath math="2\mathbb{Z}" /> に対して、2 条件を確認する。
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-2">
              <li>
                <b>演算の閉性</b>：任意の <InlineMath math="2a, 2b \in 2\mathbb{Z}" />（<InlineMath math="a, b \in \mathbb{Z}" />）に対して、その和は <InlineMath math="2a + 2b = 2(a + b)" /> となる。
                <InlineMath math="a + b \in \mathbb{Z}" /> より、これは再び <InlineMath math="2\mathbb{Z}" /> の元である。
              </li>
              <li>
                <b>逆元の存在</b>：任意の <InlineMath math="2a \in 2\mathbb{Z}" /> に対して、加法に関する逆元は <InlineMath math="-2a = 2(-a)" /> となる。
                <InlineMath math="-a \in \mathbb{Z}" /> より、これは再び <InlineMath math="2\mathbb{Z}" /> の元である。
              </li>
            </ul>
            <p className="mt-2">
              以上の 2 条件が満たされるため、<InlineMath math="2\mathbb{Z}" /> は <InlineMath math="\mathbb{Z}" /> の部分群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={2}>
          <p>
            剰余群 <InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> において、元 <InlineMath math="\bar{3}" /> により生成される部分群 <InlineMath math="\langle \bar{3} \rangle" /> のすべての元を書き上げよ。また、その部分群の位数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 2.2-1 より、<InlineMath math="\bar{3}" /> の整数倍を順に計算する。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><InlineMath math="1 \cdot \bar{3} = \bar{3}" /></li>
              <li><InlineMath math="2 \cdot \bar{3} = \bar{6}" /></li>
              <li><InlineMath math="3 \cdot \bar{3} = \bar{9}" /></li>
              <li><InlineMath math="4 \cdot \bar{3} = \bar{12} \equiv \bar{0}" /> （単位元）</li>
            </ul>
            <p className="mt-2">
              したがって、<InlineMath math="\langle \bar{3} \rangle = \{ \bar{0}, \bar{3}, \bar{6}, \bar{9} \}" /> である。
            </p>
            <p>
              元の個数は 4 つであるため、部分群の位数は <b>4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={3}>
          <p>
            剰余群 <InlineMath math="\mathbb{Z}/8\mathbb{Z}" /> において、各元 <InlineMath math="\bar{1}, \bar{2}, \bar{4}" /> の位数をそれぞれ求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 2.3-1 に基づき、何倍したときに初めて <InlineMath math="\bar{0}" />（単位元）になるかを調べる。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <b>ord(\bar{1})</b>：<InlineMath math="8 \cdot \bar{1} = \bar{0}" /> であり、これより小さい正整数ではならない。よって位数は <b>8</b>。
              </li>
              <li>
                <b>ord(\bar{2})</b>：<InlineMath math="2 \cdot \bar{2} = \bar{4}, 3 \cdot \bar{2} = \bar{6}, 4 \cdot \bar{2} = \bar{0}" />。よって位数は <b>4</b>。
              </li>
              <li>
                <b>ord(\bar{4})</b>：<InlineMath math="2 \cdot \bar{4} = \bar{0}" />。よって位数は <b>2</b>。
              </li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="2" number={4}>
          <p>
            クラインの 4 群 <InlineMath math="V_4 = \{ (0,0), (0,1), (1,0), (1,1) \}" />（演算は成分ごとの <InlineMath math="\text{mod } 2" /> 加法）において、すべての部分群を書き上げよ。
          </p>
          <ExerciseSolution>
            <p>
              すべての元（単位元以外）の位数は 2 である。これらを生成元とする巡回部分群と、自明な部分群を列挙する。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>位数 1：<InlineMath math="H_1 = \{ (0,0) \}" /> （自明）</li>
              <li>位数 2：<InlineMath math="H_2 = \{ (0,0), (0,1) \}, H_3 = \{ (0,0), (1,0) \}, H_4 = \{ (0,0), (1,1) \}" /></li>
              <li>位数 4：<InlineMath math="H_5 = V_4" /> （自明）</li>
            </ul>
            <p className="mt-2">
              クラインの 4 群はこれら 5 つの部分群を持つ。これらが確かに部分群の判定法を満たすことは、各元の逆元が自分自身であることからも容易に確認できる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={5}>
          <p>
            ある群の元 <InlineMath math="a" /> の位数が 12 であるとする。このとき、元 <InlineMath math="a^9" /> の位数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 2.3-3（べき乗の位数）の公式を用いる。
            </p>
            <BlockMath math="\text{ord}(a^k) = \frac{n}{\gcd(k, n)}" />
            <p>
              ここで <InlineMath math="n = 12" />、<InlineMath math="k = 9" /> である。<InlineMath math="\gcd(9, 12) = 3" /> より、
            </p>
            <BlockMath math="\text{ord}(a^9) = \frac{12}{3} = 4" />
            <p>
              したがって、<InlineMath math="a^9" /> の位数は <b>4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={6}>
          <p>
            群 <InlineMath math="G" /> の 2 つの部分群を <InlineMath math="H, K" /> とする。このとき、共通部分 <InlineMath math="H \cap K" /> が再び <InlineMath math="G" /> の部分群であることを Proposition 2.1-2 を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 2.1-2（1 条件判定法）により、<InlineMath math="k, m \in H \cap K \implies km^{-1} \in H \cap K" /> を示す。
            </p>
            <ul className="list-decimal list-inside space-y-4 mt-2 text-sm">
              <li>
                <b>単位元の存在</b>：<InlineMath math="H, K" /> はいずれも部分群であるため、<InlineMath math="e \in H" /> かつ <InlineMath math="e \in K" /> である。
                よって <InlineMath math="e \in H \cap K" /> であり、<InlineMath math="H \cap K \neq \emptyset" /> である。
              </li>
              <li>
                <b>判定条件の確認</b>：任意の <InlineMath math="k, m \in H \cap K" /> をとる。定義より <InlineMath math="k, m \in H" /> かつ <InlineMath math="k, m \in K" /> である。
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li><InlineMath math="H" /> は部分群であるから、<InlineMath math="km^{-1} \in H" /> である。</li>
                  <li><InlineMath math="K" /> は部分群であるから、<InlineMath math="km^{-1} \in K" /> である。</li>
                </ul>
                したがって、<InlineMath math="km^{-1} \in H \cap K" /> が成り立つ。
              </li>
            </ul>
            <p className="mt-4">
              以上より、<InlineMath math="H \cap K" /> は <InlineMath math="G" /> の部分群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={7}>
          <p>
            3次対称群 <InlineMath math="S_3" /> において、部分集合 <InlineMath math="S = \{ (12), (13) \}" /> により生成された部分群 <InlineMath math="\langle S \rangle" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              生成された部分群とは、Definition 2.4-1 より、<InlineMath math="S" /> の元の有限個の積（および逆元。今回の元は位数が 2 で自分自身が逆元）で表されるすべての元の集合である。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>元そのもの：<InlineMath math="(12), (13)" /></li>
              <li>積：<InlineMath math="(12)(13) = (132)" /></li>
              <li>逆向きの積：<InlineMath math="(13)(12) = (123)" /></li>
              <li>3 つの積：<InlineMath math="(12)(13)(12) = (23)" /></li>
              <li>単位元：<InlineMath math="e" /></li>
            </ul>
            <p className="mt-2">
              これですべての元（位数 6）が現れた。したがって、<InlineMath math="\langle S \rangle = S_3" /> となる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="2" number={8}>
          <p>
            整数加法群 <InlineMath math="(\mathbb{Z}, +)" /> の任意の部分群 <InlineMath math="H" /> が、ある <InlineMath math="n \geq 0" /> を用いて <InlineMath math="H = n\mathbb{Z}" /> と書けることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="H = \{0\}" /> のときは <InlineMath math="n = 0" /> とすればよい。以下、<InlineMath math="H \neq \{0\}" /> とする。
            </p>
            <p>
              <InlineMath math="H" /> は正の整数を含む（<InlineMath math="m \in H" /> かつ <InlineMath math="m \neq 0" /> なら <InlineMath math="-m \in H" /> も成立し、一方は正である）。
              そこで、<InlineMath math="H" /> に含まれる<b>最小の正の整数</b>を <InlineMath math="n" /> とおく。
            </p>
            <p>
              任意の <InlineMath math="m \in H" /> をとり、除法の原理により <InlineMath math="m = nq + r \quad (0 \leq r < n)" /> と表す。すると
            </p>
            <BlockMath math="r = m - nq" />
            <p>
              となる。<InlineMath math="m \in H" /> かつ <InlineMath math="nq = n + n + \dots + n \in H" />（閉性）より、<InlineMath math="r \in H" /> である。
              もし <InlineMath math="r > 0" /> とすると、<InlineMath math="r" /> は <InlineMath math="n" /> より小さい <InlineMath math="H" /> の正の整数となり、<InlineMath math="n" /> の最小性に矛盾する。
            </p>
            <p>
              ゆえに <InlineMath math="r = 0" /> でなければならず、<InlineMath math="m = nq \in n\mathbb{Z}" /> となる。以上より <InlineMath math="H \subset n\mathbb{Z}" />。
              逆の包含関係は <InlineMath math="n \in H" /> より明らかである。したがって <InlineMath math="H = n\mathbb{Z}" /> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={9}>
          <p>
            群 <InlineMath math="G" /> の元 <InlineMath math="a, b" /> について、元の位数に関して次が成り立つことを証明せよ。
          </p>
          <BlockMath math="\text{ord}(aba^{-1}) = \text{ord}(b)" />
          <ExerciseSolution>
            <p>
              まず、任意の正整数 <InlineMath math="k" /> に対して <InlineMath math="(aba^{-1})^k = ab^k a^{-1}" /> が成り立つことを見通す。
            </p>
            <BlockMath math="\begin{aligned} (aba^{-1})^k &= (aba^{-1})(aba^{-1})\dots(aba^{-1}) \\ &= a b (a^{-1} a) b (a^{-1} a) \dots b a^{-1} \\ &= ab^k a^{-1} \end{aligned}" />
            <p>
              この等式を用いると、
            </p>
            <BlockMath math="(aba^{-1})^k = e \iff ab^k a^{-1} = e \iff b^k = a^{-1} e a = e" />
            <p>
              がわかる。したがって、<InlineMath math="(aba^{-1})^k = e" /> となる最小の正整数 <InlineMath math="k" /> は、<InlineMath math="b^k = e" /> となる最小の正整数に他ならない。
            </p>
            <p>
              よって、<InlineMath math="\text{ord}(aba^{-1}) = \text{ord}(b)" /> が成立する。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={10}>
          <p>
            位数が素数 <InlineMath math="p" /> である群 <InlineMath math="G" /> は、必ず巡回群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="G" /> の単位元でない元 <InlineMath math="x \in G \setminus \{e\}" /> を任意にとる。
              この <InlineMath math="x" /> が生成する部分群を <InlineMath math="H = \langle x \rangle" /> とおくと、Proposition 2.3-2 より <InlineMath math="|H| = \text{ord}(x)" /> である。
            </p>
            <p>
              Section 2.3 の備考で述べた通り、有限群において各元の位数は群全体の位数を割り切る（ラグランジュの定理）。したがって、<InlineMath math="\text{ord}(x)" /> は素数 <InlineMath math="p" /> の約数でなければならない。
            </p>
            <p>
              <InlineMath math="p" /> は素数であるから、その約数は 1 か <InlineMath math="p" /> のみである。
              しかし、<InlineMath math="x \neq e" /> より <InlineMath math="\text{ord}(x) \neq 1" /> なので、<InlineMath math="\text{ord}(x) = p" /> である。
            </p>
            <p>
              これは巡回部分群 <InlineMath math="H" /> の位数が群 <InlineMath math="G" /> の位数と一致していることを意味し、<InlineMath math="G = H = \langle x \rangle" /> である。
            </p>
            <p>
              よって <InlineMath math="G" /> は巡回群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
