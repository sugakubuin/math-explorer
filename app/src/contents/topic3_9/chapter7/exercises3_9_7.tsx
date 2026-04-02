import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        整域 <InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> において、<InlineMath math="6" /> という数を既約分解すると：
                        <BlockMath math="6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})" />
                        と表現できる。ここに出現する 4 つの元がすべて既約元であると仮定したとき、なぜこの事実が「<InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> は UFD ではない」ことの証明になるのか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                UFD の定義（Definition 7.2-1）によれば、既約分解は「単元倍と順序を除いて一意」でなければならない。
                            </li>
                            <li>
                                この環の単元は <InlineMath math="\pm 1" /> のみである。
                            </li>
                            <li>
                                左辺の <InlineMath math="2" /> と右辺の <InlineMath math="1 \pm \sqrt{-5}" /> を比較すると、<InlineMath math="1 \pm \sqrt{-5} \neq \pm 2" /> であるため、これらは単元倍で移り変わる関係（同伴）ではない。
                            </li>
                            <li>
                                したがって、本質的に異なる 2 つの既約分解が存在することになり、一意性が破綻している。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、負の整数 <InlineMath math="-12" /> の既約分解（素因数分解）を一つ示し、それが UFD の定義における「単元倍と順序の違いを除いた一意性」をどのように満たしているか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            分解の一例： <InlineMath math="-12 = (-2) \cdot 2 \cdot 3" />
                        </p>
                        <p>
                            他の分解（例： <InlineMath math="-12 = (-1) \cdot 2 \cdot 2 \cdot 3" /> や <InlineMath math="2 \cdot 2 \cdot (-3)" />）との関係：
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>既約元の個数はすべて 3 個（単元 <InlineMath math="-1" /> を数えない場合）であり、一致する。</li>
                            <li>各分解に現れる既約元は、単元 <InlineMath math="\pm 1" /> 倍の違いを除けば <InlineMath math="\{2, 2, 3\}" /> という集合に帰着する。</li>
                        </ul>
                        <p className="mt-2">
                            このように、見かけ上の違いが単元の掛け合わせによるもの（同伴な元の置き換え）に過ぎないため、一意性が保たれている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        UFD において、2 つの元 <InlineMath math="a, b" /> の既約分解が分かっているとき、最大公約数 <InlineMath math="\gcd(a, b)" /> を求める具体的な手順（Proposition 7.4-1）を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="a" /> と <InlineMath math="b" /> を既約分解し、共通して現れるすべての既約元（同伴なものは一つにまとめる）を <InlineMath math="p_1, p_2, \dots, p_k" /> とする。
                            </li>
                            <li>
                                各元を <InlineMath math="a = u \prod p_i^{e_i}, \ b = v \prod p_i^{f_i}" /> （<InlineMath math="e_i, f_i \geq 0" />）と指数形式で表す。
                            </li>
                            <li>
                                各既約元について指数の最小値をとった積 <BlockMath math="d = \prod p_i^{\min(e_i, f_i)}" /> を計算する。これが求める最大公約数である。
                            </li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        一般の整域において、「素元であれば必ず既約元である」ことを、ノルムを使わずに定義（積の分解）に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="p" /> を素元とし、<InlineMath math="p = ab" /> と分解できたとする。
                            </li>
                            <li>
                                素元の定義より <InlineMath math="p \mid ab \implies p \mid a \text{ または } p \mid b" /> である。
                            </li>
                            <li>
                                <InlineMath math="p \mid a" /> と仮定すると、ある <InlineMath math="c" /> が存在して <InlineMath math="a = pc" />。これを元の式に代入して <InlineMath math="p = pcb" />。
                            </li>
                            <li>
                                <InlineMath math="p \neq 0" /> かつ整域なので <InlineMath math="1 = cb" /> となり、<InlineMath math="b" /> は単元である。<InlineMath math="p \mid b" /> のときも同様に <InlineMath math="a" /> が単元となる。
                            </li>
                            <li>
                                よって、あらゆる分解において少なくとも一方は単元であるため、<InlineMath math="p" /> は既約元である。
                            </li>
                        </ol>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        一意分解整域（UFD） <InlineMath math="D" /> において、次の性質（ユークリッドの補題の一般化）を証明せよ：
                        <br />「<InlineMath math="a, b, c \in D" /> に対し、<InlineMath math="a \mid bc" /> かつ <InlineMath math="\gcd(a, b) = 1" /> ならば <InlineMath math="a \mid c" /> である。」
                    </p>
                    <ExerciseSolution>
                        <p>
                            UFD における既約元と素元の同値性（Theorem 7.2-1）を利用する。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="a" /> の既約分解に現れる任意の既約元 <InlineMath math="p" /> をとる。<InlineMath math="a \mid bc" /> より、<InlineMath math="p" /> は積 <InlineMath math="bc" /> を割り切る。
                            </li>
                            <li>
                                UFD において既約元は素元であるため、<InlineMath math="p \mid b" /> または <InlineMath math="p \mid c" /> が成り立つ。
                            </li>
                            <li>
                                ここで <InlineMath math="\gcd(a, b) = 1" /> より、<InlineMath math="a" /> と <InlineMath math="b" /> は共通の既約因子を持たない。したがって <InlineMath math="p \mid b" /> はあり得ず、<InlineMath math="p \mid c" /> が成り立つ。
                            </li>
                            <li>
                                この議論を <InlineMath math="a" /> のすべての既約因子（指数も含めて）に対して適用することで、<InlineMath math="a" /> のすべての成分が <InlineMath math="c" /> を割り切ることがわかる。
                            </li>
                        </ol>
                        <p className="mt-2">
                            したがって、<InlineMath math="a \mid c" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        一意分解整域（UFD）において、2 つの元 <InlineMath math="a, b" /> が互いに素である（<InlineMath math="\gcd(a, b) = 1" />）ことと、<InlineMath math="a" /> と <InlineMath math="b" /> が共通の既約因子（既約元であるような約数）を持たないことは同値であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            UFD における gcd の構成法（Prop 7.4-1）に基づき議論する。
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                もし共通の既約因子 <InlineMath math="p" /> を持てば、その指数 <InlineMath math="e_i, f_i" /> は共に 1 以上となり、<InlineMath math="\min(e_i, f_i) \geq 1" /> なので <InlineMath math="\gcd" /> は少なくとも <InlineMath math="p" /> を因子に持ち、1（単元）にならない。
                            </li>
                            <li>
                                逆に、共通の既約因子を持たなければ、すべての <InlineMath math="i" /> について <InlineMath math="e_i=0" /> または <InlineMath math="f_i=0" /> となり、<InlineMath math="\min(e_i, f_i) = 0" />。
                                したがって <InlineMath math="\gcd" /> は 既約元の 0 乗のみの積（＝単元）となり、1 である。
                            </li>
                        </ul>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        §7.5 の議論に基づき、整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> は PID ではないが UFD であることを簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>PID ではない理由：</b> イデアル <InlineMath math="(2, x)" /> が単元ではない単一の多項式で生成できないため（Example 6.1-3）。
                            </li>
                            <li>
                                <b>UFD である理由：</b> 定数（整数）の分解の一意性と、多項式の既約分解の一意性が、ガウスの補題（Ch.8 で詳述）によって保証されるため。一般に「<InlineMath math="D" /> が UFD ならば <InlineMath math="D[x]" /> も UFD」という定理が成り立つ。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        UFD において「gcd は存在するがベズーの等式が成り立たない」例として、<InlineMath math="\mathbb{Z}[x]" /> における <InlineMath math="a = 2x" /> と <InlineMath math="b = x^2" /> を考える。
                        この 2 つの gcd を示し、なぜ <InlineMath math="s(2x) + t(x^2) = \gcd(2x, x^2)" /> を満たす <InlineMath math="s, t" /> が存在しないのか、一次の項（係数）に注目して証明せよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>gcd の導出：</b> 既約因子を比較すると <InlineMath math="2x = 2 \cdot x, \ x^2 = x \cdot x" /> より、<InlineMath math="\gcd = x" />。</li>
                            <li><b>証明：</b> もし <InlineMath math="s \cdot 2x + t \cdot x^2 = x" /> となる多項式 <InlineMath math="s, t" /> が存在したとする。
                                <br />両辺の <InlineMath math="x" /> の一次の係数を比較する。
                                <br />左辺の一次の項は、<InlineMath math="s = s_0 + s_1x + \dots" /> としたとき、<InlineMath math="s_0(2x)" /> から生じる <InlineMath math="2s_0 x" /> のみである（<InlineMath math="t \cdot x^2" /> は二次以上）。
                                <br />したがって、左辺の一次の係数は偶数 <InlineMath math="2s_0" /> である。
                                <br />一方、右辺の一次の係数は 1（奇数）である。
                                <br />整数において 偶数 ＝ 奇数 となり矛盾し、そのような解は存在しない。
                            </li>
                        </ul>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        整域 <InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> において、<InlineMath math="2" /> が既約元であるが素元でないことを、ノルム <InlineMath math="N(a+b\sqrt{-5}) = a^2+5b^2" /> を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <b>既約性の証明：</b> <InlineMath math="2 = \alpha\beta" /> とすると <InlineMath math="N(\alpha)N(\beta) = N(2) = 4" />。
                                非自明な分解があれば <InlineMath math="N(\alpha)=2" /> となるが、<InlineMath math="a^2+5b^2=2" /> は整数解を持たない。よって既約である。
                            </li>
                            <li>
                                <b>素元でないことの証明：</b> <InlineMath math="6 = 2 \cdot 3" /> かつ <InlineMath math="6 = (1+\sqrt{-5})(1-\sqrt{-5})" /> である。
                                より、<InlineMath math="2 \mid (1+\sqrt{-5})(1-\sqrt{-5})" />。
                                もし 2 が素元なら、<InlineMath math="2 \mid (1+\sqrt{-5})" /> または <InlineMath math="2 \mid (1-\sqrt{-5})" />。
                                しかし、ノルムを考えると <InlineMath math="N(2)=4" /> であり、<InlineMath math="N(1 \pm \sqrt{-5}) = 6" />。
                                4 は 6 を割り切らないため、これらは成立し得ない。
                            </li>
                        </ol>
                        <p className="mt-2">
                            したがって、2 は既約元だが素元ではない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        以下の整域の包含関係において、各包含関係が「真の包含関係」であることを示すための反例（右側のクラスには入るが左側には入らない環）をそれぞれ一つずつ挙げよ。
                        <BlockMath math="\text{体} \subsetneq \text{ED} \subsetneq \text{PID} \subsetneq \text{UFD}" />
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>ED ∖ 体：</b> <InlineMath math="\mathbb{Z}" />
                                <br />（割り算はできるが、すべての元に逆元があるわけではない）
                            </li>
                            <li>
                                <b>PID ∖ ED：</b> <InlineMath math="\mathbb{Z}[(1+\sqrt{-19})/2]" />
                                <br />（イデアルは単項生成だが、除法の原理が機能するノルムが存在しない）
                            </li>
                            <li>
                                <b>UFD ∖ PID：</b> <InlineMath math="\mathbb{Z}[x]" />
                                <br />（分解は一意だが、イデアル <InlineMath math="(2, x)" /> が単項生成ではない）
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
