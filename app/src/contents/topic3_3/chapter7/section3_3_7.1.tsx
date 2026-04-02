import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SignedMeasureAndHahnDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは、非負の値（または無限大）をとる「通常の測度」を扱ってきました。
                しかし、物理学における電荷の分布や、収支のバランスなどを扱うためには、負の値をとり得る <b>符号付き測度</b> という一般化が必要です。
                本節では、符号付き測度の基本的な定義と、その構造を解明するための <b>ハーン分解定理</b> について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">符号付き測度の定義</h2>

            <p>
                符号付き測度は、測度の「可算加法性」を維持したまま、実数値をとることを許容したものです。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (符号付き測度)">
                <p>
                    可測空間 <InlineMath math="(X, \mathcal{A})" /> 上の関数 <InlineMath math="\nu: \mathcal{A} \to [-\infty, \infty]" /> が <b>符号付き測度 (signed measure)</b> であるとは、以下を満たすことをいう：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="+\infty" /> と <InlineMath math="-\infty" /> の両方の値はとらない。</li>
                    <li><InlineMath math="\nu(\emptyset) = 0" /> である。</li>
                    <li>互いに素な集合列 <InlineMath math="\{A_n\}" /> に対して、<InlineMath math="\nu(\bigcup A_n) = \sum \nu(A_n)" /> が成り立つ（可算加法性）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-1 (積分の密度による構成)">
                <p>
                    通常の非負測度 <InlineMath math="\mu" /> と、可積分関数 <InlineMath math="f" />（負の値もとり得る）に対して
                    <BlockMath math="\nu(A) = \int_A f \, d\mu" />
                    と定義すると、<InlineMath math="\nu" /> は符号付き測度となる。
                    このとき、<InlineMath math="f > 0" /> である領域では測度は正、<InlineMath math="f < 0" /> である領域では負となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハーン分解定理</h2>

            <p>
                「符号付き測度を、その符号が一定な領域にきれいに分割できるか？」という問いに答えるのが、次の定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 (ハーン分解定理)">
                <p>
                    <InlineMath math="\nu" /> を符号付き測度とする。このとき、次の条件を満たす可測集合のペア <InlineMath math="(P, N)" /> が存在する：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="P \cup N = X, \ P \cap N = \emptyset" /> である（全空間の分割）。</li>
                    <li><InlineMath math="P" /> は <b>正集合 (positive set)</b>、すなわち <InlineMath math="A \subset P" /> ならば <InlineMath math="\nu(A) \geq 0" />。</li>
                    <li><InlineMath math="N" /> は <b>負集合 (negative set)</b>、すなわち <InlineMath math="A \subset N" /> ならば <InlineMath math="\nu(A) \leq 0" />。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    すべての可測部分集合にわたる測度の値の上限を考える。
                    もし有限であれば、その上限を「達成」するような集合を極限操作によって構成する。
                    その集合を <InlineMath math="P" /> と置き、残りを <InlineMath math="N" /> とすれば、それらが望みの性質を持つことを示すことができる。
                    この証明の過程では、補集合をとった際の挙動や可算加法性が重要な役割を果たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="分解の一意性">
                <p>
                    集合 <InlineMath math="P, N" /> 自体は一意的とは限りませんが、別の分解 <InlineMath math="(P', N')" /> があっても、それらの差（対称差）は測度 0 の集合となります。
                    したがって、本質的には唯一の分解であると考えて差し支えありません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>符号付き測度</b> は負の値を許容した測度の一般化である。</li>
                    <li><b>ハーン分解定理</b> は、符号付き測度を「常に正の領域」と「常に負の領域」に分けることができることを主張する。</li>
                    <li>この定理は、次節のジョルダン分解（二つの非負測度の差への分解）の基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
