import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BrachistochroneAndGeodesics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                オイラー＝ラグランジュ方程式は、物理学や幾何学における数多くの古典的な問題を解くための強力な鍵となります。
                本節では、変分法の歴史を語る上で欠かせない「最速降下線問題」と、曲面上の最短経路である「測地線」について、具体的に E-L 方程式を適用して解いていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最速降下線（ブラキストクロン問題）</h2>

            <p className="leading-relaxed">
                重力下で、ある点から別の点へ最も早く到達する曲線を求める問題です。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (問題の設定：最速降下線)">
                <p>
                    原点 <InlineMath math="(0, 0)" /> から点 <InlineMath math="(a, b) \ (b < 0)" /> へ重力下で滑らかに滑り落ちる曲線を考える。
                    下向きを正（<InlineMath math="y" /> 軸の正方向）とすると、エネルギー保存則より速さは <InlineMath math="v = \sqrt{2gy}" /> である。
                    微小時間 <InlineMath math="dt = ds/v" /> を積分すると、全所要時間 <InlineMath math="T" /> は次の汎関数で表される：
                    <BlockMath math="T[y] = \int_0^a \frac{\sqrt{1 + (y')^2}}{\sqrt{2gy}} \, dx" />
                    この汎関数を最小にする関数 <InlineMath math="y(x)" /> を求めることが目的である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-2 (最速降下線の解：サイクロイド)">
                <p>
                    ラグランジアンが <InlineMath math="x" /> を陽に含まない（<InlineMath math="F_x = 0" />）場合、エネルギー積分と呼ばれる保存則
                    <BlockMath math="F - y' F_{y'} = C \ (\text{定数})" />
                    が成り立つ。<InlineMath math="F = \sqrt{\frac{1+(y')^2}{y}}" /> に対して計算すると：
                    <BlockMath math="y (1 + (y')^2) = \frac{1}{C^2} = 2R \ (\text{定数})" />
                    この微分方程式を解くと、媒介変数 <InlineMath math="\theta" /> を用いて次のように表される：
                    <BlockMath math="\begin{cases} x = R(\theta - \sin \theta) \\ y = R(1 - \cos \theta) \end{cases}" />
                    これは、円が平らな面上を転がるときに円周上の 1 点が描く軌跡<b>サイクロイド</b>（Cycloid）である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ベルヌーイ兄弟の歴史的背景">
                <p>
                    最速降下線問題は、1696 年にヨハン・ベルヌーイによって提示されました。
                    ニュートン、ライプニッツ、ヤコブ・ベルヌーイらが解を提出し、それらが一致したことで解析学と変分法の大きな発展のきっかけとなりました。
                    当時の論争が、現代の数学の基礎を築いたと言えます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測地線</h2>

            <p className="leading-relaxed">
                曲面上の「最短経路」を一般に<b>測地線</b>（Geodesic）と呼びます。
            </p>

            <ContentBox type="example" title="Example 2.2-3 (平面の測地線)">
                <p>
                    平面 <InlineMath math="\mathbb{R}^2" /> 上の弧長汎関数の E-L 方程式は、§2.1 で見た通り <InlineMath math="y'' = 0" /> であった。
                    その解は直線であり、平面内での測地線が直線であることを意味する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.2-4 (球面の測地線)">
                <p>
                    半径 <InlineMath math="R" /> の球面上での弧長を最小化することを考える。
                    極座標 <InlineMath math="(\theta, \phi)" /> を用いて測地線（最短経路）の E-L 方程式を解くと、
                    球の中心を通る平面によって球面が切られたときの円である<b>大円</b>（Great Circle）が得られる。
                    地球上の遠隔地へ最短で飛ぶための「大圏航路」がこれに該当する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最速降下線も測地線も、自然が「最小化の原理」に従っていることを示す美しい例です。
                次節では、汎関数がさらに高階の導関数（<InlineMath math="u''" /> など）を含む場合への拡張について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>最速降下線問題の解はサイクロイドであり、重力下で最も早く移動できる曲線である。</li>
                    <li>ラグランジアンが独立変数 <InlineMath math="x" /> を陽に含まない場合、第一積分（保存則）を利用して簡潔に解ける。</li>
                    <li>測地線とは、曲面上の最短経路であり、平面上では直線、球面上では大円となる。</li>
                    <li>これらの問題は歴史的に変分法の原点となり、物理学的な変分原理の確立に寄与した。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
