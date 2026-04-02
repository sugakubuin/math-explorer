import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AdjointUniquenessAndLimits() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                随伴関手は非常に強い制約条件であるため、もし関手が随伴を持つならば、それは同型を除いてただ1つに決まってしまいます。そして本章の総仕上げとして、Chapter 5 で予告した「右随伴は極限を保存する（RAPL）」の定理を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">随伴の一意性</h2>

            <ContentBox
                type="theorem"
                title="Theorem 6.3-1 (随伴の一意性)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathcal{D}" /> の右随伴が存在すれば、それは自然同型の意味で一意に定まる。
                    同様に、左随伴が存在すれば一意に定まる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="F" /> に2つの右随伴 <InlineMath math="G" /> と <InlineMath math="G'" /> が存在したと仮定する。随伴の定義より、任意の <InlineMath math="A \in \mathcal{C}, B \in \mathcal{D}" /> に対して以下の全単射が自然に成立する。
                </p>
                <BlockMath math="\mathrm{Hom}_\mathcal{C}(A, G(B)) \cong \mathrm{Hom}_\mathcal{D}(F(A), B) \cong \mathrm{Hom}_\mathcal{C}(A, G'(B))" />
                <p>
                    この同型は <InlineMath math="A" /> について自然である。したがって、表現可能関手としての自然同型
                    <BlockMath math="\mathrm{Hom}(-, G(B)) \cong \mathrm{Hom}(-, G'(B))" />
                    が得られたことになる。
                </p>
                <p>
                    Chapter 4 の米田の補題（の系である米田埋め込みが充満忠実であること）から、hom 関手が同型であれば、それを表現している対象同士も同型でなければならない。
                    したがって <InlineMath math="G(B) \cong G'(B)" /> であり、この同型は <InlineMath math="B" /> についても自然であるため、関手として <InlineMath math="G \cong G'" />（自然同型）であることが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.3-1 (一意性の応用)"
            >
                <p>
                    この定理は、「自由群」や「テンソル積」が同型を除いて一意に存在することを自動的に保証する。
                    なぜなら、これらは忘却関手や hom 関手の「左随伴」として定義されるため、随伴の一意性から、構成方法によらず結果は必ず自然同型になるからである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">随伴関手と極限の保存（再訪）</h2>

            <p className="leading-relaxed">
                それでは、Chapter 5 で提示した「右随伴は極限を保存する（RAPL）」の証明を、これまでに準備した米田の補題と随伴の定義を使って行いましょう。
            </p>

            <ContentBox
                type="proof"
                title="Proof (Theorem 5.4-1 の証明: 右随伴は極限を保存する / RAPL)"
            >
                <p>
                    <InlineMath math="F \dashv G" /> （<InlineMath math="F : \mathcal{C} \to \mathcal{D}" />, <InlineMath math="G : \mathcal{D} \to \mathcal{C}" />）とする。
                    <InlineMath math="\mathcal{D}" /> の図式 <InlineMath math="D : \mathcal{J} \to \mathcal{D}" /> の極限が <InlineMath math="L = \varprojlim D" /> として存在するとする。
                    示したいのは、<InlineMath math="G(L)" /> が図式 <InlineMath math="G \circ D" /> の極限になっていること、すなわち <InlineMath math="G(\varprojlim D) \cong \varprojlim (G \circ D)" /> である。
                </p>
                <p>
                    任意の対象 <InlineMath math="A \in \mathcal{C}" /> から <InlineMath math="G(L)" /> への射の集合を計算する。
                </p>
                <BlockMath math="\begin{aligned} &\mathrm{Hom}_\mathcal{C}(A, G(L)) \\ &\cong \mathrm{Hom}_\mathcal{D}(F(A), L) \\ &\quad (\because \text{随伴 } F \dashv G \text{ の定義}) \\ &\cong \mathrm{Cone}_\mathcal{D}(F(A), D) \\ &\quad (\because L \text{ は極限なので普遍性を持つ}) \end{aligned}" />
                <p>
                    ここで、<InlineMath math="F(A)" /> から図式 <InlineMath math="D" /> への錐の集合 <InlineMath math="\mathrm{Cone}_\mathcal{D}(F(A), D)" /> の要素は、射の族 <InlineMath math="\{ f_j : F(A) \to D(j) \}" /> で可換条件を満たすものである。
                    この各射に対して再び随伴の全単射を適用すると、<InlineMath math="f_j" /> は <InlineMath math="A \to G(D(j))" /> という射に一対一で対応し、可換条件もそのまま保たれる。
                </p>
                <p>
                    したがって、
                    <BlockMath math="\begin{aligned} &\mathrm{Cone}_\mathcal{D}(F(A), D) \\ &\cong \mathrm{Cone}_\mathcal{C}(A, G \circ D) \\ &\quad (\because \text{随伴の全単射の自然性}) \\ &\cong \mathrm{Hom}_\mathcal{C}(A, \varprojlim (G \circ D)) \\ &\quad (\because \text{極限の普遍性}) \end{aligned}" />
                </p>
                <p>
                    以上を繋げると、任意の <InlineMath math="A" /> について
                    <BlockMath math="\mathrm{Hom}_\mathcal{C}(A, G(L)) \cong \mathrm{Hom}_\mathcal{C}(A, \varprojlim (G \circ D))" />
                    という自然同型が得られた。
                    再び米田の補題（表現可能関手による対象の一意性）を用いることで、対象として
                    <BlockMath math="G(L) \cong \varprojlim (G \circ D)" />
                    であることが結論づけられる。（左随伴が余極限を保存することも双対原理から全く同様に示される。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="随伴関手定理の予告"
            >
                <p>
                    「右随伴関手ならば、極限を保存する」という定理の「逆」は成り立つでしょうか。
                    すなわち「極限を保存する関手は、必ず左随伴を持つか？」という問いです。
                </p>
                <p>
                    驚くべきことに、適当なサイズ条件（集合論的な条件）さえ満たせば、この逆が成立します。これを<strong>Freydの随伴関手定理（Adjoint Functor Theorem）</strong>と呼びます。
                    これにより、関数解析におけるハーン・バナッハの定理や、位相幾何学における様々な構成など、一見困難に見える対象の存在証明が、「極限の保存」をチェックするだけで自動的に完了するという魔法のような応用が可能になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>米田の補題の強力な応用として、関手に<strong>随伴が存在すれば、それは同型を除いて一意</strong>であることが直ちに導かれる。</li>
                    <li>随伴の全単射と極限の普遍性を組み合わせることで、<strong>「右随伴は極限を保存する（RAPL）」</strong>ことが要素の計算なしに証明される。</li>
                    <li>圏論の証明の多くは、このように「普遍性」と「米田の補題」をパズルのように組み合わせることで、エレガントに完了する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
