import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TransfiniteInductionAndRecursion() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                自然数に関する証明や定義で「数学的帰納法」が活躍したように、無限の順序数全体に対しても帰納法や再帰的定義を拡張することができます。これを「超限帰納法」および「超限再帰」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">超限帰納法</h2>

            <ContentBox
                type="theorem"
                title="Theorem 8.2-1 (超限帰納法 / Transfinite Induction)"
            >
                <p>
                    順序数 <InlineMath math="\alpha" /> に関する性質 <InlineMath math="P(\alpha)" /> について、以下の推論が成立するならば、<strong>すべての順序数について <InlineMath math="P(\alpha)" /> が成立する</strong>。
                </p>
                <BlockMath math="\forall \alpha\, \Big( (\forall \beta < \alpha,\; P(\beta)) \implies P(\alpha) \Big)" />
                <p>
                    （意味：「自分より小さいすべての順序数で成立していれば、自分でも成立する」というステップが証明できれば、全体で成立する）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    「最小反例の原理（背理法）」を用いて証明する。
                </p>
                <p>
                    すべての順序数で <InlineMath math="P(\alpha)" /> が成立するわけではないと仮定する。すると、「<InlineMath math="P(\alpha)" /> が偽となる順序数」の集合 <InlineMath math="X" /> が存在する（<InlineMath math="X \neq \emptyset" />）。
                </p>
                <p>
                    順序数全体の集まりは整列順序を持っているので、空でない集合 <InlineMath math="X" /> には必ず<strong>最小元 <InlineMath math="\alpha_0" /></strong> が存在する。
                </p>
                <p>
                    <InlineMath math="\alpha_0" /> は「<InlineMath math="P" /> が偽となる最小の順序数」であるから、<InlineMath math="\alpha_0" /> より真に小さい任意の順序数 <InlineMath math="\beta < \alpha_0" /> においては、<InlineMath math="P(\beta)" /> は<strong>真</strong>である（さもなければ <InlineMath math="\alpha_0" /> が最小であることに反する）。
                </p>
                <p>
                    つまり、<InlineMath math="\forall \beta < \alpha_0,\; P(\beta)" /> が成立している。
                    ここで定理の前提条件を適用すると、<InlineMath math="P(\alpha_0)" /> も真でなければならない。
                    しかしこれは <InlineMath math="\alpha_0 \in X" />（すなわち <InlineMath math="P(\alpha_0)" /> が偽）であることと矛盾する。
                </p>
                <p>
                    ゆえに、反例の集合 <InlineMath math="X" /> は空であり、すべての順序数について <InlineMath math="P(\alpha)" /> は成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.2-1 (超限帰納法の適用：非可算順序数の存在)"
            >
                <p>
                    自然数 <InlineMath math="\omega" /> の次に作られる順序数 <InlineMath math="\omega+1, \omega+2, \omega+\omega, \ldots" /> などは、どんなに遠くまで行っても「可算（自然数と全単射が作れる）」である。では「非可算な順序数」は存在するのだろうか？
                </p>
                <p>
                    性質 <InlineMath math="P(\alpha)" /> を「<InlineMath math="\alpha" /> は可算順序数である」とする。もしすべての順序数でこれが成立するなら、超限帰納法より順序数はすべて可算となる。
                    しかし、ハルトークスの定理（Hartogs' lemma）により、どんな集合にも「それより真に大きい基数（順序数型）」が存在することが示されるため、すべての順序数が可算であることはあり得ない。
                </p>
                <p>
                    したがって <InlineMath math="P(\alpha)" /> が偽となる最小の順序数が存在する。この「最初の非可算順序数」を <strong><InlineMath math="\omega_1" />（オメガワン）</strong> と書く。<InlineMath math="\omega_1" /> は、可算順序数すべてを集めた集合そのものであり、それ自体が非可算の濃度を持つ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">超限再帰による定義</h2>

            <p className="leading-relaxed">
                帰納法が「証明」のための道具であるのに対し、再帰（recursion）は新しい関数や集合を「定義」するための道具です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 8.2-1 (超限再帰定理 / Transfinite Recursion)"
            >
                <p>
                    「これまでに作られた値の列」を受け取って「次の新しい値」を出力する関数 <InlineMath math="F" /> が与えられたとする。
                    このとき、すべての順序数 <InlineMath math="\alpha" /> を定義域とし、
                    <BlockMath math="G(\alpha) = F(\{G(\beta)\}_{\beta < \alpha})" />
                    を満たすような関数（より正確にはクラス関数） <InlineMath math="G" /> が一意に存在する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    任意の順序数 <InlineMath math="\delta" /> について、定義域を <InlineMath math="\delta" /> 未満に制限した局所的な関数 <InlineMath math="g_\delta" /> がただ1つ定まることを、超限帰納法を用いて証明する。局所的な関数の一意性が言えれば、それらをすべての順序数に対して貼り合わせる（和集合をとる）ことで、全域で定義された関数 <InlineMath math="G" /> を一意に構成できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 8.2-2 (フォン・ノイマン階層と宇宙 V)"
            >
                <p>
                    超限再帰定理を用いて、すべての集合が属する階層構造（累積階層）を定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>ベース：</strong> <InlineMath math="V_0 = \emptyset" /></li>
                    <li><strong>後継順序数：</strong> <InlineMath math="V_{\alpha+1} = \mathcal{P}(V_\alpha)" /> （一つ前の階層のべき集合をとる）</li>
                    <li><strong>極限順序数：</strong> <InlineMath math="V_\lambda = \bigcup_{\alpha < \lambda} V_\alpha" /> （それまでの階層の和集合をとる）</li>
                </ul>
                <p>
                    この再帰的操作をすべての順序数にわたって行った和集合 <InlineMath math="V = \bigcup_{\alpha} V_\alpha" /> を<strong>フォン・ノイマン宇宙</strong>と呼ぶ。
                    ZFの正則性公理（Z7）により、「ZF公理系が対象とするすべての集合は、必ずこの階層 <InlineMath math="V" /> のどこかの階層に属している」ことが証明される。超限再帰によって「集合の宇宙」そのものが構築されたのである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>超限帰納法：</strong> 順序数の整列性（最小元が存在する性質）を利用して、無限の彼方まで続くすべての順序数に対して命題を証明する手法。</li>
                    <li><strong>超限再帰定理：</strong> 「自分より小さい順序数での値」を使って「自分の値」を決めるという漸化式が、すべての順序数にわたって一意に構成できることを保証する定理。</li>
                    <li>この手法を用いて、最初の非可算順序数 <InlineMath math="\omega_1" /> や、集合全体の宇宙 <InlineMath math="V" /> が構成される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}