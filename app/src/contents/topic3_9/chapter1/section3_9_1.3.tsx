import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZeroDivisorsAndDomains() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の最後で、直積環や剰余環では「<InlineMath math="0" /> でないもの同士を掛けても <InlineMath math="0" /> になる」という現象が起こることを見ました。これは通常の数の世界では決して起きない、抽象的な環特有の性質です。本節では、このような要素を「零因子」として定義し、逆に「零因子を持たない」という良い性質を持つ環である「整域」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">零因子の定義と例</h2>

            <p>
                「掛けて 0 になる」原因となる要素を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (零因子)">
                <p>
                    環 <InlineMath math="R" /> の元 <InlineMath math="a \neq 0" /> が<b>左零因子（left zero divisor）</b>であるとは、ある <InlineMath math="b \neq 0" />（<InlineMath math="b \in R" />）が存在して <InlineMath math="ab = 0" /> となることである。
                </p>
                <p>
                    同様に、ある <InlineMath math="c \neq 0" /> が存在して <InlineMath math="ca = 0" /> となるとき、<InlineMath math="a" /> を<b>右零因子（right zero divisor）</b>という。
                </p>
                <p>
                    可換環においては左零因子と右零因子は一致するため、単に<b>零因子（zero divisor）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                前節で登場した環を使って、どのような要素が零因子になるのかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.3-1 (剰余環における零因子)">
                <p>
                    剰余環 <InlineMath math="\mathbb{Z}/6\mathbb{Z} = \{\overline{0}, \overline{1}, \overline{2}, \overline{3}, \overline{4}, \overline{5}\}" /> の要素を調べます。
                </p>
                <p>
                    <InlineMath math="\overline{2} \cdot \overline{3} = \overline{6} = \overline{0}" /> であるため、<InlineMath math="\overline{2}" /> も <InlineMath math="\overline{3}" /> も零因子です。
                    また、<InlineMath math="\overline{4} \cdot \overline{3} = \overline{12} = \overline{0}" /> なので、<InlineMath math="\overline{4}" /> も零因子です。
                </p>
                <p>
                    一方、<InlineMath math="\overline{1}" /> と <InlineMath math="\overline{5}" /> は、他のどの <InlineMath math="\overline{0}" /> でない要素を掛けても <InlineMath math="\overline{0}" /> になることはありません（例：<InlineMath math="\overline{5} \cdot \overline{2} = \overline{10} = \overline{4} \neq \overline{0}" />）。したがって、<InlineMath math="\overline{1}" /> と <InlineMath math="\overline{5}" /> は零因子ではありません。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (行列環における零因子)">
                <p>
                    非可換環である <InlineMath math="2 \times 2" /> 行列環 <InlineMath math="M_2(\mathbb{R})" /> の例を見ます。
                </p>
                <BlockMath math="\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}" />
                <p>
                    この計算から、<InlineMath math="\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}" /> は左零因子であり、<InlineMath math="\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}" /> は右零因子であることがわかります。（もちろん、掛ける順序を逆にしても 0 になるため、どちらも左右両方の零因子です）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整域の定義と性質</h2>

            <p>
                零因子が存在すると、私たちが慣れ親しんでいる方程式の解き方（例えば <InlineMath math="ab = 0" /> なら <InlineMath math="a=0" /> または <InlineMath math="b=0" />）が使えなくなってしまいます。そこで、零因子を持たない「素性の良い」可換環に特別な名前を付けます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (整域)">
                <p>
                    <b>整域（integral domain）</b>とは、以下の条件を満たす可換環 <InlineMath math="D" /> のことである。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="1 \neq 0" /> である（自明な零環ではない）。</li>
                    <li>零因子を持たない。すなわち、任意の <InlineMath math="a, b \in D" /> に対して、<b>「<InlineMath math="ab = 0 \implies a = 0 \text{ または } b = 0" />」</b>が成り立つ。</li>
                </ol>
            </ContentBox>

            <p>
                整数の集合 <InlineMath math="\mathbb{Z}" /> は零因子を持たないので整域です（「整」域という名前の由来でもあります）。他にも、有理数 <InlineMath math="\mathbb{Q}" /> や実数 <InlineMath math="\mathbb{R}" /> などの体や、多項式環 <InlineMath math="\mathbb{Z}[x]" /> なども整域となります。
            </p>
            <p>
                整域における最も重要な性質は、方程式の両辺から共通の因子を「キャンセル（消去）」できるという点にあります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (消去法則)">
                <p>
                    整域 <InlineMath math="D" /> において、<InlineMath math="a \neq 0" /> であるとする。このとき、
                </p>
                <BlockMath math="ab = ac \implies b = c" />
                <p>
                    が成り立つ（これを<b>消去法則：cancellation law</b>という）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定 <InlineMath math="ab = ac" /> の両辺から <InlineMath math="ac" /> を引くと、
                </p>
                <BlockMath math="ab - ac = 0" />
                <p>
                    分配法則を用いて <InlineMath math="a" /> でくくると、
                </p>
                <BlockMath math="a(b - c) = 0" />
                <p>
                    整域の定義（零因子を持たない）より、<InlineMath math="a = 0" /> または <InlineMath math="b - c = 0" /> である。
                    前提として <InlineMath math="a \neq 0" /> としているため、<InlineMath math="b - c = 0" /> でなければならない。
                    よって <InlineMath math="b = c" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-3 (消去法則の成否)">
                <p>
                    <b>整域 <InlineMath math="\mathbb{Z}" /> の場合：</b><br />
                    方程式 <InlineMath math="2x = 6" /> つまり <InlineMath math="2x = 2 \cdot 3" /> を解くとき、両辺の <InlineMath math="2" />（<InlineMath math="\neq 0" />）を消去して <InlineMath math="x = 3" /> と結論できます。これは <InlineMath math="\mathbb{Z}" /> が整域だからこそ許される操作です。
                </p>
                <p>
                    <b>零因子を持つ環 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> の場合：</b><br />
                    <InlineMath math="\overline{2} \cdot \overline{2} = \overline{4}" /> であり、<InlineMath math="\overline{2} \cdot \overline{5} = \overline{10} = \overline{4}" /> でもあります。つまり
                </p>
                <BlockMath math="\overline{2} \cdot \overline{2} = \overline{2} \cdot \overline{5}" />
                <p>
                    という等式が成り立っています。<InlineMath math="\overline{2} \neq \overline{0}" /> ですが、両辺から <InlineMath math="\overline{2}" /> をキャンセルして <InlineMath math="\overline{2} = \overline{5}" /> とすることは当然できません。零因子が存在する環では消去法則は成り立たないのです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="有限整域は体になる">
                <p>
                    要素の個数が有限個であるような整域（有限整域）を考えると、実はそれは必ず「体」（0以外のすべての元が可逆である環）になることが知られています（ウェダーバーンの小定理の特別な場合）。
                </p>
                <p>
                    直感的には、整域であれば <InlineMath math="a \neq 0" /> を掛ける操作 <InlineMath math="x \mapsto ax" /> は消去法則によって単射になります。有限集合から自身への単射は必ず全射になる（鳩の巣原理）ため、<InlineMath math="ax = 1" /> となる <InlineMath math="x" /> が必ず存在し、逆元が作れるからです。これは後の章で「商体の構成」などを考える際の背景知識として重要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="0" /> でないのに、掛けると <InlineMath math="0" /> になってしまう元のことを<b>零因子</b>と呼ぶ。</li>
                    <li>零因子を持たない（<InlineMath math="ab=0 \implies a=0" /> または <InlineMath math="b=0" />）可換環を<b>整域</b>と呼ぶ。<InlineMath math="\mathbb{Z}" /> や多項式環はその代表例である。</li>
                    <li>整域においては、<InlineMath math="0" /> でない共通因数を両辺からキャンセルできる<b>消去法則</b>（<InlineMath math="ab=ac \implies b=c" />）が成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}