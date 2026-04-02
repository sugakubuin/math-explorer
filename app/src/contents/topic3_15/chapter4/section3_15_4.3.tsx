import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function YonedaEmbeddingAndApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                米田の補題の最も重要な帰結は、任意の圏が「関手圏」の中にすっぽりと埋め込めることを保証する「米田埋め込み」です。これにより、抽象的な対象を「具体的な集合値関手」として扱うことが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">米田埋め込み</h2>

            <ContentBox
                type="theorem"
                title="Theorem 4.3-1 (米田埋め込み / Yoneda Embedding)"
            >
                <p>
                    任意の局所小圏 <InlineMath math="\mathcal{C}" /> に対して、対象 <InlineMath math="A" /> に反変 hom 関手 <InlineMath math="\mathrm{Hom}(-, A)" /> を対応させる関手
                    <BlockMath math="\mathcal{Y} : \mathcal{C} \to [\mathcal{C}^{op}, \mathbf{Set}]" />
                    を考える。この関手 <InlineMath math="\mathcal{Y}" /> （米田埋め込み）は<strong>充満忠実（Fully Faithful）</strong>である。
                </p>
                <p>
                    特に、関手が充満忠実であることから、対象の同型性はそのまま保存される。すなわち、
                    <BlockMath math="A \cong B \iff \mathrm{Hom}(-, A) \cong \mathrm{Hom}(-, B)" />
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    関手 <InlineMath math="\mathcal{Y}" /> が充満忠実であるとは、任意の対象 <InlineMath math="A, B \in \mathcal{C}" /> において、射の集合の間の写像
                    <BlockMath math="\mathcal{Y}_{A,B} : \mathrm{Hom}_{\mathcal{C}}(A, B) \to \mathrm{Hom}_{[\mathcal{C}^{op}, \mathbf{Set}]}(\mathcal{Y}(A), \mathcal{Y}(B))" />
                    が全単射になることである。
                </p>
                <p>
                    右辺の関手圏における射の集合とは、自然変換の集合 <InlineMath math="\mathrm{Nat}(\mathrm{Hom}(-, A), \mathrm{Hom}(-, B))" /> に他ならない。
                    ここで、反変関手版の米田の補題において、関手 <InlineMath math="F" /> を <InlineMath math="\mathrm{Hom}(-, B)" /> と置くと、
                    <BlockMath math="\mathrm{Nat}(\mathrm{Hom}(-, A), \mathrm{Hom}(-, B)) \cong \mathrm{Hom}(A, B)" />
                    という自然な全単射が得られる。
                </p>
                <p>
                    この米田の補題が与える全単射は、まさに射 <InlineMath math="f : A \to B" /> から引き起こされる自然変換 <InlineMath math="f \circ -" /> への対応 <InlineMath math="\mathcal{Y}_{A,B}" /> と一致する。したがって、<InlineMath math="\mathcal{Y}" /> は充満忠実である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.3-1 (米田埋め込みの意味とプレ層)"
            >
                <p>
                    関手圏 <InlineMath math="[\mathcal{C}^{op}, \mathbf{Set}]" /> の対象（反変関手）のことを、圏論や代数幾何学の文脈ではしばしば<strong>プレ層（Presheaf）</strong>と呼ぶ。
                </p>
                <p>
                    米田埋め込みの定理は、「どんな抽象的な圏 <InlineMath math="\mathcal{C}" /> の対象 <InlineMath math="A" /> も、プレ層の圏という（集合論的に扱いやすい）豊かで具体的な圏の中に、情報を一切失うことなく（充満忠実に）埋め込める」ことを保証している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">表現可能関手の応用</h2>

            <p className="leading-relaxed">
                米田の補題（および米田埋め込み）は、対象そのものを直接構成しなくても、その「普遍性」さえ定義すれば対象が同型を除いて一意に定まることを保証します。
            </p>

            <ContentBox
                type="example"
                title="Example 4.3-2 (テンソル積の普遍性の再定式化)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V, W" /> のテンソル積 <InlineMath math="V \otimes W" /> の普遍性は、「<InlineMath math="V \times W" /> から任意のベクトル空間 <InlineMath math="Z" /> への双線形写像は、<InlineMath math="V \otimes W" /> から <InlineMath math="Z" /> への線形写像と一対一対応する」というものであった（Topic 3-11 参照）。
                </p>
                <p>
                    これを関手の言葉で書き直す。<InlineMath math="Z" /> を変数とする関手 <InlineMath math="\mathrm{Bilin}(V \times W, -)" /> を考えると、テンソル積の普遍性とは、自然同型
                    <BlockMath math="\mathrm{Hom}(V \otimes W, -) \cong \mathrm{Bilin}(V \times W, -)" />
                    が存在する（すなわち関手 <InlineMath math="\mathrm{Bilin}" /> が表現可能である）ことに他ならない。
                </p>
                <p>
                    ここで米田埋め込み（の共変版）による <InlineMath math="X \cong Y \iff \mathrm{Hom}(X, -) \cong \mathrm{Hom}(Y, -)" /> を用いると、自然同型 <InlineMath math="\mathrm{Hom}(T, -) \cong \mathrm{Bilin}(V \times W, -)" /> を満たす対象 <InlineMath math="T" /> があれば、それは（存在すれば）同型を除いて一意に定まることが自動的に保証される。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="米田の補題の哲学的含意"
            >
                <p>
                    米田の補題が示しているのは、ある対象 <InlineMath math="A" /> を知るためには、<InlineMath math="A" /> の中身（どんな要素を持っているか）を見る必要は全くなく、<strong>「他のすべての対象から <InlineMath math="A" /> へどのように射が伸びているか（または <InlineMath math="A" /> から伸びているか）」という「関係性のネットワーク」さえ把握すれば、<InlineMath math="A" /> を完全に特定できる</strong>ということです。
                </p>
                <p>
                    要素ではなく関係性で物事を理解する。これこそが「ある種の外部的認識論」とも呼べる圏論の最も深遠な哲学であり、現代数学を根底から変革した視点です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>対象 <InlineMath math="A" /> を hom 関手 <InlineMath math="\mathrm{Hom}(-, A)" /> に送る対応を<strong>米田埋め込み</strong>と呼ぶ。</li>
                    <li>米田埋め込みは<strong>充満忠実</strong>であり、対象の情報を一切損なわずにプレ層の圏に埋め込むことができる。</li>
                    <li>これによって「対象は、他のすべての対象との関係性（射の集まり）によって完全に決定される」ことが定理として保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
