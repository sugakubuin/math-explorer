import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LanguageAndTerms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                Chapter 1 で扱った命題論理は「命題全体」をひとつの単位として扱いました。しかし、実際の数学では「すべての <InlineMath math="x" /> について」「ある <InlineMath math="y" /> が存在して」といった、対象の内部構造に踏み込んだ推論が必要です。これを扱うのが「述語論理（predicate logic）」です。
                まず、そのための厳密な人工言語（形式言語）を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">形式言語の構成要素</h2>

            <p className="leading-relaxed">
                述語論理の言語は、共通の「論理記号」と、扱う数学的対象に応じて自由に選べる「非論理記号」から構成されます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-1 (一階述語論理の言語)"
            >
                <p>
                    一階述語論理の<strong>言語（language）<InlineMath math="\mathcal{L}" /></strong> は、以下の記号の集合である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>論理記号（常に固定）：</strong>
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>変数記号：<InlineMath math="x, y, z, x_0, x_1, \ldots" /> （無限個）</li>
                            <li>論理結合子：<InlineMath math="\neg, \land, \lor, \to, \leftrightarrow" /></li>
                            <li>量化子（quantifiers）：全称量化子 <InlineMath math="\forall" />（すべての）、存在量化子 <InlineMath math="\exists" />（存在する）</li>
                            <li>等号：<InlineMath math="=" /></li>
                        </ul>
                    </li>
                    <li>
                        <strong>非論理記号（言語 <InlineMath math="\mathcal{L}" /> によって異なる）：</strong>
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>定数記号：<InlineMath math="c_0, c_1, \ldots" /> （特定の「個体」の名前）</li>
                            <li><InlineMath math="n" /> 引数関数記号：<InlineMath math="f^{(n)}_0, f^{(n)}_1, \ldots" /> （<InlineMath math="n \geq 1" />）</li>
                            <li><InlineMath math="n" /> 引数述語記号：<InlineMath math="P^{(n)}_0, P^{(n)}_1, \ldots" /> （<InlineMath math="n \geq 1" />、関係を表す）</li>
                        </ul>
                    </li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-1 (順序体の言語)"
            >
                <p>
                    実数や有理数のように、足し算、掛け算、大小関係が定義された体系を記述するための言語 <InlineMath math="\mathcal{L}_{\mathrm{ord}}" /> を次のように定めることができる。
                    <BlockMath math="\mathcal{L}_{\mathrm{ord}} = \{0, 1, +, \cdot, <\}" />
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="0, 1" />：定数記号</li>
                    <li><InlineMath math="+, \cdot" />：2引数関数記号</li>
                    <li><InlineMath math="<" />：2引数述語記号</li>
                </ul>
                <p>
                    この言語を用いることで、後述するように <InlineMath math="\mathbb{Q}" /> や <InlineMath math="\mathbb{R}" /> における数学的な主張を厳密な記号列として表現できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">項の帰納的定義</h2>

            <p className="leading-relaxed">
                自然言語における「名詞」に相当する、数学的な「個体（数や要素など）」を指し示す表現を定義します。これを「項」と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-2 (項)"
            >
                <p>
                    言語 <InlineMath math="\mathcal{L}" /> における<strong>項（term）</strong>の集合は、以下の規則によって帰納的に定義される。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>任意の変数記号 <InlineMath math="x" /> は項である。</li>
                    <li>任意の定数記号 <InlineMath math="c" /> は項である。</li>
                    <li><InlineMath math="t_1, \ldots, t_n" /> が項であり、<InlineMath math="f" /> が <InlineMath math="n" /> 引数関数記号であるとき、<InlineMath math="f(t_1, \ldots, t_n)" /> も項である。</li>
                </ol>
                <p>
                    有限回の規則の適用によって得られる記号列のみを項とする。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.1-2 (項の具体例)"
            >
                <p>
                    <InlineMath math="\mathcal{L}_{\mathrm{ord}} = \{0, 1, +, \cdot, <\}" /> のもとでの項の例を考える。
                    （※関数記号 <InlineMath math="+" /> や <InlineMath math="\cdot" /> は通常、<InlineMath math="+(x, y)" /> ではなく中置記法 <InlineMath math="(x + y)" /> で書く慣習がある。）
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="0" />（定数記号）は項である。</li>
                    <li><InlineMath math="x" />（変数）は項である。</li>
                    <li><InlineMath math="x + 1" />（つまり <InlineMath math="+(x, 1)" />）は、項 <InlineMath math="x" /> と項 <InlineMath math="1" /> に関数記号 <InlineMath math="+" /> を適用したものであり、項である。</li>
                    <li><InlineMath math="(x \cdot y) + z" /> も同様に項である。</li>
                </ul>
                <p>
                    一方、以下のようなものは項<strong>ではない</strong>。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="+" />（引数が与えられていない）</li>
                    <li><InlineMath math="x < y" />（<InlineMath math="<" /> は述語記号であり、「個体」ではなく「真偽」を表すため項ではない。次節の「論理式」になる）</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="remark"
                title="項と論理式の区別"
            >
                <p>
                    一階述語論理を学ぶ上で最も重要な区別の一つが、<strong>項（term）</strong>と<strong>論理式（formula）</strong>の違いです。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>項：</strong> 「個体を指示する表現」です（例：<InlineMath math="3" />, <InlineMath math="x^2" />, <InlineMath math="\sin(\pi)" />）。自然言語の「名詞句」に相当します。</li>
                    <li><strong>論理式：</strong> 「真偽をもつ表現」です（例：<InlineMath math="3 < 5" />, <InlineMath math="x^2 = 4" />）。自然言語の「平叙文」に相当します。</li>
                </ul>
                <p>
                    「<InlineMath math="(x+y)" /> が真である」や「<InlineMath math="(x=y) + 1" />」といった表現は、この区別を混同しているため形式論理においては無意味（構文エラー）となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>一階述語論理の言語は、共通の論理記号（変数、結合子、量化子、等号）と、各理論に固有の非論理記号（定数、関数、述語）からなる。</li>
                    <li>変数、定数、およびそれらに関数を適用して得られる記号列を<strong>項</strong>と呼ぶ。</li>
                    <li>項は数学的な「個体」を表現するものであり、真偽をもつ「論理式」とは厳密に区別される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}