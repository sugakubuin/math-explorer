import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MoorePenrosePseudoinverse() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                逆行列は正方行列かつ正則な場合にしか定義されません。しかし、方程式 <InlineMath math="A\bm{x} = \bm{b}" /> において <InlineMath math="A" /> が長方行列（方程式の数と未知数の数が異なる）であったり、正則でなかったりする場合でも、「逆行列のようなもの」を考えて「最も妥当な解」を求めることができると便利です。
                特異値分解を用いると、この「一般的な逆行列」である<strong>ムーア・ペンローズ擬逆行列</strong> (<InlineMath math="\text{Moore-Penrose pseudoinverse}" />) を自然に定義できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">擬逆行列の定義</h2>

            <ContentBox type="definition" title="Definition 14.4-1 (ムーア・ペンローズ擬逆行列)">
                <p className="leading-relaxed">
                    <InlineMath math="m \times n" /> の実行列 <InlineMath math="A" /> の特異値分解を <InlineMath math="A = U \Sigma V^T" /> とする（<InlineMath math="\mathrm{rank}(A) = r" />）。このとき、<InlineMath math="A" /> の<strong>ムーア・ペンローズ擬逆行列</strong>（単に<strong>擬逆行列</strong>とも言う） <InlineMath math="A^+" /> は、次のように定義される <InlineMath math="n \times m" />行列である。
                </p>
                <BlockMath math="A^+ = V \Sigma^+ U^T" />
                <p className="leading-relaxed">
                    ここで、<InlineMath math="\Sigma^+" /> は <InlineMath math="\Sigma" /> の転置の形（<InlineMath math="n \times m" />）をした行列で、<InlineMath math="\Sigma" /> の非ゼロの特異値 <InlineMath math="\sigma_i" /> の部分を非ゼロの逆数 <InlineMath math="\sigma_i^{-1}" /> に置き換えた対角行列である。すなわち、
                </p>
                <BlockMath math="\Sigma = \begin{pmatrix} D & O \\ O & O \end{pmatrix} \quad (D = \mathrm{diag}(\sigma_1, \dots, \sigma_r))" />
                <p className="leading-relaxed">
                    に対して、<InlineMath math="\Sigma^+" /> は
                </p>
                <BlockMath math="\Sigma^+ = \begin{pmatrix} D^{-1} & O \\ O & O \end{pmatrix} \quad (D^{-1} = \mathrm{diag}(\sigma_1^{-1}, \dots, \sigma_r^{-1}))" />
                <p className="leading-relaxed">
                    となる。（ブロック行列のサイズは転置に従う。）
                </p>
            </ContentBox>

            <p>
                この擬逆行列は「非ゼロの特異値だけを逆数にし、ゼロ特異値はゼロのまま」というシンプルなルールで構成されています。
                では、なぜこのような行列が「逆行列の代わり」として機能するのでしょうか。
                その答えは「最小二乗解」にあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小二乗解</h2>

            <ContentBox type="proposition" title="Proposition 14.4-1 (擬逆行列による最小二乗解の表現)">
                <p className="leading-relaxed">
                    線形方程式系 <InlineMath math="A\bm{x} = \bm{b}" /> が解を持たない（過剰決定系）場合の<strong>最小二乗解</strong>、すなわち誤差の二乗ノルム <InlineMath math="\|A\bm{x} - \bm{b}\|^2" /> を最小にする <InlineMath math="\bm{x}" /> のうち、さらにノルム <InlineMath math="\|\bm{x}\|" /> が最小となるもの（最小ノルム最小二乗解）は、擬逆行列を用いて次のように一意に表される。
                </p>
                <BlockMath math="\hat{\bm{x}} = A^+ \bm{b}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    最小化すべき目的関数は <InlineMath math="\|A\bm{x} - \bm{b}\|^2" /> である。<InlineMath math="A = U \Sigma V^T" /> を代入し、直交行列 <InlineMath math="U^T" /> を掛けてもノルムは変わらないため、
                </p>
                <BlockMath math="\begin{aligned} \|A\bm{x} - \bm{b}\|^2 &= \|U \Sigma V^T \bm{x} - \bm{b}\|^2 \\ &= \|U^T (U \Sigma V^T \bm{x} - \bm{b})\|^2 \\ &= \|\Sigma (V^T \bm{x}) - U^T \bm{b}\|^2 \end{aligned}" />
                <p className="leading-relaxed">
                    ここで、新しい変数 <InlineMath math="\bm{y} = V^T \bm{x}" />、および <InlineMath math="\bm{c} = U^T \bm{b}" /> を導入する。これより問題は
                </p>
                <BlockMath math="\min_{\bm{y}} \|\Sigma \bm{y} - \bm{c}\|^2" />
                <p className="leading-relaxed">
                    に帰着される。<InlineMath math="\mathrm{rank}(A) = r" /> であり、<InlineMath math="\Sigma" /> と <InlineMath math="\bm{c}" /> を成分で書き下すと、
                </p>
                <BlockMath math="\|\Sigma \bm{y} - \bm{c}\|^2 = \sum_{i=1}^r (\sigma_i y_i - c_i)^2 + \sum_{i=r+1}^m (0 \cdot y_i - c_i)^2" />
                <p className="leading-relaxed">
                    となる。右辺の第2項は <InlineMath math="\bm{y}" /> に依存しない定数であるため、これを最小にするには第1項を <InlineMath math="0" /> にすればよい。すなわち、
                </p>
                <BlockMath math="y_i = \frac{c_i}{\sigma_i} \quad (1 \leq i \leq r)" />
                <p className="leading-relaxed">
                    となる。
                    一方、<InlineMath math="y_{r+1}, \dots, y_n" /> は目的関数 <InlineMath math="\|\Sigma \bm{y} - \bm{c}\|^2" /> に一切影響を与えないため任意の値を取り得る。
                    しかし、<InlineMath math="\hat{\bm{x}}" /> のノルム <InlineMath math="\|\hat{\bm{x}}\| = \|V \bm{y}\| = \|\bm{y}\|" /> を最小にするという条件（最小ノルム解）から、
                </p>
                <BlockMath math="y_i = 0 \quad (r < i \leq n)" />
                <p className="leading-relaxed">
                    を選ぶのが一意の最適解である。
                </p>
                <p className="leading-relaxed mt-2">
                    これをベクトルと行列の形でまとめると、<InlineMath math="\bm{y} = \Sigma^+ \bm{c}" /> と書ける。元の変数に戻すと、
                </p>
                <BlockMath math="V^T \bm{x} = \Sigma^+ U^T \bm{b} \iff \bm{x} = V \Sigma^+ U^T \bm{b}" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="A^+ = V \Sigma^+ U^T" /> であるから、最小ノルム最小二乗解は <InlineMath math="\hat{\bm{x}} = A^+ \bm{b}" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                擬逆行列は「通常の逆行列の自然な拡張」と見なせます。次のRemarkでその関係を確認しましょう。
            </p>

            <ContentBox type="remark" title="逆行列との関係">
                <p className="leading-relaxed">
                    もし行列 <InlineMath math="A" /> が <InlineMath math="n \times n" /> の正則行列だった場合、<InlineMath math="r = n" /> であり特異値はすべて非ゼロになります。<InlineMath math="U, V" /> のほかに <InlineMath math="\Sigma" /> も逆行列を持つことになり、
                </p>
                <BlockMath math="A^+ = V \Sigma^{-1} U^T = V \Sigma^{-1} U^{-1} = (U \Sigma V^T)^{-1} = A^{-1}" />
                <p className="leading-relaxed">
                    となって、擬逆行列は通常の逆行列 <InlineMath math="A^{-1}" /> に一致します。
                </p>
                <p className="leading-relaxed mt-2">
                    また、もし列フルランク（<InlineMath math="m > n" /> かつ <InlineMath math="r = n" />）の場合、疑似逆行列は <InlineMath math="A^+ = (A^T A)^{-1} A^T" /> という形に一致します。これは統計学の回帰分析などによく現れる最小二乗推定量そのものです。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§14.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ムーア・ペンローズ擬逆行列 <InlineMath math="A^+" /> は、SVDを用いて <InlineMath math="A^+ = V \Sigma^+ U^T" /> と定義される。</li>
                    <li>方程式 <InlineMath math="A\bm{x} = \bm{b}" /> の最小ノルム最小二乗解は <InlineMath math="\hat{\bm{x}} = A^+ \bm{b}" /> で一意に与えられる。</li>
                    <li><InlineMath math="A" /> が正則行列の場合、擬逆行列は通常の逆行列に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
