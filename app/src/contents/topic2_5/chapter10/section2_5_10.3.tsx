import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompletionOfMetricSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有理数 <InlineMath math="\mathbb{Q}" /> が完備でなくても、私たちは実数 <InlineMath math="\mathbb{R}" /> という「穴を埋めた」世界を知っています。
                一般の距離空間に対しても、このように「足りない極限点をすべて付け加えて完備にする」操作が可能です。
                これを<strong>完備化</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化の存在と一意性</h2>

            <p>
                任意の距離空間は、その「本質」を保ったまま完備な空間の一部として埋め込むことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-1 (完備化の存在と一意性)">
                <p>
                    任意の距離空間 <InlineMath math="(X, d)" /> に対して、次の性質を満たす完備距離空間 <InlineMath math="(\hat{X}, \hat{d})" /> が存在する：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="X" /> と等長同型な部分集合 <InlineMath math="X_0 \subset \hat{X}" /> が存在する。</li>
                    <li><InlineMath math="X_0" /> は <InlineMath math="\hat{X}" /> において稠密である（ <InlineMath math="\overline{X_0} = \hat{X}" /> ）。</li>
                </ol>
                <p className="mt-4">
                    このような <InlineMath math="\hat{X}" /> は等長同型の違いを除いて一意に定まり、これを <InlineMath math="X" /> の<strong>完備化 (Completion)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 存在</strong>：
                    <InlineMath math="X" /> のコーシー列全体の集合を <InlineMath math="\mathcal{C}" /> とする。
                    2つの列 <InlineMath math="\{x_n\}, \{y_n\} \in \mathcal{C}" /> に対し、 <InlineMath math="\lim d(x_n, y_n) = 0" /> のとき同値であると定義し、商集合を <InlineMath math="\hat{X}" /> とする。
                    距離を <InlineMath math="\hat{d}([\{x_n\}], [\{y_n\}]) = \lim d(x_n, y_n)" /> と定義すると、これはウェルデファインドな距離関数となる。
                </p>
                <p className="mt-4">
                    各 <InlineMath math="x \in X" /> を定数数列 <InlineMath math="\{x, x, \dots\}" /> の類に写すことで <InlineMath math="X" /> は <InlineMath math="\hat{X}" /> に等長的に埋め込まれ、その像 <InlineMath math="X_0" /> は <InlineMath math="\hat{X}" /> で稠密である。
                    また、 <InlineMath math="\hat{X}" /> の任意のコーシー列は <InlineMath math="X_0" /> の点に近似でき、その極限が <InlineMath math="\hat{X}" /> 内に存在することが示せるため、 <InlineMath math="\hat{X}" /> は完備である。
                </p>
                <p className="mt-4">
                    <strong>2. 一意性</strong>：
                    別の完備化 <InlineMath math="\hat{X}'" /> が存在したとする。
                    <InlineMath math="X" /> から <InlineMath math="\hat{X}'" /> への等長埋め込みを、稠密な部分集合上での等長性を保ったまま <InlineMath math="\hat{X}" /> 全体へ一意に拡張できる（等長写像は一様連続なため）。
                    この拡張された写像が等長同型を与えることから、一意性が従う。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化の構成（概略）</h2>

            <p>
                完備化は、「行き先のないコーシー列」に行き先（点）としての資格を与えることで構成されます。
            </p>

            <ContentBox type="column" title="コーシー列による構成">
                <p>
                    カントールによる実数の構成と同様の手法を用います。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="X" /> 内のすべてのコーシー列の集合を考える。</li>
                    <li>2つのコーシー列 <InlineMath math="\{x_n\}, \{y_n\}" /> が 「 <InlineMath math="d(x_n, y_n) \to 0" /> 」を満たすとき、これらを同一視（等価）とする。</li>
                    <li>この同一視による同値類全体を <InlineMath math="\hat{X}" /> とし、距離を
                        <BlockMath math="\hat{d}([\{x_n\}], [\{y_n\}]) = \lim_{n\to\infty} d(x_n, y_n)" />
                        で定義する。
                    </li>
                </ol>
                <p className="mt-4">
                    もともとの点 <InlineMath math="x \in X" /> は、定数数列 <InlineMath math="\{x, x, \dots\}" /> のクラスとして <InlineMath math="\hat{X}" /> に埋め込まれます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完備化の具体例">
                <ul className="list-disc list-inside space-y-2">
                    <li>有理数 <InlineMath math="\mathbb{Q}" /> の完備化は実数 <InlineMath math="\mathbb{R}" /> である。</li>
                    <li>不連続な関数も含むような「広い」関数空間（Lp 空間など）は、連続関数空間の特定の距離による完備化として得られる。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>完備化の意味</strong>：空間の穴を埋めて、すべてのコーシー列を収束させる操作。</li>
                    <li><strong>一意性</strong>：どんな構成法をとっても、得られる完備化は「形（距離構造）」が同じになる。</li>
                    <li><strong>構成の原理</strong>：収束先がなかった数列そのものを「新しい点」とみなす、数学における非常に普遍的なアイデア。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
