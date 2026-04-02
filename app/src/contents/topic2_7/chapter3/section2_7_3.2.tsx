import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalTheoremOfArithmetic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「すべての整数は素数の積として、ただ一通りに分解できる」という事実は、現代数学のあらゆる分野の基礎となっています。
                この定理は<strong>算術の基本定理 (Fundamental Theorem of Arithmetic)</strong> と呼ばれ、素因数分解の「存在」と「一意性」の二段階で証明されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素因数分解の存在</h2>

            <p>
                まず、どのような整数も必ず素数の積に分解できることを示します。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (素因数分解の存在性)">
                <p>
                    2 以上の任意の整数 <InlineMath math="n" /> は、有限個の素数の積として表すことができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    強い数学的帰納法を用いる。
                    <br /><strong>1. 下限：</strong> <InlineMath math="n = 2" /> のとき、2 は素数であるから成り立つ。
                    <br /><strong>2. 帰納のステップ：</strong> 2 から <InlineMath math="k" /> までのすべての整数について存在性が成り立つと仮定し、 <InlineMath math="k+1" /> について考える。
                    <br />・ <InlineMath math="k+1" /> が素数ならば、それ自身が素数の積（1 個の積）である。
                    <br />・ <InlineMath math="k+1" /> が合成数ならば、ある整数 <InlineMath math="a, b" /> （ <InlineMath math="2 \leq a, b \leq k" /> ）を用いて <InlineMath math="k+1 = ab" /> と書ける。
                    帰納法の仮定より、 <InlineMath math="a" /> も <InlineMath math="b" /> も素数の積として表せる。したがって、それらの積である <InlineMath math="k+1" /> も素数の積として表せる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素因数分解の一意性</h2>

            <p>
                次に、分解の方法が本質的に一通りしかないことを示します。ここでの「本質的に一通り」とは、因数を並べる順番の違いは無視するという意味です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-2 (算術の基本定理)">
                <p>
                    2 以上の任意の整数 <InlineMath math="n" /> の素因数分解は、因数の順序を除いて一意的である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    ある数 <InlineMath math="n" /> が 2 通りの素因数分解を持つと仮定する：
                    <BlockMath math="n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s \quad (p_i, q_j \text{ は素数})" />
                    左辺において <InlineMath math="p_1" /> は <InlineMath math="n" /> を割り切る。よって右辺の積 <InlineMath math="q_1 q_2 \cdots q_s" /> も割り切る。
                    Theorem 3.1-1 （素数の積への割り切り性）を繰り返し適用すると、 <InlineMath math="p_1" /> はある <InlineMath math="q_j" /> を割り切らねばならない。
                    素数 <InlineMath math="q_j" /> の約数は 1 か <InlineMath math="q_j" /> のみであり、 <InlineMath math="p_1 > 1" /> なので、 <InlineMath math="p_1 = q_j" /> が確定する。
                    両辺からこの因数を除去し、同様の操作を繰り返すことで、すべての因数が一対一に対応し、 <InlineMath math="r = s" /> かつ各因数が一致することが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">標準分解と計算法</h2>

            <p>
                一意性が保証されているため、素数を大きさの順に並べ、同じ素数をべき乗でまとめた形を一意に定めることができます。これを<strong>標準分解 (canonical factorization)</strong> と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (標準分解)">
                <p>
                    <BlockMath math="n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k} \quad (p_1 < p_2 < \dots < p_k, \ e_i \geq 1)" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (指数を用いた最大公約数の計算)">
                <p>
                    数 <InlineMath math="a, b" /> の標準分解がわかれば、最大公約数 <InlineMath math="\gcd" /> や最小公倍数 <InlineMath math="\text{lcm}" /> は、各素数の指数の最小値・最大値を取るだけで求まる。
                    <br /><InlineMath math="360 = 2^3 \times 3^2 \times 5^1" />
                    <br /><InlineMath math="504 = 2^3 \times 3^2 \times 7^1" />
                    のとき、
                    <BlockMath math="\begin{aligned} \gcd(360, 504) &= 2^{\min(3,3)} \times 3^{\min(2,2)} \times 5^{\min(1,0)} \times 7^{\min(0,1)} \\ &= 2^3 \times 3^2 = 72 \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="数学的体系の基盤">
                <p>
                    一意性が保証されないような集合（例えば偶数のみを考える集合 <InlineMath math="2\mathbb{Z}" /> など）では、約数や倍数の概念が非常に複雑になります。整数論が美しく整合しているのは、この「算術の基本定理」のおかげと言っても過言ではありません。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>存在性</strong>： すべての整数は「素数という部品」まで分解しきることができる。</li>
                    <li><strong>一意性</strong>： 分解の結果は、因数の順番を除けば常にたった一通りに決まる。</li>
                    <li><strong>証明の核心</strong>： 一意性の証明は、「素数が積を割り切るなら、因数のどれかを割り切る」という性質に依存している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
