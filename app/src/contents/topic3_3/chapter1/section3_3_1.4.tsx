import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LebesgueMeasureConstruction() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までの抽象的な議論を実数直線 <InlineMath math="\mathbb{R}" /> に適用することで、区間の長さの概念を一般の集合へと拡張した「ルベーグ測度」を構成できます。
                ルベーグ測度は、解析学において最も標準的で重要な測度です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実数上のルベーグ測度の構成</h2>

            <p>
                まず、任意の集合を「開区間の列」で覆い、それらの長さの合計の下限を考えることで、外測度を定義します。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (ルベーグ外測度)">
                <p>
                    集合 <InlineMath math="A \subset \mathbb{R}" /> に対して、その<b>ルベーグ外測度</b> <InlineMath math="\lambda^*(A)" /> を以下のように定義する。
                </p>
                <BlockMath math="\lambda^*(A) = \inf\left\{\sum_{n=1}^\infty |I_n| \;\middle|\; A \subset \bigcup_{n=1}^\infty I_n,\; I_n \text{ は開区間}\right\}" />
                <p className="mt-4">
                    ここで <InlineMath math="|I_n|" /> は開区間 <InlineMath math="I_n = (a_n, b_n)" /> の長さ <InlineMath math="b_n - a_n" /> を表す。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1 (一点集合の外測度)">
                <p>
                    一点集合 <InlineMath math="A = \{x\}" /> を考える。任意の <InlineMath math="\varepsilon > 0" /> に対し、開区間 <InlineMath math="I = (x - \varepsilon/2, x + \varepsilon/2)" /> は <InlineMath math="A" /> を被覆しており、その長さは <InlineMath math="\varepsilon" /> である。
                </p>
                <p className="mt-4">
                    したがって、<InlineMath math="0 \leq \lambda^*(\{x\}) \leq \varepsilon" /> が任意の <InlineMath math="\varepsilon" /> で成り立つため、<InlineMath math="\lambda^*(\{x\}) = 0" /> となる。同様の議論で、可算集合（有理数集合など）のルベーグ外測度も 0 になることがわかります。
                </p>
            </ContentBox>

            <p>
                このルベーグ外測度に対して、前節で学んだカラテオドリの可測条件を適用することで、測度としての性質を持つ集合族（ルベーグ可測集合族）が得られます。
            </p>

            <ContentBox type="theorem" title="Theorem 1.4-1 (ルベーグ測度の存在)">
                <p>
                    ルベーグ外測度 <InlineMath math="\lambda^*" /> から定まるカラテオドリ可測集合全体 <InlineMath math="\mathcal{L}" /> は、以下の性質を持つ。
                </p>
                <ul className="list-decimal list-inside space-y-2 mt-4">
                    <li><InlineMath math="\mathcal{L}" /> はボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> を含む <InlineMath math="\sigma" />-加法族である。</li>
                    <li><InlineMath math="\lambda^*" /> の <InlineMath math="\mathcal{L}" /> への制限 <InlineMath math="\lambda = \lambda^*|_{\mathcal{L}}" /> は測度になる。</li>
                    <li>開区間 <InlineMath math="(a, b)" /> に対して、<InlineMath math="\lambda((a, b)) = b - a" /> となる。</li>
                </ul>
                <p className="mt-4">
                    この <InlineMath math="\lambda" /> を <InlineMath math="\mathbb{R}" /> 上の<b>ルベーグ測度</b>、<InlineMath math="\mathcal{L}" /> の元を<b>ルベーグ可測集合</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    1. <b><InlineMath math="\lambda^*" /> が外測度であること</b>: 定義より <InlineMath math="\lambda^*(\emptyset)=0" /> と単調性は明らかである。劣 <InlineMath math="\sigma" />-加法性は、各集合 <InlineMath math="A_n" /> を被覆する開区間列を調整して全体の和を考えることで示される。
                </p>
                <p>
                    2. <b>カラテオドリの拡張定理の適用</b>: <InlineMath math="\lambda^*" /> が外測度であることから、Theorem 1.3-1 により <InlineMath math="\mathcal{L}" /> は <InlineMath math="\sigma" />-加法族であり、<InlineMath math="\lambda" /> は測度となる。
                </p>
                <p>
                    3. <b>ボレル集合族の包含と区間の測度</b>: 任意の開区間 <InlineMath math="I = (a, b)" /> がカラテオドリの可測条件を満たすことを示す。任意の <InlineMath math="E \subset \mathbb{R}" /> に対し、<InlineMath math="\lambda^*(E) \geq \lambda^*(E \cap I) + \lambda^*(E \cap I^c)" /> を示せばよい（逆は劣 <InlineMath math="\sigma" />-加法性より自明）。これは <InlineMath math="E" /> を被覆する任意の開区間列 <InlineMath math="\{J_n\}" /> に対し、
                    <BlockMath math="\sum |J_n| \geq \sum (|J_n \cap I| + |J_n \cap I^c|)" />
                    を導くことで得られる。開集合系である開区間全体が可測であるため、それらから生成されるボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> も <InlineMath math="\mathcal{L}" /> に含まれる。
                </p>
                <p>
                    4. <b>一致の確認</b>: 構成方法より <InlineMath math="\lambda((a, b)) \leq b - a" /> は自明である。逆向きの不等式はハイネ・ボレルの被覆定理を用いることで示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-3 (ルベーグ測度の具体例)">
                <ul className="list-disc list-inside space-y-2">
                    <li><b>一点集合</b>: <InlineMath math="\lambda(\{x\}) = 0" />。</li>
                    <li><b>有理数集合</b>: <InlineMath math="\mathbb{Q}" /> は可算集合なので、<InlineMath math="\lambda(\mathbb{Q} \cap [0, 1]) = 0" />。</li>
                    <li><b>区間の測度</b>: 閉区間も開区間も、ルベーグ測度はその長さ <InlineMath math="b - a" /> に一致する。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">測度の完備性</h2>

            <p>
                測度論において、非常に小さい集合（測度 0 の集合）の細部を気にしなくてよい性質を完備性と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (完備測度)">
                <p>
                    測度空間 <InlineMath math="(X, \mathcal{A}, \mu)" /> において、<InlineMath math="\mu(N) = 0" /> となる集合 <InlineMath math="N \in \mathcal{A}" /> （零集合）の任意の部分集合が再び <InlineMath math="\mathcal{A}" /> に属するとき、この測度空間（または測度）を<b>完備</b> (complete) であるという。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-2 (零集合の部分集合)">
                <p>
                    ルベーグ測度において、1点集合 <InlineMath math="\{x\}" /> は測度 0 です。完備性により、その任意の部分集合（といっても空集合か自分自身のみですが）も可測であることが保証されます。
                </p>
                <p className="mt-4">
                    より複雑な例として、測度 0 の非可算集合であるカントール集合 <InlineMath math="C" /> を考えると、その<b>すべての部分集合</b>（集合演算で構成できないような極めて複雑なものも含め）がルベーグ可測となり、その測度は 0 と定義されます。
                </p>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 1.4-1 (ルベーグ測度の完備性)">
                <p>
                    ルベーグ測度 <InlineMath math="\lambda" /> は完備である。すなわち、ルベーグ測度 0 の集合の部分集合は、常にルベーグ可測であり、その測度も 0 となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="N" /> をルベーグ測度 0 の集合とし、<InlineMath math="A \subset N" /> とする。
                    外測度の単調性より <InlineMath math="0 \leq \lambda^*(A) \leq \lambda^*(N) = 0" /> なので、<InlineMath math="\lambda^*(A) = 0" /> である。
                </p>
                <p>
                    次に、<InlineMath math="A" /> が可測条件を満たすことを示す。任意の <InlineMath math="E \subset \mathbb{R}" /> に対して、単調性より
                    <BlockMath math="\begin{aligned} \mu^*(E \cap A) + \mu^*(E \cap A^c) &\leq \mu^*(A) + \mu^*(E) \\ &= 0 + \mu^*(E) = \mu^*(E) \end{aligned}" />
                    が成り立つ。一方、劣 <InlineMath math="\sigma" />-加法性より常に逆向きの不等式も成り立つため、等号が成立し、<InlineMath math="A" /> は可測である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                測度が 0 であること（薄さ）と、集合の元がどれだけ密にあるか（濃度）は異なる問題です。
            </p>

            <ContentBox type="example" title="Example 1.4-4 (カントール集合)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> から、三進展開において「1」の桁を持つ実数を除いて得られる<b>カントール集合</b>を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>カントール集合のルベーグ測度は 0 である（零集合）。</li>
                    <li>しかし、カントール集合は実数全体と同じ濃度（非可算濃度）を持つ。</li>
                </ul>
                <p className="mt-4">
                    これは、ルベーグ測度が「長さ」という幾何学的な意味で 0 であっても、集合としては非常に複雑な構造を持ち得ることを示しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>ルベーグ外測度</b>は開区間の被覆によって定義される。</li>
                    <li><b>ルベーグ測度</b>は外測度からカラテオドリの条件で切り出された測度で、区間の長さを保存する。</li>
                    <li>ルベーグ測度は<b>完備</b>であり、零集合の部分集合はすべて可測かつ測度 0 である。</li>
                    <li>カントール集合のように、測度が 0 であっても非可算な濃度を持つ集合が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
