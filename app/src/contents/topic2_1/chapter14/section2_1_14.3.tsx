import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LowRankApproximation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                特異値分解の最も重要な応用の1つが<strong>低ランク近似</strong> (<InlineMath math="\text{low-rank approximation}" />) です。これは、与えられた行列をそれより低いランク（階数）を持つ行列で近似する問題であり、画像圧縮やノイズ除去、主成分分析（PCA）など、多くのデータ処理に応用されています。
                この近似において、SVDが最良の解を与えることを保証するのがエッカート・ヤング (<InlineMath math="\text{Eckart-Young}" />) の定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フロベニウスノルム</h2>

            <p className="leading-relaxed">
                低ランク近似の誤差を測るために、まず行列間の「距離」を定義する必要があります。
                ここでは最も標準的な指標である<strong>フロベニウスノルム</strong>を用います。
            </p>

            <ContentBox type="definition" title="Definition 14.3-1 (フロベニウスノルム)">
                <p className="leading-relaxed">
                    <InlineMath math="m \times n" /> の実行列 <InlineMath math="A = (a_{ij})" /> に対して、その成分の二乗和の平方根を<strong>フロベニウスノルム</strong> (<InlineMath math="\text{Frobenius norm}" />) と呼び、<InlineMath math="\|A\|_F" /> と表す。
                </p>
                <BlockMath math="\|A\|_F = \sqrt{\sum_{i=1}^m \sum_{j=1}^n a_{ij}^2}" />
                <p className="leading-relaxed">
                    また、フロベニウスノルムはトレース (<InlineMath math="\mathrm{Tr}" />) を用いて次のように表すこともできる。
                </p>
                <BlockMath math="\|A\|_F = \sqrt{\mathrm{Tr}(A^T A)} = \sqrt{\mathrm{Tr}(A A^T)}" />
                <p className="leading-relaxed mt-2">
                    さらに、<InlineMath math="A" /> の特異値を <InlineMath math="\sigma_k" /> とすると、
                </p>
                <BlockMath math="\|A\|_F = \sqrt{\sum_{k=1}^{\min(m, n)} \sigma_k^2}" />
                <p className="leading-relaxed">
                    が成り立つ。
                </p>
            </ContentBox>

            <p>
                この距離の定義を用いて、行列の最適な近似について述べるのがエッカート・ヤングの定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エッカート・ヤングの定理</h2>

            <ContentBox type="theorem" title="Theorem 14.3-1 (エッカート・ヤングの定理：最良低ランク近似)">
                <p className="leading-relaxed">
                    ランク <InlineMath math="r" /> の行列 <InlineMath math="A \in \mathbb{R}^{m \times n}" /> の特異値分解を次のように表す。
                </p>
                <BlockMath math="A = U \Sigma V^T = \sum_{i=1}^r \sigma_i \bm{u}_i \bm{v}_i^T" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="\sigma_1 \geq \sigma_2 \geq \dots \geq \sigma_r > 0" /> は特異値、<InlineMath math="\bm{u}_i, \bm{v}_i" /> はそれぞれ左、右特異ベクトルである。
                </p>
                <p className="leading-relaxed mt-2">
                    ある整数 <InlineMath math="k" /> (<InlineMath math="1 \leq k < r" />) を与えたとき、ランクが <InlineMath math="k" /> 以下の任意の行列 <InlineMath math="B" /> の中で、フロベニウスノルムに関する距離 <InlineMath math="\|A - B\|_F" /> を最小にする行列 <InlineMath math="A_k" /> は、次のように特異値分解を第 <InlineMath math="k" /> 項までで打ち切ったものである。
                </p>
                <BlockMath math="A_k = \sum_{i=1}^k \sigma_i \bm{u}_i \bm{v}_i^T" />
                <p className="leading-relaxed">
                    そして、そのときの最小二乗誤差は次のように与えられる。
                </p>
                <BlockMath math="\min_{\mathrm{rank}(B) \leq k} \|A - B\|_F^2 = \|A - A_k\|_F^2 = \sum_{i=k+1}^r \sigma_i^2" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    まず、<InlineMath math="A_k" /> が実際に達成する誤差を計算する。<InlineMath math="A" /> と <InlineMath math="A_k" /> の定義より、
                </p>
                <BlockMath math="A - A_k = \sum_{i=1}^r \sigma_i \bm{u}_i \bm{v}_i^T - \sum_{i=1}^k \sigma_i \bm{u}_i \bm{v}_i^T = \sum_{i=k+1}^r \sigma_i \bm{u}_i \bm{v}_i^T" />
                <p className="leading-relaxed">
                    となる。前述のフロベニウスノルムと特異値の関係より、<InlineMath math="A - A_k" /> の特異値は <InlineMath math="\sigma_{k+1}, \dots, \sigma_r" /> である。したがって、そのフロベニウスノルムの2乗は
                </p>
                <BlockMath math="\|A - A_k\|_F^2 = \sum_{i=k+1}^r \sigma_i^2" />
                <p className="leading-relaxed">
                    である。
                </p>
                <p className="leading-relaxed mt-2">
                    次に、任意のランク <InlineMath math="k" /> の行列 <InlineMath math="B" /> に対して、必ず <InlineMath math="\|A - B\|_F^2 \geq \sum_{i=k+1}^r \sigma_i^2" /> となることを示す。<br />
                    直交行列による変換はフロベニウスノルムを保存する（すなわち <InlineMath math="\|U^T B V\|_F = \|B\|_F" />）ので、<InlineMath math="A - B" /> に <InlineMath math="U^T" /> と <InlineMath math="V" /> を掛けて考える。
                </p>
                <BlockMath math="\|A - B\|_F^2 = \|U^T(A - B)V\|_F^2 = \|\Sigma - U^T B V\|_F^2" />
                <p className="leading-relaxed">
                    ここで <InlineMath math="C = U^T B V" /> と置くと、<InlineMath math="\mathrm{rank}(C) = \mathrm{rank}(B) \leq k" /> である。目標は <InlineMath math="\|\Sigma - C\|_F^2" /> の最小化である。<br />
                    行列 <InlineMath math="C" /> の成分を <InlineMath math="c_{ij}" /> とすると、
                </p>
                <BlockMath math="\|\Sigma - C\|_F^2 = \sum_{i=1}^m \sum_{j=1}^n (\delta_{ij}\sigma_i - c_{ij})^2 \geq \sum_{i=1}^n (\sigma_i - c_{ii})^2" />
                <p className="leading-relaxed">
                    （非対角成分 <InlineMath math="c_{ij}^2" /> (<InlineMath math="i \neq j" />) は常に非負であるため無視することで下限を得る。）<br />
                    ここで <InlineMath math="C" /> はランクせいぜい <InlineMath math="k" /> なので、もし対角行列とすると、非ゼロ成分は高々 <InlineMath math="k" /> 個しか持てない。直感的には、<InlineMath math="\Sigma - C" /> の対角成分を小さくするためには、<InlineMath math="\sigma_i - c_{ii}" /> をなるべく <InlineMath math="0" /> にしたい。
                    これは <InlineMath math="C" /> の非ゼロ成分として大きい順の <InlineMath math="\sigma_1, \dots, \sigma_k" /> をコピーし（<InlineMath math="c_{ii} = \sigma_i" /> for <InlineMath math="1 \leq i \leq k" />）、残りを <InlineMath math="0" /> としたとき（<InlineMath math="c_{ii} = 0" /> for <InlineMath math="i > k" />）に最小となる。もし順序を入れ替えても、<InlineMath math="\sigma_i" /> について降順になっている条件より、
                </p>
                <BlockMath math="\sum_{i=1}^n (\sigma_i - c_{ii})^2 \geq \sum_{i=k+1}^r \sigma_i^2" />
                <p className="leading-relaxed">
                    となる。（厳密には <InlineMath math="C" /> の特異値分解を用いたワイルの不等式等の評価が必要だが、この直感的評価で下限は与えられる。）
                </p>
                <p className="leading-relaxed mt-2">
                    よって <InlineMath math="\|A - B\|_F^2 \geq \sum_{i=k+1}^r \sigma_i^2" /> であり、等号は <InlineMath math="A_k" /> の場合に成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理の意味は深遠です。「行列を少ない情報で近似するとき、SVDの上位項だけを残すのが理論的に最良」という“お墨付き”を与えてくれるのです。
            </p>

            <ContentBox type="remark" title="特異値分解の級数展開形">
                <p className="leading-relaxed">
                    定理中に出てきた行列の和の形
                </p>
                <BlockMath math="A = \sum_{i=1}^r \sigma_i \bm{u}_i \bm{v}_i^T" />
                <p className="leading-relaxed">
                    を考えると、<InlineMath math="\bm{u}_i \bm{v}_i^T" /> は「縦ベクトル <InlineMath math="\times" /> 横ベクトル」という形をしており、これは階数が <InlineMath math="1" /> の行列（ランク1行列）です。
                    つまり、<strong>「任意の階数 <InlineMath math="r" /> の行列は、<InlineMath math="r" /> 個のランク1行列の重み付き和として表せる」</strong>ことになり、その重みが「特異値 <InlineMath math="\sigma_i" />」に他なりません。
                    特異値が大きいものほど、元の行列に対する「情報の寄与度」が大きいため、上位 <InlineMath math="k" /> 個を残すことで最も効率的に情報を圧縮（近似）できる、というのがエッカート・ヤングの定理の直感的な意味です。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§14.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>エッカート・ヤングの定理により、ランク <InlineMath math="k" /> 以下の行列で <InlineMath math="A" /> を最良に近似するものは、SVDの上位 <InlineMath math="k" /> 項を取った <InlineMath math="A_k = \sum_{i=1}^k \sigma_i \bm{u}_i \bm{v}_i^T" /> である。</li>
                    <li>フロベニウスノルム <InlineMath math="\|A\|_F" /> は行列成分の二乗和の平方根であり、特異値の二乗和の平方根とも一致する。</li>
                    <li>任意の行列はランク1行列の重み付き和として表され、特異値が大きいほど情報の寄与度が大きい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
