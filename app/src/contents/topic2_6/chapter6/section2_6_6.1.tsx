import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MatrixForm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                物理現象や工学的システムでは、単独の方程式ではなく、複数の未知関数が互いに影響を及ぼし合う方程式の集まり（システム）を扱うことが多くあります。
                これらを効率的に解析するために、線形代数学の「行列」と「ベクトル」を用いた記述法を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">1 階連立線形微分方程式系</h2>

            <p>
                未知関数 <InlineMath math="y_1(x), \dots, y_n(x)" /> に関する 1 階の連立系を考えます。
            </p>

            <ContentBox type="definition" title="Definition 6.1-1 (1階連立線形方程式系)">
                <p>
                    ベクトル <InlineMath math="\mathbf{y}(x) = (y_1(x), \dots, y_n(x))^\top" /> について、次の方程式を <strong>1 階連立線形微分方程式系</strong> と呼ぶ：
                    <BlockMath math="\mathbf{y}'(x) = A(x)\mathbf{y}(x) + \mathbf{b}(x)" />
                    ここで <InlineMath math="A(x)" /> は <InlineMath math="n \times n" /> 行列、 <InlineMath math="\mathbf{b}(x)" /> は非斉次項を表すベクトルである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="高階方程式から 1 階連立形への変換">
                <p>
                    <InlineMath math="n" /> 階の線形微分方程式 <InlineMath math="y^{(n)} + p_{n-1}y^{(n-1)} + \dots + p_0 y = q" /> は、新しい未知変数を
                    <BlockMath math="u_1 = y, \ u_2 = y', \ \dots, \ u_n = y^{(n-1)}" />
                    と置くことで、必ず 1 階の連立系に書き換えることができる。
                    この事実は、単独の高階方程式と連立系の理論が本質的に同一であることを示している。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.1-1 (変換の具体例)">
                <p><strong>問題：</strong> <InlineMath math="y'' - y' - 2y = e^x" /> を行列形式に変換せよ。</p>
                <div className="mt-4 space-y-2">
                    <p>
                        <InlineMath math="u_1 = y, \ u_2 = y'" /> と置くと、
                        <BlockMath math="\begin{cases} u_1' = u_2 \\ u_2' = y'' = 2y + y' + e^x = 2u_1 + u_2 + e^x \end{cases}" />
                        これを行列形式で書くと：
                        <BlockMath math="\begin{pmatrix} u_1 \\ u_2 \end{pmatrix}' = \begin{pmatrix} 0 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} u_1 \\ u_2 \end{pmatrix} + \begin{pmatrix} 0 \\ e^x \end{pmatrix}" />
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本解行列と一般解</h2>

            <p>
                斉次連立系 <InlineMath math="\mathbf{y}' = A(x)\mathbf{y}" /> の一般解も、単独の線形方程式と同様に一次独立な解の重ね合わせで表現されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (一般解の構成)">
                <p>
                    斉次連立系 <InlineMath math="\mathbf{y}' = A\mathbf{y}" /> の <InlineMath math="n" /> 個の一次独立な解を <InlineMath math="\mathbf{\phi}_1, \dots, \mathbf{\phi}_n" /> としたとき、これらを並べてできる行列
                    <BlockMath math="\Phi(x) = (\mathbf{\phi}_1(x) \ | \ \dots \ | \ \mathbf{\phi}_n(x))" />
                    を<strong>基本解行列 (fundamental matrix)</strong> と呼ぶ。斉次系の一般解は、任意定数ベクトル <InlineMath math="\mathbf{c}" /> を用いて
                    <BlockMath math="\mathbf{y}(x) = \Phi(x) \mathbf{c}" />
                    と表される。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各解ベクトル <InlineMath math="\mathbf{\phi}_k" /> が <InlineMath math="\mathbf{\phi}_k' = A\mathbf{\phi}_k" /> を満たすことから、それらを列として並べた行列 <InlineMath math="\Phi" /> は行列微分方程式
                    <BlockMath math="\Phi' = (\mathbf{\phi}_1' \ | \ \dots \ | \ \mathbf{\phi}_n') = (A\mathbf{\phi}_1 \ | \ \dots \ | \ A\mathbf{\phi}_n) = A\Phi" />
                    を満たす。
                    ここで、任意の定数ベクトル <InlineMath math="\mathbf{c}" /> に対して <InlineMath math="\mathbf{y} = \Phi\mathbf{c}" /> と置くと、
                    <BlockMath math="\mathbf{y}' = (\Phi\mathbf{c})' = \Phi'\mathbf{c} = (A\Phi)\mathbf{c} = A(\Phi\mathbf{c}) = A\mathbf{y}" />
                    となり、これは斉次連立系を満たす。解の独立性から基本解行列は正則（行列式が 0 でない）であるため、任意の初期値に対して一意に定数ベクトル <InlineMath math="\mathbf{c}" /> を決定でき、これが一般解となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ロンスキアンの拡張">
                <p>
                    連立系におけるロンスキアンは、基本解行列の行列式 <InlineMath math="W(x) = \det \Phi(x)" /> として定義される。
                    これが 0 でないことが、解のセットが基本解系をなす（一次独立である）ための必要十分条件である。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>行列表記</strong>： 複雑な連立系を <InlineMath math="\mathbf{y}' = A\mathbf{y}" /> というシンプルな一本の式に集約できる。</li>
                    <li><strong>階数の統一</strong>： どんなに高階の方程式でも、変数を増やすことで 1 階のシステムとして統一的に扱える。</li>
                    <li><strong>解の構造</strong>： 特性根などの概念を行列の「固有値」へと拡張していく準備が整った。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
