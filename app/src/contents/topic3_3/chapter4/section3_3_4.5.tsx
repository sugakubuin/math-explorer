import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LpDensity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                <InlineMath math="L^p" /> 空間の元は非常に多様（不連続であったり、激しく振動したりする）ですが、それらを扱いやすい単純な関数や滑らかな関数で近似できることがあります。
                この「稠密性」の性質は、複雑な関数の証明を簡単な関数に帰着させる「稠密論法」として強力な武器となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単関数の稠密性</h2>

            <p>
                任意の可測関数が単関数で近似できる（Chapter 2）ことを踏まえると、<InlineMath math="L^p" /> の元も単関数で近似できるのは自然な結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-1 (単関数の稠密性)">
                <p>
                    <InlineMath math="1 \leq p < \infty" /> とし、測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> を考える。
                    このとき、有限測度を持つ台（support）を持つ <b>単関数の全体</b> は、<InlineMath math="L^p(X, \mu)" /> において稠密である。
                </p>
                <p className="mt-4">
                    すなわち、任意の <InlineMath math="f \in L^p" /> と任意の <InlineMath math="\varepsilon > 0" /> に対して、ある単関数 <InlineMath math="\phi" /> が存在して以下を満たす：
                    <BlockMath math="\|f - \phi\|_p < \varepsilon" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を実数値関数としても一般性を失わない。
                    まず <InlineMath math="f \geq 0" /> の場合を考える。
                    Chapter 2 で学んだ「単調近似定理」により、<InlineMath math="0 \leq s_n \uparrow f" /> を満たす単関数列 <InlineMath math="\{s_n\}" /> が存在する。
                </p>
                <p className="mt-4">
                    このとき <InlineMath math="|f - s_n|^p \leq f^p" /> であり、<InlineMath math="f \in L^p" /> より <InlineMath math="f^p" /> は可積分である。
                    ルベーグの優収束定理を <InlineMath math="\{|f - s_n|^p\}" /> に適用すると：
                    <BlockMath math="\lim_{n \to \infty} \int_X |f - s_n|^p \, d\mu = \int_X \lim_{n \to \infty} |f - s_n|^p \, d\mu = 0" />
                    が成り立つ。したがって <InlineMath math="\|f - s_n\|_p \to 0" /> となり、単関数で近似できる。
                </p>
                <p className="mt-4">
                    一般の <InlineMath math="f" /> については、正部分 <InlineMath math="f^+" /> と負部分 <InlineMath math="f^-" /> に分ければよい。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続関数の稠密性</h2>

            <p>
                特に実数直線上のルベーグ測度を考える場合、不連続な関数を連続関数で近似できるというのは驚くべき、かつ極めて重要な事実です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.5-2 (連続関数の稠密性)">
                <p>
                    <InlineMath math="1 \leq p < \infty" /> とする。実数直線上のルベーグ測度空間 <InlineMath math="L^p(\mathbb{R}, \lambda)" /> において、<b>コンパクトな台を持つ連続関数全体</b> <InlineMath math="C_c(\mathbb{R})" /> は稠密である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ルジンの定理（可測関数は「ほぼ」連続である）を用いて証明の概略を述べる。
                    まず前定理により、単関数の場合を示せば十分である。特性関数 <InlineMath math="\mathbf{1}_A" /> （<InlineMath math="A" /> は可測集合）に対して、測度の外測度的性質を用いて <InlineMath math="A" /> を開集合やコンパクト集合で近似し、その境界を滑らかに繋ぐ（Urysohn の補題のような考え方）ことで連続関数を構成する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="稠密論法 (Density Argument)">
                <p>
                    稠密性は「不連続な関数の性質を証明したければ、まずは連続関数で証明し、極限をとって一般化せよ」という指針を与えます。
                    もしある性質が連続関数で成り立ち、かつその性質が <InlineMath math="L^p" /> の極限操作に耐えうる（＝連続である）ならば、その性質は直ちにすべての <InlineMath math="L^p" /> 関数のものとなります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b><InlineMath math="L^p" /> 空間（<InlineMath math="p < \infty" />）</b> において、単関数の全体は稠密である。</li>
                    <li>ルベーグ空間 <InlineMath math="L^p(\mathbb{R})" /> においては、滑らかな <b>連続関数</b> さえも稠密である。</li>
                    <li>これにより、複雑な対象（不連続関数）を簡単な対象（連続関数）に帰着させる <b>稠密論法</b> が可能になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
