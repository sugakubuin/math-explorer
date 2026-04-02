import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter1() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="1" number={1}>
          <p>
            常微分方程式における「一般解」と「特殊解」の違いについて簡潔に説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 1.1-1 によれば、それぞれの定義は以下の通りである：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><b>一般解</b>： 積分定数（任意定数）を含む解の族であり、方程式が持つ解の全体像を表す。</li>
              <li><b>特殊解</b>： 初期条件などが与えられることにより、一般解に含まれる任意定数が特定の値に決定された個別の解。</li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={2}>
          <p>
            次の微分方程式のうち、<b>変数分離形</b> (Separable ODE) であるものをすべて選べ。
          </p>
          <div className="mt-4 space-y-2">
            <p>(1) <InlineMath math="\frac{dy}{dx} = x^2 y" /></p>
            <p>(2) <InlineMath math="\frac{dy}{dx} = x + y" /></p>
            <p>(3) <InlineMath math="\frac{dy}{dx} = e^{x-y}" /></p>
            <p>(4) <InlineMath math="\frac{dy}{dx} = \sin(xy)" /></p>
          </div>
          <ExerciseSolution>
            <p>
              Definition 1.1-2 より、変数分離形は <InlineMath math="\frac{dy}{dx} = f(x)g(y)" /> の形に書けるものである。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>(1) <InlineMath math="f(x)=x^2, g(y)=y" /> と置けるため、変数分離形である。</li>
              <li>(2) <InlineMath math="x+y" /> は積の形に分解できないため、変数分離形ではない（1階線形である）。</li>
              <li>(3) <InlineMath math="e^{x-y} = e^x \cdot e^{-y}" /> と書けるため、 <InlineMath math="f(x)=e^x, g(y)=e^{-y}" /> として変数分離形である。</li>
              <li>(4) <InlineMath math="\sin(xy)" /> は一般に変数ごとの積に分解できないため、変数分離形ではない。</li>
            </ul>
            <p className="mt-4">
              したがって、正解は <b>(1) と (3)</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={3}>
          <p>
            1階線形微分方程式 <InlineMath math="y' + P(x)y = Q(x)" /> において、<InlineMath math="Q(x) = 0" /> の場合の方程式を何と呼ぶか答えよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 1.2-1 より、<InlineMath math="Q(x) = 0" /> のときの方程式を<b>斉次 (Homogeneous)</b> 方程式と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="1" number={4}>
          <p>
            次の初期値問題を解け。
            <BlockMath math="\frac{dy}{dx} = 2xy, \quad y(0) = e" />
          </p>
          <ExerciseSolution>
            <p>
              この方程式は変数分離形である。 <InlineMath math="y \neq 0" /> と仮定して変数を分離すると：
              <BlockMath math="\frac{1}{y} dy = 2x dx" />
            </p>
            <p>
              両辺を積分すると：
              <BlockMath math="\int \frac{1}{y} dy = \int 2x dx \implies \ln |y| = x^2 + C_1" />
            </p>
            <p>
              指数形式に直すと、一般解は <InlineMath math="y = Ce^{x^2}" /> （ <InlineMath math="C = \pm e^{C_1}" /> ）となる。
            </p>
            <p>
              初期条件 <InlineMath math="y(0) = e" /> を代入すると：
              <BlockMath math="e = Ce^{0^2} = C \cdot 1 \implies C = e" />
            </p>
            <p>
              よって求める特殊解は：
              <BlockMath math="y = e \cdot e^{x^2} = e^{x^2 + 1}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={5}>
          <p>
            次の方程式の一般解を、積分因子を用いて求めよ。
            <BlockMath math="\frac{dy}{dx} - \frac{1}{x}y = x \quad (x > 0)" />
          </p>
          <ExerciseSolution>
            <p>
              この方程式は <InlineMath math="P(x) = -1/x, Q(x) = x" /> の1階線形方程式である。
            </p>
            <p>
              <b>ステップ 1：積分因子の計算</b>
              <br />
              Theorem 1.2-1 より、積分因子 <InlineMath math="\mu(x)" /> は：
              <BlockMath math="\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln x} = e^{\ln (1/x)} = \frac{1}{x}" />
            </p>
            <p>
              <b>ステップ 2：両辺に積分因子を掛ける</b>
              <br />
              <BlockMath math="\frac{1}{x} \frac{dy}{dx} - \frac{1}{x^2}y = 1" />
              左辺は <InlineMath math="\frac{d}{dx}\left( \frac{1}{x} y \right)" /> に等しい。
            </p>
            <p>
              <b>ステップ 3：積分と一般解の導出</b>
              <br />
              <BlockMath math="\frac{1}{x} y = \int 1 dx + C = x + C" />
              両辺に <InlineMath math="x" /> を掛けて一般解を得る：
              <BlockMath math="y = x^2 + Cx" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={6}>
          <p>
            次の同次形方程式を、 <InlineMath math="v = y/x" /> と置換することで解け。
            <BlockMath math="\frac{dy}{dx} = \frac{x+y}{x}" />
          </p>
          <ExerciseSolution>
            <p>
              右辺は <InlineMath math="1 + \frac{y}{x}" /> と書けるため、同次形である。
              Proposition 1.2-1 に従い、 <InlineMath math="v = y/x" /> （すなわち <InlineMath math="y = vx" /> ）と置くと：
              <BlockMath math="\frac{dy}{dx} = v + x \frac{dv}{dx}" />
            </p>
            <p>
              これを与式に代入すると：
              <BlockMath math="v + x \frac{dv}{dx} = 1 + v \implies x \frac{dv}{dx} = 1" />
            </p>
            <p>
              変数を分離して積分すると：
              <BlockMath math="\int dv = \int \frac{1}{x} dx \implies v = \ln |x| + C" />
            </p>
            <p>
              <InlineMath math="v = y/x" /> を元に戻すと：
              <BlockMath math="\frac{y}{x} = \ln |x| + C \implies y = x(\ln |x| + C)" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={7}>
          <p>
            次の方程式が完全微分方程式であることを確認し、その一般解を求めよ。
            <BlockMath math="(2x + y)dx + (x + 2y)dy = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 完全性の確認</b>
              <br />
              <InlineMath math="M = 2x+y, N = x+2y" /> と置く。
              <BlockMath math="\frac{\partial M}{\partial y} = 1, \quad \frac{\partial N}{\partial x} = 1" />
              判定条件 Theorem 1.3-1 を満たすため、この方程式は完全である。
            </p>
            <p>
              <b>2. ポテンシャル関数の導出</b>
              <br />
              <InlineMath math="\frac{\partial F}{\partial x} = 2x+y" /> を <InlineMath math="x" /> で積分すると：
              <BlockMath math="F(x, y) = x^2 + xy + g(y)" />
              これを <InlineMath math="y" /> で偏微分して <InlineMath math="N" /> と比較すると：
              <BlockMath math="\frac{\partial F}{\partial y} = x + g'(y) = x + 2y \implies g'(y) = 2y" />
              よって <InlineMath math="g(y) = y^2" /> （定数は解の右辺に含めるため省略）となり、 <InlineMath math="F(x, y) = x^2 + xy + y^2" /> を得る。
            </p>
            <p>
              <b>3. 結論</b>
              <br />
              一般解は <InlineMath math="F(x, y) = C" /> より：
              <BlockMath math="x^2 + xy + y^2 = C" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="1" number={8}>
          <p>
            ベルヌーイ方程式 <InlineMath math="P' = rP\left(1 - \frac{P}{K}\right)" /> （ロジスティック方程式）を、
            適切な変数変換を用いて 1階線形微分方程式に帰着させ、一般解を導け。
          </p>
          <ExerciseSolution>
            <p>
              与式を展開すると：
              <BlockMath math="\frac{dP}{dt} - rP = -\frac{r}{K}P^2" />
              これは <InlineMath math="n=2" /> のベルヌーイ方程式である（Definition 1.4-1）。
            </p>
            <p>
              Theorem 1.4-1 に従い、 <InlineMath math="v = P^{1-2} = P^{-1}" /> と置く。
              このとき <InlineMath math="\frac{dv}{dt} = -P^{-2} \frac{dP}{dt}" /> である。
              元の方程式の両辺に <InlineMath math="-P^{-2}" /> を掛けると：
              <BlockMath math="-P^{-2} \frac{dP}{dt} + rP^{-1} = \frac{r}{K} \implies \frac{dv}{dt} + rv = \frac{r}{K}" />
            </p>
            <p>
              得られた <InlineMath math="v" /> に関する 1階線形方程式を解く。積分因子は <InlineMath math="e^{rt}" /> なので：
              <BlockMath math="\frac{d}{dt}(ve^{rt}) = \frac{r}{K}e^{rt} \implies ve^{rt} = \frac{1}{K}e^{rt} + C" />
              よって <InlineMath math="v(t) = \frac{1}{K} + Ce^{-rt}" /> となる。
            </p>
            <p>
              <InlineMath math="P = 1/v" /> より、一般解を得る：
              <BlockMath math="P(t) = \frac{1}{\frac{1}{K} + Ce^{-rt}} = \frac{K}{1 + CKe^{-rt}}" />
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={9}>
          <p>
            リッカティ方程式 <InlineMath math="y' = P(x) + Q(x)y + R(x)y^2" /> において、
            特殊解 <InlineMath math="y_1" /> が既知であるとき、 <InlineMath math="y = y_1 + \frac{1}{v}" /> と置換することで
            <InlineMath math="v" /> に関する 1階線形微分方程式が得られることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              与えられた置換 <InlineMath math="y = y_1 + v^{-1}" /> を <InlineMath math="x" /> で微分すると：
              <BlockMath math="y' = y_1' - v^{-2}v'" />
            </p>
            <p>
              これをリッカティ方程式に代入する：
              <BlockMath math="y_1' - v^{-2}v' = P + Q(y_1 + v^{-1}) + R(y_1 + v^{-1})^2" />
              右辺を展開して整理すると：
              <BlockMath math="y_1' - v^{-2}v' = (P + Qy_1 + Ry_1^2) + (Q + 2Ry_1)v^{-1} + Rv^{-2}" />
            </p>
            <p>
              ここで、 <InlineMath math="y_1" /> は特殊解なので <InlineMath math="y_1' = P + Qy_1 + Ry_1^2" /> を満たす。
              したがって両辺からこれらの項を消去でき、次の式を得る：
              <BlockMath math="-v^{-2}v' = (Q + 2Ry_1)v^{-1} + Rv^{-2}" />
            </p>
            <p>
              両辺に <InlineMath math="-v^2" /> を掛けると：
              <BlockMath math="v' = -(Q + 2Ry_1)v - R \implies v' + (Q + 2Ry_1)v = -R" />
              これは <InlineMath math="v" /> に関する 1階線形微分方程式である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="1" number={10}>
          <p>
            クレロー方程式 <InlineMath math="y = xp + p^2 \quad (p = y')" /> を解き、
            その一般解（直線族）と特異解（包絡線）を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              両辺を <InlineMath math="x" /> で微分すると：
              <BlockMath math="p = p + x \frac{dp}{dx} + 2p \frac{dp}{dx} \implies \frac{dp}{dx}(x + 2p) = 0" />
            </p>
            <p>
              Theorem 1.5-1 に基づき、場合分けを行う。
            </p>
            <p>
              <b>1. 一般解の導出</b>
              <br />
              <InlineMath math="\frac{dp}{dx} = 0" /> のとき、 <InlineMath math="p = C" /> （定数）である。
              これを元の方程式に代入すると、一般解が得られる：
              <BlockMath math="y = Cx + C^2" />
            </p>
            <p>
              <b>2. 特異解の導出</b>
              <br />
              <InlineMath math="x + 2p = 0 \implies p = -x/2" /> のとき、
              これを元の方程式に代入すると：
              <BlockMath math="y = x(-x/2) + (-x/2)^2 = -\frac{1}{2}x^2 + \frac{1}{4}x^2 = -\frac{1}{4}x^2" />
              これが特異解である。
            </p>
            <p>
              幾何学的には、特異解 <InlineMath math="y = -\frac{1}{4}x^2" /> は一般解である直線族の包絡線をなしている。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
