import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AxiomOfChoice() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数学には、「あまりにも当たり前に見えて、実は証明も反証もできない」という不思議なルールが存在します。
                その代表格が<strong>選択公理 (Axiom of Choice, AC)</strong> です。
                この章では、現代数学のあらゆる場面で暗黙のうちに、あるいは明示的に使われているこの強力な公理と、それに関連する諸命題について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の主張</h2>

            <p>
                直感的には、「空でない箱が無限個並んでいるとき、それぞれの箱から一つずつ中身を取り出して集めることができる」という主張です。
            </p>

            <ContentBox type="axiom" title="Axiom 6.1-1 (選択公理)">
                <p>
                    空でない集合の族 <InlineMath math="\mathcal{F} = \{A_\alpha\}_{\alpha \in \Lambda}" /> に対して、
                    各 <InlineMath math="\alpha \in \Lambda" /> について <InlineMath math="f(\alpha) \in A_\alpha" /> を満たすような写像
                    <InlineMath math="f \colon \Lambda \to \bigcup_{\alpha \in \Lambda} A_\alpha" /> が存在する。
                </p>
                <p className="mt-2 text-sm italic">
                    ※ このような写像 <InlineMath math="f" /> を<strong>選択関数 (Choice Function)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">なぜ「公理」なのか？</h2>

            <p>
                有限個の集合から一つずつ選ぶことは、一歩ずつ操作を繰り返せばよいため、他の基本的な公理から正当化できます。
                しかし、<strong>「一挙に無限回の選択を行う」</strong>という操作を保証する手段は、これまでのルールには含まれていませんでした。
            </p>

            <ContentBox type="remark" title="バートランド・ラッセルの例え">
                <p>
                    「無限足の靴があるとき、それぞれのペアから左足の靴を選ぶことは（左という規則があるため）公理なしで可能である。
                    しかし、無限足の靴下があるとき、左右の区別がないため、それぞれのペアから一つを選ぶには<strong>選択公理</strong>が必要になる。」
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の「自覚なき使用」</h2>

            <p>
                「あまりに自然」すぎて、選択公理を使っていることに気づかない場合も多いです。例えば以下の定理の証明には、厳密には選択公理が必要です。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (可算個の可算和)">
                <p>
                    「可算個の可算集合の和集合は可算である」という §5.2 の命題の証明を思い出してください。
                    各 <InlineMath math="A_n" /> を <InlineMath math="\{a_{n,0}, a_{n,1}, \dots\}" /> と「並べる」ためには、
                    「<InlineMath math="A_n" /> と <InlineMath math="\mathbb{N}" /> の間の全単射の集合」の中から、
                    各 <InlineMath math="n" /> について一つずつ具体的な対応則を<strong>選ぶ</strong>必要があります。
                    この「選び出す」操作そのものに、選択公理が使われています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>選択公理 (AC)</strong> は、どんな集合の族からも同時に代表元を選び出せることを保証する。</li>
                    <li>有限回の選択には不要だが、<strong>無限集合の族</strong>から一斉に選択を行う際に不可欠となる。</li>
                    <li>意識せずに使っている基本的な定理（和集合の可算性など）も、実は選択公理に依存している。</li>
                    <li>選択公理を認める体系を <strong>ZFC</strong>、認めない体系を <strong>ZF</strong> と呼んで区別する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
