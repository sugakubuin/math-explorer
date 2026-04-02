import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function DualBasis() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p className="leading-relaxed">
                双対空間 <InlineMath math="V^*" /> がベクトル空間であるということは、そこにも「基底」や「次元」が存在するはずです。
                元の空間 <InlineMath math="V" /> が有限次元のとき、<InlineMath math="V" /> のある基底を選ぶと、それに対応して <InlineMath math="V^*" /> の非常に扱いやすい特別な基底を一つ作ることができます。これを<strong>双対基底（Dual Basis）</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">双対基底の定義と構成</h2>

            <p className="leading-relaxed">
                以下の定理は、与えられた基底 <InlineMath math="E" /> に対して双対基底が存在し、それによって <InlineMath math="V^*" /> の構造が完全に把握できることを述べています。
                主張の中に双対基底の定義そのものも含まれている点に注意してください。
            </p>

            <ContentBox type="theorem" title="Theorem 4.2-1 （双対基底の存在と次元）">
                <p>
                    <InlineMath math="V" /> を <InlineMath math="n" /> 次元のベクトル空間とし、その一つの基底を <InlineMath math="E = \{\boldsymbol{e}_1, \dots, \boldsymbol{e}_n\}" /> とする。
                </p>
                <p>
                    このとき、双対空間 <InlineMath math="V^*" /> の元（線形汎関数）<InlineMath math="\boldsymbol{e}_1^*, \dots, \boldsymbol{e}_n^*" /> を次のように定める：
                </p>
                <BlockMath math="\boldsymbol{e}_i^*(\boldsymbol{e}_j) = \delta_{ij} = \begin{cases} 1 & (i = j) \\ 0 & (i \neq j) \end{cases}" />
                <p className="text-sm">※ <InlineMath math="\delta_{ij}" /> はクロネッカーのデルタ。</p>
                <p>
                    この <InlineMath math="E^* = \{\boldsymbol{e}_1^*, \dots, \boldsymbol{e}_n^*\}" /> は <InlineMath math="V^*" /> の基底となる。これを <InlineMath math="E" /> に対する<strong>双対基底</strong>と呼ぶ。<br />
                    とくに、基底の個数が等しいことから <InlineMath math="\dim V^* = \dim V = n" /> となる。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                証明の考え方は次の通りです。
                任意の線形汎関数は基底ベクトルへの値で一意に決まるから、それらの値を係数とみなした <InlineMath math="\boldsymbol{e}_i^*" /> の線形結合を作れば、望みの汎関数に一致することが示せます。
                一方、線形結合がゼロ関数だと仮定して各 <InlineMath math="\boldsymbol{e}_j" /> に代入すれば、係数がすべてゼロであることが従います。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="E^*" /> が <InlineMath math="V^*" /> の基底であることを示すには、(1) <InlineMath math="E^*" /> が <InlineMath math="V^*" /> を生成すること、(2) <InlineMath math="E^*" /> が線形独立であること、の2点を示せばよい。
                </p>

                <p className="font-bold mt-4">1. 生成系であることの証明：</p>
                <p>
                    任意の線形汎関数 <InlineMath math="f \in V^*" /> をとる。<InlineMath math="f" /> は <InlineMath math="n" /> 個の基底ベクトル <InlineMath math="\boldsymbol{e}_1, \dots, \boldsymbol{e}_n" /> の行き先 <InlineMath math="f(\boldsymbol{e}_i) = c_i" /> によって完全に決定される。
                </p>
                <p>
                    ここで、新しい線形汎関数 <InlineMath math="g = c_1\boldsymbol{e}_1^* + \dots + c_n\boldsymbol{e}_n^*" /> を考える。
                    この <InlineMath math="g" /> に基底ベクトル <InlineMath math="\boldsymbol{e}_j" /> を入力してみると、
                </p>
                <BlockMath math="g(\boldsymbol{e}_j) = \sum_{i=1}^n c_i \boldsymbol{e}_i^*(\boldsymbol{e}_j) = c_j \cdot 1 + (\text{他の項は0}) = c_j" />
                <p>
                    となり、すべての基底ベクトルに対して <InlineMath math="f(\boldsymbol{e}_j) = g(\boldsymbol{e}_j)" /> が成り立つ。
                    線形写像は基底の行き先で一意に定まるため、関数として <InlineMath math="f = g" /> である。<br />
                    よって、任意の <InlineMath math="f" /> は <InlineMath math="\boldsymbol{e}_i^*" /> たちの線形結合で表せる（生成系である）。
                </p>

                <p className="font-bold mt-4">2. 線形独立であることの証明：</p>
                <p>
                    線形結合がゼロ関数 <InlineMath math="\boldsymbol{0}_{V^*}" /> （何を入力しても0を返す関数）になると仮定する。
                </p>
                <BlockMath math="a_1\boldsymbol{e}_1^* + \dots + a_n\boldsymbol{e}_n^* = \boldsymbol{0}_{V^*}" />
                <p>
                    この等式（関数の等式）の両辺の関数に、ベクトル <InlineMath math="\boldsymbol{e}_j" /> を入力してみる。右辺はゼロ関数なのでもちろん0になる。
                </p>
                <BlockMath math="(a_1\boldsymbol{e}_1^* + \dots + a_n\boldsymbol{e}_n^*)(\boldsymbol{e}_j) = \sum_{i=1}^n a_i \boldsymbol{e}_i^*(\boldsymbol{e}_j) = a_j" />
                <p>
                    したがって <InlineMath math="a_j = 0" /> が導かれる。これがすべての <InlineMath math="j = 1, \dots, n" /> について成り立つため、係数はすべて0でなければならない。<br />
                    よって <InlineMath math="E^*" /> は線形独立である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p className="leading-relaxed">
                抽象的な定式化を、いちばんなじみのあるベクトル空間 <InlineMath math="\mathbb{R}^2" /> に落とし込むと、双対基底が「第1成分・第2成分を取り出す写像」にほかならないことが見えてきます。
                次の例では、標準基底に対する双対基底の作用を数値で確認します。
            </p>

            <ContentBox type="example" title="Example 4.2-1 （平面の標準基底と双対基底）">
                <p>
                    <InlineMath math="V = \mathbb{R}^2" /> とし、標準基底を
                </p>
                <BlockMath math="\boldsymbol{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix},\quad \boldsymbol{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" />
                <p>
                    とする。任意のベクトル <InlineMath math="\boldsymbol{x} \in \mathbb{R}^2" /> を成分表示 <InlineMath math="\boldsymbol{x} = x_1\boldsymbol{e}_1 + x_2\boldsymbol{e}_2" /> と書くと、双対基底の定義より
                </p>
                <BlockMath math="\boldsymbol{e}_1^*(\boldsymbol{x}) = x_1,\qquad \boldsymbol{e}_2^*(\boldsymbol{x}) = x_2" />
                <p>
                    が成り立つ。すなわち <InlineMath math="\boldsymbol{e}_1^*" /> は第1成分、<InlineMath math="\boldsymbol{e}_2^*" /> は第2成分を返す線形汎関数である。
                </p>
                <p>
                    例えば <InlineMath math="\boldsymbol{v} = 3\boldsymbol{e}_1 + 5\boldsymbol{e}_2" /> に対しては <InlineMath math="\boldsymbol{e}_1^*(\boldsymbol{v}) = 3" />、<InlineMath math="\boldsymbol{e}_2^*(\boldsymbol{v}) = 5" /> である。
                    また、<InlineMath math="f = 2\boldsymbol{e}_1^* + 7\boldsymbol{e}_2^*" /> と定めると、
                </p>
                <BlockMath math="f(\boldsymbol{v}) = 2\boldsymbol{e}_1^*(\boldsymbol{v}) + 7\boldsymbol{e}_2^*(\boldsymbol{v}) = 2\cdot 3 + 7\cdot 5 = 41" />
                <p>
                    となる。これは、<InlineMath math="f" /> が基底への値 <InlineMath math="f(\boldsymbol{e}_1)=2" />、<InlineMath math="f(\boldsymbol{e}_2)=7" /> で決まる線形汎関数であることと整合的である。
                </p>
            </ContentBox>

            <p className="leading-relaxed">
                このように双対基底は、選んだ基底に関する「座標の読み取り」を線形汎関数として実装したものだと解釈できます。
            </p>

            <ContentBox type="remark" title="双対基底の幾何学的イメージ">
                <p>
                    双対基底 <InlineMath math="\boldsymbol{e}_i^*" /> とは、「与えられたベクトルを基底 <InlineMath math="\{\boldsymbol{e}_1, \dots, \boldsymbol{e}_n\}" /> を用いて分解したときの、<strong><InlineMath math="i" /> 番目の座標成分を抜き出して返す関数</strong>」のことです。<br />
                    つまり任意のベクトル <InlineMath math="\boldsymbol{x} = x_1\boldsymbol{e}_1 + \dots + x_n\boldsymbol{e}_n" /> に対し、<InlineMath math="\boldsymbol{e}_i^*(\boldsymbol{x}) = x_i" /> となります。<br />
                    有限次元においては空間と双対空間は「次元が同じ」であり、元の空間の「座標軸（基底）」を決めると、お互いにペアとなる完璧な「成分抽出器のセット（双対基底）」が存在するという関係になっています。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§4.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>元の空間の基底を一つ固定すると、それに対応する関数群<strong>双対基底</strong>が自然に定義できる（Theorem 4.2-1）。</li>
                    <li>双対基底の <InlineMath math="i" /> 番目の関数は、「基底の <InlineMath math="i" /> 番目のベクトルだけを1にし、他は0にする（特定の成分だけを抽出する）」関数である。</li>
                    <li>有限次元ベクトル空間 <InlineMath math="V" /> とその双対空間 <InlineMath math="V^*" /> は同じ次元を持つ（<InlineMath math="\dim V = \dim V^*" />）。</li>
                    <li><InlineMath math="\mathbb{R}^2" /> の標準基底では、双対基底は第1・第2成分を返す線形汎関数として具体的に理解できる（Example 4.2-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
