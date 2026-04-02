import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ElementOrder() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の特定の元を繰り返し演算したときに、何回目で単位元に戻るかという性質は、群の構造を解明するための鍵となります。
                本節では、この「位数」の定義とその数学的な諸性質について解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">元の位数の定義と整除性</h2>

            <p className="leading-relaxed">
                まず、ある元を何乗（何回演算）すれば単位元になるか、という概念を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (元の位数)">
                <p>
                    群 <InlineMath math="G" /> の元 <InlineMath math="a" /> に対し、<InlineMath math="a^n = e" /> （単位元）となる最小の正の整数 <InlineMath math="n" /> を、元 <InlineMath math="a" /> の<b>位数 (Order)</b>と呼び、<InlineMath math="\text{ord}(a)" /> または <InlineMath math="|a|" /> と記す。
                    そのような正整数 <InlineMath math="n" /> が存在しない場合、<InlineMath math="\text{ord}(a) = \infty" /> であるという。
                </p>
            </ContentBox>

            <ContentBox type="note" title="用語の注意：2つの「位数」">
                <p>
                    群論において「位数 (Order)」という言葉は、文脈によって以下の 2 つの意味で使い分けられるため注意が必要である：
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><b>群の位数</b>：群 <InlineMath math="G" /> の集合としての大きさ（元の個数）のこと。 <InlineMath math="|G|" /> と記す。</li>
                    <li><b>元の位数</b>：本節で定義した、特定の元 <InlineMath math="a" /> を単位元に戻す最小の指数。 <InlineMath math="\text{ord}(a)" /> と記す。</li>
                </ul>
                <p className="mt-2">
                    Proposition 2.3-2 で示す通り、「元 <InlineMath math="a" /> の位数」は「<InlineMath math="a" /> が生成する巡回群 <InlineMath math="\langle a \rangle" /> の位数」に一致する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                位数は、周期的な現象における「周期」に対応する概念であり、べき乗が単位元になるすべての指数に関わってきます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-1 (位数の整除性)">
                <p>
                    <InlineMath math="\text{ord}(a) = n < \infty" /> のとき、任意の整数 <InlineMath math="m" /> について次が成り立つ。
                    <BlockMath math="a^m = e \iff n \text{ が } m \text{ を割り切る } (n \mid m)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (<InlineMath math="\impliedby" />) <InlineMath math="m = nq" /> と書けるとき、<InlineMath math="a^m = (a^n)^q = e^q = e" /> である。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\implies" />) <InlineMath math="m" /> を <InlineMath math="n" /> で割り、<InlineMath math="m = nq + r" /> (<InlineMath math="0 \leq r < n" />) とする。
                    <BlockMath math="e = a^m = a^{nq+r} = (a^n)^q a^r = e^q a^r = a^r" />
                    ここで、位数の定義より <InlineMath math="n" /> は <InlineMath math="a^k = e" /> となる最小の正整数であった。
                    <InlineMath math="0 \leq r < n" /> かつ <InlineMath math="a^r = e" /> を満たすには、<InlineMath math="r = 0" /> でなければならない。
                    したがって <InlineMath math="n" /> は <InlineMath math="m" /> を割り切る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この性質から、巡回的な構造における周期性が明確になります。また、元の位数と、その元が生成する部分群の位数との間には密接な関係があります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-2 (生成された部分群の位数)">
                <p>
                    群 <InlineMath math="G" /> の各元について、<InlineMath math="|\langle a \rangle| = \text{ord}(a)" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\text{ord}(a) = n" /> とすると、<InlineMath math="\langle a \rangle = \{e, a, a^2, \dots, a^{n-1} \}" /> であることを示せばよい。
                    これらの <InlineMath math="n" /> 個の元がすべて相異なることは、もし <InlineMath math="a^i = a^j" /> (<InlineMath math="0 \leq i < j < n" />) とすると <InlineMath math="a^{j-i} = e" /> となり、指数 <InlineMath math="j-i" /> が <InlineMath math="0 < j-i < n" /> で位数の最小性に矛盾することからわかる。
                    また、任意の <InlineMath math="k \in \mathbb{Z}" /> に対し、<InlineMath math="k = nq + r" /> (<InlineMath math="0 \leq r < n" />) とすると <InlineMath math="a^k = a^r" /> となり、上の集合に必ず含まれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">位数の計算例と性質</h2>

            <p className="leading-relaxed">
                具体的な群において、各元の位数を計算してその規則性を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.3-1 (ℤ/6ℤ の各元の位数)">
                <p>
                    剰余群 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> の元は以下の位数を持つ：
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\text{ord}(\bar{0}) = 1" /></li>
                    <li><InlineMath math="\text{ord}(\bar{1}) = 6" /></li>
                    <li><InlineMath math="\text{ord}(\bar{2}) = 3" /></li>
                    <li><InlineMath math="\text{ord}(\bar{3}) = 2" /></li>
                    <li><InlineMath math="\text{ord}(\bar{4}) = 3" /></li>
                    <li><InlineMath math="\text{ord}(\bar{5}) = 6" /></li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                非可換群でも同様の計算を行うことができます。
            </p>

            <ContentBox type="example" title="Example 2.3-2 (対称群 S_3 の各元の位数)">
                <p>
                    3次対称群 <InlineMath math="S_3" /> の位数は以下の通り：
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\text{ord}(e) = 1" /></li>
                    <li><InlineMath math="\text{ord}((12)) = \text{ord}((23)) = \text{ord}((13)) = 2" /> （互換）</li>
                    <li><InlineMath math="\text{ord}((123)) = \text{ord}((132)) = 3" /> （3次巡回置換）</li>
                </ul>
                <p className="mt-2 text-sm italic">
                    ※有限群では、各元の位数は必ず群全体の位数を割り切る（ラグランジュの定理の帰結）ことが知られています。ここでは <InlineMath math="1, 2, 3" /> はすべて <InlineMath math="6" /> の約数となっています。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、ある元のべき乗がどのような位数を持つかを決定する有用な命題を紹介します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-3 (べき乗の位数)">
                <p>
                    <InlineMath math="\text{ord}(a) = n" /> のとき、任意の整数 <InlineMath math="k" /> について
                    <BlockMath math="\text{ord}(a^k) = \frac{n}{\gcd(k, n)}" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\text{ord}(a^k) = m" /> とおく。<InlineMath math="(a^k)^m = a^{km} = e" /> の必要十分条件は、Proposition 2.3-1 より <InlineMath math="km" /> が <InlineMath math="n" /> の倍数であることである。
                    <BlockMath math="km \in n\mathbb{Z} \iff \frac{k}{\gcd(k, n)}m \in \frac{n}{\gcd(k, n)}\mathbb{Z}" />
                    <InlineMath math="\frac{k}{\gcd(k, n)}" /> と <InlineMath math="\frac{n}{\gcd(k, n)}" /> は互いに素であるから、これは <InlineMath math="m" /> が <InlineMath math="\frac{n}{\gcd(k, n)}" /> の倍数であることと同値である。
                    したがって最小の正整数 <InlineMath math="m" /> は <InlineMath math="\frac{n}{\gcd(k, n)}" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>元 <InlineMath math="a" /> を何回演算すれば単位元になるかを表す最小の正整数を、その元の位数（<InlineMath math="\text{ord}(a)" />）という。</li>
                    <li><InlineMath math="a^m = e" /> となるのは、指数 <InlineMath math="m" /> が位数の倍数である時に限られる。</li>
                    <li>生成された部分群の位数は、その元の位数に等しい。</li>
                    <li>元 <InlineMath math="a^k" /> の位数は、元の位数 <InlineMath math="n" /> を <InlineMath math="\gcd(k, n)" /> で割ることで求められる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
