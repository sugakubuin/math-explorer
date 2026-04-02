import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function WronskianAndFundamentalSystem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、 <InlineMath math="n" /> 階斉次線形微分方程式の解空間が <InlineMath math="n" /> 次元であることを学びました。
                解空間のすべての要素を表すためには、互いに独立な <InlineMath math="n" /> 個の解（基底）を見つける必要があります。
                「見つけた解のセットが本当に独立しているか？」を判定するための行列式が、本節の主役である「ロンスキアン」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロンスキアンの定義</h2>

            <p>
                複数の関数が一次独立であるかどうかを、その導関数の情報も含めて一挙に判定します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-1 (ロンスキアン：Wronskian)">
                <p>
                    <InlineMath math="n-1" /> 階まで微分可能な関数 <InlineMath math="\phi_1(x), \ldots, \phi_n(x)" /> に対して、
                    それらを 1 行目に並べ、各行で微分を繰り返して作られる行列の行列式
                    <BlockMath math="W[\phi_1, \dots, \phi_n](x) = \det \begin{pmatrix} \phi_1 & \phi_2 & \dots & \phi_n \\ \phi_1' & \phi_2' & \dots & \phi_n' \\ \vdots & \vdots & \ddots & \vdots \\ \phi_1^{(n-1)} & \phi_2^{(n-1)} & \dots & \phi_n^{(n-1)} \end{pmatrix}" />
                    を、これらの関数の<strong>ロンスキアン (Wronskian)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ロンスキアンと一次独立性</h2>

            <p>
                微分方程式の解であるという特殊な条件下では、ロンスキアンは極めて強力な性質を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 3.2-1 (ロンスキアンによる独立性判定)">
                <p>
                    <InlineMath math="n" /> 階斉次線形微分方程式 <InlineMath math="Ly = 0" /> の解 <InlineMath math="\phi_1, \dots, \phi_n" /> について、
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                    <li>
                        ある点 <InlineMath math={ "x_0" } /> で <InlineMath math="W(x_0) \neq 0" /> ならば、これらの解は<strong>一次独立</strong>である。
                    </li>
                    <li>
                        斉次方程式の解である限り、ロンスキアンは
                        「すべての点で <InlineMath math="W(x) \neq 0" /> 」か「すべての点で <InlineMath math="W(x) \equiv 0" /> 」のどちらか一方のみが成り立つ。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <strong>1. 独立性の判定：</strong>
                    定数 <InlineMath math="c_1, \dots, c_n" /> に対して線形結合 <InlineMath math="c_1\phi_1 + \dots + c_n\phi_n = 0" /> が成り立つとする。
                    これを <InlineMath math="n-1" /> 回微分して得られる式とともに点 <InlineMath math="x_0" /> で評価すると、次の行列方程式を得る：
                    <BlockMath math="\begin{pmatrix} \phi_1(x_0) & \dots & \phi_n(x_0) \\ \vdots & \ddots & \vdots \\ \phi_1^{(n-1)}(x_0) & \dots & \phi_n^{(n-1)}(x_0) \end{pmatrix} \begin{pmatrix} c_1 \\ \vdots \\ c_n \end{pmatrix} = \begin{pmatrix} 0 \\ \vdots \\ 0 \end{pmatrix}" />
                    左辺の行列の行列式は <InlineMath math="W(x_0)" /> である。 <InlineMath math="W(x_0) \neq 0" /> ならば、逆行列が存在するため <InlineMath math="c_1 = \dots = c_n = 0" /> が導かれ、解は一次独立である。
                </p>
                <p className="mt-4">
                    <strong>2. W の挙動について：</strong>
                    解が斉次方程式を満たすとき、そのロンスキアン <InlineMath math="W(x)" /> はアベルの等式（後述の Remark 参照）を満たし、
                    <BlockMath math="W(x) = W(x_0) \exp\left( -\int_{x_0}^x \frac{a_{n-1}(t)}{a_n(t)} dt \right)" />
                    と書ける。指数関数は常に正であるため、 <InlineMath math="W(x)" /> が 0 になるかどうかは初期値 <InlineMath math="W(x_0)" /> のみに依存する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 3.2-1 (ロンスキアンの計算例)">
                <p>
                    2 階微分方程式 <InlineMath math="y'' - y = 0" /> の解 <InlineMath math="\phi_1 = e^x, \phi_2 = e^{-x}" /> の独立性を確認せよ。
                </p>
                <div className="mt-4 space-y-4">
                    <p>
                        <strong>計算：</strong>
                        <BlockMath math="\begin{aligned} W[e^x, e^{-x}] &= \det \begin{pmatrix} e^x & e^{-x} \\ (e^x)' & (e^{-x})' \end{pmatrix} \\ &= \det \begin{pmatrix} e^x & e^{-x} \\ e^x & -e^{-x} \end{pmatrix} \\ &= e^x(-e^{-x}) - e^{-x}(e^x) \\ &= -1 - 1 = -2 \end{aligned}" />
                    </p>
                    <p>
                        <strong>結論：</strong>
                        ロンスキアンが <InlineMath math="-2 \neq 0" /> なので、 <InlineMath math="\{e^x, e^{-x}\}" /> は一次独立な解である。
                    </p>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本解系</h2>

            <p>
                解空間の基底となる解のセットを定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.2-2 (基本解系)">
                <p>
                    <InlineMath math="n" /> 階斉次線形微分方程式の一次独立な <InlineMath math="n" /> 個の解の組 <InlineMath math="\{\phi_1, \dots, \phi_n\}" /> を、
                    その方程式の<strong>基本解系 (Fundamental system of solutions)</strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="theorem" title="Theorem 3.2-2 (一般解の表示)">
                <p>
                    基本解系 <InlineMath math="\{\phi_1, \dots, \phi_n\}" /> が一つ得られれば、
                    その方程式の任意の解（一般解）は、任意定数 <InlineMath math="c_i" /> を用いて次のように表される：
                    <BlockMath math="y(x) = c_1\phi_1(x) + c_2\phi_2(x) + \cdots + c_n\phi_n(x)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    §3.1 の Theorem 3.1-2 より、解空間 <InlineMath math="V" /> の次元は <InlineMath math="n" /> である。
                    基本解系 <InlineMath math="\{\phi_1, \dots, \phi_n\}" /> は、定義より互いに一次独立な <InlineMath math="n" /> 個の解であるため、
                    <InlineMath math="n" /> 次元ベクトル空間 <InlineMath math="V" /> の基底をなす。
                    したがって、任意の解 <InlineMath math="y \in V" /> はそれらの線形結合としてただ一通りに表される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="ロンスキアンが 0 にならない理由">
                <p>
                    定理 3.2-1 の背後には、ロンスキアンが満たす微分方程式（<strong>アベルの等式</strong>）
                    <BlockMath math="W(x) = W(x_0) \exp\left( -\int_{x_0}^x \frac{a_{n-1}(t)}{a_n(t)} dt \right)" />
                    が存在します。指数関数部分は決して 0 にならないため、 <InlineMath math="W(x_0)" /> が 0 か否かが、全区間での挙動を決定づけるのです。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>ロンスキアン</strong>： 関数の独立性を判定する行列式。</li>
                    <li><strong>独立性判定</strong>： 1 点でも <InlineMath math="W \neq 0" /> ならば一次独立（斉次方程式の解の場合）。</li>
                    <li><strong>基本解系</strong>： 解空間の「基底」となる <InlineMath math="n" /> 個の独立な解。</li>
                    <li><strong>一般解</strong>： 基本解系の線形結合によって、あらゆる解を表現できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
