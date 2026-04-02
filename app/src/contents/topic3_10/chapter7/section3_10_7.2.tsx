import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function GaloisGroupOfAnEquation() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                これまでは「体の拡大」に対するガロア群を考えてきましたが、本節では「方程式（多項式）」そのものにガロア群を対応させます。方程式の根たちが、ガロア群の作用によってどのように入れ替わるか（置換されるか）という視点を与えます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多項式のガロア群の定義</h2>

            <p>
                方程式に付随するガロア群は、その方程式の分解体のガロア群として定義されます。
            </p>

            <ContentBox type="definition" title="Definition 7.2-1 (多項式のガロア群)">
                <p>
                    体 <InlineMath math="F" /> 上の分離多項式 <InlineMath math="f \in F[x]" /> に対して、<InlineMath math="f" /> の <InlineMath math="F" /> 上の分解体を <InlineMath math="K" /> とする。このとき、ガロア群 <InlineMath math="\mathrm{Gal}(K/F)" /> のことを、<strong>多項式 <InlineMath math="f" /> のガロア群</strong>、または<strong>方程式 <InlineMath math="f(x)=0" /> のガロア群</strong>と呼び、<InlineMath math="\mathrm{Gal}(f/F)" /> と表記する。
                </p>
                <p>
                    <InlineMath math="f" /> の次数を <InlineMath math="n" /> とし、その根を <InlineMath math="\alpha_1, \dots, \alpha_n" /> とする。<InlineMath math="\sigma \in \mathrm{Gal}(f/F)" /> は根を根に写すため、根の集合の置換を引き起こす。したがって <InlineMath math="\mathrm{Gal}(f/F)" /> は、自然に <InlineMath math="n" /> 次対称群 <InlineMath math="S_n" /> の部分群とみなすことができる。
                </p>
            </ContentBox>

            <p>
                低次の方程式のガロア群を具体的に判別式を用いて分類してみましょう。
            </p>

            <ContentBox type="example" title="Example 7.2-1 (2 次方程式のガロア群)">
                <p>
                    <InlineMath math="f = ax^2 + bx + c \in \mathbb{Q}[x]" /> が既約であるとする。判別式は <InlineMath math="\Delta = b^2 - 4ac" /> である。
                </p>
                <p>
                    解の公式より根は <InlineMath math="\frac{-b \pm \sqrt{\Delta}}{2a}" /> であるため、分解体は <InlineMath math="K = \mathbb{Q}(\sqrt{\Delta})" /> となる。
                </p>
                <p>
                    <InlineMath math="f" /> が既約であるため <InlineMath math="\Delta" /> は有理数の平方数ではなく、<InlineMath math="[K:\mathbb{Q}] = 2" /> である。したがって、ガロア群は
                </p>
                <BlockMath math="\mathrm{Gal}(f/\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z} \cong S_2" />
                <p>
                    となる（2つの根を入れ替える置換群）。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-2 (3 次方程式のガロア群)">
                <p>
                    <InlineMath math="f = x^3 + px + q \in \mathbb{Q}[x]" /> が既約であるとする。この判別式は <InlineMath math="\Delta = -4p^3 - 27q^2" /> で与えられる。
                </p>
                <p>
                    ガロア群 <InlineMath math="G \leq S_3" /> は、根の置換群である。<InlineMath math="S_3" /> の推移的な部分群は <InlineMath math="A_3 \cong \mathbb{Z}/3\mathbb{Z}" /> または <InlineMath math="S_3" /> 全体のいずれかである。実は、ガロア群の元が偶置換（<InlineMath math="A_3" />）のみからなることと、判別式 <InlineMath math="\Delta" /> が <InlineMath math="\mathbb{Q}" /> で平方数になること（<InlineMath math="\sqrt{\Delta} \in \mathbb{Q}" />）は同値である。
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><InlineMath math="\Delta" /> が平方数のとき：<InlineMath math="\mathrm{Gal}(f/\mathbb{Q}) \cong \mathbb{Z}/3\mathbb{Z}" /></li>
                    <li><InlineMath math="\Delta" /> が平方数でないとき：<InlineMath math="\mathrm{Gal}(f/\mathbb{Q}) \cong S_3" /></li>
                </ul>
                <p>
                    例えば <InlineMath math="f = x^3 - 3x + 1" /> を考えると、<InlineMath math="\Delta = -4(-27) - 27(1) = 81 = 9^2" /> となり平方数であるため、この方程式のガロア群は <InlineMath math="\mathbb{Z}/3\mathbb{Z}" /> である。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">ガロア群の推移性</h2>

            <p>
                方程式が「既約」であるとき、そのガロア群は根の集合に対して「えこひいき」しません。つまり、どの根からどの根へも自己同型によって移ることができます。
            </p>

            <ContentBox type="proposition" title="Proposition 7.2-1 (ガロア群の推移性)">
                <p>
                    多項式 <InlineMath math="f \in F[x]" /> が <InlineMath math="F" /> 上<strong>既約</strong>であるとする。このとき、ガロア群 <InlineMath math="\mathrm{Gal}(f/F)" /> は <InlineMath math="f" /> の根の集合に対して<strong>推移的（transitive）</strong>に作用する。
                </p>
                <p>
                    すなわち、<InlineMath math="f" /> の任意の2つの根 <InlineMath math="\alpha, \beta" /> に対して、ある自己同型 <InlineMath math="\sigma \in \mathrm{Gal}(f/F)" /> が存在して <InlineMath math="\sigma(\alpha) = \beta" /> を満たす。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    <InlineMath math="f" /> が既約多項式であるため、<InlineMath math="f" /> の任意の根 <InlineMath math="\alpha, \beta" /> の <InlineMath math="F" /> 上の最小多項式は、定数倍を除いてともに <InlineMath math="f" /> 自身に一致する。
                </p>
                <p>
                    単拡大の同型定理（1.3節）より、
                </p>
                <BlockMath math="F(\alpha) \cong F[x]/(f(x)) \cong F(\beta)" />
                <p>
                    が成り立ち、この同型写像 <InlineMath math="\phi : F(\alpha) \xrightarrow{\sim} F(\beta)" /> は <InlineMath math="\phi(\alpha) = \beta" /> を満たす。
                </p>
                <p>
                    <InlineMath math="K" /> を <InlineMath math="f" /> の分解体とする。<InlineMath math="K" /> は <InlineMath math="f" /> の <InlineMath math="F(\alpha)" /> 上の分解体であると同時に、<InlineMath math="f" /> の <InlineMath math="F(\beta)" /> 上の分解体でもある。分解体の自己同型の拡張定理（3.1節）により、同型 <InlineMath math="\phi" /> は分解体 <InlineMath math="K" /> 全体の自己同型 <InlineMath math="\tilde{\phi} \in \mathrm{Gal}(K/F)" /> へと拡張できる。
                </p>
                <p>
                    この拡張された自己同型 <InlineMath math="\tilde{\phi}" /> は当然 <InlineMath math="\tilde{\phi}(\alpha) = \beta" /> を満たす。よって作用は推移的である。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.2-3 (x^4 - 2 のガロア群の推移性)">
                <p>
                    Chapter 5 で扱った <InlineMath math="f(x) = x^4 - 2" /> のガロア群 <InlineMath math="D_4" /> を考える。根は <InlineMath math="R = \{\sqrt[4]{2}, -\sqrt[4]{2}, i\sqrt[4]{2}, -i\sqrt[4]{2}\}" /> の4つである。
                </p>
                <p>
                    <InlineMath math="x^4 - 2" /> はアイゼンシュタインの判定法により <InlineMath math="\mathbb{Q}" /> 上既約であるため、定理より <InlineMath math="D_4" /> は <InlineMath math="R" /> に対して推移的に作用しなければならない。
                </p>
                <p>
                    実際、自己同型 <InlineMath math="\sigma" />（90度回転：<InlineMath math="\sqrt[4]{2} \mapsto i\sqrt[4]{2} \mapsto -\sqrt[4]{2} \mapsto -i\sqrt[4]{2}" />）を繰り返し適用することで、特定の根 <InlineMath math="\sqrt[4]{2}" /> から出発して他の3つすべての根に移ることができる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§7.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>方程式 <InlineMath math="f(x)=0" /> の<strong>ガロア群</strong>とは、その分解体のガロア群のことであり、根の置換群とみなせる。</li>
                    <li>2次方程式のガロア群は <InlineMath math="S_2" /> または自明群、3次方程式のガロア群は <InlineMath math="S_3" /> または <InlineMath math="A_3" /> となり、判別式で分類できる。</li>
                    <li>既約方程式のガロア群は、根に対して推移的に作用する（どの根へも移れる自己同型が存在する）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
