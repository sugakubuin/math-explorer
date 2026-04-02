import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SymmetricMatrixEigenvalues() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「実対称行列は、必ず直交行列を用いて対角化することができる。」<br />
                これは線形代数学において最も美しく、最も強力な結論の一つである「スペクトル定理（Spectral Theorem）」の主張です。<br />
                本章では、この驚くべき定理の背景にある数学的な構造を、2つの重要なステップに分けて完全に証明していきます。<br />
                まずは最初のステップ、<strong>「実対称行列の固有値はすべて実数になる」</strong>という事実の証明からです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有値の実数性</h2>

            <p>
                一般に、成分がすべて実数である行列（実行列）であっても、特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を解くと、複素数の解（虚数となる固有値）が現れることがあります。たとえば回転行列の一部などがその例です。<br />
                しかし、行列が<strong>対称（<InlineMath math="A^T = A" />）</strong>であるというただ一つの条件が加わるだけで、そのような複素数の固有値は一切現れず、すべての固有値が実数になることが保証されます。
            </p>

            <ContentBox type="theorem" title="Theorem 11.1-1 （実対称行列の固有値はすべて実数）">
                <p>
                    <InlineMath math="A" /> を <InlineMath math="n \times n" /> の実対称行列（すなわち <InlineMath math="A^T = A" /> かつ各成分が実数）とする。<br />
                    このとき、<InlineMath math="A" /> の特性方程式の解（固有値）は<strong>すべて実数</strong>である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この証明の鍵は、実数の行列 <InlineMath math="A" /> をあえて**複素数の世界（複素ベクトル空間 <InlineMath math="\mathbb{C}^n" />）**で考えることです。<br />
                    もし固有値が実数であることを証明したいなら、「固有値が自分自身の複素共役と等しい（<InlineMath math="\overline{\lambda} = \lambda" />）」ことを示せばよいことになります。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>固有値と固有ベクトルの設定：</strong><br />
                        複素数の範囲で考えたとき、<InlineMath math="A" /> の任意の固有値を <InlineMath math="\lambda \in \mathbb{C}" /> とし、対応する固有ベクトルを <InlineMath math="\boldsymbol{x} \in \mathbb{C}^n" /> （ただし <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" />）とする。すなわち次が成り立つ。
                        <BlockMath math="A \boldsymbol{x} = \lambda \boldsymbol{x}" />
                    </li>
                    <li>
                        <strong>両辺の複素共役をとる：</strong><br />
                        上の式の両辺の（各成分の）複素共役をとる。<InlineMath math="A" /> は実行列なので <InlineMath math="\overline{A} = A" /> であることに注意する。
                        <BlockMath math="\overline{A \boldsymbol{x}} = \overline{\lambda \boldsymbol{x}}" />
                        <BlockMath math="A \overline{\boldsymbol{x}} = \overline{\lambda} \overline{\boldsymbol{x}}" />
                        式変形より、<InlineMath math="\overline{\lambda}" /> は <InlineMath math="A" /> の固有値であり、<InlineMath math="\overline{\boldsymbol{x}}" /> はその固有ベクトルであることがわかる。
                    </li>
                    <li>
                        <strong>エルミート内積を用いた計算：</strong><br />
                        ここで、<InlineMath math="\mathbb{C}^n" /> の標準内積（エルミート内積） <InlineMath math="\langle \boldsymbol{x}, \boldsymbol{y} \rangle = \boldsymbol{x}^* \boldsymbol{y}" /> を考える（<InlineMath math="\boldsymbol{x}^* = \overline{\boldsymbol{x}}^T" /> は共役転置）。<br />
                        内積 <InlineMath math="\langle A\boldsymbol{x}, \boldsymbol{x} \rangle" /> （すなわち <InlineMath math="(A\boldsymbol{x})^* \boldsymbol{x}" />）を2通りの方法で計算する。
                    </li>
                    <li className="list-none">
                        <strong>アプローチ A（作用素を先に評価）：</strong><br />
                        <InlineMath math="A\boldsymbol{x} = \lambda \boldsymbol{x}" /> を代入する。<br />
                        <BlockMath math="(A\boldsymbol{x})^* \boldsymbol{x} = (\lambda \boldsymbol{x})^* \boldsymbol{x} = \overline{\lambda} \boldsymbol{x}^* \boldsymbol{x} = \overline{\lambda} \|\boldsymbol{x}\|^2" />
                    </li>
                    <li className="list-none">
                        <strong>アプローチ B（随伴作用素（転置）への移動）：</strong><br />
                        <InlineMath math="(A\boldsymbol{x})^* = \boldsymbol{x}^* A^*" /> となるが、<InlineMath math="A" /> は実行列かつ対称行列なので <InlineMath math="A^* = \overline{A}^T = A^T = A" /> である。
                        <BlockMath math="(A\boldsymbol{x})^* \boldsymbol{x} = \boldsymbol{x}^* A^* \boldsymbol{x} = \boldsymbol{x}^* A \boldsymbol{x}" />
                        ここで <InlineMath math="A\boldsymbol{x} = \lambda \boldsymbol{x}" /> を代入する。
                        <BlockMath math="\boldsymbol{x}^* (A\boldsymbol{x}) = \boldsymbol{x}^* (\lambda \boldsymbol{x}) = \lambda \boldsymbol{x}^* \boldsymbol{x} = \lambda \|\boldsymbol{x}\|^2" />
                    </li>
                    <li>
                        <strong>結果の比較：</strong><br />
                        アプローチAとアプローチBの結果は同じものを計算しているため等しい。
                        <BlockMath math="\overline{\lambda} \|\boldsymbol{x}\|^2 = \lambda \|\boldsymbol{x}\|^2" />
                        <InlineMath math="\boldsymbol{x}" /> は固有ベクトルなので零ベクトルではなく、<InlineMath math="\|\boldsymbol{x}\|^2 > 0" /> である。<br />
                        両辺を <InlineMath math="\|\boldsymbol{x}\|^2" /> で割ると、
                        <BlockMath math="\overline{\lambda} = \lambda" />
                        が得られる。「複素共役が自分自身と等しい」ということは、<InlineMath math="\lambda" /> が実数であることを意味する。
                        
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="この証明の意義">
                <p>
                    この証明は、<InlineMath math="A" /> が「実」かつ「対称」であるという性質（すなわち自己随伴 <InlineMath math="A^* = A" /> であること）をフル活用しています。<br />
                    物理学（量子力学など）においては、エルミート行列（複素空間における自己随伴行列）の固有値が必ず実数になるという定理が、「観測可能な物理量（エネルギーなど）の測定結果は必ず実数になる」という自然界の基本原理を数学的に保証しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§11.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実対称行列の特性方程式を解いて得られる固有値は、どのような場合でも<strong>すべて実数</strong>となる。</li>
                    <li>この事実は、複素ベクトル空間における内積（エルミート内積）と、対称行列が自己随伴（<InlineMath math="A^*=A" />）である性質を組み合わせることで鮮やかに証明される。</li>
                    <li>これにより、実対称行列を扱う際には複素数を一切気にせず、実数の世界（<InlineMath math="\mathbb{R}^n" />）だけで議論を完結できることが保証された。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
