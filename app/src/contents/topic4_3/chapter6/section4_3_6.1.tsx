import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ThetaFunctionDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、楕円関数論や数論において極めて重要な役割を果たすヤコビの<b>テータ関数（theta function）</b>を導入します。テータ関数はそれ自体は二重周期関数（楕円関数）ではありませんが、特定の擬周期性を持ち、楕円関数を構成するための強力な構成要素となります。まずは、その級数による定義と基本的な収束性について見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テータ関数の定義</h2>

            <p>
                テータ関数は、複素変数 <InlineMath math="z" /> と、上半平面に値をとるパラメータ <InlineMath math="\tau" /> の関数として定義されます。
            </p>

            <ContentBox type="definition" title={<span>Definition 6.1-1 (ヤコビのテータ関数 <InlineMath math="\theta_3" />)</span>}>
                <p>
                    上半平面の元 <InlineMath math="\tau" /> （すなわち <InlineMath math="\text{Im}(\tau) > 0" />）に対して、<InlineMath math="q = e^{i\pi\tau}" /> とおく。このとき、ヤコビのテータ関数 <b><InlineMath math="\theta_3(z|\tau)" /></b> を次のように定義する。
                </p>
                <BlockMath math="\theta_3(z|\tau) = \sum_{n=-\infty}^\infty q^{n^2}e^{2niz}" />
            </ContentBox>

            <p>
                この定義は一見するとただの無限級数ですが、<InlineMath math="n^2" /> の効果により非常に収束が速いという際立った特徴を持っています。
            </p>

            <ContentBox type="example" title="Example 6.1-1">
                <p>
                    <InlineMath math="z=0" /> のときの <InlineMath math="\theta_3(0|\tau)" /> の最初の数項を計算する。
                </p>
                <BlockMath math="\theta_3(0|\tau) = 1 + 2q + 2q^4 + 2q^9 + \cdots"
                />
                <p>
                    例えば <InlineMath math="\tau = i" /> の場合、<InlineMath math="q = e^{-\pi} \approx 0.0432" /> となる。このとき各項は急速に減少し、わずか数項で極めて高い精度の値を得ることができる。
                </p>
            </ContentBox>

            <p>
                ヤコビは <InlineMath math="\theta_3" /> に加えて、引数 <InlineMath math="z" /> を半周期分シフトさせることで、さらに3つの関連するテータ関数を定義しました。
            </p>

            <ContentBox type="definition" title="Definition 6.1-2 (4種のテータ関数)">
                <p>
                    <InlineMath math="\theta_3(z|\tau)" /> を元にして、以下の4種のテータ関数を定義する。
                </p>
                <BlockMath math="\begin{aligned}
                \theta_3(z|\tau) &= \sum_{n=-\infty}^\infty q^{n^2}e^{2niz} \\
                \theta_4(z|\tau) &= \theta_3(z+\pi/2|\tau) = \sum_{n=-\infty}^\infty (-1)^n q^{n^2}e^{2niz} \\
                \theta_2(z|\tau) &= e^{iz} q^{1/4} \theta_3(z+\pi\tau/2|\tau) \\ &= \sum_{n=-\infty}^\infty q^{(n+1/2)^2}e^{(2n+1)iz} \\
                \theta_1(z|\tau) &= -i e^{iz} q^{1/4} \theta_4(z+\pi\tau/2|\tau) \\ &= -i \sum_{n=-\infty}^\infty (-1)^n q^{(n+1/2)^2}e^{(2n+1)iz}
                \end{aligned}" />
            </ContentBox>

            <p>
                これらの級数が意味を持つためには、無限和が適切に収束する必要があります。以下の命題がそれの保証を与えます。
            </p>

            <ContentBox type="proposition" title="Proposition 6.1-1">
                <p>
                    テータ関数の級数は、<InlineMath math="\text{Im}(\tau) > 0" /> のとき、<InlineMath math="z \in \mathbb{C}" /> と <InlineMath math="\tau" /> に関して絶対かつ広義一様に収束する。したがって、テータ関数は <InlineMath math="z" /> の整関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\tau = x + iy" /> (<InlineMath math="y > 0" />) とおくと、<InlineMath math="|q| = |e^{i\pi(x+iy)}| = e^{-\pi y} < 1" /> である。級数 <InlineMath math="\theta_3(z|\tau)" /> の第 <InlineMath math="n" /> 項の絶対値は、
                </p>
                <BlockMath math="|q^{n^2}e^{2niz}| = e^{-\pi n^2 y} e^{-2n \text{Im}(z)}" />
                <p>
                    となる。<InlineMath math="n" /> が十分に大きいとき、<InlineMath math="n^2 y" /> の項が <InlineMath math="n \text{Im}(z)" /> の項を圧倒するため、各項は指数関数的に減衰する。任意のコンパクト集合上で <InlineMath math="y \ge y_0 > 0" /> かつ <InlineMath math="|\text{Im}(z)| \le M" /> と評価できるため、ワイエルシュトラスのM判定法により絶対かつ一様収束が示される。他の3つのテータ関数についても同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テータ関数の初等的性質</h2>

            <p>
                定義式から直接読み取れる、各テータ関数の奇偶性などの基本的な性質を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 6.1-2">
                <p>
                    定義式の級数において <InlineMath math="z" /> を <InlineMath math="-z" /> とし、和の添字 <InlineMath math="n" /> を <InlineMath math="-n" /> （<InlineMath math="\theta_1, \theta_2" /> では <InlineMath math="-n-1" />）に付け替えることで以下の性質が直ちにわかる。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <InlineMath math="\theta_1(-z|\tau) = -\theta_1(z|\tau)" /> （奇関数）
                    </li>
                    <li>
                        <InlineMath math="\theta_2(-z|\tau) = \theta_2(z|\tau)" /> （偶関数）
                    </li>
                    <li>
                        <InlineMath math="\theta_3(-z|\tau) = \theta_3(z|\tau)" /> （偶関数）
                    </li>
                    <li>
                        <InlineMath math="\theta_4(-z|\tau) = \theta_4(z|\tau)" /> （偶関数）
                    </li>
                </ul>
                <p>
                    特に、<InlineMath math="\theta_1" /> は奇関数であるため、<InlineMath math="\theta_1(0|\tau) = 0" /> が成り立つ。
                </p>
            </ContentBox>

            <p>
                これらの性質は、後ほどテータ関数を用いて楕円関数の零点や極の配置を構成する際に不可欠な情報となります。
            </p>

            <ContentBox type="remark" title="テータ関数の記法について">
                <p>
                    ヤコビのテータ関数には様々な記法の流儀が存在します。本稿では添字を <InlineMath math="1, 2, 3, 4" /> とする標準的な記法を採用していますが、文献によっては <InlineMath math="\vartheta_i(z, q)" /> のように第2引数を <InlineMath math="q" /> で書いたり、変数を <InlineMath math="\pi" /> でスケーリングして <InlineMath math="v = z/\pi" /> と置く流儀もあります。他の文献を参照する際は、どの変数が用いられているかに注意が必要です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ヤコビのテータ関数は <InlineMath math="q = e^{i\pi\tau}" /> とした級数 <InlineMath math="\sum q^{n^2}e^{2niz}" /> 等で定義される。</li>
                    <li><InlineMath math="\text{Im}(\tau) > 0" /> のもとで、これらの級数は極めて急速に絶対一様収束し、整関数を定める。</li>
                    <li>4種のテータ関数のうち、<InlineMath math="\theta_1" /> のみ奇関数であり、残りの3つは偶関数である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
