import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function KernelAndNormalSubgroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                準同型写像の「核」は、単なる部分群であるだけでなく、常に正規部分群という強い性質を持ちます。
                この事実は、正規部分群がなぜ「正規」と呼ばれるのか、その数学的な重要性を解き明かす鍵となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">核は正規部分群である</h2>

            <ContentBox type="theorem" title="Theorem 5.2-1 (核の正規性)">
                <p>
                    準同型写像 <InlineMath math="\phi: G \to G'" /> の核 <InlineMath math="\ker\phi" /> は、<InlineMath math="G" /> の正規部分群である（<InlineMath math="\ker\phi \trianglelefteq G" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K = \ker\phi" /> とおく。任意の <InlineMath math="g \in G" /> と <InlineMath math="k \in K" /> に対して、<InlineMath math="gkg^{-1} \in K" /> が成り立つことを示せばよい。
                </p>
                <ul className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <InlineMath math="gkg^{-1}" /> を <InlineMath math="\phi" /> で移すと、準同型の性質より
                        <BlockMath math="\phi(gkg^{-1}) = \phi(g)\phi(k)\phi(g)^{-1}" />
                        となる。
                    </li>
                    <li>
                        ここで <InlineMath math="k \in \ker\phi" /> より <InlineMath math="\phi(k) = e'" />（<InlineMath math="G'" /> の単位元）であるから、
                        <BlockMath math="\phi(g)\phi(k)\phi(g)^{-1} = \phi(g)e'\phi(g)^{-1} = \phi(g)\phi(g)^{-1} = e'" />
                        が得られる。
                    </li>
                    <li>
                        したがって、<InlineMath math="\phi(gkg^{-1}) = e'" /> より <InlineMath math="gkg^{-1} \in \ker\phi" /> であり、<InlineMath math="\ker\phi \trianglelefteq G" /> が示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                逆に、どのような正規部分群も、ある準同型写像の核として実現できることが証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-2 (正規部分群は核である)">
                <p>
                    <InlineMath math="H \trianglelefteq G" /> とするとき、自然な全射 <InlineMath math="\pi: G \to G/H \ (g \mapsto gH)" /> は準同型写像であり、その核は <InlineMath math="H" /> に一致する（<InlineMath math="\ker\pi = H" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>準同型性</b>：<br />
                        商群の演算の定義（Theorem 4.2-1）より、<InlineMath math="\pi(ab) = (ab)H = (aH)(bH) = \pi(a)\pi(b)" /> であり、<InlineMath math="\pi" /> は準同型である。
                    </li>
                    <li>
                        <b>核の確認</b>：<br />
                        商群 <InlineMath math="G/H" /> の単位元は <InlineMath math="eH = H" /> である。
                        したがって、<InlineMath math="g \in \ker\pi \iff \pi(g) = H \iff gH = H \iff g \in H" />。
                        よって <InlineMath math="\ker\pi = H" /> である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規化群</h2>

            <p className="leading-relaxed">
                部分群が正規部分群でない場合でも、「どの程度正規に近いか」を測るための部分群を考えることができます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (正規化群)">
                <p>
                    群 <InlineMath math="G" /> の部分群 <InlineMath math="H" /> に対して、
                    <BlockMath math="N_G(H) = \{ g \in G \mid gHg^{-1} = H \}" />
                    を、<InlineMath math="H" /> の <InlineMath math="G" /> における<b>正規化群 (Normalizer)</b> という。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.2-3 (正規化群の性質)">
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><InlineMath math="N_G(H) \leq G" /> であり、<InlineMath math="H \trianglelefteq N_G(H)" /> が成り立つ。</li>
                    <li><InlineMath math="H \trianglelefteq G" /> であることと、<InlineMath math="N_G(H) = G" /> であることは同値である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-decimal list-inside space-y-4">
                    <li>
                        <b>部分群であること</b>：<br />
                        単位元 <InlineMath math="e" /> は <InlineMath math="eHe^{-1} = H" /> を満たすので <InlineMath math="e \in N_G(H)" />。
                        <InlineMath math="g_1, g_2 \in N_G(H)" /> ならば、
                        <BlockMath math="\begin{aligned} (g_1 g_2) H (g_1 g_2)^{-1} &= g_1 (g_2 H g_2^{-1}) g_1^{-1} \\ &= g_1 H g_1^{-1} = H \end{aligned}" />
                        より積について閉じている。
                        また、<InlineMath math="g H g^{-1} = H" /> の両辺に左から <InlineMath math="g^{-1}" />、右から <InlineMath math="g" /> を掛ければ <InlineMath math="H = g^{-1} H g" /> となり、逆元についても閉じている。
                    </li>
                    <li>
                        <b>H を正規部分群として含むこと</b>：<br />
                        任意の <InlineMath math="h \in H" /> に対して、<InlineMath math="hHh^{-1} = H" />（部分群の性質）であるから、<InlineMath math="H \subset N_G(H)" /> である。
                        また、正規化群の定義から、任意の <InlineMath math="n \in N_G(H)" /> に対して <InlineMath math="nHn^{-1} = H" /> なので、<InlineMath math="H \trianglelefteq N_G(H)" /> である。
                    </li>
                    <li>
                        <b>同値性</b>：<br />
                        <InlineMath math="H \trianglelefteq G" /> とは、すべての <InlineMath math="g \in G" /> に対して <InlineMath math="gHg^{-1} = H" /> が成り立つことと同値である。
                        これは正規化群の定義より、すべての <InlineMath math="g \in G" /> が <InlineMath math="N_G(H)" /> に属すること、すなわち <InlineMath math="N_G(H) = G" /> と同値である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (S3 での計算例)">
                <p>
                    3次対称群 <InlineMath math="S_3" /> において、正規でない部分群 <InlineMath math="H = \{e, (12)\}" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="g = (13)" /> のとき、<InlineMath math="(13)H(13)^{-1} = \{e, (23)\} \neq H" /> なので <InlineMath math="g \notin N_{S_3}(H)" />。
                    </li>
                    <li>
                        この部分群を正規化するのは、<InlineMath math="e" /> と <InlineMath math="(12)" /> 自身のみである。
                        よって <InlineMath math="N_{S_3}(H) = H" /> となり、正規でないことが確認できる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>準同型写像の核は常に正規部分群であり、逆に正規部分群は常にある準同型の核となる。</li>
                    <li>「正規部分群」と「準同型写像の核」は、数学的に全く同じ対象の異なる側面である。</li>
                    <li>正規化群は、部分群を正規部分群として含む最大の群の情報を与えてくれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
