import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter4() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="4" number={1}>
          <p>
            定数係数斉次線形方程式 <InlineMath math="a_n y^{(n)} + \cdots + a_0 y = 0" /> に対して、
            <InlineMath math="y = e^{\lambda x}" /> を仮定して得られる代数方程式を何と呼ぶか。
          </p>
          <ExerciseSolution>
            <p>
              <b>特性方程式 (Characteristic equation)</b> と呼ぶ（Definition 4.1-1）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={2}>
          <p>
            特性方程式が <InlineMath math="m" /> 重根 <InlineMath math="\lambda" /> を持つとき、
            それに対応する <InlineMath math="m" /> 個の独立な基本解をすべて挙げよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 4.2-1 より、次の通りである：
            </p>
            <BlockMath math="e^{\lambda x}, x e^{\lambda x}, x^2 e^{\lambda x}, \dots, x^{m-1} e^{\lambda x}" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={3}>
          <p>
            特性方程式が複素共役根 <InlineMath math="\alpha \pm \beta i" /> を持つとき、
            基本解系を構成する 2 つの実数関数を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              Theorem 4.3-1 より、次の通りである：
            </p>
            <BlockMath math="e^{\alpha x} \cos \beta x, \quad e^{\alpha x} \sin \beta x" />
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="4" number={4}>
          <p>
            次の 2 階微分方程式の一般解を求めよ。
            <BlockMath math="y'' - 5y' + 6y = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 特性方程式の作成</b>
              <br />
              <BlockMath math="\lambda^2 - 5\lambda + 6 = 0" />
            </p>
            <p>
              <b>2. 特性根の算出</b>
              <br />
              <BlockMath math="(\lambda - 2)(\lambda - 3) = 0 \implies \lambda = 2, 3" />
            </p>
            <p>
              <b>3. 一般解の構成</b>
              <br />
              基本解系は <InlineMath math="\{e^{2x}, e^{3x}\}" /> である。よって一般解は：
              <BlockMath math="y = c_1 e^{2x} + c_2 e^{3x}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={5}>
          <p>
            次の 2 階微分方程式の一般解を求めよ。
            <BlockMath math="y'' + 4y' + 4y = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 特性方程式の作成</b>
              <br />
              <BlockMath math="\lambda^2 + 4\lambda + 4 = 0" />
            </p>
            <p>
              <b>2. 特性根の算出</b>
              <br />
              <BlockMath math="(\lambda + 2)^2 = 0 \implies \lambda = -2 \ (\text{重根})" />
            </p>
            <p>
              <b>3. 一般解の構成</b>
              <br />
              基本解系は <InlineMath math="\{e^{-2x}, x e^{-2x}\}" /> である。よって一般解は：
              <BlockMath math="y = (c_1 + c_2 x) e^{-2x}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={6}>
          <p>
            次の 2 階微分方程式の一般解を求めよ。
            <BlockMath math="y'' - 2y' + 5y = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 特性方程式の作成</b>
              <br />
              <BlockMath math="\lambda^2 - 2\lambda + 5 = 0" />
            </p>
            <p>
              <b>2. 特性根の算出</b>
              <br />
              解の公式より：
              <BlockMath math="\lambda = \frac{2 \pm \sqrt{4 - 20}}{2} = 1 \pm 2i" />
              実部 <InlineMath math="\alpha = 1" />、虚部 <InlineMath math="\beta = 2" /> である。
            </p>
            <p>
              <b>3. 一般解の構成</b>
              <br />
              基本解系は <InlineMath math="\{e^x \cos 2x, e^x \sin 2x\}" /> である。よって一般解は：
              <BlockMath math="y = e^x (c_1 \cos 2x + c_2 \sin 2x)" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={7}>
          <p>
            次の初期値問題を解け。
            <BlockMath math="y''' - y'' - y' + y = 0, \quad y(0)=1, y'(0)=0, y''(0)=0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 特性方程式の作成</b>
              <br />
              <BlockMath math="\lambda^3 - \lambda^2 - \lambda + 1 = 0 \implies (\lambda - 1)^2(\lambda + 1) = 0" />
              特性根は <InlineMath math="\lambda = 1" /> (重根) と <InlineMath math="\lambda = -1" /> である。
            </p>
            <p>
              <b>2. 一般解の構成</b>
              <br />
              <BlockMath math="y = (c_1 + c_2 x) e^x + c_3 e^{-x}" />
              <BlockMath math="y' = (c_1 + c_2 + c_2 x) e^x - c_3 e^{-x}" />
              <BlockMath math="y'' = (c_1 + 2c_2 + c_2 x) e^x + c_3 e^{-x}" />
            </p>
            <p>
              <b>3. 初期条件の代入</b>
              <br />
              <InlineMath math="x=0" /> を代入すると：
              <BlockMath math="\begin{cases} c_1 + c_3 = 1 \\ c_1 + c_2 - c_3 = 0 \\ c_1 + 2c_2 + c_3 = 0 \end{cases}" />
              これを解くと、<InlineMath math="c_1 = 3/4, c_2 = -1/2, c_3 = 1/4" /> を得る。
            </p>
            <p>
              <b>4. 結論</b>
              <br />
              <BlockMath math="y = \left(\frac{3}{4} - \frac{1}{2}x\right) e^x + \frac{1}{4} e^{-x}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="4" number={8}>
          <p>
            抵抗のあるばね振り子の方程式 <InlineMath math="\ddot{y} + 2\gamma\dot{y} + 4y = 0" /> において、
            解が<b>不足減衰</b>（振動しながら減衰する）となるための減衰係数 <InlineMath math="\gamma \ (> 0)" /> の範囲を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              特性方程式は <InlineMath math="\lambda^2 + 2\gamma\lambda + 4 = 0" /> である。
              解が振動（不足減衰）となるためには、特性根が虚数（複素共役根）でなければならない。
            </p>
            <p>
              2 次方程式の判別式 <InlineMath math="D/4" /> を考えると：
              <BlockMath math="D/4 = \gamma^2 - 4" />
            </p>
            <p>
              虚数解をもつ条件は <InlineMath math="D/4 < 0" /> なので：
              <BlockMath math="\gamma^2 < 4 \implies -2 < \gamma < 2" />
            </p>
            <p>
              <InlineMath math="\gamma > 0" /> の条件と合わせると、求める範囲は <b><InlineMath math="0 < \gamma < 2" /></b> となる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={9}>
          <p>
            次の 4 階微分方程式の一般解を求めよ。
            <BlockMath math="y^{(4)} + 2y'' + y = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 特性方程式の作成</b>
              <br />
              <BlockMath math="\lambda^4 + 2\lambda^2 + 1 = 0 \implies (\lambda^2 + 1)^2 = 0" />
            </p>
            <p>
              <b>2. 特性根の算出</b>
              <br />
              <InlineMath math="\lambda^2 = -1" /> より <InlineMath math="\lambda = \pm i" /> である。
              これらがそれぞれ 2 重根（重複度 2）となる。
            </p>
            <p>
              <b>3. 一般解の構成</b>
              <br />
              複素重根（Theorem 4.3-2）の規則に従い、基本解は：
              <BlockMath math="\{\cos x, \sin x, x \cos x, x \sin x\}" />
              である。よって一般解は：
              <BlockMath math="y = (c_1 + c_2 x) \cos x + (c_3 + c_4 x) \sin x" />
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={10}>
          <p>
            特性方程式が 2 重根 <InlineMath math="\lambda" /> を持つとき、
            <InlineMath math="y = x e^{\lambda x}" /> が元の微分方程式 <InlineMath math="a y'' + b y' + c y = 0" /> の解になることを、
            実際に代入して証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              特性方程式 <InlineMath math="a\lambda^2 + b\lambda + c = 0" /> が重根 <InlineMath math="\lambda" /> を持つとき、
              重根の性質より <b><InlineMath math="\lambda = -b/2a" /></b> であり、かつ <b><InlineMath math="a\lambda^2 + b\lambda + c = 0" /></b> である。
              また、 <InlineMath math="2a\lambda + b = 0" /> も成り立つ。
            </p>
            <p>
              <InlineMath math="y = x e^{\lambda x}" /> を微分すると：
              <BlockMath math="\begin{aligned} y' &= e^{\lambda x} + \lambda x e^{\lambda x} = (1 + \lambda x) e^{\lambda x} \\ y'' &= \lambda e^{\lambda x} + \lambda(1 + \lambda x) e^{\lambda x} = (2\lambda + \lambda^2 x) e^{\lambda x} \end{aligned}" />
            </p>
            <p>
              これらを方程式の左辺に代入すると：
              <BlockMath math="\begin{aligned} &ay'' + by' + cy \\ &= a(2\lambda + \lambda^2 x)e^{\lambda x} + b(1 + \lambda x)e^{\lambda x} + c(x e^{\lambda x}) \\ &= \left[ (a\lambda^2 + b\lambda + c)x + (2a\lambda + b) \right] e^{\lambda x} \end{aligned}" />
            </p>
            <p>
              ここで、特性方程式の値は 0 であり、また重根の条件より <InlineMath math="2a\lambda + b = 0" /> なので：
              <BlockMath math="\text{左辺} = [ 0 \cdot x + 0 ] e^{\lambda x} = 0" />
            </p>
            <p>
              よって、 <InlineMath math="y = x e^{\lambda x}" /> は方程式を満たす解であることが証明された。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
