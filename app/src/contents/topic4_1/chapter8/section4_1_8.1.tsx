import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AdjointOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章から、ヒルベルト空間上の線形作用素に焦点を当てます。ヒルベルト空間には内積構造があるため、ある作用素に対して「内積の反対側にかかる」ように振る舞う相棒の作用素を常に考えることができます。これが随伴作用素（adjoint operator）です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">随伴作用素の定義と存在</h2>

            <p>
                「内積の左側にかかる作用素を、右側に移したらどうなるか」という疑問が、随伴作用素の出発点となります。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (随伴作用素)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間とし、<InlineMath math="T \in B(H)" /> （有界線形作用素）とする。<br />
                    すべての <InlineMath math="x, y \in H" /> に対して
                </p>
                <BlockMath math="\langle Tx, y \rangle = \langle x, T^* y \rangle" />
                <p>
                    を満たす作用素 <InlineMath math="T^*" /> が存在するとき、これを <InlineMath math="T" /> の<b>随伴作用素（adjoint operator）</b>という。
                </p>
            </ContentBox>

            <p>
                ヒルベルト空間の強力な性質である「リースの表現定理」を用いることで、このような作用素が常に一意に存在し、さらにそれ自体も有界線形作用素になることが保証されます。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1 (随伴作用素の存在と一意性)">
                <p>
                    任意の有界線形作用素 <InlineMath math="T \in B(H)" /> に対して、その随伴作用素 <InlineMath math="T^*" /> は一意に存在し、<InlineMath math="T^* \in B(H)" /> である。さらにノルムは等しくなる。
                </p>
                <BlockMath math="\|T^*\| = \|T\|" />
            </ContentBox>

            <p>
                この保証を与えるのが、前章で学んだリースの表現定理です。内積の線形性を利用して、関数解析的に存在を構成します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の固定した <InlineMath math="y \in H" /> を考える。写像 <InlineMath math="f_y : H \to \mathbb{K}" /> を
                </p>
                <BlockMath math="f_y(x) = \langle Tx, y \rangle" />
                <p>
                    で定義すると、これは内積の第一引数についての線形性と <InlineMath math="T" /> の線形性から、<InlineMath math="x" /> についての線形汎関数となる。<br />
                    コーシー-シュワルツの不等式により
                </p>
                <BlockMath math="|f_y(x)| = |\langle Tx, y \rangle| \leq \|Tx\|\|y\| \leq \|T\|\|y\|\|x\|" />
                <p>
                    となるため、<InlineMath math="f_y" /> は有界（連続）線形汎関数である。<br />
                    したがって、前章で学んだリースの表現定理（Theorem 7.5-1）より、ある一意のベクトル <InlineMath math="z \in H" /> が存在して
                </p>
                <BlockMath math="f_y(x) = \langle x, z \rangle" />
                <p>
                    と書ける。この <InlineMath math="y" /> に <InlineMath math="z" /> を対応させる規則を <InlineMath math="T^*" /> と書き、<InlineMath math="z = T^* y" /> と定義する。これにより <InlineMath math="\langle Tx, y \rangle = \langle x, T^* y \rangle" /> が成り立つ。<br />
                    <InlineMath math="T^*" /> の線形性は、内積の性質（第二引数についての反線形性）から容易に確認できる。<br />
                    最後にノルムを評価する。
                </p>
                <BlockMath math="\begin{aligned}
                    \|T^* y\|^2 &= \langle T^* y, T^* y \rangle \\ 
                    &= \langle T(T^* y), y \rangle \\ 
                    &\leq \|T(T^* y)\|\|y\| \\ 
                    &\leq \|T\|\|T^* y\|\|y\|
                \end{aligned}" />
                <p>
                    両辺を <InlineMath math="\|T^* y\|" /> で割ることで <InlineMath math="\|T^* y\| \leq \|T\|\|y\|" /> となる。よって <InlineMath math="T^*" /> は有界であり <InlineMath math="\|T^*\| \leq \|T\|" />。また、逆の関係も <InlineMath math="T^{**} = T" />（後述の命題より）から得られるため、<InlineMath math="\|T^*\| = \|T\|" /> となる。一意性は内積の非退化性から直ちに従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                抽象的な作用素の具体例として、数列空間におけるシフト作用素の随伴を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 8.1-1">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> における左シフト作用素 <InlineMath math="L(x_1, x_2, x_3, \dots) = (x_2, x_3, x_4, \dots)" /> の随伴作用素を求める。<br />
                    任意の <InlineMath math="x, y \in \ell^2" /> について内積を計算すると、
                </p>
                <BlockMath math="\langle Lx, y \rangle = x_2 \overline{y_1} + x_3 \overline{y_2} + x_4 \overline{y_3} + \dots" />
                <p>
                    これは次のように書き換えることができる。
                </p>
                <BlockMath math="\langle Lx, y \rangle = x_1 \overline{0} + x_2 \overline{y_1} + x_3 \overline{y_2} + \dots = \langle x, R y \rangle" />
                <p>
                    ここで <InlineMath math="Ry = (0, y_1, y_2, \dots)" /> は右シフト作用素である。<br />
                    したがって、左シフト作用素の随伴作用素は右シフト作用素（<InlineMath math="L^* = R" />）であることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">随伴の基本性質</h2>

            <p>
                随伴をとる操作（<InlineMath math="*" />）は、行列におけるエルミート共役（転置と複素共役）の一般化です。
            </p>

            <ContentBox type="theorem" title="Proposition 8.1-1">
                <p>
                    有界線形作用素 <InlineMath math="S, T \in B(H)" /> とスカラー <InlineMath math="\alpha \in \mathbb{K}" /> に対して、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="(S+T)^* = S^* + T^*" /></li>
                    <li><InlineMath math="(\alpha T)^* = \bar{\alpha}T^*" /></li>
                    <li><InlineMath math="(ST)^* = T^* S^*" /></li>
                    <li><InlineMath math="T^{**} = (T^*)^* = T" /></li>
                </ol>
            </ContentBox>

            <p>
                これらの性質は、内積の公理（線形性と共役対称性）から直接的に証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義に従い、すべての <InlineMath math="x, y" /> に対して内積を比較する。
                </p>
                <p>
                    1.
                    <BlockMath math="\begin{aligned}
                        \langle (S+T)x, y \rangle &= \langle Sx, y \rangle + \langle Tx, y \rangle \\
                        &= \langle x, S^*y \rangle + \langle x, T^*y \rangle \\
                        &= \langle x, (S^*+T^*)y \rangle
                    \end{aligned}" />
                </p>
                <p>
                    2.
                    <BlockMath math="\langle (\alpha T)x, y \rangle = \alpha \langle Tx, y \rangle = \alpha \langle x, T^* y \rangle = \langle x, \bar{\alpha} T^* y \rangle" />（内積の第二引数は共役で括り出されるため）
                </p>
                <p>
                    3.
                    <BlockMath math="\begin{aligned}
                        \langle (ST)x, y \rangle &= \langle S(Tx), y \rangle = \langle Tx, S^* y \rangle \\
                        &= \langle x, T^*(S^* y) \rangle = \langle x, (T^*S^*)y \rangle
                    \end{aligned}" />
                </p>
                <p>
                    4.
                    <BlockMath math="\langle T^*x, y \rangle = \overline{\langle y, T^*x \rangle} = \overline{\langle Ty, x \rangle} = \langle x, Ty \rangle" /> より、<InlineMath math="T^*" /> の随伴は <InlineMath math="T" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                連続な関数空間における積分作用素の随伴がどのような形になるかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 8.1-2">
                <p>
                    区間 <InlineMath math="[a,b]" /> 上の関数に対する積分作用素を考える。<br />
                    二変数連続関数 <InlineMath math="K(x, t)" /> （核とよばれる）をもちいて、作用素 <InlineMath math="T" /> を <InlineMath math="Tf(x) = \int_a^b K(x, t)f(t)\,dt" /> とおく。
                </p>
                <p>
                    内積 <InlineMath math="\langle Tf, g \rangle" /> はフビニの定理を用いて積分順序を交換すると、
                </p>
                <BlockMath math="\begin{aligned} \langle Tf, g \rangle &= \int_a^b \left( \int_a^b K(x,t)f(t)\,dt \right) \overline{g(x)} \,dx \\ &= \int_a^b f(t) \overline{\left( \int_a^b \overline{K(x,t)} g(x) \,dx \right)} \,dt \end{aligned}" />
                <p>
                    ここで変数名 <InlineMath math="x" /> と <InlineMath math="t" /> を入れ替えると、
                </p>
                <BlockMath math="\langle Tf, g \rangle = \int_a^b f(x) \overline{\left( \int_a^b \overline{K(t,x)} g(t) \,dt \right)} \,dx = \langle f, T^* g \rangle" />
                <p>
                    これより積分作用素 <InlineMath math="T^*" /> は、もとの核の変数を入れ替えて複素共役をとった <InlineMath math="\tilde{K}(x, t) = \overline{K(t, x)}" /> を核とする積分作用素になることがわかる。
                </p>
            </ContentBox>

            <p>
                ここまで随伴作用素の性質を見てきましたが、これは私たちがよく知っている「行列の転置」の自然な拡張になっています。
            </p>

            <ContentBox type="remark" title="有限次元における行列表現との対応">
                <p>
                    内積空間が有限次元（例えば <InlineMath math="\mathbb{C}^n" />）であるとき、任意の線形作用素はある行列 <InlineMath math="A" /> によって表現されます。このとき、内積の定義式を計算すると <InlineMath math="\langle Ax, y \rangle = (Ax)^T \bar{y} = x^T A^T \bar{y} = x^T \overline{(\bar{A}^T y)} = \langle x, A^* y \rangle" /> となります。<br />
                    すなわち、作用素の随伴をとることは、行列表現における複素共役転置（エルミート共役行列 <InlineMath math="A^* = \bar{A}^T" />）に対応しています。本節で示した代数的性質は、まさに行列の転置と共役の性質をそのまま踏襲したものです。
                </p>
            </ContentBox>

            <p>
                随伴作用素は、以降のヒルベルト空間における作用素論のすべての基礎となります。本節をまとめます。
            </p>

            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヒルベルト空間における有界線形作用素 <InlineMath math="T" /> には、必ず内積を遷移する随伴作用素 <InlineMath math="T^*" /> が一意に存在する。</li>
                    <li>随伴作用素は有界であり、そのノルムはもとの作用素のノルムと等しい（<InlineMath math="\|T^*\| = \|T\|" />）。</li>
                    <li>代数的には、随伴操作は有限次元ベクトル空間における行列のエルミート共役（複素共役転置）の性質を完全に引き継ぐ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
