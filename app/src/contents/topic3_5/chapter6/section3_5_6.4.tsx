import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WaveUniqueness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                物理現象を微分方程式で記述する際、その解が一意に定まることは予測可能性の観点から不可欠です。
                前節で導いたエネルギー保存則を用いることで、波動方程式の初期境界値問題にただ一つの解しか存在しないことを厳密に証明できます。
                このような手法を<b>エネルギー法</b>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一意性定理</h2>

            <p className="leading-relaxed">
                同じ初期条件と境界条件を与えたとき、異なる 2 つの挙動が生じることはないことを示します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (波動方程式の解の一意性)">
                <p>
                    有界な領域 <InlineMath math="0 < x < L" /> における初期境界値問題：
                    <BlockMath math="\begin{cases} u_{tt} = c^2 u_{xx} & (0 < x < L, \ t > 0) \\ u(x, 0) = f(x), \ u_t(x, 0) = g(x) \\ u(0, t) = u(L, t) = 0 \end{cases}" />
                    の古典解は一意である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    2 つの解 <InlineMath math="u_1, u_2" /> が存在すると仮定し、その差 <InlineMath math="w = u_1 - u_2" /> を考える。
                    方程式の線形性より、<InlineMath math="w" /> は同次の波動方程式 <InlineMath math="w_{tt} = c^2 w_{xx}" /> を満たし、
                    かつ初期条件 <InlineMath math="w(x, 0) = 0, \ w_t(x, 0) = 0" /> および境界条件 <InlineMath math="w(0, t) = w(L, t) = 0" /> を満たす。
                </p>
                <p>
                    ここで <InlineMath math="w" /> の全エネルギー <InlineMath math="E(t)" /> を定義すると、§6.3 の議論より <InlineMath math="E(t) = E(0)" /> である。
                    初期条件より、
                    <BlockMath math="E(0) = \frac{1}{2} \int_0^L \left[ w_t(x, 0)^2 + c^2 w_x(x, 0)^2 \right] dx = 0" />
                    となる。したがって任意の <InlineMath math="t > 0" /> で <InlineMath math="E(t) = 0" /> であり、被積分関数が非負であることから、
                    <BlockMath math="w_t = 0, \ w_x = 0" />
                    が導かれる。これと <InlineMath math="w(x, 0) = 0" /> より、すべての領域で <InlineMath math="w \equiv 0" /> である。
                    ゆえに <InlineMath math="u_1 = u_2" /> となり、一意性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="エネルギー法の汎用性">
                <p>
                    解の差が満たす「エネルギー」の減衰や保存を見る「エネルギー法」は、波動方程式に限らず、
                    熱方程式の一意性（§7.5）やラプラス方程式の一意性（§8.2）の証明にも応用できる極めて汎用性の高い手法である。
                    物理的な保存則が数学的な一意性の保証に直接結びついている点は非常に興味深い。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連続依存性と適切問題</h2>

            <p className="leading-relaxed">
                解が存在し、一意であることに加え、初期データのわずかな変化が、解のわずかな変化しか引き起こさないという「安定性」も重要です。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-1 (初期データへの連続依存性)">
                <p>
                    初期データ <InlineMath math="(f, g)" /> に小さな誤差が含まれていても、解 <InlineMath math="u(x, t)" /> のエネルギーノルムにおける誤差はそれ以上に増大することはない。
                    これはエネルギー保存則 <InlineMath math="E(t) = E(0)" /> の直接的な帰結である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    誤差を含んだ解を <InlineMath math="\tilde{u}" />、その差を <InlineMath math="w = u - \tilde{u}" /> とする。
                    このとき誤差成分のエネルギー <InlineMath math="E_w(t)" /> は第 1 節と同様の証明で保存される：<InlineMath math="E_w(t) = E_w(0)" />。
                    <BlockMath math="E_w(0) = \frac{1}{2} \int_0^L \left[ (g - \tilde{g})^2 + c^2 (f' - \tilde{f}')^2 \right] dx" />
                    この積分値が小さければ、正の時刻 <InlineMath math="t" /> においても解の「揺らぎ」のエネルギーは小さいままであることが保証される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="適切問題の 3 条件">
                <p>
                    ハダマール（Hadamard）によれば、数学的な問題設定が「物理的に健全」であるためには、
                    (1) 解が存在し、(2) 解が一意であり、(3) データに連続的に依存する、という 3 条件を満たす必要がある。
                    本章で見たように、初期境界値問題としての波動方程式は、これらすべてを満たす<b>適切問題</b>（Well-posed problem）である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これまでは主に 1 次元の弦の振動を扱ってきましたが、最後の節では、我々が暮らす 3 次元空間における波の伝わり方の特徴について概観します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>エネルギー法を用いることで、波動方程式の解が一意に定まることが厳密に証明される。</li>
                    <li>解の存在・一意性・連続依存性の 3 条件が揃った問題を「適切問題」と呼ぶ。</li>
                    <li>初期データの小さな揺らぎが解の大規模な崩壊を招かない（安定である）ことは、物理シミュレーション等においても実用上極めて重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
