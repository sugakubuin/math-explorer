import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExistenceAndUniquenessOfFiniteFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、有限体の位数は必ず素数のべき乗 <InlineMath math="p^n" /> になることを見ました。本節ではその逆、つまり「任意の素数のべき乗 <InlineMath math="p^n" /> に対して、その位数の有限体が（同型を除いて）ただ一つ存在する」という美しい結果を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体の存在</h2>

            <p>
                特定の多項式の分解体を考えることで、目的の位数を持つ有限体を構成することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (有限体の存在)">
                <p>
                    任意の素数 <InlineMath math="p" /> と正整数 <InlineMath math="n" /> に対して、位数がちょうど <InlineMath math="p^n" /> となる有限体が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多項式 <InlineMath math="f(x) = x^{p^n} - x \in \mathbb{F}_p[x]" /> を考える。Chapter 3 の定理 3.1-1 より、この多項式の <InlineMath math="\mathbb{F}_p" /> 上の分解体 <InlineMath math="K" /> が存在する。
                </p>
                <p>
                    <InlineMath math="K" /> において、<InlineMath math="f(x)" /> の根の集合を <InlineMath math="S = \{\alpha \in K \mid \alpha^{p^n} - \alpha = 0\} = \{\alpha \in K \mid \alpha^{p^n} = \alpha\}" /> とする。この <InlineMath math="S" /> 自身が体をなすことを示す。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\alpha, \beta \in S" /> ならば、フロベニウス写像の性質（一年生の夢）を <InlineMath math="n" /> 回使うことで、<InlineMath math="(\alpha+\beta)^{p^n} = \alpha^{p^n} + \beta^{p^n} = \alpha + \beta" />。よって <InlineMath math="\alpha+\beta \in S" />。</li>
                    <li>同様に <InlineMath math="(\alpha\beta)^{p^n} = \alpha^{p^n} \beta^{p^n} = \alpha\beta" />。よって <InlineMath math="\alpha\beta \in S" />。</li>
                    <li><InlineMath math="\alpha \neq 0" /> のとき、<InlineMath math="(\alpha^{-1})^{p^n} = (\alpha^{p^n})^{-1} = \alpha^{-1}" />。よって <InlineMath math="\alpha^{-1} \in S" />。</li>
                </ul>
                <p>
                    したがって <InlineMath math="S" /> は <InlineMath math="K" /> の部分体である。一方、<InlineMath math="K" /> は <InlineMath math="f(x)" /> の根で生成される最小の体なので、<InlineMath math="K = S" /> でなければならない。つまり、<InlineMath math="K" /> の元はすべて <InlineMath math="f(x)" /> の根である。
                </p>
                <p>
                    最後に、<InlineMath math="K" /> の元の個数（つまり根の個数）を調べる。<InlineMath math="f(x)" /> を形式的微分すると、<InlineMath math="f'(x) = p^n x^{p^n - 1} - 1 = -1 \neq 0" /> （標数 <InlineMath math="p" /> のため <InlineMath math="p^n = 0" />）となる。<InlineMath math="f" /> と <InlineMath math="f'" /> は共通根を持たないため、<InlineMath math="f(x)" /> は重根を持たない（分離多項式である）。
                </p>
                <p>
                    次数が <InlineMath math="p^n" /> で重根を持たないため、その根の個数はちょうど <InlineMath math="p^n" /> 個である。よって <InlineMath math="|K| = p^n" /> であり、所望の有限体が構成された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-1 (F_8 の構成)">
                <p>
                    位数 <InlineMath math="8 = 2^3" /> の有限体 <InlineMath math="\mathbb{F}_8" /> を構成する。証明に従うならば、<InlineMath math="x^8 - x" /> の分解体を考えればよい。<InlineMath math="x^8 - x" /> を <InlineMath math="\mathbb{F}_2" /> 上で因数分解すると、
                </p>
                <BlockMath math="x^8 - x = x(x-1)(x^3+x+1)(x^3+x^2+1)" />
                <p>
                    となる（3次の既約多項式が2つ現れる）。構成の手順として、既約多項式 <InlineMath math="x^3+x+1" /> を用いて剰余環 <InlineMath math="\mathbb{F}_2[x]/(x^3+x+1)" /> を作ると、これは <InlineMath math="\mathbb{F}_8" /> の一つの実現となる。
                </p>
                <p>
                    <InlineMath math="\alpha^3 = \alpha + 1" /> を満たす元 <InlineMath math="\alpha" /> を用いると、<InlineMath math="\mathbb{F}_8" /> の 8 つの元は <InlineMath math="0, 1, \alpha, \alpha^2, \alpha+1, \alpha^2+\alpha, \alpha^2+\alpha+1, \alpha^2+1" /> のように表される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体の一意性</h2>

            <p>
                位数 <InlineMath math="p^n" /> の体を作る方法は複数あるかもしれません（例えば先ほどの例で <InlineMath math="x^3+x^2+1" /> を使って構成することもできます）。しかし、それらはすべて本質的に同じ（同型）になります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-2 (有限体の一意性)">
                <p>
                    位数が同じ <InlineMath math="p^n" /> であるような2つの有限体は、必ず互いに同型である。この唯一の有限体を <strong><InlineMath math="\mathbb{F}_{p^n}" /></strong> （または <InlineMath math="\mathrm{GF}(p^n)" />：ガロア体）と表記する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位数が <InlineMath math="p^n" /> の2つの体を <InlineMath math="K" /> と <InlineMath math="K'" /> とする。
                </p>
                <p>
                    群論のラグランジュの定理の系より、<InlineMath math="K" /> の非零元からなる乗法群 <InlineMath math="K^\times" /> の位数は <InlineMath math="p^n - 1" /> である。したがって、任意の <InlineMath math="\alpha \in K^\times" /> に対して <InlineMath math="\alpha^{p^n - 1} = 1" /> が成り立つ。両辺に <InlineMath math="\alpha" /> を掛けると <InlineMath math="\alpha^{p^n} = \alpha" /> となる。これは <InlineMath math="\alpha = 0" /> のときも成り立つ。
                </p>
                <p>
                    よって、<InlineMath math="K" /> のすべての元は多項式 <InlineMath math="f(x) = x^{p^n} - x \in \mathbb{F}_p[x]" /> の根である。<InlineMath math="K" /> の元の数は <InlineMath math="p^n" /> なので、<InlineMath math="K" /> はまさに <InlineMath math="f(x)" /> の根全体の集合であり、すなわち <InlineMath math="f(x)" /> の <InlineMath math="\mathbb{F}_p" /> 上の分解体である。
                </p>
                <p>
                    同様の議論から、<InlineMath math="K'" /> もまた <InlineMath math="f(x)" /> の <InlineMath math="\mathbb{F}_p" /> 上の分解体であることがわかる。
                </p>
                <p>
                    Chapter 3 で学んだ「分解体の一意性」（Theorem 3.1-2）より、同じ多項式の分解体である <InlineMath math="K" /> と <InlineMath math="K'" /> は <InlineMath math="\mathbb{F}_p" />-同型である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (F_4 の一意性の確認)">
                <p>
                    前節で <InlineMath math="\mathbb{F}_4" /> を構成したが、これは <InlineMath math="x^4 - x" /> の分解体に他ならない。実際、<InlineMath math="\mathbb{F}_2" /> 上で
                </p>
                <BlockMath math="x^4 - x = x(x-1)(x^2+x+1)" />
                <p>
                    と因数分解される。<InlineMath math="\mathbb{F}_4" /> の元 <InlineMath math="0, 1, \alpha, \alpha+1" /> がそれぞれこの多項式の根になっていることが確認できる。もし別の方法で位数 4 の体を作ったとしても、それは必ず <InlineMath math="x^4-x" /> の分解体となるため、最初に作った <InlineMath math="\mathbb{F}_4" /> と同型にならざるを得ない。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多項式 <InlineMath math="x^{p^n} - x \in \mathbb{F}_p[x]" /> の分解体を考えることで、位数 <InlineMath math="p^n" /> の有限体が存在することが証明される。</li>
                    <li>位数 <InlineMath math="p^n" /> の体は多項式 <InlineMath math="x^{p^n} - x" /> の分解体に他ならず、分解体の一意性から、同じ位数の有限体はすべて同型である。</li>
                    <li>この唯一の体を <InlineMath math="\mathbb{F}_{p^n}" /> と書く。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
