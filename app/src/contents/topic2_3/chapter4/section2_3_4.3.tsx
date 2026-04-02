import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IntermediateValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節からは、連続関数の持つ大域的（区間全体に関わる）で強力な性質について証明していきます。
                その第一歩となるのが<strong>中間値の定理</strong>です。
                これは直感的には「繋がっている線（グラフ）が高さ <InlineMath math="y_1" /> から <InlineMath math="y_2" /> へ移動する場合、その途中にあるどのような高さも必ず通過する」という事実を述べています。
                一見、当たり前に思えるこの定理も、背景にある「実数の完備性（隙間がないこと）」に深く依存しており、厳密な証明には Chapter 2 で学んだ道具が不可欠です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">中間値の定理</h2>

            <p>
                定理の主張を正確に定式化しましょう。関数が閉区間上の両端で異なる値をとる場合、その間のすべての値を取りうることを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (中間値の定理)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続であり、<InlineMath math="f(a) \neq f(b)" /> を満たすとする。
                    このとき、<InlineMath math="f(a)" /> と <InlineMath math="f(b)" /> の間にある任意の実数 <InlineMath math="\mu" /> に対して、
                </p>
                <BlockMath math="f(c) = \mu \quad (a < c < b)" />
                <p>
                    を満たす実数 <InlineMath math="c" /> が少なくとも1つ存在する。
                </p>
            </ContentBox>

            <p>
                この定理は、もし実数が完備でなく、「有理数しか存在しない世界」であった場合は成り立ちません。
                例えば <InlineMath math="f(x) = x^2 - 2" /> を考えたとき、<InlineMath math="f(1) = -1 < 0" />、<InlineMath math="f(2) = 2 > 0" /> であり、<InlineMath math="\mu = 0" /> となるはずの <InlineMath math="\sqrt{2}" /> が有理数体には存在しないため、グラフが <InlineMath math="y=0" /> をまたいでいるにも関わらず交点が「すり抜けて」しまうからです。
                したがって、証明には必ず実数の完備性が用いられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の構成</h2>

            <p>
                中間値の定理の証明にはいくつかのアプローチ（上限公理を直接使う方法など）がありますが、ここでは Chapter 2 (§2.3) で扱った<strong>区間縮小法</strong>（二分法とも呼ばれる）を用いた構成的な証明を行います。
                この方法は、実際に値 <InlineMath math="\mu" /> を取る点 <InlineMath math="c" /> の位置をどんどんと絞り込んでいくもので、計算機アルゴリズムとしても非常に重要です。
            </p>

            <ContentBox type="remark" title="Remark (区間縮小法を用いた証明の構成)">
                <p>
                    便宜上、<InlineMath math="f(a) < \mu < f(b)" /> であると仮定する（逆の場合も同様である）。
                    以下のようにして閉区間列 <InlineMath math="[a_n, b_n]" /> を構成する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>初期区間として、<InlineMath math="a_1 = a" />, <InlineMath math="b_1 = b" /> とする。</li>
                    <li>
                        区間の中点 <InlineMath math="m = \frac{a_n + b_n}{2}" /> を考える。
                        <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                            <li><InlineMath math="f(m) = \mu" /> であれば、<InlineMath math="c = m" /> として証明は終了。</li>
                            <li><InlineMath math="f(m) < \mu" /> ならば、右半分を採用し <InlineMath math="a_{n+1} = m" />, <InlineMath math="b_{n+1} = b_n" /> とする。</li>
                            <li><InlineMath math="f(m) > \mu" /> ならば、左半分を採用し <InlineMath math="a_{n+1} = a_n" />, <InlineMath math="b_{n+1} = m" /> とする。</li>
                        </ul>
                    </li>
                    <li>
                        これを繰り返すと、常に <InlineMath math="f(a_n) \leq \mu \leq f(b_n)" /> を満たす区間列 <InlineMath math="[a_n, b_n]" /> が得られる。
                        区間の幅はステップごとに半分になるため、<InlineMath math="b_n - a_n = \frac{b - a}{2^{n-1}} \to 0" /> (<InlineMath math="n \to \infty" />) となる。
                    </li>
                </ol>
            </ContentBox>

            <p>
                それでは、この区間列に対して完備性の公理と関数の連続性を適用して、証明を完了させましょう。
            </p>

            <ContentBox type="proof" title="Proof (中間値の定理)">
                <p>
                    上記の区間縮小法により構成された閉区間列 <InlineMath math="I_n = [a_n, b_n]" /> は、
                </p>
                <BlockMath math="I_1 \supset I_2 \supset \cdots \supset I_n \supset \cdots" />
                <p>
                    を満たし、その長さは 0 に収束する。
                    区間縮小法の原理（Theorem 2.3-2）より、これらの共通部分として唯一つの実数 <InlineMath math="c" /> が存在し、
                    <InlineMath math="\lim_{n \to \infty} a_n = \lim_{n \to \infty} b_n = c" /> となる。
                </p>
                <p className="mt-4">
                    関数 <InlineMath math="f" /> は <InlineMath math="c" /> においても連続であるから、極限の順序を入れ替えることができ、数列の極限に対する関数値の極限として
                </p>
                <BlockMath math="\lim_{n \to \infty} f(a_n) = f(c)" />
                <BlockMath math="\lim_{n \to \infty} f(b_n) = f(c)" />
                <p>
                    が成り立つ。
                    一方で、構成の仕方から常に <InlineMath math="f(a_n) \leq \mu \leq f(b_n)" /> が成り立つ。
                    極限をとることで大小関係は保たれるため、
                </p>
                <BlockMath math="f(c) \leq \mu \leq f(c)" />
                <p>
                    結論として、<InlineMath math="f(c) = \mu" /> となり、条件を満たす実数 <InlineMath math="c" /> の存在が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">方程式の実数解の存在への応用</h2>

            <p>
                中間値の定理の最も直接的な応用は、代数方程式が実数解を持つかどうかの判定です。特に関数が正と負の異なる値を取る場合、その間に必ず 0 が存在するという性質を利用します。
            </p>

            <ContentBox type="corollary" title="Corollary 4.3-1 (奇数次多項式の実数解)">
                <p>
                    実数係数の奇数次多項式は、少なくとも1つの実数解を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    奇数次多項式を <InlineMath math="P(x) = a_{2m+1}x^{2m+1} + \cdots + a_1x + a_0 \quad (a_{2m+1} \neq 0)" /> とする。<br />
                    最高次の係数が <InlineMath math="a_{2m+1} > 0" /> の場合を考える（負の場合は <InlineMath math="-P(x)" /> を考えればよい）。
                </p>
                <p className="mt-4">
                    <InlineMath math="x" /> が十分に大きい正の数のとき、最高次数の項 <InlineMath math="a_{2m+1}x^{2m+1}" /> が支配的になるため、<InlineMath math="\lim_{x \to \infty} P(x) = \infty" /> となる。よって、ある大きな実数 <InlineMath math="b > 0" /> に対して <InlineMath math="P(b) > 0" />。<br />
                    逆に、<InlineMath math="x" /> が絶対値の大きな負の数のとき、奇数乗であるため最高次数の項は負となり <InlineMath math="\lim_{x \to -\infty} P(x) = -\infty" /> となる。よって、ある小さな実数 <InlineMath math="a < 0" /> に対して <InlineMath math="P(a) < 0" />。
                </p>
                <p className="mt-4">
                    多項式 <InlineMath math="P(x)" /> は連続関数であるから、閉区間 <InlineMath math="[a, b]" /> において中間値の定理を適用する。
                    <InlineMath math="P(a) < 0 < P(b)" /> であるから、<InlineMath math="P(c) = 0" /> となる実数 <InlineMath math="c \in (a, b)" /> が必ず存在する。これが実数解である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                方程式を代数的に解の公式などを用いて解けない場合であっても、解析学の中間値の定理を用いることで、解の<strong>存在</strong>を確実に証明することができます。このように、存在定理は解析学における強力な武器の一つとなります。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>中間値の定理は、閉区間上の連続関数が両端の間のすべての値をとることを保証する。</li>
                    <li>厳密な証明には、区間縮小法という実数の完備性に基づく方法を用いるのが一般的かつ構成的である。</li>
                    <li>応用として、方程式（特に奇数次多項式のゼロ点）の実数解の存在証明に用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
