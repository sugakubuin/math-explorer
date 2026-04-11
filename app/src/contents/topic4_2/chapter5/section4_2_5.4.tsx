import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HyperbolicDistanceAndGeodesics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節まで「双曲距離」という言葉を定理の性質として便利に使ってきましたが、具体的にどのような式で計算され、空間内ではどのような経路（最短経路＝測地線）を通るのでしょうか。本節では、単位円板モデルと上半平面モデルの中の「まっすぐな道」の正体を突き止めます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双曲距離の公式</h2>

            <p>
                任意の2点間の双曲距離は、積分や解析的思考を省略して、代数的に一発で計算できる美しい公式が存在します。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 (単位円板の双曲距離)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> 上の2点 <InlineMath math="z, w" /> 間のポアンカレ計量に基づく双曲距離 <InlineMath math="d_{\mathbb{D}}(z, w)" /> は、次の公式で与えられる。
                </p>
                <BlockMath math="d_{\mathbb{D}}(z, w) = \text{arctanh} \left| \frac{z - w}{1 - \bar{w}z} \right|" />
                <p>
                    （※ <InlineMath math="\text{arctanh}(x) = \frac{1}{2} \log \frac{1+x}{1-x}" /> であるため、対数関数を用いて直接計算することもできる。）
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 5.4-1">
                <p>
                    この式で定義される <InlineMath math="d_{\mathbb{D}}(z, w)" /> は、距離空間の公理（非退化性、対称性、三角不等式）をすべて満たし、本格的な距離関数となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (三角不等式の概略)">
                <p>
                    非退化性（<InlineMath math="d=0 \iff z=w" />）と対称性（<InlineMath math="d(z,w) = d(w,z)" />）は、絶対値の性質や式の形から明白である。
                </p>
                <p>
                    三角不等式 <InlineMath math="d(z, w) \leq d(z, u) + d(u, w)" /> の証明が問題となる。
                    双曲距離は構成上、メビウス自己同型 <InlineMath math="\varphi" /> によって不変（<InlineMath math="d(z,w) = d(\varphi(z), \varphi(w))" />）に作られているため、点 <InlineMath math="u" /> を原点 <InlineMath math="0" /> に送り込むような同型を施して一般性を失わない。（要するに <InlineMath math="d(z_0, w_0) \leq d(z_0, 0) + d(0, w_0)" /> を示せばよい。）
                </p>
                <p>
                    原点 <InlineMath math="0" /> を経由する場合の距離の和は、原点からの放射状の線分のユークリッド的な長さを双曲的長さに換算したものの和にすぎず、原点からそれらの点へ向かう角度が直線上に並んでいない限り、寄り道した双曲的長さは直接結んだ長さよりも確実に長くなる。これをシュワルツ-ピック補題の微分的評価で縛ることで証明できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.4-1 (原点からの距離の大爆発)">
                <p>
                    原点 <InlineMath math="0" /> と、正の実軸上の点 <InlineMath math="r" /> (<InlineMath math="0 \leq r < 1" />) の間の距離を公式で計算し、円の縁に向かうにつれてどうなるかシミュレーションします。
                </p>
                <BlockMath math="d_{\mathbb{D}}(0, r) = \text{arctanh} \left| \frac{0 - r}{1 - 0} \right| = \text{arctanh}(r) = \frac{1}{2} \log \frac{1+r}{1-r}" />
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="r = 0.5" /> （円の半分まで来た）: <InlineMath math="\frac{1}{2}\log\left(\frac{1.5}{0.5}\right) = \frac{1}{2}\log 3 \approx 0.549" /></li>
                    <li><InlineMath math="r = 0.9" /> （縁に近い）: <InlineMath math="\frac{1}{2}\log\left(\frac{1.9}{0.1}\right) = \frac{1}{2}\log 19 \approx 1.472" /></li>
                    <li><InlineMath math="r = 0.99" /> （縁の極小近傍）: <InlineMath math="\frac{1}{2}\log\left(\frac{1.99}{0.01}\right) = \frac{1}{2}\log 199 \approx 2.646" /></li>
                    <li><InlineMath math="r = 0.9999" /> （さらに縁へ）: <InlineMath math="\approx 4.95" /></li>
                </ul>
                <p>
                    原点付近ではユークリッド距離に近い値（<InlineMath math="r" /> とほぼ同じ額）でしたが、縁に近づくにつれて対数関数的に爆発し、決して境界（<InlineMath math="r=1" />）には到達できないことが見事に表れています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測地線の計算</h2>

            <p>
                日常の感覚では「最短経路=まっすぐな線分」ですが、歪んだ計量においては「最短経路（測地線、geodesic）」は一般に曲がって見えます。円板や上半平面におけるその軌跡を決定しましょう。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-2 (単位円板の測地線)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> 内の任意の2点を結ぶ測地線（双曲距離を実現する最短経路）は、
                    <b>「境界の円周と常に直角（<InlineMath math="90^\circ" />）に交わるような円弧」または「原点を通る直径」</b> のいずれかに完全に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    中心とある点を結ぶ最短経路は、明らかに対称性から「直径（直線）」となる（寄り道すればするほど距離公式の積分が長くなる）。
                </p>
                <p>
                    一般の2点間の最短経路は、メビウス変換で一方の点を原点に持ってきても「最短」という性質が失われない（等長変換であるため）。
                </p>
                <p>
                    原点を通る直径に対してメビウス変換・逆変換を適用したとき、像はどうなるか？ §4.2 で「メビウス変換は円と直線を円と直線に保つ」かつ「等角（交わる角度を保つ）」ことを学んだ。直径は境界の円周と直角に交わっているため、逆変換された像（元の空間での測地線）もまた、境界と直角に交わる円弧（あるいは直径）でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                模型を「上半平面モデル」に変えると、測地線はもっと直感的に描きやすくなります。
            </p>

            <ContentBox type="example" title="Example 5.4-2 (上半平面モデルでの測地線)">
                <p>
                    上半平面 <InlineMath math="\mathbb{H}" /> での境界は「実数軸（と無限遠点）」です。これと直交する円弧とは何でしょうか。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>実軸と交わって <InlineMath math="90^\circ" /> をなす半円（中心が必ず実軸上にある半円）。</li>
                    <li>実軸から垂直にまっすぐ上に伸びる半直線。</li>
                </ol>
                <p>
                    上半平面の中の小人は、ある点から別の点へ行くとき、横に等高線を進むのではなく、一度円弧に乗ってヒエラルキーの高い「より上空（虚部が大きく距離が短いゾーン）」へ迂回してから目的地の点へ降下する、というパラボラ的な軌跡を辿るのが最も「距離が短い」と判断するのです。
                </p>
                <p>
                    例えば、虚軸上の2点 <InlineMath math="z_1 = i" /> と <InlineMath math="z_2 = 2i" /> を結ぶ測地線は、そのまま虚軸の垂直な半直線そのものです。その長さは積分 <InlineMath math="\int_1^2 \frac{dy}{y} = \log 2" /> とシンプルに計算されます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="微分幾何学への扉">
                <p>
                    双曲平面の定曲率は <InlineMath math="-1" /> となります。この空間では、有名な「平行線公理」が破綻し、ある直線と共通点を持たない平行線が無数に引けることが知られています。これは、微分幾何学II（4-6）で扱う多様体の計量テンソルやリーマン曲率テンソルの理論を、2次元の極めて美しい特殊例として先取りしたものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>双曲距離は <InlineMath math="d_{\mathbb{D}}(z, w) = \text{arctanh} |(z - w)/(1 - \bar{w}z)|" /> という明快な公式で計算できる。</li>
                    <li>境界に向かって距離が対数関数的に発散していくため、空間は無限の広がりを持つ距離空間となる。</li>
                    <li>最短経路である測地線は「境界と直交する円弧」または「直径（直線）」となる（上半平面なら中心が実軸上にある半円か垂直な半直線）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
