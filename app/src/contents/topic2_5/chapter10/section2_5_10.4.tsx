import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BanachFixedPointTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                完備距離空間の上では、ある種の写像が必ず「不動点（自分自身へ移る点）」を持つことが保証されます。
                これは単なる抽象的な定理ではなく、方程式の近似解を求めるための強力な理論的根拠となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">縮小写像</h2>

            <p>
                写像によって 2 点間の距離が確実に縮まるような写像を定義します。
            </p>

            <ContentBox type="definition" title="Definition 10.4-1 (縮小写像)">
                <p>
                    距離空間 <InlineMath math="(X, d)" /> からそれ自身への写像 <InlineMath math="f: X \to X" /> が<strong>縮小写像 (Contraction mapping)</strong> であるとは、
                    ある定数 <InlineMath math="k \in [0, 1)" /> が存在して、任意の <InlineMath math="x, y \in X" /> に対し
                    <BlockMath math="d(f(x), f(y)) \leq k \cdot d(x, y)" />
                    が成り立つことをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                縮小写像は単に距離が縮まるだけでなく、「縮まる比率が 1 未満の定数で抑えられている」ことが重要です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">バナッハの不動点定理</h2>

            <p>
                完備性の助けを借りることで、縮小写像が持つ驚くべき性質が導かれます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-1 (バナッハの不動点定理)">
                <p>
                    空でない完備距離空間 <InlineMath math="X" /> 上の縮小写像 <InlineMath math="f" /> は、
                    ただ一つの<strong>不動点 (Fixed point)</strong> を持つ。
                </p>
                <p className="mt-4">
                    （すなわち、 <InlineMath math="f(x) = x" /> を満たす <InlineMath math="x \in X" /> が唯一存在する）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の点 <InlineMath math="x_0 \in X" /> から始めて、 <InlineMath math="x_{n+1} = f(x_n)" /> と逐次的に点を定義する。
                    <InlineMath math="d(x_{n+1}, x_n) = d(f(x_n), f(x_{n-1})) \leq k \cdot d(x_n, x_{n-1})" /> であるから、
                    繰り返し適用すると <InlineMath math="d(x_{n+1}, x_n) \leq k^n \cdot d(x_1, x_0)" /> となる。
                </p>
                <p className="mt-4">
                    三角不等式より、 <InlineMath math="m > n" /> に対して
                    <BlockMath math="\begin{aligned} d(x_m, x_n) &\leq \sum_{i=n}^{m-1} d(x_{i+1}, x_i) \\ &\leq \sum_{i=n}^{m-1} k^i d(x_1, x_0) \\ &\leq \frac{k^n}{1-k} d(x_1, x_0) \end{aligned}" />
                    となる。 <InlineMath math="k < 1" /> なので、これは <InlineMath math="n \to \infty" /> で 0 に収束し、 <InlineMath math="\{x_n\}" /> はコーシー列である。
                </p>
                <p className="mt-4">
                    <InlineMath math="X" /> の完備性より極限 <InlineMath math="x = \lim x_n" /> が存在し、
                    <InlineMath math="f" /> の連続性（縮小写像は常に連続）より <InlineMath math="f(x) = \lim f(x_n) = \lim x_{n+1} = x" /> が成り立つ。
                    一意性は縮小性の定義から直ちに導かれる。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：微分方程式の解の存在</h2>

            <p>
                この定理は、多くの「解の存在証明」の裏方として活躍しています。
            </p>

            <ContentBox type="column" title="ピカール・リンデレーフの定理">
                <p>
                    微分方程式 <InlineMath math="y' = f(x, y)" /> の解を求める問題は、積分方程式の不動点を求める問題に書き換えられます。
                    解の候補（関数の空間）に先ほどの <InlineMath math="C[a, b]" /> を採用し、完備性を利用してバナッハの不動点定理を適用することで、
                    解が唯一存在することを厳密に証明できます。これを<strong>ピカールの逐次近似法</strong>と呼びます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>縮小写像</strong>：点同士を確実に近づける写像。</li>
                    <li><strong>不動点定理</strong>：完備空間での縮小写像は、必ず「変化しない一点」を持つ。</li>
                    <li><strong>実用性</strong>：方程式の解を逐次近似（計算を繰り返す）によって求められるという保証を与えている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
