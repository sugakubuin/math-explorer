import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_2_7_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節では、1つの関数 <InlineMath math="g(\mathbf{x}) = 0" /> で表される制約の下での極値問題を考えました。しかし、実際の応用問題では、複数の制約条件が同時に課されることがよくあります。
                例えば、3次元空間内で「2つの曲面の交線」として定まる曲線上での極値を求めるようなケースです。
                ここでは、ラグランジュの未定乗数法を複数の等式制約がある場合へ自然に拡張します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複数制約の場合</h2>

            <p>
                制約条件が <InlineMath math="m" /> 個（ただし <InlineMath math="m < n" />）ある場合の定理を定式化します。各制約条件ごとに1つずつ、合計 <InlineMath math="m" /> 個の未定乗数 <InlineMath math="\lambda_1, \dots, \lambda_m" /> が必要になります。
            </p>

            <ContentBox type="theorem" title="Theorem 7.3-1 (複数等式制約のラグランジュ条件)">
                <p>
                    <InlineMath math="D \subset \mathbb{R}^n" /> を開集合とし、関数 <InlineMath math="f, g_1, \dots, g_m: D \to \mathbb{R}" /> は <InlineMath math="D" /> 上で <InlineMath math="C^1" /> 級であるとする（<InlineMath math="m < n" />）。
                </p>
                <p className="mt-2">
                    制約条件の集合を <InlineMath math="S = \{\mathbf{x} \in D \mid g_1(\mathbf{x}) = 0, \dots, g_m(\mathbf{x}) = 0\}" /> とし、点 <InlineMath math="\mathbf{a} \in S" /> において、関数 <InlineMath math="f" /> が <InlineMath math="S" /> 上の局所的極値をとると仮定する。
                </p>
                <p className="mt-2">
                    さらに、点 <InlineMath math="\mathbf{a}" /> は制約条件の<strong>正則点</strong>である、すなわち <InlineMath math="m" /> 個の勾配ベクトル
                </p>
                <BlockMath math="\nabla g_1(\mathbf{a}), \dots, \nabla g_m(\mathbf{a})" />
                <p>
                    が線形独立である（これは、<InlineMath math="g_1, \dots, g_m" /> のヤコビ行列のランクが <InlineMath math="m" /> であることと同値）と仮定する。
                </p>
                <p className="mt-2">
                    このとき、ある実数 <InlineMath math="\lambda_1, \dots, \lambda_m" /> が存在して、次の等式が成り立つ：
                </p>
                <BlockMath math="\nabla f(\mathbf{a}) = \sum_{j=1}^m \lambda_j \nabla g_j(\mathbf{a})" />
            </ContentBox>

            <p>
                幾何学的には、点 <InlineMath math="\mathbf{a}" /> において目的関数の勾配ベクトル <InlineMath math="\nabla f(\mathbf{a})" /> が、<InlineMath math="m" /> 個の制約曲面の法線ベクトルたち <InlineMath math="\nabla g_j(\mathbf{a})" /> が張る空間（法空間）に含まれていることを意味します。
                言い換えると、接空間（法空間の直交補空間）の方向に動いても、一次近似の範囲では <InlineMath math="f" /> の値が変化しない（＝停留している）状態です。
            </p>
            <p>
                複数制約の場合のラグランジアン関数 <InlineMath math="L" /> も自然に定義できます。
            </p>
            <BlockMath math="L(\mathbf{x}, \lambda_1, \dots, \lambda_m) = f(\mathbf{x}) - \sum_{j=1}^m \lambda_j g_j(\mathbf{x})" />
            <p>
                このとき、無制約の停留点条件 <InlineMath math="\nabla_{(\mathbf{x}, \mathbf{\lambda})} L = \mathbf{0}" /> を立てれば、自動的に Theorem 7.3-1 の関係式と <InlineMath math="m" /> 個の制約条件が得られます。
            </p>

            <ContentBox type="proof" title="Proof (陰関数定理による概略)">
                <p>
                    証明の方針は1つの制約の場合（Theorem 7.2-1）と同様で、多変数の陰関数定理を利用する。
                </p>
                <p className="mt-2">
                    ヤコビ行列 <InlineMath math="J_{\mathbf{g}}(\mathbf{a})" />（サイズは <InlineMath math="m \times n" />）はランク <InlineMath math="m" /> であるため、列を適当に入れ替えることで、右側の <InlineMath math="m \times m" /> 小行列が正則（行列式が非零）であるとしてよい。
                    変数を <InlineMath math="\mathbf{x} = (\tilde{\mathbf{x}}, \mathbf{y})" />（ここで <InlineMath math="\tilde{\mathbf{x}} \in \mathbb{R}^{n-m}, \mathbf{y} \in \mathbb{R}^m" />）と分割する。
                </p>
                <p className="mt-2">
                    制約条件 <InlineMath math="\mathbf{g}(\tilde{\mathbf{x}}, \mathbf{y}) = \mathbf{0}" /> に対し多変数の陰関数定理を適用すると、<InlineMath math="\tilde{\mathbf{a}}" /> の近傍で定義された <InlineMath math="C^1" /> 級写像 <InlineMath math="\mathbf{\varphi}: \mathbb{R}^{n-m} \to \mathbb{R}^m" /> が存在して、局所的に <InlineMath math="\mathbf{y} = \mathbf{\varphi}(\tilde{\mathbf{x}})" /> と表せる。
                </p>
                <p className="mt-2">
                    合成関数 <InlineMath math="F(\tilde{\mathbf{x}}) = f(\tilde{\mathbf{x}}, \mathbf{\varphi}(\tilde{\mathbf{x}}))" /> は <InlineMath math="\tilde{\mathbf{x}} = \tilde{\mathbf{a}}" /> で無制約の極値をとるので、<InlineMath math="\nabla_{\tilde{\mathbf{x}}} F(\tilde{\mathbf{a}}) = \mathbf{0}" /> である。
                    連鎖律から生じる式と、陰関数の微分公式 <InlineMath math="J_{\mathbf{\varphi}} = - (J_{\mathbf{y}} \mathbf{g})^{-1} (J_{\tilde{\mathbf{x}}} \mathbf{g})" /> を連立して整理することで、ベクトル方程式 <InlineMath math="\nabla f(\mathbf{a}) = \lambda_1 \nabla g_1(\mathbf{a}) + \dots + \lambda_m \nabla g_m(\mathbf{a})" /> を満たす <InlineMath math="\mathbf{\lambda} = (\lambda_1, \dots, \lambda_m)^T" /> が構成できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">制約の独立性</h2>

            <p>
                複数制約の場合にとくに注意すべきは、<strong>制約の正則性条件</strong>（勾配ベクトル群の線形独立性）です。これが満たされない点では、目的関数が実際に極値をとるにもかかわらず、ラグランジュの未定乗数法（の方程式系）が解を持たないことがあります。
            </p>

            <ContentBox type="remark" title="制約の正則性条件：ヤコビ行列の行がランク不足の場合の注意">
                <p>
                    制約条件 <InlineMath math="g_1 = 0, \dots, g_m = 0" /> のヤコビ行列
                </p>
                <BlockMath math="J_{\mathbf{g}} = \begin{pmatrix}
                \frac{\partial g_1}{\partial x_1} & \cdots & \frac{\partial g_1}{\partial x_n} \\
                \vdots & \ddots & \vdots \\
                \frac{\partial g_m}{\partial x_1} & \cdots & \frac{\partial g_m}{\partial x_n}
                \end{pmatrix}" />
                <p className="mt-2">
                    のランクが局所的に <InlineMath math="m" /> 未満となる場合（ベクトル <InlineMath math="\nabla g_1, \dots, \nabla g_m" /> が従属になってしまう点）特異点と呼ばれます。
                </p>
                <p className="mt-2">
                    例えば、立方体の一部や、円錐の頂点などの「尖った」図形上での最適化や、本質的に重複・矛盾を含んだ過剰な制約式を与えてしまった場合に起こります。
                    このような特異点において極値をとる場合、ラグランジュの未定乗数法から得られる連立方程式には解の保証がありません。
                </p>
                <p className="mt-2 text-red-600 dark:text-red-400 font-bold">
                    実用上の教訓：
                </p>
                <p>
                    ラグランジュの未定乗数法で極値を探索する際は、<InlineMath math="\nabla L = \mathbf{0}" /> の解を調べるだけでなく、<strong>制約の正則性が崩れる点（<InlineMath math="J_{\mathbf{g}}" /> がフルランクでない点）が制約集合 <InlineMath math="S" /> 上に存在するかどうかも別途チェックする</strong>構造的な配慮が必要です。真の極値はそのような特異点に隠れている可能性があります。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複数の等式制約 <InlineMath math="g_1 = 0, \dots, g_m = 0" /> (<InlineMath math="m < n" />) の下での極値問題では、<InlineMath math="m" /> 個の未定乗数を導入する。</li>
                    <li>極値の必要条件は、目的関数の勾配が制約関数の勾配の線形結合で表されること。極値の候補点は <InlineMath math="L(\mathbf{x}, {\boldsymbol \lambda}) = f(\mathbf{x}) - \sum \lambda_j g_j(\mathbf{x})" /> の停留点として求まる。</li>
                    <li>複数制約の場合も、計算が正当化されるためには、極値候補点において制約の勾配ベクトルたち <InlineMath math="\nabla g_1, \dots, \nabla g_m" /> が線形独立（正則性条件）であることが必須である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
