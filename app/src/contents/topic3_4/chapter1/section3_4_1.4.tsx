import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GibbsPhenomenonAndFejerSummation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                不連続点を持つ関数をフーリエ級数で近似しようとすると、不連続点のすぐ近くで「ヒゲ」のような突起（オーバーシュート）が現れます。これは「ギブス現象」と呼ばれる不思議な現象で、項数をいくら増やしてもこの突起の大きさは消えません。本節では、この理由を解明し、より優れた近似手法である「フェエール総和法」によってこの問題をいかに克服できるかを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ギブス現象</h2>

            <p>
                まず、不連続点を持つ関数の代表である矩形波を用いて、ギブス現象という数学的な限界について見ていきましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ギブス現象)">
                <p>
                    不連続点を持つ関数のフーリエ部分和 <InlineMath math="S_N f" /> は、不連続点の両側で元の値よりも約 9% 大きい「オーバーシュート」を示す。
                </p>
                <p>
                    重要なのは、<InlineMath math="N \to \infty" /> としてもこのオーバーシュートの絶対的な高さはゼロにならず、一定の極限値に収束するという点である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概念的証明)">
                <p>
                    矩形波の部分和をディリクレ核との積分の形で書き下し、その極大値を微分によって求める。極大値を与える点 <InlineMath math="x_N = \pi/N" /> において、
                </p>
                <BlockMath math="\lim_{N \to \infty} S_N f(\pi/N) = \frac{1}{\pi} \int_0^{\pi} \frac{\sin t}{t} dt \approx 1.08949..." />
                <p>
                    この積分値は約 1.09 であり、元の波の高さ（1.0）に対して約 9% の超過分が発生していることが数学的に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                実際に項数を変えて比較してみると、その特異な性質がよくわかります。
            </p>

            <ContentBox type="example" title="Example 1.4-1 (S₁₀ と S₁₀₀ の比較)">
                <p>
                    矩形波の近似において、項数 <InlineMath math="N=10" /> と <InlineMath math="N=100" /> のグラフを描くと：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="N=10" /> のとき、不連続点の周囲に大きなオーバーシュートが見えます。</li>
                    <li><InlineMath math="N=100" /> に増やすと、オーバーシュートが現れる「幅」は非常に狭くなります。</li>
                    <li>しかし、オーバーシュートの「高さ」そのものは、どちらの場合も元の値に対して約 9% で変化しません。</li>
                </ul>
                <p>
                    このため、フーリエ級数は不連続点を含む関数に対して「一様収束（すべての点で一斉に近づくこと）」は達成できないことがわかります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ギブス現象の意味と実用上の問題">
                <p>
                    ギブス現象は、不連続な信号を有限の周波数成分で再現しようとする際に必ず発生するため、オーディオ信号処理や画像圧縮（JPEGなど）において「リンギング」と呼ばれる特有のノイズとして現れます。これを抑制するためには、単純なフーリエ級数ではなく、後述する窓関数（フェエール総和法など）の技術が必要となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フェエール総和法による一様収束の回復</h2>

            <p>
                ギブス現象の原因は、ディリクレ核の符号が激しく入れ替わり、不連続点付近で過剰に鋭いピークを作ってしまうことにありました。これを「平均化」することで解消するのが「フェエール総和法」です。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (チェザロ平均とフェエール核)">
                <p>
                    フーリエ部分和 <InlineMath math="S_0 f, \ldots, S_{N-1} f" /> の単純な算術平均を、<InlineMath math="N" /> 次のチェザロ平均（またはフェエール和） <InlineMath math="\sigma_N f" /> と呼ぶ。
                </p>
                <BlockMath math="\sigma_N f(x) = \frac{1}{N} \sum_{k=0}^{N-1} S_k f(x)" />
                <p>
                    これに対応する積分核 <InlineMath math="F_N(x)" /> を「フェエール核」と呼ぶ。
                </p>
                <BlockMath math="F_N(x) = \frac{1}{N} \frac{\sin^2(Nx/2)}{\sin^2(x/2)}" />
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (フェエール核の性質)">
                <p>
                    <InlineMath math="N=3" /> のフェエール核 <InlineMath math="F_3(x) = \frac{1}{3}(D_0 + D_1 + D_2)" /> を考えてみましょう。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>ディリクレ核 <InlineMath math="D_k" /> は負の値を取ることがありましたが、フェエール核は <InlineMath math="\sin^2" /> の形をしているため、常に <InlineMath math="F_N(x) \geq 0" />（非負）です。</li>
                    <li>この「負の値を取らない」という性質が、振動する成分を穏やかに打ち消し、一様な収束を可能にします。</li>
                </ul>
            </ContentBox>

            <p>
                フェエール核の優れた点を示すのが、次の「フェエールの定理」です。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-3 (フェエールの定理)">
                <p>
                    周期 <InlineMath math="2\pi" /> の連続関数 <InlineMath math="f" /> に対し、チェザロ平均 <InlineMath math="\sigma_N f" /> は元の関数 <InlineMath math="f" /> に一様収束する。
                </p>
                <BlockMath math="\lim_{N \to \infty} \sigma_N f(x) = f(x) \quad (\text{一様収束})" />
                <p>
                    これは、通常のフーリエ級数（<InlineMath math="S_N f" />）が連続関数であっても各点収束すらしない場合がある（条件が厳しい）のに対し、平均を取るだけで必ず一様収束するという驚くべき結果である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (アウトライン)">
                <p>
                    フェエール核が「アプロキシメート単位（単位元近似）」の 3 条件（積分値が 1、非負、中心以外の積分がゼロへ）を満たすことを用いる。
                </p>
                <BlockMath math="\sigma_N f(x) - f(x) = \frac{1}{2\pi} \int_{-\pi}^{\pi} (f(x-t) - f(x)) F_N(t) dt" />
                <p>
                    <InlineMath math="F_N" /> が非負であるため、積分を素直に評価でき、<InlineMath math="f" /> の連続性（一様連続性）から誤差が全体で一様に小さくなることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ギブス現象が起きていた不連続関数に対しても、フェエール総和法は有効です。
            </p>

            <ContentBox type="example" title="Example 1.4-3 (矩形波のチェザロ平均)">
                <p>
                    矩形波のフーリエ部分和 <InlineMath math="S_{10}" /> は約 9% のオーバーシュートを伴っていましたが、同じ次数のチェザロ平均 <InlineMath math="\sigma_{10}" /> を計算すると：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>不連続点付近のスパイクや鋭い振動が劇的に抑えられます。</li>
                    <li>波形は非常に滑らかに「なまって」見えますが、不自然な突起（ギブス現象）が消滅していることが確認できます。</li>
                </ul>
                <p>
                    「算術平均を取る（平滑化する）」という一見シンプルな操作が、無限級数の不都合な挙動を解消する魔法のような役割を果たしています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="フェエール核の非負性が鍵">
                <p>
                    数学的な解釈として、フェエール核の非負性は、近似に際して「不要な重み付けの反転」を行わないことを意味しています。工学でのアンチエイリアシングや、画像処理における Lanczos フィルタなどの設計思想にも、この「核の非負性やエネルギーの集中」をいかに制御するかというフェエール総和法の精神が受け継がれています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ギブス現象は、不連続点付近で約 9% のオーバーシュートが固定される現象である。</li>
                    <li>チェザロ平均（算術平均）を用いるフェエール総和法は、ギブス現象を解消するための有力な手段である。</li>
                    <li>フェエール核は非負であり、連続関数を一様収束させる優れた性質（フェエールの定理）を持つ。</li>
                    <li>単なる項の総和よりも、適切に「重みを付けて平均化する」ことの重要性が示唆される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
