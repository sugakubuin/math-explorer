import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZornsLemma() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                選択公理そのものは「元を選ぶ」という素朴な主張ですが、それを順序集合の言葉に翻訳すると、極めて実用的で強力な定理へと姿を変えます。
                それが<strong>ツォルンの補題 (Zorn's Lemma)</strong> です。
                代数学や解析学における「存在証明」の多くは、この補題を抜きにしては語れません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ツォルンの補題の主張</h2>

            <p>
                「極大元が存在すること」を示すための条件を、順序の言葉で記述します。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (帰納的順序集合)">
                <p>
                    半順序集合 <InlineMath math="(P, \leq)" /> が次の条件を満たすとき、<strong>帰納的順序集合 (Inductively Ordered Set)</strong> であるという：
                    <br />
                    「<InlineMath math="P" /> の任意の<strong>全順序部分集合（鎖）</strong> <InlineMath math="C" /> が、<InlineMath math="P" /> 内に上界を持つ。」
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ツォルンの補題)">
                <p>
                    <InlineMath math="P" /> が空でない帰納的順序集合ならば、<InlineMath math="P" /> には少なくとも一つの<strong>極大元</strong>が存在する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">「存在」を示すための最強の道具</h2>

            <p>
                ツォルンの補題は、「ある性質を満たす最大（極大）のものを探したいが、具体的にどう作ればよいか分からない」という場面で真価を発揮します。
            </p>

            <ContentBox type="example" title="Example 6.2-1 (すべてのベクトル空間は基底を持つ)">
                <p>
                    線形代数学における有名な定理です。
                    有限次元であれば構成的に基底を作れますが、無限次元（関数のつくる空間など）の場合、基底の存在を具体的に示すのは困難です。
                </p>
                <p className="mt-4">
                    しかし、ツォルンの補題を「線形独立な部分集合の集まり」という半順序集合に適用することで、<strong>「これ以上元を増やせない極大の線形独立集合」</strong>、すなわち基底の存在を即座に導くことができます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理との同値性</h2>
            <p>
                ツォルンの補題は、選択公理から導かれる単なる「一定理」ではありません。後に詳細に述べますが、実はZF公理系においてこれら二つは<strong>論理的に同値</strong>です。
                ここでは、ツォルンの補題を用いて選択公理（選択関数の存在）を証明する流れを見てみましょう。
            </p>

            <ContentBox type="proof" title="Proof: ツォルンの補題 ⇒ 選択公理">
                <p>
                    空でない集合の族 <InlineMath math="\mathcal{F} = \{A_\alpha\}_{\alpha \in \Lambda}" /> に対して、選択関数が存在することを示す。
                </p>
                <p className="mt-4">
                    1. <strong>部分的な選択関数の集合</strong> <InlineMath math="P" /> を次のように定義する：
                    <BlockMath math="P = \{ (S, f) \mid S \subset \Lambda, f \text{ は } S \text{ 上の選択関数} \}" />
                    ここで、<InlineMath math="P" /> 上の順序 <InlineMath math="\leq" /> を「写像の延長」として定義する：
                    <BlockMath math="(S_1, f_1) \leq (S_2, f_2) \iff S_1 \subset S_2 \text{ かつ } f_2|_{S_1} = f_1" />
                </p>
                <p className="mt-4">
                    2. <strong>帰納的であることの確認：</strong> <InlineMath math="P" /> の任​​意の鎖 <InlineMath math="\mathcal{C} = \{(S_i, f_i)\}" /> に対して、
                    <InlineMath math="\hat{S} = \bigcup S_i" /> とし、<InlineMath math="\hat{f}(x) = f_i(x) \quad (x \in S_i)" /> と定義すれば、これが上界となる。
                </p>
                <p className="mt-4">
                    3. <strong>極大元の適用：</strong> ツォルンの補題より、<InlineMath math="P" /> には極大元 <InlineMath math="(M, \Phi)" /> が存在する。
                </p>
                <p className="mt-4">
                    4. <strong>結論：</strong> もし <InlineMath math="M \neq \Lambda" /> ならば、まだ選ばれていない <InlineMath math="\alpha \in \Lambda \setminus M" /> を取り、
                    <InlineMath math="\Phi" /> を <InlineMath math="\alpha" /> まで延長することで極大性に矛盾する。
                    したがって <InlineMath math="M = \Lambda" /> であり、<InlineMath math="\Phi" /> は全域で定義された選択関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <ContentBox type="remark" title="ヒルベルトの嘆きとツォルンの魔法">
                <p>
                    ツォルンの補題は、「極大元の存在」を保証してくれますが、<strong>「それが具体的にどのような形をしているか」までは教えてくれません。</strong>
                    このため、存在することは分かっているのに具体例が一つも挙げられない、といった奇妙な状況（基底の存在など）がしばしば発生します。
                    まさに「魔法」のような強力さと、一抹の不透明さを併せ持つ道具なのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ツォルンの補題</strong>は、選択公理と論理的に同値な命題である。</li>
                    <li>任意の「鎖（全順序部分集合）」が上界を持つような半順序集合には、必ず<strong>極大元</strong>が存在する。</li>
                    <li>ベクトル空間の基底の存在や、可換環の極大イデアルの存在など、数学の広範な分野での存在証明に使用される。</li>
                    <li>存在そのものは確実だが、具体的に構成する方法は示されない「非構成的」な性質を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
