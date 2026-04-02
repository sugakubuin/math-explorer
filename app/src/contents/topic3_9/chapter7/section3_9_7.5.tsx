import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HierarchyOfDomains() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第4章から本章にかけて、私たちは様々な良い性質を持つ「整域」のクラス（ED、PID、UFD）を順に見てきました。本節では、これらと「体」を含めた環の階層構造を総括し、それぞれの逆の包含関係が成り立たないことを示す反例を整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">包含関係のまとめ</h2>

            <p className="leading-relaxed">
                これまでに証明してきた定理をつなぎ合わせると、美しい包含関係のチェーンができあがります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (整域の階層構造)">
                <p>
                    可換環のクラスにおいて、以下の真の包含関係が成立する。
                </p>
                <BlockMath math="\text{体} \subsetneq \text{ED} \subsetneq \text{PID} \subsetneq \text{UFD} \subsetneq \text{整域} \subsetneq \text{可換環}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    包含関係（<InlineMath math="\subset" />）を左から順に確認する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>体 <InlineMath math="\implies" /> ED：</b> 体 <InlineMath math="F" /> においては、非零元がすべて単元である。<InlineMath math="N(a) = 0" />（すべての非零元に <InlineMath math="0" /> を割り当てる）とすれば、任意の <InlineMath math="a" /> を <InlineMath math="b \neq 0" /> で割るとき、<InlineMath math="a = (ab^{-1})b + 0" /> となり常に余り <InlineMath math="0" /> で割り切れるため、ED の条件を満たす。
                    </li>
                    <li>
                        <b>ED <InlineMath math="\implies" /> PID：</b> Theorem 6.2-1 で証明済（ノルム最小の元がイデアルを生成する）。
                    </li>
                    <li>
                        <b>PID <InlineMath math="\implies" /> UFD：</b> Theorem 7.3-1 で証明済（昇鎖条件から分解が存在し、既約元が素元になることから一意性が従う）。
                    </li>
                    <li>
                        <b>UFD <InlineMath math="\implies" /> 整域：</b> UFD の定義そのものが、整域（零因子を持たない可換環）を前提としている。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆が成り立たない例（反例）</h2>

            <p className="leading-relaxed">
                Theorem 7.5-1 の包含関係が「真の包含関係（<InlineMath math="\subsetneq" />）」であること、すなわち「広いクラスに属するが、より条件の厳しい狭いクラスには属さない環」が存在することを、これまで登場した例を用いて再確認します。
            </p>

            <ContentBox type="example" title={<span>Example 7.5-1 (ED だが体でない例：<InlineMath math="\mathbb{Z}" />)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> は、絶対値をノルムとすることで余り付きの割り算ができるため ED である。
                </p>
                <p>
                    しかし、<InlineMath math="2" /> などの逆元（<InlineMath math="1/2" />）は <InlineMath math="\mathbb{Z}" /> の中には存在しないため、体ではない。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 7.5-2 (PID だが ED でない例：<InlineMath math="\mathbb{Z}\left[\frac{1+\sqrt{-19}}{2}\right]" />)</span>}>
                <p>
                    複素数平面上の特定の格子点からなる環 <InlineMath math="\mathbb{Z}\left[\frac{1+\sqrt{-19}}{2}\right]" /> は、すべてのイデアルが 1 つの元で生成されるため PID である。
                </p>
                <p>
                    しかし、どのようなノルム関数を用意してもユークリッドの互除法を機能させることができないため、ED ではない（Example 6.2-2）。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 7.5-3 (UFD だが PID でない例：<InlineMath math="\mathbb{Z}[x]" />)</span>}>
                <p>
                    整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> は、多項式を整数レベルまで完全に素因数分解できるため UFD である（詳しくは第8章で証明する）。
                </p>
                <p>
                    しかし、定数と変数で生成されるイデアル <InlineMath math="(2, x)" /> は 1 つの多項式では生成できないため、PID ではない（Example 6.1-3）。多変数多項式環 <InlineMath math="\mathbb{Q}[x, y]" /> の <InlineMath math="(x, y)" /> なども同様の例である。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 7.5-4 (整域だが UFD でない例：<InlineMath math="\mathbb{Z}[\sqrt{-5}]" />)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> は複素数体の部分環であるため零因子を持たず、整域である。
                </p>
                <p>
                    しかし、<InlineMath math="6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})" /> のように、既約元の積として 2 通りの分解を持ってしまうため、一意分解性が成り立たず、UFD ではない（Example 7.2-2）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>代数学において非常に重要な整域の階層構造：<b>体 <InlineMath math="\subsetneq" /> ED <InlineMath math="\subsetneq" /> PID <InlineMath math="\subsetneq" /> UFD <InlineMath math="\subsetneq" /> 整域</b></li>
                    <li>右に行くほど条件が緩くなり、当てはまる環の種類が多くなる（例えば多変数の多項式環は UFD までしか満たさない）。</li>
                    <li>左に行くほど条件が厳しくなり、割り算や互除法といった強力なアルゴリズムが使えるようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
