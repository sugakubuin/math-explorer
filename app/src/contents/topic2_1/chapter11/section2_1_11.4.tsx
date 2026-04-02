import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function HermitianAndNormalMatrices() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までの「スペクトル定理（実対称行列版）」は、実数の世界（<InlineMath math="\mathbb{R}^n" />）における線形代数のハイライトでした。<br />
                しかし、量子力学をはじめとする現代物理学や高度な信号処理においては、複素数の世界（<InlineMath math="\mathbb{C}^n" />）を舞台にしなければならないことが多々あります。<br />
                本節では、実対称行列と直交行列の概念を複素数の世界へと拡張し、正規行列全体をカバーする究極の「スペクトル定理」へと到達します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">エルミート行列・ユニタリ行列の定義</h2>

            <p>
                「実対称行列」に対応する複素数の表現が「エルミート行列」、「直交行列」に対応する表現が「ユニタリ行列」です。<br />
                これらはすでに Chapter 10 (§10.2) で作用素として登場していますが、行列の定義として改めて明確化します。
            </p>

            <ContentBox type="definition" title="Definition 11.4-1 （エルミート行列・ユニタリ行列）">
                <p>
                    複素成分を持つ <InlineMath math="n \times n" /> 行列 <InlineMath math="A" /> について、以下の定義を与える。<br />
                    （※ ここで <InlineMath math="A^*" /> または <InlineMath math="A^\dagger" /> は、各成分の複素共役をとってから転置した<strong>「共役転置行列（Conjugate Transpose）」</strong>を表す。）
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>エルミート行列（Hermitian Matrix）：</strong><br />
                        <InlineMath math="A^* = A" /> を満たす行列。<br />
                        自己随伴作用素の行列表現であり、実数成分のみからなるエルミート行列は実対称行列（<InlineMath math="A^T = A" />）そのものである。
                    </li>
                    <li>
                        <strong>ユニタリ行列（Unitary Matrix）：</strong><br />
                        <InlineMath math="U^* U = U U^* = I" /> （すなわち <InlineMath math="U^* = U^{-1}" />）を満たす行列。<br />
                        ユニタリ作用素の行列表現であり、<InlineMath math="\mathbb{C}^n" /> におけるエルミート内積（長さや角度）を保つ等長変換である。<br />
                        実数成分のみからなるユニタリ行列は直交行列（<InlineMath math="Q^T Q = I" />）そのものである。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="エルミート行列の対角成分の秘密">
                <p>
                    エルミート行列の定義 <InlineMath math="A^* = A" /> を成分で書くと、第 <InlineMath math="(i, j)" /> 成分について <InlineMath math="\overline{a_{ji}} = a_{ij}" /> となります。<br />
                    特に対角成分（<InlineMath math="i = j" />）に注目すると、<InlineMath math="\overline{a_{ii}} = a_{ii}" /> となります。<br />
                    「複素共役が自分自身と等しい」ということは、<strong>「エルミート行列の対角成分は必ず実数である」</strong>ということを意味しています。
                </p>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規行列のスペクトル定理</h2>

            <p>
                Chapter 10 (§10.3) で予告したように、自己随伴（対称・エルミート）、歪自己随伴（交代・歪エルミート）、ユニタリ（直交）のすべての作用素を飲み込む上位概念が<strong>「正規作用素（正規行列）」</strong>です。<br />
                正規行列（<InlineMath math="AA^* = A^*A" />）であれば、実対称行列と同様に、ユニタリ行列によって対角化可能であることが証明されます。これが線形代数学における真のスペクトル定理です。
            </p>

            <ContentBox type="theorem" title="Theorem 11.4-1 （正規行列のユニタリ対角化可能性 / Spectral Theorem）">
                <p>
                    <InlineMath math="n \times n" /> の複素行列 <InlineMath math="A" /> について、以下の3つの条件は互いに<strong>同値（必要十分条件）</strong>である。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="A" /> は<strong>ユニタリ対角化可能</strong>である。つまり、あるユニタリ行列 <InlineMath math="U" /> と対角行列 <InlineMath math="D" /> が存在して <InlineMath math="U^* A U = D" /> となる。</li>
                    <li><InlineMath math="A" /> の各固有値に対応する固有ベクトルを集めて構築した、<InlineMath math="\mathbb{C}^n" /> の<strong>正規直交基底</strong>が存在する。</li>
                    <li><InlineMath math="A" /> は<strong>正規行列</strong>である（すなわち <InlineMath math="AA^* = A^*A" /> を満たす）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof (概要)">
                <p>
                    この定理の厳密な証明は長くなるため、ここでは同値であることの最も重要なエッセンス（<InlineMath math="1 \iff 2" /> と <InlineMath math="1 \implies 3" />）を証明します。<br />
                    （※ 難所である <InlineMath math="3 \implies 1" /> の証明には、「どんな複素行列もユニタリ行列によって上三角化できる」という<strong>シューアの補題（Schur's Lemma）</strong>を経由するのが一般的です。）
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>（<InlineMath math="1 \iff 2" />）対角化と固有ベクトルの関係：</strong><br />
                        <InlineMath math="U^* A U = D" />（対角行列）であることと、左から <InlineMath math="U" /> を掛けて <InlineMath math="AU = UD" /> となることは同値です。<br />
                        <InlineMath math="U" /> の各列ベクトルを <InlineMath math="\boldsymbol{u}_1, \dots, \boldsymbol{u}_n" /> とし、<InlineMath math="D" /> の対角成分を <InlineMath math="\lambda_1, \dots, \lambda_n" /> とすると、<InlineMath math="AU = UD" /> は各列ごとに <InlineMath math="A\boldsymbol{u}_i = \lambda_i \boldsymbol{u}_i" /> が成り立つことを意味します（つまり固有ベクトルと固有値です）。<br />
                        さらに <InlineMath math="U" /> がユニタリ行列であること（<InlineMath math="U^* U = I" />）は、列ベクトル <InlineMath math="\boldsymbol{u}_i" /> たちが<strong>正規直交基底</strong>をなすことと全く同じ意味です。したがって 1 と 2 は同値です。
                    </li>
                    <li>
                        <strong>（<InlineMath math="1 \implies 3" />）対角化可能なら正規行列であること：</strong><br />
                        仮定より <InlineMath math="A = U D U^*" /> と表せます。この両辺の随伴（共役転置）をとると、積の順序が逆転して <InlineMath math="A^* = (U^*)^* D^* U^* = U D^* U^*" /> となります。<br />
                        これらを用いて <InlineMath math="AA^*" /> と <InlineMath math="A^*A" /> を計算します。途中で <InlineMath math="U^*U = I" /> を使います。
                        <BlockMath math="\begin{aligned} A A^* &= (U D U^*)(U D^* U^*) \\ &= U D (U^* U) D^* U^* = U D D^* U^* \\ A^* A &= (U D^* U^*)(U D U^*) \\ &= U D^* (U^* U) D U^* = U D^* D U^* \end{aligned}" />
                        ここで、<InlineMath math="D" /> と <InlineMath math="D^*" /> はどちらも「対角行列」です。<br />
                        対角行列同士の掛け算は各対角成分を掛け合わせるだけなので、掛ける順番を入れ替えても結果は同じ（<InlineMath math="D D^* = D^* D" />）になります。<br />
                        したがって、上の2式からただちに
                        <BlockMath math="A A^* = U (D D^*) U^* = U (D^* D) U^* = A^* A" />
                        が導かれ、<InlineMath math="A" /> が正規行列であることが証明されました。

                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="lemma" title="Lemma 11.4-1 （シューアの補題 / Schur's Lemma）">
                <p>
                    任意の <InlineMath math="n \times n" /> の複素行列 <InlineMath math="A" /> に対して、あるユニタリ行列 <InlineMath math="U" /> が存在して、<InlineMath math="U^* A U = T" /> （<InlineMath math="T" /> は上三角行列）とすることができる。<br />
                    すなわち、<strong>「どんな複素行列も、ユニタリ行列を用いて上三角化可能である」</strong>。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (シューアの補題の概要)">
                <p>
                    数学的帰納法により証明される。<br />
                    <InlineMath math="A" /> は複素行列なので必ず少なくとも1つの固有値 <InlineMath math="\lambda_1" /> と固有ベクトル <InlineMath math="\boldsymbol{x}_1" /> を持つ。<InlineMath math="\boldsymbol{x}_1" /> を正規化したものを <InlineMath math="\boldsymbol{u}_1" /> とし、これを第1列に持つユニタリ行列 <InlineMath math="U_1" /> を作る（グラム・シュミット法で残りの列を構成する）。<br />
                    このとき <InlineMath math="U_1^* A U_1" /> を計算すると、第1列が <InlineMath math="(\lambda_1, 0, \dots, 0)^T" /> となり、右下の <InlineMath math="(n-1) \times (n-1)" /> 行列ブロックが残る。<br />
                    この右下ブロックに対して帰納法を繰り返し適用していくことで、最終的にすべてを上三角行列の形に掃き出すことができる。
                </p>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    <strong>補足：</strong> この補題と、「正規行列である (<InlineMath math="AA^* = A^*A" />)」という条件を組み合わせると、<InlineMath math="T T^* = T^* T" /> となる上三角行列 <InlineMath math="T" /> は実は対角行列でなければならないことが示せます。<br />
                    これが、Theorem 11.4-1 の「3 <InlineMath math="\implies" /> 1（正規行列ならユニタリ対角化可能）」の完全な証明の道筋です。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="対角化可能性のまとめ">
                <p>
                    「結局、どんな行列が対角化できるの？」という問いに対する答えが、ここで完結します。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>一般の行列：</strong> 代数的重複度 = 幾何的重複度 の場合のみ、一般の正則行列 <InlineMath math="P" /> で対角化可能。</li>
                    <li><strong>正規行列（<InlineMath math="AA^* = A^*A" />）：</strong> 実数でも複素数でも、必ず<strong>ユニタリ行列 <InlineMath math="U" /></strong> で（直交する固有ベクトルを用いて）対角化可能。対角成分は複素数になることがある。
                        <ul className="list-disc pl-5 mt-1 text-sm text-slate-600 dark:text-slate-400">
                            <li><strong>特例1（エルミート行列 <InlineMath math="A^*=A" />）：</strong> ユニタリ対角化可能であり、かつ対角成分（固有値）は必ず実数になる。</li>
                            <li><strong>特例2（実対称行列 <InlineMath math="A^T=A" />）：</strong> 直交行列 <InlineMath math="Q" /> で対角化可能であり、かつ対角成分は必ず実数になる。（これがこれまでの主役！）</li>
                        </ul>
                    </li>
                </ul>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§11.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>複素数に拡張した際、実対称行列に相当するのが<strong>エルミート行列</strong>（<InlineMath math="A^* = A" />）、直交行列に相当するのが<strong>ユニタリ行列</strong>（<InlineMath math="U^* U = I" />）である（Definition 11.4-1）。</li>
                    <li>行列 <InlineMath math="A" /> がユニタリ行列を用いて対角化可能であるための必要十分条件は、<InlineMath math="A" /> が<strong>正規行列（<InlineMath math="AA^* = A^*A" />）</strong>であることである（Theorem 11.4-1：スペクトル定理）。</li>
                    <li>エルミート行列や実対称行列は正規行列の特別な部分集合であるため、当然ユニタリ（直交）対角化が保証されており、その強力な性質はすべてこの「正規性」から導出される。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
