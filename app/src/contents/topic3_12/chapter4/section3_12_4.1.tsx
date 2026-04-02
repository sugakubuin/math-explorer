import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionFreeProductOfGroups() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群の計算において最も強力な道具となるのが「ファン・カンペンの定理」です。この定理を理解するためには、まず群論における「自由積（free product）」および「融合積（amalgamated free product）」という概念を準備する必要があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">群の自由積</h2>

            <p className="leading-relaxed">
                2つの群から新しい群を作る方法として、直積 <InlineMath math="G \times H" /> がよく知られていますが、位相幾何学（特に基本群の貼り合わせ）においてより自然に現れるのは「自由積」と呼ばれる構成です。直積では <InlineMath math="G" /> の元と <InlineMath math="H" /> の元が常に可換（<InlineMath math="gh = hg" />）であると仮定しますが、自由積ではそのような関係を一切課しません。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 4.1-1 (自由積 <InlineMath math="G * H" />)</span>}
            >
                <p>
                    2つの群 <InlineMath math="G" /> と <InlineMath math="H" /> が与えられたとき、それらの<strong>自由積（free product）</strong> <InlineMath math="G * H" /> とは、<InlineMath math="G" /> の元と <InlineMath math="H" /> の元を交互に並べた有限個の文字列（語, word）の全体からなる群である。
                </p>
                <p>
                    すなわち、<InlineMath math="G * H" /> の元は次のような形をした「既約な語」として一意に表される。
                    <BlockMath math="g_1 h_1 g_2 h_2 \cdots g_n h_n" />
                    ここで、各 <InlineMath math="g_i \in G \setminus \{e_G\}" />、<InlineMath math="h_i \in H \setminus \{e_H\}" /> であり、列の最初と最後は <InlineMath math="G" /> の元でも <InlineMath math="H" /> の元でもよい。
                </p>
                <p>
                    群の演算（積）は、2つの語を単に連結し、隣り合う文字が同じ群に属していればその群の演算でまとめ、単位元が現れればそれを消去する（約分する）ことによって定義される。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.1-1 (<InlineMath math="\mathbb{Z} * \mathbb{Z}" /> と自由群)</span>}
            >
                <p>
                    <InlineMath math="G = \mathbb{Z}" />（生成元を <InlineMath math="a" /> とする）と <InlineMath math="H = \mathbb{Z}" />（生成元を <InlineMath math="b" /> とする）の自由積を考える。
                </p>
                <p>
                    この自由積 <InlineMath math="\mathbb{Z} * \mathbb{Z}" /> の元は、<InlineMath math="a" /> と <InlineMath math="b" /> およびそれらの逆元を並べた文字列である。例えば、
                    <BlockMath math="a^2 b^{-1} a b^3" />
                    などが一つの元である。ここでは <InlineMath math="ab \neq ba" /> であり、これ以上短くすることはできない。このようにして作られる群は、2つの生成元を持つ<strong>自由群（free group）</strong> <InlineMath math="F_2" /> と呼ばれる。
                </p>
                <p>
                    また、有限群同士の自由積、例えば <InlineMath math="\mathbb{Z}/2\mathbb{Z} * \mathbb{Z}/3\mathbb{Z}" /> も無限群になる。これは、生成元 <InlineMath math="a" />（位数 2）と <InlineMath math="b" />（位数 3）を交互に並べた列 <InlineMath math="ababab\cdots" /> が決して単位元に潰れないためである。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="自由積の普遍性"
            >
                <p>
                    自由積 <InlineMath math="G * H" /> は、圏論の言葉で言えば群の圏における「余積（coproduct）」である。
                </p>
                <p>
                    すなわち、任意の群 <InlineMath math="K" /> と、任意の群準同型 <InlineMath math="f : G \to K" />、<InlineMath math="g : H \to K" /> が与えられたとき、それらを拡張するような群準同型
                    <BlockMath math="\Phi : G * H \to K" />
                    がただ一つ存在する。具体的には、<InlineMath math="\Phi(g_1 h_1 g_2 \cdots) = f(g_1) g(h_1) f(g_2) \cdots" /> と定めればよい。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">群の融合積（アマルガム積）</h2>

            <p className="leading-relaxed">
                位相空間を貼り合わせるとき、常に「共通部分」が存在します。この共通部分に対応する群の構造を考慮した自由積の一般化が「融合積」です。
            </p>

            <ContentBox
                type="definition"
                title={<span>Definition 4.1-2 (融合積 <InlineMath math="G *_K H" />)</span>}
            >
                <p>
                    3つの群 <InlineMath math="G, H, K" /> と、単射準同型（包含写像） <InlineMath math="\phi : K \to G" /> および <InlineMath math="\psi : K \to H" /> が与えられたとする。
                </p>
                <p>
                    このとき、<InlineMath math="K" /> 上の<strong>融合積（amalgamated free product）</strong> <InlineMath math="G *_K H" /> を次のように定義する。
                    <BlockMath math="G *_K H = (G * H) / N" />
                    ここで <InlineMath math="N" /> は、すべての <InlineMath math="k \in K" /> に対する関係式 <InlineMath math="\phi(k) \psi(k)^{-1}" /> で生成される <InlineMath math="G * H" /> の最小の正規部分群である。
                </p>
                <p>
                    直感的には、自由積 <InlineMath math="G * H" /> の中で、共通部分 <InlineMath math="K" /> から来た元について「<InlineMath math="G" /> 側の <InlineMath math="\phi(k)" />」と「<InlineMath math="H" /> 側の <InlineMath math="\psi(k)" />」を同じものとして同一視（<InlineMath math="\phi(k) = \psi(k)" />）して得られる群である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.1-2 (融合積の具体例)"
            >
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>自明な共通部分：</strong> <InlineMath math="K = \{e\}" />（自明群）のとき、同一視される元は単位元のみであるため、融合積は通常の自由積と一致する（<InlineMath math="G *_{\{e\}} H = G * H" />）。
                    </li>
                    <li>
                        <strong>結び目群への応用（予告）：</strong> <InlineMath math="G = \mathbb{Z}" />（生成元 <InlineMath math="a" />）、<InlineMath math="H = \mathbb{Z}" />（生成元 <InlineMath math="b" />）、<InlineMath math="K = \mathbb{Z}" />（生成元 <InlineMath math="k" />）とする。<br />
                        包含写像を <InlineMath math="\phi(k) = a^2" />、<InlineMath math="\psi(k) = b^3" /> と定める。<br />
                        このときの融合積は、生成元 <InlineMath math="a, b" /> と関係式 <InlineMath math="a^2 = b^3" />（すなわち <InlineMath math="\phi(k) = \psi(k)" />）を持つ群となり、表示で書けば
                        <BlockMath math="\langle a, b \mid a^2 = b^3 \rangle" />
                        となる。これは後述する「トレフォイル結び目」の補空間の基本群として実際に現れる重要な群である。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>群の自由積 <InlineMath math="G * H" /> は、<InlineMath math="G" /> の元と <InlineMath math="H" /> の元からなる「語」の全体であり、群同士の間に一切の可換関係を仮定しない。</li>
                    <li>共通部分の群 <InlineMath math="K" /> がある場合、自由積の中で <InlineMath math="K" /> の像を同一視したものを融合積（アマルガム積） <InlineMath math="G *_K H" /> と呼ぶ。</li>
                    <li>空間の貼り合わせにおいては、この融合積の代数構造が幾何学的な「ループの貼り合わせ」を正確に反映する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
