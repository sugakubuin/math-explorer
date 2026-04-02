import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_11_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                曲線の積分（線積分）の概念を一つ次元を上げて曲面に適用したものが<strong>面積分</strong>（Surface integral）です。
                線積分のときと同様、スカラー場の面積分（質量の計算など）とベクトル場の面積分（流体の流量など）の2種類が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スカラー場の面積分</h2>

            <p>
                空間内に配置された曲面状の薄い板（例えば曲がった金属板）があり、その面密度（単位面積あたりの質量）が関数 <InlineMath math="f(x, y, z)" /> で与えられているとします。
                この板の総質量を求めるには、前章で導出した微小面積要素 <InlineMath math="dS" /> に密度 <InlineMath math="f" /> を掛けて、曲面全体で足し合わせます。
            </p>

            <ContentBox type="definition" title="Definition 11.3-1 (スカラー場の面積分)">
                <p>
                    <InlineMath math="S" /> をパラメータ領域 <InlineMath math="D" /> 上で <InlineMath math="\mathbf{r}(u, v)" /> と媒介変数表示された正則な曲面とし、<InlineMath math="f(x, y, z)" /> を <InlineMath math="S" /> 上で定義された連続なスカラー場とする。
                </p>
                <p className="mt-2">
                    このとき、<InlineMath math="f" /> の曲面 <InlineMath math="S" /> 上の<strong>面積分</strong>は、次のように定義し計算される：
                </p>
                <BlockMath math="\iint_S f(x, y, z) \, dS = \iint_D f(\mathbf{r}(u, v)) \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ <InlineMath math="f=1" /> とした場合、右辺はまさに前章 Theorem 10.3-1 の「曲面の面積」を求める式に一致する。）
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場の面積分（流束）</h2>

            <p>
                物理学的に圧倒的に重要なのがベクトル場の面積分です。
                例えば、空間を流れる流体（水や空気など）の速度ベクトル場を <InlineMath math="\mathbf{v}(x, y, z)" /> とします。空間内に仮想的な「網（曲面）」を固定したとき、単位時間あたりにこの網を突き抜けて流れる水の総量（体積）はどのように計算できるでしょうか。
            </p>
            <p>
                網の表面に平行な流れは網を通り抜けません。通り抜ける量に寄与するのは、網に対して<strong>垂直な成分（法線成分）</strong>だけです。したがって、速度ベクトル <InlineMath math="\mathbf{v}" /> と曲面の単位法線ベクトル <InlineMath math="\mathbf{n}" /> の内積をとる必要があります。
            </p>

            <ContentBox type="definition" title="Definition 11.3-2 (ベクトル場の面積分・流束)">
                <p>
                    <InlineMath math="S" /> を、各点で表と裏（向き）が指定できる（すなわち<strong>単位法線ベクトル場 <InlineMath math="\mathbf{n}" /></strong> が連続的に選べる）向き付け可能な曲面とする。
                    <InlineMath math="\mathbf{F}" /> を <InlineMath math="S" /> 上の連続なベクトル場とする。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbf{F}" /> の法線成分 <InlineMath math="\mathbf{F} \cdot \mathbf{n}" /> をスカラー関数とみなし、これを <InlineMath math="S" /> 上で面積分したものを、ベクトル場 <InlineMath math="\mathbf{F}" /> の曲面 <InlineMath math="S" /> を貫く<strong>面積分</strong>、あるいは<strong>流束</strong>（Flux：フラックス）と呼び、次のように表す：
                </p>
                <BlockMath math="\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S (\mathbf{F} \cdot \mathbf{n}) \, dS" />
                <p className="mt-2">
                    ここで <InlineMath math="d\mathbf{S} = \mathbf{n} \, dS" /> を<strong>ベクトル面積要素</strong>（有向面積素）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="パラメータ表示を用いた流束の計算">
                <p>
                    曲面 <InlineMath math="S" /> がパラメータ <InlineMath math="(u, v)" /> （領城 <InlineMath math="D" />）で <InlineMath math="\mathbf{r}(u, v)" /> と表されている場合、単位法線ベクトル <InlineMath math="\mathbf{n}" /> は、
                </p>
                <BlockMath math="\mathbf{n} = \pm \frac{\mathbf{r}_u \times \mathbf{r}_v}{\|\mathbf{r}_u \times \mathbf{r}_v\|}" />
                <p className="mt-2">
                    となる（複号は曲面の「表」として指定された向きに一致する方を選ぶ）。
                    一方で、スカラー面積要素は <InlineMath math="dS = \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv" /> であった。
                </p>
                <p className="mt-2">
                    これらを流束の定義式に代入すると、分母のノルムが綺麗に約分されて消滅し、計算上は極めてシンプルな式に帰着する：
                </p>
                <BlockMath math="\begin{aligned}
                                    &\iint_S \mathbf{F} \cdot d\mathbf{S} \\ 
                                    &= \iint_D \left( \mathbf{F}(\mathbf{r}(u, v)) \cdot \frac{\pm(\mathbf{r}_u \times \mathbf{r}_v)}{\|\mathbf{r}_u \times \mathbf{r}_v\|} \right) \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv \\
                                    &= \pm \iint_D \mathbf{F}(\mathbf{r}(u, v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v) \, du \, dv
                                \end{aligned}" />
                <p className="mt-2">
                    被積分関数に現れるベクトル三重積 <InlineMath math="\mathbf{F} \cdot (\mathbf{r}_u \times \mathbf{r}_v)" /> は、行列式の形で <InlineMath math="\det(\mathbf{F}, \mathbf{r}_u, \mathbf{r}_v)" /> と計算できるため、実際の面積分の計算はこの行列式を <InlineMath math="D" /> 上で二重積分する問題に帰着する。
                </p>
            </ContentBox>

        </section>
    );
}
