import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EquivalencesOfAC() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「元を選ぶ」「極大元を探す」「一列に並べる」――これらは一見すると全く異なる主張に見えます。
                しかし、数学的に驚くべき事実は、これらがすべて<strong>論理的に等価</strong>であるということです。
                この最後のセクションでは、これらの命題がつくる巨大な「同値の環」と、選択公理が現代数学において果たす役割について総括します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3命題の同値性</h2>

            <p>
                標準的な集合論（ZF）の枠組みにおいて、次の定理が成り立ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.4-1 (同値性の定理)">
                <p>
                    以下の3つの主張は、ZF公理系の下で互いに同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4 font-semibold">
                    <li>選択公理 (Axiom of Choice)</li>
                    <li>ツォルンの補題 (Zorn's Lemma)</li>
                    <li>整列定理 (Well-ordering Theorem)</li>
                </ol>
            </ContentBox>

            <div className="space-y-8">
                <ContentBox type="proof" title="1. 選択公理 ⇒ 整列定理">
                    <p>
                        集合 <InlineMath math="A" /> に対して、選択公理から導かれる選択関数 <InlineMath math="\Phi \colon \mathcal{P}(A) \setminus \{\emptyset\} \to A" /> を用いて、<InlineMath math="A" /> の元を並べていく。
                    </p>
                    <p className="mt-4">
                        <InlineMath math="A" /> の元を、超限帰納法を用いて次のようにラベル付けする：
                        <br />
                        <InlineMath math="a_0 = \Phi(A)" />
                        <br />
                        <InlineMath math="a_\alpha = \Phi(A \setminus \{a_\beta \mid \beta < \alpha\})" />
                    </p>
                    <p className="mt-4">
                        この操作は、集合 <InlineMath math="A" /> が尽きるまで続けられる。この対応関係により、<InlineMath math="A" /> には添字集合（順序数）から引き継がれた順序が定義され、これは整列順序となる。
                    </p>
                </ContentBox>

                <ContentBox type="proof" title="2. 整列定理 ⇒ ツォルンの補題">
                    <p>
                        帰納的順序集合 <InlineMath math="P" /> が極大元を持たないと仮定して矛盾を導く。
                    </p>
                    <p className="mt-4">
                        整列定理より、<InlineMath math="P" /> には整列順序 <InlineMath math="\preceq" /> が存在する。
                        この整列順序に従って、<InlineMath math="P" /> の元を一つずつ調べ、以前に選んだ元よりも「元の半順序 <InlineMath math="\leq" /> において真に大きい」ものだけを選んで鎖 <InlineMath math="C" /> を作る。
                    </p>
                    <p className="mt-4">
                        <InlineMath math="P" /> は帰納的なので、この鎖 <InlineMath math="C" /> には上界 <InlineMath math="u" /> が存在する。
                        仮定より極大元はないため、<InlineMath math="u" /> よりも真に大きい元 <InlineMath math="v" /> が存在する。
                        しかし、これは鎖 <InlineMath math="C" /> の構成方法（すべての候補を調べ尽くす）に矛盾する。
                    </p>
                </ContentBox>

                <ContentBox type="proof" title="3. ツォルンの補題 ⇒ 選択公理">
                    <p>
                        （§6.2 で詳しく述べた通り）部分的な選択関数の集合に延長の順序を入れ、ツォルンの補題を適用することで、全域で定義された選択関数を得る。
                    </p>
                    <div className="text-right text-slate-500 dark:text-slate-400">
                        <InlineMath math="\square" />
                    </div>
                </ContentBox>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理がもたらす「光」と「影」</h2>

            <p>
                選択公理を認めることで、数学は飛躍的に豊かになりましたが、同時に私たちの直感を激しく揺さぶる結果も導かれます。
            </p>

            <ContentBox type="example" title="光：解析学・代数学の基盤">
                <p>
                    「任意のベクトル空間は基底を持つ」「任意の可換環は極大イデアルを持つ」「コンパクト空間の直積はコンパクトである（チコノフの定理）」など、現代数学の「当たり前」を支えています。
                </p>
            </ContentBox>

            <ContentBox type="example" title="影：バナッハ＝タルスキーのパラドックス">
                <p>
                    選択公理を認めると、<strong>「一つの球体を5つに分割し、それらを回転させて並べ替えるだけで、元の球体と同じ大きさの球体を2つ作ることができる」</strong>という、物理的には不可能な主張が証明できてしまいます。
                    これは、選択公理によって「体積が定義できないほど複雑な図形」が構成できてしまうことを意味しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>選択公理</strong>、<strong>ツォルンの補題</strong>、<strong>整列定理</strong>の3つは、ZF公理系の下で論理的に同値である。</li>
                    <li>これらは現代数学（解析・代数・幾何）の極めて広範な定理の証明において、暗黙的または明示的な基礎をなしている。</li>
                    <li>一方で、バナッハ＝タルスキーのパラドックスのように、常識に反する帰結を導く側面も持っている。</li>
                    <li>これらを公理として認めるかどうかは、私たちがどのような「数学の世界」を採用するかという選択の問題でもある。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
