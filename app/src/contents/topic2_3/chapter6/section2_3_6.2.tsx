import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProofOfMeanValueTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                微積分において最も応用範囲の広い定理の一つが、本節で扱う<strong>平均値の定理</strong>です。
                「どこかに出発し、ある時間後に別の場所に到着したなら、その道中のどこかで『平均の速度』と全く同じ瞬間速度を示す瞬間が必ず存在する」という、一見当たり前の事実を数学的に述べたものです。
                しかしその厳密な証明は、Chapter 4 で証明した「最大値・最小値定理」に強く依存しており、実数の完備性が裏でしっかりと支えています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロルの定理</h2>

            <p>
                平均値定理を証明するための準備（補題）として、まず<strong>ロルの定理</strong>（Rolle's Theorem）を証明します。
                これは、平均値定理の特別な場合（始点と終点の高さが同じ場合）に相当し、「山を登って同じ高さまで降りてきたなら、どこかに頂上（傾きが0の平らな点）があるはずだ」というものです。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ロルの定理)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続、開区間 <InlineMath math="(a, b)" /> 上で微分可能であり、さらに
                </p>
                <BlockMath math="f(a) = f(b)" />
                <p>
                    を満たすとする。このとき、開区間 <InlineMath math="(a, b)" /> 内にある点 <InlineMath math="c" /> が存在して、
                </p>
                <BlockMath math="f'(c) = 0" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (ロルの定理)">
                <p>
                    関数 <InlineMath math="f" /> は有界な閉区間 <InlineMath math="[a, b]" /> 上で連続であるため、最大値・最小値定理（Theorem 4.4-1）により、最大値 <InlineMath math="M" /> と最小値 <InlineMath math="m" /> をこの区間内のどこかの点でとる。
                </p>
                <p className="mt-4">
                    <strong>ケース1：</strong> <InlineMath math="M = m" /> の場合。<br />
                    最大値と最小値が等しいということは、関数 <InlineMath math="f" /> は区間全体で定数関数である（<InlineMath math="f(x) = M" />）。したがって、任意の <InlineMath math="x \in (a, b)" /> において <InlineMath math="f'(x) = 0" /> であり、定理は自明に成り立つ。
                </p>
                <p className="mt-4">
                    <strong>ケース2：</strong> <InlineMath math="M > m" /> の場合。<br />
                    条件 <InlineMath math="f(a) = f(b)" /> より、最大値 <InlineMath math="M" /> または最小値 <InlineMath math="m" /> の少なくとも一方は、区間の端点（<InlineMath math="a" /> または <InlineMath math="b" />）以外の開区間 <InlineMath math="(a, b)" /> 内でとられる。
                    一般性を失わず、最大値 <InlineMath math="M" /> を <InlineMath math="c \in (a, b)" /> でとると仮定する（すなわち <InlineMath math="f(c) = M" />）。
                </p>
                <p className="mt-4">
                    仮定より <InlineMath math="f" /> は <InlineMath math="c" /> で微分可能である。<InlineMath math="c" /> は最大値をとる点なので、任意の十分小さな <InlineMath math="h" /> に対して <InlineMath math="f(c+h) \leq f(c)" /> すなわち <InlineMath math="f(c+h) - f(c) \leq 0" /> となる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="h > 0" /> （右側から近づく）のとき： <InlineMath math="\frac{f(c+h) - f(c)}{h} \leq 0" /> であるから、極限をとると <InlineMath math="\lim_{h \to +0}\frac{f(c+h) - f(c)}{h} \leq 0" />。</li>
                    <li><InlineMath math="h < 0" /> （左側から近づく）のとき： <InlineMath math="\frac{f(c+h) - f(c)}{h} \geq 0" /> であるから、極限をとると <InlineMath math="\lim_{h \to -0}\frac{f(c+h) - f(c)}{h} \geq 0" />。</li>
                </ul>
                <p className="mt-4">
                    関数は <InlineMath math="c" /> で微分可能であるため、左右の極限は一致して微分係数 <InlineMath math="f'(c)" /> とならなければならない。
                    したがって、<InlineMath math="f'(c) \leq 0" /> かつ <InlineMath math="f'(c) \geq 0" /> を同時に満たす必要があり、結論として <InlineMath math="f'(c) = 0" /> を得る。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ラグランジュの平均値定理</h2>

            <p>
                ロルの定理という土台ができたので、これを利用して「始点と終点の高さが異なる」一般の平均値の定理を証明します。
                アイデアは非常に鮮やかで、一般の関数から「両端を結ぶ直線」の成分を引き算することで、ロルの定理が適用できる形に強制的に変形するというものです。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-2 (ラグランジュの平均値定理)">
                <p>
                    関数 <InlineMath math="f" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続、開区間 <InlineMath math="(a, b)" /> 上で微分可能であるとする。このとき、開区間 <InlineMath math="(a, b)" /> 内にある点 <InlineMath math="c" /> が存在して、
                </p>
                <BlockMath math="\frac{f(b) - f(a)}{b - a} = f'(c)" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (ラグランジュの平均値定理)">
                <p>
                    点 <InlineMath math="(a, f(a))" /> と点 <InlineMath math="(b, f(b))" /> を結ぶ直線の傾きを <InlineMath math="K = \frac{f(b) - f(a)}{b - a}" /> とする。
                    この直線の方程式は <InlineMath math="y = K(x - a) + f(a)" /> である。
                    ここで、元の関数 <InlineMath math="f(x)" /> とこの直線との差を表す新しい関数 <InlineMath math="F(x)" /> を次のように定義する。
                </p>
                <BlockMath math="F(x) = f(x) - \{K(x - a) + f(a)\}" />
                <p className="mt-4">
                    この関数 <InlineMath math="F" /> は、連続関数の和・差であるから <InlineMath math="[a, b]" /> で連続であり、また <InlineMath math="(a, b)" /> で微分可能である。
                    端点での <InlineMath math="F" /> の値を計算すると、
                </p>
                <BlockMath math="F(a) = f(a) - \{0 + f(a)\} = 0" />
                <BlockMath math="\begin{aligned} F(b) &= f(b) - \{K(b - a) + f(a)\} \\ &= f(b) - \{f(b) - f(a) + f(a)\} = 0 \end{aligned}" />
                <p className="mt-4">
                    よって <InlineMath math="F(a) = F(b) = 0" /> となり、関数 <InlineMath math="F" /> に対してロルの定理を適用できる条件が整った。
                    ロルの定理（Theorem 6.2-1）より、開区間 <InlineMath math="(a, b)" /> 内のある点 <InlineMath math="c" /> が存在して、
                </p>
                <BlockMath math="F'(c) = 0" />
                <p>
                    となる。<InlineMath math="F(x)" /> を微分すると <InlineMath math="F'(x) = f'(x) - K" /> であるから、
                </p>
                <BlockMath math="f'(c) - K = 0 \implies f'(c) = K = \frac{f(b) - f(a)}{b - a}" />
                <p>
                    となり、定理が証明された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                平均値定理から直ちに導かれる重要な系として、「導関数が常にゼロの関数は定数関数である」や「導関数が符号を変えない関数は単調である」という基本的な性質があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの平均値定理</h2>

            <p>
                最後に、ラグランジュの平均値定理をさらに一般化した「コーシーの平均値定理」を紹介します。
                ラグランジュの平均値定理は変数が <InlineMath math="x" /> と <InlineMath math="y = f(x)" /> の1つの関数についての定理でしたが、コーシーのそれはパラメータ表示された曲線 <InlineMath math="(x(t), y(t))" /> に対する平均値定理と解釈できます。この定理は、後の §6.4 でロピタルの定理を証明する際の切り札となります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-3 (コーシーの平均値定理)">
                <p>
                    2つの関数 <InlineMath math="f, g" /> が閉区間 <InlineMath math="[a, b]" /> 上で連続、開区間 <InlineMath math="(a, b)" /> 上で微分可能であり、開区間内の任意の <InlineMath math="x" /> に対して <InlineMath math="g'(x) \neq 0" /> であるとする。このとき、開区間 <InlineMath math="(a, b)" /> 内にある点 <InlineMath math="c" /> が存在して、
                </p>
                <BlockMath math="\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}" />
                <p>
                    が成り立つ。<br />
                    （なお、この前提のもとではロルの定理から <InlineMath math="g(a) \neq g(b)" /> となるため、左辺の分母はゼロにはならない。）
                </p>
                <div className="mt-4 font-semibold">証明の概略:</div>
                <p className="mt-2">
                    ラグランジュの証明と同様に、定数 <InlineMath math="K = \frac{f(b) - f(a)}{g(b) - g(a)}" /> をおき、新しい関数 <InlineMath math="H(x) = f(x) - f(a) - K\{g(x) - g(a)\}" /> を構成する。<InlineMath math="H(a) = H(b) = 0" /> になることが容易に確認できるので、ロルの定理を適用すれば <InlineMath math="H'(c) = f'(c) - K g'(c) = 0" /> なる <InlineMath math="c" /> が見つかる。
                </p>
            </ContentBox>

            <p>
                次節では、平均値定理の強大な拡張であり、関数の多項式近似とその誤差（剰余項）を与える「テイラーの定理」の厳密な議論に進みます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ロルの定理</strong>： <InlineMath math="f(a) = f(b)" /> ならば、間に <InlineMath math="f'(c) = 0" /> となる水平な接線を持つ点がある（最大値・最小値定理により証明）。</li>
                    <li><strong>ラグランジュの平均値定理</strong>：一般の割線の傾きと等しい接線の傾きをもつ点 <InlineMath math="c" /> の存在を保証する。ロルの定理に帰着させて証明される。</li>
                    <li><strong>コーシーの平均値定理</strong>：2つの関数（パラメータ表示された曲線）に対する一般化であり、ロピタルの定理の証明等に不可欠。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
