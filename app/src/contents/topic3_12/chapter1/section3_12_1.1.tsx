import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionHomotopy() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                位相空間論I（2-5）では、空間が「つながっているか（連結性）」や「コンパクトか」といった性質を学びました。本トピックでは、空間やその間の写像を「連続的に変形する」というアイデアに基づき、空間の形をより代数的に捉える手法を学びます。その基礎となるのがホモトピーの概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ホモトピックな写像</h2>

            <p className="leading-relaxed">
                2 つの連続写像が「同じ形」を描いている、あるいは「連続的に移り変われる」という直感的な概念を、パラメータ <InlineMath math="t" /> を用いて厳密に定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-1 (ホモトピー)"
            >
                <p>
                    位相空間 <InlineMath math="X, Y" /> の間の 2 つの連続写像 <InlineMath math="f, g : X \to Y" /> が<strong>ホモトピック（homotopic）</strong>であるとは、連続写像 <InlineMath math="H : X \times [0, 1] \to Y" /> が存在して、すべての <InlineMath math="x \in X" /> に対して
                    <BlockMath math="H(x, 0) = f(x), \quad H(x, 1) = g(x)" />
                    を満たすことをいう。
                </p>
                <p>
                    このとき <InlineMath math="f \simeq g" /> と書き、写像 <InlineMath math="H" /> を <InlineMath math="f" /> から <InlineMath math="g" /> への<strong>ホモトピー（homotopy）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ホモトピーは単なる関係にとどまらず、写像の集合を意味のあるグループ（同値類）に分割する同値関係となります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.1-1 (ホモトピーと同値関係)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> から <InlineMath math="Y" /> への連続写像の集合において、ホモトピー関係 <InlineMath math="\simeq" /> は同値関係である。すなわち、以下の 3 つが成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>反射律：</strong> <InlineMath math="f \simeq f" /></li>
                    <li><strong>対称律：</strong> <InlineMath math="f \simeq g \implies g \simeq f" /></li>
                    <li><strong>推移律：</strong> <InlineMath math="f \simeq g" /> かつ <InlineMath math="g \simeq h \implies f \simeq h" /></li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>反射律：</strong> <InlineMath math="H(x, t) = f(x)" />（<InlineMath math="t" /> に依存しない定置写像）とすれば、これは連続であり <InlineMath math="f \simeq f" /> を与える。
                </p>
                <p>
                    <strong>対称律：</strong> <InlineMath math="f \simeq g" /> を与えるホモトピーを <InlineMath math="H" /> とするとき、時間を反転させた <InlineMath math="\bar{H}(x, t) = H(x, 1-t)" /> を考えれば、これは連続であり <InlineMath math="g" /> から <InlineMath math="f" /> へのホモトピーとなる。
                </p>
                <p>
                    <strong>推移律：</strong> <InlineMath math="f \simeq g" /> を与えるホモトピーを <InlineMath math="H_1" />、<InlineMath math="g \simeq h" /> を与えるホモトピーを <InlineMath math="H_2" /> とする。これらを時間 <InlineMath math="t=1/2" /> で繋ぎ合わせた写像 <InlineMath math="H" /> を次のように定義する。
                    <BlockMath math="H(x, t) = \begin{cases} H_1(x, 2t) & (0 \leq t \leq 1/2) \\ H_2(x, 2t-1) & (1/2 \leq t \leq 1) \end{cases}" />
                    <InlineMath math="t=1/2" /> のとき <InlineMath math="H_1(x, 1) = g(x) = H_2(x, 0)" /> となり値が一致する。閉集合の貼り合わせ補題（位相論I 3.3）より <InlineMath math="H" /> は連続であり、<InlineMath math="H(x, 0) = f(x)" />、<InlineMath math="H(x, 1) = h(x)" /> を満たすため <InlineMath math="f \simeq h" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.1-1 (<InlineMath math="\mathbb{R}^n" /> 上の写像の直線ホモトピー)</span>}
            >
                <p>
                    終域がユークリッド空間 <InlineMath math="\mathbb{R}^n" />（より一般に凸集合）である場合、任意の 2 つの連続写像 <InlineMath math="f, g : X \to \mathbb{R}^n" /> はホモトピックである。
                </p>
                <p>
                    実際、ホモトピーとして
                    <BlockMath math="H(x, t) = (1-t)f(x) + tg(x)" />
                    と定めると、<InlineMath math="H(x, 0) = f(x)" />、<InlineMath math="H(x, 1) = g(x)" /> であり、<InlineMath math="H" /> は明らかに連続である。この <InlineMath math="H" /> を<strong>直線ホモトピー</strong>という。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ホモトピー同値</h2>

            <p className="leading-relaxed">
                写像のホモトピー関係をもとに、今度は「空間そのもの」が本質的に同じ形をしているという概念を定式化します。同相写像よりも緩い、位相幾何学において最も重要な同値関係です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.1-2 (ホモトピー同値)"
            >
                <p>
                    位相空間 <InlineMath math="X, Y" /> が<strong>ホモトピー同値（homotopy equivalent）</strong>であるとは、連続写像 <InlineMath math="f : X \to Y" /> と <InlineMath math="g : Y \to X" /> が存在して、
                    <BlockMath math="g \circ f \simeq \mathrm{id}_X \quad \text{かつ} \quad f \circ g \simeq \mathrm{id}_Y" />
                    が成り立つことをいう。このとき <InlineMath math="X \simeq Y" /> と書く。
                </p>
                <p>
                    このような写像 <InlineMath math="f, g" /> を互いに他方のホモトピー逆写像（homotopy inverse）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.1-2 (<InlineMath math="\mathbb{R}^n \simeq \{\mathrm{pt}\}" />)</span>}
            >
                <p>
                    ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> と一点空間 <InlineMath math="\{\mathrm{pt}\} = \{0\}" /> はホモトピー同値である。
                </p>
                <p>
                    <InlineMath math="f : \mathbb{R}^n \to \{0\}" /> を <InlineMath math="f(x) = 0" />、<InlineMath math="g : \{0\} \to \mathbb{R}^n" /> を <InlineMath math="g(0) = 0" /> と定める。<br />
                    合成 <InlineMath math="f \circ g : \{0\} \to \{0\}" /> は明らかに <InlineMath math="\mathrm{id}_{\{0\}}" /> そのものであるから、<InlineMath math="f \circ g \simeq \mathrm{id}_{\{0\}}" />。<br />
                    一方、合成 <InlineMath math="g \circ f : \mathbb{R}^n \to \mathbb{R}^n" /> は <InlineMath math="(g \circ f)(x) = 0" />（定値写像）である。Example 1.1-1 の直線ホモトピーを用いれば、<InlineMath math="H(x, t) = (1-t)x + t(0) = (1-t)x" /> により、<InlineMath math="g \circ f \simeq \mathrm{id}_{\mathbb{R}^n}" /> となる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.1-3 (<InlineMath math="S^1 \simeq" /> 円環)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> と、ドーナツの表面から厚みを持たせた円環（アニュラス）<InlineMath math="A = S^1 \times [0,1]" /> はホモトピー同値である。
                </p>
                <p>
                    包含写像 <InlineMath math="i : S^1 \hookrightarrow A" />（例えば <InlineMath math="x \mapsto (x, 1/2)" />）と、射影 <InlineMath math="r : A \to S^1" />（<InlineMath math="(x, s) \mapsto x" />）を考えると、<InlineMath math="r \circ i = \mathrm{id}_{S^1}" /> であり、<InlineMath math="i \circ r" /> は円環全体をその中心の円周に潰す写像になるが、これは <InlineMath math="\mathrm{id}_A" /> にホモトピックである。（詳しくは次節以降のレトラクションで扱う）。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ホモトピー不変量"
            >
                <p>
                    位相幾何学（トポロジー）において、ホモトピー同値な空間は「本質的に同じ形」をもつと見なします。例えば、球と立方体は同相ですが、円とアニュラスは同相ではない（次元が異なる）にもかかわらずホモトピー同値です。
                    本コースでこれから扱う「基本群」や、後の「ホモロジー群」などは、空間がホモトピー同値であれば同型になるという強力な性質（ホモトピー不変性）を持っています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>2 つの連続写像がパラメータ <InlineMath math="t \in [0,1]" /> を通して連続的に移り変われるとき、それらは<strong>ホモトピック</strong>であるという。</li>
                    <li>ホモトピー関係は連続写像の集合上に同値関係を定める。</li>
                    <li>互いの合成が恒等写像にホモトピックとなる写像が存在するとき、2つの空間は<strong>ホモトピー同値</strong>であるといい、位相幾何学において同じ形と見なされる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
