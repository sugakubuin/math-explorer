import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DualSpaceAndNorm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                本章から、関数解析における最も洗練された視点である「双対性（duality）」の世界に入ります。空間の各点を直接調べるのではなく、空間上に定義されたすべての「観測機（スカラーを返す線形作用素）」を通してみることで、空間の真の姿を浮かび上がらせる手法です。本節では、その観測機たち自身が作り出す空間「双対空間」について論じます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対空間の定義</h2>

            <p>
                Chapter 3でも軽く触れましたが、改めて双対空間を厳密に定義します。
            </p>

            <ContentBox type="definition" title="Definition 5.1-1 (双対空間)">
                <p>
                    ノルム空間 <InlineMath math="X" /> 上のすべての連続線形汎関数（スカラー体 <InlineMath math="\mathbb{K}" /> への有界線形作用素）のなす集合を <InlineMath math="X" /> の<b>双対空間（dual space）</b>と呼び、<InlineMath math="X^*" /> と表す。すなわち <InlineMath math="X^* = B(X, \mathbb{K})" /> である。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 5.1-2 (双対ノルム)">
                <p>
                    <InlineMath math="X^*" /> に属する元（汎関数） <InlineMath math="f" /> は、作用素ノルムの一般論に従い、以下の<b>双対ノルム（dual norm）</b>によって長さを測られる。
                </p>
                <BlockMath math="\|f\| = \sup_{\|x\| \leq 1} |f(x)|" />
            </ContentBox>

            <p>
                行き先の空間であるスカラー体 <InlineMath math="\mathbb{K}" /> が完備であることから、双対空間に関する極めて重要な事実がただちに従います。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-1">
                <p>
                    任意のノルム空間 <InlineMath math="X" /> に対して、その双対空間 <InlineMath math="X^*" /> は常にバナッハ空間（完備なノルム空間）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    Chapter 3 で示した Theorem 3.2-1（行き先の空間がバナッハ空間ならば、作用素空間 <InlineMath math="B(X,Y)" /> 全体もバナッハ空間になる）において、<InlineMath math="Y = \mathbb{K}" /> と置いた特別な場合である。<InlineMath math="\mathbb{K}" /> は完備であるため、<InlineMath math="X" /> の完備性に関わらず <InlineMath math="X^* = B(X, \mathbb{K})" /> はバナッハ空間となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">第二双対空間と標準埋め込み</h2>

            <p>
                <InlineMath math="X^*" /> がノルム空間（しかも完備）になったということは、当然「そのさらに双対空間」を考えることができます。<InlineMath math="X^*" /> 上のすべての連続線形汎関数のなす空間を、<InlineMath math="X" /> の<b>第二双対空間（second dual space）</b>と呼び、<InlineMath math="X^{**}" /> （または <InlineMath math="(X^*)^*" />）と表します。
            </p>
            <p>
                ここで驚くべきことに、元々の空間 <InlineMath math="X" /> における各ベクトルは、ごく自然な方法によってこの第二双対空間 <InlineMath math="X^{**}" /> の要素とみなすことができます。
            </p>

            <ContentBox type="definition" title="Definition 5.1-3 (第二双対空間と標準埋め込み)">
                <p>
                    元の空間のベクトル <InlineMath math="x \in X" /> をただ一つ固定すると、「双対空間の元 <InlineMath math="f \in X^*" /> を受け取って、それに <InlineMath math="x" /> を食べさせてできたスカラー値 <InlineMath math="f(x)" /> を返す関数」を作ることができる。これを <InlineMath math="J(x)" /> と表記する。
                </p>
                <BlockMath math="J(x)(f) = f(x) \quad (f \in X^*)" />
                <p>
                    この <InlineMath math="J(x)" /> は <InlineMath math="X^*" /> 上の連続線形汎関数となるため、<InlineMath math="J(x) \in X^{**}" /> である。このようにして定まる写像 <InlineMath math="J : X \to X^{**}" /> を<b>標準埋め込み（canonical embedding）</b>と呼ぶ。
                </p>
            </ContentBox>

            <p>
                数学において「自然な埋め込み」が存在するとき、元の空間の構造（特に距離・ノルム）がどれくらい保たれるかが重要です。関数解析におけるこの標準埋め込みは、元ベクトルの長さを完全に保存する等長写像となります。
            </p>

            <ContentBox type="proposition" title="Proposition 5.1-2">
                <p>
                    標準埋め込み <InlineMath math="J : X \to X^{**}" /> は等長写像である。すなわち、任意の <InlineMath math="x \in X" /> について <InlineMath math="\|J(x)\|_{X^{**}} = \|x\|_X" /> が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="J(x)" /> の作用素ノルムの定義を考えると、ノルム <InlineMath math="1" /> 以下の <InlineMath math="f" /> について上限を取ればよい。
                </p>
                <BlockMath math="\|J(x)\| = \sup_{\|f\| \leq 1} |J(x)(f)| = \sup_{\|f\| \leq 1} |f(x)|" />
                <p>
                    各 <InlineMath math="f" /> に対して定義により <InlineMath math="|f(x)| \leq \|f\| \|x\|_X \leq \|x\|_X" /> となるため、上限を取っても <InlineMath math="\|J(x)\| \leq \|x\|_X" /> がわかる。
                </p>
                <p>
                    逆向きの不等式であるが、ここで前章で学んだハーン-バナッハの定理の系（Corollary 4.2-1）を用いる。もし <InlineMath math="x \neq 0" /> ならば、<InlineMath math="f(x) = \|x\|_X" /> かつ <InlineMath math="\|f\| = 1" /> を満たす汎関数 <InlineMath math="f_0 \in X^*" /> が必ず存在する。この特定の <InlineMath math="f_0" /> に対しては
                </p>
                <BlockMath math="|J(x)(f_0)| = |f_0(x)| = \|x\|_X" />
                <p>
                    となる。<InlineMath math="f_0" /> はノルムが <InlineMath math="1" /> 以下という <InlineMath math="\sup" /> の条件（集合）に属するため、この集合の上限は特定の元を代入した値以上でなければならない。すなわち
                </p>
                <BlockMath math="\|J(x)\| = \sup_{\|f\| \leq 1} |J(x)(f)| \geq |J(x)(f_0)| = \|x\|_X" />
                <p>
                    両向きの不等式が示されたため、<InlineMath math="\|J(x)\| = \|x\|_X" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 5.1-1 (<InlineMath math="\ell^1 \to \ell^{**}" />)</span>}>
                <p>
                    標準埋め込みが「全射」になる空間は格別素性がよく、「反射的空間」と呼ばれます（§5.4で詳しく扱います）。しかし必ずしも全射にはなりません。
                </p>
                <p>
                    例えば、数列空間 <InlineMath math="\ell^1" /> を考えると、その双対空間は有界数列の空間 <InlineMath math="\ell^\infty" /> と同型になります。すると第二双対空間 <InlineMath math="(\ell^1)^{**}" /> は <InlineMath math="(\ell^\infty)^*" /> となるのですが、この空間は非常に巨大であり、標準埋め込みによる像 <InlineMath math="J(\ell^1)" /> は <InlineMath math="(\ell^\infty)^*" /> 全体を全く覆い尽くせません。すなわち全射になりません。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>双対空間 <InlineMath math="X^*" /> は、連続線形汎関数を集めた空間であり常にバナッハ空間となる（Proposition 5.1-1）。</li>
                    <li>元空間のベクトル <InlineMath math="x" /> は、自然な代入操作 <InlineMath math="f \mapsto f(x)" /> によって第二双対空間 <InlineMath math="X^{**}" /> の元と見なすことができる。</li>
                    <li>ハーン-バナッハ定理の保証により、この標準埋め込みはベクトルの長さを保つ等長写像となる（Proposition 5.1-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
