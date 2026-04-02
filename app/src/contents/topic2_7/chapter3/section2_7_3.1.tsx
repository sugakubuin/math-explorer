import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimeDefinitionAndBasicProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数論において、素数は「整数の原子」に例えられます。
                すべての 2 以上の整数は、素数の掛け合わせによって一意に作り出せるからです。
                本章では、この魅力的な数の性質を深く掘り下げていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数と合成数の定義</h2>

            <p>
                「これ以上細かく因数分解できない数」としての素数を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (素数)">
                <p>
                    2 以上の整数 <InlineMath math="p" /> のうち、正の約数が 1 と <InlineMath math="p" /> 自身のみであるものを<strong>素数 (prime number)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.1-2 (合成数)">
                <p>
                    2 以上の整数のうち、素数でないものを<strong>合成数 (composite number)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="1 の扱い">
                <p>
                    整数 1 は、定義により素数でも合成数でもありません。
                    1 を素数に含めない理由は、後に学ぶ「素因数分解の一意性」を簡潔に記述するためです（もし 1 が素数だと、 <InlineMath math="6 = 2 \times 3 = 1 \times 2 \times 3 = 1^2 \times 2 \times 3 \cdots" /> となり、分解の方法が無限に増えてしまいます）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (素数と合成数の例)">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>素数</strong>： <InlineMath math="2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, \dots" /></li>
                    <li><strong>合成数</strong>： <InlineMath math="4 = 2^2, \ 6 = 2 \times 3, \ 15 = 3 \times 5, \ 51 = 3 \times 17" /></li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数に関する基本性質</h2>

            <p>
                素数が持つ最も重要で基礎的な性質を 2 つ紹介します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 (最小の約数)">
                <p>
                    2 以上の整数 <InlineMath math="n" /> において、1 を除く最小の正の約数は必ず素数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1 を除く最小の正の約数を <InlineMath math="d" /> とする。
                    もし <InlineMath math="d" /> が合成数ならば、ある整数 <InlineMath math="k" /> （ <InlineMath math="1 < k < d" /> ）が存在して <InlineMath math="k \mid d" /> となる。
                    このとき約数の推移性より <InlineMath math="k \mid n" /> でもあるが、これは <InlineMath math="d" /> が「1 を除く最小の約数」であることに矛盾する。
                    したがって <InlineMath math="d" /> は素数でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                次の定理は、素数の「割り切り」の振る舞いを示す決定的な性質です。
                前章で学んだユークリッドの補題がここで強力な援軍となります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (素数の積への割り切り性)">
                <p>
                    素数 <InlineMath math="p" /> が積 <InlineMath math="ab" /> を割り切るならば、 <InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> が成り立つ。
                    <BlockMath math="p \mid ab \Rightarrow (p \mid a \lor p \mid b)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p \nmid a" /> と仮定する。このとき <InlineMath math="p" /> の約数は 1 と <InlineMath math="p" /> のみであり、 <InlineMath math="p" /> は <InlineMath math="a" /> を割り切らないので、 <InlineMath math="\gcd(p, a) = 1" /> である。
                    ここでユークリッドの補題（Proposition 2.4-1）を適用すると、 <InlineMath math="p \mid ab" /> かつ <InlineMath math="\gcd(p, a) = 1" /> より、 <InlineMath math="p \mid b" /> が導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="素数と既約元">
                <p>
                    一般の環の理論では、ここで示した性質を満たす元を「素元 (prime element)」、 Definition 3.1-1 の定義を満たす元を「既約元 (irreducible element)」と呼び分けます。
                    整数環 <InlineMath math="\mathbb{Z}" /> においては、ベズーの等式が成り立つおかげで、この 2 つの概念が完全に一致しています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>素数の定義</strong>： 1 と自分自身以外に約数を持たない 2 以上の整数。</li>
                    <li><strong>整数の構成</strong>： すべての合成数は、少なくとも一つの素因数を持つ。</li>
                    <li><strong>割り切りの論理</strong>： 素数が積を割り切るなら、必ずその因数の少なくとも一方を割り切る。この性質が次節の「一意性」の証明の鍵となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
