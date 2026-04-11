import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function UnivalentAproachAndRiemannSurfaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ここまでの議論を通じて、多価関数という厄介な存在は、複素平面の一部の領域（分枝切断）を切り開いて一価の枝を取り出すか、あるいは「被覆空間」という重層的な空間を考えることで見通し良く扱えることがわかりました。本節では、これらのアイデアを統合し、多価関数をごく自然な一価正則関数へと姿を変えさせる究極の舞台「リーマン面」の必要性について展望します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">一価化の基本的アイデア</h2>

            <p>
                多価関数の問題点は、1つの点に複数の値が対応してしまうという「対応づけの曖昧さ」にありました。これを解消するためのコロンブスの卵的発想が、「値域を調整するのではなく、定義域そのものを広げて（増やして）しまえば良い」という考え方です。
            </p>

            <ContentBox type="remark" title="定義域の拡張による多価性の解消">
                <p>
                    複素平面 <InlineMath math="\mathbb{C}" /> の上の1つの点 <InlineMath math="z" /> に、関数値 <InlineMath math="w_1" /> と <InlineMath math="w_2" /> の2つが対応してしまっているとします。このとき、点 <InlineMath math="z" /> を「点 <InlineMath math="z" /> のコピー1」と「点 <InlineMath math="z" /> のコピー2」の2種類の点に分離し、コピー1の点には <InlineMath math="w_1" /> を、コピー2の点には <InlineMath math="w_2" /> を対応させるような新しい大きな定義域空間を作ります。
                </p>
                <p>
                    こうすることで、新しい空間上ではどんな点にもただ1つの値しか対応しなくなり、多価関数は「新しい空間の上の美しい一価関数」へと変貌します。これが一価化（uniformization）のアプローチです。前節の被覆空間の概念は、まさにこの「コピー点からなるシーツ」を重層的に構成する手法でした。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-1">
                <p>
                    <InlineMath math="\log z" /> は、複素平面 <InlineMath math="\mathbb{C} \setminus \{0\}" /> 上では無限多価関数です。しかし、指数写像 <InlineMath math="\exp : \mathbb{C} \to \mathbb{C} \setminus \{0\}" /> の上の被覆空間である複素平面 <InlineMath math="\mathbb{C}" /> （変数 <InlineMath math="w" /> の平面）を定義域として設定し直してみましょう。
                </p>
                <p>
                    下の点 <InlineMath math="z" /> に対して、上の点 <InlineMath math="w" /> は <InlineMath math="e^w = z" /> を満たす点として無数に存在します。新しい定義域である上の空間 <InlineMath math="\mathbb{C}" /> 上の関数 <InlineMath math="F(w)" /> として <InlineMath math="\log z" /> を再解釈すると、
                </p>
                <BlockMath math="F(w) = \log(e^w) = w" />
                <p>
                    となります。なんと、厄介だった対数関数は、新しい空間（被覆空間）上では単なる「恒等写像」という、これ以上ないほど単純な一価正則関数に化けてしまいました。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 2.3-2">
                <p>
                    同じように <InlineMath math="\sqrt{z}" /> も一価化できます。写像 <InlineMath math="w \mapsto w^2" /> による2枚被覆空間を上空から見れば、下の点 <InlineMath math="z" /> に対応する上の点は <InlineMath math="w" /> と <InlineMath math="-w" /> であり、それぞれに分けて関数値を対応づけることができます。
                </p>
                <p>
                    ここでも <InlineMath math="\sqrt{z}" /> という関数は、展開された上の空間で見れば、単なる <InlineMath math="F(w) = w" /> という一価の恒等関数そのものになります。
                </p>
            </ContentBox>

            <p>
                このように、関数に応じて適切な「拡がった定義域」を用意できれば、多価性は見事に消滅します。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">リーマン面の必然性</h2>

            <p>
                単純な多価関数（全平面に広がる被覆）ならこれで良いのですが、分枝点が複数ある複雑な関数の場合、この「拡がった定義域」はどのような形になるのでしょうか？
            </p>

            <ContentBox type="example" title="Example 2.3-3">
                <p>
                    関数 <InlineMath math="\sqrt{z^2 - 1}" /> の一価化を考えてみましょう。この関数は <InlineMath math="z = 1" /> と <InlineMath math="z = -1" /> の2つに分枝点を持っていました。
                </p>
                <p>
                    §1.4 では、分枝点の間を結ぶ線分 <InlineMath math="[-1, 1]" /> をハサミで切り取って分枝切断としました。一価化を行うには、このように切り開いた2枚の平面を用意し、切り口（分枝切断）に沿って互い違いに貼り合わせる必要があります。
                </p>
                <p>
                    この2枚の平面を、無限遠点も含めてリーマン球面として扱いながら、切り口で交差するように貼り合わせると、穴のない単一の球面に類似した曲面が現れます（トポロジー的には種数 0 の球面と同相になります）。この新しく組み立てられた幾何学的対象こそが、<InlineMath math="\sqrt{z^2 - 1}" /> を一価化するための「自然な定義域」です。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="次章への誘い：リーマン面の誕生">
                <p>
                    <InlineMath math="\sqrt{z(z-1)(z-\lambda)}" /> のような、より多くの分枝点を持つ代数関数を考えた場合、貼り合わせて構成される定義域はもはや単なる球面ではなく「ドーナツ型（トーラス）」や「複数の穴を持つ曲面」へと複雑化していきます。
                </p>
                <p>
                    このように、与えられた多価関数を自然に一価関数として受け入れるための固有の曲面空間が存在します。この「関数自身の要請によって生成される、複素構造を持った曲面」のことを<b>リーマン面（Riemann Surface）</b>と呼びます。
                </p>
                <p>
                    次章（Chapter 3）では、このリーマン面の概念を数学的に厳密に定義し、その作り方や位相的な分類、そしてリーマン面上の関数の性質について系統的に研究していきます。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>多価関数は、定義域を「値の数だけ重なるシーツ（被覆空間）」に拡張することで、一価正則関数に変換できる。</li>
                    <li>対数関数や平方根などの多価関数は、適切な上の空間から見れば単なる恒等写像とみなせる。</li>
                    <li>複数の分枝点を持つ代数関数等では、分枝切断に沿って平面等を貼り合わせることで自然な定義域が構成される。これが「リーマン面」の萌芽である。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
