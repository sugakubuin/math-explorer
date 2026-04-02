import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ContinuityInMetricSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                位相空間における連続性の定義は「開集合の逆像が開集合であること」でしたが、距離空間ではこれを馴染み深い <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法で表現できます。
                また、距離空間は「第一可算」という良い性質を持つため、位相的な概念を「点列の収束」という言葉で完全に置き換えることが可能です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ε-δ による連続性</h2>

            <p>
                微積分学の基礎となる <InlineMath math="\varepsilon" />-<InlineMath math="\delta" /> 論法が、位相的な連続性の定義と完全に一致することを確認しましょう。
            </p>

            <ContentBox type="theorem" title="Theorem 9.2-1 (連続性の定義の同値性)">
                <p>
                    2 つの距離空間 <InlineMath math="(X, d_X), (Y, d_Y)" /> の間の写像 <InlineMath math="f: X \to Y" /> に対し、次は同値である：
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4">
                    <li><InlineMath math="f" /> は位相的な意味で連続である（任意の開集合 <InlineMath math="V \subset Y" /> の逆像が開集合）。</li>
                    <li>任意の <InlineMath math="x \in X" /> と任意の <InlineMath math="\varepsilon > 0" /> に対し、ある <InlineMath math="\delta > 0" /> が存在して、
                        <BlockMath math="d_X(x, x') < \delta \implies d_Y(f(x), f(x')) < \varepsilon" />
                        が成り立つ。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\implies" /> (2) を示す。点 <InlineMath math="x \in X" /> と <InlineMath math="\varepsilon > 0" /> をとる。 <InlineMath math="V = B(f(x); \varepsilon)" /> は <InlineMath math="Y" /> の開集合である。
                    (1) より <InlineMath math="f^{-1}(V)" /> は <InlineMath math="X" /> の開集合であり <InlineMath math="x" /> を含む。
                    開集合の定義より、ある <InlineMath math="\delta > 0" /> が存在して <InlineMath math="B(x; \delta) \subset f^{-1}(V)" /> となる。
                    これはまさに (2) の条件である。
                </p>
                <p className="mt-4">
                    (2) <InlineMath math="\implies" /> (1) を示す。 <InlineMath math="V \subset Y" /> を任意の開集合とし、 <InlineMath math="x \in f^{-1}(V)" /> をとる。
                    <InlineMath math="f(x) \in V" /> であり <InlineMath math="V" /> は開集合なので、ある <InlineMath math="\varepsilon > 0" /> に対し <InlineMath math="B(f(x); \varepsilon) \subset V" /> となる。
                    仮定 (2) より対応する <InlineMath math="\delta > 0" /> が存在し、 <InlineMath math="f(B(x; \delta)) \subset B(f(x); \varepsilon) \subset V" /> 、
                    すなわち <InlineMath math="B(x; \delta) \subset f^{-1}(V)" /> となる。
                    よって <InlineMath math="f^{-1}(V)" /> はその各点の周りに開球を含むため、開集合である。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <p className="mt-4">
                これにより、位相空間論における一般的・抽象的な結果を、距離空間という具体的な舞台で自由に使い分けることが可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">点列収束による特徴づけ</h2>

            <p>
                距離空間では、各点の周りに「可算な」近傍基（例えば半径 <InlineMath math="1/n" /> の開球の族）を持つため、極限操作が非常に扱いやすくなります。
            </p>

            <ContentBox type="proposition" title="Proposition 9.2-1 (点列による位相的性質の判定)">
                <p>
                    距離空間 <InlineMath math="X, Y" /> において、次の性質が成り立つ：
                </p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4">
                    <li><strong>閉包</strong>： <InlineMath math="x \in \overline{A} \iff A" /> 内の点列 <InlineMath math="\{a_n\}" /> で <InlineMath math="x" /> に収束するものが存在する。</li>
                    <li><strong>連続性</strong>： <InlineMath math="f: X \to Y" /> が点 <InlineMath math="a" /> で連続 <InlineMath math="\iff" /> 任意の収束点列 <InlineMath math="x_n \to a" /> に対し <InlineMath math="f(x_n) \to f(a)" /> となる。</li>
                    <li><strong>コンパクト性</strong>： <InlineMath math="X" /> がコンパクト <InlineMath math="\iff X" /> 内の任意の点列が収束する部分列を持つ（点列コンパクト）。</li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(閉包)</strong>：
                    <InlineMath math="(\Leftarrow)" /> は位相空間論の一般論（収束点列の極限は閉包に属する）から従う。
                    <InlineMath math="(\Rightarrow)" /> について、 <InlineMath math="x \in \overline{A}" /> ならば、各 <InlineMath math="n \in \mathbb{N}" /> に対して開球 <InlineMath math="B(x; 1/n)" /> と <InlineMath math="A" /> の交わりは空でない。
                    その交わりから点 <InlineMath math="a_n" /> を選ぶことで、 <InlineMath math="d(a_n, x) < 1/n \to 0" /> となり、 <InlineMath math="x" /> に収束する点列が得られる。
                </p>
                <p className="mt-4">
                    <strong>(連続性)</strong>：
                    <InlineMath math="(\Rightarrow)" /> は連続写像が収束点列を保存することから明らか。
                    <InlineMath math="(\Leftarrow)" /> を対偶で示す。 <InlineMath math="f" /> が点 <InlineMath math="a" /> で連続でないとすると、ある <InlineMath math="\varepsilon > 0" /> が存在して、
                    任意の <InlineMath math="\delta > 0" /> に対し <InlineMath math="d(x, a) < \delta" /> かつ <InlineMath math="d(f(x), f(a)) \geq \varepsilon" /> となる点 <InlineMath math="x" /> がとれる。
                    <InlineMath math="\delta = 1/n" /> とおくことで点列 <InlineMath math="\{x_n\}" /> を作れば、 <InlineMath math="x_n \to a" /> だが <InlineMath math="f(x_n)" /> は <InlineMath math="f(a)" /> に収束せず、矛盾する。
                </p>
                <p className="mt-4">
                    <strong>(コンパクト性)</strong>：
                    距離空間においては「コンパクト」「可算コンパクト」「点列コンパクト」がすべて同値であることが知られている（距離化可能空間の基本的な定理）。
                    これにより、開被覆による定義と点列による定義が一致する。
                    <div className="text-right text-slate-500 dark:text-slate-400"><InlineMath math="\square" /></div>
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 9.2-1 (点列連続性の利用)">
                <p>
                    関数 <InlineMath math="f: \mathbb{R} \to \mathbb{R}" /> が点 <InlineMath math="0" /> で不連続であることを示すには、
                    <InlineMath math="x_n \to 0" /> だが <InlineMath math="f(x_n)" /> が <InlineMath math="f(0)" /> に収束しない点列を一つ見つけるだけで十分です。
                    これは「全ての開集合」をチェックするよりも格段に容易な場合が多いです。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="第一可算公理との関係">
                <p>
                    このように「点列」が位相的性質を完全に支配できる空間を、<strong>第一可算空間</strong>と呼びます。
                    距離空間は、各点において <InlineMath math="\{ B(x; 1/n) \mid n \in \mathbb{N} \}" /> という可算近傍基を持つため、常に第一可算となります。
                    一般の位相空間では、この「点列による判定」が必ずしも成功しない場合があることに注意が必要です。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>連続性</strong>：位相的な「開集合の逆像」と、距離による「ε-δ」は同値。</li>
                    <li><strong>点列の威力</strong>：距離空間では、連続性やコンパクト性の判定を点列の収束で行える。</li>
                    <li><strong>可算性</strong>：これらの性質は、距離空間が各点に可算な近傍基（開球）を持つことに由来する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
