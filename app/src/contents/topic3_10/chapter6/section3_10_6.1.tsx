import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimitiveRootsOfUnity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では、ガロア理論の最も美しく具体的な応用の一つである「円分体（cyclotomic field）」について学びます。円分体とは、有理数体に「1の<InlineMath math="n" />乗根」を添加して得られる体であり、定規とコンパスによる正多角形の作図問題に完全な解答を与えます。まずは、その基礎となる「円分多項式」の性質から始めましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1 の原始 n 乗根と円分多項式</h2>

            <p>
                方程式 <InlineMath math="x^n = 1" /> の解の中で、本質的に「<InlineMath math="n" />乗して初めて 1 になる」ものを特別な名前で呼びます。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (1 の原始 n 乗根)">
                <p>
                    複素数 <InlineMath math="\zeta" /> が <strong>1 の原始 <InlineMath math="n" /> 乗根（primitive <InlineMath math="n" />-th root of unity）</strong> であるとは、
                </p>
                <BlockMath math="\zeta^n = 1 \quad \text{かつ} \quad \zeta^k \neq 1 \quad (0 < k < n)" />
                <p>
                    を満たすことである。標準的な選択として <InlineMath math="\zeta_n = e^{2\pi i/n} = \cos(2\pi/n) + i\sin(2\pi/n)" /> がある。
                </p>
                <p>
                    1 の <InlineMath math="n" /> 乗根は全部で <InlineMath math="n" /> 個あるが、そのうち原始 <InlineMath math="n" /> 乗根になるものは <InlineMath math="\zeta_n^k" /> （ただし <InlineMath math="\gcd(k,n) = 1" />）の形をしており、その個数はオイラーのトーシェント関数 <InlineMath math="\varphi(n)" /> に等しい。
                </p>
            </ContentBox>

            <p>
                これらの原始 <InlineMath math="n" /> 乗根だけを根に持つ多項式を定義します。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (円分多項式)">
                <p>
                    <strong><InlineMath math="n" /> 次円分多項式（<InlineMath math="n" />-th cyclotomic polynomial）</strong> <InlineMath math="\Phi_n(x)" /> を次のように定義する。
                </p>
                <BlockMath math="\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n)=1}} (x - \zeta_n^k)" />
                <p>
                    この定義から、ただちに以下の恒等式が導かれる。
                </p>
                <BlockMath math="x^n - 1 = \prod_{d \mid n} \Phi_d(x)" />
            </ContentBox>

            <p>
                定義式には複素数 <InlineMath math="\zeta_n" /> が含まれていますが、実はこの多項式を展開すると係数はすべて整数になります。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 6.1-1 (<InlineMath math="\Phi_n(x)" /> は整数係数)</span>}>
                <p>
                    任意の <InlineMath math="n \geq 1" /> に対して、円分多項式は整数係数の多項式である。すなわち <InlineMath math="\Phi_n(x) \in \mathbb{Z}[x]" />。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="n" /> に関する帰納法で証明する。
                </p>
                <p>
                    <InlineMath math="n=1" /> のとき、<InlineMath math="\Phi_1(x) = x - 1 \in \mathbb{Z}[x]" /> であり成立する。
                </p>
                <p>
                    <InlineMath math="n > 1" /> とし、<InlineMath math="n" /> の真の約数 <InlineMath math="d" /> （<InlineMath math="d < n" />）に対しては <InlineMath math="\Phi_d(x) \in \mathbb{Z}[x]" /> であると仮定する。<InlineMath math="x^n - 1 = \prod_{d \mid n} \Phi_d(x)" /> という分解公式から、
                </p>
                <BlockMath math="x^n - 1 = \Phi_n(x) \cdot \prod_{\substack{d \mid n \\ d < n}} \Phi_d(x)" />
                <p>
                    と書ける。右辺の積を <InlineMath math="g(x)" /> とおくと、帰納法の仮定から <InlineMath math="g(x) \in \mathbb{Z}[x]" /> であり、最高次係数は 1（モニック多項式）である。
                </p>
                <p>
                    多項式の割り算アルゴリズムを <InlineMath math="\mathbb{Z}[x]" /> 上で行うと、モニック多項式で割る場合の商と余りの係数は必ず整数になる。<InlineMath math="\mathbb{C}[x]" /> 上では割り切れることがわかっている（余りが0）ため、その商である <InlineMath math="\Phi_n(x) = (x^n - 1) / g(x)" /> も <InlineMath math="\mathbb{Z}[x]" /> に属する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 6.1-1 (<InlineMath math="\Phi_n" /> の計算)</span>}>
                <p>
                    公式 <InlineMath math="x^n - 1 = \prod_{d \mid n} \Phi_d(x)" /> を用いて順次計算していく。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\Phi_1(x) = x - 1" /></li>
                    <li><InlineMath math="x^2 - 1 = \Phi_1(x)\Phi_2(x) \implies \Phi_2(x) = x + 1" /></li>
                    <li><InlineMath math="x^3 - 1 = \Phi_1(x)\Phi_3(x) \implies \Phi_3(x) = x^2 + x + 1" /></li>
                    <li><InlineMath math="x^4 - 1 = \Phi_1(x)\Phi_2(x)\Phi_4(x) = (x^2-1)\Phi_4(x) \implies \Phi_4(x) = x^2 + 1" /></li>
                </ul>
                <p>
                    <InlineMath math="\Phi_8(x)" /> の計算：<InlineMath math="x^8 - 1 = \Phi_1\Phi_2\Phi_4\Phi_8" />。ここで <InlineMath math="\Phi_1\Phi_2\Phi_4 = x^4 - 1" /> なので、
                    <InlineMath math="x^8 - 1 = (x^4 - 1)(x^4 + 1)" /> より <InlineMath math="\Phi_8(x) = x^4 + 1" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">円分多項式の既約性</h2>

            <p>
                円分多項式 <InlineMath math="\Phi_n(x)" /> は整数係数であることがわかりましたが、実はこれ以上有理数の範囲で因数分解できない、すなわち既約多項式になるという極めて重要な性質を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (Q[x] での円分多項式の既約性)">
                <p>
                    任意の <InlineMath math="n \geq 1" /> に対して、円分多項式 <InlineMath math="\Phi_n(x)" /> は <InlineMath math="\mathbb{Q}[x]" /> において<strong>既約</strong>である。
                </p>
                <p>
                    したがって、<InlineMath math="\Phi_n(x)" /> は 1 の原始 <InlineMath math="n" /> 乗根 <InlineMath math="\zeta_n" /> の <InlineMath math="\mathbb{Q}" /> 上の最小多項式に一致する。すなわち <InlineMath math="\Phi_n(x) = \mathrm{min}_\mathbb{Q}(\zeta_n, x)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\zeta = \zeta_n" /> とおき、その <InlineMath math="\mathbb{Q}" /> 上の最小多項式を <InlineMath math="m(x) \in \mathbb{Q}[x]" /> とする。ガウスの補題より <InlineMath math="m(x) \in \mathbb{Z}[x]" /> とできる。<InlineMath math="\Phi_n(\zeta) = 0" /> なので <InlineMath math="m(x)" /> は <InlineMath math="\Phi_n(x)" /> を割り切る。
                </p>
                <p>
                    目標は <InlineMath math="m(x) = \Phi_n(x)" /> を示すこと、すなわち「すべての原始 <InlineMath math="n" /> 乗根が <InlineMath math="m(x)" /> の根になる」ことを示すことである。原始 <InlineMath math="n" /> 乗根は <InlineMath math="\zeta^k" />（<InlineMath math="\gcd(k,n)=1" />）の形をしている。<InlineMath math="k" /> を素因数分解することで、「<InlineMath math="n" /> を割らない素数 <InlineMath math="p" /> に対して、<InlineMath math="\zeta" /> が <InlineMath math="m" /> の根なら <InlineMath math="\zeta^p" /> も <InlineMath math="m" /> の根である」ことを示せば十分である。
                </p>
                <p>
                    背理法で示す。<InlineMath math="\zeta^p" /> が <InlineMath math="m" /> の根でないと仮定する。<InlineMath math="\zeta^p" /> は <InlineMath math="x^n-1" /> の根だから、<InlineMath math="x^n-1 = m(x)h(x)" /> （<InlineMath math="h \in \mathbb{Z}[x]" />）と分解したとき、<InlineMath math="\zeta^p" /> は <InlineMath math="h(x)" /> の根である。すなわち <InlineMath math="h(\zeta^p) = 0" />。
                </p>
                <p>
                    これは <InlineMath math="\zeta" /> が <InlineMath math="h(x^p)" /> の根であることを意味し、<InlineMath math="m(x)" /> は最小多項式なので <InlineMath math="h(x^p) = m(x)q(x)" /> （<InlineMath math="q \in \mathbb{Z}[x]" />）と書ける。
                </p>
                <p>
                    この式を <InlineMath math="\mathbb{F}_p" /> に還元（mod <InlineMath math="p" />）して考える（上付きのバーで表す）。「一年生の夢」より <InlineMath math="\bar{h}(x^p) = (\bar{h}(x))^p" /> となるため、<InlineMath math="(\bar{h}(x))^p = \bar{m}(x)\bar{q}(x)" /> を得る。これは <InlineMath math="\bar{m}(x)" /> と <InlineMath math="\bar{h}(x)" /> が <InlineMath math="\mathbb{F}_p[x]" /> において共通の既約因子（共通根）を持つことを意味する。
                </p>
                <p>
                    しかし、<InlineMath math="x^n-1 = \bar{m}(x)\bar{h}(x)" /> であり、<InlineMath math="\mathbb{F}_p" /> において <InlineMath math="x^n-1" /> は（<InlineMath math="p \nmid n" /> より形式的微分が <InlineMath math="nx^{n-1} \neq 0" /> なので）重根を持たない分離多項式である。これは矛盾である。
                </p>
                <p>
                    したがって <InlineMath math="\zeta^p" /> は <InlineMath math="m(x)" /> の根でなければならず、帰納的にすべての原始 <InlineMath math="n" /> 乗根が <InlineMath math="m(x)" /> の根となる。次数を比較して <InlineMath math="m(x) = \Phi_n(x)" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                素数やそのべき乗の場合、アイゼンシュタインの判定法を使って直接既約性を示すこともできます。
            </p>

            <ContentBox type="example" title={<span>Example 6.1-2 (<InlineMath math="\Phi_5" /> の既約性)</span>}>
                <p>
                    <InlineMath math="\Phi_5(x) = x^4 + x^3 + x^2 + x + 1" /> である。
                </p>
                <p>
                    <InlineMath math="\Phi_5(x)" /> が既約であることを示すために、平行移動 <InlineMath math="x \mapsto x+1" /> を行う。<InlineMath math="\Phi_5(x) = \frac{x^5-1}{x-1}" /> であるから、
                </p>
                <BlockMath math="\begin{aligned} \Phi_5(x+1) &= \frac{(x+1)^5-1}{(x+1)-1} \\ &= \frac{x^5 + 5x^4 + 10x^3 + 10x^2 + 5x}{x} \\ &= x^4 + 5x^3 + 10x^2 + 10x + 5 \end{aligned}" />
                <p>
                    となる。この多項式に対して、素数 <InlineMath math="p = 5" /> を用いてアイゼンシュタインの判定法を適用する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>最高次係数 <InlineMath math="1" /> は 5 で割り切れない。</li>
                    <li>他のすべての係数（5, 10, 10, 5）は 5 で割り切れる。</li>
                    <li>定数項 <InlineMath math="5" /> は <InlineMath math="5^2 = 25" /> で割り切れない。</li>
                </ul>
                <p>
                    よって <InlineMath math="\Phi_5(x+1)" /> は <InlineMath math="\mathbb{Q}[x]" /> で既約であり、したがって元の <InlineMath math="\Phi_5(x)" /> も既約である。<InlineMath math="[\mathbb{Q}(\zeta_5) : \mathbb{Q}] = \deg\Phi_5 = 4 = \varphi(5)" /> となる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>1の原始 <InlineMath math="n" /> 乗根とは、<InlineMath math="n" /> 乗して初めて 1 になる複素数 <InlineMath math="\zeta_n" /> のことである。</li>
                    <li>原始 <InlineMath math="n" /> 乗根をすべて根に持つ多項式を<strong>円分多項式 <InlineMath math="\Phi_n(x)" /></strong> といい、その次数は <InlineMath math="\varphi(n)" /> である。</li>
                    <li><InlineMath math="\Phi_n(x)" /> は整数係数であり、<InlineMath math="\mathbb{Q}[x]" /> において<strong>既約多項式</strong>である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
