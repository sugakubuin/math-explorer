import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter1() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="1" number={1}>
                    <p>
                        開区間 <InlineMath math="I" /> で定義された曲線 <InlineMath math="\alpha: I \to \mathbb{R}^3" /> が正則曲線（regular curve）であるための条件を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.1-1 より、すべての時刻 <InlineMath math="t \in I" /> に対して、速度ベクトル（接ベクトル）が零ベクトルにならないこと、すなわち
                        </p>
                        <BlockMath math="\alpha'(t) \neq \mathbf{0}" />
                        <p>
                            が成り立つことが正則曲線であるための条件である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={2}>
                    <p>
                        弧長パラメータ <InlineMath math="s" /> で表された曲線 <InlineMath math="\alpha(s)" /> の単位接ベクトル <InlineMath math="T(s)" /> を求めよ。また、曲率 <InlineMath math="\kappa(s)" /> と主法線ベクトル <InlineMath math="N(s)" /> （<InlineMath math="\kappa(s) > 0" /> の場合）の定義をそれぞれ述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.2-1 および Definition 1.2-2 より、単位接ベクトル <InlineMath math="T(s)" /> は
                        </p>
                        <BlockMath math="T(s) = \alpha'(s)" />
                        <p>
                            と定義される。曲率 <InlineMath math="\kappa(s)" /> は <InlineMath math="T(s)" /> の微分ベクトル <InlineMath math="T'(s)" /> のノルムとして定義される。
                        </p>
                        <BlockMath math="\kappa(s) = |T'(s)| = |\alpha''(s)|" />
                        <p>
                            <InlineMath math="\kappa(s) > 0" /> のとき、主法線ベクトル <InlineMath math="N(s)" /> は次のように定義される。
                        </p>
                        <BlockMath math="N(s) = \frac{T'(s)}{|T'(s)|} = \frac{T'(s)}{\kappa(s)}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={3}>
                    <p>
                        曲線 <InlineMath math="\alpha(s)" /> における従法線ベクトル <InlineMath math="B(s)" /> の定義を述べよ。また、フルネ＝セレの公式 (Frenet-Serret formulas) のうち、<InlineMath math="T'(s)" /> を表す式を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 1.3-1 より、従法線ベクトル <InlineMath math="B(s)" /> は、単位接ベクトル <InlineMath math="T(s)" /> と主法線ベクトル <InlineMath math="N(s)" /> の外積として定義される。
                        </p>
                        <BlockMath math="B(s) = T(s) \times N(s)" />
                        <p>
                            Theorem 1.4-1 (フルネ＝セレの公式) より、<InlineMath math="T'(s)" /> を表す式は以下である。
                        </p>
                        <BlockMath math="T'(s) = \kappa(s) N(s)" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="1" number={4}>
                    <p>
                        円柱螺旋 <InlineMath math="\alpha(t) = (r \cos t, r \sin t, at)" /> <InlineMath math="(r > 0, a > 0)" /> について、<InlineMath math="t=0" /> から <InlineMath math="t" /> までの弧長関数 <InlineMath math="s(t)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            まず、速度ベクトル <InlineMath math="\alpha'(t)" /> を求める。
                        </p>
                        <BlockMath math="\alpha'(t) = (-r \sin t, r \cos t, a)" />
                        <p>
                            その速さ（ノルム）は、
                        </p>
                        <BlockMath math="\begin{aligned}|\alpha'(t)| &= \sqrt{(-r \sin t)^2 + (r \cos t)^2 + a^2} \\ &= \sqrt{r^2 \sin^2 t + r^2 \cos^2 t + a^2} \\ &= \sqrt{r^2 + a^2}\end{aligned}" />
                        <p>
                            となる。Definition 1.1-3 より、弧長関数 <InlineMath math="s(t)" /> はこれを積分して以下のように求まる。
                        </p>
                        <BlockMath math="s(t) = \int_{0}^{t} |\alpha'(u)| \, du = \int_{0}^{t} \sqrt{r^2 + a^2} \, du = \sqrt{r^2 + a^2} t" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={5}>
                    <p>
                        Theorem 1.4-1 (フルネ＝セレの公式) において、<InlineMath math="B(s)" /> の微分 <InlineMath math="B'(s)" /> が <InlineMath math="B'(s) = -\tau(s) N(s)" /> と表されることを確認せよ。ここで <InlineMath math="\tau(s)" /> は捩率（torsion）である。また、<InlineMath math="N'(s)" /> を <InlineMath math="T, N, B, \kappa, \tau" /> を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.3-2 より <InlineMath math="B'(s)" /> は <InlineMath math="T(s)" /> にも <InlineMath math="B(s)" /> にも直交するため、<InlineMath math="N(s)" /> に平行である。したがって、捩率の定義 (Definition 1.3-2) より、
                        </p>
                        <BlockMath math="B'(s) = -\tau(s) N(s)" />
                        <p>
                            と表される。また、Theorem 1.4-1 (フルネ＝セレの公式) の第2式によれば、主法線ベクトルの微分 <InlineMath math="N'(s)" /> は、
                        </p>
                        <BlockMath math="N'(s) = -\kappa(s) T(s) + \tau(s) B(s)" />
                        <p>
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={6}>
                    <p>
                        単位接ベクトル <InlineMath math="T(s)" />、主法線ベクトル <InlineMath math="N(s)" />、従法線ベクトル <InlineMath math="B(s)" /> は互いに直交する右手系の正規直交基底をなすことを示せ。すなわち、<InlineMath math="T \cdot T = 1" />, <InlineMath math="N \cdot N = 1" />, <InlineMath math="B \cdot B = 1" /> および互いの内積が0であることを確認せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            曲線が弧長パラメータ <InlineMath math="s" /> で定められているため、速度ベクトルである <InlineMath math="T(s) = \alpha'(s)" /> は単位ベクトルであり、<InlineMath math="T \cdot T = 1" /> を満たす。
                            曲率 <InlineMath math="\kappa(s) = |T'(s)| > 0" /> のとき、主法線ベクトル <InlineMath math="N(s)" /> は <InlineMath math="N(s) = T'(s)/\kappa(s)" /> であり、<InlineMath math="|N(s)| = 1" /> であるから <InlineMath math="N \cdot N = 1" /> である。
                        </p>
                        <p>
                            Proposition 1.2-1 より <InlineMath math="T \cdot T = 1" /> の両辺を微分すると <InlineMath math="2 T \cdot T' = 0" /> となり、<InlineMath math="T \cdot N = 0" /> を得る。
                        </p>
                        <p>
                            従法線ベクトル <InlineMath math="B(s)" /> は <InlineMath math="B = T \times N" /> として定義されるため、外積の性質から <InlineMath math="B" /> は <InlineMath math="T" /> および <InlineMath math="N" /> の両方に直交し（<InlineMath math="B \cdot T = 0" />, <InlineMath math="B \cdot N = 0" />）、<InlineMath math="|B| = |T||N|\sin(\pi/2) = 1" /> となるため <InlineMath math="B \cdot B = 1" /> である。
                            以上より、<InlineMath math="\{T(s), N(s), B(s)\}" /> は正規直交基底をなす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={7}>
                    <p>
                        空間曲線 <InlineMath math="\alpha(s)" /> の<InlineMath math="s" /> は弧長パラメータとし、その曲率 <InlineMath math="\kappa(s)" /> を正とする。<InlineMath math="\alpha''(s)" /> および <InlineMath math="\alpha'''(s)" /> を <InlineMath math="T, N, B, \kappa, \tau" /> とその微分を用いて表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\alpha'(s) = T(s)" /> である。これを微分してフルネ＝セレの公式を用いると、
                        </p>
                        <BlockMath math="\alpha''(s) = T'(s) = \kappa(s) N(s)" />
                        <p>
                            となる。さらに微分して積の微分法則とフルネ＝セレの公式 <InlineMath math="N'(s) = -\kappa(s)T(s) + \tau(s)B(s)" /> を用いると、
                        </p>
                        <BlockMath math="\begin{aligned}\alpha'''(s) &= \frac{d}{ds}(\kappa N) \\ &= \kappa' N + \kappa N' \\ &= \kappa' N + \kappa (-\kappa T + \tau B) \\ &= -\kappa^2 T + \kappa' N + \kappa \tau B\end{aligned}" />
                        <p>
                            を得る。（変数の <InlineMath math="(s)" /> は省略して表記した。）
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="1" number={8}>
                    <p>
                        弧長パラメータ <InlineMath math="s" /> で表された曲線 <InlineMath math="\alpha(s)" /> について、すべての <InlineMath math="s" /> で曲率が <InlineMath math="\kappa(s) \equiv 0" /> であるならば、この曲線は直線であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            曲率の定義より、<InlineMath math="\kappa(s) = |T'(s)| = |\alpha''(s)|" /> である。
                            すべての <InlineMath math="s" /> で <InlineMath math="\kappa(s) \equiv 0" /> と仮定すると、
                        </p>
                        <BlockMath math="\alpha''(s) = \mathbf{0}" />
                        <p>
                            が成り立つ。この式の両辺を <InlineMath math="s" /> について積分すると、定数ベクトル <InlineMath math="\mathbf{v}" /> を用いて
                        </p>
                        <BlockMath math="\alpha'(s) = \mathbf{v}" />
                        <p>
                            となる。<InlineMath math="s" /> は弧長パラメータであるため、<InlineMath math="|\alpha'(s)| = 1" /> であり、<InlineMath math="\mathbf{v} \neq \mathbf{0}" /> かつ <InlineMath math="|\mathbf{v}| = 1" /> を満たす。
                            さらに積分すると、定数ベクトル <InlineMath math="\mathbf{p}" /> を用いて
                        </p>
                        <BlockMath math="\alpha(s) = s\mathbf{v} + \mathbf{p}" />
                        <p>
                            を得る。これは、点 <InlineMath math="\mathbf{p}" /> を通り、方向ベクトル <InlineMath math="\mathbf{v}" /> を持つ直線の方程式に他ならない。
                            よって、曲線 <InlineMath math="\alpha(s)" /> は直線である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={9}>
                    <p>
                        弧長パラメータ <InlineMath math="s" /> で表された曲線 <InlineMath math="\alpha(s)" /> について、すべての <InlineMath math="s" /> で曲率 <InlineMath math="\kappa(s) > 0" /> が成り立つとする。このとき、すべての <InlineMath math="s" /> で捩率が <InlineMath math="\tau(s) \equiv 0" /> であるならば、この曲線は平面曲線になることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            捩率 <InlineMath math="\tau(s)" /> は、フルネ＝セレの公式に従い <InlineMath math="B'(s) = -\tau(s) N(s)" /> と表される関係から定義される。
                            すべての <InlineMath math="s" /> で <InlineMath math="\tau(s) \equiv 0" /> と仮定すると、
                        </p>
                        <BlockMath math="B'(s) = \mathbf{0}" />
                        <p>
                            が成り立つ。これを積分すると、従法線ベクトル <InlineMath math="B(s)" /> は定数ベクトル <InlineMath math="\mathbf{c}" /> (<InlineMath math="|\mathbf{c}| = 1" />) に等しくなる。
                        </p>
                        <BlockMath math="B(s) = \mathbf{c}" />
                        <p>
                            曲線上の点 <InlineMath math="\alpha(s)" /> と固定されたベクトル <InlineMath math="\mathbf{c}" /> の内積を <InlineMath math="s" /> について微分することを考える。積分の変数と微分公式を用いると、
                        </p>
                        <BlockMath math="\frac{d}{ds}(\alpha(s) \cdot \mathbf{c}) = \alpha'(s) \cdot \mathbf{c} = T(s) \cdot B(s)" />
                        <p>
                            基底の直交性により、常に <InlineMath math="T(s) \cdot B(s) = 0" /> である。したがって、
                        </p>
                        <BlockMath math="\frac{d}{ds}(\alpha(s) \cdot \mathbf{c}) = 0" />
                        <p>
                            これを積分すると、定数 <InlineMath math="d" /> が存在して
                        </p>
                        <BlockMath math="\alpha(s) \cdot \mathbf{c} = d" />
                        <p>
                            となる。これは、曲線 <InlineMath math="\alpha(s)" /> が法線ベクトル <InlineMath math="\mathbf{c}" />、原点からの符号付き距離が <InlineMath math="d" /> であるような平面上に完全に含まれていることを示している。よって、曲線は平面曲線である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="1" number={10}>
                    <p>
                        弧長パラメータ <InlineMath math="s" /> で表された曲線 <InlineMath math="\alpha(s)" /> が、すべての <InlineMath math="s" /> において、原点を中心とする半径 <InlineMath math="r > 0" /> の球面上にあるとする。すなわち <InlineMath math="\alpha(s) \cdot \alpha(s) = r^2" /> を満たす。このとき、曲線の曲率 <InlineMath math="\kappa(s)" /> は常に <InlineMath math="\kappa(s) \geq \frac{1}{r}" /> を満たすことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            仮定より、すべての <InlineMath math="s" /> について
                        </p>
                        <BlockMath math="\alpha(s) \cdot \alpha(s) = r^2" />
                        <p>
                            が成り立つ。両辺を <InlineMath math="s" /> で微分すると、
                        </p>
                        <BlockMath math="2\alpha'(s) \cdot \alpha(s) = 0 \implies T(s) \cdot \alpha(s) = 0" />
                        <p>
                            となる。これは位置ベクトル <InlineMath math="\alpha(s)" /> が常に接ベクトル <InlineMath math="T(s)" /> と直交することを意味する。
                            さらに両辺を <InlineMath math="s" /> で微分すると、
                        </p>
                        <BlockMath math="T'(s) \cdot \alpha(s) + T(s) \cdot \alpha'(s) = 0" />
                        <p>
                            ここで <InlineMath math="\alpha'(s) = T(s)" /> であり、<InlineMath math="T(s) \cdot T(s) = 1" /> であるから、また <InlineMath math="T'(s) = \kappa(s) N(s)" /> を用いると、
                        </p>
                        <BlockMath math="(\kappa(s) N(s)) \cdot \alpha(s) + 1 = 0 \implies \kappa(s) (N(s) \cdot \alpha(s)) = -1" />
                        <p>
                            となる。両辺の絶対値をとると、
                        </p>
                        <BlockMath math="\kappa(s) |N(s) \cdot \alpha(s)| = 1" />
                        <p>
                            ここで、コーシー・シュワルツの不等式により
                        </p>
                        <BlockMath math="|N(s) \cdot \alpha(s)| \leq |N(s)| |\alpha(s)| = 1 \cdot r = r" />
                        <p>
                            が成り立つ。したがって、
                        </p>
                        <BlockMath math="1 = \kappa(s) |N(s) \cdot \alpha(s)| \leq \kappa(s) r" />
                        <p>
                            <InlineMath math="r > 0" /> であるため、両辺を <InlineMath math="r" /> で割ると
                        </p>
                        <BlockMath math="\kappa(s) \geq \frac{1}{r}" />
                        <p>
                            を得る。よって題意は示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
