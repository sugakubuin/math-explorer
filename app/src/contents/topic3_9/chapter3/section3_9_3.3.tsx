import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZornsLemmaAndMaximalIdeals() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                極大イデアルが重要な概念であることは前節で学びましたが、任意の環において極大イデアルは「必ず存在する」のでしょうか？本節では、集合論の強力な道具である「ツォルンの補題」を用いて、極大イデアルが常に存在することを証明します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ツォルンの補題の準備</h2>

            <p className="leading-relaxed">
                極大イデアルの存在を示すためには、無限集合に対する公理的アプローチが必要です。まずはその前提となる集合論の言葉を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (帰納的順序集合)">
                <p>
                    半順序集合 <InlineMath math="(S, \leq)" /> が<b>帰納的順序集合（inductive ordered set）</b>であるとは、<InlineMath math="S" /> の任意の全順序部分集合（これを鎖（chain）と呼ぶ）が <InlineMath math="S" /> 内に上界を持つことをいう。
                </p>
                <p>
                    すなわち、鎖 <InlineMath math="C \subset S" /> が与えられたとき、ある元 <InlineMath math="u \in S" /> が存在して、すべての <InlineMath math="c \in C" /> に対して <InlineMath math="c \leq u" /> が成り立つということである。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                これを用いて、選択公理と同値であることが知られている「ツォルンの補題」を導入します。
            </p>

            <ContentBox type="axiom" title="Axiom 3.3-1 (ツォルンの補題)">
                <p>
                    空でない帰納的順序集合 <InlineMath math="(S, \leq)" /> は、少なくとも1つの<b>極大元（maximal element）</b>を持つ。
                </p>
                <p>
                    ※極大元とは、<InlineMath math="m \leq x" /> となる <InlineMath math="x \in S" /> が存在すれば必ず <InlineMath math="x = m" /> となるような元 <InlineMath math="m \in S" /> のことである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (選択公理とツォルンの補題)">
                <p>
                    ツォルンの補題は、集合論の標準的な公理系（ZFC公理系）において「選択公理」および「整列定理」と同値な命題です（トピック「2-4 素朴集合論」を参照）。代数学において、無限次元のベクトル空間の基底の存在や、本節で扱う極大イデアルの存在を示す際に、このツォルンの補題が決定的な役割を果たします。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極大イデアルの存在定理</h2>

            <p className="leading-relaxed">
                ツォルンの補題を用いることで、任意の真のイデアルを包み込むような極大イデアルの存在を鮮やかに示すことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (極大イデアルの存在)">
                <p>
                    <InlineMath math="1 \neq 0" /> を満たす可換環 <InlineMath math="R" /> において、任意の真のイデアル <InlineMath math="I \subsetneq R" /> に対して、<InlineMath math="I" /> を含む極大イデアル <InlineMath math="M" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="I" /> を含む <InlineMath math="R" /> の真のイデアル全体からなる集合族 <InlineMath math="\mathcal{F}" /> を考える：
                </p>
                <BlockMath math="\mathcal{F} = \{ J \mid J \text{ は } R \text{ のイデアルで } I \subset J \subsetneq R \}" />
                <p>
                    <InlineMath math="I" /> 自身が <InlineMath math="\mathcal{F}" /> の元であるから、<InlineMath math="\mathcal{F}" /> は空ではない。<InlineMath math="\mathcal{F}" /> に包含関係 <InlineMath math="\subset" /> で半順序を入れる。ツォルンの補題を適用するため、<InlineMath math="\mathcal{F}" /> が帰納的順序集合であることを示す。
                </p>
                <p>
                    <InlineMath math="\mathcal{F}" /> の任意の鎖（全順序部分集合）を <InlineMath math="\{ J_\lambda \}_{\lambda \in \Lambda}" /> とする。これらの和集合 <InlineMath math="U = \bigcup_{\lambda \in \Lambda} J_\lambda" /> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><InlineMath math="U" /> はイデアルになる：鎖の性質から、<InlineMath math="x, y \in U" /> ならばある <InlineMath math="\lambda" /> が存在して <InlineMath math="x, y \in J_\lambda" /> とでき、<InlineMath math="J_\lambda" /> がイデアルだから <InlineMath math="x-y \in J_\lambda \subset U" />。スカラー倍も同様。</li>
                    <li><InlineMath math="U" /> は真のイデアルである：各 <InlineMath math="J_\lambda" /> は真のイデアルだから単位元 <InlineMath math="1" /> を含まない。したがってその和集合 <InlineMath math="U" /> も <InlineMath math="1" /> を含まない。ゆえに <InlineMath math="U \subsetneq R" />。</li>
                </ul>
                <p className="mt-2">
                    また、すべての <InlineMath math="\lambda" /> に対して <InlineMath math="J_\lambda \subset U" /> であるから、<InlineMath math="U" /> は鎖の上界である。
                </p>
                <p>
                    以上より <InlineMath math="\mathcal{F}" /> は帰納的順序集合である。ツォルンの補題により、<InlineMath math="\mathcal{F}" /> には極大元 <InlineMath math="M" /> が存在する。
                </p>
                <p>
                    この <InlineMath math="M" /> は <InlineMath math="\mathcal{F}" /> の元であるため <InlineMath math="I \subset M \subsetneq R" /> を満たす真のイデアルである。<InlineMath math="\mathcal{F}" /> における極大性とは、<InlineMath math="M \subsetneq J \subsetneq R" /> となるイデアル <InlineMath math="J" /> が存在しないことを意味し、これはまさに <InlineMath math="M" /> が環 <InlineMath math="R" /> の極大イデアルであるという定義に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                抽象的な証明でしたが、身近な整数環の例でこの定理の意味を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 3.3-1 (極大イデアルの存在の具体例)">
                <p>
                    <InlineMath math="\mathbb{Z}" /> において、真のイデアル <InlineMath math="I = (12)" /> を考える。定理によれば、<InlineMath math="(12)" /> を含むような極大イデアルが存在するはずである。
                </p>
                <p>
                    <InlineMath math="(12)" /> は <InlineMath math="12" /> の倍数全体である。<InlineMath math="12" /> を素因数分解すると <InlineMath math="12 = 2^2 \cdot 3" /> となる。これは、<InlineMath math="12" /> の倍数は必ず <InlineMath math="2" /> の倍数であり、また <InlineMath math="3" /> の倍数でもあることを意味する。
                </p>
                <p>
                    つまり、包含関係で書けば <InlineMath math="(12) \subset (2)" /> であり、<InlineMath math="(12) \subset (3)" /> でもある。前節で見たように <InlineMath math="(2)" /> や <InlineMath math="(3)" /> は極大イデアルである。このように、任意のイデアル <InlineMath math="(n)" /> は、<InlineMath math="n" /> の素因数 <InlineMath math="p" /> が生成する極大イデアル <InlineMath math="(p)" /> に必ず包まれる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="Remark (非可換環に関する注意)">
                <p>
                    本コースでは可換環を前提としていますが、非可換環においては「左極大イデアル」と「右極大イデアル」というように、掛ける方向によってイデアルの種類が分かれ、これらが一致しない場合があります。そのため非可換環の構造論はさらに複雑になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ツォルンの補題は、帰納的順序集合（任意の鎖が上界を持つ半順序集合）には極大元が存在するという、選択公理と同値な命題である。</li>
                    <li>ツォルンの補題を用いることで、可換環において任意の真のイデアルを含む極大イデアルが必ず存在することが証明される。</li>
                    <li>この定理により、環の構造を極大イデアル（あるいは素イデアル）を通じて調べるという手法が、どのような環に対しても有効であることが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
