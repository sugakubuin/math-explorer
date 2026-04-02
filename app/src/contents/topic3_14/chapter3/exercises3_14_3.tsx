import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        言語 <InlineMath math="\mathcal{L} = \{c, f, P\}" /> （<InlineMath math="c" /> は定数、<InlineMath math="f" /> は1引数関数、<InlineMath math="P" /> は1引数述語）の構造 <InlineMath math="\mathcal{M}" /> を以下のように定める。
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>対象領域 <InlineMath math="M = \{1, 2, 3\}" /></li>
                        <li><InlineMath math="c^\mathcal{M} = 1" /></li>
                        <li><InlineMath math="f^\mathcal{M}(1)=2, f^\mathcal{M}(2)=3, f^\mathcal{M}(3)=1" /></li>
                        <li><InlineMath math="P^\mathcal{M} = \{2, 3\}" /></li>
                    </ul>
                    <p className="mt-2">
                        このとき、項 <InlineMath math="t \equiv f(f(c))" /> の解釈 <InlineMath math="t^\mathcal{M}" /> を計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-2 に基づき、内側から順に計算する。
                        </p>
                        <ol className="list-decimal list-inside mt-2 space-y-2">
                            <li><InlineMath math="c^\mathcal{M} = 1" /></li>
                            <li><InlineMath math="f(c)^\mathcal{M} = f^\mathcal{M}(c^\mathcal{M}) = f^\mathcal{M}(1) = 2" /></li>
                            <li><InlineMath math="f(f(c))^\mathcal{M} = f^\mathcal{M}(f(c)^\mathcal{M}) = f^\mathcal{M}(2) = 3" /></li>
                        </ol>
                        <p className="mt-2">
                            したがって、<InlineMath math="t^\mathcal{M} = 3" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        前問（問題 3.1）と同じ構造 <InlineMath math="\mathcal{M}" /> において、付値 <InlineMath math="\sigma(x) = 2" /> とするとき、論理式 <InlineMath math="\varphi \equiv P(f(x))" /> が充足されるか（<InlineMath math="\mathcal{M}, \sigma \models \varphi" /> か）判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            充足関係の定義（Definition 3.2-1）に従い計算する。
                        </p>
                        <ol className="list-decimal list-inside mt-2 space-y-2">
                            <li>項 <InlineMath math="f(x)" /> の解釈を求める。<InlineMath math="f(x)^{\mathcal{M},\sigma} = f^\mathcal{M}(\sigma(x)) = f^\mathcal{M}(2) = 3" />。</li>
                            <li>述語 <InlineMath math="P" /> の解釈を確認する。<InlineMath math="P^\mathcal{M} = \{2, 3\}" />。</li>
                            <li><InlineMath math="3 \in P^\mathcal{M}" /> であるため、<InlineMath math="\mathcal{M}, \sigma \models P(f(x))" /> は<strong>真（充足される）</strong>。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        「文 <InlineMath math="\varphi" /> が充足可能（satisfiable）である」ことの定義を簡潔に述べよ。また、文 <InlineMath math="\exists x\,(x \neq x)" /> が充足可能ではない理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>定義：</strong><br />
                            文 <InlineMath math="\varphi" /> を真にする（<InlineMath math="\mathcal{M} \models \varphi" /> となる）ような構造 <InlineMath math="\mathcal{M}" /> が少なくとも1つ存在するとき、<InlineMath math="\varphi" /> は充足可能であるという。
                        </p>
                        <p className="mt-4">
                            <strong>充足可能でない理由：</strong><br />
                            等号 <InlineMath math="=" /> は、いかなる構造においても対象領域の元としての「厳密な一致」として解釈される。したがって、どのような元 <InlineMath math="a" /> に対しても <InlineMath math="a = a" /> は常に真であり、<InlineMath math="a \neq a" /> は常に偽となる。
                            このため、<InlineMath math="\exists x\,(x \neq x)" /> を真にするような構造（および付値）は存在し得ない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        対象領域を整数全体 <InlineMath math="\mathbb{Z}" /> とし、<InlineMath math="<" /> を通常の大小関係とする構造 <InlineMath math="\mathcal{M} = (\mathbb{Z}, <)" /> を考える。
                        この構造において、次の文が真であるか偽であるか理由とともに答えよ。
                    </p>
                    <BlockMath math="\forall x\,\exists y\,(y < x \land \exists z\,(z < y))" />
                    <ExerciseSolution>
                        <p>
                            <strong>結論： 真（True）</strong>
                        </p>
                        <p className="mt-2">
                            この文は「任意の整数 <InlineMath math="x" /> に対して、それより小さな整数 <InlineMath math="y" /> が存在し、さらにその <InlineMath math="y" /> より小さな整数 <InlineMath math="z" /> も存在する」という意味である。
                        </p>
                        <p className="mt-2">
                            実際、任意の <InlineMath math="x" /> に対して <InlineMath math="y = x - 1" /> を選べば <InlineMath math="y < x" /> となり、さらにその <InlineMath math="y" /> に対して <InlineMath math="z = y - 1 = x - 2" /> を選べれば <InlineMath math="z < y" /> となる。
                            整数全体の集合には最小元が存在せず、無限に小さな値をとり得るため、どのような <InlineMath math="x" /> に対してもこのような <InlineMath math="y, z" /> を（例えば <InlineMath math="x-1, x-2" /> として）常に見つけることができる。よって真である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        文 <InlineMath math="\varphi \equiv \exists x\,\exists y\,(x \neq y)" /> を考える。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>この文が真となる構造の例を一つ挙げよ。</li>
                        <li>この文が偽となる構造の例を一つ挙げよ。</li>
                        <li>この文は「妥当式（valid formula）」か。</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <strong>真となる構造：</strong> 対象領域に少なくとも2つの異なる要素を含む構造。
                                例えば、<InlineMath math="M = \{0, 1\}" /> かつ他の記号の解釈は任意とする構造。
                            </li>
                            <li>
                                <strong>偽となる構造：</strong> 対象領域に要素が1つしか存在しない構造。
                                例えば、<InlineMath math="M = \{0\}" /> とする構造。このとき、どのような変数への割り当てを選んでも <InlineMath math="x" /> と <InlineMath math="y" /> は同じ元 <InlineMath math="0" /> を指すため、<InlineMath math="x \neq y" /> は常に偽となる。
                            </li>
                            <li>
                                <strong>結論： 妥当式ではない。</strong>
                                妥当式であるためには「すべての」構造において真でなければならないが、(2)のように偽となる構造（反例。要素が1つの世界）が存在するため、妥当式ではない（充足可能ではある）。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        公理系 <InlineMath math="T = \{\forall x\,\forall y\,(x = y)\}" /> （すべての要素は等しい）と、結論 <InlineMath math="\varphi \equiv \forall x\,\forall y\,\forall z\,(x = y \land y = z)" /> を考える。
                        このとき、<InlineMath math="T \models \varphi" /> が成り立つか判定し、理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>結論： 成り立つ（<InlineMath math="T \models \varphi" /> は真）</strong>
                        </p>
                        <p className="mt-2">
                            論理的帰結の定義（Definition 3.3-2）に基づき検討する。<InlineMath math="T" /> を満たすすべての構造 <InlineMath math="\mathcal{M}" /> において <InlineMath math="\varphi" /> が真になるかを考える。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="\mathcal{M} \models T" /> とすると、対象領域 <InlineMath math="M" /> の任意の2つの元は常に等しい。つまり、この構造の対象領域はただ一つの要素からなる集合（または空集合だが構造の定義により空でない）である。
                        </p>
                        <p className="mt-2">
                            このとき、任意の 3つの元 <InlineMath math="a, b, c \in M" /> を取ってきても、領域には要素が1つしかないため必ず <InlineMath math="a=b" /> かつ <InlineMath math="b=c" /> が成り立つ。
                            したがって、<InlineMath math="\varphi" /> もこの構造において必ず真となる。
                            すべてのモデルにおいて仮定が真なら結論も真であるため、論理的帰結である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        一般に、論理式 <InlineMath math="\forall x\,P(x) \land \forall x\,Q(x)" /> と <InlineMath math="\forall x\,(P(x) \land Q(x))" /> は論理的同値であるが、
                        <InlineMath math="\exists x\,P(x) \land \exists x\,Q(x)" /> と <InlineMath math="\exists x\,(P(x) \land Q(x))" /> は同値ではない。
                    </p>
                    <p>
                        後者が同値ではないことを示すために、前者が真で後者が偽となるような反例モデルを具体的に構成せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対象領域を <InlineMath math="M = \{0, 1\}" /> とする構造 <InlineMath math="\mathcal{M}" /> を以下のように定義する。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><InlineMath math="P^\mathcal{M} = \{0\}" /></li>
                            <li><InlineMath math="Q^\mathcal{M} = \{1\}" /></li>
                        </ul>
                        <p className="mt-2">
                            このとき：
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><InlineMath math="\exists x\,P(x)" /> は真（<InlineMath math="x=0" /> が存在する）であり、<InlineMath math="\exists x\,Q(x)" /> も真（<InlineMath math="x=1" /> が存在する）である。したがって、それらの連言である左辺は<strong>真</strong>である。</li>
                            <li>一方、右辺 <InlineMath math="\exists x\,(P(x) \land Q(x))" /> が真となるには、<InlineMath math="P" /> と <InlineMath math="Q" /> の両方に属する共通の要素が必要だが、<InlineMath math="P^\mathcal{M} \cap Q^\mathcal{M} = \emptyset" /> であるため、そのような要素は存在しない。したがって右辺は<strong>偽</strong>である。</li>
                        </ul>
                        <p className="mt-2">
                            一方の真偽が異なるモデルが存在するため、これらは論理的同値ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        意味論（タルスキの定義）に基づき、以下の論理式が妥当式（valid formula）であることを証明せよ。
                    </p>
                    <BlockMath math="\models \forall x\,\forall y\,Q(x, y) \to \forall y\,\forall x\,Q(x, y)" />
                    <ExerciseSolution>
                        <p>
                            任意の構造 <InlineMath math="\mathcal{M} = (M, \ldots)" /> および任意の付値 <InlineMath math="\sigma" /> を固定する。
                            前件 <InlineMath math="\mathcal{M}, \sigma \models \forall x\,\forall y\,Q(x, y)" /> が真であると仮定し、このとき後件も真となることを示す。
                        </p>
                        <p className="mt-2">
                            前件の充足条件（Definition 3.2-1）より、任意の <InlineMath math="a \in M" /> および任意の <InlineMath math="b \in M" /> に対して、
                            <BlockMath math="\mathcal{M}, \sigma[x \mapsto a, y \mapsto b] \models Q(x, y)" />
                            が成り立つ。これはすなわち、領域の任意の元のペア <InlineMath math="(a, b) \in M^2" /> が関係 <InlineMath math="Q^\mathcal{M}" /> に属していることを意味する。
                        </p>
                        <p className="mt-2">
                            さて、後件 <InlineMath math="\forall y\,\forall x\,Q(x, y)" /> が充足されるための条件を考えると、それは任意の <InlineMath math="b' \in M" /> および任意の <InlineMath math="a' \in M" /> に対して、
                            <BlockMath math="\mathcal{M}, \sigma[y \mapsto b', x \mapsto a'] \models Q(x, y)" />
                            が成り立つことである。
                        </p>
                        <p className="mt-2">
                            仮定より、領域の<strong>あらゆる</strong>ペアに対して関係が成り立っているため、当然順序を入れ替えた任意のペア <InlineMath math="(a', b')" /> に対しても <InlineMath math="Q^\mathcal{M}" /> は成立している。
                            したがって後件も必ず充足される。
                        </p>
                        <p className="mt-2">
                            いかなる構造・付値においても前件が真なら後件も真となるため、この含意式は妥当式である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        公理系 <InlineMath math="T = \{\forall x\,\exists y\,P(x, y)\}" /> と結論 <InlineMath math="\varphi \equiv \exists y\,\forall x\,P(x, y)" /> について、
                        <InlineMath math="T \not\models \varphi" /> であることを、反例モデルを具体的に構成することによって厳密に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            論理的帰結ではないことを示すには、<InlineMath math="T" /> を満たすが <InlineMath math="\varphi" /> を満たさない構造を一つ提示すればよい。
                        </p>
                        <p className="mt-2">
                            構造 <InlineMath math="\mathcal{M}" /> を次のように定義する。
                        </p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>対象領域 <InlineMath math="M = \{0, 1\}" /> （2つの要素からなる集合）</li>
                            <li>関係 <InlineMath math="P^\mathcal{M} = \{(0, 0), (1, 1)\}" /> （すなわち等号関係 <InlineMath math="x=y" /> と解釈する）</li>
                        </ul>
                        <p className="mt-2">
                            <strong>1. <InlineMath math="\mathcal{M} \models T" /> であることの確認：</strong><br />
                            任意の <InlineMath math="x \in M" /> に対して、それと関係を持つ <InlineMath math="y" /> が存在すればよい。
                            <InlineMath math="x=0" /> のときは <InlineMath math="y=0" />、<InlineMath math="x=1" /> のときは <InlineMath math="y=1" /> と選べば、いずれも <InlineMath math="(x, y) \in P^\mathcal{M}" /> を満たす。
                            よって <InlineMath math="\forall x \exists y P(x, y)" /> は真である。
                        </p>
                        <p className="mt-2">
                            <strong>2. <InlineMath math="\mathcal{M} \not\models \varphi" /> であることの確認：</strong><br />
                            <InlineMath math="\exists y \forall x P(x, y)" /> が真となるには、すべての <InlineMath math="x" /> に対して共通して関係を持つような、単一の「万能な」 <InlineMath math="y" /> が存在しなければならない。
                            <InlineMath math="y=0" /> とすると、<InlineMath math="x=1" /> のときに <InlineMath math="(1, 0) \notin P^\mathcal{M}" /> となり失敗する。
                            <InlineMath math="y=1" /> とすると、<InlineMath math="x=0" /> のときに <InlineMath math="(0, 1) \notin P^\mathcal{M}" /> となり失敗する。
                            候補となるすべての <InlineMath math="y" /> について条件を満たさないため、この文は偽である。
                        </p>
                        <p className="mt-2">
                            以上より、仮定を真にしかつ結論を偽にする構造が存在したため、<InlineMath math="T \not\models \varphi" /> が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        等号原子式の充足の定義（Definition 3.2-1）および代入の定義（Definition 2.3-2）に基づき、以下の事実を証明せよ。<br />
                        「構造 <InlineMath math="\mathcal{M}" />、付値 <InlineMath math="\sigma" />、および項 <InlineMath math="t" /> について、<InlineMath math="a = t^{\mathcal{M},\sigma}" /> であるとする。
                        このとき、任意の論理式 <InlineMath math="\varphi(x)" /> に対して
                        <InlineMath math="\mathcal{M}, \sigma[x \mapsto a] \models \varphi(x) \iff \mathcal{M}, \sigma \models \varphi(t)" />
                        が成り立つ。
                        ただし、<InlineMath math="t" /> は <InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して自由であるとする。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            この事実は「代入補題（Substitution Lemma）」として知られており、論理式の構成に関する帰納法で証明される。ここでは原子論理式のケースについて詳細を示す。
                        </p>
                        <p className="mt-2">
                            <strong>原子論理式のケース：</strong> <InlineMath math="\varphi(x) \equiv P(x)" /> とする。
                        </p>
                        <ol className="list-decimal list-inside mt-2 space-y-2">
                            <li>
                                左辺 <InlineMath math="\mathcal{M}, \sigma[x \mapsto a] \models P(x)" /> が成り立つ条件は、
                                <InlineMath math="x^{\mathcal{M}, \sigma[x \mapsto a]} \in P^\mathcal{M}" /> である。
                                変数の解釈の定義より、これは <InlineMath math="\sigma[x \mapsto a](x) = a \in P^\mathcal{M}" /> と書き換えられる。
                            </li>
                            <li>
                                右辺 <InlineMath math="\mathcal{M}, \sigma \models P(t)" /> が成り立つ条件は、
                                <InlineMath math="t^{\mathcal{M}, \sigma} \in P^\mathcal{M}" /> である。
                            </li>
                        </ol>
                        <p className="mt-2">
                            問題の仮定により <InlineMath math="a = t^{\mathcal{M},\sigma}" /> であるから、<InlineMath math="a \in P^\mathcal{M}" /> と <InlineMath math="t^{\mathcal{M}, \sigma} \in P^\mathcal{M}" /> は全く同一の条件を述べている。
                            したがって、原子論理式について同値性が成り立つ。
                        </p>
                        <p className="mt-2">
                            論理結合子のケース（<InlineMath math="\neg, \land" /> など）は帰納法の仮定から直ちに示される。
                            量子化子のケース（<InlineMath math="\forall y" /> など）については、代入の自由性条件により、<InlineMath math="x \neq y" /> かつ <InlineMath math="y" /> が項 <InlineMath math="t" /> に現れないことが保証されるため、付値の変更操作と代入操作が可換となり、同様に証明が完結する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
