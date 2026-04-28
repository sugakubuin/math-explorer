import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DeRhamTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                多様体論のクライマックスを飾るのが、<strong>ド・ラームの定理（de Rham's theorem）</strong>です。
                この定理は、微分形式という「解析的」な対象を用いて定義されたド・ラームコホモロジーが、単体や連続写像という純粋に「位相的」な対象を用いて定義される特異コホモロジー（代数的トポロジーで学ぶ）と完全に一致することを主張します。
                これは、解析学とトポロジーという数学の2つの巨大な分野が、多様体という舞台で深く結びついていることを示す記念碑的な結果です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ド・ラームの定理の主張</h2>

            <p className="leading-relaxed">
                特異コホモロジー <InlineMath math="H^k_{\mathrm{sing}}(M; \mathbb{R})" /> は、多様体 <InlineMath math="M" /> への連続な単体（三角形や四面体の一般化）の写像の集まりから定義される代数的な群です。
                ド・ラームの定理は、これとド・ラームコホモロジー <InlineMath math="H^k_{\mathrm{dR}}(M)" /> の間に自然な同型写像が存在することを保証します。
            </p>

            <ContentBox type="theorem" title="Theorem 7.5-1 (ド・ラームの定理)">
                <p>
                    <InlineMath math="M" /> を滑らかな多様体とする。任意の整数 <InlineMath math="k \geq 0" /> に対して、ド・ラームコホモロジー群と実係数の特異コホモロジー群は同型である。
                </p>
                <BlockMath math="H^k_{\mathrm{dR}}(M) \cong H^k_{\mathrm{sing}}(M; \mathbb{R})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。まず、ド・ラームコホモロジーから特異コホモロジーへの自然な写像（ド・ラーム写像）<InlineMath math="I : H^k_{\mathrm{dR}}(M) \to H^k_{\mathrm{sing}}(M; \mathbb{R})" /> を構成する。
                </p>
                <p className="mt-2">
                    特異 <InlineMath math="k" />-チェイン <InlineMath math="c = \sum a_i \sigma_i" />（<InlineMath math="\sigma_i" /> は標準 <InlineMath math="k" />-単体 <InlineMath math="\Delta^k" /> から <InlineMath math="M" /> への滑らかな写像）と、閉 <InlineMath math="k" />-形式 <InlineMath math="\omega" /> に対して、ペアリングを積分で定義する。
                </p>
                <BlockMath math="\langle \omega, c \rangle = \int_c \omega = \sum a_i \int_{\Delta^k} \sigma_i^*\omega" />
                <p className="mt-2">
                    この積分がコホモロジー類として well-defined であることは、ストークスの定理（Theorem 6.5-1）の直接の帰結である。
                    実際、<InlineMath math="c" /> がバウンダリ（<InlineMath math="c = \partial b" />）であるとき、<InlineMath math="\int_{\partial b} \omega = \int_b d\omega = 0" />（<InlineMath math="\omega" /> が閉形式だから）となる。
                    また、<InlineMath math="\omega" /> が完全形式（<InlineMath math="\omega = d\eta" />）であるとき、<InlineMath math="c" /> がサイクル（<InlineMath math="\partial c = 0" />）であれば、<InlineMath math="\int_c d\eta = \int_{\partial c} \eta = 0" /> となる。
                    したがって、この積分はコホモロジー類 <InlineMath math="[\omega] \in H^k_{\mathrm{dR}}" /> とホモロジー類 <InlineMath math="[c] \in H_k^{\mathrm{sing}}" /> の間の双線形写像を与え、これは <InlineMath math="H^k_{\mathrm{dR}}" /> から <InlineMath math="(H_k^{\mathrm{sing}})^* \cong H^k_{\mathrm{sing}}" /> への線形写像 <InlineMath math="I" /> を定める。
                </p>
                <p className="mt-2">
                    この <InlineMath math="I" /> が同型であることを示すには、「良い被覆（good cover）」と呼ばれる、有限個の共通部分が常に可縮になるような開被覆を用いる。
                    可縮な開集合上では、ポアンカレの補題により <InlineMath math="H^k_{\mathrm{dR}} = 0" /> であり、特異コホモロジーも <InlineMath math="0" /> であるため、<InlineMath math="I" /> は自明に同型となる。
                    次に、マイヤー・ビエトリス完全系列（ド・ラームと特異の両方）を並べ、ホモロジー代数の「5項補題（Five lemma）」を用いることで、局所的な同型から大域的な同型を帰納的に証明する。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                この同型写像が具体的にどのように働くか、円周 <InlineMath math="S^1" /> の例で確認してみましょう。
            </p>

            <ContentBox type="example" title={<span>Example 7.5-1 (<InlineMath math="S^1" /> の場合)</span>}>
                <p>
                    <InlineMath math="S^1" /> の1次ド・ラームコホモロジー <InlineMath math="H^1_{\mathrm{dR}}(S^1)" /> は、角度形式 <InlineMath math="[d\theta]" /> によって生成される1次元ベクトル空間であった。
                </p>
                <p className="mt-2">
                    一方、特異ホモロジー <InlineMath math="H_1^{\mathrm{sing}}(S^1; \mathbb{R})" /> は、<InlineMath math="S^1" /> を一周するループ（特異1-サイクル）<InlineMath math="c : [0, 1] \to S^1, t \mapsto (\cos 2\pi t, \sin 2\pi t)" /> によって生成される。
                </p>
                <p className="mt-2">
                    ド・ラーム写像 <InlineMath math="I" /> は、閉形式 <InlineMath math="d\theta" /> をこのサイクル <InlineMath math="c" /> 上で積分することで与えられる。
                </p>
                <BlockMath math="I([d\theta])([c]) = \int_c d\theta = \int_0^1 c^*(d\theta) = \int_0^1 2\pi \, dt = 2\pi" />
                <p className="mt-2">
                    この値 <InlineMath math="2\pi \neq 0" /> は、<InlineMath math="[d\theta]" /> が特異コホモロジー群の非零な元（線形汎関数）に対応していることを示しており、同型 <InlineMath math="H^1_{\mathrm{dR}}(S^1) \cong \mathbb{R} \cong H^1_{\mathrm{sing}}(S^1; \mathbb{R})" /> を具体的に実現している。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ド・ラームの定理の意義</h2>

            <p className="leading-relaxed">
                ド・ラームの定理は、多様体論において単なる計算の道具以上の深い意味を持っています。
                最も直接的な帰結として、ド・ラームコホモロジーが「微分構造に依存しない」ことが証明されます。
            </p>

            <ContentBox type="theorem" title="Corollary 7.5-1">
                <p>
                    ド・ラームコホモロジー群 <InlineMath math="H^k_{\mathrm{dR}}(M)" /> は、多様体 <InlineMath math="M" /> の微分構造（アトラスの選び方）に依存しない位相不変量である。
                    すなわち、2つの多様体が同相（連続写像で移り合う）であれば、それらのド・ラームコホモロジー群は同型である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    特異コホモロジー <InlineMath math="H^k_{\mathrm{sing}}(M; \mathbb{R})" /> は、連続写像のみを用いて定義されるため、明らかに位相不変量である（微分構造を一切必要としない）。
                    ド・ラームの定理（Theorem 7.5-1）により、<InlineMath math="H^k_{\mathrm{dR}}(M)" /> はこの位相不変量と同型であるため、<InlineMath math="H^k_{\mathrm{dR}}(M)" /> 自身も位相不変量でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="代数的トポロジーへの接続">
                <p>
                    ド・ラームの定理は、解析学（微分形式・外微分・積分）と代数的トポロジー（単体・チェイン・境界作用素）を見事に橋渡ししました。
                    この定理の存在により、我々は多様体のトポロジーを調べる際に、計算しやすい微分形式を用いたり、幾何学的に直感的な単体を用いたりと、状況に応じて最適な道具を自由に選ぶことができるようになります。
                    この深い関係性については、4-8 代数的トポロジー において、特異ホモロジー・コホモロジーの理論を構築する中でさらに詳しく探求していきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ド・ラームの定理は、ド・ラームコホモロジーと実係数の特異コホモロジーが同型であることを主張する。</li>
                    <li>同型写像（ド・ラーム写像）は、閉形式を特異サイクル上で積分することによって自然に与えられ、その well-definedness はストークスの定理に支えられている。</li>
                    <li>この定理により、ド・ラームコホモロジーが微分構造に依存しない純粋な位相不変量であることが証明される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
