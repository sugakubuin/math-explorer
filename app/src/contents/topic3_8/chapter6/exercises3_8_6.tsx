import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter6() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="6" number={1}>
          <p>
            自然な全射準同型 <InlineMath math="\phi: \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}" /> に対し、第一同型定理（Theorem 6.1-1）を適用した結果、どのような同型が得られるか答えよ。
          </p>
          <ExerciseSolution>
            <p>
              準同型の核は <InlineMath math="\ker \phi = n\mathbb{Z}" />、像は <InlineMath math="\mathrm{Im} \, \phi = \mathbb{Z}/n\mathbb{Z}" /> である。
              第一同型定理 <InlineMath math="G/\ker \phi \cong \mathrm{Im} \, \phi" /> を適用すると、
            </p>
            <BlockMath math="\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/n\mathbb{Z}" />
            <p>
              という恒等的な同型が得られる。これは商群の定義そのものである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={2}>
          <p>
            有限群 <InlineMath math="G" /> からある群への準同型写像 <InlineMath math="\phi" /> がある。
            <InlineMath math="|G| = 18" /> で、核の位数が <InlineMath math="|\ker \phi| = 3" /> のとき、像の位数 <InlineMath math="|\mathrm{Im} \, \phi|" /> を求めよ。
          </p>
          <ExerciseSolution>
            <p>
              第一同型定理より、<InlineMath math="G/\ker \phi \cong \mathrm{Im} \, \phi" /> である。
              位数の関係式（ラグランジュの定理）を用いると、
            </p>
            <BlockMath math="|\mathrm{Im} \, \phi| = |G/\ker \phi| = \frac{|G|}{|\ker \phi|}" />
            <p>
              値を代入して、
            </p>
            <BlockMath math="|\mathrm{Im} \, \phi| = \frac{18}{3} = 6" />
            <p>
              したがって、像の位数は <b>6</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={3}>
          <p>
            第二同型定理（Theorem 6.2-1）において、同型となる 2 つの商群の形を答えよ。
          </p>
          <ExerciseSolution>
            <p>
              部分群 <InlineMath math="H" /> と正規部分群 <InlineMath math="N" /> に対し、
            </p>
            <BlockMath math="H/(H \cap N) \cong HN/N" />
            <p>
              が成り立つ。これはダイヤモンド同型定理とも呼ばれる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="6" number={4}>
          <p>
            加法群 <InlineMath math="\mathbb{Z}" /> から自分自身への写像 <InlineMath math="f(x) = 2x" /> は、準同型である。
            この写像に第一同型定理を適用し、像と核による同型関係を答えよ。
          </p>
          <ExerciseSolution>
            <p>
              <b>1. 核</b>：<InlineMath math="f(x) = 2x = 0" /> となるのは <InlineMath math="x = 0" /> のみ。よって <InlineMath math="\ker f = \{0\}" />。
            </p>
            <p>
              <b>2. 像</b>：値域は偶数全体の集合 <InlineMath math="2\mathbb{Z}" /> である。
            </p>
            <p>
              第一同型定理より、
            </p>
            <BlockMath math="\mathbb{Z}/\{0\} \cong 2\mathbb{Z}" />
            <p>
              すなわち <InlineMath math="\mathbb{Z} \cong 2\mathbb{Z}" /> という同型が得られる。
              （これは有限群では起こり得ない現象で、無限群の特徴の一つである。）
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={5}>
          <p>
            整数加法群 <InlineMath math="\mathbb{Z}" /> の部分群 <InlineMath math="H = 4\mathbb{Z}, N = 6\mathbb{Z}" /> に対し、
            第二同型定理の同型 <InlineMath math="H/(H \cap N) \cong HN/N" /> の両辺を具体的な巡回群の形で計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              Example 6.2-2 に基づき計算する。
            </p>
            <ul className="list-decimal list-inside space-y-2 mt-2">
              <li><InlineMath math="H \cap N = 4\mathbb{Z} \cap 6\mathbb{Z} = \mathrm{lcm}(4, 6)\mathbb{Z} = 12\mathbb{Z}" />。</li>
              <li>左辺：<InlineMath math="H/(H \cap N) = 4\mathbb{Z}/12\mathbb{Z}" />。これは要素が <InlineMath math="\{4\mathbb{Z}, 8\mathbb{Z}, 12\mathbb{Z}=0\}" /> の 3 つとなるため、<InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> に同型。</li>
              <li><InlineMath math="HN = H + N = \gcd(4, 6)\mathbb{Z} = 2\mathbb{Z}" />。</li>
              <li>右辺：<InlineMath math="HN/N = 2\mathbb{Z}/6\mathbb{Z}" />。これも要素が <InlineMath math="\{2\mathbb{Z}, 4\mathbb{Z}, 6\mathbb{Z}=0\}" /> の 3 つであり、<InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> に同型。</li>
            </ul>
            <p className="mt-2">
              よって両辺ともに <b><InlineMath math="\mathbb{Z}/3\mathbb{Z}" /></b> となり、同型が確認できる。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={6}>
          <p>
            整数加法群 <InlineMath math="\mathbb{Z}" /> と正規部分群の列 <InlineMath math="6\mathbb{Z} \subset 2\mathbb{Z} \subset \mathbb{Z}" /> に対し、
            第三同型定理の主張 <InlineMath math="(G/K)/(H/K) \cong G/H" /> が具体的にどのようになるか計算せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="G = \mathbb{Z}, H = 2\mathbb{Z}, K = 6\mathbb{Z}" /> とする。
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><InlineMath math="G/K = \mathbb{Z}/6\mathbb{Z}" /></li>
              <li><InlineMath math="H/K = 2\mathbb{Z}/6\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z}" />（位数 3）</li>
              <li>左辺：<InlineMath math="(\mathbb{Z}/6\mathbb{Z})/(\mathbb{Z}/3\mathbb{Z})" />（位数 <InlineMath math="6/3 = 2" />）</li>
              <li>右辺：<InlineMath math="G/H = \mathbb{Z}/2\mathbb{Z}" />（位数 2）</li>
            </ul>
            <p className="mt-2 text-sm italic">
              ※ 分数の約分 <InlineMath math="\frac{1/6}{1/2} = \frac{2}{6} = \frac{1}{3}" /> ではなく、<InlineMath math="\frac{\mathbb{Z}/6\mathbb{Z}}{\mathbb{Z}/3\mathbb{Z}} \cong \mathbb{Z}/2\mathbb{Z}" /> のように位数の割り算が成立している。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={7}>
          <p>
            対応定理（Theorem 6.4-1）を用いて、剰余群 <InlineMath math="\mathbb{Z}/10\mathbb{Z}" /> のすべての部分群を、元の群 <InlineMath math="\mathbb{Z}" /> の部分群との対応から求めよ。
          </p>
          <ExerciseSolution>
            <p>
              対応定理によれば、<InlineMath math="\mathbb{Z}/10\mathbb{Z}" /> の部分群は、<InlineMath math="10\mathbb{Z}" /> を含む <InlineMath math="\mathbb{Z}" /> の部分群と 1 対 1 に対応する。
            </p>
            <p>
              <InlineMath math="10\mathbb{Z}" /> を含む部分群は、10 の約数 <InlineMath math="d = 1, 2, 5, 10" /> に対応する <InlineMath math="1\mathbb{Z}, 2\mathbb{Z}, 5\mathbb{Z}, 10\mathbb{Z}" /> である。
            </p>
            <p>
              これらに対応する商群側の部分群は、
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\mathbb{Z}/10\mathbb{Z}" /> （全体）</li>
              <li><InlineMath math="2\mathbb{Z}/10\mathbb{Z}" /> （位数 5）</li>
              <li><InlineMath math="5\mathbb{Z}/10\mathbb{Z}" /> （位数 2）</li>
              <li><InlineMath math="10\mathbb{Z}/10\mathbb{Z} = \{0\}" /> （単位元のみ）</li>
            </ul>
            <p className="mt-2">
              以上の 4 つが <InlineMath math="\mathbb{Z}/10\mathbb{Z}" /> のすべての部分群である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="6" number={8}>
          <p>
            第一同型定理の証明において、写像 <InlineMath math="\bar{\phi}: G/\ker \phi \to \mathrm{Im} \, \phi \ (g\ker \phi \mapsto \phi(g))" /> が well-defined である（代表元の取り方に依らない）ことを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="K = \ker \phi" /> とおく。
              2 つの代表元 <InlineMath math="g_1, g_2" /> が同じ剰余類を定めるとき、すなわち <InlineMath math="g_1 K = g_2 K" /> であるとき、
              移った先の値が等しい、すなわち <InlineMath math="\phi(g_1) = \phi(g_2)" /> となることを示せばよい。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <InlineMath math="g_1 K = g_2 K" /> より、<InlineMath math="g_1^{-1} g_2 \in K" /> である（§3.1 同値関係）。
              </li>
              <li>
                <InlineMath math="K = \ker \phi" /> なので、核の定義より <InlineMath math="\phi(g_1^{-1} g_2) = e'" /> である。
              </li>
              <li>
                <InlineMath math="\phi" /> は準同型なので、左辺を展開すると
                <BlockMath math="\phi(g_1)^{-1} \phi(g_2) = e'" />
                が得られる。
              </li>
              <li>
                両辺に左から <InlineMath math="\phi(g_1)" /> を掛けると <InlineMath math="\phi(g_2) = \phi(g_1)" /> となり、像が代表元によらず一致することが示された。
              </li>
            </ol>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={9}>
          <p>
            第二同型定理の証明の一部として、全射準同型 <InlineMath math="\phi: H \to HN/N \ (h \mapsto hN)" /> の核が <InlineMath math="H \cap N" /> であることを証明せよ。
          </p>
          <ExerciseSolution>
            <p>
              核の定義より、<InlineMath math="h \in \ker \phi" /> であるための必要十分条件を追う。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                定義より、<InlineMath math="\ker \phi = \{ h \in H \mid \phi(h) = e_{HN/N} \}" />。
              </li>
              <li>
                商群 <InlineMath math="HN/N" /> の単位元は、正規部分群 <InlineMath math="N" /> そのものである。
              </li>
              <li>
                したがって、条件は <InlineMath math="\phi(h) = hN = N" /> となる。
              </li>
              <li>
                 剰余類の性質（§3.1）より、<InlineMath math="hN = N" /> であることと <InlineMath math="h \in N" /> であることは同値である。
              </li>
              <li>
                元々 <InlineMath math="h \in H" /> の領域で考えているため、条件は <InlineMath math="h \in H" /> かつ <InlineMath math="h \in N" />、すなわち <InlineMath math="h \in H \cap N" /> である。
              </li>
            </ol>
            <p className="mt-4">
              以上より、核は <InlineMath math="H \cap N" /> である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="6" number={10}>
          <p>
            対応定理を用いて、正規部分群 <InlineMath math="N \trianglelefteq G" /> に対し、「商群 <InlineMath math="G/N" /> が単純群であること」と「<InlineMath math="N \subsetneq G" /> が極大正規部分群（<InlineMath math="N" /> と <InlineMath math="G" /> の間に別の正規部分群が存在しない）であること」が同値であることを説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              対応定理の性質 (3) 「<InlineMath math="H \trianglelefteq G \iff H/N \trianglelefteq G/N" />（ただし <InlineMath math="N \subseteq H" />）」を利用する。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4">
              <li>
                <InlineMath math="G/N" /> が単純群であるとは、その正規部分群が自明なもの（<InlineMath math="\{e\}" /> と自分自身）しかないことを意味する。
              </li>
              <li>
                対応定理により、これら商群側の正規部分群に対応して、<InlineMath math="N" /> を含む <InlineMath math="G" /> の正規部分群もまた、<InlineMath math="N" /> 自身と <InlineMath math="G" /> 自身の 2 つしか存在しないことになる。
              </li>
              <li>
                これは、<InlineMath math="N \subsetneq H \subsetneq G" /> を満たすような正規部分群 <InlineMath math="H" /> が存在しないことを意味しており、まさに <InlineMath math="N" /> が極大正規部分群であることの定義に他ならない。
              </li>
            </ol>
            <p className="mt-4">
              この同値関係は、群を商群によって「分解」していく過程で、これ以上分解できない状態を特定するのに非常に重要である。
            </p>
            <p className="text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
