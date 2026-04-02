import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HolomorphicFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素解析における最も重要な概念である「複素微分」を導入します。
                複素変数の微分の定義自体は実変数とそっくりですが、その背後にある条件は実変数の場合よりも遥かに厳格です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素微分可能性</h2>

            <p>
                複素関数の微分は、実数と同様に微分の極限として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 2.3-1 (複素微分可能性)">
                <p>
                    複素関数 <InlineMath math="f(z)" /> が点 <InlineMath math="z_0" /> で<strong>複素微分可能 (complex differentiable)</strong> であるとは、次の極限が存在することをいう：
                    <BlockMath math="f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}" />
                    この極限値 <InlineMath math="f'(z_0)" /> を <InlineMath math="f" /> の <InlineMath math="z_0" /> における<strong>微分係数</strong>と呼ぶ。
                </p>
            </ContentBox>

            <p className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
                <strong>[重要]</strong> ここで <InlineMath math="\Delta z \to 0" /> は、複素平面上の<strong>あらゆる方向から</strong> <InlineMath math="0" /> に近づくことを意味します。実数の場合（右極限と左極限の2方向のみ）とは異なり、この「全方向からの極限の一致」という条件が非常に強力な帰結をもたらします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則関数と整関数</h2>

            <ContentBox type="definition" title="Definition 2.3-2 (正則関数：Holomorphic)">
                <p>
                    開集合 <InlineMath math="U \subset \mathbb{C}" /> のすべての点で <InlineMath math="f(z)" /> が複素微分可能であるとき、<InlineMath math="f" /> は <InlineMath math="U" /> で<strong>正則 (holomorphic / analytic)</strong> であるという。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 2.3-3 (整関数：Entire)">
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> の全域で正則な関数を<strong>整関数 (entire function)</strong> と呼ぶ。
                    多項式や（後に定義する）指数関数 <InlineMath math="e^z" /> などは整関数の例である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">微分できない関数の例</h2>

            <ContentBox type="example" title="Example 2.3-1 (共役複素数は微分不可能である)">
                <p>
                    関数 <InlineMath math="f(z) = \overline{z}" /> がどの点でも複素微分可能でないことを示せ。
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg my-2">
                    <p>
                        <InlineMath math="z_0" /> における差分商を考えると、
                        <BlockMath math="\frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z} = \frac{\overline{z_0 + \Delta z} - \overline{z_0}}{\Delta z} = \frac{\overline{\Delta z}}{\Delta z}" />
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>実軸方向、すなわち <InlineMath math="\Delta z = \Delta x \in \mathbb{R}" /> のとき：<InlineMath math="\frac{\Delta x}{\Delta x} = 1" /></li>
                        <li>虚軸方向、すなわち <InlineMath math="\Delta z = i\Delta y \in i\mathbb{R}" /> のとき：<InlineMath math="\frac{-i\Delta y}{i\Delta y} = -1" /></li>
                    </ul>
                    <p className="mt-2">
                        近づく方向によって極限が異なるため、この極限は存在しない。したがって <InlineMath math="f(z) = \overline{z}" /> は複素微分可能ではない。
                    </p>
                </div>
            </ContentBox>

            <p>
                この例からわかるように、実関数として（<InlineMath math="\mathbb{R}^2" /> から <InlineMath math="\mathbb{R}^2" /> への写像として）「滑らか」であっても、複素関数として微分可能であるとは限りません。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正則関数の驚くべき性質</h2>

            <p>
                複素解析における最も驚くべき結論の一つは、<strong>「1回でも複素微分可能（正則）であれば、自動的に何度でも微分可能になる」</strong>という事実です。これは、実解析（<InlineMath math="C^1" /> 級だが <InlineMath math="C^2" /> 級でない関数が存在する世界）とは決定的に異なる性質です。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (無限回微分可能性)">
                <p>
                    関数 <InlineMath math="f(z)" /> が領域 <InlineMath math="D" /> 上で正則ならば、<InlineMath math="f(z)" /> は <InlineMath math="D" /> 上で何回でも複素微分可能である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    この事実は、第5章で詳しく学ぶ<strong>コーシーの積分公式</strong>から導かれる。
                    正則関数 <InlineMath math="f(z)" /> は、境界上の積分を用いて内部の値を次のように表すことができる：
                    <BlockMath math="f(z) = \frac{1}{2\pi i} \int_{\gamma} \frac{f(\zeta)}{\zeta - z} d\zeta" />
                    この式の右辺は、変数 <InlineMath math="z" /> に関して積分記号下で何度でも微分が可能である。具体的には、<InlineMath math="n" /> 階導関数について次の<strong>グルサの公式</strong>が成り立つ：
                    <BlockMath math="f^{(n)}(z) = \frac{n!}{2\pi i} \int_{\gamma} \frac{f(\zeta)}{(\zeta - z)^{n+1}} d\zeta" />
                    したがって、一度でも正則性が保証されれば、その関数は無限回微分可能であることが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>複素微分</strong>：全方向からの極限一致を要求する非常に強い条件。</li>
                    <li><strong>正則性</strong>：領域全域で微分可能であること。複素解析の主要な研究対象。</li>
                    <li><strong>方向依存性</strong>：実部・虚部として自然に見える関数でも、複素微分可能でないものが存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
