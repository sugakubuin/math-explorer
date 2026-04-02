import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function EDImpliesPID() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で挙げた PID の代表例（<InlineMath math="\mathbb{Z}" /> や <InlineMath math="F[x]" />）は、実はどちらも前章で学んだ「ユークリッド整域（ED）」でもありました。これらが偶然一致しているわけではなく、ED であれば必ず PID になるという強力な定理が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ED から PID への包含</h2>

            <p className="leading-relaxed">
                除法の原理（余り付きの割り算）が実行できる環では、イデアルの中から「一番小さい」元を見つけてくることで、その元がイデアル全体を生成することを示すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ED ならば PID)">
                <p>
                    任意のユークリッド整域（ED）は、単項イデアル整域（PID）である。
                </p>
                <p>
                    具体的には、ED <InlineMath math="D" /> の任意の非零イデアル <InlineMath math="I" /> に対して、<InlineMath math="I" /> の元の中でノルム <InlineMath math="N" /> が最小となる非零元を <InlineMath math="d" /> とすると、<InlineMath math="I = (d)" /> が成立する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="D" /> をノルム <InlineMath math="N" /> を持つ ED とする。<InlineMath math="I" /> を <InlineMath math="D" /> の任意のイデアルとする。<InlineMath math="I = \{0\}" /> の場合は自明に <InlineMath math="I = (0)" /> となり主イデアルである。
                </p>
                <p>
                    <InlineMath math="I \neq \{0\}" /> の場合を考える。<InlineMath math="I" /> に属する非零元のノルムの集合 <InlineMath math="\{ N(a) \mid a \in I \setminus \{0\} \}" /> は非負整数の空でない部分集合である。自然数の整列性より、この集合には最小値が存在する。その最小のノルムを与える <InlineMath math="I" /> の元の一つを <InlineMath math="d" /> とする。
                </p>
                <p>
                    <InlineMath math="d \in I" /> であり、<InlineMath math="I" /> はイデアルだから <InlineMath math="(d) \subset I" /> であることは明らかである。逆に <InlineMath math="I \subset (d)" /> を示す。
                </p>
                <p>
                    任意の <InlineMath math="a \in I" /> をとる。<InlineMath math="D" /> は ED なので、<InlineMath math="a" /> を <InlineMath math="d" /> で割る除法の原理を適用すると、
                </p>
                <BlockMath math="a = qd + r \quad (r = 0 \text{ または } N(r) < N(d))" />
                <p>
                    を満たす <InlineMath math="q, r \in D" /> が存在する。ここで余り <InlineMath math="r" /> について考えると、
                </p>
                <BlockMath math="r = a - qd" />
                <p>
                    である。<InlineMath math="a \in I" /> であり、<InlineMath math="d \in I" /> だから <InlineMath math="qd \in I" /> でもある。イデアルは加法・減法について閉じているため、<InlineMath math="r = a - qd \in I" /> となる。
                </p>
                <p>
                    もし <InlineMath math="r \neq 0" /> であれば、<InlineMath math="r \in I \setminus \{0\}" /> かつ <InlineMath math="N(r) < N(d)" /> となる。しかし、これは <InlineMath math="d" /> が「<InlineMath math="I" /> の非零元の中でノルムが最小である」という取り方に矛盾する。
                </p>
                <p>
                    したがって、<InlineMath math="r = 0" /> でなければならない。すなわち <InlineMath math="a = qd" /> であり、<InlineMath math="a \in (d)" /> が示された。これで <InlineMath math="I \subset (d)" /> も言えたため、<InlineMath math="I = (d)" /> となり、<InlineMath math="I" /> は主イデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理が主張していることを、整数環での具体的なイデアルを使って確認してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 6.2-1 (<InlineMath math="\mathbb{Z}" /> での確認)</span>}>
                <p>
                    整数環 <InlineMath math="\mathbb{Z}" /> において、「6の倍数と9の倍数をすべて集めた集合」から生成されるイデアル <InlineMath math="I = (6, 9)" /> を考える。
                </p>
                <p>
                    このイデアル <InlineMath math="I" /> に含まれる正の整数を列挙すると、<InlineMath math="3, 6, 9, 12, 15, \dots" /> となる。この中で絶対値（ノルム）が最も小さいものは <InlineMath math="3" /> である。
                </p>
                <p>
                    定理の証明の通り、イデアル <InlineMath math="I" /> の任意の元 <InlineMath math="a" /> をこの最小元 <InlineMath math="3" /> で割ってみると、もし余りが出ればその余り（<InlineMath math="1" /> か <InlineMath math="2" />）も <InlineMath math="I" /> に入ってしまうことになるが、<InlineMath math="3" /> より小さい正の元は <InlineMath math="I" /> に存在しないため、必ず割り切れる。
                </p>
                <p>
                    よって <InlineMath math="I = (3)" /> となり、確かに単一の元で生成される。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆が成立しない例</h2>

            <p className="leading-relaxed">
                Theorem 6.2-1 により「ED <InlineMath math="\implies" /> PID」が示されましたが、その逆「PID <InlineMath math="\implies" /> ED」は一般には成り立ちません。すなわち、すべてのイデアルが単項生成であるにもかかわらず、うまい割り算（互除法）が定義できないような整域が存在します。
            </p>

            <ContentBox type="example" title="Example 6.2-2 (PID だが ED でない例)">
                <p>
                    複素数平面上の格子点のなす環の一つである
                </p>
                <BlockMath math="\mathbb{Z}\left[\frac{1+\sqrt{-19}}{2}\right]" />
                <p>
                    は、PID であるが ED ではない環の代表的な例として知られている。
                </p>
                <p>
                    この環では任意のイデアルは 1 つの元で生成されるが、どのようなノルム関数を定義しようとしても、すべての元に対して除法の原理（余りが小さくなるような割り算）を機能させることができない。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (環の階層構造)">
                <p>
                    このように、ED と PID の間には「ED <InlineMath math="\subsetneq" /> PID」という真の包含関係があります。次章で導入する「一意分解整域（UFD）」と合わせると、
                </p>
                <BlockMath math="\text{体} \subsetneq \text{ED} \subsetneq \text{PID} \subsetneq \text{UFD} \subsetneq \text{整域}" />
                <p>
                    という美しい階層構造が形成されます。条件が厳しい（強い）クラスほど、私たちがよく知る有理数や整数の性質に近い、扱いやすい環だと言えます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意のユークリッド整域（ED）は単項イデアル整域（PID）である。</li>
                    <li>証明の鍵は、イデアルの中から「ノルムが最小の非零元」を選ぶと、除法の原理によりその元がイデアル全体を生成することを示す点にある。</li>
                    <li>逆は成り立たず、PID であっても ED ではない（割り算の原理が機能しない）環が存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
