import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LinearizationAndStability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                非線形方程式を直接解くのは困難ですが、平衡点の「ごく近く」だけに注目するなら、システムを線形方程式で近似（線形化）して解析することができます。
                この手法は、現代の制御工学や物理学のあらゆる分野で基盤となっています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平衡点近傍での線形化</h2>

            <p>
                平衡点 <InlineMath math="\mathbf{y}^*" /> の周りでの微小なずれ <InlineMath math="\mathbf{u} = \mathbf{y} - \mathbf{y}^*" /> の挙動を調べます。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (ヤコビ行列による線形化)">
                <p>
                    自律系 <InlineMath math="\mathbf{y}' = \mathbf{f}(\mathbf{y})" /> の平衡点 <InlineMath math="\mathbf{y}^*" /> における<strong>ヤコビ行列 (Jacobian matrix)</strong> を次のように定義する：
                    <BlockMath math="J = D\mathbf{f}(\mathbf{y}^*) = \left( \frac{\partial f_i}{\partial y_j}(\mathbf{y}^*) \right)" />
                    このとき、平衡点近傍の挙動は次の線形システムで近似される：
                    <BlockMath math="\mathbf{u}' = J \mathbf{u}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (論理的背景)">
                <p>
                    多変数関数のテーラー展開を用いる。平衡点 <InlineMath math="\mathbf{y}^*" /> の近傍で <InlineMath math="\mathbf{f}(\mathbf{y})" /> を展開すると：
                    <BlockMath math="\mathbf{f}(\mathbf{y}) = \mathbf{f}(\mathbf{y}^*) + D\mathbf{f}(\mathbf{y}^*)(\mathbf{y} - \mathbf{y}^*) + \text{Higher Order Terms}" />
                    ここで <InlineMath math="\mathbf{f}(\mathbf{y}^*) = \mathbf{0}" /> であり、高次の項（ <InlineMath math="\mathbf{y}" /> が十分に近ければ無視できる）を切り捨て、 <InlineMath math="\mathbf{u} = \mathbf{y} - \mathbf{y}^*" /> と置けば、
                    <BlockMath math="\mathbf{u}' = \mathbf{y}' = \mathbf{f}(\mathbf{y}) \approx J\mathbf{u}" />
                    という線形化システムが得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平衡点の分類 (2 次元の連立系)</h2>

            <p>
                線形化されたシステムの固有値 <InlineMath math="\lambda_1, \lambda_2" /> を調べることで、平衡点の形状と安定性を分類できます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (平衡点の分類)">
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border border-slate-300 dark:border-slate-600">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="border border-slate-300 p-2">固有値の性質</th>
                                <th className="border border-slate-300 p-2">呼称</th>
                                <th className="border border-slate-300 p-2">安定性</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-2">実数、ともに負</td>
                                <td className="border border-slate-300 p-2">安定結節点 (Stable Node)</td>
                                <td className="border border-slate-300 p-2 text-blue-600">漸近安定</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-2">実数、異符号</td>
                                <td className="border border-slate-300 p-2">鞍点 (Saddle Point)</td>
                                <td className="border border-slate-300 p-2 text-red-600">不安定</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-2">複素数、実部が負</td>
                                <td className="border border-slate-300 p-2">安定渦状点 (Stable Spiral)</td>
                                <td className="border border-slate-300 p-2 text-blue-600">漸近安定</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-2">純虚数</td>
                                <td className="border border-slate-300 p-2">中心 (Center)</td>
                                <td className="border border-slate-300 p-2">安定</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-1 (非線形系への応用：ロジスティック写像)">
                <p><strong>問題：</strong> 個体数モデル <InlineMath math="y' = y(1 - y)" /> の平衡点の安定性を調べよ。</p>
                <div className="mt-4 space-y-4">
                    <p><strong>1. 平衡点の特定：</strong>
                        <InlineMath math="f(y) = y(1 - y) = 0" /> より、 <InlineMath math="y^* = 0, 1" />。
                    </p>
                    <p><strong>2. 線形化：</strong>
                        導関数は <InlineMath math="f'(y) = 1 - 2y" />。
                        <br />・ <InlineMath math="y^* = 0" /> のとき： <InlineMath math="f'(0) = 1 > 0 \implies" /> <strong>不安定</strong>。個体数は 0 から増えていく。
                        <br />・ <InlineMath math="y^* = 1" /> のとき： <InlineMath math="f'(1) = -1 < 0 \implies" /> <strong>漸近安定</strong>。環境収容力に収束する。
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>線形化の力</strong>： 平衡点近傍の局所的な挙動は、ヤコビ行列の固有値だけでほぼ決定される。</li>
                    <li><strong>判別規則</strong>： 固有値の実部がすべて負ならば漸近安定であり、1 つでも正があれば不安定である。</li>
                    <li><strong>限界</strong>： 固有値の実部がちょうど 0（中心の場合など）のときは、無視した高次の項が安定性を左右するため、線形化だけでは判定できない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
