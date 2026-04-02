import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RepresentableFunctors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                対象をその要素から理解するのではなく、他の対象との関係性（射）から完全に理解しようとするのが圏論の基本的な視点です。その際、ある対象からの（または対象への）射の全体が、ある関手と本質的に同じ振る舞いをすることがあります。このような関手を「表現可能関手」と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">表現可能関手の定義</h2>

            <ContentBox
                type="definition"
                title="Definition 4.1-1 (表現可能関手)"
            >
                <p>
                    局所小圏 <InlineMath math="\mathcal{C}" /> から集合の圏 <InlineMath math="\mathbf{Set}" /> への共変関手 <InlineMath math="F : \mathcal{C} \to \mathbf{Set}" /> が<strong>表現可能（representable）</strong>であるとは、<InlineMath math="\mathcal{C}" /> のある対象 <InlineMath math="A" /> と、自然同型
                    <BlockMath math="\alpha : \mathrm{Hom}(A, -) \xrightarrow{\sim} F" />
                    が存在することである。このとき、対 <InlineMath math="(A, \alpha)" /> を <InlineMath math="F" /> の<strong>表現（representation）</strong>といい、<InlineMath math="A" /> を表現対象という。
                </p>
                <p>
                    反変関手 <InlineMath math="F : \mathcal{C}^{op} \to \mathbf{Set}" /> の表現可能性も同様に、反変 hom 関手を用いた自然同型
                    <BlockMath math="\mathrm{Hom}(-, A) \cong F" />
                    の存在として定義される。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 4.1-1 (忘却関手の表現可能性)"
            >
                <p>
                    群の圏 <InlineMath math="\mathbf{Grp}" /> の忘却関手 <InlineMath math="U : \mathbf{Grp} \to \mathbf{Set}" /> は表現可能である。
                </p>
                <p>
                    表現対象として、整数の加法群 <InlineMath math="\mathbb{Z}" /> をとる。任意の群 <InlineMath math="G" /> に対して、群準同型 <InlineMath math="f : \mathbb{Z} \to G" /> は、「<InlineMath math="1 \in \mathbb{Z}" /> をどの元 <InlineMath math="g \in G" /> に送るか」という選択によって完全に一意に定まる。
                    すなわち、全単射
                    <BlockMath math="\mathrm{Hom}_{\mathbf{Grp}}(\mathbb{Z}, G) \cong U(G)" />
                    が自然に存在するため、忘却関手 <InlineMath math="U" /> は <InlineMath math="\mathbb{Z}" /> によって表現される。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                もう一つ、環論における重要な関手の表現可能性の例を見てみましょう。
            </p>

            <ContentBox
                type="example"
                title="Example 4.1-2 (行列環の表現可能性)"
            >
                <p>
                    可換環の圏 <InlineMath math="\mathbf{Ring}" /> において、各環 <InlineMath math="R" /> に <InlineMath math="n \times n" /> 行列環を対応させる関手 <InlineMath math="M_n(R)" /> を考える。
                    この関手も表現可能であり、表現対象は <InlineMath math="n^2" /> 個の変数を持つ多項式環（に適当な関係式を入れたもの）となる。
                    <BlockMath math="M_n(R) \cong \mathrm{Hom}_{\mathbf{Ring}}(\mathbb{Z}[x_{11}, \ldots, x_{nn}], R)" />
                    つまり、「多項式環からの準同型を決めること」と「行列を1つ指定すること」が完全に同じ情報を持っているということである。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">普遍元と表現可能性</h2>

            <p className="leading-relaxed">
                表現可能関手における自然同型を、より扱いやすい「普遍元」という1つの要素として特徴づけることができます。
            </p>

            <ContentBox
                type="definition"
                title="Definition 4.1-2 (普遍元 / Universal Element)"
            >
                <p>
                    関手 <InlineMath math="F : \mathcal{C} \to \mathbf{Set}" /> の表現 <InlineMath math="(A, \alpha)" /> が与えられたとき、自然同型の成分 <InlineMath math="\alpha_A : \mathrm{Hom}(A, A) \xrightarrow{\sim} F(A)" /> によって恒等射 <InlineMath math="\mathrm{id}_A" /> を送った先の元
                    <BlockMath math="u = \alpha_A(\mathrm{id}_A) \in F(A)" />
                    を<strong>普遍元</strong>という。
                </p>
                <p>
                    逆に、表現対象 <InlineMath math="A" /> と普遍元 <InlineMath math="u \in F(A)" /> が与えられれば、任意の <InlineMath math="B" /> と射 <InlineMath math="f : A \to B" /> に対して
                    <BlockMath math="\alpha_B(f) = F(f)(u)" />
                    と定めることで、自然同型 <InlineMath math="\alpha" /> を完全に再構成することができる。
                </p>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 4.1-1 (普遍性による特徴づけ)"
            >
                <p>
                    元 <InlineMath math="u \in F(A)" /> が普遍元であるための必要十分条件は、任意の対象 <InlineMath math="B \in \mathcal{C}" /> と任意の元 <InlineMath math="v \in F(B)" /> に対して、
                    ある一意な射 <InlineMath math="f : A \to B" /> が存在して
                    <BlockMath math="F(f)(u) = v" />
                    となることである。これが「普遍性（universal property）」の一般的な定式化である。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    自然同型 <InlineMath math="\alpha : \mathrm{Hom}(A, -) \xrightarrow{\sim} F" /> が存在すると仮定し、<InlineMath math="u = \alpha_A(\mathrm{id}_A)" /> と置く。
                </p>
                <p>
                    任意の <InlineMath math="B \in \mathcal{C}" /> と <InlineMath math="v \in F(B)" /> をとる。<InlineMath math="\alpha_B : \mathrm{Hom}(A, B) \to F(B)" /> は全単射なので、<InlineMath math="\alpha_B(f) = v" /> を満たす射 <InlineMath math="f : A \to B" /> が一意に存在する。
                </p>
                <p>
                    ここで、<InlineMath math="\alpha" /> は自然同型なので、射 <InlineMath math="f : A \to B" /> に関する自然性条件 <InlineMath math="\alpha_B \circ (f \circ -) = F(f) \circ \alpha_A" /> が成り立つ。
                    両辺に <InlineMath math="\mathrm{id}_A \in \mathrm{Hom}(A, A)" /> を代入すると、
                    <BlockMath math="\alpha_B(f \circ \mathrm{id}_A) = F(f)(\alpha_A(\mathrm{id}_A))" />
                    すなわち
                    <BlockMath math="\alpha_B(f) = F(f)(u)" />
                    となる。したがって <InlineMath math="F(f)(u) = v" /> を満たす <InlineMath math="f" /> が一意に存在することが示された。
                </p>
                <p>
                    逆も同様に、この性質を持つ <InlineMath math="u" /> から構成した写像 <InlineMath math="\alpha_B(f) = F(f)(u)" /> が全単射を与え、自然性を満たすことが確認できる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="普遍性の遍在"
            >
                <p>
                    自由群、テンソル積、直積、直和、完備化など、数学のあらゆる分野に現れる「自由な構成」や「普遍的な構成」は、例外なくこの「普遍元」の言語で統一的に記述することができます。
                </p>
                <p>
                    特定の対象が持つ性質を、その内部構造（要素）ではなく「他のすべての対象への関係性（関手と自然同型）」によって完全に特徴づけられるというこの視点は、圏論の核心をなすものです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.1 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>hom 関手と同型になる関手を<strong>表現可能関手</strong>と呼ぶ。</li>
                    <li>表現可能関手は、表現対象 <InlineMath math="A" /> とそこからの<strong>普遍元</strong>によって完全に決定される。</li>
                    <li>数学における「普遍性（universal property）」は、表現可能関手と普遍元の存在として極めて厳密かつ一般的に定式化される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
