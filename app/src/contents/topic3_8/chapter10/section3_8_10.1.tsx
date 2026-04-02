import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CauchysTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章では、有限群の構造を深く解明するための強力な道具である<b>シローの定理（Sylow Theorems）</b>について学びます。ラグランジュの定理は「部分群の位数は群の位数を割り切る」ことを主張しましたが、その逆（位数の約数に対してその位数の部分群が常に存在するか）は一般には成り立ちません。しかし、位数が素数のべき乗である場合には、特別な部分群（シロー部分群）が必ず存在し、その個数や共役性について非常に強い制約があることをシローの定理は教えてくれます。
            </p>
            <p>
                その準備段階として、まずは素数位数に関する最も基本的な存在定理である<b>コーシーの定理（Cauchy's Theorem）</b>を証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの定理の主張と証明</h2>

            <p>
                コーシーの定理は、群の位数が素数 <InlineMath math="p" /> で割り切れるならば、その群の中には必ず位数 <InlineMath math="p" /> の要素が存在するという、ラグランジュの定理の「部分的な逆」を与える定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 10.1-1 (コーシーの定理)">
                <p>
                    有限群 <InlineMath math="G" /> と素数 <InlineMath math="p" /> について、<InlineMath math="p" /> が群の位数 <InlineMath math="|G|" /> を割り切る（すなわち <InlineMath math="p \mid |G|" />）ならば、<InlineMath math="G" /> には位数がちょうど <InlineMath math="p" /> である要素が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この定理は、前章で学んだ群の作用（特に位数 <InlineMath math="p" /> の巡回群の作用）と軌道・固定群定理を用いることで鮮やかに証明できる。
                </p>
                <p>
                    まず、<InlineMath math="G" /> の要素を <InlineMath math="p" /> 個並べた組であって、その積が単位元 <InlineMath math="e" /> になるもの全体の集合 <InlineMath math="X" /> を考える。
                </p>
                <BlockMath math="X = \{(a_1, a_2, \ldots, a_p) \in G^p \mid a_1 a_2 \cdots a_p = e\}" />
                <p>
                    組の最初の <InlineMath math="p-1" /> 個の要素 <InlineMath math="a_1, \ldots, a_{p-1}" /> は <InlineMath math="G" /> から自由に選ぶことができる。このとき、最後の要素 <InlineMath math="a_p" /> は <InlineMath math="a_p = (a_1 \cdots a_{p-1})^{-1}" /> として一意に定まる。したがって、集合 <InlineMath math="X" /> の要素数は
                </p>
                <BlockMath math="|X| = |G|^{p-1}" />
                <p>
                    である。仮定より <InlineMath math="p \mid |G|" /> なので、<InlineMath math="|X|" /> も <InlineMath math="p" /> の倍数である。すなわち <InlineMath math="|X| \equiv 0 \pmod p" />。
                </p>
                <p>
                    次に、集合 <InlineMath math="X" /> に対して、巡回群 <InlineMath math="C_p = \mathbb{Z}/p\mathbb{Z}" /> を「成分の巡回シフト」として作用させる。つまり、<InlineMath math="C_p" /> の生成元 <InlineMath math="\sigma" /> に対して、
                </p>
                <BlockMath math="\sigma \cdot (a_1, a_2, \ldots, a_p) = (a_2, a_3, \ldots, a_p, a_1)" />
                <p>
                    と定義する。このシフトされた組の積は <InlineMath math="a_2 a_3 \cdots a_p a_1" /> となるが、<InlineMath math="a_1 a_2 \cdots a_p = e" /> より <InlineMath math="a_2 \cdots a_p = a_1^{-1}" /> であるため、<InlineMath math="a_2 \cdots a_p a_1 = a_1^{-1} a_1 = e" /> となり、シフトされた組も確かに <InlineMath math="X" /> に属する（作用として well-defined）。
                </p>
                <p>
                    この作用によって <InlineMath math="X" /> を軌道分解する。軌道・固定群定理とラグランジュの定理より、各軌道の大きさは <InlineMath math="C_p" /> の位数 <InlineMath math="p" /> の約数でなければならない。素数 <InlineMath math="p" /> の約数は <InlineMath math="1" /> か <InlineMath math="p" /> しかないため、各軌道の大きさは <InlineMath math="1" /> または <InlineMath math="p" /> のいずれかである。
                </p>
                <p>
                    軌道の大きさが <InlineMath math="1" /> となるのは、シフトしても元が変わらない組、すなわち <InlineMath math="a_1 = a_2 = \cdots = a_p" /> となる組 <InlineMath math="(a, a, \ldots, a)" /> に限られる。このような組は <InlineMath math="a^p = e" /> を満たす要素 <InlineMath math="a \in G" /> と一対一に対応する。大きさが 1 の軌道の数を <InlineMath math="k" /> とすると、軌道分解の要素数の和から次が成り立つ。
                </p>
                <BlockMath math="|X| = k \times 1 + (\text{大きさが } p \text{ の軌道の数}) \times p" />
                <p>
                    <InlineMath math="|X|" /> は <InlineMath math="p" /> の倍数であるから、<InlineMath math="k" /> も <InlineMath math="p" /> の倍数でなければならない（<InlineMath math="k \equiv 0 \pmod p" />）。
                </p>
                <p>
                    ここで、<InlineMath math="a = e" /> とした組 <InlineMath math="(e, e, \ldots, e)" /> は明らかに条件 <InlineMath math="e^p = e" /> を満たすため、<InlineMath math="k \geq 1" /> であることがわかっている。<InlineMath math="k" /> が <InlineMath math="1" /> 以上の <InlineMath math="p" /> の倍数であるということは、少なくとも <InlineMath math="k \geq p" /> であり、<InlineMath math="k \geq 2" /> であることを意味する。
                </p>
                <p>
                    したがって、<InlineMath math="e" /> 以外に <InlineMath math="a^p = e" /> を満たす要素 <InlineMath math="a" /> が少なくとも 1 つ（実際には <InlineMath math="p-1" /> 個以上）存在する。そのような要素 <InlineMath math="a \neq e" /> の位数は <InlineMath math="p" /> の約数であり、<InlineMath math="p" /> が素数であることから位数はちょうど <InlineMath math="p" /> となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この証明は「巡回シフトの作用」という巧妙なアイデアを用いており、群論における非常に美しい証明の 1 つとして知られています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシーの定理の応用</h2>

            <p>
                コーシーの定理を用いると、ある位数を持つ群のなかにどのような要素が隠れているかを即座に見抜くことができます。これは有限群を分類する第一歩となります。
            </p>

            <ContentBox type="example" title="Example 10.1-1 (位数 15 の群の要素)">
                <p>
                    位数が <InlineMath math="|G| = 15 = 3 \times 5" /> である有限群 <InlineMath math="G" /> を考える。
                </p>
                <p>
                    群の位数は素数 3 と 5 で割り切れるため、コーシーの定理より、<InlineMath math="G" /> の中には必ず<b>位数 3 の要素</b>と<b>位数 5 の要素</b>が少なくとも 1 つずつ存在することが保証される。
                </p>
                <p>
                    これらの要素が生成する巡回部分群を考えると、それぞれ位数が 3 と 5 の部分群が存在することになる。これは後述する「シロー部分群」の存在を具体的に確認した例となっている。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 10.1-2 (位数 6 の群の分類の出発点)">
                <p>
                    位数が <InlineMath math="|G| = 6 = 2 \times 3" /> の群を考える。
                </p>
                <p>
                    コーシーの定理より、位数 2 の要素 <InlineMath math="a" /> と、位数 3 の要素 <InlineMath math="b" /> が必ず存在する。これらが生成する部分群は <InlineMath math="H = \langle a \rangle = \{e, a\}" /> と <InlineMath math="K = \langle b \rangle = \{e, b, b^2\}" /> である。
                </p>
                <p>
                    これらの要素がどのように交換（可換か非可換か）するかを調べることで、位数 6 の群はアーベル群である巡回群 <InlineMath math="\mathbb{Z}/6\mathbb{Z}" /> と、非可換群である対称群 <InlineMath math="S_3" /> のちょうど 2 種類しか存在しないことが証明できる。コーシーの定理はこのような分類議論の最も基本的な出発点を提供する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ラグランジュの定理の逆への挑戦">
                <p>
                    ラグランジュの定理は「部分群の位数は群の位数を割り切る」というものでした。では、「群の位数の約数 <InlineMath math="d" /> が与えられたとき、位数 <InlineMath math="d" /> の部分群は常に存在するか？」という疑問が自然に湧きます。
                </p>
                <p>
                    一般にはこれは成り立ちません（反例として、位数 12 の交代群 <InlineMath math="A_4" /> には位数 6 の部分群が存在しません）。しかしコーシーの定理は、<b>「約数が素数である場合に限っては、逆が成り立つ」</b>ことを保証しています。そして次節で学ぶシローの定理は、これをさらに押し広げ、<b>「約数が素数べき（<InlineMath math="p^k" />）である場合にも逆が成り立つ」</b>という驚くべき事実を主張します。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>コーシーの定理：</b> 素数 <InlineMath math="p" /> が有限群 <InlineMath math="G" /> の位数を割り切るなら、<InlineMath math="G" /> には必ず位数 <InlineMath math="p" /> の要素が存在する。</li>
                    <li>証明は、積が単位元になる <InlineMath math="p" /> 個の要素の組に対する巡回シフトの作用と、その軌道分解を用いて行われる。</li>
                    <li>この定理により、群の位数を素因数分解するだけで、その群がどのような素数位数の部分群を含んでいるかを即座に判定できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}