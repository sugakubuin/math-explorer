import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function CompletionOfNormedSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までに、完備な空間（バナッハ空間）と完備でない空間が存在することを見てきました。もし手元にある空間が完備でなかった場合、関数解析の手法が使えないのでしょうか。実は、どんなに「穴だらけ」の空間であっても、その穴を合理的に埋めて完備な空間に生まれ変わらせる強力な手法が存在します。本節では、すべてのノルム空間がバナッハ空間へと「完備化」できることを学びます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化の存在</h2>

            <p>
                空間の「穴」とは、そこにコーシー列が向かっているのに極限点となるべき要素が存在しない状態を指します。これを解決する最も直接的なアイデアは、「コーシー列そのものを新しい要素だと思ってしまおう」というものです。
            </p>

            <ContentBox type="theorem" title="Theorem 2.3-1 (完備化定理)">
                <p>
                    任意のノルム空間 <InlineMath math="V" /> に対して、以下の条件を満たすバナッハ空間 <InlineMath math="\hat{V}" /> が、（等長同型を除いて）一意に存在する。
                </p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><InlineMath math="\hat{V}" /> は部分空間として <InlineMath math="V" /> を含む（より正確には <InlineMath math="V" /> と等長な部分集合 <InlineMath math="W" /> を含む）。</li>
                    <li><InlineMath math="V" /> は <InlineMath math="\hat{V}" /> の中で稠密（dense）である。つまり、<InlineMath math="\hat{V}" /> の任意の元は <InlineMath math="V" /> の元の極限として近似できる。</li>
                </ol>
                <p>
                    この <InlineMath math="\hat{V}" /> を <InlineMath math="V" /> の完備化（completion）と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    証明の概略を述べる。まず、<InlineMath math="V" /> 内のすべてのコーシー列の集合を考える。2つのコーシー列 <InlineMath math="(x_n), (y_n)" /> について、<InlineMath math="\lim_{n \to \infty} \|x_n - y_n\| = 0" /> となる直感的に「同じ極限に向かっている」列同士を同値とみなす同値関係 <InlineMath math="\sim" /> を導入する。
                </p>
                <p>
                    この同値類の全体族を <InlineMath math="\hat{V}" /> と定義する。<InlineMath math="[(x_n)] + [(y_n)] = [(x_n + y_n)]" /> のように演算を定めると <InlineMath math="\hat{V}" /> はベクトル空間となる。
                </p>
                <p>
                    新しい空間のノルムを、<InlineMath math="\|[(x_n)]\|_{\hat{V}} = \lim_{n \to \infty} \|x_n\|" /> で定義する（コーシー列なのでこの実数における極限は必ず存在する）。
                </p>
                <p>
                    元の空間 <InlineMath math="V" /> の元 <InlineMath math="x" /> は、定常列 <InlineMath math="(x, x, x, \ldots)" /> の同値類として <InlineMath math="\hat{V}" /> に自然に埋め込まれ、この埋め込みによってノルムが保存される（等長性）。最後に、この <InlineMath math="\hat{V}" /> 内で任意のコーシー列を考えると、それが <InlineMath math="\hat{V}" /> 内の元に収束することを証明できる（完備性の確認）。一意性については、もし別の完備化 <InlineMath math="U" /> があれば、<InlineMath math="V" /> が稠密である性質から <InlineMath math="\hat{V}" /> と <InlineMath math="U" /> の間に同型写像を自然に延長できることによる。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <p>
                この完備化の手順は、有理数から実数を構成する有名な方法（カントールの実数構成法）と全く同じロジックです。
            </p>

            <ContentBox type="example" title={<span>Example 2.3-1 (<InlineMath math="\mathbb{Q}" /> の完備化が <InlineMath math="\mathbb{R}" /> であること)</span>}>
                <p>
                    有理数の全体 <InlineMath math="\mathbb{Q}" /> に通常の絶対値でノルム（距離）を入れた空間を考える。有理数空間の中では、<InlineMath math="3, 3.1, 3.14, 3.141, \ldots" /> という円周率に近づく数列はコーシー列になるが、<InlineMath math="\mathbb{Q}" /> の中にはその極限値となる元が存在しない（<InlineMath math="\pi" /> は無理数であるため）。よって <InlineMath math="\mathbb{Q}" /> は完備ではない。
                </p>
                <p>
                    上記の完備化定理の手続き（コーシー列の同値類をとる）を <InlineMath math="\mathbb{Q}" /> に対して適用すると、得られる完備空間 <InlineMath math="\hat{\mathbb{Q}}" /> こそが実数の全体 <InlineMath math="\mathbb{R}" /> に他ならない。<InlineMath math="\mathbb{Q}" /> は <InlineMath math="\mathbb{R}" /> の中で稠密であり、元の加法や距離構造がそのまま保存されている。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">完備化の一意性と意味</h2>

            <p>
                完備化は、「既存の構造を壊さずに、最小の労力で穴を埋める」究極の操作と言えます。関数空間においてこの操作を行うと、一見扱いづらかった「連続でない関数」などが、完備空間の要素として自然に現れることになります。
            </p>

            <ContentBox type="remark" title="完備化の意義">
                <p>
                    完備化 <InlineMath math="\hat{V}" /> は「最小の」完備空間です。元の空間 <InlineMath math="V" /> にあった位相的・代数的な構造をすべて保存したまま、不足していた「極限点」だけをピンポイントで追加する操作になっています。定理における「同型を除いて一意」という事実は、構成の手続きによらず、出来上がる完備空間の数学的本質はただ一つに決まることを保証しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.3-2 (<InlineMath math="C[0,1]" /> の完備化と <InlineMath math="L^1" /> 空間)</span>}>
                <p>
                    先の Example 2.1-2 において、連続関数空間 <InlineMath math="C[0,1]" /> は <InlineMath math="L^1" /> ノルム <InlineMath math="\|f\|_1 = \int_0^1 |f(x)|\,dx" /> のもとで完備でないことを見た。
                </p>
                <p>
                    この非完備なノルム空間 <InlineMath math="(C[0,1], \|\cdot\|_1)" /> に本節の完備化を適用してみよう。完備化によって追加される「新しい元」は、連続関数列の <InlineMath math="L^1" /> 極限ではあるが、連続関数ではない関数たちである。具体的には、Example 2.1-2 で現れた階段関数のような不連続な関数が極限として追加されていく。
                </p>
                <p>
                    これを厳密に構成した結果作られる完備空間こそが、ルベーグ積分によって定義される <InlineMath math="L^1[0,1]" /> 空間と完全に同型になる。言い換えれば、「連続関数の空間を積分ノルムで完備化したもの」が <InlineMath math="L^1" /> 空間であるという直感的な解釈が可能となる。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>どんなノルム空間も、元の空間を稠密に含むようなバナッハ空間（完備空間）に拡張することができる。</li>
                    <li>この拡張空間を完備化といい、同値類の手法を用いて構成され、意味のある形として一意に定まる。</li>
                    <li>有理数から実数が構成される手続きは、この完備化と全く同じ論理構造である。</li>
                    <li>完備化によって、非完備であった空間の「穴」に当たる部分が自然な要素（極限）として可視化される（例：<InlineMath math="C[0,1]" /> の完備化としての <InlineMath math="L^1[0,1]" />）。</li>
                </ul>
            </ContentBox>

        </section>
    );
}
