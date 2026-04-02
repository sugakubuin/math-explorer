import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function PositiveDefiniteSquareRoot() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ「行列関数」の応用として、本章の最後に**「行列の平方根（Square Root of a Matrix）」**について考えます。<br />
                実数の世界では、正の数（<InlineMath math="a \geq 0" />）に対してのみ、2乗して <InlineMath math="a" /> になる正の数「<InlineMath math="\sqrt{a}" />」が唯一つ存在しました（例：<InlineMath math="\sqrt{4} = 2" />）。<br />
                行列の世界でこの「正の数」に該当する概念こそが、前章（Chapter 12）で学んだ<strong>「半正定値行列（Positive Semi-Definite Matrix）」</strong>なのです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">行列の平方根の存在と一意性</h2>

            <p>
                半正定値行列の固有値はすべて「0以上（<InlineMath math="\lambda_i \geq 0" />）」であることが分かっています（§12.2 参照）。したがって、各固有値に対しては実数範囲で安全に「<InlineMath math="\sqrt{\lambda_i}" />」を計算し、行列関数として定義することができます。<br />
                実は、この方法で作られた平方根行列は単に存在するだけでなく、「自分自身も半正定値である」という強力な性質を持ちます。
            </p>

            <ContentBox type="theorem" title="Theorem 13.4-1 （半正定値行列の正定値平方根の存在と一意性）">
                <p>
                    <InlineMath math="n \times n" /> の実対称（またはエルミート）行列 <InlineMath math="A" /> が<strong>半正定値</strong>（固有値がすべて <InlineMath math="\geq 0" />）であるとする。<br />
                    このとき、以下の性質を満たす半正定値行列 <InlineMath math="R" /> が<strong>ただ一つ（一意に）</strong>存在する。
                </p>
                <BlockMath math="R^2 = A" />
                <p>
                    この唯一の行列 <InlineMath math="R" /> を、<InlineMath math="A" /> の<strong>（正定値）平方根</strong>と呼び、<InlineMath math="R = \sqrt{A}" /> あるいは <InlineMath math="R = A^{1/2}" /> と書く。<br />
                    さらに、<InlineMath math="A" /> が正定値（固有値がすべて <InlineMath math="&gt; 0" />）であれば、<InlineMath math="R" /> もまた正定値行列となる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明は「存在の証明（行列関数による構成）」と「一意性の証明」の2段階に分かれます。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <strong>存在証明：</strong><br />
                        <InlineMath math="A" /> が半正定値の対称行列であるため、相異なる非負の固有値 <InlineMath math="\lambda_1, \dots, \lambda_k \geq 0" /> を持ち、スペクトル分解 <InlineMath math="A = \sum_{i=1}^k \lambda_i P_i" /> が可能である。<br />
                        ここで、前節の行列関数の定義に基づき、新しく行列 <InlineMath math="R" /> を次のように構成する。
                        <BlockMath math="R = \sum_{i=1}^k \sqrt{\lambda_i} P_i" />
                    </li>
                    <li>
                        この <InlineMath math="R" /> の2乗を計算すると、射影行列の直交性（<InlineMath math="P_i P_j = O" />）から
                        <BlockMath math="R^2 = \sum_{i=1}^k (\sqrt{\lambda_i})^2 P_i = \sum_{i=1}^k \lambda_i P_i = A" />
                        となり、確かに <InlineMath math="R" /> は <InlineMath math="A" /> の平方根になっている。<br />
                        また、<InlineMath math="R" /> は射影行列の線形結合として定まり、その「固有値」は構成から明らかなようにすべて <InlineMath math="\sqrt{\lambda_i} \geq 0" /> である。対称行列で固有値がすべて非負であるため、<InlineMath math="R" /> 自身も半正定値である。
                    </li>
                    <li>
                        <strong>一意性の証明：</strong><br />
                        他に <InlineMath math="A" /> の半正定値平方根 <InlineMath math="S" /> が存在したとする（<InlineMath math="S^2 = A" /> かつ <InlineMath math="S" /> は半正定値）。<br />
                        <InlineMath math="S" /> も対称行列なので自身のスペクトル分解を持ち、<InlineMath math="S = \sum_{j=1}^m \mu_j Q_j" /> と書ける（ただし半正定値ゆえ全 <InlineMath math="\mu_j \geq 0" />）。<br />
                        両辺を2乗すると <InlineMath math="S^2 = \sum \mu_j^2 Q_j" /> となるが、これが <InlineMath math="A" /> に等しい。<br />
                        すなわち <InlineMath math="A = \sum \mu_j^2 Q_j" />。しかしスペクトル分解は<strong>一意的</strong>（Proposition 13.1-1）であるため、この分解は <InlineMath math="A = \sum \lambda_i P_i" /> と完全に一致しなければならない。
                    </li>
                    <li>
                        分解の一意性より、<InlineMath math="i" /> の並べ替え適当に行えば <InlineMath math="\mu_j^2 = \lambda_i" /> かつ <InlineMath math="Q_j = P_i" /> である。<br />
                        ここで <InlineMath math="\mu_j \geq 0, \lambda_i \geq 0" /> なので、<InlineMath math="\mu_j^2 = \lambda_i \implies \mu_j = \sqrt{\lambda_i}" /> （正または0の平方根しかとれない）。<br />
                        したがって <InlineMath math="S = \sum \mu_j Q_j = \sum \sqrt{\lambda_i} P_i = R" /> となり、<InlineMath math="R" /> 以外に条件を満たすものは存在しない。
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            <ContentBox type="remark" title="なぜ一意性が重要なのか？（極分解への布石）">
                <p>
                    「行列 <InlineMath math="A" /> が与えられたら、ただ一つの正のルート行列 <InlineMath math="\sqrt{A}" /> を安全に作ることができる」という事実は、理論・応用の両面で極めて強烈な性質です。
                </p>
                <p>
                    複素数 <InlineMath math="z" /> を絶対値（長さ：<InlineMath math="r &gt; 0" />）と偏角（回転：<InlineMath math="e^{i\theta}" />）に分解する「極形式（<InlineMath math="z = r e^{i\theta}" />）」に見覚えがあるでしょうか。<br />
                    実のところ、任意の正方行列 <InlineMath math="X" /> も、これと全く同じように「正定値行列（伸縮：<InlineMath math="P = \sqrt{XX^*}" />）」と「ユニタリ行列（回転：<InlineMath math="U" />）」の積として分解することができます。これを<strong>「極分解（Polar Decomposition）」</strong>と呼び、その存在を支える最も重要な土台が、この「一意な平方根の存在定理」なのです。
                </p>
                <p>
                    次章（Chapter 14）の特異値分解（SVD）においても、この <InlineMath math="\sqrt{A^*A}" /> という行列が主役として活躍します。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§13.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>半正定値行列（固有値がすべて0以上）に対しては、「2乗すると元の行列に戻り、自身も半正定値であるような行列」が<strong>必ず、かつただ一つだけ</strong>存在する（Theorem 13.4-1）。これを <InlineMath math="\sqrt{A}" /> と書く。</li>
                    <li>この平方根の構成には、前節の行列関数の概念そのもの（<InlineMath math="f(\lambda_i) = \sqrt{\lambda_i}" /> としたスペクトル分解）が用いられている。</li>
                    <li>この「ただ一つの正のルート」の存在は、行列の極分解や、特異値分解（SVD）を構築するための最も強力で重要な基礎となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
