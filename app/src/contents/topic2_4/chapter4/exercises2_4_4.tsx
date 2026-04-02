import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>集合 <InlineMath math="P" /> 上の関係 <InlineMath math="\leq" /> が<b>半順序</b>であるために満たすべき3つの条件を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.1-1 より、以下の3条件を満たす必要がある：</p>
                        <ul className="list-decimal list-inside space-y-2 mt-2 ml-4">
                            <li><b>反射律：</b> すべての <InlineMath math="a \in P" /> に対して、<InlineMath math="a \leq a" />。</li>
                            <li><b>反対称律：</b> <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq a \implies a = b" />。</li>
                            <li><b>推移律：</b> <InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq c \implies a \leq c" />。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>半順序集合における「最大元」と「極大元」の定義の違いを簡潔に説明せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.2-1 より：</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>最大元</b>は、集合の「すべての」元 <InlineMath math="x" /> に対して <InlineMath math="x \leq a" /> を満たす。存在すれば一意である。</li>
                            <li><b>極大元</b>は、「自分より大きい元が自分以外に存在しない」元、すなわち <InlineMath math="a \leq x \implies a = x" /> を満たす。一意とは限らず、複数存在する場合がある。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p><b>整列集合</b>の定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 4.3-1 より、全順序集合 <InlineMath math="(W, \leq)" /> の任意の空でない部分集合 <InlineMath math="A \subset W" /> が<b>最小元</b>を持つとき、<InlineMath math="W" /> を整列集合という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>集合 <InlineMath math="A = \{1, 2\}" /> のべき集合 <InlineMath math="\mathcal{P}(A) = \{ \emptyset, \{1\}, \{2\}, \{1, 2\} \}" /> 上の包含関係 <InlineMath math="\subset" /> を考える。この半順序集合において以下の元を答えよ。</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                        <li>最大元（存在する場合）</li>
                        <li>極大元の集合</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>最大元：</b> すべての <InlineMath math="X \in \mathcal{P}(A)" /> に対して <InlineMath math="X \subset A" /> が成り立つ。
                                よって、最大元は <InlineMath math="\{1, 2\}" />（または <InlineMath math="A" />）である。
                            </li>
                            <li>
                                <b>極大元：</b> <InlineMath math="X \subseteq Y \implies X = Y" /> を満たす <InlineMath math="Y \in \mathcal{P}(A)" /> が自分自身のみである元を探す。
                                <InlineMath math="\{1, 2\}" /> より大きい元は含まれないため、これは極大元である。
                                最大元が存在する場合、それは唯一の極大元となる。
                                よって、極大元の集合は <InlineMath math="\{ \{1, 2\} \}" /> である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>実数の部分集合 <InlineMath math="A = (0, 1] \cup \{2\}" /> について、標準的な大小関係における以下の値を求めよ。存在しない場合は「なし」と答えよ。</p>
                    <p className="mt-2 ml-4"><InlineMath math="\inf A, \sup A, \min A, \max A" /></p>
                    <ExerciseSolution>
                        <p>Example 4.2-1 の考え方を用いる。</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>下限 <InlineMath math="\inf A" />：</b> 下界の最大値は <InlineMath math="0" />。よって <InlineMath math="\inf A = 0" />。</li>
                            <li><b>上限 <InlineMath math="\sup A" />：</b> 上界の最小値は <InlineMath math="2" />。よって <InlineMath math="\sup A = 2" />。</li>
                            <li><b>最小元 <InlineMath math="\min A" />：</b> <InlineMath math="0 \notin A" /> なので、最小元は<b>なし</b>。</li>
                            <li><b>最大元 <InlineMath math="\max A" />：</b> <InlineMath math="2 \in A" /> であり、これは上限に等しいため、最大元は <InlineMath math="2" />。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>整除関係における半順序集合 <InlineMath math="(\{1, 2, 3, 4, 6\}, \mid)" /> を考える。集合 <InlineMath math="X = \{2, 3\}" /> に対する以下の値を求めよ。</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                        <li>上界全体の集合</li>
                        <li>上限 <InlineMath math="\sup X" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>「<InlineMath math="a \mid b" />」は「<InlineMath math="b" /> が <InlineMath math="a" /> で割り切れる」を意味する。</p>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <b>上界：</b> <InlineMath math="2" /> と <InlineMath math="3" /> の両方で割り切れる元の集合を探す。
                                <InlineMath math="2 \mid 6" /> かつ <InlineMath math="3 \mid 6" /> であるが、この集合の中に <InlineMath math="6" /> 以外の共通倍数はない。
                                よって、上界全体の集合は <InlineMath math="\{6\}" /> である（注：元の集合に制限されていることに注意）。
                            </li>
                            <li>
                                <b>上限：</b> 上界集合の最小元は <InlineMath math="6" />。
                                よって <InlineMath math="\sup X = 6" /> である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>フォン・ノイマンによる自然数の構成（Definition 4.4-1）において、数字の <b>3</b> を集合の形で具体的に書き下せ。</p>
                    <ExerciseSolution>
                        <p>順次構成すると以下のようになる：</p>
                        <p className="mt-2">
                            <BlockMath math="\begin{aligned} 0 &= \emptyset \\ 1 &= \{0\} = \{\emptyset\} \\ 2 &= \{0, 1\} = \{\emptyset, \{\emptyset\}\} \\ 3 &= \{0, 1, 2\} = \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\} \end{aligned}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>空でない整列集合 <InlineMath math="W" /> には必ず最小元が存在することを証明せよ。</p>
                    <ExerciseSolution>
                        <p>整列集合の定義（Definition 4.3-1）を直接適用する。</p>
                        <p>整列集合の定義により、「任意の空でない部分集合は最小元を持つ」。</p>
                        <p><InlineMath math="W" /> 自身は <InlineMath math="W" /> の空でない部分集合であるから、整列集合の定義において <InlineMath math="A = W" /> と置けば、<InlineMath math="W" /> は最小元を持つことが直ちに導かれる。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>自然数の集合 <InlineMath math="\mathbb{N}" /> 上の標準的な大小関係が整列順序であることを、最小元が存在しない部分集合の仮定から導かれる矛盾（背理法）を用いて説明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 4.3-1 の内容に基づく。</p>
                        <p><InlineMath math="\mathbb{N}" /> の空でない部分集合 <InlineMath math="A" /> が最小元を持たないと仮定する。</p>
                        <p>このとき、任意の自然数 <InlineMath math="n" /> について <InlineMath math="1, \dots, n \notin A" /> であることを数学的帰納法（Theorem 4.3-2）で示す。</p>
                        <p>1) <InlineMath math="1 \in A" /> とすると、<InlineMath math="1" /> は <InlineMath math="\mathbb{N}" /> の最小元なので自動的に <InlineMath math="A" /> の最小元となり仮定に反する。よって <InlineMath math="1 \notin A" />。</p>
                        <p>2) <InlineMath math="1, \dots, k \notin A" /> と仮定する。もし <InlineMath math="k+1 \in A" /> ならば、<InlineMath math="A" /> の任意の元は <InlineMath math="k+1" /> 以上となるため（<InlineMath math="k" /> 以下に <InlineMath math="A" /> の元がないため）、<InlineMath math="k+1" /> が <InlineMath math="A" /> の最小元となり矛盾。よって <InlineMath math="k+1 \notin A" />。</p>
                        <p>これにより、すべての <InlineMath math="n \in \mathbb{N}" /> について <InlineMath math="n \notin A" /> となり、<InlineMath math="A" /> は空集合となる。これは <InlineMath math="A" /> が空でないという仮定に矛盾する。</p>
                        <p>したがって、空でない部分集合は必ず最小元を持つ。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>最初の無限順序数 <InlineMath math="\omega" /> の定義を述べ、任意の有限順序数（自然数） <InlineMath math="n" /> に対して <InlineMath math="n < \omega" /> が成り立つ理由を順序数の定義（Definition 4.5-1）に基づき説明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="\omega" /> は、すべての自然数の集合 <InlineMath math="\mathbb{N} = \{0, 1, 2, \dots\}" /> として定義される順序数である。</p>
                        <p>順序数の世界における大小関係 <InlineMath math="\alpha < \beta" /> は、集合としての包含関係（厳密には <InlineMath math="\alpha \in \beta" />）で定義される。任意の自然数 <InlineMath math="n" /> は集合 <InlineMath math="\omega = \{0, 1, 2, \dots\}" /> の元であるため、定義により <InlineMath math="n \in \omega" />、すなわち <InlineMath math="n < \omega" /> が成り立つ。</p>
                        <p>これは <InlineMath math="\omega" /> がすべての有限なステップ（自然数）を超越した最初の点であることを示している。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
