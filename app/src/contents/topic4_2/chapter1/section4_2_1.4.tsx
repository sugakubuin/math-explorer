import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function MultivaluedFunctionsAndBranches() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節までで見てきたように、解析接続は「同じ経路」に沿う限りにおいて一意ですが、経路が異なれば異なる関数値に行き着くことがあります。この結果として、複素平面上の1つの点に対して複数の関数値が対応してしまう現象が生じます。これが「多価関数」と呼ばれるものです。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">多価関数の例</h2>

            <p>
                「関数」という言葉は、本来「1つの入力（点）に対してただ1つの出力（値）を返す対応規則」を意味する（一価関数）ため、「多価関数」という名称は一種の矛盾を含んでいます。しかし、解析接続の結果として自然に立ち現れるこの概念は、複素解析特有の豊かな構造を示しています。
            </p>

            <ContentBox type="definition" title="Definition 1.4-1 (多価関数)">
                <p>
                    複素平面あるいはある領域上の1つの点 <InlineMath math="z" /> に対して、複数の複素数値を対応させる対応を<b>多価関数（multivalued function）</b>と呼ぶ。
                    これは、ある初期の関数要素から様々な経路を通じて解析接続を試みたとき、接続先の領域が重なっていても経路に依存して異なる関数要素が得られる場合に生じる。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-1">
                <p>
                    最も代表的な多価関数である複素対数関数 <InlineMath math="\log z" /> を考えます。<InlineMath math="z \neq 0" /> に対して、
                </p>
                <BlockMath math="\log z = \ln|z| + i\arg z" />
                <p>
                    と表されます。ここで偏角 <InlineMath math="\arg z" /> は <InlineMath math="2\pi" /> の整数倍の不定性を持っています。原点の周りを反時計回りに1周する経路に沿って解析接続を行うと、偏角は <InlineMath math="2\pi" /> 増えるため、元の位置に戻っても関数値は <InlineMath math="2\pi i" /> だけずれてしまいます。
                </p>
                <p>
                    したがって、例えば <InlineMath math="z = 1" /> に対しては <InlineMath math="\ln 1 = 0" /> であり、関数値として
                </p>
                <BlockMath math="\log 1 \in \{2n\pi i \mid n \in \mathbb{Z}\}" />
                <p>
                    という可算無限個の値をもつことになります。<InlineMath math="\log z" /> は<b>無限多価関数</b>です。
                </p>
            </ContentBox>

            <p>
                対数関数の多価性は、指数関数を利用して定義される「一般の累乗」にも波及します。
            </p>

            <ContentBox type="example" title="Example 1.4-2">
                <p>
                    一般の複素数の累乗 <InlineMath math="z^\alpha" /> （ただし <InlineMath math="\alpha \notin \mathbb{Z}" />）は、対数関数を用いて
                </p>
                <BlockMath math="z^\alpha = e^{\alpha \log z}" />
                <p>
                    定義されます。<InlineMath math="\log z = \ln|z| + i(\theta + 2n\pi)" /> と書けば、
                </p>
                <BlockMath math="z^\alpha = e^{\alpha (\ln|z| + i(\theta + 2n\pi))} = e^{\alpha \ln|z|} e^{i\alpha\theta} e^{i \cdot 2n\pi\alpha}" />
                <p>
                    となります。この最後の因子 <InlineMath math="e^{i \cdot 2n\pi\alpha}" /> が多価性の原因です。
                </p>
                <p>
                    <InlineMath math="\alpha = 1/2" /> の場合（すなわち <InlineMath math="\sqrt{z}" />）：
                    <InlineMath math="e^{i \cdot n\pi}" /> は <InlineMath math="n" /> が偶数なら <InlineMath math="1" />、奇数なら <InlineMath math="-1" /> となるため、値は2つに限られます。よって <InlineMath math="\sqrt{z}" /> は<b>2価関数</b>です。
                </p>
                <p>
                    一方で <InlineMath math="\alpha" /> が無理数の場合：
                    <InlineMath math="e^{i \cdot 2n\pi\alpha}" /> はすべての整数 <InlineMath math="n" /> に対して異なる値を取るため、<InlineMath math="z^\alpha" /> は<b>無限多価関数</b>となります。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">分枝点と分枝切断</h2>

            <p>
                多価関数を扱いやすくするためには、「関数の振る舞いが変わってしまうような厄介な点」を見つけ出し、その点の周りをぐるぐる回るような自由な移動を禁止するという強硬手段をとります。
            </p>

            <ContentBox type="definition" title="Definition 1.4-2 (分枝点)">
                <p>
                    ある点 <InlineMath math="z_0" /> の周りを1周するような十分小さな閉曲線をとり、その閉曲線に沿って関数要素の解析接続を行う。1周して戻ってきたときの関数要素が元の関数要素と異なる場合、この点 <InlineMath math="z_0" /> をその多価関数の<b>分枝点（branch point）</b>と呼ぶ。
                </p>
            </ContentBox>

            <ContentBox type="definition" title="Definition 1.4-3 (分枝切断)">
                <p>
                    多価関数を一価正則関数に制限する（一価化する）ために、分枝点を結ぶよう（あるいは分枝点から無限遠点へ）人為的に複素平面に取り除いた曲線を<b>分枝切断（branch cut）</b>と呼ぶ。
                    分枝切断をまたぐような経路は許されないため、分枝点の周りを1周することができなくなり、関数は一価となる。こうして取り出されたひと続きの一価関数を<b>分枝（branch）</b>あるいは主値という。
                </p>
            </ContentBox>

            <ContentBox type="example" title="Example 1.4-3">
                <p>
                    <InlineMath math="\log z" /> の分枝点を考えます。<InlineMath math="z=0" /> を囲むように1周すると関数値は <InlineMath math="2\pi i" /> 増えるため、<InlineMath math="z=0" /> は分枝点です。（また、<InlineMath math="z=\infty" /> も分枝点です）。
                </p>
                <p>
                    この多価性を解消するために、原点 <InlineMath math="0" /> から負の実軸 <InlineMath math="(-\infty, 0]" /> をごっそり切り離す操作をします。<InlineMath math="\mathbb{C} \setminus (-\infty, 0]" /> という、左側に切れ目の入った平面を考えます。この切れ目が<b>分枝切断</b>です。
                </p>
                <p>
                    この切り開かれた平面上では偏角の範囲を <InlineMath math="-\pi < \arg z < \pi" /> とただ1つに定めることができ、対数関数は一価正則関数となります。このようにして定義された <InlineMath math="\text{Log}\, z" /> （大文字のL）を<b>主値（principal value）</b>と呼びます。
                </p>
                <p>
                    なお、主値 <InlineMath math="\text{Log}\, z" /> は分枝切断上（負の実軸）に近づく際、上から近づくか下から近づくかによって偏角が <InlineMath math="\pi" /> または <InlineMath math="-\pi" /> に近づき異なる極限を持つため、<b>分枝切断の真上では関数として不連続</b>になります。
                </p>
            </ContentBox>

            <p>
                より複雑な分枝構造を持つ例も見ておきましょう。
            </p>

            <ContentBox type="example" title="Example 1.4-4">
                <p>
                    関数 <InlineMath math="f(z) = \sqrt{z^2 - 1}" /> を考えます。<InlineMath math="z^2 - 1 = 0" /> を解くと <InlineMath math="z = \pm 1" /> です。これらが分枝点としての候補になります。
                </p>
                <p>
                    <InlineMath math="f(z) = \sqrt{z - 1} \sqrt{z + 1}" /> と分解して考えます。例えば <InlineMath math="z = 1" /> の周りを微小な円で1周すると、<InlineMath math="\sqrt{z-1}" /> の因子から <InlineMath math="-1" /> の符号反転が生じ、<InlineMath math="\sqrt{z+1}" /> の因子は符号が変わりません。全体として符号が反転するため、<InlineMath math="z = 1" /> は分枝点です。同様に <InlineMath math="z = -1" /> も分枝点です。
                </p>
                <p>
                    この関数を一価にするためには、分枝点 <InlineMath math="z=1" /> と <InlineMath math="z=-1" /> を結ぶ線分 <InlineMath math="[-1, 1]" /> を分枝切断として取り除き、領域 <InlineMath math="\mathbb{C} \setminus [-1, 1]" /> を考えれば十分です。<InlineMath math="[-1, 1]" /> を囲むような大きな円周経路を通った場合、<InlineMath math="z=1" /> と <InlineMath math="z=-1" /> による両方の因子の符号が反転し、<InlineMath math="(-1) \times (-1) = 1" /> となって元に戻るため、問題はありません。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="ハサミからリーマン面へ">
                <p>
                    分枝切断を入れて平面をハサミで切り開く操作は、関数を一価の正則関数として手軽に扱えるようにする便利で実用的な方法です。しかし、分枝切断上で関数が不連続になって「壁」ができてしまうという不自然さが残ります。
                </p>
                <p>
                    切り取って捨てるのではなく、「階層構造」を持つ別の層と繋ぎ合わせることで多価性を本質的に解消し、しかも全体として滑らかな幾何学的な空間を作り出す美しいアイデアがあります。これこそが、後の第3章で学ぶ「リーマン面」の概念です。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§1.4 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>解析接続の経路依存性により、1つの点に複数の値が対応する<b>多価関数</b>が生じる。（例：<InlineMath math="\log z, \sqrt{z}" />）</li>
                    <li>関数の周りを1周すると関数値が変わってしまう特異な点を<b>分枝点</b>と呼ぶ。</li>
                    <li>分枝点を結ぶ<b>分枝切断</b>で平面を切り開くことで、多価関数の1つの枝分かれ（<b>分枝</b>・一価正則関数）を切り出すことができる。</li>
                    <li>分枝切断による一価化は人工的であり、関数の自然な全体像（リーマン面）を理解するための前段階とも言える。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
