import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_3_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        実数の空でない集合 <InlineMath math="A" /> の上限（Supremum）<InlineMath math="s" /> の定義を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-2 より、以下の2条件を満たす実数 <InlineMath math="s" /> である：
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                            <li><InlineMath math="s" /> は <InlineMath math="A" /> の上界である（任意の <InlineMath math="x \in A" /> に対して <InlineMath math="x \le s" />）。</li>
                            <li><InlineMath math="s" /> は上界の中で最小である（<InlineMath math="M" /> が <InlineMath math="A" /> の上界ならば <InlineMath math="s \le M" />）。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        実数体における「上限公理」（Axiom 2.2-1）の内容を述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「実数全体 <InlineMath math="\mathbb{R}" /> の空でない部分集合 <InlineMath math="S" /> が上に有界であるならば、<InlineMath math="S" /> は <InlineMath math="\mathbb{R}" /> の中に必ず上限 <InlineMath math="\sup S" /> を持つ」という命題である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        「有理数の稠密性（Theorem 2.4-2）」とはどのような性質か、簡潔に説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            「任意の2つの異なる実数の間には、必ず少なくとも1つの有理数が存在する」という性質である。
                            これにより、実数直線のどんなに狭い隙間にも有理数が詰まっていることが保証される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        集合 <InlineMath math="A = \{ 1 - \frac{1}{n} \mid n \in \mathbb{N} \}" /> の上限 <InlineMath math="\sup A" /> と最大値 <InlineMath math="\max A" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            数列 <InlineMath math="1 - 1/n" /> は単調に増加し、<InlineMath math="1" /> に収束する。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>上限：</strong> 任意の <InlineMath math="n" /> について <InlineMath math="1 - 1/n < 1" /> なので <InlineMath math="1" /> は上界である。また、任意の <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="1 - 1/n > 1 - \varepsilon" /> となる <InlineMath math="n" /> を選べるため、<InlineMath math="\sup A = 1" /> である（§2.1 備考）。</li>
                            <li><strong>最大値：</strong> <InlineMath math="1 - 1/n = 1" /> となる自然数 <InlineMath math="n" /> は存在しないため、<InlineMath math="A" /> の中に <InlineMath math="1" /> は含まれない。よって最大値は存在しない。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        実数列 <InlineMath math="a_n = \frac{n+1}{n}" /> が収束することを、単調収束定理を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1（単調収束定理）を適用する。
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                            <li><strong>単調性：</strong> <InlineMath math="a_n = 1 + 1/n" /> であり、<InlineMath math="a_{n+1} - a_n = (1 + 1/(n+1)) - (1 + 1/n) = 1/(n+1) - 1/n < 0" /> なので単調減少列である。</li>
                            <li><strong>有界性：</strong> 任意の <InlineMath math="n" /> について <InlineMath math="a_n > 1" /> なので、下に有界である。</li>
                        </ol>
                        <p className="mt-2">
                            単調減少で下に有界な数列は、単調増加で上に有界な数列と同様に収束するため、数列 <InlineMath math="a_n" /> は収束する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある自然数 <InlineMath math="n" /> が存在して <InlineMath math="\frac{1}{n} < \varepsilon" /> となることを、アルキメデスの原理を用いて示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.4-1（アルキメデスの原理）において、<InlineMath math="x = 1" /> とし、<InlineMath math="\varepsilon" /> をそのまま用いる。
                        </p>
                        <p className="mt-2">
                            定理より、ある自然数 <InlineMath math="n" /> が存在して <InlineMath math="n \cdot \varepsilon > 1" /> が成り立つ。
                            両辺を正の数 <InlineMath math="n \varepsilon" /> で割ると、
                        </p>
                        <BlockMath math="\frac{1}{n} < \varepsilon" />
                        <p className="mt-2">
                            が得られる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        空ではない上に有界な実数の集合 <InlineMath math="A" /> の上限を <InlineMath math="s = \sup A" /> とする。
                        このとき、新しい集合 <InlineMath math="B = \{ 2x \mid x \in A \}" /> の上限が <InlineMath math="2s" /> であることを、上限の定義（または <InlineMath math="\varepsilon" /> を用いた特徴づけ）に基づいて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            上限の定義の2条件（Definition 2.1-2 または §2.1 備考）を確認する。
                        </p>
                        <p className="mt-4 font-bold">(1) 2s が B の上界であること</p>
                        <p className="mt-2">
                            任意の <InlineMath math="y \in B" /> をとる。<InlineMath math="B" /> の定義より、ある <InlineMath math="x \in A" /> を用いて <InlineMath math="y = 2x" /> とかける。
                            <InlineMath math="s = \sup A" /> は <InlineMath math="A" /> の上限（上界）なので <InlineMath math="x \le s" /> である。
                            両辺に 2 をかけると <InlineMath math="2x \le 2s" />、すなわち <InlineMath math="y \le 2s" /> となる。
                            これがすべての <InlineMath math="y \in B" /> で成り立つため、<InlineMath math="2s" /> は <InlineMath math="B" /> の上界である。
                        </p>
                        <p className="mt-4 font-bold">(2) 2s が最小の上界であること（εを用いた証明）</p>
                        <p className="mt-2">
                            任意の <InlineMath math="\varepsilon > 0" /> をとる。<InlineMath math="\varepsilon/2 > 0" /> である。
                            <InlineMath math="s = \sup A" /> であることから、<InlineMath math="\varepsilon/2" /> に対してある <InlineMath math="x_0 \in A" /> が存在して <InlineMath math="s - \varepsilon/2 < x_0" /> が成り立つ。
                        </p>
                        <p className="mt-2">
                            この不等式の両辺に 2 をかけると：
                        </p>
                        <BlockMath math="2(s - \varepsilon/2) < 2x_0 \implies 2s - \varepsilon < 2x_0" />
                        <p className="mt-2">
                            <InlineMath math="y_0 = 2x_0" /> とおくと <InlineMath math="y_0 \in B" /> であり、<InlineMath math="2s - \varepsilon < y_0" /> が成り立つ。
                        </p>
                        <p className="mt-2">
                            (1) と (2) より、<InlineMath math="2s" /> は <InlineMath math="B" /> の上限の条件を満たす。ゆえに <InlineMath math="\sup B = 2s" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        上限公理（Axiom 2.2-1）を仮定して、下に有界な空でない集合 <InlineMath math="S \subseteq \mathbb{R}" /> が下限 <InlineMath math="\inf S" /> を持つことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Corollary 2.2-1 の証明を再現する。
                        </p>
                        <p className="mt-2">
                            集合 <InlineMath math="-S = \{ -x \mid x \in S \}" /> を定義する。<InlineMath math="S" /> が下に有界（下界を <InlineMath math="L" /> とする）なので、任意の <InlineMath math="x \in S" /> に対して <InlineMath math="L \le x \iff -x \le -L" />。したがって <InlineMath math="-S" /> は上に有界である。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 1: 上限の存在]</p>
                        <p className="mt-2">
                            上限公理により、<InlineMath math="-S" /> には上限 <InlineMath math="M = \sup(-S)" /> が存在する。
                        </p>
                        <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 2: -M が S の下限であること]</p>
                        <p className="mt-2">
                            (i) <InlineMath math="y \in -S \implies y \le M" /> なので、<InlineMath math="-x \le M \iff -M \le x" />。よって <InlineMath math="-M" /> は <InlineMath math="S" /> の下界である。
                        </p>
                        <p className="mt-2">
                            (ii) 任意の <InlineMath math="\varepsilon > 0" /> に対し、上限の性質より <InlineMath math="M - \varepsilon < y" /> となる <InlineMath math="y = -x \in -S" /> が存在する。
                            符号を反転すると <InlineMath math="-(M - \varepsilon) > x \implies -M + \varepsilon > x" />。
                            これは、<InlineMath math="-M" /> を少し大きくするともはや下界ではないことを示しており、<InlineMath math="-M" /> は最大の下界、すなわち下限である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        ボルツァーノ・ワイエルシュトラスの定理（Theorem 2.3-3）を用いて、有界な数列には必ず収束する「部分列」が存在する理由（証明の概略）を説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-3 の証明要旨（二分法による構成）を述べる。
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>数列が収まる有界な閉区間 <InlineMath math="I_1" /> から出発する。ここには無限個の項がある。</li>
                            <li>区間を半分に分け、無限個の項が含まれる方を <InlineMath math="I_2" /> とする。これを繰り返して縮小閉区間列 <InlineMath math="I_k" /> を作る。</li>
                            <li>区間縮小法により、これらの区間はただ一つの点 <InlineMath math="c" /> に収束する。</li>
                            <li>各 <InlineMath math="I_k" /> から順番に項 <InlineMath math="x_{n_k}" /> を選ぶことで、<InlineMath math="c" /> に収束する部分列を構成できる。</li>
                        </ul>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        有理数の稠密性（Theorem 2.4-2）を用いて、無理数の稠密性（Proposition 2.4-1）を証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 2.4-1 の証明を再現する。任意の実数 <InlineMath math="a < b" /> に対して：
                        </p>
                        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                            <li>端点を <InlineMath math="\sqrt{2}" /> で割った値 <InlineMath math="a/\sqrt{2}" /> と <InlineMath math="b/\sqrt{2}" /> の間に注目する。</li>
                            <li>有理数の稠密性により、それらの間にゼロでない有理数 <InlineMath math="q" /> が存在する：<InlineMath math="a/\sqrt{2} < q < b/\sqrt{2}" />。</li>
                            <li>全体に <InlineMath math="\sqrt{2}" /> を掛けると <InlineMath math="a < q\sqrt{2} < b" />。</li>
                            <li>有理数 <InlineMath math="q \neq 0" /> と無理数 <InlineMath math="\sqrt{2}" /> の積 <InlineMath math="x = q\sqrt{2}" /> は必ず無理数である。</li>
                        </ol>
                        <p className="mt-2">
                            よって <InlineMath math="a" /> と <InlineMath math="b" /> の間に無理数 <InlineMath math="x" /> が存在することが示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
