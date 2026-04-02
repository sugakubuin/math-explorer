import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DivisibilityBasics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「整数論」は、私たちの最も身近にある「整数」の性質を研究する数学の分野です。
                その出発点となるのは、ある整数が別の整数で「割り切れる」という関係、すなわち<strong>整除性</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整除の定義</h2>

            <p>
                「割り切れる」という概念を、あまりの出ない掛け算の形で厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (整除)">
                <p>
                    2つの整数 <InlineMath math="a, b" /> について、ある整数 <InlineMath math="k" /> が存在して
                    <BlockMath math="b = ka" />
                    が成り立つとき、<InlineMath math="a" /> は <InlineMath math="b" /> を<strong>割り切る</strong>といい、
                    <InlineMath math="a \mid b" /> と書く。
                    このとき、 <InlineMath math="a" /> を <InlineMath math="b" /> の<strong>約数 (divisor)</strong>、
                    <InlineMath math="b" /> を <InlineMath math="a" /> の<strong>倍数 (multiple)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="0 と 1 の性質">
                <ul className="list-disc list-inside space-y-1">
                    <li>0 は、0 以外のすべての整数の倍数である（ <InlineMath math="a \neq 0" /> のとき、 <InlineMath math="0 = 0 \cdot a" /> より <InlineMath math="a \mid 0" />）。</li>
                    <li>1 は、すべての整数の約数である（すべての <InlineMath math="b" /> に対して、 <InlineMath math="b = b \cdot 1" /> より <InlineMath math="1 \mid b" />）。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整除の基本性質</h2>

            <p>
                整除関係が持つ基本的な構造を確認しましょう。これらは以降の議論で暗黙のうちに使用される重要な道具です。
            </p>

            <ContentBox type="proposition" title="Proposition 1.1-1 (整除の推移性)">
                <p>
                    <InlineMath math="a \mid b" /> かつ <InlineMath math="b \mid c" /> ならば、 <InlineMath math="a \mid c" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より、 <InlineMath math="b = k_1 a" /> および <InlineMath math="c = k_2 b" /> を満たす整数 <InlineMath math="k_1, k_2" /> が存在する。
                    これらを組み合わせると、
                    <BlockMath math="c = k_2 (k_1 a) = (k_2 k_1) a" />
                    となる。 <InlineMath math="k_2 k_1" /> は整数であるから、定義より <InlineMath math="a \mid c" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.1-2 (整除の線形性)">
                <p>
                    <InlineMath math="a \mid b" /> かつ <InlineMath math="a \mid c" /> ならば、任意の整数 <InlineMath math="m, n" /> に対して
                    <BlockMath math="a \mid (mb + nc)" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    仮定より、 <InlineMath math="b = k_1 a, \ c = k_2 a" /> となる整数 <InlineMath math="k_1, k_2" /> が存在する。
                    これを用いて式を整理すると、
                    <BlockMath math="mb + nc = m(k_1 a) + n(k_2 a) = (mk_1 + nk_2) a" />
                    となる。 <InlineMath math="mk_1 + nk_2" /> は整数であるから、 <InlineMath math="a \mid (mb + nc)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (性質の確認)">
                <p>
                    ・ <InlineMath math="6 \mid 18" /> かつ <InlineMath math="18 \mid 54" /> なので、 <InlineMath math="6 \mid 54" /> である（推移性）。
                    <br />・ <InlineMath math="4 \mid 12" /> かつ <InlineMath math="4 \mid 20" /> なので、 <InlineMath math="4 \mid (2 \cdot 12 + 3 \cdot 20) = 4 \mid 84" /> である（線形性）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整除と大小関係</h2>

            <ContentBox type="proposition" title="Proposition 1.1-3 (反対称性と一致)">
                <p>
                    正整数 <InlineMath math="a, b" /> について、 <InlineMath math="a \mid b" /> かつ <InlineMath math="b \mid a" /> ならば、 <InlineMath math="a = b" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="b = k_1 a" /> かつ <InlineMath math="a = k_2 b" /> となる整数 <InlineMath math="k_1, k_2" /> が存在する。
                    <InlineMath math="a, b" /> は正なので <InlineMath math="k_1, k_2" /> も正、すなわち <InlineMath math="k_1, k_2 \ge 1" /> である。
                    代入すると <InlineMath math="b = k_1 (k_2 b) = (k_1 k_2) b" /> となり、 <InlineMath math="b \neq 0" /> より <InlineMath math="k_1 k_2 = 1" />。
                    正整数どうしの積が 1 になるのは <InlineMath math="k_1 = k_2 = 1" /> の場合に限られるため、 <InlineMath math="a = b" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="負の整数を含む場合">
                <p>
                    整数全体で考える場合、 <InlineMath math="a \mid b" /> かつ <InlineMath math="b \mid a" /> ならば <InlineMath math="b = \pm a" /> となる。
                    整数論ではしばしば正の整数に対象を絞る、あるいは「符号の違い」を同一視して議論を進めることがある。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>定義</strong>： 割り切れるとは「整数の積で表現できる」こと。</li>
                    <li><strong>線形性</strong>： 約数は、元の数のどんな整数倍の和（一次結合）も割り切る強力な性質。</li>
                    <li><strong>順序構造</strong>： 整除関係は、正の整数の集合上に一種の順序（半順序）を定めている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
