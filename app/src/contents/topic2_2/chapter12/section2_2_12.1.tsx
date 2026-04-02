import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_12_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                1変数の定積分は「曲線の下の面積」を求める計算でしたが、2変数関数の<strong>二重積分</strong>（Double integral）は「曲面の下の体積」を求める計算に相当します。
                本節では、まず最も単純な「長方形領域」における積分の定義（リーマン和）から出発し、それを一般的な形状の領域へと拡張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン和による定義（長方形領域）</h2>

            <p>
                <InlineMath math="xy" /> 平面上の閉長方形領域 <InlineMath math="D = [a, b] \times [c, d] = \{ (x, y) \mid a \le x \le b, \, c \le y \le d \}" /> 上で定義された有界な関数 <InlineMath math="f(x, y)" /> の積分を考えます。
                領域 <InlineMath math="D" /> を格子状の小さな長方形に分割し、それぞれの小長方形を底面、高さを <InlineMath math="f(x, y)" /> とする四角柱の体積を足し合わせることを考えます。
            </p>

            <ContentBox type="definition" title="Definition 12.1-1 (二重リーマン積分)">
                <p>
                    区間 <InlineMath math="[a, b]" /> を <InlineMath math="m" /> 個に、区間 <InlineMath math="[c, d]" /> を <InlineMath math="n" /> 個に分割し、<InlineMath math="D" /> を <InlineMath math="m \times n" /> 個の小長方形 <InlineMath math="D_{ij}" /> に分割する。
                    各 <InlineMath math="D_{ij}" /> の面積を <InlineMath math="\Delta A_{ij} = \Delta x_i \Delta y_j" /> とし、その中に任意の代表点 <InlineMath math="(x_{ij}^*, y_{ij}^*)" /> をとる。
                </p>
                <p className="mt-2">
                    このとき、<strong>二重リーマン和</strong>を
                </p>
                <BlockMath math="S_{m, n} = \sum_{i=1}^m \sum_{j=1}^n f(x_{ij}^*, y_{ij}^*) \Delta A_{ij}" />
                <p className="mt-2">
                    と定義する。分割の最大幅（対角線の長さの最大値）を <InlineMath math="0" /> に近づけたとき（すなわち <InlineMath math="m, n \to \infty" />）、代表点の選び方によらず <InlineMath math="S_{m, n}" /> がある一定の極限値 <InlineMath math="I" /> に収束するならば、関数 <InlineMath math="f" /> は <InlineMath math="D" /> 上で<strong>可積分</strong>（integrable）であるといい、その極限値を <InlineMath math="D" /> 上の<strong>二重積分</strong>と呼んで次のように表す：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dA = \iint_D f(x, y) \, dx \, dy = I" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可積分性の条件</h2>

            <p>
                どのような関数であれば積分可能（リーマン和の極限が確実に定まる）と言えるのでしょうか。1変数の場合と同様に、連続性（関数が途切れていないこと）が最も強力かつ扱いやすい十分条件となります。
            </p>

            <ContentBox type="theorem" title="Theorem 12.1-1 (有界閉領域上の連続関数の可積分性)">
                <p>
                    関数 <InlineMath math="f(x, y)" /> が有界閉領域 <InlineMath math="D" /> 上で<strong>連続</strong>であるならば、<InlineMath math="f" /> は <InlineMath math="D" /> 上で可積分である。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    （※ 実際には、<InlineMath math="f" /> が有界であり、不連続点の集合が面積 <InlineMath math="0" />（ルベーグ測度 <InlineMath math="0" />）であれば可積分であるという、より広い条件が知られています。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [連続関数の可積分性]">
                <p>
                    <InlineMath math="D" /> を有界な閉長方形 <InlineMath math="[a, b] \times [c, d]" /> とし、<InlineMath math="f" /> が <InlineMath math="D" /> 上で連続であるとする。
                </p>
                <p className="mt-2">
                    有界閉集合上の連続関数は<strong>一様連続</strong>（uniformly continuous）である（ハイネ・カントールの定理）。
                    すなわち、任意の <InlineMath math="\varepsilon > 0" /> に対して、ある <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="D" /> 内の任意の2点 <InlineMath math="(x_1, y_1), (x_2, y_2)" /> について
                </p>
                <BlockMath math="\begin{aligned} &\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} < \delta \\ &\implies |f(x_1, y_1) - f(x_2, y_2)| < \frac{\varepsilon}{\mathrm{Area}(D)} \end{aligned}" />
                <p className="mt-2">
                    が成り立つようにできる。
                </p>
                <p className="mt-2">
                    領域 <InlineMath math="D" /> の分割を考え、分割の最大幅（小長方形の対角線の最大値）が <InlineMath math="\delta" /> 未満となるようにする。
                    このとき、各小長方形 <InlineMath math="D_{ij}" /> は閉集合であり、<InlineMath math="f" /> はその上で連続だから、最大値定理により最大値 <InlineMath math="M_{ij}" /> と最小値 <InlineMath math="m_{ij}" /> をとる。そして一様連続性より、同じ小長方形の中での関数の値の差は
                </p>
                <BlockMath math="M_{ij} - m_{ij} < \frac{\varepsilon}{\mathrm{Area}(D)}" />
                <p className="mt-2">
                    となる。よって、リーマン和の上極限を与える上ダルブー和 <InlineMath math="U" /> と下極限を与える下ダルブー和 <InlineMath math="L" /> の差は、
                </p>
                <BlockMath math="U - L = \sum_{i, j} (M_{ij} - m_{ij}) \Delta A_{ij} < \frac{\varepsilon}{\mathrm{Area}(D)} \sum_{i, j} \Delta A_{ij} = \varepsilon" />
                <p className="mt-2">
                    となる。<InlineMath math="\varepsilon" /> は任意に小さくできるため、上極限と下極限は一致し、極限（積分値）が一意に存在する。したがって <InlineMath math="f" /> は可積分である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般領域上の積分</h2>

            <p>
                長方形についての定義だけでは実用上不便です。円や三角形など、一般的な形状の領域 <InlineMath math="D" /> 上での積分を定義するには、「領域の外側は関数値が <InlineMath math="0" /> である」という見方を導入して長方形領域の問題に帰着させます。
            </p>

            <ContentBox type="definition" title="Definition 12.1-2 (一般領域上の二重積分)">
                <p>
                    <InlineMath math="D" /> を <InlineMath math="xy" /> 平面上の有界な領域（ある十分に大きな長方形 <InlineMath math="R" /> にすっぽり収まる領域）とする。
                    <InlineMath math="f(x, y)" /> を <InlineMath math="D" /> 上で定義された関数とし、これを全平面に拡張した関数 <InlineMath math="\tilde{f}(x, y)" /> を次のように定義する：
                </p>
                <BlockMath math="\tilde{f}(x, y) = \begin{cases} f(x, y) & ((x, y) \in D) \\ 0 & ((x, y) \notin D) \end{cases}" />
                <p className="mt-2">
                    このとき、<InlineMath math="\tilde{f}" /> が長方形領域 <InlineMath math="R" /> 上で可積分であるならば、<InlineMath math="f" /> は <InlineMath math="D" /> 上で<strong>可積分</strong>であるといい、その積分を次のように定義する：
                </p>
                <BlockMath math="\iint_D f(x, y) \, dA = \iint_R \tilde{f}(x, y) \, dA" />
            </ContentBox>

            <p>
                ※ この定義により、積分の対象は「関数自体」だけでなく、「領域の境界の形状」にも依存するようになります。<InlineMath math="\tilde{f}" /> は領域 <InlineMath math="D" /> の境界線において不連続になる可能性が高いため、境界線の面積（ルベーグ測度）が <InlineMath math="0" /> であること（例えば滑らかな曲線や折れ線で囲まれていること）が、この積分が定まるための重要な要件となります（Jordan可測性）。
            </p>

        </section>
    );
}
