import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function VectorIdentities() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ベクトル解析における複雑な計算（特に発散や回転の組み合わせ）を扱うにあたり、純粋な代数としての「三重積」の公式が非常に重要な役割を果たします。
                このセクションでは、まず三重積の公式を確認し、それらを踏まえて、勾配（grad）・発散（div）・回転（rot）を組み合わせた重要な微分演算の公式と「ラプラシアン」について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベクトルの三重積（代数公式）</h2>

            <p className="leading-relaxed">
                3つの空間ベクトル <InlineMath math="\mathbf{A}, \mathbf{B}, \mathbf{C}" /> に対して、内積と外積を組み合わせた積を<strong>三重積</strong>と呼びます。
                結果がスカラーになる「スカラー三重積」と、ベクトルになる「ベクトル三重積」があります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-1 (スカラー三重積)">
                <p>
                    3次元空間の3つのベクトル <InlineMath math="\mathbf{A}, \mathbf{B}, \mathbf{C} \in \mathbb{R}^3" /> に対し、以下の巡回置換の等式が成り立つ：
                </p>
                <BlockMath math="\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}) = \mathbf{B} \cdot (\mathbf{C} \times \mathbf{A}) = \mathbf{C} \cdot (\mathbf{A} \times \mathbf{B})" />
            </ContentBox>

            <ContentBox type="remark" title="スカラー三重積の幾何学的意味">
                <p>
                    スカラー三重積の絶対値 <InlineMath math="|\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C})|" /> は、これら3つのベクトルが張る<strong>平行六面体の体積</strong>に等しくなります。
                    また、行列式を用いて <InlineMath math="\det(\mathbf{A}, \mathbf{B}, \mathbf{C})" /> と書くこともできます。行の入れ替えの性質（巡回的に2回入れ替えると符号が戻る）から、上記の等式がすぐに従います。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mathbf{A} = (A_1, A_2, A_3), \mathbf{B} = (B_1, B_2, B_3), \mathbf{C} = (C_1, C_2, C_3)" /> とおく。<br />
                    外積の定義より <InlineMath math="\mathbf{B} \times \mathbf{C} = (B_2 C_3 - B_3 C_2,\, B_3 C_1 - B_1 C_3,\, B_1 C_2 - B_2 C_1)" /> であるから、これと <InlineMath math="\mathbf{A}" /> の内積をとると、
                </p>
                <BlockMath math="\begin{aligned} \mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}) &= A_1(B_2 C_3 - B_3 C_2) + A_2(B_3 C_1 - B_1 C_3) \\ &\quad + A_3(B_1 C_2 - B_2 C_1) \end{aligned}" />
                <p>
                    となる。これはちょうど、<InlineMath math="\mathbf{A}, \mathbf{B}, \mathbf{C}" /> を行とする <InlineMath math="3 \times 3" /> 行列の行列式を第1行で余因子展開した式にほかならない。すなわち、
                </p>
                <BlockMath math="\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}) = \begin{vmatrix} A_1 & A_2 & A_3 \\ B_1 & B_2 & B_3 \\ C_1 & C_2 & C_3 \end{vmatrix}" />
                <p>
                    行列式は「隣り合う行を入れ替えると符号が反転する」という性質を持つ。したがって、行を2回入れ替える（巡回置換する）と元の符号に戻る：
                </p>
                <BlockMath math="\begin{vmatrix} \mathbf{A} \\ \mathbf{B} \\ \mathbf{C} \end{vmatrix} = -\begin{vmatrix} \mathbf{B} \\ \mathbf{A} \\ \mathbf{C} \end{vmatrix} = \begin{vmatrix} \mathbf{B} \\ \mathbf{C} \\ \mathbf{A} \end{vmatrix} = \mathbf{B} \cdot (\mathbf{C} \times \mathbf{A})" />
                <p>
                    同様にもう一度巡回させれば <InlineMath math="\mathbf{C} \cdot (\mathbf{A} \times \mathbf{B})" /> と等しいことも示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に数値を代入して、計算結果が一致することを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 1.4-1 (スカラー三重積の計算)">
                <p>
                    <InlineMath math="\mathbf{A} = (1, 0, 2), \mathbf{B} = (0, 1, -1), \mathbf{C} = (2, -1, 0)" /> とする。
                </p>
                <p>
                    まず、<InlineMath math="\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C})" /> を計算する。<br />
                    <BlockMath math="\begin{aligned} &\mathbf{B} \times \mathbf{C} \\ &= (1 \cdot 0 - (-1)(-1),\, (-1) \cdot 2 - 0 \cdot 0,\, 0 \cdot (-1) - 1 \cdot 2) \\ &= (-1, -2, -2) \end{aligned}" />
                    よって、
                    <BlockMath math="\begin{aligned} \mathbf{A} \cdot (\mathbf{B} \times \mathbf{C}) &= 1(-1) + 0(-2) + 2(-2) \\ &= -1 - 4 = -5 \end{aligned}" />
                </p>
                <p>
                    次に、<InlineMath math="\mathbf{B} \cdot (\mathbf{C} \times \mathbf{A})" /> を計算する。<br />
                    <BlockMath math="\begin{aligned} &\mathbf{C} \times \mathbf{A} \\ &= (-1 \cdot 2 - 0 \cdot 0,\, 0 \cdot 1 - 2 \cdot 2,\, 2 \cdot 0 - (-1) \cdot 1) \\ &= (-2, -4, 1) \end{aligned}" />
                    よって、
                    <BlockMath math="\begin{aligned} \mathbf{B} \cdot (\mathbf{C} \times \mathbf{A}) &= 0(-2) + 1(-4) + (-1)1 \\ &= -4 - 1 = -5 \end{aligned}" />
                </p>
                <p>
                    両者の結果が一致することが確認できた。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次に、外積を2回連続して行う「ベクトル三重積」の公式です。これは「BAC-CAB（バック・キャブ）則」として広く知られており、ベクトル解析で頻出する最も重要な代数公式の1つです。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-2 (ベクトル三重積：BAC-CAB則)">
                <p>
                    3次元空間の3つのベクトル <InlineMath math="\mathbf{A}, \mathbf{B}, \mathbf{C} \in \mathbb{R}^3" /> に対して、以下の等式が成り立つ：
                </p>
                <p>
                    <BlockMath math="\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) = \mathbf{B}(\mathbf{A} \cdot \mathbf{C}) - \mathbf{C}(\mathbf{A} \cdot \mathbf{B})" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ベクトルを成分表示し、<InlineMath math="x" /> 成分（第1成分）について等式が成り立つことを直接計算で示す。
                    <InlineMath math="\mathbf{v} = \mathbf{B} \times \mathbf{C}" /> とおくと、その成分は <InlineMath math="\mathbf{v} = (B_2 C_3 - B_3 C_2,\, B_3 C_1 - B_1 C_3,\, B_1 C_2 - B_2 C_1)" /> である。
                </p>
                <p>
                    左辺 <InlineMath math="\mathbf{A} \times \mathbf{v}" /> の第1成分は、外積の定義より
                </p>
                <BlockMath math="(\mathbf{A} \times \mathbf{v})_1 = A_2 v_3 - A_3 v_2" />
                <p>
                    ここに <InlineMath math="v_2, v_3" /> を代入して展開する：
                </p>
                <BlockMath math="\begin{aligned} (\mathbf{A} \times \mathbf{v})_1 &= A_2 (B_1 C_2 - B_2 C_1) - A_3 (B_3 C_1 - B_1 C_3) \\ &= A_2 B_1 C_2 - A_2 B_2 C_1 - A_3 B_3 C_1 + A_3 B_1 C_3 \end{aligned}" />
                <p>
                    ここで、正の項には <InlineMath math="B_1" /> が、負の項には <InlineMath math="C_1" /> が共通して含まれていることに着目し、式を整理するために人為的に <InlineMath math="A_1 B_1 C_1 - A_1 B_1 C_1 = 0" /> を加える：
                </p>
                <BlockMath math="\begin{aligned} (\mathbf{A} \times \mathbf{v})_1 &= (A_1 B_1 C_1 + A_2 B_1 C_2 + A_3 B_1 C_3) \\ &\quad - (A_1 B_1 C_1 + A_2 B_2 C_1 + A_3 B_3 C_1) \\ &= B_1 (A_1 C_1 + A_2 C_2 + A_3 C_3) \\ &\quad - C_1 (A_1 B_1 + A_2 B_2 + A_3 B_3) \\ &= B_1 (\mathbf{A} \cdot \mathbf{C}) - C_1 (\mathbf{A} \cdot \mathbf{B}) \end{aligned}" />
                <p>
                    これはまさしく右辺 <InlineMath math="\mathbf{B}(\mathbf{A} \cdot \mathbf{C}) - \mathbf{C}(\mathbf{A} \cdot \mathbf{B})" /> の第1成分に一致する。
                    対称性により、<InlineMath math="y" /> 成分や <InlineMath math="z" /> 成分についても同様の計算が成り立ち、両辺のベクトルは完全に一致する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                ベクトル三重積は一見すると複雑なベクトルになりますが、公式を知っていれば単なる「2つのベクトルの線形結合」として容易に計算できます。
            </p>

            <ContentBox type="example" title="Example 1.4-2 (ベクトル三重積の計算)">
                <p>
                    <InlineMath math="\mathbf{A} = (1, 1, 0), \mathbf{B} = (0, 1, 1), \mathbf{C} = (1, 0, 1)" /> とする。
                </p>
                <p>
                    まず、公式（BAC-CAB則）を用いて計算する。
                    <BlockMath math="\mathbf{A} \cdot \mathbf{C} = 1\cdot 1 + 1\cdot 0 + 0\cdot 1 = 1 \\ \mathbf{A} \cdot \mathbf{B} = 1\cdot 0 + 1\cdot 1 + 0\cdot 1 = 1" />
                    よって公式より、
                </p>
                <BlockMath math="\begin{aligned} \mathbf{A} \times (\mathbf{B} \times \mathbf{C}) &= \mathbf{B}(1) - \mathbf{C}(1) = (0, 1, 1) - (1, 0, 1) \\ &= (-1, 1, 0) \end{aligned}" />
                <p>
                    次に、定義に従って外積を2回計算して検算してみる。<br />
                    <BlockMath math="\begin{aligned} \mathbf{B} \times \mathbf{C} &= (1\cdot 1 - 1\cdot 0,\, 1\cdot 1 - 0\cdot 1,\, 0\cdot 0 - 1\cdot 1) \\ &= (1, 1, -1) \end{aligned}" />
                    これと <InlineMath math="\mathbf{A}" /> の外積をとると、<br />
                    <BlockMath math="\begin{aligned} &\mathbf{A} \times (\mathbf{B} \times \mathbf{C}) \\ &= (1(-1) - 0\cdot 1,\, 0\cdot 1 - 1(-1),\, 1\cdot 1 - 1\cdot 1) \\ &= (-1, 1, 0) \end{aligned}" />
                </p>
                <p>
                    公式を用いることで、外積を2回計算する手間を省き、内積の計算のみで結果が得られることがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本恒等式</h2>

            <p>
                grad, div, rot を2回組み合わせたとき、常にゼロになる2つの極めて重要な恒等式があります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (基本恒等式)">
                <p>
                    2回微分可能な任意の関数に対して、以下の2式が常に成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <strong>勾配場の回転は常に零</strong>：
                        <BlockMath math="\text{rot}(\nabla f) = \mathbf{0}" />
                    </li>
                    <li>
                        <strong>回転場の発散は常に零</strong>：
                        <BlockMath math="\text{div}(\text{rot}\, \mathbf{F}) = 0" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(1) 勾配場の回転</strong>：
                    <InlineMath math="f" /> の勾配 <InlineMath math="\nabla f = (\partial_x f, \partial_y f, \partial_z f)" /> の回転の <InlineMath math="z" /> 成分を計算すると：
                    <BlockMath math="(\text{rot}(\nabla f))_z = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right) - \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial x \partial y} - \frac{\partial^2 f}{\partial y \partial x}" />
                    関数の連続性（ <InlineMath math="C^2" /> 級）を仮定すれば、偏微分の順序は交換可能であるため、これは 0 になる。他の成分についても同様である。
                </p>
                <p>
                    <strong>(2) 回転場の発散</strong>：
                    <InlineMath math="\text{div}(\text{rot}\, \mathbf{F})" /> を計算すると：
                    <BlockMath math="\begin{aligned} \text{div}(\text{rot}\, \mathbf{F}) &= \frac{\partial}{\partial x}\left(\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z}\right) + \frac{\partial}{\partial y}\left(\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x}\right) \\ &\quad + \frac{\partial}{\partial z}\left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right) \\ &= \left(\frac{\partial^2 F_3}{\partial x \partial y} - \frac{\partial^2 F_3}{\partial y \partial x}\right) + \left(\frac{\partial^2 F_1}{\partial y \partial z} - \frac{\partial^2 F_1}{\partial z \partial y}\right) \\ &\quad + \left(\frac{\partial^2 F_2}{\partial z \partial x} - \frac{\partial^2 F_2}{\partial x \partial z}\right) \end{aligned}" />
                    成分ごとに偏微分の順序を交換すると、すべての項が相殺し、結果は 0 となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="物理的な意味">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>保存力と渦</strong>： <InlineMath math="\text{rot}(\nabla f) = \mathbf{0}" /> は、「保存力場（勾配で表される場）には渦が存在しない」ことを意味します。
                        これは、保存力に沿って一周しても仕事が 0 になるという性質と密接に関連しています。
                    </li>
                    <li>
                        <strong>湧き出しのない循環</strong>： <InlineMath math="\text{div}(\text{rot}\, \mathbf{F}) = 0" /> は、「渦からは湧き出しが生じない」ことを示します。
                        渦（回転）は同じ場所で回る動きであり、そこから流体がどこかへ純増・純減することはないという直感と一致します。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分演算の公式</h2>

            <p>
                複数の場が重なり合っている場合（積の形など）、通常の微分の公式（ライプニッツ則）と同様の展開が可能です。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-3 (積の微分公式)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong>スカラー積の勾配</strong>：
                        <BlockMath math="\nabla(fg) = f\nabla g + g\nabla f" />
                    </li>
                    <li>
                        <strong>スカラーとベクトルの積の発散</strong>：
                        <BlockMath math="\text{div}(f\mathbf{F}) = f\,\text{div}\,\mathbf{F} + (\nabla f)\cdot\mathbf{F}" />
                    </li>
                    <li>
                        <strong>スカラーとベクトルの積の回転</strong>：
                        <BlockMath math="\text{rot}(f\mathbf{F}) = f\,\text{rot}\,\mathbf{F} + (\nabla f) \times \mathbf{F}" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>スカラーとベクトルの積の発散</strong>について証明する。
                    <BlockMath math="\begin{aligned} \text{div}(f\mathbf{F}) &= \sum_{i=1}^3 \frac{\partial}{\partial x_i}(f F_i) = \sum_{i=1}^3 \left( \frac{\partial f}{\partial x_i}F_i + f\frac{\partial F_i}{\partial x_i} \right) \\ &= \left( \sum_{i=1}^3 \frac{\partial f}{\partial x_i}F_i \right) + f \left( \sum_{i=1}^3 \frac{\partial F_i}{\partial x_i} \right) \\ &= (\nabla f) \cdot \mathbf{F} + f\,\text{div}\,\mathbf{F} \end{aligned}" />
                    他の公式についても、各成分について通常の積の微分法（ライプニッツ則）を適用することで同様に導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ベクトルの外積を含む公式は、符号や順序に注意が必要です。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-4 (外積を含む公式)">
                <p>
                    <BlockMath math="\text{div}(\mathbf{F} \times \mathbf{G}) = \mathbf{G} \cdot \text{rot}\,\mathbf{F} - \mathbf{F} \cdot \text{rot}\,\mathbf{G}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    外積の成分表示 <InlineMath math="(\mathbf{F} \times \mathbf{G})_1 = F_2 G_3 - F_3 G_2" /> 等を用いて発散の定義に代入する。
                    <BlockMath math="\begin{aligned} &\text{div}(\mathbf{F} \times \mathbf{G}) \\ &= \frac{\partial}{\partial x}(F_2 G_3 - F_3 G_2) + \frac{\partial}{\partial y}(F_3 G_1 - F_1 G_3) \\ &\quad + \frac{\partial}{\partial z}(F_1 G_2 - F_2 G_1) \\ &= \left( \frac{\partial F_2}{\partial x}G_3 + F_2\frac{\partial G_3}{\partial x} - \frac{\partial F_3}{\partial x}G_2 - F_3\frac{\partial G_2}{\partial x} \right) + \cdots \end{aligned}" />
                    これらを <InlineMath math="G_i" /> で括る項と <InlineMath math="F_i" /> で括る項に整理すると：
                    <BlockMath math="\begin{aligned} &\text{div}(\mathbf{F} \times \mathbf{G}) \\ &= G_1 \left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} \right) + G_2 \left( \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x} \right) + G_3 \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) \\ &\quad - \left\{ F_1 \left( \frac{\partial G_3}{\partial y} - \frac{\partial G_2}{\partial z} \right) + F_2 \left( \frac{\partial G_1}{\partial z} - \frac{\partial G_3}{\partial x} \right) + F_3 \left( \frac{\partial G_2}{\partial x} - \frac{\partial G_1}{\partial y} \right) \right\} \\ &= \mathbf{G} \cdot \text{rot}\,\mathbf{F} - \mathbf{F} \cdot \text{rot}\,\mathbf{G} \end{aligned}" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラプラシアン</h2>

            <p>
                スカラー場の「勾配の発散」をとる演算は、多変数関数の「2階の微分」に相当し、物理学で最も重要な演算子の1つです。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (ラプラシアン)">
                <p>
                    スカラー場 <InlineMath math="f" /> に対して、以下の演算を<strong>ラプラシアン (Laplacian)</strong> と呼ぶ：
                    <BlockMath math="\Delta f = \nabla^2 f = \text{div}(\nabla f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}" />
                </p>
            </ContentBox>

            <p>
                ラプラシアンは、その点における「場が周囲と比べてどれくらい凹んでいるか（または盛り上がっているか）」、すなわち数値の「平均からの偏差」を表します。
            </p>

            <ContentBox type="example" title="Example 1.4-3 (逆二乗則の場とラプラシアン)">
                <p>
                    距離の逆数に比例するスカラー場 <InlineMath math="1/r" /> （ <InlineMath math="r = \sqrt{x^2+y^2+z^2}" /> ）について考えます。
                    <InlineMath math="r \neq 0" /> の範囲において計算を行うと：
                    <BlockMath math="\Delta \left( \frac{1}{r} \right) = 0" />
                    となることが確認できます。これを<strong>ラプラス方程式</strong>と呼び、重力ポテンシャルや静電ポテンシャルが「何もない空間」で満たすべき基本的な法則です。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ベクトル三重積の公式（BAC-CAB則）において、ベクトル <InlineMath math="\mathbf{A}, \mathbf{B}" /> を微分演算子 <InlineMath math="\nabla" /> に置き換えたものに相当する、ベクトル場に対する重要な公式があります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.4-5 (ベクトルラプラシアン)">
                <p>
                    ベクトル場に対しても、各成分にラプラシアンを作用させたもの（ベクトルラプラシアン）を定義できます。
                    これは次の公式で結びつきます：
                    <BlockMath math="\text{rot}(\text{rot}\,\mathbf{F}) = \nabla(\text{div}\,\mathbf{F}) - \Delta\mathbf{F}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    第1成分（ <InlineMath math="x" /> 成分）について確認する。
                    <BlockMath math="\begin{aligned} (\text{rot}(\text{rot}\,\mathbf{F}))_x &= \frac{\partial}{\partial y}(\text{rot}\,\mathbf{F})_z - \frac{\partial}{\partial z}(\text{rot}\,\mathbf{F})_y \\ &= \frac{\partial}{\partial y}\left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) - \frac{\partial}{\partial z}\left( \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x} \right) \\ &= \frac{\partial^2 F_2}{\partial y \partial x} - \frac{\partial^2 F_1}{\partial y^2} - \frac{\partial^2 F_1}{\partial z^2} + \frac{\partial^2 F_3}{\partial z \partial x} \end{aligned}" />
                    一方で、 <InlineMath math="\nabla(\text{div}\,\mathbf{F}) - \Delta\mathbf{F}" /> の <InlineMath math="x" /> 成分は：
                    <BlockMath math="\begin{aligned} \frac{\partial}{\partial x} \left( \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z} \right) - \left( \frac{\partial^2 F_1}{\partial x^2} + \frac{\partial^2 F_1}{\partial y^2} + \frac{\partial^2 F_1}{\partial z^2} \right) \\ = \left( \frac{\partial^2 F_1}{\partial x^2} + \frac{\partial^2 F_2}{\partial x \partial y} + \frac{\partial^2 F_3}{\partial x \partial z} \right) - \left( \frac{\partial^2 F_1}{\partial x^2} + \frac{\partial^2 F_1}{\partial y^2} + \frac{\partial^2 F_1}{\partial z^2} \right) \end{aligned}" />
                    これらを整理すると両者は等しくなる（偏微分の順序の交換性を利用）。他の成分も同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この公式は、電磁波の伝搬など、渦と湧き出しが相互に関係し合う現象を解析する際に非常に強力な威力を発揮します。
            </p>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>三重積</strong>：スカラー三重積は平行六面体の体積、ベクトル三重積は「BAC-CAB則」として知られる強力な代数公式です。</li>
                    <li><strong>基本恒等式</strong>：gradのrotは常に 0 、rotのdivは常に 0 。これらは保存力や非圧縮性の本質を突いています。</li>
                    <li><strong>微分公式</strong>：多変数関数の積の微分も正規の規則に従って展開できます。</li>
                    <li><strong>ラプラシアン (Δ)</strong>：2階の微分演算。熱伝導、波の伝播、ポテンシャルの分布など、物理法則の根幹を記述します。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
