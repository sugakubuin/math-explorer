import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceInDistribution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでに学んだ収束（概収束、確率収束、<InlineMath math="L^p" /> 収束）は、確率変数列そのものの値の変化に注目したものでした。
                本節で扱う「分布収束（convergence in distribution）」は、値そのものよりも、その確率分布の形状（振る舞い）が似通っていくことに注目した概念です。
                これは中心極限定理の心臓部となる、極めて重要な概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分布収束の定義</h2>

            <p className="leading-relaxed">
                分布収束は、別名「法則収束（convergence in law）」とも呼ばれます。確率変数を介さず、分布関数（CDF）の収束として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 6.4-1 (分布収束)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> の分布関数を <InlineMath math="F_{X_n}" />、<InlineMath math="X" /> の分布関数を <InlineMath math="F_X" /> とする。
                    <InlineMath math="F_X" /> のすべての連続点 <InlineMath math="x" /> において、次が成り立つならば、
                    <InlineMath math="X_n" /> は <InlineMath math="X" /> に<b>分布収束</b>（convergence in distribution）するという：
                    <BlockMath math="\lim_{n \to \infty} F_{X_n}(x) = F_X(x)" />
                    これを <InlineMath math="X_n \xrightarrow{d} X" /> または <InlineMath math="X_n \xrightarrow{\mathcal{L}} X" /> と表記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                「不連続点を除外する」という点に注意が必要です。これは、離散分布から連続分布への収束などを適切に扱うための配慮です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各収束概念の包含関係</h2>

            <p className="leading-relaxed">
                分布収束は、確率収束よりもさらに「弱い（緩やかな）」概念です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (確率収束と分布収束の関係)">
                <p>
                    確率収束するならば、分布収束する：
                    <BlockMath math="X_n \xrightarrow{P} X \implies X_n \xrightarrow{d} X" />
                    逆は、極限 <InlineMath math="X" /> が定数（<InlineMath math="P(X=c)=1" />）である場合に限り成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    分布関数の定義に従って示す。<InlineMath math="F_X" /> の連続点 <InlineMath math="x" /> を任意にとる。
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、
                    <BlockMath math="\begin{aligned} F_{X_n}(x) &= P(X_n \leq x) \\ &= P(X_n \leq x, X \leq x + \varepsilon) \\ &\quad + P(X_n \leq x, X > x + \varepsilon) \\ &\leq P(X \leq x + \varepsilon) + P(|X_n - X| > \varepsilon) \end{aligned}" />
                    が成り立つ。ここで、<InlineMath math="n \to \infty" /> のとき確率収束の仮定より第 2 項は <InlineMath math="0" /> に収束する。
                    したがって、<InlineMath math="\limsup_{n \to \infty} F_{X_n}(x) \leq F_X(x + \varepsilon)" /> である。
                    同様に、<InlineMath math="X \leq x - \varepsilon" /> の場合を考えることで
                    <BlockMath math="F_X(x - \varepsilon) \leq \liminf_{n \to \infty} F_{X_n}(x)" />
                    が導かれる。ここで <InlineMath math="\varepsilon \to 0" /> とすると、<InlineMath math="x" /> が <InlineMath math="F_X" /> の連続点であることから、
                    <BlockMath math="F_X(x) \leq \liminf_{n \to \infty} F_{X_n}(x) \leq \limsup_{n \to \infty} F_{X_n}(x) \leq F_X(x)" />
                    となり、<InlineMath math="F_{X_n}(x) \to F_X(x)" /> が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                分布が同じであっても、確率変数の値そのものが異なれば確率収束は成り立ちません。
            </p>

            <ContentBox type="example" title="Example 6.4-1 (分布収束するが確率収束しない例)">
                <p>
                    <InlineMath math="X" /> を標準正規分布 <InlineMath math="\mathcal{N}(0, 1)" /> に従う確率変数とする。
                    ここで、<InlineMath math="X_n = -X" /> と定義する。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b>分布</b>: <InlineMath math="X" /> が対称な分布を持つため、<InlineMath math="-X" /> も標準正規分布に従う。
                        したがって、任意の <InlineMath math="n" /> で <InlineMath math="F_{X_n} = F_X" /> であり、当然 <InlineMath math="X_n \xrightarrow{d} X" /> となる。
                    </li>
                    <li><b>確率面</b>: <InlineMath math="X_n - X = -2X" /> である。これが確率的に <InlineMath math="0" /> に近づくことはない。
                        例えば <InlineMath math="P(|X_n - X| > 1) = P(|-2X| > 1) = P(|X| > 0.5)" /> であり、これは定数（正の値）をとる。
                        よって <InlineMath math="X_n \xrightarrow{P} X" /> ではない。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束の階層構造（まとめ）</h2>

            <p className="leading-relaxed">
                これまでに学んだ収束概念の強弱関係をまとめると、以下のようになります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.4-1 (収束の包含関係)">
                <p>
                    各収束概念の間には、次の包含関係（矢印は強い概念から弱い概念への含意）が成り立つ：
                </p>
                <p>
                    <BlockMath math="\text{a.s. 収束} \implies \text{確率収束} \implies \text{分布収束}" />
                    <BlockMath math="L^p \text{ 収束} \implies \text{確率収束}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分布の「逃げ」とタイトネス</h2>

            <p className="leading-relaxed">
                分布収束の定義は「極限となる分布が存在する場合」の収束を定めていますが、確率変数列が常に何らかの確率分布に収束するとは限りません。
            </p>

            <ContentBox type="example" title="Example 6.4-2 (無限遠への逃げ)">
                <p>
                    <InlineMath math="X_n \sim \mathcal{N}(n, 1)" /> とする。このとき、平均が無限に遠ざかっていくため、任意の固定された <InlineMath math="x" /> に対して
                    <BlockMath math="F_{X_n}(x) = P(X_n \leq x) \to 0 \quad (n \to \infty)" />
                    となる。極限関数が定数 <InlineMath math="0" /> となり、これは確率分布（全確率が 1）としての性質を失っている。
                    つまり、確率の「質量」が無限遠へと逃げてしまった状態といえる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このような現象が起きないことを保証するのが、<b>タイトネス</b>という概念です。
            </p>

            <ContentBox type="definition" title="Definition 6.4-2 (タイトネス / 緊密性)">
                <p>
                    確率変数列 <InlineMath math="\{X_n\}" /> が<b>タイト</b>（tight、または緊密）であるとは、
                    任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="M > 0" /> が存在し、次が成り立つことをいう：
                    <BlockMath math="\sup_n P(|X_n| > M) < \varepsilon" />
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                中心極限定理の背後にあるレビーの連続性定理（§7.4）など、高度な収束定理の証明には、この「確率変数列が一定の範囲に留まっている」という保証が必要不可欠です。
            </p>

            <ContentBox type="remark" title="Remark: なぜ分布収束が必要か">
                <p>
                    個々の標本点での振る舞いが追えないほど複雑な系（多数の粒子の運動や無数の試行の合計）であっても、
                    その「集団としての統計的性質」が一定の法則（正規分布やポアソン分布）に落ち着くことがあります。
                    中心極限定理はまさに「独立な変数を足し合わせると、元の分布に関わらず正規分布に収束する」ことを主張しますが、
                    この「収束」の正体こそが分布収束なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>分布収束 <InlineMath math="X_n \xrightarrow{d} X" /> は、分布関数が連続点において収束することを定義とする。</li>
                    <li>値そのものが異なっても、確率的な性質（分布）が近づけば分布収束とみなされる。</li>
                    <li>包含関係の整理：概収束 or <InlineMath math="L^p" /> 収束 <InlineMath math="\implies" /> 確率収束 <InlineMath math="\implies" /> 分布収束。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
