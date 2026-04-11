import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function ConstructionOfRiemannSurfaces() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                前節で、リーマン面とは「局所的に複素平面と同じで、正則に貼り合わさった空間」であると定義しました。では、具体的にどのようにしてこのような空間を作るのでしょうか。本節では、多価関数の代表例である <InlineMath math="\log z" /> や <InlineMath math="\sqrt{z}" /> の定義域として、切り開いた複素平面群を貼り合わせてリーマン面を構成していく過程を見ていきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">log z のリーマン面</h2>

            <p>
                <InlineMath math="\log z" /> は原点に分枝点を持ち、原点を周回するごとに偏角 <InlineMath math="\arg z" /> が <InlineMath math="2\pi" /> 増え、値が <InlineMath math="2\pi i" /> ずつ加算される無限多価関数でした。これを一価の関数として定着させるためのリーマン面を作ります。
            </p>

            <ContentBox type="example" title={<span>Example 3.2-1 (<InlineMath math="\log z" /> のリーマン面の構成)</span>}>
                <p>
                    負の実軸 <InlineMath math="(-\infty, 0]" /> を分枝切断として取り除いた「穴あき（切れ目入り）の複素平面」を、無限枚用意します。これらに番号をつけて <InlineMath math="\mathbb{C}_n" /> (<InlineMath math="n \in \mathbb{Z}" />) とします。各 <InlineMath math="\mathbb{C}_n" /> の上では、偏角の範囲を <InlineMath math="(2n-1)\pi < \arg z < (2n+1)\pi" /> と制限し、この範囲での対数の枝を当てはめます。
                </p>
                <p>
                    次に、これらを貼り合わせます。<InlineMath math="\mathbb{C}_n" /> の負の実軸の「上側の切断面（<InlineMath math="\arg z \to (2n+1)\pi" />）」を、一つ上の平面 <InlineMath math="\mathbb{C}_{n+1}" /> の負の実軸の「下側の切断面（<InlineMath math="\arg z \to (2n+1)\pi" />）」へと接着します。
                </p>
                <p>
                    この接着をすべての整数 <InlineMath math="n" /> について行うと、らせん階段のように上へ下へ無限に続く立体的な曲面が出来上がります。これが <InlineMath math="\log z" /> のリーマン面です。
                </p>
                <p>
                    この曲面上にいる限り、原点を何周しても元のシーツには戻らず上のシーツあるいは下のシーツへと移動するだけなので、関数値は交差せず完全に一価になります。また、このらせん階段を引き伸ばして広げると、ちょうど通常の複素平面 <InlineMath math="\mathbb{C}" /> と同相（トポロジー的に同じ）になることがわかります。
                </p>
            </ContentBox>

            <ContentBox type="remark" title="指数写像との関係">
                <p>
                    この <InlineMath math="\log z" /> のリーマン面は、指数写像 <InlineMath math="\exp: \mathbb{C} \to \mathbb{C} \setminus \{0\}" /> の普遍被覆としての構造そのものです。らせん階段を真上から「影」として投影する写像が <InlineMath math="\exp" /> であり、らせん階段上で <InlineMath math="\log" /> を取ることは、単に「高さを読み取る（同相写像）」ことに相当します。
                </p>
            </ContentBox>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">√z と代数関数のリーマン面</h2>

            <p>
                有限多価の関数である代数関数の場合は、シーツの枚数が有限枚で済むため、貼り合わせ方が少し異なります。
            </p>

            <ContentBox type="example" title={<span>Example 3.2-2 (<InlineMath math="\sqrt{z}" /> のリーマン面)</span>}>
                <p>
                    <InlineMath math="\sqrt{z}" /> は2価関数です。よって、負の実軸で切り開いた平面を2枚用意します（<InlineMath math="\mathbb{C}_0, \mathbb{C}_1" /> とします）。
                </p>
                <p>
                    <InlineMath math="\mathbb{C}_0" /> の「上側の切断面」を <InlineMath math="\mathbb{C}_1" /> の「下側の切断面」に貼り合わせるのは先ほどと同じですが、<InlineMath math="\mathbb{C}_1" /> の「上側の切断面」は、今度は元の <InlineMath math="\mathbb{C}_0" /> の「下側の切断面」へクロスするように貼り合わせます。
                </p>
                <p>
                    こうすることで、原点を2周回ると元の <InlineMath math="\mathbb{C}_0" /> に確実に戻ってくるような「2枚のシーツ」からなる曲面ができあがります。一見すると自己交差してしまいますが、4次元空間内で考えれば交差せずに滑らかな曲面として実現できます。これもトポロジー的にはやはり複素平面 <InlineMath math="\mathbb{C}" /> と同相になります。
                </p>
            </ContentBox>

            <p>
                分枝点が増えると、より複雑なトポロジーを持つリーマン面が生まれます。
            </p>

            <ContentBox type="example" title={<span>Example 3.2-3 (<InlineMath math="\sqrt{z(z-1)}" /> のリーマン面)</span>}>
                <p>
                    <InlineMath math="f(z) = \sqrt{z(z-1)}" /> の分枝点は <InlineMath math="z = 0, 1" /> です。<InlineMath math="z = 0" /> と <InlineMath math="1" /> を結ぶ線分 <InlineMath math="[0, 1]" /> を分枝切断とし、切り目を入れた同じ平面を2枚（シート1とシート2）用意します。
                </p>
                <p>
                    この切り目の上側の縁をもう一枚のシートの下側の縁に、互い違いに貼り合わせます。
                    （これらを無限遠点を含めた拡張平面・球面上で行うと想像してください。）
                    切り目を通って裏のシートに行き、もう一度同じ切り目を通ると表のシートに帰ってきます。
                </p>
                <p>
                    この貼り合わせで作られた曲面は、球を2つくっつけたような形になりますが、境目がただ一つの円周であるため、少し引き伸ばすと1つの大きな球面（種数 0 のリーマン面）になることが確認できます。
                </p>
            </ContentBox>

            <ContentBox type="example" title={<span>Example 3.2-4 (<InlineMath math="\sqrt{z(z-1)(z-\lambda)}" /> のリーマン面)</span>}>
                <p>
                    さらに分枝点が増えた関数 <InlineMath math="f(z) = \sqrt{z(z-1)(z-\lambda)}" /> （<InlineMath math="\lambda \neq 0, 1" />）のリーマン面を考えます。分枝点は <InlineMath math="0, 1, \lambda, \infty" /> の4つになります。
                </p>
                <p>
                    これらの分枝点を結ぶ2つの切り目（例えば <InlineMath math="[0, 1]" /> と <InlineMath math="[\lambda, \infty]" />）を入れ、2枚の球面をそれぞれの切り目で互い違いに貼り合わせます。
                </p>
                <p>
                    この曲面を頭の中で引っ張って変形すると、チューブが繋がったような「ドーナツ型（トーラス）」になることがわかります。ドーナツには穴が一つ空いているため、これは「種数 1 のリーマン面」となります。
                </p>
            </ContentBox>

            <p>
                このように、解析接続や多価関数の振る舞いを追跡することで、自然に背後にある「曲面（リーマン面）」の全体的な形（トポロジー）が姿を現します。
            </p>

            <ContentBox type="note" title="§3.2 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li><InlineMath math="\log z" /> のリーマン面は、無限枚の複素平面をらせん階段状に貼り合わせて作られ、トポロジカルに <InlineMath math="\mathbb{C}" /> と同相である。</li>
                    <li><InlineMath math="\sqrt{z}" /> などの代数関数のリーマン面は、有限枚の面を互い違いに貼り合わせて作られる。</li>
                    <li>分枝点の数と配置によって、できあがるリーマン面の位相的性質（球面やドーナツ型など）が劇的に変化する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
