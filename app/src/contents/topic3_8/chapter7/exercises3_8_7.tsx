import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter7() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="7" number={1}>
          <p>
            5次対称群 <InlineMath math="S_5" /> の置換 <InlineMath math="\sigma = (1\,3\,4)(2\,5)" /> を考える。
          </p>
          <ul className="list-decimal list-inside space-y-1">
            <li><InlineMath math="\sigma" /> を互いに素な巡回置換の積として表せ。</li>
            <li><InlineMath math="\sigma" /> を互換の積として表し、その符号 <InlineMath math="\mathrm{sgn}(\sigma)" /> を求めよ。</li>
          </ul>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                与えられた形式自体が互いに素な巡回置換の積であるため、そのまま <b><InlineMath math="(1\,3\,4)(2\,5)" /></b> である。
              </li>
              <li>
                巡回置換を互換の積に分解すると、<InlineMath math="(1\,3\,4) = (1\,4)(1\,3)" />。
                よって <InlineMath math="\sigma = (1\,4)(1\,3)(2\,5)" /> と書ける。
                互換の個数は 3 個（奇数）であるため、符号は <b>-1</b> （奇置換）である。
              </li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={2}>
          <p>
            交代群 <InlineMath math="A_n" /> について、以下の問いに答えよ。
          </p>
          <ul className="list-decimal list-inside space-y-1">
            <li><InlineMath math="n \geq 2" /> のときの指数 <InlineMath math="[S_n : A_n]" /> の値を答えよ。</li>
            <li>4次交代群 <InlineMath math="A_4" /> の位数を求めよ。</li>
          </ul>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-2">
              <li>Proposition 7.2-1 より、指数は <b>2</b> である。</li>
              <li>ラグランジュの定理より、<InlineMath math="|A_4| = |S_4| / 2 = 24 / 2 = 12" />。したがって位数は <b>12</b> である。</li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={3}>
          <p>
            4次二面体群 <InlineMath math="D_4 = \{e, r, r^2, r^3, s, rs, r^2s, r^3s\}" /> において、基本関係式 <InlineMath math="r^4 = s^2 = e, \ srs = r^{-1}" /> を用いて以下の元を標準形で表せ。
          </p>
          <ul className="list-decimal list-inside space-y-1">
            <li><InlineMath math="s r^2 s" /></li>
            <li><InlineMath math="s r s" /></li>
          </ul>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                関係式 <InlineMath math="sr = r^{-1}s" /> を繰り返し用いる。
                <BlockMath math="\begin{aligned} s r^2 s &= (s r) r s = (r^{-1} s) r s \\ &= r^{-1} (s r) s = r^{-1} (r^{-1} s) s \\ &= r^{-2} s^2 = r^{-2} = r^2 \end{aligned}" />
                よって、<b><InlineMath math="r^2" /></b> となる。
              </li>
              <li>
                関係式より直ちに <InlineMath math="srs = r^{-1}" /> である。<InlineMath math="D_4" /> において <InlineMath math="r^{-1} = r^3" /> なので、標準形では <b><InlineMath math="r^3" /></b> となる。
              </li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="7" number={4}>
          <p>
            四元数群 <InlineMath math="Q_8" /> と 4 次二面体群 <InlineMath math="D_4" /> は、ともに位数 8 の非可換群であるが、同型ではない。この理由を「位数 2 の元の個数」に着目して証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Example 7.4-3 の比較に基づく。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><b><InlineMath math="Q_8" /> において：</b> 2乗して単位元 1 になる非単位元は、<InlineMath math="-1" /> のただ 1 つである（<InlineMath math="i^2=j^2=k^2=-1" /> より、<InlineMath math="i, j, k" /> 等の位数は 4 である）。</li>
              <li><b><InlineMath math="D_4" /> において：</b> 2乗して単位元 <InlineMath math="e" /> になる非単位元は、回転の <InlineMath math="r^2" /> に加え、反転である <InlineMath math="s, rs, r^2s, r^3s" /> の合計 5 つ存在する。</li>
            </ul>
            <p className="mt-2">
              同型写像は元の位数を保存するため、位数 2 の元の個数が異なるこれら 2 つの群は同型ではない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={5}>
          <p>
            有限体 <InlineMath math="\mathbb{F}_2 = \{0, 1\}" /> 上の 2 次一般線形群 <InlineMath math="GL_2(\mathbb{F}_2)" /> の位数を求め、それが 3 次対称群 <InlineMath math="S_3" /> と等しいことを示せ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 7.5-2 の位数公式を用いる（<InlineMath math="n=2, p=2" />）。
            </p>
            <BlockMath math="\begin{aligned} |GL_2(\mathbb{F}_2)| &= (2^2 - 1)(2^2 - 2) \\ &= (4 - 1)(4 - 2) = 3 \times 2 = 6 \end{aligned}" />
            <p>
              3 次対称群 <InlineMath math="S_3" /> の位数は <InlineMath math="3! = 6" /> であるため、両者の位数は <b>6</b> で一致する。
              （実際、位数 6 の非可換群は同型を除いて <InlineMath math="S_3" /> しか存在しないため、これらは同型である。）
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={6}>
          <p>
            クラインの四元群 <InlineMath math="V_4 = \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} = \{e, a, b, ab\}" />（ここで <InlineMath math="a^2=b^2=(ab)^2=e" />）の、すべての部分群を書き出せ。
          </p>
          <ExerciseSolution>
            <p>
              位数は 4 であるため、部分群の位数は 1, 2, 4 のいずれかである。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>位数 1（自明な群）：<InlineMath math="\{e\}" /></li>
              <li>位数 2：
                <ul className="list-circle list-inside ml-6">
                  <li><InlineMath math="\langle a \rangle = \{e, a\}" /></li>
                  <li><InlineMath math="\langle b \rangle = \{e, b\}" /></li>
                  <li><InlineMath math="\langle ab \rangle = \{e, ab\}" /></li>
                </ul>
              </li>
              <li>位数 4（全体）：<InlineMath math="V_4" /></li>
            </ul>
            <p className="mt-2">
              したがって、以上の 5 つがすべての部分群である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={7}>
          <p>
            4 次交代群 <InlineMath math="A_4" /> （位数 12）には、位数 6 の部分群が存在しない（ラグランジュの逆の不成立）。
            この事実を認めた上で、<InlineMath math="A_4" /> の元にはどのような位数のものが存在するか答えよ（Example 7.2-1 参照）。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="A_4" /> の元の型と位数を整理する：
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>単位置換 <InlineMath math="e" />：位数 <b>1</b></li>
              <li>型 <InlineMath math="(3, 1)" /> の巡回置換（例：<InlineMath math="(1\,2\,3)" />）：巡回置換の長さが 3 なので、位数 <b>3</b></li>
              <li>型 <InlineMath math="(2, 2)" /> の互換の積（例：<InlineMath math="(1\,2)(3\,4)" />）：互換は互いに素なため、<InlineMath math="\mathrm{lcm}(2, 2) = 2" /> より、位数 <b>2</b></li>
            </ul>
            <p className="mt-2">
              よって、存在する元の位数は <b>1, 2, 3</b> の 3 種類である（位数 4, 6, 12 の元は存在しない）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="7" number={8}>
          <p>
            対称群 <InlineMath math="S_4" /> において、巡回置換 <InlineMath math="\sigma = (1\,2\,3)" /> と <InlineMath math="\tau = (1\,2\,3\,4)" /> が共役でない理由を、Theorem 7.1-2 に基づいて答えよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 7.1-2 より、対称群において 2 つの置換が共役であるための必要十分条件は、それらの巡回置換の「型」が一致することである。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><InlineMath math="\sigma = (1\,2\,3)" /> の型は <b>(3,1)</b> である（長さ 3 の巡回置換と固定される 1 点）。</li>
              <li><InlineMath math="\tau = (1\,2\,3\,4)" /> の型は <b>(4)</b> である（長さ 4 の巡回置換）。</li>
            </ul>
            <p className="mt-2">
              型が異なるため、これら 2 つの置換は共役ではない（どのような共役変換 <InlineMath math="\rho\sigma\rho^{-1}" /> を施しても、巡回置換の長さは保存されるため）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={9}>
          <p>
            特殊直交群 <InlineMath math="SO_n(\mathbb{R})" /> が直交群 <InlineMath math="O_n(\mathbb{R})" /> の正規部分群であることを、行列式写像を用いた準同型定理の観点から証明せよ（Proposition 7.5-1）。
          </p>
          <ExerciseSolution>
            <p>
              写像 <InlineMath math="f: O_n(\mathbb{R}) \to \{1, -1\}" /> を、<InlineMath math="f(A) = \det A" /> で定める。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <b>準同型性：</b> 行列式の性質より <InlineMath math="\det(AB) = \det A \det B" /> なので、<InlineMath math="f" /> は準同型である。
              </li>
              <li>
                <b>行き先の妥当性：</b> <InlineMath math="A \in O_n(\mathbb{R})" /> のとき <InlineMath math="AA^T = I" /> ゆえ <InlineMath math="(\det A)^2 = \det I = 1" />。よって <InlineMath math="\det A = \pm 1" /> であり、行き先は <InlineMath math="\{1, -1\}" /> に含まれる。
              </li>
              <li>
                <b>核の確認：</b> 準同型の核は、行き先の単位元 1 に移る元の集合である。<br />
                <InlineMath math="\ker f = \{A \in O_n(\mathbb{R}) \mid \det A = 1\}" />。<br />
                これは定義まさに <InlineMath math="SO_n(\mathbb{R})" /> である。
              </li>
              <li>
                <b>結論：</b> 準同型写像の核は常に元の群の正規部分群であるため、<InlineMath math="SO_n(\mathbb{R}) \trianglelefteq O_n(\mathbb{R})" /> が成り立つ。
              </li>
            </ol>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={10}>
          <p>
            交代群 <InlineMath math="A_n" /> （<InlineMath math="n \geq 3" />）が 3 次巡回置換 <InlineMath math="(a\,b\,c)" /> 全体の集合によって生成されることを、互換の積の性質を用いて説明せよ（Theorem 7.2-2 の証明背景）。
          </p>
          <ExerciseSolution>
            <p>
              交代群は偶数個の互換の積である。したがって、2 つの互換の積 <InlineMath math="(ab)(cd)" /> または <InlineMath math="(ab)(ac)" /> が 3 次巡回置換で表せることを示せばよい。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <b>共通の要素を持つ場合：</b><br />
                <BlockMath math="(ab)(bc) = (abc)" />
                となり、直接 3 次巡回置換になる。
              </li>
              <li>
                <b>すべての要素が異なる場合：</b><br />
                <BlockMath math="(ab)(cd) = (abc)(bcd)" />
                （確認：右辺を左から順に適用すると、<InlineMath math="a \to b, b \to a" />（互換 <InlineMath math="(ab)" /> 同等）、<InlineMath math="c \to d, d \to c" /> となり一致する）<br />
                より、2 つの 3 次巡回置換の積として表せる。
              </li>
            </ol>
            <p className="mt-4">
              あらゆる偶置換はこれら 2 つのパターンの組み合わせとして互換分解の結果をまとめられるため、<InlineMath math="A_n" /> は 3 次巡回置換のみで生成される。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
