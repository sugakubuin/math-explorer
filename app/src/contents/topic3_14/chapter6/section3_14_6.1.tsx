import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FormalArithmeticPA() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでは「一階述語論理という枠組み」そのものの一般的な性質（完全性など）を学んできました。本章からは、その枠組みの上に特定の数学分野の公理系を載せたとき、何が起きるかを探求します。対象とするのは、数学の最も基礎となる「自然数の算術」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ペアノ算術 (PA) の公理</h2>

            <p className="leading-relaxed">
                自然数の世界を公理化するために、19世紀末にジュゼッペ・ペアノらが考案した公理系を一階述語論理の言語で定式化したものを「ペアノ算術（Peano Arithmetic, PA）」と呼びます。
            </p>

            <ContentBox
                type="axiom"
                title="Axiom 6.1-1 (ペアノ算術 PA)"
            >
                <p>
                    <strong>言語：</strong> <InlineMath math="\mathcal{L}_{\mathrm{PA}} = \{0, S, +, \cdot\}" /> <br/>
                    （<InlineMath math="0" />：定数記号、<InlineMath math="S" />：1引数関数記号「後継者（+1）」、<InlineMath math="+" /> と <InlineMath math="\cdot" />：2引数関数記号）
                </p>
                <p>
                    <strong>PA の公理系</strong>は以下の文からなる。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li><InlineMath math="\forall x\,(S(x) \neq 0)" /> <br/><span className="text-sm text-gray-500">（0 は誰の後継者でもない）</span></li>
                    <li><InlineMath math="\forall x\,\forall y\,(S(x) = S(y) \to x = y)" /> <br/><span className="text-sm text-gray-500">（後継者関数は単射である）</span></li>
                    <li><InlineMath math="\forall x\,(x + 0 = x)" /> <br/><span className="text-sm text-gray-500">（加法の定義：ベース）</span></li>
                    <li><InlineMath math="\forall x\,\forall y\,(x + S(y) = S(x + y))" /> <br/><span className="text-sm text-gray-500">（加法の定義：再帰ステップ）</span></li>
                    <li><InlineMath math="\forall x\,(x \cdot 0 = 0)" /> <br/><span className="text-sm text-gray-500">（乗法の定義：ベース）</span></li>
                    <li><InlineMath math="\forall x\,\forall y\,(x \cdot S(y) = (x \cdot y) + x)" /> <br/><span className="text-sm text-gray-500">（乗法の定義：再帰ステップ）</span></li>
                    <li>
                        <strong>数学的帰納法の公理スキーマ：</strong> 任意の論理式 <InlineMath math="\varphi(x)" /> に対して、
                        <BlockMath math="(\varphi(0) \land \forall x\,(\varphi(x) \to \varphi(S(x)))) \to \forall x\,\varphi(x)" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-1 (PA での定理の証明)"
            >
                <p>
                    「<InlineMath math="\forall x\,(x + 0 = x)" />」は公理3そのものであるが、「<InlineMath math="\forall x\,(0 + x = x)" />」（左からの加法）は公理に含まれていないため、帰納法スキーマを使って証明しなければならない。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><InlineMath math="\varphi(x)" /> を <InlineMath math="0 + x = x" /> とする。</li>
                    <li><strong>ベースケース <InlineMath math="\varphi(0)" />：</strong> <InlineMath math="0 + 0 = 0" />。これは公理3において <InlineMath math="x=0" /> とすれば得られる。</li>
                    <li><strong>帰納ステップ：</strong> <InlineMath math="\varphi(x) \to \varphi(S(x))" /> を示す。仮定 <InlineMath math="0 + x = x" /> のもとで、公理4より <InlineMath math="0 + S(x) = S(0 + x) = S(x)" />。したがって <InlineMath math="\varphi(S(x))" /> が示された。</li>
                </ul>
                <p>
                    これにより帰納法スキーマ（公理7）を適用でき、<InlineMath math="\mathrm{PA} \vdash \forall x\,(0 + x = x)" /> が証明される。同様に加法の交換法則 <InlineMath math="x+y=y+x" /> 等も証明可能である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">PA の表現力と「Σ_1 完全性」</h2>

            <p className="leading-relaxed">
                PA はたった7種類（最後は無限個のスキーマですが）のルールしかありませんが、驚くほど強力な表現力を持っています。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.1-1 (PA の表現力)"
            >
                <p>
                    「コンピュータのプログラム（アルゴリズム）として計算・判定可能な自然数の関数や性質」は、すべて PA の言語 <InlineMath math="\mathcal{L}_{\mathrm{PA}}" /> による論理式で表現できる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    証明の詳細は計算理論における「原始再帰的関数の表現可能性」に属するため長大になるが、基本方針は以下の通りである。
                </p>
                <p>
                    加法と乗法のみを持つ PA の言語では、一見すると数列やリストなどの複雑なデータ構造を扱えないように思える。しかし、ゲーデルの <InlineMath math="\beta" /> 関数（中国剰余定理を用いた、任意長の数列を2つの自然数だけでエンコードする関数）を用いることで、アルゴリズムの計算の各ステップ（状態の推移）を有限長の数列として自然数の世界で表現できる。
                </p>
                <p>
                    これにより、チューリングマシンや再帰的関数で計算可能なあらゆる操作が、PA の論理式を用いた <InlineMath math="\exists" /> と <InlineMath math="\forall" /> の組み合わせとして完全に翻訳（表現）可能となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 6.1-2 (様々な概念の PA での表現)"
            >
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>大小関係 <InlineMath math="x \leq y" />：</strong> <InlineMath math="\exists z\,(x + z = y)" /></li>
                    <li><strong>約数 <InlineMath math="x \mid y" />：</strong> <InlineMath math="\exists z\,(x \cdot z = y)" /></li>
                    <li><strong>素数 <InlineMath math="\mathrm{Prime}(x)" />：</strong> <InlineMath math="(1 < x) \land \forall y\,(y \mid x \to (y = 1 \lor y = x))" /></li>
                </ul>
                <p>
                    さらに、フェルマーの最終定理やゴールドバッハの予想など、数論の歴史的な難問の多くも、すべてこの PA の論理式として書き下すことができる。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="PA の強さと限界"
            >
                <p>
                    PA は自然数に関する定理を証明するための非常に強力な体系であり、「正しい計算」の結果は必ず PA で証明できます（これを <InlineMath math="\Sigma_1" /> 完全性といいます）。
                </p>
                <p>
                    しかし、次節以降で見るゲーデルの不完全性定理によれば、PAがいかに強力であっても、「真であるにもかかわらず、PA からは絶対に証明できない命題」が必ず存在してしまうのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>ペアノ算術 (PA)</strong> は、0、後継者、加法、乗法の公理と数学的帰納法スキーマからなる、自然数の標準的な形式公理系である。</li>
                    <li>計算可能な関数や数論的な性質（素数など）はすべて PA の論理式に翻訳できる強力な表現力を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}