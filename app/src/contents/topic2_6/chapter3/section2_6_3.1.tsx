import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinearEquationsAndSuperposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分方程式の世界において、「線形性」を持つ方程式は格別に美しい構造を持っています。
                線形代数学で学んだ「線形結合」や「ベクトル空間」の概念が、微分方程式の解の集まり（解空間）にもそのまま適用できるからです。
                本節では、高階線形微分方程式の定義と、その解の最も基本的な性質である「重ね合わせの原理」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高階線形微分方程式</h2>

            <p>
                未知関数とその導関数の 1 次式のみで構成される方程式を線形微分方程式と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (n 階線形微分方程式)">
                <p>
                    未知関数 <InlineMath math="y(x)" /> に関する次の方程式を <strong><InlineMath math="n" /> 階線形微分方程式</strong> と呼ぶ：
                    <BlockMath math="\begin{aligned} a_n(x)y^{(n)} + &a_{n-1}(x)y^{(n-1)} + \cdots \\ &+ a_1(x)y' + a_0(x)y = q(x) \end{aligned}" />
                    ここで <InlineMath math="a_i(x)" /> および <InlineMath math="q(x)" /> はある区間 <InlineMath math="I" /> で連続な関数であり、 <InlineMath math="a_n(x) \neq 0" /> とする。
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    <li><InlineMath math="q(x) = 0" /> のとき、この方程式を<strong>斉次 (homogeneous)</strong> であるという。</li>
                    <li><InlineMath math="q(x) \neq 0" /> のとき、この方程式を<strong>非斉次 (non-homogeneous)</strong> であるという。</li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                微分演算子 <InlineMath math="L = a_n(x)\frac{d^n}{dx^n} + \cdots + a_0(x)" /> を用いると、線形方程式は簡潔に <InlineMath math="Ly = q" /> と書き表すことができます。
                この演算子 <InlineMath math="L" /> は線形性（ <InlineMath math="L(c_1y_1 + c_2y_2) = c_1Ly_1 + c_2Ly_2" /> ）を持つため、次の重要な原理が導かれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">重ね合わせの原理</h2>

            <p>
                斉次線形方程式の解を組み合わせて新しい解を作ることができる、という性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (重ね合わせの原理)">
                <p>
                    斉次線形微分方程式 <InlineMath math="Ly = 0" /> の 2 つの解を <InlineMath math="\phi_1(x), \phi_2(x)" /> とすると、
                    その任意の線形結合
                    <BlockMath math="y = c_1\phi_1(x) + c_2\phi_2(x) \quad (c_1, c_2 \text{ は定数})" />
                    もまた、この方程式の解である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    微分演算子 <InlineMath math="L" /> の線形性を利用する。
                    <InlineMath math="Ly_1 = 0" /> かつ <InlineMath math="Ly_2 = 0" /> であるとき、次の計算が成り立つ：
                    <BlockMath math="\begin{aligned} L(c_1\phi_1 + c_2\phi_2) &= L(c_1\phi_1) + L(c_2\phi_2) \\ &= c_1L(\phi_1) + c_2L(\phi_2) \\ &= c_1 \cdot 0 + c_2 \cdot 0 = 0 \end{aligned}" />
                    したがって、線形結合 <InlineMath math="c_1\phi_1 + c_2\phi_2" /> も元の斉次方程式を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (重ね合わせの利用)">
                <p>
                    2 階微分方程式 <InlineMath math="y'' + y = 0" /> を考える。
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><InlineMath math="\phi_1 = \sin x" /> は解である（ <InlineMath math="-\sin x + \sin x = 0" /> ）。</li>
                        <li><InlineMath math="\phi_2 = \cos x" /> は解である（ <InlineMath math="-\cos x + \cos x = 0" /> ）。</li>
                    </ul>
                    重ね合わせの原理より、任意の定数 <InlineMath math="c_1, c_2" /> を用いて
                    <BlockMath math="y = c_1 \sin x + c_2 \cos x" />
                    と書ける関数はすべてこの方程式の解となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解空間の構造</h2>

            <p>
                重ね合わせの原理は、斉次方程式の解の集合が「ベクトル空間」をなすことを意味しています。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-2 (斉次方程式の解空間の次元)">
                <p>
                    <InlineMath math="n" /> 階斉次線形微分方程式 <InlineMath math="Ly = 0" /> の解全体が成す集合 <InlineMath math="V" /> は、
                    通常の関数の加法とスカラー倍に関して、 <InlineMath math="n" /> 次元のベクトル空間をなす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    重ね合わせの原理（Theorem 3.1-1）より、解の集合 <InlineMath math="V" /> がベクトル空間であることは既知とする。
                    次元が <InlineMath math="n" /> であることを示すため、固定した点 <InlineMath math="x_0 \in I" /> に対して、解 <InlineMath math="\phi(x)" /> にその値ベクトルを対応させる写像 <InlineMath math="\Phi: V \to \mathbb{R}^n" /> を次のように定義する：
                    <BlockMath math="\Phi(\phi) = \begin{pmatrix} \phi(x_0) \\ \phi'(x_0) \\ \vdots \\ \phi^{(n-1)}(x_0) \end{pmatrix}" />
                    この写像 <InlineMath math="\Phi" /> について以下が成り立つ：
                </p>
                <ol className="list-decimal list-inside mt-4 space-y-2 ml-4">
                    <li><strong>線形性：</strong> 微分の線形性より明らかである。</li>
                    <li><strong>単射性：</strong> <InlineMath math="\Phi(\phi) = \mathbf{0}" /> とすると、初期値問題の一意性（Theorem 2.3-1 の高階版）により <InlineMath math="\phi(x) \equiv 0" /> となる。よって <InlineMath math="\ker \Phi = \{0\}" /> である。</li>
                    <li><strong>全射性：</strong> 任意の値ベクトル <InlineMath math="\mathbf{v} \in \mathbb{R}^n" /> に対して、初期値問題の存在定理により、 <InlineMath math="\Phi(\phi) = \mathbf{v}" /> を満たす解 <InlineMath math="\phi \in V" /> が少なくとも一つ存在する。</li>
                </ol>
                <p className="mt-4">
                    これより、 <InlineMath math="\Phi" /> はベクトル空間の同型写像である。
                    したがって、 <InlineMath math="\dim V = \dim \mathbb{R}^n = n" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="次元が n であることの意義">
                <p>
                    解空間が <InlineMath math="n" /> 次元であるということは、<strong>「 <InlineMath math="n" /> 個の一次独立な解を見つけさえすれば、すべての解をその線形結合で表せる」</strong>という非常に強力な結論を導きます。
                    この「 <InlineMath math="n" /> 個の独立な解」のセットを<strong>基本解系</strong>と呼び、それを決めるための道具として、次節で学ぶ「ロンスキアン」が活躍します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>線形微分方程式</strong>： 未知関数とその導関数に関する 1 次の方程式。</li>
                    <li><strong>重ね合わせの原理</strong>： 解の線形結合もまた解となる（斉次の場合）。</li>
                    <li><strong>解空間の次元</strong>： <InlineMath math="n" /> 階なら解空間は必ず <InlineMath math="n" /> 次元になる。</li>
                    <li><strong>一般解の構成</strong>： <InlineMath math="n" /> 個の独立な解の線形結合が、解のすべてを尽くす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
