import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PowerFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                対数関数が定義されたことで、正の数だけではなく、複素数 <InlineMath math="z" /> を底とし、複素数 <InlineMath math="a" /> を指数とする<strong>一般のべき関数</strong>を定義できるようになります。
                この関数も、対数関数の多価性を引き継いで多価関数となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一般のべき関数の定義</h2>

            <p>
                複素数 <InlineMath math="z \neq 0" /> と任意の複素数 <InlineMath math="a" /> に対して、次のように定めます。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (一般のべき関数)">
                <p>
                    複素数 <InlineMath math="z \neq 0" /> に対して、<InlineMath math="z" /> の <InlineMath math="a" /> 乗を次のように定義する：
                    <BlockMath math="z^a = \exp(a \log z)" />
                </p>
                <p className="mt-4">
                    <InlineMath math="\log z" /> が多価であることを反映し、一般に <InlineMath math="z^a" /> も多価関数となる。主値を用いる場合は次のように書く：
                    <BlockMath math="(z^a)_0 = \exp(a \text{Log } z)" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">指数の種類による多価性の分類</h2>

            <p>
                指数の値がどのような数であるかによって、<InlineMath math="z^a" /> が取る値の個数が決まります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 (多価性の分類)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong><InlineMath math="a" /> が整数 <InlineMath math="n \in \mathbb{Z}" /> のとき</strong>：
                        <InlineMath math="z^n = \exp(n(\ln|z| + i(\theta + 2\pi k))) = \exp(n\ln|z| + in\theta) e^{i2n\pi k}" />。
                        <InlineMath math="e^{i2n\pi k} = 1" /> なので、値は一つに定まり、<strong>一価</strong>である。
                    </li>
                    <li>
                        <strong><InlineMath math="a" /> が有理数 <InlineMath math="p/q" /> （既約）のとき</strong>：
                        <InlineMath math="e^{i(p/q)2\pi k}" /> は <InlineMath math="k = 0, 1, \dots, q-1" /> で異なる値を取る。
                        したがって、<InlineMath math="z^{p/q}" /> はちょうど <strong><InlineMath math="q" /> 個の値</strong>を持つ。
                    </li>
                    <li>
                        <strong><InlineMath math="a" /> が無理数または虚数のとき</strong>：
                        <InlineMath math="e^{i a 2\pi k}" /> はすべての整数 <InlineMath math="k" /> に対して異なる値を取る。
                        したがって、<InlineMath math="z^a" /> は<strong>無限個の値</strong>を持つ。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">驚くべき計算例：<InlineMath math="i^i" /></h2>

            <p>
                純虚数の純虚数乗という、実解析では想像もつかないような計算も可能です。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (i の i 乗)">
                <p>
                    <InlineMath math="i^i" /> の値を求めよ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    定義より <InlineMath math="i^i = \exp(i \log i)" />。
                    <InlineMath math="\log i = \ln |i| + i (\pi/2 + 2\pi k) = i(\pi/2 + 2\pi k)" /> であるから、
                    <BlockMath math="i^i = \exp(i \cdot i(\pi/2 + 2\pi k)) = \exp(-(\pi/2 + 2\pi k))" />
                    <InlineMath math="k=0" /> のとき（主値）は、
                    <BlockMath math="i^i = e^{-\pi/2} \approx 0.2078\dots" />
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                    <strong>[驚くべき事実]</strong> 虚数の虚数乗であるにもかかわらず、その値はすべて<strong>実数</strong>になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>対数による定義</strong>：<InlineMath math="z^a" /> は指数関数と対数関数の合成として定義される。</li>
                    <li><strong>多価性の多様さ</strong>：指数 <InlineMath math="a" /> の性質に応じて、値が一つ、有限個、無限個となる。</li>
                    <li><strong>複素数特有の挙動</strong>：<InlineMath math="i^i" /> が実数になるような、直観に反する興味深い性質が現れる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
