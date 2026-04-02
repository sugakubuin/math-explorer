import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HomeomorphismExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                同相という概念によって、見た目が全く異なる空間が「同じ」とみなされることもあれば、似ているようで「決定的に違う」と判定されることもあります。
                具体的な構成を通じて、トポロジーの自由さと厳格さを実感しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">見かけによらない同相の例</h2>

            <p>
                距離や長さ、角度が変わってしまっても、引き伸ばして重ねられるなら同相です。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (開区間と実数直線)">
                <p>
                    有限の長さを持つ開区間 <InlineMath math="(-1, 1)" /> と、無限に続く実数直線 <InlineMath math="\mathbb{R}" /> は同相である。
                </p>
                <div className="mt-4 font-semibold">具体的な同相写像：</div>
                <BlockMath math="f: (-1, 1) \to \mathbb{R}, \quad f(x) = \tan\left(\frac{\pi}{2}x\right)" />
                <p className="mt-2">
                    この写像は連続な全単射であり、その逆写像 <InlineMath math="f^{-1}(y) = \frac{2}{\pi}\arctan(y)" /> も連続である。
                    したがって、位相的な視点では「有限と無限」の区別は本質的ではない。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (円と楕円)">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 内の単位円 <InlineMath math="S^1 = \{ (x, y) \mid x^2 + y^2 = 1 \}" /> と、
                    楕円 <InlineMath math="E = \{ (x, y) \mid \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \}" /> は同相である。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    写像 <InlineMath math="h(x, y) = (ax, by)" /> によって一方を他方へ連続的に引き伸ばせる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同相でない空間の例</h2>

            <p>
                逆に、どのように変形しても重ならない空間が存在します。これらを区別するには、後の節で学ぶ「位相的不変量」が必要になります。
            </p>

            <ContentBox type="example" title="Example 4.2-3 (開区間と閉区間)">
                <p>
                    開区間 <InlineMath math="(0, 1)" /> と閉区間 <InlineMath math="[0, 1]" /> は同相ではない。
                </p>
                <p className="mt-2">
                    直感的には、閉区間には「端点」があり、開区間にはないという違いがあります。
                    厳密な証明には、第7章で学ぶ<strong>コンパクト性</strong>を利用します。
                    <InlineMath math="[0, 1]" /> はコンパクトですが、<InlineMath math="(0, 1)" /> はコンパクトではありません。
                    同相写像はコンパクト性を保存するため、これらは同相になり得ません。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-4 (円と直線)">
                <p>
                    円 <InlineMath math="S^1" /> と直線 <InlineMath math="\mathbb{R}" /> は同相ではない。
                </p>
                <p className="mt-2">
                    第8章で学ぶ<strong>連結性</strong>を用いた面白い判定法があります。
                    直線から1点を取り除くと、残りは2つのバラバラな部分（非連結）になりますが、
                    円から1点を取り除いても、依然として1つのつながった紐（連結）のままです。
                    このような「一点を除去した際の性質の変化」は同相写像で保たれるべき性質（不変量）であるため、これらは別物です。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="トポロジーの柔軟な視点">
                <p>
                    よく「トポロジーではドーナツとコーヒーカップを区別しない」と言われます。
                    これは、一方が陶器で他方がパンであっても、穴が1つ開いているという構造さえ同じなら、
                    連続的な変形（粘土細工のようなイメージ）で互いに移り変われるため、同相な空間とみなせることを意味しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>開区間と実数直線のように、有界性が異なっても同相であり得る。</li>
                    <li>同相であることを示すには、具体的な同相写像（関数の式など）を1つ提示すればよい。</li>
                    <li>同相でないことを示すには、コンパクト性や連結性といった「トポロジーの性質」の違いを指摘する必要がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
