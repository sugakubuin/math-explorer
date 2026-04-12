import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConjugateFunctionDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本節では、凸解析において中心的な役割を果たす<b>共役関数</b>（フェンシェル共役）の概念を導入します。共役関数は、関数をその接線の傾きと切片の集合として双対的に表現する手段であり、フェンシェル双対性や最適化理論の根幹をなす非常に強力な道具です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">共役関数の定義</h2>

            <p>
                まずは、共役関数（ルジャンドル-フェンシェル変換）の厳密な定義から始めます。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (共役関数（フェンシェル共役）)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> に対して、その<b>共役関数（フェンシェル共役）</b> <InlineMath math="f^*: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}" /> を次のように定義する。
                </p>
                <BlockMath math="f^*(y) = \sup_{x \in \mathbb{R}^n} \{\langle y, x \rangle - f(x)\}" />
            </ContentBox>

            <p>
                この定義において驚くべき性質の一つは、元の関数 <InlineMath math="f" /> が凸関数でなくても、共役関数 <InlineMath math="f^*" /> は必ず凸関数になるという点です。これは双対性の理論を構築する上で極めて好都合な性質です。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1">
                <p>
                    任意の関数 <InlineMath math="f" /> に対して、その共役関数 <InlineMath math="f^*" /> は常に閉凸関数である（<InlineMath math="f" /> の凸性を問わない）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    共役関数 <InlineMath math="f^*(y)" /> は、各 <InlineMath math="x \in \mathbb{R}^n" /> について定義された <InlineMath math="y" /> に関するアフィン関数群 <InlineMath math="g_x(y) = \langle y, x \rangle - f(x)" /> の上限（supremum）として表される。
                </p>
                <BlockMath math="f^*(y) = \sup_x g_x(y)" />
                <p>
                    アフィン関数は凸かつ連続（したがって下半連続）である。一般に、凸関数の族の上限をとって得られる関数は凸関数であり、下半連続関数の族の上限をとって得られる関数も下半連続関数となる。したがって、<InlineMath math="f^*" /> は凸かつ下半連続、すなわち閉凸関数である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                共役関数の定義は少し抽象的に見えるかもしれませんが、幾何学的な意味を考えると直感的に理解しやすくなります。
            </p>

            <ContentBox type="example" title="Example 4.1-1 (共役関数の幾何的意味)">
                <p>
                    <InlineMath math="y \in \mathbb{R}^n" /> を一つ固定し、アフィン関数 <InlineMath math="h(x) = \langle y, x \rangle - \alpha" /> を考える。この関数が <InlineMath math="f" /> のグラフの下側を通る（すなわち、すべての <InlineMath math="x" /> に対して <InlineMath math="h(x) \leq f(x)" /> を満たす）ための条件を求める。
                </p>
                <BlockMath math="\langle y, x \rangle - \alpha \leq f(x) \iff \alpha \geq \langle y, x \rangle - f(x)" />
                <p>
                    これがすべての <InlineMath math="x" /> で成り立つためには、
                </p>
                <BlockMath math="\alpha \geq \sup_x \{\langle y, x \rangle - f(x)\} = f^*(y)" />
                <p>
                    でなければならない。したがって、<InlineMath math="f^*(y)" /> とは、「傾き」が <InlineMath math="y" /> であり、かつ <InlineMath math="f" /> のグラフの下側を通るようなアフィン関数のうち、切片（この場合は <InlineMath math="-\alpha" /> に相当）を最大化するようなもの（最も高い切片）を定めていると解釈できる。
                </p>
            </ContentBox>

            <p>
                このように、共役関数は元の関数を接線（あるいはそれを一般化した支持超平面）の集まりとして表現し直す操作に対応しています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ヤング-フェンシェルの不等式</h2>

            <p>
                次に、共役関数の定義から直ちに導かれる、非常に重要で強力な不等式を紹介します。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-2 (ヤング-フェンシェルの不等式)">
                <p>
                    すべての <InlineMath math="x, y \in \mathbb{R}^n" /> に対して、以下の不等式が成り立つ。
                </p>
                <BlockMath math="f(x) + f^*(y) \geq \langle x, y \rangle"
                />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    共役関数の定義により、
                </p>
                <BlockMath math="f^*(y) = \sup_{z} \{\langle y, z \rangle - f(z)\} \geq \langle y, x \rangle - f(x)" />
                <p>
                    がすべての <InlineMath math="x" /> について成り立つ。この不等式を移項するだけで直ちに得られる。
                </p>
                <BlockMath math="f(x) + f^*(y) \geq \langle x, y \rangle" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                ヤング-フェンシェルの不等式において、等号が成り立つのはどのような場合でしょうか。これは劣微分（Chapter 3）の概念と深く結びついています。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-3 (ヤング-フェンシェルの等号条件)">
                <p>
                    <InlineMath math="f" /> が閉真凸関数のとき、以下の二つは同値である。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="f(x) + f^*(y) = \langle x, y \rangle" /></li>
                    <li><InlineMath math="y \in \partial f(x)" /></li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y \in \partial f(x)" /> の定義は、任意の <InlineMath math="z" /> に対して <InlineMath math="f(z) \geq f(x) + \langle y, z - x \rangle" /> が成り立つことである。これを変形すると、
                </p>
                <BlockMath math="\langle y, x \rangle - f(x) \geq \langle y, z \rangle - f(z)" />
                <p>
                    となる。これが任意の <InlineMath math="z" /> に対して成り立つことは、右辺の上限（<InlineMath math="f^*(y)" />）が左辺に等しいことと同値である。すなわち、
                </p>
                <BlockMath math="\langle y, x \rangle - f(x) = \sup_z \{\langle y, z \rangle - f(z)\} = f^*(y)" />
                <p>
                    これは <InlineMath math="f(x) + f^*(y) = \langle x, y \rangle" /> に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この等号条件は、凸関数の劣微分を計算する上でも、最適化問題を解析する上でも非常に強力なツールとなります。具体的な関数でこの性質を確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 4.1-2">
                <p>
                    関数 <InlineMath math="f(x) = \frac{1}{2}x^2" /> の共役関数は、次節の計算例で詳しく見るように <InlineMath math="f^*(y) = \frac{1}{2}y^2" /> となる。ここで、<InlineMath math="x = 3, y = 3" /> としてみる。
                </p>
                <BlockMath math="f(3) + f^*(3) = \frac{9}{2} + \frac{9}{2} = 9" />
                <p>
                    一方で、
                </p>
                <BlockMath math="\langle x, y \rangle = 3 \times 3 = 9" />
                <p>
                    となり、等号 <InlineMath math="f(3) + f^*(3) = \langle 3, 3 \rangle" /> が成立している。このとき、<InlineMath math="f(x)" /> は微分可能であり <InlineMath math="\nabla f(x) = x" /> だから、<InlineMath math="\nabla f(3) = 3" />。確かに <InlineMath math="y = 3 = \nabla f(3) \in \partial f(3)" /> となっており、等号条件と劣微分（勾配）の条件が一致していることが確認できる。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ルジャンドル変換との関係">
                <p>
                    物理学（特に解析力学や熱力学）でよく用いられる「ルジャンドル変換」は、滑らかな狭義凸関数に対して定義されるもので、共役関数の特別な場合と見なすことができます。凸解析におけるフェンシェル共役は、関数が微分不可能であったり、値として <InlineMath math="+\infty" /> を取る場合にも適用できるようにルジャンドル変換を拡張・一般化したものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>共役関数（フェンシェル共役）は <InlineMath math="f^*(y) = \sup_x \{\langle y, x \rangle - f(x)\}" /> で定義される。</li>
                    <li><InlineMath math="f^*" /> は、元の関数 <InlineMath math="f" /> の性質に関わらず常に閉凸関数となる。</li>
                    <li>任意の <InlineMath math="x, y" /> についてヤング-フェンシェルの不等式 <InlineMath math="f(x) + f^*(y) \geq \langle x, y \rangle" /> が成り立つ。</li>
                    <li><InlineMath math="f" /> が閉真凸関数のとき、不等式の等号成立条件は <InlineMath math="y \in \partial f(x)" /> と同値である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
