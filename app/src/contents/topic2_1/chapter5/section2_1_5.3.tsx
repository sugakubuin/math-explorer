import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function EigenvalueCalculationExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                定理5.2-1により、固有値を見つけるためには特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を解けばよいことがわかりました。
                ここでは具体的な行列を用いて、固有値と固有ベクトルを計算する手順を確認します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 5.3-1 （2次行列の固有値・固有ベクトルの計算）">
                <p>次の行列 <InlineMath math="A" /> の固有値と固有ベクトルを求めます。</p>
                <BlockMath math="A = \begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-4 mb-2">Step 1: 特性方程式を解いて固有値を求める</h3>
                <p>まず、<InlineMath math="A - \lambda I" /> を計算します。</p>
                <BlockMath math="A - \lambda I = \begin{pmatrix} 4 - \lambda & 2 \\ 1 & 3 - \lambda \end{pmatrix}" />
                <p>この行列式を <InlineMath math="0" /> と置きます（特性方程式）。</p>
                <BlockMath math="\det(A - \lambda I) = (4 - \lambda)(3 - \lambda) - 2 \cdot 1 = 0" />
                <BlockMath math="12 - 7\lambda + \lambda^2 - 2 = 0" />
                <BlockMath math="\lambda^2 - 7\lambda + 10 = 0" />
                <p>これを因数分解すると、</p>
                <BlockMath math="(\lambda - 2)(\lambda - 5) = 0" />
                <p>よって、固有値は <InlineMath math="\lambda = 2, 5" /> と求まります。</p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 2: 各固有値に対応する固有ベクトルを求める</h3>
                <p>それぞれの固有値について、<InlineMath math="(A - \lambda I)\boldsymbol{v} = \boldsymbol{0}" /> を解きます。</p>

                <p className="font-bold">ケース1: <InlineMath math="\lambda = 2" /> の場合</p>
                <BlockMath math="\begin{pmatrix} 4 - 2 & 2 \\ 1 & 3 - 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <BlockMath math="\begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <p>
                    この連立方程式から <InlineMath math="x + y = 0" />、つまり <InlineMath math="y = -x" /> を得ます。定数 <InlineMath math="c_1 \neq 0" /> を用いて、
                </p>
                <BlockMath math="\boldsymbol{v}_1 = c_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />

                <p className="font-bold mt-4">ケース2: <InlineMath math="\lambda = 5" /> の場合</p>
                <BlockMath math="\begin{pmatrix} 4 - 5 & 2 \\ 1 & 3 - 5 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <BlockMath math="\begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
                <p>
                    この連立方程式から <InlineMath math="-x + 2y = 0" />、つまり <InlineMath math="x = 2y" /> を得ます。定数 <InlineMath math="c_2 \neq 0" /> を用いて、
                </p>
                <BlockMath math="\boldsymbol{v}_2 = c_2 \begin{pmatrix} 2 \\ 1 \end{pmatrix}" />
            </ContentBox>


            <ContentBox type="example" title="Example 5.3-2 （3次行列の固有値・固有ベクトルの計算）">
                <p>次の行列 <InlineMath math="B" /> の固有ベクトルと固有値を求めます（少し複雑になります）。</p>
                <BlockMath math="B = \begin{pmatrix} 1 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 1 \end{pmatrix}" />

                <h3 className="text-lg font-bold mt-4 mb-2">Step 1: 特性方程式を解いて固有値を求める</h3>
                <p>サラスの公式や余因子展開を用いて <InlineMath math="\det(B - \lambda I) = 0" /> を計算します。</p>
                <BlockMath math="\det \begin{pmatrix} 1 - \lambda & -1 & 0 \\ -1 & 2 - \lambda & -1 \\ 0 & -1 & 1 - \lambda \end{pmatrix} = 0" />
                <p>
                    第1行について余因子展開します。
                </p>
                <BlockMath math="\begin{aligned} (1 - \lambda)\det\begin{pmatrix} 2 - \lambda & -1 \\ -1 & 1 - \lambda \end{pmatrix} - (-1)\det\begin{pmatrix} -1 & -1 \\ 0 & 1 - \lambda \end{pmatrix} \\ = 0 \end{aligned}" />
                <BlockMath math="(1-\lambda) \{ (2-\lambda)(1-\lambda) - 1 \} + 1 \cdot \{ -(1-\lambda) - 0 \} = 0" />
                <BlockMath math="(1-\lambda) \{ \lambda^2 - 3\lambda + 1 \} - (1-\lambda) = 0" />
                <p>
                    共通因数 <InlineMath math="(1-\lambda)" /> で括ります。
                </p>
                <BlockMath math="(1-\lambda) \{ (\lambda^2 - 3\lambda + 1) - 1 \} = 0" />
                <BlockMath math="(1-\lambda)(\lambda^2 - 3\lambda) = 0" />
                <BlockMath math="-\lambda(1-\lambda)(\lambda - 3) = 0" />
                <p>
                    よって、固有値は <InlineMath math="\lambda = 0, 1, 3" /> の3つです。
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">Step 2: 固有ベクトルを求める</h3>
                <p className="font-bold"><InlineMath math="\lambda = 0" /> の場合</p>
                <p><InlineMath math="B\boldsymbol{v} = \boldsymbol{0}" /> を解きます。<InlineMath math="x - y = 0, \, -x + 2y - z = 0, \, -y + z = 0" /> より <InlineMath math="x = y = z" /> となるので、</p>
                <BlockMath math="\boldsymbol{v}_1 = c_1 \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}" />

                <p className="font-bold mt-4"><InlineMath math="\lambda = 1" /> の場合</p>
                <p><InlineMath math="(B - I)\boldsymbol{v} = \boldsymbol{0}" /> を解きます。<InlineMath math="-y = 0, \, -x + y - z = 0, \, -y = 0" /> より <InlineMath math="y = 0, x = -z" /> となるので、</p>
                <BlockMath math="\boldsymbol{v}_2 = c_2 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}" />

                <p className="font-bold mt-4"><InlineMath math="\lambda = 3" /> の場合</p>
                <p><InlineMath math="(B - 3I)\boldsymbol{v} = \boldsymbol{0}" /> を解きます。<InlineMath math="-2x - y = 0, \, -x - y - z = 0, \, -y - 2z = 0" /> より <InlineMath math="y = -2x, z = x" /> となるので、</p>
                <BlockMath math="\boldsymbol{v}_3 = c_3 \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}" />
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">複素固有値</h2>

            <p>
                実行列であっても、特性方程式が実数の根を持たない場合（虚数解を持つ場合）があります。<br />
                幾何学的にはこれは「純粋な回転」など、どの実ベクトルの方向も変えてしまう変換で発生します。この場合、行列を複素数の世界（<InlineMath math="\mathbb{C}^n" />）で考えることで、<strong>複素固有値</strong>と<strong>複素固有ベクトル</strong>を得ます。
            </p>

            <ContentBox type="example" title="Example 5.3-3 （90度回転の行列と複素固有値）">
                <p>
                    平面を原点周りに90度（<InlineMath math="\pi/2" />）回転させる行列 <InlineMath math="R" /> を考えます。
                </p>
                <BlockMath math="R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" />
                <p>
                    この行列の特性方程式は次のようになります。
                </p>
                <BlockMath math="\det \begin{pmatrix} -\lambda & -1 \\ 1 & -\lambda \end{pmatrix} = (-\lambda)(-\lambda) - (-1)(1) = \lambda^2 + 1 = 0" />
                <p>
                    この方程式の解は <InlineMath math="\lambda = \pm i" />（<InlineMath math="i" /> は虚数単位）です。したがって実数の固有値は存在しません。<br />
                    これに対応する複素固有ベクトルを計算すると次のようになります。
                </p>
                <p className="font-bold mt-4"><InlineMath math="\lambda = i" /> の場合</p>
                <BlockMath math="\begin{aligned} \begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} &\Rightarrow \  x - iy = 0 \\ &\Rightarrow \ x = iy \end{aligned}" />
                <BlockMath math="\boldsymbol{v}_1 = c_1 \begin{pmatrix} i \\ 1 \end{pmatrix}" />

                <p className="font-bold mt-4"><InlineMath math="\lambda = -i" /> の場合</p>
                <BlockMath math="\begin{aligned} \begin{pmatrix} i & -1 \\ 1 & i \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} &\Rightarrow \ x + iy = 0 \\ &\Rightarrow \ x = -iy \end{aligned}" />
                <BlockMath math="\boldsymbol{v}_2 = c_2 \begin{pmatrix} -i \\ 1 \end{pmatrix}" />
                <p className="mt-2 text-sm text-slate-500">
                    このように、実行列の複素固有値と複素固有ベクトルは必ず「共役複素数」のペアで現れます。
                </p>
            </ContentBox>

            {/* まとめ */}
            <ContentBox type="note" title="§5.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>特性方程式 <InlineMath math="\det(A - \lambda I) = 0" /> を解くことで固有値が求まり、得られた各固有値 <InlineMath math="\lambda" /> につき連立方程式 <InlineMath math="(A - \lambda I)\boldsymbol{v} = \boldsymbol{0}" /> を解いて固有ベクトルを求める手順を確認した（Example 5.3-1, 5.3-2）。</li>
                    <li>純粋な回転行列など、実ベクトル上で「向きを変えない」方向を持たない行列の場合、固有値は特性方程式の虚数解として<strong>複素数</strong>の形で現れる（Example 5.3-3）。</li>
                    <li>実行列の複素固有値・固有ベクトルは必ず共役のペアとして存在する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
