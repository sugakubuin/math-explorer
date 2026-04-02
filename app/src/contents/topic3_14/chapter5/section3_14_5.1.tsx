import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompletenessTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章で触れた「構文論と意味論の一致」について、本章ではその決定的な定理である「ゲーデルの完全性定理」を詳しく見ていきます。これは1929年にクルト・ゲーデルの博士論文で証明され、数理論理学の歴史において最も重要な到達点の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">完全性定理の主張</h2>

            <p className="leading-relaxed">
                完全性定理は、「意味論的に正しい（論理的帰結である）ならば、必ず形式的に証明できる」という強力な保証を与えます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.1-1 (一階述語論理の完全性定理 / Gödel's Completeness Theorem)"
            >
                <p>
                    任意の理論 <InlineMath math="T" /> と文 <InlineMath math="\varphi" /> について、<InlineMath math="\varphi" /> が <InlineMath math="T" /> の論理的帰結であるならば、<InlineMath math="\varphi" /> は <InlineMath math="T" /> から証明可能である。
                    <BlockMath math="T \models \varphi \implies T \vdash \varphi" />
                </p>
                <p>
                    これは健全性定理（<InlineMath math="T \vdash \varphi \implies T \models \varphi" />）と合わせることで、以下の同値性として定式化される。
                    <BlockMath math="T \vdash \varphi \iff T \models \varphi" />
                </p>
                <p>
                    <strong>【等価な表現】</strong> 完全性定理は次のように言い換えることもできる：<br/>
                    「理論 <InlineMath math="T" /> が無矛盾である（<InlineMath math="T \nvdash \bot" />）ことと、<InlineMath math="T" /> にモデルが存在する（<InlineMath math="T" /> が充足可能である）ことは同値である。」
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    対偶である「<InlineMath math="T \nvdash \varphi" /> ならば <InlineMath math="T \not\models \varphi" />」を示す。
                    <InlineMath math="T \nvdash \varphi" /> と仮定すると、理論 <InlineMath math="T \cup \{\neg\varphi\}" /> は無矛盾である。
                    この無矛盾な理論に対して、次節（§5.2）で解説する「ヘンキン構成」を適用することで、<InlineMath math="T \cup \{\neg\varphi\}" /> を満たすモデル <InlineMath math="\mathcal{M}" /> が実際に構築できる。
                    このモデル <InlineMath math="\mathcal{M}" /> は <InlineMath math="T" /> を満たしつつ <InlineMath math="\varphi" /> を偽にする（<InlineMath math="\neg\varphi" /> を真にする）ため、<InlineMath math="T \not\models \varphi" /> が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="完全性と健全性の非対称性"
            >
                <p>
                    健全性（<InlineMath math="\vdash \implies \models" />）の証明は、「公理が真であることを確認する」「推論規則（MPなど）が真を保存することを確認する」というステップを帰納法でたどるだけであり、比較的単純です。
                </p>
                <p>
                    一方、完全性（<InlineMath math="\models \implies \vdash" />）の証明は非常に困難です。なぜなら、「証明できない（<InlineMath math="\nvdash" />）」という否定的な事実から出発して、「それが偽になるような都合のよい世界（モデル）を、無から構築（構成）して見せる」必要があるからです。この構築法（ヘンキン構成）については次節で詳しく見ます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">完全性定理の応用</h2>

            <p className="leading-relaxed">
                完全性定理は単なる基礎づけにとどまらず、実際の数学において「存在の証明」などに強力に応用されます。
            </p>

            <ContentBox
                type="corollary"
                title="Corollary 5.1-1 (無矛盾ならばモデルが存在する)"
            >
                <p>
                    理論 <InlineMath math="T" /> が矛盾を証明できない（<InlineMath math="T \nvdash \bot" />）ならば、<InlineMath math="T" /> を満たすモデル <InlineMath math="\mathcal{M}" /> が必ず存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    完全性定理の対偶を用いる。
                    <BlockMath math="T \nvdash \varphi \implies T \not\models \varphi" />
                </p>
                <p>
                    ここで <InlineMath math="\varphi" /> として矛盾式 <InlineMath math="\bot" /> を取る。
                    仮定より <InlineMath math="T \nvdash \bot" />（無矛盾）なので、<InlineMath math="T \not\models \bot" /> となる。
                </p>
                <p>
                    <InlineMath math="T \not\models \bot" /> とは、「<InlineMath math="T" /> のすべてのモデルで <InlineMath math="\bot" /> が真になる」<strong>わけではない</strong>、という意味である。
                    <InlineMath math="\bot" /> はいかなるモデルでも偽であるから、もし <InlineMath math="T" /> にモデルが一つも存在しなければ「条件を満たすモデルでは全て真」が空虚に成立してしまい <InlineMath math="T \models \bot" /> となってしまう。
                </p>
                <p>
                    したがって、<InlineMath math="T \not\models \bot" /> が成り立つためには、<InlineMath math="T" /> の公理をすべて満たすモデルが少なくとも1つは存在しなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.1-1 (群論の定理の証明不可能性)"
            >
                <p>
                    群の公理系 <InlineMath math="T_{\mathrm{Grp}}" /> を用いて、「任意の群はアーベル群である（<InlineMath math="\forall x\,\forall y\,(xy=yx)" />）」という命題 <InlineMath math="\varphi" /> が証明可能かどうかを考える。
                </p>
                <p>
                    完全性定理により、<InlineMath math="T_{\mathrm{Grp}} \vdash \varphi" /> と <InlineMath math="T_{\mathrm{Grp}} \models \varphi" /> は同値である。<InlineMath math="\models" /> は「すべての群で可換性が成り立つ」ことを意味する。
                    しかし、対称群 <InlineMath math="S_3" /> などの非可換群（モデル）が存在することを我々は知っている。
                </p>
                <p>
                    非可換群は <InlineMath math="T_{\mathrm{Grp}}" /> を満たすが <InlineMath math="\varphi" /> を満たさない（偽にする）モデルであるため、<InlineMath math="T_{\mathrm{Grp}} \not\models \varphi" /> である。
                    よって完全性定理から直ちに <InlineMath math="T_{\mathrm{Grp}} \nvdash \varphi" />、すなわち「群の公理からは可換性を証明できない」ことが厳密に結論づけられる。
                    （代数学で当たり前のように使っている「反例の提示による論証」は、根底では完全性定理によって正当化されているのである。）
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>完全性定理：</strong> 意味論的帰結（<InlineMath math="\models" />）ならば、構文論的に証明可能（<InlineMath math="\vdash" />）である。</li>
                    <li>完全性と健全性を合わせることで、一階述語論理において <InlineMath math="\vdash" /> と <InlineMath math="\models" /> は完全に同値となる。</li>
                    <li>この定理の系として、「無矛盾な公理系には、必ずそれを満たす数学的モデル（構造）が存在する」ことが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}