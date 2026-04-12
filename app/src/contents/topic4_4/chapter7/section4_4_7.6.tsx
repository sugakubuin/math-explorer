import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlternatingDirectionMethodOfMultipliers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、制約付きの凸最適化問題に対する強力なアルゴリズムである<b>ADMM（交互方向乗数法：Alternating Direction Method of Multipliers）</b>について解説します。ADMMは、大規模な最適化問題を小さな部分問題に分割して解くことを可能にする手法であり、前節までで学んだ近接作用素や分割法の概念が統合された強力な枠組みです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ADMM のアルゴリズム</h2>

            <p>
                ADMMは、目的関数が二つの関数の和として表され、かつ変数間に線形制約が存在する問題を対象とします。この問題構造は、機械学習や統計推定における正則化付き最適化問題で頻繁に現れます。
            </p>

            <ContentBox type="definition" title={<span>Definition 7.6-1 (ADMM)</span>}>
                <p>
                    次のような制約付き凸最適化問題を考えます。
                </p>
                <BlockMath math="\min_{x, z} f(x) + g(z) \quad \text{subject to} \quad Ax + Bz = c" />
                <p>
                    ここで、<InlineMath math="f, g" /> は閉真凸関数です。
                    この問題に対する<b>拡大ラグランジュ関数（Augmented Lagrangian）</b>を、ペナルティパラメータ <InlineMath math="\rho > 0" /> を用いて次のように定義します。
                </p>
                <BlockMath math="\begin{aligned} &L_\rho(x, z, y) \\ &= f(x) + g(z) + \langle y, Ax + Bz - c \rangle + \frac{\rho}{2} \|Ax + Bz - c\|^2 \end{aligned}" />
                <p>
                    スケーリングされた双対変数 <InlineMath math="u = (1/\rho)y" /> を導入すると、ADMMの反復は次の3つのステップで構成されます。
                </p>
                <div className="space-y-2 mt-2">
                    <BlockMath math="x_{k+1} = \arg\min_x \left( f(x) + \frac{\rho}{2} \|Ax + Bz_k - c + u_k\|^2 \right)" />
                    <BlockMath math="z_{k+1} = \arg\min_z \left( g(z) + \frac{\rho}{2} \|Ax_{k+1} + Bz - c + u_k\|^2 \right)" />
                    <BlockMath math="u_{k+1} = u_k + (Ax_{k+1} + Bz_{k+1} - c)" />
                </div>
            </ContentBox>

            <p>
                このように、ADMMは変数 <InlineMath math="x" /> と <InlineMath math="z" /> を同時に最適化するのではなく、交互に（alternating）最適化を行うのが特徴です。これにより、各ステップの最適化問題が扱いやすくなります。具体的な例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 7.6-1">
                <p>
                    簡単な問題設定として、<InlineMath math="f(x) = \frac{1}{2}\|x - a\|^2" />、<InlineMath math="g(z) = \lambda\|z\|_1" /> とし、制約を <InlineMath math="x = z" /> （すなわち <InlineMath math="A = I, B = -I, c = 0" />）とした場合のADMMステップを計算します。
                </p>
                <p>
                    このとき、スケーリングされた拡大ラグランジュ関数に基づく更新は以下のようになります。
                </p>
                <ul>
                    <li>
                        <b><InlineMath math="x" />-更新:</b> <InlineMath math="x_{k+1} = \arg\min_x \left( \frac{1}{2}\|x - a\|^2 + \frac{\rho}{2}\|x - z_k + u_k\|^2 \right)" /><br />
                        これは二次関数の最小化なので、微分して0とおくことで解析的に解けます。
                        <BlockMath math="x_{k+1} = \frac{1}{1+\rho} (a + \rho(z_k - u_k))" />
                    </li>
                    <li>
                        <b><InlineMath math="z" />-更新:</b> <InlineMath math="z_{k+1} = \arg\min_z \left( \lambda\|z\|_1 + \frac{\rho}{2}\|x_{k+1} - z + u_k\|^2 \right)" /><br />
                        これは近接作用素の定義そのものであり、軟閾値作用素（Soft-thresholding operator）を用いて計算できます。
                        <BlockMath math="z_{k+1} = \mathrm{prox}_{(\lambda/\rho)\|\cdot\|_1}(x_{k+1} + u_k)" />
                    </li>
                    <li>
                        <b><InlineMath math="u" />-更新:</b>
                        <BlockMath math="u_{k+1} = u_k + x_{k+1} - z_{k+1}" />
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束性とダグラス-ラクフォード法との関係</h2>

            <p>
                ADMMがなぜ収束するのか、また他の分割アルゴリズムとどのような関係にあるのかを探ります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.6-1">
                <p>
                    <InlineMath math="f" /> と <InlineMath math="g" /> が閉真凸関数であり、問題の非制約最小値が存在し、かつ強双対性が成り立つ（例えばスレーターの条件を満たす）ならば、任意の <InlineMath math="\rho > 0" /> に対して、ADMMの反復によって生成される列は以下の性質を持ちます。
                </p>
                <ol className="list-decimal list-inside">
                    <li>残差の収束：<InlineMath math="Ax_k + Bz_k - c \to 0" /></li>
                    <li>目的関数値の収束：<InlineMath math="f(x_k) + g(z_k) \to p^*" /> （<InlineMath math="p^*" /> は最適値）</li>
                    <li>双対変数の収束：<InlineMath math="y_k = \rho u_k \to y^*" /> （<InlineMath math="y^*" /> は双対最適解）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ADMMの収束証明は、双対空間におけるダグラス-ラクフォード（Douglas-Rachford）分割法と等価であることを示すことで行われます。非拡大写像の不動点反復に帰着させることで、関数解析的な手法（特にクラシチンスキー・マンの定理）を用いて収束が保証されます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この双対的な関係性をより具体的に確認しましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 7.6-1">
                <p>
                    問題が <InlineMath math="\min f(x) + g(x)" /> の形（すなわち <InlineMath math="A = I, B = -I, c = 0" />）である場合、ADMMの反復は双対問題に対するダグラス-ラクフォード分割法と完全に等価になります。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ADMMの3つのステップを、双対変数 <InlineMath math="u" /> に注目して書き換えます。<InlineMath math="T_{DR}" /> を反映作用素の合成として定義すると、<InlineMath math="u_{k+1} = T_{DR}(u_k)" /> の形に整理できることが計算により示されます。これにより、ADMMは主空間での交互最小化であると同時に、双対空間での近接点法の変種であることがわかります。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.6-2 (LASSO への ADMM 適用)">
                <p>
                    機械学習で重要なLASSO問題：<InlineMath math="\min \frac{1}{2}\|Ax-b\|^2 + \lambda\|x\|_1" /> に対してADMMを適用します。
                    変数分離のために、<InlineMath math="f(x) = \frac{1}{2}\|Ax-b\|^2" />、<InlineMath math="g(z) = \lambda\|z\|_1" />、制約を <InlineMath math="x = z" /> とします。
                </p>
                <div className="space-y-2 mt-2">
                    <BlockMath math="x_{k+1} = (A^TA + \rho I)^{-1}(A^Tb + \rho(z_k - u_k))" />
                    <BlockMath math="z_{k+1} = \mathrm{prox}_{(\lambda/\rho)\|\cdot\|_1}(x_{k+1} + u_k)" />
                    <BlockMath math="u_{k+1} = u_k + x_{k+1} - z_{k+1}" />
                </div>
                <p>
                    <InlineMath math="x" /> の更新は線形連立方程式の解法（行列 <InlineMath math="A^TA + \rho I" /> は定数なので事前分解可能）、<InlineMath math="z" /> の更新は各成分独立な軟閾値処理となり、非常に効率的に計算できます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ADMMの分散最適化への応用">
                <p>
                    ADMMの最大の強みは、目的関数が多数の関数の和に分解できる場合、<InlineMath math="x" />-更新ステップを並列・分散処理できる点にあります。例えば、巨大なデータセットを複数のマシンに分割して保持している場合、各マシンがローカルなデータで最適化を行い（コンセンサスADMM）、その結果を統合するというアーキテクチャが自然に構築できます。これは現代の大規模機械学習システムにおいて不可欠な技術となっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ADMMは、<InlineMath math="\min f(x) + g(z)" /> subject to <InlineMath math="Ax + Bz = c" /> という形の問題に対し、拡大ラグランジュ関数を用いて変数を交互に最適化する手法である。</li>
                    <li>複雑な最適化問題を、近接作用素や線形方程式系などの解きやすい部分問題に分解できる。</li>
                    <li>ADMMは双対空間におけるダグラス-ラクフォード分割法と数学的に等価であり、適切な条件下で大域的収束が保証される。</li>
                    <li>並列分散計算との相性が良く、大規模データ解析における標準的なツールとなっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
