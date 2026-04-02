import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_9_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で学んだ「陰関数定理」と本章の「逆写像定理」は、証明のアプローチや結論の形が一見異なるように見えますが、実は数学的に全く同値な定理です。
                一方が証明できれば、もう一方を導くことができます。本節ではその関係性を明確にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の同値性</h2>

            <p>
                定理が「同値である」とは、定理Aを仮定して定理Bが証明でき、逆に定理Bを仮定して定理Aが証明できることを意味します。
            </p>

            <ContentBox type="proposition" title="Proposition 9.3-1 (逆写像定理と陰関数定理の同値性)">
                <p>
                    多変数関数の「逆写像定理（Theorem 9.2-1）」と「陰関数定理（Theorem 8.2-1）」は同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定理の記述の煩雑さを避けるため、各点・近傍・微分の連続性等の細かな条件はそれぞれ満たされているものとして、本質的な構成の部分について証明する。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[1. 逆写像定理 <InlineMath math="\implies" /> 陰関数定理]</p>
                <p className="mt-2">
                    前章での陰関数定理の証明（Theorem 8.2-1 の Proof Outline として提示したもの）がまさにこれに該当する。
                </p>
                <p className="mt-2">
                    与えられた方程式 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = \mathbf{0}" />（<InlineMath math="\mathbf{x} \in \mathbb{R}^n, \mathbf{y} \in \mathbb{R}^m, \mathbf{F} \in \mathbb{R}^m" />）に対し、新しい写像 <InlineMath math="\mathbf{G}: \mathbb{R}^{n+m} \to \mathbb{R}^{n+m}" /> を
                </p>
                <BlockMath math="\mathbf{G}(\mathbf{x}, \mathbf{y}) = \begin{pmatrix} \mathbf{x} \\ \mathbf{F}(\mathbf{x}, \mathbf{y}) \end{pmatrix} = \begin{pmatrix} \mathbf{u} \\ \mathbf{v} \end{pmatrix}" />
                <p className="mt-2">
                    と定義する。点 <InlineMath math="(\mathbf{a}, \mathbf{b})" /> における <InlineMath math="\mathbf{G}" /> のヤコビアンは
                </p>
                <BlockMath math="\det J_{\mathbf{G}}(\mathbf{a}, \mathbf{b}) = \det \begin{pmatrix} I_n & O \\ J_{\mathbf{x}}\mathbf{F} & J_{\mathbf{y}}\mathbf{F} \end{pmatrix} = \det J_{\mathbf{y}}\mathbf{F}(\mathbf{a}, \mathbf{b})" />
                <p className="mt-2">
                    となる。陰関数定理の仮定「<InlineMath math="\det J_{\mathbf{y}}\mathbf{F} \neq 0" />」より、<InlineMath math="\det J_{\mathbf{G}} \neq 0" /> となる。
                    したがって逆写像定理を <InlineMath math="\mathbf{G}" /> に適用でき、局所的な逆写像 <InlineMath math="\mathbf{G}^{-1}(\mathbf{u}, \mathbf{v}) = (\mathbf{u}, \mathbf{h}(\mathbf{u}, \mathbf{v}))" /> が存在する。
                </p>
                <p className="mt-2">
                    ここで <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y}) = \mathbf{0}" /> なる関係は、<InlineMath math="\mathbf{v} = \mathbf{0}" /> すなわち <InlineMath math="\mathbf{G}(\mathbf{x}, \mathbf{y}) = (\mathbf{x}, \mathbf{0})" /> と同値であるから、逆写像を用いて
                </p>
                <BlockMath math="\begin{pmatrix} \mathbf{x} \\ \mathbf{y} \end{pmatrix} = \mathbf{G}^{-1}(\mathbf{x}, \mathbf{0}) = \begin{pmatrix} \mathbf{x} \\ \mathbf{h}(\mathbf{x}, \mathbf{0}) \end{pmatrix}" />
                <p className="mt-2">
                    と書ける。よって <InlineMath math="\mathbf{f}(\mathbf{x}) = \mathbf{h}(\mathbf{x}, \mathbf{0})" /> とおけば、これが求める陰関数 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> となる。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[2. 陰関数定理 <InlineMath math="\implies" /> 逆写像定理]</p>
                <p className="mt-2">
                    逆写像定理の状況を考える。写像 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" />（<InlineMath math="\mathbf{x}, \mathbf{y} \in \mathbb{R}^n" />）が、点 <InlineMath math="\mathbf{a}" /> で <InlineMath math="\det J_{\mathbf{f}}(\mathbf{a}) \neq 0" /> を満たすとする。
                </p>
                <p className="mt-2">
                    ここで、<InlineMath math="2n" /> 個の変数 <InlineMath math="(\mathbf{x}, \mathbf{y})" /> に対する <InlineMath math="n" /> 個の方程式として、新しい関数 <InlineMath math="\mathbf{F}(\mathbf{x}, \mathbf{y})" /> を次のように定義する：
                </p>
                <BlockMath math="\mathbf{F}(\mathbf{y}, \mathbf{x}) = \mathbf{f}(\mathbf{x}) - \mathbf{y} = \mathbf{0}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ 陰関数定理の記法に合わせるため、独立変数側を <InlineMath math="\mathbf{y}" />、解きたい変数側を <InlineMath math="\mathbf{x}" /> として扱うことに注意）
                </p>
                <p className="mt-2">
                    方程式 <InlineMath math="\mathbf{F} = \mathbf{0}" /> から「<InlineMath math="\mathbf{x}" /> を <InlineMath math="\mathbf{y}" /> の関数として解けるか」という問題は、まさに「<InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> の逆写像 <InlineMath math="\mathbf{x} = \mathbf{f}^{-1}(\mathbf{y})" /> が存在するか」という問題に他ならない。
                </p>
                <p className="mt-2">
                    ここで、<InlineMath math="\mathbf{F}" /> を解きたい変数 <InlineMath math="\mathbf{x}" /> で偏微分したヤコビ行列を計算すると、
                </p>
                <BlockMath math="J_{\mathbf{x}} \mathbf{F}(\mathbf{y}, \mathbf{x}) = J_{\mathbf{x}} (\mathbf{f}(\mathbf{x}) - \mathbf{y}) = J_{\mathbf{f}}(\mathbf{x})" />
                <p className="mt-2">
                    となる。仮定より点 <InlineMath math="\mathbf{a}" /> において <InlineMath math="\det J_{\mathbf{x}} \mathbf{F}(\mathbf{b}, \mathbf{a}) = \det J_{\mathbf{f}}(\mathbf{a}) \neq 0" /> （ただし <InlineMath math="\mathbf{b} = \mathbf{f}(\mathbf{a})" />）である。
                </p>
                <p className="mt-2">
                    したがって、陰関数定理の条件が全て満たされるため、点 <InlineMath math="\mathbf{b}" /> の近傍で定義された一意な <InlineMath math="C^1" /> 級関数 <InlineMath math="\mathbf{x} = \mathbf{g}(\mathbf{y})" /> が存在し、それは局所的に <InlineMath math="\mathbf{F}(\mathbf{y}, \mathbf{g}(\mathbf{y})) = \mathbf{0}" />、すなわち <InlineMath math="\mathbf{f}(\mathbf{g}(\mathbf{y})) = \mathbf{y}" /> を満たす。
                    これがまさに求める局所的な逆写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このように、「新しい変数を導入して方程式の数を増やす（逆 <InlineMath math="\implies" /> 陰）」「方程式を移項して従属変数を独立変数とみなす（陰 <InlineMath math="\implies" /> 逆）」というトリックによって、両者は完全に翻訳可能です。
                解析学における強力な「存在定理」の2つの側面と言えるでしょう。
            </p>

        </section>
    );
}
