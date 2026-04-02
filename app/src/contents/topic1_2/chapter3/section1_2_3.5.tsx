import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function IntegrationByParts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                積分の2大テクニックのもう1つが<strong>部分積分 (Integration by Parts)</strong> です。
                これは、微分の「積の微分法則（ライプニッツ則）」を逆から読んだものに相当し、対数関数や、<InlineMath math="x e^x" /> のように種類の異なる関数の積が含まれている積分に対して強力に作用します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 部分積分の公式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">部分積分の公式</h2>

            <p>
                被積分関数を2つの関数の積 <InlineMath math="f'(x)g(x)" /> と見なして、一方を積分し、もう一方を後で微分する、という手順を踏みます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-1 （部分積分：不定積分）">
                <p>
                    関数 <InlineMath math="f(x), g(x)" /> が微分可能であるとき、次が成り立つ：
                </p>
                <BlockMath math="\int f'(x) g(x) \, dx = f(x)g(x) - \int f(x) g'(x) \, dx" />
            </ContentBox>

            <ContentBox type="proof" title="Proof （部分積分の公式の証明）">
                <p>
                    積の微分法則 <InlineMath math="\displaystyle \{f(x)g(x)\}' = f'(x)g(x) + f(x)g'(x)" /> が出発点です。
                    両辺を <InlineMath math="x" /> について積分すると：
                </p>
                <BlockMath math="\int \{f(x)g(x)\}' \, dx = \int f'(x)g(x) \, dx + \int f(x)g'(x) \, dx" />
                <p>
                    左辺は <InlineMath math="f(x)g(x)" /> の微分を積分したものであるため、そのまま元の関数 <InlineMath math="f(x)g(x)" /> に戻ります。
                </p>
                <BlockMath math="f(x)g(x) = \int f'(x)g(x) \, dx + \int f(x)g'(x) \, dx" />
                <p>
                    これを <InlineMath math="\displaystyle \int f'(x)g(x)\,dx" /> について解く（移項する）と、部分積分の公式が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="どうやって使う？（関数の選び方）">
                <p>
                    部分積分を成功させる公式の <InlineMath math="f'(x)" /> （積分される側）と <InlineMath math="g(x)" /> （後で微分される側）の割り当てのコツ：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>微分される側（<InlineMath math="g(x)" />）になりやすい：</strong> 対数関数（<InlineMath math="\log x" />）、逆三角関数。<br />これらは微分すると簡単な多項式の分数になり積分が容易になります。</li>
                    <li><strong>積分される側（<InlineMath math="f'(x)" />）になりやすい：</strong> 指数関数（<InlineMath math="e^x" />）、三角関数（<InlineMath math="\sin x" />など）。<br />これらは積分しても形が大きく変わらないからです。</li>
                    <li>多項式（<InlineMath math="x^2" /> など）はその中間で、指数関数などと同居している場合は<strong>微分される側</strong>として次数を落とすために使います。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-1 （部分積分の基本）">
                <p>
                    <InlineMath math="\int x \sin x \, dx" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    <InlineMath math="x" /> をそのまま残すと微分して消えてくれるので、こちらを <InlineMath math="g(x)" /> にします。
                    <InlineMath math="\sin x" /> は <InlineMath math="(-\cos x)'" /> と見なせるので、こちらを <InlineMath math="f'(x)" /> にします。
                </p>
                <p>
                    <InlineMath math="f'(x) = \sin x \implies f(x) = -\cos x" /><br />
                    <InlineMath math="g(x) = x \implies g'(x) = 1" />
                </p>
                <p>公式に当てはめる：</p>
                <BlockMath math="\begin{aligned} \int \underbrace{(\sin x)}_{f'} \cdot \underbrace{x}_{g} \, dx &= \underbrace{(-\cos x)}_{f} \cdot \underbrace{x}_{g} - \int \underbrace{(-\cos x)}_{f} \cdot \underbrace{(x)'}_{g'} \, dx \\ &= -x \cos x - \int (-\cos x \cdot 1) \, dx \\ &= -x \cos x + \int \cos x \, dx \\ &= -x \cos x + \sin x + C \end{aligned}" />
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 定積分の部分積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">定積分の部分積分</h2>

            <p>
                区間を持った定積分にも、そのまま部分積分の公式を適用できます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.5-1 （定積分の部分積分）">
                <p>
                    関数 <InlineMath math="f(x), g(x)" /> が区間 <InlineMath math="[a, b]" /> で微分可能であり、導関数が連続であるとき：
                </p>
                <BlockMath math="\int_a^b f'(x) g(x) \, dx = \Big[ f(x) g(x) \Big]_a^b - \int_a^b f(x) g'(x) \, dx" />
            </ContentBox>

            <ContentBox type="example" title="Example 3.5-2 （対数関数の積分）">
                <p>
                    <InlineMath math="\displaystyle \int_1^e \log x \, dx" /> を求めよ。
                </p>
                <p className="mt-3"><strong>解．</strong></p>
                <p>
                    被積分関数が1つしかないように見えますが、<strong>隠れた「1」</strong>を積分の対象とみなします。<br />
                    <InlineMath math="\log x = 1 \cdot \log x = (x)' \log x" /> と見なします。公式より：
                </p>
                <BlockMath math="\begin{aligned} \int_1^e (x)' \cdot \log x \, dx &= \Big[ x \log x \Big]_1^e - \int_1^e x \cdot (\log x)' \, dx \\ &= (e \log e - 1 \log 1) - \int_1^e x \cdot \left( \frac{1}{x} \right) \, dx \\ &= (e \cdot 1 - 0) - \int_1^e 1 \, dx \\ &= e - \Big[ x \Big]_1^e \\ &= e - (e - 1) = 1 \end{aligned}" />
                <p className="mt-2 text-sm">
                    （この結果から、不定積分 <InlineMath math="\displaystyle \int \log x \, dx = x \log x - x + C" /> も有名公式として知られています）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 繰り返し部分積分
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">繰り返し部分積分</h2>

            <p>
                一回の部分積分では積分可能な形にならず、複数回繰り返すことでようやく積分結果が得られる場合があります。
                <InlineMath math="x^2 e^x" /> のように次数を1つずつ落とす場合や、<InlineMath math="e^x \sin x" /> のように2回繰り返すと「元の積分と同じ形」が循環して現れ、方程式のようにして解く場合があります。
            </p>

            <ContentBox type="remark" title="Remark (繰り返し部分積分の循環・漸化式)">
                <p>
                    <InlineMath math="\displaystyle I = \int e^x \sin x \, dx" /> のような相互に微分可能を持つ関数の積は、
                    部分積分を繰り返すと元の <InlineMath math="I" /> と同じ項が右辺に現れる。
                    このとき、積分 <InlineMath math="I" /> に対する一次方程式を解くことで結果を求める。
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    同様に、<InlineMath math="\displaystyle I_n = \int \sin^n x \, dx" /> のような累乗の積分では、一度部分積分して <InlineMath math="I_n" /> と <InlineMath math="I_{n-2}" /> の関係式（漸化式）を導いてから計算する手法である「ウォリスの公式」などの基礎となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>積の微分方程式の逆演算が<strong>部分積分</strong>である（Theorem 3.5-1）。</li>
                    <li>公式：<InlineMath math="\int f' \cdot g = \Big[f \cdot g\Big] - \int f \cdot g'" />。一方が積分、一方が微分される。</li>
                    <li>対数関数 <InlineMath math="\log x" /> や多項式は微分される側 <InlineMath math="g(x)" /> に選び、指数関数 <InlineMath math="e^x" /> や三角関数を積分される側 <InlineMath math="f'(x)" /> に選ぶとうまくいく。</li>
                    <li><InlineMath math="\log x" /> だけの場合は <InlineMath math="(x)' \cdot \log x" /> とみなして部分積分する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
