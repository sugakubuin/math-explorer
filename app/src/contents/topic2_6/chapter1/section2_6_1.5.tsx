import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ClairautEquationsAndEnvelopes() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                通常、微分方程式の解は積分によって得られますが、その一方で「微分」によって解が得られる不思議な方程式があります。
                それが<strong>クレロー方程式</strong>です。
                この節では、解が直線族として現れる面白さと、その「包絡線」が特異解をなすという幾何学的な性質を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">クレロー方程式</h2>

            <p>
                未知関数の傾き <InlineMath math="p = dy/dx" /> を直接式の形に含んだ特殊な方程式を考えます。
            </p>

            <ContentBox type="definition" title="Definition 1.5-1 (クレロー方程式)">
                <p>
                    次の形の方程式を<strong>クレロー (Clairaut) 方程式</strong>と呼ぶ：
                    <BlockMath math="y = x\frac{dy}{dx} + f\left(\frac{dy}{dx}\right)" />
                    （しばしば <InlineMath math="p = dy/dx" /> を用いて <InlineMath math="y = xp + f(p)" /> と書かれる）
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.5-1 (クレロー方程式の解)">
                <p>
                    クレロー方程式 <InlineMath math="y = xp + f(p)" /> は、以下の 2 種類の解を持つ：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>一般解</strong>： 直線族 <InlineMath math="y = Cx + f(C)" /> （ <InlineMath math="C" /> は任意定数）
                    </li>
                    <li>
                        <strong>特異解</strong>： 方程式を <InlineMath math="p" /> で偏微分して得られる系 
                        <InlineMath math="x + f'(p) = 0" /> から <InlineMath math="p" /> を消去して得られる曲線。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = xp + f(p)" /> の両辺を <InlineMath math="x" /> で微分すると、
                    <BlockMath math="p = p + x\frac{dp}{dx} + f'(p)\frac{dp}{dx} \implies \frac{dp}{dx}(x + f'(p)) = 0" />
                    この積が 0 になるためには、次のいずれかが成り立つ必要がある：
                </p>
                <ol className="list-decimal list-inside mt-4 ml-4">
                    <li><InlineMath math="\frac{dp}{dx} = 0" />： すなわち <InlineMath math="p = C" /> （定数）。これを元の方程式に代入すると、直線 <InlineMath math="y = Cx + f(C)" /> を得る。</li>
                    <li><InlineMath math="x + f'(p) = 0" />： これと元の方程式 <InlineMath math="y = xp + f(p)" /> から <InlineMath math="p" /> を消去すると、定数を含まない曲線を得る。</li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">包絡線と幾何学的意味</h2>

            <p>
                特異解は、一般解である無数の直線たちすべてに接する「縁（ふち）」、すなわち<strong>包絡線 (Envelope)</strong> として現れます。
            </p>

            <ContentBox type="example" title="Example 1.5-1 (一般解と特異解の導出)">
                <p>
                    <strong>問題：</strong> クレロー方程式 <InlineMath math="y = xp - \frac{p^2}{4} \quad (p = y')" /> を解け。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：x での微分</strong>
                        <br />
                        両辺を <InlineMath math="x" /> で微分すると：
                        <BlockMath math="p = p + xp' - \frac{2p}{4}p' \implies p'\left(x - \frac{p}{2}\right) = 0" />
                    </p>
                    <p>
                        <strong>ステップ 2：一般解の導出</strong>
                        <br />
                        <InlineMath math="p' = 0" /> のとき、 <InlineMath math="p = C" /> （定数）。
                        これを元の方程式に代入して一般解を得る：
                        <BlockMath math="y = Cx - \frac{C^2}{4}" />
                    </p>
                    <p>
                        <strong>ステップ 3：特異解（包絡線）の導出</strong>
                        <br />
                        <InlineMath math="x - \frac{p}{2} = 0 \implies p = 2x" /> のとき、
                        これを元の方程式に代入すると：
                        <BlockMath math="y = x(2x) - \frac{(2x)^2}{4} = 2x^2 - x^2 = x^2" />
                    </p>
                    <p>
                        <strong>幾何学的解釈：</strong>
                        <br />
                        一般解は直線族であり、特異解 <InlineMath math="y = x^2" /> はそれらすべての直線に接する<strong>包絡線</strong>（放物線）となっています。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="特異解の不思議">
                <p>
                    特異解は「どの積分定数を選んでも得られない解」ですが、幾何学的には「すべての解曲線と情報を共有している不思議な解」です。
                    このような解の存在は、微分方程式が持つ情報の多様性を物語っています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>クレロー方程式</strong>： <InlineMath math="y = xp + f(p)" /> の形。代入だけで解ける特殊な ODE。</li>
                    <li><strong>二つの顔を持つ解</strong>： 直線族としての「一般解」と、それらに接する曲線の「特異解」。</li>
                    <li><strong>包絡線</strong>： 無数の直線が集まって一つの曲線の輪郭を描き出す、幾何学的に美しい現象。</li>
                    <li><strong>計算のコツ</strong>： 微分して <InlineMath math="dp/dx = 0" /> か、括弧の中が 0 かを調べる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
