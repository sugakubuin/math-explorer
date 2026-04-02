import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GroupActionOrbit() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入した群の作用を用いると、作用を受ける集合の要素が群によってどのように「動かされる」かを考えることができます。本節では、ある要素に着目したときに、群の作用によって到達可能なすべての要素からなる集合である<b>軌道（Orbit）</b>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">軌道の定義と分解</h2>

            <p>
                群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとき、一つの要素 <InlineMath math="x \in X" /> が群の要素によってどこまで移動できるかを表すのが軌道です。
            </p>

            <ContentBox type="definition" title="Definition 8.2-1 (軌道)">
                <p>
                    群 <InlineMath math="G" /> が集合 <InlineMath math="X" /> に作用しているとする。<InlineMath math="x \in X" /> に対して、<InlineMath math="G" /> の作用によって <InlineMath math="x" /> から移ることができる要素全体の集合を、<InlineMath math="x" /> を通る<b>軌道（orbit）</b>と呼び、<InlineMath math="G \cdot x" /> や <InlineMath math="\mathcal{O}_x" /> などで表す。
                </p>
                <BlockMath math="G \cdot x = \{g \cdot x \mid g \in G\}" />
            </ContentBox>

            <p>
                定義だけでは少し抽象的なので、すぐに具体例で軌道のイメージを掴みましょう。
            </p>

            <ContentBox type="example" title="Example 8.2-1 (共役作用の軌道と共役類)">
                <p>
                    群 <InlineMath math="G" /> 自身への<b>共役作用</b> <InlineMath math="g \cdot x = gxg^{-1}" /> を考える。この作用における要素 <InlineMath math="x" /> の軌道は、
                </p>
                <BlockMath math="G \cdot x = \{gxg^{-1} \mid g \in G\}" />
                <p>
                    となる。これは群論において<b>共役類（conjugacy class）</b>と呼ばれるものに他ならない。
                </p>
                <p>
                    例えば、対称群 <InlineMath math="S_3" /> において、単位元 <InlineMath math="e" /> の共役類（軌道）は <InlineMath math="\{e\}" /> のみである。互換 <InlineMath math="(12)" /> の共役類は <InlineMath math="\{(12), (13), (23)\}" /> となり、巡回置換 <InlineMath math="(123)" /> の共役類は <InlineMath math="\{(123), (132)\}" /> となる。
                </p>
                <p>
                    また、<InlineMath math="G" /> がアーベル群であれば、すべての <InlineMath math="g, x \in G" /> について <InlineMath math="gxg^{-1} = gg^{-1}x = x" /> となるため、各要素が長さ 1 の共役類（つまり、要素 1 つだけの軌道）をなすことがわかる。
                </p>
            </ContentBox>

            <p>
                このように、軌道を考えることは集合をいくつかのグループに分ける操作に対応しています。実際、軌道は作用を受ける集合の「同値類」として厳密に特徴づけられます。
            </p>

            <ContentBox type="proposition" title="Proposition 8.2-1 (作用が定める同値関係と軌道分解)">
                <p>
                    群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への作用において、<InlineMath math="X" /> 上の二項関係 <InlineMath math="\sim" /> を次のように定める：
                </p>
                <BlockMath math="x \sim y \iff \text{ある } g \in G \text{ が存在して } g \cdot x = y" />
                <p>
                    この関係 <InlineMath math="\sim" /> は <InlineMath math="X" /> 上の同値関係であり、要素 <InlineMath math="x" /> を含む同値類は軌道 <InlineMath math="G \cdot x" /> に一致する。その結果、<InlineMath math="X" /> は互いに素な軌道の和集合として一意に分解される（これを<b>軌道分解</b>という）。
                </p>
                <BlockMath math="X = \bigsqcup_{x \in R} G \cdot x" />
                <p>ここで、<InlineMath math="R" /> は各軌道の代表元からなる集合である。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    関係 <InlineMath math="\sim" /> が同値関係であることを示すために、反射律・対称律・推移律を確認する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li>
                        <b>反射律：</b> <InlineMath math="G" /> の単位元 <InlineMath math="e" /> について、作用の公理から <InlineMath math="e \cdot x = x" /> である。よって <InlineMath math="x \sim x" />。
                    </li>
                    <li>
                        <b>対称律：</b> <InlineMath math="x \sim y" /> とすると、ある <InlineMath math="g \in G" /> で <InlineMath math="g \cdot x = y" />。両辺に左から <InlineMath math="g^{-1}" /> を作用させると、<InlineMath math="g^{-1} \cdot (g \cdot x) = g^{-1} \cdot y" />。公理より左辺は <InlineMath math="(g^{-1}g) \cdot x = e \cdot x = x" /> となるので、<InlineMath math="g^{-1} \cdot y = x" />。よって <InlineMath math="y \sim x" />。
                    </li>
                    <li>
                        <b>推移律：</b> <InlineMath math="x \sim y" /> かつ <InlineMath math="y \sim z" /> とすると、ある <InlineMath math="g, h \in G" /> が存在して <InlineMath math="g \cdot x = y" />、<InlineMath math="h \cdot y = z" />。これを代入すると、<InlineMath math="z = h \cdot (g \cdot x) = (hg) \cdot x" />。群の閉性から <InlineMath math="hg \in G" /> であるため、<InlineMath math="x \sim z" />。
                    </li>
                </ul>
                <p>
                    以上より <InlineMath math="\sim" /> は同値関係である。<InlineMath math="x" /> を含む同値類は <InlineMath math="\{y \in X \mid x \sim y\}" /> であり、これはまさに <InlineMath math="\{g \cdot x \mid g \in G\} = G \cdot x" />、すなわち軌道である。同値関係による類別であるため、<InlineMath math="X" /> は軌道の非交和（直和）に分解される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この軌道分解は、群論において複雑な構造を小さなパーツ（軌道）に分けて理解するための極めて重要な手法です。ラグランジュの定理の際に学んだ剰余類による分割も、この軌道分解の特別な場合として解釈できます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">軌道の具体例</h2>

            <p>
                ここでは、さらに幾何学的な作用における軌道の様子を見てみましょう。前節で触れた推移的作用の概念も、軌道を用いて鮮やかに記述できます。
            </p>

            <ContentBox type="example" title="Example 8.2-2 (正方形における二面体群の軌道)">
                <p>
                    二面体群 <InlineMath math="D_4" /> が正方形の頂点集合 <InlineMath math="X = \{1, 2, 3, 4\}" /> に作用している状況を考える。
                </p>
                <p>
                    頂点 <InlineMath math="1" /> に <InlineMath math="D_4" /> の要素（回転や反射）を次々と作用させると、頂点 <InlineMath math="2, 3, 4" /> のどれにでも移ることができる。つまり、頂点 <InlineMath math="1" /> の軌道は <InlineMath math="\{1, 2, 3, 4\}" /> 全体である。このように軌道が集合全体に一致する作用のことを<b>推移的作用</b>と呼ぶ。
                </p>
                <p>
                    一方で、<InlineMath math="D_4" /> が正方形の2本の対角線の集合 <InlineMath math="Y = \{d_1, d_2\}" /> に作用している状況を考える。この場合も、90度回転を作用させると <InlineMath math="d_1" /> は <InlineMath math="d_2" /> に移り、<InlineMath math="d_2" /> は <InlineMath math="d_1" /> に移る。したがって、<InlineMath math="d_1" /> の軌道は <InlineMath math="\{d_1, d_2\}" /> 全体となり、これも推移的作用であるが、軌道の大きさは 2 となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="推移的作用の言い換え">
                <p>
                    軌道の言葉を使うと、§8.1 で定義した「推移的作用」は非常に簡潔に言い換えられます。群 <InlineMath math="G" /> の集合 <InlineMath math="X" /> への作用が推移的であるとは、<b>「<InlineMath math="X" /> 全体がただ 1 つの軌道からなる（つまり任意の <InlineMath math="x \in X" /> について <InlineMath math="G \cdot x = X" /> となる）」</b>ことと同値です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>群 <InlineMath math="G" /> の作用によって要素 <InlineMath math="x \in X" /> が移り得る要素の全体を、<InlineMath math="x" /> の軌道 <InlineMath math="G \cdot x" /> という。</li>
                    <li>作用は集合 <InlineMath math="X" /> 上に同値関係 <InlineMath math="x \sim y \iff \exists g \in G, \, g \cdot x = y" /> を定め、各同値類が軌道に対応する。</li>
                    <li>集合 <InlineMath math="X" /> は互いに交わらない軌道の直和（非交和）に一意に分解される（軌道分解）。</li>
                    <li>共役作用による群自身の軌道分解は、共役類による分割に対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}