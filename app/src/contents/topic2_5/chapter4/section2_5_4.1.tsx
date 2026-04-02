import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HomeomorphismDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                幾何学の世界において、2つの図形が「本質的に同じ」であるとはどういうことでしょうか。
                ユークリッド幾何学では、平行移動や回転で重なる「合同」がその基準でした。
                位相幾何学（トポロジー）では、これをさらに広げ、「連続的に変形して重ねられる」ものを同じとみなします。
                この「同じ」という概念を厳密に定義したものが、<strong>同相写像</strong>です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同相写像の定義</h2>

            <p>
                2つの位相空間が位相的に区別がつかないとき、それらは「同相である」と言います。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (同相写像・同相)">
                <p>
                    2つの位相空間 <InlineMath math="X, Y" /> の間の写像 <InlineMath math="f: X \to Y" /> が<strong>同相写像 (Homeomorphism)</strong> であるとは、以下の3条件を満たすことをいう：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><InlineMath math="f" /> は全単射である。</li>
                    <li><InlineMath math="f" /> は連続である。</li>
                    <li>逆写像 <InlineMath math="f^{-1}" /> も連続である。</li>
                </ol>
                <p className="mt-4">
                    また、<InlineMath math="X" /> から <InlineMath math="Y" /> への同相写像が存在するとき、<InlineMath math="X" /> と <InlineMath math="Y" /> は<strong>同相 (Homeomorphic)</strong> であるといい、<InlineMath math="X \cong Y" /> と表す。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (基本的な同相写像)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> において、以下の写像はすべて同相写像である。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li><strong>平行移動</strong>： <InlineMath math="f(x) = x + a" /> （<InlineMath math="a" /> は定数）。逆写像は <InlineMath math="f^{-1}(y) = y - a" /> であり、ともに連続である。</li>
                    <li><strong>定数倍（スケール変換）</strong>： <InlineMath math="f(x) = cx" /> （<InlineMath math="c \neq 0" />）。逆写像は <InlineMath math="f^{-1}(y) = y/c" /> であり、ともに連続である。</li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="なぜ逆写像の連続性が必要か？">
                <p>
                    「全単射かつ連続」だけでは、同相写像とは呼べません。
                    例えば、半分開いた区間 <InlineMath math="[0, 2\pi)" /> から単位円 <InlineMath math="S^1" /> への写像 <InlineMath math="f(t) = (\cos t, \sin t)" /> は全単射かつ連続ですが、
                    <InlineMath math="t=0" /> の付近で「ちぎれている」ため、逆写像は連続になりません。
                    同相写像は、「切ったり貼ったり」を許さない、真に可逆な連続変形を意味しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">同相写像の性質</h2>

            <p>
                「同相である」という関係は、集合における「対等（濃度が同じ）」と同様に、代数的な同値関係の性質を持っています。
            </p>

            <ContentBox type="proposition" title="Proposition 4.1-1 (同相関係は同値関係)">
                <p>
                    位相空間の間の「同相である」という関係 <InlineMath math="\cong" /> は、同値関係の3条件を満たす：
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4 ml-4">
                    <li><strong>反射律</strong>：<InlineMath math="X \cong X" /></li>
                    <li><strong>対称律</strong>：<InlineMath math="X \cong Y \implies Y \cong X" /></li>
                    <li><strong>推移律</strong>：<InlineMath math="X \cong Y, Y \cong Z \implies X \cong Z" /></li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        恒等写像 <InlineMath math="\mathrm{id}_X: X \to X" /> は全単射であり、それ自身が連続かつ逆写像（自身）も連続であるため、同相写像である。
                    </li>
                    <li>
                        <InlineMath math="f: X \to Y" /> が同相写像ならば、その定義から <InlineMath math="f^{-1}: Y \to X" /> も全単射であり、
                        <InlineMath math="(f^{-1})^{-1} = f" /> が連続であることから <InlineMath math="f^{-1}" /> も同相写像となる。
                    </li>
                    <li>
                        <InlineMath math="f: X \to Y" /> と <InlineMath math="g: Y \to Z" /> が同相写像ならば、合成写像 <InlineMath math="g \circ f" /> は全単射である。
                        連続写像の合成は連続であり（§3.3）、逆写像 <InlineMath math="(g \circ f)^{-1} = f^{-1} \circ g^{-1}" /> も連続な写像の合成として連続である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>同相写像</strong>は、連続かつ逆も連続な全単射であり、「トポロジーにおける等号」を与える。</li>
                    <li>全単射連続であっても逆が連続とは限らないことに注意が必要である。</li>
                    <li>「同相である」という関係は同値関係であり、位相空間を分類する基準となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
