import { BlockMath, InlineMath } from 'react-katex';
import ContentBox from '../../../components/content/ContentBox';
import 'katex/dist/katex.min.css';

export default function QuadraticFormsDefiniteness() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> は、多変数関数としての「形（曲面）」を決定します。<br />
                最も重要な基本性質は、原点以外のすべての点で関数値が正になる「お椀型（下に凸）」なのか、それとも負になる「山型（上に凸）」なのか、あるいは方向によって正負が変わる「鞍（サドル）型」なのかという分類です。<br />
                これを<strong>「定値性（Definiteness）」</strong>と呼びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定値性の分類</h2>

            <ContentBox type="definition" title="Definition 12.2-1 （正定値・半正定値・負定値・不定）">
                <p>
                    <InlineMath math="n" /> 変数の二次形式 <InlineMath math="q(\boldsymbol{x}) = \boldsymbol{x}^T A \boldsymbol{x}" /> およびその対称行列 <InlineMath math="A" /> について、任意の非零ベクトル <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> に対してとる値の符号により、次のように分類する。
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-3">
                    <li>
                        <strong>正定値（Positive Definite）：</strong><br />
                        常に <InlineMath math="q(\boldsymbol{x}) &gt; 0" /> となる。<br />
                        （関数としては原点で唯一の最小値をとる「お椀型」。）
                    </li>
                    <li>
                        <strong>半正定値（Positive Semi-definite）：</strong><br />
                        常に <InlineMath math="q(\boldsymbol{x}) \geq 0" /> となる（<InlineMath math="0" /> になる方向が存在してもよい）。<br />
                        （関数としてはU字の「雨どい型」や、平らな谷底を持つ形。）
                    </li>
                    <li>
                        <strong>負定値（Negative Definite）：</strong><br />
                        常に <InlineMath math="q(\boldsymbol{x}) < 0" /> となる。<br />
                        （関数としては原点で唯一の最大値をとる「山型」。）
                    </li>
                    <li>
                        <strong>半負定値（Negative Semi-definite）：</strong><br />
                        常に <InlineMath math="q(\boldsymbol{x}) \leq 0" /> となる。
                    </li>
                    <li>
                        <strong>不定（Indefinite）：</strong><br />
                        <InlineMath math="q(\boldsymbol{x}) &gt; 0" /> となる <InlineMath math="\boldsymbol{x}" /> と、<InlineMath math="q(\boldsymbol{x}) &lt; 0" /> となる <InlineMath math="\boldsymbol{x}" /> の両方が存在する。<br />
                        （関数としては、ある方向から見ると谷、別の方向から見ると峠になる「サドル（馬の鞍）型」。）
                    </li>
                </ul>
            </ContentBox>


            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">定値性の判定法（固有値と首座小行列式）</h2>

            <p>
                与えられた行列が正定値かどうかを、すべての <InlineMath math="\boldsymbol{x}" /> に対して調べるわけにはいきません。<br />
                実は、強力な判定法が2つ存在します。一つは「固有値」による方法、もう一つは「行列式」による方法（シルベスターの判定基準）です。
            </p>

            <ContentBox type="theorem" title="Theorem 12.2-1 （固有値による定値性判定）">
                <p>
                    実対称行列 <InlineMath math="A" /> の固有値を <InlineMath math="\lambda_1, \lambda_2, \dots, \lambda_n" /> とするとき、
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><InlineMath math="A" /> が正定値 <InlineMath math="\iff" /> <strong>すべての固有値が正</strong>（<InlineMath math="\lambda_i &gt; 0" />）</li>
                    <li><InlineMath math="A" /> が半正定値 <InlineMath math="\iff" /> すべての固有値が非負（<InlineMath math="\lambda_i \geq 0" />）</li>
                    <li><InlineMath math="A" /> が負定値 <InlineMath math="\iff" /> すべての固有値が負（<InlineMath math="\lambda_i &lt; 0" />）</li>
                    <li><InlineMath math="A" /> が不定 <InlineMath math="\iff" /> 正の固有値と負の固有値が混在している</li>
                </ul>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    ※ この事実の厳密な証明は、次節「標準化」の定理（対角化）を学ぶことによって自明になります（各変数の2乗の係数が固有値になるため）。
                </p>
            </ContentBox>

            <p>
                固有値を計算するのは面倒な場合があります。そこで、行列の一部を取り出した小行列式（これを<strong>首座小行列式</strong>と呼びます）を計算するだけで正定値判定ができる、極めて実用的で有名な定理があります。
            </p>

            <ContentBox type="theorem" title="Theorem 12.2-2 （シルベスターの判定法：Sylvester's criterion）">
                <p>
                    <InlineMath math="n \times n" /> の実対称行列 <InlineMath math="A" /> に対して、左上から順に取り出していった <InlineMath math="k \times k" /> の部分行列（第 <InlineMath math="k" /> 次首座小行列）の行列式を <InlineMath math="D_k" /> とする。<br />
                    （つまり <InlineMath math="D_1 = a_{11}" />、<InlineMath math="D_2 = \det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}" />、……、<InlineMath math="D_n = \det A" />）
                </p>
                <BlockMath math="\begin{aligned} &A が正定値である \\ &\iff D_1 &gt; 0 \text{ かつ } D_2 &gt; 0 \text{ かつ } \cdots \text{ かつ } D_n &gt; 0 \end{aligned}" />
                <p>
                    すなわち、<strong>「すべての首座小行列式が正」</strong>であれば、その行列（二次形式）は正定値である。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof (Outline)">
                <p>
                    （※ 厳密な証明は複雑なため、ここでは <InlineMath math="A" /> が正定値ならば <InlineMath math="D_k &gt; 0" /> となる概要を示します。）
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li>
                        <InlineMath math="A" /> が正定値であるとする。これは任意の <InlineMath math="\boldsymbol{x} \neq \boldsymbol{0}" /> について <InlineMath math="\boldsymbol{x}^T A \boldsymbol{x} &gt; 0" /> ということである。
                    </li>
                    <li>
                        ここで、<InlineMath math="k" /> 番目以降の変数 <InlineMath math="x_{k+1}, \dots, x_n" /> をすべて <InlineMath math="0" /> に固定したベクトル <InlineMath math="\boldsymbol{\tilde{x}} = (x_1, \dots, x_k, 0, \dots, 0)^T" /> を考える。
                    </li>
                    <li>
                        この <InlineMath math="\boldsymbol{\tilde{x}}" /> に対して二次形式を計算すると、行列 <InlineMath math="A" /> の左上の <InlineMath math="k \times k" /> 部分行列（<InlineMath math="A_k" /> とする）だけが生き残り、<InlineMath math="\boldsymbol{x}_k^T A_k \boldsymbol{x}_k" /> となる。<br />
                        元の <InlineMath math="A" /> が正定値なので、この <InlineMath math="A_k" /> もまた（<InlineMath math="k" /> 変数に対する対称行列として）正定値でなければならない。
                    </li>
                    <li>
                        先ほどの「固有値による判定法」より、<InlineMath math="A_k" /> が正定値ならば、その固有値はすべて正（<InlineMath math="&gt; 0" />）である。<br />
                        行列式はその行列のすべての固有値の積に等しい（<InlineMath math="\det A_k = \prod \lambda_i" />）。正の数をいくつ掛けても正である。<br />
                        したがって、<InlineMath math="D_k = \det A_k &gt; 0" /> となる。これがすべての <InlineMath math="1 \leq k \leq n" /> で成り立つ。

                    </li>
                </ol>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>


            {/* まとめ */}
            <ContentBox type="note" title="§12.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>二次形式は、原点以外がすべて正になるか負になるか等の特性によって、<strong>正定値・半正定値・負定値・半負定値・不定</strong>に分類される（Definition 12.2-1）。</li>
                    <li>定値性は、その対称行列の<strong>固有値の符号</strong>がすべて揃っているかどうかで完全に判定できる。</li>
                    <li>固有値を直接求めなくても、<strong>シルベスターの判定法</strong>（すべての第 <InlineMath math="k" /> 次首座小行列式が正か）を用いることで、正定値性を簡単にチェックできる（Theorem 12.2-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
