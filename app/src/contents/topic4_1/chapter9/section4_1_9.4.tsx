import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RieszFredholmTheory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「コンパクト作用素はほとんど有限次元行列と同じように振る舞う」という性質の極めつけが、リースとフレドホルムによって構築された線形方程式の可解性理論です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フレドホルム方程式と交代定理</h2>

            <p>
                有限次元行列 <InlineMath math="A" /> によって定まる連立一次方程式 <InlineMath math="Ax = b" /> は、「解が唯一存在する（全射）」ことと、「同次方程式 <InlineMath math="Ax = 0" /> が自明な解 <InlineMath math="x = 0" /> しか持たない（単射）」ことが同値でした（線形代数の基本定理）。<br />
                無限次元空間では、一般の作用素 <InlineMath math="T" /> に対しては「単射ならば全射」は成り立ちません（例：右シフト作用素は単射だが全射でない）。しかし、<InlineMath math="T = I - K" />（<InlineMath math="K" /> がコンパクト作用素）という特別な形であれば、この有限次元の良い性質が復活します。
            </p>

            <ContentBox type="definition" title="Definition 9.4-1 (第二種フレドホルム方程式)">
                <p>
                    <InlineMath math="X" /> をバナッハ空間、<InlineMath math="K" /> をコンパクト作用素とする。与えられた <InlineMath math="f \in X" /> に対して未知のベクトル <InlineMath math="u \in X" /> を求める方程式
                </p>
                <BlockMath math="u - Ku = f \quad (\text{あるいは } (I - K)u = f)" />
                <p>
                    を<b>第二種フレドホルム方程式</b>という。
                </p>
            </ContentBox>

            <p>
                この方程式においては、有限次元で成り立つ「解がないなら自明でない零解がある」という排他的な性質が見事に復権します。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-1 (リース-フレドホルムの交代定理)">
                <p>
                    コンパクト作用素 <InlineMath math="K" /> に対し、作用素 <InlineMath math="I - K" /> について以下の定理が成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="\ker(I - K) = \{0\}" /> （すなわち方程式 <InlineMath math="u - Ku = 0" /> が自明解しかもたない）であることと、<InlineMath math="I - K" /> が全射（すなわち全てにおいて方程式 <InlineMath math="u - Ku = f" /> が解を持つ）であることは同値である。</li>
                    <li><InlineMath math="\ker(I - K)" /> （同次方程式の解空間）は必ず有限次元である。</li>
                </ol>
            </ContentBox>

            <p>
                その証明は、コンパクト作用素の生成する「近傍」や双対作用素の手法を組み合わせた、解析学の粋を集めたものになっています。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    重要なステップの概略のみを示す。<br />
                    1. <InlineMath math="\ker(I-K)" /> の有限次元性（定理の2）を先に言う。<InlineMath math="u \in \ker(I-K)" /> ならば <InlineMath math="u = Ku" /> である。したがって、恒等作用素 <InlineMath math="I" /> がこの空間上ではコンパクト作用素 <InlineMath math="K" /> に一致する。前節で見た通り、恒等作用素がコンパクトになるのは空間が有限次元のときのみである。よって <InlineMath math="\ker(I-K)" /> は有限次元部分空間となる。
                </p>
                <p>
                    2. 「単射 <InlineMath math="\Rightarrow" /> 全射」のスケッチ。<InlineMath math="T = I-K" /> が単射だとする。もし全射でなく <InlineMath math="X_1 = \mathrm{Im}(T) \subsetneq X" /> だったとする。<br />
                    <InlineMath math="X_1" /> は閉部分空間になることが示せるため、さらに <InlineMath math="X_2 = T(X_1)" /> など次々と狭い空間の列 <InlineMath math="X \supsetneq X_1 \supsetneq X_2 \supsetneq \dots" /> を構成できる。空間が真に狭まる場合、リースの補題より各空間の「際」にノルム1のベクトルをとることができ、これがコーシー部分列を持たないという矛盾を <InlineMath math="K" /> のコンパクト性から導ける。
                </p>
                <p>
                    3. 「全射 <InlineMath math="\Rightarrow" /> 単射」は随伴作用素 <InlineMath math="K^*" /> を用いて論じる。<InlineMath math="I - K" /> が全射なら開写像定理などから双対空間での性質により <InlineMath math="I - K^*" /> が単射であることが言え、そこから双対論法で <InlineMath math="I - K" /> 自体の単射性が結論付けられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                単なる有界作用素の級数展開（ノイマン級数）と比較することで、このフレドホルム理論が適用できる範囲の広さと強力さがより明確になります。
            </p>

            <ContentBox type="example" title="Example 9.4-1">
                <p>
                    「<InlineMath math="I - K" />」という形は、よく見ると実数の近似式 <InlineMath math="1/(1 - x) = 1 + x + x^2 + \dots" /> を想起させます。<br />
                    有界作用素 <InlineMath math="A" /> で <InlineMath math="\|A\| < 1" /> ならば、<b>ノイマン級数</b>と呼ばれる次のような級数が収束します。
                </p>
                <BlockMath math="(I - A)^{-1} = I + A + A^2 + A^3 + \dots = \sum_{n=0}^\infty A^n" />
                <p>
                    つまり <InlineMath math="K" /> のノルムが <InlineMath math="1" /> 未満ならば、常に単射かつ全射であり、解 <InlineMath math="u" /> は級数を用いて直接構成できます。<br />
                    リース-フレドホルム理論が真価を発揮するのは、<b><InlineMath math="\|K\| \geq 1" /> であっても</b>この交代定理が保証されるという点にあります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">フレドホルム方程式の可解条件</h2>

            <p>
                「<InlineMath math="I - K" /> が単射でない」場合、つまり同次方程式 <InlineMath math="u - Ku = 0" /> に自明でない解があるとき、<InlineMath math="u - Ku = f" /> は常に解を持つわけではなくなります。このとき方程式が解を持つための「条件」は何かが問題になります。
            </p>

            <ContentBox type="theorem" title="Theorem 9.4-2 (フレドホルムの可解条件)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間とし、<InlineMath math="K" /> をコンパクト作用素とする（フレドホルムの交代定理より <InlineMath math="\ker(I-K) \neq \{0\}" /> の状況を考える）。
                </p>
                <p>
                    非同次方程式 <InlineMath math="u - Ku = f" /> に解が存在するための必要十分条件は、
                </p>
                <BlockMath math="\forall v \in \ker(I - K^*) , \, \langle f, v \rangle = 0" />
                <p>
                    すなわち、右辺 <InlineMath math="f" /> が、随伴作用素の同次方程式の解の空間に直交していることである。
                </p>
            </ContentBox>

            <p>
                この直交条件は、作用素の像と核（双対関係）という極めて代数的な性質から自然に導かれます。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    ヒルベルト空間における直交補空間の性質と、作用素の像の閉性を用いる。<br />
                    一般に、像 <InlineMath math="\mathrm{Im}(I - K)" /> は閉部分空間になることが（コンパクト性を用いた議論で）知られている。<br />
                    一般の閉部分空間 <InlineMath math="M" /> に対し <InlineMath math="M = (M^\perp)^\perp" /> である（Proposition 6.4-2）。<br />
                    ここで <InlineMath math="M = \mathrm{Im}(I-K)" /> とおくと、
                </p>
                <BlockMath math="\begin{aligned}
                    \mathrm{Im}(I - K)^\perp &= \{y \mid \forall x \in H, \langle (I-K)x, y \rangle = 0\} \\
                    &= \{y \mid \forall x \in H, \langle x, (I-K^*)y \rangle = 0\} \\
                    &= \{y \mid (I-K^*)y = 0\} \\
                    &= \ker(I - K^*)
                \end{aligned}" />
                <p>
                    したがって、<InlineMath math="\mathrm{Im}(I - K) = \ker(I - K^*)^\perp" /> となる。これは「方程式が解を持つ（<InlineMath math="f \in \mathrm{Im}(I - K)" />）」ことと「<InlineMath math="f \perp \ker(I - K^*)" />」が同値であることを示している。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この定理の「直交性による解の存在条件」もまた、線形代数学における基本的な公式の拡張と見ることができます。
            </p>

            <ContentBox type="example" title="Example 9.4-2">
                <p>
                    これが行列論での何を意味しているか考えましょう。<br />
                    有限次元連立方程式 <InlineMath math="Ax = b" /> が解を持つための条件は、クラメルの公式の帰結でもあるように、「<InlineMath math="A" /> の左固有空間 <InlineMath math="A^T y = 0" /> （つまり <InlineMath math="y^T A = 0" />）に属するすべての <InlineMath math="y" /> について、<InlineMath math="y^T b = 0" /> となること」です。<br />
                    まさに <InlineMath math="\langle b, y \rangle = 0" /> という直交条件であり、Theorem 9.4-2 は無限次元におけるこの代数的条件の完全な再現です。
                </p>
            </ContentBox>

            <p>
                この可解性理論は、抽象的な関数空間の世界をこえて、物理や工学の方程式に直結する重要な基盤を与えます。
            </p>

            <ContentBox type="remark" title="偏微分方程式への応用に向けて">
                <p>
                    この「解が一意に存在するか、さもなくば解をもつための条件（直交条件）がつく」という構造（Fredholm alternative とよばれます）は、偏微分方程式論（5-2）において決定的な役割を果たします。特にラプラス方程式をはじめとする楕円型方程式の境界値問題は、ある種のコンパクト作用素を用いたフレドホルム方程式に帰着され、本節の理論によって解の存在と一意性が保証されるのです。
                </p>
            </ContentBox>

            <p>
                無限次元空間方程式論の金字塔とも言える、リース・フレドホルム系列の定理について整理します。
            </p>

            <ContentBox type="note" title="§9.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>方程式 <InlineMath math="u - Ku = f" /> （<InlineMath math="K" /> はコンパクト）において、「単射ならば全射」「全射ならば単射」という有限次元行列特有の性質が復活する（交代定理）。</li>
                    <li>同次方程式が自明でない解を持つ場合でも、右辺 <InlineMath math="f" /> が随伴側の同次解と直交している場合に限り、解が存在する（可解条件）。</li>
                    <li>コンパクト作用素を引く形の作用素 <InlineMath math="I - K" /> （フレドホルム作用素の典型例）は、無限次元でありながら本質的に「有限次元の連立方程式」と同じ可解性理論を持つ。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
