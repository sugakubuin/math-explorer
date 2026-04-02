import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LineIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「ベクトル積分学」の導入として、曲線に沿った積分である「線積分」を学びます。
                線積分は、スカラー場の分布を曲線に沿って集計したり、ベクトル場（力場）が物体に対して行う「仕事」を計算したりする際に用いられます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">曲線のパラメータ表示</h2>

            <p>
                積分を行うためには、積分経路となる曲線を数学的に記述する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (曲線のパラメータ表示)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> から空間 <InlineMath math="\mathbb{R}^3" /> への連続写像
                    <BlockMath math="\mathbf{r}(t) = (x(t), y(t), z(t)) \quad (a \le t \le b)" />
                    を<strong>パラメータ曲線</strong>と呼ぶ。
                    <InlineMath math="\mathbf{r}(t)" /> が <InlineMath math="C^1" /> 級であり、かつすべての <InlineMath math="t" /> で <InlineMath math="\mathbf{r}'(t) \neq \mathbf{0}" /> を満たすとき、この曲線を<strong>滑らか (smooth) </strong>であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (代表的な曲線)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>円</strong>： <InlineMath math="\mathbf{r}(t) = (R\cos t, R\sin t, 0)" /> （ <InlineMath math="0 \le t \le 2\pi" /> ）
                    </li>
                    <li>
                        <strong>螺旋</strong>： <InlineMath math="\mathbf{r}(t) = (a\cos t, a\sin t, bt)" /> （ <InlineMath math="t" /> は回転角）
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー場の線積分</h2>

            <p>
                曲線の「長さ」や「そこに含まれる物理量」を計算するのが、スカラー場の線積分です。
            </p>

            <ContentBox type="definition" title="Definition 3.1-2 (スカラー場の線積分)">
                <p>
                    滑らかな曲線 <InlineMath math="C" /> 上で定義されたスカラー場 <InlineMath math="f(\mathbf{r})" /> に対して、<strong>線積分 (line integral)</strong> を次のように定義する：
                    <BlockMath math="\int_C f\,ds = \int_a^b f(\mathbf{r}(t)) |\mathbf{r}'(t)|\, dt" />
                    ここで、 <InlineMath math="ds = |\mathbf{r}'(t)|dt" /> を<strong>弧長要素 (arc length element)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理的な意味">
                <p>
                    <InlineMath math="f(\mathbf{r})" /> を曲線の線密度 <InlineMath math="\rho(\mathbf{r})" /> と見なすと、線積分は曲線の<strong>全質量</strong>を与えます：
                    <BlockMath math="M = \int_C \rho\,ds" />
                    また、 <InlineMath math="f = 1" /> のときは、積分の値はそのまま<strong>曲線の長さ</strong>に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場の線積分（仕事）</h2>

            <p>
                ベクトル場の中を物体が移動するとき、場から受ける影響を累積したものがベクトル場の線積分です。
            </p>

            <ContentBox type="definition" title="Definition 3.1-3 (ベクトル場の線積分)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F}(\mathbf{r})" /> の、曲線 <InlineMath math="C" /> に沿った線積分を次のように定義する：
                    <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\, dt" />
                    ここで、 <InlineMath math="d\mathbf{r} = \mathbf{r}'(t)dt" /> は向きを持ったベクトル値の微小変位を表す。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="仕事としての解釈">
                <p>
                    <InlineMath math="\mathbf{F}" /> が物体に働く力の場であるとき、この線積分は物体を曲線 <InlineMath math="C" /> に沿って始点から終点まで動かすときに力がする<strong>仕事 (work)</strong> に相当します。
                    力の向きと移動の向き（接ベクトル）の内積をとっている点が重要です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-2 (線積分の計算)">
                <p>
                    ベクトル場 <InlineMath math="\mathbf{F} = (y, -x, 0)" /> に沿って、単位円の上半分 <InlineMath math="\mathbf{r}(t) = (\cos t, \sin t, 0) \quad (0 \le t \le \pi)" /> を動くときの線積分を求めます。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg space-y-2">
                    <p>
                        1. 接ベクトル： <InlineMath math="\mathbf{r}'(t) = (-\sin t, \cos t, 0)" />
                    </p>
                    <p>
                        2. 被積分関数（内積）：
                        <BlockMath math="\begin{aligned} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) &= (\sin t, -\cos t, 0) \cdot (-\sin t, \cos t, 0) \\ &= -\sin^2 t - \cos^2 t = -1 \end{aligned}" />
                    </p>
                    <p>
                        3. 積分実行：
                        <BlockMath math="\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^\pi (-1) dt = -\pi" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>パラメータ表示</strong>：曲線を動点 <InlineMath math="\mathbf{r}(t)" /> として記述する。</li>
                    <li><strong>スカラー線積分</strong>：スカラ量の累積（質量や長さの計算）。</li>
                    <li><strong>ベクトル線積分</strong>：移動方向へのベクトルの寄与の累積（仕事の計算）。</li>
                    <li><strong>弧長要素 <InlineMath math="ds" /> と変位要素 <InlineMath math="d\mathbf{r}" /></strong>：積分の種類によって「大きさ」を使うのか「向き」を使うのかが異なる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
