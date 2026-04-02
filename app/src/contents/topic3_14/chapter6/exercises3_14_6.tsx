import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        ペアノ算術（PA, Axiom 6.1-1）の言語 <InlineMath math="\mathcal{L}_{\mathrm{PA}}" /> に含まれる記号をすべて列挙せよ。また、公理に含まれる「数学的帰納法の公理スキーマ」の形式的な表現を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>記号の集合：</strong> <InlineMath math="\mathcal{L}_{\mathrm{PA}} = \{0, S, +, \cdot\}" />
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><InlineMath math="0" />： 定数記号</li>
                            <li><InlineMath math="S" />： 1引数関数記号（後継者）</li>
                            <li><InlineMath math="+," /> <InlineMath math="\cdot" />： 2引数関数記号</li>
                        </ul>
                        <p className="mt-4">
                            <strong>数学的帰納法の公理スキーマ：</strong><br />
                            任意の論理式 <InlineMath math="\varphi(x)" /> に対して：
                            <BlockMath math="(\varphi(0) \land \forall x\,(\varphi(x) \to \varphi(S(x)))) \to \forall x\,\varphi(x)" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        ゲーデル数化（Definition 6.2-1）とはどのような操作か、その目的とともに簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>操作：</strong> 論理記号、論理式、および証明の列といった「構文上の対象」に対して、一意な自然数を割り当てる符号化（エンコーディング）のこと。
                        </p>
                        <p className="mt-2">
                            <strong>目的：</strong> メタ論理的な記述（「式 A は式 B から導かれる」「体系 T は無矛盾である」等）を、自然数の間の算術的な関係として PA の内部で扱えるようにするため。これにより、算術の体系による「自己言及」が可能になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        ゲーデルの第一不完全性定理（Theorem 6.3-1）および第二不完全性定理（Theorem 6.4-1）の主張をそれぞれ記せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <strong>第一不完全性定理：</strong><br />
                                算術を含む無矛盾な公理系には、その体系内部では証明も反証もできない文（決定不能命題）が必ず存在する。
                            </li>
                            <li>
                                <strong>第二不完全性定理：</strong><br />
                                算術を含む無矛盾な公理系は、自分自身の無矛盾性を主張する文を、自身の内部で証明することはできない。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        PA の公理（加法の定義、および帰納法スキーマ）を用いて、次のことを証明せよ。
                    </p>
                    <BlockMath math="\mathrm{PA} \vdash \forall x\,(S(0) + x = S(x))" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\varphi(x) \equiv (S(0) + x = S(x))" /> について数学的帰納法を用いる。
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <strong>ベースケース <InlineMath math="\varphi(0)" />：</strong><br />
                                公理 3（<InlineMath math="x + 0 = x" />）により、<InlineMath math="S(0) + 0 = S(0)" /> である。
                                これは <InlineMath math="\varphi(0)" /> の形をしており、成立する。
                            </li>
                            <li>
                                <strong>帰納ステップ <InlineMath math="\varphi(x) \to \varphi(S(x))" />：</strong><br />
                                仮定 <InlineMath math="S(0) + x = S(x)" /> のもとで、左辺を計算する。<br />
                                公理 4（<InlineMath math="a + S(b) = S(a+b)" />）を適用すると、<br />
                                <InlineMath math="S(0) + S(x) = S(S(0) + x)" /> となる。<br />
                                ここで帰納法の仮定を代入すると、<br />
                                <InlineMath math="S(S(0) + x) = S(S(x))" /> となり、<InlineMath math="\varphi(S(x))" /> が示された。
                            </li>
                        </ol>
                        <p className="mt-2">
                            以上より、帰納法スキーマによってすべての <InlineMath math="x" /> について主張が成り立つ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        対角化補題（Lemma 6.2-1）は、「あらゆる性格 <InlineMath math="\varphi(x)" /> に対して、『私は <InlineMath math="\varphi" /> という性格を持っている』という自己言及的な文 <InlineMath math="\psi" /> が作れる」と主張している。
                    </p>
                    <p>
                        これを応用して、「私は証明可能である」ことを主張する文（ヘンキン文）を理論的に構成する方法を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            算術化された証明可能性を表す述語を <InlineMath math="\mathrm{Prov}(x) \equiv \exists y\,\mathrm{Proof}(y, x)" /> とする。
                        </p>
                        <p className="mt-2">
                            対角化補題において、この述語 <InlineMath math="\mathrm{Prov}(x)" /> を適用すると、次の関係を満たす文 <InlineMath math="H" /> が必ず存在する。
                            <BlockMath math="\mathrm{PA} \vdash H \leftrightarrow \mathrm{Prov}(\ulcorner H \urcorner)" />
                        </p>
                        <p className="mt-2">
                            この文 <InlineMath math="H" /> は、「自分のゲーデル数が証明可能述語を満たす」、すなわち「自分自身は証明可能である」という自己言及を行っていることになる。
                            （※なお、この文が実際に証明可能であるかどうかは「ローブの定理」によって肯定的に知られているが、本問の構成段階ではこの関係式の存在が重要である。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        第一不完全性定理の証明（§6.3）において、「ゲーデル文 <InlineMath math="G" /> が証明可能であれば、PA は矛盾する」ことを、<InlineMath math="G" /> の定義（<InlineMath math="G \leftrightarrow \neg \mathrm{Prov}(\ulcorner G \urcorner)" />）に基づいて簡潔に論じよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li>もし <InlineMath math="G" /> が証明可能なら、定義より実在の証明（自然数）が存在するため、<InlineMath math="\mathrm{Prov}(\ulcorner G \urcorner)" /> が PA で証明できる。</li>
                            <li>一方、<InlineMath math="G" /> は「自分は証明不可能である（<InlineMath math="\neg \mathrm{Prov}(\ulcorner G \urcorner)" />）」ことと同値な文であるため、<InlineMath math="G" /> が証明できるなら <InlineMath math="\neg \mathrm{Prov}(\ulcorner G \urcorner)" /> も証明できてしまう。</li>
                            <li>「肯定」と「否定」が同時に証明されてしまうため、PA は矛盾した体系となる。</li>
                        </ol>
                        <p className="mt-2">
                            PA が無矛盾であると仮定するならば、この矛盾した状況は避けねばならない。したがって <InlineMath math="G" /> は証明不可能でなければならない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        不完全性定理は、当時の数学界の大きな目標であった「ヒルベルト・プログラム」にどのような打撃を与えたか、第二定理の内容を踏まえて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヒルベルト・プログラムの目標は、「無限を扱う数学（集合論等）が矛盾を含まないことを、算術のような安全で確かな体系の力で証明する」ことにあった。
                        </p>
                        <p className="mt-2 text-justify">
                            しかし第二不完全性定理は、算術（PA）自身ですら、自分自身の無矛盾性を自身の内部（算術の力）で証明できないことを示した。
                            自身の無矛盾性を証明できない程度の力しかない算術が、より巨大な体系（集合論）の安全性を保証することは原理的に不可能である。
                            これにより、数学の安全性をその内部から一点の疑いもなく自己完結的に「完遂」させるという当初の夢は絶たれたのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        PA における加法の基本性質として、加法の右単位元が 0 であること（公理：<InlineMath math="x+0=x" />）に対し、左単位元も 0 であること、すなわち次の事実を PA の公理から厳密に証明せよ。
                    </p>
                    <BlockMath math="\mathrm{PA} \vdash \forall x\,(0 + x = x)" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\varphi(x) \equiv (0 + x = x)" /> について帰納法スキーマ（公理 7）を適用する。
                        </p>
                        <p className="mt-4">
                            <strong>1. ベースケース <InlineMath math="\varphi(0)" />：</strong><br />
                            公理 3 より、任意の <InlineMath math="a" /> について <InlineMath math="a + 0 = a" /> である。<br />
                            ここで <InlineMath math="a = 0" /> と置けば、<InlineMath math="0 + 0 = 0" /> を得る。よって <InlineMath math="\varphi(0)" /> は真である。
                        </p>
                        <p className="mt-4">
                            <strong>2. 帰納ステップ <InlineMath math="\varphi(x) \to \varphi(S(x))" />：</strong><br />
                            仮定 <InlineMath math="0 + x = x" /> を置く。<br />
                            <InlineMath math="\varphi(S(x))" /> の左辺は <InlineMath math="0 + S(x)" /> である。<br />
                            公理 4 (<InlineMath math="a + S(b) = S(a+b)" />) より、<InlineMath math="0 + S(x) = S(0 + x)" /> となる。<br />
                            ここで帰納法の仮定を用いると、<InlineMath math="S(0 + x) = S(x)" /> となる。<br />
                            したがって、<InlineMath math="0 + S(x) = S(x)" /> であり、<InlineMath math="\varphi(S(x))" /> が示された。
                        </p>
                        <p className="mt-4">
                            帰納法スキーマにより、すべての自然数 <InlineMath math="x" /> について主張が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        第一不完全性定理の証明において、ゲーデル文 <InlineMath math="G" /> の<strong>反証不可能性</strong>（<InlineMath math="\mathrm{PA} \nvdash \neg G" />）を示す論理的な流れを、PA の「健全性（標準モデルにおいて真なことしか証明できない性質）」を仮定した簡略化された形で厳密に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            PA は健全、すなわち PA で証明可能な文は自然数の標準モデル <InlineMath math="\mathbb{N}" /> において真であると仮定する。このとき、矛盾を導くことで反証不能性を示す。
                        </p>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <strong>仮定：</strong> <InlineMath math="\neg G" /> が PA で証明可能であるとする（<InlineMath math="\mathrm{PA} \vdash \neg G" />）。
                            </li>
                            <li>
                                <strong>健全性による帰結：</strong> 健全性の仮定より、<InlineMath math="\neg G" /> は標準モデル <InlineMath math="\mathbb{N}" /> において真実でなければならない。
                            </li>
                            <li>
                                <strong>定義の書き換え：</strong> <InlineMath math="G \leftrightarrow \neg \mathrm{Prov}(\ulcorner G \urcorner)" /> であるから、その否定は <InlineMath math="\neg G \leftrightarrow \mathrm{Prov}(\ulcorner G \urcorner)" /> である。
                                つまり、標準モデルにおいて <InlineMath math="\mathrm{Prov}(\ulcorner G \urcorner)" /> が真であることになる。
                            </li>
                            <li>
                                <strong>意味論的な主張：</strong> <InlineMath math="\mathrm{Prov}(\ulcorner G \urcorner)" /> が真実であるとは、「実際に、ある自然数 <InlineMath math="k" /> が存在して、それが <InlineMath math="G" /> の証明になっている」ことを意味する。
                            </li>
                            <li>
                                <strong>矛盾の導出：</strong> 実際に証明が存在するならば、第一定理の最初のパート（証明不可能性の証明）で示した通り、PA は矛盾していることになる。あるいは、健全性により、<InlineMath math="G" /> の証明が存在するなら <InlineMath math="G" /> も真でなければならないが、最初に <InlineMath math="\neg G" /> が真であると結論したことと矛盾する。
                            </li>
                        </ol>
                        <p className="mt-4">
                            いかなる場合も矛盾に至るため、仮定 <InlineMath math="\mathrm{PA} \vdash \neg G" /> は誤りであり、反証不可能（PA からは否定も導けない）であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        第二不完全性定理の証明の核心となる、次の含意関係の構文論的妥当性について論じよ。<br />
                        「<InlineMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA}) \to G" /> であるとき、<InlineMath math="\mathrm{PA} \nvdash \mathrm{Con}(\mathrm{PA})" /> が成り立つ。ただし PA は無矛盾（<InlineMath math="\mathrm{PA} \nvdash \bot" />）とする。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            論理的な間接証明法（背理法）を用いて示す。
                        </p>
                        <p className="mt-2">
                            <strong>1. 仮定：</strong> 体系が自分の無矛盾性を証明できる、すなわち <InlineMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA})" /> であると仮定する。
                        </p>
                        <p className="mt-2">
                            <strong>2. モーダスポネンスの適用：</strong> 問題で与えられた含意式 <InlineMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA}) \to G" /> が成り立っているとする。<br />
                            すると、仮定 1 とこの含意式から、MP（推論規則）により、PA 内部でゲーデル文が証明可能になる：
                            <BlockMath math="\mathrm{PA} \vdash G" />
                        </p>
                        <p className="mt-2">
                            <strong>3. 第一不完全性定理との衝突：</strong> 第一不完全性定理により、「PA が無矛盾（<InlineMath math="\mathrm{PA} \nvdash \bot" />）であれば、ゲーデル文は証明不可能（<InlineMath math="\mathrm{PA} \nvdash G" />）である」ことがすでに厳密に証明されている。
                        </p>
                        <p className="mt-2">
                            <strong>4. 結論：</strong> <InlineMath math="G" /> が証明されるというステップ 2 の結論は、第一定理（ステップ 3）に真っ向から矛盾する。
                            したがって、前提とした「無矛盾性を証明できる」という仮定 1 が誤りであったと言わざるを得ない。
                            ゆえに、無矛盾な体系は自身の無矛盾性を証明できない（<InlineMath math="\mathrm{PA} \nvdash \mathrm{Con}(\mathrm{PA})" />）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
