import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionChangeOfBasepoint() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群は基点 <InlineMath math="x_0" /> を固定して定義されました。しかし、もし空間がひとつに繋がっている（弧状連結である）ならば、基点をどこに選んでも基本群の群としての構造（同型類）は変わらないことを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基点の変更による同型</h2>

            <p className="leading-relaxed">
                ある基点でのループを、別の基点でのループに変換する自然な方法を考えます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 2.3-1 (基点変更の同型)"
            >
                <p>
                    弧状連結な位相空間 <InlineMath math="X" /> の 2 つの点 <InlineMath math="x_0, x_1" /> をとる。これらを結ぶ道 <InlineMath math="\gamma" />（<InlineMath math="\gamma(0) = x_0, \gamma(1) = x_1" />）が与えられたとする。
                </p>
                <p>
                    このとき、写像 <InlineMath math="\phi_\gamma : \pi_1(X, x_0) \to \pi_1(X, x_1)" /> を
                    <BlockMath math="\phi_\gamma([\alpha]) = [\bar{\gamma} * \alpha * \gamma]" />
                    と定めると、これは群同型写像となる。
                </p>
                <p>
                    したがって、弧状連結空間においては、基点のとり方によらず基本群は同型である（<InlineMath math="\pi_1(X, x_0) \cong \pi_1(X, x_1)" />）。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    まず、<InlineMath math="\bar{\gamma} * \alpha * \gamma" /> は <InlineMath math="x_1" /> を出発して <InlineMath math="\bar{\gamma}" /> を逆走して <InlineMath math="x_0" /> へ行き、ループ <InlineMath math="\alpha" /> を回った後、再び <InlineMath math="\gamma" /> を通って <InlineMath math="x_1" /> へ戻る道なので、確かに <InlineMath math="x_1" /> を基点とするループである。
                </p>
                <p>
                    <strong>準同型性：</strong><br />
                    <BlockMath math="\begin{aligned} \phi_\gamma([\alpha] \cdot [\beta]) &= [\bar{\gamma} * (\alpha * \beta) * \gamma] \\ &= [\bar{\gamma} * \alpha * c_{x_0} * \beta * \gamma] \\ &= [\bar{\gamma} * \alpha * (\gamma * \bar{\gamma}) * \beta * \gamma] \\ &= [\bar{\gamma} * \alpha * \gamma] \cdot [\bar{\gamma} * \beta * \gamma] \\ &= \phi_\gamma([\alpha]) \cdot \phi_\gamma([\beta]) \end{aligned}" />
                    となり、積を保つ。ここで <InlineMath math="\gamma * \bar{\gamma} \simeq_p c_{x_0}" /> を挿入した。
                </p>
                <p>
                    <strong>全単射性：</strong><br />
                    道 <InlineMath math="\bar{\gamma}" />（<InlineMath math="x_1" /> から <InlineMath math="x_0" /> への道）を用いて逆の写像 <InlineMath math="\phi_{\bar{\gamma}} : \pi_1(X, x_1) \to \pi_1(X, x_0)" /> を考えると、
                    <BlockMath math="\begin{aligned} \phi_{\bar{\gamma}}(\phi_\gamma([\alpha])) &= [\gamma * (\bar{\gamma} * \alpha * \gamma) * \bar{\gamma}] \\ &= [(\gamma * \bar{\gamma}) * \alpha * (\gamma * \bar{\gamma})] \\ &= [c_{x_0} * \alpha * c_{x_0}] \\ &= [\alpha] \end{aligned}" />
                    となり、互いに逆写像である。したがって <InlineMath math="\phi_\gamma" /> は同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 2.3-1 (<InlineMath math="\pi_1(S^1, 1) \cong \pi_1(S^1, -1)" />)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> の基点を <InlineMath math="1" /> に選んでも、<InlineMath math="-1" /> に選んでも、得られる基本群は群として同型である。
                </p>
                <p>
                    これは <InlineMath math="S^1" /> が弧状連結であるため、点 <InlineMath math="1" /> と <InlineMath math="-1" /> を結ぶ道（例えば上半円を回る弧）が存在することから、上記の定理により直ちに従う。
                    このため、弧状連結空間の基本群を扱う際は、基点を省略して単に <InlineMath math="\pi_1(X)" /> と書くことが多い。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">単連結空間</h2>

            <p className="leading-relaxed">
                基本群が自明である、つまり「すべてのループが一点に縮められる」ような空間には特別な名前がついています。
            </p>

            <ContentBox
                type="definition"
                title="Definition 2.3-1 (単連結空間)"
            >
                <p>
                    位相空間 <InlineMath math="X" /> が以下の 2 つの条件を満たすとき、<strong>単連結空間（simply connected space）</strong>という。
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><InlineMath math="X" /> は弧状連結である。</li>
                    <li>ある（したがって任意の）基点 <InlineMath math="x_0" /> において、基本群が自明群である（<InlineMath math="\pi_1(X, x_0) = \{e\}" />）。</li>
                </ol>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 2.3-2 (単連結な空間の例)"
            >
                <p>
                    ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> や円板 <InlineMath math="D^n" /> は可縮空間であるため、自明な基本群を持ち、弧状連結でもあるので単連結である。
                </p>
                <p>
                    また、球面 <InlineMath math="S^n" /> は <InlineMath math="n \geq 2" /> のとき単連結である。直感的には、<InlineMath math="S^2" /> 上の任意のループは（北極点を避けるように少しずらすことで）平面上のループと同じように扱え、1点に縮めることができるからである（厳密な証明は後の章で行う）。
                </p>
                <p>
                    対照的に、円周 <InlineMath math="S^1" /> は基本群が <InlineMath math="\mathbb{Z}" /> であるため単連結ではない。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="単連結性と「穴」"
            >
                <p>
                    直感的に言うと、単連結空間とは「1 次元の穴（紐を引っ掛けることができるような穴）が開いていない空間」です。
                </p>
                <p>
                    例えば、平面から原点を抜いた <InlineMath math="\mathbb{R}^2 \setminus \{0\}" /> には穴が開いているため、原点を囲むループは縮められず単連結ではありません。しかし、3次元空間から原点を抜いた <InlineMath math="\mathbb{R}^3 \setminus \{0\}" /> では、ループは原点を三次元的に「迂回」できるため一点に縮めることができ、単連結となります（ただし、これには「2 次元の穴」が開いているため、可縮ではありません。これは高次ホモトピー群やホモロジー群で検出されます）。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>弧状連結な空間では、基点の取り方によらず基本群は互いに同型である。</li>
                    <li>基点を変更する同型写像は、2 つの基点を結ぶ道 <InlineMath math="\gamma" /> を用いて <InlineMath math="[\alpha] \mapsto [\bar{\gamma} * \alpha * \gamma]" /> によって与えられる。</li>
                    <li>弧状連結であり、かつ基本群が自明群である空間を<strong>単連結空間</strong>という。これは直感的に「1次元的な穴がない」空間を意味する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
