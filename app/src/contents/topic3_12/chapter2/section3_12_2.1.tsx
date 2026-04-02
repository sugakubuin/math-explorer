import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionPathsAndLoops() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                本章から、空間の位相的性質を代数的に取り出すための強力な道具である「基本群」を構成していきます。その第一歩として、空間内を連続的に移動する「道（パス）」とその演算について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">道の定義と結合</h2>

            <p className="leading-relaxed">
                空間内の 2 点を結ぶ曲線を、単位区間 <InlineMath math="[0,1]" /> からの連続写像として定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-1 (道)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> における<strong>道（path, パス）</strong>とは、閉区間 <InlineMath math="I = [0,1]" /> から <InlineMath math="X" /> への連続写像 <InlineMath math="\gamma : [0,1] \to X" /> のことである。
                </p>
                <p>
                    このとき、点 <InlineMath math="\gamma(0)" /> を道の<strong>始点</strong>、点 <InlineMath math="\gamma(1)" /> を道の<strong>終点</strong>という。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                ある道の終点と、別の道の始点が一致しているとき、それらを繋げて 1 つの新しい道を作ることができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-2 (道の結合)"
            >
                <p>
                    空間 <InlineMath math="X" /> 内の 2 つの道 <InlineMath math="\alpha, \beta" /> が <InlineMath math="\alpha(1) = \beta(0)" />（<InlineMath math="\alpha" /> の終点と <InlineMath math="\beta" /> の始点が一致する）を満たすとする。このとき、<InlineMath math="\alpha" /> と <InlineMath math="\beta" /> の<strong>結合（concatenation）</strong> <InlineMath math="\alpha * \beta : [0,1] \to X" /> を次のように定める。
                </p>
                <BlockMath math="(\alpha * \beta)(t) = \begin{cases} \alpha(2t) & (0 \leq t \leq 1/2) \\ \beta(2t-1) & (1/2 \leq t \leq 1) \end{cases}" />
                <p>
                    これは、前半の半分の時間で <InlineMath math="\alpha" /> を 2 倍の速さで進み、後半の半分の時間で <InlineMath math="\beta" /> を 2 倍の速さで進むような道を意味する。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 2.1-1 (道の結合の連続性)"
            >
                <p>
                    連続な道 <InlineMath math="\alpha, \beta" />（<InlineMath math="\alpha(1) = \beta(0)" />）に対して、その結合 <InlineMath math="\alpha * \beta" /> は <InlineMath math="X" /> への連続写像（つまり再び道）となる。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    閉区間 <InlineMath math="[0,1]" /> は 2 つの閉集合 <InlineMath math="I_1 = [0, 1/2]" /> と <InlineMath math="I_2 = [1/2, 1]" /> の和集合である。
                </p>
                <p>
                    <InlineMath math="\alpha * \beta" /> の <InlineMath math="I_1" /> への制限は <InlineMath math="t \mapsto \alpha(2t)" /> であり、<InlineMath math="\alpha" /> の連続性から連続である。<InlineMath math="I_2" /> への制限 <InlineMath math="t \mapsto \beta(2t-1)" /> も <InlineMath math="\beta" /> の連続性から連続である。
                </p>
                <p>
                    これら 2 つの部分集合の境界である <InlineMath math="t = 1/2" /> において、
                    <BlockMath math="\alpha(2(1/2)) = \alpha(1), \quad \beta(2(1/2)-1) = \beta(0)" />
                    であり、仮定 <InlineMath math="\alpha(1) = \beta(0)" /> より両者は一致する。したがって、位相空間論Iの<strong>貼り合わせ補題（pasting lemma）</strong>により、<InlineMath math="\alpha * \beta" /> は <InlineMath math="[0,1]" /> 全体で連続となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.1-1 (<InlineMath math="S^1" /> 上の道)</span>}
            >
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> 内の単位円周 <InlineMath math="S^1" /> において、道 <InlineMath math="\gamma(t) = e^{2\pi i t}" />（<InlineMath math="t \in [0,1]" />）を考える。これは点 <InlineMath math="1" /> を始点および終点とし、円周を反時計回りにちょうど 1 周する道である。
                </p>
                <p>
                    一方、定値道 <InlineMath math="\gamma_0(t) = 1" /> を考える。これらを結合した <InlineMath math="\gamma_0 * \gamma" /> は、最初の半分の時間は <InlineMath math="1" /> に留まり、残りの半分の時間で猛スピードで円周を 1 周する道となる。
                </p>
                <p>
                    写像としては <InlineMath math="\gamma_0 * \gamma \neq \gamma" /> であるが、後でホモトピー同値（経路の連続変形）を考えると、これらは同じものと見なされるようになる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ループと基点</h2>

            <p className="leading-relaxed">
                基本群を構成するためには、空間の「ある一点を出発して同じ点に戻ってくる」ような道、すなわちループに注目します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.1-3 (ループ)"
            >
                <p>
                    道 <InlineMath math="\gamma : [0,1] \to X" /> において、始点と終点が一致しているとき（すなわち <InlineMath math="\gamma(0) = \gamma(1) = x_0" />）、<InlineMath math="\gamma" /> を <InlineMath math="x_0" /> を<strong>基点（basepoint）</strong>とする<strong>ループ（loop, 閉道）</strong>という。
                </p>
            </ContentBox>

            <ContentBox
                type="definition"
                title="Definition 2.1-4 (逆道)"
            >
                <p>
                    道 <InlineMath math="\gamma : [0,1] \to X" /> に対して、その<strong>逆道（inverse path）</strong> <InlineMath math="\bar{\gamma}" /> を
                    <BlockMath math="\bar{\gamma}(t) = \gamma(1-t)" />
                    で定める。
                </p>
                <p>
                    これは、<InlineMath math="\gamma" /> が通った軌跡を、終点 <InlineMath math="\gamma(1)" /> から始点 <InlineMath math="\gamma(0)" /> に向かって逆向きに辿る道である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.1-2 (<InlineMath math="\mathbb{R}^2" /> でのループと逆道)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、基点 <InlineMath math="(1,0)" /> のループ <InlineMath math="\gamma(t) = (\cos 2\pi t, \sin 2\pi t)" /> を考える。これは反時計回りに単位円を 1 周する。
                </p>
                <p>
                    その逆道 <InlineMath math="\bar{\gamma}(t)" /> は、
                    <BlockMath math="\begin{aligned} \bar{\gamma}(t) &= (\cos 2\pi(1-t), \sin 2\pi(1-t)) \\ &= (\cos(-2\pi t), \sin(-2\pi t)) \\ &= (\cos 2\pi t, -\sin 2\pi t) \end{aligned}" />
                    となり、これは時計回りに単位円を 1 周するループである。
                </p>
                <p>
                    これらを結合した <InlineMath math="\gamma * \bar{\gamma}" /> は、反時計回りに 1 周した後、すぐに時計回りに 1 周して戻ってくるループである。直感的には、少し進んでは逆戻りしながら、結果として「何も移動していない定値道」へと連続的に引き戻せる（縮められる）ことがわかるだろう。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>道（パス）</strong>とは、区間 <InlineMath math="[0,1]" /> から空間 <InlineMath math="X" /> への連続写像である。</li>
                    <li>始点と終点が一致している道を<strong>ループ</strong>といい、その一致する点を<strong>基点</strong>という。</li>
                    <li>終点と始点が一致する 2 つの道は、時間を半分ずつに圧縮して<strong>結合</strong>することができる。</li>
                    <li>進行方向を逆にした道を<strong>逆道</strong>という。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
