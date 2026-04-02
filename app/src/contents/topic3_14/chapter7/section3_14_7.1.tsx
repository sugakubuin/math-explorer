import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RoleOfZFAxioms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは自然数を記述する算術（PA）を見てきましたが、現代数学のほぼすべての基礎となっているのは「集合論」です。19世紀末にカントールが創始した素朴集合論（Topic 2-4）は、ラッセルのパラドックスなどの矛盾を引き起こしました。それを克服するために構築されたのが、ツェルメロとフレンケルによる「ZF公理系」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ZF 公理系の構成</h2>

            <p className="leading-relaxed">
                ZF集合論は、驚くべきことに「属する（<InlineMath math="\in" />）」というたった1つの2引数述語記号のみを持つ一階述語論理の言語で記述されます。
            </p>

            <ContentBox
                type="axiom"
                title="Axiom 7.1-1 (ZF 公理系)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L} = \{\in\}" /> における主要な公理は以下の通りである。（※見やすさのため、等号 <InlineMath math="=" /> や部分集合 <InlineMath math="\subseteq" /> などの略記を適宜用いる）
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-2">
                    <li>
                        <strong>(Z1) 外延性公理：</strong> <InlineMath math="\forall x\,\forall y\,(\forall z\,(z \in x \leftrightarrow z \in y) \to x = y)" />
                        <br/><span className="text-sm text-gray-500">（全く同じ元を持つ集合は、同じ集合である）</span>
                    </li>
                    <li>
                        <strong>(Z2) 空集合公理：</strong> <InlineMath math="\exists x\,\forall y\,(y \notin x)" />
                        <br/><span className="text-sm text-gray-500">（元を一つも持たない集合が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z3) 対公理：</strong> <InlineMath math="\forall x\,\forall y\,\exists z\,\forall w\,(w \in z \leftrightarrow w = x \lor w = y)" />
                        <br/><span className="text-sm text-gray-500">（任意の <InlineMath math="x, y" /> に対し、<InlineMath math="\{x, y\}" /> という集合が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z4) 和集合公理：</strong> <InlineMath math="\forall x\,\exists y\,\forall z\,(z \in y \leftrightarrow \exists w\,(z \in w \land w \in x))" />
                        <br/><span className="text-sm text-gray-500">（任意の集合族 <InlineMath math="x" /> に対し、その和集合 <InlineMath math="\bigcup x" /> が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z5) べき集合公理：</strong> <InlineMath math="\forall x\,\exists y\,\forall z\,(z \in y \leftrightarrow z \subseteq x)" />
                        <br/><span className="text-sm text-gray-500">（任意の集合 <InlineMath math="x" /> に対し、その部分集合全体を集めたべき集合 <InlineMath math="\mathcal{P}(x)" /> が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z6) 無限公理：</strong> <InlineMath math="\exists I\,(\emptyset \in I \land \forall x \in I\,(x \cup \{x\} \in I))" />
                        <br/><span className="text-sm text-gray-500">（自然数の集合 <InlineMath math="\mathbb{N}" /> のモデルとなるような、無限に続く「帰納的集合」が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z7) 正則性公理：</strong> <InlineMath math="\forall x\,(x \neq \emptyset \to \exists y\,(y \in x \land y \cap x = \emptyset))" />
                        <br/><span className="text-sm text-gray-500">（空でない集合は、自分自身と交わらない元を持つ。これにより <InlineMath math="x \in x" /> のような異常な集合を排除する）</span>
                    </li>
                    <li>
                        <strong>(Z8) 分出公理スキーマ：</strong> 任意の論理式 <InlineMath math="\varphi" /> に対して、<br/>
                        <InlineMath math="\forall x\,\exists y\,\forall z\,(z \in y \leftrightarrow z \in x \land \varphi(z))" />
                        <br/><span className="text-sm text-gray-500">（集合 <InlineMath math="x" /> の元の中で、条件 <InlineMath math="\varphi" /> を満たすものだけを集めた部分集合 <InlineMath math="\{z \in x \mid \varphi(z)\}" /> が存在する）</span>
                    </li>
                    <li>
                        <strong>(Z9) 置換公理スキーマ：</strong> 任意の関数的な論理式 <InlineMath math="\varphi(u, v)" /> に対して、集合 <InlineMath math="x" /> の「像」となる集合が存在する。
                        <br/><span className="text-sm text-gray-500">（関数による集合の写し先もまた集合である）</span>
                    </li>
                </ol>
            </ContentBox>

            <ContentBox
                type="remark"
                title="公理の独立性と冗長性"
            >
                <p>
                    これらの公理は「集合を構成するルール」のリストです。外延性は集合の「同一性」を定め、空集合・対・和集合・べき集合は小さな集合から大きな集合を「物理的に作る」方法を提供します。無限公理は数学に不可欠な「無限」の存在をただ一つ宣言し、正則性公理は宇宙が整然とした階層構造をなすことを保証します。
                </p>
                <p>
                    実は、(Z8)の「分出公理」は(Z9)の「置換公理」から論理的に導出可能であり、公理系としては冗長です。
                    ある集合 <InlineMath math="A" /> と条件 <InlineMath math="\varphi(x)" /> があるとき、「<InlineMath math="\varphi(x)" /> が真なら <InlineMath math="y=x" />、偽なら <InlineMath math="y=a" />（<InlineMath math="a" /> は <InlineMath math="\varphi" /> を満たす <InlineMath math="A" /> の元）」とする関数的論理式に置換公理を適用すれば、像として部分集合 <InlineMath math="\{x \in A \mid \varphi(x)\}" /> が得られるからです。
                    しかし、分出公理は歴史的にも直感的にも「部分集合を切り出す」という極めて重要な操作であるため、独立した公理として列挙するのが一般的です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">パラドックスの回避</h2>

            <p className="leading-relaxed">
                素朴集合論の最大の弱点は「任意の条件 <InlineMath math="\varphi" /> を満たすものの集まりを自由に集合と認めてしまった」ことでした（包括原理）。ZF公理系は、これを「分出公理」に制限することでパラドックスを巧みに回避しています。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 7.1-1 (ラッセルのパラドックスの回避)"
            >
                <p>
                    ZF公理系において、「すべての集合を含む集合（宇宙）」は存在しない。したがって、ラッセルのパラドックスを引き起こす「自分自身を含まない集合全体の集合」は構成できず、矛盾は生じない。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    仮に「すべての集合を含む集合 <InlineMath math="V" />」が存在したと仮定する（<InlineMath math="\forall x\,(x \in V)" />）。
                </p>
                <p>
                    この <InlineMath math="V" /> に対して、分出公理（Z8）を適用し、条件 <InlineMath math="\varphi(x) \equiv x \notin x" /> を用いて部分集合 <InlineMath math="R" /> を作る。
                    <BlockMath math="R = \{x \in V \mid x \notin x\}" />
                </p>
                <p>
                    <InlineMath math="R" /> は構成より集合である。すると <InlineMath math="R \in V" /> は前提より真なので、<InlineMath math="R \in R" /> かどうかを問うことができる。
                    定義より <InlineMath math="R \in R \iff R \notin R" /> となり、矛盾が生じる。
                </p>
                <p>
                    素朴集合論ではこれが致命的な矛盾（理論の崩壊）であったが、ZF では「最初に仮定した『すべての集合を含む集合 <InlineMath math="V" /> が存在する』という仮定が誤りであった（背理法）」という単なる定理に変わる。
                    つまり ZF は「<InlineMath math="V" /> のような大きすぎる集まり（真クラス）は集合として認めない」というルールによって、矛盾の発生を未然に防いでいるのである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ZF公理系</strong>は、ただ1つの記号 <InlineMath math="\in" /> を用いて集合の構成ルールを厳密に定めた一階述語論理の理論である。</li>
                    <li>素朴集合論の無制限な集合構成を禁止し、<strong>分出公理</strong>（既存の集合から部分集合を切り出す）に制限することで、ラッセルのパラドックスを回避している。</li>
                    <li>「すべての集合の集合」などは ZF では集合（対象領域の元）としては存在せず、真クラスとして扱われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}