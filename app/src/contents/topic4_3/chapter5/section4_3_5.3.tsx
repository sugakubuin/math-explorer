import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AnalyticDescriptionOfGroupLaw() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節 §5.2 では、ワイエルシュトラスの <InlineMath math="\wp" /> 関数を用いた写像 <InlineMath math="\Phi : \mathbb{C}/\Lambda \to E" /> が、複素トーラスから楕円曲線への同型を与えることを見ました。本節では、楕円曲線の幾何学的な「群法則」が、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> の自然な加法群構造と完全に一致することを示します。また、この事実から <InlineMath math="\wp" /> 関数に関する美しい加法公式が導かれることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3点共線条件による群法則</h2>

            <p>
                まず、ワイエルシュトラス形式の楕円曲線 <InlineMath math="E : y^2 = 4x^3 - g_2 x - g_3" /> 上の点に対する加法を幾何学的に定義します。代数幾何学において、3次曲線上の加法は「一直線上にある3点の和がゼロになる」という規則に基づいています。
            </p>

            <ContentBox type="definition" title="Definition 5.3-1 (楕円曲線上の加法)">
                <p>
                    楕円曲線 <InlineMath math="E" /> 上の3点 <InlineMath math="P, Q, R" /> について、関係式
                </p>
                <BlockMath math="P + Q + R = O" />
                <p>
                    が成り立つとは、<InlineMath math="P, Q, R" /> が <InlineMath math="\mathbb{CP}^2" /> において一直線上にある（ある直線と <InlineMath math="E" /> の交点として表される）ことと定義する。ここで <InlineMath math="O" /> は無限遠点であり、群の単位元として働く。
                </p>
            </ContentBox>

            <p>
                この定義は非常に幾何学的ですが、写像 <InlineMath math="\Phi" /> を通じて見ると、実は <InlineMath math="\mathbb{C}/\Lambda" /> での通常の複素数の足し算に他ならないことが証明できます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-1">
                <p>
                    パラメトライゼーション <InlineMath math="\Phi(z) = (\wp(z), \wp'(z))" /> のもとで、<InlineMath math="\mathbb{C}/\Lambda" /> の加法と楕円曲線の群法則は一致する。すなわち、<InlineMath math="\Phi(z_1) + \Phi(z_2) = \Phi(z_1 + z_2)" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    直線の方程式を <InlineMath math="y = ax + b" /> とする。この直線と楕円曲線 <InlineMath math="E" /> の交点を <InlineMath math="P_1, P_2, P_3" /> とし、それぞれ <InlineMath math="P_i = \Phi(z_i)" />（<InlineMath math="i=1,2,3" />）に対応するとする。
                    交点の <InlineMath math="x" /> 座標は方程式
                </p>
                <BlockMath math="(ax + b)^2 = 4x^3 - g_2 x - g_3" />
                <p>
                    の根である。一方、<InlineMath math="z" /> 平面上で考えると、関数
                </p>
                <BlockMath math="f(z) = \wp'(z) - (a\wp(z) + b)" />
                <p>
                    の零点が <InlineMath math="z_1, z_2, z_3" /> となる。関数 <InlineMath math="f(z)" /> は基本周期平行四辺形内に、<InlineMath math="z=0" /> においてのみ極を持ち、その位数は3である（<InlineMath math="\wp'" /> は3位の極、<InlineMath math="\wp" /> は2位の極を持つため）。
                    楕円関数に関する §2.4 Theorem 2.4-4（零点と極の位置の制約）によれば、基本周期平行四辺形内の零点の和と極の和は <InlineMath math="\Lambda" /> を法として合同である。
                    <InlineMath math="f(z)" /> の極は <InlineMath math="z=0" /> に3つあるため、その和は <InlineMath math="0" /> である。したがって、零点の和についても
                </p>
                <BlockMath math="z_1 + z_2 + z_3 \equiv 0 \pmod{\Lambda}" />
                <p>
                    が成り立つ。これはまさに楕円曲線上での <InlineMath math="P_1 + P_2 + P_3 = O" /> に対応している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理により、複素トーラス上の解析的な構造と、代数曲線上の幾何学的な構造が見事に結びつきました。具体的に2点の和を求める例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 5.3-1">
                <p>
                    2点 <InlineMath math="P = (\wp(a), \wp'(a))" /> と <InlineMath math="Q = (\wp(b), \wp'(b))" /> の和 <InlineMath math="P + Q" /> を求める。
                    <InlineMath math="P" /> と <InlineMath math="Q" /> を結ぶ直線を引き、楕円曲線との第3の交点を <InlineMath math="R = (\wp(c), \wp'(c))" /> とする。
                    共線条件から <InlineMath math="P + Q + R = O" /> であり、複素数としては <InlineMath math="a + b + c \equiv 0 \pmod{\Lambda}" />、すなわち <InlineMath math="c \equiv -(a+b)" /> である。
                    したがって、第3の交点 <InlineMath math="R" /> の座標は <InlineMath math="(\wp(-(a+b)), \wp'(-(a+b))) = (\wp(a+b), -\wp'(a+b))" /> となる。
                    ここで <InlineMath math="P+Q = -R" /> であり、楕円曲線上での逆元は <InlineMath math="y" /> 座標の符号反転（<InlineMath math="x" /> 軸に関する折り返し）であるから、<InlineMath math="P+Q = (\wp(a+b), \wp'(a+b))" /> を得る。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">℘ 関数の加法公式</h2>

            <p>
                上で見たように、楕円曲線上の加法は直線と3次曲線の交点を求める代数的な操作で計算できます。これを <InlineMath math="x" /> 座標、すなわち <InlineMath math="\wp" /> 関数について書き下すと、次のような美しい加法公式が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.3-2 (\wp 関数の加法公式)">
                <p>
                    独立な変数 <InlineMath math="z, w \notin \Lambda" />（ただし <InlineMath math="z \pm w \notin \Lambda" />）に対して、次が成り立つ：
                </p>
                <BlockMath math="\wp(z+w) = -\wp(z) - \wp(w) + \frac{1}{4}\left(\frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)}\right)^2"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="P = (\wp(z), \wp'(z))" />, <InlineMath math="Q = (\wp(w), \wp'(w))" /> を通る直線の傾きを <InlineMath math="\lambda" /> とすると、
                </p>
                <BlockMath math="\lambda = \frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)}" />
                <p>
                    である。直線の方程式は <InlineMath math="y = \lambda x + \nu" /> の形をしている。この直線を楕円曲線の方程式 <InlineMath math="y^2 = 4x^3 - g_2 x - g_3" /> に代入すると、
                </p>
                <BlockMath math="(\lambda x + \nu)^2 = 4x^3 - g_2 x - g_3" />
                <p>
                    すなわち
                </p>
                <BlockMath math="4x^3 - \lambda^2 x^2 + \cdots = 0" />
                <p>
                    という <InlineMath math="x" /> に関する3次方程式を得る。この方程式の3つの根は、交点の <InlineMath math="x" /> 座標である <InlineMath math="\wp(z), \wp(w), \wp(-(z+w))" /> である。根と係数の関係（2次の項の係数）から、
                </p>
                <BlockMath math="\wp(z) + \wp(w) + \wp(z+w) = \frac{\lambda^2}{4}" />
                <p>
                    が成り立つ（<InlineMath math="\wp(-(z+w)) = \wp(z+w)" /> に注意）。これを変形して、定理の公式を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                極限操作を考えることで、同じ点を2回足す「倍加」の公式も導くことができます。
            </p>

            <ContentBox type="example" title="Example 5.3-2 (倍加公式)">
                <p>
                    加法公式において <InlineMath math="w \to z" /> の極限をとる。ロピタルの定理により、
                </p>
                <BlockMath math="\lim_{w \to z} \frac{\wp'(z)-\wp'(w)}{\wp(z)-\wp(w)} = \frac{\wp''(z)}{\wp'(z)}" />
                <p>
                    となる。したがって倍加公式は、
                </p>
                <BlockMath math="\wp(2z) = -2\wp(z) + \frac{1}{4}\left(\frac{\wp''(z)}{\wp'(z)}\right)^2" />
                <p>
                    と表される。ここで <InlineMath math="(\wp')^2 = 4\wp^3 - g_2\wp - g_3" /> を微分すると <InlineMath math="2\wp'\wp'' = 12\wp^2\wp' - g_2\wp'" /> となり、<InlineMath math="\wp'' = 6\wp^2 - g_2/2" /> を得る。これを代入すれば、<InlineMath math="\wp(2z)" /> は <InlineMath math="\wp(z)" /> のみの有理関数として表される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="アーベルの加法定理との関係">
                <p>
                    ここで導かれた加法公式は、第1章 §1.5 で紹介した「アーベルの加法定理」の <InlineMath math="\wp" /> 関数を通じた精密な実現となっています。アーベルの加法定理は楕円積分の和に関する代数的な関係を主張するものでしたが、それは本質的に楕円曲線上の群法則の可換性を反映していたのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円曲線の3点共線条件による幾何学的な加法は、複素トーラス <InlineMath math="\mathbb{C}/\Lambda" /> での自然な足し算と完全に一致する。</li>
                    <li>この対応は、関数 <InlineMath math="f(z) = \wp'(z) - (a\wp(z) + b)" /> の零点と極の性質から証明される。</li>
                    <li>直線の交点を代数的に求めることで、<InlineMath math="\wp(z+w)" /> を <InlineMath math="\wp(z), \wp(w), \wp'(z), \wp'(w)" /> の有理式で表す <InlineMath math="\wp" /> 関数の加法公式が得られる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
