import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionDoubleDual() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                このセクションでは、有限次元ベクトル空間と二重双対空間の自然な同型について復習します。双対空間の双対空間を考えることで、元の空間と全く同じ構造が自然に現れることを確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">評価写像と自然な同型</h2>

            <p className="leading-relaxed">
                ベクトル空間 <InlineMath math="V" /> の元 <InlineMath math="v" /> と、双対空間 <InlineMath math="V^*" /> の元 <InlineMath math="\phi" /> があるとき、<InlineMath math="\phi(v)" /> という値が計算できます。ここで視点を変えて、<InlineMath math="v" /> を固定し、<InlineMath math="\phi" /> を変数とみなすと、これは <InlineMath math="V^*" /> からスカラーへの写像となります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 1.2-1 (評価写像)"
            >
                <p>
                    各 <InlineMath math="v \in V" /> に対して<strong>評価写像</strong> <InlineMath math="\mathrm{ev}_v : V^* \to \mathbb{k}" /> を
                    <BlockMath math="\mathrm{ev}_v(\phi) = \phi(v)" />
                    で定める。これにより <InlineMath math="\mathrm{ev} : V \to V^{**}, \ v \mapsto \mathrm{ev}_v" /> という線形写像が得られる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この評価写像は、有限次元ベクトル空間においては同型写像となります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.2-1 (自然な同型)"
            >
                <p>
                    有限次元ベクトル空間 <InlineMath math="V" /> に対して、評価写像 <InlineMath math="\mathrm{ev} : V \to V^{**}" /> は線形同型である。すなわち、
                    <BlockMath math="V \cong V^{**}" />
                    が成り立つ（これは「自然な」同型であり、基底の選択によらない）。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>線形性：</strong><br />
                    任意の <InlineMath math="\phi \in V^*" /> について、
                    <BlockMath math="\begin{aligned} \mathrm{ev}_{v+w}(\phi) &= \phi(v+w) = \phi(v)+\phi(w) \\ &= \mathrm{ev}_v(\phi) + \mathrm{ev}_w(\phi) = (\mathrm{ev}_v + \mathrm{ev}_w)(\phi) \end{aligned}" />
                    であり、スカラー倍についても同様である。
                </p>
                <p>
                    <strong>単射性：</strong><br />
                    <InlineMath math="\mathrm{ev}_v = 0" /> ならば、すべての <InlineMath math="\phi \in V^*" /> に対して <InlineMath math="\phi(v)=0" /> となる。もし <InlineMath math="v \neq 0" /> ならば、<InlineMath math="v" /> を含む基底をとることで <InlineMath math="\phi(v) \neq 0" /> となる <InlineMath math="\phi" /> を構成できるため矛盾する。したがって <InlineMath math="v = 0" /> である。
                </p>
                <p>
                    <strong>全射性：</strong><br />
                    <InlineMath math="V" /> が有限次元であるため、<InlineMath math="\dim V^{**} = \dim V^* = \dim V" /> となる。有限次元ベクトル空間の間の単射な線形写像で次元が等しいものは全射でもあるため、同型となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的な空間における評価写像の働きを確認します。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-1 (二重双対空間での成分表示)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、<InlineMath math="v = (3, -1) \in \mathbb{R}^2" /> に対する評価写像 <InlineMath math="\mathrm{ev}_v \in (\mathbb{R}^2)^{**}" /> を考える。
                </p>
                <p>
                    双対空間 <InlineMath math="(\mathbb{R}^2)^*" /> の標準双対基底を <InlineMath math="\{e^1, e^2\}" /> とすると、
                    <BlockMath math="\mathrm{ev}_v(e^1) = e^1(v) = 3, \quad \mathrm{ev}_v(e^2) = e^2(v) = -1" />
                    となる。二重双対空間における基底 <InlineMath math="\{e^{1*}, e^{2*}\}" /> に関する <InlineMath math="\mathrm{ev}_v" /> の成分表示は <InlineMath math="3 e^{1*} - 1 e^{2*}" /> となり、元のベクトル <InlineMath math="(3, -1)" /> の成分と自然に一致する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">「自然性」の意味と基底選択</h2>

            <p className="leading-relaxed">
                同型 <InlineMath math="V \cong V^{**}" /> は、基底を一切選ばずに構成できる点に大きな特徴があります。
            </p>

            <ContentBox
                type="remark"
                title="基底によらない同型"
            >
                <p>
                    <InlineMath math="V \cong V^*" /> は一般には自然ではありません（内積などの構造なしでは基底の選択に依存します）。一方で、<InlineMath math="V \cong V^{**}" /> は基底を選択することなく定義でき、基底変換に対して可換な図式を満たします。この「自然性」の概念は、圏論（3-15）で厳密に定式化されます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ただし、この同型が成り立つのはあくまで有限次元の場合に限られます。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-2 (無限次元空間での反例)"
            >
                <p>
                    <strong>無限次元では同型が成立しない：</strong>
                </p>
                <p>
                    <InlineMath math="V = \ell^2" /> （二乗可積分列空間）のような無限次元空間の代数的な双対を考えるとき、<InlineMath math="V^{**} \neq V" /> となる（一般に <InlineMath math="V^{**}" /> の方が真に大きくなる）。<InlineMath math="V \cong V^{**}" /> は、有限次元に本質的な性質であることを概念的に確認できる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>各 <InlineMath math="v \in V" /> に対して、線形形式を評価する写像 <InlineMath math="\mathrm{ev}_v(\phi) = \phi(v)" /> を定義できる。</li>
                    <li>有限次元ベクトル空間においては、<InlineMath math="\mathrm{ev} : V \to V^{**}" /> は基底の選択に依存しない自然な同型を与える。</li>
                    <li>無限次元ベクトル空間では、一般に <InlineMath math="V" /> と <InlineMath math="V^{**}" /> は同型にならない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}