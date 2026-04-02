import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PointwiseConvergence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでの章では「単一の関数」が持つ性質（連続性や微分可能性など）について深く掘り下げてきました。
                本章からは視点を広げ、「関数の列（関数の集まり）」がどのように極限を持つのか、というテーマを扱います。
                関数列の極限を考えることは、微分方程式の解の定義や、次章で学ぶ「関数を無限の多項式の和で表す（ベキ級数）」といった解析学の最も強力な手法の土台となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各点収束の定義</h2>

            <p>
                関数の列 <InlineMath math="f_1(x), f_2(x), f_3(x), \dots" /> があるとき、最も自然な極限の考え方は「ある特定の点 <InlineMath math="x" /> を固定したときに、その点での値の数列がどこかに収束するか」を見ることです。これをもとに定義されるのが<strong>各点収束</strong>（pointwise convergence）です。
            </p>

            <ContentBox type="definition" title="Definition 7.1-1 (関数列の各点収束)">
                <p>
                    区間 <InlineMath math="I" /> 上で定義された関数列 <InlineMath math="\{f_n(x)\}_{n=1}^{\infty}" /> と、同じく <InlineMath math="I" /> 上で定義された関数 <InlineMath math="f(x)" /> について考える。<br />
                    区間内の<strong>すべての点 <InlineMath math="x \in I" /> に対して</strong>、数列としての極限
                </p>
                <BlockMath math="\lim_{n \to \infty} f_n(x) = f(x)" />
                <p>
                    が成り立つとき、関数列 <InlineMath math="\{f_n\}" /> は関数 <InlineMath math="f" /> に <InlineMath math="I" /> 上で<strong>各点収束</strong>するという。この極限関数 <InlineMath math="f" /> を各点極限と呼ぶ。
                </p>
            </ContentBox>

            <p>
                数列の極限の <InlineMath math="\varepsilon" />-<InlineMath math="N" /> 論法の記号を用いてこの条件を書き下すと、次のような量化子の順序になります。
            </p>
            <BlockMath math="\forall x \in I, \forall \varepsilon > 0, \exists N \in \mathbb{N} \text{ s.t. } \forall n \geq N, \, |f_n(x) - f(x)| < \varepsilon" />
            <p>
                ここで重要なのは、「十分先（<InlineMath math="N" />）」を決める際、<InlineMath math="\varepsilon" /> だけでなく、<strong>いまどの点 <InlineMath math="x" /> を見ているかによって番号 <InlineMath math="N" /> を変えてよい（<InlineMath math="N = N(\varepsilon, x)" />）</strong>という事実です。点 <InlineMath math="A" /> ではすぐに収束しても、点 <InlineMath math="B" /> ではなかなか収束しなくてもよい、という「各個撃破」のルールです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">各点収束の代表的な例（連続性の喪失）</h2>

            <p>
                各点収束は最も素朴な極限の定義ですが、実は解析学においては「弱すぎる」という致命的な欠陥を持っています。それを如実に示すのが次の有名な例です。
            </p>

            <ContentBox type="example" title="Example 7.1-1 (x^n の各点収束と連続性の喪失)">
                <p>
                    閉区間 <InlineMath math="[0, 1]" /> 上で定義された連続関数の列 <InlineMath math="f_n(x) = x^n" /> （<InlineMath math="n = 1, 2, 3, \ldots" />）を考える。
                    この関数列の各点極限 <InlineMath math="f(x) = \lim_{n \to \infty} x^n" /> を求めよ。
                </p>
                <div className="mt-4 font-semibold">解答:</div>
                <p className="mt-2">
                    任意の点 <InlineMath math="x \in [0, 1]" /> を固定して数列 <InlineMath math="\{x^n\}" /> の極限を調べる。
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                        <InlineMath math="0 \leq x < 1" /> の場合：<br />
                        底の絶対値が1未満の等比数列の極限であるから、<InlineMath math="\lim_{n \to \infty} x^n = 0" />。
                    </li>
                    <li>
                        <InlineMath math="x = 1" /> の場合：<br />
                        常に <InlineMath math="1^n = 1" /> であるから、<InlineMath math="\lim_{n \to \infty} 1^n = 1" />。
                    </li>
                </ul>
                <p className="mt-4">
                    したがって、極限関数 <InlineMath math="f(x)" /> は次のように定義される。
                </p>
                <BlockMath math="f(x) = \begin{cases} 0 & (0 \leq x < 1) \\ 1 & (x = 1) \end{cases}" />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="mt-4">
                この結果は衝撃的です。元の関数列 <InlineMath math="f_n(x) = x^n" /> は、どの <InlineMath math="n" /> を取ってもすべて滑らかに繋がった「連続関数」でした。
                しかし、その到着点である極限関数 <InlineMath math="f(x)" /> は、<InlineMath math="x=1" /> で値が <InlineMath math="0" /> から <InlineMath math="1" /> ヘジャンプする<strong>不連続関数になってしまっています</strong>。
            </p>
            <p>
                すなわち、各点収束する関数列において、「連続性」という良い性質は一般には保存されない（遺伝しない）ことが示されました。<br />
                これは関数の極限と、点の極限（<InlineMath math="\lim_{x \to 1}" /> と <InlineMath math="\lim_{n \to \infty}" />）の<strong>交換法則が成り立たなかった</strong>ことを意味します。
            </p>
            <BlockMath math="\lim_{x \to 1} \left( \lim_{n \to \infty} f_n(x) \right) = \lim_{x \to 1} f(x) = 0" />
            <BlockMath math="\lim_{n \to \infty} \left( \lim_{x \to 1} f_n(x) \right) = \lim_{n \to \infty} f_n(1) = 1" />

            <p>
                「いくら何でも極限を取ったら連続性が壊れてしまうようでは使い物にならない」——そう考えた数学者たちは、この各点収束よりもさらに強力な、関数の全体的な形を保ったまま収束する概念を生み出しました。それが次節で学ぶ「一様収束」です。
            </p>

            {/* まとめ */}
            <ContentBox type="note" title="§7.1 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>各点収束は、<InlineMath math="x" /> を固定したときの「数列としての極限」がすべての点で存在することである。</li>
                    <li>極限の速度（<InlineMath math="N" />のとり方）が場所 <InlineMath math="x" /> によってバラバラであってもよい。</li>
                    <li>各点収束では、元の関数列がすべて連続であっても、極限関数が連続になるとは限らない（反例：<InlineMath math="f_n(x) = x^n" />）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
