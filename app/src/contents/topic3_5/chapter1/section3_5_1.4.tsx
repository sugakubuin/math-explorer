import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BesselEquationsAndFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                円柱座標系や多次元の波動方程式を扱う際、中心的な役割を果たすのが「ベッセル方程式」です。
                この方程式は確定特異点を持っており、そこでのフロベニウス解が特殊関数の中でも極めて重要な「ベッセル関数」となります。
                本節では、ベッセル関数の導出とその応用について深く探究します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベッセル方程式の解の構成</h2>

            <p>
                円対称な物理現象の解析から導かれる、次の標準形の方程式を考えます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (ベッセル方程式)">
                <p>
                    次の微分方程式を次数 <InlineMath math="\nu \geq 0" /> の<b>ベッセル方程式</b>と呼ぶ。
                    <BlockMath math="x^2 y'' + xy' + (x^2 - \nu^2)y = 0" />
                    点 <InlineMath math="x = 0" /> は確定特異点であり、指標方程式は <InlineMath math="\rho^2 - \nu^2 = 0" /> すなわち <InlineMath math="\rho = \pm \nu" /> である。
                </p>
            </ContentBox>

            <p>
                指標 <InlineMath math="\rho = \nu" /> に対応するフロベニウス解を正規化したものが、第一種ベッセル関数となります。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (第一種ベッセル関数)">
                <p>
                    次数 <InlineMath math="\nu" /> の<b>第一種ベッセル関数</b> <InlineMath math="J_\nu(x)" /> は、次の無限級数で定義される。
                    <BlockMath math="J_\nu(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \, \Gamma(m+\nu+1)} \left( \frac{x}{2} \right)^{2m+\nu}" />
                    ここで <InlineMath math="\Gamma" /> はガンマ関数である。
                </p>
            </ContentBox>

            <p>
                実際に係数を求めて、この級数の形を導いてみましょう。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = x^\nu \sum a_m x^m" /> を代入すると、係数に関する漸化式
                    <BlockMath math="\begin{aligned} a_m [ (m+\nu)^2 - \nu^2 ] &+ a_{m-2} = 0 \\ &\implies m(m+2\nu) a_m = -a_{m-2} \end{aligned}" />
                    が得られる。奇数次の項はすべて 0 となり、<InlineMath math="m = 2k" /> とおくと
                    <BlockMath math="a_{2k} = - \frac{a_{2k-2}}{2^2 k(k+\nu)}" />
                    となる。これを繰り返し適用することで
                    <BlockMath math="a_{2k} = \frac{(-1)^k a_0}{4^k k! (\nu+1)(\nu+2)\cdots(\nu+k)}" />
                    が得られる。初期値 <InlineMath math="a_0 = \frac{1}{2^\nu \Gamma(\nu+1)}" /> と正規化することで、<InlineMath math="J_\nu(x)" /> の定義式を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                次数が 0 の場合の具体的な形を確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 1.4-1 (J_0(x) の計算)">
                <p>
                    次数 <InlineMath math="\nu = 0" /> のとき、<InlineMath math="\Gamma(m+1) = m!" /> である。よって定義に代入すると、
                    <BlockMath math="J_0(x) = \sum_{m=0}^\infty \frac{(-1)^m}{(m!)^2} \left( \frac{x}{2} \right)^{2m} = 1 - \frac{x^2}{4} + \frac{x^4}{64} - \dots" />
                    これを計算すると、<InlineMath math="J_0(0) = 1" /> であり、偶関数としての振る舞いを持つ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">漸化式・直交性と応用</h2>

            <p>
                ベッセル関数は、異なる次数の間に有用な微分・漸化関係を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (ベッセル関数の漸化式)">
                <p>
                    ベッセル関数について、次の関係式が成立する。
                    <BlockMath math="(x^\nu J_\nu(x))' = x^\nu J_{\nu-1}(x)" />
                    <BlockMath math="(x^{-\nu} J_\nu(x))' = -x^{-\nu} J_{\nu+1}(x)" />
                    これらから、次の漸化式が導かれる。
                    <BlockMath math="J_{\nu-1}(x) + J_{\nu+1}(x) = \frac{2\nu}{x} J_\nu(x)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="x^\nu J_\nu(x)" /> の級数表示を項別微分すると、
                    <BlockMath math="\begin{aligned} &\frac{d}{dx} \sum \frac{(-1)^m x^{2m+2\nu}}{m! \Gamma(m+\nu+1) 2^{2m+\nu}} \\ &\quad = \sum \frac{(-1)^m (2m+2\nu) x^{2m+2\nu-1}}{m! \Gamma(m+\nu+1) 2^{2m+\nu}} \end{aligned}" />
                    <InlineMath math="2m+2\nu = 2(m+\nu)" /> および <InlineMath math="\Gamma(m+\nu+1) = (m+\nu)\Gamma(m+\nu)" /> を用いて整理すると、次数が一つき合致することを確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                漸化式を用いると、<InlineMath math="J_0" /> から <InlineMath math="J_1" /> などを容易に生成できます。
            </p>

            <ContentBox type="example" title="Example 1.4-2 (J_1(x) の計算)">
                <p>
                    漸化式 <InlineMath math="J_0' = -J_1" /> を用いると、
                    <BlockMath math="J_1(x) = -J_0'(x) = \frac{x}{2} - \frac{x^3}{16} + \dots" />
                    と計算でき、<InlineMath math="J_1(0) = 0" /> となることがわかる。
                </p>
            </ContentBox>

            <p>
                ベッセル関数の最も強力な数学的性質の一つに、「直交性」があります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-2 (ベッセル関数の直交性)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> において、<InlineMath math="J_\nu(j_{\nu,m}) = 0" /> を満たす <InlineMath math="J_\nu" /> の正の零点を <InlineMath math="j_{\nu,m}, j_{\nu,n}" /> とすると、次の直交関係が成立する。
                    <BlockMath math="\int_0^1 x J_\nu(j_{\nu,m}x) J_\nu(j_{\nu,n}x) \, dx = 0 \quad (m \neq n)" />
                </p>
            </ContentBox>

            <p>
                この直交性は、フーリエ級数展開のベッセル関数版を可能にします。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベッセル方程式を整理すると、シュトゥルム・リウヴィル方程式（§5.2）の形に変形できる。
                    <BlockMath math="(x y')' + (x - \frac{\nu^2}{x}) y = 0" />
                    重み関数 <InlineMath math="w(x) = x" /> を持つこの固有値問題において、零点に対応する解は異なる固有値に属するため、一般理論によって直交性が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ベッセル関数がなければ、現代の物理学・工学は語れません。
            </p>

            <ContentBox type="remark" title="ベッセル関数の応用">
                <p>
                    円柱座標系における波動方程式や熱伝導方程式を解く際、半径方向の依存性は必ずベッセル方程式に従います。
                    ドラムの膜の振動、光ファイバーの電磁波伝搬、円柱状の建物の耐震解析など、円柱・球対称性を持つほぼすべての物理問題にベッセル関数が登場します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ベッセル方程式</b>：円対称な系に現れる 2 階微分方程式。</li>
                    <li><b>第一種ベッセル関数</b>：確定特異点における主要な解。</li>
                    <li><b>漸化式</b>：異なる次数の <InlineMath math="J_\nu" /> の間を結び、計算を効率化する。</li>
                    <li><b>直交性</b>：フーリエ展開のように、複雑な関数をベッセル関数で展開する際の基礎。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
