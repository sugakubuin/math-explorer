import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PrimeIdealsInPID() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第3章では「素イデアル」と「極大イデアル」という 2 つの重要なイデアルのクラスを学び、一般の可換環においては「極大イデアルならば素イデアルだが、逆は成り立たない（素イデアルであっても極大とは限らない）」ことを見ました。しかし、対象を PID に限ると、この状況が一変します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PID での素イデアルと極大イデアルの一致</h2>

            <p className="leading-relaxed">
                単項イデアル整域（PID）においては、「零イデアル以外の素イデアル」は直ちに極大イデアルになるという強力な性質を持っています。
            </p>

            <ContentBox type="theorem" title="Theorem 6.3-1 (PID における非零素イデアルは極大)">
                <p>
                    単項イデアル整域（PID）<InlineMath math="D" /> において、零でない素イデアル <InlineMath math="P \neq (0)" /> は極大イデアルである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="D" /> は PID なので、素イデアル <InlineMath math="P" /> はある元 <InlineMath math="p \in D" /> を用いて <InlineMath math="P = (p)" /> と書ける。<InlineMath math="P \neq (0)" /> より <InlineMath math="p \neq 0" /> である。
                </p>
                <p>
                    <InlineMath math="P" /> が極大イデアルであることを示すため、<InlineMath math="P" /> を含む任意のイデアル <InlineMath math="I" />（すなわち <InlineMath math="P \subset I" />）を考える。<InlineMath math="D" /> は PID なので、<InlineMath math="I" /> もある元 <InlineMath math="a \in D" /> で <InlineMath math="I = (a)" /> と生成される。
                </p>
                <p>
                    <InlineMath math="(p) \subset (a)" /> であることは、<InlineMath math="p \in (a)" /> を意味する。つまり、ある <InlineMath math="b \in D" /> が存在して
                </p>
                <BlockMath math="p = ab" />
                <p>
                    と書ける。ここで <InlineMath math="P = (p)" /> は素イデアルであり、<InlineMath math="ab = p \in P" /> であるから、素イデアルの定義により <InlineMath math="a \in P" /> または <InlineMath math="b \in P" /> のどちらかが成り立つ。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>ケース1：<InlineMath math="a \in P" /> の場合</b><br />
                        <InlineMath math="a \in P" /> ならば <InlineMath math="(a) \subset P" /> である。前提として <InlineMath math="P \subset (a)" /> であったから、<InlineMath math="P = (a) = I" /> となる。
                    </li>
                    <li>
                        <b>ケース2：<InlineMath math="b \in P" /> の場合</b><br />
                        <InlineMath math="b \in P = (p)" /> ならば、ある <InlineMath math="c \in D" /> が存在して <InlineMath math="b = pc" /> と書ける。<br />
                        これを <InlineMath math="p = ab" /> に代入すると <InlineMath math="p = a(pc) = (ac)p" /> となる。<br />
                        <InlineMath math="p \neq 0" /> であり、<InlineMath math="D" /> は整域（消去法則が成り立つ）であるから、両辺から <InlineMath math="p" /> を消去して <InlineMath math="1 = ac" /> を得る。<br />
                        これは <InlineMath math="a" /> が可逆元（単元）であることを意味する。単元を含むイデアルは環全体に一致するため、<InlineMath math="I = (a) = D" /> となる。
                    </li>
                </ul>
                <p className="mt-2">
                    以上より、<InlineMath math="P" /> を含むイデアル <InlineMath math="I" /> は、<InlineMath math="I = P" /> または <InlineMath math="I = D" /> のいずれかに限られる。よって <InlineMath math="P" /> は極大イデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この定理は、整域の中で PID がいかに「細長い」真っ直ぐな構造をしているかを示しています。
            </p>

            <ContentBox type="example" title={<span>Example 6.3-1 (<InlineMath math="\mathbb{Z}" /> での確認)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}" /> は PID である。素数 3 が生成するイデアル <InlineMath math="(3)" /> は素イデアルであり、定理の通り極大イデアルでもある。実際、<InlineMath math="(3)" /> を真に含む真のイデアルは存在しない。
                </p>
                <p>
                    一方で、零イデアル <InlineMath math="(0)" /> について考えてみよう。<InlineMath math="\mathbb{Z}" /> は整域だから <InlineMath math="(0)" /> は素イデアルである（<InlineMath math="ab=0 \implies a=0 \text{ または } b=0" />）。しかし、<InlineMath math="(0) \subsetneq (3) \subsetneq \mathbb{Z}" /> のように <InlineMath math="(0)" /> を真に含む真のイデアルが存在するため、<InlineMath math="(0)" /> は極大イデアルではない。
                </p>
                <p>
                    このように、Theorem 6.3-1 において「非零」という条件は必須である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">PID の素元と既約元</h2>

            <p className="leading-relaxed">
                イデアルの性質を、それを生成する「元の性質」という観点から翻訳してみましょう。「これ以上分解できない元」を表す概念として、素元と既約元の 2 つがあります。
            </p>

            <ContentBox type="definition" title="Definition 6.3-1 (既約元と素元)">
                <p>
                    整域 <InlineMath math="D" /> の非零かつ単元でない元 <InlineMath math="p" /> について：
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <b>既約元（irreducible element）：</b><br />
                        <InlineMath math="p = ab" /> と積の形に書けるならば、必ず <InlineMath math="a" /> または <InlineMath math="b" /> のどちらかが単元である。
                        （自明な分解しか持たない、つまり「これ以上小さく砕けない」ことを意味する）
                    </li>
                    <li>
                        <b>素元（prime element）：</b><br />
                        <InlineMath math="p \mid ab" /> ならば、必ず <InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> が成り立つ。
                        （これはイデアル <InlineMath math="(p)" /> が素イデアルであることと同値である）
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed">
                一般の整域では「素元 <InlineMath math="\implies" /> 既約元」は常に成り立ちますが、逆の「既約元 <InlineMath math="\implies" /> 素元」は成り立ちません（反例は次章の UFD で詳しく扱います）。しかし、PID においてはこの両者が完全に一致します。
            </p>

            <ContentBox type="proposition" title="Proposition 6.3-1 (PID では素元と既約元が一致する)">
                <p>
                    単項イデアル整域（PID）において、元 <InlineMath math="p" /> が素元であることと、既約元であることは同値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="(\implies)" /> 素元ならば既約元であること（これは一般の整域で成立）：<br />
                    <InlineMath math="p" /> を素元とし、<InlineMath math="p = ab" /> と分解できたとする。<InlineMath math="p \mid ab" /> なので素元の定義から <InlineMath math="p \mid a" /> または <InlineMath math="p \mid b" /> である。<br />
                    もし <InlineMath math="p \mid a" /> ならば <InlineMath math="a = pc" /> と書ける。これを <InlineMath math="p=ab" /> に代入し <InlineMath math="p = pcb" />。<InlineMath math="p \neq 0" /> より消去して <InlineMath math="1 = cb" /> となり、<InlineMath math="b" /> は単元。<InlineMath math="p \mid b" /> の場合も同様に <InlineMath math="a" /> が単元となるため、<InlineMath math="p" /> は既約元である。
                </p>
                <p>
                    <InlineMath math="(\impliedby)" /> 既約元ならば素元であること（PID で成立）：<br />
                    <InlineMath math="p" /> を既約元とする。生成するイデアル <InlineMath math="(p)" /> を含むイデアル <InlineMath math="I = (a)" /> を考える（PIDなので主イデアル）。<br />
                    <InlineMath math="(p) \subset (a)" /> より <InlineMath math="p = ab" /> と書ける。<InlineMath math="p" /> は既約元だから、<InlineMath math="a" /> または <InlineMath math="b" /> が単元である。<br />
                    <InlineMath math="a" /> が単元なら <InlineMath math="(a) = D" />。<InlineMath math="b" /> が単元なら <InlineMath math="(p) = (a)" />。<br />
                    よって <InlineMath math="(p)" /> を真に含む真のイデアルは存在せず、<InlineMath math="(p)" /> は極大イデアルである。<br />
                    極大イデアルは素イデアルであるため（Proposition 3.2-1）、<InlineMath math="(p)" /> は素イデアルであり、すなわち <InlineMath math="p" /> は素元である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                PID ではない環では、この同値性が崩れる例が存在します。
            </p>

            <ContentBox type="example" title={<span>Example 6.3-2 (<InlineMath math="\mathbb{Z}[x]" /> では同値が成立しない)</span>}>
                <p>
                    <InlineMath math="\mathbb{Z}[x]" /> は PID ではない（Example 6.1-3）。この環における定数 <InlineMath math="2" /> を考える。
                </p>
                <p>
                    <InlineMath math="2" /> は <InlineMath math="\mathbb{Z}[x]" /> において既約元である。<InlineMath math="2 = f(x)g(x)" /> とすると、次数の比較から <InlineMath math="f, g" /> は定数であり、<InlineMath math="\mathbb{Z}" /> での分解 <InlineMath math="2 = 1 \cdot 2" /> または <InlineMath math="-1 \cdot -2" /> しか持たないからである（<InlineMath math="\pm 1" /> は単元）。
                </p>
                <p>
                    しかし、<InlineMath math="2" /> は素元ではない。<InlineMath math="2" /> が生成するイデアル <InlineMath math="(2)" /> の剰余環は <InlineMath math="\mathbb{Z}[x]/(2) \cong (\mathbb{Z}/2\mathbb{Z})[x]" /> である。これは整域ではあるが、先ほど見たように極大イデアルではない（<InlineMath math="(2) \subsetneq (2, x)" />）。
                </p>
                <p>
                    別の観点からの反例は第7章でさらに詳しく探求する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>PID においては、非零の素イデアルはすべて極大イデアルになる。</li>
                    <li>一般の整域では「素元ならば既約元」が成り立つが、PID においてはその逆「既約元ならば素元」も成り立つ。</li>
                    <li>これらの性質は、PID が持つ構造の「シンプルさ（1次元的であること）」に起因している。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
