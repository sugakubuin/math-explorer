import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function OrthogonalProjectionOperators() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                第7章 §7.2 において、閉部分空間 <InlineMath math="M" /> への直交射影作用素 <InlineMath math="P_M" /> が非常に良い性質（<InlineMath math="P_M^2 = P_M" />, <InlineMath math="P_M^* = P_M" />）を持つことを見ました。<br />
                本節ではこの関係を逆転させ、特定の代数的な条件を満たす有界線形作用素は、すべて何らかの閉部分空間への直交射影であることを示します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影作用素の代数的特徴づけ</h2>

            <p>
                以下の定理は、幾何学的な「射影」という概念を、純粋に代数的な2つの等式へと完全に翻訳できることを保証しています。
            </p>

            <ContentBox type="theorem" title="Theorem 8.4-1">
                <p>
                    ヒルベルト空間 <InlineMath math="H" /> 上の有界線形作用素 <InlineMath math="P \in B(H)" /> について、以下の2条件は同値である。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="P" /> はある閉部分空間 <InlineMath math="M" /> への直交射影作用素である（第7章の定義）。</li>
                    <li><InlineMath math="P^2 = P" />（べき等性）かつ <InlineMath math="P^* = P" />（自己共役性）が成り立つ。</li>
                </ol>
            </ContentBox>

            <p>
                この証明では、作用素の像空間とその直交補空間を具体的に構成し、空間全体が直交和に分解されることを示します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    (1) <InlineMath math="\Rightarrow" /> (2): 第7章の Proposition 7.2-1 ですでに示されている通りである。<br />
                    (2) <InlineMath math="\Rightarrow" /> (1): <InlineMath math="P^2 = P" /> かつ <InlineMath math="P^* = P" /> を満たすとする。まず、空間の分解を考える。<br />
                    像空間 <InlineMath math="M = \text{Im}(P) = \{Px \mid x \in H\}" /> は、<InlineMath math="P" /> の連続性により閉部分空間となる。<br />
                    任意のベクトル <InlineMath math="x \in H" /> は
                </p>
                <BlockMath math="x = Px + (I - P)x" />
                <p>
                    と書ける。<InlineMath math="Px \in M" /> であり、<InlineMath math="P^2 = P" /> より <InlineMath math="P((I - P)x) = Px - P^2 x = Px - Px = 0" /> なので、<InlineMath math="(I - P)x \in \ker P" /> である。
                </p>
                <p>
                    次に、<InlineMath math="M" /> と <InlineMath math="\ker P" /> が直交していることを示す。任意の <InlineMath math="m \in M" /> と <InlineMath math="y \in \ker P" /> をとる。<InlineMath math="m" /> はある <InlineMath math="x" /> を用いて <InlineMath math="m = Px" /> と書ける。自己共役性（<InlineMath math="P^* = P" />）を用いると、
                </p>
                <BlockMath math="\langle m, y \rangle = \langle Px, y \rangle = \langle x, P^* y \rangle = \langle x, Py \rangle" />
                <p>
                    ここで <InlineMath math="y \in \ker P" /> より <InlineMath math="Py = 0" /> であるから、<InlineMath math="\langle m, y \rangle = 0" /> となる。よって <InlineMath math="M \perp \ker P" /> が示された。<br />
                    以上のことから、<InlineMath math="x = Px + (I - P)x" /> はまさに <InlineMath math="H = M \oplus M^\perp" /> における直交分解を与えており、<InlineMath math="P" /> は <InlineMath math="M" /> への直交射影作用素に他ならない。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                具体的な数列空間上で、作用素が実際にこの代数的性質を満たす射影になっているかを確認してみましょう。
            </p>

            <ContentBox type="example" title="Example 8.4-1">
                <p>
                    条件のもとで、実際にどう作用素が振る舞うか確認します。<br />
                    <InlineMath math="\ell^2" /> 上で、最初の <InlineMath math="N" /> 個の成分のみを残し、以降を0にする作用素 <InlineMath math="P_N(x_1, \dots, x_N, x_{N+1}, \dots) = (x_1, \dots, x_N, 0, \dots)" /> を考えます。<br />
                    2回作用させても結果は変わらないので <InlineMath math="P_N^2 = P_N" /> です。<br />
                    また実数の対角作用素の一種（成分に0か1を掛ける）とみなせるため自己共役 <InlineMath math="P_N^* = P_N" /> でもあります。<br />
                    したがってこの作用素は閉部分空間 <InlineMath math="M = \{(x_n) \mid n > N \text{ で } x_n = 0\}" /> への直交射影です。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">射影の順序構造</h2>

            <p>
                2つの直交射影の大小関係（どちらがより「部分的な」空間に射影しているか）を、作用素の積の形のみで判定することができます。
            </p>

            <ContentBox type="theorem" title="Proposition 8.4-1">
                <p>
                    <InlineMath math="P, Q" /> を直交射影作用素とする。以下の2条件は同値である。
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><InlineMath math="\text{Im}(P) \subset \text{Im}(Q)" /> （<InlineMath math="P" /> の射影空間が、<InlineMath math="Q" /> の射影空間の部分空間である）</li>
                    <li><InlineMath math="QP = P" /></li>
                </ol>
            </ContentBox>

            <p>
                像空間の包含関係と、作用素の掛け算によって吸収される性質が同値であることを簡単な計算で示します。
            </p>

            <ContentBox type="proof" title="Proof">
                <p>
                    (2) <InlineMath math="\Rightarrow" /> (1): <InlineMath math="QP = P" /> ならば、任意の <InlineMath math="x" /> に対して <InlineMath math="Px = Q(Px) \in \text{Im}(Q)" /> となる。よって <InlineMath math="\text{Im}(P) \subset \text{Im}(Q)" /> である。
                </p>
                <p>
                    (1) <InlineMath math="\Rightarrow" /> (2): <InlineMath math="\text{Im}(P) \subset \text{Im}(Q)" /> とする。任意の <InlineMath math="x" /> に対して、<InlineMath math="y = Px" /> とおくと、<InlineMath math="y \in \text{Im}(P)" /> なので仮定より <InlineMath math="y \in \text{Im}(Q)" /> でもある。<br />
                    直交射影作用素の性質（<InlineMath math="Q" /> の像空間の元に対して <InlineMath math="Q" /> を作用させると自身のまま）より、
                </p>
                <BlockMath math="Qy = y" />
                <p>
                    となる。もとに戻すと <InlineMath math="Q(Px) = Px" /> となり、これがすべての <InlineMath math="x" /> で成り立つので <InlineMath math="QP = P" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                数列における成分の切り落とし操作の例を用いて、直交射影の包含関係を具体的に確認します。
            </p>

            <ContentBox type="example" title="Example 8.4-2">
                <p>
                    Example 8.4-1 で用いた <InlineMath math="P_N" /> の例で考えます。<br />
                    <InlineMath math="P_2" /> は最初の2成分を残し、<InlineMath math="P_5" /> は最初の5成分を残します。空間の包含関係は明らかに <InlineMath math="\text{Im}(P_2) \subset \text{Im}(P_5)" /> です。<br />
                    ベクトルに <InlineMath math="P_2" /> をかけて「2成分」にしたあと、それに <InlineMath math="P_5" /> をかけても「2成分」のまま変化しないため、代数的には <InlineMath math="P_5 P_2 = P_2" /> が成り立っていることが確認できます。
                </p>
            </ContentBox>

            <p>
                このような射影作用素の順序関係は、代数的な操作を超えて、深遠な物理的意味を持つことがあります。
            </p>

            <ContentBox type="remark" title="射影の順序構造と量子論理">
                <p>
                    Proposition 8.4-1 で示した包含関係（<InlineMath math="P \leq Q \iff \text{Im}(P) \subset \text{Im}(Q)" />）は、全直交射影の集合に「順序構造（格子構造）」を定めます。<br />
                    量子力学において、直交射影作用素は「Yes or No を問う観測（プロポジション）」に対応します。古典論理（ブール代数）では主張の論理積（AND）や論理和（OR）が自由に取れますが、量子力学のプロポジションの集合は、作用素が可換でないため非古典的な論理構造（量子論理）を持ちます。ヒルベルト空間上の射影作用素の格子は、量子論理の数学的実体そのものなのです（詳細は 5-8 作用素環論で学びます）。
                </p>
            </ContentBox>

            <p>
                最後に、直交射影作用素の代数的な特徴づけについて、本節のポイントをまとめます。
            </p>

            <ContentBox type="note" title="§8.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="P^2 = P" /> かつ <InlineMath math="P^* = P" /> を満たす作用素は直交射影作用素と完全に一致する。</li>
                    <li>射影空間の包含関係 <InlineMath math="\text{Im}(P) \subset \text{Im}(Q)" /> は、作用素の積によって <InlineMath math="QP = P" /> と代数的に特徴づけられる。</li>
                    <li>直交射影作用素のこれらの代数的な構造は、量子力学における観測や論理の基礎を提供する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
