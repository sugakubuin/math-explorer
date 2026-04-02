import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_10_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                空間曲線の局所的な性質（どれくらい曲がっているか、どれくらいねじれているか）を完全に記述するための強力な枠組みが、<strong>フルネ・セレ標構</strong>（Frenet-Serret frame）とそれに付随する公式です。
                これは、曲線上を動く粒子とともに移動する「局所的な直交座標系（動標構）」を構築するアイデア論に基づいています。
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 my-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                ※ 本節では、本質を簡明に示すため、曲線は全て「弧長パラメータ <InlineMath math="s" />」で表されているものとして議論します。
                すなわち、速度ベクトルの大きさは常に <InlineMath math="1" />（<InlineMath math="\|\mathbf{r}'(s)\| = 1" />）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲率とフルネ・セレ標構</h2>

            <ContentBox type="definition" title="Definition 10.4-1 (曲率と曲率半径)">
                <p>
                    弧長パラメータ <InlineMath math="s" /> で表された正則曲線 <InlineMath math="\mathbf{r}(s)" /> （<InlineMath math="\|\mathbf{r}'(s)\| = 1" />）を考える。
                </p>
                <p className="mt-2">
                    曲線に沿って進むときの「進行方向（速度ベクトル）の変化率」の大きさを<strong>曲率</strong>（curvature）と呼び、<InlineMath math="\kappa" /> （カッパ）で表す。
                </p>
                <BlockMath math="\kappa(s) = \|\mathbf{r}''(s)\|" />
                <p className="mt-2">
                    また、曲率の逆数 <InlineMath math="\rho(s) = 1/\kappa(s)" /> を<strong>曲率半径</strong>と呼ぶ（直線のように曲がっていない場合は <InlineMath math="\kappa=0, \rho=\infty" /> となる）。
                </p>
            </ContentBox>

            <p>
                次に、曲線上の各点において、曲線の性質を捉えるための3つの直交する単位ベクトルを定義します。
            </p>

            <ContentBox type="definition" title="Definition 10.4-2 (フルネ・セレ標構)">
                <p>
                    曲線 <InlineMath math="\mathbf{r}(s)" /> の各点に付随する、以下の3つの直交する単位ベクトルの組 <InlineMath math="\{\mathbf{T}, \mathbf{N}, \mathbf{B}\}" /> を<strong>フルネ・セレ標構</strong>と呼ぶ。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-4">
                    <li>
                        <strong>単位接ベクトル (Tangent vector): <InlineMath math="\mathbf{T}(s)" /></strong>
                        <br />曲線の進行方向を示すベクトル。定義より初めから単位ベクトルである。
                        <BlockMath math="\mathbf{T}(s) = \mathbf{r}'(s)" />
                    </li>
                    <li>
                        <strong>主法線ベクトル (Normal vector): <InlineMath math="\mathbf{N}(s)" /></strong>
                        <br />進行方向が「曲がる方向」を示すベクトル（<InlineMath math="\kappa \neq 0" /> とする）。<InlineMath math="\mathbf{T}'(s)" /> は <InlineMath math="\mathbf{T}(s)" /> に直交するため（※証明後述）、その向きを単位長にしたものとする。
                        <BlockMath math="\mathbf{N}(s) = \frac{\mathbf{T}'(s)}{\|\mathbf{T}'(s)\|} = \frac{\mathbf{r}''(s)}{\kappa(s)}" />
                    </li>
                    <li>
                        <strong>従法線ベクトル (Binormal vector): <InlineMath math="\mathbf{B}(s)" /></strong>
                        <br /><InlineMath math="\mathbf{T}" /> と <InlineMath math="\mathbf{N}" /> の両方に直交するように外積で定義する。右手系の直交基底を構成する。
                        <BlockMath math="\mathbf{B}(s) = \mathbf{T}(s) \times \mathbf{N}(s)" />
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フルネ・セレの基本公式</h2>

            <p>
                曲線上を進んだとき、この「標構 <InlineMath math="\{\mathbf{T}, \mathbf{N}, \mathbf{B}\}" />」の向きが空間内でどのように変化して（回転して）いくかを表す微分方程式が、フルネ・セレの公式です。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-1 (フルネ・セレの公式)">
                <p>
                    弧長パラメータ <InlineMath math="s" /> に対する標構の微分の関係式は、次のように行列で簡潔に表される。
                </p>
                <BlockMath math="\begin{pmatrix} \mathbf{T}'(s) \\ \mathbf{N}'(s) \\ \mathbf{B}'(s) \end{pmatrix} = \begin{pmatrix} 0 & \kappa(s) & 0 \\ -\kappa(s) & 0 & \tau(s) \\ 0 & -\tau(s) & 0 \end{pmatrix} \begin{pmatrix} \mathbf{T}(s) \\ \mathbf{N}(s) \\ \mathbf{B}(s) \end{pmatrix}" />
                <p className="mt-2">
                    ここで <InlineMath math="\tau(s)" /> （タウ）は<strong>捩率</strong>（torsion：れいりつ／ねじれりつ）と呼ばれるスカラー量であり、曲線が接触平面（<InlineMath math="\mathbf{T}, \mathbf{N}" /> が張る平面）から「浮き上がる（ねじれる）」度合いを表す。
                </p>
                <p>個別の式に書き下せば：</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{T}' = \kappa \mathbf{N}" /></li>
                    <li><InlineMath math="\mathbf{N}' = -\kappa \mathbf{T} + \tau \mathbf{B}" /></li>
                    <li><InlineMath math="\mathbf{B}' = -\tau \mathbf{N}" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の要となるのは、「長さが常に <InlineMath math="1" /> であるベクトルの導関数は、元のベクトルと直交する」という補題である。
                </p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 font-bold">[補題の確認]</p>
                <p className="mt-1">
                    任意のベクトル関数 <InlineMath math="\mathbf{v}(s)" /> が <InlineMath math="\|\mathbf{v}(s)\|^2 = \mathbf{v}(s) \cdot \mathbf{v}(s) \equiv 1" /> を満たすとする。両辺を <InlineMath math="s" /> で微分すると
                </p>
                <BlockMath math="\frac{d}{ds} (\mathbf{v} \cdot \mathbf{v}) = \mathbf{v}' \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{v}' = 2(\mathbf{v} \cdot \mathbf{v}') = 0" />
                <p className="mt-1">
                    したがって、内積 <InlineMath math="\mathbf{v} \cdot \mathbf{v}' = 0" /> となり、<InlineMath math="\mathbf{v}" /> と <InlineMath math="\mathbf{v}'" /> は直交する。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[式(1): <InlineMath math="\mathbf{T}'" /> の式の導出]</p>
                <p className="mt-2">
                    主法線の定義より <InlineMath math="\mathbf{N} = \frac{\mathbf{T}'}{\kappa}" /> である。これを移項すれば直ちに
                </p>
                <BlockMath math="\mathbf{T}' = \kappa \mathbf{N}" />
                <p className="mt-2">
                    が得られる。前述の補題により、<InlineMath math="\mathbf{T}'" /> は確かに <InlineMath math="\mathbf{T}" /> と直交しており（<InlineMath math="\mathbf{T} \cdot \mathbf{T}' = 0" />）、<InlineMath math="\mathbf{B}" /> 成分は持たない。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[式(3): <InlineMath math="\mathbf{B}'" /> の式の導出と捩率の定義]</p>
                <p className="mt-2">
                    <InlineMath math="\mathbf{B}" /> も単位ベクトルなので、補題により <InlineMath math="\mathbf{B}' \cdot \mathbf{B} = 0" /> である。
                    また、<InlineMath math="\mathbf{B}" /> は <InlineMath math="\mathbf{T}" /> と常に直交し続ける（<InlineMath math="\mathbf{T} \cdot \mathbf{B} \equiv 0" />）ので、これを微分して
                </p>
                <BlockMath math="\mathbf{T}' \cdot \mathbf{B} + \mathbf{T} \cdot \mathbf{B}' = (\kappa \mathbf{N}) \cdot \mathbf{B} + \mathbf{T} \cdot \mathbf{B}' = 0" />
                <p className="mt-2">
                    <InlineMath math="\mathbf{N}" /> と <InlineMath math="\mathbf{B}" /> は直交するから <InlineMath math="\mathbf{N} \cdot \mathbf{B} = 0" />。よって <InlineMath math="\mathbf{T} \cdot \mathbf{B}' = 0" /> となる。
                </p>
                <p className="mt-2">
                    以上から、<InlineMath math="\mathbf{B}'" /> は <InlineMath math="\mathbf{B}" /> にも <InlineMath math="\mathbf{T}" /> にも直交するため、残る <InlineMath math="\mathbf{N}" /> の方向しか向き得ない。そこで、適当なスカラー関数 <InlineMath math="\tau(s)" /> を用いて
                </p>
                <BlockMath math="\mathbf{B}'(s) = -\tau(s) \mathbf{N}(s)" />
                <p className="mt-2">
                    と書くことができる。<InlineMath math="\tau(s) = -\mathbf{B}'(s) \cdot \mathbf{N}(s)" /> を以て、<strong>捩率の定義（Definition 10.4-3）</strong>とする。負号は歴史的な慣習による。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[式(2): <InlineMath math="\mathbf{N}'" /> の式の導出]</p>
                <p className="mt-2">
                    基底 <InlineMath math="\{\mathbf{T}, \mathbf{N}, \mathbf{B}\}" /> は正規直交系であるため、任意のベクトルはこの3つのベクトルの線形結合として完全な分解ができる。
                    <InlineMath math="\mathbf{N}'" /> を分解すると、
                </p>
                <BlockMath math="\mathbf{N}' = (\mathbf{N}' \cdot \mathbf{T})\mathbf{T} + (\mathbf{N}' \cdot \mathbf{N})\mathbf{N} + (\mathbf{N}' \cdot \mathbf{B})\mathbf{B}" />
                <p className="mt-2">
                    各係数を計算する。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{N}" /> は単位ベクトルなので、補題から <InlineMath math="\mathbf{N}' \cdot \mathbf{N} = 0" />。</li>
                    <li><InlineMath math="\mathbf{N} \cdot \mathbf{T} \equiv 0" /> を微分すると、<InlineMath math="\mathbf{N}' \cdot \mathbf{T} + \mathbf{N} \cdot \mathbf{T}' = 0" />。よって <InlineMath math="\mathbf{N}' \cdot \mathbf{T} = -\mathbf{N} \cdot (\kappa \mathbf{N}) = -\kappa" />。</li>
                    <li><InlineMath math="\mathbf{N} \cdot \mathbf{B} \equiv 0" /> を微分すると、<InlineMath math="\mathbf{N}' \cdot \mathbf{B} + \mathbf{N} \cdot \mathbf{B}' = 0" />。よって <InlineMath math="\mathbf{N}' \cdot \mathbf{B} = -\mathbf{N} \cdot (-\tau \mathbf{N}) = \tau" />。</li>
                </ul>
                <p className="mt-2">
                    これを代入することで、
                </p>
                <BlockMath math="\mathbf{N}' = -\kappa \mathbf{T} + \tau \mathbf{B}" />
                <p className="mt-2">
                    が得られる。以上で係数行列が交代行列になり、式がすべて証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§10.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>フルネ・セレ標構は、曲線自身に付随する「動く直交座標系」である。</li>
                    <li>曲線の変化を外部の絶対座標から見るのではなく、曲線に寄り添って見るための視座を提供する。</li>
                    <li>交代行列として表される方程式は、直交基底が「回転」しながら進む様子（微小回転）を正確に述べている。</li>
                    <li><strong>曲線上の局所的な振る舞いは、2つのスカラー量「曲率 <InlineMath math="\kappa(s)" />」と「捩率 <InlineMath math="\tau(s)" />」に完全に集約される。（曲線の基本定理）</strong></li>
                </ul>
            </ContentBox>
        </section>
    );
}
