import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        整数係数多項式環 <InlineMath math="R = \mathbb{Z}[x]" /> において、以下の部分集合 <InlineMath math="I" /> が <InlineMath math="R" /> のイデアルであることを定義に従って示せ。
                    </p>
                    <BlockMath math="I = \{ f(x) \in \mathbb{Z}[x] \mid f(0) \text{ は偶数} \}" />
                    <ExerciseSolution>
                        <p>
                            イデアルの2つの条件（Definition 2.1-1）を確認する。
                        </p>
                        <p className="mt-4">
                            <b>1. 加法部分群であること：</b><br />
                            <InlineMath math="f, g \in I" /> とすると、<InlineMath math="f(0), g(0)" /> はともに偶数である。
                            このとき <InlineMath math="(f-g)(0) = f(0) - g(0)" /> も偶数同士の差なので偶数である。よって <InlineMath math="f-g \in I" />。
                        </p>
                        <p className="mt-4">
                            <b>2. 吸収律を満たすこと：</b><br />
                            任意の <InlineMath math="r(x) \in \mathbb{Z}[x]" /> と <InlineMath math="f(x) \in I" /> をとる。
                            積の定義より <InlineMath math="(rf)(0) = r(0)f(0)" /> である。
                            <InlineMath math="f(0)" /> は偶数なので、整数 <InlineMath math="r(0)" /> を掛けても <InlineMath math="r(0)f(0)" /> は偶数である。
                            よって <InlineMath math="rf \in I" /> が成り立つ。
                        </p>
                        <p>
                            以上より、<InlineMath math="I" /> は <InlineMath math="\mathbb{Z}[x]" /> のイデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、イデアル <InlineMath math="I = (4)" /> と <InlineMath math="J = (10)" /> を考える。イデアルの演算（Definition 2.2-2）に基づき、以下のイデアルを主イデアルの形で求めよ。
                        <br />(1) <InlineMath math="I + J" />
                        <br />(2) <InlineMath math="I \cap J" />
                        <br />(3) <InlineMath math="IJ" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 2.2-2 での性質を利用する。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>(1) <b>和 <InlineMath math="I + J" /></b>：<InlineMath math="(4) + (10) = (\gcd(4, 10)) = (2)" />。</li>
                            <li>(2) <b>共通部分 <InlineMath math="I \cap J" /></b>：<InlineMath math="(4) \cap (10) = (\mathrm{lcm}(4, 10)) = (20)" />。</li>
                            <li>(3) <b>積 <InlineMath math="IJ" /></b>：<InlineMath math="(4)(10) = (4 \cdot 10) = (40)" />。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        環 <InlineMath math="R" /> とそのイデアル <InlineMath math="I" /> に対して、剰余環 <InlineMath math="R/I" /> の演算が well-defined であることを Proposition 2.3-1 の証明を参考に、加法の場合について示せ。
                        すなわち、<InlineMath math="a_1 + I = a_2 + I" /> かつ <InlineMath math="b_1 + I = b_2 + I" /> ならば <InlineMath math="(a_1 + b_1) + I = (a_2 + b_2) + I" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            仮定より <InlineMath math="a_1 - a_2 \in I" /> かつ <InlineMath math="b_1 - b_2 \in I" /> である。
                            加法の結果の差を計算すると、
                        </p>
                        <BlockMath math="(a_1 + b_1) - (a_2 + b_2) = (a_1 - a_2) + (b_1 - b_2)" />
                        <p>
                            となる。<InlineMath math="I" /> は加法について部分群であるため、<InlineMath math="I" /> の元同士の和も <InlineMath math="I" /> に属する。
                            したがって <InlineMath math="(a_1 + b_1) - (a_2 + b_2) \in I" />。
                        </p>
                        <p>
                            剰余類の定義（Definition 2.3-1）より、これは <InlineMath math="(a_1 + b_1) + I = (a_2 + b_2) + I" /> であることを意味する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        環 <InlineMath math="R" /> の 2 つのイデアル <InlineMath math="I, J" /> に対して、その共通部分 <InlineMath math="I \cap J" /> も <InlineMath math="R" /> のイデアルであることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 の条件を確認する。
                        </p>
                        <p className="mt-4">
                            <b>1. 加法部分群であること：</b><br />
                            <InlineMath math="x, y \in I \cap J" /> とすると、<InlineMath math="x, y \in I" /> かつ <InlineMath math="x, y \in J" /> である。
                            <InlineMath math="I, J" /> はイデアルなので加法について閉じているため、<InlineMath math="x-y \in I" /> かつ <InlineMath math="x-y \in J" />。
                            よって <InlineMath math="x-y \in I \cap J" /> となり、加法部分群となる。
                        </p>
                        <p className="mt-4">
                            <b>2. 吸収律を満たすこと：</b><br />
                            任意の <InlineMath math="r \in R" /> と <InlineMath math="x \in I \cap J" /> をとる。
                            <InlineMath math="x \in I" /> かつ <InlineMath math="x \in J" /> である。<InlineMath math="I, J" /> はイデアルなので吸収律より、
                            <InlineMath math="rx \in I" /> かつ <InlineMath math="rx \in J" />。
                            よって <InlineMath math="rx \in I \cap J" />。
                        </p>
                        <p>
                            以上より、共通部分 <InlineMath math="I \cap J" /> はイデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        可換環 <InlineMath math="R" /> のイデアル <InlineMath math="I, J" /> について、常に <InlineMath math="IJ \subset I \cap J" /> が成り立つことを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            イデアル積 <InlineMath math="IJ" /> は、有限和 <InlineMath math="\sum a_k b_k" />（<InlineMath math="a_k \in I, b_k \in J" />）の元からなる。
                        </p>
                        <p>
                            任意の元 <InlineMath math="a \in I, b \in J" /> について、イデアルの吸収律（Definition 2.1-1）を考えると：
                        </p>
                        <ul className="list-disc list-inside ml-4">
                            <li><InlineMath math="a \in I, b \in R" /> なので <InlineMath math="ab \in I" /></li>
                            <li><InlineMath math="a \in R, b \in J" /> なので <InlineMath math="ab \in J" /></li>
                        </ul>
                        <p>
                            したがって <InlineMath math="ab \in I \cap J" /> である。
                            イデアル <InlineMath math="I \cap J" /> は加法について閉じているため、これらの有限和 <InlineMath math="\sum a_k b_k" /> も <InlineMath math="I \cap J" /> に属する。
                        </p>
                        <p>
                            よって <InlineMath math="IJ \subset I \cap J" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        有理数係数多項式環 <InlineMath math="\mathbb{Q}[x]" /> から <InlineMath math="\mathbb{Q}" /> への準同型写像（代入準同型）<InlineMath math="\phi: \mathbb{Q}[x] \to \mathbb{Q}" /> を <InlineMath math="\phi(f(x)) = f(1)" /> で定める。
                        第一同型定理（Theorem 2.4-1）を用いて、同型 <InlineMath math="\mathbb{Q}[x]/(x-1) \cong \mathbb{Q}" /> を示せ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>像（Image）：</b> 任意の <InlineMath math="q \in \mathbb{Q}" /> に対して、定数多項式 <InlineMath math="f(x) = q" /> を選べば <InlineMath math="\phi(f) = q" /> となる。よって <InlineMath math="\mathrm{Im}(\phi) = \mathbb{Q}" /> である。
                            </li>
                            <li>
                                <b>核（Kernel）：</b> <InlineMath math="\ker \phi = \{ f(x) \in \mathbb{Q}[x] \mid f(1) = 0 \}" /> である。
                                イン数定理より、有理係数多項式 <InlineMath math="f(x)" /> が <InlineMath math="f(1) = 0" /> を満たすことと、<InlineMath math="f(x)" /> が <InlineMath math="x-1" /> で割り切れることは同値である。
                                したがって <InlineMath math="\ker \phi = (x-1)" /> である。
                            </li>
                        </ul>
                        <p className="mt-2">
                            第一同型定理 <InlineMath math="R/\ker \phi \cong \mathrm{Im}(\phi)" /> を適用すると、
                            <BlockMath math="\mathbb{Q}[x]/(x-1) \cong \mathbb{Q}" />
                            が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        第三同型定理（Theorem 2.5-2）を用いて、剰余環 <InlineMath math="(\mathbb{Z}/12\mathbb{Z}) / (\bar{4})" /> がどのような既知の環と同型か答えよ（ただし <InlineMath math="(\bar{4})" /> は <InlineMath math="\bar{4}" /> で生成される <InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> のイデアル）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="R = \mathbb{Z}" />、<InlineMath math="I = (12)" />、<InlineMath math="J = (4)" /> とおくと、明らかに <InlineMath math="I \subset J" /> である。
                        </p>
                        <p>
                            第三同型定理 <InlineMath math="(R/I) / (J/I) \cong R/J" /> を適用すると、
                        </p>
                        <BlockMath math="(\mathbb{Z}/(12)) / ((4)/(12)) \cong \mathbb{Z}/(4)" />
                        <p>
                            ここで、左辺の分母 <InlineMath math="(4)/(12)" /> は、<InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> において <InlineMath math="4" /> によって生成されるイデアル <InlineMath math="(\bar{4})" /> に相当する。
                        </p>
                        <p>
                            よって、求める環は <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> と同型である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        <InlineMath math="\phi: R \to S" /> を環の全射準同型とする。<InlineMath math="I" /> が <InlineMath math="R" /> のイデアルであれば、その像 <InlineMath math="\phi(I)" /> は <InlineMath math="S" /> のイデアルであることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            比較：部分環の像が部分環になることは明らかだが、イデアルの像がイデアルになるには写像の「全射性」が重要になる。
                        </p>
                        <p className="mt-4">
                            <b>1. 加法部分群であること：</b><br />
                            <InlineMath math="y_1, y_2 \in \phi(I)" /> とすると、ある <InlineMath math="x_1, x_2 \in I" /> が存在して <InlineMath math="y_1 = \phi(x_1), y_2 = \phi(x_2)" />。
                            <InlineMath math="y_1 - y_2 = \phi(x_1) - \phi(x_2) = \phi(x_1 - x_2)" />。
                            <InlineMath math="I" /> はイデアルなので <InlineMath math="x_1 - x_2 \in I" />。よって <InlineMath math="y_1 - y_2 \in \phi(I)" />。
                        </p>
                        <p className="mt-4">
                            <b>2. 吸収律を満たすこと：</b><br />
                            任意の <InlineMath math="s \in S" /> と <InlineMath math="y \in \phi(I)" /> をとる。
                            <InlineMath math="\phi" /> は<b>全射</b>なので、<InlineMath math="\phi(r) = s" /> となる <InlineMath math="r \in R" /> が存在する。
                            また <InlineMath math="y = \phi(x)" />（<InlineMath math="x \in I" />）とする。
                            このとき <InlineMath math="sy = \phi(r)\phi(x) = \phi(rx)" />。
                            イデアルの吸収律（<InlineMath math="I" /> における性質）より <InlineMath math="rx \in I" /> なので、<InlineMath math="sy \in \phi(I)" /> である。
                        </p>
                        <p>
                            よって <InlineMath math="\phi(I)" /> は <InlineMath math="S" /> のイデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        中国剰余定理（Theorem 2.6-2）の系として、「<InlineMath math="3" /> で割って <InlineMath math="2" /> 余り、<InlineMath math="5" /> で割って <InlineMath math="3" /> 余る」ような整数 <InlineMath math="n" /> は <InlineMath math="15" /> を法として一意であることを示し、具体的にその値を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            整数環 <InlineMath math="\mathbb{Z}" /> とその互いに素なイデアル <InlineMath math="I = (3), J = (5)" /> を考える（<InlineMath math="(3) + (5) = (1)" />）。
                            中国剰余定理より、
                            <BlockMath math="\mathbb{Z}/(15) \cong \mathbb{Z}/(3) \times \mathbb{Z}/(5)" />
                            であり、写像 <InlineMath math="\phi(x) = (x \pmod 3, x \pmod 5)" /> は全単射である。
                            条件 <InlineMath math="(x \pmod 3, x \pmod 5) = (2, 3)" /> を満たす <InlineMath math="x \in \{0, \dots, 14\}" /> を探す。
                        </p>
                        <p>
                            (1) <InlineMath math="x \equiv 3 \pmod 5" /> より、<InlineMath math="x \in \{3, 8, 13\}" />。
                            <br />(2) この中で <InlineMath math="x \equiv 8 = 3 \cdot 2 + 2" /> より、<InlineMath math="8 \equiv 2 \pmod 3" /> を満たすのは <InlineMath math="x = 8" /> である。
                        </p>
                        <p>
                            よって、<InlineMath math="x \equiv 8 \pmod{15}" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        可換環 <InlineMath math="R" /> のイデアル <InlineMath math="I, J" /> が互いに素（<InlineMath math="I + J = R" />）であるとき、それらの自乗イデアルも互いに素（<InlineMath math="I^2 + J^2 = R" />）であることを示せ。（ヒント：二項定理のような展開を考えよ）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="I + J = R" /> より、単位元 <InlineMath math="1" /> が <InlineMath math="1 = a + b" /> （<InlineMath math="a \in I, b \in J" />）と書ける。
                        </p>
                        <p>
                            この両辺を 3 乗すると、
                        </p>
                        <BlockMath math="1^3 = (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
                        <p>
                            項を整理すると：
                        </p>
                        <BlockMath math="1 = a^2(a + 3b) + b^2(3a + b)" />
                        <p>
                            イデアルの性質より：
                        </p>
                        <ul className="list-disc list-inside ml-4">
                            <li><InlineMath math="a^2 \in I^2" /> であり <InlineMath math="a+3b \in R" /> なので、<InlineMath math="a^2(a+3b) \in I^2" /> である。</li>
                            <li><InlineMath math="b^2 \in J^2" /> であり <InlineMath math="3a+b \in R" /> なので、<InlineMath math="b^2(3a+b) \in J^2" /> である。</li>
                        </ul>
                        <p>
                            よって <InlineMath math="1" /> はイデアルの和 <InlineMath math="I^2 + J^2" /> の元である。
                            単位元を含むイデアルは環全体に一致するため（Proposition 2.1-1）、
                            <InlineMath math="I^2 + J^2 = R" />
                            が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
