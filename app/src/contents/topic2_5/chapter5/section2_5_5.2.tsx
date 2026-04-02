import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProductTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                2つの位相空間 <InlineMath math="X, Y" /> が与えられたとき、その直積集合 <InlineMath math="X \times Y" /> にはどのような位相を入れるのが最も「自然」でしょうか。
                トポロジーにおける自然さの基準は、各成分への「射影」が連続になること、そして直積への写像の連続性が成分ごとの連続性で判定できる（普遍性）ことにあります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有限積位相の定義</h2>

            <p>
                射影を連続にする最小限の開集合をベースに位相を構成します。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (積位相)">
                <p>
                    2つの位相空間 <InlineMath math="X, Y" /> の直積集合 <InlineMath math="X \times Y" /> 上の<strong>積位相 (Product Topology)</strong> とは、
                    次の集合族を準開基として生成される位相のことをいう：
                    <BlockMath math="\mathcal{S} = \{ p_X^{-1}(U) \mid U \in \mathcal{O}_X \} \cup \{ p_Y^{-1}(V) \mid V \in \mathcal{O}_Y \}" />
                    ここで、<InlineMath math="p_X, p_Y" /> はそれぞれ <InlineMath math="X, Y" /> への射影写像である。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (平面上の積位相)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> 同士の積空間 <InlineMath math="\mathbb{R} \times \mathbb{R} = \mathbb{R}^2" /> を考える。
                    このとき、準開基から作られる開基は、<InlineMath math="U, V" /> を開区間とすると
                    <BlockMath math="p_X^{-1}(U) \cap p_Y^{-1}(V) = U \times V" />
                    という形をした<strong>開長方形</strong>の族となる。
                    したがって、<InlineMath math="\mathbb{R}^2" /> の積位相は、通常の（距離から定まる）位相と一致する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="無限積と箱位相">
                <p>
                    無限個の積 <InlineMath math="\prod_{\alpha \in \Lambda} X_\alpha" /> を考える場合、すべての成分で開集合を指定する「箱位相」を考えると、
                    直積への写像の連続性が保たれない（普遍性が壊れる）という問題が発生します。
                    そのため、無限積における<strong>積位相（チコノフ位相）</strong>では、有限個の成分以外は全体集合 <InlineMath math="X_\alpha" /> であるような集合のみを開基とします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">積空間の普遍性</h2>

            <p>
                積位相が「正しい」定義である理由は、以下の性質に集約されます。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (積空間の普遍性)">
                <p>
                    位相空間 <InlineMath math="Z" /> から積空間 <InlineMath math="X \times Y" /> への写像 <InlineMath math="f: Z \to X \times Y" /> が連続であるための必要十分条件は、
                    各成分の写像 <InlineMath math="f_1 = p_1 \circ f: Z \to X" /> および <InlineMath math="f_2 = p_2 \circ f: Z \to Y" /> が連続であることである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (<InlineMath math="\Longrightarrow" />) 連続写像の合成は連続であるから、<InlineMath math="f" /> が連続ならば射影（連続）との合成である <InlineMath math="f_1, f_2" /> も連続である。
                </p>
                <p className="mt-2">
                    (<InlineMath math="\Longleftarrow" />) <InlineMath math="f_1, f_2" /> が連続であるとする。
                    積空間の任意の開基 <InlineMath math="U \times V" /> に対し、
                </p>
                <BlockMath math="f^{-1}(U \times V) = f_1^{-1}(U) \cap f_2^{-1}(V)" />
                <p>
                    と書ける。仮定より <InlineMath math="f_1^{-1}(U)" /> と <InlineMath math="f_2^{-1}(V)" /> は <InlineMath math="Z" /> の開集合であり、その共通部分も開集合である。
                    任意の開集合は開基の和集合として書けるため、任意の開集合の逆像も開集合となり、<InlineMath math="f" /> は連続である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 5.2-1 (R^2 の位相)">
                <p>
                    平面 <InlineMath math="\mathbb{R}^2" /> の標準的な位相（距離位相）は、
                    直線 <InlineMath math="\mathbb{R}" /> の標準的な位相どうしの積位相と一致します。
                    これは「開円板」と「開長方形」が互いに他方を内部に含めることができる（同じ開基を生成する）ことから直感的に理解できます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>積位相</strong>は、各成分への射影を連続にする最も粗い（開集合の少ない）位相である。</li>
                    <li>積空間への写像の連続性は、成分ごとに判定できる（<strong>普遍性</strong>）。</li>
                    <li>開基は成分ごとの開集合の直積（長方形のような形）で与えられる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
