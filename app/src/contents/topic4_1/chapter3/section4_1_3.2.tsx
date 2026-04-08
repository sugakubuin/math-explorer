import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OperatorNormAndProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で有界な線形作用素は入力ベクトルを定数倍までにしか引き伸ばさないことを見ました。この「最大の伸び率」は作用素の特性を端的に表す量であり、これ自体が一つのノルムとしての要件を満たすことを本節で確認します。さらに、有界線形作用素たちをひとまとめにした空間の完備性についても解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">作用素ノルムの定義</h2>

            <p>
                有界線形作用素 <InlineMath math="T" /> によってベクトルの長さが最大で何倍になるか、その上限を取ったものを作用素ノルムと定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (作用素ノルム)">
                <p>
                    <InlineMath math="X, Y" /> をノルム空間、<InlineMath math="T : X \to Y" /> を有界線形作用素とする。<InlineMath math="T" /> の<b>作用素ノルム（operator norm）</b> <InlineMath math="\|T\|" /> を、以下のいずれかの同値な式で定義する。
                </p>
                <div className="space-y-4 my-4">
                    <BlockMath math="\|T\| = \sup_{\|x\| \leq 1} \|Tx\|" />
                    <BlockMath math="\|T\| = \sup_{\|x\| = 1} \|Tx\|" />
                    <BlockMath math="\|T\| = \sup_{x \neq 0} \frac{\|Tx\|}{\|x\|}" />
                </div>
            </ContentBox>

            <p>
                この「作用素ノルム」という名称の通り、この書き方は本当にノルムの3公理（正定値性、スカラー倍の性質、三角不等式）を満たしています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.2-1">
                <p>
                    定義された作用素ノルム <InlineMath math="\|\cdot\|" /> は、有界線形作用素のなすベクトル空間においてノルムの公理を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    正定値性やスカラー倍の性質は上限の性質から自明に従うため、最も重要な三角不等式のみ確認する。
                </p>
                <p>
                    <InlineMath math="T, S" /> をともに <InlineMath math="X" /> から <InlineMath math="Y" /> への有界線形作用素とする。任意の <InlineMath math="x \in X" />（<InlineMath math="\|x\| \leq 1" />）に対して、<InlineMath math="Y" /> 内の通常の三角不等式を用いると、
                </p>
                <BlockMath math="\|(T + S)x\| = \|Tx + Sx\| \leq \|Tx\| + \|Sx\|" />
                <p>
                    ここで、<InlineMath math="\|Tx\|" /> や <InlineMath math="\|Sx\|" /> はそれぞれの作用素ノルム以下（<InlineMath math="\|Tx\| \leq \|T\| \|x\| \leq \|T\|" />）であるから、
                </p>
                <BlockMath math="\|(T + S)x\| \leq \|T\| + \|S\|" />
                <p>
                    となる。左辺はすべての <InlineMath math="\|x\| \leq 1" /> について成り立つため、左辺の上限をとっても不等式は保たれ、
                </p>
                <BlockMath math="\|T + S\| \leq \|T\| + \|S\|" />
                <p>
                    が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 3.2-1 (<InlineMath math="2 \times 2" /> 行列の作用素ノルム)</span>}>
                <p>
                    <InlineMath math="\ell^2" /> 空間（あるいは単に <InlineMath math="\mathbb{R}^2" /> 上のユークリッドノルム）からそれ自身への線形写像として、行列 <InlineMath math="A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}" /> を考える。
                </p>
                <p>
                    ベクトル <InlineMath math="x = (x_1, x_2)" /> に対して <InlineMath math="Ax = (x_1, 2x_2)" /> である。単位球 <InlineMath math="\|x\|^2 = x_1^2 + x_2^2 \leq 1" /> における <InlineMath math="\|Ax\|^2" /> の値を評価すると、
                </p>
                <BlockMath math="\|Ax\|^2 = x_1^2 + 4x_2^2 \leq x_1^2 + x_2^2 + 3x_2^2 \leq 1 + 3(1) = 4" />
                <p>
                    となるため、ルートをとって <InlineMath math="\|Ax\| \leq 2" /> であることがわかる。実際に <InlineMath math="x = (0, 1)" /> （ノルム <InlineMath math="1" />）のとき <InlineMath math="\|Ax\| = \|(0, 2)\| = 2" /> となり上限が達成されるため、作用素ノルムは <InlineMath math="\|A\| = 2" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="B(X,Y)" /> の完備性</h2>

            <p>
                作用素ノルムの定義により、有界線形作用素の全体はそれ自身が一つの巨大なノルム空間をなすことがわかりました。ここからはこの空間全体の位相・完備性について議論します。
            </p>

            <ContentBox type="definition" title={<span>Definition 3.2-2 (<InlineMath math="B(X,Y)" />)</span>}>
                <p>
                    ノルム空間 <InlineMath math="X" /> からノルム空間 <InlineMath math="Y" /> への有界線形作用素全体の集合を <b><InlineMath math="B(X,Y)" /></b> と表記する。これは通常の和とスカラー倍、および作用素ノルムに関してノルム空間となる。
                </p>
            </ContentBox>

            <p>
                この新しく作った空間 <InlineMath math="B(X,Y)" /> の完備性について、極めて強力な定理が成り立ちます。<InlineMath math="B(X,Y)" /> の完備性は、実は出力側の空間 <InlineMath math="Y" /> の完備性のみに依存するのです。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 3.2-1 (<InlineMath math="B(X,Y)" /> の完備性)</span>}>
                <p>
                    <InlineMath math="Y" /> がバナッハ空間（完備なノルム空間）であるならば、<InlineMath math="X" /> が完備であるか否かに関わらず、作用素空間 <InlineMath math="B(X,Y)" /> はバナッハ空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(T_n)" /> を <InlineMath math="B(X,Y)" /> のコーシー列とする。<InlineMath math="m,n" /> が大きいとき作用素ノルムで <InlineMath math="\|T_m - T_n\| \to 0" /> となる。
                </p>
                <p>
                    任意の固定した <InlineMath math="x \in X" /> について、出力側の空間 <InlineMath math="Y" /> での点列 <InlineMath math="(T_n x)" /> を評価すると、
                </p>
                <BlockMath math="\|T_m x - T_n x\| \leq \|T_m - T_n\| \|x\|" />
                <p>
                    となるため、<InlineMath math="(T_n x)" /> は <InlineMath math="Y" /> におけるコーシー列となる。<InlineMath math="Y" /> はバナッハ空間であるから、各 <InlineMath math="x" /> について極限 <InlineMath math="y = \lim_{n \to \infty} T_n x" /> が一意に存在する。この極限を <InlineMath math="Tx = y" /> と定義することで、新しい写像 <InlineMath math="T : X \to Y" /> が構成できる。
                </p>
                <p>
                    次に <InlineMath math="T" /> の線形性であるが、極限の線形性から <InlineMath math="T(\alpha x + \beta z) = \alpha Tx + \beta Tz" /> が直ちに従う。
                </p>
                <p>
                    次に <InlineMath math="T" /> の有界性を示す。<InlineMath math="(T_n)" /> はノルム空間でのコーシー列なのでノルム自体が有界であり、ある定数 <InlineMath math="K" /> に対してすべての <InlineMath math="n" /> で <InlineMath math="\|T_n\| \leq K" /> となる。すると、任意に固定した <InlineMath math="x \in X" /> について
                </p>
                <BlockMath math="\|Tx\| = \lim_{n \to \infty} \|T_n x\| \leq \lim_{n \to \infty} \|T_n\| \|x\| \leq K \|x\|" />
                <p>
                    となり、<InlineMath math="T" /> は有界（<InlineMath math="T \in B(X,Y)" />）であることが示される。
                </p>
                <p>
                    最後に <InlineMath math="T_n \to T" /> が作用素ノルムの意味で（一様に）収束することを示す。<InlineMath math="m, n \geq N" /> のとき <InlineMath math="\|T_m - T_n\| < \varepsilon" /> とすると、任意の <InlineMath math="x" /> に対して <InlineMath math="\|T_m x - T_n x\| \leq \varepsilon \|x\|" /> である。<InlineMath math="m \to \infty" /> とすると <InlineMath math="T_m x \to Tx" /> なので <InlineMath math="\|Tx - T_n x\| \leq \varepsilon \|x\|" />。上限を取れば <InlineMath math="\|T - T_n\| \leq \varepsilon" /> となり、ノルム収束が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 3.2-2 (<InlineMath math="B(X,Y)" /> が完備とならない例)</span>}>
                <p>
                    逆に <InlineMath math="Y" /> が完備でない場合、<InlineMath math="X" /> が完備であっても <InlineMath math="B(X,Y)" /> が完備にならないことがある。
                </p>
                <p>
                    例えば、<InlineMath math="X = \mathbb{R}" /> （完備）とし、<InlineMath math="Y" /> を有限個の非ゼロ項しか持たない数列の空間（非完備）とする。<InlineMath math="X \to Y" /> の有界線形作用素は、各実数 <InlineMath math="r" /> に数列 <InlineMath math="ry_0" /> （<InlineMath math="y_0 \in Y" />）を対応させるもののみである。ここで <InlineMath math="(T_n)" /> を特定の無限数列（例：<InlineMath math="1/n!" /> の列）に各項ごとに収束していくような作用素の列とすると、これはコーシー列になるが、極限の作用素の像が <InlineMath math="Y" /> をはみ出すため <InlineMath math="B(X,Y)" /> 内には収束しない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="双対空間のバナッハ性">
                <p>
                    Theorem 3.2-1 において、特に行き先の空間 <InlineMath math="Y" /> としてスカラー体 <InlineMath math="\mathbb{K}" /> （実数全体または複素数全体）を選ぶとどうなるでしょうか。<InlineMath math="\mathbb{K}" /> は自明にバナッハ空間（完備）です。</p>
                <p>
                    したがって、関数解析における最重要オブジェクトである「連続線形汎関数の全体」すなわち<b>双対空間（dual space）</b> <InlineMath math="X^* = B(X, \mathbb{K})" /> は、<b>元の空間 <InlineMath math="X" /> が完備であろうとなかろうと、常にバナッハ空間になる</b>という驚くべき結論が得られます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>作用素ノルムは有界線形作用素の「最大伸び率」を表し、それ自体がノルムの公理（三角不等式など）を満たす。</li>
                    <li>有界線形作用素をすべて集めた空間 <InlineMath math="B(X,Y)" /> は、行き先の空間 <InlineMath math="Y" /> がバナッハ空間であれば、自動的にバナッハ空間となる（Theorem 3.2-1）。</li>
                    <li>特に <InlineMath math="Y" /> をスカラー体とした場合、双対空間 <InlineMath math="X^*" /> は常にバナッハ空間となるため、非常に頑強で扱いやすい解析の舞台を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
