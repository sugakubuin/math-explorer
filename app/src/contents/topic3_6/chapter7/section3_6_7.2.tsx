import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LagrangeMultipliers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                制約条件なしの変分問題であれば、第一変分を直接計算してオイラー＝ラグランジュ方程式を導くことができました。
                しかし、等周的な制約がある場合には、すべての変分を自由に取ることはできず、「制約を保つ範囲」でのみ変分を考える必要があります。
                本節では、この問題を解決する<b>ラグランジュ乗数法</b>について学び、円や懸垂線という具体的な解を導出します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュ乗数の導入</h2>

            <p className="leading-relaxed">
                変分問題におけるラグランジュ乗数法は、有限次元の微積分における手法と驚くほど似た構造を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (制約付き変分問題の E-L 方程式)">
                <p>
                    制約条件 <InlineMath math="G[u] = \int_a^b g(x, u, u') \, dx = \ell" /> の下で、汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> を極値にする関数 <InlineMath math="u(x)" /> は、ある定数 <InlineMath math="\lambda" /> （ラグランジュ乗数）に対して、
                    次のように定義される補助汎関数
                    <BlockMath math="J^\lambda [u] = J[u] - \lambda G[u] = \int_a^b (F - \lambda g) \, dx" />
                    に関する（無制約の）オイラー＝ラグランジュ方程式
                    <BlockMath math="\frac{\partial (F - \lambda g)}{\partial u} - \frac{d}{dx} \left( \frac{\partial (F - \lambda g)}{\partial u'} \right) = 0" />
                    を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    極値関数を <InlineMath math="u^*(x)" /> とし、それに 2 つのパラメータ <InlineMath math="\epsilon_1, \epsilon_2" /> を持つ変分 <InlineMath math="\eta_1, \eta_2" /> を加えた <InlineMath math="u = u^* + \epsilon_1 \eta_1 + \epsilon_2 \eta_2" /> を考える。
                    制約条件 <InlineMath math="G(u) = \ell" /> を維持しながら <InlineMath math="J(u)" /> を極大化する条件から、有限次元の場合と同様に、勾配（第一変分）ベクトル <InlineMath math="\delta J" /> と <InlineMath math="\delta G" /> が平行である、すなわち
                    <BlockMath math="\delta J = \lambda \delta G" />
                    が成り立つような定数 <InlineMath math="\lambda" /> の存在が示される。
                    これを任意変分に対して成立させると、補助汎関数 <InlineMath math="F - \lambda g" /> に対する通常の E-L 方程式が得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この手法を用いると、前節で挙げた古典的な問題の正体が明らかになります。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (等周問題：面積最大化から「円」の導出)">
                <p>
                    面積 <InlineMath math="J = \int y \, dx" /> を周長一定 <InlineMath math="G = \int \sqrt{1 + (y')^2} \, dx = \ell" /> の下で最大化しよう。
                    補助関数は <InlineMath math="F - \lambda g = y - \lambda \sqrt{1 + (y')^2}" /> となる。
                    これに対する E-L 方程式は、
                    <BlockMath math="1 - \frac{d}{dx} \left( -\frac{\lambda y'}{\sqrt{1 + (y')^2}} \right) = 0 \implies \frac{\lambda y'}{\sqrt{1 + (y')^2}} = x - c" />
                    これを <InlineMath math="y'" /> について解き、さらに積分して定数 <InlineMath math="\lambda" /> を半径に対応させれば、
                    <BlockMath math="(x - x_0)^2 + (y - y_0)^2 = \lambda^2" />
                    が得られる。これはすなわち、定数曲率を持つ<b>円</b>の方程式である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な等周問題の解</h2>

            <p className="leading-relaxed">
                次に、物理的な懸垂線（カテナリー）を導出してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-2 (懸垂線の導出)">
                <p>
                    ポテンシャル最小化（重心高さ最大）<InlineMath math="J = \int y \sqrt{1+(y')^2} \, dx" /> を長さ一定 <InlineMath math="G = \int \sqrt{1+(y')^2} \, dx = \ell" /> の下で解く。
                    補助関数は <InlineMath math="J^\lambda = \int (y - \lambda) \sqrt{1 + (y')^2} \, dx" /> となる。
                    これは <InlineMath math="x" /> を陽に含まない（自律系）ので、ベルトラミの公式を用いると、
                    <BlockMath math="(y - \lambda) \sqrt{1 + (y')^2} - y' \left( \frac{(y - \lambda) y'}{\sqrt{1 + (y')^2}} \right) = c \ (\text{定数})" />
                    となる。これを整理すると、
                    <BlockMath math="\frac{y - \lambda}{\sqrt{1 + (y')^2}} = c \implies y - \lambda = c \cosh \left( \frac{x - x_0}{c} \right)" />
                    が得られる。これが<b>懸垂曲線（カテナリー）</b>と呼ばれる関数である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ラグランジュ乗数の解釈と感度分析">
                <p>
                    定数 <InlineMath math="\lambda" /> には、単なる計算の便宜上の値を超えた意味があります。
                    数学的には、制約値 <InlineMath math="\ell" /> がわずかに変化したときの極値の変化率、すなわち感度（Sensitivity）を表しています。
                    物理学や経済学などではこれが「限界費用」や「化学ポテンシャル」、「温度」といった具体的な量として解釈されることがあり、同一の形式が世界を記述する共通の言葉となっていることが分かります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これまでは制約が 1 つの場合を見てきましたが、制約が複数ある場合や、積分形式ではない制約（点制約）がある場合も、同様にラグランジュ乗数を増やすことで対処可能です。
                次節では、その一般化について簡単に紹介します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>等周制約付きの変分問題は、補助汎関数 <InlineMath math="J^\lambda = J - \lambda G" /> の導入により通常の変分問題に還元される。</li>
                    <li>この手法によって、円の面積最大性や物理的な懸垂曲線の形状を数学的に厳密に導出できる。</li>
                    <li>ラグランジュ乗数法は、有限次元の最適化における手法を無限次元（関数空間）へと美しく拡張したものである。</li>
                    <li>ラグランジュ乗数 <InlineMath math="\lambda" /> 自体も、系全体のバランスや感度を記述する重要な意味を持っている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
