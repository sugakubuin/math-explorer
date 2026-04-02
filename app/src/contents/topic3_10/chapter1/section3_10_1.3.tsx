import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MinimalPolynomial() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                代数的な元 <InlineMath math="\alpha" /> に対しては、<InlineMath math="f(\alpha) = 0" /> を満たす多項式が無数に存在します。その中で「最も次数の低い」特別な多項式である<strong>最小多項式</strong>は、代数的元が生成する体拡大の構造を完全に決定する重要な役割を担います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小多項式の定義と性質</h2>

            <p>
                まずは最小多項式を厳密に定義し、それが環論におけるイデアルとどのように結びつくかを見ます。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (最小多項式)">
                <p>
                    <InlineMath math="\alpha" /> を <InlineMath math="F" /> 上代数的な元とする。<InlineMath math="\alpha" /> を根にもつ（すなわち <InlineMath math="f(\alpha) = 0" /> となる）<InlineMath math="F[x]" /> の多項式のうち、<InlineMath math="0" /> でなく次数が最小であり、かつ最高次係数が <InlineMath math="1" />（モニック）である多項式を、<InlineMath math="\alpha" /> の <InlineMath math="F" /> 上の<strong>最小多項式（minimal polynomial）</strong>といい、<InlineMath math="\mathrm{min}_F(\alpha, x)" /> または <InlineMath math="\mathrm{Irr}(\alpha, F, x)" /> と表す。
                </p>
            </ContentBox>

            <p>
                この最小多項式は、代入準同型の核を生成する多項式として特徴づけることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (最小多項式の特徴づけ)">
                <p>
                    <InlineMath math="\alpha \in K" /> が <InlineMath math="F" /> 上代数的なとき、多項式環から体への代入準同型 <InlineMath math="\mathrm{ev}_\alpha : F[x] \to K \quad (f \mapsto f(\alpha))" /> の核 <InlineMath math="\ker(\mathrm{ev}_\alpha)" /> は、あるモニック既約多項式 <InlineMath math="m(x)" /> によって生成される主イデアル <InlineMath math="(m(x))" /> となる。
                </p>
                <p>
                    この <InlineMath math="m(x)" /> こそが最小多項式であり、第一同型定理より以下が成立する。
                </p>
                <BlockMath math="F[x]/(m(x)) \cong F(\alpha)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="F" /> は体なので、多項式環 <InlineMath math="F[x]" /> は単項イデアル整域（PID）である。したがって、イデアル <InlineMath math="I = \ker(\mathrm{ev}_\alpha)" /> はある多項式 <InlineMath math="m(x)" /> で生成される主イデアル <InlineMath math="(m(x))" /> となる。定数倍を調整し、<InlineMath math="m(x)" /> をモニックとする。
                </p>
                <p>
                    任意の <InlineMath math="f \in \ker(\mathrm{ev}_\alpha)" /> は <InlineMath math="f(\alpha) = 0" /> を満たし、<InlineMath math="I" /> の元であるから <InlineMath math="m(x)" /> で割り切れる。ゆえに <InlineMath math="m(x)" /> は <InlineMath math="\alpha" /> を根に持つ多項式の中で最小の次数を持つ（最小多項式である）。
                </p>
                <p>
                    また、もし <InlineMath math="m(x) = g(x)h(x)" /> と分解できたとすると、<InlineMath math="m(\alpha) = g(\alpha)h(\alpha) = 0" /> となり、<InlineMath math="K" /> が体（整域）であることから <InlineMath math="g(\alpha) = 0" /> または <InlineMath math="h(\alpha) = 0" /> となる。これは <InlineMath math="g" /> または <InlineMath math="h" /> が <InlineMath math="\ker(\mathrm{ev}_\alpha)" /> に属すること、すなわち <InlineMath math="m" /> の倍数であることを意味し、<InlineMath math="m" /> の次数の最小性に反する。よって <InlineMath math="m(x)" /> は既約である。
                </p>
                <p>
                    PIDにおいて既約元が生成するイデアルは極大イデアルであるため、剰余環 <InlineMath math="F[x]/(m(x))" /> は体となる。第一同型定理より、<InlineMath math="F[x]/(m(x)) \cong \mathrm{Im}(\mathrm{ev}_\alpha) = F[\alpha]" /> であり、<InlineMath math="F[\alpha]" /> が体であることから、これは <InlineMath math="\alpha" /> を含む最小の体 <InlineMath math="F(\alpha)" /> に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (√2 の最小多項式)">
                <p>
                    <InlineMath math="\sqrt{2}" /> の <InlineMath math="\mathbb{Q}" /> 上の最小多項式は <InlineMath math="m(x) = x^2 - 2" /> である。これが既約であることは、有理根定理より <InlineMath math="\pm 1, \pm 2" /> が根にならないことから確認できる（あるいはアイゼンシュタインの判定法を用いてもよい）。
                </p>
                <p>
                    定理により、<InlineMath math="\mathbb{Q}[x]/(x^2-2) \cong \mathbb{Q}(\sqrt{2})" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小多項式と拡大次数</h2>

            <p>
                最小多項式の「次数」は、そのまま体拡大の「次元（拡大次数）」に一致します。これは計算上非常に有用な事実です。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (最小多項式と拡大次数)">
                <p>
                    <InlineMath math="\alpha" /> の <InlineMath math="F" /> 上の最小多項式を <InlineMath math="m(x)" /> とし、その次数を <InlineMath math="n = \deg m" /> とする。このとき、
                </p>
                <BlockMath math="[F(\alpha) : F] = n" />
                <p>
                    であり、<InlineMath math="F(\alpha)" /> の <InlineMath math="F" />-基底として <InlineMath math="\{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}\}" /> をとることができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前定理より <InlineMath math="F(\alpha) \cong F[x]/(m(x))" /> であり、その同型は <InlineMath math="x \pmod{m(x)} \mapsto \alpha" /> によって与えられる。<InlineMath math="F[x]/(m(x))" /> の元は、<InlineMath math="m(x)" /> による多項式の割り算の余り全体からなる。
                </p>
                <p>
                    任意の多項式 <InlineMath math="f(x) \in F[x]" /> を <InlineMath math="m(x)" /> で割ると、<InlineMath math="f(x) = q(x)m(x) + r(x)" /> （<InlineMath math="\deg r < n" /> または <InlineMath math="r=0" />）と一意に書ける。ここに <InlineMath math="x = \alpha" /> を代入すると、<InlineMath math="m(\alpha) = 0" /> より <InlineMath math="f(\alpha) = r(\alpha)" /> となる。
                </p>
                <p>
                    <InlineMath math="r(x) = c_0 + c_1 x + \cdots + c_{n-1} x^{n-1}" /> だから、<InlineMath math="f(\alpha) = c_0 + c_1 \alpha + \cdots + c_{n-1} \alpha^{n-1}" /> となり、<InlineMath math="\{1, \alpha, \ldots, \alpha^{n-1}\}" /> が <InlineMath math="F(\alpha)" /> を <InlineMath math="F" /> 上張ることがわかる。
                </p>
                <p>
                    また、もしこれらが線形従属だとすると、次数が <InlineMath math="n-1" /> 以下の非零な多項式 <InlineMath math="h(x)" /> が存在して <InlineMath math="h(\alpha) = 0" /> となるが、これは <InlineMath math="m(x)" /> が最小多項式であることに矛盾する。したがって線形独立であり、基底となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (3乗根の最小多項式と次数)">
                <p>
                    <InlineMath math="\sqrt[3]{2}" /> の <InlineMath math="\mathbb{Q}" /> 上の最小多項式は <InlineMath math="x^3 - 2" /> である（素数 <InlineMath math="p=2" /> に対するアイゼンシュタインの判定法より既約）。
                </p>
                <p>
                    したがって、拡大次数は <InlineMath math="[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3" /> であり、<InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> の任意の元は
                </p>
                <BlockMath math="a + b\sqrt[3]{2} + c(\sqrt[3]{2})^2 = a + b\sqrt[3]{2} + c\sqrt[3]{4} \quad (a,b,c \in \mathbb{Q})" />
                <p>
                    と一意に表される。基底は <InlineMath math="\{1, \sqrt[3]{2}, \sqrt[3]{4}\}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (単拡大の同型と共役元)">
                <p>
                    ある2つの元 <InlineMath math="\alpha" /> と <InlineMath math="\beta" /> が<strong>全く同じ最小多項式 <InlineMath math="m(x)" /> を持つ</strong>とします（このような元を互いに共役と呼びます）。このとき、定理 1.3-1 から
                </p>
                <BlockMath math="F(\alpha) \cong F[x]/(m(x)) \cong F(\beta)" />
                <p>
                    が成り立ちます。すなわち、<strong><InlineMath math="\alpha" /> を添加しても <InlineMath math="\beta" /> を添加しても、作られる体は代数的に全く同じ構造を持つ</strong>ということです。同型写像は具体的に <InlineMath math="\alpha \mapsto \beta" /> として与えられます。この考え方は、後のガロア群の理論の核心へと繋がっていきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>代数的元 <InlineMath math="\alpha" /> を根に持つ、モニックで次数最小の多項式を<strong>最小多項式 <InlineMath math="m(x)" /></strong> という。</li>
                    <li><InlineMath math="m(x)" /> は既約多項式であり、<InlineMath math="\alpha" /> を根に持つ任意の多項式は <InlineMath math="m(x)" /> の倍数である。</li>
                    <li><InlineMath math="F[x]/(m(x)) \cong F(\alpha)" /> という体同型が成り立つ。</li>
                    <li>拡大次数 <InlineMath math="[F(\alpha) : F]" /> は、最小多項式の次数 <InlineMath math="\deg m" /> と完全に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
