import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        順序体の言語 <InlineMath math="\mathcal{L}_{\mathrm{ord}} = \{0, 1, +, \cdot, <\}" /> のもとで、以下の記号列が Definition 2.1-2 における「項」であるか、Definition 2.2-1 における「論理式」であるか、あるいは「どちらでもない」か答えよ。
                        なお、<InlineMath math="x, y" /> は変数記号とする。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li><InlineMath math="x < y" /></li>
                        <li><InlineMath math="(x + 1) \cdot y" /></li>
                        <li><InlineMath math="0 +" /></li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>論理式</strong>である。<InlineMath math="<" /> は2引数述語記号であり、項 <InlineMath math="x" /> と <InlineMath math="y" /> に適用されているため、原子論理式となる。</li>
                            <li><strong>項</strong>である。<InlineMath math="x, 1, y" /> はすべて項であり、定数記号と変数を2引数関数記号 <InlineMath math="+" /> および <InlineMath math="\cdot" /> で結合して構成された「（数などの）個体」を表す表現であるため。</li>
                            <li><strong>どちらでもない</strong>。<InlineMath math="+" /> は2引数関数記号であるが、引数が一つしか与えられておらず、帰納的定義の規則から生成できない無意味な記号列となっている。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        以下の論理式 <InlineMath math="\varphi" /> において、変数記号 <InlineMath math="x, y, z" /> はそれぞれ自由変数であるか束縛変数であるか、Definition 2.3-1 に従って答えよ。
                    </p>
                    <BlockMath math="\varphi \equiv (P(x) \land \forall y\,(Q(x, y) \to R(z)))" />
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><InlineMath math="x" /> ： <strong>自由変数</strong>である。<InlineMath math="P(x)" /> および <InlineMath math="Q(x, y)" /> に現れる <InlineMath math="x" /> はどちらも量化子（<InlineMath math="\forall x" /> や <InlineMath math="\exists x" />）のスコープに含まれていないため自由出現である。</li>
                            <li><InlineMath math="y" /> ： <strong>束縛変数</strong>である。<InlineMath math="Q(x, y)" /> の中の <InlineMath math="y" /> の出現は、直前の量化子 <InlineMath math="\forall y" /> のスコープ内にあるため束縛出現である。式全体にわたり自由出現を持たない。</li>
                            <li><InlineMath math="z" /> ： <strong>自由変数</strong>である。<InlineMath math="R(z)" /> に現れる <InlineMath math="z" /> は量化子のスコープ外にあるため自由出現である。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        以下の2つの論理式について、Definition 2.4-1 に基づく「文」であるかを判定し、その理由を述べよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li><InlineMath math="\forall x\,(x = x)" /></li>
                        <li><InlineMath math="\forall x\,(x < y)" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            文（sentence）とは「自由変数を一つも持たない論理式」のことである。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><strong>文である。</strong> 変数 <InlineMath math="x" /> は <InlineMath math="\forall x" /> によって束縛されており、自由変数が存在しない。</li>
                            <li><strong>文ではない。</strong> 変数 <InlineMath math="y" /> は量化子に束縛されておらず自由変数のままであり、「文」の条件を満たさない。（代入される <InlineMath math="y" /> の値によって真偽が変わる式である）</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        量化子の順序（Example 2.2-2）による意味論の違いについて考察する。
                        整数全体の集合 <InlineMath math="\mathbb{Z}" /> を想定し、変数 <InlineMath math="x, y" /> は整数を表すとする。
                        このとき、以下の2つの文の真偽をそれぞれ判定し、その理由を述べよ。
                    </p>
                    <div className="pl-4 mt-2">
                        <p>(1) <InlineMath math="\forall x\,\exists y\,(x + y = 0)" /></p>
                        <p>(2) <InlineMath math="\exists y\,\forall x\,(x + y = 0)" /></p>
                    </div>
                    <ExerciseSolution>
                        <p className="mt-2">
                            <strong>(1) 真である。</strong><br />
                            「任意の整数 <InlineMath math="x" /> に対して、和が <InlineMath math="0" /> となるような整数 <InlineMath math="y" /> が存在する」という意味である。
                            <InlineMath math="x" /> が与えられたとき、それに依存して <InlineMath math="y = -x" /> （これも整数）を選べばよいので、常に条件を満たすことができる。
                        </p>
                        <p className="mt-4">
                            <strong>(2) 偽である。</strong><br />
                            「ある固定された整数 <InlineMath math="y" /> が存在して、すべての整数 <InlineMath math="x" /> に対して <InlineMath math="x + y = 0" /> となる」という意味である。
                            つまり <InlineMath math="\mathbb{Z}" /> 全体で共通の逆元が存在するという主張だが、例えば <InlineMath math="y = 5" /> と固定した場合、<InlineMath math="x = 1" /> に対しては <InlineMath math="1 + 5 \neq 0" /> となり成立しない。あらゆる <InlineMath math="x" /> について和を <InlineMath math="0" /> にできる単一の <InlineMath math="y" /> は存在しないため偽である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        Proposition 2.3-1 を参考に、論理式 <InlineMath math="\varphi \equiv \exists y\,(x \neq y)" /> を考える。
                        この式の自由変数 <InlineMath math="x" /> に対して、項 <InlineMath math="t = y" /> を代入する操作を <InlineMath math="\varphi[y/x]" /> と表す。
                    </p>
                    <p>
                        この代入によって式の形がどのように変わるか記し、なぜこの代入が「自由な代入」ではないのか、また、代入によって式の意味がどう変質してしまうかを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            代入の結果は以下のようになる。
                            <BlockMath math="\varphi[y/x] \equiv \exists y\,(y \neq y)" />
                        </p>
                        <p className="mt-2">
                            <strong>自由ではない理由：</strong><br />
                            Definition 2.3-2 より、項 <InlineMath math="t = y" /> を <InlineMath math="x" /> に代入した結果、<InlineMath math="t" /> に含まれる変数 <InlineMath math="y" /> が外側の量化子 <InlineMath math="\exists y" /> のスコープに新たに捕捉（束縛）されてしまったため、この代入は自由（安全）ではない。
                        </p>
                        <p className="mt-2">
                            <strong>意味の変質：</strong><br />
                            元の論理式 <InlineMath math="\varphi" /> は、「<InlineMath math="x" /> とは異なるものが存在する」という（複数の個体が存在する世界では自然に真となる）主張であった。
                            しかし代入後の式 <InlineMath math="\exists y\,(y \neq y)" /> は、「自分自身と異なるものが存在する」という論理的に自己矛盾した、常に偽となる不条理な主張に変わってしまった。これが、変数の衝突による意味論の破壊である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        Example 2.4-2 を踏まえ、群論の理論 <InlineMath math="T_{\mathrm{Grp}}" /> に、以下の公理文（可換性）を追加して新しい理論 <InlineMath math="T_{\mathrm{Abel}}" /> を定義したとする。
                    </p>
                    <BlockMath math="\forall x\,\forall y\,(x \cdot y = y \cdot x)" />
                    <p>
                        この理論 <InlineMath math="T_{\mathrm{Abel}}" /> は無矛盾（<InlineMath math="T_{\mathrm{Abel}} \nvdash \bot" />）であるか否か。理由とともに答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>無矛盾である。</strong>
                        </p>
                        <p className="mt-2">
                            Definition 2.4-3 の直後の説明にあるように、ある理論が無矛盾であることは「その理論の公理をすべて満たすような数学的構造（モデル）が存在すること」に等しい。
                        </p>
                        <p className="mt-2">
                            理論 <InlineMath math="T_{\mathrm{Abel}}" /> は群の公理と可換性の公理（アーベル群の公理）からなる。
                            例えば、整数全体 <InlineMath math="\mathbb{Z}" /> と通常の足し算 <InlineMath math="+" /> からなる構造を考えると、これは群の公理を満たしており、かつ足し算の順序を入れ替えても結果は等しい（<InlineMath math="x + y = y + x" />）ため、追加された可換性の公理も満たしている。
                            このように、すべての公理を満たすモデル（アーベル群）が実在するため、この公理系から形式的推論によって矛盾が導き出されることはあり得ない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        論理式の構成において、括弧の位置は量化子のスコープを決定づける重要な役割を果たす。
                        以下の2つの論理式について、それぞれ自由変数をすべて列挙し、意味論的な解釈の違いを説明せよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li><InlineMath math="\exists x\,P(x) \land Q(x)" /></li>
                        <li><InlineMath math="\exists x\,(P(x) \land Q(x))" /></li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            <strong>1. <InlineMath math="\exists x\,P(x) \land Q(x)" /></strong><br />
                            これは <InlineMath math="(\exists x\,P(x))" /> と <InlineMath math="Q(x)" /> が連言 <InlineMath math="\land" /> で結ばれた論理式である。
                            存在量化子 <InlineMath math="\exists x" /> のスコープは直後の <InlineMath math="P(x)" /> までしか及ばない。
                            したがって、<InlineMath math="Q(x)" /> の中の <InlineMath math="x" /> は束縛されておらず、<strong>自由変数は <InlineMath math="x" /></strong> である。
                            意味は「『<InlineMath math="P" /> を満たす何かが存在する』ということと、『（特定の個体として与えられた）<InlineMath math="x" /> が <InlineMath math="Q" /> を満たす』ということが同時に成り立つ」となる。
                        </p>
                        <p className="mt-4">
                            <strong>2. <InlineMath math="\exists x\,(P(x) \land Q(x))" /></strong><br />
                            括弧によって、論理式 <InlineMath math="P(x) \land Q(x)" /> 全体が <InlineMath math="\exists x" /> のスコープに含まれている。
                            したがって、式中のすべての <InlineMath math="x" /> は束縛されており、<strong>自由変数は存在しない</strong>（この式は「文」である）。
                            意味は「『<InlineMath math="P" /> を満たし、かつ <InlineMath math="Q" /> を満たすような個体』が存在する」となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        形式手続ではなく、あるモデルと付値における真理値の定義（意味論）に基づいて証明を行う。
                        任意の1引数述語 <InlineMath math="P(x)" /> に対して、以下の論理式が常に真（トートロジー）となることを証明せよ。
                        ただし、考察の対象となる個体の集合（領域）は空集合ではないものとする。
                    </p>
                    <BlockMath math="\models (\forall x\,P(x)) \to (\exists x\,P(x))" />
                    <ExerciseSolution>
                        <p>
                            任意の領域（モデル）と付値を固定し、これが常に真となることを示す。<br />
                            含意についての真理値の定義より、前件である <InlineMath math="\forall x\,P(x)" /> が「真」であると仮定したとき、後件である <InlineMath math="\exists x\,P(x)" /> も「真」となることを示せばよい（前件が偽の場合は含意は自動的に真となるため）。
                        </p>
                        <p className="mt-2">
                            前件の <InlineMath math="\forall x\,P(x)" /> が真であると仮定する。定義によれば、これは領域内の<strong>すべての</strong>個体 <InlineMath math="c" /> について <InlineMath math="P(c)" /> が真であることを意味する。
                        </p>
                        <p className="mt-2">
                            いま、問題の仮定により領域は空集合ではないため、領域内に何らかの個体 <InlineMath math="a" /> が少なくとも1つ存在する。<br />
                            すべての個体について <InlineMath math="P" /> が真であるという先の事実から、当然この特定の個体 <InlineMath math="a" /> についても <InlineMath math="P(a)" /> は真である。
                        </p>
                        <p className="mt-2">
                            <InlineMath math="P(a)" /> が真となるような個体 <InlineMath math="a" /> が領域内に存在するため、存在量化子の定義より <InlineMath math="\exists x\,P(x)" /> は真である。
                        </p>
                        <p className="mt-2">
                            前件が真ならば必ず後件も真となるため、この含意式はどのような領域・付値においても真となり、トートロジーであることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        量化子に関する重要な法則の一つである、「全称量化子は連言に対して分配的である」という事実を、真理値に基づく意味論によって厳密に証明せよ。
                        すなわち、任意の述語 <InlineMath math="P(x), Q(x)" /> に対して、以下の双条件式がトートロジーであることを示せ。
                    </p>
                    <BlockMath math="\models \forall x\,(P(x) \land Q(x)) \leftrightarrow (\forall x\,P(x) \land \forall x\,Q(x))" />
                    <ExerciseSolution>
                        <p>
                            任意の領域において、左辺から右辺、右辺から左辺の両方の含意が成り立つことを示す。
                        </p>
                        <p className="mt-2">
                            <strong>1. 「左辺 <InlineMath math="\implies" /> 右辺」の証明：</strong><br />
                            左辺 <InlineMath math="\forall x\,(P(x) \land Q(x))" /> が真であると仮定する。<br />
                            全称量化子の定義より、領域の<strong>任意の</strong>個体 <InlineMath math="c" /> に対して <InlineMath math="P(c) \land Q(c)" /> が真である。<br />
                            連言の定義から、その個体 <InlineMath math="c" /> について <InlineMath math="P(c)" /> が真であり、かつ <InlineMath math="Q(c)" /> も真である。<br />
                            これがすべての <InlineMath math="c" /> について言えるのだから、「すべての個体について <InlineMath math="P(x)" /> が真」であり、かつ「すべての個体について <InlineMath math="Q(x)" /> が真」である。
                            すなわち、<InlineMath math="\forall x\,P(x)" /> と <InlineMath math="\forall x\,Q(x)" /> はともに真である。<br />
                            したがって、その両方の連言である右辺 <InlineMath math="(\forall x\,P(x) \land \forall x\,Q(x))" /> は真である。
                        </p>
                        <p className="mt-4">
                            <strong>2. 「右辺 <InlineMath math="\implies" /> 左辺」の証明：</strong><br />
                            右辺 <InlineMath math="(\forall x\,P(x) \land \forall x\,Q(x))" /> が真であると仮定する。<br />
                            連言の定義より、<InlineMath math="\forall x\,P(x)" /> は真であり、かつ <InlineMath math="\forall x\,Q(x)" /> は真である。<br />
                            領域の任意の個体 <InlineMath math="c" /> を一つ固定する。<InlineMath math="\forall x\,P(x)" /> が真なので <InlineMath math="P(c)" /> は真であり、<InlineMath math="\forall x\,Q(x)" /> が真なので <InlineMath math="Q(c)" /> も真である。<br />
                            したがって、個体 <InlineMath math="c" /> において連言 <InlineMath math="P(c) \land Q(c)" /> が真となる。<br />
                            ここで <InlineMath math="c" /> は任意に選ばれた個体であるから、すべての個体について <InlineMath math="P(x) \land Q(x)" /> が成り立つ。
                            すなわち、左辺 <InlineMath math="\forall x\,(P(x) \land Q(x))" /> は真である。
                        </p>
                        <p className="mt-4">
                            両方向の含意が常に真となるため、この双条件式はトートロジーである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        量化子のド・モルガンの法則の一部である、以下の論理的同値関係を意味論に基づいて証明せよ。
                    </p>
                    <BlockMath math="\neg(\exists x\,P(x)) \equiv \forall x\,(\neg P(x))" />
                    <ExerciseSolution>
                        <p>
                            論理的同値 <InlineMath math="\equiv" /> の定義（Definition 1.2-2 に相当）は、任意の領域と付値のもとで両辺の真理値が常に一致することである。これを示す。
                        </p>
                        <p className="mt-2">
                            <strong>1. 左辺が真 <InlineMath math="\implies" /> 右辺が真：</strong><br />
                            左辺 <InlineMath math="\neg(\exists x\,P(x))" /> が真であると仮定する。<br />
                            これは「『<InlineMath math="P(x)" /> が真となるような要素 <InlineMath math="x" /> が少なくとも1つ存在する』という命題が<strong>偽</strong>である」ことを意味する。<br />
                            もし、存在を肯定するような要素が一人でもいればその命題は真になってしまうため、それが偽であるということは、「領域の<strong>いかなる</strong>要素 <InlineMath math="c" /> を取ってきても、<InlineMath math="P(c)" /> は決して真にならない」ということである。<br />
                            すなわち、任意の要素 <InlineMath math="c" /> について <InlineMath math="P(c)" /> は偽であり、換言すれば <InlineMath math="\neg P(c)" /> が真となる。<br />
                            任意の要素で <InlineMath math="\neg P" /> が真であるため、全称量化の定義より、右辺 <InlineMath math="\forall x\,(\neg P(x))" /> は真である。
                        </p>
                        <p className="mt-4">
                            <strong>2. 右辺が真 <InlineMath math="\implies" /> 左辺が真：</strong><br />
                            右辺 <InlineMath math="\forall x\,(\neg P(x))" /> が真であると仮定する。<br />
                            全称量化の定義より、領域の任意の要素 <InlineMath math="c" /> について <InlineMath math="\neg P(c)" /> が真、すなわち <InlineMath math="P(c)" /> は偽である。<br />
                            いかなる要素も <InlineMath math="P(c)" /> を真にしないため、「<InlineMath math="P(x)" /> を満たす <InlineMath math="x" /> が存在する」という主張である <InlineMath math="\exists x\,P(x)" /> は偽となる。<br />
                            全体が偽であるため、その否定である左辺 <InlineMath math="\neg(\exists x\,P(x))" /> は真となる。
                        </p>
                        <p className="mt-4">
                            以上より、いかなる場合でも両辺の真理値は完全に一致し、論理的同値であることが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
