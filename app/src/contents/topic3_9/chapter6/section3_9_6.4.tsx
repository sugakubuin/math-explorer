import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BezoutsIdentity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                高校数学の整数論で登場する「<InlineMath math="a" /> と <InlineMath math="b" /> が互いに素ならば <InlineMath math="ax + by = 1" /> を満たす整数 <InlineMath math="x, y" /> が存在する」という有名な定理（ベズーの等式）は、実は対象が単項イデアル整域（PID）でありさえすれば常に成り立つ普遍的な法則です。本節では、PID における最大公約数とベズーの等式の関係を解明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベズーの等式とその証明</h2>

            <p className="leading-relaxed">
                イデアルが「1 つの元で生成される」という PID の性質を使うと、2 つの元の線形結合で書ける要素の集合（これもイデアルです）が、ある 1 つの元（最大公約数）で生成されることが鮮やかに示せます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (ベズーの等式)">
                <p>
                    単項イデアル整域（PID）<InlineMath math="D" /> の 2 つの元 <InlineMath math="a, b" /> に対して、その最大公約数 <InlineMath math="d = \gcd(a, b)" /> が存在する。
                </p>
                <p>
                    さらに、この <InlineMath math="d" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の線形結合として表すことができる。すなわち、ある <InlineMath math="s, t \in D" /> が存在して
                </p>
                <BlockMath math="d = sa + tb" />
                <p>
                    が成立する。イデアルの言葉で言えば、<InlineMath math="(a) + (b) = (d)" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="a" /> と <InlineMath math="b" /> が生成するイデアルの和 <InlineMath math="(a) + (b)" /> を考える。これは <InlineMath math="D" /> のイデアルであり、その元は <InlineMath math="sa + tb" />（<InlineMath math="s, t \in D" />）の形をしている。
                </p>
                <p>
                    <InlineMath math="D" /> は PID であるため、このイデアル <InlineMath math="(a) + (b)" /> もある単一の元 <InlineMath math="d \in D" /> によって生成される。すなわち
                </p>
                <BlockMath math="(a) + (b) = (d)" />
                <p>
                    である。<InlineMath math="d \in (d) = (a) + (b)" /> なので、ある <InlineMath math="s, t \in D" /> を用いて <InlineMath math="d = sa + tb" /> と書ける。これがベズーの等式の形である。
                </p>
                <p>
                    次に、この <InlineMath math="d" /> が実際に <InlineMath math="\gcd(a,b)" /> であることを示す。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>公約数であること：</b> <InlineMath math="a \in (a) \subset (a) + (b) = (d)" /> より <InlineMath math="d \mid a" />。同様に <InlineMath math="b \in (b) \subset (d)" /> より <InlineMath math="d \mid b" />。よって <InlineMath math="d" /> は公約数である。
                    </li>
                    <li>
                        <b>最大の公約数であること：</b> 任意の公約数 <InlineMath math="c" /> をとる。<InlineMath math="c \mid a" /> かつ <InlineMath math="c \mid b" /> なので、<InlineMath math="a = cx" />、<InlineMath math="b = cy" /> と書ける。<br />
                        これをベズーの等式に代入すると、<InlineMath math="d = sa + tb = s(cx) + t(cy) = c(sx + ty)" /> となり、<InlineMath math="c \mid d" /> が導かれる。
                    </li>
                </ul>
                <p className="mt-2">
                    以上より、<InlineMath math="d" /> は最大公約数の条件を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                ED（ユークリッド整域）であれば、ユークリッドの互除法を逆戻りさせることで、この <InlineMath math="s, t" /> を具体的に計算することができます。
            </p>

            <ContentBox type="example" title={<span>Example 6.4-1 (<InlineMath math="\mathbb{Z}" /> でのベズーの等式)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}" /> は ED であり PID である。Example 5.3-1 で求めた <InlineMath math="\gcd(56, 36) = 4" /> について、<InlineMath math="4 = 56s + 36t" /> となる <InlineMath math="s, t" /> を互除法を遡って見つける。
                </p>
                <BlockMath math="\begin{aligned} 56 &= 1 \cdot 36 + 20 \implies 20 = 56 - 36 \\ 36 &= 1 \cdot 20 + 16 \implies 16 = 36 - 20 \\ 20 &= 1 \cdot 16 + 4 \implies 4 = 20 - 16 \end{aligned}" />
                <p>
                    最後の式に一つ前の式を代入していく：
                </p>
                <BlockMath math="\begin{aligned} 4 &= 20 - 16 \\ &= 20 - (36 - 20) = 2 \cdot 20 - 36 \\ &= 2 \cdot (56 - 36) - 36 = 2 \cdot 56 - 3 \cdot 36 \end{aligned}" />
                <p>
                    よって、<InlineMath math="4 = 2 \cdot 56 + (-3) \cdot 36" /> となり、<InlineMath math="s = 2, t = -3" /> としてベズーの等式が具体的に得られた。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベズーの等式の応用（互いに素）</h2>

            <p className="leading-relaxed">
                最大公約数が <InlineMath math="1" />（単元）であるとき、2 つの元は「互いに素（coprime）」であると言います。互いに素であることと、線形結合で <InlineMath math="1" /> が作れることは、PID においては完全に同値です。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-1 (互いに素の同値条件)">
                <p>
                    PID <InlineMath math="D" /> の 2 つの元 <InlineMath math="a, b" /> について、以下は同値である。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="a" /> と <InlineMath math="b" /> は互いに素である（<InlineMath math="\gcd(a, b) = 1" />）。</li>
                    <li><InlineMath math="sa + tb = 1" /> となる <InlineMath math="s, t \in D" /> が存在する。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(\implies)" /> <InlineMath math="\gcd(a, b) = 1" /> ならば、定理 6.4-1（ベズーの等式）より直ちに <InlineMath math="sa + tb = 1" /> となる <InlineMath math="s, t" /> が存在する。
                </p>
                <p>
                    <InlineMath math="(\impliedby)" /> <InlineMath math="sa + tb = 1" /> が成り立つとする。<InlineMath math="d = \gcd(a, b)" /> とすると、定義より <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" /> である。<br />
                    したがって <InlineMath math="d" /> は左辺の <InlineMath math="sa + tb" /> を割り切る。すなわち <InlineMath math="d \mid 1" /> である。<InlineMath math="1" /> を割り切る元は可逆元（単元）であるため、<InlineMath math="d" /> は単元であり、これは <InlineMath math="\gcd(a, b) = 1" /> であることを意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この性質もまた、抽象的な環での議論において非常に強力なツールとなります。
            </p>

            <ContentBox type="example" title={<span>Example 6.4-2 (<InlineMath math="\mathbb{Z}[i]" /> での互いに素とベズーの等式)</span>}>
                <p>
                    Example 5.3-2 で <InlineMath math="\mathbb{Z}[i]" /> における <InlineMath math="a = 11" /> と <InlineMath math="b = 3+2i" /> の最大公約数が <InlineMath math="1" /> であること（互いに素であること）を見た。
                </p>
                <p>
                    互除法のステップは以下の通りであった。
                </p>
                <BlockMath math="\begin{aligned} &11 = (3-2i)(3+2i) - 2 \\ &\implies -2 = 11 - (3-2i)(3+2i) \\ &3+2i = (-1-i)(-2) + 1 \\ &\implies 1 = (3+2i) - (-1-i)(-2) \end{aligned}" />
                <p>
                    これを遡って代入すると、
                </p>
                <BlockMath math="\begin{aligned} 1 &= (3+2i) + (1+i)(-2) \\ &= (3+2i) + (1+i)\{ 11 - (3-2i)(3+2i) \} \\ &= (1+i) \cdot 11 + \{ 1 - (1+i)(3-2i) \} \cdot (3+2i) \\ &= (1+i) \cdot 11 + \{ 1 - (5+i) \} \cdot (3+2i) \\ &= (1+i) \cdot 11 + (-4-i) \cdot (3+2i) \end{aligned}" />
                <p>
                    よって、<InlineMath math="s = 1+i" />、<InlineMath math="t = -4-i" /> とすると <InlineMath math="11s + (3+2i)t = 1" /> が成立する。このように複素数の世界であってもベズーの等式が完全に機能する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>PID においては、最大公約数 <InlineMath math="d = \gcd(a,b)" /> は必ず存在し、<InlineMath math="d = sa + tb" />（ベズーの等式）と線形結合の形で表せる。</li>
                    <li>これはイデアルの言葉で言えば <InlineMath math="(a) + (b) = (d)" /> が成り立つことの言い換えである。</li>
                    <li><InlineMath math="a" /> と <InlineMath math="b" /> が互いに素であることと、<InlineMath math="sa + tb = 1" /> となる <InlineMath math="s, t" /> が存在することは同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
