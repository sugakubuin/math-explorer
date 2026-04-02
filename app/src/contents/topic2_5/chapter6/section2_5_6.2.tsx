import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HausdorffSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                分離公理の中で最も有名かつ重要なのが、この<strong>ハウスドルフ空間 (T2 空間)</strong> です。
                「異なる2点を、<u>互いに重ならない</u>開集合で完全に引き離せる」という性質は、極限の一意性を保証するなど、解析学を位相空間の上で展開する際の必須条件となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハウスドルフ空間の定義</h2>

            <ContentBox type="definition" title="Definition 6.2-1 (ハウスドルフ空間 / T2 空間)">
                <p>
                    位相空間 <InlineMath math="X" /> が <strong>ハウスドルフ空間 (Hausdorff space)</strong> または <strong>T2 空間</strong> であるとは、
                    任意の相異なる2点 <InlineMath math="x, y \in X" /> に対し、
                    <InlineMath math="x \in U" />, <InlineMath math="y \in V" /> かつ <strong><InlineMath math="U \cap V = \emptyset" /></strong>
                    を満たす開集合 <InlineMath math="U, V" /> が存在することをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-1 (ハウスドルフ空間の例)">
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li><strong>距離空間</strong>：任意の相異なる2点 <InlineMath math="x, y" /> に対し、距離を <InlineMath math="d = d(x, y) > 0" /> とすれば、半径 <InlineMath math="d/2" /> の開球体どうしは交わりません。</li>
                    <li><strong>離散位相空間</strong>：各点が単独で開集合なので、当然分離可能です。</li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-2 (ハウスドルフでない例：T1 との境界)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> に <strong>余有限位相</strong> を入れた空間を考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>任意の1点は閉集合なので <strong>T1</strong> です。</li>
                    <li>しかし、前セクションで見た通り、どんなに点を引き離そうとしても「開集合の共通部分が必ず無限集合になる」ため、交わらない開集合はとれません。</li>
                </ul>
                <p className="mt-2 text-sm">
                    このように、T1（1点が閉じている）だけでは、点どうしを「独立した近傍」で包み込むには不十分なのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極限の一意性</h2>

            <p>
                ハウスドルフ性が欠如している空間では、一つの点列が同時に複数の異なる点に収束してしまう、という奇妙な現象が起こり得ます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (極限の一意性)">
                <p>
                    ハウスドルフ空間において、収束する点列の極限はただ一つに定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    点列 <InlineMath math="\{x_n\}" /> が 2つの異なる点 <InlineMath math="a, b" /> に収束すると仮定し、矛盾を導く。
                    <InlineMath math="a \neq b" /> であるから、ハウスドルフ性より <InlineMath math="a \in U, b \in V, U \cap V = \emptyset" /> なる開集合が存在する。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li><InlineMath math="x_n \to a" /> より、ある番号 <InlineMath math="N_1" /> 以降のすべての <InlineMath math="n" /> で <InlineMath math="x_n \in U" /> である。</li>
                    <li><InlineMath math="x_n \to b" /> より、ある番号 <InlineMath math="N_2" /> 以降のすべての <InlineMath math="n" /> で <InlineMath math="x_n \in V" /> である。</li>
                </ul>
                <p className="mt-2">
                    したがって、<InlineMath math="n \geq \max(N_1, N_2)" /> なる <InlineMath math="n" /> に対しては <InlineMath math="x_n \in U \cap V" /> となるはずだが、
                    これは <InlineMath math="U \cap V = \emptyset" /> であることに矛盾する。
                    ゆえに、極限は一意的である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト部分集合と閉集合性</h2>

            <ContentBox type="proposition" title="Proposition 6.2-1 (ハウスドルフ空間のコンパクト部分集合)">
                <p>
                    ハウスドルフ空間において、<strong>コンパクトな部分集合は必ず閉集合である</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="X" /> をハウスドルフ空間、<InlineMath math="K \subset X" /> をコンパクト部分集合とする。
                    <InlineMath math="X \setminus K" /> が開集合であることを示すため、任意の <InlineMath math="x \notin K" /> をとる。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li>各 <InlineMath math="y \in K" /> に対し <InlineMath math="x \neq y" /> なので、ハウスドルフ性より分離開集合 <InlineMath math="U_y \ni x, V_y \ni y, U_y \cap V_y = \emptyset" /> がとれる。</li>
                    <li>族 <InlineMath math="\{V_y\}_{y \in K}" /> は <InlineMath math="K" /> の開被覆である。<InlineMath math="K" /> のコンパクト性より、有限部分被覆 <InlineMath math="V_{y_1}, \dots, V_{y_k}" /> が存在する。</li>
                    <li><InlineMath math="U = U_{y_1} \cap \dots \cap U_{y_k}" /> とおくと、<InlineMath math="U" /> は <InlineMath math="x" /> を含む開集合であり、
                        かつ <InlineMath math="V = V_{y_1} \cup \dots \cup V_{y_k}" /> と重ならない（<InlineMath math="U \cap V = \emptyset" />）。</li>
                    <li><InlineMath math="K \subset V" /> なので、当然 <InlineMath math="U \cap K = \emptyset" /> すなわち <InlineMath math="U \subset X \setminus K" /> となる。</li>
                </ul>
                <p className="mt-2">
                    以上より、<InlineMath math="X \setminus K" /> は各点の近傍を含むため開集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="反例の重要性">
                <p>
                    ハウスドルフでない空間では、上の命題は成り立ちません。
                    例えば非可算集合に「余有限位相」を入れた空間は T1 ですがハウスドルフではなく、
                    そこでは有限集合（常にコンパクト）以外にも奇妙なコンパクト集合が存在し、それらが閉集合でないケースがあります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ハウスドルフ (T2) 空間</strong>：相異なる2点を、交わらない開集合で完全に分離できる。</li>
                    <li>極限値がただ一つに定まるための十分条件である。</li>
                    <li>ハウスドルフ空間であれば、コンパクトな集合は必ず閉じる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
