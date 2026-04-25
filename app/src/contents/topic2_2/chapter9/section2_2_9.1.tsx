import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_9_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で学んだ陰関数定理と双璧をなす、多変数解析学のもう一つの最重要定理が<strong>逆写像定理</strong>（Inverse Function Theorem）です。
                これは「ある写像 <InlineMath math="\mathbf{f}" /> が局所的に全単射となり、その逆写像 <InlineMath math="\mathbf{f}^{-1}" /> が構成できるか？」という問いに答える定理です。
            </p>
            <p>
                定理の詳細に入る前に、どのような条件下で写像が「逆向きに戻せる」のか、直感的・幾何学的な意味合いから考えてみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤコビアンと可逆性</h2>

            <p>
                1変数関数 <InlineMath math="y = f(x)" /> の場合を振り返ります。関数がある点 <InlineMath math="x=a" /> の近傍で逆関数を持つ（すなわち、その近傍で単射である）ためには、その点での微分係数 <InlineMath math="f'(a)" /> が <InlineMath math="0" /> でないこと、つまり <InlineMath math="f'(a) \neq 0" /> が十分条件でした。
                もし <InlineMath math="f'(a) = 0" /> となると、その点では関数のグラフが水平になり、その周辺で <InlineMath math="y" /> の値が「かぶる」（同じ <InlineMath math="y" /> に対して複数の <InlineMath math="x" /> が対応してしまう）可能性が高くなります。例えば、<InlineMath math="y = x^2" /> は <InlineMath math="x=0" /> で <InlineMath math="f'(0) = 0" /> となり、<InlineMath math="x=0" /> のいかなる開近傍においても単射にはなりません。
            </p>
            <p>
                これを多変数の写像 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> （<InlineMath math="\mathbb{R}^n \to \mathbb{R}^n" />）に拡張するとどうなるでしょうか。<InlineMath math="1" /> 変数の <InlineMath math="f'(a)" /> に相当するものは、多変数ではヤコビ行列 <InlineMath math="J_{\mathbf{f}}(\mathbf{a})" /> であり、その「<InlineMath math="0" />でない」という条件は「行列式が <InlineMath math="0" /> でない」、すなわちヤコビアンが非零であることに対応します。
            </p>

            <ContentBox type="remark" title="ヤコビアンが非零であることの幾何学的意味">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> から <InlineMath math="\mathbb{R}^n" /> への <InlineMath math="C^1" /> 級写像 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> を考えます。
                    点 <InlineMath math="\mathbf{a}" /> のごく近くでの写像の振る舞いは、ヤコビ行列 <InlineMath math="A = J_{\mathbf{f}}(\mathbf{a})" /> を用いたアフィン写像（線形近似）によって次のように表現されます：
                </p>
                <BlockMath math="\mathbf{f}(\mathbf{x}) \approx \mathbf{f}(\mathbf{a}) + A(\mathbf{x} - \mathbf{a})" />
                <p className="mt-2">
                    線形代数学において、ある行列 <InlineMath math="A" /> によって空間がどのように変換されるかを考えるとき、その行列式 <InlineMath math="\det A" /> は「体積（面積）の拡大率」を意味します。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                        <strong><InlineMath math="\det A \neq 0" /> のとき：</strong> 行列 <InlineMath math="A" /> は正則であり、空間の体積は縮んで <InlineMath math="0" /> になることはありません（向きは反転するかもしれません）。
                        このとき線形変換 <InlineMath math="A" /> は全単射となり、逆行列 <InlineMath math="A^{-1}" /> が存在します。
                    </li>
                    <li>
                        <strong><InlineMath math="\det A = 0" /> のとき：</strong> 行列 <InlineMath math="A" /> は特異（ランク落ち）であり、元の <InlineMath math="n" /> 次元空間はそれより低い次元の空間（平面や直線など）に「ペシャンコに潰されて」しまいます。
                        潰された結果、複数の異なる点が同じ点に写されてしまうため、逆に戻すこと（逆写像）は不可能です。
                    </li>
                </ul>
                <p className="mt-2">
                    写像 <InlineMath math="\mathbf{f}" /> のヤコビアン <InlineMath math="\det J_{\mathbf{f}}(\mathbf{a})" /> は、まさに点 <InlineMath math="\mathbf{a}" /> の局所的な体積拡大率です。
                    したがって、<strong>「ヤコビアンが非零であること」は、「その点の周りで空間がペシャンコに潰されないこと」、すなわち「局所的に1対1の対応が保たれること」を定量的に保証する条件</strong>だと言えます。
                </p>
            </ContentBox>

            <p>
                この直感的な理解を深めるために、具体的な2変数の写像についてヤコビアンを計算し、可逆性との関係を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 9.1-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> から <InlineMath math="\mathbb{R}^2" /> への写像 <InlineMath math="\mathbf{f}(x, y) = (x^2 - y^2, 2xy)" /> を考えます。この写像のヤコビ行列 <InlineMath math="J_{\mathbf{f}}(x, y)" /> は次のようになります。
                </p>
                <BlockMath math="J_{\mathbf{f}}(x, y) = \begin{pmatrix} 2x & -2y \\ 2y & 2x \end{pmatrix}" />
                <p className="mt-2">
                    ヤコビアン（行列式）を計算すると、
                </p>
                <BlockMath math="\det J_{\mathbf{f}}(x, y) = (2x)(2x) - (-2y)(2y) = 4(x^2 + y^2)" />
                <p className="mt-2">
                    となります。したがって、原点 <InlineMath math="(0, 0)" /> を除くすべての点で <InlineMath math="\det J_{\mathbf{f}}(x, y) \neq 0" /> となります。
                    これは、原点以外の点の周りでは、局所的に写像が潰れず、逆写像が存在し得ることを示唆しています。
                    一方、原点 <InlineMath math="(0, 0)" /> ではヤコビアンが <InlineMath math="0" /> となり、局所的な可逆性が保証されません。
                </p>
                <p className="mt-2">
                    複素数を用いると、この写像は <InlineMath math="z = x + iy" /> に対して <InlineMath math="f(z) = z^2" /> と表せます。原点では <InlineMath math="z^2" /> は <InlineMath math="2" /> 対 <InlineMath math="1" /> の対応となり、確かに単射ではありません。
                </p>
            </ContentBox>

            <p>
                次節では、この線形近似での直感的な事実（正則行列の可逆性）が、もとの非線形な関数 <InlineMath math="\mathbf{f}" /> のレベルでも局所的には正しく成り立つことを示す「逆写像定理」を定式化し、証明します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>1変数関数において微分係数が <InlineMath math="0" /> でないことが局所的な逆関数の存在を保証するように、多変数ベクトル値関数では要素が潰されないことが重要になる。</li>
                    <li>ヤコビ行列式（ヤコビアン）は局所的な体積（面積）の拡大率を表す。</li>
                    <li>ヤコビアンが <InlineMath math="0" /> でない点では、空間が局所的に潰れないため、1対1の対応（逆写像の存在）が期待できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
