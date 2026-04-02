import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function InnerProductAndNorm() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                §1.2 では和とスカラー倍を定義しました。これらの演算だけでは、ベクトルの<strong>長さ</strong>や
                2つのベクトルの<strong>なす角</strong>を扱うことができません。
                本節では、それらを定量化するための道具として<strong>内積</strong>と<strong>ノルム</strong>を導入します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 内積
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">内積</h2>

            {/* Definition 1.3-1 */}
            <ContentBox type="definition" title="Definition 1.3-1 （内積）">
                <p>
                    <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> に対し、<strong>内積</strong>（inner product）<InlineMath math="\mathbf{a} \cdot \mathbf{b}" /> を
                </p>
                <BlockMath math="\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n" />
                <p>
                    と定める。内積の値は<strong>実数（スカラー）</strong>であることに注意する。
                    <InlineMath math="\langle \mathbf{a}, \mathbf{b} \rangle" /> と書く流儀もある。
                </p>
            </ContentBox>

            {/* Example 1.3-1 */}
            <ContentBox type="example" title="Example 1.3-1">
                <p>次の内積を計算せよ。</p>
                <BlockMath math="\mathbf{a} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 4 \\ 2 \\ -1 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="\mathbf{a} \cdot \mathbf{b} = 2 \cdot 4 + (-1) \cdot 2 + 3 \cdot (-1) = 8 - 2 - 3 = 3." />
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">内積の基本性質</h3>

            {/* Proposition 1.3-1 */}
            <ContentBox type="proposition" title="Proposition 1.3-1 （内積の基本性質）">
                <p><InlineMath math="\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathbb{R}^n" />、<InlineMath math="\lambda \in \mathbb{R}" /> に対し、以下が成り立つ。</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>対称性：</strong> <InlineMath math="\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}" /></li>
                    <li><strong>線形性 I：</strong> <InlineMath math="(\mathbf{a} + \mathbf{b}) \cdot \mathbf{c} = \mathbf{a} \cdot \mathbf{c} + \mathbf{b} \cdot \mathbf{c}" /></li>
                    <li><strong>線形性 II：</strong> <InlineMath math="(\lambda \mathbf{a}) \cdot \mathbf{b} = \lambda (\mathbf{a} \cdot \mathbf{b})" /></li>
                    <li><strong>正定値性：</strong> <InlineMath math="\mathbf{a} \cdot \mathbf{a} \geq 0" />、かつ <InlineMath math="\mathbf{a} \cdot \mathbf{a} = 0 \iff \mathbf{a} = \mathbf{0}" /></li>
                </ol>
            </ContentBox>

            <p className="mt-4">
                性質 4 に登場する <InlineMath math="\mathbf{a} \cdot \mathbf{a}" /> は <InlineMath math="a_1^2 + a_2^2 + \cdots + a_n^2 \geq 0" /> であり、
                全成分が <InlineMath math="0" /> のときに限り <InlineMath math="0" /> になります。この値の平方根がベクトルの「長さ」を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 ノルム
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">ノルム</h2>

            {/* Definition 1.3-2 */}
            <ContentBox type="definition" title="Definition 1.3-2 （ノルム・大きさ）">
                <p>
                    <InlineMath math="\mathbf{a} \in \mathbb{R}^n" /> に対し、<strong>ノルム</strong>（norm）または<strong>大きさ</strong>（magnitude）<InlineMath math="\|\mathbf{a}\|" /> を
                </p>
                <BlockMath math="\|\mathbf{a}\| = \sqrt{\mathbf{a} \cdot \mathbf{a}} = \sqrt{a_1^2 + a_2^2 + \cdots + a_n^2}" />
                <p>
                    と定める。<InlineMath math="\mathbb{R}^2, \mathbb{R}^3" /> ではこれは通常の意味での<strong>ベクトルの長さ</strong>（ユークリッド距離）に一致する。
                </p>
            </ContentBox>

            {/* Example 1.3-2 */}
            <ContentBox type="example" title="Example 1.3-2">
                <p>次のベクトルのノルムを求めよ。</p>
                <p className="mb-4">
                    <strong>（1）</strong> <InlineMath math="\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix} \in \mathbb{R}^2" /> &nbsp;&nbsp;&nbsp;
                    <strong>（2）</strong> <InlineMath math="\mathbf{b} = \begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix} \in \mathbb{R}^3" /> &nbsp;&nbsp;&nbsp;
                    <strong>（3）</strong> <InlineMath math="\mathbf{c} = \begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix} \in \mathbb{R}^4" />
                </p>
                <p className="font-bold mt-4">解．</p>
                <div className="overflow-x-auto">
                    <BlockMath math="\begin{aligned} &(1)\quad \|\mathbf{a}\| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5. \\ &(2)\quad \|\mathbf{b}\| = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1+4+4} = \sqrt{9} = 3. \\ &(3)\quad \|\mathbf{c}\| = \sqrt{1^2+1^2+1^2+1^2} = \sqrt{4} = 2. \end{aligned}" />
                </div>
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">ノルムの基本性質</h3>

            {/* Proposition 1.3-2 */}
            <ContentBox type="proposition" title="Proposition 1.3-2 （ノルムの基本性質）">
                <p><InlineMath math="\mathbf{a} \in \mathbb{R}^n" />、<InlineMath math="\lambda \in \mathbb{R}" /> に対し、以下が成り立つ。</p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><InlineMath math="\|\mathbf{a}\| \geq 0" />、かつ <InlineMath math="\|\mathbf{a}\| = 0 \iff \mathbf{a} = \mathbf{0}" /></li>
                    <li><InlineMath math="\|\lambda \mathbf{a}\| = |\lambda| \, \|\mathbf{a}\|" /></li>
                </ol>
                <p className="mt-4">
                    性質 2 の <InlineMath math="|\lambda|" /> は実数 <InlineMath math="\lambda" /> の絶対値である。
                    たとえば <InlineMath math="\lambda = -3" /> のとき <InlineMath math="\|-3\mathbf{a}\| = 3\|\mathbf{a}\|" /> となり、
                    ベクトルを <InlineMath math="-3" /> 倍しても長さは <InlineMath math="3" /> 倍になるだけで符号はつかない。
                </p>
            </ContentBox>

            <h3 className="text-xl font-bold mt-10 mb-4">単位ベクトル</h3>

            {/* Definition 1.3-3 */}
            <ContentBox type="definition" title="Definition 1.3-3 （単位ベクトル）">
                <p>
                    ノルムが <InlineMath math="1" /> であるベクトル、すなわち <InlineMath math="\|\mathbf{a}\| = 1" /> を満たす <InlineMath math="\mathbf{a}" /> を
                    <strong>単位ベクトル</strong>（unit vector）という。
                    また、零ベクトルでない任意のベクトル <InlineMath math="\mathbf{a}" /> に対し、
                </p>
                <BlockMath math="\hat{\mathbf{a}} = \frac{\mathbf{a}}{\|\mathbf{a}\|}" />
                <p>
                    は <InlineMath math="\mathbf{a}" /> と同じ向きを持つ単位ベクトルである。
                    これを <InlineMath math="\mathbf{a}" /> を<strong>正規化</strong>（normalize）するという。
                </p>
            </ContentBox>

            {/* Example 1.3-3 */}
            <ContentBox type="example" title="Example 1.3-3">
                <p>
                    <InlineMath math="\mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}" /> を正規化せよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>まず <InlineMath math="\|\mathbf{a}\|" /> を求める。</p>
                <BlockMath math="\|\mathbf{a}\| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1+4+4} = 3." />
                <p>したがって、</p>
                <BlockMath math="\hat{\mathbf{a}} = \frac{1}{3}\begin{pmatrix}1\\2\\-2\end{pmatrix} = \begin{pmatrix}1/3\\2/3\\-2/3\end{pmatrix}." />
                <p>
                    確認：<InlineMath math="\|\hat{\mathbf{a}}\| = \sqrt{(1/3)^2 + (2/3)^2 + (-2/3)^2} = \sqrt{1/9+4/9+4/9} = \sqrt{9/9} = 1" />. &nbsp; 正しい。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 内積とノルムの関係——なす角
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">内積とノルムの関係——なす角</h2>

            <p>
                <InlineMath math="\mathbb{R}^2, \mathbb{R}^3" /> では、内積とノルムを使って2つのベクトルの<strong>なす角</strong>を表すことができます。
                これが内積の幾何学的な意味の核心です。
            </p>

            {/* Proposition 1.3-3 */}
            <ContentBox type="proposition" title="Proposition 1.3-3 （内積となす角）">
                <p>
                    零ベクトルでない <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> のなす角を <InlineMath math="\theta\ (0 \leq \theta \leq \pi)" /> とすると、
                </p>
                <BlockMath math="\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \, \|\mathbf{b}\| \cos\theta." />
                <p>
                    同値な表現として、
                </p>
                <BlockMath math="\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\| \, \|\mathbf{b}\|}." />
            </ContentBox>

            <ContentBox type="remark" title="Remark （直交の条件）">
                <p>
                    Proposition 1.3-3 より、<InlineMath math="\theta = 90^\circ" />（すなわち <InlineMath math="\cos\theta = 0" />）のとき
                    <InlineMath math="\mathbf{a} \cdot \mathbf{b} = 0" /> が成り立ちます。
                    逆に <InlineMath math="\mathbf{a} \cdot \mathbf{b} = 0" /> ならば <InlineMath math="\theta = 90^\circ" /> です。
                    この事実を<strong>直交条件</strong>と呼び、非常によく使います：
                </p>
                <BlockMath math="\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0." />
            </ContentBox>

            {/* Example 1.3-4 */}
            <ContentBox type="example" title="Example 1.3-4">
                <p>次の2つのベクトルのなす角 <InlineMath math="\theta" /> を求めよ。</p>
                <BlockMath math="\mathbf{a} = \begin{pmatrix} 1 \\ \sqrt{3} \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} \sqrt{3} \\ 1 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <BlockMath math="\mathbf{a} \cdot \mathbf{b} = 1 \cdot \sqrt{3} + \sqrt{3} \cdot 1 = 2\sqrt{3}." />
                <BlockMath math="\|\mathbf{a}\| = \sqrt{1 + 3} = 2, \qquad \|\mathbf{b}\| = \sqrt{3 + 1} = 2." />
                <BlockMath math="\cos\theta = \frac{2\sqrt{3}}{2 \cdot 2} = \frac{\sqrt{3}}{2}." />
                <p>
                    <InlineMath math="0 \leq \theta \leq \pi" /> の範囲で <InlineMath math="\cos\theta = \frac{\sqrt{3}}{2}" /> を満たすのは
                    <InlineMath math="\theta = \frac{\pi}{6}\ (= 30^\circ)" /> である。
                </p>
            </ContentBox>

            {/* Example 1.3-5 */}
            <ContentBox type="example" title="Example 1.3-5">
                <p>
                    <InlineMath math="\mathbf{a} = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}" /> と直交するベクトルを
                    <InlineMath math="\mathbf{b} = \begin{pmatrix} x \\ 1 \\ 3 \end{pmatrix}" /> の形で求めよ。
                </p>
                <p className="font-bold mt-4">解．</p>
                <p>直交条件 <InlineMath math="\mathbf{a} \cdot \mathbf{b} = 0" /> より、</p>
                <BlockMath math="2x + 1 \cdot 1 + (-1) \cdot 3 = 0 \implies 2x - 2 = 0 \implies x = 1." />
                <p>したがって <InlineMath math="\mathbf{b} = \begin{pmatrix}1\\1\\3\end{pmatrix}" />。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>内積 <InlineMath math="\mathbf{a} \cdot \mathbf{b} = \sum a_i b_i" /> は対応する成分の積の和で、値はスカラー（Definition 1.3-1）。</li>
                    <li>ノルム <InlineMath math="\|\mathbf{a}\| = \sqrt{\mathbf{a} \cdot \mathbf{a}}" /> はベクトルの長さを表す（Definition 1.3-2）。</li>
                    <li><InlineMath math="\hat{\mathbf{a}} = \mathbf{a}/\|\mathbf{a}\|" /> とおくことで <InlineMath math="\mathbf{a}" /> を正規化できる（Definition 1.3-3）。</li>
                    <li>なす角 <InlineMath math="\theta" /> は <InlineMath math="\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{\|\mathbf{a}\|\|\mathbf{b}\|}" /> で求まる（Proposition 1.3-3）。</li>
                    <li><InlineMath math="\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0" /> が直交の判定条件である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
