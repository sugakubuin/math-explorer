import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OuterMeasureAndMeasurability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                測度は可算加法性という強力な性質を持ちますが、すべての部分集合に対して測度を定義しようとすると矛盾が生じることがあります。
                そこで、まず「すべての集合に対して定義可能だが、可算加法性とは限らない弱い性質を持つ関数（外測度）」を考え、その中から「測度として振る舞う良い集合」を切り出す手法を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">外測度</h2>

            <p>
                外測度は、べき集合 <InlineMath math="2^X" /> 全体で定義される関数であり、集合を外側から被覆して大きさを推定する試みに相当します。
            </p>

            <ContentBox type="definition" title="Definition 1.3-1 (外測度)">
                <p>
                    集合 <InlineMath math="X" /> 上の関数 <InlineMath math="\mu^* : 2^X \to [0, +\infty]" /> が以下の3条件を満たすとき、<InlineMath math="\mu^*" /> を<b>外測度</b> (outer measure) という。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="\mu^*(\emptyset) = 0" /></li>
                    <li>
                        <b>単調性</b>: <InlineMath math="A \subset B \implies \mu^*(A) \leq \mu^*(B)" />
                    </li>
                    <li>
                        <b>劣 <InlineMath math="\sigma" />-加法性</b>: 集合列 <InlineMath math="\{A_n\}_{n=1}^\infty" /> に対して、
                        <BlockMath math="\mu^*\left(\bigcup_{n=1}^\infty A_n\right) \leq \sum_{n=1}^\infty \mu^*(A_n)" />
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-1 (非加法的な外測度)">
                <p>
                    集合 <InlineMath math="X = \{a, b\}" /> 上で、以下のように <InlineMath math="\mu^*" /> を定義する。
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li><InlineMath math="\mu^*(\emptyset) = 0" /></li>
                    <li><InlineMath math="\mu^*(\{a\}) = 0.8" />, <InlineMath math="\mu^*(\{b\}) = 0.8" /></li>
                    <li><InlineMath math="\mu^*(\{a, b\}) = 1.0" /></li>
                </ul>
                <p className="mt-4">
                    この場合、単調性と劣加法性を満たすため外測度ですが、
                    <BlockMath math="\mu^*(\{a, b\}) = 1.0 < \mu^*(\{a\}) + \mu^*(\{b\}) = 1.6" />
                    となり、互いに素な集合の和において加法性が成り立っていません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="外測度と測度の違い">
                <p>
                    外測度は「どんな集合にも大きさを割り当てようとする試み」ですが、一般には可算加法性は成立しません。
                    つまり、相異なる集合を合わせたときに大きさが単純な足し算にならない場合があるため、そのままでは積分の定義には使えません。
                </p>
            </ContentBox>

            <p>
                次に、外測度の劣 <InlineMath math="\sigma" />-加法性が「等号（可算加法性）」になるような、特に素直な集合を特定する方法を考えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">カラテオドリの可測条件</h2>

            <p>
                カラテオドリは、外測度を用いて「可測であること」を次のように定義しました。
            </p>

            <ContentBox type="definition" title="Definition 1.3-2 (カラテオドリの可測集合)">
                <p>
                    集合 <InlineMath math="A \subset X" /> が <b><InlineMath math="\mu^*" />-可測</b> であるとは、任意の<b>試験集合</b> <InlineMath math="E \subset X" /> に対して、
                    <BlockMath math="\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)" />
                    が成り立つことをいう。
                    <InlineMath math="\mu^*" />-可測な集合全体を <InlineMath math="\mathcal{M}(\mu^*)" /> と書く。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-2 (可測性の判定)">
                <p>
                    前例の <InlineMath math="X = \{a, b\}" /> において、<InlineMath math="A = \{a\}" /> が可測か判定する。試験集合を <InlineMath math="E = \{a, b\}" /> とすると、
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li><InlineMath math="\mu^*(E \cap A) + \mu^*(E \cap A^c) = \mu^*(\{a\}) + \mu^*(\{b\}) = 0.8 + 0.8 = 1.6" /></li>
                    <li><InlineMath math="\mu^*(E) = 1.0" /></li>
                </ul>
                <p className="mt-4">
                    両者は一致しないため、<InlineMath math="A = \{a\}" /> はこの外測度に関して<b>可測ではありません</b>。このように、性質の悪い外測度では一点集合でさえ可測にならないことがあります。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.3-3 (可測集合の直感)">
                <p>
                    カラテオドリの条件は、集合 <InlineMath math="A" /> が「ハサミ」として働き、任意の集合 <InlineMath math="E" /> を内側 (<InlineMath math="E \cap A" />) と外側 (<InlineMath math="E \cap A^c" />) に、大きさを損なうことなく綺麗に切り分けられることを意味しています。
                    このような性質を持つ集合の集まりは、非常に良い構造を持ちます。
                </p>
            </ContentBox>

            <p>
                この「可測集合族」の上では、外測度は真に測度としての性質を獲得します。
            </p>

            <ContentBox type="theorem" title="Theorem 1.3-1 (カラテオドリの拡張定理)">
                <p>
                    外測度 <InlineMath math="\mu^*" /> に関して以下のことが成り立つ。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="\mathcal{M}(\mu^*)" /> は <InlineMath math="\sigma" />-加法族をなす。</li>
                    <li><InlineMath math="\mu^*" /> の <InlineMath math="\mathcal{M}(\mu^*)" /> への制限 <InlineMath math="\mu = \mu^*|_{\mathcal{M}(\mu^*)}" /> は測度になる。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    証明の中心は、<InlineMath math="\mathcal{M}(\mu^*)" /> が可算和で閉じていることと、その上で可算加法性が成り立つことを示す点にある。
                </p>
                <p>
                    1. 有限加法性について: <InlineMath math="A, B \in \mathcal{M}(\mu^*)" /> とすると、定義の繰り返し適用により <InlineMath math="A \cup B" /> が可測条件を満たすことが導かれる。
                </p>
                <p>
                    2. 可算加法性について: 互いに素な <InlineMath math="\{A_n\} \subset \mathcal{M}(\mu^*)" /> に対して <InlineMath math="S_n = \bigcup_{i=1}^n A_i" /> とおくと、有限回の操作により <InlineMath math="\mu^*(E \cap S_n) = \sum_{i=1}^n \mu^*(E \cap A_i)" /> が導かれる。
                    ここで <InlineMath math="n \to \infty" /> とし、外測度の劣 <InlineMath math="\sigma" />-加法性と組み合わせることで、極限においても加法性が保たれることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>外測度</b>はすべての集合に定義され単調性と劣 <InlineMath math="\sigma" />-加法性を持つが、一般には可算加法性を持たない。</li>
                    <li><b>カラテオドリの可測条件</b>は、集合 <InlineMath math="A" /> が任意の集合を「加法性を保って切り分けられるか」を問う条件。</li>
                    <li>可測集合全体 <InlineMath math="\mathcal{M}(\mu^*)" /> は <b><InlineMath math="\sigma" />-加法族</b>になり、その上で外測度は<b>測度</b>になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
