import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultivariableExtremeValueExamples() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までは2変数関数の極値判定を中心に見ましたが、ヘッセ行列の理論は2変数にとどまりません。
                データサイエンスや機械学習の文脈では、数千・数万変数の関数の最適化（極小値の探索）が日常的に行われます。
                本節では、3変数以上の関数の極値判定の具体例と、ヘッセ行列が不定値となる「鞍点」の例を観察します。
                高次元空間の構造を線形代数を通じて理解しましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">3変数関数の極値問題</h2>

            <ContentBox type="example" title="Example 6.4-1 (3変数以上の関数への極値判定の適用例)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(x, y, z) = x^2 + y^2 + z^2 + xy + xz + yz - 3x - 3y - 3z" /> の極値を求めよ。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>Step 1: 臨界点を求める</strong><br />
                    1階偏導関数を <InlineMath math="0" /> とおく：
                </p>
                <BlockMath math="\begin{aligned} 
                f_x &= 2x + y + z - 3 = 0 \\
                f_y &= x + 2y + z - 3 = 0 \\
                f_z &= x + y + 2z - 3 = 0 
                \end{aligned}" />
                <p className="leading-relaxed">
                    これを解くと、対称性から <InlineMath math="x = y = z = 1" /> が唯一の臨界点である。<InlineMath math="(a, b, c) = (1, 1, 1)" />。
                </p>

                <p className="leading-relaxed mt-2">
                    <strong>Step 2: ヘッセ行列を計算する</strong><br />
                    すべての2階偏導関数は定数となる：
                </p>
                <BlockMath math="f_{xx} = 2, \quad f_{yy} = 2, \quad f_{zz} = 2" />
                <BlockMath math="f_{xy} = 1, \quad f_{yz} = 1, \quad f_{zx} = 1" />
                <p className="leading-relaxed">
                    したがって、ヘッセ行列 <InlineMath math="H" /> は
                </p>
                <BlockMath math="H = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}" />

                <p className="leading-relaxed mt-2">
                    <strong>Step 3: 行列の定値性を判定する</strong><br />
                    固有方程式 <InlineMath math="\det(H - \lambda I) = 0" /> を解いて固有値を求める。
                </p>
                <BlockMath math="\begin{vmatrix} 2-\lambda & 1 & 1 \\ 1 & 2-\lambda & 1 \\ 1 & 1 & 2-\lambda \end{vmatrix} = (4 - \lambda)(1 - \lambda)^2 = 0" />
                <p className="leading-relaxed">
                    固有値は <InlineMath math="\lambda_1 = 4" />（重複度1）、<InlineMath math="\lambda_2 = \lambda_3 = 1" />（重複度2）である。
                    すべての固有値が正（<InlineMath math="\lambda > 0" />）であるため、行列 <InlineMath math="H" /> は<strong>正定値</strong>である。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>結論：</strong> Theorem 6.2-1 より、関数 <InlineMath math="f" /> は点 <InlineMath math="(1, 1, 1)" /> で<strong>極小値</strong>をとる。<br />
                    極小値は <InlineMath math="f(1, 1, 1) = 1 + 1 + 1 + 1 + 1 + 1 - 3 - 3 - 3 = -1" /> ではない。代入すると <InlineMath math="-4.5" /> になるが、正確には：<br />
                    <InlineMath math="1^2+1^2+1^2+1\cdot 1+1\cdot 1+1\cdot 1 -3\cdot 1-3\cdot 1-3\cdot 1 = 3 + 3 - 9 = -3" />。極小値は <InlineMath math="-3" />。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="シルヴェスターの判定条件（首座行列式）による定値性の確認">
                <p className="leading-relaxed">
                    固有値をすべて求めるのが困難な場合、線形代数学の「シルヴェスターの判定条件（Sylvester's criterion）」を使うのが実用的です。
                    対称行列が正定値であるための必要十分条件は、すべての「首座小行列式（左上の <InlineMath math="k \times k" /> 小行列の行列式）」が正であることです。
                </p>
                <p className="leading-relaxed mt-2">
                    上の例の <InlineMath math="H" /> において、
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li><InlineMath math="\det(H_1) = 2 > 0" /></li>
                    <li><InlineMath math="\det(H_2) = \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} = 4 - 1 = 3 > 0" /></li>
                    <li><InlineMath math="\det(H_3) = \det(H) = 4 \cdot 1^2 = 4 > 0" /></li>
                </ul>
                <p className="leading-relaxed mt-2">
                    すべて正なので <InlineMath math="H" /> は正定値と一瞬で判定できます。2変数の場合の公式（<InlineMath math="f_{xx}>0, f_{xx}f_{yy}-f_{xy}^2>0" />）も、実はこのシルヴェスターの条件そのものです。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">高次元の鞍点</h2>

            <ContentBox type="example" title="Example 6.4-2 (ヘッセ行列が不定値となる鞍点の例)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="g(x, y, z) = x^2 - y^2 - z^2" /> の原点 <InlineMath math="(0, 0, 0)" /> における挙動を調べる。
                </p>
                <p className="leading-relaxed mt-2">
                    <InlineMath math="\nabla g(0,0,0) = (0, 0, 0)" /> なので原点は臨界点である。
                    ヘッセ行列は
                </p>
                <BlockMath math="H = \begin{pmatrix} 2 & 0 & 0 \\ 0 & -2 & 0 \\ 0 & 0 & -2 \end{pmatrix}" />
                <p className="leading-relaxed">
                    この行列はすでに対角行列であり、固有値は対角成分そのもの、すなわち <InlineMath math="2, -2, -2" /> である。
                    正の固有値と負の固有値が混在しているため、<InlineMath math="H" /> は<strong>不定値</strong>である。
                </p>
                <p className="leading-relaxed mt-2">
                    したがって、原点は<strong>鞍点</strong>である。
                    幾何学的には、<InlineMath math="x" /> 軸方向には上に凸（増加）ですが、<InlineMath math="y" /> 軸や <InlineMath math="z" /> 軸方向には下に凸（減少）しており、
                    「多次元空間での鞍」を形成しています。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§6.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>3変数以上の関数でも、ヘッセ行列の定値性（固有値の符号）によって極値を判定できる（Example 6.4-1）。</li>
                    <li>固有値を直接求める代わりに、シルヴェスターの判定条件（首座行列式の符号）を用いるのが実用的である（Remark）。</li>
                    <li>固有値の符号が混在する臨界点は多次元の鞍点であり、ある方向には極小、別の方向には極大のように振る舞う（Example 6.4-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
