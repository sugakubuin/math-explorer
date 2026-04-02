import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultipleRoots() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では特性根がすべて異なる場合を扱いましたが、特性方程式が<strong>重根</strong>を持つ場合、単純な指数関数だけでは独立な解の数が足りなくなってしまいます。
                たとえば 2 階の方程式で重根 <InlineMath math="\lambda" /> が出たとき、解は <InlineMath math="e^{\lambda x}" /> 一つしか見つかりません。
                しかし、実は「多項式を掛けた形」も解になることが知られています。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">重根の場合の解の構成</h2>

            <p>
                重根の数（重複度）の分だけ、独立な解を補充する規則があります。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 (重根に対応する基本解)">
                <p>
                    特性方程式 <InlineMath math="P(\lambda) = 0" /> が <InlineMath math="m" /> 重根 <InlineMath math="\lambda" /> を持つとき、
                    次のように <InlineMath math="x" /> のべき乗を掛けた <InlineMath math="m" /> 個の関数
                    <BlockMath math="e^{\lambda x}, x e^{\lambda x}, x^2 e^{\lambda x}, \dots, x^{m-1}e^{\lambda x}" />
                    は、この方程式の一次独立な解である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    微分演算子 <InlineMath math="D = \frac{d}{dx}" /> を用いると、特性多項式 <InlineMath math="P(\lambda)" /> に対応する微分方程式は <InlineMath math="P(D)y = 0" /> と書ける。
                    特性根 <InlineMath math="\lambda" /> が <InlineMath math="m" /> 重根であるとは、 <InlineMath math="P(D) = Q(D)(D - \lambda)^m" /> と因数分解できることを意味する。
                    いま、関数 <InlineMath math="y = x^k e^{\lambda x} \ (0 \leq k < m)" /> について考えると、演算子の性質
                    <BlockMath math="(D - \lambda)^k (x^m e^{\lambda x}) = \frac{m!}{(m-k)!} x^{m-k} e^{\lambda x}" />
                    （特に、 <InlineMath math="(D - \lambda) (x^k e^{\lambda x}) = k x^{k-1} e^{\lambda x}" /> ）が成り立つ。
                    この性質を繰り返し用いると、
                    <BlockMath math="(D - \lambda)^m (x^k e^{\lambda x}) = 0 \quad (\text{for } k < m)" />
                    が導かれる。したがって、 <InlineMath math="Ly = Q(D)(D - \lambda)^m (x^k e^{\lambda x}) = Q(D) \cdot 0 = 0" /> となり、これらはすべて解である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="なぜ多項式が現れるのか">
                <p>
                    直感的には、相異なる根 <InlineMath math="\lambda" /> と <InlineMath math="\lambda + \epsilon" /> が極限 <InlineMath math="\epsilon \to 0" /> で重なる様子を考えると理解しやすくなります。
                    2 つの独立な解 <InlineMath math="e^{\lambda x}" /> と <InlineMath math="e^{(\lambda + \epsilon)x}" /> の線形結合
                    <BlockMath math="\frac{e^{(\lambda + \epsilon)x} - e^{\lambda x}}{\epsilon} \xrightarrow{\epsilon \to 0} \frac{d}{d\lambda} e^{\lambda x} = x e^{\lambda x}" />
                    という極限操作によって、新しい独立な解 <InlineMath math="x e^{\lambda x}" /> が現れるのです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">具体的な計算例</h2>

            <ContentBox type="example" title="Example 4.2-1 (2 階重根の例)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y'' - 2y' + y = 0" /> の一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：特性方程式</strong>
                        <br />
                        <InlineMath math="\lambda^2 - 2\lambda + 1 = (\lambda - 1)^2 = 0" />
                        ゆえに <InlineMath math="\lambda = 1" /> (2 重根)。
                    </p>
                    <p>
                        <strong>ステップ 2：基本解系と一般解</strong>
                        <br />
                        基本解系は <InlineMath math="\{e^x, x e^x\}" /> である。一般解は
                        <BlockMath math="y = c_1 e^x + c_2 x e^x = (c_1 + c_2 x) e^x" />
                    </p>
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.2-2 (4 階方程式)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y^{(4)} - 4y'' + 4y = 0" /> の一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：特性方程式</strong>
                        <br />
                        <InlineMath math="\lambda^4 - 4\lambda^2 + 4 = (\lambda^2 - 2)^2 = 0" />
                        特性根は <InlineMath math="\lambda = \pm \sqrt{2}" /> で、それぞれ 2 重根である。
                    </p>
                    <p>
                        <strong>ステップ 2：一般解の構成</strong>
                        <br />
                        <InlineMath math="\lambda = \sqrt{2}" /> に対する解： <InlineMath math="e^{\sqrt{2}x}, x e^{\sqrt{2}x}" />
                        <br />
                        <InlineMath math="\lambda = -\sqrt{2}" /> に対する解： <InlineMath math="e^{-\sqrt{2}x}, x e^{-\sqrt{2}x}" />
                        <br />
                        よって一般解は
                        <BlockMath math="y = (c_1 + c_2 x) e^{\sqrt{2}x} + (c_3 + c_4 x) e^{-\sqrt{2}x}" />
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>重根の処理</strong>： 根の数が足りない場合、 <InlineMath math="x" /> のべき乗を掛けることで独立な解を補う。</li>
                    <li><strong><InlineMath math="m" /> 重根 <InlineMath math="\lambda" /></strong>： 解として <InlineMath math="e^{\lambda x}, x e^{\lambda x}, \dots, x^{m-1} e^{\lambda x}" /> を用いる。</li>
                    <li><strong>一般解</strong>： これらの線形結合によって構成される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
