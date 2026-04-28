import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorFieldFlows() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ベクトル場は、多様体の各点に「速度ベクトル」を指定するものでした。
                もし、ある粒子が常にこのベクトル場が指示する速度で多様体上を移動し続けたら、どのような軌跡を描くでしょうか。
                この軌跡を数学的に定式化したものが「積分曲線」であり、すべての点からの積分曲線を束ねたものが「フロー（流れ）」です。
                フローは、ベクトル場から多様体自身の変換群を生み出す強力な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積分曲線</h2>

            <p className="leading-relaxed">
                ベクトル場 <InlineMath math="X" /> に沿って進む曲線、すなわち各点での接ベクトルが <InlineMath math="X" /> と一致するような曲線を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (積分曲線)">
                <p>
                    <InlineMath math="M" /> を滑らかな多様体、<InlineMath math="X \in \mathfrak{X}(M)" /> をベクトル場とする。
                    開区間 <InlineMath math="I \subset \mathbb{R}" /> から <InlineMath math="M" /> への滑らかな曲線 <InlineMath math="\gamma : I \to M" /> が <InlineMath math="X" /> の<strong>積分曲線（integral curve）</strong>であるとは、任意の <InlineMath math="t \in I" /> に対して
                </p>
                <BlockMath math="\gamma'(t) = X(\gamma(t))" />
                <p className="mt-2">
                    が成り立つことである。ここで <InlineMath math="\gamma'(t)" /> は、<InlineMath math="t" /> における <InlineMath math="\gamma" /> の速度ベクトル（接ベクトル）を表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                与えられた初期点から出発する積分曲線が存在するかどうか、またそれが一意に定まるかどうかは、常微分方程式の基本定理に帰着されます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-1 (積分曲線の存在と一意性)">
                <p>
                    任意のベクトル場 <InlineMath math="X \in \mathfrak{X}(M)" /> と任意の点 <InlineMath math="p \in M" /> に対して、<InlineMath math="\gamma(0) = p" /> を満たす <InlineMath math="X" /> の積分曲線 <InlineMath math="\gamma : (-\varepsilon, \varepsilon) \to M" /> が局所的に一意に存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="p" /> の周りのチャート <InlineMath math="(U, x^1, \ldots, x^n)" /> をとる。この局所座標において、ベクトル場 <InlineMath math="X" /> と曲線 <InlineMath math="\gamma(t)" /> は
                </p>
                <BlockMath math="X = \sum_{i=1}^n X^i(x) \frac{\partial}{\partial x^i}, \quad \gamma(t) = (\gamma^1(t), \ldots, \gamma^n(t))" />
                <p className="mt-2">
                    と表される。積分曲線の条件 <InlineMath math="\gamma'(t) = X(\gamma(t))" /> は、各成分について
                </p>
                <BlockMath math="\frac{d\gamma^i}{dt}(t) = X^i(\gamma^1(t), \ldots, \gamma^n(t)) \quad (i = 1, \ldots, n)" />
                <p className="mt-2">
                    という連立常微分方程式に翻訳される。初期条件は <InlineMath math="\gamma^i(0) = x^i(p)" /> である。
                </p>
                <p className="mt-2">
                    ベクトル場 <InlineMath math="X" /> は滑らか（<InlineMath math="C^\infty" />）であるため、成分関数 <InlineMath math="X^i" /> は局所リプシッツ連続である。
                    したがって、微分方程式I（2-6）で学ぶピカール-リンデレフの定理（Picard-Lindelöf theorem）により、この初期値問題の解が <InlineMath math="t=0" /> のある近傍 <InlineMath math="(-\varepsilon, \varepsilon)" /> で一意に存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的なベクトル場について、積分曲線を求めてみましょう。
            </p>

            <ContentBox type="example" title="Example 3.5-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上のベクトル場 <InlineMath math="X = -y \frac{\partial}{\partial x} + x \frac{\partial}{\partial y}" /> の積分曲線を求める。
                </p>
                <p className="mt-2">
                    曲線 <InlineMath math="\gamma(t) = (x(t), y(t))" /> が満たすべき微分方程式は、
                </p>
                <BlockMath math="\begin{cases} \dot{x}(t) = -y(t) \\ \dot{y}(t) = x(t) \end{cases}" />
                <p className="mt-2">
                    となる。これを解くと、初期値を <InlineMath math="(x_0, y_0) = (r\cos\theta_0, r\sin\theta_0)" /> として、
                </p>
                <BlockMath math="\gamma(t) = (r\cos(t+\theta_0), r\sin(t+\theta_0))" />
                <p className="mt-2">
                    を得る。これは原点を中心とする半径 <InlineMath math="r" /> の円周上を、角速度 <InlineMath math="1" /> で反時計回りに等速円運動する軌跡である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フローと完備ベクトル場</h2>

            <p className="leading-relaxed">
                各点から出発する積分曲線を、初期点 <InlineMath math="p" /> と時間 <InlineMath math="t" /> の2変数関数としてまとめたものを「フロー」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.5-2 (フロー)">
                <p>
                    ベクトル場 <InlineMath math="X" /> に対して、<InlineMath math="\mathbb{R} \times M" /> の開集合 <InlineMath math="\mathcal{D}" />（<InlineMath math="\{0\} \times M \subset \mathcal{D}" />）上で定義された滑らかな写像 <InlineMath math="\theta : \mathcal{D} \to M" /> が <InlineMath math="X" /> の<strong>フロー（flow）</strong>であるとは、各 <InlineMath math="p \in M" /> に対して曲線 <InlineMath math="t \mapsto \theta(t, p)" /> が <InlineMath math="\gamma(0) = p" /> を満たす <InlineMath math="X" /> の積分曲線となることである。
                </p>
                <p className="mt-2">
                    フローは以下の群の性質（1パラメータ変換群の性質）を満たす。
                </p>
                <BlockMath math="\theta(0, p) = p" />
                <BlockMath math="\theta(s, \theta(t, p)) = \theta(s+t, p)" />
                <p className="mt-2">
                    （ただし、両辺が定義される範囲で）。各 <InlineMath math="t" /> に対して写像 <InlineMath math="\theta_t(p) = \theta(t, p)" /> を考えると、<InlineMath math="\theta_t" /> は <InlineMath math="M" /> の局所微分同相写像であり、<InlineMath math="\theta_t^{-1} = \theta_{-t}" /> が成り立つ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一般に、積分曲線は有限時間で多様体の「端」に到達したり、無限遠に発散したりして、すべての <InlineMath math="t \in \mathbb{R}" /> で定義できないことがあります。
                すべての時間で積分曲線が定義できるベクトル場を「完備」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.5-3 (完備ベクトル場)">
                <p>
                    ベクトル場 <InlineMath math="X" /> のフロー <InlineMath math="\theta" /> の定義域が <InlineMath math="\mathcal{D} = \mathbb{R} \times M" /> 全体であるとき、すなわち任意の点からの積分曲線が <$-\infty < t < \infty$> で定義されるとき、<InlineMath math="X" /> を<strong>完備ベクトル場（complete vector field）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                多様体がコンパクト（有界かつ閉）であれば、逃げ出す「無限遠」や「端」が存在しないため、ベクトル場は常に完備になります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.5-1">
                <p>
                    <InlineMath math="M" /> がコンパクトな多様体ならば、<InlineMath math="M" /> 上の任意の滑らかなベクトル場 <InlineMath math="X" /> は完備である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法で示す。ある点 <InlineMath math="p" /> から出発する積分曲線 <InlineMath math="\gamma(t)" /> の最大延長区間が有限の <InlineMath math="(a, b)" />（例えば <InlineMath math="b < \infty" />）であったとする。
                </p>
                <p className="mt-2">
                    <InlineMath math="t_n \to b" /> となる数列をとると、<InlineMath math="M" /> はコンパクトなので、点列 <InlineMath math="\gamma(t_n)" /> はある点 <InlineMath math="q \in M" /> に収束する部分列を持つ。
                    点 <InlineMath math="q" /> においても積分曲線の局所的存在定理が成り立つため、<InlineMath math="q" /> から出発する積分曲線は時間 <InlineMath math="(-\varepsilon, \varepsilon)" /> の間は存在する。
                </p>
                <p className="mt-2">
                    フローの群の性質 <InlineMath math="\theta(s+t, p) = \theta(s, \theta(t, p))" /> を用いると、<InlineMath math="\gamma(t)" /> は <InlineMath math="t=b" /> を超えて延長できることになり、最大延長区間が <InlineMath math="(a, b)" /> であったことと矛盾する。
                    したがって、すべての積分曲線は無限時間定義され、<InlineMath math="X" /> は完備である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                非コンパクトな多様体では、完備でないベクトル場が簡単に作れます。
            </p>

            <ContentBox type="example" title="Example 3.5-2 (完備でないベクトル場の例)">
                <p>
                    <InlineMath math="M = \mathbb{R}" /> 上のベクトル場 <InlineMath math="X = x^2 \frac{\partial}{\partial x}" /> を考える。
                </p>
                <p className="mt-2">
                    積分曲線 <InlineMath math="x(t)" /> が満たす微分方程式は <InlineMath math="\dot{x} = x^2" /> である。
                    初期条件 <InlineMath math="x(0) = x_0 > 0" /> の解は、変数分離法により
                </p>
                <BlockMath math="x(t) = \frac{x_0}{1 - x_0 t}" />
                <p className="mt-2">
                    となる。この解は <InlineMath math="t \to 1/x_0" /> の有限時間で <InlineMath math="x \to \infty" /> となり発散してしまう。
                    したがって、このベクトル場は完備ではない。
                </p>
                <p className="mt-2">
                    一方、円周 <InlineMath math="S^1" /> 上のベクトル場 <InlineMath math="X = \partial/\partial\theta" /> のフローは <InlineMath math="\theta_t(p) = p + t \pmod{2\pi}" /> であり、すべての <InlineMath math="t" /> で定義される。これは <InlineMath math="S^1" /> がコンパクトであることと整合している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="力学系理論への接続">
                <p>
                    ベクトル場のフロー <InlineMath math="\theta_t" /> は、時間が連続的に流れる「連続力学系」そのものです。
                    4-7 力学系理論 では、このフローの長時間挙動（<InlineMath math="t \to \infty" /> でどこに収束するか、周期軌道を描くか、カオス的になるか）を詳しく調べます。
                    また、次節で学ぶ「リー微分」は、このフロー <InlineMath math="\theta_t" /> に沿って多様体上の幾何学的対象（テンソルなど）を押し流し、その変化率を測るというアイディアに基づいています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>積分曲線は、各点での接ベクトルが与えられたベクトル場に一致する曲線のことである。</li>
                    <li>常微分方程式の基本定理により、任意の点から出発する積分曲線は局所的に一意に存在する。</li>
                    <li>フロー <InlineMath math="\theta_t" /> は積分曲線をまとめたものであり、多様体の1パラメータ変換群をなす。</li>
                    <li>すべての時間でフローが定義されるベクトル場を完備といい、コンパクト多様体上のベクトル場は常に完備である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
