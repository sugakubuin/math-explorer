import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_2_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で導入した「上限公理」は、実数の完備性を最も端的に表す公理です。しかし、直感的な集合の境界の言葉だけでなく、「極限」の言葉を使って完備性を表現する方が、解析学の多くの証明において扱いやすい場合があります。
                本節では、上限公理と完全に同値（互いに証明可能）でありながら、見た目や使い所が異なる3つの強力な定理を証明していきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">単調収束定理</h2>

            <p>
                「どんどん増え続けるが、決してある天井（上界）を越えられない数列は、必ずどこかに収束する」という直感的に非常に分かりやすい定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (単調収束定理)">
                <p>
                    実数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> が<strong>上に有界な単調増加列</strong>であるとする。（すなわち <InlineMath math="a_1 \le a_2 \le a_3 \le \dots" /> かつ、ある <InlineMath math="M" /> が存在してすべての <InlineMath math="n" /> について <InlineMath math="a_n \le M" />）。
                </p>
                <p className="mt-2">
                    このとき、数列 <InlineMath math="\{a_n\}" /> は必ず<strong>収束</strong>する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [上限公理を用いた証明]">
                <p>
                    数列の項すべてからなる集合 <InlineMath math="A = \{a_n \mid n \in \mathbb{N}\}" /> を考える。
                    仮定より <InlineMath math="A" /> は空ではなく、上に有界である（上界 <InlineMath math="M" /> を持つ）。
                </p>
                <p className="mt-2">
                    上限公理により、<InlineMath math="A" /> には必ず上限（最小の上界）が存在する。これを <InlineMath math="s = \sup A" /> とおく。
                    このとき、数列の極限がまさにこの上限 <InlineMath math="s" /> に一致すること（<InlineMath math="\lim_{n\to\infty} a_n = s" />）を示す。
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="\varepsilon > 0" /> をとる。上限の特徴づけの「(ii)」より、<InlineMath math="s - \varepsilon" /> はもはや <InlineMath math="A" /> の上界ではないため、<InlineMath math="s - \varepsilon < a_N" /> となるようなある自然数 <InlineMath math="N" />（すなわち数列の項 <InlineMath math="a_N" />）が存在する。
                </p>
                <p className="mt-2">
                    数列は単調増加（<InlineMath math="m \ge n \implies a_m \ge a_n" />）であるから、この <InlineMath math="N" /> 以上のすべての <InlineMath math="m" /> に対して、次が成り立つ。
                    <BlockMath math="s - \varepsilon < a_N \le a_m" />
                    また、<InlineMath math="s" /> は上界なので当然 <InlineMath math="a_m \le s < s + \varepsilon" /> である。
                </p>
                <p className="mt-2">
                    これらを合わせると、任意の <InlineMath math="m \ge N" /> について
                    <BlockMath math="s - \varepsilon < a_m < s + \varepsilon \iff |a_m - s| < \varepsilon" />
                    が成り立つ。これはまさに数列が <InlineMath math="s" /> に収束することの定義（<InlineMath math="\varepsilon" />-<InlineMath math="N" />論法）に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">区間縮小法</h2>

            <p>
                実数の完備性を「区間」の言葉で捉えた定理です。マトリョーシカのようにどんどん狭くなっていく閉区間を無限に作り続けると、最後には「ただ1つの点」に潰れるという性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-2 (閉区間縮小法)">
                <p>
                    <InlineMath math="I_n = [a_n, b_n]" /> を実数の閉区間の列とする。<InlineMath math="n = 1, 2, 3, \dots" /> について次が成り立つとする。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><InlineMath math="I_1 \supseteq I_2 \supseteq I_3 \supseteq \dots" /> （区間の縮小）</li>
                    <li><InlineMath math="\lim_{n\to\infty} (b_n - a_n) = 0" /> （区間の幅が <InlineMath math="0" /> に収束）</li>
                </ul>
                <p className="mt-2">
                    このとき、すべての区間に<strong>共通して含まれるただ1つの実数 <InlineMath math="c" /></strong> が存在する。すなわち、<InlineMath math="\bigcap_{n=1}^\infty I_n = \{c\}" />。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [単調収束定理を用いた証明]">
                <p>
                    閉区間の包含関係 <InlineMath math="I_{n+1} \subseteq I_n" /> から、左端点と右端点について次の関係が常に成り立つ。
                </p>
                <BlockMath math="a_n \le a_{n+1} \le b_{n+1} \le b_n" />
                <p className="mt-2">
                    よって、左端点の数列 <InlineMath math="\{a_n\}" /> は単調増加であり、かつ <InlineMath math="b_1" />（最初の区間の右端点）によって上に有界である。
                    前節の<strong>単調収束定理（Theorem 2.3-1）</strong>により、数列 <InlineMath math="\{a_n\}" /> はある実数 <InlineMath math="c" /> に収束する（<InlineMath math="\lim_{n\to\infty} a_n = c" />）。
                </p>
                <p className="mt-2">
                    同様に、右端点の数列 <InlineMath math="\{b_n\}" /> は単調減少（マイナスを掛ければ上に有界な単調増加）であるため、ある実数 <InlineMath math="c'" /> に収束する。
                </p>
                <p className="mt-2">
                    ここで、極限の性質と仮定（区間の幅が <InlineMath math="0" />）を用いると、
                    <BlockMath math="c' - c = \lim_{n\to\infty} b_n - \lim_{n\to\infty} a_n = \lim_{n\to\infty} (b_n - a_n) = 0" />
                    となるため、<InlineMath math="c' = c" /> であり、両端点は同じ点 <InlineMath math="c" /> に近づく。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">
                    [c が共通部分であることの確認]
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="k \in \mathbb{N}" /> に対して、列 <InlineMath math="\{a_n\}" /> は単調増加なので <InlineMath math="a_k \le a_n" />（<InlineMath math="n \ge k" /> のとき）。極限をとって <InlineMath math="a_k \le c" />。
                    列 <InlineMath math="\{b_n\}" /> は単調減少なので <InlineMath math="b_n \le b_k" />。極限をとって <InlineMath math="c \le b_k" />。
                    これらを合わせると <InlineMath math="a_k \le c \le b_k" />、すなわち <InlineMath math="c \in [a_k, b_k] = I_k" />。
                    これがすべての <InlineMath math="k" /> で成り立つため、<InlineMath math="c \in \bigcap I_n" /> である。
                    また点の一意性は、幅が0になるという仮定から明らかである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ボルツァーノ・ワイエルシュトラスの定理</h2>

            <p>
                単調でない一般の数列に対しても、「有界」という条件さえあれば、そこから必ず収束する「部分列」を引っこ抜けるという強力な定理です。コンパクト性の概念に直結します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-3 (ボルツァーノ・ワイエルシュトラスの定理)">
                <p>
                    有界な実数列 <InlineMath math="\{x_n\}" /> は、必ず<strong>収束する部分列</strong>を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [区間縮小法を用いた二分法による証明]">
                <p>
                    数列 <InlineMath math="\{x_n\}" /> は有界なので、すべての項が収まる閉区間 <InlineMath math="I_1 = [a_1, b_1]" /> が存在する（すなわち <InlineMath math="x_n \in I_1" />）。この区間の中には当然、数列の項が<strong>無限個</strong>存在する。
                </p>
                <p className="mt-2">
                    区間 <InlineMath math="I_1" /> を中点で2つの小閉区間に分割する。数列の項は全体で無限個あるのだから、少なくともどちらか一方の小閉区間には、数列の項が<strong>やはり無限個</strong>含まれているはずである（鳩の巣原理）。
                    そのような無限個の項を含む小閉区間の方を選び、これを <InlineMath math="I_2 = [a_2, b_2]" /> とする。
                </p>
                <p className="mt-2">
                    この操作を無限に繰り返す。すなわち、<InlineMath math="I_k" /> の中点で分割し、無限個の項を含む方を <InlineMath math="I_{k+1}" /> として選別していく。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">
                    [区間縮小法の適用と部分列の構成]
                </p>
                <p className="mt-2">
                    このように構成された閉区間の列 <InlineMath math="I_1 \supseteq I_2 \supseteq I_3 \dots" /> は、区間の幅が毎回半分になるため、<InlineMath math="\lim_{k\to\infty} (b_k - a_k) = \lim_{k\to\infty} \frac{b_1 - a_1}{2^{k-1}} = 0" /> を満たす。
                    前節の<strong>閉区間縮小法（Theorem 2.3-2）</strong>により、すべての区間に共通に含まれる唯一の実数 <InlineMath math="c" /> が存在する。
                </p>
                <p className="mt-2">
                    ここから、収束する部分列 <InlineMath math="x_{n_k}" /> を選び出す。<br />
                    まず <InlineMath math="I_1" /> から適当な項 <InlineMath math="x_{n_1}" /> を選ぶ。<br />
                    次に <InlineMath math="I_2" /> から、インデックスが <InlineMath math="n_1" /> より大きい項 <InlineMath math="~ x_{n_2} \ (n_2 > n_1)" /> を一つ選ぶ（<InlineMath math="I_2" /> には無限個の項があるため、必ず <InlineMath math="n_1" /> より後の項が見つかる）。<br />
                    同様に、<InlineMath math="I_k" /> から <InlineMath math="n_k > n_{k-1}" /> となる項 <InlineMath math="x_{n_k}" /> を選んでいく。
                </p>
                <p className="mt-2">
                    この部分列 <InlineMath math="\{x_{n_k}\}" /> は構成より <InlineMath math="x_{n_k} \in I_k" /> を満たし、区間 <InlineMath math="I_k" /> の幅は <InlineMath math="0" /> に収束して <InlineMath math="c" /> に潰れていくため、はさみうちの原理により部分列も <InlineMath math="\lim_{k\to\infty} x_{n_k} = c" /> と収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備性の同値性の循環と他の表現</h2>

            <p>
                前節までの証明により、「上限公理 <InlineMath math="\implies" /> 単調収束定理 <InlineMath math="\implies" /> 区間縮小法 <InlineMath math="\implies" /> ボルツァーノ・ワイエルシュトラスの定理」という一方向の流れが示されました。
                本節では、さらに「コーシー列の収束」という別の表現もこの同値な輪に加わること、そして逆向きの矢印（区間縮小法 <InlineMath math="\implies" /> 上限公理など）も成り立つことを証明し、完備性の表現が完全に同値であることを確認します。
            </p>

            <h3 className="text-xl font-bold mt-6 mb-4">4.1 コーシー列による完備性（完備距離空間）</h3>

            <p>
                極限の行き先が自らの世界の中に存在することを「コーシー列」を用いて表現します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-4 (コーシー列の収束性 / 完備距離空間)">
                <p>
                    実数の任意のコーシー列 <InlineMath math="\{a_n\}" />（すなわち、添え字が大きくなれば項同士の距離がいくらでも <InlineMath math="0" /> に近づく数列）は、必ず実数の中に極限値を持つ。
                </p>
            </ContentBox>

            <p>
                これがボルツァーノ・ワイエルシュトラス（BW）の定理から導けることを示し、さらにコーシー列の収束性が単調収束定理を導くことを示します。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-1 (BW定理 ⟹ コーシー列の収束)">
                <p>
                    ボルツァーノ・ワイエルシュトラスの定理を仮定すれば、すべての実数コーシー列は収束する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [コーシー列の収束性の導出]">
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 1: コーシー列の有界性]</p>
                <p className="mt-2">
                    コーシー列 <InlineMath math="\{a_n\}" /> において <InlineMath math="\varepsilon = 1" /> とすると、ある <InlineMath math="N" /> が存在して <InlineMath math="m, n \ge N" /> ならば <InlineMath math="|a_m - a_n| < 1" />。
                    とくに <InlineMath math="m = N" /> と固定すれば、<InlineMath math="n \ge N" /> のとき <InlineMath math="|a_n| < |a_N| + 1" />。
                    よって、数列全体は最大値 <InlineMath math="\max\{|a_1|, \dots, |a_{N-1}|, |a_N| + 1\}" /> によって上から押さえられ、有界である。
                </p>
                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: BW定理と全体収束]</p>
                <p className="mt-2">
                    有界な数列 <InlineMath math="\{a_n\}" /> に<strong>BW定理（Theorem 2.3-3）</strong>を適用し、収束する部分列 <InlineMath math="\{a_{n_k}\}" /> をとる。その極限を <InlineMath math="c" /> とする。
                </p>
                <p className="mt-2">
                    任意の <InlineMath math="\varepsilon > 0" /> に対し、コーシー性からある <InlineMath math="N'" /> があり <InlineMath math="m, n \ge N'" /> で <InlineMath math="|a_m - a_n| < \frac{\varepsilon}{2}" />。
                    また、部分列は <InlineMath math="c" /> に収束するので、十分に大きい <InlineMath math="k" /> をとれば <InlineMath math="n_k \ge N'" /> かつ <InlineMath math="|a_{n_k} - c| < \frac{\varepsilon}{2}" /> とできる。
                </p>
                <p className="mt-2">
                    このとき、任意の <InlineMath math="n \ge N'" /> について三角不等式より、
                    <BlockMath math="|a_n - c| \le |a_n - a_{n_k}| + |a_{n_k} - c| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon" />
                    となり、数列全体が <InlineMath math="c" /> に収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 2.3-2 (コーシー列の収束 ⟹ 単調収束定理)">
                <p>
                    すべての実数コーシー列が収束すると仮定すれば、単調収束定理（上に有界な単調増加列の収束）が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [単調有界数列のコーシー性の導出]">
                <p>
                    <InlineMath math="\{a_n\}" /> を上に有界な単調増加数列とする。これがコーシー列であることを背理法で示す。
                </p>
                <p className="mt-2">
                    もしコーシー列でないなら、ある <InlineMath math="\varepsilon_0 > 0" /> が存在して、どれほど大きな <InlineMath math="N" /> をとっても <InlineMath math="m > n \ge N" /> で <InlineMath math="a_m - a_n \ge \varepsilon_0" /> となる <InlineMath math="m, n" /> のペアが存在する（単調増加なので絶対値は不要）。
                </p>
                <p className="mt-2">
                    <InlineMath math="n_1 = 1" /> とし、<InlineMath math="N = n_1" /> に対してある <InlineMath math="n_2 > n_1" /> が存在し <InlineMath math="a_{n_2} - a_{n_1} \ge \varepsilon_0" />。
                    次に <InlineMath math="N = n_2" /> に対してある <InlineMath math="n_3 > n_2" /> が存在し <InlineMath math="a_{n_3} - a_{n_2} \ge \varepsilon_0" />。
                    これを続けて取ると、任意の自然数 <InlineMath math="k" /> に対して
                    <BlockMath math="a_{n_k} - a_{n_1} = \sum_{i=1}^{k-1} (a_{n_{i+1}} - a_{n_i}) \ge (k-1)\varepsilon_0" />
                    が成り立つ。しかし <InlineMath math="k" /> をいくらでも大きく取れるため、これは数列が上に有界であることに矛盾する。
                </p>
                <p className="mt-2">
                    ゆえに <InlineMath math="\{a_n\}" /> はコーシー列であり、仮定より必ず実数に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <h3 className="text-xl font-bold mt-6 mb-4">4.2 同値の輪を閉じる（上限公理への回帰）</h3>

            <p>
                最後に、区間縮小法を用いて上限公理そのものを証明し、同値性の循環ループを閉じます。
            </p>

            <ContentBox type="proposition" title="Proposition 2.3-3 (区間縮小法 ⟹ 上限公理)">
                <p>
                    閉区間縮小法を仮定すれば、上に有界な空でない集合は必ず上限を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [二分法による上限の構成]">
                <p>
                    <InlineMath math="S" /> を上に有界な空でない実数の集合とし、<InlineMath math="b_1" /> をその上界の一つとする。<InlineMath math="S \neq \emptyset" /> なので <InlineMath math="s \in S" /> を1つとり、<InlineMath math="a_1 = s - 1" /> とすると、<InlineMath math="a_1" /> は <InlineMath math="S" /> の上界ではない（<InlineMath math="a_1 < s" />）。
                    閉区間 <InlineMath math="I_1 = [a_1, b_1]" /> を考える。
                </p>
                <p className="mt-2">
                    区間の中点 <InlineMath math="m_k = \frac{a_k + b_k}{2}" /> について、
                    それが <InlineMath math="S" /> の上界である場合は <InlineMath math="a_{k+1} = a_k, b_{k+1} = m_k" /> とし、
                    上界でない場合は <InlineMath math="a_{k+1} = m_k, b_{k+1} = b_k" /> とする更新を繰り返す。
                </p>
                <p className="mt-2">
                    この操作で得られる閉区間列 <InlineMath math="I_1 \supseteq I_2 \supseteq \dots" /> は、常に「<InlineMath math="b_k" /> は上界であり、<InlineMath math="a_k" /> は上界ではない」という性質を保つ。区間の幅は <InlineMath math="b_k - a_k = \frac{b_1 - a_1}{2^{k-1}} \to 0" /> である。
                </p>
                <p className="mt-2">
                    <strong>閉区間縮小法（Theorem 2.3-2）</strong>より、すべての区間に含まれる唯一の実数 <InlineMath math="c" /> が存在する（<InlineMath math="a_k \le c \le b_k" />）。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[c が上限であることの確認]</p>
                <p className="mt-2">
                    <InlineMath math="c" /> が上限となることを示す。
                    第一に、<InlineMath math="b_k" /> は常に上界なので、任意の <InlineMath math="x \in S" /> について <InlineMath math="x \le b_k" />。極限をとって <InlineMath math="x \le c" /> となり、<InlineMath math="c" /> は上界である。
                </p>
                <p className="mt-2">
                    第二に、任意の <InlineMath math="\varepsilon > 0" /> に対し、<InlineMath math="a_k \to c" /> よりある <InlineMath math="K" /> で <InlineMath math="a_K > c - \varepsilon" /> となる。<InlineMath math="a_K" /> は本来上界ではないため、<InlineMath math="a_K < x_0" /> となる <InlineMath math="x_0 \in S" /> が存在する。
                    よって <InlineMath math="c - \varepsilon < x_0" /> となり、<InlineMath math="c" /> は上界の中で最小のものである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                以上の証明により、以下の主張群が実数直線の完備性として<strong>等価な公理系</strong>となることが示されました。
            </p>
            <ul className="list-disc list-inside mt-2 mb-4 space-y-1 font-semibold text-slate-700 dark:text-slate-300">
                <li>上限公理（上に有界な空でない集合は上限を持つ）</li>
                <li>単調収束定理（上に有界な単調増加列は収束する）</li>
                <li>区間縮小法（幅が0になる閉区間の縮小列は1点に収束する）</li>
                <li>ボルツァーノ・ワイエルシュトラスの定理（有界な数列は収束する部分列を持つ）</li>
                <li>実数のコーシー完備性（すべてのコーシー列は収束する）</li>
            </ul>
            <p>
                さらに、ここでは紹介しませんでしたが、デテキント切断による構成も、これらの公理と同値であることが証明できます。<br />
                つまり、どれを「公理」として出発点に選んでも、構築される実数の世界は1ミリの狂いもなく同じものとなるというわけです。解析学の文脈や解きたい問題に応じて、最も扱いやすい「完備性の武器」を持ち替えて使うことができるのが、実数の驚異的な堅牢さの証です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>単調収束定理</strong>：上に有界な単調増加列は必ず収束する。</li>
                    <li><strong>閉区間縮小法</strong>：無限に狭まるマトリョーシカ状の閉区間は、最終的に1点に潰れる。</li>
                    <li><strong>ボルツァーノ・ワイエルシュトラスの定理</strong>：有界な数列からは、必ず収束する部分列を選び出せる。</li>
                    <li><strong>コーシー完備性</strong>：すべてのコーシー列は必ず収束する。</li>
                    <li>これらはすべて「実数の完備性（上限公理）」と互いに証明しあえる同値な表現であり、解析学を支える強力な道具である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
