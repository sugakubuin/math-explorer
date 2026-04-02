import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_3_5() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「無限個の数を足し合わせる」という操作は、代数的な有限回の足し算の延長ではなく、部分和の数列が「収束するかどうか」という極限の問題に帰着します。本節では級数の収束の定義から出発し、絶対収束の重要性、様々な判定法、そして驚くべき再配列定理までを解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">無限級数の定義</h2>

            <p>
                無限に続く足し算は、「途中で切って計算した途中経過（部分和）」がつくる数列の極限として厳密に定義されます。
            </p>

            <ContentBox type="definition" title="Definition 3.5-1 (無限級数・部分和・収束・発散)">
                <p>
                    実数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> に対し、形式的な和
                </p>
                <BlockMath math="\sum_{n=1}^\infty a_n = a_1 + a_2 + a_3 + \dots" />
                <p className="mt-2">
                    を<strong>無限級数（infinite series）</strong>と呼ぶ。
                    また、第 <InlineMath math="N" /> 項までの有限の和を下のように定義し、これを級数の<strong>第 <InlineMath math="N" /> 部分和（partial sum）</strong>と呼ぶ。
                </p>
                <BlockMath math="S_N = \sum_{n=1}^N a_n = a_1 + a_2 + \dots + a_N" />
                <p className="mt-2">
                    この部分和からなる新しい数列 <InlineMath math="\{S_N\}_{N=1}^\infty" /> が極限 <InlineMath math="S" /> に収束するとき（すなわち <InlineMath math="\lim_{N\to\infty} S_N = S" /> のとき）、元の<strong>無限級数は和 <InlineMath math="S" /> に収束する（converge）</strong>といい、<InlineMath math="S = \sum_{n=1}^\infty a_n" /> と書く。<br />
                    極限値が存在しない場合は、無限級数は<strong>発散する（diverge）</strong>と言う。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">絶対収束と条件収束</h2>

            <p>
                級数の中にプラスとマイナスが混在している場合、プラス同士の和とマイナス同士の和がそれぞれ無限に発散しながらギリギリ相殺して収束しているのか、それとも全体として安全に収束しているのかを区別することが極めて重要です。
            </p>

            <ContentBox type="definition" title="Definition 3.5-2 (絶対収束・条件収束)">
                <p>
                    無限級数 <InlineMath math="\sum_{n=1}^\infty a_n" /> において、各項の絶対値をとって作った正項級数
                    <BlockMath math="\sum_{n=1}^\infty |a_n| = |a_1| + |a_2| + |a_3| + \dots" />
                    が収束するとき、元の級数 <InlineMath math="\sum_{n=1}^\infty a_n" /> は<strong>絶対収束（absolutely convergent）</strong>するという。
                </p>
                <p className="mt-2">
                    一方、元の級数は収束するが、絶対値をとった級数が発散する場合、元の級数を<strong>条件収束（conditionally convergent）</strong>するという。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.5-1 (絶対収束ならば収束する)">
                <p>
                    無限級数が絶対収束するならば、元の無限級数も必ず収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [コーシーの判定条件による証明]">
                <p>
                    <InlineMath math="S_N = \sum_{n=1}^N a_n" />、<InlineMath math="T_N = \sum_{n=1}^N |a_n|" /> とおく。<br />
                    仮定より数列 <InlineMath math="\{T_N\}" /> は収束するため、コーシー列（Proposition 3.3-1）である。すなわち、任意の <InlineMath math="\varepsilon > 0" /> に対してある <InlineMath math="K" /> が存在し、<InlineMath math="m > n \ge K" /> ならば
                </p>
                <BlockMath math="|T_m - T_n| = \left| \sum_{k=n+1}^m |a_k| \right| = \sum_{k=n+1}^m |a_k| < \varepsilon" />
                <p className="mt-2">
                    次に、元の数列 <InlineMath math="\{S_N\}" /> がコーシー列であるかの評価を行う。
                    <BlockMath math="|S_m - S_n| = \left| \sum_{k=n+1}^m a_k \right|" />
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[三角不等式の適用]</p>
                <p className="mt-2">
                    一般の三角不等式の拡張より、和の絶対値は絶対値の和以下である。
                    <BlockMath math="\left| \sum_{k=n+1}^m a_k \right| \le \sum_{k=n+1}^m |a_k|" />
                </p>
                <p className="mt-2">
                    ここで、右辺はまさに <InlineMath math="|T_m - T_n|" /> であり、<InlineMath math="\varepsilon" /> 未満であった。したがって
                    <BlockMath math="|S_m - S_n| \le \sum_{k=n+1}^m |a_k| < \varepsilon" />
                </p>
                <p className="mt-2">
                    この結果は、元の部分和数列 <InlineMath math="\{S_N\}" /> もコーシー列であることを示している。実数の完備性（Theorem 3.3-1）によりコーシー列は必ず収束するため、元の級数は収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束判定法（比較・比・根・交代級数）</h2>

            <p>
                各項が正である「正項級数（<InlineMath math="a_n \ge 0" />）」の場合、部分和は単調増加になるため「上に有界であるかどうか」だけで収束が判定できます（単調収束定理）。この性質を用いた強力な判定法をいくつか紹介します。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-2 (比較・比・根判定法)">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[1. 比較判定法（Comparison Test）]</p>
                <p>
                    2つの正項級数 <InlineMath math="\sum a_n" /> と <InlineMath math="\sum b_n" /> について、ある番号以降で <InlineMath math="0 \le a_n \le c \cdot b_n" /> (<InlineMath math="c > 0" />) が成り立つとする。
                    このとき：<br />
                    「<InlineMath math="\sum b_n" /> が収束するなら <InlineMath math="\sum a_n" /> も収束する」<br />
                    「<InlineMath math="\sum a_n" /> が発散するなら <InlineMath math="\sum b_n" /> も発散する」
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[2. ダランベールの比判定法（Ratio Test）]</p>
                <p>
                    正項級数 <InlineMath math="\sum a_n" /> において、比の極限 <InlineMath math="\lim_{n\to\infty} \frac{a_{n+1}}{a_n} = L" /> が存在するとき：<br />
                    <InlineMath math="L < 1 \implies" /> 収束する<br />
                    <InlineMath math="L > 1 \implies" /> 発散する（<InlineMath math="L = 1" /> のときは判定保留）
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[3. コーシーの根判定法（Root Test）]</p>
                <p>
                    正項級数 <InlineMath math="\sum a_n" /> において、極限 <InlineMath math="\limsup_{n\to\infty} \sqrt[n]{a_n} = R" /> または <InlineMath math="\lim_{n\to\infty} \sqrt[n]{a_n} = R" /> について：<br />
                    <InlineMath math="R < 1 \implies" /> 収束する<br />
                    <InlineMath math="R > 1 \implies" /> 発散する（<InlineMath math="R = 1" /> のときは判定保留）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [比較・比判定法の証明概要]">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[比較判定法の証明]</p>
                <p className="mt-2">
                    <InlineMath math="S_N = \sum a_n, T_N = \sum b_n" /> とする。<InlineMath math="\sum b_n" /> が収束するならその部分和は極限 <InlineMath math="T" /> を持ち、単調増加なので <InlineMath math="T_N \le T" />。<br />
                    <InlineMath math="S_N \le c \cdot T_N \le c \cdot T" /> となり数列 <InlineMath math="S_N" /> は上に有界。単調収束定理により <InlineMath math="S_N" /> は収束する。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[比判定法の証明]</p>
                <p className="mt-2">
                    <InlineMath math="L < 1" /> のとき、<InlineMath math="L < r < 1" /> となる実数 <InlineMath math="r" /> を選ぶ。極限の定義から、ある <InlineMath math="N" /> 以降では比が <InlineMath math="\frac{a_{n+1}}{a_n} \le r" /> 。すなわち <InlineMath math="a_{n+1} \le r a_n" />。<br />
                    これを連鎖させると、<InlineMath math="N" /> 以降の項は等比数列 <InlineMath math="a_N \cdot r^{n-N}" /> に抑え込まれる。等比級数 <InlineMath math="\sum r^n" /> は <InlineMath math="|r| < 1" /> で収束するため、比較判定法により <InlineMath math="\sum a_n" /> も収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                プラスマイナスが交互に現れる「交代級数」に対しても、有用な判定法があります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-3 (ライプニッツの定理：交代級数の収束判定)">
                <p>
                    符号が交互に入れ替わる級数（交代級数）
                    <BlockMath math="\sum_{n=1}^\infty (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \dots \quad (a_n > 0)" />
                    について、数列 <InlineMath math="a_n" /> が<strong>単調減少（<InlineMath math="a_{n+1} \le a_n" />）</strong>かつ<strong><InlineMath math="\lim_{n\to\infty} a_n = 0" /></strong>を満たすならば、この級数は収束する。
                </p>
                <p className="mt-2">
                    （例：調和級数 <InlineMath math="\sum \frac{1}{n}" /> は発散するが、交代調和級数 <InlineMath math="\sum \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} \dots" /> はライプニッツの条件を満たすため収束する。なおこれは「条件収束」の一例である。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [部分和の単調性と有界性]">
                <p>
                    偶数番目の部分和 <InlineMath math="S_{2m}" /> と奇数番目の部分和 <InlineMath math="S_{2m-1}" /> に分けて考える。
                </p>
                <p className="mt-2">
                    <InlineMath math="S_{2m} = (a_1 - a_2) + (a_3 - a_4) + \dots + (a_{2m-1} - a_{2m})" /><br />
                    仮定より <InlineMath math="a_k - a_{k+1} \ge 0" /> であるため、偶数部分和の列は<strong>単調増加</strong>である。
                </p>
                <p className="mt-2">
                    一方、偶数部分和を別の括りでまとめる。
                    <BlockMath math="\begin{aligned} S_{2m} &= a_1 - (a_2 - a_3) - (a_4 - a_5) - \\ 
                    &\quad \dots - (a_{2m-2} - a_{2m-1}) - a_{2m} \end{aligned}" />
                    括弧の中身はすべて正であるから、全体として <InlineMath math="S_{2m} < a_1" />。上に有界な単調増加列であるため、単調収束定理より極限 <InlineMath math="S" /> を持つ（<InlineMath math="\lim_{m\to\infty} S_{2m} = S" />）。
                </p>
                <p className="mt-2">
                    奇数部分和について調べる。<InlineMath math="S_{2m+1} = S_{2m} + a_{2m+1}" /> である。<br />
                    <InlineMath math="m \to \infty" /> とすると、<InlineMath math="S_{2m} \to S" /> であり、仮定から <InlineMath math="a_{2m+1} \to 0" /> なので、<InlineMath math="\lim_{m\to\infty} S_{2m+1} = S + 0 = S" />。<br />
                    偶数も奇数も同じ値 <InlineMath math="S" /> に収束するため、数列全体 <InlineMath math="S_n" /> は <InlineMath math="S" /> に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマンの再配列定理</h2>

            <p>
                絶対収束と条件収束の区別がいかに重要かを示す、解析学で最も美しく奇妙な定理の一つを紹介します。「有限個の和は順序を変えても不変（交換法則）」という常識は、条件収束する無限級数では全く通用しません。
            </p>

            <ContentBox type="theorem" title="Theorem 3.5-4 (リーマンの再配列定理)">
                <p>
                    <InlineMath math="\sum a_n" /> が<strong>条件収束</strong>する級数であるとする。<br />
                    このとき、任意の実数 <InlineMath math="M" />（または <InlineMath math="\pm\infty" />）に対して、元の級数の「足す順番」を適当に入れ替える（項の再配列を行う）ことで、その入れ替えた級数を<strong>ぴったり <InlineMath math="M" /> に収束させる（または発散させる）ことができる</strong>。
                </p>
                <p className="mt-2">
                    （逆に、<strong>絶対収束</strong>する級数は、どのように足す順番を変えようと、元の収束先に正確に一致することが保障されている。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [証明の概略]">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 1: プラスの項とマイナスの項の分離]</p>
                <p className="mt-2">
                    元の数列 <InlineMath math="\{a_n\}" /> から、正の項だけを集めた数列 <InlineMath math="\{p_n\}" />（<InlineMath math="a_n \ge 0" />）と、負の項の絶対値だけを集めた数列 <InlineMath math="\{q_n\}" />（<InlineMath math="a_n < 0" /> のときの <InlineMath math="-a_n" />）に分ける。
                </p>
                <p className="mt-2">
                    級数が「条件収束し、絶対収束しない」という仮定から、実は <InlineMath math="\sum p_n" /> も <InlineMath math="\sum q_n" /> も単独ではともに <InlineMath math="+\infty" /> に発散しなければならない。
                    （もし両方収束するなら絶対和 <InlineMath math="\sum (p_n + q_n)" /> が収束して絶対収束になってしまう。片方だけ発散なら元の級数 <InlineMath math="\sum (p_n - q_n)" /> も発散してしまうため。）
                    また、元の級数が収束することから、一般項は <InlineMath math="\lim a_n = 0" /> であり、当然 <InlineMath math="p_n \to 0" /> かつ <InlineMath math="q_n \to 0" /> である。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: 目標値 M へのコントロール]</p>
                <p className="mt-2">
                    目標値 <InlineMath math="M" /> に対して、以下のような「再配列」アルゴリズムを実行する。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                    <li>まず、正の項 <InlineMath math="p_1, p_2, \dots" /> を順番に足し続ける。正の級数は <InlineMath math="\infty" /> に発散するので、いつかは和が目標値 <InlineMath math="M" /> をわずかに越える。越えた瞬間に足すのをやめる。</li>
                    <li>次に、そこから負の項 <InlineMath math="-q_1, -q_2, \dots" /> を順番に引き続ける。負の級数も単独で <InlineMath math="-\infty" /> に発散するため、いつかは和が目標値 <InlineMath math="M" /> をわずかに下回る。下回った瞬間に引くのをやめる。</li>
                    <li>余っている正の項をまた足し続け、<InlineMath math="M" /> を越えたらやめ、負の項を引いて <InlineMath math="M" /> を下回ったらやめる…という操作を繰り返す。</li>
                </ol>
                <p className="mt-2">
                    この振動幅（<InlineMath math="M" /> を越えた直後や下回った直後の誤差）の絶対値は、直近に足し引きした項の大きさ（<InlineMath math="p_k" /> または <InlineMath math="q_k" />）以内に収まる。
                    <InlineMath math="k \to \infty" /> で一般項は <InlineMath math="0" /> に収束する（<InlineMath math="p_k \to 0, q_k \to 0" />）ので、この振動幅も <InlineMath math="0" /> に収束する。
                </p>
                <p className="mt-2">
                    すなわち、この特定の順序で組み直された級数の部分和は、狙った値 <InlineMath math="M" /> へと正確に収束していく。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§3.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限級数の収束は「部分和の極限」として定義される。</li>
                    <li>各項の絶対値をとっても収束するとき<strong>絶対収束</strong>と呼び、絶対値をつけると発散するが元通りなら収束するとき<strong>条件収束</strong>と呼ぶ。</li>
                    <li>絶対収束するならば元の級数も必ず収束し、順序をどう入れ替えても値は変わらないという強固な性質を持つ。</li>
                    <li>条件収束する級数は、足す順番を変えるとどんな値にでも収束させられる（リーマンの再配列定理）という不安定さを持つため、取り扱いには注意が必要である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
