import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstAndSecondEllipticIntegrals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、楕円の弧長や振り子の周期といった具体的な物理的・幾何学的な問題から、初等関数では表せない新しいクラスの積分が登場することを見ました。本節では、ルジャンドル（Legendre）によって整理された楕円積分の標準形のうち、特に基本的な「第一種」および「第二種」の楕円積分について定義し、その性質を考察します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第一種楕円積分</h2>

            <p>
                まず、最も基本となる第一種楕円積分を定義します。これは被積分関数が分母に平方根を持つ形をしています。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.2-1 (<b>第一種不完全楕円積分</b>)</span>}>
                <p>
                    パラメータ <InlineMath math="k" />（<InlineMath math="0 < k < 1" />）および変数 <InlineMath math="\varphi" /> に対し、以下の積分を<b>第一種不完全楕円積分</b>（incomplete elliptic integral of the first kind）と呼ぶ。
                </p>
                <BlockMath math="F(\varphi, k) = \int_0^\varphi \frac{1}{\sqrt{1-k^2\sin^2\theta}}\,d\theta" />
                <p>
                    ここで、パラメータ <InlineMath math="k" /> を<b>母数</b>（modulus）と呼ぶ。
                </p>
            </ContentBox>

            <p>
                特に積分の上限 <InlineMath math="\varphi" /> が <InlineMath math="\pi/2" /> の場合、この積分は母数 <InlineMath math="k" /> のみに依存する関数となり、特別な記号で表されます。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.2-2 (<b>第一種完全楕円積分</b>)</span>}>
                <p>
                    第一種不完全楕円積分において <InlineMath math="\varphi = \pi/2" /> としたものを<b>第一種完全楕円積分</b>（complete elliptic integral of the first kind）と呼び、<InlineMath math="K(k)" /> で表す。
                </p>
                <BlockMath math="K(k) = F\left(\frac{\pi}{2}, k\right) = \int_0^{\pi/2} \frac{1}{\sqrt{1-k^2\sin^2\theta}}\,d\theta" />
            </ContentBox>

            <p>
                これらの定義が具体的にどのような値を取るのか、いくつかの極端な母数 <InlineMath math="k" /> について計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-1">
                <p>
                    第一種完全楕円積分 <InlineMath math="K(k)" /> の具体的な値を調べる。
                </p>
                <p>
                    1. <InlineMath math="k = 0" /> のとき：被積分関数は常に <InlineMath math="1" /> となるため、
                </p>
                <BlockMath math="K(0) = \int_0^{\pi/2} 1 \,d\theta = \frac{\pi}{2}" />
                <p>
                    となる。
                </p>
                <p>
                    2. <InlineMath math="k \to 1" /> のとき：被積分関数は <InlineMath math="(1-\sin^2\theta)^{-1/2} = 1/\cos\theta" /> となり、<InlineMath math="\theta \to \pi/2" /> において発散する。実際、積分は対数的に発散し、<InlineMath math="K(k) \to \infty" /> となる。
                </p>
                <p>
                    3. 中間的な値として <InlineMath math="k = 1/\sqrt{2}" /> のとき、数値計算を行うと、
                </p>
                <BlockMath math="K\left(\frac{1}{\sqrt{2}}\right) \approx 1.854" />
                <p>
                    となることが知られている。
                </p>
            </ContentBox>

            <p>
                前節 §1.1 で登場した振り子の周期は、まさにこの第一種完全楕円積分 <InlineMath math="K(k)" /> を用いて表されるため、非線形物理学において非常に重要な関数となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二種楕円積分</h2>

            <p>
                続いて、被積分関数が分子に平方根を持つ形の積分を導入します。これは楕円の弧長を計算する際に直接現れる積分です。
            </p>

            <ContentBox type="definition" title={<span>Definition 1.2-3 (<b>第二種不完全楕円積分</b>)</span>}>
                <p>
                    母数 <InlineMath math="k" />（<InlineMath math="0 < k < 1" />）および変数 <InlineMath math="\varphi" /> に対し、以下の積分を<b>第二種不完全楕円積分</b>（incomplete elliptic integral of the second kind）と呼ぶ。
                </p>
                <BlockMath math="E(\varphi, k) = \int_0^\varphi \sqrt{1-k^2\sin^2\theta}\,d\theta" />
            </ContentBox>

            <ContentBox type="definition" title={<span>Definition 1.2-4 (<b>第二種完全楕円積分</b>)</span>}>
                <p>
                    第二種不完全楕円積分において <InlineMath math="\varphi = \pi/2" /> としたものを<b>第二種完全楕円積分</b>（complete elliptic integral of the second kind）と呼び、<InlineMath math="E(k)" /> で表す。
                </p>
                <BlockMath math="E(k) = E\left(\frac{\pi}{2}, k\right) = \int_0^{\pi/2} \sqrt{1-k^2\sin^2\theta}\,d\theta" />
            </ContentBox>

            <p>
                この関数 <InlineMath math="E(k)" /> が、名前の由来である「楕円の弧長」とどのように結びつくのかを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-2">
                <p>
                    §1.1 で考えた楕円 <InlineMath math="x = a\cos\theta" />, <InlineMath math="y = b\sin\theta" />（<InlineMath math="a > b > 0" />）の全周長 <InlineMath math="L" /> を計算する。
                </p>
                <p>
                    楕円の離心率を <InlineMath math="e = \sqrt{1 - b^2/a^2}" /> とする。このとき、第一象限における弧長は積分
                </p>
                <BlockMath math="\int_0^{\pi/2} \sqrt{a^2\sin^2\theta + b^2\cos^2\theta}\,d\theta"/>
                <p>
                    で与えられる。式を変形すると、
                </p>
                <BlockMath math="\begin{aligned} \sqrt{a^2\sin^2\theta + b^2\cos^2\theta} &= a\sqrt{\sin^2\theta + \frac{b^2}{a^2}\cos^2\theta} \\ &= a\sqrt{1 - \cos^2\theta + (1-e^2)\cos^2\theta} \\ &= a\sqrt{1 - e^2\cos^2\theta} \end{aligned}" />
                <p>
                    ここで <InlineMath math="\phi = \frac{\pi}{2} - \theta" /> と変数変換すると、被積分関数は <InlineMath math="a\sqrt{1 - e^2\sin^2\phi}" /> となる。したがって、楕円の全周長は
                </p>
                <BlockMath math="L = 4a \int_0^{\pi/2} \sqrt{1 - e^2\sin^2\phi}\,d\phi = 4aE(e)" />
                <p>
                    となり、第二種完全楕円積分において母数 <InlineMath math="k" /> を離心率 <InlineMath math="e" /> としたものに他ならないことがわかる。
                </p>
            </ContentBox>

            <p>
                このように、<InlineMath math="K(k)" /> と <InlineMath math="E(k)" /> はそれぞれ異なる物理的・幾何学的起源を持っていますが、母数 <InlineMath math="k" /> の関数としての解析的な性質を探る上で重要な対象となります。
            </p>

            <ContentBox type="remark" title="解析的性質と特異性">
                <p>
                    完全楕円積分 <InlineMath math="K(k)" /> と <InlineMath math="E(k)" /> は、区間 <InlineMath math="(-1, 1)" /> において <InlineMath math="k" /> の実解析的な関数です。テーラー展開を用いてべき級数として表現することができます。しかし、<InlineMath math="k \to 1" /> の極限（すなわち離心率が1に近づき、楕円が極端に細長くなる極限）においては、<InlineMath math="K(k)" /> は対数的な発散を示します。
                </p>
                <p>
                    このような端点での対数的発散は、複素領域に拡張した際の特異点構造（分岐点）と深く関わっており、後続の章で複素解析的な視点から詳細に扱われることになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <InlineMath math="F(\varphi, k) = \int_0^\varphi (1-k^2\sin^2\theta)^{-1/2}\,d\theta" /> を第一種不完全楕円積分といい、<InlineMath math="\varphi = \pi/2" /> の場合を完全楕円積分 <InlineMath math="K(k)" /> と呼ぶ。
                    </li>
                    <li>
                        <InlineMath math="E(\varphi, k) = \int_0^\varphi (1-k^2\sin^2\theta)^{1/2}\,d\theta" /> を第二種不完全楕円積分といい、<InlineMath math="\varphi = \pi/2" /> の場合を完全楕円積分 <InlineMath math="E(k)" /> と呼ぶ。
                    </li>
                    <li>
                        <InlineMath math="K(k)" /> は振り子の周期に、<InlineMath math="E(k)" /> は楕円の弧長（母数 <InlineMath math="k" /> は離心率に対応）に直接的に結びついている。
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
