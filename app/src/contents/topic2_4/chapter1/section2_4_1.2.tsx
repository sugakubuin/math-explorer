import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SetOperations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数に対して足し算や掛け算といった演算があるように、集合同士を組み合わせて新しい集合を作る「集合への演算」が存在します。ここでは4つの基本的な集合演算（和・積・差・補）を導入し、それらが満たす代数的な性質や、重要定理であるド・モルガンの法則について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な集合演算</h2>

            <ContentBox type="definition" title="Definition 1.2-1 (基本的な集合演算)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> について、以下の演算により作られる新しい集合を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>和集合（Union）:</strong> <InlineMath math="A \cup B" /> <br />
                        <InlineMath math="A" /> と <InlineMath math="B" /> の<strong>少なくとも一方</strong>に属する元全体の集合。
                        <BlockMath math="A \cup B = \{ x \mid x \in A \text{ または } x \in B \}" />
                    </li>
                    <li>
                        <strong>共通部分（Intersection）:</strong> <InlineMath math="A \cap B" /> <br />
                        <InlineMath math="A" /> と <InlineMath math="B" /> の<strong>両方</strong>に属する元全体の集合。
                        <BlockMath math="A \cap B = \{ x \mid x \in A \text{ かつ } x \in B \}" />
                        （※ <InlineMath math="A \cap B = \emptyset" /> のとき、<InlineMath math="A" /> と <InlineMath math="B" /> は<strong>互いに素（disjoint）</strong>であるという）
                    </li>
                    <li>
                        <strong>差集合（Difference）:</strong> <InlineMath math="A \setminus B" /> （または <InlineMath math="A - B" />） <br />
                        <InlineMath math="A" /> には属するが、<InlineMath math="B" /> には<strong>属さない</strong>元全体の集合。
                        <BlockMath math="A \setminus B = \{ x \mid x \in A \text{ かつ } x \notin B \}" />
                    </li>
                    <li>
                        <strong>補集合（Complement）:</strong> <InlineMath math="A^c" /> （または <InlineMath math="\overline{A}" /> など） <br />
                        あらかじめある巨大な<strong>全体集合（Universal set） <InlineMath math="U" /> </strong>が固定されているとき、<InlineMath math="U" /> に属していてかつ <InlineMath math="A" /> に属さない元全体の集合。（すなわち <InlineMath math="U \setminus A" /> のこと）
                        <BlockMath math="A^c = \{ x \in U \mid x \notin A \}" />
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">集合演算の基本性質</h2>

            <p>
                和集合 <InlineMath math="\cup" /> と共通部分 <InlineMath math="\cap" /> は、数の足し算や掛け算とよく似た法則（可換律、結合律、分配律）を満たすと同時に、集合特有の「吸収律」も満たします。
            </p>

            <ContentBox type="theorem" title="Proposition 1.2-1 (集合演算の代数的性質)">
                <p>
                    任意の集合 <InlineMath math="A, B, C" /> に対して、以下が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>可換律 (Commutativity):</strong> <br />
                        <InlineMath math="A \cup B = B \cup A" /> , <br />
                        <InlineMath math="A \cap B = B \cap A" />
                    </li>
                    <li>
                        <strong>結合律 (Associativity):</strong> <br />
                        <InlineMath math="(A \cup B) \cup C = A \cup (B \cup C)" /> , <br />
                        <InlineMath math="(A \cap B) \cap C = A \cap (B \cap C)" />
                    </li>
                    <li>
                        <strong>分配律 (Distributivity):</strong> <br />
                        <InlineMath math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" /> , <br />
                        <InlineMath math="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" />
                    </li>
                    <li>
                        <strong>吸収律 (Absorption):</strong> <br />
                        <InlineMath math="A \cup (A \cap B) = A" /> , <br />
                        <InlineMath math="A \cap (A \cup B) = A" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (結合律および分配律の代表例)">
                <p>
                    これらの性質は、すべて論理学における対応する法則から直接導かれる。ここでは代表として「分配律 <InlineMath math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />」のみを証明する（他も同様に示される）。
                </p>
                <p className="mt-4">
                    <InlineMath math="x \in A \cap (B \cup C)" /> とすると、定義より「<InlineMath math="x \in A" /> かつ <InlineMath math="x \in B \cup C" />」である。<br />
                    これは論理的に「<InlineMath math="x \in A" /> かつ（<InlineMath math="x \in B" /> または <InlineMath math="x \in C" />）」と同値である。<br />
                    論理演算の分配法則より、これは「（<InlineMath math="x \in A" /> かつ <InlineMath math="x \in B" />）または（<InlineMath math="x \in A" /> かつ <InlineMath math="x \in C" />）」と同値となる。<br />
                    よって <InlineMath math="x \in (A \cap B)" /> または <InlineMath math="x \in (A \cap C)" /> が成り立ち、和集合の定義から <InlineMath math="x \in (A \cap B) \cup (A \cap C)" /> となる。
                </p>
                <p className="mt-4">
                    この一連の同値変形により、左辺の集合と右辺の集合が全く同じ元を持つことが示されたため、<InlineMath math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                ※ 数の演算では <InlineMath math="a + (b \times c) = (a + b) \times (a + c)" /> のような「足し算が掛け算へ分配される法則」は成り立ちませんが、集合においては和演算と積演算の<strong>双方向への分配律が成立する</strong>という完全な対称性を持っています（ブール代数の特徴です）。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ド・モルガンの法則</h2>

            <p>
                「補集合をとる」という操作が、和集合と共通部分を互いに入れ替えるように作用するというのが、ド・モルガンの法則です。論理学における「<InlineMath math="\neg(P \lor Q) \iff \neg P \land \neg Q" />」に対応する極めて重要な定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-1 (ド・モルガンの法則)">
                <p>
                    全体集合 <InlineMath math="U" /> の部分集合 <InlineMath math="A, B" /> について次が成り立つ。
                </p>
                <BlockMath math="(A \cup B)^c = A^c \cap B^c" />
                <BlockMath math="(A \cap B)^c = A^c \cup B^c" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    最初の等式のみ証明する。集合の相等を示す定石通り、互いの包含関係（<InlineMath math="\subset" /> と <InlineMath math="\supset" />）を示す。<br />
                    任意の元 <InlineMath math="x \in U" /> について考える。
                </p>
                <p className="mt-4">
                    <strong>1. <InlineMath math="(A \cup B)^c \subset A^c \cap B^c" /> の証明</strong><br />
                    <InlineMath math="x \in (A \cup B)^c" /> とすると、補集合の定義より <InlineMath math="x \notin A \cup B" /> である。<br />
                    和集合の定義より「<InlineMath math="x \in A" /> または <InlineMath math="x \in B" />」の否定となるため、「<InlineMath math="x \notin A" /> かつ <InlineMath math="x \notin B" />」である。<br />
                    これは <InlineMath math="x \in A^c" /> かつ <InlineMath math="x \in B^c" /> を意味するので、積集合の定義から <InlineMath math="x \in (A^c \cap B^c)" />。
                </p>
                <p className="mt-4">
                    <strong>2. <InlineMath math="(A \cup B)^c \supset A^c \cap B^c" /> の証明</strong><br />
                    <InlineMath math="x \in (A^c \cap B^c)" /> とすると、<InlineMath math="x \in A^c" /> かつ <InlineMath math="x \in B^c" /> である。<br />
                    すなわち <InlineMath math="x \notin A" /> かつ <InlineMath math="x \notin B" /> である。これは「<InlineMath math="x \in A" /> と <InlineMath math="x \in B" /> のどちらも成立しない」ということなので、和集合には属さない。<br />
                    よって <InlineMath math="x \notin (A \cup B)" /> であり、<InlineMath math="x \in (A \cup B)^c" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般化された集合演算とド・モルガンの法則</h2>

            <p>
                和や共通部分は、2つの集合間だけでなく、無限に多くの集合たちに対しても一挙に定義することができます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (添字族による和・共通部分)">
                <p>
                    <InlineMath math="\Gamma" /> を添字（インデックス）の集合とし、各 <InlineMath math="\gamma \in \Gamma" /> に対して集合 <InlineMath math="A_\gamma" /> が割り当てられているとする（集合族）。このとき、
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>和集合:</strong> 少なくとも1つの <InlineMath math="\gamma" /> について <InlineMath math="A_\gamma" /> に属する元全体の集合。
                        <BlockMath math="\bigcup_{\gamma \in \Gamma} A_\gamma = \{ x \mid \exists \gamma \in \Gamma, x \in A_\gamma \}" />
                    </li>
                    <li>
                        <strong>共通部分:</strong> すべての <InlineMath math="\gamma" /> について <InlineMath math="A_\gamma" /> に属する元全体の集合。
                        <BlockMath math="\bigcap_{\gamma \in \Gamma} A_\gamma = \{ x \mid \forall \gamma \in \Gamma, x \in A_\gamma \}" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="theorem" title="Proposition 1.2-2 (一般化されたド・モルガンの法則)">
                <p>
                    任意の添字集合 <InlineMath math="\Gamma" /> について、次が成立する。
                </p>
                <BlockMath math="\left( \bigcup_{\gamma \in \Gamma} A_\gamma \right)^c = \bigcap_{\gamma \in \Gamma} (A_\gamma)^c" />
                <BlockMath math="\left( \bigcap_{\gamma \in \Gamma} A_\gamma \right)^c = \bigcup_{\gamma \in \Gamma} (A_\gamma)^c" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    最初の等式 <InlineMath math="\left( \bigcup_{\gamma \in \Gamma} A_\gamma \right)^c = \bigcap_{\gamma \in \Gamma} (A_\gamma)^c" /> について証明する。
                </p>
                <p className="mt-4">
                    <InlineMath math="x \in \left( \bigcup_{\gamma \in \Gamma} A_\gamma \right)^c" /> とすると、定義より <InlineMath math="x \notin \bigcup_{\gamma \in \Gamma} A_\gamma" /> である。<br />
                    和集合に属さないということは、「<InlineMath math="\exists \gamma \in \Gamma, x \in A_\gamma" />」という命題の否定であるから、「論理記号の否定規則」により「<InlineMath math="\forall \gamma \in \Gamma, x \notin A_\gamma" />」となる。<br />
                    これは、すべての <InlineMath math="\gamma \in \Gamma" /> に対して <InlineMath math="x \in (A_\gamma)^c" /> であることを意味する。<br />
                    したがって、共通部分の定義により <InlineMath math="x \in \bigcap_{\gamma \in \Gamma} (A_\gamma)^c" /> が導かれる。
                </p>
                <p className="mt-4">
                    以上の各ステップは逆方向にも完全に辿れる（同値変形である）ため、両辺の集合は等しい。もう1つの等式も同様の手順で示される。無限や非可算の族であっても完全に成立する強力な法則である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="集合演算と論理演算の対応関係">
                <p>
                    これまでに見てきたように、集合演算と論理学の演算には完璧な対応関係があります。
                </p>
                <table className="min-w-full mt-4 border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                            <th className="py-2 text-left">集合演算</th>
                            <th className="py-2 text-left">論理演算</th>
                            <th className="py-2 text-left">意味</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr>
                            <td className="py-2 inline-flex items-center"><InlineMath math="\cup" />（和集合）</td>
                            <td className="py-2"><InlineMath math="\lor" />（論理和）</td>
                            <td className="py-2">または（OR）</td>
                        </tr>
                        <tr>
                            <td className="py-2 inline-flex items-center"><InlineMath math="\cap" />（共通部分）</td>
                            <td className="py-2"><InlineMath math="\land" />（論理積）</td>
                            <td className="py-2">かつ（AND）</td>
                        </tr>
                        <tr>
                            <td className="py-2 inline-flex items-center"><InlineMath math="(\cdot)^c" />（補集合）</td>
                            <td className="py-2"><InlineMath math="\neg" />（否定）</td>
                            <td className="py-2">ではない（NOT）</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    この対応のおかげで、複雑な集合の性質を証明する作業は、論理式の同値変形へと置き換えて機械的に進めることができます。数学において「論理」がいかに強力な土台であるかがわかります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>和・共通部分・差・補の4つの基本演算は、要素の所属に関する論理式（OR、AND、NOT）で厳密に定義される。</li>
                    <li>集合演算は分配律など美しい対称性を持った代数構造（ブール代数）をなす。</li>
                    <li>ド・モルガンの法則は、和集合の補集合と補集合の共通部分を互換する。これは無限個の集合族に対する演算にまで一般化できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
