import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LagrangeMeanValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ロルの定理では <InlineMath math="f(a) = f(b)" /> という条件が必要でした。
                この制約を取り除いて一般化したものが<strong>ラグランジュの平均値定理</strong>です。
                幾何学的には、「曲線上のどこかに、端点を結ぶ割線に平行な接線が引ける」という主張であり、
                微分学における最も基本的かつ強力なツールの一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">平均値定理</h2>

            <ContentBox type="theorem" title="Theorem 2.2-1 (ラグランジュの平均値定理)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続であり、開区間 <InlineMath math="(a, b)" /> 上で微分可能であるとする。
                    このとき、ある <InlineMath math="c \in (a, b)" /> が存在して、
                </p>
                <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    端点 <InlineMath math="(a, f(a))" /> と <InlineMath math="(b, f(b))" /> を結ぶ直線（割線）の方程式は、
                </p>
                <BlockMath math="\ell(x) = f(a) + \frac{f(b) - f(a)}{b - a}(x - a)" />
                <p className="leading-relaxed">
                    である。補助関数 <InlineMath math="g(x) = f(x) - \ell(x)" /> を定義する。
                </p>
                <BlockMath math="g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)" />
                <p className="leading-relaxed">
                    この <InlineMath math="g" /> について確認する。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="g" /> は <InlineMath math="[a, b]" /> 上連続（<InlineMath math="f" /> と1次関数の差）</li>
                    <li><InlineMath math="g" /> は <InlineMath math="(a, b)" /> 上微分可能</li>
                    <li><InlineMath math="g(a) = 0" />、<InlineMath math="g(b) = f(b) - f(a) - (f(b) - f(a)) = 0" /></li>
                </ul>
                <p className="leading-relaxed mt-2">
                    よって <InlineMath math="g" /> はロルの定理（Theorem 2.1-2）の仮定をすべて満たす。
                    したがって、ある <InlineMath math="c \in (a, b)" /> が存在して <InlineMath math="g'(c) = 0" /> となる。
                </p>
                <BlockMath math="g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a}" />
                <p className="leading-relaxed">
                    であるから、<InlineMath math="g'(c) = 0" /> より
                </p>
                <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
                <p className="leading-relaxed">
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ラグランジュの平均値定理の証明では、「割線との差」という巧妙な補助関数を導入することで、ロルの定理に帰着させるという美しい論証でした。
                この「既知の定理に帰着させるための補助関数」というアイデアは、解析学で繰り返し現れる重要なテクニックです。
            </p>
            <p className="mt-2">
                平均値定理の最も基本的な応用として、導関数の符号から関数の単調性を厳密に証明することができます。
                高校数学では「<InlineMath math="f'(x) > 0" /> なら単調増加」という事実を当たり前に使っていましたが、それはまさに平均値定理によって裏付けられていたのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調性への応用</h2>

            <ContentBox type="theorem" title="Corollary 2.2-1 (導関数の符号と単調性の厳密な証明)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f" /> が区間 <InlineMath math="I" /> 上で微分可能であるとする。
                </p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                    <li><InlineMath math="f'(x) > 0" /> が <InlineMath math="I" /> 上で成り立つならば、<InlineMath math="f" /> は <InlineMath math="I" /> 上で狭義単調増加。</li>
                    <li><InlineMath math="f'(x) < 0" /> が <InlineMath math="I" /> 上で成り立つならば、<InlineMath math="f" /> は <InlineMath math="I" /> 上で狭義単調減少。</li>
                    <li><InlineMath math="f'(x) = 0" /> が <InlineMath math="I" /> 上で成り立つならば、<InlineMath math="f" /> は <InlineMath math="I" /> 上で定数。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    (1) を示す。<InlineMath math="I" /> 上の任意の2点 <InlineMath math="x_1 < x_2" /> をとる。
                    <InlineMath math="f" /> は <InlineMath math="[x_1, x_2]" /> 上で連続、<InlineMath math="(x_1, x_2)" /> 上で微分可能であるから、
                    平均値定理より、ある <InlineMath math="c \in (x_1, x_2)" /> が存在して、
                </p>
                <BlockMath math="f(x_2) - f(x_1) = f'(c)(x_2 - x_1)" />
                <p className="leading-relaxed">
                    仮定より <InlineMath math="f'(c) > 0" /> であり、<InlineMath math="x_2 - x_1 > 0" /> であるから、
                    <InlineMath math="f(x_2) - f(x_1) > 0" />、すなわち <InlineMath math="f(x_1) < f(x_2)" /> となる。
                    これは <InlineMath math="f" /> が狭義単調増加であることを意味する。(2), (3) も同様に示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                単調性の証明は、平均値定理の直接的かつ美しい応用でした。
                もう一つの応用として、平均値定理を用いた<strong>不等式の導出</strong>を見てみましょう。
                このテクニックは、評価が難しい関数の上下界を得るために広く使われます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">等式・不等式の証明への応用</h2>

            <ContentBox type="proposition" title="Proposition 2.2-1 (平均値定理を用いた不等式の導出)">
                <p className="leading-relaxed">
                    任意の <InlineMath math="x > 0" /> に対して、次の不等式が成り立つ。
                </p>
                <BlockMath math="\frac{x}{1 + x} < \ln(1 + x) < x" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    <InlineMath math="f(t) = \ln(1 + t)" /> とおく。<InlineMath math="f" /> は <InlineMath math="[0, x]" /> (<InlineMath math="x > 0" />) 上で連続、<InlineMath math="(0, x)" /> 上で微分可能であるから、
                    平均値定理より、ある <InlineMath math="c \in (0, x)" /> が存在して、
                </p>
                <BlockMath math="\frac{\ln(1 + x) - \ln 1}{x - 0} = f'(c) = \frac{1}{1 + c}" />
                <p className="leading-relaxed">
                    すなわち <InlineMath math="\ln(1 + x) = \frac{x}{1 + c}" /> である。
                    <InlineMath math="0 < c < x" /> であるから、
                </p>
                <BlockMath math="\frac{1}{1 + x} < \frac{1}{1 + c} < 1" />
                <p className="leading-relaxed">
                    両辺に <InlineMath math="x > 0" /> を掛けると、
                </p>
                <BlockMath math="\frac{x}{1 + x} < \frac{x}{1 + c} < x" />
                <p className="leading-relaxed">
                    すなわち <InlineMath math="\frac{x}{1+x} < \ln(1 + x) < x" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ラグランジュの平均値定理は、ロルの定理の一般化であり、補助関数を用いてロルの定理に帰着される。</li>
                    <li>導関数の符号から関数の単調性が厳密に証明できる（Corollary 2.2-1）。</li>
                    <li>平均値定理は不等式の導出にも有用であり（Proposition 2.2-1）、解析学の基本的なツールである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
