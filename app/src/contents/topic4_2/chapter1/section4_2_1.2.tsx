import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function AnalyticContinuationDefinition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ「一致の定理」によって、ある領域上の正則関数は、局所的な振る舞いから広域の振る舞いまで完全に決定されてしまうことがわかりました。この事実を逆手にとって、ある領域で定義された正則関数の定義域を自然に広げていく操作が考えられます。これが「解析接続 (Analytic Continuation)」です。本節では、解析接続の数学的な定義と、曲線に沿って接続していくプロセスについて詳しく見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">関数要素と直接接続</h2>

            <p>
                解析接続を定式化するために、まずは関数の「局所的な姿」とその「素性」を持つ基本的な部品を用意します。これを関数要素と呼びます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-1 (関数要素)">
                <p>
                    領域 <InlineMath math="D" /> と、<InlineMath math="D" /> 上で定義された正則関数 <InlineMath math="f" /> の組 <InlineMath math="(f, D)" /> を<b>関数要素（function element）</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example: 関数要素の例">
                <p>
                    単位円板 <InlineMath math="D = \{z \in \mathbb{C} \mid |z| < 1\}" /> 上のテイラー級数 <InlineMath math="f(z) = \sum_{n=0}^\infty z^n" /> を考えます。この関数は <InlineMath math="D" /> 上で正則であるため、<InlineMath math="(f, D)" /> は一つの関数要素となります。
                </p>
            </ContentBox>

            <p>
                関数要素が与えられたとき、それら同士が互いに矛盾なく繋がるとき、一方から他方への自然な拡張と見なすことができます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-2 (直接接続)">
                <p>
                    2つの関数要素 <InlineMath math="(f_1, D_1)" /> と <InlineMath math="(f_2, D_2)" /> について、共通部分 <InlineMath math="D_1 \cap D_2" /> が空ではなく、かつ <InlineMath math="D_1 \cap D_2" /> 上のすべての点で <InlineMath math="f_1(z) = f_2(z)" /> を満たすとき、<InlineMath math="(f_2, D_2)" /> は <InlineMath math="(f_1, D_1)" /> の<b>直接接続（direct continuation）</b>であると言う。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-1">
                <p>
                    二つの関数要素を考えます。
                    <ul className="list-disc list-inside">
                        <li><InlineMath math="(f_1, D_1)" />: <InlineMath math="D_1 = \{|z| < 1\}" />, <InlineMath math="f_1(z) = \sum_{n=0}^\infty z^n" /></li>
                        <li><InlineMath math="(f_2, D_2)" />: <InlineMath math="D_2 = \mathbb{C} \setminus \{1\}" />, <InlineMath math="f_2(z) = \frac{1}{1-z}" /></li>
                    </ul>
                </p>
                <p>
                    共通領域 <InlineMath math="D_1 \cap D_2 = D_1 \setminus \{1\} = D_1" /> （なぜなら <InlineMath math="1 \notin D_1" /> ）において、等比級数の和の公式から <InlineMath math="\sum_{n=0}^\infty z^n = \frac{1}{1-z}" /> が成り立ちます。したがって、この共通領域上で <InlineMath math="f_1(z) = f_2(z)" /> が満たされるので、<InlineMath math="(f_2, D_2)" /> は <InlineMath math="(f_1, D_1)" /> の直接接続です。
                </p>
                <p>
                    このように、初めは <InlineMath math="|z| < 1" /> でしか定義されていなかった級数 <InlineMath math="f_1" /> が、<InlineMath math="f_2" /> を通じて <InlineMath math="z = 1" /> を除く複素平面全体へと自然に拡張されました。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="直接接続と一致の定理">
                <p>
                    直接接続は対照的な概念であり、<InlineMath math="(f_2, D_2)" /> が <InlineMath math="(f_1, D_1)" /> の直接接続であれば、逆もまた直接接続です。ここで「一致の定理」が背後で重要な役割を果たしています。<InlineMath math="D_1 \cap D_2" /> で一致するということは、一致の定理の条件から逸脱するような恣意的な拡張はあり得ず、接続の仕方は事実上一意に定まることを意味します。
                </p>
            </ContentBox>

            <p>
                さて、直接接続を次々と繰り返すことで、元の定義域からずっと離れた領域まで関数を伸ばしていくことができます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">間接接続と曲線に沿った解析接続</h2>

            <p>
                直接の共通部分を持たない遠くの領域に対しても、ドミノ倒しのように直接接続を繋げていくことで解析接続を行うことができます。
            </p>

            <ContentBox type="definition" title="Definition 1.2-3 (曲線に沿った解析接続)">
                <p>
                    曲線 <InlineMath math="\gamma : [0, 1] \to \mathbb{C}" /> に沿った関数要素 <InlineMath math="(f_0, D_0)" /> の解析接続とは、有限個の関数要素の列 <InlineMath math="(f_0, D_0), (f_1, D_1), \ldots, (f_n, D_n)" /> が存在して、以下を満たすことである。
                </p>
                <ul className="list-disc list-inside">
                    <li>各 <InlineMath math="k = 0, \ldots, n-1" /> について、<InlineMath math="(f_{k+1}, D_{k+1})" /> は <InlineMath math="(f_k, D_k)" /> の直接接続である。</li>
                    <li>ある区間の分割 <InlineMath math="0 = t_0 < t_1 < \dots < t_{n+1} = 1" /> が存在して、各 <InlineMath math="k = 0, \dots, n" /> に対し、<InlineMath math="\gamma([t_k, t_{k+1}]) \subset D_k" /> を満たす。</li>
                </ul>
                <p>
                    このとき <InlineMath math="(f_n, D_n)" /> を <InlineMath math="(f_0, D_0)" /> の曲線 <InlineMath math="\gamma" /> に沿った解析接続という。このような接続全体を総称して<b>間接接続</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.2-2">
                <p>
                    対数関数 <InlineMath math="\log z" /> の解析接続について考えます。始点 <InlineMath math="z = 1" /> の近傍 <InlineMath math="D_0" /> で、テイラー級数展開された関数要素 <InlineMath math="(f_0, D_0)" /> を出発点とします（ここで <InlineMath math="f_0(1) = 0" />）。
                </p>
                <p>
                    ここから、原点 <InlineMath math="z = 0" /> を回避しながら負の実軸上の点 <InlineMath math="z = -1" /> に向かう2つの経路を考えます。
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><b>上半平面を経由する経路 <InlineMath math="\gamma_1" /></b>：この経路に沿って円板を繋ぎ、<InlineMath math="\log z = \ln|z| + i \arg z" /> の偏角を連続的に追っていくと、<InlineMath math="z = -1" /> に達したとき偏角は <InlineMath math="\pi" /> となります。よって接続結果の関数要素では値が <InlineMath math="i\pi" /> となります。</li>
                    <li><b>下半平面を経由する経路 <InlineMath math="\gamma_2" /></b>：同じように偏角を追うと、<InlineMath math="\gamma_2" /> では偏角が負の方向に広がるため、<InlineMath math="z = -1" /> に達したときの偏角は <InlineMath math="-\pi" /> となります。よって接続結果の関数要素では値が <InlineMath math="-i\pi" /> となります。</li>
                </ol>
            </ContentBox>

            <p>
                Example 1.2-2 からわかるように、同じ終点に向かう解析接続であっても、辿る経路によって得られる関数要素が異なることがあります。これは複素解析において決定的に重要な現象です。
            </p>

            <ContentBox type="remark" title="経路依存性と多価関数">
                <p>
                    実関数の自然な拡張では、同じ点にたどり着けば関数値も同じになるべきだと考えられがちです。しかし、複素解析においては、曲線に沿った解析接続の結果は経路に依ることが多々あります。この「経路依存性」こそが「多価関数」の起源であり、後の第2章の主要テーマである「モノドロミー」の本質となります。
                </p>
            </ContentBox>

            <p>
                とはいえ、「経路を固定すれば」解析接続の結果は一意に定まります。次節 §1.3 では、この解析接続の一意性について証明を行います。
            </p>

            <ContentBox type="note" title="§1.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>関数要素 <InlineMath math="(f, D)" /> 間の領域の重なりで値が一致する場合、互いに<b>直接接続</b>であるという。</li>
                    <li>円板などの関数要素を鎖のように繋いでいくことで、元の領域から離れた場所へ関数を拡張する操作が<b>曲線に沿った解析接続</b>である。</li>
                    <li>解析接続の結果は、間接的には接続に用いた<b>経路に依存</b>しうる。これが多価性を生む原因となっている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
