import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ProductMeasure() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                直積空間上の可測集合族が定義されたので、次はそこに測度を導入します。
                二つの測度 <InlineMath math="\mu" /> と <InlineMath math="\nu" /> から作られる新しい測度「直積測度」は、直感的には「縦 <InlineMath math="\mu(A)" />、横 <InlineMath math="\nu(B)" /> の長方形の面積」を基準として構成されます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">直積測度の存在と一意性</h2>

            <p>
                直積測度の構成には、カラテオドリの拡張定理が背景にあります。
                特に、各成分の測度が「無限大を適切に分割できる」という性質（<InlineMath math="\sigma" />-有限性）が重要です。
            </p>

            <ContentBox type="theorem" title="Theorem 5.2-1 (直積測度の存在と一意性)">
                <p>
                    <InlineMath math="(X, \mathcal{A}, \mu)" /> と <InlineMath math="(Y, \mathcal{B}, \nu)" /> を <InlineMath math="\sigma" />-有限な測度空間とする。
                    このとき、直積可測空間 <InlineMath math="(X \times Y, \mathcal{A} \otimes \mathcal{B})" /> 上に唯一の測度 <InlineMath math="\mu \otimes \nu" /> が存在して、任意の可測矩形 <InlineMath math="A \times B" /> に対して次を満たす：
                    <BlockMath math="(\mu \otimes \nu)(A \times B) = \mu(A)\nu(B)" />
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (スケッチ)">
                <p>
                    定数関数 <InlineMath math="(\mu \otimes \nu)(E)" /> を逐次積分 <InlineMath math="\int_X \nu(E_x) \, d\mu(x)" /> によって定義する。
                    まず <InlineMath math="E" /> が可測矩形 <InlineMath math="A \times B" /> のとき、<InlineMath math="\nu((A \times B)_x) = \nu(B)\mathbf{1}_A(x)" /> となり、積分値は <InlineMath math="\mu(A)\nu(B)" /> となる。
                    これをすべての <InlineMath math="\mathcal{A} \otimes \mathcal{B}" /> の集合に拡張しても可算加法性が保たれることを示すのが主眼となる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">2次元ルベーグ測度</h2>

            <p>
                直積測度の最も代表的な例は、有限次元ユークリッド空間上のルベーグ測度です。
            </p>

            <ContentBox type="example" title="Example 5.2-1 (2次元ルベーグ測度)">
                <p>
                    1次元ルベーグ測度 <InlineMath math="\lambda" /> を自分自身と掛け合わせることで、2次元平面上の測度 <InlineMath math="\lambda_2 = \lambda \otimes \lambda" /> を定義できる。
                    これは、長方形 <InlineMath math="[a, b] \times [c, d]" /> の測度が通常の面積 <InlineMath math="(b-a)(d-c)" /> と一致することを保証する。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="σ-有限性の役割">
                <p>
                    もし <InlineMath math="\sigma" />-有限でない測度（例えば数え上げ測度を取り、それを実数全体のような大きな集合上で定義する場合）を扱うと、直積測度の一意性が失われることがあります。
                    多くの標準的な教科書で <InlineMath math="\sigma" />-有限性が仮定されるのは、この一意性を確保し、計算の整合性を保つためです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§5.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><b>直積測度</b> は、可測矩形に対して「各成分の測度の積」を割り当てる唯一の拡張測度である。</li>
                    <li>この存在と一意性は、測度空間が <b><InlineMath math="\sigma" />-有限</b> である場合に保証される。</li>
                    <li>2 次元ルベーグ測度は、1 次元ルベーグ測度の直積として自然に導かれる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
