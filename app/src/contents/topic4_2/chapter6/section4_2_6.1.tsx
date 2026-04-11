import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InfiniteProductConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では、複素解析において関数の零点や極の分布を制御し、指定された性質を持つ整関数や有理型関数を構成するための強力な手法である無限積や部分分数展開について学びます。手始めに、これらを厳密に扱うための基盤となる「無限積の収束」について、その定義と基本的な判定法を整備しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限積の定義と収束</h2>

            <p>
                級数が部分和の極限として定義されたのと同様に、無限積も部分積の極限として定義されます。ただし、値が <InlineMath math="0" /> になる場合に関する扱い方には、無限積特有の注意が必要です。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.1-1 (<b>無限積の収束</b>)</span>}>
                <p>
                    複素数の列 <InlineMath math="\{a_n\}_{n=1}^{\infty}" /> に対して、無限積
                </p>
                <BlockMath math="\prod_{n=1}^\infty (1 + a_n)" />
                <p>
                    が<b>収束する</b>（converge）とは、部分積の列
                </p>
                <BlockMath math="P_N = \prod_{n=1}^N (1 + a_n)" />
                <p>
                    が <InlineMath math="0" /> でない有限な複素数 <InlineMath math="P \neq 0" /> に収束することとする。このとき、極限値を元の記号で書き、
                </p>
                <BlockMath math="\prod_{n=1}^\infty (1 + a_n) = P" />
                <p>
                    と表す。極限が <InlineMath math="0" /> になる場合や極限が存在しない場合は、無限積は<b>発散する</b>（diverge）という。
                </p>
                <p>
                    なお、有限個の <InlineMath math="a_n" /> が <InlineMath math="-1" /> となる（すなわち有限個の項が <InlineMath math="0" /> となる）場合は、その <InlineMath math="0" /> となる項を除いた残りの無限積が <InlineMath math="0" /> でない値に収束するときに、全体の無限積は収束しその値は <InlineMath math="0" /> であると定める。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1">
                <p>
                    例えば、定数列 <InlineMath math="a_n = 1" /> に対して <InlineMath math="\prod_{n=1}^\infty (1 + 1) = 2 \times 2 \times \cdots" /> は明らかに <InlineMath math="\infty" /> に発散します。一方、<InlineMath math="a_n = -1/2" /> （定数列）を与えた場合、部分積は <InlineMath math="(1/2)^N" /> となり極限は <InlineMath math="0" /> ですが、定義によりこれも「発散する」と扱われます。
                </p>
                <p>
                    無限積が収束するための必要条件は、無限級数が収束するための必要条件（各項が <InlineMath math="0" /> に収束すること）に対応して、第 <InlineMath math="n" /> 項である <InlineMath math="(1+a_n)" /> が <InlineMath math="1" /> に近づくこと、すなわち <InlineMath math="\lim_{n \to \infty} a_n = 0" /> となることです。
                </p>
            </ContentBox>

            <p>
                実用上、無限積の収束を議論するには対数を取って無限級数に帰着させるのが便利です。そこで、無限級数の絶対収束の概念を無限積にも持ち込みます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-1 (無限積の絶対収束と級数の収束)">
                <p>
                    無限級数 <InlineMath math="\sum_{n=1}^\infty |a_n|" /> が収束するならば、無限積 <InlineMath math="\prod_{n=1}^\infty (1 + a_n)" /> は収束する。このとき、無限積 <InlineMath math="\prod_{n=1}^\infty (1 + |a_n|)" /> も収束する。
                </p>
                <p>
                    級数 <InlineMath math="\sum_{n=1}^\infty |a_n|" /> が収束するとき、無限積 <InlineMath math="\prod_{n=1}^\infty (1 + a_n)" /> は<b>絶対収束する</b>（converge absolutely）と呼ばれる。つまり、絶対収束する無限積は収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\sum_{n=1}^\infty |a_n|" /> が収束するので、<InlineMath math="n \to \infty" /> のとき <InlineMath math="|a_n| \to 0" /> である。したがって、十分大きな <InlineMath math="n" /> （例えば <InlineMath math="n \geq N_0" />）に対して <InlineMath math="|a_n| < 1/2" /> としてよい。
                </p>
                <p>
                    この範囲において、複素対数関数の主値 <InlineMath math="\mathrm{Log}(1+a_n)" /> を考える。テイラー展開により
                </p>
                <BlockMath math="\begin{aligned}
                    \mathrm{Log}(1+a_n) &= a_n - \frac{a_n^2}{2} + \frac{a_n^3}{3} - \cdots \\
                    &= a_n \left( 1 - \frac{a_n}{2} + \frac{a_n^2}{3} - \cdots \right)
                \end{aligned}" />
                <p>
                    となる。<InlineMath math="|a_n| < 1/2" /> のとき、括弧内の絶対値は上半分の等比級数で上から評価でき、ある定数 <InlineMath math="C > 0" />（例えば <InlineMath math="C=2" />）を取れば、
                </p>
                <BlockMath math="|\mathrm{Log}(1+a_n)| \leq C |a_n|" />
                <p>
                    が成り立つ。仮定より <InlineMath math="\sum |a_n|" /> が収束するため、比較判定法により級数 <InlineMath math="\sum_{n=N_0}^{\infty} \mathrm{Log}(1+a_n)" /> も絶対収束する。この絶対収束する級数の和を <InlineMath math="S" /> としよう。
                </p>
                <p>
                    部分積との関係を見ると、<InlineMath math="N > N_0" /> に対して
                </p>
                <BlockMath math="\prod_{n=N_0}^N (1 + a_n) = \exp \left( \sum_{n=N_0}^N \mathrm{Log}(1+a_n) \right)" />
                <p>
                    であり、指数関数は連続であるから、左辺の極限は <InlineMath math="e^S" /> に収束する。<InlineMath math="e^S" /> は決して <InlineMath math="0" /> にならず有限であるため、元の無限積は収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1">
                <p>
                    無限積 <InlineMath math="\prod_{n=1}^\infty \left(1 + \frac{1}{n^2}\right)" /> の収束を考えます。
                </p>
                <p>
                    ここで <InlineMath math="a_n = \frac{1}{n^2}" /> とすると、級数 <InlineMath math="\sum_{n=1}^\infty |a_n| = \sum_{n=1}^\infty \frac{1}{n^2}" /> はよく知られているように収束します（バーゼル問題から値は <InlineMath math="\frac{\pi^2}{6}" />）。よって Proposition 6.1-1 により、この無限積は絶対収束します。実際、この無限積の値は <InlineMath math="\frac{\sinh \pi}{\pi}" /> になることが、後述のオイラー積の応用から従います。
                </p>
            </ContentBox>

            <p>
                絶対収束という「級数の問題に帰着させる」判断基準を手に入れたことで、複素数の列だけでなく、関数列の場合にも安全に議論を拡張することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則関数の無限積</h2>

            <p>
                関数列を掛け合わせる場合、単なる各点収束だけでなく、連続性や正則性を引き継ぐための「一様収束」の概念が必要です。領域内の任意のコンパクト部分集合上で一様収束するような無限積の条件を与えましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-2 (正則関数の無限積)">
                <p>
                    領域 <InlineMath math="D" /> 上の正則関数の列 <InlineMath math="\{f_n\}_{n=1}^{\infty}" /> に対して、級数
                </p>
                <BlockMath math="\sum_{n=1}^\infty |f_n(z)|" />
                <p>
                    が <InlineMath math="D" /> 上で<b>広義一様収束</b>（すなわち、任意のコンパクト部分集合上で一様収束）すると仮定する。このとき、無限積
                </p>
                <BlockMath math="F(z) = \prod_{n=1}^\infty (1 + f_n(z))" />
                <p>
                    は <InlineMath math="D" /> 上で広義一様収束し、<InlineMath math="F(z)" /> は <InlineMath math="D" /> 上の正則関数となる。さらに、<InlineMath math="F(z)" /> の重複度を含めた零点集合は、各 <InlineMath math="1 + f_n(z)" /> の零点集合の和集合である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="D" /> 内の任意のコンパクト集合 <InlineMath math="K" /> を取る。仮定より <InlineMath math="\sum |f_n(z)|" /> は <InlineMath math="K" /> 上一様収束するので、ある整数 <InlineMath math="N" /> が存在して、すべての <InlineMath math="n \geq N" /> および <InlineMath math="z \in K" /> に対して <InlineMath math="|f_n(z)| < 1/2" /> となる。
                </p>
                <p>
                    Proposition 6.1-1 の証明と同様に考えると、<InlineMath math="n \geq N" /> では <InlineMath math="|\mathrm{Log}(1+f_n(z))| \leq C |f_n(z)|" /> （例えば <InlineMath math="C=2" />）が成り立つ。ワイエルシュトラスのM判定法により、関数項級数
                </p>
                <BlockMath math="S(z) = \sum_{n=N}^\infty \mathrm{Log}(1+f_n(z))" />
                <p>
                    は <InlineMath math="K" /> 上で一様かつ絶対収束する。<InlineMath math="\mathrm{Log}(1+f_n(z))" /> は正則であるから、関数列の一様収束極限定理により和の関数 <InlineMath math="S(z)" /> も <InlineMath math="K" /> 上正則である。指数関数を取れば、
                </p>
                <BlockMath math="\prod_{n=N}^\infty (1+f_n(z)) = e^{S(z)}" />
                <p>
                    となり、これは <InlineMath math="K" /> 上一様収束して正則となる。<InlineMath math="K" /> 上で <InlineMath math="e^{S(z)}" /> は決して零点を持たない。
                </p>
                <p>
                    残りの有限部分の積
                </p>
                <BlockMath math="P_{N-1}(z) = \prod_{n=1}^{N-1} (1+f_n(z))" />
                <p>
                    は有限個の正則関数の積であるから正則である。したがって全体の無限積 <InlineMath math="F(z) = P_{N-1}(z) e^{S(z)}" /> は <InlineMath math="K" /> 上正則であり、その極限への収束も一様である。また、<InlineMath math="e^{S(z)}" /> に零点がない以上、<InlineMath math="F(z)" /> の <InlineMath math="K" /> 上の零点は <InlineMath math="P_{N-1}(z)" /> の零点と多重度を込めて完全に一致する。<InlineMath math="K" /> は任意のコンパクト集合であったから、題意は示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-2">
                <p>
                    この命題から、関数を無限積で展開する有名な実例を紹介しましょう。サイン関数は次のように無限積で展開されます（オイラー積表示）。
                </p>
                <BlockMath math="\frac{\sin(\pi z)}{\pi z} = \prod_{n=1}^\infty \left( 1 - \frac{z^2}{n^2} \right)" />
                <p>
                    ここで <InlineMath math="f_n(z) = -z^2/n^2" /> と置くと、任意の半径 <InlineMath math="R" /> の閉円板 <InlineMath math="|z| \leq R" /> 上で
                </p>
                <BlockMath math="\sum_{n=1}^\infty |f_n(z)| \leq \sum_{n=1}^\infty \frac{R^2}{n^2} = R^2 \frac{\pi^2}{6} < \infty" />
                <p>
                    となるため、ワイエルシュトラスのM判定法から <InlineMath math="\sum |f_n(z)|" /> は広義一様収束します。したがって Proposition 6.1-2 が適用でき、右辺の無限積は <InlineMath math="\mathbb{C}" /> 全体上の整関数を定めます。さらにその零点は各因子 <InlineMath math="1 - z^2/n^2 = 0" /> の根、すなわち <InlineMath math="z = \pm 1, \pm 2, \dots" /> となります。これが左辺の零点と確かに一致していることがわかります。
                </p>
                <p>
                    （この等式自体が本当に正しく成立していることの証明は、次節 §6.2 でより一般論を築いた後に確認します。）
                </p>
            </ContentBox>

            <p>
                関数の無限積が安全に扱えることが確認できました。これをもとに、与えられた零点の列を全て過不足なく持つような整関数を、無限積の形で自由に設計する方法（ワイエルシュトラスの因数分解定理）へと進んでいきましょう。
            </p>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限積の収束は、その部分積の列が <InlineMath math="0" /> でない有限値に収束することとして定義される。</li>
                    <li><InlineMath math="\sum |a_n|" /> が収束するならば無限積 <InlineMath math="\prod (1+a_n)" /> は（絶対）収束し、判定を級数の問題に帰着できる。</li>
                    <li>関数列に関して <InlineMath math="\sum |f_n(z)|" /> が広義一様収束するならば、無限積 <InlineMath math="\prod (1 + f_n(z))" /> も広義一様収束して正則関数を定め、零点の位置と重複度は各因子のそれを引き継ぐ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
