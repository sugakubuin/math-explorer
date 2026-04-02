import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstIsomorphismTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                群論において、準同型写像の核（Kernel）と像（Image）を結びつける「準同型定理（第一同型定理）」を学びました。環論においても、イデアルと剰余環を用いることで全く同じ構造の定理が成り立ちます。この定理は、複雑な環の構造を理解するための最も強力なツールの 1 つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">環準同型と核（Kernel）</h2>

            <p>
                まず、環と環の間の構造を保つ写像である「環準同型」を定義し、その核（Kernel）がどのような性質を持つかを確認します。
            </p>

            <ContentBox type="definition" title="Definition 2.4-1 (環準同型写像)">
                <p>
                    2 つの環 <InlineMath math="R, S" /> の間の写像 <InlineMath math="\phi: R \to S" /> が<b>環準同型（ring homomorphism）</b>であるとは、任意の <InlineMath math="a, b \in R" /> に対して以下の条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="\phi(a + b) = \phi(a) + \phi(b)" /> （加法を保つ）</li>
                    <li><InlineMath math="\phi(ab) = \phi(a)\phi(b)" /> （乗法を保つ）</li>
                    <li><InlineMath math="\phi(1_R) = 1_S" /> （単位元を保つ）※単位元付き環を前提とする場合</li>
                </ol>
            </ContentBox>

            <ContentBox type="definition" title="Definition 2.4-2 (環準同型の核と像)">
                <p>
                    環準同型 <InlineMath math="\phi: R \to S" /> に対して、その<b>核（kernel）</b>と<b>像（image）</b>を次のように定義する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>核：</b> <InlineMath math="\ker \phi = \{ x \in R \mid \phi(x) = 0_S \}" /></li>
                    <li><b>像：</b> <InlineMath math="\mathrm{Im}(\phi) = \phi(R) = \{ \phi(x) \mid x \in R \}" /></li>
                </ul>
            </ContentBox>

            <p>
                ここでの極めて重要な事実は、<b>「環準同型の核は必ずイデアルになる」</b>ということです。（群論において「群準同型の核は必ず正規部分群になる」のと同じ関係です）。
            </p>

            <ContentBox type="proposition" title="Proposition 2.4-1 (核はイデアルである)">
                <p>
                    環準同型 <InlineMath math="\phi: R \to S" /> に対して、<InlineMath math="\ker \phi" /> は <InlineMath math="R" /> のイデアルである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><b>加法部分群であること：</b><br /> <InlineMath math="x, y \in \ker \phi" /> とすると、<InlineMath math="\phi(x-y) = \phi(x) - \phi(y) = 0 - 0 = 0" />。よって <InlineMath math="x-y \in \ker \phi" />。</li>
                    <li><b>吸収律を満たすこと：</b><br /> 任意の <InlineMath math="r \in R" /> と <InlineMath math="x \in \ker \phi" /> に対して、<InlineMath math="\phi(rx) = \phi(r)\phi(x) = \phi(r) \cdot 0 = 0" />。よって <InlineMath math="rx \in \ker \phi" />。</li>
                </ul>
                <p>
                    以上より、<InlineMath math="\ker \phi" /> は <InlineMath math="R" /> のイデアルである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">環の第一同型定理</h2>

            <p>
                核がイデアルであることが分かれば、核による剰余環 <InlineMath math="R/\ker \phi" /> を考えることができます。第一同型定理は、この剰余環が像 <InlineMath math="\mathrm{Im}(\phi)" /> と「環として全く同じ構造（同型）」であることを主張します。
            </p>

            <ContentBox type="theorem" title="Theorem 2.4-1 (環の第一同型定理)">
                <p>
                    環準同型 <InlineMath math="\phi: R \to S" /> に対して、以下が成り立つ。
                </p>
                <BlockMath math="R/\ker \phi \cong \mathrm{Im}(\phi)" />
                <p>
                    より具体的には、写像 <InlineMath math="\overline{\phi} : R/\ker \phi \to \mathrm{Im}(\phi)" /> を
                </p>
                <BlockMath math="\overline{\phi}(a + \ker \phi) = \phi(a)" />
                <p>
                    と定義すると、<InlineMath math="\overline{\phi}" /> は環の同型写像（全単射な環準同型）となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="I = \ker \phi" /> とおく。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 mb-4">
                    <li>
                        <b>well-defined かつ単射であること：</b><br />
                        <InlineMath math="a + I = b + I \iff a - b \in I \iff \phi(a - b) = 0 \iff \phi(a) = \phi(b)" />。<br />
                        左から右への含意が well-definedness を、右から左への含意が単射性を示している。
                    </li>
                    <li>
                        <b>全射であること：</b><br />
                        <InlineMath math="\mathrm{Im}(\phi)" /> の任意の元 <InlineMath math="y" /> は、ある <InlineMath math="x \in R" /> によって <InlineMath math="y = \phi(x)" /> と書ける。このとき <InlineMath math="\overline{\phi}(x + I) = \phi(x) = y" /> となるため全射。
                    </li>
                    <li>
                        <b>環準同型であること：</b>
                        <ul className="list-[circle] list-inside ml-6 mt-1">
                            <li><InlineMath math="\overline{\phi}((a+I) + (b+I)) = \overline{\phi}((a+b)+I) = \phi(a+b) = \phi(a) + \phi(b) = \overline{\phi}(a+I) + \overline{\phi}(b+I)" /></li>
                            <li><InlineMath math="\overline{\phi}((a+I)(b+I)) = \overline{\phi}(ab+I) = \phi(ab) = \phi(a)\phi(b) = \overline{\phi}(a+I)\overline{\phi}(b+I)" /></li>
                        </ul>
                    </li>
                </ul>
                <p>
                    したがって、<InlineMath math="\overline{\phi}" /> は環の同型写像である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 2.4-1 (代入準同型による剰余環の決定)">
                <p>
                    実数係数多項式環 <InlineMath math="\mathbb{R}[x]" /> を考えます。「多項式に複素数 <InlineMath math="i" /> を代入する」という写像
                </p>
                <BlockMath math="\phi: \mathbb{R}[x] \to \mathbb{C}, \quad f(x) \mapsto f(i)" />
                <p>
                    を考えます。これは環準同型になります（代入準同型：§4.2で詳述します）。
                </p>
                <p>
                    <b>像（Image）：</b><br />
                    任意の複素数 <InlineMath math="a + bi \in \mathbb{C}" />（<InlineMath math="a, b \in \mathbb{R}" />）に対して、1次多項式 <InlineMath math="f(x) = a + bx \in \mathbb{R}[x]" /> を考えれば <InlineMath math="\phi(f) = a + bi" /> となるので、全射です。つまり <InlineMath math="\mathrm{Im}(\phi) = \mathbb{C}" /> です。
                </p>
                <p>
                    <b>核（Kernel）：</b><br />
                    <InlineMath math="\phi(f) = f(i) = 0" /> となる実数係数多項式とは、<InlineMath math="x = i" /> を根に持つ多項式です。実数係数であるため共役な <InlineMath math="-i" /> も根に持ち、結果として <InlineMath math="(x-i)(x+i) = x^2+1" /> で割り切れる多項式全体になります。よって <InlineMath math="\ker \phi = (x^2+1)" /> です。
                </p>
                <p>
                    第一同型定理 <InlineMath math="R/\ker \phi \cong \mathrm{Im}(\phi)" /> を適用すると、以下の美しく重要な同型が得られます。
                </p>
                <BlockMath math="\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}" />
                <p>
                    これは「実数に <InlineMath math="x^2+1=0" /> となる仮想的な要素 <InlineMath math="x" /> を添加した環（剰余環）は、複素数体と同型である」という、複素数の代数的な構成法そのものを示しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>環準同型 <InlineMath math="\phi: R \to S" /> において、<InlineMath math="0" /> に潰れる要素の集合である<b>核（<InlineMath math="\ker \phi" />）</b>は、必ず <InlineMath math="R" /> の<b>イデアル</b>になる。</li>
                    <li><b>環の第一同型定理（<InlineMath math="R/\ker \phi \cong \mathrm{Im}(\phi)" />）</b>は、剰余環の構造を決定するための最強の道具である。</li>
                    <li>「調べたい剰余環があるなら、それを核に持つような都合の良い全射準同型を見つければよい」というのが、代数学における標準的なアプローチである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}