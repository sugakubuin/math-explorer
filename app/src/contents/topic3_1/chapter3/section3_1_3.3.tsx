import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VolumeIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「体積積分」は、3次元領域全体にわたって場を累積する操作です。
                物体の全質量、全電荷、あるいは領域内のエネルギー総量を求める際など、3次元的な広がりを持つ量を扱うための基本ツールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">体積積分の定義</h2>

            <p>
                スカラー場を3次元領域 <InlineMath math="V" /> 全体で積分する操作を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (体積積分)">
                <p>
                    3次元領域 <InlineMath math="V" /> 上で定義されたスカラー場 <InlineMath math="f(x, y, z)" /> に対して、<strong>体積積分 (volume integral)</strong> を次のように表す：
                    <BlockMath math="\iiint_V f(x, y, z)\, dV" />
                    ここで <InlineMath math="dV = dx\,dy\,dz" /> は直交座標系における<strong>体積要素</strong>である。
                </p>
            </ContentBox>

            <p>
                体積積分の最も基本的な応用は、物体の物理的な量を求めることです。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (質量と体積)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>体積</strong>： <InlineMath math="f = 1" /> のとき、積分値は領域 <InlineMath math="V" /> の体積を与えます。
                        <BlockMath math="\text{Volume}(V) = \iiint_V dV" />
                    </li>
                    <li>
                        <strong>全質量</strong>：質量密度 <InlineMath math="\rho(x, y, z)" /> を積分すると、全質量が得られます。
                        <BlockMath math="M = \iiint_V \rho\, dV" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲線座標系での体積積分</h2>

            <p>
                積分領域が円柱状や球状である場合、円柱座標や球座標を用いることで計算が大幅に簡略化されます。このとき、体積要素に「ヤコビアン」が現れることに注意が必要です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-1 (曲線座標の体積要素)">
                <p>
                    第2章で学んだラメ係数 <InlineMath math="h_1, h_2, h_3" /> を用いると、微小体積要素は次のように書ける：
                    <BlockMath math="dV = h_1 h_2 h_3\, du_1 du_2 du_3" />
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-slate-600 dark:text-slate-400">
                    <li>
                        <strong>円柱座標系</strong>： <InlineMath math="dV = r\, dr\, d\theta\, dz" />
                    </li>
                    <li>
                        <strong>球座標系</strong>： <InlineMath math="dV = r^2 \sin\phi\, dr\, d\phi\, d\theta" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    直交曲線座標系において、各座標 <InlineMath math="u_i" /> の微小変化 <InlineMath math="du_i" /> に対応する位置ベクトルの変位は <InlineMath math="\partial_i \mathbf{r}\, du_i" /> である。
                    その長さ（弧長要素）はラメ係数の定義より <InlineMath math="ds_i = |\partial_i \mathbf{r}| du_i = h_i du_i" /> となる。
                </p>
                <p>
                    座標系が直交しているとき、これら3つの変位ベクトルは互いに直交する。
                    したがって、それらが形成する微小な直方体の体積は、各辺の長さの積で与えられる：
                    <BlockMath math="dV = (h_1 du_1)(h_2 du_2)(h_3 du_3) = h_1 h_2 h_3\, du_1 du_2 du_3" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 3.3-2 (球の体積の計算)">
                <p>
                    半径 <InlineMath math="R" /> の球 <InlineMath math="V" /> の体積を球座標を用いて計算します。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <BlockMath math="\begin{aligned} \text{Volume}(V) &= \iiint_V dV \\ &= \int_0^R \int_0^\pi \int_0^{2\pi} r^2 \sin\phi\, d\theta\, d\phi\, dr \\ &= \left( \int_0^R r^2 dr \right) \left( \int_0^\pi \sin\phi\, d\phi \right) \left( \int_0^{2\pi} d\theta \right) \\ &= \left[ \frac{1}{3}r^3 \right]_0^R \cdot \left[ -\cos\phi \right]_0^\pi \cdot 2\pi \\ &= \frac{R^3}{3} \cdot 2 \cdot 2\pi = \frac{4}{3}\pi R^3 \end{aligned}" />
                </div>
            </ContentBox>

            <p>
                体積積分は、この後に学ぶ「ガウスの発散定理」において、ベクトル場の発散を領域全体で積分する際に中心的な役割を果たします。
            </p>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>体積積分</strong>：3次元領域全体での集計操作。</li>
                    <li><strong>物理的応用</strong>：領域内の質量、電荷、エネルギーなどの総量を求める。</li>
                    <li><strong>座標変換</strong>：曲線座標を用いる際はラメ係数の積（ヤコビアン）を忘れないように注意。</li>
                    <li><strong>意味</strong>：ミクロな性質（密度や発散）をマクロな量（質量や総湧出量）に変換する操作である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
