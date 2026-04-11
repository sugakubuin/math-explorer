import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function JFunctionModularity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではモジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> が上半平面 <InlineMath math="\mathbb{H}" /> にどのように作用するか、そして基本領域の概念について学びました。本節では、楕円曲線の同型類を完全に分類する <InlineMath math="j" /> 不変量を上半平面上の関数 <InlineMath math="j(\tau)" /> とみなしたとき、それがモジュラー群の作用に対してどのような性質を持つかを探ります。この <InlineMath math="j" /> 関数の持つ「モジュラー性」は、のちにモジュラー形式の理論へとつながる重要な足掛かりとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="j" /> 関数の性質</h2>

            <p>
                Chapter 3 および Chapter 5 で定義したように、格子 <InlineMath math="\Lambda = \mathbb{Z} + \tau\mathbb{Z}" /> に対する <InlineMath math="j" /> 不変量は <InlineMath math="j(\tau)" /> と書くことができます。この関数がモジュラー変換に対して不変であることを示します。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 8.2-1 (<InlineMath math="j(\tau)" /> の <InlineMath math="\text{SL}_2(\mathbb{Z})" />-不変性)</span>}>
                <p>
                    関数 <InlineMath math="j(\tau)" /> はモジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の作用に関して不変である。すなわち、任意の <InlineMath math="\begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})" /> に対して次が成り立つ：
                </p>
                <BlockMath math="j\left(\frac{a\tau+b}{c\tau+d}\right) = j(\tau)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    モジュラー群の元 <InlineMath math="\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /> による変換 <InlineMath math="\tau' = \frac{a\tau+b}{c\tau+d}" /> は、格子 <InlineMath math="\Lambda = \mathbb{Z} + \tau\mathbb{Z}" /> の基底の取り替えに対応する。具体的には、新しい格子 <InlineMath math="\Lambda' = \mathbb{Z} + \tau'\mathbb{Z}" /> は元の格子 <InlineMath math="\Lambda" /> と相似（定数倍の違い）である：
                </p>
                <BlockMath math="\Lambda' = \frac{1}{c\tau+d} \Lambda"
                />
                <p>
                    §5.4の Theorem 5.4-1 で示したように、<InlineMath math="j" /> 不変量は格子の相似類のみに依存する。したがって、<InlineMath math="j(\Lambda') = j(\Lambda)" /> であり、これはすなわち <InlineMath math="j(\tau') = j(\tau)" /> を意味する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この不変性により、<InlineMath math="j" /> 関数は商空間 <InlineMath math="\mathbb{H}/\text{SL}_2(\mathbb{Z})" /> 上の関数とみなすことができます。さらに、この関数は商空間と複素数平面の間に全単射を与えます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 8.2-2 (<InlineMath math="j" /> 関数の全単射性)</span>}>
                <p>
                    写像 <InlineMath math="j : \mathbb{H}/\text{SL}_2(\mathbb{Z}) \to \mathbb{C}" /> は全単射である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <b>全射性：</b> §5.4 の分類定理より、任意の複素数 <InlineMath math="c \in \mathbb{C}" /> に対して、<InlineMath math="j(\Lambda) = c" /> となる格子 <InlineMath math="\Lambda" /> が存在する。適当なスカラー倍により <InlineMath math="\Lambda = \omega_1\mathbb{Z} + \omega_2\mathbb{Z}" /> を <InlineMath math="\mathbb{Z} + \tau\mathbb{Z}" />（<InlineMath math="\text{Im}(\tau) > 0" />）の形に規格化できるため、<InlineMath math="j(\tau) = c" /> となる <InlineMath math="\tau \in \mathbb{H}" /> が存在する。
                </p>
                <p>
                    <b>単射性：</b> <InlineMath math="j(\tau_1) = j(\tau_2)" /> と仮定する。このとき、対応する格子 <InlineMath math="\Lambda_1 = \mathbb{Z} + \tau_1\mathbb{Z}" /> と <InlineMath math="\Lambda_2 = \mathbb{Z} + \tau_2\mathbb{Z}" /> は相似である。すなわち、ある <InlineMath math="\alpha \in \mathbb{C}^*" /> が存在して <InlineMath math="\Lambda_2 = \alpha\Lambda_1" /> となる。これは <InlineMath math="\tau_1" /> と <InlineMath math="\tau_2" /> が <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の作用で移り合うことを意味する。したがって、商空間 <InlineMath math="\mathbb{H}/\text{SL}_2(\mathbb{Z})" /> において <InlineMath math="[\tau_1] = [\tau_2]" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                <InlineMath math="j(\tau)" /> は <InlineMath math="\tau \mapsto \tau+1" /> に対して不変であるため、<InlineMath math="q = e^{i\pi\tau}" />（または <InlineMath math="q = e^{2\pi i\tau}" />）による Fourier 展開（<InlineMath math="q" />-展開）を持ちます。この展開係数には驚くべき性質が隠されています。
            </p>

            <ContentBox type="example" title={<span>Example 8.2-1 (<InlineMath math="j" /> の <InlineMath math="q" />-展開とムーンシャイン現象)</span>}>
                <p>
                    <InlineMath math="j(\tau)" /> を <InlineMath math="q = e^{2\pi i\tau}" /> を用いて展開すると、次のような級数が得られます（定義によっては定数倍やシフトが異なりますが、標準的な正規化では以下のようになります）：
                </p>
                <BlockMath math="j(\tau) = \frac{1}{q} + 744 + 196884q + 21493760q^2 + \cdots" />
                <p>
                    ここで現れる係数 <InlineMath math="196884" /> に注目してください。有限単純群の最大の散在型群である「モンスター群」の最小の非自明な既約表現の次元は <InlineMath math="196883" /> です。自明表現の次元 <InlineMath math="1" /> を足すと、<InlineMath math="196883 + 1 = 196884" /> となり、<InlineMath math="j" /> 関数の係数と完全に一致します。この信じがたい偶然の一致は「モンストラス・ムーンシャイン（Monstrous Moonshine）」と呼ばれ、後に R. Borcherds によって頂点作用素代数を用いて証明されました。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">モジュラー形式への展望</h2>

            <p>
                <InlineMath math="j" /> 関数の不変性は非常に強力ですが、一般のアイゼンシュタイン級数 <InlineMath math="G_{2k}(\tau)" /> などは完全に不変ではなく、変換に際して一定の因子（保型因子）が掛かります。このような関数を系統的に扱うのが「モジュラー形式」の理論です。
            </p>

            <ContentBox type="remark" title="モジュラー関数とモジュラー形式">
                <p>
                    <InlineMath math="j(\tau)" /> のように、<InlineMath math="\text{SL}_2(\mathbb{Z})" /> の作用で完全に不変な有理型関数を（重さ0の）<b>モジュラー関数</b>と呼びます。一方で、アイゼンシュタイン級数 <InlineMath math="G_{2k}(\tau)" /> は、変換 <InlineMath math="\tau \mapsto \frac{a\tau+b}{c\tau+d}" /> に対して <InlineMath math="(c\tau+d)^{2k}" /> という因子が掛かります。
                </p>
                <BlockMath math="G_{2k}\left(\frac{a\tau+b}{c\tau+d}\right) = (c\tau+d)^{2k} G_{2k}(\tau)" />
                <p>
                    このような変換則を満たす正則関数を<b>重さ <InlineMath math="2k" /> のモジュラー形式</b>と呼びます。モジュラー形式の理論（5-7 Topic）は、楕円関数論の自然な延長線上にあるだけでなく、数論や表現論と深く結びつく現代数学の中心的なテーマの一つです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="j(\tau)" /> はモジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の作用に関して不変である。</li>
                    <li><InlineMath math="j" /> 関数は商空間 <InlineMath math="\mathbb{H}/\text{SL}_2(\mathbb{Z})" /> から複素数平面 <InlineMath math="\mathbb{C}" /> への全単射を与える。</li>
                    <li><InlineMath math="j(\tau)" /> の <InlineMath math="q" />-展開係数はモンスター群の表現の次元と密接に関わる（ムーンシャイン現象）。</li>
                    <li><InlineMath math="j" /> 関数は重さ <InlineMath math="0" /> のモジュラー関数であり、モジュラー形式の理論への入口となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
