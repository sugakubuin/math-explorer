import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SymmetricMatrixEigenvectors() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、「実対称行列の固有値はすべて実数になる」ことが分かりました。<br />
                これはスペクトル定理への第一歩です。第二歩にして最大の鍵となるのが、<strong>「実対称行列が持つ固有ベクトルの幾何学的な位置関係」</strong>に関する驚くべき性質です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有ベクトルの直交性</h2>

            <p>
                一般の行列では、異なる固有値に対応する固有ベクトルは「線形独立」であることしか保証されません（Chapter 6 で学習）。つまり、斜めに交わっている可能性があります。<br />
                しかし、行列が対称であるという完璧にバランスの取れた構造を持つとき、その固有ベクトルたちは空間の中で<strong>互いに垂直（直交）</strong>に交わることが保証されます。
            </p>

            <ContentBox type="theorem" title="Theorem 11.2-1 （実対称行列の固有ベクトルの直交性）">
                <p>
                    <InlineMath math="A" /> を実対称行列とする。<br />
                    もし <InlineMath math="\lambda_1" /> と <InlineMath math="\lambda_2" /> が <InlineMath math="A" /> の<strong>異なる（相異なる）固有値</strong>であり、<InlineMath math="\boldsymbol{x_1}" /> と <InlineMath math="\boldsymbol{x_2}" /> がそれぞれに対応する固有ベクトルであるならば、<InlineMath math="\boldsymbol{x_1}" /> と <InlineMath math="\boldsymbol{x_2}" /> は<strong>直交</strong>する。<br />
                    すなわち、内積 <InlineMath math="\langle \boldsymbol{x_1}, \boldsymbol{x_2} \rangle = 0" /> （または <InlineMath math="\boldsymbol{x_1}^T \boldsymbol{x_2} = 0" />）が成り立つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    この証明は、自己随伴作用素の性質（<InlineMath math="\langle A\boldsymbol{x}, \boldsymbol{y} \rangle = \langle \boldsymbol{x}, A\boldsymbol{y} \rangle" />）を最も美しく利用する典型例です。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>条件の確認：</strong><br />
                        仮定より、<InlineMath math="A \boldsymbol{x_1} = \lambda_1 \boldsymbol{x_1}" /> であり、<InlineMath math="A \boldsymbol{x_2} = \lambda_2 \boldsymbol{x_2}" /> である。<br />
                        また、固有値は異なるため <InlineMath math="\lambda_1 \neq \lambda_2" /> である。<br />
                        前節の定理より、<InlineMath math="\lambda_1, \lambda_2" /> およびベクトル <InlineMath math="\boldsymbol{x_1}, \boldsymbol{x_2}" /> はすべて実数の範囲（<InlineMath math="\mathbb{R}^n" />）で考えてよい。<br />
                        また、<InlineMath math="A" /> は実対称行列なので <InlineMath math="A^T = A" /> である。
                    </li>
                    <li>
                        <strong>内積に対する2通りのアプローチ：</strong><br />
                        標準内積 <InlineMath math="\langle A\boldsymbol{x_1}, \boldsymbol{x_2} \rangle = (A\boldsymbol{x_1})^T \boldsymbol{x_2}" /> を計算する。
                    </li>
                    <li className="list-none">
                        <strong>アプローチ A（左側の <InlineMath math="A" /> を固有値に変換）：</strong><br />
                        <InlineMath math="A\boldsymbol{x_1} = \lambda_1 \boldsymbol{x_1}" /> を代入する。<br />
                        <BlockMath math="(A\boldsymbol{x_1})^T \boldsymbol{x_2} = (\lambda_1 \boldsymbol{x_1})^T \boldsymbol{x_2} = \lambda_1 (\boldsymbol{x_1}^T \boldsymbol{x_2})" />
                    </li>
                    <li className="list-none">
                        <strong>アプローチ B（<InlineMath math="A" /> を転置して右側へ移動）：</strong><br />
                        <InlineMath math="(A\boldsymbol{x_1})^T = \boldsymbol{x_1}^T A^T" /> を用いる。さらに <InlineMath math="A^T = A" /> を使う。<br />
                        <BlockMath math="(A\boldsymbol{x_1})^T \boldsymbol{x_2} = \boldsymbol{x_1}^T A^T \boldsymbol{x_2} = \boldsymbol{x_1}^T A \boldsymbol{x_2}" />
                        ここで、後ろのブロックに <InlineMath math="A\boldsymbol{x_2} = \lambda_2 \boldsymbol{x_2}" /> を代入する。<br />
                        <BlockMath math="\boldsymbol{x_1}^T (A \boldsymbol{x_2}) = \boldsymbol{x_1}^T (\lambda_2 \boldsymbol{x_2}) = \lambda_2 (\boldsymbol{x_1}^T \boldsymbol{x_2})" />
                    </li>
                    <li>
                        <strong>結果の比較と結論：</strong><br />
                        アプローチAとBは同じものを計算しているので、等式で結ぶ。<br />
                        <BlockMath math="\lambda_1 (\boldsymbol{x_1}^T \boldsymbol{x_2}) = \lambda_2 (\boldsymbol{x_1}^T \boldsymbol{x_2})" />
                        移項してくくる。
                        <BlockMath math="(\lambda_1 - \lambda_2) (\boldsymbol{x_1}^T \boldsymbol{x_2}) = 0" />
                        仮定より <InlineMath math="\lambda_1 \neq \lambda_2" /> であるため、<InlineMath math="(\lambda_1 - \lambda_2) \neq 0" /> である。<br />
                        これが <InlineMath math="0" /> になるためには、もう一方が <InlineMath math="0" /> になるしかない。
                        <BlockMath math="\boldsymbol{x_1}^T \boldsymbol{x_2} = 0 \quad \left(すなわち \langle \boldsymbol{x_1}, \boldsymbol{x_2} \rangle = 0 \right)" />
                        したがって、異なる固有値に対応する固有ベクトルは直交することが証明された。
                        
                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="重複する固有値の場合は？">
                <p>
                    この定理は「異なる固有値」に対する固有ベクトルが直交することを示しています。<br />
                    では、もし実対称行列 <InlineMath math="A" /> が「重解（重複する固有値）」を持っていたらどうなるでしょうか？
                </p>
                <p>
                    実は、実対称行列の場合は「重解を持つ固有値に対応する固有空間（固有ベクトルの集まり）」は、必ずその<strong>重解の数（代数的重複度）と同じ次元</strong>を持つことが証明されています（対角化可能であることの強力な保証）。<br />
                    そして、同じ固有空間の中にある固有ベクトルたちは最初から直交しているわけではありませんが、Chapter 9 で学んだ<strong>「グラム・シュミットの直交化法」</strong>を使えば、その空間の中から互いに直交する固有ベクトル（正規直交基底）を人工的に選び出すことができるのです。<br /><br />
                    つまり、<strong>「異なる固有値のグループ間は最初から自動的に直交しており、同じ固有値のグループ内はグラム・シュミット法で直交させることができる」</strong>ため、最終的に空間全体をカバーする<strong>直交する固有ベクトルのセット</strong>が必ず完成します。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§11.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>実対称行列の、相異なる固有値に対応する固有ベクトルは必ず互いに<strong>直交</strong>する（Theorem 11.2-1）。</li>
                    <li>この証明は、内積の対極に作用素を移動させても変化しない（<InlineMath math="A^T = A" />）という、自己随伴作用素の究極の特性を利用して鮮やかに行われる。</li>
                    <li>固有値が重複している場合でも、グラム・シュミットの直交化法を併用することで、空間全体の完全な「直交する固有ベクトル群」を構築できる。これが次節の「直交対角化（スペクトル定理）」への直接の準備となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
