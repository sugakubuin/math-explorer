import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PIDImpliesUFD() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第6章で「ED ならば PID」であることを証明しました。本節では、そのさらに次なる包含関係として「PID ならば UFD」であることを証明します。これにより、「体 <InlineMath math="\subsetneq" /> ED <InlineMath math="\subsetneq" /> PID <InlineMath math="\subsetneq" /> UFD」という美しい階層構造が完成に近づきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分解の存在（PID で既約分解が常に存在すること）</h2>

            <p className="leading-relaxed">
                UFD であることを示すには、「分解の存在」と「分解の一意性」の2つを示す必要があります。まずは、任意の元が有限個の既約元に分解できる（無限に分解し続けられない）ことを示すための補題を用意します。
            </p>

            <ContentBox type="lemma" title="Lemma 7.3-1 (PID では昇鎖条件が成立)">
                <p>
                    単項イデアル整域（PID）において、イデアルの増大する列（昇鎖）
                </p>
                <BlockMath math="(a_1) \subset (a_2) \subset \dots \subset (a_n) \subset \dots" />
                <p>
                    は必ず有限で停止する。すなわち、ある番号 <InlineMath math="N" /> が存在して、<InlineMath math="n \geq N" /> ならば <InlineMath math="(a_n) = (a_N)" /> となる。（これを昇鎖条件、ACC という。詳しくは第9章で扱う）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この昇鎖の和集合 <InlineMath math="I = \bigcup_{n=1}^\infty (a_n)" /> を考える。イデアルの増大列の和集合は、再びイデアルになることが容易に確認できる。
                </p>
                <p>
                    環は PID であるから、この和集合イデアル <InlineMath math="I" /> もある1つの元 <InlineMath math="a" /> によって生成される。つまり <InlineMath math="I = (a)" /> である。
                </p>
                <p>
                    <InlineMath math="a \in I" /> であり、<InlineMath math="I" /> は各 <InlineMath math="(a_n)" /> の和集合であるから、ある番号 <InlineMath math="N" /> が存在して <InlineMath math="a \in (a_N)" /> となる。
                </p>
                <p>
                    すると、任意の <InlineMath math="n \geq N" /> に対して
                </p>
                <BlockMath math="I = (a) \subset (a_N) \subset (a_n) \subset I" />
                <p>
                    となるため、すべてが一致し <InlineMath math="(a_n) = (a_N)" /> となる。よって昇鎖は有限で停止する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この「昇鎖が止まる」という性質を使うと、既約分解が無限に続くようなケースを排除でき、分解の存在が保証されます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-1 (PID では既約分解の存在)">
                <p>
                    単項イデアル整域（PID）の任意の元（非零・非単元）は、有限個の既約元の積に分解できる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    背理法で示す。PID である環 <InlineMath math="D" /> において、既約元の有限積で書けない元が存在すると仮定し、そのような元の1つを <InlineMath math="x" /> とする。
                </p>
                <p>
                    <InlineMath math="x" /> は既約元ではない（既約元なら要素1個の積となる）ので、非単元 <InlineMath math="y, z" /> を用いて <InlineMath math="x = yz" /> と分解できる。<InlineMath math="x" /> が有限積で書けないのだから、<InlineMath math="y" /> と <InlineMath math="z" /> の少なくとも一方は有限積で書けない。それを <InlineMath math="x_1" />（例えば <InlineMath math="x_1 = y" />）とする。
                </p>
                <p>
                    このとき <InlineMath math="x = x_1 z" /> であり、<InlineMath math="z" /> は非単元だから、イデアルの包含関係は <InlineMath math="(x) \subsetneq (x_1)" /> となる（真の包含）。
                </p>
                <p>
                    同様に、<InlineMath math="x_1" /> も有限積で書けないので <InlineMath math="x_1 = x_2 w" /> と分解でき、<InlineMath math="(x_1) \subsetneq (x_2)" /> となる。<br />
                    これを無限に繰り返すと、
                </p>
                <BlockMath math="(x) \subsetneq (x_1) \subsetneq (x_2) \subsetneq \dots" />
                <p>
                    という、いつまでも停止しないイデアルの無限の昇鎖ができてしまう。これは Lemma 7.3-1（昇鎖条件）に矛盾する。
                </p>
                <p>
                    したがって、すべての元は有限個の既約元の積に分解されなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分解の一意性</h2>

            <p className="leading-relaxed">
                分解が存在することがわかったので、次はその分解が一意であることを示します。ここで、PID では「既約元と素元が一致する」という性質（Proposition 6.3-1）が決定的な役割を果たします。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (PID ならば UFD)">
                <p>
                    任意の単項イデアル整域（PID）は、一意分解整域（UFD）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Proposition 7.3-1 より分解の存在は既に示されている。ここでは一意性を示す。ある元が2通りの既約分解を持ったと仮定する。
                </p>
                <BlockMath math="p_1 p_2 \cdots p_n = q_1 q_2 \cdots q_m" />
                <p>
                    （各 <InlineMath math="p_i, q_j" /> は既約元であり、必要なら並べ替えて <InlineMath math="n \leq m" /> とする）
                </p>
                <p>
                    PID においては、既約元は素元である（Proposition 6.3-1）。<InlineMath math="p_1" /> は素元であり、左辺を割り切るため、右辺の積 <InlineMath math="q_1 \cdots q_m" /> も割り切る。<br />
                    素元の定義を繰り返し適用すると、<InlineMath math="p_1" /> はある <InlineMath math="q_k" /> を割り切ることがわかる。順番を入れ替えて、<InlineMath math="p_1 \mid q_1" /> と仮定してよい。
                </p>
                <p>
                    つまり <InlineMath math="q_1 = p_1 u" /> と書ける。しかし <InlineMath math="q_1" /> も既約元であるため、非自明な分解を持たない。したがって <InlineMath math="u" /> は単元でなければならず、<InlineMath math="p_1" /> と <InlineMath math="q_1" /> は同伴（単元倍を除いて等しい）である。
                </p>
                <p>
                    両辺を <InlineMath math="p_1" /> で割る（整域なので消去法則が使える）と、
                </p>
                <BlockMath math="p_2 \cdots p_n = u q_2 \cdots q_m" />
                <p>
                    となる。この操作を <InlineMath math="p_2, p_3, \dots, p_n" /> について帰納的に繰り返していくと、最終的に左辺は <InlineMath math="1" /> になる。
                </p>
                <p>
                    もし <InlineMath math="n < m" /> であったなら、左辺は <InlineMath math="1" /> なのに右辺には既約元 <InlineMath math="q" /> が残ってしまい矛盾する。よって <InlineMath math="n = m" /> であり、すべての <InlineMath math="p_i" /> は対応する <InlineMath math="q_i" /> と単元倍を除いて完全に一致する。これで一意性が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                これまでに学んだ階層関係を整理すると、ED（互除法ができる環）であれば自動的に UFD（一意分解できる環）になることがわかります。
            </p>

            <ContentBox type="example" title={<span>Example 7.3-1 (<InlineMath math="\mathbb{Z}[i]" /> は UFD)</span>}>
                <p>
                    ガウス整数環 <InlineMath math="\mathbb{Z}[i]" /> は ED であった（Theorem 5.2-1）。<br />
                    「ED <InlineMath math="\implies" /> PID」（Theorem 6.2-1）と、「PID <InlineMath math="\implies" /> UFD」（Theorem 7.3-1）により、<InlineMath math="\mathbb{Z}[i]" /> は UFD であることが自動的に保証される。
                </p>
                <p>
                    例えば、<InlineMath math="5 \in \mathbb{Z}[i]" /> は <InlineMath math="5 = (2+i)(2-i)" /> と分解される。<br />
                    <InlineMath math="N(2+i) = 5" /> は通常の素数であるため、これ以上小さなノルムを持つ元（単元を除く）の積に分解できず、<InlineMath math="2+i" /> および <InlineMath math="2-i" /> は <InlineMath math="\mathbb{Z}[i]" /> における既約元である。
                </p>
                <p>
                    <InlineMath math="\mathbb{Z}[i]" /> は UFD であるため、<InlineMath math="5" /> の分解は単元倍（<InlineMath math="\pm 1, \pm i" />）と順序の違いを除いて、この <InlineMath math="(2+i)(2-i)" /> という形に限られる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>PID におけるイデアルの昇鎖は必ず有限で停止する（昇鎖条件 / ACC）。</li>
                    <li>この昇鎖条件のおかげで、無限に分解が続くことはなく、任意の元の既約分解の存在が保証される。</li>
                    <li>「PID では既約元が素元になる」という性質を利用することで、分解の一意性も導かれる。</li>
                    <li>結論として、<b>PID ならば UFD</b> である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
