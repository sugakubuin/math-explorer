import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter8() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="8" number={1}>
                    <p>
                        フォン・ノイマン順序数（Definition 8.1-1）の定義を、推移的（transitive）という言葉を用いて説明せよ。また、自然数の 3 に対応する順序数を、空集合 <InlineMath math="\emptyset" /> を用いた集合の形式で記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>定義：</strong> 集合 <InlineMath math="\alpha" /> が順序数であるとは、その要素が所属関係 <InlineMath math="\in" /> によって整列順序付けられており、かつ <InlineMath math="\alpha" /> 自体が推移的（<InlineMath math="x \in \alpha \implies x \subseteq \alpha" />）であることをいう。
                        </p>
                        <p className="mt-4">
                            <strong>自然数 3：</strong><br />
                            <InlineMath math="3 = \{0, 1, 2\} = \{\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}\}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={2}>
                    <p>
                        順序数（Ordinal number）と基数（Cardinal number）の根本的な意味の違いを、「順番」と「大きさ」という言葉を用いて簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>順序数：</strong> 集合の要素の「並び方（順番）」の型を表す。無限集合の場合、同じ大きさの集合でも並べ方によって異なる順序数（<InlineMath math="\omega, \omega+1, \omega \cdot 2" /> など）になりうる。
                        </p>
                        <p className="mt-2">
                            <strong>基数：</strong> 集合の要素の「個数（大きさ）」そのものを表す。全単射が存在する（1対1に対応がつく）集合同士は、並び方にかかわらず同じ基数（<InlineMath math="\aleph_0" /> など）を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={3}>
                    <p>
                        連続体仮説（CH, Proposition 8.4-1）の主張を、アレフ数 <InlineMath math="\aleph_1" /> および実数の濃度 <InlineMath math="2^{\aleph_0}" /> を用いて記せ。また、この仮説が ZFC 公理系においてどのような論理的状態にあるかを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>主張：</strong> 実数の濃度は、可算無限のすぐ次の基数に等しい： <BlockMath math="2^{\aleph_0} = \aleph_1" />
                        </p>
                        <p className="mt-4">
                            <strong>論理的状態：</strong><br />
                            連続体仮説は ZFC 公理系から<strong>独立</strong>している。すなわち、ZFCの公理からは、CHが「正しい」ことも「間違っている」ことも証明できないことが、ゲーデルとコーエンによって数学的に証明されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="8" number={4}>
                    <p>
                        順序数の足し算（超限算術）において、<InlineMath math="1 + \omega = \omega" /> であるのに対し、<InlineMath math="\omega + 1 \neq \omega" /> となる理由を、集合の並び（順序型）の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong><InlineMath math="1 + \omega = \omega" />：</strong><br />
                            無限に続く列の「先頭」に1つ要素を付け加えても、全体は「0番目、1番目、…」と最初から数え直すことができ、その順序構造は元の <InlineMath math="\omega" /> と全く変わらない。
                        </p>
                        <p className="mt-4">
                            <strong><InlineMath math="\omega + 1 \neq \omega" />：</strong><br />
                            無限に続く列をすべて並べ終わった「後ろ」に、新しく1つ要素（最大元）を置く。この最後の要素は、自分より前の要素を無限個持つが、その後に続く要素はない「末尾」という特殊な位置にあり、無限に続いて終わりがない <InlineMath math="\omega" /> とは明らかに異なる順序型を持つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={5}>
                    <p>
                        カントールの定理（Theorem 8.3-1）が主張する内容を、無限の階層という観点から説明せよ。また、最小の無限基数である <InlineMath math="\aleph_0" /> とそれに対応するべき集合の基数記号を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>主張：</strong> どんなに大きな無限集合を考えても、そのべき集合（部分集合全体の集合）を作ることで、それよりもさらに真に大きい濃度の集合を常に作ることができる。これにより、無限の大きさには上限が存在せず、無限に高い階層が続いていることが示される。
                        </p>
                        <p className="mt-4">
                            <strong>基数記号：</strong><br />
                            <InlineMath math="\aleph_0" /> （自然数の濃度）に対し、そのべき集合の濃度（実数の濃度）は <InlineMath math="2^{\aleph_0}" /> と表される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={6}>
                    <p>
                        アレフ数の一覧（<InlineMath math="\aleph_0, \aleph_1, \aleph_2, \ldots" />）の中で、「すべての無限基数がいずれかのアレフ数としてカタログ化される」ことを保証するために必要不可欠な、集合論上の定理（または公理）は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>必要な定理：</strong> 整列定理（または、それと同値な選択公理）
                        </p>
                        <p className="mt-2">
                            <strong>理由：</strong> 集合の濃度（基数）を、フォン・ノイマン順序数の中の最小のものとして対応づけるためには、対象の集合に「整列順序（1番目、2番目、…）」を入れられることが前提となる。ACがない世界では、どの順序数（アレフ数）とも全単射が作れない、アレフ数のカタログから外れた濃度が存在する可能性を否定できないためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={7}>
                    <p>
                        ポール・コーエンが連続体仮説の独立性を証明するために開発した「強制法（forcing, §8.4）」とはどのような手法か、その基本的なアイデアを簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            既存の集合論のモデル（世界）を太らせるために、新しい集合（実数など）を人為的に後付けで付け加える手法。
                        </p>
                        <p className="mt-2">
                            対象を一度に完成した形で作るのではなく、その対象が持つべき性質を「断片（条件）」として少しずつ追加（強制）していき、その極限として全体的な性質をコントロールした新しいモデルを合成する。これにより、実数のサイズが <InlineMath math="\aleph_2" /> 以上になるような、ZFCを満たす新しい世界を構築することに成功した。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="8" number={8}>
                    <p>
                        順序数の加法の定義（§8.1）に基づき、<InlineMath math="1 + \omega = \omega" /> であることを証明せよ。ただし、順序数の和 <InlineMath math="\alpha + \beta" /> の定義を「直和集合 <InlineMath math="(\{0\} \times \alpha) \cup (\{1\} \times \beta)" /> 上の辞書式順序の順序型」と考えてよい。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="1 + \omega" /> は、集合 <InlineMath math="X = \{a\} \cup \{n_0, n_1, n_2, \ldots\}" /> （ここで <InlineMath math="a < n_0 < n_1 < \ldots" />）の順序型である。
                        </p>
                        <p className="mt-2">
                            この集合 <InlineMath math="X" /> から <InlineMath math="\omega = \{0, 1, 2, \ldots\}" /> への次のような写像 <InlineMath math="f" /> を定義する。
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li><InlineMath math="f(a) = 0" /></li>
                                <li><InlineMath math="f(n_i) = i + 1 \quad (i = 0, 1, 2, \ldots)" /></li>
                            </ul>
                        </p>
                        <p className="mt-2">
                            この写像 <InlineMath math="f" /> は明らかに全単射である。また、<InlineMath math="x < y" /> ならば <InlineMath math="f(x) < f(y)" /> であることも容易に確認できる。
                            （<InlineMath math="a < n_i" /> のとき <InlineMath math="0 < i+1" /> であり、<InlineMath math="n_i < n_j" /> のとき <InlineMath math="i+1 < j+1" /> であるため）。
                        </p>
                        <p className="mt-2">
                            この写像は順序同型（order-isomorphism）であるから、両者の順序型は等しい。ゆえに
                            <BlockMath math="1 + \omega = \omega" />
                            が証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={9}>
                    <p>
                        超限帰納法（Theorem 8.2-1）を用いて、任意の順序数 <InlineMath math="\alpha" /> について <InlineMath math="\alpha < \omega_1" /> であること（<InlineMath math="\alpha" /> が可算であること）を証明しようとすると、どのような「障壁」に突き当たるか。最初の非可算順序数 <InlineMath math="\omega_1" /> の存在（Example 8.2-1）を根拠にして論じよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            超限帰納法の成立には、「自分より小さいすべての順序数で性質 <InlineMath math="P" /> が成り立つならば、自分でも成り立つ」というステップの証明が必要である。
                        </p>
                        <p className="mt-2">
                            性質 <InlineMath math="P(\alpha)" /> を「<InlineMath math="\alpha" /> は可算である」とする。
                            <InlineMath math="\alpha" /> が極限順序数のとき、それより小さいすべての <InlineMath math="\beta < \alpha" /> が可算であっても、その和集合である <InlineMath math="\alpha" /> 自身が可算になるとは限らない。
                        </p>
                        <p className="mt-2">
                            具体的には、すべての可算順序数を集めた集合（後継操作と可算な上限操作で閉じている最大の集まり）を <strong><InlineMath math="\omega_1" /></strong> と置くと、<InlineMath math="\omega_1" /> より小さい元（可算順序数）はすべて可算であるが、その境界である <InlineMath math="\omega_1" /> 自身は定義により全単射が作れない「最初の非可算」な存在となってしまう。
                        </p>
                        <p className="mt-2 text-justify">
                            したがって、帰納法のステップが <InlineMath math="\alpha = \omega_1" /> において崩壊するため、すべての順序数が可算であるという誤った結論は導かれず、順序数の世界が可算の壁を超えて無限に広がっていることが正しく示されるのである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="8" number={10}>
                    <p>
                        カントールの対角線論法（§8.3 の Proof）を参考にして、カントールの定理「任意の集合 <InlineMath math="A" /> について <InlineMath math="|A| < |\mathcal{P}(A)|" />」を、全射が存在しないことを背理法で示す手順によって厳密に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            集合 <InlineMath math="A" /> からそのべき集合 <InlineMath math="\mathcal{P}(A)" /> への全射 <InlineMath math="f: A \to \mathcal{P}(A)" /> が存在すると仮定し、矛盾を導く。
                        </p>
                        <p className="mt-2">
                            次のような <InlineMath math="A" /> の部分集合 <InlineMath math="D" /> を定義する。
                            <BlockMath math="D = \{a \in A \mid a \notin f(a)\}" />
                            <InlineMath math="D" /> は <InlineMath math="A" /> の部分集合であるから、べき集合の元である（<InlineMath math="D \in \mathcal{P}(A)" />）。
                        </p>
                        <p className="mt-2">
                            仮定より <InlineMath math="f" /> は全射であるから、この <InlineMath math="D" /> に写されるような <InlineMath math="A" /> の元 <InlineMath math="x" /> が存在する（すなわち <InlineMath math="f(x) = D" /> となる <InlineMath math="x \in A" /> が存在する）。
                        </p>
                        <p className="mt-2">
                            ここで、この元 <InlineMath math="x" /> が集合 <InlineMath math="D" /> の元であるかどうかによって二律背反が生じる：
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>もし <InlineMath math="x \in D" /> ならば、<InlineMath math="D" /> の定義条件により <InlineMath math="x \notin f(x)" /> であるが、<InlineMath math="f(x) = D" /> なので <InlineMath math="x \notin D" /> となり矛盾する。</li>
                            <li>もし <InlineMath math="x \notin D" /> ならば、<InlineMath math="x \notin f(x)" /> であることを意味する。これは <InlineMath math="D" /> の定義条件を完全に満たしているため、定義より <InlineMath math="x \in D" /> となり矛盾する。</li>
                        </ul>
                        <p className="mt-2">
                            どのような場合も矛盾が生じるため、全射 <InlineMath math="f" /> は存在し得ない。単射は存在し全射が不可能なことから、<InlineMath math="|A| < |\mathcal{P}(A)|" /> が証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
