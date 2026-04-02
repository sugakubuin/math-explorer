import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GreensFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の定数変化法では、特殊解を求めるために各点ごとに異なる計算を行いました。
                しかし、もし「方程式の形そのもの」に付随した便利な関数をあらかじめ用意できれば、右辺 <InlineMath math="q(x)" /> がどんな形であっても、単なる積分だけで解を表現できるはずです。
                この「魔法の関数」が<strong>グリーン関数 (Green's function)</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グリーン関数の考え方</h2>

            <p>
                非斉次項 <InlineMath math="q(x)" /> を、各点における微小な「衝撃（インパルス）」の集まりと考え、それらに対する応答を足し合わせるという視点を導入します。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (2階初期値問題のグリーン関数)">
                <p>
                    2 階線形微分方程式 <InlineMath math="Ly = a_2 y'' + a_1 y' + a_0 y = q(x)" /> において、
                    斉次基本解系を <InlineMath math="\{\phi_1, \phi_2\}" /> とし、ロンスキアンを <InlineMath math="W(t)" /> とする。
                    この方程式の<strong>グリーン関数</strong>を次のように構成する：
                    <BlockMath math="G(x, t) = \frac{\phi_1(t)\phi_2(x) - \phi_2(t)\phi_1(x)}{a_2(t)W(t)} \quad (t \leq x)" />
                    （ <InlineMath math="t > x" /> では <InlineMath math="G(x, t) = 0" /> とする。）
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 5.3-1 (グリーン関数による特殊解の表示)">
                <p>
                    初期条件 <InlineMath math="y(x_0) = 0, y'(x_0) = 0" /> を満たす初期値問題の解は、グリーン関数を用いて次のように一括して表される：
                    <BlockMath math="y(x) = \int_{x_0}^x G(x, t) q(t) \ dt" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定数変化法（定理 5.2-1）の公式より、2 階の場合の特殊解は：
                    <BlockMath math="v_1'(t) = -\frac{\phi_2(t)q(t)}{a_2(t)W(t)}, \quad v_2'(t) = \frac{\phi_1(t)q(t)}{a_2(t)W(t)}" />
                    これらを初期条件 <InlineMath math="v_i(x_0) = 0" /> として <InlineMath math="x_0" /> から <InlineMath math="x" /> まで積分すると：
                    <BlockMath math="\begin{aligned} y_p(x) &= \phi_1(x) \int_{x_0}^x v_1'(t) dt + \phi_2(x) \int_{x_0}^x v_2'(t) dt \\ &= \int_{x_0}^x \frac{\phi_1(t)\phi_2(x) - \phi_2(t)\phi_1(x)}{a_2(t)W(t)} q(t) dt \end{aligned}" />
                    積分の中身がちょうどグリーン関数の定義と一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">物理的意味：インパルス応答</h2>

            <ContentBox type="remark" title="衝撃によるシステムの励起">
                <p>
                    物理学においては、グリーン関数 <InlineMath math="G(x, t)" /> は「時刻 <InlineMath math="t" /> に加えられた単位衝撃（デルタ関数入力）に対する、時刻 <InlineMath math="x" /> での応答」を意味します。
                    非斉次項 <InlineMath math="q(t)" /> を各時刻における衝撃の強さと見なせば、解 <InlineMath math="y(x)" /> は過去のすべての衝撃の「名残」を重み付きで合計したものと解釈できます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.3-1 (調和振動子のグリーン関数)">
                <p><strong>問題：</strong> <InlineMath math="y'' + y = q(x)" /> （初期値 0）のグリーン関数を求めよ。</p>
                <div className="mt-4 space-y-4">
                    <p><strong>Step 1：基本解とロンスキアン</strong>
                        <br /><InlineMath math="\phi_1 = \cos x, \phi_2 = \sin x, W = 1, a_2 = 1" />。
                    </p>
                    <p><strong>Step 2：定義への代入</strong>
                        <br />加法定理 <InlineMath math="\sin(x-t) = \sin x \cos t - \cos x \sin t" /> を用いると：
                        <BlockMath math="G(x, t) = \cos t \sin x - \sin t \cos x = \sin(x - t)" />
                    </p>
                    <p><strong>Step 3：解の構成</strong>
                        <br />任意の入力 <InlineMath math="q(x)" /> に対して、解は次のように求まる：
                        <BlockMath math="y(x) = \int_{0}^x \sin(x - t) q(t) \ dt" />
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>グリーン関数</strong>： 方程式そのものが持つ特性を凝縮した「積分核」。</li>
                    <li><strong>計算の効率化</strong>： 一度グリーン関数を求めてしまえば、あとは積分するだけで様々な右辺に対応できる。</li>
                    <li><strong>因果律</strong>： 解が過去（ <InlineMath math="t \leq x" /> ）の状態にのみ依存することを積分範囲が示している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
