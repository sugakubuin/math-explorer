import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RingDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                群論で学んできた「群」は、ただ 1 つの演算（たとえば加法、あるいは乗法）のみが定義された代数系でした。しかし、私たちが日常的に扱う整数 <InlineMath math="\mathbb{Z}" /> や実数 <InlineMath math="\mathbb{R}" />、あるいは多項式などには、「足し算（加法）」と「掛け算（乗法）」の 2 つの演算が同時に備わっています。本章から始まる<b>環論（Ring Theory）</b>では、これら 2 つの演算が「分配法則」によって互いに結びついた構造である「環」について学んでいきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">環の公理と基本用語</h2>

            <p>
                まずは、環という代数系の厳密な定義を与えましょう。
            </p>

            <ContentBox type="definition" title="Definition 1.1-1 (環)">
                <p>
                    集合 <InlineMath math="R" /> に 2 つの二項演算、<b>加法（addition）</b> <InlineMath math="+" /> と<b>乗法（multiplication）</b> <InlineMath math="\cdot" /> が定義されており、以下の 3 つの条件を満たすとき、組 <InlineMath math="(R, +, \cdot)" /> を<b>環（ring）</b>という。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <b>加法群：</b> <InlineMath math="(R, +)" /> はアーベル群（可換群）である。
                        <ul className="list-disc list-inside ml-6 space-y-1 mt-1 text-sm">
                            <li>結合律：<InlineMath math="(a+b)+c = a+(b+c)" /></li>
                            <li>単位元の存在：加法の単位元（<b>零元</b>と呼び <InlineMath math="0" /> と書く）が存在し、<InlineMath math="a+0=0+a=a" />。</li>
                            <li>逆元の存在：各 <InlineMath math="a" /> に加法の逆元（<InlineMath math="-a" /> と書く）が存在し、<InlineMath math="a+(-a)=(-a)+a=0" />。</li>
                            <li>交換律：<InlineMath math="a+b = b+a" /></li>
                        </ul>
                    </li>
                    <li>
                        <b>乗法半群：</b> <InlineMath math="(R, \cdot)" /> は半群である。すなわち、乗法について結合律が成り立つ。
                        <ul className="list-disc list-inside ml-6 space-y-1 mt-1 text-sm">
                            <li>結合律：<InlineMath math="(ab)c = a(bc)" /> （乗法 <InlineMath math="a \cdot b" /> は通常 <InlineMath math="ab" /> と略記する）</li>
                        </ul>
                    </li>
                    <li>
                        <b>分配法則：</b> 加法と乗法が以下の法則で結びついている。（すべての <InlineMath math="a, b, c \in R" /> に対して）
                        <ul className="list-disc list-inside ml-6 space-y-1 mt-1 text-sm">
                            <li>左分配律：<InlineMath math="a(b+c) = ab + ac" /></li>
                            <li>右分配律：<InlineMath math="(b+c)a = ba + ca" /></li>
                        </ul>
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 1.1-1 (整数環と剰余環)">
                <p>
                    私たちがよく知っている整数の集合 <InlineMath math="\mathbb{Z}" /> は、通常の足し算と掛け算について環の公理をすべて満たします。これを<b>整数環</b>と呼びます。
                </p>
                <p>
                    また、群論で登場した <InlineMath math="\bmod n" /> の世界である <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> も、加法に加えて「剰余の乗法」を定義することで環になります。例えば <InlineMath math="n=6" /> のとき、<InlineMath math="\overline{2} \cdot \overline{4} = \overline{8} = \overline{2}" /> といった具合に計算でき、これも結合律や分配法則を満たします。
                </p>
            </ContentBox>

            <p>
                群論のときと同様に、環において乗法の「単位元」や「交換法則」が成り立つとは限りません。これらが成り立つ環には特別な名前がついています。
            </p>

            <ContentBox type="definition" title="Definition 1.1-2 (単位元付き環・可換環)">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>単位元付き環（unital ring）：</b> 乗法の単位元 <InlineMath math="1_R" /> が存在する環。<br />
                        （すべての <InlineMath math="a \in R" /> に対して <InlineMath math="1_R \cdot a = a \cdot 1_R = a" /> を満たす元 <InlineMath math="1_R" /> が存在する）
                    </li>
                    <li>
                        <b>可換環（commutative ring）：</b> 乗法について交換法則が成り立つ環。<br />
                        （すべての <InlineMath math="a, b \in R" /> に対して <InlineMath math="ab = ba" /> が成り立つ）
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="本コースにおける「環」の扱い">
                <p>
                    代数学の教科書によっては、「環」という言葉に最初から乗法の単位元の存在を含める場合と含めない場合があります（例えば、偶数全体 <InlineMath math="2\mathbb{Z}" /> は加法と乗法で閉じていますが、乗法の単位元 <InlineMath math="1" /> が入っていないため、後者の立場では環ですが前者の立場では環ではありません）。
                </p>
                <p>
                    本コースでは、混乱を避けるため、<b>断りのない限り「環」と言えば「単位元付き環」を指す</b>こととします。また、第3章以降の多くの理論は「可換環」であることを前提に進んでいきます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">加法・乗法の基本性質</h2>

            <p>
                環の公理（とくに分配法則）から、私たちが普段当たり前のように使っている「<InlineMath math="0" /> を掛けたら <InlineMath math="0" /> になる」「マイナス同士を掛けたらプラスになる」といった性質が厳密に証明できます。
            </p>

            <ContentBox type="proposition" title="Proposition 1.1-1 (零元とマイナスの性質)">
                <p>
                    任意の環 <InlineMath math="R" /> とその任意の要素 <InlineMath math="a, b \in R" /> に対して、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="0 \cdot a = a \cdot 0 = 0" /> （零元を掛けると必ず零元になる）</li>
                    <li><InlineMath math="(-a)b = a(-b) = -(ab)" /> （マイナスの引き出し）</li>
                    <li><InlineMath math="(-a)(-b) = ab" /></li>
                </ol>
                <p>
                    さらに、単位元付き環であれば以下も成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2" start={4}>
                    <li><InlineMath math="(-1)a = -a" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <InlineMath math="0 \cdot a = 0" /> の証明：<br />
                    加法の零元の性質 <InlineMath math="0 + 0 = 0" /> より、
                </p>
                <BlockMath math="0 \cdot a = (0 + 0) \cdot a" />
                <p>
                    右分配律を適用すると、
                </p>
                <BlockMath math="0 \cdot a = 0 \cdot a + 0 \cdot a" />
                <p>
                    <InlineMath math="R" /> は加法について群であるから、両辺に <InlineMath math="0 \cdot a" /> の加法逆元 <InlineMath math="-(0 \cdot a)" /> を足す（キャンセルする）ことで、<InlineMath math="0 = 0 \cdot a" /> を得る。<InlineMath math="a \cdot 0 = 0" /> も同様に左分配律から示せる。
                </p>
                <p>
                    2. <InlineMath math="(-a)b = -(ab)" /> の証明：<br />
                    <InlineMath math="(-a)b" /> が <InlineMath math="ab" /> の加法逆元であることを示せばよい。
                </p>
                <BlockMath math="ab + (-a)b = (a + (-a))b = 0 \cdot b = 0" />
                <p>
                    よって <InlineMath math="(-a)b" /> は <InlineMath math="ab" /> の加法逆元 <InlineMath math="-(ab)" /> である。
                </p>
                <p>
                    4. <InlineMath math="(-1)a = -a" /> の証明（単位元付きの場合）：<br />
                    性質 2 において <InlineMath math="a = 1" />、<InlineMath math="b = a" /> とおくと、<InlineMath math="(-1)a = -(1 \cdot a) = -a" />。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                最後に、少し奇妙ですが、公理をすべて満たす「極小の環」を紹介します。
            </p>

            <ContentBox type="example" title="Example 1.1-2 (零環)">
                <p>
                    要素がただ一つ <InlineMath math="R = \{0\}" /> のみからなる集合を考える。演算を
                </p>
                <BlockMath math="0 + 0 = 0, \quad 0 \cdot 0 = 0" />
                <p>
                    と定めると、これは環の公理をすべて満たす。これを<b>零環（zero ring）</b>と呼ぶ。
                </p>
                <p>
                    零環において、唯一の要素 <InlineMath math="0" /> は加法の単位元（零元）であると同時に、乗法の単位元 <InlineMath math="1_R" /> でもある（<InlineMath math="0 \cdot 0 = 0" /> より）。つまり、零環は <b><InlineMath math="1 = 0" /> となる唯一の単位元付き環</b>である。逆に言えば、<InlineMath math="1 \neq 0" /> を仮定した時点で、その環は少なくとも 2 つ以上の要素を持つことになる。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.1-2 (単位元の一意性)">
                <p>
                    単位元付き環において、乗法の単位元は唯一つしか存在しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    群論における単位元の一意性の証明と全く同じである。仮に <InlineMath math="1" /> と <InlineMath math="1'" /> が両方とも乗法の単位元であったとする。
                </p>
                <p>
                    <InlineMath math="1'" /> が単位元であることから <InlineMath math="1 \cdot 1' = 1" />。
                    <InlineMath math="1" /> が単位元であることから <InlineMath math="1 \cdot 1' = 1'" />。
                </p>
                <p>
                    よって <InlineMath math="1 = 1'" /> となり、単位元は一意に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§1.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>環（Ring）</b>は、加法についてアーベル群、乗法について半群であり、それらが分配法則で結ばれた代数系である。</li>
                    <li>乗法の単位元 <InlineMath math="1_R" /> を持つものを「単位元付き環」、乗法が可換なものを「可換環」と呼ぶ。本コースでは基本的に単位元付き環を扱う。</li>
                    <li>分配法則から、<InlineMath math="0 \cdot a = 0" /> や <InlineMath math="(-1)a = -a" /> といった基本的な性質が導かれる。</li>
                    <li><InlineMath math="1 = 0" /> が成り立つ環は、ただ 1 つの要素からなる「零環」のみである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}