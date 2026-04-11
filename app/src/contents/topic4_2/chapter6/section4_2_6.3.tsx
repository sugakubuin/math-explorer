import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MittagLefflerTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだワイエルシュトラスの分解定理は「整関数の零点」の分布に関するものでした。本節では、これを「有理型関数の極」に関する結果であるミッタク-レフラー（Mittag-Leffler）の定理へと展開します。指定された極の場所と、そこでの特異な振る舞い（主要部）を満たすような有理型関数を自在に構成するための手法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ミッタク-レフラーの定理</h2>

            <p>
                有限個の極のみを与えられた場合は、その主要部の和を作れば有理関数として簡単に構成できます。しかし、極が離散的な無限個（例えばすべての整数点）ある場合、単純に主要部を無限に足し合わせると級数が発散してしまうかもしれません。ワイエルシュトラスの定理で指数関数の補正項を掛けたように、ここではテイラー多項式を引いて「補正」することで和を収束させます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (ミッタク-レフラーの定理)">
                <p>
                    複素数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> は <InlineMath math="0 < |a_1| \leq |a_2| \leq \cdots" /> を満たし、<InlineMath math="n \to \infty" /> のとき <InlineMath math="|a_n| \to \infty" /> となる離散的な点列とする（全て相異なるとする）。また、各 <InlineMath math="a_n" /> において、指定された <InlineMath math="1/(z-a_n)" /> の多項式
                </p>
                <BlockMath math="P_n\left(\frac{1}{z-a_n}\right) = \frac{c_{n,1}}{z-a_n} + \frac{c_{n,2}}{(z-a_n)^2} + \cdots + \frac{c_{n,m_n}}{(z-a_n)^{m_n}}" />
                <p>
                    が与えられているとする。さらに、原点 <InlineMath math="z=0" /> においても必要なら主要部 <InlineMath math="P_0(1/z)" /> が与えられているとする。
                </p>
                <p>
                    このとき、<InlineMath math="\mathbb{C}" /> 上の有理型関数 <InlineMath math="f(z)" /> であって、特異点集合がちょうど <InlineMath math="\{a_n\} \cup \{0\}" /> （またはその部分集合）に一致し、各極において指定された主要部 <InlineMath math="P_n" /> （および <InlineMath math="P_0" />）を持つものが必ず存在する。
                </p>
                <p>
                    関数 <InlineMath math="f(z)" /> の具体的な構成は、適当な多項式 <InlineMath math="Q_n(z)" />（<InlineMath math="P_n(1/(z-a_n))" /> のテイラー多項式）を選んで級数を収束させる形で以下のように与えられる。
                </p>
                <BlockMath math="f(z) = P_0\left(\frac{1}{z}\right) + \sum_{n=1}^\infty \left[ P_n\left(\frac{1}{z-a_n}\right) - Q_n(z) \right]" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の要点は、与えられた主要部 <InlineMath math="P_n(1/(z-a_n))" /> が原点 <InlineMath math="z=0" /> の近傍で正則であるため、そこでテイラー展開できる点にある。
                </p>
                <p>
                    各 <InlineMath math="n \geq 1" /> について、関数 <InlineMath math="H_n(z) = P_n(1/(z-a_n))" /> は円板 <InlineMath math="|z| < |a_n|" /> において正則である。したがってこの範囲でテイラー展開を持ち、その部分和（テイラー多項式）の列は <InlineMath math="H_n(z)" /> にコンパクト一様収束する。
                </p>
                <p>
                    コンパクト集合 <InlineMath math="K \subset \mathbb{C}" /> を固定し、ある <InlineMath math="R > 0" /> で <InlineMath math="K \subset \{|z| \leq R\}" /> となるように取る。<InlineMath math="|a_n| \to \infty" /> より、<InlineMath math="n" /> が十分大きければ <InlineMath math="|a_n| \geq 2R" /> となる。このとき <InlineMath math="K" /> 上の任意の <InlineMath math="z" /> に対して <InlineMath math="|z| \leq |a_n|/2" /> が成り立つ。
                </p>
                <p>
                    テイラー展開の部分和のうち、十分次数が高いものを選んで多項式 <InlineMath math="Q_n(z)" /> とする。具体的には、<InlineMath math="|z| \leq |a_n|/2" /> 上で
                </p>
                <BlockMath math="\left| P_n\left(\frac{1}{z-a_n}\right) - Q_n(z) \right| < \frac{1}{2^n}" />
                <p>
                    が成り立つように <InlineMath math="Q_n(z)" /> の次数を定めて選ぶことができる。（例えば誤差項の評価により保証される）。<InlineMath math="|a_n| < 2R" /> となる有限個の項については <InlineMath math="Q_n(z) = 0" /> としてよい。
                </p>
                <p>
                    このように選んだ補正項 <InlineMath math="Q_n(z)" /> を用いて級数
                </p>
                <BlockMath math="\sum_{n=1}^\infty \left[ P_n\left(\frac{1}{z-a_n}\right) - Q_n(z) \right]" />
                <p>
                    を考えると、<InlineMath math="n" /> が十分大きい部分では各項の絶対値が <InlineMath math="1/2^n" /> で抑えられるため、ワイエルシュトラスのM判定法によりこの級数は <InlineMath math="K" /> から極 <InlineMath math="a_n \in K" /> を除いた部分でコンパクト一様収束し有理型関数を定める。
                </p>
                <p>
                    <InlineMath math="K" /> は任意なので、この級数は <InlineMath math="\mathbb{C}" /> 全体で有理型関数となる。<InlineMath math="P_0(1/z)" /> や有限個の極の部分は単なる有理関数の和なので特異性の有無には影響せず、また全体として極は <InlineMath math="0" /> と <InlineMath math="a_n" /> のみにあり、<InlineMath math="Q_n(z)" /> は整関数（多項式）なので主要部を書き換えない。以上により定理の存在性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    ミッタク-レフラー展開の最も典型的な成功例が、余接関数に関する次の等式です。
                </p>
                <BlockMath math="\pi\cot(\pi z) = \frac{1}{z} + \sum_{n=1}^\infty \left( \frac{1}{z-n} + \frac{1}{z+n} \right)" />
                <p>
                    左辺 <InlineMath math="f(z) = \pi\cos(\pi z)/\sin(\pi z)" /> は <InlineMath math="z = n \in \mathbb{Z}" /> に1位の極を持ちます。正と負の極の主要部 <InlineMath math="1/(z-n)" /> と <InlineMath math="1/(z+n)" /> のペアを足し合わせると、
                </p>
                <BlockMath math="\frac{1}{z-n} + \frac{1}{z+n} = \frac{2z}{z^2 - n^2}" />
                <p>
                    となります。これは直ちに <InlineMath math="\sum |2z/n^2|" /> のオーダーで有界となり、テイラー多項式による明示的な補正 <InlineMath math="Q_n(z)" /> を用いずとも、正負のペアリング自体が相殺の役割を果たしてコンパクト一様収束することが保証されます。このように、関数が持つ対称性（奇関数性など）を利用すると展開式がきれいにまとまります。
                </p>
            </ContentBox>

            <p>
                この結果は、有理関数から有理型関数への一般化として部分分数分解という視点から理解することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分分数分解との対比</h2>

            <p>
                代数学で習うように、有理関数（多項式の商）は極における主要部（部分分数）の有限和と、ある多項式の和に分解することができます。この考えを無限の極を持つ関数に拡張したのがミッタク-レフラーの定理の展開式です。
            </p>

            <ContentBox type="example" title="Example 6.3-2">
                <p>
                    <InlineMath math="f(z) = 1/(\sin(\pi z))^2" /> の部分分数展開を考えます。<InlineMath math="\sin(\pi z)" /> の零点により、<InlineMath math="f(z)" /> は <InlineMath math="z = n \in \mathbb{Z}" /> に2位の極を持ちます。
                </p>
                <p>
                    各極 <InlineMath math="z=n" /> でのローラン展開を計算すると、主要部は <InlineMath math="1/(\pi^2(z-n)^2)" /> となります。主要部の和である級数
                </p>
                <BlockMath math="S(z) = \sum_{n=-\infty}^\infty \frac{1}{\pi^2(z-n)^2}" />
                <p>
                    を考えると、この級数は自明に広義一様収束し、補正項 <InlineMath math="Q_n(z)" /> は必要ありません。ここで差 <InlineMath math="f(z) - S(z)" /> を考えると、特異点が全て相殺されて消えるため全平面で正則な整関数となります。さらに、実軸から離れた場所での漸近的振る舞いを評価すると有界であることが示せます。
                </p>
                <p>
                    リューヴィルの定理により有界な整関数は定数ですが、<InlineMath math="z \to i\infty" /> で <InlineMath math="f(z) \to 0" /> かつ <InlineMath math="S(z) \to 0" /> となるため、この定数は <InlineMath math="0" /> です。結果として、次の美しい恒等式が得られます。
                </p>
                <BlockMath math="\frac{1}{\sin^2(\pi z)} = \sum_{n=-\infty}^\infty \frac{1}{\pi^2 (z-n)^2}" />
            </ContentBox>

            <ContentBox type="remark" title="無限部分分数展開">
                <p>
                    有理関数の部分分数分解が「有限和と多項式の和」で書けるのと同じように、有理型関数は「主要部と補正項の無限和」と「整関数」の和に分解できます。この定理により、複素平面上の関数論が代数的な視点で極めて見通し良く操作できることが示されたと言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有理型関数を構成する際、無限個の極の主要部を単に足すと発散する場合があるため、テイラー多項式 <InlineMath math="Q_n(z)" /> を引いて収束性を補正する。</li>
                    <li>ミッタク-レフラーの定理により、指定された点の離散的な列における任意の主要部を持つ有理型関数が常に存在することが保証される。</li>
                    <li>この定理から、<InlineMath math="\pi\cot(\pi z)" /> や <InlineMath math="1/\sin^2(\pi z)" /> といった三角関数の無限部分分数展開の恒等式が導出でき、リューヴィルの定理との組み合わせで定数のずれも完全に決定できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
