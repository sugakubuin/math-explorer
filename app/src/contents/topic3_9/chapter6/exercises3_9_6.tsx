import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> は PID ではない。
                        イデアル <InlineMath math="I = (2, x)" /> が主イデアル（単一の元で生成されるイデアル）にならない理由を、§6.1 の議論に基づいて簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                もし <InlineMath math="(2, x) = (d(x))" /> となる多項式 <InlineMath math="d(x)" /> が存在すると仮定する。
                            </li>
                            <li>
                                <InlineMath math="2 \in (d)" /> より、<InlineMath math="d" /> は定数 <InlineMath math="\pm 1" /> または <InlineMath math="\pm 2" /> でなければならない。
                            </li>
                            <li>
                                <InlineMath math="x \in (d)" /> より、<InlineMath math="d" /> は <InlineMath math="x" /> を割り切らなければならない。<InlineMath math="\pm 2" /> は <InlineMath math="x" /> を割り切らないため、<InlineMath math="d = \pm 1" /> となる。
                            </li>
                            <li>
                                しかし <InlineMath math="( \pm 1) = \mathbb{Z}[x]" /> である一方、イデアル <InlineMath math="(2, x)" /> は定数項が偶数の多項式のみを含み、環全体とは一致しない。
                            </li>
                        </ul>
                        <p className="mt-2">
                            この矛盾により、<InlineMath math="(2, x)" /> は主イデアルではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        体上の多項式環 <InlineMath math="F[x]" /> において、イデアルの和 <InlineMath math="I = (x^2, x^3 + x)" /> を考える。
                        このイデアル <InlineMath math="I" /> を生成する単一の多項式 <InlineMath math="d(x)" />（すなわち <InlineMath math="I = (d)" />）を、最高次係数が 1 となるように求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            PID におけるイデアルの和の性質（Theorem 6.4-1）より、<InlineMath math="(f) + (g) = (\gcd(f, g))" /> である。
                        </p>
                        <p>
                            <InlineMath math="f(x) = x^2" /> と <InlineMath math="g(x) = x^3 + x = x(x^2 + 1)" /> の最大公約数を計算すると：
                            <br />共通の因数は <InlineMath math="x" /> のみである。
                        </p>
                        <p>
                            したがって、求める生成元は <InlineMath math="d(x) = x" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        ユークリッド整域（ED）において、任意の非零イデアル <InlineMath math="I" /> の「ノルム最小の非零元」 <InlineMath math="d" /> がイデアル全体を生成すること（<InlineMath math="I = (d)" />）を証明する際、どの段階で「除法の原理」が使われているか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            証明の後半、任意の元 <InlineMath math="a \in I" /> が <InlineMath math="d" /> で割り切れることを示す際に使用される（Theorem 6.2-1）。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                除法の原理により <InlineMath math="a = qd + r" /> （<InlineMath math="r = 0" /> または <InlineMath math="N(r) < N(d)" />）と書く。
                            </li>
                            <li>
                                ここで <InlineMath math="r = a - qd" /> であり、<InlineMath math="a, d \in I" /> より <InlineMath math="r \in I" /> となる。
                            </li>
                            <li>
                                もし <InlineMath math="r \neq 0" /> ならば「<InlineMath math="d" /> がノルム最小」であることに矛盾するため、<InlineMath math="r = 0" /> でなければならない。
                            </li>
                        </ul>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、主イデアル <InlineMath math="(n)" /> が素イデアルであるための必要十分条件は、<InlineMath math="|n|" /> が素数であるか、または <InlineMath math="n = 0" /> であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            整域においてイデアル <InlineMath math="(p)" /> が素イデアルであることと、<InlineMath math="p" /> が素元（または 0）であることは同値である。
                        </p>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>
                                <b>n = 0 のとき：</b> <InlineMath math="\mathbb{Z}" /> は整域なので、<InlineMath math="(0)" /> は素イデアルである。
                            </li>
                            <li>
                                <b>n ≠ 0 のとき：</b> <InlineMath math="\mathbb{Z}" /> は PID なので、「素元 ＝ 既約元 ＝ 素数（またはその負数）」である（Prop 6.3-1）。
                                <br />したがって、<InlineMath math="(n)" /> が素イデアルならば <InlineMath math="n" /> は素数（の倍数）であり、逆に素数 <InlineMath math="p" /> が生成するイデアルは素イデアル（かつ極大イデアル）である。
                            </li>
                        </ul>
                        <p className="mt-2">
                            以上より、<InlineMath math="|n|" /> が素数または <InlineMath math="n=0" /> であることが必要十分である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        多項式環 <InlineMath math="\mathbb{Q}[x]" /> において、<InlineMath math="f(x) = x^2 - 1" /> と <InlineMath math="g(x) = x^2 - 3x + 2" /> の最大公約数 <InlineMath math="d(x)" /> を求め、ベズーの等式 <InlineMath math="sf + tg = d" /> を満たす <InlineMath math="s(x), t(x)" /> を一組求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>ステップ1：gcd の導出</b>
                            <br /><InlineMath math="f(x) = (x-1)(x+1)" />
                            <br /><InlineMath math="g(x) = (x-1)(x-2)" />
                            <br />より、最高次係数を 1 とすると <InlineMath math="d(x) = x-1" /> である。
                        </p>
                        <p>
                            <b>ステップ2：線形結合の計算</b>
                            <br /><InlineMath math="f(x) - g(x) = (x^2-1) - (x^2-3x+2) = 3x - 3 = 3(x-1)" />
                        </p>
                        <p>
                            したがって：
                            <BlockMath math="x-1 = \frac{1}{3}f(x) - \frac{1}{3}g(x)" />
                            が得られる。ゆえに <InlineMath math="s(x) = 1/3, \ t(x) = -1/3" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        PID において、任意の 2 つの元 <InlineMath math="a, b" /> に対し、それらが生成するイデアルの和 <InlineMath math="(a) + (b)" /> を考えることで、最大公約数が存在することを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            PID の定義より、イデアル <InlineMath math="(a) + (b)" /> はある元 <InlineMath math="d" /> で生成される主イデアルである（<InlineMath math="(a) + (b) = (d)" />）。この <InlineMath math="d" /> が gcd の定義を満たす。
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <b>公約数：</b> <InlineMath math="a \in (d)" /> より <InlineMath math="d \mid a" />。同様に <InlineMath math="d \mid b" />。
                            </li>
                            <li>
                                <b>最大性：</b> 任意の公約数 <InlineMath math="c" /> をとると、<InlineMath math="a, b \in (c)" /> より生成されるイデアルの和も <InlineMath math="(a) + (b) \subset (c)" /> となる。よって <InlineMath math="d \in (c)" /> すなわち <InlineMath math="c \mid d" /> である。
                            </li>
                        </ul>
                        <p className="mt-2 text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        単項イデアル整域 <InlineMath math="D" /> において、非零素イデアル <InlineMath math="P \neq (0)" /> による剰余環 <InlineMath math="D/P" /> は必ず体になることを、定理 6.3-1 を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 6.3-1 より、PID における非零素イデアルは極大イデアルである。
                        </p>
                        <p>
                            可換環論の基本定理（Proposition 3.2-1）より、「イデアル <InlineMath math="I" /> が極大イデアルであることと、剰余環 <InlineMath math="R/I" /> が体であることは同値」である。
                        </p>
                        <p>
                            したがって、<InlineMath math="P" /> が極大イデアルであるため、<InlineMath math="D/P" /> は体となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        PID <InlineMath math="D" /> の 2 つの値 <InlineMath math="a, b" /> について、イデアルの包含関係 <InlineMath math="(a) \subset (b)" /> が成り立つことと、割り切れる関係 <InlineMath math="b \mid a" /> が成り立つことが同値であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>[⟹] の証明：</b>
                            <InlineMath math="(a) \subset (b)" /> ならば、特に生成元について <InlineMath math="a \in (b)" /> である。
                            主イデアルの定義より、ある <InlineMath math="x \in D" /> が存在して <InlineMath math="a = bx" /> と書ける。
                            これは <InlineMath math="b \mid a" /> を意味する。
                        </p>
                        <p className="mt-2">
                            <b>[⟸] の証明：</b>
                            <InlineMath math="b \mid a" /> ならば、<InlineMath math="a = bx" /> となる <InlineMath math="x" /> が存在する。
                            このとき <InlineMath math="a" /> は <InlineMath math="b" /> の倍数であるから、<InlineMath math="a" /> で生成される集合（イデアル）のすべての要素も <InlineMath math="b" /> の倍数となる。
                            したがって <InlineMath math="(a) \subset (b)" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        単項イデアル整域（PID） <InlineMath math="D" /> において、任意の 2 つの元 <InlineMath math="a, b" /> に対し、最小公倍数 <InlineMath math="(lcm)" /> <InlineMath math="m" /> が存在することを示せ。
                        （ヒント：イデアルの共通部分 <InlineMath math="(a) \cap (b)" /> に注目せよ）
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="(a) \cap (b)" /> を考える。イデアルの共通部分は再びイデアルになる。
                            </li>
                            <li>
                                <InlineMath math="D" /> は PID なので、ある元 <InlineMath math="m \in D" /> が存在して <InlineMath math="(a) \cap (b) = (m)" /> と書ける。
                            </li>
                            <li>
                                <b>公倍数であること：</b> <InlineMath math="m \in (a)" /> より <InlineMath math="a \mid m" />。同様に <InlineMath math="m \in (b)" /> より <InlineMath math="b \mid m" />。
                            </li>
                            <li>
                                <b>最小性：</b> 任意の公倍数を <InlineMath math="x" /> とすると、<InlineMath math="x \in (a)" /> かつ <InlineMath math="x \in (b)" /> であるから、<InlineMath math="x \in (a) \cap (b) = (m)" /> である。
                                <br />したがって <InlineMath math="m \mid x" /> となり、<InlineMath math="m" /> は最小公倍数の条件を満たす。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        単項イデアル整域（PID）において、既約元 <InlineMath math="p" /> が必ず素元になることを、極大イデアルの性質を用いて証明せよ（Proposition 6.3-1 の要約）。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="p" /> を既約元とし、それが生成するイデアル <InlineMath math="(p)" /> を含むイデアル <InlineMath math="I = (a)" /> をとる。
                            </li>
                            <li>
                                <InlineMath math="p \in (a)" /> より <InlineMath math="p = ab" /> と書ける。<InlineMath math="p" /> は既約なので <InlineMath math="a" /> または <InlineMath math="b" /> が単元である。
                            </li>
                            <li>
                                <InlineMath math="a" /> が単元なら <InlineMath math="I = D" />。<InlineMath math="b" /> が単元なら <InlineMath math="(a) = (p)" />。よって <InlineMath math="(p)" /> は極大イデアルである。
                            </li>
                            <li>
                                極大イデアルは常に素イデアルであるため、<InlineMath math="(p)" /> は素イデアルであり、定義より <InlineMath math="p" /> は素元である。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
