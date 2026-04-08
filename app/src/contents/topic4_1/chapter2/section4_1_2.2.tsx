import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfBanachSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、無限次元空間においてはどのノルムを採用するかで完備性が分かれることを見ました。本節では、関数解析において主たる舞台となる無限次元空間である <InlineMath math="C[a,b]" />、<InlineMath math="\ell^p" />、および <InlineMath math="L^p" /> が、それぞれ適切なノルムのもとでバナッハ空間（完備）となることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="C[a,b]" /> と <InlineMath math="\ell^p" /> の完備性</h2>

            <p>
                まず、連続関数の空間 <InlineMath math="C[a,b]" /> について考えます。前節で <InlineMath math="L^1" /> ノルムを入れた場合は完備になりませんでしたが、上限ノルム（一様ノルム）を入れると完備になります。これは「連続関数の一様収束極限はまた連続関数になる」という解析学の有名な定理に他なりません。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 2.2-1 (<InlineMath math="C[a,b]" /> の完備性)</span>}>
                <p>
                    閉区間 <InlineMath math="[a,b]" /> 上の連続関数空間 <InlineMath math="C[a,b]" /> は、上限ノルム <InlineMath math="\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|" /> のもとでバナッハ空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(f_n)" /> を <InlineMath math="C[a,b]" /> のコーシー列とする。すなわち、任意の <InlineMath math="\varepsilon > 0" /> に対しある <InlineMath math="N" /> が存在し、<InlineMath math="m, n \geq N" /> ならば
                </p>
                <BlockMath math="\|f_m - f_n\|_\infty = \sup_{x \in [a,b]} |f_m(x) - f_n(x)| < \varepsilon" />
                <p>
                    となる。これは各 <InlineMath math="x \in [a,b]" /> に対して実数列 <InlineMath math="(f_n(x))" /> がコーシー列であることを意味する。<InlineMath math="\mathbb{R}" /> の完備性から、各 <InlineMath math="x" /> での極限値 <InlineMath math="f(x) = \lim_{n \to \infty} f_n(x)" /> が存在する。
                </p>
                <p>
                    次に、この各点極限関数 <InlineMath math="f" /> への収束が一様収束であることを示す。上記の不等式で <InlineMath math="m \to \infty" /> とすると、極限移行により
                </p>
                <BlockMath math="|f(x) - f_n(x)| \leq \varepsilon \quad (\forall n \geq N, \forall x \in [a,b])" />
                <p>
                    が得られ、上限をとれば <InlineMath math="\|f - f_n\|_\infty \leq \varepsilon" /> となる。これは <InlineMath math="(f_n)" /> が <InlineMath math="f" /> に上限ノルムで収束すること（一様収束）を意味する。
                </p>
                <p>
                    最後に <InlineMath math="f \in C[a,b]" /> を示す。任意の <InlineMath math="x, y \in [a,b]" /> に対して三角不等式を用いると、
                </p>
                <BlockMath math="|f(x) - f(y)| \leq |f(x) - f_n(x)| + |f_n(x) - f_n(y)| + |f_n(y) - f(y)|" />
                <p>
                    となる。十分大きな <InlineMath math="n" /> を選べば第1項と第3項は任意の <InlineMath math="\varepsilon > 0" /> より小さくでき、<InlineMath math="f_n" /> の連続性から <InlineMath math="x, y" /> を十分近づければ第2項もいくらでも小さくできる。よって <InlineMath math="f" /> は連続であり、極限が空間に属することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な関数列が一様収束する様子を思い浮かべることで、極限が空間の中にとどまる感覚を確かめましょう。
            </p>

            <ContentBox type="example" title={<span>Example 2.2-1 (<InlineMath math="C[0,1]" /> のコーシー列の収束)</span>}>
                <p>
                    関数列 <InlineMath math="f_n(x) = \sum_{k=0}^n \frac{x^k}{k!}" /> は、区間 <InlineMath math="[0,1]" /> 上で上限ノルムに関してコーシー列となる（テイラー展開の剰余項が <InlineMath math="0" /> に一様収束するため）。
                </p>
                <p>
                    Theorem 2.2-1 の保証により、この関数列は <InlineMath math="C[0,1]" /> 内の連続関数に収束する。実際、その極限は指数関数 <InlineMath math="f(x) = e^x" /> であり、<InlineMath math="[0,1]" /> 上で確かに連続となっている。
                </p>
            </ContentBox>

            <p>
                次に、無限数列の実数（または複素数）の空間である <InlineMath math="\ell^p" /> 空間も完備になることを示します。これも各成分の収束を空間全体の収束に持ち上げる操作です。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 2.2-2 (<InlineMath math="\ell^p" /> の完備性)</span>}>
                <p>
                    <InlineMath math="1 \leq p \leq \infty" /> に対し、数列空間 <InlineMath math="\ell^p" /> は <InlineMath math="\|\cdot\|_p" /> のもとでバナッハ空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    代表として <InlineMath math="1 \leq p < \infty" /> の場合を証明する。<InlineMath math="(x^{(m)})_{m=1}^\infty" /> を <InlineMath math="\ell^p" /> のコーシー列とする。<InlineMath math="x^{(m)} = (x^{(m)}_1, x^{(m)}_2, \ldots)" /> と成分表示する。任意の <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="N" /> が存在し、<InlineMath math="m, k \geq N" /> ならば
                </p>
                <BlockMath math="\sum_{n=1}^\infty |x^{(m)}_n - x^{(k)}_n|^p \leq \|x^{(m)} - x^{(k)}\|_p^p < \varepsilon^p" />
                <p>
                    となる。各成分 <InlineMath math="n" /> について <InlineMath math="|x^{(m)}_n - x^{(k)}_n| < \varepsilon" /> より、各成分の列 <InlineMath math="(x^{(m)}_n)_m" /> は <InlineMath math="\mathbb{C}" /> 内のコーシー列となるため、<InlineMath math="y_n = \lim_{m \to \infty} x^{(m)}_n" /> となる極限 <InlineMath math="y = (y_1, y_2, \ldots)" /> が存在する。
                </p>
                <p>
                    任意の有限の <InlineMath math="M" /> に対し、和を <InlineMath math="\sum_{n=1}^M" /> に制限して <InlineMath math="k \to \infty" /> とする（極限と有限和は交換可能）と、
                </p>
                <BlockMath math="\sum_{n=1}^M |x^{(m)}_n - y_n|^p \leq \varepsilon^p \quad (m \geq N)" />
                <p>
                    ここで <InlineMath math="M \to \infty" /> とすると、<InlineMath math="m \geq N" /> において <InlineMath math="\|x^{(m)} - y\|_p \leq \varepsilon" /> となりノルム収束が示される。また、三角不等式（ミンコフスキーの不等式）より <InlineMath math="\|y\|_p \leq \|y - x^{(N)}\|_p + \|x^{(N)}\|_p < \infty" /> となるので、<InlineMath math="y \in \ell^p" /> であることも示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="L^p" /> 空間の完備性</h2>

            <p>
                ルベーグ積分を用いて構成された <InlineMath math="L^p" /> 空間も完備となることが知られています。これは「リース-フィッシャーの定理」と呼ばれる、ルベーグ積分論と関数解析を結ぶ極めて重要な定理です。前節の Example 2.1-2 で関数空間がリーマン積分の意味（に近い <InlineMath math="L^1" /> ノルム）では完備にならない現象を見ましたが、ルベーグ積分の導入によってその欠陥が見事に修復されるのです。
            </p>

            <ContentBox type="theorem" title="Theorem 2.2-3 (リース-フィッシャーの定理)">
                <p>
                    任意の測度空間 <InlineMath math="(X, \mathcal{F}, \mu)" /> と <InlineMath math="1 \leq p \leq \infty" /> に対して、<InlineMath math="L^p(\mu)" /> はバナッハ空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="1 \leq p < \infty" /> の場合の証明概略を行う。<InlineMath math="(f_n)" /> を <InlineMath math="L^p" /> のコーシー列とする。<InlineMath math="\ell^p" /> の証明のように単純に各点極限を取ろうとしても、各点収束の保証がないため、急速に収束する部分列を抽出する。
                </p>
                <p>
                    コーシー列の仮定より、部分列 <InlineMath math="(f_{n_k})" /> を <InlineMath math="\|f_{n_{k+1}} - f_{n_k}\|_p < 1/2^k" /> となるように選べる。関数 <InlineMath math="g_K(x) = \sum_{k=1}^K |f_{n_{k+1}}(x) - f_{n_k}(x)|" /> を考えると、三角不等式より <InlineMath math="\|g_K\|_p < \sum 1/2^k = 1" /> となる。
                </p>
                <p>
                    単調収束定理（3-3 測度論）を用いると、極限関数 <InlineMath math="g(x) = \lim_K g_K(x)" /> が <InlineMath math="L^p" /> に属し、特に「ほとんどいたるところ（a.e.）」で有限値をとることがわかる。
                </p>
                <p>
                    これにより、急収束部分列は a.e. で絶対収束するため、各点の極限関数 <InlineMath math="f(x) = f_{n_1}(x) + \sum (f_{n_{k+1}}(x) - f_{n_k}(x))" /> が a.e. で存在する。最後にファトゥの補題を用いて、この全体列 <InlineMath math="(f_n)" /> がノルム <InlineMath math="\|\cdot\|_p" /> に関してもこの極限 <InlineMath math="f \in L^p" /> に収束することを示すことができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.2-2 (<InlineMath math="L^2[0,1]" /> のコーシー列の収束)</span>}>
                <p>
                    <InlineMath math="L^2[0,1]" /> 上で関数列 <InlineMath math="f_n(x) = x^{1/4} \cdot (1 - x^n)" /> を考える。
                    この関数列は各点 <InlineMath math="x \in (0,1)" /> においては <InlineMath math="x^{1/4}" /> に収束する。<InlineMath math="g(x) = x^{1/4}" /> は区間上で自乗可積分である（<InlineMath math="\int_0^1 \sqrt{x}\,dx = 2/3 < \infty" />）。
                </p>
                <p>
                    リース-フィッシャーの定理の帰結として、成分ごとの各点収束だけでなく、<InlineMath math="L^2" /> ノルムの観点からも <InlineMath math="\|f_n - g\|_2 \to 0" /> が保証される。よって関数解析的な操作（積分極限など）がこの関数列に対して正当化される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ルベーグ積分と関数解析">
                <p>
                    関数空間が完備の要請を満たすために同値類での同一視やルベーグ積分の導入が必要であったことは、現代の解析学がなぜルベーグ積分を標準としているかに対する明確な解答の一つです。<InlineMath math="L^p" /> 空間という「穴のない」舞台がなければ、偏微分方程式の解の存在証明や、後に学ぶスペクトル理論の展開は不可能です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>閉区間上の連続関数空間 <InlineMath math="C[a,b]" /> は、上限ノルムに関してバナッハ空間である（一様収束極限の連続性に起因）。</li>
                    <li>数列空間 <InlineMath math="\ell^p" /> （<InlineMath math="1 \leq p \leq \infty" />）もバナッハ空間である。</li>
                    <li>ルベーグ積分で定義される <InlineMath math="L^p" /> 空間はバナッハ空間である（リース-フィッシャーの定理）。これにより無限次元関数空間も極限操作に耐えうる頑強な構造を持つことが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
