import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FieldOfFractions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                整数環 <InlineMath math="\mathbb{Z}" /> から有理数体 <InlineMath math="\mathbb{Q}" /> を構成したように、一般の「整域」に対して分数を導入することで「体」を構成することができます。このようにして作られる体を「商体」または「分数体」と呼びます。本節では、整域に分数を導入して体に拡張する一般論を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商体の構成</h2>

            <p className="leading-relaxed">
                分数の正体は、「分子」と「分母（<InlineMath math="0" /> でない）」のペアの同値類です。たとえば <InlineMath math="1/2" /> と <InlineMath math="2/4" /> は同じ有理数ですが、これは <InlineMath math="1 \cdot 4 = 2 \cdot 2" /> という関係で結ばれているからです。この直感を一般の整域で定式化します。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (商体)">
                <p>
                    整域 <InlineMath math="D" /> に対して、直積集合 <InlineMath math="D \times (D \setminus \{0\})" /> 上に同値関係 <InlineMath math="\sim" /> を以下のように定める。
                </p>
                <BlockMath math="(a, b) \sim (c, d) \iff ad = bc" />
                <p>
                    この同値関係による同値類 <InlineMath math="[(a, b)]" /> の全体を <InlineMath math="\mathrm{Frac}(D)" /> と書き、通常 <InlineMath math="a/b" /> や <InlineMath math="\frac{a}{b}" /> と表記する。
                </p>
                <p>
                    <InlineMath math="\mathrm{Frac}(D)" /> 上の加法と乗法を以下のように定義する。
                </p>
                <BlockMath math="\begin{aligned} \frac{a}{b} + \frac{c}{d} &= \frac{ad + bc}{bd} \\ \frac{a}{b} \cdot \frac{c}{d} &= \frac{ac}{bd} \end{aligned}" />
                <p>
                    これにより環となった <InlineMath math="\mathrm{Frac}(D)" /> を、<InlineMath math="D" /> の<b>商体（field of fractions）</b>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                定義した演算がうまく機能し、実際に体になることを確認します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (商体は体になる)">
                <p>
                    整域 <InlineMath math="D" /> の商体 <InlineMath math="\mathrm{Frac}(D)" /> は、上記で定義された加法と乗法により体をなす。
                </p>
                <p>
                    さらに、<InlineMath math="D" /> から <InlineMath math="\mathrm{Frac}(D)" /> への単射環準同型 <InlineMath math="\iota : a \mapsto a/1" /> が存在し、<InlineMath math="D" /> を <InlineMath math="\mathrm{Frac}(D)" /> の部分環とみなすことができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>well-definedness：</b> 分母 <InlineMath math="b, d \neq 0" /> のとき、<InlineMath math="D" /> は整域なので <InlineMath math="bd \neq 0" /> であり、分母が <InlineMath math="0" /> になることはない。同値類の代表元の選び方に依存しないことも確認できる。<InlineMath math="(a,b) \sim (a',b')" /> つまり <InlineMath math="ab' = a'b" /> のとき、加法について
                </p>
                <BlockMath math="\begin{aligned} (ad+bc)b'd &= adb'd + bcb'd \\ &= a'bdd + bb'cd \\ &= (a'd+b'c)bd \end{aligned}" />
                <p>
                    より <InlineMath math="(ad+bc, bd) \sim (a'd+b'c, b'd)" /> となり和は well-defined。積も同様。
                </p>
                <p>
                    <b>体の公理：</b> 加法の単位元は <InlineMath math="0/1" />、乗法の単位元は <InlineMath math="1/1" /> である。<InlineMath math="a/b \neq 0/1" /> のとき <InlineMath math="a \neq 0" /> であるから、<InlineMath math="b/a \in \mathrm{Frac}(D)" /> が定義でき、これが乗法の逆元となるため体である。
                </p>
                <p>
                    <b>単射準同型：</b> <InlineMath math="\iota(a) = a/1" /> とすると、<InlineMath math="\iota(a) = \iota(b) \iff a/1 = b/1 \iff a = b" /> より単射。和と積も自然に保たれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                商体の構成は、なじみ深い有理数や有理関数の構成そのものです。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (代表的な商体)">
                <p>
                    <b>整数環の商体：</b><br />
                    整数環 <InlineMath math="\mathbb{Z}" /> の商体は有理数体 <InlineMath math="\mathbb{Q}" /> である。<InlineMath math="\mathrm{Frac}(\mathbb{Z}) = \mathbb{Q}" />。分数の計算規則が定義通りに再現される。
                </p>
                <p>
                    <b>多項式環の商体：</b><br />
                    体 <InlineMath math="k" /> 上の多項式環 <InlineMath math="k[x]" /> も整域である。その商体は、多項式を分母・分子に持つ分数（有理関数）の全体であり、<b>有理関数体（field of rational functions）</b>と呼ばれ <InlineMath math="k(x)" /> と表記される。
                </p>
                <BlockMath math="k(x) = \left\{ \frac{f(x)}{g(x)} \;\middle|\; f, g \in k[x], g \neq 0 \right\}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">商体の普遍性</h2>

            <p className="leading-relaxed">
                商体は、与えられた整域を含む「最小の体」としての普遍性を持ちます。整域をある体に埋め込むことができるなら、商体全体もその体の中に自然に埋め込まれます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-2 (商体の普遍性)">
                <p>
                    整域 <InlineMath math="D" /> から体 <InlineMath math="F" /> への単射環準同型 <InlineMath math="\phi : D \to F" /> が存在するとする。
                </p>
                <p>
                    このとき、<InlineMath math="\phi" /> は商体 <InlineMath math="\mathrm{Frac}(D)" /> を介して一意に拡張（分解）できる。すなわち、単射環準同型 <InlineMath math="\tilde{\phi} : \mathrm{Frac}(D) \to F" /> が唯一つ存在して、<InlineMath math="\tilde{\phi}(a/1) = \phi(a)" /> を満たす。具体的には以下で与えられる。
                </p>
                <BlockMath math="\tilde{\phi}\left(\frac{a}{b}\right) = \phi(a)\phi(b)^{-1}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>well-definedness：</b> <InlineMath math="a/b = c/d" /> とすると <InlineMath math="ad = bc" />。<InlineMath math="\phi" /> は環準同型だから <InlineMath math="\phi(a)\phi(d) = \phi(b)\phi(c)" /> となる。<InlineMath math="\phi" /> は単射で <InlineMath math="b, d \neq 0" /> だから <InlineMath math="\phi(b), \phi(d) \neq 0" />。<InlineMath math="F" /> は体なので逆元を掛けて移項すれば <InlineMath math="\phi(a)\phi(b)^{-1} = \phi(c)\phi(d)^{-1}" />。よって <InlineMath math="\tilde{\phi}" /> は well-defined。
                </p>
                <p>
                    <b>準同型性：</b> <InlineMath math="\tilde{\phi}" /> が和と積を保つことは、体 <InlineMath math="F" /> の中での分数の計算と同様に直接確認できる。
                </p>
                <p>
                    <b>一意性：</b> もし別の拡張 <InlineMath math="\psi" /> があったとすると、<InlineMath math="b/b = 1" /> なので <InlineMath math="\psi(b) \psi(1/b) = \psi(1) = 1" /> となり、<InlineMath math="\psi(1/b) = \psi(b)^{-1} = \phi(b)^{-1}" />。したがって <InlineMath math="\psi(a/b) = \psi(a)\psi(1/b) = \phi(a)\phi(b)^{-1} = \tilde{\phi}(a/b)" /> となり一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この普遍性を用いると、部分環の商体がどのような体になるかを即座に判定できます。
            </p>

            <ContentBox type="example" title="Example 4.3-2 (ガウス整数の商体)">
                <p>
                    ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> は複素数体 <InlineMath math="\mathbb{C}" /> の部分環である。したがって単射環準同型 <InlineMath math="\phi : \mathbb{Z}[i] \hookrightarrow \mathbb{C}" /> が存在する。普遍性により、その商体 <InlineMath math="\mathrm{Frac}(\mathbb{Z}[i])" /> も <InlineMath math="\mathbb{C}" /> に埋め込まれる。
                </p>
                <p>
                    具体的にどのような元からなるかを考えると、
                </p>
                <BlockMath math="\mathrm{Frac}(\mathbb{Z}[i]) = \left\{ \frac{a+bi}{c+di} \;\middle|\; a,b,c,d \in \mathbb{Z}, c+di \neq 0 \right\}" />
                <p>
                    となるが、分母を有理化することで
                </p>
                <BlockMath math="\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2} \in \mathbb{Q}(i)" />
                <p>
                    となることがわかる。よってガウス整数の商体は <InlineMath math="\mathbb{Q}(i) = \{ p + qi \mid p, q \in \mathbb{Q} \}" /> に一致する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>整域 <InlineMath math="D" /> に対して、分数の同値類を用いて構成された体 <InlineMath math="\mathrm{Frac}(D)" /> を商体と呼ぶ。</li>
                    <li><InlineMath math="\mathbb{Z}" /> の商体は <InlineMath math="\mathbb{Q}" />、多項式環 <InlineMath math="k[x]" /> の商体は有理関数体 <InlineMath math="k(x)" /> である。</li>
                    <li>商体は、<InlineMath math="D" /> を埋め込むことができる任意の体 <InlineMath math="F" /> に自然に埋め込まれるという普遍性を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
