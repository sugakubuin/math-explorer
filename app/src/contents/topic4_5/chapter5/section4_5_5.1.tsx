import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DifferentialFormsDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前章では、多様体上のテンソル場を導入し、特に1-形式（余接束の切断）を扱いました。
                この章では、1-形式をより高次の「交代テンソル場」へと一般化した<strong>微分形式（Differential form）</strong>を定義します。
                微分形式は、多様体上の積分を座標に依存せずに定義するための不可欠な道具であり、ストークスの定理やド・ラームコホモロジーといった多様体論の核心部分を支える概念です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="k" />-形式の定義</h2>

            <p className="leading-relaxed">
                3-11 多重線形代数学I で学んだ「外積代数（Exterior algebra）」の構成を、多様体の各点における余接空間に適用します。
                微分形式は、入力される接ベクトルの順序を入れ替えると符号が反転する（交代性を持つ）ような共変テンソル場として定義されます。
            </p>

            <ContentBox type="definition" title={<span>Definition 5.1-1 (<InlineMath math="k" />-形式)</span>}>
                <p>
                    多様体 <InlineMath math="M" /> 上の滑らかな<strong><InlineMath math="k" />-形式（<InlineMath math="k" />-form）</strong>とは、滑らかな反対称 <InlineMath math="(0,k)" />-テンソル場のことである。
                </p>
                <p className="mt-2">
                    すなわち、各点 <InlineMath math="p \in M" /> において、<InlineMath math="\omega_p : \underbrace{T_pM \times \cdots \times T_pM}_{k\text{個}} \to \mathbb{R}" /> は <InlineMath math="k" /> 重線形写像であり、任意の2つの入力ベクトルを入れ替えると符号が反転する（交代性）。
                </p>
                <BlockMath math="\omega_p(\ldots, v_i, \ldots, v_j, \ldots) = -\omega_p(\ldots, v_j, \ldots, v_i, \ldots)" />
                <p className="mt-2">
                    このような交代多重線形写像のなすベクトル空間を <InlineMath math="\Lambda^k(T_p^*M)" /> と書き、<InlineMath math="M" /> 上の滑らかな <InlineMath math="k" />-形式全体の集合を <InlineMath math="\Omega^k(M)" /> と表す。
                    便宜上、0-形式は滑らかな関数（<InlineMath math="\Omega^0(M) = C^\infty(M)" />）と定義する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                交代性を持つため、同じベクトルを2回入力すると必ず <InlineMath math="0" /> になります（<InlineMath math="\omega(v, v) = -\omega(v, v) \implies \omega(v, v) = 0" />）。
                具体的な2-形式が接ベクトルにどのように作用するかを見てみましょう。
            </p>

            <ContentBox type="example" title="Example 5.1-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上の2-形式 <InlineMath math="\omega = dx \wedge dy + 3\,dy \wedge dz" /> を考える（ウェッジ積 <InlineMath math="\wedge" /> の厳密な定義は次節で行うが、ここでは反対称化されたテンソル積 <InlineMath math="dx \otimes dy - dy \otimes dx" /> のことであるとする）。
                </p>
                <p className="mt-2">
                    この <InlineMath math="\omega" /> に、2つの接ベクトル <InlineMath math="v = \frac{\partial}{\partial x}" /> と <InlineMath math="w = \frac{\partial}{\partial y}" /> を入力したときの値を計算する。
                    双対基底の性質 <InlineMath math="dx(v)=1, dx(w)=0, dy(v)=0, dy(w)=1" /> などを用いると、
                </p>
                <BlockMath math="\begin{aligned} \omega(v, w) &= (dx \wedge dy)(v, w) + 3(dy \wedge dz)(v, w) \\ &= (dx(v)dy(w) - dx(w)dy(v)) + 3(dy(v)dz(w) - dy(w)dz(v)) \\ &= (1 \cdot 1 - 0 \cdot 0) + 3(0 \cdot 0 - 1 \cdot 0) \\ &= 1 \end{aligned}" />
                <p className="mt-2">
                    となる。順序を入れ替えて <InlineMath math="\omega(w, v)" /> を計算すると、
                </p>
                <BlockMath math="\omega(w, v) = (dx(w)dy(v) - dx(v)dy(w)) + \cdots = (0 \cdot 0 - 1 \cdot 1) + 0 = -1" />
                <p className="mt-2">
                    となり、確かに交代性 <InlineMath math="\omega(v, w) = -\omega(w, v)" /> が成り立っている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所座標による表示</h2>

            <p className="leading-relaxed">
                一般のテンソル場は <InlineMath math="dx^{i_1} \otimes \cdots \otimes dx^{i_k}" /> の線形結合として表されましたが、<InlineMath math="k" />-形式は交代性を持つため、添字の順序を制限することで、より少ない基底で一意に表すことができます。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1">
                <p>
                    <InlineMath math="n" /> 次元多様体上の任意の <InlineMath math="k" />-形式 <InlineMath math="\omega" /> は、局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いて以下のように一意に表される。
                </p>
                <BlockMath math="\omega = \sum_{1 \leq i_1 < i_2 < \cdots < i_k \leq n} \omega_{i_1 \ldots i_k}(x) \, dx^{i_1} \wedge \cdots \wedge dx^{i_k}" />
                <p className="mt-2">
                    ここで <InlineMath math="\omega_{i_1 \ldots i_k}(x)" /> は滑らかな関数であり、<InlineMath math="dx^{i_1} \wedge \cdots \wedge dx^{i_k}" /> は <InlineMath math="\Lambda^k(T_p^*M)" /> の基底をなす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    一般の <InlineMath math="(0,k)" />-テンソル場は <InlineMath math="\omega = \sum \tilde{\omega}_{j_1 \ldots j_k} dx^{j_1} \otimes \cdots \otimes dx^{j_k}" /> と書ける。
                    <InlineMath math="\omega" /> が交代性を持つことから、添字 <InlineMath math="j_1, \ldots, j_k" /> の中に同じものが含まれていれば、その成分は <InlineMath math="0" /> となる。
                </p>
                <p className="mt-2">
                    また、添字の順序を置換 <InlineMath math="\sigma" /> で入れ替えると、係数は <InlineMath math="\mathrm{sgn}(\sigma)" /> 倍される。
                    したがって、添字を昇順 <InlineMath math="i_1 < i_2 < \cdots < i_k" /> に並べ替えた項だけを集め、交代化された基底（ウェッジ積）<InlineMath math="dx^{i_1} \wedge \cdots \wedge dx^{i_k}" /> を用いることで、上記の形に一意にまとめることができる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この表示から、多様体の次元 <InlineMath math="n" /> と微分形式の次数 <InlineMath math="k" /> に応じて、基底の個数（成分の個数）がどのように決まるかがわかります。
            </p>

            <ContentBox type="example" title="Example 5.1-2">
                <p>
                    <InlineMath math="n" /> 次元多様体上の <InlineMath math="k" />-形式の独立な成分の個数は、<InlineMath math="n" /> 個の座標から異なる <InlineMath math="k" /> 個を選ぶ組み合わせの数、すなわち二項係数 <InlineMath math="\binom{n}{k}" /> に等しい。
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><InlineMath math="n = 3, k = 1" /> のとき：<InlineMath math="\binom{3}{1} = 3" /> 個。<InlineMath math="dx, dy, dz" />。（ベクトル場に対応）</li>
                    <li><InlineMath math="n = 3, k = 2" /> のとき：<InlineMath math="\binom{3}{2} = 3" /> 個。<InlineMath math="dx \wedge dy, dy \wedge dz, dz \wedge dx" />。（これもベクトル場に対応）</li>
                    <li><InlineMath math="n = 3, k = 3" /> のとき：<InlineMath math="\binom{3}{3} = 1" /> 個。<InlineMath math="dx \wedge dy \wedge dz" />。（スカラー関数に対応）</li>
                </ul>
                <p className="mt-2">
                    もし <InlineMath math="k > n" /> であれば、鳩の巣原理により必ず同じ座標微分が2回以上現れるため、交代性から値は常に <InlineMath math="0" /> となる。
                    すなわち、<InlineMath math="k > n" /> のとき <InlineMath math="\Omega^k(M) = \{0\}" /> である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="微分形式と代数構造">
                <p>
                    <InlineMath math="k" />-形式の空間 <InlineMath math="\Omega^k(M)" /> は、関数環 <InlineMath math="C^\infty(M)" /> 上の加群をなします。
                    さらに、すべての次数を直和した空間 <InlineMath math="\Omega^*(M) = \bigoplus_{k=0}^n \Omega^k(M)" /> は、次節で導入する「ウェッジ積」によって掛け算が定義され、<strong>次数付き代数（graded algebra）</strong>と呼ばれる豊かな代数構造を持つことになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="k" />-形式は、多様体上の滑らかな反対称 <InlineMath math="(0,k)" />-テンソル場として定義される。</li>
                    <li>局所座標では、<InlineMath math="dx^{i_1} \wedge \cdots \wedge dx^{i_k}" />（<InlineMath math="i_1 < \cdots < i_k" />）を基底として一意に表される。</li>
                    <li><InlineMath math="n" /> 次元多様体上の <InlineMath math="k" />-形式の独立な成分の数は <InlineMath math="\binom{n}{k}" /> 個であり、<InlineMath math="k > n" /> のときは常に <InlineMath math="0" /> となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
