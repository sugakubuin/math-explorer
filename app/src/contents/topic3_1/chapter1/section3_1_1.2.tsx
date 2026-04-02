import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorFieldAndDivergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                空間の各点に「大きさ」だけでなく「向き」を持ったベクトルが割り当てられている状態を「ベクトル場」と呼びます。
                このセクションでは、ベクトル場の重要な指標の一つである「発散（ディバージェンス）」について学びます。
                これは直感的には、ある場所でどれくらい流体が湧き出しているか、あるいは吸い込まれているかを表す量です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場の定義</h2>

            <p>
                スカラー場が各点に実数を対応させていたのに対し、ベクトル場は各点にベクトルを対応させます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (ベクトル場)">
                <p>
                    <InlineMath math="n" /> 次次元空間の開集合 <InlineMath math="U \subset \mathbb{R}^n" /> 上で定義されたベクトル値関数
                    <BlockMath math="\mathbf{F} : U \to \mathbb{R}^n" />
                    を、<strong>ベクトル場 (vector field)</strong> と呼ぶ。
                    3次元の場合、成分表示は <InlineMath math="\mathbf{F}(x, y, z) = (F_1, F_2, F_3)" /> となる。
                </p>
            </ContentBox>

            <p>
                ベクトル場の代表的な例は、川の流れや風の動きを示す「速度場」、あるいは重力が働く様子を示す「重力場」です。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (身近なベクトル場)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>流体の速度場 <InlineMath math="\mathbf{v}(x, y, z)" /></strong>：水や空気の流れを、各点での速度ベクトルとして表したものです。
                    </li>
                    <li>
                        <strong>重力場 <InlineMath math="\mathbf{g} = (0, 0, -g)" /></strong>：地球の表面付近で、あらゆる場所に下向きの重力加速度ベクトルが割り当てられています。
                    </li>
                    <li>
                        <strong>電場 <InlineMath math="\mathbf{E}(x, y, z)" /></strong>：電荷の周りに生じる力の場もベクトル場です。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">発散</h2>

            <p>
                ベクトル場の空間的な変化のうち、ある点から「外向き」に向かおうとする成分の合計を「発散」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (発散：div)">
                <p>
                    <InlineMath math="C^1" /> 級ベクトル場 <InlineMath math="\mathbf{F} = (F_1, F_2, F_3)" /> の<strong>発散 (divergence)</strong> を次のように定義する：
                    <BlockMath math="\nabla \cdot \mathbf{F} = \text{div} \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}" />
                    演算の形としては、ハミルトン演算子 <InlineMath math="\nabla" /> とベクトル場 <InlineMath math="\mathbf{F}" /> の形式的な「内積」になっている。
                </p>
            </ContentBox>

            <p>
                発散は、ベクトルとしての性質を入力し、1つの数値（スカラー）を出力する演算であることに注目してください。
            </p>

            <ContentBox type="remark" title="発散の直感的な意味">
                <p>
                    流体の流れを <InlineMath math="\mathbf{F}" /> と見なしたとき、点 <InlineMath math="\mathbf{p}" /> における発散の値は以下のことを意味します：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\text{div} \mathbf{F}(\mathbf{p}) > 0" />：流体がその点から周囲へ「湧き出して」いる（ソース）。</li>
                    <li><InlineMath math="\text{div} \mathbf{F}(\mathbf{p}) < 0" />：流体がその点へ周囲から「吸い込まれて」いる（シンク）。</li>
                    <li><InlineMath math="\text{div} \mathbf{F}(\mathbf{p}) = 0" />：湧き出しも吸い込みもない。このような場を<strong>非圧縮性 (incompressible)</strong> であるという。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (発散の計算例)">
                <p>
                    次の2つのベクトル場について発散を計算してみましょう。
                </p>
                <div className="space-y-4 shadow-inner p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div>
                        <strong>1. 放射状の場 <InlineMath math="\mathbf{F} = (x, y, z)" /></strong>
                        <BlockMath math="\text{div} \mathbf{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3" />
                        正の値をとるため、全空間で一定の割合で湧き出しが起こっている場であることがわかります。
                    </div>
                    <div>
                        <strong>2. 回転する場 <InlineMath math="\mathbf{F} = (-y, x, 0)" /></strong>
                        <BlockMath math="\text{div} \mathbf{F} = \frac{\partial (-y)}{\partial x} + \frac{\partial x}{\partial y} + \frac{\partial 0}{\partial z} = 0 + 0 + 0 = 0" />
                        この場は中心を回る渦を形成していますが、湧き出しや吸い込みはない（非圧縮）ことがわかります。
                    </div>
                </div>
            </ContentBox>

            <p>
                このように、発散を調べることで、そのベクトル場がどこで生まれ、どこで消滅しているかという重要な情報を得ることができます。
                これは後に学ぶ「ガウスの発散定理」において中心的な役割を果たします。
            </p>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ベクトル場</strong>：空間の各点に対応するベクトルの分布（速度場、力場など）。</li>
                    <li><strong>発散 (div)</strong>：各成分の偏微分の和。スカラー値を出力する。</li>
                    <li><strong>正の値</strong>：その地点が「湧き出し口」になっていることを示す。</li>
                    <li><strong>負の値</strong>：その地点が「吸い込み口」になっていることを示す。</li>
                    <li><strong>ゼロの値</strong>：湧き出しがなく、流体の体積が保存されている（非圧縮）状態。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
