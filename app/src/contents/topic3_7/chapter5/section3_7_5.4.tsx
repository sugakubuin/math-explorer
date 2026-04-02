import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConditionalDistribution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでの議論では、ある σ-加法族（情報）が与えられたときの期待値という「1 次モーメント」に注目してきました。
                しかし、実際には期待値だけでなく、確率変数の「分布そのもの」がどのように変化するのかを捉える概念が必要となります。
                本節では、条件付き確率を測度のように扱うための「正則条件付き分布」とその具体例について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則条件付き確率分布</h2>

            <p className="leading-relaxed">
                条件付き確率を各点 <InlineMath math="\omega" /> ごとに測度として定義するための厳密な仕組みを、正則条件付き確率分布といいます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (正則条件付き確率分布)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> と部分 σ-加法族 <InlineMath math="\mathcal{G}" /> に対し、
                    写像 <InlineMath math="K: \mathcal{F} \times \Omega \to [0, 1]" /> が次の 2 条件を満たすとき、
                    これを <InlineMath math="\mathcal{G}" /> に関する<b>正則条件付き確率分布</b>（regular conditional distribution）という：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>各 <InlineMath math="\omega \in \Omega" /> に対し、<InlineMath math="K(\cdot, \omega)" /> が <InlineMath math="\mathcal{F}" /> 上の確率測度である。</li>
                    <li>各 <InlineMath math="A \in \mathcal{F}" /> に対し、<InlineMath math="K(A, \cdot)" /> が <InlineMath math="\mathcal{G}" />-可測であり、
                        かつ <InlineMath math="K(A, \cdot) = P(A \mid \mathcal{G})" /> a.s. を満たす。
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                この概念を用いることで、条件付き期待値を単に積分 <InlineMath math="\int X(\omega') K(d\omega', \omega)" /> として再定義できるようになります。
            </p>

            <ContentBox type="example" title="Example 5.4-1 (条件付き密度：連続型からのアプローチ)">
                <p>
                    結合密度関数 <InlineMath math="f(x, y)" /> を持つ連続型確率変数のペア <InlineMath math="(X, Y)" /> を考える。
                    周辺密度 <InlineMath math={"f_Y(y) > 0"} /> のとき、
                    <BlockMath math="f_{X|Y}(x \mid y) = \frac{f(x, y)}{f_Y(y)}" />
                    として定義される関数系を条件付き密度という。
                </p>
                <p>
                    この密度関数から決まる分布の族 <InlineMath math="y \mapsto P_{X \mid Y}(\cdot \mid y)" /> は、
                    <InlineMath math="Y" /> の情報（すなわち σ-加法族 <InlineMath math="\sigma(Y)" />）に関する正則条件付き分布の具体例となっている。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="条件付き分布の重要性">
                <p>
                    条件付き期待値は分布の 1 次モーメントに過ぎませんが、正則条件付き分布が得られれば、
                    条件付き分散、条件付きエントロピー、条件付き特性関数など、分布に含まれるあらゆる情報を抽出することが可能になります。
                </p>
                <p>
                    この概念は、情報の時間発展を扱う<b>確率過程論</b>や、事前情報から事後分布を導く<b>ベイズ統計学</b>において、理論の根幹を支える極めて重要な道具です。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここまで、Topic 3-7 では測度論に基づく確率論の基礎を体系的に学んできました。
                σ-加法族、確率変数の収束、独立性、そしてこの条件付き期待値という 4 つの柱は、
                マルチンゲール理論やブラウン運動の解析など、より高度な現代確率論への確かな一歩となるでしょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>正則条件付き確率分布（カーネル）は、条件付き確率を測度として体系的に扱うための仕組みである。</li>
                    <li>連続型の場合の条件付き密度関数は、この正則分布の代表的な表現である。</li>
                    <li>分布そのものの情報を捉えるこの概念は、確率過程やベイズ統計学など実務・応用の幅広い分野で核心的な役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
