import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvergenceOfOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                実数やベクトルのような単純な点の集まりであれば「収束」の定義は1種類で足りますが、「関数を変換する作用素」の列の収束を考える場合、何を基準に「近づいた」とみなすかによって複数の収束の概念が現れます。本節では、関数解析において使い分けられる3つの作用素の収束（一様収束、強収束、弱作用素収束）について、その定義と関係性を整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3種の収束の定義</h2>

            <p>
                作用素の列 <InlineMath math="T_n" /> が何らかの作用素 <InlineMath math="T" /> に近づいていく様子を、以下の3ステップの厳しさで定義します。
            </p>

            <ContentBox type="definition" title="Definition 3.4-1 (一様収束 / ノルム収束)">
                <p>
                    作用素列 <InlineMath math="(T_n)" /> が <InlineMath math="T" /> に<b>一様収束（uniform convergence）</b> または<b>ノルム収束（norm convergence）</b>するとは、作用素空間 <InlineMath math="B(X,Y)" /> の作用素ノルムの意味で収束すること、すなわち
                </p>
                <BlockMath math="\lim_{n \to \infty} \|T_n - T\| = 0" />
                <p>
                    となることである。これは「空間全体で、すべての入力ベクトルに対して一斉の速度で（一様に）近づく」最も厳しい収束である。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.4-2 (強収束 / 各点収束)">
                <p>
                    作用素列 <InlineMath math="(T_n)" /> が <InlineMath math="T" /> に<b>強収束（strong convergence）</b>するとは、<InlineMath math="X" /> の任意のベクトル <InlineMath math="x" /> に対して、出力された点列が空間 <InlineMath math="Y" /> のノルムで収束すること、すなわち
                </p>
                <BlockMath math="\lim_{n \to \infty} \|T_n x - Tx\|_Y = 0 \quad (\forall x \in X)" />
                <p>
                    となることである。これを「各点収束」と呼ぶこともあり、<InlineMath math="T_n \xrightarrow{s} T" /> などと表す。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 3.4-3 (弱作用素収束)">
                <p>
                    作用素列 <InlineMath math="(T_n)" /> が <InlineMath math="T" /> に<b>弱作用素収束（weak operator convergence）</b>するとは、出力されたベクトルに対して、さらに任意の連続線形汎関数（観測機） <InlineMath math="f \in Y^*" /> を当てたスカラー値がただの数列として収束すること、すなわち
                </p>
                <BlockMath math="\lim_{n \to \infty} f(T_n x) = f(Tx) \quad (\forall x \in X, \; \forall f \in Y^*)" />
                <p>
                    となることである。
                </p>
            </ContentBox>

            <p>
                これら3つの収束概念は、定義の形から直ちに「厳しさのヒエラルキー」を持つことがわかります。
            </p>

            <ContentBox type="proposition" title="Proposition 3.4-1 (収束の強弱関係)">
                <p>
                    作用素の列に関して、以下の含意が常に成り立つ。
                </p>
                <BlockMath math="\text{一様収束} \implies \text{強収束} \implies \text{弱作用素収束}" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) 一様収束 <InlineMath math="\implies" /> 強収束 の証明：<InlineMath math="\|T_n - T\| \to 0" /> とする。任意の <InlineMath math="x" /> に対して作用素ノルムの基本的な不等式を用いると、
                </p>
                <BlockMath math="\|T_n x - Tx\| = \|(T_n - T)x\| \leq \|T_n - T\| \|x\|" />
                <p>
                    <InlineMath math="x" /> を固定したとき右辺は <InlineMath math="0 \cdot \|x\| = 0" /> に収束するため、左辺も <InlineMath math="0" /> となり強収束が示される。
                </p>
                <p>
                    (2) 強収束 <InlineMath math="\implies" /> 弱作用素収束 の証明：任意の固定した <InlineMath math="x" /> について <InlineMath math="\|T_n x - Tx\| \to 0" /> とする。<InlineMath math="Y^*" /> の任意の元（連続線形汎関数） <InlineMath math="f" /> について、<InlineMath math="f" /> 自身の有界性より
                </p>
                <BlockMath math="|f(T_n x) - f(Tx)| = |f(T_n x - Tx)| \leq \|f\| \|T_n x - Tx\|" />
                <p>
                    となる。右辺は <InlineMath math="\|f\| \cdot 0 = 0" /> に向かうので、左辺のスカラー差も <InlineMath math="0" /> に収束する。よって弱作用素収束が示された。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">逆が成り立たない例</h2>

            <p>
                Proposition 3.4-1 の逆は、有限次元空間であれば実は成り立ちます（有限次元では位相論的なすべての収束が一致するため）。しかし、関数解析が扱う無限次元空間においては、明確な反例が存在します。すなわち、「あるベクトルを突っ込んだときは確かに狙いのベクトルに近づくが、空間全体として見るとどうしても誤差が縮まらない部分が残る」という現象が起きるのです。
            </p>

            <ContentBox type="example" title="Example 3.4-1 (強収束するが一様収束しない例)">
                <p>
                    数列空間 <InlineMath math="\ell^2" /> 上で、最初の <InlineMath math="n" /> 個の成分だけを残し、以降をすべて <InlineMath math="0" /> で切り落とす「射影作用素」の列 <InlineMath math="P_n" /> を次のように定義する。
                </p>
                <BlockMath math="P_n(x_1, x_2, x_3, \ldots) = (x_1, x_2, \ldots, x_n, 0, 0, \ldots)" />
                <p>
                    また、<InlineMath math="I" /> を恒等作用素（何もしない作用素）とする。<InlineMath math="P_n" /> が <InlineMath math="I" /> に「強収束」するかどうかを確認する。<br />
                    任意の <InlineMath math="x \in \ell^2" /> を固定すると、
                </p>
                <BlockMath math="\|P_n x - Ix\|_2^2 = \|(0, \ldots, 0, x_{n+1}, x_{n+2}, \ldots)\|_2^2 = \sum_{k=n+1}^\infty |x_k|^2" />
                <p>
                    ここで <InlineMath math="x \in \ell^2" /> ということは無限級数 <InlineMath math="\sum |x_k|^2" /> が収束しているため、その級数の「剰余項」（尻尾の部分）は <InlineMath math="n \to \infty" /> とともに必ず <InlineMath math="0" /> に収束する。<InlineMath math="x" /> を固定する限り <InlineMath math="\|P_n x - Ix\| \to 0" /> が成り立つため、<InlineMath math="P_n" /> は <InlineMath math="I" /> に<b>強収束する</b>。
                </p>

                <p className="mt-4">
                    次に、「一様収束（ノルム収束）」するかどうかを確認する。<InlineMath math="\|P_n - I\|" /> を計算するためには、ある特定の <InlineMath math="x" /> だけでなく、あらゆる入力の中で誤差が最大化されるような <InlineMath math="x" /> を探さねばならない。<br />
                    ここで、第 <InlineMath math="n+1" /> 成分のみが <InlineMath math="1" /> の単位ベクトル <InlineMath math="e_{n+1} = (0,\dots,0,1,0,\dots)" /> を入力してみる。<InlineMath math="P_n" /> は第 <InlineMath math="n" /> 成分までしか残さないため、<InlineMath math="e_{n+1}" /> は無慈悲に <InlineMath math="0" /> ベクトルへと潰される。
                </p>
                <BlockMath math="\|(P_n - I)e_{n+1}\| = \|0 - e_{n+1}\| = \|e_{n+1}\| = 1" />
                <p>
                    どんなに <InlineMath math="n" /> を大きくしても、「ちょうど <InlineMath math="n+1" /> 番目に値を持つベクトル」を持ってくれば、誤差を引き出し続けることができる。したがって作用素ノルムの定義より、すべての <InlineMath math="n" /> において
                </p>
                <BlockMath math="\|P_n - I\| = 1" />
                <p>
                    となり、<InlineMath math="0" /> に収束しない。ゆえに <InlineMath math="P_n" /> は <InlineMath math="I" /> に<b>一様収束しない</b>。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 3.4-2 (弱作用素収束するが強収束しない例の存在)">
                <p>
                    同様に、弱作用素収束するが強収束しない作用素列も、ヒルベルト空間の「正規直交基底の列」などを用いることで容易に構成できる。弱収束は関数空間上のフーリエ級数の係数が <InlineMath math="0" /> に減衰していく現象（リーマン・ルベーグの補題）などの形で自然に現れるため、決して病的な対象ではなく解析上必須の概念である。この詳細は第5章の双対空間のセクションで深く学ぶ。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="一様有界性定理への布石">
                <p>
                    一様収束しないような強収束列（上の射影作用素の列など）であっても、実は「作用素ノルムは勝手に無限大に発散したりせず、ある一つの定数で一様に抑え込まれている」という驚くべき性質が存在します。これを保証するのが、関数解析の四大定理の一つに数えられる「一様有界性定理（バナッハ-スタインハウスの定理）」であり、Chapter 4 で詳しく扱います。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>作用素の収束には厳しい順から、すべての入力で一斉に近づく「一様収束」、入力ごとに近づく「強収束」、観測したスカラー値として近づく「弱作用素収束」がある。</li>
                    <li>一様収束ならば強収束であり、強収束ならば弱作用素収束である（Proposition 3.4-1）。</li>
                    <li>無限次元空間においてこれらの逆は一般に成り立たない（例：成分を切り落とす射影作用素は強収束するが一様収束しない）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
