import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InverseExistenceCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                合同式の計算において「割り算」を実現するためには、その数の<strong>逆元 (inverse)</strong> が存在するかどうかが極めて重要になります。
                ベズーの等式の知識を使い、逆元がいつ存在するのか、そしてそれが環の構造にどのような影響を与えるのかを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆元の定義と存在条件</h2>

            <p>
                モジュロ演算における逆元とは、掛けると「1」になるような数のことです。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (乗法逆元)">
                <p>
                    <InlineMath math="\overline{a} \in \mathbb{Z}/m\mathbb{Z}" /> に対して、
                    <BlockMath math="\overline{a} \cdot \overline{x} = \overline{1}" />
                    を満たす <InlineMath math="\overline{x} \in \mathbb{Z}/m\mathbb{Z}" /> が存在するとき、 <InlineMath math="\overline{x}" /> を <InlineMath math="\overline{a}" /> の<strong>乗法逆元 (multiplicative inverse)</strong> と呼び、 <InlineMath math="\overline{a}^{-1}" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.3-1 (逆元の存在条件)">
                <p>
                    <InlineMath math="a" /> の mod <InlineMath math="m" /> における逆元が存在するための必要十分条件は、
                    <BlockMath math="\gcd(a, m) = 1" />
                    である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\overline{a}\overline{x} = \overline{1}" /> は、ある整数 <InlineMath math="x, y" /> を用いて
                    <BlockMath math="ax + my = 1" />
                    と書けることと同値である。
                    第 2 章（Theorem 2.1-1 および Theorem 2.4-1）で見た通り、このような整数 <InlineMath math="x, y" /> が存在することと <InlineMath math="\gcd(a, m) = 1" /> は同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 (逆元の有無)">
                <p>
                    <InlineMath math="\mathbb{Z}/10\mathbb{Z}" /> において：
                    <br />・ <InlineMath math="\overline{3}" /> は、 <InlineMath math="\gcd(3, 10) = 1" /> なので逆元を持つ。実際、 <InlineMath math="3 \times 7 = 21 \equiv 1 \pmod{10}" /> より <InlineMath math="\overline{3}^{-1} = \overline{7}" />。
                    <br />・ <InlineMath math="\overline{2}" /> は、 <InlineMath math="\gcd(2, 10) = 2 \neq 1" /> なので逆元を持たない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体 Fp</h2>

            <p>
                法が素数のとき、剰余環の性質は劇的に向上します。
            </p>

            <ContentBox type="remark" title="体 (Field) とは">
                <p>
                    法 <InlineMath math="p" /> が素数ならば、 0 以外のすべての剰余類について <InlineMath math="\gcd(a, p) = 1" /> が成り立ちます。
                    つまり、0 以外のすべての元が逆元を持ちます。このような代数系を<strong>体 (Field)</strong> と呼び、
                    <InlineMath math="\mathbb{Z}/p\mathbb{Z}" /> を<strong>有限体 (finite field)</strong> と呼び、 <InlineMath math="\mathbb{F}_p" /> と表記します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (Z/7Z の逆元一覧)">
                <p>
                    <InlineMath math="\mathbb{Z}/7\mathbb{Z}" /> は体であり、各元の逆元は以下の通り：
                    <BlockMath math="\begin{aligned} &\overline{1}^{-1} = \overline{1} \\ &\overline{2}^{-1} = \overline{4} \quad (2 \cdot 4 = 8 \equiv 1) \\ &\overline{3}^{-1} = \overline{5} \quad (3 \cdot 5 = 15 \equiv 1) \\ &\overline{4}^{-1} = \overline{2}, \quad \overline{5}^{-1} = \overline{3}, \quad \overline{6}^{-1} = \overline{6} \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="計算手法">
                <p>
                    法 <InlineMath math="m" /> が大きい場合、逆元を求めるには §2.3 で学んだ<strong>拡張ユークリッド法</strong>を用いるのが最も効率的です。
                    <BlockMath math="ax + my = 1 \Rightarrow ax \equiv 1 \pmod{m}" />
                    から得られる <InlineMath math="x" /> が逆元となります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>逆元</strong>： 合同式における「割り算」の鍵となる概念。</li>
                    <li><strong>存在条件</strong>： その数と法が「互いに素」であること。</li>
                    <li><strong>素数法の優位性</strong>： 法が素数であれば、0 以外の平坦なすべての元に対して「割り算」が可能。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
