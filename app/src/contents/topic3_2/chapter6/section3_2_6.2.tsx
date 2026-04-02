import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SingularityClassification() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ローラン展開の主要部を調べることで、関数が特異点でどのように振る舞うかを明確に分類することができます。
                この分類は、後の留数学習において非常に重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">孤立特異点の定義と分類</h2>

            <ContentBox type="definition" title="Definition 6.2-1 (孤立特異点)">
                <p>
                    関数 <InlineMath math="f(z)" /> が点 <InlineMath math="z_0" /> では定義されない（または正則でない）が、
                    その穴あき近傍 <InlineMath math="0 < |z - z_0| < r" /> では正則であるとき、
                    <InlineMath math="z_0" /> を <InlineMath math="f(z)" /> の <strong>孤立特異点</strong> という。
                </p>
            </ContentBox>

            <p>
                孤立特異点 <InlineMath math="z_0" /> の周りでのローラン展開の主要部により、特異点は次の3つに分類されます。
            </p>

            <ContentBox type="definition" title="Definition 6.2-2 (特異点の3分類)">
                <ol className="list-decimal list-inside space-y-4 ml-4">
                    <li>
                        <strong>除去可能特異点</strong>：主要部が 0。
                        <p className="ml-6 mt-1 text-sm italic">
                            <InlineMath math="z \to z_0" /> での極限が存在し、その値を <InlineMath math="f(z_0)" /> と定義すれば <InlineMath math="z_0" /> でも正則になる。
                        </p>
                    </li>
                    <li>
                        <strong>位数 m の極</strong>：主要部が有限項（最大次数が <InlineMath math="n = -m" />）。
                        <p className="ml-6 mt-1 text-sm italic">
                            <InlineMath math="z \to z_0" /> で <InlineMath math="|f(z)| \to \infty" /> となる。
                        </p>
                    </li>
                    <li>
                        <strong>真性特異点</strong>：主要部が無限項。
                        <p className="ml-6 mt-1 text-sm italic">
                            極限が定まらず、極めて複雑な振る舞いをする。
                        </p>
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各特異点の性質</h2>

            <ContentBox type="theorem" title="Theorem 6.2-1 (リーマンの除去可能特異点定理)">
                <p>
                    孤立特異点 <InlineMath math="z_0" /> の近傍で <InlineMath math="f(z)" /> が <strong>有界</strong> ならば、 <InlineMath math="z_0" /> は除去可能特異点である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="c_{-n} = \frac{1}{2\pi i} \oint_\gamma f(z)(z-z_0)^{n-1} dz" /> を考える（<InlineMath math="n \geq 1" />）。
                    <InlineMath math="|f(z)| \leq M" /> とすると、ML 不等式より
                </p>
                <BlockMath math="|c_{-n}| \leq \frac{1}{2\pi} \cdot M \cdot r^{n-1} \cdot 2\pi r = M r^n" />
                <p>
                    <InlineMath math="r \to 0" /> とすると <InlineMath math="c_{-n} = 0" /> となり、主要部が消える。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.2-3 (カゾラティ・ワイエルシュトラスの定理)">
                <p>
                    <InlineMath math="z_0" /> が真性特異点ならば、その任意の近傍において <InlineMath math="f(z)" /> は <strong>複素平面全体で稠密な像</strong> を持つ。
                </p>
                <p className="mt-2 text-sm italic">
                    ※ どのような複素数 <InlineMath math="w" /> を指定しても、真性特異点のすぐそばで <InlineMath math="f(z)" /> を <InlineMath math="w" /> にいくらでも近づけることができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法を用いる。ある複素数 <InlineMath math="w" /> とある近傍 <InlineMath math="0 < |z - z_0| < \delta" /> において、
                    任意の <InlineMath math="z" /> で <InlineMath math="|f(z) - w| \geq \epsilon > 0" /> が成り立つと仮定する。
                    このとき、関数 <InlineMath math="g(z) = \frac{1}{f(z) - w}" /> はこの近傍で正則かつ <InlineMath math="|g(z)| \leq 1/\epsilon" /> となり、有界である。
                </p>
                <p>
                    リーマンの除去可能特異点定理（Theorem 6.2-1）より、<InlineMath math="z_0" /> は <InlineMath math="g(z)" /> の除去可能特異点であり、
                    <InlineMath math="z \to z_0" /> で <InlineMath math="g(z)" /> はある値 <InlineMath math="\alpha" /> に収束する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="\alpha \neq 0" /> のとき、<InlineMath math="f(z) = w + 1/g(z)" /> は <InlineMath math="w + 1/\alpha" /> に収束し、<InlineMath math="z_0" /> は <InlineMath math="f" /> の除去可能特異点となる。
                    </li>
                    <li>
                        <InlineMath math="\alpha = 0" /> のとき、<InlineMath math="f(z)" /> は無限大に発散し、<InlineMath math="z_0" /> は <InlineMath math="f" /> の極となる。
                    </li>
                </ul>
                <p>
                    いずれの場合も <InlineMath math="z_0" /> が真性特異点であることに矛盾する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例による分類</h2>

            <ContentBox type="example" title="Example 6.2-1 (特異点の識別)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <InlineMath math="f(z) = \frac{\sin z}{z}" /> ： <InlineMath math="z=0" /> は <strong>除去可能特異点</strong>。
                        <p className="ml-6 text-sm italic"><InlineMath math="\frac{\sin z}{z} = 1 - \frac{z^2}{6} + \dots" /> より主要部なし。<InlineMath math="\lim_{z\to 0} f(z) = 1" />。</p>
                    </li>
                    <li>
                        <InlineMath math="f(z) = \frac{1 - \cos z}{z^2}" /> ： <InlineMath math="z=0" /> も <strong>除去可能特異点</strong>。
                        <p className="ml-6 text-sm italic"><InlineMath math="1 - \cos z = \frac{z^2}{2} - \frac{z^4}{24} + \dots" /> なので、<InlineMath math="\lim_{z\to 0} f(z) = 1/2" /> となり正則に延長できる。</p>
                    </li>
                    <li>
                        <InlineMath math="f(z) = \frac{1}{(z-i)^3}" /> ： <InlineMath math="z=i" /> は <strong>3位の極</strong>。
                        <p className="ml-6 text-sm italic">主要部そのものが <InlineMath math="1/(z-i)^3" /> である。</p>
                    </li>
                    <li>
                        <InlineMath math="f(z) = \frac{z}{(z-1)^2}" /> ： <InlineMath math="z=1" /> は <strong>2位の極</strong>。
                        <p className="ml-6 text-sm italic"><InlineMath math="z = (z-1) + 1" /> より <InlineMath math="\frac{1}{(z-1)^2} + \frac{1}{z-1}" /> と展開され、主要部の最大次数が 2 である。</p>
                    </li>
                    <li>
                        <InlineMath math="f(z) = e^{1/z}" /> ： <InlineMath math="z=0" /> は <strong>真性特異点</strong>。
                        <p className="ml-6 text-sm italic"><InlineMath math="e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2z^2} + \dots" /> と無限に主要部が続く。</p>
                    </li>
                    <li>
                        <InlineMath math="f(z) = \sin(1/z)" /> ： <InlineMath math="z=0" /> も <strong>真性特異点</strong>。
                        <p className="ml-6 text-sm italic"><InlineMath math="\sin(1/z) = \frac{1}{z} - \frac{1}{6z^3} + \dots" /> と無限個の負の項を持つ。</p>
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>主要部がないのが除去可能特異点（有界）。</li>
                    <li>主要部が有限項なのが極（発散）。</li>
                    <li>主要部が無限項なのが真性特異点（カオス的挙動）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
