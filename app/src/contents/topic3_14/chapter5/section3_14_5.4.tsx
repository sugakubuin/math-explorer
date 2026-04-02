import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function LowenheimSkolemTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                完全性定理は「どんな理論にも、無矛盾ならモデルがある」ことを保証しました。レーベンハイム＝スコーレムの定理は、さらに一歩踏み込んで「モデルが存在するなら、そのモデルの『サイズ（濃度）』を自由に調整できる」という、直感に反するような一階述語論理の限界（あるいは柔軟性）を示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">レーベンハイム＝スコーレムの定理</h2>

            <ContentBox
                type="theorem"
                title="Theorem 5.4-1 (下方レーベンハイム＝スコーレムの定理)"
            >
                <p>
                    可算な言語 <InlineMath math="\mathcal{L}" />（記号の数が可算個）の理論 <InlineMath math="T" /> がモデルをもつならば、<InlineMath math="T" /> は<strong>可算なモデル</strong>（対象領域が可算集合であるモデル）をもつ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (直感的な理解)"
            >
                <p>
                    §5.2 のヘンキン構成を思い出すと、作られたモデルの対象領域は「言語の閉項の同値類」であった。
                    可算なアルファベットから有限長の記号列として作られる項の全体は、高々可算無限個しかない。
                    したがって、ヘンキン構成によって自動的に出来上がる「基準となるモデル」のサイズは、必ず可算集合に収まるのである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                逆に、モデルをいくらでも「巨大化」できる定理もあります。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 5.4-2 (上方レーベンハイム＝スコーレムの定理)"
            >
                <p>
                    理論 <InlineMath math="T" /> が無限モデル（無限集合を対象領域とするモデル）をもつならば、任意の無限基数 <InlineMath math="\kappa \geq |\mathcal{L}|" /> に対して、<strong>濃度 <InlineMath math="\kappa" /> の巨大なモデル</strong>をもつ。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    証明はコンパクト性定理を用いる。<InlineMath math="T" /> の言語に <InlineMath math="\kappa" /> 個の新しい定数記号 <InlineMath math="c_\alpha" /> （<InlineMath math="\alpha < \kappa" />）を追加する。
                    そして、新しい理論 <InlineMath math="T'" /> を、<InlineMath math="T" /> に「すべての <InlineMath math="\alpha \neq \beta" /> について <InlineMath math="c_\alpha \neq c_\beta" />」という公理を付け加えたものとする。
                </p>
                <p>
                    <InlineMath math="T'" /> の任意の有限部分集合を考えると、そこには有限個の新しい定数しか現れない。仮定より <InlineMath math="T" /> は無限モデルを持つため、その無限モデルから有限個の相異なる要素を選び出して定数記号の解釈とすれば、有限部分集合は充足可能である。
                </p>
                <p>
                    コンパクト性定理により <InlineMath math="T'" /> 全体もモデルをもつ。このモデルは <InlineMath math="\kappa" /> 個の相異なる要素 <InlineMath math="c_\alpha" /> を含むため、その濃度は少なくとも <InlineMath math="\kappa" /> である（必要なら部分構造をとることで濃度をちょうど <InlineMath math="\kappa" /> にできる）。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">スコーレムのパラドックスと非標準モデル</h2>

            <p className="leading-relaxed">
                下方レーベンハイム＝スコーレムの定理は、一見すると明らかな矛盾（パラドックス）を引き起こすように見えます。
            </p>

            <ContentBox
                type="example"
                title="Example 5.4-1 (スコーレムのパラドックス)"
            >
                <p>
                    現代数学の基礎であるZFC集合論（Chapter 7）の公理系は、可算言語の一階述語論理で書かれている。したがって、ZFCが無矛盾なら<strong>可算なモデル（要素が自然数と同じ数しかない世界）が存在する</strong>（下方定理）。
                </p>
                <p>
                    一方で、カントールの定理によれば、ZFCの内部では<strong>「実数の集合は非可算である（可算より真に大きい）」ことが証明できる</strong>。
                </p>
                <p>
                    要素が可算個しかない「小さな箱（可算モデル）」の中で、「私は非可算だ」と主張する実数集合が存在していることになる。これは矛盾ではないのか？
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="パラドックスの解決"
            >
                <p>
                    これは本当の矛盾ではありません。解決の鍵は「可算（全単射が存在する）」という概念の<strong>相対性</strong>にあります。
                </p>
                <p>
                    モデル <InlineMath math="\mathcal{M}" />（外から見れば可算集合）の中にある「実数の集合 <InlineMath math="R" />」と「自然数の集合 <InlineMath math="N" />」について、<InlineMath math="R" /> の要素は外から数えれば可算個しかありません。
                    しかし、モデルの内部には「<InlineMath math="N" /> と <InlineMath math="R" /> を結ぶ全単射の関数」が存在しないのです。<InlineMath math="\mathcal{M}" /> は「貧弱な世界」なので、外の世界から見れば存在するはずの全単射が、モデルの中には用意されていません。
                </p>
                <p>
                    そのため、モデルの内部の視点（ZFCの論理）からすれば、「全単射がない」＝「非可算である」と正しく証明されるのです。外から見た「絶対的な真理」と、形式体系の内部から見た「相対的な真理」のズレが、このパラドックスの正体です。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 5.4-2 (非標準自然数モデル)"
            >
                <p>
                    自然数を公理化したペアノ算術（PA）を考える。PAは我々が知る通常の自然数 <InlineMath math="\mathbb{N} = \{0, 1, 2, \ldots\}" /> を意図して作られたものである。
                </p>
                <p>
                    しかし、PA に新しい定数 <InlineMath math="c" /> と、無限個の公理「<InlineMath math="c > 0" />, <InlineMath math="c > 1" />, <InlineMath math="c > 2" />, \ldots」を追加した理論をコンパクト性定理で評価すると、これもモデルを持つことがわかる。
                </p>
                <p>
                    このモデルには、すべての標準的な自然数より大きい「無限大の自然数 <InlineMath math="c" />」が含まれている。これを<strong>非標準モデル（non-standard model）</strong>と呼ぶ。
                    一階述語論理の表現力では、公理をいくら並べても「余計な要素（無限大）を含まない、本当の <InlineMath math="\mathbb{N}" /> だけ」をピンポイントで指定し尽くすことは原理的に不可能なのである。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>レーベンハイム＝スコーレムの定理：</strong> 一階述語論理の理論は、モデルのサイズ（可算〜任意の無限）を完全に特定・統制することができない。</li>
                    <li><strong>スコーレムのパラドックス：</strong> 非可算集合の存在を証明できる集合論自体が、可算なモデルを持ちうる。これは「全単射の存在」がモデルに依存する相対的な概念だからである。</li>
                    <li><strong>非標準モデル：</strong> 無限大の数を含むような「意図しない奇妙なモデル」の存在を、一階述語論理では排除できない。</li>
                </ul>
            </ContentBox>
        </section>
    );
}