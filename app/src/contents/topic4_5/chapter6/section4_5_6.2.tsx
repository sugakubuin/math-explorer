import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VolumeForms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体が「向き付け可能」であることを、微分形式の言葉で言い換えることができます。
                <InlineMath math="n" /> 次元多様体上の <InlineMath math="n" />-形式は、各点で1次元の空間をなすため、どこでも零にならないような <InlineMath math="n" />-形式が存在するかどうかが、大域的な向き付けの存在と密接に関わっています。
                このような特別な <InlineMath math="n" />-形式を<strong>体積形式（Volume form）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">体積形式の定義</h2>

            <p className="leading-relaxed">
                多様体上の積分を定義するための「微小体積要素」の役割を果たすのが体積形式です。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (体積形式)">
                <p>
                    <InlineMath math="n" /> 次元多様体 <InlineMath math="M" /> 上の<strong>体積形式（volume form）</strong>とは、至る所零にならない <InlineMath math="n" />-形式 <InlineMath math="\Omega \in \Omega^n(M)" /> のことである。
                </p>
                <p className="mt-2">
                    すなわち、任意の点 <InlineMath math="p \in M" /> において <InlineMath math="\Omega_p \neq 0" />（接空間の任意の基底 <InlineMath math="v_1, \ldots, v_n" /> に対して <InlineMath math="\Omega_p(v_1, \ldots, v_n) \neq 0" />）が成り立つ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                体積形式の存在は、多様体が向き付け可能であることと同値です。
                これは、多様体論において非常に重要な定理の一つです。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1">
                <p>
                    <InlineMath math="n" /> 次元多様体 <InlineMath math="M" /> が向き付け可能であることと、<InlineMath math="M" /> 上に大域的な体積形式が存在することは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(<InlineMath math="\Rightarrow" />) 向き付け可能ならば体積形式が存在すること：</strong>
                    <InlineMath math="M" /> は向き付け可能であるとし、向き付けられたアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" />（座標変換のヤコビ行列式が正）をとる。
                    各チャート <InlineMath math="U_\alpha" /> 上で、局所的な体積形式 <InlineMath math="\omega_\alpha = dx_\alpha^1 \wedge \cdots \wedge dx_\alpha^n" /> を定義する。
                    <InlineMath math="M" /> の開被覆 <InlineMath math="\{U_\alpha\}" /> に従属する1の分割（§1.5）<InlineMath math="\{\rho_\alpha\}" /> を用いて、大域的な <InlineMath math="n" />-形式
                </p>
                <BlockMath math="\Omega = \sum_\alpha \rho_\alpha \omega_\alpha" />
                <p className="mt-2">
                    を構成する。<InlineMath math="\Omega" /> が至る所零にならないことを示す。
                    任意の点 <InlineMath math="p \in M" /> を固定し、<InlineMath math="p \in U_\beta" /> となるチャート <InlineMath math="(U_\beta, \varphi_\beta)" /> で <InlineMath math="\Omega" /> を評価する。
                    <InlineMath math="\omega_\alpha" /> を <InlineMath math="U_\beta" /> の座標 <InlineMath math="(x_\beta^1, \ldots, x_\beta^n)" /> で表すと、
                </p>
                <BlockMath math="\omega_\alpha = \det\left(\frac{\partial x_\alpha}{\partial x_\beta}\right) dx_\beta^1 \wedge \cdots \wedge dx_\beta^n" />
                <p className="mt-2">
                    となる。向き付けの仮定から、ヤコビ行列式 <InlineMath math="\det(\partial x_\alpha / \partial x_\beta)" /> は正である。
                    したがって、
                </p>
                <BlockMath math="\Omega_p = \left( \sum_\alpha \rho_\alpha(p) \det\left(\frac{\partial x_\alpha}{\partial x_\beta}\right)(p) \right) dx_\beta^1 \wedge \cdots \wedge dx_\beta^n" />
                <p className="mt-2">
                    となる。1の分割の性質より <InlineMath math="\rho_\alpha(p) \geq 0" /> であり、少なくとも1つの <InlineMath math="\alpha" /> について <InlineMath math="\rho_\alpha(p) > 0" /> である。
                    正の数の非負線形結合（少なくとも1つは正）は正となるため、係数は厳密に正であり、<InlineMath math="\Omega_p \neq 0" /> が示された。
                </p>
                <p className="mt-4">
                    <strong>(<InlineMath math="\Leftarrow" />) 体積形式が存在するならば向き付け可能であること：</strong>
                    体積形式 <InlineMath math="\Omega" /> が存在するとする。<InlineMath math="M" /> の任意のアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> をとる。
                    各チャート <InlineMath math="U_\alpha" /> 上で <InlineMath math="\Omega = f_\alpha \, dx_\alpha^1 \wedge \cdots \wedge dx_\alpha^n" /> と表せる。<InlineMath math="\Omega" /> は至る所零にならないため、<InlineMath math="f_\alpha" /> は至る所正か、至る所負のいずれかである（<InlineMath math="U_\alpha" /> が連結であるとしてよい）。
                    もし <InlineMath math="f_\alpha < 0" /> であれば、最初の座標 <InlineMath math="x_\alpha^1" /> の符号を反転させた新しいチャートをとることで、<InlineMath math="f_\alpha > 0" /> とできる。
                    このようにして得られた新しいアトラスにおいて、<InlineMath math="U_\alpha \cap U_\beta" /> 上での座標変換を考えると、
                </p>
                <BlockMath math="\Omega = f_\alpha \, dx_\alpha^1 \wedge \cdots \wedge dx_\alpha^n = f_\beta \, dx_\beta^1 \wedge \cdots \wedge dx_\beta^n" />
                <p className="mt-2">
                    であり、<InlineMath math="dx_\alpha^1 \wedge \cdots \wedge dx_\alpha^n = \det(\partial x_\alpha / \partial x_\beta) \, dx_\beta^1 \wedge \cdots \wedge dx_\beta^n" /> を代入すると、
                </p>
                <BlockMath math="f_\beta = f_\alpha \det\left(\frac{\partial x_\alpha}{\partial x_\beta}\right)" />
                <p className="mt-2">
                    となる。<InlineMath math="f_\alpha > 0" /> かつ <InlineMath math="f_\beta > 0" /> であるため、ヤコビ行列式 <InlineMath math="\det(\partial x_\alpha / \partial x_\beta)" /> は必ず正となる。
                    したがって、このアトラスは向き付けられたアトラスであり、<InlineMath math="M" /> は向き付け可能である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な体積形式の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 6.2-1">
                <p>
                    <strong>ユークリッド空間の標準体積形式：</strong>
                    <InlineMath math="\mathbb{R}^n" /> 上の標準的な体積形式は
                </p>
                <BlockMath math="\Omega = dx^1 \wedge \cdots \wedge dx^n" />
                <p className="mt-2">
                    である。これは、<InlineMath math="\mathbb{R}^n" /> の標準的な向き付け（右手系）に対応している。
                </p>
                <p className="mt-4">
                    <strong>球面の面積形式：</strong>
                    2次元球面 <InlineMath math="S^2" /> 上の体積形式（面積形式）は、極座標 <InlineMath math="(\theta, \phi)" />（<InlineMath math="\theta" /> は緯度、<InlineMath math="\phi" /> は経度）を用いると
                </p>
                <BlockMath math="\omega = \sin\theta \, d\theta \wedge d\phi" />
                <p className="mt-2">
                    と表される。北極（<InlineMath math="\theta = 0" />）と南極（<InlineMath math="\theta = \pi" />）では <InlineMath math="\sin\theta = 0" /> となるため、この座標系では体積形式が零になるように見えるが、これは極座標の特異性によるものであり、立体射影などの適切なチャートを用いれば <InlineMath math="S^2" /> 全体で零にならないことが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">座標変換と体積形式</h2>

            <p className="leading-relaxed">
                Proposition 6.2-1 の証明の中で、<InlineMath math="n" />-形式の座標変換則がヤコビ行列式を用いて表されることを使いました。
                この性質は、次節で積分を定義する際に、変数変換の公式と完全に一致するという極めて重要な意味を持ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-2">
                <p>
                    局所座標系 <InlineMath math="(x^1, \ldots, x^n)" /> から <InlineMath math="(y^1, \ldots, y^n)" /> への座標変換のもとで、基底 <InlineMath math="dx^1 \wedge \cdots \wedge dx^n" /> は次のように変換される。
                </p>
                <BlockMath math="dx^1 \wedge \cdots \wedge dx^n = \det\left(\frac{\partial x}{\partial y}\right) \, dy^1 \wedge \cdots \wedge dy^n" />
                <p className="mt-2">
                    ここで <InlineMath math="\det(\partial x / \partial y)" /> はヤコビ行列式である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    連鎖律 <InlineMath math="dx^i = \sum_{j=1}^n \frac{\partial x^i}{\partial y^j} dy^j" /> を左辺に代入して展開する。
                </p>
                <BlockMath math="\begin{aligned} dx^1 \wedge \cdots \wedge dx^n &= \left( \sum_{j_1=1}^n \frac{\partial x^1}{\partial y^{j_1}} dy^{j_1} \right) \wedge \cdots \wedge \left( \sum_{j_n=1}^n \frac{\partial x^n}{\partial y^{j_n}} dy^{j_n} \right) \\ &= \sum_{j_1, \ldots, j_n} \frac{\partial x^1}{\partial y^{j_1}} \cdots \frac{\partial x^n}{\partial y^{j_n}} dy^{j_1} \wedge \cdots \wedge dy^{j_n} \end{aligned}" />
                <p className="mt-2">
                    ウェッジ積の交代性により、添字 <InlineMath math="j_1, \ldots, j_n" /> の中に同じものが含まれていればその項は <InlineMath math="0" /> となる。
                    したがって、和は <InlineMath math="\{1, \ldots, n\}" /> の置換 <InlineMath math="\sigma" /> についてのみとればよい。
                </p>
                <BlockMath math="\begin{aligned} &= \sum_{\sigma \in S_n} \frac{\partial x^1}{\partial y^{\sigma(1)}} \cdots \frac{\partial x^n}{\partial y^{\sigma(n)}} dy^{\sigma(1)} \wedge \cdots \wedge dy^{\sigma(n)} \\ &= \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma) \frac{\partial x^1}{\partial y^{\sigma(1)}} \cdots \frac{\partial x^n}{\partial y^{\sigma(n)}} dy^1 \wedge \cdots \wedge dy^n \\ &= \det\left(\frac{\partial x}{\partial y}\right) \, dy^1 \wedge \cdots \wedge dy^n \end{aligned}" />
                <p className="mt-2">
                    最後は行列式の定義そのものである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な変数変換の例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 6.2-2 (極座標変換)">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> の直交座標 <InlineMath math="(x, y)" /> から極座標 <InlineMath math="(r, \theta)" /> への変換 <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> を考える。
                    体積形式 <InlineMath math="dx \wedge dy" /> がどのように変換されるかを計算する。
                </p>
                <p className="mt-2">
                    ヤコビ行列を計算すると、
                </p>
                <BlockMath math="J = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}" />
                <p className="mt-2">
                    行列式は <InlineMath math="\det J = r\cos^2\theta - (-r\sin^2\theta) = r(\cos^2\theta + \sin^2\theta) = r" /> である。
                    したがって、Proposition 6.2-2 より、
                </p>
                <BlockMath math="dx \wedge dy = r \, dr \wedge d\theta" />
                <p className="mt-2">
                    となる。これは、重積分における極座標変換の微小面積要素 <InlineMath math="dx\,dy = r\,dr\,d\theta" /> と完全に一致している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="リーマン体積形式">
                <p>
                    微分幾何II（4-6）で学ぶように、多様体にリーマン計量 <InlineMath math="g" />（各点の内積）が与えられると、自然な体積形式が一つ定まります。
                    局所座標において計量テンソルを行列 <InlineMath math="(g_{ij})" /> で表したとき、この<strong>リーマン体積形式（Riemannian volume form）</strong>は
                </p>
                <BlockMath math="\Omega_g = \sqrt{\det(g_{ij})} \, dx^1 \wedge \cdots \wedge dx^n" />
                <p className="mt-2">
                    で与えられます。この体積形式を用いて積分を行うことで、曲線の長さ、曲面の面積、多様体の体積といった幾何学的な量を厳密に定義することができます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>体積形式とは、多様体上の至る所零にならない <InlineMath math="n" />-形式のことである。</li>
                    <li>多様体が向き付け可能であることと、大域的な体積形式が存在することは同値である。</li>
                    <li><InlineMath math="n" />-形式の座標変換は、ヤコビ行列式を係数として伴う（<InlineMath math="dx^1 \wedge \cdots \wedge dx^n = \det J \, dy^1 \wedge \cdots \wedge dy^n" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
