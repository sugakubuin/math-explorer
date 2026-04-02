import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function TwoVariableExtremeValueTest() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだ「ヘッセ行列の定値性による判定法」は一般の <InlineMath math="n" /> 変数で成り立ちますが、
                最もよく使われる <InlineMath math="n = 2" /> の場合、行列式と対角成分を用いた非常にシンプルで具体的な判定公式が存在します。
                本節ではこの判定公式を導出し、実際の計算例を通じて使い方をマスターしましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">判定公式</h2>

            <ContentBox type="proposition" title="Corollary 6.3-1 (2変数関数の極値判定：行列式と対角成分)">
                <p className="leading-relaxed">
                    2変数関数 <InlineMath math="z = f(x, y)" /> が <InlineMath math="C^2" /> 級であり、点 <InlineMath math="(a, b)" /> が臨界点
                    （<InlineMath math="f_x(a,b) = 0, f_y(a,b) = 0" />）であるとする。
                    <InlineMath math="(a, b)" /> におけるヘッセ行列の行列式（判別式）を <InlineMath math="D" /> とおく。
                </p>
                <BlockMath math="D = \det H(a, b) = f_{xx}(a,b) f_{yy}(a,b) - \bigl(f_{xy}(a,b)\bigr)^2" />
                <p className="leading-relaxed mt-2">
                    このとき、次のように分類される。
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li><InlineMath math="D > 0" /> かつ <InlineMath math="f_{xx}(a,b) > 0" /> のとき、<InlineMath math="f" /> は <InlineMath math="(a, b)" /> で<strong>極小値</strong>をとる（<InlineMath math="H" /> は正定値）。</li>
                    <li><InlineMath math="D > 0" /> かつ <InlineMath math="f_{xx}(a,b) < 0" /> のとき、<InlineMath math="f" /> は <InlineMath math="(a, b)" /> で<strong>極大値</strong>をとる（<InlineMath math="H" /> は負定値）。</li>
                    <li><InlineMath math="D < 0" /> のとき、<InlineMath math="f" /> は <InlineMath math="(a, b)" /> で極値をとらない。この点は<strong>鞍点</strong>である（<InlineMath math="H" /> は不定値）。</li>
                    <li><InlineMath math="D = 0" /> のとき、この判定法では極値かどうか決定できない（より高次の解析が必要）。</li>
                </ol>
            </ContentBox>

            <ContentBox type="remark" title="なぜ行列式 D が鍵となるのか？">
                <p className="leading-relaxed">
                    この公式は、ヘッセ行列の固有値 <InlineMath math="\lambda_1, \lambda_2" /> の性質から直ちに導かれます。
                    線形代数の基本事項として、行列式 <InlineMath math="D" /> は固有値の積 <InlineMath math="\lambda_1 \lambda_2" /> に等しく、
                    トレース（対角成分の和）<InlineMath math="T = f_{xx} + f_{yy}" /> は固有値の和 <InlineMath math="\lambda_1 + \lambda_2" /> に等しいからです。
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><InlineMath math="D < 0" /> ならば <InlineMath math="\lambda_1 \lambda_2 < 0" />。よって一方が正、他方が負（不定値）であり、鞍点になります。</li>
                    <li><InlineMath math="D > 0" /> ならば <InlineMath math="\lambda_1 \lambda_2 > 0" />。よって両方が正か、両方が負です。
                        このとき <InlineMath math="f_{xx} f_{yy} > (f_{xy})^2 \geq 0" /> より <InlineMath math="f_{xx}" /> と <InlineMath math="f_{yy}" /> は同符号になります。
                        <ul>
                            <li>もし <InlineMath math="f_{xx} > 0" /> なら <InlineMath math="T > 0" />（両方正・正定値）で極小。</li>
                            <li>もし <InlineMath math="f_{xx} < 0" /> なら <InlineMath math="T < 0" />（両方負・負定値）で極大。</li>
                        </ul>
                    </li>
                    <li><InlineMath math="D = 0" /> ならば少なくとも一方の固有値が <InlineMath math="0" />（半定値またはゼロ）であり、2次の近似だけでは周囲との高低が判別できません。</li>
                </ul>
            </ContentBox>

            <p>
                それでは、このシンプルで強力な判定公式を用いて、具体的な2変数関数の極値を探してみましょう。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">計算例</h2>

            <ContentBox type="example" title="Example 6.3-1 (2変数関数の極値問題の解法)">
                <p className="leading-relaxed">
                    関数 <InlineMath math="f(x, y) = x^3 - 3xy + y^3" /> の極値をすべて求めよ。
                </p>
                <p className="leading-relaxed mt-2">
                    <strong>Step 1: 臨界点を求める</strong><br />
                    1階偏導関数を計算して <InlineMath math="0" /> とおく。
                </p>
                <BlockMath math="f_x(x,y) = 3x^2 - 3y = 0 \implies y = x^2" />
                <BlockMath math="f_y(x,y) = -3x + 3y^2 = 0 \implies x = y^2" />
                <p className="leading-relaxed">
                    <InlineMath math="y = x^2" /> を <InlineMath math="x = y^2" /> に代入すると <InlineMath math="x = (x^2)^2 = x^4" />。
                    <InlineMath math="x(x^3 - 1) = 0" /> より、実数解は <InlineMath math="x = 0, 1" />。
                    よって臨界点は <InlineMath math="(0, 0)" /> と <InlineMath math="(1, 1)" /> の2点である。
                </p>

                <p className="leading-relaxed mt-2">
                    <strong>Step 2: 2階偏導関数と行列式を計算する</strong>
                </p>
                <BlockMath math="f_{xx} = 6x, \quad f_{yy} = 6y, \quad f_{xy} = -3" />
                <p className="leading-relaxed">
                    行列式 <InlineMath math="D(x, y)" /> は、
                </p>
                <BlockMath math="\begin{aligned} D(x, y) & = f_{xx} f_{yy} - (f_{xy})^2 \\ & = (6x)(6y) - (-3)^2 = 36xy - 9 \end{aligned}" />

                <p className="leading-relaxed mt-2">
                    <strong>Step 3: 各臨界点での判定</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>点 <InlineMath math="(0, 0)" /> について：<br />
                        <InlineMath math="D(0, 0) = -9 < 0" />。行列式が負なので、点 <InlineMath math="(0, 0)" /> は<strong>鞍点</strong>であり、極値ではない。
                    </li>
                    <li>点 <InlineMath math="(1, 1)" /> について：<br />
                        <InlineMath math="D(1, 1) = 36(1)(1) - 9 = 27 > 0" />。<br />
                        かつ <InlineMath math="f_{xx}(1, 1) = 6(1) = 6 > 0" />。<br />
                        したがって、点 <InlineMath math="(1, 1)" /> では<strong>極小値</strong>をとる。<br />
                        極小値は <InlineMath math="f(1, 1) = 1^3 - 3(1)(1) + 1^3 = -1" />。
                    </li>
                </ul>
                <p className="leading-relaxed mt-2">
                    <strong>結論：</strong> 点 <InlineMath math="(1, 1)" /> で極小値 <InlineMath math="-1" /> をとる。極大値はない。
                </p>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§6.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>2変数関数の極値判定は、ヘッセ行列の行列式 <InlineMath math="D = f_{xx}f_{yy} - f_{xy}^2" /> と <InlineMath math="f_{xx}" /> の符号で行う（Corollary 6.3-1）。</li>
                    <li><InlineMath math="D > 0, f_{xx} > 0 \implies" /> 極小（正定値）。</li>
                    <li><InlineMath math="D > 0, f_{xx} < 0 \implies" /> 極大（負定値）。</li>
                    <li><InlineMath math="D < 0 \implies" /> 鞍点（極値でない。不定値）。</li>
                    <li><InlineMath math="D = 0 \implies" /> 判定不能。</li>
                    <li>この公式は、行列の固有値の積と和の関係に基づく。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
