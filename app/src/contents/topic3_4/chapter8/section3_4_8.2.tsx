import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WaveEquationSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ熱方程式が「拡散」を記述するのに対し、<b>波動方程式</b>は「伝播」を記述します。弦の振動や音波、電磁波など、エネルギーが波形を保ったまま空間を伝わっていく現象を数学的に捉えることができます。
            </p>
            <p>
                フーリエ空間では、熱方程式の「減衰」とは対照的に、波動方程式は「振動」として現れます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ダランベール解の導出</h2>

            <p>
                無限に長い弦の振動を考えます。位置 <InlineMath math="x" />、時刻 <InlineMath math="t" /> における変位を <InlineMath math="u(x,t)" /> とすると、次の波動方程式が成立します。
            </p>

            <ContentBox type="example" title="Example 8.2-1 (波動方程式のフーリエ変換による解法)">
                <p>
                    次の初期値問題を考える：
                </p>
                <BlockMath math="\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}, \quad u(x,0) = f(x), \quad \frac{\partial u}{\partial t}(x,0) = g(x)" />
                <p>
                    空間変数 <InlineMath math="x" /> についてフーリエ変換を施すと：
                </p>
                <BlockMath math="\frac{d^2 \hat{u}(\xi,t)}{dt^2} = -c^2 \xi^2 \hat{u}(\xi,t)" />
                <p>
                    これは、角振動数 <InlineMath math="\omega = c|\xi|" /> の単振動の ODE である。初期条件 <InlineMath math="\hat{u}(\xi,0) = \hat{f}(\xi)" />, <InlineMath math="\hat{u}_t(\xi,0) = \hat{g}(\xi)" /> を用いて解くと：
                </p>
                <BlockMath math="\hat{u}(\xi,t) = \hat{f}(\xi) \cos(c\xi t) + \hat{g}(\xi) \frac{\sin(c\xi t)}{c\xi}" />
                <p>
                    この逆変換を施すことで、有名な <b>ダランベールの公式</b> が得られる。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 8.2-1 (ダランベールの公式)">
                <p>
                    波動方程式の解は、初期変位 <InlineMath math="f" /> と初期速度 <InlineMath math="g" /> を用いて次のように表される：
                </p>
                <BlockMath math="u(x,t) = \frac{1}{2}\{f(x+ct) + f(x-ct)\} + \frac{1}{2c} \int_{x-ct}^{x+ct} g(s) ds" />
                <p>
                    ここで <InlineMath math="c" /> は波の伝播速度である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    フーリエ変換後の解の第1項 <InlineMath math="\hat{f}(\xi) \cos(c\xi t)" /> の逆変換を考える：
                </p>
                <BlockMath math="\begin{aligned} \mathcal{F}^{-1}[\hat{f}(\xi) \cos(c\xi t)] &= \mathcal{F}^{-1} \left[ \hat{f}(\xi) \frac{e^{ic\xi t} + e^{-ic\xi t}}{2} \right] \\ &= \frac{1}{2} \{ f(x+ct) + f(x-ct) \} \end{aligned}" />
                <p>
                    ここで推移則（§3.1）を用いた。第2項についても同様に、<InlineMath math="\frac{\sin(c\xi t)}{c\xi} = \int_{-ct}^{ct} \frac{1}{2c} e^{-i\xi s} ds" /> の関係を利用して逆変換を計算すると積分項が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="三つの方程式の統一的な理解">
                <p>
                    フーリエ変換後の空間で見ると、三つの代表的な PDE の違いが極めて明確になります：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><b>熱方程式</b>：<InlineMath math="e^{-\kappa \xi^2 t}" />（<b>実数減衰</b>）。高周波ほど速く消える。</li>
                    <li><b>波動方程式</b>：<InlineMath math="\cos(c\xi t)" />（<b>純虚数振動</b>）。高周波ほど速く揺れるが、振幅は減衰しない。</li>
                    <li><b>ラプラス方程式</b>：<InlineMath math="e^{-|\xi|y}" />（<b>空間的な指数減衰</b>）。次節 §8.3 で詳述。</li>
                </ul>
                <p>
                    このように、フーリエ変換は PDE の物理的性質の本質を「周波数ごとの挙動」として浮き彫りにします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な初期条件と熱方程式との比較</h2>

            <p>
                波動方程式における波の移動を、熱方程式の拡散と比較してみましょう。
            </p>

            <ContentBox type="example" title="Example 8.2-2 (ガウス形初期値の分裂と伝播)">
                <p>
                    初期変位が原点の中心にあるガウス関数 <InlineMath math="f(x) = e^{-x^2}" />、初期速度 <InlineMath math="g(x) = 0" /> の場合を考える。
                </p>
                <p>
                    ダランベールの公式より、解は次のようになる：
                </p>
                <BlockMath math="u(x,t) = \frac{1}{2} e^{-(x+ct)^2} + \frac{1}{2} e^{-(x-ct)^2}" />
                <p>
                    これは、初期波形が半分ずつの高さに分裂し、速度 <InlineMath math="c" /> で左右にそれぞれ移動していく様子を表している。熱方程式と異なり、波形自体の形（広がり）は時間が経っても変化しない（分散がない場合）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.2-3 (熱方程式との決定的な違い：情報伝達速度)">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>熱方程式（無限速度）</b>：熱核は全空間で正であるため、原点の温度変化がどんなに遠くの点にも「瞬時に」伝わる（微小ながら影響が出る）。
                    </li>
                    <li>
                        <b>波動方程式（有限速度）</b>：点 <InlineMath math="x" /> における変位は、時刻 <InlineMath math="t = |x|/c" /> になるまで変化しない。つまり、物理的な影響（情報）が伝わるスピードには有限の限界 <InlineMath math="c" /> がある。
                    </li>
                </ul>
                <p>
                    この「伝搬速度が有限である」という性質こそが、特に対等性や信号処理において決定的な意味を持ちます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>空間フーリエ変換により、波動方程式は各周波数ごとの単振動問題に分解される。</li>
                    <li>ダランベールの公式は、初期波形が速度 $\pm c$ で移動する波の重ね合わせであることを示している。</li>
                    <li>熱方程式と異なり、波動方程式は「波形を保った伝播」と「有限の伝達速度」を特徴とする。</li>
                    <li>フーリエ空間での「振動」成分が、時間・空間領域での「波」の動きを記述している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
