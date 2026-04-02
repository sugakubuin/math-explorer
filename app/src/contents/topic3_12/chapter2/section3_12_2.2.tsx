import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionFundamentalGroup() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で定義した「道の結合」は、そのままでは結合律などの群の公理を満たしません。しかし、道を連続変形させる「道ホモトピー」によって道をグループ分け（同値類に分類）すると、美しい群の構造が現れます。これが「基本群」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基点を固定したホモトピー</h2>

            <p className="leading-relaxed">
                道の連続変形を考える際、始点と終点が動いてしまっては別の道になってしまいます。そこで、端点を固定したままのホモトピーを定義します。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-1 (道ホモトピー)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> 上の 2 つの道 <InlineMath math="\alpha, \beta : [0,1] \to X" /> が、同じ始点 <InlineMath math="x_0" /> と同じ終点 <InlineMath math="x_1" /> をもつとする。
                    この 2 つの道が<strong>道ホモトピック（path-homotopic）</strong>であるとは、連続写像 <InlineMath math="H : [0,1] \times [0,1] \to X" /> が存在して、以下の条件をすべて満たすことをいう。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="H(t, 0) = \alpha(t)" /> （時刻 <InlineMath math="s=0" /> では道 <InlineMath math="\alpha" />）</li>
                    <li><InlineMath math="H(t, 1) = \beta(t)" /> （時刻 <InlineMath math="s=1" /> では道 <InlineMath math="\beta" />）</li>
                    <li><InlineMath math="H(0, s) = x_0" /> （すべての <InlineMath math="s" /> において始点は <InlineMath math="x_0" /> に固定）</li>
                    <li><InlineMath math="H(1, s) = x_1" /> （すべての <InlineMath math="s" /> において終点は <InlineMath math="x_1" /> に固定）</li>
                </ul>
                <p>
                    このとき <InlineMath math="\alpha \simeq_p \beta" /> と書く。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 2.2-1 (道ホモトピーは同値関係)"
            >
                <p>
                    道ホモトピー <InlineMath math="\simeq_p" /> は、始点と終点を共有する道の集合上に同値関係を定める。すなわち、反射律、対称律、推移律が成立する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    反射律（<InlineMath math="\alpha \simeq_p \alpha" />）と対称律（<InlineMath math="\alpha \simeq_p \beta \implies \beta \simeq_p \alpha" />）は、通常のホモトピー（Proposition 1.1-1）と全く同様に、<InlineMath math="H(t,s) = \alpha(t)" /> や <InlineMath math="\bar{H}(t,s) = H(t, 1-s)" /> を考えることで示される。端点の固定条件が保たれることは自明である。
                </p>
                <p>
                    推移律（<InlineMath math="\alpha \simeq_p \beta" /> かつ <InlineMath math="\beta \simeq_p \gamma \implies \alpha \simeq_p \gamma" />）も同様に、<InlineMath math="\alpha" /> から <InlineMath math="\beta" /> へのホモトピー <InlineMath math="H_1" /> と、<InlineMath math="\beta" /> から <InlineMath math="\gamma" /> へのホモトピー <InlineMath math="H_2" /> を繋ぎ合わせた
                    <BlockMath math="H(t, s) = \begin{cases} H_1(t, 2s) & (0 \leq s \leq 1/2) \\ H_2(t, 2s-1) & (1/2 \leq s \leq 1) \end{cases}" />
                    を考えればよい。<InlineMath math="H_1" /> も <InlineMath math="H_2" /> も端点を固定しているため、繋ぎ合わせた <InlineMath math="H" /> も常に端点を固定する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.2-1 (道ホモトピーの具体例)"
            >
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上で、同じ始点 <InlineMath math="x_0" /> と同じ終点 <InlineMath math="x_1" /> を結ぶ任意の 2 つの道 <InlineMath math="\alpha, \beta" /> はすべて道ホモトピックである。
                </p>
                <p>
                    実際、直線ホモトピー <InlineMath math="H(t, s) = (1-s)\alpha(t) + s\beta(t)" /> を考えると、
                    <BlockMath math="H(0, s) = (1-s)\alpha(0) + s\beta(0) = (1-s)x_0 + sx_0 = x_0" />
                    となり、終点 <InlineMath math="t=1" /> についても同様に <InlineMath math="x_1" /> に固定される。したがって、これは妥当な道ホモトピーである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基本群の定義と群構造</h2>

            <p className="leading-relaxed">
                道ホモトピー同値類に対して「道の結合」を定義すると、それは群の公理を見事に満たします。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.2-2 (基本群)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> とその基点 <InlineMath math="x_0 \in X" /> を固定する。<InlineMath math="x_0" /> を基点とするループ（<InlineMath math="\gamma(0) = \gamma(1) = x_0" />）全体の集合を道ホモトピー関係 <InlineMath math="\simeq_p" /> で割った商集合を考え、これを
                    <BlockMath math="\pi_1(X, x_0)" />
                    と表す。ループ <InlineMath math="\gamma" /> の属する同値類（ホモトピー類）を <InlineMath math="[\gamma]" /> と書く。
                </p>
                <p>
                    この集合上に、道の結合による乗法を
                    <BlockMath math="[\alpha] \cdot [\beta] = [\alpha * \beta]" />
                    で定める。この乗法によって <InlineMath math="\pi_1(X, x_0)" /> は群をなし、これを <InlineMath math="X" /> の <InlineMath math="x_0" /> を基点とする<strong>基本群（fundamental group）</strong>、または<strong>第 1 ホモトピー群</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="theorem"
                title={<span>Theorem 2.2-1 (<InlineMath math="\pi_1(X, x_0)" /> は群である)</span>}
            >
                <p>
                    上記の乗法は well-defined であり、<InlineMath math="\pi_1(X, x_0)" /> は以下の群の公理を満たす。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>結合律：</strong> <InlineMath math="([\alpha] \cdot [\beta]) \cdot [\gamma] = [\alpha] \cdot ([\beta] \cdot [\gamma])" /></li>
                    <li><strong>単位元：</strong> 定値ループ <InlineMath math="c_{x_0}(t) = x_0" /> のクラス <InlineMath math="[c_{x_0}]" /> が単位元となる（<InlineMath math="[c_{x_0}] \cdot [\alpha] = [\alpha] \cdot [c_{x_0}] = [\alpha]" />）。</li>
                    <li><strong>逆元：</strong> 逆道 <InlineMath math="\bar{\alpha}" /> のクラス <InlineMath math="[\bar{\alpha}]" /> が逆元となる（<InlineMath math="[\alpha] \cdot [\bar{\alpha}] = [\bar{\alpha}] \cdot [\alpha] = [c_{x_0}]" />）。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <strong>well-definedness：</strong> <InlineMath math="\alpha \simeq_p \alpha'" />（ホモトピー <InlineMath math="H" />）かつ <InlineMath math="\beta \simeq_p \beta'" />（ホモトピー <InlineMath math="K" />）のとき、<InlineMath math="H" /> と <InlineMath math="K" /> を「横に並べて」結合したホモトピーを考えることで <InlineMath math="\alpha * \beta \simeq_p \alpha' * \beta'" /> が示される。
                </p>
                <p>
                    <strong>結合律：</strong> <InlineMath math="(\alpha * \beta) * \gamma" /> は、区間を 1/4, 1/4, 1/2 の割合で進む道であり、<InlineMath math="\alpha * (\beta * \gamma)" /> は 1/2, 1/4, 1/4 の割合で進む道である。これらは単にパラメータの進む「速さ」が異なるだけなので、パラメータ <InlineMath math="t" /> を線形に再スケールする連続な変形（端点を固定するホモトピー）で互いに移り変わる。
                </p>
                <p>
                    <strong>逆元：</strong> <InlineMath math="\alpha * \bar{\alpha}" /> が <InlineMath math="c_{x_0}" /> に道ホモトピックであることを示す。直感的には、「少し進んで同じ道を戻る」という往復の深さをパラメータ <InlineMath math="s" /> に従って徐々に浅くし、最終的に一歩も動かない定値ループに変形する。具体的には、
                    <BlockMath math="H(t, s) = \alpha\left( (1-s) \cdot \begin{cases} 2t & (0 \leq t \leq 1/2) \\ 2(1-t) & (1/2 \leq t \leq 1) \end{cases} \right)" />
                    とすれば、<InlineMath math="s=0" /> で <InlineMath math="\alpha * \bar{\alpha}" />、<InlineMath math="s=1" /> で <InlineMath math="\alpha(0) = c_{x_0}" /> となり、道ホモトピーの条件を満たす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.2-2 (<InlineMath math="\mathbb{R}^n" /> の基本群)</span>}
            >
                <p>
                    <InlineMath math="\mathbb{R}^n" /> において、任意のループ <InlineMath math="\gamma" /> は、直線ホモトピー <InlineMath math="H(t, s) = (1-s)\gamma(t) + s(0)" />（原点を基点とする）によって定値ループ <InlineMath math="c_0" /> へと連続的に縮めることができる。
                </p>
                <p>
                    したがって、すべてのループは定値ループと道ホモトピックであり、基本群は単位元のみからなる自明群となる。
                    <BlockMath math="\pi_1(\mathbb{R}^n, 0) = \{e\}" />
                    一般に、可縮空間の基本群は自明群である（Proposition 1.2-1）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>始点と終点を動かさずに道を連続変形させることを<strong>道ホモトピー</strong>という。</li>
                    <li>基点 <InlineMath math="x_0" /> を固定したループの道ホモトピー同値類全体は、道の結合を演算として群をなし、これを<strong>基本群</strong> <InlineMath math="\pi_1(X, x_0)" /> と呼ぶ。</li>
                    <li>道の結合は厳密には結合律を満たさないが、ホモトピー同値類をとることで結合律を満たすようになり、定値ループが単位元、逆道が逆元となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
