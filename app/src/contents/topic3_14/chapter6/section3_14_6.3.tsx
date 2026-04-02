import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FirstIncompletenessTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                前節で準備した「ゲーデル数化」と「対角化補題」という武器を組み合わせることで、いよいよゲーデルの第一不完全性定理の証明に到達します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ゲーデル文の構成と第一不完全性定理</h2>

            <ContentBox
                type="theorem"
                title="Theorem 6.3-1 (ゲーデルの第一不完全性定理 / First Incompleteness Theorem)"
            >
                <p>
                    ペアノ算術（PA）が無矛盾であるならば、PA からは<strong>証明も反証もできない文（決定不能命題）</strong>が存在する。
                </p>
                <p>
                    すなわち、ある閉論理式 <InlineMath math="G" /> が存在して、
                    <BlockMath math="\mathrm{PA} \nvdash G \quad \text{かつ} \quad \mathrm{PA} \nvdash \neg G" />
                    が成り立つ。このような体系は「不完全である」と言われる。
                    （※PA だけでなく、自然数の算術を含み、アルゴリズム的に公理が判定可能な任意の無矛盾な体系についても同様に成り立つ。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    証明の鍵は「<strong>私は証明できない</strong>」と主張する文（ゲーデル文） <InlineMath math="G" /> を作ることである。
                </p>
                <p>
                    前節で定義した述語 <InlineMath math="\mathrm{Proof}(y, x)" /> （<InlineMath math="y" /> は式 <InlineMath math="x" /> の証明である）を用いる。
                    「式 <InlineMath math="x" /> は証明不可能である」という主張は次のように書ける。
                    <BlockMath math="\varphi(x) \equiv \neg\exists y\,\mathrm{Proof}(y, x)" />
                </p>
                <p>
                    この <InlineMath math="\varphi(x)" /> に対して対角化補題を適用すると、次の性質を満たす文 <InlineMath math="G" /> が得られる。
                    <BlockMath math="\mathrm{PA} \vdash G \leftrightarrow \neg\exists y\,\mathrm{Proof}(y, \ulcorner G \urcorner)" />
                    これがゲーデル文である。この <InlineMath math="G" /> が証明も反証もできないことを示す。
                </p>
                <ol className="list-decimal list-inside space-y-4 mt-4">
                    <li>
                        <strong><InlineMath math="\mathrm{PA} \vdash G" /> と仮定して矛盾を導く：</strong><br/>
                        もし <InlineMath math="G" /> が証明可能だとすると、その証明の列が存在する。その証明のゲーデル数を <InlineMath math="k" /> とすると、<InlineMath math="\mathrm{Proof}(k, \ulcorner G \urcorner)" /> が真実であり、PAでも証明できる。<br/>
                        したがって <InlineMath math="\mathrm{PA} \vdash \exists y\,\mathrm{Proof}(y, \ulcorner G \urcorner)" /> となる。<br/>
                        一方、<InlineMath math="G" /> 自身の定義より <InlineMath math="G" /> は「証明は存在しない」と同値であったため、仮定より <InlineMath math="\mathrm{PA} \vdash \neg\exists y\,\mathrm{Proof}(y, \ulcorner G \urcorner)" /> も成り立つことになる。<br/>
                        これは PA が矛盾していることを意味し、PA の無矛盾性に反する。ゆえに <InlineMath math="\mathrm{PA} \nvdash G" /> である。
                    </li>
                    <li>
                        <strong><InlineMath math="\mathrm{PA} \vdash \neg G" /> と仮定して矛盾を導く：</strong><br/>
                        （※ゲーデルの元の証明ではここで「<InlineMath math="\omega" />-無矛盾性」という少し強い仮定を要したが、本質的な流れは同じである）<br/>
                        もし <InlineMath math="\neg G" /> が証明できるなら、<InlineMath math="G" /> の定義より <InlineMath math="\exists y\,\mathrm{Proof}(y, \ulcorner G \urcorner)" /> が証明できることになる（「<InlineMath math="G" /> の証明が存在する」と言っている）。<br/>
                        しかし1番の議論で「<InlineMath math="G" /> は証明不可能（<InlineMath math="\mathrm{PA} \nvdash G" />）」であることが既に確定しているため、実際の自然数 <InlineMath math="y=0, 1, 2, \ldots" /> のどれを調べても証明にはなっていない。<br/>
                        にもかかわらず PA は「存在する」と証明してしまっていることになり、体系として健全でない（広義の矛盾）状態になる。ゆえに <InlineMath math="\mathrm{PA} \nvdash \neg G" /> である。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">決定不能命題の解釈とロッサーの改良</h2>

            <ContentBox
                type="example"
                title="Example 6.3-1 (ゲーデル文は真か偽か？)"
            >
                <p>
                    ゲーデル文 <InlineMath math="G" /> は「私は証明できない」と言っており、実際のところ PA では証明できなかった。
                </p>
                <p>
                    ということは、<strong><InlineMath math="G" /> の言っている主張は（自然数の世界というメタの視点から見れば）「真実」</strong>なのである。
                    つまり、「真実であるにもかかわらず、その公理系からは証明できない数学的命題」が存在することが確定したのである。
                </p>
                <p>
                    では、「<InlineMath math="G" /> は真なのだから、<InlineMath math="G" /> を新しい公理として PA に追加すれば完全になるのではないか？」と考えるかもしれない。
                    しかし、新しい体系 <InlineMath math="\mathrm{PA} + \{G\}" /> に対して全く同じ操作を行うと、新たなゲーデル文 <InlineMath math="G'" />（「私は PA+G では証明できない」）が生まれてしまう。
                    このモグラ叩きは無限に続き、アルゴリズムで列挙できる公理系である限り、決して「完成」することはない。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ロッサーの定理"
            >
                <p>
                    ゲーデルのオリジナルの証明では、「<InlineMath math="\mathrm{PA} \nvdash \neg G" />」を示す際に「<InlineMath math="\omega" />-無矛盾性」という、通常の無矛盾性より少し強い（使い勝手の悪い）仮定を必要としました。
                </p>
                <p>
                    1936年に J. Barkley Rosser は、ゲーデル文の代わりに<strong>「もし私の証明が存在するなら、それよりも短いステップで私の反証が存在する」</strong>と主張する巧妙な文（ロッサー文）を構成しました。
                    このロッサー文を用いると、純粋な「無矛盾性」の仮定だけで <InlineMath math="\mathrm{PA} \nvdash R" /> かつ <InlineMath math="\mathrm{PA} \nvdash \neg R" /> が証明できることが示されました。現在標準的に語られる不完全性定理は、このロッサーの改良版を含んでいます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li>算術を含む無矛盾な公理系には、必ず「証明も反証もできない文（決定不能命題）」が存在する（<strong>第一不完全性定理</strong>）。</li>
                    <li>その命題（ゲーデル文）は、「私はこの体系で証明不可能である」という自己言及の構造を持っている。</li>
                    <li>ゲーデル文は形式的には証明不能であるが、メタレベルの意味論的視点（標準モデル）から見れば「真」である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}