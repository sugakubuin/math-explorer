import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexityAndApplication() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ユークリッドの互除法が優れているのは、単に正しい答えを出すからだけではありません。
                どんなに巨大な数が入力されても、「驚くほど少ない回数」で計算が終わるという、<strong>計算量</strong>の観点からの驚異的な効率性にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラメの定理と計算量</h2>

            <p>
                19 世紀の数学者ガブリエル・ラメは、互除法に必要な割り算の回数が、入力された数の桁数とどのように関係するかを示しました。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ラメの定理)">
                <p>
                    <InlineMath math="a > b > 0" /> とする。 <InlineMath math="\gcd(a, b)" /> を求めるユークリッドの互除法のステップ数は、
                    小さい方の数 <InlineMath math="b" /> の十進桁数を <InlineMath math="d" /> とすると、
                    <BlockMath math="\text{ステップ数} \le 5d" />
                    回以下である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    互除法の各ステップにおける商を <InlineMath math="q_i \ge 1" />、余りを <InlineMath math="r_i" /> とする。
                    ステップ数を <InlineMath math="n" /> とすると、 <InlineMath math="r_n = 0" /> かつ <InlineMath math="r_{n-1} \ge 1 = F_2" /> である。
                    逆向きに評価すると、
                    <BlockMath math="\begin{aligned} r_{n-1} &\ge 1 = F_2 \\ r_{n-2} &\ge r_{n-1} + 1 \ge F_2 + F_1 = F_3 \\ r_{n-3} &\ge r_{n-2} + r_{n-1} \ge F_3 + F_2 = F_4 \\ & \vdots \\ b &\ge r_1 q_2 + r_2 \ge F_n + F_{n-1} = F_{n+1} \end{aligned}" />
                    すなわち <InlineMath math="b \ge F_{n+1}" /> が成り立つ。フィボナッチ数の性質より <InlineMath math="F_{n+1} > \phi^{n-1}" /> （ <InlineMath math="\phi" /> は黄金比）であり、
                    これの対数をとることで <InlineMath math="n-1 < \log_{\phi} b" /> が導かれる。
                    <InlineMath math="\log_{\phi} 10 \approx 4.78 < 5" /> であることから、 <InlineMath math="n \le 5 d" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="計算量の意味">
                <p>
                    この定理は、桁数に対してステップ数が<strong>線形的</strong>にしか増えないことを意味します。
                    例えば、100 桁の巨大な数どうしであっても、高々 500 回程度の割り算で答えにたどり着くことができます。
                    これは、現代の暗号システム（RSA など）において巨大な整数の gcd を瞬時に計算できることの物理的根拠となっています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最悪ケース：フィボナッチ数列</h2>

            <p>
                互除法にとって、最も手間がかかる（なかなか余りが小さくならない）のはどのようなケースでしょうか。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (フィボナッチ数と最悪ケース)">
                <p>
                    同じ桁数の入力の中で、互除法のステップ数が最大になるのは、連続する2つのフィボナッチ数
                    <InlineMath math="F_{n+1}" /> と <InlineMath math="F_n" /> を入力した場合である。
                    <br />※ フィボナッチ数列： <InlineMath math="F_1=1, F_2=1, F_3=2, F_4=3, F_5=5, F_6=8, \dots" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ラメの定理の証明において、 <InlineMath math="b \ge F_{n+1}" /> という下限を与えた。
                    この等号が成り立つのは、すべてのステップにおいて商が最小の <InlineMath math="q_i = 1" /> （最後だけは割り切るために 2 以上だが、フィボナッチ数では 2 ）となる場合である。
                    具体的に連続するフィボナッチ数 <InlineMath math="F_{n+1}, F_n" /> を入力すると、
                    <BlockMath math="F_{n+1} = 1 \cdot F_n + F_{n-1}, \quad F_n = 1 \cdot F_{n-1} + F_{n-2}, \dots" />
                    となり、商がすべて 1 の連鎖（最後は <InlineMath math="F_3 = 2 \cdot F_2 + 0" /> ）として現れる。
                    このとき余りの減少が最も緩やかになるため、ステップ数が最大となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (フィボナッチ数の計算)">
                <p>
                    <InlineMath math="\gcd(F_6, F_5) = \gcd(8, 5)" /> を計算してみる。
                    <BlockMath math="\begin{aligned} 8 &= 5 \times 1 + 3 \\ 5 &= 3 \times 1 + 2 \\ 3 &= 2 \times 1 + 1 \\ 2 &= 1 \times 2 + 0 \end{aligned}" />
                    すべての商が 1 （最後だけ 2 ）になり、余りの減り方が極めて緩やかであることが分かる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実装のイメージ</h2>

            <p>
                コンピュータで互除法を実装する際の基本的なロジック（擬似コード）を以下に示します。
                この簡潔さこそが、互除法の真骨頂です。
            </p>

            <ContentBox type="remark" title="擬似コード">
                <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-sm">
                    function gcd(a, b):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;while b != 0:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = a % b<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = b<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b = temp<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return a
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>高速性</strong>： どんなに大きな数に対しても、桁数の数倍程度の回数で計算が完結する。</li>
                    <li><strong>フィボナッチ数の役割</strong>： 黄金比に関連するフィボナッチ数は、互除法を「最も苦しめる」特殊な数である。</li>
                    <li><strong>理論と実践</strong>： 数千年前の知恵が、そのまま現代の最高速アルゴリズムとして実用されている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
