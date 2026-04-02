import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DistributionsSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                物理学や工学では、「一点にのみ無限大の強さを持ち、積分すると 1 になる」デルタ関数や、定数関数のフーリエ変換といった概念が頻繁に登場します。これらは通常の関数の枠組み（<InlineMath math="L^1" /> や <InlineMath math="L^2" />）では厳密に定義できませんが、シュワルツ空間の双対空間である <b>テンパード超関数</b> を用いることで、数学的に正当な市民権を得ることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テンパード超関数の定義</h2>

            <p>
                超関数とは、関数そのものを点ごとの値として見るのではなく、テスト関数（シュワルツ関数）との「内積」の結果として定義される概念です。
            </p>

            <ContentBox type="definition" title="Definition 4.2-1 (テンパード超関数)">
                <p>
                    シュワルツ空間 <InlineMath math="\mathcal{S}(\mathbb{R})" /> 上の連続な線形汎関数の全体を <b>テンパード超関数</b> の空間と呼び、<InlineMath math="\mathcal{S}'(\mathbb{R})" /> と記す。
                    超関数 <InlineMath math="T \in \mathcal{S}'" /> がテスト関数 <InlineMath math="\phi \in \mathcal{S}" /> に対して返す値を <InlineMath math="\langle T, \phi \rangle" /> と表記する。
                </p>
            </ContentBox>

            <p>
                通常の <InlineMath math="L^1" /> 関数 <InlineMath math="f" /> は、<InlineMath math="\langle f, \phi \rangle = \int f(x)\phi(x)dx" /> と定めることで、テンパード超関数の一つとみなすことができます。
            </p>

            <ContentBox type="definition" title="Definition 4.2-2 (超関数のフーリエ変換)">
                <p>
                    テンパード超関数 <InlineMath math="T \in \mathcal{S}'" /> のフーリエ変換 <InlineMath math="\hat{T}" /> を、任意のテスト関数 <InlineMath math="\phi \in \mathcal{S}" /> に対して次のように定義する：
                </p>
                <BlockMath math="\langle \hat{T}, \phi \rangle = \langle T, \hat{\phi} \rangle" />
                <p>
                    この定義は、テスト関数の世界での自己同型性（Theorem 4.1-3）があるからこそ、矛盾なく機能します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">デルタ関数とそのフーリエ変換</h2>

            <p>
                超関数の枠組みにおいて、最も重要な役割を果たすのがディラックのデルタ関数です。
            </p>

            <ContentBox type="definition" title="Definition 4.2-3 (ディラックのデルタ関数)">
                <p>
                    テスト関数 <InlineMath math="\phi" /> に対し、原点での値 <InlineMath math="\phi(0)" /> を割り当てる汎関数を <b>デルタ関数</b>（インパルス）と呼ぶ。
                </p>
                <BlockMath math="\langle \delta, \phi \rangle = \phi(0)" />
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-1 (デルタ関数と定数列の変換ペア)">
                <p>
                    デルタ関数のフーリエ変換を計算すると、すべてのテスト関数に対して <InlineMath math="\langle \hat{\delta}, \phi \rangle = \langle \delta, \hat{\phi} \rangle = \hat{\phi}(0) = \int \phi(x)dx = \langle 1, \phi \rangle" /> となるため、
                </p>
                <BlockMath math="\hat{\delta} = 1 \quad （すべての周波数を等しく含む白色雑音）" />
                <p>
                    が得られます。逆に、定数関数 1 のフーリエ変換は、デルタ関数のスカラー倍となります。
                </p>
                <BlockMath math="\hat{1} = 2\pi \delta \quad （直流成分が原点に集中するスペクトル）" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">超関数の微分</h2>

            <p>
                超関数の世界では、不連続な関数であっても「超関数の意味で」の微分が常に定義可能です。
            </p>

            <ContentBox type="definition" title="Definition 4.2-4 (超関数の微分)">
                <p>
                    超関数 <InlineMath math="T" /> の導関数 <InlineMath math="T'" /> を次のように定義する：
                </p>
                <BlockMath math="\langle T', \phi \rangle = -\langle T, \phi' \rangle" />
                <p>
                    これは部分積分に基づいた自然な拡張です。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (ヘヴィサイド関数とデルタ)">
                <p>
                    不連続関数であるヘヴィサイド関数 <InlineMath math="H(x) = \mathbf{1}_{x > 0}" /> の微分はデルタ関数となります。
                </p>
                <BlockMath math="\langle H', \phi \rangle = -\int_0^\infty \phi'(x)dx = \phi(0) = \langle \delta, \phi \rangle \implies H' = \delta" />
                <p>
                    これは、不連続点でのジャンプが微分によって「無限に鋭いスパイク（インパルス）」として捉えられることを示しており、信号処理におけるインパルス応答理論の数学的基礎となっています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="工学的・物理的意義">
                <p>
                    テンパード超関数の理論により、以前は「近似的に」しか扱えなかったインパルス、サンプリング、直流、さらには多次元の格子点といった概念を、厳密な数学的対象としてフーリエ解析の枠組みに取り込むことが可能になりました。現代のデジタル信号処理（DSP）の理論は、この超関数の土台なしには成立しません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>テンパード超関数 <InlineMath math="\mathcal{S}'" /> は、テスト関数への線形写像として関数概念を拡張したものである。</li>
                    <li>ディラックのデルタ関数 <InlineMath math="\delta" /> のフーリエ変換は定数関数 <InlineMath math="1" /> であり、逆もまた然りである。</li>
                    <li>超関数の微分は部分積分に基づいて定義され、不連続な関数の微分（ヘヴィサイド関数など）が正当化される。</li>
                    <li>この枠組みにより、<InlineMath math="L^1" /> や <InlineMath math="L^2" /> に属さない物理的・工学的信号を厳密に扱えるようになる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
