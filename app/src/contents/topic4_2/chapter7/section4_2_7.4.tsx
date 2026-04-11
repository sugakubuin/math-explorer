import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function NevanlinnaTheory() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ピカールの定理は「各値を無限回取るか、全く取らないか」という定性的な（有無に関する）結果でした。しかし、「ある値は他の値よりも頻繁に取るのではないか？」という疑問が自然に湧きます。1920年代にロルフ・ネヴァンリンナ（Rolf Nevanlinna）によって構築された値分布理論（ネヴァンリンナ理論）は、この「値を取る頻度」を定量的に測り、ピカールの定理を計算可能な等式や不等式の形へと飛躍的に発展させました。本コースでの詳細は割愛しますが、その思想の入り口だけを展望します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ネヴァンリンナの特性関数</h2>

            <p>
                有理型関数 <InlineMath math="f(z)" /> が値 <InlineMath math="a" /> （方程式 <InlineMath math="f(z) = a" /> の解）にどれだけ執着するかを測るために、ネヴァンリンナは2つの測定基準を導入し、それらを足し合わせて関数の全体的な「複雑さ」である特性関数を定義しました。
            </p>

            <ContentBox type="definition" title={<span>Definition 7.4-1 (<b>ネヴァンリンナの特性関数</b>)</span>}>
                <p>
                    有理型関数 <InlineMath math="f(z)" /> と複素数 <InlineMath math="a \in \mathbb{C}" />（および <InlineMath math="a = \infty" />）に対して、半径 <InlineMath math="r" /> の円板に対する以下の量を定義する。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>
                        <b>計数関数（Counting function）</b> <InlineMath math="N(r, a)" />：<br/>
                        円板 <InlineMath math="|z| \leq r" /> 内にある <InlineMath math="f(z) = a" /> の根の数を、原点からの距離で対数的に重み付けして足し合わせたもの（ジェンセンの公式の右辺に現れる量）。これは「<InlineMath math="f(z)" /> が厳密に値 <InlineMath math="a" /> を取る頻度」を測る。
                    </li>
                    <li>
                        <b>近接関数（Proximity function）</b> <InlineMath math="m(r, a)" />：<br/>
                        円周 <InlineMath math="|z| = r" /> 上において、<InlineMath math="f(z)" /> が値 <InlineMath math="a" /> に「どれだけ接近しているか」の度合いを、特異なログ積分を用いて測る。
                    </li>
                </ol>
                <p>
                    これらを足し合わせたものを、<b>ネヴァンリンナの特性関数（Nevanlinna characteristic function）</b>という。
                </p>
                <BlockMath math="T(r, f) = m(r, \infty) + N(r, \infty)" />
                <p>
                    （一般的には <InlineMath math="a = \infty" /> を基準の特性関数とする）。この <InlineMath math="T(r, f)" /> は半径 <InlineMath math="r" /> と共に単調増加し、関数の発散・増大の度合いを正確に記述する。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.4-1">
                <p>
                    指数関数 <InlineMath math="f(z) = e^z" /> について計算すると、漸近的に
                </p>
                <BlockMath math="T(r, e^z) \sim \frac{r}{\pi}" />
                <p>
                    となります。関数が複雑（位数が高い）であるほど、この <InlineMath math="T(r, f)" /> は <InlineMath math="r \to \infty" /> で速く増大します。
                </p>
            </ContentBox>

            <p>
                重要なのは、特定の点に命中しなくても「かすって」いれば近接関数 <InlineMath math="m(r, a)" /> が大きくなり、逆に命中していれば計数関数 <InlineMath math="N(r, a)" /> が大きくなるため、和をとるとどんな <InlineMath math="a" /> を狙っても結果的に総量が変わらないように見える点です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ネヴァンリンナの基本定理</h2>

            <p>
                この直感を厳密な等式と不等式に落とし込んだものが、2つの基本定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-1 (ネヴァンリンナの第一基本定理)">
                <p>
                    任意の定数でない有理型関数 <InlineMath math="f(z)" /> と任意の複素数 <InlineMath math="a \in \hat{\mathbb{C}}" /> について、
                </p>
                <BlockMath math="m(r, a) + N(r, a) = T(r, f) + O(1)" />
                <p>
                    が成り立つ（<InlineMath math="O(1)" /> は <InlineMath math="r" /> に依存しない有界な誤差項）。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （概略）この定理は、関数 <InlineMath math="f(z) - a" /> に対してジェンセンの公式（対数関数の周回積分に関する公式）を適用するだけで直接的に導出されます。本質的には「関数の最大値の増大」と「零点や極の数」を結びつける等式であると言えます。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="第一基本定理の意味">
                <p>
                    この定理は「関数 <InlineMath math="f(z)" /> は、<b>すべての値を全く等しい頻度（総量 <InlineMath math="T(r,f)" />）で追いかけている</b>」という衝撃的な事実を示しています。厳密に命中しなかった分（<InlineMath math="N" /> が少ない）は、カスリ続けた分（<InlineMath math="m" /> が大きい）で完全に補われます。
                </p>
            </ContentBox>

            <p>
                では、ピカールの定理のように「完全に命中しない（例外値）」はどうなっているのでしょうか。それを制御するのが第二基本定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 7.4-2 (ネヴァンリンナの第二基本定理)">
                <p>
                    相異なる任意の <InlineMath math="q" /> 個の値 <InlineMath math="a_1, a_2, \dots, a_q \in \hat{\mathbb{C}}" /> を選んだとき、
                </p>
                <BlockMath math="(q - 2) T(r, f) \leq \sum_{k=1}^q N(r, a_k) + S(r, f)" />
                <p>
                    が成り立つ。ここで <InlineMath math="S(r, f)" /> は <InlineMath math="T(r, f)" /> に比べて十分遅く増大する誤差項（「対数微分の補題」により制御されるもの）である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明はこの分野のハイライトであり、対数微分 <InlineMath math="f'/f" /> の近接関数を注意深く評価すること（対数微分の補題）から構成されますが、専門的すぎるため本コースの範囲外とします。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="小ピカールの定理の導出">
                <p>
                    第二基本定理から小ピカールの定理が即座に従うことを見てみましょう。整関数 <InlineMath math="f(z)" /> がもし <InlineMath math="q=3" /> 個の値（例えば <InlineMath math="\infty" /> も含めて3個）を例外値として一切取らないと仮定します。
                </p>
                <p>
                    このとき、一切取らないので計数関数 <InlineMath math="N(r, a_1) = N(r, a_2) = N(r, a_3) = 0" /> になります。<InlineMath math="q=3" /> を定理に代入すると
                </p>
                <BlockMath math="(3-2) T(r, f) \leq 0 + S(r, f)" />
                <p>
                    すなわち <InlineMath math="T(r, f) \leq S(r, f)" /> となります。しかし <InlineMath math="S" /> は <InlineMath math="T" /> よりはるかに小さい（漸近的に無視できる）ため、この不等式が満たされるためには <InlineMath math="T" /> 自体が有界、すなわち <InlineMath math="f" /> が定数でなければならなくなります。
                </p>
                <p>
                    よって、例外値は高々 <InlineMath math="2" /> 個（整関数の場合は自明な例外値である <InlineMath math="\infty" /> を含めて2個なので、有限値の例外は高々1個）に限られることが証明されます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="数論・ディオファントス近似との不思議な符号">
                <p>
                    ネヴァンリンナ理論の第二基本定理の形は、整数論（ディオファントス近似）における「ロス・定理（Roth's theorem）」や「シュミットの部分空間定理」といった代数方程式の有理数解の個数を制限する定理と、構造的（不等式の形そのもの）に完全に一致することが後年（1980年代）に発見されました（ヴォイタの辞書、Vojta's Dictionary）。
                </p>
                <p>
                    「有理型関数が特定の値を取りにくいこと」と「代数的数が有理数で近似されにくいこと」が同じ数学的原理で動いているという事実は、現代数学における最大のミステリーの一つであり、解析学と代数幾何・数論の深いつながり（アラケロフ幾何学など）を示唆しています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ネヴァンリンナ理論は、解の数 <InlineMath math="N" /> と接近度 <InlineMath math="m" /> の合計である特性関数 <InlineMath math="T" /> を導入し、関数の値分布を定量的に測る理論である。</li>
                    <li>第一基本定理は、どんな値を狙ってもその頻度（<InlineMath math="N+m" />）の合計が特性関数 <InlineMath math="T" /> に一致することを示し、すべての値が公平に追いかけられていることを保証する。</li>
                    <li>第二基本定理は例外値の個数に対して厳しい不等式を課し、そこからはピカールの定理が単なる系として、より定量的な精度の下で導出される。</li>
                    <li>この理論はディオファントス近似との驚異的な相似性（ヴォイタの辞書）を持っており、数論への新たな視点を与えている。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
