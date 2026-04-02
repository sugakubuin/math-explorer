import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuityAndDiscontinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では、実数における関数（実数値関数）の連続性について、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法を用いた厳密な定義から出発し、その性質を探求します。
                直感的には「グラフが途切れていない」という性質である連続性ですが、厳密な定式化により、直感に反するような複雑な関数（至る所不連続な関数など）の振る舞いも正確に議論できるようになります。
                まずは、連続の定義そのものと、関数が連続でない場合（不連続点）の分類について見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点における連続性</h2>

            <p>
                ある点における関数の連続性は、極限の概念を用いて定義されます。Chapter 3 で点列の極限を用いたように、ここでは実数の近傍を用いた <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法によって定式化します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (点における連続性)">
                <p>
                    関数 <InlineMath math="f(x)" /> がその定義域の極限点 <InlineMath math="a" /> において<strong>連続</strong>（continuous）であるとは、
                    任意の正の実数 <InlineMath math="\varepsilon > 0" /> に対して、ある正の実数 <InlineMath math="\delta > 0" /> が存在し、
                </p>
                <BlockMath math="|x - a| < \delta \implies |f(x) - f(a)| < \varepsilon" />
                <p>
                    が成り立つことである。極限の記号を用いれば、以下のように表される。
                </p>
                <BlockMath math="\lim_{x \to a} f(x) = f(a)" />
            </ContentBox>

            <p>
                この定義は、入力 <InlineMath math="x" /> を <InlineMath math="a" /> に近づければ、出力 <InlineMath math="f(x)" /> もいくらでも <InlineMath math="f(a)" /> に近づくということを厳密に述べています。
                もし、関数の定義域内のすべての点で関数が連続である場合、その関数を単に<strong>連続関数</strong>と呼びます。
                次節 §4.2 以降で連続関数の性質を詳しく調べますが、ここでは連続でない場合、すなわち不連続点について分類してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">不連続点の分類</h2>

            <p>
                関数 <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> において不連続である場合、その原因はいくつか考えられます。（1）極限値 <InlineMath math="\lim_{x \to a} f(x)" /> が存在しない場合、（2）極限値は存在するが値 <InlineMath math="f(a)" /> と一致しない場合などです。これらに基づき、不連続点を分類します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-2 (不連続点の分類)">
                <p>
                    関数 <InlineMath math="f(x)" /> が点 <InlineMath math="a" /> で不連続であるとき、点 <InlineMath math="a" /> は以下のように分類される。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <strong>除去可能不連続点</strong> (Removable discontinuity): <br />
                        極限 <InlineMath math="\lim_{x \to a} f(x)" /> は存在するが、関数値 <InlineMath math="f(a)" /> と一致しない、あるいは <InlineMath math="f(a)" /> が定義されていない。
                        関数値を再定義する（または追加する）ことで連続にすることができる。
                    </li>
                    <li>
                        <strong>跳躍不連続点</strong> (Jump discontinuity): <br />
                        右側極限 <InlineMath math="\lim_{x \to a+0} f(x)" /> と左側極限 <InlineMath math="\lim_{x \to a-0} f(x)" /> は共に存在するが、それらが互いに異なる。
                    </li>
                    <li>
                        <strong>本質的不連続点</strong> (Essential discontinuity): <br />
                        左側極限あるいは右側極限の少なくとも一方が存在しない（無限大への発散も極限が存在しないケースとして扱う）。
                    </li>
                </ol>
            </ContentBox>

            <p>
                不連続点の分類は、関数の形状や性質を理解する上で重要です。除去可能不連続点は「穴が開いている」状態、跳躍不連続点は「段差がある」状態、本質的不連続点は振動が激しすぎたり漸近線を持ったりして「値が定まらない」状態と言えます。
            </p>

            <ContentBox type="remark" title="右側極限・左側極限について">
                <p>
                    右側極限 <InlineMath math="\lim_{x \to a+0} f(x) = L" /> とは、任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="\delta > 0" /> が存在し、<InlineMath math="a < x < a + \delta \implies |f(x) - L| < \varepsilon" /> が成り立つことです。左側極限も同様に定義されます。
                    両極限が存在し、一致する場合にのみ、通常の極限 <InlineMath math="\lim_{x \to a} f(x)" /> が存在します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">反例</h2>

            <p>
                最後に、ある意味で「極端な」不連続性を持つ関数の代表例であるディリクレ関数を紹介します。
                この関数は、我々の直感的な「グラフが描ける関数」からは大きく逸脱していますが、実数の性質（有理数と無理数の稠密性）を如実に反映した数学的に重要な例です。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (ディリクレ関数)">
                <p>
                    <strong>ディリクレ関数</strong> (Dirichlet function) <InlineMath math="D(x)" /> を次のように定義する。
                </p>
                <BlockMath math="D(x) = \begin{cases} 1 & (x \in \mathbb{Q}) \\ 0 & (x \in \mathbb{R} \setminus \mathbb{Q}) \end{cases}" />
                <p>
                    この関数は、有理数で 1、無理数で 0 をとる関数である。
                    実は、この関数 <InlineMath math="D(x)" /> は<strong>すべての実数において不連続</strong>（より正確には本質的不連続）である。
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    任意の点 <InlineMath math="a \in \mathbb{R}" /> をとる。<InlineMath math="a" /> へのいかなる近傍 <InlineMath math="(a - \delta, a + \delta)" /> を考えても、
                    Chapter 2 で学んだ有理数の稠密性および無理数の稠密性より、その近傍内には必ず有理数と無理数の両方が無限に存在する。
                    したがって、関数値は 0 と 1 を激しく振動し、いかなる値にも収束しない。
                </p>
            </ContentBox>

            <p>
                ディリクレ関数の例からもわかるように、実解析における関数は、必ずしも視覚的に理解しやすいものばかりではありません。
                しかし、このような関数を明確に議論できることこそが、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法をはじめとする厳密な実数論の強力さを示しています。
                次節では、より具体的な連続関数の代数演算や合成について、その連続性がどのように保たれるかを見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>点における連続性は、<InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法（あるいは極限）を用いて厳密に定義される。</li>
                    <li>不連続点は、極限の存在や関数値との一致状況により、除去可能不連続点・跳躍不連続点・本質的不連続点に分類される。</li>
                    <li>ディリクレ関数のように、定義域の「至る所で不連続」となるような極端な関数が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
