import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_9_2() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節での幾何学的な直観を厳密な定理として定式化したものが<strong>逆写像定理</strong>です。
                これは解析学において非常に強力な定理であり、方程式の解の存在や座標変換の正当性を担保します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆写像定理</h2>

            <p>
                まずは定理の主張を正確に述べます。ヤコビアンが非零であるという一点での性質が、その点の「ある開近傍」における全単射性と、逆写像の微分可能性を導くという驚くべき結果です。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (逆写像定理)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^n" /> を開集合とし、写像 <InlineMath math="\mathbf{f}: D \to \mathbb{R}^n" /> は <InlineMath math="C^1" /> 級であるとする。
                </p>
                <p className="mt-2">
                    ある点 <InlineMath math="\mathbf{a} \in D" /> において、<InlineMath math="\mathbf{f}" /> のヤコビ行列 <InlineMath math="J_{\mathbf{f}}(\mathbf{a})" /> の行列式（ヤコビアン）が非零であるとする。すなわち、
                </p>
                <BlockMath math="\det J_{\mathbf{f}}(\mathbf{a}) \neq 0" />
                <p className="mt-2">
                    このとき、点 <InlineMath math="\mathbf{a}" /> の開近傍 <InlineMath math="U \subset D" /> と、点 <InlineMath math="\mathbf{b} = \mathbf{f}(\mathbf{a})" /> の開近傍 <InlineMath math="V \subset \mathbb{R}^n" /> が存在して、次の性質を満たす：
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><InlineMath math="\mathbf{f}" /> を <InlineMath math="U" /> に制限した写像 <InlineMath math="\mathbf{f}|_U : U \to V" /> は<strong>全単射（微分同相写像）</strong>である。</li>
                    <li>逆写像 <InlineMath math="\mathbf{g} = (\mathbf{f}|_U)^{-1} : V \to U" /> もまた <InlineMath math="C^1" /> 級である。</li>
                    <li>任意の <InlineMath math="\mathbf{y} \in V" /> （対応する <InlineMath math="\mathbf{x} = \mathbf{g}(\mathbf{y}) \in U" />）において、逆写像のヤコビ行列は元の写像のヤコビ行列の逆行列となる：
                        <BlockMath math="J_{\mathbf{g}}(\mathbf{y}) = \big[ J_{\mathbf{f}}(\mathbf{x}) \big]^{-1}" />
                    </li>
                </ol>
            </ContentBox>

            <p>
                定理の主張を理解するために、具体的な関数に適用してみましょう。特に「局所的」な全単射性であることに注意が必要です。
            </p>

            <ContentBox type="example" title="Example 9.2-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> から <InlineMath math="\mathbb{R}^2" /> への写像 <InlineMath math="\mathbf{f}(r, \theta) = (r \cos \theta, r \sin \theta)" /> を考えます。これは極座標から直交座標への変換です。
                </p>
                <p className="mt-2">
                    ヤコビ行列は次のようになります。
                </p>
                <BlockMath math="J_{\mathbf{f}}(r, \theta) = \begin{pmatrix} \cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{pmatrix}" />
                <p className="mt-2">
                    ヤコビアンは <InlineMath math="\det J_{\mathbf{f}}(r, \theta) = r(\cos^2 \theta + \sin^2 \theta) = r" /> となります。
                </p>
                <p className="mt-2">
                    したがって、<InlineMath math="r \neq 0" /> である任意の点 <InlineMath math="(r_0, \theta_0)" /> においてヤコビアンは非零です。Theorem 9.2-1 より、この点の周りのある開近傍では <InlineMath math="\mathbf{f}" /> は全単射となり、<InlineMath math="C^1" /> 級の逆写像が存在します。
                </p>
                <p className="mt-2">
                    しかし、<InlineMath math="\mathbf{f}" /> は大域的には全単射ではありません。なぜなら、<InlineMath math="\mathbf{f}(r, \theta) = \mathbf{f}(r, \theta + 2\pi)" /> が成り立つからです。逆写像定理が保証するのは、あくまでヤコビアンが非零となる点の<strong>局所的な</strong>開近傍における全単射性です。
                </p>
            </ContentBox>

            <p>
                この定理の厳密な証明は、解析学における重要な手法である「バナッハの不動点定理（縮小写像の原理）」を用いて行われます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p className="text-slate-700 dark:text-slate-300 font-bold">[Step 1: 条件の単純化]</p>
                <p className="mt-2">
                    一般性を失わず、<InlineMath math="\mathbf{a} = \mathbf{0}, \mathbf{f}(\mathbf{a}) = \mathbf{0}" /> とし、さらに点 <InlineMath math="\mathbf{0}" /> におけるヤコビ行列 <InlineMath math="A = J_{\mathbf{f}}(\mathbf{0})" /> が単位行列 <InlineMath math="I" /> であるとする（もし <InlineMath math="A \neq I" /> ならば、写像 <InlineMath math="A^{-1} \circ \mathbf{f}" /> を考えればよい。仮定より <InlineMath math="\det A \neq 0" /> なので <InlineMath math="A^{-1}" /> は存在する）。
                    このとき、新しい関数 <InlineMath math="\mathbf{h}(\mathbf{x}) = \mathbf{x} - \mathbf{f}(\mathbf{x})" /> を定義する。
                </p>
                <p className="mt-2">
                    <InlineMath math="J_{\mathbf{h}}(\mathbf{0}) = I - J_{\mathbf{f}}(\mathbf{0}) = I - I = O" />（零行列）である。<InlineMath math="\mathbf{f}" /> が <InlineMath math="C^1" /> 級なので <InlineMath math="J_{\mathbf{h}}" /> は連続であるから、原点を極中心とする十分に小さな閉球 <InlineMath math="\overline{B_r(\mathbf{0})}" /> において、ヤコビ行列の各成分は十分小さくできる。
                    特に、平均値の定理（のベクトル値版の評価）により、任意の <InlineMath math="\mathbf{x}_1, \mathbf{x}_2 \in \overline{B_r(\mathbf{0})}" /> に対して
                </p>
                <BlockMath math="\|\mathbf{h}(\mathbf{x}_1) - \mathbf{h}(\mathbf{x}_2)\| \le \frac{1}{2} \|\mathbf{x}_1 - \mathbf{x}_2\| \quad \cdots (1)" />
                <p className="mt-2">
                    となるように <InlineMath math="r > 0" /> を選ぶことができる。（すなわち <InlineMath math="\mathbf{h}" /> は縮小定数 <InlineMath math="1/2" /> の縮小写像となる。）
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: 局所的全単射性の証明（縮小写像の原理の適用）]</p>
                <p className="mt-2">
                    方程式 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> を <InlineMath math="\mathbf{x}" /> について解くことは、<InlineMath math="\mathbf{x} = \mathbf{y} + \mathbf{h}(\mathbf{x})" /> を満たす不動点 <InlineMath math="\mathbf{x}" /> を見つけることと同値である。
                    固定された <InlineMath math="\mathbf{y}" /> に対し、写像 <InlineMath math="\Phi_{\mathbf{y}}(\mathbf{x}) = \mathbf{y} + \mathbf{h}(\mathbf{x})" /> を考える。
                </p>
                <p className="mt-2">
                    式(1)より、<InlineMath math="\Phi_{\mathbf{y}}" /> も縮小定数 <InlineMath math="1/2" /> の縮小写像である。
                    もし <InlineMath math="\|\mathbf{y}\| < r/2" /> ならば、任意の <InlineMath math="\mathbf{x} \in \overline{B_r(\mathbf{0})}" /> に対して、
                </p>
                <BlockMath math="\|\Phi_{\mathbf{y}}(\mathbf{x})\| \le \|\mathbf{y}\| + \|\mathbf{h}(\mathbf{x})\| < \frac{r}{2} + \frac{1}{2}\|\mathbf{x}\| \le \frac{r}{2} + \frac{r}{2} = r" />
                <p className="mt-2">
                    となり、<InlineMath math="\Phi_{\mathbf{y}}" /> は閉基本球 <InlineMath math="\overline{B_r(\mathbf{0})}" /> をそれ自身へと写す（<InlineMath math="\Phi_{\mathbf{y}}: \overline{B_r(\mathbf{0})} \to \overline{B_r(\mathbf{0})}" />）。
                </p>
                <p className="mt-2">
                    完備距離空間 <InlineMath math="\overline{B_r(\mathbf{0})}" /> 上の縮小写像 <InlineMath math="\Phi_{\mathbf{y}}" /> には、<strong>バナッハの不動点定理（縮小写像の原理）</strong>により、唯一の不動点 <InlineMath math="\mathbf{x}" /> が存在する。
                    これは、<InlineMath math="\|\mathbf{y}\| < r/2" /> を満たす任意の <InlineMath math="\mathbf{y}" /> に対して、<InlineMath math="\mathbf{f}(\mathbf{x}) = \mathbf{y}" /> となる <InlineMath math="\mathbf{x} \in \overline{B_r(\mathbf{0})}" /> がただ一つ存在することを示している（全単射性）。
                </p>
                <p className="mt-2">
                    さらに、式(1)を変形すると
                </p>
                <BlockMath math="\begin{aligned}
                                    \|\mathbf{x}_1 - \mathbf{x}_2\| - \|\mathbf{f}(\mathbf{x}_1) &- \mathbf{f}(\mathbf{x}_2)\| \\ 
                                    &\le \|(\mathbf{x}_1 - \mathbf{f}(\mathbf{x}_1)) - (\mathbf{x}_2 - \mathbf{f}(\mathbf{x}_2))\| \\ 
                                    &= \|\mathbf{h}(\mathbf{x}_1) - \mathbf{h}(\mathbf{x}_2)\| \le \frac{1}{2} \|\mathbf{x}_1 - \mathbf{x}_2\|
                                \end{aligned}" />
                <p className="mt-2">
                    これから <InlineMath math="\frac{1}{2}\|\mathbf{x}_1 - \mathbf{x}_2\| \le \|\mathbf{f}(\mathbf{x}_1) - \mathbf{f}(\mathbf{x}_2)\|" /> すなわち <InlineMath math="\|\mathbf{g}(\mathbf{y}_1) - \mathbf{g}(\mathbf{y}_2)\| \le 2\|\mathbf{y}_1 - \mathbf{y}_2\|" /> が得られ、逆関数 <InlineMath math="\mathbf{g}" /> がリプシッツ連続（特に連続）であることが分かる。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 3: 逆写像の微分可能性]</p>
                <p className="mt-2">
                    <InlineMath math="V = B_{r/2}(\mathbf{0})" /> とし、<InlineMath math="U = \mathbf{g}(V)" />（<InlineMath math="\mathbf{g}" /> は連続なので <InlineMath math="U" /> は開集合）とおく。<InlineMath math="\mathbf{y}, \mathbf{y} + \mathbf{k} \in V" /> に対し、対応する <InlineMath math="U" /> の元を <InlineMath math="\mathbf{x}, \mathbf{x} + \mathbf{h}" /> とする。
                    <InlineMath math="\mathbf{f}" /> の点 <InlineMath math="\mathbf{x}" /> における全微分の定義から、
                </p>
                <BlockMath math="\mathbf{k} = \mathbf{f}(\mathbf{x}+\mathbf{h}) - \mathbf{f}(\mathbf{x}) = J_{\mathbf{f}}(\mathbf{x})\mathbf{h} + \mathbf{o}(\|\mathbf{h}\|)" />
                <p className="mt-2">
                    ここで <InlineMath math="J_{\mathbf{f}}(\mathbf{x})" /> は正則であるから（<InlineMath math="r" /> を十分小さく取れば連続性より正則性は保たれる）、両辺に <InlineMath math="[J_{\mathbf{f}}(\mathbf{x})]^{-1}" /> を掛けて整理すると、
                </p>
                <BlockMath math="\mathbf{h} = [J_{\mathbf{f}}(\mathbf{x})]^{-1}\mathbf{k} - [J_{\mathbf{f}}(\mathbf{x})]^{-1}\mathbf{o}(\|\mathbf{h}\|)" />
                <p className="mt-2">
                    <InlineMath math="\mathbf{h} = \mathbf{g}(\mathbf{y}+\mathbf{k}) - \mathbf{g}(\mathbf{y})" /> であり、Step 2 より <InlineMath math="\|\mathbf{h}\| \le 2\|\mathbf{k}\|" /> だから <InlineMath math="\mathbf{o}(\|\mathbf{h}\|) = \mathbf{o}(\|\mathbf{k}\|)" /> である。したがって、
                </p>
                <BlockMath math="\mathbf{g}(\mathbf{y}+\mathbf{k}) - \mathbf{g}(\mathbf{y}) = [J_{\mathbf{f}}(\mathbf{x})]^{-1}\mathbf{k} + \mathbf{o}(\|\mathbf{k}\|)" />
                <p className="mt-2">
                    これはまさに <InlineMath math="\mathbf{g}" /> が点 <InlineMath math="\mathbf{y}" /> において全微分可能であり、そのヤコビ行列が <InlineMath math="[J_{\mathbf{f}}(\mathbf{x})]^{-1}" /> であることを示している。<InlineMath math="C^1" /> 級写像を用いた逆行列の各成分もまた連続であるため、導関数が連続、すなわち <InlineMath math="\mathbf{g}" /> も <InlineMath math="C^1" /> 級となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の概略</h2>

            <p>
                上記の証明は非常に技巧的に見えるかもしれませんが、その背後にあるアイデアは解析学において普遍的なものです。
            </p>

            <ContentBox type="remark" title="縮小写像の原理を用いた証明の構成">
                <p>
                    逆写像定理の証明には、上述の「縮小写像の原理（バナッハの不動点定理）」を用いる方法が一般的です。この方法は非常に強力で、後述するように陰関数定理や、さらには無限次元空間（バナッハ空間）上の微分方程式の解の存在定理などにも直接応用できます。
                </p>
                <p className="mt-2">
                    本質的なアイデアは、非線形な方程式 <InlineMath math="\mathbf{y} = \mathbf{f}(\mathbf{x})" /> を解く問題を、「アフィン写像（1次近似）で解いた結果に小さな補正を加える」という反復計算プロセス（不動点問題）に落とし込むことです。
                </p>
                <p className="mt-2">
                    ヤコビアンが非零であるという線形的な条件が、この反復が必ず真の解に収束すること（縮小性）を保証してくれています。つまり、局所的には非線形な写像も線形写像と「同じくらい行儀が良い」ため、線形代数の結果（正則行列の逆行列の存在）がそのまま非線形写像の局所的な逆写像の存在へと引き継がれるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>逆写像定理は、ヤコビアンが非零である点において、局所的な <InlineMath math="C^1" /> 級の逆写像の存在を保証する。</li>
                    <li>逆写像のヤコビ行列は、元の写像のヤコビ行列の逆行列となる。</li>
                    <li>定理の証明には、非線形方程式を不動点問題に帰着させる「縮小写像の原理」が本質的な役割を果たす。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
