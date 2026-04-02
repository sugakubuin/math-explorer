import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function LinearIndependenceOfEigenvectors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                固有ベクトルに関する最も重要で基礎的な定理の一つを証明します。<br />
                それは、「全く違う倍率で伸び縮みする方向（異なる固有値に属する固有ベクトル）同士は、互いに完全に独立した方向を向いている」という事実です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">独立性定理</h2>

            <p>
                この定理は、次章の「対角化」を可能にする十分条件を与えるとともに、物理や工学における様々なモード（振動モードや安定性など）が互いに独立に振る舞うことの数学的な基礎となります。
            </p>

            <ContentBox type="theorem" title="Theorem 5.5-1 （固有ベクトルの線形独立性）">
                <p>
                    <InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> の<strong>相異なる</strong>固有値 <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_k" /> に属するそれぞれの固有ベクトルを <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_k" /> とする。<br />
                    このとき、ベクトルの組 <InlineMath math="\{ \boldsymbol{v}_1, \boldsymbol{v}_2, \dots, \boldsymbol{v}_k \}" /> は必ず<strong>線形独立（一次独立）</strong>である。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※前提として、各 <InlineMath math="\boldsymbol{v}_i" /> は固有ベクトルであるため、零ベクトルではない（<InlineMath math="\boldsymbol{v}_i \neq \boldsymbol{0}" />）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    固有ベクトルの個数 <InlineMath math="k" /> に関する数学的帰納法を用いて証明する。
                </p>
                <p className="font-bold mt-4">[1] <InlineMath math="k = 1" /> の場合</p>
                <p>
                    <InlineMath math="\boldsymbol{v}_1" /> が固有ベクトルであるため <InlineMath math="\boldsymbol{v}_1 \neq \boldsymbol{0}" /> である。1つの非零ベクトルからなる集合 <InlineMath math="\{ \boldsymbol{v}_1 \}" /> は明らかに線形独立であるため、成り立つ。
                </p>

                <p className="font-bold mt-4">[2] <InlineMath math="k = m" /> で成り立つと仮定したとき、<InlineMath math="k = m + 1" /> で成り立つことの証明</p>
                <p>
                    <InlineMath math="m" /> 個の異なる固有値に対する固有ベクトルが線形独立であると仮定する。<br />
                    次に、<InlineMath math="m+1" /> 個の異なる固有値 <InlineMath math="\lambda_1, \dots, \lambda_{m+1}" /> と、それに属する固有ベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_{m+1}" /> を考える。<br />
                    これらが線形関係にあると仮定し、その係数がすべて <InlineMath math="0" /> になることを示せばよい。
                </p>
                <p>
                    あるスカラー <InlineMath math="c_1, c_2, \dots, c_{m+1}" /> を用いて、
                </p>
                <BlockMath math="c_1\boldsymbol{v}_1 + c_2\boldsymbol{v}_2 + \dots + c_m\boldsymbol{v}_m + c_{m+1}\boldsymbol{v}_{m+1} = \boldsymbol{0} \quad \cdots (*)" />
                <p>
                    と表せたと仮定する。<br />
                    この両辺に行列 <InlineMath math="A" /> を左から掛ける。線形性より
                </p>
                <BlockMath math="c_1 A\boldsymbol{v}_1 + c_2 A\boldsymbol{v}_2 + \dots + c_m A\boldsymbol{v}_m + c_{m+1} A\boldsymbol{v}_{m+1} = A\boldsymbol{0} = \boldsymbol{0}" />
                <p>
                    各 <InlineMath math="\boldsymbol{v}_i" /> は固有値 <InlineMath math="\lambda_i" /> の固有ベクトル（<InlineMath math="A\boldsymbol{v}_i = \lambda_i\boldsymbol{v}_i" />）であるため、
                </p>
                <BlockMath math="\begin{aligned} &c_1 \lambda_1 \boldsymbol{v}_1 + c_2 \lambda_2 \boldsymbol{v}_2 + \dots \\ &\quad + c_m \lambda_m \boldsymbol{v}_m + c_{m+1} \lambda_{m+1} \boldsymbol{v}_{m+1} &= \boldsymbol{0} \quad \cdots (**) \end{aligned}" />
                <p>
                    が得られる。<br />
                    次に、元の式 <InlineMath math="(*)" /> の両辺に <InlineMath math="\lambda_{m+1}" /> を掛ける。
                </p>
                <BlockMath math="\begin{aligned} &c_1 \lambda_{m+1} \boldsymbol{v}_1 + c_2 \lambda_{m+1} \boldsymbol{v}_2 + \dots \\ &\quad + c_m \lambda_{m+1} \boldsymbol{v}_m + c_{m+1} \lambda_{m+1} \boldsymbol{v}_{m+1} &= \boldsymbol{0} \quad \cdots (***) \end{aligned}" />
                <p>
                    式 <InlineMath math="(**)" /> から式 <InlineMath math="(***)" /> を辺々引く。すると、最後の項（<InlineMath math="\boldsymbol{v}_{m+1}" /> の項）が完全に打ち消し合い、次のように <InlineMath math="m" /> 個のベクトルの線形結合だけが残る。
                </p>
                <BlockMath math="\begin{aligned} c_1 (\lambda_1 - \lambda_{m+1}) \boldsymbol{v}_1 + c_2 (\lambda_2 - \lambda_{m+1}) \boldsymbol{v}_2 + \dots \\ + c_m (\lambda_m - \lambda_{m+1}) \boldsymbol{v}_m &= \boldsymbol{0} \end{aligned}" />
                <p>
                    ここで、帰納法の仮定に戻る。「<InlineMath math="m" /> 個の異なる固有値に属する固有ベクトル <InlineMath math="\boldsymbol{v}_1, \dots, \boldsymbol{v}_m" /> は線形独立である」という仮定から、この線形結合の係数はすべて <InlineMath math="0" /> でなければならない。つまり、
                </p>
                <BlockMath math="c_1(\lambda_1 - \lambda_{m+1}) = 0" />
                <BlockMath math="c_2(\lambda_2 - \lambda_{m+1}) = 0" />
                <BlockMath math="\vdots" />
                <BlockMath math="c_m(\lambda_m - \lambda_{m+1}) = 0" />
                <p>
                    である。<br />
                    定理の前提として、すべての固有値は「相異なる」ため、<InlineMath math="\lambda_i - \lambda_{m+1} \neq 0 \, (i = 1, \dots, m)" /> である。<br />
                    したがって、係数 <InlineMath math="0" /> を満たすには各 <InlineMath math="c_i" /> 自体が <InlineMath math="0" /> でなければならない。
                </p>
                <BlockMath math="c_1 = c_2 = \dots = c_m = 0" />
                <p>
                    これを一番最初の式 <InlineMath math="(*)" /> に代入すると、結局 <InlineMath math="c_{m+1} \boldsymbol{v}_{m+1} = \boldsymbol{0}" /> だけが残る。<br />
                    <InlineMath math="\boldsymbol{v}_{m+1}" /> も固有ベクトルであるため非零ベクトル（<InlineMath math="\neq \boldsymbol{0}" />）であり、ここから必然的に
                </p>
                <BlockMath math="c_{m+1} = 0" />
                <p>
                    も導かれる。
                </p>
                <p>
                    以上より、すべての係数 <InlineMath math="c_1, \dots, c_{m+1}" /> が <InlineMath math="0" /> になることが示され、<InlineMath math="m+1" /> 個の場合も線形独立であることが証明された。<br />
                    数学的帰納法により、何個であっても異なる固有値に属する固有ベクトルの組は線形独立である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="極めて重要な系（対角化可能の十分条件）">
                <p>
                    この定理から、線形代数における最も実用的な結果の一つが直ちに得られます。<br />
                    それは、<strong>「<InlineMath math="n \times n" /> 正方行列 <InlineMath math="A" /> が <InlineMath math="n" /> 個の相異なる固有値を持つならば、<InlineMath math="A" /> は必ず対角化できる」</strong>という事実です。
                </p>
                <p>
                    なぜなら、相異なる <InlineMath math="n" /> 個の固有値に対応して <InlineMath math="n" /> 個の固有ベクトルを一つずつ選べば、この定理によってそれら <InlineMath math="n" /> 個のベルトルは必ず「線形独立」になります。
                    <InlineMath math="n" /> 次元空間において <InlineMath math="n" /> 個の線形独立なベクトルは「空間全体の基底」になるため、固有ベクトルを基底として採用する（対角化する）ことができるからです。<br />
                    （対角化の詳細な条件と手法については Chapter 6 で学びます）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>異なる固有値に属する固有ベクトル同士は、互いに<strong>線形独立（一次独立）</strong>の関係にある（Theorem 5.5-1）。</li>
                    <li>したがって、行列が複数の異なる固有値を持つほど、それに対応する独立な（固有空間の）ベクトルを多数確保できることになる。</li>
                    <li>この定理は、次章で学ぶ「行列の対角化可能性」を保証するための最も強力な根拠の一つとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
