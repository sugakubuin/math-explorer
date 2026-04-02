import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Localization() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で学んだ「商体」は、整域の <InlineMath math="0" /> 以外のすべての元を分母として許し、全体を体にする操作でした。しかし、「特定の元だけを分母として許したい」という状況も考えられます。このように、環の一部にだけ分数を導入する操作を「局所化」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積閉集合と局所化の構成</h2>

            <p className="leading-relaxed">
                分母として許す元は、分数の計算（通分など）を考えれば、積で閉じている必要があります。
            </p>

            <ContentBox type="definition" title="Definition 4.4-1 (積閉集合)">
                <p>
                    環 <InlineMath math="R" /> の部分集合 <InlineMath math="S" /> が<b>積閉（multiplicatively closed）</b>であるとは、以下の2つの条件を満たすことである。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="1 \in S" /></li>
                    <li><InlineMath math="s, t \in S \implies st \in S" /> （積について閉じている）</li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                この積閉集合を分母の集合として、商体と似た要領で分数の環を構成します。ただし、<InlineMath math="R" /> が整域でない場合（零因子を持つ場合）も考慮した一般的な定義を与えます。
            </p>

            <ContentBox type="definition" title="Definition 4.4-2 (局所化)">
                <p>
                    可換環 <InlineMath math="R" /> と、<InlineMath math="0 \notin S" /> を満たす積閉集合 <InlineMath math="S" /> を考える。<InlineMath math="R \times S" /> 上に同値関係 <InlineMath math="\sim" /> を次のように定める。
                </p>
                <BlockMath math="\begin{aligned} &(a, s) \sim (b, t) \\ &\iff \text{ある } u \in S \text{ が存在して } u(at - bs) = 0 \end{aligned}" />
                <p>
                    この同値関係による同値類 <InlineMath math="[(a, s)]" /> を <InlineMath math="a/s" /> と表す。このとき、同値類の全体 <InlineMath math="S^{-1}R" /> は、商体のときと同様の加法と乗法
                </p>
                <BlockMath math="\frac{a}{s} + \frac{b}{t} = \frac{at+bs}{st}, \quad \frac{a}{s} \cdot \frac{b}{t} = \frac{ab}{st}" />
                <p>
                    によって環となる。これを <InlineMath math="R" /> の <InlineMath math="S" /> による<b>局所化（localization）</b>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ※同値関係の定義に <InlineMath math="u" /> を掛けているのは、<InlineMath math="R" /> が整域でない場合（零因子を持つ場合）に同値関係の推移律を保証するための工夫です。<InlineMath math="R" /> が整域であれば、<InlineMath math="at - bs = 0" /> という商体と同じ条件で済みます。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (局所化の具体例)">
                <p>
                    <b>商体との一致：</b><br />
                    整域 <InlineMath math="R" /> において、<InlineMath math="S = R \setminus \{0\}" /> は積閉集合である（零因子がないため非零元の積は非零）。このときの局所化 <InlineMath math="S^{-1}R" /> は商体 <InlineMath math="\mathrm{Frac}(R)" /> に完全に一致する。
                </p>
                <p>
                    <b>特定の元だけを分母にする：</b><br />
                    整数環 <InlineMath math="\mathbb{Z}" /> において、2の冪の全体 <InlineMath math="S = \{1, 2, 4, 8, \dots\} = \{2^n \mid n \geq 0\}" /> を考える。これは積閉集合である。
                </p>
                <p>
                    この <InlineMath math="S" /> で局所化して作られた環 <InlineMath math="S^{-1}\mathbb{Z}" /> は、分母が 2の冪になるような有理数全体からなる環となる。
                </p>
                <BlockMath math="S^{-1}\mathbb{Z} = \left\{ \frac{a}{2^n} \;\middle|\; a \in \mathbb{Z}, n \geq 0 \right\} = \mathbb{Z}[1/2]" />
                <p>
                    この環の中では <InlineMath math="2" /> は可逆（逆元 <InlineMath math="1/2" /> を持つ）であるが、<InlineMath math="3" /> や <InlineMath math="5" /> は可逆ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素イデアルによる局所化</h2>

            <p className="leading-relaxed">
                局所化の最も重要な応用は、「素イデアルの補集合」を積閉集合として使う場合です。素イデアルの定義から、その補集合が積閉集合になることが保証されています。
            </p>

            <ContentBox type="definition" title="Definition 4.4-3 (素イデアルでの局所化)">
                <p>
                    可換環 <InlineMath math="R" /> の素イデアル <InlineMath math="P" /> を考える。素イデアルの定義（<InlineMath math="ab \in P \implies a \in P \text{ または } b \in P" />）の対偶をとると、
                </p>
                <BlockMath math="a \notin P \text{ かつ } b \notin P \implies ab \notin P" />
                <p>
                    となる。これは、補集合 <InlineMath math="S = R \setminus P" /> が積閉集合であることを意味している。
                </p>
                <p>
                    この <InlineMath math="S = R \setminus P" /> による局所化を <InlineMath math="R_P" /> と書き、<b><InlineMath math="R" /> の <InlineMath math="P" /> における局所化</b>と呼ぶ。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                素イデアルで局所化した環 <InlineMath math="R_P" /> は、ただ1つの極大イデアルしか持たない「局所環（local ring）」と呼ばれる特別な環になります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.4-1 (R_P の極大イデアル)">
                <p>
                    素イデアル <InlineMath math="P" /> による局所化 <InlineMath math="R_P" /> は、ただ1つの極大イデアルを持つ。その極大イデアル <InlineMath math="\mathfrak{m}" /> は <InlineMath math="P" /> の元を分子に持つ分数の全体である。
                </p>
                <BlockMath math="\mathfrak{m} = P \cdot R_P = \left\{ \frac{a}{s} \;\middle|\; a \in P, s \in R \setminus P \right\}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="R_P" /> において、<InlineMath math="\mathfrak{m}" /> に属さない元 <InlineMath math="b/t" />（すなわち <InlineMath math="b \notin P" /> かつ <InlineMath math="t \notin P" />）を考える。
                </p>
                <p>
                    <InlineMath math="b \notin P" /> であるため、<InlineMath math="b" /> 自身も分母の集合 <InlineMath math="S = R \setminus P" /> の元である。したがって、分数 <InlineMath math="t/b" /> が <InlineMath math="R_P" /> 内に存在する。
                </p>
                <p>
                    <InlineMath math="(b/t) \cdot (t/b) = 1" /> となるため、<InlineMath math="\mathfrak{m}" /> に属さない元はすべて可逆元（単元）であることがわかる。<br />
                    真のイデアルは単元を含むことができないため、<InlineMath math="R_P" /> の任意の真のイデアルは可逆元を含まない、すなわち <InlineMath math="\mathfrak{m}" /> に含まれなければならない。ゆえに <InlineMath math="\mathfrak{m}" /> は唯一の極大イデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                整数環の素イデアルを用いて具体的に確認しましょう。
            </p>

            <ContentBox type="example" title="Example 4.4-2 (整数環の局所化)">
                <p>
                    <InlineMath math="\mathbb{Z}" /> の素イデアル <InlineMath math="(5)" /> を考える。<InlineMath math="S = \mathbb{Z} \setminus (5)" /> は 5の倍数でない整数全体である。<InlineMath math="(5)" /> における局所化 <InlineMath math="\mathbb{Z}_{(5)}" /> は以下のようになる。
                </p>
                <BlockMath math="\mathbb{Z}_{(5)} = \left\{ \frac{a}{b} \;\middle|\; a, b \in \mathbb{Z}, 5 \nmid b \right\}" />
                <p>
                    この環では、分母に 5の因数を持たない分数がすべて許される。<InlineMath math="1/2" /> や <InlineMath math="3/7" /> は <InlineMath math="\mathbb{Z}_{(5)}" /> の元である。
                </p>
                <p>
                    <InlineMath math="3 = 3/1" /> は、分子の <InlineMath math="3" /> が <InlineMath math="5" /> の倍数でないため、<InlineMath math="\mathbb{Z}_{(5)}" /> の中では逆元 <InlineMath math="1/3" /> を持ち、可逆（単元）である。一方、<InlineMath math="5 = 5/1" /> は逆元 <InlineMath math="1/5" /> を持つことができない（分母が 5 の倍数になってしまうため）ので非可逆である。
                </p>
                <p>
                    唯一の極大イデアルは <InlineMath math="5\mathbb{Z}_{(5)}" />（分子が5の倍数であるような有理数）となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (局所化の応用)">
                <p>
                    「局所化」という名前は幾何学に由来します。代数幾何学において、ある点での関数の性質（極を持たず滑らかに振る舞うかなど）を調べることは、その点に対応する極大イデアルで「環を局所化」することに対応します。局所化によって、特定の点（素イデアル）の「近傍」での代数的な振る舞いだけを拡大鏡のように取り出して調べることができるのです。詳しくは「4-11 可換環論」や「4-12 代数幾何学」で扱われます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>環の特定の積閉集合 <InlineMath math="S" /> を分母として許すように分数を作って環を拡張する操作を<b>局所化</b>という。</li>
                    <li>素イデアル <InlineMath math="P" /> の補集合 <InlineMath math="S = R \setminus P" /> は積閉集合になり、これによる局所化を <InlineMath math="R_P" /> と書く。</li>
                    <li>局所化 <InlineMath math="R_P" /> は、<InlineMath math="P" /> から生成されるただ1つの極大イデアルを持つ環（局所環）となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
