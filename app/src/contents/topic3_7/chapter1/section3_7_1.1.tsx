import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SampleSpaceAndAlgebraOfEvents() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率論は、偶然性に支配される現象を数学的に記述するための理論です。
                現代の数学的確率論は、アンドレイ・コルモゴロフによって確立された「測度論」という強固な数学的基盤の上に立っています。
                本節では、確率論の最も基本的な構成要素である<b>標本空間</b>と<b>事象</b>について学び、集合論との対応関係を整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">標本空間と事象</h2>

            <p className="leading-relaxed">
                まず、「何が起こり得るか」を集合として定義することから始めます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (標本空間)">
                <p>
                    ある試行（実験や観測）において、起こり得るすべての結果の集合を<b>標本空間</b>（sample space）と呼び、<InlineMath math="\Omega" /> で表す。
                    標本空間の各要素 <InlineMath math="\omega \in \Omega" /> を<b>根元事象</b>（elementary event）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.1-2 (事象)">
                <p>
                    標本空間 <InlineMath math="\Omega" /> の部分集合を<b>事象</b>（event）と呼ぶ。
                    事象のあつまり（集合族）を <InlineMath math="\mathcal{F}" /> とし、<InlineMath math="A \in \mathcal{F}" /> であるとき「事象 <InlineMath math="A" /> が起こる」可能性があるという。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b>和事象</b> <InlineMath math="A \cup B" />：「事象 <InlineMath math="A" /> または <InlineMath math="B" /> の少なくとも一方が起こる」</li>
                    <li><b>積事象</b> <InlineMath math="A \cap B" />：「事象 <InlineMath math="A" /> と <InlineMath math="B" /> が同時に起こる」</li>
                    <li><b>余事象</b> <InlineMath math="A^c" />：「事象 <InlineMath math="A" /> が起こらない」</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (サイコロ投げ)">
                <p>
                    1 個のサイコロを投げる試行では、標本空間は <InlineMath math="\Omega = \{1, 2, 3, 4, 5, 6\}" /> である。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>「偶数の目が出る」という事象は <InlineMath math="A = \{2, 4, 6\}" /> となる。</li>
                    <li>その余事象（奇数の目が出る）は <InlineMath math="A^c = \{1, 3, 5\}" /> である。</li>
                    <li>さらに「1 が出る」事象 <InlineMath math="\{1\}" /> との和事象は <InlineMath math="A \cup \{1\} = \{1, 2, 4, 6\}" /> である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-2 (連続試行：コインの無限回投げ)">
                <p>
                    コインを無限回投げる試行を考えると、標本空間は <InlineMath math="\Omega = \{0, 1\}^\mathbb{N}" /> （0 は裏、1 は表の無限列）となる。
                    このとき、「初めて表が出るのが <InlineMath math="n" /> 回目である」という事象は、次のような <InlineMath math="\Omega" /> の部分集合として厳密に記述できる：
                    <BlockMath math="A_n = \{ (\omega_1, \omega_2, \ldots) \in \Omega \mid \omega_1 = \cdots = \omega_{n-1} = 0, \, \omega_n = 1 \}" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="集合論との対応関係">
                <p>
                    確率論の言葉（事象の発現）と集合論の言葉（要素の所属）は、次のように完全に対応しています。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>「少なくとも一方が起きる」 <InlineMath math="\Longleftrightarrow" /> 和集合 <InlineMath math="A \cup B" /></li>
                    <li>「両方起きる」 <InlineMath math="\Longleftrightarrow" /> 共通部分 <InlineMath math="A \cap B" /></li>
                    <li>「起きない」 <InlineMath math="\Longleftrightarrow" /> 補集合 <InlineMath math="A^c" /></li>
                    <li>「決して起きない」 <InlineMath math="\Longleftrightarrow" /> 空集合 <InlineMath math="\emptyset" /></li>
                    <li>「必ず起きる」 <InlineMath math="\Longleftrightarrow" /> 全体集合 <InlineMath math="\Omega" /></li>
                </ul>
                <p>
                    この対応により、確率論の問題を集合演算の問題として厳密に扱うことが可能になります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">事象の極限</h2>

            <p className="leading-relaxed">
                事象の列 <InlineMath math="\{A_n\}_{n=1}^\infty" /> を考えるとき、それらが「無限回起こる」かどうかという極限的な性質を定義できます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-3 (上極限事象・下極限事象)">
                <p>
                    事象列 <InlineMath math="\{A_n\}" /> に対して、次のように定義する：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>上極限事象</b>（<InlineMath math="A_n" /> が無限回起こる）：
                        <BlockMath math="\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k" />
                    </li>
                    <li>
                        <b>下極限事象</b>（有限個の例外を除いて <InlineMath math="A_n" /> が起こる）：
                        <BlockMath math="\liminf_{n \to \infty} A_n = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k" />
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                これらの定義は一見複雑ですが、直感的には「いつまでも起こり続ける（上極限）」か「ある時点からずっと起こり続ける（下極限）」かを区別しています。
            </p>

            <ContentBox type="example" title="Example 1.1-3 (上下極限の具体例)">
                <p>
                    標本空間を実数直線の一部 <InlineMath math="\Omega = [0, 1]" /> とし、事象列を <InlineMath math="A_n = (0, 1/n)" /> とする。
                    このとき：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\bigcup_{k=n}^\infty A_k = (0, 1/n)" /> である。</li>
                    <li>したがって、上極限は <InlineMath math="\bigcap_{n=1}^\infty (0, 1/n) = \emptyset" /> （空集合）となる。</li>
                    <li>同様に、下極限も <InlineMath math="\emptyset" /> となる。</li>
                </ul>
                <p>
                    一方で、<InlineMath math="A_n = [0, 1/n]" /> と閉区間にすると、上極限・下極限ともに一点集合 <InlineMath math="\{0\}" /> となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように事象の無限回の演算を自由に扱うためには、事象のあつまり <InlineMath math="\mathcal{F}" /> が適切な構造（可算回の演算で閉じていること）を持っている必要があります。
                次節では、このための数学的枠組みである <InlineMath math="\sigma" />-加法族について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>標本空間 <InlineMath math="\Omega" /> は結果の集合、事象は <InlineMath math="\Omega" /> の部分集合である。</li>
                    <li>確率論の言葉は、和集合・共通部分・補集合といった集合演算と 1 対 1 に対応する。</li>
                    <li>事象列の極限（上下極限）を定義することで、無限回の試行における振る舞いを厳密に扱える。</li>
                    <li>上極限事象は「事象が無限回起こる」ことを意味し、将来の大数の法則などの議論で不可欠となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
