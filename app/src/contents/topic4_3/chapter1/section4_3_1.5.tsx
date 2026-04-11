import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AbelsAdditionTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで楕円積分の反転と二重周期性の発見について学びました。本節では、楕円関数論の歴史的な頂点の一つであるアーベルの加法定理を紹介します。この定理は、楕円積分の和が再び一つの楕円積分として、代数的な関係を用いて表されることを主張するものであり、後に学ぶ楕円曲線の群法則の基礎となる重要な結果です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">アーベルの加法定理の主張</h2>

            <p>
                まずはアーベルの加法定理の主張を第一種楕円積分に対して定式化します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 1.5-1 (アーベルの加法定理)</span>}>
                <p>
                    第一種楕円積分 <InlineMath math="F(\varphi, k)" /> に対して、
                </p>
                <BlockMath math="F(\varphi_1, k) + F(\varphi_2, k) = F(\varphi_3, k)" />
                <p>
                    を満たす <InlineMath math="\varphi_3" /> が、<InlineMath math="\varphi_1" /> と <InlineMath math="\varphi_2" /> の代数的な関係式によって一意的に定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第一種楕円積分を表す微分方程式 <InlineMath math="\frac{dx}{\sqrt{R(x)}} + \frac{dy}{\sqrt{R(y)}} = 0" /> を満たすように変数 <InlineMath math="x, y" /> が動くとき、この2変数の間に代数的な関係式が成り立つことを、オイラーによる変形を用いて示す。ここで <InlineMath math="R(x) = (1-x^2)(1-k^2x^2)" /> である。
                </p>
                <p>
                    媒介変数 <InlineMath math="t" /> を導入し、<InlineMath math="x(t), y(t)" /> が以下の微分方程式を満たすとする。
                </p>
                <BlockMath math="\frac{dx}{dt} = \sqrt{R(x)}, \quad \frac{dy}{dt} = -\sqrt{R(y)}" />
                <p>
                    このときただちに <InlineMath math="\frac{dx}{\sqrt{R(x)}} + \frac{dy}{\sqrt{R(y)}} = dt - dt = 0" /> となる。ここで、補助的な関数として <InlineMath math="N = x\dot{y} - y\dot{x}" /> および <InlineMath math="D = 1 - k^2 x^2 y^2" /> を考える（上部のドットは <InlineMath math="t" /> による微分を表す）。まず、<InlineMath math="x" /> の速度の2乗は以下のようになる。
                </p>
                <BlockMath math="\dot{x}^2 = 1 - (1+k^2)x^2 + k^2x^4" />
                <p>
                    両辺を <InlineMath math="t" /> で微分して <InlineMath math="2\dot{x}" /> で割ることで、加速度 <InlineMath math="\ddot{x} = -(1+k^2)x + 2k^2x^3" /> を得る。全く同様に <InlineMath math="\ddot{y} = -(1+k^2)y + 2k^2y^3" /> が成り立つ。これらを用いて <InlineMath math="N" /> の時間微分を計算すると、
                </p>
                <BlockMath math="\dot{N} = \frac{d}{dt}(x\dot{y} - y\dot{x}) = \dot{x}\dot{y} + x\ddot{y} - \dot{y}\dot{x} - y\ddot{x} = x\ddot{y} - y\ddot{x}" />
                <p>
                    ここに加速度の式を代入して整理すると、
                </p>
                <BlockMath math="\begin{aligned} \dot{N} &= -x(1+k^2)y + 2k^2xy^3 + y(1+k^2)x - 2k^2yx^3 \\ &= -2k^2xy(x^2 - y^2) \end{aligned}" />
                <p>
                    となる。次に、<InlineMath math="x^2\dot{y}^2 - y^2\dot{x}^2" /> を計算する。<InlineMath math="\dot{x}^2 = R(x), \dot{y}^2 = R(y)" /> を展開して代入すると、
                </p>
                <BlockMath math="\begin{aligned} x^2\dot{y}^2 - y^2\dot{x}^2 &= x^2(1 - (1+k^2)y^2 + k^2y^4) \\ &\quad - y^2(1 - (1+k^2)x^2 + k^2x^4) \\ &= x^2 - y^2 - k^2x^2y^2(x^2 - y^2) \\ &= (x^2 - y^2)D \end{aligned}" />
                <p>
                    を得る。一方、左辺は因数分解により <InlineMath math="(x\dot{y} - y\dot{x})(x\dot{y} + y\dot{x}) = N(x\dot{y} + y\dot{x})" /> となるため、両者を比較して <InlineMath math="x^2 - y^2 = \frac{N}{D}(x\dot{y} + y\dot{x})" /> を得る。これを先ほどの <InlineMath math="\dot{N}" /> の式に代入する。
                </p>
                <BlockMath math="\dot{N} = -2k^2 x y \frac{N}{D} (x\dot{y} + y\dot{x})" />
                <p>
                    他方で、<InlineMath math="D" /> の微分は合成関数の微分により <InlineMath math="\dot{D} = -2k^2 x y (x\dot{y} + y\dot{x})" /> となる。これを用いると、上述の式は <InlineMath math="\dot{N} = \frac{N}{D} \dot{D}" /> という極めて簡明な微分方程式に帰着する。これを変形すると <InlineMath math="\frac{\dot{N}}{N} = \frac{\dot{D}}{D}" /> となり、両辺を積分することで定数 <InlineMath math="C" /> に対し
                </p>
                <BlockMath math="\frac{N}{D} = \frac{x\dot{y} - y\dot{x}}{1 - k^2 x^2 y^2} = C" />
                <p>
                    が導かれる。<InlineMath math="\dot{x} = \sqrt{R(x)}, \dot{y} = -\sqrt{R(y)}" /> であることを用いて元の変形に戻し、定数の符号を吸収させて <InlineMath math="x_3" /> と置けば、
                </p>
                <BlockMath math="\frac{x\sqrt{R(y)} + y\sqrt{R(x)}}{1 - k^2 x^2 y^2} = x_3 \quad (\text{定数})" />
                <p>
                    となる。この関係式は、積分変数 <InlineMath math="x = \sin\varphi_1" /> と <InlineMath math="y = \sin\varphi_2" /> を用いた代数的な等式となっている。ここで <InlineMath math="\varphi_2 \to 0" /> （すなわち <InlineMath math="y \to 0" />）の極限を考えると、積分は <InlineMath math="\int_0^{\varphi_1} \frac{d\varphi}{\sqrt{1-k^2\sin^2\varphi}} + 0" /> となり、代数関係式からは <InlineMath math="x_3 = x = \sin\varphi_1" /> となる。
                </p>
                <p>
                    したがって、一般の場合において <InlineMath math="x_3" /> は、合成された積分の値 <InlineMath math="F(\varphi_3, k)" /> に対する上限値 <InlineMath math="\sin\varphi_3" /> そのものであることが分かる。以上により、積分の和が代数的な関係で表される一つの積分に帰着することが証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理の直感的な理解を深めるため、母数 <InlineMath math="k=0" /> の場合の具体例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 1.5-1">
                <p>
                    <InlineMath math="k = 0" /> の場合、第一種楕円積分は逆正弦関数となります。
                </p>
                <BlockMath math="\int_0^{x_1} \frac{dt}{\sqrt{1-t^2}} + \int_0^{x_2} \frac{dt}{\sqrt{1-t^2}} = \int_0^{x_3} \frac{dt}{\sqrt{1-t^2}}" />
                <p>
                    すなわち、
                </p>
                <BlockMath math="\arcsin x_1 + \arcsin x_2 = \arcsin x_3" />
                <p>
                    となります。三角関数の加法定理より、
                </p>
                <BlockMath math="\begin{aligned} x_3 &= \sin(\arcsin x_1 + \arcsin x_2) \\ &= x_1\sqrt{1-x_2^2} + x_2\sqrt{1-x_1^2} \end{aligned}" />
                <p>
                    となり、<InlineMath math="x_3" /> が <InlineMath math="x_1" /> と <InlineMath math="x_2" /> の代数的な式で表されることがわかります。アーベルの加法定理は、これの一般化であると言えます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">楕円曲線の群法則との対応</h2>

            <p>
                アーベルの加法定理は、単なる積分の公式にとどまらず、背景にある幾何学的な構造を反映しています。
            </p>

            <ContentBox type="remark" title="楕円曲線の群構造との関係">
                <p>
                    アーベルの加法定理は、代数曲線上の点の加法構造を反映しています。第5章で詳しく学びますが、ワイエルシュトラスの <InlineMath math="\wp" /> 関数を通じて、この関係式は楕円曲線上の点の加法、すなわち「群法則」として再定式化されます。積分の上限に対応する点の足し算が、幾何学的な操作（直線を引いて交点を求める操作）に対応しているという事実は、代数幾何学の出発点とも言える深い洞察です。
                </p>
            </ContentBox>

            <p>
                この加法構造の最も基本的な性質である可換性（対称性）を確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 1.5-2">
                <p>
                    加法公式の対称性について考えます。アーベルの加法定理による和
                </p>
                <BlockMath math="F(\varphi_1, k) + F(\varphi_2, k) = F(\varphi_3, k)" />
                <p>
                    において、左辺は明らかに <InlineMath math="\varphi_1" /> と <InlineMath math="\varphi_2" /> の入れ替えに関して対称です。したがって、関係式で定まる <InlineMath math="\varphi_3" /> の表式もまた、<InlineMath math="\varphi_1" /> と <InlineMath math="\varphi_2" /> に対して対称でなければなりません。
                </p>
                <p>
                    この対称性は、後に定義される楕円曲線の群法則が可換群（アーベル群）となることに直接対応しています。
                </p>
            </ContentBox>

            {/* Summary */}
            <ContentBox type="note" title="§1.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>アーベルの加法定理は、二つの楕円積分の和を一つの楕円積分で表す定理である。</li>
                    <li>合成された積分の上限は、元の積分の上限同士の代数的な関係式として与えられる。</li>
                    <li>この定理は、<InlineMath math="k=0" /> の場合の三角関数の加法定理の自然な一般化となっている。</li>
                    <li>この加法公式の背後には、楕円曲線上の点の成す群構造が潜んでおり、後の章の重要な布石となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
