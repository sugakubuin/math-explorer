import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GlobalExistence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 2 では、微分方程式の解が途中で無限大に飛んでしまう「爆発現象」を学びました。
                一般の非線形方程式では、たとえ方程式自体が全域で定義されていても、解がどこまで続くかを保証するのは困難です。
                しかし、線形微分方程式においては、係数が連続である限り、解は「係数が定義されている全域」まで安全に延長できることが保証されています。
                本節では、この理論的な「恩恵」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解の延長と最大解</h2>

            <p>
                初期点の近傍で見つけた局所的な解を、どこまで横に伸ばしていけるか、という概念を定式化します。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (解の延長と最大解)">
                <p>
                    区間 <InlineMath math="I" /> 上の解 <InlineMath math="\phi(x)" /> が、より広い区間 <InlineMath math="J \supset I" /> 上の解 <InlineMath math="\psi(x)" /> の一部（ <InlineMath math="\psi|_I = \phi" /> ）であるとき、 <InlineMath math="\psi" /> を <InlineMath math="\phi" /> の<strong>延長 (extension)</strong> と呼ぶ。
                    それ以上延長できない解を<strong>最大解</strong>と呼び、その定義域を<strong>最大存在区間</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.4-1 (解の延長定理)">
                <p>
                    リプシッツ条件を満たす微分方程式の解は、その最大存在区間の端において、領域の境界に近づくか、あるいは無限遠へ去るかのどちらかである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    最大存在区間の右端を <InlineMath math="b" /> とし、解 <InlineMath math="\phi(x)" /> が <InlineMath math="x \to b" /> で領域の内部にとどまり、かつ有界であると仮定する。
                    このとき、リプシッツ条件から導かれる解の収束性により、極限 <InlineMath math="\lim_{x \to b} \phi(x) = y_b" /> が存在する。
                    点 <InlineMath math="(b, y_b)" /> を初期値とする局所解の存在定理を適用すれば、解を <InlineMath math="b" /> を超えてさらに延長できる。
                    これは <InlineMath math="b" /> が最大区間の端であるという仮定に矛盾する。
                    したがって、解は端において境界に達するか、無限遠へ去らなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">線形方程式の大域存在定理</h2>

            <p>
                線形方程式では、最大存在区間が最初から分かっているという極めて強力な結論が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-2 (線形方程式の大域存在)">
                <p>
                    <InlineMath math="n" /> 階線形微分方程式
                    <BlockMath math="y^{(n)} + p_{n-1}(x)y^{(n-1)} + \cdots + p_0(x)y = q(x)" />
                    において、すべての係数 <InlineMath math="p_i(x)" /> と右辺 <InlineMath math="q(x)" /> が開区間 <InlineMath math="I" /> 上で連続であるとする。
                    このとき、開区間 <InlineMath math="I" /> 内の任意の初期点 <InlineMath math="x_0" /> に対する初期値問題の解は、
                    <strong>区間 <InlineMath math="I" /> の全体で（大域的に）ただ一つ存在する。</strong>
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    線形方程式の場合、解 <InlineMath math="\phi(x)" /> の成長速度は、係数の最大値を用いた不等式（グロンウォールの不等式など）によって評価される。
                    評価式
                    <BlockMath math="\|\Phi(x)\| \leq \|\Phi(x_0)\| \exp\left( \int_{x_0}^x K(t) dt \right)" />
                    （ここで <InlineMath math="\Phi" /> は値ベクトル、 <InlineMath math="K" /> は係数から決まる関数）が成り立つため、
                    係数が連続である（有限な）区間内では、解が有限時間内に無限遠へ去る（爆発する）ことはあり得ない。
                    Theorem 3.4-1 と合わせると、解は係数が連続である区間の端まで必ず延長可能であることが導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="線形性の恩恵：爆発の不在">
                <p>
                    非線形方程式 <InlineMath math="y' = y^2" /> では、右辺の関数 <InlineMath math="f(y) = y^2" /> は全域で滑らかですが、解 <InlineMath math="y = 1/(1-x)" /> は <InlineMath math="x=1" /> で爆発しました。
                    これに対し、線形方程式では「方程式の係数が壊れない（不連続にならない）限り、解も壊れない」ということが保証されます。
                    この性質により、線形システムは予測可能性が極めて高く、工学や物理学の多くのモデルで重用されています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>最大解</strong>： 限界まで延長された、最も広い定義域を持つ解。</li>
                    <li><strong>大域存在性</strong>： 線形方程式の最大存在区間は、係数の連続な区間と一致する。</li>
                    <li><strong>爆発現象との対比</strong>： 線形方程式では有限時間爆発は起こらない。</li>
                    <li><strong>実用上の意義</strong>： 係数の振る舞いを見るだけで、解の有効範囲を事前に知ることができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
