import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeakLawOfLargeNumbers() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                「試行回数を増やしていけば、平均的な傾向が浮かび上がる」という私たちの直感を正当化するのが、大数の法則です。
                本節では、まず「確率収束」の意味で平均が期待値に近づく「弱法則」を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱大数の法則の主張</h2>

            <p className="leading-relaxed">
                弱法則は、十分大きな <InlineMath math="n" /> に対して、標本平均が期待値から大きく外れる確率が無視できるほど小さくなることを示します。
            </p>

            <ContentBox type="theorem" title="Theorem 8.2-1 (弱大数の法則：WLLN)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が独立同分布（i.i.d.）であり、
                    平均 <InlineMath math="E[X_1] = \mu" /> および有限な分散 <InlineMath math="\text{Var}(X_1) = \sigma^2 < \infty" /> を持つとする。
                    このとき、標本平均 <InlineMath math="\bar{X}_n = \frac{1}{n} \sum_{k=1}^n X_k" /> は <InlineMath math="\mu" /> に確率収束する：
                    <BlockMath math="\bar{X}_n \xrightarrow{P} \mu \quad (n \to \infty)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    チェビシェフの不等式を利用する。
                    まず、標本平均 <InlineMath math="\bar{X}_n" /> の平均と分散を計算すると、
                    <BlockMath math="E[\bar{X}_n] = \mu, \quad \text{Var}(\bar{X}_n) = \frac{\sigma^2}{n}" />
                    となる。よって、任意の <InlineMath math="\varepsilon > 0" /> に対し、
                    <BlockMath math="P(|\bar{X}_n - \mu| > \varepsilon) \leq \frac{\text{Var}(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2}" />
                    が成り立つ。<InlineMath math="n \to \infty" /> とすると右辺は <InlineMath math="0" /> に収束するため、
                    標本平均が <InlineMath math="\mu" /> に確率収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用：モンテカルロ法</h2>

            <p className="leading-relaxed">
                大数の法則の応用例として、ランダムなシミュレーションによって数値を推定する手法を考えます。
            </p>

            <ContentBox type="example" title="Example 8.2-1 (モンテカルロ法による円周率の近似)">
                <p>
                    正方形 <InlineMath math="[0, 1] \times [0, 1]" /> 内にランダムに点を打ち、単位円の第 1 象限内（<InlineMath math="x^2 + y^2 \leq 1" />）に入る確率を推定する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        確率変数 <InlineMath math="I_k" /> を、<InlineMath math="k" /> 番目の点が円内に入れば <InlineMath math="1" />、そうでなければ <InlineMath math="0" /> とする。
                    </li>
                    <li>
                        このとき期待値は <InlineMath math="E[I_k] = P(X^2 + Y^2 \leq 1) = \pi/4" /> である。
                    </li>
                    <li>
                        弱大数の法則より、試行回数 <InlineMath math="n" /> を増やすと、標本比率 <InlineMath math="\frac{1}{n}\sum I_k" /> は
                        確率的に <InlineMath math="\pi/4" /> へ近づいていく。
                    </li>
                </ul>
                <p className="mt-4">
                    この手法は「モンテカルロ法」と呼ばれ、複雑な積分計算や物理シミュレーションにおける強力な武器となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 分散有限の仮定について">
                <p>
                    本節の証明では簡単のため分散が有限であることを仮定しましたが、
                    実は期待値 <InlineMath math="E[|X_1|]" /> が有限であれば（分散が無限または存在しなくても）、弱大数の法則は成り立ちます。
                    さらに強い条件である「概収束」を主張する「強大数の法則」については、次節で詳しく扱います。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>弱大数の法則は、大量の試行の平均が期待値の近傍に留まる確率が 1 に近づくことを主張する。</li>
                    <li>基本的な証明にはチェビシェフの不等式が用いられ、分散が試行回数 <InlineMath math="n" /> に反比例して減少することが鍵となる。</li>
                    <li>この法則は、モンテカルロ法などの数値計算手法の数学的基盤となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
