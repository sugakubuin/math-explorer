import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_6_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') dx" /> に対する第二変分 <InlineMath math="\delta^2 J" /> の積分形式の公式を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.1-1 より：
                            <BlockMath math="\delta^2 J[u; \eta] = \int_a^b (F_{uu} \eta^2 + 2F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2) dx" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        弱極小のための局所的な必要条件である「ルジャンドル条件（Theorem 4.2-1）」を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            停留関数 <InlineMath math="u^*" /> において、全域で
                            <BlockMath math="F_{u'u'}(x, u^*, (u^*)') \ge 0" />
                            が成立することである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        「弱極小（Weak Minimum）」と「強極小（Strong Minimum）」の定義の違いを、変分方向 <InlineMath math="\eta" /> およびその導関数 <InlineMath math="\eta'" /> の大きさの観点から簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><b>弱極小</b>: <InlineMath math="\eta" /> だけでなく、その導関数 <b><InlineMath math="\eta'" /> も十分に小さい</b> 範囲での極小性（§4.1 備考）。</li>
                            <li><b>強極小</b>: 導関数の大きさに依存せず、<b><InlineMath math="\eta" /> 自体が小さい</b> 範囲全体（ギザギザな曲線も含む）での極小性。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        ラグランジアン <InlineMath math="F = \frac{1}{2}(u')^2 - \frac{1}{2}u^2" /> に対する第二変分計算せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 2 階偏導関数を計算する：
                            <BlockMath math="F_{uu} = -1, \quad F_{uu'} = 0, \quad F_{u'u'} = 1" />
                        </p>
                        <p>
                            2. 公式（Proposition 4.1-1）に代入する：
                            <BlockMath math="\delta^2 J[u; \eta] = \int_a^b ((\eta')^2 - \eta^2) dx" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        ラグランジアン <InlineMath math="F = (u')^4" /> に対して、停留関数 <InlineMath math="u^* = mx + n" /> がルジャンドル条件（局所的な極小条件）を満たすか判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <InlineMath math="F_{u'}" /> を計算する： <InlineMath math="F_{u'} = 4(u')^3" />。
                        </p>
                        <p>
                            2. <InlineMath math="F_{u'u'}" /> を計算する： <InlineMath math="F_{u'u'} = 12(u')^2" />。
                        </p>
                        <p>
                            3. 停留関数上では <InlineMath math="u' = m" /> なので、<InlineMath math="F_{u'u'} = 12m^2" /> となる。
                        </p>
                        <p>
                            4. <InlineMath math="m \neq 0" /> であれば、常に <InlineMath math="F_{u'u'} > 0" /> となり、ルジャンドル条件（Theorem 4.2-1）を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        ヤコビ方程式（Definition 4.3-1）
                        <BlockMath math="\frac{d}{dx} (F_{u'u'} \eta') - \left( F_{uu} - \frac{d}{dx} F_{uu'} \right) \eta = 0" />
                        において、ラグランジアンが <InlineMath math="F = u'^2 / 2 - u^2 / 2" /> のときの具体的方程式を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 係数を計算する：
                            <InlineMath math="F_{u'u'} = 1, \ F_{uu} = -1, \ F_{uu'} = 0" />。
                        </p>
                        <p>
                            2. 式に代入する：
                            <BlockMath math="\frac{d}{dx} (1 \cdot \eta') - (-1 - 0) \eta = \eta'' + \eta = 0" />
                        </p>
                        <p>
                            したがって、ヤコビ方程式は <b><InlineMath math="\eta'' + \eta = 0" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        前問で求めたヤコビ方程式 <InlineMath math="\eta'' + \eta = 0" /> を用いて、区間 <InlineMath math="[0, L]" /> 上での停留関数の安定性を議論せよ。特に、共役点が現れる境界値 <InlineMath math="L" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ヤコビ方程式の一般解は <InlineMath math="\eta(x) = A \sin x + B \cos x" /> である。
                        </p>
                        <p>
                            2. 左端条件 <InlineMath math="\eta(0) = 0" /> より、<InlineMath math="B = 0" />。よって <InlineMath math="\eta(x) = A \sin x" />。
                        </p>
                        <p>
                            3. 共役点は、<InlineMath math="x = a" /> 以外で <InlineMath math="\eta(x) = 0" /> となる点である（Definition 4.3-2）。
                        </p>
                        <p>
                            4. <InlineMath math="\sin x = 0" /> となる最小の正の点は <b><InlineMath math="x = \pi" /></b> である。
                        </p>
                        <p>
                            5. したがって、区間の長さ <b><InlineMath math="L" /> が <InlineMath math="\pi" /> を超えると</b>、共役点が含まれることになり、ヤコビの条件（Theorem 4.3-1）により停留関数はもはや極小を与えなくなる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        停留関数 <InlineMath math="u^*" /> が強極小を与えるための必要条件が「区間内部に共役点が存在しないこと」であることの論理的根拠（Theorem 4.3-1 の証明のスケッチ）を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            もし区間内部に共役点 <InlineMath math="\bar{a} \in (a, b)" /> が存在する場合、区間 <InlineMath math="[a, \bar{a}]" /> でヤコビ方程式を満たし端点で 0 となる変分 <InlineMath math="\eta" /> を構成できる。
                        </p>
                        <p>
                            この変分方向（および <InlineMath math="\bar{a}" /> 以降を 0 と延長したもの）に沿った第二変分 <InlineMath math="\delta^2 J" /> は 0 となるが、この「不自然な」変分方向をさらにわずかに修正して滑らかにすることで、<b>第二変分を負（<InlineMath math="\delta^2 J < 0" />）にすることが数学的に可能となる</b>。
                        </p>
                        <p>
                            これは停留関数の極小性と矛盾するため、区間内に共役点が存在しないことが必要となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        球面上の測地線（大円弧）において、共役点を超えた経路が最短でない理由を、北極から出発して南極を超えた場合を例に、具体的に幾何学的な観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 4.3-2 に基づき：
                        </p>
                        <ul className="list-decimal list-inside space-y-2 mt-2">
                            <li>北極を出発したすべての経線（最短経路の候補）は南極（共役点）で一点に集まる。</li>
                            <li>南極に到達するまでは、出発した経線は一意な最短ルートを形成している。</li>
                            <li>しかし、南極を超えてさらに進むと、南極に集まっていた「他の経線」を利用して、地球の反対側を通った方が距離が短くなる。</li>
                            <li>つまり、共役点を超えることは「別の同等、あるいはより優れた停留関数の族」に主役が奪われることを意味し、元の経路の優位性（安定性）が崩壊するため、最短ではなくなる。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        ラグランジアンが未知関数 <InlineMath math="u" /> にのみ依存し、その導関数 <InlineMath math="u'" /> には高々 1 次まで（<InlineMath math="F = A(x, u) + B(x, u) u'" />）しか含まない場合、第二変分による極判定が困難になる理由を、ルジャンドル条件の観点から考察せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. ラグランジアンが <InlineMath math="u'" /> について線形（1 次）であるとき、2 階偏導関数 <b><InlineMath math="F_{u'u'}" /> は常に 0 となる</b>。
                        </p>
                        <p>
                            2. このとき、ルジャンドル条件（Theorem 4.2-1）は <InlineMath math="0 \ge 0" /> となり、条件をギリギリ満たしてはいるが、停留条件だけでは極小か極大かを判定できない。
                        </p>
                        <p>
                            3. 第二変分の主要項である <InlineMath math="F_{u'u'}(\eta')^2" /> が消失するため、安定性の判定は高次の変分（Example 4.2-2 参照）や、端点移動などの別の要因に完全にゆだねられることになり、通常の意味での「安定な（弱極小の）解」が構成しにくくなる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
