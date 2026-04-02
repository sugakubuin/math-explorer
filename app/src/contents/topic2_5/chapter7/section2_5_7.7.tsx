import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LocalCompactnessAndCompactification() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章の締めくくりとして、コンパクト性を少し弱めた概念である<strong>局所コンパクト性</strong>と、コンパクトでない空間に「無限遠点」を一つ付け加えてコンパクトにする<strong>1点コンパクト化</strong>について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">局所コンパクト空間</h2>

            <p>
                ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> は全体としてはコンパクトではありませんが、一箇所に注目すれば「コンパクトな近傍」に囲まれています。このような性質を局所コンパクト性と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 7.7-1 (局所コンパクト空間)">
                <p>
                    ハウスドルフ空間 <InlineMath math="X" /> が<strong>局所コンパクト (Locally compact)</strong> であるとは、
                    すべての点 <InlineMath math="x \in X" /> がコンパクトな近傍を持つことをいう。
                </p>
                <p className="mt-2">
                    すなわち、あるコンパクト集合 <InlineMath math="K \subset X" /> と開集合 <InlineMath math="U \subset X" /> が存在して、
                    <BlockMath math="x \in U \subset K" />
                    を満たす。
                </p>
            </ContentBox>

            <ContentBox type="example" title="具体例">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意のコンパクト・ハウスドルフ空間は局所コンパクトである。</li>
                    <li>ユークリッド空間 <InlineMath math="\mathbb{R}^n" /> は局所コンパクトである（各点は十分小さな閉球というコンパクト近傍を持つ）。</li>
                    <li>離散空間は局所コンパクトである（各点そのものがコンパクト近傍をなす）。</li>
                    <li>有理数の集合 <InlineMath math="\mathbb{Q}" />（実数からの相対位相）は局所コンパクトではありません。</li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">Alexandroff の 1 点コンパクト化</h2>

            <p>
                局所コンパクトだがコンパクトでない空間に、仮想的な「1点」を付け加えることで、全体をコンパクトにすることができます。
            </p>

            <ContentBox type="definition" title="Definition 7.7-2 (1 点コンパクト化)">
                <p>
                    <InlineMath math="X" /> をコンパクトでない局所コンパクト・ハウスドルフ空間とする。
                    <InlineMath math="X" /> に新しい点 <InlineMath math="\infty" />（無限遠点）を付け加えた集合 <InlineMath math="X^* = X \cup \{\infty\}" /> 上に、次の位相を定める：
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                    <li><InlineMath math="X" /> の開集合はすべて <InlineMath math="X^*" /> の開集合である。</li>
                    <li><InlineMath math="\infty" /> を含む集合 <InlineMath math="U" /> について、<InlineMath math="X^* \setminus U" /> が <InlineMath math="X" /> のコンパクト部分集合であれば、<InlineMath math="U" /> は開集合である。</li>
                </ol>
                <p className="mt-2">
                    この位相空間 <InlineMath math="X^*" /> を <InlineMath math="X" /> の <strong>1 点コンパクト化 (One-point compactification)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.7-1 (1 点コンパクト化のイメージ)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> の 1 点コンパクト化を考えます。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        この場合の「開集合」は、通常の <InlineMath math="\mathbb{R}" /> の開集合に加え、「無限遠点を含む外側の領域（例：<InlineMath math="(-\infty, -M) \cup (M, \infty) \cup \{\infty\}" />）」となります。
                    </li>
                    <li>
                        これにより、プラスとマイナスの両方向へ進むと最終的に同じ点 <InlineMath math="\infty" /> にたどり着くような、円周上の構造が得られます。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proposition" title="Proposition 7.7-1 (コンパクト化の性質)">
                <p>
                    1 点コンパクト化 <InlineMath math="X^*" /> は、コンパクトなハウスドルフ空間である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>(コンパクト性)</strong>: <InlineMath math="X^*" /> の開被覆 <InlineMath math="\mathcal{U}" /> をとる。
                    ある <InlineMath math="U_\infty \in \mathcal{U}" /> は無限遠点 <InlineMath math="\infty" /> を含む。
                    定義より <InlineMath math="K = X^* \setminus U_\infty" /> は <InlineMath math="X" /> のコンパクト集合である。
                    <InlineMath math="\mathcal{U}" /> の要素は <InlineMath math="K" /> も覆っているため、コンパクト性より有限個の集合 <InlineMath math="U_1, \dots, U_n" /> で <InlineMath math="K" /> を覆える。
                    これに <InlineMath math="U_\infty" /> を加えれば <InlineMath math="X^*" /> 全体を覆う有限部分被覆となる。
                </p>
                <p className="mt-4">
                    <strong>(ハウスドルフ性)</strong>: 異なる 2 点 <InlineMath math="x, y \in X^*" /> をとる。
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                    <li>
                        <InlineMath math="x, y \in X" /> の場合：<InlineMath math="X" /> はハウスドルフなので、<InlineMath math="X" /> 内の開集合で分離でき、それらは <InlineMath math="X^*" /> でも開集合である。
                    </li>
                    <li>
                        <InlineMath math="x \in X, y = \infty" /> の場合：<InlineMath math="X" /> は局所コンパクトなので、<InlineMath math="x" /> を含むコンパクト近傍 <InlineMath math="K" /> がとれる。すなわち、ある開集合 <InlineMath math="U" /> が存在して <InlineMath math="x \in U \subset K" /> となる。このとき <InlineMath math="V = X^* \setminus K" /> は定義より <InlineMath math="\infty" /> の開近傍であり、<InlineMath math="U \cap V = \emptyset" /> である。
                    </li>
                </ul>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">幾何学的な例</h2>

            <p>
                1 点コンパクト化を幾何学的に捉えると、開いた空間が無限遠点で閉じられる様子がよく分かります。
            </p>

            <ContentBox type="example" title="Example 7.7-2 (実数直線の 1 点コンパクト化)">
                <p>
                    実数直線 <InlineMath math="\mathbb{R}" /> の 1 点コンパクト化 <InlineMath math="\mathbb{R}^*" /> は、円 <InlineMath math="S^1" /> と同相です。
                </p>
                <p className="mt-2">
                    直線をぐにゃりと曲げて、両端（プラス無限とマイナス無限）を一つの点 <InlineMath math="\infty" /> でくっつける様子をイメージしてください。
                    同様に、平面 <InlineMath math="\mathbb{R}^2" /> の 1 点コンパクト化は球面 <InlineMath math="S^2" /> と同相になります（これを<strong>ステレオ投影</strong>と呼びます）。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="なぜ局所コンパクト性が必要か">
                <p>
                    1 点コンパクト化がハウスドルフ空間になるためには、元の空間が局所コンパクトであることが必要です。
                    局所コンパクトでない空間（例えば <InlineMath math="\mathbb{Q}" />）を 1 点コンパクト化しようとすると、無限遠点が既存の点ときれいに分離できず、非ハウスドルフな空間になってしまいます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.7 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>局所コンパクト</strong>：各点がコンパクトな近傍に囲まれている空間。</li>
                    <li><strong>1 点コンパクト化</strong>：無限遠点を一つ加えることで空間を閉じる手法。</li>
                    <li><InlineMath math="\mathbb{R} \to S^1" /> や <InlineMath math="\mathbb{R}^n \to S^n" /> など、開いたユークリッド空間を閉じた多様体に関連付ける強力な手段である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
