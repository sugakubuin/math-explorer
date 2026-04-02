import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SecondIncompletenessTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                第一不完全性定理は「どんな公理系にも証明できない穴がある」ことを示しました。ゲーデルはさらに、その「証明できない文」の最も衝撃的な例を提示しました。それは他ならぬ「その体系自身が矛盾していないことの証明」です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">第二不完全性定理</h2>

            <p className="leading-relaxed">
                体系の無矛盾性は、「矛盾式（<InlineMath math="\bot" />、例えば <InlineMath math="0=1" />）が証明不可能である」と論理式で書き下すことができます。これを <InlineMath math="\mathrm{Con}(\mathrm{PA})" /> と表記します。
            </p>

            <ContentBox
                type="theorem"
                title="Theorem 6.4-1 (ゲーデルの第二不完全性定理 / Second Incompleteness Theorem)"
            >
                <p>
                    ペアノ算術（PA）が（メタレベルで）無矛盾であるならば、PA 自身の無矛盾性を主張する論理式 <InlineMath math="\mathrm{Con}(\mathrm{PA})" /> は、PA 内部からは証明できない。
                    <BlockMath math="\mathrm{PA} \nvdash \mathrm{Con}(\mathrm{PA})" />
                </p>
                <p>
                    （※これも PA に限らず、算術を含む任意の無矛盾な形式体系について成り立つ。）
                </p>
            </ContentBox>

            <ContentBox
                type="proof"
                title="Proof (概念的解説)"
            >
                <p>
                    第一不完全性定理の証明プロセスを振り返る。そこでの議論の骨格は
                    「PA が無矛盾ならば、ゲーデル文 <InlineMath math="G" /> は証明不可能である」
                    というものであった。
                </p>
                <p>
                    この主張の前提「PA が無矛盾」はまさに <InlineMath math="\mathrm{Con}(\mathrm{PA})" /> であり、結論「<InlineMath math="G" /> は証明不可能」は <InlineMath math="G" /> 自身の定義そのものである。
                    したがって、第一定理の証明の論理構造は、そのまま
                    <BlockMath math="\mathrm{Con}(\mathrm{PA}) \to G" />
                    という含意式として定式化できる。
                </p>
                <p>
                    驚くべきことに、第一定理のメタレベルの証明は純粋に構成的であったため、この証明全体を PA 内部の自然数の計算に翻訳し、PA 自身の中で
                    <BlockMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA}) \to G" />
                    を証明することができる（このステップの厳密な実行は非常に長大で複雑である）。
                </p>
                <p>
                    もし仮に <InlineMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA})" /> であったとしよう。するとモーダスポネンスにより <InlineMath math="\mathrm{PA} \vdash G" /> となってしまう。
                    しかし第一定理により、PA が無矛盾なら <InlineMath math="\mathrm{PA} \nvdash G" /> であった。
                    これは矛盾である。したがって、前提とした <InlineMath math="\mathrm{PA} \vdash \mathrm{Con}(\mathrm{PA})" /> が誤りであり、
                    <BlockMath math="\mathrm{PA} \nvdash \mathrm{Con}(\mathrm{PA})" />
                    でなければならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">ヒルベルトのプログラムへの影響</h2>

            <p className="leading-relaxed">
                この第二不完全性定理は、当時の数学界の大きな目標であった「ヒルベルト・プログラム」に壊滅的な打撃を与えました。
            </p>

            <ContentBox
                type="example"
                title="Example 6.4-1 (定理の哲学的意味)"
            >
                <p>
                    PA の無矛盾性 <InlineMath math="\mathrm{Con}(\mathrm{PA})" /> が PA で証明できないということは、「PA が矛盾していないことを保証するには、PA よりも強い（信頼性が怪しいかもしれない）別の体系の力に頼るしかない」ということを意味する。
                </p>
                <p>
                    例えば、ZFC 集合論（Chapter 7）を使えば PA の無矛盾性は証明できる。しかし今度は「ZFC 自身が無矛盾であるか（<InlineMath math="\mathrm{Con}(\mathrm{ZFC})" />）」は ZFC では証明できない。それを証明するにはさらに強い体系が必要になり、際限がない。
                </p>
                <p>
                    絶対的な「数学の安全性」を、その内部から自己証明することは原理的に不可能なのである。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="ヒルベルトのプログラム"
            >
                <p>
                    1920年代、ダフィット・ヒルベルトは「集合論のような直感の及ばない無限を扱う数学が矛盾を引き起こさないことを、有限的で安全な記号操作（算術レベル）のみを用いて証明する」という壮大な計画（ヒルベルト・プログラム）を提唱しました。
                </p>
                <p>
                    しかし、第二不完全性定理は「算術自身でさえ、自身の無矛盾性を証明できない」ことを示しました。ましてや、より強力な集合論の無矛盾性を算術で証明することなど不可能です。これにより、ヒルベルトの当初の厳格なプログラムは実現不可能であることが確定しました。
                </p>
                <p>
                    ただし、この挫折は論理学の終わりではありませんでした。その後ゲンツェンらによって「超限帰納法を少しだけ許容する」といった形でプログラムの拡張が図られ、現代の<strong>証明論（Proof Theory）</strong>という豊穣な分野へと発展しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>第二不完全性定理：</strong> いかなる無矛盾な（算術を含む）形式体系も、自分自身の無矛盾性を自身の内部で証明することはできない。</li>
                    <li>第一定理の証明を体系内部で形式化することで導かれる。</li>
                    <li>この定理により、数学の完全な安全性を内部から自己証明しようとする「ヒルベルトのプログラム」は原形での実現が否定された。</li>
                </ul>
            </ContentBox>
        </section>
    );
}