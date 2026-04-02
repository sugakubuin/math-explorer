import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FourierSeriesGeneralPeriod() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章では周期 <InlineMath math="2\pi" /> の関数について詳しく学びましたが、現実の世界で扱う信号や物理現象の周期は必ずしも <InlineMath math="2\pi" /> とは限りません。本節では、周期が一般の <InlineMath math="2L" /> （<InlineMath math="L > 0" />）である場合にフーリエ級数をどのように拡張するかを学びます。これは、変数変換というシンプルな数学的操作によって、これまでの議論がそのまま適用できることを示しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">周期 2L のフーリエ係数の定義</h2>

            <p>
                周期 <InlineMath math="2L" /> の関数 <InlineMath math="f(x)" /> を考える際、変数変換 <InlineMath math="x = \frac{L}{\pi}t" /> を行うと、<InlineMath math="t" /> については周期 <InlineMath math="2\pi" /> の関数とみなせます。この関係を利用して、一般周期のフーリエ係数を導きます。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (周期 2L のフーリエ級数)">
                <p>
                    周期 <InlineMath math="2L" /> の関数 <InlineMath math="f(x)" /> のフーリエ級数と係数は、次のように定義される。
                </p>
                <BlockMath math="\begin{aligned} f(x) &\sim \sum_{n=-\infty}^{\infty} c_n e^{i \frac{n\pi x}{L}} \\ &= \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos \frac{n\pi x}{L} + b_n \sin \frac{n\pi x}{L} \right) \end{aligned}" />
                <p>
                    ここで、各係数は以下の積分によって求められる。
                </p>
                <BlockMath math="\begin{aligned} c_n &= \frac{1}{2L} \int_{-L}^{L} f(x) e^{-i \frac{n\pi x}{L}} dx \\ a_n &= \frac{1}{L} \int_{-L}^{L} f(x) \cos \frac{n\pi x}{L} dx \\ b_n &= \frac{1}{L} \int_{-L}^{L} f(x) \sin \frac{n\pi x}{L} dx \end{aligned}" />
            </ContentBox>

            <p>
                具体的な関数を使って、周期 <InlineMath math="2L" /> での展開を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (f(x) = x² の展開)">
                <p>
                    区間 <InlineMath math="[-L, L]" /> で定義された <InlineMath math="f(x) = x^2" /> を周期 <InlineMath math="2L" /> で拡張した関数のフーリエ級数を求めます。これは偶関数なので、<InlineMath math="b_n = 0" /> です。
                </p>
                <p>
                    まず、定数項（平均値）は：
                </p>
                <BlockMath math="a_0 = \frac{1}{L} \int_{-L}^{L} x^2 dx = \frac{2}{L} \left[ \frac{x^3}{3} \right]_0^L = \frac{2L^2}{3}" />
                <p>
                    次に、余弦係数 <InlineMath math="a_n" /> を部分積分を 2 回繰り返して求めます：
                </p>
                <BlockMath math="\begin{aligned} a_n &= \frac{1}{L} \int_{-L}^{L} x^2 \cos \frac{n\pi x}{L} dx = \frac{2}{L} \int_0^L x^2 \cos \frac{n\pi x}{L} dx \\ &= \frac{2}{L} \left( \left[ x^2 \frac{L}{n\pi} \sin \frac{n\pi x}{L} \right]_0^L - \int_0^L 2x \frac{L}{n\pi} \sin \frac{n\pi x}{L} dx \right) \\ &= -\frac{4}{n\pi} \left( \left[ x \left( -\frac{L}{n\pi} \right) \cos \frac{n\pi x}{L} \right]_0^L + \int_0^L \frac{L}{n\pi} \cos \frac{n\pi x}{L} dx \right) \\ &= \frac{4L^2}{n^2\pi^2} \cos n\pi = \frac{4L^2 (-1)^n}{n^2\pi^2} \end{aligned}" />
                <p>
                    したがって、展開式は次のようになります。
                </p>
                <BlockMath math="x^2 \sim \frac{L^2}{3} + \frac{4L^2}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos \frac{n\pi x}{L}" />
            </ContentBox>

            <p>
                この結果に特定の値を代入することで、再び興味深い級数公式を得ることができます。
            </p>

            <ContentBox type="example" title="Example 2.1-2 (f(x) = |x| とバーゼル問題（別証）)">
                <p>
                    区間 <InlineMath math="[-L, L]" /> の <InlineMath math="f(x) = |x|" /> を展開し、端点 <InlineMath math="x=L" /> を代入すると、前節でも触れたバーゼル問題の別の証明が得られます。
                </p>
                <p>
                    <InlineMath math="f(x) = |x|" /> の展開において、<InlineMath math="a_0 = L" />、<InlineMath math="a_n = \frac{2L( (-1)^n - 1 )}{n^2 \pi^2}" />（<InlineMath math="n" /> が奇数のときのみ残る）となります。
                </p>
                <BlockMath math="\begin{aligned} L &= \frac{L}{2} + \sum_{n: \text{odd}} \frac{-4L}{n^2\pi^2} \cos n\pi = \frac{L}{2} + \frac{4L}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \\ &\implies \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} = \frac{\pi^2}{8} \end{aligned}" />
                <p>
                    この奇数項の和から、全体の和 <InlineMath math="\sum 1/n^2 = \pi^2/6" /> を導くことができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界区間の周期延長と応用</h2>

            <p>
                周期関数の解析であるフーリエ級数が、なぜ周期を持たない（一般の有界区間上の）物理学的な境界値問題でこれほどまでに重宝されるのでしょうか。
            </p>

            <ContentBox type="remark" title="周期延長の意義：固有関数としての視点">
                <p>
                    ある有界区間 <InlineMath math="[0, L]" /> で定義された関数を、ダミーとして <InlineMath math="[-L, 0]" /> に拡張し、それを周期全体に繰り返す「周期延長」を考えます。すると、この拡張された関数のフーリエ級数は、元の区間 <InlineMath math="[0, L]" /> において微分方程式の解（固有関数）を構成するための強力な基底となります。
                </p>
            </ContentBox>

            <p>
                特に偏微分方程式の初期値・境界値問題において、この手法は本質的な役割を果たします。
            </p>

            <ContentBox type="example" title="Example 2.1-3 (熱方程式への適用予告)">
                <p>
                    長さ <InlineMath math="L" /> の棒の熱伝導を記述する熱方程式 <InlineMath math="u_t = \kappa u_{xx}" /> を考えます。両端の温度が 0 に保たれているという条件（ディリクレ境界条件）の下では、解は次のような正弦級数の形をとります。
                </p>
                <BlockMath math="u(x, t) = \sum_{n=1}^{\infty} b_n e^{-\kappa \left( \frac{n\pi}{L} \right)^2 t} \sin \frac{n\pi x}{L}" />
                <p>
                    ここで、係数 <InlineMath math="b_n" /> は初期温度分布をフーリエ展開することによって決定されます。高次の成分ほど、時間の経過とともに指数関数的に速く消散していくという物理的な平滑化現象が、この数式から明確に読み取れます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>周期 <InlineMath math="2L" /> の関数は、変数変換によって周期 <InlineMath math="2\pi" /> の形式と同様のフーリエ級数を構成できる。</li>
                    <li>基底関数は <InlineMath math="e^{i n\pi x / L}" /> （複素形式）または <InlineMath math="\cos(n\pi x / L), \sin(n\pi x / L)" /> （実形式）となる。</li>
                    <li>有界区間上の問題を解くために、人工的に周期関数として扱う「周期延長」の手法が物理学や工学で極めて重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
