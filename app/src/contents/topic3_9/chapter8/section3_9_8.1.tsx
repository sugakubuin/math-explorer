import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultivariablePolynomialRings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは主に 1 つの変数 <InlineMath math="x" /> を持つ多項式環 <InlineMath math="R[x]" /> について考えてきました。本章では、これを複数の変数を持つ多項式へと拡張し、多項式の因数分解（既約性）に関する重要な理論を展開します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数多項式環の構成</h2>

            <p className="leading-relaxed">
                複数の変数 <InlineMath math="x_1, x_2, \dots, x_n" /> を持つ多項式環は、1変数の多項式環を作る操作を帰納的に繰り返すことで厳密に定義されます。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (多変数多項式環)">
                <p>
                    可換環 <InlineMath math="R" /> に対して、<InlineMath math="n" /> 変数多項式環 <InlineMath math="R[x_1, \dots, x_n]" /> を以下のように帰納的に定義する。
                </p>
                <BlockMath math="R[x_1, \dots, x_n] = (R[x_1, \dots, x_{n-1}])[x_n]" />
                <p>
                    すなわち、<InlineMath math="n-1" /> 変数多項式環を係数環として、新たな変数 <InlineMath math="x_n" /> を添加した多項式環である。<br />
                    具体的には、各元は単項式 <InlineMath math="x_1^{e_1} x_2^{e_2} \cdots x_n^{e_n}" />（<InlineMath math="e_i \geq 0" /> は整数）の有限個の線形結合として表される。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 8.1-1 (<InlineMath math="\mathbb{Z}[x, y]" /> の元と計算)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> 上の 2 変数多項式環 <InlineMath math="\mathbb{Z}[x, y]" /> は、<InlineMath math="(\mathbb{Z}[x])[y]" /> とみなすことができる。<br />
                    例えば多項式 <InlineMath math="2x^2y - 3xy + 5" /> は <InlineMath math="\mathbb{Z}[x, y]" /> の元である。これを <InlineMath math="y" /> について整理すると、
                </p>
                <BlockMath math="(2x^2 - 3x)y + 5" />
                <p>
                    となり、確かに「<InlineMath math="\mathbb{Z}[x]" /> の元（多項式）を係数に持つ、変数 <InlineMath math="y" /> の多項式」となっていることがわかる。
                </p>
                <p>
                    乗法も通常の分配法則に従い計算される。
                </p>
                <BlockMath math="(x+y)(x-y) = x^2 - xy + yx - y^2 = x^2 - y^2" />
            </ContentBox>

            <p className="leading-relaxed">
                「整域上の1変数多項式環は整域である」という事実を用いると、多変数多項式環の整域性も直ちに従います。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 8.1-1 (<InlineMath math="R" /> が整域ならば多変数多項式環も整域)</span>}>
                <p>
                    <InlineMath math="R" /> が整域であるならば、任意の自然数 <InlineMath math="n" /> に対して <InlineMath math="R[x_1, \dots, x_n]" /> も整域である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    変数の数 <InlineMath math="n" /> に関する数学的帰納法で示す。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b><InlineMath math="n=1" /> のとき：</b> Proposition 4.3-1 において、<InlineMath math="R" /> が整域ならば <InlineMath math="R[x]" /> も整域であることが既に示されている（最高次係数の積が <InlineMath math="0" /> にならないため）。
                    </li>
                    <li>
                        <b><InlineMath math="n=k" /> で成立すると仮定：</b> すなわち <InlineMath math="R[x_1, \dots, x_k]" /> が整域であると仮定する。<br />
                        <InlineMath math="n=k+1" /> のとき、定義より
                        <BlockMath math="R[x_1, \dots, x_{k+1}] = (R[x_1, \dots, x_k])[x_{k+1}]" />
                        である。帰納法の仮定により <InlineMath math="S = R[x_1, \dots, x_k]" /> は整域である。したがって、整域 <InlineMath math="S" /> 上の1変数多項式環 <InlineMath math="S[x_{k+1}]" /> もまた整域となる。
                    </li>
                </ul>
                <p className="mt-2">
                    よって、すべての <InlineMath math="n" /> について成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数の既約性</h2>

            <p className="leading-relaxed">
                多変数多項式の因数分解を考える際、その係数環が何であるかが既約性に大きく影響を与えます。
            </p>

            <ContentBox type="example" title={<span>Example 8.1-2 (<InlineMath math="x^2 + y^2 - 1" /> の既約性)</span>}>
                <p>
                    多項式 <InlineMath math="f(x, y) = x^2 + y^2 - 1" /> を考える。
                </p>
                <p>
                    これを複素数係数の多項式環 <InlineMath math="\mathbb{C}[x, y]" /> の元とみなすと、
                </p>
                <BlockMath math="x^2 + y^2 - 1 = x^2 + (y+1)(y-1) \dots" />
                <p>
                    とは分解できず、実は <InlineMath math="\mathbb{C}[x, y]" /> においても既約である。<br />
                    （※ 誤解されがちだが
                    <BlockMath math="\begin{aligned} &(x+iy-1)(x-iy-1) \\ &= x^2 - ixy - x + ixy + y^2 + iy - x + iy + 1 \\ &\neq x^2+y^2-1 \end{aligned}" />
                    である。<InlineMath math="x^2+y^2 = (x+iy)(x-iy)" /> には分解できるが、定数項 <InlineMath math="-1" /> を含めた分解は一般にはできない）
                </p>
                <p>
                    因数分解できる例として、<InlineMath math="x^2 + 2xy + y^2 - 1" /> を考えると、これは実数係数 <InlineMath math="\mathbb{R}[x, y]" /> において
                </p>
                <BlockMath math="\begin{aligned} x^2 + 2xy + y^2 - 1 &= (x+y)^2 - 1^2 \\ &= (x+y+1)(x+y-1) \end{aligned}" />
                <p>
                    のように分解できる。多変数の既約性の判定は、1変数の場合よりも複雑な考察が必要になることがある。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (多変数多項式環は PID でない)">
                <p>
                    第6章で <InlineMath math="\mathbb{Z}[x]" /> が PID ではない（イデアル <InlineMath math="(2, x)" /> が主イデアルでないため）ことを見ました。<br />
                    同様の理由で、体 <InlineMath math="F" /> 上の多変数多項式環 <InlineMath math="F[x, y]" /> も <b>PID ではありません</b>。<InlineMath math="x" /> と <InlineMath math="y" /> で生成されるイデアル <InlineMath math="(x, y)" />（定数項を持たない多項式全体）は、単一の多項式では生成できないからです。
                </p>
                <p>
                    しかし、PID ではなくとも UFD になるという素晴らしい性質を持っています。これについては §8.3 で詳しく証明します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数多項式環は、1変数の多項式環を係数環として変数追加を繰り返すことで構成される。</li>
                    <li>基礎となる環 <InlineMath math="R" /> が整域であれば、多変数多項式環も整域となる。</li>
                    <li>多変数の多項式環はイデアルの構造が複雑になり、一般に PID にはならないが、環としての良い性質（UFD）は引き継がれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
