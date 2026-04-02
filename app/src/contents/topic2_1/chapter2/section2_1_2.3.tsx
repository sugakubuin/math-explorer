import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DefinitionOfBasis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで「線形空間を作る（生成系・スパン）」ことと、「ベクトルの無駄をなくす（線形独立）」ことの2つを学びました。
                これら2つの条件を両方とも満たす、ベクトル空間の「骨組み」とも言える特別なベクトルの組を<strong>基底（きてい、Basis）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底の定義</h2>

            <ContentBox type="definition" title="Definition 2.3-1 （基底 / Basis）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> のいくつかのベクトルからなる集合 <InlineMath math="B = \{\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n\}" /> が以下の2つの条件を両方とも満たすとき、<InlineMath math="B" /> は <InlineMath math="V" /> の<strong>基底</strong>であるという。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <strong>生成系（スパン）である：</strong><br />
                        <InlineMath math="V" /> の任意のベクトルは、<InlineMath math="B" /> の線形結合として表せる（<InlineMath math="V = \mathrm{Span}(B)" />）。
                    </li>
                    <li>
                        <strong>線形独立である：</strong><br />
                        <InlineMath math="B" /> のベクトルの間に自明でない線形関係が存在しない（無駄なベクトルが含まれていない）。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="基底の意味（一意な座標決定）">
                <p>
                    この2つの条件が揃うと何が嬉しいのでしょうか？ それは「<strong>任意のベクトルを一意に表現できる</strong>」ようになることです。<br />
                    条件1により、どんなベクトルも表現は可能です。しかしもし線形独立でなかった（無駄があった）場合、同じベクトルを作るための材料の組み合わせ方が何通りも存在してしまいます。
                    条件2（線形独立性）により、その「組み合わせ方」がたった1通りに確定するのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底の例
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底の具体例</h2>

            <ContentBox type="example" title="Example 2.3-1 （標準基底など）">
                <p className="font-bold">【例1】 数ベクトル空間 <InlineMath math="\mathbb{R}^3" /> の標準基底</p>
                <p>
                    以下の3つのベクトルは <InlineMath math="\mathbb{R}^3" /> の基底になります。
                </p>
                <BlockMath math="\boldsymbol{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \boldsymbol{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \quad \boldsymbol{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}" />
                <p className="mt-2">
                    これらは明らかに互いに無駄がなく（線形独立）、任意の <InlineMath math="(x,y,z)" /> は <InlineMath math="x\boldsymbol{e}_1 + y\boldsymbol{e}_2 + z\boldsymbol{e}_3" /> と作れるため生成系です。これを<strong>標準基底 (standard basis)</strong> と呼びます。
                </p>

                <p className="font-bold mt-6">【例2】 同じ空間の別の基底</p>
                <p>
                    基底は1つだけではありません。<InlineMath math="\mathbb{R}^3" /> の基底として
                </p>
                <BlockMath math="\boldsymbol{u}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \boldsymbol{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \quad \boldsymbol{u}_3 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}" />
                <p className="mt-2">
                    を選ぶこともできます。連立方程式を解けば、これが線形独立であり、任意のベクトルを表現できることが証明できます（行列式が0でないこととも同値です）。
                </p>

                <p className="font-bold mt-6">【例3】 多項式空間 <InlineMath math="\mathbb{R}[x]_{\leq 2}" /> の標準基底</p>
                <p>
                    2次以下の多項式全体 <InlineMath math="\mathbb{R}[x]_{\leq 2}" /> （例：<InlineMath math="P(x) = ax^2 + bx + c" />）において、<InlineMath math="\{1, x, x^2\}" /> は基底となります。<br />
                    任意の2次多項式はこれら3つの線形結合で書け、かつ恒等的に0になるのは係数がすべて0のときのみだからです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 基底の個数の一意性
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">基底の個数の一意性</h2>

            <p>
                先の例で見たように、1つのベクトル空間に対して基底は無数に存在します。しかし、<strong>「基底を構成するベクトルの個数」は、どの基底を選んでも必ず同じになる</strong>という非常に美しい性質があります。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 （有限次元ベクトル空間の基底の個数は一定）">
                <p>
                    ベクトル空間 <InlineMath math="V" /> が有限個のベクトルからなる基底をもつとする（このような空間を<strong>有限次元</strong>という）。<br />
                    このとき、<InlineMath math="V" /> の任意の2つの基底の<strong>要素の個数は常に等しい</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof （基底の個数が一定であることの証明概略）">
                <p>
                    ステニツの交換補題（Steinitz exchange lemma）を用いて背理法により示すのが標準的である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="V" /> に <InlineMath math="m" /> 個のベクトルからなる基底 <InlineMath math="A" /> と、<InlineMath math="n" /> 個からなる基底 <InlineMath math="B" /> があるとする（<InlineMath math="m \neq n" />）。</li>
                    <li>仮に <InlineMath math="n > m" /> とする。<InlineMath math="A" /> は基底（生成系）なので、<InlineMath math="B" /> の要素 <InlineMath math="\boldsymbol{b}_1" /> を <InlineMath math="A" /> の要素の線形結合で書ける。</li>
                    <li>ここで <InlineMath math="A" /> に <InlineMath math="\boldsymbol{b}_1" /> を追加し、代わりに <InlineMath math="A" /> の中から（線形従属にならないように）あるベクトル <InlineMath math="\boldsymbol{a}_i" /> を取り除いて新しい生成系を作ることができる。</li>
                    <li>同様に、<InlineMath math="B" /> の次の要素 <InlineMath math="\boldsymbol{b}_2, \boldsymbol{b}_3, \dots" /> を順に追加し、代わりに <InlineMath math="A" /> の要素を追い出していく。</li>
                    <li><InlineMath math="A" /> の要素は <InlineMath math="m" /> 個しかないため、<InlineMath math="m" /> 回の操作で <InlineMath math="A" /> の要素はすべて <InlineMath math="\boldsymbol{b}" /> の要素に置き換わる。</li>
                    <li>まだ <InlineMath math="B" /> には <InlineMath math="n - m" /> 個のベクトルが残っている（<InlineMath math="n > m" /> より）。これらはすでにできあがった生成系（<InlineMath math="\boldsymbol{b}_1, \dots, \boldsymbol{b}_m" />）の線形結合で表現できるはずである。</li>
                    <li>しかし、これは <InlineMath math="B" /> 自身が線形独立であること（基底の条件2）に矛盾する。</li>
                </ol>
                <p className="mt-2">
                    したがって <InlineMath math="n > m" /> はありえない。役割を逆にすると <InlineMath math="m > n" /> もありえない。ゆえに必ず <InlineMath math="m = n" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>生成系</strong>であり、かつ<strong>線形独立</strong>なベクトルの組を<strong>基底</strong>という（Definition 2.3-1）。</li>
                    <li>基底を用いることで、空間内のすべてのベクトルを「過不足なく一意な組み合わせで」表現できる（Remark）。</li>
                    <li>1つの空間に対して基底の選び方は無数にあるが、<strong>それを構成するベクトルの個数はどんな選び方をしても必ず一致する</strong>（Theorem 2.3-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
