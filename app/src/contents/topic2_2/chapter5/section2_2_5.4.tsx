import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VariableTransformation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                連鎖律の最も重要な応用の一つが<strong>変数変換</strong>（座標変換）です。
                物理学や工学で直交座標系から極座標系などに移行する際、
                あるいは偏微分方程式を解くために新しい変数を導入する際、
                微分の連鎖律を用いて古い変数での微分を新しい変数での微分に書き換える必要があります。
                本節では、その具体的な計算手順を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極座標変換</h2>

            <ContentBox type="example" title="Example 5.4-1 (極座標変換における連鎖律の適用)">
                <p className="leading-relaxed">
                    2次元平面における極座標変換 <InlineMath math="x = r \cos \theta" />, <InlineMath math="y = r \sin \theta" /> を考える。
                    ある関数 <InlineMath math="z = f(x, y)" /> があり、これを極座標の関数 <InlineMath math="Z(r, \theta) = f(r \cos \theta, r \sin \theta)" /> と見なす。
                    <InlineMath math="Z_r, Z_\theta" /> を <InlineMath math="f_x, f_y" /> を用いて表す。
                </p>
                <p className="leading-relaxed mt-2">
                    多変数の連鎖律 <InlineMath math="\frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u}" /> を適用する。
                    まず、中間変数の偏微分を計算する：
                </p>
                <BlockMath math="\frac{\partial x}{\partial r} = \cos \theta, \quad \frac{\partial y}{\partial r} = \sin \theta" />
                <BlockMath math="\frac{\partial x}{\partial \theta} = -r \sin \theta, \quad \frac{\partial y}{\partial \theta} = r \cos \theta" />
                <p className="leading-relaxed mt-2">
                    したがって、連鎖律より、
                </p>
                <BlockMath math="\frac{\partial Z}{\partial r} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial r} = f_x \cos \theta + f_y \sin \theta" />
                <BlockMath math="\frac{\partial Z}{\partial \theta} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial \theta} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial \theta} = -f_x r \sin \theta + f_y r \cos \theta" />
                <p className="leading-relaxed mt-2">
                    これを行列の記法（ヤコビ行列）を用いて書くと、
                </p>
                <BlockMath math="\begin{pmatrix} \frac{\partial Z}{\partial r} \\ \frac{\partial Z}{\partial \theta} \end{pmatrix} = \begin{pmatrix} \cos \theta & \sin \theta \\ -r \sin \theta & r \cos \theta \end{pmatrix} \begin{pmatrix} f_x \\ f_y \end{pmatrix}" />
                <p className="leading-relaxed">
                    となり、係数行列は変換 <InlineMath math="(r, \theta) \mapsto (x, y)" /> の転置ヤコビ行列に他ならない。
                </p>
            </ContentBox>

            <p>
                ここまでは1階の偏微分でした。
                さらに重要なのは「<strong>2階の偏微分（ラプラシアンなど）がどう変換されるか</strong>」です。
                このとき、先ほど学んだシュワルツの定理（混合微分の順序交換）やライプニッツ則（積の微分）がフルに活躍します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般の変数変換</h2>

            <ContentBox type="proposition" title="Proposition 5.4-1 (変数変換後の2階偏微分の計算手順)">
                <p className="leading-relaxed">
                    変数変換により得られた1階微分作用素
                </p>
                <BlockMath math="\frac{\partial}{\partial u} = \frac{\partial x}{\partial u}\frac{\partial}{\partial x} + \frac{\partial y}{\partial u}\frac{\partial}{\partial y}" />
                <p className="leading-relaxed">
                    を自乗（または別の微分作用素と合成）して2階微分を計算する。
                    この際、係数 <InlineMath math="\frac{\partial x}{\partial u}" /> なども <InlineMath math="u" /> や <InlineMath math="v" /> の関数として微分されることに注意する（積の微分法則）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="極座標のラプラシアンの導出概要">
                <p className="leading-relaxed">
                    極座標変換の例で <InlineMath math="f_{xx} + f_{yy}" /> （ラプラシアン <InlineMath math="\Delta f" />）を <InlineMath math="r, \theta" /> で表す。
                    まず、連鎖律の結果を逆解きして <InlineMath math="f_x, f_y" /> を <InlineMath math="Z_r, Z_\theta" /> で表す。
                </p>
                <BlockMath math="f_x = \cos \theta Z_r - \frac{\sin \theta}{r} Z_\theta" />
                <BlockMath math="f_y = \sin \theta Z_r + \frac{\cos \theta}{r} Z_\theta" />
                <p className="leading-relaxed">
                    これは微分作用素として次のように振る舞うことを意味する：
                </p>
                <BlockMath math="\frac{\partial}{\partial x} = \cos \theta \frac{\partial}{\partial r} - \frac{\sin \theta}{r} \frac{\partial}{\partial \theta}" />
                <p className="leading-relaxed">
                    <InlineMath math="f_{xx} = (\frac{\partial}{\partial x})(\frac{\partial f}{\partial x})" /> にこの作用素を2回適用する。
                    計算は極めて煩雑であるが、積の微分法則を慎重に適用すると、
                </p>
                <BlockMath math="\begin{aligned} f_{xx} & = \cos^2 \theta Z_{rr} - \frac{2\sin\theta\cos\theta}{r} Z_{r\theta} + \frac{\sin^2\theta}{r^2} Z_{\theta\theta} \\ &\quad + \frac{\sin^2\theta}{r} Z_r + \frac{2\sin\theta\cos\theta}{r^2} Z_\theta \end{aligned}" />
                <p className="leading-relaxed">
                    <InlineMath math="f_{yy}" /> も同様に計算して足し合わせると、混合項 <InlineMath math="Z_{r\theta}, Z_\theta" /> が見事に相殺し、
                </p>
                <BlockMath math="\begin{aligned} f_{xx} + f_{yy} & = Z_{rr} + \frac{1}{r}Z_r + \frac{1}{r^2}Z_{\theta\theta} \\ & = \frac{\partial^2 Z}{\partial r^2} + \frac{1}{r}\frac{\partial Z}{\partial r} + \frac{1}{r^2}\frac{\partial^2 Z}{\partial \theta^2} \end{aligned}" />
                <p className="leading-relaxed">
                    が得られる。これが極座標系におけるラプラシアンの表現である。
                    （このとき、<InlineMath math="Z" /> が <InlineMath math="C^2" /> 級であり <InlineMath math="Z_{r\theta} = Z_{\theta r}" /> が成り立つという「シュワルツの定理」を暗黙に利用している。）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="微分作用素としての理解">
                <p className="leading-relaxed">
                    極座標のラプラシアン導出に見られる複雑な計算を間違えずに実行するコツは、
                    「関数 <InlineMath math="f" />」と「微分作用素」を分離して考えることです。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\frac{\partial}{\partial x}" /> という演算子自体が <InlineMath math="r, \theta" /> と <InlineMath math="\frac{\partial}{\partial r}, \frac{\partial}{\partial \theta}" /> で書かれているため、
                    <InlineMath math="(\frac{\partial}{\partial x})^2" /> を計算する際は、単に2乗するのではなく、
                    右側の作用素が内側の関数にも働く「積の微分」が発生します。
                    量子力学や流体力学などの物理学で頻繁に現れるこの計算は、多変数微分の総決算とも言える練習問題です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>連鎖律を変数変換（座標変換）に応用することで、元の座標での微分を新しい座標の微分で表すことができる。</li>
                    <li>ヤコビ行列を用いることで、変換規則をすっきりと記述できる。</li>
                    <li>高階微分の変換（例：ラプラシアン）では、微分作用素としての積の微分法则と、シュワルツの定理（混合微分の対称性）が不可欠である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
