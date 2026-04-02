import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        一階述語論理の完全性定理（Theorem 5.1-1）の主張を簡潔に述べよ。また、健全性定理（Proposition 4.3-1）との違いを「証明」と「真理」の言葉を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>完全性定理の主張：</strong><br />
                            任意の理論 <InlineMath math="T" /> と文 <InlineMath math="\varphi" /> について、<InlineMath math="\varphi" /> が <InlineMath math="T" /> の論理的帰結（意味論的に正しい）ならば、必ず <InlineMath math="\varphi" /> は <InlineMath math="T" /> から形式的に証明可能である（<InlineMath math="T \models \varphi \implies T \vdash \varphi" />）。
                        </p>
                        <p className="mt-4">
                            <strong>理論的な違い：</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>健全性：</strong> 「証明できるならば、それは常に正しい（真である）」ことを保証する。推論体系が嘘をつかないことを意味する。</li>
                            <li><strong>完全性：</strong> 「常に正しい（真である）ならば、それは必ず証明できる」ことを保証する。推論体系に不足がないことを意味する。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        ヘンキン構成（§5.2）において、理論の「証人性質（witness property）」および「ヘンキン定数」とは何か。その役割を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>ヘンキン定数：</strong> 存在を主張する各論理式 <InlineMath math="\exists x \varphi(x)" /> に対して新しく導入される、その個体を具体的に指し示すための「名前（定数記号）」のこと。
                        </p>
                        <p className="mt-2">
                            <strong>証人性質：</strong> 理論において、あらゆる存在主張 <InlineMath math="\exists x \varphi(x)" /> に対して、その存在を裏付ける特定の定数 <InlineMath math="c" /> が存在し、<InlineMath math="\exists x \varphi(x) \to \varphi(c)" /> が理論に含まれているという性質。
                        </p>
                        <p className="mt-2">
                            <strong>役割：</strong> 完全性を証明するために、無矛盾な理論からモデルを構築する際、存在が主張されている抽象的な対象を、具体的な「項（定数）」として世界の中に実体化させるために不可欠なステップである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        コンパクト性定理（Theorem 5.3-1）の主張を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>コンパクト性定理：</strong><br />
                            文の集合（理論） <InlineMath math="T" /> がモデルを持つ（充足可能である）ための必要十分条件は、その任意の<strong>有限</strong>部分集合 <InlineMath math="T_{\mathrm{fin}} \subset T" /> がモデルを持つことである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        コンパクト性定理を用いて、任意の無限に大きなモデルを持つ理論 <InlineMath math="T" /> は、非可算なほど巨大なモデルを持ちうることを説明せよ（上方レーベンハイム＝スコーレムの定理の概要）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、元の理論 <InlineMath math="T" /> に、非常に多くの（例えば非可算個の）新しい定数記号 <InlineMath math="\{c_\alpha\}_{\alpha \in \kappa}" /> を追加する。
                            そして、これらすべての定数が互いに異なることを主張する新しい公理の集合 <InlineMath math="I = \{c_\alpha \neq c_\beta \mid \alpha \neq \beta\}" /> を考える。
                        </p>
                        <p className="mt-2">
                            理論 <InlineMath math="T \cup I" /> の任意の有限部分集合を考える。そこには有限個の定数差の関係しか現れない。
                            <InlineMath math="T" /> は仮定より無限モデルを持つため、その無限モデルから必要な数だけ異なる要素を選んで定数の解釈に割り当てることで、この有限部分は常に充足可能である。
                        </p>
                        <p className="mt-2 text-justify">
                            コンパクト性定理より、理論全体 <InlineMath math="T \cup I" /> も充足可能（モデルを持つ）である。このモデルは非可算個（濃度 <InlineMath math="\kappa" />）の異なる元 <InlineMath math="c_\alpha" /> を含んでいるため、モデルの濃度は少なくとも <InlineMath math="\kappa" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        下方レーベンハイム＝スコーレムの定理（Theorem 5.4-1）に基づき、可算な言語による任意の無矛盾な理論が「可算なモデル」を持つ理由を、ヘンキン構成の観点から簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ヘンキン構成により構築されるモデルの対象領域は、理論の言語に含まれる「閉項（定数や関数の組み合わせによる記号列）」の同値類によって作られる。
                        </p>
                        <p className="mt-2">
                            言語が可算（記号が有限または可算無限個）であれば、それらを組み合わせて作れる有限長の文字列である項の全体も、高々可算無限個しか存在しない。
                        </p>
                        <p className="mt-2">
                            したがって、ヘンキン構成によって「無から創造」されたモデルの住民（要素）の数は、決して可算個を超えることはない。これが可算なモデルの存在を保証する直感的な理由である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        一階述語論理の言語では、「対象領域が有限集合であること」を主張する文の集合は作れるが、「対象領域が（特定の濃度以上の）無限集合であること」をピンポイントで強制することはできない（Example 5.4-2 参照）。
                    </p>
                    <p>
                        では、一階述語論理において、通常の自然数以外の「無限大の自然数」を含むモデル（非標準モデル）の存在を許してしまう理由を、論理性とモデルの関係から述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            一階述語論理の証明システムは、有限の長さの証明に基づいている。
                            ある性質が「すべての具体的（標準的）な自然数」で成り立つことを証明しようとしても、公理系に「無限に大きい数はない」という情報を完全に盛り込むことはできない。
                        </p>
                        <p className="mt-2">
                            コンパクト性定理により、どの有限個の「既存の数より大きい」という制約も満たせるなら、それらすべてを同時に満たす（＝あらゆる標準的な数より大きい）要素を含むモデルの存在を、論理的な無矛盾性の枠内では拒絶できないためである。
                            つまり、一階述語論理の「有限性」が、無限の構造を完全に特定しきる精度を欠いていることが原因である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        スコーレムのパラドックス（Example 5.4-1）において、「実数の集合は非可算である」という集合論の定理と「その集合論が可算なモデルを持つ」という事実が共存できるのはなぜか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「可算である（全単射が存在する）」という概念の<strong>相対性</strong>によるものである。
                        </p>
                        <p className="mt-2">
                            可算モデル <InlineMath math="\mathcal{M}" /> は、外部から見ればその要素を全て数え上げることができる（可算集合である）。
                            しかし、モデル <InlineMath math="\mathcal{M}" /> の内部には、自分の世界の実数集合 <InlineMath math="R" /> から自然数集合 <InlineMath math="N" /> への「全単射（関数）」が住民として存在していない。
                        </p>
                        <p className="mt-2">
                            モデルの内部の論理（ZFC）にとって「全単射が存在しない」ことは正しい。そのため、「<InlineMath math="R" /> は非可算である」という定理はモデル内でも常に成立している。
                            外から見た「真の計数」と、モデル内部で利用可能な「関数資源」の欠如というズレが、パラドックスの正体である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        コンパクト性定理を用いて、次のことを証明せよ。<br />
                        「理論 <InlineMath math="T" /> が、任意の自然数 <InlineMath math="n" /> に対して、『少なくとも <InlineMath math="n" /> 個の相異なる要素が存在する』ということを充足するモデルを持つならば、<InlineMath math="T" /> は無限モデルを持つ。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            新しい定数記号の無限集合 <InlineMath math="\mathcal{C} = \{c_1, c_2, c_3, \ldots\}" /> を用意し、理論 <InlineMath math="T'" /> を以下のように定める。
                            <BlockMath math="T' = T \cup \{c_i \neq c_j \mid i \neq j\}" />
                        </p>
                        <p className="mt-2">
                            <InlineMath math="T'" /> の任意の有限部分集合 <InlineMath math="T_{\mathrm{fin}}" /> を考える。
                            <InlineMath math="T_{\mathrm{fin}}" /> に含まれる新定数のペアの数は有限である。現れる定数のインデックスの最大値を <InlineMath math="k" /> とすると、<InlineMath math="T_{\mathrm{fin}}" /> が充足されるためには、少なくとも <InlineMath math="k" /> 個の相異なる要素があればよい。
                        </p>
                        <p className="mt-2">
                            問題の仮定より、<InlineMath math="T" /> は任意の大きさの有限モデルを持つため、大きさ <InlineMath math="k" /> 以上のモデルを選んでそれらの定数を解釈すれば、<InlineMath math="T_{\mathrm{fin}}" /> は必ず充足可能である。
                        </p>
                        <p className="mt-2">
                            コンパクト性定理（Theorem 5.3-1）により、<InlineMath math="T'" /> 全体も充足可能である。
                            このモデルは無限個の相異なる要素 <InlineMath math="\{c_i\}" /> を含んでいなければならないため、モデルの対象領域は必然的に無限集合となる。
                            したがって、<InlineMath math="T" /> の無限モデルの存在が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        ヘンキンモデル（Theorem 5.2-1）の構成において、対象領域を「閉項の同値類 <InlineMath math="M = \{ [t] \mid t \in \mathrm{Term}_0 \}" />」と定義し、述語の解釈を「<InlineMath math="[t] \in P^\mathcal{M} \iff P(t) \in \Delta" />」と定める。
                    </p>
                    <p>
                        このとき、この関係の定義が「ウェルデファインド（well-defined / 代表元の選び方に依らない）」であることを、極大無矛盾理論 <InlineMath math="\Delta" /> における等号の公理を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            項 <InlineMath math="t" /> と <InlineMath math="s" /> が同じ同値類に属すと仮定する（<InlineMath math="[t] = [s]" />）。同値関係の定義より、これは理論において <InlineMath math="t = s \in \Delta" /> であることを意味する。
                        </p>
                        <p className="mt-2">
                            このとき、<InlineMath math="[t] \in P^\mathcal{M} \iff [s] \in P^\mathcal{M}" />、すなわち
                            <BlockMath math="P(t) \in \Delta \iff P(s) \in \Delta" />
                            が成り立つことを示せばよい。
                        </p>
                        <p className="mt-2">
                            一階述語論理の等号公理（等号の代入律）より、任意の論理式 <InlineMath math="\varphi(x)" /> に対して <InlineMath math="t = s \to (\varphi(t) \to \varphi(s))" /> が証明可能である。
                            これを <InlineMath math="\varphi(x) \equiv P(x)" /> に適用すると、
                            <BlockMath math="\Delta \vdash (t = s \land P(t)) \to P(s)" />
                        </p>
                        <p className="mt-2">
                            いま <InlineMath math="t = s \in \Delta" /> であり、かつ仮に <InlineMath math="P(t) \in \Delta" /> であるとすると、<InlineMath math="\Delta" /> は理論として閉じている（証明可能な式をすべて含む）ため、モーダスポネンスにより <InlineMath math="P(s) \in \Delta" /> となる。
                            逆（<InlineMath math="P(s) \in \Delta \implies P(t) \in \Delta" />）も等号の対称律により同様に示される。
                        </p>
                        <p className="mt-2">
                            よって、項を代表元として関係を判定する操作は、どの項を選んでも結果が変わらず、ウェルデファインドであることが証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        コンパクト性定理を用いて、次の「強完全性（Strong Completeness）」の性質が成り立つことを、基本の完全性定理（無矛盾ならばモデルを持つ）から証明せよ。<br />
                        「理論 <InlineMath math="T" /> と文 <InlineMath math="\varphi" /> について、<InlineMath math="T \models \varphi" /> ならば、<InlineMath math="T" /> のある<strong>有限</strong>部分集合 <InlineMath math="T_{\mathrm{fin}}" /> が存在して <InlineMath math="T_{\mathrm{fin}} \models \varphi" /> となる。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="T \models \varphi" /> を仮定する。この定義より、理論 <InlineMath math="T \cup \{\neg\varphi\}" /> はモデルを持たない（充足不可能である）。
                        </p>
                        <p className="mt-2 text-justify">
                            コンパクト性定理（Theorem 5.3-1）の対偶「充足不可能ならば、ある有限部分集合も充足不可能である」を適用すると：
                            <BlockMath math="\text{ある有限部分集合 } S \subset (T \cup \{\neg\varphi\}) \text{ が充足不可能。}" />
                        </p>
                        <p className="mt-2">
                            この有限集合 <InlineMath math="S" /> を、<InlineMath math="T" /> に由来する部分 <InlineMath math="T_{\mathrm{fin}} = S \setminus \{\neg\varphi\}" /> と、高々一つ含まれる <InlineMath math="\neg\varphi" /> に分ける。
                            <InlineMath math="T_{\mathrm{fin}} \cup \{\neg\varphi\}" /> が充足不可能であるということは、定義により
                            <BlockMath math="T_{\mathrm{fin}} \models \varphi" />
                            を意味する。
                        </p>
                        <p className="mt-2">
                            ここで <InlineMath math="T_{\mathrm{fin}}" /> はもともとの <InlineMath math="T" /> の有限部分集合であるから、示したい内容が証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
