import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PreservationUnderUniformConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の真髄は、関数が「一様収束」という強い条件を満たしたときに初めて、元の関数列 <InlineMath math="f_n" /> が持っていた「連続性」や「積分」といった美しい性質が、極限関数 <InlineMath math="f" /> にそのまま遺伝（保存）するという事実にあります。
                言い換えれば、関数に対する「<InlineMath math="\lim" />」の操作と、「<InlineMath math="x \to a" />（連続性）」や「<InlineMath math="\int" />（積分）」の操作をいつ交換してよいか、という実解析における最も基本的なルールを与えるものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様収束による連続性の保存</h2>

            <p>
                「連続関数の列が一様収束するならば、その極限関数も必ず連続になる」。この美しくも強力な定理の証明は、「<InlineMath math="\frac{\varepsilon}{3}" /> 論法（エプシロン・サード論法）」と呼ばれる解析学の典型的なテクニックを用いて行われます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (連続性の保存)">
                <p>
                    区間 <InlineMath math="I" /> 上のすべての関数 <InlineMath math="f_n" /> （<InlineMath math="n = 1, 2, \dots" />）が連続関数であり、<InlineMath math="f_n" /> が <InlineMath math="f" /> に一様収束するとする。
                    このとき、極限関数 <InlineMath math="f" /> も <InlineMath math="I" /> 上で連続である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (ε-δ 論法)">
                <p>
                    任意の点 <InlineMath math="a \in I" /> と任意の <InlineMath math="\varepsilon > 0" /> をとる。<InlineMath math="f" /> が <InlineMath math="a" /> で連続であること（<InlineMath math="\lim_{x \to a} f(x) = f(a)" />）、すなわち「ある <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="|x - a| < \delta \implies |f(x) - f(a)| < \varepsilon" />」を示せばよい。
                </p>
                <p className="mt-4">
                    目的の差 <InlineMath math="|f(x) - f(a)|" /> を、三角不等式を用いて次のように3つの部分（「現在の<InlineMath math="x" />での一様収束の誤差」「関数 <InlineMath math="f_n" /> の連続性の誤差」「点 <InlineMath math="a" /> での一様収束の誤差」）に分割して評価する。
                </p>
                <BlockMath math="\begin{aligned}|f(x) - f(a)| \leq &\underbrace{|f(x) - f_N(x)|}_{\text{1}} + \underbrace{|f_N(x) - f_N(a)|}_{\text{2}} \\ &+ \underbrace{|f_N(a) - f(a)|}_{\text{3}}\\ \end{aligned}" />
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>一様収束性からの <InlineMath math="N" /> の決定（①,③の評価）：</strong><br />
                        <InlineMath math="f_n" /> は <InlineMath math="f" /> に<strong>一様収束</strong>するため、点 <InlineMath math="x" /> に依存しない共通の番号 <InlineMath math="N" /> が存在して、すべての <InlineMath math="t \in I" /> に対して <InlineMath math="|f_N(t) - f(t)| < \frac{\varepsilon}{3}" /> とできる。<br />
                        したがって、任意の <InlineMath math="x" /> について①<InlineMath math="< \frac{\varepsilon}{3}" /> であり、当然 <InlineMath math="a" /> についても③<InlineMath math="< \frac{\varepsilon}{3}" /> である。
                    </li>
                    <li>
                        <strong><InlineMath math="f_N" /> の連続性からの <InlineMath math="\delta" /> の決定（②の評価）：</strong><br />
                        上で選んだ特定の <InlineMath math="f_N" /> は（仮定より）点 <InlineMath math="a" /> において連続である。よって、ある <InlineMath math="\delta > 0" /> が存在して、<InlineMath math="|x - a| < \delta" /> のとき <InlineMath math="|f_N(x) - f_N(a)| < \frac{\varepsilon}{3}" />（部分②）となる。
                    </li>
                </ol>
                <p className="mt-4">
                    以上をまとめると、見つけた <InlineMath math="\delta" /> について <InlineMath math="|x - a| < \delta" /> ならば、
                </p>
                <BlockMath math="|f(x) - f(a)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon" />
                <p>
                    となり、<InlineMath math="f" /> が <InlineMath math="a" /> において連続であることが証明された。（各点収束の仮定だけでは、①で選ぶべき <InlineMath math="N_x" /> が <InlineMath math="x" /> 依存となるため、②の連続性の <InlineMath math="\delta" /> の議論に引き継げず、論法が破綻する。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様収束と積分の順序交換</h2>

            <p>
                解析学におけるもう一つの大問題は「関数の極限の積分の結果は、積分の極限の結果と同じか」ということです。すなわち、
                <BlockMath math="\lim_{n \to \infty} \int_a^b f_n(x) dx \overset{?}{=} \int_a^b \left( \lim_{n \to \infty} f_n(x) \right) dx" />
                という操作が許されるか、という問いです。ここでも「一様収束」が十分条件として働きます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-2 (一様収束と積分の交換)">
                <p>
                    閉区間 <InlineMath math="[a, b]" /> 上の連続関数の列 <InlineMath math="\{f_n\}" /> が、関数 <InlineMath math="f" /> に<strong>一様収束</strong>するとする。このとき、極限関数 <InlineMath math="f" /> も <InlineMath math="[a, b]" /> 上で積分可能（Theorem 7.3-1より連続なので明らか）であり、次が成り立つ。
                </p>
                <BlockMath math="\lim_{n \to \infty} \int_a^b f_n(x) dx = \int_a^b f(x) dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定積分と極限の差の絶対値を厳密に評価して証明を行う。積分の線形性と、定積分の絶対値に関する不等式（<InlineMath math="\left| \int g \right| \leq \int |g|" />）を用いる。
                </p>
                <BlockMath math="\begin{aligned} \left| \int_a^b f_n(x) dx - \int_a^b f(x) dx \right| &= \left| \int_a^b \{f_n(x) - f(x)\} dx \right| \\ &\leq \int_a^b |f_n(x) - f(x)| dx \end{aligned}" />
                <p className="mt-4">
                    一様収束の仮定より、任意の <InlineMath math="\varepsilon > 0" /> に対し、ある自然数 <InlineMath math="N \in \mathbb{N}" /> が存在して、<InlineMath math="n \geq N" /> ならば<strong>すべての <InlineMath math="x \in [a, b]" /> について同時に</strong>
                </p>
                <BlockMath math="|f_n(x) - f(x)| < \frac{\varepsilon}{b - a}" />
                <p>
                    となるようにできる。（ここで誤差を単なる <InlineMath math="\varepsilon" /> ではなく <InlineMath math="\frac{\varepsilon}{b - a}" /> としているのは、最終的な値を <InlineMath math="\varepsilon" /> に調節するための汎用的な論法である。）
                </p>
                <p className="mt-4">
                    よって、<InlineMath math="n \geq N" /> のとき、上記の積分の不等式は次のように上から評価される。
                </p>
                <BlockMath math="\begin{aligned} \int_a^b |f_n(x) - f(x)| dx &< \int_a^b \frac{\varepsilon}{b - a} dx \\ &= \frac{\varepsilon}{b - a} \times (b - a) = \varepsilon \end{aligned}" />
                <p className="mt-4">
                    したがって、任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="N" /> が存在し、<InlineMath math="n \geq N \implies \left| \int_a^b f_n(x) dx - \int_a^b f(x) dx \right| < \varepsilon" /> が示された。<br />
                    これはまさに数列 <InlineMath math="\left\{ \int_a^b f_n(x) dx \right\}" /> が <InlineMath math="\int_a^b f(x) dx" /> に収束することを意味しており、定理が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明からも分かる通り、もし各点収束しかしていない場合、区間内に「幅は狭いが極端に背が高いピークの山（例えば高さが <InlineMath math="n" />、幅が <InlineMath math="1/n" />）」が残っていると、その部分の積分の面積が消えず <InlineMath math="\int_a^b \varepsilon dx" /> のように一様にフタをすることができなくなります。
            </p>

            <ContentBox type="example" title="Example 7.3-1 (各点収束のみでは積分が交換できない反例)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> 上で、<InlineMath math="f_n(x)" /> を次のような「三角形の山」をもつ連続関数とする。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="x = 0" /> のとき <InlineMath math="f_n(0) = 0" /></li>
                    <li><InlineMath math="x = 1/(2n)" /> のとき ピークの高さ <InlineMath math="f_n(1/(2n)) = 2n" /></li>
                    <li><InlineMath math="x = 1/n" /> のとき <InlineMath math="f_n(1/n) = 0" /></li>
                    <li><InlineMath math="1/n \leq x \leq 1" /> のときは常に <InlineMath math="0" /></li>
                </ul>
                <p className="mt-4">
                    <strong>極限の積分（右辺）：</strong><br />
                    任意の <InlineMath math="x > 0" /> を固定すると、<InlineMath math="n" /> を大きくすれば山は左に通り過ぎるので <InlineMath math="f_n(x) \to 0" /> になる。<InlineMath math="x=0" /> でも常に <InlineMath math="0" />。よって極限関数は <InlineMath math="f(x) = 0" />（各点収束）。<br />
                    したがって極限関数を積分すると <InlineMath math="\int_0^1 f(x) dx = 0" />。
                </p>
                <p className="mt-4">
                    <strong>積分の極限（左辺）：</strong><br />
                    一方、各 <InlineMath math="n" /> における <InlineMath math="\int_0^1 f_n(x) dx" /> は、底辺が <InlineMath math="1/n" />、高さが <InlineMath math="2n" /> の三角形の面積であるから、
                    <BlockMath math="\frac{1}{2} \times \frac{1}{n} \times 2n = 1" />
                    となる。よってその極限も <InlineMath math="\lim_{n \to \infty} 1 = 1" /> である。
                </p>
                <p className="mt-2 text-red-500 font-semibold">
                    <InlineMath math="1 \neq 0" /> となり、極限と積分が交換できないことがわかる。
                </p>
            </ContentBox>

            <p>
                こうした病的（しかし決して珍しくはない）反例の存在こそが、「各点収束だけでは限界があり、一様収束の保証を要する」という現代解析学における一様収束の絶対的地位を確固たるものにしています。
                次節 §7.4 では、積分よりもさらにデリケートな操作である「微分」と極限の交換について議論します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>一様収束のもとでは、連続関数の極限は必ず連続になる（<InlineMath math="\varepsilon/3" />論法）。</li>
                    <li>一様収束のもとでは、関数の極限と定積分は順序を交換してよい。</li>
                    <li>各点収束に過ぎない場合は、「幅は狭いが高さが無限大に向かう山」が面積を保ち続けることがあり、積分の極限と極限の積分は一致しないことがある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
