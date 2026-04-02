import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_1_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ドイツの数学者リヒャルト・デデキント（Richard Dedekind）は、1872年に出版した『連続性と無理数』の中で、信じられないほど巧妙でアイディアあふれる実数の構成方法を発表しました。
                彼は、有理数の直線を刃物で「プチッ」と2つに切断したときの、その<strong>「切り口」そのものを新しい数（実数）として定義する</strong>という手法をとりました。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">デデキント切断と実数の定義</h2>

            <ContentBox type="definition" title="Definition 1.2-1 (デデキント切断)">
                <p>
                    有理数全体の集合 <InlineMath math="\mathbb{Q}" /> を、次の条件(1)〜(3)を満たすような2つの空でない部分集合 <InlineMath math="A" /> と <InlineMath math="B" /> の組 <InlineMath math="(A, B)" /> に分割したものを、<InlineMath math="\mathbb{Q}" /> の<strong>デデキント切断</strong>（Dedekind cut）または単に<strong>切断</strong>と呼ぶ。
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mt-2 space-y-2">
                    <p><strong>(1) 分割性:</strong> <InlineMath math="\mathbb{Q} = A \cup B" /> であり、<InlineMath math="A \cap B = \emptyset" />（空集合）、かつ <InlineMath math="A \neq \emptyset, B \neq \emptyset" />。</p>
                    <p><strong>(2) 順序性:</strong> 任意の <InlineMath math="a \in A" /> と <InlineMath math="b \in B" /> に対して、必ず <InlineMath math="a < b" /> が成り立つ。（すなわち、<InlineMath math="A" /> は左側、<InlineMath math="B" /> は右側に完全に分かれている）</p>
                    <p><strong>(3) 最大元の非存在:</strong> 下組（左側の集合）<InlineMath math="A" /> は最大元を持たない。（※これは便宜的な制約であり、上組 <InlineMath math="B" /> が最小元を持たないとしてもよい）</p>
                </div>
            </ContentBox>

            <p>
                この切断 <InlineMath math="(A, B)" /> の「切り口」について考えると、有理数の世界では次の<strong>2パターンのどちらかしか起こり得ません</strong>。
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>
                    <strong>上組 <InlineMath math="B" /> に最小元 <InlineMath math="m" /> が存在するケース：</strong><br />
                    例えば、<InlineMath math="A = \{x \in \mathbb{Q} \mid x < 2\}, \ B = \{x \in \mathbb{Q} \mid x \ge 2\}" /> とします。このとき切り口は「有理数 <InlineMath math="2" />」そのものを表しています。
                </li>
                <li>
                    <strong>上組 <InlineMath math="B" /> にも最小元が存在しないケース（重要！）：</strong><br />
                    例えば、<InlineMath math="A = \{x \in \mathbb{Q} \mid x \le 0 \lor x^2 < 2\}, \ B = \{x \in \mathbb{Q} \mid x > 0 \land x^2 > 2\}" /> とします。<InlineMath math="x^2 = 2" /> となる有理数は存在しない（前節参照）ため、<InlineMath math="\mathbb{Q} = A \cup B" /> です。しかし、<InlineMath math="A" /> に最大元はないし、<InlineMath math="B" /> にも最小元はありません。切り口は<strong>有理数直線の「ポッカリ空いた穴」</strong>になっています。
                </li>
            </ol>

            <ContentBox type="definition" title="Definition 1.2-2 (デデキント切断による実数の定義)">
                <p>
                    有理数体 <InlineMath math="\mathbb{Q}" /> のデデキント切断 <InlineMath math="(A, B)" /> の全体を考え、その切断の一つ一つを「<strong>実数（Real number）</strong>」と定義し、すべての実数の集合を <InlineMath math="\mathbb{R}" /> と書く。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><InlineMath math="B" /> が最小元 <InlineMath math="r" /> を持つ切断は、有理数 <InlineMath math="r" /> と同一視する。（有理数は実数の一部となる）</li>
                    <li><InlineMath math="A" /> に最大元がなく、<InlineMath math="B" /> にも最小元がない（切り口が穴になっている）切断を、新しく<strong>無理数（Irrational number）</strong>と呼ぶ。</li>
                </ul>
            </ContentBox>

            <p>
                この驚くべき定義によって、有理数の全ての穴（例えば <InlineMath math="\sqrt{2}" /> や <InlineMath math="\pi" /> の場所）に「切断」というラベルが貼られ、穴が完全に塞がれました！
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実数体の公理の充足と完備性</h2>

            <p>
                「切断が数である」と定義した以上、それがただの集合ではなく「数」として機能すること、すなわち順序（大小関係）や四則演算（足し算や掛け算）を定義し、それらが有理数のときと同じように自然に振る舞うこと（順序体の公理を満たすこと）を証明しなければなりません。
            </p>

            <ContentBox type="proposition" title="Proposition 1.2-1 (順序と演算の定義)">
                <p>
                    2つの実数（切断）<InlineMath math="x = (A_x, B_x)" /> と <InlineMath math="y = (A_y, B_y)" /> について、下組同士の集合の包含関係で大小（順序）を定義する。
                </p>
                <BlockMath math="x < y \iff A_x \subsetneq A_y" />
                <p className="mt-2">
                    和 <InlineMath math="x + y" /> は、下組同士の元を全て足し合わせた集合で作る切断として定義される。（※負の数の乗法などは技術的に少し複雑になるが同様に定義できる）
                </p>
                <BlockMath math="A_{x+y} = \{a_x + a_y \mid a_x \in A_x, a_y \in A_y\}" />
                <p className="mt-2">
                    このように定義された集合 <InlineMath math="\mathbb{R}" /> は、四則演算と順序に関して<strong>順序体</strong>をなす。<br />
                    （※順序体とは、大小関係（順序）と四則演算が定義されており、それらが自然に振る舞う集合のこと。）
                </p>
            </ContentBox>

            <p>
                しかし、ここまでの有理数と最も決定的に異なるのが、実数は「穴がない」、すなわち<strong>完備である</strong>という性質です。デデキント積断による構成の最大の目的は、まさに以下の定理を証明することにあります。
            </p>

            <ContentBox type="theorem" title="Theorem 1.2-1 (デデキント切断による実数の完備性：上限公理の成立)">
                <p>
                    このように構成された実数体の集合 <InlineMath math="\mathbb{R}" /> は、<strong>上限を持つ公理（あるいは連続性公理）</strong>を満たす。
                    すなわち、「上に有界な空でない <InlineMath math="\mathbb{R}" /> の部分集合 <InlineMath math="S" /> は、必ず <InlineMath math="\mathbb{R}" /> の中に上限（最小の上界）を持つ」。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [上限の存在の証明]">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> の空でない部分集合 <InlineMath math="S" /> が、上に有界であるとする。実数 <InlineMath math="x \in S" /> はそれ自体が有理数の切断 <InlineMath math="(A_x, B_x)" /> であることに注意する。
                </p>
                <p className="mt-2">
                    上限となるべき実数（切断） <InlineMath math="c = (A_c, B_c)" /> の「下組 <InlineMath math="A_c" />」を次のように構成する。
                </p>
                <BlockMath math="A_c = \bigcup_{x \in S} A_x" />
                <p className="mt-2">
                    つまり、集合 <InlineMath math="S" /> に含まれるすべての実数 <InlineMath math="x" /> の「下組（有理数の集合）」を全部合併（和集合）したものを、新しい下組 <InlineMath math="A_c" /> とする。これによって作られた <InlineMath math="(A_c, B_c)" />（ただし <InlineMath math="B_c = \mathbb{Q} \setminus A_c" />）が本当に切断の条件を満たし、かつ <InlineMath math="S" /> の上限になっていることを示す。
                </p>

                <p className="mt-4 font-bold">[Step 1: 妥当な切断であること]</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="S" /> は空ではないので、ある <InlineMath math="x \in S" /> が存在し <InlineMath math="A_x \neq \emptyset" /> だから <InlineMath math="A_c \neq \emptyset" /> である。</li>
                    <li><InlineMath math="S" /> は上に有界なので、<InlineMath math="S" /> の上界となる実数 <InlineMath math="M = (A_M, B_M)" /> が存在する。任意の <InlineMath math="x \in S" /> について <InlineMath math="x \le M" /> なので <InlineMath math="A_x \subseteq A_M" /> である。したがってそれらの和集合 <InlineMath math="A_c" /> も <InlineMath math="A_c \subseteq A_M" /> を満たす。<InlineMath math="M" /> は切断なので <InlineMath math="\mathbb{Q} \setminus A_M \neq \emptyset" />（上組が存在する）、ゆえに <InlineMath math="\mathbb{Q} \setminus A_c = B_c \neq \emptyset" /> である。これで分割性(1)が示された。</li>
                    <li>順序性(2)と最大元非存在(3)も、和集合の性質と各 <InlineMath math="A_x" /> が切断の条件を満たしていることから容易に導かれる。よって <InlineMath math="c = (A_c, B_c)" /> は 確かな実数（切断）である。</li>
                </ul>

                <p className="mt-4 font-bold">[Step 2: c が S の上界であること]</p>
                <p className="mt-2">
                    構成 <InlineMath math="A_c = \bigcup_{x \in S} A_x" /> より、任意の <InlineMath math="x \in S" /> に対して明らかに <InlineMath math="A_x \subseteq A_c" /> である。これは実数の定義的順序関係において <InlineMath math="x \le c" /> であることを意味する。したがって、<InlineMath math="c" /> は <InlineMath math="S" /> の上界である。
                </p>

                <p className="mt-4 font-bold">[Step 3: c が「最小の」上界（上限）であること]</p>
                <p className="mt-2">
                    <InlineMath math="y < c" /> となる任意の実数 <InlineMath math="y = (A_y, B_y)" />（すなわち <InlineMath math="A_y \subsetneq A_c" />）をとる。
                    <InlineMath math="A_y" /> は <InlineMath math="A_c" /> の真部分集合なので、<InlineMath math="A_c" /> には含まれるが <InlineMath math="A_y" /> には含まれない有理数 <InlineMath math="r" /> （<InlineMath math="r \in A_c \setminus A_y" />）が存在する。
                </p>
                <p className="mt-2">
                    <InlineMath math="A_c" /> は和集合なので、この <InlineMath math="r" /> は必ずある <InlineMath math="x_0 \in S" /> の下組 <InlineMath math="A_{x_0}" /> に含まれている（<InlineMath math="r \in A_{x_0}" />）。
                    <InlineMath math="r \notin A_y" /> だから、デデキント切断の性質より <InlineMath math="A_y" /> のすべての元は <InlineMath math="r" /> より小さい。一方で <InlineMath math="r \in A_{x_0}" /> なので、<InlineMath math="A_y \subsetneq A_{x_0}" /> となる。
                    これは実数の順序で言えば <InlineMath math="y < x_0" /> を意味する。
                </p>
                <p className="mt-2">
                    すなわち、「<InlineMath math="c" /> より少しでも小さい <InlineMath math="y" /> を持ってきたら、集合 <InlineMath math="S" /> の中にそれよりも大きい元 <InlineMath math="x_0" /> が必ず見つかってしまう」ため、<InlineMath math="y" /> はもはや上界ではあり得ない。
                    よって、<InlineMath math="c" /> は上界の中の最小の存在、すなわち<strong>上限</strong>（Supremum）である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明の鮮やかな点は、集合 <InlineMath math="S" /> の上限を「単に全切断（集合）の和集合をとるだけ」という、極めて単純な集合論の操作だけで構成（発見）してしまうところです。デデキント切断による構成法は「実数の連続性の公理」がなぜ成立するのかを最も明確に可視化してくれます。
            </p>

        </section>
    );
}
