import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_11_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで積分といえば、「区間 <InlineMath math="[a, b]" /> というまっすぐな直線上」あるいは「平面上の領域 <InlineMath math="D" />」での和をとる操作でした。
                本章ではこれを拡張し、「空間内に曲がりくねって配置された曲線」に沿って関数を積分する<strong>線積分</strong>（Line integral）の概念を導入します。
            </p>
            <p>
                線積分には大きく分けて、スカラー関数を積分する「スカラー場の線積分」と、ベクトル関数を積分する「ベクトル場の線積分」の2種類が存在します。まずは直感的にわかりやすいスカラー場の方から定義しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー場の線積分の定義</h2>

            <p>
                空間内に曲線状の細い針金があり、その各点での「線密度（単位長さあたりの質量）」がスカラー関数 <InlineMath math="f(x, y, z)" /> で与えられているとします。
                このとき、針金全体の質量はどう求めればよいでしょうか。針金を細かく分割し、それぞれの微小な長さ <InlineMath math="\Delta s" /> にその点での密度 <InlineMath math="f" /> を掛けたものを足し合わせるのが自然です。これがスカラー場の線積分の直感的な意味です。
            </p>

            <ContentBox type="definition" title="Definition 11.1-1 (スカラー場の線積分)">
                <p>
                    <InlineMath math="C" /> を空間内の滑らかな曲線とし、<InlineMath math="f" /> を <InlineMath math="C" /> 上で定義された連続なスカラー関数とする。
                </p>
                <p className="mt-2">
                    曲線 <InlineMath math="C" /> を <InlineMath math="n" /> 個の微小区間に分割し、第 <InlineMath math="i" /> 区間の長さを <InlineMath math="\Delta s_i" />、その区間内の任意の代表点を <InlineMath math="(x_i^*, y_i^*, z_i^*)" /> とする。
                    このとき、分割を無限に細かくした極限（分割の最大幅 <InlineMath math="\to 0" />）が存在するならば、その極限値を <InlineMath math="C" /> に沿った <InlineMath math="f" /> の<strong>線積分</strong>といい、次のように表す：
                </p>
                <BlockMath math="\int_C f(x, y, z) \, ds = \lim_{\max \Delta s_i \to 0} \sum_{i=1}^n f(x_i^*, y_i^*, z_i^*) \Delta s_i" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ <InlineMath math="ds" /> は微小な「弧長要素」を表す。密度を積分すれば質量、<InlineMath math="f=1" /> を積分すれば前章で定義した曲線の「弧長」そのものになる。）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算公式</h2>

            <p>
                定義はリーマン和の極限でしたが、実際に計算する際には曲線 <InlineMath math="C" /> のパラメータ表示を利用して、よく知っている「1変数の定積分」に帰着させます。
            </p>

            <ContentBox type="proposition" title="Proposition 11.1-1 (線積分の計算：パラメータによる書き直し)">
                <p>
                    曲線 <InlineMath math="C" /> がパラメータ <InlineMath math="t" /> （<InlineMath math="a \le t \le b" />）を用いて、正則曲線 <InlineMath math="\mathbf{r}(t) = (x(t), y(t), z(t))" /> として与えられているとする。
                </p>
                <p className="mt-2">
                    このとき、スカラー関数 <InlineMath math="f" /> の <InlineMath math="C" /> に沿った線積分は次のように計算できる：
                </p>
                <BlockMath math="\int_C f(\mathbf{x}) \, ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt" />
                <p className="mt-2">
                    成分で書き下せば：
                </p>
                <BlockMath math="\begin{aligned} &\int_C f(x, y, z) \, ds \\ &= \int_a^b f(x(t), y(t), z(t)) \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2} \, dt \end{aligned}" />
            </ContentBox>

            <ContentBox type="proof" title="導出">
                <p>
                    前章（Chapter 10）で学んだ弧長のパラメータによる表現において、点 <InlineMath math="t" /> までの弧長 <InlineMath math="s(t)" /> は
                </p>
                <BlockMath math="s(t) = \int_a^t \|\mathbf{r}'(\tau)\| \, d\tau" />
                <p className="mt-2">
                    で定義された。微積分学の基本定理より、これを <InlineMath math="t" /> で微分すると
                </p>
                <BlockMath math="\frac{ds}{dt} = \|\mathbf{r}'(t)\|" />
                <p className="mt-2">
                    となる。これを形式的に微分の記号で書けば、弧長要素 <InlineMath math="ds" /> は
                </p>
                <BlockMath math="ds = \|\mathbf{r}'(t)\| \, dt" />
                <p className="mt-2">
                    と表すことができる（これは「微小な時間 <InlineMath math="dt" /> の間に進む距離は、その瞬間の速さ <InlineMath math="\|\mathbf{r}'\|" /> に <InlineMath math="dt" /> を掛けたものに等しい」という直感的な事実を数式化したものである）。
                </p>
                <p className="mt-2">
                    定義のリーマン和における <InlineMath math="\Delta s_i" /> を、平均値の定理近似により <InlineMath math="\Delta s_i \approx \|\mathbf{r}'(t_i)\| \Delta t_i" /> と置き換えることで、積分変数が空間の座標や弧長 <InlineMath math="s" /> から、パラメータ <InlineMath math="t" /> の積分へと変換される。
                </p>
                <BlockMath math="\lim_{\Delta t \to 0} \sum f(\mathbf{r}(t_i)) \|\mathbf{r}'(t_i)\| \Delta t_i = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt" />
                <p className="mt-2">
                    右辺は通常の1変数の定積分であるため、通常の計算技法を用いて評価することが可能となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="パラメータの取り方への非依存性">
                <p>
                    同一の幾何学的な曲線 <InlineMath math="C" /> を表すパラメータ表示が複数あったとしても、積分の値は変化しません。なぜなら、置換積分法により <InlineMath math="\|\mathbf{r}'(t)\| dt" /> の部分がうまい具合にパラメータの変更分を吸収し、常に「幾何学的な弧長要素 <InlineMath math="ds" />」として不変に保たれるからです。
                </p>
            </ContentBox>

        </section>
    );
}
