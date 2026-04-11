import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WeierstrassFactorizationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で準備した無限積の理論を用いて、「与えられた点の列を零点として持つような整関数は作れるか？」という問題を考えます。もし零点が有限個ならば、対応する1次式の積（多項式）を作れば済みますが、無限個の零点を持つ場合は積が発散する危険があります。これを解決するために導入されたのが、強制的に収束させるための「初等因子」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ワイエルシュトラスの初等因子</h2>

            <p>
                単純に <InlineMath math="(1 - z/a_n)" /> を無限に掛け合わせると、<InlineMath math="\sum |z/a_n|" /> が発散する場合に無限積も発散してしまいます。そこで、原点付近での振る舞いを <InlineMath math="1" /> に近づけて収束させるための補正項（指数関数）を掛けたものが初等因子です。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.2-1 (<b>ワイエルシュトラスの初等因子</b>)</span>}>
                <p>
                    非負整数 <InlineMath math="p \geq 0" /> に対して、<b>ワイエルシュトラスの初等因子（Weierstrass elementary factor）</b> <InlineMath math="E_p(z)" /> を次のように定義する。
                </p>
                <BlockMath math="E_0(z) = 1 - z" />
                <p>
                    <InlineMath math="p \geq 1" /> のときは、
                </p>
                <BlockMath math="E_p(z) = (1 - z) \exp\left( z + \frac{z^2}{2} + \cdots + \frac{z^p}{p} \right)" />
                <p>
                    と定める。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1">
                <p>
                    初等因子の低次の具体例を書き下すと次のようになります。これらは全て <InlineMath math="z=1" /> でのみ <InlineMath math="0" /> となる整関数です。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="p=0" /> のとき：<InlineMath math="E_0(z) = 1 - z" /></li>
                    <li><InlineMath math="p=1" /> のとき：<InlineMath math="E_1(z) = (1 - z) e^z" /></li>
                    <li><InlineMath math="p=2" /> のとき：<InlineMath math="E_2(z) = (1 - z) e^{z + z^2/2}" /></li>
                </ul>
                <p>
                    <InlineMath math="p" /> の値が大きくなるほど、補正項である指数関数のテイラー展開が <InlineMath math="(1-z)" /> のテイラー展開を高い次数まで打ち消し、結果として <InlineMath math="z=0" /> の周りでより <InlineMath math="1" /> に近くなります。
                </p>
            </ContentBox>

            <p>
                この「<InlineMath math="z=0" /> 付近でどれだけ <InlineMath math="1" /> に近いか」を定量的に評価することが、後の収束証明の鍵になります。
            </p>

            <ContentBox type="proposition" title="Proposition 6.2-1">
                <p>
                    任意の非負整数 <InlineMath math="p \geq 0" /> に対して、もし <InlineMath math="|z| \leq 1/2" /> ならば、以下の評価が成り立つ。
                </p>
                <BlockMath math="|1 - E_p(z)| \leq |z|^{p+1}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p=0" /> の場合は <InlineMath math="E_0(z) = 1-z" /> であり、<InlineMath math="|1-(1-z)| = |z| \leq |z|^1" /> なので直ちに成立する。
                </p>
                <p>
                    <InlineMath math="p \geq 1" /> とする。<InlineMath math="|z| < 1" /> に対して <InlineMath math="\mathrm{Log}(1-z)" /> は次のように展開できる。
                </p>
                <BlockMath math="\mathrm{Log}(1-z) = - \left( z + \frac{z^2}{2} + \cdots + \frac{z^p}{p} + \frac{z^{p+1}}{p+1} + \cdots \right)" />
                <p>
                    初等因子の定義にある指数部の多項式で、この級数の最初の <InlineMath math="p" /> 項が正確に打ち消される。すなわち、
                </p>
                <BlockMath math="\begin{aligned}
                    E_p(z) &= \exp \left( \mathrm{Log}(1-z) + z + \frac{z^2}{2} + \cdots + \frac{z^p}{p} \right) \\
                    &= \exp \left( - \sum_{k=p+1}^{\infty} \frac{z^k}{k} \right)
                \end{aligned}" />
                <p>
                    ここで <InlineMath math="w = - \sum_{k=p+1}^{\infty} \frac{z^k}{k}" /> と置く。<InlineMath math="|z| \leq 1/2" /> のとき、<InlineMath math="|w|" /> は次のように上から評価できる。
                </p>
                <BlockMath math="\begin{aligned}
                    |w| & \leq \sum_{k=p+1}^{\infty} \frac{|z|^k}{k} \\
                    & \leq \frac{|z|^{p+1}}{p+1} \sum_{m=0}^{\infty} |z|^m \\
                    &= \frac{|z|^{p+1}}{p+1} \frac{1}{1 - |z|} \\
                    & \leq \frac{|z|^{p+1}}{p+1} \cdot 2 \\
                    &
                    \leq |z|^{p+1}
                \end{aligned}" />
                <p>
                    従って <InlineMath math="|w| \leq (1/2)^{p+1} \leq 1/4" />（実際には <InlineMath math="p \geq 1" /> より <InlineMath math="1/4" /> 以下）となる。さて、関数 <InlineMath math="(1 - e^w)/w" /> は <InlineMath math="w=0" /> で <InlineMath math="-1" /> となる整関数であり、<InlineMath math="|w| \leq 1/4" /> の範囲で最大値原理等の簡単な評価により <InlineMath math="|1 - e^w| \leq |w|" /> となることが示せる（厳密には <InlineMath math="e^w-1 = w + w^2/2! + \cdots" /> と考えれば明らか）。
                </p>
                <p>
                    よって、
                </p>
                <BlockMath math="|1 - E_p(z)| = |1 - e^w| \leq |w| \leq |z|^{p+1}" />
                <p>
                    が得られ、証明が完了する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この評価式 <InlineMath math="|1 - E_p(z)| \leq |z|^{p+1}" /> は、初等因子 <InlineMath math="E_p(z)" /> を <InlineMath math="1 + (\text{小さな項})" /> の形に直したとき、その「小さな項」が <InlineMath math="|z|^{p+1}" /> 以下で抑えられることを意味します。これにより、前節の Proposition 6.1-2 を安全に用いることができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ワイエルシュトラスの分解定理</h2>

            <p>
                準備が整いました。集積点を持たずに無限遠へと離散的に発散するような点列を勝手に与えたとき、ちょうどその点列の場所でのみ零点となるような整関数が構成できるか、という問いに答えるのがこの定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ワイエルシュトラスの分解定理)">
                <p>
                    複素数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> は <InlineMath math="0 < |a_1| \leq |a_2| \leq \cdots" /> を満たし、<InlineMath math="n \to \infty" /> のとき <InlineMath math="|a_n| \to \infty" /> となるものとする（ただし重複を許す）。また、<InlineMath math="m \geq 0" /> を整数とする。
                </p>
                <p>
                    このとき、原点 <InlineMath math="0" /> でちょうど <InlineMath math="m" /> 位の零点を持ち、かつ各 <InlineMath math="a_n" /> を零点として持つ（その重複度も一致する）ような<b>整関数が必ず存在する</b>。さらに、指定以上の他の零点は持たない。
                </p>
                <p>
                    構成法として、ある適当な非負整数の列 <InlineMath math="\{p_n\}" /> を選ぶことで、無限積
                </p>
                <BlockMath math="\prod_{n=1}^\infty E_{p_n}\left( \frac{z}{a_n} \right)" />
                <p>
                    は全平面 <InlineMath math="\mathbb{C}" /> 上で広義一様収束し整関数となる。
                </p>
                <p>
                    より一般に、同条件を満たす任意の整関数 <InlineMath math="f(z)" /> は、常にある整関数 <InlineMath math="g(z)" /> を用いて次のように積表示される。
                </p>
                <BlockMath math="f(z) = z^m e^{g(z)} \prod_{n=1}^\infty E_{p_n}\left( \frac{z}{a_n} \right)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    構成部分のみ証明する。任意のコンパクト集合 <InlineMath math="K \subset \mathbb{C}" /> 上で無限積が広義一様収束するように、数列 <InlineMath math="p_n" /> を設計すればよい。<InlineMath math="K" /> は有界なのである <InlineMath math="R > 0" /> が存在して <InlineMath math="K \subset \{z \mid |z| \leq R\}" /> とできる。
                </p>
                <p>
                    仮定より <InlineMath math="|a_n| \to \infty" /> だから、ある <InlineMath math="N" /> が存在して、<InlineMath math="n \geq N" /> ならば <InlineMath math="|a_n| \geq 2R" /> となるようにできる。このとき <InlineMath math="K" /> 上の任意の <InlineMath math="z" /> に対して <InlineMath math="|z/a_n| \leq R/(2R) = 1/2" /> となる。
                </p>
                <p>
                    Proposition 6.2-1 を適用すると、<InlineMath math="n \geq N" /> のとき
                </p>
                <BlockMath math="\left| 1 - E_{p_n}\left( \frac{z}{a_n} \right) \right| \leq \left| \frac{z}{a_n} \right|^{p_n+1} \leq \left( \frac{R}{|a_n|} \right)^{p_n+1}" />
                <p>
                    ここで Proposition 6.1-2 を安全に使うために、右辺の級数 <InlineMath math="\sum (R/|a_n|)^{p_n+1}" /> が収束するような <InlineMath math="p_n" /> を選ぶ。極端な例として <InlineMath math="p_n = n - 1" /> と選ぶと、ある <InlineMath math="N" /> 以降では <InlineMath math="R/|a_n| \leq 1/2" /> となるため、級数の各項は <InlineMath math="(1/2)^n" /> で上から抑えられ、確かに収束する。（もちろんもっと小さく、例えば定数でも収束するならそれでよい）。
                </p>
                <p>
                    これにより <InlineMath math="\sum |1 - E_{p_n}(z/a_n)|" /> は <InlineMath math="K" /> 上で一様収束するため、無限積 <InlineMath math="\prod E_{p_n}(z/a_n)" /> は <InlineMath math="\mathbb{C}" /> 全体で広義一様収束して整関数となる。<InlineMath math="z^m" /> を掛けたものも整関数であり、零点はまさに <InlineMath math="z=0" />（位数 <InlineMath math="m" />）と <InlineMath math="z=a_n" /> のみとなる。
                </p>
                <p>
                    最後に一般形について、関数 <InlineMath math="f(z)" /> を構成した積 <InlineMath math="P(z) = z^m \prod E_{p_n}(z/a_n)" /> で割った商 <InlineMath math="f(z)/P(z)" /> を考える。零点が完全に一致しているため、この商は特異点が全て除去可能であり、至る所 <InlineMath math="\neq 0" /> の整関数となる。したがって、ある整関数 <InlineMath math="g(z)" /> が存在して <InlineMath math="f(z)/P(z) = e^{g(z)}" /> と書ける。（単連結領域 <InlineMath math="\mathbb{C}" /> 上で零点を持たない正則関数には対数が存在するため）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-2">
                <p>
                    前節でも触れたサイン関数の因数分解への適用を見てみましょう。関数 <InlineMath math="f(z) = \sin(\pi z)" /> は整関数で、その零点は <InlineMath math="z = n" /> （<InlineMath math="n \in \mathbb{Z}" />）に1位ずつ存在します。
                </p>
                <p>
                    原点の零点（<InlineMath math="m=1" />）を分離し、残りの零点 <InlineMath math="a_n = \pm 1, \pm 2, \dots" /> を考えます。この場合、級数 <InlineMath math="\sum 1/|a_n|^2 = \sum 1/n^2" /> が収束するため、実は <InlineMath math="p_n = 1" /> でも収束しますが、正と負のペアを組ませると <InlineMath math="p_n = 0" /> の初等因子 <InlineMath math="E_0(z) = 1-z" /> のままでうまくいきます。
                </p>
                <p>
                    実際、ペア <InlineMath math="+n, -n" /> を組み合わせると、
                </p>
                <BlockMath math="E_0\left(\frac{z}{n}\right) E_0\left(\frac{z}{-n}\right) = \left(1 - \frac{z}{n}\right)\left(1 + \frac{z}{n}\right) = 1 - \frac{z^2}{n^2}" />
                <p>
                    となり、<InlineMath math="\sum |z^2/n^2|" /> は収束します。定理から <InlineMath math="\sin(\pi z) = \pi z e^{g(z)} \prod_{n=1}^\infty (1 - z^2/n^2)" /> の形に書けることが保証されます。（さらに解析を進めると実は <InlineMath math="g(z) = 0" /> であることがわかり、無限積表示が完全に証明されます）。
                </p>
            </ContentBox>

            <p>
                このワイエルシュトラスの分解定理は、代数学の基本定理（「多項式は根によって因数分解される」）を無限個の零点を持つ整関数へと拡張したものであると解釈できます。
            </p>

            <ContentBox type="remark" title="存在定理としての意義">
                <p>
                    本定理は「望む通りの零点配置を持つ整関数を必ず作り出せる」という存在定理としての側面が重要です。関数方程式を満たす特異な関数を構成したり、与えられた有理型関数から特定の極や零点を相殺したりする際の基本的な道具となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限積を発散させないための補正項を持つ関数として、初等因子 <InlineMath math="E_p(z) = (1-z)\exp(z + \cdots + z^p/p)" /> が導入された。</li>
                    <li>ワイエルシュトラスの分解定理により、集積点を持たない任意の点列 <InlineMath math="\{a_n\}" /> を零点とする整関数が、初等因子の無限積を用いて必ず構成できる。</li>
                    <li>零点の一致する任意の整関数は、この標準的な無限積と、<InlineMath math="e^{g(z)}" /> （<InlineMath math="\neq 0" /> の整関数）の積として必ず表示できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
