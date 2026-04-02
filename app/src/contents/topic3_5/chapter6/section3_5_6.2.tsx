import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DAlembertSolution() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                境界の影響を無視できるほど長い（無限の）弦において、初期の変位と速度からその後の振動を完全に記述する公式が<b>ダランベールの公式</b>です。
                この公式は、波が「右へ進む」成分と「左へ進む」成分の重ね合わせであることを数学的に示しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ダランベールの解の導出</h2>

            <p className="leading-relaxed">
                無限領域 <InlineMath math="-\infty < x < \infty" /> における初期値問題を考えます。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ダランベールの公式)">
                <p>
                    波動方程式 <InlineMath math="u_{tt} = c^2 u_{xx}" /> に対して、初期条件
                    <BlockMath math="u(x, 0) = f(x), \quad u_t(x, 0) = g(x)" />
                    が与えられたとき、その解は次のように表される：
                    <BlockMath math="u(x, t) = \frac{f(x+ct) + f(x-ct)}{2} + \frac{1}{2c} \int_{x-ct}^{x+ct} g(s) ds" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    特性曲線座標 <InlineMath math="\xi = x+ct, \ \eta = x-ct" /> を導入する。このとき波動方程式は標準形 <InlineMath math="u_{\xi\eta} = 0" /> に変換される。
                    この一般解は <InlineMath math="u(x, t) = F(x+ct) + G(x-ct)" /> と書ける。
                    初期条件を代入すると、
                    <BlockMath math="\begin{aligned} u(x, 0) &= F(x) + G(x) = f(x) \\ u_t(x, 0) &= cF'(x) - cG'(x) = g(x) \end{aligned}" />
                    を得る。2 番目の式を積分すると <InlineMath math="F(x) - G(x) = \frac{1}{c} \int_{x_0}^x g(s) ds + C" /> となる。
                    これらを <InlineMath math="F, G" /> について解き、元の一般解に代入することで、ダランベールの公式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的に、初期速度がゼロの場合（弦を弾いて離した直後）の挙動を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 6.2-1 (初期速度ゼロの場合の進行波)">
                <p>
                    初期変位 <InlineMath math="f(x) = \sin x" />、初期速度 <InlineMath math="g(x) = 0" /> の場合を考える。
                    公式に代入すると、
                    <BlockMath math="u(x, t) = \frac{\sin(x+ct) + \sin(x-ct)}{2} = \sin x \cos(ct)" />
                    となる。これは、右に進む波 <InlineMath math="\frac{1}{2}\sin(x-ct)" /> と左に進む波 <InlineMath math="\frac{1}{2}\sin(x+ct)" /> が重なり合った結果、
                    場所によって振幅が変化する<b>定在波</b>が生じていることを示している。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-2 (点源速度の場合の影響)">
                <p>
                    初期変位 <InlineMath math="f(x) = 0" /> で、原点に鋭い衝撃（<InlineMath math="g(x) = \delta(x)" />）を与えた場合を考える。
                    ダランベールの公式より、解は <InlineMath math="u(x, t) = \frac{1}{2c}" /> （<InlineMath math="|x| < ct" /> のとき）、
                    それ以外では <InlineMath math="0" /> となる。これは、衝撃の影響が速度 <InlineMath math="c" /> で左右に広がっていく領域の内部にのみ存在することを表している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">依存域・影響域と有限伝播速度</h2>

            <p className="leading-relaxed">
                ダランベールの公式から、ある地点の解の状態が「どの範囲の初期情報」によって決まるかを明確に定義できます。
            </p>

            <ContentBox type="definition" title="Definition 6.2-1 (依存域と影響域)">
                <p>
                    時空点 <InlineMath math="(x_0, t_0)" /> における解の値 <InlineMath math="u(x_0, t_0)" /> が依存する初期データの範囲 <InlineMath math="[x_0 - ct_0, x_0 + ct_0]" /> を<b>依存域</b>（Domain of Dependence）と呼ぶ。
                </p>
                <p>
                    逆に、初期位置 <InlineMath math="x_0" /> での情報が影響を及ぼしうる時空領域 <InlineMath math="\{(x, t) \mid |x - x_0| \leq ct\}" /> を<b>影響域</b>（Domain of Influence）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="熱方程式との決定的な違い">
                <p>
                    熱方程式（§7.1）では、ある一点の熱が瞬時に全空間に伝わる（理論上の伝播速度が無限大）のに対し、
                    波動方程式は<b>有限の伝播速度</b> <InlineMath math="c" /> を持つ。
                    これは双曲型偏微分方程式に共通する極めて重要な性質であり、物理的には「信号が光速を超えて伝わらない」ことや、
                    因果律（原因となる領域が限定されること）を数学的に保証している。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                有限伝播速度の性質は、波が特定の領域だけに限定される（サポートを持つ）場合に顕著になります。
            </p>

            <ContentBox type="example" title="Example 6.2-3 (波のフロントの進行)">
                <p>
                    初期データ <InlineMath math="f(x)" /> が区間 <InlineMath math="[a, b]" /> の外でゼロであるとする。
                    このとき、ある時刻 <InlineMath math="t" /> において <InlineMath math="u(x, t)" /> がゼロでない可能性があるのは、
                    区間 <InlineMath math="[a - ct, b + ct]" /> のみである。
                    波のフロント（先端）が速度 <InlineMath math="c" /> で進んでいく様子は、この区間の拡大として理解できる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、再び有限の長さの弦を扱い、端点での反射（境界条件）がある場合の解の構成方法として「分離変数法」を詳しく見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>無限領域の初期値問題の解は、ダランベールの公式によって変位と速度の積分形で与えられる。</li>
                    <li>解は右に進む波と左に進む波の重ね合わせとして理解することができる。</li>
                    <li>ある地点の解は、その地点から速度 <InlineMath math="c" /> 以内で到達可能な初期データの範囲（依存域）のみに依存する。</li>
                    <li>波動方程式は有限の伝播速度を持ち、この点が放物型である熱方程式と大きく異なる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
