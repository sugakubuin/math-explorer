import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceTests() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                広義積分 <InlineMath math="\int_a^\infty f(x) dx" /> などが収束するかどうかは、原始関数を求めてから極限をとることで判定できます。しかし、多くの場合、被積分関数 <InlineMath math="f(x)" /> の<strong>原始関数は初等関数で表せません</strong>。
            </p>
            <p>
                そこで、無限級数の収束判定法（Chapter 3）と同様に、<strong>「積分の値を直接計算することなく、収束・発散の事実だけを判定する」</strong>強力な定理群が必要になります。これが比較判定法をはじめとする収束判定法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">比較判定法</h2>

            <p>
                最も基本となるのは「すでに収束（または発散）が分かっている関数」と大きさを比べる方法です。通常、比較の基準としては前節で計算した <InlineMath math="1/x^p" /> （<InlineMath math="p > 1" /> なら収束、<InlineMath math="p \leq 1" /> なら発散）が用いられます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-1 (広義積分の比較判定法)">
                <p>
                    2つの関数 <InlineMath math="f, g" /> が区間 <InlineMath math="[a, \infty)" /> で定義され、任意の <InlineMath math="R > a" /> で可積分であり、常に
                </p>
                <BlockMath math="0 \leq f(x) \leq g(x)" />
                <p>
                    を満たすとする。このとき、次が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        大きい方の関数 <InlineMath math="g" /> の広義積分 <InlineMath math="\int_a^\infty g(x) dx" /> が収束するならば、小さい方の関数 <InlineMath math="f" /> の広義積分 <InlineMath math="\int_a^\infty f(x) dx" /> も<strong>収束する</strong>。
                    </li>
                    <li>
                        小さい方の関数 <InlineMath math="f" /> の広義積分 <InlineMath math="\int_a^\infty f(x) dx" /> が発散（<InlineMath math="\infty" />）するならば、大きい方の関数 <InlineMath math="g" /> の広義積分 <InlineMath math="\int_a^\infty g(x) dx" /> も<strong>発散する</strong>。
                    </li>
                </ol>
                <p className="mt-4">
                    ※ どちらの関数も非負（<InlineMath math="0 \leq f(x)" />）であることが成立の前提として必須である（マイナスに発散していないことを保証するため）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    積分の上限関数を <InlineMath math="F(R) = \int_a^R f(x) dx" />、<InlineMath math="G(R) = \int_a^R g(x) dx" /> とおく。
                </p>
                <p className="mt-4">
                    <InlineMath math="f(x) \geq 0" /> より、<InlineMath math="F(R)" /> は <InlineMath math="R" /> について単調増加関数である。<br />
                    <span className="font-bold">(1.)</span><br />
                    <InlineMath math="\int_a^\infty g(x) dx" /> が収束して極限値 <InlineMath math="I" /> を持つとすると、<InlineMath math="g(x) \geq 0" /> より <InlineMath math="G(R)" /> も単調増加であるから、常に <InlineMath math="G(R) \leq I" />（上に有界）である。<br />
                    条件 <InlineMath math="f(x) \leq g(x)" /> について両辺を定積分すると、積分の単調性（Proposition 9.3-2）より、
                </p>
                <BlockMath math="F(R) \leq G(R) \leq I" />
                <p>
                    が成り立つ。ゆえに、単調増加関数 <InlineMath math="F(R)" /> は上界 <InlineMath math="I" /> を持つ。<br />
                    実数の公理（上限公理、単調増加で上に有界な関数は極限を持つ）により、<InlineMath math="\lim_{R \to \infty} F(R)" /> は収束する。
                </p>
                <p className="mt-4">
                    <span className="font-bold">(2.)</span><br />
                    対偶をとれば自明である。「<InlineMath math="\int g" /> が収束するなら <InlineMath math="\int f" /> も収束する」の対偶は、「<InlineMath math="\int f" /> が収束しない（発散する）なら <InlineMath math="\int g" /> も収束しない（発散する）」である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">絶対値の評価による条件収束の判定への限界</h2>

            <p>
                比較判定法は「非負関数」を対象としますが、符号が変わる関数にも「絶対収束」を仲介させることで適用できます。<InlineMath math="|f(x)| \leq g(x)" /> が成り立つような収束する <InlineMath math="g" /> が見つかれば、<InlineMath math="\int |f| dx" /> が収束し、Proposition 10.1-1 によって <InlineMath math="\int f dx" /> 自身も（絶対）収束することが言えるからです。
            </p>
            <p>
                しかし、ディリクレ積分として有名な
            </p>
            <BlockMath math="\int_0^\infty \frac{\sin x}{x} dx" />
            <p>
                のような積分は、全体としてはプラスマイナスの山が打ち消し合って収束（条件収束）しますが、絶対値 <InlineMath math="\left|\frac{\sin x}{x}\right|" /> にしてしまうと、その面積の合計は <InlineMath math="\infty" /> に発散するため、比較判定法（絶対収束の証明）では手も足も出ません。
            </p>
            <p>
                このように「振動しながら減衰する関数」の条件収束を判定するために編み出されたのが、次のディリクレとアーベルの判定法です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ディリクレとアーベルの判定法</h2>

            <p>
                これらは、無限級数における「交替級数定理（ライプニッツの定理）」を、積分（連続関数）の世界へ一般化したものです。積分の部分積分公式（極限操作込み）の巧みな応用によって証明されます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.3-2 (ディリクレの判定法)">
                <p>
                    区間 <InlineMath math="[a, \infty)" /> 上の2つの関数 <InlineMath math="f(x), g(x)" /> に対して以下が成り立つとする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <InlineMath math="f" /> の積分（面積）が<strong>有界</strong>である。すなわち、ある定数 <InlineMath math="M > 0" /> が存在して、すべての <InlineMath math="R > a" /> で <InlineMath math="\left| \int_a^R f(x) dx \right| \leq M" /> が成り立つ。（例えば <InlineMath math="f(x) = \sin x" /> など）
                    </li>
                    <li>
                        <InlineMath math="g" /> は <InlineMath math="C^1" /> 級（微分可能で導関数が連続）の<strong>単調減少</strong>関数であり、かつ <InlineMath math="\lim_{x \to \infty} g(x) = 0" /> を満たす。（例えば <InlineMath math="g(x) = 1/x" /> など）
                    </li>
                </ol>
                <p className="mt-4">
                    このとき、広義積分 <InlineMath math="\int_a^\infty f(x) g(x) dx" /> は<strong>収束</strong>する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="F(x) = \int_a^x f(t) dt" /> とおく。仮定 1 より関数 <InlineMath math="F(x)" /> 全体は有界（<InlineMath math="|F(x)| \leq M" />）であり、微分すれば <InlineMath math="F'(x) = f(x)" /> である。<br />
                    ここで部分積分（Theorem 11.3-1）を用いると、
                </p>
                <BlockMath math="\begin{aligned} \int_a^R f(x) g(x) dx &= \int_a^R F'(x) g(x) dx \\ &= \left[ F(x) g(x) \right]_a^R - \int_a^R F(x) g'(x) dx \\ &= F(R) g(R) - F(a) g(a) \\ &\quad - \int_a^R F(x) g'(x) dx \end{aligned}" />
                <p>
                    となる。<InlineMath math="F(a) = \int_a^a f = 0" /> なので第2項は消える。
                </p>
                <p className="mt-4">
                    <InlineMath math="R \to \infty" /> の極限を考える。<br />
                    まず第1項について。<InlineMath math="F(R)" /> は有界（<InlineMath math="\pm M" />の範囲）であり、仮定 2 より <InlineMath math="g(R) \to 0" /> であるから、両者の積は
                    <BlockMath math="\lim_{R \to \infty} F(R) g(R) = 0" />
                    となる。
                </p>
                <p className="mt-4">
                    残る積分項 <InlineMath math="\int_a^\infty F(x) g'(x) dx" /> の収束を絶対収束性によって示す。<br />
                    仮定 2 より <InlineMath math="g" /> は単調減少なので、その導関数は常にゼロ以下の負の値 <InlineMath math="g'(x) \leq 0" /> をとる。したがって <InlineMath math="|g'(x)| = -g'(x)" /> である。<br />
                    絶対値を積分の内側に入れると、
                </p>
                <BlockMath math="\begin{aligned} \int_a^R |F(x) g'(x)| dx &\leq \int_a^R M |g'(x)| dx \\ &= M \int_a^R (-g'(x)) dx \\ &= M \left( -g(R) + g(a) \right) \end{aligned}" />
                <p>
                    <InlineMath math="R \to \infty" /> で <InlineMath math="g(R) \to 0" /> なので、この式の右辺は <InlineMath math="M g(a)" /> （有限の定数）に収束する。<br />
                    すなわち被積分関数は比較判定法（<InlineMath math="M|g'|" /> による優関数）により絶対収束し、積分全体も収束する。
                </p>
                <p className="mt-4">
                    すべての項が収束するため、元の広義積分 <InlineMath math="\int_a^\infty f(x) g(x) dx" /> は極限を持ち、収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 10.3-3 (アーベルの判定法)">
                <p>
                    区間 <InlineMath math="[a, \infty)" /> 上の2つの関数 <InlineMath math="f(x), g(x)" /> に対して以下が成り立つとする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <InlineMath math="f" /> の広義積分 <InlineMath math="\int_a^\infty f(x) dx" /> は<strong>収束</strong>する。（有界よりも強い条件）
                    </li>
                    <li>
                        <InlineMath math="g" /> は <InlineMath math="C^1" /> 級の<strong>単調</strong>（増加でも減少でもよい）かつ<strong>有界</strong>な関数である。（ゼロに収束しなくてもよい）
                    </li>
                </ol>
                <p className="mt-4">
                    このとき、広義積分 <InlineMath math="\int_a^\infty f(x) g(x) dx" /> は<strong>収束</strong>する。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§10.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>比較判定法：</strong> 非負関数の広義積分の収束・発散を、既知の関数の大小関係と「絶対収束」を通じて判定する最も基本的な手法。</li>
                    <li><strong>ディリクレの判定法：</strong> 有界な振動関数とゼロへ単調減少する関数の積の積分に用いる。比較判定法では証明できない条件収束の判定に用いる。</li>
                    <li><strong>アーベルの判定法：</strong> 広義積分が収束する関数とC1級の有界で単調な関数の積の積分に用いる。元の積分の収束性を壊さないための条件。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
