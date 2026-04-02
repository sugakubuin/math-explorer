import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>
                        定理（Theorem 5.1-1）において、高次元球面 <InlineMath math="S^n" />（<InlineMath math="n \geq 2" />）の基本群はどのようになると述べられているか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.1-1 より、<InlineMath math="S^n" /> は単連結であり、その基本群は <b>自明群 <InlineMath math="\{e\}" /></b> である（<InlineMath math="\pi_1(S^n) = \{e\}" />）と述べられている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p>
                        閉曲面の分類定理（Theorem 5.3-1）によれば、任意の連結な「向き付け可能閉曲面」は、ある 1 つの整数不変量によって完全に分類される。その不変量と名称を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.3-1 より、穴の数である <b>種数（genus）<InlineMath math="g" />（<InlineMath math="g \geq 0" />）</b> によって完全に分類される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p>
                        結び目 <InlineMath math="K" /> の <b>結び目群（knot group）</b>（Definition 5.4-2）は、どのような空間の基本群として定義されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 5.4-2 より、空間全体から <InlineMath math="K" /> を取り除いた空間である <b>結び目補空間 <InlineMath math="S^3 \setminus K" /></b> の基本群として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>
                        2次元球面 <InlineMath math="S^2" /> が単連結である直感的な理由と、円周 <InlineMath math="S^1" /> がそうでない理由の違いを「穴」の検知の観点から説明せよ（Remark 5.1-1 および Example 5.1-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            基本群は「1次元のループ」を通じて穴を検知する。<InlineMath math="S^1" /> は空間自体が 1 次元の穴（空洞）を形作っているためループがそれを囲むと縮められない。
                        </p>
                        <p>
                            一方、<InlineMath math="S^2" /> の表面上のループは、空間上の点や障害物を避けて滑らせることで、必ず境界のない場所を通って一点に縮めることができるからである（1次元の穴は存在しない）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>
                        <b>クラインの壺</b> <InlineMath math="K" /> の基本群の表示を記し、それがトーラス <InlineMath math="T^2" /> とホモトピー同値でない代数的な理由を述べよ（Example 5.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            クラインの壺の基本群は <InlineMath math="\pi_1(K) = \langle a, b \mid abab^{-1} = e \rangle" /> である。
                        </p>
                        <p>
                            関係式は <InlineMath math="b^{-1} a b = a^{-1}" /> に変形でき、これは <b>非可換群</b> である。対してトーラスの基本群は可換群（<InlineMath math="\mathbb{Z} \times \mathbb{Z}" />）であるため、これらは同型な群ではなく、したがってホモトピー同値ではない。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>
                        2次元の実射影空間 <InlineMath math="\mathbb{R}P^2" /> の基本群 <InlineMath math="\pi_1(\mathbb{R}P^2)" /> は何の群と同型になるか（Theorem 5.2-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 5.2-1 より、<b>位数 2 の巡回群 <InlineMath math="\mathbb{Z}/2\mathbb{Z}" /></b> と同型になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p>
                        三葉結び目（trefoil knot）の結び目群の構成から、これらが <b>自明な結び目（unknot）</b> に連続変形して解けない理由を簡潔に述べよ（Example 5.4-1, 5.4-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            自明な結び目の結び目群は <InlineMath math="\mathbb{Z}" />（可換群）であるが、三葉結び目の結び目群は <InlineMath math="\langle a, b \mid a^2 = b^3 \rangle" /> という <b>非可換群</b> となり同型とならない。
                        </p>
                        <p>
                            連続変形が可能であれば補空間もホモトピー同値となり基本群が一致するはずであるが、群が異なっているため変形不可能（解けない）ことが証明されるからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p>
                        ファン・カンペンの定理を用いて、すべての <InlineMath math="n \geq 2" /> に対して <InlineMath math="n" /> 次元球面 <InlineMath math="S^n" /> が単連結であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="S^n" /> を北極 <InlineMath math="N" /> を除いた <InlineMath math="U = S^n \setminus \{N\}" /> と南極 <InlineMath math="S" /> を除いた <InlineMath math="V = S^n \setminus \{S\}" /> で被覆する。
                        </p>
                        <p>
                            <InlineMath math="U, V" /> は共に <InlineMath math="\mathbb{R}^n" /> と同相であり可縮であるため、<InlineMath math="\pi_1(U) \cong \pi_1(V) \cong \{e\}" /> である。共通部分 <InlineMath math="U \cap V" /> は赤道帯であり、<InlineMath math="S^{n-1}" /> とホモトピー同値である。
                        </p>
                        <p>
                            <InlineMath math="n \geq 2" /> のとき、<InlineMath math="n-1 \geq 1" /> より <InlineMath math="S^{n-1}" /> は弧状連結である。したがってファン・カンペンの定理が適用可能であり、基本群は融合積として次のように求まる。
                            <BlockMath math="\pi_1(S^n) \cong \pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V) \cong \{e\} *_{\pi_1(S^{n-1})} \{e\}" />
                        </p>
                        <p>
                            自明な群同士の融合積は常に自明な群であるため、<InlineMath math="\pi_1(S^n) \cong \{e\}" /> となり、<InlineMath math="S^n" /> は単連結である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p>
                        実射影平面 <InlineMath math="\mathbb{R}P^2" /> を CW 複体として構成するとき、基本群の関係式が <InlineMath math="a^2 = e" /> となることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\mathbb{R}P^2" /> は円板 <InlineMath math="D^2" /> の境界の対蹠点を同一視することで得られる。
                        </p>
                        <p>
                            1-骨格は、境界円周 <InlineMath math="S^1" /> の半周をパス <InlineMath math="a" /> とすると、同一視によって残りの半周も <InlineMath math="a" /> となり、1つのループを形成する。
                        </p>
                        <p>
                            2-セル（円板内部）の接着写像 <InlineMath math="\phi : \partial D^2 \to S^1" /> は、円周に沿って 1-骨格上のループ <InlineMath math="a" /> を 2 回なぞる写像となる。すなわち、接着される語は <InlineMath math="a^2" /> である。
                        </p>
                        <p>
                            CW 複体の基本群の表示定理により、基本群はこの語を関係式として持つため、<InlineMath math="\pi_1(\mathbb{R}P^2) \cong \langle a \mid a^2 = e \rangle" /> となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p>
                        種数 <InlineMath math="g" /> の向き付け可能閉曲面の基本群
                        <BlockMath math="\pi_1(\Sigma_g) = \langle a_1, b_1, \ldots, a_g, b_g \mid [a_1, b_1][a_2, b_2] \cdots [a_g, b_g] = e \rangle" />
                        の可換化が、自由アーベル群 <InlineMath math="\mathbb{Z}^{2g}" /> と同型であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            群 <InlineMath math="G" /> の可換化 <InlineMath math="G_{ab}" /> は、元の関係式に加えて、すべての生成元が互いに可換であるという関係式 <InlineMath math="x y x^{-1} y^{-1} = e" /> を追加して得られる群である。
                        </p>
                        <p>
                            <InlineMath math="\pi_1(\Sigma_g)" /> の可換化において、すべての <InlineMath math="a_i, b_j" /> が可換となるため、各交換子 <InlineMath math="[a_i, b_i] = a_i b_i a_i^{-1} b_i^{-1}" /> はすべて単位元 <InlineMath math="e" /> となる。
                        </p>
                        <p>
                            したがって、単一の関係式である交換子の積は
                            <BlockMath math="[a_1, b_1][a_2, b_2] \cdots [a_g, b_g] = e \cdot e \cdot \cdots \cdot e = e" />
                            となり、実質的に何の制約も与えない自明な式となる。結果として、群は <InlineMath math="2g" /> 個の生成元を持つ自由アーベル群 <InlineMath math="\mathbb{Z}^{2g}" /> と同型になる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
