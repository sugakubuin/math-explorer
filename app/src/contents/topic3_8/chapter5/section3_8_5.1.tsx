import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HomomorphismDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、一つの群の「内部」の構造（部分群、剰余類、商群など）に注目してきました。
                ここからは、2つの異なる群の間の「関係」を記述するための道具として、構造を保存する写像である「準同型写像」を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準同型写像の定義と基本性質</h2>

            <ContentBox type="definition" title="Definition 5.1-1 (準同型写像)">
                <p>
                    2つの群 <InlineMath math="G, G'" /> に対し、写像 <InlineMath math="\phi: G \to G'" /> が、任意の <InlineMath math="a, b \in G" /> に対して
                    <BlockMath math="\phi(ab) = \phi(a)\phi(b)" />
                    を満たすとき、<InlineMath math="\phi" /> を <InlineMath math="G" /> から <InlineMath math="G'" /> への<b>準同型写像 (Homomorphism)</b> という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                準同型写像は、積の構造を保存するだけでなく、単位元や逆元といった群の基本構造も自動的に保存します。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1 (準同型の基本性質)">
                <p>
                    準同型写像 <InlineMath math="\phi: G \to G'" /> について、以下が成り立つ：
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>単位元の対応</b>：<InlineMath math="\phi(e) = e'" /> （<InlineMath math="e, e'" /> はそれぞれの単位元）</li>
                    <li><b>逆元の対応</b>：<InlineMath math="\phi(a^{-1}) = \phi(a)^{-1}" /></li>
                    <li><b>べき乗の保存</b>：<InlineMath math="\phi(a^n) = \phi(a)^n \ (n \in \mathbb{Z})" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>単位元</b>：<br />
                        <InlineMath math="\phi(e) = \phi(e \cdot e) = \phi(e)\phi(e)" /> である。
                        この式の両辺に <InlineMath math="G'" /> における <InlineMath math="\phi(e)" /> の逆元を掛ければ、<InlineMath math="e' = \phi(e)" /> が得られる。
                    </li>
                    <li>
                        <b>逆元</b>：<br />
                        <InlineMath math="\phi(a)\phi(a^{-1}) = \phi(aa^{-1}) = \phi(e) = e'" /> である。
                        同様に <InlineMath math="\phi(a^{-1})\phi(a) = e'" /> も成り立つ。
                        逆元の一意性より、<InlineMath math="\phi(a^{-1})" /> は <InlineMath math="\phi(a)" /> の逆元、すなわち <InlineMath math="\phi(a)^{-1}" /> である。
                    </li>
                    <li>
                        <b>べき乗（<InlineMath math="n \geq 0" />）</b>：<br />
                        <InlineMath math="n = 0" /> のとき、<InlineMath math="\phi(a^0) = \phi(e) = e' = \phi(a)^0" /> より成り立つ。
                        <InlineMath math="n > 0" /> のとき、数学的帰納法を用いる。<InlineMath math="n=1" /> での成立は自明。<InlineMath math="n=k" /> での成立を仮定すると、
                        <BlockMath math="\phi(a^{k+1}) = \phi(a^k a) = \phi(a^k)\phi(a) = \phi(a)^k \phi(a) = \phi(a)^{k+1}" />
                        となり、すべての正整数 <InlineMath math="n" /> で成り立つ。
                    </li>
                    <li>
                        <b>べき乗（<InlineMath math="n < 0" />）</b>：<br />
                        <InlineMath math="n = -m \ (m > 0)" /> とおくと、逆元の対応を用いて
                        <BlockMath math="\begin{aligned} \phi(a^n) &= \phi((a^m)^{-1}) = \phi(a^m)^{-1} \\ &= (\phi(a)^m)^{-1} = \phi(a)^{-m} = \phi(a)^n \end{aligned}" />
                        となり、負の指数の場合も成り立つ。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">像・核と具体例</h2>

            <p className="leading-relaxed">
                準同型写像の挙動を把握する上で、最も重要な概念が「像」と「核」です。
            </p>

            <ContentBox type="definition" title="Definition 5.1-2 (像と核)">
                <ul className="list-disc list-inside space-y-3">
                    <li>
                        <b>像 (Image)</b>：<InlineMath math="\mathrm{Im}\,\phi = \{ \phi(g) \mid g \in G \}" /><br />
                        <InlineMath math="\phi" /> によって移された先の集合。これは <InlineMath math="G'" /> の部分群となる。
                    </li>
                    <li>
                        <b>核 (Kernel)</b>：<InlineMath math="\ker\phi = \{ g \in G \mid \phi(g) = e' \}" /><br />
                        単位元に移される元の集合。これは <InlineMath math="G" /> の部分群（さらに言えば正規部分群）となる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.1-2 (単射性の判定法)">
                <p>
                    準同型写像 <InlineMath math="\phi" /> が単射であるための必要十分条件は、<InlineMath math="\ker\phi = \{e\}" /> であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        (<InlineMath math="\Rightarrow" />)：<br />
                        <InlineMath math="\phi" /> が単射であれば、<InlineMath math="\phi(g) = e' = \phi(e)" /> より直ちに <InlineMath math="g = e" /> となり、<InlineMath math="\ker\phi = \{e\}" /> である。
                    </li>
                    <li>
                        (<InlineMath math="\Leftarrow" />)：<br />
                        <InlineMath math="\phi(a) = \phi(b)" /> とすると、<InlineMath math="\phi(a)\phi(b)^{-1} = e'" /> である。
                        準同型の性質より <InlineMath math="\phi(ab^{-1}) = e'" /> となり、<InlineMath math="ab^{-1} \in \ker\phi" /> である。
                        仮定より <InlineMath math="\ker\phi = \{e\}" /> なので、<InlineMath math="ab^{-1} = e" /> すなわち <InlineMath math="a = b" /> となり、単射が示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準同型写像の例</h2>

            <ContentBox type="example" title="Example 5.1-1 (さまざまな準同型)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>自然な全射</b>：<br />
                        <InlineMath math="\phi: \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \ (k \mapsto k \bmod n)" />。<br />
                        核は <InlineMath math="\ker\phi = n\mathbb{Z}" /> である。
                    </li>
                    <li>
                        <b>行列式</b>：<br />
                        <InlineMath math="\det: GL_n(\mathbb{R}) \to \mathbb{R}^* \ (A \mapsto \det(A))" />。
                        積の行列式公式 <InlineMath math="\det(AB) = \det(A)\det(B)" /> より、これは準同型である。
                        置換群に対する特殊線形群 <InlineMath math="SL_n(\mathbb{R})" /> がその核となる。
                    </li>
                    <li>
                        <b>置換の符号</b>：<br />
                        <InlineMath math="\mathrm{sgn}: S_n \to \{1, -1\} \ (\sigma \mapsto \mathrm{sgn}(\sigma))" />。
                        積の符号は符号の積であることから準同型であり、核は交代群 <InlineMath math="A_n" /> である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>演算の構造を保つ写像を準同型写像という。</li>
                    <li>準同型は単位元を単位元に、逆元を逆元に写す。</li>
                    <li>核が単位元のみであることは、写像が単射であることの便利な判定法となる。</li>
                    <li>行列式や置換の符号など、数学の各所に現れる重要な写像の多くが準同型である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
