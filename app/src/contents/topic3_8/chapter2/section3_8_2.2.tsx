import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CyclicGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群の中で最も単純かつ重要な構造の一つが、たった一つの元を繰り返し演算することで得られる「巡回群」です。
                本節では、巡回群の定義とその分類、および生成元が持つ性質について詳しく学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">巡回群の定義と分類</h2>

            <p className="leading-relaxed">
                まず、一つの元から「生成される」という概念を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.2-1 (生成された部分群)">
                <p>
                    群 <InlineMath math="G" /> の元 <InlineMath math="a" /> に対し、<InlineMath math="a" /> の整数べき全体の集合
                    <BlockMath math="\langle a \rangle = \{ a^n \mid n \in \mathbb{Z} \}" />
                    を <InlineMath math="a" /> により<b>生成された部分群</b>という。これは <InlineMath math="a" /> を含む <InlineMath math="G" /> の最小の部分群である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この部分群が群全体と一致する場合、その群は非常に規則正しい構造を持つことになります。
            </p>

            <ContentBox type="definition" title="Definition 2.2-2 (巡回群)">
                <p>
                    群 <InlineMath math="G" /> が、ある元 <InlineMath math="a \in G" /> を用いて <InlineMath math="G = \langle a \rangle" /> と表されるとき、
                    <InlineMath math="G" /> を<b>巡回群 (Cyclic group)</b>といい、<InlineMath math="a" /> をその<b>生成元</b>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                巡回群は、そのサイズにかかわらず、本質的には数（整数）の足し算と同じ構造しか持ち得ないことが証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-1 (巡回群の分類)">
                <p>
                    任意の巡回群は、無限巡回群 <InlineMath math="\mathbb{Z}" /> または有限巡回群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" />（<InlineMath math="n \geq 1" />）のいずれかに同型である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="text-sm mb-4 italic text-slate-600 dark:text-slate-400 leading-relaxed">
                    ※ 本証明では「準同型」「同型」という用語を使用しますが、これらは後に Chapter 5 および Chapter 6 で詳しく定義・解説します。現時点では「構造が同じであることを示すための対応関係」として捉え、証明の細部（well-defined性など）は概念の雰囲気を掴む程度で構いません。
                </p>
                <p>
                    <InlineMath math="G = \langle a \rangle" /> とし、写像 <InlineMath math="\phi: \mathbb{Z} \to G" /> を <InlineMath math="\phi(k) = a^k" /> で定める。指数法則より、これは「準同型写像（演算の構造を保つ写像）」である。
                    <InlineMath math="\mathbb{Z}" /> の部分群はすべて <InlineMath math="n\mathbb{Z}" />（<InlineMath math="n \geq 0" />）の形であるから、核 <InlineMath math="\ker \phi = \{ k \in \mathbb{Z} \mid a^k = e \}" /> について、以下の 2 つのケースを考える。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <b>ケース1：<InlineMath math="\ker \phi = \{0\}" /> のとき</b><br />
                        このとき、<InlineMath math="\phi(k) = \phi(m) \implies a^{k-m} = e \implies k-m = 0" /> より、<InlineMath math="\phi" /> は単射である。
                        生成元の定義より <InlineMath math="\phi" /> は全射でもあるため、<InlineMath math="\phi" /> は同型写像となり、<InlineMath math="G \cong \mathbb{Z}" /> が成り立つ。
                    </li>
                    <li>
                        <b>ケース2：<InlineMath math="\ker \phi = n\mathbb{Z}" />（<InlineMath math="n > 0" />）のとき</b><br />
                        <InlineMath math="n" /> は <InlineMath math="a^n = e" /> となる最小の正整数である。写像 <InlineMath math="\bar{\phi}: \mathbb{Z}/n\mathbb{Z} \to G" /> を <InlineMath math="\bar{\phi}([k]) = a^k" /> で定める。
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                            <li><b>well-defined性</b>：<InlineMath math="k \equiv m \pmod n \implies k-m = nq \implies a^{k-m} = (a^n)^q = e" /> より、代表元の取り方によらず値が定まる。</li>
                            <li><b>単射性</b>：<InlineMath math="a^k = a^m \implies a^{k-m} = e \implies k-m \in n\mathbb{Z} \implies [k] = [m]" /> より成り立つ。</li>
                            <li><b>全射性</b>：<InlineMath math="G = \langle a \rangle" /> より明らかである。</li>
                        </ul>
                        したがって、<InlineMath math="\bar{\phi}" /> は同型写像となり、<InlineMath math="G \cong \mathbb{Z}/n\mathbb{Z}" /> が成り立つ。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体例を通して、生成元がどのように群を形作っているか確認しましょう。
            </p>

            <ContentBox type="example" title="Example 2.2-1 (巡回群の例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>無限巡回群</b>：<InlineMath math="(\mathbb{Z}, +)" /> は <InlineMath math="1" /> を生成元とする巡回群である。すなわち <InlineMath math="\mathbb{Z} = \langle 1 \rangle" />。注意として <InlineMath math="-1" /> も生成元である。
                    </li>
                    <li>
                        <b>有限巡回群</b>：<InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> は <InlineMath math="\bar{1}" /> を生成元とする巡回群である。
                    </li>
                    <li>
                        <b>部分群としての巡回群</b>：<InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> において、<InlineMath math="\bar{2}" /> で生成される部分群は <InlineMath math="\langle \bar{2} \rangle = \{\bar{0}, \bar{2}, \bar{4}\}" /> であり、これは位数 3 の巡回群をなす。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">巡回群の生成元</h2>

            <p className="leading-relaxed">
                有限巡回群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> において、どの元が生成元になれるかは、その数と <InlineMath math="n" /> との関係によって決まります。
            </p>

            <ContentBox type="proposition" title="Proposition 2.2-2 (ℤ/nℤ の生成元)">
                <p>
                    剰余群 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> の元 <InlineMath math="\bar{k}" /> が生成元となるための必要十分条件は、その代表元 <InlineMath math="k" /> と <InlineMath math="n" /> が互いに素（<InlineMath math="\gcd(k, n) = 1" />）であることである。
                    したがって、生成元の個数はオイラー関数 <InlineMath math="\phi(n)" /> に等しい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\langle \bar{k} \rangle = \mathbb{Z}/n\mathbb{Z}" /> であることは、次の条件が順に成り立つことと同値である：
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-4">
                    <li>ある整数 <InlineMath math="x" /> が存在して <InlineMath math="x \bar{k} = \bar{1}" /> となる。</li>
                    <li>合同式 <InlineMath math="kx \equiv 1 \pmod n" /> が整数解を持つ。</li>
                    <li>一次不定方程式 <InlineMath math="kx + ny = 1" /> が整数解を持つ。</li>
                </ol>
                <p className="mt-4">
                    整数論の結果（ベズーの等式）より、この方程式が解を持つための必要十分条件は <InlineMath math="\gcd(k, n) = 1" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-2">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一つの元 <InlineMath math="a" /> の累乗全体が作る部分群を <InlineMath math="\langle a \rangle" /> と書き、群全体がこれに一致するとき巡回群という。</li>
                    <li>巡回群はその構造から、無限群なら <InlineMath math="\mathbb{Z}" />、有限群なら <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> に必ず同型となる。</li>
                    <li><InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> の生成元の個数は、<InlineMath math="n" /> と互いに素な数の個数（オイラー関数 <InlineMath math="\phi(n)" />）によって決定される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
