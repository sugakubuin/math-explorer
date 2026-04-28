import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorBundles() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体の各点には接空間と呼ばれるベクトル空間が付随していることを見ました。
                これら各点の接空間をすべて集めて一つの大きな空間（接束）を作りたいのですが、そのためには「多様体の各点にベクトル空間が乗っかっている」という構造を一般的に定式化しておく必要があります。
                この概念が<strong>ベクトル束（Vector bundle）</strong>です。ベクトル束は、接束や余接束、テンソル束などを統一的に扱うための強力な枠組みを提供します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトル束の定義</h2>

            <p className="leading-relaxed">
                ベクトル束は、直感的には「多様体 <InlineMath math="M" /> の各点 <InlineMath math="p" /> に <InlineMath math="k" /> 次元のベクトル空間 <InlineMath math="E_p" /> が生えている空間」です。
                しかし、単に集合として集めるだけでなく、それらが「滑らかに」繋がっていなければなりません。これを保証するのが「局所自明性（local triviality）」という条件です。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (ベクトル束)">
                <p>
                    滑らかな多様体 <InlineMath math="E" />（<strong>全空間</strong>、total space）と <InlineMath math="M" />（<strong>底空間</strong>、base space）、および滑らかな全射 <InlineMath math="\pi : E \to M" />（<strong>射影</strong>、projection）の組 <InlineMath math="(E, M, \pi)" /> が、ランク <InlineMath math="k" /> の<strong>ベクトル束（vector bundle）</strong>であるとは、以下の条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>
                        各点 <InlineMath math="p \in M" /> に対して、その逆像 <InlineMath math="E_p = \pi^{-1}(p)" />（<strong>ファイバー</strong>、fiber と呼ぶ）は <InlineMath math="k" /> 次元の実ベクトル空間の構造を持つ。
                    </li>
                    <li>
                        （局所自明性）各点 <InlineMath math="p \in M" /> はある開近傍 <InlineMath math="U \subset M" /> を持ち、微分同相写像 <InlineMath math="\Phi : \pi^{-1}(U) \to U \times \mathbb{R}^k" /> が存在して、以下の図式を可換にする。
                        すなわち、任意の <InlineMath math="e \in \pi^{-1}(U)" /> に対して <InlineMath math="\Phi(e) = (\pi(e), \phi_{\pi(e)}(e))" /> の形をしており、各 <InlineMath math="q \in U" /> において制限写像 <InlineMath math="\phi_q : E_q \to \mathbb{R}^k" /> はベクトル空間の線形同型写像である。
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed">
                この定義における微分同相写像 <InlineMath math="\Phi" /> と開集合 <InlineMath math="U" /> の組 <InlineMath math="(U, \Phi)" /> を<strong>局所自明化（local trivialization）</strong>と呼びます。
                局所自明化は、多様体におけるチャート（座標近傍）のベクトル束版と考えることができます。局所的には、ベクトル束は単なる直積空間 <InlineMath math="U \times \mathbb{R}^k" /> と同じ構造を持っています。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (自明束とメビウスの帯)">
                <p>
                    <strong>自明束（Trivial bundle）</strong>
                </p>
                <p className="mt-2">
                    最も単純なベクトル束は、大域的に直積となっている空間 <InlineMath math="E = M \times \mathbb{R}^k" /> である。
                    射影を <InlineMath math="\pi(p, v) = p" /> とし、ファイバーの線形構造を <InlineMath math="\mathbb{R}^k" /> のものとすれば、これはランク <InlineMath math="k" /> のベクトル束となる。これを自明束と呼ぶ。
                </p>
                <p className="mt-4">
                    <strong>メビウスの帯（Möbius strip）</strong>
                </p>
                <p className="mt-2">
                    円周 <InlineMath math="S^1" /> を底空間とするランク1のベクトル束（直線束、line bundle）の例として、メビウスの帯がある。
                    これは <InlineMath math="[0,1] \times \mathbb{R}" /> において、両端を <InlineMath math="(0, v) \sim (1, -v)" /> という関係で貼り合わせて得られる空間である。
                </p>
                <p className="mt-2">
                    局所的には（例えば <InlineMath math="(0, 1) \times \mathbb{R}" /> の部分では）自明束 <InlineMath math="(0,1) \times \mathbb{R}" /> と同相だが、大域的には「ひねり」が入っているため自明束 <InlineMath math="S^1 \times \mathbb{R}" />（円柱面）とは微分同相にならない。これは非自明なベクトル束の代表例である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">遷移関数と切断</h2>

            <p className="leading-relaxed">
                多様体がアトラス（チャートの集まり）によって記述されるように、ベクトル束も局所自明化の集まりによって記述されます。
                2つの局所自明化が重なる部分では、ファイバーの座標がどのように変換されるかを記述する「遷移関数」が現れます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-3 (遷移関数)">
                <p>
                    ベクトル束 <InlineMath math="E" /> の2つの局所自明化 <InlineMath math="(U_\alpha, \Phi_\alpha)" /> と <InlineMath math="(U_\beta, \Phi_\beta)" /> があり、<InlineMath math="U_\alpha \cap U_\beta \neq \emptyset" /> とする。
                    この共通部分上の点 <InlineMath math="p" /> において、2つの自明化はファイバー <InlineMath math="E_p" /> と <InlineMath math="\mathbb{R}^k" /> の間の2つの同型写像 <InlineMath math="\phi_{\alpha,p}" /> と <InlineMath math="\phi_{\beta,p}" /> を与える。
                </p>
                <p className="mt-2">
                    このとき、合成写像 <InlineMath math="g_{\alpha\beta}(p) = \phi_{\alpha,p} \circ \phi_{\beta,p}^{-1} : \mathbb{R}^k \to \mathbb{R}^k" /> は一般線形群 <InlineMath math="GL_k(\mathbb{R})" /> の元となる。
                    これにより定まる滑らかな写像
                </p>
                <BlockMath math="g_{\alpha\beta} : U_\alpha \cap U_\beta \to GL_k(\mathbb{R})" />
                <p className="mt-2">
                    を<strong>遷移関数（transition function）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                遷移関数は、3つの自明化が重なる部分 <InlineMath math="U_\alpha \cap U_\beta \cap U_\gamma" /> において、<strong>コサイクル条件（cocycle condition）</strong>と呼ばれる関係式を満たします。
            </p>
            <BlockMath math="g_{\alpha\beta}(p) g_{\beta\gamma}(p) = g_{\alpha\gamma}(p)" />
            <p className="leading-relaxed">
                逆に、底空間 <InlineMath math="M" /> の開被覆 <InlineMath math="\{U_\alpha\}" /> と、コサイクル条件を満たす遷移関数の族 <InlineMath math="\{g_{\alpha\beta}\}" /> が与えられれば、それらを貼り合わせることでベクトル束を再構成することができます。
            </p>

            <p className="leading-relaxed">
                次に、ベクトル束における「ベクトル場」の一般化である「切断」を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-4 (切断)">
                <p>
                    ベクトル束 <InlineMath math="\pi : E \to M" /> の<strong>切断（section）</strong>とは、滑らかな写像 <InlineMath math="s : M \to E" /> であって、任意の <InlineMath math="p \in M" /> に対して
                </p>
                <BlockMath math="\pi(s(p)) = p \quad (\text{すなわち } \pi \circ s = \mathrm{id}_M)" />
                <p className="mt-2">
                    を満たすもののことである。これは、各点 <InlineMath math="p" /> に対してその上のファイバー <InlineMath math="E_p" /> の元を一つ割り当てる規則に他ならない。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                任意のベクトル束には、常に <InlineMath math="s(p) = 0 \in E_p" /> を割り当てる<strong>零切断（zero section）</strong>が存在します。
                しかし、どこでも零にならないような切断が存在するかどうかは、ベクトル束の「ひねり」具合（非自明性）に依存します。
            </p>

            <ContentBox type="example" title="Example 3.3-2 (メビウスの帯の切断)">
                <p>
                    Example 3.3-1 で考えたメビウスの帯 <InlineMath math="E \to S^1" /> を考える。
                    このベクトル束は、円周 <InlineMath math="S^1" /> を2つの開区間 <InlineMath math="U_1, U_2" />（少し重なりを持つ半円）で被覆したとき、重なりの一方の成分では遷移関数が <InlineMath math="g_{12}(p) = 1" />、もう一方の成分では <InlineMath math="g_{12}(p) = -1" />（ひねり）となるように構成できる。
                </p>
                <p className="mt-2">
                    もし大域的に零にならない切断 <InlineMath math="s" /> が存在したとすると、各局所自明化において <InlineMath math="s" /> は実数値関数 <InlineMath math="s_1 : U_1 \to \mathbb{R} \setminus \{0\}" /> および <InlineMath math="s_2 : U_2 \to \mathbb{R} \setminus \{0\}" /> で表される。
                    しかし、重なり部分において <InlineMath math="s_1(p) = g_{12}(p) s_2(p)" /> が成り立たなければならない。
                    <InlineMath math="g_{12}" /> が <InlineMath math="1" /> から <InlineMath math="-1" /> に変わるため、<InlineMath math="s_1, s_2" /> の符号が連続的に保たれず、中間値の定理によりどこかで必ず <InlineMath math="0" /> にならざるを得ない。
                </p>
                <p className="mt-2">
                    したがって、メビウスの帯は大域的に零にならない切断を持たない。このことは、メビウスの帯が自明束（円柱面）ではないことの証明にもなっている。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ファイバー束への拡張">
                <p>
                    ベクトル束は、各点に乗っている空間（ファイバー）がベクトル空間であるような構造でした。
                    このファイバーを一般の多様体や群に置き換えることで、より一般的な「ファイバー束（fiber bundle）」や「主束（principal bundle）」の概念が得られます。
                    これらは、微分幾何II（4-6）で学ぶ接続の理論や、現代物理学におけるゲージ理論の数学的基礎となる極めて重要な概念です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベクトル束は、多様体の各点にベクトル空間（ファイバー）が滑らかに付随している構造である。</li>
                    <li>局所的には直積空間 <InlineMath math="U \times \mathbb{R}^k" /> と同じ構造を持つ（局所自明性）。</li>
                    <li>局所自明化の貼り合わせは、<InlineMath math="GL_k(\mathbb{R})" /> に値をとる遷移関数 <InlineMath math="g_{\alpha\beta}" /> によって記述される。</li>
                    <li>切断とは、各点にその上のファイバーの元を割り当てる滑らかな写像であり、ベクトル場の一般化である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
