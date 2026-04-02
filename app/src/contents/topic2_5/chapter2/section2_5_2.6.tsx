import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SecondCountability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                第一可算公理が「点」の周りの性質であったのに対し、<strong>第二可算公理</strong>は「空間全体」を可算な開集合で把握できるという、より強力な条件です。
                この公理を満たす空間は、非常に風通しが良く、多くの好ましい性質を備えています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二可算公理</h2>

            <p>
                開基（§1.3）として可算なものが取れるとき、その空間を第二可算空間と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 2.6-1 (第二可算公理)">
                <p>
                    位相空間 <InlineMath math="X" /> が<strong>第二可算公理 (Second Axiom of Countability)</strong> を満たす（あるいは <strong>C2 空間</strong>である）とは、
                    <InlineMath math="X" /> が<strong>可算な開基</strong>を持つことをいう。
                </p>
            </ContentBox>

            <p className="mt-4">
                ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> において、有理数を中心とし半径が有理数である開球の全体を考えると、
                これは可算集合であり、かつ開基をなすため、ユークリッド空間は第二可算空間です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可分性・リンデレーフ性との関係</h2>

            <p>
                第二可算性は、前節まで学んだいくつかの概念を強力に結びつけます。
            </p>

            <ContentBox type="theorem" title="Theorem 2.6-1 (C2 空間の諸性質)">
                <p>
                    位相空間 <InlineMath math="X" /> が第二可算空間であるとき、次のことが成り立つ：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <InlineMath math="X" /> は第一可算空間である。 (C2 <InlineMath math="\implies" /> C1)
                    </li>
                    <li>
                        <InlineMath math="X" /> は可分空間である。 (C2 <InlineMath math="\implies" /> 可分)
                    </li>
                    <li>
                        任意個の開集合の和集合は、そのうちの可算個だけの和集合として書き直せる（<strong>リンデレーフの性質</strong>）。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\mathcal{B} = \{B_n\}_{n=1}^\infty" /> を可算な開基とする。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li>
                        <strong>C2 <InlineMath math="\implies" /> C1：</strong>
                        <br />
                        任意の点 <InlineMath math="x \in X" /> に対して、<InlineMath math="\mathcal{B}_x = \{ B \in \mathcal{B} \mid x \in B \}" /> とおく。
                        これは可算集合 <InlineMath math="\mathcal{B}" /> の部分集合なので可算である。
                        任意の近傍 <InlineMath math="V \in \mathcal{V}(x)" /> に対し、開基の定義より <InlineMath math="x \in B \subset V" /> を満たす <InlineMath math="B \in \mathcal{B}" /> が存在する。
                        この <InlineMath math="B" /> は定義より <InlineMath math="\mathcal{B}_x" /> の元である。
                        よって <InlineMath math="\mathcal{B}_x" /> は <InlineMath math="x" /> の可算な近傍基であり、<InlineMath math="X" /> は C1 である。
                    </li>
                    <li>
                        <strong>C2 <InlineMath math="\implies" /> 可分：</strong>
                        <br />
                        各 <InlineMath math="B_n \neq \emptyset" /> から一点ずつ <InlineMath math="x_n \in B_n" /> を選び、集合 <InlineMath math="D = \{x_n \mid B_n \neq \emptyset\}" /> を作る。
                        <InlineMath math="D" /> は可算集合である。
                        任意の空でない開集合 <InlineMath math="U" /> に対し、開基の定義よりある <InlineMath math="B_n \neq \emptyset" /> が存在して <InlineMath math="B_n \subset U" /> となる。
                        このとき <InlineMath math="x_n \in B_n \subset U" /> より <InlineMath math="D \cap U \neq \emptyset" /> である。
                        これは <InlineMath math="D" /> が <InlineMath math="X" /> で稠密であることを意味する。
                    </li>
                    <li>
                        <strong>C2 <InlineMath math="\implies" /> リンデレーフ（概略）：</strong>
                        <br />
                        空間全体を覆うような開集合の集まり（開被覆）が与えられたとき、それらの中から<strong>可算個</strong>だけを選び出しても、まだ全体を覆い尽くせるという性質をリンデレーフの性質という（詳細は Chapter 7 参照）。
                        第二可算空間では、任意の開集合を開基の元の和集合として表せるため、この「選別」が開基の可算性を経由して可能になる。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">可算公理の包含関係</h2>

            <p>
                ここまで学んだ可算性に関する性質を整理すると、次のような階層構造が見えてきます。
            </p>

            <ContentBox type="remark" title="公理の強弱と反例">
                <p>
                    一般に <strong>C2 <InlineMath math="\implies" /> C1</strong> および <strong>C2 <InlineMath math="\implies" /> 可分</strong> が成り立ちますが、その逆は必ずしも成り立ちません。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                    <li>
                        <strong>可分 ⇏ C2</strong>：例えば、実数直線に「補可算位相」（可算集合の補集合を開集合とする位相）を入れると、
                        可分ではありますが第二可算ではありません。
                    </li>
                    <li>
                        <strong>C1 ⇏ C2</strong>：非可算個の点からなる離散空間は第一可算ですが、第二可算ではありません。
                    </li>
                </ul>
                <p className="mt-4">
                    ただし、非常に重要な例外として、<strong>距離空間においてはこれら 3 つ（C2, 可分, リンデレーフ）はすべて同値</strong>になります。
                    これが、実数や多変数の解析が非常に扱いやすい理由の根源にあります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§2.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>第二可算空間 (C2)</strong> とは、可算な開基を持つ空間である。</li>
                    <li>第二可算性は第一可算性よりも、可分性よりも「強い」性質である。</li>
                    <li>第二可算空間では、どんな開被覆からも<strong>可算部分被覆</strong>を取り出せる（リンデレーフ）。</li>
                    <li>解析学の主な舞台であるユークリッド空間は第二可算空間の代表例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
