import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter2() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="2" number={1}>
          <p>
            初期値問題 (IVP) とは何を指すか、Definition 2.1-1 に基づいて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              初期値問題とは、未知関数に関する微分方程式と、ある特定の点での関数の値（初期条件）をセットにした問題のことである。
            </p>
            <BlockMath math="\begin{cases} \dfrac{dy}{dx} = f(x, y) \\ y(x_0) = y_0 \end{cases}" />
            <p>
              この解は、初期点 <InlineMath math="x_0" /> を含むある区間上で定義され、上の方程式と条件をともに満たす必要がある。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={2}>
          <p>
            関数 <InlineMath math="f(x, y)" /> が変数 <InlineMath math="y" /> に関して<b>リプシッツ条件</b>を満たすとはどういうことか。
            不等式を用いて定義を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              ある定数 <InlineMath math="L > 0" /> （リプシッツ定数）が存在して、すべての <InlineMath math="(x, y_1), (x, y_2)" /> に対して
              <BlockMath math="|f(x, y_1) - f(x, y_2)| \leq L|y_1 - y_2|" />
              が成り立つことである（Definition 2.2-1）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={3}>
          <p>
            初期値問題が「局所的にただ一つの解を持つ」ことを保証する<b>ピカール・リンデレーフの定理</b>において、
            関数 <InlineMath math="f(x, y)" /> が満たすべき 2 つの重要な条件を挙げよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 2.3-1 によれば、次の 2 つの条件が必要である。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><InlineMath math="f" /> が定義された領域上で<b>連続</b>であること。</li>
              <li><InlineMath math="f" /> が <b><InlineMath math="y" /> に関してリプシッツ連続</b>であること。</li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="2" number={4}>
          <p>
            初期値問題 <InlineMath math="\frac{dy}{dx} = y^2, \quad y(0) = 1" /> について、解が「有限時間爆発」を起こすことを示し、
            解の定義される最大の開区間を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              変数分離形として解くと：
              <BlockMath math="\int \frac{dy}{y^2} = \int dx \implies -\frac{1}{y} = x + C" />
              初期条件 <InlineMath math="y(0) = 1" /> より、 <InlineMath math="-1 = 0 + C \implies C = -1" /> である。
            </p>
            <p>
              よって解は：
              <BlockMath math="y(x) = \frac{1}{1-x}" />
            </p>
            <p>
              この解は <InlineMath math="x \to 1" /> において無限大に発散（爆発）する。
              初期点 <InlineMath math="x = 0" /> を含み、公式が有効である最大の開区間は <b><InlineMath math="(-\infty, 1)" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={5}>
          <p>
            領域 <InlineMath math="D = \{ |y| \leq M \}" /> において、関数 <InlineMath math="f(y) = y^2" /> がリプシッツ条件を満たすことを確認し、
            そのリプシッツ定数 <InlineMath math="L" /> を一つ示せ。
          </p>
          <ExerciseSolution>
            <p>
              リプシッツ条件の左辺を計算すると：
              <BlockMath math="|f(y_1) - f(y_2)| = |y_1^2 - y_2^2| = |y_1 + y_2| \cdot |y_1 - y_2|" />
            </p>
            <p>
              ここで、 <InlineMath math="|y_1| \leq M, |y_2| \leq M" /> より、三角不等式から：
              <BlockMath math="|y_1 + y_2| \leq |y_1| + |y_2| \leq M + M = 2M" />
            </p>
            <p>
              したがって、
              <BlockMath math="|f(y_1) - f(y_2)| \leq 2M |y_1 - y_2|" />
              となり、リプシッツ定数 <b><InlineMath math="L = 2M" /></b> としてリプシッツ条件を満たす（Example 2.2-1）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={6}>
          <p>
            初期値問題 <InlineMath math="y' = 3y, \quad y(0) = 2" /> に対して、初期近似を <InlineMath math="\phi_0(x) = 2" /> とし、
            ピカール反復の第1近似 <InlineMath math="\phi_1(x)" /> および第2近似 <InlineMath math="\phi_2(x)" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 2.4-1 の再帰的定義に従う。
            </p>
            <p>
              <b>第1近似：</b>
              <BlockMath math="\phi_1(x) = 2 + \int_0^x 3 \phi_0(t) dt = 2 + \int_0^x 3 \cdot 2 dt = 2 + 6x" />
            </p>
            <p>
              <b>第2近似：</b>
              <BlockMath math="\begin{aligned} \phi_2(x) &= 2 + \int_0^x 3 \phi_1(t) dt = 2 + \int_0^x 3(2 + 6t) dt \\ &= 2 + \int_0^x (6 + 18t) dt = 2 + [6t + 9t^2]_0^x \\ &= 2 + 6x + 9x^2 \end{aligned}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={7}>
          <p>
            次の初期値問題が、提示された積分方程式と等価であることを示せ（微分せよ）。
            <BlockMath math="y(x) = 1 + \int_0^x \sin(y(t)) dt \iff \begin{cases} y' = \sin y \\ y(0) = 1 \end{cases}" />
          </p>
          <ExerciseSolution>
            <p>
              Lemma 2.3-1 の証明の後半部分になぞらえる。
            </p>
            <p>
              <b>1. 初期条件の確認：</b>
              <br />
              積分方程式に <InlineMath math="x = 0" /> を代入すると、積分項は 0 となるため <InlineMath math="y(0) = 1 + 0 = 1" /> を満たす。
            </p>
            <p>
              <b>2. 微分方程式の確認：</b>
              <br />
              両辺を <InlineMath math="x" /> で微分すると、微積分学の基本定理より：
              <BlockMath math="\frac{dy}{dx} = \frac{d}{dx}\left( 1 + \int_0^x \sin(y(t)) dt \right) = 0 + \sin(y(x))" />
            </p>
            <p>
              よって <InlineMath math="y' = \sin y" /> が得られる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="2" number={8}>
          <p>
            初期値問題 <InlineMath math="\frac{dy}{dx} = y^{1/3}, \quad y(0) = 0" /> について、
            <InlineMath math="y(x) = 0" /> 以外にどのような解が存在するか一つ挙げ、なぜ一意性が破れたのかを述べよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 非一意的な解：</b>
              <br />
              変数分離形として解くと（ <InlineMath math="y \neq 0" /> ）、 <InlineMath math="\int y^{-1/3} dy = \int dx \implies \frac{3}{2}y^{2/3} = x + C" />。
              初期条件 <InlineMath math="y(0)=0" /> より <InlineMath math="C=0" />。
              よって <b><InlineMath math="y(x) = \left(\frac{2}{3}x\right)^{3/2}" /></b> は一つの解である（Example 2.2-2）。
            </p>
            <p>
              <b>2. 一意性が破れた理由：</b>
              <br />
              右辺の関数 <InlineMath math="f(y) = y^{1/3}" /> を微分すると <InlineMath math="f'(y) = \frac{1}{3y^{2/3}}" /> となる。
              初期点 <InlineMath math="y=0" /> においてこの導関数は無限大に発散し、有界ではない。
              したがって、原点近傍でリプシッツ条件が満たされず、ピカール・リンデレーフの定理の前提が崩れたためである。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={9}>
          <p>
            縮小写像の原理（Theorem 2.4-1）において、不動点の一意性を証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              完備距離空間 <InlineMath math="B" /> 上の縮小写像 <InlineMath math="T" /> に、2つの異なる不動点 <InlineMath math="x, y" /> が存在すると仮定する。
            </p>
            <p>
              不動点の定義より、 <InlineMath math="T(x) = x, T(y) = y" /> である。
              これら2点間の距離を <InlineMath math="d(x, y)" /> とすると、縮小写像の定義（ <InlineMath math="d(T(x), T(y)) \leq k d(x, y), 0 \leq k < 1" /> ）より：
              <BlockMath math="d(x, y) = d(T(x), T(y)) \leq k d(x, y)" />
            </p>
            <p>
              項を移行して整理すると：
              <BlockMath math="(1 - k)d(x, y) \leq 0" />
            </p>
            <p>
              ここで <InlineMath math="k < 1" /> なので <InlineMath math="1 - k > 0" /> である。また距離の性質より <InlineMath math="d(x, y) \geq 0" /> である。
              したがって上の不等式が成り立つためには <b><InlineMath math="d(x, y) = 0" /></b> でなければならない。
              距離の公理より、これは <InlineMath math="x = y" /> を意味し、不動点がただ一つであることが示された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="2" number={10}>
          <p>
            ピカール・リンデレーフの定理の証明（Theorem 2.4-2）において、解が存在を保証される区間の半幅 <InlineMath math="h" /> はどのようなどのように決定されるか。
            考え方を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              解を構成するピカール反復が「完備距離空間内にとどまり（存在）」、「縮小性を発揮する（一意）」ための十分条件を両立させる必要がある。
              具体的には、領域を <InlineMath math="D = \{ |x - x_0| \leq a, |y - y_0| \leq b \}" /> 、 <InlineMath math="|f| \leq M" /> としたとき、以下の2つの制約から決定される。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><b>外に出ない条件：</b> 解のグラフが長方形領域 <InlineMath math="D" /> をはみ出さないためには、 <InlineMath math="h \leq a" /> かつ <InlineMath math="Mh \leq b" /> 、すなわち <InlineMath math="h \leq \min(a, b/M)" /> である必要がある。</li>
              <li><b>縮小条件：</b> 積分作用素が縮小写像となるためには、リプシッツ定数 <InlineMath math="L" /> に対して <InlineMath math="Lh < 1" /> である必要がある。</li>
            </ul>
            <p className="mt-4">
              したがって、これらをすべて満たす <b><InlineMath math="h < \min(a, b/M, 1/L)" /></b> のような小さな幅を選ぶことで、解の存在と一意性が保証される。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
