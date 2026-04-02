import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceInProbability() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                概収束が「標本点ごとに値が収束する」という強い条件であったのに対し、本節で扱う「確率収束（convergence in probability）」は、
                「極限から離れる標本集合の確率がゼロに近づく」という、より緩やかな条件に基づいた収束概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">確率収束の定義</h2>

            <p className="leading-relaxed">
                確率収束は、統計学や大数の弱法則において中心的な役割を果たす概念です。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (確率収束)">
                <p>
                    確率空間 <InlineMath math="(\Omega, \mathcal{F}, P)" /> 上の確率変数列 <InlineMath math="\{X_n\}" /> が、任意の <InlineMath math="\varepsilon > 0" /> に対して次を満たすとき、
                    確率変数 <InlineMath math="X" /> に<b>確率収束</b>（convergence in probability）するという：
                    <BlockMath math="\lim_{n \to \infty} P(|X_n - X| > \varepsilon) = 0" />
                    これを <InlineMath math="X_n \xrightarrow{P} X" /> または <InlineMath math="X_n \xrightarrow{p} X" /> と表記する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                直感的には、標本点ごとに極限値へ向かう必要はありませんが、極限値から一定以上離れた点（外れ値）が占める割合が徐々に消えていくことを要請しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">概収束との関係</h2>

            <p className="leading-relaxed">
                概収束と確率収束の間には、明確な強弱の関係があります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (概収束と確率収束の関係)">
                <p>
                    概収束するならば、確率収束する：
                    <BlockMath math="X_n \to X \text{ a.s.} \implies X_n \xrightarrow{P} X" />
                    逆は一般には成立しない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    概収束の同値条件 <InlineMath math="P\left(\bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}\right) \to 0 \quad (n \to \infty)" /> を利用する。
                    包含関係
                    <BlockMath math="\{|X_n - X| > \varepsilon\} \subset \bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}" />
                    より、測度の単調性から
                    <BlockMath math="P(|X_n - X| > \varepsilon) \leq P\left(\bigcup_{k=n}^\infty \{|X_k - X| > \varepsilon\}\right)" />
                    が成り立つ。右辺は <InlineMath math="n \to \infty" /> で <InlineMath math="0" /> に収束するため、左辺も <InlineMath math="0" /> に向かう。
                    よって確率収束の定義が満たされる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                §6.1 で見た「型渡り関数列」は、この定理の「逆が成立しない」ことを示す典型的な例です。
                また、確率収束には概収束の「種」が含まれていることを示す重要な定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-2 (確率収束の部分列定理)">
                <p>
                    <InlineMath math="X_n \xrightarrow{P} X" /> であるならば、ある部分列 <InlineMath math="\{X_{n_k}\}" /> を選ぶことで
                    <BlockMath math="X_{n_k} \to X \quad \text{ a.s.} \quad (k \to \infty)" />
                    とすることができる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    各 <InlineMath math="k = 1, 2, \ldots" /> に対して、次を満たす自然数 <InlineMath math="n_k" /> を順に選ぶ：
                    <BlockMath math="P(|X_{n_k} - X| > 1/k) < \frac{1}{2^k}" />
                    このように選んだ部分列に対して、
                    <BlockMath math="\sum_{k=1}^\infty P(|X_{n_k} - X| > 1/k) < \sum_{k=1}^\infty \frac{1}{2^k} = 1 < \infty" />
                    である。判定条件（Theorem 6.1-1）を適用すると、<InlineMath math="X_{n_k} \to X \text{ a.s.}" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark: 確率収束の実用性">
                <p>
                    確率収束は、大数の弱法則において「標本平均が真の期待値に近づく」という性質として現れます。
                    a.s. 収束よりも条件が緩和されているため、より広範な条件下で収束を議論することができ、
                    特に統計量の推測精度を確認する際に極めて実用的です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>確率収束 <InlineMath math="X_n \xrightarrow{P} X" /> は、極限から離れた外れ値の出現確率がゼロに収束することを意味する。</li>
                    <li>概収束（a.s.）は確率収束より強い概念であり、包含関係が成立する。</li>
                    <li>確率収束する列からは、必ず概収束する部分列を取り出すことができる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
