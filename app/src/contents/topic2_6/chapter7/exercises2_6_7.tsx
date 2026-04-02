import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_6_Chapter7() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="7" number={1}>
          <p>
            右辺が独立変数 <InlineMath math="t" /> に直接依存しないシステム <InlineMath math="\mathbf{y}' = \mathbf{f}(\mathbf{y})" /> を何と呼ぶか。（Definition 7.1-1）
          </p>
          <ExerciseSolution>
            <p>
              <b>自律系 (Autonomous system)</b> と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={2}>
          <p>
            自律系において、 <InlineMath math="\mathbf{f}(\mathbf{y}^*) = \mathbf{0}" /> を満たす点 <InlineMath math="\mathbf{y}^*" /> の名称を答えよ。（Definition 7.1-2）
          </p>
          <ExerciseSolution>
            <p>
              <b>平衡点 (Equilibrium point)</b> または固定点、静止点と呼ぶ。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={3}>
          <p>
            次の安定性の説明のうち、「漸近安定 (Asymptotically stable)」の定義に当てはまるものを選べ。（Definition 7.1-3）
          </p>
          <div className="mt-4 space-y-2">
            <p>(1) 初期値が近ければ、その後の軌道もずっと近くにとどまり続ける。</p>
            <p>(2) 安定であり、かつ時間が経つにつれて軌道が平衡点へと収束する。</p>
            <p>(3) 平衡点から少し離れると、二度と平衡点には戻らない。</p>
          </div>
          <ExerciseSolution>
            <p>
              Definition 7.1-3 より、正解は <b>(2)</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="7" number={4}>
          <p>
            次の 1 変数自律系の平衡点をすべて求めよ。
            <BlockMath math="y' = y^3 - 4y" />
          </p>
          <ExerciseSolution>
            <p>
              平衡点の条件 <InlineMath math="f(y) = 0" /> より：
              <BlockMath math="y(y^2 - 4) = 0 \implies y(y - 2)(y + 2) = 0" />
            </p>
            <p>
              したがって、平衡点は <b><InlineMath math="y = 0, 2, -2" /></b> の 3 点である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={5}>
          <p>
            次の 2 変数システムの、任意の点 <InlineMath math="(y_1, y_2)" /> におけるヤコビ行列を計算せよ。
            <BlockMath math="\begin{cases} y_1' = y_1^2 + y_2 \\ y_2' = y_1 y_2 \end{cases}" />
          </p>
          <ExerciseSolution>
            <p>
              Definition 7.2-1 より、ヤコビ行列は偏微分の行列である。
              <InlineMath math="f_1 = y_1^2 + y_2, f_2 = y_1 y_2" /> と置くと：
            </p>
            <BlockMath math="\begin{aligned} \frac{\partial f_1}{\partial y_1} &= 2 y_1, & \frac{\partial f_1}{\partial y_2} &= 1 \\ \frac{\partial f_2}{\partial y_1} &= y_2, & \frac{\partial f_2}{\partial y_2} &= y_1 \end{aligned}" />
            <p>
              したがって、ヤコビ行列は：
            </p>
            <BlockMath math="J(y_1, y_2) = \begin{pmatrix} 2 y_1 & 1 \\ y_2 & y_1 \end{pmatrix}" />
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={6}>
          <p>
            振り子の方程式から導かれるシステム
            <BlockMath math="\begin{cases} y_1' = y_2 \\ y_2' = -\sin y_1 \end{cases}" />
            について、平衡点 <InlineMath math="(0, 0)" /> における線形近似システムを求めよ。
          </p>
          <ExerciseSolution>
            <p>
              ヤコビ行列を計算する：
              <BlockMath math="J(y_1, y_2) = \begin{pmatrix} 0 & 1 \\ -\cos y_1 & 0 \end{pmatrix}" />
            </p>
            <p>
              平衡点 <InlineMath math="(0, 0)" /> を代入すると（ <InlineMath math="\cos 0 = 1" /> ）：
              <BlockMath math="J(0, 0) = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}" />
            </p>
            <p>
              微小変位 <InlineMath math="\mathbf{u} = (u_1, u_2)^\top" /> に対する線形近似システムは：
              <BlockMath math="\mathbf{u}' = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \mathbf{u}" />
              すなわち、 <InlineMath math="u_1' = u_2, u_2' = -u_1" /> となる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={7}>
          <p>
            固有値に基づき、次の線形システムの平衡点 <InlineMath math="(0, 0)" /> の種類（結節点・渦状点・鞍点のいずれか）と安定性を答えよ。
            <BlockMath math="\mathbf{y}' = \begin{pmatrix} -2 & 0 \\ 0 & -3 \end{pmatrix} \mathbf{y}" />
          </p>
          <ExerciseSolution>
            <p>
              この行列の固有値は対角成分そのものであり、 <InlineMath math="\lambda_1 = -2, \lambda_2 = -3" /> である。
            </p>
            <p>
              Theorem 7.2-1 によれば、
              固有値がともに負の実数であるため、この点は <b>安定結節点 (Stable Node)</b> であり、
              安定性は <b>漸近安定</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="7" number={8}>
          <p>
            自律系 <InlineMath math="y' = y(y-1)(y-2)" /> の平衡点を特定し、各平衡点の線形化を用いた安定性判定を行え。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 平衡点：</b> <InlineMath math="y = 0, 1, 2" /> の 3 点。
            </p>
            <p>
              <b>2. 線形化関数の計算：</b> <InlineMath math="f(y) = y^3 - 3 y^2 + 2 y \implies f'(y) = 3 y^2 - 6 y + 2" />。
            </p>
            <p>
              <b>3. 各点での判定：</b>
              <br />・ <InlineMath math="y = 0" />： <InlineMath math="f'(0) = 2 > 0" /> （正の固有値） $\to$ <b>不安定</b>。
              <br />・ <InlineMath math="y = 1" />： <InlineMath math="f'(1) = 3 - 6 + 2 = -1 < 0" /> （負の固有値） $\to$ <b>漸近安定</b>。
              <br />・ <InlineMath math="y = 2" />： <InlineMath math="f'(2) = 12 - 12 + 2 = 2 > 0" /> （正の固有値） $\to$ <b>不安定</b>。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={9}>
          <p>
            振り子のシステムにおいて、平衡点 <InlineMath math="(\pi, 0)" /> （真上に静止した状態）の安定性を、線形化手法を用いて詳細に判定せよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. ヤコビ行列の計算：</b>
              §7.2 の結果より、 <InlineMath math="J(y_1, y_2) = \begin{pmatrix} 0 & 1 \\ -\cos y_1 & 0 \end{pmatrix}" /> である。
            </p>
            <p>
              <b>2. 平衡点の代入：</b>
              <InlineMath math="(\pi, 0)" /> を代入すると、 <InlineMath math="\cos \pi = -1" /> なので：
              <BlockMath math="J(\pi, 0) = \begin{pmatrix} 0 & 1 \\ -(-1) & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}" />
            </p>
            <p>
              <b>3. 固有値の算出：</b>
              <InlineMath math="\det(J - \lambda I) = -\lambda(-\lambda) - 1 = \lambda^2 - 1 = 0 \implies \lambda = \pm 1" />。
            </p>
            <p>
              <b>4. 結論：</b>
              一方の固有値が実数で正（ <InlineMath math="\lambda = 1" /> ）であるため、この点は <b>鞍点 (Saddle point)</b> となり、安定性は <b>不安定</b> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="7" number={10}>
          <p>
            線形化による判定の限界について。§7.2 のまとめ、および Example 6.3-1「中心」の挙動を踏まえ、
            固有値の実部がちょうど 0 である場合、なぜ線形近似だけで判定することが危険なのか説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              ヤコビ行列の固有値の実部がちょうど 0 である場合（純虚数根など）、線形近似レベルでの軌道は「中心」となり、単なる円運動を描き続けるだけで収束も発散もしない。
            </p>
            <p>
              しかし、実際の非線形システムには線形化の際に切り捨てた高次の項、あるいは物理的な摩擦やエネルギー散逸の項が存在する。
              これらの微小な項が、軌道を「中心」から「スパイラル」へと変えてしまう可能性がある（例：微小な摩擦があれば原点へ収束し漸近安定となるが、微小な増幅があれば不安定になる）。
            </p>
            <p>
              このように、線形近似による判定が「境界線上」にあるときは、無視した高次の項が支配的な影響力を持つため、線形化だけでは安定性を正しく判断できなくなる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
