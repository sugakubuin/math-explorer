import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function RepresentationMatrix() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数ベクトル空間でない一般のベクトル空間（例えば多項式の空間など）の間の線形写像は、一見すると行列による掛け算とは無関係に思えます。<br />
                しかし、各空間に<strong>「基底」を一つ固定</strong>してベクトルを「座標（数の列）」に直してあげると、どんな線形写像も完全に<strong>「行列を掛ける」という操作に翻訳</strong>できるのです。この行列を<strong>表現行列</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">表現行列の定義</h2>

            <ContentBox type="definition" title="Definition 3.4-1 （表現行列 / Representation Matrix）">
                <p>
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> と <InlineMath math="m" /> 次元ベクトル空間 <InlineMath math="W" /> の間の線形写像 <InlineMath math="f: V \to W" /> を考える。<br />
                    <InlineMath math="V" /> と <InlineMath math="W" /> にそれぞれ基底 <InlineMath math="B_V = \{\boldsymbol{v}_1, \dots, \boldsymbol{v}_n\}" />, <InlineMath math="B_W = \{\boldsymbol{w}_1, \dots, \boldsymbol{w}_m\}" /> を固定する。
                </p>
                <p>
                    このとき、<InlineMath math="V" /> の各基底ベクトルの行き先 <InlineMath math="f(\boldsymbol{v}_j)" /> を <InlineMath math="W" /> の基底の線形結合で表す。
                </p>
                <BlockMath math="f(\boldsymbol{v}_j) = a_{1j}\boldsymbol{w}_1 + a_{2j}\boldsymbol{w}_2 + \dots + a_{mj}\boldsymbol{w}_m \quad (1 \leq j \leq n)" />
                <p>
                    これらの係数を列として並べた <InlineMath math="m \times n" /> 行列 <InlineMath math="A" />
                </p>
                <BlockMath math="A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{pmatrix}" />
                <p>
                    を、基底 <InlineMath math="B_V, B_W" /> に関する <InlineMath math="f" /> の<strong>表現行列</strong>と呼ぶ。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※行ベクトル・列ベクトルの規約により転置で定義する流儀もありますが、本ドキュメントでは標準的な「係数を縦に並べる」列ベクトル方式を採用します）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="表現行列の意味">
                <p>
                    あるベクトル <InlineMath math="\boldsymbol{x} \in V" /> が基底 <InlineMath math="B_V" /> に関して座標ベクトル <InlineMath math="\boldsymbol{x}_V = (x_1, \dots, x_n)^T" /> を持つとします。<br />
                    このとき、写像先のベクトル <InlineMath math="f(\boldsymbol{x}) \in W" /> の基底 <InlineMath math="B_W" /> に関する座標ベクトルを <InlineMath math="\boldsymbol{y}_W = (y_1, \dots, y_m)^T" /> とすると、次の非常に美しい関係が成り立ちます。
                </p>
                <BlockMath math="\boldsymbol{y}_W = A \boldsymbol{x}_V" />
                <p>
                    つまり、「抽象的なベクトルに写像 <InlineMath math="f" /> を施すこと」は、「その座標ベクトルに表現行列 <InlineMath math="A" /> を左から掛けること」に完全に翻訳されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">合成写像・逆写像の表現行列</h2>

            <p>
                表現行列が真の力を発揮するのは、関数（写像）の合成を考えるときです。<br />
                単なる関数の「代入」という操作が、なぜか「行列の積」という奇妙な（行と列を掛け合わせる）操作にピタリと一致するのです。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 （合成写像の表現行列）">
                <p>
                    3つのベクトル空間 <InlineMath math="U, V, W" /> と、それぞれの基底 <InlineMath math="E_U, E_V, E_W" /> を固定する。<br />
                    線形写像 <InlineMath math="f: U \to V" /> の表現行列を <InlineMath math="A" />、<InlineMath math="g: V \to W" /> の表現行列を <InlineMath math="B" /> とする。このとき、合成写像 <InlineMath math="g \circ f: U \to W" /> の基底 <InlineMath math="E_U, E_W" /> に関する表現行列は、行列の積 <InlineMath math="BA" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各基底を <InlineMath math="E_U = \{\boldsymbol{u}_1, \dots\}, E_V = \{\boldsymbol{v}_1, \dots\}, E_W = \{\boldsymbol{w}_1, \dots\}" /> とする。表現行列の定義から、
                </p>
                <BlockMath math="f(\boldsymbol{u}_j) = \sum_i a_{ij}\boldsymbol{v}_i, \quad g(\boldsymbol{v}_i) = \sum_k b_{ki}\boldsymbol{w}_k" />
                <p>
                    合成写像 <InlineMath math="g \circ f" /> を基底ベクトル <InlineMath math="\boldsymbol{u}_j" /> に適用すると、
                </p>
                <BlockMath math="(g \circ f)(\boldsymbol{u}_j) = g(f(\boldsymbol{u}_j)) = g\left(\sum_i a_{ij}\boldsymbol{v}_i\right)" />
                <p>
                    ここで <InlineMath math="g" /> が線形写像であることを用いる（和と定数倍を外に出す）。
                </p>
                <BlockMath math="\begin{aligned} \sum_i a_{ij} g(\boldsymbol{v}_i) &= \sum_i a_{ij} \left (\sum_k b_{ki}\boldsymbol{w}_k\right) \\ &= \sum_k \left( \sum_i b_{ki} a_{ij} \right) \boldsymbol{w}_k \end{aligned}" />
                <p>
                    最後で和の順序を入れ替えた。<InlineMath math="\boldsymbol{w}_k" /> の係数に注目すると、これは行列 <InlineMath math="B" /> と <InlineMath math="A" /> の積 <InlineMath math="BA" /> の <InlineMath math="(k, j)" /> 成分そのものである。<br />
                    したがって、合成写像の表現行列はたしかに <InlineMath math="BA" /> となる。
                </p>
                <p className="mt-4 text-sm bg-yellow-50 dark:bg-yellow-900/30 p-2 rounded border border-yellow-200 dark:border-yellow-700">
                    ※行と列を賭け合わせる「行列の積」の複雑な定義は、実はこの「関数の合成」を表現するために必然的に生まれたものなのです。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 3.4-2 （逆写像の表現行列）">
                <p>
                    線形写像 <InlineMath math="f: V \to W" /> が全単射（同型写像）であるとする。
                    <InlineMath math="f" /> の表現行列を <InlineMath math="A" /> とすると、<InlineMath math="A" /> は正則行列（逆行列を持つ）であり、逆写像 <InlineMath math="f^{-1}: W \to V" /> の表現行列は <InlineMath math="A^{-1}" /> に等しい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が全単射であれば逆写像 <InlineMath math="f^{-1}" /> が存在し、これも線形写像になることが知られている。<br />
                    逆写像の定義より、合成写像 <InlineMath math="f^{-1} \circ f" /> は <InlineMath math="V" /> 上の恒等写像 <InlineMath math="id_V" /> であり、<InlineMath math="f \circ f^{-1}" /> は <InlineMath math="W" /> 上の恒等写像 <InlineMath math="id_W" /> である。<br />
                    <InlineMath math="f^{-1}" /> の表現行列を <InlineMath math="X" /> と置く。恒等写像の表現行列は明らかに単位行列 <InlineMath math="I" /> である。Proposition 3.4-1 （合成写像の表現行列）を利用すると、
                </p>
                <BlockMath math="XA = I \quad \text{かつ} \quad AX = I" />
                <p>
                    これはまさに行列 <InlineMath math="X" /> が行列 <InlineMath math="A" /> の逆行列であることを意味している。よって <InlineMath math="X = A^{-1}" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>基底を固定すると、どんな線形写像も「座標ベクトルに行列を掛ける操作」に置き換えることができる。この行列を<strong>表現行列</strong>という（Definition 3.4-1）。</li>
                    <li>線形写像を順次適用すること（合成写像）は、その表現行列を掛け合わせる（行列の積）計算と完全に一致する（Proposition 3.4-1）。</li>
                    <li>全単射な線形写像の逆写像は、表現行列の逆行列を掛ける操作に一致する（Proposition 3.4-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
