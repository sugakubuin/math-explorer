import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function Section2_3_3_3() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                数列の収束を判定しようとするとき、「収束先 <InlineMath math="\alpha" />」が予め分かっていないと <InlineMath math="\varepsilon" />-<InlineMath math="N" />論法は使えません。しかし、実解析において極限値の正確な値を知ることは困難な場合がほとんどです。そこで、「収束先を知らなくても、数列自体がギュッと一箇所に凝集していくかどうか」を判定する強力な道具である「コーシー列」を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー列の定義</h2>

            <p>
                十分先へと進めば、数列の項同士の距離がいくらでも小さくなるような数列のことをコーシー列（Cauchy sequence または 基本列）と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 3.3-1 (コーシー列)">
                <p>
                    実数列 <InlineMath math="\{a_n\}_{n=1}^\infty" /> について、以下の条件が成り立つとき、これを<strong>コーシー列（Cauchy sequence）</strong>と呼ぶ。
                </p>
                <BlockMath math="\forall \varepsilon > 0, \exists N \in \mathbb{N} \text{ s.t. } \forall m, n \ge N, |a_m - a_n| < \varepsilon" />
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                    （どんなに小さな誤差 <InlineMath math="\varepsilon" /> を要求されても、ある番号 <InlineMath math="N" /> 以降の「どの2つの項」を取り出しても、その差は <InlineMath math="\varepsilon" /> 未満になる）
                </p>
            </ContentBox>

            <p>
                この定義の最大の利点は、収束先 <InlineMath math="\alpha" /> という「外部の点」に一切言及せず、数列の中身 <InlineMath math="a_m, a_n" /> という「内部の点」だけで収束のポテンシャルを判定できることです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">収束列はコーシー列</h2>

            <p>
                すべての収束する数列は、必ずコーシー列であることを示します。これは空間に関わらず常に成り立つ事実です（三角不等式から直ちに従います）。
            </p>

            <ContentBox type="proposition" title="Proposition 3.3-1 (収束列はコーシー列である)">
                <p>
                    実数列 <InlineMath math="\{a_n\}" /> がある実数 <InlineMath math="\alpha" /> に収束するならば、<InlineMath math="\{a_n\}" /> はコーシー列である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [三角不等式による評価]">
                <p>
                    <InlineMath math="\{a_n\}" /> は <InlineMath math="\alpha" /> に収束すると仮定する。このとき、任意の <InlineMath math="\varepsilon > 0" /> に対して、極限の定義より、
                    ある番号 <InlineMath math="N" /> が存在して、<InlineMath math="n \ge N \implies |a_n - \alpha| < \frac{\varepsilon}{2}" /> とできる。
                </p>
                <p className="mt-2">
                    ここで、任意の <InlineMath math="m, n \ge N" /> を取り出してその差を評価する。三角不等式を用いて間に <InlineMath math="\alpha" /> を挟み込む。
                </p>
                <BlockMath math="|a_m - a_n| = |a_m - \alpha + \alpha - a_n| \le |a_m - \alpha| + |\alpha - a_n|" />
                <p className="mt-2">
                    <InlineMath math="m \ge N" /> かつ <InlineMath math="n \ge N" /> を満たすため、それぞれが <InlineMath math="\varepsilon / 2" /> 未満で抑えられる。
                </p>
                <BlockMath math="|a_m - a_n| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon" />
                <p className="mt-2">
                    これは任意の <InlineMath math="\varepsilon > 0" /> に対して成り立つため、<InlineMath math="\{a_n\}" /> は紛れもなくコーシー列である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">実数の完備性（コーシーの判定条件）</h2>

            <p>
                前項の逆、「コーシー列ならば必ず実数の中に収束先が存在するか？」という問題は、空間の性質に依存します。実数の世界においては、この逆が完全に成り立ちます。これが「実数の完備性」の一つの表現です。
            </p>

            <ContentBox type="theorem" title="Theorem 3.3-1 (実数のコーシー列は収束する)">
                <p>
                    実数列 <InlineMath math="\{a_n\}" /> がコーシー列であるならば、<InlineMath math="\{a_n\}" /> は必ずある実数 <InlineMath math="\alpha" /> に収束する。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                    （前項と合わせて、実数列において<strong>「収束する <InlineMath math="\iff" /> コーシー列である」</strong>という強力な判定条件を得る。）
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof [ボルツァーノ・ワイエルシュトラスによる証明]">
                <p>
                    第2章でも扱ったが、ここでも重要性のため再掲し、厳密に証明する。
                </p>
                <p className="mt-2 text-slate-700 dark:text-slate-300 font-bold">[Step 1: コーシー列は有界であること]</p>
                <p className="mt-2">
                    コーシー列の定義で <InlineMath math="\varepsilon = 1" /> とする。ある <InlineMath math="N" /> が存在して、<InlineMath math="m, n \ge N \implies |a_m - a_n| < 1" />。<br />
                    固定した <InlineMath math="N" /> に対し、任意の <InlineMath math="n \ge N" /> について <InlineMath math="|a_n - a_N| < 1 \implies |a_n| < |a_N| + 1" />。
                    よって、数列全体は最大の絶対値 <InlineMath math="M = \max\{|a_1|, \dots, |a_{N-1}|, |a_N| + 1\}" /> によって抑えられ、有界である。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 2: BW定理による部分列の抽出と収束先の決定]</p>
                <p className="mt-2">
                    有界な実数列には、ボルツァーノ・ワイエルシュトラスの定理（Theorem 3.2-1）より<strong>収束する部分列 <InlineMath math="\{a_{n_k}\}" /> が存在する</strong>。その極限値を <InlineMath math="\alpha \in \mathbb{R}" /> とする。
                </p>

                <p className="mt-4 text-slate-700 dark:text-slate-300 font-bold">[Step 3: 全体が同じ極限に収束することの証明]</p>
                <p className="mt-2">
                    数列全体がこの <InlineMath math="\alpha" /> に収束することを示す。<br />
                    任意の <InlineMath math="\varepsilon > 0" /> に対して、コーシー列の性質より、<br />
                    ある <InlineMath math="N_1" /> で <InlineMath math="m, n \ge N_1 \implies |a_m - a_n| < \frac{\varepsilon}{2}" />。
                </p>
                <p className="mt-2">
                    また、部分列は <InlineMath math="\alpha" /> に収束するので、ある <InlineMath math="K" /> が存在し、<br />
                    <InlineMath math="k \ge K \implies |a_{n_k} - \alpha| < \frac{\varepsilon}{2}" />。<br />
                    さらに、部分列の性質上 <InlineMath math="n_k \ge k" /> なので、<InlineMath math="k" /> を十分に大きくとれば <InlineMath math="n_k \ge N_1" /> も同時に満たすようなある特定のインデックス <InlineMath math="n_{k^\ast}" /> を一つ選ぶことができる。
                </p>
                <p className="mt-2">
                    このとき、任意の <InlineMath math="n \ge N_1" /> に対して、三角不等式により間に <InlineMath math="a_{n_{k^\ast}}" /> を挟むと、
                    <BlockMath math="\begin{aligned} |a_n - \alpha| &= |a_n - a_{n_{k^\ast}} + a_{n_{k^\ast}} - \alpha| \\ &\le |a_n - a_{n_{k^\ast}}| + |a_{n_{k^\ast}} - \alpha| \end{aligned}" />
                </p>
                <p className="mt-2">
                    ここで <InlineMath math="n \ge N_1" /> かつ <InlineMath math="n_{k^\ast} \ge N_1" /> より第一項は <InlineMath math="\varepsilon / 2" /> 未満。<br />
                    第二項は部分列が <InlineMath math="\alpha" /> に近いことより <InlineMath math="\varepsilon / 2" /> 未満。
                    <BlockMath math="|a_n - \alpha| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon" />
                </p>
                <p className="mt-2">
                    よって、数列全体も <InlineMath math="\alpha" /> に収束することが示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備性の意義</h2>

            <p>
                「コーシー列ならば必ず自空間の中に収束する」という性質は、空間が「穴だらけ」ではなく「完備」であることの証明です。
            </p>

            <ContentBox type="remark" title="有理数ではコーシー列でも収束しない例">
                <p>
                    もし我々が「有理数」しか知らない世界にいたとします。<InlineMath math="\sqrt{2}" /> に近づくバビロニアの平方根計算列のような有理数の数列 <InlineMath math="\{x_n\}" /> を作ることができます。
                </p>
                <p className="mt-2">
                    この数列は、項同士の差がいくらでも小さくなるため、間違いなく<strong>有理数上のコーシー列</strong>です。しかし、この数列の向かう先である <InlineMath math="\sqrt{2}" /> は有理数空間の中には存在しません。有理数の世界では、「コーシー列なのに収束先が存在しない（穴に落ちて消えてしまう）」という現象が起きます。
                </p>
                <p className="mt-2">
                    実数においてコーシー列が全て収束するのは、この「無理数の穴」がすべて埋め尽くされているからに他なりません。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§3.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>コーシー列</strong>：十分先の項同士の距離がいくらでも <InlineMath math="0" /> に近づく数列。収束先という外部の情報に依存せずに判定できる。</li>
                    <li><strong>絶対的性質</strong>：収束する数列は、どんな空間であっても必ずコーシー列である。</li>
                    <li><strong>実数の完備性</strong>：実数列においては、コーシー列であれば必ず実数の範囲内で収束する（コーシーの判定条件）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
