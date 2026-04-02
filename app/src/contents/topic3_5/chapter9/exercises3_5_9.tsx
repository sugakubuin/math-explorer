import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_5_Chapter9() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="9" number={1}>
                    <p>
                        弱解の定義（Definition 9.1-1）において用いられる「テスト関数」 <InlineMath math="\phi \in C_0^\infty(\Omega)" /> が満たすべき 2 つの主要な性質を挙げよ。
                    </p>
                    <ExerciseSolution>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b>無限回微分可能性</b>：<InlineMath math="\phi" /> はすべての階数で微分可能（<InlineMath math="C^\infty" />）である。</li>
                            <li><b>コンパクトな台</b>：<InlineMath math="\phi" /> が 0 でない値をとる領域が、対象とする領域 <InlineMath math="\Omega" /> の内部に含まれる有界な閉集合である。これにより、境界付近では <InlineMath math="\phi" /> およびそのすべての導関数が 0 となり、部分積分における境界項を消去できる。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={2}>
                    <p>
                        ハダマールによる「適切問題（Well-posed Problem）」の 3 つの条件をすべて挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 9.4-1 によれば、以下の 3 条件である：
                        </p>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li><b>存在</b> (Existence)：少なくとも 1 つの解が存在すること。</li>
                            <li><b>一意性</b> (Uniqueness)：解が高々 1 つであること。</li>
                            <li><b>連続依存性</b> (Stability)：入力データ（初期値や境界値）の小さな変化に対し、解の変化も小さいこと。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={3}>
                    <p>
                        楕円型方程式の弱解において、内部正則性定理（Theorem 9.2-1）が主張する内容を簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この定理は、楕円型方程式の弱解が、ソース項（強制項） <InlineMath math="f" /> の滑らかさに応じて、自動的に高い滑らかさを持つことを主張している。
                            具体的には、<InlineMath math="f" /> が <InlineMath math="C^k" /> 級であれば、弱解 <InlineMath math="u" /> は内部で <InlineMath math="C^{k+2}" /> 級となる。
                            これにより、弱解が実質的には古典解と一致することが保証される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="9" number={4}>
                    <p>
                        関数 <InlineMath math="u(x) = |x|" /> が、弱解の意味で方程式 <InlineMath math="u'' = 2\delta_0" /> を満たすことを部分積分を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            すべてのテスト関数 <InlineMath math="\phi \in C_0^\infty(\mathbb{R})" /> に対して、
                            <BlockMath math="\int_{-\infty}^{\infty} |x| \phi''(x) dx = 2\phi(0)" />
                            が成り立つことを示せばよい（Example 9.1-2 参照）。
                        </p>
                        <p>
                            積分を <InlineMath math="(-\infty, 0)" /> と <InlineMath math="(0, \infty)" /> に分ける：
                            <BlockMath math="\int_{-\infty}^0 (-x) \phi'' dx + \int_0^\infty x \phi'' dx" />
                            それぞれ部分積分を行う：
                            <BlockMath math="\begin{aligned} \text{(第1項)} &= [-x \phi']_{-\infty}^0 + \int_{-\infty}^0 \phi' dx = [0] + [\phi]_{-\infty}^0 = \phi(0) \\ \text{(第2項)} &= [x \phi']_0^\infty - \int_0^\infty \phi' dx = [0] - [\phi]_0^\infty = -(-\phi(0)) = \phi(0) \end{aligned}" />
                            （テスト関数の境界での 0 への減衰を利用した）。
                        </p>
                        <p>
                            これらを足し合わせると <InlineMath math="\phi(0) + \phi(0) = 2\phi(0)" /> となり、等式が成立する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={5}>
                    <p>
                        ハダマールの反例（Example 9.4-2）として知られる、ラプラス方程式のコーシー問題
                        <BlockMath math="\Delta u = 0, \quad u(x, 0) = 0, \ u_y(x, 0) = \frac{\varepsilon}{n} \sin(nx)" />
                        の解 <InlineMath math="u(x, y) = \frac{\varepsilon}{n^2} \sinh(ny) \sin(nx)" /> が、なぜ「連続依存性」を欠いているのか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 初期データ（<InlineMath math="y=0" /> での値）のノルムを考えると、<InlineMath math="n \to \infty" /> のとき初期速度項は一様に 0 に収束する。つまり、十分に大きな <InlineMath math="n" /> に対して、初期データは非常に小さい（誤差程度である）。
                        </p>
                        <p>
                            2. しかし、解 <InlineMath math="u(x, y)" /> に含まれる <InlineMath math="\sinh(ny)" /> 項は、<InlineMath math="y > 0" /> において <InlineMath math="n \to \infty" /> とともに指数関数的に（爆発的に）増大する。
                        </p>
                        <p>
                            3. したがって、初期データの極微小な変化が、少し離れた時刻（<InlineMath math="y > 0" />）において巨大な差を生じさせるため、安定性が破綻している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={6}>
                    <p>
                        後退熱方程式 <InlineMath math="u_t = -k u_{xx} \ (k > 0)" /> が不適切な問題である理由を、解 <InlineMath math="u(x, t) = e^{k n^2 t} \sin(nx)" /> の挙動に着目して述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 初期値 <InlineMath math="u(x, 0) = \sin(nx)" /> の大きさ（振幅）は 1 であり、<InlineMath math="n" /> によらない。
                        </p>
                        <p>
                            2. しかし、解の振幅 <InlineMath math="e^{k n^2 t}" /> は、高周波成分（大きな <InlineMath math="n" />）ほど、時間 <InlineMath math="t" /> の経過とともに極めて急速に増大する。
                        </p>
                        <p>
                            3. 現実のデータには常に高周波のノイズが含まれるため、この方程式を解こうとするとノイズが即座に爆発し、意味のある解を得ることができなくなる。
                            これはラプラスのコーシー問題と同様に、連続依存性（安定性）を欠く不適切問題である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={7}>
                    <p>
                        コーシー・コワレフスカヤの定理（Theorem 9.3-1）が保証する存在性は、「大域的」か「局所的」か。またその理由を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            この定理が保証するのは<b>「局所的」</b>な存在性（初期値の十分小さな近傍での存在）である。
                        </p>
                        <p>
                            理由は、証明において解をべき級数（Taylor 展開）として構成するため、その級数が収束する範囲内でのみ解の存在が保証されるからである。
                            物理的には、非線形な相互作用によって解が有限時間で爆発（ブロウアップ）したり、不連続な波（衝撃波）を形成したりする場合があり、解析的な解が大域的に続くとは限らない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="9" number={8}>
                    <p>
                        楕円型正則性の証明で用いられる「ブートストラップ（bootstrap）」手法について、
                        <InlineMath math="\Delta u = f" /> において <InlineMath math="f" /> が滑らかであれば <InlineMath math="u" /> も滑らかになるプロセスを概念的に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 最初、弱解 <InlineMath math="u" /> は 1 階微分が可積分な空間（<InlineMath math="H^1" />）に属すると仮定される。
                        </p>
                        <p>
                            2. 差分商による評価（エネルギー推定）を行うことで、方程式の構造から <InlineMath math="u" /> がもう 1 階分高い滑らかさ（<InlineMath math="H^2" />）を持つことが示される。
                        </p>
                        <p>
                            3. 滑らかさが向上したことにより、高次の微分に対しても同様の議論が可能になる。この「得られた滑らかさを利用してさらに高い滑らかさを示す」プロセスを繰り返すのがブートストラップである。
                        </p>
                        <p>
                            4. この繰り返しにより、<InlineMath math="f" /> が持つ微分可能性の限界まで <InlineMath math="u" /> の滑らかさが引き上げられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={9}>
                    <p>
                        1 階輸送方程式 <InlineMath math="u_t + c u_x = 0" /> において、不連続な関数 <InlineMath math="u(x, t) = f(x-ct)" />（<InlineMath math="f" /> はステップ関数など）が弱解であることを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. 弱解の定義に基づき、任意のテスト関数 <InlineMath math="\phi(x, t)" /> に対して以下の等式を考える：
                            <BlockMath math="\int \int u (\phi_t + c \phi_x) dx dt = 0" />
                        </p>
                        <p>
                            2. 変数変換 <InlineMath math="\xi = x-ct, \ \tau = t" /> を行うと、<InlineMath math="u = f(\xi)" /> となり、作用素の部分は <InlineMath math="\phi_\tau" /> に書き換わる。
                            <BlockMath math="\int \int f(\xi) \phi_\tau(\xi, \tau) d\xi d\tau = 0" />
                        </p>
                        <p>
                            3. 内側の <InlineMath math="\tau" /> に関する積分は、テスト関数のコンパクトな台の性質により、境界項が消えて 0 となる。
                        </p>
                        <p>
                            4. よって不連続な関数であっても、弱解の意味で輸送方程式を満たしている。これは物理的な「波動の伝播」を、微分不可能な初期値に対しても扱えるように拡張していることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="9" number={10}>
                    <p>
                        不適切問題（逆問題など）に対処するための手法である「正則化（Regularization）」の基本的なアイデアを、
                        最小二乗法の文脈で簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            モデルを <InlineMath math="Au = b" /> としたとき、単に <InlineMath math="\|Au - b\|^2" /> を最小化しようとすると、観測データのノイズが解 <InlineMath math="u" /> の高大な変動として現れてしまう（不安定性）。
                        </p>
                        <p>
                            正則化（例えばチコノフ正則化）では、最小化すべき目的関数にペナルティ項（拘束項）を追加する：
                            <BlockMath math="J(u) = \|Au - b\|^2 + \alpha \|u\|^2" />
                            ここで <InlineMath math="\alpha > 0" /> は正則化パラメータである。
                        </p>
                        <p>
                            この項により、解があまりに大きな値や激しい変動を持つことが抑制され、
                            データへの適合度と解の安定性のバランスを取ることで、物理的に妥当な近似解を一意に得ることが可能になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
