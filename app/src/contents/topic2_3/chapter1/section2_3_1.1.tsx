import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_1_1() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「実解析（Real Analysis）」の第一歩として、我々が高校まで当たり前のように使ってきた「実数（Real numbers）」とは一体何なのかを厳密に定義し直すところから始めましょう。
            </p>
            <p>
                人類が最初に認識した数は自然数 <InlineMath math="\mathbb{N}" /> です。そこから引き算を自由に扱うために整数 <InlineMath math="\mathbb{Z}" /> を構成し、割り算を自由に扱うために有理数 <InlineMath math="\mathbb{Q}" /> を構成しました。
                有理数体 <InlineMath math="\mathbb{Q}" /> は四則演算が自由にでき、大小関係（順序）も整っている非常に使い勝手の良い数の体系です。しかし、実は有理数だけでは「極限」や「定積分」を扱う解析学を展開するには致命的な欠陥があります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理数の「隙間」：平方根の無理数性</h2>

            <p>
                有理数直線を想像してみましょう。任意の2つの有理数の間には必ず別の有理数（例えばそれらの平均）が存在します（<strong>有理数の稠密性</strong>）。
                一見すると、有理数だけで数直線は隙間なくびっしりと埋め尽くされているように思えます。しかし、古代ギリシャのピタゴラス学派は、「1辺の長さが <InlineMath math="1" /> の正方形の対角線の長さ」が有理数ではないこと（通約不可能であること）を発見しました。
            </p>

            <ContentBox type="theorem" title="Theorem 1.1-1 (平方根の無理数性)">
                <p>
                    <InlineMath math="x^2 = 2" /> を満たすような有理数 <InlineMath math="x" /> は存在しない。すなわち <InlineMath math="\sqrt{2}" /> は有理数ではない（無理数である）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [背理法による証明]">
                <p>
                    背理法で証明する。<InlineMath math="\sqrt{2}" /> が有理数であると仮定すると、互いに素な（これ以上約分できない）2つの自然数 <InlineMath math="p, q" /> を用いて次のように表すことができる。
                </p>
                <BlockMath math="\sqrt{2} = \frac{p}{q}" />
                <p className="mt-2">
                    両辺を2乗して分母を払うと、
                </p>
                <BlockMath math="2 = \frac{p^2}{q^2} \implies p^2 = 2q^2" />
                <p className="mt-2">
                    右辺の <InlineMath math="2q^2" /> は偶数なので、左辺の <InlineMath math="p^2" /> も偶数である。平方して偶数になる数は偶数でなければならないため、<InlineMath math="p" /> は偶数である。
                    したがって、ある自然数 <InlineMath math="k" /> を用いて <InlineMath math="p = 2k" /> と表せる。これを上式に代入する。
                </p>
                <BlockMath math="(2k)^2 = 2q^2 \implies 4k^2 = 2q^2 \implies q^2 = 2k^2" />
                <p className="mt-2">
                    同様の論理から、右辺の <InlineMath math="2k^2" /> が偶数なので、<InlineMath math="q^2" /> も偶数となり、<InlineMath math="q" /> も偶数であることが分かる。
                </p>
                <p className="mt-2">
                    すると、<InlineMath math="p" /> と <InlineMath math="q" /> は共に偶数（すなわち2を公約数として持つ）ということになる。
                    これは最初に「<InlineMath math="p" /> と <InlineMath math="q" /> は互いに素である（公約数を持たない）」と仮定したことに矛盾する。
                </p>
                <p className="mt-2">
                    したがって、最初の仮定が誤りであり、<InlineMath math="\sqrt{2}" /> は有理数ではない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有理数体の「完備性の欠如」</h2>

            <p>
                <InlineMath math="\sqrt{2}" /> のような無理数の存在は、単に「分数で書けない数がある」という以上の、解析学における決定的な問題を提起します。それは、<strong>「極限の行き先が存在しない」</strong>ということです。
            </p>

            <ContentBox type="remark" title="極限を持たないコーシー列">
                <p>
                    次のような有理数の数列 <InlineMath math="\{a_n\}" /> を考えます。
                </p>
                <BlockMath math="a_1 = 1, \quad a_2 = 1.4, \quad a_3 = 1.41, \quad a_4 = 1.414, \quad a_5 = 1.4142, \dots" />
                <p className="mt-2">
                    この数列の各項は明らかにすべて有理数です。<InlineMath math="n" /> が大きくなるにつれて、項同士の間隔はどんどん狭くなっていきます（このような数列を<strong>コーシー列</strong>と呼びます）。
                    極限の行き先が「ある」とすれば、それは紛れもなく <InlineMath math="\sqrt{2}" /> です。
                </p>
                <p className="mt-2 font-bold text-red-600 dark:text-red-400">
                    しかし、もし私たちが「有理数 <InlineMath math="\mathbb{Q}" /> の世界」にしか住んでいないとしたらどうなるでしょうか？
                </p>
                <p className="mt-2">
                    この数列は、互いの距離をどこまでも縮め合いながら「何か」に向かって収束しようとしているのに、その到達目標である <InlineMath math="\sqrt{2}" /> が私たちの世界（有理数）には存在しません。
                    つまり、<strong>「コーシー列（収束しようとしている列）であるにもかかわらず、極限値を持たない」</strong>という事態が発生するのです。
                </p>
            </ContentBox>

            <p>
                このように、「隙間（穴）」が空いていて極限操作が保証されない性質を<strong>完備性（Completeness）が欠如している</strong>と言います。微積分は極限操作の連続です。穴だらけの有理数直線のままでは、中間値の定理も最大値定理も証明できず、解析学を構築することができません。
            </p>
            <p>
                そこで、19世紀の数学者たちは、この有理数直線の「隙間」を完全に埋め尽くし、極限操作が必ずその世界の中で完結するような新しい数の体系、すなわち<strong>実数（<InlineMath math="\mathbb{R}" />）</strong>を厳密に構成する方法を考案しました。
                次節以降で、その代表的な2つのアプローチ（デデキント切断とコーシー列）を見ていきます。
            </p>
        </section>
    );
}
