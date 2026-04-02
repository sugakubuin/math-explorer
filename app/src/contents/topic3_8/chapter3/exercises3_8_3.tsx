import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter3() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="3" number={1}>
          <p>
            整数加法群 <InlineMath math="\mathbb{Z}" /> とその部分群 <InlineMath math="H = 5\mathbb{Z}" /> について、<InlineMath math="17" /> を含む剰余類（左剰余類）を <InlineMath math="a + 5\mathbb{Z} \ (0 \leq a < 5)" /> の形で答えよ。
          </p>
          <ExerciseSolution>
            <p>
              Definition 3.1-1 より、左剰余類 <InlineMath math="17 + 5\mathbb{Z}" /> は、<InlineMath math="17" /> と <InlineMath math="5" /> を法として合同な整数全体の集合である。
            </p>
            <BlockMath math="17 = 3 \times 5 + 2" />
            <p>
              より、<InlineMath math="17 \equiv 2 \pmod 5" /> である。したがって、
            </p>
            <BlockMath math="17 + 5\mathbb{Z} = 2 + 5\mathbb{Z}" />
            <p>
              となり、求める <InlineMath math="a" /> は <b>2</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={2}>
          <p>
            群 <InlineMath math="G" /> と部分群 <InlineMath math="H" /> に対し、関係 <InlineMath math="x \sim_H y \iff x^{-1}y \in H" /> が同値関係であることを示す際、「対称律」が成り立つことを Proposition 3.1-2 に基づいて証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              対称律とは、<InlineMath math="x \sim_H y \implies y \sim_H x" /> が成り立つことである。
            </p>
            <p>
              <InlineMath math="x \sim_H y" /> と仮定すると、定義より <InlineMath math="x^{-1}y \in H" /> である。
              <InlineMath math="H" /> は（部分）群であるため、任意の元の逆元も <InlineMath math="H" /> に属する（Proposition 2.1-1）。
            </p>
            <p>
              したがって、
            </p>
            <BlockMath math="(x^{-1}y)^{-1} \in H \implies y^{-1}(x^{-1})^{-1} \in H \implies y^{-1}x \in H" />
            <p>
              となり、これは関係の定義より <InlineMath math="y \sim_H x" /> を意味する。よって対称律が成り立つ。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={3}>
          <p>
            有限群 <InlineMath math="G" /> の位数が 24 で、その部分群 <InlineMath math="H" /> の位数が 6 であるとする。このとき、<InlineMath math="H" /> の <InlineMath math="G" /> における指数 <InlineMath math="[G : H]" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              ラグランジュの定理（Theorem 3.2-1）および指数の定義（Definition 3.2-1）を用いる。
            </p>
            <BlockMath math="|G| = |H| \cdot [G : H]" />
            <p>
              与えられた値を代入すると、
            </p>
            <BlockMath math="24 = 6 \cdot [G : H] \implies [G : H] = 4" />
            <p>
              したがって、指数は <b>4</b> である。これは、<InlineMath math="H" /> による <InlineMath math="G" /> の相異なる剰余類がちょうど 4 つ存在することを意味する。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="3" number={4}>
          <p>
            3次対称群 <InlineMath math="S_3 = \{e, (123), (132), (12), (13), (23)\}" /> において、部分群 <InlineMath math="H = \{e, (12)\}" /> によるすべての左剰余類を具体的に書き上げよ。
          </p>
          <ExerciseSolution>
            <p>
              左剰余類は群全体を分割するため、重複のないように計算する。
            </p>
            <ul className="list-decimal list-inside space-y-4 mt-2">
              <li>
                <b>eH</b>：<InlineMath math="e\{e, (12)\} = \{e, (12)\}" />。これは部分群 <InlineMath math="H" /> 自身である。
              </li>
              <li>
                <b>(13)H</b>：<InlineMath math="(13)\{e, (12)\} = \{(13), (13)(12)\} = \{(13), (132)\}" />。
              </li>
              <li>
                <b>(23)H</b>：<InlineMath math="(23)\{e, (12)\} = \{(23), (23)(12)\} = \{(23), (123)\}" />。
              </li>
            </ul>
            <p className="mt-2">
              以上の 3 つが相異なる左剰余類である（ラグランジュの定理より個数は <InlineMath math="6/2 = 3" /> 個）。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={5}>
          <p>
            フェルマーの小定理（Theorem 3.3-2）を用いて、<InlineMath math="3^{100}" /> を <InlineMath math="11" /> で割った余りを求めよ。
          </p>
          <ExerciseSolution>
            <p>
              素数 <InlineMath math="p = 11" /> に対し、<InlineMath math="a = 3" /> は <InlineMath math="11" /> の倍数ではない。
              フェルマーの小定理より、
            </p>
            <BlockMath math="3^{11-1} = 3^{10} \equiv 1 \pmod{11}" />
            <p>
              これを利用して指数の 100 を 10 で割ると、
            </p>
            <BlockMath math="3^{100} = (3^{10})^{10} \equiv 1^{10} = 1 \pmod{11}" />
            <p>
              したがって、余りは <b>1</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={6}>
          <p>
            群 <InlineMath math="G" />、部分群 <InlineMath math="H, K" /> が <InlineMath math="G \supset H \supset K" /> を満たしているとする。
            指数が <InlineMath math="[G : H] = 3, [H : K] = 2" /> のとき、指数 <InlineMath math="[G : K]" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              Proposition 3.4-1（指数の推移性）を用いる。
            </p>
            <BlockMath math="[G : K] = [G : H][H : K]" />
            <p>
              値を代入して、
            </p>
            <BlockMath math="[G : K] = 3 \times 2 = 6" />
            <p>
              したがって、指数は <b>6</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={7}>
          <p>
            位数が 15 の有限群 <InlineMath math="G" /> において、位数が 4 の部分群 <InlineMath math="H" /> が存在しない理由を説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              ラグランジュの定理（Theorem 3.2-1）によれば、「有限群の部分群の位数は、必ず全体の位数の約数である」必要がある。
            </p>
            <p className="mt-2">
              群の位数は <InlineMath math="|G| = 15" /> であり、15 の正の約数は <InlineMath math="1, 3, 5, 15" /> のみである。
              しかし、部分群の候補とされる位数は 4 であり、4 は 15 の約数ではない。
            </p>
            <p className="mt-2">
              したがって、位数が 4 の部分群は存在し得ない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="3" number={8}>
          <p>
            有限群 <InlineMath math="G" /> の部分群 <InlineMath math="H" /> に対し、任意の左剰余類 <InlineMath math="aH" /> の元の個数が <InlineMath math="|H|" /> に一致することを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              写像 <InlineMath math="f: H \to aH" /> を <InlineMath math="f(h) = ah" /> で定め、これが全単射であることを示せばよい。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <b>全射性</b>：<InlineMath math="aH" /> の任意の元は、その定義より、ある <InlineMath math="h \in H" /> を用いて <InlineMath math="ah" /> と書ける。これは <InlineMath math="f(h)" /> の値そのものであるため、<InlineMath math="f" /> は全射である。
              </li>
              <li>
                <b>単射性</b>：<InlineMath math="f(h_1) = f(h_2)" /> と仮定する。すると、
                <BlockMath math="ah_1 = ah_2" />
                である。左から逆元 <InlineMath math="a^{-1}" /> を掛ける（または左簡約法則を用いる）ことにより、
                <BlockMath math="h_1 = h_2" />
                が得られる。したがって、<InlineMath math="f" /> は単射である。
              </li>
            </ol>
            <p className="mt-4">
              以上より、<InlineMath math="f" /> は全単射であり、集合の大きさは等しい。ゆえに <InlineMath math="|aH| = |H|" /> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={9}>
          <p>
            位数が素数 <InlineMath math="p" /> の群 <InlineMath math="G" /> は巡回群であることを、ラグランジュの定理を適用して示せ。
          </p>
          <ExerciseSolution>
            <p>
              単位元でない任意の元 <InlineMath math="a \in G \setminus \{e\}" /> をとる。
              <InlineMath math="a" /> が生成する巡回部分群 <InlineMath math="H = \langle a \rangle" /> を考える。
            </p>
            <p>
              ラグランジュの定理より、部分群の位数 <InlineMath math="|H|" /> は全体の位数 <InlineMath math="p" /> の約数でなければならない。
              <InlineMath math="p" /> は素数なので、約数は 1 か <InlineMath math="p" /> のいずれかである。
            </p>
            <p>
              ここで、<InlineMath math="a \in H" /> かつ <InlineMath math="a \neq e" /> より、<InlineMath math="H" /> には少なくとも 2 つの元（<InlineMath math="e" /> と <InlineMath math="a" />）が含まれるため（実際には位数の定義から明らか。詳細は§2.3）、<InlineMath math="|H| > 1" /> が成り立つ。
            </p>
            <p>
              したがって、<InlineMath math="|H| = p" /> でなければならず、部分集合としての包含関係 <InlineMath math="H \subset G" /> と位数の同一性から <InlineMath math="H = G" /> が従う。
              これは <InlineMath math="G" /> が一つの元から生成されることを示しており、ゆえに <InlineMath math="G" /> は巡回群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="3" number={10}>
          <p>
            群 <InlineMath math="G" /> の部分群 <InlineMath math="H" /> の指数が <InlineMath math="[G : H] = 2" /> であるとき、<InlineMath math="H" /> は正規部分群であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              任意の <InlineMath math="g \in G" /> に対して <InlineMath math="gH = Hg" /> が成り立つことを示す。
            </p>
            <p>
              <b>ケース1：<InlineMath math="g \in H" /> のとき</b><br />
              <InlineMath math="H" /> は部分群なので、左右の剰余類はいずれも <InlineMath math="H" /> 自身に一致する。
              <BlockMath math="gH = H = Hg" />
              となり、等式が成り立つ。
            </p>
            <p>
              <b>ケース2：<InlineMath math="g \notin H" /> のとき</b><br />
              指数が 2 であることから、左剰余類による分割は <InlineMath math="G = H \sqcup gH" /> である。したがって、
              <BlockMath math="gH = G \setminus H" />
              である。同様に、右剰余類による分割は <InlineMath math="G = H \sqcup Hg" /> であるため、
              <BlockMath math="Hg = G \setminus H" />
              となり、集合として一致する。
            </p>
            <p className="mt-2">
              いずれの場合も <InlineMath math="gH = Hg" /> が示されたため、<InlineMath math="H" /> は正規部分群である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
