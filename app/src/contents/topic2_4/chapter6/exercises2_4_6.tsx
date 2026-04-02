import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p><b>選択公理 (Axiom of Choice, AC)</b> の主張を、集合族 <InlineMath math="\{S_i\}_{i \in I}" /> と選択関数を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Axiom 6.1-1 より、空でない集合の族 <InlineMath math="\{S_i\}_{i \in I}" /> に対して、各 <InlineMath math="i \in I" /> に対して <InlineMath math="f(i) \in S_i" /> を満たすような<b>選択関数</b> <InlineMath math="f" /> が存在するという主張である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p><b>ツォルンの補題 (Zorn's Lemma, ZL)</b> の主張を、半順序集合の言葉を用いて述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 6.2-1 より、空でない半順序集合 <InlineMath math="P" /> において、その任意の全順序部分集合（鎖）が <InlineMath math="P" /> 内に上界を持つならば、<InlineMath math="P" /> は少なくとも一つの<b>極大元</b>を持つという主張である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p><b>整列定理 (Well-ordering Theorem)</b> の主張を述べよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 6.3-1 より、任意の集合の上に、それを<b>整列集合</b>とするような順序関係を導入することができるという主張である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>「自然数個（可算個）の可算集合の和集合は、再び可算集合である」という定理の証明において、選択公理がどのように必要となるか説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 6.1-1 の議論に基づく。各可算集合 <InlineMath math="S_n" /> を可算であることを示すためには、自然数からの全単射（＝元を一列に並べる方法）を一つ選ぶ必要がある。しかし、各 <InlineMath math="S_n" /> に対してそのような並べ方は無数に存在する可能性があり、無限個の集合に対して<b>「一斉に並べ方を一つずつ選び出す」</b>操作は、選択公理なしには正当化できない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>半順序集合 <InlineMath math="(\mathbb{N}, \leq)" /> が<b>帰納的順序集合</b>（Definition 6.2-1）でない理由を説明せよ。</p>
                    <ExerciseSolution>
                        <p>帰納的順序集合の条件は「任意の全順序部分集合が上界を持つこと」である。</p>
                        <p>ここで、<InlineMath math="P = \mathbb{N}" /> の全順序部分集合として自分自身 <InlineMath math="A = \mathbb{N}" /> を考えると、<InlineMath math="\mathbb{N}" /> には上界（実数など外側の集合ではなく、<InlineMath math="\mathbb{N}" /> 自身の元）が存在しない。したがって仮定を満たさないため、<InlineMath math="\mathbb{N}" /> は帰納的順序集合ではない。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>整列定理によれば、実数の集合 <InlineMath math="\mathbb{R}" /> も整列可能である。このとき、標準的な大小関係（<InlineMath math="\leq" />）ではない「特殊な整列順序」において最初に来る元（最小元）は存在するか。また、その順序を具体的に書き出すことは可能か。</p>
                    <ExerciseSolution>
                        <p>1) 整列定理の主張により、整列順序が定義されているのであれば、空でない <InlineMath math="\mathbb{R}" /> には必ず<b>最小元が存在する</b>。</p>
                        <p>2) しかし、整列定理は選択公理に基づく存在証明であり、具体的な順序の「構成方法」を教えてくれるわけではない。実際に、<InlineMath math="\mathbb{R}" /> 上の整列順序を具体的に数式で書き下すことは、現代数学においても不可能であることが知られている（§6.3 備考）。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>選択公理 (AC)、ツォルンの補題 (ZL)、整列定理 (WT) の関係について、正しいものを選べ。</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                        <li>AC は ZL から導かれるが、逆は成り立たない。</li>
                        <li>これら三つは互いに独立であり、関係がない。</li>
                        <li>これら三つは ZF 公理系のもとで互いに同値である。</li>
                    </ol>
                    <ExerciseSolution>
                        <p>正解は <b>3</b>。Theorem 6.4-1 で述べられている通り、これら三つの命題は互いに同値であり、どれか一つを公理として認めれば、他の二つが定理として導かれる。現代数学ではこれらを総称して「選択公理」の枠組みで扱うことが多い。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p><b>ツォルンの補題</b>を用いて、「任意のベクトル空間 <InlineMath math="V" /> は基底を持つ」ことを証明する際、どのような半順序集合を考え、その極大元がどのように基底となるか、証明の骨子を説明せよ。</p>
                    <ExerciseSolution>
                        <p>Example 6.2-1 の議論に基づく。</p>
                        <p>1) <InlineMath math="V" /> の一次独立な部分集合全体の族を <InlineMath math="\mathcal{I}" /> とし、包含関係 <InlineMath math="\subset" /> を順序とする。</p>
                        <p>2) 任意の鎖（一次独立な集合の包含列）の和集合もまた一次独立であることを示し、これが <InlineMath math="\mathcal{I}" /> 内での上界となる（帰納的順序集合）。</p>
                        <p>3) ツォルンの補題より、<InlineMath math="\mathcal{I}" /> には極大元 <InlineMath math="B" /> が存在する。</p>
                        <p>4) この極大元 <InlineMath math="B" /> が <InlineMath math="V" /> を生成しないと仮定すると、さらに元を加えてより大きな一次独立集合が作れてしまい、極大性に矛盾する。したがって <InlineMath math="B" /> は基底である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p><b>バナッハ＝タルスキーのパラドックス</b>とはどのような主張か。また、この驚くべき結果が「選択公理」とどのように関わっているか説明せよ。</p>
                    <ExerciseSolution>
                        <p>バナッハ＝タルスキーのパラドックスとは、「一つの球体を有限個の断片に分割し、それらを回転・移動させて組み直すことで、元の球体と同じ大きさの球体を二つ作ることができる」という反直観的な定理である（§6.4 備考）。</p>
                        <p>この証明の中で、分割する際の「バラバラな断片」を取り出すために<b>選択公理</b>が本質的に使われている。この断片は「体積（ルベーグ測度）」が定義できない<b>非可測集合</b>であり、選択公理を認めない世界ではこのような極端な分割は生じない。このため、選択公理の妥当性に関する議論の際によく引用される。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>選択公理 (AC) を認めない場合に生じる不都合な例を一つ挙げよ。</p>
                    <ExerciseSolution>
                        <p>もし選択公理を認めない場合、現代数学の多くの基本的な結果が成立しなくなる。例えば：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li>任意のベクトル空間が基底を持つとは限らなくなる。</li>
                            <li>「一様連続な関数の列の極限が再び一様連続である」といった解析学の基本性質の一部が証明できなくなる。</li>
                            <li>「可算個の可算集合の和が必ずしも可算ではなくなる」可能性がある。</li>
                        </ul>
                        <p>このように、直感的には当然と思える主張さえも崩れるため、現代数学のほとんどの分野では ZFC（選択公理を含む公理系）が標準として採用されている。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
