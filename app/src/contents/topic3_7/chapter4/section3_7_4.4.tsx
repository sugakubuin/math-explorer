import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferenceBetweenUncorrelationAndIndependence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                確率変数が独立であれば、それらは互いに影響を及ぼさないため、統計的な相関もありません。
                しかし、その逆は必ずしも成り立ちません。
                本節では、無相関と独立の包含関係と、その具体的な反例を通じて、両者の違いを明確にします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立 ⇒ 無相関</h2>

            <p className="leading-relaxed">
                独立性は非常に強い条件であり、独立であれば数学的な構造として必然的に無相関となります。
            </p>

            <ContentBox type="proposition" title="Proposition 4.4-1 (独立ならば無相関)">
                <p>
                    2 つの確率変数 <InlineMath math="X, Y" /> が独立であれば、共分散は 0 である。
                    すなわち、<InlineMath math="X" /> と <InlineMath math="Y" /> は<b>無相関</b>（uncorrelated）である。
                    <BlockMath math="\mathrm{Cov}(X, Y) = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    独立性より、積の期待値は期待値の積に分解される（Theorem 4.3-1）：
                    <BlockMath math="E[XY] = E[X] E[Y]" />
                    共分散の定義式は次のように与えられる：
                    <BlockMath math="\mathrm{Cov}(X, Y) = E[XY] - E[X] E[Y]" />
                    これに積の公式を代入すると、<BlockMath math="\mathrm{Cov}(X, Y) = E[X] E[Y] - E[X] E[Y] = 0" /> となり、無相関であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この命題の逆、つまり「共分散が 0 ならば独立か」という問いに対しては、一般に否定的な答えとなります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無相関だが独立でない例</h2>

            <p className="leading-relaxed">
                相関係数（共分散）は「線形な関係性」のみを捉える指標であるため、非線形な依存関係がある場合には、無相関であっても独立ではないことがあります。
            </p>

            <ContentBox type="example" title="Example 4.4-1 (無相関だが独立でない例)">
                <p>
                    標準正規分布に従う確率変数 <InlineMath math="X \sim \mathcal{N}(0, 1)" /> と、その 2 乗 <InlineMath math="Y = X^2" /> を考える。
                    このとき、共分散を計算すると以下のようになる：
                    <BlockMath math="\begin{aligned} \mathrm{Cov}(X, X^2) &= E[X \cdot X^2] - E[X] E[X^2] \\ &= E[X^3] - E[X] E[X^2] \end{aligned}" />
                    標準正規分布の奇数次モーメントはすべて 0 であるため、<InlineMath math="E[X] = 0" /> かつ <InlineMath math="E[X^3] = 0" /> である。
                    したがって <InlineMath math="\mathrm{Cov}(X, X^2) = 0" /> となり、これらは<b>無相関だが（関数の関係にあるため）独立ではない</b>。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ただし、分布が特定のクラス（特に正規分布）に属する場合には、特別な関係が成り立ちます。
            </p>

            <ContentBox type="example" title="Example 4.4-2 (正規分布の特別性)">
                <p>
                    確率変数のペア <InlineMath math="(X, Y)" /> が 2 次元正規分布（多変量正規分布）に従う場合には、
                    <b>無相関であることが、独立であることの必要十分条件となります</b>。
                </p>
                <p>
                    2 次元正規分布の結合密度関数において、相関係数を 0 と置くと、指数部分の式が <InlineMath math="x" /> の項と <InlineMath math="y" /> の項の単純な和になり、全体はそれぞれの周辺密度関数の積に完全に分離されます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="現実のデータ解析における落とし穴">
                <p>
                    データ解析において、「相関がないから独立として扱ってよい」と判断することは、多くの場合に危険です。
                    特に金融データの解析や機械学習では、σ-加法族レベルでの真の独立性を確保できているかどうかが、モデルの頑健性に大きな影響を与えます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、確率論の核心である独立性について深く学びました。
                次章では、情報を条件として取り込んだ期待値の一般論である「条件付き期待値」の世界へと踏み出していきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§4.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>独立性は無相関を包含するより強い概念であり、独立ならば必ず無相関となる。</li>
                    <li>無相関であっても、非線形で強い依存関係がある場合には独立とは言えない。</li>
                    <li>2 次元正規分布という特殊なケースにおいてのみ、無相関と独立が同値になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
