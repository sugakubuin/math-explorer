import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExistenceOfGCD() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第5章で「ED ならばユークリッドの互除法により最大公約数（gcd）が存在する」ことを見ました。実は、互除法が使えない UFD であっても、一意な素因数分解（既約分解）を利用することで、gcd の存在を保証することができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">UFD での gcd の定義と構成</h2>

            <p className="leading-relaxed">
                高校数学で整数の最大公約数を求めるとき、互除法だけでなく「素因数分解して共通する素数を拾い出す」という方法も使いました。UFD においてはこの方法が一般化できます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.4-1 (UFD での最大公約数の存在)">
                <p>
                    一意分解整域（UFD）<InlineMath math="D" /> において、任意の2つの元 <InlineMath math="a, b" /> に対して最大公約数 <InlineMath math="\gcd(a, b)" /> が常に存在する。
                </p>
                <p>
                    具体的には、<InlineMath math="a, b" /> に現れるすべての既約元 <InlineMath math="p_i" /> を用いて
                </p>
                <BlockMath math="a = u \prod p_i^{e_i}, \quad b = v \prod p_i^{f_i}" />
                <p>
                    （<InlineMath math="u, v" /> は単元、<InlineMath math="e_i, f_i \geq 0" />）と分解したとき、
                </p>
                <BlockMath math="\gcd(a,b) = \prod p_i^{\min(e_i, f_i)}" />
                <p>
                    が最大公約数を与える。（単元倍の自由度を除く）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="D" /> は UFD なので、<InlineMath math="a, b" /> の既約分解は（単元倍と順序を除いて）一意に存在する。したがって、上記のような指数 <InlineMath math="e_i, f_i" /> を用いた表現は well-defined である。
                </p>
                <p>
                    <InlineMath math="d = \prod p_i^{\min(e_i, f_i)}" /> とおく。この <InlineMath math="d" /> が Definition 5.3-1 で定めた gcd の条件を満たすことを確認する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>公約数であること：</b> 任意の <InlineMath math="i" /> について <InlineMath math="\min(e_i, f_i) \leq e_i" /> だから、<InlineMath math="a" /> は <InlineMath math="d" /> にある元を掛けた形で書け、<InlineMath math="d \mid a" /> となる。同様に <InlineMath math="d \mid b" /> も成り立つ。
                    </li>
                    <li>
                        <b>最大の公約数であること：</b> 任意の公約数を <InlineMath math="c" /> とし、<InlineMath math="c = w \prod p_i^{c_i}" /> と分解する。<br />
                        <InlineMath math="c \mid a" /> より <InlineMath math="c_i \leq e_i" /> であり、<InlineMath math="c \mid b" /> より <InlineMath math="c_i \leq f_i" /> である。<br />
                        したがって <InlineMath math="c_i \leq \min(e_i, f_i)" /> となり、<InlineMath math="c" /> は <InlineMath math="d" /> を割り切る（<InlineMath math="c \mid d" />）。
                    </li>
                </ul>
                <p className="mt-2">
                    よって、この方法で構成された <InlineMath math="d" /> は間違いなく <InlineMath math="\gcd(a, b)" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                ガウス整数環における最大公約数を、この既約分解アプローチで計算してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 7.4-1 (<InlineMath math="\mathbb{Z}[i]" /> での gcd)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}[i]" /> は UFD である。<InlineMath math="a = 6" /> と <InlineMath math="b = 4+2i" /> の最大公約数を、既約分解を用いて求める。
                </p>
                <p>
                    まず、<InlineMath math="1+i" /> と <InlineMath math="3" /> が既約元であることに注意して分解を行う。
                </p>
                <BlockMath math="6 = 2 \cdot 3 = (-i(1+i)^2) \cdot 3 = -i(1+i)^2 \cdot 3" />
                <BlockMath math="4+2i = 2(2+i) = (-i(1+i)^2) \cdot (2+i)" />
                <p>
                    （※ <InlineMath math="(1+i)^2 = 1 + 2i - 1 = 2i" /> なので <InlineMath math="2 = -i(1+i)^2" /> となる。<InlineMath math="-i" /> は単元である）
                </p>
                <p>
                    両者の分解を比較すると、共通する既約元は <InlineMath math="(1+i)^2" /> のみである（<InlineMath math="3" /> と <InlineMath math="2+i" /> に共通部分はない）。
                </p>
                <p>
                    したがって最大公約数は <InlineMath math="\gcd(6, 4+2i) = (1+i)^2 = 2i" /> となる。<br />
                    （単元倍を除けば、<InlineMath math="2" /> と答えても等価である）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PID と UFD での gcd の比較</h2>

            <p className="leading-relaxed">
                このように、UFD でも gcd は存在しますが、PID のときの gcd とは決定的な違いがあります。「ベズーの等式」が成り立つかどうかです。
            </p>

            <ContentBox type="remark" title="Remark (UFD ではベズーの等式が保証されない)">
                <p>
                    第6章で見たように、PID においては <InlineMath math="\gcd(a, b) = d" /> はイデアルの言葉で <InlineMath math="(a) + (b) = (d)" /> と表され、<InlineMath math="sa + tb = d" /> という<b>線形結合（ベズーの等式）</b>で書くことができました。
                </p>
                <p>
                    しかし、一般の UFD では gcd は存在しても、それを <InlineMath math="sa + tb" /> の形で表せるとは限りません。なぜなら <InlineMath math="(a) + (b)" /> というイデアルが主イデアルになるとは限らないからです。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 7.4-2 (<InlineMath math="\mathbb{Z}[x]" /> での gcd とベズーの等式の破綻)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}[x]" /> は UFD であるが PID ではない環の代表例である。この環で <InlineMath math="a = 2x" /> と <InlineMath math="b = x^2" /> の gcd を考える。
                </p>
                <p>
                    既約分解を比較すれば、明らかに <InlineMath math="\gcd(2x, x^2) = x" /> である。
                </p>
                <p>
                    しかし、これをベズーの等式の形 <InlineMath math="s \cdot 2x + t \cdot x^2 = x" />（<InlineMath math="s, t \in \mathbb{Z}[x]" />）で表すことはできない。
                </p>
                <p>
                    もし表せたとして、両辺の一次の項（<InlineMath math="x" /> の係数）を比較してみる。<br />
                    左辺の一次の項は、<InlineMath math="s" /> の定数項を <InlineMath math="s_0" /> としたとき <InlineMath math="s_0 \cdot 2x" /> となり、係数は必ず偶数になる。<br />
                    右辺の一次の項は <InlineMath math="x" /> なので係数は 1（奇数）である。
                </p>
                <p>
                    偶数＝奇数となり矛盾するため、このような多項式 <InlineMath math="s, t" /> は存在しない。すなわち UFD においては、gcd は求まるがベズーの等式は破綻することがある。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>UFD においては、各元を素因数分解して共通部分をとることで、常に最大公約数（gcd）が求められる。</li>
                    <li>しかし PID と異なり、一般の UFD では求めた gcd を <InlineMath math="sa + tb" /> という線形結合（ベズーの等式）で表すことはできない。</li>
                    <li><InlineMath math="\mathbb{Z}[x]" /> は gcd が存在するがベズーの等式が作れない典型的な例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
