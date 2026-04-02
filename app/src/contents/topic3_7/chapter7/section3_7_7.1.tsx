import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CharacteristicFunctionBasics() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率分布を解析する強力な道具の一つに、複素解析的な手法を用いた「特性関数」があります。
                これは確率分布のフーリエ変換に相当し、モーメントの計算や独立和の分布の導出を代数的な操作へと変換してくれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性関数の定義</h2>

            <p className="leading-relaxed">
                特性関数は、期待値の定義を複素数値関数へと拡張することで得られます。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (特性関数)">
                <p>
                    確率変数 <InlineMath math="X" /> に対し、次で定義される複素数値関数 <InlineMath math="\varphi_X(t)" /> を <InlineMath math="X" /> の<b>特性関数</b>（characteristic function）という：
                    <BlockMath math="\varphi_X(t) = E[e^{itX}] = \int_{-\infty}^\infty e^{itx} dF_X(x) \quad (t \in \mathbb{R})" />
                    ここで <InlineMath math="i" /> は虚数単位である。連続型であれば密度関数 <InlineMath math="f(x)" /> を用いて <InlineMath math="\int e^{itx} f(x) dx" /> と書ける。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                特性関数は常に存在し（期待値が常に有限）、分布を一意に決定するという数学的に優れた性質を持っています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本性質</h2>

            <p className="leading-relaxed">
                特性関数が満たす基本的な解析的性質を確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1 (特性関数の基本性質)">
                <p>
                    任意の特性関数 <InlineMath math="\varphi_X(t)" /> は以下の性質を満たす：
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\varphi_X(0) = 1" /></li>
                    <li><InlineMath math="|\varphi_X(t)| \leq 1" /></li>
                    <li><InlineMath math="\varphi_X(-t) = \overline{\varphi_X(t)}" /> （<InlineMath math="\overline{z}" /> は複素共役）</li>
                    <li><InlineMath math="\varphi_X(t)" /> は <InlineMath math="\mathbb{R}" /> 上で一様連続である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    一様連続性について示す。<InlineMath math="|\varphi_X(t+h) - \varphi_X(t)|" /> を評価すると、
                    <BlockMath math="\begin{aligned} |\varphi_X(t+h) - \varphi_X(t)| &= |E[e^{i(t+h)X} - e^{itX}]| \\ &= |E[e^{itX}(e^{ihX} - 1)]| \\ &\leq E[|e^{ihX} - 1|] \end{aligned}" />
                    となる。ここで <InlineMath math="|e^{ihX} - 1| \to 0 \quad (h \to 0)" /> であり、有界性 <InlineMath math="|e^{ihX} - 1| \leq 2" /> を用いてルベーグの支配収束定理を適用すると、
                    期待値は <InlineMath math="t" /> に依存せず <InlineMath math="0" /> に収束する。したがって一様連続性が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な特性関数の計算</h2>

            <p className="leading-relaxed">
                代表的な確率分布の特性関数を計算します。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (正規分布の特性関数)">
                <p>
                    標準正規分布 <InlineMath math="X \sim \mathcal{N}(0, 1)" /> の特性関数は次のように求められる：
                    <BlockMath math="\varphi_X(t) = \int_{-\infty}^\infty e^{itx} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} dx = e^{-t^2/2}" />
                    ガウス積分における実軸から複素平面への積分路の移動（コーシーの積分定理）を用いることで導かれる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-2 (指数分布の特性関数)">
                <p>
                    指数分布 <InlineMath math="X \sim \text{Exp}(\lambda)" /> の場合（<InlineMath math="x \geq 0" />）：
                    <BlockMath math="\varphi_X(t) = \int_0^\infty e^{itx} \lambda e^{-\lambda x} dx = \lambda \int_0^\infty e^{(it-\lambda)x} dx = \frac{\lambda}{\lambda - it}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.1-3 (ポアソン分布の特性関数)">
                <p>
                    離散型であるポアソン分布 <InlineMath math="X \sim \text{Po}(\lambda)" /> の場合：
                    <BlockMath math="\begin{aligned} \varphi_X(t) &= \sum_{k=0}^\infty e^{itk} \frac{e^{-\lambda} \lambda^k}{k!} = e^{-\lambda} \sum_{k=0}^\infty \frac{(\lambda e^{it})^k}{k!} \\ &= e^{-\lambda} e^{\lambda e^{it}} = e^{\lambda(e^{it} - 1)} \end{aligned}" />
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark: フーリエ解析との関係">
                <p>
                    特性関数は、信号処理や物理学で用いられるフーリエ変換と数学的に同一のものです（符号の定義に若干の差異がある場合があります）。
                    「時間領域」での複雑な分布の形状を「周波数領域」での複素関数の振る舞いとして捉え直すことで、
                    困難な積分計算を代数的な積の計算へと単純化できるメリットがあります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>特性関数 <InlineMath math="\varphi_X(t) = E[e^{itX}]" /> は、分布の情報を複素関数として表現したものである。</li>
                    <li>特性関数は常に存在し、一様連続かつ有界（絶対値が 1 以下）である。</li>
                    <li>代表的な分布の特性関数の形（正規分布のガウス型など）を把握しておくことは、理論展開において極めて重要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
