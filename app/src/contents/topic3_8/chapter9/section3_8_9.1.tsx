import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FixedPointSet() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 8 では、群の作用において「ある要素がどこへ動くか（軌道）」や「ある要素を動かさない群の要素は何か（固定部分群）」について考察しました。本章では視点を少し変えて、「群のある特定の要素」に着目し、その要素が「どの要素を動かさないままにするか」を考えます。この概念は、対称性を利用した高度な数え上げ問題（塗り分け問題など）を解くための強力な定理「バーンサイドの補題」の基礎となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不動点集合の定義</h2>

            <p>
                群の特定の要素 <InlineMath math="g \in G" /> によって動かされないような集合 <InlineMath math="X" /> の要素たちを集めたものを、<InlineMath math="g" /> に関する<b>不動点集合（Fixed-point set）</b>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 (不動点集合)">
                <p>
                    群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとする。<InlineMath math="g \in G" /> に対して、<InlineMath math="g" /> の作用によって変化しない <InlineMath math="X" /> の要素全体の集合を <InlineMath math="X^g" /> と書き、<InlineMath math="g" /> の<b>不動点集合</b>と呼ぶ。
                </p>
                <BlockMath math="X^g = \{x \in X \mid g \cdot x = x\}" />
            </ContentBox>

            <ContentBox type="remark" title="固定部分群と不動点集合の違い">
                <p>
                    固定部分群 <InlineMath math="G_x" /> と不動点集合 <InlineMath math="X^g" /> は記号が似ていますが、全く異なる空間の部分集合であることに注意してください。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="G_x \subset G" /> ：<b>要素 <InlineMath math="x \in X" /> を主役</b>とし、それを動かさない<b>群の要素</b>を集めたもの。</li>
                    <li><InlineMath math="X^g \subset X" /> ：<b>群の要素 <InlineMath math="g \in G" /> を主役</b>とし、それが動かさない<b>集合の要素</b>を集めたもの。</li>
                </ul>
            </ContentBox>

            <p>
                この不動点集合の大きさ（要素数）について、いくつかの基本的な性質が成り立ちます。特に、共役な関係にある群の要素は、同じ数だけ不動点を持つという性質は重要です。
            </p>

            <ContentBox type="proposition" title="Proposition 9.1-1 (不動点集合の基本性質)">
                <p>
                    有限群 <InlineMath math="G" /> の有限集合 <InlineMath math="X" /> への作用において、以下の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="|X^e| = |X|" /> （単位元はすべての要素を固定する）</li>
                    <li><InlineMath math="|X^g| = |X^{g^{-1}}|" /> （ある要素とその逆元は同じ要素を固定する）</li>
                    <li><InlineMath math="g, h \in G" /> に対して、<InlineMath math="|X^{hgh^{-1}}| = |X^g|" /> が成り立つ。<br />すなわち、<b>互いに共役な群の要素は、同じ大きさの不動点集合を持つ。</b></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    性質 1 と 2 は定義から明らかである。性質 3（共役な元の不動点集合の大きさが等しいこと）を示す。
                </p>
                <p>
                    写像 <InlineMath math="f : X^g \to X^{hgh^{-1}}" /> を <InlineMath math="f(x) = h \cdot x" /> で定義する。これが全単射であることを示せばよい。
                </p>
                <p>
                    まず、<InlineMath math="x \in X^g" />（すなわち <InlineMath math="g \cdot x = x" />）のとき、<InlineMath math="h \cdot x" /> が本当に <InlineMath math="X^{hgh^{-1}}" /> に属するか（well-defined性）を確認する。<InlineMath math="hgh^{-1}" /> を <InlineMath math="h \cdot x" /> に作用させると、
                </p>
                <BlockMath math="\begin{aligned} (hgh^{-1}) \cdot (h \cdot x) &= h \cdot (g \cdot (h^{-1} \cdot (h \cdot x))) \\ &= h \cdot (g \cdot x) = h \cdot x \end{aligned}" />
                <p>
                    となるため、確かに <InlineMath math="h \cdot x \in X^{hgh^{-1}}" /> である。
                </p>
                <p>
                    次に、<InlineMath math="h \in G" /> は群の要素であるから、作用 <InlineMath math="x \mapsto h \cdot x" /> は可逆（逆写像は <InlineMath math="x \mapsto h^{-1} \cdot x" />）であり全単射である。その制限である <InlineMath math="f" /> も全単射となる。
                </p>
                <p>
                    したがって、集合としての要素数は等しくなり、<InlineMath math="|X^{hgh^{-1}}| = |X^g|" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不動点集合の計算例</h2>

            <p>
                実際に幾何学的な作用を考え、群の各要素がどれくらいの不動点を持つのかを数えてみましょう。
            </p>

            <ContentBox type="example" title="Example 9.1-1 (正方形への回転作用と不動点集合)">
                <p>
                    二面体群 <InlineMath math="D_4" /> の部分群である巡回群 <InlineMath math="G = \langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}" />（<InlineMath math="r" /> は 90 度回転）が、正方形の頂点集合 <InlineMath math="X = \{1, 2, 3, 4\}" /> に作用している状況を考える。
                </p>
                <p>
                    各要素の不動点集合 <InlineMath math="X^g" /> の大きさ <InlineMath math="|X^g|" /> を調べる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="g = e" />（0 度回転）：すべての頂点は動かないので、<InlineMath math="X^e = \{1, 2, 3, 4\}" /> であり <InlineMath math="|X^e| = 4" />。</li>
                    <li><InlineMath math="g = r" />（90 度回転）：すべての頂点は隣の頂点へ移動するため、固定される頂点はない。<InlineMath math="X^r = \emptyset" /> であり <InlineMath math="|X^r| = 0" />。</li>
                    <li><InlineMath math="g = r^2" />（180 度回転）：頂点は対角線上の反対側へ移動するため、固定される頂点はない。<InlineMath math="X^{r^2} = \emptyset" /> であり <InlineMath math="|X^{r^2}| = 0" />。</li>
                    <li><InlineMath math="g = r^3" />（270 度回転）：90 度回転と同様に固定される頂点はない。<InlineMath math="X^{r^3} = \emptyset" /> であり <InlineMath math="|X^{r^3}| = 0" />。</li>
                </ul>
                <p>
                    このように、頂点のような単純な集合に対する回転作用では、単位元以外に不動点を持つ要素は存在しません。
                </p>
            </ContentBox>

            <p>
                しかし、作用に「反射（裏返し）」が含まれてくると状況が変わります。
            </p>

            <ContentBox type="example" title="Example 9.1-2 (正方形への反射を含む作用の不動点集合)">
                <p>
                    同じく正方形の頂点集合 <InlineMath math="X = \{1, 2, 3, 4\}" /> に対して、今度は二面体群全体 <InlineMath math="G = D_4" /> が作用する場合を考える。<InlineMath math="D_4" /> の 8 つの要素すべてについて <InlineMath math="|X^g|" /> を数える。
                </p>
                <p>
                    回転 <InlineMath math="e, r, r^2, r^3" /> の不動点数は先ほど計算した通り 4, 0, 0, 0 である。<br />
                    反射（裏返し）について考える。<InlineMath math="D_4" /> には 4 種類の反射の軸がある。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>向かい合う辺の中点を結ぶ軸（2本）：</b> 例えば頂点 1 と 2 の間を通る軸で折り返すと、1 と 2 が入れ替わり、3 と 4 が入れ替わる。固定される頂点はないので不動点数は 0。</li>
                    <li><b>対角線を通る軸（2本）：</b> 例えば頂点 1 と 3 を通る対角線で折り返すと、2 と 4 は入れ替わるが、1 と 3 は軸の上にあるため動かない。したがって、これらの反射の不動点数はそれぞれ 2 である。</li>
                </ul>
                <p>
                    これを表にまとめると以下のようになる。
                </p>
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-700">
                                <th className="py-2 px-4 border-b text-left">要素 <InlineMath math="g" /></th>
                                <th className="py-2 px-4 border-b text-center"><InlineMath math="|X^g|" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b"><InlineMath math="e" /></td>
                                <td className="py-2 px-4 border-b text-center">4</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b"><InlineMath math="r, r^3" /></td>
                                <td className="py-2 px-4 border-b text-center">0</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b"><InlineMath math="r^2" /></td>
                                <td className="py-2 px-4 border-b text-center">0</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">辺の中点軸の反射(2つ)</td>
                                <td className="py-2 px-4 border-b text-center">0</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">対角線軸の反射(2つ)</td>
                                <td className="py-2 px-4 border-b text-center">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群の要素 <InlineMath math="g" /> を固定したとき、<InlineMath math="g" /> によって動かされない <InlineMath math="X" /> の要素全体を不動点集合 <InlineMath math="X^g" /> という。</li>
                    <li>固定部分群 <InlineMath math="G_x" /> は群 <InlineMath math="G" /> の部分集合（部分群）であるが、不動点集合 <InlineMath math="X^g" /> は作用を受ける空間 <InlineMath math="X" /> の部分集合である。</li>
                    <li>互いに共役な群の要素は、同じ大きさの不動点集合を持つ（<InlineMath math="|X^{hgh^{-1}}| = |X^g|" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}