import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SingularValueDecompositionDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                行列の対角化は正方行列、しかも一定の条件を満たすもの（例えば対称行列や正規行列）に限られていました。
                しかし、<strong>特異値分解</strong> (<InlineMath math="\text{Singular Value Decomposition; SVD}" />) は、
                正方行列に限らず、<strong>任意の長方行列</strong>に対しても適用できる強力な分解手法です。
                本節では、特異値の定義から出発し、特異値分解の存在について定理とその証明を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異値・特異ベクトル</h2>

            <ContentBox type="definition" title="Definition 14.1-1 (特異値・左特異ベクトル・右特異ベクトル)">
                <p className="leading-relaxed">
                    <InlineMath math="A" /> を <InlineMath math="m \times n" /> の実行列とする。行列 <InlineMath math="A^T A" /> は <InlineMath math="n \times n" /> の実対称半正定値行列となるため、その固有値はすべて実数であり、かつ非負である。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="A^T A" /> の固有値を大きい順に <InlineMath math="\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n \geq 0" /> としたとき、
                    <InlineMath math="\sigma_i = \sqrt{\lambda_i}" /> (<InlineMath math="i = 1, \dots, n" />) を行列 <InlineMath math="A" /> の<strong>特異値</strong> (<InlineMath math="\text{singular value}" />) と呼ぶ。
                </p>
                <p className="leading-relaxed mt-2">
                    また、後の特異値分解 <InlineMath math="A = U \Sigma V^T" /> において、
                </p>
                <ul>
                    <li><InlineMath math="U" /> の列ベクトルを <strong>左特異ベクトル</strong> (<InlineMath math="\text{left singular vector}" />)</li>
                    <li><InlineMath math="V" /> の列ベクトルを <strong>右特異ベクトル</strong> (<InlineMath math="\text{right singular vector}" />)</li>
                </ul>
                <p className="leading-relaxed">と呼ぶ。</p>
            </ContentBox>

            <p>
                特異値とは、行列の「伸縮の強さ」を表す量です。
                固有値が正方行列の「自己変換」の性質を反映するのに対して、特異値は<strong>任意の長方行列</strong>がどの方向にどれだけベクトルを伸ばすかを特徴づけます。
                次に、この特異値を用いた行列の分解を定義します。
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-6">特異値分解</h2>

            <ContentBox type="definition" title="Definition 14.1-2 (特異値分解)">
                <p className="leading-relaxed">
                    <InlineMath math="m \times n" /> 実行列 <InlineMath math="A" /> に対し、次のような直交行列 <InlineMath math="U" /> (<InlineMath math="m \times m" />)、直交行列 <InlineMath math="V" /> (<InlineMath math="n \times n" />)、および対角成分に特異値が並ぶ <InlineMath math="m \times n" /> 行列 <InlineMath math="\Sigma" /> への分解を<strong>特異値分解</strong>という。
                </p>
                <BlockMath math="A = U \Sigma V^T" />
                <p className="leading-relaxed">
                    ここで、<InlineMath math="\Sigma" /> は次のように定義される非対角成分がすべて <InlineMath math="0" /> の行列である。特異値を大きい順に <InlineMath math="\sigma_1 \geq \sigma_2 \geq \dots \geq \sigma_r > 0" /> (<InlineMath math="r = \mathrm{rank}(A)" />) とすると、
                </p>
                <BlockMath math="\Sigma = \begin{pmatrix} D & O \\ O & O \end{pmatrix}, \quad D = \mathrm{diag}(\sigma_1, \dots, \sigma_r)" />
                <p className="leading-relaxed">
                    と表される。
                </p>
            </ContentBox>

            <p>
                この定義は「行列 <InlineMath math="A" /> による変換を、まず回転（<InlineMath math="V^T" />）→ 伸縮（<InlineMath math="\Sigma" />）→ 再び回転（<InlineMath math="U" />）という3ステップに分解する」と読むことができます。
                では、なぜこのような分解が<strong>常に</strong>可能なのでしょうか。次の定理がその存在を保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 14.1-1 (任意の実行列の特異値分解の存在)">
                <p className="leading-relaxed">
                    任意の <InlineMath math="m \times n" /> 実行列 <InlineMath math="A" /> は、必ず特異値分解
                </p>
                <BlockMath math="A = U \Sigma V^T" />
                <p className="leading-relaxed">
                    を持つ。ここで <InlineMath math="U" /> は <InlineMath math="m \times m" /> 直交行列、<InlineMath math="V" /> は <InlineMath math="n \times n" /> 直交行列、<InlineMath math="\Sigma" /> は対角成分が <InlineMath math="\sigma_1 \geq \dots \geq \sigma_r > 0 \geq \dots" /> となる <InlineMath math="m \times n" /> 行列である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    行列 <InlineMath math="A^T A" /> は <InlineMath math="n \times n" /> の実対称行列である。実対称行列のスペクトル定理より、<InlineMath math="A^T A" /> は直交行列 <InlineMath math="V" /> を用いて直交対角化可能である。
                    すなわち、
                </p>
                <BlockMath math="V^T (A^T A) V = \begin{pmatrix} D^2 & O \\ O & O \end{pmatrix}" />
                <p className="leading-relaxed">
                    を満たす <InlineMath math="n \times n" /> 直交行列 <InlineMath math="V = (\bm{v}_1, \dots, \bm{v}_n)" /> が存在する。
                    ここで、<InlineMath math="A^T A" /> の固有値は非負であるから、正の固有値を並べた対角行列を <InlineMath math="D^2" /> (<InlineMath math="D = \mathrm{diag}(\sigma_1, \dots, \sigma_r)" />, <InlineMath math="r = \mathrm{rank}(A)" />) とする。
                    このとき、
                </p>
                <BlockMath math="A^T A \bm{v}_i = \sigma_i^2 \bm{v}_i \quad (1 \leq i \leq r)" />
                <BlockMath math="A^T A \bm{v}_i = \bm{0} \quad (i > r)" />
                <p className="leading-relaxed">
                    が成り立つ。
                    次に、<InlineMath math="1 \leq i \leq r" /> に対して、新しいベクトル <InlineMath math="\bm{u}_i" /> を次のように定義する。
                </p>
                <BlockMath math="\bm{u}_i = \frac{1}{\sigma_i} A \bm{v}_i" />
                <p className="leading-relaxed">
                    これらのベクトルが正規直交系をなすことを確認する。
                </p>
                <BlockMath math="\begin{aligned} \bm{u}_i \cdot \bm{u}_j &= \bm{u}_i^T \bm{u}_j = \frac{1}{\sigma_i \sigma_j} \bm{v}_i^T A^T A \bm{v}_j \\ &= \frac{1}{\sigma_i \sigma_j} \bm{v}_i^T (\sigma_j^2 \bm{v}_j) = \frac{\sigma_j}{\sigma_i} \delta_{ij} \end{aligned}" />
                <p className="leading-relaxed">
                    したがって、<InlineMath math="i = j" /> のときは <InlineMath math="1" />、<InlineMath math="i \neq j" /> のときは <InlineMath math="0" /> となり、<InlineMath math="\{\bm{u}_1, \dots, \bm{u}_r\}" /> は正規直交系をなす。<br />
                    一方、<InlineMath math="i > r" /> については <InlineMath math="\|A \bm{v}_i\|^2 = \bm{v}_i^T A^T A \bm{v}_i = 0" /> より <InlineMath math="A \bm{v}_i = \bm{0}" /> である。
                </p>
                <p className="leading-relaxed mt-2">
                    次に、<InlineMath math="\mathbb{R}^m" /> の正規直交系 <InlineMath math="\{\bm{u}_1, \dots, \bm{u}_r\}" /> に適切な元を追加して、<InlineMath math="\mathbb{R}^m" /> の完全な正規直交基底へと拡張する。
                    拡張された基底を <InlineMath math="\{\bm{u}_1, \dots, \bm{u}_r, \bm{u}_{r+1}, \dots, \bm{u}_m\}" /> とし、これを列ベクトルとして並べた行列を <InlineMath math="U" /> とする。
                </p>
                <BlockMath math="U = (\bm{u}_1, \dots, \bm{u}_m)" />
                <p className="leading-relaxed">
                    <InlineMath math="U" /> は構成より <InlineMath math="m \times m" /> の直交行列である。
                </p>
                <p className="leading-relaxed mt-2">
                    最後に <InlineMath math="U^T A V" /> を計算する。
                </p>
                <BlockMath math="\begin{aligned} AV &= A (\bm{v}_1, \dots, \bm{v}_r, \bm{v}_{r+1}, \dots, \bm{v}_n) \\ &= (\sigma_1 \bm{u}_1, \dots, \sigma_r \bm{u}_r, \bm{0}, \dots, \bm{0}) \end{aligned}" />
                <p className="leading-relaxed">
                    であり、<InlineMath math="U^T" /> を左から掛けると、
                </p>
                <BlockMath math="U^T A V = \begin{pmatrix} \sigma_1 & & & 0 & \cdots & 0 \\ & \ddots & & \vdots & & \vdots \\ & & \sigma_r & 0 & \cdots & 0 \\ 0 & \cdots & 0 & 0 & \cdots & 0 \\ \vdots & & \vdots & \vdots & & \vdots \\ 0 & \cdots & 0 & 0 & \cdots & 0 \end{pmatrix} = \Sigma" />
                <p className="leading-relaxed">
                    となる。両辺の左から <InlineMath math="U" />、右から <InlineMath math="V^T" /> を掛ければ、<InlineMath math="A = U \Sigma V^T" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 14.1-1 (2行3列の行列の特異値分解)">
                <p className="leading-relaxed">
                    <InlineMath math="m \neq n" /> の例として、
                </p>
                <BlockMath math="A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}" />
                <p className="leading-relaxed">
                    の特異値分解を考える。まず <InlineMath math="A^T A" /> を計算する。
                </p>
                <BlockMath math="A^T A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}" />
                <p className="leading-relaxed">
                    <InlineMath math="A^T A" /> の固有方程式 <InlineMath math="\det(A^T A - \lambda I) = 0" /> を解くと、
                    <InlineMath math="\lambda = 3, 1, 0" /> となる。よって、特異値は <InlineMath math="\sigma_1 = \sqrt{3}, \sigma_2 = 1" /> であり、<InlineMath math="\Sigma" /> は次のようになる。
                </p>
                <BlockMath math="\Sigma = \begin{pmatrix} \sqrt{3} & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}" />
                <p className="leading-relaxed">
                    それぞれの固有値に対する正規化された固有ベクトル（右特異ベクトル）を求めると、
                </p>
                <BlockMath math="V = \begin{pmatrix} \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}} \\ \frac{2}{\sqrt{6}} & 0 & -\frac{1}{\sqrt{3}} \\ \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{3}} \end{pmatrix}" />
                <p className="leading-relaxed">
                    左特異ベクトルは <InlineMath math="\bm{u}_i = \frac{1}{\sigma_i} A \bm{v}_i" /> (<InlineMath math="i=1,2" />) より、
                </p>
                <BlockMath math="\bm{u}_1 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{6}} \\ \frac{2}{\sqrt{6}} \\ \frac{1}{\sqrt{6}} \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}" />
                <BlockMath math="\bm{u}_2 = 1 \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} -\frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \end{pmatrix} = \begin{pmatrix} -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{pmatrix}" />
                <p className="leading-relaxed">
                    これらを並べたものが <InlineMath math="U" /> となる。
                </p>
                <BlockMath math="U = \begin{pmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{pmatrix}" />
                <p className="leading-relaxed">
                    以上により、特異値分解 <InlineMath math="A = U \Sigma V^T" /> が得られる。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§14.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>行列 <InlineMath math="A" /> の<strong>特異値</strong>とは、<InlineMath math="A^T A" /> の固有値の非負平方根 <InlineMath math="\sigma_i = \sqrt{\lambda_i}" /> のことである。</li>
                    <li>任意の <InlineMath math="m \times n" /> 実行列は、2つの直交行列 <InlineMath math="U, V" /> と特異値を並べた対角行列 <InlineMath math="\Sigma" /> を用いて <InlineMath math="A = U \Sigma V^T" /> と分解できる（<strong>特異値分解</strong>）。</li>
                    <li>特異値分解は正方行列に限らず長方行列にも適用でき、対角化よりも汎用性が高い。</li>
                </ul>
            </ContentBox>
        </section >
    );
}
