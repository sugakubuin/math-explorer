import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstIsomorphismTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                群論において最も基本的かつ重要な定理の1つが、準同型定理（第一同型定理）です。
                これは、準同型写像の「核」による商群と、その写像の「像」が本質的に同じ構造（同型）を持つことを示しています。
                この定理を理解することで、複雑な商群の構造を、より扱いやすい「像」の構造を通して深く理解することができるようになります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第一同型定理（準同型定理）</h2>

            <p className="leading-relaxed mb-4">
                それでは、定理の正確な主張を確認しましょう。準同型写像 <InlineMath math="\phi" /> が核 <InlineMath math="\ker \phi" /> を法とする商群から像への自然な同型を導くことを示します。
            </p>

            <ContentBox type="theorem" title="Theorem 6.1-1 (第一同型定理/準同型定理)">
                <p>
                    <InlineMath math="\phi: G \to G'" /> を群の準同型写像とする。このとき、以下が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="G/\ker\phi \cong \mathrm{Im}\,\phi" /> である。
                    </li>
                    <li>
                        具体的には、写像 <InlineMath math="\bar{\phi}: G/\ker\phi \to \mathrm{Im}\,\phi" /> を
                        <BlockMath math="\bar{\phi}(g\ker\phi) = \phi(g)" />
                        と定義すると、これは同型写像を与える。
                    </li>
                </ol>
            </ContentBox>

            <p className="leading-relaxed my-4">
                この定理が主張する「商群と像の同一視」について、少し直感的なイメージを整理しておきましょう。
            </p>

            <ContentBox type="remark" title="第一同型定理の直感的意味">
                <p>
                    第一同型定理は、ある群 <InlineMath math="G" /> から別の群 <InlineMath math="G'" /> への準同型写像 <InlineMath math="\phi" /> があるとき、
                    <InlineMath math="G" /> の情報をどの程度「圧縮」して <InlineMath math="G'" /> に伝えているかを記述しています。
                    核 <InlineMath math="\ker \phi" /> は「潰されて単位元になってしまう情報」であり、
                    それ以外の情報は像 <InlineMath math="\mathrm{Im} \, \phi" /> としてそのまま保存されます。
                    つまり、情報の損失分（核）で割った残りの構造が、像そのものであることを主張しているのです。
                </p>
            </ContentBox>

            <p className="leading-relaxed my-4">
                定理の証明においては、構成した写像 <InlineMath math="\bar{\phi}" /> が代表元の取り方に依らずに定まること（well-definedness）を確認することが最も重要です。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="K = \ker\phi" /> とおく。写像 <InlineMath math="\bar{\phi}: G/K \to \mathrm{Im}\,\phi" /> が同型写像であることを、以下の4ステップで証明する。
                </p>
                <ul className="list-decimal list-inside space-y-6 mt-6">
                    <li>
                        <b>ウェルディファインド性（Well-definedness）</b>：<br />
                        <InlineMath math="g_1K = g_2K" /> とすると、<InlineMath math="g_1^{-1}g_2 \in K = \ker\phi" /> である。
                        準同型の定義より <InlineMath math="\phi(g_1^{-1}g_2) = \phi(g_1)^{-1}\phi(g_2) = e'" /> となり、
                        <InlineMath math="\phi(g_1) = \phi(g_2)" /> を得る。
                        よって、代表元の取り方に依らず写像の値は一意に定まる。
                    </li>
                    <li>
                        <b>準同型性</b>：<br />
                        任意の <InlineMath math="g_1K, g_2K \in G/K" /> に対して、
                        <BlockMath math="\begin{aligned} \bar{\phi}((g_1K)(g_2K)) &= \bar{\phi}((g_1g_2)K) = \phi(g_1g_2) \\ &= \phi(g_1)\phi(g_2) = \bar{\phi}(g_1K)\bar{\phi}(g_2K) \end{aligned}" />
                        となるため、<InlineMath math="\bar{\phi}" /> は準同型である。
                    </li>
                    <li>
                        <b>単射性</b>：<br />
                        <InlineMath math="\bar{\phi}(gK) = e'" /> とすると、<InlineMath math="\phi(g) = e'" /> である。
                        これは <InlineMath math="g \in \ker\phi = K" /> を意味し、商群の元として <InlineMath math="gK = K" />（単位元）である。
                        したがって、核が単位元のみであるため <InlineMath math="\bar{\phi}" /> は単射である。
                    </li>
                    <li>
                        <b>全射性</b>：<br />
                        任意の <InlineMath math="y' \in \mathrm{Im}\,\phi" /> に対して、ある <InlineMath math="g \in G" /> が存在して <InlineMath math="\phi(g) = y'" /> と書ける。
                        このとき <InlineMath math="\bar{\phi}(gK) = \phi(g) = y'" /> となり、<InlineMath math="\bar{\phi}" /> は全射である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400 mt-4">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed my-6">
                第一同型定理は、抽象的な商群の構造を具体的な「像」として捉え直すための強力な道具となります。次に、いくつかの具体的な例を通してその威力を確認しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第一同型定理の応用例</h2>

            <p className="leading-relaxed mb-4">
                行列群や対称群など、数学の様々な場面で現れる群の商群を計算してみます。
            </p>

            <ContentBox type="example" title="Example 6.1-1 (行列群と対称群)">
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <b>行列式と一般線形群</b>：<br />
                        準同型 <InlineMath math="\det: GL_n(\mathbb{R}) \to \mathbb{R}^*" /> を考える。
                        核は <InlineMath math="SL_n(\mathbb{R})" /> であり、全射であるため、
                        <BlockMath math="GL_n(\mathbb{R})/SL_n(\mathbb{R}) \cong \mathbb{R}^* \quad (\cong \mathrm{Im}\,\det)" />
                        が得られる。
                    </li>
                    <li>
                        <b>置換の符号と対称群</b>：<br />
                        準同型 <InlineMath math="\mathrm{sgn}: S_n \to \{1, -1\}" />（<InlineMath math="n \geq 2" />）を考える。
                        核は交代群 <InlineMath math="A_n" /> であるため、
                        <BlockMath math="S_n/A_n \cong \{1, -1\} \cong \mathbb{Z}/2\mathbb{Z}" />
                        が得られる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-4">
                また、巡回群の商群も第一同型定理を用いることで、その位数の関係性と構造を明快に理解することができます。
            </p>

            <ContentBox type="example" title="Example 6.1-2 (巡回群の準同型像)">
                <p>
                    アーベル群 <InlineMath math="G = \mathbb{Z}/6\mathbb{Z}" /> と、準同型 <InlineMath math="\phi: G \to G" />（<InlineMath math="\phi(x) = 2x" />）を考える。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                        <InlineMath math="\mathrm{Im}\,\phi = \{0, 2, 4\} \cong \mathbb{Z}/3\mathbb{Z}" />
                    </li>
                    <li>
                        <InlineMath math="\ker\phi = \{0, 3\} \cong \mathbb{Z}/2\mathbb{Z}" />
                    </li>
                    <li>
                        第一同型定理より：
                        <BlockMath math="(\mathbb{Z}/6\mathbb{Z})/(\mathbb{Z}/2\mathbb{Z}) \cong \mathbb{Z}/3\mathbb{Z}" />
                        となり、位数が <InlineMath math="6/2 = 3" /> で一致することからも納得できる。
                    </li>
                </ul>
            </ContentBox>

            <p className="leading-relaxed my-6">
                この第一同型定理を基礎として、次節以降では第二・第三同型定理、そして対応定理といった、より発展的な同型定理について学んでいきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>第一同型定理は、準同型の「行き先（像）」と「元の群を核で割った商群」が同型であることを主張する。</li>
                    <li>複雑な商群の構造を調べるとき、それを「馴染みのある群への準同型の像」として解釈するのに非常に強力である。</li>
                    <li>証明の核となる写像 <InlineMath math="\bar{\phi}: g\ker\phi \mapsto \phi(g)" /> の構成法を理解することが重要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
