import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SoundnessAndCompletenessPropositional() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                ここまでに、真理表による意味論的な「トートロジー（<InlineMath math="\models" />）」と、公理と推論規則による構文論的な「証明可能性（<InlineMath math="\vdash" />）」という、全く出自の異なる2つの概念を導入しました。この2つが実は完全に一致するという事実が、数理論理学の最も美しい成果の一つです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">健全性定理</h2>

            <p className="leading-relaxed">
                まずは、「形式的に証明できるものは、すべて意味論的にも正しい（嘘は証明できない）」という性質を確認します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.4-1 (命題論理の健全性定理 / Soundness Theorem)"
            >
                <p>
                    ヒルベルト流公理体系で証明可能な論理式は、すべてトートロジーである。
                    <BlockMath math="\vdash \varphi \implies \models \varphi" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    証明の長さ <InlineMath math="n" /> に関する数学的帰納法で証明する。
                </p>
                <p>
                    <strong>ベースケース：</strong> 証明列が1行（<InlineMath math="n=1" />）の場合、その式は公理 (H1), (H2), (H3) のいずれかである。これら3つの公理スキーマは、真理表を計算すればすべてトートロジー（いかなる付値でも <InlineMath math="\top" />）になることが容易に確認できる。
                </p>
                <p>
                    <strong>帰納ステップ：</strong> 証明列の <InlineMath math="k" /> 行目未満のすべての式がトートロジーであると仮定する。
                    <InlineMath math="k" /> 行目の式 <InlineMath math="\psi" /> が公理であればベースケースと同様。もし <InlineMath math="\psi" /> がそれ以前の行 <InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> へのモーダスポネンス (MP) によって導かれたとする。
                </p>
                <p>
                    帰納法の仮定より、<InlineMath math="\varphi" /> と <InlineMath math="\varphi \to \psi" /> はトートロジーである。すなわち、任意の付値 <InlineMath math="v" /> について <InlineMath math="v(\varphi) = \top" /> かつ <InlineMath math="v(\varphi \to \psi) = \top" /> である。
                    含意の真理値の定義を思い出すと、<InlineMath math="v(\varphi \to \psi) = \top" /> でありながら前件が <InlineMath math="\top" /> となるのは、後件も <InlineMath math="\top" /> の場合に限られる。
                    したがって、任意の付値について <InlineMath math="v(\psi) = \top" /> となり、導かれた <InlineMath math="\psi" /> もトートロジーであることが示された。
                </p>
                <p>
                    帰納法により、証明列のすべての行、すなわち証明された式はトートロジーである。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="健全性の意味"
            >
                <p>
                    健全性（Soundness）とは、推論システムが「健全」であり、決して偽なる結論を導き出さないことを保証するものです。これが成り立たない体系は、数学の証明システムとして使い物になりません。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">完全性定理（命題論理版）</h2>

            <p className="leading-relaxed">
                健全性の逆、「意味論的に正しい（トートロジーである）なら、必ず形式的に証明できる」という強力な主張が完全性定理です。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 1.4-2 (命題論理の完全性定理 / Completeness Theorem)"
            >
                <p>
                    任意のトートロジーは、ヒルベルト流公理体系において証明可能である。
                    <BlockMath math="\models \varphi \implies \vdash \varphi" />
                </p>
                <p>
                    健全性定理と合わせることで、命題論理においては証明可能性と恒真性が完全に同値であることが確立される。
                    <BlockMath math="\vdash \varphi \iff \models \varphi" />
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概略)"
            >
                <p>
                    完全性の証明は対偶「<InlineMath math="\nvdash \varphi" />（証明不能）ならば <InlineMath math="\nvDash \varphi" />（トートロジーでない、つまり偽になる付値が存在する）」を示すことで行われることが多い。
                </p>
                <p>
                    もし <InlineMath math="\varphi" /> が証明不能であるなら、その否定 <InlineMath math="\neg\varphi" /> を仮定として追加しても体系は矛盾しない（無矛盾である）。この無矛盾な集合を、さらに可能な限り論理式を追加して「極大無矛盾集合」というものに拡張する（ツォルンの補題やリンデンバウムの補題を用いる）。
                </p>
                <p>
                    この極大無矛盾集合は、「そこに含まれる命題変数を <InlineMath math="\top" />、含まれないものを <InlineMath math="\bot" /> とする」という自然な付値 <InlineMath math="v" /> を決定する。この構成により、<InlineMath math="v(\neg\varphi) = \top" /> すなわち <InlineMath math="v(\varphi) = \bot" /> となるような具体的な付値（反証モデル）が構成でき、<InlineMath math="\nvDash \varphi" /> が示される。
                    （このモデル構成の手法は「ヘンキン構成」と呼ばれ、後の述語論理の完全性定理 §5.2 でより詳細に学ぶ。）
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title="Example 1.4-1 (健全性と完全性の組み合わせの威力)"
            >
                <p>
                    排中律 <InlineMath math="p \lor \neg p" /> をヒルベルト流の公理からのみで証明せよ、と言われると、前節の <InlineMath math="\varphi \to \varphi" /> 以上に非常に長く複雑なパズルを解く必要がある。
                </p>
                <p>
                    しかし、完全性定理があるため我々はそのような苦労をする必要はない。<InlineMath math="p \lor \neg p" /> がトートロジーであることは、わずか2行の真理表を書けば誰でも証明できる。そして完全性定理が「トートロジーなら必ず証明列が存在する（<InlineMath math="\models \implies \vdash" />）」ことを保証してくれるため、真理表を書いた時点で「ヒルベルト流で証明可能である」ことが確定する。
                </p>
                <p>
                    逆に、コンピュータに機械的な記号操作だけを行わせて（真理値の意味を知らなくても）定理を自動証明させた場合、健全性定理（<InlineMath math="\vdash \implies \models" />）のおかげで、出てきた結論が「絶対に真である」と人間が安心して信じることができる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>健全性定理（<InlineMath math="\vdash \implies \models" />）：</strong> 証明できる式はすべてトートロジーである。システムは嘘をつかない。</li>
                    <li><strong>完全性定理（<InlineMath math="\models \implies \vdash" />）：</strong> トートロジーはすべて証明できる。システムに不足はない。</li>
                    <li>この2つの定理により、人間の直感的な「真理（意味）」と、機械的な「証明（構文）」が、命題論理においては完全に一致することが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}