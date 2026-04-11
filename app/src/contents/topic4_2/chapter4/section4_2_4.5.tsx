import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ApplicationsOfConformalMappings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                リーマンの写像定理は「写像の存在」を保証してくれますが、その具体的な形まで教えてくれるわけではありません。しかし実際には、初等的な関数の組み合わせによって、様々な基本的な領域から半平面や単位円板への等角写像を具体的に構成することができます。本節ではその実例と、ラプラス方程式を解くという物理・工学への応用について概観します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本的な領域の等角写像</h2>

            <p>
                基本的な関数の「扇形を広げる」「円弧を直線に伸ばす」といった性質を順次繋ぎ合わせる（関数の合成）ことで、目的の領域を単位円板（あるいは上半平面）へと変形していきます。
            </p>

            <ContentBox type="example" title="Example 4.5-1 (扇形領域からの写像)">
                <p>
                    原点を頂点とする、中心角 <InlineMath math="\pi/n" /> の扇形領域 <InlineMath math="D = \{z \mid 0 < \arg z < \pi/n\}" /> を考えます。<InlineMath math="n" /> は実数とします。
                </p>
                <p>
                    この領域に対して関数の <InlineMath math="n" /> 乗、すなわち <InlineMath math="w = z^n" /> を適用します。極座標 <InlineMath math="z = r e^{i\theta}" /> で考えれば、
                </p>
                <BlockMath math="w = r^n e^{i n\theta}" />
                <p>
                    となります。偏角 <InlineMath math="\theta" /> が <InlineMath math="0" /> から <InlineMath math="\pi/n" /> まで動く間、写像後の偏角 <InlineMath math="n\theta" /> は <InlineMath math="0" /> から <InlineMath math="\pi" /> まで動きます。
                </p>
                <p>
                    したがって、この単純なベキ乗関数によって、細い扇形はガバッと <InlineMath math="180^\circ" /> に開かれ、上半平面 <InlineMath math="\mathbb{H} = \{w \mid \text{Im}(w) > 0\}" /> へと等角に写されます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.5-2 (半円板からの写像)">
                <p>
                    上半分の単位半円板 <InlineMath math="D = \{z \mid |z| < 1, \text{Im}(z) > 0\}" /> を単位円板 <InlineMath math="\mathbb{D}" /> へ写す手順を考えましょう。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>まず、角を無限の彼方に追いやるメビウス変換 <InlineMath math="w_1 = \frac{1+z}{1-z}" /> を適用します。これにより、<InlineMath math="-1" /> と <InlineMath math="1" /> の間にある半円板は、第1象限（<InlineMath math="x>0, y>0" />）に展開されます。</li>
                    <li>次に、第1象限の角 <InlineMath math="90^\circ" />（<InlineMath math="\pi/2" />）を <InlineMath math="180^\circ" />（<InlineMath math="\pi" />）に広げるため、Example 4.5-1 と同様に二乗 <InlineMath math="w_2 = w_1^2" /> を適用します。これで上半平面に出ます。</li>
                    <li>最後に、上半平面から単位円板へ移す標準的なメビウス変換 <InlineMath math="w = \frac{w_2 - i}{w_2 + i}" /> を使います。</li>
                </ol>
                <p>
                    これらをすべて合成したものが、半円板から円板への解析的な等角写像となります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="多角形の写像（シュワルツ-クリストッフェル変換）">
                <p>
                    「三角形や四角形などの多角形の内部」を上半平面へ移す、という極めて実用的な問題に対しては、<b>シュワルツ-クリストッフェル変換 (Schwarz-Christoffel mapping)</b> という強力な積分公式が知られています。
                </p>
                <p>
                    多角形の頂点の内角を <InlineMath math="\alpha_k \pi" /> としたとき、等角写像の微分が <InlineMath math="\prod (z - x_k)^{\alpha_k - 1}" /> という形で表されることを利用して、積分形
                    <BlockMath math="f(z) = A \int_0^z \frac{d\zeta}{(\zeta - x_1)^{1-\alpha_1} \dots (\zeta - x_n)^{1-\alpha_n}} + B" />
                    によって多角形を半平面に切り開く関数が構成できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用への接続</h2>

            <p>
                なぜ「領域の形を円板や半平面に整える」ことにこれほどこだわるのでしょうか？それは、物理現象を支配する微分方程式が「等角写像によって形が変わらない」という奇跡的な性質を持っているからです。
            </p>

            <ContentBox type="remark" title="ラプラス方程式と調和関数">
                <p>
                    静電場の電位、定常状態の熱伝導の温度分布、理想的な流体の速度ポテンシャルなどはすべて、2次元平面上で次の「ラプラス方程式」を満たす実数値関数 <InlineMath math="u(x,y)" />（調和関数）として記述されます。
                </p>
                <BlockMath math="\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0" />
                <p>
                    驚くべきことに、関数 <InlineMath math="f" /> が等角写像であるとき、新しい領域上の調和関数 <InlineMath math="U" /> に <InlineMath math="f" /> を合成した <InlineMath math="u = U \circ f" /> も、元の領域で必ずラプラス方程式を満たす調和関数になります（等角不変性）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.5-4 (ディリクレ問題)">
                <p>
                    領域の境界で指定された温度分布から、内部の温度分布を求める問題を「ディリクレ問題」と言います。
                </p>
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> の場合、境界（円周）上の条件から中心部の 값을決定する「ポアソン積分公式」という具体的な解法が確立しています。
                </p>
                <p>
                    したがって、どんなに複雑な形をした金属板 <InlineMath math="D" /> 上の熱伝導問題を解きたくても、リーマンの写像定理に従って <InlineMath math="D" /> から単位円板 <InlineMath math="\mathbb{D}" /> への等角写像 <InlineMath math="f" /> を見つけさえすればよいのです。方程式を直接解く代わりに、問題を「丸い世界」に持ち込み、そこで公式を使って解を出し、写像 <InlineMath math="f" /> で元の世界に逆算して引き戻す、というスマートな手順で複雑な物理問題が解決されます。
                </p>
                <p>
                    これが、偏微分方程式論（5-2）などにおいても複素解析の等角写像が必須のツールとして活用される最大の理由です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>扇形、半円板などの基本的な領域は、ベキ乗やメビウス変換を組み合わせることで単位円板や上半平面へ等角に写すことができる。</li>
                    <li>多角形領域への等角写像はシュワルツ-クリストッフェルの積分公式により構成される。</li>
                    <li>等角写像は「ラプラス方程式」の解（調和関数）を保存するため、複雑な境界を持つ熱伝導や電磁気学の問題を解くための強力な理論的基礎を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
