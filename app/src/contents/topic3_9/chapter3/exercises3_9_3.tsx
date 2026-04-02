import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_9_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        整数環 <InlineMath math="\mathbb{Z}" /> において、イデアル <InlineMath math="I = (6)" /> が素イデアルでないことを定義（Definition 3.1-1）に基づいて示せ。また、<InlineMath math="P = (5)" /> が素イデアルであることを述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <b>イデアル (6) の場合：</b><br />
                            <InlineMath math="2, 3 \in \mathbb{Z}" /> を考えると、その積は <InlineMath math="2 \cdot 3 = 6 \in (6)" /> である。
                            しかし、<InlineMath math="2 \notin (6)" /> かつ <InlineMath math="3 \notin (6)" /> である。
                            したがって、素イデアルの定義 <InlineMath math="ab \in P \implies a \in P \lor b \in P" /> を満たさない。
                        </p>
                        <p className="mt-4">
                            <b>イデアル (5) の場合：</b><br />
                            素数 <InlineMath math="p = 5" /> の性質より、<InlineMath math="ab" /> が <InlineMath math="5" /> の倍数であれば、<InlineMath math="a" /> または <InlineMath math="b" /> の少なくとも一方は <InlineMath math="5" /> の倍数である。
                            これは <InlineMath math="ab \in (5) \implies a \in (5) \lor b \in (5)" /> と同値であり、素イデアルの定義を満たす。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        多項式環上のイデアル <InlineMath math="P = (x^2 + 1)" /> について考える。
                        <br />(1) <InlineMath math="R = \mathbb{R}[x]" /> （実数係数）の場合、<InlineMath math="P" /> は素イデアルか？
                        <br />(2) <InlineMath math="R = \mathbb{C}[x]" /> （複素数係数）の場合、<InlineMath math="P" /> は素イデアルか？
                    </p>
                    <ExerciseSolution>
                        <p>
                            剰余環が整域であるか、あるいは定義を直接確認する。
                        </p>
                        <ul className="list-disc list-inside space-y-4 mt-2">
                            <li>
                                (1) <b>実数係数 <InlineMath math="\mathbb{R}[x]" /></b>：<br />
                                Example 2.4-1 より、<InlineMath math="\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}" /> である。
                                複素数体 <InlineMath math="\mathbb{C}" /> は体であり、したがって整域である。
                                Proposition 3.1-1 より、剰余環が整域なので <InlineMath math="P" /> は<b>素イデアル</b>である。（実は極大イデアルでもある）。
                            </li>
                            <li>
                                (2) <b>複素数係数 <InlineMath math="\mathbb{C}[x]" /></b>：<br />
                                <InlineMath math="x^2 + 1 = (x+i)(x-i)" /> と因数分解できる。
                                <InlineMath math="(x+i)(x-i) = x^2 + 1 \in P" /> であるが、<InlineMath math="x+i \notin P" />（1次式なので2次式で生成されるイデアルの倍数ではない）かつ <InlineMath math="x-i \notin P" /> である。
                                よって <InlineMath math="P" /> は<b>素イデアルではない</b>。
                            </li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        対応定理（Theorem 2.6-1）を用いて、剰余環 <InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> における極大イデアルをすべて列挙せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対応定理より、<InlineMath math="\mathbb{Z}/12\mathbb{Z}" /> の極大イデアルは、<InlineMath math="\mathbb{Z}" /> のイデアルのうち、<InlineMath math="(12)" /> を含む極大イデアルと 1 対 1 に対応する。
                        </p>
                        <p>
                            整数環 <InlineMath math="\mathbb{Z}" /> の極大イデアルは、素数 <InlineMath math="p" /> を用いた <InlineMath math="(p)" /> の形である。
                            <InlineMath math="(12) \subset (p)" /> であるためには、<InlineMath math="12" /> が <InlineMath math="p" /> の倍数である必要がある。
                            <InlineMath math="12 = 2^2 \cdot 3" /> より、これに該当する素数は <InlineMath math="p = 2" /> と <InlineMath math="p = 3" /> のみである。
                        </p>
                        <p>
                            したがって、求める極大イデアルは以下の 2 つである：
                        </p>
                        <BlockMath math="(2)/(12) = \{ \bar{0}, \bar{2}, \bar{4}, \bar{6}, \bar{8}, \bar{10} \}" />
                        <BlockMath math="(3)/(12) = \{ \bar{0}, \bar{3}, \bar{6}, \bar{9} \}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        可換環 <InlineMath math="R" /> において、零イデアル <InlineMath math="(0) = \{0\}" /> が素イデアルであるための必要十分条件は、<InlineMath math="R" /> が整域であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 の素イデアルの定義と、整域の定義（No zero divisors, <InlineMath math="1 \neq 0" />）を比較する。
                        </p>
                        <p className="mt-4">
                            <b>(⟹) の証明：</b><br />
                            <InlineMath math="(0)" /> が素イデアルであるとする。<InlineMath math="ab = 0" /> ならば <InlineMath math="ab \in (0)" /> である。
                            素イデアルの定義より <InlineMath math="a \in (0)" /> または <InlineMath math="b \in (0)" /> となり、<InlineMath math="a = 0" /> または <InlineMath math="b = 0" /> が得られる。
                            また真のイデアルなので <InlineMath math="(0) \subsetneq R" /> すなわち <InlineMath math="1 \neq 0" /> である。
                            よって <InlineMath math="R" /> は整域である。
                        </p>
                        <p className="mt-4">
                            <b>(⟸) の証明：</b><br />
                            <InlineMath math="R" /> が整域であるとする。<InlineMath math="ab \in (0)" /> ならば <InlineMath math="ab = 0" /> である。
                            整域の定義より <InlineMath math="a = 0" /> または <InlineMath math="b = 0" />、すなわち <InlineMath math="a \in (0)" /> または <InlineMath math="b \in (0)" />。
                            また整域は <InlineMath math="1 \neq 0" /> を満たすため <InlineMath math="(0) \subsetneq R" /> である。
                            よって <InlineMath math="(0)" /> は素イデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        可換環 <InlineMath math="R" /> において、任意の極大イデアル <InlineMath math="M" /> は素イデアルであることを、剰余環の性質（Theorem 3.2-1 および Proposition 3.1-1）を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-1 より、<InlineMath math="M" /> が極大イデアルならば、剰余環 <InlineMath math="R/M" /> は<b>体</b>である。
                        </p>
                        <p>
                            一般的な事実として、体は零因子を持たないため<b>整域</b>である（第1章 §1.4 参照）。
                        </p>
                        <p>
                            Proposition 3.1-1 より、剰余環 <InlineMath math="R/M" /> が整域であれば、<InlineMath math="M" /> は<b>素イデアル</b>である。
                        </p>
                        <p>
                            以上より、極大イデアルは常に素イデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        有限な要素からなる可換環 <InlineMath math="R" /> において、任意の素イデアル <InlineMath math="P" /> は極大イデアルであることを証明せよ。（ヒント：有限整域は体である）
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="P" /> が素イデアルであれば、剰余環 <InlineMath math="R/P" /> は整域である（Proposition 3.1-1）。
                        </p>
                        <p>
                            元の環 <InlineMath math="R" /> が有限集合であるため、その商集合である剰余環 <InlineMath math="R/P" /> も有限集合である。
                        </p>
                        <p>
                            「有限な整域は体である」という性質（第1章 §1.3 備考、および第1章 演習 1.8）より、剰余環 <InlineMath math="R/P" /> は体である。
                        </p>
                        <p>
                            剰余環が体であれば、イデアル <InlineMath math="P" /> は極大イデアルである（Theorem 3.2-1）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        剰余環 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> におけるすべての素イデアルを求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            対応定理より、<InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> の素イデアルは、<InlineMath math="\mathbb{Z}" /> において <InlineMath math="(6)" /> を含む素イデアルと対応する。
                        </p>
                        <p>
                            整数環の素イデアルは <InlineMath math="(p)" /> （<InlineMath math="p" /> は素数）か、または零イデアル <InlineMath math="(0)" /> である。
                            <InlineMath math="(6) \subset (p)" /> を満たすには <InlineMath math="p" /> は <InlineMath math="2" /> または <InlineMath math="3" /> である。
                            （※零イデアルは <InlineMath math="(6) \subset (0)" /> を満たさない）。
                        </p>
                        <p>
                            したがって、求める素イデアルは以下の 2 つである：
                        </p>
                        <BlockMath math="(\bar{2}) = \{ \bar{0}, \bar{2}, \bar{4} \}" />
                        <BlockMath math="(\bar{3}) = \{ \bar{0}, \bar{3} \}" />
                        <p>
                            （補足：有限環なので、これらは同時に極大イデアルでもある）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        閉区間 <InlineMath math="[0, 1]" /> 上の連続な実数値関数全体の環 <InlineMath math="R = \mathcal{C}([0, 1])" /> を考える。
                        ある点 <InlineMath math="c \in [0, 1]" /> を固定したとき、
                        <BlockMath math="M_c = \{ f \in \mathcal{C}([0, 1]) \mid f(c) = 0 \}" />
                        は <InlineMath math="R" /> の極大イデアルであることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            点 <InlineMath math="c" /> における値の評価写像 <InlineMath math="\phi_c: \mathcal{C}([0, 1]) \to \mathbb{R}" /> （<InlineMath math="\phi_c(f) = f(c)" />）を考える。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4">
                            <li>
                                <b>環準同型性：</b> 関数の加法・乗法の定義より明らかに <InlineMath math="\phi_c(f+g) = (f+g)(c) = f(c)+g(c) = \phi_c(f)+\phi_c(g)" />、
                                <InlineMath math="\phi_c(fg) = (fg)(c) = f(c)g(c) = \phi_c(f)\phi_c(g)" /> である。
                                また単位元（恒等的に1の関数）は1に移る。
                            </li>
                            <li>
                                <b>全射性：</b> 任意の実数 <InlineMath math="r \in \mathbb{R}" /> に対して、定数関数 <InlineMath math="f(x) = r" /> を考えれば <InlineMath math="\phi_c(f) = r" /> となり、全射である。
                            </li>
                            <li>
                                <b>核：</b> 定義より <InlineMath math="\ker \phi_c = \{ f \in R \mid f(c) = 0 \} = M_c" /> である。
                            </li>
                        </ul>
                        <p className="mt-4">
                            第一同型定理より、剰余環は像と同型である。
                            <BlockMath math="\mathcal{C}([0, 1]) / M_c \cong \mathbb{R}" />
                            実数の集合 <InlineMath math="\mathbb{R}" /> は体であるから、Theorem 3.2-1 より、<InlineMath math="M_c" /> は極大イデアルである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        <InlineMath math="P" /> を素イデアルとし、<InlineMath math="I, J" /> をイデアルとする。<InlineMath math="I \cap J \subset P" /> が成り立つならば、<InlineMath math="I \subset P" /> または <InlineMath math="J \subset P" /> が成り立つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            イデアルの積と共通部分の包含関係（Proposition 2.2-2）を利用する。
                        </p>
                        <p>
                            常に <InlineMath math="IJ \subset I \cap J" /> が成り立つ。
                        </p>
                        <p>
                            仮定より <InlineMath math="I \cap J \subset P" /> なので、<InlineMath math="IJ \subset P" /> となる。
                        </p>
                        <p>
                            素イデアルの性質（Proposition 3.1-2）より、<InlineMath math="IJ \subset P" /> ならば <InlineMath math="I \subset P" /> または <InlineMath math="J \subset P" /> が成り立つ。
                        </p>
                        <p>
                            したがって、結論を得る。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        Theorem 3.3-1（極大イデアルの存在）において、鎖の上界 <InlineMath math="U = \bigcup J_\lambda" /> が環全体 <InlineMath math="R" /> と一致しない（真のイデアルである）ことを示すために、環のどのような性質、およびイデアルの定義が本質的に使われているか述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            本証明では以下の 2 つが本質的である。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li>
                                <b>単位元 <InlineMath math="1" /> の存在：</b>
                                本コースの環は単位元を持つ。Proposition 2.1-1 より、単位元を含まないイデアルは環全体にならない（真のイデアルである）。
                            </li>
                            <li>
                                <b>真のイデアルの性質：</b>
                                鎖の各要素 <InlineMath math="J_\lambda" /> は、<InlineMath math="\mathcal{F}" /> の定義により真のイデアル（<InlineMath math="J_\lambda \subsetneq R" />）である。
                                すなわち、どの <InlineMath math="J_\lambda" /> も単位元 <InlineMath math="1" /> を含まない。
                                このとき、それらの和集合 <InlineMath math="U" /> も <InlineMath math="1" /> を含むことはない。
                                もし <InlineMath math="1 \in U" /> であると仮定すると、ある <InlineMath math="\lambda" /> が存在して <InlineMath math="1 \in J_\lambda" /> となってしまい、矛盾が生じるからである。
                            </li>
                        </ul>
                        <p>
                            単位元が存在しない体型や、真のイデアルであることを「1 を含まない」ことで捉え直すという視点が、ツォルンの補題を適用するための鍵となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
