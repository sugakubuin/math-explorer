import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_3_4() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数列が収束しない（振動する）場合でも、その数列が「最終的にどの範囲にばらついているか」を評価したいことが多々あります。そのための道具が「上極限（limsup）」と「下極限（liminf）」です。実数の完備性（上限公理）により、有界な数列であれば<strong>振動していても必ず上極限と下極限を持ちます</strong>。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">上極限と下極限の定義</h2>

            <p>
                上極限は「波の山（最大値）が最終的などこに落ち着くか」、下極限は「波の谷（最小値）が最終的にどこに落ち着くか」を厳密に定めたものです。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (上極限と下極限)">
                <p>
                    有界な実数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> を考える。
                    まず、第 <InlineMath math="k" /> 項以降の「上限」と「下限」を用いて新しい数列 <InlineMath math="\{M_k\}" />, <InlineMath math="\{m_k\}" /> を次のように定義する。
                </p>
                <BlockMath math="M_k = \sup_{n \ge k} a_n = \sup \{a_k, a_{k+1}, a_{k+2}, \dots\}" />
                <BlockMath math="m_k = \inf_{n \ge k} a_n = \inf \{a_k, a_{k+1}, a_{k+2}, \dots\}" />
                <p className="mt-2">
                    このとき、数列 <InlineMath math="\{M_k\}" /> は単調減少、<InlineMath math="\{m_k\}" /> は単調増加であり、いずれも有界であるため単調収束定理により極限を持つ。この極限をそれぞれ<strong>上極限（limit superior）</strong>、<strong>下極限（limit inferior）</strong>と呼ぶ。
                </p>
                <BlockMath math="\limsup_{n\to\infty} a_n = \varlimsup_{n\to\infty} a_n = \lim_{k\to\infty} M_k = \lim_{k\to\infty} \left( \sup_{n \ge k} a_n \right)" />
                <BlockMath math="\liminf_{n\to\infty} a_n = \varliminf_{n\to\infty} a_n = \lim_{k\to\infty} m_k = \lim_{k\to\infty} \left( \inf_{n \ge k} a_n \right)" />
            </ContentBox>

            <p>
                <InlineMath math="M_k" /> は「項が進むにつれて考慮する範囲が狭まる」ため、最大値（上限）はどんどん小さくなるか維持される（単調減少）性質を持ちます。同様に <InlineMath math="m_k" /> は「一番深い谷」が除外される可能性があるため、徐々に突き上げられ単調増加します。これが単調収束定理からの「確実な収束」を保証する仕掛けです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本性質</h2>

            <p>
                上極限と下極限の間の大小関係、および「集積点との関係」を示します。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 (上極限・下極限の基本性質)">
                <p>
                    有界な実数列 <InlineMath math="\{a_n\}" /> について、以下の性質が成り立つ。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>(1) <strong>大小関係</strong>：常に <InlineMath math="\liminf_{n\to\infty} a_n \le \limsup_{n\to\infty} a_n" /></li>
                    <li>(2) <strong>集積点との関係</strong>：上極限は数列の「最大の集積点」、下極限は「最小の集積点」である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof [(1) 大小関係の証明]">
                <p>
                    任意の自然数 <InlineMath math="k" /> に対して、上限の定義から当然
                    <BlockMath math="\inf_{n \ge k} a_n \le a_k \le \sup_{n \ge k} a_n" />
                    が成り立つ。すなわち <InlineMath math="m_k \le a_k \le M_k" /> であり、当然 <InlineMath math="m_k \le M_k" /> である。
                </p>
                <p className="mt-2">
                    極限をとってもこの大小関係は保存されるため、
                    <BlockMath math="\lim_{k\to\infty} m_k \le \lim_{k\to\infty} M_k" />
                    となり、<InlineMath math="\liminf a_n \le \limsup a_n" /> が従う。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束との強力な同値条件</h2>

            <p>
                上極限と下極限という強力な挟み撃ちの道具を用いると、点列が収束するための必要十分条件を、極めてシンプルに表現することができます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.4-1 (数列が収束する同値条件)">
                <p>
                    有界な実数列 <InlineMath math="\{a_n\}" /> がある実数 <InlineMath math="\alpha" /> に収束するための必要十分条件は、上極限と下極限が一致することである。
                </p>
                <BlockMath math="\lim_{n\to\infty} a_n = \alpha \iff \limsup_{n\to\infty} a_n = \liminf_{n\to\infty} a_n = \alpha" />
            </ContentBox>

            <ContentBox type="proof" title="Proof [必要十分の証明]">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[<InlineMath math="\implies" /> の証明（収束するなら一致）]</p>
                <p className="mt-2">
                    <InlineMath math="a_n \to \alpha" /> と仮定する。<br />
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="N" /> が存在して <InlineMath math="n \ge N \implies \alpha - \varepsilon < a_n < \alpha + \varepsilon" /> 。
                </p>
                <p className="mt-2">
                    <InlineMath math="k \ge N" /> なる任意の <InlineMath math="k" /> をとる。 <InlineMath math="n \ge k" /> となる全ての項 <InlineMath math="a_n" /> は <InlineMath math="[\alpha-\varepsilon, \alpha+\varepsilon]" /> の範囲に収まっている。
                    よって、その上限 <InlineMath math="M_k" /> と下限 <InlineMath math="m_k" /> も同じ範囲に収まらなければならない。
                    <BlockMath math="\alpha - \varepsilon \le m_k \le M_k \le \alpha + \varepsilon" />
                </p>
                <p className="mt-2">
                    <InlineMath math="k \to \infty" /> の極限をとれば、
                    <BlockMath math="\alpha - \varepsilon \le \liminf_{n\to\infty} a_n \le \limsup_{n\to\infty} a_n \le \alpha + \varepsilon" />
                </p>
                <p className="mt-2">
                    <InlineMath math="\varepsilon" /> は任意なので、<InlineMath math="\alpha \le \liminf a_n \le \limsup a_n \le \alpha" /> となり、両極限は <InlineMath math="\alpha" /> に一致する。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[<InlineMath math="\impliedby" /> の証明（一致するなら収束）]</p>
                <p className="mt-2">
                    上極限と下極限がともに等しい値 <InlineMath math="\alpha" /> を持つと仮定する。この極限値は <InlineMath math="M_k" /> と <InlineMath math="m_k" /> の極限である。
                </p>
                <p className="mt-2">
                    任意の自然数 <InlineMath math="n" /> について、以下の関係が常に成り立つ。
                    <BlockMath math="m_n = \inf_{k \ge n} a_k \le a_n \le \sup_{k \ge n} a_k = M_n" />
                    すなわち、
                    <BlockMath math="m_n \le a_n \le M_n" />
                </p>
                <p className="mt-2">
                    ここで <InlineMath math="n \to \infty" /> とすると、仮定より左辺 <InlineMath math="m_n \to \alpha" /> かつ右辺 <InlineMath math="M_n \to \alpha" /> となる。<br />
                    したがって、「はさみうちの原理」により、真ん中に挟まれた数列 <InlineMath math="a_n" /> も極限 <InlineMath math="\alpha" /> に収束する。
                    <BlockMath math="\lim_{n\to\infty} a_n = \alpha" />
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>上極限・下極限</strong>は、有界な数列であれば収束しなくても必ず存在する安定した指標である。</li>
                    <li>上極限は最大の集積点、下極限は最小の集積点を表す。常に <InlineMath math="\liminf \le \limsup" /> が成り立つ。</li>
                    <li><strong>はさみうちによる収束判定</strong>：数列が収束することと、上極限と下極限がピタリと一致することは完全に同値（同じ意味）である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
