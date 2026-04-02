import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function VectorCauchySchwarz() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                §1.3 で導入した内積とノルムの間には、非常に重要な不等式が成り立ちます。
                これを<strong>コーシー・シュワルツの不等式</strong>といいます。
                この不等式は、ベクトル解析だけでなく、解析学や確率論など数学の広範な分野で基礎となる定理です。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 コーシー・シュワルツの不等式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">コーシー・シュワルツの不等式</h2>

            {/* Theorem 1.4-1 */}
            <ContentBox type="theorem" title="Theorem 1.4-1 （コーシー・シュワルツの不等式）">
                <p>
                    任意の <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> に対し、次の不等式が成り立つ。
                </p>
                <BlockMath math="|\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\| \|\mathbf{b}\|" />
                <p>
                    等号が成立するのは、<InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> が<strong>平行</strong>（一方が他方の実数倍）であるときに限る。
                    すなわち、ある実数 <InlineMath math="k" /> が存在して <InlineMath math="\mathbf{b} = k\mathbf{a}" /> または <InlineMath math="\mathbf{a} = k\mathbf{b}" /> となるときである。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    任意の <InlineMath math="t \in \mathbb{R}" /> に対して、
                    <InlineMath math="\|\mathbf{a} + t\mathbf{b}\|^2 \geq 0" /> が成り立つことを利用する。
                    （<InlineMath math="\mathbf{b} = \mathbf{0}" /> のときは明らかに成立するので <InlineMath math="\mathbf{b} \neq \mathbf{0}" /> とする）
                </p>
                {/* PC/Tablet: 改行なし */}
                <div className="hidden md:block">
                    <BlockMath math="
                        \|\mathbf{a} + t\mathbf{b}\|^2
                        = (\mathbf{a} + t\mathbf{b}) \cdot (\mathbf{a} + t\mathbf{b})
                        = \|\mathbf{a}\|^2 + 2t(\mathbf{a} \cdot \mathbf{b}) + t^2\|\mathbf{b}\|^2
                        \geq 0
                    " />
                </div>
                {/* Mobile: 等号で揃えて改行 */}
                <div className="block md:hidden overflow-x-auto">
                    <BlockMath math="
                        \begin{aligned}
                        \|\mathbf{a} + t\mathbf{b}\|^2
                        &= (\mathbf{a} + t\mathbf{b}) \cdot (\mathbf{a} + t\mathbf{b}) \\
                        &= \|\mathbf{a}\|^2 + 2t(\mathbf{a} \cdot \mathbf{b}) + t^2\|\mathbf{b}\|^2 \\
                        &\geq 0
                        \end{aligned}
                    " />
                </div>
                <p>
                    これは <InlineMath math="t" /> についての2次不等式である。
                    常に <InlineMath math="0" /> 以上であるためには、判別式 <InlineMath math="D" /> が <InlineMath math="0" /> 以下でなければならない。
                </p>
                <BlockMath math="
                    D/4 = (\mathbf{a} \cdot \mathbf{b})^2 - \|\mathbf{a}\|^2 \|\mathbf{b}\|^2 \leq 0
                " />
                <p>よって、</p>
                <BlockMath math="(\mathbf{a} \cdot \mathbf{b})^2 \leq \|\mathbf{a}\|^2 \|\mathbf{b}\|^2 \implies |\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\| \|\mathbf{b}\|." />
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="Remark （なす角との関係）">
                <p>
                    前節で見た <InlineMath math="\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos\theta" /> を思い出せば、
                    この不等式は <InlineMath math="|\cos\theta| \leq 1" /> という事実に対応しています。
                    コーシー・シュワルツの不等式は、<InlineMath math="\mathbb{R}^n" /> において「なす角」を定義するための論理的な支柱でもあります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 三角不等式
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">三角不等式</h2>

            <p>
                ベクトルの「長さ」に関する基本的な性質として、もう一つ重要なのが<strong>三角不等式</strong>です。
                「寄り道をするより真っ直ぐ行ったほうが近い」という直感的な事実を表しています。
            </p>

            {/* Theorem 1.4-2 */}
            <ContentBox type="theorem" title="Theorem 1.4-2 （三角不等式）">
                <p>
                    任意の <InlineMath math="\mathbf{a}, \mathbf{b} \in \mathbb{R}^n" /> に対し、次の不等式が存在する。
                </p>
                <BlockMath math="\|\mathbf{a} + \mathbf{b}\| \leq \|\mathbf{a}\| + \|\mathbf{b}\|" />
                <p>
                    等号が成立するのは、<InlineMath math="\mathbf{a}" /> と <InlineMath math="\mathbf{b}" /> が<strong>同じ向き</strong>のとき（一方が他方の非負の実数倍）に限る。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>両辺ともに正なので、2乗して比較する。</p>
                <BlockMath math="
                    \begin{aligned}
                    \|\mathbf{a} + \mathbf{b}\|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) \\
                    &= \|\mathbf{a}\|^2 + 2(\mathbf{a} \cdot \mathbf{b}) + \|\mathbf{b}\|^2
                    \end{aligned}
                " />
                <p>ここでコーシー・シュワルツの不等式 <InlineMath math="\mathbf{a} \cdot \mathbf{b} \leq |\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\|\|\mathbf{b}\|" /> を用いると、</p>
                <BlockMath math="
                    \begin{aligned}
                    \|\mathbf{a}\|^2 + 2(\mathbf{a} \cdot \mathbf{b}) + \|\mathbf{b}\|^2
                    &\leq \|\mathbf{a}\|^2 + 2\|\mathbf{a}\|\|\mathbf{b}\| + \|\mathbf{b}\|^2 \\
                    &= (\|\mathbf{a}\| + \|\mathbf{b}\|)^2
                    \end{aligned}
                " />
                <p>したがって <InlineMath math="\|\mathbf{a} + \mathbf{b}\|^2 \leq (\|\mathbf{a}\| + \|\mathbf{b}\|)^2" /> となり、定理が得られる。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <div className="flex flex-col items-center my-8">
                <svg width="340" height="200" viewBox="-10 -15 340 200" className="max-w-full">
                    <defs>
                        <marker id="arr-tri" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#1a1208" className="fill-slate-900 dark:fill-slate-100" />
                        </marker>
                    </defs>

                    {/* Triangle */}
                    <path d="M40,160 L140,40 L280,160 z" fill="none" stroke="#ddd" strokeWidth="1" className="stroke-slate-300 dark:stroke-slate-700" />

                    {/* Vector a */}
                    <line x1="40" y1="160" x2="136" y2="45" className="stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" markerEnd="url(#arr-tri)" />
                    <text x="70" y="90" fontSize="16" className="fill-blue-600 dark:fill-blue-400 font-serif italic font-bold">a</text>

                    {/* Vector b */}
                    <line x1="140" y1="40" x2="276" y2="156" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" markerEnd="url(#arr-tri)" />
                    <text x="220" y="90" fontSize="16" className="fill-emerald-600 dark:fill-emerald-400 font-serif italic font-bold">b</text>

                    {/* Vector a+b */}
                    <line x1="40" y1="160" x2="276" y2="160" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" markerEnd="url(#arr-tri)" />
                    <text x="150" y="185" fontSize="16" className="fill-rose-600 dark:fill-rose-400 font-serif italic font-bold">a + b</text>

                    {/* Points */}
                    <circle cx="40" cy="160" r="3" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="140" cy="40" r="3" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="280" cy="160" r="3" className="fill-slate-800 dark:fill-slate-200" />
                </svg>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 italic text-center">
                    図 1.4 &nbsp; 三角不等式の幾何学的意味。<br />
                    2辺の長さの和 <InlineMath math="\|\mathbf{a}\| + \|\mathbf{b}\|" /> は、残りの1辺の長さ <InlineMath math="\|\mathbf{a}+\mathbf{b}\|" /> 以上になる。
                </p>
            </div>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 一次独立と一次従属
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">一次独立と一次従属</h2>

            <p>
                最後に、ベクトルを扱う上で最も重要な概念の一つである「一次独立」について学びます。
                これは、ベクトルの組が「冗長であるかどうか」を表す概念です。
            </p>

            {/* Definition 1.4-1 */}
            <ContentBox type="definition" title="Definition 1.4-1 （一次独立）">
                <p>
                    <InlineMath math="k" /> 個のベクトル <InlineMath math="\mathbf{v}_1, \dots, \mathbf{v}_k" /> について、
                    以下の式（一次関係式）が成立するのが、係数がすべて <InlineMath math="0" /> のとき（<InlineMath math="c_1 = \dots = c_k = 0" />）に限る場合、
                    これらのベクトルは<strong>一次独立</strong>（linearly independent）であるという。
                </p>
                <BlockMath math="c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k = \mathbf{0}" />
                <p>
                    逆に、係数がすべて <InlineMath math="0" /> でなくてもこの式が成り立つ場合（少なくとも一つの <InlineMath math="c_i \neq 0" /> が存在する場合）、
                    これらのベクトルは<strong>一次従属</strong>（linearly dependent）であるという。
                </p>
            </ContentBox>

            <ContentBox type="note" title="直感的な意味">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>一次従属</strong>: あるベクトルが、他のベクトルの一次結合（線形結合）で表せる状態。
                        <br />
                        例えば <InlineMath math="\mathbf{v}_3 = 2\mathbf{v}_1 - \mathbf{v}_2" /> のように書けるなら、<InlineMath math="\mathbf{v}_3" /> は「新しい方向」を持っておらず、情報として冗長です。
                        このとき <InlineMath math="2\mathbf{v}_1 - \mathbf{v}_2 - \mathbf{v}_3 = \mathbf{0}" /> となり、係数がすべて0でない一次関係式が成り立ちます。
                    </li>
                    <li>
                        <strong>一次独立</strong>: どのベクトルも、他のベクトルの一次結合では表せない状態。
                        それぞれのベクトルが「独自の方向」を向いており、無駄がない状態です。
                    </li>
                </ul>
            </ContentBox>

            {/* Example 1.4-1 */}
            <ContentBox type="example" title="Example 1.4-1">
                <p>
                    <InlineMath math="\mathbb{R}^2" /> において、次のベクトルの組は一次独立か？
                </p>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>
                        <InlineMath math="\mathbf{a} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \mathbf{b} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" />
                    </li>
                    <li>
                        <InlineMath math="\mathbf{c} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \mathbf{d} = \begin{pmatrix} 2 \\ 2 \end{pmatrix}" />
                    </li>
                </ol>
                <p className="font-bold mt-4">解．</p>
                <p>
                    (1) <InlineMath math="c_1 \mathbf{a} + c_2 \mathbf{b} = \mathbf{0}" /> とおくと、
                    <InlineMath math="\begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" /> より <InlineMath math="c_1 = 0, c_2 = 0" />。
                    よって<strong>一次独立</strong>。
                </p>
                <p>
                    (2) <InlineMath math="\mathbf{d} = 2\mathbf{c}" /> であるから、<InlineMath math="2\mathbf{c} - \mathbf{d} = \mathbf{0}" />。
                    係数が <InlineMath math="(2, -1)" /> であり、すべて <InlineMath math="0" /> ではない。
                    よって<strong>一次従属</strong>。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>コーシー・シュワルツの不等式</strong>: <InlineMath math="|\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\| \|\mathbf{b}\|" /><br />
                        <span className="text-sm text-slate-600 dark:text-slate-400 ml-6">内積の絶対値は、各ノルムの積以下である。</span>
                    </li>
                    <li>
                        <strong>三角不等式</strong>: <InlineMath math="\|\mathbf{a} + \mathbf{b}\| \leq \|\mathbf{a}\| + \|\mathbf{b}\|" /><br />
                        <span className="text-sm text-slate-600 dark:text-slate-400 ml-6">ベクトルの長さに関する基本的な性質。</span>
                    </li>
                    <li>
                        <strong>一次独立</strong>: <InlineMath math="\sum c_i \mathbf{v}_i = \mathbf{0} \implies \text{all } c_i=0" />。<br />
                        <span className="text-sm text-slate-600 dark:text-slate-400 ml-6">どのベクトルも他のベクトルの組み合わせで表せない状態。</span>
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
