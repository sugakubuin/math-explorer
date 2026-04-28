import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WedgeProduct() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で導入した微分形式の空間 <InlineMath math="\Omega^k(M)" /> には、自然な積の構造が存在します。
                それが<strong>ウェッジ積（Wedge product）</strong>、または<strong>外積（Exterior product）</strong>と呼ばれる演算です。
                ウェッジ積は、2つの微分形式を掛け合わせてより高次の微分形式を作り出し、その際に「交代性」を保つように設計されています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ウェッジ積の定義と性質</h2>

            <p className="leading-relaxed">
                ウェッジ積の厳密な定義は、テンソル積を「交代化」する操作（交代化作用素 <InlineMath math="\mathrm{Alt}" />）を用いて行われます。
            </p>

            <ContentBox type="definition" title="Definition 5.2-1 (ウェッジ積)">
                <p>
                    <InlineMath math="\omega \in \Omega^k(M)" /> と <InlineMath math="\eta \in \Omega^l(M)" /> に対して、それらの<strong>ウェッジ積（wedge product）</strong> <InlineMath math="\omega \wedge \eta \in \Omega^{k+l}(M)" /> を、テンソル積 <InlineMath math="\omega \otimes \eta" /> の交代化として定義する。
                </p>
                <BlockMath math="\omega \wedge \eta = \frac{(k+l)!}{k! l!} \mathrm{Alt}(\omega \otimes \eta)" />
                <p className="mt-2">
                    ここで、交代化作用素 <InlineMath math="\mathrm{Alt}" /> は、<InlineMath math="(k+l)" /> 個の接ベクトル <InlineMath math="v_1, \ldots, v_{k+l}" /> に対して
                </p>
                <BlockMath math="\mathrm{Alt}(T)(v_1, \ldots, v_{k+l}) = \frac{1}{(k+l)!} \sum_{\sigma \in S_{k+l}} \mathrm{sgn}(\sigma) T(v_{\sigma(1)}, \ldots, v_{\sigma(k+l)})" />
                <p className="mt-2">
                    で定義される（<InlineMath math="S_{k+l}" /> は <InlineMath math="k+l" /> 次対称群、<InlineMath math="\mathrm{sgn}(\sigma)" /> は置換の符号）。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                この定義式（特に階乗の係数）は、<InlineMath math="dx^i \wedge dx^j" /> が <InlineMath math="dx^i \otimes dx^j - dx^j \otimes dx^i" /> となるように選ばれています。
                実用上は、この複雑な定義式よりも、ウェッジ積が満たす代数的な性質を用いて計算を行うことがほとんどです。
            </p>

            <ContentBox type="proposition" title="Proposition 5.2-1 (ウェッジ積の基本性質)">
                <p>
                    ウェッジ積は以下の性質を満たす。
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>結合律（Associativity）：</strong> <InlineMath math="(\omega \wedge \eta) \wedge \theta = \omega \wedge (\eta \wedge \theta)" /></li>
                    <li><strong>次数付き反可換性（Graded anticommutativity）：</strong> <InlineMath math="\omega \in \Omega^k(M)" />、<InlineMath math="\eta \in \Omega^l(M)" /> に対して、
                        <BlockMath math="\omega \wedge \eta = (-1)^{kl} \eta \wedge \omega" />
                    </li>
                    <li><strong>双線形性（Bilinearity）：</strong> 関数 <InlineMath math="f, g \in C^\infty(M)" /> に対して、
                        <BlockMath math="(f\omega + g\eta) \wedge \theta = f(\omega \wedge \theta) + g(\eta \wedge \theta)" />
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    結合律と双線形性は、テンソル積の性質と交代化作用素の線形性から従う。
                </p>
                <p className="mt-2">
                    次数付き反可換性について証明する。<InlineMath math="\omega \wedge \eta" /> において、<InlineMath math="\omega" /> の <InlineMath math="k" /> 個の変数と <InlineMath math="\eta" /> の <InlineMath math="l" /> 個の変数を完全に入れ替えるためには、<InlineMath math="\eta" /> の各変数を <InlineMath math="\omega" /> の <InlineMath math="k" /> 個の変数を飛び越えて前に持ってくる必要がある。
                    1つの変数を飛び越えるごとに符号が <InlineMath math="-1" /> 倍されるため、<InlineMath math="l" /> 個の変数がそれぞれ <InlineMath math="k" /> 個の変数を飛び越えると、合計で <InlineMath math="k \times l" /> 回の符号反転が起こる。
                    したがって、<InlineMath math="\mathrm{sgn}(\sigma) = (-1)^{kl}" /> となり、<InlineMath math="\omega \wedge \eta = (-1)^{kl} \eta \wedge \omega" /> が成り立つ。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                特に、<InlineMath math="k" /> と <InlineMath math="l" /> がともに奇数のときのみ <InlineMath math="(-1)^{kl} = -1" /> となり、反交換します。
                どちらかが偶数であれば、通常の可換な積と同じように振る舞います。
                また、奇数次の形式 <InlineMath math="\omega" /> 自身とのウェッジ積は <InlineMath math="\omega \wedge \omega = -\omega \wedge \omega \implies \omega \wedge \omega = 0" /> となります。
            </p>

            <ContentBox type="example" title="Example 5.2-1">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上の1-形式 <InlineMath math="\omega = dx + 2\,dy" /> と <InlineMath math="\eta = dy + dz" /> のウェッジ積を計算する。
                </p>
                <p className="mt-2">
                    双線形性と分配律を用いて展開し、<InlineMath math="dx \wedge dx = 0" />、<InlineMath math="dy \wedge dy = 0" />、および <InlineMath math="dy \wedge dx = -dx \wedge dy" /> を用いる。
                </p>
                <BlockMath math="\begin{aligned} \omega \wedge \eta &= (dx + 2\,dy) \wedge (dy + dz) \\ &= dx \wedge dy + dx \wedge dz + 2\,dy \wedge dy + 2\,dy \wedge dz \\ &= dx \wedge dy + dx \wedge dz + 0 + 2\,dy \wedge dz \\ &= dx \wedge dy + dx \wedge dz + 2\,dy \wedge dz \end{aligned}" />
                <p className="mt-2">
                    順序を入れ替えて <InlineMath math="\eta \wedge \omega" /> を計算すると、
                </p>
                <BlockMath math="\begin{aligned} \eta \wedge \omega &= (dy + dz) \wedge (dx + 2\,dy) \\ &= dy \wedge dx + 2\,dy \wedge dy + dz \wedge dx + 2\,dz \wedge dy \\ &= -dx \wedge dy + 0 - dx \wedge dz - 2\,dy \wedge dz \\ &= -(\omega \wedge \eta) \end{aligned}" />
                <p className="mt-2">
                    となり、<InlineMath math="k=1, l=1" /> の場合の反可換性 <InlineMath math="(-1)^{1 \cdot 1} = -1" /> が確認できる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6"><InlineMath math="n" />-形式と行列式</h2>

            <p className="leading-relaxed">
                多様体の次元と同じ次数を持つ最高次の微分形式（<InlineMath math="n" />-形式）は、非常に特別な性質を持っています。
                <InlineMath math="n" /> 次元多様体上の <InlineMath math="n" />-形式は、局所座標においてただ1つの基底 <InlineMath math="dx^1 \wedge \cdots \wedge dx^n" /> で張られるため、成分は1つ（スカラー関数）しかありません。
            </p>

            <ContentBox type="proposition" title={<span>Proposition 5.2-2 (<InlineMath math="n" />-形式の表示)</span>}>
                <p>
                    <InlineMath math="n" /> 次元多様体上の任意の <InlineMath math="n" />-形式 <InlineMath math="\omega" /> は、局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いて
                </p>
                <BlockMath math="\omega = f(x) \, dx^1 \wedge \cdots \wedge dx^n" />
                <p className="mt-2">
                    の形に一意に表される。ここで <InlineMath math="f(x)" /> は滑らかな関数である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Proposition 5.1-1 より、<InlineMath math="k" />-形式の基底は <InlineMath math="dx^{i_1} \wedge \cdots \wedge dx^{i_k}" />（<InlineMath math="i_1 < \cdots < i_k" />）である。
                    <InlineMath math="k = n" /> のとき、<InlineMath math="1" /> から <InlineMath math="n" /> までの数を昇順に並べる方法は <InlineMath math="(1, 2, \ldots, n)" /> の1通りしか存在しない。
                    したがって、基底は <InlineMath math="dx^1 \wedge \cdots \wedge dx^n" /> の1つだけであり、<InlineMath math="\omega" /> はそのスカラー関数倍として一意に表される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この <InlineMath math="n" />-形式 <InlineMath math="dx^1 \wedge \cdots \wedge dx^n" /> に <InlineMath math="n" /> 個の接ベクトルを入力すると、その値はまさに「行列式」になります。
                これは、ウェッジ積が行列式の交代性を本質的に捉えていることを意味します。
            </p>

            <ContentBox type="example" title="Example 5.2-2">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> 上の3-形式 <InlineMath math="\omega = f \, dx \wedge dy \wedge dz" /> を考える。
                    これに3つの接ベクトル <InlineMath math="v_1, v_2, v_3" /> を入力する。各ベクトルを成分表示で <InlineMath math="v_j = (v_{1j}, v_{2j}, v_{3j})^T" /> とする（すなわち <InlineMath math="dx(v_j) = v_{1j}" /> など）。
                </p>
                <p className="mt-2">
                    ウェッジ積の定義（交代化）に従って計算すると、
                </p>
                <BlockMath math="(dx \wedge dy \wedge dz)(v_1, v_2, v_3) = \sum_{\sigma \in S_3} \mathrm{sgn}(\sigma) dx(v_{\sigma(1)}) dy(v_{\sigma(2)}) dz(v_{\sigma(3)})" />
                <p className="mt-2">
                    となる。これは、列ベクトル <InlineMath math="v_1, v_2, v_3" /> を並べた <InlineMath math="3 \times 3" /> 行列の行列式の定義式そのものである。
                </p>
                <BlockMath math="\omega(v_1, v_2, v_3) = f \cdot \det(v_1, v_2, v_3)" />
                <p className="mt-2">
                    行列式は、3つのベクトルが張る平行六面体の「符号付き体積」を表す。
                    したがって、<InlineMath math="n" />-形式は多様体上の「体積要素」を測るための自然な対象であることがわかる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="体積形式への接続">
                <p>
                    ウェッジ積と行列式のこの密接な関係は、次章（第6章）で「体積形式」と「多様体上の積分」を定義する際の核心となります。
                    多様体上では、座標変換に伴って微小体積要素がヤコビ行列式倍されますが、<InlineMath math="n" />-形式の座標変換則はまさにこのヤコビ行列式を自動的に生み出すようにできています。
                    これにより、座標に依存しない「積分」が可能になるのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ウェッジ積 <InlineMath math="\omega \wedge \eta" /> は、テンソル積を交代化することで定義される。</li>
                    <li>ウェッジ積は結合律、双線形性、および次数付き反可換性 <InlineMath math="\omega \wedge \eta = (-1)^{kl} \eta \wedge \omega" /> を満たす。</li>
                    <li><InlineMath math="n" /> 次元多様体上の <InlineMath math="n" />-形式は <InlineMath math="f(x) \, dx^1 \wedge \cdots \wedge dx^n" /> の形に一意に表され、その値は行列式（符号付き体積）を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
