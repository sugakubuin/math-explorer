import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PolarDecomposition() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                複素数 <InlineMath math="z" /> が絶対値 <InlineMath math="r \geq 0" /> と偏角 <InlineMath math="\theta" /> を用いて極形式 <InlineMath math="z = r e^{i\theta}" /> で表されるように、
                正方行列に対しても、「半正定値行列（<InlineMath math="r" /> に対応するスケールや伸び）」と「直交行列（<InlineMath math="e^{i\theta}" /> に対応する回転）」の積に分解することができます。
                これを<strong>極分解</strong> (<InlineMath math="\text{polar decomposition}" />) と呼び、特異値分解から自然に導出されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">極分解定理</h2>

            <ContentBox type="theorem" title="Theorem 14.5-1 (極分解定理)">
                <p className="leading-relaxed">
                    任意の <InlineMath math="n \times n" /> 実行列 <InlineMath math="A" /> は、直交行列 <InlineMath math="Q" /> と半正定値対称行列 <InlineMath math="S" /> の積として表すことができる。
                </p>
                <BlockMath math="A = QS" />
                <p className="leading-relaxed">
                    これを <InlineMath math="A" /> の<strong>右極分解</strong>という。（同様に <InlineMath math="A = S^\prime Q" /> の形に分解することも可能であり、これを左極分解という。）<br />
                    もし <InlineMath math="A" /> が正則であれば、<InlineMath math="S" /> は正定値行列となり、この分解 <InlineMath math="A = QS" /> は一意に定まる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p className="leading-relaxed">
                    定理の証明は、<InlineMath math="A" /> の特異値分解を用いることで容易に行える。
                    <InlineMath math="A" /> の特異値分解を <InlineMath math="A = U \Sigma V^T" /> とする（<InlineMath math="U, V" /> は直交行列、<InlineMath math="\Sigma" /> は特異値が並ぶ対角行列）。
                </p>
                <p className="leading-relaxed mt-2">
                    ここに恒等行列 <InlineMath math="I = V^T V" /> を挿入し、結合を変える。<br />
                    （<InlineMath math="V" /> は直交行列なので <InlineMath math="I = V V^T" /> である。右極分解の形を得るために次のようにする。）
                </p>
                <BlockMath math="A = U \Sigma V^T = (U V^T) (V \Sigma V^T)" />
                <p className="leading-relaxed">
                    ここで、<InlineMath math="Q = U V^T" />、<InlineMath math="S = V \Sigma V^T" /> と定義する。
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>
                        <strong><InlineMath math="Q" /> が直交行列であること：</strong>
                        <BlockMath math="\begin{aligned} Q^T Q &= (U V^T)^T (U V^T) = V U^T U V^T \\ &= V I V^T = V V^T = I \end{aligned}" />
                        より <InlineMath math="Q" /> は確かに直交行列である。
                    </li>
                    <li>
                        <strong><InlineMath math="S" /> が半正定値対称行列であること：</strong>
                        <BlockMath math="S^T = (V \Sigma V^T)^T = V \Sigma^T V^T" />
                        <InlineMath math="\Sigma" /> は対角行列なので <InlineMath math="\Sigma^T = \Sigma" /> であり、<InlineMath math="S^T = V \Sigma V^T = S" /> となり対称行列である。
                        任意のベクトル <InlineMath math="\bm{x}" /> に対し、
                        <BlockMath math="\bm{x}^T S \bm{x} = \bm{x}^T (V \Sigma V^T) \bm{x} = (V^T \bm{x})^T \Sigma (V^T \bm{x})" />
                        <InlineMath math="\bm{y} = V^T \bm{x}" /> とおけば、<InlineMath math="\Sigma" /> の対角成分 <InlineMath math="\sigma_i" /> はすべて非負であるから、
                        <BlockMath math="\bm{y}^T \Sigma \bm{y} = \sum_{i=1}^n \sigma_i y_i^2 \geq 0" />
                        よって <InlineMath math="S" /> は半正定値である。
                    </li>
                </ol>
                <p className="leading-relaxed mt-2">
                    もし <InlineMath math="A" /> が正則であれば、すべての特異値 <InlineMath math="\sigma_i" /> が正（<InlineMath math="\sigma_i > 0" />）となるため、
                    <InlineMath math="\bm{x} \neq \bm{0}" /> ならば <InlineMath math="\bm{y} = V^T \bm{x} \neq \bm{0}" /> であり、<InlineMath math="\sum \sigma_i y_i^2 > 0" /> となって <InlineMath math="S" /> は正定値である。
                    さらにこのとき、一意性も次のように証明できる。
                </p>
                <p className="leading-relaxed mt-2">
                    別の分解 <InlineMath math="A = Q_1 S_1 = Q_2 S_2" /> があると仮定する。
                    <InlineMath math="A^T A" /> を計算すると、
                </p>
                <BlockMath math="A^T A = (Q_1 S_1)^T (Q_1 S_1) = S_1^T Q_1^T Q_1 S_1 = S_1 I S_1 = S_1^2" />
                <p className="leading-relaxed">
                    同様に <InlineMath math="A^T A = S_2^2" /> も成り立つ。<InlineMath math="A" /> が正則なら <InlineMath math="A^T A" /> は正定値であり、
                    正定値行列において平方根をとる（正の固有値の平方根をとる）操作は一意である（前章参照）ため、<InlineMath math="S_1 = S_2" /> でなければならない。
                    <InlineMath math="S_1 = S_2 = S" /> が定まれば、<InlineMath math="S" /> は正則（逆行列 <InlineMath math="S^{-1}" /> を持つ）なので、
                </p>
                <BlockMath math="Q_1 = A S_1^{-1} = A S_2^{-1} = Q_2" />
                <p className="leading-relaxed">
                    となり、<InlineMath math="Q" /> も一意に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                証明からわかるように、極分解は特異値分解の「別の読み方」です。
                SVDが「回転→伸縮→回転」と3ステップに分けるのに対し、極分解は「伸縮→回転」の2ステップに束ね直しています。
                この視点は、物理学や工学の応用で非常に重要になります。
            </p>

            <ContentBox type="remark" title="極分解の意味">
                <p className="leading-relaxed">
                    連続体力学や画像処理などにおいて、行列 <InlineMath math="A" /> を「物体の変形」とみなすことがあります。
                    極分解 <InlineMath math="A = QS" /> は、任意の線形な変形を次のように解釈することに他なりません。
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong><InlineMath math="S" /> の作用（ストレッチ、純粋変形）：</strong> それぞれの主軸方向（<InlineMath math="V" /> の列ベクトルの方向）へ <InlineMath math="\sigma_i" /> 倍の引き伸ばしや圧縮を行う。</li>
                    <li><strong><InlineMath math="Q" /> の作用（剛体回転）：</strong> その後（または前）、形状を変えずに全体を回転（および鏡映）させる。</li>
                </ul>
                <p className="leading-relaxed mt-2">
                    これは元の特異値分解 <InlineMath math="U \Sigma V^T" /> の <InlineMath math="3" /> つのステップを <InlineMath math="2" /> つに束ね直したものと見ることができ、
                    「回転」と「変形」への分離が非常に明確になるというメリットがあります。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§14.5 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>任意の正方行列は、直交行列 <InlineMath math="Q" /> と半正定値対称行列 <InlineMath math="S" /> の積 <InlineMath math="A = QS" /> に分解できる（<strong>極分解</strong>）。</li>
                    <li><InlineMath math="A" /> が正則であれば、<InlineMath math="S" /> は正定値となり、この分解は一意である。</li>
                    <li>極分解は「ストレッチ（変形）+ 回転」への分離であり、複素数の極形式の行列版と見なせる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
