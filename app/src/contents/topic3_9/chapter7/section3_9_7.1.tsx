import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function IrreducibleAndPrimeElements() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章では、整数が「素数のかけ算に一意に分解できる」という性質（素因数分解のの一意性）を一般化した「一意分解整域（UFD）」について学びます。その準備として、整域における「これ以上分解できない元」を表す 2 つの概念、「素元」と「既約元」の違いを明確にしておきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">素元と既約元の定義の比較</h2>

            <p className="leading-relaxed">
                第6章の PID の節でも触れましたが、改めて一般の整域における素元と既約元の定義と、その包含関係について確認します。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (素元)">
                <p>
                    整域 <InlineMath math="D" /> の元 <InlineMath math="p" />（<InlineMath math="0" /> でなく単元でもない）が<b>素元（prime element）</b>であるとは、イデアル <InlineMath math="(p)" /> が素イデアルであること、すなわち
                </p>
                <BlockMath math="p \mid ab \implies p \mid a \text{ または } p \mid b" />
                <p>
                    が成立することである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                一方で、「それ以上砕けない（自明な分解しか持たない）」ことを表すのが既約元です。一般の整域においては、「素元ならば既約元」という一方向の関係だけが常に成り立ちます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.1-1 (素元は既約元)">
                <p>
                    整域において、素元は必ず既約元である。しかし、逆（既約元ならば素元）は一般には成立しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="p" /> を素元とし、<InlineMath math="p = ab" /> と分解できたとする。このとき <InlineMath math="p \mid ab" /> である。
                </p>
                <p>
                    素元の定義より、<InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> が成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <InlineMath math="p \mid a" /> のとき、ある元 <InlineMath math="c" /> が存在して <InlineMath math="a = pc" /> と書ける。<br />
                        これを元の式に代入すると <InlineMath math="p = pcb" /> となる。<InlineMath math="p \neq 0" /> であり、整域なので消去法則が適用でき、<InlineMath math="1 = cb" /> を得る。<br />
                        したがって <InlineMath math="b" /> は単元である。
                    </li>
                    <li>
                        <InlineMath math="p \mid b" /> のときも同様の議論により、<InlineMath math="a" /> が単元であることがわかる。
                    </li>
                </ul>
                <p className="mt-2">
                    以上より、<InlineMath math="p = ab" /> と書けば必ず <InlineMath math="a" /> または <InlineMath math="b" /> が単元となるため、<InlineMath math="p" /> は既約元の定義を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                では、逆が成り立たない（つまり「既約元だが素元ではない」）例を見てみましょう。このような元が存在する環では、素因数分解の一意性が崩れてしまいます。
            </p>

            <ContentBox type="example" title={<span>Example 7.1-1 (<InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> での反例)</span>}>
                <p>
                    環 <InlineMath math="\mathbb{Z}[\sqrt{-5}] = \{ a + b\sqrt{-5} \mid a, b \in \mathbb{Z} \}" /> を考える。この環において、元 <InlineMath math="p = 2+\sqrt{-5}" /> を取り上げる。
                </p>
                <p>
                    この環のノルムを <InlineMath math="N(a+b\sqrt{-5}) = a^2 + 5b^2" /> と定義する。<InlineMath math="N(p) = 2^2 + 5(1)^2 = 9" /> である。<br />
                    もし <InlineMath math="p" /> が非自明に分解できるなら、ノルムが <InlineMath math="3" /> となる元が必要だが、<InlineMath math="a^2 + 5b^2 = 3" /> を満たす整数 <InlineMath math="a, b" /> は存在しない。したがって <InlineMath math="p" /> はこれ以上分解できない<b>既約元</b>である。
                </p>
                <p>
                    一方で、<InlineMath math="9" /> という数を 2 通りの方法で分解してみる。
                </p>
                <BlockMath math="9 = 3 \cdot 3 = (2+\sqrt{-5})(2-\sqrt{-5})" />
                <p>
                    この式から、<InlineMath math="p = 2+\sqrt{-5}" /> は積 <InlineMath math="3 \cdot 3" /> を割り切る（<InlineMath math="p \mid 9" />）ことがわかる。もし <InlineMath math="p" /> が素元ならば、<InlineMath math="p \mid 3" /> とならなければならない。
                </p>
                <p>
                    しかし、<InlineMath math="N(p) = 9" /> と <InlineMath math="N(3) = 9" /> であり、単元倍を除いて一致するはずだが、<InlineMath math="p" /> と <InlineMath math="3" /> は明らかに単元倍の関係にはない。よって <InlineMath math="p \nmid 3" /> である。<br />
                    （<InlineMath math="p \mid 3 \implies 3 = p \cdot x \implies N(3) = N(p)N(x) \implies 9 = 9 \cdot N(x) \implies N(x) = 1" /> となるが、ノルム 1 の単元は <InlineMath math="\pm 1" /> のみであり、<InlineMath math="3 \neq \pm(2+\sqrt{-5})" /> である。）
                </p>
                <p>
                    よって、<InlineMath math="p = 2+\sqrt{-5}" /> は既約元であるが素元ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">UFD における既約元の素元性</h2>

            <p className="leading-relaxed">
                先ほどの例は、素因数分解の一意性が崩れる環の典型的な例でした。逆に言えば、分解が一意であるような環（UFD）においては、既約元は必ず素元としての性質を持つことになります。
            </p>

            <ContentBox type="remark" title="Remark (UFD では既約元が素元になる)">
                <p>
                    次節で定義する一意分解整域（UFD）においては、既約元と素元は完全に一致します（Theorem 7.2-1 で証明します）。
                </p>
                <p>
                    Example 7.1-1 で挙げた <InlineMath math="\mathbb{Z}[\sqrt{-5}]" /> が UFD でない理由は、まさに「一意でない分解（<InlineMath math="3 \cdot 3 = (2+\sqrt{-5})(2-\sqrt{-5})" />）が存在する」からであり、これは「既約元が素元にならない」ことと表裏一体の関係にあります。この現象は整数論の深い話題（イデアル類群など）へとつながっていきます（4-14 整数論II などを参照）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="p \mid ab \implies p \mid a \text{ または } p \mid b" /> を満たす元を<b>素元</b>と呼ぶ。</li>
                    <li>自明な分解しか持たない（<InlineMath math="p=ab \implies a \text{ か } b \text{ が単元}" />）元を<b>既約元</b>と呼ぶ。</li>
                    <li>一般の整域では「素元ならば既約元」であるが、その逆は成り立たない（例：<InlineMath math="\mathbb{Z}[\sqrt{-5}]" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
