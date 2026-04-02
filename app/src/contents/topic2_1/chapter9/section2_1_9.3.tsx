import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function GramSchmidtExample() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                定理でアルゴリズムの流れ（直交化と正規化の繰り返し）が理解できたところで、実際に <InlineMath math="\mathbb{R}^3" /> の空間で具体的なベクトルを用いて手を動かしてみましょう。<br />
                グラム・シュミット法は計算過程で分数が頻出するため、慎重な計算が求められます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 9.3-1 （ℝ^3 における正規直交基底の構成）">
                <p>
                    <InlineMath math="\mathbb{R}^3" /> における次の3つの線形独立なベクトル <InlineMath math="\boldsymbol{v}_1, \boldsymbol{v}_2, \boldsymbol{v}_3" /> から出発し、グラム・シュミット法を用いて正規直交基底 <InlineMath math="\{ \boldsymbol{u}_1, \boldsymbol{u}_2, \boldsymbol{u}_3 \}" /> を構成します。
                </p>
                <BlockMath math="\boldsymbol{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \boldsymbol{v}_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \boldsymbol{v}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-6 mb-2">Step 1: <InlineMath math="\boldsymbol{u}_1" /> の決定</h3>
                <p>
                    最初のベクトル <InlineMath math="\boldsymbol{v}_1" /> を単に正規化（長さを1に）します。<br />
                    <InlineMath math="\boldsymbol{v}_1" /> のノルムは <InlineMath math="\| \boldsymbol{v}_1 \| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}" /> です。
                </p>
                <BlockMath math="\boldsymbol{u}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-6 mb-2">Step 2: <InlineMath math="\boldsymbol{u}_2" /> の決定</h3>
                <p>
                    まず <InlineMath math="\boldsymbol{v}_2" /> から、<InlineMath math="\boldsymbol{u}_1" /> 方向の直交射影成分を引き算し、直交する成分 <InlineMath math="\boldsymbol{w}_2" /> を作ります。
                </p>
                <BlockMath math="\boldsymbol{w}_2 = \boldsymbol{v}_2 - \langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle \boldsymbol{u}_1" />
                <p>
                    内積 <InlineMath math="\langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle" /> を計算します。
                </p>
                <BlockMath math="\langle \boldsymbol{v}_2, \boldsymbol{u}_1 \rangle = 1 \cdot \frac{1}{\sqrt{2}} + 0 \cdot \frac{1}{\sqrt{2}} + 1 \cdot 0 = \frac{1}{\sqrt{2}}" />
                <p>これを代入して引き算を実行します。</p>
                <BlockMath math="\begin{aligned} \boldsymbol{w}_2 &= \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{\sqrt{2}} \left( \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \right) \\ &= \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} \end{aligned}" />
                <p>
                    得られた <InlineMath math="\boldsymbol{w}_2" /> のノルムを計算して正規化します。
                </p>
                <BlockMath math="\begin{aligned} \| \boldsymbol{w}_2 \| &= \sqrt{(1/2)^2 + (-1/2)^2 + 1^2} \\ &= \sqrt{1/4 + 1/4 + 1} = \sqrt{6/4} = \frac{\sqrt{6}}{2} \end{aligned}" />
                <BlockMath math="\boldsymbol{u}_2 = \frac{1}{\| \boldsymbol{w}_2 \|} \boldsymbol{w}_2 = \frac{2}{\sqrt{6}} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}" />
                <h3 className="text-lg font-bold mt-6 mb-2">Step 3: <InlineMath math="\boldsymbol{u}_3" /> の決定</h3>
                <p>
                    最後に <InlineMath math="\boldsymbol{v}_3" /> から、<InlineMath math="\boldsymbol{u}_1" /> 方向の射影と <InlineMath math="\boldsymbol{u}_2" /> 方向の射影の両方を引き算し、<InlineMath math="\boldsymbol{w}_3" /> を作ります。
                </p>
                <BlockMath math="\boldsymbol{w}_3 = \boldsymbol{v}_3 - \langle \boldsymbol{v}_3, \boldsymbol{u}_1 \rangle \boldsymbol{u}_1 - \langle \boldsymbol{v}_3, \boldsymbol{u}_2 \rangle \boldsymbol{u}_2" />
                <p>必要な2つの内積を先に計算します。</p>
                <BlockMath math="\langle \boldsymbol{v}_3, \boldsymbol{u}_1 \rangle = 0 \cdot \frac{1}{\sqrt{2}} + 1 \cdot \frac{1}{\sqrt{2}} + 1 \cdot 0 = \frac{1}{\sqrt{2}}" />
                <BlockMath math="\langle \boldsymbol{v}_3, \boldsymbol{u}_2 \rangle = 0 \cdot \frac{1}{\sqrt{6}} + 1 \cdot \left(\frac{-1}{\sqrt{6}}\right) + 1 \cdot \frac{2}{\sqrt{6}} = \frac{1}{\sqrt{6}}" />
                <p>これらを代入して引き算を実行します。</p>
                <BlockMath math="\boldsymbol{w}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \frac{1}{\sqrt{2}} \left( \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} \right) - \frac{1}{\sqrt{6}} \left( \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} \right)" />
                <BlockMath math="\begin{aligned} \boldsymbol{w}_3 &= \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} - \frac{1}{6} \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} \\ &= \begin{pmatrix} 0 - 1/2 - 1/6 \\ 1 - 1/2 + 1/6 \\ 1 - 0 - 2/6 \end{pmatrix} \\ &= \begin{pmatrix} -4/6 \\ 4/6 \\ 4/6 \end{pmatrix} = \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix} \end{aligned}" />
                <p>
                    この <InlineMath math="\boldsymbol{w}_3" /> のノルムを計算し、正規化します。
                </p>
                <BlockMath math="\begin{aligned} \| \boldsymbol{w}_3 \| &= \sqrt{(-2/3)^2 + (2/3)^2 + (2/3)^2} \\ &= \sqrt{12/9} = \frac{\sqrt{12}}{3} = \frac{2\sqrt{3}}{3} \end{aligned}" />
                <BlockMath math="\begin{aligned} \boldsymbol{u}_3 &= \frac{1}{\| \boldsymbol{w}_3 \|} \boldsymbol{w}_3 = \frac{3}{2\sqrt{3}} \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix} \\ &= \frac{\sqrt{3}}{2} \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix} = \frac{1}{\sqrt{3}} \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix} \end{aligned}" />

                <h3 className="text-lg font-bold mt-6 mb-2">結論</h3>
                <p>以上より、求める正規直交基底は次の3つのベクトル群となります。</p>
                <BlockMath math="\boldsymbol{u}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \boldsymbol{u}_2 = \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}, \quad \boldsymbol{u}_3 = \frac{1}{\sqrt{3}} \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}" />
                <p className="mt-2 text-sm text-slate-500">
                    （※ 最後に <InlineMath math="\langle \boldsymbol{u}_1, \boldsymbol{u}_2 \rangle" /> や <InlineMath math="\langle \boldsymbol{u}_2, \boldsymbol{u}_3 \rangle" /> がきちんと <InlineMath math="0" /> になるか、また各ノルムが <InlineMath math="1" /> になるかを計算して検算すると安心です。）
                </p>
            </ContentBox>


            <ContentBox type="remark" title="計算のテクニック">
                <p>
                    途中のステップで頻繁に「ルート」の付いた分数を扱うことになりますが、グラム・シュミット法では<strong>「各ステップで作った <InlineMath math="\boldsymbol{u}_i" /> を平方根のまま持ち回る」</strong>よりも、次のように計算する方がミスを減らせる場合があります。
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li><InlineMath math="\boldsymbol{v}_i" /> から「<InlineMath math="\boldsymbol{u}" />方向の射影」を引く公式は、<InlineMath math="\langle \boldsymbol{v}, \boldsymbol{u} \rangle \boldsymbol{u}" /> と書かれます。</li>
                    <li>ここで <InlineMath math="\boldsymbol{u} = \frac{\boldsymbol{w}}{\|\boldsymbol{w}\|}" /> を代入すると、<InlineMath math="\langle \boldsymbol{v}, \frac{\boldsymbol{w}}{\|\boldsymbol{w}\|} \rangle \frac{\boldsymbol{w}}{\|\boldsymbol{w}\|} = \frac{\langle \boldsymbol{v}, \boldsymbol{w} \rangle}{\|\boldsymbol{w}\|^2} \boldsymbol{w} = \frac{\langle \boldsymbol{v}, \boldsymbol{w} \rangle}{\langle \boldsymbol{w}, \boldsymbol{w} \rangle} \boldsymbol{w}" /> になります。</li>
                    <li>つまり、「正規化する前のベクトル <InlineMath math="\boldsymbol{w}" />」を使って内積の比を計算することで、平方根（ルート）を一切経由せずに引き算の係数を求めることができます。</li>
                </ol>
                <p className="mt-2">
                    実際、上の計算でも代入直後にルート同士が掛け算されて分母が整数に戻っています。この「未正規化ベクトルによる射影公式」は、プログラムでアルゴリズムを実装する際にも重宝されます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§9.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>グラム・シュミット法は、紙の上で手計算を行うと分数が複雑になりやすいため、各ステップで確実に「直交成分だけが残っている（内積が <InlineMath math="0" /> になる）」ことを検算しながら進めることが重要である。</li>
                    <li>最終的に得られるベクトル群は、元のベクトル群と同じ部分空間を保ったまま、向きを完全に直交させ、長さを <InlineMath math="1" /> に統一した「理想的な基底」となる。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
