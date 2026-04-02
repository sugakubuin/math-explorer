import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultivariableLimitContinuity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまで1変数関数の理論を ε-δ 論法で厳密に展開してきました。
                本章からは舞台を<strong>多変数関数</strong>に移します。
                多変数の極限は、1変数とは本質的に異なる困難を含んでいます。
                1変数では <InlineMath math="x \to a" /> のアプローチは左右2方向だけですが、
                2変数では<strong>あらゆる方向・あらゆる経路</strong>から <InlineMath math="(x, y) \to (a, b)" /> に近づけるため、
                極限の存在は格段に厳しい条件になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数関数の極限</h2>

            <ContentBox type="definition" title="Definition 4.1-1 (2変数関数の極限：ε-δ による定義)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> の近くで定義されているとする。
                    このとき、
                </p>
                <BlockMath math="\lim_{(x,y) \to (a,b)} f(x,y) = L" />
                <p className="leading-relaxed">
                    であるとは、次の条件が成り立つことをいう：
                </p>
                <BlockMath math="\begin{aligned} \forall \varepsilon > 0, \; \exists \delta > 0 \; \text{ s.t. } \; 0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta & \\ \implies |f(x,y) - L| &< \varepsilon \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    すなわち、点 <InlineMath math="(x, y)" /> が <InlineMath math="(a, b)" /> を中心とする半径 <InlineMath math="\delta" /> の<strong>開円板</strong>の中にある限り
                    （ただし中心自身を除く）、<InlineMath math="f(x, y)" /> は <InlineMath math="L" /> から <InlineMath math="\varepsilon" /> 以内に収まる、ということである。
                </p>
            </ContentBox>

            <p>
                1変数の場合との最も重要な違いは、<InlineMath math="|x - a| < \delta" /> という「区間」が、
                <InlineMath math="\sqrt{(x-a)^2 + (y-b)^2} < \delta" /> という「円板」に置き換わっている点です。
                この違いが、多変数の極限を1変数よりもはるかに難しいものにしています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1変数との本質的な違い</h2>

            <ContentBox type="remark" title="多変数極限は「あらゆる経路」で一致する必要がある">
                <p className="leading-relaxed">
                    1変数関数では、左極限と右極限が一致すれば極限が存在しました。
                    しかし2変数では、<InlineMath math="(x, y) \to (a, b)" /> への近づき方は無数にあります。
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><InlineMath math="x" /> 軸に沿って（<InlineMath math="y = b" /> を固定して <InlineMath math="x \to a" />）</li>
                    <li><InlineMath math="y" /> 軸に沿って（<InlineMath math="x = a" /> を固定して <InlineMath math="y \to b" />）</li>
                    <li>直線 <InlineMath math="y - b = m(x - a)" /> に沿って</li>
                    <li>放物線 <InlineMath math="y - b = (x - a)^2" /> のような曲線に沿って</li>
                    <li>渦巻き状の経路に沿って</li>
                </ul>
                <p className="leading-relaxed mt-2">
                    極限が存在するとは、<strong>これらすべての経路で極限値が同じ <InlineMath math="L" /> に収束する</strong>ことを意味します。
                    言い換えれば、たった1つでも異なる値に収束する経路があれば、多変数極限は存在しません。
                </p>
                <p className="leading-relaxed mt-2">
                    このため、「極限が存在しない」ことを示すには2つの異なる経路で異なる値を得れば十分ですが、
                    「極限が存在する」ことを示すにはすべての経路で一致することを ε-δ で直接証明する必要があります。
                </p>
            </ContentBox>

            <p>
                では、「あらゆる経路で同じ値」という強い条件が実際に破れる例を見てみましょう。
                次の例は、多変数極限の存在を誤って判断してしまう典型的な落とし穴です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">経路依存による反例</h2>

            <ContentBox type="example" title="Example 4.1-1 (直線極限が存在するが多変数極限が存在しない例)">
                <p className="leading-relaxed">
                    次の関数を考える。
                </p>
                <BlockMath math="f(x, y) = \frac{xy}{x^2 + y^2} \quad ((x, y) \neq (0, 0))" />
                <p className="leading-relaxed">
                    <InlineMath math="(x, y) \to (0, 0)" /> における極限が存在するかを調べる。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>x 軸に沿ったアプローチ（<InlineMath math="y = 0" />）：</strong>
                </p>
                <BlockMath math="f(x, 0) = \frac{x \cdot 0}{x^2 + 0^2} = 0 \to 0" />
                <p className="leading-relaxed mt-2">
                    <strong>y 軸に沿ったアプローチ（<InlineMath math="x = 0" />）：</strong>
                </p>
                <BlockMath math="f(0, y) = \frac{0 \cdot y}{0^2 + y^2} = 0 \to 0" />
                <p className="leading-relaxed mt-2">
                    <strong>直線 <InlineMath math="y = x" /> に沿ったアプローチ：</strong>
                </p>
                <BlockMath math="f(x, x) = \frac{x \cdot x}{x^2 + x^2} = \frac{x^2}{2x^2} = \frac{1}{2}" />
                <p className="leading-relaxed mt-2">
                    x 軸・y 軸方向では <InlineMath math="0" /> に近づきますが、直線 <InlineMath math="y = x" /> に沿うと <InlineMath math="\frac{1}{2}" /> に近づきます。
                    異なる経路で異なる極限値が得られたため、<InlineMath math="\lim_{(x,y)\to(0,0)} f(x,y)" /> は<strong>存在しません</strong>。
                </p>
                <p className="leading-relaxed mt-2">
                    この例は、「座標軸方向の極限を調べただけでは不十分」という教訓を与えてくれます。
                </p>
            </ContentBox>

            <p>
                極限の概念が定まったところで、連続性の定義に進みましょう。
                1変数と同様に、「極限値と関数値が一致する」ことが連続性です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続性の定義</h2>

            <ContentBox type="definition" title="Definition 4.1-2 (多変数関数の連続性)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="f(x, y)" /> が点 <InlineMath math="(a, b)" /> で<strong>連続</strong>であるとは、
                </p>
                <BlockMath math="\lim_{(x,y) \to (a,b)} f(x,y) = f(a,b)" />
                <p className="leading-relaxed">
                    が成り立つことをいう。すなわち、ε-δ の言葉で書けば：
                </p>
                <BlockMath math="\begin{aligned} \forall \varepsilon > 0, \; \exists \delta > 0 \; \text{ s.t. } \; \sqrt{(x-a)^2 + (y-b)^2} < \delta & \\ \implies |f(x,y) - f(a,b)| &< \varepsilon \end{aligned}" />
                <p className="leading-relaxed mt-2">
                    （極限の定義とは異なり、<InlineMath math="(x, y) = (a, b)" /> を除外する必要はない。）
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多変数関数の極限は、1変数の「<InlineMath math="|x - a| < \delta" />」を「<InlineMath math="\sqrt{(x-a)^2+(y-b)^2} < \delta" /> （円板）」に拡張したものである。</li>
                    <li>多変数極限が存在するには、<strong>あらゆる経路</strong>で同じ極限値に収束する必要がある。</li>
                    <li>座標軸上や一部の直線での極限が一致しても、他の経路で異なる値をとれば極限は存在しない。</li>
                    <li>連続性は「極限値 = 関数値」であり、1変数と同じ構造だが、極限の条件がはるかに強い。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
