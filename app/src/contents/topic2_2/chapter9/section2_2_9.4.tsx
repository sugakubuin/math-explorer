import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_9_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                逆写像定理・陰関数定理の最も直接的で実用的な応用例は、<strong>座標変換</strong>（変数変換）です。
                特に重積分（多重積分）を計算する際、直交座標から極座標や球座標へ変換することで計算が飛躍的に簡単になることがありますが、このときの「微小な面積・体積の変化率」がまさにヤコビアンとして現れます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">座標変換とヤコビアン</h2>

            <ContentBox type="proposition" title="Proposition 9.4-1 (座標変換における面積・体積素の変換則)">
                <p>
                    <InlineMath math="U, V \subset \mathbb{R}^n" /> を開集合とし、写像 <InlineMath math="\mathbf{x} = \mathbf{f}(\mathbf{u})" /> （<InlineMath math="\mathbf{u} \in U, \mathbf{x} \in V" />）が <InlineMath math="U" /> から <InlineMath math="V" /> への <InlineMath math="C^1" /> 級の微分同相写像（全単射かつヤコビアンが至る所非零）であるとする。
                </p>
                <p className="mt-2">
                    このとき、微小な <InlineMath math="n" /> 次元体積要素（これを <InlineMath math="d\mathbf{x} = dx_1 \cdots dx_n" /> と略記する）は、座標変換によって次のように変換される：
                </p>
                <BlockMath math="d\mathbf{x} = |\det J_{\mathbf{f}}(\mathbf{u})| \, d\mathbf{u}" />
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ ヤコビアンの<strong>絶対値</strong>をとることに注意。これは体積が常に正の値をとるためである。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="直感的な導出">
                <p>
                    厳密な証明は外微分や微分形式、あるいはリーマン積分の変数変換公式の詳細な議論を要するため、ここではヤコビ行列の幾何学的意味を用いた直感的な導出（証明）を与える。
                </p>
                <p className="mt-2">
                    パラメータ空間 <InlineMath math="U" /> における微小な <InlineMath math="n" /> 次元超立方体を考える。点 <InlineMath math="\mathbf{u}" /> を起点とし、各座標軸方向に長さ <InlineMath math="du_1, \dots, du_n" /> の辺を持つ。この超立方体の体積要素は
                </p>
                <BlockMath math="d\mathbf{u} = du_1 du_2 \cdots du_n" />
                <p className="mt-2">
                    である。写像 <InlineMath math="\mathbf{x} = \mathbf{f}(\mathbf{u})" /> によって、この微小な超立方体は空間 <InlineMath math="V" /> 内の微小な「平行六面体」に写される。
                </p>
                <p className="mt-2">
                    この平行六面体を張る <InlineMath math="n" /> 個の微小ベクトルを求める。<InlineMath math="i" /> 番目のパラメータだけが微小変化 <InlineMath math="du_i" /> したときの <InlineMath math="\mathbf{x}" /> の変化分は、全微分の定義（あるいは一次近似）により、
                </p>
                <BlockMath math="\Delta\mathbf{x}^{(i)} \approx \frac{\partial \mathbf{f}}{\partial u_i} du_i" />
                <p className="mt-2">
                    と近似される。したがって、写像先の平行六面体は、<InlineMath math="n" /> 個のベクトル <InlineMath math="\{\frac{\partial \mathbf{f}}{\partial u_1} du_1, \dots, \frac{\partial \mathbf{f}}{\partial u_n} du_n\}" /> によって張られる。
                </p>
                <p className="mt-2">
                    線形代数学において、ベクトル <InlineMath math="\mathbf{v}_1, \dots, \mathbf{v}_n" /> によって張られる平行六面体の体積 <InlineMath math="V" /> は、それらを列ベクトルとする行列の行列式の絶対値で与えられる。
                    すなわち、
                </p>
                <BlockMath math="\begin{aligned}
                                    d\mathbf{x} &= \left| \det \left( \frac{\partial \mathbf{f}}{\partial u_1} du_1 \;\; \cdots \;\; \frac{\partial \mathbf{f}}{\partial u_n} du_n \right) \right| \\
                                    &= \left| \det \left( \frac{\partial \mathbf{f}}{\partial u_1} \;\; \cdots \;\; \frac{\partial \mathbf{f}}{\partial u_n} \right) \right| \cdot (du_1 \cdots du_n) \\
                                    &= |\det J_{\mathbf{f}}(\mathbf{u})| \, d\mathbf{u}
                                \end{aligned}" />
                <p className="mt-2">
                    以上により面積・体積素の変換則が導出された。逆写像定理により <InlineMath math="\det J_{\mathbf{f}} \neq 0" /> が保証されているため、この変換によって体積が <InlineMath math="0" /> に「潰れる」ことはなく、重積分の計算において変数変換が正当化される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代表的な座標系のヤコビアン</h2>

            <p>
                重積分で頻繁に用いられる極座標と球座標のヤコビアンを計算し、幾何学的な意味を確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 9.4-1 (極座標と球座標のヤコビアン)">
                <p className="font-bold text-slate-700 dark:text-slate-300">1. 2次元：極座標変換</p>
                <p className="mt-2">
                    変換式 <InlineMath math="x = r \cos \theta, \; y = r \sin \theta" /> を考える。ヤコビ行列は
                </p>
                <BlockMath math="J(r, \theta) = \begin{pmatrix} \frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\ \frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta} \end{pmatrix} = \begin{pmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{pmatrix}" />
                <p>ヤコビアンは</p>
                <BlockMath math="\begin{aligned} \det J(r, \theta) &= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta) \\ &= r(\cos^2 \theta + \sin^2 \theta) = r \end{aligned}" />
                <p className="mt-2">
                    したがって、微小面積要素は <InlineMath math="dx dy = r \, dr d\theta" /> となる。これは、「扇形」を近似する長方形の辺の長さが <InlineMath math="dr" /> と <InlineMath math="r d\theta" />（円弧の長さ）であるという図形的な直感と完全に一致する。
                </p>

                <p className="mt-6 font-bold text-slate-700 dark:text-slate-300">2. 3次元：球座標変換</p>
                <p className="mt-2">
                    変換式 <InlineMath math="x = r \sin \theta \cos \phi, \; y = r \sin \theta \sin \phi, \; z = r \cos \theta" /> を考える（<InlineMath math="\theta" /> は極角、<InlineMath math="\phi" /> は方位角）。ヤコビ行列は
                </p>
                <BlockMath math="J(r, \theta, \phi) = \begin{pmatrix} 
                                    \sin \theta \cos \phi & r \cos \theta \cos \phi & -r \sin \theta \sin \phi \\ 
                                    \sin \theta \sin \phi & r \cos \theta \sin \phi & r \sin \theta \cos \phi \\ 
                                    \cos \theta & -r \sin \theta & 0 
                                \end{pmatrix}" />
                <p>3行目でサラスの公式または余因子展開を用いてヤコビアンを計算すると、</p>
                <BlockMath math="\begin{aligned} \det J &= \cos \theta \begin{vmatrix} r \cos \theta \cos \phi & -r \sin \theta \sin \phi \\ r \cos \theta \sin \phi & r \sin \theta \cos \phi \end{vmatrix} \\ &\quad - (-r \sin \theta) \begin{vmatrix} \sin \theta \cos \phi & -r \sin \theta \sin \phi \\ \sin \theta \sin \phi & r \sin \theta \cos \phi \end{vmatrix} \end{aligned}" />
                <BlockMath math="\begin{aligned} \det J &= \cos \theta (r^2 \cos \theta \sin \theta) + r \sin \theta (r \sin^2 \theta) \\ &= r^2 \sin \theta (\cos^2 \theta + \sin^2 \theta) = r^2 \sin \theta \end{aligned}" />
                <p className="mt-2">
                    したがって、微小体積要素は <InlineMath math="dx dy dz = r^2 \sin \theta \, dr d\theta d\phi" /> となる。原点からの距離 <InlineMath math="r" /> が大きいほど、また赤道（<InlineMath math="\theta = \pi/2" />）に近いほど、セル1つあたりの体積が大きくなることを示している。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>座標変換における面積・体積要素は、ヤコビアンの絶対値を掛けることによってスケール変換される（<InlineMath math="d\mathbf{x} = |\det J| \, d\mathbf{u}" />）。</li>
                    <li>ヤコビ行列式の各列ベクトルは、変換後の空間での「微小な平行六面体を張るベクトル」を意味するため、その行列式が体積になるのは線形代数の自然な結果である。</li>
                    <li>逆写像定理が（<InlineMath math="\det J \neq 0" /> の条件下で）局所的な全単射性を保証するため、この変数変換を用いた重積分の計算が正当化される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
