import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfCurves() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                フルネ＝セレの公式から、曲線の形は曲率 <InlineMath math="\kappa(s)" /> と捩率 <InlineMath math="\tau(s)" /> によって完全に支配されていることがわかりました。この章では、これを数学的な定理として確立する「曲線の基本定理」を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">曲線の基本定理</h2>

            <p className="leading-relaxed">
                任意の滑らかな関数 <InlineMath math="\kappa(s)" /> と <InlineMath math="\tau(s)" /> を与えたとき、それを曲率と捩率に持つ曲線が（空間内の位置と向きを除いて）ただ一つ存在するというのが、曲線の基本定理です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.5-1 (曲線の基本定理)"
            >
                <p>
                    <InlineMath math="I \subset \mathbb{R}" /> を開区間とし、<InlineMath math="s_0 \in I" /> を基準点とする。
                    空間内の点 <InlineMath math="P_0 \in \mathbb{R}^3" /> と、右手系の正規直交基底をなす3つのベクトル <InlineMath math="\{T_0, N_0, B_0\}" /> が与えられたとする。
                    さらに、<InlineMath math="I" /> 上の滑らかな関数 <InlineMath math="\kappa(s) > 0" /> および <InlineMath math="\tau(s)" /> が与えられたとする。
                </p>
                <p>
                    このとき、次の条件を満たす弧長パラメータ付き正則曲線 <InlineMath math="\alpha : I \to \mathbb{R}^3" /> が<strong>ただ一つ（一意に）存在する</strong>。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>初期位置：<InlineMath math="\alpha(s_0) = P_0" /></li>
                    <li>初期標構：<InlineMath math="\{T(s_0), N(s_0), B(s_0)\} = \{T_0, N_0, B_0\}" /></li>
                    <li>任意の <InlineMath math="s \in I" /> について、曲率が <InlineMath math="\kappa(s)" />、捩率が <InlineMath math="\tau(s)" /></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    この定理は、常微分方程式の解の存在と一意性の定理（ピカール・リンデレフの定理）の直接の帰結である。
                </p>
                <p>
                    まず、未知のベクトル関数 <InlineMath math="X(s) = (T(s), N(s), B(s))^T" /> に関する線形常微分方程式（フルネ＝セレの公式）を考える。
                    <BlockMath math="\frac{d}{ds} \begin{pmatrix} T \\ N \\ B \end{pmatrix} = \begin{pmatrix} 0 & \kappa(s) & 0 \\ -\kappa(s) & 0 & \tau(s) \\ 0 & -\tau(s) & 0 \end{pmatrix} \begin{pmatrix} T \\ N \\ B \end{pmatrix}" />
                    係数行列は <InlineMath math="s" /> に関して滑らかであるため、初期条件 <InlineMath math="(T_0, N_0, B_0)^T" /> を満たす解 <InlineMath math="\{T(s), N(s), B(s)\}" /> が <InlineMath math="I" /> 全体で一意に存在する。
                </p>
                <p>
                    係数行列が歪対称である性質から、解のベクトル組は常に正規直交基底であり続けることが示される。特に <InlineMath math="|T(s)| = 1" /> である。
                </p>
                <p>
                    最後に、得られた <InlineMath math="T(s)" /> を用いて曲線の位置を構成する。
                    <BlockMath math="\alpha(s) = P_0 + \int_{s_0}^s T(u)\,du" />
                    この <InlineMath math="\alpha(s)" /> は <InlineMath math="\alpha'(s) = T(s)" /> を満たし、<InlineMath math="|T(s)| = 1" /> より弧長パラメータ付き曲線となる。その構成から、曲率が <InlineMath math="\kappa(s)" />、捩率が <InlineMath math="\tau(s)" /> になることは明らかである。これで存在と一意性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.5-1 (<InlineMath math="\kappa = 1/r, \tau = 0" /> の曲線)</span>}
            >
                <p>
                    曲率が正の定数 <InlineMath math="\kappa(s) = 1/r" />、捩率が常に <InlineMath math="\tau(s) = 0" /> であるような曲線を考える。
                </p>
                <p>
                    Example 1.2-1 および Example 1.3-2 の考察から、半径 <InlineMath math="r" /> の平面円は確かにこの曲率と捩率を持つ。
                    曲線の基本定理より、この曲率と捩率を持つ曲線は初期条件を揃えればただ一つに決まる。したがって、「曲率が一定で捩率がゼロの曲線は、空間内の円（の一部）に限られる」ことが結論づけられる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">曲線の合同定理</h2>

            <p className="leading-relaxed">
                曲線の基本定理において初期条件 <InlineMath math="P_0" /> と <InlineMath math="\{T_0, N_0, B_0\}" /> の違いは、空間内での「位置」と「向き」の違いに過ぎません。したがって、曲率と捩率が等しい曲線は、空間内で重ね合わせることができます。
            </p>

            <ContentBox
                type="corollary"
                title="Corollary 1.5-1 (曲線の合同定理)"
            >
                <p>
                    2つの弧長パラメータ付き正則曲線 <InlineMath math="\alpha(s), \beta(s)" /> が、すべての <InlineMath math="s" /> で同じ曲率 <InlineMath math="\kappa(s) > 0" /> と捩率 <InlineMath math="\tau(s)" /> を持つとする。
                </p>
                <p>
                    このとき、<InlineMath math="\alpha" /> と <InlineMath math="\beta" /> は<strong>剛体運動（回転と平行移動の組み合わせ）</strong>によって互いに移り合う。すなわち、ある回転行列 <InlineMath math="R" /> と並進ベクトル <InlineMath math="\mathbf{v}" /> が存在して、
                    <BlockMath math="\beta(s) = R\alpha(s) + \mathbf{v}" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    ある基準点 <InlineMath math="s_0" /> において、曲線 <InlineMath math="\alpha" /> の点と標構を <InlineMath math="P_\alpha, \{T_\alpha, N_\alpha, B_\alpha\}" />、曲線 <InlineMath math="\beta" /> のものを <InlineMath math="P_\beta, \{T_\beta, N_\beta, B_\beta\}" /> とする。
                </p>
                <p>
                    空間内の剛体運動（等長変換）を適切に選べば、<InlineMath math="P_\alpha" /> を <InlineMath math="P_\beta" /> に重ね合わせ、かつ正規直交標構 <InlineMath math="\{T_\alpha, N_\alpha, B_\alpha\}" /> を <InlineMath math="\{T_\beta, N_\beta, B_\beta\}" /> にぴったり重ねることができる（どちらも右手系だから可能）。
                </p>
                <p>
                    剛体運動を施した後の <InlineMath math="\alpha" />（これを <InlineMath math="\tilde{\alpha}" /> とする）は、<InlineMath math="\beta" /> と全く同じ初期条件（位置と標構）を持つことになる。剛体運動では曲率も捩率も変化しないため、<InlineMath math="\tilde{\alpha}" /> と <InlineMath math="\beta" /> の <InlineMath math="\kappa(s), \tau(s)" /> は等しいままである。
                </p>
                <p>
                    曲線の基本定理の一意性より、同じ初期条件と微分方程式を持つ曲線は完全に一致する。したがって <InlineMath math="\tilde{\alpha}(s) = \beta(s)" /> となり、2曲線が剛体運動で重なることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.5-2 (平面曲線の特徴づけ)"
            >
                <p>
                    捩率が常にゼロ（<InlineMath math="\tau(s) \equiv 0" />）であるような曲線は、すべて平面曲線になることを確認する。
                </p>
                <p>
                    <InlineMath math="\tau = 0" /> のとき、フルネ＝セレの第3式より <InlineMath math="B'(s) = \mathbf{0}" /> となる。これは従法線ベクトル <InlineMath math="B(s)" /> が定数ベクトル <InlineMath math="B_0" /> であることを意味する。
                </p>
                <p>
                    曲線の位置ベクトル <InlineMath math="\alpha(s)" /> と <InlineMath math="B_0" /> の内積を微分すると、
                    <BlockMath math="\frac{d}{ds} (\alpha(s) \cdot B_0) = \alpha'(s) \cdot B_0 = T(s) \cdot B_0 = 0" />
                    となる（<InlineMath math="T" /> と <InlineMath math="B" /> の直交性より）。
                </p>
                <p>
                    導関数が <InlineMath math="0" /> なので、<InlineMath math="\alpha(s) \cdot B_0 = c" />（定数）となる。これは曲線 <InlineMath math="\alpha(s)" /> が、法線ベクトルを <InlineMath math="B_0" /> とし原点からの距離が <InlineMath math="c" /> であるような平面内に完全に収まっていることを示している。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>曲率 <InlineMath math="\kappa(s) > 0" /> と捩率 <InlineMath math="\tau(s)" /> を指定すると、それを満たす曲線が初期条件（位置と向き）を除いて一意に存在する（曲線の基本定理）。</li>
                    <li>したがって、曲率と捩率が等しい2つの曲線は、回転と平行移動（剛体運動）でぴったり重ね合わせることができる（合同定理）。</li>
                    <li>特に、<InlineMath math="\tau \equiv 0" /> は曲線が平面曲線になるための必要十分条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}