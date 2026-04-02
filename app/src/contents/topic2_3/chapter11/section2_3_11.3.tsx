import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IntegrationByParts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                定積分の計算で置換積分と双璧をなす強力な手法が<strong>部分積分</strong>（Integration by Parts）です。
                これは積の微分法則（ライプニッツ則とも呼ばれる）から直接導かれるものであり、「微分しやすい関数」と「積分しやすい関数」が掛け合わされているときに、積分の難易度を劇的に下げる特効薬として機能します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">部分積分の法則と証明</h2>

            <p>
                部分積分の公式は、単なる暗記用のテクニックではなく、微分法と積分法を繋ぐ定理（基本定理）のもうひとつの表現形態でもあります。
            </p>

            <ContentBox type="theorem" title="Theorem 11.3-1 (部分積分の定理)">
                <p>
                    2つの関数 <InlineMath math="f(x), g(x)" /> が閉区間 <InlineMath math="[a, b]" /> 上で <InlineMath math="C^1" /> 級（ともに微分可能であり、その導関数 <InlineMath math="f'(x), g'(x)" /> が連続）であるとする。
                </p>
                <p className="mt-4">
                    このとき、定積分に関して次の等式が成立する。
                </p>
                <BlockMath math="\int_a^b f(x) g'(x) dx = \left[ f(x)g(x) \right]_a^b - \int_a^b f'(x) g(x) dx" />
                <p>
                    （ただし <InlineMath math="\left[ f(x)g(x) \right]_a^b = f(b)g(b) - f(a)g(a)" /> である）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (積の微分法則を利用した証明)">
                <p>
                    <InlineMath math="f" /> と <InlineMath math="g" /> はともに微分可能であるから、2つの関数の積 <InlineMath math="f(x)g(x)" /> も微分可能であり、積の微分法則（Theorem 6.3-2 相当）から次が成り立つ。
                </p>
                <BlockMath math="\frac{d}{dx} \{ f(x)g(x) \} = f'(x)g(x) + f(x)g'(x)" />
                <p className="mt-4">
                    この等式は、右辺の関数 <InlineMath math="f'(x)g(x) + f(x)g'(x)" /> の<strong>原始関数の一つが <InlineMath math="f(x)g(x)" /> である</strong>ことを示している。
                </p>
                <p className="mt-4">
                    また仮定より、<InlineMath math="f, g, f', g'" /> はすべて連続であるため、それらの積空間での和である右辺の関数全体も連続関数であり、区間 <InlineMath math="[a, b]" /> 上でリーマン可積分である。<br />
                    したがって、両辺を <InlineMath math="a" /> から <InlineMath math="b" /> まで定積分し、右辺には積分の線形性（Proposition 9.3-1）を、左辺には微積分の基本定理（Theorem 9.4-2）を適用すると、
                </p>
                <BlockMath math="\begin{aligned} \int_a^b \frac{d}{dx} \{ f(x)g(x) \} dx &= \int_a^b f'(x)g(x) dx \\ &\quad + \int_a^b f(x)g'(x) dx \end{aligned}" />
                <BlockMath math="\left[ f(x)g(x) \right]_a^b = \int_a^b f'(x)g(x) dx + \int_a^b f(x)g'(x) dx" />
                <p>
                    となる。<br />
                    移項して整理すれば、目的の式が得られる。
                </p>
                <BlockMath math="\int_a^b f(x)g'(x) dx = \left[ f(x)g(x) \right]_a^b - \int_a^b f'(x)g(x) dx" />
                <p>
                    よって部分積分の公式が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用例（1）：三角関数の漸化式（ウォリス積分）</h2>

            <p>
                部分積分の強さを実感できるのが、漸化式を用いた積分の計算です。積分を直接計算する代わりに、「自分自身の次数が少し下がったバージョン」で表現し直すことで、帰納的に解を求めるアプローチです。
            </p>

            <ContentBox type="example" title={`Example 11.3-1 (ウォリス積分の漸化式)`}>
                <p>
                    非負整数 <InlineMath math="n" /> に対し、<InlineMath math="I_n = \int_0^{\pi/2} \sin^n x dx" /> とおく。この <InlineMath math="I_n" /> についての漸化式を導く。<br />
                    （ちなみに <InlineMath math="I_n = \int_0^{\pi/2} \cos^n x dx" /> でも値は同じになる。）
                </p>
                <p className="mt-4">
                    <InlineMath math="n \geq 2" /> のとき、被積分関数を <InlineMath math="\sin^{n-1} x \cdot \sin x" /> に分解し、以下のように設定して部分積分を行う。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>微分する関数（<InlineMath math="f" />）：<InlineMath math="\sin^{n-1} x" /> <InlineMath math="\implies f' = (n-1)\sin^{n-2}x \cos x" /></li>
                    <li>積分する関数（<InlineMath math="g'" />）：<InlineMath math="\sin x" /> <InlineMath math="\implies g = -\cos x" /></li>
                </ul>
                <BlockMath math="\begin{aligned} I_n &= \int_0^{\pi/2} (\sin^{n-1} x)(\sin x) dx \\ &= \left[ \sin^{n-1}x (-\cos x) \right]_0^{\pi/2} \\ &\quad - \int_0^{\pi/2} (n-1)\sin^{n-2}x \cos x (-\cos x) dx \end{aligned}" />
                <p>
                    ここで第1項の境界値評価は、<InlineMath math="\sin 0 = 0" /> かつ <InlineMath math="\cos(\pi/2) = 0" /> なので <InlineMath math="0" /> となる。<br />
                    第2項について、<InlineMath math="\cos^2 x = 1 - \sin^2 x" /> を用いて変形する。
                </p>
                <BlockMath math="\begin{aligned} I_n &= 0 + (n-1) \int_0^{\pi/2} \sin^{n-2}x (\cos^2 x) dx \\ &= (n-1) \int_0^{\pi/2} \sin^{n-2}x (1 - \sin^2 x) dx \\ &= (n-1) \int_0^{\pi/2} \sin^{n-2}x dx - (n-1) \int_0^{\pi/2} \sin^n x dx \\ &= (n-1)I_{n-2} - (n-1)I_n \end{aligned}" />
                <p className="mt-4">
                    式を整理して <InlineMath math="I_n" /> について解くことにより、
                </p>
                <BlockMath math="n I_n = (n-1) I_{n-2}" />
                <BlockMath math="I_n = \frac{n-1}{n} I_{n-2}" />
                <p>
                    という美しい漸化式が得られる。これと <InlineMath math="I_0 = \pi/2" />、<InlineMath math="I_1 = 1" /> を組み合わせることで、どんな高次の <InlineMath math="\sin^n x" /> の定積分でも、偶数か奇数かに応じて階乗のように簡単に計算できる。これは後に円周率の無限項の積（ウォリスの公式）へと繋がる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">応用例（2）：ガンマ関数の関数等式</h2>

            <p>
                前章（§10.4）の最後で導いた広義積分 <InlineMath math="\int_0^\infty x^n e^{-x} dx" /> についても、実はライプニッツ則（パラメータ微分）を持ち出さずとも、部分積分だけで帰納的に解くことができます。
            </p>

            <ContentBox type="example" title={`Example 11.3-2 (ガンマ関数の漸化式の部分積分による導出)`}>
                <p>
                    正の実数 <InlineMath math="s > 0" /> に対してガンマ関数は広義積分で次のように定義される。
                </p>
                <BlockMath math="\Gamma(s) = \int_0^\infty x^{s-1} e^{-x} dx" />
                <p>
                    これを部分積分を用いて、<InlineMath math="\Gamma(s+1)" /> を計算し、<InlineMath math="s\Gamma(s)" /> に等しいことを示す。<br />
                    関数全体を有限区間 <InlineMath math="[0, R]" /> で定積分し、あとで <InlineMath math="R \to \infty" /> の極限をとる。
                </p>
                <BlockMath math="\int_0^R x^s e^{-x} dx" />
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>微分する関数：<InlineMath math="x^s" /> <InlineMath math="\implies s x^{s-1}" /></li>
                    <li>積分する関数：<InlineMath math="e^{-x}" /> <InlineMath math="\implies -e^{-x}" /></li>
                </ul>
                <BlockMath math="\begin{aligned} \int_0^R x^s e^{-x} dx &= \left[ x^s (-e^{-x}) \right]_0^R - \int_0^R s x^{s-1} (-e^{-x}) dx \\ &= \left( -R^s e^{-R} + 0 \right) + s \int_0^R x^{s-1} e^{-x} dx \end{aligned}" />
                <p>
                    ここで <InlineMath math="R \to \infty" /> の極限をとる。<br />
                    指数関数 <InlineMath math="e^R" /> の増加スピードはどんな多項式 <InlineMath math="R^s" /> よりも圧倒的に速いため（ロピタルの定理などで証明可能）、境界項は
                </p>
                <BlockMath math="\lim_{R \to \infty} \left( \frac{R^s}{e^R} \right) = 0" />
                <p>
                    となる。したがって、残る積分の項だけが極限として現れる。
                </p>
                <BlockMath math="\Gamma(s+1) = s \int_0^\infty x^{s-1} e^{-x} dx = s \Gamma(s)" />
                <p className="mt-4">
                    このように、部分積分は定義すらされていない「負の数でのガンマ関数」への拡張をも可能にする、解析学の根幹をなす強力なツールである。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§11.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>部分積分の公式</strong>は、積の微分法則の逆の操作であり、微積分の基本定理によって保証される。</li>
                    <li>直接計算が困難な積分であっても、階乗や漸化式など数学の他の分野と結びつけることで解を導ける。</li>
                    <li>ウォリス積分やガンマ関数の計算など、解析学の高度な理論の入り口となる重要な応用を支えている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
