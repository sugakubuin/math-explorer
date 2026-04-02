import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FixedFieldsAndArtinsTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ガロア理論の核心は、「体の自己同型群（ガロア群）の部分群」と「拡大の中間体」を結びつけることです。この結びつきを与えるキーコンセプトが、群の作用によって「動かない要素」を集めた「固定体」という概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固定体の定義と基本性質</h2>

            <p>
                自己同型群の元を作用させたときに、値が変わらない元だけをかき集めた集合を定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (固定体)">
                <p>
                    体 <InlineMath math="K" /> の自己同型群を <InlineMath math="\mathrm{Aut}(K)" /> とし、その部分群を <InlineMath math="H \leq \mathrm{Aut}(K)" /> とする。このとき、<InlineMath math="H" /> のすべての元 <InlineMath math="\sigma" /> に対して不変であるような <InlineMath math="K" /> の元の集合
                </p>
                <BlockMath math="K^H = \{x \in K \mid \sigma(x) = x \text{ for all } \sigma \in H\}" />
                <p>
                    を <InlineMath math="H" /> の<strong>固定体（fixed field）</strong>または<strong>不変体</strong>という。
                </p>
            </ContentBox>

            <p>
                その名の通り、この集合は部分体をなします。
            </p>

            <ContentBox type="proposition" title="Proposition 5.2-1 (K^H は体)">
                <p>
                    固定体 <InlineMath math="K^H" /> は、体 <InlineMath math="K" /> の部分体をなす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K^H" /> が加法と乗法、および逆元の操作について閉じていることを示せばよい。任意の <InlineMath math="a, b \in K^H" /> と、任意の <InlineMath math="\sigma \in H" /> をとる。定義より <InlineMath math="\sigma(a) = a" /> および <InlineMath math="\sigma(b) = b" /> である。
                </p>
                <p>
                    <InlineMath math="\sigma" /> は体の自己同型（環準同型）であるから、
                </p>
                <ul className="list-disc list-inside mt-2 mb-2">
                    <li><InlineMath math="\sigma(a+b) = \sigma(a) + \sigma(b) = a + b" />。よって <InlineMath math="a+b \in K^H" />。</li>
                    <li><InlineMath math="\sigma(ab) = \sigma(a)\sigma(b) = ab" />。よって <InlineMath math="ab \in K^H" />。</li>
                </ul>
                <p>
                    また、<InlineMath math="\sigma(0)=0" />、<InlineMath math="\sigma(1)=1" /> なので <InlineMath math="0, 1 \in K^H" />。<InlineMath math="a \neq 0" /> のとき、<InlineMath math="\sigma(a^{-1}) = \sigma(a)^{-1} = a^{-1}" /> より <InlineMath math="a^{-1} \in K^H" />。
                </p>
                <p>
                    したがって <InlineMath math="K^H" /> は部分体である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (Q(√2) の固定体)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt{2})" /> とし、自己同型群 <InlineMath math="G = \mathrm{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) = \{\mathrm{id}, \sigma\}" /> （ただし <InlineMath math="\sigma(a+b\sqrt{2}) = a-b\sqrt{2}" />）を考える。
                </p>
                <p>
                    <InlineMath math="G" /> の部分群は、自明な群 <InlineMath math="H_1 = \{\mathrm{id}\}" /> と、全体 <InlineMath math="H_2 = G" /> の2つである。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="K^{H_1}" /> は、<InlineMath math="\mathrm{id}" /> の作用で不変な元全体なので、<InlineMath math="K" /> 全体（<InlineMath math="\mathbb{Q}(\sqrt{2})" />）である。</li>
                    <li><InlineMath math="K^{H_2}" /> は、<InlineMath math="\sigma(x) = x" /> を満たす元全体。<InlineMath math="a-b\sqrt{2} = a+b\sqrt{2}" /> より <InlineMath math="b=0" /> となり、有理数のみが残る。よって <InlineMath math="K^{H_2} = \mathbb{Q}" /> である。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アルティンの定理</h2>

            <p>
                群から体を定義する「固定体」の構成において、その拡大次数と群の位数が完全に一致するという、ガロア理論の礎石ともいえる美しい定理があります。エミール・アルティン（Emil Artin）によって定式化されました。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (アルティンの定理)">
                <p>
                    体 <InlineMath math="K" /> の自己同型群の<strong>有限部分群</strong>を <InlineMath math="G \leq \mathrm{Aut}(K)" /> とし、その固定体を <InlineMath math="K^G" /> とする。このとき、体の拡大 <InlineMath math="K/K^G" /> はガロア拡大であり、そのガロア群は <InlineMath math="G" /> 自身に一致する。
                </p>
                <BlockMath math="\mathrm{Gal}(K/K^G) = G" />
                <p>
                    さらに、その拡大次数は群 <InlineMath math="G" /> の位数に等しい。
                </p>
                <BlockMath math="[K : K^G] = |G|" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）<br />
                    固定体の定義から、<InlineMath math="G" /> の任意の元は <InlineMath math="K^G" /> を固定する。したがって包含関係 <InlineMath math="G \leq \mathrm{Gal}(K/K^G)" /> は明らかである。
                </p>
                <p>
                    証明の主要部は <InlineMath math="[K : K^G] \leq |G|" /> を示すことにある。これを証明するために「デデキントの補題（線形独立性定理）」、すなわち「相異なる体準同型 <InlineMath math="\sigma_1, \dots, \sigma_n : K \to L" /> は <InlineMath math="L" /> 上線形独立である（<InlineMath math="c_1\sigma_1 + \dots + c_n\sigma_n = 0 \Rightarrow c_i = 0" />）」を用いる。<InlineMath math="[K : K^G] > |G|" /> と仮定すると、連立一次方程式の解の自由度に関する線形代数の議論から、この線形独立性に矛盾する関係式が構成されてしまう。よって <InlineMath math="[K : K^G] \leq |G|" />。
                </p>
                <p>
                    一方、<InlineMath math="K/K^G" /> のガロア群の定義から <InlineMath math="|\mathrm{Gal}(K/K^G)| \leq [K : K^G]" /> であり、<InlineMath math="|G| \leq |\mathrm{Gal}(K/K^G)|" /> を繋ぎ合わせると、
                </p>
                <BlockMath math="|G| \leq |\mathrm{Gal}(K/K^G)| \leq [K : K^G] \leq |G|" />
                <p>
                    となり、すべてが等号で結ばれる。すなわち <InlineMath math="[K : K^G] = |G|" /> であり、群も一致する。<InlineMath math="[K:K^G] = |\mathrm{Gal}(K/K^G)|" /> が成立するため、前節の定理より <InlineMath math="K/K^G" /> はガロア拡大である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-2 (S_3 の固定体)">
                <p>
                    <InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> とし、<InlineMath math="G = \mathrm{Gal}(K/\mathbb{Q}) \cong S_3" />（位数 6）とする。
                </p>
                <p>
                    アルティンの定理より、<InlineMath math="G" /> 全体の固定体は <InlineMath math="K^{S_3} = \mathbb{Q}" /> であり、<InlineMath math="[K : \mathbb{Q}] = |S_3| = 6" /> が成り立つ。
                </p>
                <p>
                    次に、<InlineMath math="G" /> の部分群 <InlineMath math="H = \langle \sigma \rangle \cong \mathbb{Z}/3\mathbb{Z}" /> （ただし <InlineMath math="\sigma(\sqrt[3]{2}) = \omega\sqrt[3]{2}, \sigma(\omega) = \omega" />）を考える。
                </p>
                <p>
                    この <InlineMath math="H" /> による固定体を考えると、<InlineMath math="\sigma" /> は <InlineMath math="\omega" /> を固定するため <InlineMath math="\mathbb{Q}(\omega) \subset K^H" /> である。アルティンの定理により <InlineMath math="[K : K^H] = |H| = 3" /> であり、一方連鎖律から <InlineMath math="[K : \mathbb{Q}(\omega)] = 3" /> であるため、次元の比較により <InlineMath math="K^H = \mathbb{Q}(\omega)" /> となることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (アルティンの定理の凄さ)">
                <p>
                    歴史的に、ガロアは「基礎体があって、多項式の根を添加して体を拡大していく」というボトムアップのアプローチでガロア群を定義しました。しかしアルティンの定理は、逆に「大きな体 <InlineMath math="K" /> とその自己同型の有限群 <InlineMath math="G" /> を与えれば、<strong>自動的に <InlineMath math="K^G" /> という基礎体が決まり、<InlineMath math="K/K^G" /> がガロア拡大になる</strong>」というトップダウンの視点を与えました。これにより、ガロア理論の証明は劇的に洗練されたのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="H" /> の作用で動かない体の元全体を<strong>固定体 <InlineMath math="K^H" /></strong> という。</li>
                    <li><strong>アルティンの定理</strong>：体 <InlineMath math="K" /> の有限自己同型群 <InlineMath math="G" /> をとれば、<InlineMath math="K/K^G" /> は必ずガロア拡大となり、<InlineMath math="\mathrm{Gal}(K/K^G) = G" /> および <InlineMath math="[K:K^G] = |G|" /> が成り立つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
