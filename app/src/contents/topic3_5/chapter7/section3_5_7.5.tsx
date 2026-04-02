import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeatMaximumPrinciple() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                熱方程式の解が持つ物理的な直感（熱は高いところから低いところへ流れ、内部に「異常な」高温が突如現れることはない）は、
                数学的には<b>最大値原理</b>という形で厳密に定式化されます。
                この原理は、解の一意性や安定性を証明するための強力な基盤となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">弱最大値原理と一意性</h2>

            <p className="leading-relaxed">
                有界な領域での熱方程式の解は、その最大値（および最小値）を「初期時刻」か「境界」のいずれかで取ります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (熱方程式の弱最大値原理)">
                <p>
                    有界領域 <InlineMath math="\Omega \times (0, T]" /> において熱方程式 <InlineMath math="u_t = k \Delta u" /> を満たす古典解 <InlineMath math="u" /> は、
                    その最大値を「放物的境界（初期時刻 <InlineMath math="t=0" /> または空間境界 <InlineMath math="\partial \Omega" />）」で取る。
                    すなわち、領域の内部で初期・境界値を超える温度が発生することはない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず <InlineMath math="u_t < k \Delta u" /> の場合を考える。
                    もし内部点 <InlineMath math="(\mathbf{x}_0, t_0)" /> で最大値を取るならば、極値の条件より <InlineMath math="u_t \ge 0" /> かつ <InlineMath math="\Delta u \le 0" /> となり、
                    不等式に矛盾する。
                </p>
                <p>
                    一般の <InlineMath math="u_t = k \Delta u" /> の場合は、補助関数 <InlineMath math="v_\epsilon = u + \epsilon e^{x_1}" /> を導入し、
                    <InlineMath math="v_\epsilon" /> が内部で最大値を取らないことを示してから <InlineMath math="\epsilon \to 0" /> の極限を取ることで証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 7.5-1 (初期境界値問題の解の一意性)">
                <p>
                    有界領域における熱方程式の初期境界値問題
                    <BlockMath math="\begin{cases} u_t = k \Delta u & (\mathbf{x} \in \Omega, \ t > 0) \\ u(\mathbf{x}, 0) = f(\mathbf{x}) \\ u(\mathbf{x}, t) = g(\mathbf{x}, t) & (\mathbf{x} \in \partial \Omega) \end{cases}" />
                    の解は、もし存在すれば一意である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2 つの解 <InlineMath math="u_1, u_2" /> の差 <InlineMath math="w = u_1 - u_2" /> を考える。
                    <InlineMath math="w" /> は同次の熱方程式を満たし、初期・境界条件はすべてゼロである。
                    最大値原理より、<InlineMath math="w" /> の最大値は境界または初期時刻の値（つまり 0）である。
                    同様に最小値原理（<InlineMath math="-w" /> に最大値原理を適用）より、最小値も 0 である。
                    よって領域全体で <InlineMath math="w \equiv 0" /> となり、<InlineMath math="u_1 = u_2" /> が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">初期データへの連続依存性</h2>

            <p className="leading-relaxed">
                最大値原理は、初期データや境界データの誤差の影響が、解へどのように波及するかを評価するのにも役立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.5-2 (連続依存性定理)">
                <p>
                    初期データまたは境界データに最大で <InlineMath math="\epsilon" /> の誤差が含まれているとき、
                    得られる解の誤差も領域全体で <InlineMath math="\epsilon" /> を超えることはない。
                    これは熱方程式が「安定」であることを示している。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    誤差を含んだ解の差を <InlineMath math="w" /> とすると、<InlineMath math="w" /> は熱方程式を満たす。
                    最大値原理より <InlineMath math="w" /> の最大値は境界付近の誤差の最大値以下であり、
                    最小値も境界付近の誤差の最小値以上である。
                    したがって、全領域において <InlineMath math="|w| \le \max |w_{\text{boundary}}|" /> が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="適切問題としての熱方程式の完成">
                <p>
                    第 6 章で学んだ適切性の 3 条件（存在・一意性・安定性）を熱方程式も満たしていることが確認された。
                    ただし、注意すべき点として、熱方程式の安定性は「未来に向かってのみ」成立する。
                    §7.1 で触れた逆問題（過去の推定）においては、最大値原理は成立せず、問題は極めて不安定（不良設定）となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、拡散現象を記述する熱方程式の基本的な性質から、熱核を用いた解の構成、境界値問題、そして一意性に至るまでを学びました。
                次章では、熱方程式の「平衡状態」（<InlineMath math="t \to \infty" /> または <InlineMath math="u_t = 0" />）を記述する、
                ラプラス方程式の世界へと踏み込みます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>最大値原理（弱最大値原理）は、熱方程式の解が放物的境界で最大値を取ることを保証する。</li>
                    <li>この原理から、初期・境界値問題の解の一意性が直接的に導かれる。</li>
                    <li>熱方程式は、データの微小な誤差が解の全域で制御されるという意味での安定性を持つ。</li>
                    <li>解の平滑化、一意性、安定性の性質により、熱方程式は物理的に極めて信頼性の高い数学モデルとなっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
