import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CirculationAndFlux() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                積分の具体的な計算方法を学んだところで、これまでの結果を物理的・直感的に統合しましょう。
                「循環」と「フラックス」は、ベクトル解析における大域的な特徴量を表す最も重要な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">循環 (Circulation)</h2>

            <p>
                閉じた経路に沿ってベクトル場を一周積分した量を「循環」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (循環)">
                <p>
                    閉曲線 <InlineMath math="C" /> に沿ったベクトル場 <InlineMath math="\mathbf{F}" /> の線積分を<strong>循環 (circulation)</strong> と呼び、通常記号 <InlineMath math="\Gamma" /> で表す。
                    <BlockMath math="\Gamma = \oint_C \mathbf{F} \cdot d\mathbf{r}" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="渦との関係">
                <p>
                    循環は、その経路の内部にどれだけの「渦の成分」が含まれているかを表します。
                    第1章で学んだ<strong>回転 (rot)</strong> は、この循環の「局所的な密度」に相当します。
                    これは第7章で学ぶ「ストークスの定理」により数学的に結びつけられます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-1 (循環の計算)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F} = (-y, x, 0)" /> の、単位円 <InlineMath math="C: \mathbf{r}(t) = (\cos t, \sin t, 0) \; (0 \le t \le 2\pi)" /> に沿った循環を求めます。
                    <BlockMath math="\begin{aligned} \Gamma = \oint_C \mathbf{F} \cdot d\mathbf{r} &= \int_0^{2\pi} (-\sin t, \cos t, 0) \cdot (-\sin t, \cos t, 0)\, dt \\ &= \int_0^{2\pi} (\sin^2 t + \cos^2 t)\, dt = \int_0^{2\pi} 1\, dt = 2\pi \end{aligned}" />
                    このベクトル場の回転は <InlineMath math="\text{rot}\, \mathbf{F} = (0, 0, 2)" /> であり、一定の渦が存在することを反映しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フラックス (Flux / 流束)</h2>

            <p>
                面を通り抜けるベクトルの総量を「フラックス」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (フラックス)">
                <p>
                    曲面 <InlineMath math="S" /> を貫くベクトル場 <InlineMath math="\mathbf{F}" /> の面積分を<strong>フラックス (flux / 流束)</strong> と呼ぶ。
                    <BlockMath math="\Phi = \iint_S \mathbf{F} \cdot d\mathbf{S}" />
                    特に <InlineMath math="S" /> が閉曲面（領域の境界）である場合、積分記号に丸をつけて <InlineMath math="\oiint_S" /> と書くことがある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="湧き出しとの関係">
                <p>
                    閉曲面を貫く正味のフラックスは、その内部にどれだけの「湧き出しの源」があるかを表します。
                    第1章で学んだ<strong>発散 (div)</strong> は、このフラックスの「局所的な密度」に相当します。
                    これは第6章で学ぶ「ガウスの発散定理」により数学的に結びつけられます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (フラックスの計算)">
                <p>
                    一様な流れ <InlineMath math="\mathbf{F} = (0, 0, v_0)" /> の、 <InlineMath math="xy" /> 平面上の半径 <InlineMath math="R" /> の円板 <InlineMath math="S" /> を通るフラックスを求めます。
                    上向きの法線 <InlineMath math="\hat{\mathbf{n}} = (0, 0, 1)" /> を正の向きとします。
                    <BlockMath math="\begin{aligned} \Phi &= \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S (0, 0, v_0) \cdot (0, 0, 1)\, dS \\ &= \iint_S v_0\, dS = v_0 (\pi R^2) \end{aligned}" />
                    これは「流速 <InlineMath math="\times" /> 断面積」という、流量の直感的な定義と一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">概念の対応関係</h2>

            <p>
                局所的な微分量（密度の概念）と、大域的な積分量（総量の概念）の対応をまとめると以下のようになります。
            </p>

            <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-slate-200 dark:border-slate-700">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th className="border border-slate-200 dark:border-slate-700 p-2">抽象的概念</th>
                            <th className="border border-slate-200 dark:border-slate-700 p-2">局所的（微分演算子）</th>
                            <th className="border border-slate-200 dark:border-slate-700 p-2">大域的（積分量）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 font-bold text-center">湧き出し</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 text-center">発散 (div)</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 text-center">フラックス (flux)</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 font-bold text-center">渦</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 text-center">回転 (rot)</td>
                            <td className="border border-slate-200 dark:border-slate-700 p-2 text-center">循環 (circulation)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>循環</strong>：閉曲線に沿った線積分。内部の回転成分を集計したもの。</li>
                    <li><strong>フラックス</strong>：面を貫く垂直成分の面積分。通過量を表す。</li>
                    <li><strong>展望</strong>：積分計算自体は微積分の知識で行えますが、それらが微分演算子（div, rot）とどう繋がるかが「ベクトル解析」のクライマックスとなります。次章以降の積分定理へと続きます。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
