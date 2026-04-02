import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AlgebraicClosure() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                特定の多項式の根を集めたものが分解体でした。では、「<strong>すべての</strong>多項式の根をあらかじめ含んでいるような巨大な体」を考えることはできるでしょうか。この究極の分解体とも言える概念が「代数閉体」および「代数閉包」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数閉体の定義と例</h2>

            <p>
                どのような方程式を立てても、必ずその体の中に解が見つかるような体を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (代数閉体)">
                <p>
                    体 <InlineMath math="F" /> が<strong>代数閉体（algebraically closed field）</strong>であるとは、<InlineMath math="F[x]" /> の定数でない（次数 <InlineMath math="\geq 1" /> の）すべての多項式が、<InlineMath math="F" /> の中に少なくとも一つの根を持つことである。
                </p>
                <p>
                    この条件は、「<InlineMath math="F[x]" /> のすべての多項式が一次式の積に完全分解すること」、あるいは「<InlineMath math="F[x]" /> の既約多項式が一次式のみであること」と同値である。
                </p>
            </ContentBox>

            <p>
                代数閉体の最も有名な例は、複素数体です。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (複素数体は代数閉体)">
                <p>
                    <strong>代数学の基本定理（Fundamental Theorem of Algebra）</strong>により、複素数体 <InlineMath math="\mathbb{C}" /> は代数閉体である。すなわち、いかなる複素数係数の <InlineMath math="n" /> 次方程式も、複素数の範囲内に重複を含めてちょうど <InlineMath math="n" /> 個の根を持つ。
                </p>
                <p>
                    一方で、実数体 <InlineMath math="\mathbb{R}" /> は代数閉体ではない。方程式 <InlineMath math="x^2 + 1 = 0" /> は実数の範囲に根を持たないからである。同様に有理数体 <InlineMath math="\mathbb{Q}" /> も、<InlineMath math="x^2 - 2 = 0" /> の根を持たないため代数閉体ではない。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">代数閉包の存在と一意性</h2>

            <p>
                任意の体 <InlineMath math="F" /> に対して、不足している根をすべて添加していくことで、<InlineMath math="F" /> を含む代数閉体を作ることができます。これを代数閉包と呼びます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (代数閉包の存在と一意性)">
                <p>
                    任意の体 <InlineMath math="F" /> に対して、以下の2条件を満たす体 <InlineMath math="\bar{F}" /> が存在する。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="\bar{F}" /> は代数閉体である。</li>
                    <li><InlineMath math="\bar{F}" /> は <InlineMath math="F" /> の代数拡大である（すなわち、余計な超越元を含まない）。</li>
                </ol>
                <p>
                    この <InlineMath math="\bar{F}" /> を <InlineMath math="F" /> の<strong>代数閉包（algebraic closure）</strong>という。代数閉包は <InlineMath math="F" />-同型を除いて一意に定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）<br />
                    存在証明は、集合論における「ツォルンの補題（選択公理）」を用いる高度なものである。<InlineMath math="F[x]" /> のすべての既約多項式の根を一度に添加するような巨大な環を作り、その極大イデアルで割って体を作るという操作を考える。これを可算回繰り返す（または超限帰納法を用いる）ことで、すべての多項式が根を持つ体 <InlineMath math="\bar{F}" /> が構成される。
                </p>
                <p>
                    一意性の証明もツォルンの補題を用いる。2つの代数閉包 <InlineMath math="E" /> と <InlineMath math="E'" /> があったとき、<InlineMath math="F" /> から出発して部分的な同型写像を次々と極大に拡張していくことで、最終的に <InlineMath math="E" /> 全体から <InlineMath math="E'" /> 全体への同型が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                有理数体の代数閉包は、複素数体よりもずっと小さな集合になります。
            </p>

            <ContentBox type="example" title="Example 3.3-2 (有理数体の代数閉包)">
                <p>
                    <InlineMath math="\mathbb{Q}" /> の代数閉包 <InlineMath math="\bar{\mathbb{Q}}" /> は、複素数の中で <InlineMath math="\mathbb{Q}" /> 上代数的な元（代数的数）だけをすべて集めた集合である。
                </p>
                <BlockMath math="\bar{\mathbb{Q}} = \{z \in \mathbb{C} \mid z \text{ は } \mathbb{Q} \text{ 上代数的} \}" />
                <p>
                    <InlineMath math="\bar{\mathbb{Q}}" /> は代数閉体をなすが、<InlineMath math="\mathbb{C}" /> 全体とは一致しない（<InlineMath math="\bar{\mathbb{Q}} \subsetneq \mathbb{C}" />）。なぜなら、<InlineMath math="\pi" /> や <InlineMath math="e" /> のような超越数は <InlineMath math="\bar{\mathbb{Q}}" /> には含まれないからである。<InlineMath math="\mathbb{C}" /> の次元は <InlineMath math="\bar{\mathbb{Q}}" /> 上で無限次元（非可算次元）となる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (代数閉包の役割)">
                <p>
                    代数方程式の根の振る舞いを調べる際、毎回「どの拡大体で考えるべきか」を気にするのは煩雑です。そこで、現代代数学では<strong>あらかじめ固定した 1 つの巨大な代数閉包 <InlineMath math="\bar{F}" /></strong> の中で議論を行うのが標準的なスタイルです。
                </p>
                <p>
                    例えば、分解体や正規拡大を考える際も、「<InlineMath math="\bar{F}" /> の部分体として」根を拾い集めるという視点をとることで、体の包含関係や同型写像の理論が極めて見通しよく整理されます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>すべての多項式が一次式に分解する（すべての根を持つ）体を<strong>代数閉体</strong>という。<InlineMath math="\mathbb{C}" /> はその代表例である。</li>
                    <li>任意の体 <InlineMath math="F" /> は、自分自身を代数的に拡大した最小の代数閉体である<strong>代数閉包 <InlineMath math="\bar{F}" /></strong> を唯一つ（同型を除いて）持つ。</li>
                    <li>以後のガロア理論の展開では、方程式の根はすべてこの代数閉包 <InlineMath math="\bar{F}" /> の中に存在するものとして扱う。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
