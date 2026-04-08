import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropertiesOfCompactOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入したコンパクト作用素は、通常の有界線形作用素に比べて非常に強い制約を持っています。本節では、コンパクト作用素の四則演算や極限をとる操作に対してコンパクト性がどのように保存されるのかを見ます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト性の保存</h2>

            <p>
                コンパクト作用素は、有界作用素と合成してもコンパクトなままです。これは代数学における「イデアル（部分環が吸収する性質）」に似ています。
            </p>

            <ContentBox type="theorem" title="Proposition 9.2-1">
                <p>
                    <InlineMath math="K" /> をコンパクト作用素、<InlineMath math="A" /> を通常の有界線形作用素とする。<br />
                    このとき、これらの合成 <InlineMath math="AK" /> および <InlineMath math="KA" /> はいずれもコンパクト作用素である。
                </p>
            </ContentBox>

            <p>
                コンパクト作用素が「収束部分列を生成する」という性質を利用することで、他の作用素と合成してもその性質が失われないことが示されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="AK" /> のコンパクト性：<br />
                    有界列 <InlineMath math="\{x_n\}" /> をとる。<InlineMath math="K" /> がコンパクトであるため、像列 <InlineMath math="\{Kx_n\}" /> は収束する部分列 <InlineMath math="\{Kx_{n_k}\}" /> を持つ。<br />
                    <InlineMath math="A" /> は連続であるから、収束列を収束列に写す。したがって部分列の像 <InlineMath math="A(Kx_{n_k})" /> は収束する。よって <InlineMath math="AK" /> はコンパクト作用素である。
                </p>
                <p>
                    (2) <InlineMath math="KA" /> のコンパクト性：<br />
                    有界列 <InlineMath math="\{x_n\}" /> をとる。<InlineMath math="A" /> は有界作用素なので、<InlineMath math="\{Ax_n\}" /> もまた有界列になる。<br />
                    <InlineMath math="K" /> はコンパクト作用素なので、有界列 <InlineMath math="\{Ax_n\}" /> の像列 <InlineMath math="K(Ax_n)" /> は収束する部分列を持つ。よって <InlineMath math="KA" /> はコンパクト作用素である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                さらに、有界作用素に対する随伴作用素（前章）の性質から、コンパクト性は随伴をとる操作に対しても保存されることがわかっています。
            </p>

            <ContentBox type="theorem" title="Proposition 9.2-2 (シャウダーの定理)">
                <p>
                    バナッハ空間上で、有界線形作用素 <InlineMath math="K" /> がコンパクト作用素であることと、その随伴作用素 <InlineMath math="K^*" /> がコンパクト作用素であることは同値である。
                </p>
            </ContentBox>

            <p>
                この美しい定理は、弱収束と強収束の関係性（コンパクト作用素は弱収束を強収束に変換する）を用いることでスマートに証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ヒルベルト空間上の場合で証明の概略を示す。<br />
                    <InlineMath math="K" /> がコンパクト作用素であるとする。有界列 <InlineMath math="\{y_n\}" /> の像 <InlineMath math="\{K^* y_n\}" /> が収束する部分列を持つことを示せばよい。<br />
                    ヒルベルト空間では有界列は弱収束する部分列を持つ（バナッハ-アラオグルの定理）ため、必要なら部分列を取り直して <InlineMath math="y_n \xrightarrow{w} y" /> とできる。このとき <InlineMath math="z_n = y_n - y" /> とおくと <InlineMath math="z_n \xrightarrow{w} 0" /> であり、<InlineMath math="K^* z_n \to 0" />（強収束）を示せば十分である。<br />
                    内積を用いてノルムの2乗を評価する。
                </p>
                <BlockMath math="\begin{aligned} \|K^* z_n\|^2 &= \langle K^* z_n, K^* z_n \rangle \\ &= \langle K K^* z_n, z_n \rangle \end{aligned}" />
                <p>
                    ここで <InlineMath math="KK^*" /> も Proposition 9.2-1 よりコンパクト作用素である。弱収束列を強収束列に写す性質（コンパクト作用素は弱収束を強収束に強める性質）を利用することで、<InlineMath math="KK^* z_n \to 0" /> が言え、結果として <InlineMath math="\|K^* z_n\| \to 0" /> となる。逆も <InlineMath math="K^{**} = K" /> より直ちに従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限ランク近似</h2>

            <p>
                コンパクト作用素とは、実質的にどのようなものか。ヒルベルト空間においては、「極限をとれば有限ランク作用素になるもの」と完全に特徴づけることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> 上の有界線形作用素 <InlineMath math="K" /> がコンパクト作用素であるための必要十分条件は、有限ランク作用素の列 <InlineMath math="\{F_n\}" /> で <InlineMath math="K" /> に作用素ノルムで収束する（一様収束する）ものが存在することである。
                </p>
                <BlockMath math="\lim_{n \to \infty} \|K - F_n\| = 0" />
            </ContentBox>

            <p>
                この強力な特徴づけは、ヒルベルト空間における直交射影の性質を極限に適用することで証明可能です。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    (<InlineMath math="\Leftarrow" />) 有限ランク作用素はコンパクト作用素であり（Proposition 9.1-1）、コンパクト作用素全体の集合は作用素ノルム位相で閉集合になる（有界列を対角線論法で処理することで証明可能）ため、一様収束極限もコンパクトになる。
                </p>
                <p>
                    (<InlineMath math="\Rightarrow" />) <InlineMath math="H" /> が可分な場合を考える（一般でも成り立つ）。<InlineMath math="H" /> の正規直交基底を <InlineMath math="\{e_n\}" /> とし、部分空間 <InlineMath math="V_N = \mathrm{span}\{e_1, \dots, e_N\}" /> への直交射影を <InlineMath math="P_N" /> とする。<br />
                    作用素を <InlineMath math="F_N = P_N K" /> で定義する。<InlineMath math="P_N" /> の像空間が有限次元なので <InlineMath math="F_N" /> は有限ランク作用素である。<br />
                    もし <InlineMath math="\|K - P_N K\|" /> が <InlineMath math="0" /> に収束しないと仮定すると、ある定数 <InlineMath math="\varepsilon > 0" /> と点列 <InlineMath math="\{x_N\}" /> (<InlineMath math="\|x_N\| = 1" />) が存在して、
                </p>
                <BlockMath math="\|Kx_N - P_N Kx_N\| \geq \varepsilon" />
                <p>
                    となる。<InlineMath math="K" /> はコンパクトなので、<InlineMath math="y_N = Kx_N" /> は収束する部分列を持つ。極限を <InlineMath math="y" /> とすると、<InlineMath math="\|y - P_N y\| \to 0" /> となるはずである（基底の完全性による射影の強収束性）。<br />
                    これを組み合わせると
                </p>
                <BlockMath math="\begin{aligned}
                    \|Kx_N - P_N Kx_N\| &= \|(I - P_N)y_N\| \\
                    &\leq \|(I - P_N)(y_N - y)\| + \|(I - P_N)y\| \\
                    &\leq \|y_N - y\| + \|(I - P_N)y\|
                \end{aligned}" />
                <p>
                    右辺の2項はいずれも <InlineMath math="N \to \infty" /> （部分列として）で <InlineMath math="0" /> に収束するため、<InlineMath math="\varepsilon > 0" /> と矛盾する。したがって <InlineMath math="\|K - P_N K\| \to 0" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理が実際にどのように機能するかを、減衰する対角作用素の例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 9.2-1">
                <p>
                    前節 Example 9.1-3 の対角作用素 <InlineMath math="T(x_n) = (x_n/n)" /> と、その近似 <InlineMath math="T_N(x_n) = (x_1, x_2/2, \dots, x_N/N, 0, \dots)" /> を再度考えます。<br />
                    差の作用素 <InlineMath math="T - T_N" /> は、最初の <InlineMath math="N" /> 個が0で、それ以降が <InlineMath math="(0, \dots, 0, x_{N+1}/(N+1), \dots)" /> となる作用素です。
                </p>
                <BlockMath math="\begin{aligned}
                    \|(T - T_N)x\|^2 &= \sum_{n=N+1}^\infty \frac{|x_n|^2}{n^2} \\
                    &\leq \frac{1}{(N+1)^2} \sum_{n=N+1}^\infty |x_n|^2 \\
                    &\leq \frac{1}{(N+1)^2} \|x\|^2
                \end{aligned}" />
                <p>
                    したがって、作用素ノルムは <InlineMath math="\|T - T_N\| = 1/(N+1)" /> となります。<br />
                    <InlineMath math="N \to \infty" /> で作用素ノルムが <InlineMath math="0" /> に収束するため、<InlineMath math="T" /> は有限ランク作用素 <InlineMath math="T_N" /> の様々収束極限であり、コンパクト作用素であることが確認できました。
                </p>
            </ContentBox>

            <p>
                コンパクト作用素全体の集合について、本節で示された「吸収する性質」は、より高次な代数構造の研究へとつながります。
            </p>

            <ContentBox type="remark" title="ヒルベルト空間上の表現とイデアル">
                <p>
                    ヒルベルト空間上のコンパクト作用素全体の集合は通常 <InlineMath math="\mathcal{K}(H)" /> と書かれます。Proposition 9.2-1 は、任意の有界作用素 <InlineMath math="A \in B(H)" /> と <InlineMath math="K \in \mathcal{K}(H)" /> について <InlineMath math="AK, KA \in \mathcal{K}(H)" /> であること、すなわち <InlineMath math="\mathcal{K}(H)" /> が <InlineMath math="B(H)" /> の<b>両側イデアル</b>をなすことを意味しています。<br />
                    この事実は、作用素のなす代数的構造（C*-環などの作用素環論）において、行列における商環の概念を無限次元へ拡張する際に決定的な役割を果たします。
                </p>
            </ContentBox>

            <p>
                コンパクト作用素が満たす強力な保存則や近似定理について、要点をまとめます。
            </p>

            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>コンパクト作用素は、他の有界作用素と合成しても、随伴をとってもコンパクト性を失わない。</li>
                    <li>ヒルベルト空間におけるコンパクト作用素は、有限次元に像を持つ「有限ランク作用素」で作用素ノルムの意味でいくらでも近似できる。</li>
                    <li>この事実により、コンパクト作用素は実質的に「ほとんど有限次元のような作用素」として扱うことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
