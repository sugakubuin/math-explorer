import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_3_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「実数の完備性」という強固な土台を手に入れた我々は、いよいよ解析学の主役である「極限（極限操作）」の厳密な定式化に進みます。
                微分や積分といった操作は、すべて無限を扱う極限操作の特殊な形態です。本節では、最も基本的な極限である「実数列の収束」を厳密に定義し、その基本的な代数構造を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点列の収束と発散の定義（ε-N 論法）</h2>

            <p>
                高校数学の「限りなく近づく」という直感的な言葉を、「任意の小さな誤差範囲内に入る」という論理式（<InlineMath math="\forall" /> と <InlineMath math="\exists" /> の組み合わせ）に翻訳します。これが解析学の標準言語であるイプシロン・エヌ（<InlineMath math="\varepsilon" />-<InlineMath math="N" />）論法です。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (数列の収束・極限値)">
                <p>
                    実数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> と実数 <InlineMath math="\alpha" /> について、以下の条件が成り立つとき、<strong>数列 <InlineMath math="\{a_n\}" /> は <InlineMath math="\alpha" /> に収束する（converge）</strong>といい、<InlineMath math="\lim_{n\to\infty} a_n = \alpha" /> と表す。
                </p>
                <BlockMath math="\forall \varepsilon > 0, \exists N \in \mathbb{N} \text{ s.t. } \forall n \ge N, |a_n - \alpha| < \varepsilon" />
                <p className="mt-2">
                    このとき <InlineMath math="\alpha" /> を数列 <InlineMath math="\{a_n\}" /> の<strong>極限値（limit）</strong>と呼ぶ。<br />
                    収束しない数列は<strong>発散する（diverge）</strong>と呼ばれる。
                </p>
            </ContentBox>

            <p>
                「どんなに小さな誤差の許容範囲 <InlineMath math="\varepsilon" /> を他人が意地悪く設定してきたとしても、自分が『ある番号 <InlineMath math="N" />』以降をすべて指し示して、その番号以降はすべて誤差内に収まっていると必ず反論できる」というゲームに勝てるなら、極限は <InlineMath math="\alpha" /> だ、という意味です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限の一意性</h2>

            <p>
                極限が存在するならば、それは必ず1つに定まります。「2つの異なる場所に同時に近づく」ことはありません。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (収束列の極限値は一意)">
                <p>
                    実数列 <InlineMath math="\{a_n\}" /> が <InlineMath math="\alpha" /> にも <InlineMath math="\beta" /> にも収束するならば、<InlineMath math="\alpha = \beta" /> である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [背理法と三角不等式による証明]">
                <p>
                    もし <InlineMath math="\alpha \neq \beta" /> だと仮定する。このとき、二点の距離は <InlineMath math="|\alpha - \beta| > 0" /> である。
                </p>
                <p className="mt-2">
                    ここで、互いの距離の半分を誤差の許容範囲 <InlineMath math="\varepsilon" /> として選ぶ。<br />
                    すなわち、<InlineMath math="\varepsilon = \frac{|\alpha - \beta|}{2} > 0" /> とする。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[収束の定義を適用]</p>
                <p className="mt-2">
                    <InlineMath math="\{a_n\}" /> は <InlineMath math="\alpha" /> に収束するので、ある自然数 <InlineMath math="N_1" /> が存在して、<InlineMath math="n \ge N_1 \implies |a_n - \alpha| < \varepsilon" />。
                </p>
                <p className="mt-2">
                    同様に、<InlineMath math="\{a_n\}" /> は <InlineMath math="\beta" /> に収束するので、ある自然数 <InlineMath math="N_2" /> が存在して、<InlineMath math="n \ge N_2 \implies |a_n - \beta| < \varepsilon" />。
                </p>
                <p className="mt-2">
                    ここで、<InlineMath math="N = \max(N_1, N_2)" /> とする。<InlineMath math="n \ge N" /> なる <InlineMath math="n" /> を一つ選べば、上記2つの不等式が<strong>同時に</strong>成り立つ。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[三角不等式による評価]</p>
                <p className="mt-2">
                    三角不等式 <InlineMath math="|x + y| \le |x| + |y|" /> を用いて <InlineMath math="\alpha" /> と <InlineMath math="\beta" /> の距離を評価する。間に無理やり項 <InlineMath math="a_n" /> を挟み込む。
                </p>
                <BlockMath math="|\alpha - \beta| = |\alpha - a_n + a_n - \beta| \le |\alpha - a_n| + |a_n - \beta|" />
                <p className="mt-2">
                    ここで同時に成り立つ不等式を使うと、
                </p>
                <BlockMath math="|a_n - \alpha| + |a_n - \beta| < \varepsilon + \varepsilon = 2\varepsilon" />
                <p className="mt-2">
                    しかし、最初に <InlineMath math="\varepsilon = \frac{|\alpha - \beta|}{2}" /> と定義したので、<InlineMath math="2\varepsilon = |\alpha - \beta|" /> である。<br />
                    つまり、
                    <BlockMath math="|\alpha - \beta| < |\alpha - \beta|" />
                    という自己矛盾を示す不等式が得られた。
                </p>
                <p className="mt-2">
                    したがって、最初の仮定 <InlineMath math="\alpha \neq \beta" /> は誤りであり、極限が存在するならば <InlineMath math="\alpha = \beta" /> でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束列の有界性</h2>

            <p>
                収束する数列は、必ずある一定の有限な範囲に収まります。これは後に極限の四則演算を証明する際の重要な補題となります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 (収束列は有界)">
                <p>
                    収束する実数列は、必ず<strong>有界</strong>である。（すなわち、ある実数 <InlineMath math="M > 0" /> が存在して、すべての自然数 <InlineMath math="n" /> について <InlineMath math="|a_n| \le M" /> となる）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [N以降と有限個の項の比較]">
                <p>
                    <InlineMath math="\lim_{n\to\infty} a_n = \alpha" /> とする。収束の定義で、特別な <InlineMath math="\varepsilon = 1" /> に対応する <InlineMath math="N" /> をとる。
                    すると、<InlineMath math="n \ge N" /> となるすべての <InlineMath math="n" /> について <InlineMath math="|a_n - \alpha| < 1" /> である。
                </p>
                <p className="mt-2">
                    逆向きの三角不等式（<InlineMath math="|x| - |y| \le |x - y|" />）より、
                    <BlockMath math="|a_n| - |\alpha| \le |a_n - \alpha| < 1 \implies |a_n| < |\alpha| + 1" />
                    が成り立つ。これで <strong>第 <InlineMath math="N" /> 項以降の項の大きさはすべて <InlineMath math="|\alpha| + 1" /> 未満</strong> であることがわかった。
                </p>
                <p className="mt-2">
                    残された項は <InlineMath math="a_1, a_2, \dots, a_{N-1}" /> の <strong>有限個</strong> だけである。<br />
                    有限個の数であれば、当然その中で最大の絶対値を見つけることができる。
                </p>
                <p className="mt-2">
                    そこで、定数 <InlineMath math="M" /> を次のように定義する。
                    <BlockMath math="M = \max\{|a_1|, |a_2|, \dots, |a_{N-1}|, |\alpha| + 1\}" />
                </p>
                <p className="mt-2">
                    この <InlineMath math="M" /> は、最初の有限個の項でも、<InlineMath math="N" /> 以降のすべて項でもカバーできる大きさを持つ。
                    したがって、すべての自然数 <InlineMath math="n" /> について <InlineMath math="|a_n| \le M" /> が成り立ち、数列は有界である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限の代数演算</h2>

            <p>
                収束する数列同士の和、差、積、商をとった新しい数列も、また元の極限値の四則演算に収束します。極限操作と代数演算が「交換可能」であるという重要な性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-2 (収束列の四則演算と極限)">
                <p>
                    <InlineMath math="\lim_{n\to\infty} a_n = \alpha" /> および <InlineMath math="\lim_{n\to\infty} b_n = \beta" /> であるとき、次が成り立つ。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>(1) <strong>和・差</strong>：<InlineMath math="\lim_{n\to\infty} (a_n \pm b_n) = \alpha \pm \beta" /></li>
                    <li>(2) <strong>スカラー倍</strong>：<InlineMath math="\lim_{n\to\infty} c a_n = c \alpha \quad (c \in \mathbb{R})" /></li>
                    <li>(3) <strong>積</strong>：<InlineMath math="\lim_{n\to\infty} (a_n b_n) = \alpha \beta" /></li>
                    <li>(4) <strong>商</strong>：<InlineMath math="\beta \neq 0" /> かつすべての <InlineMath math="n" /> で <InlineMath math="b_n \neq 0" /> ならば、<InlineMath math="\lim_{n\to\infty} \left(\frac{a_n}{b_n}\right) = \frac{\alpha}{\beta}" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof [和・差・積の証明]">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[和 (1) の証明]</p>
                <p className="mt-2">
                    任意の <InlineMath math="\varepsilon > 0" /> をとる。極限の定義より、
                    <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                        <li>ある <InlineMath math="N_1" /> が存在して、<InlineMath math="n \ge N_1 \implies |a_n - \alpha| < \frac{\varepsilon}{2}" /></li>
                        <li>ある <InlineMath math="N_2" /> が存在して、<InlineMath math="n \ge N_2 \implies |b_n - \beta| < \frac{\varepsilon}{2}" /></li>
                    </ul>
                    <InlineMath math="N = \max(N_1, N_2)" /> とおく。<InlineMath math="n \ge N" /> のとき、三角不等式より、
                    <BlockMath math="\begin{aligned} |(a_n + b_n) - (\alpha + \beta)| &= |(a_n - \alpha) + (b_n - \beta)| \\ &\le |a_n - \alpha| + |b_n - \beta| \\ &< \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \end{aligned}" />
                    よって、和は <InlineMath math="\alpha + \beta" /> に収束する。（差も同様）
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[積 (3) の証明]</p>
                <p className="mt-2">
                    うまく変形して、「数列の有界性」を利用する。
                    <BlockMath math="\begin{aligned} |a_n b_n - \alpha \beta| &= |a_n b_n - a_n \beta + a_n \beta - \alpha \beta| \\ &\le |a_n||b_n - \beta| + |\beta||a_n - \alpha| \end{aligned}" />
                </p>
                <p className="mt-2">
                    <strong>Proposition 3.1-1</strong> より <InlineMath math="\{a_n\}" /> は有界なので、ある <InlineMath math="M > 0" /> が存在して <InlineMath math="|a_n| \le M" />。<br />
                    ここで <InlineMath math="K = \max(M, |\beta|) > 0" /> とおく。
                    <BlockMath math="|a_n b_n - \alpha \beta| \le K|b_n - \beta| + K|a_n - \alpha|" />
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="a_n \to \alpha, b_n \to \beta" /> であるため、<br />
                    ある <InlineMath math="N_1" /> で <InlineMath math="n \ge N_1 \implies |a_n - \alpha| < \frac{\varepsilon}{2K}" /> <br />
                    ある <InlineMath math="N_2" /> で <InlineMath math="n \ge N_2 \implies |b_n - \beta| < \frac{\varepsilon}{2K}" /> とできる。
                </p>
                <p className="mt-2">
                    <InlineMath math="N = \max(N_1, N_2)" /> をとれば、<InlineMath math="n \ge N" /> において
                    <BlockMath math="|a_n b_n - \alpha \beta| \le K\left(\frac{\varepsilon}{2K}\right) + K\left(\frac{\varepsilon}{2K}\right) = \varepsilon" />
                    となり、積は <InlineMath math="\alpha \beta" /> に収束する。（商の証明も同様の手法に「分母が0から離れていること」を示す補題を追加して証明されるが省略する）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>数列の収束は、<InlineMath math="\varepsilon" />-<InlineMath math="N" />論法を用いて「どんな微小な誤差 <InlineMath math="\varepsilon" /> に対しても、ある番号 <InlineMath math="N" /> 以降は必ずその誤差内に留まる」と定義される。</li>
                    <li>極限値が存在すれば、それはただ1つに定まる。</li>
                    <li>収束する数列は必ず有界である（有限の範囲に収まる）。</li>
                    <li>収束関数列の極限は、和・差・積・商の代数演算と交換可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
