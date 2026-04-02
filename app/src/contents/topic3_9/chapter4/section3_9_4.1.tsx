import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PolynomialRings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまで環の抽象的な性質を扱ってきましたが、ここからは具体的な環の構成方法に目を向けます。その一つが「多項式環」です。数係数の多項式は高校数学から馴染み深いですが、係数を一般の環 <InlineMath math="R" /> の元とした多項式環 <InlineMath math="R[x]" /> も同様に定義することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多項式環の構成と基本性質</h2>

            <p className="leading-relaxed">
                多項式環の定義と、係数となる環が整域であった場合に多項式環自身も整域になるという基本的な性質を確認します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (多項式環)">
                <p>
                    可換環 <InlineMath math="R" /> 上の<b>一変数多項式環（polynomial ring）</b> <InlineMath math="R[x]" /> とは、変数 <InlineMath math="x" /> と係数 <InlineMath math="a_i \in R" /> を用いた形式的な和
                </p>
                <BlockMath math="f(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (n \geq 0)" />
                <p>
                    の全体からなる集合である。
                </p>
                <p>
                    加法は同じ次数の係数ごとの和として定義し、乗法は分配法則と <InlineMath math="x^i x^j = x^{i+j}" /> に従って展開することで定義する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                整域上の多項式環を考えると、最高次項の係数（モニック多項式なら 1）の振る舞いから、多項式環自身も整域になることがわかります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (R が整域ならば R[x] も整域)">
                <p>
                    可換環 <InlineMath math="R" /> が整域であるとき、多項式環 <InlineMath math="R[x]" /> も整域である。
                </p>
                <p>
                    さらに、非零多項式 <InlineMath math="f, g \in R[x] \setminus \{0\}" /> に対して <InlineMath math="\deg(fg) = \deg f + \deg g" /> が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f, g \in R[x] \setminus \{0\}" /> とし、それぞれの次数を <InlineMath math="m = \deg f" />、<InlineMath math="n = \deg g" /> とする。すなわち
                </p>
                <BlockMath math="\begin{aligned} f(x) &= a_m x^m + a_{m-1} x^{m-1} + \dots + a_0 \quad (a_m \neq 0) \\ g(x) &= b_n x^n + b_{n-1} x^{n-1} + \dots + b_0 \quad (b_n \neq 0) \end{aligned}" />
                <p>
                    とおく。<InlineMath math="f" /> と <InlineMath math="g" /> の積 <InlineMath math="fg" /> を計算すると、最高次項は <InlineMath math="x^m" /> と <InlineMath math="x^n" /> の積から生じる <InlineMath math="a_m b_n x^{m+n}" /> のみである。
                </p>
                <p>
                    いま、<InlineMath math="R" /> は整域であり、<InlineMath math="a_m \neq 0" /> かつ <InlineMath math="b_n \neq 0" /> であるから、整域の定義（零因子を持たない）により <InlineMath math="a_m b_n \neq 0" /> となる。
                </p>
                <p>
                    したがって <InlineMath math="fg" /> の最高次項の係数は <InlineMath math="0" /> ではなく、<InlineMath math="fg \neq 0" /> が成り立つ。よって <InlineMath math="R[x]" /> は整域である。また同時に <InlineMath math="\deg(fg) = m + n = \deg f + \deg g" /> も示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                係数環が整域でない場合には、この命題の前提が崩れるため、多項式の積の次数が和にならない（あるいは零多項式になってしまう）ことが起こり得ます。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (多項式環の整域性の確認)">
                <p>
                    <b>整域の場合：</b><br />
                    整数環 <InlineMath math="\mathbb{Z}" /> は整域であるため、<InlineMath math="\mathbb{Z}[x]" /> も整域である。例えば
                    <BlockMath math="(2x + 1)(x - 3) = 2x^2 - 5x - 3 \neq 0" />
                    となり、零因子は存在せず、次数は <InlineMath math="1 + 1 = 2" /> となる。
                </p>
                <p>
                    <b>整域でない場合：</b><br />
                    剰余環 <InlineMath math="\mathbb{Z}/4\mathbb{Z}" /> は整域ではない（<InlineMath math="\overline{2} \cdot \overline{2} = \overline{0}" />）。この環を係数とする多項式環 <InlineMath math="(\mathbb{Z}/4\mathbb{Z})[x]" /> を考えると、
                    <BlockMath math="(\overline{2}x) \cdot (\overline{2}x) = \overline{4}x^2 = \overline{0}" />
                    となり、非零多項式同士の積が <InlineMath math="0" /> になってしまう。したがって <InlineMath math="(\mathbb{Z}/4\mathbb{Z})[x]" /> も整域ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">R[x] の単元とイデアル</h2>

            <p className="leading-relaxed">
                整域上の多項式環において、可逆な元（単元）はどのような形をしているのでしょうか。次数の関係式から、これが係数環 <InlineMath math="R" /> の単元に完全に一致することがわかります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-2 (R[x] の単元群)">
                <p>
                    可換環 <InlineMath math="R" /> が整域であるとき、多項式環 <InlineMath math="R[x]" /> の単数群（可逆元全体）<InlineMath math="R[x]^\times" /> は、<InlineMath math="R" /> の単数群 <InlineMath math="R^\times" /> と一致する。すなわち、次数が 0 の可逆元のみが <InlineMath math="R[x]" /> で可逆である。
                </p>
                <BlockMath math="R[x]^\times = R^\times" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="R" /> は整域であるとする。多項式 <InlineMath math="f \in R[x]" /> が可逆である（<InlineMath math="f \in R[x]^\times" />）と仮定する。すなわち、ある <InlineMath math="g \in R[x]" /> が存在して <InlineMath math="fg = 1" /> を満たす。
                </p>
                <p>
                    両辺の次数をとると、Proposition 4.1-1 より
                </p>
                <BlockMath math="\deg(fg) = \deg f + \deg g = \deg(1) = 0" />
                <p>
                    次数は <InlineMath math="0" /> 以上の整数であるから、<InlineMath math="\deg f = 0" /> かつ <InlineMath math="\deg g = 0" /> でなければならない。これは <InlineMath math="f" /> と <InlineMath math="g" /> がともに定数（<InlineMath math="f, g \in R" />）であることを意味する。
                </p>
                <p>
                    したがって <InlineMath math="f" /> は <InlineMath math="R" /> の中で可逆であり、<InlineMath math="f \in R^\times" /> である。<InlineMath math="R^\times \subset R[x]^\times" /> は自明であるから、<InlineMath math="R[x]^\times = R^\times" /> が成立する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                これを利用して、具体的な多項式環の単元を特定することができます。
            </p>

            <ContentBox type="example" title="Example 4.1-2 (各種多項式環の単元)">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <InlineMath math="\mathbb{Z}" /> の単元は <InlineMath math="\pm 1" /> のみであるため、<InlineMath math="\mathbb{Z}[x]^\times = \{1, -1\}" /> である。
                    </li>
                    <li>
                        有理数体 <InlineMath math="\mathbb{Q}" /> は体であり、<InlineMath math="0" /> 以外のすべての元が可逆である。したがって <InlineMath math="\mathbb{Q}[x]^\times = \mathbb{Q}^\times = \mathbb{Q} \setminus \{0\}" /> となる。どんなに複雑な多項式でも、例えば <InlineMath math="x" /> を含む <InlineMath math="2x+1" /> などは <InlineMath math="\mathbb{Q}[x]" /> 内で逆元を持たない。
                    </li>
                    <li>
                        因数分解の正しさの検証：<InlineMath math="x^3 - 1 = (x-1)(x^2+x+1)" /> は <InlineMath math="\mathbb{Z}[x]" /> 内の分解である。<InlineMath math="x-1" /> や <InlineMath math="x^2+x+1" /> は定数ではないため <InlineMath math="\mathbb{Z}[x]" /> で単元ではなく、この分解は自明な分解（単元を取り出すだけの分解）ではない真の因数分解であることを確認できる。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多項式環 <InlineMath math="R[x]" /> は、可換環 <InlineMath math="R" /> を係数とする多項式全体からなる環である。</li>
                    <li><InlineMath math="R" /> が整域ならば、<InlineMath math="R[x]" /> も整域であり、非零多項式の積について <InlineMath math="\deg(fg) = \deg f + \deg g" /> が成立する。</li>
                    <li><InlineMath math="R" /> が整域のとき、<InlineMath math="R[x]" /> の可逆元は <InlineMath math="R" /> の可逆元に限られ、<InlineMath math="R[x]^\times = R^\times" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
