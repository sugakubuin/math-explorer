import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InitialValueProblems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微分方程式を解く際、単に一般解を求めるだけでなく、「特定の点を通る解」を見つけたいことが多々あります。
                物理学における運動方程式であれば、ある時刻における位置と速度が与えられたときに、その後の運動を予測することに相当します。
                本節では、このような「初期条件」を伴う問題の定式化と、解が定義される範囲について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">初期値問題</h2>

            <p>
                微分方程式と、その解が満たすべき特定の点での値をセットにしたものを「初期値問題」と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (初期値問題：IVP)">
                <p>
                    未知関数 <InlineMath math="y(x)" /> に関する 1 階微分方程式と条件
                    <BlockMath math="\begin{cases} \dfrac{dy}{dx} = f(x, y) \\ y(x_0) = y_0 \end{cases}" />
                    を合わせて、<strong>初期値問題 (Initial Value Problem, IVP)</strong> と呼ぶ。
                    また、条件 <InlineMath math="y(x_0) = y_0" /> を<strong>初期条件 (Initial condition)</strong> と呼ぶ。
                </p>
                <p className="mt-4">
                    この問題の「解」とは、 <InlineMath math="x_0" /> を含むある開区間 <InlineMath math="I" /> 上で定義され、
                    上の 2 式をともに満たす微分可能な関数 <InlineMath math="\phi(x)" /> のことである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-1 (初期値問題の具体例)">
                <p>
                    <strong>問題：</strong> 次の初期値問題を解け。
                    <BlockMath math="\frac{dy}{dx} = 2x, \quad y(1) = 5" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：一般解の導出</strong>
                        <br />
                        両辺を積分すると、 <InlineMath math="y = x^2 + C" /> を得る。
                    </p>
                    <p>
                        <strong>ステップ 2：初期条件の適用</strong>
                        <br />
                        <InlineMath math="y(1) = 5" /> より、 <InlineMath math="1^2 + C = 5 \implies C = 4" /> 。
                    </p>
                    <p>
                        <strong>結論：</strong>
                        <br />
                        求める解は <InlineMath math="y = x^2 + 4" /> である。
                    </p>
                </div>
            </ContentBox>

            <p>
                「解が存在するかどうか」という問いに対して、真っ先に思い浮かぶのは「具体的に解を計算できるか」ということかもしれません。
                しかし、実際には初等関数（多項式、指数関数、三角関数など）で書けない微分方程式がほとんどです。
                そのため、計算以前に「数学的に解が確実に存在するか」を保証する理論が必要となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所解と大域解</h2>

            <p>
                微分方程式の解が常に「すべての実数」に対して定義されるとは限りません。
                解の定義域には注意が必要です。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (局所解と大域解)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong>局所解 (Local solution)</strong>：
                        初期点 <InlineMath math="x_0" /> の十分小さな近傍でのみ定義された解。
                    </li>
                    <li>
                        <strong>大域解 (Global solution)</strong>：
                        方程式（右辺の関数 <InlineMath math="f" /> ）が定義されている領域の全域で定義された解。
                    </li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                非線形な微分方程式では、たとえ右辺の関数 <InlineMath math="f(x, y)" /> が無限遠まで滑らかに定義されていたとしても、
                解が途中で無限大に発散し、それ以上先に進めなくなることがあります。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (有限時間爆発)">
                <p>
                    <strong>問題：</strong> 次の初期値問題の解を求め、その定義域を確認せよ。
                    <BlockMath math="\frac{dy}{dx} = y^2, \quad y(0) = 1" />
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>解法：</strong>
                        <br />
                        変数分離形として解くと、 <InlineMath math="\frac{dy}{y^2} = dx" /> より：
                        <BlockMath math="-\frac{1}{y} = x + C \implies y = \frac{-1}{x + C}" />
                        初期条件 <InlineMath math="y(0) = 1" /> より、 <InlineMath math="1 = -1/C \implies C = -1" /> 。
                        したがって、解は次のようになる：
                        <BlockMath math="y(x) = \frac{1}{1 - x}" />
                    </p>
                    <p>
                        <strong>定義域の考察：</strong>
                        <br />
                        この解は <InlineMath math="x \to 1" /> となるときに無限大へ発散（爆発）してしまう。
                        初期点 <InlineMath math="x=0" /> を含む最大の定義域は <InlineMath math="I = (-\infty, 1)" /> であり、
                        それより右側へ解を延長することはできない。
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="remark" title="爆発現象の重要性">
                <p>
                    上の例のように、解が有限の値 <InlineMath math="x" /> で無限大になる現象を<strong>有限時間爆発 (Finite-time blow-up)</strong> と呼びます。
                    これは物理的には、制御不能な激しい反応や、モデルの前提条件が崩れる限界点などを意味することがあります。
                    「解が存在する」と言っても、それがどれくらいの期間（範囲）存在するのかを見極めることは実用上極めて重要です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>初期値問題 (IVP)</strong>： 方程式と初期条件 <InlineMath math="y(x_0)=y_0" /> のセット。</li>
                    <li><strong>解の区間</strong>： 解は常に一定の区間上で定義される。関数の連続性だけでは全域での存在は保証されない。</li>
                    <li><strong>局所解 vs 大域解</strong>： 局所的には存在しても、大域的に解けるとは限らない。</li>
                    <li><strong>爆発現象</strong>： 非線形方程式特有の振る舞いで、有限の距離で解が無限大へ飛んでしまうことがある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
