import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HadamardFactorizationTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ワイエルシュトラスの分解定理では、勝手に与えた零点を持つ整関数が常に初等因子の積と <InlineMath math="e^{g(z)}" /> の積として書けることを保証しました。しかし、<InlineMath math="g(z)" /> がどんな関数か、あるいは初等因子の次数 <InlineMath math="p_n" /> をどれだけ小さくできるかについての具体的な情報は含まれていません。本節では、関数の「増大度」を測ることで、この積の形をより厳密に決定するハダマールの因数分解定理を紹介します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">整関数の位数と階数</h2>

            <p>
                多項式 <InlineMath math="z^n" /> の絶対値は <InlineMath math="R \to \infty" /> で <InlineMath math="R^n" /> のオーダーで増大します。一方で、指数関数 <InlineMath math="e^z" /> はそれよりもはるかに速い <InlineMath math="e^R" /> のオーダーで増大します。この増大の速さを指数的に比較する指標が「位数」です。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.4-1 (<b>整関数の位数</b>)</span>}>
                <p>
                    整関数 <InlineMath math="f(z)" /> に対して、原点からの距離 <InlineMath math="r" /> の円周上の最大値を
                </p>
                <BlockMath math="M(r) = \max_{|z|=r} |f(z)|" />
                <p>
                    とする。<InlineMath math="f(z)" /> の<b>位数（order）</b> <InlineMath math="\rho" /> を次のように定義する。
                </p>
                <BlockMath math="\rho = \limsup_{r \to \infty} \frac{\log \log M(r)}{\log r}" />
                <p>
                    これは、任意の <InlineMath math="\varepsilon > 0" /> について、十分大きい <InlineMath math="r" /> において <InlineMath math="M(r) \leq \exp(r^{\rho + \varepsilon})" /> が成り立ち、かつ <InlineMath math="\rho - \varepsilon" /> では成り立たないような境界の値 <InlineMath math="\rho" /> を意味する。
                </p>
            </ContentBox>

            <p>
                また、ワイエルシュトラス積に現れる初等因子の次数に着目した「階数」という概念も同時に定めます。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.4-2 (<b>整関数の階数</b>)</span>}>
                <p>
                    整関数 <InlineMath math="f(z)" /> の <InlineMath math="0" /> 以外の零点列を <InlineMath math="\{a_n\}" /> とする。級数
                </p>
                <BlockMath math="\sum_{n=1}^\infty \frac{1}{|a_n|^{p+1}}" />
                <p>
                    が収束するような最小の非負整数 <InlineMath math="p" /> を、この整関数の<b>階数（genus）</b>と呼ぶ。このとき、ワイエルシュトラス積で全ての <InlineMath math="n" /> について <InlineMath math="p_n = p" /> という共通の一定値を使うことができる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-1">
                <p>
                    典型的な関数の位数を確認しましょう。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        指数関数 <InlineMath math="f(z) = e^z" />：最大値は <InlineMath math="z = r" /> のときであり <InlineMath math="M(r) = e^r" />。したがって、
                        <BlockMath math="\rho = \lim_{r \to \infty} \frac{\log(\log e^r)}{\log r} = \lim_{r \to \infty} \frac{\log r}{\log r} = 1" />
                        となり位数は <InlineMath math="\rho = 1" /> です。<InlineMath math="\sin z = (e^{iz} - e^{-iz})/(2i)" /> の位数も同様に <InlineMath math="\rho = 1" /> です。
                    </li>
                    <li>
                        <InlineMath math="f(z) = e^{z^2}" />：<InlineMath math="M(r) = e^{r^2}" /> より <InlineMath math="\rho = 2" /> となります。
                    </li>
                    <li>
                        多項式：<InlineMath math="M(r) \sim c r^n" /> なので、<InlineMath math="\log M(r) \sim \log c + n \log r" />。したがって <InlineMath math="\log \log M(r) \sim \log(n \log r)" /> となり、<InlineMath math="r \to \infty" /> で <InlineMath math="\log(n \log r)/\log r \to 0" /> に収束します。よって多項式の位数は <InlineMath math="\rho = 0" /> です。
                    </li>
                </ul>
            </ContentBox>

            <p>
                直感的に言えば、位数が有限であれば、その関数は多項式を指数関数に代入したような <InlineMath math="\exp(z^\rho)" /> 程度の速さで増大するということです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハダマールの因数分解定理</h2>

            <p>
                位数が有限の整関数は、その増大の速さが「遅い」ために、あまり極端に多くの零点を詰め込むことができません。この事実から零点列の増大度が制限され、ワイエルシュトラス積における未定の <InlineMath math="g(z)" /> や <InlineMath math="p_n" /> が強く決定されます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (ハダマールの因数分解定理)">
                <p>
                    有限の位数 <InlineMath math="\rho" /> を持つ整関数 <InlineMath math="f(z)" /> は、次のような標準的な積表示を持つ。
                </p>
                <BlockMath math="f(z) = z^m e^{Q(z)} \prod_{n=1}^\infty E_p\left(\frac{z}{a_n}\right)" />
                <p>
                    ここで、
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="p" /> は整関数の階数であり、<InlineMath math="p \leq \rho" /> の範囲にある非負整数である。</li>
                    <li><InlineMath math="Q(z)" /> は多項式であり、その次数は <InlineMath math="\leq \rho" />（正確には位数の上限を超えない）である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。まず、関数の増大度（位数 <InlineMath math="\rho" />）から、半径 <InlineMath math="r" /> の円内にある零点の個数 <InlineMath math="n(r)" /> の増大度を見積もることができる（ジェンセンの公式による評価）。具体的には <InlineMath math="n(r) = O(r^{\rho + \varepsilon})" /> となる。
                </p>
                <p>
                    この零点の個数の評価から、零点列 <InlineMath math="|a_n|" /> の離散化の速度がわかり、級数 <InlineMath math="\sum |a_n|^{-(\rho + \varepsilon + 1)}" /> が収束することが示される。したがって、階数 <InlineMath math="p" /> は <InlineMath math="\rho" /> 以下であることが保証され、一定の初等因子 <InlineMath math="E_p" /> によるワイエルシュトラス積
                </p>
                <BlockMath math="P(z) = \prod_{n=1}^\infty E_p\left(\frac{z}{a_n}\right)" />
                <p>
                    が構成できる。
                </p>
                <p>
                    次に、<InlineMath math="f(z) = z^m e^{g(z)} P(z)" /> とおき、余分な関数 <InlineMath math="g(z)" /> が極端に発散しないことを示す。積 <InlineMath math="P(z)" /> の絶対値が「小さくなりすぎない」領域（零点から少し離れた領域）を選んで <InlineMath math="f(z)" /> の位数 <InlineMath math="\rho" /> の仮定を適用すると、<InlineMath math="e^{g(z)}" /> の増大度が <InlineMath math="O(\exp(|z|^{\rho + \varepsilon}))" /> 以下であることが見積もられる。
                </p>
                <p>
                    <InlineMath math="e^{g(z)}" /> がこの増大度を持つということは、その対数である <InlineMath math="g(z)" /> 自体の実部が多項式的な増大しか持たないことを意味し、拡張されたリューヴィルの定理（またはボレル・カラテオドリの定理など）により、<InlineMath math="g(z)" /> が多項式 <InlineMath math="Q(z)" /> であり、その次数が <InlineMath math="\rho" /> 以下であることが導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 6.4-3">
                <p>
                    <InlineMath math="f(z) = \sin(\pi z)" /> への適用を再度見てみましょう。前述のとおり、<InlineMath math="\sin(\pi z)" /> は位数 <InlineMath math="\rho = 1" /> の整関数です。
                </p>
                <p>
                    零点は <InlineMath math="z = n" /> (<InlineMath math="n \neq 0" />) であり、階数 <InlineMath math="p" /> は <InlineMath math="\sum |n|^{-(p+1)}" /> が収束する最小の整数なので、<InlineMath math="\sum 1/|n|" /> (発散), <InlineMath math="\sum 1/|n|^2" /> (収束) より <InlineMath math="p = 1" /> です。しかし、正負のペア <InlineMath math="\pm n" /> をまとめて <InlineMath math="1 - z^2/n^2" /> と書けるため、実質的には <InlineMath math="p=0" /> 相当の初等因子で収束させることができます。
                </p>
                <p>
                    ハダマールの定理から、<InlineMath math="Q(z)" /> は次数 <InlineMath math="\leq 1" /> の多項式、すなわち <InlineMath math="Q(z) = az+b" /> と置けます。したがって、
                </p>
                <BlockMath math="\sin(\pi z) = \pi z e^{az+b} \prod_{n=1}^\infty \left( 1 - \frac{z^2}{n^2} \right)" />
                <p>
                    の形になることがハダマールの定理の時点で確定します。
                </p>
                <p>
                    あとは未定係数 <InlineMath math="a, b" /> を決めるだけです。<InlineMath math="z \to 0" /> で <InlineMath math="\sin(\pi z) / (\pi z) \to 1" /> なので <InlineMath math="e^b = 1" /> より <InlineMath math="b=0" />（または <InlineMath math="2\pi i k" />）。また、<InlineMath math="f(-z) = -f(z)" /> という奇関数性から <InlineMath math="a=0" /> も直ちに導かれ、結果的に <InlineMath math="Q(z) = 0" /> と特定されます。このように、増大度による制限があるおかげで、残りの部分を非常に簡単な係数比較で決定できるのが強力な点です。
                </p>
            </ContentBox>

            <p>
                ハダマールの因数分解定理は、関数の増大の速さ（位数）と零点の分布状況（階数）が互いに強く結びついていることを示す、19世紀末の複素解析学における大きな成果の一つです。
            </p>

            <ContentBox type="remark" title="ゼータ関数との関わり">
                <p>
                    このハダマールの定理の直接の動機は、素数定理を証明するためにリーマン・ゼータ関数（正確にはそれに付随する整関数 <InlineMath math="\xi(s)" />）の零点分布を調べることでした。リーマン自身が予想の形で用いた級数展開が、この定理により厳密に完全に正当化されました。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>整関数の増大度を測る指標として位数 <InlineMath math="\rho" />（<InlineMath math="\exp(r^\rho)" /> 程度の発散）が定義される。</li>
                    <li>ハダマールの因数分解定理により、位数 <InlineMath math="\rho" /> が有限の整関数のワイエルシュトラス積における未定関数 <InlineMath math="e^{g(z)}" /> の部分は、必ず次数 <InlineMath math="\leq \rho" /> の多項式を指数部に持つ <InlineMath math="e^{Q(z)}" /> となる。</li>
                    <li>この定理により、増大度から関数を構成する枠組みが定まり、未知の関数の無限積表示を決定する過程が見通し良い有限次元の問題（多項式の係数決定）に帰着される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
