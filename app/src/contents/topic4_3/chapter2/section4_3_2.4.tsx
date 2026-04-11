import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LiouvilleTheoremsSeries() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入された楕円関数（二重周期を持つ有理型関数）は、複素解析的な制約から極めて強い性質を持ちます。本節では、楕円関数が満たすべき基本的かつ重要な性質をまとめた「リウヴィルの定理系列」を解説します。これらの定理は、楕円関数の極の個数、留数の和、および零点や極の位置に関する厳密な制約を与えるものであり、以降の理論構築の土台となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リウヴィルの基本定理</h2>

            <p>
                まず、極を全く持たない（すなわち整関数である）楕円関数について考えます。複素解析学におけるリューヴィルの定理（有界な整関数は定数に限る）が、二重周期性と結びつくことで強力な結果をもたらします。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (リウヴィルの第一定理)">
                <p>
                    整関数（極を持たない正則関数）である楕円関数は、定数関数に限る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を整関数である楕円関数とする。基本周期平行四辺形を <InlineMath math="\Pi" /> とし、その閉包 <InlineMath math="\overline{\Pi}" /> を考える。<InlineMath math="\overline{\Pi}" /> は有界閉集合（コンパクト）であるため、連続関数 <InlineMath math="|f(z)|" /> は <InlineMath math="\overline{\Pi}" /> 上で最大値を持つ。したがって、<InlineMath math="\overline{\Pi}" /> 上で <InlineMath math="f" /> は有界である。
                </p>
                <p>
                    任意の <InlineMath math="z \in \mathbb{C}" /> は、ある <InlineMath math="\omega \in \Lambda" /> を用いて <InlineMath math="z = z_0 + \omega" />（ただし <InlineMath math="z_0 \in \overline{\Pi}" />）と表すことができる。<InlineMath math="f" /> の二重周期性により <InlineMath math="f(z) = f(z_0)" /> となるため、<InlineMath math="f" /> は複素平面全体で有界な整関数となる。
                </p>
                <p>
                    複素解析学におけるリューヴィルの定理（3-2）により、複素平面全体で有界な整関数は定数関数でなければならない。ゆえに、<InlineMath math="f" /> は定数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理から、定数でない楕円関数は基本周期平行四辺形内に必ず極を持たなければならないことがわかります。さらに、極の持ち方にも制約があります。
            </p>

            <ContentBox type="example" title="Example 2.4-1">
                <p>
                    楕円関数の位数（基本周期平行四辺形内の極の位数の合計）について考える。
                </p>
                <p>
                    Theorem 2.4-1 より、定数関数の位数は <InlineMath math="0" /> である。もし位数が <InlineMath math="1" /> の楕円関数 <InlineMath math="f" /> が存在したとすると、<InlineMath math="\Pi" /> 内に1位の極をただ1つ持つことになる。しかし、後述する Theorem 2.4-2（留数の和が <InlineMath math="0" />）により、その1つの極の留数は <InlineMath math="0" /> とならざるを得ず、極が存在しないことと矛盾する。
                </p>
                <p>
                    したがって、位数が <InlineMath math="1" /> の楕円関数は存在せず、定数でない楕円関数の位数は <InlineMath math="2" /> 以上であることが確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極と零点に関する制約</h2>

            <p>
                定数でない楕円関数は基本周期平行四辺形内に極と零点を持ちますが、それらの個数や配置は任意ではなく、格子 <InlineMath math="\Lambda" /> に依存する厳密な関係式を満たします。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-2 (留数の和が零)">
                <p>
                    楕円関数の基本周期平行四辺形内の留数の総和は <InlineMath math="0" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を楕円関数とし、基本周期平行四辺形 <InlineMath math="\Pi" /> の境界 <InlineMath math="\partial \Pi" /> 上に極を持たないように <InlineMath math="\Pi" /> を適当に平行移動して考える。留数定理より、<InlineMath math="\Pi" /> 内の極における留数の総和 <InlineMath math="\sum \mathrm{Res}(f)" /> は、境界に沿った積分を用いて次のように表される。
                </p>
                <BlockMath math="\sum \mathrm{Res}(f) = \frac{1}{2\pi i} \oint_{\partial \Pi} f(z) \,dz"
                />
                <p>
                    境界 <InlineMath math="\partial \Pi" /> は、頂点を <InlineMath math="t, t+\omega_1, t+\omega_1+\omega_2, t+\omega_2" /> とする平行四辺形である。対辺同士の積分を組み合わせると、二重周期性 <InlineMath math="f(z+\omega_1) = f(z)" /> および <InlineMath math="f(z+\omega_2) = f(z)" /> により、
                </p>
                <BlockMath math="\begin{aligned} &\quad \int_t^{t+\omega_1} f(z) \,dz + \int_{t+\omega_1+\omega_2}^{t+\omega_2} f(z) \,dz \\ &= \int_t^{t+\omega_1} f(z) \,dz - \int_t^{t+\omega_1} f(z+\omega_2) \,dz \\ &= 0 \end{aligned}"
                />
                <p>
                    同様に、もう一組の対辺の積分も打ち消し合って <InlineMath math="0" /> になる。したがって、全体の積分は <InlineMath math="0" /> であり、留数の総和も <InlineMath math="0" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                続いて、零点と極の個数に関する制約を示します。これは複素解析学における偏角の原理の自然な応用です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-3 (零点と極の個数の一致)">
                <p>
                    楕円関数の基本周期平行四辺形内の零点の個数と極の個数は、重複度を込めて等しい。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> を定数でない楕円関数とする。対数微分 <InlineMath math="f'(z)/f(z)" /> を考えると、<InlineMath math="f" /> が <InlineMath math="\Lambda" />-周期的であるため、<InlineMath math="f'" /> も <InlineMath math="\Lambda" />-周期的であり、したがって <InlineMath math="f'/f" /> も楕円関数となる。
                </p>
                <p>
                    偏角の原理（3-2）によれば、<InlineMath math="\Pi" /> 内の零点の個数 <InlineMath math="N" /> と極の個数 <InlineMath math="P" />（ともに重複度込み）の差は次のように積分で与えられる。
                </p>
                <BlockMath math="N - P = \frac{1}{2\pi i} \oint_{\partial \Pi} \frac{f'(z)}{f(z)} \,dz"
                />
                <p>
                    Theorem 2.4-2 の証明と同様に、<InlineMath math="f'/f" /> が楕円関数であることから対辺の積分は打ち消し合い、積分値は <InlineMath math="0" /> となる。よって <InlineMath math="N = P" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                さらに驚くべきことに、零点と極は単に個数が等しいだけでなく、その配置される位置にも格子を法とした制約が存在します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-4 (零点と極の位置の制約)">
                <p>
                    楕円関数 <InlineMath math="f" /> の基本周期平行四辺形内の零点を <InlineMath math="a_1, \dots, a_n" />、極を <InlineMath math="b_1, \dots, b_n" /> とするとき、零点の位置の和と極の位置の和は <InlineMath math="\Lambda" /> を法として等しい。
                </p>
                <BlockMath math="\sum_{k=1}^n a_k \equiv \sum_{k=1}^n b_k \pmod{\Lambda}"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分 <InlineMath math="I = \frac{1}{2\pi i} \oint_{\partial \Pi} z \frac{f'(z)}{f(z)} \,dz" /> を評価する。留数定理により、この積分は <InlineMath math="\Pi" /> 内の留数の和に等しく、<InlineMath math="z f'(z)/f(z)" /> の極は <InlineMath math="f" /> の零点と極であるから、<InlineMath math="I = \sum a_k - \sum b_k" /> となる。
                </p>
                <p>
                    一方で、境界 <InlineMath math="\partial \Pi" /> に沿って直接積分を計算する。対辺の寄与をまとめると、
                </p>
                <BlockMath math="\int_t^{t+\omega_1} \left( z \frac{f'(z)}{f(z)} - (z+\omega_2) \frac{f'(z+\omega_2)}{f(z+\omega_2)} \right) dz"
                />
                <p>
                    ここで <InlineMath math="f'(z+\omega_2)/f(z+\omega_2) = f'(z)/f(z)" /> であるから、被積分関数は <InlineMath math="-\omega_2 f'(z)/f(z)" /> となる。これを積分すると、
                </p>
                <BlockMath math="-\omega_2 \int_t^{t+\omega_1} \frac{f'(z)}{f(z)} \,dz = -\omega_2 [\log f(z)]_t^{t+\omega_1}"
                />
                <p>
                    <InlineMath math="f(t+\omega_1) = f(t)" /> より、対数の差は <InlineMath math="2\pi i" /> の整数倍 <InlineMath math="2\pi i m" />（<InlineMath math="m \in \mathbb{Z}" />）となる。同様にもう一組の対辺からの寄与も計算でき、全体として積分の値は <InlineMath math="n\omega_1 - m\omega_2" />（<InlineMath math="m, n \in \mathbb{Z}" />）となる。
                </p>
                <p>
                    これを <InlineMath math="2\pi i" /> で割ったものが <InlineMath math="\sum a_k - \sum b_k" /> であるから、
                </p>
                <BlockMath math="\sum a_k - \sum b_k = n\omega_1 - m\omega_2 \in \Lambda"
                />
                <p>
                    となり、題意が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-2">
                <p>
                    最も基本的な楕円関数である「位数2の楕円関数」について考える。位数2とは、基本周期平行四辺形内に2位の極を1つ、または1位の極を2つ持つことを意味する。
                </p>
                <p>
                    Theorem 2.4-3 より、この関数は極と同じ数（重複度込みで2つ）の零点を持つ。零点を <InlineMath math="a_1, a_2" />、極を <InlineMath math="b_1, b_2" /> とすると、Theorem 2.4-4 により次が成り立つ。
                </p>
                <BlockMath math="a_1 + a_2 \equiv b_1 + b_2 \pmod{\Lambda}"
                />
                <p>
                    次章で詳しく扱うワイエルシュトラスの <InlineMath math="\wp" /> 関数は、原点 <InlineMath math="z=0" /> に唯一の2位の極を持つ位数2の偶関数である。極の和は <InlineMath math="0 + 0 = 0" /> であり、零点 <InlineMath math="a_1, a_2" /> は <InlineMath math="a_1 + a_2 \equiv 0 \pmod{\Lambda}" />、すなわち <InlineMath math="a_2 \equiv -a_1" /> を満たすことがわかる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>極を持たない楕円関数（整関数）は定数関数のみである（リウヴィルの第一定理）。</li>
                    <li>定数でない楕円関数の位数は <InlineMath math="2" /> 以上である。</li>
                    <li>基本周期平行四辺形内の留数の総和は常に <InlineMath math="0" /> である。</li>
                    <li>零点の個数と極の個数は等しい（重複度込み）。</li>
                    <li>零点と極の位置の和は、格子 <InlineMath math="\Lambda" /> を法として一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
