import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SuccessiveApproximation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で紹介したピカール・リンデレーフの定理は、どのようにして「解の存在」を証明するのでしょうか。
                その核となるのが<strong>ピカールの逐次近似法 (Picard's successive approximation)</strong> です。
                これは、適当な初期関数から始めて、積分を繰り返すことで真の解に近づけていくアルゴリズム的な手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ピカール反復列</h2>

            <p>
                積分方程式 <InlineMath math="y(x) = y_0 + \int_{x_0}^{x} f(t, y(t)) dt" /> を解くために、次のような関数の列を構成します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (ピカール反復列)">
                <p>
                    初期値問題に対して、次の手順で定義される関数の列 <InlineMath math="\{ \phi_n(x) \}" /> を<strong>ピカール反復列</strong>と呼ぶ：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>初期関数： <BlockMath math="\phi_0(x) = y_0" /></li>
                    <li>再帰的定義： <BlockMath math="\phi_{n+1}(x) = y_0 + \int_{x_0}^{x} f(t, \phi_n(t)) \, dt" /></li>
                </ul>
            </ContentBox>

            <p className="mt-4">
                この反復を繰り返すことで、関数の列が「真の解」へと吸い寄せられるように収束していきます。
            </p>

            <ContentBox type="example" title="Example 2.4-1 (指数関数の導出)">
                <p>
                    <strong>初期値問題：</strong> <InlineMath math="y' = y, y(0) = 1" /> に逐次近似法を適用する。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：反復列の計算</strong>
                        <ul className="list-disc list-inside ml-4 mt-2">
                            <li><InlineMath math="\phi_0(x) = 1" /></li>
                            <li><InlineMath math="\phi_1(x) = 1 + \int_0^x 1 \, dt = 1 + x" /></li>
                            <li><InlineMath math="\phi_2(x) = 1 + \int_0^x (1 + t) \, dt = 1 + x + \frac{x^2}{2}" /></li>
                            <li><InlineMath math="\phi_3(x) = 1 + \int_0^x (1 + t + \frac{t^2}{2}) \, dt = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}" /></li>
                        </ul>
                    </p>
                    <p>
                        <strong>ステップ 2：一般項と極限</strong>
                        <br />
                        数学的帰納法により、 <BlockMath math="\phi_n(x) = \sum_{k=0}^n \frac{x^k}{k!}" /> となることがわかる。
                        これは指数関数 <InlineMath math="e^x" /> のテイラー展開（マクローリン展開）の第 <InlineMath math="n" /> 部分和であり、
                        <BlockMath math="\lim_{n \to \infty} \phi_n(x) = e^x" />
                        となる。これは我々が知っている微分方程式の解と一致する。
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">縮小写像の原理による収束証明</h2>

            <p>
                「反復すれば必ず収束する」という事実は、現代数学における非常に強力な道具である<strong>縮小写像の原理</strong>によって裏付けられています。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (縮小写像の原理)">
                <p>
                    完備距離空間 <InlineMath math="X" /> 上の写像 <InlineMath math="T: X \to X" /> が、ある定数 <InlineMath math="0 \leq k < 1" /> に対して
                    <BlockMath math="d(T(x), T(y)) \leq k \cdot d(x, y)" />
                    を満たす（縮小写像である）ならば、 <InlineMath math="T" /> は <InlineMath math="X" /> 内にただ一つの不動点
                    （ <InlineMath math="T(x) = x" /> を満たす点）を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 一意性：</strong>
                    <InlineMath math="x, y" /> がともに不動点であるとすると、
                    <BlockMath math="d(x, y) = d(T(x), T(y)) \leq k \cdot d(x, y)" />
                    <InlineMath math="k < 1" /> より、 <InlineMath math="(1-k)d(x, y) \leq 0" /> となるが、距離の非負性より <InlineMath math="d(x, y) = 0" /> 、すなわち <InlineMath math="x = y" /> である。
                </p>
                <p className="mt-4">
                    <strong>2. 存在：</strong>
                    任意の点 <InlineMath math="x_0" /> から反復列 <InlineMath math="x_{n+1} = T(x_n)" /> を作ると、
                    <BlockMath math="d(x_{n+1}, x_n) \leq k d(x_n, x_{n-1}) \leq \dots \leq k^n d(x_1, x_0)" />
                    である。三角不等式より <InlineMath math="m > n" /> に対して
                    <BlockMath math="d(x_m, x_n) \leq \sum_{j=n}^{m-1} d(x_{j+1}, x_j) \leq \frac{k^n}{1-k} d(x_1, x_0)" />
                    となり、これは <InlineMath math="n \to \infty" /> で 0 に収束する。よって <InlineMath math="\{x_n\}" /> はコーシー列であり、完備性よりある点 <InlineMath math="x" /> に収束する。
                    連続性から <InlineMath math="T(x) = \lim T(x_n) = \lim x_{n+1} = x" /> となり、 <InlineMath math="x" /> は不動点である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 2.4-2 (主定理の証明の要旨)">
                <p>
                    ピカール・リンデレーフの定理は、適切な関数空間（完備距離空間）上の積分作用素 <InlineMath math="T" /> に対して、縮小写像の原理を適用することで証明される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    初期値問題の積分方程式を <InlineMath math="y = T[y]" /> と表す。
                    領域 <InlineMath math="D" /> 上で <InlineMath math="|f| \leq M" /> 、リプシッツ定数を <InlineMath math="L" /> とする。
                    <InlineMath math="h < \min(a, b/M, 1/L)" /> となる小さな区間 <InlineMath math="I = [x_0-h, x_0+h]" /> を考えると、
                    <InlineMath math="T" /> は連続関数の成すバナッハ空間 <InlineMath math="C(I)" /> の閉部分集合を自身に写し、
                    <BlockMath math="\begin{aligned} |T[y_1](x) - T[y_2](x)| &\leq \int_{x_0}^x |f(t, y_1(t)) - f(t, y_2(t))| dt \\ &\leq L \int_{x_0}^x |y_1(t) - y_2(t)| dt \\ &\leq L h \|y_1 - y_2\| \end{aligned}" />
                    となる。 <InlineMath math="kh = Lh < 1" /> となるように <InlineMath math="h" /> を選ぶことで縮小写像の原理が適用でき、
                    不動点（＝微分方程式の唯一の解）の存在が示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                ピカール・リンデレーフの定理の証明の本質は、積分作用素
                <BlockMath math="T[\phi](x) = y_0 + \int_{x_0}^{x} f(t, \phi(t)) \, dt" />
                が「十分近い範囲」において縮小写像になることを示すことにあります。
                この不動点こそが、私たちが求めていた微分方程式の唯一の解なのです。
            </p>

            <ContentBox type="remark" title="リプシッツ条件の役割（再考）">
                <p>
                    作用素 <InlineMath math="T" /> が縮小性を獲得するためには、 <InlineMath math="f" /> の中身が大きく変動しすぎないことが必要です。
                    ここで §2.2 で学んだ<strong>リプシッツ条件</strong>が牙を剥きます。
                    リプシッツ定数 <InlineMath math="L" /> を用いて、関数の差が積分のたびに縮まっていくことを保証するのが証明の核心です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ピカール反復</strong>： 関数を積分し続けることで解へと近づける具体的なアルゴリズム。</li>
                    <li><strong>極限としての解</strong>： 指数関数の多項式近似のように、反復の極限が真の解を構成する。</li>
                    <li><strong>縮小写像の原理</strong>： 定理の証明を支える背骨。積分作用素の「不動点」が解に相当する。</li>
                    <li><strong>論理の繋がり</strong>： 連続性・リプシッツ性という「材料」から、縮小写像という「道具」を経て、存在と一意性という「結果」が導かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
