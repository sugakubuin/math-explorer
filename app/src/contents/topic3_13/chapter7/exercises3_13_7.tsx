import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter7() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="7" number={1}>
                    <p>
                        曲面上の曲線 <InlineMath math="\alpha(s)" /> の加速度ベクトル <InlineMath math="\alpha''(s)" /> の「接平面方向の成分」の大きさを何と呼ぶか。また、測地線におけるその値はいくらか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.1-1 より、加速度ベクトルの接成分の大きさは<strong>測地曲率（geodesic curvature）</strong> <InlineMath math="\kappa_g" /> と呼ばれる。
                            測地線は加速度ベクトルが法線方向のみを持つ曲線であるため、その接成分は 0 である。したがって、測地線における測地曲率は常に <InlineMath math="\kappa_g = 0" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={2}>
                    <p>
                        オイラー標数（Euler characteristic） <InlineMath math="\chi(S)" /> を、多面体分割された曲面の頂点数 <InlineMath math="V" />、辺数 <InlineMath math="E" />、面数 <InlineMath math="F" /> を用いて表せ。また、球面とトーラスのオイラー標数をそれぞれ答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 7.3-1 および Example 7.3-2 参照。
                            オイラー標数は次のように定義される。
                        </p>
                        <BlockMath math="\chi(S) = V - E + F" />
                        <p>
                            球面のオイラー標数は <strong>2</strong>、トーラスのオイラー標数は <strong>0</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={3}>
                    <p>
                        境界を持たないコンパクトな向き付け可能曲面 <InlineMath math="S" /> に対する、ガウス曲率 <InlineMath math="K" /> の積分とオイラー標数 <InlineMath math="\chi(S)" /> を結ぶ「大域版ガウス＝ボンネの定理（Global Gauss-Bonnet Theorem）」の公式を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.3-1 より、公式は次の通りである。
                        </p>
                        <BlockMath math="\iint_S K \, dA = 2\pi \chi(S)" />
                        <p>
                            この定理は、曲面の幾何学的な量（曲率の積分）が、曲面のトポロジー（オイラー標数）によって完全に決定されるという非常に深い関係を示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="7" number={4}>
                    <p>
                        半径 <InlineMath math="1" /> の球面上の緯線（赤道からの北緯 <InlineMath math="\phi" /> の円）の測地曲率 <InlineMath math="\kappa_g" /> を求めよ。ただし赤道（<InlineMath math="\phi=0" />）においては測地曲率が 0 となることに注意せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.1-1 参照。
                            半径 1 の球面において、北緯 <InlineMath math="\phi" /> の緯線の半径は <InlineMath math="\cos \phi" /> である。
                            空間内での曲率（通常の曲率）は半径の逆数なので <InlineMath math="\kappa = 1/\cos \phi" /> となる。
                            緯線の加速度ベクトルは中心を指すが、曲面の法線方向（球の中心から外側）とは角度 <InlineMath math="\phi" /> をなしている。
                            測地曲率は、この加速度の接成分であるから、
                        </p>
                        <BlockMath math="\kappa_g = \kappa \sin \phi = \frac{1}{\cos \phi} \sin \phi = \tan \phi" />
                        <p>
                            となる。赤道（<InlineMath math="\phi=0" />）では <InlineMath math="\tan 0 = 0" /> であり、測地線（大円）となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={5}>
                    <p>
                        ガウス曲率が一定値 <InlineMath math="K" /> である曲面上の測地三角形（辺がすべて測地線）において、内角を <InlineMath math="\alpha, \beta, \gamma" />、面積を <InlineMath math="A" /> としたとき、局所版ガウス＝ボンネの定理を用いて内角の和の関係式を導け。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 7.2-1 より、測地三角形に対する関係式は次のようになる。辺の測地曲率は 0 である（<InlineMath math="\int \kappa_g ds = 0" />）ので、
                        </p>
                        <BlockMath math="\sum_{i=1}^3 \text{（外角）}_i + \iint K \, dA = 2\pi" />
                        <p>
                            内角と外角の関係は <InlineMath math="\text{外角}_i = \pi - \text{内角}_i" /> であるから、
                        </p>
                        <BlockMath math="(\pi - \alpha) + (\pi - \beta) + (\pi - \gamma) + KA = 2\pi" />
                        <p>
                            これを整理すると、
                        </p>
                        <BlockMath math="3\pi - (\alpha + \beta + \gamma) + KA = 2\pi \implies \alpha + \beta + \gamma = \pi + KA" />
                        <p>
                            を得る。特に <InlineMath math="K > 0" />（球面）では内角の和は <InlineMath math="\pi" /> より大きく、<InlineMath math="K < 0" />（双曲面）では <InlineMath math="\pi" /> より小さくなる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={6}>
                    <p>
                        半径 <InlineMath math="R" /> の球面における全曲率積分 <InlineMath math="\iint_S K \, dA" /> が <InlineMath math="4\pi" /> になることを、球面のガウス曲率 <InlineMath math="K = 1/R^2" /> と表面積を用いて計算し、大域版ガウス＝ボンネの定理の結果と一致することを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 7.3-1 参照。
                            半径 <InlineMath math="R" /> の球面のガウス曲率は至る所 <InlineMath math="K = 1/R^2" /> である。
                            したがって、全曲率積分は
                        </p>
                        <BlockMath math="\iint_S K \, dA = \iint_S \frac{1}{R^2} \, dA = \frac{1}{R^2} \iint_S dA = \frac{1}{R^2} \cdot (\text{球の表面積})" />
                        <p>
                            球の表面積は <InlineMath math="4\pi R^2" /> なので、
                        </p>
                        <BlockMath math="\iint_S K \, dA = \frac{1}{R^2} \cdot 4\pi R^2 = 4\pi" />
                        <p>
                            大域版ガウス＝ボンネの定理によれば <InlineMath math="\iint K \, dA = 2\pi \chi(S)" /> であり、球面のオイラー標数は <InlineMath math="\chi(S) = 2" /> なので
                        </p>
                        <BlockMath math="2\pi \cdot 2 = 4\pi" />
                        <p>
                            となり、計算結果と定理の結果が一致する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={7}>
                    <p>
                        属種（genus）が <InlineMath math="g" />（穴の数が <InlineMath math="g" /> 個）である向き付け可能コンパクト曲面のオイラー標数が <InlineMath math="\chi(S) = 2(1-g)" /> で与えられることを用い、穴を 2 つ持つ曲面（ダブル・トーラス）の全曲率積分を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義より、ダブル・トーラスの属種は <InlineMath math="g = 2" /> である。
                            したがって、オイラー標数は
                        </p>
                        <BlockMath math="\chi(S) = 2(1 - 2) = -2" />
                        <p>
                            となる。大域版ガウス＝ボンネの定理（Theorem 7.3-1）により、全曲率積分は
                        </p>
                        <BlockMath math="\iint_S K \, dA = 2\pi \chi(S) = 2\pi \cdot (-2) = -4\pi" />
                        <p>
                            である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="7" number={8}>
                    <p>
                        境界曲線 <InlineMath math="\partial D" /> を持つ単連結な領域 <InlineMath math="D" /> において、境界が滑らかな測地線であるとする。このとき、領域 <InlineMath math="D" /> 内のガウス曲率の積分が次のように表されることを証明せよ。
                        <BlockMath math="\iint_D K \, dA = 2\pi" />
                    </p>
                    <ExerciseSolution>
                        <p>
                            局所版ガウス＝ボンネの定理（Theorem 7.2-1）を用いる。
                            境界曲線 <InlineMath math="C = \partial D" /> が 1 つの滑らかな曲線である場合、頂点（角）は存在しない。
                            また、境界が測地線であるため、測地曲率は至る所 <InlineMath math="\kappa_g = 0" /> である。
                            領域 <InlineMath math="D" /> が単連結（オイラー標数 1）であることに注意すると、定理の式は次のようになる。
                        </p>
                        <BlockMath math="\int_C \kappa_g \, ds + \iint_D K \, dA = 2\pi \chi(D)" />
                        <p>
                            左辺第一項は積分範囲で <InlineMath math="\kappa_g = 0" /> なので消滅する。右辺は <InlineMath math="\chi(D) = 1" /> なので <InlineMath math="2\pi \cdot 1 = 2\pi" /> となる。
                            したがって、
                        </p>
                        <BlockMath math="\iint_D K \, dA = 2\pi" />
                        <p>
                            が示された。（これは、例えば球面の半分を大円で区切った領域などに相当する。）
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={9}>
                    <p>
                        コンパクトな曲面 <InlineMath math="S" /> のすべての点においてガウス曲率が正（<InlineMath math="K > 0" />）であるならば、この曲面はトーラス（属種 1）ではあり得ないことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            大域版ガウス＝ボンネの定理（Theorem 7.3-1）により、全曲率積分とオイラー標数の間には <InlineMath math="\iint_S K \, dA = 2\pi \chi(S)" /> という関係がある。
                            仮定よりすべての点で <InlineMath math="K > 0" /> であるから、その積分値は必ず正となる。
                        </p>
                        <BlockMath math="\iint_S K \, dA > 0" />
                        <p>
                            したがって、オイラー標数 <InlineMath math="\chi(S)" /> も正でなければならない。
                        </p>
                        <BlockMath math="\chi(S) > 0" />
                        <p>
                            一方、トーラスのオイラー標数は <InlineMath math="\chi(\text{Torus}) = 0" /> である（Example 7.3-2）。
                            これは <InlineMath math="\chi(S) > 0" /> と矛盾する。
                            よって、すべての点で <InlineMath math="K > 0" /> である曲面はトーラスにはなり得ない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="7" number={10}>
                    <p>
                        あるコンパクト曲面 <InlineMath math="S" /> のガウス曲率が至る所負（<InlineMath math="K < 0" />）であるとする。このとき、この曲面の属種（穴の数） <InlineMath math="g" /> は 2 以上であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            命題 7.7 関連のトポロジー的帰結（Corollary 7.3-1 参照）。
                            大域版ガウス＝ボンネの定理より、<InlineMath math="\iint_S K \, dA = 2\pi \chi(S)" /> である。
                            仮定 <InlineMath math="K < 0" /> より、左辺の積分値は負である。
                        </p>
                        <BlockMath math="\iint_S K \, dA < 0" />
                        <p>
                            ゆえに <InlineMath math="\chi(S) < 0" /> である。
                            属種 <InlineMath math="g" /> を用いたオイラー標数の式 <InlineMath math="\chi(S) = 2(1-g)" /> より、
                        </p>
                        <BlockMath math="2(1-g) < 0 \implies 1-g < 0 \implies g > 1" />
                        <p>
                            属種 <InlineMath math="g" /> は整数であるから、<InlineMath math="g \geq 2" /> である。
                            したがって、常に負のガウス曲率を持つコンパクト曲面は、少なくとも 2 つ以上の穴を持っている必要がある。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
