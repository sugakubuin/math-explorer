import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BasicPropertiesOfCompactSets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではコンパクト性の定義を確認しました。
                本節では、コンパクト集合が持つ非常に強力な性質をいくつか紹介します。
                これらの性質は、連続像の保存、ハウスドルフ空間における閉集合性、そして閉部分集合のコンパクト性の継承など、位相空間論の核心的な部分をカバーしています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続写像による像の保存</h2>

            <p>
                コンパクト性は連続写像によって保存されます。これは「コンパクト性が位相的不変量である」ことを意味する重要な結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (連続像の保存)">
                <p>
                    <InlineMath math="X, Y" /> を位相空間とし、<InlineMath math="f: X \to Y" /> を連続写像とする。
                    <InlineMath math="K \subset X" /> がコンパクトであれば、その像 <InlineMath math="f(K) \subset Y" /> もコンパクトである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f(K)" /> の任意の開被覆 <InlineMath math="\mathcal{V} = \{V_\lambda\}_{\lambda \in \Lambda}" /> をとる。
                    各 <InlineMath math="V_\lambda" /> は <InlineMath math="Y" /> の開集合である。
                </p>
                <p className="mt-2">
                    <InlineMath math="f" /> は連続なので、各逆像 <InlineMath math="U_\lambda = f^{-1}(V_\lambda)" /> は <InlineMath math="X" /> の開集合である。
                    また、<InlineMath math="f(K) \subset \bigcup V_\lambda" /> より、
                    <BlockMath math="K \subset f^{-1}(f(K)) \subset f^{-1}\left(\bigcup_{\lambda \in \Lambda} V_\lambda\right) = \bigcup_{\lambda \in \Lambda} f^{-1}(V_\lambda) = \bigcup_{\lambda \in \Lambda} U_\lambda" />
                    が成り立つ。したがって、<InlineMath math="\{U_\lambda\}_{\lambda \in \Lambda}" /> は <InlineMath math="K" /> の開被覆である。
                </p>
                <p className="mt-2">
                    <InlineMath math="K" /> のコンパクト性より、ある有限個の添字 <InlineMath math="\lambda_1, \dots, \lambda_n" /> が存在して、
                    <BlockMath math="K \subset U_{\lambda_1} \cup \dots \cup U_{\lambda_n}" />
                    が成り立つ。この両辺を <InlineMath math="f" /> で送ると、
                    <BlockMath math="\begin{aligned} f(K) &\subset f(U_{\lambda_1} \cup \dots \cup U_{\lambda_n}) \\ &= f(U_{\lambda_1}) \cup \dots \cup f(U_{\lambda_n}) \subset V_{\lambda_1} \cup \dots \cup V_{\lambda_n} \end{aligned}" />
                    となる。よって、<InlineMath math="\{V_{\lambda_1}, \dots, V_{\lambda_n}\}" /> は <InlineMath math="f(K)" /> の有限部分被覆である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-1 (連続像の例)">
                <p>
                    実数直線上の連続関数 <InlineMath math="f(x) = \sin x" /> を考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        閉区間 <InlineMath math="K = [0, 2\pi]" /> はコンパクト集合です。
                    </li>
                    <li>
                        その像は <InlineMath math="f(K) = [-1, 1]" /> となり、これもまたコンパクト（有界閉集合）です。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハウスドルフ空間内のコンパクト集合</h2>

            <p>
                一般に、コンパクト集合が閉集合であるとは限りませんが、空間がハウスドルフ空間であれば閉集合であることが保証されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-2 (ハウスドルフ空間内のコンパクト集合)">
                <p>
                    ハウスドルフ空間 <InlineMath math="X" /> の任意のコンパクト部分集合 <InlineMath math="K" /> は閉集合である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="X \setminus K" /> が開集合であることを示す。すなわち、任意の点 <InlineMath math="x \in X \setminus K" /> に対して、<InlineMath math="x \in U" /> かつ <InlineMath math="U \cap K = \emptyset" /> となる開集合 <InlineMath math="U" /> が存在することを示す。
                </p>
                <p className="mt-2">
                    固定された <InlineMath math="x \notin K" /> に対し、各点 <InlineMath math="y \in K" /> を考える。
                    <InlineMath math="X" /> はハウスドルフなので、<InlineMath math="x" /> と <InlineMath math="y" /> は交わらない開集合 <InlineMath math="U_y, V_y" /> (<InlineMath math="x \in U_y, y \in V_y, U_y \cap V_y = \emptyset" />) で分離できる。
                </p>
                <p className="mt-2">
                    族 <InlineMath math="\{V_y\}_{y \in K}" /> は <InlineMath math="K" /> の開被覆である。
                    <InlineMath math="K" /> のコンパクト性より、有限個の点 <InlineMath math="y_1, \dots, y_n \in K" /> が存在して、
                    <InlineMath math="K \subset V_{y_1} \cup \dots \cup V_{y_n}" />
                    となる。
                </p>
                <p className="mt-2">
                    ここで、<InlineMath math="U = U_{y_1} \cap \dots \cap U_{y_n}" /> とおき、<InlineMath math="V = V_{y_1} \cup \dots \cup V_{y_n}" /> とおくと、
                    <InlineMath math="U" /> は有限個の開集合の共通部分なので開集合であり、<InlineMath math="x" /> を含む。
                    また、各 <InlineMath math="i" /> に対して <InlineMath math="U \subset U_{y_i}" /> かつ <InlineMath math="V_{y_i} \subset V" /> であり、さらに <InlineMath math="U_{y_i} \cap V_{y_i} = \emptyset" /> なので、
                    <InlineMath math="U \cap V = \emptyset" /> である。
                </p>
                <p className="mt-2">
                    <InlineMath math="K \subset V" /> なので、当然 <InlineMath math="U \cap K = \emptyset" /> である。
                    したがって、<InlineMath math="X \setminus K" /> は開集合であり、<InlineMath math="K" /> は閉集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉部分集合のコンパクト性</h2>

            <p>
                全空間がコンパクトであれば、その閉部分集合もまたコンパクトになります。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-1 (コンパクト空間の閉部分集合)">
                <p>
                    コンパクト空間 <InlineMath math="X" /> の閉部分集合 <InlineMath math="A" /> はコンパクトである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="A" /> の開被覆 <InlineMath math="\mathcal{U} = \{U_\lambda\}_{\lambda \in \Lambda}" /> をとる。
                    各 <InlineMath math="U_\lambda" /> は <InlineMath math="X" /> の開集合である。
                </p>
                <p className="mt-2">
                    <InlineMath math="A" /> は閉集合なので、<InlineMath math="X \setminus A" /> は <InlineMath math="X" /> の開集合である。
                    ここで、族 <InlineMath math="\mathcal{U} \cup \{X \setminus A\}" /> を考えると、これは <InlineMath math="X" /> 全体の開被覆となっている。
                </p>
                <p className="mt-2">
                    <InlineMath math="X" /> のコンパクト性より、この被覆から有限部分被覆が選べる。
                    もしその有限個の中に <InlineMath math="X \setminus A" /> が含まれていなければ、それら有限個の <InlineMath math="U_\lambda" /> だけで <InlineMath math="X" />（したがって <InlineMath math="A" />）を覆っている。
                    もし含まれていれば、それ以外の（有限個の）<InlineMath math="U_\lambda" /> たちが <InlineMath math="A" /> を覆っていることになり（なぜなら <InlineMath math="X \setminus A" /> は <InlineMath math="A" /> の点を含まないから）、いずれにせよ <InlineMath math="A" /> の有限部分被覆が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="コンパクト性と閉集合性">
                <p>
                    以上の定理をまとめると、ハウスドルフ空間においては「コンパクト」と「閉集合」は非常に密接な関係にあることが分かります。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>コンパクト空間内の閉集合はコンパクト。</li>
                    <li>ハウスドルフ空間内のコンパクト集合は閉集合。</li>
                </ul>
                <p className="mt-2">
                    この対応関係は、第4章で学んだ同相写像の判定などにおいて決定的な役割を果たします。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連続像の保存</strong>：コンパクト集合を連続写像で送った先もコンパクトである。</li>
                    <li><strong>ハウスドルフ空間</strong>においては、コンパクト集合は常に<strong>閉集合</strong>である。</li>
                    <li><strong>コンパクト空間</strong>内の<strong>閉部分集合</strong>は常にコンパクトである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
