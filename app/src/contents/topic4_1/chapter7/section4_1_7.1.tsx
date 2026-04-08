import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProjectionTheoremAndNearestPoint() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では、ヒルベルト空間特有の強力な幾何学的性質について学びます。その最も基礎となるのが、「空間内の指定された集合に対して、そこから最も近い点を一意に見つけることができる」という射影定理です。これはユークリッド空間における垂線の足の概念を無限次元に拡張したものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">凸集合への最近傍点</h2>

            <p>
                一般的なバナッハ空間では、ある集合への「最短距離」を実現する点がただ一つ存在するとは限りません。しかし、内積によって幾何学的な「丸み（狭義凸性）」が保証されているヒルベルト空間では、閉凸集合に対する最近傍点が一意に定まります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (最近傍点の定理)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の空でない閉かつ凸な部分集合 <InlineMath math="C" /> を考える。このとき、任意の <InlineMath math="x \in H" /> に対して、<InlineMath math="x" /> から <InlineMath math="C" /> への距離を最小にする点（最近傍点）<InlineMath math="m_0 \in C" /> がただ1つ存在する。<br />
                    すなわち、ある一意の <InlineMath math="m_0 \in C" /> が存在して、次を満たす。
                </p>
                <BlockMath math="\|x - m_0\| = \inf_{m \in C} \|x - m\| = d(x, C)" />
            </ContentBox>

            <p>
                この強力な定理の証明は、コーシー列の構成（完備性の利用）と、ヒルベルト空間の代数的特徴である平行四辺形法則（§6.2）の鮮やかな組み合わせによって行われます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    距離の下限を <InlineMath math="d = \inf_{m \in C} \|x - m\|" /> とする。下限の性質から、ある点列 <InlineMath math="\{m_n\} \subset C" /> が存在し、<InlineMath math="\lim_{n \to \infty} \|x - m_n\| = d" /> となる。<br />
                    この <InlineMath math="\{m_n\}" /> がコーシー列であることを、平行四辺形法則（Theorem 6.2-2）を用いて示す。ベクトル <InlineMath math="x - m_n" /> と <InlineMath math="x - m_k" /> に対して平行四辺形法則を適用すると、
                </p>
                <BlockMath math="\begin{aligned} &\|(x - m_n) - (x - m_k)\|^2 + \|(x - m_n) + (x - m_k)\|^2 \\ &= 2\|x - m_n\|^2 + 2\|x - m_k\|^2 \\ &\|m_k - m_n\|^2 + 4\left\| x - \frac{m_n + m_k}{2} \right\|^2 \\ &= 2\|x - m_n\|^2 + 2\|x - m_k\|^2 \end{aligned}" />
                <p>
                    <InlineMath math="C" /> は凸集合なので中点 <InlineMath math="\frac{m_n + m_k}{2}" /> も <InlineMath math="C" /> に属する。したがって、その等式の左辺の第2項は下限の定義より <InlineMath math="4d^2" /> 以上である。これを整理すると、
                </p>
                <BlockMath math="\|m_k - m_n\|^2 \leq 2\|x - m_n\|^2 + 2\|x - m_k\|^2 - 4d^2" />
                <p>
                    <InlineMath math="n, k \to \infty" /> のとき右辺は <InlineMath math="2d^2 + 2d^2 - 4d^2 = 0" /> に収束する。したがって <InlineMath math="\{m_n\}" /> はコーシー列である。<br />
                    <InlineMath math="H" /> は完備であり、<InlineMath math="C" /> は閉集合なので、<InlineMath math="\{m_n\}" /> はある要素 <InlineMath math="m_0 \in C" /> に収束する。ノルムの連続性より <InlineMath math="\|x - m_0\| = d" /> となり、存在が示された。<br />
                    一意性についても同様に、もし別な最近傍点 <InlineMath math="m_0'" /> があれば中点がより短い距離を与える（あるいは平行四辺形法則で <InlineMath math="\|m_0 - m_0'\| = 0" /> となる）ことから直ちに従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な証明でしたが、私たちがよく知る有限次元のユークリッド空間において、この定理が何を意味しているのかを具体例で確認しましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-1">
                <p>
                    有限次元ユークリッド空間 <InlineMath math="\mathbb{R}^3" /> において、平面を <InlineMath math="C = \{(x, y, z) \in \mathbb{R}^3 \mid z = 0\}" /> とおく。<br />
                    <InlineMath math="C" /> は明らかに空でない閉凸集合（かつ閉部分空間）であるため、最近傍点の定理が適用できる。
                </p>
                <p>
                    空間内の点 <InlineMath math="P = (1, 2, 3)" /> から <InlineMath math="C" /> への最近傍点 <InlineMath math="m_0" /> は、直感的な垂線の足である <InlineMath math="(1, 2, 0)" /> に一致する。実際、<InlineMath math="\|P - (1, 2, 0)\| = 3" /> であり、他の任意の点 <InlineMath math="(x, y, 0) \in C" /> への距離は <InlineMath math="\sqrt{(1-x)^2 + (2-y)^2 + 3^2} \geq 3" /> となり最小化される。
                </p>
            </ContentBox>

            <p>
                このように、凸集合に対する「垂線の足」が一意に定まることが証明されました。ここで特に集合が部分空間である場合を考えると、強力な特徴づけが得られます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉部分空間への射影</h2>

            <p>
                先ほどの定理における <InlineMath math="C" /> が閉部分空間であった場合、降ろした垂線のベクトルと、もとの部分空間が直交するという幾何学的性質が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Corollary 7.1-1">
                <p>
                    <InlineMath math="M" /> をヒルベルト空間 <InlineMath math="H" /> の閉部分空間とする。任意の <InlineMath math="x \in H" /> に対して、Theorem 7.1-1 により <InlineMath math="M" /> 内にただ1つの最近傍点 <InlineMath math="m_0" /> が存在する。<br />
                    このとき、<InlineMath math="m_0 \in M" /> が <InlineMath math="x" /> の最近傍点であることは、差のベクトル <InlineMath math="x - m_0" /> が <InlineMath math="M" /> に直交すること、すなわち <InlineMath math="x - m_0 \in M^\perp" /> であることと同値である。
                </p>
            </ContentBox>

            <p>
                この直交性の同値条件は、微小な変動に関する不等式を評価することで、代数的に直接導き出されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    （<InlineMath math="\implies" />）<InlineMath math="m_0" /> を最近傍点とする。任意の <InlineMath math="m \in M" /> と任意の実スカラー <InlineMath math="t \in \mathbb{R}" /> について、<InlineMath math="m_0 + tm \in M" /> は部分空間であるから <InlineMath math="M" /> に属する。距離の最小性から
                </p>
                <BlockMath math="\|x - m_0\|^2 \leq \|x - (m_0 + tm)\|^2 = \|(x - m_0) - tm\|^2" />
                <p>
                    右辺を展開すると、
                </p>
                <BlockMath math="\|x - m_0\|^2 \leq \|x - m_0\|^2 - 2t\mathrm{Re}\langle x - m_0, m \rangle + t^2\|m\|^2" />
                <p>
                    よって、すべての <InlineMath math="t \in \mathbb{R}" /> に対して <InlineMath math="2t\mathrm{Re}\langle x - m_0, m \rangle - t^2\|m\|^2 \leq 0" /> となる。<InlineMath math="t" /> を微小に変化させることで、これは <InlineMath math="\mathrm{Re}\langle x - m_0, m \rangle = 0" /> であることを意味する。<InlineMath math="im" /> （複素数の場合）に対しても同様に考えることで <InlineMath math="\mathrm{Im}\langle x - m_0, m \rangle = 0" /> も得られ、<InlineMath math="\langle x - m_0, m \rangle = 0" />、すなわち <InlineMath math="x - m_0 \in M^\perp" /> が示された。<br />
                    （<InlineMath math="\impliedby" />）逆に <InlineMath math="x - m_0 \in M^\perp" /> と仮定する。このとき、任意の <InlineMath math="m \in M" /> に対してピタゴラスの定理（直交性からの展開）を用いると、
                </p>
                <BlockMath math="\begin{aligned}
                    \|x - m\|^2 &= \|(x - m_0) + (m_0 - m)\|^2 \\
                    &= \|x - m_0\|^2 + \|m_0 - m\|^2 \\
                    &\geq \|x - m_0\|^2
                \end{aligned}" />
                <p>
                    よって <InlineMath math="m_0" /> は距離を最小にする最近傍点である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                第2章や第6章で登場した関数空間を用いて、具体的な「関数への垂線の足」を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.1-2">
                <p>
                    関数空間 <InlineMath math="L^2[0,1]" /> において、定数関数が張る空間を <InlineMath math="M = \mathrm{span}\{1\}" /> とする。これは1次元の部分空間であり、有限次元ゆえに閉部分空間である。
                </p>
                <p>
                    関数 <InlineMath math="f(x) = x" /> を考える。これの <InlineMath math="M" /> への射影（最近傍点）<InlineMath math="m_0" /> を求めたい。定理より、<InlineMath math="m_0(x) = c" /> （定数）とおくと、<InlineMath math="f - m_0 \perp M" /> となるような <InlineMath math="c" /> を探せばよい。
                </p>
                <BlockMath math="\begin{aligned}
                    \langle f(x) - c, 1 \rangle &= \int_0^1 (x - c) \cdot 1 \,dx \\
                    &= \left[ \frac{1}{2}x^2 - cx \right]_0^1 \\
                    &= \frac{1}{2} - c = 0
                \end{aligned}" />
                <p>
                    これより <InlineMath math="c = 1/2" />。したがって <InlineMath math="f(x) = x" /> の <InlineMath math="M" /> への「最短の近似ベクトル」は <InlineMath math="m_0(x) = 1/2" /> となる。
                </p>
            </ContentBox>

            <p>
                このように、射影の計算はベクトルの微積分や線形代数の直感と完全に一致します。ここで、この定理がバナッハ空間一般では成立しないという重要な事実に触れておきます。
            </p>

            <ContentBox type="remark" title="バナッハ空間との違い">
                <p>
                    一般のバナッハ空間では、平行四辺形法則が使えないため、下限列がコーシー列であると結論付けることができず、最近傍点の存在や一意性は保証されません。射影定理は、ノルム構造だけでなく「内積構造」があって初めて機能する、ヒルベルト空間の中核をなす定理です。
                </p>
            </ContentBox>

            <p>
                最後に、ヒルベルト空間における最も根源的な幾何学定理である最近傍点の定理とその系（系 7.1-1）について、要点を振り返ります。
            </p>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルト空間における閉凸集合に対する最近傍点（距離を測って最小になる点）はただ一つ存在する（最近傍点の定理）。</li>
                    <li>射影先が閉部分空間の場合、最近傍点であることと「差のベクトルが直交すること」は同値である。</li>
                    <li>この定理は平行四辺形法則によって直接的に支えられている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
