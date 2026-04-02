import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Cosets() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                部分群を用いて群の元を「グループ分け」する理論を学びます。
                この分割によって得られる各々の集合を剰余類と呼び、群の構造を解析する上で極めて重要な役割を果たします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">左右剰余類の定義と分割</h2>

            <p className="leading-relaxed">
                まず、部分群の元をある一つの元で「平行移動」させることで得られる集合を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (左剰余類・右剰余類)">
                <p>
                    群 <InlineMath math="G" /> とその部分群 <InlineMath math="H \leq G" /> に対し、元 <InlineMath math="a \in G" /> によって定まる部分集合
                    <BlockMath math="aH = \{ ah \mid h \in H \}" />
                    を <InlineMath math="H" /> を法とする <InlineMath math="a" /> の<b>左剰余類 (Left coset)</b>という。同様に、
                    <BlockMath math="Ha = \{ ha \mid h \in H \}" />
                    を<b>右剰余類 (Right coset)</b>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これらの剰余類は、群全体を重なりなく、かつ漏れなく分割する性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-1 (剰余類の分割性)">
                <p>
                    左剰余類全体 <InlineMath math="\{aH \mid a \in G\}" /> は <InlineMath math="G" /> の分割をなす。
                    すなわち、任意の <InlineMath math="a, b \in G" /> について <InlineMath math="aH = bH" /> か <InlineMath math="aH \cap bH = \emptyset" /> のいずれか一方が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="aH \cap bH \neq \emptyset" /> と仮定し、共通の元 <InlineMath math="c" /> をとる。このとき <InlineMath math="aH = bH" /> となることを示す：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        ある <InlineMath math="h_1, h_2 \in H" /> を用いて <InlineMath math="c = ah_1 = bh_2" /> と書けるため、
                        <InlineMath math="a = bh_2 h_1^{-1}" /> である。
                    </li>
                    <li>
                        任意の <InlineMath math="ah \in aH" /> に対し、
                        <BlockMath math="ah = (bh_2 h_1^{-1})h = b(h_2 h_1^{-1} h)" />
                        であり、<InlineMath math="h_2 h_1^{-1} h \in H" /> より <InlineMath math="ah \in bH" />、すなわち <InlineMath math="aH \subset bH" /> が得られる。
                    </li>
                    <li>
                        全く同様にして <InlineMath math="bH \subset aH" /> も示されるため、<InlineMath math="aH = bH" /> である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体例として、整数の加法群における分割を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-1 (nℤ による ℤ の分割)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>n = 2 の場合</b>：<InlineMath math="2\mathbb{Z}" />（偶数）による分割は、<InlineMath math="0 + 2\mathbb{Z}" />（偶数全体）と <InlineMath math="1 + 2\mathbb{Z}" />（奇数全体）の 2 つのクラスになる。
                    </li>
                    <li>
                        <b>n = 3 の場合</b>：<InlineMath math="3\mathbb{Z}" /> による分割は、<InlineMath math="0 + 3\mathbb{Z}, 1 + 3\mathbb{Z}, 2 + 3\mathbb{Z}" /> の 3 つのクラスになる。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同値関係としての解釈と左右の違い</h2>

            <p className="leading-relaxed">
                剰余類による分割は、数学的には「同値関係による類別」として理解できます。
            </p>

            <ContentBox type="proposition" title="Proposition 3.1-2 (同値関係との対応)">
                <p>
                    <InlineMath math="x, y \in G" /> に対する関係 <InlineMath math="x \sim_H y \iff x^{-1}y \in H" /> は <InlineMath math="G" /> 上の同値関係であり、
                    元 <InlineMath math="b" /> を含む同値類は左剰余類 <InlineMath math="bH" /> に一致する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    まず、関係 <InlineMath math="\sim_H" /> が同値関係の公理を満たすことを確認する：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4">
                    <li><b>反射律</b>：<InlineMath math="x^{-1}x = e \in H" /> より <InlineMath math="x \sim_H x" />。</li>
                    <li><b>対称律</b>：<InlineMath math="x \sim_H y \implies x^{-1}y \in H \implies (x^{-1}y)^{-1} = y^{-1}x \in H \implies y \sim_H x" />。</li>
                    <li><b>推移律</b>：<InlineMath math="x^{-1}y \in H, y^{-1}z \in H \implies (x^{-1}y)(y^{-1}z) = x^{-1}z \in H \implies x \sim_H z" />。</li>
                </ul>
                <p className="mt-4">
                    次に、同値類 <InlineMath math="C(b) = \{ y \in G \mid b \sim_H y \}" /> が <InlineMath math="bH" /> に一致することを示す：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>元 <InlineMath math="y" /> が同値類に属することは <InlineMath math="b^{-1}y = h \in H" /> と同値である。</li>
                    <li>これは <InlineMath math="y = bh" /> すなわち <InlineMath math="y \in bH" /> に他ならない。</li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                最後に、左剰余類と右剰余類が必ずしも一致しない例を確認します。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (S_3 における左右の違い)">
                <p>
                    <InlineMath math="S_3" /> と部分群 <InlineMath math="H = \{e, (12)\}" /> を考える。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>左剰余類：<InlineMath math="(13)H = \{ (13)e, (13)(12) \} = \{ (13), (132) \}" /></li>
                    <li>右剰余類：<InlineMath math="H(13) = \{ e(13), (12)(13) \} = \{ (13), (123) \}" /></li>
                </ul>
                <p className="mt-2 leading-relaxed">
                    このように、一般には <InlineMath math="(13)H \neq H(13)" /> となり、左右で群の分割の仕方が異なる。
                    （※後の Chapter 4 で学ぶ「正規部分群」では、これらが常に一致する。）
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>部分群 <InlineMath math="H" /> による群 <InlineMath math="G" /> の平行移動的な集合を剰余類という。</li>
                    <li>左（または右）剰余類全体は、群 <InlineMath math="G" /> を重なりなく分割する（直和分割）。</li>
                    <li>この分割は、<InlineMath math="x^{-1}y \in H" /> という同値関係による類別に対応している。</li>
                    <li>非可換群では、左剰余類と右剰余類が一致するとは限らない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
