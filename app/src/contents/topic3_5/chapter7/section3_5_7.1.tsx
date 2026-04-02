import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatEquationDerivation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章では、物理学において拡散現象を記述する最も重要な方程式である<b>熱方程式</b>（Heat Equation）を扱います。
                前章で学んだ波動方程式が「情報の波としての伝播」を記述したのに対し、熱方程式は「エネルギーの広がりと平滑化」を記述します。
                この性質の違いが、解の数学的・物理的挙動に決定的な差異をもたらします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">熱方程式の物理的導出</h2>

            <p className="leading-relaxed">
                熱方程式は、エネルギー保存則と、熱の流れに関する経験則である「フーリエの熱伝導則」を組み合わせることで導かれます。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (熱伝導則からの PDE 導出)">
                <p>
                    断面積が一定の細い棒における熱の伝わり方を考える。位置 <InlineMath math="x" />、時刻 <InlineMath math="t" /> での温度を <InlineMath math="u(x, t)" /> とする。
                </p>
                <p>
                    <b>フーリエの熱伝導則</b>によれば、熱流束 <InlineMath math="q" />（単位時間に単位断面積を通過する熱量）は、温度勾配に比例し、その方向は温度が下がる向きである：
                    <BlockMath math="q = -\kappa \frac{\partial u}{\partial x}" />
                    ここで <InlineMath math="\kappa" /> は熱伝導率である。微小区間 <InlineMath math="[x, x+\Delta x]" /> におけるエネルギー収支（エネルギー保存）を考えると、
                    <BlockMath math="\rho c_p \frac{\partial u}{\partial t} \Delta x \approx q(x, t) - q(x+\Delta x, t)" />
                    （<InlineMath math="\rho" />：密度、<InlineMath math="c_p" />：比熱）となる。
                    <InlineMath math="\Delta x \to 0" /> の極限を取り、<InlineMath math="k = \kappa / (\rho c_p)" /> とおくと、次の<b>熱方程式</b>が得られる：
                    <BlockMath math="\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}" />
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 7.1-1 (熱方程式 / 拡散方程式)">
                <p>
                    一般の次元において、温度分布や物質の濃度分布 <InlineMath math="u(\mathbf{x}, t)" /> が満たす方程式
                    <BlockMath math="\frac{\partial u}{\partial t} = k \Delta u" />
                    を<b>熱方程式</b>（Heat Equation）または<b>拡散方程式</b>（Diffusion Equation）と呼ぶ。
                    定数 <InlineMath math="k > 0" /> は熱拡散率（または拡散係数）と呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="波動方程式との対比：時間の不可逆性">
                <p>
                    波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> は時間を反転（<InlineMath math="t \to -t" />）させても方程式の形が変わらない可逆な系である。
                    それに対し、熱方程式は <InlineMath math="t \to -t" /> とすると方程式の符号が変わり、物理的に不自然な挙動を示す。
                    これは、熱が一方向に拡散して均一化していく挙動が「不可逆」であることを数学的に表現している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平滑化効果</h2>

            <p className="leading-relaxed">
                熱方程式の最も特徴的な性質の一つは、初期状態がどれほど不連続であっても、わずかでも時間が経てば解が極めて滑らかになるという性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (即時平滑化効果)">
                <p>
                    初期値 <InlineMath math="u(x, 0) = f(x)" /> が有界かつ可積分であれば、
                    任意の正の時刻 <InlineMath math="t > 0" /> において、解 <InlineMath math="u(x, t)" /> は
                    空間変数 <InlineMath math="x" /> および時間変数 <InlineMath math="t" /> に関して無限回微分可能（<InlineMath math="C^\infty" /> 級）となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    次節で詳しく学ぶが、初期値問題の解は初期値 <InlineMath math="f" /> とガウス関数形式の<b>熱核</b>（Heat Kernel）<InlineMath math="K(x, t)" /> との畳み込みで表される：
                    <BlockMath math="u(x, t) = \int_{-\infty}^{\infty} K(x-y, t) f(y) dy" />
                    熱核 <InlineMath math="K(x, t) = \frac{1}{\sqrt{4\pi kt}} e^{-x^2/4kt}" /> は <InlineMath math="t > 0" /> で <InlineMath math="x" /> に関して無限回微分可能であり、
                    その導関数も急速に減少する。積分記号下での微分が正当化されるため、<InlineMath math="f" /> の滑らかさにかかわらず <InlineMath math="u" /> は滑らかになる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="逆問題の不良設定性（Ill-posedness）">
                <p>
                    「未来の温度分布から過去の温度分布を推定する」という逆問題は、この平滑化効果の裏返しとして、極めて不安定になる。
                    わずかな観測誤差が、過去への推測において爆発的に増幅されるためであり、数学的には「適切ではない（Ill-posed）」問題とされる。
                    日常的に、溶け合って均一になった後の温度から、最初に熱がどこにあったかを特定するのが困難であることに対応している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この「平滑化」という現象を支配する基本解である「熱核」について、その数学的形状と性質を深く掘り下げます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>熱方程式 <InlineMath math="u_t = k u_{xx}" /> は、熱伝導則とエネルギー保存則から導かれる。</li>
                    <li>拡散プロセスは時間の「不可逆性」を持ち、これは波動方程式との大きな違いである。</li>
                    <li>熱方程式には、不規則な初期状態を瞬時に滑らかにする「平滑化効果」がある。</li>
                    <li>平滑化のメカニズムは、解を積分核（熱核）との畳み込みとして表示することによって理解される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
