import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ContentBox from '../../../components/content/ContentBox';

export default function PicardAndMontelTheorems() {
    return (
        <section className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <p>
                ピカールの定理（特に大ピカール）の証明には、解析関数の驚異的な均一性を保証する「モンテルの定理」が深く関わっています。本節では、ピカールの定理が「正規族」の概念からどのように導かれるかの論理的な枠組みを概観し、その背後にある幾何学的な定理（ブロッホの定理）についても触れておきます。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">正規族による証明の枠組み</h2>

            <p>
                ピカールの定理の両方（大・小）は、「2つの値を避ける正則関数の族は正規族である」という強力な事実（モンテルの定理の強化形、§4.3）から統一的に導き出すことができます。この統一的な視点を持つことで、定理が魔法のような飛躍から、解析学の自然な帰結へと姿を変えます。
            </p>

            <p>
                この議論を支えるもう一つの重要な幾何学的結果が、関数の「像の大きさ」を下から見積もる「ブロッホ（Bloch）の定理」です。
            </p>

            <ContentBox type="proposition" title="Proposition 7.3-1 (ブロッホの定理)">
                <p>
                    単位円板 <InlineMath math="\mathbb{D}" /> 上で正則な関数 <InlineMath math="f(z)" /> が、正規化条件 <InlineMath math="f(0) = 0" /> かつ <InlineMath math="f'(0) = 1" /> を満たすとする。
                </p>
                <p>
                    このとき、<InlineMath math="f(z)" /> の像 <InlineMath math="f(\mathbb{D})" /> は、ある普遍的な定数 <InlineMath math="B > 0" /> （<b>ブロッホ定数</b>）を半径とする円板を必ず（完全な形で）内部に含む。
                </p>
                <p>
                    すなわち、関数 <InlineMath math="f" /> は、どのような形であれ、少なくとも半径 <InlineMath math="B" /> の「的」を完全に覆い尽くすほどの広がりを必ず持つ。
                </p>
            </ContentBox>

            <ContentBox type="proof" title="Proof">
                <p>
                    （証明の概略）<InlineMath math="f'(0) = 1" /> という条件から、原点の近くでは <InlineMath math="f" /> は局所的に単射（等角）であり、微小面積をほとんど変化させない。
                </p>
                <p>
                    ここから、円板内の適当な点を選んで像の面積の拡大率を評価し、関数が単射となる最大の円板を切り出す面積的・幾何学的な議論を行う。正規族の議論（アスコリ-アルツェラの定理）を用いて極限操作を正当化することで、像の中に確実に含まれる円板の最大半径の「下限」<InlineMath math="B" /> が <InlineMath math="0" /> より真に大きいことが証明される。
                </p>
                <div className="text-right text-slate-500 dark:text-slate-400">
                    <InlineMath math="\square" />
                </div>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-1">
                <p>
                    ブロッホ定数 <InlineMath math="B" /> の正確な値は現在でもわかっていませんが、下限としては <InlineMath math="B \geq \sqrt{3}/4 \approx 0.433" /> であることが知られています。上限については <InlineMath math="B \leq \Gamma(1/3)\Gamma(11/12) / (\sqrt{3}\Gamma(1/4)) \approx 0.4719" /> （アールフォルスらによる計算）と見積もられており、おそらくこれが真の値だろうと予想されています。単なる存在定理でありながら、この定数が現代数学の未解決問題として残っているのは非常に興味深い点です。
                </p>
            </ContentBox>

            <p>
                「微分が1である以上、どうしてもこれだけの領域を塗りつぶしてしまう（避けることができない）」というこの幾何学的な「硬さ」が、ピカールの定理の「値を避けることができない」という性質の直接的な原動力となります。
            </p>

            <hr className="my-8 border-slate-200 dark:border-slate-700" />

            <h2 className="text-2xl font-bold mt-8 mb-6">証明の論理的構造</h2>

            <p>
                正規族の概念を軸としたとき、ピカールの定理の対偶的な証明の流れは次のように美しく整理されます。
            </p>

            <ContentBox type="remark" title="証明の論理的フロー">
                <p>
                    <b>小ピカールの定理への流れ：</b>
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>関数 <InlineMath math="f" /> が全平面 <InlineMath math="\mathbb{C}" /> で <InlineMath math="0" /> と <InlineMath math="1" /> の2つの値を避ける整関数だと仮定する。</li>
                    <li>関数族 <InlineMath math="\{f_n(z) = f(nz)\}" /> を考える。これらはすべて <InlineMath math="0, 1" /> を避けるため、モンテルの定理の強化形により正規族となる。</li>
                    <li>正規族であることから、全平面上で有界な部分列を得るか（この場合リューヴィルの定理より定数）、あるいは一様に無限大へ発散するか（この場合 <InlineMath math="1/f" /> に対してリューヴィルを適用し定数）のどちらかしかない。</li>
                    <li>いずれにせよ、<InlineMath math="f" /> は定数になる。</li>
                </ol>
                <p>
                    <b>大ピカールの定理への流れ：</b>
                </p>
                <ol className="list-decimal list-inside space-y-1">
                    <li>関数 <InlineMath math="f" /> が真性特異点 <InlineMath math="z=0" /> の近傍で <InlineMath math="0" /> と <InlineMath math="1" /> を避けると仮定する。</li>
                    <li>穴あき円板をスケーリングした関数族 <InlineMath math="\{f_n(z) = f(z/2^n)\}" /> も <InlineMath math="0, 1" /> を避けるため正規族である。</li>
                    <li>正規族の極限の振る舞いを通じて、元の関数 <InlineMath math="f" /> が原点に向かって「有界なままで近づく」か「確定的な速度で無限大に発散する」ことのいずれかが導かれる。</li>
                    <li>これは原点が除去可能特異点か極であることを意味し、真性特異点であることに矛盾する。よって避けられる値は1つ以下である。</li>
                </ol>
            </ContentBox>

            <ContentBox type="example" title="Example 7.3-2">
                <p>
                    より直接的にブロッホの定理から小ピカールをイメージしてみましょう。もし整関数 <InlineMath math="f" /> が定数でなく（<InlineMath math="f'(z_0) \neq 0" />）、かつ多くの値を避けるとします。
                </p>
                <p>
                    全平面で定義されているため、無限に広がる定義域から切り出した大きな円板上でブロッホの定理などをスケーリングして適用すると、<InlineMath math="f" /> の像のなかに「いくらでも大きな半径の完全な（穴の空いていない）円盤」が含まれなければならなくなります。
                </p>
                <p>
                    しかし、もし <InlineMath math="f" /> が <InlineMath math="0, 1" /> といった特定の「点」を像として持たない場合、像に含まれる円盤の大きさがその「穴」の間隔によって制限されてしまい、「いくらでも大きな円盤を含める」ことと矛盾します。結果として、2つの値を避けたままで空間全域に正則に広がることは位相幾何学的に不可能となります。
                </p>
            </ContentBox>

            <p>
                このように、「値を避ける」という代数的な問題が、「像の大きさ」「正規性（まとまりの良さ）」という位相・幾何的な問題に帰着されるのが、複素解析の醍醐味です。この定性的な結果を、さらに「どのくらいの頻度で値を取るのか」と定量化したものが次節のネヴァンリンナ理論です。
            </p>

            <ContentBox type="note" title="§7.3 のまとめ">
                <ul className="list-disc list-inside space-y-1">
                    <li>ピカールの定理は大・小ともに、モンテルの定理の強化形（2値を避ける族は正規族）への帰着によって統一的かつ見通しよく証明される。</li>
                    <li>ブロッホの定理は、正則関数（微分が <InlineMath math="0" /> でない点において）の像が常に一定サイズ以上の完全な円板を含むことを保証し、正則関数の「硬さ」を幾何学的に表現している。</li>
                    <li>正規族という枠組みを得ることで、関数の極限操作が解析的に正当化され、特異点や全平面といった極端な状況下での決定的な論理（リューヴィルへの帰着など）が機能する。</li>
                </ul>
            </ContentBox>
        </section>
    );
}
