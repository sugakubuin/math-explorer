import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VariationOfConstants() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の待機係数法は計算が非常に楽ですが、右辺 <InlineMath math="q(x)" /> が多項式・指数・三角関数の組み合わせである場合にしか使えません。
                たとえば <InlineMath math="q(x) = \sec x" /> や <InlineMath math="\tan x" />、あるいは係数が変数である場合には無力です。
                本節で学ぶ<strong>定数変化法 (Variation of Constants)</strong> は、斉次方程式の基本解系さえ分かっていれば、あらゆる右辺に対して（原理的には）特殊解を導出できる強力な手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">n 階定数変化法の導出</h2>

            <p>
                斉次解の任意定数 <InlineMath math="c_i" /> を変数 <InlineMath math="v_i(x)" /> に置き換えて、非斉次方程式の解を探します。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (定数変化法の一般公式)">
                <p>
                    <InlineMath math="n" /> 階線形微分方程式 <InlineMath math="Ly = q(x)" /> の斉次基本解系を <InlineMath math="\{\phi_1, \dots, \phi_n\}" /> とすると、特殊解は
                    <BlockMath math="y_p(x) = \sum_{k=1}^n v_k(x) \phi_k(x)" />
                    と表される。ここで係数関数の微分 <InlineMath math="v_k'(x)" /> は次の連立方程式（正規形式）の解である：
                    <BlockMath math="\begin{pmatrix} \phi_1 & \dots & \phi_n \\ \vdots & \ddots & \vdots \\ \phi_1^{(n-2)} & \dots & \phi_n^{(n-2)} \\ \phi_1^{(n-1)} & \dots & \phi_n^{(n-1)} \end{pmatrix} \begin{pmatrix} v_1' \\ \vdots \\ v_{n-1}' \\ v_n' \end{pmatrix} = \begin{pmatrix} 0 \\ \vdots \\ 0 \\ q(x)/a_n \end{pmatrix}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (2 階の場合)">
                <p>
                    <InlineMath math="y = v_1\phi_1 + v_2\phi_2" /> とおき、微分する：
                    <BlockMath math="y' = (v_1\phi_1' + v_2\phi_2') + (v_1'\phi_1 + v_2'\phi_2)" />
                    計算を簡略化するため、第 2 項を <strong><InlineMath math="v_1'\phi_1 + v_2'\phi_2 = 0" /></strong> （第 1 条件）と置く。
                    さらにもう一度微分すると：
                    <BlockMath math="y'' = (v_1\phi_1'' + v_2\phi_2'') + (v_1'\phi_1' + v_2'\phi_2')" />
                    これらを方程式 <InlineMath math="a_2 y'' + a_1 y' + a_0 y = q" /> に代入し、 <InlineMath math="\phi_i" /> が斉次解（ <InlineMath math="L\phi_i = 0" /> ）であることを用いると、
                    <BlockMath math="a_2 (v_1'\phi_1' + v_2'\phi_2') = q(x)" />
                    すなわち、 <strong><InlineMath math="v_1'\phi_1' + v_2'\phi_2' = q(x)/a_2" /></strong> （第 2 条件）を得る。
                    第 1, 2 条件を合わせると定理の行列形式が得られる。ロンスキアンが 0 でないため、 <InlineMath math="v_i'" /> は一意に求まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な計算</h2>

            <ContentBox type="example" title="Example 5.2-1 (待機係数法が使えない例)">
                <p><strong>問題：</strong> <InlineMath math="y'' + y = \sec x" /> の一般解を求めよ。</p>
                <div className="mt-4 space-y-4">
                    <p><strong>1. 斉次解：</strong> <InlineMath math="\phi_1 = \cos x, \phi_2 = \sin x" />。ロンスキアンは <InlineMath math="W = 1" />。</p>
                    <p><strong>2. v' の決定：</strong>
                        <BlockMath math="\begin{pmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{pmatrix} \begin{pmatrix} v_1' \\ v_2' \end{pmatrix} = \begin{pmatrix} 0 \\ \sec x \end{pmatrix}" />
                        クラメルの公式（あるいは逆行列）より：
                        <BlockMath math="\begin{aligned} v_1' &= \frac{\det \begin{pmatrix} 0 & \sin x \\ \sec x & \cos x \end{pmatrix}}{1} = -\tan x \\ v_2' &= \frac{\det \begin{pmatrix} \cos x & 0 \\ -\sin x & \sec x \end{pmatrix}}{1} = 1 \end{aligned}" />
                    </p>
                    <p><strong>3. 積分と解の構成：</strong>
                        <BlockMath math="v_1 = -\int \tan x \ dx = \ln |\cos x|, \quad v_2 = \int 1 \ dx = x" />
                        <br />特殊解： <InlineMath math="y_p = (\ln |\cos x|) \cos x + x \sin x" />
                        <br />一般解： <InlineMath math="y = c_1 \cos x + c_2 \sin x + \cos x \ln |\cos x| + x \sin x" />
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定数変化法の利点</strong>： 右辺 <InlineMath math="q(x)" /> がどんな形であっても、積分を実行できれば解ける。</li>
                    <li><strong>ロンスキアンの役割</strong>： 係数関数の微分 <InlineMath math="v_i'" /> を求める連立方程式の係数行列がロンスキアンそのものになる。</li>
                    <li><strong>計算コスト</strong>： 特殊解を求めるために積分が必要となるため、待機係数法が使える場合はそちらを優先するのが通例。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
