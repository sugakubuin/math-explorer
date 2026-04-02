import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter4() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="4" number={1}>
          <p>
            アーベル群（可換群）の任意の部部群は常に正規部分群であることを、正規部分群の定義（Definition 4.1-1）に基づいて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              正規部分群の定義は、任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gH = Hg" /> が成り立つことである。
            </p>
            <p>
              アーベル群においては、任意の元 <InlineMath math="g \in G, h \in H" /> に対して交換律 <InlineMath math="gh = hg" /> が成り立つ。
              したがって、集合として
            </p>
            <BlockMath math="gH = \{ gh \mid h \in H \} = \{ hg \mid h \in H \} = Hg" />
            <p>
              が常に成り立つため、すべての部分群は正規部分群である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={2}>
          <p>
            剰余群 <InlineMath math="G = \mathbb{Z}/12\mathbb{Z}" /> と、元 <InlineMath math="\bar{4}" /> により生成される部分群 <InlineMath math="H = \langle \bar{4} \rangle" /> を考える。
            商群 <InlineMath math="G/H" /> の位数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              まず、部分群 <InlineMath math="H" /> の位数を求める。
              <InlineMath math="H = \{ \bar{0}, \bar{4}, \bar{8} \}" /> であるため、<InlineMath math="|H| = 3" />。
            </p>
            <p>
              商群の位数は、元の群の位数を部分群の位数で割ったもの（ラグランジュの定理の指数）に等しい。
            </p>
            <BlockMath math="|G/H| = [G : H] = \frac{|G|}{|H|} = \frac{12}{3} = 4" />
            <p>
              したがって、商群の位数は <b>4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={3}>
          <p>
            剰余加法群 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> は単純群でない理由を、具体的な正規部分群を一つ挙げて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              単純群とは、単位元のみの群および自分自身以外の正規部分群を持たない群のことである（Definition 4.3-1）。
            </p>
            <p>
              <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> において、例えば <InlineMath math="\bar{2}" /> で生成される部分群 <InlineMath math="H = \{ \bar{0}, \bar{2}, \bar{4} \}" /> を考える。
              この群はアーベル群なので、すべての部分群は正規である。
              <InlineMath math="H" /> は単位元のみの群（位数 1）でも、群全体（位数 6）でもない。
            </p>
            <p>
              このような非自明な正規部分群が存在するため、<InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> は単純群ではない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="4" number={4}>
          <p>
            群 <InlineMath math="G" /> の中心 <InlineMath math="Z(G) = \{ z \in G \mid zg = gz \text{ for all } g \in G \}" /> が正規部分群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 4.1-1 の条件 (ii) 「任意の <InlineMath math="g \in G" /> に対して <InlineMath math="g Z(G) g^{-1} = Z(G)" />」を示す。
            </p>
            <p>
              中心の定義より、任意の <InlineMath math="z \in Z(G)" /> と <InlineMath math="g \in G" /> に対して <InlineMath math="gz = zg" /> が成り立つ。
              この両辺に右から <InlineMath math="g^{-1}" /> を掛けると、
            </p>
            <BlockMath math="gzg^{-1} = z" />
            <p>
              となる。すなわち、<InlineMath math="Z(G)" /> の元の共役をとっても、元の <InlineMath math="z" /> 自身に戻るため、
            </p>
            <BlockMath math="g Z(G) g^{-1} = Z(G)" />
            <p>
              が全ての <InlineMath math="g \in G" /> で成り立つ。したがって <InlineMath math="Z(G)" /> は正規部分群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={5}>
          <p>
            3次対称群 <InlineMath math="S_3" /> において、元 <InlineMath math="a = (12)" /> と <InlineMath math="b = (123)" /> の交換子 <InlineMath math="[a, b] = a^{-1}b^{-1}ab" /> を計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              各元の逆元は <InlineMath math="a^{-1} = (12)" />（位数は 2）、<InlineMath math="b^{-1} = (132)" /> である。
            </p>
            <BlockMath math="[a, b] = (12)(132)(12)(123)" />
            <p>
              右側の 2 つを計算すると、<InlineMath math="(12)(123) = (23)" />。
              次に、<InlineMath math="(132)(23) = (13)" />。
              最後に、<InlineMath math="(12)(13) = (123)" />。
            </p>
            <p>
              したがって、交換子は <b>(123)</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={6}>
          <p>
            交代群 <InlineMath math="A_4" /> のクラインの 4 群 <InlineMath math="V_4" /> による商群 <InlineMath math="A_4/V_4" /> の位数と、同型な群を答えよ。
          </p>
          <ExerciseSolution>
            <p>
              交代群の位数は <InlineMath math="12" />、クラインの 4 群の位数は <InlineMath math="4" /> である。
              ラグランジュの定理より、商群の位数は、
            </p>
            <BlockMath math="|A_4/V_4| = \frac{12}{4} = 3" />
            <p>
              である。位数 3 の群は、第 3 章の結果より巡回群に限られるため、
            </p>
            <BlockMath math="A_4/V_4 \cong \mathbb{Z}/3\mathbb{Z}" />
            <p>
              となる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={7}>
          <p>
            群 <InlineMath math="G" /> の 2 つの正規部分群 <InlineMath math="H, K" /> に対し、その共通部分 <InlineMath math="H \cap K" /> もまた <InlineMath math="G" /> の正規部分群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 4.1-1 の判定条件 (iii) 「任意の <InlineMath math="g \in G" /> に対して <InlineMath math="g(H \cap K)g^{-1} \subset H \cap K" />」を示す。
            </p>
            <p>
              任意の <InlineMath math="x \in H \cap K" /> と <InlineMath math="g \in G" /> をとる。
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-2 text-sm">
              <li><InlineMath math="x \in H" /> かつ <InlineMath math="H \trianglelefteq G" /> より、<InlineMath math="gxg^{-1} \in H" />。</li>
              <li><InlineMath math="x \in K" /> かつ <InlineMath math="K \trianglelefteq G" /> より、<InlineMath math="gxg^{-1} \in K" />。</li>
            </ul>
            <p className="mt-2">
              したがって、<InlineMath math="gxg^{-1} \in H \cap K" /> となり、正規部分群としての条件が満たされる。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="4" number={8}>
          <p>
            正規部分群 <InlineMath math="H \trianglelefteq G" /> に対し、商集合 <InlineMath math="G/H" /> 上の演算 <InlineMath math="(aH) \cdot (bH) = (ab)H" /> は代表元の取り方によらずに定まる（well-defined である）ことを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="a_1 H = a_2 H" /> かつ <InlineMath math="b_1 H = b_2 H" /> と仮定する。このとき、<InlineMath math="(a_1 b_1)H = (a_2 b_2)H" /> すなわち <InlineMath math="(a_1 b_1)^{-1}(a_2 b_2) \in H" /> となることを示せばよい。
            </p>
            <p>
              仮定より、ある <InlineMath math="h_a, h_b \in H" /> が存在して <InlineMath math="a_2 = a_1 h_a" />、<InlineMath math="b_2 = b_1 h_b" /> と書ける。
            </p>
            <BlockMath math="\begin{aligned} (a_1 b_1)^{-1}(a_2 b_2) &= b_1^{-1} a_1^{-1} a_1 h_a b_1 h_b \\ &= b_1^{-1} h_a b_1 h_b \end{aligned}" />
            <p>
              ここで、<InlineMath math="H" /> は正規部分群であるため、<InlineMath math="b_1^{-1} h_a b_1" />（<InlineMath math="h_a" /> の共役）は再び <InlineMath math="H" /> に属する。
              この元を <InlineMath math="h'" /> とおくと、
            </p>
            <BlockMath math="(a_1 b_1)^{-1}(a_2 b_2) = h' h_b \in H" />
            <p>
              となる。したがって、積のクラスは代表元の選び方に依らずに一致し、演算は well-defined である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={9}>
          <p>
            交換子群 <InlineMath math="[G, G]" /> が <InlineMath math="G" /> の正規部分群であることを示し、商群 <InlineMath math="G/[G, G]" /> がアーベル群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 正規性の証明</b>：任意の交換子 <InlineMath math="s = a^{-1}b^{-1}ab" /> と <InlineMath math="g \in G" /> に対し、
              <BlockMath math="\begin{aligned} gsg^{-1} &= g(a^{-1}b^{-1}ab)g^{-1} \\ &= (gag^{-1})^{-1}(gbg^{-1})^{-1}(gag^{-1})(gbg^{-1}) \end{aligned}" />
              となり、これは再び交換子の形をしている。生成系の共役が再び属するため、<InlineMath math="[G, G]" /> は正規部分群である。
            </p>
            <p>
              <b>2. 可換性の証明</b>：商群 <InlineMath math="G/[G, G]" /> において、元を代表元 <InlineMath math="x, y" /> で表すと、
              <BlockMath math="\begin{aligned} (x[G, G])(y[G, G]) &= (y[G, G])(x[G, G]) \\ &\iff (xy)[G, G] = (yx)[G, G] \\ &\iff (yx)^{-1}(xy) \in [G, G] \\ &\iff x^{-1}y^{-1}xy \in [G, G] \end{aligned}" />
              となる。最後の式はまさに交換子の定義そのものであり、常に <InlineMath math="[G, G]" /> に属する。
              したがって商群は交換律を満たし、アーベル群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="4" number={10}>
          <p>
            群 <InlineMath math="G" /> の中心による商群 <InlineMath math="G/Z(G)" /> が巡回群であるとき、<InlineMath math="G" /> はアーベル群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="G/Z(G)" /> が巡回群であるから、ある代表元 <InlineMath math="g \in G" /> が存在し、商群の任意の元は <InlineMath math="(gZ(G))^k = g^k Z(G)" /> の形に書ける。
            </p>
            <p>
              <InlineMath math="G" /> の任意の 2 つの元 <InlineMath math="a, b" /> をとる。これらはある整数 <InlineMath math="m, n" /> と中心の元 <InlineMath math="z_1, z_2 \in Z(G)" /> を用いて、
              <BlockMath math="a = g^m z_1, \quad b = g^n z_2" />
              と表される。このとき、積を計算すると中心の定義より <InlineMath math="z_i" /> は全ての元と可換なので、
            </p>
            <BlockMath math="ab = (g^m z_1)(g^n z_2) = g^m g^n z_1 z_2 = g^{m+n} z_1 z_2" />
            <BlockMath math="ba = (g^n z_2)(g^m z_1) = g^n g^m z_2 z_1 = g^{n+m} z_1 z_2" />
            <p>
              となり、<InlineMath math="ab = ba" /> である。したがって <InlineMath math="G" /> はアーベル群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
