import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PathConnectedness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでに学んだ「開集合による分割」という連結性の定義は、非常に強力ですが、私たちの直感的な「繋がっている」という感覚とは少し乖離しているかもしれません。
                ここでは、より直感に近い「2点の間に連続な曲線が引ける」という性質を定式化します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弧状連結の定義</h2>

            <p>
                空間内の任意の2点を、ちぎれることなく連続的に結べるかどうかを考えます。
            </p>

            <ContentBox type="definition" title="Definition 8.3-1 (弧状連結)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>弧状連結 (Path-connected)</strong> であるとは、
                    任意の 2 点 <InlineMath math="x, y \in X" /> に対して、
                    <InlineMath math="x" /> と <InlineMath math="y" /> を結ぶ<strong>道 (Path)</strong> が存在することをいう。
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 italic">
                    ※ <strong>道</strong>とは、閉区間からの連続写像 <InlineMath math="\gamma: [0, 1] \to X" /> で <InlineMath math="\gamma(0) = x, \gamma(1) = y" /> を満たすもののこと。
                </p>
            </ContentBox>

            <p className="mt-4">
                私たちが日常的に目にする図形（平面や球体など）は、ほとんどの場合この弧状連結性を満たしています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弧状連結と連結の関係</h2>

            <p>
                「道で結べるなら、分割はできないだろう」という推論は正しいものです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.3-1 (弧状連結と連結の関係)">
                <p>
                    弧状連結な空間は必ず連結である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="X" /> が弧状連結であるとし、非連結であると仮定して矛盾を導く。
                    <InlineMath math="X" /> の分割を <InlineMath math="(U, V)" /> とし、点を <InlineMath math="a \in U, b \in V" /> ととる。
                    <InlineMath math="X" /> は弧状連結なので、 <InlineMath math="a" /> と <InlineMath math="b" /> を結ぶ道 <InlineMath math="\gamma: [0, 1] \to X" /> が存在する。
                </p>
                <p className="mt-4">
                    像 <InlineMath math="\Gamma = \gamma([0, 1])" /> を考えると、これは連結集合 <InlineMath math="[0, 1]" /> の連続像であるから、§8.2 の定理よりそれ自身として連結である。
                    しかし、 <InlineMath math="\Gamma \subset U \cup V" /> であり、
                    <BlockMath math="\Gamma \cap U \neq \emptyset \quad ( \because a \in \Gamma \cap U), \quad \Gamma \cap V \neq \emptyset \quad (\because b \in \Gamma \cap V)" />
                    が成り立つことから、 <InlineMath math="\Gamma" /> は分割可能となり、連結集合であることに矛盾する。
                    したがって、 <InlineMath math="X" /> は連結である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <p className="mt-4">
                しかし、驚くべきことにこの逆は一般には成り立ちません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連結だが弧状連結でない反例</h2>

            <p>
                位相幾何学において有名なこの反例は、連結性と弧状連結性の微妙な違いを浮き彫りにします。
            </p>

            <ContentBox type="example" title="Example 8.3-1 (位相幾何学者の正弦曲線)">
                <p>
                    <strong>位相幾何学者の正弦曲線 (Topologist's Sine Curve)</strong> と呼ばれる以下の集合 <InlineMath math="S \subset \mathbb{R}^2" /> を考える。
                </p>
                <BlockMath math="S = \left\{ (x, \sin(1/x)) \mid 0 < x \leq 1 \right\} \cup \{ (0, y) \mid -1 \leq y \leq 1 \}" />
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    右側の曲線部分は <InlineMath math="x \to 0" /> で激しく振動しながら左側の線分に「限りなく近く」なります。
                    この集合は、右側の連結部分の閉包に含まれるため<strong>連結</strong>ですが、
                    原点方向へ無限に振動しているために、右側から左側の線分へ「有限の長さの、あるいは連続な道」で繋ぐことができません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="局所的な「素直さ」">
                <p>
                    距離空間（特に §9 で学ぶユークリッド空間）の開集合などの「素直な」空間においては、連結性と弧状連結性は一致することが多いです。
                    しかし、この例のように「限りなく近いが繋がっていない」という極限的な状況を含む集合では、両者の違いが顕著になります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>弧状連結</strong>：任意の2点を連続な道（曲線）で結べる性質。</li>
                    <li><strong>包含関係</strong>：弧状連結 <InlineMath math="\implies" /> 連結 だが、逆は必ずしも真ではない。</li>
                    <li><strong>反例</strong>：位相幾何学者の正弦曲線は、連結だが弧状連結ではない代表例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
