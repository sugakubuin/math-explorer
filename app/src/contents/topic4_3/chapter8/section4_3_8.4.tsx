import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AbelianVarietiesOutlook() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の最後として、種数1の代数曲線（楕円曲線）における理論を、より高次元の対象へと一般化する展望について触れておきます。これまでの章で見てきた複素トーラスや楕円関数、そしてテータ関数の理論は、種数 <InlineMath math="g \geq 2" /> の代数曲線や高次元の複素多様体へと自然に拡張されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高次元への一般化</h2>

            <p>
                楕円曲線は種数 <InlineMath math="g=1" /> の代数曲線であり、その上の関数の理論が楕円関数論でした。これを任意の種数 <InlineMath math="g" /> の代数曲線に拡張すると、代数幾何学における最も重要な対象の一つである「ヤコビ多様体」が現れます。
            </p>

            <ContentBox type="remark" title="ヤコビ多様体とアーベル関数">
                <p>
                    種数 <InlineMath math="g" /> の代数曲線に対して、その上の正則微分形式の空間の双対空間と、曲線の周期格子 <InlineMath math="\Lambda" />（<InlineMath math="\mathbb{Z}^{2g}" /> と同型な格子）の商をとることで、<InlineMath math="g" /> 次元の複素トーラス <InlineMath math="\mathbb{C}^g/\Lambda" /> が構成されます。これが<b>ヤコビ多様体（Jacobian variety）</b>です。
                </p>
                <p>
                    楕円関数論が <InlineMath math="g=1" /> の場合の理論であったのと同様に、高次元の複素トーラス <InlineMath math="\mathbb{C}^g/\Lambda" /> 上の有理型関数の理論が構築され、これらは<b>アーベル関数（Abelian function）</b>と呼ばれます。アーベル関数は、後述する <InlineMath math="g" /> 変数のテータ関数を用いて具体的に記述することができます。また、この枠組みでは、モジュラー形式の一般化としてジーゲル（Siegel）のモジュラー形式の理論が展開されます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマンのテータ関数</h2>

            <p>
                第6章で学んだヤコビのテータ関数は、高種数の理論においても自然に拡張されます。これがリーマンのテータ関数です。
            </p>

            <ContentBox type="remark" title="多変数テータ関数とリーマンの条件">
                <p>
                    <InlineMath math="g" /> 変数のテータ関数 <InlineMath math="\theta(z|\Omega)" /> は、<InlineMath math="z \in \mathbb{C}^g" /> および虚部が正定値であるような <InlineMath math="g \times g" /> 対称行列 <InlineMath math="\Omega" />（ジーゲル上半空間の元）に対して、次のように定義されます。
                </p>
                <BlockMath math="\theta(z|\Omega) = \sum_{n \in \mathbb{Z}^g} \exp(\pi i n^\top \Omega n + 2\pi i n^\top z)" />
                <p>
                    これは、第6章のテータ関数の直接的な多変数への一般化であり、高種数のリーマン面やヤコビ多様体の理論において不可欠な役割を果たします。
                </p>
                <p>
                    また、すべての複素トーラスが代数多様体（射影空間に埋め込めるもの）になるわけではありません。複素トーラスが射影的に埋め込めるための判定条件は<b>リーマンの条件（Riemann conditions）</b>と呼ばれ、この条件を満たす複素トーラスを<b>アーベル多様体（Abelian variety）</b>と呼びます。<InlineMath math="g=1" /> の場合（楕円曲線）は常にこの条件が満たされますが、<InlineMath math="g \geq 2" /> では非自明な条件となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>楕円曲線の理論は、高次元の複素トーラスであるヤコビ多様体へと拡張される。</li>
                    <li>多変数のアーベル関数は、リーマンのテータ関数を用いて記述される。</li>
                    <li>複素トーラスが射影空間に埋め込めるための条件（リーマンの条件）を満たすものがアーベル多様体である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
