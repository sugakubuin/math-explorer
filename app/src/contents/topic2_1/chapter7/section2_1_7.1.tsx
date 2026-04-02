import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function GeneralizedEigenspaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章で見たように、行列 <InlineMath math="A" /> のある固有値 <InlineMath math="\lambda" /> において「幾何的重複度 <InlineMath math="<" /> 代数的重複度」となる場合、固有ベクトル（<InlineMath math="A\boldsymbol{v} = \lambda\boldsymbol{v}" /> を満たすベクトル）だけでは空間全体を張る基底を作ることができません。<br />
                対角化を諦めて「ジョルダン標準形」という次善の策を採用するためには、足りない分のベクトルを固有空間 <InlineMath math="W(\lambda) = \ker(A - \lambda I)" /> の外から補充してやる必要があります。そのために導入されるのが<strong>広義固有空間</strong>の概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">広義固有空間の定義</h2>

            <p>
                「<InlineMath math="A - \lambda I" /> を1回掛けて <InlineMath math="\boldsymbol{0}" /> になる空間」が通常の固有空間 <InlineMath math="\ker(A - \lambda I)" /> でした。<br />
                ベクトルが足りないなら、条件を少し緩めて「<InlineMath math="A - \lambda I" /> を2回、3回、…と<strong>何回か掛ければ <InlineMath math="\boldsymbol{0}" /> になる空間</strong>」へと探索範囲を広げます。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 （広義固有空間 / Generalized Eigenspace）">
                <p>
                    <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> とその固有値 <InlineMath math="\lambda" /> に対して、次のような部分空間の列を考える。
                </p>
                <BlockMath math="W_1(\lambda) = \ker(A - \lambda I)" />
                <BlockMath math="W_2(\lambda) = \ker((A - \lambda I)^2)" />
                <BlockMath math="\vdots" />
                <BlockMath math="W_k(\lambda) = \ker((A - \lambda I)^k)" />
                <p>
                    定義より、明らかに包含関係 <InlineMath math="W_1(\lambda) \subset W_2(\lambda) \subset W_3(\lambda) \subset \dots" /> が成り立つ。<br />
                    全体空間は有限次元（<InlineMath math="n" />次元）であるため、この拡大はある自然数 <InlineMath math="m" />（<InlineMath math="m \leq n" />）で必ず停止する。つまり <InlineMath math="W_m(\lambda) = W_{m+1}(\lambda) = \dots" /> となる。
                </p>
                <p>
                    この極限として得られる拡大がストップした部分空間 <InlineMath math="\ker((A - \lambda I)^n)" /> 全体を、固有値 <InlineMath math="\lambda" /> に属する<strong>広義固有空間（一般化固有空間）</strong>と呼び、<InlineMath math="\widetilde{W}(\lambda)" /> などと表す。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">広義固有空間の性質</h2>

            <p>
                通常の固有空間の次元（幾何的重複度）は代数的重複度に届かないことがありましたが、広義固有空間まで拡張すると、その次元は<strong>代数的重複度にぴったり一致</strong>するという非常に美しい定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.1-1 （広義固有空間の次元と代数的重複度）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> の特性多項式 <InlineMath math="\Phi_A(t)" /> が、相異なる複素固有値 <InlineMath math="\lambda_1, \dots, \lambda_k" /> を用いて
                </p>
                <BlockMath math="\Phi_A(t) = (t - \lambda_1)^{m_1} (t - \lambda_2)^{m_2} \cdots (t - \lambda_k)^{m_k}" />
                <p>
                    と因数分解されるとする（<InlineMath math="m_i" /> は各固有値の代数的重複度で、<InlineMath math="\sum m_i = n" />）。
                </p>
                <p>
                    このとき、各広義固有空間 <InlineMath math="\widetilde{W}(\lambda_i) = \ker((A - \lambda_i I)^n)" /> の次元は、必ずその固有値の代数的重複度 <InlineMath math="m_i" /> に等しい。
                </p>
                <BlockMath math="\dim \widetilde{W}(\lambda_i) = m_i" />
                <p>
                    さらに、全体空間 <InlineMath math="\mathbb{C}^n" /> はこれらの広義固有空間の直和に分解される。
                </p>
                <BlockMath math="\mathbb{C}^n = \widetilde{W}(\lambda_1) \oplus \widetilde{W}(\lambda_2) \oplus \dots \oplus \widetilde{W}(\lambda_k)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof (Sketched / Outline)">
                <p>
                    この定理の厳密な証明は代数学の「単因子論」や推移的核の性質を用いるため長大となるが、ここでは直積分解（部分分数分解を用いるアイディア）の概略を示す。
                </p>
                <p>
                    各 <InlineMath math="f_i(t) = (t - \lambda_i)^{m_i}" /> は互いに素であるため、ユークリッドの互除法から多項式 <InlineMath math="Q_1(t), \dots, Q_k(t)" /> が存在して
                </p>
                <BlockMath math="1 = \frac{Q_1(t)}{P_1(t)} + \dots + \frac{Q_k(t)}{P_k(t)}" />
                <p>
                    という形（これを変形したベズーの等式に類似した形）を通じて、単位行列 <InlineMath math="I" /> をいくつかの多項式の和に分解できる（<InlineMath math="I = E_1 + \dots + E_k" />）。<br />
                    ここで現れる <InlineMath math="E_i" /> は互いに直交する「射影行列」の役割を果たし（<InlineMath math="E_i E_j = 0" /> (<InlineMath math="i \neq j" />), <InlineMath math="E_i^2 = E_i" />）、各 <InlineMath math="E_i" /> の像としての空間 <InlineMath math="\mathrm{Im}(E_i)" /> がまさに <InlineMath math="\widetilde{W}(\lambda_i)" /> に一致することが示される。
                </p>
                <p>
                    これにより空間の直和分解 <InlineMath math="\mathbb{C}^n = \bigoplus \widetilde{W}(\lambda_i)" /> が得られ、各空間で <InlineMath math="A" /> をブロック対角化したときの特性方程式の次数を考えることで、<InlineMath math="\dim \widetilde{W}(\lambda_i) = m_i" /> が必然的に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般化固有ベクトル</h2>

            <p>
                Theorem 7.1-1 が意味することは極めて重要です。<br />
                「真の固有ベクトル」だけでは <InlineMath math="n" /> 本集まらなくても、<strong>「広義固有空間からベクトルを補充すれば、必ず空間全体を張る <InlineMath math="n" /> 本の独立なベクトル（基底）を確保できる」</strong>ということです。<br />
                この補充されるベクトルには特別な名前がついています。
            </p>

            <ContentBox type="definition" title="Definition 7.1-2 （一般化固有ベクトル・広義固有ベクトル）">
                <p>
                    広義固有空間 <InlineMath math="\widetilde{W}(\lambda)" /> に属するベクトルを、固有値 <InlineMath math="\lambda" /> に属する<strong>一般化固有ベクトル（広義固有ベクトル）</strong>と呼ぶ。
                </p>
                <p>
                    特に、自然数 <InlineMath math="k \geq 1" /> に対して
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><InlineMath math="(A - \lambda I)^k\boldsymbol{v} = \boldsymbol{0}" /> を満たし、かつ</li>
                    <li><InlineMath math="(A - \lambda I)^{k-1}\boldsymbol{v} \neq \boldsymbol{0}" /></li>
                </ul>
                <p>
                    を満たすとき、<InlineMath math="\boldsymbol{v}" /> を「<strong>ランク <InlineMath math="k" /> の一般化固有ベクトル</strong>」と呼ぶ。<br />
                    （ランク1の一般化固有ベクトルとは、<InlineMath math="(A - \lambda I)^1\boldsymbol{v} = \boldsymbol{0}" /> を満たす「通常の固有ベクトル」のことである。）
                </p>
            </ContentBox>

            <ContentBox type="remark" title="鎖（Chain）のような関係">
                <p>
                    ランク <InlineMath math="k" /> の一般化固有ベクトル <InlineMath math="\boldsymbol{v}_k" /> に <InlineMath math="(A - \lambda I)" /> を順番に掛けていくと、どうなるでしょうか。
                </p>
                <BlockMath math="\boldsymbol{v}_{k-1} = (A - \lambda I)\boldsymbol{v}_k" />
                <BlockMath math="\boldsymbol{v}_{k-2} = (A - \lambda I)^2\boldsymbol{v}_k = (A-\lambda I)\boldsymbol{v}_{k-1}" />
                <BlockMath math="\vdots" />
                <BlockMath math="\boldsymbol{v}_1 = (A - \lambda I)^{k-1}\boldsymbol{v}_k" />
                <BlockMath math="\boldsymbol{0} = (A - \lambda I)^k\boldsymbol{v}_k = (A-\lambda I)\boldsymbol{v}_1" />
                <p>
                    最後に得られる <InlineMath math="\boldsymbol{v}_1" /> は <InlineMath math="(A - \lambda I)\boldsymbol{v}_1 = \boldsymbol{0}" /> を満たすため、これが「真の固有ベクトル」になります。<br />
                    このように、一般化固有ベクトルは <InlineMath math="(A - \lambda I)" /> を掛けるごとにランクが1つずつ下がり、最後には真の固有ベクトルに行き着くという<strong>「鎖（Chain）」</strong>を形成します。<br />
                    この鎖こそが、次節で学ぶ「ジョルダン細胞」を構成するための骨格ブロックとなります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="(A - \lambda I)" /> を繰り返し掛けることで <InlineMath math="\boldsymbol{0}" /> になるベクトルの集合を<strong>広義固有空間</strong>という（Definition 7.1-1）。</li>
                    <li>広義固有空間の次元は、その固有値の<strong>代数的重複度</strong>に必ず一致し、全空間はこれらの直和に分解される（Theorem 7.1-1）。これによって対角化不能な行列でも基底を <InlineMath math="n" /> 本確保する道が開かれた。</li>
                    <li>そこに含まれるベクトルを<strong>一般化固有ベクトル</strong>と呼び、それらは <InlineMath math="(A - \lambda I)" /> の作用によって鎖のようにつながっている（Definition 7.1-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
