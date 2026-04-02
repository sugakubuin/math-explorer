import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SplittingFields() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                方程式の解の性質を調べるためには、その方程式の「すべての根」を含むような体を考える必要があります。ある多項式のすべての根を添加して作られる最小の拡大体である「分解体」について、その存在と一意性を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分解体の定義と存在</h2>

            <p>
                多項式が一次式の積に完全に分解できるような体を定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.1-1 (分解体)">
                <p>
                    体 <InlineMath math="F" /> 上の多項式 <InlineMath math="f \in F[x]" /> に対して、<InlineMath math="F" /> の拡大体 <InlineMath math="K" /> が <InlineMath math="f" /> の<strong>分解体（splitting field）</strong>であるとは、以下の2条件を満たすことである。
                </p>
                <ol className="list-decimal list-inside mt-2">
                    <li><InlineMath math="f(x)" /> が <InlineMath math="K[x]" /> において一次式の積に完全分解する。すなわち、<InlineMath math="K" /> にある根 <InlineMath math="\alpha_1, \dots, \alpha_n" /> と定数 <InlineMath math="c \in F" /> を用いて <InlineMath math="f(x) = c(x-\alpha_1)\cdots(x-\alpha_n)" /> と書ける。</li>
                    <li><InlineMath math="K = F(\alpha_1, \ldots, \alpha_n)" /> である。すなわち、<InlineMath math="K" /> はすべての根を <InlineMath math="F" /> に添加して得られる<strong>最小の</strong>拡大体である。</li>
                </ol>
            </ContentBox>

            <p>
                「方程式の根が存在するかわからない」という状態から出発しても、代数的な構成によって必ず分解体を作り出せるというのが次の定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-1 (分解体の存在)">
                <p>
                    任意の体 <InlineMath math="F" /> と、次数が <InlineMath math="1" /> 以上の任意の多項式 <InlineMath math="f \in F[x]" /> に対して、<InlineMath math="f" /> の分解体は必ず存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    多項式 <InlineMath math="f" /> の次数 <InlineMath math="n" /> に関する帰納法で証明する。
                </p>
                <p>
                    <InlineMath math="n = 1" /> のとき、<InlineMath math="f" /> はすでに <InlineMath math="F" /> の中で一次式であるから、<InlineMath math="K = F" /> が分解体となる。
                </p>
                <p>
                    <InlineMath math="n > 1" /> とし、次数が <InlineMath math="n" /> 未満のすべての多項式に対して定理が成立すると仮定する。<InlineMath math="f(x)" /> が <InlineMath math="F[x]" /> で一次式の積に分解できれば <InlineMath math="F" /> が分解体である。そうでない場合、<InlineMath math="f(x)" /> は次数 <InlineMath math="2" /> 以上の既約因子 <InlineMath math="g(x)" /> を持つ。
                </p>
                <p>
                    環論で学んだように、イデアル <InlineMath math="(g(x))" /> は極大イデアルであるため、剰余環 <InlineMath math="E = F[x]/(g(x))" /> は体となる。<InlineMath math="E" /> は <InlineMath math="F" /> の拡大体であり、<InlineMath math="E" /> において <InlineMath math="\alpha = x \pmod{g(x)}" /> は <InlineMath math="g(\alpha) = 0" /> を満たす。したがって <InlineMath math="\alpha" /> は <InlineMath math="f(\alpha) = 0" /> の根の一つである。
                </p>
                <p>
                    <InlineMath math="E[x]" /> において、<InlineMath math="f(x)" /> は <InlineMath math="(x-\alpha)" /> で割り切れるので、<InlineMath math="f(x) = (x-\alpha)h(x)" /> （ただし <InlineMath math="h(x) \in E[x]" />）と書ける。<InlineMath math="h(x)" /> の次数は <InlineMath math="n-1" /> であるため、帰納法の仮定により、<InlineMath math="E" /> 上での <InlineMath math="h(x)" /> の分解体 <InlineMath math="K" /> が存在する。
                </p>
                <p>
                    この <InlineMath math="K" /> において <InlineMath math="h(x)" /> は一次式に完全分解し、さらに <InlineMath math="(x-\alpha)" /> を掛けることで <InlineMath math="f(x)" /> も完全分解する。<InlineMath math="K" /> は <InlineMath math="h" /> の根と <InlineMath math="\alpha" /> で生成されるため、<InlineMath math="f" /> の分解体である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.1-1 (x^3 - 2 の分解体)">
                <p>
                    <InlineMath math="f(x) = x^3 - 2 \in \mathbb{Q}[x]" /> の分解体を構成する。
                </p>
                <p>
                    複素数体 <InlineMath math="\mathbb{C}" /> の中で根を考えると、<InlineMath math="\sqrt[3]{2}" />、<InlineMath math="\omega\sqrt[3]{2}" />、<InlineMath math="\omega^2\sqrt[3]{2}" />（ただし <InlineMath math="\omega = e^{2\pi i/3} = \frac{-1+\sqrt{3}i}{2}" />）の 3 つである。
                </p>
                <p>
                    これらをすべて <InlineMath math="\mathbb{Q}" /> に添加した体が分解体 <InlineMath math="K" /> である。<InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2})" />。
                </p>
                <p>
                    根の比をとることで <InlineMath math="\omega \in K" /> がわかるため、<InlineMath math="K = \mathbb{Q}(\sqrt[3]{2}, \omega)" /> とシンプルに書ける。拡大次数は連鎖律により、
                </p>
                <BlockMath math="[K : \mathbb{Q}] = [K : \mathbb{Q}(\sqrt[3]{2})][\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 2 \cdot 3 = 6" />
                <p>
                    となる。<InlineMath math="x^3-2" /> の次数 3 よりも大きな次元になることに注意する。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分解体の一意性</h2>

            <p>
                分解体の構成プロセスでは、「どの既約因子を選ぶか」「どの根から添加するか」という選択の自由度がありますが、最終的に出来上がる体は「同型の意味でただ一つ」に定まります。
            </p>

            <ContentBox type="theorem" title="Theorem 3.1-2 (分解体の一意性)">
                <p>
                    体 <InlineMath math="F" /> 上の多項式 <InlineMath math="f \in F[x]" /> の分解体は、<InlineMath math="F" /> を固定する体同型（<InlineMath math="F" />-同型）の意味で一意である。
                </p>
                <p>
                    より一般に、体同型 <InlineMath math="\phi : F \xrightarrow{\sim} F'" /> があるとき、<InlineMath math="f \in F[x]" /> の分解体 <InlineMath math="K" /> と、対応する多項式 <InlineMath math="\phi(f) \in F'[x]" /> の分解体 <InlineMath math="K'" /> の間には、<InlineMath math="\phi" /> の拡張となるような同型 <InlineMath math="\tilde{\phi} : K \xrightarrow{\sim} K'" /> が存在する。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）<InlineMath math="K" /> の <InlineMath math="F" /> 上の拡大次数 <InlineMath math="n = [K:F]" /> に関する帰納法を用いる。<InlineMath math="n=1" /> のときは自明。
                </p>
                <p>
                    <InlineMath math="f" /> が <InlineMath math="F" /> 上で既約でない場合、既約因子 <InlineMath math="p(x)" /> をとる。<InlineMath math="p(x)" /> の <InlineMath math="K" /> における根を <InlineMath math="\alpha" /> とし、対応する <InlineMath math="\phi(p)(x)" /> の <InlineMath math="K'" /> における根を <InlineMath math="\alpha'" /> とすると、単拡大の同型定理（1.3節の Remark）により <InlineMath math="F(\alpha) \cong F[x]/(p) \cong F'[x]/(\phi(p)) \cong F'(\alpha')" /> となり、<InlineMath math="\phi" /> を <InlineMath math="F(\alpha) \xrightarrow{\sim} F'(\alpha')" /> へ拡張できる。
                </p>
                <p>
                    この拡張を基礎体の同型とみなし、残りの拡大次数が <InlineMath math="n" /> より小さくなるため、帰納法の仮定により <InlineMath math="K" /> と <InlineMath math="K'" /> の同型まで拡張できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                一意性の意味を、具体的な例で確認しておきましょう。
            </p>

            <ContentBox type="example" title="Example 3.1-2 (x^2 - 2 の分解体の一意性)">
                <p>
                    <InlineMath math="f(x) = x^2 - 2 \in \mathbb{Q}[x]" /> を考える。
                </p>
                <p>
                    正の実数である <InlineMath math="\sqrt{2}" /> を添加した体 <InlineMath math="K_1 = \mathbb{Q}(\sqrt{2})" /> は分解体である。一方、負の実数 <InlineMath math="-\sqrt{2}" /> を添加して作られる体 <InlineMath math="K_2 = \mathbb{Q}(-\sqrt{2})" /> もまた分解体である。
                </p>
                <p>
                    集合としては <InlineMath math="K_1 = K_2 \subset \mathbb{R}" /> で完全に一致するが、代数的には <InlineMath math="\sqrt{2} \mapsto -\sqrt{2}" /> という対応が <InlineMath math="K_1" /> から <InlineMath math="K_2" /> への <InlineMath math="\mathbb{Q}" />-自己同型を与えている。この自己同型こそが、のちに学ぶ「ガロア群」の要素そのものである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多項式 <InlineMath math="f" /> が一次式の積に完全分解し、かつすべての根で生成される最小の拡大体を<strong>分解体</strong>という。</li>
                    <li>どのような多項式に対しても、その分解体は必ず存在する（極大イデアルによる剰余環の構成を繰り返す）。</li>
                    <li>ある多項式の分解体は、同型を除いてただ一つに定まる（一意性）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
