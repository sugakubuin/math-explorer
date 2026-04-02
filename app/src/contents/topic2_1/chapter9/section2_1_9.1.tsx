import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function OrthonormalSystems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で内積と直交性を定義したことで、ベクトル空間における最も「扱いやすい」理想的な基底の形を定義できるようになりました。<br />
                高校数学の平面ベクトルで「<InlineMath math="x" /> 軸方向の単位ベクトル <InlineMath math="\boldsymbol{e}_1" />」と「<InlineMath math="y" /> 軸方向の単位ベクトル <InlineMath math="\boldsymbol{e}_2" />」が最も計算しやすかったように、互いに直交していて、さらに長さが <InlineMath math="1" /> であるベクトルたちを基底として採用できれば、内積や斜影の計算が劇的にシンプルになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規直交系と正規直交基底</h2>

            <p>
                長さが <InlineMath math="1" /> のベクトルを「単位ベクトル（正規化されたベクトル）」と呼びました。<br />
                これと直交の概念を組み合わせます。
            </p>

            <ContentBox type="definition" title="Definition 9.1-1 （正規直交系 / Orthonormal System・正規直交基底 / Orthonormal Basis）">
                <p>
                    内積空間 <InlineMath math="V" /> 内のベクトルの集合 <InlineMath math="S = \{ \boldsymbol{u}_1, \boldsymbol{u}_2, \dots, \boldsymbol{u}_k \}" /> が以下の2つの条件を満たすとき、<InlineMath math="S" /> を<strong>正規直交系（Orthonormal System: ONS）</strong>と呼ぶ。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>正規性（Normality）：</strong> すべてのベクトルが単位ベクトルである。（<InlineMath math="\| \boldsymbol{u}_i \| = 1" />）</li>
                    <li><strong>直交性（Orthogonality）：</strong> 異なるベクトル同士は互いに直交する。（<InlineMath math="\langle \boldsymbol{u}_i, \boldsymbol{u}_j \rangle = 0 \quad (i \neq j)" />）</li>
                </ol>
                <p>
                    これを「クロネッカーのデルタ <InlineMath math="\delta_{ij}" />」を用いて一つの式でシンプルに表すことができる。
                </p>
                <BlockMath math="\langle \boldsymbol{u}_i, \boldsymbol{u}_j \rangle = \delta_{ij} = \begin{cases} 1 & (i = j) \\ 0 & (i \neq j) \end{cases}" />
                <p className="mt-4">
                    さらに、正規直交系 <InlineMath math="S" /> が空間 <InlineMath math="V" /> 全体の基底となっている（<InlineMath math="V" /> を張る）とき、<InlineMath math="S" /> を <InlineMath math="V" /> の<strong>正規直交基底（Orthonormal Basis: ONB）</strong>と呼ぶ。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規直交基底の性質</h2>

            <p>
                「基底」と名乗るためには線形独立であることが必要ですが、実は正規直交系であれば「自ずと線形独立になる」という強力な性質があります。
            </p>

            <ContentBox type="theorem" title="Proposition 9.1-1 （正規直交系は常に線形独立）">
                <p>
                    内積空間 <InlineMath math="V" /> における任意の正規直交系 <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_k \}" /> は、必ず<strong>線形独立（一次独立）</strong>である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    線形独立の定義に従い、零ベクトルを作るスカラーの線形結合を考える。
                </p>
                <BlockMath math="c_1\boldsymbol{u}_1 + c_2\boldsymbol{u}_2 + \dots + c_k\boldsymbol{u}_k = \boldsymbol{0}" />
                <p>
                    この両辺に対して、ある特定のベクトル <InlineMath math="\boldsymbol{u}_i" /> との内積をとる。<br />
                    内積の線形性（スカラー倍と和の分離）を用いると、
                </p>
                <BlockMath math="\left\langle \sum_{j=1}^k c_j\boldsymbol{u}_j, \boldsymbol{u}_i \right\rangle = \langle \boldsymbol{0}, \boldsymbol{u}_i \rangle" />
                <BlockMath math="\sum_{j=1}^k c_j \langle \boldsymbol{u}_j, \boldsymbol{u}_i \rangle = 0" />
                <p>
                    ここで正規直交系の性質 <InlineMath math="\langle \boldsymbol{u}_j, \boldsymbol{u}_i \rangle = \delta_{ji}" /> を適用する。<br />
                    <InlineMath math="j \neq i" /> の項はすべて直交性により <InlineMath math="0" /> となって消滅し、<InlineMath math="j = i" /> の項だけが正規性により <InlineMath math="1" /> となって残る。
                </p>
                <BlockMath math="c_i \langle \boldsymbol{u}_i, \boldsymbol{u}_i \rangle = c_i \cdot 1 = c_i" />
                <p>
                    したがって、左辺は単に <InlineMath math="c_i" /> となり、<InlineMath math="c_i = 0" /> が導かれる。<br />
                    これはすべての <InlineMath math="i \in \{1, \dots, k\}" /> について成り立つため、<InlineMath math="c_1 = c_2 = \dots = c_k = 0" /> しかあり得ない。よって正規直交系は線形独立である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <p className="mt-8">
                正規直交基底の最大のメリットは、<strong>「あるベクトルが各基底方向にどれだけの成分（座標）を持っているか」を、内積を1回計算するだけで完璧に抽出できる</strong>という点にあります。<br />
                連立方程式を解く必要は一切ありません。
            </p>

            <ContentBox type="theorem" title="Proposition 9.1-2 （フーリエ係数による座標表示）">
                <p>
                    有限次元内積空間 <InlineMath math="V" /> の正規直交基底 <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_n \}" /> が与えられたとする。<br />
                    このとき、任意のベクトル <InlineMath math="\boldsymbol{v} \in V" /> は、この基底の線形結合として次のように一意に展開できる。
                </p>
                <BlockMath math="\boldsymbol{v} = \sum_{i=1}^n \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle \boldsymbol{u}_i" />
                <p>
                    各基底に対する係数 <InlineMath math="c_i = \langle \boldsymbol{v}, \boldsymbol{u}_i \rangle" /> を、基底 <InlineMath math="\{ \boldsymbol{u}_i \}" /> に対する <InlineMath math="\boldsymbol{v}" /> の<strong>フーリエ係数（Fourier Coefficient）</strong>と呼び、この展開を一般化されたフーリエ展開と解釈することができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_n \}" /> は基底であるため、任意の <InlineMath math="\boldsymbol{v}" /> は何らかのスカラー <InlineMath math="c_1, \dots, c_n" /> を用いて一意に線形結合で表すことができる。
                </p>
                <BlockMath math="\boldsymbol{v} = c_1\boldsymbol{u}_1 + c_2\boldsymbol{u}_2 + \dots + c_n\boldsymbol{u}_n" />
                <p>
                    Proposition 9.1-1 の証明と全く同じ計算手法を用いる。<br />
                    両辺に対してベクトル <InlineMath math="\boldsymbol{u}_i" /> との内積をとる。
                </p>
                <BlockMath math="\langle \boldsymbol{v}, \boldsymbol{u}_i \rangle = \left\langle \sum_{j=1}^n c_j\boldsymbol{u}_j, \boldsymbol{u}_i \right\rangle" />
                <BlockMath math="\langle \boldsymbol{v}, \boldsymbol{u}_i \rangle = \sum_{j=1}^n c_j \langle \boldsymbol{u}_j, \boldsymbol{u}_i \rangle" />
                <p>
                    再び直交性により <InlineMath math="j \neq i" /> の項はすべて <InlineMath math="0" /> となり、正規性により <InlineMath math="\langle \boldsymbol{u}_i, \boldsymbol{u}_i \rangle = 1" /> となるため、右辺に残るのは <InlineMath math="c_i" /> のみである。
                </p>
                <BlockMath math="\langle \boldsymbol{v}, \boldsymbol{u}_i \rangle = c_i" />
                <p>
                    よって、未知の係数 <InlineMath math="c_i" /> が、単純な内積計算 <InlineMath math="\langle \boldsymbol{v}, \boldsymbol{u}_i \rangle" /> だけで求められることが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="直交射影との関係">
                <p>
                    この公式における各項 <InlineMath math="\langle \boldsymbol{v}, \boldsymbol{u}_i \rangle \boldsymbol{u}_i" /> は、まさに前章の §8.5 で学んだ「1次元部分空間（<InlineMath math="\boldsymbol{u}_i" /> が張る直線）の上への<strong>直交射影</strong>」そのものです。<br />
                    つまり、正規直交基底による展開とは、「全体ベクトルを、互いに直交する各軸への影（直交射影）に分解して足し合わせる」という操作の集大成なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>長さが1かつ互いに直交するベクトルの組を<strong>正規直交系</strong>といい、それが空間全体を張るなら<strong>正規直交基底</strong>という（Definition 9.1-1）。</li>
                    <li>正規直交系は、直交性によって他ベクトルの成分の影響を排除できるため、自動的に線形独立になる（Proposition 9.1-1）。</li>
                    <li>正規直交基底を使えば、そのベクトルとの内積を取るだけで連立方程式を解かずに座標成分（<strong>フーリエ係数</strong>）を一発で抽出できる（Proposition 9.1-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
