import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AdmissibleFunctions() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                変分問題において「汎関数を最小にする関数」を探すとき、どのような関数でも良いわけではありません。
                問題の物理的・幾何学的な要請に応じて、解の候補となる関数の集合を適切に制限する必要があります。
                本節では、この関数空間（許容関数クラス）と、解の近傍を調べるための「変分」の概念について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">許容関数クラスの定義</h2>

            <p className="leading-relaxed">
                解を探す対象となる関数の集合を<b>許容関数クラス</b>と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (許容関数クラス)">
                <p>
                    変分問題において、汎関数 <InlineMath math="J[u]" /> の極値を探索する関数の集合 <InlineMath math="\mathcal{A}" /> を<b>許容関数クラス</b>（Class of Admissible Functions）と呼ぶ。
                    典型的には、ある程度の滑らかさ（連続微分可能性）と、指定された境界条件を満たす関数の集合として定義される。
                    <BlockMath math="\mathcal{A} = \{ u \in C^k[a, b] \mid u(a) = \alpha, \, u(b) = \beta \}" />
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1 (固定端条件の設定)">
                <p>
                    長さ <InlineMath math="L" /> の弦の振動問題を考える。弦の両端が固定されている場合、変位 <InlineMath math="u(x)" /> は <InlineMath math="u(0) = 0" /> および <InlineMath math="u(L) = 0" /> を満たさなければならない。
                    このとき、許容関数クラスは
                    <BlockMath math="\mathcal{A} = \{ u \in C^2[0, L] \mid u(0) = 0, \, u(L) = 0 \}" />
                    のように設定される。このような端点での値を指定する条件を<b>固定端条件</b>（Fixed Boundary Condition）と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">変分と第一変分の準備</h2>

            <p className="leading-relaxed">
                極値を求めるためには、候補となる関数 <InlineMath math="u" /> を「ほんの少し」動かしてみて、汎関数の値がどのように変化するかを調べる必要があります。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (変分 / 摂動)">
                <p>
                    許容関数 <InlineMath math="u \in \mathcal{A}" /> に対して、微小なパラメータ <InlineMath math="\varepsilon" /> を用いた次のような関数の変化
                    <BlockMath math="u(x) + \varepsilon \eta(x)" />
                    を考える。ここで <InlineMath math="\eta(x)" /> は、すべての <InlineMath math="\varepsilon" /> に対して <InlineMath math="u + \varepsilon \eta" /> が再び許容関数クラス <InlineMath math="\mathcal{A}" /> に属するように選ばれた関数であり、<b>変分方向</b>（Variation direction）と呼ばれる。
                    特に固定端条件 <InlineMath math="u(a) = \alpha, u(b) = \beta" /> の下では、<InlineMath math="\eta(a) = \eta(b) = 0" /> が必要となる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (変分方向の具体例)">
                <p>
                    区間 <InlineMath math="[0, 1]" /> で <InlineMath math="u(0)=0, u(1)=1" /> を満たす許容関数 <InlineMath math="u(x) = x^2" /> を考える。
                    この関数の変分方向として <InlineMath math="\eta(x) = \sin(\pi x)" /> を取ることができる。
                    なぜなら <InlineMath math="\eta(0) = \sin(0) = 0" /> および <InlineMath math="\eta(1) = \sin(\pi) = 0" /> を満たすため、どのような <InlineMath math="\varepsilon" /> に対しても
                    <BlockMath math="(u + \varepsilon \eta)(0) = 0, \quad (u + \varepsilon \eta)(1) = 1" />
                    が保持されるからである。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="無限次元微積分のアナロジー">
                <p>
                    有限次元の多変数関数 <InlineMath math="f(\mathbf{x})" /> の微分において、点 <InlineMath math="\mathbf{x}" /> から方向 <InlineMath math="\mathbf{d}" /> への変化を
                    <BlockMath math="f(\mathbf{x} + \varepsilon \mathbf{d}) = f(\mathbf{x}) + \varepsilon \nabla f \cdot \mathbf{d} + O(\varepsilon^2)" />
                    と展開するように、汎関数でも次のような展開を考える：
                    <BlockMath math="J[u + \varepsilon \eta] = J[u] + \varepsilon \delta J[u; \eta] + O(\varepsilon^2)" />
                    この <InlineMath math="\varepsilon" /> の 1 次の係数 <InlineMath math="\delta J" /> が、次節で定義する<b>第一変分</b>である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                次節では、この「変化の傾き」である第一変分を具体的に計算し、極値が満たすべき数学的な条件（必要条件）を導き出します。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>許容関数クラスは、変分問題の解を探す範囲であり、滑らかさと境界条件で規定される。</li>
                    <li>固定端条件は、端点での関数の値をあらかじめ指定する最も一般的な境界条件である。</li>
                    <li>変分（摂動）は、関数を微小パラメータ <InlineMath math="\varepsilon" /> と変分方向 <InlineMath math="\eta" /> を用いて <InlineMath math="u + \varepsilon \eta" /> と変化させることである。</li>
                    <li>変分方向 <InlineMath math="\eta" /> は、摂動後の関数も境界条件を満たすよう、端点で 0 である必要がある。</li>
                    <li>汎関数の変化を <InlineMath math="\varepsilon" /> で展開したときの 1 次の項が第一変分であり、極値判定の鍵となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
