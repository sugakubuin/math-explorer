import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PreservationOfDifferentiability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では「一様収束によって連続性と積分が保存される（順序交換できる）」ことを見ました。
                それでは、もう一つの重要な操作である「微分」の場合はどうなるのでしょうか。「一様収束すれば、微分と極限も交換できる（極限関数も微分可能で、極限の微分＝微分の極限となる）」と期待したくなります。
                しかし驚くべきことに、<strong>微分という操作は非常にデリケートであり、単なる「<InlineMath math="f_n" /> の一様収束」だけでは極限と微分の順序は交換できません。</strong>
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様収束しても微分の交換が失敗する例</h2>

            <p>
                「関数自身が波打たずにすっぽりと収束する帯の中に収まっている」としても、その帯の中で「ものすごく細かく激しく振動している（ギザギザしている）」場合、関数の値自体は微小でも、傾き（微分）は極端に大きくなってしまう可能性があります。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (一様収束するが微分が破綻する例)">
                <p>
                    実数全体で定義された関数列 <InlineMath math="f_n(x) = \frac{\sin(nx)}{\sqrt{n}}" /> （<InlineMath math="n = 1, 2, \dots" />）を考える。
                </p>
                <div className="mt-4 font-semibold">関数の収束（一様収束）:</div>
                <p className="mt-2">
                    <InlineMath math="|\sin(nx)| \leq 1" /> であるから、すべての <InlineMath math="x \in \mathbb{R}" /> に対して
                    <BlockMath math="|f_n(x) - 0| = \left|\frac{\sin(nx)}{\sqrt{n}}\right| \leq \frac{1}{\sqrt{n}}" />
                    が成り立つ。右辺は <InlineMath math="x" /> に依存せず <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束するため、<InlineMath math="f_n(x)" /> は極限関数 <InlineMath math="f(x) = 0" /> に<strong>一様収束</strong>する。
                    （すなわち、グラフ全体が <InlineMath math="\pm 1/\sqrt{n}" /> という極細の帯の中にすっぽり入る。）
                </p>
                <div className="mt-4 font-semibold">微分の極限と矛盾:</div>
                <p className="mt-2">
                    ここで、<InlineMath math="f_n" /> を微分して中心 <InlineMath math="x=0" /> での傾きを調べる。
                    <BlockMath math="f'_n(x) = \frac{n \cos(nx)}{\sqrt{n}} = \sqrt{n} \cos(nx)" />
                    したがって、原点での微分係数は <InlineMath math="f'_n(0) = \sqrt{n}" /> となる。<br />
                    <InlineMath math="n \to \infty" /> とすると、この値は <InlineMath math="\infty" /> に発散し、いかなる有限値にも収束しない。
                </p>
                <p className="mt-2 font-semibold text-red-500">
                    一方で、極限関数 <InlineMath math="f(x) = 0" /> の微分は等しく <InlineMath math="f'(0) = 0" /> であるため、<InlineMath math="\lim_{n\to\infty} f'_n(0) \neq f'(0)" /> と破綻していることがわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                </div>
            </ContentBox>

            <p>
                この例から分かる通り、微分と極限の交換を保証するためには、「元の関数 <InlineMath math="f_n" /> が一様収束する」ことよりもさらに強い条件、すなわち<strong>「導関数列 <InlineMath math="f'_n" /> そのものが一様収束する（ギザギザが暴れない）」</strong>という条件が必要不可欠です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分と極限の順序交換定理</h2>

            <p>
                前述の反省を踏まえ、微積分の基本定理を利用して積分（前節ですでに一様収束による交換が証明されている）を経由して微分の交換を正当化するという、極めて巧妙な定理が以下に示されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (一様収束と微分の交換)">
                <p>
                    有界閉区間 <InlineMath math="[a, b]" /> 上の微分可能な関数列 <InlineMath math="\{f_n\}" /> があり、次の2つの条件が満たされているとする。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="f_n(x_0)" /> がある1点 <InlineMath math="x_0 \in [a, b]" /> において（極限値を持つように）収束する。</li>
                    <li><strong>導関数列 <InlineMath math="\{f'_n\}" /> が、ある関数 <InlineMath math="g" /> に <InlineMath math="[a, b]" /> 上で一様収束する。</strong>（さらに <InlineMath math="f'_n" /> が連続であると仮定する。）</li>
                </ol>
                <p className="mt-4">
                    このとき、元の関数列 <InlineMath math="f_n" /> はある関数 <InlineMath math="f" /> に<strong>一様収束</strong>し、その極限関数 <InlineMath math="f" /> は微分可能であって、次が成り立つ。
                </p>
                <BlockMath math="f'(x) = g(x) \quad \left(すなわち \left( \lim_{n \to \infty} f_n(x) \right)' = \lim_{n \to \infty} f'_n(x) \right)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より <InlineMath math="f'_n" /> は導関数として連続であり、ある関数 <InlineMath math="g" /> に一様収束する。したがって定理 7.3-1（連続性の保存）より、極限関数 <InlineMath math="g" /> も連続である。
                </p>
                <p className="mt-4">
                    微積分の第2基本定理により、各 <InlineMath math="n" /> について <InlineMath math="f_n(x)" /> はその導関数の積分を用いて次のように表現できる。
                </p>
                <BlockMath math="f_n(x) = f_n(x_0) + \int_{x_0}^x f'_n(t) dt" />
                <p className="mt-4">
                    ここで <InlineMath math="n \to \infty" /> の極限を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>仮定1から、数列 <InlineMath math="f_n(x_0)" /> はある実数 <InlineMath math="c" /> に収束する。</li>
                    <li>仮定2から、<InlineMath math="f'_n(t)" /> は <InlineMath math="g(t)" /> に区間 <InlineMath math="[a, b]" /> 上で一様収束する。当然、その部分区間である区間 <InlineMath math="[x_0, x]" /> （または <InlineMath math="[x, x_0]" />）上でも一様収束する。</li>
                </ul>
                <p className="mt-4">
                    前節の定理 7.3-2（一様収束と積分の交換）より、右辺の積分操作と極限を交換することができ、
                </p>
                <BlockMath math="\lim_{n \to \infty} \int_{x_0}^x f'_n(t) dt = \int_{x_0}^x \left( \lim_{n \to \infty} f'_n(t) \right) dt = \int_{x_0}^x g(t) dt" />
                <p>
                    が成り立つ。これより、すべての <InlineMath math="x \in [a, b]" /> において数列 <InlineMath math="\{f_n(x)\}" /> は収束先を持つことがわかる。この極限関数を <InlineMath math="f(x)" /> と定義すると、
                </p>
                <BlockMath math="f(x) = c + \int_{x_0}^x g(t) dt" />
                <p>
                    となる。（なお、この収束が一様収束であることも同様に右辺の積分方程式における誤差の評価から直ちに示される。）
                </p>
                <p className="mt-4">
                    最後に、この等式の両辺を <InlineMath math="x" /> で微分する。<InlineMath math="g(t)" /> は連続関数であるため、微積分の第1基本定理により、連続関数の定積分で定義された関数は微分可能であり、その導関数は被積分関数に一致する。
                </p>
                <BlockMath math="f'(x) = \frac{d}{dx} \left( c + \int_{x_0}^x g(t) dt \right) = g(x)" />
                <p className="mt-4">
                    以上により、極限関数 <InlineMath math="f" /> は微分可能であり、その導関数が <InlineMath math="g" /> （すなわち <InlineMath math="\lim_{n\to\infty} f'_n" />）に一致することが厳密に証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                一様収束という概念の登場により、極限・連続・積分・微分の相互関係（ルール）が完璧に整備されました。
                これら実解析の精緻な道具立てを総動員して、次章 Chapter 8 では関数を極限まで分解する「関数項級数（特にべき級数）」と、任意の連続関数を多項式で近似するワイエルシュトラスの近似定理という、解析学の集大成へと挑みます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数列が一様収束したとしても、それだけでは「微分の極限」と「極限の微分」は一致しない（反例が存在する）。</li>
                    <li>微分と極限を交換するためには、「<strong>導関数列が</strong>一様収束する」という強力な条件が必要である。</li>
                    <li>その証明には、微積分の基本定理を通じて「微分の問題を積分の問題にすり替え」、前節での一様収束と積分の交換定理を利用するという美しい論法が用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
