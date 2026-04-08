import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompleteOrthonormalSystemsAndParseval() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだベッセルの不等式において、射影成分の和が「もとのベクトルの長さ」にぴったり一致する場合を考えます。これは、用意した正規直交系が空間全体を表現するのに十分な「完全な座標軸」として機能していることを意味します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全正規直交系</h2>

            <p>
                空間内に直交する余地を残さないような「最大の」正規直交系を定義します。
            </p>

            <ContentBox type="definition" title="Definition 7.4-1 (完全正規直交系)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> における正規直交系 <InlineMath math="\{e_\lambda\}" /> が、次を満たすときこれを<b>完全正規直交系（complete orthonormal system, CONS）</b>、または（正規化された）<b>ヒルベルト空間の基底</b>という。<br />
                    任意の <InlineMath math="x \in H" /> に対して、
                </p>
                <BlockMath math="\langle x, e_\lambda \rangle = 0 \quad (\text{すべての } \lambda) \implies x = 0" />
                <p>
                    すなわち、すべての基底と直交するベクトルは、ゼロベクトルしかないことである。
                </p>
            </ContentBox>

            <p>
                この「完全性」の条件は、ベッセルの不等式が等式に変わるための必要十分条件を与えます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (パーセバルの等式)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の可算な正規直交系 <InlineMath math="\{e_n\}" /> が完全であることと、任意の <InlineMath math="x \in H" /> に対して次の<b>パーセバルの等式（Parseval's identity）</b>が成り立つことは同値である。
                </p>
                <BlockMath math="\|x\|^2 = \sum_{n=1}^\infty |\langle x, e_n \rangle|^2" />
                <p>
                    また、同値な条件として、任意の <InlineMath math="x \in H" /> が次のように固有のフーリエ直交級数として（ノルムの極限の意味で）一意に展開できることが挙げられる。
                </p>
                <BlockMath math="x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n" />
            </ContentBox>

            <p>
                この等式は、前節で示したベッセルの不等式を極限へ拡張することで証明されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    完全性から展開可能性を示す。<InlineMath math="s_N = \sum_{n=1}^N \langle x, e_n \rangle e_n" /> とする。前節のベッセルの不等式の証明中で示したように、<InlineMath math="\sum |\langle x, e_n \rangle|^2 \leq \|x\|^2 < \infty" /> であるから、元の級数 <InlineMath math="\sum \langle x, e_n \rangle e_n" /> はヒルベルト空間内で収束する（ピタゴラスの定理によりコーシー列となるため完備性より収束が保証される）。<br />
                    その極限を <InlineMath math="s = \sum_{n=1}^\infty \langle x, e_n \rangle e_n \in H" /> とする。このとき、任意の <InlineMath math="e_k" /> に対して内積をとると、
                </p>
                <BlockMath math="\begin{aligned}
                    \langle x - s, e_k \rangle &= \langle x, e_k \rangle - \left\langle \sum_{n=1}^\infty \langle x, e_n \rangle e_n, e_k \right\rangle \\
                    &= \langle x, e_k \rangle - \langle x, e_k \rangle = 0
                \end{aligned}" />
                <p>
                    <InlineMath math="x - s" /> はすべての <InlineMath math="e_k" /> と直交するため、完全性の定義より <InlineMath math="x - s = 0" />、すなわち <InlineMath math="x = \sum_{n=1}^\infty \langle x, e_n \rangle e_n" /> を得る。展開可能性から、ノルムの連続性により <InlineMath math="\|x\|^2 = \sum_{n=1}^\infty |\langle x, e_k \rangle|^2" />（パーセバルの等式）が直ちに従う。<br />
                    逆に、パーセバルの等式が成り立つと仮定する。ある <InlineMath math="x \in H" /> がすべての <InlineMath math="e_n" /> に対して直交していれば、<InlineMath math="\langle x, e_n \rangle = 0" /> である。等式に代入すれば <InlineMath math="\|x\|^2 = 0" /> となり、<InlineMath math="x=0" /> を得る。よって系は完全である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                前節で計算したフーリエ係数をパーセバルの等式に当てはめると、解析学における有名な結果が自然に導出されます。
            </p>

            <ContentBox type="example" title="Example 7.4-1">
                <p>
                    <InlineMath math="L^2[-\pi, \pi]" /> のフーリエ基底 <InlineMath math="\{e_n(x) = \frac{1}{\sqrt{2\pi}} e^{inx}\}" /> は完全正規直交系であることが知られている。<br />
                    前節の Example 7.3-3 において、関数 <InlineMath math="f(x) = x" /> のベッセルの不等式を計算したが、完全性によりこれはパーセバルの等式となり、以下の有名な級数の和（バーゼル問題）が得られる。
                </p>
                <BlockMath math="\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}" />
                <p>
                    このように、パーセバルの等式は「関数の持つ『エネルギー』の総量は、すべての周波数成分の『エネルギー』の総和に等しい」という物理的な直感を数学的に定式化したものと解釈される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可分ヒルベルト空間の構造</h2>

            <p>
                ヒルベルト空間が「可算個の」完全正規直交系を持つとき、その空間の構造は本質的に数列空間 <InlineMath math="\ell^2" /> と全く同じものとして扱えるという驚くべき強力な定理を紹介します。
            </p>

            <ContentBox type="definition" title="Definition 7.4-2 (可分空間)">
                <p>
                    位相空間が可算稠密部分集合を持つとき、その空間を<b>可分（separable）</b>であるという。<br />
                    ヒルベルト空間においては、グラム-シュミットの直交化法により、空間が可分であることと「高々可算個の完全正規直交系を持つこと」が同値となる。
                </p>
            </ContentBox>

            <p>
                この可分性の定義を踏まえると、抽象的なヒルベルト空間が実は非常に具体的な姿をしていることが明らかになります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-2">
                <p>
                    無限次元の可分なヒルベルト空間 <InlineMath math="H" /> は、等長同型（内積を保つ全単射な線形作用素が存在する）の意味で、数列空間 <InlineMath math="\ell^2" /> と同型である。すなわち、
                </p>
                <BlockMath math="H \cong \ell^2" />
            </ContentBox>

            <p>
                この等長同型写像は、まさに「各基底方向の成分（フーリエ係数）を取り出して並べる」という操作によって具体的に構成されます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="H" /> は可分であるから、可算な完全正規直交系 <InlineMath math="\{e_n\}_{n=1}^\infty" /> を持つ。<br />
                    任意の要素 <InlineMath math="x \in H" /> に対し、パーセバルの等式より <InlineMath math="\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|^2 < \infty" /> である。<br />
                    したがって、写像 <InlineMath math="\Phi : H \to \ell^2" /> を
                </p>
                <BlockMath math="\Phi(x) = (\langle x, e_1 \rangle, \langle x, e_2 \rangle, \dots)" />
                <p>
                    と定義すると、これは <InlineMath math="H" /> から <InlineMath math="\ell^2" /> へのよく定義された写像となる。<br />
                    <InlineMath math="\Phi" /> の線形性は内積の性質から直ちに従い、パーセバルの等式 <InlineMath math="\|x\|_H^2 = \|\Phi(x)\|_{\ell^2}^2" /> によって等長性が保証される。等長な線形写像は単射である。<br />
                    さらに、任意の数列 <InlineMath math="(c_n) \in \ell^2" /> に対して、級数 <InlineMath math="x = \sum c_n e_n" /> は <InlineMath math="H" /> 内のコーシー列となるため収束し、その元 <InlineMath math="x" /> について <InlineMath math="\Phi(x) = (c_n)" /> となる。よって <InlineMath math="\Phi" /> は全射でもある。<br />
                    ゆえに <InlineMath math="\Phi" /> は <InlineMath math="H" /> と <InlineMath math="\ell^2" /> の間の等長同型を与える。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この同型定理の威力は、複雑な関数空間の構造を、単純な数列の世界へ完全に翻訳できる点にあります。
            </p>

            <ContentBox type="example" title="Example 7.4-2">
                <p>
                    <InlineMath math="\mathbb{R}" /> 上のルベーグ可積分な関数空間 <InlineMath math="L^2(\mathbb{R})" /> などは、多項式による近似性などから可分なヒルベルト空間であることが知られている。<br />
                    したがって、先の定理により <InlineMath math="L^2(\mathbb{R}) \cong \ell^2" /> が成り立つ。<br />
                    関数という「連続的な」情報を持つ空間が、数列という「離散的な」情報を並べた空間と完全に一対一対応し、内積構造まで一致するというのは、抽象的な関数解析の際立った成果の一つである。
                </p>
            </ContentBox>

            <p>
                この同型対応は、単なる数学的な事実にとどまらず、応用上も極めて重要な視点を提供します。
            </p>

            <ContentBox type="remark" title="同型定理とフーリエ解析">
                <p>
                    この同型定理は、3-4 フーリエ解析の抽象的な基礎を与えています。「関数を波の重ね合わせで表現する」という操作は、ヒルベルト空間の「ベクトルを基底で展開する」ことに他ならず、その係数を並べた数列（スペクトル）の世界で計算を行うことが正当化されるのです。
                </p>
            </ContentBox>

            <p>
                完全正規直交系の性質と、それがもたらす驚くべき空間構造についての要点を確認しましょう。
            </p>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>空間のすべての元を表現し尽くせる正規直交系を完全正規直交系とよぶ。</li>
                    <li>完全正規直交系の存在は、ノルムに対するパーセバルの等式が成り立つことと同値である。</li>
                    <li>無限次元で可分なヒルベルト空間はすべて、数列の空間 <InlineMath math="\ell^2" /> と等長同型である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
