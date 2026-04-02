import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function KleisliAndEilenbergMoore() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                「すべての随伴からモナドが作れる」ことを見ましたが、実はその逆「すべてのモナドは、ある随伴から作られている」ことも証明されています。1つのモナドから随伴を再構成する方法として、極端に対照的な2つの圏「クライスリ圏」と「アイレンベルグ・ムーア圏」が存在します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">クライスリ圏</h2>

            <p className="leading-relaxed">
                モナドが「計算の文脈（副作用）」を表すとき、その文脈を伴った関数を合成するための舞台となるのがクライスリ圏です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.3-1 (クライスリ圏 / Kleisli Category)"
            >
                <p>
                    圏 <InlineMath math="\mathcal{C}" /> 上のモナド <InlineMath math="(T, \mu, \eta)" /> が与えられたとき、<strong>クライスリ圏 <InlineMath math="\mathcal{C}_T" /></strong> を以下のように構成する。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>対象：</strong> 元の圏 <InlineMath math="\mathcal{C}" /> の対象と全く同じ。</li>
                    <li><strong>射：</strong> <InlineMath math="\mathcal{C}_T" /> における <InlineMath math="A" /> から <InlineMath math="B" /> への射は、元の圏における <InlineMath math="f : A \to T(B)" /> のこととする。（これを <InlineMath math="T" />-射と呼ぶ）</li>
                    <li><strong>恒等射：</strong> モナドの単位 <InlineMath math="\eta_A : A \to T(A)" />。</li>
                    <li><strong>合成：</strong> 2つの射 <InlineMath math="f : A \to T(B)" /> と <InlineMath math="g : B \to T(C)" /> のクライスリ合成 <InlineMath math="g \circ_T f" /> は、以下で定義する。
                    <BlockMath math="g \circ_T f = \mu_C \circ T(g) \circ f" />
                    （<InlineMath math="A" /> を <InlineMath math="f" /> で <InlineMath math="T(B)" /> に送り、それに <InlineMath math="T(g)" /> を適用して <InlineMath math="T(T(C))" /> にし、モナドの乗法 <InlineMath math="\mu" /> で <InlineMath math="T(C)" /> に平坦化する。）</li>
                </ul>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.3-1 (べき集合モナドのクライスリ圏)"
            >
                <p>
                    べき集合モナド <InlineMath math="T = \mathcal{P}" /> のクライスリ圏 <InlineMath math="\mathbf{Set}_{\mathcal{P}}" /> を考える。
                </p>
                <p>
                    この圏における射 <InlineMath math="A \to B" /> は、関数 <InlineMath math="A \to \mathcal{P}(B)" /> である。これは「<InlineMath math="A" /> の各要素に対して、<InlineMath math="B" /> の要素の集合（複数の行き先）を割り当てる」写像であり、数学的には <strong><InlineMath math="A" /> と <InlineMath math="B" /> の間の二項関係（Relation）</strong>に他ならない。
                </p>
                <p>
                    クライスリ合成 <InlineMath math="\mu \circ \mathcal{P}(g) \circ f" /> は、「関係 <InlineMath math="f" /> で辿れる先のすべてについて、さらに関係 <InlineMath math="g" /> で辿り、最終的に到達可能なすべての点の和集合をとる」という、<strong>二項関係の合成</strong>そのものである。
                </p>
                <p>
                    （Haskell などのプログラミング言語における `&gt;&gt;=`（bind演算子）は、まさにこのクライスリ合成である。）
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">Eilenberg-Moore 圏（代数の圏）</h2>

            <p className="leading-relaxed">
                クライスリ圏が「最小の」随伴を与える圏であるのに対し、モナドの構造をすべて満たした代数系として捉える「最大の」圏が Eilenberg-Moore 圏です。
            </p>

            <ContentBox
                type="definition"
                title="Definition 7.3-2 (モナドの代数と Eilenberg-Moore 圏)"
            >
                <p>
                    モナド <InlineMath math="(T, \mu, \eta)" /> に対する <strong><InlineMath math="T" />-代数（Eilenberg-Moore 代数）</strong> とは、対象 <InlineMath math="A \in \mathcal{C}" /> と射 <InlineMath math="\alpha : T(A) \to A" />（構造射）の組 <InlineMath math="(A, \alpha)" /> であり、以下の図式を可換にするものである。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>単位律：</strong> <InlineMath math="\alpha \circ \eta_A = \mathrm{id}_A" /></li>
                    <li><strong>結合律：</strong> <InlineMath math="\alpha \circ \mu_A = \alpha \circ T(\alpha)" /> <br/>
                    （<InlineMath math="T(T(A))" /> から <InlineMath math="A" /> へ評価する際、先にモナドの乗法で <InlineMath math="T(A)" /> に潰してから <InlineMath math="\alpha" /> で評価しても、内側の構造から順番に <InlineMath math="\alpha" /> で評価していっても結果が同じである）</li>
                </ul>
                <p>
                    これらの代数を対象とし、代数間の構造を保つ準同型（<InlineMath math="f \circ \alpha = \beta \circ T(f)" />）を射とする圏を <strong>Eilenberg-Moore 圏 <InlineMath math="\mathcal{C}^T" /></strong> と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 7.3-2 (自由群モナドの Eilenberg-Moore 圏)"
            >
                <p>
                    自由群モナド <InlineMath math="T = U \circ F" /> の代数とは何だろうか。
                </p>
                <p>
                    対象は集合 <InlineMath math="A" /> であり、構造射 <InlineMath math="\alpha : T(A) \to A" /> は「<InlineMath math="A" /> の要素を文字とする自由な語（文字列）を受け取って、<InlineMath math="A" /> の要素に評価（計算）する写像」である。
                </p>
                <p>
                    結合律の図式は「括弧のついた式をどう評価しても結果が同じであること（群の結合法則など）」を要請し、単位律は「文字1文字はそのまま評価されること」を要請する。
                    実は、この条件を満たす組 <InlineMath math="(A, \alpha)" /> を与えることは、集合 <InlineMath math="A" /> 上に<strong>群の構造を定義することと完全に同値</strong>である。
                </p>
                <p>
                    すなわち、自由群モナドの Eilenberg-Moore 圏は、元の群の圏と圏同値になる（<InlineMath math="\mathbf{Set}^{UF} \simeq \mathbf{Grp}" />）。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="「群論はモナドの代数論である」"
            >
                <p>
                    圏論の立場からすれば、群や環といった代数系は、あらかじめ「公理」として要素の等式を与えなくても定義できます。
                    「集合の圏の上に特定のモナド <InlineMath math="T" /> を置き、その Eilenberg-Moore 圏 <InlineMath math="\mathcal{C}^T" /> を考える」という操作だけで、普遍代数におけるあらゆる代数系（群、環、加群など）を完全に再現できるのです。これがモナドの持つ強力な代数的側面です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>モナドから随伴を再構成する「計算・副作用」の舞台が<strong>クライスリ圏 <InlineMath math="\mathcal{C}_T" /></strong> である。</li>
                    <li>モナドの構造射 <InlineMath math="T(A) \to A" /> を備えた対象を集めた圏が <strong>Eilenberg-Moore 圏 <InlineMath math="\mathcal{C}^T" /></strong> であり、群や環といった「代数系」の本質を圏論的に取り出したものである。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
