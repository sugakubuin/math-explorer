import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EuclideanDomains() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章から数章にわたり、整数環 <InlineMath math="\mathbb{Z}" /> の持つ「素因数分解ができる」という優れた性質が、どのような環にまで一般化できるかを探求します。その第一歩として、割り算の原理（余りのある割り算）が実行できる整域である「ユークリッド整域」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ユークリッド整域の定義と例</h2>

            <p className="leading-relaxed">
                整数や多項式の割り算では、「余り」が「割る数（式）」よりも「小さい」という性質が重要でした。この「小ささ」を測るための関数（ノルム関数）を備えた整域を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (ユークリッド整域)">
                <p>
                    整域 <InlineMath math="D" /> に、<InlineMath math="0" /> でない元に対して非負整数を対応させる関数（ノルム関数） <InlineMath math="N : D \setminus \{0\} \to \mathbb{Z}_{\geq 0}" /> が存在し、以下の「除法の原理」を満たすとき、<InlineMath math="D" /> を<b>ユークリッド整域（Euclidean Domain, 略して ED）</b>という。
                </p>
                <p>
                    任意の <InlineMath math="a \in D" /> と <InlineMath math="b \in D \setminus \{0\}" /> に対して、
                </p>
                <BlockMath math="a = qb + r \quad (r = 0 \text{ または } N(r) < N(b))" />
                <p>
                    を満たす <InlineMath math="q, r \in D" /> が存在する。（<InlineMath math="q" /> を商、<InlineMath math="r" /> を剰余と呼ぶ）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                Definition 5.1-1 を満たす最も典型的な例は、整数環と多項式環です。
            </p>

            <ContentBox type="example" title={<span>Example 5.1-1 (<InlineMath math="\mathbb{Z}" /> は ED)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> は ED である。ノルム関数として絶対値 <InlineMath math="N(a) = |a|" /> を用いると、通常の整数の割り算が除法の原理を満たす。
                </p>
                <p>
                    例えば、<InlineMath math="a = 7" />、<InlineMath math="b = 3" /> のとき
                    <BlockMath math="7 = 2 \cdot 3 + 1" />
                    であり、余り <InlineMath math="r = 1" /> のノルムは <InlineMath math="N(1) = 1 < 3 = N(3)" /> となる。
                </p>
                <p>
                    負の数についても同様で、<InlineMath math="a = -7" />、<InlineMath math="b = 3" /> のときは
                    <BlockMath math="-7 = (-3) \cdot 3 + 2" />
                    とすれば、<InlineMath math="N(2) = 2 < 3 = N(3)" /> となり条件を満たす。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.1-2 (<InlineMath math="F[x]" /> は ED)</span>}>
                <p>
                    体 <InlineMath math="F" /> 上の一変数多項式環 <InlineMath math="F[x]" /> も ED である。ノルム関数として多項式の次数 <InlineMath math="N(f) = \deg f" /> を用いる。
                </p>
                <p>
                    多項式の筆算による割り算がまさに除法の原理そのものである。例えば、<InlineMath math="x^3 - 1" /> を <InlineMath math="x - 1" /> で割ると
                    <BlockMath math="x^3 - 1 = (x^2 + x + 1)(x - 1) + 0" />
                    となり、割り切れるため余りは <InlineMath math="0" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ED の具体的な性質</h2>

            <p className="leading-relaxed">
                ED であることの最大の利点は、ユークリッドの互除法が使えるようになることです。これにより、最大公約数の存在が保証されます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (ED では最大公約数が存在する)">
                <p>
                    ユークリッド整域 <InlineMath math="D" /> において、任意の 2 つの元に対して最大公約数（gcd）が必ず存在する。
                </p>
                <p>
                    これは、除法の原理を繰り返し適用する「ユークリッドの互除法」が必ず有限回で停止して gcd を与えるためである。詳細な構成と証明は §5.3 で扱う。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                なお、ED を定義するためのノルム関数は、環に対して一意に決まるわけではありません。
            </p>

            <ContentBox type="remark" title="Remark (ノルム関数の非一意性)">
                <p>
                    ED であることを示すためのノルム関数 <InlineMath math="N" /> の選び方は一意ではありません。例えば <InlineMath math="\mathbb{Z}" /> においては、<InlineMath math="N(a) = |a|" /> だけでなく <InlineMath math="N(a) = |a|^2" /> や <InlineMath math="N(a) = 2|a|" /> などを用いても、除法の原理の条件を問題なく満たします。
                </p>
                <p>
                    重要なのは「特定の関数があるかどうか」ではなく、「余りが必ず真に小さくなっていくような『測り方』が存在して、互除法が停止する構造があるかどうか」という点にあります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>余りが割る数より「小さく」なるような割り算が常に実行できる整域を<b>ユークリッド整域（ED）</b>という。</li>
                    <li><InlineMath math="\mathbb{Z}" />（ノルムは絶対値）や体上の多項式環 <InlineMath math="F[x]" />（ノルムは次数）は ED の代表例である。</li>
                    <li>ED ではユークリッドの互除法が適用でき、これによって最大公約数が必ず存在することが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
