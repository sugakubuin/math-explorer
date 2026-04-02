import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaussAndCodazziEquations() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                曲面を特徴づける第一基本形式（内的）と第二基本形式（外的）は、完全に独立しているわけではなく、ある微分方程式（偏微分の可換性）によって強く束縛されています。これがガウス方程式とコダッチ方程式です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ガウス方程式</h2>

            <p className="leading-relaxed">
                位置ベクトル <InlineMath math="\mathbf{x}(u,v)" /> は滑らかなので、3階偏微分の順序は交換可能です（<InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" />）。この当たり前の事実から、深遠な関係式が導かれます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.2-1 (ガウス方程式)"
            >
                <p>
                    前節で定義したクリストッフェル記号と第二基本形式の係数を用いると、第一基本形式と第二基本形式の間に以下の<strong>ガウス方程式（Gauss equation）</strong>と呼ばれる関係式が成り立つ。
                    <BlockMath math="\begin{aligned} eg - f^2 &= E( (\Gamma^2_{11})_v - (\Gamma^2_{12})_u \\ &\quad \quad + \Gamma^1_{11}\Gamma^2_{12} + \Gamma^2_{11}\Gamma^2_{22} - \Gamma^1_{12}\Gamma^2_{11} - (\Gamma^2_{12})^2 ) \\ &\quad + F( (\Gamma^1_{12})_u - (\Gamma^1_{11})_v + \Gamma^2_{12}\Gamma^1_{22} - \Gamma^2_{11}\Gamma^1_{22} ) \end{aligned}" />
                </p>
                <p>
                    この右辺はクリストッフェル記号とその微分、すなわち「第一基本形式 <InlineMath math="E, F, G" /> とその1次・2次偏微分」のみで書かれている。これを <InlineMath math="R_{1212}" />（リーマン曲率テンソルの成分）と書くことにすれば、
                    <BlockMath math="eg - f^2 = R_{1212}" />
                    と簡潔に表される。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    3階偏微分 <InlineMath math="\mathbf{x}_{uuv}" /> を二通りの順序で計算する。まず、<InlineMath math="\mathbf{x}_{uu}" /> を <InlineMath math="v" /> で微分する。
                    <BlockMath math="\mathbf{x}_{uuv} = \frac{\partial}{\partial v}(\mathbf{x}_{uu}) = \frac{\partial}{\partial v}(\Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N})" />
                </p>
                <p>
                    次に、<InlineMath math="\mathbf{x}_{uv}" /> を <InlineMath math="u" /> で微分する。
                    <BlockMath math="\mathbf{x}_{uvu} = \frac{\partial}{\partial u}(\mathbf{x}_{uv}) = \frac{\partial}{\partial u}(\Gamma^1_{12}\mathbf{x}_u + \Gamma^2_{12}\mathbf{x}_v + f\mathbf{N})" />
                </p>
                <p>
                    ここで、右辺の微分の展開にあたり、再び2階微分 <InlineMath math="\mathbf{x}_{uv}, \mathbf{x}_{vv}" /> 等が現れるが、これらをさらにクリストッフェル記号と第二基本形式に展開し直す。さらに、ワインガルテンの公式（<InlineMath math="\mathbf{N}_u, \mathbf{N}_v" /> を <InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> で表す公式）を用いて、すべてを <InlineMath math="\{\mathbf{x}_u, \mathbf{x}_v, \mathbf{N}\}" /> の一次結合の形に揃える。
                </p>
                <p>
                    <InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" /> であるから、両辺の <InlineMath math="\mathbf{x}_v" /> の係数（接平面方向の係数の一つ）を比較して整理すると、左辺に第二基本形式の組み合わせ <InlineMath math="eg - f^2" /> が現れ、右辺にクリストッフェル記号の微分と積の複雑な式（<InlineMath math="R_{1212}" /> に相当）が残り、定理の等式が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">コダッチ方程式</h2>

            <p className="leading-relaxed">
                同じく <InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" /> の両辺を展開した式において、今度は「法ベクトル <InlineMath math="\mathbf{N}" /> の係数」を比較することで、別の関係式が得られます。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.2-2 (コダッチ方程式)"
            >
                <p>
                    <InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" /> の法成分を比較することで、第二基本形式の偏微分とクリストッフェル記号の間に、次の<strong>マイナルディ・コダッチ方程式（Mainardi-Codazzi equations）</strong>が成り立つ。
                    <BlockMath math="e_v - f_u = e\Gamma^1_{12} + f(\Gamma^2_{12} - \Gamma^1_{11}) - g\Gamma^2_{11}" />
                    <BlockMath math="f_v - g_u = e\Gamma^1_{22} + f(\Gamma^2_{22} - \Gamma^1_{12}) - g\Gamma^2_{12}" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    ガウス方程式の証明と同様に、
                    <BlockMath math="\frac{\partial}{\partial v}(\Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v + e\mathbf{N}) = \frac{\partial}{\partial u}(\Gamma^1_{12}\mathbf{x}_u + \Gamma^2_{12}\mathbf{x}_v + f\mathbf{N})" />
                    の展開式から、今度は <InlineMath math="\mathbf{N}" /> の係数を抽出する。
                </p>
                <p>
                    左辺の <InlineMath math="\mathbf{N}" /> の係数は、積の微分から生じる <InlineMath math="e_v" /> と、<InlineMath math="\mathbf{x}_u, \mathbf{x}_v" /> の <InlineMath math="v" /> 微分から生じる法成分の和となる。右辺も同様に計算して等置し、整理すると定理の第1式が得られる。（第2式は <InlineMath math="\mathbf{x}_{uvv} = \mathbf{x}_{vvu}" /> から同様に得られる。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                具体例として、球面においてこれらの微分方程式が本当に成り立っているのか確認してみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 5.2-1 (球面での検証)"
            >
                <p>
                    球面の第二基本形式は <InlineMath math="e=1, f=0, g=\sin^2 u" /> であり、偏微分は <InlineMath math="e_v = 0, f_u = 0" /> である。
                    よって、コダッチ方程式の第1式の左辺は <InlineMath math="e_v - f_u = 0 - 0 = 0" /> である。
                </p>
                <p>
                    右辺を計算する。Example 5.1-1 で求めた球面のクリストッフェル記号は、非ゼロなのが <InlineMath math="\Gamma^1_{22} = -\sin u\cos u" /> と <InlineMath math="\Gamma^2_{12} = \cot u" /> のみであった。
                    よって右辺に現れる記号のうち、<InlineMath math="\Gamma^1_{12}, \Gamma^1_{11}, \Gamma^2_{11}" /> はすべて 0 である。
                </p>
                <p>
                    右辺 <InlineMath math="= 1 \cdot 0 + 0 \cdot (\cot u - 0) - \sin^2 u \cdot 0 = 0" /> となり、左辺と右辺が見事に一致する。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>3階偏微分の順序交換可能性（<InlineMath math="\mathbf{x}_{uuv} = \mathbf{x}_{uvu}" />）を接成分と法成分に分解することで、2つの重要な方程式系が得られる。</li>
                    <li>接成分の比較から得られる<strong>ガウス方程式</strong>は、第二基本形式の行列式部分（<InlineMath math="eg - f^2" />）をクリストッフェル記号だけで表す。</li>
                    <li>法成分の比較から得られる<strong>コダッチ方程式</strong>は、第二基本形式の空間的な変化（微分）に対する拘束条件を与える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}