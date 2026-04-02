import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter2() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="2" number={1}>
                    <p>
                        標数 <InlineMath math="5" /> の有限体 <InlineMath math="\mathbb{F}_5" /> 上の多項式 <InlineMath math="f(x) = x^5 + 2x^3 + 4x + 1 \in \mathbb{F}_5[x]" /> の形式的微分 <InlineMath math="f'(x)" /> を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.1-1 に基づき、各項を微分する。
                        </p>
                        <BlockMath math="f'(x) = 5x^4 + (3 \cdot 2)x^2 + 4" />
                        <p>
                            標数 <InlineMath math="5" /> において、係数は <InlineMath math="\pmod 5" /> で計算されるため、
                        </p>
                        <BlockMath math="\begin{aligned} 5 &\equiv 0 \pmod 5 \\ 6 &\equiv 1 \pmod 5 \end{aligned}" />
                        <p>
                            これを用いると、
                        </p>
                        <BlockMath math="f'(x) = 0 \cdot x^4 + 1 \cdot x^2 + 4 = x^2 + 4" />
                        <p>
                            を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={2}>
                    <p>
                        有理数体上の多項式 <InlineMath math="f(x) = x^3 - 4x^2 + 4x" /> について、<InlineMath math="x = 2" /> が重根であるかどうかを、形式的微分を用いて判定せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.1-1 より、<InlineMath math="\alpha" /> が重根であるための必要十分条件は <InlineMath math="f(\alpha) = 0" /> かつ <InlineMath math="f'(\alpha) = 0" /> である。
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <InlineMath math="x=2" /> を <InlineMath math="f(x)" /> に代入すると、<br />
                                <InlineMath math="f(2) = 2^3 - 4(2^2) + 4(2) = 8 - 16 + 8 = 0" />。
                            </li>
                            <li>
                                形式的微分を求めると <InlineMath math="f'(x) = 3x^2 - 8x + 4" />。これに <InlineMath math="x=2" /> を代入すると、<br />
                                <InlineMath math="f'(2) = 3(2^2) - 8(2) + 4 = 12 - 16 + 4 = 0" />。
                            </li>
                        </ol>
                        <p className="mt-2">
                            双方とも <InlineMath math="0" /> になるため、<InlineMath math="x = 2" /> は重根である（実際、<InlineMath math="f(x) = x(x-2)^2" /> と因数分解できる）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={3}>
                    <p>
                        分離多項式の定義を述べ、多項式 <InlineMath math="f(x) = x^2 - 1 \in \mathbb{Q}[x]" /> が分離的であるかどうかを答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 2.2-1 より、多項式が<strong>分離多項式</strong>であるとは、代数閉包における根がすべて単根である（重根を持たない）ことをいう。
                        </p>
                        <p>
                            <InlineMath math="f(x) = x^2 - 1 = (x-1)(x+1)" /> であり、根は <InlineMath math="1" /> と <InlineMath math="-1" /> である。これらは相異なるため、重根を持たない。したがって、<InlineMath math="f(x)" /> は分離多項式である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="2" number={4}>
                    <p>
                        標数 <InlineMath math="p > 0" /> の体上の多項式 <InlineMath math="f(x)" /> について、形式的微分 <InlineMath math="f'(x)" /> がゼロ多項式になることと、<InlineMath math="f(x)" /> が <InlineMath math="x^p" /> の多項式として書ける（すなわち、ある <InlineMath math="g(x)" /> を用いて <InlineMath math="f(x) = g(x^p)" /> となる）ことが同値であることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="f(x) = \sum a_n x^n" /> とすると、<InlineMath math="f'(x) = \sum n a_n x^{n-1}" /> である。
                        </p>
                        <p>
                            <InlineMath math="f'(x) = 0" /> となることは、すべての <InlineMath math="n" /> について <InlineMath math="n a_n = 0" /> となることと同値である。
                        </p>
                        <p>
                            体において <InlineMath math="n a_n = 0" /> となるためには、<InlineMath math="a_n = 0" /> であるか、または標数 <InlineMath math="p" /> が <InlineMath math="n" /> を割り切る（<InlineMath math="n \equiv 0 \pmod p" />）ことが必要である。
                        </p>
                        <p>
                            したがって、係数 <InlineMath math="a_n" /> が非零であるような項の次数 <InlineMath math="n" /> はすべて <InlineMath math="p" /> の倍数でなければならない。これは <InlineMath math="f(x)" /> が <InlineMath math="x^p, x^{2p}, \dots" /> の線形結合、つまり <InlineMath math="x^p" /> の多項式として書けることを意味する。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={5}>
                    <p>
                        有限体 <InlineMath math="\mathbb{F}_q" /> が完全体であることを、定理 2.3-1 の条件を用いて説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 2.3-1 より、正標数 <InlineMath math="p" /> の体が完全体であるための必要十分条件は、フロベニウス写像 <InlineMath math="\phi : a \mapsto a^p" /> が全射であることである。
                        </p>
                        <p>
                            有限体上の体準同型は（体全体の構造から）常に単射である。また、有限集合から自分自身への単射は、鳩の巣原理により必ず全射となる。
                        </p>
                        <p>
                            これより有限体のフロベニウス写像は全射となり、したがって有限体はすべて完全体である（Example 2.3-1 参照）。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={6}>
                    <p>
                        拡大 <InlineMath math="\mathbb{Q}(\sqrt{3}, i)/\mathbb{Q}" /> の原始元を一つ構成し、実際にそれが原始元であることを（各添加元が生成された体に含まれることを示すことで）証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <InlineMath math="\gamma = \sqrt{3} + i" /> とおき、<InlineMath math="\mathbb{Q}(\gamma) = \mathbb{Q}(\sqrt{3}, i)" /> を示す。
                        </p>
                        <p>
                            <InlineMath math="\gamma^2 = (\sqrt{3} + i)^2 = 3 - 1 + 2\sqrt{3}i = 2 + 2\sqrt{3}i" />。
                        </p>
                        <p>
                            これより、<InlineMath math="\sqrt{3}i = \frac{\gamma^2 - 2}{2} \in \mathbb{Q}(\gamma)" />。
                        </p>
                        <p>
                            この元に再び <InlineMath math="\gamma" /> を掛けると、
                        </p>
                        <BlockMath math="\sqrt{3}i(\sqrt{3} + i) = 3i + \sqrt{3}i^2 = 3i - \sqrt{3} \in \mathbb{Q}(\gamma)" />
                        <p>
                            ここで <InlineMath math="\sqrt{3} + i = \gamma" /> との和をとると、
                        </p>
                        <BlockMath math="(\sqrt{3} + i) + (3i - \sqrt{3}) = 4i \in \mathbb{Q}(\gamma)" />
                        <p>
                            よって <InlineMath math="i \in \mathbb{Q}(\gamma)" />。さらに <InlineMath math="\sqrt{3} = \gamma - i \in \mathbb{Q}(\gamma)" />。
                        </p>
                        <p>
                            したがって <InlineMath math="\mathbb{Q}(\sqrt{3}, i) \subset \mathbb{Q}(\gamma)" /> であり、逆の包含は明らかなので一致する。ゆえに <InlineMath math="\sqrt{3} + i" /> は原始元である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={7}>
                    <p>
                        原始元定理（Theorem 2.4-1）に基づき、<InlineMath math="\mathbb{Q}(\sqrt{2}, \sqrt{3}, \sqrt{5})/\mathbb{Q}" /> という拡大に原始元が存在することを保証する理論的根拠を述べよ。また、経験的にどのような元が候補になるか答えよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            理論的根拠：<br />
                            有理数体 <InlineMath math="\mathbb{Q}" /> は標数 0 であるため、あらゆる有限次拡大は分離拡大である（Proposition 2.2-1）。また <InlineMath math="\mathbb{Q}" /> は無限体であるため、原始元定理の仮定をすべて満たす。したがって、この拡大には必ず原始元が存在する。
                        </p>
                        <p>
                            原始元の候補：<br />
                            典型的には、生成元の線形結合（例：<InlineMath math="\sqrt{2} + \sqrt{3} + \sqrt{5}" />）が原始元になることが多い。Example 2.4-1 と同様の手順により、これ一元で各根を記述できることが示される。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="2" number={8}>
                    <p>
                        標数 <InlineMath math="p" /> の有理関数体 <InlineMath math="F = \mathbb{F}_p(t)" /> 上の多項式 <InlineMath math="f(x) = x^p - t" /> が、<InlineMath math="F[x]" /> において既約であるが分離的ではないことを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            <strong>既約性：</strong><br />
                            一変数多項式環 <InlineMath math="\mathbb{F}_p[t]" /> において、<InlineMath math="t" /> は素元である。多項式 <InlineMath math="x^p - t" /> に対してアイゼンシュタインの判定法を適用すると、<InlineMath math="t" /> は定数項を割り切り、<InlineMath math="t^2" /> は割り切らないため、商体 <InlineMath math="F" /> 上で既約である。
                        </p>
                        <p className="mt-4">
                            <strong>非分離性：</strong><br />
                            形式的微分を計算すると、<InlineMath math="f'(x) = p x^{p-1} - 0" />。標数 <InlineMath math="p" /> において <InlineMath math="p = 0" /> であるため、<InlineMath math="f'(x) = 0" /> （ゼロ多項式）となる。
                        </p>
                        <p>
                            Theorem 2.1-1 より、多項式が重根を持たないためには <InlineMath math="\gcd(f, f') = 1" /> が必要であるが、この場合は <InlineMath math="\gcd(f, 0) = f" /> （次数 1 以上）となり、共通因数を持つ。実際、代数閉包における根 <InlineMath math="\alpha" /> に対して <InlineMath math="f(x) = (x - \alpha)^p" /> となり、全根が <InlineMath math="p" /> 重根となる（Example 2.2-1 参照）。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={9}>
                    <p>
                        体 <InlineMath math="F" /> 上の既約多項式 <InlineMath math="f(x)" /> が非分離（重根を持つ）であるための必要十分条件は、その形式的微分が <InlineMath math="f'(x) = 0" /> となることであることを証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            （<InlineMath math="\Leftarrow" />） <InlineMath math="f'(x) = 0" /> であれば、明らかに <InlineMath math="\gcd(f, f') = \gcd(f, 0) = f" /> である。<InlineMath math="\deg f \geq 1" /> なので <InlineMath math="\gcd \neq 1" /> であり、重根を持つ（非分離）。
                        </p>
                        <p className="mt-4">
                            （<InlineMath math="\Rightarrow" />） <InlineMath math="f(x)" /> が非分離であるとすると、<InlineMath math="\gcd(f(x), f'(x)) = d(x)" /> は次数 1 以上の多項式である。<InlineMath math="d(x)" /> は既約多項式 <InlineMath math="f(x)" /> を割り切るため、既約性の定義より <InlineMath math="d(x)" /> は <InlineMath math="f(x)" /> の定数倍でなければならない。
                        </p>
                        <p>
                            すなわち <InlineMath math="\deg d = \deg f" /> である。ところが、<InlineMath math="d(x)" /> は同時に <InlineMath math="f'(x)" /> をも割り切らなければならない。多項式の微分の性質より、<InlineMath math="f'(x)" /> の次数は <InlineMath math="f(x)" /> よりも小さい（<InlineMath math="\deg f' < \deg f" />）。
                        </p>
                        <p>
                            次数の小さい多項式が次数の大きい多項式で割り切れるのは、小さい方がゼロ多項式のときのみである。したがって、<InlineMath math="f'(x) = 0" /> でなければならない。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="2" number={10}>
                    <p>
                        原始元定理（Theorem 2.4-1）において、「分離拡大」という条件が不可欠であることを示すため、原始元を持たない有限次代数拡大の例（具体的に体とその拡大次数、およびなぜ原始元がないか）を簡潔に述べよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            例：標数 <InlineMath math="p" /> の有理関数体上の拡大 <InlineMath math="L = \mathbb{F}_p(u, v)" /> と <InlineMath math="F = \mathbb{F}_p(u^p, v^p)" />。
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>拡大次数：</strong> <InlineMath math="[L : F] = p^2" /> である。</li>
                            <li><strong>原始元の不在：</strong> 任意の元 <InlineMath math="\alpha \in L" /> の <InlineMath math="p" /> 乗を考えると、標数 <InlineMath math="p" /> の性質により <InlineMath math="\alpha^p \in F" /> となる。これは <InlineMath math="\alpha" /> の <InlineMath math="F" /> 上の最小多項式の次数が最大でも <InlineMath math="p" /> であることを意味する。</li>
                            <li><strong>結論：</strong> もし <InlineMath math="L = F(\alpha)" /> となる原始元が存在すれば、拡大次数は最小多項式の次数と一致し <InlineMath math="p" /> 以下になるはずだが、実際には <InlineMath math="p^2" /> であるため矛盾する。したがって原始元は存在しない。一般にこれは非分離拡大の典型例である（Remark 参照）。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
