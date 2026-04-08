import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UnboundedOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまでは、空間のあらゆるベクトルに対して必ず値を返し、なおかつベクトルの「長さ」をある有限倍以下に保つことができる「有界作用素」のみを扱ってきました。バナッハ空間やヒルベルト空間の理論は、有界作用素を前提として美しく構成されています。
            </p>
            <p>
                しかし、関数解析が真の威力を発揮する偏微分方程式論や量子力学においては、微分作用素や位置・運動量作用素といった、解析学で最も中心的な役割を果たす作用素の多くが<b>有界ではありません</b>。それらを扱うためには、これまでの「安全な」枠組みを意図的に外し、「非有界作用素」の荒海へと乗り出す必要があります。本節では、非有界作用素を扱う上での特有の難しさと、それを克服するための「閉作用素」「自己共役拡大」といった決定的に重要な概念を解説します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">閉作用素と非有界作用素の基本概念</h2>

            <p>
                非有界作用素を扱う上で我々が直面する最初の、そして最大の困難は、「空間のすべてのベクトルに作用させることができない」という点です。例えば関数を微分しようと思っても、折れ曲がっている不連続な関数は微分できません。したがって、作用素を定義する「適切な領域（定義域）」をこちらで選んでやる必要があります。
            </p>

            <ContentBox type="definition" title="Definition 10.6-1 (非有界作用素と稠密な定義域)">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> の稠密な部分空間 <InlineMath math="D(T) \subset H" />（すなわち <InlineMath math="\overline{D(T)} = H" />）上で定義された線形作用素 <InlineMath math="T : D(T) \to H" /> のうち、有界でない（<InlineMath math="\|Tx\| \leq M\|x\|" /> なる定数 <InlineMath math="M" /> が存在しない）ものを<b>非有界作用素（unbounded operator）</b>とよぶ。
                </p>
            </ContentBox>

            <p>
                定義域 <InlineMath math="D(T)" /> は空間全体とは限りませんが、少なくとも空間の中で「どこにでも限りなく近いものが存在する」状態、すなわち<b>稠密</b>でなければ、作用素のもつ情報が不十分になってしまいます。
            </p>
            <p>
                しかし、定義域が全空間でないということは「不完全」であることを意味し、連続性も失われています。極限操作が多用される関数解析において、連続性がないのは致命的です。そこで、連続性に代わる「最低限の良い性質」として、作用素のグラフ空間における位相的性質である「閉作用素」という概念が極めて重要になります。
            </p>

            <ContentBox type="definition" title="Definition 10.6-2 (閉作用素)">
                <p>
                    作用素 <InlineMath math="T" /> の<b>グラフ（graph）</b> <InlineMath math="\mathrm{Gr}(T)" /> を直積空間 <InlineMath math="H \times H" /> の部分集合として次のように定義する。
                </p>
                <BlockMath math="\mathrm{Gr}(T) = \{ (x, Tx) \mid x \in D(T) \} \subset H \times H" />
                <p>
                    このグラフ <InlineMath math="\mathrm{Gr}(T)" /> が直積空間において閉集合であるとき、<InlineMath math="T" /> を<b>閉作用素（closed operator）</b>とよぶ。
                </p>
                <p>
                    点列を用いて言い換えると、「<InlineMath math="x_n \in D(T)" /> がある <InlineMath math="x" /> に収束し、さらに <InlineMath math="Tx_n" /> がある <InlineMath math="y" /> に収束するならば、極限点 <InlineMath math="x" /> もまた定義域に含まれ（<InlineMath math="x \in D(T)" />）、かつ <InlineMath math="Tx = y" /> が成立する」ということになる。
                </p>
            </ContentBox>

            <p>
                連続な有界作用素であれば、「<InlineMath math="Tx_n" /> は必ず自動的に収束する」のですが、閉作用素の場合は「もし偶然うまく収束してくれたなら、その極限は正しい値と完全に一致する」という、少し妥協した安全性を保証してくれています。
            </p>

            <ContentBox type="example" title="Example 10.6-1 (位置と運動量作用素)">
                <p>
                    量子力学の最も基本的な観測量である2つの作用素を <InlineMath math="L^2(\mathbb{R})" /> 上で考えます。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><b>位置作用素</b> <InlineMath math="Qf(x) = xf(x)" />：<br />
                    遠方（<InlineMath math="x \to \pm\infty" />）で <InlineMath math="x" /> は無限に大きくなります。どんなに急激に減衰する関数を考えても、<InlineMath math="x" /> を掛けることで積分が発散してしまう関数はいくらでも存在します。したがって、定義域は <InlineMath math="D(Q) = \{f \in L^2 \mid xf(x) \in L^2\}" /> に大きく制限されます。</li>
                    <li><b>運動量作用素</b> <InlineMath math="Pf(x) = -if'(x)" />：<br />
                    関数が尖っていたり断絶していたりすると、微分ができません（<InlineMath math="L^2" /> 関数ではなくなってしまいます）。これも全空間で定義することは不可能です。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="閉グラフ定理との整合性（なぜ全空間で定義できないのか）">
                <p>
                    第4章で学んだ「閉グラフ定理（§4.5）」を思い出してください。これは「全空間で定義された閉作用素は、必ず有界作用素になる」という強力な定理でした。<br />
                    これを対偶として読み解くと、<b>「非有界であるのに閉作用素となるような良い作用素は、絶対に全空間で定義することはできない」</b>という結論になります。<br />
                    微分作用素や位置作用素が良い例です。これらは物理的な要請から強い閉性を持つ良い作用素ですが、有界ではないため、数学的に必ず「隙間（定義できない関数）」を持ち続けなければならない運命にあるのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">自己共役性とフリードリヒス拡大</h2>

            <p>
                非有界作用素をさらに深く理解するためには、ヒルベルト空間における双対の世界、つまり「随伴作用素（<InlineMath math="T^*" />）」の概念を拡張しなければなりません。<br />
                有界作用素のときは内積の左右を自由に入れ替えることで随伴作用素 <InlineMath math="T^*" /> を簡単に定義できました（<InlineMath math="\langle Tx, y \rangle = \langle x, T^*y \rangle" />）。しかし、非有界作用素ではやはり「定義域のズレ」が決定的な障壁となって我々の前に立ちはだかります。
            </p>

            <ContentBox type="definition" title="Definition 10.6-3 (非有界作用素の随伴)">
                <p>
                    稠密に定義された非有界作用素 <InlineMath math="T" /> と <InlineMath math="y \in H" /> に対して、写像
                </p>
                <BlockMath math="x \mapsto \langle Tx, y \rangle \quad (x \in D(T))" />
                <p>
                    が <InlineMath math="D(T)" /> 上で有界な線形汎関数となるような <InlineMath math="y" /> の全体を集め、これを <InlineMath math="T^*" /> の定義域 <InlineMath math="D(T^*)" /> とする。
                </p>
                <p>
                    このとき、<InlineMath math="D(T)" /> の稠密性とリースの表現定理から <InlineMath math="\langle Tx, y \rangle = \langle x, z \rangle" /> を満たす <InlineMath math="z \in H" /> がただ一つ定まるので、これを <InlineMath math="T^*y = z" /> と定義する。<br />
                    これにより、すべての <InlineMath math="x \in D(T), y \in D(T^*)" /> において <InlineMath math="\langle Tx, y \rangle = \langle x, T^*y \rangle" /> が成立する。
                </p>
            </ContentBox>

            <p>
                <InlineMath math="T" /> の定義域の形と、<InlineMath math="T^*" /> の定義域の形がどのように関係しているのか。これを精密に分類することが、作用素の「自己共役性」を見極めることなのです。有界作用素のときのように「<InlineMath math="T = T^*" />」と一言で済ませることはできません。
            </p>

            <ContentBox type="definition" title="Definition 10.6-4 (対称・自己共役・本質的自己共役)">
                <p>
                    非有界作用素 <InlineMath math="T" /> の性質として、大きく以下の3つの段階を区別する。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><b>対称作用素（symmetric operator）</b>： <InlineMath math="T \subset T^*" /> を満たす。<br />
                    これは <InlineMath math="D(T) \subset D(T^*)" />（元の作用素より随伴作用素の方が定義できる範囲が広い）であり、かつ <InlineMath math="D(T)" /> 上で <InlineMath math="T = T^*" /> となる状態。つまり、<InlineMath math="x, y \in D(T)" /> であれば安全に <InlineMath math="\langle Tx, y \rangle = \langle x, Ty \rangle" /> と入れ替えができる。
                    </li>
                    <li><b>本質的自己共役（essentially self-adjoint）</b>： <InlineMath math="T" /> は対称作用素であるが、そのグラフの閉包（関数の極限まで含めて定義域を少し広げたもの）<InlineMath math="\bar{T}" /> が完全に後述の自己共役となる状態。一意に自己共役な段階へ拡大できる「優等生」の作用素。
                    </li>
                    <li><b>自己共役作用素（self-adjoint operator）</b>： <InlineMath math="T = T^*" />。<br />
                    対称作用素であるだけでなく、<b>定義域まで完全に一致する</b>（<InlineMath math="D(T) = D(T^*)" />）状態。物理学において観測量として振る舞うためには、この自己共役性に到達していなければならない。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="対称性と自己共役性の違いはなぜ重要か？">
                <p>
                    「別に定義域が少し食い違っているくらい、対称であれば実質同じようなものではないか？」と思われるかもしれません。しかし関数解析において、この <InlineMath math="D(T) \subsetneq D(T^*)" /> という隙間は致命的です。<br />
                    自己共役作用素であれば、第10章の前半で学んだ「スペクトル分解」が完全に成立し、ストーンの定理などを経てシュレディンガー方程式の時間発展（ユニタリ群 <InlineMath math="e^{iT}" />）を生成することができます。しかし単なる「対称作用素」では、スペクトルが複素平面の半分を覆ってしまったり、時間発展が確率を保存しなかったりと、全くもって物理法則の器として使い物にならないのです。
                </p>
            </ContentBox>

            <p>
                「対称ではあるが自己共役ではない」という状況がいかにして生じるのか、そしてそれをどのように拡張して「自己共役」に引き上げるのか。微分作用素の境界条件を例に見てみましょう。
            </p>

            <ContentBox type="example" title="Example 10.6-2 (微分作用素と自己共役拡大の多様性)">
                <p>
                    二階微分作用素 <InlineMath math="A = -d^2/dx^2" /> を考えます。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>全実数直線 <InlineMath math="\mathbb{R}" /> 上で、コンパクトな台を持つ無限回微分可能な関数空間 <InlineMath math="C_c^\infty(\mathbb{R})" /> を定義域とした場合、端が存在しないため、部分積分を行っても境界項が出ません。この作用素は<b>本質的自己共役</b>となり、自然な閉包をとるだけで唯一の自己共役作用素に昇格します。</li>
                    <li>一方で、有界な閉区間 <InlineMath math="[0, 1]" /> 上で <InlineMath math="C_c^\infty(0, 1)" /> を定義域とした場合は、本質的自己共役にすらなりません。随伴作用素 <InlineMath math="A^*" /> の定義域は「端でどんな値を取ってもよい関数」を含むほど大きく膨れ上がってしまい、<InlineMath math="D(A) \subsetneq D(A^*)" /> となってしまうのです。<br />
                    自己共役にするためには、<InlineMath math="D(A)" /> と <InlineMath math="D(A^*)" /> の中間に絶妙な境界条件を設定する必要があります。例えば「端点 <InlineMath math="0, 1" /> で関数の値が <InlineMath math="0" />（ディリクレ境界条件）」としたものが一つの自己共役拡大になり、「端点で微分の値が <InlineMath math="0" />（ノイマン境界条件）」としたものも別の自己共役拡大になります。これらは数学的にも、物理的な境界の性質としても全く異なる作用素です。
                    </li>
                </ul>
            </ContentBox>

            <p>
                このように、定義域を「丁度良い広さ」に拡大して自己共役作用素を作る作業（自己共役拡大）は、常に可能とは限りませんし、可能であっても一つとは限りません。しかし、ある物理的に非常に妥当な条件、すなわち「エネルギーが下に有界」という条件を満たす作用素であれば、少なくとも1つの標準的な自己共役拡大が存在することが保証されています。
            </p>

            <ContentBox type="theorem" title="Theorem 10.6-1 (フリードリヒス拡大)">
                <p>
                    <InlineMath math="T" /> が対称作用素であり、かつ<b>下に有界</b>（ある定数 <InlineMath math="c \in \mathbb{R}" /> が存在してすべての <InlineMath math="x \in D(T)" /> で <InlineMath math="\langle Tx, x \rangle \geq c\|x\|^2" />）であるとする。<br />
                    このとき、<InlineMath math="T" /> は必ず少なくとも1つの自己共役拡大（<InlineMath math="T \subset \tilde{T} = \tilde{T}^*" />）をもつ。
                </p>
                <p>
                    このとき得られる最も標準的で自然な自己共役拡大を<b>フリードリヒス拡大（Friedrichs extension）</b>とよぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略：<br />
                    作用素を平行移動して <InlineMath math="c > 0" /> としても一般性を失わない。<InlineMath math="\langle Tx, x \rangle" /> が正の定符号であることを利用して、<InlineMath math="D(T)" /> の上に元の内積とは異なる新しい「エネルギー内積」 <InlineMath math="\langle x, y \rangle_T = \langle Tx, y \rangle" /> を定義する。<br />
                    この新しい内積が定めるノルムによって <InlineMath math="D(T)" /> を完備化し、新しいヒルベルト空間 <InlineMath math="H_T" /> を作る。<br />
                    この空間 <InlineMath math="H_T" /> の上で、リースの表現定理を巧妙に用いることで、元の作用素の自己共役な「逆作用素」をまず構成する。そしてこれをさらに逆転させることで、最終的に目的の巨大な定義域をもつ自己共役拡大 <InlineMath math="\tilde{T}" /> に到達する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 10.6-3 (ラプラシアンのフリードリヒス拡大)">
                <p>
                    ある有界領域 <InlineMath math="\Omega \subset \mathbb{R}^n" /> 上の負のラプラシアン <InlineMath math="A = -\Delta" /> を、境界で <InlineMath math="0" /> となる滑らかな関数空間 <InlineMath math="C_c^\infty(\Omega)" /> 上で考えます。<br />
                    部分積分（グリーンの定理）を用いると、
                </p>
                <BlockMath math="\langle -\Delta u, u \rangle = \int_\Omega |\nabla u|^2 dx \geq 0" />
                <p>
                    となり、これは対称作用素であるだけでなく、明らかに「下に有界」です。したがって定理よりフリードリヒス拡大が通用します。<br />
                    このとき構成される「エネルギー内積から完備化された空間」は、実は偏微分方程式で極めて重要になる<b>ソボレフ空間 <InlineMath math="H_0^1(\Omega)" /></b> そのものになります。そして得られた自己共役拡大こそが、境界条件を厳密に満たす「ディリクレ・ラプラシアン」の正体です。この手法は、楕円型偏微分方程式の解の存在を示すための強力なフレームワーク（5-2）となっています。
                </p>
            </ContentBox>

            <p>
                非有界作用素は、その定義からして直感に反するような細やかなケアが必要な難解な対象です。しかし、自然現象の大部分は有界の殻を破ることで初めて記述可能になります。関数解析を応用して物理現象を解き明かすためには、この非有界作用素と向き合い続ける必要があります。
            </p>

            <ContentBox type="note" title="§10.6 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>微分作用素や運動量作用素のように、全空間で定義できない作用素を<b>非有界作用素</b>とよび、稠密な定義域上で考える。</li>
                    <li>連続性の代用としてグラフが閉集合になる<b>閉作用素</b>の概念が重要となるが、閉グラフ定理により全空間で定義された閉作用素は有界になってしまう。</li>
                    <li>非有界作用素が完全な物理的・解析的良い性質（スペクトル分解など）を持つためには、単なる<b>対称</b>（<InlineMath math="T \subset T^*" />）ではなく、定義域が完全に一致する<b>自己共役</b>（<InlineMath math="T = T^*" />）でなければならない。</li>
                    <li>下に有界な対称作用素は、<b>フリードリヒス拡大</b>によって必ず自己共役作用素へと拡張することができる。これはラプラシアンなどの偏微分作用素を定式化する強力な武器となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
