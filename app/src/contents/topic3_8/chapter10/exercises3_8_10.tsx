import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_8_Chapter10() {
  return (
    <div>
      <ExerciseCategory type="confirmation">
        <ExerciseProblem chapterId="10" number={1}>
          <p>
            コーシーの定理（Theorem 10.1-1）の主張を述べよ。
          </p>
          <ExerciseSolution>
            <p>
              有限群 <InlineMath math="G" /> と素数 <InlineMath math="p" /> について、<InlineMath math="p" /> が群の位数 <InlineMath math="|G|" /> を割り切るならば、<InlineMath math="G" /> には位数がちょうど <InlineMath math="p" /> である要素が存在する。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={2}>
          <p>
            有限群 <InlineMath math="G" /> の位数が <InlineMath math="|G| = p^k m" /> （<InlineMath math="\gcd(p, m) = 1" />）であるとき、シロー <InlineMath math="p" />-部分群（Definition 10.2-1）の位数はいくつになるか答えよ。
          </p>
          <ExerciseSolution>
            <p>
              位数は <b><InlineMath math="p^k" /></b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={3}>
          <p>
            シローの第三定理（Theorem 10.3-3）において、シロー <InlineMath math="p" />-部分群の個数 <InlineMath math="n_p" /> が満たすべき 2 つの条件を挙げよ。
          </p>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-1">
              <li><InlineMath math="n_p \equiv 1 \pmod p" /> （<InlineMath math="p" /> で割ると 1 余る）</li>
              <li><InlineMath math="n_p \mid m" /> （<InlineMath math="p" /> と互いに素な成分 <InlineMath math="m" /> の約数である）</li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="basic">
        <ExerciseProblem chapterId="10" number={4}>
          <p>
            位数が <InlineMath math="|G| = 12 = 2^2 \times 3" /> の群において、シローの第三定理を用いてシロー 3-部分群の個数 <InlineMath math="n_3" /> の候補をすべて挙げよ。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="p=3, m=4" /> である。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><InlineMath math="n_3 \equiv 1 \pmod 3 \implies 1, 4, 7, \ldots" /></li>
              <li><InlineMath math="n_3 \mid 4 \implies 1, 2, 4" /></li>
            </ul>
            <p className="mt-2">
              両方を満たすのは <b>1 と 4</b> である。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={5}>
          <p>
            シロー <InlineMath math="p" />-部分群がただ 1 つしか存在しない（<InlineMath math="n_p = 1" />）ならば、それは正規部分群であることを、シローの第二定理（共役性）に基づいて説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              シローの第二定理より、任意の 2 つのシロー <InlineMath math="p" />-部分群は互いに共役である。
              つまり、あるシロー <InlineMath math="p" />-部分群を <InlineMath math="P" /> とすると、すべてのシロー <InlineMath math="p" />-部分群の集合は <InlineMath math="\{gPg^{-1} \mid g \in G\}" /> と書ける。
            </p>
            <p className="mt-2">
              もし個数が 1 つしかないならば、任意の <InlineMath math="g \in G" /> について <InlineMath math="gPg^{-1} = P" /> でなければならない。これは <InlineMath math="P" /> が正規部分群である定義そのものである。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={6}>
          <p>
            位数が 15 の群が必ず巡回群 <InlineMath math="\mathbb{Z}/15\mathbb{Z}" /> に同型であることを、シローの定理を用いて証明せよ（Theorem 10.4-1 の概略）。
          </p>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <InlineMath math="n_5 \equiv 1 \pmod 5" /> かつ <InlineMath math="n_5 \mid 3 \implies n_5 = 1" />。よってシロー 5-部分群 <InlineMath math="Q" /> は正規部分群である。
              </li>
              <li>
                <InlineMath math="n_3 \equiv 1 \pmod 3" /> かつ <InlineMath math="n_3 \mid 5 \implies n_3 = 1" />。よってシロー 3-部分群 <InlineMath math="P" /> は正規部分群である。
              </li>
              <li>
                <InlineMath math="P \trianglelefteq G" /> かつ <InlineMath math="Q \trianglelefteq G" />。位数の因数分解に基づき、これらは互いに可換となり <InlineMath math="G" /> は直積 <InlineMath math="P \times Q \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z}" /> となる。
              </li>
              <li>
                中国剰余定理より、これは巡回群 <InlineMath math="\mathbb{Z}/15\mathbb{Z}" /> に同型である。
              </li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={7}>
          <p>
            位数が <InlineMath math="p^2" /> （<InlineMath math="p" /> は素数）である群 <InlineMath math="G" /> が必ずアーベル群になる理由として、中心 <InlineMath math="Z(G)" /> に関する商群 <InlineMath math="G/Z(G)" /> が巡回群になることを指摘する議論がある（Example 10.2-2）。この議論の要点を説明せよ。
          </p>
          <ExerciseSolution>
            <ol className="list-decimal list-inside space-y-2">
              <li><InlineMath math="p" />-群は自明でない中心を持つため、<InlineMath math="|Z(G)|" /> は <InlineMath math="p" /> または <InlineMath math="p^2" />。</li>
              <li>もし <InlineMath math="|Z(G)| = p" /> ならば、商群 <InlineMath math="G/Z(G)" /> の位数は <InlineMath math="p" /> となり巡回群。</li>
              <li>商群が巡回群なら元の群はアーベル群であるため、<InlineMath math="Z(G) = G" /> となり <InlineMath math="|Z(G)| = p^2" /> と矛盾。</li>
              <li>ゆえに <InlineMath math="|Z(G)| = p^2" /> すなわち <InlineMath math="G = Z(G)" />。</li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>

      <ExerciseCategory type="advanced">
        <ExerciseProblem chapterId="10" number={8}>
          <p>
            位数 <InlineMath math="p^k" /> の <InlineMath math="p" />-群 <InlineMath math="G" /> が、各 <InlineMath math="0 \leq j \leq k" /> について位数 <InlineMath math="p^j" /> の正規部分群を必ず持つことを、中心の非自明性と帰納法を用いて証明せよ（Theorem 10.2-2）。
          </p>
          <ExerciseSolution>
            <p>
              数学的帰納法を用いる。<InlineMath math="k-1" /> で成立を仮定する。
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-2">
              <li><InlineMath math="Z(G)" /> の非自明性より、位数 <InlineMath math="p" /> の要素 <InlineMath math="z \in Z(G)" /> が存在し、<InlineMath math="N = \langle z \rangle" /> は正規部分群となる。</li>
              <li>商群 <InlineMath math="\bar{G} = G/N" /> の位数は <InlineMath math="p^{k-1}" />。</li>
              <li>帰納法の仮定より、<InlineMath math="\bar{G}" /> は位数 <InlineMath math="p^{j-1}" /> の正規部分群 <InlineMath math="\bar{H}" /> を持つ。</li>
              <li>対応定理より、これに対応する <InlineMath math="G" /> の正規部分群 <InlineMath math="H" /> は位数 <InlineMath math="p^{j-1} \times p = p^j" /> となる。</li>
            </ol>
            <p className="mt-2 text-right"><InlineMath math="\square" /></p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={9}>
          <p>
            位数 30 の群は単純群ではないことを、シロー部分群の要素数を数え上げて矛盾を導く手法で証明せよ（Example 10.4-2）。
          </p>
          <ExerciseSolution>
            <p>
              <InlineMath math="n_5 \in \{1, 6\}" /> かつ <InlineMath math="n_3 \in \{1, 10\}" />。
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>もし <InlineMath math="n_5 = 6" /> かつ <InlineMath math="n_3 = 10" /> と仮定する。</li>
              <li>位数 5 の要素は <InlineMath math="6 \times (5-1) = 24" /> 個。</li>
              <li>位数 3 の要素は <InlineMath math="10 \times (3-1) = 20" /> 個。</li>
              <li>合計 <InlineMath math="24 + 20 = 44 > 30" /> となり矛盾。</li>
            </ul>
            <p className="mt-2">
              よって <InlineMath math="n_5 = 1" /> または <InlineMath math="n_3 = 1" /> のいずれかが成り立たなければならず、いずれの場合も位数が 5 または 3 の正規部分群が存在するため、単純群ではない。
            </p>
          </ExerciseSolution>
        </ExerciseProblem>

        <ExerciseProblem chapterId="10" number={10}>
          <p>
            シローの第一定理（存在）の証明において、二項係数 <InlineMath math="|\Omega| = \binom{p^k m}{p^k}" /> が <InlineMath math="p" /> で割り切れない（<InlineMath math="|\Omega| \not\equiv 0 \pmod p" />）という議論の要点を説明せよ。
          </p>
          <ExerciseSolution>
            <p>
              二項係数を積の形式で書くと：
              <BlockMath math="\binom{p^k m}{p^k} = \frac{p^k m}{p^k} \prod_{i=1}^{p^k-1} \frac{p^k m - i}{p^k - i}" />
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>先頭の項は <InlineMath math="m" /> となり、<InlineMath math="p" /> と互いに素。</li>
              <li>任意の <InlineMath math="1 \leq i < p^k" /> に対して、整数 <InlineMath math="i" /> が割り切れる最大の <InlineMath math="p" /> のべきを <InlineMath math="p^a" /> とすると、<InlineMath math="p^a \mid i" /> かつ <InlineMath math="a < k" />。</li>
              <li>このとき、<InlineMath math="p^k m - i" /> も <InlineMath math="p^k - i" /> も <InlineMath math="p^a" /> で割り切れるが、<InlineMath math="p^{a+1}" /> では割り切れない（<InlineMath math="p^k" /> 側の方が高次であるため、低い次数の <InlineMath math="i" /> 側が支配する）。</li>
              <li>ゆえに各分母分子で <InlineMath math="p" /> の因子がすべてキャンセルし合い、全体として <InlineMath math="p" /> の倍数にならない。</li>
            </ol>
          </ExerciseSolution>
        </ExerciseProblem>
      </ExerciseCategory>
    </div>
  );
}
