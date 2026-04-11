import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RiemannSphereAndCompactness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまでの複素解析では、主に複素平面 <InlineMath math="\mathbb{C}" /> の上で議論を展開してきました。しかし、代数関数や多項式の極限の振る舞いを対称性よく美しく扱うためには、「無限遠点 <InlineMath math="\infty" />」を対等な点として取り込む必要があります。本節では、無限遠点を付加することで完成する最も基本的で美しいコンパクトリーマン面、「リーマン球面（Riemann sphere）」の構成を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン球面の構成</h2>

            <p>
                複素平面 <InlineMath math="\mathbb{C}" /> に、ただ一つの記号 <InlineMath math="\infty" /> を追加した集合 <InlineMath math="\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}" /> を考えます。この集合に、リーマン面としての正則アトラス（座標チャート）を導入します。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.3-1 (リーマン球面 <InlineMath math="\hat{\mathbb{C}}" />)</span>}>
                <p>
                    集合 <InlineMath math="\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}" /> に対し、以下の2つの開集合と座標チャートを定義する：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="U_1 = \mathbb{C}" />,  <InlineMath math="\varphi_1(z) = z" /></li>
                    <li><InlineMath math="U_2 = (\mathbb{C} \setminus \{0\}) \cup \{\infty\}" />,  <InlineMath math="\varphi_2(z) = \begin{cases} 1/z & (z \neq \infty) \\ 0 & (z = \infty) \end{cases}" /></li>
                </ol>
                <p>
                    これらの開集合は <InlineMath math="U_1 \cup U_2 = \hat{\mathbb{C}}" /> を満たし被覆となる。<InlineMath math="\varphi_2" /> は「無限遠点付近を原点付近に反転する」チャートである。<br />
                    共通部分 <InlineMath math="U_1 \cap U_2 = \mathbb{C} \setminus \{0\} = \mathbb{C}^*" /> における座標変換は、<InlineMath math="w = \varphi_2 \circ \varphi_1^{-1}(z) = 1/z" /> で与えられる。写像 <InlineMath math="z \mapsto 1/z" /> は <InlineMath math="\mathbb{C}^*" /> 上で特異点を持たず正則であるため、このアトラスは正則アトラスである。
                    この複素構造を与えられた <InlineMath math="\hat{\mathbb{C}}" /> を<b>リーマン球面</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                この構成によって、<InlineMath math="\infty" /> は特異な点から、「<InlineMath math="\varphi_2" /> という地図を使えば原点に見える、至って普通の点」へと昇格します。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 3.3-1 (コンパクト性)</span>}>
                <p>
                    リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> はコンパクトなリーマン面である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    位相幾何学において構成される「立体射影（Stereographic projection）」を考える。
                    3次元ユークリッド空間内の単位球面 <InlineMath math="S^2 = \{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + (z-1)^2 = 1\}" /> （北極を <InlineMath math="N(0, 0, 2)" /> とする）から複素平面 <InlineMath math="\mathbb{C}" /> への射影を考えたとき、<InlineMath math="S^2 \setminus \{N\}" /> と <InlineMath math="\mathbb{C}" /> は連続的に同相（1対1写像）となる。
                </p>
                <p>
                    北極 <InlineMath math="N" /> に無限遠点 <InlineMath math="\infty" /> を割り当てると、<InlineMath math="\hat{\mathbb{C}}" /> は <InlineMath math="S^2" /> と同相となる（1点コンパクト化）。閉空間の有界閉部分集合である球面 <InlineMath math="S^2" /> はハイネ・ボレルの定理よりコンパクトであるため、それと同相な位相空間である <InlineMath math="\hat{\mathbb{C}}" /> もまたコンパクト空間である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1">
                <p>
                    関数 <InlineMath math="f(z) = 1/z" /> をリーマン球面上での関数としてどう評価するかを見ます。
                </p>
                <p>
                    通常の複素平面では、<InlineMath math="f(z)" /> は <InlineMath math="z = 0" /> に極を持ち、「無限大に発散する」ため正則ではありません。しかし、リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> への写像 <InlineMath math="f: \hat{\mathbb{C}} \to \hat{\mathbb{C}}" /> として考え、<InlineMath math="f(0) = \infty, f(\infty) = 0" /> と拡張します。
                </p>
                <p>
                    <InlineMath math="z = 0" /> の近傍で値域は <InlineMath math="\infty" /> の近傍になるため、値にチャート <InlineMath math="\varphi_2" /> を適用して調べます。
                </p>
                <BlockMath math="\tilde{f}(z) = \varphi_2(f(z)) = \varphi_2(1/z) = 1/(1/z) = z" />
                <p>
                    このように、適切な地図（チャート）を通して見れば、単なる <InlineMath math="z \mapsto z" /> という完全な正則関数になります。したがって、<InlineMath math="f(z) = 1/z" /> はリーマン球面の「正則自己同型写像」の一種です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理型関数とリーマン球面</h2>

            <p>
                リーマン球面がコンパクトであることは、その上の関数に極めて強い制約を課します。
            </p>

            <ContentBox type="remark" title="コンパクトリーマン面上の正則関数">
                <p>
                    <InlineMath math="\hat{\mathbb{C}}" /> 全体で定義された <InlineMath math="\mathbb{C}" /> 値の正則関数 <InlineMath math="f" /> が存在したとします。<InlineMath math="\hat{\mathbb{C}}" /> はコンパクトであり、連続関数の像もコンパクト（つまり有界）になります。複素平面において、全平面で正則かつ有界な関数はリューヴィルの定理により<b>「定数のみ」</b>です。つまり、コンパクトなリーマン面上に面白い正則関数は一つも存在しません。
                </p>
            </ContentBox>

            <p>
                そこで、定数以外の非自明な関数を探すためには、「値として <InlineMath math="\infty" /> を許す」、すなわち極を持つ関数である<b>有理型関数（meromorphic function）</b>を対象にする必要があります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-2">
                <p>
                    リーマン球面 <InlineMath math="\hat{\mathbb{C}}" /> 上で定義された有理型関数は、有理関数（2つの多項式 <InlineMath math="P(z), Q(z)" /> の商 <InlineMath math="P(z)/Q(z)" />）に限られる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を <InlineMath math="\hat{\mathbb{C}}" /> 上の定数でない有理型関数とする。極の集合を考えるが、もし無限個の極があれば、コンパクト性より極の集積点が存在し、そこは真性特異点となって有理型の定義に反する。よって、極は必ず有限個 <InlineMath math="p_1, \ldots, p_k" /> である（<InlineMath math="\infty" /> が極であることもあり得る）。
                </p>
                <p>
                    各極 <InlineMath math="p_i \in \mathbb{C}" /> の近傍で、<InlineMath math="f" /> は主要部（ローラン展開の負のべき部分）を持つ。これを <InlineMath math="P_i(1/(z-p_i))" /> （<InlineMath math="P_i" /> は多項式）とする。<InlineMath math="\infty" /> が極の場合は、主要部は <InlineMath math="z" /> の多項式 <InlineMath math="P_\infty(z)" /> となる。
                </p>
                <p>
                    ここで、新しい関数 <InlineMath math="g(z) = f(z) - \sum_{i=1}^k P_i(1/(z-p_i)) - P_\infty(z)" /> を定義する。<InlineMath math="g(z)" /> は <InlineMath math="f" /> からすべての極での発散部分（主要部）を引き算したものであるため、<InlineMath math="\hat{\mathbb{C}}" /> 全体で極を持たず、全領域で正則となる。
                </p>
                <p>
                    先ほどの Remark の通り、<InlineMath math="\hat{\mathbb{C}}" /> 上の正則関数はコンパクト性とリューヴィルの定理により定数 <InlineMath math="C" /> にならなければならない。すなわち <InlineMath math="g(z) = C" /> である。
                </p>
                <p>
                    移項して、
                    <BlockMath math="f(z) = C + \sum_{i=1}^k P_i\left(\frac{1}{z-p_i}\right) + P_\infty(z)" />
                    を得る。右辺は多項式の組み合わせ（有理式）であるため、<InlineMath math="f" /> は有理関数でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-2">
                <p>
                    関数 <InlineMath math="f(z) = \frac{z^2 + 1}{z - 1}" /> を考えます。これは2つの多項式の商であるため有理関数です。
                </p>
                <p>
                    <InlineMath math="\hat{\mathbb{C}}" /> 上の有理型関数として捉えると、分母がゼロになる <InlineMath math="z = 1" /> が1位の極です。さらに無限遠点の振る舞いを調べるため、<InlineMath math="w = 1/z" /> （すなわち <InlineMath math="z \to \infty" />、<InlineMath math="w \to 0" />）を代入すると、
                </p>
                <BlockMath math="f(1/w) = \frac{(1/w)^2 + 1}{1/w - 1} = \frac{1 + w^2}{w(1 - w)}" />
                <p>
                    となり、<InlineMath math="w = 0" /> に1位の極を持ちます。すなわち、この関数はリーマン球面上において「有限平面上の点 <InlineMath math="z=1" />」と「無限遠点 <InlineMath math="z=\infty" />」の2箇所に1位の極をもつ有理型関数であると分析できます。
                </p>
            </ContentBox>

            <p>
                リーマン球面は、極と零点を無限遠点を含めた対等な世界で論じるための、極めて自然で強力なフレームワークを提供します。
            </p>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複素平面に無限遠点を付加した <InlineMath math="\hat{\mathbb{C}}" /> は、 <InlineMath math="z \mapsto 1/z" /> のチャートを導入することでコンパクトなリーマン面（リーマン球面）となる。</li>
                    <li>コンパクトリーマン面上の全域で正則な関数は定数しかないため、極を許容する有理型関数が主役となる。</li>
                    <li>リーマン球面上の有理型関数は、有理関数（多項式／多項式）に完全に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
