import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter6() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="6" number={1}>
          <p>
            未知関数ベクトル <InlineMath math="\mathbf{y}(x) = (y_1, \dots, y_n)^\top" /> に対する 1 階連立線形微分方程式系の標準的な行列表記を述べよ。（Definition 6.1-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 6.1-1 より、次のように表記される：
            </p>
            <BlockMath math="\mathbf{y}'(x) = A(x)\mathbf{y}(x) + \mathbf{b}(x)" />
            <p>
              ここで <InlineMath math="A(x)" /> は係数行列、 <InlineMath math="\mathbf{b}(x)" /> は非斉次項ベクトルである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={2}>
          <p>
            正方行列 <InlineMath math="A" /> に対する行列指数関数 <InlineMath math="e^{Ax}" /> の無限級数による定義式を述べよ。（Definition 6.2-1）
          </p>
          <ExerciseSolution>
            <p>
              Definition 6.2-1 より、次の通りである：
            </p>
            <BlockMath math="e^{Ax} = I + Ax + \frac{(Ax)^2}{2!} + \frac{(Ax)^3}{3!} + \dots = \sum_{k=0}^{\infty} \frac{(Ax)^k}{k!}" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={3}>
          <p>
            斉次連立系 <InlineMath math="\mathbf{y}' = A\mathbf{y}" /> の <InlineMath math="n" /> 個の独立な解ベクトルを列として並べた行列を何と呼ぶか。（Theorem 6.1-1）
          </p>
          <ExerciseSolution>
            <p>
              <b>基本解行列 (Fundamental matrix)</b> と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="6" number={4}>
          <p>
            次の 2 階微分方程式を、1 階連立微分方程式系の行列表記に変換せよ。
            <BlockMath math="y'' + 3y' + 2y = 0" />
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="u_1 = y, u_2 = y'" /> と置く。
            </p>
            <p>
              このとき、 <InlineMath math="u_1' = y' = u_2" /> であり、
              与式より <InlineMath math="u_2' = y'' = -2y - 3y' = -2u_1 - 3u_2" /> となる。
            </p>
            <p>
              これを行列形式にまとめると：
            </p>
            <BlockMath math="\begin{pmatrix} u_1 \\ u_2 \end{pmatrix}' = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix} \begin{pmatrix} u_1 \\ u_2 \end{pmatrix}" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={5}>
          <p>
            次の連立系の一般解を求めよ。
            <BlockMath math="\mathbf{y}' = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \mathbf{y}" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 固有値の算出</b>
              <br />
              固有方程式 <InlineMath math="\det(A - \lambda I) = (1-\lambda)^2 - 4 = 0" /> より、
              <InlineMath math="1-\lambda = \pm 2 \implies \lambda = 3, -1" />
            </p>
            <p>
              <b>2. 固有ベクトルの算出</b>
              <br />
              ・ <InlineMath math="\lambda = 3" /> のとき： <InlineMath math="\begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix}\mathbf{v} = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" />
              <br />
              ・ <InlineMath math="\lambda = -1" /> のとき： <InlineMath math="\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}\mathbf{v} = 0 \implies \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />
            </p>
            <p>
              <b>3. 一般解の構成</b>
              <br />
              一般解は：
              <BlockMath math="\mathbf{y}(x) = c_1 e^{3x} \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 e^{-x} \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={6}>
          <p>
            行列 <InlineMath math="A" /> が対角行列 <InlineMath math="D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}" /> であるとき、
            行列指数関数 <InlineMath math="e^{Dx}" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              対角行列のべき乗の性質 <InlineMath math="D^k = \begin{pmatrix} \lambda_1^k & 0 \\ 0 & \lambda_2^k \end{pmatrix}" /> を用いる。
            </p>
            <p>
              級数定義（Definition 6.2-1）より：
              <BlockMath math="\begin{aligned} e^{Dx} &= \sum_{k=0}^\infty \frac{x^k}{k!} \begin{pmatrix} \lambda_1^k & 0 \\ 0 & \lambda_2^k \end{pmatrix} \\ &= \begin{pmatrix} \sum \frac{(\lambda_1 x)^k}{k!} & 0 \\ 0 & \sum \frac{(\lambda_2 x)^k}{k!} \end{pmatrix} \end{aligned}" />
            </p>
            <p>
              スカラー指数関数の定義より：
              <BlockMath math="e^{Dx} = \begin{pmatrix} e^{\lambda_1 x} & 0 \\ 0 & e^{\lambda_2 x} \end{pmatrix}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={7}>
          <p>
            複素固有値を持つ次の連立系の実数一般解を求めよ。
            <BlockMath math="\mathbf{y}' = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \mathbf{y}" />
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 固有値と固有ベクトル</b>
              <br />
              固有方程式 <InlineMath math="\lambda^2+1=0" /> より、 <InlineMath math="\lambda = i, -i" />。
              固有値 <InlineMath math="\lambda = i" /> に対する固有ベクトルは、 <InlineMath math="\begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}\mathbf{v} = 0" /> より <InlineMath math="\mathbf{v} = \begin{pmatrix} 1 \\ -i \end{pmatrix}" /> である。
            </p>
            <p>
              <b>2. 実数解の構成</b>
              <br />
              <InlineMath math="\alpha = 0, \beta = 1" />、また <InlineMath math="\mathbf{v} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + i\begin{pmatrix} 0 \\ -1 \end{pmatrix}" /> なので、 <InlineMath math="\mathbf{p} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \mathbf{q} = \begin{pmatrix} 0 \\ -1 \end{pmatrix}" /> である。
              Theorem 6.3-1 の公式に代入すると：
              <BlockMath math="\begin{aligned} \mathbf{y}_1 &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \cos x - \begin{pmatrix} 0 \\ -1 \end{pmatrix} \sin x = \begin{pmatrix} \cos x \\ \sin x \end{pmatrix} \\ \mathbf{y}_2 &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \sin x + \begin{pmatrix} 0 \\ -1 \end{pmatrix} \cos x = \begin{pmatrix} \sin x \\ -\cos x \end{pmatrix} \end{aligned}" />
            </p>
            <p>
              <b>3. 一般解</b>
              <br />
              <BlockMath math="\mathbf{y}(x) = c_1 \begin{pmatrix} \cos x \\ \sin x \end{pmatrix} + c_2 \begin{pmatrix} \sin x \\ -\cos x \end{pmatrix}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="6" number={8}>
          <p>
            行列指数関数の性質 <InlineMath math="e^{At} e^{Bt} = e^{(A+B)t}" /> が、すべての <InlineMath math="t" /> について成り立つための必要十分条件は、
            <InlineMath math="AB = BA" /> （交換可能）であることを示せ。
          </p>
          <ExerciseSolution>
            <p>
              <b>証明の概要：</b>
              級数定義を用いて、両辺の <InlineMath math="t^2" /> の係数を比較する。
            </p>
            <p>
              左辺 <InlineMath math="e^{At}e^{Bt}" /> ：
              <BlockMath math="\begin{aligned} &(I + At + \frac{A^2 t^2}{2} + \dots)(I + Bt + \frac{B^2 t^2}{2} + \dots) \\ &= I + (A+B)t + \frac{A^2 + 2AB + B^2}{2}t^2 + \dots\end{aligned}" />
            </p>
            <p>
              右辺 <InlineMath math="e^{(A+B)t}" /> ：
              <BlockMath math="\begin{aligned} &I + (A+B)t + \frac{(A+B)^2}{2}t^2 + \dots \\ &= I + (A+B)t + \frac{A^2 + AB + BA + B^2}{2}t^2 + \dots\end{aligned}" />
            </p>
            <p>
              <InlineMath math="t^2" /> の係数が等しくなるためには、 <InlineMath math="2AB = AB + BA" /> すなわち <b><InlineMath math="AB = BA" /></b> が必要であることがわかる。
              （高次の項についても、二項定理が行列に対して成立するための条件が交換可能性であるため、これが十分条件でもあることが示される。）
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={9}>
          <p>
            次の連立系の軌道の概形が原点へ収束する<b>渦状点（スパイラル）</b>であることを、固有値を調べることで示せ。
            <BlockMath math="\mathbf{y}' = \begin{pmatrix} -1 & -1 \\ 1 & -1 \end{pmatrix} \mathbf{y}" />
          </p>
          <ExerciseSolution>
            <p>
              固有方程式を解くと：
              <BlockMath math="\begin{aligned} \det(A - \lambda I) &= (-1-\lambda)^2 + 1 = 0 \\ &\implies (\lambda + 1)^2 = -1 \\ &\implies \lambda = -1 \pm i \end{aligned}" />
            </p>
            <p>
              固有値は複素共役なペア <InlineMath math="\alpha \pm \beta i" /> であり、
              実部 <InlineMath math="\alpha = -1 < 0" />、虚部 <InlineMath math="\beta = 1" /> である。
            </p>
            <p>
              §6.3 のまとめによれば、虚部 <InlineMath math="\beta \neq 0" /> は解の回転運動を表し、実部 <InlineMath math="\alpha < 0" /> は振幅の指数関数的な減衰を意味する。
              したがって、相平面上の軌道は回転しながら原点へと近づく螺旋状の曲線を描く。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={10}>
          <p>
            対角化不能な行列（重根かつ固有ベクトルの不足）を持つ場合の行列指数関数の計算について。
            行列 <InlineMath math="A = \begin{pmatrix} \lambda & 1 \\ 0 & \lambda \end{pmatrix}" /> のとき、
            <InlineMath math="A = \lambda I + N \ (N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix})" /> と分解し、
            <InlineMath math="e^{Ax} = e^{\lambda Ix} e^{Nx}" /> が成り立つ理由を述べ、実際に <InlineMath math="e^{Ax}" /> を計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>理由：</b>
              単位行列のスカラー倍 <InlineMath math="\lambda Ix" /> は任意の行列と交換可能（ <InlineMath math="(\lambda Ix) (Nx) = (Nx) (\lambda Ix)" /> ）であるため、指数法則が成立する（演習 6-8 の結果より）。
            </p>
            <p>
              <b>計算：</b>
              ・ <InlineMath math="e^{\lambda Ix} = \begin{pmatrix} e^{\lambda x} & 0 \\ 0 & e^{\lambda x} \end{pmatrix}" />
              <br />
              ・ <InlineMath math="N^2 = 0" /> なので、 <InlineMath math="e^{Nx} = I + Nx = \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix}" />
            </p>
            <p>
              これらを掛け合わせると：
              <BlockMath math="e^{Ax} = e^{\lambda x} \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} e^{\lambda x} & x e^{\lambda x} \\ 0 & e^{\lambda x} \end{pmatrix}" />
              （これは重根の場合の §4.2 の解の形とも整合している。）
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
