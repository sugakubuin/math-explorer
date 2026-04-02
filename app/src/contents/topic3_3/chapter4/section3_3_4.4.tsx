import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LpCompleteness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                関数空間が解析学において有用である最大の理由は、その空間が「完備」である、すなわちコーシー列が必ずその空間内の元に収束することにあります。
                <InlineMath math="L^p" /> 空間の完備性を示すこの定理は、<b>リース・フィッシャーの定理</b>として知られています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リース・フィッシャーの定理 (Riesz-Fischer Theorem)</h2>

            <p>
                この定理により、<InlineMath math="L^p" /> 空間はバナッハ空間としての地位を確立します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.4-1 (L^p 空間の完備性)">
                <p>
                    <InlineMath math="1 \leq p \leq \infty" /> とすると、測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> 上の空間 <InlineMath math="L^p(X, \mu)" /> は <InlineMath math="L^p" /> ノルムに関して完備である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="1 \leq p < \infty" /> の場合について、一般的な方針を示す。
                    <InlineMath math="L^p" /> におけるコーシー列 <InlineMath math="\{f_n\}" /> をとる。
                    ある部分列 <InlineMath math="\{f_{n_k}\}" /> を選び、級数 <InlineMath math="\sum_{k=1}^\infty (f_{n_{k+1}} - f_{n_k})" /> が絶対収束するように調整する。
                </p>
                <p className="mt-4">
                    関数項級数 <InlineMath math="g(x) = |f_{n_1}(x)| + \sum_{k=1}^\infty |f_{n_{k+1}}(x) - f_{n_k}(x)|" /> を定義すると、単調収束定理により <InlineMath math="g \in L^p" /> であることが示せる。
                    したがって <InlineMath math="g(x) < \infty" /> a.e. であり、級数 <InlineMath math="f_{n_1}(x) + \sum_{k=1}^\infty (f_{n_{k+1}}(x) - f_{n_k}(x))" /> は a.e. で各点収束して極限 <InlineMath math="f(x)" /> を持つ。
                </p>
                <p className="mt-4">
                    最後に、この極限関数 <InlineMath math="f" /> が <InlineMath math="L^p" /> の元であり、元の列がこの <InlineMath math="f" /> にノルム収束することを、ファトゥの補題や優収束定理を用いて確認する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-6">
                この完備性は、リーマン積分に基づく空間では一般に成立せず、ルベーグ積分を導入した最大の恩恵の一つです。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (完備性が役立つ場面)">
                <p>
                    例えば、フーリエ級数の収束を考える際、各点収束を議論するのは非常に困難ですが、<InlineMath math="L^2" /> ノルム収束（平均二乗収束）であれば、完備性を用いることで「収束極限としての関数」の存在を容易に保証できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="バナッハ空間と関数解析">
                <p>
                    <InlineMath math="L^p" /> が完備であることを用いて、さらに高度な関数解析学へと発展します。
                    「空間そのものを点とみなして操作する」という現代数学の視点は、この完備性という盤石な土台の上に成り立っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="L^p" /> 空間の完備性</b>（リース・フィッシャーの定理）は、ルベーグ積分論の根幹をなす。</li>
                    <li>コーシー列が必ず <InlineMath math="L^p" /> の元に収束することを保証する。</li>
                    <li>これにより、収束極限の存在証明が容易になり、関数解析への道が開かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
