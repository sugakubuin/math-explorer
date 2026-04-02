import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SpectralTheoremSymmetric() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までの準備により、「実対称行列の固有値はすべて実数になる（§11.1）」ことと、「異なる固有値に属する固有ベクトルは互いに直交する（§11.2）」ことが証明されました。<br />
                これら2つの強力な事実を結びつけることで、線形代数学における至宝とも言える<strong>「スペクトル定理（Spectral Theorem）」</strong>がその姿を現します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル定理（実対称行列版）</h2>

            <p>
                一般の行列が対角化可能であるためには「代数的重複度と幾何的重複度が一致する」などの複雑な条件をクリアする必要がありました。<br />
                しかし、実対称行列（自己随伴作用素）という完璧なバランスを持つ行列に対しては、そのような心配は一切無用です。どんな実対称行列であっても、必ず<strong>直交行列</strong>（ユニタリ作用素）を用いて対角化することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 11.3-1 （実対称行列のスペクトル定理：直交対角化可能性）">
                <p>
                    任意の <InlineMath math="n \times n" /> の実対称行列 <InlineMath math="A" /> は、必ず<strong>直交対角化可能（Orthogonally Diagonalizable）</strong>である。<br />
                    すなわち、ある直交行列 <InlineMath math="Q" /> （<InlineMath math="Q^{-1} = Q^T" />）と、対角成分がすべて実数である対角行列 <InlineMath math="\Lambda" /> が存在して、次を満たす。
                </p>
                <BlockMath math="Q^{-1} A Q = Q^T A Q = \Lambda" />
                <p>
                    このとき、<InlineMath math="\Lambda" /> の対角成分は <InlineMath math="A" /> の固有値（重複を含めて <InlineMath math="n" /> 個）であり、<InlineMath math="Q" /> の各列はそれらに対応する<strong>正規直交な固有ベクトル</strong>からなる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Outline)">
                <p>
                    この定理の完全な証明は「数学的帰納法」を用いて厳密に行われますが、ここではそのエッセンス（これまで学んだ知識の集大成）を概観します。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>固有値・固有ベクトルの存在：</strong><br />
                        代数学の基本定理（および §11.1 の実数性の証明）により、実対称行列 <InlineMath math="A" /> は必ず少なくとも1つの実固有値 <InlineMath math="\lambda_1" /> と、実固有ベクトル <InlineMath math="\boldsymbol{x}_1 \in \mathbb{R}^n" /> を持つ。<br />
                        この <InlineMath math="\boldsymbol{x}_1" /> を長さ1に正規化して <InlineMath math="\boldsymbol{v}_1" /> （第一の正規直交基底ベクトル）とする。
                    </li>
                    <li>
                        <strong>直交補空間の不変性（帰納法のステップ）：</strong><br />
                        空間全体 <InlineMath math="\mathbb{R}^n" /> のうち、<InlineMath math="\boldsymbol{v}_1" /> と直交する部分空間（直交補空間）を <InlineMath math="W = \boldsymbol{v}_1^\perp" /> とする。<br />
                        <InlineMath math="A" /> が対称行列であることから、<strong>「<InlineMath math="W" /> のベクトルを <InlineMath math="A" /> で変換した先も、必ず <InlineMath math="W" /> の中に留まる（<InlineMath math="A" />-不変部分空間である）」</strong>という強力な性質が証明できる。<br />
                        （※ なぜなら、<InlineMath math="\boldsymbol{w} \in W" /> を <InlineMath math="A" /> で変換した <InlineMath math="A\boldsymbol{w}" /> と <InlineMath math="\boldsymbol{v}_1" /> の内積をとると、<InlineMath math="\langle A\boldsymbol{w}, \boldsymbol{v}_1 \rangle = \langle \boldsymbol{w}, A^T\boldsymbol{v}_1 \rangle = \langle \boldsymbol{w}, A\boldsymbol{v}_1 \rangle = \langle \boldsymbol{w}, \lambda_1\boldsymbol{v}_1 \rangle = \lambda_1 \langle \boldsymbol{w}, \boldsymbol{v}_1 \rangle = 0" /> となり、<InlineMath math="A\boldsymbol{w}" /> も <InlineMath math="\boldsymbol{v}_1" /> と直交し続けるため。）
                    </li>
                    <li>
                        <strong>低次元空間での再帰：</strong><br />
                        これにより、以後の議論は <InlineMath math="\boldsymbol{v}_1" /> を完全に無視して、次元が一つ下がった直交補空間 <InlineMath math="W" /> （<InlineMath math="n-1" /> 次元）の中だけで完結できる。<br />
                        <InlineMath math="W" /> の中でも再び <InlineMath math="A" /> の固有値と固有ベクトルが見つかるので、これを正規化して <InlineMath math="\boldsymbol{v}_2" /> とする。<br />
                        これを <InlineMath math="n" /> 回繰り返すことで、空間全体の次元を完全にカバーする <InlineMath math="n" /> 個の正規直交基底（固有ベクトル） <InlineMath math="\{ \boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n \}" /> が必ず構築できる。
                    </li>
                    <li>
                        <strong>直交行列の構築：</strong><br />
                        得られた正規直交な固有ベクトルを列として並べた行列を <InlineMath math="Q = (\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_n)" /> とすれば、列ベクトルが正規直交系であるため <InlineMath math="Q" /> は自動的に直交行列（<InlineMath math="Q^T Q = I" />）となる。<br />
                        そして <InlineMath math="AQ = A(\boldsymbol{v}_1, \dots, \boldsymbol{v}_n) = (\lambda_1\boldsymbol{v}_1, \dots, \lambda_n\boldsymbol{v}_n) = Q\Lambda" /> が成り立つ。<br />
                        両辺の左から <InlineMath math="Q^{-1} = Q^T" /> を掛ければ、見事に <InlineMath math="Q^T A Q = \Lambda" /> が得られる。
                        
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="スペクトル定理の幾何学的・物理的意味">
                <p>
                    「対角化」とは元の複雑な行列を、独立した「各軸方向への単なる定数倍」へと分解することでした。<br />
                    そして「直交行列による対角化（<InlineMath math="Q^T A Q" />）」とは、元の空間を切り刻むことなく<strong>「そのまま全体を回転（または鏡映）させる座標変換」</strong>だけで、行列を最もシンプルな対角行列の形にできることを意味します。
                </p>
                <p>
                    つまりスペクトル定理は、<strong>「どんな実対称行列であっても、空間の座標軸をうまく回転（直交変換）させてやるだけで、すべての成分が各軸方向への単純な『伸び縮み（固有値倍）』に分解できる」</strong>という、驚くほど美しい事実を述べているのです。<br />
                    （これは、後で学ぶ主成分分析（PCA）の数学的基礎そのものです。）
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§11.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実対称行列は、重解を持つ持たないに関わらず、必ず<strong>直交行列を用いて対角化</strong>することができる（Theorem 11.3-1：スペクトル定理）。</li>
                    <li>この対角化に使われる直交行列 <InlineMath math="Q" /> の各列は、元の行列の「正規化された互いに直交する固有ベクトル」である。</li>
                    <li>スペクトル定理により、対称行列による変換は「座標系の回転」＋「各軸方向への独立した伸縮」として完全に幾何学的に理解できるようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
