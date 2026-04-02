import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function QuotientRings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                イデアルを定義した最大の動機は、群論における「剰余群（商群）」と同じように、環においても「剰余環（商環）」を構成することにあります。本節では、イデアルによる剰余類を考え、そこに自然な環の構造が入ることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">剰余類の定義と集合 <InlineMath math="R/I" /></h2>

            <p>
                可換環 <InlineMath math="R" /> とそのイデアル <InlineMath math="I" /> を固定します。<InlineMath math="I" /> は加法について部分群（とくに可換なので正規部分群）であるため、群論で学んだように、加法群としての商群（剰余群）を作ることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (イデアルを法とする剰余類)">
                <p>
                    環 <InlineMath math="R" /> の要素 <InlineMath math="a" /> に対して、
                </p>
                <BlockMath math="a + I = \{ a + x \mid x \in I \}" />
                <p>
                    を <InlineMath math="I" /> を法とする <InlineMath math="a" /> の<b>剰余類（coset）</b>という。<InlineMath math="\overline{a}" /> や <InlineMath math="[a]" /> とも書く。
                </p>
                <p>
                    2 つの要素 <InlineMath math="a, b \in R" /> が同じ剰余類に属すること（<InlineMath math="a + I = b + I" />）は、その差が <InlineMath math="I" /> に属すること（<InlineMath math="a - b \in I" />）と同値であり、これを合同式を用いて
                </p>
                <BlockMath math="a \equiv b \pmod I" />
                <p>
                    と表す。
                </p>
            </ContentBox>

            <p>
                これらの剰余類全体からなる集合を <InlineMath math="R/I" /> と書き、「アール・オーバー・アイ」などと読みます。
            </p>
            <BlockMath math="R/I = \{ a + I \mid a \in R \}" />
            <p>
                群論の知識から、この集合 <InlineMath math="R/I" /> には自然な加法
            </p>
            <BlockMath math="(a + I) + (b + I) = (a + b) + I" />
            <p>
                が well-defined に定まり、加法群となることは既に知られています。問題は、<b>「乗法」がうまく定義できるかどうか</b>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">剰余環の構成と正当性（Well-definedness）</h2>

            <p>
                <InlineMath math="R/I" /> に環の構造を入れるため、乗法を以下のように「代表元の積」で定義したいと考えます。
            </p>
            <BlockMath math="(a + I)(b + I) = ab + I" />
            <p>
                この定義が意味を持つためには、「代表元の取り方に依存しない（well-defined である）」ことが必要です。実はここで、<InlineMath math="I" /> が単なる部分環ではなく「イデアル（吸収律を満たす）」であることが決定的な役割を果たします。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-1 (剰余環の乗法の Well-definedness)">
                <p>
                    <InlineMath math="a_1 + I = a_2 + I" /> かつ <InlineMath math="b_1 + I = b_2 + I" /> ならば、
                </p>
                <BlockMath math="a_1 b_1 + I = a_2 b_2 + I" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より <InlineMath math="a_1 - a_2 \in I" />、<InlineMath math="b_1 - b_2 \in I" /> である。したがって、ある <InlineMath math="x, y \in I" /> が存在して
                </p>
                <BlockMath math="a_1 = a_2 + x, \quad b_1 = b_2 + y" />
                <p>
                    と書ける。これらの積を計算すると、
                </p>
                <BlockMath math="a_1 b_1 = (a_2 + x)(b_2 + y) = a_2 b_2 + a_2 y + x b_2 + x y" />
                <p>
                    ここで、右辺の第2項以降について考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
                    <li><InlineMath math="a_2 y" /> は、<InlineMath math="R" /> の元 <InlineMath math="a_2" /> と <InlineMath math="I" /> の元 <InlineMath math="y" /> の積なので、<InlineMath math="I" /> の吸収律により <InlineMath math="I" /> の元。</li>
                    <li><InlineMath math="x b_2" /> は、<InlineMath math="I" /> の元 <InlineMath math="x" /> と <InlineMath math="R" /> の元 <InlineMath math="b_2" /> の積なので、<InlineMath math="I" /> の吸収律により <InlineMath math="I" /> の元。</li>
                    <li><InlineMath math="xy" /> は、<InlineMath math="I" /> の元同士の積なので、当然 <InlineMath math="I" /> の元（部分環の性質）。</li>
                </ul>
                <p>
                    <InlineMath math="I" /> は加法について閉じているため、それらの和 <InlineMath math="z = a_2 y + x b_2 + xy" /> も <InlineMath math="I" /> に含まれる。<br />
                    よって <InlineMath math="a_1 b_1 = a_2 b_2 + z \implies a_1 b_1 - a_2 b_2 \in I" /> となり、<InlineMath math="a_1 b_1 + I = a_2 b_2 + I" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明の中で「<InlineMath math="I" /> に <InlineMath math="R" /> の元を掛けても <InlineMath math="I" /> に吸収される」という性質（吸収律）が使われていることに注目してください。もし <InlineMath math="I" /> がただの部分環であれば、<InlineMath math="a_2 y" /> や <InlineMath math="x b_2" /> が <InlineMath math="I" /> に入る保証がなく、乗法が定義できません。<br />
                「剰余群を作るためには正規部分群が必要」だったのと全く同じ構図で、<b>「剰余環を作るためにはイデアルが必要」</b>なのです。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (剰余環)">
                <p>
                    可換環 <InlineMath math="R" /> とそのイデアル <InlineMath math="I" /> によって定義される集合 <InlineMath math="R/I" /> は、以下の演算によって環をなす。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 mb-2">
                    <li>加法：<InlineMath math="(a + I) + (b + I) = (a + b) + I" /></li>
                    <li>乗法：<InlineMath math="(a + I)(b + I) = ab + I" /></li>
                </ul>
                <p>
                    これを、<InlineMath math="I" /> による <InlineMath math="R" /> の<b>剰余環（商環：quotient ring / residue ring）</b>と呼ぶ。<br />
                    零元は <InlineMath math="0 + I = I" /> であり、単位元は <InlineMath math="1_R + I" /> である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (Z/(n) はおなじみの剰余環)">
                <p>
                    <InlineMath math="R = \mathbb{Z}" />、<InlineMath math="I = (n) = n\mathbb{Z}" /> とします。
                </p>
                <p>
                    <InlineMath math="a \equiv b \pmod{(n)} \iff a - b \in n\mathbb{Z} \iff a - b" /> が <InlineMath math="n" /> で割り切れる。
                </p>
                <p>
                    これはまさしく合同式の定義そのものです。したがって剰余環 <InlineMath math="\mathbb{Z}/(n)" /> は、これまでに何度も登場した <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> と全く同じものです。環論の一般的な「剰余環」の概念は、整数の合同式の考え方を任意の環とイデアルに対して一般化したものと言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>イデアル <InlineMath math="I" /> を用いて、同値関係 <InlineMath math="a \sim b \iff a-b \in I" /> による商集合 <InlineMath math="R/I" /> を作ることができる。</li>
                    <li><InlineMath math="R/I" /> の乗法 <InlineMath math="(a+I)(b+I) = ab+I" /> が well-defined になるのは、<b><InlineMath math="I" /> が吸収律を満たす（イデアルである）から</b>である。</li>
                    <li>このようにして作られた環を<b>剰余環</b>と呼び、<InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> のような合同式の体系は剰余環の最も基本的な例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}