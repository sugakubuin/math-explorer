import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_10_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">

                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        以下の位数を持ち得る有限体が存在するか、理由と共に答えよ。
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>12</li>
                        <li>25</li>
                    </ol>
                    <ExerciseSolution>
                        <p>
                            Proposition 4.1-1 より、有限体の位数は必ず素数 <InlineMath math="p" /> のべき乗 <InlineMath math="p^n" /> の形をしていなければならない。
                        </p>
                        <ol className="list-decimal list-inside space-y-2 mt-2">
                            <li><InlineMath math="12 = 2^2 \cdot 3" /> であり、単一の素数のべき乗ではないため、位数が 12 の有限体は<strong>存在しない</strong>。</li>
                            <li><InlineMath math="25 = 5^2" /> であり、素数 5 のべき乗であるため、位数が 25 の有限体は<strong>存在する</strong>。</li>
                        </ol>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        有限体 <InlineMath math="\mathbb{F}_{2^{12}}" /> に含まれる部分体の位数をすべて列挙せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Theorem 4.3-1 より、<InlineMath math="\mathbb{F}_{p^n}" /> の部分体は、指数の約数 <InlineMath math="d \mid n" /> に対応する <InlineMath math="\mathbb{F}_{p^d}" /> である。
                        </p>
                        <p>
                            <InlineMath math="12" /> の約数は <InlineMath math="1, 2, 3, 4, 6, 12" /> である。
                        </p>
                        <p>
                            よって、部分体の位数は <InlineMath math="2^1, 2^2, 2^3, 2^4, 2^6, 2^{12}" />、すなわち <strong>2, 4, 8, 16, 64, 4096</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        有限体 <InlineMath math="\mathbb{F}_9" /> を、剰余環 <InlineMath math="\mathbb{F}_3[x]/(x^2+1)" /> として構成する。このとき、元 <InlineMath math="\alpha = x + 1 \pmod{x^2+1}" /> のフロベニウス写像による像 <InlineMath math="\phi(\alpha)" /> を求めよ。（ただし <InlineMath math="\phi(a) = a^3" />）
                    </p>
                    <ExerciseSolution>
                        <p>
                            標数 3 のため、フロベニウス写像は <InlineMath math="\phi(\alpha) = (x+1)^3 = x^3 + 1" /> を満たす。
                        </p>
                        <p>
                            構成式 <InlineMath math="x^2 + 1 = 0" /> より、環において <InlineMath math="x^2 = -1 \equiv 2" /> である。
                        </p>
                        <BlockMath math="x^3 = x^2 \cdot x = 2x" />
                        <p>
                            したがって、
                        </p>
                        <BlockMath math="\phi(\alpha) = 2x + 1" />
                        <p>
                            （または <InlineMath math="-x+1" />）を得る。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="basic">

                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        標数 <InlineMath math="p" /> の体において、任意の元 <InlineMath math="a, b" /> に対して次が成り立つことを証明せよ。
                    </p>
                    <BlockMath math="(a+b)^p = a^p + b^p" />
                    <ExerciseSolution>
                        <p>
                            二項定理を用いる。
                        </p>
                        <BlockMath math="(a+b)^p = a^p + \sum_{k=1}^{p-1} \binom{p}{k} a^k b^{p-k} + b^p" />
                        <p>
                            二項係数 <InlineMath math="\binom{p}{k} = \frac{p!}{k!(p-k)!}" /> について、<InlineMath math="1 \leq k \leq p-1" /> のとき、分母の階乗はいずれも素数 <InlineMath math="p" /> を因数に持たないが、分子の <InlineMath math="p!" /> は <InlineMath math="p" /> を含む。
                        </p>
                        <p>
                            よって <InlineMath math="\binom{p}{k}" /> は <InlineMath math="p" /> の倍数であり、標数 <InlineMath math="p" /> の体上ではすべて <InlineMath math="0" /> になる。
                        </p>
                        <p>
                            これより両端の項だけが残り、<InlineMath math="(a+b)^p = a^p + b^p" /> が成り立つ。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        <InlineMath math="\mathbb{F}_2" /> 上の既約多項式 <InlineMath math="f(x) = x^3+x+1" /> を用いて構成される有限体 <InlineMath math="\mathbb{F}_8 = \mathbb{F}_2[x]/(f(x))" /> において、<InlineMath math="\alpha = x \pmod{f(x)}" /> とする。<InlineMath math="\alpha^4" /> を <InlineMath math="a\alpha^2 + b\alpha + c" /> （<InlineMath math="a, b, c \in \mathbb{F}_2" />）の形で表せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            関係式 <InlineMath math="\alpha^3 + \alpha + 1 = 0" /> より、<InlineMath math="\alpha^3 = -\alpha - 1 = \alpha + 1" /> （標数2）。
                        </p>
                        <p>
                            これに <InlineMath math="\alpha" /> を掛けると：
                        </p>
                        <BlockMath math="\alpha^4 = \alpha(\alpha^3) = \alpha(\alpha + 1) = \alpha^2 + \alpha" />
                        <p>
                            よって、<InlineMath math="\alpha^4 = \alpha^2 + \alpha" /> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        有限体 <InlineMath math="\mathbb{F}_q" /> の 0 でない元の集合 <InlineMath math="\mathbb{F}_q^\times" /> のすべての積を求めよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            乗法群 <InlineMath math="\mathbb{F}_q^\times" /> において、各元の逆元を考える。
                        </p>
                        <p>
                            元 <InlineMath math="x" /> とその逆元 <InlineMath math="x^{-1}" /> を掛け合わせると 1 になる。自分自身が逆元である（<InlineMath math="x = x^{-1} \iff x^2 = 1" />）のは、方程式 <InlineMath math="x^2 - 1 = (x-1)(x+1) = 0" /> の根、すなわち <InlineMath math="1" /> と <InlineMath math="-1" /> （標数2なら <InlineMath math="1" /> のみ）に限られる。
                        </p>
                        <p>
                            積の中で、それら以外の元はすべて逆元とペアになって打ち消し合い 1 となる。したがって、積全体は <InlineMath math="1 \cdot (-1) = -1" /> となる。
                        </p>
                        <p>
                            よって、元全体の積は <strong>-1</strong> である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                        <InlineMath math="d \mid n" /> のとき、<InlineMath math="\mathbb{F}_{p^n}" /> は <InlineMath math="\mathbb{F}_{p^d}" /> と同型な部分体をただ一つ含むことを、多項式の性質の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定理 4.2-2 の証明に基づけば、位数 <InlineMath math="p^k" /> の体は多項式 <InlineMath math="x^{p^k} - x" /> の根全体の集合として特徴づけられる。
                        </p>
                        <p>
                            <InlineMath math="d \mid n" /> のとき、多項式 <InlineMath math="x^{p^d} - x" /> は <InlineMath math="x^{p^n} - x" /> を割り切る（第 4 章 Proof 4.3-1 参照）。
                        </p>
                        <p>
                            したがって、<InlineMath math="x^{p^n} - x" /> の根全体の集合（すなわち <InlineMath math="\mathbb{F}_{p^n}" />）の中に、多項式 <InlineMath math="x^{p^d} - x" /> の根が過不足なく含まれている。
                        </p>
                        <p>
                            この根の集合こそが <InlineMath math="\mathbb{F}_{p^d}" /> に相当し、方程式の根の集合として確定するため一意に定まる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>

            <ExerciseCategory type="advanced">

                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        拡大 <InlineMath math="\mathbb{F}_{p^n}/\mathbb{F}_{p^d}" /> （<InlineMath math="d \mid n" />）のガロア群が、<InlineMath math="\Phi(a) = a^{p^d}" /> を生成元とする巡回群であることを示せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            1. <strong>自己同型性：</strong> <InlineMath math="\Phi" /> はフロベニウス写像 <InlineMath math="\phi(a) = a^p" /> の <InlineMath math="d" /> 回の合成であり、体の自己同型である。また、<InlineMath math="\mathbb{F}_{p^d}" /> の元 <InlineMath math="a" /> に対しては <InlineMath math="a^{p^d} = a" /> なので、基礎体を固定する。したがってガロア群の元である。
                        </p>
                        <p>
                            2. <strong>位数：</strong> <InlineMath math="\Phi" /> を <InlineMath math="k" /> 回掛けると <InlineMath math="\Phi^k(a) = a^{(p^d)^k} = a^{p^{dk}}" /> となる。これが恒等写像になるためには、すべての元に対して <InlineMath math="a^{p^{dk}} = a" /> が成り立つ必要があり、それは <InlineMath math="dk \geq n" /> である。よって最小の正整数は <InlineMath math="k = n/d" /> である。
                        </p>
                        <p>
                            3. <strong>群の構成：</strong> ガロア拡大の次数は <InlineMath math="[\mathbb{F}_{p^n} : \mathbb{F}_{p^d}] = n/d" /> である。
                        </p>
                        <p>
                            拡大次数とガロア群の位数は一致し、位数 <InlineMath math="n/d" /> の群が位数 <InlineMath math="n/d" /> の元 <InlineMath math="\Phi" /> を持っているため、巡回群となる。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        多項式 <InlineMath math="x^{p^n} - x \in \mathbb{F}_p[x]" /> が重根を持たない（分離的である）ことを形式的微分を用いて証明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            形式的微分を計算する。
                        </p>
                        <BlockMath math="f'(x) = p^n x^{p^n - 1} - 1" />
                        <p>
                            標数 <InlineMath math="p" /> において、<InlineMath math="p^n = 0" /> であるため、
                        </p>
                        <BlockMath math="f'(x) = 0 \cdot x^{p^n - 1} - 1 = -1" />
                        <p>
                            定数多項式 <InlineMath math="-1" /> は根を持たない。
                        </p>
                        <p>
                            Theorem 2.1-1 より、多項式が重根を持つためには <InlineMath math="f" /> と <InlineMath math="f'" /> が共通根を持つ必要があるが、<InlineMath math="f'" /> が根を持たないため、共通根も存在しない。
                        </p>
                        <p>
                            したがって、<InlineMath math="f(x)" /> は重根を持たず、分離多項式である。
                        </p>
                        <p className="text-right"><InlineMath math="\square" /></p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        有限体 <InlineMath math="\mathbb{F}_q" /> の元 <InlineMath math="\alpha" /> が条件 <InlineMath math="\mathbb{F}_q = \mathbb{F}_p(\alpha)" /> を満たすとき、<InlineMath math="\alpha" /> の <InlineMath math="\mathbb{F}_p" /> 上の最小多項式の次数を求めよ。（ここで <InlineMath math="q = p^n" /> とする）
                    </p>
                    <ExerciseSolution>
                        <p>
                            Proposition 1.3-1（最小多項式と次数の関係）を適用する。
                        </p>
                        <p>
                            拡大体 <InlineMath math="\mathbb{F}_q" /> が一元 <InlineMath math="\alpha" /> で生成されているとき、その拡大次数 <InlineMath math="[\mathbb{F}_q : \mathbb{F}_p]" /> は <InlineMath math="\alpha" /> の最小多項式の次数と一致する。
                        </p>
                        <p>
                            Proposition 4.1-1 で述べたように、位数 <InlineMath math="p^n" /> の有限体の素体上の拡大次数は <strong>n</strong> である。
                        </p>
                        <p>
                            したがって、最小多項式の次数は <strong>n</strong> である。これは「有限体上には任意の次数の既約多項式が存在する」ことの裏返しでもある。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

            </ExerciseCategory>
        </div>
    );
}
