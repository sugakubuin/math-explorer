import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter6() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="6" number={1}>
                    <p>
                        変分法における「1 パラメータ変換群」の定義（Definition 6.1-1）と、その「無限小生成子」の定義式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            座標変換の族 <InlineMath math="\Phi_s : (x, u) \mapsto (\tilde{x}, \tilde{u})" /> が、恒等変換の存在（<InlineMath math="s=0" />）と加法性（<InlineMath math="\Phi_s \circ \Phi_t = \Phi_{s+t}" />）を満たすとき、これを <b>1 パラメータ変換群</b>と呼ぶ。
                        </p>
                        <p>
                            また、その <b>無限小生成子</b> <InlineMath math="(\xi, \phi)" /> は次の微分形式で定義される：
                            <BlockMath math="(\xi, \phi) = \frac{d}{ds}(\tilde{x}, \tilde{u})\Big|_{s=0}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={2}>
                    <p>
                        汎関数 <InlineMath math="J[u]" /> が 1 パラメータ変換群に関して「不変（Invariant）」であるとはどのような状態か、具体式を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 6.1-2 より、変換前の積分値と変換後の積分値が常に一致する状態を指す：
                            <BlockMath math="\int_{\tilde{a}}^{\tilde{b}} F(\tilde{x}, \tilde{u}, \tilde{u}') \, d\tilde{x} = \int_{a}^{b} F(x, u, u') \, dx" />
                            これは、系の物理的・幾何学的な対称性を数学的に表現したものである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={3}>
                    <p>
                        ノーターの定理（Theorem 6.2-1）による、保存量 <InlineMath math="I" /> の一般式を書き下せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            無限小生成子を <InlineMath math="(\xi, \phi)" /> とすると、保存量 <InlineMath math="I" /> は次の式で与えられる：
                            <BlockMath math="I = F \xi + F_{u'} (\phi - u' \xi) = \text{const.}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="6" number={4}>
                    <p>
                        平行移動変換 <InlineMath math="\tilde{x} = x, \quad \tilde{u} = u + s" /> の無限小生成子を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            生成子の定義に基づき：
                            <BlockMath math="\xi = \frac{d(x)}{ds}\Big|_{s=0} = 0, \quad \phi = \frac{d(u+s)}{ds}\Big|_{s=0} = 1" />
                            したがって、無限小生成子は <b><InlineMath math="(\xi, \phi) = (0, 1)" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={5}>
                    <p>
                        前問の生成子 <InlineMath math="(\xi, \phi) = (0, 1)" /> に対応するノーターの保存量を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ノーターの公式 <InlineMath math="I = F \xi + F_{u'} (\phi - u' \xi)" /> に代入すると：
                            <BlockMath math="I = F \cdot 0 + F_{u'} (1 - u' \cdot 0) = F_{u'}" />
                        </p>
                        <p>
                            これは一般化運動量 <b><InlineMath math="p = F_{u'}" /></b> そのものである。
                            系のラグランジアンが <InlineMath math="u" /> の平行移動（値のシフト）に対して不変であれば、運動量が保存されることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={6}>
                    <p>
                        ラグランジアンが陽に <InlineMath math="x" /> を含まない（自律系 <InlineMath math="F_x = 0" />）場合、ハミルトニアン <InlineMath math="H = u' F_{u'} - F" /> が保存することをノーターの定理から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 自律系は <InlineMath math="x" /> 座標の平行移動 <InlineMath math="\tilde{x} = x + s" /> に対して不変である。
                        </p>
                        <p>
                            2. この変換の生成子は <b><InlineMath math="(\xi, \phi) = (1, 0)" /></b> となる。
                        </p>
                        <p>
                            3. ノーターの公式に代入：
                            <BlockMath math="I = F \cdot 1 + F_{u'} (0 - u' \cdot 1) = F - u' F_{u'}" />
                        </p>
                        <p>
                            4. 通常、符号を反転させた <b><InlineMath math="H = u' F_{u'} - F" /></b> をハミルトニアンと呼ぶ。
                            <InlineMath math="I" /> が一定であれば <InlineMath math="H" /> も一定となり、エネルギー保存則（Example 6.2-1）が導かれる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={7}>
                    <p>
                        弧長汎関数の被積分関数 <InlineMath math="F = \sqrt{1 + u'^2}" /> は、座標の平行移動 <InlineMath math="\tilde{x} = x + s, \tilde{u} = u" /> に対して不変であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 6.1-3 に基づき：
                            <BlockMath math="\frac{d\tilde{u}}{d\tilde{x}} = \frac{du}{dx} = u'" />
                            であることを利用すると、
                            <BlockMath math="F(\tilde{u}') = \sqrt{1 + (u')^2} = F(u')" />
                            また、積分要素も <InlineMath math="d\tilde{x} = dx" /> となる。
                            したがって汎関数の値は不変であり、これは最短経路（直線）の形状が座標の原点の取り方に依存しないという幾何学的な当然の結果を反映している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="6" number={8}>
                    <p>
                        無限小生成子 <InlineMath math="(\xi, \phi) = (x, \alpha u)" /> を持つスケール変換群に対し、自由粒子のラグランジアン <InlineMath math="F = \frac{1}{2} (u')^2" /> が不変となるための条件を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. スケール変換は <InlineMath math="\tilde{x} = e^s x, \tilde{u} = e^{\alpha s} u" /> で表される（Example 6.1-2）。
                        </p>
                        <p>
                            2. 微分項の変化： <InlineMath math="\tilde{u}' = \frac{d\tilde{u}}{d\tilde{x}} = \frac{e^{\alpha s} du}{e^s dx} = e^{(\alpha - 1)s} u'" />。
                        </p>
                        <p>
                            3. ラグランジアンの変化： <InlineMath math="F(\tilde{u}') = \frac{1}{2} (e^{(\alpha - 1)s} u')^2 = e^{2\alpha - 2} F(u')" />。
                        </p>
                        <p>
                            4. 汎関数の不変性条件： <InlineMath math="F(\tilde{u}') d\tilde{x} = F(u') dx" />。
                            <BlockMath math="e^{2\alpha - 2} F \cdot (e^s dx) = e^{2\alpha - 1} F dx = F dx" />
                        </p>
                        <p>
                            5. これが任意の <InlineMath math="s" /> で成り立つには、指数部が 0、すなわち <b><InlineMath math="\alpha = 1/2" /></b> となる必要がある。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={9}>
                    <p>
                        多粒子系における空間の回転対称性は「角運動量保存則」を導く（Example 6.3-3）。
                        ここで、2 次元平面上の生成子 <InlineMath math="\xi = -u, \phi = x" /> をノーターの公式に適用する際の基本的な考え方を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 生成子 <InlineMath math="\xi = -u, \phi = x" /> は、微小な回転 <InlineMath math="\delta \theta" /> に対して座標が <InlineMath math="\delta x \approx -u \delta \theta, \delta u \approx x \delta \theta" /> と変化することを反映している。
                        </p>
                        <p>
                            2. これを自由粒子のラグランジアン（時間 <InlineMath math="t" /> を媒介変数とする形式）に適用すると、保存量 <InlineMath math="I" /> の中に <b>「位置ベクトルと運動量ベクトルの外積」</b> に相当する成分が現れる。
                        </p>
                        <p>
                            3. これが物理学における角運動量 <InlineMath math="L = \vec{r} \times \vec{p}" /> の 1 成分に対応し、空間の等方性が保存則の起源であることを数学的に保証する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="6" number={10}>
                    <p>
                        ノーターの定理が「アインシュタインから称賛された」理由について、保存法則の歴史的な成立過程を踏まえて述べよ（§6.2 備考参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. それまでの物理学では、エネルギー保存則や運動量保存則は、実験的な事実や個別の運動方程式から「たまたま導かれるもの」として扱われてきた。
                        </p>
                        <p>
                            2. ノーターは、これらの保存則が「時空そのものの対称性（一様性や等方性）」という、より根源的な幾何学的性質から <b>数学的な必然として</b> 導かれることを証明した。
                        </p>
                        <p>
                            3. この発見は、物理学の焦点を「方程式を解くこと」から「系の持つ対称性を記述すること」へと大きくシフトさせ、現代の統一理論や素粒子物理学の礎となったため、極めて高く評価されている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
