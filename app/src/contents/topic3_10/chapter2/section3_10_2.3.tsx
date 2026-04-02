import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PerfectFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で「標数 0 の体上ではすべての既約多項式が分離的である」ことを見ました。この非常に都合の良い性質を持つ体を一般化したのが「完全体」です。ガロア理論の美しい基本定理は、原則としてこの完全体の上で展開されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全体の定義と特徴づけ</h2>

            <p>
                すべての代数拡大が自動的に分離的になってくれる、素直で扱いやすい体を完全体と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (完全体)">
                <p>
                    体 <InlineMath math="F" /> が<strong>完全体（perfect field）</strong>であるとは、<InlineMath math="F" /> の代数拡大がすべて分離拡大になることである。
                </p>
                <p>
                    これは、「<InlineMath math="F[x]" /> の既約多項式がすべて分離多項式（重根を持たない）であること」と同値である。
                </p>
            </ContentBox>

            <p>
                どのような体が完全体になるのでしょうか。標数 0 の体はすでに確認した通りですが、正標数の場合でも、ある写像の性質を調べることで完全体かどうかを完全に判定できます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (完全体の特徴づけ)">
                <p>
                    体 <InlineMath math="F" /> が完全体であるための条件は以下の通りである。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="\mathrm{char}(F) = 0" /> の体は、すべて完全体である。</li>
                    <li><InlineMath math="\mathrm{char}(F) = p > 0" /> の体 <InlineMath math="F" /> が完全体であるための必要十分条件は、フロベニウス写像 <InlineMath math="\phi : F \to F \quad (\phi(a) = a^p)" /> が<strong>全射</strong>であること（すなわち <InlineMath math="F = F^p" />）である。</li>
                </ol>
                <p>
                    特に、有限体はすべて完全体である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) 標数 0 の場合は前節の Proposition 2.2-1 で証明済みである。
                </p>
                <p>
                    (2) 標数 <InlineMath math="p > 0" /> の場合を証明する。<br />
                    （<InlineMath math="\Leftarrow" />） <InlineMath math="F = F^p" /> と仮定する。<InlineMath math="F[x]" /> の既約多項式 <InlineMath math="f(x)" /> が分離的でない（<InlineMath math="f'(x) = 0" />）と仮定して矛盾を導く。微分がゼロであることから、<InlineMath math="f(x)" /> は <InlineMath math="x^p" /> の多項式、すなわち <InlineMath math="f(x) = g(x^p) = a_n (x^p)^n + \cdots + a_1 (x^p) + a_0" /> の形をしている。<InlineMath math="F = F^p" /> なので、各係数 <InlineMath math="a_i" /> はある <InlineMath math="b_i \in F" /> を用いて <InlineMath math="a_i = b_i^p" /> と書ける。すると標数 <InlineMath math="p" /> の「一年生の夢」より、
                </p>
                <BlockMath math="\begin{aligned} f(x) &= b_n^p (x^n)^p + \cdots + b_1^p x^p + b_0^p \\ &= (b_n x^n + \cdots + b_1 x + b_0)^p \end{aligned}" />
                <p>
                    となり、<InlineMath math="f(x)" /> が <InlineMath math="F[x]" /> において <InlineMath math="p" /> 乗の形に因数分解できてしまう。これは <InlineMath math="f(x)" /> が既約であることに矛盾。よって <InlineMath math="f" /> は分離的であり、<InlineMath math="F" /> は完全体である。
                </p>
                <p>
                    （<InlineMath math="\Rightarrow" />） <InlineMath math="F \neq F^p" /> と仮定する。ある <InlineMath math="a \in F" /> が存在して <InlineMath math="a \notin F^p" /> である（<InlineMath math="F" /> 内に <InlineMath math="p" /> 乗根を持たない）。このとき多項式 <InlineMath math="x^p - a" /> を考えると、前節の Example 2.2-1 のようにこれは既約でありながら導関数が <InlineMath math="0" /> となるため非分離である。よって <InlineMath math="F" /> は完全体ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から、有限体が完全体であることが直ちに導かれます。
            </p>

            <ContentBox type="example" title="Example 2.3-1 (有限体は完全体)">
                <p>
                    有限体 <InlineMath math="\mathbb{F}_p" /> におけるフロベニウス写像 <InlineMath math="\phi : a \mapsto a^p" /> を考える。有限体上の体準同型は常に単射であり、有限集合から自身への単射は必ず全射になる（鳩の巣原理）。
                </p>
                <p>
                    したがって <InlineMath math="\phi" /> は全単射となり、<InlineMath math="\mathbb{F}_p = \mathbb{F}_p^p" /> を満たす。定理より、すべての有限体は完全体である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完全体と分離拡大の関係</h2>

            <p>
                私たちが普段扱うほとんどの数は完全体の上で議論されます。
            </p>

            <ContentBox type="example" title="Example 2.3-2 (完全体と非完全体の具体例)">
                <p>
                    <strong>完全体であるもの：</strong> 有理数体 <InlineMath math="\mathbb{Q}" />、実数体 <InlineMath math="\mathbb{R}" />、複素数体 <InlineMath math="\mathbb{C}" />（標数 0 だから）。有限体 <InlineMath math="\mathbb{F}_q" />（フロベニウス写像が全射だから）。
                </p>
                <p>
                    <strong>完全体ではないもの：</strong> 標数 <InlineMath math="p" /> の有理関数体 <InlineMath math="\mathbb{F}_p(t)" />。変数 <InlineMath math="t" /> は <InlineMath math="\mathbb{F}_p(t)" /> 内のいかなる有理関数の <InlineMath math="p" /> 乗としても表せない（<InlineMath math="t \notin (\mathbb{F}_p(t))^p" />）ため、フロベニウス写像は全射ではない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (完全体の重要性)">
                <p>
                    ガロア理論の基本定理は、「分離拡大」であることを前提として成り立っています。完全体の上では<strong>「すべての代数拡大が自動的に分離拡大になる」</strong>ため、重根などの病的なケースを一切気にする必要がなく、ガロア理論が最も綺麗に展開できます。
                </p>
                <p>
                    そのため、本コースを含む多くの代数学の入門では、暗黙のうちに、あるいは明示的に「基礎体は完全体である」という仮定を置いて議論を進めます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>すべての代数拡大が分離的になる体を<strong>完全体</strong>という。</li>
                    <li>標数 <InlineMath math="0" /> の体はすべて完全体である。</li>
                    <li>標数 <InlineMath math="p > 0" /> の体が完全体であることと、フロベニウス写像 <InlineMath math="a \mapsto a^p" /> が全射であることは同値である。</li>
                    <li>有限体はすべて完全体である。ガロア理論は主に完全体の上で展開される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
