import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PicardLindelofTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                いよいよ、微分方程式の解の「存在」と「一意性」を同時に保証する強力な主定理が登場します。
                この定理は、右辺の関数が「連続」かつ「リプシッツ連続」であれば、局所的に解が必ず一つだけ存在することを保証します。
                証明の第一歩は、微分方程式を扱いやすい「積分方程式」へと書き換えることです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分方程式への変換</h2>

            <p>
                微分方程式は「変化のルール」を記述しますが、解析学的には「積み重ね（積分）」の形にしたほうが級数の収束などを扱いやすくなります。
            </p>

            <ContentBox type="lemma" title="Lemma 2.3-1 (積分方程式への等価変形)">
                <p>
                    初期値問題
                    <BlockMath math="\begin{cases} \dfrac{dy}{dx} = f(x, y) \\ y(x_0) = y_0 \end{cases}" />
                    を解くことは、次の<strong>積分方程式</strong>を解くことと同値である：
                    <BlockMath math="y(x) = y_0 + \int_{x_0}^{x} f(t, y(t)) \, dt" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(<InlineMath math="\implies" />) 方向：</strong>
                    微分方程式の両辺を <InlineMath math="x_0" /> から <InlineMath math="x" /> まで積分すると：
                    <BlockMath math="\int_{x_0}^{x} \frac{dy}{dt} dt = \int_{x_0}^{x} f(t, y(t)) dt" />
                    微積分学の基本定理より、左辺は <InlineMath math="y(x) - y(x_0)" /> である。初期条件 <InlineMath math="y(x_0) = y_0" /> を用いて整理すれば、積分方程式を得る。
                    <br />
                    <strong>(<InlineMath math="\impliedby" />) 方向：</strong>
                    積分方程式の両辺を <InlineMath math="x" /> で微分すると、右辺の第 1 項は定数なので 0 となり、第 2 項（積分の微分）から <InlineMath math="f(x, y(x))" /> が出る。
                    また、定義式に <InlineMath math="x = x_0" /> を代入すると直ちに <InlineMath math="y(x_0) = y_0" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ピカール・リンデレーフの定理</h2>

            <p>
                この定理は、数学的な厳密さと物理的な決定論（初期状態が決まれば未来が一意に定まる）を結びつける金字塔です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (ピカール・リンデレーフの定理)">
                <p>
                    領域 <InlineMath math="D = \{ (x, y) \mid |x - x_0| \leq a, |y - y_0| \leq b \}" /> 上において、
                    関数 <InlineMath math="f(x, y)" /> が次の 2 つの条件を満たすとする：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="f" /> は <InlineMath math="D" /> 上で<strong>連続</strong>である。</li>
                    <li><InlineMath math="f" /> は <InlineMath math="D" /> 上で <strong><InlineMath math="y" /> に関してリプシッツ連続</strong>である。</li>
                </ol>
                <p className="mt-4">
                    このとき、初期値問題の解 <InlineMath math="y(x)" /> は、 <InlineMath math="x_0" /> のある近傍において<strong>ただ一つ存在する</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 積分方程式への変換：</strong>
                    Lemma 2.3-1 より、初期値問題を解くことは積分方程式
                    <BlockMath math="y(x) = y_0 + \int_{x_0}^{x} f(t, y(t)) \, dt" />
                    の解（不動点）を見つけることと同値である。
                </p>
                <p className="mt-4">
                    <strong>2. 解の存在と一意性：</strong>
                    この積分方程式の右辺を作用素 <InlineMath math="T" /> と見なす。
                    <InlineMath math="f" /> が連続かつリプシッツ連続であるとき、適切な閉区間 <InlineMath math="I = [x_0-h, x_0+h]" /> を選ぶことで、
                    作用素 <InlineMath math="T" /> は連続関数の成す完備距離空間上の<strong>縮小写像</strong>となる。
                    したがって、縮小写像の原理により、ただ一つの不動点（＝微分方程式の解）が存在する。
                </p>
                <p className="mt-4 text-slate-500 italic">
                    ※ 縮小写像の具体的な構成と収束の証明については、次の §2.4 で詳しく扱う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                「ただ一つ存在する」という言葉には、<strong>存在 (Existence)</strong> と <strong>一意性 (Uniqueness)</strong> の両方の意味が込められています。
            </p>

            <ContentBox type="remark" title="局所的な主張であること">
                <p>
                    この定理が保証するのは、あくまで初期点 <InlineMath math="x_0" /> の「ごく近く」での解の存在です。
                    §2.1 で見た「解の爆発」の例 <InlineMath math="y' = y^2" /> のように、遠くへ行くと解が途切れてしまう可能性は依然として残ります。
                    大域的に解が存在するためには、さらなる条件が必要になります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1 (定理の適用)">
                <p>
                    §2.2 で見た <InlineMath math="y' = y^{1/3}, y(0) = 0" /> は、連続ではありますが、 <InlineMath math="y=0" /> の近傍でリプシッツ連続ではありませんでした。
                    その結果、この定理の条件を満たさず、一意性が破れたことが理解できます。
                    対照的に、 <InlineMath math="y' = y, y(0) = 1" /> は全域でリプシッツ連続であり、この定理によって解 <InlineMath math="y = e^x" /> の一意存在が保証されます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>積分方程式への書き換え</strong>： 微分問題は積分問題に等価変形でき、解析が容易になる。</li>
                    <li><strong>ピカール・リンデレーフの定理</strong>： 連続性 ＋ リプシッツ性 ＝ 解の一意存在。</li>
                    <li><strong>局所性</strong>： 定理の保証範囲は「初期点の近傍」に限られる。</li>
                    <li><strong>一意性の威力</strong>： 科学的な予測の安定性を数学的に支える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
