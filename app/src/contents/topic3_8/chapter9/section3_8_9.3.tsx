import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EnumerationApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で証明したバーンサイドの補題を利用して、離散数学でよく登場する「ネックレス問題」や、三次元の立体に対する彩色問題など、より具体的な数え上げ問題への応用手法を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ネックレスの数え上げ</h2>

            <p>
                円状に並んだビーズに色を塗る問題を考えます。ネックレスは回転させたり、裏返したりして同じになるものは同じネックレスとみなします。これはまさに二面体群 <InlineMath math="D_n" /> の作用による軌道を数える問題です。
            </p>

            <ContentBox type="example" title="Example 9.3-1 (3 色・4 ビーズのネックレス)">
                <p>
                    3 種類の色のビーズを使って、4 個のビーズからなるネックレスを作ります。回転と裏返しで一致するものは同じとみなすとき、作れるネックレスの種類は何通りでしょうか。
                </p>
                <p>
                    作用する群は二面体群 <InlineMath math="D_4" />（位数 8）であり、作用を受ける集合 <InlineMath math="X" /> は 4 つのビーズに 3 色を塗るすべての方法（<InlineMath math="|X| = 3^4 = 81" /> 通り）です。各要素 <InlineMath math="g \in D_4" /> の不動点数 <InlineMath math="|X^g|" /> を計算します。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="e" /> (0度回転)：4つの頂点は独立に選べる。<InlineMath math="|X^e| = 3^4 = 81" />。</li>
                    <li><InlineMath math="r, r^3" /> (90, 270度回転)：全体が1つのサイクルをなすため、1色のみ。<InlineMath math="|X^r| = |X^{r^3}| = 3^1 = 3" />。</li>
                    <li><InlineMath math="r^2" /> (180度回転)：対角のペアが2組。各組に色を選べる。<InlineMath math="|X^{r^2}| = 3^2 = 9" />。</li>
                    <li>辺の中点を通る反射 (2本)：2つのペアが入れ替わる。各ペアに色を選べる。<InlineMath math="|X^g| = 3^2 = 9" />。</li>
                    <li>対角線を通る反射 (2本)：対角線上の2点は固定（2か所）、残りの2点がペア（1組）。計3つの独立した選択がある。<InlineMath math="|X^g| = 3^3 = 27" />。</li>
                </ul>
                <p>
                    これらをバーンサイドの補題の公式に代入すると、
                </p>
                <BlockMath math="\begin{aligned} k &= \frac{1}{8} (81 + 3 + 3 + 9 + 9 \times 2 + 27 \times 2) \\ &= \frac{81 + 6 + 9 + 18 + 54}{8} = \frac{168}{8} = 21 \text{ 種類} \end{aligned}" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.3-2 (2 色・6 ビーズのネックレス)">
                <p>
                    2 色のビーズを使って、6 個のビーズからなるネックレスを作ります。回転と裏返しで一致するものは同じとみなします。
                </p>
                <p>
                    作用する群は二面体群 <InlineMath math="D_6" />（位数 12）であり、要素の総数は <InlineMath math="|X| = 2^6 = 64" /> 通りです。<InlineMath math="D_6" /> の要素は 6 つの回転と 6 つの反射からなります。各 <InlineMath math="g" /> が <InlineMath math="X" /> をいくつ固定するか（すなわち独立して色を決められるサイクルの数 <InlineMath math="c(g)" /> を用いて <InlineMath math="2^{c(g)}" />）を求めます。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="e" />（0度回転）：<InlineMath math="2^6 = 64" />（1個）</li>
                    <li><InlineMath math="r, r^5" />（60, 300度回転）：全体で1サイクルなので <InlineMath math="2^1 = 2" />（2個）</li>
                    <li><InlineMath math="r^2, r^4" />（120, 240度回転）：長さ3のサイクルが2つなので <InlineMath math="2^2 = 4" />（2個）</li>
                    <li><InlineMath math="r^3" />（180度回転）：長さ2のサイクルが3つなので <InlineMath math="2^3 = 8" />（1個）</li>
                    <li>対角線を通る反射：軸上に2点、残り4点が2ペア。独立な選択は <InlineMath math="2 + 2 = 4" /> 個。<InlineMath math="2^4 = 16" />（3個）</li>
                    <li>向かい合う辺の中点を通る反射：すべて2点ずつの3ペア。独立な選択は 3 個。<InlineMath math="2^3 = 8" />（3個）</li>
                </ul>
                <p>
                    バーンサイドの補題より、
                </p>
                <BlockMath math="\begin{aligned} k &= \frac{1}{12} (64 \times 1 + 2 \times 2 + 4 \times 2 + 8 \times 1 + 16 \times 3 + 8 \times 3) \\ &= \frac{64 + 4 + 8 + 8 + 48 + 24}{12} = \frac{156}{12} = 13 \text{ 種類} \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">立体の彩色と発展</h2>

            <p>
                バーンサイドの補題は、平面図形だけでなく立体図形の彩色にも応用できます。三次元の回転を群の元として捉えます。
            </p>

            <ContentBox type="example" title="Example 9.3-3 (正四面体の面の 3 彩色)">
                <p>
                    正四面体の 4 つの面を 3 種類の色で塗る方法を考えます。空間内で回転させて一致する塗り方は同じものとみなします。
                </p>
                <p>
                    正四面体の回転群は、交代群 <InlineMath math="A_4" />（位数 12）と同型です。面に対する作用を考えます。各共役類ごとに不動点数 <InlineMath math="|X^g| = 3^{c(g)}" /> を計算します。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>恒等変換（1 個）：</b> <InlineMath math="e" />。4 つの面は独立。<InlineMath math="c(e) = 4" /> より <InlineMath math="|X^e| = 3^4 = 81" />。</li>
                    <li><b>頂点と対面の中心を通る軸周りの 120 度・240 度回転（8 個）：</b> 1 つの面（底面）は固定され、残りの 3 つの面は巡回します。独立な面は底面と側面グループの 2 つ。 <InlineMath math="c(g) = 2" /> より <InlineMath math="|X^g| = 3^2 = 9" />。</li>
                    <li><b>ねじれの位置にある辺の中点を結ぶ軸周りの 180 度回転（3 個）：</b> 4 つの面が 2 つのペアになって入れ替わります。独立な選択は 2 つ。 <InlineMath math="c(g) = 2" /> より <InlineMath math="|X^g| = 3^2 = 9" />。</li>
                </ul>
                <p>
                    バーンサイドの補題より、
                </p>
                <BlockMath math="\begin{aligned} k &= \frac{1}{12} (81 \times 1 + 9 \times 8 + 9 \times 3) \\ &= \frac{81 + 72 + 27}{12} = \frac{180}{12} = 15 \text{ 種類} \end{aligned}" />
                <p>
                    となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ポリャの数え上げ定理への発展">
                <p>
                    バーンサイドの補題は「全体の塗り方が何通りあるか」を求めるには非常に強力ですが、「赤が 2 面、青が 1 面、緑が 1 面の塗り方は何通りか？」といった「色ごとの個数（重み）」を指定した数え上げには直接使えません。
                </p>
                <p>
                    この制約を突破し、色ごとに変数を用意した「サイクル指標（Cycle Index）」という多項式を用いて、すべての配色のパターンを母関数の形で一挙に導き出すのが<b>ポリャの数え上げ定理（Pólya Enumeration Theorem）</b>です。ポリャの定理はバーンサイドの補題の自然な拡張であり、組合せ論においてさらに高度な数え上げを行うための究極のツールとなります。詳細は「A-2 組合せ論」のトピックで学びます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ネックレスや多角形の彩色問題は、二面体群 <InlineMath math="D_n" /> の作用による軌道の数を求める問題として定式化できる。</li>
                    <li>立体の彩色問題は、その立体の回転群（対称群や交代群の部分群など）の作用として捉えられる。</li>
                    <li>各群の要素が対象を「いくつの独立したサイクル（軌道）に分解するか」を見極めることで、不動点の数（<InlineMath math="(\text{色数})^{\text{サイクル数}}" />）を簡単に計算できる。</li>
                    <li>色ごとの詳細な数え上げを行う場合には、バーンサイドの補題を一般化した「ポリャの数え上げ定理」が用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}