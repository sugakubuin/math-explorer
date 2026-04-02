import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexEigenvalues() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列 <InlineMath math="A" /> の成分がすべて実数であっても、固有値は複素数になることがあります。
                この場合、前節の手法をそのまま適用すると解に虚数が現れますが、複素共役な固有値のペアを利用することで、
                実数のみで構成された解（実数基本解系）を導き出すことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素固有値と実数解</h2>

            <p>
                実正方行列が複素固有値 <InlineMath math="\lambda" /> を持つなら、その複素共役 <InlineMath math="\bar{\lambda}" /> も必ず固有値となります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (実数解の導出)">
                <p>
                    固有値 <InlineMath math="\lambda = \alpha + \beta i" /> に対応する固有ベクトルを <InlineMath math="\mathbf{v} = \mathbf{p} + \mathbf{q}i" /> （ <InlineMath math="\mathbf{p}, \mathbf{q}" /> は実ベクトル）とする。
                    このとき、複素解 <InlineMath math="\mathbf{z}(x) = e^{\lambda x} \mathbf{v}" /> の実部と虚部
                    <BlockMath math="\begin{aligned} \mathbf{y}_1(x) &= \text{Re}(\mathbf{z}) = e^{\alpha x} (\mathbf{p} \cos \beta x - \mathbf{q} \sin \beta x) \\ \mathbf{y}_2(x) &= \text{Im}(\mathbf{z}) = e^{\alpha x} (\mathbf{p} \sin \beta x + \mathbf{q} \cos \beta x) \end{aligned}" />
                    は、ともに斉次連立方程式の実数解であり、互いに一次独立である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="L\mathbf{z} = \mathbf{z}' - A\mathbf{z} = 0" /> より、
                    <BlockMath math="L(\mathbf{y}_1 + i\mathbf{y}_2) = L\mathbf{y}_1 + i L\mathbf{y}_2 = \mathbf{0} + i\mathbf{0}" />
                    実部と虚部を比較すれば、 <InlineMath math="L\mathbf{y}_1 = 0, L\mathbf{y}_2 = 0" /> が得られる。
                    また、オイラーの公式 <InlineMath math="e^{(\alpha + \beta i)x} = e^{\alpha x}(\cos \beta x + i \sin \beta x)" /> を用いて展開すると：
                    <BlockMath math="\begin{aligned} &(e^{\alpha x} \cos \beta x + i e^{\alpha x} \sin \beta x) (\mathbf{p} + i\mathbf{q}) \\ &= e^{\alpha x} (\mathbf{p} \cos \beta x - \mathbf{q} \sin \beta x) + i e^{\alpha x} (\mathbf{p} \sin \beta x + \mathbf{q} \cos \beta x) \end{aligned}" />
                    となり、定理の表現が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的解釈：相平面上の回転</h2>

            <ContentBox type="example" title="Example 6.3-1 (回転運動)">
                <p><strong>問題：</strong> <InlineMath math="\mathbf{y}' = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix} \mathbf{y}" /> の一般解を求め、軌道の概形を述べよ。</p>
                <div className="mt-4 space-y-4">
                    <p><strong>固有値とベクトル：</strong>
                        <br />固有方程式 <InlineMath math="\lambda^2 + 4 = 0" /> より、 <InlineMath math="\lambda = \pm 2i" />。
                        <br /><InlineMath math="\lambda = 2i" /> に対して <InlineMath math="\begin{pmatrix} -2i & -2 \\ 2 & -2i \end{pmatrix} \mathbf{v} = 0 \implies \mathbf{v} = \begin{pmatrix} 1 \\ -i \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + i \begin{pmatrix} 0 \\ -1 \end{pmatrix}" />。
                    </p>
                    <p><strong>実数解の構成（ α = 0, β = 2, p = (1, 0)ᵀ, q = (0, -1)ᵀ ）：</strong>
                        <BlockMath math="\begin{aligned} \mathbf{y}_1 &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \cos 2x - \begin{pmatrix} 0 \\ -1 \end{pmatrix} \sin 2x = \begin{pmatrix} \cos 2x \\ \sin 2x \end{pmatrix} \\ \mathbf{y}_2 &= \begin{pmatrix} 1 \\ 0 \end{pmatrix} \sin 2x + \begin{pmatrix} 0 \\ -1 \end{pmatrix} \cos 2x = \begin{pmatrix} \sin 2x \\ -\cos 2x \end{pmatrix} \end{aligned}" />
                    </p>
                    <p><strong>軌道の解釈：</strong>
                        一般解は円運動（あるいは主軸が回転した楕円）を表す。相平面上で解の軌道を描くと、原点を中心とした<strong>閉じた曲線（中心）</strong>となる。
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>実数化のテクニック</strong>： 複素形式の解の実部と虚部を取り出すことで、実数係数の方程式にふさわしい実数解が得られる。</li>
                    <li><strong>振動現象</strong>： 固有値の虚部 <InlineMath math="\beta" /> は解の振動（回転）周期を、実部 <InlineMath math="\alpha" /> は振幅の拡大・縮小（螺旋）を支配する。</li>
                    <li><strong>安定性の予兆</strong>： <InlineMath math="\alpha = 0" /> のとき軌道は閉じ、 <InlineMath math="\alpha < 0" /> なら原点へ収束、 <InlineMath math="\alpha > 0" /> なら原点から遠ざかる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
