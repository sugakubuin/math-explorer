import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultipleConstraints() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では 1 つの制約条件がある場合を考えましたが、現実の高度な問題では、複数の制約条件が同時に課されることが多々あります。
                本節では、そのような複数の積分制約を同時に扱うための一般化された手法について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複数積分制約</h2>

            <p className="leading-relaxed">
                複数の積分型制約がある場合でも、ラグランジュ乗数を増やすことで同様の議論が可能です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (複数ラグランジュ乗数)">
                <p>
                    <InlineMath math="k" /> 個の積分制約
                    <BlockMath math="G_i[u] = \int_a^b g_i(x, u, u') \, dx = \ell_i \quad (i=1, \ldots, k)" />
                    の下で、汎関数 <InlineMath math="J[u]" /> を極値にする関数 <InlineMath math="u(x)" /> は、各制約に対応する <InlineMath math="k" /> 個の定数 <InlineMath math="\lambda_1, \ldots, \lambda_k" /> に対して、
                    補助汎関数
                    <BlockMath math="J^{\vec{\lambda}} = J - \sum_{i=1}^k \lambda_i G_i" />
                    に関するオイラー＝ラグランジュ方程式を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (k=2 の場合)">
                <p>
                    2 つの制約 <InlineMath math="G_1, G_2" /> がある場合、極値点 <InlineMath math="u^*" /> での微小変分 <InlineMath math="\delta J" /> は、制約を保つすべての変分 <InlineMath math="\delta G_1 = 0, \delta G_2 = 0" /> に対して 0 でなければならない。
                    これは線形代数における「直交補空間」の議論と同様に、ベクトル <InlineMath math="\delta J" /> が <InlineMath math="\delta G_1" /> と <InlineMath math="\delta G_2" /> で張られる平面に含まれることを意味する。
                    したがって、
                    <BlockMath math="\delta J = \lambda_1 \delta G_1 + \lambda_2 \delta G_2" />
                    となるような係数（乗数）が存在する。これをまとめれば、補助汎関数 <InlineMath math="F - \lambda_1 g_1 - \lambda_2 g_2" /> に対する E-L 方程式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点制約と障害物問題</h2>

            <p className="leading-relaxed">
                積分による「全体的な制約」だけでなく、特定の点での値を指定したり、領域全体で「ある範囲を超えてはならない」といった制約も重要です。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (内点での点制約と接続条件)">
                <p>
                    領域の途中にある点 <InlineMath math="x = c \in (a, b)" /> で、関数値を <InlineMath math="u(c) = \gamma" /> に固定する問題を考える。
                    このとき、ラグランジュ乗数 <InlineMath math="\lambda" /> は、その点における導関数の「跳び」として現れる。
                    具体的には、点 <InlineMath math="c" /> の前後でのオイラー＝ラグランジュ微分の差が、次のような接続条件を満たすことが導かれる：
                    <BlockMath math="\left[ F_{u'} \right]_{c^-}^{c^+} = \lambda" />
                    これは、一点にかかる「集中荷重」が傾きに不連続性をもたらす物理現象（折れ曲がった紐など）に対応している。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="変分不等式と障害物問題">
                <p>
                    解がある「障害物」を避けなければならない制約、すなわち <InlineMath math="u(x) \ge \psi(x)" /> が課される場合、等号が成り立たない（離れている）場所では通常の E-L 方程式が成立しますが、接触している場所では不等式による制約が支配的になります。
                    このとき、変分問題は等式ではなく<b>変分不等式</b>
                    <BlockMath math="\delta J[u; \eta - u] \ge 0 \quad (\forall \eta \in \mathcal{A})" />
                    の形に定式化されます。解がいつ障害物に触れ、いつ離れるかという「自由境界（Free Boundary）」の決定が、この問題の核心となります。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ここまで学んできたように、変分法は「自然界や幾何学に潜む最小（最大）化の原理」を記述する極めて強力な言語です。
                第一変分から始まった旅は、オイラー＝ラグランジュ方程式の導出、第二変分による安定性解析、ハミルトン形式による物理的記述、対称性と保存則（ノーターの定理）、そして本章の制約付き問題へと至りました。
                この変分法的思考は、現代の力学、電磁気学、量子力学、さらに人工知能における最適化理論の礎となっています。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複数の積分制約がある場合、各制約に対して独立したラグランジュ乗数を導入すればよい。</li>
                    <li>補助汎関数 <InlineMath math="J - \sum \lambda_i G_i" /> を構成し、その無制約の極値問題を解くことで元の解が得られる。</li>
                    <li>決定すべき乗数の数は制約の数に一致し、最終的に制約条件式によってすべて確定される。</li>
                    <li>変分法は、制約という「不自由さ」さえも、乗数という「自由度」に変えて美しく処理できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
