import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function SpectralTheoremForSelfAdjointOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                「スペクトル測度により部分空間を切り出し、それに測度の値を掛けて全て足し合わせる」――前節の準備のもと、自己共役作用素に対する決定的な構造定理である「スペクトル定理」がついに完成します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル定理の統合形</h2>

            <p>
                有限次元の行列の対角化 <InlineMath math="A = \sum \lambda_i P_i" /> （<InlineMath math="P_i" /> は固有空間への射影）が、積分（連続な広がりを持った和）の形へ美しく昇華されます。
            </p>

            <ContentBox type="theorem" title="Theorem 10.4-1 (自己共役作用素のスペクトル定理)">
                <p>
                    <InlineMath math="H" /> をヒルベルト空間、<InlineMath math="T" /> を有界自己共役作用素とする。<br />
                    このとき、<InlineMath math="\mathbb{R}" /> 上のボレル集合を定義域とする一意なスペクトル測度 <InlineMath math="E" /> が存在して、以下の性質がすべて成り立つ。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="T" /> 自身はスペクトル測度を用いたルベーグ・スティルチェス積分として次のように表示できる（<b>スペクトル分解</b>）。
                    <BlockMath math="T = \int_{\sigma(T)} \lambda \, dE(\lambda)" />
                    </li>
                    <li>スペクトル上の任意の有界ボレル関数 <InlineMath math="f" /> に対して、作用素 <InlineMath math="f(T)" /> が
                    <BlockMath math="f(T) = \int_{\sigma(T)} f(\lambda) \, dE(\lambda)" />
                    として自然に定まる（Theorem 10.3-1 の連続関数計算のボレル関数への拡張）。
                    </li>
                    <li>スペクトル測度 <InlineMath math="E" /> の台（support：測度が0にならない最小の閉集合）は、<InlineMath math="T" /> のスペクトル <InlineMath math="\sigma(T)" /> に完全に一致する。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    定理の核心となる積分表示（1および2）は、次のように理解される。<br />
                    積分を定式化する際、区間を細分化したリーマン和を考えると、
                </p>
                <BlockMath math="\sum_{i=1}^n \lambda_i^* E([\lambda_i, \lambda_{i+1}))" />
                <p>
                    という形になる。これは、スペクトル測度 <InlineMath math="E" /> によって「固有値が <InlineMath math="\lambda_i" /> 付近になる成分」を空間から切り出し、それに代表値 <InlineMath math="\lambda_i^*" /> を掛けて足し合わせることを意味する。分割を無限に細かくしていくと、この和は作用素ノルムの意味で有界自己共役作用素 <InlineMath math="T" /> に収束する。<br />
                    さらに測度論（ルベーグ積分論）における単調族定理などの拡張定理を適用することで、連続関数だけでなく有界なボレル関数にまで関数計算の枠組みを広げることができ、積分表示と完全に整合することが示される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この「積分」という表現が、第9章で扱ったコンパクト作用素の場合にどうなるか確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 10.4-1">
                <p>
                    <InlineMath math="T" /> がコンパクト自己共役作用素である場合、第9章の定理より、スペクトルは離散的な固有値の列 <InlineMath math="\lambda_1, \lambda_2, \dots \to 0" /> から成ります。<br />
                    このとき、スペクトル測度 <InlineMath math="E" /> は、各固有値 <InlineMath math="\lambda_n" /> の「各点」にのみ重みを持つ、離散的な確率測度（ディラック測度のようなもの）の重ね合わせになります。<br />
                    積分記号は単なる離散的な無限和に翻訳され、
                </p>
                <BlockMath math="T = \int_{\sigma(T)} \lambda \, dE(\lambda) = \sum_{n=1}^\infty \lambda_n E(\{\lambda_n\}) = \sum_{n=1}^\infty \lambda_n P_n" />
                <p>
                    となります（<InlineMath math="P_n" /> は <InlineMath math="E(\{\lambda_n\})" /> であり、これは固有値 <InlineMath math="\lambda_n" /> の固有空間への直交射影です）。<br />
                    これは Theorem 9.3-2 のスペクトル分解と完全に一致します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">スペクトル定理の応用と価値</h2>

            <p>
                離散的ではなく、連続的な「広がり」を持つスペクトルの場合は、乗算作用素への同型定理が理解を助けます。
            </p>

            <ContentBox type="example" title="Example 10.4-2">
                <p>
                    Example 10.2-2 で扱った、<InlineMath math="L^2" /> 上での掛け算作用素 <InlineMath math="M_g f(x) = g(x)f(x)" /> のスペクトル測度を構成します。<br />
                    この作用素は自身を対角化して「連続的な成分を掛け算している」状態そのものです。ボレル集合 <InlineMath math="B \subset \mathbb{R}" /> に対して、
                </p>
                <BlockMath math="E(B)f(x) = \mathbf{1}_{g^{-1}(B)}(x) \cdot f(x) = \begin{cases} f(x) & (g(x) \in B) \\ 0 & (g(x) \notin B) \end{cases}" />
                <p>
                    と定義すると、これは直交射影作用素であり要件を満たします。<br />
                    このとき <InlineMath math="M_g = \int \lambda \, dE(\lambda)" /> が恒等的に成り立ちます。実は「すべての有界自己共役作用素は、適当な測度空間上の掛け算作用素 <InlineMath math="M_g" /> とユニタリ同値である（直交変換すれば掛け算に直せる）」という強い形でのスペクトル定理も存在し、これも同値な表現としてよく用いられます。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ヒルベルト空間論の最高到達点">
                <p>
                    スペクトル定理は、無限次元空間という把握しがたい世界において、作用素の振る舞いを「実数直線上の（射影を値にとる）測度による積分」という極めて解析的に扱いやすい形に翻訳する、関数解析学の金字塔です。<br />
                    この定理の存在によって、偏微分方程式の解析から量子力学の公理化（物理量は自己共役作用素、観測値はスペクトル測度に従う確率変数）に至るまで、巨大な数学的体系が厳密な土台の上に構築されることになります。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§10.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>すべての有界自己共役作用素は、スペクトル測度による積分 <InlineMath math="\int \lambda \,dE(\lambda)" /> として一意に分解される（スペクトル定理）。</li>
                    <li>コンパクト作用素の場合には、この積分は固有値と固有空間への射影の無限和へと帰着する。</li>
                    <li>この定理により、任意の有界ボレル関数に対する関数計算 <InlineMath math="f(T)" /> が可能となり、作用素の振る舞いをスペクトル上の関数の問題に完全に翻訳できる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
