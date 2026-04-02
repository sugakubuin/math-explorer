import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter5() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="5" number={1}>
          <p>
            非斉次線形微分方程式 <InlineMath math="Ly = q(x)" /> の一般解は、斉次方程式 <InlineMath math="Ly = 0" /> の一般解 <InlineMath math="y_h" /> と、
            非斉次方程式の特殊解 <InlineMath math="y_p" /> を用いてどのように表されるか。（Theorem 5.1-1）
          </p>
          <ExerciseSolution>
            <p>
              一般解は、斉次解と特殊解の和として次のように表される：
            </p>
            <BlockMath math="y = y_h + y_p" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={2}>
          <p>
            待機係数法において、右辺 <InlineMath math="q(x)" /> が次の形であるとき、特殊解 <InlineMath math="y_p" /> としてどのような形を仮定すべきか。
            ただし、仮定された関数が斉次解と独立であるとする。（Theorem 5.1-2）
          </p>
          <div className="mt-4 space-y-2">
            <p>(1) <InlineMath math="q(x) = e^{ax}" /></p>
            <p>(2) <InlineMath math="q(x) = \sin bx" /></p>
          </div>
          <ExerciseSolution>
            <p>
              Theorem 5.1-2 に基づき、次のように仮定する：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
              <li>(1) <InlineMath math="y_p = A e^{ax}" /></li>
              <li>(2) <InlineMath math="y_p = A \cos bx + B \sin bx" /></li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={3}>
          <p>
            2 階線形微分方程式 <InlineMath math="Ly = a_2 y'' + a_1 y' + a_0 y = q(x)" /> に関するグリーン関数 <InlineMath math="G(x, t)" /> の定義式を、
            基本解系 <InlineMath math="\{\phi_1, \phi_2\}" /> とロンスキアン <InlineMath math="W(t)" /> を用いて述べよ。（Definition 5.3-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 5.3-1 より、 <InlineMath math="t \leq x" /> において次のように定義される：
            </p>
            <BlockMath math="G(x, t) = \frac{\phi_1(t)\phi_2(x) - \phi_2(t)\phi_1(x)}{a_2(t)W(t)}" />
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="5" number={4}>
          <p>
            待機係数法を用いて、次の微分方程式の一般解を求めよ。
            <BlockMath math="y'' - 4y' + 3y = e^{5x}" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 斉次一般解の導出</b>
              <br />
              特性方程式 <InlineMath math="\lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3) = 0" /> より、
              <InlineMath math="y_h = c_1 e^x + c_2 e^{3x}" />
            </p>
            <p>
              <b>2. 特殊解の導出</b>
              <br />
              <InlineMath math="q(x) = e^{5x}" /> は斉次解に含まれないため、 <InlineMath math="y_p = A e^{5x}" /> と仮定する。代入すると：
              <BlockMath math="(25A - 20A + 3A)e^{5x} = e^{5x} \implies 8A = 1 \implies A = 1/8" />
              よって <InlineMath math="y_p = \frac{1}{8}e^{5x}" /> となる。
            </p>
            <p>
              <b>3. 結論</b>
              <br />
              一般解は：
              <BlockMath math="y = c_1 e^x + c_2 e^{3x} + \frac{1}{8} e^{5x}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={5}>
          <p>
            次の微分方程式の一般解を求めよ。
            <BlockMath math="y'' + 4y = \sin 2x" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 斉次一般解</b>
              <br />
              特性根は <InlineMath math="\pm 2i" /> なので、 <InlineMath math="y_h = c_1 \cos 2x + c_2 \sin 2x" /> である。
            </p>
            <p>
              <b>2. 特殊解（共鳴ケース）</b>
              <br />
              右辺の <InlineMath math="\sin 2x" /> は斉次解に含まれるため、修正規則（Theorem 5.1-2）により
              <BlockMath math="y_p = x(A \cos 2x + B \sin 2x)" />
              と仮定する。微分して方程式に代入し整理すると：
              <BlockMath math="4B \cos 2x - 4A \sin 2x = \sin 2x" />
              比較して <InlineMath math="B = 0, A = -1/4" /> を得る。よって <InlineMath math="y_p = -\frac{x}{4} \cos 2x" /> となる。
            </p>
            <p>
              <b>3. 結論</b>
              <br />
              一般解は：
              <BlockMath math="y = c_1 \cos 2x + c_2 \sin 2x - \frac{x}{4} \cos 2x" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={6}>
          <p>
            定数変化法を用いて、次の微分方程式の一般解を求めよ。
            <BlockMath math="y'' + y = \tan x" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 斉次解とロンスキアン</b>
              <br />
              <InlineMath math="\phi_1 = \cos x, \phi_2 = \sin x" />、ロンスキアンは <InlineMath math="W = 1" /> である。
            </p>
            <p>
              <b>2. 係数関数の微分の計算</b>
              <br />
              行列形式（Theorem 5.2-1）より：
              <BlockMath math="\begin{pmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{pmatrix} \begin{pmatrix} v_1' \\ v_2' \end{pmatrix} = \begin{pmatrix} 0 \\ \tan x \end{pmatrix}" />
              これを解くと：
              <BlockMath math="\begin{aligned} v_1' &= -\sin x \tan x = -\frac{\sin^2 x}{\cos x} = \cos x - \frac{1}{\cos x} \\ v_2' &= \cos x \tan x = \sin x \end{aligned}" />
            </p>
            <p>
              <b>3. 積分と一般解</b>
              <br />
              <BlockMath math="\begin{aligned} v_1 &= \sin x - \ln|\sec x + \tan x| \\ v_2 &= -\cos x \end{aligned}" />
              特殊解 <InlineMath math="y_p = v_1 \cos x + v_2 \sin x = -\cos x \ln|\sec x + \tan x|" /> を得るので、一般解は：
              <BlockMath math="y = c_1 \cos x + c_2 \sin x - \cos x \ln|\sec x + \tan x|" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={7}>
          <p>
            調和振動子の方程式 <InlineMath math="y'' + 4y = q(x)" /> に対するグリーン関数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 基本情報</b>
              <br />
              基本解系は <InlineMath math="\phi_1 = \cos 2x, \phi_2 = \frac{1}{2} \sin 2x" /> とすると、 <InlineMath math="W = 1" /> となり便利である。あるいは <InlineMath math="\phi_1 = \cos 2x, \phi_2 = \sin 2x" /> ならば <InlineMath math="W = 2" /> である。後者で行う。
            </p>
            <p>
              <b>2. 公式への代入</b>
              <br />
              Definition 5.3-1 より（ <InlineMath math="a_2 = 1" /> ）：
              <BlockMath math="\begin{aligned} G(x, t) &= \frac{\cos 2t \sin 2x - \sin 2t \cos 2x}{1 \cdot 2} \\ &= \frac{1}{2} \sin(2(x-t)) \end{aligned}" />
            </p>
            <p>
              したがって、グリーン関数は <InlineMath math="G(x, t) = \frac{1}{2} \sin(2(x-t))" /> （ <InlineMath math="t \leq x" /> ）である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="5" number={8}>
          <p>
            グリーン関数による特殊解の表示式 <InlineMath math="y_p(x) = \int_{x_0}^x G(x, t) q(t) dt" /> が、
            初期条件 <InlineMath math="y(x_0)=0, y'(x_0)=0" /> を満たすことを、式を直接微分することで確かめよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 関数値の確認</b>
              <br />
              <InlineMath math="y_p(x_0) = \int_{x_0}^{x_0} G(x_0, t)q(t) dt = 0" /> は積分範囲が 0 なので明らか。
            </p>
            <p>
              <b>2. 1 回微分の確認</b>
              <br />
              ライプニッツの積分規則を用いる：
              <BlockMath math="y_p'(x) = G(x, x)q(x) + \int_{x_0}^x \frac{\partial G}{\partial x} q(t) dt" />
              グリーン関数の定義（Definition 5.3-1）により、分子は <InlineMath math="\phi_1(x)\phi_2(x) - \phi_2(x)\phi_1(x) = 0" /> なので <InlineMath math="G(x, x) = 0" /> である。
              よって <InlineMath math="y_p'(x) = \int_{x_0}^x \frac{\partial G}{\partial x} q(t) dt" /> となり、 <InlineMath math="y_p'(x_0) = 0" /> も満たされる。
            </p>
            <p>
              <b>3. 結論</b>
              <br />
              上式をさらに微分すると <InlineMath math="y_p''(x) = \frac{\partial G}{\partial x}_{t=x} q(x) + \dots" /> となり、この第 1 項が 1/a₂ であることから方程式を満たすことが示せる（導出過程の妥当性確認）。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={9}>
          <p>
            右辺が <InlineMath math="q(x) = P_n(x)e^{ax}" /> （ <InlineMath math="P_n" /> は <InlineMath math="n" /> 次多項式）の形をしている場合、
            特性根 <InlineMath math="\lambda = a" /> が重複度 <InlineMath math="m" /> の根であれば、
            特殊解を <InlineMath math="y_p = x^m Q_n(x)e^{ax}" /> （ <InlineMath math="Q_n" /> は新たな <InlineMath math="n" /> 次多項式）と仮定すべき理由を、
            微分演算子の性質の観点から簡潔に説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              微分演算子を <InlineMath math="L = P(D)" /> とすると、 <InlineMath math="P(D)(e^{ax}Q) = e^{ax} P(D+a)Q" /> という性質がある。
              <InlineMath math="a" /> が <InlineMath math="m" /> 重根であるとは、 <InlineMath math="P(\lambda) = (\lambda-a)^m R(\lambda)" /> （ただし <InlineMath math="R(a) \neq 0" /> ）と書けることと同義である。
            </p>
            <p>
              これを演算子に適用すると：
              <BlockMath math="\begin{aligned} P(D)(x^m Q_n e^{ax}) &= e^{ax} P(D+a)(x^m Q_n) \\ &= e^{ax} D^m R(D+a)(x^m Q_n) \end{aligned}" />
            </p>
            <p>
              <InlineMath math="D^m" /> は <InlineMath math="x^m" /> 以下の次数の項を打ち消すか定数化する。
              もし <InlineMath math="x^m" /> を掛けなければ、 <InlineMath math="D^m" /> によって <InlineMath math="Q_n" /> の全ての項が 0 になってしまい、右辺の多項式 <InlineMath math="P_n(x)" /> との係数比較ができなくなる。
              したがって、特性根と被る場合はその重複度の分だけ累乗を掛けて「延命」させる必要がある。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="5" number={10}>
          <p>
            グリーン関数 <InlineMath math="G(x, t)" /> が「インパルス応答」であるという物理的解釈（§5.3 まとめ）に基づき、
            非斉次項 <InlineMath math="q(t)" /> を持つ微分方程式の解が積分で表されることの直感的な意味を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              任意の関数 <InlineMath math="q(t)" /> は、各時刻 <InlineMath math="t" /> における微小な衝撃（強さ <InlineMath math="q(t)dt" /> ）の連続した集まりと見なせる。
            </p>
            <p>
              各衝撃に対するシステムの応答は、グリーン関数 <InlineMath math="G(x, t)" /> を用いて <InlineMath math="G(x, t)q(t)dt" /> と書ける。
              線形微分方程式の性質（重ね合わせ）により、全体としての応答は、過去から現在（ <InlineMath math="x" /> ）までに加えられたすべての微小衝撃に対する個別の応答を、
              積分によって足し合わせることで得られる（積分形式の解）。
            </p>
            <p>
              これは、システムが過去に受けた「入力の記憶」を累積させながら現在の状態を決定していることを意味している。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
