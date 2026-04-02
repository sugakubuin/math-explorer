import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        偶数全体の集合 <InlineMath math="2\mathbb{Z} = \{2n \mid n \in \mathbb{Z}\}" /> は、通常の加法と乗法によって加法群、乗法半群、分配法則の条件を満たす。しかし、本コースの定義（§1.1 備考）において、<InlineMath math="2\mathbb{Z}" /> は環とはみなされない。その理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            本コースでは、断りのない限り「環」といえば「単位元付き環」を指すこととしている（§1.1 備考）。
                        </p>
                        <p>
                            集合 <InlineMath math="2\mathbb{Z}" /> において、乗法の単位元は通常の数としての <InlineMath math="1" /> であるが、<InlineMath math="1" /> は偶数ではないため <InlineMath math="1 \notin 2\mathbb{Z}" /> である。
                        </p>
                        <p>
                            したがって、<InlineMath math="2\mathbb{Z}" /> には乗法の単位元が存在しないため、本コースの定義における「環」にはあたらない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        剰余環 <InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> における零因子をすべて列挙せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、<InlineMath math="\bar{a} \in \mathbb{Z}/12\mathbb{Z}" /> が零因子であるとは、<InlineMath math="\bar{a} \neq \bar{0}" /> かつ、ある <InlineMath math="\bar{b} \neq \bar{0}" /> が存在して <InlineMath math="\bar{a}\bar{b} = \bar{0}" /> となることである。
                        </p>
                        <p>
                            これは、<InlineMath math="ab" /> が <InlineMath math="12" /> の倍数となるような <InlineMath math="b \in \{1, 2, \ldots, 11\}" /> が存在することと同値であり、整数論の性質から <InlineMath math="\gcd(a, 12) > 1" /> かつ <InlineMath math="\bar{a} \neq \bar{0}" /> である元を抽出することに相当する。
                        </p>
                        <p>
                            したがって、<InlineMath math="12" /> と共通の素因数（2 または 3）を持つ <InlineMath math="\bar{0}" /> 以外の元を列挙すると、
                        </p>
                        <BlockMath math="\bar{2}, \bar{3}, \bar{4}, \bar{6}, \bar{8}, \bar{9}, \bar{10}" />
                        <p>
                            が零因子である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        剰余環 <InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> における可逆元（単元）をすべて列挙せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 1.4-1 より、剰余環 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> において <InlineMath math="\bar{a}" /> が可逆であるための必要十分条件は <InlineMath math="\gcd(a, n) = 1" /> であることである。
                        </p>
                        <p>
                            <InlineMath math="n = 12" /> の場合、<InlineMath math="12" /> と互いに素な <InlineMath math="1" /> 以上 <InlineMath math="11" /> 以下の整数 <InlineMath math="a" /> を探すと、
                        </p>
                        <BlockMath math="1, 5, 7, 11" />
                        <p>
                            が得られる。よって、可逆元の集合（単数群）は以下の通りである：
                        </p>
                        <BlockMath math="(\mathbb{Z}/12\mathbb{Z})^\times = \{\bar{1}, \bar{5}, \bar{7}, \bar{11}\}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        環 <InlineMath math="R" /> の任意の元 <InlineMath math="a, b" /> に対して、以下が成り立つことを環の公理（Definition 1.1-1）および零元の性質（Proposition 1.1-1）を用いて証明せよ。
                    </p>
                    <BlockMath math="-(ab) = a(-b)" />
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="a(-b)" /> が <InlineMath math="ab" /> の加法逆元であることを示せばよい。環の分配法則（Definition 1.1-1）を用いると、
                        </p>
                        <BlockMath math="ab + a(-b) = a(b + (-b))" />
                        <p>
                            加法逆元の定義より <InlineMath math="b + (-b) = 0" /> なので、
                        </p>
                        <BlockMath math="a(b + (-b)) = a \cdot 0" />
                        <p>
                            Proposition 1.1-1 (1) より、零元を掛けると必ず零元になる（<InlineMath math="a \cdot 0 = 0" />）ことが示されているので、
                        </p>
                        <BlockMath math="ab + a(-b) = 0" />
                        <p>
                            が得られる。加法群における逆元の一意性より、<InlineMath math="a(-b)" /> は <InlineMath math="ab" /> の加法逆元 <InlineMath math="-(ab)" /> に等しい。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        2つの環 <InlineMath math="R, S" /> の直積環 <InlineMath math="R \times S" />（Definition 1.2-1）を考える。このとき、元 <InlineMath math="(r, s) \in R \times S" /> が可逆であるための必要十分条件は、<InlineMath math="r \in R^\times" /> かつ <InlineMath math="s \in S^\times" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            直積環の乗法の定義および単位元が <InlineMath math="1 = (1_R, 1_S)" /> であることに基づいて証明する。
                        </p>
                        <p className="mt-4">
                            <b>(⟹) の証明：</b><br />
                            <InlineMath math="(r, s)" /> が可逆であるとすると、ある <InlineMath math="(r', s') \in R \times S" /> が存在して、
                            <InlineMath math="(r, s)(r', s') = (1_R, 1_S)" /> かつ <InlineMath math="(r', s')(r, s) = (1_R, 1_S)" />
                            を満たす。直積環の演算定義より、これは
                            <InlineMath math="(rr', ss') = (1_R, 1_S)" /> かつ <InlineMath math="(r'r, s's) = (1_R, 1_S)" />
                            と同値である。成分ごとに見れば、<InlineMath math="rr' = r'r = 1_R" /> かつ <InlineMath math="ss' = s's = 1_S" /> であるから、<InlineMath math="r \in R^\times" /> かつ <InlineMath math="s \in S^\times" /> である。
                        </p>
                        <p className="mt-4">
                            <b>(⟸) の証明：</b><br />
                            <InlineMath math="r \in R^\times" /> かつ <InlineMath math="s \in S^\times" /> であるとすると、それぞれの環に逆元 <InlineMath math="r^{-1}, s^{-1}" /> が存在する。
                            ここで、<InlineMath math="(r^{-1}, s^{-1}) \in R \times S" /> を考えると、
                            <BlockMath math="(r, s)(r^{-1}, s^{-1}) = (rr^{-1}, ss^{-1}) = (1_R, 1_S)" />
                            逆の順序も同様に <InlineMath math="(1_R, 1_S)" /> となる。よって <InlineMath math="(r, s)" /> は可逆である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        <InlineMath math="D" /> を整域とする。ある正の整数 <InlineMath math="n" /> に対して <InlineMath math="a^n = 0" /> が成り立つならば、<InlineMath math="a = 0" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            整域の定義（Definition 1.3-2）および数学的帰納法を用いて証明する。
                        </p>
                        <p>
                            <InlineMath math="n=1" /> のときは明らかである。
                        </p>
                        <p>
                            ある <InlineMath math="k \geq 1" /> に対して「<InlineMath math="a^k = 0 \implies a = 0" />」が成り立つと仮定し、<InlineMath math="a^{k+1} = 0" /> の場合を考える。
                        </p>
                        <BlockMath math="a^{k+1} = a \cdot a^k = 0" />
                        <p>
                            <InlineMath math="D" /> は整域であり零因子を持たないため、<InlineMath math="a \cdot a^k = 0" /> ならば <InlineMath math="a = 0" /> または <InlineMath math="a^k = 0" /> である。
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><InlineMath math="a = 0" /> の場合は主張が成り立つ。</li>
                            <li><InlineMath math="a^k = 0" /> の場合は、帰納法の仮定より <InlineMath math="a = 0" /> である。</li>
                        </ul>
                        <p>
                            したがって、いずれの場合も <InlineMath math="a = 0" /> が得られる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        多項式環 <InlineMath math="R[x]" /> において、任意の 0 でない多項式 <InlineMath math="f, g" /> に対して次数の公式
                        <BlockMath math="\deg(fg) = \deg f + \deg g" />
                        が成り立つとする。このとき、環 <InlineMath math="R[x]" /> は零因子を持たないことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「零因子を持たない」ことの対偶である「<InlineMath math="f \neq 0" /> かつ <InlineMath math="g \neq 0 \implies fg \neq 0" />」を示す。
                        </p>
                        <p>
                            <InlineMath math="f, g" /> を <InlineMath math="R[x]" /> の 0 でない任意の多項式とする。0 でない多項式の次数は非負の整数（<InlineMath math="\deg f \geq 0, \deg g \geq 0" />）である。
                        </p>
                        <p>
                            条件として与えられた公式を用いると、
                        </p>
                        <BlockMath math="\deg(fg) = \deg f + \deg g \geq 0" />
                        <p>
                            多項式において、次数が非負の整数として定義されるのは、その多項式が 0 でないとき（または 0 でない係数を持つとき）である。もし <InlineMath math="fg = 0" /> であれば、その次数は通常 <InlineMath math="-\infty" />（あるいは定義されない）とされる。
                        </p>
                        <p>
                            よって <InlineMath math="\deg(fg)" /> が有限の非負整数値を持つことから、<InlineMath math="fg" /> は 0 多項式ではない（<InlineMath math="fg \neq 0" />）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        要素の個数が有限個であるような整域 <InlineMath math="D" /> は体であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            体であることを示すには、<InlineMath math="0" /> でない任意の元 <InlineMath math="a \in D" /> が乗法逆元を持つことを示せばよい。
                        </p>
                        <p>
                            <InlineMath math="a \neq 0" /> を固定し、写像 <InlineMath math="f: D \to D" /> を <InlineMath math="f(x) = ax" /> と定める。
                        </p>
                        <p className="mt-4">
                            <b>1. <InlineMath math="f" /> が単射であることの確認：</b><br />
                            <InlineMath math="f(x_1) = f(x_2)" /> とすると <InlineMath math="ax_1 = ax_2" /> である。<InlineMath math="D" /> は整域であり <InlineMath math="a \neq 0" /> であるから、消去法則（Proposition 1.3-1）により <InlineMath math="x_1 = x_2" /> が成り立つ。よって <InlineMath math="f" /> は単射である。
                        </p>
                        <p className="mt-4">
                            <b>2. <InlineMath math="f" /> が全射であることの確認：</b><br />
                            <InlineMath math="D" /> は有限集合であり、有限集合から自身への単射は必ず全射になる（鳩の巣原理）。よって <InlineMath math="f" /> は全射である。
                        </p>
                        <p className="mt-4">
                            <b>3. 逆元の存在：</b><br />
                            <InlineMath math="f" /> は全射なので、ある <InlineMath math="b \in D" /> が存在して <InlineMath math="f(b) = 1" /> となる。すなわち <InlineMath math="ab = 1" /> である。<InlineMath math="D" /> は可換環なので <InlineMath math="ba = 1" /> も成り立ち、<InlineMath math="b" /> は <InlineMath math="a" /> の逆元である。
                        </p>
                        <p>
                            以上より、<InlineMath math="D" /> の 0 でない任意の元は可逆であり、<InlineMath math="D" /> は体である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        空でない環 <InlineMath math="R" /> において、すべての元 <InlineMath math="a \in R" /> が <InlineMath math="a^2 = a" /> を満たすとする（このような環をブール環という）。このとき、以下の性質を証明せよ。
                        <br />(1) すべての <InlineMath math="a \in R" /> に対して <InlineMath math="a + a = 0" />（標数は 2 である）。
                        <br />(2) <InlineMath math="R" /> は可換環である。
                    </p>
                    <ExerciseSolution>
                        <p>
                            (1) の証明：<br />
                            元 <InlineMath math="a + a" /> に対して条件 <InlineMath math="x^2 = x" /> を適用すると、
                            <BlockMath math="(a + a)^2 = a + a" />
                            左辺を展開すると、環の分配法則より
                            <BlockMath math="(a + a)(a + a) = a^2 + a^2 + a^2 + a^2 = a + a + a + a" />
                            よって <InlineMath math="a + a + a + a = a + a" /> である。両辺に <InlineMath math="a + a" /> の加法逆元を加える（キャンセルする）ことで、
                            <BlockMath math="a + a = 0" />
                            を得る。これは任意の <InlineMath math="a" /> に対して <InlineMath math="-a = a" /> であることも意味する。
                        </p>
                        <p className="mt-4">
                            (2) の証明：<br />
                            任意の <InlineMath math="a, b \in R" /> に対して、和 <InlineMath math="a + b" /> に条件を適用すると、
                            <BlockMath math="(a + b)^2 = a + b" />
                            左辺は <InlineMath math="(a + b)(a + b) = a^2 + ab + ba + b^2 = a + ab + ba + b" /> となるので、
                            <BlockMath math="a + ab + ba + b = a + b" />
                            両辺から <InlineMath math="a + b" /> を引くことで、
                            <BlockMath math="ab + ba = 0" />
                            を得る。(1) より <InlineMath math="ba + ba = 0" /> であるから、<InlineMath math="ab + ba = ba + ba" /> となり、<InlineMath math="ab = ba" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        単位元付き環 <InlineMath math="R" /> の元 <InlineMath math="a \in R" /> がある正の整数 <InlineMath math="n" /> に対して <InlineMath math="a^n = 0" /> を満たすとする（このような元を冪零元という）。このとき、元 <InlineMath math="1 - a" /> は可逆であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            有限等比級数の公式 <InlineMath math="(1 - x)(1 + x + x^2 + \cdots + x^{n-1}) = 1 - x^n" /> を環の演算に適用する。
                        </p>
                        <p>
                            <InlineMath math="b = 1 + a + a^2 + \cdots + a^{n-1}" /> とおき、これを右から掛けると、
                        </p>
                        <BlockMath math="\begin{aligned} (1 - a)b &= (1 - a)(1 + a + a^2 + \cdots + a^{n-1}) \\ &= (1 + a + a^2 + \cdots + a^{n-1}) - (a + a^2 + a^3 + \cdots + a^n) \\ &= 1 - a^n \end{aligned}" />
                        <p>
                            仮定より <InlineMath math="a^n = 0" /> であるから、<InlineMath math="(1 - a)b = 1 - 0 = 1" /> となる。
                        </p>
                        <p>
                            左から掛ける場合も、
                        </p>
                        <BlockMath math="\begin{aligned} b(1 - a) &= (1 + a + a^2 + \cdots + a^{n-1})(1 - a) \\ &= (1 + a + a^2 + \cdots + a^{n-1}) - (a + a^2 + a^3 + \cdots + a^n) \\ &= 1 - a^n = 1 \end{aligned}" />
                        <p>
                            となり、等式が成り立つ。
                        </p>
                        <p>
                            したがって、<InlineMath math="1 - a" /> は可逆元であり、その逆元は <InlineMath math="(1 - a)^{-1} = 1 + a + a^2 + \cdots + a^{n-1}" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
