import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_12_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        2つの群 <InlineMath math="G" /> と <InlineMath math="H" /> の <b>自由積（free product）</b> <InlineMath math="G * H" />（Definition 4.1-1）の元は、どのような形で一意に表されるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 より、<InlineMath math="G" /> の単位元でない元と <InlineMath math="H" /> の単位元でない元を交互に並べた有限個の文字列（既約な語）
                            <BlockMath math="g_1 h_1 g_2 h_2 \cdots g_n h_n" />
                            の形として一意に表される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        <b>ファン・カンペンの定理</b>（Theorem 4.2-1）を適用して <InlineMath math="\pi_1(X)" /> を <InlineMath math="\pi_1(U)" /> と <InlineMath math="\pi_1(V)" /> の融合積として得るために、開被覆 <InlineMath math="U, V" /> および共通部分 <InlineMath math="U \cap V" /> が満たすべき空間的な条件は何か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.2-1 より、<InlineMath math="U, V" /> および <InlineMath math="U \cap V" /> が <b>すべて弧状連結</b> であることである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        2次元 CW 複体の基本群の表示 <InlineMath math="\pi_1(X) = \langle \{e^1\} \mid \{r\} \rangle" />（Theorem 4.3-1）において、生成元と関係式はそれぞれ何に対応するか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.3-1 より、生成元は <b>1-セル（<InlineMath math="e^1" />）</b>、関係式は <b>2-セル（<InlineMath math="e^2" />）の境界がなぞる 1-セルの語</b> に対応する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        3つの群 <InlineMath math="G, H, K" /> に対する <b>融合積</b> <InlineMath math="G *_K H" />（Definition 4.1-2）は、単射準同型 <InlineMath math="\phi : K \to G" /> と <InlineMath math="\psi : K \to H" /> を用いて、直感的に <InlineMath math="G * H" /> の中でどのような同一視を行って得られる群か簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-2 より、共通部分 <InlineMath math="K" /> から来た元について、<InlineMath math="G" /> 側での像 <InlineMath math="\phi(k)" /> と <InlineMath math="H" /> 側での像 <InlineMath math="\psi(k)" /> を <b>同じものとして同一視（<InlineMath math="\phi(k) = \psi(k)" />）</b> して得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        円周 <InlineMath math="S^1" /> を <InlineMath math="U = S^1 \setminus \{-1\}" /> と <InlineMath math="V = S^1 \setminus \{1\}" /> で被覆したとき、このままではファン・カンペンの定理が適用できない理由を述べよ（Example 4.2-2 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 4.2-2 より、<InlineMath math="U" /> と <InlineMath math="V" /> はそれぞれ可縮で弧状連結であるが、共通部分 <InlineMath math="U \cap V" /> は上半円と下半円の <b>2つの連結成分に分かれてしまい、弧状連結ではない</b> ため、定理の前提条件を満たさないからである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        ファン・カンペンの定理において、分割の共通部分 <InlineMath math="U \cap V" /> が <b>単連結（基群が <InlineMath math="\{e\}" />）</b> である場合、基本群 <InlineMath math="\pi_1(X)" /> はどのような簡潔な群の形になるか（Remark「共通部分が単連結の場合」参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            共通部分からの包含写像の像が自明になり、同一視の条件がなくなるため、融合積は純粋な <b>自由積</b> <InlineMath math="\pi_1(U) * \pi_1(V)" /> になる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        <b>トーラス</b> <InlineMath math="T^2" /> を CW複体として構成したときの基本群の表示式と、関係式が意味する群の性質を述べよ（Example 4.3-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 4.3-2 より、表示式は
                            <BlockMath math="\pi_1(T^2) = \langle a, b \mid aba^{-1}b^{-1} = e \rangle" />
                            である。
                        </p>
                        <p>
                            関係式 <InlineMath math="aba^{-1}b^{-1} = e" /> は <InlineMath math="ab = ba" /> と同値であり、これは生成元が <b>可換である</b> ことを意味している（自由アーベル群 <InlineMath math="\mathbb{Z} \times \mathbb{Z}" />）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        位相空間 <InlineMath math="X" /> が 2 つの開集合の和として <InlineMath math="X = U \cup V" /> と表されるとする。共通部分 <InlineMath math="U \cap V" /> が弧状連結であるとき、<InlineMath math="X" /> 上の任意のループ <InlineMath math="\gamma" /> は、<InlineMath math="U" /> 内のループと <InlineMath math="V" /> 内のループの積として表される各パスの積に、基点を固定した道ホモトピーで変形できることを証明せよ（Theorem 4.2-1 の全射性の証明）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            ルベーグ数の補題により、<InlineMath math="\gamma" /> をパスの結合 <InlineMath math="\gamma_1 * \gamma_2 * \cdots * \gamma_n" /> に分割し、各 <InlineMath math="\gamma_i" /> が完全に <InlineMath math="U" /> または <InlineMath math="V" /> に含まれるようにできる。各分割点 <InlineMath math="\gamma(t_i)" /> は <InlineMath math="U \cap V" /> に属する。
                        </p>
                        <p>
                            ここで <InlineMath math="U \cap V" /> は弧状連結であるため、各分割点 <InlineMath math="\gamma(t_i)" /> から基点 <InlineMath math="x_0" /> へ結ぶ <InlineMath math="U \cap V" /> 内の道 <InlineMath math="\delta_i" /> が存在する。特に <InlineMath math="\delta_0, \delta_n" /> を定値道 <InlineMath math="c_{x_0}" /> とする。
                        </p>
                        <p>
                            このとき、各 <InlineMath math="\gamma_i" /> に対して新しいループ <InlineMath math="\gamma'_i = \delta_{i-1} * \gamma_i * \bar{\delta}_i" /> を構成する。
                            各 <InlineMath math="\delta_j" /> は <InlineMath math="U \cap V" /> に含まれるため、<InlineMath math="\gamma_i" /> が <InlineMath math="U" />（または <InlineMath math="V" />）に含まれるなら、<InlineMath math="\gamma'_i" /> も <InlineMath math="U" />（または <InlineMath math="V" />）に含まれるループとなる。
                        </p>
                        <p>
                            これらを順番に結合すると、
                            <BlockMath math="\gamma'_1 * \gamma'_2 * \cdots * \gamma'_n = (c_{x_0} * \gamma_1 * \bar{\delta}_1) * (\delta_1 * \gamma_2 * \bar{\delta}_2) * \cdots * (\delta_{n-1} * \gamma_n * c_{x_0})" />
                            となる。隣り合う <InlineMath math="\bar{\delta}_i * \delta_i" /> は定値道にホモトピックであるため、全体は元の道 <InlineMath math="\gamma" /> に道ホモトピックである。したがって、<InlineMath math="\gamma" /> は各部分空間内のループの積で表される。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        弧状連結な位相空間 <InlineMath math="X" /> に対して、2-セル <InlineMath math="D^2" /> をその境界 <InlineMath math="\partial D^2 = S^1" /> の接着写像 <InlineMath math="\phi : S^1 \to X" /> によって貼り付けた新たな空間を <InlineMath math="X'" /> とする。このとき、<InlineMath math="\pi_1(X', x_0) \cong \pi_1(X, x_0) / N" /> （ここで <InlineMath math="N" /> は <InlineMath math="\phi" /> が定める基本群上の元で生成される正規部分群）であることを、ファン・カンペンの定理を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            接着された 2-セルの内部にある点 <InlineMath math="p" /> をとり、<InlineMath math="V" /> を 2-セルの内部（<InlineMath math="p" /> を含む開円板）とする。また <InlineMath math="U = X' \setminus \{p\}" /> とすると、<InlineMath math="X' = U \cup V" /> である。
                        </p>
                        <p>
                            <InlineMath math="V" /> は開円板であるため可縮であり、<InlineMath math="\pi_1(V) \cong \{e\}" /> である。また <InlineMath math="U" /> は <InlineMath math="X" /> に変形レトラクトするため、<InlineMath math="\pi_1(U) \cong \pi_1(X)" /> である。
                            共通部分 <InlineMath math="U \cap V = V \setminus \{p\}" /> は穴の開いた円板であり、<InlineMath math="S^1" /> とホモトピー同値である。この基本群 <InlineMath math="\pi_1(U \cap V)" /> は無限巡回群 <InlineMath math="\mathbb{Z}" /> であり、その生成元を <InlineMath math="\alpha" /> とする。
                        </p>
                        <p>
                            ファン・カンペンの定理より、<InlineMath math="\pi_1(X') \cong \pi_1(U) *_{\pi_1(U \cap V)} \pi_1(V)" /> である。
                            包含写像 <InlineMath math="i : U \cap V \hookrightarrow U" /> によって <InlineMath math="\alpha" /> が送られる先は、接着写像 <InlineMath math="\phi" /> が定める基本群上の元 <InlineMath math="[\phi]" /> である。
                        </p>
                        <p>
                            融合積の定義により、<InlineMath math="\pi_1(X') \cong (\pi_1(X) * \{e\}) / N \cong \pi_1(X) / N" /> となる。ここで <InlineMath math="N" /> は <InlineMath math="i(\alpha) \cdot j(\alpha)^{-1} = [\phi] \cdot e^{-1} = [\phi]" /> で生成される正規部分群である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        群の表示 <InlineMath math="G = \langle a, b \mid a^2 = b^3 \rangle" /> （三葉結び目群）で定義される群 <InlineMath math="G" /> が非可換群であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            可換な群への自明でない準同型が存在すること、および非可換群への全射準同型の存在を確認すればよい。
                        </p>
                        <p>
                            例えば、対称群 <InlineMath math="S_3" /> （位数 6）を考える。この群の元 <InlineMath math="\sigma = (1\ 2)" /> （位数 2）と <InlineMath math="\tau = (1\ 2\ 3)" /> （位数 3）について、<InlineMath math="\sigma^2 = \mathrm{id}" /> および <InlineMath math="\tau^3 = \mathrm{id}" /> が成り立つ。
                        </p>
                        <p>
                            ここで、準同型 <InlineMath math="f : G \to S_3" /> を <InlineMath math="f(a) = \sigma" />、<InlineMath math="f(b) = \tau" /> と定めることはできない（<InlineMath math="f(a)^2 = \mathrm{id} \neq f(b)^3 = \mathrm{id}" /> であるが、元の式は <InlineMath math="a^2 = b^3" /> であるため矛盾しない）。
                            しかし、<InlineMath math="f(a) = (1\ 2)" /> と <InlineMath math="f(b) = (1\ 2\ 3)" /> のように定めると、<InlineMath math="f(a)^2 = \mathrm{id}" /> かつ <InlineMath math="f(b)^3 = \mathrm{id}" /> となり、両辺が共に単位元になるため表示を保つ。
                        </p>
                        <p>
                            <InlineMath math="S_3" /> 内において <InlineMath math="\sigma \tau \neq \tau \sigma" /> であるため、その像は非可換である。したがって、元の群 <InlineMath math="G" /> も非可換でなければならない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
