import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AutonomousSystemEquilibrium() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                自律系（時間 <InlineMath math="t" /> を陽に含まない微分方程式系）において、その振る舞いを決定づける最も重要な要素は「平衡点」とその周辺での局所的な挙動です。
                本節では、非線形な系を平衡点周りで線形化する手法と、2 次元の線形系が持つ多様な相平面のパターンを分類する方法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平衡点と線形化</h2>

            <p className="leading-relaxed">
                まず、系の「定常状態」を表す平衡点と、その近傍で系を近似する線形化の概念を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (自律系と平衡点)">
                <p>
                    右辺が時間 <InlineMath math="t" /> を陽に含まない常微分方程式系
                    <BlockMath math="\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})" />
                    を<b>自律系</b>（autonomous system）と呼ぶ。また、
                    <BlockMath math="\mathbf{f}(\mathbf{x}^*) = \mathbf{0}" />
                    を満たす点 <InlineMath math="\mathbf{x}^*" /> を<b>平衡点</b>（equilibrium point）または均衡点と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                平衡点の直感的な意味を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (平衡点の例)">
                <p>
                    単振り子の振動方程式を連立 1 階形式で書くと、
                    <BlockMath math="\begin{cases} \dot{x}_1 = x_2 \\ \dot{x}_2 = -\sin x_1 \end{cases}" />
                    となる。このとき、平衡点は <InlineMath math="x_2 = 0" /> かつ <InlineMath math="\sin x_1 = 0" /> を満たす点、すなわち <InlineMath math="(n\pi, 0) \quad (n \in \mathbb{Z})" /> である。
                    物理的には、振り子が真下（安定）または真上（不安定）で静止している状態に対応する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                非線形な系であっても、平衡点の極めて近くでは線形な挙動が支配的になります。
            </p>

            <ContentBox type="definition" title="Definition 3.1-2 (非線形系の線形化)">
                <p>
                    平衡点 <InlineMath math="\mathbf{x}^*" /> のまわりで、ベクトル値関数 <InlineMath math="\mathbf{f}(\mathbf{x})" /> をテイラー展開し 1 次の項まで取った系
                    <BlockMath math="\dot{\mathbf{y}} = A \mathbf{y} \quad (\mathbf{y} = \mathbf{x} - \mathbf{x}^*, \ A = D\mathbf{f}(\mathbf{x}^*))" />
                    を、<InlineMath math="\mathbf{x}^*" /> まわりの<b>線形化系</b>（linearized system）と呼ぶ。
                    ここで <InlineMath math="A = D\mathbf{f}(\mathbf{x}^*)" /> はヤコビ行列（Jacobian matrix）である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                実際に、非線形な系を平衡点周りで線形化してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (単振り子の線形化)">
                <p>
                    Example 3.1-1 の単振り子の系を、平衡点 <InlineMath math="\mathbf{x}^* = (0, 0)" /> （安定な平衡点）のまわりで线形化する。ヤコビ行列を求めると：
                    <BlockMath math="Df(x_1, x_2) = \begin{pmatrix} \frac{\partial \dot{x}_1}{\partial x_1} & \frac{\partial \dot{x}_1}{\partial x_2} \\ \frac{\partial \dot{x}_2}{\partial x_1} & \frac{\partial \dot{x}_2}{\partial x_2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -\cos x_1 & 0 \end{pmatrix}" />
                    点 <InlineMath math="(0, 0)" /> におけるヤコビ行列は <InlineMath math="A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}" /> となる。
                    線形化系 <InlineMath math="\dot{\mathbf{y}} = A\mathbf{y}" /> は調和振動子の形式となり、平衡点近傍では微小な単振動が起きることがわかる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                線形化が有効であるための条件について、重要な注釈があります。
            </p>

            <ContentBox type="remark" title="ハルトマン・グロブマンの定理と線形化の有効性">
                <p>
                    ヤコビ行列 <InlineMath math="A" /> のすべての固有値の実部が 0 でない（双曲型平衡点）とき、元の非線形系と線形化系の局所的な挙動は「位相的同値」になります。
                    しかし、実部が 0 の固有値が存在する場合（例：上記の単振り子の <InlineMath math="\pm i" />）、線形化だけでは摩擦がない場合の厳密な安定性を判断できず、高次の非線形項を考慮する必要があります（§3.2 参照）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">2x2 線形系の相平面分類</h2>

            <p className="leading-relaxed">
                2 変数の線形系 <InlineMath math="\dot{\mathbf{x}} = A \mathbf{x}" /> において、平衡点（原点）周りの相平面のパターンは、行列 <InlineMath math="A" /> の固有値によって完全に分類されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (2 次元線形系の分類)">
                <p>
                    行列 <InlineMath math="A" /> のトレースを <InlineMath math="\tau = \mathrm{tr}A" />、行列式を <InlineMath math="\Delta = \det A" /> としたとき、固有値の性質に応じて以下のように分類される：
                </p>
                <ul className="list-disc list-inside mt-4 leading-relaxed space-y-2">
                    <li><b>ノード (Node)</b>：固有値が同符号の実数。原点へ単純に吸い込まれる（安定）か、遠ざかる（不安定）。</li>
                    <li><b>鞍点 (Saddle)</b>：固有値が異符号の実数。一方の軸から近づき、他方の軸へ遠ざかる。</li>
                    <li><b>焦点 (Focus / Spiral)</b>：固有値が複素共役で実部が 0 でない。らせんを描きながら収束、または発散する。</li>
                    <li><b>中心 (Center)</b>：固有値が純虚数。原点の周りを閉曲線で永遠に周回する。</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                これらの分類が固有値の性質からどのように導かれるか、理論的根拠を確認しましょう。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    相似変換 <InlineMath math="\mathbf{x} = P\mathbf{y}" /> によって系をジョルダン標準形 <InlineMath math="\dot{\mathbf{y}} = J\mathbf{y}" /> に帰着させる。
                    Chapter 2 の結果より、一般解は <InlineMath math="\mathbf{y}(t) = e^{tJ}\mathbf{y}(0)" /> である。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-4">
                    <li>
                        <b>実固有値 <InlineMath math="\lambda_1, \lambda_2" /> の場合</b>：
                        ジョルダン標準形が対角行列（<InlineMath math="\lambda_1 \neq \lambda_2" /> または適当な条件）のとき、
                        <InlineMath math="y_1(t) = c_1 e_{\lambda_1 t}, \ y_2(t) = c_2 e^{\lambda_2 t}" /> である。
                        定数項を排除すると <InlineMath math="|y_2| = C |y_1|^{\lambda_2/\lambda_1}" /> という曲線族が得られる。
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li><InlineMath math="\lambda_1, \lambda_2" /> が同符号ならば、すべての軌道は原点へ収束（または遠ざかる）<b>ノード</b>となる。</li>
                            <li><InlineMath math="\lambda_1, \lambda_2" /> が異符号ならば、一方が無限大へ、他方が 0 へ向かう<b>鞍点</b>となる。</li>
                        </ul>
                    </li>
                    <li>
                        <b>複素固有値 <InlineMath math="\alpha \pm i\beta \ (\beta \neq 0)" /> の場合</b>：
                        実数範囲での変換により、標準形は <InlineMath math="J = \begin{pmatrix} \alpha & \beta \\ -\beta & \alpha \end{pmatrix}" /> と書ける。
                        極座標 <InlineMath math="y_1 = r \cos \theta, \ y_2 = r \sin \theta" /> を導入すると、
                        <InlineMath math="\dot{r} = \alpha r, \ \dot{\theta} = -\beta" /> となり、解は <InlineMath math="r(t) = r_0 e^{\alpha t}, \ \theta(t) = \theta_0 - \beta t" /> である。
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li><InlineMath math="\alpha \neq 0" /> ならば、回転しながら原点へ近づく（または遠ざかる）<b>焦点（スパイラル）</b>となる。</li>
                            <li><InlineMath math="\alpha = 0" /> ならば、一定の半径を保ち回転し続ける<b>中心</b>となる。</li>
                        </ul>
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                代表的なパターンである「鞍点」の具体的な挙動を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-3 (鞍点の例)">
                <p>
                    次の行列 <InlineMath math="A" /> を持つ系を考える。
                    <BlockMath math="A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}" />
                    固有値は <InlineMath math="1, -1" />（異符号の実数）である。一般解は
                    <BlockMath math="\mathbf{x}(t) = \begin{pmatrix} c_1 e^t \\ c_2 e^{-t} \end{pmatrix}" />
                    である。これより <InlineMath math="x_1 x_2 = c_1 c_2 = \text{const}" /> が得られ、相平面上では座標軸（安定多様体と不安定多様体）を漸近線とする双曲線群が描かれる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                複素固有値の場合の挙動についても確認します。
            </p>

            <ContentBox type="example" title="Example 3.1-4 (安定スパイラルの例)">
                <p>
                    行列 <InlineMath math="A = \begin{pmatrix} -1 & 2 \\ -2 & -1 \end{pmatrix}" /> の固有値は <InlineMath math="-1 \pm 2i" /> である。
                    実部 <InlineMath math="-1" /> が負であるため、軌道は原点に吸い込まれるが、虚部 <InlineMath math="2" /> によって回転が加わる。
                    具体的に <InlineMath math="e^{tA} = e^{-t} \begin{pmatrix} \cos 2t & \sin 2t \\ -\sin 2t & \cos 2t \end{pmatrix}" /> となり、振幅が減衰しながら回転する様子がわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>自律系</b>の平衡点は <InlineMath math="\mathbf{f}(\mathbf{x}) = \mathbf{0}" /> を解くことで得られる。</li>
                    <li>非線形系は平衡点周りで<b>ヤコビ行列</b>を用いて線形近似（線形化）できる。</li>
                    <li>2 次元の相平面は、固有値の性質（実・複素、正・負）によって<b>ノード・鞍点・スパイラル・中心</b>の 4 つに大別される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
