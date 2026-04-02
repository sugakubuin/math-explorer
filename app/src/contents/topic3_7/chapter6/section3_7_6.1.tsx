import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlmostSureConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数列の収束には、いくつかの異なる概念が存在します。
                その中でも最も強力で直感的な収束の形が、本節で扱う「概収束（almost sure convergence）」です。
                これは、個々の試行の結果に対して値が収束することを意味します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">概収束の定義</h2>

            <p className="leading-relaxed">
                概収束は、測度論における「ほとんど至る所での収束（convergence almost everywhere）」に相当します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (概収束)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の確率変数列 <InlineMath math="\{X_n\}" /> が確率変数 <InlineMath math="X" /> に<b>概収束</b>（almost sure convergence）するとは、
                    次が成り立つことである：
                    <BlockMath math="P\left(\lim_{n \to \infty} X_n = X\right) = 1" />
                    これを <InlineMath math="X_n \to X \text{ a.s.}" /> と表記する。より厳密には、
                    <InlineMath math="P(\{\omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega) \}) = 1" /> を意味する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な例を通じて、概収束が「ほとんどすべての標本点で値が収束している」状態であることを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (べき関数列の概収束)">
                <p>
                    標本空間を <InlineMath math="\Omega = [0, 1]" /> とし、<InlineMath math="P" /> を一様分布（ルベーグ測度）とする。
                    ここで、確率変数列を <InlineMath math="X_n(\omega) = \omega^n" /> と定義する。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\omega < 1" /> のとき、<InlineMath math="\lim_{n \to \infty} X_n(\omega) = 0" /> である。</li>
                    <li><InlineMath math="\omega = 1" /> のとき、<InlineMath math="\lim_{n \to \infty} X_n(\omega) = 1" /> である。</li>
                </ul>
                <p>
                    極限値が <InlineMath math="0" /> にならない標本点は <InlineMath math="\omega = 1" /> のみであり、
                    その確率は <InlineMath math="P(\{1\}) = 0" /> である。
                    したがって、<InlineMath math="X_n \to 0 \text{ a.s.}" /> が成り立つ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一方で、確率的には収束に寄与していても、各点で見ると激しく振動し続けるような場合は概収束しません。
            </p>

            <ContentBox type="example" title="Example 6.1-2 (概収束しない例：型渡り関数)">
                <p>
                    同じく <InlineMath math="\Omega = [0, 1]" /> 上の一様分布において、区間 <InlineMath math="[0, 1]" /> を移動しながら幅を狭めていく指示関数列を考える（いわゆる型渡り関数列、typewriter sequence）。
                    この列はある意味で <InlineMath math="0" /> に「確率収束（§6.2）」するが、任意の標本点 <InlineMath math="\omega" /> において値は無限に <InlineMath math="0" /> と <InlineMath math="1" /> を往復し続ける。
                    このため、極限が確定せず、<InlineMath math="0" /> に概収束することはない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">概収束の判定</h2>

            <p className="leading-relaxed">
                概収束を証明するためには、極限の定義に立ち返る以外に、ボレル・カンテリの補題を背景とした便利な判定条件があります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (概収束の判定条件)">
                <p>
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、次が成り立つならば <InlineMath math="X_n \to X \text{ a.s.}" /> である：
                    <BlockMath math="\sum_{n=1}^\infty P(|X_n - X| > \varepsilon) < \infty" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    事象 <InlineMath math="A_n(\varepsilon) = \{ |X_n - X| > \varepsilon \}" /> とおく。
                    仮定 <InlineMath math="\sum P(A_n(\varepsilon)) < \infty" /> より、ボレル・カンテリの第 1 補題（§8.1）を適用すると、
                    <BlockMath math="P(\limsup_{n \to \infty} A_n(\varepsilon)) = 0" />
                    が導かれる。これは確率 1 で「事象 <InlineMath math="A_n(\varepsilon)" /> が有限回しか起こらない」ことを意味する。
                    言い換えれば、確率 1 で「十分大きな <InlineMath math="N" /> 以降ではすべての <InlineMath math="n \geq N" /> について <InlineMath math="|X_n - X| \leq \varepsilon" />」が成り立つ。
                    これがすべての正理数 <InlineMath math="\varepsilon" /> について成り立つことから、定義により <InlineMath math="X_n \to X \text{ a.s.}" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 概収束と測度論">
                <p>
                    概収束は測度論における「ほとんど至る所（a.e.）での収束」そのものです。
                    確率論では標本空間 <InlineMath math="\Omega" /> の構造が明示されないことも多いですが、
                    大数の強法則（Strong Law of Large Numbers）など、理論の極限を扱う際にはこの概収束が決定的な役割を果たします。
                    これは「平均の推移がほぼ確実に真の値へ近づく」ことを保証するためです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>概収束 <InlineMath math="X_n \to X \text{ a.s.}" /> は、標本点ごとに値が収束する事象の確率が 1 であることを指す。</li>
                    <li>標本点が不動であっても、列の振る舞い（型渡り関数など）によっては概収束しない場合がある。</li>
                    <li>判定条件 <InlineMath math="\sum P(|X_n - X| > \varepsilon) < \infty" /> は、概収束を証明する際の実用的な道具となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
