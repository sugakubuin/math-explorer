import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NonNegativeIntegral() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                単関数の積分の定義が確立された今、それを一般の非負値可測関数へと拡張します。
                ルベーグ積分における一般の関数の積分は、その関数を「下から」近似する単関数の極限（上限）として定義されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">非負値可測関数の積分</h2>

            <p>
                「下からの近似」という考え方はリーマン積分における不足和に似ていますが、ルベーグ積分では単関数の値域を分割するため、より多くの関数に対して積分が定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (非負値可測関数の積分)">
                <p>
                    非負値可測関数 <InlineMath math="f : X \to [0, +\infty]" /> に対して、その<b>ルベーグ積分</b>を次の上限として定義する：
                    <BlockMath math="\int_X f \, d\mu = \sup \left\{ \int_X s \, d\mu \mid s \in \mathcal{S}, 0 \leq s \leq f \right\}" />
                    ここで、<InlineMath math="\mathcal{S}" /> はすべての非負値単関数の集合である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (ディリクレ関数のルベーグ積分)">
                <p>
                    区間 <InlineMath math="I = [0, 1]" /> 上のディリクレ関数を考える。
                </p>
                <BlockMath math="f(x) = \mathbf{1}_{\mathbb{Q} \cap I}(x) = \begin{cases} 1 & (x \in \mathbb{Q} \cap I) \\ 0 & (x \notin \mathbb{Q} \cap I) \end{cases}" />
                <p className="mt-4">
                    この関数はリーマン積分不可能であるが、特性関数の定義より、ルベーグ測度 <InlineMath math="\lambda" /> に対しては可測関数である。
                    積分の定義に従うと、
                    <BlockMath math="\int_I f \, d\lambda = 1 \cdot \lambda(\mathbb{Q} \cap I) + 0 \cdot \lambda(I \setminus \mathbb{Q}) = 1 \cdot 0 + 0 \cdot 1 = 0" />
                    となる（有理数集合の測度は 0 であるため）。積分値は 0 として確定する。
                </p>
            </ContentBox>

            <h3 className="text-xl font-semibold mt-10 mb-4">単関数近似列との関係</h3>
            <p>
                上限による定義は抽象的ですが、§2.3 で学んだ「単調近似定理」を用いると、実際の積分計算のイメージが具体的になります。
                非負値可測関数 <InlineMath math="f" /> に対し、増加する単関数列 <InlineMath math="s_n \nearrow f" /> を取れば、
                <BlockMath math="\int f \, d\mu = \lim_{n \to \infty} \int s_n \, d\mu" />
                が成り立ちます。これが、次節で学ぶ「単調収束定理」の出発点となります。
            </p>

            <ContentBox type="remark" title="リーマン積分との違い">
                <p>
                    リーマン積分は、定義域（横軸）を細分化し、その区間上での関数の「上限」と「下限」を用いた長方形で近似します。
                    ルベーグ積分は、値域（縦軸）を細分化し、その値をとるような「点の集合」を測ることで、関数の変動が激しい場合でも値を正しく評価できます。
                    不連続な点が多い関数（ディリクレ関数など）において、この違いが明確に現れます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>非負値可測関数の積分は、自身以下の<b>単関数の積分の上限</b>として定義される。</li>
                    <li>この定義により、リーマン非可積分な<b>ディリクレ関数</b>なども積分可能となる。</li>
                    <li>上限による定義は、増加する単関数列の極限としての計算手法を正当化する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
