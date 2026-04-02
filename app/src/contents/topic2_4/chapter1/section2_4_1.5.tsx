import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AxiomaticSetTheory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラッセルのパラドックスによって露呈した「素朴集合論の致命的な矛盾」を解消するため、ツェルメロ（Zermelo）やフレンケル（Fraenkel）らは、「どのような操作によってならば安全に新しい集合を作ってよいか」を厳格な公理として列挙しました。
                これが現在、数学の事実上の標準基礎をなしている<strong>ZF公理系（Zermelo-Fraenkel Axioms）</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ZF公理系の主要な公理</h2>

            <p>
                ZF公理系は、ゼロから順に「安全な集合」を構築していくためのマニュアルのようなものです。ここではその主要なものを直感的な言葉で紹介します（現代の数理論理学ではすべて厳密な一階述語論理の言語によって記述されます）。
            </p>

            <ContentBox type="axiom" title="Axiom 1.5-1 (外延の公理：Axiom of Extensionality)">
                <p>
                    「2つの集合が全く同じ要素（元）を持っているならば、それらは同一の集合である。」
                </p>
                <BlockMath math="\forall A \forall B (\forall x (x \in A \iff x \in B) \implies A = B)" />
                <p>
                    ※ 集合にとって重要なのは「中身が何か」だけであり、「どのような条件で集められたか」という順序や文脈は関係ないことを保証する公理です。
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-2 (空集合の公理：Axiom of Empty Set)">
                <p>
                    「元を持たない集合が存在する。」
                </p>
                <p>
                    ※ これが、すべての集合構成論の「最初の無（ゼロ）」、すなわち <InlineMath math="\emptyset" /> の存在を保証する出発点です。
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-3 (対の公理：Axiom of Pairing)">
                <p>
                    「任意の2つの元 <InlineMath math="a, b" /> に対して、その両方のみを要素とする新しい集合 <InlineMath math="\{a, b\}" /> が存在する。」
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-4 (和集合の公理：Axiom of Union)">
                <p>
                    「任意の集合の族に対して、そのすべての中身の中身を集めあわせた大きな和集合が1つ存在する。」
                </p>
                <BlockMath math="\bigcup_{X \in \mathcal{F}} X" />
                <p>
                    が存在することを保証します。
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-5 (べき集合の公理：Axiom of Power Set)">
                <p>
                    「どのような集合 <InlineMath math="A" /> に対しても、その<span className="font-bold">すべての部分集合</span>を集めた集合 <InlineMath math="\mathcal{P}(A)" /> が存在する。」
                </p>
                <p>
                    ※ （例：<InlineMath math="A = \mathbb{N}" /> からは実数と同じ巨大な濃度を持つはずの <InlineMath math="\mathcal{P}(\mathbb{N})" /> が安全に作れるようになります。）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パラドックスを防ぐ「分出公理」と「正則性公理」</h2>

            <ContentBox type="axiom" title="Axiom 1.5-6 (分出公理：Axiom of Separation / Specification)">
                <p>
                    「任意の集合 <InlineMath math="A" /> と、任意の条件（論理式） <InlineMath math="P(x)" /> が与えられたとき、<strong><InlineMath math="A" /> の元であって、かつ <InlineMath math="P(x)" /> を満たすもの全体の集合</strong>が存在する。」
                </p>
                <BlockMath math="\{ x \in A \mid P(x) \}" />
                <p>
                    ※ これこそが「無制限の内包公理」を制限したものです。<InlineMath math="A" /> という<strong>すでに安全性が確認されている限界領域（親集合）</strong>の中でのみ、性質による切り出しを許可することで、ラッセルの集合 <InlineMath math="R" /> や「すべての集合の集合 <InlineMath math="V" />」などの形成をブロックします。<InlineMath math="R" /> はどの親集合からも切り出せないからです。
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-7 (正則性公理：Axiom of Regularity / Foundation)">
                <p>
                    「すべての空でない集合 <InlineMath math="A" /> は、自分自身と互いに素な要素を少なくとも1群つ持つ。」
                </p>
                <p>
                    ※ この公理の最たる効用は、「<InlineMath math="x \in x" />（自分が自分の要素になる）」や「<InlineMath math="x_1 \in x_2 \in x_3 \dots" /> （無限に所属関係が後退する）」といった<strong>異常な状態を禁止する</strong>ことです。数学の宇宙にある集合はすべて、「空集合」を出発点とする有限ステップの階層的（木構造）な袋の入れ子として作られていることを保証します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限を扱う公理（無限公理と置換公理）</h2>

            <p>
                これまでの公理だけだと「有限個の要素を持つ集合」しか作れません。<InlineMath math="\mathbb{N}, \mathbb{Z}, \mathbb{R}" /> などを現代数学で扱うためには、「無限」を実体ある一つの一塊（実無限）として取り扱う公理が必要です。
            </p>

            <ContentBox type="axiom" title="Axiom 1.5-8 (無限公理：Axiom of Infinity)">
                <p>
                    「空集合を要素として含み、さらに <InlineMath math="x" /> が要素なら必ず <InlineMath math="x \cup \{x\}" /> も要素であるような、無限に続く集合が存在する。」
                </p>
                <p>
                    ※ これはのちに自然数全体の集合 <InlineMath math="\mathbb{N}" /> を定義する強力な宣言となります。
                </p>
            </ContentBox>

            <ContentBox type="axiom" title="Axiom 1.5-9 (置換公理：Axiom of Replacement)">
                <p>
                    「集合を関数（一意な対応）で写した先の『元であること』の集まりも、また集合となる。」
                </p>
                <p>
                    ※ 分出公理が「引き算」であるなら、置換公理は「要素の張り替え（等大）」です。巨大な無限（カントールの超限順序数など）を再帰的な写像によって構築していく際に必要となった、フレンケルによる強力な追加公理です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ZFC 公理系</h2>

            <ContentBox type="remark" title="ZFC：ZF + 選択公理 (Axiom of Choice)">
                <p>
                    上記のツェルメロ＝フレンケル公理系 <strong>(ZF)</strong> に、現代数学で極めて強力な役割を果たすもう一つの独立した公理である<strong>「選択公理（Axiom of Choice、略して C）」</strong>を付け加えたものを、総称して <strong>ZFC 公理系</strong>と呼びます。
                </p>
                <p className="mt-4">
                    解析学や代数学、位相空間論における主要な強力な定理（すべてのベクトル空間は基底を持つ、チコノフの定理、ハーン－バナッハの定理など）は、この ZFC （特に C の力）を前提として証明されています。これ以降の章である Topic 2-4 では、暗黙にこの ZFC 公理系の世界で数学をしているものとして進めます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ZF公理系</strong>とは、ラッセルのパラドックスを回避し、「安全な公理からのみ集合をつくる」ためのルール集である。</li>
                    <li>特に<strong>分出公理</strong>は、「あらかじめ存在する全体集合 <InlineMath math="A" /> の中からのみ部分集合を切り出す」ことを規定し、矛盾の生成を防いでいる。</li>
                    <li>これらに<strong>選択公理（Axiom of Choice）</strong>を加えた「<strong>ZFC公理系</strong>」が、現在我々が学んでいる現代数学の標準的な基盤である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
