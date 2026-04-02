import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DFTDefinitionSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでに学んだフーリエ級数やフーリエ変換は、連続的な関数を対象としていました。しかし、コンピュータで信号を処理する場合、データは一定の間隔でサンプリングされた <b>有限個の数値（数列）</b> として扱われます。この離散的なデータに対してフーリエ解析を行うための道具が <b>離散フーリエ変換 (DFT)</b> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">離散フーリエ変換 (DFT) の定義</h2>

            <p>
                長さ <InlineMath math="N" /> の複素数列 <InlineMath math="x_0, x_1, \dots, x_{N-1}" /> が与えられたとき、それを周波数成分へと変換します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (離散フーリエ変換: DFT)">
                <p>
                    長さ <InlineMath math="N" /> の数列 <InlineMath math="\{x_n\}" /> に対し、その <b>離散フーリエ変換</b> <InlineMath math="\{X_k\}" /> を次のように定義する：
                </p>
                <BlockMath math="X_k = \sum_{n=0}^{N-1} x_n e^{-i \frac{2\pi}{N} kn} \quad (k = 0, 1, \dots, N-1)" />
                <p>
                    ここで、<InlineMath math="X_k" /> は周波数インデックス <InlineMath math="k" /> における成分の強さを表す。
                </p>
            </ContentBox>

            <p>
                この変換は、元の信号 <InlineMath math="x_n" /> を、異なる周期を持つ <InlineMath math="N" /> 個の複素正弦波の重ね合わせとして分解していると解釈できます。
            </p>

            <ContentBox type="example" title="Example 5.1-1 (デルタパルスの DFT)">
                <p>
                    <InlineMath math="N=4" />、<InlineMath math="\mathbf{x} = (1, 0, 0, 0)" /> （原点のみに値を持つインパルス）の DFT を計算すると：
                </p>
                <BlockMath math="X_k = \sum_{n=0}^{3} x_n e^{-i \frac{2\pi}{4} kn} = x_0 e^0 = 1 \quad (\text{すべての } k \text{ に対して})" />
                <p>
                    となり、すべての周波数成分を等しく含む「白色（ホワイト）スペクトル」が得られます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-2 (遅延パルスの DFT)">
                <p>
                    <InlineMath math="N=4" />、<InlineMath math="\mathbf{x} = (0, 1, 0, 0)" /> （1サンプル遅れたパルス）の DFT は次のように計算されます（<InlineMath math="\omega = e^{-i \pi/2} = -i" />）：
                </p>
                <BlockMath math="X_k = \omega^k \implies (X_0, X_1, X_2, X_3) = (1, -i, -1, i)" />
                <p>
                    デルタ信号のシフトは、スペクトル領域では「周波数に比例した位相回転」として現れます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆離散フーリエ変換 (IDFT)</h2>

            <p>
                変換されたスペクトル <InlineMath math="X_k" /> から元の数列 <InlineMath math="x_n" /> を完全に復元することが可能です。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (逆離散フーリエ変換: IDFT)">
                <p>
                    数列 <InlineMath math="\{X_k\}" /> から元の数列 <InlineMath math="\{x_n\}" /> を復元する式は次のように与えられる：
                </p>
                <BlockMath math="x_n = \frac{1}{N} \sum_{k=0}^{N-1} X_k e^{i \frac{2\pi}{N} kn} \quad (n = 0, 1, \dots, N-1)" />
                <p>
                    前方変換（DFT）との対称性を保つため、係数 <InlineMath math="1/N" /> が必要となる点に注意が必要である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-3 (定数列の DFT と IDFT)">
                <p>
                    <InlineMath math="N=4" />、<InlineMath math="\mathbf{x} = (1, 1, 1, 1)" /> （直流信号）の DFT は <InlineMath math="X_0 = 4, X_1 = X_2 = X_3 = 0" /> となります。これを IDFT の式に代入すると：
                </p>
                <BlockMath math="x_n = \frac{1}{4} (4 \cdot e^0 + 0 + 0 + 0) = 1" />
                <p>
                    となり、元の定数信号が正しく復元されることが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.1-4 (DFT の可逆性)">
                <p>
                    DFT 行列 <InlineMath math="W" /> はユニタリ行列の定数倍であり、その逆行列を用いて元の信号を完全に復元できる。具体的には、次の直交関係が成立する：
                </p>
                <BlockMath math="(W^* W)_{nm} = \sum_{k=0}^{N-1} \overline{W_{kn}} W_{km} = \sum_{k=0}^{N-1} e^{i \frac{2\pi}{N} k(n-m)} = N \delta_{nm}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    和の各項は、公比 <InlineMath math="a = e^{i \frac{2\pi}{N}(n-m)}" /> の等比数列である。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="n = m" /> のとき、すべての項は <InlineMath math="e^0 = 1" /> となり、和は <InlineMath math="N" /> である。</li>
                    <li><InlineMath math="n \neq m" /> のとき、<InlineMath math="a \neq 1" /> かつ <InlineMath math="a^N = 1" /> であるから、等比数列の和の公式より：
                        <BlockMath math="\sum_{k=0}^{N-1} a^k = \frac{1-a^N}{1-a} = \frac{1-1}{1-a} = 0" />
                    </li>
                </ul>
                <p>
                    以上より、<InlineMath math="W^* W = N I" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="DFT と連続フーリエ変換の関係">
                <p>
                    周期 <InlineMath math="N" /> の離散信号の DFT は、連続フーリエ変換の周波数軸を <InlineMath math="N" /> 等分した標本値に対応していると解釈できます。
                </p>
                <p>
                    具体的には、長さ <InlineMath math="N" /> の有限信号を周期的に拡張したもののフーリエ級数展開の係数が、まさに DFT の各成分 <InlineMath math="X_k" /> に（正規化定数を除いて）一致します。このことは、計算機による周波数解析が連続的な世界の「サンプリング」であることを数学的に裏付けています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列による表現</h2>

            <p>
                DFT は線形変換であるため、行列とベクトルの積として表現することができます。
            </p>

            <ContentBox type="remark" title="フーリエ行列">
                <p>
                    <InlineMath math="W = e^{-i \frac{2\pi}{N}}" /> とおくと、DFT は次のような <b>フーリエ行列</b> を用いて記述できます：
                </p>
                <BlockMath math="\begin{pmatrix} X_0 \\ X_1 \\ \vdots \\ X_{N-1} \end{pmatrix} = \begin{pmatrix} 1 & 1 & \dots & 1 \\ 1 & W^1 & \dots & W^{N-1} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & W^{N-1} & \dots & W^{(N-1)^2} \end{pmatrix} \begin{pmatrix} x_0 \\ x_1 \\ \vdots \\ x_{N-1} \end{pmatrix}" />
                <p>
                    この行列による表現は、DFT が複素ベクトル空間における <b>基底の変換</b> （時間基底から周波数基底へ）であることを明快に示しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>離散フーリエ変換（DFT）は、有限個のサンプリングデータに対するフーリエ解析の道具である。</li>
                    <li>デルタパルスは白色スペクトルを持ち、定数信号は周波数ゼロ（直流）成分のみを持つ。</li>
                    <li>DFT は可逆な線形変換であり、複素指数関数の直交性によって逆変換が定義される。</li>
                    <li>行列形式で記述すると、DFT はユニタリ行列（のスカラー倍）による基底変換とみなせる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
