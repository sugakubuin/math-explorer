import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function EigenvalueAndEigenvector() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章から、「固有値・固有ベクトル」という線形代数学において極めて重要なトピックに入ります。<br />
                行列（あるいは線形変換）の振る舞いを理解するには、その行列を掛けても「方向が変わらないような特別なベクトル」に注目することが非常に有効です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定義</h2>

            <ContentBox type="definition" title="Definition 5.1-1 （固有値・固有ベクトル / Eigenvalue & Eigenvector）">
                <p>
                    <InlineMath math="V" /> を体 <InlineMath math="K" /> 上のベクトル空間とし、<InlineMath math="f: V \to V" /> を線形変換（自己準同型）とする。<br />
                    ある<strong>零ベクトルでない</strong>ベクトル <InlineMath math="\boldsymbol{v} \in V \setminus \{\boldsymbol{0}\}" /> とスカラー <InlineMath math="\lambda \in K" /> が存在して、
                </p>
                <BlockMath math="f(\boldsymbol{v}) = \lambda \boldsymbol{v}" />
                <p>
                    を満たすとき、<br />
                    <InlineMath math="\lambda" /> を <InlineMath math="f" /> の<strong>固有値（Eigenvalue）</strong>と呼び、<br />
                    <InlineMath math="\boldsymbol{v}" /> を固有値 <InlineMath math="\lambda" /> に属する<strong>固有ベクトル（Eigenvector）</strong>と呼ぶ。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">行列の場合</h3>
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> によって定まる線形変換 <InlineMath math="f(\boldsymbol{x}) = A\boldsymbol{x}" /> を考える場合も同様である。<br />
                    <InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" /> となるベクトル <InlineMath math="\boldsymbol{v} \in \mathbb{R}^n" />（または <InlineMath math="\mathbb{C}^n" />）とスカラー <InlineMath math="\lambda" /> について、
                </p>
                <BlockMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" />
                <p>
                    が成り立つとき、<InlineMath math="\lambda" /> を行列 <InlineMath math="A" /> の固有値、<InlineMath math="\boldsymbol{v}" /> を <InlineMath math="A" /> の固有ベクトルと呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Note: なぜ零ベクトルを除外するのか">
                <p>
                    定義において「<InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" />」という条件が非常に重要です。<br />
                    もし <InlineMath math="\boldsymbol{v} = \boldsymbol{0}" /> を許してしまうと、<InlineMath math="A\boldsymbol{0} = \boldsymbol{0} = \lambda \boldsymbol{0}" /> は<strong>どんなスカラー <InlineMath math="\lambda" /> に対しても成り立ってしまい</strong>、全く意味のない（有益な情報を持たない）定義になってしまうからです。
                </p>
                <p>
                    一方で、固有値 <InlineMath math="\lambda" /> 自身が <InlineMath math="0" /> になることは全く問題ありません（その場合、<InlineMath math="A\boldsymbol{v} = \boldsymbol{0}" />、つまり <InlineMath math="\boldsymbol{v} \in \ker A" /> となります）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的意味</h2>

            <p>
                固有ベクトルと固有値の幾何学的な意味を考えてみましょう。
            </p>

            <ContentBox type="remark" title="幾何学的解釈：方向が変わらないベクトル">
                <p>
                    行列 <InlineMath math="A" /> をベクトル <InlineMath math="\boldsymbol{x}" /> に掛けるという操作は、一般的にはベクトルの<strong>「向き」</strong>と<strong>「大きさ」</strong>の両方を変えてしまいます。<br />
                    しかし、特殊なベクトル <InlineMath math="\boldsymbol{v}" /> を選ぶと、<InlineMath math="A" /> を掛けても<strong>「向きが元のままで、単に定数倍されるだけ」</strong>になります。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>固有ベクトル <InlineMath math="\boldsymbol{v}" />：</strong> 変換によって「向きが変わらない（あるいは真逆になる）」方向</li>
                    <li><strong>固有値 <InlineMath math="\lambda" />：</strong> その方向に沿ってベクトルが何倍に伸び縮みするかを表す「スケール因子（倍率）」</li>
                </ul>
                <p className="mt-4">
                    例えば <InlineMath math="\lambda = 2" /> であればその方向の矢印は「同じ向きで長さが2倍」になり、<InlineMath math="\lambda = -1" /> であれば「真逆の向きで長さが同じ」になります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.1-1 （対称な拡大の例）">
                <p>
                    次のような対角行列を考えます。
                </p>
                <BlockMath math="A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}" />
                <p>
                    この行列に基本ベクトル <InlineMath math="\boldsymbol{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}" /> と <InlineMath math="\boldsymbol{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" /> を掛けてみます。
                </p>
                <BlockMath math="A\boldsymbol{e}_1 = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 0 \end{pmatrix} = 2\boldsymbol{e}_1" />
                <BlockMath math="A\boldsymbol{e}_2 = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 3 \end{pmatrix} = 3\boldsymbol{e}_2" />
                <p>
                    これは、<InlineMath math="x" /> 軸方向のベクトル（<InlineMath math="\boldsymbol{e}_1" />）は向きが変わらず長さが <InlineMath math="2" /> 倍になり、<InlineMath math="y" /> 軸方向のベクトル（<InlineMath math="\boldsymbol{e}_2" />）も向きが変わらず長さが <InlineMath math="3" /> 倍になるという関係を表しています。<br />
                    したがって、固有値は <InlineMath math="2" /> と <InlineMath math="3" /> であり、それぞれに対応する固有ベクトルは <InlineMath math="\boldsymbol{e}_1" /> と <InlineMath math="\boldsymbol{e}_2" /> のスカラー倍です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="A\boldsymbol{v} = \lambda \boldsymbol{v}" />（<InlineMath math="\boldsymbol{v} \neq \boldsymbol{0}" />）を満たすスカラー <InlineMath math="\lambda" /> を<strong>固有値</strong>、ベクトル <InlineMath math="\boldsymbol{v}" /> を<strong>固有ベクトル</strong>と呼ぶ。</li>
                    <li>固有ベクトルとは、行列の変換によって<strong>「方向が変化しない」</strong>特別なベクトルである。</li>
                    <li>固有値とは、その方向に対する<strong>「スケール因子（倍率）」</strong>を表す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
