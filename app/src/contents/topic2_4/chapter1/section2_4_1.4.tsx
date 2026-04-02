import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RussellsParadox() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「どんな条件（命題）をもってきても、それを満たす要素を集めれば一つの集合が作れる」という無邪気な考えを、数学では<strong>素朴集合論（Naive Set Theory）</strong>と呼びます。
                しかし、この素朴な直感に従って自由に集合を作りすぎると、論理が根底から崩壊してしまう致命的な矛盾が生じることが発見されました。それが「ラッセルのパラドックス」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内包原理と「すべての集合の集合」の落とし穴</h2>

            <p>
                カントールによる集合論の初期の発展において、「任意の条件 <InlineMath math="P(x)" /> について <InlineMath math="\{ x \mid P(x) \}" /> という集合が存在する」という無制限の内包原理は暗黙のうちに受け入れられていました。
            </p>

            <ContentBox type="remark" title="無制限の内包原理のもたらす幻想">
                <p>
                    この原理が正しいとすれば、「集合である」という条件を満たすものの集まり、すなわち「すべての集合を元として含むような超巨大な集合」を作ることができます。仮にこれを <InlineMath math="V" />（宇宙、Universe）と呼びましょう。
                </p>
                <BlockMath math="V = \{ x \mid x \text{ は集合である} \}" />
                <p className="mt-4">
                    <InlineMath math="V" /> 自身もまた集合の一つであるため、定義から必然的に「自分自身を包含する元」となってしまいます（<InlineMath math="V \in V" />）。
                </p>
            </ContentBox>
            <p className="mt-4">
                このような「自己言及（自分が自分を含むか？）」という構造が、やがて取り返しのつかない論理的矛盾を引き起こすことになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラッセルのパラドックスの証明</h2>

            <p>
                1901年、バートランド・ラッセルは「すべての集合の集合」よりもさらに鋭い条件を考えることで、素朴集合論の根本的な矛盾を指摘しました。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ラッセルのパラドックス)">
                <p>
                    「無制限の内包公理」により任意の条件から集合が作れるという仮定は、論理的矛盾をもたらす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の性質から集合を作れると仮定する。「<strong>自分自身を元として含まない</strong>（<InlineMath math="x \notin x" />）」という性質 <InlineMath math="P(x)" /> を考え、この性質を満たす集合全体からなる集合 <InlineMath math="R" /> を次のように定義する。
                </p>
                <BlockMath math="R = \{ x \mid x \notin x \}" />
                <p className="mt-4">
                    ここで、「この集合 <InlineMath math="R" /> 自身は、<InlineMath math="R" /> という集合に属するか？」という問いを立てる。すなわち、<InlineMath math="R \in R" /> は真か偽か？
                </p>
                <p className="mt-4">
                    <strong>1. <InlineMath math="R \in R" /> であると仮定した場合:</strong><br />
                    <InlineMath math="R" /> は <InlineMath math="R" /> の元である。しかし、<InlineMath math="R" /> という集合に入るための条件は「自分自身の元ではないこと（<InlineMath math="x \notin x" />）」であった。<br />
                    よって <InlineMath math="R" /> が条件を満たすならば <InlineMath math="R \notin R" /> でなければならない。これは仮定 <InlineMath math="R \in R" /> に矛盾する。
                </p>
                <p className="mt-4">
                    <strong>2. <InlineMath math="R \notin R" /> であると仮定した場合:</strong><br />
                    <InlineMath math="R" /> は <InlineMath math="R" /> の元ではない。このことはまさに「自分自身の元ではない（<InlineMath math="R \notin R" />）」という条件 <InlineMath math="P(R)" /> を満たしていることを意味する。<br />
                    <InlineMath math="R" /> に入るための条件を満たしているのだから、当然 <InlineMath math="R" /> は <InlineMath math="R" /> の元でなければならない。すなわち <InlineMath math="R \in R" /> となり、やはり矛盾する。
                </p>
                <p className="mt-4">
                    どちらに転んでも論理が破綻（<InlineMath math="R \in R \iff R \notin R" />）してしまう。この「嘘つきのパラドックス」に似た矛盾の存在により、<strong>「いかなる条件 <InlineMath math="P(x)" /> からも無制限に集合を作れる」という大前提が誤りである</strong>ことが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                「自分自身自身のヒゲを剃らない村人全員のヒゲを剃る床屋は、自分のヒゲを剃るか？」という有名な<strong>床屋のパラドックス</strong>は、ラッセルのパラドックスを平易な比喩で表現したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">公理的集合論への動機</h2>

            <p>
                基礎としていた素朴集合論が根底から崩れたため、数学者たちは大きな衝撃（数学の危機）を受けました。「なんでもかんでも集合にしていいわけではない」という教訓から、集合を構成するための厳格なルールを定める必要性が生まれました。
            </p>

            <ContentBox type="remark" title="パラドックスをいかに回避するか">
                <p>
                    ラッセルの集合 <InlineMath math="R = \{ x \mid x \notin x \}" /> に関する矛盾は、「何もない 허空の空間から、条件式だけをポンと投げて新しい袋（集合）を無から生成した」ことが直接の原因でした。
                </p>
                <p className="mt-4">
                    これを防ぐための現代数学の処方箋は次のようなものです。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <strong>分出公理（制限された内包公理）の採用:</strong><br />
                        「全く新しい集合を作り出す」ことを禁止し、「<strong>あらかじめ存在が保証されている別の安全な集合 <InlineMath math="A" /> の中から、条件 <InlineMath math="P(x)" /> を満たすものだけを「切り出す」（部分集合を作る）</strong>」ことのみを許可します。
                    </li>
                </ul>
                <BlockMath math="A' = \{ x \in A \mid P(x) \}" />
                <p className="mt-4">
                    この「安全な土台（公理）」の上でのみ集合を構成するアプローチの全体像が、次節で概観する<strong>ZF公理系（Zermelo-Fraenkel set theory）</strong>へと発展していきます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>「すべての集合の集合」など、無制限に集合を定義できるという「素朴集合論」の前提は誤りである。</li>
                    <li><strong>ラッセルのパラドックス</strong>：<InlineMath math="R = \{ x \mid x \notin x \}" /> という自己言及的な集合を定義すると、論理的矛盾が生じる。</li>
                    <li>この矛盾を回避するため、あらかじめ決められた「公理（厳格な構成ルール）」に従って部分集合を切り出す形でのみ集合の形成を認める、公理的集合論が必要となった。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
