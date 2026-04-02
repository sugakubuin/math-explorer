import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_1_Chapter10() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="10" number={1}>
                    <p>
                        内積空間 <InlineMath math="V" /> 上の線形変換 <InlineMath math="T" /> に対して、その随伴作用素 <InlineMath math="T^*" /> を定義する関係式を記せ（Definition 10.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>すべての <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して、</p>
                        <BlockMath math="\langle T\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, T^*\boldsymbol{y} \rangle" />
                        <p>が成り立つ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={2}>
                    <p>
                        有限次元の内積空間において正規直交基底を選んだとき、線形変換 <InlineMath math="T" /> の表現行列を <InlineMath math="A" /> とすると、随伴作用素 <InlineMath math="T^*" /> の表現行列はどのようになるか。「実内積空間の場合」と「複素内積空間の場合」それぞれについて答えよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>実内積空間の場合：</strong> <InlineMath math="A" /> の転置行列 <InlineMath math="A^T" /> になる。</li>
                            <li><strong>複素内積空間の場合：</strong> <InlineMath math="A" /> の共役転置行列 <InlineMath math="A^*" />（または <InlineMath math="A^\dagger, \overline{A}^T" />）になる。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={3}>
                    <p>
                        作用素 <InlineMath math="T" /> とその随伴作用素 <InlineMath math="T^*" /> について、<InlineMath math="TT^* = T^*T" /> を満たす作用素を何と呼ぶか（Definition 10.3-1）。<br />
                        また、自己随伴作用素、歪自己随伴作用素、ユニタリ作用素は、この作用素の特別なケース（部分集合）であると言えるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="TT^* = T^*T" /> を満たす作用素を<strong>正規作用素（Normal Operator）</strong>と呼ぶ。<br />
                            自己随伴作用素、歪自己随伴作用素、ユニタリ作用素は、いずれもこの交換関係を満たすため、<strong>正規作用素の特別なケースであると言える</strong>。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="10" number={4}>
                    <p>
                        次の実正方行列 <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" /> について、以下の問に答えよ。<br />
                        (1) <InlineMath math="A" /> の随伴行列（転置行列） <InlineMath math="A^T" /> を求めよ。<br />
                        (2) <InlineMath math="A" /> は対称行列（自己随伴）、交代行列（歪自己随伴）、直交行列（ユニタリ）、正規行列のいずれに該当するか。該当するものをすべて挙げよ（なければ「なし」と答えよ）。
                    </p>
                    <ExerciseSolution>
                        <p><strong>(1)</strong></p>
                        <BlockMath math="A^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}" />
                        <p className="mt-4"><strong>(2)</strong></p>
                        <p>・<InlineMath math="A^T \neq A" /> より対称行列ではない。</p>
                        <p>・<InlineMath math="A^T \neq -A" /> より交代行列ではない。</p>
                        <p>・<InlineMath math="A^T A = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 10 & 14 \\ 14 & 20 \end{pmatrix} \neq I" /> より直交行列ではない。</p>
                        <p>・<InlineMath math="AA^T = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 5 & 11 \\ 11 & 25 \end{pmatrix}" />。先ほどの <InlineMath math="A^T A" /> と一致しないため（<InlineMath math="AA^T \neq A^T A" />）、正規行列ではない。</p>
                        <p><strong>答．</strong> なし</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={5}>
                    <p>
                        行列 <InlineMath math="B = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}" /> が正規行列であることを示せ。また、この行列は「自己随伴・歪自己随伴・直交」のどのクラスに分類されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず <InlineMath math="B^T" /> を求める。
                        </p>
                        <BlockMath math="B^T = \begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix} = -B" />
                        <p>
                            これより、<InlineMath math="B^T = -B" /> を満たすため、<InlineMath math="B" /> は<strong>交代行列（歪自己随伴）</strong>に分類される。
                        </p>
                        <p className="mt-4">
                            次に正規性 <InlineMath math="BB^T = B^T B" /> を確認する。
                        </p>
                        <BlockMath math="BB^T = B(-B) = -B^2" />
                        <BlockMath math="B^T B = (-B)B = -B^2" />
                        <p>
                            よって <InlineMath math="BB^T = B^T B" /> となり、<InlineMath math="B" /> が正規行列であることが示された。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={6}>
                    <p>
                        次の複素正方行列 <InlineMath math="C = \begin{pmatrix} 1 & 1-i \\ 1+i & 2 \end{pmatrix}" /> について、その随伴行列（共役転置行列） <InlineMath math="C^*" /> を求め、この行列がエルミート行列（自己随伴作用素）であることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            行列 <InlineMath math="C" /> の各成分の複素共役をとり、さらに転置する。
                        </p>
                        <BlockMath math="\overline{C} = \begin{pmatrix} \overline{1} & \overline{1-i} \\ \overline{1+i} & \overline{2} \end{pmatrix} = \begin{pmatrix} 1 & 1+i \\ 1-i & 2 \end{pmatrix}" />
                        <p>
                            これを転置する。
                        </p>
                        <BlockMath math="C^* = \overline{C}^T = \begin{pmatrix} 1 & 1-i \\ 1+i & 2 \end{pmatrix}" />
                        <p>
                            計算結果より <InlineMath math="C^* = C" /> となり、元の行列と完全に一致する。<br />
                            したがって、<InlineMath math="C" /> はエルミート行列（自己随伴作用素）である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={7}>
                    <p>
                        行列 <InlineMath math="U = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}" /> がユニタリ行列であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ユニタリ行列の定義 <InlineMath math="U^* U = I" /> を満たすことを確認する。<br />
                            まず、共役転置行列 <InlineMath math="U^*" /> を求める。
                        </p>
                        <BlockMath math="U^* = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & -i \\ -i & 1 \end{pmatrix}" />
                        <p>
                            <InlineMath math="U^* U" /> を計算する。
                        </p>
                        <BlockMath math="
                            \begin{aligned}
                            U^* U &= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & -i \\ -i & 1 \end{pmatrix} \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 1(1) + (-i)(i) & 1(i) + (-i)(1) \\ (-i)(1) + 1(i) & (-i)(i) + 1(1) \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 1 + 1 & i - i \\ -i + i & 1 + 1 \end{pmatrix} \\
                            &= \frac{1}{2} \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} \\
                            &= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I
                            \end{aligned}
                        " />
                        <p>
                            <InlineMath math="U^* U = I" /> が成り立つため、<InlineMath math="U" /> はユニタリ行列である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="10" number={8}>
                    <p>
                        内積空間 <InlineMath math="V" /> 上の任意の線形変換 <InlineMath math="T" /> に対して、合成変換 <InlineMath math="S = T^* T" /> は必ず<strong>自己随伴作用素</strong>になることを、随伴作用素の定義（<InlineMath math="\langle S\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, S\boldsymbol{y} \rangle" /> または <InlineMath math="(T_1 T_2)^* = T_2^* T_1^*" /> の性質）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="S = T^* T" /> が自己随伴であること、すなわち <InlineMath math="S^* = S" /> を示せばよい。
                        </p>
                        <p>
                            任意のベクトル <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in V" /> に対して内積 <InlineMath math="\langle S\boldsymbol{x}, \boldsymbol{y} \rangle" /> を計算する。
                        </p>
                        <BlockMath math="\langle S\boldsymbol{x}, \boldsymbol{y} \rangle = \langle (T^* T)\boldsymbol{x}, \boldsymbol{y} \rangle = \langle T^*(T\boldsymbol{x}), \boldsymbol{y} \rangle" />
                        <p>
                            随伴作用素 <InlineMath math="T^*" /> の定義 <InlineMath math="\langle T^*\boldsymbol{u}, \boldsymbol{v} \rangle = \langle \boldsymbol{u}, T\boldsymbol{v} \rangle" /> を用いて、<InlineMath math="T^*" /> を内積の右側に移動させる。
                        </p>
                        <BlockMath math="= \langle T\boldsymbol{x}, T\boldsymbol{y} \rangle" />
                        <p>
                            さらに、作用素 <InlineMath math="T" /> の定義 <InlineMath math="\langle T\boldsymbol{u}, \boldsymbol{v} \rangle = \langle \boldsymbol{u}, T^*\boldsymbol{v} \rangle" /> を用いて、<InlineMath math="T" /> を内積の右側に移動させる。
                        </p>
                        <BlockMath math="= \langle \boldsymbol{x}, T^*(T\boldsymbol{y}) \rangle = \langle \boldsymbol{x}, (T^* T)\boldsymbol{y} \rangle = \langle \boldsymbol{x}, S\boldsymbol{y} \rangle" />
                        <p>
                            したがって、<InlineMath math="\langle S\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, S\boldsymbol{y} \rangle" /> がすべての <InlineMath math="\boldsymbol{x}, \boldsymbol{y}" /> で成り立つため、<InlineMath math="S = T^* T" /> は自己随伴作用素である。
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            （別証：積の随伴の公式 <InlineMath math="(AB)^* = B^* A^*" /> および <InlineMath math="(A^*)^* = A" /> を用いると、<InlineMath math="S^* = (T^* T)^* = T^* (T^*)^* = T^* T = S" /> と直ちに示せる。）
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={9}>
                    <p>
                        自己随伴作用素（エルミート行列）<InlineMath math="T" />（<InlineMath math="T^* = T" />）の固有値は、すべて<strong>実数</strong>になることを証明せよ。<br />
                        ヒント：固有方程式 <InlineMath math="T\boldsymbol{x} = \lambda\boldsymbol{x}" /> （<InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" />）から出発し、<InlineMath math="\langle T\boldsymbol{x}, \boldsymbol{x} \rangle" /> を二通りの方法で計算して比較せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\lambda" /> を <InlineMath math="T" /> の固有値、<InlineMath math="\boldsymbol{x}" /> をその固有ベクトル（<InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" />）とする。定義より <InlineMath math="T\boldsymbol{x} = \lambda\boldsymbol{x}" /> である。
                        </p>
                        <p>
                            内積 <InlineMath math="\langle T\boldsymbol{x}, \boldsymbol{x} \rangle" /> を考える。まず左側の <InlineMath math="T\boldsymbol{x}" /> に固有値の式を代入する。
                        </p>
                        <BlockMath math="\langle T\boldsymbol{x}, \boldsymbol{x} \rangle = \langle \lambda\boldsymbol{x}, \boldsymbol{x} \rangle = \lambda \langle \boldsymbol{x}, \boldsymbol{x} \rangle = \lambda \| \boldsymbol{x} \|^2" />
                        <p>
                            一方で、<InlineMath math="T" /> は自己随伴作用素（<InlineMath math="T^* = T" />）であるため、内積の右側に <InlineMath math="T" /> を移動させることができる。
                        </p>
                        <BlockMath math="\langle T\boldsymbol{x}, \boldsymbol{x} \rangle = \langle \boldsymbol{x}, T\boldsymbol{x} \rangle" />
                        <p>
                            右側の <InlineMath math="T\boldsymbol{x}" /> に固有値の式を代入する。
                        </p>
                        <BlockMath math="= \langle \boldsymbol{x}, \lambda\boldsymbol{x} \rangle" />
                        <p>
                            複素内積の半双線形性より、第2引数のスカラー <InlineMath math="\lambda" /> は複素共役 <InlineMath math="\overline{\lambda}" /> として外に出る。
                        </p>
                        <BlockMath math="= \overline{\lambda} \langle \boldsymbol{x}, \boldsymbol{x} \rangle = \overline{\lambda} \| \boldsymbol{x} \|^2" />
                        <p>
                            両者の結果は等しくなければならないため、
                        </p>
                        <BlockMath math="\lambda \| \boldsymbol{x} \|^2 = \overline{\lambda} \| \boldsymbol{x} \|^2" />
                        <p>
                            <InlineMath math="\boldsymbol{x}" /> は固有ベクトルであるため <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> であり、<InlineMath math="\| \boldsymbol{x} \|^2 > 0" /> である。両辺を <InlineMath math="\| \boldsymbol{x} \|^2" /> で割ると、
                        </p>
                        <BlockMath math="\lambda = \overline{\lambda}" />
                        <p>
                            となる。複素数とその共役が等しいということは、その数が実数であることを意味する。よって固有値 <InlineMath math="\lambda" /> は実数である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="10" number={10}>
                    <p>
                        ユニタリ作用素（直交行列）<InlineMath math="U" />（<InlineMath math="U^* U = I" />）の固有値の<strong>絶対値は必ず 1</strong> になること（複素平面上で単位円周上にあること）を証明せよ。<br />
                        ヒント：固有方程式 <InlineMath math="U\boldsymbol{x} = \lambda\boldsymbol{x}" /> の両辺のノルムの2乗 <InlineMath math="\| U\boldsymbol{x} \|^2" /> を考えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\lambda" /> を <InlineMath math="U" /> の固有値、<InlineMath math="\boldsymbol{x}" /> をその固有ベクトル（<InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" />）とする。定義より <InlineMath math="U\boldsymbol{x} = \lambda\boldsymbol{x}" /> である。
                        </p>
                        <p>
                            両辺のベクトルのノルムの2乗を計算する。
                        </p>
                        <BlockMath math="\| U\boldsymbol{x} \|^2 = \| \lambda\boldsymbol{x} \|^2" />
                        <p>
                            右辺はノルムの性質より、
                        </p>
                        <BlockMath math="\| \lambda\boldsymbol{x} \|^2 = |\lambda|^2 \| \boldsymbol{x} \|^2" />
                        <p>
                            左辺は内積の定義と随伴作用素の性質を用いて展開する。
                        </p>
                        <BlockMath math="\| U\boldsymbol{x} \|^2 = \langle U\boldsymbol{x}, U\boldsymbol{x} \rangle = \langle \boldsymbol{x}, U^* U\boldsymbol{x} \rangle" />
                        <p>
                            <InlineMath math="U" /> はユニタリ作用素であるため <InlineMath math="U^* U = I" /> （恒等写像）である。
                        </p>
                        <BlockMath math="\langle \boldsymbol{x}, I\boldsymbol{x} \rangle = \langle \boldsymbol{x}, \boldsymbol{x} \rangle = \| \boldsymbol{x} \|^2" />
                        <p>
                            これらを等号で結ぶと、
                        </p>
                        <BlockMath math="\| \boldsymbol{x} \|^2 = |\lambda|^2 \| \boldsymbol{x} \|^2" />
                        <p>
                            <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> より <InlineMath math="\| \boldsymbol{x} \|^2 > 0" /> なので両辺をこれで割ると、
                        </p>
                        <BlockMath math="|\lambda|^2 = 1 \implies |\lambda| = 1" />
                        <p>
                            したがって、ユニタリ作用素の固有値の絶対値は必ず 1 になる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
