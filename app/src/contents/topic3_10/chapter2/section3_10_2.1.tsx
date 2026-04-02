import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FormalDerivativeAndMultipleRoots() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、多項式が「重根（重複する根）」を持つかどうかを代数的に判定するための強力なツールである「形式的微分」について学びます。微積分学における微分と見た目は同じですが、極限操作を一切使わず、環論の純粋な代数操作として定義されるのが特徴です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">形式的微分の定義</h2>

            <p>
                多項式の係数を用いた純粋な代数演算として、微分を定義します。
            </p>

            <ContentBox type="definition" title="Definition 2.1-1 (形式的微分)">
                <p>
                    体 <InlineMath math="F" /> 上の多項式 <InlineMath math="f(x) = a_n x^n + \cdots + a_1 x + a_0 \in F[x]" /> に対して、その<strong>形式的微分（formal derivative）</strong> <InlineMath math="f'(x)" /> を次のように定義する。
                </p>
                <BlockMath math="f'(x) = n a_n x^{n-1} + (n-1) a_{n-1} x^{n-2} + \cdots + a_1" />
                <p>
                    ここで係数の <InlineMath math="k a_k" /> は、体 <InlineMath math="F" /> の元 <InlineMath math="a_k" /> を <InlineMath math="k" /> 回足し合わせたもの（<InlineMath math="a_k + \cdots + a_k" />）を意味する。体 <InlineMath math="F" /> の標数によっては、この値が <InlineMath math="0" /> になる可能性があることに注意が必要である。
                </p>
            </ContentBox>

            <p>
                この形式的微分は、解析学で学ぶ微分の基本的な公式（線形性とライプニッツ則）を完全に満たします。
            </p>

            <ContentBox type="proposition" title="Proposition 2.1-1 (形式的微分の性質)">
                <p>
                    任意の多項式 <InlineMath math="f, g \in F[x]" /> と定数 <InlineMath math="c \in F" /> に対して、以下の性質が成り立つ。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="(f + g)' = f' + g'" /></li>
                    <li><InlineMath math="(cf)' = c f'" /></li>
                    <li><InlineMath math="(fg)' = f'g + fg'" /> （積の微分公式 / ライプニッツ則）</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    和の法則と定数倍の法則（1, 2）は、微分の定義から係数ごとの足し算として直接確認できる。
                </p>
                <p>
                    積の微分公式（3）については、まず単項式 <InlineMath math="f = x^m" /> と <InlineMath math="g = x^n" /> の場合を考える。<InlineMath math="(x^m \cdot x^n)' = (x^{m+n})' = (m+n)x^{m+n-1}" /> である。一方、<InlineMath math="(x^m)' x^n + x^m (x^n)' = m x^{m-1} x^n + x^m n x^{n-1} = (m+n)x^{m+n-1}" /> となり一致する。
                </p>
                <p>
                    一般の多項式 <InlineMath math="f, g" /> については、これらを単項式の線形結合で表し、微分の線形性（性質 1, 2）を用いることで、単項式の場合の公式に帰着されて証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                有限体など、標数が <InlineMath math="p > 0" /> の体においては、私たちが慣れ親しんだ実数の微分とは異なる奇妙な現象が起こります。
            </p>

            <ContentBox type="example" title="Example 2.1-1 (標数 p での形式的微分)">
                <p>
                    標数 <InlineMath math="p" /> の有限体 <InlineMath math="\mathbb{F}_p" /> 上の多項式 <InlineMath math="f(x) = x^p - 1 \in \mathbb{F}_p[x]" /> を考える。
                </p>
                <p>
                    この多項式を形式的微分すると、<InlineMath math="f'(x) = p x^{p-1}" /> となるが、<InlineMath math="\mathbb{F}_p" /> において <InlineMath math="p = 0" /> であるため、
                </p>
                <BlockMath math="f'(x) = 0 \cdot x^{p-1} = 0" />
                <p>
                    となる。つまり、定数関数ではない多項式であるにもかかわらず、その微分が恒等的に <InlineMath math="0" /> になってしまう。これは正標数特有の現象である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">重根と形式的微分の関係</h2>

            <p>
                形式的微分を導入した最大の理由は、多項式が重根を持つかどうかの判定に使えるからです。
            </p>

            <ContentBox type="definition" title="Definition 2.1-2 (重根)">
                <p>
                    多項式 <InlineMath math="f(x) \in F[x]" /> の（<InlineMath math="F" /> を含む適当な拡大体における）根 <InlineMath math="\alpha" /> が<strong>重根（multiple root）</strong>であるとは、<InlineMath math="f(x)" /> が <InlineMath math="(x - \alpha)^2" /> で割り切れることである。
                </p>
                <p>
                    一般に、<InlineMath math="(x-\alpha)^k \mid f(x)" /> かつ <InlineMath math="(x-\alpha)^{k+1} \nmid f(x)" /> が成り立つとき、<InlineMath math="\alpha" /> を <InlineMath math="f" /> の <strong><InlineMath math="k" /> 重根</strong>という。
                </p>
            </ContentBox>

            <p>
                ある元が重根であることと、その元が元の多項式と微分の両方の根になることは同値です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.1-1 (重根の判定)">
                <p>
                    <InlineMath math="\alpha" /> が多項式 <InlineMath math="f \in F[x]" /> の重根であるための必要十分条件は、
                </p>
                <BlockMath math="f(\alpha) = 0 \quad \text{かつ} \quad f'(\alpha) = 0" />
                <p>
                    となることである。これは、多項式 <InlineMath math="f" /> と <InlineMath math="f'" /> が <InlineMath math="(x-\alpha)" /> を共通因数に持つこと、すなわち（適当な体において）<InlineMath math="\gcd(f, f') \neq 1" /> であることと同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f(\alpha) = 0" /> なので、<InlineMath math="f(x) = (x-\alpha)^k g(x)" /> （ただし <InlineMath math="g(\alpha) \neq 0" /> で、<InlineMath math="k \geq 1" />）と書ける。
                </p>
                <p>
                    積の微分公式を用いて <InlineMath math="f(x)" /> を形式的微分すると、
                </p>
                <BlockMath math="f'(x) = k(x-\alpha)^{k-1} g(x) + (x-\alpha)^k g'(x)" />
                <p>
                    となる。ここに <InlineMath math="x = \alpha" /> を代入すると、
                </p>
                <BlockMath math="f'(\alpha) = \begin{cases} g(\alpha) & (k = 1 \text{ のとき}) \\ 0 & (k \geq 2 \text{ のとき}) \end{cases}" />
                <p>
                    となる。<InlineMath math="g(\alpha) \neq 0" /> であるため、<InlineMath math="f'(\alpha) = 0" /> となることと、<InlineMath math="k \geq 2" /> （すなわち <InlineMath math="\alpha" /> が重根であること）は完全に同値である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.1-2 (重根の判定例)">
                <p>
                    有理数体上の多項式 <InlineMath math="f(x) = x^3 - 3x + 2" /> の重根を判定する。形式的微分は <InlineMath math="f'(x) = 3x^2 - 3" /> である。
                </p>
                <p>
                    <InlineMath math="f'(x) = 3(x-1)(x+1)" /> なので、<InlineMath math="f'(x) = 0" /> となる候補は <InlineMath math="x = 1, -1" /> である。
                </p>
                <ul className="list-disc list-inside mt-2 mb-2">
                    <li><InlineMath math="x = 1" /> を <InlineMath math="f(x)" /> に代入すると、<InlineMath math="f(1) = 1 - 3 + 2 = 0" />。よって <InlineMath math="x=1" /> は重根である。</li>
                    <li><InlineMath math="x = -1" /> を <InlineMath math="f(x)" /> に代入すると、<InlineMath math="f(-1) = -1 + 3 + 2 = 4 \neq 0" />。よって重根ではない。</li>
                </ul>
                <p>
                    実際に因数分解すると <InlineMath math="f(x) = (x-1)^2(x+2)" /> となり、<InlineMath math="x=1" /> が2重根であることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (GCDの有用性)">
                <p>
                    多項式の最大公約数 <InlineMath math="\gcd(f, f')" /> は、ユークリッドの互除法を用いて<strong>元の体 <InlineMath math="F" /> の範囲内での四則演算だけで計算可能</strong>です。つまり、方程式の根を具体的に求めたり、拡大体に行ったりすることなく、「重根をもつかどうか」を判定できるという大きな利点があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多項式の各項の次数を係数に下ろすことで、代数的に<strong>形式的微分 <InlineMath math="f'(x)" /></strong> を定義できる。和と積の微分の法則が成立する。</li>
                    <li>標数 <InlineMath math="p > 0" /> の体では、定数でない多項式の微分が <InlineMath math="0" /> になることがある（例：<InlineMath math="(x^p)' = 0" />）。</li>
                    <li>根 <InlineMath math="\alpha" /> が重根であることと、<InlineMath math="f(\alpha) = 0" /> かつ <InlineMath math="f'(\alpha) = 0" /> であることは同値である。</li>
                    <li>多項式が重根を持つかどうかは、<InlineMath math="\gcd(f, f') \neq 1" /> を調べることで判定できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
