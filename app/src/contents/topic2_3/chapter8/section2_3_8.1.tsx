import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassMTest() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Chapter 7 では、関数の列 <InlineMath math="f_1(x), f_2(x), \dots" /> が一様収束するとき、連続性や積分が極限関数に引き継がれることを見ました。
                本章では、これを<strong>無限級数（足し算の極限）</strong>の形である「関数項級数」へと自然に拡張します。関数を無限個足し合わせたものが、どのような条件下で全体として行儀の良い関数になるのかを判定する、最も強力で実用的な道具が「ワイエルシュトラスのM判定法」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">関数項級数の定義</h2>

            <p>
                関数の無限和を厳密に扱うために、まずは和の途中経過である「部分和関数」の列として定義します。これは Chapter 3 で学んだ実数の無限級数の構成と全く同じ考え方です。
            </p>

            <ContentBox type="definition" title="Definition 8.1-1 (関数項級数とその収束)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数列 <InlineMath math="\{u_n(x)\}_{n=1}^{\infty}" /> に対して、その無限和
                </p>
                <BlockMath math="\sum_{n=1}^{\infty} u_n(x) = u_1(x) + u_2(x) + u_3(x) + \cdots" />
                <p>
                    を<strong>関数項級数</strong>（series of functions）と呼ぶ。
                    また、第 <InlineMath math="n" /> 項までの有限和関数（部分和列）を <InlineMath math="S_n(x) = \sum_{k=1}^n u_k(x)" /> と置く。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        関数項級数が <InlineMath math="I" /> 上で<strong>各点収束</strong>するとは、部分和関数列 <InlineMath math="\{S_n(x)\}" /> が <InlineMath math="I" /> 上で各点収束することである。
                    </li>
                    <li>
                        関数項級数が <InlineMath math="I" /> 上で<strong>一様収束</strong>するとは、部分和関数列 <InlineMath math="\{S_n(x)\}" /> が <InlineMath math="I" /> 上で一様収束することである。
                    </li>
                </ul>
            </ContentBox>

            <p>
                それぞれの関数 <InlineMath math="u_n(x)" /> が連続であっても、無限に足し合わせた結果 <InlineMath math="\sum u_n(x)" /> が連続関数になる保証はありません（各点収束に留まる場合があるためです）。部分和列 <InlineMath math="\{S_n(x)\}" /> が<strong>一様収束</strong>して初めて、その無限級数は連続になります。
                しかし、定義のまま一様収束性を示すのは計算が困難なことが多いため、より簡単に判定できる強力な定理が必要となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ワイエルシュトラスのM判定法</h2>

            <p>
                「各項の関数の大きさが、ある収束する定数級数で上から抑え込めるならば、その関数項級数は一様かつ絶対収束する」。これがM判定法（Weierstrass M-test）の主張です。ここで "M" は Majorant（優級数）の頭文字を表しています。
            </p>

            <ContentBox type="theorem" title="Theorem 8.1-1 (ワイエルシュトラスのM判定法)">
                <p>
                    区間 <InlineMath math="I" /> 上の関数項級数 <InlineMath math="\sum_{n=1}^\infty u_n(x)" /> について、ある定数の数列 <InlineMath math="\{M_n\}_{n=1}^{\infty}" /> が存在して、次の2つの条件を満たすとする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        すべての <InlineMath math="n \in \mathbb{N}" /> とすべての <InlineMath math="x \in I" /> に対して、<InlineMath math="|u_n(x)| \leq M_n" /> が成り立つ。（一様有界性）
                    </li>
                    <li>
                        正項級数 <InlineMath math="\sum_{n=1}^\infty M_n" /> が収束する。（優級数の収束）
                    </li>
                </ol>
                <p className="mt-4">
                    このとき、関数項級数 <InlineMath math="\sum_{n=1}^\infty u_n(x)" /> は区間 <InlineMath math="I" /> 上で<strong>一様収束</strong>し、かつ（各点において）<strong>絶対収束</strong>する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    完備性の証明などで多用される「コーシーの判定条件（コーシー列の同値性）」を用いて証明する。<br />
                    実数の完備性（定理 3.3-1）により、部分和関数列 <InlineMath math="S_n(x)" /> が一様収束することは、それが「一様コーシー列」であることと同値である。すなわち、任意の <InlineMath math="\varepsilon > 0" /> に対してある自然数 <InlineMath math="N" /> が存在し、<InlineMath math="m > n \geq N" /> ならば、すべての <InlineMath math="x \in I" /> について
                </p>
                <BlockMath math="|S_m(x) - S_n(x)| < \varepsilon" />
                <p>
                    となることを示せばよい。
                </p>
                <p className="mt-4">
                    仮定 2 より、実数級数 <InlineMath math="\sum_{k=1}^\infty M_k" /> は収束する。したがってその部分和はコーシー列をなすため、任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="N" /> が存在して、<InlineMath math="m > n \geq N" /> のとき
                </p>
                <BlockMath math="\sum_{k=n+1}^m M_k < \varepsilon" />
                <p>
                    が成り立つ（<InlineMath math="M_k \geq 0" /> なので絶対値は不要）。
                </p>
                <p className="mt-4">
                    この同じ <InlineMath math="N" /> を用いて、関数項級数の部分和の差を評価する。三角不等式と仮定 1（<InlineMath math="|u_k(x)| \leq M_k" />）より、任意の <InlineMath math="x \in I" /> に対して
                </p>
                <BlockMath math="\begin{aligned} |S_m(x) - S_n(x)| &= \left| \sum_{k=n+1}^m u_k(x) \right| \\ &\leq \sum_{k=n+1}^m |u_k(x)| \\ &\leq \sum_{k=n+1}^m M_k \\ &< \varepsilon \end{aligned}" />
                <p className="mt-4">
                    最後の不等号は <InlineMath math="x" /> の選び方に依存せず、選択した <InlineMath math="N" /> のみで決まっている。したがって <InlineMath math="S_n(x)" /> は一様コーシー列であり、区間 <InlineMath math="I" /> 上で一様収束することが示された。
                </p>
                <p className="mt-4">
                    また、各点 <InlineMath math="x" /> において <InlineMath math="\sum |u_k(x)| \leq \sum M_k < \infty" /> であるから、比較判定法により絶対収束することも直ちにわかる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この判定法の強さは「<InlineMath math="x" /> という変数を完全に消去して、単なる実数列 <InlineMath math="M_n" /> の収束問題に帰着させてしまう」点にあります。<InlineMath math="x" /> の変動による影響を <InlineMath math="M_n" /> という天井で強引に押さえつけることで、一様性を生み出しているのです。
            </p>

            <ContentBox type="example" title="Example 8.1-1 (M判定法の適用)">
                <p>
                    関数項級数 <InlineMath math="\sum_{n=1}^\infty \frac{\sin(nx)}{n^2}" /> は実数全体 <InlineMath math="\mathbb{R}" /> 上で連続関数に一様収束することを示せ。
                </p>
                <div className="mt-4 font-semibold">解答:</div>
                <p className="mt-2">
                    一般項を <InlineMath math="u_n(x) = \frac{\sin(nx)}{n^2}" /> とする。すべての <InlineMath math="x \in \mathbb{R}" /> およびすべての <InlineMath math="n \geq 1" /> に対して、<InlineMath math="|\sin(nx)| \leq 1" /> であるから、
                </p>
                <BlockMath math="|u_n(x)| = \left| \frac{\sin(nx)}{n^2} \right| \leq \frac{1}{n^2}" />
                <p>
                    が成り立つ。ここで定数列 <InlineMath math="M_n = \frac{1}{n^2}" /> と置く。
                </p>
                <p className="mt-4">
                    級数 <InlineMath math="\sum_{n=1}^\infty \frac{1}{n^2}" /> は、いわゆる <InlineMath math="p" />-級数（<InlineMath math="p=2 > 1" />）であり収束することが知られている（バーゼル問題。その和は <InlineMath math="\pi^2/6" /> だが収束することだけわかればよい）。
                </p>
                <p className="mt-4">
                    よって、ワイエルシュトラスのM判定法の2条件がすべて満たされるため、元の関数項級数は <InlineMath math="\mathbb{R}" /> 上で一様収束する。
                    各項 <InlineMath math="u_n(x)" /> が連続であるため、一様収束性により極限関数（無限和の結果）も連続関数となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§8.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数項級数の収束は、部分和（有限項の和）の関数列の収束として定義される。</li>
                    <li>ワイエルシュトラスのM判定法は、関数項級数が一様収束（かつ絶対収束）することを示すための非常に強力で簡便な十分条件である。</li>
                    <li>各項の絶対値を、<InlineMath math="x" /> に依存しない定数の収束級数 <InlineMath math="M_n" /> で上から評価できればよい。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
