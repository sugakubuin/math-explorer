import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SubbaseOfTopology() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「開基」はそれだけで位相を生成できる便利な道具でしたが、さらに条件を緩めた<strong>準開基 (Subbase)</strong> という概念があります。
                準開基は、和集合だけでなく「有限個の共通部分」も使って位相を生成するための最小限の部品集めです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準開基の定義</h2>

            <p>
                開基（Theorem 1.3-1）とは異なり、準開基には「共通部分がまた準開基の元に含まれる」といった厳しい条件は一切ありません。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (準開基)">
                <p>
                    集合 <InlineMath math="X" /> の部分集合族 <InlineMath math="\mathcal{S}" /> が、位相空間 <InlineMath math="(X, \mathcal{O})" /> の<strong>準開基</strong>であるとは、
                    <InlineMath math="\mathcal{S}" /> の元の<strong>有限個の共通部分</strong>の全体（これを <InlineMath math="\mathcal{B}" /> とする）が、位相 <InlineMath math="\mathcal{O}" /> の開基となることをいう。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (準開基の具体例)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、
                    <InlineMath math="\mathcal{S} = \{ (-\infty, a) \mid a \in \mathbb{R} \} \cup \{ (b, \infty) \mid b \in \mathbb{R} \}" />
                    を考えると、これは通常の位相の準開基である。
                </p>
                <p className="mt-2">
                    なぜなら、有限交叉をとることで 
                    <InlineMath math="(-\infty, a) \cap (b, \infty) = (b, a) \quad (\text{if } b < a)" />
                    という開区間（開基の元）がすべて作れるからである。
                </p>
            </ContentBox>

            <p className="mt-4">
                一般に、任意の集合族 <InlineMath math="\mathcal{S}" /> が与えられたとき、それを準開基とする位相が一意に定まります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">準開基から位相を生成する</h2>

            <p>
                準開基から位相を作るには、 2 つのステップを踏みます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (準開基による位相の生成)">
                <p>
                    集合 <InlineMath math="X" /> の任意の集合族 <InlineMath math="\mathcal{S}" /> に対して、
                    <InlineMath math="\mathcal{S}" /> を含む最小の位相 <InlineMath math="\mathcal{O}" /> が存在する。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li>まず、<InlineMath math="\mathcal{S}" /> の有限個の元の共通部分をすべて集めて集合族 <InlineMath math="\mathcal{B}" /> を作る。（これが開基になる）</li>
                    <li>次に、<InlineMath math="\mathcal{B}" /> の任意の和集合をすべて集めて集合族 <InlineMath math="\mathcal{O}" /> を作る。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. <InlineMath math="\mathcal{B}" /> が開基の条件を満たすことの確認：</strong>
                    <br />
                    <InlineMath math="\mathcal{B} = \{ S_1 \cap \dots \cap S_n \mid S_i \in \mathcal{S}, n \geq 0 \}" /> とする（<InlineMath math="n=0" /> のときは <InlineMath math="X" />）。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        定義より <InlineMath math="X \in \mathcal{B}" /> であるから、<InlineMath math="\bigcup_{B \in \mathcal{B}} B = X" /> となり、条件 1 を満たす。
                    </li>
                    <li>
                        <InlineMath math="B_1, B_2 \in \mathcal{B}" /> とすると、<InlineMath math="B_1, B_2" /> はそれぞれ <InlineMath math="\mathcal{S}" /> の有限個の元の共通部分である。
                        したがって、その共通部分 <InlineMath math="B_1 \cap B_2" /> もまた <InlineMath math="\mathcal{S}" /> の有限個の元の共通部分であり、<InlineMath math="B_1 \cap B_2 \in \mathcal{B}" /> となる。
                        これは Theorem 1.3-1 の条件 2 を（<InlineMath math="B_3 = B_1 \cap B_2" /> として）より強く満たしている。
                    </li>
                </ul>
                <p className="mt-4">
                    <strong>2. 最小性の確認：</strong>
                    <br />
                    <InlineMath math="\mathcal{S} \subset \mathcal{O}" /> を満たす任意の位相 <InlineMath math="\mathcal{O}" /> を考える。
                    位相の公理より、<InlineMath math="\mathcal{O}" /> は有限交叉と任意の和集合について閉じている。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>
                        <InlineMath math="\mathcal{B}" /> の各元は <InlineMath math="\mathcal{S}" /> の有限交叉であるから、<InlineMath math="\mathcal{B} \subset \mathcal{O}" /> である。
                    </li>
                    <li>
                        位相 <InlineMath math="\mathcal{O}'" /> の各元は <InlineMath math="\mathcal{B}" /> の元の和集合であるから、<InlineMath math="\mathcal{O}' \subset \mathcal{O}" /> となる。
                    </li>
                </ul>
                <p className="mt-2">
                    ゆえに、この構成による <InlineMath math="\mathcal{O}'" /> は <InlineMath math="\mathcal{S}" /> を含む最小の位相である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体例</h2>

            <p>
                準開基が最も力を発揮するのは、新しい空間を構成するときです。
            </p>

            <ContentBox type="example" title="Example 1.4-1 (積位相への応用)">
                <p>
                    2 つの位相空間 <InlineMath math="X, Y" /> の直積集合 <InlineMath math="X \times Y" /> において、
                    <BlockMath math="\mathcal{S} = \{ U \times Y \mid U \in \mathcal{O}_X \} \cup \{ X \times V \mid V \in \mathcal{O}_Y \}" />
                    を準開基として生成される位相を<strong>積位相</strong>という。
                </p>
                <p className="mt-4">
                    この準開基の有限交叉をとると、開基として使い慣れた「長方形」の形 <InlineMath math="U \times V" /> が現れます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>準開基</strong>とは、その有限個の共通部分が開基となるような集合族である。</li>
                    <li>任意の集合族を準開基として、最小の位相を常に生成できる。</li>
                    <li>位相の生成プロセス：<strong>(準開基) <InlineMath math="\xrightarrow{\text{有限交叉}}" /> (開基) <InlineMath math="\xrightarrow{\text{任意合併}}" /> (位相)</strong>。</li>
                    <li>直積空間などの複雑な空間の位相を簡潔に定義するために重宝される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
