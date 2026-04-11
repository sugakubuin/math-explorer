import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThetaFunctionTransformationFormulas() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節ではテータ関数の準周期性や零点の位置といった基本的な性質を確認しました。本節では、パラメータ <InlineMath math="\tau" /> を <InlineMath math="-1/\tau" /> へと反転させるモジュラー変換に対するテータ関数の変換則について学びます。この変換公式はヤコビのイマジナリー変換と呼ばれ、後のモジュラー形式の理論へ繋がる極めて重要な結果です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤコビのイマジナリー変換</h2>

            <p>
                まずは基本となる <InlineMath math="\theta_3" /> 関数の変換公式を示します。
            </p>

            <ContentBox type="theorem" title={<span>Theorem 6.3-1 (ヤコビのイマジナリー変換)</span>}>
                <p>
                    <InlineMath math="\text{Im}(\tau) > 0" /> を満たす任意の複素数 <InlineMath math="\tau" /> と任意の <InlineMath math="z \in \mathbb{C}" /> に対して、以下の関係式が成り立ちます。
                </p>
                <BlockMath math="\theta_3\left(z \middle| -\frac{1}{\tau}\right) = (-i\tau)^{1/2} e^{iz^2\tau/\pi} \theta_3(z\tau | \tau)" />
                <p>
                    ここで、平方根 <InlineMath math="(-i\tau)^{1/2}" /> の枝は、主値（実部が正となるもの）を選びます。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この公式は、フーリエ解析におけるポアソン和公式を応用することで導かれます。ポアソン和公式によれば、急減少関数 <InlineMath math="f(x)" /> に対して
                </p>
                <BlockMath math="\sum_{n=-\infty}^\infty f(n) = \sum_{n=-\infty}^\infty \hat{f}(n)" />
                <p>
                    が成り立ちます。ここで <InlineMath math="\hat{f}(y) = \int_{-\infty}^\infty f(x) e^{-2\pi i x y}\, dx" /> はフーリエ変換です。
                    <InlineMath math="f(x) = e^{-\pi a x^2 + 2\pi i b x}" /> （ただし <InlineMath math="\text{Re}(a) > 0" />）というガウス関数を考えると、そのフーリエ変換は
                </p>
                <BlockMath math="\hat{f}(y) = a^{-1/2} e^{-\pi (y-b)^2 / a}" />
                <p>
                    となります。<InlineMath math="a = -i\tau" />、<InlineMath math="b = z/\pi" /> と置いてポアソン和公式を適用すると、左辺は <InlineMath math="\theta_3(z | \tau)" /> の定義級数そのものとなり、右辺を整理することでイマジナリー変換の式が得られます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この変換公式を利用することで、テータ関数の特定の値（例えば <InlineMath math="z = 0" /> の場合）に対する驚くべき関係式を導くことができます。
            </p>

            <ContentBox type="example" title="Example 6.3-1">
                <p>
                    Theorem 6.3-1 において <InlineMath math="z = 0" /> とすると、
                </p>
                <BlockMath math="\theta_3\left(0 \middle| -\frac{1}{\tau}\right) = (-i\tau)^{1/2} \theta_3(0 | \tau)" />
                <p>
                    となります。ここで <InlineMath math="\tau = i" /> を代入すると、<InlineMath math="-1/i = i" /> であり、
                </p>
                <BlockMath math="\theta_3(0 | i) = (-i \cdot i)^{1/2} \theta_3(0 | i) = \theta_3(0 | i)" />
                <p>
                    となり自明な結果になってしまいます。しかし、ヤコビの三重積公式などと組み合わせることで、<InlineMath math="\tau = i" /> における値をガンマ関数を用いて
                </p>
                <BlockMath math="\theta_3(0 | i) = \frac{\pi^{1/4}}{\Gamma(3/4)}" />
                <p>
                    と具体的に計算することができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">他のテータ関数の変換</h2>

            <p>
                <InlineMath math="\theta_3" /> についての公式が得られたので、これを元に他のテータ関数（<InlineMath math="\theta_1, \theta_2, \theta_4" />）の <InlineMath math="\tau \mapsto -1/\tau" /> に対する変換公式も導くことができます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-1">
                <p>
                    <InlineMath math="\tau \mapsto -1/\tau" /> の変換のもとで、各テータ関数は以下の関係を満たします（<InlineMath math="C = (-i\tau)^{1/2} e^{iz^2\tau/\pi}" /> とおきます）。
                </p>
                <ul>
                    <li><InlineMath math="\theta_1\left(z \middle| -\frac{1}{\tau}\right) = -i C \, \theta_1(z\tau | \tau)" /></li>
                    <li><InlineMath math="\theta_2\left(z \middle| -\frac{1}{\tau}\right) = C \, \theta_4(z\tau | \tau)" /></li>
                    <li><InlineMath math="\theta_4\left(z \middle| -\frac{1}{\tau}\right) = C \, \theta_2(z\tau | \tau)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前節で定義した各テータ関数は、<InlineMath math="\theta_3" /> に引数のシフト（半周期のズレ）を施すことで得られます。たとえば、<InlineMath math="\theta_4(z | \tau) = \theta_3(z + \pi/2 | \tau)" /> などの関係式にヤコビのイマジナリー変換（Theorem 6.3-1）を適用し、指数部分の整理を行うことで、これらの公式が直接導かれます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ここで示されたように、モジュラー変換 <InlineMath math="\tau \mapsto -1/\tau" /> によって <InlineMath math="\theta_2" /> と <InlineMath math="\theta_4" /> は互いに入れ替わり、<InlineMath math="\theta_1" /> と <InlineMath math="\theta_3" /> は本質的に自分自身へと変換されることがわかります。
            </p>

            <ContentBox type="remark" title="モジュラー形式への展望">
                <p>
                    今回導入した <InlineMath math="\tau \mapsto -1/\tau" /> という変換は、並進変換 <InlineMath math="\tau \mapsto \tau + 1" /> （これは <InlineMath math="q = e^{i\pi\tau}" /> を考えると明らかです）とともに、モジュラー群 <InlineMath math="\text{SL}_2(\mathbb{Z})" /> の生成元となっています。つまり、テータ関数はモジュラー群の作用に対して極めて統制の取れた変換則を持つ関数であり、この性質は後続の 5-7 モジュラー形式の理論における「重さ <InlineMath math="1/2" /> のモジュラー形式」としての位置付けを与えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ポアソン和公式を用いることで、<InlineMath math="\tau \mapsto -1/\tau" /> に対するヤコビのイマジナリー変換 <InlineMath math="\theta_3(z|-1/\tau) = (-i\tau)^{1/2} e^{iz^2\tau/\pi} \theta_3(z\tau|\tau)" /> が証明される。</li>
                    <li>他のテータ関数も同様の変換則を持ち、特に <InlineMath math="\theta_2" /> と <InlineMath math="\theta_4" /> は互いに入れ替わる。</li>
                    <li>この変換則はテータ関数がモジュラー群の作用と深く結びついていることを示し、モジュラー形式論への出発点となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
