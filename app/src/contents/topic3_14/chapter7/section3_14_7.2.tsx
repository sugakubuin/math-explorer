import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AxiomOfChoiceAndEquivalences() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ZF公理系にもう一つ、現代数学において極めて重要な公理を付け加えます。それが「選択公理（Axiom of Choice, AC）」です。ZFにACを加えた体系を<strong>ZFC</strong>と呼び、これが現在の標準的な数学の基礎となっています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の主張</h2>

            <ContentBox
                type="axiom"
                title="Axiom 7.2-1 (選択公理 / Axiom of Choice, AC)"
            >
                <p>
                    空でない集合の族 <InlineMath math="\{A_\lambda\}_{\lambda \in \Lambda}" /> （すべての <InlineMath math="\lambda" /> で <InlineMath math="A_\lambda \neq \emptyset" />）に対して、各 <InlineMath math="A_\lambda" /> から要素をちょうど1つずつ「選ぶ」関数（<strong>選択関数</strong>）<InlineMath math="f : \Lambda \to \bigcup_{\lambda \in \Lambda} A_\lambda" /> が存在する。
                    <BlockMath math="\forall \lambda \in \Lambda,\; f(\lambda) \in A_\lambda" />
                </p>
                <p>
                    言い換えると、空でない集合の族の直積集合 <InlineMath math="\prod_{\lambda \in \Lambda} A_\lambda" /> は空ではない。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="なぜ公理が必要なのか？"
            >
                <p>
                    集合が有限個 <InlineMath math="\{A_1, \ldots, A_n\}" /> であれば、ZF公理系の中で数学的帰納法を用いて選択関数を具体的に構成できるため、ACは不要である。
                </p>
                <p>
                    また、集合が無限個あっても、「各 <InlineMath math="A_n" /> は自然数の空でない部分集合である」のように、各集合に自然な整列順序（最小元）が入っていれば、「各 <InlineMath math="A_n" /> の最小の要素を選ぶ」という明確なルール（論理式）が書けるため、分出公理や置換公理を使って選択関数を作れる。
                </p>
                <p>
                    しかし、「無限個の空でない実数の部分集合」のように、<strong>具体的な選び方のルール（論理式）を言葉で記述できないような無限族</strong>に対しては、ZFの公理だけでは「全体として選んだ結果の集合（選択関数）」が存在することを証明できない。そのため、構成法を問わずに「とにかく選べる」ことを保証するACが必要となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">選択公理の同値命題</h2>

            <p className="leading-relaxed">
                選択公理は、一見すると全く異なる形をした強力な数学の定理たちと、ZFの下で完全に論理的に同値であることが知られています。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 7.2-1 (AC・ツォルンの補題・整列定理の同値性)"
            >
                <p>
                    ZF公理系の下で、以下の3つの命題は互いに同値である。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><strong>選択公理 (AC)：</strong> 空でない集合の族には選択関数が存在する。</li>
                    <li><strong>ツォルンの補題 (Zorn's Lemma)：</strong> 帰納的順序集合（任意の全順序部分集合が上界を持つような半順序集合）は、少なくとも1つの極大元をもつ。（※Topic 3-9 参照）</li>
                    <li><strong>整列定理 (Well-ordering Theorem)：</strong> 任意の集合上には、整列順序（空でない任意の部分集合が最小元を持つような全順序）を入れることができる。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    2-4 素朴集合論にて詳細な証明があるため、概略のみ記述する。
                </p>
                <p>
                    <InlineMath math="(1) \Rightarrow (2)" /> （AC <InlineMath math="\Rightarrow" /> ツォルンの補題）：<br/>
                    極大元が存在しないと仮定し矛盾を導く。極大元がないなら、任意の鎖（全順序部分集合）の上界に対して、それより真に大きい要素が必ず存在する。ACを用いて、「各鎖の上界たち」の中から「さらに大きい要素」を一つずつ選ぶ選択関数を構成する。この関数を用いて超限帰納法で要素を無限に取り続けると、集合の濃度を超えてしまい矛盾する。
                </p>
                <p>
                    <InlineMath math="(2) \Rightarrow (3)" /> （ツォルンの補題 <InlineMath math="\Rightarrow" /> 整列定理）：<br/>
                    対象の集合 <InlineMath math="A" /> に対して、「<InlineMath math="A" /> の部分集合とその上の整列順序のペア」の全体を考え、順序の延長によって半順序を入れる。この半順序集合が帰納的であることを示し、ツォルンの補題を適用して極大元（= <InlineMath math="A" /> 全体の整列順序）を得る。
                </p>
                <p>
                    <InlineMath math="(3) \Rightarrow (1)" /> （整列定理 <InlineMath math="\Rightarrow" /> AC）：<br/>
                    族 <InlineMath math="\{A_\lambda\}" /> が与えられたとき、その和集合 <InlineMath math="\bigcup A_\lambda" /> 全体に整列定理を用いて整列順序を入れる。すると、各 <InlineMath math="A_\lambda" /> は空でない部分集合なので、この順序に関する「最小元」が必ず一意に存在する。「各 <InlineMath math="A_\lambda" /> の最小元を選ぶ」という明確なルールができたため、ZF内で選択関数が構成できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ツォルンの補題の多用"
            >
                <p>
                    代数学（すべての環には極大イデアルが存在する）、線形代数学（すべてのベクトル空間には基底が存在する）、関数解析学（ハーン-バナッハの定理）など、現代数学の至る所で「極大元」や「存在」を証明するためにツォルンの補題が使われています。
                </p>
                <p>
                    これらはすべて、根底において「選択公理（AC）」の力（無限の選択を無条件に認めること）を借りて成り立っている定理群です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>選択公理 (AC)</strong> は、無限個の集合から要素を一つずつ選び出すことができるという構成不問の存在公理である。</li>
                    <li>ZFの下で、ACは<strong>ツォルンの補題</strong>および<strong>整列定理</strong>と完全に同値である。</li>
                    <li>現代数学の多くの重要な存在定理は、暗黙のうちにこのAC（または同値な命題）を前提としている（ZFC集合論）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}