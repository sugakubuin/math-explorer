import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ArgumentPrincipleAndRouche() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは「積分の値を求める」ために留数定理を使ってきましたが、本節ではその逆の視点を持ちます。
                積分の値（巻き数）を調べることで、領域内の関数の <strong>「零点や極の個数」</strong> を特定する、トポロジカルな手法を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">偏角の原理</h2>

            <p>
                関数の対数微分 <InlineMath math="f'/f" /> を積分することで、その内部にある零点と極の情報を抽出できます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (偏角の原理)">
                <p>
                    関数 <InlineMath math="f(z)" /> が単純閉曲線 <InlineMath math="\gamma" /> の内部で有限個の零点（重複度込み <InlineMath math="Z" /> 個）と極（位数込み <InlineMath math="P" /> 個）を持ち、 <InlineMath math="\gamma" /> 上で <InlineMath math="f(z) \neq 0" /> かつ正則であるとする。
                    このとき次が成り立つ。
                </p>
                <BlockMath math="\frac{1}{2\pi i} \oint_\gamma \frac{f'(z)}{f(z)} dz = Z - P" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f(z)" /> が <InlineMath math="z_0" /> で <InlineMath math="n" /> 次の零点を持つとき、 <InlineMath math="f(z) = (z-z_0)^n g(z)" /> （<InlineMath math="g(z_0) \neq 0" />）と書ける。
                    このとき対数微分は
                    <BlockMath math="\frac{f'(z)}{f(z)} = \frac{n}{z-z_0} + \frac{g'(z)}{g(z)}" />
                    となり、 <InlineMath math="z=z_0" /> における留数は <InlineMath math="n" /> となる。
                    同様に、 <InlineMath math="z_0" /> が <InlineMath math="m" /> 次の極であれば、留数は <InlineMath math="-m" /> となる。
                    留数定理により、閉曲線内のすべての零点と極の留数を合計すれば、 <InlineMath math="Z - P" /> が得られる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="名前の由来：なぜ「偏角」の原理か？">
                <p>
                    積分の左辺は、 <InlineMath math="\frac{1}{2\pi i} \int_\gamma d(\log f(z))" /> と解釈できます。
                    実部（絶対値）は一周すると元に戻りますが、虚部（偏角）は <InlineMath math="z" /> が一周する間に関数が原点を何周したかによって <InlineMath math="2\pi" /> の整数倍変化します。
                    これが「巻き数」としての偏角の原理の本質です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ルーシェの定理</h2>

            <p>
                偏角の原理から導かれる最も実用的な結果の一つが、ルーシェの定理です。
                「小さな摂動」を加えても、零点の個数が変化しないことを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-2 (ルーシェの定理)">
                <p>
                    <InlineMath math="f, g" /> が単純閉曲線 <InlineMath math="\gamma" /> の内部と上で正則で、 <InlineMath math="\gamma" /> 上で
                    <BlockMath math="|g(z)| < |f(z)|" />
                    を満たすならば、 <InlineMath math="f" /> と <InlineMath math="f + g" /> は <InlineMath math="\gamma" /> の内部に同じ個数（重複度込み）の零点を持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="\gamma" /> 上で <InlineMath math="f \neq 0" /> かつ <InlineMath math="f+g \neq 0" /> である。
                    <InlineMath math="h(z) = \frac{f(z)+g(z)}{f(z)} = 1 + \frac{g(z)}{f(z)}" /> と置く。仮定より、 <InlineMath math="\gamma" /> 上で <InlineMath math="|h(z) - 1| < 1" /> が成り立つ。
                    これは、 <InlineMath math="z" /> が <InlineMath math="\gamma" /> を動くとき、像 <InlineMath math="h(\gamma)" /> が複素平面の右半分（中心 1, 半径 1 の円の内部）に収まっていることを意味する。
                </p>
                <p>
                    したがって、 <InlineMath math="h(z)" /> は原点の周りを一周もしない（巻き数 0）。
                    偏角の原理より、 <InlineMath math="f+g" /> の零点数と <InlineMath math="f" /> の零点数の差は 0 となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-2 (代数方程式の解の個数)">
                <p>
                    多項式 <InlineMath math="p(z) = z^7 - 5z^3 + z - 2" /> は、単位円 <InlineMath math="|z| < 1" /> の内部に何個の零点を持つか？
                </p>
                <p>
                    <strong>解答：</strong> <InlineMath math="f(z) = -5z^3" />（支配的な項）、 <InlineMath math="g(z) = z^7 + z - 2" /> とする。
                    単位円周 <InlineMath math="|z|=1" /> 上で、
                    <BlockMath math="|f(z)| = 5, \quad |g(z)| = |z^7 + z - 2| \leq |z|^7 + |z| + 2 = 4" />
                    が成り立つ。よって <InlineMath math="|g(z)| < |f(z)|" /> が満たされる。
                    ルーシェの定理より、 <InlineMath math="p(z)" /> の内部の零点数は <InlineMath math="f(z) = -5z^3" /> のそれと一致し、 <strong>3個</strong> である。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>偏角の原理は、複素積分の値から領域内の零点と極の正味の数を割り出す。</li>
                    <li>ルーシェの定理は、支配的な項（主要項）を見つけることで、複雑な関数の零点数を簡単に特定できる。</li>
                    <li>これは、代数方程式の解の分布を調べる際に非常に強力なツールとなる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
