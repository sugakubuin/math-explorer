import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { ExerciseCategory, ExerciseProblem, ExerciseSolution } from '../../../components/content/ExerciseComponents';

export default function Exercises3_4_Chapter4() {
    return (
        <div>
            <ExerciseCategory type="confirmation">
                <ExerciseProblem chapterId="4" number={1}>
                    <p>
                        <b>シュワルツ空間 (Schwartz space)</b> <InlineMath math="\mathcal{S}(\mathbb{R})" /> の定義を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.1-1 に基づき、複素数値関数 <InlineMath math="f \in C^\infty(\mathbb{R})" /> が任意の非負整数 <InlineMath math="k, m" /> に対し
                        </p>
                        <BlockMath math="\|f\|_{k,m} = \sup_{x \in \mathbb{R}} |x^k f^{(m)}(x)| < \infty" />
                        <p>
                             を満たすとき、 <InlineMath math="f" /> をシュワルツ関数と呼び、その全体をシュワルツ空間と呼ぶ。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={2}>
                    <p>
                        <b>テンパード超関数 (Tempered distribution)</b> <InlineMath math="\mathcal{S}'(\mathbb{R})" /> を定義せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.2-1 に基づき、シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R})" /> 上の連続な線形汎関数の全体をテンパード超関数と定義する。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={3}>
                    <p>
                        シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R}^d)" /> における多次元フーリエ変換の定義式を記せ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            Definition 4.3-1 に基づき、
                        </p>
                        <BlockMath math="\hat{f}(\boldsymbol{\xi}) = \int_{\mathbb{R}^d} f(\mathbf{x}) e^{-i \boldsymbol{\xi} \cdot \mathbf{x}} d\mathbf{x}" />
                        <p>
                            ここで、 <InlineMath math="\boldsymbol{\xi} \cdot \mathbf{x}" /> はベクトルの内積である。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="basic">
                <ExerciseProblem chapterId="4" number={4}>
                    <p>
                        次の関数のうち、シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R})" /> に属さないものをすべて挙げ、その理由を簡潔に述べよ（Example 4.1-2 参照）。
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>(ア) <InlineMath math="e^{-x^2}" /></li>
                        <li>(イ) <InlineMath math="e^{-|x|}" /></li>
                        <li>(ウ) <InlineMath math="x^n e^{-x^2}" /></li>
                        <li>(エ) <InlineMath math="\frac{1}{1+x^2}" /></li>
                    </ul>
                    <ExerciseSolution>
                        <p>
                            属さないものは <b>(イ)</b> および <b>(エ)</b> である。
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li><b>(イ)</b>: <InlineMath math="x=0" /> で微分不可能（ <InlineMath math="C^\infty" /> ではない）ため。</li>
                            <li><b>(エ)</b>: 無限遠での減衰が遅い（ <InlineMath math="x^4 f(x) \to \infty" /> となるなど、多項式によって有界に抑えられない）ため。</li>
                        </ul>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={5}>
                    <p>
                        超関数の定義に基づき、<b>ディラックのデルタ関数</b>のフーリエ変換 <InlineMath math="\hat{\delta}" /> が定数関数 1 であることを示せ（Example 4.2-1 参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            任意のテスト関数 <InlineMath math="\phi \in \mathcal{S}" /> に対し、超関数のフーリエ変換の定義 <InlineMath math="\langle \hat{\delta}, \phi \rangle = \langle \delta, \hat{\phi} \rangle" /> を用いる。
                        </p>
                        <BlockMath math="\langle \hat{\delta}, \phi \rangle = \langle \delta, \hat{\phi} \rangle = \hat{\phi}(0)" />
                        <p>
                             <InlineMath math="\hat{\phi}(0)" /> は定義により <InlineMath math="\int_{-\infty}^{\infty} \phi(x) e^{-i0x} dx = \int_{-\infty}^{\infty} \phi(x) dx" /> である。
                            これは定数関数 1 とテスト関数との内積 <InlineMath math="\langle 1, \phi \rangle" /> に等しい。
                        </p>
                        <BlockMath math="\langle \hat{\delta}, \phi \rangle = \langle 1, \phi \rangle \implies \hat{\delta} = 1" />
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={6}>
                    <p>
                        ヘヴィサイド関数 <InlineMath math="H(x)" /> の超関数としての微分 <InlineMath math="H'" /> を求めよ（Example 4.2-2）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            定義 <InlineMath math="\langle H', \phi \rangle = - \langle H, \phi' \rangle" /> に基づき計算する。
                        </p>
                        <BlockMath math="\begin{aligned} \langle H', \phi \rangle &= - \int_0^{\infty} \phi'(x) dx \\ &= - [\phi(x)]_0^{\infty} \\ &= 0 - (-\phi(0)) = \phi(0) \end{aligned}" />
                        <p>
                            これはデルタ関数の定義そのものであるため、 <b><InlineMath math="H' = \delta" /></b> となる。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={7}>
                    <p>
                         <InlineMath math="d" /> 次元のガウス関数 <InlineMath math="f(\mathbf{x}) = e^{-|\mathbf{x}|^2}" /> のフーリエ変換を、分離変数型の性質を用いて求めよ（Example 4.3-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                             <InlineMath math="f(\mathbf{x}) = e^{-x_1^2} e^{-x_2^2} \dots e^{-x_d^2}" /> と分解できる（分離変数型）。
                            一変数のガウス関数のフーリエ変換が <InlineMath math="\sqrt{\pi} e^{-\xi^2/4}" /> であることを用いて、
                        </p>
                        <BlockMath math="\hat{f}(\boldsymbol{\xi}) = \prod_{k=1}^d \sqrt{\pi} e^{-\xi_k^2/4} = \pi^{d/2} e^{-|\boldsymbol{\xi}|^2/4}" />
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>

            <ExerciseCategory type="advanced">
                <ExerciseProblem chapterId="4" number={8}>
                    <p>
                        正規化された関数 <InlineMath math="\|f\|_2 = 1" /> に対する<b>ハイゼンベルクの不確定性原理</b>（不等式）を記せ。また、この不等式において等号を達成する関数はどのような形状か述べよ（Theorem 4.4-1）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            不等式は以下の通りである。
                        </p>
                        <BlockMath math="\left( \int_{-\infty}^{\infty} x^2 |f(x)|^2 dx \right) \left( \int_{-\infty}^{\infty} \xi^2 |\hat{f}(\xi)|^2 \frac{d\xi}{2\pi} \right) \geq \frac{1}{4}" />
                        <p>
                            等号が成立するのは、 <b>ガウス関数</b> <InlineMath math="f(x) = C e^{-ax^2}" /> のとき第のみである。
                            これはガウス関数が「時間領域と周波数領域の情報の局在性において、最もバランスよく最小の積を達成する」唯一の波形であることを示している。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={9}>
                    <p>
                        シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R})" /> 上でフーリエ変換が自己同型であることの重要性を、超関数の定義可能性（Definition 4.2-2 証アウトライン）の観点から説明せよ。
                    </p>
                    <ExerciseSolution>
                        <p>
                            超関数のフーリエ変換は、双対性を利用して <InlineMath math="\langle \hat{T}, \phi \rangle = \langle T, \hat{\phi} \rangle" /> と定義される。
                            この定義が有効であるためには、右辺の <b><InlineMath math="\hat{\phi}" /> が常にテスト関数空間 <InlineMath math="\mathcal{S}" /> に留まっていること</b> が不可欠である。
                        </p>
                        <p className="mt-2">
                            もしフーリエ変換によって性質（滑らかさや減衰速度）が失われてしまうと、 <InlineMath math="\hat{T}" /> の定義が崩壊する。シュワルツ空間の自己同型性は、フーリエ変換という操作が「性質の良さ」を完全に保存することを保証するため、超関数という極めて広い世界においてもフーリエ解析を数学的に厳密に行うことを可能にしている。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>

                <ExerciseProblem chapterId="4" number={10}>
                    <p>
                        物理学における「位置 <InlineMath math="x" />」と「運動量 <InlineMath math="p" />」の不確定性関係（ <InlineMath math="\Delta x \Delta p \ge \hbar/2" /> ）が、本節で学んだ数学的な不確定性原理とどのように接続されているか述べよ（Example 4.4-1 備考参照）。
                    </p>
                    <ExerciseSolution>
                        <p>
                            量子力学において、粒子の状態は波動関数 <InlineMath math="\psi(x)" /> で表され、運動量空間の波動関数は <InlineMath math="\psi" /> のフーリエ変換で与えられる（正確にはスケール因子 <InlineMath math="\hbar" /> を伴う）。
                        </p>
                        <p className="mt-2">
                            数学的変数 <InlineMath math="\xi" /> を運動量に読み替えると、不確定性原理の不等式はそのまま「粒子の位置のばらつきと運動量のばらつきの積には理論的な下限が存在する」という物理的知見に一致する。つまり、ミクロな世界の根源的な制約は、フーリエ変換という数学的写像が本質的に持っているドメイン間のトレードオフから導出されているのである。
                        </p>
                    </ExerciseSolution>
                </ExerciseProblem>
            </ExerciseCategory>
        </div>
    );
}
