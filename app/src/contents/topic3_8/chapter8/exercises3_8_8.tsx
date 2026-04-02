import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter8() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="8" number={1}>
          <p>
            群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への左作用（Definition 8.1-1）が満たすべき 2 つの条件を挙げよ。
          </p>
          <ExerciseSolution>
            <p>
              写像 <InlineMath math="G \times X \to X" /> （<InlineMath math="(g, x) \mapsto g \cdot x" />）が以下の 2 条件を満たす必要がある：
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li><b>単位元の作用：</b> すべての <InlineMath math="x \in X" /> に対して <InlineMath math="e \cdot x = x" />。</li>
              <li><b>結合律との整合性：</b> すべての <InlineMath math="g, h \in G" /> および <InlineMath math="x \in X" /> に対して <InlineMath math="(gh) \cdot x = g \cdot (h \cdot x)" />。</li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={2}>
          <p>
            集合 <InlineMath math="X = \{1, 2, 3\}" /> に対し、対称群の部分群 <InlineMath math="G = \langle (1\,2) \rangle = \{e, (1\,2)\}" /> が自然に作用しているとする。
          </p>
          <ul className="list-decimal list-inside space-y-1">
            <li>要素 <InlineMath math="1 \in X" /> の軌道 <InlineMath math="G \cdot 1" /> を求めよ。</li>
            <li>要素 <InlineMath math="3 \in X" /> の固定部分群 <InlineMath math="G_3" /> を求めよ。</li>
          </ul>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <InlineMath math="e \cdot 1 = 1" /> かつ <InlineMath math="(1\,2) \cdot 1 = 2" /> であるため、軌道は <b><InlineMath math="\{1, 2\}" /></b> である。
              </li>
              <li>
                <InlineMath math="3" /> を動かさない元の集合を探す。<InlineMath math="e \cdot 3 = 3" /> であり、<InlineMath math="(1\,2)" /> も <InlineMath math="3" /> を固定するため、<InlineMath math="G_3 = \{e, (1\,2)\}" /> すなわち <b><InlineMath math="G" /> 自身</b> である。
              </li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={3}>
          <p>
            軌道・固定群定理（Theorem 8.4-1）の主張を、軌道の大きさ <InlineMath math="|G \cdot x|" /> と固定部分群の指数を用いて述べよ。
          </p>
          <ExerciseSolution>
            <p>
              群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとき、任意の <InlineMath math="x \in X" /> に対して
            </p>
            <BlockMath math="|G \cdot x| = [G : G_x]" />
            <p>
              が成り立つ。すなわち、軌道の大きさは固定部分群の指数に等しい。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="8" number={4}>
          <p>
            有限群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用している。ある要素 <InlineMath math="x \in X" /> について、軌道の大きさが 6 であり、固定部分群の位数が 4 であるとき、群 <InlineMath math="G" /> の位数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              軌道・固定群定理より、<InlineMath math="|G \cdot x| = |G| / |G_x|" /> である。
            </p>
            <BlockMath math="6 = \frac{|G|}{4} \implies |G| = 6 \times 4 = 24" />
            <p>
              したがって、群の位数は <b>24</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={5}>
          <p>
            3次対称群 <InlineMath math="S_3" /> が自身の上に共役作用で作用しているとする。要素 <InlineMath math="\sigma = (1\,2)" /> の中心化群 <InlineMath math="C_{S_3}(\sigma)" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              中心化群は共役作用における固定部分群である。<br />
              <InlineMath math="C_{G}(\sigma) = \{ \rho \in G \mid \rho\sigma\rho^{-1} = \sigma \}" />。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><InlineMath math="e \in C_{S_3}(\sigma)" /> は明らか。</li>
              <li><InlineMath math="(1\,2)" /> 自身は自分自身と可換なので <b><InlineMath math="(1\,2) \in C_{S_3}(\sigma)" /></b>。</li>
              <li>他の元 <InlineMath math="(1\,3), (2\,3), (1\,2\,3), (1\,3\,2)" /> が <InlineMath math="(1\,2)" /> と交換するかを確認する。例えば <InlineMath math="(1\,3)(1\,2)(1\,3)^{-1} = (2\,3) \neq (1\,2)" /> なので含まれない。</li>
            </ul>
            <p className="mt-2">
              したがって、中心化群は <b><InlineMath math="\{e, (1\,2)\}" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={6}>
          <p>
            3次対称群 <InlineMath math="S_3" /> の類等式（Class Equation）を書き、その各項が何を意味しているか説明せよ（Example 8.1-2 および 8.4-2 参照）。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="S_3" /> の位数は 6 である。類等式は共役類への軌道分解を意味する。
            </p>
            <BlockMath math="6 = 1 + 3 + 2" />
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><b>1：</b> 中心 <InlineMath math="Z(S_3) = \{e\}" /> の要素数（単位置換の共役類）。</li>
              <li><b>3：</b> 互換の共役類 <InlineMath math="\{(1\,2), (1\,3), (2\,3)\}" /> の要素数。</li>
              <li><b>2：</b> 3次巡回置換の共役類 <InlineMath math="\{(1\,2\,3), (1\,3\,2)\}" /> の要素数。</li>
            </ul>
            <p className="mt-2">
              各項は群の位数の約数（1, 3, 2）となっており、その合計が 6 になっている。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={7}>
          <p>
            群 <InlineMath math="G = \mathbb{Z}/2\mathbb{Z} = \{0, 1\}" /> が集合 <InlineMath math="X = \{a, b\}" /> に対し、<InlineMath math="0 \cdot x = x, \ 1 \cdot a = b, \ 1 \cdot b = a" /> として作用しているとする。この作用が「忠実（Faithful）」であるかどうか、Definition 8.1-2 に基づいて判定せよ。
          </p>
          <ExerciseSolution>
            <p>
              忠実な作用とは、準同型 <InlineMath math="\phi: G \to S_X" /> が単射であること、つまり <InlineMath math="\ker \phi = \{e\}" /> であることである。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><InlineMath math="\phi(0)" /> は恒等写像 <InlineMath math="\mathrm{id}_X" /> である。</li>
              <li><InlineMath math="\phi(1)" /> は <InlineMath math="a" /> と <InlineMath math="b" /> を入れ替える互換写像であり、恒等写像ではない。</li>
            </ul>
            <p className="mt-2">
              恒等写像に対応する群の元は単位元 0 のみであるため、核は <InlineMath math="\{0\}" /> である。
              したがって単射であり、この作用は <b>忠実</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="8" number={8}>
          <p>
            群の作用において、固定部分群 <InlineMath math="G_x = \{g \in G \mid g \cdot x = x\}" /> が <InlineMath math="G" /> の部分群であることを証明せよ（Proposition 8.3-1）。
          </p>
          <ExerciseSolution>
            <p>
              部分群の 3 条件を定義に基づいて確認する。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <b>単位元：</b> 作用の公理より <InlineMath math="e \cdot x = x" /> なので、<InlineMath math="e \in G_x" /> である。
              </li>
              <li>
                <b>積での閉性：</b> <InlineMath math="g, h \in G_x" /> とすると、<InlineMath math="g \cdot x = x" /> かつ <InlineMath math="h \cdot x = x" />。<br />
                このとき <InlineMath math="(gh) \cdot x = g \cdot (h \cdot x) = g \cdot x = x" />。<br />
                よって <InlineMath math="gh \in G_x" />。
              </li>
              <li>
                <b>逆元での閉性：</b> <InlineMath math="g \in G_x" /> ならば <InlineMath math="g \cdot x = x" />。<br />
                両辺に左から <InlineMath math="g^{-1}" /> を作用させると
                <BlockMath math="\begin{aligned} g^{-1} \cdot (g \cdot x) = g^{-1} \cdot x &\implies (g^{-1}g) \cdot x = g^{-1} \cdot x \\ &\implies x = g^{-1} \cdot x \end{aligned}" />
                よって <InlineMath math="g^{-1} \in G_x" />。
              </li>
            </ol>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={9}>
          <p>
            軌道・固定群定理の証明において、写像 <InlineMath math="f: G/G_x \to G \cdot x \ (gG_x \mapsto g \cdot x)" /> が well-defined であること、および単射であることを同値変形を用いて示せ（Theorem 8.4-1 の証明）。
          </p>
          <ExerciseSolution>
            <p>
              任意の <InlineMath math="g, h \in G" /> について、以下の同値変形を行う。
            </p>
            <BlockMath math="\begin{aligned} gG_x = hG_x &\iff h^{-1} g \in G_x \\ &\iff (h^{-1} g) \cdot x = x \\ &\iff h \cdot ((h^{-1} g) \cdot x) = h \cdot x \\ &\iff (h h^{-1} g) \cdot x = h \cdot x \\ &\iff g \cdot x = h \cdot x \end{aligned}" />
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li><b>well-definedness：</b> 上記の <InlineMath math="\implies" /> 方向、すなわち「剰余類が同じなら、写像による行き先も同じである」ことが示された。</li>
              <li><b>単射性：</b> 上記の <InlineMath math="\impliedby" /> 方向、すなわち「写像による行き先が同じなら、元の剰余類も同じである」ことが示された。</li>
            </ul>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="8" number={10}>
          <p>
            類等式を用いて、位数が素数べき <InlineMath math="p^k \ (k \geq 1)" /> である群は、必ず自明でない中心を持つ（中心の位数が 1 ではない）ことを説明せよ（Theorem 8.4-3）。
          </p>
          <ExerciseSolution>
            <p>
              類等式 <InlineMath math="|G| = |Z(G)| + \sum_{a \notin Z(G)} [G : C_G(a)]" /> を考える。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                左辺 <InlineMath math="|G| = p^k" /> は <InlineMath math="p" /> の倍数である（<InlineMath math="k \geq 1" /> より）。
              </li>
              <li>
                和の各項 <InlineMath math="[G : C_G(a)]" /> は軌道の大きさであり、1 ではない（代表元 <InlineMath math="a" /> が中心に含まれないため）。また 1 以外の <InlineMath math="p^k" /> の約数であるため、各項は <b><InlineMath math="p" /> の倍数</b> である。
              </li>
              <li>
                したがって、等式のバランスをとるために <InlineMath math="|Z(G)|" /> もまた <InlineMath math="p" /> の倍数でなければならない。
              </li>
              <li>
                単位元 <InlineMath math="e" /> は常に中心に含まれるため <InlineMath math="|Z(G)| \geq 1" /> である。1 以上の <InlineMath math="p" /> の倍数であるため、<InlineMath math="|Z(G)| \geq p > 1" /> が得られる。
              </li>
            </ol>
            <p className="mt-4">
              よって、<InlineMath math="Z(G)" /> は単位元以外の元を含み、自明ではない。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
