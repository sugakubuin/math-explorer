import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LebesgueDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節のラドン・ニコディムの定理は、絶対連続性がある前提での話でした。
                では、絶対連続でない場合はどうなるでしょうか。
                <b>ルベーグ分解定理</b>は、どのような測度であっても「絶対連続な部分」と、それとは全く相容れない「特異な部分」に分解できることを主張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">相互特異な測度</h2>

            <p>
                「重ならない」測度の概念を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.4-1 (相互特異)">
                <p>
                    二つの測度 <InlineMath math="\mu, \nu" /> が <b>相互特異 (mutually singular)</b> であるとは、可測集合 <InlineMath math="A, B" /> が存在して
                    <BlockMath math="A \cup B = X, \ A \cap B = \emptyset, \ \mu(B) = 0, \ \nu(A) = 0" />
                    が成り立つことをいい、<InlineMath math="\mu \perp \nu" /> と記す。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-1 (離散と連続)">
                <p>
                    1 点にのみ重みを持つ <b>ディラック測度</b> <InlineMath math="\delta_0" /> と、通常の <b>ルベーグ測度</b> <InlineMath math="\lambda" /> を考えます。
                    <InlineMath math="\delta_0(\{0\}) = 1" /> ですが <InlineMath math="\lambda(\{0\}) = 0" /> です。
                    一方で、<InlineMath math="x \neq 0" /> の領域では <InlineMath math="\delta_0" /> は常に 0 です。
                    したがって、両者は互いに特異です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルベーグ分解定理</h2>

            <p>
                これは、ハーン分解を二つの異なる測度の関係に拡張したものとも言えます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (ルベーグ分解定理)">
                <p>
                    <InlineMath math="\mu" /> を <InlineMath math="\sigma" />-有限な非負測度、<InlineMath math="\nu" /> を <InlineMath math="\sigma" />-有限な符号付き測度とする。
                    このとき、符号付き測度 <InlineMath math="\nu_{ac}" /> と <InlineMath math="\nu_s" /> が一意に存在して、次のように書ける：
                    <BlockMath math="\nu = \nu_{ac} + \nu_s" />
                    ここで、
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><InlineMath math="\nu_{ac} \ll \mu" /> （絶対連続部）</li>
                        <li><InlineMath math="\nu_s \perp \mu" /> （特異部）</li>
                    </ul>
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （非負測度の場合）測度 <InlineMath math="\phi = \nu + \mu" /> を考える。
                    このとき <InlineMath math="\nu \ll \phi" /> であるから、ラドン・ニコディムの定理より、ある <InlineMath math="g" /> が存在して <InlineMath math="d\nu = g \, d\phi = g \, d\nu + g \, d\mu" /> と書ける。
                    これを整理すると <InlineMath math="(1-g) \, d\nu = g \, d\mu" /> となる。
                </p>
                <p className="mt-4">
                    集合 <InlineMath math="A = \{x \mid 0 \leq g(x) < 1\}" /> および <InlineMath math="B = \{x \mid g(x) = 1\}" /> と分けると、<InlineMath math="X = A \cup B" /> である。
                    <InlineMath math="B" /> 上では <InlineMath math="0 \cdot d\nu = 1 \cdot d\mu" /> より <InlineMath math="\mu(B) = 0" /> となる。
                    <InlineMath math="\nu_{ac}(E) = \nu(E \cap A)" />, <InlineMath math="\nu_s(E) = \nu(E \cap B)" /> と置くと、<InlineMath math="\nu_s" /> は <InlineMath math="B" /> に台を持ち <InlineMath math="\mu(B)=0" /> なので <InlineMath math="\nu_s \perp \mu" /> である。
                    また <InlineMath math="\nu_{ac}" /> が <InlineMath math="\mu" /> に関して絶対連続であることは、<InlineMath math="g" /> を用いた積分表示から導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="corollary" title="Corollary 7.4-1 (分解の具体形)">
                <p>
                    ラドン・ニコディムの定理（§7.3）を組み合わせると、さらに次のように表現できます：
                    <BlockMath math="\nu(A) = \int_A f \, d\mu + \nu_s(A)" />
                    ここで <InlineMath math="f" /> は <InlineMath math="\nu_{ac}" /> のラドン・ニコディム微分です。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 7.4-1 より <InlineMath math="\nu = \nu_{ac} + \nu_s" /> かつ <InlineMath math="\nu_{ac} \ll \mu" /> である。
                    絶対連続な測度 <InlineMath math="\nu_{ac}" /> に対してラドン・ニコディムの定理を適用すれば、ある可測関数 <InlineMath math="f" /> が存在して <InlineMath math="\nu_{ac}(A) = \int_A f \, d\mu" /> と書ける。
                    これを代入すれば直ちに得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分解の意味</h2>

            <p>
                この定理は、あらゆる現象が「制御可能な部分（積分表示できる部分）」と「制御不可能な例外的部分（特異な部分）」に分けられることを示唆しています。
            </p>

            <ContentBox type="example" title="Example 7.4-2 (カントール測度)">
                <p>
                    §6.5 で学んだ <b>カントール関数</b> は、ルベーグ測度に対して「特異」です。
                    カントール関数から作られる測度は、ルベーグ測度に関して絶対連続な部分を持たず、純粋に特異な部分 <InlineMath math="\nu_s" /> のみで構成されています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>相互特異</b> (<InlineMath math="\mu \perp \nu" />) は、二つの測度が互いに異なる「台」を持っていて、共通部分を持たないことを意味する。</li>
                    <li><b>ルベーグ分解定理</b> は、測度を「密な部分」と「特異な部分」に一意に分解する。</li>
                    <li>この定理は、現象を解析的な成分と例外的な成分に切り分けるための根本的な指針を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
