import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IsomorphismsMonomorphismsEpimorphisms() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                圏論では「集合の要素」を見ることができません。そのため、写像の「単射（要素が被らない）」や「全射（すべての要素を覆う）」、「全単射（要素が一対一に対応する）」といった概念を、要素を使わずに「射の合成の性質」だけで再定義する必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">同型射とモノ射・エピ射</h2>

            <ContentBox
                type="definition"
                title="Definition 1.3-1 (同型射 / Isomorphism)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> の射 <InlineMath math="f : A \to B" /> が<strong>同型射（isomorphism）</strong>であるとは、ある射 <InlineMath math="g : B \to A" /> が存在して、
                    <BlockMath math="g \circ f = \mathrm{id}_A \quad \text{かつ} \quad f \circ g = \mathrm{id}_B" />
                    を満たすことである。
                </p>
                <p>
                    このとき <InlineMath math="A" /> と <InlineMath math="B" /> は<strong>同型（isomorphic）</strong>であるといい、<InlineMath math="A \cong B" /> と書く。また、この条件を満たす <InlineMath math="g" /> を <InlineMath math="f" /> の<strong>逆射（inverse）</strong>と呼び、<InlineMath math="f^{-1}" /> で表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次に、単射と全射の圏論バージョンを定義します。これらは「合成したときにキャンセル（約分）できるか」という性質で定義されます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-2 (モノ射とエピ射)"
            >
                <p>
                    <strong>モノ射（Monomorphism）：</strong> 射 <InlineMath math="f : A \to B" /> がモノ射であるとは、任意の対象 <InlineMath math="X" /> と任意の2つの射 <InlineMath math="g, h : X \to A" /> に対して、左からの合成がキャンセル可能であること。
                    <BlockMath math="f \circ g = f \circ h \implies g = h" />
                </p>
                <p>
                    <strong>エピ射（Epimorphism）：</strong> 射 <InlineMath math="f : A \to B" /> がエピ射であるとは、任意の対象 <InlineMath math="Y" /> と任意の2つの射 <InlineMath math="g, h : B \to Y" /> に対して、右からの合成がキャンセル可能であること。
                    <BlockMath math="g \circ f = h \circ f \implies g = h" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                集合の圏においては、これらは期待通り単射・全射と完全に一致します。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 1.3-1 (<InlineMath math="\mathbf{Set}" /> でのモノ射・エピ射)</span>}
            >
                <p>
                    集合の圏 <InlineMath math="\mathbf{Set}" /> において、
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="f" /> がモノ射であることと、<InlineMath math="f" /> が単射であることは同値。</li>
                    <li><InlineMath math="f" /> がエピ射であることと、<InlineMath math="f" /> が全射であることは同値。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>モノ射 <InlineMath math="\iff" /> 単射：</strong><br/>
                    <InlineMath math="(\Leftarrow)" /> <InlineMath math="f" /> が単射とする。<InlineMath math="f \circ g = f \circ h" /> のとき、任意の <InlineMath math="x \in X" /> について <InlineMath math="f(g(x)) = f(h(x))" />。<InlineMath math="f" /> の単射性から <InlineMath math="g(x) = h(x)" />。よって <InlineMath math="g = h" /> でありモノ射。<br/>
                    <InlineMath math="(\Rightarrow)" /> <InlineMath math="f" /> がモノ射とする。<InlineMath math="f(a_1) = f(a_2)" /> となる <InlineMath math="a_1, a_2 \in A" /> があったとする。1点集合 <InlineMath math="X = \{*\}" /> からの写像 <InlineMath math="g(*)=a_1" />, <InlineMath math="h(*)=a_2" /> を考えると、<InlineMath math="f \circ g = f \circ h" /> となる。モノ射の定義より <InlineMath math="g=h" />、すなわち <InlineMath math="a_1 = a_2" /> となり、単射である。
                </p>
                <p>
                    <strong>エピ射 <InlineMath math="\iff" /> 全射：</strong><br/>
                    <InlineMath math="(\Leftarrow)" /> <InlineMath math="f" /> が全射とする。<InlineMath math="g \circ f = h \circ f" /> のとき、任意の <InlineMath math="b \in B" /> はある <InlineMath math="a \in A" /> を用いて <InlineMath math="b = f(a)" /> と書ける。よって <InlineMath math="g(b) = g(f(a)) = h(f(a)) = h(b)" /> となり、<InlineMath math="g = h" /> でありエピ射。<br/>
                    <InlineMath math="(\Rightarrow)" /> <InlineMath math="f" /> がエピ射で、もし全射でない（像 <InlineMath math="f(A)" /> が <InlineMath math="B" /> に一致しない）とする。<InlineMath math="Y = \{0, 1\}" /> とし、<InlineMath math="g : B \to Y" /> をすべて <InlineMath math="0" /> に送る写像、<InlineMath math="h : B \to Y" /> を「<InlineMath math="f(A)" /> 上では <InlineMath math="0" />、それ以外では <InlineMath math="1" /> に送る写像」とする。<InlineMath math="g \circ f = h \circ f" /> は成り立つ（どちらも全要素を <InlineMath math="0" /> に送る）が、<InlineMath math="g \neq h" /> となる。これはエピ射であることに矛盾する。よって全射である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                しかし、圏が変わると「エピ射＝全射」とは限らなくなります。これが圏論的定義の面白いところです。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 1.3-1 (<InlineMath math="\mathbf{Ring}" /> における全射でないエピ射)</span>}
            >
                <p>
                    環の圏 <InlineMath math="\mathbf{Ring}" /> における、整数環から有理数体への自然な包含写像 <InlineMath math="\iota : \mathbb{Z} \hookrightarrow \mathbb{Q}" /> を考える。
                    包含写像なので、明らかに<strong>全射ではない</strong>（分数はカバーされない）。
                </p>
                <p>
                    しかし、<InlineMath math="\iota" /> は <InlineMath math="\mathbf{Ring}" /> において<strong>エピ射</strong>である。
                    なぜなら、任意の環 <InlineMath math="R" /> と2つの環準同型 <InlineMath math="g, h : \mathbb{Q} \to R" /> が <InlineMath math="g \circ \iota = h \circ \iota" /> （つまり整数上では一致する）を満たすと仮定すると、任意の有理数 <InlineMath math="m/n" /> に対して、
                    <BlockMath math="\begin{aligned} g(m/n) &= g(m \cdot n^{-1}) = g(m) \cdot g(n)^{-1} \\ &= h(m) \cdot h(n)^{-1} = h(m/n) \end{aligned}" />
                    となり、有理数全体で自動的に一致してしまう（<InlineMath math="g = h" />）からである。
                </p>
                <p>
                    代数学において「局所化（分母を許す操作）」が本質的にエピ（全射的）な振る舞いをするという事実が、圏論の言葉で見事に捉えられている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">同型の圏論的特徴</h2>

            <p className="leading-relaxed">
                恒等射がそうであったように、逆射の存在もそれが一意であることを保証します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 1.3-2 (同型射の一意性)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> の射 <InlineMath math="f : A \to B" /> が同型射であるならば、その逆射 <InlineMath math="g : B \to A" /> は一意に定まる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    2つの逆射 <InlineMath math="g, g' : B \to A" /> が存在したと仮定する。同型の定義より、
                    <InlineMath math="g \circ f = \mathrm{id}_A" />, <InlineMath math="f \circ g = \mathrm{id}_B" /> および
                    <InlineMath math="g' \circ f = \mathrm{id}_A" />, <InlineMath math="f \circ g' = \mathrm{id}_B" /> が成り立つ。
                </p>
                <p>
                    結合律を用いて計算すると、
                    <BlockMath math="g = g \circ \mathrm{id}_B = g \circ (f \circ g') = (g \circ f) \circ g' = \mathrm{id}_A \circ g' = g'" />
                    となり、2つは必ず一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.3-2 (各圏での同型射の解釈)"
            >
                <p>
                    「同型射」という抽象的な定義は、各分野の圏で解釈すると、それぞれの分野で最も重要な「同値性」の概念とぴったり一致する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong><InlineMath math="\mathbf{Set}" />：</strong> 逆写像を持つ写像、すなわち「全単射」。</li>
                    <li><strong><InlineMath math="\mathbf{Grp}" />：</strong> 逆写像も準同型になるような群準同型、すなわち「群の同型写像」。</li>
                    <li><strong><InlineMath math="\mathbf{Vect}_\mathbb{k}" />：</strong> 逆写像も線形になるような線形写像、すなわち「線形同型（同次元）」。</li>
                    <li><strong><InlineMath math="\mathbf{Top}" />：</strong> 連続写像であり、かつ逆写像も連続であるような写像、すなわち「同相写像（homeomorphism）」。</li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>要素を使わず、射の合成（キャンセル可能か）によって<strong>モノ射（単射的）</strong>と<strong>エピ射（全射的）</strong>が定義される。</li>
                    <li>圏によっては、全射でなくてもエピ射になりうる（例：<InlineMath math="\mathbf{Ring}" /> における <InlineMath math="\mathbb{Z} \hookrightarrow \mathbb{Q}" />）。</li>
                    <li>逆射をもつ射を<strong>同型射</strong>と呼び、これは各圏において（全単射、群同型、同相写像など）その対象が構造として「同じ」であることを示す。</li>
                </ul>
            </ContentBox>
        </section>
    );
}