import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TensorFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                接空間 <InlineMath math="T_pM" /> と余接空間 <InlineMath math="T_p^*M" /> を手に入れたことで、これらを組み合わせてより複雑な多重線形代数の対象を多様体上に展開する準備が整いました。
                3-11 多重線形代数学I で学んだ「テンソル積」の概念を各点の接空間・余接空間に適用し、それらを滑らかに繋ぎ合わせたものが<strong>テンソル場（Tensor field）</strong>です。
                リーマン計量や曲率など、微分幾何学における最も重要な対象の多くはテンソル場として定式化されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テンソル束の定義</h2>

            <p className="leading-relaxed">
                まず、各点において接空間のテンソル積と余接空間のテンソル積を作り、それらを直和して「テンソル束」を構成します。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.3-1 (<InlineMath math="(r,s)" />-テンソル束)</span>}>
                <p>
                    多様体 <InlineMath math="M" /> の各点 <InlineMath math="p" /> に対して、<InlineMath math="r" /> 個の接空間と <InlineMath math="s" /> 個の余接空間のテンソル積
                </p>
                <BlockMath math="(T_pM)^{\otimes r} \otimes (T_p^*M)^{\otimes s} = \underbrace{T_pM \otimes \cdots \otimes T_pM}_{r\text{個}} \otimes \underbrace{T_p^*M \otimes \cdots \otimes T_p^*M}_{s\text{個}}" />
                <p className="mt-2">
                    を考える。これらの直和集合を
                </p>
                <BlockMath math="T^{(r,s)}M = \bigsqcup_{p \in M} (T_pM)^{\otimes r} \otimes (T_p^*M)^{\otimes s}" />
                <p className="mt-2">
                    とし、自然な射影と多様体構造を入れたものを、<InlineMath math="M" /> 上の<strong><InlineMath math="(r,s)" />-テンソル束（tensor bundle of type <InlineMath math="(r,s)" />）</strong>と呼ぶ。
                    これは <InlineMath math="M" /> を底空間とするランク <InlineMath math="n^{r+s}" /> のベクトル束となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このテンソル束の滑らかな切断がテンソル場です。
            </p>

            <ContentBox type="definition" title={<span>Definition 4.3-2 (<InlineMath math="(r,s)" />-テンソル場)</span>}>
                <p>
                    <InlineMath math="(r,s)" />-テンソル束 <InlineMath math="T^{(r,s)}M" /> の滑らかな切断を、<strong><InlineMath math="(r,s)" />-テンソル場（tensor field of type <InlineMath math="(r,s)" />）</strong>と呼ぶ。
                </p>
                <p className="mt-2">
                    局所座標 <InlineMath math="(x^1, \ldots, x^n)" /> を用いると、<InlineMath math="(r,s)" />-テンソル場 <InlineMath math="T" /> は、滑らかな関数 <InlineMath math="T^{i_1 \ldots i_r}_{j_1 \ldots j_s}(x)" /> を用いて
                </p>
                <BlockMath math="T = \sum_{i_1, \ldots, i_r} \sum_{j_1, \ldots, j_s} T^{i_1 \ldots i_r}_{j_1 \ldots j_s}(x) \frac{\partial}{\partial x^{i_1}} \otimes \cdots \otimes \frac{\partial}{\partial x^{i_r}} \otimes dx^{j_1} \otimes \cdots \otimes dx^{j_s}" />
                <p className="mt-2">
                    と一意に表される。上付き添字 <InlineMath math="i" /> は接ベクトル（反変成分）、下付き添字 <InlineMath math="j" /> は余接ベクトル（共変成分）に対応する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                テンソル場は、接ベクトルや余接ベクトルを入力として受け取り、実数を出力する多重線形写像とみなすことができます。
                具体的なテンソル場の例を見てみましょう。
            </p>

            <ContentBox type="example" title="Example 4.3-1 (ユークリッド計量)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> 上の <InlineMath math="(0,2)" />-テンソル場（2階共変テンソル場）として、ユークリッド計量 <InlineMath math="g" /> を考える。
                </p>
                <BlockMath math="g = \sum_{i=1}^n dx^i \otimes dx^i" />
                <p className="mt-2">
                    このテンソル場 <InlineMath math="g" /> は、2つの接ベクトル場 <InlineMath math="v = \sum v^i \frac{\partial}{\partial x^i}" /> と <InlineMath math="w = \sum w^j \frac{\partial}{\partial x^j}" /> を入力として受け取ると、
                </p>
                <BlockMath math="g(v, w) = \left( \sum_{i=1}^n dx^i \otimes dx^i \right) \left( \sum_{k=1}^n v^k \frac{\partial}{\partial x^k}, \sum_{l=1}^n w^l \frac{\partial}{\partial x^l} \right) = \sum_{i=1}^n dx^i(v) dx^i(w) = \sum_{i=1}^n v^i w^i" />
                <p className="mt-2">
                    となり、標準的な内積を返す。このように、<InlineMath math="(0,2)" />-テンソル場は各点に内積構造を与えることができる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.3-2 (恒等写像)">
                <p>
                    多様体 <InlineMath math="M" /> 上の <InlineMath math="(1,1)" />-テンソル場（混合テンソル場）として、恒等写像テンソル <InlineMath math="I" /> を考える。
                </p>
                <BlockMath math="I = \sum_{i=1}^n \frac{\partial}{\partial x^i} \otimes dx^i" />
                <p className="mt-2">
                    このテンソル場 <InlineMath math="I" /> を、接ベクトル <InlineMath math="v = \sum v^j \frac{\partial}{\partial x^j}" /> に作用させると、
                </p>
                <BlockMath math="I(v) = \sum_{i=1}^n \frac{\partial}{\partial x^i} dx^i(v) = \sum_{i=1}^n v^i \frac{\partial}{\partial x^i} = v" />
                <p className="mt-2">
                    となり、任意の接ベクトル <InlineMath math="v" /> に対して <InlineMath math="I(v) = v" /> が成り立つ。
                    これは、<InlineMath math="(1,1)" />-テンソル場が「接空間から接空間への線形変換」と自然に同一視できることを示している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">テンソルの座標変換</h2>

            <p className="leading-relaxed">
                物理学や古典的な微分幾何学では、テンソルは「座標変換に対して特定の規則で成分が変換される量」として定義されることがよくあります。
                我々の定義（多重線形写像としての定義）から、この変換規則が自然に導かれることを確認します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.3-1">
                <p>
                    2つの局所座標系 <InlineMath math="(x^1, \ldots, x^n)" /> と <InlineMath math="(y^1, \ldots, y^n)" /> の間で座標変換を行うとする。
                    <InlineMath math="(r,s)" />-テンソル場 <InlineMath math="T" /> の成分は、<InlineMath math="r" /> 個のヤコビ行列と <InlineMath math="s" /> 個の逆ヤコビ行列の積によって変換される。
                </p>
                <BlockMath math="\tilde{T}^{i_1 \ldots i_r}_{j_1 \ldots j_s} = \sum_{k_1 \ldots k_r} \sum_{l_1 \ldots l_s} T^{k_1 \ldots k_r}_{l_1 \ldots l_s} \frac{\partial y^{i_1}}{\partial x^{k_1}} \cdots \frac{\partial y^{i_r}}{\partial x^{k_r}} \frac{\partial x^{l_1}}{\partial y^{j_1}} \cdots \frac{\partial x^{l_s}}{\partial y^{j_s}}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    基底の変換規則
                </p>
                <BlockMath math="\frac{\partial}{\partial x^k} = \sum_{i=1}^n \frac{\partial y^i}{\partial x^k} \frac{\partial}{\partial y^i}, \quad dx^l = \sum_{j=1}^n \frac{\partial x^l}{\partial y^j} dy^j" />
                <p className="mt-2">
                    を、テンソル場の局所座標表示に代入する。
                </p>
                <BlockMath math="\begin{aligned} T &= \sum_{k, l} T^{k_1 \ldots k_r}_{l_1 \ldots l_s} \frac{\partial}{\partial x^{k_1}} \otimes \cdots \otimes \frac{\partial}{\partial x^{k_r}} \otimes dx^{l_1} \otimes \cdots \otimes dx^{l_s} \\ &= \sum_{k, l} T^{k_1 \ldots k_r}_{l_1 \ldots l_s} \left( \sum_{i_1} \frac{\partial y^{i_1}}{\partial x^{k_1}} \frac{\partial}{\partial y^{i_1}} \right) \otimes \cdots \otimes \left( \sum_{j_1} \frac{\partial x^{l_1}}{\partial y^{j_1}} dy^{j_1} \right) \otimes \cdots \end{aligned}" />
                <p className="mt-2">
                    テンソル積の多重線形性により、和と係数を外に出すことができる。
                </p>
                <BlockMath math="= \sum_{i, j} \left( \sum_{k, l} T^{k_1 \ldots k_r}_{l_1 \ldots l_s} \frac{\partial y^{i_1}}{\partial x^{k_1}} \cdots \frac{\partial x^{l_1}}{\partial y^{j_1}} \cdots \right) \frac{\partial}{\partial y^{i_1}} \otimes \cdots \otimes dy^{j_1} \otimes \cdots" />
                <p className="mt-2">
                    この括弧の中身が新しい座標系における成分 <InlineMath math="\tilde{T}^{i_1 \ldots i_r}_{j_1 \ldots j_s}" /> であり、主張の変換則が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体的なテンソル場について、座標変換を計算してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.3-3 (極座標への変換)">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> 上の <InlineMath math="(0,2)" />-テンソル場（ユークリッド計量）<InlineMath math="g = dx \otimes dx + dy \otimes dy" /> を、直交座標 <InlineMath math="(x,y)" /> から極座標 <InlineMath math="(r, \theta)" /> へ変換する。
                </p>
                <p className="mt-2">
                    座標変換は <InlineMath math="x = r\cos\theta, y = r\sin\theta" /> である。基底の変換則は、
                </p>
                <BlockMath math="\begin{aligned} dx &= \frac{\partial x}{\partial r} dr + \frac{\partial x}{\partial \theta} d\theta = \cos\theta \, dr - r\sin\theta \, d\theta \\ dy &= \frac{\partial y}{\partial r} dr + \frac{\partial y}{\partial \theta} d\theta = \sin\theta \, dr + r\cos\theta \, d\theta \end{aligned}" />
                <p className="mt-2">
                    これを <InlineMath math="g" /> に代入して展開する。
                </p>
                <BlockMath math="\begin{aligned} g &= (\cos\theta \, dr - r\sin\theta \, d\theta) \otimes (\cos\theta \, dr - r\sin\theta \, d\theta) \\ &\quad + (\sin\theta \, dr + r\cos\theta \, d\theta) \otimes (\sin\theta \, dr + r\cos\theta \, d\theta) \\ &= (\cos^2\theta + \sin^2\theta) dr \otimes dr + (-r\cos\theta\sin\theta + r\sin\theta\cos\theta) dr \otimes d\theta \\ &\quad + (-r\sin\theta\cos\theta + r\cos\theta\sin\theta) d\theta \otimes dr + (r^2\sin^2\theta + r^2\cos^2\theta) d\theta \otimes d\theta \\ &= dr \otimes dr + r^2 \, d\theta \otimes d\theta \end{aligned}" />
                <p className="mt-2">
                    このように、テンソル積の多重線形性を用いて直接代入して展開することで、成分の変換則を容易に計算できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="物理学の定義との整合性">
                <p>
                    物理学の教科書では、「座標変換に対して <InlineMath math="\tilde{T}^{ij} = \sum T^{kl} \frac{\partial y^i}{\partial x^k} \frac{\partial y^j}{\partial x^l}" /> と変換される量の組を反変テンソルと呼ぶ」といった定義がよくなされます。
                    数学的には、テンソル場は「多重線形写像」という座標に依存しない実体として定義され、その成分が基底の取り替えによって結果的にそのような変換則を満たす、という順序で理解されます。
                    このアプローチにより、テンソルが「座標系に依存しない幾何学的な実体」であることが明確になります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="(r,s)" />-テンソル束は、接空間の <InlineMath math="r" /> 階テンソル積と余接空間の <InlineMath math="s" /> 階テンソル積の直和として構成される。</li>
                    <li>テンソル場はテンソル束の滑らかな切断であり、局所座標では基底のテンソル積の線形結合として表される。</li>
                    <li>テンソル場の成分は、座標変換のもとでヤコビ行列（反変成分）と逆ヤコビ行列（共変成分）の積によって変換される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
