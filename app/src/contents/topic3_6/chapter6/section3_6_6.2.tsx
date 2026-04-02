import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NoethersTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節では、1 パラメータ変換群と汎関数の不変性について学びました。
                本節では、それらを結びつける数学的結実である<b>ノーターの定理</b>を導出します。
                この定理は、「汎関数にある種の不変性（対称性）があるならば、その系には必ず保存量が存在する」ことを保証する変分法の中心的な成果です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ノーターの定理</h2>

            <p className="leading-relaxed">
                汎関数が無限小生成子 <InlineMath math="(\xi, \phi)" /> を持つ変換に対して不変であるとき、保存量は具体的にどのように書き下せるでしょうか。
            </p>

            <ContentBox type="theorem" title="Theorem 6.2-1 (ノーターの定理)">
                <p>
                    汎関数 <InlineMath math="J[u] = \int_a^b F(x, u, u') \, dx" /> が、無限小生成子 <InlineMath math="(\xi, \phi)" /> を持つ 1 パラメータ変換群に関して不変であるとする。
                    このとき、関数 <InlineMath math="u(x)" /> がオイラー＝ラグランジュ方程式を満たすならば、次の量 <InlineMath math="I" /> は <InlineMath math="x" /> によらない定数（保存量）となる：
                    <BlockMath math="I = F \xi + F_{u'} (\phi - u' \xi) = \text{const.}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    汎関数の不変性 <InlineMath math="J[\tilde{u}(s)] = J[u]" /> をパラメータ <InlineMath math="s" /> で微分し、<InlineMath math="s=0" /> と置く。
                    変換後の積分を <InlineMath math="\tilde{x}" /> で表すと、
                    <BlockMath math="\frac{d}{ds} \int_{\tilde{a}}^{\tilde{b}} F(\tilde{x}, \tilde{u}, \tilde{u}') \, d\tilde{x} \Big|_{s=0} = 0" />
                    これを <InlineMath math="x" /> に関する積分に引き戻し、微分の定義に基づいて展開して整理すると、被積分関数は次のようになる：
                    <BlockMath math="F \frac{d\xi}{dx} + F_x \xi + F_u \phi + F_{u'} \left( \frac{d\phi}{dx} - u' \frac{d\xi}{dx} \right) = 0" />
                    ここで、全微分の関係式 <InlineMath math="\frac{dF}{dx} = F_x + F_u u' + F_{u'} u''" /> を用いて整理し、<InlineMath math="u" /> が E-L 方程式 <InlineMath math="F_u = \frac{d}{dx} F_{u'}" /> を満たすことを利用すると、上式は次のようにまとめられる：
                    <BlockMath math="\frac{d}{dx} \left[ F \xi + F_{u'} (\phi - u' \xi) \right] = 0" />
                    したがって、括弧内の量 <InlineMath math="I" /> は <InlineMath math="x" /> について一定である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="定理の意義と背景">
                <p>
                    この定理は、1918年に女性数学者<b>エミー・ノーター</b>（Emmy Noether）によって証明されました。
                    それまで個別に発見されていた「エネルギー保存則」や「運動量保存則」が、実は時空の対称性という共通の起源から生まれていることを明らかにしたこの発見は、物理学史上最も深遠な成果の一つに数えられます。
                    アインシュタインはこの定理を「数学的思考における最高の成果の一つ」と称賛しました。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">保存量の計算手順</h2>

            <p className="leading-relaxed">
                ノーターの定理を用いて、具体的な対称性から保存量を導き出す手順を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 6.2-1 (エネルギー保存則の導出)">
                <p>
                    汎関数 <InlineMath math="F" /> が陽に <InlineMath math="x" /> を含まない（自律系 <InlineMath math="F_x = 0" />）場合、<InlineMath math="x" /> の平行移動 <InlineMath math="\xi = 1, \phi = 0" /> に対して不変である。
                    この生成子をノーターの公式に代入すると、
                    <BlockMath math="I = F \cdot 1 + F_{u'} (0 - u' \cdot 1) = F - u' F_{u'}" />
                    これが恒等的に一定となる。これは前回学んだハミルトニアン（の符号反転）に他ならず、ハミルトニアンの保存、すなわち物理的なエネルギー保存則が対称性から導かれたことを意味する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 6.2-2 (古典力学の場合の確認)">
                <p>
                    質量 <InlineMath math="m" />、ポテンシャル <InlineMath math="V(u)" /> のラグランジアン <InlineMath math="F = \frac{1}{2} m (u')^2 - V(u)" /> を考える。
                    このとき <InlineMath math="F_{u'} = m u'" /> であり、保存量 <InlineMath math="I" /> は
                    <BlockMath math="\begin{aligned} I &= \left[ \frac{1}{2} m (u')^2 - V(u) \right] - u' (m u') \\ &= -\left( \frac{1}{2} m (u')^2 + V(u) \right) = -H \end{aligned}" />
                    となる。ハミルトニアン <InlineMath math="H" /> （全エネルギー）が保存量であることが、ノーターの定理によっても正しく示された。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように、ノーターの公式を用いることで、幾何学的な対称性から直接的に保存量を構成することができます。
                次節では、より多様な対称性と、それに対応する基本保存則のバリエーションを見ていきましょう。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ノーターの定理は、汎関数の不変性から保存量を系統的に構築する。</li>
                    <li>不変性の定義式を無限小生成子を用いて <InlineMath math="s" /> で微分することで、保存量の式が導かれる。</li>
                    <li>保存量の一般式 <InlineMath math="I = F \xi + F_{u'} (\phi - u' \xi)" /> は、あらゆる連続的対称性に適用可能である。</li>
                    <li>対称性（不変性）の存在そのものが、系の物理的保存法則の根源である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
