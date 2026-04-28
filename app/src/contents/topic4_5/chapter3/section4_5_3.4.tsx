import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TangentBundleAndVectorFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で導入した「ベクトル束」の枠組みを用いて、多様体 <InlineMath math="M" /> の各点における接空間 <InlineMath math="T_pM" /> をすべて集めた空間である「接束」を構成します。
                この接束という大きな空間を考えることで、多様体上の「ベクトル場」を、接束の「切断」として厳密に定義することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">接束の構成</h2>

            <p className="leading-relaxed">
                多様体 <InlineMath math="M" /> のすべての接空間の直和集合（disjoint union）を考えます。
                この集合に、<InlineMath math="M" /> のアトラスから自然に誘導される多様体の構造を入れます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (接束)">
                <p>
                    <InlineMath math="n" /> 次元多様体 <InlineMath math="M" /> の各点 <InlineMath math="p" /> における接空間 <InlineMath math="T_pM" /> の直和集合を
                </p>
                <BlockMath math="TM = \bigsqcup_{p \in M} T_pM" />
                <p className="mt-2">
                    とする。自然な射影 <InlineMath math="\pi : TM \to M" /> を、<InlineMath math="v \in T_pM" /> に対して <InlineMath math="\pi(v) = p" /> で定義する。
                </p>
                <p className="mt-2">
                    <InlineMath math="M" /> のチャート <InlineMath math="(U, \varphi)" />、局所座標を <InlineMath math="(x^1, \ldots, x^n)" /> とすると、<InlineMath math="U" /> 上の任意の接ベクトル <InlineMath math="v \in T_pM" />（<InlineMath math="p \in U" />）は、基底 <InlineMath math="\{\partial/\partial x^i|_p\}" /> を用いて
                </p>
                <BlockMath math="v = \sum_{i=1}^n v^i \left. \frac{\partial}{\partial x^i} \right|_p" />
                <p className="mt-2">
                    と一意に表される。このとき、写像 <InlineMath math="\tilde{\varphi} : \pi^{-1}(U) \to \varphi(U) \times \mathbb{R}^n \subset \mathbb{R}^{2n}" /> を
                </p>
                <BlockMath math="\tilde{\varphi}(v) = (x^1(p), \ldots, x^n(p), v^1, \ldots, v^n)" />
                <p className="mt-2">
                    で定義する。この <InlineMath math="\tilde{\varphi}" /> を用いて <InlineMath math="TM" /> に多様体の構造を入れたものを、<InlineMath math="M" /> の<strong>接束（tangent bundle）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この構成により、接束 <InlineMath math="TM" /> は単なる集合の集まりではなく、それ自身が滑らかな多様体となり、さらにベクトル束の構造を持つことがわかります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1">
                <p>
                    接束 <InlineMath math="TM" /> は、<InlineMath math="M" /> を底空間とするランク <InlineMath math="n" /> のベクトル束であり、<InlineMath math="2n" /> 次元の滑らかな多様体である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="M" /> のアトラス <InlineMath math="\{(U_\alpha, \varphi_\alpha)\}" /> から誘導される <InlineMath math="TM" /> のチャートの族 <InlineMath math="\{(\pi^{-1}(U_\alpha), \tilde{\varphi}_\alpha)\}" /> が、<InlineMath math="2n" /> 次元の滑らかなアトラスをなすことを示す。
                </p>
                <p className="mt-2">
                    2つのチャート <InlineMath math="(U_\alpha, x)" /> と <InlineMath math="(U_\beta, y)" /> が交わる部分 <InlineMath math="U_\alpha \cap U_\beta" /> での座標変換を考える。
                    接ベクトル <InlineMath math="v" /> の成分 <InlineMath math="(v^1_x, \ldots, v^n_x)" /> と <InlineMath math="(v^1_y, \ldots, v^n_y)" /> の間には、連鎖律（ヤコビ行列）による関係
                </p>
                <BlockMath math="v^i_y = \sum_{j=1}^n \frac{\partial y^i}{\partial x^j}(p) v^j_x" />
                <p className="mt-2">
                    が成り立つ。すなわち、<InlineMath math="TM" /> の座標変換は
                </p>
                <BlockMath math="(x, v_x) \mapsto \left( y(x), \frac{\partial y}{\partial x}(x) v_x \right)" />
                <p className="mt-2">
                    で与えられる。ここで <InlineMath math="y(x)" /> は滑らかであり、ヤコビ行列 <InlineMath math="\partial y / \partial x" /> も <InlineMath math="x" /> について滑らかであるため、この座標変換は <InlineMath math="\mathbb{R}^{2n}" /> の開集合間の滑らかな微分同相写像となる。
                </p>
                <p className="mt-2">
                    また、この座標変換の第2成分（ファイバー方向）は <InlineMath math="v_x" /> について線形であり、その変換行列（遷移関数）がヤコビ行列 <InlineMath math="J(x) = \partial y / \partial x \in GL_n(\mathbb{R})" /> そのものである。
                    したがって、<InlineMath math="TM" /> はランク <InlineMath math="n" /> のベクトル束の条件を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                接束が「自明束」（大域的に直積 <InlineMath math="M \times \mathbb{R}^n" /> と同相）になるかどうかは、多様体のトポロジーに深く関係しています。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (円周の接束)">
                <p>
                    円周 <InlineMath math="S^1" /> の接束 <InlineMath math="TS^1" /> は自明束である。すなわち、<InlineMath math="TS^1 \cong S^1 \times \mathbb{R}" /> が成り立つ。
                </p>
                <p className="mt-2">
                    これは、<InlineMath math="S^1" /> 上には大域的にどこでも零にならない接ベクトル場（例えば、反時計回りの単位速度ベクトル場 <InlineMath math="\partial/\partial\theta" />）が存在するためである。
                    各点 <InlineMath math="p \in S^1" /> において、接ベクトル <InlineMath math="v \in T_pS^1" /> は <InlineMath math="v = c (\partial/\partial\theta|_p)" /> と一意に表せるため、対応 <InlineMath math="v \mapsto (p, c)" /> が大域的な微分同相写像を与える。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="毛玉定理（Hairy Ball Theorem）">
                <p>
                    円周 <InlineMath math="S^1" /> とは異なり、2次元球面 <InlineMath math="S^2" /> の接束 <InlineMath math="TS^2" /> は自明束ではありません。
                    これは有名な「毛玉定理」として知られる事実で、「球面上の連続な接ベクトル場は、必ずどこかで零（特異点）になる」という定理です。
                    直感的には、「毛の生えたボールを、つむじを作らずにきれいに梳かすことはできない」ということです。
                    このため、<InlineMath math="S^2" /> 上には大域的な非零ベクトル場が存在せず、<InlineMath math="TS^2" /> は <InlineMath math="S^2 \times \mathbb{R}^2" /> とは微分同相になりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル場</h2>

            <p className="leading-relaxed">
                接束が定義できたことで、多様体上の「ベクトル場」を、接束の「切断」として厳密に定義することができます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-2 (ベクトル場)">
                <p>
                    多様体 <InlineMath math="M" /> 上の<strong>滑らかなベクトル場（smooth vector field）</strong>とは、接束 <InlineMath math="TM" /> の滑らかな切断 <InlineMath math="X : M \to TM" /> のことである。
                    すなわち、各点 <InlineMath math="p \in M" /> に対して接ベクトル <InlineMath math="X(p) \in T_pM" /> を滑らかに割り当てる写像である。
                </p>
                <p className="mt-2">
                    <InlineMath math="M" /> 上の滑らかなベクトル場全体の集合を <InlineMath math="\mathfrak{X}(M)" /> と表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いると、ベクトル場 <InlineMath math="X" /> は各点において基底 <InlineMath math="\partial/\partial x^i" /> の線形結合として表せます。
            </p>

            <ContentBox type="example" title="Example 3.4-2">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上のベクトル場 <InlineMath math="X" /> は、滑らかな関数 <InlineMath math="a^i(x)" /> を用いて
                </p>
                <BlockMath math="X = \sum_{i=1}^n a^i(x) \frac{\partial}{\partial x^i}" />
                <p className="mt-2">
                    と表される。
                </p>
                <p className="mt-2">
                    例えば、<InlineMath math="\mathbb{R}^2" /> 上のベクトル場 <InlineMath math="X(x,y) = -y \frac{\partial}{\partial x} + x \frac{\partial}{\partial y}" /> を考える。
                    点 <InlineMath math="(x,y)" /> におけるベクトルは <InlineMath math="(-y, x)" /> であり、これは位置ベクトル <InlineMath math="(x,y)" /> と直交する。
                    したがって、このベクトル場は原点を中心とする反時計回りの回転を表すベクトル場である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ベクトル場の全体 <InlineMath math="\mathfrak{X}(M)" /> は、単なる実ベクトル空間以上の代数構造を持っています。関数を掛けても再びベクトル場になるという性質です。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-2">
                <p>
                    <InlineMath math="M" /> 上の滑らかなベクトル場全体 <InlineMath math="\mathfrak{X}(M)" /> は、<InlineMath math="C^\infty(M)" /> 上の加群（module）をなす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="X, Y \in \mathfrak{X}(M)" /> とし、<InlineMath math="f \in C^\infty(M)" /> とする。
                    和 <InlineMath math="X + Y" /> と、関数によるスカラー倍 <InlineMath math="fX" /> を、各点 <InlineMath math="p \in M" /> において
                </p>
                <BlockMath math="(X + Y)(p) = X(p) + Y(p) \in T_pM" />
                <BlockMath math="(fX)(p) = f(p)X(p) \in T_pM" />
                <p className="mt-2">
                    と定義する。これらが滑らかな切断になることは、局所座標表示
                </p>
                <BlockMath math="X = \sum a^i \frac{\partial}{\partial x^i}, \quad Y = \sum b^i \frac{\partial}{\partial x^i}" />
                <p className="mt-2">
                    において、<InlineMath math="X + Y = \sum (a^i + b^i) \frac{\partial}{\partial x^i}" /> および <InlineMath math="fX = \sum (f a^i) \frac{\partial}{\partial x^i}" /> となり、係数関数がすべて滑らかであることから従う。
                    また、加群の公理（分配律や結合律など）は、各点のベクトル空間 <InlineMath math="T_pM" /> における性質から各点ごとに満たされる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>接束 <InlineMath math="TM" /> は、多様体のすべての接空間を集めた <InlineMath math="2n" /> 次元の多様体であり、ランク <InlineMath math="n" /> のベクトル束である。</li>
                    <li>接束の局所自明化の遷移関数は、座標変換のヤコビ行列で与えられる。</li>
                    <li>ベクトル場は接束の滑らかな切断として定義され、その全体 <InlineMath math="\mathfrak{X}(M)" /> は関数環 <InlineMath math="C^\infty(M)" /> 上の加群をなす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
