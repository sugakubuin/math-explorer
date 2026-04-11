import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function FundamentalGroupAndCoveringSpaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で学んだモノドロミー群の概念は、経路の選び方（ループ）と深く結びついていました。この「ループの分類」と「関数の多価性」の背後には、位相幾何学（トポロジー）の強力な理論が存在します。本節では、3-12 位相空間論II で学んだ基本群と被覆空間の概念を復習し、それらが複素解析においてどのように結びついているかを確認します。
            </p>

            <ContentBox type="remark" title="位相空間論からのトポロジーの復習">
                <p>
                    本節の内容は、3-12 位相空間論II で扱った「基本群」と「被覆空間」の理論を複素解析の文脈に翻訳して概観するものです。厳密な定義や一般的な位相空間での定理の証明は 位相空間論II の内容に譲り、ここでは「穴あき複素平面」における直感的な理解と具体例に焦点を当てます。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">基本群の復習</h2>

            <p>
                複素平面からいくつかの点を取り除いた領域（穴あき領域）におけるループ（閉曲線）は、ホモトピー（連続変形）によってどの程度「穴に引っかかっているか」で分類することができます。これが基本群のアイデアです。
            </p>

            <ContentBox type="example" title={<span>Example 2.2-1 (<InlineMath math="\mathbb{C} \setminus \{0\}" /> の基本群)</span>}>
                <p>
                    原点 <InlineMath math="z=0" /> を取り除いた領域 <InlineMath math="X = \mathbb{C} \setminus \{0\}" /> を考えます。この領域上のループは、「原点を反時計回りに何周するか」という整数（巻数）によって完全に分類されます。
                </p>
                <p>
                    原点を1周するループを <InlineMath math="\gamma" /> とすると、<InlineMath math="n" /> 周するループは <InlineMath math="\gamma^n" /> （<InlineMath math="n < 0" /> の場合は時計回りに <InlineMath math="|n|" /> 周）と同値になります。したがって、基本群は自然に加法群としての整数と同一視でき、
                </p>
                <BlockMath math="\pi_1(\mathbb{C} \setminus \{0\}) \cong \mathbb{Z}" />
                <p>
                    となります。<InlineMath math="\log z" /> の値がちょうど一周につき <InlineMath math="2\pi i" /> ずつずれる（整数倍のバリエーションがある）ことは、この基本群が <InlineMath math="\mathbb{Z}" /> であることと直接対応しています。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.2-2 (<InlineMath math="\mathbb{C} \setminus \{0, 1\}" /> の基本群)</span>}>
                <p>
                    穴が2つある領域 <InlineMath math="X = \mathbb{C} \setminus \{0, 1\}" /> では、状況はより複雑になります。ループは「原点の周りを回るループ <InlineMath math="a" />」と「点 <InlineMath math="z=1" /> の周りを回るループ <InlineMath math="b" />」を自由に組み合わせることができます。
                </p>
                <p>
                    「<InlineMath math="a" /> を回ってから <InlineMath math="b" /> を回る（<InlineMath math="ab" />）」経路と、「<InlineMath math="b" /> を回ってから <InlineMath math="a" /> を回る（<InlineMath math="ba" />）」経路は、間の「8の字の結び目」のような部分が解けないため、互いに連続変形できません。すなわち、基本群は非可換になります。
                </p>
                <p>
                    このように関係式を持たない生成元からなる群を自由群と呼び、この場合はランク2の自由群になります：
                </p>
                <BlockMath math="\pi_1(\mathbb{C} \setminus \{0, 1\}) \cong F_2" />
                <p>
                    超幾何関数のような複雑な微分方程式の解（多価関数）は、このような非可換なモノドロミー群を持つことが知られています。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">被覆空間と持ち上げ</h2>

            <p>
                多価関数を幾何学的に理解するための核心が「被覆空間」です。複素平面の領域を「下」にある底空間とみなし、その上に「多重に重なったシーツ」のような被覆空間を構成することで、多価性を見事に解消できます。
            </p>

            <ContentBox type="example" title={<span>Example 2.2-3 (<InlineMath math="\log z" /> の被覆空間)</span>}>
                <p>
                    複素指数関数 <InlineMath math="\exp : \mathbb{C} \to \mathbb{C} \setminus \{0\}" /> を考えます。これは全射であり、<InlineMath math="w = \exp(z)" /> とおくと、下の空間 <InlineMath math="\mathbb{C} \setminus \{0\}" /> の任意の点 <InlineMath math="w_0" /> に対して、上の空間 <InlineMath math="\mathbb{C}" /> では <InlineMath math="z_0 + 2n\pi i" /> （<InlineMath math="n \in \mathbb{Z}" />）という可算無限個の対応する点（ファイバー）が存在します。
                </p>
                <p>
                    <InlineMath math="\exp" /> は下の空間 <InlineMath math="\mathbb{C} \setminus \{0\}" /> の局所的な同相写像になっており、上の空間 <InlineMath math="\mathbb{C}" /> は「無限に重なったシーツ（螺旋階段）」のように被さっています。上の空間 <InlineMath math="\mathbb{C}" /> は単連結（穴がない）であるため、この被覆空間は<b>普遍被覆空間</b>と呼ばれます。
                </p>
                <p>
                    下の空間のループで1周回ると、上の空間では同じ点には戻らずに「一つ上のシーツ（<InlineMath math="2\pi i" /> だけずれた点）」に到着します。この「上の空間での曲線の終端のずれ」こそが、<InlineMath math="\log z" /> が多価になる理由の幾何学的表現に他なりません。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 2.2-4 (<InlineMath math="\sqrt{z}" /> の被覆空間)</span>}>
                <p>
                    関数 <InlineMath math="w \mapsto w^2" /> による写像 <InlineMath math="p(w) = w^2 : \mathbb{C} \setminus \{0\} \to \mathbb{C} \setminus \{0\}" /> を考えます。
                    下の空間の点 <InlineMath math="z \neq 0" /> に対して、上の空間には <InlineMath math="w = \pm \sqrt{z}" /> のちょうど2点が対応します。
                </p>
                <p>
                    これは「2枚のシーツ」が重なっている<b>2枚被覆</b>です。下の空間で原点を1周すると、上のシーツから下のシーツへ移動し、値の符号が反転します。もう1周すると下のシーツから上のシーツに戻り、元の値に復帰します。<InlineMath math="\sqrt{z}" /> が2価であることは、被覆の枚数が2枚であることと直接対応しています。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="解析接続と『道の持ち上げ』の対応">
                <p>
                    関数要素の解析接続を行うという操作は、トポロジーの言葉で言えば「底空間の曲線を、被覆空間上の曲線に持ち上げる（lifting）」操作と完全に一致します。
                </p>
                <p>
                    底空間でループを描いて戻ってきたとき、被覆空間での持ち上げられた曲線は一般に異なる点（別のシーツ上）に到達します。この「シーツ間の移動」を表現する群（被覆変換群）が、解析接続により関数要素がどう移動したかを記述する「モノドロミー群」と本質的に等価なのです。
                </p>
            </ContentBox>

            <ContentBox type="note" title="§2.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>基本群 <InlineMath math="\pi_1" /> は領域の「穴」の構造やループの巻数を捉え、多価関数の分岐の土台を与える。</li>
                    <li>指数関数や累乗などの写像を通じて、領域に「シーツ」を被せるような被覆空間が構成される。</li>
                    <li>解析接続は被覆空間への「道の持ち上げ」に対応しており、多価性はファイバーの多重性として幾何学的に理解できる。</li>
                    <li>モノドロミー群の代数構造は、被覆変換群（シーツ同士の入れ替え）と完全に一致する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
