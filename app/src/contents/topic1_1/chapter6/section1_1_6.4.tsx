import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function Diagonalization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                行列の対角化（diagonalization）は、複雑な行列を扱いやすい「対角行列」に変形する操作です。
                行列のべき乗 <InlineMath math="A^n" /> の計算や、連立微分方程式の解法などに絶大な威力を発揮します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 対角化の定義
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対角化とは</h2>

            {/* Definition 6.4-1 */}
            <ContentBox type="definition" title="Definition 6.4-1 （対角化）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> に対して、ある正則行列 <InlineMath math="P" /> を用いて
                    <BlockMath math="P^{-1}AP = D" />
                    と変形することを、行列 <InlineMath math="A" /> の<strong>対角化</strong>という。
                    ここで <InlineMath math="D" /> は対角行列である。
                </p>
            </ContentBox>
            <p className="mt-4">
                このような変形ができる行列を「対角化可能（diagonalizable）」といいます。
                すべての行列が対角化できるわけではありません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 対角化の手順
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対角化の手順</h2>

            <p>
                対角化を行うための行列 <InlineMath math="P" /> と <InlineMath math="D" /> は、固有値と固有ベクトルを使って構成できます。
            </p>

            {/* Theorem 6.4-1 */}
            <ContentBox type="theorem" title="Theorem 6.4-1 （対角化の方法）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> が <InlineMath math="n" /> 個の線形独立な固有ベクトル <InlineMath math="\mathbf{p}_1, \dots, \mathbf{p}_n" /> を持つとき、
                    <InlineMath math="A" /> は対角化可能である。
                </p>
                <p className="mt-2">
                    また、それぞれの固有値を <InlineMath math="\lambda_1, \dots, \lambda_n" /> とすると、
                    行列 <InlineMath math="P" /> と <InlineMath math="D" /> は以下のように構成できる。
                </p>
                <BlockMath math="P = [\mathbf{p}_1, \dots, \mathbf{p}_n]" />
                <BlockMath math="D = \begin{pmatrix} \lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n \end{pmatrix}" />
                <p>
                    このとき、<InlineMath math="P^{-1}AP = D" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="proof">
                <BlockMath math="\begin{aligned} AP &= A[\mathbf{p}_1, \dots, \mathbf{p}_n] = [A\mathbf{p}_1, \dots, A\mathbf{p}_n] \\ &= [\lambda_1\mathbf{p}_1, \dots, \lambda_n\mathbf{p}_n] \end{aligned}" />
                <p>一方、</p>
                <BlockMath math="\begin{aligned} PD &= [\mathbf{p}_1, \dots, \mathbf{p}_n] \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix} \\ &= [\lambda_1\mathbf{p}_1, \dots, \lambda_n\mathbf{p}_n] \end{aligned}" />
                <p>
                    よって <InlineMath math="AP = PD" />。
                    <InlineMath math="P" /> が正則なら左から <InlineMath math="P^{-1}" /> を掛けて <InlineMath math="P^{-1}AP = D" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 6.4-1 */}
            <ContentBox type="example" title="Example 6.4-1">
                <p>
                    Example 6.2-1, 6.3-1 の行列 <InlineMath math="A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}" /> を対角化せよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    これまでの計算結果より、
                    固有値 <InlineMath math="\lambda_1 = 2" /> に対する固有ベクトル <InlineMath math="\mathbf{p}_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}" />、
                    固有値 <InlineMath math="\lambda_2 = 5" /> に対する固有ベクトル <InlineMath math="\mathbf{p}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /> が得られている。
                </p>
                <p>
                    これらを並べて行列 <InlineMath math="P" /> を作る。
                </p>
                <BlockMath math="P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}" />
                <p>
                    この逆行列 <InlineMath math="P^{-1}" /> を求めると（<InlineMath math="\det P = 1 - (-2) = 3" />）、
                </p>
                <BlockMath math="P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}" />
                <p>
                    これを用いて <InlineMath math="P^{-1}AP" /> を計算すると、
                </p>
                <BlockMath math="P^{-1}AP = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}" />
                <p>
                    となり、対角成分に固有値 <InlineMath math="2, 5" /> が並ぶ対角行列になることが確認できる。
                </p>
            </ContentBox>

            {/* ──────────────────────────────
                 対角化の応用：行列のn乗
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">対角化の応用：行列のn乗</h2>

            <p>
                対角化の最大のメリットは、行列のべき乗 <InlineMath math="A^n" /> の計算が簡単になることです。
                <InlineMath math="P^{-1}AP = D" /> ならば <InlineMath math="A = PDP^{-1}" /> なので、
            </p>
            <BlockMath math="\begin{aligned} A^n &= (PDP^{-1})^n = (PDP^{-1})(PDP^{-1})\dots(PDP^{-1}) \\ &= PD^n P^{-1} \end{aligned}" />
            <p>
                となリます。対角行列 <InlineMath math="D" /> の <InlineMath math="n" /> 乗は対角成分を <InlineMath math="n" /> 乗するだけなので、計算が非常に楽になります。
            </p>

            {/* Example 6.4-2 */}
            <ContentBox type="example" title="Example 6.4-2 （行列のn乗）">
                <p>
                    Example 6.4-1 の行列 <InlineMath math="A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}" /> について、<InlineMath math="A^n" /> を求めよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>
                    前問より <InlineMath math="P^{-1}AP = D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}" />、
                    <InlineMath math="P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}" /> であった。
                </p>
                <BlockMath math="A^n = P D^n P^{-1} = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix} \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}" />
                <p>
                    これを計算する。まずは後ろの2つを掛けると、
                </p>
                <BlockMath math="
                    \begin{aligned}
                    \text{(右2つ)} &= \frac{1}{3} \begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} \\
                    &= \frac{1}{3} \begin{pmatrix} 2^n & -2^n \\ 2 \cdot 5^n & 5^n \end{pmatrix}
                    \end{aligned}
                " />
                <p>
                    これに左から <InlineMath math="P" /> を掛けて、
                </p>
                <BlockMath math="
                    \begin{aligned}
                    A^n &= \frac{1}{3} \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 2^n & -2^n \\ 2 \cdot 5^n & 5^n \end{pmatrix} \\
                    &= \frac{1}{3} \begin{pmatrix} 2^n + 2 \cdot 5^n & -2^n + 5^n \\ -2 \cdot 2^n + 2 \cdot 5^n & 2 \cdot 2^n + 5^n \end{pmatrix}
                    \end{aligned}
                " />
            </ContentBox>

            <ContentBox type="note" title="対角化できない場合">
                <p>
                    行列式が重解を持ち、かつ対応する固有空間の次元（幾何学的重複度）が重解の個数（代数的重複度）より小さい場合、
                    対角化に必要な数の固有ベクトルが集まらないため、対角化できません。
                    例えば <InlineMath math="J = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}" /> は対角化不可能です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P^{-1}AP = D" /> に変形することを対角化という。</li>
                    <li>変換行列 <InlineMath math="P" /> は固有ベクトルを並べたもの、<InlineMath math="D" /> は固有値を並べたもの。</li>
                    <li>対角化により、行列の計算（特にべき乗）が非常に簡単になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
