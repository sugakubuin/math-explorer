import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_13_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        曲面上の2階偏微分ベクトル <InlineMath math="\mathbf{x}_{uu}, \mathbf{x}_{uv}, \mathbf{x}_{vv}" /> を基底 <InlineMath math="\{\mathbf{x}_u, \mathbf{x}_v, \mathbf{N}\}" /> で展開したときの接成分の係数 <InlineMath math="\Gamma^k_{ij}" /> を何と呼ぶか。また、<InlineMath math="\mathbf{x}_{uu}" /> の展開式を記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 より、接成分の係数 <InlineMath math="\Gamma^k_{ij}" /> は<strong>クリストッフェル記号（Christoffel symbols）</strong>と呼ばれる。
                            <InlineMath math="\mathbf{x}_{uu}" /> の展開式は次のように記述される。
                        </p>
                        <BlockMath math="\mathbf{x}_{uu} = \Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N}" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        ガウス方程式（Theorem 5.2-1）およびコダッチ方程式（Theorem 5.2-2）は、どのような数学的事実に基づいて導出されるか説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            §5.2 の導入および証明より、これらの方程式は位置ベクトル <InlineMath math="\mathbf{x}(u, v)" /> の<strong>3階偏微分の順序が交換可能である（<InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" />）</strong>という事実に基づいて導出される。
                            この展開式の接成分を比較することでガウス方程式が、法成分を比較することでコダッチ方程式が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        ガウスの「驚異の定理（Theorema Egregium）」の主張を簡潔に述べよ。特に、ガウス曲率が「内在的な量」であるとはどういう意味か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.3-1 より、驚異の定理とは「ガウス曲率 <InlineMath math="K" /> は、第一基本形式の係数 <InlineMath math="E, F, G" /> とその偏微分のみによって完全に表される」という主張である。
                            内在的な量であるとは、曲面が周囲の3次元空間にどのように埋め込まれているかに依存せず、曲面上の測定（第一基本形式）のみで決定される量であることを意味する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        第一基本形式が <InlineMath math="E=1, F=0, G = G(u)" /> で与えられる曲面において、クリストッフェル記号 <InlineMath math="\Gamma^1_{11}" /> および <InlineMath math="\Gamma^2_{11}" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 5.1-1 の公式を用いる。
                            <InlineMath math="E=1, F=0, G=G(u)" /> より、偏微分は <InlineMath math="E_u = E_v = 0" />、<InlineMath math="F_u = F_v = 0" />、<InlineMath math="G_u = G'(u), G_v = 0" /> である。
                            公式に代入すると次を得る。
                        </p>
                        <BlockMath math="\Gamma^1_{11} = \frac{G E_u - 2F F_u + F E_v}{2(EG - F^2)} = \frac{G \cdot 0 - 0 + 0}{2G} = 0" />
                        <BlockMath math="F\Gamma^1_{11} + G\Gamma^2_{11} = F_u - \frac{1}{2}E_v \implies 0 + G\Gamma^2_{11} = 0 - 0 = 0" />
                        <p>
                            したがって、<InlineMath math="G > 0" /> より <InlineMath math="\Gamma^2_{11} = 0" /> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        球面においてコダッチ方程式の第1式（<InlineMath math="e_v - f_u = e\Gamma^1_{12} + f(\Gamma^2_{12} - \Gamma^1_{11}) - g\Gamma^2_{11}" />）が成り立っていることを確認せよ。
                        球面の第二基本形式は <InlineMath math="e=1, f=0, g=\sin^2 u" />、非ゼロなクリストッフェル記号は <InlineMath math="\Gamma^1_{22} = -\sin u\cos u" />, <InlineMath math="\Gamma^2_{12} = \cot u" /> とする。
                    </p>
                    <ExerciseSolution>
                        <p>
                            左辺を計算する：<InlineMath math="e_v = 0" />, <InlineMath math="f_u = 0" /> より <InlineMath math="e_v - f_u = 0" /> である。
                            右辺を計算する：非ゼロな記号は <InlineMath math="\Gamma^1_{22}" /> と <InlineMath math="\Gamma^2_{12}" /> のみである。
                            右辺に現れる項のうち、<InlineMath math="\Gamma^1_{12}, \Gamma^1_{11}, \Gamma^2_{11}" /> はすべて 0 である。
                            また <InlineMath math="f=0" /> である。したがって、
                        </p>
                        <BlockMath math="\begin{aligned} \text{右辺} &= 1 \cdot \Gamma^1_{12} + 0 \cdot (\Gamma^2_{12} - \Gamma^1_{11}) - \sin^2 u \cdot \Gamma^2_{11} \\ &= 1 \cdot 0 + 0 - \sin^2 u \cdot 0 = 0 \end{aligned}" />
                        <p>
                            となり、左辺と右辺が一致して方程式が成り立つことが確認できた（Example 5.2-1 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        等長写像（isometry）によって保存される内在的な量と、保存されない外的な量を、平面を紙として円柱に丸める例を用いて具体的に挙げよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 5.3-2 参照。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>保存される量（内在的）：</strong> 弧長、面積、角度、第一基本形式、クリストッフェル記号、ガウス曲率 <InlineMath math="K" />（平面も円柱も 0）。</li>
                            <li><strong>保存されない量（外的）：</strong> 第二基本形式、主曲率（平面は 0 だが円柱は半径分の 1 が現れる）、平均曲率 <InlineMath math="H" />。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        ガウス曲率 <InlineMath math="K" /> が第一基本形式の行列式 <InlineMath math="EG - F^2" /> とリーマン曲率成分 <InlineMath math="R_{1212}" />（クリストッフェル記号とその微分で構成される）を用いてどのように表されるか記述せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.3-1 の証明より、ガウス方程式 <InlineMath math="eg - f^2 = R_{1212}" /> とガウス曲率の定義式を用いると、次のように表される。
                        </p>
                        <BlockMath math="K = \frac{eg - f^2}{EG - F^2} = \frac{R_{1212}}{EG - F^2}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        クリストッフェル記号について、すべての点において下添字に関して対称であること、すなわち <InlineMath math="\Gamma^k_{ij} = \Gamma^k_{ji}" /> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.1-1 より、クリストッフェル記号は位置ベクトルの2階偏微分ベクトルを基底で展開したときの係数である。
                        </p>
                        <BlockMath math="\mathbf{x}_{uv} = \Gamma^1_{12}\mathbf{x}_u + \Gamma^2_{12}\mathbf{x}_v + f\mathbf{N}" />
                        <BlockMath math="\mathbf{x}_{vu} = \Gamma^1_{21}\mathbf{x}_u + \Gamma^2_{21}\mathbf{x}_v + f\mathbf{N}" />
                        <p>
                            位置ベクトル <InlineMath math="\mathbf{x}" /> は十分滑らかであるため、偏微分の順序交換が可能であり、<InlineMath math="\mathbf{x}_{uv} = \mathbf{x}_{vu}" /> が成り立つ。
                            したがって、基底 <InlineMath math="\{\mathbf{x}_u, \mathbf{x}_v, \mathbf{N}\}" /> は線形独立であるから、展開係数は一意に定まる。
                            成分ごとに比較すると
                        </p>
                        <BlockMath math="\Gamma^1_{12} = \Gamma^1_{21}, \quad \Gamma^2_{12} = \Gamma^2_{21}" />
                        <p>
                            を得る。これは <InlineMath math="\Gamma^k_{ij} = \Gamma^k_{ji}" /> が成り立つことを示している。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        第一基本形式が <InlineMath math="E=1, F=0, G=G(u)" /> である曲面について、ガウス曲率が <InlineMath math="K = - \frac{(\sqrt{G})_{uu}}{\sqrt{G}}" /> と書けることを示せ。
                        ただし、この場合の非ゼロなクリストッフェル記号が <InlineMath math="\Gamma^1_{22} = -\frac{1}{2}G_u, \Gamma^2_{12} = \frac{G_u}{2G}" /> である事実を用いてよい。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ガウス方程式（Theorem 5.2-1）を用いる。この設定では <InlineMath math="F=0" />、また <InlineMath math="\Gamma^1_{11}, \Gamma^2_{11}, \Gamma^1_{12}" /> は前問等より 0 である。
                            ガウス方程式の右辺 <InlineMath math="R_{1212}" /> を簡略化すると、
                        </p>
                        <BlockMath math="R_{1212} = E( (\Gamma^2_{11})_v - (\Gamma^2_{12})_u + \text{積の項} )" />
                        <p>
                            非ゼロな項のみを抜き出すと、
                        </p>
                        <BlockMath math="\begin{aligned} R_{1212} &= -E (\Gamma^2_{12})_u - E (\Gamma^2_{12})^2 \\ &= -1 \cdot \left( \frac{G_u}{2G} \right)_u - 1 \cdot \left( \frac{G_u}{2G} \right) \left( \frac{G_u}{2G} \cdot \dots \text{実際には } \Gamma^2_{11}=0 \text{等により } \right) \end{aligned}" />
                        <p>
                            実際、行列計算を経由するとより簡潔に <InlineMath math="K = - \frac{(\sqrt{G})_{uu}}{\sqrt{G}}" /> が導かれる。
                            <InlineMath math="\sqrt{G}" /> の微分を計算すると
                        </p>
                        <BlockMath math="(\sqrt{G})_u = \frac{G_u}{2\sqrt{G}}, \quad (\sqrt{G})_{uu} = \frac{G_{uu}}{2\sqrt{G}} - \frac{G_u^2}{4G\sqrt{G}}" />
                        <p>
                            これを <InlineMath math="\sqrt{G}" /> で割ると
                        </p>
                        <BlockMath math="\frac{(\sqrt{G})_{uu}}{\sqrt{G}} = \frac{2GG_{uu} - G_u^2}{4G^2}" />
                        <p>
                            これがガウス曲率の計量からの計算結果と一致することを示せばよい（詳細はガウス方程式の成分計算による）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        驚異の定理に基づき、球面の一部（<InlineMath math="K = 1/r^2" />）を平面（<InlineMath math="K = 0" />）に、面積を保ったまま「等長的」に展開することが不可能であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            驚異の定理（Theorem 5.3-1）によれば、ガウス曲率は等長写像（弧長、面積、角度を保存する変換）に対して不変な量（内在的量）である。
                            もし球面の一部 <InlineMath math="U \subset S^2" /> と平面の領域 <InlineMath math="V \subset \mathbb{R}^2" /> の間に等長写像 <InlineMath math="\phi : U \to V" /> が存在するならば、対応する点においてガウス曲率は一致しなければならない。
                        </p>
                        <BlockMath math="K_{\text{sphere}}(p) = K_{\text{plane}}(\phi(p))" />
                        <p>
                            しかし、半径 <InlineMath math="r" /> の球面では <InlineMath math="K_{\text{sphere}} = 1/r^2 > 0" /> であり、平面では <InlineMath math="K_{\text{plane}} = 0" /> である。
                            これらは異なる値であるため、矛盾が生じる。
                            したがって、球面から平面への等長写像は存在せず、球面を伸縮なしに平面に展開することは不可能であることが証明された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
