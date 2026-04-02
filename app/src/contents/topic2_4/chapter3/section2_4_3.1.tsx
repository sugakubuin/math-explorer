import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BinaryRelationsDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 2 では「写像」という、ある元を別の元へ確実に移す特別なルールを学びました。
                しかし、数学の世界には写像ほど厳密ではない「繋がり」も存在します。
                例えば「<InlineMath math="x" /> は <InlineMath math="y" /> より大きい」や「<InlineMath math="x" /> は <InlineMath math="y" /> の親である」といった関係です。
                この章では、これらの繋がりを集合論の言葉で一般化した<strong>関係（Relation）</strong>の理論を築き上げます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">2項関係の定義</h2>

            <p>
                2つの対象の間の関係を定義するために、§1.3 で学んだ<strong>直積集合</strong>を活用します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (2項関係)">
                <p>
                    2つの集合 <InlineMath math="A, B" /> に対して、直積集合 <InlineMath math="A \times B" /> の任意の部分集合 <InlineMath math="R \subset A \times B" /> を、<InlineMath math="A" /> から <InlineMath math="B" /> への<strong>2項関係（Binary Relation）</strong>という。
                </p>
                <p className="mt-4">
                    順序対 <InlineMath math="(a, b) \in R" /> であるとき、「<InlineMath math="a" /> は <InlineMath math="b" /> と関係 <InlineMath math="R" /> にある」といい、しばしば
                    <BlockMath math="a \sim_R b \quad \text{または} \quad a R b" />
                    と表記する。
                </p>
                <p className="mt-4">
                    特に <InlineMath math="A = B" /> のとき、<InlineMath math="R \subset A \times A" /> を単に「<InlineMath math="A" /> 上の（2項）関係」と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                「写像」は各入力に対して出力がちょうど1つでしたが、「関係」は1つの元が複数の元と繋がっていても、あるいは誰とも繋がっていなくても構いません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">関係の四公理</h2>

            <p>
                関係をその性質によって分類するために、以下の4つの重要な概念を導入します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-2 (関係の性質)">
                <p>
                    集合 <InlineMath math="A" /> 上の関係 <InlineMath math="R" /> について、以下の性質を定義する。
                </p>
                <ul className="list-disc list-inside space-y-6 mt-4 ml-2">
                    <li>
                        <strong>反射律（Reflexivity）:</strong><br />
                        すべての <InlineMath math="a \in A" /> に対して、<InlineMath math="a R a" /> が成り立つ。
                    </li>
                    <li>
                        <strong>対称律（Symmetry）:</strong><br />
                        任意の <InlineMath math="a, b \in A" /> に対して、<InlineMath math="a R b \implies b R a" /> が成り立つ。
                    </li>
                    <li>
                        <strong>推移律（Transitivity）:</strong><br />
                        任意の <InlineMath math="a, b, c \in A" /> に対して、<InlineMath math="a R b" /> かつ <InlineMath math="b R c \implies a R c" /> が成り立つ。
                    </li>
                    <li>
                        <strong>反対称律（Antisymmetry）:</strong><br />
                        任意の <InlineMath math="a, b \in A" /> に対して、<InlineMath math="a R b" /> かつ <InlineMath math="b R a \implies a = b" /> が成り立つ。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                私たちがよく知る具体的な関係が、どの性質を持っているか整理してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (関係の分類)">
                <ul className="list-disc list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>整数の大小関係 <InlineMath math="\leq" /></strong>：<br />
                        <InlineMath math="a \leq a" />（反射）、<InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq c \implies a \leq c" />（推移）、<InlineMath math="a \leq b" /> かつ <InlineMath math="b \leq a \implies a = b" />（反対称）を満たす。ただし対称律は満たさない。
                    </li>
                    <li>
                        <strong>整除関係 <InlineMath math="a \mid b" /></strong>（<InlineMath math="b" /> が <InlineMath math="a" /> で割り切れる）：<br />
                        自然数の範囲では、反射律・推移律・反対称律を満たす。
                    </li>
                    <li>
                        <strong>整数の合同 <InlineMath math="a \equiv b \pmod{n}" /></strong>：<br />
                        反射律・対称律・推移律を満たす。（これは §3.2 で学ぶ「同値関係」の典型例です）。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="写像への繋がり：関係としての写像">
                <p>
                    これまでの議論から分かるように、写像は「かなり特殊な関係」であると言えます。<br />
                    集合 <InlineMath math="A" /> から <InlineMath math="B" /> への関係 <InlineMath math="f \subset A \times B" /> が、写像（Chapter 2 の定義通り）であるための条件は以下の2点に集約されます：
                </p>
                <ol className="list-decimal list-inside mt-4 ml-4 space-y-2">
                    <li><strong>左全域性：</strong> すべての <InlineMath math="a \in A" /> に対して、ある <InlineMath math="b \in B" /> が存在して <InlineMath math="(a, b) \in f" />。</li>
                    <li><strong>右一意性：</strong> <InlineMath math="(a, b_1) \in f" /> かつ <InlineMath math="(a, b_2) \in f \implies b_1 = b_2" />。</li>
                </ol>
                <p className="mt-4">
                    このように、写像を「特定の条件を満たす直積の部分集合（グラフ）」と同一視することで、数学全体が集合論の言葉だけで記述できるようになります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>2項関係</strong>は、直積集合 <InlineMath math="A \times B" /> の部分集合として定義される。</li>
                    <li>関係の代表的な性質には、<strong>反射律、対称律、推移律、反対称律</strong>がある。</li>
                    <li>写像もまた、特定の条件（全域性と一意性）を満たす特別な関係の一種である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
