import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PhysicalApplications() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに、1変数の汎関数に対するハミルトン形式の基礎を学んできました。
                しかし、ハミルトン形式の真の威力は、複数の粒子が相互作用する複雑な系や、電磁場のような空間的に広がる「場」を扱う際に発揮されます。
                本節では、ハミルトン形式の物理学における広範な応用と、現代物理学へと繋がる高度な話題への展望について触れます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">解析力学との対応</h2>

            <p className="leading-relaxed">
                現実の物理系は、複数の自由度（座標）を持っています。ハミルトン形式は、これらの多自由度系を組織的に扱うのに適しています。
            </p>

            <ContentBox type="example" title="Example 5.3-1 (多自由度系の正準方程式)">
                <p>
                    <InlineMath math="n" /> 個の一般化座標 <InlineMath math="q_1, \ldots, q_n" /> を持つ系のラグランジアン <InlineMath math="L(t, q_i, \dot{q}_i)" /> を考える。
                    このとき、各成分に対する一般化運動量は次のように定義される：
                    <BlockMath math="p_k = \frac{\partial L}{\partial \dot{q}_k} \quad (k=1, \ldots, n)" />
                    これを用いて、多自由度系のハミルトニアンは次のようになる：
                    <BlockMath math="H(t, q, p) = \sum_{k=1}^n p_k \dot{q}_k - L" />
                    正準方程式は、各変数ペアに対して独立に成立する：
                    <BlockMath math="\begin{cases} \dot{q}_k = \frac{\partial H}{\partial p_k} \\ \dot{p}_k = -\frac{\partial H}{\partial q_k} \end{cases}" />
                    これにより、多粒子の運動、剛体の回転、電磁場中の荷電粒子の運動などが、統一的な枠組みで記述される。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ハミルトン・ヤコビ方程式への発展">
                <p>
                    正準方程式をさらに推し進めると、正準変換という座標変換の理論に至ります。
                    その究極の形が、ハミルトニアン <InlineMath math="H" /> と作用 <InlineMath math="S" /> に関する偏微分方程式
                    <BlockMath math="H \left( t, q, \frac{\partial S}{\partial q} \right) + \frac{\partial S}{\partial t} = 0" />
                    すなわち<b>ハミルトン・ヤコビ方程式</b>です。
                    この方程式は、幾何光学と波動光学を繋ぐ架け橋となり、さらに現代の量子力学（シュレーディンガーの方程式）における「半古典近似」を与える重要な基礎となっています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">場の変分原理への展望</h2>

            <p className="leading-relaxed">
                変分法の適用範囲は、離散的な粒子の集合（常微分方程式）から、連続的に広がる「場」（偏微分方程式）へと拡張されます。
            </p>

            <ContentBox type="remark" title="連続体・場への拡張">
                <p>
                    独立変数を時間 <InlineMath math="t" /> だけでなく、空間座標 <InlineMath math="x, y, z" /> にも拡張すると、汎関数の変化は「場の次元」で議論されます。
                    「場のラグランジアン密度」を変分することで得られるオイラー＝ラグランジュ方程式は、
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li><b>波動方程式</b>：弦や膜の振動、音波、光の伝播。</li>
                        <li><b>ラプラス方程式・ポアソン方程式</b>：重力場や静電場のポテンシャル。</li>
                        <li><b>アインシュタイン方程式</b>：一般相対性理論における時空の歪み。</li>
                    </ul>
                    など、現代物理学の基本法則をすべて包括する形となります。
                    さらに、次章（Chapter 6）で学ぶノーターの定理を組み合わせることで、時空の対称性からエネルギーや運動量の保存則が「必然的に」導かれるという、物理学の最も美しい体系が完成します。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、ラグランジュ形式からハミルトン形式へのパラダイムシフトを通じて、変分法が物理学の深淵な美しさと繋がっていることを見ました。
                次章では、この変分法の頂点の一つである、対称性と保存則を繋ぐ「ノーターの定理」について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ハミルトン形式は、複数の一般化座標を持つ多自由度系に対しても自然に拡張される。</li>
                    <li>ハミルトン・ヤコビ方程式は、幾何光学と量子力学を統合する視点を提供する。</li>
                    <li>変分原理を「場（連続体）」へと拡張することで、現代物理学のあらゆる基本方程式を統一的に理解できる。</li>
                    <li>ハミルトン形式（およびシンプレクティック幾何学）は、物理現象を「幾何学的な流れ」として捉える究極のツールである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
