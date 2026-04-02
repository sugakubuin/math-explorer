import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LaplaceControlSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ラプラス変換が最も華々しく活躍する分野が <b>制御工学 (Control Engineering)</b> です。システムの入出力をラプラス領域で記述することで、複雑な時間応答を「伝達関数」という一つの有理関数に集約し、システムの「安定性」や「設計」を代数的に議論できるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">伝達関数と安定性</h2>

            <p>
                システムの入力を <InlineMath math="u(t)" />、出力を <InlineMath math="y(t)" /> とし、すべての初期値がゼロであると仮定します。
            </p>

            <ContentBox type="definition" title="Definition 6.5-1 (伝達関数)">
                <p>
                    入力 <InlineMath math="u(t)" /> と出力 <InlineMath math="y(t)" /> のラプラス変換の比を <b>伝達関数 (Transfer Function)</b> と呼び、<InlineMath math="G(s)" /> で表す：
                </p>
                <BlockMath math="G(s) = \frac{Y(s)}{U(s)}" />
                <p>
                    これにより、出力は入力と伝達関数の積 <InlineMath math="Y(s) = G(s)U(s)" /> として代数的に求まる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-1 (積分器：1/s)">
                <p>
                    <InlineMath math="y'(t) = u(t)" /> で表される積分器の伝達関数は <InlineMath math="G(s) = \frac{1}{s}" /> です。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>インパルス入力 <InlineMath math="U(s)=1" /> に対して、出力は <InlineMath math="Y(s)=1/s \implies y(t)=1" /> （単位ステップ）となる。</li>
                    <li>極 <InlineMath math="s=0" /> は安定性の境界に位置し、入力が止まった後も値が保持される。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="極の配置とシステム安定性">
                <p>
                    伝達関数 <InlineMath math="G(s)" /> の極（分母 <InlineMath math="Q(s)=0" /> の根）の実部は、システムの <b>安定性</b> を決定します。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><b>すべての極の <InlineMath math="\text{Re}(s) < 0" /></b>：安定。インパルス応答は時間とともにゼロに収束する。</li>
                    <li><b>一つでも極の <InlineMath math="\text{Re}(s) > 0" /></b>：不安定。出力が発散する。</li>
                    <li><b>虚軸上の極 (<InlineMath math="\text{Re}(s) = 0" />)</b>：境界的。一定振幅で振動し続けるか、一定値に留まる。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フィードバック制御と設計</h2>

            <p>
                外界からの攪乱や特性の変化に強いシステムを作るため、出力を入力側に戻して補正を行う <b>フィードバック制御</b> が広く用いられます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.5-3 (閉ループ伝達関数)">
                <p>
                    フォワードゲイン <InlineMath math="G(s)" /> とフィードバックゲイン <InlineMath math="H(s)" /> を持つ基本的な負フィードバック系の全体（閉ループ）の伝達関数 <InlineMath math="T(s)" /> は次のように与えられる：
                </p>
                <BlockMath math="T(s) = \frac{G(s)}{1 + G(s)H(s)}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    目標入力 <InlineMath math="R(s)" />、出力 <InlineMath math="Y(s)" />、誤差信号 <InlineMath math="E(s) = R(s) - H(s)Y(s)" /> とする。
                </p>
                <p>
                    出力は誤差にフォワードゲインを掛けたものなので、
                    <BlockMath math="Y(s) = G(s)E(s) = G(s) \{ R(s) - H(s)Y(s) \}" />
                </p>
                <p>
                    これを <InlineMath math="Y(s)" /> について整理すると：
                    <BlockMath math="\begin{aligned} Y(s) (1 + G(s)H(s)) &= G(s)R(s) \\ \implies \frac{Y(s)}{R(s)} &= \frac{G(s)}{1 + G(s)H(s)} \end{aligned}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-3 (比例制御と減衰の設計)">
                <p>
                    <InlineMath math="G(s) = \frac{1}{s(s+1)}" />（積分と一次遅れの直列）に比例ゲイン <InlineMath math="K" /> のフィードバックを掛けます。閉ループ伝達関数は：
                    <BlockMath math="T(s) = \frac{1/s(s+1)}{1 + K/s(s+1)} = \frac{1}{s^2 + s + K}" />
                </p>
                <p>
                    特性根 <InlineMath math="s^2 + s + K = 0" /> を調べると、<InlineMath math="K" /> の値によって振る舞いが変わります：
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="K < 1/4" />：過減衰（実根 2 つ）</li>
                    <li><InlineMath math="K = 1/4" />：臨界減衰（重根 1 つ）</li>
                    <li><InlineMath math="K > 1/4" />：不足減衰（複素共役根、振動的）</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 6.5-4 (閉ループシステムのステップ応答)">
                <p>
                    <InlineMath math="K=1" /> と設定した閉ループシステムに単位ステップ入力 <InlineMath math="R(s)=1/s" /> を与えると：
                    <BlockMath math="Y(s) = \frac{1}{s(s^2+s+1)}" />
                </p>
                <p>
                    これを逆変換すると、最終値 $1$ に向かって振動しながら収束するステップ応答が得られます。これがエレベーターの位置制御などの基本的なダイナミクスを決定しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.5 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>伝達関数は、初期値ゼロの下でシステムの入出力関係を複素平面上で表現したものである。</li>
                    <li>ラプラス領域での「極」の位置が、システムの安定性や時間応答の鋭さを支配している。</li>
                    <li>フィードバック構造を用いることで、システム全体の特性（極の位置）を設計者の望む形へと変更できる。</li>
                    <li>ラプラス変換は、物理学的な解析ツールとしてだけでなく、積極的な「設計ツール」としての役割を担っている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
