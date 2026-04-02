import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BorelVsLebesgue() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、実数直線上の「良い」集合族として、ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> とルベーグ可測集合族 <InlineMath math="\mathcal{L}" /> の2つが登場しました。
                本節では、これら2つの集合族の具体的な包含関係と、それらが一致しないことを示す「病的な」例について詳しく見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ボレル集合族とルベーグ可測集合族の関係</h2>

            <p>
                ルベーグ測度の構成過程から、ボレル集合族は常にルベーグ可測であることがわかります。
                しかし、その逆は一般には成り立ちません。
            </p>

            <ContentBox type="theorem" title="Theorem 1.5-1 (包含関係)">
                <p>
                    実数直線上のボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> とルベーグ可測集合族 <InlineMath math="\mathcal{L}" /> は、以下の包含関係を満たす。
                </p>
                <BlockMath math="\mathcal{B}(\mathbb{R}) \subsetneq \mathcal{L}" />
                <p className="mt-4">
                    すなわち、すべてのボレル集合はルベーグ可測であるが、ボレル集合ではないルベーグ可測集合が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b>包含 <InlineMath math="\mathcal{B}(\mathbb{R}) \subset \mathcal{L}" /> について</b>:
                    前節 Theorem 1.4-1 の証明で述べたように、任意の開区間はカラテオドリの可測条件を満たすためルベーグ可測である。
                    <InlineMath math="\mathcal{L}" /> は <InlineMath math="\sigma" />-加法族であるため、開区間系から生成される最小の <InlineMath math="\sigma" />-加法族である <InlineMath math="\mathcal{B}(\mathbb{R})" /> を包含する。
                </p>
                <p>
                    2. <b>不一致 <InlineMath math="\mathcal{B}(\mathbb{R}) \neq \mathcal{L}" /> について</b>:
                    集合族の濃度を比較する。完備な測度空間であるルベーグ測度において、測度 0 のカントール集合 <InlineMath math="C" /> （濃度 <InlineMath math="\mathfrak{c}" />）の任意の部分集合はルベーグ可測である。
                    ゆえに <InlineMath math="\mathcal{L}" /> の濃度は少なくとも <InlineMath math="2^{\mathfrak{c}}" /> 以上である。
                    一方、ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> の濃度は <InlineMath math="\mathfrak{c}" /> であることが知られている。
                    <BlockMath math="|\mathcal{B}(\mathbb{R})| = \mathfrak{c} < 2^{\mathfrak{c}} \leq |\mathcal{L}|" />
                    濃度が異なるため、両者は一致しない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.5-1 (非ボレルなルベーグ可測集合)">
                <p>
                    包含関係が真である（一致しない）ことの証明には、濃度の議論やカントール集合の性質が用いられます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> の濃度は、連続体濃度 <InlineMath math="\mathfrak{c} = 2^{\aleph_0}" /> である。</li>
                    <li>一方、カントール集合（測度 0）は連続体濃度を持ち、そのべき集合（ルベーグ測度 2.4 の完備性よりすべて可測）の濃度は <InlineMath math="2^{\mathfrak{c}}" /> である。</li>
                </ul>
                <p className="mt-4">
                    濃度が異なるため、<InlineMath math="\mathcal{L}" /> は <InlineMath math="\mathcal{B}(\mathbb{R})" /> より圧倒的に多くの集合を含んでいます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非可測集合の存在</h2>

            <p>
                さらに衝撃的な事実として、「ルベーグ可測ですらない」集合が存在します。
                このような集合を示すには、選択公理を用いる必要があります。
            </p>

            <ContentBox type="example" title="Example 1.5-2 (ヴィタリ集合)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> において、差が有理数であるという同値関係 <InlineMath math="x \sim y \iff x - y \in \mathbb{Q}" /> を考える。
                    選択公理により、各同値類から代表元を1つずつ選んで作られる集合 <InlineMath math="V" /> を<b>ヴィタリ集合</b> (Vitali set) という。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>もし <InlineMath math="V" /> が可測であれば、測度が 0 でも正の値でも矛盾が生じる。</li>
                    <li>したがって、<InlineMath math="V" /> はルベーグ非可測である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="すべての集合に測度は定義できるか？">
                <p>
                    ヴィタリ集合の存在は、「すべての部分集合に対して、長さの概念を矛盾なく拡張することは不可能である」という数学的な限界を宣言しています。
                    このため、測度論では「測れる集合（可測集合）」のみを対象とする慎重な枠組みが必要となるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ボレル集合族</b>はルベーグ可測集合族に真に含まれる (<InlineMath math="\mathcal{B}(\mathbb{R}) \subsetneq \mathcal{L}" />)。</li>
                    <li>測度 0 の集合のべき集合を考えることで、ボレルでない可測集合が構成できる。</li>
                    <li><b>ヴィタリ集合</b>は、選択公理を用いて示されるルベーグ非可測な集合の例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
