import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        剰余環 <InlineMath math="R = \mathbb{Z}/6\mathbb{Z}" /> を係数とする多項式環 <InlineMath math="R[x]" /> において、非零多项式 <InlineMath math="f(x) = \bar{2}x" /> と <InlineMath math="g(x) = \bar{3}x" /> の積 <InlineMath math="f(x)g(x)" /> を計算せよ。また、これが Proposition 4.1-1 の前提条件（整域であること）が欠けると次数公式 <InlineMath math="\deg(fg) = \deg f + \deg g" /> が成り立たない例であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            積を計算すると：
                        </p>
                        <BlockMath math="f(x)g(x) = (\bar{2}x)(\bar{3}x) = (\bar{2} \cdot \bar{3})x^2 = \bar{6}x^2 = \bar{0}" />
                        <p>
                            が得られる。したがって、積 <InlineMath math="fg" /> は零多項式である。
                        </p>
                        <p>
                            このとき、次数を考えると：
                        </p>
                        <ul className="list-disc list-inside ml-4">
                            <li><InlineMath math="\deg f = 1" /></li>
                            <li><InlineMath math="\deg g = 1" /></li>
                            <li><InlineMath math="\deg(fg) = \deg(0) = -\infty" /> （または未定義）</li>
                        </ul>
                        <p>
                            となり、<InlineMath math="1 + 1 = 2 \neq -\infty" /> であるため、次数公式が成り立っていない。これは、係数環 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> が整域でなく、非零元 <InlineMath math="\bar{2}" /> と <InlineMath math="\bar{3}" /> の積が <InlineMath math="0" /> になることに起因する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> における単数群は <InlineMath math="\mathbb{Z}^\times = \{1, -1\}" /> である。
                        Proposition 4.1-2 を用いて、多項式環 <InlineMath math="\mathbb{Z}[x]" /> において <InlineMath math="f(x) = 2x + 1" /> が可逆（単元）でない理由を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbb{Z}" /> は整域である。Proposition 4.1-2 によれば、整域上の多項式環の単元群は係数環の単元群に一致する（<InlineMath math="R[x]^\times = R^\times" />）。
                        </p>
                        <p>
                            したがって、<InlineMath math="\mathbb{Z}[x]" /> の単元は定数多項式 <InlineMath math="1" /> および <InlineMath math="-1" /> のみである。
                        </p>
                        <p>
                            多項式 <InlineMath math="f(x) = 2x + 1" /> は次数が 1 であり、定数ではない。ゆえに、<InlineMath math="\mathbb{Z}[x]" /> において逆元を持たず、単元ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> を積閉集合 <InlineMath math="S = \{3^n \mid n \geq 0\}" /> で局所化した環を <InlineMath math="\mathbb{Z}[1/3]" /> と書く。
                        <br />(1) 有理数 <InlineMath math="2/15" /> はこの環の元か？
                        <br />(2) この環において <InlineMath math="3" /> は可逆か？
                        <br />(3) この環において <InlineMath math="5" /> は可逆か？
                    </p>
                    <ExerciseSolution>
                        <p>
                            局所化 <InlineMath math="S^{-1}R" /> の元は <InlineMath math="a/s \ (s \in S)" /> の形、すなわち分母が 3の冪である分数である。
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>
                                <b>2/15 について：</b> <InlineMath math="2/15 = 2 / (3 \cdot 5)" /> である。既約分数にしたときに分母に 3以外の素因数（この場合は 5）が含まれているため、分母を 3の冪だけで表すことはできない。よって、<b>この環の元ではない</b>。
                            </li>
                            <li>
                                <b>3 の可逆性：</b> <InlineMath math="3 = 3/1" /> である。逆元は <InlineMath math="1/3" /> である。分母 <InlineMath math="3 = 3^1" /> は <InlineMath math="S" /> の元であるため、<InlineMath math="1/3 \in \mathbb{Z}[1/3]" /> である。よって<b>可逆である</b>。
                            </li>
                            <li>
                                <b>5 の可逆性：</b> <InlineMath math="5 = 5/1" /> である。逆元は <InlineMath math="1/5" /> となるはずだが、分母 <InlineMath math="5" /> は <InlineMath math="3" /> の冪ではない。したがって <InlineMath math="1/5 \notin \mathbb{Z}[1/3]" /> であり、<b>可逆ではない</b>。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        整域 <InlineMath math="D" /> が体であるとき、その商体 <InlineMath math="\mathrm{Frac}(D)" /> は元の環 <InlineMath math="D" /> と同型であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            単射環準同型 <InlineMath math="\iota: D \to \mathrm{Frac}(D)" />（<InlineMath math="a \mapsto a/1" />）が全射であることを示せばよい。
                        </p>
                        <p>
                            商体の任意の元 <InlineMath math="a/b \ (a, b \in D, b \neq 0)" /> をとる。
                            いま、<InlineMath math="D" /> は体であるから、<InlineMath math="b \neq 0" /> ならば <InlineMath math="D" /> の中に逆元 <InlineMath math="b^{-1}" /> が存在する。
                        </p>
                        <p>
                            <InlineMath math="D" /> の元 <InlineMath math="x = a b^{-1}" /> を考えると、
                        </p>
                        <BlockMath math="\iota(x) = (a b^{-1}) / 1" />
                        <p>
                            商体の同値関係 <InlineMath math="x/1 = a/b \iff x \cdot b = a \cdot 1" /> を確認すると、
                            <InlineMath math="(ab^{-1}) \cdot b = a" /> であり、これは確かに成り立つ。
                        </p>
                        <p>
                            したがって <InlineMath math="\iota" /> は全射であり、同型 <InlineMath math="\mathrm{Frac}(D) \cong D" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        多項式環の普遍性（Theorem 4.2-2）を用いて、環準同型 <InlineMath math="\phi: \mathbb{Z}[x] \to \mathbb{Z}" /> であって
                        <br />(1) 任意の <InlineMath math="n \in \mathbb{Z}" /> に対し <InlineMath math="\phi(n) = n" />
                        <br />(2) <InlineMath math="\phi(x) = 1" />
                        <br />を満たすものがただ一つ存在することを示し、このとき多項式 <InlineMath math="f(x) = x^2 + 2x + 3" /> の行き先を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.2-2 において、<InlineMath math="R = \mathbb{Z}" />、<InlineMath math="S = \mathbb{Z}" />、<InlineMath math="s = 1 \in S" /> とおくと、条件を満たす準同型 <InlineMath math="\phi" /> が一意に存在することが保証される。
                        </p>
                        <p>
                            これは代入準同型 <InlineMath math="\mathrm{ev}_1" /> に他ならない。多項式 <InlineMath math="f(x)" /> の行き先は：
                        </p>
                        <BlockMath math="\phi(f(x)) = f(1) = 1^2 + 2(1) + 3 = 1 + 2 + 3 = 6" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        素数 <InlineMath math="p" /> における整数環の局所化を <InlineMath math="\mathbb{Z}_{(p)} = \{ a/b \mid a, b \in \mathbb{Z}, p \nmid b \}" /> とする。
                        <InlineMath math="p" /> で割り切れない整数 <InlineMath math="q" /> （すなわち <InlineMath math="q \notin (p)" />）は、この局所化された環において可逆（単元）であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="q \in \mathbb{Z} \subset \mathbb{Z}_{(p)}" /> を <InlineMath math="q/1" /> とみなす。
                            その逆元候補は <InlineMath math="1/q" /> である。
                        </p>
                        <p>
                            局所化の定義（Definition 4.4-3）より、分母として許されるのは積閉集合 <InlineMath math="S = \mathbb{Z} \setminus (p)" /> の元である。
                            仮定より <InlineMath math="q \notin (p)" /> であるから、<InlineMath math="q \in S" /> である。
                        </p>
                        <p>
                            したがって、分数 <InlineMath math="1/q" /> は <InlineMath math="\mathbb{Z}_{(p)}" /> の元として定義される。
                            <InlineMath math="(q/1) \cdot (1/q) = 1/1 = 1" /> となるため、<InlineMath math="q" /> は可逆である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        係数環 <InlineMath math="R" /> が整域でない場合、非零多項式 <InlineMath math="f, g" /> に対して <InlineMath math="\deg(fg) < \deg f + \deg g" /> となる例を挙げよ。また、Proposition 4.1-1 の証明のどこで「整域であること」が使われているか指摘せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>例：</b> <InlineMath math="R = \mathbb{Z}/4\mathbb{Z}" /> とし、<InlineMath math="f(x) = \bar{2}x + 1, g(x) = \bar{2}x + 1" /> とする。
                            <br />次数は <InlineMath math="\deg f = 1, \deg g = 1" /> であり、和は <InlineMath math="2" /> である。
                            <br />積を計算すると：
                            <BlockMath math="fg = (\bar{2}x+1)^2 = \bar{4}x^2 + \bar{4}x + \bar{1} = \bar{1}" />
                            <br /><InlineMath math="\deg(fg) = \deg(\bar{1}) = 0" /> となり、<InlineMath math="0 < 2" /> である。
                        </p>
                        <p className="mt-4">
                            <b>証明のポイント：</b>
                            Proposition 4.1-1 の証明において、<InlineMath math="f" /> の最高次係数 <InlineMath math="a_m" /> と <InlineMath math="g" /> の最高次係数 <InlineMath math="b_n" /> の積 <InlineMath math="a_m b_n" /> が最高次係数として残ることを保証するために、「<InlineMath math="a_m \neq 0" /> かつ <InlineMath math="b_n \neq 0 \implies a_m b_n \neq 0" />」という条件（零因子を持たないこと）が本質的に使われている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        可換環 <InlineMath math="R" /> において、剰余環 <InlineMath math="R[x]/(x)" /> が <InlineMath math="R" /> と同型であることを普遍性（あるいは第一同型定理）を用いて示し、それを用いて「<InlineMath math="R[x]" /> が整域ならば <InlineMath math="R" /> も整域である」ことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>1. 同型の証明：</b>
                            代入準同型 <InlineMath math="\mathrm{ev}_0: R[x] \to R" /> （<InlineMath math="f(x) \mapsto f(0)" />）を考える。
                            これは全射であり（定数多項式を考えればよい）、その核は定数項が 0 の多項式全体、すなわち主イデアル <InlineMath math="(x)" /> である。
                            第一同型定理より、<InlineMath math="R[x]/(x) \cong R" /> である。
                        </p>
                        <p className="mt-2">
                            <b>2. 整域性の証明：</b>
                            <InlineMath math="R[x]" /> が整域であると仮定する。整域の部分環は整域である（§1.3）から、<InlineMath math="R[x]" /> の部分環である定数多項式環 <InlineMath math="R" /> も整域である。
                        </p>
                        <p className="mt-2">
                            （別解： <InlineMath math="R[x]" /> が整域ならば、零イデアル <InlineMath math="(0)" /> は素イデアルである。このとき <InlineMath math="R \cong R[x]/(x)" /> において整域性が成り立つことを直接議論もできる）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        整域 <InlineMath math="D" /> に対して、その局所化 <InlineMath math="S^{-1}D" /> を考える。
                        積閉集合を <InlineMath math="S = D \setminus \{0\}" /> としたとき、この局所化は商体 <InlineMath math="\mathrm{Frac}(D)" /> と完全に一致することを、それぞれの定義（Definition 4.3-1 および 4.4-2）を比較して説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>1. 集合の定義：</b>
                            商体 <InlineMath math="\mathrm{Frac}(D)" /> は <InlineMath math="D \times (D \setminus \{0\})" /> 上の同値類である。
                            局所化 <InlineMath math="S^{-1}D" /> も <InlineMath math="D \times S" /> 上の同値類であり、<InlineMath math="S = D \setminus \{0\}" /> なので、台となる集合のペアは一致する。
                        </p>
                        <p className="mt-2">
                            <b>2. 同値関係：</b>
                            商体では <InlineMath math="(a, s) \sim (b, t) \iff at = bs" /> である。
                            局所化では <InlineMath math="u(at - bs) = 0" /> となる <InlineMath math="u \in S" /> の存在を要求する。
                            <InlineMath math="D" /> が整域であり、かつ <InlineMath math="u \in S" />（すなわち <InlineMath math="u \neq 0" />）であるとき、
                            <InlineMath math="u(at - bs) = 0 \iff at - bs = 0" /> が成り立つ。
                        </p>
                        <p className="mt-2">
                            したがって、集合としてだけでなく演算の定義も完全に一致するため、両者は同一の環を定める。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        素イデアル <InlineMath math="P" /> による局所化 <InlineMath math="R_P" /> において、唯一の極大イデアルが <InlineMath math="\mathfrak{m} = P R_P" /> となる理由を、Proposition 4.4-1 の証明を参考にして要約せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>非元が単元であること：</b> <InlineMath math="R_P" /> の元 <InlineMath math="a/s \notin P R_P" /> とは、分子 <InlineMath math="a" /> が <InlineMath math="P" /> に属さないことを意味する。このとき <InlineMath math="a" /> は積閉集合 <InlineMath math="S = R \setminus P" /> の元であるため、分数 <InlineMath math="s/a" /> が <InlineMath math="R_P" /> 内に存在し、逆元となる。
                            </li>
                            <li>
                                <b>イデアルの極大性：</b> 環の任意の真のイデアルは単元を含むことができない。上の事実より、あらゆる真のイデアルの元はすべて <InlineMath math="P R_P" /> に含まれていなければならない。
                            </li>
                            <li>
                                <b>結論：</b> 他のすべての真のイデアルを内包するため、<InlineMath math="P R_P" /> は唯一の極大イデアルとなる。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
