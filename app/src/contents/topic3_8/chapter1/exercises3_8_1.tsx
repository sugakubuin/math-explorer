import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter1() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="1" number={1}>
          <p>
            集合 <InlineMath math="\mathbb{N} = \{1, 2, 3, \dots\}" /> と加法 <InlineMath math="+" /> の組 <InlineMath math="(\mathbb{N}, +)" /> が群ではない理由を、群の定義（Definition 1.1-3）に基づいて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              群であるためには、Definition 1.1-3 より単位元が存在し、かつ各元に対して逆元が存在する必要がある。
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>
                <b>単位元の不在</b>：加法に関する単位元は <InlineMath math="0" /> であるが、<InlineMath math="0 \notin \mathbb{N}" /> である。したがって、単位元が存在しない（モノイドではない）。
              </li>
              <li>
                <b>逆元の不在</b>：どんな <InlineMath math="a \in \mathbb{N}" /> に対しても、加法に関する逆元は <InlineMath math="-a" /> であるが、<InlineMath math="-a \notin \mathbb{N}" /> である。
              </li>
            </ol>
            <p className="mt-2">
              以上のいずれかの理由により、<InlineMath math="(\mathbb{N}, +)" /> は群ではない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={2}>
          <p>
            群 <InlineMath math="(\mathbb{Q} \setminus \{0\}, \cdot)" /> において、単位元 <InlineMath math="e" /> と元 <InlineMath math="x = \frac{3}{4}" /> の逆元 <InlineMath math="x^{-1}" /> をそれぞれ求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Example 1.1-2 より、有理数の乗法群における単位元と逆元は次の通りである。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><b>単位元</b>：乗法の単位元は <InlineMath math="1" /> である。</li>
              <li><b>逆元</b>：乗法の逆元は <InlineMath math="1/x" /> である。したがって、<InlineMath math="x = \frac{3}{4}" /> の逆元は <InlineMath math="x^{-1} = \frac{4}{3}" /> である。</li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={3}>
          <p>
            次の群の中から、<b>アーベル群ではない</b>ものをすべて選べ。
          </p>
          <ol className="list-decimal list-inside mt-2">
            <li><InlineMath math="(\mathbb{Z}, +)" /></li>
            <li><InlineMath math="S_3" /> （3次対称群）</li>
            <li><InlineMath math="\mathbb{Z}/5\mathbb{Z}" /> （剰余加法群）</li>
            <li><InlineMath math="GL_2(\mathbb{R})" /> （2次一般線形群）</li>
          </ol>
          <ExerciseSolution>
            <p>
              Definition 1.3-1 および Example 1.3-1 より、各群の可換性を確認する。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>1. <InlineMath math="(\mathbb{Z}, +)" /> は加法の交換律が成り立つため、アーベル群である。</li>
              <li>2. <b>S_3</b> は置換の合成について非可換であり、アーベル群ではない。</li>
              <li>3. <InlineMath math="\mathbb{Z}/5\mathbb{Z}" /> は加法の交換律が成り立つため、アーベル群である。</li>
              <li>4. <b>GL_2(R)</b> は行列の積について非可換であり、アーベル群ではない。</li>
            </ul>
            <p className="mt-2">
              したがって、答えは <b>2</b> と <b>4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="1" number={4}>
          <p>
            剰余群 <InlineMath math="\mathbb{Z}/7\mathbb{Z}" /> において、次の値を求めよ。
          </p>
          <p className="mt-2">
            <InlineMath math="(\bar{3} + \bar{5})^{-1}" />
          </p>
          <ExerciseSolution>
            <p>
              まず、演算を行い単位元 <InlineMath math="\bar{0}" /> との関係を調べる。
            </p>
            <BlockMath math="\bar{3} + \bar{5} = \bar{8} = \bar{1}" />
            <p>
              ここでは和の結果が <InlineMath math="\bar{1}" /> となった。加法に関する逆元を求めるため、和が <InlineMath math="\bar{0}" /> となる元を探す。
            </p>
            <BlockMath math="\bar{1} + \bar{x} = \bar{0} \pmod 7 \implies \bar{x} = \bar{6}" />
            <p>
              したがって、<InlineMath math="(\bar{3} + \bar{5})^{-1} = \bar{6}" /> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={5}>
          <p>
            3次対称群 <InlineMath math="S_3" /> において、置換 <InlineMath math="\sigma = (12)" /> と <InlineMath math="\tau = (123)" /> の合成 <InlineMath math="\sigma \tau" /> を巡回置換表記で書け。
          </p>
          <ExerciseSolution>
            <p>
              置換の合成は右から順に適用する。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><InlineMath math="1" /> の行き先：<InlineMath math="\tau(1) = 2" />、<InlineMath math="\sigma(2) = 1" />。よって <InlineMath math="1 \to 1" />。</li>
              <li><InlineMath math="2" /> の行き先：<InlineMath math="\tau(2) = 3" />、<InlineMath math="\sigma(3) = 3" />。よって <InlineMath math="2 \to 3" />。</li>
              <li><InlineMath math="3" /> の行き先：<InlineMath math="\tau(3) = 1" />、<InlineMath math="\sigma(1) = 2" />。よって <InlineMath math="3 \to 2" />。</li>
            </ul>
            <p className="mt-2">
              したがって、<InlineMath math="\sigma \tau = (23)" /> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={6}>
          <p>
            群 <InlineMath math="G" /> の任意の元 <InlineMath math="a, b" /> について、<InlineMath math="(ab)^2 = a^2 b^2" /> が成り立つならば、<InlineMath math="G" /> はアーベル群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              与えられた等式を書き下すと、
            </p>
            <BlockMath math="(ab)(ab) = (aa)(bb)" />
            <p>
              結合律を用いると、
            </p>
            <BlockMath math="a(ba)b = a(ab)b" />
            <p>
              ここで左から <InlineMath math="a^{-1}" />、右から <InlineMath math="b^{-1}" /> をかける（あるいは Theorem 1.4-3 の簡約法則を用いる）ことにより、
            </p>
            <BlockMath math="ba = ab" />
            <p>
              が得られる。これは Definition 1.3-1 の交換律に他ならないため、<InlineMath math="G" /> はアーベル群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={7}>
          <p>
            行列群 <InlineMath math="GL_2(\mathbb{R})" /> の元 <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" /> の逆元 <InlineMath math="A^{-1}" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              行列式を計算すると、<InlineMath math="\det A = 1 \cdot 4 - 2 \cdot 3 = -2 \neq 0" />。
            </p>
            <p>
              2次正方行列の逆行列の公式を用いると、
            </p>
            <BlockMath math={"A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}"} />
            <p>
              これが <InlineMath math="GL_2(\mathbb{R})" /> における逆元である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="1" number={8}>
          <p>
            群 <InlineMath math="G" /> の単位元の一意性（Theorem 1.4-1）を、定義に基づいて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="e" /> と <InlineMath math="e'" /> が共に群 <InlineMath math="G" /> の単位元であると仮定する。このとき、
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <InlineMath math="e" /> が単位元であることから、任意の <InlineMath math="x \in G" /> に対して <InlineMath math="ex = xe = x" /> が成り立つ。
                ここで <InlineMath math="x = e'" /> とおけば、<b><InlineMath math="e e' = e'" /></b> である。
              </li>
              <li>
                <InlineMath math="e'" /> が単位元であることから、任意の <InlineMath math="x \in G" /> に対して <InlineMath math="e'x = xe' = x" /> が成り立つ。
                ここで <InlineMath math="x = e" /> とおけば、<b><InlineMath math="e'e = e" /></b> である。
              </li>
            </ul>
            <p className="mt-2">
              また、単位元の定義から <InlineMath math="e e' = e' e" />（交換可能）である。したがって、
            </p>
            <BlockMath math="e' = e e' = e' e = e" />
            <p>
              が得られ、単位元は唯一つであることが示された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={9}>
          <p>
            群 <InlineMath math="G" /> のすべての元 <InlineMath math="x" /> に対して <InlineMath math="x^2 = e" />（単位元）が成り立つならば、<InlineMath math="G" /> はアーベル群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              条件 <InlineMath math="x^2 = e" /> より、任意の元に対して <InlineMath math="xx = e" /> が成り立つ。これは各元が自分自身の逆元であること、すなわち <InlineMath math="x^{-1} = x" /> を意味する。
            </p>
            <p>
              任意の <InlineMath math="a, b \in G" /> をとる。積 <InlineMath math="ab" /> も <InlineMath math="G" /> の元であるため、同様に
            </p>
            <BlockMath math="(ab)^{-1} = ab" />
            <p>
              が成り立つ。一方で、逆元の性質（Proposition 1.4-1）より、
            </p>
            <BlockMath math="(ab)^{-1} = b^{-1} a^{-1}" />
            <p>
              である。各元が自分自身の逆元である性質を代入すると、
            </p>
            <BlockMath math="(ab)^{-1} = ba" />
            <p>
              となる。以上の 2 つの結果を等号で結ぶと、
            </p>
            <BlockMath math="ab = ba" />
            <p>
              が任意の <InlineMath math="a, b \in G" /> で成り立つことが示された。したがって <InlineMath math="G" /> はアーベル群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={10}>
          <p>
            有限群 <InlineMath math="G" /> の演算表において、同じ行に同じ元が 2 度現れないことを、簡約法則（Theorem 1.4-3）を用いて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              背理法を用いる。ある行（第 <InlineMath math="g" /> 行とする）において、相異なる列（第 <InlineMath math="h_1" /> 列と第 <InlineMath math="h_2" /> 列、ただし <InlineMath math="h_1 \neq h_2" />）に同じ元 <InlineMath math="x" /> が現れたと仮定する。
            </p>
            <p>
              このとき、演算表の定義より、
            </p>
            <BlockMath math="g h_1 = x \quad \text{かつ} \quad g h_2 = x" />
            <p>
              である。よって、
            </p>
            <BlockMath math="g h_1 = g h_2" />
            <p>
              が成り立つ。ここで左簡約法則（Theorem 1.4-3）を適用すると、
            </p>
            <BlockMath math="h_1 = h_2" />
            <p>
              が得られる。これは <InlineMath math="h_1 \neq h_2" /> という仮定に矛盾する。
            </p>
            <p>
              したがって、演算表の各行において同じ元が 2 度現れることはない。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
