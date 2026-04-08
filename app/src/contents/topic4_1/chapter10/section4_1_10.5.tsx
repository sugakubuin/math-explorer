import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SpectralTheoremForNormalOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                自己共役作用素（固有値が実数）に対するスペクトル定理が完成しました。複素数の固有値を持つ作用素、特に等長性を保つ「ユニタリ作用素」にもこのような美しい分解定理は存在するのでしょうか。その答えは、正規作用素（<InlineMath math="T^*T = TT^*" />）のクラスにまで拡大可能という形で与えられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規作用素の実部・虚部分解</h2>

            <p>
                正規作用素を「実数と虚数」のように2つの自己共役作用素に分解することが、理論の出発点です。
            </p>

            <ContentBox type="definition" title="Definition 10.5-1 (作用素の実部と虚部)">
                <p>
                    任意の有界線形作用素 <InlineMath math="T \in B(H)" /> に対して、
                </p>
                <BlockMath math="A = \frac{T + T^*}{2}, \quad B = \frac{T - T^*}{2i}" />
                <p>
                    で定義される2つの作用素を考える。それぞれ直接随伴をとることで <InlineMath math="A^* = A" />、<InlineMath math="B^* = B" /> が確認でき、これらは<b>自己共役作用素</b>となる。さらに
                </p>
                <BlockMath math="T = A + iB" />
                <p>
                    と表される。この <InlineMath math="A" /> を <InlineMath math="T" /> の<b>実部（real part）</b>、<InlineMath math="B" /> を<b>虚部（imaginary part）</b>とよぶ。
                </p>
            </ContentBox>

            <p>
                この分解において「正規性」がもたらす決定的な性質が次の命題です。
            </p>

            <ContentBox type="theorem" title="Proposition 10.5-1">
                <p>
                    作用素 <InlineMath math="T" /> が正規作用素であること（<InlineMath math="T^*T = TT^*" />）と、その実部 <InlineMath math="A" /> と虚部 <InlineMath math="B" /> が結合して<b>交換可能（可換）</b>であること（<InlineMath math="AB = BA" />）は同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="T = A + iB" />、<InlineMath math="T^* = A - iB" /> を <InlineMath math="T^*T" /> と <InlineMath math="TT^*" /> の式に代入して展開する。
                </p>
                <BlockMath math="\begin{aligned}
                    T^*T &= (A - iB)(A + iB) = A^2 + iAB - iBA + B^2 \\
                    TT^* &= (A + iB)(A - iB) = A^2 - iAB + iBA + B^2
                \end{aligned}" />
                <p>
                    したがって、差をとると
                </p>
                <BlockMath math="T^*T - TT^* = 2i(AB - BA)" />
                <p>
                    となり、左辺が0であること（正規性）と、右辺の括弧内が0であること（可換性）が完全に同値になる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 10.5-1">
                <p>
                    対角作用素 <InlineMath math="T(x_n) = (\lambda_n x_n)" />（<InlineMath math="\lambda_n \in \mathbb{C}" />）について実部と虚部を計算します。<br />
                    <InlineMath math="T^*" /> は成分ごとに複素共役をとる作用素なので、実部作用素は <InlineMath math="A(x_n) = (\text{Re}(\lambda_n)x_n)" />、虚部作用素は <InlineMath math="B(x_n) = (\text{Im}(\lambda_n)x_n)" /> となります。<br />
                    これらはどちらも対角作用素であるため当然交換可能（<InlineMath math="AB = BA" />）であり、<InlineMath math="T" /> が正規作用素であることが容易に確認できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規作用素のスペクトル定理</h2>

            <p>
                実部と虚部が「自己共役」かつ「可換」であることから、前節のスペクトル定理を二次元的（複素平面上）に組み合わせることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.5-1 (有界正規作用素のスペクトル定理)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間、<InlineMath math="T" /> を有界正規作用素（<InlineMath math="T^*T = TT^*" />）とする。<br />
                    このとき、複素平面 <InlineMath math="\mathbb{C}" /> 上のボレル集合を定義域とする一意なスペクトル測度 <InlineMath math="E" /> が存在して、
                </p>
                <BlockMath math="T = \int_{\sigma(T)} \lambda \, dE(\lambda)" />
                <p>
                    とスペクトル分解される。<br />
                    スペクトル測度の台はちょうど <InlineMath math="\sigma(T) \subset \mathbb{C}" /> に一致し、この複素平面上の関数でボレル関数計算が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の核は、「可換な2つの有界自己共役作用素は、共通のスペクトル測度によって同時に分解できる」という事実に帰着する。<br />
                    1. <InlineMath math="A" /> と <InlineMath math="B" /> はそれぞれ自己共役なので、個別にスペクトル測度 <InlineMath math="E_A" /> （<InlineMath math="\mathbb{R}" />上の測度）と <InlineMath math="E_B" /> を持つ。<br />
                    2. <InlineMath math="AB = BA" /> であるため、これらから生成される射影作用素同士も互いに可換となる（<InlineMath math="E_A(S)E_B(U) = E_B(U)E_A(S)" />）。<br />
                    3. この直交射影の積を、「直積集合（複素平面上の長方形領域）に対する測度」とみなすことで、複素平面 <InlineMath math="\mathbb{C}" /> 上の新しいスペクトル測度 <InlineMath math="E = E_A \times E_B" /> が二次元ルベーグ測度のように構成できる。<br />
                    4. こうして得られた <InlineMath math="E" /> を用いると、<InlineMath math="T = A + iB = \int x\,dE_A + i\int y\,dE_B = \int (x+iy)\,dE(x,y) = \int \lambda\,dE(\lambda)" /> となり、定理の主張が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理は、正規作用素の非常に重要な部分クラスである「ユニタリ作用素」に対して強力な描像を与えます。
            </p>

            <ContentBox type="example" title="Example 10.5-2 (ユニタリ作用素のスペクトル分解)">
                <p>
                    ユニタリ作用素 <InlineMath math="U" /> （<InlineMath math="U^*U = UU^* = I" />）は正規作用素です。さらに Proposition 8.2-2 より固有値（スペクトル）はすべて絶対値1、つまり複素平面の単位円周上 <InlineMath math="S^1 = \{\lambda \in \mathbb{C} \mid |\lambda| = 1\}" /> に収まります。<br />
                    したがって、積分領域はこの単位円周だけになり、極形式 <InlineMath math="\lambda = e^{i\theta}" /> を用いると
                </p>
                <BlockMath math="U = \int_0^{2\pi} e^{i\theta} \, dE(\theta)" />
                <p>
                    のように、角度変数だけの積分として表現できます。この表現は、自己共役作用素 <InlineMath math="A" /> を用いて <InlineMath math="U = e^{iA}" /> と記述できる（ストーンの定理の入り口）という、物理的にも極めて重要な事実と直結しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ヒルベルト空間論と作用素環への広がり">
                <p>
                    コンパクト自己共役作用素（第9章）から始まったスペクトル分解の旅は、正規作用素の（積分を用いた代数的な）スペクトル定理という一つの終着点に達しました。<br />
                    ここで得られた「可換な作用素の集まりは、関数の掛け算と同じように振る舞う」という洞察は、ヒルベルト空間上のさらに高度な代数構造の研究、すなわち「可換C*-環のゲルファント・ナイマルク表現定理（作用素環論）」へと発展していきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有界正規作用素は、互いに可換な2つの自明な自己共役作用素（実部と虚部）に分解できる。</li>
                    <li>この可換性により、有界正規作用素にも複素平面上のスペクトル測度を用いたスペクトル分解の積分表示が成立する。</li>
                    <li>ユニタリ作用素に対しては、この定理により単位円周上の位相（角度）についての積分としてその振る舞いが完全に記述される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
