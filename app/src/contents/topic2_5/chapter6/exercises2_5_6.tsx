import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_5_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>位相空間の分離公理における <b><InlineMath math="T_0" />（コルモゴロフ）</b>、<b><InlineMath math="T_1" />（フレシェ）</b>、<b><InlineMath math="T_2" />（ハウスドルフ）</b> のそれぞれの定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>各定義（Definition 6.1-1, 6.1-2, 6.2-1）より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b><InlineMath math="T_0" />：</b> 相異なる2点に対して、どちらか一方のみを含む開集合が存在する。</li>
                            <li><b><InlineMath math="T_1" />：</b> 相異なる2点に対して、一方は含みもう一方は含まない開集合がそれぞれに存在する。</li>
                            <li><b><InlineMath math="T_2" />：</b> 相異なる2点に対して、それらを分離する（交わらない）それぞれの開近傍が存在する。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p><b>正則空間（Regular Space / <InlineMath math="T_3" />）</b>と<b>正規空間（Normal Space / <InlineMath math="T_4" />）</b>の定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 6.3-1 および 6.4-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>正則空間：</b> 点とそれを含まない閉集合に対して、それらを分離するそれぞれの開近傍が存在する。</li>
                            <li><b>正規空間：</b> 互いに素な二つの閉集合に対して、それらを分離するそれぞれの開近傍が存在する。</li>
                        </ul>
                        <p className="mt-2">（注：一般的には <InlineMath math="T_1" /> の仮定を伴うことが多いが、本教材の定義に従うこと。）</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p><b>ウリゾーンの補題（Urysohn's Lemma）</b>の主張を述べよ。</p>
                    <ExerciseSolution>
                        <p>Lemma 6.4-1 より、正規空間 <InlineMath math="X" /> において、互いに素な二つの閉集合 <InlineMath math="F_1, F_2 \subset X" /> が与えられたとき、</p>
                        <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                            <li><InlineMath math="x \in F_1" /> ならば <InlineMath math="f(x) = 0" /></li>
                            <li><InlineMath math="x \in F_2" /> ならば <InlineMath math="f(x) = 1" /></li>
                        </ol>
                        <p className="mt-2">を満たすような連続関数 <InlineMath math="f: X \to [0, 1]" /> が存在するという主張である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>位相空間が <InlineMath math="T_1" /> 空間であるための必要十分条件は、「任意の一点集合が常に閉集合であること」であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 6.1-1 より：</p>
                        <p>1) (<InlineMath math="\implies" />) <InlineMath math="X" /> を <InlineMath math="T_1" /> とし、<InlineMath math="x \in X" /> とする。任意の <InlineMath math="y \neq x" /> に対して <InlineMath math="y" /> を含み <InlineMath math="x" /> を含まない開集合 <InlineMath math="U_y" /> が存在する。このとき <InlineMath math="X \setminus \{x\} = \bigcup_{y \neq x} U_y" /> は開集合の合併となり、開集合である。よって <InlineMath math="\{x\}" /> は閉集合である。</p>
                        <p>2) (<InlineMath math="\impliedby" />) 任意の一点集合が閉集合であるとする。相異なる <InlineMath math="x, y \in X" /> に対し、<InlineMath math="X \setminus \{y\}" /> は <InlineMath math="x" /> を含み <InlineMath math="y" /> を含まない開集合である。同様に <InlineMath math="X \setminus \{x\}" /> は <InlineMath math="y" /> を含み <InlineMath math="x" /> を含まない開集合である。よって <InlineMath math="X" /> は <InlineMath math="T_1" /> である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>ハウスドルフ空間において、収束する点列の極限は一意に定まることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 6.2-1 より、背理法を用いる。点列 <InlineMath math="\{x_n\}" /> が相異なる2点 <InlineMath math="a, b" /> に収束すると仮定する。</p>
                        <p>ハウスドルフ空間の定義より、<InlineMath math="a \in U, b \in V, U \cap V = \emptyset" /> となる開近傍が存在する。収束の定義より、ある <InlineMath math="N" /> 以降ではすべての <InlineMath math="n \geq N" /> で <InlineMath math="x_n \in U" /> かつ <InlineMath math="x_n \in V" /> となる。これは <InlineMath math="U \cap V = \emptyset" /> に矛盾する。したがって極限は一意である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>正規空間（<InlineMath math="T_4" /> 空間かつ <InlineMath math="T_1" /> である空間とする）は、正則空間であることを示せ。</p>
                    <ExerciseSolution>
                        <p>正規空間 <InlineMath math="X" /> において、点 <InlineMath math="x" /> とそれを含まない閉集合 <InlineMath math="F" /> をとる。</p>
                        <p><InlineMath math="T_1" /> 空間であるから、一点集合 <InlineMath math="\{x\}" /> は閉集合である。また、点を含まないことから <InlineMath math="\{x\} \cap F = \emptyset" /> である。正規性の定義より、互いに素なこれら二つの閉集合を分離するそれぞれの開近傍が存在する。これは正則空間の定義そのものである。よって正規空間は正則である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>集合 <InlineMath math="X" /> （元が2つ以上）上の<b>密着位相</b>が <InlineMath math="T_0" /> でない理由を説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 6.1-1 より。<InlineMath math="T_0" /> 空間であるためには、相異なる2点のうち「片方のみを含む開集合」が存在しなければならない。しかし、密着位相における空でない開集合は全体集合 <InlineMath math="X" /> 唯一つであり、これは必ず両方の点を含んでしまう。よって位相的に2点を区別できず、<InlineMath math="T_0" /> ではない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p><b>ティーツェの拡張定理（Tietze Extension Theorem）</b>の主張を述べよ。また、これがウリゾーンの補題の一般化（または応用）とみなされる理由を簡潔に記せ。</p>
                    <ExerciseSolution>
                        <p>主張：Theorem 6.4-2 より。正規空間 <InlineMath math="X" /> の閉部分集合 <InlineMath math="F" /> 上で定義された連続な有界関数 <InlineMath math="f: F \to \mathbb{R}" /> は、必ず <InlineMath math="X" /> 全体で定義された連続関数 <InlineMath math="f': X \to \mathbb{R}" /> に拡張できる。</p>
                        <p>理由：ウリゾーンの補題は「二つの閉集合を分離する 0 と 1 の値」のみを保証するものであるが、ティーツェの定理はそれを任意の実数値連続関数に対して適用可能にしたものであり、情報の量を関数値そのものまで広げているからである。実際に、ウリゾーンの補題はこの定理の特別な場合といえる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>ハウスドルフ空間 <InlineMath math="X" /> において、任意の<b>コンパクト部分集合</b> <InlineMath math="K" /> は 閉集合であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Proposition 6.2-1 より。補集合 <InlineMath math="X \setminus K" /> が開集合であることを示す。任意の <InlineMath math="y \notin K" /> をとる。</p>
                        <p>1) 各 <InlineMath math="x \in K" /> に対し、ハウスドルフ性より交わらない開集合 <InlineMath math="x \in U_x, y \in V_x" /> が存在する。</p>
                        <p>2) 族 <InlineMath math="\{U_x\}_{x \in K}" /> は <InlineMath math="K" /> の開被覆となる。コンパクト性より有限個の開集合で覆える：<InlineMath math="K \subset U_{x_1} \cup \dots \cup U_{x_n}" />。</p>
                        <p>3) 対応する有限個の近傍の共通部分 <InlineMath math="V = V_{x_1} \cap \dots \cap V_{x_n}" /> は、<InlineMath math="y" /> の開近傍であり、全ての <InlineMath math="U_{x_i}" /> と交わらないため、<InlineMath math="K" /> とも交わらない。よって <InlineMath math="V \subset X \setminus K" /> となり、補集合は開集合である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>位相空間 <InlineMath math="X" /> がハウスドルフ空間であるための必要十分条件は、直積空間 <InlineMath math="X \times X" /> における対角集合</p>
                    <BlockMath math="\Delta = \{(x, x) \mid x \in X\}" />
                    <p>が閉集合であることであることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>1) (<InlineMath math="\implies" />) <InlineMath math="X" /> をハウスドルフ空間とする。任意の <InlineMath math="(x, y) \notin \Delta" /> すなわち <InlineMath math="x \neq y" /> をとる。ハウスドルフ性より、交わらない開近傍 <InlineMath math="x \in U, y \in V" />（<InlineMath math="U \cap V = \emptyset" />）が存在する。このとき、直積空間の定義より <InlineMath math="U \times V" /> は <InlineMath math="(x, y)" /> の開近傍であり、<InlineMath math="U \cap V = \emptyset" /> より <InlineMath math="(U \times V) \cap \Delta = \emptyset" /> である。よって <InlineMath math="\Delta^c" /> は開集合となり、<InlineMath math="\Delta" /> は閉集合である。</p>
                        <p className="mt-4">2) (<InlineMath math="\impliedby" />) <InlineMath math="\Delta" /> が閉集合であるとする。相異なる任意の <InlineMath math="x, y \in X" /> に対し、<InlineMath math="(x, y) \notin \Delta" /> である。<InlineMath math="\Delta^c" /> は開集合であるから、直積位相の基本開集合の定義より、ある開集合 <InlineMath math="U, V" /> が存在して <InlineMath math="(x, y) \in U \times V \subset \Delta^c" /> となる。<InlineMath math="(U \times V) \cap \Delta = \emptyset" /> であることは、<InlineMath math="U \cap V = \emptyset" /> と同値である。したがって、<InlineMath math="x" /> と <InlineMath math="y" /> を分離する開近傍が存在し、<InlineMath math="X" /> はハウスドルフ空間である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
