import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TransversalityCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、変分を行う際に「<InlineMath math="x" /> の範囲」は固定されていました。
                しかし、現実の問題では、曲線の終点が「ある壁（曲線）にぶつかるまで」というように、端点の位置そのものが動く場合があります。
                本節では、このような可動端での停留条件である<b>トランザーバリティ条件</b>（横断条件）について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">端点移動の変分</h2>

            <p className="leading-relaxed">
                端点がある曲線 <InlineMath math="y = \phi(x)" /> 上に拘束されている状況を定式化します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (端点移動を伴う変分問題)">
                <p>
                    左端 <InlineMath math="(a, \alpha)" /> は固定されているが、右端 <InlineMath math="(b, u(b))" /> が与えられた曲線 <InlineMath math="y = \phi(x)" /> 上のどこにあっても良いとする。
                    このとき、積分範囲の右端 <InlineMath math="b" /> もまた変分によって変化する（<InlineMath math="b + \Delta b" />）ような変分問題を、<b>端点移動を伴う変分問題</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.2-1 (トランザーバリティ条件)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> の極値関数 <InlineMath math="u" /> の端点が曲線 <InlineMath math="y = \phi(x)" /> 上を動くとき、その端点 <InlineMath math="x = b" /> において、次の条件が成立する：
                    <BlockMath math="F + (\phi' - u') \frac{\partial F}{\partial u'} \bigg|_{x=b} = 0" />
                    これを<b>トランザーバリティ条件</b>（Transversality Condition、横断条件）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    全変分（Total variation）を考える。端点 <InlineMath math="b" /> が <InlineMath math="\Delta b" /> だけ動き、関数が <InlineMath math="\varepsilon \eta" /> だけ変化するとき、端点が曲線 <InlineMath math="\phi" /> 上にあるためには：
                    <BlockMath math="\Delta u \approx u'(b) \Delta b + \varepsilon \eta(b) \approx \phi'(b) \Delta b" />
                    すなわち、<InlineMath math="\varepsilon \eta(b) \approx (\phi'(b) - u'(b)) \Delta b" /> の関係がある。
                </p>
                <p>
                    汎関数の変化 <InlineMath math="\Delta J" /> を計算すると：
                    <BlockMath math="\Delta J = \int_a^b (F_u \eta + F_{u'} \eta') \, dx + F \Delta b \bigg|_{x=b}" />
                    部分積分を行い、境界項を整理すると：
                    <BlockMath math="\Delta J = \int_a^b (E-L) \eta \, dx + [F_{u'} \varepsilon \eta + F \Delta b ]_{x=b} = 0" />
                    ここで <InlineMath math="\varepsilon \eta" /> を先述の関係式で置換すると、
                    <BlockMath math="[ F + (\phi' - u') F_{u'} ] \Delta b = 0" />
                    となり、<InlineMath math="\Delta b" /> が任意であることから定理の条件が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">横断条件の幾何的意味</h2>

            <p className="leading-relaxed">
                この抽象的な式が、どのような幾何学的な意味を持つのか確認しましょう。
            </p>

            <ContentBox type="example" title="Example 3.2-1 (直交横断条件)">
                <p>
                    弧長汎関数 <InlineMath math="F = \sqrt{1 + u'^2}" /> を考える。
                    トランザーバリティ条件に代入して整理すると：
                    <BlockMath math="\begin{aligned} \sqrt{1 + u'^2} &+ (\phi' - u') \frac{u'}{\sqrt{1 + u'^2}} = 0 \\ &\implies \frac{1 + u'^2 + \phi' u' - u'^2}{\sqrt{1 + u'^2}} = 0 \end{aligned}" />
                    分子より、<InlineMath math="1 + \phi' u' = 0" /> となる。
                    これは、最短経路 <InlineMath math="u" /> がターゲットとなる曲線 <InlineMath math="\phi" /> と<b>直交</b>して交わることを意味している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="反射・屈折の変分原理">
                <p>
                    光が最短時間で進む経路を求める「フェルマーの原理」において、光が鏡で反射したりレンズで屈折したりする際も、このトランザーバリティ条件が本質的な役割を果たします。
                    界面で光が進むべき方向が、屈折率の変化と界面の形状に応じて「横断的」に決まる様子は、自然界が変分法を完璧に「計算」している証拠といえます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、境界条件が固定されていない場合の取り扱いについて学びました。
                次章では、極小であるための「2 次の条件」である第二変分と、その安定性について詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>トランザーバリティ条件は、端点が特定の曲線上を自由に動く場合に現れる境界条件である。</li>
                    <li>導出には、関数の変化だけでなく「積分区間の幅の変化」を考慮した全変分の計算が必要である。</li>
                    <li>最短経路問題では、トランザーバリティ条件は「ターゲット曲線への直交」という幾何的条件に一致する。</li>
                    <li>この条件は光学や物理、制御理論などの分野で、最適なスイッチングや境界での挙動を決定するために重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
