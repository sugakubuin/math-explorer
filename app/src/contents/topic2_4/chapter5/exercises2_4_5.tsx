import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises2_4_Chapter5() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="5" number={1}>
                    <p>二つの集合 <InlineMath math="A" /> と <InlineMath math="B" /> が<b>対等（Equipotent）</b>であることの、写像を用いた定義を述べよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.1-1 より、<InlineMath math="A" /> から <InlineMath math="B" /> への<b>全単射</b>が存在するとき、<InlineMath math="A" /> と <InlineMath math="B" /> は対等であるという。これを <InlineMath math="A \cong B" /> または <InlineMath math="|A| = |B|" /> と表す。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={2}>
                    <p><b>可算集合</b>とはどのような集合か、定義を答えよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.2-1 より、自然数の集合 <InlineMath math="\mathbb{N}" /> と対等な集合を<b>可算無限集合</b>といい、有限集合または可算無限集合である集合を総称して<b>可算集合</b>という。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={3}>
                    <p><b>カントールの定理</b>（Theorem 5.4-1）の主張を、集合 <InlineMath math="A" /> とそのべき集合 <InlineMath math="\mathcal{P}(A)" /> の濃度の関係として述べよ。</p>
                    <ExerciseSolution>
                        <p>任意の集合 <InlineMath math="A" /> に対して、そのべき集合 <InlineMath math="\mathcal{P}(A)" /> の濃度は <InlineMath math="A" /> の濃度より真に大きい。すなわち：</p>
                        <p className="mt-2">
                            <BlockMath math="|A| < |\mathcal{P}(A)|" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="5" number={4}>
                    <p>自然数の集合 <InlineMath math="\mathbb{N} = \{1, 2, 3, \dots\}" /> と、正の偶数の集合 <InlineMath math="2\mathbb{N} = \{2, 4, 6, \dots\}" /> が対等であることを、具体的な全単射を構成することで示せ。</p>
                    <ExerciseSolution>
                        <p>写像 <InlineMath math="f: \mathbb{N} \to 2\mathbb{N}" /> を <InlineMath math="f(n) = 2n" /> と定義する。</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><b>単射性：</b> <InlineMath math="2n_1 = 2n_2 \implies n_1 = n_2" /> より成り立つ。</li>
                            <li><b>全射性：</b> 任意の偶数 <InlineMath math="m \in 2\mathbb{N}" /> はある自然数 <InlineMath math="k" /> を用いて <InlineMath math="m = 2k" /> と書けるため、<InlineMath math="f(k) = m" /> となる <InlineMath math="k" /> が存在する。</li>
                        </ul>
                        <p className="mt-2">したがって <InlineMath math="f" /> は全単射であり、<InlineMath math="\mathbb{N} \cong 2\mathbb{N}" /> である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={5}>
                    <p>可算無限の濃度を <InlineMath math="\aleph_0" /> とするとき、和の定義に基づき <InlineMath math="\aleph_0 + \aleph_0 = \aleph_0" /> が成り立つことを説明せよ。</p>
                    <ExerciseSolution>
                        <p>Definition 5.1-3 より、濃度の和は互いに素な集合の和集合の濃度で定義される。</p>
                        <p><InlineMath math="A = \{ (0, n) \mid n \in \mathbb{N} \}" />、<InlineMath math="B = \{ (1, n) \mid n \in \mathbb{N} \}" /> とすると、これらは互いに素で、共に濃度 <InlineMath math="\aleph_0" /> を持つ。</p>
                        <p>これらの和集合 <InlineMath math="A \cup B" /> の元を <InlineMath math="(0, 1), (1, 1), (0, 2), (1, 2), \dots" /> と交互に並べることで、自然数全体と一対一に対応させることができる。よって <InlineMath math="|A \cup B| = \aleph_0" /> となり、<InlineMath math="\aleph_0 + \aleph_0 = \aleph_0" /> が得られる。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={6}>
                    <p>二つの写像の対等性を用いて、開区間 <InlineMath math="(0, 1)" /> と実数全体 <InlineMath math="\mathbb{R}" /> が対等であることを示せ（ヒント：第1象限の関数などを用いる）。</p>
                    <ExerciseSolution>
                        <p>例えば、写像 <InlineMath math="f: (0, 1) \to \mathbb{R}" /> を次のように定義する：</p>
                        <p className="mt-2">
                            <BlockMath math="f(x) = \tan\left( \pi x - \frac{\pi}{2} \right)" />
                        </p>
                        <p>この関数は <InlineMath math="x \to 0" /> で <InlineMath math="-\infty" /> に、<InlineMath math="x \to 1" /> で <InlineMath math="+\infty" /> に近づき、区間全体で単調増加する連続関数である。したがって全単射となり、<InlineMath math="|(0, 1)| = |\mathbb{R}|" /> が成り立つ。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={7}>
                    <p><b>デデキント無限</b>（§5.1 備考）の性質として、「ある集合が無限集合であるための必要十分条件は、その集合が自分自身の真の部分集合と対等であることである」という主張がある。これを自然数 <InlineMath math="\mathbb{N}" /> とその部分集合 <InlineMath math="\mathbb{N} \setminus \{1\}" /> を例に説明せよ。</p>
                    <ExerciseSolution>
                        <p><InlineMath math="\mathbb{N} = \{1, 2, 3, \dots\}" /> に対し、<InlineMath math="S = \{2, 3, 4, \dots\}" /> は <InlineMath math="1" /> を含まないため真の部分集合である。</p>
                        <p>ここで、写像 <InlineMath math="f: \mathbb{N} \to S" /> を <InlineMath math="f(n) = n+1" /> と定義すると、これは全単射となる。したがって、無限集合である <InlineMath math="\mathbb{N}" /> は、真の部分集合 <InlineMath math="S" /> と対等（同じ濃度）である。これは有限集合では決して起こり得ない無限集合特有の性質である。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="5" number={8}>
                    <p><b>カントールの対角線論法</b>を用いて、自然数から定義される無限列全体の集合 <InlineMath math="X = \{ (a_1, a_2, \dots) \mid a_i \in \{0, 1\} \}" /> が非可算であることを証明せよ。</p>
                    <ExerciseSolution>
                        <p>Theorem 5.3-1 の手法を用いる。</p>
                        <p><InlineMath math="X" /> が可算であると仮定し、すべての元を次のようにリストアップできるとする：</p>
                        <p className="mt-2">
                            <BlockMath math="\begin{aligned} s_1 &= (a_{11}, a_{12}, a_{13}, \dots) \\ s_2 &= (a_{21}, a_{22}, a_{23}, \dots) \\ s_3 &= (a_{31}, a_{32}, a_{33}, \dots) \\ \dots \end{aligned}" />
                        </p>
                        <p>ここで、新しい列 <InlineMath math="d = (d_1, d_2, d_3, \dots)" /> を次のように構成する：</p>
                        <p className="mt-2">
                            <BlockMath math="d_i = \begin{cases} 1 & (a_{ii} = 0) \\ 0 & (a_{ii} = 1) \end{cases}" />
                        </p>
                        <p>この列 <InlineMath math="d" /> は、どのリスト上の元 <InlineMath math="s_i" /> とも第 <InlineMath math="i" /> 成分が異なるため、リストに含まれていない。これはリストがすべての元を網羅しているという仮定に矛盾する。したがって、<InlineMath math="X" /> は非可算である。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={9}>
                    <p><b>シュレーダー・ベルンシュタインの定理</b>（Theorem 5.5-1）を用いて、閉区間 <InlineMath math="[0, 1]" /> と開区間 <InlineMath math="(0, 1)" /> の濃度が等しいことを証明せよ。</p>
                    <ExerciseSolution>
                        <p>二つの集合間に双方向の単射を構成する。</p>
                        <p>1) 包含写像 <InlineMath math="i: (0, 1) \to [0, 1]" />（<InlineMath math="i(x) = x" />）は明らかに単射である。よって <InlineMath math="|(0, 1)| \leq |[0, 1]|" />。</p>
                        <p>2) 写像 <InlineMath math="j: [0, 1] \to (0, 1)" /> を、例えば <InlineMath math="j(x) = \frac{1}{4} + \frac{1}{2}x" /> と定義する。この写像は閉区間 <InlineMath math="[0, 1]" /> を開区間内の <InlineMath math="[1/4, 3/4]" /> に移す単射である。よって <InlineMath math="|[0, 1]| \leq |(0, 1)|" />。</p>
                        <p>以上の双方向の単射の存在により、シュレーダー・ベルンシュタインの定理から <InlineMath math="|[0, 1]| = |(0, 1)|" /> が得られる。</p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="5" number={10}>
                    <p><b>連続体仮説 (CH)</b> の内容を、可算無限の濃度 <InlineMath math="\aleph_0" /> と連続体濃度 <InlineMath math="\mathfrak{c} = 2^{\aleph_0}" /> を用いて説明せよ。また、現在の数学の標準的な公理系においてこの仮説がどのような状態にあるか述べよ。</p>
                    <ExerciseSolution>
                        <p>連続体仮説とは、<InlineMath math="\aleph_0" /> と <InlineMath math="\mathfrak{c}" /> の中間に位置する濃度が存在しない、すなわち、「<InlineMath math="\aleph_0 < \kappa < \mathfrak{c}" /> となるような濃度 <InlineMath math="\kappa" /> は存在しない」という主張である（Definition 5.6-2）。</p>
                        <p>この仮説は、現代数学の標準的な公理系である ZFC から<b>独立</b>であることが証明されている。つまり、ZFC のもとでは連続体仮説を証明することも、その否定を証明することもできない（ゲーデルによる無矛盾性の証明と、コーエンによる独立性の証明）。</p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
