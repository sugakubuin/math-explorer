import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SatisfactionRelation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                項が「個体」に解釈される方法が定義できました。次はいよいよ、論理式という「真偽を持つ主張」が、構造の中で「真」となるか「偽」となるかを厳密に定義します。これはアルフレト・タルスキによって定式化された、現代論理学の基礎となる定義です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">充足関係の帰納的定義</h2>

            <p className="leading-relaxed">
                論理式 <InlineMath math="\varphi" /> が、構造 <InlineMath math="\mathcal{M}" /> と付値 <InlineMath math="\sigma" /> のもとで「真」であるとき、「<InlineMath math="\mathcal{M}, \sigma" /> は <InlineMath math="\varphi" /> を<strong>充足する（satisfy）</strong>」といい、<InlineMath math="\mathcal{M}, \sigma \models \varphi" /> と書きます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.2-1 (充足関係：タルスキの定義)"
            >
                <p>
                    構造 <InlineMath math="\mathcal{M}" /> と付値 <InlineMath math="\sigma" /> のもとで、論理式 <InlineMath math="\varphi" /> が充足される（<InlineMath math="\mathcal{M}, \sigma \models \varphi" />）ことの定義を、<InlineMath math="\varphi" /> の構成に関する帰納法で与える。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2">
                    <li>
                        <strong>等号原子式：</strong> <InlineMath math="t_1, t_2" /> が項のとき。<br/>
                        <InlineMath math="\mathcal{M}, \sigma \models t_1 = t_2 \iff t_1^{\mathcal{M},\sigma} = t_2^{\mathcal{M},\sigma}" /> <br/>
                        （両辺の項の解釈先が、<InlineMath math="M" /> の元として完全に一致すること）
                    </li>
                    <li>
                        <strong>述語原子式：</strong> <InlineMath math="P" /> が <InlineMath math="n" /> 引数述語記号のとき。<br/>
                        <InlineMath math="\mathcal{M}, \sigma \models P(t_1, \ldots, t_n) \iff (t_1^{\mathcal{M},\sigma}, \ldots, t_n^{\mathcal{M},\sigma}) \in P^\mathcal{M}" /> <br/>
                        （項の解釈先の組が、構造で指定された関係 <InlineMath math="P^\mathcal{M}" /> に属すること）
                    </li>
                    <li>
                        <strong>命題結合子：</strong> <InlineMath math="\varphi, \psi" /> が論理式のとき。（命題論理と同じ）<br/>
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li><InlineMath math="\mathcal{M}, \sigma \models \neg\varphi \iff \mathcal{M}, \sigma \not\models \varphi" /> （充足されないこと）</li>
                            <li><InlineMath math="\mathcal{M}, \sigma \models \varphi \land \psi \iff \mathcal{M}, \sigma \models \varphi" /> かつ <InlineMath math="\mathcal{M}, \sigma \models \psi" /></li>
                            <li><InlineMath math="\lor, \to, \leftrightarrow" /> についても同様。</li>
                        </ul>
                    </li>
                    <li>
                        <strong>量化子：</strong> ここで <InlineMath math="\sigma[x \mapsto a]" /> は、「変数 <InlineMath math="x" /> への割り当てだけを <InlineMath math="M" /> の元 <InlineMath math="a" /> に変更し、他の変数は <InlineMath math="\sigma" /> と同じにした新しい付値」を表す。<br/>
                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>
                                <InlineMath math="\mathcal{M}, \sigma \models \forall x\,\varphi \iff" /> <br/>対象領域 <InlineMath math="M" /> の<strong>すべての元 <InlineMath math="a" /> に対して</strong>、<InlineMath math="\mathcal{M}, \sigma[x \mapsto a] \models \varphi" /> が成り立つ。
                            </li>
                            <li>
                                <InlineMath math="\mathcal{M}, \sigma \models \exists x\,\varphi \iff" /> <br/>対象領域 <InlineMath math="M" /> の<strong>ある元 <InlineMath math="a" /> が存在して</strong>、<InlineMath math="\mathcal{M}, \sigma[x \mapsto a] \models \varphi" /> が成り立つ。
                            </li>
                        </ul>
                    </li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.2-1 (充足関係の計算)"
            >
                <p>
                    対象領域を自然数 <InlineMath math="\mathbb{N} = \{0, 1, 2, \ldots\}" /> とし、<InlineMath math="<" /> を通常の大小関係とする構造 <InlineMath math="\mathcal{M} = \mathbb{N}" /> を考える。付値を <InlineMath math="\sigma(x) = 3" /> とする。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2">
                    <li>
                        <strong><InlineMath math="\mathcal{M}, \sigma \models \exists y\,(x < y)" /> か？</strong><br/>
                        定義によれば、<InlineMath math="M" /> のある元 <InlineMath math="a" /> について <InlineMath math="\mathcal{M}, \sigma[y \mapsto a] \models x < y" /> となるか問われている。<br/>
                        例えば <InlineMath math="a = 4" /> を選ぶ。新しい付値では <InlineMath math="x \mapsto 3, y \mapsto 4" /> となる。<br/>
                        このとき <InlineMath math="3 <^\mathbb{N} 4" /> は真なので、<InlineMath math="\mathcal{M}, \sigma[y \mapsto 4] \models x < y" /> は成立。<br/>
                        よって <InlineMath math="\exists y\,(x < y)" /> は充足される。
                    </li>
                    <li>
                        <strong><InlineMath math="\mathcal{M}, \sigma \models \forall y\,(y < x)" /> か？</strong><br/>
                        定義によれば、すべての元 <InlineMath math="a \in \mathbb{N}" /> について <InlineMath math="\mathcal{M}, \sigma[y \mapsto a] \models y < x" /> となるか問われている。<br/>
                        例えば <InlineMath math="a = 5" /> とすると、<InlineMath math="x \mapsto 3, y \mapsto 5" /> となり、<InlineMath math="5 <^\mathbb{N} 3" /> は偽である。<br/>
                        成り立たない <InlineMath math="a" /> が存在したため、<InlineMath math="\forall y\,(y < x)" /> は充足されない。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">文の真偽と充足可能性</h2>

            <p className="leading-relaxed">
                自由変数を含まない「文」の場合、付値によらず構造だけで真偽が決まります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 3.2-2 (文の真偽と充足可能性)"
            >
                <p>
                    <strong>文の真偽：</strong> <InlineMath math="\varphi" /> が文（自由変数を持たない）であるとき、<InlineMath math="\mathcal{M}, \sigma \models \varphi" /> は付値 <InlineMath math="\sigma" /> の選び方に依存しない。このとき単に「<InlineMath math="\varphi" /> は <InlineMath math="\mathcal{M}" /> で真である」といい、
                    <BlockMath math="\mathcal{M} \models \varphi" />
                    と書く。
                </p>
                <p>
                    <strong>充足可能性：</strong> 論理式 <InlineMath math="\varphi" /> に対して、<InlineMath math="\mathcal{M}, \sigma \models \varphi" /> となるような構造 <InlineMath math="\mathcal{M}" /> と付値 <InlineMath math="\sigma" /> の組が<strong>少なくとも1つ存在する</strong>とき、<InlineMath math="\varphi" /> は<strong>充足可能（satisfiable）</strong>であるという。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 3.2-2 (充足可能だがすべての構造で真ではない式)"
            >
                <p>
                    文 <InlineMath math="\exists x\,(x \neq x)" /> は、いかなる構造においても偽となる。なぜなら等号は対象領域 <InlineMath math="M" /> での厳密な一致として解釈されるため、<InlineMath math="a \neq a" /> となる元 <InlineMath math="a" /> は存在しないからである。したがって充足不可能である。
                </p>
                <p>
                    文 <InlineMath math="\varphi \equiv \exists x\,\forall y\,(x = y)" /> を考える。これは「対象領域には要素が1つしか存在しない」という意味の文である。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="M = \{0\}" /> のような1点集合を対象領域とする構造では、<InlineMath math="\mathcal{M} \models \varphi" /> は<strong>真</strong>である。したがって <InlineMath math="\varphi" /> は<strong>充足可能</strong>である。</li>
                    <li>しかし、<InlineMath math="\mathbb{N}" /> や <InlineMath math="\mathbb{R}" /> のように要素が複数ある構造では、<InlineMath math="\mathcal{M} \models \varphi" /> は<strong>偽</strong>となる。</li>
                </ul>
                <p>
                    このように、ある式が「数学的に常に正しい」わけではなくても、それを満たす特殊な世界（構造）を構築できるならば、それは充足可能と呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>論理式が構造において真であることを<strong>充足関係（<InlineMath math="\models" />）</strong>と呼び、タルスキの定義によって帰納的に厳密に定式化される。</li>
                    <li>量化子 <InlineMath math="\forall x" />、<InlineMath math="\exists x" /> は、付値の変数 <InlineMath math="x" /> への割り当てを、対象領域 <InlineMath math="M" /> のすべての元について動かして評価することで解釈される。</li>
                    <li>文（自由変数なし）の真偽は構造のみで決まる。文を真にする構造が存在するとき、その文は<strong>充足可能</strong>であるという。</li>
                </ul>
            </ContentBox>
        </section>
    );
}