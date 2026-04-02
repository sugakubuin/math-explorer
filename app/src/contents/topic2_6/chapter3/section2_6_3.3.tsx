import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NonHomogeneousEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までは、右辺が 0 である「斉次方程式」の解の構造を見てきました。
                しかし、物理現象の多くは、外力や外部入力に相当する右辺の項 <InlineMath math="q(x)" /> を持つ「非斉次方程式」によって記述されます。
                本節では、非斉次方程式の解がどのように構成されるか、また、特殊解を見つけるための系統的な手法である「定数変化法」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非斉次方程式の一般解の構造</h2>

            <p>
                非斉次方程式のすべての解（一般解）は、斉次方程式の解と、たった一つの「特殊な解」を知っていれば完全に記述できます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (非斉次方程式の一般解)">
                <p>
                    非斉次線形微分方程式 <InlineMath math="Ly = q" /> の任意の解 <InlineMath math="y(x)" /> は、
                    対応する斉次方程式 <InlineMath math="Ly = 0" /> の一般解 <InlineMath math="y_h(x)" /> と、
                    非斉次方程式の何か一つの特殊解 <InlineMath math="y_p(x)" /> を用いて次のように表される：
                    <BlockMath math="y(x) = y_h(x) + y_p(x)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y" /> と <InlineMath math="y_p" /> がともに <InlineMath math="Ly = q" /> の解であるとする。
                    このとき、それらの差 <InlineMath math="u = y - y_p" /> について微分演算子 <InlineMath math="L" /> を作用させると、演算子の線形性より
                    <BlockMath math="Lu = L(y - y_p) = Ly - Ly_p = q - q = 0" />
                    となる。したがって、差 <InlineMath math="u" /> は斉次方程式 <InlineMath math="Ly = 0" /> の解である。
                    ゆえに、 <InlineMath math="y = u + y_p = y_h + y_p" /> と書ける。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定数変化法（2階の場合）</h2>

            <p>
                右辺の関数 <InlineMath math="q(x)" /> が複雑な場合でも、基本解系さえ分かれば特殊解を積分形式で求めることができる手法です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-2 (定数変化法の公式)">
                <p>
                    2 階線形方程式 <InlineMath math="y'' + p(x)y' + r(x)y = q(x)" /> の基本解系を <InlineMath math="\{\phi_1, \phi_2\}" /> とし、
                    それらのロンスキアンを <InlineMath math="W" /> とする。このとき、特殊解 <InlineMath math="y_p(x)" /> は次のように与えられる：
                    <BlockMath math="y_p(x) = v_1(x)\phi_1(x) + v_2(x)\phi_2(x)" />
                    ただし、 <InlineMath math="v_1, v_2" /> は次の条件を満たす関数である：
                    <BlockMath math="v_1' = -\frac{\phi_2 q}{W}, \quad v_2' = \frac{\phi_1 q}{W}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (導出)">
                <p>
                    特殊解を <InlineMath math="y = v_1\phi_1 + v_2\phi_2" /> と置く。微分すると
                    <BlockMath math="y' = (v_1'\phi_1 + v_2'\phi_2) + (v_1\phi_1' + v_2\phi_2')" />
                    ここで計算を簡略化するため、条件 <strong><InlineMath math="v_1'\phi_1 + v_2'\phi_2 = 0" /></strong> を課す。すると <InlineMath math="y' = v_1\phi_1' + v_2\phi_2'" /> となり、再度の微分は
                    <BlockMath math="y'' = (v_1'\phi_1' + v_2'\phi_2') + (v_1\phi_1'' + v_2\phi_2'')" />
                    これらを元の方程式に代入し、 <InlineMath math="\phi_i" /> が斉次解である事実を用いると、
                    <BlockMath math="v_1'\phi_1' + v_2'\phi_2' = q" />
                    が残る。先の条件と合わせて、 <InlineMath math="v_1', v_2'" /> に関する連立方程式を得る：
                    <BlockMath math="\begin{pmatrix} \phi_1 & \phi_2 \\ \phi_1' & \phi_2' \end{pmatrix} \begin{pmatrix} v_1' \\ v_2' \end{pmatrix} = \begin{pmatrix} 0 \\ q \end{pmatrix}" />
                    これをクラメルの公式（または逆行列）で解くと、ロンスキアン <InlineMath math="W" /> を用いて定理の公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (公式の適用)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y'' + y = \tan x" /> の一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：斉次方程式の解</strong>
                        <br />
                        斉次方程式 <InlineMath math="y'' + y = 0" /> の基本解系は <InlineMath math="\phi_1 = \cos x, \phi_2 = \sin x" /> であり、
                        ロンスキアンは <InlineMath math="W = \cos^2 x + \sin^2 x = 1" /> である。
                    </p>
                    <p>
                        <strong>ステップ 2：定数変化法の適用</strong>
                        <br />
                        公式より、
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><InlineMath math="v_1' = -\frac{\sin x \tan x}{1} = -\frac{\sin^2 x}{\cos x} = \cos x - \frac{1}{\cos x}" /></li>
                            <li><InlineMath math="v_2' = \frac{\cos x \tan x}{1} = \sin x" /></li>
                        </ul>
                    </p>
                    <p>
                        <strong>ステップ 3：積分と特殊解</strong>
                        <br />
                        積分すると、 <InlineMath math="v_1 = \sin x - \ln|\sec x + \tan x|" /> 、 <InlineMath math="v_2 = -\cos x" /> 。
                        特殊解は <InlineMath math="y_p = v_1 \cos x + v_2 \sin x = -\cos x \ln|\sec x + \tan x|" /> となる。
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>非斉次方程式の一般解</strong>： 「斉次解の和」＋「たった一つの特殊解」で決まる。</li>
                    <li><strong>定数変化法</strong>： 特殊解を見つけるための万能な公式。基本解系とロンスキアンを用いる。</li>
                    <li><strong>導出の妙</strong>： 任意定数を関数に置き換える（変化させる）ことで、方程式を積分可能な形に持ち込む。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
