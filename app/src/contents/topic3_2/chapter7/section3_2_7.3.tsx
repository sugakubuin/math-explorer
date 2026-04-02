import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ResidueApplicationsDetailed() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                留数定理の真価は、実関数の積分という「一見すると複素解析とは無関係な問題」を解決できる点にあります。
                実軸上の積分を複素平面上の閉曲線に沿った積分へと拡張することで、高校数学や微分積分学の範囲では極めて困難だった計算が可能になります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">三角関数型の定積分</h2>

            <p>
                <InlineMath math="\theta" /> に関する <InlineMath math="0" /> から <InlineMath math="2\pi" /> までの積分は、単位円上の積分とみなすことができます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (三角関数の積分公式)">
                <p>
                    <InlineMath math="\sin \theta, \cos \theta" /> の有理式 <InlineMath math="R(\cos\theta, \sin \theta)" /> の積分は、
                    <InlineMath math="z = e^{i\theta}" /> と置換することで単位円 <InlineMath math="|z|=1" /> 上の複素積分に変換できる。
                </p>
                <BlockMath math="\cos \theta = \frac{z + z^{-1}}{2}, \quad \sin \theta = \frac{z - z^{-1}}{2i}, \quad d\theta = \frac{dz}{iz}" />
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1 (三角関数の積分計算)">
                <p>
                    <InlineMath math="I = \int_0^{2\pi} \frac{d\theta}{2 + \cos \theta}" /> を求めよ。
                </p>
                <p>
                    <strong>解答：</strong> <InlineMath math="z = e^{i\theta}" /> と置換すると
                    <BlockMath math="I = \oint_{|z|=1} \frac{1}{2 + \frac{z+z^{-1}}{2}} \frac{dz}{iz} = \frac{2}{i} \oint_{|z|=1} \frac{dz}{z^2 + 4z + 1}" />
                    分母の根は <InlineMath math="z = -2 \pm \sqrt{3}" /> であり、単位円内にある特異点は <InlineMath math="z_0 = -2 + \sqrt{3}" /> のみである。
                    この点における留数は
                    <BlockMath math="\text{Res} = \lim_{z \to z_0} \frac{1}{z - (-2 - \sqrt{3})} = \frac{1}{2\sqrt{3}}" />
                    よって留数定理より、 <InlineMath math="I = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}" /> となる。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実軸上の広義積分</h2>

            <p>
                無限区間 <InlineMath math="(-\infty, \infty)" /> の積分は、上半平面を囲む巨大な半円パスを利用して計算します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-2 (有理関数の広義積分)">
                <p>
                    実軸上に極を持たず、分母の次数が分子より 2 つ以上高い有理関数 <InlineMath math="R(x)" /> に対して
                    <BlockMath math="\int_{-\infty}^{\infty} R(x) dx = 2\pi i \sum_{\text{Im}(z_j)>0} \text{Res}(R; z_j)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    実軸上の区間 <InlineMath math="[-R, R]" /> と、上半平面の半径 <InlineMath math="R" /> の半円 <InlineMath math="C_R" /> からなる閉曲線 <InlineMath math="\gamma" /> を考える。
                    十分大きな <InlineMath math="R" /> に対して、上半平面にあるすべての孤立特異点 <InlineMath math="z_j" /> は <InlineMath math="\gamma" /> の内部に含まれる。
                    留数定理より、次が成り立つ。
                </p>
                <BlockMath math="\int_{-R}^R R(x) dx + \int_{C_R} R(z) dz = 2\pi i \sum_{\text{Im}(z_j)>0} \text{Res}(R; z_j)" />
                <p>
                    ここで <InlineMath math="R(z)" /> の分母の次数が分子より 2 以上高いという仮定より、十分大きな <InlineMath math="R" /> に対して <InlineMath math="C_R" /> 上で <InlineMath math="|R(z)| \leq \frac{M}{R^2}" /> となる定数 <InlineMath math="M" /> が存在する。
                    これより半円部分の積分を評価すると、
                </p>
                <BlockMath math="\left| \int_{C_R} R(z) dz \right| \leq \frac{M}{R^2} \cdot \pi R = \frac{\pi M}{R}" />
                <p>
                    となり、 <InlineMath math="R \to \infty" /> のとき右辺は 0 に収束する。
                    したがって、閉曲線全体の積分の極限は実軸上の広義積分の値に等しくなる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-2 (実軸上の積分)">
                <p>
                    <InlineMath math="\int_{-\infty}^{\infty} \frac{1}{1 + x^4} dx" /> を求めよ。
                </p>
                <p>
                    <strong>解答：</strong> 上半平面にある特異点は <InlineMath math="z_1 = e^{i\pi/4}" /> と <InlineMath math="z_2 = e^{3i\pi/4}" /> である。
                    それぞれの留数を計算（分母の微分公式 Proposition 7.1-3 が便利）し、合計することで <InlineMath math="\frac{\pi}{\sqrt{2}}" /> を得る。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ジョルダンの補助定理</h2>

            <p>
                振動項 <InlineMath math="e^{iaz}" /> を含む積分において、半円部分の積分が消えることを保証する重要な補助定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-3 (ジョルダンの補助定理)">
                <p>
                    <InlineMath math="a > 0" /> とし、上半平面の半径 <InlineMath math="R" /> の半円 <InlineMath math="C_R" /> 上で
                    <InlineMath math="\lim_{R \to \infty} \max_{z \in C_R} |f(z)| = 0" /> ならば、
                    <BlockMath math="\lim_{R \to \infty} \int_{C_R} f(z) e^{iaz} dz = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="z = Re^{i\theta}" /> とすると、 <InlineMath math="|e^{iaz}| = |e^{iaR(\cos\theta + i\sin\theta)}| = e^{-aR\sin\theta}" /> である。
                    積分の絶対値は次のようになる。
                    <BlockMath math="\left| \int_{C_R} f(z) e^{iaz} dz \right| \leq \max |f(z)| \cdot R \int_0^\pi e^{-aR\sin\theta} d\theta" />
                    ここで <InlineMath math="\sin\theta \geq \frac{2}{\pi}\theta" /> (<InlineMath math="0 \leq \theta \leq \frac{\pi}{2}" />) というジョルダンの不等式を用いると、
                    右辺の積分は <InlineMath math="\frac{\pi}{aR}(1 - e^{-aR})" /> で抑えられ、 <InlineMath math="R \to \infty" /> で 0 に収束する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="積分パスの選択：なぜ上半平面か？">
                <p>
                    <InlineMath math="e^{iaz}" /> の積分において上半平面（<InlineMath math="\text{Im}(z) > 0" />）を選ぶのは、
                    その領域で <InlineMath math="e^{iaz}" /> の絶対値が指数関数的に減衰し、無限遠での積分が 0 になることを利用するためです。
                    逆に <InlineMath math="a < 0" /> であれば、下半平面を選択する必要があります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>三角関数の積分は単位円上の周回積分へと翻訳される。</li>
                    <li>無限区間の広義積分は、上半平面の留数を計算することで求められる。</li>
                    <li>ジョルダンの補助定理は、フーリエ級数型の積分計算を正当化する強力な武器となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
