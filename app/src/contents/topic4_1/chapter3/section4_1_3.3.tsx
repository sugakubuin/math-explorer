import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfBoundedLinearOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、関数解析における具体例として頻出する、いくつかの重要な有界線形作用素の振る舞いを見ていきます。行列の無限次元への自然な拡張である「無限行列」、微積分の根本である「積分作用素」、そして無限次元空間ならではの直観に反する現象を引き起こす「シフト作用素」を取り上げ、それぞれの作用素ノルムを評価します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列作用素と積分作用素</h2>

            <p>
                無限次元空間上の線形作用素の最も分かりやすい例は、行列のサイズをそのまま無限大に拡張したものです。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (無限対角行列の作用素ノルム)">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> から <InlineMath math="\ell^2" /> への線形作用素 <InlineMath math="A" /> を、有界なスカラー数列 <InlineMath math="(\lambda_n)" /> を用いて次のように定義する。
                </p>
                <BlockMath math="A(x_1, x_2, \ldots) = (\lambda_1 x_1, \lambda_2 x_2, \ldots)" />
                <p>
                    これは、対角成分が <InlineMath math="\lambda_n" /> でそれ以外がすべて <InlineMath math="0" /> の無限次元対角行列を掛ける操作に対応する。任意の <InlineMath math="x \in \ell^2" /> に対してノルムの2乗を計算すると、
                </p>
                <BlockMath math="\begin{aligned} \|Ax\|_2^2 &= \sum_{n=1}^\infty |\lambda_n x_n|^2 \\ &\leq \sup_{k} |\lambda_k|^2 \sum_{n=1}^\infty |x_n|^2 \\ &= \left( \sup_k |\lambda_k| \right)^2 \|x\|_2^2 \end{aligned}" />
                <p>
                    となるため、平方根をとることで <InlineMath math="\|Ax\|_2 \leq \sup_k |\lambda_k| \, \|x\|_2" /> を得る。すなわち作用素ノルムの上限評価として <InlineMath math="\|A\| \leq \sup_k |\lambda_k|" /> がわかる。
                </p>
                <p>
                    また、第 <InlineMath math="n" /> 成分のみが <InlineMath math="1" /> で他が <InlineMath math="0" /> の単位ベクトル <InlineMath math="e_n" /> を入力すると <InlineMath math="Ae_n = \lambda_n e_n" /> となり、<InlineMath math="\|Ae_n\|_2 = |\lambda_n|" /> である。よってすべての <InlineMath math="n" /> において <InlineMath math="\|A\| \geq |\lambda_n|" /> でなければならず、結果として作用素ノルムは厳密に
                </p>
                <BlockMath math="\|A\| = \sup_n |\lambda_n|" />
                <p>
                    となる。
                </p>
            </ContentBox>

            <p>
                連続空間上の作用素として微分作用素（Example 3.1-2）が非有界であったのに対し、「積分」は誤差を滑らかに均す操作であるため、非常に素性の良い有界作用素となります。
            </p>

            <ContentBox type="example" title="Example 3.3-2 (積分作用素の有界性)">
                <p>
                    閉区間 <InlineMath math="[a,b]" /> 上の連続関数空間 <InlineMath math="C[a,b]" /> （上限ノルム <InlineMath math="\|\cdot\|_\infty" /> を入れる）上の積分作用素 <InlineMath math="T" /> を、連続な2変数関数（核関数） <InlineMath math="K(x,t)" /> を用いて以下のように定義する。
                </p>
                <BlockMath math="(Tf)(x) = \int_a^b K(x,t) f(t) \, dt" />
                <p>
                    <InlineMath math="K(x,t)" /> は有界閉領域 <InlineMath math="[a,b] \times [a,b]" /> 上で連続なので最大値を持つ。その絶対値の上限を <InlineMath math="M = \sup_{x,t} |K(x,t)|" /> とする。<InlineMath math="Tf" /> の上限ノルムを評価すると、
                </p>
                <BlockMath math="\begin{aligned} \|Tf\|_\infty &= \sup_x \left| \int_a^b K(x,t) f(t) \, dt \right| \\ &\leq \sup_x \int_a^b |K(x,t)| |f(t)| \, dt \\ &\leq \sup_x \int_a^b M \|f\|_\infty \, dt \\ &= M \|f\|_\infty (b-a) \end{aligned}" />
                <p>
                    となり、<InlineMath math="\|Tf\|_\infty \leq M(b-a) \|f\|_\infty" /> を得る。定数 <InlineMath math="M(b-a)" /> が存在するため、この積分作用素 <InlineMath math="T" /> は有界線形作用素であり、作用素ノルムは <InlineMath math="\|T\| \leq M(b-a)" /> を満たす。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界性の判定例とシフト作用素</h2>

            <p>
                最後に紹介するのは、無限次元空間ならではの「要素を1つずつずらす」シフト作用素です。要素の数が無限にあるからこそ定義できるこの作用素は、非常に単純でありながら、関数解析の様々な場面で興味深い反例や現象を生み出す源泉となります。
            </p>

            <ContentBox type="example" title="Example 3.3-3 (左シフト作用素)">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> 上の作用素として、すべての成分を左に1つずらし、先頭成分を切り捨てる左シフト作用素 <InlineMath math="L" /> を定義する。
                </p>
                <BlockMath math="L(x_1, x_2, x_3, \ldots) = (x_2, x_3, x_4, \ldots)" />
                <p>
                    任意のベクトル <InlineMath math="x" /> に対して、出力のノルムの2乗は
                </p>
                <BlockMath math="\|Lx\|_2^2 = \sum_{n=2}^\infty |x_n|^2 \leq \sum_{n=1}^\infty |x_n|^2 = \|x\|_2^2" />
                <p>
                    となるため、<InlineMath math="\|L\| \leq 1" /> が従う。また、先頭成分が <InlineMath math="0" /> のベクトル（例えば <InlineMath math="(0, 1, 0, \ldots)" />）を入力すればノルムは全く減少しないため、作用素ノルムは厳密に <InlineMath math="\|L\| = 1" /> である。有界な作用素だが、先頭成分の情報を常に失い続けるため、単射ではない。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-4 (右シフト作用素)">
                <p>
                    同じく <InlineMath math="\ell^2" /> 上で、すべての成分を右に1つずらし、空いた先頭成分に <InlineMath math="0" /> を詰める右シフト作用素 <InlineMath math="R" /> を定義する。
                </p>
                <BlockMath math="R(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)" />
                <p>
                    出力のノルムの2乗を計算すると、
                </p>
                <BlockMath math="\|Rx\|_2^2 = 0^2 + \sum_{n=1}^\infty |x_n|^2 = \|x\|_2^2" />
                <p>
                    となる。つまりすべてのベクトルに対してノルムを完全に保存する。このような作用素を等長作用素（isometric operator）と呼び、作用素ノルムは明らかに <InlineMath math="\|R\| = 1" /> である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="有限次元と無限次元の違いの象徴">
                <p>
                    右シフト作用素 <InlineMath math="R" /> は要素を一つも潰さないため単射（1対1写像）です。しかし、像ベクトルは必ず先頭要素が加わる（<InlineMath math="0" />になる）ため、空間全体へは絶対に到達できません（全射ではない）。
                </p>
                <p>
                    線形代数の基本定理として、有限次元ベクトル空間においては「単射であること」と「全射であること」は同値でした。しかしシフト作用素の存在は、無限次元空間においては「単射だが全射でない写像」や「全射だが単射でない写像（左シフト）」が極めて当たり前に存在しうることをエレガントに示しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限成分の対角行列は、その対角成分の絶対値の上限を取ることで作用素ノルムが与えられる（Example 3.3-1）。</li>
                    <li>適当な有界な核関数を用いた積分作用素は、微分作用素と異なり常に有界な線形作用素となる（Example 3.3-2）。</li>
                    <li>シフト作用素は作用素ノルム <InlineMath math="1" /> の有界作用素であるが、無限次元特有の「単射と全射の非同値性」を直感的に示してくれる（Example 3.3-3, 3.3-4）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
