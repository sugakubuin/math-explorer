import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function HeineBorelTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまで抽象的な位相空間におけるコンパクト性を扱ってきましたが、我々に最も馴染み深いユークリッド空間 <InlineMath math="\mathbb{R}^n" /> において、コンパクト性はどのように特徴づけられるのでしょうか。
                その答えを与えるのが、<strong>ハイネ・ボレルの定理 (Heine-Borel Theorem)</strong> です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ハイネ・ボレルの定理</h2>

            <p>
                ユークリッド空間におけるコンパクト性は、初等解析学で現れる「有界」と「閉」という2つの性質だけで完全に記述できます。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (ハイネ・ボレルの定理)">
                <p>
                    <InlineMath math="\mathbb{R}^n" /> の部分集合 <InlineMath math="K" /> （通常の位相）について、次の条件は同値である：
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2 ml-4">
                    <li><InlineMath math="K" /> はコンパクトである。</li>
                    <li><InlineMath math="K" /> は<strong>有界</strong>かつ<strong>閉集合</strong>である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概略)">
                <p>
                    <strong>(1 <InlineMath math="\implies" /> 2)</strong>:
                    <InlineMath math="\mathbb{R}^n" /> はハウスドルフ空間なので、コンパクト集合 <InlineMath math="K" /> は閉集合である（Theorem 7.2-2）。
                    また、原点中心の半径 <InlineMath math="m" /> の開球族 <InlineMath math="\{B(0, m)\}_{m=1, 2, \dots}" /> は <InlineMath math="\mathbb{R}^n" /> の開被覆なので、当然 <InlineMath math="K" /> も覆う。
                    <InlineMath math="K" /> のコンパクト性より有限部分被覆が選べるため、ある有限な <InlineMath math="M" /> に対して <InlineMath math="K \subset B(0, M)" /> となり、<InlineMath math="K" /> は有界である。
                </p>
                <p className="mt-2">
                    <strong>(2 <InlineMath math="\implies" /> 1)</strong>:
                    まず、一変数の有界閉区間 <InlineMath math="[a, b]" /> がコンパクトであることを示す（「有限被覆の存在」を区間の分割などで証明する）。
                    次に、<InlineMath math="n" /> 次元の場合、有界な集合 <InlineMath math="K" /> はある大きな <InlineMath math="n" /> 次元閉立方体 <InlineMath math="C = [a_1, b_1] \times \dots \times [a_n, b_n]" /> に含まれる。
                    閉立方体はコンパクト空間の有限積としてコンパクトであり（チコノフの定理の有限版）、<InlineMath math="K" /> はその中の閉部分集合なので、Proposition 7.2-1 より <InlineMath math="K" /> もコンパクトである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">有界性と閉集合性の重要性</h2>

            <p>
                ハイネ・ボレルの定理において、「有界」と「閉」のどちらか一方が欠けてもコンパクト性は成り立ちません。
            </p>

            <ContentBox type="example" title="Example 7.4-1 (有界だが閉でない例)">
                <p>
                    <InlineMath math="\mathbb{R}" /> において、開区間 <InlineMath math="(0, 1)" /> は有界ですが、閉集合ではありません。
                    §7.1 で見た通り、これはコンパクトではありません。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-2 (閉だが有界でない例)">
                <p>
                    <InlineMath math="\mathbb{R}" /> において、半開区間 <InlineMath math="[0, \infty)" /> は閉集合ですが、有界ではありません。
                    開被覆 <InlineMath math="\{(-1, n)\}_{n=1, 2, \dots}" /> を考えると、どのような有限個を選んでも全体を覆うことはできず、コンパクトではありません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="一般の距離空間での注意">
                <p>
                    <strong>注意：</strong> ハイネ・ボレルの定理は一般の距離空間では必ずしも成り立ちません。
                    「コンパクト $\implies$ 有界かつ閉」は常に成り立ちますが、逆の「有界閉 $\implies$ コンパクト」は、例えば無限次元のヒルベルト空間などでは一般に成立しません。
                    ユークリッド空間（あるいはより一般に有限次元空間）特有の非常に強力な性質であることを意識しておく必要があります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ハイネ・ボレルの定理</strong>：<InlineMath math="\mathbb{R}^n" /> において、コンパクトであることと<strong>有界閉集合</strong>であることは同値。</li>
                    <li>コンパクト性を「目で見て」あるいは「不等式で」判定できる非常に強力な道具。</li>
                    <li>無限次元空間など、より一般の空間へ進む際にはこの同値性が崩れることに注意が必要。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
