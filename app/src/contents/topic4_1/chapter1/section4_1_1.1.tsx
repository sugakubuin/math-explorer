import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NormDefinitionAndExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                関数解析では、無限次元のベクトル空間を主な研究対象とします。しかし、単なる代数的なベクトル空間の構造だけでは、極限や連続性といった解析的な概念を扱うことができません。そこで、ベクトル空間に「長さ」や「距離」といった幾何学的な構造を導入することが重要になります。本節では、ベクトルの「大きさ」を抽象化した「ノルム」の概念を定義し、様々な関数空間にどのようにノルムが定められるかを見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノルムの定義</h2>

            <p>
                まず、ベクトル空間に「大きさ」の概念を与えるノルムの公理を定義します。これは、実数や複素数の絶対値、あるいは有限次元空間におけるベクトルに対するユークリッドノルムの性質を抽象化したものです。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (ノルム)">
                <p>
                    <InlineMath math="V" /> を実数体 <InlineMath math="\mathbb{R}" /> または複素数体 <InlineMath math="\mathbb{C}" /> 上のベクトル空間とする。関数 <InlineMath math="\|\cdot\| : V \to [0, \infty)" /> が以下の3条件を満たすとき、これを <InlineMath math="V" /> 上の<b>ノルム（norm）</b>と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>正定値性:</strong> 任意の <InlineMath math="x \in V" /> に対し、<InlineMath math="\|x\| \geq 0" /> であり、<InlineMath math="\|x\| = 0 \iff x = 0" />。
                    </li>
                    <li>
                        <strong>斉次性:</strong> 任意の <InlineMath math="x \in V" /> と任意のスカラー <InlineMath math="\alpha" /> に対し、<InlineMath math="\|\alpha x\| = |\alpha|\|x\|" />。
                    </li>
                    <li>
                        <strong>三角不等式:</strong> 任意の <InlineMath math="x, y \in V" /> に対し、<InlineMath math="\|x + y\| \leq \|x\| + \|y\|" />。
                    </li>
                </ol>
            </ContentBox>

            <p>
                ノルムが与えられた空間を名前付けましょう。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (ノルム空間)">
                <p>
                    ベクトル空間 <InlineMath math="V" /> とその上のノルム <InlineMath math="\|\cdot\|" /> の組 <InlineMath math="(V, \|\cdot\|)" /> を<b>ノルム空間（normed space）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                このような有限次元のベクトル空間におけるノルムは幾何学的な意味を持っています。これについては少し立ち止まって意味を確認しておきましょう。
            </p>

            <ContentBox type="remark" title="ノルムの幾何学的意味と線形代数学">
                <p>
                    ノルムは「ベクトルの大きさ（長さ）」の抽象化であり、2-1 線形代数学IIで扱ったベクトルのノルムを、無限次元の関数空間などを含むより一般的なベクトル空間へと拡張したものです。条件(i)は原点から離れれば必ず正の大きさを持つこと、(ii)はベクトルを引き伸ばせば長さも同じ倍率で伸びること、(iii)は「寄り道をするより真っ直ぐ向かった方が近い」という幾何学的な事実を表しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代表的なノルム空間</h2>

            <p>
                それでは、これまでに学んできた数学的対象が実際にノルム空間となっていることを例で確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.1-1 (有限次元空間のノルム)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上のベクトル <InlineMath math="x = (x_1, \ldots, x_n)" /> に対して、<InlineMath math="p" />-ノルム（<InlineMath math="1 \leq p < \infty" />）および <InlineMath math="\infty" />-ノルムは次のように定義される。
                </p>
                <BlockMath math="\|x\|_p = \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}" />
                <BlockMath math="\|x\|_\infty = \max_{1 \leq i \leq n} |x_i|" />
                <p>
                    具体例として、<InlineMath math="\mathbb{R}^2" /> のベクトル <InlineMath math="x = (3, -4)" /> を考える。
                    このとき、各種ノルムは次のように計算できる。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="p=1" /> のとき: <InlineMath math="\|x\|_1 = |3| + |-4| = 7" /></li>
                    <li><InlineMath math="p=2" /> のとき: <InlineMath math="\|x\|_2 = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5" /></li>
                    <li><InlineMath math="p=\infty" /> のとき: <InlineMath math="\|x\|_\infty = \max(|3|, |-4|) = 4" /></li>
                </ul>
            </ContentBox>

            <p>
                実数空間などの有限次元ベクトル空間だけでなく、無限次元のベクトル空間（例えば、ある区間上の連続関数全体の空間や、無限数列の空間など）にも自然なノルムを定義することができます。関数解析で主役となるこれらの空間について見ていきましょう。
            </p>

            <ContentBox type="example" title={<span>Example 1.1-2 (<InlineMath math="C[a,b]" /> 上のノルム)</span>}>
                <p>
                    <InlineMath math="[a,b]" /> 上の連続関数全体の空間 <InlineMath math="C[a,b]" /> に対して、上限ノルム（一様ノルムとも呼ばれる）を次のように定義する。
                </p>
                <BlockMath math="\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|" />
                <p>
                    これはノルムの3公理を満たす。具体例として、<InlineMath math="C[-1, 2]" /> 上の関数 <InlineMath math="f(x) = x^2" /> を考えると、区間 <InlineMath math="[-1, 2]" /> において <InlineMath math="|f(x)|" /> が最大となるのは <InlineMath math="x = 2" /> のときであり、その値は <InlineMath math="4" /> である。したがって、
                </p>
                <BlockMath math="\|f\|_\infty = 4" />
                <p>
                    となる。このノルムは関数のグラフのうち、$y$ 軸から最も離れている点の距離を与える。
                </p>
            </ContentBox>

            <p>
                次に、無限数列に対してノルムを考える例を紹介します。これは Example 1.1-1 の <InlineMath math="\mathbb{R}^n" /> の拡張とみなすことができます。
            </p>

            <ContentBox type="example" title={<span>Example 1.1-3 (<InlineMath math="\ell^p" /> 空間)</span>}>
                <p>
                    複素数列 <InlineMath math="x = (x_n)_{n=1}^\infty" /> のうち、以下の級数が収束するもの全体の集合を <InlineMath math="\ell^p" />（エル・ピー）空間と呼ぶ（<InlineMath math="1 \leq p < \infty" />）。
                </p>
                <BlockMath math="\|x\|_p = \left( \sum_{n=1}^\infty |x_n|^p \right)^{1/p} < \infty" />
                <p>
                    この <InlineMath math="\|x\|_p" /> は <InlineMath math="\ell^p" /> 上のノルムとなる。
                    具体例として、数列 <InlineMath math="x = (1, 1/2, 1/4, 1/8, \ldots)" /> 、すなわち <InlineMath math="x_n = (1/2)^{n-1}" /> の <InlineMath math="\ell^2" /> ノルムを計算してみる。
                </p>
                <BlockMath math="\begin{aligned}
    \|x\|_2 &= \left( \sum_{n=1}^\infty \left| \left(\frac{1}{2}\right)^{n-1} \right|^2 \right)^{1/2} \\
    &= \left( \sum_{n=1}^\infty \left(\frac{1}{4}\right)^{n-1} \right)^{1/2} \\
    &= \left( \frac{1}{1 - 1/4} \right)^{1/2} \\
    &= \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}
\end{aligned}" />
            </ContentBox>

            <p>
                さらに、数列空間 <InlineMath math="\ell^p" /> の連続的な対応物として、ルベーグ積分を用いて定義される <InlineMath math="L^p" /> 空間があります。
            </p>

            <ContentBox type="example" title={<span>Example 1.1-4 (<InlineMath math="L^p" /> 空間)</span>}>
                <p>
                    測度空間 <InlineMath math="(X, \mathcal{F}, \mu)" /> 上の可測関数 <InlineMath math="f" /> に対し、<InlineMath math="p" />-乗可積分（<InlineMath math="1 \leq p < \infty" />）であるような関数の空間を考える。3-3 測度論で構成したルベーグ積分を用いて、
                </p>
                <BlockMath math="\|f\|_p = \left( \int_X |f|^p \, d\mu \right)^{1/p}" />
                <p>
                    を定義する。
                </p>
                <p>
                    ただし、このままでは <InlineMath math="\|f\|_p = 0" /> であっても「ほとんどいたるところで（almost everywhere, a.e.）<InlineMath math="f(x) = 0" />」であることしか保証されず、ノルムの正定値性（<InlineMath math="\|f\| = 0 \iff f = 0" />）を満たさない。そこで、「ほとんどいたるところ等しい」関数同士を同一視する同値関係 <InlineMath math="\sim" /> を導入し、その同値類 <InlineMath math="[f]" /> に対して成分を定めることで、<InlineMath math="L^p" /> は初めて厳密な意味でノルム空間となる。
                </p>
            </ContentBox>

            <p>
                このような <InlineMath math="L^p" /> 空間における同値類による同一視は、関数解析において非常に重要な意味を持ちます。
            </p>
            
            <ContentBox type="remark" title="ほとんどいたるところ等しい関数の同一視">
                <p>
                    <InlineMath math="L^p" /> のノルムでは特定の1点での関数の値を変えても積分値（すなわちノルム）は変わりません。そのため、空間の元（要素）は1つの「関数」ではなく、「積分値を変えない関数の集まり（同値類）」を取り扱っている点に注意が必要です。<InlineMath math="\|f\|_p = 0" /> は恒等的に <InlineMath math="f(x)=0" /> であることではなく、<InlineMath math="f=0 \ (\text{a.e.})" /> を意味します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ノルムは、ベクトル空間における「大きさ」や「長さ」の概念を抽象化したものであり、正定値性、斉次性、三角不等式を満たす関数である。</li>
                    <li><InlineMath math="\mathbb{R}^n" /> 上の <InlineMath math="p" />-ノルムや <InlineMath math="\infty" />-ノルムは、ノルム空間の最も基本的な例である。</li>
                    <li>無限次元のベクトル空間にもノルムは定義可能であり、連続関数空間 <InlineMath math="C[a,b]" /> 上の上限ノルムがその代表例である。</li>
                    <li>級数やルベーグ積分を用いて定義される <InlineMath math="\ell^p" /> 空間や <InlineMath math="L^p" /> 空間は、関数解析において不可欠なノルム空間である。</li>
                    <li><InlineMath math="L^p" /> 空間を厳密なノルム空間とするためには、ほとんどいたるところ等しい関数同士を同一視する同値類を用いる必要がある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
