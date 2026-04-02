import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WilsonsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                フェルマーの小定理が「べき乗」に関する素数の性質であるのに対し、<strong>ウィルソンの定理 (Wilson's Theorem)</strong> は「階乗」に関する驚くべき性質を語ります。
                この定理は、ある整数が素数であることの論理的な必要十分条件を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の主張</h2>

            <p>
                ある正の整数の直前までのすべての整数の積（階乗）を法で考えると、素数の場合には必ず特定の形になります。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (ウィルソンの定理)">
                <p>
                    整数 <InlineMath math="p > 1" /> が素数であるための必要十分条件は、
                    <BlockMath math="(p-1)! \equiv -1 \pmod{p}" />
                    が成り立つことである。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (具体例による確認)">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <InlineMath math="p = 5" /> のとき：
                        <InlineMath math="(5-1)! = 4! = 24 = 5 \times 5 - 1 \equiv -1 \pmod{5}" /> 。
                    </li>
                    <li>
                        <InlineMath math="p = 7" /> のとき：
                        <InlineMath math="(7-1)! = 6! = 720" /> 。 <InlineMath math="720 / 7 = 102 \dots 6 \equiv -1 \pmod{7}" /> 。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定理の証明（素数性からの導出）</h2>

            <p>
                証明の鍵は、剰余環 <InlineMath math="\mathbb{Z}/p\mathbb{Z}" /> における「逆元」の組み合わせにあります。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p" /> が素数のとき、 <InlineMath math="1, 2, \dots, p-1" /> の各元は mod <InlineMath math="p" /> で一意な逆元を持つ（Theorem 4.3-1）。
                    ここで、自分自身が逆元になる（ <InlineMath math="x^2 \equiv 1" /> ）のは、 <InlineMath math="x^2 - 1 = (x-1)(x+1) \equiv 0" /> より、
                    <InlineMath math="x \equiv 1" /> または <InlineMath math="x \equiv -1 \equiv p-1" /> のときに限られる。
                </p>
                <p>
                    それ以外の元（集合 <InlineMath math="\{2, 3, \dots, p-2\}" /> ）は、自分とは異なる別の元とペアを組んで積が 1 になる。
                    したがって、 <InlineMath math="(p-1)!" /> の積を計算すると：
                    <BlockMath math="\begin{aligned} (p-1)! &= 1 \cdot \underbrace{(2 \cdot 3 \cdots p-2)}_{\text{ペアの積はすべて 1}} \cdot (p-1) \\ &\equiv 1 \cdot 1 \cdot (p-1) \\ &\equiv -1 \pmod{p} \end{aligned}" />
                    が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数判定としての意義と限界</h2>

            <ContentBox type="remark" title="計算上の困難さ">
                <p>
                    ウィルソンの定理は「素数であること」を完全に特徴付けていますが、実用的な素数判定法として利用されることはほとんどありません。
                    理由は単純で、 <InlineMath math="p" /> が大きくなると <InlineMath math="(p-1)!" /> の計算および剰余の取得が、フェルマーの小定理に基づく判定法に比べて圧倒的に重くなるためです。
                    しかし、理論面（理論的な素数性の判定式など）では非常に重要な地位を占めています。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>主張</strong>： <InlineMath math="p" /> が素数 <InlineMath math="\Leftrightarrow (p-1)! \equiv -1 \pmod{p}" />。</li>
                    <li><strong>原理</strong>： 1 と -1 以外の剰余類が、積が 1 になるペアに分かれる性質を利用。</li>
                    <li><strong>価値</strong>： 素数であることを数式一つで定義できる理論美。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
