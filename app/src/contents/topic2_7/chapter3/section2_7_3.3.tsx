import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function InfinitudeOfPrimes() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「素数は無限に存在するのか、それともどこかで終わってしまうのか」という疑問は、古代ギリシャの時代から数学者たちを惹きつけてきました。
                ここでは、ユークリッドによるあまりにも有名な証明と、その分布に関する現代的な知見の一部を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素数は無限に多く存在する</h2>

            <p>
                2300年以上前、ユークリッドはその著書『原論』の中で、素数が無限であることをエレガントな背理法によって示しました。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (素数の無限性)">
                <p>
                    素数は無限に多く存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    素数が有限個しかないと仮定し、すべての素数を <InlineMath math="p_1, p_2, \dots, p_k" /> とする。
                    ここで、次の整数 <InlineMath math="N" /> を構成する：
                    <BlockMath math="N = (p_1 p_2 \cdots p_k) + 1" />
                    <InlineMath math="N" /> は 2 以上の整数であるから、少なくとも一つの素因数 <InlineMath math="q" /> を持つ。
                    仮定より <InlineMath math="q" /> は <InlineMath math="p_1, \dots, p_k" /> のいずれか（たとえば <InlineMath math="p_i" /> ）と一致しなければならない。
                    <br />・ <InlineMath math="q = p_i" /> は <InlineMath math="N" /> を割り切る。
                    <br />・ また <InlineMath math="q = p_i" /> は積 <InlineMath math="p_1 p_2 \cdots p_k" /> も割り切る。
                    <br />したがって、 <InlineMath math="q" /> はそれらの差である
                    <BlockMath math="N - (p_1 p_2 \cdots p_k) = 1" />
                    をも割り切らねばならない。しかし、1 を割り切る素数は存在しない。
                    これは矛盾である。よって素数は無限に存在する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="N 自体は素数か？">
                <p>
                    証明で使った <InlineMath math="N = (p_1 \dots p_k) + 1" /> は、必ずしも素数になるとは限りません。
                    <br />・ <InlineMath math="p_1=2, p_2=3, p_3=5" /> のとき： <InlineMath math="N = 2 \cdot 3 \cdot 5 + 1 = 31" /> （素数）
                    <br />・ <InlineMath math="p_1=2, \dots, p_6=13" /> のとき： <InlineMath math="N = 30030 + 1 = 30031 = 59 \times 509" /> （合成数）
                    ポイントは、「N が素数であること」ではなく、「N が既知の素数以外の素因数を持つこと」にあります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">更なる展望：算術級数中の素数</h2>

            <p>
                素数が単に無限であるだけでなく、特定のグループの中にも無限に含まれることが分かっています。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-2 (ディリクレの算術級数定理)">
                <p>
                    初項 <InlineMath math="a" /> と公差 <InlineMath math="d" /> が互いに素であるような等差数列
                    <BlockMath math="a, \ a+d, \ a+2d, \ a+3d, \dots" />
                    の中には、無限に多くの素数が含まれる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.3-1 (4k+1 型の素数)">
                <p>
                    <InlineMath math="a = 1, \ d = 4" /> について考えると、数列は <InlineMath math="1, 5, 9, 13, 17, 21, 25, 29, \dots" /> となる。
                    この中には <InlineMath math="5, 13, 17, 29, \dots" /> と無限に素数が現れる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="解析的数論への道">
                <p>
                    ユークリッドの証明は「代数的」でしたが、ディリクレの定理の証明には「解析的（微積分的な）」手法、具体的には <InlineMath math="L" /> 関数やディリクレ指標が必要です。
                    この定理は、数論が解析学と深く結びついていることを示す最初期の重要な成果です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>無限性</strong>： 素数は有限個ですべてを数え上げることはできない。</li>
                    <li><strong>構成的な矛盾</strong>： 有限個と仮定してそれらすべての積＋1を作ると、必ず新しい素数の存在が導かれる。</li>
                    <li><strong>分布の広がり</strong>： 単なる無限性だけでなく、等差数列のような特定のパターンの中にも素数は無限に潜んでいる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
