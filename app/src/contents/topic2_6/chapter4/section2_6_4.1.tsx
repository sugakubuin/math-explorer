import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CharacteristicEquationRealRoots() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前章までは、係数が変数であるような一般の線形微分方程式を扱ってきました。
                本章では、係数がすべて定数である<strong>定数係数線形微分方程式</strong>に焦点を当てます。
                このタイプの方程式は、指数関数解を仮定することで微分の問題を代数方程式（多項式の求解）に帰着できるという、極めて強力かつ簡便な解法が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定数係数斉次方程式</h2>

            <p>
                まずは右辺が 0 である斉次ケースを定義します。
            </p>

            <ContentBox type="definition" title="Definition 4.1-1 (n 階定数係数斉次線形方程式)">
                <p>
                    未知関数 <InlineMath math="y(x)" /> に関する次の方程式を <strong><InlineMath math="n" /> 階定数係数斉次線形方程式</strong> と呼ぶ：
                    <BlockMath math="a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0" />
                    ここで <InlineMath math="a_i" /> は実数の定数であり、 <InlineMath math="a_n \neq 0" /> とする。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">特性方程式の導入</h2>

            <p>
                指数関数 <InlineMath math="e^{\lambda x}" /> はいくら微分しても形が変わらない（定数倍になるだけ）という性質に注目します。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-1 (指数関数解と特性方程式)">
                <p>
                    関数 <InlineMath math="y = e^{\lambda x}" /> が定数係数斉次線形方程式の解であるための必要十分条件は、 <InlineMath math="\lambda" /> が次の<strong>特性方程式</strong>の解であることである：
                    <BlockMath math="P(\lambda) = a_n \lambda^n + a_{n-1} \lambda^{n-1} + \cdots + a_1 \lambda + a_0 = 0" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="y = e^{\lambda x}" /> を微分すると、一般に <InlineMath math="y^{(k)} = \lambda^k e^{\lambda x}" /> である。これを方程式に代入すると：
                    <BlockMath math="\begin{aligned} a_n (\lambda^n e^{\lambda x}) + a_{n-1} (\lambda^{n-1} e^{\lambda x}) + \cdots + a_0 (e^{\lambda x}) &= 0 \\ (a_n \lambda^n + a_{n-1} \lambda^{n-1} + \cdots + a_0) e^{\lambda x} &= 0 \end{aligned}" />
                    <InlineMath math="e^{\lambda x}" /> は常に 0 ではないため、両辺を <InlineMath math="e^{\lambda x}" /> で割ることができ、
                    <BlockMath math="a_n \lambda^n + a_{n-1} \lambda^{n-1} + \cdots + a_0 = 0" />
                    を得る。逆にこの式が成り立つなら、元の微分方程式も満たされる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実数単根の場合</h2>

            <p>
                特性方程式の解（特性根）がすべて相異なる実数である場合、基本解系は非常にシンプルに構成できます。
            </p>

            <ContentBox type="theorem" title="Theorem 4.1-2 (相異なる実数根に対する一般解)">
                <p>
                    特性方程式 <InlineMath math="P(\lambda) = 0" /> が相異なる <InlineMath math="n" /> 個の実数根 <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_n" /> を持つとき、
                    指数関数セット <InlineMath math="\{e^{\lambda_1 x}, e^{\lambda_2 x}, \dots, e^{\lambda_n x}\}" /> は基本解系をなす。
                    したがって、一般解は次のように表される：
                    <BlockMath math="y(x) = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x} + \cdots + c_n e^{\lambda_n x}" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Theorem 4.1-1 より、これらはすべて解である。それらが一次独立であることを示すため、ロンスキアンを計算する（ <InlineMath math="n=2" /> の場合を示す）：
                    <BlockMath math="\begin{aligned} W[e^{\lambda_1 x}, e^{\lambda_2 x}] &= \det \begin{pmatrix} e^{\lambda_1 x} & e^{\lambda_2 x} \\ \lambda_1 e^{\lambda_1 x} & \lambda_2 e^{\lambda_2 x} \end{pmatrix} \\ &= (\lambda_2 - \lambda_1) e^{(\lambda_1 + \lambda_2)x} \end{aligned}" />
                    <InlineMath math="\lambda_1 \neq \lambda_2" /> ならば <InlineMath math="W \neq 0" /> であるため、これらは一次独立である。
                    （一般の <InlineMath math="n" /> についてはヴァンデルモンドの行列式により同様に示される。）
                    独立な <InlineMath math="n" /> 個の解であるため、これらは基本解系をなす。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 4.1-1 (3 階方程式の求解)">
                <p>
                    <strong>問題：</strong> <InlineMath math="y''' - 6y'' + 11y' - 6y = 0" /> の一般解を求めよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>ステップ 1：特性方程式の作成</strong>
                        <br />
                        <InlineMath math="\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0" />
                    </p>
                    <p>
                        <strong>ステップ 2：特性根の算出</strong>
                        <br />
                        左辺を因数分解すると <InlineMath math="(\lambda - 1)(\lambda - 2)(\lambda - 3) = 0" /> となり、
                        実数単根 <InlineMath math="\lambda = 1, 2, 3" /> を得る。
                    </p>
                    <p>
                        <strong>ステップ 3：一般解の構成</strong>
                        <br />
                        基本解系は <InlineMath math="\{e^x, e^{2x}, e^{3x}\}" /> である。したがって一般解は
                        <BlockMath math="y = c_1 e^x + c_2 e^{2x} + c_3 e^{3x}" />
                    </p>
                </div>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>特性方程式</strong>： 定数係数微分方程式を代数的な多項式に変換したもの。</li>
                    <li><strong>指数関数解</strong>： 多項式の根がそのまま指数関数の肩に乗る。</li>
                    <li><strong>実数単根</strong>： 相異なる根に対しては、それぞれ対応する指数関数の線形結合が一般解となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
