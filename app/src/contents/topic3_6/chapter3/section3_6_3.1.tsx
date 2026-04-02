import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NaturalBoundaryConditions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは、端点での関数の値が固定されている「固定端条件」を前提としてきました。
                しかし、物理的な問題では、端点が自由に動ける（自由端）場合や、特定の力のバランスが要求される場合があります。
                本節では、端点での値を指定しなくても、変分原理から「自然に」導き出される<b>自然境界条件</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自然境界条件の導出</h2>

            <p className="leading-relaxed">
                オイラー＝ラグランジュ方程式を導出する際、部分積分によって現れた「境界項」に注目します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (自由端条件)">
                <p>
                    端点（例えば <InlineMath math="x=a" /> や <InlineMath math="x=b" />）での関数の値 <InlineMath math="u" /> をあらかじめ指定しない条件を<b>自由端条件</b>（Free Boundary Condition）と呼ぶ。
                    この場合、許容関数クラス <InlineMath math="\mathcal{A}" /> において端点での制約がなくなり、変分方向 <InlineMath math="\eta" /> も端点で自由に値をとることができる。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.1-1 (自然境界条件)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> の極値関数において、端点 <InlineMath math="x=b" />（または <InlineMath math="x=a" />）が自由端であるならば、その点において次の条件が必ず成立する：
                    <BlockMath math="\frac{\partial F}{\partial u'} \bigg|_{x=b} = 0 \quad \left( \text{または } \frac{\partial F}{\partial u'} \bigg|_{x=a} = 0 \right)" />
                    これを<b>自然境界条件</b>（Natural Boundary Condition）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §2.1 でのオイラー＝ラグランジュ方程式の導出過程を思い出す。第一変分 <InlineMath math="\delta J = 0" /> は、部分積分により次のように書き換えられた：
                    <BlockMath math="\delta J = \int_a^b \left( F_u - \frac{d}{dx} F_{u'} \right) \eta \, dx + \left[ F_{u'} \eta \right]_a^b = 0" />
                    固定端条件では境界項 <InlineMath math="[F_{u'} \eta]_a^b" /> は <InlineMath math="\eta(a)=\eta(b)=0" /> により自動的に消えていた。
                </p>
                <p>
                    しかし、自由端の場合、<InlineMath math="\eta(b)" /> は任意の値をとることができる。
                    <InlineMath math="u" /> が領域内部で E-L 方程式を満たしているとき、上式の第 1 項は消える。残る境界項
                    <BlockMath math="F_{u'}(b) \eta(b) - F_{u'}(a) \eta(a) = 0" />
                    において、例えば <InlineMath math="b" /> が自由端であれば <InlineMath math="\eta(b)" /> が任意であるため、この等式が常に成り立つためには係数 <InlineMath math="F_{u'}(b) = 0" /> が必要となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (弾性梁の自由端条件)">
                <p>
                    §2.3 で扱った弾性梁の汎関数 <InlineMath math="J = \int \frac{EI}{2}(u'')^2 - qu \, dx" /> を考える。
                    この場合、高階微分の部分積分により現れる境界項は <InlineMath math="[ (EI u'') \eta' - (EI u'')' \eta ]" /> に比例する。
                    端点が完全に自由であるならば、<InlineMath math="\eta" /> と <InlineMath math="\eta'" /> の双方が任意であることから、次の 2 つの自然境界条件が導かれる：
                    <BlockMath math="EI u''|_{\text{端点}} = 0 \quad (\text{曲げモーメント} = 0)" />
                    <BlockMath math="EI u'''|_{\text{端点}} = 0 \quad (\text{せん断力} = 0)" />
                    これは「自由な端部には力もモーメントも働かない」という物理的事実を反映している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固定端と自由端の混合</h2>

            <p className="leading-relaxed">
                片方の端だけが固定されているような状況も、変分法で容易に記述できます。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (片持ち梁の境界条件)">
                <p>
                    左端 <InlineMath math="x=0" /> が壁に埋め込まれ、右端 <InlineMath math="x=L" /> が空中に浮いている「片持ち梁（Cantilever）」を考える。
                    この場合、左端は<b>固定端</b>（強制境界条件）であり、右端は<b>自由端</b>（自然境界条件）となる：
                    <ul className="list-disc list-inside space-y-1">
                        <li>左端 (<InlineMath math="x=0" />): <InlineMath math="u(0) = 0, \ u'(0) = 0" /></li>
                        <li>右端 (<InlineMath math="x=L" />): <InlineMath math="u''(L) = 0, \ u'''(L) = 0" /> （自然に導かれる）</li>
                    </ul>
                </p>
            </ContentBox>

            <ContentBox type="remark" title="自然境界条件の名前の意味">
                <p>
                    「自然（Natural）」と呼ばれるのは、設計者が明示的に押し付けた条件（強制境界条件）ではなく、
                    「全エネルギーを最小にする」という自然の摂理（変分原理）に従って「勝手に決まる」条件だからです。
                    有限要素法（FEM）などの数値計算においても、自然境界条件は弱形式の中に自動的に組み込まれるという、非常に便利な数学的性質を持っています。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、境界条件のさらなる拡張として、端点の位置そのものが曲線上を自由に動く「トランザーバリティ条件」について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>自由端条件とは、端点での関数の値を束縛しない境界条件である。</li>
                    <li>自然境界条件は、第一変分の境界項をゼロにする要請から自動的に導出される。</li>
                    <li>積分布分汎関数では、自由端において <InlineMath math="F_{u'} = 0" /> が成立する。</li>
                    <li>弾性梁の自由端では、物理的な「力とモーメントの消失」が自然境界条件として現れる。</li>
                    <li>変分原理を用いることで、複雑な境界条件を統一的に、かつ物理的直感と整合する形で扱うことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
