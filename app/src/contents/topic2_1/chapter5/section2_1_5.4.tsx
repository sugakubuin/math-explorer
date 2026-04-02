import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function EigenspaceAndMultiplicity() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ある固有値 <InlineMath math="\lambda" /> に対応する固有ベクトルは無数に存在します（スカラー倍や和をとったものも固有ベクトルになるため）。
                したがって、これらはベクトル空間（部分空間）を形成します。<br />
                ここでは「固有空間」という部分空間の概念と、固有値が何度も重複して出てくる場合の「重複度」という重要な概念について整理します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">固有空間</h2>

            <p>
                同じ固有値に属する固有ベクトルは、零ベクトルを加えれば見事な部分空間を構成します。
            </p>

            <ContentBox type="definition" title="Definition 5.4-1 （固有空間 / Eigenspace）">
                <p>
                    行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda" /> に対して、以下のような集合を考える。
                </p>
                <BlockMath math="W(\lambda) = \{ \boldsymbol{x} \in \mathbb{C}^n \mid A\boldsymbol{x} = \lambda \boldsymbol{x} \}" />
                <p>
                    この <InlineMath math="W(\lambda)" /> は、<InlineMath math="\lambda" /> を固有値とする固有ベクトル全体に、零ベクトル <InlineMath math="\boldsymbol{0}" /> を付け加えた集合である。<br />
                    この集合は <InlineMath math="\mathbb{C}^n" /> の部分空間となるため、これを固有値 <InlineMath math="\lambda" /> に属する<strong>固有空間</strong>と呼ぶ。<br />
                    <InlineMath math="W(\lambda)" /> は行列の核（Ker）の言葉を使えば、<InlineMath math="W(\lambda) = \ker(A - \lambda I)" /> と書くこともできる。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="W(\lambda)" /> が <InlineMath math="\mathbb{C}^n" /> の部分空間であることを示す。<br />
                    それには、<InlineMath math="W(\lambda)" /> が和とスカラー倍について閉じていることを示せばよい。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>和について閉じていること：</strong><br />
                        <InlineMath math="\boldsymbol{x}, \boldsymbol{y} \in W(\lambda)" /> とする。このとき <InlineMath math="A\boldsymbol{x} = \lambda\boldsymbol{x}" /> および <InlineMath math="A\boldsymbol{y} = \lambda\boldsymbol{y}" /> が成り立つ。
                        両辺を足すと <InlineMath math="A(\boldsymbol{x}+\boldsymbol{y}) = A\boldsymbol{x} + A\boldsymbol{y} = \lambda\boldsymbol{x} + \lambda\boldsymbol{y} = \lambda(\boldsymbol{x}+\boldsymbol{y})" />。<br />
                        よって <InlineMath math="\boldsymbol{x}+\boldsymbol{y} \in W(\lambda)" /> である。
                    </li>
                    <li>
                        <strong>スカラー倍について閉じていること：</strong><br />
                        <InlineMath math="\boldsymbol{x} \in W(\lambda)" />、<InlineMath math="c \in \mathbb{C}" /> とする。<br />
                        <InlineMath math="A(c\boldsymbol{x}) = c(A\boldsymbol{x}) = c(\lambda\boldsymbol{x}) = \lambda(c\boldsymbol{x})" />。<br />
                        よって <InlineMath math="c\boldsymbol{x} \in W(\lambda)" /> である。
                    </li>
                    <li>
                        明らかに <InlineMath math="A\boldsymbol{0} = \lambda\boldsymbol{0} = \boldsymbol{0}" /> より <InlineMath math="\boldsymbol{0} \in W(\lambda)" /> である。
                    </li>
                </ul>
                <p>以上より、<InlineMath math="W(\lambda)" /> は部分空間である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">重複度</h2>

            <p>
                特性方程式の解において、同じ解（固有値）が「何個重なっているか」と、その固有値に対応する固有ベクトルが「何次元分あるか（固有空間が何次元か）」は、実は一致するとは限りません。<br />
                この違いを明確にするため、「重なり」を2つの視点から数えます。
            </p>

            <ContentBox type="definition" title="Definition 5.4-2 （代数的重複度・幾何的重複度）">
                <p>
                    行列 <InlineMath math="A" /> の固有値 <InlineMath math="\lambda_i" /> に対して：
                </p>
                <ul className="list-decimal pl-5 mt-2 space-y-4">
                    <li>
                        <strong>代数的重複度（Algebraic Multiplicity）：</strong><br />
                        特性多項式 <InlineMath math="\Phi_A(t)" /> を因数分解したときに、因数 <InlineMath math="(t - \lambda_i)" /> が何乗されているかを表す数。<br />
                        つまり、方程式での「解の重複度（重解の個数）」のこと。
                    </li>
                    <li>
                        <strong>幾何的重複度（Geometric Multiplicity）：</strong><br />
                        固有空間 <InlineMath math="W(\lambda_i)" /> の<strong>次元</strong> <InlineMath math="\dim W(\lambda_i)" /> のこと。<br />
                        つまり、その固有値に対して引くことができる「線形独立な固有ベクトルの最大の本数」のこと。
                    </li>
                </ul>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">重複度の大小関係</h2>

            <p>
                これら2つの重複度は一般に一致しませんが、必ず一定の大小関係が成り立ちます。<br />
                「連立方程式から出てくるベクトルの本数は、方程式上の重解の数を超えることはできない」という性質です。
            </p>

            <ContentBox type="proposition" title="Proposition 5.4-1 （幾何的重複度と代数的重複度の関係）">
                <p>
                    任意の固有値 <InlineMath math="\lambda" /> に対して、必ず以下が成り立つ。
                </p>
                <BlockMath math="1 \leq (\text{幾何的重複度}) \leq (\text{代数的重複度})" />
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    幾何的重複度（<InlineMath math="\dim W(\lambda)" />）を <InlineMath math="k" />、代数的重複度を <InlineMath math="m" /> とおく。<InlineMath math="1 \leq k \leq m" /> を示す。
                </p>
                <p>
                    <InlineMath math="\lambda" /> は（少なくとも1つは固有ベクトルを持つ）固有値であるため、幾何的重複度 <InlineMath math="k" /> は少なくとも <InlineMath math="1" /> 以上である（<InlineMath math="k \geq 1" />）。
                </p>
                <p>
                    次に <InlineMath math="k \leq m" /> を示す。<br />
                    固有空間 <InlineMath math="W(\lambda)" /> の次元が <InlineMath math="k" /> なので、<InlineMath math="W(\lambda)" /> には <InlineMath math="k" /> 個の線形独立な基底が存在する。
                    これを適当なベクトルを付け加えて延長し、空間全体の基底 <InlineMath math="\mathcal{B} = \{ \boldsymbol{v}_1, \dots, \boldsymbol{v}_k, \boldsymbol{v}_{k+1}, \dots, \boldsymbol{v}_n \}" /> を作る。<br />
                    （最初の <InlineMath math="k" /> 本が固有空間の基底、すなわち固有ベクトルとする）
                </p>
                <p>
                    この順序付き基底 <InlineMath math="\mathcal{B}" /> による行列 <InlineMath math="A" /> の表現行列を考える。最初の <InlineMath math="k" /> 個のベクトルは <InlineMath math="A\boldsymbol{v}_j = \lambda\boldsymbol{v}_j" /> を満たすため、表現行列は次のようなブロック行列の形になる。
                </p>
                <BlockMath math="B = P^{-1}AP = \begin{pmatrix} \lambda I_k & * \\ 0 & C \end{pmatrix}" />
                <p>
                    （ここで <InlineMath math="P" /> は基底の変換行列、<InlineMath math="I_k" /> は <InlineMath math="k \times k" /> 単位行列、<InlineMath math="C" /> は <InlineMath math="(n-k) \times (n-k)" /> 行列である）
                </p>
                <p>
                    特性多項式は基底の取り換え（相似変換）によって変化しないため、
                </p>
                <BlockMath math="\Phi_A(t) = \det(tI_n - A) = \det(tI_n - B)" />
                <p>
                    となる。<InlineMath math="tI_n - B" /> もブロック行列なので、行列式の性質から、対角ブロックの行列式の積に分解できる。
                </p>
                <BlockMath math="\begin{aligned} \det(tI_n - B) &= \det(tI_k - \lambda I_k) \cdot \det(tI_{n-k} - C) \\ &= (t - \lambda)^k \cdot \det(tI_{n-k} - C) \end{aligned}" />
                <p>
                    この式から、特性多項式 <InlineMath math="\Phi_A(t)" /> は因子 <InlineMath math="(t - \lambda)^k" /> を持つことがわかる。
                    代数的重複度 <InlineMath math="m" /> とは因数 <InlineMath math="(t - \lambda)" /> の最大べき乗数であるため、明らかに <InlineMath math="k \leq m" /> である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="対角化可能性への兆し">
                <p>
                    「代数的重複度と幾何的重複度がぴったり一致するか？」という問題は、次章で学ぶ「行列が対角化できるかどうか」を判定するための最も重要な基準（必要十分条件）になります。<br />
                    一致しない（固有ベクトルの本数が足りない）行列は、対角化を行うことができません。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§5.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>同じ固有値に属する固有ベクトル全体と零ベクトルからなる集合は、<strong>固有空間</strong>という部分空間になる（Definition 5.4-1）。</li>
                    <li>特性方程式での重解の個数を<strong>代数的重複度</strong>、固有空間から得られる線形独立なベクトルの本数（次元）を<strong>幾何的重複度</strong>という（Definition 5.4-2）。</li>
                    <li>常に 「幾何的重複度 <InlineMath math="\leq" /> 代数的重複度」という関係が成り立つ（Proposition 5.4-1）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
