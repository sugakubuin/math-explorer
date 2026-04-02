import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter9() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="9" number={1}>
          <p>
            群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとき、固定部分群 <InlineMath math="G_x" /> と不動点集合 <InlineMath math="X^g" /> の定義をそれぞれ述べ、それらがどのような空間の部分集合であるか答えよ（Definition 9.1-1）。
          </p>
          <ExerciseSolution>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <b>固定部分群 <InlineMath math="G_x" />：</b> <InlineMath math="\{g \in G \mid g \cdot x = x\}" />。これは群 <b><InlineMath math="G" /></b> の部分集合（部分群）である。
              </li>
              <li>
                <b>不動点集合 <InlineMath math="X^g" />：</b> <InlineMath math="\{x \in X \mid g \cdot x = x\}" />。これは作用を受ける空間 <b><InlineMath math="X" /></b> の部分集合である。
              </li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={2}>
          <p>
            バーンサイドの補題（Theorem 9.2-1）において、軌道の総数 <InlineMath math="k" /> を求める公式を記述せよ。
          </p>
          <ExerciseSolution>
            <p>
              有限群 <InlineMath math="G" /> が有限集合 <InlineMath math="X" /> に作用しているとき、
            </p>
            <BlockMath math="k = \frac{1}{|G|} \sum_{g \in G} |X^g|" />
            <p>
              が成り立つ。すなわち、軌道の個数は各元 <InlineMath math="g" /> が固定する要素の数 <InlineMath math="|X^g|" /> の平均値に等しい。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={3}>
          <p>
            正方形の頂点集合 <InlineMath math="X = \{1, 2, 3, 4\}" /> に対し、巡回群 <InlineMath math="G = \langle r \rangle" />（<InlineMath math="r" /> は 90 度回転）が作用しているとき、要素 <InlineMath math="g = r" /> および <InlineMath math="g = r^2" /> に対する不動点集合の大きさ <InlineMath math="|X^g|" /> を求めよ（Example 9.1-1）。
          </p>
          <ExerciseSolution>
            <ul className="list-disc list-inside space-y-2">
              <li><b><InlineMath math="g = r" />（90度回転）：</b> すべての頂点は隣へ移動するため、固定される頂点はない。よって <b><InlineMath math="|X^r| = 0" /></b>。</li>
              <li><b><InlineMath math="g = r^2" />（180度回転）：</b> すべての頂点は対角線の反対側へ移動するため、固定される頂点はない。よって <b><InlineMath math="|X^{r^2}| = 0" /></b>。</li>
            </ul>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="9" number={4}>
          <p>
            3 つのマスが横一列に並んだ板があり、各マスを白か黒の 2 色で塗る方法を考える。ただし、180 度回転（左右反転）させて一致する塗り方は同じものとみなす。バーンサイドの補題を用いて本質的に異なる塗り方の数を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              作用する群は <InlineMath math="G = \{e, \sigma\}" />（<InlineMath math="\sigma" /> は左右反転）であり、<InlineMath math="|G| = 2" />。
              塗り方の総数は <InlineMath math="|X| = 2^3 = 8" /> 通り。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><InlineMath math="|X^e| = 8" />。</li>
              <li><InlineMath math="\sigma" /> による反転：両端のマスが同色である必要がある（中央は自由）。選べる色は（両端、中央）の 2 箇所で、各 2 色なので <InlineMath math="|X^\sigma| = 2^2 = 4" /> 通り。</li>
            </ul>
            <p className="mt-2">
              バーンサイドの補題より、<InlineMath math="k = \frac{1}{2} (8 + 4) = 6" /> 通り。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={5}>
          <p>
            正方形の頂点の 2 彩色において、回転または裏返し（二面体群 <InlineMath math="D_4" /> の作用）で一致するものを同一視する場合の不動点数 <InlineMath math="|X^g|" /> を計算する過程で、対角線を通る軸の反射について不動点数が 8 になる理由を説明せよ（Example 9.2-2）。
          </p>
          <ExerciseSolution>
            <p>
              対角線を通る軸で折り返すとき、以下の条件を満たす塗り方が固定される。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>軸の上にある 2 つの頂点は動かないため、それぞれの色は自由に選べる（2 通り <InlineMath math="\times" /> 2 通り）。</li>
              <li>残りの 2 頂点は軸に関して対称な位置にあり、入れ替わるため、それらは同じ色でなければならない（2 通り）。</li>
            </ul>
            <p className="mt-2">
              以上の 3 つの独立した色の選択があるため、<InlineMath math="2 \times 2 \times 2 = 8" /> 通りとなる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={6}>
          <p>
            有限群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとき、共役な要素 <InlineMath math="g" /> と <InlineMath math="hgh^{-1}" /> に対して、不動点集合の大きさが等しい（<InlineMath math="|X^{hgh^{-1}}| = |X^g|" />）ことを証明の概略に沿って示せ（Proposition 9.1-1）。
          </p>
          <ExerciseSolution>
            <p>
              写像 <InlineMath math="\phi : X^g \to X^{hgh^{-1}}" /> を <InlineMath math="\phi(x) = h \cdot x" /> で定める。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-2">
              <li>
                <b>well-definedness：</b> <InlineMath math="x \in X^g \implies g \cdot x = x" />。
                このとき <InlineMath math="(hgh^{-1}) \cdot (h \cdot x) = h \cdot (g \cdot x) = h \cdot x" /> となり、<InlineMath math="h \cdot x \in X^{hgh^{-1}}" /> である。
              </li>
              <li>
                <b>全単射性：</b> 群の作用 <InlineMath math="x \mapsto h \cdot x" /> は可逆（逆は <InlineMath math="x \mapsto h^{-1} \cdot x" />）であるため、この写像は全単射である。
              </li>
            </ol>
            <p className="mt-2">
              したがって、要素の個数は等しい。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={7}>
          <p>
            3次対称群 <InlineMath math="G = S_3" /> が集合 <InlineMath math="X = \{1, 2, 3\}" /> に自然に作用しているとき、バーンサイドの補題を用いて軌道の数が 1 であることを確認せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="|G| = 6" />。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><InlineMath math="e" /> (1個)：<InlineMath math="|X^e| = 3" />。</li>
              <li>互換 (3個)：例 <InlineMath math="(12)" /> は 1 と 2 を動かし、3 を固定する。<InlineMath math="|X^g| = 1" />。</li>
              <li>3次巡回置換 (2個)：例 <InlineMath math="(123)" /> はすべての要素を動かす。<InlineMath math="|X^g| = 0" />。</li>
            </ul>
            <p className="mt-2">
              バーンサイドの補題：
              <BlockMath math="k = \frac{1}{6} (3 \times 1 + 1 \times 3 + 0 \times 2) = \frac{6}{6} = 1" />。
              （全単射な作用なので当然の結果である。）
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="9" number={8}>
          <p>
            バーンサイドの補題の証明（Theorem 9.2-1）における「二重計数（Double Counting）」の論理を、集合 <InlineMath math="S = \{(g, x) \in G \times X \mid g \cdot x = x\}" /> の要素数を数える 2 つの方法を用いて記述せよ。
          </p>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <b><InlineMath math="g" /> を固定する方法：</b> 各 <InlineMath math="g \in G" /> に対して <InlineMath math="g \cdot x = x" /> となる <InlineMath math="x" /> の個数は <InlineMath math="|X^g|" /> である。よって <InlineMath math="|S| = \sum_{g \in G} |X^g|" />。
              </li>
              <li>
                <b><InlineMath math="x" /> を固定する方法：</b> 各 <InlineMath math="x \in X" /> に対して <InlineMath math="g \cdot x = x" /> となる <InlineMath math="g" /> の個数は固定部分群の位数 <InlineMath math="|G_x|" /> である。軌道・固定群定理より <InlineMath math="|G_x| = |G|/|G \cdot x|" /> なので、<InlineMath math="|S| = \sum_{x \in X} \frac{|G|}{|G \cdot x|} = |G| \sum_{x \in X} \frac{1}{|G \cdot x|}" />。
                ここで軌道内の和が 1 になることを用いると <InlineMath math="|S| = |G| \cdot k" /> となる。
              </li>
            </ol>
            <p className="mt-2">
              これら 2 つを等置して <InlineMath math="|G| \cdot k = \sum |X^g|" /> を得る。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={9}>
          <p>
            3 種類の色のビーズを 4 個使ってネックレスを作る。回転と裏返し（<InlineMath math="D_4" /> の作用）を同一視するとき、21 種類になることを計算せよ。特に巡回置換 <InlineMath math="r, r^3" /> において不動点数が 3 になる理由を「サイクル構造」の観点から説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              90度回転 <InlineMath math="r" /> は 4 つのビーズを 1 つのサイクル <InlineMath math="(1\,2\,3\,4)" /> として巡回させる。
              ネックレスがこの作用で不変であるためには、サイクル内のすべてのビーズが同じ色でなければならない。
              サイクルが 1 つであるため、色の選び方は 3 通り（<InlineMath math="3^1" />）となる。
            </p>
            <p className="mt-2">
              全体の計算（Example 9.3-1 参照）：
              <BlockMath math="\begin{aligned} k &= \frac{1}{8} (3^4 + 3^1 \times 2 + 3^2 + 3^2 \times 2 + 3^3 \times 2) \\ &= \frac{81 + 6 + 9 + 18 + 54}{8} = \frac{168}{8} = 21 \end{aligned}" />
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="9" number={10}>
          <p>
            バーンサイドの補題の限界と、ポリャの数え上げ定理（Remark 9.3-1）が解決する課題について簡潔に説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              バーンサイドの補題は、特定の色（例：赤が 2 面、白が 1 面など）の個数を指定した数え上げを直接行うことができない。
              ポリャの数え上げ定理は、各群要素のサイクル構造を反映した「サイクル指標」という多項式（母関数）を用いることで、あらゆる配色の組み合わせを網羅的に導き出すことができる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
