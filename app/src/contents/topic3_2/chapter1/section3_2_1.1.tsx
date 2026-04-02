import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ComplexDefinitionAndArithmetic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析（Complex Analysis）の世界へようこそ。
                複素数は、2乗して <InlineMath math="-1" /> になる数「虚数単位」を導入することで、実数の体系を拡張したものです。
                一見すると架空の存在に思えますが、複素数の導入により、実数だけでは見えなかった数学的な深遠さが明らかになり、電磁気学や量子力学といった物理学の根幹を支える強力な道具となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素数の定義</h2>

            <p>
                複素数は、2つの実数と1つの虚数単位を組み合わせて表現されます。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (複素数)">
                <p>
                    <InlineMath math="i^2 = -1" /> を満たす<strong>虚数単位</strong> <InlineMath math="i" /> を用い、2つの実数 <InlineMath math="a, b" /> によって
                    <BlockMath math="z = a + bi" />
                    と表される数を<strong>複素数 (complex number)</strong> と呼ぶ。複素数全体の集合を <InlineMath math="\mathbb{C}" /> で表す。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="a" /> を <InlineMath math="z" /> の<strong>実部 (real part)</strong> といい、<InlineMath math="\text{Re}(z)" /> と記す。</li>
                    <li><InlineMath math="b" /> を <InlineMath math="z" /> の<strong>虚部 (imaginary part)</strong> といい、<InlineMath math="\text{Im}(z)" /> と記す。</li>
                </ul>
            </ContentBox>

            <p>
                虚部が 0 である複素数（ <InlineMath math="z = a + 0i = a" /> ）は実数そのものであり、したがって実数体 <InlineMath math="\mathbb{R}" /> は複素数体 <InlineMath math="\mathbb{C}" /> の部分集合（拡大体）となっています。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (共役複素数)">
                <p>
                    複素数 <InlineMath math="z = a + bi" /> に対し、虚部の符号を反転させた
                    <BlockMath math="\overline{z} = a - bi" />
                    を、<InlineMath math="z" /> の<strong>共役複素数 (complex conjugate)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素数の四則演算</h2>

            <p>
                複素数の加減乗除は、基本的には多項式の計算と同様に行いますが、 <InlineMath math="i^2 = -1" /> という性質を常に意識する必要があります。
            </p>

            <ContentBox type="theorem" title="Proposition 1.1-1 (複素数の演算規則)">
                <p>
                    2つの複素数 <InlineMath math="a + bi, \, c + di" /> に対し、以下の演算が成り立つ：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4">
                    <li>
                        <strong>加減法</strong>：
                        <BlockMath math="(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i" />
                    </li>
                    <li>
                        <strong>乗法</strong>：
                        <BlockMath math="(a + bi)(c + di) = (ac - bd) + (ad + bc)i" />
                    </li>
                    <li>
                        <strong>除法</strong>（ <InlineMath math="c + di \neq 0" /> ）：
                        <BlockMath math="\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}" />
                    </li>
                </ul>
            </ContentBox>

            <p>
                除法においては、分母にその共役複素数を掛けることで、分母を実数化（有理化に似た操作）するのがポイントです。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (計算の実行)">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <strong>積</strong>：<br />
                        <BlockMath math="(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i" />
                    </li>
                    <li>
                        <strong>商</strong>：<br />
                        <BlockMath math="\begin{aligned} \frac{1 + 2i}{3 - i} &= \frac{(1 + 2i)(3 + i)}{(3 - i)(3 + i)} = \frac{3 + i + 6i + 2i^2}{9 + 1} \\ &= \frac{1 + 7i}{10} = \frac{1}{10} + \frac{7}{10}i \end{aligned}" />
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共役の代数的性質</h2>

            <p>
                共役をとる操作は、加減乗除に対して非常に素直な性質を持っています。
            </p>

            <ContentBox type="theorem" title="Proposition 1.1-2 (共役の性質)">
                <p>
                    任意の複素数 <InlineMath math="z, w" /> に対し、以下が成立する：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="\overline{z + w} = \overline{z} + \overline{w}" /></li>
                    <li><InlineMath math="\overline{zw} = \overline{z}\,\overline{w}" /></li>
                    <li><InlineMath math="z + \overline{z} = 2\,\text{Re}(z)" /></li>
                    <li><InlineMath math="z\overline{z} = (\text{Re}(z))^2 + (\text{Im}(z))^2" /> （これは常に 0 以上の実数）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (2) のみ示す。<InlineMath math="z = a + bi, \, w = c + di" /> とすると、
                    <BlockMath math="\overline{zw} = \overline{(ac - bd) + (ad + bc)i} = (ac - bd) - (ad + bc)i" />
                    一方、
                    <BlockMath math="\begin{aligned} \overline{z}\,\overline{w} &= (a - bi)(c - di) \\ &= ac - adi - bci + (bi)(di) \\ &= (ac - bd) - (ad + bc)i \end{aligned}" />
                    よって両辺は一致する。(1)(3)(4) についても同様に成分を書き下すことで容易に確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>複素数</strong>：<InlineMath math="z = a + bi" />。実部 <InlineMath math="a" /> と虚部 <InlineMath math="b" /> からなる。</li>
                    <li><strong>虚数単位</strong>：<InlineMath math="i^2 = -1" />。</li>
                    <li><strong>共役複素数</strong>：虚部の符号を入れ替えた <InlineMath math="\overline{z}" />。実数との強い結びつきを持つ。</li>
                    <li><strong>基本的な性質</strong>：四則演算が実数と同様に定義され、共役操作はそれらと可換である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
