import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PreservationInProducts() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                個々の空間 <InlineMath math="X, Y" /> が持っている位相的な性質は、それらの積空間 <InlineMath math="X \times Y" /> にどのように引き継がれるでしょうか。
                トポロジーにおける主要な性質の多くは、積をとる操作に対して安定しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分離公理と可算公理の保存</h2>

            <p>
                点と点を区別する性質や、位相の大きさを制限する性質は、積において素直に保存されます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-1 (分離・可算公理の保存)">
                <p>
                    <InlineMath math="X, Y" /> が以下の性質を持つとき、積空間 <InlineMath math="X \times Y" /> もまた同じ性質を持つ：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>ハウスドルフ性 (T2)</strong></li>
                    <li><strong>第1可算公理 (C1) / 第2可算公理 (C2)</strong></li>
                    <li><strong>可分性</strong></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-4 font-normal mt-2 ml-4">
                    <li>
                        <strong>ハウスドルフ性 (T2)</strong>: 
                        積空間の異なる2点 <InlineMath math="(x_1, y_1), (x_2, y_2) \in X \times Y" /> をとる。
                        少なくとも一つの成分が異なる。例えば <InlineMath math="x_1 \neq x_2" /> とする。
                        <InlineMath math="X" /> のハウスドルフ性より、<InlineMath math="x_1 \in U, x_2 \in V, U \cap V = \emptyset" /> を満たす開集合 <InlineMath math="U, V \subset X" /> が存在する。
                        このとき、<InlineMath math="U \times Y" /> と <InlineMath math="V \times Y" /> は積空間の開集合であり、
                        <InlineMath math="(x_1, y_1) \in U \times Y" />, <InlineMath math="(x_2, y_2) \in V \times Y" /> かつ
                        <InlineMath math="(U \times Y) \cap (V \times Y) = (U \cap V) \times Y = \emptyset \times Y = \emptyset" /> 
                        を満たす。よって <InlineMath math="X \times Y" /> もハウスドルフである。
                    </li>
                    <li>
                        <strong>第2可算公理 (C2)</strong>:
                        <InlineMath math="\mathcal{B}_X, \mathcal{B}_Y" /> をそれぞれ <InlineMath math="X, Y" /> の可算開基とする。
                        このとき、積空間の開基の定義より、族 <InlineMath math="\mathcal{B} = \{ U \times V \mid U \in \mathcal{B}_X, V \in \mathcal{B}_Y \}" /> は 
                        <InlineMath math="X \times Y" /> の開基となる。
                        可算集合の直積は可算であるから <InlineMath math="\mathcal{B}" /> も可算であり、<InlineMath math="X \times Y" /> は第2可算公理を満たす。
                        （第1可算公理も各点における可算基本近傍系の積をとることで同様に示される）
                    </li>
                    <li>
                        <strong>可分性</strong>:
                        <InlineMath math="D_X, D_Y" /> をそれぞれ <InlineMath math="X, Y" /> の可算稠密部分集合とする。
                        このとき <InlineMath math="D_X \times D_Y" /> は可算集合であり、
                        積空間における閉包の性質（§5.1）より <InlineMath math="\overline{D_X \times D_Y} = \overline{D_X} \times \overline{D_Y} = X \times Y" /> となる。
                        よって <InlineMath math="D_X \times D_Y" /> は <InlineMath math="X \times Y" /> において稠密であり、可分性が保たれる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ハウスドルフ性の保存の証明のツボ">
                <p>
                    積空間の異なる2点 <InlineMath math="(x_1, y_1), (x_2, y_2)" /> をとると、少なくとも一つの成分が異なります。
                    例えば <InlineMath math="x_1 \neq x_2" /> ならば、<InlineMath math="X" /> のハウスドルフ性からこれらを分離する開集合 <InlineMath math="U_1, U_2" /> があり、
                    <InlineMath math="U_1 \times Y" /> と <InlineMath math="U_2 \times Y" /> が積空間における分離開集合となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">連結性の保存</h2>

            <p>
                「つながっている」という性質も、積によって失われることはありません。
            </p>

            <ContentBox type="proposition" title="Proposition 5.3-2 (連結性の保存)">
                <p>
                    位相空間 <InlineMath math="X, Y" /> が連結であれば、その積空間 <InlineMath math="X \times Y" /> も連結である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点 <InlineMath math="(x_0, y_0) \in X \times Y" /> を固定する。
                    任意の点 <InlineMath math="(x, y)" /> に対し、
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="\{x\} \times Y" /> は <InlineMath math="Y" /> と同相なので連結である。</li>
                    <li><InlineMath math="X \times \{y_0\}" /> は <InlineMath math="X" /> と同相なので連結である。</li>
                </ul>
                <p className="mt-2">
                    集合 <InlineMath math="C_x = (X \times \{y_0\}) \cup (\{x\} \times Y)" /> は、
                    2つの連結集合が共通点 <InlineMath math="(x, y_0)" /> を持つため、それらの和集合として連結である。
                    また、すべての <InlineMath math="C_x" /> は共通点 <InlineMath math="(x_0, y_0)" /> を持っている。
                    したがって、積空間の全空間は連結集合の族の和集合 <InlineMath math="X \times Y = \bigcup_{x \in X} C_x" /> となり、
                    共通点を持つ連結集合の和集合に関する性質（§8.1）から連結であることが導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="コンパクト性に注意">
                <p>
                    コンパクト性の保存（チコノフの定理）は非常に重要ですが、有限個の積の場合は比較的容易に示せる一方、
                    無限個の積の場合は選択公理を必要とする深い定理になります。詳細は §5.5 で扱います。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>主要な分離・可算公理は、積空間へそのまま引き継がれる。</li>
                    <li>連結空間の積は連結である。これは各成分を「十字」に繋ぐことで理解できる。</li>
                    <li>性質の保存を示すことは、複雑な空間を単純な空間の積として分解して解析することを可能にする。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
