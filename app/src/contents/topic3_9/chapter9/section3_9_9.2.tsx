import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NoetherianRings() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ昇鎖条件（ACC）、すなわち「すべてのイデアルが有限生成である」という性質を満たす環は、現代代数学において非常に重要な対象です。本節では、そのような環を「ネーター環」として定義し、その基本的な性質を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ネーター環の定義と例</h2>

            <p>
                まずはネーター環の定義から確認します。この名前は、抽象代数学の発展に多大な貢献をした数学者エミー・ネーター（Emmy Noether）に由来します。
            </p>

            <ContentBox type="definition" title="Definition 9.2-1 (ネーター環)">
                <p>
                    昇鎖条件（ACC）を満たす、あるいは同値な条件としてすべてのイデアルが有限生成である可換環のことを、<strong>ネーター環（Noetherian ring）</strong>という。
                </p>
            </ContentBox>

            <p>
                これまで私たちが扱ってきた多くの環は、実はネーター環です。具体的な例をいくつか見てみましょう。
            </p>

            <ContentBox type="example" title="Example 9.2-1 (Z はネーター環)">
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> はネーター環である。<InlineMath math="\mathbb{Z}" /> は単項イデアル整域（PID）であり、すべてのイデアルが 1 つの元で生成される（主イデアルである）ため、当然有限生成の条件を満たす。
                </p>
                <p>
                    また、剰余環 <InlineMath math="\mathbb{Z}/n\mathbb{Z}" /> もネーター環である。これは有限環であるため、イデアルの数自体が有限であり、自動的に昇鎖条件（ACC）が成立する。
                </p>
            </ContentBox>

            <p>
                体もまた、最も単純な構造を持つネーター環の一つです。
            </p>

            <ContentBox type="example" title="Example 9.2-2 (体はネーター環)">
                <p>
                    任意の体 <InlineMath math="F" /> はネーター環である。体 <InlineMath math="F" /> のイデアルは自明な <InlineMath math="\{0\}" /> と <InlineMath math="F" /> 自身のみであるため、イデアルの昇鎖はすぐに停止し、ACC が自明に成立する。
                </p>
                <p>
                    また、有理数体上の多変数多項式環 <InlineMath math="\mathbb{Q}[x, y]" /> もネーター環となる。これは次節で学ぶ「ヒルベルトの基底定理」から導かれる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ネーター環の基本性質</h2>

            <p>
                ネーター環から新しい環を構成したとき、そのネーター性がどのように遺伝するかを見ていきましょう。剰余環や局所化といった基本的な構成操作は、ネーター性を保存します。
            </p>

            <ContentBox type="proposition" title="Proposition 9.2-1 (ネーター環の剰余環・局所化はネーター)">
                <p>
                    <InlineMath math="R" /> をネーター環とする。
                </p>
                <ol className="list-decimal list-inside">
                    <li>任意のイデアル <InlineMath math="I" /> に対して、剰余環 <InlineMath math="R/I" /> もネーター環である。</li>
                    <li>任意の積閉集合 <InlineMath math="S" /> に対して、局所化 <InlineMath math="S^{-1}R" /> もネーター環である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 剰余環の場合：</strong><br />
                    剰余環 <InlineMath math="R/I" /> におけるイデアルの昇鎖 <InlineMath math="\bar{J}_1 \subset \bar{J}_2 \subset \cdots" /> を考える。対応定理（Theorem 2.6-1）により、これらは <InlineMath math="R" /> の <InlineMath math="I" /> を含むイデアルの昇鎖 <InlineMath math="J_1 \subset J_2 \subset \cdots" /> に対応する。<InlineMath math="R" /> はネーター環なので、この <InlineMath math="R" /> での昇鎖はある <InlineMath math="N" /> で停止する（<InlineMath math="J_n = J_N" />）。したがって、<InlineMath math="R/I" /> での昇鎖も停止し、<InlineMath math="R/I" /> はネーター環である。
                </p>
                <p>
                    <strong>2. 局所化の場合：</strong><br />
                    局所化 <InlineMath math="S^{-1}R" /> の任意のイデアルは、<InlineMath math="R" /> のあるイデアル <InlineMath math="J \subset R" /> を用いて <InlineMath math="S^{-1}J" /> の形で書けることが知られている。<InlineMath math="S^{-1}R" /> におけるイデアルの昇鎖 <InlineMath math="K_1 \subset K_2 \subset \cdots" /> を考える。各 <InlineMath math="K_i" /> に対して、<InlineMath math="R" /> への引き戻し <InlineMath math="J_i = \{ a \in R \mid a/1 \in K_i \}" /> を考えると、これらは <InlineMath math="R" /> のイデアルの昇鎖 <InlineMath math="J_1 \subset J_2 \subset \cdots" /> となる。<InlineMath math="R" /> のネーター性よりこれは停止し、<InlineMath math="K_i = S^{-1}J_i" /> であることから元の昇鎖も停止する。ゆえに <InlineMath math="S^{-1}R" /> もネーター環である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この命題を利用すると、様々な環がネーター環であることを簡単に証明できます。
            </p>

            <ContentBox type="example" title="Example 9.2-3 (代数拡大のネーター性)">
                <p>
                    環 <InlineMath math="\mathbb{Z}[\sqrt{5}]" /> はネーター環である。
                </p>
                <p>
                    なぜなら、<InlineMath math="\mathbb{Z}[\sqrt{5}] \cong \mathbb{Z}[x]/(x^2-5)" /> と表すことができ、<InlineMath math="\mathbb{Z}" /> はネーター環であるため、次節で学ぶ「ヒルベルトの基底定理」により多項式環 <InlineMath math="\mathbb{Z}[x]" /> もネーター環となる。そして上の命題により、その剰余環である <InlineMath math="\mathbb{Z}[x]/(x^2-5)" /> もまたネーター環となるからである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (ネーター性の重要性)">
                <p>
                    イデアルの有限生成性は、無限のプロセスを有限のステップに帰着させる強力なツールです。特に代数幾何学においては、幾何学的な対象を有限個の方程式で記述できることを保証する基盤となります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ネーター環とは、昇鎖条件（ACC）を満たす、すなわちすべてのイデアルが有限生成である可換環のことである。</li>
                    <li>単項イデアル整域（PID）や体はネーター環である。</li>
                    <li>ネーター環の剰余環や局所化によって得られる環も、再びネーター環となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
