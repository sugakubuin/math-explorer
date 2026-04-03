import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ExamplesOfCategories() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                圏の公理は非常にシンプルですが、その抽象性ゆえに、私たちがすでに知っている様々な数学的対象を「圏」という1つの概念のバリエーションとして見直すことができます。本節では、様々な圏の具体例を見ていきましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">代数系の圏</h2>

            <p className="leading-relaxed">
                数学の各分野は、「扱う対象（構造）」と「それを保つ写像」をセットにして初めて1つの分野として成立します。圏論はこれを直接的に体現します。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-1 (主要な代数系・幾何学の圏)"
            >
                <p>
                    これまでに学んだ多くの分野は、自然に圏をなす。これらは「集合に構造が入ったもの」と「その構造を保存する写像」のペアである。
                </p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-max border-collapse border border-slate-300 dark:border-slate-600 w-full">
                        <thead>
                            <tr className="bg-slate-100 dark:bg-slate-800">
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">圏の記号</th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">対象 (Objects)</th>
                                <th className="border border-slate-300 dark:border-slate-600 px-4 py-2">射 (Morphisms)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Set}" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">集合</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">写像</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Grp}" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">群</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">群準同型写像</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Ab}" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">アーベル群（可換群）</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">群準同型写像</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Ring}" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">環（単位元をもつ）</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">環準同型写像（単位元を保つ）</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Mod}_R" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="R" />-加群</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2"><InlineMath math="R" />-加群準同型写像</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2 font-semibold"><InlineMath math="\mathbf{Vect}_\mathbb{k}" /></td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">体 <InlineMath math="\mathbb{k}" /> 上のベクトル空間</td>
                                <td className="border border-slate-300 dark:border-slate-600 px-4 py-2">線形写像</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.2-2 (位相空間の圏 <InlineMath math="\mathbf{Top}" />)</span>}
            >
                <p>
                    代数学だけでなく、幾何学や解析学の舞台も圏として記述できる。位相空間の圏 <strong><InlineMath math="\mathbf{Top}" /></strong> は以下のように定義される。
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><strong>対象：</strong> 位相空間 <InlineMath math="(X, \mathcal{O}_X)" />。</li>
                    <li><strong>射：</strong> 位相構造を保存する写像、すなわち<strong>連続写像</strong> <InlineMath math="f : X \to Y" />。</li>
                </ul>
                <p>
                    連続写像の合成は再び連続写像であり（2-5 位相空間論I参照）、恒等写像は常に連続であるため、これも圏の公理を満たす。
                </p>
                <p>
                    3-12 位相空間論IIの「基本群 <InlineMath math="\pi_1" />」は、まさにこの位相空間の圏 <InlineMath math="\mathbf{Top}" />（より正確には基点付きの <InlineMath math="\mathbf{Top}_*" />）の対象から、群の圏 <InlineMath math="\mathbf{Grp}" /> の対象へ空間を「変換」する操作であった。圏論ではこのような圏と圏の間の変換を「関手（Functor）」と呼び、次章で詳しく扱う。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />
            <h2 className="text-2xl font-bold mt-8 mb-6">圏の多様な例</h2>

            <p className="leading-relaxed">
                圏の対象は必ずしも「集合」である必要はありません。全く違うものも、公理さえ満たせば圏として扱うことができます。
            </p>

            <ContentBox
                type="example"
                title="Example 1.2-3 (順序集合の圏)"
            >
                <p>
                    1つの前順序集合 <InlineMath math="(P, \leq)" /> が与えられたとき、それ<strong>全体を1つの圏</strong> <InlineMath math="\mathcal{P}" /> として解釈することができる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>対象：</strong> 集合 <InlineMath math="P" /> の<strong>元（要素）</strong> <InlineMath math="a, b, c, \ldots" />。</li>
                    <li>
                        <strong>射：</strong> <InlineMath math="a" /> から <InlineMath math="b" /> への射の集合 <InlineMath math="\mathrm{Hom}(a, b)" /> を次のように定義する。
                        <BlockMath math="\begin{aligned} &\mathrm{Hom}(a, b) \\ &= \begin{cases} \{(a, b)\} \quad \text{（単一の要素からなる集合）} & \text{if } a \leq b \\ \emptyset \quad \text{（空集合）} & \text{if } a \not\leq b \end{cases} \end{aligned}" />
                        つまり、「<InlineMath math="a \leq b" /> のとき、かつそのときに限り、<InlineMath math="a" /> から <InlineMath math="b" /> へ矢印が1本だけ存在する」と考える。
                    </li>
                    <li><strong>恒等射：</strong> <InlineMath math="a \leq a" />（前順序の反射律）より、<InlineMath math="\mathrm{Hom}(a, a)" /> には必ず矢印が1本あり、それが <InlineMath math="\mathrm{id}_a" /> となる。</li>
                    <li><strong>合成：</strong> <InlineMath math="f : a \to b" />（つまり <InlineMath math="a \leq b" />）と <InlineMath math="g : b \to c" />（つまり <InlineMath math="b \leq c" />）があるとき、前順序の推移律より <InlineMath math="a \leq c" /> が成り立つ。したがって <InlineMath math="\mathrm{Hom}(a, c)" /> には矢印が存在し、それを <InlineMath math="g \circ f" /> と定義する。</li>
                </ul>
                <p>
                    この例からわかるように、圏の公理である「恒等射の存在」と「合成の存在」は、順序集合における「反射律」と「推移律」に完全に対応している。
                </p>
            </ContentBox>

            <ContentBox
                type="example"
                title={<span>Example 1.2-4 (<InlineMath math="\mathbf{1}" /> と <InlineMath math="\mathbf{2}" /> の圏)</span>}
            >
                <p>
                    対象の数が極端に少ない「小さな圏」も、構成の基礎部品としてよく使われる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li><strong>圏 <InlineMath math="\mathbf{1}" />（一元圏）：</strong> 対象が <InlineMath math="\{*\}" /> の1つだけで、射も恒等射 <InlineMath math="\mathrm{id}_*" /> 1つしかない、最も自明な圏。</li>
                    <li><strong>圏 <InlineMath math="\mathbf{2}" />（矢印圏）：</strong> 対象が2つ <InlineMath math="\{0, 1\}" /> あり、射はそれぞれの恒等射 <InlineMath math="\mathrm{id}_0, \mathrm{id}_1" /> と、<InlineMath math="0" /> から <InlineMath math="1" /> への射 <InlineMath math="f : 0 \to 1" /> が1本だけ存在する圏。（<InlineMath math="1 \to 0" /> の射はない）</li>
                </ul>
                <p>
                    これらのおもちゃのような圏は、Chapter 5 で学ぶ「極限」の議論（図式の形を定義する「添字圏」）において決定的な役割を果たす。
                </p>
            </ContentBox>

            <ContentBox
                type="remark"
                title="圏論の哲学"
            >
                <p>
                    圏論の最大の眼目は、<strong>「対象の中身（要素が何であるか）を忘れて、対象同士の『関係（射）』だけで数学を記述し直す」</strong>という視点の転換にあります。
                </p>
                <p>
                    「元 <InlineMath math="x \in X" /> を取る」という操作すら、一元集合からの写像 <InlineMath math="x : \{*\} \to X" /> という「射」として表現し直します。この「関係性だけで対象を完全に規定できる」という考え方が、Chapter 4 の「米田の補題」において、厳密な数学の定理として結晶化することになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-2">
                    <li><InlineMath math="\mathbf{Set}, \mathbf{Grp}, \mathbf{Top}, \mathbf{Vect}" /> など、数学の各分野は「集合＋構造」を対象とし、「構造を保つ写像」を射とする圏をなす。</li>
                    <li>圏の対象は集合である必要はなく、順序集合における要素を対象、大小関係を射とみなすことでも圏が構成できる（前順序圏）。</li>
                    <li>対象や射が1つ2つしかないような極小の圏（<InlineMath math="\mathbf{1}, \mathbf{2}" />）も、圏論的構成の重要な部品となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}