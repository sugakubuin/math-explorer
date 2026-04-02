import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_10_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章から数章にわたり、空間内（主に <InlineMath math="\mathbb{R}^2" /> や <InlineMath math="\mathbb{R}^3" />）における「曲線」と「曲面」という幾何学的な対象を、微積分学の言葉を用いて厳密に解析する方法を学びます。
                まずは曲線を数学的に正しく取り扱うための基本概念、「パラメータ表示」と「正則性」について定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">パラメータ曲線の定義</h2>

            <p>
                「曲線」とは、直感的には「ペンで紙に描いた跡（軌跡）」や「空間を飛ぶ粒子の軌道」のことです。
                これを数式で表すには、時間などの1次元のパラメータ <InlineMath math="t" /> に応じて空間内の位置 <InlineMath math="\mathbf{r}(t)" /> が変化する写像として定義するのが最も自然で扱いやすい方法です。
            </p>

            <ContentBox type="definition" title="Definition 10.1-1 (パラメータ曲線)">
                <p>
                    <InlineMath math="I \subset \mathbb{R}" /> を区間とする。<InlineMath math="I" /> から <InlineMath math="\mathbb{R}^n" /> （通常は <InlineMath math="n=2, 3" />）への連続写像
                </p>
                <BlockMath math="\mathbf{r}: I \to \mathbb{R}^n, \quad t \mapsto \mathbf{r}(t) = \begin{pmatrix} x_1(t) \\ \vdots \\ x_n(t) \end{pmatrix}" />
                <p className="mt-2">
                    を<strong>パラメータ曲線</strong>（parametrized curve）、あるいは単に<strong>曲線</strong>と呼ぶ。
                    変数 <InlineMath math="t" /> を<strong>パラメータ</strong>（媒介変数）と呼び、<InlineMath math="x_1(t), \dots, x_n(t)" /> の成分表示を曲線の<strong>パラメータ表示</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                ※ 注意点として、数学上の「曲線」という言葉は、写像そのもの <InlineMath math="\mathbf{r}" /> を指す場合と、その像（値域）としての「図形」 <InlineMath math="C = \{\mathbf{r}(t) \mid t \in I\}" /> を指す場合があります。文脈により判断しますが、厳密には区別するべき概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則曲線</h2>

            <p>
                連続なだけの曲線では「尖点（とがった点）」があったり、進行が「停止」したりして、接線を定義できない場合があります。
                微分幾何学的に滑らかな（至る所で接線が引ける）曲線を扱うために、「正則性」という条件を課します。
            </p>

            <ContentBox type="definition" title="Definition 10.1-2 (正則曲線)">
                <p>
                    パラメータ曲線 <InlineMath math="\mathbf{r}: I \to \mathbb{R}^n" /> が <InlineMath math="C^1" /> 級（各成分 <InlineMath math="x_i(t)" /> が連続的微分可能）であるとする。
                </p>
                <p className="mt-2">
                    <InlineMath math="I" /> 上のすべての点 <InlineMath math="t" /> において、速度ベクトルが零ベクトルにならない、すなわち
                </p>
                <BlockMath math="\mathbf{r}'(t) = \frac{d\mathbf{r}}{dt} = \begin{pmatrix} x_1'(t) \\ \vdots \\ x_n'(t) \end{pmatrix} \neq \mathbf{0}" />
                <p className="mt-2">
                    を満たすとき、曲線 <InlineMath math="\mathbf{r}" /> は<strong>正則</strong>（regular）であるという。あるいはこの曲線を<strong>正則曲線</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="正則性の幾何学的意味">
                <p>
                    速度ベクトル <InlineMath math="\mathbf{r}'(t)" /> は、曲線上の点 <InlineMath math="\mathbf{r}(t)" /> における<strong>接ベクトル</strong>（tangent vector）を表します。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>もし <InlineMath math="\mathbf{r}'(t_0) = \mathbf{0}" /> となる点があると、その点で粒子が「停止」し、その後予期せぬ方向へ動き出す（尖点・カスプを形成する）可能性があります。</li>
                    <li>正則であることは、<strong>至る所で接線の方向がただ一つに定まり、曲線が滑らかに続いていること</strong>を保証します。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弧長パラメータ</h2>

            <p>
                同じ幾何学的な図形 <InlineMath math="C" /> を表すパラメータ表示は無数に存在します（例えば、車が同じコースを走るにしても、ゆっくり走るか速く走るかで関数形は異なります）。
                しかし、曲線の形状そのもの（曲がり具合など）を解析する際には、「パラメータの取り方に依存しない」絶対的な基準があると便利です。
                それが「曲線に沿って測った距離（弧長）」をパラメータとする方法です。
            </p>

            <ContentBox type="definition" title="Definition 10.1-3 (弧長パラメータ)">
                <p>
                    正則曲線 <InlineMath math="\mathbf{r}(t)" /> （<InlineMath math="a \le t \le b" />）に対して、基準点 <InlineMath math="\mathbf{r}(a)" /> から曲線に沿って測った長さ <InlineMath math="s" /> は次のように表される（次節で詳述）：
                </p>
                <BlockMath math="s = s(t) = \int_a^t \|\mathbf{r}'(\tau)\| \, d\tau" />
                <p className="mt-2">
                    曲線が正則（<InlineMath math="\|\mathbf{r}'(\tau)\| > 0" />）であれば、積分の性質から <InlineMath math="s(t)" /> は狭義単調増加関数となり、逆関数 <InlineMath math="t = t(s)" /> が存在する。
                </p>
                <p className="mt-2">
                    このとき、パラメータを元の <InlineMath math="t" /> から <InlineMath math="s" /> に取り替えて得られる新しいパラメータ表示
                </p>
                <BlockMath math="\tilde{\mathbf{r}}(s) = \mathbf{r}(t(s))" />
                <p className="mt-2">
                    を、<strong>弧長パラメータによる表示</strong>（または自然なパラメータ表示）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="弧長パラメータの最大の特徴">
                <p>
                    弧長パラメータ表示 <InlineMath math="\mathbf{r}(s)" /> （通常記号を簡略化して <InlineMath math="\tilde{\mathbf{r}}" /> とは書かないことが多い）での速度ベクトルを微分 <InlineMath math="d/ds" /> を用いて計算すると、連鎖律より
                </p>
                <BlockMath math="\frac{d\mathbf{r}}{ds} = \frac{d\mathbf{r}}{dt} \frac{dt}{ds} = \mathbf{r}'(t) \cdot \frac{1}{ds/dt} = \frac{\mathbf{r}'(t)}{\|\mathbf{r}'(t)\|}" />
                <p className="mt-2">
                    となります。これは直ちに
                </p>
                <BlockMath math="\left\| \frac{d\mathbf{r}}{ds} \right\| = 1" />
                <p className="mt-2">
                    であることを意味します。つまり、弧長パラメータ表示とは、<strong>「常に速さ 1 で曲線上を移動する」ような究極の等速運動表示</strong>なのです。これにより、パラメータの「速さ」という不要な情報を削ぎ落とし、曲線の「幾何学的な形状」純粋に向き合うことが可能になります。
                </p>
            </ContentBox>

        </section>
    );
}
