import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UniformBoundednessPrinciple() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「各点ではそれぞれ有限に収まっているのに、空間全体として見ると無限大に発散してしまう」という現象は、解析学において非常に厄介です。しかし、舞台が完備な空間（バナッハ空間）であれば、そのような病的な「点ごとの有限」は「一様な有限（有界）」へ自動的に昇格されるという劇的な定理が存在します。これが「一様有界性定理（別名：バナッハ-スタインハウスの定理）」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ベールのカテゴリー定理の準備</h2>

            <p>
                この劇的な結果をはじめとして、様々な強力な定理の根拠となるのが、位相空間論における「ベールのカテゴリー定理」です。これは直感的に言えば「完備な空間は中身がスカスカではない（ペラペラの薄い集合をいくら集めても全体を覆い尽くせない）」という事実を述べています。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-1 (ベールのカテゴリー定理)">
                <p>
                    <InlineMath math="X" /> を完備距離空間とする。内部（内点）を持たない閉集合を可算個（無限個だが番号付けできる個数）集めたものを <InlineMath math="\{A_n\}_{n=1}^\infty" /> とすると、その和集合 <InlineMath math="\bigcup_{n=1}^\infty A_n" /> は決して空間 <InlineMath math="X" /> 全体にはならない。言い換えれば、完備距離空間は「第一類集合（やせ細った集合）」の可算和では尽くせない。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （背理法による証明概略）<InlineMath math="X = \bigcup_n A_n" /> と仮定する。
                </p>
                <p>
                    <InlineMath math="A_1" /> は内点を持たない閉集合であるため、その外側に必ず点があり、<InlineMath math="A_1" /> と交わらない小さな閉球 <InlineMath math="B_1" /> を作ることができる。<InlineMath math="A_2" /> も内点を持たないので、<InlineMath math="B_1" /> の中から <InlineMath math="A_2" /> を避けるようにさらに小さな閉球 <InlineMath math="B_2 \subset B_1" /> を作ることができる。これを繰り返していくと、半径が <InlineMath math="0" /> に向かって縮小していく「入れ子の閉球列」 <InlineMath math="B_1 \supset B_2 \supset \cdots" /> が構成できる。
                </p>
                <p>
                    空間が完備であるため、カントールの区間縮小法（あるいはコーシー列の完備性）により、すべての閉球に共通して属する点 <InlineMath math="x" /> がただ一つ存在する。しかしこの点 <InlineMath math="x" /> は、構成法からしてどの <InlineMath math="A_n" /> にも属していない。これは <InlineMath math="X = \bigcup A_n" /> という仮定に矛盾する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-1 (実数と有理数)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> は完備距離空間である。各々の有理数 <InlineMath math="q" /> のみからなる一点集合 <InlineMath math="\{q\}" /> は閉集合であり、内点を持たない。
                </p>
                <p>
                    有理数は可算個存在するため、数え上げて <InlineMath math="\{q_1, q_2, \ldots\}" /> とできる。もし <InlineMath math="\mathbb{R}" /> がペラペラであれば、これらをすべて和集合した <InlineMath math="\cup \{q_n\}" /> で実数全体が覆い尽くせそうだが、ベールのカテゴリー定理により、そのような内点を持たない閉集合の可算和では空間を覆えないことが保証される。よって実数のうち有理数でないもの（無理数）が必ず存在し、むしろそちらの方が位相的に「太い」ことがわかる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一様有界性定理</h2>

            <p>
                ベールのカテゴリー定理を使って一様有界性定理を証明します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.3-2 (一様有界性定理 / バナッハ-スタインハウス)">
                <p>
                    <InlineMath math="X" /> をバナッハ空間、<InlineMath math="Y" /> をノルム空間とする。<InlineMath math="\mathcal{T} = \{T_\alpha\}" /> を、<InlineMath math="X" /> から <InlineMath math="Y" /> への有界線形作用素の族（添字 <InlineMath math="\alpha" /> は非可算でも何でもよい）とする。
                </p>
                <p>
                    もし、すべての固定したベクトル <InlineMath math="x \in X" /> において、
                </p>
                <BlockMath math="\sup_{\alpha} \|T_\alpha x\| < \infty" />
                <p>
                    が成り立つ（各点で有界である）ならば、作用素ノルムの集合自体が一様に有界となる。すなわち、ある定数 <InlineMath math="C > 0" /> が存在して、すべての <InlineMath math="\alpha" /> に対して
                </p>
                <BlockMath math="\|T_\alpha\| \leq C" />
                <p>
                    が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定理の仮定「各点で有界」は、各点の行き先が <InlineMath math="1" /> 以下か、<InlineMath math="2" /> 以下か、…と分類できることを意味する。そこで、特定の自然数 <InlineMath math="n" /> より行き先が小さくなるベクトルの集合を <InlineMath math="A_n" /> と置く。
                </p>
                <BlockMath math="A_n = \{ x \in X \mid \sup_\alpha \|T_\alpha x\| \leq n \}" />
                <p>
                    仮定より、どの <InlineMath math="x" /> も行き先は有限なので、必ずどれかの <InlineMath math="A_n" /> に属す。すなわち <InlineMath math="X = \bigcup_n A_n" /> である。また <InlineMath math="T_\alpha" /> の連続性から <InlineMath math="A_n" /> はすべて閉集合である。
                </p>
                <p>
                    <InlineMath math="X" /> はバナッハ空間（完備）であるため、Theorem 4.3-1（ベールのカテゴリー定理）が適用でき、この <InlineMath math="A_n" /> のうちどれか一つは「内点」を持たなければならない。つまり、ある球 <InlineMath math="B(x_0, r) \subset A_{n_0}" /> が存在する。
                </p>
                <p>
                    この球内の任意のベクトル <InlineMath math="x" /> は、どの作用素 <InlineMath math="T_\alpha" /> をかけても長さが <InlineMath math="n_0" /> 以下にしかならない。原点中心の単位球上のベクトル <InlineMath math="z" /> は、この球を用いて <InlineMath math="z = (x - x_0)/r" /> （<InlineMath math="x \in B(x_0, r)" />）と書けるため、線形性からこれに作用素を適用すると
                </p>
                <BlockMath math="\begin{aligned}\|T_\alpha z\| &= \frac{1}{r} \|T_\alpha x - T_\alpha x_0\| \\ &\leq \frac{1}{r} (\|T_\alpha x\| + \|T_\alpha x_0\|) \\ &\leq \frac{1}{r} (n_0 + n_0) = \frac{2n_0}{r} \end{aligned}" />
                <p>
                    となる。この評価式は <InlineMath math="\alpha" /> に依存しない。よってすべての作用素ノルムは定数 <InlineMath math="2n_0/r" /> で一様に抑えられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (フーリエ級数の発散への応用)">
                <p>
                    一様有界性定理の最も有名な応用の一つが、「連続関数であっても、そのフーリエ級数は特定の点で発散しうる」ことの非構成的な証明である。
                </p>
                <p>
                    関数空間上のフーリエ部分和を計算する操作を作用素 <InlineMath math="S_n" /> と置くと、これ自体は有界線形作用素である。しかし、計算を進めるとこの作用素のノルム <InlineMath math="\|S_n\|" /> （ルベーグ定数と呼ばれるものに一致する）が <InlineMath math="\log n" /> のオーダーで無限大に発散していくことがわかる。
                </p>
                <p>
                    作用素ノルムが一様に有界でないということは、一様有界性定理の対偶により、「各点での有界性」が成立しない点 <InlineMath math="x" /> が存在することを意味する。すなわち、「フーリエ部分和がある点で無限大に発散してしまうような連続関数」が（具体的に形を作らなくても）空間内に必ず存在するということが証明されるのである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="完備性の重要性">
                <p>
                    前章（Chapter 3）で、強収束するのに一様収束しない作用素の例として、射影作用素や微分作用素などを見ました。しかし一様有界性定理のおかげで、強収束する（各点で値が有界にとどまる）作用素列は、<b>一様収束はしなくても作用素ノルム自体は必ず有界に留まる</b>ことが保証されます。この定理は空間が完備でなければ成り立たないため、バナッハ空間で関数解析を行う最大の理由の一つとなっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ベールのカテゴリー定理は、完備な空間がペラペラな閉集合の集まりでは覆い尽くせないという位相的な余裕を保証する（Theorem 4.3-1）。</li>
                    <li>一様有界性定理は、バナッハ空間上で「各点で有界」な作用素の族が、実は空間全体で「一様に有界」のノルムを持つことを保証する（Theorem 4.3-2）。</li>
                    <li>この定理は対偶をとることで、フーリエ級数のような関数の発散の存在証明など、解析学の多くの難問をエレガントに解決するツールとして働く。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
