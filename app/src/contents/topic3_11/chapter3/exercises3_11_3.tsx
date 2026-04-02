import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_11_Chapter3() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="3" number={1}>
                    <p>
                        有限次元ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> に対して定義される <b><InlineMath math="(p, q)" /> 型テンソル</b>（Definition 3.1-1）の定義を、テンソル積の記号を用いて記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.1-1 より、<InlineMath math="(p, q)" /> 型テンソルの空間 <InlineMath math="T^{(p,q)}" /> は、
                            <BlockMath math="T^{(p,q)} = V^{\otimes p} \otimes (V^*)^{\otimes q} = \underbrace{V \otimes \cdots \otimes V}_{p\text{個}} \otimes \underbrace{V^* \otimes \cdots \otimes V^*}_{q\text{個}}" />
                            の元として定義される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={2}>
                    <p>
                        ベクトル空間 <InlineMath math="V" /> 上の <b>テンソル代数 <InlineMath math="T(V)" /></b>（Definition 3.2-1）は、各次数のテンソル空間のどのような演算によって構成されるベクトル空間か。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.2-1 より、テンソル代数 <InlineMath math="T(V)" /> は、すべての自然数 <InlineMath math="n" /> に対する次数 <InlineMath math="n" /> のテンソル空間 <InlineMath math="V^{\otimes n}" /> の<b>直和</b>（direct sum）として構成される。
                            <BlockMath math="T(V) = \bigoplus_{n=0}^{\infty} V^{\otimes n}" />
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={3}>
                    <p>
                        次数 <InlineMath math="n" /> のテンソル <InlineMath math="T \in V^{\otimes n}" /> が <b>対称テンソル</b>（Definition 3.3-1）であるとは、対称群 <InlineMath math="S_n" /> の任意の置換 <InlineMath math="\sigma" /> に対してどのような性質を満たすことか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-1 より、対称群 <InlineMath math="S_n" /> の任意の置換 <InlineMath math="\sigma \in S_n" /> による作用に対して不変であること、すなわち
                            <BlockMath math="\sigma \cdot T = T" />
                            を満たすことをいう。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="3" number={4}>
                    <p>
                        <InlineMath math="(1, 1)" /> 型テンソル <InlineMath math="A \in V \otimes V^*" /> を成分表示したとき、添字の付け方（上下）はどのようになるか（Example 3.1-1 参照）。また、このテンソルはどのような写像と自然に同一視できるか。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 3.1-1 より、<InlineMath math="(1, 1)" /> 型テンソルの成分は、反変成分（上付き）が1つ、共変成分（下付き）が1つであるため、<InlineMath math="A^i{}_j" /> のように表記される。
                        </p>
                        <p>
                            また、この空間は自己準同型（線形写像）の空間 <InlineMath math="\mathrm{Hom}(V, V)" /> と自然に同一視できる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={5}>
                    <p>
                        <InlineMath math="\mathbb{R}^2" /> の基底を <InlineMath math="\{e_1, e_2\}" /> とする。テンソル <InlineMath math="e_1 \otimes e_2" /> に対して <b>対称化作用素</b> <InlineMath math="\mathrm{Sym}" />（Definition 3.3-2）を適用した結果を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.3-2 より、<InlineMath math="n=2" /> の場合の対称化作用素は、
                            <BlockMath math="\mathrm{Sym}(v_1 \otimes v_2) = \frac{1}{2}(v_1 \otimes v_2 + v_2 \otimes v_1)" />
                            である（Example 3.3-1 も参照）。
                        </p>
                        <p>
                            したがって、<InlineMath math="e_1 \otimes e_2" /> に適用すると、
                            <BlockMath math="\mathrm{Sym}(e_1 \otimes e_2) = \frac{1}{2}(e_1 \otimes e_2 + e_2 \otimes e_1)" />
                            となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={6}>
                    <p>
                        三次元ベクトル空間 <InlineMath math="V" /> において、<b>交代テンソル</b> の空間 <InlineMath math="\bigwedge^2(V)" /> の次元を求めよ。また、基底 <InlineMath math="\{e_1, e_2, e_3\}" /> を用いてその基底の形を例示せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Example 3.3-2 より、次元は <InlineMath math="\binom{\dim V}{2} = \binom{3}{2} = 3" /> である。
                        </p>
                        <p>
                            交代テンソルの空間の基底は、交代化作用素 <InlineMath math="\mathrm{Alt}" /> を用いて、
                            <BlockMath math="e_1 \otimes e_2 - e_2 \otimes e_1, \quad e_1 \otimes e_3 - e_3 \otimes e_1, \quad e_2 \otimes e_3 - e_3 \otimes e_2" />
                            （あるいはその定数倍）の 3 つで与えられる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={7}>
                    <p>
                        テンソル代数 <InlineMath math="T(V)" /> において、次数 1 の元 <InlineMath math="u, v \in V" /> に対して、積 <InlineMath math="u \otimes v" /> はどの階数のテンソル空間に属するか。また、積の非可換性について簡潔に述べよ（Example 3.2-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 3.2-1 より、次数 1 の元同士の積は次数 <InlineMath math="1+1=2" /> の空間である <InlineMath math="V \otimes V" /> に属する。
                        </p>
                        <p>
                            Example 3.2-2 にあるように、テンソル代数における積は一般に非可換であり、<InlineMath math="u \otimes v" /> と <InlineMath math="v \otimes u" /> は基底が入れ替わるため、異なるテンソルとして区別される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="3" number={8}>
                    <p>
                        対称化作用素 <InlineMath math="\mathrm{Sym} : V^{\otimes n} \to V^{\otimes n}" /> が <b>冪等写像</b> であること（<InlineMath math="\mathrm{Sym} \circ \mathrm{Sym} = \mathrm{Sym}" />）を、作用素の定義に基づき証明せよ（Proposition 3.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意の <InlineMath math="t \in V^{\otimes n}" /> に対して、<InlineMath math="T = \mathrm{Sym}(t)" /> とおくと、<InlineMath math="T" /> は対称テンソル（Definition 3.3-1）である。
                        </p>
                        <p>
                            すなわち、任意の置換 <InlineMath math="\sigma \in S_n" /> に対して <InlineMath math="\sigma \cdot T = T" /> が成り立つ。
                        </p>
                        <p>
                            これに再び対称化作用素を適用すると、
                            <BlockMath math="\begin{aligned} \mathrm{Sym}(T) &= \frac{1}{n!} \sum_{\sigma \in S_n} \sigma \cdot T \\ &= \frac{1}{n!} \sum_{\sigma \in S_n} T \\ &= \frac{n!}{n!} T = T \end{aligned}" />
                        </p>
                        <p>
                            したがって、<InlineMath math="\mathrm{Sym}(\mathrm{Sym}(t)) = \mathrm{Sym}(t)" /> となり、冪等性が示された。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={9}>
                    <p>
                        交代化作用素 <InlineMath math="\mathrm{Alt}" /> において、隣接する 2 つの変数が一致する純粋テンソル <InlineMath math="t = v_1 \otimes \cdots \otimes w \otimes w \otimes \cdots \otimes v_n" /> を適用すると <InlineMath math="0" /> になることを、交代化作用素の定義を用いて証明せよ（Proposition 3.3-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            隣接する一致する変数の位置を入れ替える互換を <InlineMath math="\tau" /> とする。このとき、<InlineMath math="\tau \cdot t = t" /> である。
                        </p>
                        <p>
                            交代化作用素の定義式より、
                            <BlockMath math="\mathrm{Alt}(t) = \frac{1}{n!} \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma) \sigma \cdot t" />
                        </p>
                        <p>
                            ここで、置換 <InlineMath math="\sigma" /> に対して <InlineMath math="\sigma' = \sigma \circ \tau" /> とおくと、和の順序を入れ替えても全体は変わらない（対称群の性質）。
                            また、置換の符号の性質から <InlineMath math="\mathrm{sgn}(\sigma') = \mathrm{sgn}(\sigma)\mathrm{sgn}(\tau) = -\mathrm{sgn}(\sigma)" /> である。
                        </p>
                        <p>
                            したがって、
                            <BlockMath math="\mathrm{Alt}(t) = \mathrm{Alt}(\tau \cdot t) = \frac{1}{n!} \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma) (\sigma \circ \tau) \cdot t = -\mathrm{Alt}(t)" />
                            が得られる。<InlineMath math="\mathrm{Alt}(t) = -\mathrm{Alt}(t)" /> より、<InlineMath math="\mathrm{Alt}(t) = 0" /> である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="3" number={10}>
                    <p>
                        ベクトル空間 <InlineMath math="V" /> の <b>テンソル代数の普遍性</b>（Theorem 3.2-1）を用いて、二つのベクトル空間の間の線形写像 <InlineMath math="f: V \to W" /> が、テンソル代数の間の代数準同型 <InlineMath math="T(f) : T(V) \to T(W)" /> を一意に誘導することを説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 3.2-1 において、代数 <InlineMath math="A" /> として次数付き代数である <InlineMath math="T(W)" /> をとる。
                        </p>
                        <p>
                            写像 <InlineMath math="\phi: V \to T(W)" /> を、<InlineMath math="f" /> と次数 1 の空間への包含写像の合成として定義する。すなわち、<InlineMath math="\phi(v) = f(v) \in W = W^{\otimes 1} \subset T(W)" /> である。
                        </p>
                        <p>
                            このとき、テンソル代数の普遍性により、線形写像 <InlineMath math="\phi" /> は代数準同型 <InlineMath math="\tilde{\phi} : T(V) \to T(W)" /> へと一意に拡張される。
                        </p>
                        <p>
                            この <InlineMath math="\tilde{\phi}" /> が求める写像 <InlineMath math="T(f)" /> であり、純粋テンソルに対しては <InlineMath math="T(f)(v_1 \otimes \cdots \otimes v_n) = f(v_1) \otimes \cdots \otimes f(v_n)" /> と作用するものである。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
