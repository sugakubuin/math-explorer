import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConvexSetTopologicalProperties() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>本節では、ユークリッド空間における凸集合の位相的性質について学びます。とくに、凸集合の内部や閉包が再び凸集合となること、そして「相対的内部」という凸解析特有の重要な概念を導入します。これらの性質は、後続の章で分離定理や双対性を厳密に扱うための不可欠な基礎となります。</p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">内部と閉包</h2>

            <p>まず、凸集合に対する基本的な位相操作である閉包（closure）と内部（interior）について考えます。集合が凸であるという幾何学的な性質は、これらの位相的な操作を行っても保存されます。</p>

            <ContentBox type="proposition" title="Proposition 1.3-1">
                <p>凸集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> の閉包 <InlineMath math="\overline{C}" /> と内部 <InlineMath math="\mathrm{int}(C)" /> は、ともに凸集合である。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>まず、閉包 <InlineMath math="\overline{C}" /> が凸であることを示す。任意の <InlineMath math="x, y \in \overline{C}" /> と <InlineMath math="\lambda \in [0,1]" /> をとる。閉包の定義より、<InlineMath math="x_k \to x" /> および <InlineMath math="y_k \to y" /> となる <InlineMath math="C" /> 内の点列 <InlineMath math="(x_k)" />, <InlineMath math="(y_k)" /> が存在する。<InlineMath math="C" /> は凸集合であるため、すべての <InlineMath math="k" /> に対して <InlineMath math="\lambda x_k + (1-\lambda)y_k \in C" /> が成り立つ。極限をとると、</p>
                <BlockMath math="\lim_{k \to \infty} (\lambda x_k + (1-\lambda)y_k) = \lambda x + (1-\lambda)y" />
                <p>となり、極限点は閉包に含まれるため、<InlineMath math="\lambda x + (1-\lambda)y \in \overline{C}" /> である。したがって、<InlineMath math="\overline{C}" /> は凸である。</p>
                
                <p>次に、内部 <InlineMath math="\mathrm{int}(C)" /> が凸であることを示す。任意の <InlineMath math="x, y \in \mathrm{int}(C)" /> と <InlineMath math="\lambda \in (0,1)" /> をとる（<InlineMath math="\lambda=0, 1" /> の場合は自明）。<InlineMath math="x, y" /> は内部の点なので、ある <InlineMath math="r > 0" /> が存在して、開球 <InlineMath math="B(x, r) \subseteq C" /> および <InlineMath math="B(y, r) \subseteq C" /> が成り立つ。任意の <InlineMath math="v \in B(0, r)" /> に対して、</p>
                <BlockMath math="(\lambda x + (1-\lambda)y) + v = \lambda(x + v) + (1-\lambda)(y + v)" />
                <p>と書ける。<InlineMath math="x + v \in B(x, r) \subseteq C" /> かつ <InlineMath math="y + v \in B(y, r) \subseteq C" /> であり、<InlineMath math="C" /> は凸であるから、この凸結合も <InlineMath math="C" /> に属する。すなわち、<InlineMath math="B(\lambda x + (1-\lambda)y, r) \subseteq C" /> となり、<InlineMath math="\lambda x + (1-\lambda)y \in \mathrm{int}(C)" /> である。よって <InlineMath math="\mathrm{int}(C)" /> も凸である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>この命題により、凸集合を扱う際に、その境界を含めるか除外するかに関わらず、凸性が保たれることが保証されます。</p>

            <ContentBox type="example" title="Example 1.3-1">
                <p>開半空間 <InlineMath math="C = \{x \in \mathbb{R}^n \mid \langle a, x \rangle < b\}" /> （ただし <InlineMath math="a \neq 0" />）を考える。これは定義から凸集合である。</p>
                <p>その閉包は、閉半空間 <InlineMath math="\overline{C} = \{x \in \mathbb{R}^n \mid \langle a, x \rangle \leq b\}" /> となる。また、この閉半空間の内部をとると、元の開半空間 <InlineMath math="\mathrm{int}(\overline{C}) = \{x \in \mathbb{R}^n \mid \langle a, x \rangle < b\} = C" /> に一致する。開半空間も閉半空間も、どちらも凸集合であることが確認できる。</p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">相対的内部</h2>

            <p>前項で「内部」の概念を見ましたが、空間の次元に対して「薄い」凸集合（たとえば3次元空間内の2次元の円盤や1次元の線分）を考えると、通常の意味での内部は空集合になってしまいます。しかし、凸解析においては、集合が「実質的に存在している空間」の中での内部を考えることが非常に重要です。そこで導入されるのが<b>アフィン包</b>と<b>相対的内部</b>です。</p>

            <ContentBox type="definition" title="Definition 1.3-1">
                <p>集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> を含む最小のアフィン部分空間（すなわち、<InlineMath math="C" /> の元のアフィン結合全体からなる集合）を、<InlineMath math="C" /> の<b>アフィン包（affine hull）</b>と呼び、<InlineMath math="\mathrm{aff}(C)" /> で表す。</p>
            </ContentBox>

            <p>アフィン包 <InlineMath math="\mathrm{aff}(C)" /> を用いることで、<InlineMath math="C" /> が本来属している次元の部分空間を特定することができます。</p>

            <ContentBox type="example" title="Example 1.3-2">
                <p><InlineMath math="\mathbb{R}^3" /> 内の線分 <InlineMath math="C = \{(t, 0, 0) \mid 0 \leq t \leq 1\}" /> を考える。</p>
                <p>この集合 <InlineMath math="C" /> は <InlineMath math="\mathbb{R}^3" /> においては体積を持たないため、通常の内部は空集合である（<InlineMath math="\mathrm{int}(C) = \emptyset" />）。</p>
                <p>一方、<InlineMath math="C" /> を含む最小のアフィン部分空間は <InlineMath math="x" />-軸全体である。すなわち、<InlineMath math="\mathrm{aff}(C) = \{(x, 0, 0) \mid x \in \mathbb{R}\}" /> となる。</p>
            </ContentBox>

            <p>アフィン包の位相を考えることで、空集合にならない有用な「内部」を定義できます。</p>

            <ContentBox type="definition" title="Definition 1.3-2">
                <p>凸集合 <InlineMath math="C" /> の<b>相対的内部（relative interior）</b>とは、アフィン包 <InlineMath math="\mathrm{aff}(C)" /> の相対位相に関する <InlineMath math="C" /> の内部のことであり、<InlineMath math="\mathrm{ri}(C)" /> と表記する。</p>
                <p>すなわち、<InlineMath math="x \in \mathrm{ri}(C)" /> とは、ある <InlineMath math="r > 0" /> が存在して、<InlineMath math="B(x, r) \cap \mathrm{aff}(C) \subseteq C" /> が成り立つことである。</p>
            </ContentBox>

            <p>Example 1.3-2 の線分 <InlineMath math="C = \{(t, 0, 0) \mid 0 \leq t \leq 1\}" /> の場合、アフィン包（<InlineMath math="x" />-軸）における相対的内部は端点を除いた開線分 <InlineMath math="\mathrm{ri}(C) = \{(t, 0, 0) \mid 0 < t < 1\}" /> となります。</p>

            <ContentBox type="proposition" title="Proposition 1.3-2">
                <p>空でない凸集合 <InlineMath math="C \subseteq \mathbb{R}^n" /> に対して、その相対的内部は空ではない。すなわち、<InlineMath math="\mathrm{ri}(C) \neq \emptyset" />。</p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p><InlineMath math="C" /> のアフィン包 <InlineMath math="\mathrm{aff}(C)" /> の次元を <InlineMath math="k" /> とする（<InlineMath math="0 \leq k \leq n" />）。必要であれば平行移動を行うことで、<InlineMath math="0 \in C" /> と仮定してよく、このとき <InlineMath math="\mathrm{aff}(C)" /> は <InlineMath math="k" /> 次元の線形部分空間となる。<InlineMath math="k = 0" /> のときは <InlineMath math="C = \{0\}" /> であり、<InlineMath math="\mathrm{aff}(C) = \{0\}" /> の相対位相で <InlineMath math="\mathrm{ri}(C) = \{0\} \neq \emptyset" /> となり成立する。</p>
                <p><InlineMath math="k > 0" /> とする。<InlineMath math="\mathrm{aff}(C)" /> は <InlineMath math="C" /> の点で張られるため、<InlineMath math="C" /> から <InlineMath math="k" /> 個の線形独立なベクトル <InlineMath math="v_1, \dots, v_k" /> を選ぶことができる。<InlineMath math="0 \in C" /> も含め、これら <InlineMath math="k+1" /> 個の点はアフィン独立である。これらを頂点とする <InlineMath math="k" /> 次元の単体（simplex）<InlineMath math="S" /> を考える：</p>
                <BlockMath math="S = \left\{ \sum_{i=1}^k \lambda_i v_i \,\middle|\, \lambda_i \geq 0, \sum_{i=1}^k \lambda_i \leq 1 \right\}" />
                <p><InlineMath math="C" /> は凸集合であり、<InlineMath math="0, v_1, \dots, v_k \in C" /> なので、<InlineMath math="S \subseteq C" /> である。ここで、単体 <InlineMath math="S" /> のすべての係数が正となる点（例えば重心 <InlineMath math="x^* = \frac{1}{k+1}\sum_{i=1}^k v_i" />）をとると、この点は <InlineMath math="\mathrm{aff}(C)" /> 内で <InlineMath math="S" /> の内点となる。したがって、ある <InlineMath math="r > 0" /> について <InlineMath math="B(x^*, r) \cap \mathrm{aff}(C) \subseteq S \subseteq C" /> となり、<InlineMath math="x^* \in \mathrm{ri}(C)" /> を得る。よって <InlineMath math="\mathrm{ri}(C) \neq \emptyset" /> である。</p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="remark" title="凸最適化と相対的内部の重要性">
                <p>相対的内部の概念は、凸解析において極めて重要です。通常の位相では「潰れて」しまって内部が空になる集合であっても、相対的内部を考えることで常に「内点」を持つことが保証されます。この性質は、後続の章で学ぶ劣微分の和の公式（§3.3）やフェンシェル双対性の強双対定理（§5.2）における<b>スレーターの条件（制約想定）</b>を記述する際に不可欠な役割を果たします。</p>
            </ContentBox>

            <ContentBox type="note" title="§1.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>凸集合の閉包と内部は、ふたたび凸集合になる（Proposition 1.3-1）。</li>
                    <li><b>アフィン包 <InlineMath math="\mathrm{aff}(C)" /></b>は、<InlineMath math="C" /> を含む最小のアフィン部分空間である。</li>
                    <li><b>相対的内部 <InlineMath math="\mathrm{ri}(C)" /></b>は、アフィン包の位相に関する内部であり、低次元の凸集合に対しても適切に「内点」を捉えることができる。</li>
                    <li>空でない凸集合の相対的内部は、常に空ではない（Proposition 1.3-2）。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
