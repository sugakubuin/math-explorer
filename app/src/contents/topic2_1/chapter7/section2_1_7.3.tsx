import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function JordanNormalFormCalculation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「どんな行列もジョルダン標準形に変形できる」ということは分かりましたが、では「具体的にどのような形のジョルダン細胞が、何個ずつ並ぶのか」はどのように調べればよいのでしょうか。<br />
                その鍵を握るのが<strong>「最小多項式（Minimal Polynomial）」</strong>という新しい多項式の概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最小多項式</h2>

            <p>
                特性多項式 <InlineMath math="\Phi_A(t)" /> は「<InlineMath math="t" /> に代入して <InlineMath math="0" /> となる等式（特性方程式）」を与える多項式でしたが、ここでは「変数 <InlineMath math="t" /> の代わりに<strong>行列 <InlineMath math="A" /> 自身を代入して零行列になる多項式</strong>」を考えます。
            </p>

            <ContentBox type="definition" title="Definition 7.3-1 （最小多項式 / Minimal Polynomial）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> に対して、多項式 <InlineMath math="m(t)" /> に <InlineMath math="A" /> を代入した結果が「零行列（すべての成分が <InlineMath math="0" /> の行列）」になるとき、すなわち <InlineMath math="m(A) = O" /> を満たすとき、<InlineMath math="m(t)" /> を「<InlineMath math="A" /> の零化多項式」と呼ぶ。
                </p>
                <p>
                    そのような零化多項式の中で、<strong>次数が最も低く、かつモニック（最高次の係数が <InlineMath math="1" />）</strong>である一意の多項式 <InlineMath math="\mu_A(t)" /> を、行列 <InlineMath math="A" /> の<strong>最小多項式</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="mt-4">
                ところで、特性多項式 <InlineMath math="\Phi_A(t)" /> と最小多項式 <InlineMath math="\mu_A(t)" /> の間には、線形代数学における最も有名な定理の一つである極めて重大な関係があります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 （ケーリー・ハミルトンの定理 / Cayley-Hamilton Theorem）">
                <p>
                    任意の正方行列 <InlineMath math="A" /> は、自分自身の特性多項式 <InlineMath math="\Phi_A(t) = \det(tI - A)" /> の零点になる。すなわち、
                </p>
                <BlockMath math="\Phi_A(A) = O \quad \text{（零行列）}" />
                <p>
                    が成り立つ。<br />
                    （言い換えると、特性多項式はつねに最小多項式で割り切れる。<InlineMath math="\Phi_A(t) = \mu_A(t) q(t)" /> となる多項式 <InlineMath math="q(t)" /> が存在する。）
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    ※ 誤って「<InlineMath math="\det(A \cdot I - A) = \det(O) = 0" />」と代入して証明したと錯覚しがちですが、行列式の中の <InlineMath math="t" /> はスカラーであるのに対し、外に飛び出した多項式に代入する <InlineMath math="A" /> は行列であるため、この証明は完全に誤りです。厳密な証明は余因子行列などを用いる必要があります。（ここでは長くなるため概略とし、詳細な証明は割愛します。）
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算手順</h2>

            <p>
                最小多項式 <InlineMath math="\mu_A(t)" /> は特性多項式 <InlineMath math="\Phi_A(t)" /> を割り切るため、最小多項式も <InlineMath math="\Phi_A(t)" /> と同じ因数（固有値を根とする因数）で構成されていることは明らかです。<br />
                実は、この<strong>「最小多項式の各因数のべき乗（何乗されているか）」が、まさにその固有値におけるジョルダン細胞の「最大サイズ」を表している</strong>のです。
            </p>

            <ContentBox type="remark" title="最小多項式を用いたジョルダン細胞の決定手順">
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>特性多項式を計算する：</strong><br />
                        <InlineMath math="\Phi_A(t) = \det(tI - A) = (t - \lambda_1)^{a_1} (t - \lambda_2)^{a_2} \dots" /> を求め、各固有値の「代数的重複度（<InlineMath math="a_i" />）」を特定する。<br />
                        <span className="text-sm text-slate-600 dark:text-slate-400">（<InlineMath math="\lambda_i" /> に対するすべてのジョルダン細胞のサイズの「合計」が <InlineMath math="a_i" /> になる。）</span>
                    </li>
                    <li>
                        <strong>幾何的重複度を計算する：</strong><br />
                        各固有値について <InlineMath math="(A - \lambda_i I)\boldsymbol{x} = \boldsymbol{0}" /> を解き、独立な固有ベクトルの数（幾何的重複度 <InlineMath math="g_i = \dim W(\lambda_i)" />）を求める。<br />
                        <span className="text-sm text-slate-600 dark:text-slate-400">（これが <InlineMath math="\lambda_i" /> に対するジョルダン細胞の「個数」を表す！）</span>
                    </li>
                    <li>
                        <strong>最小多項式を特定する：</strong><br />
                        <InlineMath math="A" /> を代入して零行列になる多項式の中で、最もべき乗の少ないものを探す。<br />
                        たとえば <InlineMath math="\mu_A(t) = (t - \lambda_1)^{m_1} (t - \lambda_2)^{m_2} \dots" /> であれば、この <InlineMath math="m_i" /> が <InlineMath math="\lambda_i" /> に対するジョルダン細胞の「最大サイズ」を表す。
                    </li>
                    <li>
                        <strong>個数、合計サイズ、最大サイズから形を決定する：</strong><br />
                        「合計サイズが <InlineMath math="a_i" />」「個数が <InlineMath math="g_i" />」「一番大きいブロックのサイズが <InlineMath math="m_i" />」という強力な3つのパズルピースを使って、細胞のサイズの組み合わせ（例：3次細胞1個と1次細胞2個、など）を一意に特定する。
                    </li>
                </ol>
                <p className="mt-4 text-sm font-bold text-blue-600 dark:text-blue-400">
                    ※ 3次や4次の行列であれば、たいてい(1)と(2)だけでパズルの答え（ジョルダン細胞の構成）が一つに絞られます。最小多項式の計算が必要になるのは、5次以上の複雑な行列の場合が多いです。
                </p>
            </ContentBox>


            <ContentBox type="example" title="サイズの決定パズル">
                <p>ある行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda = 3" /> について、以下の結果が得られたとします。</p>
                <ul className="list-disc pl-5 mt-2 mb-2 space-y-1 text-sm">
                    <li>代数的重複度が <InlineMath math="5" />（ジョルダン細胞のサイズの合計が5）</li>
                    <li>幾何的重複度が <InlineMath math="2" />（固有ベクトルが2本 ＝ ジョルダン細胞は2個）</li>
                </ul>
                <p>
                    合計サイズ5を2個のブロックに分ける方法は、整数の分割を考えると<br />
                    「<InlineMath math="4 + 1 = 5" />」か「<InlineMath math="3 + 2 = 5" />」<br />
                    の2パターンしかありません（ブロックは「4次と1次」か「3次と2次」のどちらか）。
                </p>
                <p>
                    ここで最小多項式を計算して、その因子が <InlineMath math="(t - 3)^3" />、つまり最大サイズが 3 だと判明したとします。<br />
                    これによって「4次と1次」の可能性が消え、ジョルダン細胞は「3次の細胞が1つと、2次の細胞が1つ（3+2）」であることが完全に特定できるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="A" /> を代入して零行列になる最も次数の低い多項式を<strong>最小多項式</strong>という（Definition 7.3-1）。特性多項式はこの一種である（Theorem 7.3-1）。</li>
                    <li>特性多項式（代数的重複度）は細胞の<strong>合計サイズ</strong>を教え、幾何的重複度は細胞の<strong>個数</strong>を教え、最小多項式は細胞の<strong>最大サイズ</strong>を教える。</li>
                    <li>これら3つの情報をパズルのように組み合わせることで、どのようなサイズのジョルダン細胞がいくつ並ぶのかを正確に決定することができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
