import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GreensFunction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                全空間におけるポアソン方程式は基本解（§8.4）を用いて解くことができましたが、有限の境界が存在する場合、境界条件を同時に満たす必要があります。
                この役割を担うのが<b>グリーン関数</b>です。
                グリーン関数は、点源に対する応答でありながら、境界でゼロ（ディリクレ条件）になるように「補正」された関数です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">グリーン関数の定義</h2>

            <p className="leading-relaxed">
                基本解に、境界条件を調整するための補正項を加えます。
            </p>

            <ContentBox type="definition" title="Definition 8.5-1 (グリーン関数)">
                <p>
                    領域 <InlineMath math="\Omega" /> における（ディリクレ問題の）<b>グリーン関数</b> <InlineMath math="G(x, y)" /> とは、次の性質を満たす関数である：
                    <BlockMath math="G(x, y) = \Phi(y - x) - H^x(y)" />
                    ここで <InlineMath math="\Phi" /> は基本解であり、<InlineMath math="H^x" /> は次の境界値問題を解く「補正項」である：
                    <BlockMath math="\begin{cases} \Delta_y H^x(y) = 0 & (y \in \Omega) \\ H^x(y) = \Phi(y - x) & (y \in \partial \Omega) \end{cases}" />
                    これにより、<InlineMath math="G(x, y)" /> は <InlineMath math="y \in \partial \Omega" /> で常に 0 となる。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 8.5-1 (グリーン関数による解の表示)">
                <p>
                    領域 <InlineMath math="\Omega" /> におけるディリクレ問題 <InlineMath math="\Delta u = f, \ u = g \ (\partial \Omega)" /> の解は、
                    グリーン関数 <InlineMath math="G" /> を用いて次のように表される：
                    <BlockMath math="u(x) = \int_{\Omega} G(x, y) f(y) \, dy - \int_{\partial \Omega} g(y) \frac{\partial G}{\partial n_y}(x, y) \, dS_y" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    グリーンの第二恒等式 
                    <InlineMath math="\int_{\Omega} (u \Delta v - v \Delta u) \, dy = \int_{\partial \Omega} (u \frac{\partial v}{\partial n} - v \frac{\partial u}{\partial n}) \, dS" /> 
                    において、<InlineMath math="v(y) = G(x, y)" /> とおく。
                    <InlineMath math="x" /> の特異点を微小球で除外して極限をとることで、左辺は <InlineMath math="u(x) - \int G f \, dy" /> となり、
                    右辺の境界積分から第 2 項が得られる（境界では <InlineMath math="G=0" /> なので <InlineMath math="\partial u/\partial n" /> の項は消える）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特別な領域でのグリーン関数</h2>

            <p className="leading-relaxed">
                幾何学的な対称性を利用すると、鏡像や反転を用いて具体的なグリーン関数を構成できます。
            </p>

            <ContentBox type="example" title="Example 8.5-1 (上半空間のグリーン関数：鏡像法)">
                <p>
                    領域 <InlineMath math="\Omega = \{y_n > 0\}" /> において、<InlineMath math="x = (x_1, \dots, x_n)" /> の鏡像を <InlineMath math="x^* = (x_1, \dots, -x_n)" /> とすると、
                    グリーン関数は次のように構成できる：
                    <BlockMath math="G(x, y) = \Phi(y - x) - \Phi(y - x^*)" />
                    境界 <InlineMath math="y_n = 0" /> 上では <InlineMath math="|y - x| = |y - x^*|" /> となるため、<InlineMath math="G = 0" /> が満たされる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.5-2 (球のグリーン関数：反転法)">
                <p>
                    単位球 <InlineMath math="B_1(0)" /> において、点 <InlineMath math="x" /> の反転点 <InlineMath math="x^* = x / |x|^2" /> を用いると、
                    グリーン関数は次のように与えられる：
                    <BlockMath math="G(x, y) = \Phi(y - x) - \Phi(|x|(y - x^*))" />
                    球面上の任意の点 <InlineMath math="y" /> に対して <InlineMath math="|y - x| = |x| |y - x^*|" /> が成り立つという幾何学的性質により、境界条件が満たされる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="グリーン関数の普遍的重要性">
                <p>
                    グリーン関数は「ある一点に置かれた単位ソースに対する応答」であり、線形システムのインパルス応答に相当する。
                    この概念はポテンシャル論にとどまらず、量子力学における伝播関数（プロパゲータ）や、構造解析における影響線など、
                    複雑な系を一箇所ごとの寄与の積み重ねとして理解する手法の基礎となっている。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                本章では、調和関数が持つ平均値性質から、基本解、そして境界条件を織り込んだグリーン関数に至るまで、
                ラプラス方程式の解析的な美しさと実用性を学びました。
                次章では、これまでの議論をより一般的な視点から統合し、解の正則性（滑らかさ）や適切な問題設定の概念について深く掘り下げます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§8.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>グリーン関数は、基本解に境界条件を補正する項を加えたものである。</li>
                    <li>グリーン関数を用いれば、ソース項 <InlineMath math="f" /> と境界データ <InlineMath math="g" /> を持つ問題の解を直接的に表示できる。</li>
                    <li>鏡像法やケルビン変換（反転）を用いることで、平坦または球面境界を持つ領域のグリーン関数を具体的に求められる。</li>
                    <li>グリーン関数は、領域の幾何学的形状とその系の「物理的なつながり方」を完全に記述する道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
