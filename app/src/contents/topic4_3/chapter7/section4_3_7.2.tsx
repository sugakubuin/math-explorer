import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiFunctionsBasicProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入したヤコビの楕円関数 <InlineMath math="\text{sn}(u, k)" />、<InlineMath math="\text{cn}(u, k)" />、<InlineMath math="\text{dn}(u, k)" /> の基本的な性質について見ていきます。これらの関数は、三角関数が持つ周期性や加法公式を、二重周期関数の枠組みへ自然に拡張した性質を備えています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">周期性</h2>

            <p>
                ヤコビの楕円関数は二重周期関数であり、その周期は第一種完全楕円積分によって特徴付けられます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 7.2-1 (<InlineMath math="\text{sn}" /> の周期)</span>}>
                <p>
                    <InlineMath math="\text{sn}(u, k)" /> は実周期 <InlineMath math="4K" /> と虚周期 <InlineMath math="2iK'" /> を持つ二重周期関数である。ここで、<InlineMath math="K = K(k)" /> は母数 <InlineMath math="k" /> の第一種完全楕円積分、<InlineMath math="K' = K(k')" /> は補母数 <InlineMath math="k' = \sqrt{1-k^2}" /> に対する第一種完全楕円積分である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    楕円積分の定義から、積分路を適切に選ぶことで変数のシフトに対する関係式を導くことができる。具体的には、
                </p>
                <BlockMath math="\text{sn}(u+2K) = -\text{sn}(u)" />
                <p>
                    が成り立つ。これを2回適用することにより、
                </p>
                <BlockMath math="\text{sn}(u+4K) = -\text{sn}(u+2K) = \text{sn}(u)" />
                <p>
                    となり、<InlineMath math="4K" /> が周期であることがわかる。同様に、複素平面上での積分路の変形により虚周期方向のシフトを計算すると、<InlineMath math="\text{sn}(u+2iK') = \text{sn}(u)" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                周期性がわかったことで、関数が複素平面上でどのように振る舞うかを基本周期平行四辺形の中で把握することができます。
            </p>

            <ContentBox type="example" title="Example 7.2-1">
                <p>
                    <InlineMath math="\text{sn}" /> 関数の格子は <InlineMath math="\Lambda = 4K\mathbb{Z} + 2iK'\mathbb{Z}" /> で与えられる。基本周期平行四辺形内において、零点と極は以下のように配置されている。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>零点</strong>: <InlineMath math="u = 0, 2K" /> の2箇所（ともに1位の零点）</li>
                    <li><strong>極</strong>: <InlineMath math="u = iK', 2K+iK'" /> の2箇所（ともに1位の極）</li>
                </ul>
                <p className="mt-2">
                    これはリウヴィルの定理（Theorem 2.4-3）が要請する「基本周期平行四辺形内の零点と極の個数が等しい」という性質を満たしている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">加法公式</h2>

            <p>
                三角関数に加法公式が存在するように、ヤコビの楕円関数にも加法公式が存在します。これはアーベルの加法定理の具体的な帰結の一つです。
            </p>

            <ContentBox type="theorem" title="Theorem 7.2-1">
                <p>
                    <InlineMath math="\text{sn}" /> 関数に対して、以下の加法公式が成り立つ：
                </p>
                <BlockMath math="\text{sn}(u+v) = \frac{\text{sn}\,u\,\text{cn}\,v\,\text{dn}\,v + \text{sn}\,v\,\text{cn}\,u\,\text{dn}\,u}{1-k^2\text{sn}^2u\,\text{sn}^2v}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    変数 <InlineMath math="u" /> を固定し、右辺を <InlineMath math="v" /> の関数 <InlineMath math="f(v)" /> と見なす。左辺の関数 <InlineMath math="g(v) = \text{sn}(u+v)" /> と比較する。
                    <InlineMath math="f(v)" /> は <InlineMath math="v" /> に関する楕円関数であり、その極は分母が <InlineMath math="0" /> となる点、すなわち <InlineMath math="k^2\text{sn}^2u\,\text{sn}^2v = 1" /> を満たす点である。一方、<InlineMath math="g(v)" /> の極も同じ位置にあることが相互関係からわかる。
                    さらに、零点の一致および <InlineMath math="v=0" /> における値の一致を調べることにより、商 <InlineMath math="f(v)/g(v)" /> は極を持たない正則な楕円関数、すなわち定数であることがリウヴィルの第一定理（Theorem 2.4-1）より従う。
                    <InlineMath math="v=0" /> を代入して定数が <InlineMath math="1" /> であることを確認すれば、等号が証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この加法公式が、極限において私たちがよく知る三角関数の加法公式に一致することを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-2">
                <p>
                    母数が <InlineMath math="k = 0" /> の極限を考える。このとき、<InlineMath math="\text{sn}(u, 0) = \sin u" />、<InlineMath math="\text{cn}(u, 0) = \cos u" />、<InlineMath math="\text{dn}(u, 0) = 1" /> である。
                    これらを Theorem 7.2-1 の加法公式に代入すると、分母は <InlineMath math="1 - 0 = 1" /> となり、分子は
                </p>
                <BlockMath math="\sin u \cos v \cdot 1 + \sin v \cos u \cdot 1" />
                <p>
                    となる。したがって、
                </p>
                <BlockMath math="\sin(u+v) = \sin u \cos v + \cos u \sin v" />
                <p>
                    というお馴染みの三角関数の加法公式が回復する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="加法公式と群法則">
                <p>
                    このヤコビの加法公式は、第1章で触れたアーベルの加法定理（Theorem 1.5-1）を、ヤコビ関数の言葉で表現し直したものです。
                    また、第5章で学んだワイエルシュトラスの <InlineMath math="\wp" /> 関数の加法公式（Theorem 5.3-2）とは見た目が大きく異なりますが、本質的には同じ楕円曲線上の群法則を異なる座標系（パラメータ）で記述しているに過ぎません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\text{sn}" /> 関数は実周期 <InlineMath math="4K" /> と虚周期 <InlineMath math="2iK'" /> を持つ二重周期関数である。</li>
                    <li><InlineMath math="\text{sn}" /> 関数の加法公式は、<InlineMath math="\text{cn}" /> や <InlineMath math="\text{dn}" /> を交えた有理式として表される。</li>
                    <li>母数 <InlineMath math="k \to 0" /> の極限で、ヤコビ関数の性質は三角関数の性質に帰着する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
