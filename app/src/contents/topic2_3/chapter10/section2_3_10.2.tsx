import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ImproperIntegralsUnboundedFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                広義積分のもう一つのケースは、積分区間自体は有限 <InlineMath math="[a, b]" /> であるものの、その区間内で関数が無限大に発散して「壁（漸近線）」に沿って無限の高さを生み出してしまう場合です。これを<strong>無界関数（特異点を持つ関数）の広義積分</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特異点における広義積分</h2>

            <p>
                例えば関数が右端点 <InlineMath math="x = b" /> で発散している（特異点である）場合、<InlineMath math="b" /> の少し手前 <InlineMath math="b-\varepsilon" /> まで積分を計算し、そこから極限で「壁」に迫ります。
            </p>

            <ContentBox type="definition" title="Definition 10.2-1 (特異点における広義積分)">
                <p>
                    関数 <InlineMath math="f(x)" /> が、任意の <InlineMath math="\varepsilon \in (0, b-a)" /> に対して半開区間 <InlineMath math="[a, b-\varepsilon]" /> 上でリーマン可積分であり、点 <InlineMath math="x = b" /> で <InlineMath math="f(x)" /> が無界（無限大に発散する）とする。
                </p>
                <p className="mt-4">
                    このとき、極限
                </p>
                <BlockMath math="\lim_{\varepsilon \to +0} \int_a^{b-\varepsilon} f(x) dx" />
                <p>
                    が存在して有限の値に確定するならば、<InlineMath math="f(x)" /> の広義積分は<strong>収束する</strong>といい、その値を
                </p>
                <BlockMath math="\int_a^b f(x) dx" />
                <p>
                    と表す。（極限が存在しない場合は発散するという）
                </p>
                <p className="mt-4">
                    ※ 左端点 <InlineMath math="x=a" /> が特異点の場合は <InlineMath math="\lim_{\varepsilon \to +0} \int_{a+\varepsilon}^b f(x) dx" /> で定義され、区間の内部に特異点 <InlineMath math="c \in (a, b)" /> がある場合は、そこで区間を分割し、<InlineMath math="\int_a^c + \int_c^b" /> の2つの広義積分が<strong>両方とも独立して</strong>収束するときに全体が収束すると定義される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの主値積分</h2>

            <p>
                特異点が区間の内部 <InlineMath math="c" /> にあり、本来なら「左側からの積分と右側からの積分が独立して収束しなければならない」にもかかわらず、プラスとマイナスの相殺効果を利用して「特異点へ向かう左右のスピードを同期させる」ことで、強引に極限値を取り出すテクニックがあります。これがコーシーの主値積分です。
            </p>

            <ContentBox type="definition" title="Definition 10.2-2 (コーシーの主値積分)">
                <p>
                    関数 <InlineMath math="f(x)" /> が点 <InlineMath math="x=c \in (a,b)" /> で特異点を持つとする。次で定義される極限
                </p>
                <BlockMath math="\mathrm{P.V.} \int_a^b f(x) dx = \lim_{\varepsilon \to +0} \left( \int_a^{c-\varepsilon} f(x) dx + \int_{c+\varepsilon}^b f(x) dx \right)" />
                <p>
                    が存在するとき、これを特異点 <InlineMath math="c" /> におけるコーシーの<strong>主値積分</strong>（Cauchy Principal Value）と呼ぶ。（<InlineMath math="\mathrm{v.p.}" /> や <InlineMath math="\mathrm{P}" /> などとも表記する）
                </p>
                <p className="mt-4">
                    ※ 単なる広義積分の定義では <InlineMath math="\varepsilon_1 \to +0" /> と <InlineMath math="\varepsilon_2 \to +0" /> が独立に極限をとられるため発散するような場合でも、主値積分では <InlineMath math="\varepsilon_1 = \varepsilon_2 = \varepsilon" /> と強制的に揃えて特異点に「対称に」近づくことで、値が確定することがある。
                </p>
            </ContentBox>

            <p>
                たとえば <InlineMath math="\int_{-1}^1 \frac{1}{x} dx" /> は、<InlineMath math="x=0" /> 近傍で面積が正の無限大と負の無限大に発散するため広義積分としては「発散」しますが、コーシーの主値積分としては綺麗に打ち消し合って <InlineMath math="0" /> となります。これは複素関数論などで強力な威力を発揮します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例：壁際の面積</h2>

            <p>
                無限区間の例（Example 10.1-1）と対比させる形で、原点に迫る「壁」における積分を評価してみましょう。
            </p>

            <ContentBox type="example" title="Example 10.2-1">
                <p>
                    <InlineMath math="p > 0" /> とする。<InlineMath math="f(x) = \frac{1}{x^p}" /> は <InlineMath math="x=0" /> で無限大に発散する特異点を持つ。<br />
                    広義積分
                </p>
                <BlockMath math="\int_0^1 \frac{1}{x^p} dx" />
                <p>
                    の値を調べる。十分小さな <InlineMath math="\varepsilon > 0" /> について、開区間 <InlineMath math="[\varepsilon, 1]" /> での積分を先と同様に計算する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong><InlineMath math="p \neq 1" /> の場合:</strong>
                        <BlockMath math="\int_\varepsilon^1 x^{-p} dx = \left[ \frac{x^{1-p}}{1-p} \right]_\varepsilon^1 = \frac{1 - \varepsilon^{1-p}}{1-p}" />
                    </li>
                    <li>
                        <strong><InlineMath math="p = 1" /> の場合:</strong>
                        <BlockMath math="\int_\varepsilon^1 \frac{1}{x} dx = \left[ \log x \right]_\varepsilon^1 = \log 1 - \log \varepsilon = -\log \varepsilon" />
                    </li>
                </ul>
                <p className="mt-4">
                    ここで <InlineMath math="\varepsilon \to +0" /> の極限をとる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <InlineMath math="p < 1" /> のとき、<InlineMath math="1-p > 0" /> なので <InlineMath math="\varepsilon^{1-p} \to 0" /> となる。よって積分は<strong>収束</strong>し、値は <InlineMath math="\frac{1}{1-p}" /> である。
                    </li>
                    <li>
                        <InlineMath math="p > 1" /> のとき、<InlineMath math="1-p < 0" /> なので <InlineMath math="\varepsilon^{1-p} = \frac{1}{\varepsilon^{p-1}} \to \infty" /> となり<strong>発散</strong>する。
                    </li>
                    <li>
                        <InlineMath math="p = 1" /> のとき、<InlineMath math="-\log \varepsilon \to \infty" /> なので<strong>発散</strong>する。
                    </li>
                </ul>
                <p className="mt-4">
                    <strong>結論：</strong> <InlineMath math="\int_0^1 \frac{1}{x^p} dx" /> は、<InlineMath math="p < 1" /> のときのみ収束し、<InlineMath math="p \geq 1" /> では発散する。
                </p>
            </ContentBox>

            <p>
                驚くべきことに、<strong>無限の彼方（<InlineMath math="x \to \infty" />）への収束条件 <InlineMath math="p > 1" /> と、特異点（<InlineMath math="x \to 0" />）への収束条件 <InlineMath math="p < 1" /> は、みごとに逆転</strong>しています。
            </p>
            <p>
                直感的に言えば、無限遠での面積はグラフが「速く平らになる（<InlineMath math="p" /> が大きい）」ほど小さくなって収束しますが、原点近傍ではグラフの立ち上がりが「遅い（<InlineMath math="p" /> が小さい）」ほど壁に張り付く面積が細くなって収束する、という物理的な構造の裏返しによるものです。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§10.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数が発散する点（特異点）を含む積分は、特異点の直前まで積分してから極限をとる広義積分として定義される。</li>
                    <li>プラスとマイナスの極限を同期させることで発散を相殺する「コーシーの主値積分」という拡張された概念も存在する。</li>
                    <li>基準となる関数 <InlineMath math="1/x^p" /> の原点における広義積分は、<InlineMath math="p < 1" /> （発散が緩やか）のときのみ有限値となる。無限区間とは条件が反転する点に注意が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
