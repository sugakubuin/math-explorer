import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LebesgueDifferentiation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「微分積分学の基本定理」は、定積分を微分すると元の関数に戻ることを主張します。
                連続関数であれば容易に示せますが、可測関数の場合、不連続点が無数に存在する可能性があるため、議論には工夫が必要です。
                本節では、<b>ルベーグの微分定理</b>を通じて、局所的な平均がほとんど至る所で元の値に戻ることを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルベーグの微分定理</h2>

            <p>
                ある点 $x$ の周りの積分平均をとり、その区間（または球）を小さく絞っていったとき、その値はどうなるでしょうか。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ルベーグの微分定理)">
                <p>
                    <InlineMath math="f \in L^1(\mathbb{R}^n)" /> とする。このとき、ほとんどすべての <InlineMath math="x \in \mathbb{R}^n" /> に対して
                    <BlockMath math="\lim_{r \to 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} f(y) \, dy = f(x)" />
                    が成り立つ。ここで <InlineMath math="B(x, r)" /> は <InlineMath math="x" /> を中心とする半径 <InlineMath math="r" /> の球であり、<InlineMath math="|B(x, r)|" /> はそのルベーグ測度である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    証明の要点は、<b>ハーディ・リトルウッドの極大関数 (Hardy-Littlewood Maximal Function)</b> による評価です。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>連続関数の場合は、連続性から明らかに成立する。</li>
                    <li>一般の関数は連続関数で近似できる（Chapter 4 の稠密性の応用）。</li>
                    <li>近似から漏れる部分（誤差）を、極大関数 <InlineMath math="Mf(x) = \sup_{r>0} \frac{1}{|B(x, r)|} \int_{B(x, r)} |f(y)| \, dy" /> の「弱型不等式」を用いて制御する。</li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルベーグ点</h2>

            <p>
                上記の定理が成り立つような点 <InlineMath math="x" /> は、特別な名称で呼ばれます。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (ルベーグ点)">
                <p>
                    関数 <InlineMath math="f" /> に対し、
                    <BlockMath math="\lim_{r \to 0} \frac{1}{|B(x, r)|} \int_{B(x, r)} |f(y) - f(x)| \, dy = 0" />
                    を満たす点 <InlineMath math="x" /> を <InlineMath math="f" /> の <b>ルベーグ点 (Lebesgue point)</b> と呼ぶ。
                    ルベーグの微分定理は、可積分関数に対して「ほとんどすべての点がルベーグ点である」ことを主張している。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1 (不連続点とルベーグ点)">
                <p>
                    <InlineMath math="f(x) = \mathbf{1}_{[0, 1]}(x)" /> とすると、<InlineMath math="x=0" /> や <InlineMath math="x=1" /> では不連続ですが、それ以外のすべての点（および実はこれらの点も）において局所平均を考えればほとんどの場所でルベーグ点であることが保証されます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="積分の微分可能性">
                <p>
                    不定積分 <InlineMath math="F(x) = \int_a^x f(t) \, dt" /> に対して、この定理を適用すると、<InlineMath math="F'(x) = f(x)" /> が a.e. で成り立つことが直接導かれます。
                    これが次節で議論する「微分積分学の基本定理」の半分を構成します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ルベーグの微分定理</b> は、不連続な関数でも局所的な平均をとれば、a.e. で元の関数値に収束することを保証する。</li>
                    <li>ほとんどすべての点は <b>ルベーグ点</b> であり、そこでは関数の振る舞いが平均的な意味で非常に整っている。</li>
                    <li>証明には極大関数の弱型評価という、調和解析においても重要なテクニックが用いられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
