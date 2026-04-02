import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_14_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        ZF公理系（Axiom 7.1-1）のうち、以下の2つの公理の内容を一階述語論理の形式で記せ。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>外延性公理（Extensionality）</li>
                        <li>べき集合公理（Power Set）</li>
                    </ol>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <strong>外延性公理：</strong><br />
                                <BlockMath math="\forall x\,\forall y\,(\forall z\,(z \in x \leftrightarrow z \in y) \to x = y)" />
                                （意味：全く同じ元を持つ集合は、同じ集合である）
                            </li>
                            <li>
                                <strong>べき集合公理：</strong><br />
                                <BlockMath math="\forall x\,\exists y\,\forall z\,(z \in y \leftrightarrow z \subseteq x)" />
                                （意味：任意の集合 <InlineMath math="x" /> に対し、その部分集合全体を集めた集合が存在する）
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        選択公理（Axiom 7.2-1, AC）の主張を簡潔に述べよ。また、ZF公理系のみでは（ACなしでは）「無限個の集合からの選択」が一般に保証されない理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>選択公理の主張：</strong><br />
                            空でない集合の族 <InlineMath math="\{A_\lambda\}_{\lambda \in \Lambda}" /> に対して、各集合から要素を1つずつ選ぶ関数（選択関数）が必ず存在する。
                        </p>
                        <p className="mt-4">
                            <strong>理由：</strong><br />
                            有限個の集合からの選択や、特定の「選び方のルール（論理式）」が記述できる場合の選択は、ZFの他の公理（分出公理や置換公理）を用いて選択関数の存在を証明できる。しかし、具体的な選び方のルールを言語で記述できないような無限族に対しては、ZFの一階述語論理の枠組みだけでは、その「選択の結果としての集合」が存在することを導き出せないためである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        バナッハ＝タルスキーのパラドックス（Theorem 7.3-1）およびヴィタリ集合（Example 7.3-1）の構成において、選択公理はどのような役割を果たしているか。また、その結果としてどのような「常識外れな性質」を持つ集合が現れるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>選択公理の役割：</strong><br />
                            空間を回転群などの作用によって同値類に分割した際、各同値類から代表元を1つずつ抽出するために選択公理が不可欠である。
                        </p>
                        <p className="mt-4">
                            <strong>常識外れな性質：</strong><br />
                            これらの操作によって作られた集合は、通常の体積や長さ（ルベーグ測度）を定義することができない「<strong>非可測集合</strong>」となる。このため、有限個に分割して組み直しただけで体積が2倍になる、といったパラドックスが論理的に可能になってしまう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        ZF集合論における「分出公理スキーマ（Z8）」が、素朴集合論における「無制限な包括原理」によるラッセルのパラドックスをどのように回避しているか、その仕組みを「宇宙（すべての集合の集まり）」という言葉を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            素朴集合論の包括原理は、任意の条件 <InlineMath math="\varphi(x)" /> について「それを満たすもの全体の集まり」を無条件に集合と認めていた。
                        </p>
                        <p className="mt-2">
                            これに対し、ZFの分出公理は「<strong>既に存在が保証されている集合 <InlineMath math="A" /></strong> の中から、条件を満たすものだけを切り出す」ことしか許さない。
                        </p>
                        <p className="mt-2">
                            ラッセルの矛盾した集合 <InlineMath math="R = \{x \mid x \notin x\}" /> を作ろうとしても、ZFでは「何らかの集合 <InlineMath math="V" /> の部分集合」としてしか定義できない。もし「すべての集合の集まり（宇宙 <InlineMath math="V" />）」が集合として存在しないのであれば、矛盾を引き起こすほど巨大な集まりを集合として構成できなくなり、パラドックスは単に「宇宙 <InlineMath math="V" /> は集合ではない（真クラスである）」という証明に置き換わる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ZF公理系の下で、選択公理と論理的に同値であることが知られている2つの重要な命題（定理）を挙げ、それぞれの主張を記せ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-4 mt-2">
                            <li>
                                <strong>ツォルンの補題：</strong><br />
                                帰納的順序集合（任意の全順序部分集合が上界を持つ半順序集合）は、少なくとも1つの極大元を持つ。
                            </li>
                            <li>
                                <strong>整列定理：</strong><br />
                                任意の集合上には、整列順序（空でない任意の部分集合が最小元を持つ全順序）を定義することができる。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        ZFにおける「正則性公理（Z7）」は、どのような構造の集合を排除するために導入されたか。具体的な例を1つ挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>目的：</strong> 集合の所属関係に無限の下降列や循環が存在することを禁止し、集合宇宙が空集合から段階的に積み上げられる整然とした階層構造（累積階層）をなすことを保証するため。
                        </p>
                        <p className="mt-4">
                            <strong>排除される例：</strong><br />
                            <InlineMath math="x = \{x\}" /> のように、自分自身を元として含む集合。あるいは <InlineMath math="x \in y \in x" /> のような循環構造。これらは正則性公理により、ZFの集合としては存在が認められない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        選択公理（および連続体仮説）が「ZFから独立している（Theorem 7.3-2）」とはどういう意味か。また、その独立性の証明に大きく貢献した2人の数学者とその手法の名称を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>独立の意味：</strong> ZF公理系を正しいと認めても、選択公理を正しいと証明することも、間違っている（否定が正しい）と証明することも不可能であるということ。
                        </p>
                        <p className="mt-4">
                            <strong>貢献した数学者と手法：</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>クルト・ゲーデル：</strong> 「構成可能集合の宇宙（<InlineMath math="L" />）」の手法により、ACがZFと矛盾しないことを示した。</li>
                            <li><strong>ポール・コーエン：</strong> 「強制法（forcing）」の手法により、ACの否定がZFと矛盾しないことを示した。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        ZF公理系（分出公理スキーマを仮定する）において、「すべての集合を元とする集合（宇宙）」が存在しないことを、ラッセルのパラドックスの手法を用いて厳密に証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            背理法により証明する。
                        </p>
                        <p className="mt-2">
                            仮に、すべての集合を元として含むような集合 <InlineMath math="V" /> が存在すると仮定する。すなわち、
                            <BlockMath math="\forall x\,(x \in V)" />
                            である。
                        </p>
                        <p className="mt-2">
                            この集合 <InlineMath math="V" /> に対して、分出公理（Z8）を適用し、論理式 <InlineMath math="\varphi(x) \equiv x \notin x" /> を満たす <InlineMath math="V" /> の部分集合 <InlineMath math="R" /> を構成する。
                            <BlockMath math="R = \{x \in V \mid x \notin x\}" />
                            分出公理により <InlineMath math="R" /> は集合である。また、<InlineMath math="V" /> はすべての集合を含むため、当然 <InlineMath math="R \in V" /> が成り立つ。
                        </p>
                        <p className="mt-2">
                            ここで、<InlineMath math="R \in R" /> かどうかを考える。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>もし <InlineMath math="R \in R" /> ならば、<InlineMath math="R" /> の定義条件により <InlineMath math="R \notin R" /> となり矛盾する。</li>
                            <li>もし <InlineMath math="R \notin R" /> ならば、<InlineMath math="R \in V" /> かつ定義条件を満たすため、<InlineMath math="R \in R" /> となり矛盾する。</li>
                        </ul>
                        <p className="mt-2">
                            いずれの場合も矛盾が生じるため、最初の仮定「すべての集合を含む集合 <InlineMath math="V" /> が存在する」が誤りであったことが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        ツォルンの補題（ZF + AC で成立）を用いて、「すべてのベクトル空間には基底が存在する」ことを証明する際、どのような順序集合を考え、その「上界」をどのように定義すればよいか。その証明の構成方針を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ベクトル空間 <InlineMath math="V" /> に対し、次のような順序集合 <InlineMath math="\mathcal{F}" /> を考える。
                        </p>
                        <p className="mt-2">
                            <strong>1. 順序集合の定義：</strong><br />
                            <InlineMath math="\mathcal{F}" /> を、<InlineMath math="V" /> の<strong>線形独立な</strong>部分集合全体の族とする。順序関係は集合の包含関係 <InlineMath math="\subseteq" /> で定める。
                        </p>
                        <p className="mt-2">
                            <strong>2. 上界の構成：</strong><br />
                            <InlineMath math="\mathcal{F}" /> の任意の鎖（全順序部分集合） <InlineMath math="\mathcal{C}" /> をとる。この鎖の和集合 <InlineMath math="U = \bigcup \mathcal{C}" /> が <InlineMath math="\mathcal{F}" /> の元である（線形独立である）ことを示す。<br />
                            線形独立性の定義は有限個の元の結合に関する性質であるため、<InlineMath math="U" /> から有限個の元を取れば、それらは鎖のいずれか一つの元に含まれる。よって <InlineMath math="U" /> は線形独立であり、<InlineMath math="\mathcal{F}" /> における上界となる。
                        </p>
                        <p className="mt-2">
                            <strong>3. 極大元の意味：</strong><br />
                            ツォルンの補題により、<InlineMath math="\mathcal{F}" /> には極大元 <InlineMath math="B" /> が存在する。
                            極大性の定義（これ以上元を増やせない）とベクトル空間の性質から、この <InlineMath math="B" /> は <InlineMath math="V" /> を生成する線形独立な集合、すなわち基底となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        選択公理（AC）を仮定して、実数集合の中にルベーグ非可測集合（ヴィタリ集合）が存在することを論理的に導くプロセスの概要を記せ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-3 mt-2">
                            <li>
                                <strong>同値関係の定義：</strong> 区間 <InlineMath math="[0, 1]" /> 上で、<InlineMath math="x - y" /> が有理数であるときに <InlineMath math="x \sim y" /> となる同値関係を定める。
                            </li>
                            <li>
                                <strong>選択公理の適用：</strong> この同値関係によって区間を同値類に分ける。<strong>選択公理を用いることで</strong>、各同値類から代表元をちょうど1つずつ選ぶ集合 <InlineMath math="V" /> （ヴィタリ集合）を構成する。
                            </li>
                            <li>
                                <strong>矛盾の導出：</strong> 有理数による平行移動の族 <InlineMath math="\{V + q \mid q \in \mathbb{Q} \cap [-1, 1]\}" /> を考えると、これらは互いに交わらず、その和集合の長さは 1 以上 3 以下になるはずである。
                            </li>
                            <li>
                                <strong>結論：</strong> もし <InlineMath math="V" /> が「長さ（測度）」を持つと仮定すると、可算加法性により、長さを 0 としても無限としても、上記の範囲（1〜3）に収まらず矛盾する。ゆえに <InlineMath math="V" /> は長さを定義できない非可測集合である。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
