import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function RiemannRochTheorem() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまでで、有理型関数の自由度 <InlineMath math="l(D)" /> と、リーマン面の幾何学を反映する標準除数 <InlineMath math="K" /> が出揃いました。ついに、これらを結びつけることでいかなる除数 <InlineMath math="D" /> に対してもその次元を与える公式、「リーマン-ロッホの定理」の全貌を明らかにします。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン-ロッホの定理の主張</h2>

            <p>
                この定理は、未知の次元 <InlineMath math="l(D)" /> を、位相不変量（種数・次数）と双対的な除数 <InlineMath math="K-D" /> の次元を用いて計算するものです。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1 (リーマン-ロッホの定理)">
                <p>
                    種数 <InlineMath math="g" /> のコンパクトリーマン面 <InlineMath math="S" /> 上の任意の除数 <InlineMath math="D" /> に対して、次の方程式が成り立つ。
                </p>
                <BlockMath math="l(D) - l(K - D) = \deg D - g + 1" />
                <p>
                    ここで、
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="l(D)" /> は、<InlineMath math="D" /> で指定された条件（極の許容範囲、零点の要求）を満たす有理型関数の空間の次元</li>
                    <li><InlineMath math="K" /> は標準除数（有理型1-形式の除数）</li>
                    <li><InlineMath math="l(K-D)" /> は「双対的な次元」と呼ばれる補正項</li>
                </ul>
                <p>
                    である。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="公式の各項の意味">
                <p>
                    この公式は「解析（次元）＝ 位相（次数と種数）＋ 誤差（双対次元）」という構造を持っています。
                </p>
                <p>
                    左辺の主役である <InlineMath math="l(D)" /> は、極の許し方（<InlineMath math="\deg D" />）を増やせば増やすほど関数の自由度が上がるため、右辺の <InlineMath math="\deg D" /> に比例して大きくなると期待されます。しかしリーマン面が複雑（種数 <InlineMath math="g" /> が大きい）になると、全体で辻褄を合わせるのが難しくなるため、その分（<InlineMath math="-g" />）だけ自由度が減らされます。
                </p>
                <p>
                    単純な足し引きだけでは計算が合わない場合があり、そのズレを正確に補正するのが左辺の引き算部分である <InlineMath math="l(K-D)" /> です。「セール双対性（Serre duality）」という現代的な視点からは、この項はある種の障害となるコホモロジー群の次元 <InlineMath math="\dim H^1(S, \mathcal{O}(D))" /> を表していると解釈されます。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 8.4-1">
                <p>
                    以前考えた、リーマン球面（<InlineMath math="g=0" />）上の除数 <InlineMath math="D = n \cdot \infty" /> （ただし <InlineMath math="n \geq 0" />）で定理を検証してみましょう。
                </p>
                <p>
                    まず右辺を計算します。<InlineMath math="\deg D = n" />、<InlineMath math="g = 0" /> なので、
                </p>
                <BlockMath math="\text{右辺} = n - 0 + 1 = n + 1" />
                <p>
                    次に左辺の補正項 <InlineMath math="l(K-D)" /> を調べます。種数0の標準除数の次数は Theorem 8.3-1 から <InlineMath math="\deg K = -2" /> です。すると、
                </p>
                <BlockMath math="\deg(K - D) = \deg K - \deg D = -2 - n < 0" />
                <p>
                    となります。Proposition 8.2-1 の証明で見たように、次数が負の除数に対する空間は <InlineMath math="\{0\}" /> しかなく次元は <InlineMath math="0" /> です。ゆえに <InlineMath math="l(K-D) = 0" /> となります。
                </p>
                <p>
                    これを定理の左辺に代入すると、<InlineMath math="l(D) - 0 = n + 1" /> となり、
                </p>
                <BlockMath math="l(n \cdot \infty) = n + 1" />
                <p>
                    が得られます。これは Example 8.2-1 で「<InlineMath math="n" /> 次の多項式空間の次元」として直接計算した結果と完全に一致しています。定理は正しく動作しています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の補足と現代的視点</h2>

            <p>
                この強力な定理がなぜ成り立つのか、その証明の論理の流れを概観します。完全な証明は関数解析的・幾何学的な大道具を必要とするため、ここでは古典的な「帰納法」のアプローチに基づく考え方を紹介します。
            </p>

            <ContentBox type="proof" title="証明の論理の流れの概観">
                <p>
                    最も古典的な証明の方針は、除数 <InlineMath math="D" /> に点 <InlineMath math="p" /> を1つずつ追加したり削除したりしていく帰納法による。
                </p>
                <p>
                    <b>ステップ1：基底ケースの確認</b><br/>
                    まず <InlineMath math="D = 0" /> （すべての係数が <InlineMath math="0" />）のときを考える。<InlineMath math="L(0)" /> はどこにも極を持たない関数（＝正則関数）なので定数のみであり <InlineMath math="l(0) = 1" />。<br/>
                    一方、<InlineMath math="L(K-0) = L(K)" /> は極を持たない正則1-形式の空間である。実は、この正則1-形式の空間の次元は種数 <InlineMath math="g" /> に等しいこと（<InlineMath math="l(K) = g" />）が調和積分の理論などからわかっている（Example 8.3-3 で <InlineMath math="g=1" /> のときに次元が1であることを確認した）。<br/>
                    代入すると、左辺 <InlineMath math="1 - g" />、右辺 <InlineMath math="0 - g + 1 = 1 - g" /> となり一致する。
                </p>
                <p>
                    <b>ステップ2：次元の変化の追跡</b><br/>
                    任意の除数 <InlineMath math="D" /> に1点 <InlineMath math="p" /> を足した除数 <InlineMath math="D' = D + p" /> を考える。「極をもう1位だけ許す」ことによるベクトル空間の拡大 <InlineMath math="L(D) \subset L(D')" /> から、次元の増分 <InlineMath math="l(D') - l(D)" /> は <InlineMath math="0" /> か <InlineMath math="1" /> のどちらかになる（ローラン展開の主要部が1次分増えるため）。
                </p>
                <p>
                    この「次元が実際に増えるか（<InlineMath math="+1" />）、増えないか（<InlineMath math="0" />）」の条件が、双対的な関数空間 <InlineMath math="L(K-D)" /> の元の存在とミッタク-レフラー的な「極の構成問題への障害」によって決定されることを残留定理（コーシーの定理の一般化）等を用いて計算する。
                </p>
                <p>
                    その結果、点 <InlineMath math="p" /> を足したときの左辺 <InlineMath math="l(D) - l(K-D)" /> の増分が、ちょうど右辺の増分である <InlineMath math="+1" />（<InlineMath math="\deg D" /> が1増えるため）と常に一致することが示される。こうして任意の除数への帰納法が完結する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="現代的な証明とセール双対性">
                <p>
                    現代的な代数幾何学・複素幾何学では、リーマン-ロッホの定理は「層のコホモロジー」を用いて記述されます。上の式はオイラー・ポアンカレ標数と呼ばれる量
                </p>
                <BlockMath math="\chi(S, \mathcal{O}(D)) = \dim H^0(S, \mathcal{O}(D)) - \dim H^1(S, \mathcal{O}(D))" />
                <p>
                    が <InlineMath math="\deg D - g + 1" /> に等しいという「ヒルツェブルフ・リーマン・ロッホの定理（の1次元の場合）」として証明されます。その際、双対項 <InlineMath math="\dim H^1(S, \mathcal{O}(D))" /> がセール（Serre）の双対性定理により <InlineMath math="l(K-D) = \dim H^0(S, \mathcal{O}(K-D))" /> に等しいことが示され、我々の知る古典的な公式と完全に一致するのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>リーマン-ロッホの定理は、方程式 <InlineMath math="l(D) - l(K-D) = \deg D - g + 1" /> として定式化される。</li>
                    <li>この公式は、極を許容する自由度（<InlineMath math="l(D)" />）が、幾何学的条件（次数・種数）から、補正項 <InlineMath math="l(K-D)" /> を通じて正確に計算できることを示している。</li>
                    <li>基底となる <InlineMath math="D=0" /> の確認と、点を増減させた際の次元変化の解析によって古典的証明は成り立つが、その背後にはコホモロジーの双対性が潜んでいる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
