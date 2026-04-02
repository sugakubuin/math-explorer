import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfFunctors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                関手の定義はシンプルですが、その実例は数学の至る所に存在します。ここでは、異なる数学の分野（例えばトポロジーと代数学）を結びつけるダイナミックな関手の例を見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">忘却関手と自由関手</h2>

            <p className="leading-relaxed">
                最も単純な関手は、対象が持っている「構造（ルール）」の一部、あるいは全部を「忘れる」関手です。
            </p>

            <ContentBox
                type="example"
                title="Example 2.2-1 (忘却関手 / Forgetful Functor)"
            >
                <p>
                    群の圏 <InlineMath math="\mathbf{Grp}" /> から集合の圏 <InlineMath math="\mathbf{Set}" /> への<strong>忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /></strong> は次のように定義される（Underlying set functor とも呼ばれる）。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象の対応：</strong> 群 <InlineMath math="(G, \cdot)" /> に対して、その演算構造 <InlineMath math="\cdot" /> を忘れ、単なる「要素の集まり」としての台集合 <InlineMath math="|G|" /> に送る。</li>
                    <li><strong>射の対応：</strong> 群準同型 <InlineMath math="f : G \to H" /> を、単なる集合の間の写像 <InlineMath math="f : |G| \to |H|" /> とみなして送る。</li>
                </ul>
                <p>
                    合成や恒等射は写像としての本質が変わらないため、関手性は自明に満たす。
                    同様に、位相を忘れる <InlineMath math="\mathbf{Top} \to \mathbf{Set}" /> や、環の乗法を忘れて加法群とみなす <InlineMath math="\mathbf{Ring} \to \mathbf{Ab}" /> など、多様な忘却関手が存在する。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                「忘れる」ことの真逆、すなわち何の構造も持たない集合から、最も制約のない「自由な」構造を生成する操作も関手になります。
            </p>

            <ContentBox
                type="example"
                title="Example 2.2-2 (自由群関手 / Free Functor)"
            >
                <p>
                    集合の圏 <InlineMath math="\mathbf{Set}" /> から群の圏 <InlineMath math="\mathbf{Grp}" /> への<strong>自由関手 <InlineMath math="F : \mathbf{Set} \to \mathbf{Grp}" /></strong> を考える。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象の対応：</strong> 集合 <InlineMath math="S" /> に対して、<InlineMath math="S" /> の要素を「文字（生成元）」として作られるすべての「語（word）」の集まりからなる<strong>自由群 <InlineMath math="F(S)" /></strong> を対応させる（Topic 3-8 参照）。</li>
                    <li><strong>射の対応：</strong> 写像 <InlineMath math="f : S \to T" /> が与えられたとき、群準同型 <InlineMath math="F(f) : F(S) \to F(T)" /> を、「元の語に現れる <InlineMath math="S" /> の文字 <span className='font-serif italic'>s</span> を、すべて <InlineMath math="T" /> の文字 <InlineMath math="f(s)" /> に一斉に置き換える操作」として定義する。</li>
                </ul>
                <p>
                    この自由関手 <InlineMath math="F" /> は、忘却関手 <InlineMath math="U" /> と「随伴（Adjunction）」と呼ばれる極めて美しい双対関係で結ばれている（Chapter 6 で詳述）。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">基本群関手</h2>

            <p className="leading-relaxed">
                圏論の威力が最も発揮されるのは、幾何学的な対象を代数的な対象に翻訳して問題を解く「代数的トポロジー」の分野です。
            </p>

            <ContentBox
                type="example"
                title="Example 2.2-3 (基本群関手)"
            >
                <p>
                    Topic 3-12 で学んだ「基本群」は、基点付き位相空間の圏 <InlineMath math="\mathbf{Top}_*" /> から、群の圏 <InlineMath math="\mathbf{Grp}" /> への関手 <strong><InlineMath math="\pi_1 : \mathbf{Top}_* \to \mathbf{Grp}" /></strong> として定式化される。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象の対応：</strong> 基点付き空間 <InlineMath math="(X, x_0)" /> に対して、その基本群 <InlineMath math="\pi_1(X, x_0)" />（ループのホモトピー類の群）を対応させる。</li>
                    <li><strong>射の対応：</strong> 基点を保つ連続写像 <InlineMath math="f : (X, x_0) \to (Y, y_0)" /> に対して、群準同型 <InlineMath math="f_* : \pi_1(X, x_0) \to \pi_1(Y, y_0)" /> を誘導する。これはループ <InlineMath math="\gamma" /> に対して <InlineMath math="[\gamma] \mapsto [f \circ \gamma]" /> と定義された写像である。</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="proposition"
                title={<span>Proposition 2.2-1 (<InlineMath math="\pi_1" /> の関手性)</span>}
            >
                <p>
                    誘導準同型の操作は、関手の公理を満たす。すなわち、
                    <BlockMath math="(g \circ f)_* = g_* \circ f_* \quad \text{および} \quad (\mathrm{id}_X)_* = \mathrm{id}_{\pi_1(X)}" />
                    が成立する。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    任意のループのホモトピー類 <InlineMath math="[\gamma] \in \pi_1(X, x_0)" /> に対して定義通りに計算する。
                </p>
                <p>
                    合成の保存：
                    <BlockMath math="(g \circ f)_*([\gamma]) = [(g \circ f) \circ \gamma] = [g \circ (f \circ \gamma)]" />
                    一方、
                    <BlockMath math="(g_* \circ f_*)([\gamma]) = g_*(f_*([\gamma])) = g_*([f \circ \gamma]) = [g \circ (f \circ \gamma)]" />
                    となり両者は一致する。
                </p>
                <p>
                    恒等射の保存：
                    <BlockMath math="(\mathrm{id}_X)_*([\gamma]) = [\mathrm{id}_X \circ \gamma] = [\gamma]" />
                    となり、これは群 <InlineMath math="\pi_1(X)" /> における恒等写像に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="関手の力による「翻訳」"
            >
                <p>
                    <InlineMath math="\pi_1" /> が関手であることは、非常に強力な結論をもたらします。関手は「同型射」を「同型射」に必ず送る（<InlineMath math="f" /> が逆を持てば <InlineMath math="F(f)" /> も逆を持つ）という性質があります。
                </p>
                <p>
                    したがって、もし2つの位相空間 <InlineMath math="X, Y" /> が同相（<InlineMath math="\mathbf{Top}" /> で同型）ならば、それらの基本群 <InlineMath math="\pi_1(X), \pi_1(Y)" /> は群として同型（<InlineMath math="\mathbf{Grp}" /> で同型）でなければなりません。
                    対偶をとれば、<strong>「基本群が異なる空間は、絶対に同相ではない」</strong>ことになります。このように、直感的に分かりにくい「空間の形の連続的な違い」を、「群の計算」という機械的な代数問題に完全に翻訳して証明できるようになるのが、代数的トポロジーにおける関手の威力です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>忘却関手：</strong> 群や位相空間から、その構造を忘れて単なる「集合」を取り出す関手。</li>
                    <li><strong>自由関手：</strong> 集合から、何の制約も持たない「自由群」などを生成する関手（忘却の逆の働き）。</li>
                    <li><strong>基本群関手 <InlineMath math="\pi_1" />：</strong> 空間を群に、連続写像を群準同型に翻訳する関手であり、幾何学的な問題を代数的に解くための強力なツールである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}