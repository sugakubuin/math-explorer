import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MappingCompositionAndInverse() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                §2.1 と §2.2 では、一つの写像の性質を詳しく見てきました。しかし、数学の多くの場面では、複数の写像を「数珠つなぎ」にしたり、あるいは「元に戻す」操作を行ったりすることが必要になります。
                これらが<strong>写像の合成</strong>と<strong>逆写像</strong>です。この節では、これらの操作を厳密に定義し、全射・単射といった性質がどのように引き継がれるかを解き明かします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">合成写像</h2>

            <p>
                2つの写像が「隣り合っている」とき、それらを一挙に行う一つの写像を作ることができます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (合成写像)">
                <p>
                    2つの写像 <InlineMath math="f \colon A \to B" /> と <InlineMath math="g \colon B \to C" /> が与えられたとき、<InlineMath math="A" /> の各元 <InlineMath math="a" /> に対して <InlineMath math="C" /> の元 <InlineMath math="g(f(a))" /> を対応させる写像を、<InlineMath math="f" /> と <InlineMath math="g" /> の<strong>合成写像（Composite Map）</strong>といい、
                    <BlockMath math="g \circ f \colon A \to C" />
                    と表す。
                </p>
                <p className="mt-4">
                    すなわち、すべての <InlineMath math="a \in A" /> に対して <InlineMath math="(g \circ f)(a) = g(f(a))" /> である。
                </p>
            </ContentBox>

            <p className="mt-4">
                合成を考える際、<InlineMath math="f" /> の値域（終域）と <InlineMath math="g" /> の定義域が一致（あるいは包含関係に）している必要があることに注意してください。
                写像の合成は、数の掛け算のように「結合法則」を満たします。
            </p>

            <ContentBox type="theorem" title="Proposition 2.3-1 (合成写像の結合律)">
                <p>
                    3つの写像 <InlineMath math="f \colon A \to B, g \colon B \to C, h \colon C \to D" /> があるとき、次が成り立つ。
                    <BlockMath math="(h \circ g) \circ f = h \circ (g \circ f)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2つの写像が等しいことを示すには、定義域・値域が一致し、かつ任意の元に対する出力が等しいことを確認すればよい（§2.1 Definition 2.1-4）。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li>
                        <strong>定義域と値域</strong>：<br />
                        左辺の <InlineMath math="(h \circ g) \circ f" /> は、<InlineMath math="A \xrightarrow{f} B \xrightarrow{h \circ g} D" /> であるから、<InlineMath math="A \to D" />。
                        右辺の <InlineMath math="h \circ (g \circ f)" /> は、<InlineMath math="A \xrightarrow{g \circ f} C \xrightarrow{h} D" /> であるから、<InlineMath math="A \to D" />。
                        よって両者の定義域と値域は一致する。
                    </li>
                    <li>
                        <strong>対応則</strong>：<br />
                        任意の <InlineMath math="a \in A" /> に対して、左辺の出力は
                        <BlockMath math="((h \circ g) \circ f)(a) = (h \circ g)(f(a)) = h(g(f(a)))" />
                        である。一方、右辺の出力は
                        <BlockMath math="(h \circ (g \circ f))(a) = h((g \circ f)(a)) = h(g(f(a)))" />
                        となる。
                    </li>
                </ol>
                <p className="mt-4">
                    すべての <InlineMath math="a \in A" /> に対して出力が一致するため、<InlineMath math="(h \circ g) \circ f = h \circ (g \circ f)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">全射・単射の合成</h2>

            <p>
                「全射同士」や「単射同士」を合成すると、その性質は保存されるのでしょうか。答えは Yes です。
            </p>

            <ContentBox type="theorem" title="Proposition 2.3-2 (全射同士・単射同士の合成)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> と <InlineMath math="g \colon B \to C" /> について次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-2 ml-4">
                    <li><InlineMath math="f" /> と <InlineMath math="g" /> がともに単射ならば、<InlineMath math="g \circ f" /> も単射。</li>
                    <li><InlineMath math="f" /> と <InlineMath math="g" /> がともに全射ならば、<InlineMath math="g \circ f" /> も全射。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-10 mt-2 ml-2">
                    <li>
                        <strong>単射性の証明</strong>：<br />
                        <InlineMath math="(g \circ f)(a_1) = (g \circ f)(a_2)" /> と仮定する。合成の定義より
                        <BlockMath math="g(f(a_1)) = g(f(a_2))" />
                        である。<InlineMath math="g" /> が単射であることから、<InlineMath math="f(a_1) = f(a_2)" /> が導かれる。
                        さらに <InlineMath math="f" /> も単射であるから、<InlineMath math="a_1 = a_2" /> となる。
                        よって <InlineMath math="g \circ f" /> は単射である。
                    </li>
                    <li>
                        <strong>全射性の証明</strong>：<br />
                        終域 <InlineMath math="C" /> の任意の元 <InlineMath math="c" /> をとる。<InlineMath math="g" /> が全射であることから、ある <InlineMath math="b \in B" /> が存在して <InlineMath math="g(b) = c" />。
                        次に、この <InlineMath math="b \in B" /> に対して、<InlineMath math="f" /> が全射であることから、ある <InlineMath math="a \in A" /> が存在して <InlineMath math="f(a) = b" />。
                        このとき
                        <BlockMath math="(g \circ f)(a) = g(f(a)) = g(b) = c" />
                        となり、任意の <InlineMath math="c \in C" /> に対してそれに対応する <InlineMath math="a \in A" /> が見つかった。よって <InlineMath math="g \circ f" /> は全射である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆写像</h2>

            <p>
                写像 <InlineMath math="f \colon A \to B" /> があったとき、逆に <InlineMath math="B" /> から <InlineMath math="A" /> へと矢印を完璧に逆転させることができるでしょうか。
                これが可能になるための条件こそが、前の節で学んだ「全単射」です。
            </p>

            <ContentBox type="definition" title="Definition 2.3-2 (逆写像)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> に対して、もし
                    <BlockMath math="g \circ f = \mathrm{id}_A \quad \text{かつ} \quad f \circ g = \mathrm{id}_B" />
                    を満たす写像 <InlineMath math="g \colon B \to A" /> が存在するならば、<InlineMath math="g" /> を <InlineMath math="f" /> の<strong>逆写像（Inverse Map）</strong>といい、<InlineMath math="f^{-1}" /> で表す。
                </p>
                <p className="mt-4">
                    （注：もし逆写像が存在するならば、それはただ一つに定まることが証明できる。）
                </p>
            </ContentBox>

            <p className="mt-4">
                逆写像が存在するための「必要にして十分な条件」を確認しましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (逆写像の存在条件)">
                <p>
                    写像 <InlineMath math="f \colon A \to B" /> が逆写像を持つための必要十分条件は、<InlineMath math="f" /> が<strong>全単射</strong>であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>「逆写像を持つ <InlineMath math="\iff" /> 全単射」を示す。</p>
                <ol className="list-decimal list-inside space-y-10 mt-4 ml-2">
                    <li>
                        <strong>（<InlineMath math="\Rightarrow" />）の証明</strong>：<br />
                        逆写像 <InlineMath math="g" /> が存在すると仮定する。<br />
                        ・<strong>単射性</strong>：<InlineMath math="f(a_1) = f(a_2)" /> ならば <InlineMath math="g(f(a_1)) = g(f(a_2))" />。左辺は <InlineMath math="a_1" />、右辺は <InlineMath math="a_2" /> なので <InlineMath math="a_1 = a_2" />。よって単射。<br />
                        ・<strong>全射性</strong>：任意の <InlineMath math="b \in B" /> に対して、<InlineMath math="a = g(b)" /> とおくと <InlineMath math="f(a) = f(g(b)) = b" />。よって全射。<br />
                        以上より <InlineMath math="f" /> は全単射である。
                    </li>
                    <li>
                        <strong>（<InlineMath math="\Leftarrow" />）の証明</strong>：<br />
                        <InlineMath math="f" /> を全単射とする。このとき §2.2 Definition 2.2-1 より、任意の <InlineMath math="b \in B" /> に対して <InlineMath math="f(a) = b" /> を満たす <InlineMath math="a \in A" /> がちょうど1つ存在する。<br />
                        この対応規則を <InlineMath math="g(b) = a" /> と定義すれば、これは <InlineMath math="B" /> から <InlineMath math="A" /> への写像となる。
                        定義から直ちに <InlineMath math="g(f(a)) = a" /> かつ <InlineMath math="f(g(b)) = b" /> となるため、<InlineMath math="g" /> は逆写像である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="逆写像と関数の記号">
                <p>
                    解析学で、<InlineMath math="\sin" /> に対して <InlineMath math="\sin^{-1}" /> (arcsin) や、<InlineMath math="\log" /> に対して <InlineMath math="\exp" /> を考えるのは、まさにこの逆写像の概念です。
                    これまであいまいに使っていた「元の操作の逆を行う」という行為が、集合論的には「全単射という一対一の完璧なペアが存在すること」で保証されていることがわかります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>写像の<strong>合成 <InlineMath math="g \circ f" /></strong> は結合法則を満たす。</li>
                    <li>単射同士、全射同士の合成は、それぞれ単射、全射の性質を維持する。</li>
                    <li>写像が<strong>逆写像 <InlineMath math="f^{-1}" /></strong> を持つことは、その写像が<strong>全単射</strong>であることと等価である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
