import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MaximalIdeals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では剰余環が「整域」になるような素イデアルについて学びました。本節では、剰余環がさらに良い性質を持つ「体」になるような、より強い条件を持ったイデアルである「極大イデアル」について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極大イデアルの定義と特徴づけ</h2>

            <p className="leading-relaxed">
                極大イデアルとは、その名の通り「これ以上大きくならない」イデアルのことです。環全体に一致してしまう直前の、最大のイデアルを指します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (極大イデアル)">
                <p>
                    可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="M \subsetneq R" /> が<b>極大イデアル（maximal ideal）</b>であるとは、<InlineMath math="M" /> を真に含むイデアルが <InlineMath math="R" /> 自身しか存在しないことである。
                </p>
                <p>
                    すなわち、あるイデアル <InlineMath math="J" /> が <InlineMath math="M \subset J \subset R" /> を満たすならば、<InlineMath math="J = M" /> または <InlineMath math="J = R" /> のいずれかが成立することである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                極大イデアルであるかどうかは、素イデアルのときと同様に、剰余環の性質によって完全に特徴づけられます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (極大イデアルと剰余環の体性)">
                <p>
                    可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="M" /> について、以下は同値である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="M" /> が極大イデアルである。</li>
                    <li>剰余環 <InlineMath math="R/M" /> が体である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="R/M" /> が体であることは、「<InlineMath math="R/M" /> の零でない元がすべて可逆である」ことと同値である。剰余環の元は <InlineMath math="\overline{a} = a + M" /> と表す。
                </p>
                <p>
                    <InlineMath math="(\implies)" /> <InlineMath math="M" /> が極大イデアルであるとする。<InlineMath math="\overline{a} \neq \overline{0}" /> となる <InlineMath math="\overline{a} \in R/M" /> をとる。これは <InlineMath math="a \notin M" /> を意味する。<InlineMath math="M" /> に <InlineMath math="a" /> を付け加えて生成されるイデアル <InlineMath math="M + (a)" /> を考えると、<InlineMath math="a \notin M" /> より <InlineMath math="M \subsetneq M + (a)" /> である。<InlineMath math="M" /> の極大性により、<InlineMath math="M + (a) = R" /> とならざるを得ない。<br />
                    <InlineMath math="R" /> は単位元 <InlineMath math="1" /> を持つため、<InlineMath math="1 \in M + (a)" /> となる。したがって、ある <InlineMath math="m \in M" /> と <InlineMath math="r \in R" /> が存在して <InlineMath math="1 = m + ra" /> と書ける。<br />
                    これを <InlineMath math="R/M" /> において考えると、<InlineMath math="\overline{1} = \overline{m} + \overline{r}\overline{a} = \overline{0} + \overline{r}\overline{a} = \overline{r}\overline{a}" /> となる。よって <InlineMath math="\overline{a}" /> は逆元 <InlineMath math="\overline{r}" /> を持つため、<InlineMath math="R/M" /> は体である。
                </p>
                <p>
                    <InlineMath math="(\impliedby)" /> <InlineMath math="R/M" /> が体であるとする。<InlineMath math="M \subsetneq J \subset R" /> となるイデアル <InlineMath math="J" /> をとる。<InlineMath math="J" /> は <InlineMath math="M" /> を真に含むため、ある <InlineMath math="a \in J" /> で <InlineMath math="a \notin M" /> となるものが存在する。<br />
                    このとき <InlineMath math="R/M" /> において <InlineMath math="\overline{a} \neq \overline{0}" /> である。<InlineMath math="R/M" /> は体であるから、<InlineMath math="\overline{a}" /> の逆元 <InlineMath math="\overline{r}" /> が存在する。すなわち <InlineMath math="\overline{r}\overline{a} = \overline{1}" /> であり、これは <InlineMath math="1 - ra \in M" /> を意味する。<br />
                    <InlineMath math="a \in J" /> だから <InlineMath math="ra \in J" /> であり、<InlineMath math="M \subset J" /> だから <InlineMath math="1 - ra \in J" /> でもある。よって <InlineMath math="1 = (1 - ra) + ra \in J" /> となる。単位元を含むイデアルは環全体に一致するため、<InlineMath math="J = R" /> となる。ゆえに <InlineMath math="M" /> は極大イデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                極大イデアルに関しても、整数環で具体的な様子を観察してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (整数環の極大イデアル)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、イデアル <InlineMath math="(p)" />（<InlineMath math="p" /> は素数）は極大イデアルである。実際、剰余環 <InlineMath math="\mathbb{Z}/(p) \cong \mathbb{F}_p" /> は位数 <InlineMath math="p" /> の有限体となる。
                </p>
                <p>
                    一方、<InlineMath math="(6)" /> は極大イデアルではない。なぜなら、<InlineMath math="(6) \subsetneq (2) \subsetneq \mathbb{Z}" /> のように、<InlineMath math="(6)" /> を真に含むイデアル <InlineMath math="(2)" /> などが存在するからである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素イデアルと極大イデアルの関係</h2>

            <p className="leading-relaxed">
                これまで見たように、素イデアルは剰余環が「整域」になるイデアルであり、極大イデアルは剰余環が「体」になるイデアルでした。体と整域の関係性から、素イデアルと極大イデアルの間には明確な包含関係が成り立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1 (極大イデアルは素イデアルである)">
                <p>
                    可換環 <InlineMath math="R" /> において、極大イデアルは常に素イデアルである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> を極大イデアルとする。定理 3.2-1 より、剰余環 <InlineMath math="R/M" /> は体である。
                </p>
                <p>
                    「体は整域である」という一般的な事実（第1章 §1.4 参照）から、<InlineMath math="R/M" /> は整域でもある。したがって、命題 3.1-1 より <InlineMath math="M" /> は素イデアルとなる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                極大イデアルならば素イデアルですが、逆は一般には成り立ちません。「素イデアルだが極大イデアルではない」ようなイデアルが存在する環の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-2 (素イデアルだが極大でない例)">
                <p>
                    整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> において、零イデアル <InlineMath math="(0)" /> を考える。
                </p>
                <p>
                    <InlineMath math="\mathbb{Z}[x]" /> は整域であるため、<InlineMath math="\mathbb{Z}[x]/(0) \cong \mathbb{Z}[x]" /> も整域である。したがって <InlineMath math="(0)" /> は素イデアルである。
                </p>
                <p>
                    しかし、<InlineMath math="(0)" /> を真に含むイデアルとして <InlineMath math="(x)" /> が存在する（<InlineMath math="(0) \subsetneq (x) \subsetneq \mathbb{Z}[x]" />）。したがって <InlineMath math="(0)" /> は極大イデアルではない。
                </p>
                <p>
                    さらに言うと、<InlineMath math="(x)" /> も素イデアル（<InlineMath math="\mathbb{Z}[x]/(x) \cong \mathbb{Z}" /> は整域）だが極大イデアルではない。なぜなら <InlineMath math="(x) \subsetneq (2, x) \subsetneq \mathbb{Z}[x]" /> だからである。ここで登場した <InlineMath math="(2, x)" /> については、<InlineMath math="\mathbb{Z}[x]/(2, x) \cong \mathbb{Z}/2\mathbb{Z}" /> となり体になるため、極大イデアルである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (体論・代数幾何における極大イデアル)">
                <p>
                    極大イデアルと素イデアルは、環論を越えて現代数学の至る所で顔を出します。
                </p>
                <p>
                    例えば、後のトピック「3-10 体論」では、ある多項式が既約であることを、その多項式が生成するイデアルが極大イデアルであることとして捉え直し、体の拡大を構成します。また、「4-11 可換環論」や「4-12 代数幾何学」では、環の素イデアル全体を集めた空間（スペクトル）を考え、極大イデアルをその空間の「点」とみなすという幾何学的な視点が重要になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>可換環 <InlineMath math="R" /> の真のイデアル <InlineMath math="M" /> は、それを真に含むイデアルが <InlineMath math="R" /> しかないとき極大イデアルと呼ばれる。</li>
                    <li><InlineMath math="M" /> が極大イデアルであることと、剰余環 <InlineMath math="R/M" /> が体であることは同値である。</li>
                    <li>「体は整域である」ことから、極大イデアルは常に素イデアルであるが、その逆は一般には成り立たない（例：<InlineMath math="\mathbb{Z}[x]" /> の <InlineMath math="(x)" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
