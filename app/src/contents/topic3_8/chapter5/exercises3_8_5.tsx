import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter5() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="5" number={1}>
          <p>
            写像 <InlineMath math="\phi: \mathbb{Z} \to \mathbb{Z}" /> を <InlineMath math="\phi(x) = 3x" /> で定めるとき、これが加法に関する準同型写像であること、すなわち <InlineMath math="\phi(x+y) = \phi(x) + \phi(y)" /> が成り立つことを示せ。
          </p>
          <ExerciseSolution>
            <p>
              任意の <InlineMath math="x, y \in \mathbb{Z}" /> に対して：
            </p>
            <BlockMath math="\phi(x+y) = 3(x+y) = 3x + 3y" />
            <p>
              であり、一方で
            </p>
            <BlockMath math="\phi(x) + \phi(y) = 3x + 3y" />
            <p>
              である。両者は一致するため、<InlineMath math="\phi" /> は準同型写像である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={2}>
          <p>
            一般線形群 <InlineMath math="GL_n(\mathbb{R})" /> から乗法群 <InlineMath math="\mathbb{R}^* = \mathbb{R} \setminus \{0\}" /> への準同型写像である行列式 <InlineMath math="\det" /> の核 <InlineMath math="\ker(\det)" /> はどのような集合か。
          </p>
          <ExerciseSolution>
            <p>
              準同型の核は、行き先の単位元に移る元の集合である。乗法群 <InlineMath math="\mathbb{R}^*" /> の単位元は 1 である。
            </p>
            <BlockMath math="\ker(\det) = \{ A \in GL_n(\mathbb{R}) \mid \det(A) = 1 \}" />
            <p>
              この集合は、行列式が 1 である行列全体の集合であり、<b>特殊線形群 <InlineMath math="SL_n(\mathbb{R})" /></b> と呼ばれる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={3}>
          <p>
            群 <InlineMath math="G" /> と <InlineMath math="G'" /> が「同型である」ことの定義を、同型写像の言葉を用いて述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 5.3-1 によれば、2つの群 <InlineMath math="G, G'" /> に対し、
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>準同型写像 <InlineMath math="\phi: G \to G'" /> が存在し、</li>
              <li>かつ、<InlineMath math="\phi" /> が全単射（1対1の対応）であるとき、</li>
            </ul>
            <p className="mt-2">
              <InlineMath math="\phi" /> を同型写像といい、このような写像が存在するときに <InlineMath math="G" /> と <InlineMath math="G'" /> は<b>同型</b>であるという。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="5" number={4}>
          <p>
            写像 <InlineMath math="f: \mathbb{Z} \to \mathbb{Z}" /> を <InlineMath math="f(x) = x+1" /> で定めるとき、これが加法に関する準同型でないことを一例を挙げて示せ。
          </p>
          <ExerciseSolution>
            <p>
              準同型であれば <InlineMath math="f(x+y) = f(x) + f(y)" /> が全ての <InlineMath math="x, y" /> で成り立つ必要がある。
            </p>
            <p>
              <InlineMath math="x=1, y=1" /> のとき：
            </p>
              <BlockMath math="f(1+1) = f(2) = 2+1 = 3" />
            <p>
              一方で、
            </p>
              <BlockMath math="f(1) + f(1) = (1+1) + (1+1) = 2 + 2 = 4" />
            <p>
              となり、<InlineMath math="f(1+1) \neq f(1) + f(1)" /> である。したがって準同型ではない。
              （あるいは、準同型なら単位元を単位元に写すはずだが、<InlineMath math="f(0) = 1 \neq 0" /> であることから直ちに否定できる。）
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={5}>
          <p>
            準同型写像 <InlineMath math="\phi: G \to G'" /> について、逆元の対応 <InlineMath math="\phi(a^{-1}) = \phi(a)^{-1}" /> が成り立つことを Proposition 5.1-1 の証明に沿って示せ。
          </p>
          <ExerciseSolution>
            <p>
              単位元の対応 <InlineMath math="\phi(e) = e'" />（<InlineMath math="e, e'" /> はそれぞれの単位元）を用いる。
            </p>
            <BlockMath math="\phi(a)\phi(a^{-1}) = \phi(aa^{-1}) = \phi(e) = e'" />
            <p>
              同様に、
            </p>
            <BlockMath math="\phi(a^{-1})\phi(a) = \phi(a^{-1}a) = \phi(e) = e'" />
            <p>
              が成り立つ。
              <InlineMath math="G'" /> における逆元の一意性より、<InlineMath math="\phi(a^{-1})" /> は <InlineMath math="\phi(a)" /> の逆元、すなわち <InlineMath math="\phi(a)^{-1}" /> と一致する。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={6}>
          <p>
            内部自己同型 <InlineMath math="\mathrm{inn}_g(x) = gxg^{-1}" /> について、合成の性質 <InlineMath math="\mathrm{inn}_g \circ \mathrm{inn}_h = \mathrm{inn}_{gh}" /> が成り立つことを示せ。
          </p>
          <ExerciseSolution>
            <p>
              任意の元 <InlineMath math="x \in G" /> に対する挙動を計算する。
            </p>
            <BlockMath math="\begin{aligned} (\mathrm{inn}_g \circ \mathrm{inn}_h)(x) &= \mathrm{inn}_g(\mathrm{inn}_h(x)) \\ &= \mathrm{inn}_g(hxh^{-1}) \\ &= g(hxh^{-1})g^{-1} \\ &= (gh)x(h^{-1}g^{-1}) \end{aligned}" />
            <p>
              逆元の性質 <InlineMath math="(gh)^{-1} = h^{-1}g^{-1}" /> を用いると：
            </p>
            <BlockMath math="(gh)x(gh)^{-1} = \mathrm{inn}_{gh}(x)" />
            <p>
              となる。全称としての写像が一致するため、<InlineMath math="\mathrm{inn}_g \circ \mathrm{inn}_h = \mathrm{inn}_{gh}" /> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={7}>
          <p>
            3次対称群 <InlineMath math="S_3" /> と巡回群 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> は、ともに位数が 6 であるが、同型ではない。その理由を「可換性」に注目して説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Example 5.3-2 に示されている通り、同型写像は群の構造的性質を保存する。
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-2">
              <li><InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> は、任意の元について <InlineMath math="a+b = b+a" /> が成り立つアーベル群（可換群）である。</li>
              <li>一方、<InlineMath math="S_3" /> は、例えば <InlineMath math="(12)(13) = (132)" /> かつ <InlineMath math="(13)(12) = (123)" /> のように非可換な元を含む非巡回群（非可換群）である。</li>
            </ul>
            <p className="mt-2">
              もし同型写像 <InlineMath math="\phi" /> が存在すれば、<InlineMath math="\phi(ab) = \phi(a)\phi(b)" /> および <InlineMath math="\phi(ba) = \phi(b)\phi(a)" /> となり、可換な群は可換な群にしか移り得ない。
              したがって、これらは同型ではない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="5" number={8}>
          <p>
            準同型写像 <InlineMath math="\phi: G \to G'" /> の核 <InlineMath math="\ker \phi" /> は、<InlineMath math="G" /> の正規部分群であることを証明せよ（Theorem 5.2-1）。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="K = \ker \phi" /> とおく。まず <InlineMath math="K" /> が部分群であることを示し（省略可）、次に正規性を示す。
            </p>
            <p>
              任意の <InlineMath math="g \in G" /> および <InlineMath math="k \in K" /> に対して、共役 <InlineMath math="gkg^{-1}" /> をとり、その像を計算する。
            </p>
            <BlockMath math="\begin{aligned} \phi(gkg^{-1}) &= \phi(g)\phi(k)\phi(g^{-1}) & (\text{準同型の性質}) \\ &= \phi(g)e'\phi(g)^{-1} & (k \in K \text{ より } \phi(k)=e') \\ &= \phi(g)\phi(g)^{-1} = e' \end{aligned}" />
            <p>
              移った先が <InlineMath math="G'" /> の単位元であるため、定義より <InlineMath math="gkg^{-1} \in \ker \phi" /> である。
              これにより <InlineMath math="gKg^{-1} \subset K" /> が示されたため、<InlineMath math="K" /> は正規部分群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={9}>
          <p>
            準同型写像 <InlineMath math="\phi: G \to G'" /> が単射であるための必要十分条件は、<InlineMath math="\ker \phi = \{e\}" /> であることを証明せよ（Proposition 5.1-2）。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. (単射なら核は単位元のみ)</b>：<br />
              単射とは <InlineMath math="\phi(a) = \phi(b) \implies a = b" /> である。<br />
              <InlineMath math="x \in \ker \phi" /> とすると、<InlineMath math="\phi(x) = e'" />。準同型より <InlineMath math="\phi(e) = e'" /> なので、<InlineMath math="\phi(x) = \phi(e)" />。<br />
              単射性より <InlineMath math="x = e" /> が得られる。
            </p>
            <p className="mt-4">
              <b>2. (核が単位元のみなら単射)</b>：<br />
              <InlineMath math="\phi(a) = \phi(b)" /> と仮定する。このとき：
              <BlockMath math="\phi(a)\phi(b)^{-1} = e' \implies \phi(ab^{-1}) = e'" />
              となり、定義より <InlineMath math="ab^{-1} \in \ker \phi" /> である。<br />
              仮定 <InlineMath math="\ker \phi = \{e\}" /> より <InlineMath math="ab^{-1} = e" /> 、すなわち <InlineMath math="a = b" /> となり、単射性が示された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={10}>
          <p>
            実数の加法群 <InlineMath math="(\mathbb{R}, +)" /> から正の実数の乗法群 <InlineMath math="(\mathbb{R}_{>0}, \cdot)" /> への写像 <InlineMath math="\phi(x) = e^x" /> が同型写像であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 準同型性</b>：<br />
              任意の <InlineMath math="x, y \in \mathbb{R}" /> に対し、指数法則より
              <BlockMath math="\phi(x+y) = e^{x+y} = e^x \cdot e^y = \phi(x)\phi(y)" />
              が成り立つ。よって準同型である。
            </p>
            <p className="mt-4">
              <b>2. 全単射性</b>：<br />
              実数から正の実数への指数関数 <InlineMath math="y = e^x" /> は連続かつ狭義単調増加であり、値域は正の実数全体である。
              具体的には、逆写像（逆関数）となる対数関数 <InlineMath math="x = \ln(y)" /> が正の実数全体で定義されている。
              逆写像が存在するため、<InlineMath math="\phi" /> は全単射である。
            </p>
            <p className="mt-2">
              準同型かつ全単射であるため、<InlineMath math="\phi" /> は同型写像である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
