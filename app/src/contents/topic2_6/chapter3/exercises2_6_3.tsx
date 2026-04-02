import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter3() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="3" number={1}>
          <p>
            <InlineMath math="n" /> 階斉次線形微分方程式 <InlineMath math="Ly = 0" /> の解全体が成すベクトル空間の次元はいくつか。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 3.1-2 によれば、その次元は <b><InlineMath math="n" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={2}>
          <p>
            斉次線形微分方程式の 2 つの解を <InlineMath math="\phi_1, \phi_2" /> とするとき、
            任意の定数 <InlineMath math="c_1, c_2" /> を用いた線形結合 <InlineMath math="c_1\phi_1 + c_2\phi_2" /> もまた解となる性質を何と呼ぶか。
          </p>
          <ExerciseSolution>
            <p>
              <b>重ね合わせの原理 (Principle of superposition)</b> と呼ぶ（Theorem 3.1-1）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={3}>
          <p>
            2 つの関数 <InlineMath math="\phi_1(x), \phi_2(x)" /> のロンスキアン <InlineMath math="W(x)" /> の定義式を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 3.2-1 より、次の方程式の行列式として定義される：
            </p>
            <BlockMath math="W[\phi_1, \phi_2](x) = \det \begin{pmatrix} \phi_1(x) & \phi_2(x) \\ \phi_1'(x) & \phi_2'(x) \end{pmatrix} = \phi_1\phi_2' - \phi_1'\phi_2" />
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="3" number={4}>
          <p>
            次の関数のセット <InlineMath math="\{1, x, x^2\}" /> のロンスキアンを計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 3.2-1 に従い、3 次の行列式を計算する：
            </p>
            <BlockMath math="\begin{aligned} W[1, x, x^2] &= \det \begin{pmatrix} 1 & x & x^2 \\ (1)' & (x)' & (x^2)' \\ (1)'' & (x)'' & (x^2)'' \end{pmatrix} \\ &= \det \begin{pmatrix} 1 & x & x^2 \\ 0 & 1 & 2x \\ 0 & 0 & 2 \end{pmatrix} \end{aligned}" />
            <p>
              これは上三角行列なので、対角成分の積をとればよい：
            </p>
            <BlockMath math="W = 1 \cdot 1 \cdot 2 = 2" />
            <p>
              ロンスキアンが常に <InlineMath math="2 \neq 0" /> であるため、これら 3 つの関数は一次独立である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={5}>
          <p>
            非斉次線形微分方程式 <InlineMath math="y'' + y = 2" /> の一般解を求めよ。
            ただし、対応する斉次方程式の基本解系が <InlineMath math="\{\cos x, \sin x\}" /> であることを用いてよい。
          </p>
          <ExerciseSolution>
            <p>
              非斉次方程式の一般解は、斉次方程式の一般解 <InlineMath math="y_h" /> と特殊解 <InlineMath math="y_p" /> の和で表される（Theorem 3.3-1）。
            </p>
            <p>
              <b>1. 斉次一般解：</b>
              <br />
              基本解系の線形結合より、 <InlineMath math="y_h = c_1 \cos x + c_2 \sin x" />。
            </p>
            <p>
              <b>2. 特殊解：</b>
              <br />
              右辺が定数 2 であるため、 <InlineMath math="y = A" /> （定数）という形の特殊解を仮定する。
              微分すると <InlineMath math="y' = 0, y'' = 0" /> なので、方程式に代入すると：
              <BlockMath math="0 + A = 2 \implies A = 2" />
              よって特殊解は <InlineMath math="y_p = 2" /> である。
            </p>
            <p>
              <b>3. 結論：</b>
              <br />
              一般解は：
              <BlockMath math="y = c_1 \cos x + c_2 \sin x + 2" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={6}>
          <p>
            定数変化法を用いて、微分方程式 <InlineMath math="y'' + y = \sec x \quad (-\pi/2 < x < \pi/2)" /> の一つの特殊解を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              斉次方程式の基本解系を <InlineMath math="\phi_1 = \cos x, \phi_2 = \sin x" /> とすると、ロンスキアンは <InlineMath math="W = 1" /> である。
              Theorem 3.3-2 の公式を適用する。ここで <InlineMath math="q(x) = \sec x" /> である。
            </p>
            <BlockMath math="\begin{aligned} v_1' &= -\frac{\phi_2 q}{W} = -\frac{\sin x \cdot \sec x}{1} = -\tan x \\ v_2' &= \frac{\phi_1 q}{W} = \frac{\cos x \cdot \sec x}{1} = 1 \end{aligned}" />
            <p>
              これらを積分すると：
              <BlockMath math="\begin{aligned} v_1 &= \int (-\tan x) dx = \ln |\cos x| \\ v_2 &= \int 1 dx = x \end{aligned}" />
            </p>
            <p>
              特殊解 <InlineMath math="y_p = v_1\phi_1 + v_2\phi_2" /> は：
              <BlockMath math="y_p = (\ln |\cos x|) \cos x + x \sin x" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={7}>
          <p>
            係数が連続な区間における線形方程式の性質（Theorem 3.4-2）に基づき、次の初期値問題の解の<b>最大存在区間</b>を答えよ。
            <BlockMath math="x y'' + \frac{1}{x-2} y' + e^x y = \sin x, \quad y(1) = 0, y'(1) = 1" />
          </p>
          <ExerciseSolution>
            <p>
              Theorem 3.4-2 によれば、線形方程式の解は係数が連続である最大の開区間全体で存在する。
              与式を標準形 <InlineMath math="y'' + p(x)y' + r(x)y = q(x)" /> に直すと：
              <BlockMath math="y'' + \frac{1}{x(x-2)} y' + \frac{e^x}{x} y = \frac{\sin x}{x}" />
            </p>
            <p>
              係数および右辺の不連続点は <InlineMath math="x = 0" /> と <InlineMath math="x = 2" /> である。
              初期点 <InlineMath math="x_0 = 1" /> を含む、これらの不連続点に挟まれた最大の開区間は <b><InlineMath math="(0, 2)" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="3" number={8}>
          <p>
            2 階斉次線形微分方程式 <InlineMath math="y'' + p(x)y' + r(x)y = 0" /> のロンスキアン <InlineMath math="W(x)" /> が、
            <b>アベルの等式</b>
            <BlockMath math="W(x) = W(x_0) \exp\left( -\int_{x_0}^x p(t) dt \right)" />
            を満たすことを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              2 つの一次独立な解を <InlineMath math="\phi_1, \phi_2" /> とすると、ロンスキアンは <InlineMath math="W = \phi_1\phi_2' - \phi_1'\phi_2" /> である。
              これを微分すると：
              <BlockMath math="\begin{aligned} W' &= (\phi_1\phi_2' - \phi_1'\phi_2)' \\ &= (\phi_1'\phi_2' + \phi_1\phi_2'') - (\phi_1''\phi_2 + \phi_1'\phi_2') \\ &= \phi_1\phi_2'' - \phi_1''\phi_2 \end{aligned}" />
            </p>
            <p>
              解が微分方程式を満たすことから、 <InlineMath math="\phi_i'' = -p\phi_i' - r\phi_i" /> を代入すると：
              <BlockMath math="\begin{aligned} W' &= \phi_1(-p\phi_2' - r\phi_2) - (-p\phi_1' - r\phi_1)\phi_2 \\ &= -p\phi_1\phi_2' - r\phi_1\phi_2 + p\phi_1'\phi_2 + r\phi_1\phi_2 \\ &= -p(\phi_1\phi_2' - \phi_1'\phi_2) = -p(x)W \end{aligned}" />
            </p>
            <p>
              <InlineMath math="W' = -p(x)W" /> は変数分離形の微分方程式であり、これを積分すると：
              <BlockMath math="\int_{x_0}^x \frac{dW}{W} = -\int_{x_0}^x p(t) dt \implies \ln \frac{W(x)}{W(x_0)} = -\int_{x_0}^x p(t) dt" />
              指数をとることでアベルの等式を得る。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={9}>
          <p>
            斉次方程式の解である限り、ロンスキアンは「すべての点で 0」か「すべての点で 0 でない」かのどちらか一方しか成り立たないことを、アベルの等式を用いて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              アベルの等式によれば、ロンスキアンは次のように書ける：
              <BlockMath math="W(x) = W(x_0) \exp\left( -\int_{x_0}^x p(t) dt \right)" />
            </p>
            <p>
              ここで、指数関数 <InlineMath math="\exp(\cdot)" /> は実数範囲で常に正の値（特に 0 でない値）をとる。
              したがって、ある点 <InlineMath math="x_0" /> で <InlineMath math="W(x_0) = 0" /> であれば、すべての点 <InlineMath math="x" /> で <InlineMath math="W(x) = 0" /> となり、
              逆に <InlineMath math="W(x_0) \neq 0" /> であれば、すべての点 <InlineMath math="x" /> で <InlineMath math="W(x) \neq 0" /> となる。
            </p>
            <p>
              この性質は、斉次線形微分方程式の解の一次独立性が、定義域内の 1 点での情報だけで決定できることを保証している (Theorem 3.2-1)。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={10}>
          <p>
            2 階非斉次方程式の定数変化法において、特殊解を <InlineMath math="y = v_1\phi_1 + v_2\phi_2" /> と置いた際に課される追加条件
            <BlockMath math="v_1'\phi_1 + v_2'\phi_2 = 0" />
            の妥当性について考察せよ。なぜこのような条件を置いてよいのか。
          </p>
          <ExerciseSolution>
            <p>
              元々、特殊解を求めるために未知関数を 2 つ（ <InlineMath math="v_1" /> と <InlineMath math="v_2" /> ）導入したが、
              満たすべき方程式は微分方程式 1 つのみである。
              数学的には、2 つの未知数に対して 1 つの拘束条件しかないため、自由度が 1 つ余っている状態と言える。
            </p>
            <p>
              この「余った自由度」を利用して、微分計算を最も簡略化できるように選んだのがこの条件である。
              具体的には、 <InlineMath math="y'" /> を計算した際に <InlineMath math="v_1'', v_2''" /> が現れないように、かつ 1 回微分の項を斉次解に近い形に保つために設定されている。
              これによって、最終的に <InlineMath math="v_1', v_2'" /> に関する代数的な連立方程式へ帰着させることが可能となる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
