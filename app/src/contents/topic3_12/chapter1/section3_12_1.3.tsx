import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionRetraction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                空間のホモトピー同値性を調べる強力な手法として、空間全体をその部分空間へ連続的に「押し潰す」という操作を考えます。これをレトラクションと呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">レトラクションと変形レトラクト</h2>

            <p className="leading-relaxed">
                まず、部分空間の形を変えずに、外側の空間を部分空間に射影する連続写像を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-1 (レトラクション)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> とその部分空間 <InlineMath math="A \subset X" /> を考える。連続写像 <InlineMath math="r : X \to A" /> が
                    <BlockMath math="\forall a \in A, \quad r(a) = a" />
                    を満たすとき（すなわち <InlineMath math="r|_A = \mathrm{id}_A" />）、<InlineMath math="r" /> を <InlineMath math="A" /> への<strong>レトラクション（retraction）</strong>という。
                </p>
                <p>
                    このとき、部分空間 <InlineMath math="A" /> は <InlineMath math="X" /> の<strong>レトラクト（retract）</strong>であるという。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                レトラクションだけでは、単なる射影に過ぎない（例えば空間を引きちぎって一点に集めるような操作も含まれる）ため、ホモトピー的な性質を保つとは限りません。そこで、空間全体を「連続的に変形させながら」部分空間に押し潰すという条件を追加します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.3-2 (変形レトラクト)"
            >
                <p>
                    部分空間 <InlineMath math="A \subset X" /> へのレトラクション <InlineMath math="r : X \to A" /> が与えられているとする。包含写像を <InlineMath math="\iota : A \hookrightarrow X" /> とおく。
                </p>
                <p>
                    合成写像 <InlineMath math="\iota \circ r : X \to X" />（<InlineMath math="X" /> の点を <InlineMath math="A" /> 上へ移す写像）が、<InlineMath math="X" /> 上の恒等写像 <InlineMath math="\mathrm{id}_X" /> にホモトピックであるとき（<InlineMath math="\iota \circ r \simeq \mathrm{id}_X" />）、<InlineMath math="A" /> を <InlineMath math="X" /> の<strong>変形レトラクト（deformation retract）</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                変形レトラクトの存在は、2つの空間がホモトピー同値であることを保証する十分条件となります。
            </p>

            <ContentBox
                type="proposition"
                title={<span>Proposition 1.3-1 (<InlineMath math="X \simeq A" />)</span>}
            >
                <p>
                    部分空間 <InlineMath math="A" /> が <InlineMath math="X" /> の変形レトラクトであるならば、<InlineMath math="A" /> と <InlineMath math="X" /> はホモトピー同値である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    レトラクション <InlineMath math="r : X \to A" /> と、包含写像 <InlineMath math="\iota : A \to X" /> を考える。
                </p>
                <p>
                    レトラクションの定義（<InlineMath math="r|_A = \mathrm{id}_A" />）より、<InlineMath math="r \circ \iota : A \to A" /> は <InlineMath math="A" /> 上の恒等写像 <InlineMath math="\mathrm{id}_A" /> そのものである。すなわち <InlineMath math="r \circ \iota = \mathrm{id}_A \simeq \mathrm{id}_A" /> である。
                </p>
                <p>
                    また、変形レトラクトの定義より、<InlineMath math="\iota \circ r \simeq \mathrm{id}_X" /> である。
                </p>
                <p>
                    したがって、<InlineMath math="r" /> と <InlineMath math="\iota" /> は互いにホモトピー逆写像となり、Definition 1.1-2 により <InlineMath math="X \simeq A" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">変形レトラクトの応用</h2>

            <p className="leading-relaxed">
                変形レトラクトの概念を用いると、一見複雑な空間を単純な空間に還元して調べることができます。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 1.3-1 (<InlineMath math="S^1" /> は <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> の変形レトラクト)</span>}
            >
                <p>
                    原点を除いた平面 <InlineMath math="X = \mathbb{R}^2 \setminus \{0\}" /> と、その部分空間である単位円周 <InlineMath math="A = S^1" /> を考える。
                </p>
                <p>
                    写像 <InlineMath math="r : \mathbb{R}^2 \setminus \{0\} \to S^1" /> を
                    <BlockMath math="r(x) = \frac{x}{\|x\|}" />
                    で定める。もし <InlineMath math="x \in S^1" /> ならば <InlineMath math="\|x\| = 1" /> なので <InlineMath math="r(x) = x" /> となり、<InlineMath math="r" /> はレトラクションである。
                </p>
                <p>
                    次に、ホモトピー <InlineMath math="H : X \times [0,1] \to X" /> を
                    <BlockMath math="H(x, t) = (1-t)x + t \frac{x}{\|x\|}" />
                    で定める。この式はベクトル <InlineMath math="x" /> と <InlineMath math="x/\|x\|" />（同じ向きの単位ベクトル）を結ぶ線分上の点を与え、<InlineMath math="x \neq 0" /> であれば線分上に原点は含まれないため、常に <InlineMath math="H(x,t) \in X" /> となり連続である。
                    <InlineMath math="H(x, 0) = x = \mathrm{id}_X(x)" />、<InlineMath math="H(x, 1) = r(x) = (\iota \circ r)(x)" /> であるから、<InlineMath math="\iota \circ r \simeq \mathrm{id}_X" /> が示された。
                </p>
                <p>
                    したがって、<InlineMath math="S^1" /> は <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> の変形レトラクトであり、<InlineMath math="\mathbb{R}^2 \setminus \{0\} \simeq S^1" /> となる。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.3-2 (<InlineMath math="\mathbb{R}^n \setminus \{0\} \simeq S^{n-1}" />)</span>}
            >
                <p>
                    上の例は任意の次元に自然に拡張できる。原点を除いた <InlineMath math="n" /> 次元空間 <InlineMath math="\mathbb{R}^n \setminus \{0\}" /> は、<InlineMath math="(n-1)" /> 次元球面 <InlineMath math="S^{n-1}" /> を変形レトラクトとして持つ。
                </p>
                <p>
                    レトラクションとホモトピーは Example 1.3-1 と全く同じ数式で与えられる。
                    <BlockMath math="\begin{aligned} r(x) &= \frac{x}{\|x\|}, \\ H(x, t) &= (1-t)x + t \frac{x}{\|x\|} = \frac{x}{\|x\|^t} \cdot \|x\|^{1-t} \end{aligned}" />
                    これにより、<InlineMath math="\mathbb{R}^n \setminus \{0\} \simeq S^{n-1}" /> であることがわかる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="変形レトラクトの有用性"
            >
                <p>
                    複雑な空間の基本群やホモロジー群を計算する際、直接計算するのは困難な場合が多いですが、空間をその変形レトラクト（より低次元でシンプルな骨格）に置き換えることで、計算が大幅に簡単になります。この手法は、後で学ぶ CW 複体の理論（§4.3）などで系統的に用いられるトポロジーの常套手段です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>空間 <InlineMath math="X" /> から部分空間 <InlineMath math="A" /> への連続な射影で、<InlineMath math="A" /> 上では恒等写像となるものを<strong>レトラクション</strong>という。</li>
                    <li><InlineMath math="X" /> の恒等写像がレトラクションにホモトピックであるとき、<InlineMath math="A" /> は <InlineMath math="X" /> の<strong>変形レトラクト</strong>である。</li>
                    <li>変形レトラクトの存在は、元の空間とその部分空間がホモトピー同値であることを保証する（<InlineMath math="X \simeq A" />）。</li>
                    <li>原点を除いたユークリッド空間は、同じ次元の球面とホモトピー同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
