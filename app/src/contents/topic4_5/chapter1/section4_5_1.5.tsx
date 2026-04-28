import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PartitionOfUnity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                多様体は局所的にはユークリッド空間と同じですが、大域的には複雑な形をしています。
                多様体上で積分を定義したり、リーマン計量（各点での内積）を構成したりするためには、「局所的に定義された対象を、滑らかにつなぎ合わせて大域的な対象を作る」技術が必要です。
                そのための最も強力で標準的なツールが「1の分割（partition of unity）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">滑らかな1の分割の構成</h2>

            <p>
                1の分割とは、多様体全体で足し合わせると常に値が <InlineMath math="1" /> になるような、滑らかな関数の族のことです。
            </p>

            <ContentBox type="definition" title="Definition 1.5-1 (1の分割)">
                <p>
                    多様体 <InlineMath math="M" /> の開被覆 <InlineMath math="\{U_\alpha\}_{\alpha \in A}" /> に従属する <b>滑らかな1の分割（smooth partition of unity）</b> とは、<InlineMath math="M" /> 上の <InlineMath math="C^\infty" /> 級関数の族 <InlineMath math="\{\rho_\alpha\}_{\alpha \in A}" /> であり、以下の条件を満たすものをいう。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>非負性：</strong> 任意の <InlineMath math="p \in M" /> と <InlineMath math="\alpha \in A" /> に対して <InlineMath math="0 \le \rho_\alpha(p) \le 1" />。</li>
                    <li><strong>台の従属性：</strong> 各 <InlineMath math="\rho_\alpha" /> の台（support：関数値が <InlineMath math="0" /> でない点の閉包）は <InlineMath math="U_\alpha" /> に含まれる。<InlineMath math="\mathrm{supp}(\rho_\alpha) \subset U_\alpha" />。</li>
                    <li><strong>局所有限性：</strong> 任意の点 <InlineMath math="p \in M" /> は、有限個の <InlineMath math="\alpha" /> を除いて <InlineMath math="\rho_\alpha = 0" /> となるような開近傍を持つ。</li>
                    <li><strong>和が1：</strong> 任意の点 <InlineMath math="p \in M" /> において、<InlineMath math="\sum_{\alpha \in A} \rho_\alpha(p) = 1" />。（局所有限性により、この和は各点において実質的に有限和となるため well-defined である）。</li>
                </ol>
            </ContentBox>

            <p>
                このような関数族を構成するための第一歩は、特定の領域だけで正の値を持ち、それ以外では完全に <InlineMath math="0" /> になるような滑らかな関数（バンプ関数）を作ることです。
            </p>

            <ContentBox type="lemma" title="Lemma 1.5-1 (バンプ関数の存在)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上の任意のコンパクト集合 <InlineMath math="K" /> と、それを含む開近傍 <InlineMath math="U \supset K" /> に対して、<InlineMath math="K" /> 上で恒等的に <InlineMath math="1" /> となり、<InlineMath math="U" /> の外側で恒等的に <InlineMath math="0" /> となるような <InlineMath math="C^\infty" /> 級関数 <InlineMath math="\psi : \mathbb{R}^n \to [0,1]" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、1次元の基本的な滑らかな関数 <InlineMath math="f : \mathbb{R} \to \mathbb{R}" /> を次のように定義する：
                </p>
                <BlockMath math="f(t) = \begin{cases} e^{-1/t} & (t > 0) \\ 0 & (t \le 0) \end{cases}" />
                <p className="mt-2">
                    この関数は <InlineMath math="t=0" /> においてすべての階数の微係数が <InlineMath math="0" /> となるため、<InlineMath math="\mathbb{R}" /> 全体で <InlineMath math="C^\infty" /> 級である。
                    これを用いて、区間 <InlineMath math="[a, b]" /> で正の値を持ち、それ以外で <InlineMath math="0" /> になる関数 <InlineMath math="g(t) = f(t-a)f(b-t)" /> を作る。
                </p>
                <p className="mt-2">
                    さらにこれを積分して正規化することで、<InlineMath math="t \le a" /> で <InlineMath math="0" />、<InlineMath math="t \ge b" /> で <InlineMath math="1" /> となる滑らかな階段関数 <InlineMath math="h(t)" /> を構成できる。
                </p>
                <p className="mt-2">
                    <InlineMath math="\mathbb{R}^n" /> においては、原点を中心とする半径 <InlineMath math="r" /> の球上で <InlineMath math="1" />、半径 <InlineMath math="R" /> (<InlineMath math="R > r" />) の球の外で <InlineMath math="0" /> となる関数を <InlineMath math="\phi(x) = 1 - h(\|x\|)" /> のように構成できる。
                    コンパクト集合 <InlineMath math="K" /> はこのような球の有限個の和集合で覆うことができ、それらのバンプ関数を適切に組み合わせることで、求める関数 <InlineMath math="\psi" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                このバンプ関数と、位相多様体の定義で要求した「第二可算性」から導かれる「パラコンパクト性」を組み合わせることで、1の分割の存在定理が証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.5-1 (1の分割の存在定理)">
                <p>
                    滑らかな多様体 <InlineMath math="M" /> の任意の開被覆 <InlineMath math="\{U_\alpha\}_{\alpha \in A}" /> に対して、それに従属する滑らかな1の分割 <InlineMath math="\{\rho_\alpha\}_{\alpha \in A}" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位相空間論II（3-12）の結果より、第二可算かつ局所コンパクトなハウスドルフ空間はパラコンパクトである。したがって、多様体 <InlineMath math="M" /> はパラコンパクトである。
                </p>
                <p className="mt-2">
                    パラコンパクト性により、開被覆 <InlineMath math="\{U_\alpha\}" /> の局所有限な細分となるような、座標近傍からなる開被覆 <InlineMath math="\{V_i\}" /> を取ることができる。
                    各 <InlineMath math="V_i" /> はある <InlineMath math="U_{\alpha(i)}" /> に含まれる。
                </p>
                <p className="mt-2">
                    各 <InlineMath math="V_i" /> に対して、Lemma 1.5-1 で構成したような、<InlineMath math="V_i" /> の中で正の値を持ち、外で <InlineMath math="0" /> となるバンプ関数 <InlineMath math="\psi_i \ge 0" /> を構成する。
                    局所有限性により、任意の点 <InlineMath math="p \in M" /> の近傍で <InlineMath math="\psi_i(p) > 0" /> となる <InlineMath math="i" /> は有限個しかない。
                </p>
                <p className="mt-2">
                    そこで、和関数 <InlineMath math="\Psi(p) = \sum_i \psi_i(p)" /> を考えると、これは各点で有限和であるため <InlineMath math="C^\infty" /> 級であり、かつ被覆の性質から常に <InlineMath math="\Psi(p) > 0" /> である。
                </p>
                <p className="mt-2">
                    最後に、関数を正規化するために <InlineMath math="\tilde{\rho}_i(p) = \frac{\psi_i(p)}{\Psi(p)}" /> と定義する。
                    これを元の添字 <InlineMath math="\alpha" /> ごとにまとめ直し、<InlineMath math="\rho_\alpha = \sum_{\alpha(i)=\alpha} \tilde{\rho}_i" /> とすれば、求める1の分割が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1の分割の応用</h2>

            <p>
                抽象的な構成を見ましたが、具体的にどのように機能するのか、円周 <InlineMath math="S^1" /> の簡単な被覆で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.5-1">
                <p>
                    <strong><InlineMath math="S^1" /> 上の1の分割</strong>
                </p>
                <p className="mt-2">
                    円周 <InlineMath math="S^1" /> を、北極 <InlineMath math="N" /> を除く開集合 <InlineMath math="U_1 = S^1 \setminus \{N\}" /> と、南極 <InlineMath math="S" /> を除く開集合 <InlineMath math="U_2 = S^1 \setminus \{S\}" /> で被覆する。
                    角度座標 <InlineMath math="\theta \in [0, 2\pi)" /> を用いると、<InlineMath math="N" /> は <InlineMath math="\theta = \pi/2" />、<InlineMath math="S" /> は <InlineMath math="\theta = 3\pi/2" /> に対応する。
                </p>
                <p className="mt-2">
                    この被覆に従属する1の分割 <InlineMath math="\{\rho_1, \rho_2\}" /> は、次のように構成できる。
                    <InlineMath math="\rho_1(\theta)" /> は <InlineMath math="N" /> の近傍で <InlineMath math="0" /> となり、<InlineMath math="S" /> の近傍で <InlineMath math="1" /> となる滑らかな関数。
                    <InlineMath math="\rho_2(\theta)" /> はその逆で、<InlineMath math="N" /> の近傍で <InlineMath math="1" />、<InlineMath math="S" /> の近傍で <InlineMath math="0" /> となる滑らかな関数。
                </p>
                <p className="mt-2">
                    そして常に <InlineMath math="\rho_1(\theta) + \rho_2(\theta) = 1" /> を満たすようにする。
                    これにより、<InlineMath math="S^1" /> 全体で定義したい関数や微分形式を、<InlineMath math="U_1" /> 上の成分と <InlineMath math="U_2" /> 上の成分に滑らかに分割（<InlineMath math="f = \rho_1 f + \rho_2 f" />）して扱うことができる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="大域的構成への応用">
                <p>
                    1の分割は、多様体論において「局所的に定義されたものを大域的に貼り合わせる」ための最も強力な道具です。
                    以降の章で、次のような重要な構成において繰り返し用いられます。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>リーマン計量の存在：</strong> 各チャートで標準的な内積を定義し、1の分割で足し合わせることで、任意の多様体上にリーマン計量（微分幾何II）を構成できる。</li>
                    <li><strong>多様体上の積分：</strong> 多様体全体での積分（§6.3）を定義する際、被積分関数を1の分割で各チャートに切り分け、ユークリッド空間上の積分に帰着させる。</li>
                    <li><strong>埋め込み定理：</strong> 任意のコンパクト多様体が十分高次元のユークリッド空間に埋め込めること（ホイットニーの埋め込み定理）の証明に用いられる。</li>
                </ul>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>1の分割は、和が常に <InlineMath math="1" /> となるような、開被覆に従属する滑らかな関数の族である。</li>
                    <li>多様体が第二可算性（パラコンパクト性）を満たすため、任意の開被覆に対して1の分割が存在する。</li>
                    <li>1の分割を用いることで、局所的な座標系で構成した対象（計量や積分など）を滑らかに足し合わせ、大域的な対象を構成できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
