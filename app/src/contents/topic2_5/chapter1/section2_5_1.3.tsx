import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function BaseOfTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間において、すべての開集合を列挙することは困難です。
                しかし、多くの重要な位相は、「基本的な開集合」の寄せ集め（和集合）として表現できます。
                この「建材」となる集合族を<strong>開基 (Base / Basis)</strong> と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開基の定義</h2>

            <p>
                「任意の内容も、基本パーツの組み合わせで書ける」という考え方は、ベクトル空間における「基底」と似ています。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (開基)">
                <p>
                    位相空間 <InlineMath math="(X, \mathcal{O})" /> の部分集合族 <InlineMath math="\mathcal{B} \subset \mathcal{O}" /> が <InlineMath math="\mathcal{O}" /> の<strong>開基 (Base / Basis)</strong> であるとは、
                    任意の開集合 <InlineMath math="U \in \mathcal{O}" /> が <InlineMath math="\mathcal{B}" /> の要素の和集合として表せることをいう。
                </p>
                <BlockMath math="\forall U \in \mathcal{O}, \exists \{B_\alpha\}_{\alpha \in \Lambda} \subset \mathcal{B} \text{ s.t. } U = \bigcup_{\alpha \in \Lambda} B_\alpha" />
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (代表的な開基)">
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>実数直線の開基</strong>： 実数 <InlineMath math="\mathbb{R}" /> の通常の位相において、すべての開区間の族 <InlineMath math="\mathcal{B} = \{ (a, b) \mid a < b \}" /> は開基となる。</li>
                    <li><strong>距離空間の開基</strong>： 任意の距離空間において、すべての開球の族 <InlineMath math="\mathcal{B} = \{ B(x; \varepsilon) \mid x \in X, \varepsilon > 0 \}" /> はその距離位相の開基となる。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開基の条件</h2>

            <p>
                逆に、どのような集合族を与えれば、それがある位相の開基となってくれるでしょうか？
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (開基となるための必要十分条件)">
                <p>
                    集合 <InlineMath math="X" /> の部分集合族 <InlineMath math="\mathcal{B}" /> が、ある位相の開基となるための必要十分条件は以下の 2 つである：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="X = \bigcup_{B \in \mathcal{B}} B" /> （全体を覆える）</li>
                    <li><InlineMath math="B_1, B_2 \in \mathcal{B}" /> かつ <InlineMath math="x \in B_1 \cap B_2" /> ならば、<InlineMath math="x \in B_3 \subset B_1 \cap B_2" /> を満たす <InlineMath math="B_3 \in \mathcal{B}" /> が存在する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 必要性：</strong>
                    <br />
                    <InlineMath math="\mathcal{B}" /> が位相 <InlineMath math="\mathcal{O}" /> の開基であるとする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <InlineMath math="X \in \mathcal{O}" /> であるから、開基の定義より <InlineMath math="X = \bigcup_{B \in \mathcal{B}'} B" /> となる <InlineMath math="\mathcal{B}' \subset \mathcal{B}" /> が存在する。
                        したがって、<InlineMath math="X = \bigcup_{B \in \mathcal{B}} B" /> が成り立つ（条件 1）。
                    </li>
                    <li>
                        <InlineMath math="B_1, B_2 \in \mathcal{B}" /> とすると、<InlineMath math="\mathcal{B} \subset \mathcal{O}" /> より <InlineMath math="B_1, B_2 \in \mathcal{O}" /> である。
                        位相の公理より <InlineMath math="B_1 \cap B_2 \in \mathcal{O}" /> であり、<InlineMath math="\mathcal{B}" /> が開基であることから、
                        <InlineMath math="B_1 \cap B_2" /> は <InlineMath math="\mathcal{B}" /> の元の和集合で表せる。
                        よって、任意の <InlineMath math="x \in B_1 \cap B_2" /> に対し、<InlineMath math="x \in B_3 \subset B_1 \cap B_2" /> を満たす <InlineMath math="B_3 \in \mathcal{B}" /> が存在する（条件 2）。
                    </li>
                </ul>
                <p className="mt-4">
                    <strong>2. 十分性：</strong>
                    <br />
                    条件 1, 2 を満たす <InlineMath math="\mathcal{B}" /> に対し、<InlineMath math="\mathcal{O} = \{ \bigcup \mathcal{B}' \mid \mathcal{B}' \subset \mathcal{B} \}" /> とおく。
                    この <InlineMath math="\mathcal{O}" /> が位相の公理を満たすことを示せば、<InlineMath math="\mathcal{B}" /> は定義によりその開基となる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        空な和集合として <InlineMath math="\emptyset \in \mathcal{O}" />。条件 1 より <InlineMath math="X \in \mathcal{O}" />。
                    </li>
                    <li>
                        <InlineMath math="\mathcal{O}" /> の元の任意の和集合は、再び <InlineMath math="\mathcal{B}" /> の元の和集合となるため、<InlineMath math="\mathcal{O}" /> に属する。
                    </li>
                    <li>
                        <InlineMath math="U, V \in \mathcal{O}" /> とし、<InlineMath math="x \in U \cap V" /> とする。
                        定義より <InlineMath math="x \in B_U \subset U" /> および <InlineMath math="x \in B_V \subset V" /> となる <InlineMath math="B_U, B_V \in \mathcal{B}" /> が存在する。
                        条件 2 より、<InlineMath math="x \in B_x \subset B_U \cap B_V \subset U \cap V" /> を満たす <InlineMath math="B_x \in \mathcal{B}" /> が取れる。
                        ゆえに <InlineMath math="U \cap V = \bigcup_{x \in U \cap V} B_x" /> となり、<InlineMath math="U \cap V \in \mathcal{O}" /> が示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">開基から生成される位相</h2>

            <p>
                上の定理の条件を満たす集合族 <InlineMath math="\mathcal{B}" /> が与えられたとき、それによって一意な位相が定まります。
            </p>

            <ContentBox type="proposition" title="Proposition 1.3-1 (開基による位相の生成)">
                <p>
                    Theorem 1.3-1 の条件を満たす <InlineMath math="\mathcal{B}" /> に対して、
                    <BlockMath math="\mathcal{O} = \{ \bigcup \mathcal{B}' \mid \mathcal{B}' \subset \mathcal{B} \}" />
                    は <InlineMath math="X" /> 上の位相となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 1.3-1 の十分性の証明において示した通りである。
                    <InlineMath math="\mathcal{B}" /> の条件 1 は <InlineMath math="X \in \mathcal{O}" /> を保証し、
                    条件 2 は有限交叉 <InlineMath math="U \cap V" /> が再び <InlineMath math="\mathcal{O}" /> に属することを保証する。
                    任意の和集合が <InlineMath math="\mathcal{O}" /> に属することは構成から明らかである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <ContentBox type="example" title="Example 1.3-1 (ユークリッド空間の開基)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> において、すべての開球の集合
                    <InlineMath math="\mathcal{B} = \{ B(x, \varepsilon) \mid x \in \mathbb{R}^n, \varepsilon > 0 \}" />
                    は、通常の位相の開基をなす。
                </p>
                <p className="mt-4">
                    さらに、中心 <InlineMath math="x" /> を有理点（座標がすべて有理数）に、半径 <InlineMath math="\varepsilon" /> を有理数に制限した
                    <strong>可算な</strong>集合族も、同じ位相の開基となる（第二可算公理への伏線）。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>開基</strong>とは、その和集合によってすべての開集合を表せるような集合族である。</li>
                    <li>集合族が開基となるには、全体を覆えることと、共通部分の中に別の開基元が含まれることが必要十分。</li>
                    <li><strong>生成される位相</strong>は、開基のあらゆる和集合の集まりとして一意に定まる。</li>
                    <li>距離空間における開球全体は、その代表的な例である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
