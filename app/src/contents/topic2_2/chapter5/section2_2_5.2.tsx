import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobianMatrix() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節の連鎖律は <InlineMath math="t \mapsto (x, y) \mapsto z" /> という「1変数から多変数を通って1変数に戻る」パターンでしたが、
                より一般に <InlineMath math="\mathbb{R}^n \to \mathbb{R}^m \to \mathbb{R}^p" /> と空間の次元を変える変換の連鎖も頻繁に現れます。
                このとき、偏導関数をすべて並べた行列を考えることで、連鎖律は驚くほどシンプルで美しい「行列の積」として表現されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤコビ行列</h2>

            <ContentBox type="definition" title="Definition 5.2-1 (ヤコビ行列)">
                <p className="leading-relaxed">
                    <InlineMath math="n" /> 変数ベクトル値関数 <InlineMath math="\boldsymbol{f}: \mathbb{R}^n \to \mathbb{R}^m" /> が、<InlineMath math="m" /> 個の成分関数
                    <InlineMath math="\boldsymbol{f}(\boldsymbol{x}) = \begin{pmatrix} f_1(x_1, \dots, x_n) \\ \vdots \\ f_m(x_1, \dots, x_n) \end{pmatrix}" />
                    で与えられているとする。各成分関数が偏微分可能であるとき、その偏導関数を <InlineMath math="(i, j)" /> 成分に持つ <InlineMath math="m \times n" /> 行列
                </p>
                <BlockMath math="J_{\boldsymbol{f}}(\boldsymbol{x}) = \begin{pmatrix} 
                \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
                \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
                \vdots & \vdots & \ddots & \vdots \\
                \frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
                \end{pmatrix}" />
                <p className="leading-relaxed">
                    を <InlineMath math="\boldsymbol{f}" /> の<strong>ヤコビ行列</strong>（Jacobian matrix）と呼ぶ。
                </p>
                <p className="leading-relaxed mt-2">
                    特に <InlineMath math="m = n" />（次元が変わらない変換）の場合、その行列式 <InlineMath math="\det J_{\boldsymbol{f}}" /> を<strong>ヤコビアン</strong>（ヤコビ行列式）と呼び、
                    体積要素の拡大・縮小率を表す（多重積分で重要になる）。
                </p>
            </ContentBox>

            <p>
                ヤコビ行列の各行は、ひとつの成分関数 <InlineMath math="f_i" /> の勾配ベクトル <InlineMath math="\nabla f_i" /> になっています。
                1変数関数の「微分係数 <InlineMath math="f'(x)" />」がスカラー（実数）であったのに対し、
                多変数関数の「微分係数」はこのヤコビ行列そのものだと考えるのが現代的な視点です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列形式の連鎖律</h2>

            <ContentBox type="proposition" title="Proposition 5.2-1 (連鎖律のヤコビ行列による表現)">
                <p className="leading-relaxed">
                    2つの写像 <InlineMath math="\boldsymbol{g}: \mathbb{R}^n \to \mathbb{R}^m" /> と <InlineMath math="\boldsymbol{f}: \mathbb{R}^m \to \mathbb{R}^p" /> があり、
                    <InlineMath math="\boldsymbol{g}" /> が <InlineMath math="\boldsymbol{x}" /> で、<InlineMath math="\boldsymbol{f}" /> が <InlineMath math="\boldsymbol{y} = \boldsymbol{g}(\boldsymbol{x})" /> で全微分可能とする。
                </p>
                <p className="leading-relaxed mt-2">
                    このとき、合成写像 <InlineMath math="\boldsymbol{f} \circ \boldsymbol{g}: \mathbb{R}^n \to \mathbb{R}^p" /> は <InlineMath math="\boldsymbol{x}" /> で全微分可能であり、
                    そのヤコビ行列は個々のヤコビ行列の<strong>行列の積</strong>として積として与えられる。
                </p>
                <BlockMath math="J_{\boldsymbol{f} \circ \boldsymbol{g}}(\boldsymbol{x}) = J_{\boldsymbol{f}}(\boldsymbol{g}(\boldsymbol{x})) \cdot J_{\boldsymbol{g}}(\boldsymbol{x})" />
            </ContentBox>

            <ContentBox type="remark" title="1変数との比較と直感的意味">
                <p className="leading-relaxed">
                    連鎖律を行列形式で書くと、1変数のときの式
                </p>
                <BlockMath math="(f \circ g)'(x) = f'(g(x)) \cdot g'(x)" />
                <p className="leading-relaxed">
                    と<strong>全く同じ形</strong>をしていることに気づきます。
                    異なるのは、実数の掛け算が行列の掛け算（行列積）に置き換わっているだけです。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="J_{\boldsymbol{g}}" /> は <InlineMath math="n \times m" /> 行列、<InlineMath math="J_{\boldsymbol{f}}" /> は <InlineMath math="m \times p" /> 行列なので、
                    その積である <InlineMath math="J_{\boldsymbol{f} \circ \boldsymbol{g}}" /> は正しく <InlineMath math="n \times p" /> 行列になります。
                    このようにヤコビ行列を定義することで、多変数の複雑な偏微分の足し合わせが、
                    行列の積という線形代数の強力なフレームワークに綺麗に吸収されるのです。
                </p>
                <p className="leading-relaxed mt-2">
                    実際、前節で証明した <InlineMath math="\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}" /> は、
                    この行列積の一部（<InlineMath math="1 \times 2" /> 行列と <InlineMath math="2 \times 1" /> 行列の積）を書き下したものに他なりません。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヤコビ行列 <InlineMath math="J_{\boldsymbol{f}}" /> は、すべての成分関数に関するすべての変数での偏微分を並べた行列である（Definition 5.2-1）。</li>
                    <li>多変数の「微分」とは、本質的には局所的な線形近似を表すこのヤコビ行列のことである。</li>
                    <li>合成写像の連鎖律は、ヤコビ行列同士の積 <InlineMath math="J_{\boldsymbol{f}} \cdot J_{\boldsymbol{g}}" /> として極めてシンプルに表現される（Proposition 5.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
