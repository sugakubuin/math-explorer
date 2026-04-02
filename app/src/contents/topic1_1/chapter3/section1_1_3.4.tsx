import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function SolutionExistence() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            {/* Intro */}
            <p>
                連立方程式は必ずしも「ただ一つの解」を持つわけではありません。
                「解が存在しない」場合や、「無数の解が存在する」場合もあります。
                これらのケースを行列の<strong>階数（rank）</strong>という概念を使って整理・判定する定理（ルシェ・カペリの定理）を学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 階数（Rank）
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">階数（Rank）</h2>

            {/* Definition 3.4-1 */}
            <ContentBox type="definition" title="Definition 3.4-1 （階数）">
                <p>
                    行列 <InlineMath math="A" /> を行基本変形によって階段行列に変形したとき、
                    その<strong>主成分（0でない成分）を持つ行の数（非零行の数）</strong>を行列 <InlineMath math="A" /> の<strong>階数</strong>（rank）といい、
                    <InlineMath math="\mathrm{rank}(A)" /> または <InlineMath math="\mathrm{rk}(A)" /> と表す。
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ 階段行列の形は一意ではありませんが、非零行の数は一意に定まることが証明されています。
                </p>
            </ContentBox>

            {/* Example 3.4-1 */}
            <ContentBox type="example" title="Example 3.4-1 （階数の計算）">
                <p>次の行列の階数を求めよ。</p>
                <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}" />
                <p className="font-bold mt-4">解．</p>
                <p>行基本変形を行う。</p>
                <BlockMath math="\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \quad (R_2-2R_1, R_3-3R_1)" />
                <p>
                    非零行は1つだけなので、<InlineMath math="\mathrm{rank}(A) = 1" />。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* ──────────────────────────────
                 解の存在条件
            ────────────────────────────── */}
            <h2 className="text-2xl font-bold mt-8 mb-6">解の存在と一意性</h2>

            <p>
                連立方程式 <InlineMath math="Ax=b" /> の解の様子は、係数行列 <InlineMath math="A" /> と拡大係数行列 <InlineMath math="[A|b]" /> の階数を比較することで完全に分類できます。
            </p>

            {/* Theorem 3.4-1 */}
            <ContentBox type="theorem" title="Theorem 3.4-1 （ルシェ・カペリの定理）">
                <p>
                    未知数 <InlineMath math="n" /> 個の連立1次方程式 <InlineMath math="A\mathbf{x} = \mathbf{b}" /> について：
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                    <li>
                        <strong>解が存在しない（不能）</strong>
                        <BlockMath math="\mathrm{rank}(A) < \mathrm{rank}([A \mid \mathbf{b}])" />
                    </li>
                    <li>
                        <strong>解が一意に存在する（一意解）</strong>
                        <BlockMath math="\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}]) = n" />
                    </li>
                    <li>
                        <strong>解が無数に存在する（不定）</strong>
                        <BlockMath math="\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}]) < n" />
                        このとき、自由度（任意定数の数）は <InlineMath math="n - \mathrm{rank}(A)" /> となる。
                    </li>
                </ol>
            </ContentBox>

            <ContentBox type="proof" title="Proof Outline">
                <p>
                    拡大係数行列 <InlineMath math="[A|b]" /> を行階段形に変形した場面を想像する。
                </p>
                <p className="mt-2">
                    <strong>1. 不能の場合:</strong>
                    <br />
                    <InlineMath math="\mathrm{rank}(A) < \mathrm{rank}([A \mid \mathbf{b}])" /> ということは、
                    階段行列において「左側（係数部分）はすべて0だが、一番右（定数項）だけ非ゼロ」という行が存在することを意味する。
                    つまり <InlineMath math="0x_1 + \dots + 0x_n = c \quad (c \neq 0)" /> という矛盾した式が現れるので、解なし。
                </p>
                <p className="mt-2">
                    <strong>2, 3. 解が存在する場合:</strong>
                    <br />
                    矛盾する行がなければ解は存在する。
                    <InlineMath math="\mathrm{rank}(A) = r" /> とすると、<InlineMath math="r" /> 個の変数は主成分（ピボット）に対応し、
                    残りの <InlineMath math="n-r" /> 個の変数はピボットを持たない。
                    ピボットを持たない変数は自由に値を決められる（自由変数）ため、<InlineMath math="n-r > 0" /> なら解は無数にあり、
                    <InlineMath math="n-r = 0" /> ならすべての変数が一意に定まる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            {/* Example 3.4-2: No Solution */}
            <ContentBox type="example" title="Example 3.4-2 （不能：解が存在しない場合）">
                <p>次の連立方程式を解け。</p>
                <BlockMath math="\begin{cases} x + y = 1 \\ x + y = 2 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>拡大係数行列を行基本変形する。</p>
                <BlockMath math="\begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix} \xrightarrow{R_2 - R_1} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}" />
                <p>
                    <InlineMath math="A" /> の階数は <InlineMath math="\mathrm{rank}(A) = 1" />。
                    拡大係数行列 <InlineMath math="[A|b]" /> の階数は <InlineMath math="\mathrm{rank}([A|b]) = 2" />。
                    <br />
                    <InlineMath math="\mathrm{rank}(A) < \mathrm{rank}([A|b])" /> となるため、この方程式の解は存在しない（不能）。
                    <br />
                    （第2行目が <InlineMath math="0x + 0y = 1" /> という矛盾を表している）
                </p>
            </ContentBox>

            {/* Example 3.4-3: Unique Solution */}
            <ContentBox type="example" title="Example 3.4-3 （一意解：ただ一つの解が存在する場合）">
                <p>次の連立方程式を解け。</p>
                <BlockMath math="\begin{cases} x + y = 3 \\ x - y = 1 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>拡大係数行列を行基本変形する。</p>
                <BlockMath math="
                    \begin{aligned}
                    \begin{pmatrix} 1 & 1 & 3 \\ 1 & -1 & 1 \end{pmatrix}
                    &\xrightarrow{R_2 - R_1} \begin{pmatrix} 1 & 1 & 3 \\ 0 & -2 & -2 \end{pmatrix} \\
                    &\xrightarrow{-\frac{1}{2}R_2} \begin{pmatrix} 1 & 1 & 3 \\ 0 & 1 & 1 \end{pmatrix}
                    \end{aligned}
                " />
                <p>
                    <InlineMath math="\mathrm{rank}(A) = 2, \mathrm{rank}([A|b]) = 2" />。
                    未知数の数 <InlineMath math="n=2" /> と一致するため、解はただ一つ存在する。
                    後退代入により、<InlineMath math="y=1" />。これより <InlineMath math="x+1=3 \Rightarrow x=2" />。
                    <br />
                    よって、<InlineMath math="(x, y) = (2, 1)" />。
                </p>
            </ContentBox>

            {/* Example 3.4-4: Infinite Solutions */}
            <ContentBox type="example" title="Example 3.4-4 （不定：無数の解が存在する場合）">
                <p>次の連立方程式を解け。</p>
                <BlockMath math="\begin{cases} x + y + z = 3 \\ x - y + z = 1 \end{cases}" />
                <p className="font-bold mt-4">解．</p>
                <p>拡大係数行列を行基本変形する。</p>
                <BlockMath math="
                    \begin{aligned}
                    \begin{pmatrix} 1 & 1 & 1 & 3 \\ 1 & -1 & 1 & 1 \end{pmatrix}
                    &\xrightarrow{R_2 - R_1} \begin{pmatrix} 1 & 1 & 1 & 3 \\ 0 & -2 & 0 & -2 \end{pmatrix} \\
                    &\xrightarrow{-\frac{1}{2}R_2} \begin{pmatrix} 1 & 1 & 1 & 3 \\ 0 & 1 & 0 & 1 \end{pmatrix}
                    \end{aligned}
                " />
                <p>
                    <InlineMath math="\mathrm{rank}(A) = 2, \mathrm{rank}([A|b]) = 2" />。
                    未知数の数 <InlineMath math="n=3" /> に対し、<InlineMath math="2 < 3" /> なので<strong>不定</strong>（解は無数に存在）。
                    自由度は <InlineMath math="3 - 2 = 1" />。
                </p>
                <p className="mt-2">
                    変形後の第2式より <InlineMath math="y = 1" />。
                    第1式は <InlineMath math="x + 1 + z = 3 \Rightarrow x = 2 - z" />。
                    <br />
                    任意定数 <InlineMath math="t" /> を用いて <InlineMath math="z = t" /> とおくと、
                    <BlockMath math="\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2-t \\ 1 \\ t \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}" />
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            {/* まとめ */}
            <ContentBox type="note" title="§3.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>階数（Rank）</strong>: 階段行列にしたときの非零行の数。</li>
                    <li><strong>ルシェ・カペリの定理</strong>:
                        <ul className="list-disc list-inside ml-4">
                            <li>階数にズレがあれば解なし。</li>
                            <li>階数が一致し、未知数より少なければ解は無数（自由度 <InlineMath math="n-\mathrm{rank}" />）。</li>
                            <li>階数が一致し、未知数と同じなら一意解。</li>
                        </ul>
                    </li>
                </ul>
            </ContentBox>
        </section>
    );
}
