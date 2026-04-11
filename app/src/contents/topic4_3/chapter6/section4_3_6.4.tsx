import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiTripleProduct() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>前節まででテータ関数の基本的な性質や変換公式について学びました。本節では、テータ関数論の中でも特に美しく、かつ応用範囲の広い<b>ヤコビの三重積公式</b>（Jacobi triple product identity）を証明します。この公式は、テータ関数を無限和としてだけでなく、無限積として表現するものであり、数論への強力な応用を持ちます。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤコビの三重積公式</h2>

            <p>ヤコビの三重積公式は、テータ関数 <InlineMath math="\theta_3(z|\tau)" /> を無限積の形で与えます。まずはその主張を定式化しましょう。</p>

            <ContentBox type="theorem" title={<span>Theorem 6.4-1 (ヤコビの三重積公式)</span>}>
                <p>
                    <InlineMath math="q = e^{i\pi\tau}" /> （<InlineMath math="\text{Im}(\tau) > 0" />）としたとき、以下の等式が成立する。
                </p>
                <BlockMath math="\theta_3(z|\tau) = \prod_{n=1}^\infty (1-q^{2n})(1+q^{2n-1}e^{2iz})(1+q^{2n-1}e^{-2iz})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    右辺の無限積を <InlineMath math="P(z)" /> とおき、これが <InlineMath math="\theta_3(z|\tau)" /> と定数倍を除いて一致することを示す。まず、<InlineMath math="P(z)" /> の <InlineMath math="z" /> に関する準周期性を調べる。<InlineMath math="P(z+\pi)" /> については、<InlineMath math="e^{2i(z+\pi)} = e^{2iz}" /> より明らかに <InlineMath math="P(z+\pi) = P(z)" /> である。
                </p>
                <p>
                    次に、<InlineMath math="P(z+\pi\tau)" /> を考える。<InlineMath math="e^{2i(z+\pi\tau)} = q^2 e^{2iz}" /> であるから、
                </p>
                <BlockMath math="\begin{aligned} P(z+\pi\tau) &= \prod_{n=1}^\infty (1-q^{2n})(1+q^{2n-1}q^2e^{2iz})(1+q^{2n-1}q^{-2}e^{-2iz}) \\ &= \prod_{n=1}^\infty (1-q^{2n})(1+q^{2n+1}e^{2iz})(1+q^{2n-3}e^{-2iz}) \end{aligned}" />
                <p>
                    ここで添字のずれを調整すると、<InlineMath math="(1+q^{-1}e^{-2iz})" /> の項が余り、<InlineMath math="(1+q^{-1}e^{2iz})" /> が欠けるため、
                </p>
                <BlockMath math="\begin{aligned} P(z+\pi\tau) &= \frac{1+q^{-1}e^{-2iz}}{1+qe^{2iz}} P(z) \\ &= q^{-1}e^{-2iz} \frac{q e^{2iz} + 1}{1 + q e^{2iz}} P(z) \\ &= q^{-1}e^{-2iz} P(z) \end{aligned}" />
                <p>
                    を得る。これは <InlineMath math="\theta_3(z|\tau)" /> と全く同じ準周期性である。
                </p>
                <p>
                    また、<InlineMath math="P(z)" /> の零点は <InlineMath math="1+q^{2n-1}e^{\pm 2iz} = 0" /> より <InlineMath math="z = \frac{\pi}{2} + \frac{\pi\tau}{2} + m\pi + n\pi\tau" /> であり、これは <InlineMath math="\theta_3(z)" /> の零点と一致する（全て1位の零点）。
                </p>
                <p>
                    したがって、商 <InlineMath math="f(z) = \theta_3(z|\tau) / P(z)" /> は極を持たず、かつ二重周期性 <InlineMath math="f(z+\pi) = f(z)" />, <InlineMath math="f(z+\pi\tau) = f(z)" /> を持つ整関数となる。リウヴィルの定理より <InlineMath math="f(z)" /> は定数 <InlineMath math="C(\tau)" /> である。
                </p>
                <p>
                    最後に定数 <InlineMath math="C(\tau) = 1" /> を示す必要がある。これには <InlineMath math="z=0" /> とおいた値の比較や、フーリエ係数の比較を用いることで <InlineMath math="C(\tau) = 1" /> が示される（詳細は省略するが、形式的べき級数としての比較によって確認できる）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この定理により、テータ関数が無限積として扱えるようになりました。具体的に <InlineMath math="z=0" /> の場合を見てみましょう。</p>

            <ContentBox type="example" title="Example 6.4-1">
                <p>
                    <InlineMath math="z = 0" /> のとき、<InlineMath math="e^{2iz} = 1" /> であるから、公式は以下のようになる。
                </p>
                <BlockMath math="\theta_3(0|\tau) = \prod_{n=1}^\infty (1-q^{2n})(1+q^{2n-1})^2"
                />
                <p>
                    これは数論において頻繁に現れる恒等式の一つです。例えば <InlineMath math="q" /> が十分小さいときの数値的振る舞いを調べる際にも有用です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整数の平方和表示への応用</h2>

            <p>テータ関数の無限和としての定義と、上記の性質を組み合わせることで、整数論における古典的な難問である「ある整数がいくつかの平方数の和として何通りに表せるか」という問題に鮮やかな解答を与えることができます。</p>

            <ContentBox type="example" title="Example 6.4-2">
                <p>
                    <InlineMath math="\theta_3(0|\tau)" /> の級数表示を2乗すると、次のように展開される。
                </p>
                <BlockMath math="\theta_3(0|\tau)^2 = \left( \sum_{n=-\infty}^\infty q^{n^2} \right)^2 = \sum_{n=-\infty}^\infty \sum_{m=-\infty}^\infty q^{n^2+m^2}" />
                <p>
                    ここで、整数 <InlineMath math="N" /> に対して <InlineMath math="n^2 + m^2 = N" /> となる組 <InlineMath math="(n, m)" /> の個数を <InlineMath math="r_2(N)" /> とおくと、
                </p>
                <BlockMath math="\theta_3(0|\tau)^2 = 1 + \sum_{N=1}^\infty r_2(N) q^N" />
                <p>
                    となり、<InlineMath math="\theta_3(0|\tau)^2" /> は2つの平方和の表現の個数 <InlineMath math="r_2(N)" /> の母関数であることがわかる。
                </p>
            </ContentBox>

            <p>さらに、これを4乗すると「ヤコビの4平方定理」が導かれます。</p>

            <ContentBox type="example" title="Example 6.4-3 (ヤコビの4平方定理)">
                <p>
                    同様に4乗を考えると、
                </p>
                <BlockMath math="\theta_3(0|\tau)^4 = \sum_{N=0}^\infty r_4(N) q^N" />
                <p>
                    となり、<InlineMath math="r_4(N)" /> は整数 <InlineMath math="N" /> を4つの平方数の和として表す方法の数である。ヤコビはテータ関数の等式を用いて、
                </p>
                <BlockMath math="r_4(N) = 8 \sum_{d \mid N, 4 \nmid d} d" />
                <p>
                    であることを示した。この式から、任意の正整数 <InlineMath math="N" /> に対して <InlineMath math="r_4(N) > 0" />、すなわち「任意の正整数は4つの平方数の和で表される」というラグランジュの四平方定理が証明される。
                </p>
            </ContentBox>

            <p>このように、解析学の対象であるテータ関数が、純粋に代数的な整数論の問題を見事に解決する様は、数学の異なる分野が深く結びついていることの証左です。</p>

            <ContentBox type="remark" title="モジュラー形式への接続">
                <p>
                    整数の平方和表示問題は、テータ関数とモジュラー形式を結ぶ古典的な応用例です。<InlineMath math="\theta_3(0|\tau)^k" /> は重さ <InlineMath math="k/2" /> のモジュラー形式となり、そのフーリエ係数（<InlineMath math="q" />-展開の係数）がまさに平方和の個数を与えます。モジュラー形式の空間の次元が有限であるという性質を利用することで、このような係数に関する厳密な公式を系統的に導出することが可能になります。詳細はモジュラー形式の理論（5-7）で深く扱われます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヤコビの三重積公式は、テータ関数 <InlineMath math="\theta_3" /> を無限積として表現する強力な恒等式である。</li>
                    <li>この公式は、テータ関数の準周期性と零点の位置を利用し、リウヴィルの定理を応用して証明される。</li>
                    <li><InlineMath math="\theta_3(0|\tau)^k" /> を展開することで、整数を <InlineMath math="k" /> 個の平方数の和として表す方法の数の母関数が得られる。</li>
                    <li>特に <InlineMath math="k=4" /> の場合、ヤコビの4平方定理が導かれ、モジュラー形式の理論への重要な架け橋となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
