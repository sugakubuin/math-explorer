import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuousMapsOnCompactSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                コンパクト空間上の連続写像は、通常の位相空間では成り立たない極めて強力な性質をいくつか持っています。
                本節では、解析学の基礎となる最大値定理と、トポロジーにおいて同相写像を判定する際に非常に便利な「コンパクト同相定理」を扱います。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">最大値定理</h2>

            <p>
                「有界閉区間上の連続関数は最大値・最小値を持つ」という微積分学の定理は、位相空間の言葉を用いると、コンパクト性によって次のように一般化されます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (最大値定理 / Extreme Value Theorem)">
                <p>
                    <InlineMath math="X" /> を空でないコンパクト空間とし、<InlineMath math="f: X \to \mathbb{R}" /> を連続写像（実数値関数）とする。
                    このとき、<InlineMath math="f" /> は <InlineMath math="X" /> 上で最大値および最小値を達成する。
                    すなわち、ある点 <InlineMath math="x_{max}, x_{min} \in X" /> が存在して、任意の <InlineMath math="x \in X" /> に対し
                    <BlockMath math="f(x_{min}) \le f(x) \le f(x_{max})" />
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    前節（Theorem 7.2-1）より、コンパクト空間の連続像 <InlineMath math="f(X) \subset \mathbb{R}" /> はコンパクトである。
                    実数直線 <InlineMath math="\mathbb{R}" /> におにおいて、コンパクト集合は有界かつ閉集合である（これは次節で一般の <InlineMath math="\mathbb{R}^n" /> について証明するハイネ・ボレルの定理の内容である）。
                </p>
                <p className="mt-2">
                    <InlineMath math="f(X)" /> は有界なので、上限 <InlineMath math="M = \sup f(X)" /> と下限 <InlineMath math="m = \inf f(X)" /> が存在する。
                    また <InlineMath math="f(X)" /> は閉集合なので、上限と下限はどちらも集合 <InlineMath math="f(X)" /> に属する。
                    （もし属さないとすると、例えば <InlineMath math="M" /> の任意の近傍が <InlineMath math="f(X)" /> と交わるため <InlineMath math="M" /> は <InlineMath math="f(X)" /> の触点であり、閉集合であることから <InlineMath math="M \in f(X)" /> となるはずである）。
                </p>
                <p className="mt-2">
                    したがって、ある点 <InlineMath math="x_{max}, x_{min} \in X" /> が存在して <InlineMath math="f(x_{max}) = M" /> かつ <InlineMath math="f(x_{min}) = m" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1 (最大値定理の適用)">
                <p>
                    関数 <InlineMath math="f(x) = x^3 - x" /> を閉区間 <InlineMath math="[-1, 1]" /> 上で考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        定義域 <InlineMath math="[-1, 1]" /> はコンパクトなので、<InlineMath math="f" /> は必ず最大値と最小値を持ちます。
                    </li>
                    <li>
                        一方、開区間 <InlineMath math="(-1, 1)" /> 上では、値域が <InlineMath math="(-2\sqrt{3}/9, 2\sqrt{3}/9)" /> のようになり、境界点を含まないため最大値・最小値を持たない場合があります。このようにコンパクト性は「端点での振る舞い」を保証する強力な道具です。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コンパクト同相定理</h2>

            <p>
                通常、写像が同相写像であることを示すには「全単射」「連続」に加えて「逆写像も連続」であることを示す必要があります。
                しかし、定義域がコンパクトで値域がハウスドルフであれば、逆写像の連続性は自動的に従います。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-2 (コンパクト同相定理)">
                <p>
                    <InlineMath math="X" /> をコンパクト空間、<InlineMath math="Y" /> をハウスドルフ空間とする。
                    連続な全単射 <InlineMath math="f: X \to Y" /> は同相写像である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    逆写像 <InlineMath math="f^{-1}: Y \to X" /> が連続であることを示す。
                    これは、「<InlineMath math="X" /> の任意の閉集合 <InlineMath math="A" /> に対して、その <InlineMath math="f^{-1}" /> による逆像（すなわち <InlineMath math="f(A)" />）が <InlineMath math="Y" /> の閉集合である」ことを示せばよい。
                </p>
                <p className="mt-2">
                    <InlineMath math="A \subset X" /> を任意の閉集合とする。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2 ml-4">
                    <li><InlineMath math="X" /> はコンパクトであり、<InlineMath math="A" /> はその閉部分集合なので、<InlineMath math="A" /> はコンパクトである（Proposition 7.2-1）。</li>
                    <li>連続写像によるコンパクト集合の像はコンパクトなので、<InlineMath math="f(A)" /> はコンパクトである（Theorem 7.2-1）。</li>
                    <li><InlineMath math="Y" /> はハウスドルフ空間であり、コンパクト部分集合 <InlineMath math="f(A)" /> は <InlineMath math="Y" /> の閉集合である（Theorem 7.2-2）。</li>
                </ol>
                <p className="mt-2">
                    以上より、<InlineMath math="f" /> による閉集合の像は閉集合である（すなわち <InlineMath math="f" /> は閉写像である）。
                    全単射な閉写像の逆写像は連続であるため、<InlineMath math="f" /> は同相写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="なぜハウスドルフ性が必要か">
                <p>
                    値域 <InlineMath math="Y" /> がハウスドルフでない場合、この定理は成り立たないことがあります。
                    例えば、同じ集合 <InlineMath math="X" /> の上に異なる2つの位相 <InlineMath math="\mathcal{O}_1, \mathcal{O}_2" /> があり、
                    <InlineMath math="\mathcal{O}_1" /> がコンパクトかつ <InlineMath math="\mathcal{O}_2" /> よりも真に強い（細かい）場合、
                    恒等写像 <InlineMath math="\text{id}: (X, \mathcal{O}_1) \to (X, \mathcal{O}_2)" /> は連続な全単射ですが、同相ではありません。
                    ハウスドルフ性は、「コンパクト集合が閉集合である」ことを保証するために不可欠な条件です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>最大値定理</strong>：コンパクト空間上の実数値連続関数は必ず最大値と最小値を持つ。</li>
                    <li><strong>コンパクト同相定理</strong>：「コンパクト $\to$ ハウスドルフ」の連続全単射は、自動的に逆も連続になり、同相写像となる。</li>
                    <li>この定理は、図形の同一視（商空間）が元の図形といつ同相になるかを判定する際などに非常に強力な道具となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
