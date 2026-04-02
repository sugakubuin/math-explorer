import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BurnsidesLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入した不動点集合の大きさを利用すると、「ある集合を群の作用で分類したときに、いくつの本質的に異なるグループ（軌道）ができるか」を計算することができます。これが<b>バーンサイドの補題（Burnside's Lemma）</b>、またはコーシー・フロベニウスの補題と呼ばれる定理です。この定理は、対称性を考慮した数え上げ問題において非常に強力な道具となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">バーンサイドの補題の証明</h2>

            <p>
                バーンサイドの補題は、軌道の総数が「各群要素の不動点集合の大きさの平均」に等しいという、非常に美しい関係式を主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (バーンサイドの補題)">
                <p>
                    有限群 <InlineMath math="G" /> が有限集合 <InlineMath math="X" /> に作用しているとする。この作用による <InlineMath math="X" /> の軌道の総数（個数）を <InlineMath math="k" /> とすると、次が成り立つ。
                </p>
                <BlockMath math="k = \frac{1}{|G|} \sum_{g \in G} |X^g|" />
                <p>
                    すなわち、軌道の個数は各元 <InlineMath math="g" /> が固定する要素の数 <InlineMath math="|X^g|" /> の平均値に等しい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    集合 <InlineMath math="S = \{(g, x) \in G \times X \mid g \cdot x = x\}" /> の要素数を 2 つの異なる方法で数え上げる。
                </p>
                <p>
                    <b>方法 1：群の要素 <InlineMath math="g" /> を先に固定して数える</b><br />
                    ある <InlineMath math="g \in G" /> を固定したとき、<InlineMath math="g \cdot x = x" /> を満たす <InlineMath math="x" /> の個数は、定義により <InlineMath math="|X^g|" /> である。したがって、全ペアの数は
                </p>
                <BlockMath math="|S| = \sum_{g \in G} |X^g|" />
                <p>
                    となる。
                </p>
                <p>
                    <b>方法 2：集合の要素 <InlineMath math="x" /> を先に固定して数える</b><br />
                    ある <InlineMath math="x \in X" /> を固定したとき、<InlineMath math="g \cdot x = x" /> を満たす <InlineMath math="g" /> の個数は、固定部分群 <InlineMath math="G_x" /> の要素数 <InlineMath math="|G_x|" /> である。したがって、
                </p>
                <BlockMath math="|S| = \sum_{x \in X} |G_x|" />
                <p>
                    となる。ここで、Chapter 8 で証明した軌道・固定群定理より <InlineMath math="|G_x| = \frac{|G|}{|G \cdot x|}" /> であることを用いて代入すると、
                </p>
                <BlockMath math="|S| = \sum_{x \in X} \frac{|G|}{|G \cdot x|} = |G| \sum_{x \in X} \frac{1}{|G \cdot x|}" />
                <p>
                    となる。<InlineMath math="X" /> を互いに素な軌道 <InlineMath math="\mathcal{O}_1, \mathcal{O}_2, \ldots, \mathcal{O}_k" /> に分割（軌道分解）し、和を軌道ごとに整理する。
                </p>
                <BlockMath math="\sum_{x \in X} \frac{1}{|G \cdot x|} = \sum_{i=1}^k \left( \sum_{x \in \mathcal{O}_i} \frac{1}{|\mathcal{O}_i|} \right)" />
                <p>
                    軌道 <InlineMath math="\mathcal{O}_i" /> にはちょうど <InlineMath math="|\mathcal{O}_i|" /> 個の要素が含まれているため、内側の和は <InlineMath math="|\mathcal{O}_i| \times \frac{1}{|\mathcal{O}_i|} = 1" /> となる。したがって、
                </p>
                <BlockMath math="\sum_{i=1}^k 1 = k" />
                <p>
                    となり、<InlineMath math="|S| = |G| \cdot k" /> を得る。
                </p>
                <p>
                    2 つの方法で数えた <InlineMath math="|S|" /> を等置して、
                </p>
                <BlockMath math="k \cdot |G| = \sum_{g \in G} |X^g| \implies k = \frac{1}{|G|} \sum_{g \in G} |X^g|" />
                <p>
                    が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、「<InlineMath math="g \cdot x = x" />」という条件を、<InlineMath math="g" /> の視点（不動点集合）と <InlineMath math="x" /> の視点（固定部分群）の両方から二重に数え上げる（Double Counting）ことによって証明されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な数え上げへの応用</h2>

            <p>
                バーンサイドの補題を使って、対称性を考慮した塗り分け問題（彩色問題）を解いてみましょう。「回転して同じになるものは同じ塗り方とみなす」という条件は、まさに「軌道を1つのパターンとして数える」ことに対応します。
            </p>

            <ContentBox type="example" title="Example 9.2-1 (正方形頂点の 2 彩色：回転のみを同一視)">
                <p>
                    正方形の 4 つの頂点を白か黒の 2 色で塗る方法を考える。ただし、<b>回転して一致する塗り方は同じもの</b>とみなす。
                </p>
                <p>
                    作用を受ける集合 <InlineMath math="X" /> は、「頂点の色の塗り方すべて」である。頂点が 4 つで色が 2 色なので、要素の総数は <InlineMath math="|X| = 2^4 = 16" /> 個である。<br />
                    作用する群 <InlineMath math="G" /> は、回転のみからなる巡回群 <InlineMath math="\langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}" />（位数 4）である。
                </p>
                <p>
                    各要素の不動点集合の大きさ <InlineMath math="|X^g|" /> を計算する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="g = e" />（0 度回転）：すべての塗り方 16 通りが固定される。<InlineMath math="|X^e| = 16" />。</li>
                    <li><InlineMath math="g = r, r^3" />（90, 270 度回転）：90 度回して同じ塗り方になるためには、すべての頂点が同じ色でなければならない。したがって「すべて白」か「すべて黒」の 2 通りのみ。<InlineMath math="|X^r| = |X^{r^3}| = 2" />。</li>
                    <li><InlineMath math="g = r^2" />（180 度回転）：180 度回して同じ塗り方になるためには、対角線上の頂点が同じ色でなければならない。対角線のペアは 2 組あり、それぞれ白か黒を選べるので <InlineMath math="2 \times 2 = 4" /> 通り。<InlineMath math="|X^{r^2}| = 4" />。</li>
                </ul>
                <p>
                    バーンサイドの補題より、本質的に異なる塗り方の数（軌道の数）<InlineMath math="k" /> は、
                </p>
                <BlockMath math="k = \frac{1}{4} (16 + 2 + 4 + 2) = \frac{24}{4} = 6" />
                <p>
                    となり、6 通りであることがわかる。
                </p>
            </ContentBox>

            <p>
                次に、条件に「裏返し（反射）」も加えてみましょう。群の位数が大きくなり、要素が増えます。
            </p>

            <ContentBox type="example" title="Example 9.2-2 (正方形頂点の 2 彩色：回転＋反射を同一視)">
                <p>
                    同じ正方形の頂点の 2 彩色において、今度は<b>回転または裏返しによって一致する塗り方は同じもの</b>とみなす。作用する群は二面体群 <InlineMath math="G = D_4" />（位数 8）となる。
                </p>
                <p>
                    回転の要素（4個）の不動点数は Example 9.2-1 で求めた通りである。<br />
                    反射の要素（4個）について <InlineMath math="|X^g|" /> を計算する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>向かい合う辺の中点を結ぶ軸（2本）：</b> 軸で折り返したときに同じ色になるためには、軸に対称な 2 つの頂点が同色でなければならない。対称なペアが 2 組あるため、色の選び方は <InlineMath math="2^2 = 4" /> 通り。これが 2 本の軸それぞれについてあるので、<InlineMath math="|X^g| = 4" />（2つ）。</li>
                    <li><b>対角線を通る軸（2本）：</b> 軸上の 2 頂点は動かないのでそれぞれ自由に色を選べる（<InlineMath math="2 \times 2 = 4" /> 通り）。残りの 2 頂点は対称な位置にあるため同じ色でなければならない（2 通り）。全体で <InlineMath math="4 \times 2 = 8" /> 通り。これが 2 本の軸それぞれについてあるので、<InlineMath math="|X^g| = 8" />（2つ）。</li>
                </ul>
                <p>
                    バーンサイドの補題より、軌道の数 <InlineMath math="k" /> は、
                </p>
                <BlockMath math="k = \frac{1}{8} (16 + 2 + 4 + 2 + 4 + 4 + 8 + 8) = \frac{48}{8} = 6" />
                <p>
                    結果として、裏返しを許しても本質的に異なる塗り方の数は 6 通りのままであることがわかる（正方形の 2 彩色においては、回転だけで一致するものは裏返しでも結局一致するため、軌道数が減らない）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="直感的な数え上げとの比較">
                <p>
                    もし正方形の頂点の 2 彩色を「白の数」で分類して手作業で数え上げると、白が 0 個（1通り）、白が 1 個（1通り）、白が 2 個（隣り合うか対角線かの 2 通り）、白が 3 個（1通り）、白が 4 個（1通り）となり、合計 <InlineMath math="1 + 1 + 2 + 1 + 1 = 6" /> 通りであることがすぐにわかります。しかし、対象が立方体や正十二面体など複雑になると、手作業での分類は極めて困難になります。そのような場合にこそ、バーンサイドの補題が真価を発揮します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>バーンサイドの補題：</b> 軌道の総数は、各群要素の不動点集合の大きさの平均に等しい。<InlineMath math="k = \frac{1}{|G|} \sum_{g \in G} |X^g|" /></li>
                    <li>証明の鍵は、方程式 <InlineMath math="g \cdot x = x" /> を満たす <InlineMath math="(g, x)" /> のペアを 2 つの異なる方法で数え上げること（Double Counting）である。</li>
                    <li>「回転して同じになるものは同一視する」という数え上げ問題は、「軌道の個数を求める」ことに帰着され、この定理を用いて機械的に計算できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}