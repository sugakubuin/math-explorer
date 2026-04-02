import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function ExtremaOfMultivariableFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分の最大の応用の一つが「関数の最大値・最小値」や「極値」を求めることです。
                多変数関数の場合、1変数のとき（「微分がゼロの点が候補」で「2次微分の符号で判断」）とアイデアは似ていますが、<strong>変数が交ざり合うことによる複雑さ</strong>を「行列式」によって解決する必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 臨界点
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">極値と臨界点</h2>

            <ContentBox type="definition" title="Definition 5.5-1 （臨界点・停留点）">
                <p>
                    関数 <InlineMath math="f(x, y)" /> について、
                </p>
                <BlockMath math="f_x(x,y) = 0 \quad \text{かつ} \quad f_y(x,y) = 0" />
                <p>
                    を同時に満たす点 <InlineMath math="(a,b)" /> を、<InlineMath math="f" /> の<strong>臨界点 (Critical point)</strong> または停留点という。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.5-1 （極値の必要条件）">
                <p>
                    関数 <InlineMath math="f(x, y)" /> が全微分可能であるとき、点 <InlineMath math="(a, b)" /> で極値（極大値または極小値）をとるならば、その点は必ず臨界点（<InlineMath math="f_x(a,b)=0, f_y(a,b)=0" />）である。
                </p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-bold">
                    【注意】1変数のときと同様に、逆は成り立ちません。「鞍点（あんてん・サドルポイント）」と呼ばれる、ある方向からは極小に、別の方向からは極大に見える点（馬の鞍のような形）では、微分が両方0でも極値にはなりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 第2次導関数による極値判定とヘッセ行列
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">第2次導関数による極値判定とヘッセ行列</h2>

            <p>
                臨界点が見つかった後、それが極大か、極小か、あるいは鞍点かを判定するためには、2階の偏微分を調べます。2変数の場合は混合偏微分も考慮する必要があります。
            </p>

            <ContentBox type="definition" title="Definition 5.5-2 （ヘッセ行列 / Hessian Matrix）">
                <p>
                    2変数関数のすべての2階偏導関数を並べた行列を<strong>ヘッセ行列</strong>と呼び、その行列式（ヘッシアンと呼ぶこともあります） <InlineMath math="D" /> は次で定義される：
                </p>
                <BlockMath math="H = \begin{pmatrix} f_{xx}(a,b) & f_{xy}(a,b) \\ f_{yx}(a,b) & f_{yy}(a,b) \end{pmatrix}" />
                <BlockMath math="D = \det H = f_{xx}(a,b) \cdot f_{yy}(a,b) - \{ f_{xy}(a,b) \}^2" />
                <p className="text-sm">※ シュワルツの定理より <InlineMath math="f_{xy} = f_{yx}" /> と仮定しています。</p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 5.5-1 （2変数関数の極値判定定理）">
                <p>
                    関数 <InlineMath math="f(x,y)" /> が点 <InlineMath math="(a,b)" /> において臨界点であり（<InlineMath math="f_x=0, f_y=0" />）、その近傍で連続な2階偏導関数をもつとする。<br />
                    このとき、<InlineMath math="D = f_{xx}f_{yy} - (f_{xy})^2" /> の符号によって次のように判定される。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-3">
                    <li>
                        <strong><InlineMath math="D > 0" /> のとき：</strong> 極値をとる。<br />
                        さらに <InlineMath math="f_{xx} > 0" /> （下に凸）ならば<strong>極小値</strong>。<br />
                        <InlineMath math="f_{xx} < 0" /> （上に凸）ならば<strong>極大値</strong>。
                    </li>
                    <li>
                        <strong><InlineMath math="D < 0" /> のとき：</strong> 極値をもたない（<strong>鞍点</strong>である）。
                    </li>
                    <li>
                        <strong><InlineMath math="D = 0" /> のとき：</strong> この方法では判定できない（より高次の微分を調べる必要がある）。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-1 （極値の判定）">
                <p>
                    関数 <InlineMath math="f(x,y) = x^2 + 2y^2 - 4x + 4y" /> の極値を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    1. まず臨界点を求める：
                </p>
                <BlockMath math="f_x = 2x - 4 = 0 \implies x = 2" />
                <BlockMath math="f_y = 4y + 4 = 0 \implies y = -1" />
                <p>臨界点は <InlineMath math="(2, -1)" /> のみ。</p>
                <p>
                    2. 2階偏導関数を計算し、行列式 <InlineMath math="D" /> を求める：
                </p>
                <BlockMath math="f_{xx} = 2, \quad f_{yy} = 4, \quad f_{xy} = 0" />
                <BlockMath math="D = 2 \times 4 - 0^2  = 8" />
                <p>
                    3. 判定：<br />
                    <InlineMath math="D = 8 > 0" /> であり、かつ <InlineMath math="f_{xx} = 2 > 0" /> であるため、定理よりこの点で<strong>極小値</strong>をとる。
                </p>
                <p>
                    極小値は <InlineMath math="f(2,-1) = 4 + 2 - 8 - 4 = -6" />。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ラグランジュの未定乗数法
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">制約条件つき極値問題（ラグランジュの未定乗数法）</h2>

            <p>
                「円周 <InlineMath math="x^2+y^2=1" /> 上で関数 <InlineMath math="xy" /> の最大値を求めよ」のように、<strong>条件式（制約）</strong>が存在する下での極値を求める強力な手法です。
                等高線と制約条件の曲線が「接する」という幾何学的な直観に基づいています。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-2 （ラグランジュの未定乗数法 / Lagrange Multipliers）">
                <p>
                    条件 <InlineMath math="g(x,y) = 0" /> のもとで、関数 <InlineMath math="f(x,y)" /> の極値を求める。
                </p>
                <p>
                    点 <InlineMath math="(a,b)" /> で極値をとり、かつ条件の勾配が消えない（<InlineMath math="g_x, g_y" /> の少なくとも一方が0でない）場合、ある実数 <InlineMath math="\lambda" />（未定乗数と呼ばれる）が存在して、次の連立方程式を満たす：
                </p>
                <BlockMath math="\begin{cases} f_x(a,b) = \lambda g_x(a,b) \\ f_y(a,b) = \lambda g_y(a,b) \\ g(a,b) = 0 \end{cases}" />
                <p className="mt-2 text-sm text-slate-500">
                    ※ 新しく関数 <InlineMath math="L(x,y,\lambda) = f(x,y) - \lambda g(x,y)" /> を導入し、「<InlineMath math="L" /> の勾配（各偏微分）がすべて0」という条件に相当すると覚えます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.5-2 （ラグランジュの未定乗数法の利用）">
                <p>
                    条件 <InlineMath math="x^2 + y^2 = 1" /> のもとで、関数 <InlineMath math="f(x,y) = xy" /> の最大値と最小値を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    条件を <InlineMath math="g(x,y) = x^2 + y^2 - 1 = 0" /> とおく。<br />
                    ラグランジュの未定乗数法の連立方程式を立てる：
                </p>
                <BlockMath math="\begin{cases} f_x = \lambda g_x \implies y = \lambda (2x) \quad \dots (1) \\ f_y = \lambda g_y \implies x = \lambda (2y) \quad \dots (2) \\ x^2 + y^2 = 1 \quad \dots (3) \end{cases}" />
                <p>
                    (1) より <InlineMath math="y = 2\lambda x" /> を (2) に代入すると <InlineMath math="x = 2\lambda (2\lambda x) = 4\lambda^2 x" />。<br />
                    したがって <InlineMath math="x(1 - 4\lambda^2) = 0" /> となる。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="x = 0" /> のとき：(1) より <InlineMath math="y = 0" />。しかしこれは (3) を満たさないため不適。
                    </li>
                    <li>
                        <InlineMath math="1 - 4\lambda^2 = 0" /> のとき：<InlineMath math="\lambda = \pm \frac{1}{2}" />。<br />
                        <InlineMath math="\lambda = \frac{1}{2}" /> ならば (1) より <InlineMath math="y = x" />。これを (3) に代入して <InlineMath math="2x^2 = 1 \implies x = \pm \frac{1}{\sqrt{2}}" />。<br />
                        <InlineMath math="\lambda = -\frac{1}{2}" /> ならば (1) より <InlineMath math="y = -x" />。これを (3) に代入して <InlineMath math="2x^2 = 1 \implies x = \pm \frac{1}{\sqrt{2}}" />。
                    </li>
                </ul>
                <p>
                    候補となる点は <InlineMath math="\left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right), \left(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right)" /> と <InlineMath math="\left(\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right), \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)" /> の4点。
                </p>
                <p>
                    各点における関数値は：<br />
                    ・<InlineMath math="f\left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = f\left(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right) = \frac{1}{2}" /><br />
                    ・<InlineMath math="f\left(\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right) = f\left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = -\frac{1}{2}" />
                </p>
                <p>
                    したがって、<strong>最大値 <InlineMath math="\frac{1}{2}" /></strong>、<strong>最小値 <InlineMath math="-\frac{1}{2}" /></strong> をとる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数関数の極値の候補は、すべての1階偏微分が0になる<strong>臨界点</strong>である（Proposition 5.5-1）。</li>
                    <li>臨界点が極値かどうか（極大・極小・鞍点）は、2階偏微分の値で構成される<strong>ヘッセ行列式の値 <InlineMath math="D" /></strong> と <InlineMath math="f_{xx}" /> の符号によって判定できる（Theorem 5.5-1）。</li>
                    <li>条件付き極値問題（<InlineMath math="g(x,y)=0" /> の下での最大・最小）は、<strong>ラグランジュの未定乗数法</strong>を使って解くことができる（Theorem 5.5-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
