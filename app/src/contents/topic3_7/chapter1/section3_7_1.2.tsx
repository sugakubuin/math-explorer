import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function DefinitionAndExamplesOfSigmaAdditivity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                標本空間のすべての部分集合に対して「確率」を一貫して定義できるとは限りません。
                特に連続的な標本空間を扱う場合、ある種の数学的矛盾を避けるために、確率を定義する対象（事象）を適切に制限する必要があります。
                本節では、測度論の核心的な概念であり、確率論の舞台装置となる<b><InlineMath math="\sigma" />-加法族</b>を定義します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">σ-加法族の定義</h2>

            <p className="leading-relaxed">
                事象のあつまり <InlineMath math="\mathcal{F}" /> が、和・補集合・可算無限回の演算について閉じていることが要請されます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (σ-加法族)">
                <p>
                    標本空間 <InlineMath math="\Omega" /> 上の集合族 <InlineMath math="\mathcal{F}" /> が、次の 3 つの条件を満たすとき、これを <b><InlineMath math="\sigma" />-加法族</b>（<InlineMath math="\sigma" />-algebra / <InlineMath math="\sigma" />-field）と呼ぶ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="\Omega \in \mathcal{F}" /> である。</li>
                    <li><InlineMath math="A \in \mathcal{F} \implies A^c \in \mathcal{F}" /> （補集合について閉じている）</li>
                    <li><InlineMath math="A_n \in \mathcal{F} \, (n=1, 2, \ldots) \implies \bigcup_{n=1}^\infty A_n \in \mathcal{F}" /> （可算無限和について閉じている）</li>
                </ol>
                <p>
                    このとき、対 <InlineMath math="(\Omega, \mathcal{F})" /> を<b>可測空間</b>（measurable space）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1 (σ-加法族の例)">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <b>最小の <InlineMath math="\sigma" />-加法族</b>：<InlineMath math="\{\emptyset, \Omega\}" />
                    </li>
                    <li>
                        <b>最大の <InlineMath math="\sigma" />-加法族（冪集合）</b>：<InlineMath math="2^\Omega" /> （すべての部分集合のあつまり）
                    </li>
                    <li>
                        <b>1 つの事象から生成されるもの</b>：特定の事象 <InlineMath math="A" /> に対して、<InlineMath math="\{\emptyset, A, A^c, \Omega\}" /> は最小の <InlineMath math="\sigma" />-加法族を形成する。
                    </li>
                </ul>
            </ContentBox>

            <ContentBox type="remark" title="測度論との接続">
                <p>
                    これは「測度論（3-3）」で学んだものと全く同一の定義です。
                    確率論においては、<InlineMath math="\sigma" />-加法族は「どの事象に確率を割り当てることができるか」という規則を定めているものと解釈できます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">生成された σ-加法族とボレル族</h2>

            <p className="leading-relaxed">
                任意の集合族から「それを含んで最小の」<InlineMath math="\sigma" />-加法族を構成することができます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (σ-加法族の生成)">
                <p>
                    <InlineMath math="\Omega" /> のある部分集合族 <InlineMath math="\mathcal{G}" /> に対して、<InlineMath math="\mathcal{G}" /> を含むすべての <InlineMath math="\sigma" />-加法族の共通部分を、<InlineMath math="\mathcal{G}" /> により<b>生成された <InlineMath math="\sigma" />-加法族</b>と呼び、<InlineMath math="\sigma(\mathcal{G})" /> と表す。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                実数直線上で最も重要な事象族は、開集合（あるいは開区間）から生成されるものです。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (ボレル σ-加法族)">
                <p>
                    実数全体 <InlineMath math="\mathbb{R}" /> 上のすべての開集合のあつまりを生成系とする <InlineMath math="\sigma" />-加法族を、<b>ボレル <InlineMath math="\sigma" />-加法族</b>（Borel algebra）と呼び、<InlineMath math="\mathcal{B}(\mathbb{R})" /> で表す。
                    その各要素を<b>ボレル集合</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2 (ボレル族の生成系)">
                <p>
                    ボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> は、次のいずれの集合族からも同様に生成される。
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>すべての開区間のあつまり：<InlineMath math="\{ (a, b) \mid a < b \}" /></li>
                    <li>すべての左半直線のあつまり：<InlineMath math="\{ (-\infty, x] \mid x \in \mathbb{R} \}" /></li>
                </ul>
                <p>
                    これを用いると、すべての実数区間（閉区間、半開区間）がボレル集合になることが容易に示されます。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                事象のあつまり <InlineMath math="\mathcal{F}" /> が決まれば、いよいよそこに「確率」という測度を導入する準備が整いました。
                次節では、コルモゴロフの公理に基づく確率測度の定義を見ていきます。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\sigma" />-加法族は、補集合と可算無限和について閉じた集合族である。</li>
                    <li>対 <InlineMath math="(\Omega, \mathcal{F})" /> を可測空間と呼び、確率を定義するための「土台」となる。</li>
                    <li>実数直線上の開集合から生成されるボレル集合族 <InlineMath math="\mathcal{B}(\mathbb{R})" /> は、解析学において最も標準的な事象族である。</li>
                    <li>生成された <InlineMath math="\sigma" />-加法族の概念により、一部の重要な集合（開区間など）を含む最小限の舞台を自在に設定できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
