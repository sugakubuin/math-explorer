import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EuclideanAlgorithm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ユークリッド整域（ED）の最大の強みは、2つの元の最大公約数を求めるアルゴリズム「ユークリッドの互除法」が使えることです。本節では、最大公約数を一般の整域において厳密に定義し、ED において互除法が機能することを証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大公約数の一般定義</h2>

            <p className="leading-relaxed">
                整数における最大公約数は「公約数の中で最大の正整数」として定義されますが、一般の環には大小関係の概念がないため、割り切れる関係（イデアルの包含関係）を用いて定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (最大公約数)">
                <p>
                    整域 <InlineMath math="D" /> の 2 つの元 <InlineMath math="a, b" /> に対して、元 <InlineMath math="d \in D" /> が <InlineMath math="a" /> と <InlineMath math="b" /> の<b>最大公約数（greatest common divisor, gcd）</b>であるとは、以下の2条件を満たすことである。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="d" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の公約数である。（すなわち <InlineMath math="d \mid a" /> かつ <InlineMath math="d \mid b" />）</li>
                    <li><InlineMath math="c" /> が <InlineMath math="a" /> と <InlineMath math="b" /> の任意の公約数であるならば、必ず <InlineMath math="c \mid d" /> が成り立つ。（「最大」の条件）</li>
                </ul>
                <p className="mt-2">
                    このような <InlineMath math="d" /> を <InlineMath math="\gcd(a, b)" /> と書く。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                Definition 5.3-1 の条件から、最大公約数は単元倍の違いを除いて一意に定まります。例えば <InlineMath math="\mathbb{Z}" /> では <InlineMath math="\gcd(4, 6)" /> は <InlineMath math="2" /> ですが、<InlineMath math="-2" /> も定義を満たします。通常は単元倍の自由度を許容して扱います。
            </p>
            <p className="leading-relaxed">
                一般の整域では最大公約数が存在するとは限りませんが、ED であれば除法の原理を用いて必ず求めることができます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1 (ユークリッドの互除法)">
                <p>
                    ユークリッド整域（ED）<InlineMath math="D" /> の任意の 2 つの元 <InlineMath math="a, b" />（<InlineMath math="b \neq 0" />）に対して、<InlineMath math="\gcd(a, b)" /> が存在する。
                </p>
                <p>
                    具体的には、以下のように除法を繰り返す列（ユークリッドの互除法）は有限回で停止し、最後の <InlineMath math="0" /> でない余りが <InlineMath math="\gcd(a, b)" /> を与える。
                </p>
                <BlockMath math="\begin{aligned} a &= q_1 b + r_1 \quad (N(r_1) < N(b)) \\ b &= q_2 r_1 + r_2 \quad (N(r_2) < N(r_1)) \\ r_1 &= q_3 r_2 + r_3 \quad (N(r_3) < N(r_2)) \\ &\vdots \\ r_{n-2} &= q_n r_{n-1} + r_n \quad (N(r_n) < N(r_{n-1})) \\ r_{n-1} &= q_{n+1} r_n + 0 \quad (\text{割り切れて停止}) \end{aligned}" />
                <p>
                    このとき、<InlineMath math="r_n = \gcd(a, b)" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>停止性：</b> 除法の原理より、余りのノルムは <InlineMath math="N(b) > N(r_1) > N(r_2) > \dots \geq 0" /> と真に単調減少する。ノルムは非負整数であるため、この減少列は必ず有限回で <InlineMath math="0" /> に到達して停止する。
                </p>
                <p>
                    <b>gcd であること：</b> 各ステップの等式 <InlineMath math="x = qy + z" /> において、「<InlineMath math="x" /> と <InlineMath math="y" /> の公約数」の集合と「<InlineMath math="y" /> と <InlineMath math="z" /> の公約数」の集合は完全に一致する。なぜなら、<InlineMath math="d" /> が <InlineMath math="y, z" /> を割るなら <InlineMath math="x = qy+z" /> も割り、<InlineMath math="d" /> が <InlineMath math="x, y" /> を割るなら <InlineMath math="z = x-qy" /> も割るからである。
                </p>
                <p>
                    これを繰り返すと、<InlineMath math="a" /> と <InlineMath math="b" /> の公約数の集合は、<InlineMath math="r_{n-1}" /> と <InlineMath math="r_n" /> の公約数の集合に等しい。最後の等式 <InlineMath math="r_{n-1} = q_{n+1} r_n" /> から <InlineMath math="r_n \mid r_{n-1}" /> であるため、<InlineMath math="r_{n-1}" /> と <InlineMath math="r_n" /> の最大の公約数は <InlineMath math="r_n" /> 自身である。
                </p>
                <p>
                    したがって、<InlineMath math="r_n" /> は <InlineMath math="a" /> と <InlineMath math="b" /> の公約数であり、かつ任意の公約数は <InlineMath math="r_n" /> を割る。ゆえに <InlineMath math="r_n = \gcd(a, b)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ユークリッドの互除法の計算例</h2>

            <p className="leading-relaxed">
                Theorem 5.3-1 で保証されたアルゴリズムを、整数環とガウス整数環で実際に計算してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 5.3-1 (<InlineMath math="\mathbb{Z}" /> での互除法)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、<InlineMath math="a = 56, b = 36" /> の最大公約数を求める。
                </p>
                <BlockMath math="\begin{aligned} 56 &= 1 \cdot 36 + 20 \\ 36 &= 1 \cdot 20 + 16 \\ 20 &= 1 \cdot 16 + 4 \\ 16 &= 4 \cdot 4 + 0 \end{aligned}" />
                <p>
                    余りが <InlineMath math="0" /> になる直前の余りは <InlineMath math="4" /> である。よって <InlineMath math="\gcd(56, 36) = 4" /> である。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.3-2 (<InlineMath math="\mathbb{Z}[i]" /> での互除法)</span>}>
                <p>
                    ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> において、<InlineMath math="a = 11, b = 3+2i" /> の最大公約数を求める。前節の除法アルゴリズムを用いる。
                </p>
                <p>
                    <b>ステップ1：<InlineMath math="11" /> を <InlineMath math="3+2i" /> で割る</b><br />
                    <InlineMath math="\frac{11}{3+2i} = \frac{11(3-2i)}{13} = \frac{33}{13} - \frac{22}{13}i \approx 2.54 - 1.69i" />。<br />
                    最も近い整数をとって、商 <InlineMath math="q_1 = 3 - 2i" /> とする。<br />
                    余り <InlineMath math="r_1 = 11 - (3-2i)(3+2i) = 11 - 13 = -2" />。
                </p>
                <p>
                    <b>ステップ2：<InlineMath math="3+2i" /> を <InlineMath math="-2" /> で割る</b><br />
                    <InlineMath math="\frac{3+2i}{-2} = -1.5 - i" />。<br />
                    商 <InlineMath math="q_2 = -1 - i" />（または <InlineMath math="-2-i" /> など）を選ぶ。ここでは <InlineMath math="q_2 = -1 - i" /> とする。<br />
                    余り <InlineMath math="r_2 = (3+2i) - (-1-i)(-2) = (3+2i) - (2+2i) = 1" />。
                </p>
                <p>
                    <b>ステップ3：<InlineMath math="-2" /> を <InlineMath math="1" /> で割る</b><br />
                    <InlineMath math="-2 = (-2) \cdot 1 + 0" />。<br />
                    割り切れたので終了。
                </p>
                <p>
                    最後の <InlineMath math="0" /> でない余りは <InlineMath math="1" /> である。したがって <InlineMath math="\gcd(11, 3+2i) = 1" />、つまりこれらは互いに素であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ED における互除法の普遍性)">
                <p>
                    整数に関する互除法のアルゴリズムが、ガウス整数や多項式といった全く異なる対象にも「ノルムの減少」という共通の性質を通じてそのまま適用できることは、抽象代数学の強力さを示す良い例です。ED の定義は、まさにこの「互除法を機能させる」ための条件を抽出したものと言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>整域において、2つの元のすべての公約数から割り切られるような公約数を<b>最大公約数（gcd）</b>と定義する。</li>
                    <li>ユークリッド整域（ED）においては、除法の原理を反復する<b>ユークリッドの互除法</b>により、必ず gcd を計算できる。</li>
                    <li>互除法のアルゴリズムは、整数環だけでなく、ガウス整数環や多項式環など、すべての ED において全く同じ手順で実行可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
