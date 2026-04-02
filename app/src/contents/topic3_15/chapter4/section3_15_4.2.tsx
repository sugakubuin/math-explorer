import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function YonedaLemmaStatementAndProof() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                表現可能関手と普遍元の関係をさらに一般化し、「hom関手から任意の関手への自然変換全体」が何と対応するかを完全に解明したのが、圏論において最も有名かつ重要な定理である「米田の補題（Yoneda Lemma）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">米田の補題</h2>

            <ContentBox
                type="theorem"
                title="Theorem 4.2-1 (米田の補題 / Yoneda Lemma)"
            >
                <p>
                    局所小圏 <InlineMath math="\mathcal{C}" />、その対象 <InlineMath math="A \in \mathcal{C}" />、および集合への関手 <InlineMath math="F : \mathcal{C} \to \mathbf{Set}" /> を任意に固定する。
                    このとき、hom関手 <InlineMath math="\mathrm{Hom}(A, -)" /> から関手 <InlineMath math="F" /> への<strong>自然変換の集合 <InlineMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F)" /></strong> と、集合 <strong><InlineMath math="F(A)" /></strong> の間には、自然な全単射が存在する。
                </p>
                <BlockMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F) \cong F(A)" />
                <p>
                    この全単射は、自然変換 <InlineMath math="\eta" /> に対して、その <InlineMath math="A" /> 成分 <InlineMath math="\eta_A" /> で恒等射 <InlineMath math="\mathrm{id}_A" /> を送った元を対応させる写像 <InlineMath math="\eta \mapsto \eta_A(\mathrm{id}_A)" /> によって与えられる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    与えられた写像を <InlineMath math="\Phi : \mathrm{Nat}(\mathrm{Hom}(A, -), F) \to F(A)" />, <InlineMath math="\Phi(\eta) = \eta_A(\mathrm{id}_A)" /> とする。
                    この逆写像 <InlineMath math="\Psi : F(A) \to \mathrm{Nat}(\mathrm{Hom}(A, -), F)" /> を構成し、互いに逆であることを示す。
                </p>
                <p>
                    <strong>1. 逆写像の構成：</strong><br/>
                    任意の元 <InlineMath math="u \in F(A)" /> に対して、自然変換 <InlineMath math="\eta^u = \Psi(u)" /> を次のように定義する。
                    各対象 <InlineMath math="B" /> における成分 <InlineMath math="\eta^u_B : \mathrm{Hom}(A, B) \to F(B)" /> は、射 <InlineMath math="f : A \to B" /> に対して
                    <BlockMath math="\eta^u_B(f) = F(f)(u)" />
                    と定める。
                </p>
                <p>
                    <strong>2. <InlineMath math="\eta^u" /> が自然変換であることの確認：</strong><br/>
                    任意の射 <InlineMath math="g : B \to C" /> について自然性条件 <InlineMath math="F(g) \circ \eta^u_B = \eta^u_C \circ (g \circ -)" /> を確認する。
                    任意の <InlineMath math="f \in \mathrm{Hom}(A, B)" /> に対して、
                    <BlockMath math="\begin{aligned} F(g)(\eta^u_B(f)) &= F(g)(F(f)(u)) \\ &= (F(g) \circ F(f))(u) \\ &= F(g \circ f)(u) \quad (\because F \text{ は関手}) \\ &= \eta^u_C(g \circ f) \\ &= \eta^u_C((g \circ -)(f)) \end{aligned}" />
                    となり、可換図式が成立するため、確かに自然変換である。
                </p>
                <p>
                    <strong>3. 互いに逆であることの確認：</strong><br/>
                    <InlineMath math="\Phi \circ \Psi = \mathrm{id}_{F(A)}" /> について：
                    <InlineMath math="\Phi(\Psi(u)) = \Phi(\eta^u) = \eta^u_A(\mathrm{id}_A) = F(\mathrm{id}_A)(u) = \mathrm{id}_{F(A)}(u) = u" />。
                </p>
                <p>
                    <InlineMath math="\Psi \circ \Phi = \mathrm{id}_{\mathrm{Nat}}" /> について：
                    任意の自然変換 <InlineMath math="\eta" /> から <InlineMath math="u = \eta_A(\mathrm{id}_A)" /> を作り、そこから <InlineMath math="\eta^u" /> を構成したとき、
                    任意の射 <InlineMath math="f : A \to B" /> に対して <InlineMath math="\eta^u_B(f) = F(f)(\eta_A(\mathrm{id}_A))" />。
                    ここで <InlineMath math="\eta" /> 自身の自然性条件（<InlineMath math="A \xrightarrow{f} B" /> に関するもの）を <InlineMath math="\mathrm{id}_A" /> に適用すると、
                    <InlineMath math="F(f)(\eta_A(\mathrm{id}_A)) = \eta_B(\mathrm{id}_B \circ f) = \eta_B(f)" />。
                    よって <InlineMath math="\eta^u_B(f) = \eta_B(f)" /> となり、<InlineMath math="\eta^u = \eta" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                米田の補題の証明自体は「自然性条件の図式を書き下し、恒等射を代入するだけ」という非常に機械的な計算に帰着します。しかし、これが持つ意味は極めて重大です。
            </p>

            <ContentBox
                type="example"
                title="Example 4.2-1 (米田の補題の具体例)"
            >
                <p>
                    <InlineMath math="\mathcal{C} = \mathbf{Grp}" />、対象 <InlineMath math="A = \mathbb{Z}" />、関手 <InlineMath math="F = U" />（忘却関手）とする。
                </p>
                <p>
                    米田の補題を適用すると、
                    <BlockMath math="\mathrm{Nat}(\mathrm{Hom}_\mathbf{Grp}(\mathbb{Z}, -), U) \cong U(\mathbb{Z}) = \mathbb{Z}" />
                    となる。これは、「<InlineMath math="\mathbb{Z}" /> からの群準同型の集合から、群の台集合への自然な対応付け（自然変換）」は、整数 <InlineMath math="n \in \mathbb{Z}" /> の選び方と完全に一対一対応することを意味している。
                </p>
                <p>
                    整数 <InlineMath math="n" /> を選んだときに対応する自然変換 <InlineMath math="\eta^n" /> は、各群 <InlineMath math="G" /> に対して、群準同型 <InlineMath math="f : \mathbb{Z} \to G" /> を受け取り、元の群の要素 <InlineMath math="f(n) \in G" /> を返す写像 <InlineMath math="\eta^n_G(f) = f(n)" /> として具体的に与えられる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">米田の補題の「自然性」</h2>

            <p className="leading-relaxed">
                米田の補題のステートメントに含まれる「自然な全単射」という言葉には、厳密な圏論的意味があります。
            </p>

            <ContentBox
                type="remark"
                title="双自然性（Dinaturality）"
            >
                <p>
                    全単射 <InlineMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F) \cong F(A)" /> は、単に要素の数が同じというだけでなく、<strong>対象 <InlineMath math="A" /> と関手 <InlineMath math="F" /> の両方を動かしたときにも、矛盾なく関手として振る舞う</strong>ことを主張しています。
                </p>
                <p>
                    すなわち、対象 <InlineMath math="A" /> を固定して <InlineMath math="F" /> を動かすと「関手圏から集合への関手」の自然同型となり、関手 <InlineMath math="F" /> を固定して <InlineMath math="A" /> を動かすと「<InlineMath math="\mathcal{C}^{op}" /> から集合への関手」の自然同型となります。このように複数の引数に関して自然性を持つことを双自然（dinatural）と呼びます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>米田の補題：</strong> 自然変換の集合 <InlineMath math="\mathrm{Nat}(\mathrm{Hom}(A, -), F)" /> は、単なる集合 <InlineMath math="F(A)" /> と自然に一対一対応する。</li>
                    <li>自然変換 <InlineMath math="\eta" /> は、たった1つの元 <InlineMath math="\eta_A(\mathrm{id}_A)" /> の行き先を決めるだけで、すべての対象への成分が完全に決定されてしまう。</li>
                    <li>証明自体は恒等射の代入と自然性条件の確認から機械的に導かれるが、圏論におけるあらゆる構成の基盤となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
