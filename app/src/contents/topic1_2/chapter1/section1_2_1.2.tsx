import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function FunctionLimits() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では数列の極限を学びました。本節では、<strong>関数の極限</strong>を扱います。
                数列の極限が「番号 <InlineMath math="n" /> を大きくしたときの挙動」であったのに対し、
                関数の極限は「変数 <InlineMath math="x" /> がある値 <InlineMath math="a" /> に近づくときの挙動」を問います。
                この違いを意識しながら読み進めてください。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 関数の極限
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">関数の極限</h2>

            <ContentBox type="definition" title="Definition 1.2-1 （関数の極限）">
                <p>
                    関数 <InlineMath math="f(x)" /> について、<InlineMath math="x" /> が <InlineMath math="a" /> に限りなく近づくとき
                    （ただし <InlineMath math="x \neq a" /> ）、<InlineMath math="f(x)" /> がある一定値 <InlineMath math="L" /> に限りなく近づくならば、
                    <strong>「<InlineMath math="x \to a" /> のとき <InlineMath math="f(x)" /> は <InlineMath math="L" /> に収束する」</strong>といい、
                </p>
                <BlockMath math="\lim_{x \to a} f(x) = L" />
                <p>と書く。 <InlineMath math="L" /> を <InlineMath math="f(x)" /> の <InlineMath math="x = a" /> における<strong>極限値</strong>という。</p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （極限と関数値の違い）">
                <p>
                    極限 <InlineMath math="\lim_{x \to a} f(x)" /> は、<InlineMath math="x = a" /> での<strong>関数値 <InlineMath math="f(a)" /></strong> とは無関係に定まります。
                    たとえば <InlineMath math="f(a)" /> が定義されていなかったり、<InlineMath math="f(a) \neq L" /> であっても、極限値 <InlineMath math="L" /> は存在しえます。
                    極限はあくまでも「近づく途中の挙動」を表します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="\displaystyle\lim_{x \to 2}(3x + 1)" /></p>
                        <p className="mt-2"><strong>解．</strong> <InlineMath math="x \to 2" /> のとき <InlineMath math="3x + 1 \to 3 \cdot 2 + 1 = 7" />。</p>
                        <BlockMath math="\lim_{x \to 2}(3x + 1) = 7" />
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="\displaystyle\lim_{x \to 1}\frac{x^2 - 1}{x - 1}" /></p>
                        <p className="mt-2">
                            <strong>解．</strong> <InlineMath math="x = 1" /> では分母が <InlineMath math="0" /> になるので直接代入できません。
                            しかし <InlineMath math="x \neq 1" /> のとき因数分解できます：
                        </p>
                        <BlockMath math="\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1" />
                        <p>
                            <InlineMath math="x \neq 1" /> において <InlineMath math="f(x) = x + 1" /> ですから、
                        </p>
                        <BlockMath math="\lim_{x \to 1}\frac{x^2 - 1}{x - 1} = \lim_{x \to 1}(x+1) = 2" />
                        <p>
                            <InlineMath math="x = 1" /> における関数値は定義されていませんが、極限値は <InlineMath math="2" /> と決まります。
                        </p>
                    </div>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 片側極限
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">片側極限</h2>

            <p>
                極限 <InlineMath math="\lim_{x \to a} f(x) = L" /> が存在するためには、
                <strong>左から近づいても右から近づいても</strong>同じ値 <InlineMath math="L" /> に近づく必要があります。
                左右で異なる方向から接近するときの極限を<strong>片側極限</strong>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 （片側極限）">
                <ul className="list-none pl-0 space-y-3">
                    <li>
                        <strong>右側極限</strong>：<InlineMath math="x" /> が <InlineMath math="a" /> より大きい側から近づくとき（<InlineMath math="x \to a{+}" />）の極限
                        <BlockMath math="\lim_{x \to a+} f(x) = \lim_{x \searrow a} f(x)" />
                    </li>
                    <li>
                        <strong>左側極限</strong>：<InlineMath math="x" /> が <InlineMath math="a" /> より小さい側から近づくとき（<InlineMath math="x \to a{-}" />）の極限
                        <BlockMath math="\lim_{x \to a-} f(x) = \lim_{x \nearrow a} f(x)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.2-1 （極限の存在条件）">
                <p>
                    <InlineMath math="\displaystyle\lim_{x \to a} f(x) = L" /> が存在するための必要十分条件は、
                    左側極限と右側極限がともに存在して等しいことである：
                </p>
                <BlockMath math="\lim_{x \to a} f(x) = L \iff \lim_{x \to a-} f(x) = \lim_{x \to a+} f(x) = L" />
            </ContentBox>

            {/* Figure 1.2-1 - 片側極限 */}
            <div className="flex flex-col items-center my-8">
                <img
                    src="/images/fig1_2_1.svg"
                    alt="片側極限：x→a- のとき曲線(赤)がL1に、x→a+ のとき曲線(青)がL2に近づく。L1≠L2のとき極限は存在しない"
                    className="w-full max-w-[580px] h-auto rounded border border-slate-200 dark:border-slate-700"
                />
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic">
                    Figure 1.2-1 &nbsp; 左側極限 <InlineMath math="L_1" /> と右側極限 <InlineMath math="L_2" /> が異なる場合。<br />
                    <InlineMath math="L_1 \neq L_2" /> のとき、<InlineMath math="\lim_{x \to a}f(x)" /> は存在しない。
                </p>
            </div>

            <ContentBox type="example" title="Example 1.2-2 （片側極限の計算）">
                <p>
                    <InlineMath math="f(x) = |x|" /> について、<InlineMath math="\displaystyle\lim_{x \to 0} \frac{|x|}{x}" /> を調べよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="x > 0" /> のとき <InlineMath math="|x| = x" /> なので、右側極限は
                </p>
                <BlockMath math="\lim_{x \to 0+} \frac{|x|}{x} = \lim_{x \to 0+} \frac{x}{x} = 1" />
                <p>
                    <InlineMath math="x < 0" /> のとき <InlineMath math="|x| = -x" /> なので、左側極限は
                </p>
                <BlockMath math="\lim_{x \to 0-} \frac{|x|}{x} = \lim_{x \to 0-} \frac{-x}{x} = -1" />
                <p>
                    左側極限 (<InlineMath math="-1" />) と右側極限 (<InlineMath math="1" />) が一致しないため、
                    <InlineMath math="\displaystyle\lim_{x \to 0} \frac{|x|}{x}" /> は<strong>存在しない</strong>。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 無限大への極限
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">無限大への極限</h2>

            <p>
                変数 <InlineMath math="x" /> を限りなく大きくしたとき（<InlineMath math="x \to +\infty" />）や、
                限りなく小さくしたとき（<InlineMath math="x \to -\infty" />）の関数の極限も定義できます。
                これは「グラフの右端・左端でどこへ向かうか」を記述します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 （無限大における極限）">
                <ul className="list-none pl-0 space-y-2">
                    <li>
                        <InlineMath math="x \to +\infty" /> のとき <InlineMath math="f(x) \to L" /> ならば：
                        <BlockMath math="\lim_{x \to +\infty} f(x) = L" />
                    </li>
                    <li>
                        <InlineMath math="x \to -\infty" /> のとき <InlineMath math="f(x) \to L" /> ならば：
                        <BlockMath math="\lim_{x \to -\infty} f(x) = L" />
                    </li>
                </ul>
                <p className="mt-2">
                    また、<InlineMath math="x \to a" /> のとき <InlineMath math="f(x) \to +\infty" /> または <InlineMath math="f(x) \to -\infty" /> になることも<strong>発散（無限大への発散）</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-3 （無限大の極限）">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="\displaystyle\lim_{x \to +\infty} \frac{1}{x}" /></p>
                        <p className="mt-1"><strong>解．</strong> <InlineMath math="x" /> が大きくなるほど <InlineMath math="1/x" /> は <InlineMath math="0" /> に近づく。</p>
                        <BlockMath math="\lim_{x \to +\infty} \frac{1}{x} = 0" />
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="\displaystyle\lim_{x \to 0+} \frac{1}{x}" /></p>
                        <p className="mt-1"><strong>解．</strong> <InlineMath math="x > 0" /> で <InlineMath math="x \to 0" /> のとき <InlineMath math="1/x" /> は限りなく大きくなる。</p>
                        <BlockMath math="\lim_{x \to 0+} \frac{1}{x} = +\infty" />
                    </div>
                    <div>
                        <p><strong>(3)</strong> <InlineMath math="\displaystyle\lim_{x \to +\infty} \frac{3x^2 + 2}{x^2 - 1}" /></p>
                        <p className="mt-1"><strong>解．</strong> 最高次 <InlineMath math="x^2" /> で分子分母を割る（数列の有理式と同じ戦略）：</p>
                        <BlockMath math="\frac{3x^2 + 2}{x^2 - 1} = \frac{3 + 2/x^2}{1 - 1/x^2} \to \frac{3 + 0}{1 - 0} = 3 \quad (x \to +\infty)" />
                    </div>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 極限の計算法則
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">極限の計算法則</h2>

            <p>
                数列と同様に、関数の極限についても<strong>和・差・積・商の法則</strong>が成り立ちます。
                これらを用いることで、複雑な関数の極限も分解して計算できます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-1 （極限の算術）">
                <p>
                    <InlineMath math="\lim_{x \to a} f(x) = L,\quad \lim_{x \to a} g(x) = M" /> とする
                    （<InlineMath math="a" /> は実数または <InlineMath math="\pm\infty" />）。このとき：
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>和・差の法則：</strong> <InlineMath math="\lim_{x \to a} [f(x) \pm g(x)] = L \pm M" /></li>
                    <li><strong>積の法則：</strong> <InlineMath math="\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M" /></li>
                    <li><strong>商の法則：</strong> <InlineMath math="\lim_{x \to a} \dfrac{f(x)}{g(x)} = \dfrac{L}{M}" />&nbsp;&nbsp;（<InlineMath math="M \neq 0" /> のとき）</li>
                    <li><strong>定数倍の法則：</strong> <InlineMath math="\lim_{x \to a} c\,f(x) = cL" />&nbsp;&nbsp;（<InlineMath math="c" /> は定数）</li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="Remark （不定形に注意）">
                <p>
                    商の法則 (3) は <InlineMath math="M \neq 0" /> のときのみ使えます。
                    <InlineMath math="L = M = 0" /> の場合（<InlineMath math="0/0" /> 型）や、<InlineMath math="L, M = \pm\infty" /> がからむ場合は
                    <strong>不定形</strong>となり、別途計算が必要です。
                    <InlineMath math="0/0" /> 型には因数分解・有理化・ロピタルの定理（§2.5）などを用います。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 連続性
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">連続性</h2>

            <p>
                関数の極限が定義できると、<strong>連続性</strong>を正確に定義できます。
                直感的に「グラフに穴や跳びがない」ことが連続性であり、これを極限を使って厳密に表現します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-4 （連続性）">
                <p>
                    関数 <InlineMath math="f(x)" /> が <InlineMath math="x = a" /> で<strong>連続</strong>であるとは、次の3条件がすべて成り立つことをいう：
                </p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li><InlineMath math="f(a)" /> が定義されている</li>
                    <li><InlineMath math="\displaystyle\lim_{x \to a} f(x)" /> が存在する</li>
                    <li><InlineMath math="\displaystyle\lim_{x \to a} f(x) = f(a)" /></li>
                </ol>
                <p className="mt-3">
                    区間上のすべての点で連続なとき、その区間上で<strong>連続関数</strong>という。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （連続関数の特徴）">
                <p>
                    連続関数では <InlineMath math="\lim_{x \to a} f(x) = f(a)" /> が成り立つため、
                    <strong>極限の計算が「代入」で済む</strong>という便利な性質があります。
                </p>
                <p className="mt-2">
                    多項式関数・三角関数・指数関数・対数関数はすべて定義域内で連続です。
                    一方、<InlineMath math="f(x) = 1/x" /> は <InlineMath math="x = 0" /> で不連続です（定義されていないため）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-4 （連続性の確認）">
                <div className="space-y-4">
                    <div>
                        <p><strong>(1)</strong> <InlineMath math="f(x) = x^2 + 1" /> は <InlineMath math="x = 3" /> で連続か？</p>
                        <p className="mt-1"><strong>解．</strong> 多項式は常に連続。確認として：</p>
                        <BlockMath math="f(3) = 10, \quad \lim_{x \to 3}(x^2+1) = 10 \quad \Rightarrow \text{連続}" />
                    </div>
                    <div>
                        <p><strong>(2)</strong> <InlineMath math="g(x) = \begin{cases} x + 1 & (x < 1) \\ 3 & (x = 1) \\ x^2 & (x > 1) \end{cases}" /> は <InlineMath math="x = 1" /> で連続か？</p>
                        <p className="mt-1"><strong>解．</strong> 片側極限を確認する：</p>
                        <BlockMath math="\lim_{x \to 1-} g(x) = 1 + 1 = 2, \quad \lim_{x \to 1+} g(x) = 1^2 = 1" />
                        <p>
                            左右の極限が一致しない（<InlineMath math="2 \neq 1" />）ため <InlineMath math="\lim_{x\to 1}g(x)" /> は存在せず、
                            <InlineMath math="x = 1" /> で<strong>不連続</strong>。
                        </p>
                    </div>
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 1.2-2 （中間値の定理）">
                <p>
                    <InlineMath math="f(x)" /> が閉区間 <InlineMath math="[a, b]" /> 上の連続関数であり、
                    <InlineMath math="f(a) \neq f(b)" /> とする。
                    このとき、<InlineMath math="f(a)" /> と <InlineMath math="f(b)" /> の間の任意の値 <InlineMath math="c" /> に対して、<InlineMath math="f(\xi) = c" /> となる <InlineMath math="\xi \in (a, b)" /> が少なくとも1つ存在する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark （中間値の定理の応用）">
                <p>
                    中間値の定理の典型的な応用は、<strong>方程式 <InlineMath math="f(x) = 0" /> の実数解の存在証明</strong>です。
                    たとえば <InlineMath math="f(0) < 0" /> かつ <InlineMath math="f(1) > 0" /> であれば、区間 <InlineMath math="(0,1)" /> に少なくとも1つの零点が存在します。
                    これは「グラフが連続ならば、正から負（または負から正）に変わるときに必ず <InlineMath math="x" /> 軸を横断する」という直感と一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数の極限は <InlineMath math="x" /> が <InlineMath math="a" /> に近づくときの挙動。<InlineMath math="x = a" /> での値とは独立（Definition 1.2-1）。</li>
                    <li>極限が存在する <InlineMath math="\iff" /> 左側極限と右側極限が一致する（Theorem 1.2-1）。</li>
                    <li><InlineMath math="x \to \pm\infty" /> の極限も同様に定義できる（Definition 1.2-3）。</li>
                    <li>和・差・積・商の法則で複合的な極限を計算できる（Proposition 1.2-1）。不定形には注意。</li>
                    <li>連続性：<InlineMath math="\lim_{x\to a}f(x) = f(a)" /> が成立すること（Definition 1.2-4）。</li>
                    <li>連続関数は中間値の定理を満たし、零点存在の証明などに使える（Theorem 1.2-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
