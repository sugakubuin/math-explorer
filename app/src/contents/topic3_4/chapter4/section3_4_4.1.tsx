import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SchwartzSpaceSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では、フーリエ変換を <InlineMath math="L^1" /> や <InlineMath math="L^2" /> の空間上で定義しました。しかし、これらの空間では微分や多項式の乗算が必ずしも空間内に留まらないという不便さがあります。本節では、フーリエ解析において「最も性質の良い」関数空間である <b>シュワルツ空間（急減少関数の空間）</b> について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">シュワルツ空間の定義と例</h2>

            <p>
                シュワルツ空間は、無限回微分可能であり、かつ無限遠方においてどのような多項式よりも速く減衰する関数の集合です。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (シュワルツ空間)">
                <p>
                    複素数値関数 <InlineMath math="f \in C^\infty(\mathbb{R})" /> が <b>シュワルツ関数</b> （または急減少関数）であるとは、任意の非負整数 <InlineMath math="k, m" /> に対し、
                </p>
                <BlockMath math="\|f\|_{k,m} := \sup_{x \in \mathbb{R}} |x^k f^{(m)}(x)| < \infty" />
                <p>
                    が成り立つことをいう。このような関数全体の集合を <b>シュワルツ空間</b> と呼び、<InlineMath math="\mathcal{S}(\mathbb{R})" /> と記す。
                </p>
            </ContentBox>

            <p>
                この定義は、関数 <InlineMath math="f" /> とそのあらゆる導関数を多項式で「抑え込める」ことを意味しています。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (シュワルツ関数の典型例)">
                <p>
                    <b>ガウス関数</b> <InlineMath math="f(x) = e^{-x^2}" /> はシュワルツ空間の代表的な元です。<InlineMath math="e^{-x^2}" /> は無限回微分可能であり、導関数は「多項式 <InlineMath math="\times e^{-x^2}" />」の形になるため、無限遠での指数的な減衰が多項式の増大を完全に打ち消します。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-2 (シュワルツ空間に含まれない例)">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="f(x) = e^{-|x|}" />：<InlineMath math="x=0" /> で微分不可能であるため、<InlineMath math="\mathcal{S}" /> には含まれません。</li>
                    <li><InlineMath math="f(x) = \frac{1}{1+x^2}" />：無限回微分可能ですが、<InlineMath math="x^4 f(x) \to \infty" /> （<InlineMath math="x \to \infty" />）となるため、減衰が不十分です。</li>
                </ul>
            </ContentBox>

            <p>
                シュワルツ空間は、<InlineMath math="L^1" /> や <InlineMath math="L^2" /> と比較すると非常に「小さな」空間ですが、それゆえに強力な理論的性質を備えています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フーリエ変換の自己同型性</h2>

            <p>
                シュワルツ空間の最大の利点は、フーリエ変換によってその空間自体に写されることです。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-3 (フーリエ変換のシュワルツ空間上の同型性)">
                <p>
                    フーリエ変換は、シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R})" /> から自分自身への <b>位相同型写像（線形同型）</b> である。
                </p>
                <BlockMath math="f \in \mathcal{S}(\mathbb{R}) \iff \hat{f} \in \mathcal{S}(\mathbb{R})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (安定性の証明)">
                <p>
                    微分則（<InlineMath math="\mathcal{F}[f'] = i\xi \hat{f}" />）および多項式との積の規則（<InlineMath math="\mathcal{F}[-ixf] = \hat{f}'" />）を用いると、任意の <InlineMath math="k, m" /> に対し次が成り立ちます：
                </p>
                <BlockMath math="\begin{aligned} \xi^k \hat{f}^{(m)}(\xi) &= \xi^k \mathcal{F}[(-ix)^m f](\xi) \\ &= i^{-k} \mathcal{F}[ \frac{d^k}{dx^k} ((-ix)^m f(x)) ](\xi) \end{aligned}" />
                <p>
                    <InlineMath math="f \in \mathcal{S}" /> であれば、右辺の被変換関数 <InlineMath math="\frac{d^k}{dx^k} ((-ix)^m f(x))" /> は再び <InlineMath math="\mathcal{S}" /> に属し、特に <InlineMath math="L^1" /> 関数です。リーマン・ルベーグの補題により、そのフーリエ変換は有界であるため、任意の <InlineMath math="k, m" /> に対して <InlineMath math="\xi^k \hat{f}^{(m)}(\xi)" /> は有界となります。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="稠密性と拡張可能性">
                <p>
                    シュワルツ空間は、<InlineMath math="L^p(\mathbb{R})" /> （<InlineMath math="1 \leq p < \infty" />）において <b>稠密</b> です。この事実は、「性質の良いシュワルツ関数で性質を示し、稠密性と完備性を用いて $L^2$ や超関数の空間へと結果を拡張する」という現代解析学の強力な手法の基礎となっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>シュワルツ空間 <InlineMath math="\mathcal{S}" /> は、無限回微分可能で急速に減衰する「非常に性質の良い」関数空間である。</li>
                    <li>フーリエ変換はシュワルツ空間を自分自身へ写し、位相同型（自己同型）を定義する。</li>
                    <li>微分則と多項式積の規則の対称性により、<InlineMath math="\mathcal{S}" /> 上ではフーリエ変換の取り扱いが極めて容易になる。</li>
                    <li><InlineMath math="\mathcal{S}" /> の稠密性は、より広い関数空間や超関数の理論を展開する上での計算的な足場となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
