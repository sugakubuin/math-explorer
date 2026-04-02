import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FreeAndBoundVariables() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                論理式の中に現れる変数には、2つの異なる役割があります。一つは「何かの値が代入されるのを待っている空欄（自由変数）」であり、もう一つは「<InlineMath math="\forall" /> や <InlineMath math="\exists" /> によって範囲が限定されている内部的な変数（束縛変数）」です。プログラミングにおけるグローバル変数とローカル変数のスコープの違いに似ています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">自由変数と束縛変数の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 2.3-1 (自由出現と束縛出現)"
            >
                <p>
                    論理式 <InlineMath math="\varphi" /> の中での変数 <InlineMath math="x" /> の出現について、以下のように定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>束縛出現（bound occurrence）：</strong> <InlineMath math="x" /> の出現が、量化子 <InlineMath math="\forall x" /> または <InlineMath math="\exists x" /> の「スコープ（作用域）」の中に含まれている場合。</li>
                    <li><strong>自由出現（free occurrence）：</strong> 束縛出現ではない、すなわちどの量化子のスコープにも含まれていない出現。</li>
                </ul>
                <p>
                    少なくとも1つの自由出現をもつ変数を、その論理式の<strong>自由変数（free variable）</strong>と呼び、<InlineMath math="\varphi" /> の自由変数の集合を <InlineMath math="\mathrm{FV}(\varphi)" /> と表す。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-1 (自由変数と束縛変数の識別)"
            >
                <p>
                    論理式 <InlineMath math="\varphi \equiv (P(x) \to \forall y\,Q(x, y))" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="P(x)" /> と <InlineMath math="Q(x, y)" /> に現れる <InlineMath math="x" /> は、どの <InlineMath math="\forall x" /> や <InlineMath math="\exists x" /> にも縛られていないため、<strong>自由変数</strong>である。</li>
                    <li><InlineMath math="Q(x, y)" /> に現れる <InlineMath math="y" /> は、直前の <InlineMath math="\forall y" /> のスコープ内にあるため、<strong>束縛変数</strong>である。</li>
                </ul>
                <p>
                    したがって、この論理式の自由変数は <InlineMath math="\mathrm{FV}(\varphi) = \{x\}" /> となる。
                </p>
                <p className="mt-4">
                    別の例 <InlineMath math="\psi \equiv P(x) \lor \exists x\,Q(x)" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>最初の <InlineMath math="P(x)" /> にある <InlineMath math="x" /> は自由出現である。</li>
                    <li>後半の <InlineMath math="\exists x\,Q(x)" /> にある <InlineMath math="x" /> は束縛出現である。</li>
                </ul>
                <p>
                    同じ文字「<InlineMath math="x" />」であっても、出現箇所によって自由か束縛かが異なる。自由出現が一つでもあるため、<InlineMath math="x" /> は <InlineMath math="\psi" /> の自由変数である（<InlineMath math="\mathrm{FV}(\psi) = \{x\}" />）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">代入と自由性条件</h2>

            <p className="leading-relaxed">
                数学では「<InlineMath math="x" /> の式に <InlineMath math="t" /> を代入する」という操作を頻繁に行います。しかし、述語論理でこれを機械的に行うと、思わぬ意味の変質（変数の衝突）を引き起こすことがあります。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-2 (代入と自由性条件)"
            >
                <p>
                    <strong>代入（substitution）：</strong> 論理式 <InlineMath math="\varphi" /> の中にある変数 <InlineMath math="x" /> の<strong>すべての自由出現</strong>を、項 <InlineMath math="t" /> で置き換えて得られる論理式を <strong><InlineMath math="\varphi[t/x]" /></strong> と書く。
                </p>
                <p>
                    <strong>自由な代入（free for <InlineMath math="x" /> in <InlineMath math="\varphi" />）：</strong> 項 <InlineMath math="t" /> を <InlineMath math="\varphi" /> の <InlineMath math="x" /> に代入した結果、<InlineMath math="t" /> の中に含まれていた変数が新たに量化子のスコープに取り込まれて（束縛されて）しまわないとき、「<InlineMath math="t" /> は <InlineMath math="\varphi" /> において <InlineMath math="x" /> に対して<strong>自由である</strong>」という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                代入が「自由でない」場合に何が起きるかを見てみましょう。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 2.3-1 (代入が自由でないことによる意味の変質)"
            >
                <p>
                    論理式 <InlineMath math="\varphi \equiv \exists y\,(x < y)" /> を考える。
                    この式の自由変数は <InlineMath math="x" /> であり、その意味は「<InlineMath math="x" /> より大きな <InlineMath math="y" /> が存在する」である。
                </p>
                <ul className="list-disc list-inside space-y-4 mt-2">
                    <li>
                        <strong>安全な代入（自由な代入）：</strong> 項 <InlineMath math="t = z" /> を代入する。<br/>
                        <InlineMath math="\varphi[z/x] \equiv \exists y\,(z < y)" /> <br/>
                        これは「<InlineMath math="z" /> より大きな <InlineMath math="y" /> が存在する」となり、元の構造・意味が保たれている（<InlineMath math="z" /> は自由である）。
                    </li>
                    <li>
                        <strong>危険な代入（自由でない代入）：</strong> 項 <InlineMath math="t = y" /> を代入する。<br/>
                        <InlineMath math="\varphi[y/x] \equiv \exists y\,(y < y)" /> <br/>
                        代入された <InlineMath math="y" /> が、外側の <InlineMath math="\exists y" /> に<strong>捕捉（capture）</strong>されてしまった。結果として式の意味は「自分自身より大きなものが存在する」となり、元の主張とは全く異なる不条理な主張に変わってしまった。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (解説)"
            >
                <p>
                    定義より確認する。項 <InlineMath math="t = y" /> を <InlineMath math="\varphi \equiv \exists y\,(x < y)" /> の <InlineMath math="x" /> に代入しようとした。
                    <InlineMath math="t" /> には変数 <InlineMath math="y" /> が含まれている。代入箇所は <InlineMath math="\exists y" /> のスコープ内であるため、代入後、<InlineMath math="t" /> の中の <InlineMath math="y" /> は新たに束縛変数になってしまう。
                    したがって、この代入は「自由ではない」と判定される。
                </p>
                <p>
                    意味論的に妥当な推論（例えば「任意の <InlineMath math="x" /> で成り立つなら、特定の <InlineMath math="t" /> でも成り立つ」という全称例化など）を行うためには、代入が常に「自由な代入」であるという条件を課さなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>量化子（<InlineMath math="\forall, \exists" />）のスコープ内にある変数を<strong>束縛変数</strong>、そうでないものを<strong>自由変数</strong>という。</li>
                    <li>代入 <InlineMath math="\varphi[t/x]" /> は、自由変数 <InlineMath math="x" /> のみを対象に行われる。</li>
                    <li>代入によって項 <InlineMath math="t" /> 内の変数が意図せず量化子に捕まってしまう（束縛される）ことを防ぐため、「代入の自由性（free for <InlineMath math="x" /> in <InlineMath math="\varphi" />）」という条件が形式的証明において極めて重要となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}