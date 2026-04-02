import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RingExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で定義した「環」は、整数や多項式、行列といった一見全く異なる対象を統一的に扱うための枠組みです。本節では、今後の議論で主役となるさまざまな環の具体例を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整数環・有理数体・剰余環</h2>

            <p>
                環のもっとも基本的かつ重要な例は、私たちが普段から使っている「数」の世界です。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (整数環)">
                <p>
                    整数の全体 <InlineMath math="\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}" /> は、通常の足し算と掛け算によって環をなします。これを<b>整数環</b>と呼びます。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>乗法の交換法則 <InlineMath math="ab = ba" /> が成り立つため、<b>可換環</b>です。</li>
                    <li>乗法の単位元 <InlineMath math="1" /> を持ちます。</li>
                    <li>乗法について逆元を持つ（掛けて 1 になる）要素は <InlineMath math="1" /> と <InlineMath math="-1" /> のみです。</li>
                </ul>
            </ContentBox>

            <p>
                整数の世界から「割り算（分数）」ができるように世界を広げると、さらに性質の良い環が得られます。
            </p>

            <ContentBox type="example" title="Example 1.2-2 (有理数・実数・複素数の環)">
                <p>
                    有理数 <InlineMath math="\mathbb{Q}" />、実数 <InlineMath math="\mathbb{R}" />、複素数 <InlineMath math="\mathbb{C}" /> の集合も、通常の四則演算に関して可換環となります。
                </p>
                <p>
                    これらと整数環 <InlineMath math="\mathbb{Z}" /> の最大の違いは、<b><InlineMath math="0" /> 以外のすべての要素が乗法に関する逆元を持つ</b>ことです。例えば <InlineMath math="\mathbb{Q}" /> において、<InlineMath math="2" /> に対して <InlineMath math="1/2" /> を掛ければ <InlineMath math="1" /> になります。<InlineMath math="\mathbb{Z}" /> では <InlineMath math="1/2" /> は整数ではないため逆元が存在しませんでした。
                </p>
                <p>
                    このように「<InlineMath math="0" /> 以外のすべての要素が逆元を持つ可換環」のことを特別に<b>体（field）</b>と呼びます（厳密な定義は §1.4 で行います）。
                </p>
            </ContentBox>

            <p>
                有限個の要素しか持たない環も存在します。群論で学んだ「合同式（時計の文字盤の計算）」です。
            </p>

            <ContentBox type="example" title="Example 1.2-3 (剰余環)">
                <p>
                    <InlineMath math="n" /> を正の整数とします。<InlineMath math="n" /> で割った余りの集合 <InlineMath math="\mathbb{Z}/n\mathbb{Z} = \{\overline{0}, \overline{1}, \ldots, \overline{n-1}\}" /> は、剰余の加法と乗法について可換環となります。これを<b>剰余環（quotient ring）</b>と呼びます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b><InlineMath math="n=6" /> の場合：</b><br />
                        <InlineMath math="\overline{2} \cdot \overline{3} = \overline{6} = \overline{0}" /> となります。「<InlineMath math="0" /> でないもの同士を掛けて <InlineMath math="0" /> になる」という、普通の数ではあり得ない現象が起きます。
                    </li>
                    <li>
                        <b><InlineMath math="n=5" />（素数）の場合：</b><br />
                        <InlineMath math="0" /> 以外の要素 <InlineMath math="\overline{1}, \overline{2}, \overline{3}, \overline{4}" /> の掛け算を考えると、例えば <InlineMath math="\overline{2} \cdot \overline{3} = \overline{6} = \overline{1}" /> となり、互いに逆元を持つことがわかります。実は、<InlineMath math="n" /> が素数のとき <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> は体になります（有限体 <InlineMath math="\mathbb{F}_n" /> と呼ばれます）。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多項式環・行列環・直積環</h2>

            <p>
                環の要素は「数」である必要はありません。多項式や行列も、立派な環を構成します。
            </p>

            <ContentBox type="example" title="Example 1.2-4 (多項式環)">
                <p>
                    整数を係数とする変数 <InlineMath math="x" /> の多項式全体の集合を <InlineMath math="\mathbb{Z}[x]" /> と書きます。
                </p>
                <BlockMath math="\mathbb{Z}[x] = \{a_n x^n + \cdots + a_1 x + a_0 \mid a_i \in \mathbb{Z}, \, n \geq 0\}" />
                <p>
                    多項式同士の通常の足し算と掛け算を考えると、これも可換環となります。単位元は定数多項式の <InlineMath math="1" /> です。係数が実数なら <InlineMath math="\mathbb{R}[x]" />、複素数なら <InlineMath math="\mathbb{C}[x]" /> となり、これらもすべて環です。
                </p>
                <p>
                    多項式の積について、次数の公式 <InlineMath math="\deg(fg) = \deg f + \deg g" /> が成り立つのが特徴です。
                </p>
            </ContentBox>

            <p>
                これまで見てきた例はすべて「可換環（<InlineMath math="ab=ba" />）」でしたが、非可換な環の代表例が行列です。
            </p>

            <ContentBox type="example" title="Example 1.2-5 (行列環)">
                <p>
                    実数を成分とする <InlineMath math="n \times n" /> 正方行列の全体を <InlineMath math="M_n(\mathbb{R})" /> と書きます。
                </p>
                <p>
                    行列の和と行列の積について、<InlineMath math="M_n(\mathbb{R})" /> は環をなします。単位元は単位行列 <InlineMath math="I" /> です。
                </p>
                <p>
                    <InlineMath math="n \geq 2" /> のとき、行列の積は交換法則を満たしません（<InlineMath math="AB \neq BA" />）。したがって、行列環は<b>非可換環</b>の代表例です。
                </p>
                <p>
                    例えば <InlineMath math="2 \times 2" /> 行列において、
                    <BlockMath math="\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}" />
                    ですが、掛ける順序を逆にすると
                    <BlockMath math="\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}" />
                    となり、結果が異なります。
                </p>
            </ContentBox>

            <p>
                最後に、複数の環を組み合わせて新しい環を作る操作「直積」を紹介します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (直積環)">
                <p>
                    2 つの環 <InlineMath math="R" /> と <InlineMath math="S" /> が与えられたとき、その直積集合 <InlineMath math="R \times S = \{(r, s) \mid r \in R, s \in S\}" /> に対して、成分ごとの演算
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="(r_1, s_1) + (r_2, s_2) = (r_1 + r_2, s_1 + s_2)" /></li>
                    <li><InlineMath math="(r_1, s_1)(r_2, s_2) = (r_1 r_2, s_1 s_2)" /></li>
                </ul>
                <p>
                    を定めると、<InlineMath math="R \times S" /> も環になる。これを<b>直積環（product ring）</b>と呼ぶ。単位元は <InlineMath math="(1_R, 1_S)" /> であり、零元は <InlineMath math="(0_R, 0_S)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-6 (直積環の性質)">
                <p>
                    <InlineMath math="\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}" /> という直積環を考えます。
                </p>
                <p>
                    この環の中で <InlineMath math="a = (\overline{1}, \overline{0})" /> と <InlineMath math="b = (\overline{0}, \overline{1})" /> という 2 つの要素を掛け合わせると、
                </p>
                <BlockMath math="ab = (\overline{1}, \overline{0}) \cdot (\overline{0}, \overline{1}) = (\overline{1} \cdot \overline{0}, \overline{0} \cdot \overline{1}) = (\overline{0}, \overline{0})" />
                <p>
                    となります。これは直積環の零元です。<InlineMath math="a" /> も <InlineMath math="b" /> も零元ではないのに、掛けると零元になってしまうという性質を持っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}" /></b>：私たちがよく知る可換環の例。<InlineMath math="\mathbb{Z}" /> 以外は 0 以外の全要素が逆元を持つ「体」である。</li>
                    <li><b>剰余環 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /></b>：有限個の要素からなる環。0 以外同士を掛けて 0 になることがある。</li>
                    <li><b>多項式環 <InlineMath math="\mathbb{Z}[x]" /></b>：数だけでなく、多項式も環の構造を持つ。</li>
                    <li><b>行列環 <InlineMath math="M_n(\mathbb{R})" /></b>：掛ける順序で結果が変わる「非可換環」の代表例。</li>
                    <li><b>直積環 <InlineMath math="R \times S" /></b>：既存の環を成分ごとに組み合わせて新しい環を作る手法。</li>
                </ul>
            </ContentBox>
        </section>
    );
}