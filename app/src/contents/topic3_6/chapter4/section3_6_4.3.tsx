import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JacobiCondition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ルジャンドル条件は各点での「局所的な極小性」を保証しますが、停留関数が区間全体で安定である（大域的に最短・極小である）かを確認するには、系全体の変動を考慮する必要があります。
                本節では、停留関数を包む「関数族」の安定性の限界を示す<b>ヤコビ方程式</b>と<b>共役点</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤコビ方程式</h2>

            <p className="leading-relaxed">
                第二変分 <InlineMath math="\delta^2 J" /> を最小化しようとしたときに現れる、変分方向 <InlineMath math="\eta" /> に対する線形常微分方程式を考えます。
            </p>

            <ContentBox type="definition" title="Definition 4.3-1 (ヤコビ方程式)">
                <p>
                    停留関数 <InlineMath math="u^*" /> における第二変分
                    <BlockMath math="\delta^2 J = \int_a^b (F_{uu} \eta^2 + 2F_{uu'} \eta \eta' + F_{u'u'} (\eta')^2) \, dx" />
                    に対するオイラー＝ラグランジュ方程式
                    <BlockMath math="\frac{d}{dx} (F_{u'u'} \eta') - \left( F_{uu} - \frac{d}{dx} F_{uu'} \right) \eta = 0" />
                    を、<b>ヤコビ方程式</b>（Jacobi Equation）と呼ぶ。
                    これは <InlineMath math="\eta" /> に関する 2 階の同次線形常微分方程式であり、<InlineMath math="F_{u'u'} > 0" /> ならば特異点を持たない。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ヤコビ方程式の解は、直感的には「停留関数の非常に近くにある別の停留関数」との差（摂動）を表しています。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (弧長汎関数のヤコビ方程式)">
                <p>
                    直線 <InlineMath math="u^* = mx + n" /> において、弧長汎関数の偏導関数の値は
                    <BlockMath math="F_{uu} = 0, \quad F_{uu'} = 0, \quad F_{u'u'} = (1+m^2)^{-3/2}" />
                    であった。ヤコビ方程式に代入すると、
                    <BlockMath math="\frac{d}{dx} \left( (1+m^2)^{-3/2} \eta' \right) = 0 \implies \eta'' = 0" />
                    となる。この解は直線 <InlineMath math="\eta(x) = Ax + B" /> であり、ヤコビ方程式の解が極めて単純な形状をとることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共役点とヤコビの条件</h2>

            <p className="leading-relaxed">
                停留関数が最短・極小でなくなる瞬間は、ヤコビ方程式の解が「再び 0 に戻る」点として特徴づけられます。
            </p>

            <ContentBox type="definition" title="Definition 4.3-2 (共役点)">
                <p>
                    ヤコビ方程式の非自明な解（<InlineMath math="\eta \not\equiv 0" />）が <InlineMath math="\eta(a) = 0" /> を満たすとする。
                    この解が別の点 <InlineMath math="\bar{a} \in (a, b]" /> において再び <InlineMath math="\eta(\bar{a}) = 0" /> となるとき、点 <InlineMath math="\bar{a}" /> を点 <InlineMath math="a" /> に関する停留関数 <InlineMath math="u^*" /> に沿った<b>共役点</b>（Conjugate Point）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 4.3-1 (ヤコビの条件)">
                <p>
                    停留関数 <InlineMath math="u^*" /> が強極小を与えるための必要条件は、開区間 <InlineMath math="(a, b)" /> 内に点 <InlineMath math="a" /> に共役な点が存在しないことである。
                    もし区間内部に共役点が存在すれば、その停留関数はもはや積分の極小を与えない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明のスケッチを述べる。
                    もし共役点 <InlineMath math="\bar{a} \in (a, b)" /> が存在すれば、区間 <InlineMath math="[a, \bar{a}]" /> 上でヤコビ方程式を満たし <InlineMath math="\eta(a) = \eta(\bar{a}) = 0" /> となる非自明な解 <InlineMath math="\eta" /> を取ることができる。
                    この <InlineMath math="\eta" /> を区間 <InlineMath math="[\bar{a}, b]" /> 上で 0 と延長した変分を考えると、部分積分を用いることで、この変分に沿った第二変分 <InlineMath math="\delta^2 J" /> が 0 になることが示される。
                </p>
                <p>
                    さらに、この「角」を持つ変分を適切に滑らかに摂動させることで、<InlineMath math="\delta^2 J < 0" /> となる変分方向を構成することが可能となる。
                    これは極小性の仮定に矛盾するため、区間内に共役点が存在してはならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                共役点の直感的な理解として、球面上での測地線（大円）を考えるのが最も分かりやすいでしょう。
            </p>

            <ContentBox type="example" title="Example 4.3-2 (球面測地線の共役点)">
                <p>
                    半径 <InlineMath math="R" /> の球面上において、北極 <InlineMath math="N" /> から出発する測地線（経線）を考える。
                    この測地線はすべて南極 <InlineMath math="S" /> で再び交わる。
                    したがって、南極 <InlineMath math="S" /> は北極 <InlineMath math="N" /> の共役点である。
                    北極から南極までの距離は <InlineMath math="\pi R" /> であり、これを超える長さの大円弧は、もはや 2 点間の最短距離を与えない。
                    実際、南極を越えた後は反対側を通る「近道」が存在するため、元の経路は安定性を失う。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="共役点と焦点">
                <p>
                    幾何光学において、一点から出た光線が再び一点に集まる点を「焦点」と呼びますが、変分法における共役点はまさにこの焦点の概念を抽象化したものです。
                    「焦点より遠くまで進むと、それ以外のルート（最短光路）に主役が奪われる」という物理的な直感は、ヤコビの条件と完全に一致しています。
                    この理論は、現代のリーマン幾何学におけるカット・ローカス（切断跡）の研究へと発展していきます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、変分問題の解が真に「安定」であるかを判定するための 2 階の条件（第二変分、ルジャンドル条件、ヤコビ条件）を体系的に学びました。
                次章では、これまでの「ラグランジュ形式」から視点を変え、より物理的な体系化に適した「ハミルトン形式」について学びます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヤコビ方程式は、第二変分から導かれる変分方向 <InlineMath math="\eta" /> に関する 2 階線形常微分方程式である。</li>
                    <li>共役点は、ヤコビ方程式の解が再び 0 となる点であり、停留関数の安定性の限界を意味する。</li>
                    <li>ヤコビの条件は、区間内に共役点が存在しないことを要求し、これが最短性・極小性のための大域的な必要条件となる。</li>
                    <li>球面上での測地線の例が示すように、共役点を超えると経路は最短ではなくなり、別の安定な経路に「乗り換え」が行われる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
