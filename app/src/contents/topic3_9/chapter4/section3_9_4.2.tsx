import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniversalityOfPolynomialRings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多項式環 <InlineMath math="R[x]" /> において、変数 <InlineMath math="x" /> は単なる形式的な記号として定義されました。しかし、関数としての多項式を考えたときのように、<InlineMath math="x" /> に特定の値を「代入」する操作を考えることができます。本節では、この代入操作が環準同型になるという事実から、多項式環の持つ「普遍性（universality）」という強力な性質を導きます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代入準同型</h2>

            <p className="leading-relaxed">
                多項式に値を代入するという自然な操作は、環の構造を保つ「準同型写像」を与えます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (代入準同型)">
                <p>
                    可換環 <InlineMath math="R" /> と、<InlineMath math="R" /> を部分環として含む可換環 <InlineMath math="S" /> を考える。<InlineMath math="S" /> の任意の元 <InlineMath math="s \in S" /> に対して、多項式 <InlineMath math="f(x) \in R[x]" /> の <InlineMath math="x" /> に <InlineMath math="s" /> を代入する写像
                </p>
                <BlockMath math="\begin{aligned} \mathrm{ev}_s : R[x] &\to S \\ f(x) &\mapsto f(s) \end{aligned}" />
                <p>
                    は環準同型である。これを <InlineMath math="s" /> での<b>代入準同型（evaluation homomorphism）</b>という。<InlineMath math="R" /> 上で恒等写像となる（係数を変えない）準同型は、<InlineMath math="s" /> の選択によって一意に定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    写像 <InlineMath math="\mathrm{ev}_s" /> が和と積を保ち、単位元を単位元に写すことを確認する。
                </p>
                <p>
                    <InlineMath math="f, g \in R[x]" /> に対して、多項式の和と積の定義から
                    <BlockMath math="(f+g)(x) = f(x) + g(x), \quad (fg)(x) = f(x)g(x)" />
                    という形式的な関係式が成り立つ。<InlineMath math="x" /> に <InlineMath math="s" /> を代入しても、<InlineMath math="S" /> 内の演算として分配法則や結合法則が成り立つため
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="\mathrm{ev}_s(f+g) = (f+g)(s) = f(s) + g(s) = \mathrm{ev}_s(f) + \mathrm{ev}_s(g)" /></li>
                    <li><InlineMath math="\mathrm{ev}_s(fg) = (fg)(s) = f(s)g(s) = \mathrm{ev}_s(f)\mathrm{ev}_s(g)" /></li>
                    <li>定数多項式 <InlineMath math="1" /> に対して <InlineMath math="\mathrm{ev}_s(1) = 1" /></li>
                </ul>
                <p className="mt-2">
                    が従う。よって <InlineMath math="\mathrm{ev}_s" /> は環準同型である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この代入準同型の核（kernel）を考えることで、興味深い性質が導かれます。
            </p>

            <ContentBox type="example" title="Example 4.2-1 (複素数 i の代入)">
                <p>
                    整数係数多項式環 <InlineMath math="\mathbb{Z}[x]" /> から複素数体 <InlineMath math="\mathbb{C}" /> への代入準同型 <InlineMath math="\mathrm{ev}_i : \mathbb{Z}[x] \to \mathbb{C}" /> を考える。これは多項式に虚数単位 <InlineMath math="i" /> を代入する写像である。
                </p>
                <BlockMath math="\mathrm{ev}_i(f) = f(i)" />
                <p>
                    この写像の核 <InlineMath math="\ker(\mathrm{ev}_i)" /> とは、<InlineMath math="f(i) = 0" /> を満たす多項式 <InlineMath math="f(x) \in \mathbb{Z}[x]" /> の全体である。<InlineMath math="i" /> を根に持つ実数係数最小次数の多項式は <InlineMath math="x^2 + 1" /> であるため、<InlineMath math="f(i) = 0" /> ならば <InlineMath math="f(x)" /> は <InlineMath math="x^2+1" /> で割り切れる。
                </p>
                <p>
                    すなわち、<InlineMath math="\ker(\mathrm{ev}_i) = (x^2+1)" /> となり、第一同型定理（§2.4）から <InlineMath math="\mathbb{Z}[x]/(x^2+1) \cong \mathbb{Z}[i]" />（ガウス整数環）が導かれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">普遍性の定式化</h2>

            <p className="leading-relaxed">
                代入準同型の性質をより抽象的に捉え直すと、多項式環 <InlineMath math="R[x]" /> がある種の「普遍性」を満たすことがわかります。これは、「変数 <InlineMath math="x" /> の行き先を一つ決めるだけで、環全体からの準同型が完全に決まってしまう」という性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-2 (多項式環の普遍性)">
                <p>
                    可換環 <InlineMath math="R" /> と、<InlineMath math="R" /> を部分環として含む任意の可換環 <InlineMath math="S" />、および任意の元 <InlineMath math="s \in S" /> を与えたとする。
                </p>
                <p>
                    このとき、以下の2条件を満たす環準同型 <InlineMath math="\phi : R[x] \to S" /> が<b>唯一つ</b>存在する。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>任意の <InlineMath math="r \in R" /> に対して <InlineMath math="\phi(r) = r" />（<InlineMath math="R" /> 上の恒等写像）</li>
                    <li><InlineMath math="\phi(x) = s" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>存在：</b> 定理 4.2-1 で構成した代入準同型 <InlineMath math="\mathrm{ev}_s" /> が条件を満たす。実際、定数多項式 <InlineMath math="r" /> に対して <InlineMath math="\mathrm{ev}_s(r) = r" /> であり、<InlineMath math="\mathrm{ev}_s(x) = s" /> である。
                </p>
                <p>
                    <b>一意性：</b> 条件を満たす任意の環準同型 <InlineMath math="\phi" /> をとる。<InlineMath math="\phi" /> は和と積を保ち、<InlineMath math="R" /> 上では恒等写像であるから、任意の多項式 <InlineMath math="f(x) = \sum a_k x^k" /> に対して
                </p>
                <BlockMath math="\begin{aligned} \phi(f(x)) &= \phi\left( \sum a_k x^k \right) = \sum \phi(a_k) \phi(x)^k \\ &= \sum a_k s^k = f(s) = \mathrm{ev}_s(f) \end{aligned}" />
                <p>
                    となる。したがって <InlineMath math="\phi" /> は代入準同型 <InlineMath math="\mathrm{ev}_s" /> と完全に一致しなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この普遍性は、多項式環を次々と入れ子にしていくことで、多変数多項式環を帰納的に構成する際にも役立ちます。
            </p>

            <ContentBox type="example" title="Example 4.2-2 (多変数への拡張の予告)">
                <p>
                    一変数多項式環 <InlineMath math="R[x_1]" /> の普遍性を用いると、変数 <InlineMath math="x_2" /> を加えた <InlineMath math="(R[x_1])[x_2]" /> を構成することができます。これを帰納的に繰り返すことで、多変数多項式環 <InlineMath math="R[x_1, \dots, x_n]" /> が自然に構成されます。多変数多項式については第8章で詳しく扱います。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (圏論的解釈)">
                <p>
                    代数学のより進んだ視点（圏論）では、この定理は「多項式環 <InlineMath math="R[x]" /> は、<InlineMath math="R" />-代数の圏における 1 つの生成元を持つ<b>自由対象（free object）</b>である」と言い換えられます。何ら制約を持たない変数 <InlineMath math="x" /> だからこそ、任意の対象 <InlineMath math="s" /> へと自由に写像することができるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>変数 <InlineMath math="x" /> に <InlineMath math="s" /> を代入する写像 <InlineMath math="\mathrm{ev}_s : R[x] \to S" /> は環準同型である（代入準同型）。</li>
                    <li>多項式環 <InlineMath math="R[x]" /> は、変数 <InlineMath math="x" /> の行き先 <InlineMath math="s" /> を指定するだけで、全体からの準同型がただ一つに決まるという普遍性を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
