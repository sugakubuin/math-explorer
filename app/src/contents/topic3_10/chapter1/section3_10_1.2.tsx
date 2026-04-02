import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlgebraicAndTranscendentalElements() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                体の拡大 <InlineMath math="K/F" /> において、<InlineMath math="K" /> の元が「<InlineMath math="F" /> の元を係数とする多項式の方程式の根になるかどうか」によって、元を大きく2つのクラスに分類することができます。本節では、この「代数的元」と「超越的元」の概念を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数的元・超越的元の定義</h2>

            <p>
                方程式の根となるような要素を代数的であると呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (代数的元・超越的元)">
                <p>
                    <InlineMath math="K/F" /> を体の拡大とし、<InlineMath math="\alpha \in K" /> とする。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>
                        <InlineMath math="f(\alpha) = 0" /> となる<strong> <InlineMath math="0" /> でない多項式</strong> <InlineMath math="f \in F[x]" /> が存在するとき、<InlineMath math="\alpha" /> は <InlineMath math="F" /> 上<strong>代数的（algebraic）</strong>であるという。
                    </li>
                    <li>
                        そのような多項式が一切存在しないとき、<InlineMath math="\alpha" /> は <InlineMath math="F" /> 上<strong>超越的（transcendental）</strong>であるという。
                    </li>
                </ul>
            </ContentBox>

            <p>
                具体例を通じて、これらの違いを確認しましょう。
            </p>

            <ContentBox type="example" title="Example 1.2-1 (代数的数と超越数)">
                <p>
                    体の拡大 <InlineMath math="\mathbb{C}/\mathbb{Q}" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\sqrt{2}" /> は <InlineMath math="\mathbb{Q}" /> 上代数的である。なぜなら、多項式 <InlineMath math="f(x) = x^2 - 2 \in \mathbb{Q}[x]" /> の根だからである。</li>
                    <li>虚数単位 <InlineMath math="i = \sqrt{-1}" /> も <InlineMath math="\mathbb{Q}" /> 上代数的である。<InlineMath math="f(x) = x^2 + 1 \in \mathbb{Q}[x]" /> の根となる。</li>
                    <li>円周率 <InlineMath math="\pi" /> やネイピア数 <InlineMath math="e" /> は <InlineMath math="\mathbb{Q}" /> 上超越的であることが知られている（これはいかなる有理数係数の方程式の解にもならないことを意味し、証明は高度である）。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (3乗根の代数性)">
                <p>
                    <InlineMath math="\sqrt[3]{2}" /> は <InlineMath math="f(x) = x^3 - 2 \in \mathbb{Q}[x]" /> の根であるため、<InlineMath math="\mathbb{Q}" /> 上代数的である。
                </p>
                <p>
                    この <InlineMath math="\sqrt[3]{2}" /> を <InlineMath math="\mathbb{Q}" /> に添加して作られる体 <InlineMath math="\mathbb{Q}(\sqrt[3]{2})" /> は、
                </p>
                <BlockMath math="\mathbb{Q}(\sqrt[3]{2}) = \{a + b\sqrt[3]{2} + c\sqrt[3]{4} \mid a,b,c \in \mathbb{Q}\}" />
                <p>
                    という構造を持つ。ここで <InlineMath math="\sqrt[3]{8} = 2 \in \mathbb{Q}" /> となるため、3乗以上の項は <InlineMath math="1, \sqrt[3]{2}, \sqrt[3]{4}" /> の線形結合に還元される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数拡大と単拡大</h2>

            <p>
                個々の要素だけでなく、拡大体全体が代数的であるという性質を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (代数拡大)">
                <p>
                    体の拡大 <InlineMath math="K/F" /> において、<InlineMath math="K" /> の<strong>すべての元</strong>が <InlineMath math="F" /> 上代数的であるとき、<InlineMath math="K/F" /> を<strong>代数拡大（algebraic extension）</strong>という。
                </p>
            </ContentBox>

            <p>
                定義から直ちに明らかではありませんが、有限次元の拡大は必ず代数拡大になるという非常に重要な定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-1 (有限次拡大は代数拡大)">
                <p>
                    <InlineMath math="K/F" /> を有限次拡大とする（すなわち <InlineMath math="[K:F] = n < \infty" />）。このとき、<InlineMath math="K/F" /> は代数拡大である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K" /> の任意の元を <InlineMath math="\alpha" /> とし、これが <InlineMath math="F" /> 上代数的であることを示せばよい。
                </p>
                <p>
                    <InlineMath math="\alpha" /> の冪乗からなる <InlineMath math="n+1" /> 個の元の集合
                </p>
                <BlockMath math="\{1, \alpha, \alpha^2, \ldots, \alpha^n\}" />
                <p>
                    を考える。<InlineMath math="K" /> は <InlineMath math="F" /> 上 <InlineMath math="n" /> 次元のベクトル空間であるため、この <InlineMath math="n+1" /> 個のベクトルは必ず線形従属となる。
                </p>
                <p>
                    したがって、すべてが <InlineMath math="0" /> ではない係数 <InlineMath math="c_0, c_1, \ldots, c_n \in F" /> が存在して、
                </p>
                <BlockMath math="c_n \alpha^n + \cdots + c_1 \alpha + c_0 \cdot 1 = 0" />
                <p>
                    が成立する。ここで多項式 <InlineMath math="f(x) = c_n x^n + \cdots + c_1 x + c_0 \in F[x]" /> を考えると、<InlineMath math="f" /> はゼロ多項式ではなく、かつ <InlineMath math="f(\alpha) = 0" /> を満たす。
                </p>
                <p>
                    よって <InlineMath math="\alpha" /> は <InlineMath math="F" /> 上代数的である。これが <InlineMath math="K" /> の任意の元について言えるので、<InlineMath math="K/F" /> は代数拡大である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                逆は真ではありません。すなわち、無限次拡大であっても代数拡大になるケース（すべての代数的数を集めた体など）が存在します。しかし、超越元を含む拡大は必ず無限次元になります。
            </p>

            <ContentBox type="example" title="Example 1.2-3 (代数拡大と超越拡大)">
                <p>
                    円周率 <InlineMath math="\pi" /> は <InlineMath math="\mathbb{Q}" /> 上超越的であるため、<InlineMath math="\mathbb{Q}(\pi)/\mathbb{Q}" /> は代数拡大ではない。定理の対偶より、その拡大次数は無限大、すなわち <InlineMath math="[\mathbb{Q}(\pi) : \mathbb{Q}] = \infty" /> である。
                </p>
                <p>
                    一方、<InlineMath math="\mathbb{Q}(\sqrt[5]{2})/\mathbb{Q}" /> は、<InlineMath math="[ \mathbb{Q}(\sqrt[5]{2}) : \mathbb{Q} ] = 5" /> の有限次拡大であるため、前定理よりこの体に含まれる<strong>すべての元</strong>（例えば <InlineMath math="\frac{3 + \sqrt[5]{4}}{1 - \sqrt[5]{8}}" /> のような複雑な元）もまた <InlineMath math="\mathbb{Q}" /> 上代数的である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="F" /> 係数の多項式の根となる元を、<InlineMath math="F" /> 上<strong>代数的</strong>であるという。</li>
                    <li>いかなる多項式の根にもならない元を、<InlineMath math="F" /> 上<strong>超越的</strong>であるという。</li>
                    <li>すべての元が代数的である拡大を<strong>代数拡大</strong>という。</li>
                    <li><strong>有限次拡大は必ず代数拡大である</strong>（ベクトル空間の次元を用いた鳩の巣原理的な論法による）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
