import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PropertiesOfFiniteFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                有限体（ガロア体とも呼ばれます）は、要素の個数が有限であるような体のことです。整数を素数 <InlineMath math="p" /> で割った余りの集合 <InlineMath math="\mathbb{F}_p = \mathbb{Z}/p\mathbb{Z}" /> が最も基本的な例ですが、体拡大の理論を用いることで、より大きく豊かな構造を持つ有限体を構成することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限体の位数と標数</h2>

            <p>
                有限体の要素数（位数）は任意の値をとれるわけではなく、非常に強い制約を受けます。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (有限体の位数は素数のべき)">
                <p>
                    有限体 <InlineMath math="\mathbb{F}_q" /> の位数 <InlineMath math="q" /> （要素の個数）は、必ずある素数 <InlineMath math="p" /> と正の整数 <InlineMath math="n \geq 1" /> を用いて
                </p>
                <BlockMath math="q = p^n" />
                <p>
                    の形で表される。このとき、体 <InlineMath math="\mathbb{F}_q" /> の標数は <InlineMath math="p" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    体は零因子を持たない整域であるため、その標数は必ず素数となる（もし合成数 <InlineMath math="m = ab" /> なら <InlineMath math="(a \cdot 1)(b \cdot 1) = 0" /> となり零因子ができてしまう）。この標数を <InlineMath math="p" /> とする。
                </p>
                <p>
                    標数が <InlineMath math="p" /> であることから、<InlineMath math="\mathbb{F}_q" /> は素体として <InlineMath math="\mathbb{F}_p \cong \mathbb{Z}/p\mathbb{Z}" /> を部分体として含む。したがって、<InlineMath math="\mathbb{F}_q" /> は <InlineMath math="\mathbb{F}_p" /> 上のベクトル空間とみなせる。
                </p>
                <p>
                    <InlineMath math="\mathbb{F}_q" /> は有限集合なので、このベクトル空間の次元は有限である。その次元を <InlineMath math="n = [\mathbb{F}_q : \mathbb{F}_p]" /> とおき、基底を <InlineMath math="\{e_1, \dots, e_n\}" /> とする。
                </p>
                <p>
                    <InlineMath math="\mathbb{F}_q" /> の任意の元は <InlineMath math="c_1 e_1 + \cdots + c_n e_n" /> （各 <InlineMath math="c_i \in \mathbb{F}_p" />）と一意に表される。係数 <InlineMath math="c_i" /> の選び方はそれぞれ <InlineMath math="p" /> 通りあるため、全体の元の個数は <InlineMath math="\underbrace{p \times p \times \cdots \times p}_{n\text{回}} = p^n" /> となる。よって <InlineMath math="q = p^n" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (F_4 の構成と乗法表)">
                <p>
                    位数 4 の有限体 <InlineMath math="\mathbb{F}_4" /> を構成してみよう。<InlineMath math="4 = 2^2" /> なので、<InlineMath math="\mathbb{F}_2" /> の2次拡大として構成する。
                </p>
                <p>
                    <InlineMath math="\mathbb{F}_2[x]" /> において、2次多項式 <InlineMath math="x^2+x+1" /> は根を持たない（<InlineMath math="0^2+0+1=1" />、<InlineMath math="1^2+1+1=1" />）ため既約である。よって、剰余環
                </p>
                <BlockMath math="\mathbb{F}_4 = \mathbb{F}_2[x]/(x^2+x+1)" />
                <p>
                    は体をなす。<InlineMath math="\alpha = x \pmod{x^2+x+1}" /> とおくと、<InlineMath math="\alpha^2 = \alpha + 1" />（標数2なので <InlineMath math="-1 = 1" />）を満たす。
                </p>
                <p>
                    <InlineMath math="\mathbb{F}_4" /> の元は <InlineMath math="\{0, 1, \alpha, \alpha+1\}" /> の4つである。乗法表の一部を計算すると：
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\alpha \cdot \alpha = \alpha^2 = \alpha + 1" /></li>
                    <li><InlineMath math="\alpha \cdot (\alpha+1) = \alpha^2 + \alpha = (\alpha+1) + \alpha = 2\alpha + 1 = 1" /></li>
                </ul>
                <p>
                    となり、<InlineMath math="\alpha" /> と <InlineMath math="\alpha+1" /> が互いに逆元であることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フロベニウス写像</h2>

            <p>
                正標数の体においてのみ存在する、非常に特別な自己同型写像があります。これが有限体の構造を決定づける鍵となります。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (フロベニウス写像)">
                <p>
                    標数が <InlineMath math="p > 0" /> の体 <InlineMath math="F" /> 上の写像 <InlineMath math="\phi : F \to F" /> を次のように定義する。
                </p>
                <BlockMath math="\phi(a) = a^p" />
                <p>
                    これを<strong>フロベニウス写像（Frobenius map）</strong>という。<InlineMath math="F" /> が有限体のとき、これは全単射な体の自己同型（フロベニウス自己同型）となる。
                </p>
            </ContentBox>

            <p>
                単なる <InlineMath math="p" /> 乗の操作が、なぜ足し算を保つ「準同型写像」になるのでしょうか。そこには二項定理の魔法があります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-2 (フロベニウスは体同型)">
                <p>
                    フロベニウス写像 <InlineMath math="\phi(a) = a^p" /> は環準同型である。すなわち、任意の <InlineMath math="a, b \in F" /> に対して次が成り立つ。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="\phi(a+b) = \phi(a) + \phi(b)" /> 、つまり <InlineMath math="(a+b)^p = a^p + b^p" />（標数 <InlineMath math="p" /> の「一年生の夢（Freshman's dream）」）</li>
                    <li><InlineMath math="\phi(ab) = \phi(a)\phi(b)" /> 、つまり <InlineMath math="(ab)^p = a^p b^p" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (2) は可換環の性質から明らかである。<InlineMath math="(ab)^p = abab\cdots ab = (a\cdots a)(b\cdots b) = a^p b^p" />。
                </p>
                <p>
                    (1) を示す。二項定理により、
                </p>
                <BlockMath math="(a+b)^p = \sum_{k=0}^p \binom{p}{k} a^k b^{p-k}" />
                <p>
                    となる。ここで二項係数 <InlineMath math="\binom{p}{k} = \frac{p!}{k!(p-k)!}" /> について、<InlineMath math="0 < k < p" /> の範囲では分子に素数 <InlineMath math="p" /> が含まれるが分母には <InlineMath math="p" /> が含まれないため、この値は必ず <InlineMath math="p" /> の倍数になる。
                </p>
                <p>
                    体 <InlineMath math="F" /> の標数は <InlineMath math="p" /> なので、<InlineMath math="p" /> の倍数である係数はすべて <InlineMath math="F" /> において <InlineMath math="0" /> になる。したがって、両端の項（<InlineMath math="k=0, p" />）だけが生き残り、
                </p>
                <BlockMath math="(a+b)^p = a^p + b^p" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-2 (F_4 でのフロベニウス)">
                <p>
                    先ほどの <InlineMath math="\mathbb{F}_4 = \{0, 1, \alpha, \alpha+1\}" />（標数 2）において、フロベニウス写像 <InlineMath math="\phi(a) = a^2" /> の振る舞いを確認する。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\phi(0) = 0^2 = 0" /></li>
                    <li><InlineMath math="\phi(1) = 1^2 = 1" /></li>
                    <li><InlineMath math="\phi(\alpha) = \alpha^2 = \alpha+1" /></li>
                    <li><InlineMath math="\phi(\alpha+1) = (\alpha+1)^2 = \alpha^2 + 1 = (\alpha+1) + 1 = \alpha + 2 = \alpha" /></li>
                </ul>
                <p>
                    このように、フロベニウス写像は基礎体 <InlineMath math="\mathbb{F}_2 = \{0, 1\}" /> の元を固定し、拡大で追加された元 <InlineMath math="\alpha" /> と <InlineMath math="\alpha+1" /> を入れ替える操作になっていることがわかる。また、<InlineMath math="\phi^2(x) = \phi(\phi(x)) = x" />（恒等写像）になることも確認できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>有限体の位数は必ず素数のべき乗 <InlineMath math="q = p^n" /> となる。このとき標数は <InlineMath math="p" /> である。</li>
                    <li>標数 <InlineMath math="p" /> の体では、「一年生の夢」と呼ばれる公式 <InlineMath math="(a+b)^p = a^p + b^p" /> が成り立つ。</li>
                    <li>写像 <InlineMath math="a \mapsto a^p" /> は<strong>フロベニウス写像</strong>と呼ばれ、有限体においては全単射な自己同型となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
