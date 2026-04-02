import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SecondIsomorphismTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第二同型定理は、部分群と正規部分群が交わったり組み合わさったりした際の商群の構造に関する定理です。
                この定理は、一方の商群をもう一方の商群へと「翻訳」するための架け橋となります。
                その格子図の形状から「ダイヤモンド同型定理」とも呼ばれます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二同型定理</h2>

            <p className="leading-relaxed mb-4">
                定理の正確な主張は以下の通りです。部分群 <InlineMath math="H" /> と正規部分群 <InlineMath math="N" /> が組み合わさったときに現れる商群の同型関係を記述します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (第二同型定理)">
                <p>
                    <InlineMath math="G" /> を群とし、<InlineMath math="H \leq G" /> を部分群、<InlineMath math="N \trianglelefteq G" /> を正規部分群とする。このとき、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="HN = \{hn \mid h \in H, n \in N\}" /> は <InlineMath math="G" /> の部分群である。
                    </li>
                    <li>
                        <InlineMath math="H \cap N \trianglelefteq H" /> かつ <InlineMath math="N \trianglelefteq HN" /> である。
                    </li>
                    <li>
                        次の同型が成り立つ：
                        <BlockMath math="H/(H \cap N) \cong HN/N" />
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed my-4">
                ここで、この定理がなぜ「ダイヤモンド」と呼ばれるのか、その幾何学的なイメージを確認しておきましょう。
            </p>

            <ContentBox type="remark" title="ダイヤモンド同型定理という名前の由来">
                <p>
                    この定理は、関係する4つの群 <InlineMath math="HN" />, <InlineMath math="H" />, <InlineMath math="N" />, <InlineMath math="H \cap N" /> を部分群の包含関係に沿って配置すると、
                    ダイヤモンド（菱形）のような格子図が描けることに由来しています。
                    この図において、向かい合う二辺の「長さ」（商群の階数や構造）が等しいという主張が、まさにこの定理の同型関係に対応しています。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                この定理の証明の核心は、第一同型定理 (§6.1) をいかに適切に適用するかという点にあります。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    主に (3) の同型について、第一同型定理を用いて証明する。
                </p>
                <ul className="list-decimal list-inside space-y-6 mt-6">
                    <li>
                        <InlineMath math="\phi: H \to HN/N" /> を <InlineMath math="\phi(h) = hN" /> と定義する。
                        商群 <InlineMath math="G/N" /> への自然な全射準同型を <InlineMath math="H" /> に制限したものとみなせるため、<InlineMath math="\phi" /> は準同型である。
                    </li>
                    <li>
                        <b>全射性</b>：<br />
                        <InlineMath math="HN/N" /> の任意の元は <InlineMath math="(hn)N" /> （<InlineMath math="h \in H, n \in N" />）と書ける。
                        <InlineMath math="n \in N" /> より <InlineMath math="(hn)N = h(nN) = hN" /> となる。
                        よって <InlineMath math="\phi(h) = hN" /> より、<InlineMath math="\phi" /> は全射である。
                    </li>
                    <li>
                        <b>核（Kernel）</b>：<br />
                        <InlineMath math="\ker\phi = \{h \in H \mid \phi(h) = eN = N\}" /> である。
                        条件 <InlineMath math="hN = N" /> は <InlineMath math="h \in N" /> と同値である。
                        よって、核は <InlineMath math="H" /> かつ <InlineMath math="N" /> に属する元の集合 <InlineMath math="H \cap N" /> である。
                    </li>
                    <li>
                        <b>第一同型定理の適用</b>：<br />
                        <InlineMath math="\phi" /> は全射準同型で、核が <InlineMath math="H \cap N" /> であるため、
                        <BlockMath math="H/\ker\phi \cong \mathrm{Im}\,\phi \implies H/(H \cap N) \cong HN/N" />
                        が得られる。また、準同型の核は常に正規部分群であるため、<InlineMath math="H \cap N \trianglelefteq H" /> も同時に示された。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                それでは、具体例を用いてこの定理がどのように等式（同型）として現れるかを見てみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p className="leading-relaxed mb-4">
                非可換群である対称群と、可換群である整数加法群の二つのパターンを紹介します。
            </p>

            <ContentBox type="example" title="Example 6.2-1 (対称群 S_4)">
                <p>
                    <InlineMath math="G = S_4" />、<InlineMath math="N = A_4 \trianglelefteq S_4" />、<InlineMath math="H = \langle (12) \rangle = \{e, (12)\}" /> とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="H \cap N = \{e\}" /> （<InlineMath math="(12)" /> は奇置換なので交代群に入らない）。
                    </li>
                    <li>
                        <InlineMath math="HN = S_4" /> （<InlineMath math="A_4" /> に奇置換を1つ加えれば <InlineMath math="S_4" /> 全体を生成する）。
                    </li>
                    <li>
                        第二同型定理より：
                        <BlockMath math="H/\{e\} \cong S_4/A_4 \cong \mathbb{Z}/2\mathbb{Z}" />
                        となり、左辺が位数2の群であることと一致する。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                次に、巡回群の一般的な性質を用いた例を示します。加法群における <InlineMath math="HN" /> は <InlineMath math="H+N" /> と表記されます。
            </p>

            <ContentBox type="example" title="Example 6.2-2 (整数加法群)">
                <p>
                    <InlineMath math="G = \mathbb{Z}" />、<InlineMath math="N = 6\mathbb{Z}" />、<InlineMath math="H = 4\mathbb{Z}" /> とする。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="H \cap N = \mathrm{lcm}(4, 6)\mathbb{Z} = 12\mathbb{Z}" /> 。
                    </li>
                    <li>
                        <InlineMath math="HN = H + N = \gcd(4, 6)\mathbb{Z} = 2\mathbb{Z}" /> 。
                    </li>
                    <li>
                        第二同型定理より：
                        <BlockMath math="4\mathbb{Z}/12\mathbb{Z} \cong 2\mathbb{Z}/6\mathbb{Z}" />
                        両辺ともに位数3の巡回群（<InlineMath math="\mathbb{Z}/3\mathbb{Z}" />）となり、格子構造の整合性が確認できる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-6">
                第二同型定理は、異なる群の構造を共通の部分構造（交わり）と合成構造（合成積）を通じて結びつける視点を与えてくれます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第二同型定理は、正規部分群 <InlineMath math="N" /> と部分群 <InlineMath math="H" /> の関係を記述する。</li>
                    <li>特に、<InlineMath math="H \cap N" /> が <InlineMath math="H" /> の正規部分群であることを保証してくれる。</li>
                    <li>格子図を描くと、平行な2辺にあたる商群が同型になるという幾何学的な理解が可能である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
