import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PolynomialRingsOverUFD() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で学んだガウスの補題を用いることで、UFD の理論における非常に美しい性質を証明することができます。それは「一意分解性が多項式環にも遺伝する」という事実です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">R[x]の UFD 性の証明</h2>

            <p className="leading-relaxed">
                基礎となる環 <InlineMath math="R" /> が UFD であれば、その上の多項式環 <InlineMath math="R[x]" /> も必ず UFD になります。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 8.3-1 (<InlineMath math="R" /> が UFD ならば <InlineMath math="R[x]" /> も UFD)</span>}>
                <p>
                    一意分解整域（UFD）<InlineMath math="R" /> 上の1変数多項式環 <InlineMath math="R[x]" /> は、それ自身も一意分解整域（UFD）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    UFD であることを示すため、任意の非零非単元 <InlineMath math="f \in R[x]" /> が既約元の積に分解でき、かつ一意であることを示す。
                </p>
                <p>
                    <b>【分解の存在】</b><br />
                    <InlineMath math="f" /> のすべての係数の最大公約数（内容, content）を <InlineMath math="c" /> とすると、<InlineMath math="f = c \cdot f_0" /> と書ける。ここで <InlineMath math="f_0" /> は原始多項式である。<br />
                    <InlineMath math="R" /> は UFD なので、<InlineMath math="c \in R" /> は <InlineMath math="R" /> の既約元の積に分解できる（<InlineMath math="c" /> が単元でなければ）。これらは <InlineMath math="R[x]" /> においても既約元（定数多項式）である。
                </p>
                <p>
                    次に原始多項式 <InlineMath math="f_0" /> の分解を考える。<InlineMath math="R" /> の分数体を <InlineMath math="K = \mathrm{Frac}(R)" /> とすると、<InlineMath math="K[x]" /> は体上の多項式環なので PID であり、したがって UFD である（Theorem 7.3-1）。<br />
                    <InlineMath math="K[x]" /> において <InlineMath math="f_0 = P_1 P_2 \cdots P_k" />（各 <InlineMath math="P_i \in K[x]" /> は既約）と分解する。<br />
                    各 <InlineMath math="P_i" /> に対して、分母を払い係数の gcd をくくり出すことで <InlineMath math="P_i = \frac{a_i}{b_i} p_i" />（<InlineMath math="a_i, b_i \in R" />、<InlineMath math="p_i \in R[x]" /> は原始的）と書ける。
                </p>
                <p>
                    これらを掛け合わせると、<InlineMath math="f_0 = \frac{A}{B} p_1 p_2 \cdots p_k" /> となる。<InlineMath math="B f_0 = A p_1 p_2 \cdots p_k" />。<br />
                    ガウスの補題（Theorem 8.2-1）より、原始多項式の積 <InlineMath math="p_1 \dots p_k" /> は原始的である。<br />
                    両辺の係数の内容を比較すると、<InlineMath math="f_0" /> は原始的だから左辺の内容は <InlineMath math="B" />。右辺の内容は <InlineMath math="A" />。したがって単元倍を除いて <InlineMath math="A = B" /> であり、<InlineMath math="f_0 = p_1 p_2 \cdots p_k" />（単元倍を含む）と <InlineMath math="R[x]" /> 内で分解できる。<br />
                    以上より、<InlineMath math="f = c \cdot p_1 \cdots p_k" /> となり既約分解が存在する。
                </p>
                <p>
                    <b>【分解の一意性】</b><br />
                    <InlineMath math="R[x]" /> 内で2通りの分解があったとする。各因子を定数（<InlineMath math="R" /> の元）と原始多項式に分けることで、<br />
                    <InlineMath math="c_1 \cdots c_s \cdot p_1 \cdots p_k = d_1 \cdots d_t \cdot q_1 \cdots q_l" /> と書ける。<br />
                    両辺の内容をとる（ガウスの補題より原始部分の積は原始的）ことで、定数部分 <InlineMath math="c_1 \cdots c_s" /> と <InlineMath math="d_1 \cdots d_t" /> は単元倍を除いて等しくなり、<InlineMath math="R" /> は UFD だから定数部分の分解は一意である。<br />
                    残る多項式部分 <InlineMath math="p_1 \cdots p_k = q_1 \cdots q_l" /> については、<InlineMath math="K[x]" /> が UFD であることから <InlineMath math="K[x]" /> 内で一意性が保証され、Theorem 8.2-2（ガウスの補題の系）の議論によって <InlineMath math="R[x]" /> での同伴性（単元倍の一致）に引き戻せる。<br />
                    よって分解は一意である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 8.3-1 (<InlineMath math="\mathbb{Z}[x]" /> は UFD)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> は UFD である。したがって、Theorem 8.3-1 により、整数係数の多項式環 <InlineMath math="\mathbb{Z}[x]" /> も UFD である。
                </p>
                <p>
                    例えば <InlineMath math="6x^2 - 6 \in \mathbb{Z}[x]" /> の UFD 分解は次のようになる。
                </p>
                <BlockMath math="6x^2 - 6 = 2 \cdot 3 \cdot (x+1) \cdot (x-1)" />
                <p>
                    ここでの <InlineMath math="2, 3" /> は定数の既約元、<InlineMath math="x+1, x-1" /> は多項式としての既約元である。UFD なので、単元（<InlineMath math="\pm 1" />）と順序を除いてこの分解は一意である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多変数への帰納的拡張</h2>

            <p className="leading-relaxed">
                Theorem 8.3-1 は「1変数」という制限を設けていますが、多変数多項式環の定義（帰納的構成）を思い出すと、この定理を繰り返し適用することで、任意の変数の多項式環が UFD であることを導けます。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 8.3-1 (多変数多項式環への拡張)</span>}>
                <p>
                    <InlineMath math="R" /> が UFD ならば、任意の自然数 <InlineMath math="n" /> に対して <InlineMath math="n" /> 変数多項式環 <InlineMath math="R[x_1, \dots, x_n]" /> も UFD である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多変数多項式環の帰納的定義 <InlineMath math="R[x_1, \dots, x_n] = (R[x_1, \dots, x_{n-1}])[x_n]" /> に、Theorem 8.3-1 を繰り返し適用するだけでよい。
                </p>
                <p>
                    <InlineMath math="R" /> が UFD なので <InlineMath math="R[x_1]" /> も UFD。<br />
                    <InlineMath math="R[x_1]" /> が UFD なので <InlineMath math="R[x_1][x_2] = R[x_1, x_2]" /> も UFD。<br />
                    これを <InlineMath math="n" /> 回繰り返すことで、<InlineMath math="R[x_1, \dots, x_n]" /> が UFD であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 8.3-2 (<InlineMath math="\mathbb{Z}[x, y]" /> は UFD)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}" /> が UFD であるから、Proposition 8.3-1 より <InlineMath math="\mathbb{Z}[x, y]" /> も UFD である。
                </p>
                <p>
                    例えば <InlineMath math="xy + 2" /> は <InlineMath math="\mathbb{Z}[x, y]" /> における既約元である。これを <InlineMath math="(\mathbb{Z}[x])[y]" /> と見て、変数 <InlineMath math="y" /> の1次式 <InlineMath math="(x)y + 2" /> と解釈すれば、これが定数と1次式などに自明でない分解を持たないことが容易に確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (UFD だが PID でない多変数多項式環)">
                <p>
                    第7章の Example 7.5-3 でも触れましたが、<InlineMath math="\mathbb{Z}[x]" /> や <InlineMath math="\mathbb{Q}[x, y]" /> は UFD である一方で PID ではありません。<br />
                    この事実は、「PID <InlineMath math="\implies" /> UFD」の逆が成り立たないことを示す決定的な反例として、代数学において頻繁に参照されます。多項式の変数を増やす操作は UFD 性（一意分解性）を壊しませんが、PID 性（イデアルが1つで生成されるという幾何学的な単純さ）はすぐに壊れてしまうのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="R" /> が UFD ならば <InlineMath math="R[x]" /> も UFD である（ガウスの補題を用いて証明される）。</li>
                    <li>これを帰納的に適用することで、<InlineMath math="n" /> 変数の多項式環 <InlineMath math="R[x_1, \dots, x_n]" /> も UFD となる。</li>
                    <li>多変数多項式環は「一意分解はできるが、単一の元でイデアルが生成できない」典型的な空間（UFD <InlineMath math="\setminus" /> PID）である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
