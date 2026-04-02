import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ZTransformPropertiesSection() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                Z 変換を定義に基づいて毎回計算するのは非効率的です。Z 変換が持つ時間シフト則や畳み込み定理などの数学的性質を活用することで、複雑なシステムの解析を代数的な操作だけで簡潔に行うことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">時間シフト則</h2>

            <p>
                離散時間システムにおいて、信号を一定時間遅延させる操作は最も基本的な要素の一つです。Z 変換では、この遅延が単なる <InlineMath math="z^{-1}" /> の乗算として表現されます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-1 (時間シフト則)">
                <p>
                    信号 <InlineMath math="x_n" /> の Z 変換を <InlineMath math="X(z)" /> とするとき、これを <InlineMath math="k" /> ステップ遅延させた信号 <InlineMath math="x_{n-k}" /> の Z 変換は次のようになる：
                </p>
                <BlockMath math="\mathcal{Z}[x_{n-k}] = z^{-k} X(z)" />
                <p>
                    このため、<InlineMath math="z^{-1}" /> は <b>1サンプル遅延演算子 (Unit Delay Operator)</b> と呼ばれる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Z 変換の定義に従って計算する。
                </p>
                <BlockMath math="\mathcal{Z}[x_{n-k}] = \sum_{n=-\infty}^\infty x_{n-k} z^{-n}" />
                <p>
                    ここで変数変換 <InlineMath math="m = n-k" /> （すなわち <InlineMath math="n = m+k" />）を行うと：
                </p>
                <BlockMath math="\begin{aligned} \mathcal{Z}[x_{n-k}] &= \sum_{m=-\infty}^\infty x_m z^{-(m+k)} \\ &= z^{-k} \sum_{m=-\infty}^\infty x_m z^{-m} \\ &= z^{-k} X(z) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体例でこの性質の有効性を確認しましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (単位ステップの遅延と差分)">
                <ol className="list-decimal list-inside space-y-4">
                    <li>
                        <b>遅延信号</b>：前節で求めた単位ステップ信号 <InlineMath math="u[n]" /> を1サンプル遅延させた <InlineMath math="u[n-1]" /> の Z 変換は：
                        <BlockMath math="\mathcal{Z}[u[n-1]] = z^{-1} \cdot \frac{z}{z-1} = \frac{1}{z-1}" />
                    </li>
                    <li>
                        <b>インパルスとの関係</b>：単位ステップとその遅延の差は単位インパルス <InlineMath math="\delta_{n,0} = u[n] - u[n-1]" /> である。Z 変換の線形性を用いると：
                        <BlockMath math="X(z) = \frac{z}{z-1} - \frac{1}{z-1} = \frac{z-1}{z-1} = 1" />
                        これは単位インパルスの Z 変換の結果と完璧に一致する。
                    </li>
                </ol>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">畳み込み定理とラプラス変換との類比</h2>

            <p>
                線形時不変 (LTI) システムの入出力関係を記述する「畳み込み」は、Z 変換によって積の形へと変換されます。これにより、時間領域での複雑な計算を回避できます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-2 (離散畳み込み定理)">
                <p>
                    2つの数列 <InlineMath math="x_n" /> と <InlineMath math="h_n" /> の離散畳み込み <InlineMath math="y_n = \sum_{k=-\infty}^\infty h_k x_{n-k}" /> の Z 変換は、それぞれの Z 変換の積に等しい：
                </p>
                <BlockMath math="Y(z) = H(z)X(z)" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定義通りに代入し、和の順序を交換して計算する。
                </p>
                <BlockMath math="\begin{aligned} Y(z) &= \sum_{n=-\infty}^\infty \left( \sum_{k=-\infty}^\infty h_k x_{n-k} \right) z^{-n} \\ &= \sum_{k=-\infty}^\infty h_k \left( \sum_{n=-\infty}^\infty x_{n-k} z^{-n} \right) \end{aligned}" />
                <p>
                    内側の和に時間シフト則を適用すると：
                </p>
                <BlockMath math="\begin{aligned} Y(z) &= \sum_{k=-\infty}^\infty h_k (z^{-k} X(z)) \\ &= X(z) \sum_{k=-\infty}^\infty h_k z^{-k} \\ &= H(z) X(z) \end{aligned}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-2 (LTI システムの応答計算)">
                <p>
                    インパルス応答が <InlineMath math="h_n = (0.5)^n u[n]" /> である系に、単位ステップ入力 <InlineMath math="x_n = u[n]" /> を加えたときの出力 <InlineMath math="y_n" /> を求める。
                </p>
                <p>
                    それぞれの Z 変換は <InlineMath math="H(z) = \frac{z}{z-0.5}" /> と <InlineMath math="X(z) = \frac{z}{z-1}" /> である。出力の Z 変換は：
                </p>
                <BlockMath math="Y(z) = \frac{z^2}{(z-0.5)(z-1)}" />
                <p>
                    部分分数分解を行うと（詳細は次節 §7.3 で学ぶが）：
                </p>
                <BlockMath math="Y(z) = \frac{2z}{z-1} - \frac{z}{z-0.5}" />
                <p>
                    各項を逆変換することで出力を得る：
                </p>
                <BlockMath math="y_n = (2 - 0.5^n) u[n]" />
                <p>
                    <InlineMath math="n \to \infty" /> で出力が 2（ステップ応答の最終値）に収束する様子が代数的に導かれた。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ラプラス変換との幾何学的類比：s 平面から z 平面へ">
                <p>
                    Z 変換は、サンプリング周期を <InlineMath math="T" /> としたとき、ラプラス変数 <InlineMath math="s" /> と <InlineMath math="z = e^{sT}" /> という関係で結ばれています。この写像により、連続時間系の性質が離散時間系へと次のように転写されます。
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>左半平面 (<InlineMath math="\text{Re}(s) < 0" />) <InlineMath math="\to" /> 単位円内部 (<InlineMath math="|z| < 1" />)</b>：連続系で安定な極の領域は、離散系では単位円の内部に写ります。
                    </li>
                    <li>
                        <b>虚軸 (<InlineMath math="\text{Re}(s) = 0" />) <InlineMath math="\to" /> 単位円周 (<InlineMath math="|z| = 1" />)</b>：周波数応答を司る領域です。虚軸上の無限遠点は、離散系では単位円を一周して元に戻ります（エイリアシングに相当）。
                    </li>
                    <li>
                        <b>右半平面 (<InlineMath math="\text{Re}(s) > 0" />) <InlineMath math="\to" /> 単位円外部 (<InlineMath math="|z| > 1" />)</b>：不安定領域です。
                    </li>
                </ul>
                <p>
                    この類比を理解しておくことで、連続系で培った制御理論の直感を離散系でもそのまま活かすことができます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>時間シフト則により、<InlineMath math="k" /> ステップの遅延は <InlineMath math="z^{-k}" /> の乗算として扱える。</li>
                    <li>畳み込み定理により、LTI システムの入出力関係は Z 変換の積として代数的に表現される。</li>
                    <li>Z 変換とラプラス変換は <InlineMath math="z = e^{sT}" /> で対応しており、<InlineMath math="s" /> 平面の左半平面は <InlineMath math="z" /> 平面の単位円内部に対応する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
