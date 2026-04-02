import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionWedgeProduct() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                交代テンソルを基盤として、幾何学的な「向き付きの面積」や「体積」を代数的に扱うための新しい積、すなわちウェッジ積（外積）を導入します。この演算は、線形独立性や行列式の本質を理解するための強力な道具となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ウェッジ積の定義と基本性質</h2>

            <p className="leading-relaxed">
                前章で学んだ交代化作用素を用いて、ベクトルの組から交代テンソルを作り出す演算を定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.1-1 (ウェッジ積)"
            >
                <p>
                    ベクトル空間 <InlineMath math="V" /> のベクトル <InlineMath math="v_1, \ldots, v_n" /> に対して、それらの<strong>ウェッジ積（wedge product）</strong>または外積を、
                    <BlockMath math="v_1 \wedge \cdots \wedge v_n = n!\, \mathrm{Alt}(v_1 \otimes \cdots \otimes v_n)" />
                    で定める。
                </p>
                <p>
                    （※記号的には、次節で述べるようにテンソル代数 <InlineMath math="T(V)" /> を特定のイデアルで割った商空間での積として定義するのが標準的である。）
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                交代化作用素の性質から、ウェッジ積は変数に関して強い「反対称性」を持つことが直接導かれます。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.1-1 (ウェッジ積の反対称性)"
            >
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="i \neq j" /> で <InlineMath math="v_i = v_j" /> のとき、<InlineMath math="v_1 \wedge \cdots \wedge v_n = 0" />。</li>
                    <li>隣接する 2 つの変数を交換すると、全体の符号が反転する。<InlineMath math="v \wedge w = -w \wedge v" />。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="n=2" /> の場合で示す。<InlineMath math="v \wedge v" /> を計算すると、
                    <BlockMath math="v \wedge v = 2!\, \mathrm{Alt}(v \otimes v) = v \otimes v - v \otimes v = 0" />
                    となる。
                </p>
                <p>
                    次に、<InlineMath math="(v + w) \wedge (v + w) = 0" /> を展開すると、
                    <BlockMath math="v \wedge v + v \wedge w + w \wedge v + w \wedge w = 0" />
                    ここで <InlineMath math="v \wedge v = 0" /> および <InlineMath math="w \wedge w = 0" /> を用いると、
                    <BlockMath math="v \wedge w + w \wedge v = 0 \implies v \wedge w = -w \wedge v" />
                    が得られる。一般の <InlineMath math="n" /> の場合も、隣接する変数の交換は交代化作用素 <InlineMath math="\mathrm{Alt}" /> の性質から符号が <InlineMath math="-1" /> 倍になるため同様である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                ウェッジ積の計算では、この反対称性と線形性を組み合わせることで、式を簡単に整理することができます。
            </p>

            <ContentBox
                type="example"
                title={<span>Example 4.1-1 (<InlineMath math="\mathbb{R}^3" /> でのウェッジ積の計算)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> の標準基底を <InlineMath math="e_1, e_2, e_3" /> としたとき、<InlineMath math="e_1 \wedge e_2 \wedge e_3" /> は、
                    <BlockMath math="e_1 \wedge e_2 \wedge e_3 = 3!\, \mathrm{Alt}(e_1 \otimes e_2 \otimes e_3)" />
                    という交代テンソルを表す。
                </p>
                <p>
                    ここで、<InlineMath math="(2e_1 + e_2) \wedge e_3" /> という積を計算してみる。ウェッジ積の線形性（各変数について線形）から、
                    <BlockMath math="\begin{aligned} (2e_1 + e_2) \wedge e_3 &= 2(e_1 \wedge e_3) + 1(e_2 \wedge e_3) \\ &= 2(e_1 \wedge e_3) + e_2 \wedge e_3 \end{aligned}" />
                    となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ウェッジ積と行列式の関係</h2>

            <p className="leading-relaxed">
                ウェッジ積が「同じベクトルが含まれると 0 になる」という性質は、ベクトルの線形独立性を判定する強力な条件になります。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.1-2 (一次従属なベクトルのウェッジ積は零)"
            >
                <p>
                    ベクトル <InlineMath math="v_1, \ldots, v_n" /> が線形従属（一次従属）であるならば、
                    <BlockMath math="v_1 \wedge \cdots \wedge v_n = 0" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <InlineMath math="v_1, \ldots, v_n" /> が線形従属であるため、あるベクトル（例えば <InlineMath math="v_n" />）が他のベクトルの線形結合で表せるとする。すなわち <InlineMath math="v_n = \sum_{i=1}^{n-1} a_i v_i" />。
                </p>
                <p>
                    これをウェッジ積に代入し、多重線形性を用いて展開すると、
                    <BlockMath math="\begin{aligned} v_1 \wedge \cdots \wedge v_{n-1} \wedge v_n &= v_1 \wedge \cdots \wedge v_{n-1} \wedge \left( \sum_{i=1}^{n-1} a_i v_i \right) \\ &= \sum_{i=1}^{n-1} a_i (v_1 \wedge \cdots \wedge v_{n-1} \wedge v_i) \end{aligned}" />
                    となる。シグマの中の各項には、必ず <InlineMath math="v_i" /> が 2 回現れることになる（1 回目は最初からあるもの、2 回目は展開によって出てきたもの）。
                </p>
                <p>
                    同じベクトルが 2 つ含まれるウェッジ積は 0 であるため、すべての項が 0 となり、結果として全体の積も 0 となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的なベクトルを用いて、線形独立性がどのように反映されるかを確認しましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 4.1-2 (線形独立性の外積による判定)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^3" /> において、<InlineMath math="v_1 = (1, 0, 0), v_2 = (0, 1, 0), v_3 = (1, 1, 0)" /> とする。これらは <InlineMath math="v_3 = v_1 + v_2" /> を満たすため線形従属である。
                </p>
                <p>
                    これらのウェッジ積を計算すると、
                    <BlockMath math="\begin{aligned} v_1 \wedge v_2 \wedge v_3 &= v_1 \wedge v_2 \wedge (v_1 + v_2) \\ &= v_1 \wedge v_2 \wedge v_1 + v_1 \wedge v_2 \wedge v_2 \end{aligned}" />
                    となる。
                </p>
                <p>
                    第1項は <InlineMath math="v_1" /> を2つ含み、符号を入れ替えると <InlineMath math="v_1 \wedge v_2 \wedge v_1 = -v_1 \wedge v_1 \wedge v_2 = 0" />。第2項も <InlineMath math="v_2" /> を2つ含むため <InlineMath math="0" />。したがって <InlineMath math="v_1 \wedge v_2 \wedge v_3 = 0" /> となる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="体積の符号付き一般化"
            >
                <p>
                    幾何学的には、ウェッジ積は空間内の「図形の大きさ」を表しています。<InlineMath math="v \wedge w \neq 0" /> は、ベクトル <InlineMath math="v" /> と <InlineMath math="w" /> が張る平行四辺形の（符号付きの）面積に相当し、<InlineMath math="v_1 \wedge \cdots \wedge v_n" /> は <InlineMath math="n" /> 個のベクトルが張る超平行体の（符号付きの）体積を与えます。体積が 0 になることは、ベクトルがペシャンコに潰れている（線形従属である）ことを意味しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>ウェッジ積 <InlineMath math="\wedge" /> は、ベクトルの順序を入れ替えると符号が反転する（反対称性）。</li>
                    <li>同じベクトル同士のウェッジ積は必ず <InlineMath math="0" /> になる（<InlineMath math="v \wedge v = 0" />）。</li>
                    <li>ベクトルの組が線形従属であれば、それらのウェッジ積は <InlineMath math="0" /> となる。これは行列式が 0 になることと本質的に同じである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
