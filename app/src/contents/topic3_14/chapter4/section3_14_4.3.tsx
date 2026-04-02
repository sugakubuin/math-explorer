import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SyntacticVsSemantic() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                これまでの章で、論理の「正しさ」を決定する2つの全く異なるアプローチを定義しました。この2つを明確に区別することが、現代論理学を理解する上での最重要事項です。本節ではその違いを総括します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">構文論と意味論の区別</h2>

            <ContentBox
                type="definition"
                title={<span>Definition 4.3-1 (<InlineMath math="\vdash" /> と <InlineMath math="\models" /> の定義の整理)</span>}
            >
                <div className="space-y-4">
                    <div>
                        <strong>構文論的帰結（Syntactic consequence）： <InlineMath math="T \vdash \varphi" /></strong>
                        <p>
                            理論 <InlineMath math="T" /> と公理から出発し、<strong>推論規則（MPなど）という機械的な記号操作だけ</strong>を有限回用いて、論理式 <InlineMath math="\varphi" /> を導き出せること。
                            （対象が何であるか、記号が何を意味するかは一切考慮しない、パズルのルールのようなもの）
                        </p>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-600" />
                    <div>
                        <strong>意味論的帰結（Semantic consequence）： <InlineMath math="T \models \varphi" /></strong>
                        <p>
                            理論 <InlineMath math="T" /> を真とする<strong>あらゆるすべての構造（モデル） <InlineMath math="\mathcal{M}" /> において</strong>、例外なく <InlineMath math="\varphi" /> も真となること。
                            （記号の意味、真偽、集合や関数といった「現実」を考慮したもの）
                        </p>
                    </div>
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 4.3-1 (<InlineMath math="\vdash" /> と <InlineMath math="\models" /> のそれぞれの計算)</span>}
            >
                <p>
                    仮定の集合を <InlineMath math="T = \{\forall x\,(P(x) \to Q(x)), P(a)\}" /> とし、結論を <InlineMath math="Q(a)" /> とする。
                </p>
                <div className="space-y-4 mt-2">
                    <div>
                        <strong>1. <InlineMath math="T \vdash Q(a)" /> の示し方（構文論）：</strong>
                        <p>
                            記号操作のみで示す。
                            まず <InlineMath math="\forall x\,(P(x) \to Q(x))" /> に全称例化（公理 H4）を適用し、<InlineMath math="P(a) \to Q(a)" /> を得る。
                            次に、この結果と仮定 <InlineMath math="P(a)" /> に対してモーダスポネンス（MP）を適用し、結論 <InlineMath math="Q(a)" /> を得る。
                            これで証明列が完成した。
                        </p>
                    </div>
                    <div>
                        <strong>2. <InlineMath math="T \models Q(a)" /> の示し方（意味論）：</strong>
                        <p>
                            構造 <InlineMath math="\mathcal{M}" /> の性質として示す。
                            任意の構造 <InlineMath math="\mathcal{M}" /> において <InlineMath math="\mathcal{M} \models T" /> であると仮定する。
                            充足関係の定義から、<InlineMath math="M" /> のすべての元で <InlineMath math="P \to Q" /> が真であり、かつ特定の元 <InlineMath math="a^\mathcal{M}" /> で <InlineMath math="P" /> が真である。
                            真理値の定義（含意）より、<InlineMath math="a^\mathcal{M}" /> で <InlineMath math="Q" /> も真でなければならない。
                            ゆえに <InlineMath math="\mathcal{M} \models Q(a)" /> が成り立つ。
                        </p>
                    </div>
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">健全性と完全性の意義</h2>

            <p className="leading-relaxed">
                これら2つの全く異なる定義によって定まる関係が、実は一致しているというのが、数理論理学において最も重要な定理です。
            </p>

            <ContentBox
                type="proposition"
                title="Proposition 4.3-1 (健全性の言い換え)"
            >
                <p>
                    <strong>健全性定理（Soundness Theorem）：</strong> <InlineMath math="T \vdash \varphi \implies T \models \varphi" />
                </p>
                <p>
                    <strong>意味：</strong> 形式的な「証明」によって導かれた結論は、必ず意味論的にも「正しい」。推論システムは決して嘘の定理を生み出さない（無矛盾性の保証）。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    証明体系の公理（H1〜H5など）がすべて妥当式であることを確認し、推論規則（MPや一般化規則）が意味論的帰結を保存すること（前提が真なら結論も真になること）を示す。証明列の長さに関する数学的帰納法により、証明可能な式はすべて意味論的に正しいことが導かれる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="proposition"
                title="Proposition 4.3-2 (完全性の言い換え)"
            >
                <p>
                    <strong>完全性定理（Completeness Theorem）：</strong> <InlineMath math="T \models \varphi \implies T \vdash \varphi" />
                </p>
                <p>
                    <strong>意味：</strong> 意味論的に「正しい（どんなモデルでも成り立つ）」主張は、必ず形式的な記号操作の有限回のステップで「証明」できる。推論システムには（一階述語論理の枠組み内において）不足がない。
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof"
            >
                <p>
                    完全性定理の証明は非常に深く、意味論的なモデルの構成を伴う。具体的な証明の詳細は、次章 Chapter 5（§5.1〜5.2）のヘンキン構成を通じて与えられる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox
                type="remark"
                title="完全性定理の衝撃"
            >
                <p>
                    健全性（<InlineMath math="\vdash \implies \models" />）は、「私たちが作ったルールが間違っていないか」を確認するだけであり、比較的簡単に証明できます。
                </p>
                <p>
                    しかし完全性（<InlineMath math="\models \implies \vdash" />）は驚くべき主張です。「すべての無限に広がる数学的構造で真であることを確認する」という神業のような意味論的真理が、「紙の上の有限回の記号遊び」という人間的で機械的な作業に完全に還元できるということを意味しているからです。
                </p>
                <p>
                    1929年にクルト・ゲーデルがこの一階述語論理の完全性定理を証明したことで、近代の形式的数学はその強固な基礎を獲得しました。次章では、この完全性定理の内容と、その証明の核心に迫ります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.3 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="T \vdash \varphi" /> は<strong>構文論的</strong>な記号操作による「証明」である。</li>
                    <li><InlineMath math="T \models \varphi" /> は<strong>意味論的</strong>な構造における「真理」である。</li>
                    <li>健全性定理と完全性定理によって、一階述語論理においては<strong>「証明できること」と「常に正しいこと」が完全に一致</strong>することが保証される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}