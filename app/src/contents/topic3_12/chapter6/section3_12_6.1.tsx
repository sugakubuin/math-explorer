import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SectionDefinitionOfCoveringMap() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                基本群の計算（特に円周の基本群）において「直線を巻き付ける」というアイデアを用いましたが、これを一般の空間に対して厳密に定式化したものが「被覆空間（covering space）」の理論です。この章では、被覆写像の定義とその基本的な性質について学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">被覆写像の定義と例</h2>

            <p className="leading-relaxed">
                局所的に見れば「複数のコピーが重なっている」ように見える連続写像を被覆写像と呼びます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 6.1-1 (被覆写像と被覆空間)"
            >
                <p>
                    2つの位相空間 <InlineMath math="\tilde{X}" /> と <InlineMath math="X" /> に対して、全射な連続写像 <InlineMath math="p : \tilde{X} \to X" /> が<strong>被覆写像（covering map）</strong>であるとは、<InlineMath math="X" /> の任意の点 <InlineMath math="x" /> に対して、次のような条件を満たす開近傍 <InlineMath math="U" />（<InlineMath math="x \in U" />）が存在することである。
                </p>
                <p>
                    <InlineMath math="U" /> の逆像 <InlineMath math="p^{-1}(U)" /> は、互いに素な開集合の和として次のように表される。
                    <BlockMath math="p^{-1}(U) = \bigsqcup_{\alpha \in A} V_\alpha" />
                    さらに、各 <InlineMath math="\alpha \in A" /> について、制限写像 <InlineMath math="p|_{V_\alpha} : V_\alpha \to U" /> は<strong>同相写像</strong>となる。
                </p>
                <p>
                    このとき、<InlineMath math="\tilde{X}" /> を <InlineMath math="X" /> の<strong>被覆空間（covering space）</strong>と呼び、<InlineMath math="X" /> を底空間（base space）と呼ぶ。また、<InlineMath math="U" /> を均等被覆近傍（evenly covered neighborhood）と呼び、各 <InlineMath math="V_\alpha" /> を <InlineMath math="U" /> 上の<strong>シート（sheet）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 6.1-1 (<InlineMath math="p : \mathbb{R} \to S^1" /> は被覆写像)</span>}
            >
                <p>
                    指数写像 <InlineMath math="p : \mathbb{R} \to S^1" />、<InlineMath math="p(t) = e^{2\pi i t}" /> は被覆写像である。
                </p>
                <p>
                    底空間 <InlineMath math="S^1" /> 上の点として例えば <InlineMath math="1" /> をとり、その開近傍として「点 <InlineMath math="-1" /> を除いた開いた弧」<InlineMath math="U = S^1 \setminus \{-1\}" /> を考える。<br />
                    この <InlineMath math="U" /> の逆像 <InlineMath math="p^{-1}(U)" /> は、実数直線 <InlineMath math="\mathbb{R}" /> 上の互いに交わらない開区間の無限個の和集合となる。
                    <BlockMath math="p^{-1}(U) = \bigsqcup_{n \in \mathbb{Z}} \left( n - \frac{1}{2}, n + \frac{1}{2} \right)" />
                </p>
                <p>
                    各開区間 <InlineMath math="V_n = (n - 1/2, n + 1/2)" /> において、<InlineMath math="p" /> は <InlineMath math="V_n" /> を <InlineMath math="U" /> に全単射で写し、その逆写像も連続（多価関数の対数関数の主値をとる操作に相当）であるため、<InlineMath math="p|_{V_n} : V_n \to U" /> は同相写像である。他の点の近傍についても同様に均等被覆近傍が取れるため、<InlineMath math="p" /> は被覆写像である。この被覆はシートが無限個（<InlineMath math="\mathbb{Z}" /> 個）ある「無限重被覆」である。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 6.1-2 (<InlineMath math="n" />-重被覆写像)</span>}
            >
                <p>
                    円周 <InlineMath math="S^1" /> から <InlineMath math="S^1" /> 自身への写像 <InlineMath math="p_n : S^1 \to S^1" /> を <InlineMath math="p_n(z) = z^n" />（<InlineMath math="n" /> は 2 以上の整数）で定める。これは円周を <InlineMath math="n" /> 回巻き付ける写像である。
                </p>
                <p>
                    底空間の <InlineMath math="1 \in S^1" /> に対する逆像 <InlineMath math="p_n^{-1}(1)" /> は <InlineMath math="\{ e^{2\pi i k / n} \mid k=0,1,\ldots,n-1 \}" /> の <InlineMath math="n" /> 個の点からなる。この写像は各点の周りで局所的に同相であり、どの点の逆像も常に <InlineMath math="n" /> 枚のシートからなる。このような被覆を <strong><InlineMath math="n" />-重被覆（<InlineMath math="n" />-fold covering）</strong>と呼ぶ。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">被覆写像の基本性質</h2>

            <p className="leading-relaxed">
                定義から直ちに導かれる被覆写像の局所的な性質を確認します。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 6.1-1 (被覆写像は局所同相)"
            >
                <p>
                    被覆写像 <InlineMath math="p : \tilde{X} \to X" /> は<strong>局所同相写像（local homeomorphism）</strong>である。すなわち、<InlineMath math="\tilde{X}" /> の任意の点 <InlineMath math="\tilde{x}" /> に対して、<InlineMath math="\tilde{x}" /> の開近傍 <InlineMath math="\tilde{U}" /> と <InlineMath math="p(\tilde{x})" /> の開近傍 <InlineMath math="U" /> が存在して、<InlineMath math="p|_{\tilde{U}} : \tilde{U} \to U" /> が同相写像となる。
                </p>
                <p>
                    特に、被覆写像 <InlineMath math="p" /> は常に<strong>開写像（open map）</strong>（開集合を開集合に写す写像）である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    <b>局所同相性：</b><InlineMath math="\tilde{x} \in \tilde{X}" /> に対して <InlineMath math="x = p(\tilde{x})" /> とおく。被覆写像の定義より、<InlineMath math="x" /> の均等被覆近傍 <InlineMath math="U" /> が存在し、<InlineMath math="p^{-1}(U) = \bigsqcup V_\alpha" /> となる。<InlineMath math="\tilde{x}" /> はこのいずれかのシート（これを <InlineMath math="V_{\alpha_0}" /> とする）に含まれる。定義より <InlineMath math="p|_{V_{\alpha_0}} : V_{\alpha_0} \to U" /> は同相写像であるため、これが求める局所同相性である。
                </p>
                <p>
                    <b>開写像性：</b><InlineMath math="\tilde{X}" /> の任意の開集合 <InlineMath math="\tilde{W}" /> をとる。<InlineMath math="p(\tilde{W})" /> が <InlineMath math="X" /> で開集合であることを示せばよい。<InlineMath math="p(\tilde{W})" /> の任意の点 <InlineMath math="x" /> に対して、<InlineMath math="p(\tilde{x}) = x" /> となる <InlineMath math="\tilde{x} \in \tilde{W}" /> が存在する。上で構成した局所同相な近傍 <InlineMath math="V_{\alpha_0}" /> を用いると、<InlineMath math="\tilde{W} \cap V_{\alpha_0}" /> は <InlineMath math="\tilde{X}" /> の開集合であり、同相写像 <InlineMath math="p|_{V_{\alpha_0}}" /> によって <InlineMath math="X" /> の開集合に写される。これが <InlineMath math="x" /> を含む <InlineMath math="p(\tilde{W})" /> の開近傍となるため、<InlineMath math="p(\tilde{W})" /> は開集合である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="被覆写像と位相不変量"
            >
                <p>
                    被覆写像は局所的には単なる同相写像（コピー）に過ぎませんが、大域的な「シートの繋がり方（ねじれ方）」に空間の位相的な情報が隠されています。
                </p>
                <p>
                    空間 <InlineMath math="X" /> がどのような被覆空間 <InlineMath math="\tilde{X}" /> を持ち得るか、あるいはシートの枚数（何重被覆か）がいくつあるかという問題は、<InlineMath math="X" /> の基本群 <InlineMath math="\pi_1(X)" /> の構造と完全に連動しています。次章（Chapter 7）では、この事実が「ガロア理論」と非常に似た美しい対応関係（ガロア対応）を持つことを見ていきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>被覆写像とは、底空間の各点の近くで、逆像が「互いに交わらない同相なシートの重なり」になっている連続写像のことである。</li>
                    <li>代表的な例として、実数直線から円周への指数写像（無限重被覆）や、円周から円周への <InlineMath math="n" /> 乗写像（<InlineMath math="n" />-重被覆）がある。</li>
                    <li>被覆写像は必ず局所同相写像であり、したがって開写像になる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
