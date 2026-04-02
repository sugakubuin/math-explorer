import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CharacteristicFunctionMoments() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                特性関数の最も有用な性質の一つは、その微分が確率変数のモーメントと直接結びついている点です。
                複雑な確率分布であっても、特性関数を微分して原点での値を求めるだけで、平均や分散を計算することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分とモーメントの関係</h2>

            <p className="leading-relaxed">
                特性関数 <InlineMath math="\varphi_X(t)" /> の形状は、確率変数 <InlineMath math="X" /> の平均的な広がりに依存しています。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1 (特性関数とモーメント)">
                <p>
                    確率変数 <InlineMath math="X" /> が <InlineMath math="n" /> 次モーメント <InlineMath math="E[|X|^n] < \infty" /> を持つとき、
                    特性関数 <InlineMath math="\varphi_X(t)" /> は <InlineMath math="n" /> 回連続微分可能であり、次が成り立つ：
                    <BlockMath math="\varphi_X^{(k)}(0) = i^k E[X^k] \quad (k = 1, 2, \ldots, n)" />
                    したがって、<InlineMath math="E[X^k]" /> は次の微分係数から得られる：
                    <BlockMath math="E[X^k] = \frac{\varphi_X^{(k)}(0)}{i^k}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    形式的な微分を行うと以下のようになる：
                    <BlockMath math="\frac{d}{dt} \varphi_X(t) = \frac{d}{dt} \int e^{itx} dF_X(x) = \int (ix) e^{itx} dF_X(x)" />
                    この積分と微分の順序交換を正当化するため、導関数の被積分関数 <InlineMath math="|(ix) e^{itx}| = |x|" /> を考える。
                    仮定 <InlineMath math="E[|X|] < \infty" /> より、支配収束定理によって微分の正当性が示され、<InlineMath math="t=0" /> を代入すると
                    <InlineMath math="\varphi_X'(0) = i E[X]" /> となる。同様の議論を繰り返すことで、<InlineMath math="k" /> 次微分についての結果も得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                モーメントが存在する際、特性関数は原点付近で多項式近似（テイラー展開）することが可能です。
                <BlockMath math="\varphi_X(t) = \sum_{k=0}^n \frac{E[(itX)^k]}{k!} + o(t^n) = \sum_{k=0}^n \frac{(it)^k}{k!} E[X^k] + o(t^n)" />
                この展開は、後の Chapter 9 で中心極限定理を証明する際の核心となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な検証</h2>

            <p className="leading-relaxed">
                正規分布を例に、実際にモーメントが一致することを確認します。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (標準正規分布のモーメント)">
                <p>
                    標準正規分布 <InlineMath math="X \sim \mathcal{N}(0, 1)" /> の特性関数 <InlineMath math="\varphi_X(t) = e^{-t^2/2}" /> を微分する。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><b>1 次微分</b>:
                        <BlockMath math="\varphi_X'(t) = -t e^{-t^2/2} \implies \varphi_X'(0) = 0" />
                        ゆえに、期待値 <InlineMath math="E[X] = 0/i = 0" /> となり、正規分布の平均と一致する。
                    </li>
                    <li><b>2 次微分</b>:
                        <BlockMath math="\varphi_X''(t) = (-1 + t^2) e^{-t^2/2} \implies \varphi_X''(0) = -1" />
                        ゆえに、<InlineMath math="E[X^2] = -1/i^2 = 1" /> となる。
                        分散は <InlineMath math="\mathrm{Var}(X) = E[X^2] - (E[X])^2 = 1 - 0 = 1" /> と正しく導かれる。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="Remark: モーメント母関数との関係">
                <p>
                    以前学んだモーメント母関数 <InlineMath math="M_X(t) = E[e^{tX}]" /> も同様の機能を持ちますが、
                    モーメント母関数は期待値が発散する場合（コーシー分布など）には定義されません。
                    一方で特性関数は複素指数関数を用いているため、どのような確率分布に対しても必ず存在し、解析が進められるという利点があります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>特性関数の原点での <InlineMath math="k" /> 次微分係数は、<InlineMath math="k" /> 次モーメントに <InlineMath math="i^k" /> を掛けた値に等しい。</li>
                    <li>この性質により、積分計算を伴わずに平均や分散を導出することが可能となる。</li>
                    <li>特性関数のテイラー展開は、確率分布の理論的な極限解析（中心極限定理など）において不可欠な道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
